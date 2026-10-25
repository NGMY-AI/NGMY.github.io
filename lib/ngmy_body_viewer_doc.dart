/// The page that draws the Body Explorer on the web: a real 3D engine (three.js) with a depth buffer,
/// smooth shading, soft studio lighting and glossy, wet-looking organs and muscles.
///
/// The app talks to it with messages:
///  in:  {t:'init', data: bytes}   the anatomy file (assets/data/body3d.bin)
///       {t:'state', layers:[..], skinMode, tone:'#rrggbb', sel, bpm, spin}
///       {t:'focus', group}        fly in to a part (null = whole body)
///       {t:'reset'}               turn back to the start view
///       {t:'shot'}                take a picture
///  out: {ngmyBody:'ready'} {ngmyBody:'pick', group} {ngmyBody:'shot', data} {ngmyBody:'error', text}
String ngmyBodyViewerDocument(String threeJs) {
  final lib = threeJs.replaceAll('</script', '<\\/script');
  return '''<!doctype html>
<html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<style>
html,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}
canvas{display:block;width:100%;height:100%;outline:none}
#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}
</style></head>
<body><div id="msg">Loading the body…</div>
<script>$lib</script>
<script>
(function(){
'use strict';
function post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }
window.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });
var THREE=window.THREE;
var renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=0.88;
renderer.setClearColor(0x07080f,1);
document.body.appendChild(renderer.domElement);

var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);

// A soft studio environment so glossy parts have something to reflect.
(function(){
  var env=new THREE.Scene();
  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,
    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));
  env.add(sky);
  function box(w,h,x,y,z,k,col){
    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));
    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);
  }
  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox
  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill
  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip
  var pm=new THREE.PMREMGenerator(renderer);
  scene.environment=pm.fromScene(env,0.03).texture;
  pm.dispose();
})();

scene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));
var key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);
var rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);
var fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);

// Floor shadow.
(function(){
  var c=document.createElement('canvas'); c.width=c.height=128;
  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);
  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle=r; g.fillRect(0,0,128,128);
  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));
  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);
  window.__floor=m;
})();

var pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();
scene.add(pitchG); pitchG.add(yawG); yawG.add(model);
pitchG.add(window.__floor); // the shadow turns with the pitch only

var parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}
var S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};
var yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;
var target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);
var DIST=3.2;

function ghostMat(){
  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,
    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',
    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',
    uniforms:{k:{value:1}}});
}
// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).
function faceYou(m){ m.onBeforeCompile=function(sh){
  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');
  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }
function makeMat(layer,color,fixed,group){
  var c=new THREE.Color(color);
  var m;
  if(layer==='skin'){
    if(group==='Hair'){
      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});
    }else{
      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});
      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };
      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin
    }
  }else if(layer==='muscle'){
    c.multiplyScalar(.72);
    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});
  }else if(layer==='organ'){
    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});
  }else if(layer==='bone'){
    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});
  }else{
    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});
  }
  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);
  return m;
}

var LAYERS=['skin','muscle','organ','bone','vessel'];
function load(bytes){
  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;
  var heads=[];
  for(var i=0;i<n;i++){
    var len=d.getUint8(o++), name='';
    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));
    o+=len;
    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;
    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;
    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});
  }
  for(var gi=0;gi<heads.length;gi++){
    var h=heads[gi];
    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;
    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;
    var pos=new Float32Array(h.nv*3);
    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;
    for(var v=0;v<h.nv;v++){
      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;
      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;
      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;
      sx+=x;sy+=y;sz+=z;
    }
    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);
    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.
    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}
    var geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
    geo.setIndex(new THREE.BufferAttribute(idx,1));
    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }
    geo.computeBoundingSphere();
    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');
    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);
    var mesh=new THREE.Mesh(geo,mat);
    mesh.position.set(cx,cy,cz);
    mesh.userData.part=gi;
    model.add(mesh);
    var back=null;
    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),
      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});
  }
  weldSkin();
  document.getElementById('msg').style.display='none';
  applyState();
  post({ngmyBody:'parts',count:parts.length});
}

// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.
// The main direction of the surface at every point: it does not matter which way a triangle was wound.
function tensorNormals(geo){
  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;
  var T=new Float64Array(nv*6);
  for(var t=0;t<idx.length;t+=3){
    var a=idx[t],b=idx[t+1],d=idx[t+2];
    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];
    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];
    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);
    if(ar<1e-14) continue;
    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];
    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }
  }
  var nrm=new Float32Array(nv*3);
  for(var v=0;v<nv;v++){
    var k2=v*6, x=.577,y=.577,z=.577;
    for(var it=0;it<10;it++){
      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;
      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;
    }
    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;
  }
  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));
}

function weldSkin(){
  var map=new Map(), list=[];
  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }
  for(var i=0;i<parts.length;i++){
    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;
    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;
    var keys=new Array(pos.length/3);
    for(var v=0;v<keys.length;v++){
      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);
      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }
      keys[v]=e;
    }
    for(var t=0;t<idx.length;t+=3){
      var a=idx[t],b=idx[t+1],d=idx[t+2];
      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];
      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];
      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;
      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];
      for(var q=0;q<3;q++){
        var e2=keys[ids[q]];
        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces
        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without
      }
    }
    list.push({p:p,keys:keys});
  }
  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.
  for(var j=0;j<list.length;j++){
    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;
    for(var v2=0;v2<L.keys.length;v2++){
      var e3=L.keys[v2];
      if(!e3.done){
        var x=.577,y=.577,z=.577;
        for(var it=0;it<10;it++){
          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;
          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;
        }
        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }
        e3.n=[x,y,z]; e3.done=true;
      }
      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);
    }
    nrm.needsUpdate=true;
  }
}

function innerOn(){ return S.layers.length>0; }
function partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }
var tmpC=new THREE.Color();
function applyState(){
  var tone=new THREE.Color(S.tone);
  for(var i=0;i<parts.length;i++){
    var p=parts[i], on=partOn(p);
    var ghost=p.layer==='skin'&&S.skinMode===1;
    p.mesh.visible=on;
    if(!on) continue;
    if(ghost){
      if(!p.ghost) p.ghost=ghostMat();
      p.mesh.material=p.ghost;
      p.mesh.renderOrder=5;
      continue;
    }
    p.mesh.material=p.mat;
    p.mesh.renderOrder=0;
    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }
    var a=1;
    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;
    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;
  }
}

function focusOn(group){
  idle=0;
  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }
  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;
  for(var i=0;i<parts.length;i++){
    var p=parts[i]; if(p.group!==group) continue;
    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;
    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;
  }
  if(!n) return;
  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);
  targetGoal.copy(c);
  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));
}

window.addEventListener('message',function(e){
  var m=e.data; if(!m||typeof m!=='object') return;
  try{
    if(m.t==='init'){ load(m.data); }
    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }
    else if(m.t==='focus'){ focusOn(m.group); }
    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }
    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }
  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }
});

// ── Touch and mouse: drag to turn, pinch to zoom, tap to pick ──
var pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;
var el=renderer.domElement;
el.addEventListener('pointerdown',function(e){
  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;
  var ids=Object.keys(pts);
  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }
  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }
});
el.addEventListener('pointermove',function(e){
  var p=pts[e.pointerId]; if(!p) return; idle=0;
  var ids=Object.keys(pts);
  if(ids.length>=2){
    pts[e.pointerId]={x:e.clientX,y:e.clientY};
    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);
    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));
    return;
  }
  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;
  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;
  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));
});
function up(e){
  var had=pts[e.pointerId]; delete pts[e.pointerId];
  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);
  if(Object.keys(pts).length===0) startPos=null;
}
el.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);
el.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});

var ray=new THREE.Raycaster();
function tap(x,y){
  idle=0;
  var r=el.getBoundingClientRect();
  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);
  var list=[];
  for(var i=0;i<parts.length;i++){
    var p=parts[i];
    if(!p.mesh.visible) continue;
    if(p.layer==='skin'&&innerOn()) continue;
    list.push(p.mesh);
  }
  var hits=ray.intersectObjects(list,false);
  var g=null;
  if(hits.length){ g=parts[hits[0].object.userData.part].group; }
  post({ngmyBody:'pick',group:g});
}

function resize(){
  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;
  renderer.setSize(w,h,false);
  camera.aspect=w/Math.max(1,h);
  // Keep the whole body in view on a narrow screen as well as a wide one.
  camera.fov=19.3;
  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }
  camera.updateProjectionMatrix();
}
window.addEventListener('resize',resize); resize();

var last=performance.now();
function render(){
  var beat=(t*S.bpm/60)%1;
  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));
  var breath=1+0.05*Math.sin(t*1.3);
  var pulse=0.5+0.5*Math.sin(t*6);
  for(var i=0;i<parts.length;i++){
    var p=parts[i]; if(!p.mesh.visible) continue;
    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);
    if(p.mesh.material===p.mat){
      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }
      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }
      else { p.mat.emissive.setRGB(0,0,0); }
    }
  }
  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;
  model.position.set(-target.x,-target.y,-target.z);
  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);
  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }
  window.__floor.position.y=-target.y-0.002;
  renderer.render(scene,camera);
}
function frame(now){
  requestAnimationFrame(frame);
  var dt=Math.min(0.05,(now-last)/1000); last=now;
  t+=dt; idle+=dt;
  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;
  var k=1-Math.exp(-dt*5);
  zoom+=(zoomGoal-zoom)*k;
  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;
  if(parts.length) render();
}
requestAnimationFrame(frame);
post({ngmyBody:'ready'});
})();
</script></body></html>''';
}
