((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eLw(d,e){A.a0(d,!1).cr(A.eC(new C.dKU(e),!0,null,x.H))},
a1a(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1a=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Re()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.an(new A.bb(n,B.aR,B.aI),t)
w=3
return A.b(A.d3(B.J,new C.dKT(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1a)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.epF(r)
if(q==null){d.F(x.q).f.R(D.d_D)
w=1
break}w=4
return A.b(A.bG(B.hX,null,x.H),$async$a1a)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.e0L=n
p=C.epz(n)
n=$.I6()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dP1(q)
d.F(x.q).f.R(A.bh(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1a,v)},
e0O(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LE(d){return C.epI(d)},
epI(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LE=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$LE)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a9(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aC(0,a0,null)
w=x.a.b(r)&&J.cL(r)?10:11
break
case 10:k=J.eB(r,x.f)
k=A.de(k,new C.bwO(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bwP(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.e0Q(q)
w=12
return A.b(C.LD(a3,p),$async$LE)
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
n=B.L.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.e0O(A.S(n,x.N,x.z))
l=C.e0Q(A.a([m],x.e))
w=21
return A.b(C.LD(a3,l),$async$LE)
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
case 18:case 14:q=C.epG()
w=22
return A.b(C.LD(a3,q),$async$LE)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LE,v)},
e0Q(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bwG(),w).ev(0),u=new A.H(d,new C.bwH(),w).ev(0),t=new A.H(d,new C.bwI(),w).ev(0),s=new A.H(d,new C.bwJ(),w).ev(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dP2(null,q,u,t,v,s));++q}return r},
aD7(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aD7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LE(d),$async$aD7)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d6(t,new C.bwK(),s).ev(0)
p=r.d6(t,new C.bwL(),s).ev(0)
o=r.d6(t,new C.bwM(),s).ev(0)
n=r.d6(t,new C.bwN(),s).ev(0)
m=C.dP2(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LD(d,t),$async$aD7)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aD7,v)},
LD(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.au(),$async$LD)
case 2:u=g
t=B.b.i(d)
s=J.aT(e,new C.bwF(),x.P)
s=A.y(s,s.$ti.j("a8.E"))
w=3
return A.b(u.ak("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.aj(s,null)),$async$LD)
case 3:return A.h(null,v)}})
return A.i($async$LD,v)},
epG(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dn(20,x.k)
for(w=0;w<20;++w)q[w]=C.dP2(w,w,t,s,u,r)
return q},
dP2(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lp(),h=d==null,g=D.abD[B.m.a5(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abD[B.m.a5(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.H(p,new C.bwE(),A.X(p).j("H<1,p>")).fU(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.f.fU(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b8(B.m.hc(i.bx(256),16),2,"0")
s=B.f.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a5(e,20)
k=D.c8D[w]
j=D.bZR[w]
return new C.oY("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.epH(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a8().a6())},
epH(d,e){var w,v=J.dn(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.hc(d.bx(256),16),2,"0")
return B.f.fU(v)},
dKU:function dKU(d){this.a=d},
dKT:function dKT(d,e){this.a=d
this.b=e},
dKP:function dKP(d){this.a=d},
dKQ:function dKQ(d){this.a=d},
dKR:function dKR(d){this.a=d},
dKS:function dKS(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e,f,g){var _=this
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
bwO:function bwO(){},
bwP:function bwP(){},
bwG:function bwG(){},
bwH:function bwH(){},
bwI:function bwI(){},
bwJ:function bwJ(){},
bwK:function bwK(){},
bwL:function bwL(){},
bwM:function bwM(){},
bwN:function bwN(){},
bwF:function bwF(){},
bwE:function bwE(){},
LC:function LC(d,e){this.c=d
this.a=e},
aka:function aka(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3E:function d3E(){},
d3D:function d3D(d,e){this.a=d
this.b=e},
d3B:function d3B(d){this.a=d},
d3C:function d3C(d,e){this.a=d
this.b=e},
d3F:function d3F(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3J:function d3J(d){this.a=d},
d3L:function d3L(d,e){this.a=d
this.b=e},
d3I:function d3I(d,e,f){this.a=d
this.b=e
this.c=f},
d3H:function d3H(d,e){this.a=d
this.b=e},
d3G:function d3G(d,e){this.a=d
this.b=e},
d3M:function d3M(d){this.a=d},
Z6:function Z6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQI:function aQI(d,e){this.c=d
this.a=e},
LB:function LB(d,e){this.c=d
this.a=e},
aRX:function aRX(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d3y:function d3y(d){this.a=d},
d3z:function d3z(d){this.a=d},
d3A:function d3A(d){this.a=d},
d3x:function d3x(d,e){this.a=d
this.b=e},
d3u:function d3u(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3t:function d3t(d,e){this.a=d
this.b=e},
d3w:function d3w(d){this.a=d},
d3s:function d3s(d){this.a=d},
aZc:function aZc(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZd:function aZd(d,e,f){this.c=d
this.d=e
this.a=f},
aS2:function aS2(d,e){this.c=d
this.a=e},
aZb:function aZb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dm6:function dm6(d){this.a=d},
dm7:function dm7(d){this.a=d},
aTo:function aTo(d){this.a=d},
aMI:function aMI(d,e){this.c=d
this.a=e},
epF(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.epE(v)
if(u!=null)return new C.rj(w,C.dP0(u,!1),D.ajs,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.epD(v)
if(t!=null)return new C.rj(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajt,"TikTok",q)
s=C.epC(w,v)
if(s!=null)return s
r=C.epB(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rj(w,w,D.cGI,"Video",q)
return q},
epC(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.al("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/reel/"+w+u,D.Rr,t,null)}v=A.al("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/p/"+w+u,D.Rr,t,null)}return null},
epB(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rj(d,"https://www.facebook.com/plugins/video.php?href="+A.fR(2,d,B.bz,!1)+"&show_text=false&width=734",D.aju,"Facebook",null)},
epE(d){var w,v,u,t=[A.al(y.c,!0,!1,!1,!1),A.al("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.al("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dA(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
epD(d){var w,v=A.al("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dA(d)
if(v!=null)return v.b[1]
w=A.al("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
LF:function LF(d,e){this.a=d
this.b=e},
rj:function rj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9I:function a9I(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRY:function aRY(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aTt:function aTt(d,e){this.c=d
this.a=e},
d8I:function d8I(d){this.a=d},
d8J:function d8J(d){this.a=d},
GR:function GR(d,e){this.c=d
this.a=e},
apS:function apS(){},
e0P(d,e,f,g,h,i){return new C.a9J(i,f,h,e,g,d)},
eK1(d){var w=window
w.toString
A.h5(w,"message",new C.dGd(d),!1,x._)},
a9J:function a9J(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akb:function akb(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d3N:function d3N(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3S:function d3S(d){this.a=d},
d3U:function d3U(d){this.a=d},
d3R:function d3R(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3P:function d3P(d){this.a=d},
d3O:function d3O(d){this.a=d},
dGd:function dGd(d){this.a=d},
epx(){var w,v,u
try{v=A.rE()
w=v.gvq(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dP0(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bc(w,"&")},
bwC(d){var w=A.al(y.c,!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
e0K(d){var w=A.aV(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aV(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
epy(d,e,f){var w,v,u=C.bwC(d)
if(u!=null){if(f){w=C.epx()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e0K(C.dP0(u,e))}return C.e0K(d)},
epz(d){if(d<=4)return 0
return B.m.ae(d-1,4)*4},
epA(d){var w
if($.Re().a==null)return!1
w=$.I6().a
return d>=w&&d<w+4},
e0N(){var w=$.aD6
if(w!=null)w.a1(0)
$.aD6=null
$.I6().sv(0,0)},
e0M(){var w,v,u,t=$.Re()
if(t.a==null)return
w=$.aD6
if(w!=null)w.a1(0)
v=$.e0L
if(v<=4){t=t.a
t.toString
C.dP1(t)
return}w=$.I6()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dP1(t)},
dP1(d){var w=$.aD6
if(w!=null)w.a1(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aD6=A.dt(A.d6(0,0,0,0,0,w),C.eKh())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pg.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.t,1),r=A.V(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fL,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.co,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hp,w,w,w)}}
C.oY.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LC.prototype={
U(){return new C.aka(A.a([],x.e))},
gek(){return this.c}}
C.aka.prototype={
Z(){var w=this
w.a4()
$.I6().aB(0,w.gaBH())
C.eK1(w.gbuY())
w.a0O()},
bup(){if(this.c!=null)this.n(new C.d3E())},
buZ(){C.e0M()},
p(){$.I6().a_(0,this.gaBH())
C.e0N()
$.Re().sv(0,null)
this.a3()},
a0O(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LE(t.a.c),$async$a0O)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3D(t,s))
$.bwD=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a0O,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d3B(t))
w=3
return A.b(C.aD7(t.a.c),$async$Xo)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3C(t,s))
$.bwD=J.a3(t.d)
t.c.F(x.q).f.R(A.bh(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xo,v)},
bx0(d){var w=this.c
w.toString
A.a0(w,!1).cr(A.eC(new C.d3F(d),!1,null,x.H))},
bxH(){var w=this.c
w.toString
return C.a1a(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.ih:B.bD,s=A.bB(!0,A.v(A.a([new A.D(D.a_Z,new A.jt(new C.d3K(w),v),v),A.G(w.e?B.n2:new A.lL($.Re(),new C.d3L(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.awA(B.a6,B.JB,B.kA,D.dpW,w.e?v:new C.d3M(w)),v)}}
C.Z6.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.t,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dG,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9I(n,!0,!C.epA(w),"Fold "+(B.m.ae(w,4)+1)+"/"+B.m.ae(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.V(B.kx,B.ot,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aX,B.k,0,B.p),B.j,B.B6,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.Q,!0,u,A.aH(!1,t,!0,A.v(A.a([A.G(A.q(u,A.bQ(p,A.f2(A.v(A.a([new C.aQI(o,u),A.G(n,1),A.q(u,A.F(A.a([A.V(B.y_,B.a6.k(0.85),u,u,9),B.aq0,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.k,0,u,u),B.j,B.aA,u,u,u,u,u,u,D.aM3,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4G,B.o),u,u,u,u,B.fl,u,u,u),1),B.aK,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a2)}}
C.aQI.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.G(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.uy,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aA,w,w,w,w,w,w,B.a_O,w,w,w)}}
C.LB.prototype={
U(){return new C.aRX()}}
C.aRX.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.ih:B.bD,t=A.aN(w,w,w,w,B.a3F,w,w,w,new C.d3y(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bB(!0,A.v(A.a([new A.D(D.a_Z,A.F(A.a([t,A.G(new A.Lq(A.F(A.a([A.G(new A.D(B.k_,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.D(B.bs,A.V(B.hI,B.a6,w,w,28),w),B.cm,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3z(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a2)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.G(new A.lL($.Re(),new C.d3A(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aZc.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eD,28),new A.a5(0,B.G,B.A.k(0.45),B.d9,18)],x.V),o=A.J(B.c.k(0.12),B.t,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e0P(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaS1(),v+"_full")
w=v}else w=new C.aS2(t.r,s)}else w=new C.aMI(m,s)
else w=D.dxO
return A.q(s,A.bQ(n,A.f2(A.v(A.a([new C.aZd(m,l,s),A.G(w,1),new C.aZb(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4G,B.o),s,r*2.05,s,s,B.bJ,s,s,r)}}
C.aZd.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glT()
r=r.gFx()
w=new A.dN(q,r)
v=w.gLl()===0?12:w.gLl()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hB:B.jT)===B.hB?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o3,s,s,s),B.bb,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bP,D.aY6,B.dh,D.aXe,B.dh,D.aYb],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aK,A.F(A.a([A.V(B.xY,B.a6.k(0.9),s,s,12),B.dh,A.G(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aA,s,s,s,s,s,s,D.aN9,s,s,s)}}
C.aS2.prototype={
B(d){var w=null
return A.q(w,A.aC(A.v(A.a([A.V(B.D8,B.c.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eI(D.b10,D.dcf,this.c,A.dC(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.k(0.5),1,B.t,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.B6,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZb.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBt(B.Dy,"YouTube",s===0,r,new C.dm6(u))
s=u.aBt(B.jp,"Device",s===1,r,new C.dm7(u))
w=r?"Power off":"Power on"
v=r?D.a2G:D.aV8
return A.q(t,A.F(A.a([q,B.ai,s,B.bb,A.aN(t,t,t,t,A.V(v,r?B.bL:B.f7,t,t,t),t,t,t,u.f,t,t,t,t,w,B.d2)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aA,t,t,t,t,t,t,D.aMG,t,t,t)},
aBt(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bc
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.G(A.az(!1,B.Q,!0,u,A.aH(!1,A.m(10),!0,new A.D(B.mh,A.v(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a2),1)}}
C.aTo.prototype={
B(d){return D.aAo}}
C.aMI.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iE,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.un("Serial",u.c),q=w.un("Model",u.d),p=w.un("Device ID",u.e),o=w.un("IMEI",u.r),n=w.un("MAC",u.f),m=w.un("OS",u.w+" "+u.x),l=w.un("Location",u.y+", "+u.z),k=w.un("Coordinates",B.l.aa(u.Q,4)+", "+B.l.aa(u.as,4)),j=w.un("Timezone",u.at)
u=u.ax
return A.ec(A.a([t,B.aK,s,B.ae,r,q,p,o,n,m,l,k,j,w.un("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bs,v,v,B.ak,!1)},
un(d,e){var w=null
return new A.D(B.dn,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.d(e,w,w,w,w,w,w,D.d30,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LF.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rj.prototype={
gaS1(){var w=this.c
return w===D.ajs||w===D.ajt||w===D.Rr||w===D.aju}}
C.a9I.prototype={
U(){return new C.aRY(null,null)}}
C.aRY.prototype={
Z(){this.a4()
var w=A.be(null,B.tI,null,1,null,this)
w.fG(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b1x()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cx(t,new A.o(t,t,t,t,t,new A.a6(B.bV,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cE(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bm.T>")),!1,A.V(B.kx,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.ot
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aTt(s,t),r,q,A.at(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.at(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.at(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ap(B.a4,t,B.b9,B.r,s,t)}}
C.aTt.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kG(u,B.I,new C.d8I(this),B.c9,B.bX,!0,w,w,new C.d8J(this),w)
return new C.GR(v,w)}}
C.GR.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.tx,B.WQ],x.O),B.kx)
break
case 1:w=new A.aJ(A.a([B.B6,D.aGm],x.O),B.mq)
break
case 2:w=new A.aJ(A.a([D.aIa,D.aFG],x.O),B.Df)
break
case 3:w=new A.aJ(A.a([B.W,B.dS],x.O),B.Dn)
break
case 4:w=new A.aJ(A.a([B.aA,B.aP],x.O),B.qR)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a6(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apS.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.a_(0,w.gcM())
w.aD$=null
w.a3()},
be(){this.bq()
this.bp()
this.cN()}}
C.a9J.prototype={
U(){return new C.akb()}}
C.akb.prototype={
aaX(d,e){var w,v=C.bwC(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dP0(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.epy(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bOu(){var w,v=this
if(v.w)return
v.n(new C.d3N(v))
w=v.e
if(w!=null)v.aaX(w,v.a.d)},
Z(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.D7()
$.pA().tJ(w,new C.d3W(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d3P(v))
w=v.e
w.toString
v.aaX(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a2Y,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.P,n,n)],v))
return A.f2(A.aC(new A.D(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.T_(n,B.rl,w)],v)
if(o.f)w.push(A.f2(A.aC(new A.aa(28,28,D.aBO,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.bc,B.t,1)
q=A.V(B.DK,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dK(0,A.az(!1,B.Q,!0,n,A.aH(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LU,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbOt(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a2)))}v=C.bwC(o.a.d)
if(v!=null)w.push(A.at(8,A.jw(D.aZK,D.dkO,new C.d3O(o),A.ij(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hp,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ap(B.a4,n,B.b9,B.r,w,n)}}
var z=a.updateTypes(["p(oY)","~()","LC(M)","oY(a_<@,@>)","Z(oY)","a_<p,@>(oY)","aD<~>()","LB(M)","lL<L>(M,rj?,r?)","Z6(M,L)","vd(M,rj?,r?)","GR(M,as,dQ?)"])
C.dKU.prototype={
$1(d){return new C.LC(this.a,null)},
$S:z+2}
C.dKT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.er,B.W],j):A.a([B.c,B.az],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eD,32)],x.V),g=A.J(m?B.cc:B.a6.k(0.18),B.t,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.q(n,D.aWW,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.t,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.G(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.en,w,A.aN(n,n,n,n,A.V(B.cL,m?B.at:B.d_,n,n,n),n,n,n,new C.dKP(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a6(B.a_,B.a1,B.E,j,n,n),B.o),n,n,n,n,B.M0,n,n,n)
e=A.eu(B.cS,A.a([new C.Pg("YouTube",B.O9,m,n),new C.Pg("TikTok",B.mq,m,n),new C.Pg("Instagram",B.Df,m,n),new C.Pg("Facebook",B.Dn,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cd:B.hV,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bD
r=A.V(B.fV,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cc:B.aM
u=A.v(A.a([e,B.aS,A.aO(n,B.S,!0,n,!0,B.r,n,A.aP(),w,n,n,n,n,n,2,A.bn(n,new A.b2(4,q,B.U),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.t,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vy),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a5,n,B.ag,n,n,n,n)],v),B.an,n,B.i,B.k,0,B.p)
e=A.jw(D.aX_,D.doX,new C.dKQ(d),A.ij(n,n,n,n,n,n,n,n,n,n,n,m?B.bB:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.D(new A.Q(12,0,12,12+l.f.d),A.cx(A.bQ(f,A.v(A.a([j,new A.D(B.a_w,u,n),new A.D(D.aOB,A.F(A.a([e,B.bb,A.c0(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dKR(d),n,n),B.ai,A.dF(D.b0G,D.dpN,new C.dKS(d,w),A.bo(B.a6,n,n,n,B.c,n,B.LU,n,new A.bp(A.m(14),B.U),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.an,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a6(B.av,B.aD,B.E,i,n,n),B.o),B.bq),n)},
$S:76}
C.dKP.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dKQ.prototype={
$0(){C.e0N()
$.Re().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dKR.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dKS.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bwO.prototype={
$1(d){return C.e0O(A.S(d,x.N,x.z))},
$S:z+3}
C.bwP.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bwG.prototype={
$1(d){return d.c},
$S:z+0}
C.bwH.prototype={
$1(d){return d.r},
$S:z+0}
C.bwI.prototype={
$1(d){return d.f},
$S:z+0}
C.bwJ.prototype={
$1(d){return d.at},
$S:z+0}
C.bwK.prototype={
$1(d){return d.c},
$S:z+0}
C.bwL.prototype={
$1(d){return d.r},
$S:z+0}
C.bwM.prototype={
$1(d){return d.f},
$S:z+0}
C.bwN.prototype={
$1(d){return d.at},
$S:z+0}
C.bwF.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bwE.prototype={
$1(d){return B.b.b8(B.m.hc(d,16),2,"0").toUpperCase()},
$S:83}
C.d3E.prototype={
$0(){},
$S:0}
C.d3D.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3B.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d3C.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d3F.prototype={
$1(d){return new C.LB(this.a,null)},
$S:z+7}
C.d3K.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,B.qV,w,w,w,new C.d3J(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.G(A.h0(A.F(A.a([new A.oW(D.yv,e,g,36,B.xY,w),B.aO,A.G(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fO(B.f.gH(D.yv).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.D(B.bJ,A.V(B.hI,A.ao(B.f.gH(D.yv),B.f.ga7(D.yv),e),w,w,28),w),B.cm,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbxG(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a2)],s),B.n,w,B.i,B.k,0,w,w),D.yv,w,g,B.eR,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:317}
C.d3J.prototype={
$0(){return A.a0(this.a,!1).e9()},
$S:0}
C.d3L.prototype={
$3(d,e,f){return new A.lL($.I6(),new C.d3I(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d3I.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EE(d,k,x.Q)
w=w==null?k:w.glU()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.t,1)
q=A.V(B.kx,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.I6().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.G(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.df,B.fa,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.iS(1.7777777777777777,C.e0P(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaS1(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uT(0,B.r,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.lb(new A.D(B.LQ,A.v(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.oj(D.aMf,A.aHb(new A.oh(new C.d3H(i,j),J.a3(i.d),!1,!0,!0,A.uE(),k),D.cX9),k)],w))},
$S:1855}
C.d3H.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Z6(v,e,J.a3(w.d),new C.d3G(w,v),this.b,null)},
$S:z+9}
C.d3G.prototype={
$0(){return this.a.bx0(this.b)},
$S:0}
C.d3M.prototype={
$0(){this.a.Xo()
return null},
$S:0}
C.d3y.prototype={
$0(){return A.a0(this.a,!1).e9()},
$S:0}
C.d3z.prototype={
$0(){C.a1a(this.a,$.bwD)
return null},
$S:0}
C.d3A.prototype={
$3(d,e,f){return A.dU(new C.d3x(this.a,e))},
$S:z+10}
C.d3x.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.P,v,v),B.aS,new C.aZc(u,s.a.c,s.e,s.d,new C.d3u(s),new C.d3v(s),new C.d3w(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.r,v,B.F,v,B.oE,v,v,B.ak),v,v,v)},
$S:1856}
C.d3u.prototype={
$0(){var w=this.a.c
w.toString
C.a1a(w,$.bwD)
return null},
$S:0}
C.d3v.prototype={
$1(d){var w=this.a
return w.n(new C.d3t(w,d))},
$S:32}
C.d3t.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d3w.prototype={
$0(){var w=this.a
return w.n(new C.d3s(w))},
$S:0}
C.d3s.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dm6.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dm7.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d8I.prototype={
$3(d,e,f){return new C.GR(this.a.c,null)},
$S:z+11}
C.d8J.prototype={
$3(d,e,f){if(f==null)return e
return new A.ap(B.a4,null,B.b9,B.r,A.a([new C.GR(this.a.c,null),D.aAK],x.p),null)},
$C:"$3",
$R:3,
$S:532}
C.d3N.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3W.prototype={
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
w.aaX(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h5(v,"load",new C.d3T(w),!1,u)
v=w.e
v.toString
A.h5(v,"error",new C.d3U(w),!1,u)
A.bG(B.jX,new C.d3V(w),x.H)
w=w.e
w.toString
return w},
$S:623}
C.d3T.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d3S(w))},
$S:29}
C.d3S.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3U.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d3R(w))},
$S:29}
C.d3R.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d3V.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d3Q(w))},
$S:11}
C.d3Q.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3P.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d3O.prototype={
$0(){var w,v=C.bwC(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mU.LF(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dGd.prototype={
$1(d){var w,v,u,t,s=new A.w3([],[]).xf(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1857};(function aliases(){var w=C.apS.prototype
w.b1x=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aka.prototype,"gaBH","bup",1)
w(u,"gbuY","buZ",1)
w(u,"gbxG","bxH",6)
w(C.akb.prototype,"gbOt","bOu",1)
v(C,"eKh","e0M",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zK,[C.dKU,C.dKT,C.bwO,C.bwP,C.bwG,C.bwH,C.bwI,C.bwJ,C.bwK,C.bwL,C.bwM,C.bwN,C.bwF,C.bwE,C.d3F,C.d3K,C.d3L,C.d3I,C.d3A,C.d3v,C.d8I,C.d8J,C.d3W,C.d3T,C.d3U,C.dGd])
v(A.a2z,[C.dKP,C.dKQ,C.dKR,C.dKS,C.d3E,C.d3D,C.d3B,C.d3C,C.d3J,C.d3G,C.d3M,C.d3y,C.d3z,C.d3u,C.d3t,C.d3w,C.d3s,C.dm6,C.dm7,C.d3N,C.d3S,C.d3R,C.d3V,C.d3Q,C.d3P,C.d3O])
v(A.aq,[C.Pg,C.Z6,C.aQI,C.aZc,C.aZd,C.aS2,C.aZb,C.aTo,C.aMI,C.aTt,C.GR])
v(A.as,[C.oY,C.rj])
v(A.ad,[C.LC,C.LB,C.a9I,C.a9J])
v(A.ae,[C.aka,C.aRX,C.apS,C.akb])
v(A.a2A,[C.d3H,C.d3x])
u(C.LF,A.aND)
u(C.aRY,C.apS)
w(C.apS,A.dA)})()
A.e4d(b.typeUniverse,JSON.parse('{"LC":{"ad":[],"r":[]},"Z6":{"aq":[],"r":[]},"LB":{"ad":[],"r":[]},"Pg":{"aq":[],"r":[]},"aka":{"ae":["LC"]},"aQI":{"aq":[],"r":[]},"aRX":{"ae":["LB"]},"aZc":{"aq":[],"r":[]},"aZd":{"aq":[],"r":[]},"aS2":{"aq":[],"r":[]},"aZb":{"aq":[],"r":[]},"aTo":{"aq":[],"r":[]},"aMI":{"aq":[],"r":[]},"a9I":{"ad":[],"r":[]},"GR":{"aq":[],"r":[]},"aRY":{"ae":["a9I"]},"aTt":{"aq":[],"r":[]},"a9J":{"ad":[],"r":[]},"akb":{"ae":["a9J"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a7<a5>"),O:w("a7<x>"),e:w("a7<oY>"),S:w("a7<fO>"),s:w("a7<p>"),p:w("a7<r>"),t:w("a7<L>"),X:w("ah<oY>"),a:w("ah<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oS"),_:w("EB"),k:w("oY"),N:w("p"),Y:w("bi<a4>"),W:w("d2<p>"),J:w("lL<L>"),j:w("lL<rj?>"),E:w("ud<d_>"),q:w("a_4"),z:w("@"),Q:w("as?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2G=new A.O(983224,"MaterialIcons",!1)
D.aZR=new A.ab(D.a2G,48,B.bc,null,null,null)
D.db9=new A.A("Powered off",null,B.ar1,null,null,null,null,null,null,null,null,null)
D.bWN=w([D.aZR,B.N,D.db9],x.p)
D.aJz=new A.eL(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bWN,null)
D.aAo=new A.cT(B.I,null,null,D.aJz,null)
D.cWQ=new A.aa(18,18,B.Wy,null)
D.aAK=new A.cT(B.I,null,null,D.cWQ,null)
D.aBO=new A.fo(2,null,null,null,null,B.aa,null,null,null,null)
D.aFG=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGm=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIa=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aM3=new A.Q(0,3,0,3)
D.aMf=new A.Q(10,0,10,88)
D.aMG=new A.Q(12,6,12,10)
D.aN9=new A.Q(14,8,14,6)
D.aOB=new A.Q(20,8,20,20)
D.a_Z=new A.Q(8,6,15,8)
D.aV8=new A.O(983222,"MaterialIcons",!1)
D.aWW=new A.ab(B.kx,26,B.a6,null,null,null)
D.aX_=new A.ab(B.a1G,18,null,null,null,null)
D.aXe=new A.ab(B.uy,14,B.aa,null,null,null)
D.aVr=new A.O(983420,"MaterialIcons",!1)
D.aY6=new A.ab(D.aVr,14,B.aa,null,null,null)
D.aTr=new A.O(62895,"MaterialIcons",!1)
D.aYb=new A.ab(D.aTr,14,B.aa,null,null,null)
D.aZK=new A.ab(B.ur,16,B.aa,null,null,null)
D.b0G=new A.ab(B.is,20,null,null,null,null)
D.b10=new A.ab(B.hI,16,null,null,null,null)
D.c_I=w([B.aP,B.W],x.O)
D.a4G=new A.a6(B.av,B.aD,B.E,D.c_I,null,null)
D.cQ0=new A.aJ("NGMY OS","14.2.1")
D.cOE=new A.aJ("VirtualDroid","13.8.4")
D.cOD=new A.aJ("NGMY OS","15.0.0")
D.cPx=new A.aJ("VirtualDroid","14.1.2")
D.cOz=new A.aJ("NGMY Tab OS","12.9.7")
D.cOx=new A.aJ("NGMY OS","13.5.3")
D.cOm=new A.aJ("VirtualDroid","15.2.0")
D.cP3=new A.aJ("NGMY OS","14.8.1")
D.cPC=new A.aJ("NGMY Tab OS","13.2.4")
D.cQd=new A.aJ("VirtualDroid","12.6.9")
D.cOg=new A.aJ("NGMY OS","16.0.1")
D.cO3=new A.aJ("VirtualDroid","14.9.0")
D.cPR=new A.aJ("NGMY Tab OS","14.0.3")
D.cOP=new A.aJ("NGMY OS","13.1.8")
D.cOe=new A.aJ("VirtualDroid","13.4.5")
D.cOw=new A.aJ("NGMY OS","15.3.2")
D.cPD=new A.aJ("NGMY Tab OS","12.4.1")
D.cPU=new A.aJ("VirtualDroid","16.1.0")
D.cP2=new A.aJ("NGMY OS","14.4.6")
D.cQ1=new A.aJ("VirtualDroid","15.0.8")
D.bZR=w([D.cQ0,D.cOE,D.cOD,D.cPx,D.cOz,D.cOx,D.cOm,D.cP3,D.cPC,D.cQd,D.cOg,D.cO3,D.cPR,D.cOP,D.cOe,D.cOw,D.cPD,D.cPU,D.cP2,D.cQ1],A.b4("a7<+(p,p)>"))
D.yv=w([B.a6,B.ft],x.O)
D.cSo=new A.f4(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cRX=new A.f4(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cRS=new A.f4(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cS0=new A.f4(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cRO=new A.f4(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cS2=new A.f4(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cSq=new A.f4(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cRP=new A.f4(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cRW=new A.f4(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cS4=new A.f4(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cRN=new A.f4(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cSi=new A.f4(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cSf=new A.f4(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cRV=new A.f4(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cSc=new A.f4(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cSb=new A.f4(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cRM=new A.f4(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cS_=new A.f4(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cS9=new A.f4(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cSe=new A.f4(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abD=w([D.cSo,D.cRX,D.cRS,D.cS0,D.cRO,D.cS2,D.cSq,D.cRP,D.cRW,D.cS4,D.cRN,D.cSi,D.cSf,D.cRV,D.cSc,D.cSb,D.cRM,D.cS_,D.cS9,D.cSe],A.b4("a7<+(p,p,a4,a4,p)>"))
D.c8D=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajs=new C.LF(0,"youtube")
D.ajt=new C.LF(1,"tiktok")
D.Rr=new C.LF(2,"instagram")
D.aju=new C.LF(3,"facebook")
D.cGI=new C.LF(4,"other")
D.cX9=new A.hq(4,10,8,0.52,null)
D.dcs=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d_D=new A.aW(D.dcs,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.r,null)
D.d30=new A.N(!0,B.c,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dcf=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dkO=new A.A("Open in YouTube",null,B.jF,null,null,null,null,null,null,null,null,null)
D.doX=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dpN=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dpW=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dxO=new C.aTo(null)})();(function staticFields(){$.e0L=20
$.aD6=null
$.bwD=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ePh","I6",()=>A.aea(0))
w($,"ePi","Re",()=>A.aea(null))})()};
(a=>{a["AX8IetSgykcVnqeFm+/gRaRcVFU="]=a.current})($__dart_deferred_initializers__);