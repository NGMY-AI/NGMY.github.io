((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eB9(d,e){A.a2(d,!1).cn(A.eu(new C.dBL(e),!0,null,x.H))},
a0s(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a0s=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qw()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.an(new A.bd(n,B.aQ,B.aH),t)
w=3
return A.b(A.dj(B.K,new C.dBK(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a0s)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.efR(r)
if(q==null){d.G(x.q).f.T(D.cVT)
w=1
break}w=4
return A.b(A.bK(B.hJ,null,x.H),$async$a0s)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dSi=n
p=C.efL(n)
n=$.HA()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dFN(q)
d.G(x.q).f.T(A.bj(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0s,v)},
dSl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aR(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aR(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oO(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
L9(d){return C.efU(d)},
efU(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L9=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$L9)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aA(0,a0,null)
w=x.a.b(r)&&J.cM(r)?10:11
break
case 10:k=J.ez(r,x.f)
k=A.dg(k,new C.buv(),k.$ti.j("G.E"),x.k)
j=A.U(k).j("ag<G.E>")
i=A.y(new A.ag(k,new C.buw(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dSn(q)
w=12
return A.b(C.L8(a3,p),$async$L9)
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
case 19:m=C.dSl(A.S(n,x.N,x.z))
l=C.dSn(A.a([m],x.e))
w=21
return A.b(C.L8(a3,l),$async$L9)
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
case 18:case 14:q=C.efS()
w=22
return A.b(C.L8(a3,q),$async$L9)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L9,v)},
dSn(d){var w=A.V(d).j("D<1,p>"),v=new A.D(d,new C.bun(),w).eo(0),u=new A.D(d,new C.buo(),w).eo(0),t=new A.D(d,new C.bup(),w).eo(0),s=new A.D(d,new C.buq(),w).eo(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dFO(null,q,u,t,v,s));++q}return r},
aBs(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aBs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L9(d),$async$aBs)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.dn(t,new C.bur(),s).eo(0)
p=r.dn(t,new C.bus(),s).eo(0)
o=r.dn(t,new C.but(),s).eo(0)
n=r.dn(t,new C.buu(),s).eo(0)
m=C.dFO(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.L8(d,t),$async$aBs)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aBs,v)},
L8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$L8)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.bum(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.ak("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.aj(s,null)),$async$L8)
case 3:return A.h(null,v)}})
return A.i($async$L8,v)},
efS(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.cO(20,x.k)
for(w=0;w<20;++w)q[w]=C.dFO(w,w,t,s,u,r)
return q},
dFO(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lh(),h=d==null,g=D.aa3[B.m.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.aa3[B.m.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.D(p,new C.bul(),A.V(p).j("D<1,p>")).fP(0)
u="VND-"+B.b.an(n,0,4)+"-"+B.b.an(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.f.fP(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b6(B.m.h3(i.bH(256),16),2,"0")
s=B.f.bg(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a1(e,20)
k=D.c4M[w]
j=D.bW4[w]
return new C.oO("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.b6(B.m.q(e+1),2,"0"),u,k,C.efT(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a7().a3())},
efT(d,e){var w,v=J.cO(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b6(B.m.h3(d.bH(256),16),2,"0")
return B.f.fP(v)},
dBL:function dBL(d){this.a=d},
dBK:function dBK(d,e){this.a=d
this.b=e},
dBG:function dBG(d){this.a=d},
dBH:function dBH(d){this.a=d},
dBI:function dBI(d){this.a=d},
dBJ:function dBJ(d,e){this.a=d
this.b=e},
OF:function OF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oO:function oO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
buv:function buv(){},
buw:function buw(){},
bun:function bun(){},
buo:function buo(){},
bup:function bup(){},
buq:function buq(){},
bur:function bur(){},
bus:function bus(){},
but:function but(){},
buu:function buu(){},
bum:function bum(){},
bul:function bul(){},
L7:function L7(d,e){this.c=d
this.a=e},
aja:function aja(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZq:function cZq(){},
cZp:function cZp(d,e){this.a=d
this.b=e},
cZn:function cZn(d){this.a=d},
cZo:function cZo(d,e){this.a=d
this.b=e},
cZr:function cZr(d){this.a=d},
cZw:function cZw(d){this.a=d},
cZv:function cZv(d){this.a=d},
cZx:function cZx(d,e){this.a=d
this.b=e},
cZu:function cZu(d,e,f){this.a=d
this.b=e
this.c=f},
cZt:function cZt(d,e){this.a=d
this.b=e},
cZs:function cZs(d,e){this.a=d
this.b=e},
cZy:function cZy(d){this.a=d},
Yq:function Yq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aOX:function aOX(d,e){this.c=d
this.a=e},
L6:function L6(d,e){this.c=d
this.a=e},
aQb:function aQb(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cZk:function cZk(d){this.a=d},
cZl:function cZl(d){this.a=d},
cZm:function cZm(d){this.a=d},
cZj:function cZj(d,e){this.a=d
this.b=e},
cZg:function cZg(d){this.a=d},
cZh:function cZh(d){this.a=d},
cZf:function cZf(d,e){this.a=d
this.b=e},
cZi:function cZi(d){this.a=d},
cZe:function cZe(d){this.a=d},
aXn:function aXn(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aXo:function aXo(d,e,f){this.c=d
this.d=e
this.a=f},
aQh:function aQh(d,e){this.c=d
this.a=e},
aXm:function aXm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
deQ:function deQ(d){this.a=d},
deR:function deR(d){this.a=d},
aRC:function aRC(d){this.a=d},
aL0:function aL0(d,e){this.c=d
this.a=e},
efR(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.efQ(v)
if(u!=null)return new C.r4(w,C.dFM(u,!1),D.ahI,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.efP(v)
if(t!=null)return new C.r4(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ahJ,"TikTok",q)
s=C.efO(w,v)
if(s!=null)return s
r=C.efN(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.r4(w,w,D.cCh,"Video",q)
return q},
efO(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.r4(d,"https://www.instagram.com/reel/"+w+u,D.Qi,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.r4(d,"https://www.instagram.com/p/"+w+u,D.Qi,t,null)}return null},
efN(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.r4(d,"https://www.facebook.com/plugins/video.php?href="+A.fp(2,d,B.bu,!1)+"&show_text=false&width=734",D.ahK,"Facebook",null)},
efQ(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
efP(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
La:function La(d,e){this.a=d
this.b=e},
r4:function r4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8R:function a8R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aQc:function aQc(d,e){var _=this
_.d=$
_.ck$=d
_.aC$=e
_.c=_.a=null},
aRH:function aRH(d,e){this.c=d
this.a=e},
d2D:function d2D(d){this.a=d},
d2E:function d2E(d){this.a=d},
Gq:function Gq(d,e){this.c=d
this.a=e},
aoG:function aoG(){},
dSm(d,e,f,g,h,i){return new C.a8S(i,f,h,e,g,d)},
ezI(d){var w=window
w.toString
A.jn(w,"message",new C.dxL(d),!1,x._)},
a8S:function a8S(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajb:function ajb(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cZz:function cZz(d){this.a=d},
cZI:function cZI(d){this.a=d},
cZF:function cZF(d){this.a=d},
cZE:function cZE(d){this.a=d},
cZG:function cZG(d){this.a=d},
cZD:function cZD(d){this.a=d},
cZH:function cZH(d){this.a=d},
cZC:function cZC(d){this.a=d},
cZB:function cZB(d){this.a=d},
cZA:function cZA(d){this.a=d},
dxL:function dxL(d){this.a=d},
efJ(){var w,v,u
try{v=A.yf()
w=v.gvc(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dFM(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bg(w,"&")},
buj(d){var w=A.am(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dSh(d){var w=A.b_(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b_(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
efK(d,e,f){var w,v,u=C.buj(d)
if(u!=null){if(f){w=C.efJ()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dSh(C.dFM(u,e))}return C.dSh(d)},
efL(d){if(d<=4)return 0
return B.m.am(d-1,4)*4},
efM(d){var w
if($.Qw().a==null)return!1
w=$.HA().a
return d>=w&&d<w+4},
dSk(){var w=$.aBr
if(w!=null)w.ab(0)
$.aBr=null
$.HA().sv(0,0)},
dSj(){var w,v,u,t=$.Qw()
if(t.a==null)return
w=$.aBr
if(w!=null)w.ab(0)
v=$.dSi
if(v<=4){t=t.a
t.toString
C.dFN(t)
return}w=$.HA()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dFN(t)},
dFN(d){var w=$.aBr
if(w!=null)w.ab(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aBr=A.dD(A.dl(0,0,0,0,0,w),C.ezY())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OF.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.J(B.a6.k(0.25),B.t,1),r=A.Y(this.d,B.a6,w,w,14)
return A.q(w,A.H(A.a([r,B.fA,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cp,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hp,w,w,w)}}
C.oO.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L7.prototype={
V(){return new C.aja(A.a([],x.e))},
gee(){return this.c}}
C.aja.prototype={
a_(){var w=this
w.a4()
$.HA().az(0,w.gaAY())
C.ezI(w.gbu3())
w.a0d()},
btv(){if(this.c!=null)this.n(new C.cZq())},
bu4(){C.dSj()},
p(){$.HA().Z(0,this.gaAY())
C.dSk()
$.Qw().sv(0,null)
this.a5()},
a0d(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L9(t.a.c),$async$a0d)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cZp(t,s))
$.buk=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0d,v)},
WO(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cZn(t))
w=3
return A.b(C.aBs(t.a.c),$async$WO)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cZo(t,s))
$.buk=J.a4(t.d)
t.c.G(x.q).f.T(A.bj(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$WO,v)},
bw6(d){var w=this.c
w.toString
A.a2(w,!1).cn(A.eu(new C.cZr(d),!1,null,x.H))},
bwN(){var w=this.c
w.toString
return C.a0s(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.i6:B.bA,s=A.bI(!0,A.v(A.a([new A.F(D.ZH,new A.ji(new C.cZw(w),v),v),A.I(w.e?B.mI:new A.kI($.Qw(),new C.cZx(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ad,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.av5(B.a6,B.IC,B.l1,D.dkD,w.e?v:new C.cZy(w)),v)}}
C.Yq.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.e.k(0.1),B.t,1),q=A.a([new A.a6(0,B.G,B.a6.k(0.18),B.dB,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8R(n,!0,!C.efM(w),"Fold "+(B.m.am(w,4)+1)+"/"+B.m.am(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.Y(B.kj,B.o7,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.k,0,B.q),B.j,B.Aq,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aA(!1,B.P,!0,u,A.aI(!1,t,!0,A.v(A.a([A.I(A.q(u,A.bU(p,A.f8(A.v(A.a([new C.aOX(o,u),A.I(n,1),A.q(u,A.H(A.a([A.Y(B.xn,B.a6.k(0.85),u,u,9),B.aob,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.k,0,u,u),B.j,B.az,u,u,u,u,u,u,D.aJk,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.o(u,u,r,s,q,D.a3e,B.o),u,u,u,u,B.fy,u,u,u),1),B.aM,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.K,0,u,u,u,u,u,B.a2)}}
C.aOX.prototype={
B(d){var w=null
return A.q(w,A.H(A.a([A.I(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.tV,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.az,w,w,w,w,w,w,B.Zw,w,w,w)}}
C.L6.prototype={
V(){return new C.aQb()}}
C.aQb.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.i6:B.bA,t=A.aP(w,w,w,w,B.a2f,w,w,w,new C.cZk(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bI(!0,A.v(A.a([new A.F(D.ZH,A.H(A.a([t,A.I(new A.KY(A.H(A.a([A.I(new A.F(B.jK,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aA(!1,B.P,!0,w,A.aI(!1,w,!0,new A.F(B.bo,A.Y(B.hw,B.a6,w,w,28),w),B.ce,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZl(d),w,w,w,w,w,w,w),B.j,B.K,0,w,w,w,w,w,B.a2)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.I(new A.kI($.Qw(),new C.cZm(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aXn.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.G,B.a6.k(0.35),B.fi,28),new A.a6(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.J(B.e.k(0.12),B.t,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dSm(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaRk(),v+"_full")
w=v}else w=new C.aQh(t.r,s)}else w=new C.aL0(m,s)
else w=D.dsG
return A.q(s,A.bU(n,A.f8(A.v(A.a([new C.aXo(m,l,s),A.I(w,1),new C.aXm(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.o(s,s,o,q,p,D.a3e,B.o),s,r*2.05,s,s,B.bT,s,s,r)}}
C.aXo.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=A.d2(r)
r=A.h1(r)
w=new A.dO(q,r)
v=w.gKW()===0?12:w.gKW()
r=B.b.b6(B.m.q(r),2,"0")
q=(q<12?B.hn:B.jD)===B.hn?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nI,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bF,D.aV2,B.dr,D.aUa,B.dr,D.aV7],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aM,A.H(A.a([A.Y(B.CR,B.a6.k(0.9),s,s,12),B.dr,A.I(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.az,s,s,s,s,s,s,D.aKl,s,s,s)}}
C.aQh.prototype={
B(d){var w=null
return A.q(w,A.aB(A.v(A.a([A.Y(B.Cj,B.e.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.eK(D.aYM,D.d7s,this.c,A.dS(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aG(B.a6.k(0.5),1,B.t,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.q),w,w,w),B.j,B.Aq,w,w,w,w,w,w,w,w,w,1/0)}}
C.aXm.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aAK(B.CK,"YouTube",s===0,r,new C.deQ(u))
s=u.aAK(B.jR,"Device",s===1,r,new C.deR(u))
w=r?"Power off":"Power on"
v=r?D.a1m:D.aS6
return A.q(t,A.H(A.a([q,B.ai,s,B.ba,A.aP(t,t,t,t,A.Y(v,r?B.bO:B.f4,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.az,t,t,t,t,t,t,D.aJW,t,t,t)},
aAK(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bc
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.K
u=A.m(10)
t=g?h:s
return A.I(A.aA(!1,B.P,!0,u,A.aI(!1,A.m(10),!0,new A.F(B.lU,A.v(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a2),1)}}
C.aRC.prototype={
B(d){return D.ayc}}
C.aL0.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k1,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u7("Serial",u.c),q=w.u7("Model",u.d),p=w.u7("Device ID",u.e),o=w.u7("IMEI",u.r),n=w.u7("MAC",u.f),m=w.u7("OS",u.w+" "+u.x),l=w.u7("Location",u.y+", "+u.z),k=w.u7("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.u7("Timezone",u.at)
u=u.ax
return A.e1(A.a([t,B.aM,s,B.af,r,q,p,o,n,m,l,k,j,w.u7("Provisioned",u.length>=10?B.b.an(u,0,10):u)],x.p),v,B.bo,v,v,B.am,!1)},
u7(d,e){var w=null
return new A.F(B.df,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.co,A.d(e,w,w,w,w,w,w,D.cZf,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.La.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.r4.prototype={
gaRk(){var w=this.c
return w===D.ahI||w===D.ahJ||w===D.Qi||w===D.ahK}}
C.a8R.prototype={
V(){return new C.aQc(null,null)}}
C.aQc.prototype={
a_(){this.a4()
var w=A.be(null,B.t7,null,1,null,this)
w.fT(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b0H()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cy(t,new A.o(t,t,t,t,t,new A.a9(B.bU,B.bQ,B.E,A.a([B.K,B.A.k(0.55)],x.O),t,t),B.o),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.cP,p,t)
w=B.e.k(0.92)
q=A.aB(new A.cH(new A.aV(p,new A.bh(0.72,1,q),q.j("aV<bl.T>")),!1,A.Y(B.kj,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.o7
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aRH(s,t),r,q,A.ay(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.av(B.a7,t,B.b8,B.r,s,t)}}
C.aRH.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kx(u,B.I,new C.d2D(this),B.c6,B.bR,!0,w,w,new C.d2E(this),w)
return new C.Gq(v,w)}}
C.Gq.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.rW,B.Vu],x.O),B.kj)
break
case 1:w=new A.aJ(A.a([B.Aq,D.aDR],x.O),B.m4)
break
case 2:w=new A.aJ(A.a([D.aFA,D.aDe],x.O),B.Cr)
break
case 3:w=new A.aJ(A.a([B.X,B.dP],x.O),B.CA)
break
case 4:w=new A.aJ(A.a([B.az,B.aO],x.O),B.qk)
break
default:w=u}v=w.a
return A.q(u,A.aB(A.Y(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a9(B.aA,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aoG.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcP())
w.aC$=null
w.a5()},
bd(){this.bq()
this.bp()
this.cQ()}}
C.a8S.prototype={
V(){return new C.ajb()}}
C.ajb.prototype={
aaf(d,e){var w,v=C.buj(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dFM(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.efK(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bNl(){var w,v=this
if(v.w)return
v.n(new C.cZz(v))
w=v.e
if(w!=null)v.aaf(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.HC()
$.qr().vm(w,new C.cZI(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bi(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cZB(v))
w=v.e
w.toString
v.aaf(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.a1D,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.R,n,n)],v))
return A.f8(A.aB(new A.F(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a3H(n,B.uP,w)],v)
if(o.f)w.push(A.f8(A.aB(new A.aa(28,28,D.azy,n),n,n,n),B.cX,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.bc,B.t,1)
q=A.Y(B.N9,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e6(0,A.aA(!1,B.P,!0,n,A.aI(!1,n,!0,A.aB(A.q(n,A.H(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.KX,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbNk(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a2)))}v=C.buj(o.a.d)
if(v!=null)w.push(A.ay(8,A.jm(D.aWD,D.dfG,new C.cZA(o),A.iY(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hp,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.av(B.a7,n,B.b8,B.r,w,n)}}
var z=a.updateTypes(["p(oO)","~()","L7(N)","oO(Z<@,@>)","a_(oO)","Z<p,@>(oO)","aD<~>()","L6(N)","kI<L>(N,r4?,r?)","Yq(N,L)","uM(N,r4?,r?)","Gq(N,aq,dN?)"])
C.dBL.prototype={
$1(d){return new C.L7(this.a,null)},
$S:z+2}
C.dBK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a6(0,B.G,B.a6.k(0.22),B.fi,32)],x.V),g=A.J(m?B.cl:B.a6.k(0.18),B.t,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aTS,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.t,1),n,n,n,B.ae),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.v(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.q(n,A.H(A.a([e,B.en,w,A.aP(n,n,n,n,A.Y(B.cQ,m?B.at:B.cX,n,n,n),n,n,n,new C.dBG(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a9(B.a0,B.a3,B.E,j,n,n),B.o),n,n,n,n,B.L3,n,n,n)
e=A.eo(B.cR,A.a([new C.OF("YouTube",B.N4,m,n),new C.OF("TikTok",B.m4,m,n),new C.OF("Instagram",B.Cr,m,n),new C.OF("Facebook",B.CA,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c7:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bA
r=A.Y(B.fI,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cl:B.aJ
u=A.v(A.a([e,B.aT,A.aN(n,B.S,!0,n,!0,B.r,n,A.aO(),w,n,n,n,n,n,2,A.bn(n,new A.b7(4,q,B.V),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aG(o,1,B.t,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.m(16),B.Ue),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ac,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a1,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.ap,n,B.i,B.k,0,B.q)
e=A.jm(D.aTW,D.djE,new C.dBH(d),A.iY(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.F(new A.Q(12,0,12,12+l.f.d),A.cy(A.bU(f,A.v(A.a([j,new A.F(B.Zd,u,n),new A.F(D.aLK,A.H(A.a([e,B.ba,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dBI(d),n,n),B.ai,A.dH(D.aYt,D.dks,new C.dBJ(d,w),A.bq(B.a6,n,n,n,B.e,n,B.KX,n,new A.bt(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ap,n,B.i,B.Z,0,B.q),B.aB),new A.o(n,n,g,k,h,new A.a9(B.aA,B.aD,B.E,i,n,n),B.o),B.br),n)},
$S:68}
C.dBG.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dBH.prototype={
$0(){C.dSk()
$.Qw().sv(0,null)
A.a2(this.a,!1).N(null)},
$S:0}
C.dBI.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dBJ.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a2(this.a,!1).N(w)
return null},
$S:0}
C.buv.prototype={
$1(d){return C.dSl(A.S(d,x.N,x.z))},
$S:z+3}
C.buw.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bun.prototype={
$1(d){return d.c},
$S:z+0}
C.buo.prototype={
$1(d){return d.r},
$S:z+0}
C.bup.prototype={
$1(d){return d.f},
$S:z+0}
C.buq.prototype={
$1(d){return d.at},
$S:z+0}
C.bur.prototype={
$1(d){return d.c},
$S:z+0}
C.bus.prototype={
$1(d){return d.r},
$S:z+0}
C.but.prototype={
$1(d){return d.f},
$S:z+0}
C.buu.prototype={
$1(d){return d.at},
$S:z+0}
C.bum.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bul.prototype={
$1(d){return B.b.b6(B.m.h3(d,16),2,"0").toUpperCase()},
$S:89}
C.cZq.prototype={
$0(){},
$S:0}
C.cZp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZn.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cZo.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cZr.prototype={
$1(d){return new C.L6(this.a,null)},
$S:z+7}
C.cZw.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qo,w,w,w,new C.cZv(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.I(A.fZ(A.H(A.a([new A.oM(D.xP,e,g,36,B.CR,w),B.aP,A.I(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fK(B.f.gI(D.xP).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aA(!1,B.P,!0,w,A.aI(!1,w,!0,new A.F(B.bT,A.Y(B.hw,A.ao(B.f.gI(D.xP),B.f.ga6(D.xP),e),w,w,28),w),B.ce,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbwM(),w,w,w,w,w,w,w),B.j,B.K,0,w,w,w,w,w,B.a2)],s),B.n,w,B.i,B.k,0,w,w),D.xP,w,g,B.f3,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:337}
C.cZv.prototype={
$0(){return A.a2(this.a,!1).en()},
$S:0}
C.cZx.prototype={
$3(d,e,f){return new A.kI($.HA(),new C.cZu(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cZu.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ef(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.t,1)
q=A.Y(B.kj,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.HA().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.H(A.a([q,B.ai,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dp,B.f2,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bU(s,new A.hD(1.7777777777777777,C.dSm(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaRk(),"fleet_master"),k),B.aB),B.af],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wD(0,B.r,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.l4(new A.F(B.KR,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oY(D.aJv,A.aFx(new A.o7(new C.cZt(i,j),J.a4(i.d),!1,!0,!0,A.uf(),k),D.cSz),k)],w))},
$S:1814}
C.cZt.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Yq(v,e,J.a4(w.d),new C.cZs(w,v),this.b,null)},
$S:z+9}
C.cZs.prototype={
$0(){return this.a.bw6(this.b)},
$S:0}
C.cZy.prototype={
$0(){this.a.WO()
return null},
$S:0}
C.cZk.prototype={
$0(){return A.a2(this.a,!1).en()},
$S:0}
C.cZl.prototype={
$0(){C.a0s(this.a,$.buk)
return null},
$S:0}
C.cZm.prototype={
$3(d,e,f){return A.eI(new C.cZj(this.a,e))},
$S:z+10}
C.cZj.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.R,v,v),B.aT,new C.aXn(u,s.a.c,s.e,s.d,new C.cZg(s),new C.cZh(s),new C.cZi(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.og,v,v,B.am),v,v,v)},
$S:1815}
C.cZg.prototype={
$0(){var w=this.a.c
w.toString
C.a0s(w,$.buk)
return null},
$S:0}
C.cZh.prototype={
$1(d){var w=this.a
return w.n(new C.cZf(w,d))},
$S:29}
C.cZf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cZi.prototype={
$0(){var w=this.a
return w.n(new C.cZe(w))},
$S:0}
C.cZe.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.deQ.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.deR.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d2D.prototype={
$3(d,e,f){return new C.Gq(this.a.c,null)},
$S:z+11}
C.d2E.prototype={
$3(d,e,f){if(f==null)return e
return new A.av(B.a7,null,B.b8,B.r,A.a([new C.Gq(this.a.c,null),D.ayy],x.p),null)},
$C:"$3",
$R:3,
$S:547}
C.cZz.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZI.prototype={
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
w.aaf(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.jn(v,"load",new C.cZF(w),!1,u)
v=w.e
v.toString
A.jn(v,"error",new C.cZG(w),!1,u)
A.bK(B.kc,new C.cZH(w),x.H)
w=w.e
w.toString
return w},
$S:520}
C.cZF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZE(w))},
$S:51}
C.cZE.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cZG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZD(w))},
$S:51}
C.cZD.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cZH.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cZC(w))},
$S:12}
C.cZC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cZB.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZA.prototype={
$0(){var w,v=C.buj(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nO.Uu(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dxL.prototype={
$1(d){var w,v,u,t,s=new A.yk([],[]).A5(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1816};(function aliases(){var w=C.aoG.prototype
w.b0H=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aja.prototype,"gaAY","btv",1)
w(u,"gbu3","bu4",1)
w(u,"gbwM","bwN",6)
w(C.ajb.prototype,"gbNk","bNl",1)
v(C,"ezY","dSj",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zu,[C.dBL,C.dBK,C.buv,C.buw,C.bun,C.buo,C.bup,C.buq,C.bur,C.bus,C.but,C.buu,C.bum,C.bul,C.cZr,C.cZw,C.cZx,C.cZu,C.cZm,C.cZh,C.d2D,C.d2E,C.cZI,C.cZF,C.cZG,C.dxL])
v(A.a1Q,[C.dBG,C.dBH,C.dBI,C.dBJ,C.cZq,C.cZp,C.cZn,C.cZo,C.cZv,C.cZs,C.cZy,C.cZk,C.cZl,C.cZg,C.cZf,C.cZi,C.cZe,C.deQ,C.deR,C.cZz,C.cZE,C.cZD,C.cZH,C.cZC,C.cZB,C.cZA])
v(A.ap,[C.OF,C.Yq,C.aOX,C.aXn,C.aXo,C.aQh,C.aXm,C.aRC,C.aL0,C.aRH,C.Gq])
v(A.aq,[C.oO,C.r4])
v(A.ad,[C.L7,C.L6,C.a8R,C.a8S])
v(A.ae,[C.aja,C.aQb,C.aoG,C.ajb])
v(A.a1R,[C.cZt,C.cZj])
u(C.La,A.aLW)
u(C.aQc,C.aoG)
w(C.aoG,A.dy)})()
A.dVN(b.typeUniverse,JSON.parse('{"L7":{"ad":[],"r":[]},"Yq":{"ap":[],"r":[]},"L6":{"ad":[],"r":[]},"OF":{"ap":[],"r":[]},"aja":{"ae":["L7"]},"aOX":{"ap":[],"r":[]},"aQb":{"ae":["L6"]},"aXn":{"ap":[],"r":[]},"aXo":{"ap":[],"r":[]},"aQh":{"ap":[],"r":[]},"aXm":{"ap":[],"r":[]},"aRC":{"ap":[],"r":[]},"aL0":{"ap":[],"r":[]},"a8R":{"ad":[],"r":[]},"Gq":{"ap":[],"r":[]},"aQc":{"ae":["a8R"]},"aRH":{"ap":[],"r":[]},"a8S":{"ad":[],"r":[]},"ajb":{"ae":["a8S"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a7<a6>"),O:w("a7<x>"),e:w("a7<oO>"),S:w("a7<fK>"),s:w("a7<p>"),p:w("a7<r>"),t:w("a7<L>"),X:w("af<oO>"),a:w("af<@>"),P:w("Z<p,@>"),f:w("Z<@,@>"),w:w("oI"),_:w("Ec"),k:w("oO"),N:w("p"),Y:w("bh<a3>"),W:w("d3<p>"),J:w("kI<L>"),j:w("kI<r4?>"),E:w("vI<cZ>"),q:w("Zk"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a1m=new A.O(983224,"MaterialIcons",!1)
D.aWK=new A.ab(D.a1m,48,B.bc,null,null,null)
D.d6l=new A.A("Powered off",null,B.apf,null,null,null,null,null,null,null,null,null)
D.bT6=w([D.aWK,B.N,D.d6l],x.p)
D.aGT=new A.eT(B.am,B.i,B.Z,B.n,null,B.q,null,0,D.bT6,null)
D.ayc=new A.cY(B.I,null,null,D.aGT,null)
D.cSe=new A.aa(18,18,B.Vb,null)
D.ayy=new A.cY(B.I,null,null,D.cSe,null)
D.azy=new A.fr(2,null,null,null,null,B.aa,null,null,null,null)
D.aDe=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.x)
D.aDR=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.x)
D.aFA=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.x)
D.aJk=new A.Q(0,3,0,3)
D.aJv=new A.Q(10,0,10,88)
D.aJW=new A.Q(12,6,12,10)
D.aKl=new A.Q(14,8,14,6)
D.aLK=new A.Q(20,8,20,20)
D.ZH=new A.Q(8,6,15,8)
D.aS6=new A.O(983222,"MaterialIcons",!1)
D.aTS=new A.ab(B.kj,26,B.a6,null,null,null)
D.aTW=new A.ab(B.a0s,18,null,null,null,null)
D.aUa=new A.ab(B.tV,14,B.aa,null,null,null)
D.aSr=new A.O(983420,"MaterialIcons",!1)
D.aV2=new A.ab(D.aSr,14,B.aa,null,null,null)
D.aQv=new A.O(62895,"MaterialIcons",!1)
D.aV7=new A.ab(D.aQv,14,B.aa,null,null,null)
D.aWD=new A.ab(B.tP,16,B.aa,null,null,null)
D.aYt=new A.ab(B.iC,20,null,null,null,null)
D.aYM=new A.ab(B.hw,16,null,null,null,null)
D.bWU=w([B.aO,B.X],x.O)
D.a3e=new A.a9(B.aA,B.aD,B.E,D.bWU,null,null)
D.cLs=new A.aJ("NGMY OS","14.2.1")
D.cK3=new A.aJ("VirtualDroid","13.8.4")
D.cK2=new A.aJ("NGMY OS","15.0.0")
D.cKW=new A.aJ("VirtualDroid","14.1.2")
D.cJZ=new A.aJ("NGMY Tab OS","12.9.7")
D.cJX=new A.aJ("NGMY OS","13.5.3")
D.cJM=new A.aJ("VirtualDroid","15.2.0")
D.cKt=new A.aJ("NGMY OS","14.8.1")
D.cL1=new A.aJ("NGMY Tab OS","13.2.4")
D.cLF=new A.aJ("VirtualDroid","12.6.9")
D.cJG=new A.aJ("NGMY OS","16.0.1")
D.cJw=new A.aJ("VirtualDroid","14.9.0")
D.cLj=new A.aJ("NGMY Tab OS","14.0.3")
D.cKe=new A.aJ("NGMY OS","13.1.8")
D.cJE=new A.aJ("VirtualDroid","13.4.5")
D.cJW=new A.aJ("NGMY OS","15.3.2")
D.cL2=new A.aJ("NGMY Tab OS","12.4.1")
D.cLm=new A.aJ("VirtualDroid","16.1.0")
D.cKs=new A.aJ("NGMY OS","14.4.6")
D.cLt=new A.aJ("VirtualDroid","15.0.8")
D.bW4=w([D.cLs,D.cK3,D.cK2,D.cKW,D.cJZ,D.cJX,D.cJM,D.cKt,D.cL1,D.cLF,D.cJG,D.cJw,D.cLj,D.cKe,D.cJE,D.cJW,D.cL2,D.cLm,D.cKs,D.cLt],A.b3("a7<+(p,p)>"))
D.xP=w([B.a6,B.fx],x.O)
D.cNQ=new A.f0(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cNo=new A.f0(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cNj=new A.f0(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cNs=new A.f0(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cNf=new A.f0(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cNu=new A.f0(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cNS=new A.f0(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cNg=new A.f0(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cNn=new A.f0(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cNw=new A.f0(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cNe=new A.f0(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cNK=new A.f0(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cNH=new A.f0(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cNm=new A.f0(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cNE=new A.f0(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cND=new A.f0(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cNd=new A.f0(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cNr=new A.f0(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cNB=new A.f0(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cNG=new A.f0(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.aa3=w([D.cNQ,D.cNo,D.cNj,D.cNs,D.cNf,D.cNu,D.cNS,D.cNg,D.cNn,D.cNw,D.cNe,D.cNK,D.cNH,D.cNm,D.cNE,D.cND,D.cNd,D.cNr,D.cNB,D.cNG],A.b3("a7<+(p,p,a3,a3,p)>"))
D.c4M=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ahI=new C.La(0,"youtube")
D.ahJ=new C.La(1,"tiktok")
D.Qi=new C.La(2,"instagram")
D.ahK=new C.La(3,"facebook")
D.cCh=new C.La(4,"other")
D.cSz=new A.hB(4,10,8,0.52,null)
D.d7E=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cVT=new A.aY(D.d7E,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.r,null)
D.cZf=new A.M(!0,B.e,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d7s=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dfG=new A.A("Open in YouTube",null,B.jr,null,null,null,null,null,null,null,null,null)
D.djE=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dks=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dkD=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dsG=new C.aRC(null)})();(function staticFields(){$.dSi=20
$.aBr=null
$.buk=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eEW","HA",()=>A.adf(0))
w($,"eEX","Qw",()=>A.adf(null))})()};
(a=>{a["KFbMsHTjp9Rql22TpT84HTPe0Vk="]=a.current})($__dart_deferred_initializers__);