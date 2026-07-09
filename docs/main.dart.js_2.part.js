((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
dlK(d,e,f,g,h,i,j){return new A.a6t(j,g,d,i,f,h,e)},
a6t:function a6t(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.a=j},
ag3:function ag3(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHY:function cHY(d){this.a=d},
cI6:function cI6(d){this.a=d},
cI3:function cI3(d){this.a=d},
cI2:function cI2(d){this.a=d},
cI4:function cI4(d){this.a=d},
cI1:function cI1(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI0:function cI0(d){this.a=d},
cI_:function cI_(d){this.a=d},
cHZ:function cHZ(d){this.a=d},
dVF(){var x,w,v
try{w=B.AI()
x=w.grS(w)
if(J.a3(x)!==0&&!J.v(x,"null")&&!J.cJ(x,"file:"))return x}catch(v){}return"https://ngmy.org"},
dlI(d,e){var x=B.a([],y.h)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("iv_load_policy=3")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+C.h.bm(x,"&")},
dxS(d){var x=B.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+B.bh(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVG(d,e,f){var x,w,v=B.awP(d)
if(v!=null){if(f){x=A.dVF()
w=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+v+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+x+"',\n          mute: "+w+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return A.dxS(A.dlI(v,e))}return A.dxS(d)}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[5],A)
D=c[8]
A.a6t.prototype={
U(){return new A.ag3()}}
A.ag3.prototype={
a7n(d,e){var x,w=B.awP(e),v=this.a,u=v.x&&!this.w
if(w!=null&&v.f){d.removeAttribute("srcdoc")
d.src=A.dlI(w,u)
return}if(v.f){x=e.toLowerCase()
v=C.b.t(x,"tiktok.com/player")||C.b.t(x,"instagram.com")||C.b.t(x,"facebook.com/plugins")}else v=!1
if(v){d.removeAttribute("src")
d.srcdoc=A.dVG(e,u,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEq(){var x,w=this
if(w.w)return
w.p(new A.cHY(w))
x=w.e
if(x!=null)w.a7n(x,w.a.d)},
a0(){var x,w,v=this
v.a7()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&B.aT()
v.d=x
try{$.Gs()
$.pG().uR(x,new A.cI6(v),!0)}catch(w){v.r=!0
v.f=!1}},
b1(d){var x,w=this
w.bf(d)
if(d.d!==w.a.d&&w.e!=null){w.p(new A.cI_(w))
x=w.e
x.toString
w.a7n(x,w.a.d)}},
C(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){x=o.a.e?6:12
w=C.e.l(0.55)
v=y.e
w=B.a([B.X(C.Zy,w,n,n,o.a.e?22:36)],v)
if(!o.a.e)C.h.A(w,B.a([C.Q,B.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,B.l(n,n,C.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),C.U,n,n)],v))
return B.fR(B.aI(new B.J(new B.V(x,x,x,x),B.w(w,C.o,C.i,C.a_,0,C.q),n),n,n,n),C.A,!0)}u=o.a.e?14:28
x=o.d
x===$&&B.c()
w=y.e
x=B.a([B.a1O(n,C.tt,x)],w)
if(o.f)x.push(B.fR(B.aI(new B.ab(u,u,D.aum,n),n,n,n),C.cM,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){v=C.A.l(0.35)
t=C.A.l(0.72)
s=B.m(14)
r=B.O(C.bp,C.w,1)
q=B.X(C.L5,C.e.l(0.9),n,n,22)
p=C.e.l(0.92)
x.push(B.eV(0,B.aJ(!1,C.V,!0,n,B.aP(!1,n,!0,B.aI(B.t(n,B.H(B.a([q,C.an,B.d("Tap for sound",n,n,n,n,n,n,B.l(n,n,p,n,n,n,n,n,n,n,n,o.a.e?11:14,n,n,C.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],w),C.o,n,C.i,C.a_,0,n,n),C.j,n,n,new B.r(t,n,r,s,n,n,C.p),n,n,n,C.IO,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEp(),n,n,n,n,n,n,n),C.j,v,0,n,n,n,n,n,C.a9)))}w=o.a
if(!w.e&&B.awP(w.d)!=null)x.push(B.aQ(8,B.jp(D.aPw,D.d2I,new A.cHZ(o),B.iO(n,n,C.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new B.aF(C.ak,n,C.bc,C.y,x,n)}}
var z=a.updateTypes(["~()"])
A.cHY.prototype={
$0(){return this.a.w=!0},
$S:0}
A.cI6.prototype={
$1(d){var x=this.a,w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
w.allowFullscreen=!0
w.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
w.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
x.e=w
x.a7n(w,x.a.d)
w=x.e
w.toString
v=y.c.c
B.hh(w,"load",new A.cI3(x),!1,v)
w=x.e
w.toString
B.hh(w,"error",new A.cI4(x),!1,v)
B.bN(C.kk,new A.cI5(x),y.f)
x=x.e
x.toString
return x},
$S:589}
A.cI3.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new A.cI2(x))},
$S:45}
A.cI2.prototype={
$0(){return this.a.f=!1},
$S:0}
A.cI4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new A.cI1(x))},
$S:45}
A.cI1.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
A.cI5.prototype={
$0(){var x=this.a
if(x.c!=null&&x.f)x.p(new A.cI0(x))},
$S:12}
A.cI0.prototype={
$0(){return this.a.f=!1},
$S:0}
A.cI_.prototype={
$0(){var x=this.a
x.f=!0
x.w=x.r=!1},
$S:0}
A.cHZ.prototype={
$0(){var x,w=B.awP(this.a.a.d)
if(w==null)return
x=window
x.toString
C.kP.SA(x,"https://www.youtube.com/watch?v="+w,"_blank")},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.ag3.prototype,"gbEp","bEq",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a6t,B.ae)
x(A.ag3,B.af)
w(B.H2,[A.cHY,A.cI2,A.cI1,A.cI5,A.cI0,A.cI_,A.cHZ])
w(B.tG,[A.cI6,A.cI3,A.cI4])})()
B.cVN(b.typeUniverse,JSON.parse('{"a6t":{"ae":[],"p":[]},"ag3":{"af":["a6t"]}}'))
var y={h:B.b1("a2<o>"),e:B.b1("a2<p>"),c:B.b1("xr<cL>"),f:B.b1("~")};(function constants(){D.aum=new B.ha(2,null,null,null,null,C.a6,null,null,null,null)
D.aPw=new B.a8(C.rA,16,C.a6,null,null,null)
D.d2I=new B.B("Open in YouTube",null,C.iX,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["3GSFA4670YIMZSFQNiQL+3yoeXk="]=a.current})($__dart_deferred_initializers__);