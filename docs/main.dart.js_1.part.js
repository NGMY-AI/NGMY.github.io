((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eLM(d,e){A.a0(d,!1).cn(A.ez(new C.dKu(e),!0,null,x.H))},
a1m(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Rk()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.an(new A.bf(n,B.aT,B.aI),t)
w=3
return A.b(A.d0(B.J,new C.dKt(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1m)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.epD(r)
if(q==null){d.F(x.q).f.P(D.d24)
w=1
break}w=4
return A.b(A.bJ(B.i2,null,x.H),$async$a1m)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.e0w=n
p=C.epx(n)
n=$.Ik()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dOL(q)
d.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1m,v)},
e0z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.p9(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LQ(d){return C.epG(d)},
epG(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LQ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ar(),$async$LQ)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aA(0,a0,null)
w=x.a.b(r)&&J.cB(r)?10:11
break
case 10:k=J.eu(r,x.f)
k=A.da(k,new C.bxJ(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.bxK(),j),j.j("I.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.e0B(q)
w=12
return A.b(C.LP(a3,p),$async$LQ)
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
case 9:case 5:o=A.aK(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.L.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.e0z(A.S(n,x.N,x.z))
l=C.e0B(A.a([m],x.e))
w=21
return A.b(C.LP(a3,l),$async$LQ)
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
case 18:case 14:q=C.epE()
w=22
return A.b(C.LP(a3,q),$async$LQ)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LQ,v)},
e0B(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bxB(),w).eu(0),u=new A.H(d,new C.bxC(),w).eu(0),t=new A.H(d,new C.bxD(),w).eu(0),s=new A.H(d,new C.bxE(),w).eu(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dOM(null,q,u,t,v,s));++q}return r},
aDo(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aDo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LQ(d),$async$aDo)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d5(t,new C.bxF(),s).eu(0)
p=r.d5(t,new C.bxG(),s).eu(0)
o=r.d5(t,new C.bxH(),s).eu(0)
n=r.d5(t,new C.bxI(),s).eu(0)
m=C.dOM(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LP(d,t),$async$aDo)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aDo,v)},
LP(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ar(),$async$LP)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.bxA(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ai("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ag(s,null)),$async$LP)
case 3:return A.h(null,v)}})
return A.i($async$LP,v)},
epE(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dOM(w,w,t,s,u,r)
return q},
dOM(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lZ(),h=d==null,g=D.ac3[B.m.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.ac3[B.m.a0(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.H(p,new C.bxz(),A.X(p).j("H<1,p>")).fZ(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.f.fZ(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b8(B.m.ha(i.bx(256),16),2,"0")
s=B.f.b9(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a0(e,20)
k=D.ca4[w]
j=D.c_T[w]
return new C.p9("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.b.b8(B.m.t(e+1),2,"0"),u,k,C.epF(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a8().a4())},
epF(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bx(256),16),2,"0")
return B.f.fZ(v)},
dKu:function dKu(d){this.a=d},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKp:function dKp(d){this.a=d},
dKq:function dKq(d){this.a=d},
dKr:function dKr(d){this.a=d},
dKs:function dKs(d,e){this.a=d
this.b=e},
Pp:function Pp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
p9:function p9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bxJ:function bxJ(){},
bxK:function bxK(){},
bxB:function bxB(){},
bxC:function bxC(){},
bxD:function bxD(){},
bxE:function bxE(){},
bxF:function bxF(){},
bxG:function bxG(){},
bxH:function bxH(){},
bxI:function bxI(){},
bxA:function bxA(){},
bxz:function bxz(){},
LO:function LO(d,e){this.c=d
this.a=e},
aki:function aki(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d4A:function d4A(){},
d4z:function d4z(d,e){this.a=d
this.b=e},
d4x:function d4x(d){this.a=d},
d4y:function d4y(d,e){this.a=d
this.b=e},
d4B:function d4B(d){this.a=d},
d4G:function d4G(d){this.a=d},
d4F:function d4F(d){this.a=d},
d4H:function d4H(d,e){this.a=d
this.b=e},
d4E:function d4E(d,e,f){this.a=d
this.b=e
this.c=f},
d4D:function d4D(d,e){this.a=d
this.b=e},
d4C:function d4C(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
Zd:function Zd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aR2:function aR2(d,e){this.c=d
this.a=e},
LN:function LN(d,e){this.c=d
this.a=e},
aSj:function aSj(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d4u:function d4u(d){this.a=d},
d4v:function d4v(d){this.a=d},
d4w:function d4w(d){this.a=d},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4q:function d4q(d){this.a=d},
d4r:function d4r(d){this.a=d},
d4p:function d4p(d,e){this.a=d
this.b=e},
d4s:function d4s(d){this.a=d},
d4o:function d4o(d){this.a=d},
aZB:function aZB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZC:function aZC(d,e,f){this.c=d
this.d=e
this.a=f},
aSq:function aSq(d,e){this.c=d
this.a=e},
aZA:function aZA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dly:function dly(d){this.a=d},
dlz:function dlz(d){this.a=d},
aTL:function aTL(d){this.a=d},
aN3:function aN3(d,e){this.c=d
this.a=e},
epD(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.epC(v)
if(u!=null)return new C.rq(w,C.dOK(u,!1),D.ajT,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.epB(v)
if(t!=null)return new C.rq(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajU,"TikTok",q)
s=C.epA(w,v)
if(s!=null)return s
r=C.epz(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.rq(w,w,D.cIT,"Video",q)
return q},
epA(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.af("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rq(d,"https://www.instagram.com/reel/"+w+u,D.Rx,t,null)}v=A.af("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rq(d,"https://www.instagram.com/p/"+w+u,D.Rx,t,null)}return null},
epz(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.rq(d,"https://www.facebook.com/plugins/video.php?href="+A.fJ(2,d,B.by,!1)+"&show_text=false&width=734",D.ajV,"Facebook",null)},
epC(d){var w,v,u,t=[A.af(y.c,!0,!1,!1,!1),A.af("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.af("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dn(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
epB(d){var w,v=A.af("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dn(d)
if(v!=null)return v.b[1]
w=A.af("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
LR:function LR(d,e){this.a=d
this.b=e},
rq:function rq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9N:function a9N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aSk:function aSk(d,e){var _=this
_.d=$
_.ck$=d
_.aC$=e
_.c=_.a=null},
aTQ:function aTQ(d,e){this.c=d
this.a=e},
d91:function d91(d){this.a=d},
d92:function d92(d){this.a=d},
H3:function H3(d,e){this.c=d
this.a=e},
apX:function apX(){},
e0A(d,e,f,g,h,i){return new C.a9O(i,f,h,e,g,d)},
eKb(d){var w=window
w.toString
A.h7(w,"message",new C.dFE(d),!1,x._)},
a9O:function a9O(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akj:function akj(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d4J:function d4J(d){this.a=d},
d4S:function d4S(d){this.a=d},
d4P:function d4P(d){this.a=d},
d4O:function d4O(d){this.a=d},
d4Q:function d4Q(d){this.a=d},
d4N:function d4N(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4M:function d4M(d){this.a=d},
d4L:function d4L(d){this.a=d},
d4K:function d4K(d){this.a=d},
dFE:function dFE(d){this.a=d},
epv(){var w,v,u
try{v=A.rM()
w=v.gvm(v)
if(J.a2(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dOK(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b9(w,"&")},
bxx(d){var w=A.af(y.c,!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
e0v(d){var w=A.aR(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aR(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
epw(d,e,f){var w,v,u=C.bxx(d)
if(u!=null){if(f){w=C.epv()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e0v(C.dOK(u,e))}return C.e0v(d)},
epx(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
epy(d){var w
if($.Rk().a==null)return!1
w=$.Ik().a
return d>=w&&d<w+4},
e0y(){var w=$.aDn
if(w!=null)w.aa(0)
$.aDn=null
$.Ik().sv(0,0)},
e0x(){var w,v,u,t=$.Rk()
if(t.a==null)return
w=$.aDn
if(w!=null)w.aa(0)
v=$.e0w
if(v<=4){t=t.a
t.toString
C.dOL(t)
return}w=$.Ik()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dOL(t)},
dOL(d){var w=$.aDn
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
default:w=null}$.aDn=A.dv(A.d9(0,0,0,0,0,w),C.eKu())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pp.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.W(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fu,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cl,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Y,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fV,w,w,w)}}
C.p9.prototype={
ac(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LO.prototype={
U(){return new C.aki(A.a([],x.e))},
gel(){return this.c}}
C.aki.prototype={
a_(){var w=this
w.a3()
$.Ik().aB(0,w.gaCx())
C.eKb(w.gbwE())
w.a1b()},
bw5(){if(this.c!=null)this.n(new C.d4A())},
bwF(){C.e0x()},
p(){$.Ik().Z(0,this.gaCx())
C.e0y()
$.Rk().sv(0,null)
this.a5()},
a1b(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LQ(t.a.c),$async$a1b)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d4z(t,s))
$.bxy=J.a2(s)
case 1:return A.h(u,v)}})
return A.i($async$a1b,v)},
XD(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d4x(t))
w=3
return A.b(C.aDo(t.a.c),$async$XD)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d4y(t,s))
$.bxy=J.a2(t.d)
t.c.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XD,v)},
byM(d){var w=this.c
w.toString
A.a0(w,!1).cn(A.ez(new C.d4B(d),!1,null,x.H))},
bzs(){var w=this.c
w.toString
return C.a1m(w,J.a2(this.d))},
B(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.ip:B.bD,s=A.bB(!0,A.u(A.a([new A.B(D.a0f,new A.js(new C.d4G(w),v),v),A.D(w.e?B.n7:new A.lT($.Rk(),new C.d4H(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.aa,!0,!0)
return A.c4(v,t,s,v,!1,!1,A.awM(B.a6,B.JL,B.kR,D.dsR,w.e?v:new C.d4I(w)),v)}}
C.Zd.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9N(n,!0,!C.epy(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.W(B.kN,B.oL,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b1,B.k,0,B.p),B.j,B.Bn,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.u(A.a([A.D(A.q(u,A.bI(p,A.f2(A.u(A.a([new C.aR2(o,u),A.D(n,1),A.q(u,A.F(A.a([A.W(B.uE,B.a6.k(0.85),u,u,9),B.aqs,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b1,B.k,0,u,u),B.j,B.aB,u,u,u,u,u,u,D.aMQ,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.az),B.j,u,u,new A.o(u,u,r,s,q,D.a53,B.o),u,u,u,u,B.fa,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.C(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aR2.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.D(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.pa,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aB,w,w,w,w,w,w,B.a04,w,w,w)}}
C.LN.prototype={
U(){return new C.aSj()}}
C.aSj.prototype={
B(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.ip:B.bD,t=A.aM(w,w,w,w,B.a42,w,w,w,new C.d4u(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c4(w,u,A.bB(!0,A.u(A.a([new A.B(D.a0f,A.F(A.a([t,A.D(new A.LC(A.F(A.a([A.D(new A.B(B.k4,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.B(B.bp,A.W(B.hO,B.a6,w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d4v(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.D(new A.lT($.Rk(),new C.d4w(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.aa,!0,!0),w,!1,!1,w,w)}}
C.aZB.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eG,28),new A.a5(0,B.G,B.A.k(0.45),B.d9,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e0A(new A.d_(v+"_full_"+u,x.W),!1,u,!1,w.gaT5(),v+"_full")
w=v}else w=new C.aSq(t.r,s)}else w=new C.aN3(m,s)
else w=D.dAK
return A.q(s,A.bI(n,A.f2(A.u(A.a([new C.aZC(m,l,s),A.D(w,1),new C.aZA(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.az),B.j,s,s,new A.o(s,s,o,q,p,D.a53,B.o),s,r*2.05,s,s,B.bU,s,s,r)}}
C.aZC.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glR()
r=r.gFy()
w=new A.dP(q,r)
v=w.gLp()===0?12:w.gLp()
r=B.b.b8(B.m.t(r),2,"0")
q=(q<12?B.hG:B.jZ)===B.hG?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.ok,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bI,D.aYT,B.dc,D.aY0,B.dc,D.aYY],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.F(A.a([A.W(B.y9,B.a6.k(0.9),s,s,12),B.dc,A.D(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aB,s,s,s,s,s,s,D.aNZ,s,s,s)}}
C.aSq.prototype={
B(d){var w=null
return A.q(w,A.aB(A.u(A.a([A.W(B.Dl,B.c.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eN(D.b1L,D.deU,this.c,A.dp(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aD(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Y,0,B.p),w,w,w),B.j,B.Bn,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZA.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCj(B.DJ,"YouTube",s===0,r,new C.dly(u))
s=u.aCj(B.jy,"Device",s===1,r,new C.dlz(u))
w=r?"Power off":"Power on"
v=r?D.a30:D.aW_
return A.q(t,A.F(A.a([q,B.ai,s,B.ba,A.aM(t,t,t,t,A.W(v,r?B.bN:B.fr,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aB,t,t,t,t,t,t,D.aNr,t,t,t)},
aCj(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b9
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.D(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.B(B.mr,A.u(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Y,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aTL.prototype={
B(d){return D.aB2}}
C.aN3.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ie,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.uj("Serial",u.c),q=w.uj("Model",u.d),p=w.uj("Device ID",u.e),o=w.uj("IMEI",u.r),n=w.uj("MAC",u.f),m=w.uj("OS",u.w+" "+u.x),l=w.uj("Location",u.y+", "+u.z),k=w.uj("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.uj("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aJ,s,B.af,r,q,p,o,n,m,l,k,j,w.uj("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bp,v,v,B.al,!1)},
uj(d,e){var w=null
return new A.B(B.dk,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d5t,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LR.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rq.prototype={
gaT5(){var w=this.c
return w===D.ajT||w===D.ajU||w===D.Rx||w===D.ajV}}
C.a9N.prototype={
U(){return new C.aSk(null,null)}}
C.aSk.prototype={
a_(){this.a3()
var w=A.be(null,B.tP,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2C()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bJ,B.bP,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cT,p,t)
w=B.c.k(0.92)
q=A.aB(new A.cF(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.W(B.kN,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oL
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aTQ(s,t),r,q,A.au(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.N(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.at(B.a5,t,B.bb,B.t,s,t)}}
C.aTQ.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kl(u,B.I,new C.d91(this),B.c4,B.c_,!0,w,w,new C.d92(this),w)
return new C.H3(v,w)}}
C.H3.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tE,B.WW],x.O),B.kN)
break
case 1:w=new A.aI(A.a([B.Bn,D.aH3],x.O),B.mw)
break
case 2:w=new A.aI(A.a([D.aIT,D.aGm],x.O),B.Dr)
break
case 3:w=new A.aI(A.a([B.U,B.dv],x.O),B.Dx)
break
case 4:w=new A.aI(A.a([B.aB,B.aO],x.O),B.qY)
break
default:w=u}v=w.a
return A.q(u,A.aB(A.W(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apX.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcN())
w.aC$=null
w.a5()},
be(){this.bq()
this.bp()
this.cO()}}
C.a9O.prototype={
U(){return new C.akj()}}
C.akj.prototype={
abt(d,e){var w,v=C.bxx(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dOK(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.epw(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bQG(){var w,v=this
if(v.w)return
v.n(new C.d4J(v))
w=v.e
if(w!=null)v.abt(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.Dk()
$.pJ().tF(w,new C.d4S(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d4L(v))
w=v.e
w.toString
v.abt(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a3m,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f2(A.aB(new A.B(new A.N(12,12,12,12),A.u(w,B.n,n,B.i,B.Y,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.T4(n,B.ru,w)],v)
if(o.f)w.push(A.f2(A.aB(new A.aa(28,28,D.aCs,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b9,B.r,1)
q=A.W(B.DU,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dL(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aB(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Y,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.M2,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbQF(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bxx(o.a.d)
if(v!=null)w.push(A.au(8,A.iP(D.b_y,D.dnz,new C.d4K(o),A.hf(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fV,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.at(B.a5,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["p(p9)","~()","LO(O)","p9(a_<@,@>)","Z(p9)","a_<p,@>(p9)","aE<~>()","LN(O)","lT<L>(O,rq?,r?)","Zd(O,L)","vm(O,rq?,r?)","H3(O,aq,dS?)"])
C.dKu.prototype={
$1(d){return new C.LO(this.a,null)},
$S:z+2}
C.dKt.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.U],j):A.a([B.c,B.aA],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eG,32)],x.V),g=A.J(m?B.ce:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aXK,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.ae),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.D(A.u(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eH,w,A.aM(n,n,n,n,A.W(B.cJ,m?B.at:B.d_,n,n,n),n,n,n,new C.dKp(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.Ma,n,n,n)
e=A.ec(B.cR,A.a([new C.Pp("YouTube",B.Oe,m,n),new C.Pp("TikTok",B.mw,m,n),new C.Pp("Instagram",B.Dr,m,n),new C.Pp("Facebook",B.Dx,m,n)],v),B.cz,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ca:B.i0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.W(B.fD,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aL
u=A.u(A.a([e,B.aS,A.aO(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.W),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.VE),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.ak,n,B.i,B.k,0,B.p)
e=A.iP(D.aXO,D.drS,new C.dKq(d),A.hf(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.B(new A.N(12,0,12,12+l.f.d),A.cv(A.bI(f,A.u(A.a([j,new A.B(B.a_K,u,n),new A.B(D.aPv,A.F(A.a([e,B.ba,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dKr(d),n,n),B.ai,A.dH(D.b1r,D.dsI,new C.dKs(d,w),A.bp(B.a6,n,n,n,B.c,n,B.M2,n,new A.bo(A.m(14),B.W),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ak,n,B.i,B.Y,0,B.p),B.az),new A.o(n,n,g,k,h,new A.a7(B.au,B.aD,B.E,i,n,n),B.o),B.bq),n)},
$S:73}
C.dKp.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dKq.prototype={
$0(){C.e0y()
$.Rk().sv(0,null)
A.a0(this.a,!1).M(null)},
$S:0}
C.dKr.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dKs.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).M(w)
return null},
$S:0}
C.bxJ.prototype={
$1(d){return C.e0z(A.S(d,x.N,x.z))},
$S:z+3}
C.bxK.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bxB.prototype={
$1(d){return d.c},
$S:z+0}
C.bxC.prototype={
$1(d){return d.r},
$S:z+0}
C.bxD.prototype={
$1(d){return d.f},
$S:z+0}
C.bxE.prototype={
$1(d){return d.at},
$S:z+0}
C.bxF.prototype={
$1(d){return d.c},
$S:z+0}
C.bxG.prototype={
$1(d){return d.r},
$S:z+0}
C.bxH.prototype={
$1(d){return d.f},
$S:z+0}
C.bxI.prototype={
$1(d){return d.at},
$S:z+0}
C.bxA.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bxz.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:93}
C.d4A.prototype={
$0(){},
$S:0}
C.d4z.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d4x.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d4y.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d4B.prototype={
$1(d){return new C.LN(this.a,null)},
$S:z+7}
C.d4G.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,B.r0,w,w,w,new C.d4F(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a2(u.d)+")",s=x.p
return A.F(A.a([v,A.D(A.fZ(A.F(A.a([new A.p7(D.yG,e,g,36,B.y9,w),B.aN,A.D(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fF(B.f.gI(D.yG).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.B(B.bU,A.W(B.hO,A.ao(B.f.gI(D.yG),B.f.ga6(D.yG),e),w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbzr(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yG,w,g,B.eF,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:346}
C.d4F.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d4H.prototype={
$3(d,e,f){return new A.lT($.Ik(),new C.d4E(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d4E.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EQ(d,k,x.Q)
w=w==null?k:w.glS()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.W(B.kN,B.a6,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Ik().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.D(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dy,B.f4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bI(s,new A.hP(1.7777777777777777,C.e0A(new A.d_("fleet_master_"+r,x.W),!0,r,!0,j.gaT5(),"fleet_master"),k),B.az),B.af],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.v2(0,B.t,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.lf(new A.B(B.CA,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.ou(D.aN0,A.aHs(new A.os(new C.d4D(i,j),J.a2(i.d),!1,!0,!0,A.uN(),k),D.cZz),k)],w))},
$S:1862}
C.d4D.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Zd(v,e,J.a2(w.d),new C.d4C(w,v),this.b,null)},
$S:z+9}
C.d4C.prototype={
$0(){return this.a.byM(this.b)},
$S:0}
C.d4I.prototype={
$0(){this.a.XD()
return null},
$S:0}
C.d4u.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d4v.prototype={
$0(){C.a1m(this.a,$.bxy)
return null},
$S:0}
C.d4w.prototype={
$3(d,e,f){return A.eH(new C.d4t(this.a,e))},
$S:z+10}
C.d4t.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cw(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aS,new C.aZB(u,s.a.c,s.e,s.d,new C.d4q(s),new C.d4r(s),new C.d4s(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oU,v,v,B.al),v,v,v)},
$S:1863}
C.d4q.prototype={
$0(){var w=this.a.c
w.toString
C.a1m(w,$.bxy)
return null},
$S:0}
C.d4r.prototype={
$1(d){var w=this.a
return w.n(new C.d4p(w,d))},
$S:31}
C.d4p.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d4s.prototype={
$0(){var w=this.a
return w.n(new C.d4o(w))},
$S:0}
C.d4o.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dly.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dlz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d91.prototype={
$3(d,e,f){return new C.H3(this.a.c,null)},
$S:z+11}
C.d92.prototype={
$3(d,e,f){if(f==null)return e
return new A.at(B.a5,null,B.bb,B.t,A.a([new C.H3(this.a.c,null),D.aBo],x.p),null)},
$C:"$3",
$R:3,
$S:565}
C.d4J.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d4S.prototype={
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
w.abt(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h7(v,"load",new C.d4P(w),!1,u)
v=w.e
v.toString
A.h7(v,"error",new C.d4Q(w),!1,u)
A.bJ(B.kH,new C.d4R(w),x.H)
w=w.e
w.toString
return w},
$S:579}
C.d4P.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d4O(w))},
$S:30}
C.d4O.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d4Q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d4N(w))},
$S:30}
C.d4N.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d4R.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d4M(w))},
$S:12}
C.d4M.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d4L.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d4K.prototype={
$0(){var w,v=C.bxx(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mZ.LK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dFE.prototype={
$1(d){var w,v,u,t,s=new A.uf([],[]).uU(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1864};(function aliases(){var w=C.apX.prototype
w.b2C=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aki.prototype,"gaCx","bw5",1)
w(u,"gbwE","bwF",1)
w(u,"gbzr","bzs",6)
w(C.akj.prototype,"gbQF","bQG",1)
v(C,"eKu","e0x",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zX,[C.dKu,C.dKt,C.bxJ,C.bxK,C.bxB,C.bxC,C.bxD,C.bxE,C.bxF,C.bxG,C.bxH,C.bxI,C.bxA,C.bxz,C.d4B,C.d4G,C.d4H,C.d4E,C.d4w,C.d4r,C.d91,C.d92,C.d4S,C.d4P,C.d4Q,C.dFE])
v(A.a2P,[C.dKp,C.dKq,C.dKr,C.dKs,C.d4A,C.d4z,C.d4x,C.d4y,C.d4F,C.d4C,C.d4I,C.d4u,C.d4v,C.d4q,C.d4p,C.d4s,C.d4o,C.dly,C.dlz,C.d4J,C.d4O,C.d4N,C.d4R,C.d4M,C.d4L,C.d4K])
v(A.ap,[C.Pp,C.Zd,C.aR2,C.aZB,C.aZC,C.aSq,C.aZA,C.aTL,C.aN3,C.aTQ,C.H3])
v(A.aq,[C.p9,C.rq])
v(A.ad,[C.LO,C.LN,C.a9N,C.a9O])
v(A.ae,[C.aki,C.aSj,C.apX,C.akj])
v(A.a2Q,[C.d4D,C.d4t])
u(C.LR,A.aNZ)
u(C.aSk,C.apX)
w(C.apX,A.dB)})()
A.e40(b.typeUniverse,JSON.parse('{"LO":{"ad":[],"r":[]},"Zd":{"ap":[],"r":[]},"LN":{"ad":[],"r":[]},"Pp":{"ap":[],"r":[]},"aki":{"ae":["LO"]},"aR2":{"ap":[],"r":[]},"aSj":{"ae":["LN"]},"aZB":{"ap":[],"r":[]},"aZC":{"ap":[],"r":[]},"aSq":{"ap":[],"r":[]},"aZA":{"ap":[],"r":[]},"aTL":{"ap":[],"r":[]},"aN3":{"ap":[],"r":[]},"a9N":{"ad":[],"r":[]},"H3":{"ap":[],"r":[]},"aSk":{"ae":["a9N"]},"aTQ":{"ap":[],"r":[]},"a9O":{"ad":[],"r":[]},"akj":{"ae":["a9O"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<p9>"),S:w("a9<fF>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ai<p9>"),a:w("ai<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("p2"),_:w("EN"),k:w("p9"),N:w("p"),Y:w("bi<a4>"),W:w("d_<p>"),J:w("lT<L>"),j:w("lT<rq?>"),E:w("um<d1>"),q:w("a_a"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a30=new A.P(983224,"MaterialIcons",!1)
D.b_F=new A.ab(D.a30,48,B.b9,null,null,null)
D.ddO=new A.z("Powered off",null,B.ars,null,null,null,null,null,null,null,null,null)
D.bXK=w([D.b_F,B.N,D.ddO],x.p)
D.aKh=new A.eL(B.al,B.i,B.Y,B.n,null,B.p,null,0,D.bXK,null)
D.aB2=new A.cU(B.I,null,null,D.aKh,null)
D.cZe=new A.aa(18,18,B.WE,null)
D.aBo=new A.cU(B.I,null,null,D.cZe,null)
D.aCs=new A.fs(2,null,null,null,null,B.a9,null,null,null,null)
D.aGm=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aH3=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIT=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMQ=new A.N(0,3,0,3)
D.aN0=new A.N(10,0,10,88)
D.aNr=new A.N(12,6,12,10)
D.aNZ=new A.N(14,8,14,6)
D.aPv=new A.N(20,8,20,20)
D.a0f=new A.N(8,6,15,8)
D.aW_=new A.P(983222,"MaterialIcons",!1)
D.aXK=new A.ab(B.kN,26,B.a6,null,null,null)
D.aXO=new A.ab(B.a21,18,null,null,null,null)
D.aY0=new A.ab(B.pa,14,B.a9,null,null,null)
D.aWi=new A.P(983420,"MaterialIcons",!1)
D.aYT=new A.ab(D.aWi,14,B.a9,null,null,null)
D.aUi=new A.P(62895,"MaterialIcons",!1)
D.aYY=new A.ab(D.aUi,14,B.a9,null,null,null)
D.b_y=new A.ab(B.ux,16,B.a9,null,null,null)
D.b1r=new A.ab(B.iw,20,null,null,null,null)
D.b1L=new A.ab(B.hO,16,null,null,null,null)
D.c0M=w([B.aO,B.U],x.O)
D.a53=new A.a7(B.au,B.aD,B.E,D.c0M,null,null)
D.cSb=new A.aI("NGMY OS","14.2.1")
D.cQM=new A.aI("VirtualDroid","13.8.4")
D.cQL=new A.aI("NGMY OS","15.0.0")
D.cRF=new A.aI("VirtualDroid","14.1.2")
D.cQH=new A.aI("NGMY Tab OS","12.9.7")
D.cQF=new A.aI("NGMY OS","13.5.3")
D.cQu=new A.aI("VirtualDroid","15.2.0")
D.cRb=new A.aI("NGMY OS","14.8.1")
D.cRK=new A.aI("NGMY Tab OS","13.2.4")
D.cSo=new A.aI("VirtualDroid","12.6.9")
D.cQo=new A.aI("NGMY OS","16.0.1")
D.cQe=new A.aI("VirtualDroid","14.9.0")
D.cS1=new A.aI("NGMY Tab OS","14.0.3")
D.cQX=new A.aI("NGMY OS","13.1.8")
D.cQm=new A.aI("VirtualDroid","13.4.5")
D.cQE=new A.aI("NGMY OS","15.3.2")
D.cRL=new A.aI("NGMY Tab OS","12.4.1")
D.cS4=new A.aI("VirtualDroid","16.1.0")
D.cRa=new A.aI("NGMY OS","14.4.6")
D.cSc=new A.aI("VirtualDroid","15.0.8")
D.c_T=w([D.cSb,D.cQM,D.cQL,D.cRF,D.cQH,D.cQF,D.cQu,D.cRb,D.cRK,D.cSo,D.cQo,D.cQe,D.cS1,D.cQX,D.cQm,D.cQE,D.cRL,D.cS4,D.cRa,D.cSc],A.b3("a9<+(p,p)>"))
D.yG=w([B.a6,B.fN],x.O)
D.cUJ=new A.f5(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cUh=new A.f5(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cUc=new A.f5(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cUl=new A.f5(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cU8=new A.f5(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cUn=new A.f5(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cUL=new A.f5(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cU9=new A.f5(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cUg=new A.f5(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cUp=new A.f5(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cU7=new A.f5(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cUD=new A.f5(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cUA=new A.f5(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cUf=new A.f5(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cUx=new A.f5(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cUw=new A.f5(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cU6=new A.f5(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cUk=new A.f5(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cUu=new A.f5(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cUz=new A.f5(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.ac3=w([D.cUJ,D.cUh,D.cUc,D.cUl,D.cU8,D.cUn,D.cUL,D.cU9,D.cUg,D.cUp,D.cU7,D.cUD,D.cUA,D.cUf,D.cUx,D.cUw,D.cU6,D.cUk,D.cUu,D.cUz],A.b3("a9<+(p,p,a4,a4,p)>"))
D.ca4=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajT=new C.LR(0,"youtube")
D.ajU=new C.LR(1,"tiktok")
D.Rx=new C.LR(2,"instagram")
D.ajV=new C.LR(3,"facebook")
D.cIT=new C.LR(4,"other")
D.cZz=new A.he(4,10,8,0.52,null)
D.df6=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d24=new A.aV(D.df6,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d5t=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.deU=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dnz=new A.z("Open in YouTube",null,B.jK,null,null,null,null,null,null,null,null,null)
D.drS=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dsI=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dsR=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dAK=new C.aTL(null)})();(function staticFields(){$.e0w=20
$.aDn=null
$.bxy=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ePx","Ik",()=>A.aeg(0))
w($,"ePy","Rk",()=>A.aeg(null))})()};
(a=>{a["DY2Z5z4QE6/waR6de3WmTkoALvg="]=a.current})($__dart_deferred_initializers__);