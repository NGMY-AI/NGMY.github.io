((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eIQ(d,e){A.a0(d,!1).cn(A.ev(new C.dIc(e),!0,null,x.H))},
a13(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a13=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.R9()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bd(n,B.aS,B.aH),t)
w=3
return A.b(A.d3(B.J,new C.dIb(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a13)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.en_(r)
if(q==null){d.G(x.q).f.P(D.d07)
w=1
break}w=4
return A.b(A.bJ(B.hU,null,x.H),$async$a13)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dZ5=n
p=C.emU(n)
n=$.Ia()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dMl(q)
d.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a13,v)},
dZ8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LI(d){return C.en2(d)},
en2(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LI=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$LI)
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
case 10:k=J.eA(r,x.f)
k=A.dd(k,new C.bwj(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bwk(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dZa(q)
w=12
return A.b(C.LH(a3,p),$async$LI)
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
case 19:m=C.dZ8(A.S(n,x.N,x.z))
l=C.dZa(A.a([m],x.e))
w=21
return A.b(C.LH(a3,l),$async$LI)
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
case 18:case 14:q=C.en0()
w=22
return A.b(C.LH(a3,q),$async$LI)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LI,v)},
dZa(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bwb(),w).es(0),u=new A.H(d,new C.bwc(),w).es(0),t=new A.H(d,new C.bwd(),w).es(0),s=new A.H(d,new C.bwe(),w).es(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dMm(null,q,u,t,v,s));++q}return r},
aCM(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LI(d),$async$aCM)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d5(t,new C.bwf(),s).es(0)
p=r.d5(t,new C.bwg(),s).es(0)
o=r.d5(t,new C.bwh(),s).es(0)
n=r.d5(t,new C.bwi(),s).es(0)
m=C.dMm(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LH(d,t),$async$aCM)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCM,v)},
LH(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LH)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bwa(),x.P)
s=A.y(s,s.$ti.j("a7.E"))
w=3
return A.b(u.ak("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LH)
case 3:return A.h(null,v)}})
return A.i($async$LH,v)},
en0(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cN(20,x.k)
for(w=0;w<20;++w)q[w]=C.dMm(w,w,t,s,u,r)
return q},
dMm(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lp(),h=d==null,g=D.abJ[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abJ[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bv(256)
n=new A.H(p,new C.bw9(),A.X(p).j("H<1,p>")).fT(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bv(10)
t=B.f.fT(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b7(B.m.ha(i.bv(256),16),2,"0")
s=B.f.ba(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a2(e,20)
k=D.c8W[w]
j=D.bZZ[w]
return new C.oY("vd_"+1000*Date.now()+"_"+e+"_"+i.bv(99999),"Device "+B.b.b7(B.m.q(e+1),2,"0"),u,k,C.en1(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a7().a4())},
en1(d,e){var w,v=J.cN(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b7(B.m.ha(d.bv(256),16),2,"0")
return B.f.fT(v)},
dIc:function dIc(d){this.a=d},
dIb:function dIb(d,e){this.a=d
this.b=e},
dI7:function dI7(d){this.a=d},
dI8:function dI8(d){this.a=d},
dI9:function dI9(d){this.a=d},
dIa:function dIa(d,e){this.a=d
this.b=e},
Pf:function Pf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oY:function oY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bwj:function bwj(){},
bwk:function bwk(){},
bwb:function bwb(){},
bwc:function bwc(){},
bwd:function bwd(){},
bwe:function bwe(){},
bwf:function bwf(){},
bwg:function bwg(){},
bwh:function bwh(){},
bwi:function bwi(){},
bwa:function bwa(){},
bw9:function bw9(){},
LG:function LG(d,e){this.c=d
this.a=e},
ajW:function ajW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d2P:function d2P(){},
d2O:function d2O(d,e){this.a=d
this.b=e},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d,e){this.a=d
this.b=e},
d2Q:function d2Q(d){this.a=d},
d2V:function d2V(d){this.a=d},
d2U:function d2U(d){this.a=d},
d2W:function d2W(d,e){this.a=d
this.b=e},
d2T:function d2T(d,e,f){this.a=d
this.b=e
this.c=f},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2R:function d2R(d,e){this.a=d
this.b=e},
d2X:function d2X(d){this.a=d},
Z0:function Z0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQm:function aQm(d,e){this.c=d
this.a=e},
LF:function LF(d,e){this.c=d
this.a=e},
aRD:function aRD(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d2J:function d2J(d){this.a=d},
d2K:function d2K(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2I:function d2I(d,e){this.a=d
this.b=e},
d2F:function d2F(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2E:function d2E(d,e){this.a=d
this.b=e},
d2H:function d2H(d){this.a=d},
d2D:function d2D(d){this.a=d},
aYR:function aYR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aYS:function aYS(d,e,f){this.c=d
this.d=e
this.a=f},
aRJ:function aRJ(d,e){this.c=d
this.a=e},
aYQ:function aYQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
djG:function djG(d){this.a=d},
djH:function djH(d){this.a=d},
aT3:function aT3(d){this.a=d},
aMm:function aMm(d,e){this.c=d
this.a=e},
en_(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.emZ(v)
if(u!=null)return new C.rj(w,C.dMk(u,!1),D.ajv,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.emY(v)
if(t!=null)return new C.rj(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajw,"TikTok",q)
s=C.emX(w,v)
if(s!=null)return s
r=C.emW(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rj(w,w,D.cH3,"Video",q)
return q},
emX(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/reel/"+w+u,D.Ri,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/p/"+w+u,D.Ri,t,null)}return null},
emW(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rj(d,"https://www.facebook.com/plugins/video.php?href="+A.fT(2,d,B.by,!1)+"&show_text=false&width=734",D.ajx,"Facebook",null)},
emZ(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
emY(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LJ:function LJ(d,e){this.a=d
this.b=e},
rj:function rj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9t:function a9t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRE:function aRE(d,e){var _=this
_.d=$
_.cl$=d
_.aC$=e
_.c=_.a=null},
aT8:function aT8(d,e){this.c=d
this.a=e},
d79:function d79(d){this.a=d},
d7a:function d7a(d){this.a=d},
GU:function GU(d,e){this.c=d
this.a=e},
apw:function apw(){},
dZ9(d,e,f,g,h,i){return new C.a9u(i,f,h,e,g,d)},
eHk(d){var w=window
w.toString
A.h6(w,"message",new C.dDv(d),!1,x._)},
a9u:function a9u(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajX:function ajX(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d2Y:function d2Y(d){this.a=d},
d36:function d36(d){this.a=d},
d33:function d33(d){this.a=d},
d32:function d32(d){this.a=d},
d34:function d34(d){this.a=d},
d31:function d31(d){this.a=d},
d35:function d35(d){this.a=d},
d30:function d30(d){this.a=d},
d3_:function d3_(d){this.a=d},
d2Z:function d2Z(d){this.a=d},
dDv:function dDv(d){this.a=d},
emS(){var w,v,u
try{v=A.rE()
w=v.gvh(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dMk(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bw7(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dZ4(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
emT(d,e,f){var w,v,u=C.bw7(d)
if(u!=null){if(f){w=C.emS()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dZ4(C.dMk(u,e))}return C.dZ4(d)},
emU(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
emV(d){var w
if($.R9().a==null)return!1
w=$.Ia().a
return d>=w&&d<w+4},
dZ7(){var w=$.aCL
if(w!=null)w.aa(0)
$.aCL=null
$.Ia().sv(0,0)},
dZ6(){var w,v,u,t=$.R9()
if(t.a==null)return
w=$.aCL
if(w!=null)w.aa(0)
v=$.dZ5
if(v<=4){t=t.a
t.toString
C.dMl(t)
return}w=$.Ia()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dMl(t)},
dMl(d){var w=$.aCL
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
default:w=null}$.aCL=A.dv(A.d6(0,0,0,0,0,w),C.eHA())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pf.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.V(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cs,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hm,w,w,w)}}
C.oY.prototype={
ab(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LG.prototype={
U(){return new C.ajW(A.a([],x.e))},
ged(){return this.c}}
C.ajW.prototype={
a_(){var w=this
w.a3()
$.Ia().aA(0,w.gaC5())
C.eHk(w.gbvU())
w.a0R()},
bvl(){if(this.c!=null)this.n(new C.d2P())},
bvV(){C.dZ6()},
p(){$.Ia().Z(0,this.gaC5())
C.dZ7()
$.R9().sv(0,null)
this.a5()},
a0R(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LI(t.a.c),$async$a0R)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2O(t,s))
$.bw8=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
Xn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d2M(t))
w=3
return A.b(C.aCM(t.a.c),$async$Xn)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2N(t,s))
$.bw8=J.a3(t.d)
t.c.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
by_(d){var w=this.c
w.toString
A.a0(w,!1).cn(A.ev(new C.d2Q(d),!1,null,x.H))},
byG(){var w=this.c
w.toString
return C.a13(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.ib:B.bE,s=A.bB(!0,A.u(A.a([new A.C(D.a01,new A.jq(new C.d2V(w),v),v),A.E(w.e?B.n3:new A.lM($.R9(),new C.d2W(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c1(v,t,s,v,!1,!1,A.awe(B.a6,B.Ju,B.kJ,D.dqP,w.e?v:new C.d2X(w)),v)}}
C.Z0.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dH,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9t(n,!0,!C.emV(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.V(B.kG,B.oz,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b0,B.k,0,B.p),B.j,B.B_,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.O,!0,u,A.aG(!1,t,!0,A.u(A.a([A.E(A.q(u,A.bO(p,A.f0(A.u(A.a([new C.aQm(o,u),A.E(n,1),A.q(u,A.F(A.a([A.V(B.xV,B.a6.k(0.85),u,u,9),B.aq2,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b0,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,u,D.aMl,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4K,B.o),u,u,u,u,B.fb,u,u,u),1),B.aJ,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQm.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.ux,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,w,B.a_R,w,w,w)}}
C.LF.prototype={
U(){return new C.aRD()}}
C.aRD.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.ib:B.bE,t=A.aN(w,w,w,w,B.a3I,w,w,w,new C.d2J(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c1(w,u,A.bB(!0,A.u(A.a([new A.C(D.a01,A.F(A.a([t,A.E(new A.Lu(A.F(A.a([A.E(new A.C(B.k0,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.c:B.V,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.O,!0,w,A.aG(!1,w,!0,new A.C(B.bo,A.V(B.hH,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2K(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lM($.R9(),new C.d2L(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYR.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eC,28),new A.a5(0,B.G,B.A.k(0.45),B.d9,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dZ9(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaSz(),v+"_full")
w=v}else w=new C.aRJ(t.r,s)}else w=new C.aMm(m,s)
else w=D.dyJ
return A.q(s,A.bO(n,A.f0(A.u(A.a([new C.aYS(m,l,s),A.E(w,1),new C.aYQ(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4K,B.o),s,r*2.05,s,s,B.bH,s,s,r)}}
C.aYS.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glO()
r=r.gFo()
w=new A.dN(q,r)
v=w.gLc()===0?12:w.gLc()
r=B.b.b7(B.m.q(r),2,"0")
q=(q<12?B.hC:B.jU)===B.hC?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o5,s,s,s),B.b4,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bR,D.aYb,B.dg,D.aXj,B.dg,D.aYg],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.F(A.a([A.V(B.xT,B.a6.k(0.9),s,s,12),B.dg,A.E(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aw,s,s,s,s,s,s,D.aNq,s,s,s)}}
C.aRJ.prototype={
B(d){var w=null
return A.q(w,A.aC(A.u(A.a([A.V(B.D_,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eF(D.b16,D.dcV,this.c,A.ds(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aD(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.B_,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYQ.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBS(B.Do,"YouTube",s===0,r,new C.djG(u))
s=u.aBS(B.js,"Device",s===1,r,new C.djH(u))
w=r?"Power off":"Power on"
v=r?B.NY:D.aVl
return A.q(t,A.F(A.a([q,B.ag,s,B.b4,A.aN(t,t,t,t,A.V(v,r?B.bN:B.f7,t,t,t),t,t,t,u.f,t,t,t,t,w,B.d3)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,t,D.aMW,t,t,t)},
aBS(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b6
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.O,!0,u,A.aG(!1,A.m(10),!0,new A.C(B.lm,A.u(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aT3.prototype={
B(d){return D.aAB}}
C.aMm.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iB,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ue("Serial",u.c),q=w.ue("Model",u.d),p=w.ue("Device ID",u.e),o=w.ue("IMEI",u.r),n=w.ue("MAC",u.f),m=w.ue("OS",u.w+" "+u.x),l=w.ue("Location",u.y+", "+u.z),k=w.ue("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ue("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aJ,s,B.ac,r,q,p,o,n,m,l,k,j,w.ue("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bo,v,v,B.ak,!1)},
ue(d,e){var w=null
return new A.C(B.dk,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d3v,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LJ.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rj.prototype={
gaSz(){var w=this.c
return w===D.ajv||w===D.ajw||w===D.Ri||w===D.ajx}}
C.a9t.prototype={
U(){return new C.aRE(null,null)}}
C.aRE.prototype={
a_(){this.a3()
var w=A.bf(null,B.tF,null,1,null,this)
w.fE(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b24()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.o(t,t,t,t,t,new A.a6(B.bM,B.bL,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.cS,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cE(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kG,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oz
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aT8(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.b8,B.t,s,t)}}
C.aT8.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kF(u,B.I,new C.d79(this),B.cb,B.bX,!0,w,w,new C.d7a(this),w)
return new C.GU(v,w)}}
C.GU.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tu,B.WF],x.O),B.kG)
break
case 1:w=new A.aI(A.a([B.B_,D.aGB],x.O),B.ms)
break
case 2:w=new A.aI(A.a([D.aIn,D.aFV],x.O),B.D6)
break
case 3:w=new A.aI(A.a([B.V,B.dP],x.O),B.Dd)
break
case 4:w=new A.aI(A.a([B.aw,B.aP],x.O),B.qO)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a6(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apw.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcM())
w.aC$=null
w.a5()},
bd(){this.bq()
this.bp()
this.cN()}}
C.a9u.prototype={
U(){return new C.ajX()}}
C.ajX.prototype={
ab3(d,e){var w,v=C.bw7(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dMk(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.emT(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bPG(){var w,v=this
if(v.w)return
v.n(new C.d2Y(v))
w=v.e
if(w!=null)v.ab3(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.Da()
$.pz().tA(w,new C.d36(u),!0)}catch(v){u.r=!0
u.f=!1}},
b8(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d3_(v))
w=v.e
w.toString
v.ab3(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a31,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.P,n,n)],v))
return A.f0(A.aC(new A.C(new A.O(12,12,12,12),A.u(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SU(n,B.rh,w)],v)
if(o.f)w.push(A.f0(A.aC(new A.aa(28,28,D.aC0,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b6,B.r,1)
q=A.V(B.DA,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dM(0,A.az(!1,B.O,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ag,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LM,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbPF(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bw7(o.a.d)
if(v!=null)w.push(A.av(8,A.jt(D.aZQ,D.dlx,new C.d2Z(o),A.hM(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.b8,B.t,w,n)}}
var z=a.updateTypes(["p(oY)","~()","LG(N)","oY(a_<@,@>)","Z(oY)","a_<p,@>(oY)","aE<~>()","LF(N)","lM<L>(N,rj?,r?)","Z0(N,L)","vf(N,rj?,r?)","GU(N,ar,dQ?)"])
C.dIc.prototype={
$1(d){return new C.LG(this.a,null)},
$S:z+2}
C.dIb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.V],j):A.a([B.c,B.ax],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eC,32)],x.V),g=A.J(m?B.ce:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.aA.k(m?0.18:0.08)],j)
e=A.q(n,D.aX1,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.u(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eD,w,A.aN(n,n,n,n,A.V(B.cO,m?B.at:B.d_,n,n,n),n,n,n,new C.dI7(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a6(B.a_,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LU,n,n,n)
e=A.eb(B.cT,A.a([new C.Pf("YouTube",B.O1,m,n),new C.Pf("TikTok",B.ms,m,n),new C.Pf("Instagram",B.D6,m,n),new C.Pf("Facebook",B.Dd,m,n)],v),B.cy,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c6:B.hS,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bE
r=A.V(B.fT,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aM
u=A.u(A.a([e,B.aQ,A.aO(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.U),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vn),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ae,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.al,n,B.i,B.k,0,B.p)
e=A.jt(D.aX5,D.dpQ,new C.dI8(d),A.hM(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.C(new A.O(12,0,12,12+l.f.d),A.cw(A.bO(f,A.u(A.a([j,new A.C(B.a_w,u,n),new A.C(D.aOV,A.F(A.a([e,B.b4,A.bZ(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dI9(d),n,n),B.ag,A.dE(D.b0M,D.dqG,new C.dIa(d,w),A.bn(B.a6,n,n,n,B.c,n,B.LM,n,new A.bq(A.m(14),B.U),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.al,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a6(B.av,B.aD,B.E,i,n,n),B.o),B.bq),n)},
$S:78}
C.dI7.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dI8.prototype={
$0(){C.dZ7()
$.R9().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dI9.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dIa.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bwj.prototype={
$1(d){return C.dZ8(A.S(d,x.N,x.z))},
$S:z+3}
C.bwk.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bwb.prototype={
$1(d){return d.c},
$S:z+0}
C.bwc.prototype={
$1(d){return d.r},
$S:z+0}
C.bwd.prototype={
$1(d){return d.f},
$S:z+0}
C.bwe.prototype={
$1(d){return d.at},
$S:z+0}
C.bwf.prototype={
$1(d){return d.c},
$S:z+0}
C.bwg.prototype={
$1(d){return d.r},
$S:z+0}
C.bwh.prototype={
$1(d){return d.f},
$S:z+0}
C.bwi.prototype={
$1(d){return d.at},
$S:z+0}
C.bwa.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bw9.prototype={
$1(d){return B.b.b7(B.m.ha(d,16),2,"0").toUpperCase()},
$S:84}
C.d2P.prototype={
$0(){},
$S:0}
C.d2O.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d2M.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d2N.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d2Q.prototype={
$1(d){return new C.LF(this.a,null)},
$S:z+7}
C.d2V.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,B.p3,w,w,w,new C.d2U(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h1(A.F(A.a([new A.oW(D.ym,e,g,36,B.xT,w),B.aN,A.E(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fC(B.f.gI(D.ym).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.O,!0,w,A.aG(!1,w,!0,new A.C(B.bH,A.V(B.hH,A.ao(B.f.gI(D.ym),B.f.ga6(D.ym),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbyF(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.ym,w,g,B.eQ,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:288}
C.d2U.prototype={
$0(){return A.a0(this.a,!1).e7()},
$S:0}
C.d2W.prototype={
$3(d,e,f){return new A.lM($.Ia(),new C.d2T(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d2T.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EH(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.V(B.kG,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Ia().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ag,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.V,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dx,B.f4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bO(s,new A.hO(1.7777777777777777,C.dZ9(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaSz(),"fleet_master"),k),B.aC),B.ac],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uV(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.la(new A.C(B.LI,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.ol(D.aMv,A.aGQ(new A.oj(new C.d2S(i,j),J.a3(i.d),!1,!0,!0,A.uI(),k),D.cXF),k)],w))},
$S:1852}
C.d2S.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Z0(v,e,J.a3(w.d),new C.d2R(w,v),this.b,null)},
$S:z+9}
C.d2R.prototype={
$0(){return this.a.by_(this.b)},
$S:0}
C.d2X.prototype={
$0(){this.a.Xn()
return null},
$S:0}
C.d2J.prototype={
$0(){return A.a0(this.a,!1).e7()},
$S:0}
C.d2K.prototype={
$0(){C.a13(this.a,$.bw8)
return null},
$S:0}
C.d2L.prototype={
$3(d,e,f){return A.eK(new C.d2I(this.a,e))},
$S:z+10}
C.d2I.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.P,v,v),B.aQ,new C.aYR(u,s.a.c,s.e,s.d,new C.d2F(s),new C.d2G(s),new C.d2H(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oJ,v,v,B.ak),v,v,v)},
$S:1853}
C.d2F.prototype={
$0(){var w=this.a.c
w.toString
C.a13(w,$.bw8)
return null},
$S:0}
C.d2G.prototype={
$1(d){var w=this.a
return w.n(new C.d2E(w,d))},
$S:31}
C.d2E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d2H.prototype={
$0(){var w=this.a
return w.n(new C.d2D(w))},
$S:0}
C.d2D.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.djG.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.djH.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d79.prototype={
$3(d,e,f){return new C.GU(this.a.c,null)},
$S:z+11}
C.d7a.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.b8,B.t,A.a([new C.GU(this.a.c,null),D.aAX],x.p),null)},
$C:"$3",
$R:3,
$S:461}
C.d2Y.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d36.prototype={
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
w.ab3(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.d33(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.d34(w),!1,u)
A.bJ(B.jY,new C.d35(w),x.H)
w=w.e
w.toString
return w},
$S:682}
C.d33.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d32(w))},
$S:30}
C.d32.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d34.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d31(w))},
$S:30}
C.d31.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d35.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d30(w))},
$S:12}
C.d30.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3_.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d2Z.prototype={
$0(){var w,v=C.bw7(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mW.Lx(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dDv.prototype={
$1(d){var w,v,u,t,s=new A.w5([],[]).x8(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1854};(function aliases(){var w=C.apw.prototype
w.b24=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajW.prototype,"gaC5","bvl",1)
w(u,"gbvU","bvV",1)
w(u,"gbyF","byG",6)
w(C.ajX.prototype,"gbPF","bPG",1)
v(C,"eHA","dZ6",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zM,[C.dIc,C.dIb,C.bwj,C.bwk,C.bwb,C.bwc,C.bwd,C.bwe,C.bwf,C.bwg,C.bwh,C.bwi,C.bwa,C.bw9,C.d2Q,C.d2V,C.d2W,C.d2T,C.d2L,C.d2G,C.d79,C.d7a,C.d36,C.d33,C.d34,C.dDv])
v(A.a2t,[C.dI7,C.dI8,C.dI9,C.dIa,C.d2P,C.d2O,C.d2M,C.d2N,C.d2U,C.d2R,C.d2X,C.d2J,C.d2K,C.d2F,C.d2E,C.d2H,C.d2D,C.djG,C.djH,C.d2Y,C.d32,C.d31,C.d35,C.d30,C.d3_,C.d2Z])
v(A.ap,[C.Pf,C.Z0,C.aQm,C.aYR,C.aYS,C.aRJ,C.aYQ,C.aT3,C.aMm,C.aT8,C.GU])
v(A.ar,[C.oY,C.rj])
v(A.ad,[C.LG,C.LF,C.a9t,C.a9u])
v(A.ae,[C.ajW,C.aRD,C.apw,C.ajX])
v(A.a2u,[C.d2S,C.d2I])
u(C.LJ,A.aNh)
u(C.aRE,C.apw)
w(C.apw,A.dB)})()
A.e1y(b.typeUniverse,JSON.parse('{"LG":{"ad":[],"r":[]},"Z0":{"ap":[],"r":[]},"LF":{"ad":[],"r":[]},"Pf":{"ap":[],"r":[]},"ajW":{"ae":["LG"]},"aQm":{"ap":[],"r":[]},"aRD":{"ae":["LF"]},"aYR":{"ap":[],"r":[]},"aYS":{"ap":[],"r":[]},"aRJ":{"ap":[],"r":[]},"aYQ":{"ap":[],"r":[]},"aT3":{"ap":[],"r":[]},"aMm":{"ap":[],"r":[]},"a9t":{"ad":[],"r":[]},"GU":{"ap":[],"r":[]},"aRE":{"ae":["a9t"]},"aT8":{"ap":[],"r":[]},"a9u":{"ad":[],"r":[]},"ajX":{"ae":["a9u"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<oY>"),S:w("a9<fC>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<oY>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oS"),_:w("EE"),k:w("oY"),N:w("p"),Y:w("bi<a4>"),W:w("d2<p>"),J:w("lM<L>"),j:w("lM<rj?>"),E:w("ug<d_>"),q:w("ZY"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZX=new A.ab(B.NY,48,B.b6,null,null,null)
D.dbO=new A.z("Powered off",null,B.ar3,null,null,null,null,null,null,null,null,null)
D.bWU=w([D.aZX,B.N,D.dbO],x.p)
D.aJM=new A.eJ(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bWU,null)
D.aAB=new A.cU(B.I,null,null,D.aJM,null)
D.cXk=new A.aa(18,18,B.Wn,null)
D.aAX=new A.cU(B.I,null,null,D.cXk,null)
D.aC0=new A.fq(2,null,null,null,null,B.a9,null,null,null,null)
D.aFV=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGB=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIn=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMl=new A.O(0,3,0,3)
D.aMv=new A.O(10,0,10,88)
D.aMW=new A.O(12,6,12,10)
D.aNq=new A.O(14,8,14,6)
D.aOV=new A.O(20,8,20,20)
D.a01=new A.O(8,6,15,8)
D.aVl=new A.Q(983222,"MaterialIcons",!1)
D.aX1=new A.ab(B.kG,26,B.a6,null,null,null)
D.aX5=new A.ab(B.a1M,18,null,null,null,null)
D.aXj=new A.ab(B.ux,14,B.a9,null,null,null)
D.aVE=new A.Q(983420,"MaterialIcons",!1)
D.aYb=new A.ab(D.aVE,14,B.a9,null,null,null)
D.aTK=new A.Q(62895,"MaterialIcons",!1)
D.aYg=new A.ab(D.aTK,14,B.a9,null,null,null)
D.aZQ=new A.ab(B.up,16,B.a9,null,null,null)
D.b0M=new A.ab(B.ip,20,null,null,null,null)
D.b16=new A.ab(B.hH,16,null,null,null,null)
D.c_Q=w([B.aP,B.V],x.O)
D.a4K=new A.a6(B.av,B.aD,B.E,D.c_Q,null,null)
D.cQr=new A.aI("NGMY OS","14.2.1")
D.cP_=new A.aI("VirtualDroid","13.8.4")
D.cOZ=new A.aI("NGMY OS","15.0.0")
D.cPV=new A.aI("VirtualDroid","14.1.2")
D.cOV=new A.aI("NGMY Tab OS","12.9.7")
D.cOT=new A.aI("NGMY OS","13.5.3")
D.cOI=new A.aI("VirtualDroid","15.2.0")
D.cPq=new A.aI("NGMY OS","14.8.1")
D.cQ_=new A.aI("NGMY Tab OS","13.2.4")
D.cQE=new A.aI("VirtualDroid","12.6.9")
D.cOB=new A.aI("NGMY OS","16.0.1")
D.cOr=new A.aI("VirtualDroid","14.9.0")
D.cQh=new A.aI("NGMY Tab OS","14.0.3")
D.cPb=new A.aI("NGMY OS","13.1.8")
D.cOz=new A.aI("VirtualDroid","13.4.5")
D.cOS=new A.aI("NGMY OS","15.3.2")
D.cQ0=new A.aI("NGMY Tab OS","12.4.1")
D.cQk=new A.aI("VirtualDroid","16.1.0")
D.cPp=new A.aI("NGMY OS","14.4.6")
D.cQs=new A.aI("VirtualDroid","15.0.8")
D.bZZ=w([D.cQr,D.cP_,D.cOZ,D.cPV,D.cOV,D.cOT,D.cOI,D.cPq,D.cQ_,D.cQE,D.cOB,D.cOr,D.cQh,D.cPb,D.cOz,D.cOS,D.cQ0,D.cQk,D.cPp,D.cQs],A.b4("a9<+(p,p)>"))
D.ym=w([B.a6,B.fG],x.O)
D.cSQ=new A.f4(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cSo=new A.f4(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cSj=new A.f4(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cSs=new A.f4(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cSf=new A.f4(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cSu=new A.f4(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cSS=new A.f4(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cSg=new A.f4(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cSn=new A.f4(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cSw=new A.f4(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cSe=new A.f4(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cSK=new A.f4(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cSH=new A.f4(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cSm=new A.f4(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cSE=new A.f4(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cSD=new A.f4(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cSd=new A.f4(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cSr=new A.f4(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cSB=new A.f4(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cSG=new A.f4(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abJ=w([D.cSQ,D.cSo,D.cSj,D.cSs,D.cSf,D.cSu,D.cSS,D.cSg,D.cSn,D.cSw,D.cSe,D.cSK,D.cSH,D.cSm,D.cSE,D.cSD,D.cSd,D.cSr,D.cSB,D.cSG],A.b4("a9<+(p,p,a4,a4,p)>"))
D.c8W=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajv=new C.LJ(0,"youtube")
D.ajw=new C.LJ(1,"tiktok")
D.Ri=new C.LJ(2,"instagram")
D.ajx=new C.LJ(3,"facebook")
D.cH3=new C.LJ(4,"other")
D.cXF=new A.hr(4,10,8,0.52,null)
D.dd7=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d07=new A.aW(D.dd7,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d3v=new A.M(!0,B.c,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dcV=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dlx=new A.z("Open in YouTube",null,B.jG,null,null,null,null,null,null,null,null,null)
D.dpQ=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dqG=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dqP=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dyJ=new C.aT3(null)})();(function staticFields(){$.dZ5=20
$.aCL=null
$.bw8=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eMB","Ia",()=>A.adW(0))
w($,"eMC","R9",()=>A.adW(null))})()};
(a=>{a["E3V62Vgi5uuyzkURLy9LjbdUyh0="]=a.current})($__dart_deferred_initializers__);