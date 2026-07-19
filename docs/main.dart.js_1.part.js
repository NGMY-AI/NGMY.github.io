((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eB4(d,e){A.a2(d,!1).cn(A.eu(new C.dBG(e),!0,null,x.H))},
a0t(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a0t=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qx()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.an(new A.bd(n,B.aQ,B.aH),t)
w=3
return A.b(A.dj(B.L,new C.dBF(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a0t)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.efN(r)
if(q==null){d.G(x.q).f.T(D.cVW)
w=1
break}w=4
return A.b(A.bK(B.hJ,null,x.H),$async$a0t)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dSd=n
p=C.efH(n)
n=$.HA()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dFI(q)
d.G(x.q).f.T(A.bj(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0t,v)},
dSg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
La(d){return C.efQ(d)},
efQ(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$La=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$La)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.K.aA(0,a0,null)
w=x.a.b(r)&&J.cM(r)?10:11
break
case 10:k=J.ez(r,x.f)
k=A.dg(k,new C.buw(),k.$ti.j("G.E"),x.k)
j=A.U(k).j("ag<G.E>")
i=A.y(new A.ag(k,new C.bux(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dSi(q)
w=12
return A.b(C.L9(a3,p),$async$La)
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
n=B.K.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dSg(A.S(n,x.N,x.z))
l=C.dSi(A.a([m],x.e))
w=21
return A.b(C.L9(a3,l),$async$La)
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
case 18:case 14:q=C.efO()
w=22
return A.b(C.L9(a3,q),$async$La)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$La,v)},
dSi(d){var w=A.V(d).j("E<1,p>"),v=new A.E(d,new C.buo(),w).eo(0),u=new A.E(d,new C.bup(),w).eo(0),t=new A.E(d,new C.buq(),w).eo(0),s=new A.E(d,new C.bur(),w).eo(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dFJ(null,q,u,t,v,s));++q}return r},
aBs(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aBs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.La(d),$async$aBs)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.dn(t,new C.bus(),s).eo(0)
p=r.dn(t,new C.but(),s).eo(0)
o=r.dn(t,new C.buu(),s).eo(0)
n=r.dn(t,new C.buv(),s).eo(0)
m=C.dFJ(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.L9(d,t),$async$aBs)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aBs,v)},
L9(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$L9)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.bun(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.ak("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.K.aj(s,null)),$async$L9)
case 3:return A.h(null,v)}})
return A.i($async$L9,v)},
efO(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.cO(20,x.k)
for(w=0;w<20;++w)q[w]=C.dFJ(w,w,t,s,u,r)
return q},
dFJ(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lh(),h=d==null,g=D.aa4[B.m.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.aa4[B.m.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.E(p,new C.bum(),A.V(p).j("E<1,p>")).fP(0)
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
k=D.c4P[w]
j=D.bW7[w]
return new C.oO("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.b6(B.m.q(e+1),2,"0"),u,k,C.efP(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a7().a3())},
efP(d,e){var w,v=J.cO(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b6(B.m.h3(d.bH(256),16),2,"0")
return B.f.fP(v)},
dBG:function dBG(d){this.a=d},
dBF:function dBF(d,e){this.a=d
this.b=e},
dBB:function dBB(d){this.a=d},
dBC:function dBC(d){this.a=d},
dBD:function dBD(d){this.a=d},
dBE:function dBE(d,e){this.a=d
this.b=e},
OH:function OH(d,e,f,g){var _=this
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
buw:function buw(){},
bux:function bux(){},
buo:function buo(){},
bup:function bup(){},
buq:function buq(){},
bur:function bur(){},
bus:function bus(){},
but:function but(){},
buu:function buu(){},
buv:function buv(){},
bun:function bun(){},
bum:function bum(){},
L8:function L8(d,e){this.c=d
this.a=e},
aj9:function aj9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZl:function cZl(){},
cZk:function cZk(d,e){this.a=d
this.b=e},
cZi:function cZi(d){this.a=d},
cZj:function cZj(d,e){this.a=d
this.b=e},
cZm:function cZm(d){this.a=d},
cZr:function cZr(d){this.a=d},
cZq:function cZq(d){this.a=d},
cZs:function cZs(d,e){this.a=d
this.b=e},
cZp:function cZp(d,e,f){this.a=d
this.b=e
this.c=f},
cZo:function cZo(d,e){this.a=d
this.b=e},
cZn:function cZn(d,e){this.a=d
this.b=e},
cZt:function cZt(d){this.a=d},
Yr:function Yr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aOZ:function aOZ(d,e){this.c=d
this.a=e},
L7:function L7(d,e){this.c=d
this.a=e},
aQd:function aQd(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cZf:function cZf(d){this.a=d},
cZg:function cZg(d){this.a=d},
cZh:function cZh(d){this.a=d},
cZe:function cZe(d,e){this.a=d
this.b=e},
cZb:function cZb(d){this.a=d},
cZc:function cZc(d){this.a=d},
cZa:function cZa(d,e){this.a=d
this.b=e},
cZd:function cZd(d){this.a=d},
cZ9:function cZ9(d){this.a=d},
aXp:function aXp(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aXq:function aXq(d,e,f){this.c=d
this.d=e
this.a=f},
aQj:function aQj(d,e){this.c=d
this.a=e},
aXo:function aXo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
aRE:function aRE(d){this.a=d},
aL2:function aL2(d,e){this.c=d
this.a=e},
efN(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.efM(v)
if(u!=null)return new C.r4(w,C.dFH(u,!1),D.ahJ,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.efL(v)
if(t!=null)return new C.r4(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ahK,"TikTok",q)
s=C.efK(w,v)
if(s!=null)return s
r=C.efJ(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.r4(w,w,D.cCk,"Video",q)
return q},
efK(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.r4(d,"https://www.instagram.com/reel/"+w+u,D.Qi,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.r4(d,"https://www.instagram.com/p/"+w+u,D.Qi,t,null)}return null},
efJ(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.r4(d,"https://www.facebook.com/plugins/video.php?href="+A.fp(2,d,B.bu,!1)+"&show_text=false&width=734",D.ahL,"Facebook",null)},
efM(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
efL(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
Lb:function Lb(d,e){this.a=d
this.b=e},
r4:function r4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8S:function a8S(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aQe:function aQe(d,e){var _=this
_.d=$
_.ck$=d
_.aC$=e
_.c=_.a=null},
aRJ:function aRJ(d,e){this.c=d
this.a=e},
d2y:function d2y(d){this.a=d},
d2z:function d2z(d){this.a=d},
Gq:function Gq(d,e){this.c=d
this.a=e},
aoF:function aoF(){},
dSh(d,e,f,g,h,i){return new C.a8T(i,f,h,e,g,d)},
ezD(d){var w=window
w.toString
A.jn(w,"message",new C.dxG(d),!1,x._)},
a8T:function a8T(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aja:function aja(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cZu:function cZu(d){this.a=d},
cZD:function cZD(d){this.a=d},
cZA:function cZA(d){this.a=d},
cZz:function cZz(d){this.a=d},
cZB:function cZB(d){this.a=d},
cZy:function cZy(d){this.a=d},
cZC:function cZC(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZw:function cZw(d){this.a=d},
cZv:function cZv(d){this.a=d},
dxG:function dxG(d){this.a=d},
efF(){var w,v,u
try{v=A.yf()
w=v.gvc(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dFH(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bg(w,"&")},
buk(d){var w=A.am(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dSc(d){var w=A.b_(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b_(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
efG(d,e,f){var w,v,u=C.buk(d)
if(u!=null){if(f){w=C.efF()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dSc(C.dFH(u,e))}return C.dSc(d)},
efH(d){if(d<=4)return 0
return B.m.am(d-1,4)*4},
efI(d){var w
if($.Qx().a==null)return!1
w=$.HA().a
return d>=w&&d<w+4},
dSf(){var w=$.aBr
if(w!=null)w.ab(0)
$.aBr=null
$.HA().sv(0,0)},
dSe(){var w,v,u,t=$.Qx()
if(t.a==null)return
w=$.aBr
if(w!=null)w.ab(0)
v=$.dSd
if(v<=4){t=t.a
t.toString
C.dFI(t)
return}w=$.HA()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dFI(t)},
dFI(d){var w=$.aBr
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
default:w=null}$.aBr=A.dD(A.dl(0,0,0,0,0,w),C.ezT())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OH.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.J(B.a6.k(0.25),B.t,1),r=A.Y(this.d,B.a6,w,w,14)
return A.q(w,A.H(A.a([r,B.fA,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cp,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hp,w,w,w)}}
C.oO.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L8.prototype={
V(){return new C.aj9(A.a([],x.e))},
gee(){return this.c}}
C.aj9.prototype={
a_(){var w=this
w.a4()
$.HA().az(0,w.gaAZ())
C.ezD(w.gbu0())
w.a0d()},
bts(){if(this.c!=null)this.n(new C.cZl())},
bu1(){C.dSe()},
p(){$.HA().Y(0,this.gaAZ())
C.dSf()
$.Qx().sv(0,null)
this.a5()},
a0d(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.La(t.a.c),$async$a0d)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cZk(t,s))
$.bul=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0d,v)},
WO(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cZi(t))
w=3
return A.b(C.aBs(t.a.c),$async$WO)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cZj(t,s))
$.bul=J.a4(t.d)
t.c.G(x.q).f.T(A.bj(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$WO,v)},
bw3(d){var w=this.c
w.toString
A.a2(w,!1).cn(A.eu(new C.cZm(d),!1,null,x.H))},
bwK(){var w=this.c
w.toString
return C.a0t(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.i6:B.bA,s=A.bI(!0,A.v(A.a([new A.F(D.ZJ,new A.ji(new C.cZr(w),v),v),A.I(w.e?B.mI:new A.kI($.Qx(),new C.cZs(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ad,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.av5(B.a6,B.IC,B.l0,D.dkE,w.e?v:new C.cZt(w)),v)}}
C.Yr.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.e.k(0.1),B.t,1),q=A.a([new A.a6(0,B.G,B.a6.k(0.18),B.dB,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8S(n,!0,!C.efI(w),"Fold "+(B.m.am(w,4)+1)+"/"+B.m.am(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.Y(B.kj,B.o7,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.k,0,B.q),B.j,B.Ap,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aA(!1,B.P,!0,u,A.aI(!1,t,!0,A.v(A.a([A.I(A.q(u,A.bU(p,A.f8(A.v(A.a([new C.aOZ(o,u),A.I(n,1),A.q(u,A.H(A.a([A.Y(B.xn,B.a6.k(0.85),u,u,9),B.aoc,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.k,0,u,u),B.j,B.aA,u,u,u,u,u,u,D.aJo,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.o(u,u,r,s,q,D.a3g,B.o),u,u,u,u,B.fy,u,u,u),1),B.aM,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a2)}}
C.aOZ.prototype={
B(d){var w=null
return A.q(w,A.H(A.a([A.I(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.tU,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aA,w,w,w,w,w,w,B.Zy,w,w,w)}}
C.L7.prototype={
V(){return new C.aQd()}}
C.aQd.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.i6:B.bA,t=A.aP(w,w,w,w,B.a2h,w,w,w,new C.cZf(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bI(!0,A.v(A.a([new A.F(D.ZJ,A.H(A.a([t,A.I(new A.KZ(A.H(A.a([A.I(new A.F(B.jK,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aA(!1,B.P,!0,w,A.aI(!1,w,!0,new A.F(B.bo,A.Y(B.hw,B.a6,w,w,28),w),B.ce,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZg(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a2)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.I(new A.kI($.Qx(),new C.cZh(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aXp.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.G,B.a6.k(0.35),B.fi,28),new A.a6(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.J(B.e.k(0.12),B.t,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dSh(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaRl(),v+"_full")
w=v}else w=new C.aQj(t.r,s)}else w=new C.aL2(m,s)
else w=D.dsH
return A.q(s,A.bU(n,A.f8(A.v(A.a([new C.aXq(m,l,s),A.I(w,1),new C.aXo(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.o(s,s,o,q,p,D.a3g,B.o),s,r*2.05,s,s,B.bT,s,s,r)}}
C.aXq.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=A.d2(r)
r=A.h1(r)
w=new A.dO(q,r)
v=w.gKW()===0?12:w.gKW()
r=B.b.b6(B.m.q(r),2,"0")
q=(q<12?B.hn:B.jD)===B.hn?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nI,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bH,D.aV5,B.dr,D.aUd,B.dr,D.aVa],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aM,A.H(A.a([A.Y(B.CQ,B.a6.k(0.9),s,s,12),B.dr,A.I(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.aA,s,s,s,s,s,s,D.aKo,s,s,s)}}
C.aQj.prototype={
B(d){var w=null
return A.q(w,A.aB(A.v(A.a([A.Y(B.Ci,B.e.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.eK(D.aYO,D.d7t,this.c,A.dS(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aG(B.a6.k(0.5),1,B.t,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.q),w,w,w),B.j,B.Ap,w,w,w,w,w,w,w,w,w,1/0)}}
C.aXo.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aAL(B.CJ,"YouTube",s===0,r,new C.deL(u))
s=u.aAL(B.jR,"Device",s===1,r,new C.deM(u))
w=r?"Power off":"Power on"
v=r?D.a1o:D.aS9
return A.q(t,A.H(A.a([q,B.ai,s,B.ba,A.aP(t,t,t,t,A.Y(v,r?B.bO:B.f4,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aA,t,t,t,t,t,t,D.aJZ,t,t,t)},
aAL(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bd
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aA(!1,B.P,!0,u,A.aI(!1,A.m(10),!0,new A.F(B.lU,A.v(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a2),1)}}
C.aRE.prototype={
B(d){return D.aye}}
C.aL2.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k1,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u7("Serial",u.c),q=w.u7("Model",u.d),p=w.u7("Device ID",u.e),o=w.u7("IMEI",u.r),n=w.u7("MAC",u.f),m=w.u7("OS",u.w+" "+u.x),l=w.u7("Location",u.y+", "+u.z),k=w.u7("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.u7("Timezone",u.at)
u=u.ax
return A.e1(A.a([t,B.aM,s,B.ae,r,q,p,o,n,m,l,k,j,w.u7("Provisioned",u.length>=10?B.b.an(u,0,10):u)],x.p),v,B.bo,v,v,B.am,!1)},
u7(d,e){var w=null
return new A.F(B.df,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.co,A.d(e,w,w,w,w,w,w,D.cZg,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.Lb.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.r4.prototype={
gaRl(){var w=this.c
return w===D.ahJ||w===D.ahK||w===D.Qi||w===D.ahL}}
C.a8S.prototype={
V(){return new C.aQe(null,null)}}
C.aQe.prototype={
a_(){this.a4()
var w=A.be(null,B.t6,null,1,null,this)
w.fT(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b0I()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cy(t,new A.o(t,t,t,t,t,new A.a9(B.bU,B.bQ,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.o),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.cP,p,t)
w=B.e.k(0.92)
q=A.aB(new A.cH(new A.aV(p,new A.bh(0.72,1,q),q.j("aV<bl.T>")),!1,A.Y(B.kj,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.o7
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aRJ(s,t),r,q,A.ay(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.av(B.a7,t,B.b8,B.r,s,t)}}
C.aRJ.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kx(u,B.I,new C.d2y(this),B.c6,B.bR,!0,w,w,new C.d2z(this),w)
return new C.Gq(v,w)}}
C.Gq.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.rV,B.Vu],x.O),B.kj)
break
case 1:w=new A.aJ(A.a([B.Ap,D.aDT],x.O),B.m4)
break
case 2:w=new A.aJ(A.a([D.aFC,D.aDg],x.O),B.Cq)
break
case 3:w=new A.aJ(A.a([B.X,B.dP],x.O),B.Cz)
break
case 4:w=new A.aJ(A.a([B.aA,B.aO],x.O),B.qj)
break
default:w=u}v=w.a
return A.q(u,A.aB(A.Y(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a9(B.az,B.aC,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aoF.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Y(0,w.gcP())
w.aC$=null
w.a5()},
bd(){this.bq()
this.bp()
this.cQ()}}
C.a8T.prototype={
V(){return new C.aja()}}
C.aja.prototype={
aaf(d,e){var w,v=C.buk(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dFH(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.efG(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bNg(){var w,v=this
if(v.w)return
v.n(new C.cZu(v))
w=v.e
if(w!=null)v.aaf(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.HC()
$.qr().vm(w,new C.cZD(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bi(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cZw(v))
w=v.e
w.toString
v.aaf(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.a1F,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.R,n,n)],v))
return A.f8(A.aB(new A.F(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a3I(n,B.uO,w)],v)
if(o.f)w.push(A.f8(A.aB(new A.aa(28,28,D.azA,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.bd,B.t,1)
q=A.Y(B.N9,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e6(0,A.aA(!1,B.P,!0,n,A.aI(!1,n,!0,A.aB(A.q(n,A.H(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.KX,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbNf(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a2)))}v=C.buk(o.a.d)
if(v!=null)w.push(A.ay(8,A.jm(D.aWF,D.dfH,new C.cZv(o),A.iY(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hp,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.av(B.a7,n,B.b8,B.r,w,n)}}
var z=a.updateTypes(["p(oO)","~()","L8(N)","oO(Z<@,@>)","a_(oO)","Z<p,@>(oO)","aD<~>()","L7(N)","kI<L>(N,r4?,r?)","Yr(N,L)","uM(N,r4?,r?)","Gq(N,aq,dN?)"])
C.dBG.prototype={
$1(d){return new C.L8(this.a,null)},
$S:z+2}
C.dBF.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.er,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a6(0,B.G,B.a6.k(0.22),B.fi,32)],x.V),g=A.J(m?B.cl:B.a6.k(0.18),B.t,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aTV,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.t,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.v(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.q(n,A.H(A.a([e,B.ev,w,A.aP(n,n,n,n,A.Y(B.cS,m?B.at:B.d0,n,n,n),n,n,n,new C.dBB(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a9(B.a0,B.a3,B.E,j,n,n),B.o),n,n,n,n,B.L3,n,n,n)
e=A.eo(B.cQ,A.a([new C.OH("YouTube",B.N4,m,n),new C.OH("TikTok",B.m4,m,n),new C.OH("Instagram",B.Cq,m,n),new C.OH("Facebook",B.Cz,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c7:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bA
r=A.Y(B.fH,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cl:B.aI
u=A.v(A.a([e,B.aT,A.aN(n,B.S,!0,n,!0,B.r,n,A.aO(),w,n,n,n,n,n,2,A.bn(n,new A.b7(4,q,B.V),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aG(o,1,B.t,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.m(16),B.Ue),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ac,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a1,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.ap,n,B.i,B.k,0,B.q)
e=A.jm(D.aTZ,D.djF,new C.dBC(d),A.iY(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.F(new A.Q(12,0,12,12+l.f.d),A.cy(A.bU(f,A.v(A.a([j,new A.F(B.Zf,u,n),new A.F(D.aLN,A.H(A.a([e,B.ba,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dBD(d),n,n),B.ai,A.dH(D.aYv,D.dkt,new C.dBE(d,w),A.bp(B.a6,n,n,n,B.e,n,B.KX,n,new A.bt(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ap,n,B.i,B.Z,0,B.q),B.aB),new A.o(n,n,g,k,h,new A.a9(B.az,B.aC,B.E,i,n,n),B.o),B.br),n)},
$S:69}
C.dBB.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dBC.prototype={
$0(){C.dSf()
$.Qx().sv(0,null)
A.a2(this.a,!1).N(null)},
$S:0}
C.dBD.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dBE.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a2(this.a,!1).N(w)
return null},
$S:0}
C.buw.prototype={
$1(d){return C.dSg(A.S(d,x.N,x.z))},
$S:z+3}
C.bux.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.buo.prototype={
$1(d){return d.c},
$S:z+0}
C.bup.prototype={
$1(d){return d.r},
$S:z+0}
C.buq.prototype={
$1(d){return d.f},
$S:z+0}
C.bur.prototype={
$1(d){return d.at},
$S:z+0}
C.bus.prototype={
$1(d){return d.c},
$S:z+0}
C.but.prototype={
$1(d){return d.r},
$S:z+0}
C.buu.prototype={
$1(d){return d.f},
$S:z+0}
C.buv.prototype={
$1(d){return d.at},
$S:z+0}
C.bun.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bum.prototype={
$1(d){return B.b.b6(B.m.h3(d,16),2,"0").toUpperCase()},
$S:78}
C.cZl.prototype={
$0(){},
$S:0}
C.cZk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZi.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cZj.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cZm.prototype={
$1(d){return new C.L7(this.a,null)},
$S:z+7}
C.cZr.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qn,w,w,w,new C.cZq(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.I(A.fZ(A.H(A.a([new A.oM(D.xP,e,g,36,B.CQ,w),B.aP,A.I(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fK(B.f.gI(D.xP).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aA(!1,B.P,!0,w,A.aI(!1,w,!0,new A.F(B.bT,A.Y(B.hw,A.ao(B.f.gI(D.xP),B.f.ga6(D.xP),e),w,w,28),w),B.ce,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbwJ(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a2)],s),B.n,w,B.i,B.k,0,w,w),D.xP,w,g,B.f3,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:337}
C.cZq.prototype={
$0(){return A.a2(this.a,!1).en()},
$S:0}
C.cZs.prototype={
$3(d,e,f){return new A.kI($.HA(),new C.cZp(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cZp.prototype={
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
B.f.A(t,A.a([A.bU(s,new A.hD(1.7777777777777777,C.dSh(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaRl(),"fleet_master"),k),B.aB),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wD(0,B.r,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.l4(new A.F(B.KR,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oY(D.aJz,A.aFy(new A.o7(new C.cZo(i,j),J.a4(i.d),!1,!0,!0,A.uf(),k),D.cSC),k)],w))},
$S:1813}
C.cZo.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Yr(v,e,J.a4(w.d),new C.cZn(w,v),this.b,null)},
$S:z+9}
C.cZn.prototype={
$0(){return this.a.bw3(this.b)},
$S:0}
C.cZt.prototype={
$0(){this.a.WO()
return null},
$S:0}
C.cZf.prototype={
$0(){return A.a2(this.a,!1).en()},
$S:0}
C.cZg.prototype={
$0(){C.a0t(this.a,$.bul)
return null},
$S:0}
C.cZh.prototype={
$3(d,e,f){return A.eI(new C.cZe(this.a,e))},
$S:z+10}
C.cZe.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.R,v,v),B.aT,new C.aXp(u,s.a.c,s.e,s.d,new C.cZb(s),new C.cZc(s),new C.cZd(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.og,v,v,B.am),v,v,v)},
$S:1814}
C.cZb.prototype={
$0(){var w=this.a.c
w.toString
C.a0t(w,$.bul)
return null},
$S:0}
C.cZc.prototype={
$1(d){var w=this.a
return w.n(new C.cZa(w,d))},
$S:28}
C.cZa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cZd.prototype={
$0(){var w=this.a
return w.n(new C.cZ9(w))},
$S:0}
C.cZ9.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.deL.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.deM.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d2y.prototype={
$3(d,e,f){return new C.Gq(this.a.c,null)},
$S:z+11}
C.d2z.prototype={
$3(d,e,f){if(f==null)return e
return new A.av(B.a7,null,B.b8,B.r,A.a([new C.Gq(this.a.c,null),D.ayA],x.p),null)},
$C:"$3",
$R:3,
$S:520}
C.cZu.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZD.prototype={
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
A.jn(v,"load",new C.cZA(w),!1,u)
v=w.e
v.toString
A.jn(v,"error",new C.cZB(w),!1,u)
A.bK(B.kc,new C.cZC(w),x.H)
w=w.e
w.toString
return w},
$S:631}
C.cZA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZz(w))},
$S:50}
C.cZz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cZB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZy(w))},
$S:50}
C.cZy.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cZC.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cZx(w))},
$S:12}
C.cZx.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cZw.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZv.prototype={
$0(){var w,v=C.buk(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nO.Uu(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dxG.prototype={
$1(d){var w,v,u,t,s=new A.yk([],[]).A5(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.K.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1815};(function aliases(){var w=C.aoF.prototype
w.b0I=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aj9.prototype,"gaAZ","bts",1)
w(u,"gbu0","bu1",1)
w(u,"gbwJ","bwK",6)
w(C.aja.prototype,"gbNf","bNg",1)
v(C,"ezT","dSe",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zu,[C.dBG,C.dBF,C.buw,C.bux,C.buo,C.bup,C.buq,C.bur,C.bus,C.but,C.buu,C.buv,C.bun,C.bum,C.cZm,C.cZr,C.cZs,C.cZp,C.cZh,C.cZc,C.d2y,C.d2z,C.cZD,C.cZA,C.cZB,C.dxG])
v(A.a1R,[C.dBB,C.dBC,C.dBD,C.dBE,C.cZl,C.cZk,C.cZi,C.cZj,C.cZq,C.cZn,C.cZt,C.cZf,C.cZg,C.cZb,C.cZa,C.cZd,C.cZ9,C.deL,C.deM,C.cZu,C.cZz,C.cZy,C.cZC,C.cZx,C.cZw,C.cZv])
v(A.ap,[C.OH,C.Yr,C.aOZ,C.aXp,C.aXq,C.aQj,C.aXo,C.aRE,C.aL2,C.aRJ,C.Gq])
v(A.aq,[C.oO,C.r4])
v(A.ad,[C.L8,C.L7,C.a8S,C.a8T])
v(A.ae,[C.aj9,C.aQd,C.aoF,C.aja])
v(A.a1S,[C.cZo,C.cZe])
u(C.Lb,A.aLY)
u(C.aQe,C.aoF)
w(C.aoF,A.dy)})()
A.dVI(b.typeUniverse,JSON.parse('{"L8":{"ad":[],"r":[]},"Yr":{"ap":[],"r":[]},"L7":{"ad":[],"r":[]},"OH":{"ap":[],"r":[]},"aj9":{"ae":["L8"]},"aOZ":{"ap":[],"r":[]},"aQd":{"ae":["L7"]},"aXp":{"ap":[],"r":[]},"aXq":{"ap":[],"r":[]},"aQj":{"ap":[],"r":[]},"aXo":{"ap":[],"r":[]},"aRE":{"ap":[],"r":[]},"aL2":{"ap":[],"r":[]},"a8S":{"ad":[],"r":[]},"Gq":{"ap":[],"r":[]},"aQe":{"ae":["a8S"]},"aRJ":{"ap":[],"r":[]},"a8T":{"ad":[],"r":[]},"aja":{"ae":["a8T"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a7<a6>"),O:w("a7<x>"),e:w("a7<oO>"),S:w("a7<fK>"),s:w("a7<p>"),p:w("a7<r>"),t:w("a7<L>"),X:w("af<oO>"),a:w("af<@>"),P:w("Z<p,@>"),f:w("Z<@,@>"),w:w("oI"),_:w("Ec"),k:w("oO"),N:w("p"),Y:w("bh<a3>"),W:w("d3<p>"),J:w("kI<L>"),j:w("kI<r4?>"),E:w("vI<cZ>"),q:w("Zl"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a1o=new A.O(983224,"MaterialIcons",!1)
D.aWM=new A.ab(D.a1o,48,B.bd,null,null,null)
D.d6m=new A.A("Powered off",null,B.api,null,null,null,null,null,null,null,null,null)
D.bT9=w([D.aWM,B.N,D.d6m],x.p)
D.aGV=new A.eT(B.am,B.i,B.Z,B.n,null,B.q,null,0,D.bT9,null)
D.aye=new A.cY(B.I,null,null,D.aGV,null)
D.cSh=new A.aa(18,18,B.Vb,null)
D.ayA=new A.cY(B.I,null,null,D.cSh,null)
D.azA=new A.fr(2,null,null,null,null,B.aa,null,null,null,null)
D.aDg=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.x)
D.aDT=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.x)
D.aFC=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.x)
D.aJo=new A.Q(0,3,0,3)
D.aJz=new A.Q(10,0,10,88)
D.aJZ=new A.Q(12,6,12,10)
D.aKo=new A.Q(14,8,14,6)
D.aLN=new A.Q(20,8,20,20)
D.ZJ=new A.Q(8,6,15,8)
D.aS9=new A.O(983222,"MaterialIcons",!1)
D.aTV=new A.ab(B.kj,26,B.a6,null,null,null)
D.aTZ=new A.ab(B.a0u,18,null,null,null,null)
D.aUd=new A.ab(B.tU,14,B.aa,null,null,null)
D.aSu=new A.O(983420,"MaterialIcons",!1)
D.aV5=new A.ab(D.aSu,14,B.aa,null,null,null)
D.aQy=new A.O(62895,"MaterialIcons",!1)
D.aVa=new A.ab(D.aQy,14,B.aa,null,null,null)
D.aWF=new A.ab(B.tO,16,B.aa,null,null,null)
D.aYv=new A.ab(B.iC,20,null,null,null,null)
D.aYO=new A.ab(B.hw,16,null,null,null,null)
D.bWX=w([B.aO,B.X],x.O)
D.a3g=new A.a9(B.az,B.aC,B.E,D.bWX,null,null)
D.cLv=new A.aJ("NGMY OS","14.2.1")
D.cK6=new A.aJ("VirtualDroid","13.8.4")
D.cK5=new A.aJ("NGMY OS","15.0.0")
D.cKZ=new A.aJ("VirtualDroid","14.1.2")
D.cK1=new A.aJ("NGMY Tab OS","12.9.7")
D.cK_=new A.aJ("NGMY OS","13.5.3")
D.cJP=new A.aJ("VirtualDroid","15.2.0")
D.cKw=new A.aJ("NGMY OS","14.8.1")
D.cL4=new A.aJ("NGMY Tab OS","13.2.4")
D.cLI=new A.aJ("VirtualDroid","12.6.9")
D.cJJ=new A.aJ("NGMY OS","16.0.1")
D.cJz=new A.aJ("VirtualDroid","14.9.0")
D.cLm=new A.aJ("NGMY Tab OS","14.0.3")
D.cKh=new A.aJ("NGMY OS","13.1.8")
D.cJH=new A.aJ("VirtualDroid","13.4.5")
D.cJZ=new A.aJ("NGMY OS","15.3.2")
D.cL5=new A.aJ("NGMY Tab OS","12.4.1")
D.cLp=new A.aJ("VirtualDroid","16.1.0")
D.cKv=new A.aJ("NGMY OS","14.4.6")
D.cLw=new A.aJ("VirtualDroid","15.0.8")
D.bW7=w([D.cLv,D.cK6,D.cK5,D.cKZ,D.cK1,D.cK_,D.cJP,D.cKw,D.cL4,D.cLI,D.cJJ,D.cJz,D.cLm,D.cKh,D.cJH,D.cJZ,D.cL5,D.cLp,D.cKv,D.cLw],A.b3("a7<+(p,p)>"))
D.xP=w([B.a6,B.fx],x.O)
D.cNT=new A.f0(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cNr=new A.f0(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cNm=new A.f0(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cNv=new A.f0(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cNi=new A.f0(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cNx=new A.f0(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cNV=new A.f0(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cNj=new A.f0(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cNq=new A.f0(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cNz=new A.f0(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cNh=new A.f0(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cNN=new A.f0(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cNK=new A.f0(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cNp=new A.f0(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cNH=new A.f0(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cNG=new A.f0(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cNg=new A.f0(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cNu=new A.f0(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cNE=new A.f0(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cNJ=new A.f0(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.aa4=w([D.cNT,D.cNr,D.cNm,D.cNv,D.cNi,D.cNx,D.cNV,D.cNj,D.cNq,D.cNz,D.cNh,D.cNN,D.cNK,D.cNp,D.cNH,D.cNG,D.cNg,D.cNu,D.cNE,D.cNJ],A.b3("a7<+(p,p,a3,a3,p)>"))
D.c4P=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ahJ=new C.Lb(0,"youtube")
D.ahK=new C.Lb(1,"tiktok")
D.Qi=new C.Lb(2,"instagram")
D.ahL=new C.Lb(3,"facebook")
D.cCk=new C.Lb(4,"other")
D.cSC=new A.hB(4,10,8,0.52,null)
D.d7F=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cVW=new A.aY(D.d7F,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.r,null)
D.cZg=new A.M(!0,B.e,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d7t=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dfH=new A.A("Open in YouTube",null,B.jq,null,null,null,null,null,null,null,null,null)
D.djF=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dkt=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dkE=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dsH=new C.aRE(null)})();(function staticFields(){$.dSd=20
$.aBr=null
$.bul=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eER","HA",()=>A.ade(0))
w($,"eES","Qx",()=>A.ade(null))})()};
(a=>{a["UB9S1LC6dg09UTldPYTZhLsRF2w="]=a.current})($__dart_deferred_initializers__);