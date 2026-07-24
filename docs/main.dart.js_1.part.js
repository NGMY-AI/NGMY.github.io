((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eH_(d,e){A.a0(d,!1).cp(A.eA(new C.dGz(e),!0,null,x.H))},
a0V(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a0V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.R_()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bd(n,B.aR,B.aH),t)
w=3
return A.b(A.d_(B.J,new C.dGy(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a0V)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.elh(r)
if(q==null){d.G(x.q).f.P(D.cZ8)
w=1
break}w=4
return A.b(A.bK(B.hP,null,x.H),$async$a0V)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dXq=n
p=C.elb(n)
n=$.I3()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dKI(q)
d.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0V,v)},
dXt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oV(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LB(d){return C.elk(d)},
elk(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LB=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$LB)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cK(r)?10:11
break
case 10:k=J.ez(r,x.f)
k=A.dd(k,new C.bvK(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.bvL(),j),j.j("I.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dXv(q)
w=12
return A.b(C.LA(a3,p),$async$LB)
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
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dXt(A.S(n,x.N,x.z))
l=C.dXv(A.a([m],x.e))
w=21
return A.b(C.LA(a3,l),$async$LB)
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
case 18:case 14:q=C.eli()
w=22
return A.b(C.LA(a3,q),$async$LB)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LB,v)},
dXv(d){var w=A.X(d).j("F<1,p>"),v=new A.F(d,new C.bvC(),w).es(0),u=new A.F(d,new C.bvD(),w).es(0),t=new A.F(d,new C.bvE(),w).es(0),s=new A.F(d,new C.bvF(),w).es(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dKJ(null,q,u,t,v,s));++q}return r},
aCq(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LB(d),$async$aCq)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d5(t,new C.bvG(),s).es(0)
p=r.d5(t,new C.bvH(),s).es(0)
o=r.d5(t,new C.bvI(),s).es(0)
n=r.d5(t,new C.bvJ(),s).es(0)
m=C.dKJ(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LA(d,t),$async$aCq)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCq,v)},
LA(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$LA)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bvB(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LA)
case 3:return A.h(null,v)}})
return A.i($async$LA,v)},
eli(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cQ(20,x.k)
for(w=0;w<20;++w)q[w]=C.dKJ(w,w,t,s,u,r)
return q},
dKJ(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lm(),h=d==null,g=D.abd[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abd[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.bvA(),A.X(p).j("F<1,p>")).fR(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.f.fR(p)
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
k=D.c78[w]
j=D.bYm[w]
return new C.oV("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.elj(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a6().a3())},
elj(d,e){var w,v=J.cQ(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bH(256),16),2,"0")
return B.f.fR(v)},
dGz:function dGz(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGu:function dGu(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGw:function dGw(d){this.a=d},
dGx:function dGx(d,e){this.a=d
this.b=e},
P7:function P7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oV:function oV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bvK:function bvK(){},
bvL:function bvL(){},
bvC:function bvC(){},
bvD:function bvD(){},
bvE:function bvE(){},
bvF:function bvF(){},
bvG:function bvG(){},
bvH:function bvH(){},
bvI:function bvI(){},
bvJ:function bvJ(){},
bvB:function bvB(){},
bvA:function bvA(){},
Lz:function Lz(d,e){this.c=d
this.a=e},
ajH:function ajH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d1t:function d1t(){},
d1s:function d1s(d,e){this.a=d
this.b=e},
d1q:function d1q(d){this.a=d},
d1r:function d1r(d,e){this.a=d
this.b=e},
d1u:function d1u(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1A:function d1A(d,e){this.a=d
this.b=e},
d1x:function d1x(d,e,f){this.a=d
this.b=e
this.c=f},
d1w:function d1w(d,e){this.a=d
this.b=e},
d1v:function d1v(d,e){this.a=d
this.b=e},
d1B:function d1B(d){this.a=d},
YS:function YS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aPW:function aPW(d,e){this.c=d
this.a=e},
Ly:function Ly(d,e){this.c=d
this.a=e},
aRa:function aRa(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d1n:function d1n(d){this.a=d},
d1o:function d1o(d){this.a=d},
d1p:function d1p(d){this.a=d},
d1m:function d1m(d,e){this.a=d
this.b=e},
d1j:function d1j(d){this.a=d},
d1k:function d1k(d){this.a=d},
d1i:function d1i(d,e){this.a=d
this.b=e},
d1l:function d1l(d){this.a=d},
d1h:function d1h(d){this.a=d},
aYn:function aYn(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aYo:function aYo(d,e,f){this.c=d
this.d=e
this.a=f},
aRg:function aRg(d,e){this.c=d
this.a=e},
aYm:function aYm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dif:function dif(d){this.a=d},
dig:function dig(d){this.a=d},
aSB:function aSB(d){this.a=d},
aLX:function aLX(d,e){this.c=d
this.a=e},
elh(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.elg(v)
if(u!=null)return new C.rg(w,C.dKH(u,!1),D.aj0,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.elf(v)
if(t!=null)return new C.rg(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aj1,"TikTok",q)
s=C.ele(w,v)
if(s!=null)return s
r=C.eld(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rg(w,w,D.cFf,"Video",q)
return q},
ele(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rg(d,"https://www.instagram.com/reel/"+w+u,D.QW,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rg(d,"https://www.instagram.com/p/"+w+u,D.QW,t,null)}return null},
eld(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rg(d,"https://www.facebook.com/plugins/video.php?href="+A.fT(2,d,B.bx,!1)+"&show_text=false&width=734",D.aj2,"Facebook",null)},
elg(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
elf(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LC:function LC(d,e){this.a=d
this.b=e},
rg:function rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9h:function a9h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRb:function aRb(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aSG:function aSG(d,e){this.c=d
this.a=e},
d5O:function d5O(d){this.a=d},
d5P:function d5P(d){this.a=d},
GO:function GO(d,e){this.c=d
this.a=e},
apf:function apf(){},
dXu(d,e,f,g,h,i){return new C.a9i(i,f,h,e,g,d)},
eFv(d){var w=window
w.toString
A.h7(w,"message",new C.dBZ(d),!1,x._)},
a9i:function a9i(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajI:function ajI(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d1C:function d1C(d){this.a=d},
d1L:function d1L(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1H:function d1H(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1D:function d1D(d){this.a=d},
dBZ:function dBZ(d){this.a=d},
el9(){var w,v,u
try{v=A.rB()
w=v.gve(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dKH(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bvy(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dXp(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
ela(d,e,f){var w,v,u=C.bvy(d)
if(u!=null){if(f){w=C.el9()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dXp(C.dKH(u,e))}return C.dXp(d)},
elb(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
elc(d){var w
if($.R_().a==null)return!1
w=$.I3().a
return d>=w&&d<w+4},
dXs(){var w=$.aCp
if(w!=null)w.aa(0)
$.aCp=null
$.I3().sv(0,0)},
dXr(){var w,v,u,t=$.R_()
if(t.a==null)return
w=$.aCp
if(w!=null)w.aa(0)
v=$.dXq
if(v<=4){t=t.a
t.toString
C.dKI(t)
return}w=$.I3()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dKI(t)},
dKI(d){var w=$.aCp
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
default:w=null}$.aCp=A.ds(A.d6(0,0,0,0,0,w),C.eFL())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.P7.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a7.k(0.25),B.r,1),r=A.W(this.d,B.a7,w,w,14)
return A.q(w,A.H(A.a([r,B.fH,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cs,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hj,w,w,w)}}
C.oV.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Lz.prototype={
V(){return new C.ajH(A.a([],x.e))},
gej(){return this.c}}
C.ajH.prototype={
a0(){var w=this
w.a4()
$.I3().aA(0,w.gaBI())
C.eFv(w.gbv8())
w.a0F()},
buA(){if(this.c!=null)this.n(new C.d1t())},
bv9(){C.dXr()},
p(){$.I3().Z(0,this.gaBI())
C.dXs()
$.R_().sv(0,null)
this.a5()},
a0F(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LB(t.a.c),$async$a0F)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1s(t,s))
$.bvz=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0F,v)},
Xd(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d1q(t))
w=3
return A.b(C.aCq(t.a.c),$async$Xd)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1r(t,s))
$.bvz=J.a4(t.d)
t.c.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xd,v)},
bxc(d){var w=this.c
w.toString
A.a0(w,!1).cp(A.eA(new C.d1u(d),!1,null,x.H))},
bxT(){var w=this.c
w.toString
return C.a0V(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.i8:B.bD,s=A.bB(!0,A.v(A.a([new A.D(D.a_y,new A.jo(new C.d1z(w),v),v),A.G(w.e?B.mT:new A.lJ($.R_(),new C.d1A(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.avY(B.a7,B.Jg,B.kx,D.doj,w.e?v:new C.d1B(w)),v)}}
C.YS.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a7.k(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9h(n,!0,!C.elc(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.W(B.kv,B.or,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b0,B.k,0,B.p),B.j,B.AN,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.Q,!0,u,A.aH(!1,t,!0,A.v(A.a([A.G(A.q(u,A.bQ(p,A.f_(A.v(A.a([new C.aPW(o,u),A.G(n,1),A.q(u,A.H(A.a([A.W(B.xI,B.a7.k(0.85),u,u,9),B.apy,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b0,B.k,0,u,u),B.j,B.aA,u,u,u,u,u,u,D.aLc,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aD),B.j,u,u,new A.o(u,u,r,s,q,D.a4g,B.o),u,u,u,u,B.fl,u,u,u),1),B.aJ,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a7.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aPW.prototype={
B(d){var w=null
return A.q(w,A.H(A.a([A.G(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.uk,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aA,w,w,w,w,w,w,B.a_n,w,w,w)}}
C.Ly.prototype={
V(){return new C.aRa()}}
C.aRa.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.i8:B.bD,t=A.aP(w,w,w,w,B.a3f,w,w,w,new C.d1n(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bB(!0,A.v(A.a([new A.D(D.a_y,A.H(A.a([t,A.G(new A.Ln(A.H(A.a([A.G(new A.D(B.jW,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.D(B.br,A.W(B.hC,B.a7,w,w,28),w),B.cl,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d1o(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.G(new A.lJ($.R_(),new C.d1p(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYn.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a7.k(0.35),B.eB,28),new A.a5(0,B.G,B.A.k(0.45),B.d6,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dXu(new A.d4(v+"_full_"+u,x.W),!1,u,!1,w.gaS9(),v+"_full")
w=v}else w=new C.aRg(t.r,s)}else w=new C.aLX(m,s)
else w=D.dwm
return A.q(s,A.bQ(n,A.f_(A.v(A.a([new C.aYo(m,l,s),A.G(w,1),new C.aYm(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aD),B.j,s,s,new A.o(s,s,o,q,p,D.a4g,B.o),s,r*2.05,s,s,B.bH,s,s,r)}}
C.aYo.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=A.cX(r)
r=A.fQ(r)
w=new A.dR(q,r)
v=w.gL8()===0?12:w.gL8()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hx:B.jP)===B.hx?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nY,s,s,s),B.b8,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bS,D.aX3,B.dk,D.aWb,B.dk,D.aX8],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.H(A.a([A.W(B.xG,B.a7.k(0.9),s,s,12),B.dk,A.G(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aA,s,s,s,s,s,s,D.aMj,s,s,s)}}
C.aRg.prototype={
B(d){var w=null
return A.q(w,A.aC(A.v(A.a([A.W(B.CL,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eF(D.b_T,D.daM,this.c,A.dA(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aE(B.a7.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.AN,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYm.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBu(B.Db,"YouTube",s===0,r,new C.dif(u))
s=u.aBu(B.k3,"Device",s===1,r,new C.dig(u))
w=r?"Power off":"Power on"
v=r?D.a2f:D.aU7
return A.q(t,A.H(A.a([q,B.ai,s,B.b8,A.aP(t,t,t,t,A.W(v,r?B.bR:B.fo,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dc)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aA,t,t,t,t,t,t,D.aLO,t,t,t)},
aBu(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b3
else w=f?B.a7:B.at
v=f&&g?B.a7.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.G(A.az(!1,B.Q,!0,u,A.aH(!1,A.m(10),!0,new A.D(B.m7,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aSB.prototype={
B(d){return D.azC}}
C.aLX.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iV,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ua("Serial",u.c),q=w.ua("Model",u.d),p=w.ua("Device ID",u.e),o=w.ua("IMEI",u.r),n=w.ua("MAC",u.f),m=w.ua("OS",u.w+" "+u.x),l=w.ua("Location",u.y+", "+u.z),k=w.ua("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ua("Timezone",u.at)
u=u.ax
return A.e4(A.a([t,B.aJ,s,B.ae,r,q,p,o,n,m,l,k,j,w.ua("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.br,v,v,B.al,!1)},
ua(d,e){var w=null
return new A.D(B.de,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cn,A.d(e,w,w,w,w,w,w,D.d1v,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LC.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rg.prototype={
gaS9(){var w=this.c
return w===D.aj0||w===D.aj1||w===D.QW||w===D.aj2}}
C.a9h.prototype={
V(){return new C.aRb(null,null)}}
C.aRb.prototype={
a0(){this.a4()
var w=A.bf(null,B.tu,null,1,null,this)
w.fU(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b1D()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a8(B.bV,B.bT,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bo),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cD(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.W(B.kv,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.or
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aSG(s,t),r,q,A.au(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.av(B.a5,t,B.ba,B.t,s,t)}}
C.aSG.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kD(u,B.I,new C.d5O(this),B.cb,B.bW,!0,w,w,new C.d5P(this),w)
return new C.GO(v,w)}}
C.GO.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aK(A.a([B.tj,B.Wf],x.O),B.kv)
break
case 1:w=new A.aK(A.a([B.AN,D.aFz],x.O),B.mg)
break
case 2:w=new A.aK(A.a([D.aHm,D.aET],x.O),B.CS)
break
case 3:w=new A.aK(A.a([B.U,B.dR],x.O),B.D0)
break
case 4:w=new A.aK(A.a([B.aA,B.aO],x.O),B.qD)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.W(w.b,B.a7.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a8(B.aw,B.aC,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apf.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcO())
w.aD$=null
w.a5()},
be(){this.br()
this.bp()
this.cP()}}
C.a9i.prototype={
V(){return new C.ajI()}}
C.ajI.prototype={
aaP(d,e){var w,v=C.bvy(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dKH(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.ela(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bOP(){var w,v=this
if(v.w)return
v.n(new C.d1C(v))
w=v.e
if(w!=null)v.aaP(w,v.a.d)},
a0(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.D6()
$.pz().tx(w,new C.d1L(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d1E(v))
w=v.e
w.toString
v.aaP(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a2y,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.P,n,n)],v))
return A.f_(A.aC(new A.D(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SK(n,B.r6,w)],v)
if(o.f)w.push(A.f_(A.aC(new A.aa(28,28,D.aB1,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b3,B.r,1)
q=A.W(B.Do,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dP(0,A.az(!1,B.Q,!0,n,A.aH(!1,n,!0,A.aC(A.q(n,A.H(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.Ly,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbOO(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bvy(o.a.d)
if(v!=null)w.push(A.au(8,A.jr(D.aYG,D.djf,new C.d1D(o),A.ik(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hj,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.av(B.a5,n,B.ba,B.t,w,n)}}
var z=a.updateTypes(["p(oV)","~()","Lz(N)","oV(a_<@,@>)","Z(oV)","a_<p,@>(oV)","aD<~>()","Ly(N)","lJ<L>(N,rg?,r?)","YS(N,L)","vb(N,rg?,r?)","GO(N,ar,dQ?)"])
C.dGz.prototype={
$1(d){return new C.Lz(this.a,null)},
$S:z+2}
C.dGy.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.ez,B.U],j):A.a([B.c,B.az],j),h=A.a([new A.a5(0,B.G,B.a7.k(0.22),B.eB,32)],x.V),g=A.J(m?B.ci:B.a7.k(0.18),B.r,1),f=A.m(28),e=B.a7.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.q(n,D.aVS,B.j,n,n,new A.o(B.a7.k(0.18),n,A.J(B.a7.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.G(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.H(A.a([e,B.el,w,A.aP(n,n,n,n,A.W(B.cN,m?B.at:B.cW,n,n,n),n,n,n,new C.dGu(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a8(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LG,n,n,n)
e=A.eq(B.cS,A.a([new C.P7("YouTube",B.NG,m,n),new C.P7("TikTok",B.mg,m,n),new C.P7("Instagram",B.CS,m,n),new C.P7("Facebook",B.D0,m,n)],v),B.cE,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cc:B.hN,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.W(B.fN,B.a7.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ci:B.aM
u=A.v(A.a([e,B.aS,A.aN(n,B.S,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.V),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.UX),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.an,n,B.i,B.k,0,B.p)
e=A.jr(D.aVW,D.dnm,new C.dGv(d),A.ik(n,n,n,n,n,n,n,n,n,n,n,m?B.bB:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.D(new A.Q(12,0,12,12+l.f.d),A.cv(A.bQ(f,A.v(A.a([j,new A.D(B.a_4,u,n),new A.D(D.aNH,A.H(A.a([e,B.b8,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dGw(d),n,n),B.ai,A.dD(D.b_z,D.doa,new C.dGx(d,w),A.bn(B.a7,n,n,n,B.c,n,B.Ly,n,new A.bp(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.an,n,B.i,B.Z,0,B.p),B.aD),new A.o(n,n,g,k,h,new A.a8(B.aw,B.aC,B.E,i,n,n),B.o),B.bo),n)},
$S:70}
C.dGu.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dGv.prototype={
$0(){C.dXs()
$.R_().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dGw.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dGx.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bvK.prototype={
$1(d){return C.dXt(A.S(d,x.N,x.z))},
$S:z+3}
C.bvL.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bvC.prototype={
$1(d){return d.c},
$S:z+0}
C.bvD.prototype={
$1(d){return d.r},
$S:z+0}
C.bvE.prototype={
$1(d){return d.f},
$S:z+0}
C.bvF.prototype={
$1(d){return d.at},
$S:z+0}
C.bvG.prototype={
$1(d){return d.c},
$S:z+0}
C.bvH.prototype={
$1(d){return d.r},
$S:z+0}
C.bvI.prototype={
$1(d){return d.f},
$S:z+0}
C.bvJ.prototype={
$1(d){return d.at},
$S:z+0}
C.bvB.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bvA.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:87}
C.d1t.prototype={
$0(){},
$S:0}
C.d1s.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d1q.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d1r.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d1u.prototype={
$1(d){return new C.Ly(this.a,null)},
$S:z+7}
C.d1z.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qG,w,w,w,new C.d1y(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.G(A.h2(A.H(A.a([new A.oT(D.yb,e,g,36,B.xG,w),B.aP,A.G(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fR(B.f.gI(D.yb).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.D(B.bH,A.W(B.hC,A.ao(B.f.gI(D.yb),B.f.ga7(D.yb),e),w,w,28),w),B.cl,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbxS(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yb,w,g,B.f1,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:350}
C.d1y.prototype={
$0(){return A.a0(this.a,!1).e5()},
$S:0}
C.d1A.prototype={
$3(d,e,f){return new A.lJ($.I3(),new C.d1x(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d1x.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EC(d,k,x.Q)
w=w==null?k:w.glO()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.k(0.12)
s=A.m(12)
r=A.J(B.a7.k(0.35),B.r,1)
q=A.W(B.kv,B.a7,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.I3().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.H(A.a([q,B.ai,A.G(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dy,B.f8,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.hN(1.7777777777777777,C.dXu(new A.d4("fleet_master_"+r,x.W),!0,r,!0,j.gaS9(),"fleet_master"),k),B.aD),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.x_(0,B.t,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.l8(new A.D(B.Lu,A.v(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.p4(D.aLn,A.aGt(new A.oe(new C.d1w(i,j),J.a4(i.d),!1,!0,!0,A.uC(),k),D.cVF),k)],w))},
$S:1844}
C.d1w.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.YS(v,e,J.a4(w.d),new C.d1v(w,v),this.b,null)},
$S:z+9}
C.d1v.prototype={
$0(){return this.a.bxc(this.b)},
$S:0}
C.d1B.prototype={
$0(){this.a.Xd()
return null},
$S:0}
C.d1n.prototype={
$0(){return A.a0(this.a,!1).e5()},
$S:0}
C.d1o.prototype={
$0(){C.a0V(this.a,$.bvz)
return null},
$S:0}
C.d1p.prototype={
$3(d,e,f){return A.eJ(new C.d1m(this.a,e))},
$S:z+10}
C.d1m.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.P,v,v),B.aS,new C.aYn(u,s.a.c,s.e,s.d,new C.d1j(s),new C.d1k(s),new C.d1l(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oB,v,v,B.al),v,v,v)},
$S:1845}
C.d1j.prototype={
$0(){var w=this.a.c
w.toString
C.a0V(w,$.bvz)
return null},
$S:0}
C.d1k.prototype={
$1(d){var w=this.a
return w.n(new C.d1i(w,d))},
$S:32}
C.d1i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d1l.prototype={
$0(){var w=this.a
return w.n(new C.d1h(w))},
$S:0}
C.d1h.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dif.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dig.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d5O.prototype={
$3(d,e,f){return new C.GO(this.a.c,null)},
$S:z+11}
C.d5P.prototype={
$3(d,e,f){if(f==null)return e
return new A.av(B.a5,null,B.ba,B.t,A.a([new C.GO(this.a.c,null),D.azY],x.p),null)},
$C:"$3",
$R:3,
$S:519}
C.d1C.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d1L.prototype={
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
w.aaP(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h7(v,"load",new C.d1I(w),!1,u)
v=w.e
v.toString
A.h7(v,"error",new C.d1J(w),!1,u)
A.bK(B.jT,new C.d1K(w),x.H)
w=w.e
w.toString
return w},
$S:400}
C.d1I.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d1H(w))},
$S:30}
C.d1H.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d1J.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d1G(w))},
$S:30}
C.d1G.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d1K.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d1F(w))},
$S:12}
C.d1F.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d1E.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1D.prototype={
$0(){var w,v=C.bvy(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mL.Lt(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dBZ.prototype={
$1(d){var w,v,u,t,s=new A.w1([],[]).x4(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1846};(function aliases(){var w=C.apf.prototype
w.b1D=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajH.prototype,"gaBI","buA",1)
w(u,"gbv8","bv9",1)
w(u,"gbxS","bxT",6)
w(C.ajI.prototype,"gbOO","bOP",1)
v(C,"eFL","dXr",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zJ,[C.dGz,C.dGy,C.bvK,C.bvL,C.bvC,C.bvD,C.bvE,C.bvF,C.bvG,C.bvH,C.bvI,C.bvJ,C.bvB,C.bvA,C.d1u,C.d1z,C.d1A,C.d1x,C.d1p,C.d1k,C.d5O,C.d5P,C.d1L,C.d1I,C.d1J,C.dBZ])
v(A.a2i,[C.dGu,C.dGv,C.dGw,C.dGx,C.d1t,C.d1s,C.d1q,C.d1r,C.d1y,C.d1v,C.d1B,C.d1n,C.d1o,C.d1j,C.d1i,C.d1l,C.d1h,C.dif,C.dig,C.d1C,C.d1H,C.d1G,C.d1K,C.d1F,C.d1E,C.d1D])
v(A.ap,[C.P7,C.YS,C.aPW,C.aYn,C.aYo,C.aRg,C.aYm,C.aSB,C.aLX,C.aSG,C.GO])
v(A.ar,[C.oV,C.rg])
v(A.ad,[C.Lz,C.Ly,C.a9h,C.a9i])
v(A.ae,[C.ajH,C.aRa,C.apf,C.ajI])
v(A.a2j,[C.d1w,C.d1m])
u(C.LC,A.aMS)
u(C.aRb,C.apf)
w(C.apf,A.dB)})()
A.e_T(b.typeUniverse,JSON.parse('{"Lz":{"ad":[],"r":[]},"YS":{"ap":[],"r":[]},"Ly":{"ad":[],"r":[]},"P7":{"ap":[],"r":[]},"ajH":{"ae":["Lz"]},"aPW":{"ap":[],"r":[]},"aRa":{"ae":["Ly"]},"aYn":{"ap":[],"r":[]},"aYo":{"ap":[],"r":[]},"aRg":{"ap":[],"r":[]},"aYm":{"ap":[],"r":[]},"aSB":{"ap":[],"r":[]},"aLX":{"ap":[],"r":[]},"a9h":{"ad":[],"r":[]},"GO":{"ap":[],"r":[]},"aRb":{"ae":["a9h"]},"aSG":{"ap":[],"r":[]},"a9i":{"ad":[],"r":[]},"ajI":{"ae":["a9i"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<oV>"),S:w("a9<fR>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("af<oV>"),a:w("af<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oP"),_:w("Ez"),k:w("oV"),N:w("p"),Y:w("bi<a3>"),W:w("d4<p>"),J:w("lJ<L>"),j:w("lJ<rg?>"),E:w("ub<d1>"),q:w("ZN"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2f=new A.P(983224,"MaterialIcons",!1)
D.aYN=new A.ab(D.a2f,48,B.b3,null,null,null)
D.d9F=new A.z("Powered off",null,B.aqA,null,null,null,null,null,null,null,null,null)
D.bVo=w([D.aYN,B.N,D.d9F],x.p)
D.aIL=new A.eV(B.al,B.i,B.Z,B.n,null,B.p,null,0,D.bVo,null)
D.azC=new A.cT(B.I,null,null,D.aIL,null)
D.cVk=new A.aa(18,18,B.VX,null)
D.azY=new A.cT(B.I,null,null,D.cVk,null)
D.aB1=new A.fo(2,null,null,null,null,B.aa,null,null,null,null)
D.aET=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aFz=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aHm=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aLc=new A.Q(0,3,0,3)
D.aLn=new A.Q(10,0,10,88)
D.aLO=new A.Q(12,6,12,10)
D.aMj=new A.Q(14,8,14,6)
D.aNH=new A.Q(20,8,20,20)
D.a_y=new A.Q(8,6,15,8)
D.aU7=new A.P(983222,"MaterialIcons",!1)
D.aVS=new A.ab(B.kv,26,B.a7,null,null,null)
D.aVW=new A.ab(B.a1i,18,null,null,null,null)
D.aWb=new A.ab(B.uk,14,B.aa,null,null,null)
D.aUq=new A.P(983420,"MaterialIcons",!1)
D.aX3=new A.ab(D.aUq,14,B.aa,null,null,null)
D.aSv=new A.P(62895,"MaterialIcons",!1)
D.aX8=new A.ab(D.aSv,14,B.aa,null,null,null)
D.aYG=new A.ab(B.uc,16,B.aa,null,null,null)
D.b_z=new A.ab(B.ik,20,null,null,null,null)
D.b_T=new A.ab(B.hC,16,null,null,null,null)
D.bZb=w([B.aO,B.U],x.O)
D.a4g=new A.a8(B.aw,B.aC,B.E,D.bZb,null,null)
D.cOw=new A.aK("NGMY OS","14.2.1")
D.cN6=new A.aK("VirtualDroid","13.8.4")
D.cN5=new A.aK("NGMY OS","15.0.0")
D.cO_=new A.aK("VirtualDroid","14.1.2")
D.cN1=new A.aK("NGMY Tab OS","12.9.7")
D.cN_=new A.aK("NGMY OS","13.5.3")
D.cMP=new A.aK("VirtualDroid","15.2.0")
D.cNw=new A.aK("NGMY OS","14.8.1")
D.cO4=new A.aK("NGMY Tab OS","13.2.4")
D.cOJ=new A.aK("VirtualDroid","12.6.9")
D.cMJ=new A.aK("NGMY OS","16.0.1")
D.cMz=new A.aK("VirtualDroid","14.9.0")
D.cOm=new A.aK("NGMY Tab OS","14.0.3")
D.cNh=new A.aK("NGMY OS","13.1.8")
D.cMH=new A.aK("VirtualDroid","13.4.5")
D.cMZ=new A.aK("NGMY OS","15.3.2")
D.cO5=new A.aK("NGMY Tab OS","12.4.1")
D.cOp=new A.aK("VirtualDroid","16.1.0")
D.cNv=new A.aK("NGMY OS","14.4.6")
D.cOx=new A.aK("VirtualDroid","15.0.8")
D.bYm=w([D.cOw,D.cN6,D.cN5,D.cO_,D.cN1,D.cN_,D.cMP,D.cNw,D.cO4,D.cOJ,D.cMJ,D.cMz,D.cOm,D.cNh,D.cMH,D.cMZ,D.cO5,D.cOp,D.cNv,D.cOx],A.b4("a9<+(p,p)>"))
D.yb=w([B.a7,B.fE],x.O)
D.cQU=new A.f2(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cQs=new A.f2(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cQn=new A.f2(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cQw=new A.f2(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cQj=new A.f2(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cQy=new A.f2(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cQW=new A.f2(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cQk=new A.f2(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cQr=new A.f2(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cQA=new A.f2(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cQi=new A.f2(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cQO=new A.f2(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cQL=new A.f2(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cQq=new A.f2(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cQI=new A.f2(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cQH=new A.f2(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cQh=new A.f2(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cQv=new A.f2(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cQF=new A.f2(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cQK=new A.f2(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abd=w([D.cQU,D.cQs,D.cQn,D.cQw,D.cQj,D.cQy,D.cQW,D.cQk,D.cQr,D.cQA,D.cQi,D.cQO,D.cQL,D.cQq,D.cQI,D.cQH,D.cQh,D.cQv,D.cQF,D.cQK],A.b4("a9<+(p,p,a3,a3,p)>"))
D.c78=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aj0=new C.LC(0,"youtube")
D.aj1=new C.LC(1,"tiktok")
D.QW=new C.LC(2,"instagram")
D.aj2=new C.LC(3,"facebook")
D.cFf=new C.LC(4,"other")
D.cVF=new A.hr(4,10,8,0.52,null)
D.daZ=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cZ8=new A.aV(D.daZ,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.t,null)
D.d1v=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.daM=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.djf=new A.z("Open in YouTube",null,B.jz,null,null,null,null,null,null,null,null,null)
D.dnm=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.doa=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.doj=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dwm=new C.aSB(null)})();(function staticFields(){$.dXq=20
$.aCp=null
$.bvz=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eKL","I3",()=>A.adK(0))
w($,"eKM","R_",()=>A.adK(null))})()};
(a=>{a["xThjyBqtDNBA5AMHshAfk9BrqAY="]=a.current})($__dart_deferred_initializers__);