((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eHy(d,e){A.a0(d,!1).cp(A.eA(new C.dH5(e),!0,null,x.H))},
a1_(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.R2()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bd(n,B.aR,B.aH),t)
w=3
return A.b(A.d_(B.J,new C.dH4(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1_)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.elP(r)
if(q==null){d.G(x.q).f.P(D.cZJ)
w=1
break}w=4
return A.b(A.bK(B.hT,null,x.H),$async$a1_)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dXX=n
p=C.elJ(n)
n=$.I5()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dLd(q)
d.G(x.q).f.P(A.bf(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
dY_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aT(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aT(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oX(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LC(d){return C.elS(d)},
elS(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LC=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$LC)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cL(r)?10:11
break
case 10:k=J.ez(r,x.f)
k=A.dd(k,new C.bvV(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bvW(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dY1(q)
w=12
return A.b(C.LB(a3,p),$async$LC)
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
case 9:case 5:o=A.aL(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dY_(A.S(n,x.N,x.z))
l=C.dY1(A.a([m],x.e))
w=21
return A.b(C.LB(a3,l),$async$LC)
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
case 18:case 14:q=C.elQ()
w=22
return A.b(C.LB(a3,q),$async$LC)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LC,v)},
dY1(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bvN(),w).es(0),u=new A.H(d,new C.bvO(),w).es(0),t=new A.H(d,new C.bvP(),w).es(0),s=new A.H(d,new C.bvQ(),w).es(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dLe(null,q,u,t,v,s));++q}return r},
aCw(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LC(d),$async$aCw)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d5(t,new C.bvR(),s).es(0)
p=r.d5(t,new C.bvS(),s).es(0)
o=r.d5(t,new C.bvT(),s).es(0)
n=r.d5(t,new C.bvU(),s).es(0)
m=C.dLe(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LB(d,t),$async$aCw)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCw,v)},
LB(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LB)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bvM(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LB)
case 3:return A.h(null,v)}})
return A.i($async$LB,v)},
elQ(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dLe(w,w,t,s,u,r)
return q},
dLe(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.ln(),h=d==null,g=D.abn[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abn[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.H(p,new C.bvL(),A.X(p).j("H<1,p>")).fS(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.f.fS(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b8(B.m.ha(i.bH(256),16),2,"0")
s=B.f.ba(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a2(e,20)
k=D.c7J[w]
j=D.bYU[w]
return new C.oX("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.elR(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a6().a3())},
elR(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bH(256),16),2,"0")
return B.f.fS(v)},
dH5:function dH5(d){this.a=d},
dH4:function dH4(d,e){this.a=d
this.b=e},
dH0:function dH0(d){this.a=d},
dH1:function dH1(d){this.a=d},
dH2:function dH2(d){this.a=d},
dH3:function dH3(d,e){this.a=d
this.b=e},
P9:function P9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oX:function oX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bvV:function bvV(){},
bvW:function bvW(){},
bvN:function bvN(){},
bvO:function bvO(){},
bvP:function bvP(){},
bvQ:function bvQ(){},
bvR:function bvR(){},
bvS:function bvS(){},
bvT:function bvT(){},
bvU:function bvU(){},
bvM:function bvM(){},
bvL:function bvL(){},
LA:function LA(d,e){this.c=d
this.a=e},
ajM:function ajM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d1K:function d1K(){},
d1J:function d1J(d,e){this.a=d
this.b=e},
d1H:function d1H(d){this.a=d},
d1I:function d1I(d,e){this.a=d
this.b=e},
d1L:function d1L(d){this.a=d},
d1Q:function d1Q(d){this.a=d},
d1P:function d1P(d){this.a=d},
d1R:function d1R(d,e){this.a=d
this.b=e},
d1O:function d1O(d,e,f){this.a=d
this.b=e
this.c=f},
d1N:function d1N(d,e){this.a=d
this.b=e},
d1M:function d1M(d,e){this.a=d
this.b=e},
d1S:function d1S(d){this.a=d},
YV:function YV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQ2:function aQ2(d,e){this.c=d
this.a=e},
Lz:function Lz(d,e){this.c=d
this.a=e},
aRh:function aRh(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d1E:function d1E(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1D:function d1D(d,e){this.a=d
this.b=e},
d1A:function d1A(d){this.a=d},
d1B:function d1B(d){this.a=d},
d1z:function d1z(d,e){this.a=d
this.b=e},
d1C:function d1C(d){this.a=d},
d1y:function d1y(d){this.a=d},
aYv:function aYv(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aYw:function aYw(d,e,f){this.c=d
this.d=e
this.a=f},
aRn:function aRn(d,e){this.c=d
this.a=e},
aYu:function aYu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
diB:function diB(d){this.a=d},
diC:function diC(d){this.a=d},
aSI:function aSI(d){this.a=d},
aM3:function aM3(d,e){this.c=d
this.a=e},
elP(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.elO(v)
if(u!=null)return new C.rh(w,C.dLc(u,!1),D.aja,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.elN(v)
if(t!=null)return new C.rh(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajb,"TikTok",q)
s=C.elM(w,v)
if(s!=null)return s
r=C.elL(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rh(w,w,D.cFQ,"Video",q)
return q},
elM(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rh(d,"https://www.instagram.com/reel/"+w+u,D.R4,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rh(d,"https://www.instagram.com/p/"+w+u,D.R4,t,null)}return null},
elL(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rh(d,"https://www.facebook.com/plugins/video.php?href="+A.fS(2,d,B.by,!1)+"&show_text=false&width=734",D.ajc,"Facebook",null)},
elO(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
elN(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LD:function LD(d,e){this.a=d
this.b=e},
rh:function rh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9m:function a9m(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRi:function aRi(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aSN:function aSN(d,e){this.c=d
this.a=e},
d64:function d64(d){this.a=d},
d65:function d65(d){this.a=d},
GP:function GP(d,e){this.c=d
this.a=e},
apk:function apk(){},
dY0(d,e,f,g,h,i){return new C.a9n(i,f,h,e,g,d)},
eG3(d){var w=window
w.toString
A.h6(w,"message",new C.dCp(d),!1,x._)},
a9n:function a9n(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajN:function ajN(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d1T:function d1T(d){this.a=d},
d21:function d21(d){this.a=d},
d1Z:function d1Z(d){this.a=d},
d1Y:function d1Y(d){this.a=d},
d2_:function d2_(d){this.a=d},
d1X:function d1X(d){this.a=d},
d20:function d20(d){this.a=d},
d1W:function d1W(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1U:function d1U(d){this.a=d},
dCp:function dCp(d){this.a=d},
elH(){var w,v,u
try{v=A.rC()
w=v.gve(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dLc(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bvJ(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dXW(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
elI(d,e,f){var w,v,u=C.bvJ(d)
if(u!=null){if(f){w=C.elH()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dXW(C.dLc(u,e))}return C.dXW(d)},
elJ(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
elK(d){var w
if($.R2().a==null)return!1
w=$.I5().a
return d>=w&&d<w+4},
dXZ(){var w=$.aCv
if(w!=null)w.aa(0)
$.aCv=null
$.I5().sv(0,0)},
dXY(){var w,v,u,t=$.R2()
if(t.a==null)return
w=$.aCv
if(w!=null)w.aa(0)
v=$.dXX
if(v<=4){t=t.a
t.toString
C.dLd(t)
return}w=$.I5()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dLd(t)},
dLd(d){var w=$.aCv
if(w!=null)w.aa(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aCv=A.dt(A.d6(0,0,0,0,0,w),C.eGj())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.P9.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a7.k(0.25),B.r,1),r=A.V(this.d,B.a7,w,w,14)
return A.q(w,A.F(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cs,w,w,w,w,w,w,w,w,11,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hk,w,w,w)}}
C.oX.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LA.prototype={
U(){return new C.ajM(A.a([],x.e))},
gej(){return this.c}}
C.ajM.prototype={
a_(){var w=this
w.a4()
$.I5().aA(0,w.gaBO())
C.eG3(w.gbvj())
w.a0L()},
buL(){if(this.c!=null)this.n(new C.d1K())},
bvk(){C.dXY()},
p(){$.I5().Z(0,this.gaBO())
C.dXZ()
$.R2().sv(0,null)
this.a5()},
a0L(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LC(t.a.c),$async$a0L)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1J(t,s))
$.bvK=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a0L,v)},
Xi(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d1H(t))
w=3
return A.b(C.aCw(t.a.c),$async$Xi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1I(t,s))
$.bvK=J.a3(t.d)
t.c.G(x.q).f.P(A.bf(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xi,v)},
bxn(d){var w=this.c
w.toString
A.a0(w,!1).cp(A.eA(new C.d1L(d),!1,null,x.H))},
by3(){var w=this.c
w.toString
return C.a1_(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.ib:B.bD,s=A.bD(!0,A.v(A.a([new A.D(D.a_K,new A.jo(new C.d1Q(w),v),v),A.G(w.e?B.mZ:new A.lK($.R2(),new C.d1R(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c4(v,t,s,v,!1,!1,A.aw1(B.a7,B.Ji,B.kE,D.dp1,w.e?v:new C.d1S(w)),v)}}
C.YV.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a7.k(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9m(n,!0,!C.elK(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.V(B.kB,B.ou,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.AT,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.v(A.a([A.G(A.q(u,A.bQ(p,A.f_(A.v(A.a([new C.aQ2(o,u),A.G(n,1),A.q(u,A.F(A.a([A.V(B.xO,B.a7.k(0.85),u,u,9),B.apI,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.av,u,u,u,u,u,u,D.aLx,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aD),B.j,u,u,new A.o(u,u,r,s,q,D.a4q,B.o),u,u,u,u,B.fa,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a7.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQ2.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.G(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.ur,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.av,w,w,w,w,w,w,B.a_y,w,w,w)}}
C.Lz.prototype={
U(){return new C.aRh()}}
C.aRh.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.ib:B.bD,t=A.aP(w,w,w,w,B.a3o,w,w,w,new C.d1E(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c4(w,u,A.bD(!0,A.v(A.a([new A.D(D.a_K,A.F(A.a([t,A.G(new A.Lo(A.F(A.a([A.G(new A.D(B.jY,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.V,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.D(B.br,A.V(B.hF,B.a7,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d1F(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.G(new A.lK($.R2(),new C.d1G(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYv.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a7.k(0.35),B.eC,28),new A.a5(0,B.G,B.A.k(0.45),B.d8,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dY0(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaSf(),v+"_full")
w=v}else w=new C.aRn(t.r,s)}else w=new C.aM3(m,s)
else w=D.dx4
return A.q(s,A.bQ(n,A.f_(A.v(A.a([new C.aYw(m,l,s),A.G(w,1),new C.aYu(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aD),B.j,s,s,new A.o(s,s,o,q,p,D.a4q,B.o),s,r*2.05,s,s,B.bI,s,s,r)}}
C.aYw.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glN()
r=r.gFl()
w=new A.dM(q,r)
v=w.gL9()===0?12:w.gL9()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hz:B.jS)===B.hz?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o2,s,s,s),B.b7,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bO,D.aXq,B.de,D.aWx,B.de,D.aXv],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.F(A.a([A.V(B.xM,B.a7.k(0.9),s,s,12),B.de,A.G(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.p),B.j,B.av,s,s,s,s,s,s,D.aMD,s,s,s)}}
C.aRn.prototype={
B(d){var w=null
return A.q(w,A.aC(A.v(A.a([A.V(B.CQ,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.eF(D.b0k,D.dbl,this.c,A.dy(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aE(B.a7.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.AT,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYu.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBA(B.Df,"YouTube",s===0,r,new C.diB(u))
s=u.aBA(B.jn,"Device",s===1,r,new C.diC(u))
w=r?"Power off":"Power on"
v=r?D.a2p:D.aUu
return A.q(t,A.F(A.a([q,B.ai,s,B.b7,A.aP(t,t,t,t,A.V(v,r?B.bS:B.f5,t,t,t),t,t,t,u.f,t,t,t,t,w,B.d4)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.av,t,t,t,t,t,t,D.aM8,t,t,t)},
aBA(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b3
else w=f?B.a7:B.as
v=f&&g?B.a7.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.G(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.D(B.mc,A.v(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.Q,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aSI.prototype={
B(d){return D.azQ}}
C.aM3.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iA,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ua("Serial",u.c),q=w.ua("Model",u.d),p=w.ua("Device ID",u.e),o=w.ua("IMEI",u.r),n=w.ua("MAC",u.f),m=w.ua("OS",u.w+" "+u.x),l=w.ua("Location",u.y+", "+u.z),k=w.ua("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ua("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aJ,s,B.ae,r,q,p,o,n,m,l,k,j,w.ua("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.br,v,v,B.ak,!1)},
ua(d,e){var w=null
return new A.D(B.dj,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cg,A.d(e,w,w,w,w,w,w,D.d26,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LD.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rh.prototype={
gaSf(){var w=this.c
return w===D.aja||w===D.ajb||w===D.R4||w===D.ajc}}
C.a9m.prototype={
U(){return new C.aRi(null,null)}}
C.aRi.prototype={
a_(){this.a4()
var w=A.bg(null,B.ty,null,1,null,this)
w.fV(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b1K()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bV,B.bT,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cD(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kB,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.ou
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aSN(s,t),r,q,A.au(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.av(B.a5,t,B.b9,B.t,s,t)}}
C.aSN.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kD(u,B.I,new C.d64(this),B.cb,B.bW,!0,w,w,new C.d65(this),w)
return new C.GP(v,w)}}
C.GP.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tn,B.Wq],x.O),B.kB)
break
case 1:w=new A.aI(A.a([B.AT,D.aFO],x.O),B.mm)
break
case 2:w=new A.aI(A.a([D.aHC,D.aF7],x.O),B.CX)
break
case 3:w=new A.aI(A.a([B.V,B.dR],x.O),B.D4)
break
case 4:w=new A.aI(A.a([B.av,B.aP],x.O),B.qH)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a7.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.aw,B.aC,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apk.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcO())
w.aD$=null
w.a5()},
be(){this.br()
this.bp()
this.cP()}}
C.a9n.prototype={
U(){return new C.ajN()}}
C.ajN.prototype={
aaV(d,e){var w,v=C.bvJ(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dLc(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.elI(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bP_(){var w,v=this
if(v.w)return
v.n(new C.d1T(v))
w=v.e
if(w!=null)v.aaV(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.D6()
$.pz().tx(w,new C.d21(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d1V(v))
w=v.e
w.toString
v.aaV(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a2I,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.R,n,n)],v))
return A.f_(A.aC(new A.D(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SN(n,B.ra,w)],v)
if(o.f)w.push(A.f_(A.aC(new A.aa(28,28,D.aBf,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b3,B.r,1)
q=A.V(B.Dr,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dQ(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.Q,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LC,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbOZ(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bvJ(o.a.d)
if(v!=null)w.push(A.au(8,A.jr(D.aZ4,D.djS,new C.d1U(o),A.ik(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hk,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.av(B.a5,n,B.b9,B.t,w,n)}}
var z=a.updateTypes(["p(oX)","~()","LA(M)","oX(a_<@,@>)","Z(oX)","a_<p,@>(oX)","aD<~>()","Lz(M)","lK<L>(M,rh?,r?)","YV(M,L)","vc(M,rh?,r?)","GP(M,ar,dR?)"])
C.dH5.prototype={
$1(d){return new C.LA(this.a,null)},
$S:z+2}
C.dH4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.ep,B.V],j):A.a([B.c,B.aA],j),h=A.a([new A.a5(0,B.G,B.a7.k(0.22),B.eC,32)],x.V),g=A.J(m?B.ce:B.a7.k(0.18),B.r,1),f=A.m(28),e=B.a7.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aWe,B.j,n,n,new A.o(B.a7.k(0.18),n,A.J(B.a7.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.G(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.en,w,A.aP(n,n,n,n,A.V(B.cN,m?B.as:B.cW,n,n,n),n,n,n,new C.dH0(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LK,n,n,n)
e=A.em(B.cR,A.a([new C.P9("YouTube",B.NN,m,n),new C.P9("TikTok",B.mm,m,n),new C.P9("Instagram",B.CX,m,n),new C.P9("Facebook",B.D4,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.hR,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bD
r=A.V(B.fO,B.a7.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aL
u=A.v(A.a([e,B.aS,A.aN(n,B.S,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.U),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.V8),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.am,n,B.i,B.k,0,B.p)
e=A.jr(D.aWi,D.do2,new C.dH1(d),A.ik(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.D(new A.Q(12,0,12,12+l.f.d),A.cv(A.bQ(f,A.v(A.a([j,new A.D(B.a_d,u,n),new A.D(D.aO2,A.F(A.a([e,B.b7,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dH2(d),n,n),B.ai,A.dD(D.b0_,D.doT,new C.dH3(d,w),A.bn(B.a7,n,n,n,B.c,n,B.LC,n,new A.bp(A.m(14),B.U),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.am,n,B.i,B.Z,0,B.p),B.aD),new A.o(n,n,g,k,h,new A.a7(B.aw,B.aC,B.E,i,n,n),B.o),B.bq),n)},
$S:68}
C.dH0.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dH1.prototype={
$0(){C.dXZ()
$.R2().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dH2.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dH3.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bvV.prototype={
$1(d){return C.dY_(A.S(d,x.N,x.z))},
$S:z+3}
C.bvW.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bvN.prototype={
$1(d){return d.c},
$S:z+0}
C.bvO.prototype={
$1(d){return d.r},
$S:z+0}
C.bvP.prototype={
$1(d){return d.f},
$S:z+0}
C.bvQ.prototype={
$1(d){return d.at},
$S:z+0}
C.bvR.prototype={
$1(d){return d.c},
$S:z+0}
C.bvS.prototype={
$1(d){return d.r},
$S:z+0}
C.bvT.prototype={
$1(d){return d.f},
$S:z+0}
C.bvU.prototype={
$1(d){return d.at},
$S:z+0}
C.bvM.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bvL.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:81}
C.d1K.prototype={
$0(){},
$S:0}
C.d1J.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d1H.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d1I.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d1L.prototype={
$1(d){return new C.Lz(this.a,null)},
$S:z+7}
C.d1Q.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qK,w,w,w,new C.d1P(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.G(A.h1(A.F(A.a([new A.oV(D.yh,e,g,36,B.xM,w),B.aO,A.G(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fQ(B.f.gI(D.yh).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.D(B.bI,A.V(B.hF,A.ao(B.f.gI(D.yh),B.f.ga7(D.yh),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gby2(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yh,w,g,B.eQ,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:368}
C.d1P.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d1R.prototype={
$3(d,e,f){return new A.lK($.I5(),new C.d1O(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d1O.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.ED(d,k,x.Q)
w=w==null?k:w.glO()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.k(0.12)
s=A.m(12)
r=A.J(B.a7.k(0.35),B.r,1)
q=A.V(B.kB,B.a7,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.I5().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.G(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.V,k,k,k,k,k,k,k,k,12,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dv,B.f9,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.hM(1.7777777777777777,C.dY0(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaSf(),"fleet_master"),k),B.aD),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uS(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.l9(new A.D(B.Lx,A.v(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.oh(D.aLI,A.aGA(new A.of(new C.d1N(i,j),J.a3(i.d),!1,!0,!0,A.uE(),k),D.cWg),k)],w))},
$S:1849}
C.d1N.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.YV(v,e,J.a3(w.d),new C.d1M(w,v),this.b,null)},
$S:z+9}
C.d1M.prototype={
$0(){return this.a.bxn(this.b)},
$S:0}
C.d1S.prototype={
$0(){this.a.Xi()
return null},
$S:0}
C.d1E.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d1F.prototype={
$0(){C.a1_(this.a,$.bvK)
return null},
$S:0}
C.d1G.prototype={
$3(d,e,f){return A.eK(new C.d1D(this.a,e))},
$S:z+10}
C.d1D.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.R,v,v),B.aS,new C.aYv(u,s.a.c,s.e,s.d,new C.d1A(s),new C.d1B(s),new C.d1C(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oE,v,v,B.ak),v,v,v)},
$S:1850}
C.d1A.prototype={
$0(){var w=this.a.c
w.toString
C.a1_(w,$.bvK)
return null},
$S:0}
C.d1B.prototype={
$1(d){var w=this.a
return w.n(new C.d1z(w,d))},
$S:33}
C.d1z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d1C.prototype={
$0(){var w=this.a
return w.n(new C.d1y(w))},
$S:0}
C.d1y.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.diB.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.diC.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d64.prototype={
$3(d,e,f){return new C.GP(this.a.c,null)},
$S:z+11}
C.d65.prototype={
$3(d,e,f){if(f==null)return e
return new A.av(B.a5,null,B.b9,B.t,A.a([new C.GP(this.a.c,null),D.aAb],x.p),null)},
$C:"$3",
$R:3,
$S:440}
C.d1T.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d21.prototype={
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
w.aaV(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.d1Z(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.d2_(w),!1,u)
A.bK(B.jW,new C.d20(w),x.H)
w=w.e
w.toString
return w},
$S:628}
C.d1Z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d1Y(w))},
$S:28}
C.d1Y.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d2_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d1X(w))},
$S:28}
C.d1X.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d20.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d1W(w))},
$S:12}
C.d1W.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d1V.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1U.prototype={
$0(){var w,v=C.bvJ(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mR.Lu(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dCp.prototype={
$1(d){var w,v,u,t,s=new A.w2([],[]).x4(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1851};(function aliases(){var w=C.apk.prototype
w.b1K=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajM.prototype,"gaBO","buL",1)
w(u,"gbvj","bvk",1)
w(u,"gby2","by3",6)
w(C.ajN.prototype,"gbOZ","bP_",1)
v(C,"eGj","dXY",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zJ,[C.dH5,C.dH4,C.bvV,C.bvW,C.bvN,C.bvO,C.bvP,C.bvQ,C.bvR,C.bvS,C.bvT,C.bvU,C.bvM,C.bvL,C.d1L,C.d1Q,C.d1R,C.d1O,C.d1G,C.d1B,C.d64,C.d65,C.d21,C.d1Z,C.d2_,C.dCp])
v(A.a2o,[C.dH0,C.dH1,C.dH2,C.dH3,C.d1K,C.d1J,C.d1H,C.d1I,C.d1P,C.d1M,C.d1S,C.d1E,C.d1F,C.d1A,C.d1z,C.d1C,C.d1y,C.diB,C.diC,C.d1T,C.d1Y,C.d1X,C.d20,C.d1W,C.d1V,C.d1U])
v(A.ap,[C.P9,C.YV,C.aQ2,C.aYv,C.aYw,C.aRn,C.aYu,C.aSI,C.aM3,C.aSN,C.GP])
v(A.ar,[C.oX,C.rh])
v(A.ad,[C.LA,C.Lz,C.a9m,C.a9n])
v(A.ae,[C.ajM,C.aRh,C.apk,C.ajN])
v(A.a2p,[C.d1N,C.d1D])
u(C.LD,A.aMZ)
u(C.aRi,C.apk)
w(C.apk,A.dB)})()
A.e0p(b.typeUniverse,JSON.parse('{"LA":{"ad":[],"r":[]},"YV":{"ap":[],"r":[]},"Lz":{"ad":[],"r":[]},"P9":{"ap":[],"r":[]},"ajM":{"ae":["LA"]},"aQ2":{"ap":[],"r":[]},"aRh":{"ae":["Lz"]},"aYv":{"ap":[],"r":[]},"aYw":{"ap":[],"r":[]},"aRn":{"ap":[],"r":[]},"aYu":{"ap":[],"r":[]},"aSI":{"ap":[],"r":[]},"aM3":{"ap":[],"r":[]},"a9m":{"ad":[],"r":[]},"GP":{"ap":[],"r":[]},"aRi":{"ae":["a9m"]},"aSN":{"ap":[],"r":[]},"a9n":{"ad":[],"r":[]},"ajN":{"ae":["a9n"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<oX>"),S:w("a9<fQ>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<oX>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oR"),_:w("EA"),k:w("oX"),N:w("p"),Y:w("bi<a4>"),W:w("d3<p>"),J:w("lK<L>"),j:w("lK<rh?>"),E:w("ud<d0>"),q:w("ZS"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2p=new A.P(983224,"MaterialIcons",!1)
D.aZb=new A.ab(D.a2p,48,B.b3,null,null,null)
D.daf=new A.z("Powered off",null,B.aqK,null,null,null,null,null,null,null,null,null)
D.bVU=w([D.aZb,B.N,D.daf],x.p)
D.aJ0=new A.eJ(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bVU,null)
D.azQ=new A.cU(B.I,null,null,D.aJ0,null)
D.cVW=new A.aa(18,18,B.W8,null)
D.aAb=new A.cU(B.I,null,null,D.cVW,null)
D.aBf=new A.fp(2,null,null,null,null,B.aa,null,null,null,null)
D.aF7=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aFO=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aHC=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aLx=new A.Q(0,3,0,3)
D.aLI=new A.Q(10,0,10,88)
D.aM8=new A.Q(12,6,12,10)
D.aMD=new A.Q(14,8,14,6)
D.aO2=new A.Q(20,8,20,20)
D.a_K=new A.Q(8,6,15,8)
D.aUu=new A.P(983222,"MaterialIcons",!1)
D.aWe=new A.ab(B.kB,26,B.a7,null,null,null)
D.aWi=new A.ab(B.a1s,18,null,null,null,null)
D.aWx=new A.ab(B.ur,14,B.aa,null,null,null)
D.aUN=new A.P(983420,"MaterialIcons",!1)
D.aXq=new A.ab(D.aUN,14,B.aa,null,null,null)
D.aST=new A.P(62895,"MaterialIcons",!1)
D.aXv=new A.ab(D.aST,14,B.aa,null,null,null)
D.aZ4=new A.ab(B.ui,16,B.aa,null,null,null)
D.b0_=new A.ab(B.ip,20,null,null,null,null)
D.b0k=new A.ab(B.hF,16,null,null,null,null)
D.bZL=w([B.aP,B.V],x.O)
D.a4q=new A.a7(B.aw,B.aC,B.E,D.bZL,null,null)
D.cP6=new A.aI("NGMY OS","14.2.1")
D.cNH=new A.aI("VirtualDroid","13.8.4")
D.cNG=new A.aI("NGMY OS","15.0.0")
D.cOA=new A.aI("VirtualDroid","14.1.2")
D.cNC=new A.aI("NGMY Tab OS","12.9.7")
D.cNA=new A.aI("NGMY OS","13.5.3")
D.cNp=new A.aI("VirtualDroid","15.2.0")
D.cO6=new A.aI("NGMY OS","14.8.1")
D.cOF=new A.aI("NGMY Tab OS","13.2.4")
D.cPj=new A.aI("VirtualDroid","12.6.9")
D.cNj=new A.aI("NGMY OS","16.0.1")
D.cN9=new A.aI("VirtualDroid","14.9.0")
D.cOX=new A.aI("NGMY Tab OS","14.0.3")
D.cNS=new A.aI("NGMY OS","13.1.8")
D.cNh=new A.aI("VirtualDroid","13.4.5")
D.cNz=new A.aI("NGMY OS","15.3.2")
D.cOG=new A.aI("NGMY Tab OS","12.4.1")
D.cP_=new A.aI("VirtualDroid","16.1.0")
D.cO5=new A.aI("NGMY OS","14.4.6")
D.cP7=new A.aI("VirtualDroid","15.0.8")
D.bYU=w([D.cP6,D.cNH,D.cNG,D.cOA,D.cNC,D.cNA,D.cNp,D.cO6,D.cOF,D.cPj,D.cNj,D.cN9,D.cOX,D.cNS,D.cNh,D.cNz,D.cOG,D.cP_,D.cO5,D.cP7],A.b4("a9<+(p,p)>"))
D.yh=w([B.a7,B.fF],x.O)
D.cRu=new A.f2(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cR2=new A.f2(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cQY=new A.f2(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cR6=new A.f2(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cQU=new A.f2(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cR8=new A.f2(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cRw=new A.f2(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cQV=new A.f2(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cR1=new A.f2(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cRa=new A.f2(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cQT=new A.f2(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cRo=new A.f2(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cRl=new A.f2(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cR0=new A.f2(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cRi=new A.f2(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cRh=new A.f2(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cQS=new A.f2(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cR5=new A.f2(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cRf=new A.f2(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cRk=new A.f2(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abn=w([D.cRu,D.cR2,D.cQY,D.cR6,D.cQU,D.cR8,D.cRw,D.cQV,D.cR1,D.cRa,D.cQT,D.cRo,D.cRl,D.cR0,D.cRi,D.cRh,D.cQS,D.cR5,D.cRf,D.cRk],A.b4("a9<+(p,p,a4,a4,p)>"))
D.c7J=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aja=new C.LD(0,"youtube")
D.ajb=new C.LD(1,"tiktok")
D.R4=new C.LD(2,"instagram")
D.ajc=new C.LD(3,"facebook")
D.cFQ=new C.LD(4,"other")
D.cWg=new A.hr(4,10,8,0.52,null)
D.dby=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cZJ=new A.aV(D.dby,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.t,null)
D.d26=new A.N(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dbl=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.djS=new A.z("Open in YouTube",null,B.jE,null,null,null,null,null,null,null,null,null)
D.do2=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.doT=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dp1=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dx4=new C.aSI(null)})();(function staticFields(){$.dXX=20
$.aCv=null
$.bvK=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eLj","I5",()=>A.adP(0))
w($,"eLk","R2",()=>A.adP(null))})()};
(a=>{a["8u3YhWVrTsviScBJsariIbFt+q0="]=a.current})($__dart_deferred_initializers__);