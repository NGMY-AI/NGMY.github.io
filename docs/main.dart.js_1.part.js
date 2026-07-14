((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
evK(d,e){A.a3(d,!1).cz(A.eJ(new C.dwL(e),!0,null,x.H))},
a_Z(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_Z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qo()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.am(new A.bc(n,B.aO,B.aC),t)
w=3
return A.b(A.dA(B.L,new C.dwK(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_Z)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eaQ(r)
if(q==null){d.H(x.q).f.T(D.cSt)
w=1
break}w=4
return A.b(A.bG(B.im,null,x.H),$async$a_Z)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dNe=n
p=C.eaK(n)
n=$.Ht()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dAT(q)
d.H(x.q).f.T(A.bo(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_Z,v)},
dNh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"label")
w=J.k(w==null?"Virtual Device":w)
v=d.h(0,"serialNumber")
v=J.k(v==null?"":v)
u=d.h(0,"modelName")
u=J.k(u==null?"NGMY Virtual Phone":u)
t=d.h(0,"deviceId")
t=J.k(t==null?"":t)
s=d.h(0,"macAddress")
s=J.k(s==null?"":s)
r=d.h(0,"imei")
r=J.k(r==null?"":r)
q=d.h(0,"osName")
q=J.k(q==null?"NGMY OS":q)
p=d.h(0,"osVersion")
p=J.k(p==null?"1.0":p)
o=d.h(0,"virtualCity")
o=J.k(o==null?"Unknown":o)
n=d.h(0,"virtualCountry")
n=J.k(n==null?"":n)
m=A.aU(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aU(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oB(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
L5(d){return C.eaT(d)},
eaT(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L5=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$L5)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aB(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eC(r,x.f)
k=A.dh(k,new C.btX(),k.$ti.j("G.E"),x.k)
j=A.S(k).j("ai<G.E>")
i=A.z(new A.ai(k,new C.btY(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dNj(q)
w=12
return A.b(C.L4(a3,p),$async$L5)
case 12:u=p
w=1
break
case 11:t=2
w=9
break
case 7:t=6
a1=s.pop()
w=9
break
case 6:w=2
break
case 9:case 5:o=A.aJ(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dNh(A.U(n,x.N,x.z))
l=C.dNj(A.a([m],x.e))
w=21
return A.b(C.L4(a3,l),$async$L5)
case 21:u=l
w=1
break
case 20:t=2
w=18
break
case 16:t=15
a2=s.pop()
w=18
break
case 15:w=2
break
case 18:case 14:q=C.eaR()
w=22
return A.b(C.L4(a3,q),$async$L5)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L5,v)},
dNj(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btP(),w).en(0),u=new A.E(d,new C.btQ(),w).en(0),t=new A.E(d,new C.btR(),w).en(0),s=new A.E(d,new C.btS(),w).en(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dAU(null,q,u,t,v,s));++q}return r},
aAC(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L5(d),$async$aAC)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.dj(t,new C.btT(),s).en(0)
p=r.dj(t,new C.btU(),s).en(0)
o=r.dj(t,new C.btV(),s).en(0)
n=r.dj(t,new C.btW(),s).en(0)
m=C.dAU(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L4(d,t),$async$aAC)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAC,v)},
L4(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L4)
case 2:u=g
t=B.b.i(d)
s=J.aX(e,new C.btO(),x.P)
s=A.z(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L4)
case 3:return A.h(null,v)}})
return A.i($async$L4,v)},
eaR(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dt(20,x.k)
for(w=0;w<20;++w)q[w]=C.dAU(w,w,t,s,u,r)
return q},
dAU(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jT(),h=d==null,g=D.a8S[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8S[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bD(256)
n=new A.E(p,new C.btN(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bD(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b6(B.l.h1(i.bD(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c2h[w]
j=D.bTS[w]
return new C.oB("vd_"+1000*Date.now()+"_"+e+"_"+i.bD(99999),"Device "+B.b.b6(B.l.q(e+1),2,"0"),u,k,C.eaS(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a0())},
eaS(d,e){var w,v=J.dt(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b6(B.l.h1(d.bD(256),16),2,"0")
return B.h.fA(v)},
dwL:function dwL(d){this.a=d},
dwK:function dwK(d,e){this.a=d
this.b=e},
dwG:function dwG(d){this.a=d},
dwH:function dwH(d){this.a=d},
dwI:function dwI(d){this.a=d},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
Oz:function Oz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oB:function oB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r},
btX:function btX(){},
btY:function btY(){},
btP:function btP(){},
btQ:function btQ(){},
btR:function btR(){},
btS:function btS(){},
btT:function btT(){},
btU:function btU(){},
btV:function btV(){},
btW:function btW(){},
btO:function btO(){},
btN:function btN(){},
L3:function L3(d,e){this.c=d
this.a=e},
aiq:function aiq(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cV1:function cV1(){},
cV0:function cV0(d,e){this.a=d
this.b=e},
cUZ:function cUZ(d){this.a=d},
cV_:function cV_(d,e){this.a=d
this.b=e},
cV2:function cV2(d){this.a=d},
cV7:function cV7(d){this.a=d},
cV6:function cV6(d){this.a=d},
cV8:function cV8(d,e){this.a=d
this.b=e},
cV5:function cV5(d,e,f){this.a=d
this.b=e
this.c=f},
cV4:function cV4(d,e){this.a=d
this.b=e},
cV3:function cV3(d,e){this.a=d
this.b=e},
cV9:function cV9(d){this.a=d},
Y8:function Y8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aO_:function aO_(d,e){this.c=d
this.a=e},
L2:function L2(d,e){this.c=d
this.a=e},
aPd:function aPd(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cUW:function cUW(d){this.a=d},
cUX:function cUX(d){this.a=d},
cUY:function cUY(d){this.a=d},
cUV:function cUV(d,e){this.a=d
this.b=e},
cUS:function cUS(d){this.a=d},
cUT:function cUT(d){this.a=d},
cUR:function cUR(d,e){this.a=d
this.b=e},
cUU:function cUU(d){this.a=d},
cUQ:function cUQ(d){this.a=d},
aWm:function aWm(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aWn:function aWn(d,e,f){this.c=d
this.d=e
this.a=f},
aPj:function aPj(d,e){this.c=d
this.a=e},
aWl:function aWl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dab:function dab(d){this.a=d},
dac:function dac(d){this.a=d},
aQG:function aQG(d){this.a=d},
aK5:function aK5(d,e){this.c=d
this.a=e},
eaQ(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eaP(v)
if(u!=null)return new C.qS(w,C.dAS(u,!1),D.agu,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eaO(v)
if(t!=null)return new C.qS(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agv,"TikTok",q)
s=C.eaN(w,v)
if(s!=null)return s
r=C.eaM(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qS(w,w,D.czb,"Video",q)
return q},
eaN(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qS(d,"https://www.instagram.com/reel/"+w+u,D.PD,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qS(d,"https://www.instagram.com/p/"+w+u,D.PD,t,null)}return null},
eaM(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qS(d,"https://www.facebook.com/plugins/video.php?href="+A.fh(2,d,B.bi,!1)+"&show_text=false&width=734",D.agw,"Facebook",null)},
eaP(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dA(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eaO(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dA(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
L6:function L6(d,e){this.a=d
this.b=e},
qS:function qS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8j:function a8j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aPe:function aPe(d,e){var _=this
_.d=$
_.cs$=d
_.aF$=e
_.c=_.a=null},
aQL:function aQL(d,e){this.c=d
this.a=e},
cZP:function cZP(d){this.a=d},
cZQ:function cZQ(d){this.a=d},
Gl:function Gl(d,e){this.c=d
this.a=e},
anL:function anL(){},
dNi(d,e,f,g,h,i){return new C.a8k(i,f,h,e,g,d)},
eun(d){var w=window
w.toString
A.fV(w,"message",new C.dsP(d),!1,x._)},
a8k:function a8k(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
air:function air(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cVa:function cVa(d){this.a=d},
cVj:function cVj(d){this.a=d},
cVg:function cVg(d){this.a=d},
cVf:function cVf(d){this.a=d},
cVh:function cVh(d){this.a=d},
cVe:function cVe(d){this.a=d},
cVi:function cVi(d){this.a=d},
cVd:function cVd(d){this.a=d},
cVc:function cVc(d){this.a=d},
cVb:function cVb(d){this.a=d},
dsP:function dsP(d){this.a=d},
eaI(){var w,v,u
try{v=A.y1()
w=v.gv8(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cF(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dAS(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btL(d){var w=A.ao(y.c,!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
dNd(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eaJ(d,e,f){var w,v,u=C.btL(d)
if(u!=null){if(f){w=C.eaI()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dNd(C.dAS(u,e))}return C.dNd(d)},
eaK(d){if(d<=4)return 0
return B.l.ar(d-1,4)*4},
eaL(d){var w
if($.Qo().a==null)return!1
w=$.Ht().a
return d>=w&&d<w+4},
dNg(){var w=$.aAB
if(w!=null)w.a9(0)
$.aAB=null
$.Ht().sv(0,0)},
dNf(){var w,v,u,t=$.Qo()
if(t.a==null)return
w=$.aAB
if(w!=null)w.a9(0)
v=$.dNe
if(v<=4){t=t.a
t.toString
C.dAT(t)
return}w=$.Ht()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dAT(t)},
dAT(d){var w=$.aAB
if(w!=null)w.a9(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aAB=A.dy(A.dc(0,0,0,0,0,w),C.euC())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oz.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.L(B.ab.k(0.25),B.u,1),r=A.W(this.d,B.ab,w,w,14)
return A.t(w,A.H(A.a([r,B.fD,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.j,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hm,w,w,w)}}
C.oB.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L3.prototype={
W(){return new C.aiq(A.a([],x.e))},
gdR(){return this.c}}
C.aiq.prototype={
a_(){var w=this
w.a3()
$.Ht().aw(0,w.gazO())
C.eun(w.gbrK())
w.a_o()},
br9(){if(this.c!=null)this.n(new C.cV1())},
brL(){C.dNf()},
p(){$.Ht().Y(0,this.gazO())
C.dNg()
$.Qo().sv(0,null)
this.a2()},
a_o(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L5(t.a.c),$async$a_o)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cV0(t,s))
$.btM=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a_o,v)},
W7(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cUZ(t))
w=3
return A.b(C.aAC(t.a.c),$async$W7)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cV_(t,s))
$.btM=J.a4(t.d)
t.c.H(x.q).f.T(A.bo(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W7,v)},
btP(d){var w=this.c
w.toString
A.a3(w,!1).cz(A.eJ(new C.cV2(d),!1,null,x.H))},
bus(){var w=this.c
w.toString
return C.a_Z(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.ft:B.bA,s=A.bV(!0,A.v(A.a([new A.F(D.YN,new A.jc(new C.cV7(w),v),v),A.I(w.e?B.nI:new A.lv($.Qo(),new C.cV8(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ad,!0,!0)
return A.c1(v,t,s,v,!1,!1,A.au7(B.ab,B.Ij,B.mU,D.dh0,w.e?v:new C.cV9(w)),v)}}
C.Y8.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.G,B.ab.k(0.18),B.dw,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8j(n,!0,!C.eaL(w),"Fold "+(B.l.ar(w,4)+1)+"/"+B.l.ar(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.kd,B.nR,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.k,0,B.q),B.j,B.Aa,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.T,!0,u,A.aK(!1,t,!0,A.v(A.a([A.I(A.t(u,A.bS(p,A.f8(A.v(A.a([new C.aO_(o,u),A.I(n,1),A.t(u,A.H(A.a([A.W(B.CM,B.ab.k(0.85),u,u,9),D.cOa,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.k,0,u,u),B.j,B.ax,u,u,u,u,u,u,D.aHv,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aA),B.j,u,u,new A.p(u,u,r,s,q,D.a29,B.p),u,u,u,u,B.hn,u,u,u),1),B.aK,A.d(o.b,u,1,B.at,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.M,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.at,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.at,u,u,u,A.l(u,u,B.ab.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a4)}}
C.aO_.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gad(this.c.c.split("-")),w,w,B.at,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tE,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.ax,w,w,w,w,w,w,B.YA,w,w,w)}}
C.L2.prototype={
W(){return new C.aPd()}}
C.aPd.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.ft:B.bA,t=A.aQ(w,w,w,w,B.a1f,w,w,w,new C.cUW(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c1(w,u,A.bV(!0,A.v(A.a([new A.F(D.YN,A.H(A.a([t,A.I(new A.KS(A.H(A.a([A.I(new A.F(B.js,A.d(s.b+" \xb7 "+s.c,w,1,B.at,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.T,!0,w,A.aK(!1,w,!0,new A.F(B.bd,A.W(B.hr,B.ab,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cUX(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a4)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.I(new A.lv($.Qo(),new C.cUY(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aWm.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.ab.k(0.35),B.f7,28),new A.a9(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dNi(new A.d1(v+"_full_"+u,x.W),!1,u,!1,w.gaPL(),v+"_full")
w=v}else w=new C.aPj(t.r,s)}else w=new C.aK5(m,s)
else w=D.dou
return A.t(s,A.bS(n,A.f8(A.v(A.a([new C.aWn(m,l,s),A.I(w,1),new C.aWl(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aA),B.j,s,s,new A.p(s,s,o,q,p,D.a29,B.p),s,r*2.05,s,s,B.bW,s,s,r)}}
C.aWn.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dn(r)
r=A.h8(r)
w=new A.dK(q,r)
v=w.gKu()===0?12:w.gKu()
r=B.b.b6(B.l.q(r),2,"0")
q=(q<12?B.hk:B.jm)===B.hk?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nt,s,s,s),B.b8,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bL,D.aTd,B.dQ,D.aSn,B.dQ,D.aTi],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.H(A.a([A.W(B.CF,B.ab.k(0.9),s,s,12),B.dQ,A.I(A.d(u.c,s,s,B.at,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.ax,s,s,s,s,s,s,D.aIz,s,s,s)}}
C.aPj.prototype={
B(d){var w=null
return A.t(w,A.aE(A.v(A.a([A.W(B.C5,B.e.k(0.35),w,w,40),B.Y,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eQ(D.aWR,D.d41,this.c,A.e3(w,w,w,w,w,w,w,w,w,B.ab,w,w,w,w,w,new A.aH(B.ab.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.j,B.Aa,w,w,w,w,w,w,w,w,w,1/0)}}
C.aWl.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azF(B.Cz,"YouTube",s===0,r,new C.dab(u))
s=u.azF(B.kV,"Device",s===1,r,new C.dac(u))
w=r?"Power off":"Power on"
v=r?D.a0r:D.aQn
return A.t(t,A.H(A.a([q,B.ai,s,B.b8,A.aQ(t,t,t,t,A.W(v,r?B.bP:B.ht,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.ax,t,t,t,t,t,t,D.aIa,t,t,t)},
azF(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bf
else w=f?B.ab:B.au
v=f&&g?B.ab.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aC(!1,B.T,!0,u,A.aK(!1,A.m(10),!0,new A.F(B.o3,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a4),1)}}
C.aQG.prototype={
B(d){return D.awB}}
C.aK5.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kq,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u3("Serial",u.c),q=w.u3("Model",u.d),p=w.u3("Device ID",u.e),o=w.u3("IMEI",u.r),n=w.u3("MAC",u.f),m=w.u3("OS",u.w+" "+u.x),l=w.u3("Location",u.y+", "+u.z),k=w.u3("Coordinates",B.m.a7(u.Q,4)+", "+B.m.a7(u.as,4)),j=w.u3("Timezone",u.at)
u=u.ax
return A.e7(A.a([t,B.aK,s,B.ae,r,q,p,o,n,m,l,k,j,w.u3("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bd,v,v,B.an,!1)},
u3(d,e){var w=null
return new A.F(B.da,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.d(e,w,w,w,w,w,w,D.cVT,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.L6.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qS.prototype={
gaPL(){var w=this.c
return w===D.agu||w===D.agv||w===D.PD||w===D.agw}}
C.a8j.prototype={
W(){return new C.aPe(null,null)}}
C.aPe.prototype={
a_(){this.a3()
var w=A.bg(null,B.rS,null,1,null,this)
w.fS(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b_2()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cA(t,new A.p(t,t,t,t,t,new A.ab(B.bX,B.bO,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.bs),q=x.Y,p=u.d
p===$&&A.c()
p=A.cf(B.cN,p,t)
w=B.e.k(0.92)
q=A.aE(new A.cK(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bk.T>")),!1,A.W(B.kd,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nR
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQL(s,t),r,q,A.aA(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.M,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.M,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ax(B.ac,t,B.b6,B.r,s,t)}}
C.aQL.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lc(u,B.J,new C.cZP(this),B.bS,!0,w,w,new C.cZQ(this),w)
return new C.Gl(v,w)}}
C.Gl.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.jh,B.UC],x.O),B.kd)
break
case 1:w=new A.aO(A.a([B.Aa,D.aBQ],x.O),B.lP)
break
case 2:w=new A.aO(A.a([D.aDB,D.aBf],x.O),B.Cd)
break
case 3:w=new A.aO(A.a([B.W,B.dH],x.O),B.Cl)
break
case 4:w=new A.aO(A.a([B.ax,B.aM],x.O),B.om)
break
default:w=u}v=w.a
return A.t(u,A.aE(A.W(w.b,B.ab.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.p(u,u,u,u,u,new A.ab(B.aB,B.aG,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anL.prototype={
p(){var w=this,v=w.aF$
if(v!=null)v.Y(0,w.gd_())
w.aF$=null
w.a2()},
bg(){this.bt()
this.bs()
this.d0()}}
C.a8k.prototype={
W(){return new C.air()}}
C.air.prototype={
a9x(d,e){var w,v=C.btL(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dAS(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eaJ(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bKh(){var w,v=this
if(v.w)return
v.n(new C.cVa(v))
w=v.e
if(w!=null)v.a9x(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.z0()
$.oa().qG(w,new C.cVj(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cVc(v))
w=v.e
w.toString
v.a9x(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0G,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.Q,n,n)],v))
return A.f8(A.aE(new A.F(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.J1(n,B.oy,w)],v)
if(o.f)w.push(A.f8(A.aE(new A.aa(28,28,D.axR,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bf,B.u,1)
q=A.W(B.MG,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.ed(0,A.aC(!1,B.T,!0,n,A.aK(!1,n,!0,A.aE(A.t(n,A.H(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.j,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,D.Y5,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbKg(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a4)))}v=C.btL(o.a.d)
if(v!=null)w.push(A.aA(8,A.jf(D.aUK,D.dc1,new C.cVb(o),A.j5(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ax(B.ac,n,B.b6,B.r,w,n)}}
var z=a.updateTypes(["o(oB)","~()","L3(P)","oB(Z<@,@>)","a0(oB)","Z<o,@>(oB)","aD<~>()","L2(P)","lv<K>(P,qS?,q?)","Y8(P,K)","uD(P,qS?,q?)","Gl(P,ap,dJ?)"])
C.dwL.prototype={
$1(d){return new C.L3(this.a,null)},
$S:z+2}
C.dwK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.ec,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.G,B.ab.k(0.22),B.f7,32)],x.V),g=A.L(m?B.c3:B.ab.k(0.18),B.u,1),f=A.m(28),e=B.ab.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.t(n,D.aS5,B.j,n,n,new A.p(B.ab.k(0.18),n,A.L(B.ab.k(0.45),B.u,1),n,n,n,B.ak),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f9,w,A.aQ(n,n,n,n,A.W(B.cY,m?B.au:B.d_,n,n,n),n,n,n,new C.dwG(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.p(n,n,n,n,n,new A.ab(B.a1,B.a5,B.E,j,n,n),B.p),n,n,n,n,B.KG,n,n,n)
e=A.eA(B.cU,A.a([new C.Oz("YouTube",B.MD,m,n),new C.Oz("TikTok",B.lP,m,n),new C.Oz("Instagram",B.Cd,m,n),new C.Oz("Facebook",B.Cl,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.iP,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bA
r=A.W(B.fy,B.ab.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c3:B.aN
u=A.v(A.a([e,B.aS,A.aM(n,B.S,!0,n,!0,B.r,n,A.aN(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.To),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.aq,n,B.i,B.k,0,B.q)
e=A.jf(D.aS8,D.dg3,new C.dwH(d),A.j5(n,n,n,n,n,n,n,n,n,n,n,m?B.br:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.F(new A.R(12,0,12,12+l.f.d),A.cA(A.bS(f,A.v(A.a([j,new A.F(B.Yl,u,n),new A.F(D.aK_,A.H(A.a([e,B.b8,A.c2(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dwI(d),n,n),B.ai,A.dH(D.aWx,D.dgT,new C.dwJ(d,w),A.bu(B.ab,n,n,n,B.e,n,D.Y5,n,new A.bw(A.m(14),B.X),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.aq,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ab(B.aB,B.aG,B.E,i,n,n),B.p),B.bs),n)},
$S:84}
C.dwG.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dwH.prototype={
$0(){C.dNg()
$.Qo().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dwI.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dwJ.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.btX.prototype={
$1(d){return C.dNh(A.U(d,x.N,x.z))},
$S:z+3}
C.btY.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btP.prototype={
$1(d){return d.c},
$S:z+0}
C.btQ.prototype={
$1(d){return d.r},
$S:z+0}
C.btR.prototype={
$1(d){return d.f},
$S:z+0}
C.btS.prototype={
$1(d){return d.at},
$S:z+0}
C.btT.prototype={
$1(d){return d.c},
$S:z+0}
C.btU.prototype={
$1(d){return d.r},
$S:z+0}
C.btV.prototype={
$1(d){return d.f},
$S:z+0}
C.btW.prototype={
$1(d){return d.at},
$S:z+0}
C.btO.prototype={
$1(d){return d.aa()},
$S:z+5}
C.btN.prototype={
$1(d){return B.b.b6(B.l.h1(d,16),2,"0").toUpperCase()},
$S:93}
C.cV1.prototype={
$0(){},
$S:0}
C.cV0.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cUZ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cV_.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cV2.prototype={
$1(d){return new C.L2(this.a,null)},
$S:z+7}
C.cV7.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,B.qf,w,w,w,new C.cV6(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.I(A.fP(A.H(A.a([new A.oz(D.xB,e,g,36,B.CF,w),B.aR,A.I(A.d(t,w,1,B.at,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fS(B.h.gN(D.xB).k(0.45+e*0.2),B.K,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.T,!0,w,A.aK(!1,w,!0,new A.F(B.bW,A.W(B.hr,A.an(B.h.gN(D.xB),B.h.gad(D.xB),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbur(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a4)],s),B.n,w,B.i,B.k,0,w,w),D.xB,w,g,B.fe,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:314}
C.cV6.prototype={
$0(){return A.a3(this.a,!1).eC()},
$S:0}
C.cV8.prototype={
$3(d,e,f){return new A.lv($.Ht(),new C.cV5(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cV5.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E5(d,k,x.Q)
w=w==null?k:w.glL()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ab.k(0.12)
s=A.m(12)
r=A.L(B.ab.k(0.35),B.u,1)
q=A.W(B.kd,B.ab,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Ht().a
m=B.m.U(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.ai,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dn,B.fv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bS(s,new A.iH(1.7777777777777777,C.dNi(new A.d1("fleet_master_"+r,x.W),!0,r,!0,j.gaPL(),"fleet_master"),k),B.aA),B.ae],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wy(0,B.r,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kW(new A.F(B.Kv,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oM(D.aHG,A.aEI(new A.nW(new C.cV4(i,j),J.a4(i.d),!1,!0,!0,A.u2(),k),D.cP2),k)],w))},
$S:1793}
C.cV4.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Y8(v,e,J.a4(w.d),new C.cV3(w,v),this.b,null)},
$S:z+9}
C.cV3.prototype={
$0(){return this.a.btP(this.b)},
$S:0}
C.cV9.prototype={
$0(){this.a.W7()
return null},
$S:0}
C.cUW.prototype={
$0(){return A.a3(this.a,!1).eC()},
$S:0}
C.cUX.prototype={
$0(){C.a_Z(this.a,$.btM)
return null},
$S:0}
C.cUY.prototype={
$3(d,e,f){return A.eF(new C.cUV(this.a,e))},
$S:z+10}
C.cUV.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aE(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.Q,v,v),B.aS,new C.aWm(u,s.a.c,s.e,s.d,new C.cUS(s),new C.cUT(s),new C.cUU(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.pM,v,v,B.an),v,v,v)},
$S:1794}
C.cUS.prototype={
$0(){var w=this.a.c
w.toString
C.a_Z(w,$.btM)
return null},
$S:0}
C.cUT.prototype={
$1(d){var w=this.a
return w.n(new C.cUR(w,d))},
$S:30}
C.cUR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cUU.prototype={
$0(){var w=this.a
return w.n(new C.cUQ(w))},
$S:0}
C.cUQ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dab.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dac.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cZP.prototype={
$3(d,e,f){return new C.Gl(this.a.c,null)},
$S:z+11}
C.cZQ.prototype={
$3(d,e,f){if(f==null)return e
return new A.ax(B.ac,null,B.b6,B.r,A.a([new C.Gl(this.a.c,null),D.awW],x.p),null)},
$C:"$3",
$R:3,
$S:439}
C.cVa.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cVj.prototype={
$1(d){var w=this.a,v=document.createElement("iframe"),u=v.style
u.border="none"
u=v.style
u.width="100%"
u=v.style
u.height="100%"
v.allowFullscreen=!0
v.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
v.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
w.e=v
w.a9x(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fV(v,"load",new C.cVg(w),!1,u)
v=w.e
v.toString
A.fV(v,"error",new C.cVh(w),!1,u)
A.bG(B.k3,new C.cVi(w),x.H)
w=w.e
w.toString
return w},
$S:395}
C.cVg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cVf(w))},
$S:41}
C.cVf.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cVh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cVe(w))},
$S:41}
C.cVe.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cVi.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cVd(w))},
$S:12}
C.cVd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cVc.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cVb.prototype={
$0(){var w,v=C.btL(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kv.KP(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dsP.prototype={
$1(d){var w,v,u,t,s=new A.y5([],[]).zV(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1795};(function aliases(){var w=C.anL.prototype
w.b_2=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aiq.prototype,"gazO","br9",1)
w(u,"gbrK","brL",1)
w(u,"gbur","bus",6)
w(C.air.prototype,"gbKg","bKh",1)
v(C,"euC","dNf",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zj,[C.dwL,C.dwK,C.btX,C.btY,C.btP,C.btQ,C.btR,C.btS,C.btT,C.btU,C.btV,C.btW,C.btO,C.btN,C.cV2,C.cV7,C.cV8,C.cV5,C.cUY,C.cUT,C.cZP,C.cZQ,C.cVj,C.cVg,C.cVh,C.dsP])
v(A.a1r,[C.dwG,C.dwH,C.dwI,C.dwJ,C.cV1,C.cV0,C.cUZ,C.cV_,C.cV6,C.cV3,C.cV9,C.cUW,C.cUX,C.cUS,C.cUR,C.cUU,C.cUQ,C.dab,C.dac,C.cVa,C.cVf,C.cVe,C.cVi,C.cVd,C.cVc,C.cVb])
v(A.as,[C.Oz,C.Y8,C.aO_,C.aWm,C.aWn,C.aPj,C.aWl,C.aQG,C.aK5,C.aQL,C.Gl])
v(A.ap,[C.oB,C.qS])
v(A.ad,[C.L3,C.L2,C.a8j,C.a8k])
v(A.ae,[C.aiq,C.aPd,C.anL,C.air])
v(A.a1s,[C.cV4,C.cUV])
u(C.L6,A.aL0)
u(C.aPe,C.anL)
w(C.anL,A.dD)})()
A.dQR(b.typeUniverse,JSON.parse('{"L3":{"ad":[],"q":[]},"Y8":{"as":[],"q":[]},"L2":{"ad":[],"q":[]},"Oz":{"as":[],"q":[]},"aiq":{"ae":["L3"]},"aO_":{"as":[],"q":[]},"aPd":{"ae":["L2"]},"aWm":{"as":[],"q":[]},"aWn":{"as":[],"q":[]},"aPj":{"as":[],"q":[]},"aWl":{"as":[],"q":[]},"aQG":{"as":[],"q":[]},"aK5":{"as":[],"q":[]},"a8j":{"ad":[],"q":[]},"Gl":{"as":[],"q":[]},"aPe":{"ae":["a8j"]},"aQL":{"as":[],"q":[]},"a8k":{"ad":[],"q":[]},"air":{"ae":["a8k"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a5<a9>"),O:w("a5<x>"),e:w("a5<oB>"),S:w("a5<fS>"),s:w("a5<o>"),p:w("a5<q>"),t:w("a5<K>"),X:w("ag<oB>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ov"),_:w("E2"),k:w("oB"),N:w("o"),Y:w("bi<a2>"),W:w("d1<o>"),J:w("lv<K>"),j:w("lv<qS?>"),E:w("tD<cY>"),q:w("Z0"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a0r=new A.N(983224,"MaterialIcons",!1)
D.aUR=new A.ac(D.a0r,48,B.bf,null,null,null)
D.d2V=new A.A("Powered off",null,B.anO,null,null,null,null,null,null,null,null,null)
D.bQT=w([D.aUR,B.N,D.d2V],x.p)
D.aF0=new A.eH(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bQT,null)
D.awB=new A.d5(B.J,null,null,D.aF0,null)
D.cOF=new A.aa(18,18,B.Uj,null)
D.awW=new A.d5(B.J,null,null,D.cOF,null)
D.axR=new A.fX(2,null,null,null,null,B.a9,null,null,null,null)
D.aBf=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBQ=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDB=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aHv=new A.R(0,3,0,3)
D.aHG=new A.R(10,0,10,88)
D.aIa=new A.R(12,6,12,10)
D.aIz=new A.R(14,8,14,6)
D.Y5=new A.R(18,12,18,12)
D.aK_=new A.R(20,8,20,20)
D.YN=new A.R(8,6,15,8)
D.aQn=new A.N(983222,"MaterialIcons",!1)
D.aS5=new A.ac(B.kd,26,B.ab,null,null,null)
D.aS8=new A.ac(B.a_u,18,null,null,null,null)
D.aSn=new A.ac(B.tE,14,B.a9,null,null,null)
D.aQI=new A.N(983420,"MaterialIcons",!1)
D.aTd=new A.ac(D.aQI,14,B.a9,null,null,null)
D.aON=new A.N(62895,"MaterialIcons",!1)
D.aTi=new A.ac(D.aON,14,B.a9,null,null,null)
D.aUK=new A.ac(B.tx,16,B.a9,null,null,null)
D.aWx=new A.ac(B.it,20,null,null,null,null)
D.aWR=new A.ac(B.hr,16,null,null,null,null)
D.bUF=w([B.aM,B.W],x.O)
D.a29=new A.ab(B.aB,B.aG,B.E,D.bUF,null,null)
D.cI7=new A.aO("NGMY OS","14.2.1")
D.cGR=new A.aO("VirtualDroid","13.8.4")
D.cGQ=new A.aO("NGMY OS","15.0.0")
D.cHE=new A.aO("VirtualDroid","14.1.2")
D.cGO=new A.aO("NGMY Tab OS","12.9.7")
D.cGM=new A.aO("NGMY OS","13.5.3")
D.cGB=new A.aO("VirtualDroid","15.2.0")
D.cHd=new A.aO("NGMY OS","14.8.1")
D.cHK=new A.aO("NGMY Tab OS","13.2.4")
D.cIj=new A.aO("VirtualDroid","12.6.9")
D.cGv=new A.aO("NGMY OS","16.0.1")
D.cGk=new A.aO("VirtualDroid","14.9.0")
D.cHZ=new A.aO("NGMY Tab OS","14.0.3")
D.cH_=new A.aO("NGMY OS","13.1.8")
D.cGu=new A.aO("VirtualDroid","13.4.5")
D.cGL=new A.aO("NGMY OS","15.3.2")
D.cHL=new A.aO("NGMY Tab OS","12.4.1")
D.cI1=new A.aO("VirtualDroid","16.1.0")
D.cHc=new A.aO("NGMY OS","14.4.6")
D.cI8=new A.aO("VirtualDroid","15.0.8")
D.bTS=w([D.cI7,D.cGR,D.cGQ,D.cHE,D.cGO,D.cGM,D.cGB,D.cHd,D.cHK,D.cIj,D.cGv,D.cGk,D.cHZ,D.cH_,D.cGu,D.cGL,D.cHL,D.cI1,D.cHc,D.cI8],A.b4("a5<+(o,o)>"))
D.xB=w([B.ab,B.fo],x.O)
D.cKp=new A.eW(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJY=new A.eW(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJT=new A.eW(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cK1=new A.eW(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJP=new A.eW(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cK3=new A.eW(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cKr=new A.eW(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJQ=new A.eW(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJX=new A.eW(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cK5=new A.eW(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJO=new A.eW(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cKj=new A.eW(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cKg=new A.eW(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJW=new A.eW(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cKd=new A.eW(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cKc=new A.eW(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJN=new A.eW(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cK0=new A.eW(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cKa=new A.eW(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cKf=new A.eW(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8S=w([D.cKp,D.cJY,D.cJT,D.cK1,D.cJP,D.cK3,D.cKr,D.cJQ,D.cJX,D.cK5,D.cJO,D.cKj,D.cKg,D.cJW,D.cKd,D.cKc,D.cJN,D.cK0,D.cKa,D.cKf],A.b4("a5<+(o,o,a2,a2,o)>"))
D.c2h=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.agu=new C.L6(0,"youtube")
D.agv=new C.L6(1,"tiktok")
D.PD=new C.L6(2,"instagram")
D.agw=new C.L6(3,"facebook")
D.czb=new C.L6(4,"other")
D.cOa=new A.aa(3,null,null,null)
D.cP2=new A.ht(4,10,8,0.52,null)
D.d4b=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cSt=new A.aW(D.d4b,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.r,null)
D.cVT=new A.M(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d41=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dc1=new A.A("Open in YouTube",null,B.ja,null,null,null,null,null,null,null,null,null)
D.dg3=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dgT=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dh0=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dou=new C.aQG(null)})();(function staticFields(){$.dNe=20
$.aAB=null
$.btM=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ezC","Ht",()=>A.acH(0))
w($,"ezD","Qo",()=>A.acH(null))})()};
(a=>{a["fsSN1hqhEaH8uPKp/AIsY+GPH/4="]=a.current})($__dart_deferred_initializers__);