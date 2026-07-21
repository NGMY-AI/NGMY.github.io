((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eB2(d,e){A.a2(d,!1).co(A.ev(new C.dBK(e),!0,null,x.H))},
a0r(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a0r=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qu()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.am(new A.bd(n,B.aQ,B.aH),t)
w=3
return A.b(A.d9(B.K,new C.dBJ(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a0r)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.efK(r)
if(q==null){d.H(x.q).f.T(D.cWd)
w=1
break}w=4
return A.b(A.bM(B.hJ,null,x.H),$async$a0r)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dSf=n
p=C.efE(n)
n=$.HC()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dFL(q)
d.H(x.q).f.T(A.bj(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0r,v)},
dSi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oP(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
La(d){return C.efN(d)},
efN(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
r=B.L.aA(0,a0,null)
w=x.a.b(r)&&J.cV(r)?10:11
break
case 10:k=J.eA(r,x.f)
k=A.dh(k,new C.buu(),k.$ti.j("G.E"),x.k)
j=A.U(k).j("ag<G.E>")
i=A.y(new A.ag(k,new C.buv(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dSk(q)
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
n=B.L.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dSi(A.T(n,x.N,x.z))
l=C.dSk(A.a([m],x.e))
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
case 18:case 14:q=C.efL()
w=22
return A.b(C.L9(a3,q),$async$La)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$La,v)},
dSk(d){var w=A.V(d).j("D<1,p>"),v=new A.D(d,new C.bum(),w).ep(0),u=new A.D(d,new C.bun(),w).ep(0),t=new A.D(d,new C.buo(),w).ep(0),s=new A.D(d,new C.bup(),w).ep(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dFM(null,q,u,t,v,s));++q}return r},
aBv(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aBv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.La(d),$async$aBv)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.dn(t,new C.buq(),s).ep(0)
p=r.dn(t,new C.bur(),s).ep(0)
o=r.dn(t,new C.bus(),s).ep(0)
n=r.dn(t,new C.but(),s).ep(0)
m=C.dFM(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.L9(d,t),$async$aBv)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aBv,v)},
L9(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$L9)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.bul(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ak(s,null)),$async$L9)
case 3:return A.h(null,v)}})
return A.i($async$L9,v)},
efL(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.cN(20,x.k)
for(w=0;w<20;++w)q[w]=C.dFM(w,w,t,s,u,r)
return q},
dFM(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lg(),h=d==null,g=D.aa4[B.m.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.aa4[B.m.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.D(p,new C.buk(),A.V(p).j("D<1,p>")).fP(0)
u="VND-"+B.b.an(n,0,4)+"-"+B.b.an(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.f.fP(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.ba(B.m.hk(i.bH(256),16),2,"0")
s=B.f.bg(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a1(e,20)
k=D.c52[w]
j=D.bWh[w]
return new C.oP("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.ba(B.m.q(e+1),2,"0"),u,k,C.efM(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a8().a3())},
efM(d,e){var w,v=J.cN(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.ba(B.m.hk(d.bH(256),16),2,"0")
return B.f.fP(v)},
dBK:function dBK(d){this.a=d},
dBJ:function dBJ(d,e){this.a=d
this.b=e},
dBF:function dBF(d){this.a=d},
dBG:function dBG(d){this.a=d},
dBH:function dBH(d){this.a=d},
dBI:function dBI(d,e){this.a=d
this.b=e},
OH:function OH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oP:function oP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
buu:function buu(){},
buv:function buv(){},
bum:function bum(){},
bun:function bun(){},
buo:function buo(){},
bup:function bup(){},
buq:function buq(){},
bur:function bur(){},
bus:function bus(){},
but:function but(){},
bul:function bul(){},
buk:function buk(){},
L8:function L8(d,e){this.c=d
this.a=e},
aj6:function aj6(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZg:function cZg(){},
cZf:function cZf(d,e){this.a=d
this.b=e},
cZd:function cZd(d){this.a=d},
cZe:function cZe(d,e){this.a=d
this.b=e},
cZh:function cZh(d){this.a=d},
cZm:function cZm(d){this.a=d},
cZl:function cZl(d){this.a=d},
cZn:function cZn(d,e){this.a=d
this.b=e},
cZk:function cZk(d,e,f){this.a=d
this.b=e
this.c=f},
cZj:function cZj(d,e){this.a=d
this.b=e},
cZi:function cZi(d,e){this.a=d
this.b=e},
cZo:function cZo(d){this.a=d},
Yp:function Yp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aP_:function aP_(d,e){this.c=d
this.a=e},
L7:function L7(d,e){this.c=d
this.a=e},
aQe:function aQe(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cZa:function cZa(d){this.a=d},
cZb:function cZb(d){this.a=d},
cZc:function cZc(d){this.a=d},
cZ9:function cZ9(d,e){this.a=d
this.b=e},
cZ6:function cZ6(d){this.a=d},
cZ7:function cZ7(d){this.a=d},
cZ5:function cZ5(d,e){this.a=d
this.b=e},
cZ8:function cZ8(d){this.a=d},
cZ4:function cZ4(d){this.a=d},
aXq:function aXq(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aXr:function aXr(d,e,f){this.c=d
this.d=e
this.a=f},
aQk:function aQk(d,e){this.c=d
this.a=e},
aXp:function aXp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
deG:function deG(d){this.a=d},
deH:function deH(d){this.a=d},
aRF:function aRF(d){this.a=d},
aL3:function aL3(d,e){this.c=d
this.a=e},
efK(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.efJ(v)
if(u!=null)return new C.r2(w,C.dFK(u,!1),D.ahL,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.efI(v)
if(t!=null)return new C.r2(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ahM,"TikTok",q)
s=C.efH(w,v)
if(s!=null)return s
r=C.efG(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.r2(w,w,D.cCC,"Video",q)
return q},
efH(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.an("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(s!=null){w=s.b[1]
w.toString
return new C.r2(d,"https://www.instagram.com/reel/"+w+u,D.Ql,t,null)}v=A.an("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(v!=null){w=v.b[1]
w.toString
return new C.r2(d,"https://www.instagram.com/p/"+w+u,D.Ql,t,null)}return null},
efG(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.r2(d,"https://www.facebook.com/plugins/video.php?href="+A.fp(2,d,B.bu,!1)+"&show_text=false&width=734",D.ahN,"Facebook",null)},
efJ(d){var w,v,u,t=[A.an(y.c,!0,!1,!1,!1),A.an("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.an("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dA(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
efI(d){var w,v=A.an("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dA(d)
if(v!=null)return v.b[1]
w=A.an("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
Lb:function Lb(d,e){this.a=d
this.b=e},
r2:function r2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8M:function a8M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aQf:function aQf(d,e){var _=this
_.d=$
_.cl$=d
_.aC$=e
_.c=_.a=null},
aRK:function aRK(d,e){this.c=d
this.a=e},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d){this.a=d},
Gp:function Gp(d,e){this.c=d
this.a=e},
aoC:function aoC(){},
dSj(d,e,f,g,h,i){return new C.a8N(i,f,h,e,g,d)},
ezA(d){var w=window
w.toString
A.jo(w,"message",new C.dxK(d),!1,x._)},
a8N:function a8N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aj7:function aj7(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cZp:function cZp(d){this.a=d},
cZy:function cZy(d){this.a=d},
cZv:function cZv(d){this.a=d},
cZu:function cZu(d){this.a=d},
cZw:function cZw(d){this.a=d},
cZt:function cZt(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZs:function cZs(d){this.a=d},
cZr:function cZr(d){this.a=d},
cZq:function cZq(d){this.a=d},
dxK:function dxK(d){this.a=d},
efC(){var w,v,u
try{v=A.yg()
w=v.gva(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dFK(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bg(w,"&")},
bui(d){var w=A.an(y.c,!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
dSe(d){var w=A.b_(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b_(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
efD(d,e,f){var w,v,u=C.bui(d)
if(u!=null){if(f){w=C.efC()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dSe(C.dFK(u,e))}return C.dSe(d)},
efE(d){if(d<=4)return 0
return B.m.am(d-1,4)*4},
efF(d){var w
if($.Qu().a==null)return!1
w=$.HC().a
return d>=w&&d<w+4},
dSh(){var w=$.aBu
if(w!=null)w.ac(0)
$.aBu=null
$.HC().sv(0,0)},
dSg(){var w,v,u,t=$.Qu()
if(t.a==null)return
w=$.aBu
if(w!=null)w.ac(0)
v=$.dSf
if(v<=4){t=t.a
t.toString
C.dFL(t)
return}w=$.HC()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dFL(t)},
dFL(d){var w=$.aBu
if(w!=null)w.ac(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aBu=A.dE(A.dl(0,0,0,0,0,w),C.ezQ())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OH.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.J(B.a6.k(0.25),B.t,1),r=A.Y(this.d,B.a6,w,w,14)
return A.q(w,A.H(A.a([r,B.fB,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cp,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hq,w,w,w)}}
C.oP.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L8.prototype={
V(){return new C.aj6(A.a([],x.e))},
geg(){return this.c}}
C.aj6.prototype={
a0(){var w=this
w.a4()
$.HC().az(0,w.gaAX())
C.ezA(w.gbu_())
w.a0c()},
btr(){if(this.c!=null)this.n(new C.cZg())},
bu0(){C.dSg()},
p(){$.HC().Z(0,this.gaAX())
C.dSh()
$.Qu().sv(0,null)
this.a5()},
a0c(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.La(t.a.c),$async$a0c)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cZf(t,s))
$.buj=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0c,v)},
WP(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cZd(t))
w=3
return A.b(C.aBv(t.a.c),$async$WP)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cZe(t,s))
$.buj=J.a4(t.d)
t.c.H(x.q).f.T(A.bj(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
bw1(d){var w=this.c
w.toString
A.a2(w,!1).co(A.ev(new C.cZh(d),!1,null,x.H))},
bwI(){var w=this.c
w.toString
return C.a0r(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.i6:B.bA,s=A.bH(!0,A.v(A.a([new A.F(D.ZL,new A.jj(new C.cZm(w),v),v),A.I(w.e?B.mJ:new A.lD($.Qu(),new C.cZn(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ac,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.av7(B.a6,B.IF,B.jT,D.dkY,w.e?v:new C.cZo(w)),v)}}
C.Yp.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.e.k(0.1),B.t,1),q=A.a([new A.a6(0,B.G,B.a6.k(0.18),B.dB,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8M(n,!0,!C.efF(w),"Fold "+(B.m.am(w,4)+1)+"/"+B.m.am(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.Y(B.km,B.ob,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.k,0,B.q),B.j,B.Ar,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aA(!1,B.R,!0,u,A.aI(!1,t,!0,A.v(A.a([A.I(A.q(u,A.bU(p,A.f8(A.v(A.a([new C.aP_(o,u),A.I(n,1),A.q(u,A.H(A.a([A.Y(B.xr,B.a6.k(0.85),u,u,9),B.aof,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.k,0,u,u),B.j,B.az,u,u,u,u,u,u,D.aJs,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a3g,B.o),u,u,u,u,B.fz,u,u,u),1),B.aM,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.K,0,u,u,u,u,u,B.a3)}}
C.aP_.prototype={
B(d){var w=null
return A.q(w,A.H(A.a([A.I(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.u_,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.az,w,w,w,w,w,w,B.ZA,w,w,w)}}
C.L7.prototype={
V(){return new C.aQe()}}
C.aQe.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.i6:B.bA,t=A.aP(w,w,w,w,B.a2j,w,w,w,new C.cZa(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bH(!0,A.v(A.a([new A.F(D.ZL,A.H(A.a([t,A.I(new A.KY(A.H(A.a([A.I(new A.F(B.jK,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aA(!1,B.R,!0,w,A.aI(!1,w,!0,new A.F(B.bo,A.Y(B.hw,B.a6,w,w,28),w),B.cj,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZb(d),w,w,w,w,w,w,w),B.j,B.K,0,w,w,w,w,w,B.a3)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.I(new A.lD($.Qu(),new C.cZc(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ac,!0,!0),w,!1,!1,w,w)}}
C.aXq.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.G,B.a6.k(0.35),B.fi,28),new A.a6(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.J(B.e.k(0.12),B.t,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dSj(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaRh(),v+"_full")
w=v}else w=new C.aQk(t.r,s)}else w=new C.aL3(m,s)
else w=D.dt_
return A.q(s,A.bU(n,A.f8(A.v(A.a([new C.aXr(m,l,s),A.I(w,1),new C.aXp(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a3g,B.o),s,r*2.05,s,s,B.bS,s,s,r)}}
C.aXr.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.d2(r)
r=A.h1(r)
w=new A.dP(q,r)
v=w.gKV()===0?12:w.gKV()
r=B.b.ba(B.m.q(r),2,"0")
q=(q<12?B.ho:B.jE)===B.ho?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nL,s,s,s),B.b9,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bI,D.aVc,B.dx,D.aUk,B.dx,D.aVh],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aM,A.H(A.a([A.Y(B.CS,B.a6.k(0.9),s,s,12),B.dx,A.I(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.az,s,s,s,s,s,s,D.aKs,s,s,s)}}
C.aQk.prototype={
B(d){var w=null
return A.q(w,A.aB(A.v(A.a([A.Y(B.Cj,B.e.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.eC(D.aYW,D.d7N,this.c,A.dL(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aG(B.a6.k(0.5),1,B.t,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.q),w,w,w),B.j,B.Ar,w,w,w,w,w,w,w,w,w,1/0)}}
C.aXp.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aAJ(B.CL,"YouTube",s===0,r,new C.deG(u))
s=u.aAJ(B.jR,"Device",s===1,r,new C.deH(u))
w=r?"Power off":"Power on"
v=r?D.a1q:D.aSf
return A.q(t,A.H(A.a([q,B.ai,s,B.b9,A.aP(t,t,t,t,A.Y(v,r?B.bO:B.fh,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.az,t,t,t,t,t,t,D.aK2,t,t,t)},
aAJ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b7
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.K
u=A.m(10)
t=g?h:s
return A.I(A.aA(!1,B.R,!0,u,A.aI(!1,A.m(10),!0,new A.F(B.lW,A.v(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a3),1)}}
C.aRF.prototype={
B(d){return D.ayf}}
C.aL3.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k2,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u6("Serial",u.c),q=w.u6("Model",u.d),p=w.u6("Device ID",u.e),o=w.u6("IMEI",u.r),n=w.u6("MAC",u.f),m=w.u6("OS",u.w+" "+u.x),l=w.u6("Location",u.y+", "+u.z),k=w.u6("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.u6("Timezone",u.at)
u=u.ax
return A.e1(A.a([t,B.aM,s,B.af,r,q,p,o,n,m,l,k,j,w.u6("Provisioned",u.length>=10?B.b.an(u,0,10):u)],x.p),v,B.bo,v,v,B.am,!1)},
u6(d,e){var w=null
return new A.F(B.df,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.co,A.d(e,w,w,w,w,w,w,D.cZA,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.Lb.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.r2.prototype={
gaRh(){var w=this.c
return w===D.ahL||w===D.ahM||w===D.Ql||w===D.ahN}}
C.a8M.prototype={
V(){return new C.aQf(null,null)}}
C.aQf.prototype={
a0(){this.a4()
var w=A.be(null,B.tb,null,1,null,this)
w.fT(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b0F()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.o(t,t,t,t,t,new A.a9(B.bT,B.bQ,B.E,A.a([B.K,B.A.k(0.55)],x.O),t,t),B.o),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.cP,p,t)
w=B.e.k(0.92)
q=A.aB(new A.cH(new A.aV(p,new A.bh(0.72,1,q),q.j("aV<bk.T>")),!1,A.Y(B.km,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.ob
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aRK(s,t),r,q,A.ay(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aw(B.a7,t,B.bb,B.r,s,t)}}
C.aRK.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kx(u,B.I,new C.d2t(this),B.c6,B.bU,!0,w,w,new C.d2u(this),w)
return new C.Gp(v,w)}}
C.Gp.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.t_,B.Vx],x.O),B.km)
break
case 1:w=new A.aJ(A.a([B.Ar,D.aDZ],x.O),B.m6)
break
case 2:w=new A.aJ(A.a([D.aFI,D.aDl],x.O),B.Cr)
break
case 3:w=new A.aJ(A.a([B.X,B.dP],x.O),B.CA)
break
case 4:w=new A.aJ(A.a([B.az,B.aO],x.O),B.qp)
break
default:w=u}v=w.a
return A.q(u,A.aB(A.Y(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a9(B.aA,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aoC.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcO())
w.aC$=null
w.a5()},
bd(){this.bq()
this.bp()
this.cP()}}
C.a8N.prototype={
V(){return new C.aj7()}}
C.aj7.prototype={
aag(d,e){var w,v=C.bui(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dFK(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.efD(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bNh(){var w,v=this
if(v.w)return
v.n(new C.cZp(v))
w=v.e
if(w!=null)v.aag(w,v.a.d)},
a0(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.HE()
$.qq().vk(w,new C.cZy(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bj(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cZr(v))
w=v.e
w.toString
v.aag(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.a1H,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.P,n,n)],v))
return A.f8(A.aB(new A.F(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a3G(n,B.uS,w)],v)
if(o.f)w.push(A.f8(A.aB(new A.aa(28,28,D.azB,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b7,B.t,1)
q=A.Y(B.Nc,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e6(0,A.aA(!1,B.R,!0,n,A.aI(!1,n,!0,A.aB(A.q(n,A.H(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.L_,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbNg(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a3)))}v=C.bui(o.a.d)
if(v!=null)w.push(A.ay(8,A.jn(D.aWN,D.dg1,new C.cZq(o),A.iY(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hq,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aw(B.a7,n,B.bb,B.r,w,n)}}
var z=a.updateTypes(["p(oP)","~()","L8(N)","oP(Z<@,@>)","a_(oP)","Z<p,@>(oP)","aD<~>()","L7(N)","lD<L>(N,r2?,r?)","Yp(N,L)","uM(N,r2?,r?)","Gp(N,aq,dO?)"])
C.dBK.prototype={
$1(d){return new C.L8(this.a,null)},
$S:z+2}
C.dBJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a6(0,B.G,B.a6.k(0.22),B.fi,32)],x.V),g=A.J(m?B.cm:B.a6.k(0.18),B.t,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aU1,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.t,1),n,n,n,B.ae),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.v(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.q(n,A.H(A.a([e,B.en,w,A.aP(n,n,n,n,A.Y(B.cQ,m?B.at:B.d1,n,n,n),n,n,n,new C.dBF(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a9(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.L6,n,n,n)
e=A.eo(B.cR,A.a([new C.OH("YouTube",B.N7,m,n),new C.OH("TikTok",B.m6,m,n),new C.OH("Instagram",B.Cr,m,n),new C.OH("Facebook",B.CA,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c7:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bA
r=A.Y(B.fI,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cm:B.aJ
u=A.v(A.a([e,B.aS,A.aN(n,B.S,!0,n,!0,B.r,n,A.aO(),w,n,n,n,n,n,2,A.bn(n,new A.b7(4,q,B.W),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aG(o,1,B.t,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.m(16),B.Uh),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a1,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.ap,n,B.i,B.k,0,B.q)
e=A.jn(D.aU5,D.dk_,new C.dBG(d),A.iY(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.F(new A.Q(12,0,12,12+l.f.d),A.cz(A.bU(f,A.v(A.a([j,new A.F(B.Zh,u,n),new A.F(D.aLS,A.H(A.a([e,B.b9,A.c4(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dBH(d),n,n),B.ai,A.dC(D.aYD,D.dkO,new C.dBI(d,w),A.bp(B.a6,n,n,n,B.e,n,B.L_,n,new A.bt(A.m(14),B.W),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ap,n,B.i,B.Z,0,B.q),B.aC),new A.o(n,n,g,k,h,new A.a9(B.aA,B.aD,B.E,i,n,n),B.o),B.br),n)},
$S:70}
C.dBF.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dBG.prototype={
$0(){C.dSh()
$.Qu().sv(0,null)
A.a2(this.a,!1).N(null)},
$S:0}
C.dBH.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dBI.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a2(this.a,!1).N(w)
return null},
$S:0}
C.buu.prototype={
$1(d){return C.dSi(A.T(d,x.N,x.z))},
$S:z+3}
C.buv.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bum.prototype={
$1(d){return d.c},
$S:z+0}
C.bun.prototype={
$1(d){return d.r},
$S:z+0}
C.buo.prototype={
$1(d){return d.f},
$S:z+0}
C.bup.prototype={
$1(d){return d.at},
$S:z+0}
C.buq.prototype={
$1(d){return d.c},
$S:z+0}
C.bur.prototype={
$1(d){return d.r},
$S:z+0}
C.bus.prototype={
$1(d){return d.f},
$S:z+0}
C.but.prototype={
$1(d){return d.at},
$S:z+0}
C.bul.prototype={
$1(d){return d.aa()},
$S:z+5}
C.buk.prototype={
$1(d){return B.b.ba(B.m.hk(d,16),2,"0").toUpperCase()},
$S:78}
C.cZg.prototype={
$0(){},
$S:0}
C.cZf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZd.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cZe.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cZh.prototype={
$1(d){return new C.L7(this.a,null)},
$S:z+7}
C.cZm.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qt,w,w,w,new C.cZl(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.I(A.fZ(A.H(A.a([new A.oN(D.xT,e,g,36,B.CS,w),B.aP,A.I(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fK(B.f.gI(D.xT).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aA(!1,B.R,!0,w,A.aI(!1,w,!0,new A.F(B.bS,A.Y(B.hw,A.ao(B.f.gI(D.xT),B.f.ga6(D.xT),e),w,w,28),w),B.cj,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbwH(),w,w,w,w,w,w,w),B.j,B.K,0,w,w,w,w,w,B.a3)],s),B.n,w,B.i,B.k,0,w,w),D.xT,w,g,B.f3,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:338}
C.cZl.prototype={
$0(){return A.a2(this.a,!1).eo()},
$S:0}
C.cZn.prototype={
$3(d,e,f){return new A.lD($.HC(),new C.cZk(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cZk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ee(d,k,x.Q)
w=w==null?k:w.glO()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.t,1)
q=A.Y(B.km,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.HC().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.H(A.a([q,B.ai,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dp,B.f2,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bU(s,new A.hD(1.7777777777777777,C.dSj(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaRh(),"fleet_master"),k),B.aC),B.af],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wE(0,B.r,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.l3(new A.F(B.KU,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oZ(D.aJD,A.aFA(new A.o8(new C.cZj(i,j),J.a4(i.d),!1,!0,!0,A.uf(),k),D.cSU),k)],w))},
$S:1812}
C.cZj.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Yp(v,e,J.a4(w.d),new C.cZi(w,v),this.b,null)},
$S:z+9}
C.cZi.prototype={
$0(){return this.a.bw1(this.b)},
$S:0}
C.cZo.prototype={
$0(){this.a.WP()
return null},
$S:0}
C.cZa.prototype={
$0(){return A.a2(this.a,!1).eo()},
$S:0}
C.cZb.prototype={
$0(){C.a0r(this.a,$.buj)
return null},
$S:0}
C.cZc.prototype={
$3(d,e,f){return A.eN(new C.cZ9(this.a,e))},
$S:z+10}
C.cZ9.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.P,v,v),B.aS,new C.aXq(u,s.a.c,s.e,s.d,new C.cZ6(s),new C.cZ7(s),new C.cZ8(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.ok,v,v,B.am),v,v,v)},
$S:1813}
C.cZ6.prototype={
$0(){var w=this.a.c
w.toString
C.a0r(w,$.buj)
return null},
$S:0}
C.cZ7.prototype={
$1(d){var w=this.a
return w.n(new C.cZ5(w,d))},
$S:30}
C.cZ5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cZ8.prototype={
$0(){var w=this.a
return w.n(new C.cZ4(w))},
$S:0}
C.cZ4.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.deG.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.deH.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d2t.prototype={
$3(d,e,f){return new C.Gp(this.a.c,null)},
$S:z+11}
C.d2u.prototype={
$3(d,e,f){if(f==null)return e
return new A.aw(B.a7,null,B.bb,B.r,A.a([new C.Gp(this.a.c,null),D.ayB],x.p),null)},
$C:"$3",
$R:3,
$S:521}
C.cZp.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZy.prototype={
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
w.aag(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.jo(v,"load",new C.cZv(w),!1,u)
v=w.e
v.toString
A.jo(v,"error",new C.cZw(w),!1,u)
A.bM(B.kf,new C.cZx(w),x.H)
w=w.e
w.toString
return w},
$S:632}
C.cZv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZu(w))},
$S:52}
C.cZu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cZw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZt(w))},
$S:52}
C.cZt.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cZx.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cZs(w))},
$S:12}
C.cZs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cZr.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZq.prototype={
$0(){var w,v=C.bui(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nR.Uv(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dxK.prototype={
$1(d){var w,v,u,t,s=new A.yk([],[]).A3(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1814};(function aliases(){var w=C.aoC.prototype
w.b0F=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aj6.prototype,"gaAX","btr",1)
w(u,"gbu_","bu0",1)
w(u,"gbwH","bwI",6)
w(C.aj7.prototype,"gbNg","bNh",1)
v(C,"ezQ","dSg",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zr,[C.dBK,C.dBJ,C.buu,C.buv,C.bum,C.bun,C.buo,C.bup,C.buq,C.bur,C.bus,C.but,C.bul,C.buk,C.cZh,C.cZm,C.cZn,C.cZk,C.cZc,C.cZ7,C.d2t,C.d2u,C.cZy,C.cZv,C.cZw,C.dxK])
v(A.a1P,[C.dBF,C.dBG,C.dBH,C.dBI,C.cZg,C.cZf,C.cZd,C.cZe,C.cZl,C.cZi,C.cZo,C.cZa,C.cZb,C.cZ6,C.cZ5,C.cZ8,C.cZ4,C.deG,C.deH,C.cZp,C.cZu,C.cZt,C.cZx,C.cZs,C.cZr,C.cZq])
v(A.ap,[C.OH,C.Yp,C.aP_,C.aXq,C.aXr,C.aQk,C.aXp,C.aRF,C.aL3,C.aRK,C.Gp])
v(A.aq,[C.oP,C.r2])
v(A.ad,[C.L8,C.L7,C.a8M,C.a8N])
v(A.ae,[C.aj6,C.aQe,C.aoC,C.aj7])
v(A.a1Q,[C.cZj,C.cZ9])
u(C.Lb,A.aLZ)
u(C.aQf,C.aoC)
w(C.aoC,A.dy)})()
A.dVI(b.typeUniverse,JSON.parse('{"L8":{"ad":[],"r":[]},"Yp":{"ap":[],"r":[]},"L7":{"ad":[],"r":[]},"OH":{"ap":[],"r":[]},"aj6":{"ae":["L8"]},"aP_":{"ap":[],"r":[]},"aQe":{"ae":["L7"]},"aXq":{"ap":[],"r":[]},"aXr":{"ap":[],"r":[]},"aQk":{"ap":[],"r":[]},"aXp":{"ap":[],"r":[]},"aRF":{"ap":[],"r":[]},"aL3":{"ap":[],"r":[]},"a8M":{"ad":[],"r":[]},"Gp":{"ap":[],"r":[]},"aQf":{"ae":["a8M"]},"aRK":{"ap":[],"r":[]},"a8N":{"ad":[],"r":[]},"aj7":{"ae":["a8N"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a7<a6>"),O:w("a7<x>"),e:w("a7<oP>"),S:w("a7<fK>"),s:w("a7<p>"),p:w("a7<r>"),t:w("a7<L>"),X:w("af<oP>"),a:w("af<@>"),P:w("Z<p,@>"),f:w("Z<@,@>"),w:w("oJ"),_:w("Eb"),k:w("oP"),N:w("p"),Y:w("bh<a3>"),W:w("d3<p>"),J:w("lD<L>"),j:w("lD<r2?>"),E:w("vJ<cZ>"),q:w("Zj"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a1q=new A.O(983224,"MaterialIcons",!1)
D.aWU=new A.ab(D.a1q,48,B.b7,null,null,null)
D.d6G=new A.A("Powered off",null,B.api,null,null,null,null,null,null,null,null,null)
D.bTi=w([D.aWU,B.N,D.d6G],x.p)
D.aH0=new A.eT(B.am,B.i,B.Z,B.n,null,B.q,null,0,D.bTi,null)
D.ayf=new A.cY(B.I,null,null,D.aH0,null)
D.cSz=new A.aa(18,18,B.Ve,null)
D.ayB=new A.cY(B.I,null,null,D.cSz,null)
D.azB=new A.fr(2,null,null,null,null,B.aa,null,null,null,null)
D.aDl=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.w)
D.aDZ=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.w)
D.aFI=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.w)
D.aJs=new A.Q(0,3,0,3)
D.aJD=new A.Q(10,0,10,88)
D.aK2=new A.Q(12,6,12,10)
D.aKs=new A.Q(14,8,14,6)
D.aLS=new A.Q(20,8,20,20)
D.ZL=new A.Q(8,6,15,8)
D.aSf=new A.O(983222,"MaterialIcons",!1)
D.aU1=new A.ab(B.km,26,B.a6,null,null,null)
D.aU5=new A.ab(B.a0w,18,null,null,null,null)
D.aUk=new A.ab(B.u_,14,B.aa,null,null,null)
D.aSA=new A.O(983420,"MaterialIcons",!1)
D.aVc=new A.ab(D.aSA,14,B.aa,null,null,null)
D.aQD=new A.O(62895,"MaterialIcons",!1)
D.aVh=new A.ab(D.aQD,14,B.aa,null,null,null)
D.aWN=new A.ab(B.tU,16,B.aa,null,null,null)
D.aYD=new A.ab(B.je,20,null,null,null,null)
D.aYW=new A.ab(B.hw,16,null,null,null,null)
D.bX7=w([B.aO,B.X],x.O)
D.a3g=new A.a9(B.aA,B.aD,B.E,D.bX7,null,null)
D.cLM=new A.aJ("NGMY OS","14.2.1")
D.cKn=new A.aJ("VirtualDroid","13.8.4")
D.cKm=new A.aJ("NGMY OS","15.0.0")
D.cLf=new A.aJ("VirtualDroid","14.1.2")
D.cKi=new A.aJ("NGMY Tab OS","12.9.7")
D.cKg=new A.aJ("NGMY OS","13.5.3")
D.cK5=new A.aJ("VirtualDroid","15.2.0")
D.cKN=new A.aJ("NGMY OS","14.8.1")
D.cLl=new A.aJ("NGMY Tab OS","13.2.4")
D.cLZ=new A.aJ("VirtualDroid","12.6.9")
D.cK_=new A.aJ("NGMY OS","16.0.1")
D.cJQ=new A.aJ("VirtualDroid","14.9.0")
D.cLD=new A.aJ("NGMY Tab OS","14.0.3")
D.cKy=new A.aJ("NGMY OS","13.1.8")
D.cJY=new A.aJ("VirtualDroid","13.4.5")
D.cKf=new A.aJ("NGMY OS","15.3.2")
D.cLm=new A.aJ("NGMY Tab OS","12.4.1")
D.cLG=new A.aJ("VirtualDroid","16.1.0")
D.cKM=new A.aJ("NGMY OS","14.4.6")
D.cLN=new A.aJ("VirtualDroid","15.0.8")
D.bWh=w([D.cLM,D.cKn,D.cKm,D.cLf,D.cKi,D.cKg,D.cK5,D.cKN,D.cLl,D.cLZ,D.cK_,D.cJQ,D.cLD,D.cKy,D.cJY,D.cKf,D.cLm,D.cLG,D.cKM,D.cLN],A.b3("a7<+(p,p)>"))
D.xT=w([B.a6,B.fy],x.O)
D.cO9=new A.f_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cNI=new A.f_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cND=new A.f_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cNM=new A.f_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cNz=new A.f_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cNO=new A.f_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cOb=new A.f_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cNA=new A.f_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cNH=new A.f_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cNQ=new A.f_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cNy=new A.f_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cO3=new A.f_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cO0=new A.f_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cNG=new A.f_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cNY=new A.f_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cNX=new A.f_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cNx=new A.f_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cNL=new A.f_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cNV=new A.f_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cO_=new A.f_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.aa4=w([D.cO9,D.cNI,D.cND,D.cNM,D.cNz,D.cNO,D.cOb,D.cNA,D.cNH,D.cNQ,D.cNy,D.cO3,D.cO0,D.cNG,D.cNY,D.cNX,D.cNx,D.cNL,D.cNV,D.cO_],A.b3("a7<+(p,p,a3,a3,p)>"))
D.c52=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ahL=new C.Lb(0,"youtube")
D.ahM=new C.Lb(1,"tiktok")
D.Ql=new C.Lb(2,"instagram")
D.ahN=new C.Lb(3,"facebook")
D.cCC=new C.Lb(4,"other")
D.cSU=new A.hB(4,10,8,0.52,null)
D.d7Z=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cWd=new A.aY(D.d7Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.r,null)
D.cZA=new A.M(!0,B.e,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d7N=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dg1=new A.A("Open in YouTube",null,B.jr,null,null,null,null,null,null,null,null,null)
D.dk_=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dkO=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dkY=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dt_=new C.aRF(null)})();(function staticFields(){$.dSf=20
$.aBu=null
$.buj=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eEO","HC",()=>A.add(0))
w($,"eEP","Qu",()=>A.add(null))})()};
(a=>{a["wbXF08mgQ9mAGYlYEGwjc0kePsk="]=a.current})($__dart_deferred_initializers__);