((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eHN(d,e){A.a0(d,!1).cp(A.eA(new C.dHc(e),!0,null,x.H))},
a1_(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.R5()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bc(n,B.aR,B.aH),t)
w=3
return A.b(A.d2(B.J,new C.dHb(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1_)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.elY(r)
if(q==null){d.G(x.q).f.P(D.cZQ)
w=1
break}w=4
return A.b(A.bI(B.hT,null,x.H),$async$a1_)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dY4=n
p=C.elS(n)
n=$.I7()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dLk(q)
d.G(x.q).f.P(A.bf(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
dY7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
LE(d){return C.em0(d)},
em0(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LE=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$LE)
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
k=A.dd(k,new C.bw_(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bw0(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dY9(q)
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
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dY7(A.S(n,x.N,x.z))
l=C.dY9(A.a([m],x.e))
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
case 18:case 14:q=C.elZ()
w=22
return A.b(C.LD(a3,q),$async$LE)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LE,v)},
dY9(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bvS(),w).es(0),u=new A.H(d,new C.bvT(),w).es(0),t=new A.H(d,new C.bvU(),w).es(0),s=new A.H(d,new C.bvV(),w).es(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dLl(null,q,u,t,v,s));++q}return r},
aCz(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LE(d),$async$aCz)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d5(t,new C.bvW(),s).es(0)
p=r.d5(t,new C.bvX(),s).es(0)
o=r.d5(t,new C.bvY(),s).es(0)
n=r.d5(t,new C.bvZ(),s).es(0)
m=C.dLl(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LD(d,t),$async$aCz)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCz,v)},
LD(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LD)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bvR(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LD)
case 3:return A.h(null,v)}})
return A.i($async$LD,v)},
elZ(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dLl(w,w,t,s,u,r)
return q},
dLl(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.ln(),h=d==null,g=D.abm[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abm[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.H(p,new C.bvQ(),A.X(p).j("H<1,p>")).fS(0)
u="VND-"+B.b.al(n,0,4)+"-"+B.b.al(n,4,8)
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
k=D.c7Q[w]
j=D.bZ0[w]
return new C.oX("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.em_(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a6().a3())},
em_(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bH(256),16),2,"0")
return B.f.fS(v)},
dHc:function dHc(d){this.a=d},
dHb:function dHb(d,e){this.a=d
this.b=e},
dH7:function dH7(d){this.a=d},
dH8:function dH8(d){this.a=d},
dH9:function dH9(d){this.a=d},
dHa:function dHa(d,e){this.a=d
this.b=e},
Pb:function Pb(d,e,f,g){var _=this
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
bw_:function bw_(){},
bw0:function bw0(){},
bvS:function bvS(){},
bvT:function bvT(){},
bvU:function bvU(){},
bvV:function bvV(){},
bvW:function bvW(){},
bvX:function bvX(){},
bvY:function bvY(){},
bvZ:function bvZ(){},
bvR:function bvR(){},
bvQ:function bvQ(){},
LC:function LC(d,e){this.c=d
this.a=e},
ajM:function ajM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d1Q:function d1Q(){},
d1P:function d1P(d,e){this.a=d
this.b=e},
d1N:function d1N(d){this.a=d},
d1O:function d1O(d,e){this.a=d
this.b=e},
d1R:function d1R(d){this.a=d},
d1W:function d1W(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1X:function d1X(d,e){this.a=d
this.b=e},
d1U:function d1U(d,e,f){this.a=d
this.b=e
this.c=f},
d1T:function d1T(d,e){this.a=d
this.b=e},
d1S:function d1S(d,e){this.a=d
this.b=e},
d1Y:function d1Y(d){this.a=d},
YX:function YX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQ5:function aQ5(d,e){this.c=d
this.a=e},
LB:function LB(d,e){this.c=d
this.a=e},
aRk:function aRk(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d1K:function d1K(d){this.a=d},
d1L:function d1L(d){this.a=d},
d1M:function d1M(d){this.a=d},
d1J:function d1J(d,e){this.a=d
this.b=e},
d1G:function d1G(d){this.a=d},
d1H:function d1H(d){this.a=d},
d1F:function d1F(d,e){this.a=d
this.b=e},
d1I:function d1I(d){this.a=d},
d1E:function d1E(d){this.a=d},
aYy:function aYy(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aYz:function aYz(d,e,f){this.c=d
this.d=e
this.a=f},
aRq:function aRq(d,e){this.c=d
this.a=e},
aYx:function aYx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
diH:function diH(d){this.a=d},
diI:function diI(d){this.a=d},
aSL:function aSL(d){this.a=d},
aM6:function aM6(d,e){this.c=d
this.a=e},
elY(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.elX(v)
if(u!=null)return new C.rh(w,C.dLj(u,!1),D.aj9,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.elW(v)
if(t!=null)return new C.rh(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aja,"TikTok",q)
s=C.elV(w,v)
if(s!=null)return s
r=C.elU(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rh(w,w,D.cFX,"Video",q)
return q},
elV(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rh(d,"https://www.instagram.com/reel/"+w+u,D.R5,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rh(d,"https://www.instagram.com/p/"+w+u,D.R5,t,null)}return null},
elU(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rh(d,"https://www.facebook.com/plugins/video.php?href="+A.fS(2,d,B.by,!1)+"&show_text=false&width=734",D.ajb,"Facebook",null)},
elX(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
elW(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LF:function LF(d,e){this.a=d
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
aRl:function aRl(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aSQ:function aSQ(d,e){this.c=d
this.a=e},
d6a:function d6a(d){this.a=d},
d6b:function d6b(d){this.a=d},
GR:function GR(d,e){this.c=d
this.a=e},
apk:function apk(){},
dY8(d,e,f,g,h,i){return new C.a9n(i,f,h,e,g,d)},
eGi(d){var w=window
w.toString
A.h6(w,"message",new C.dCw(d),!1,x._)},
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
d1Z:function d1Z(d){this.a=d},
d27:function d27(d){this.a=d},
d24:function d24(d){this.a=d},
d23:function d23(d){this.a=d},
d25:function d25(d){this.a=d},
d22:function d22(d){this.a=d},
d26:function d26(d){this.a=d},
d21:function d21(d){this.a=d},
d20:function d20(d){this.a=d},
d2_:function d2_(d){this.a=d},
dCw:function dCw(d){this.a=d},
elQ(){var w,v,u
try{v=A.rC()
w=v.gvf(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dLj(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bvO(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dY3(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
elR(d,e,f){var w,v,u=C.bvO(d)
if(u!=null){if(f){w=C.elQ()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dY3(C.dLj(u,e))}return C.dY3(d)},
elS(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
elT(d){var w
if($.R5().a==null)return!1
w=$.I7().a
return d>=w&&d<w+4},
dY6(){var w=$.aCy
if(w!=null)w.aa(0)
$.aCy=null
$.I7().sv(0,0)},
dY5(){var w,v,u,t=$.R5()
if(t.a==null)return
w=$.aCy
if(w!=null)w.aa(0)
v=$.dY4
if(v<=4){t=t.a
t.toString
C.dLk(t)
return}w=$.I7()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dLk(t)},
dLk(d){var w=$.aCy
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
default:w=null}$.aCy=A.dt(A.d6(0,0,0,0,0,w),C.eGy())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pb.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a7.k(0.25),B.r,1),r=A.V(this.d,B.a7,w,w,14)
return A.q(w,A.F(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cs,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hk,w,w,w)}}
C.oX.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LC.prototype={
U(){return new C.ajM(A.a([],x.e))},
gej(){return this.c}}
C.ajM.prototype={
a_(){var w=this
w.a4()
$.I7().aA(0,w.gaBO())
C.eGi(w.gbvk())
w.a0L()},
buM(){if(this.c!=null)this.n(new C.d1Q())},
bvl(){C.dY5()},
p(){$.I7().Z(0,this.gaBO())
C.dY6()
$.R5().sv(0,null)
this.a5()},
a0L(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LE(t.a.c),$async$a0L)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1P(t,s))
$.bvP=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a0L,v)},
Xi(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d1N(t))
w=3
return A.b(C.aCz(t.a.c),$async$Xi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1O(t,s))
$.bvP=J.a3(t.d)
t.c.G(x.q).f.P(A.bf(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xi,v)},
bxo(d){var w=this.c
w.toString
A.a0(w,!1).cp(A.eA(new C.d1R(d),!1,null,x.H))},
by4(){var w=this.c
w.toString
return C.a1_(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.ib:B.bD,s=A.bD(!0,A.v(A.a([new A.D(D.a_I,new A.jp(new C.d1W(w),v),v),A.G(w.e?B.mZ:new A.lK($.R5(),new C.d1X(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c4(v,t,s,v,!1,!1,A.aw2(B.a7,B.Jk,B.kE,D.dp9,w.e?v:new C.d1Y(w)),v)}}
C.YX.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.H,B.a7.k(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9m(n,!0,!C.elT(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.V(B.kB,B.ou,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.AT,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.v(A.a([A.G(A.q(u,A.bQ(p,A.f_(A.v(A.a([new C.aQ5(o,u),A.G(n,1),A.q(u,A.F(A.a([A.V(B.xR,B.a7.k(0.85),u,u,9),B.apH,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,u,D.aLz,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4p,B.o),u,u,u,u,B.fa,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a7.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQ5.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.G(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.us,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,w,B.a_w,w,w,w)}}
C.LB.prototype={
U(){return new C.aRk()}}
C.aRk.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.ib:B.bD,t=A.aP(w,w,w,w,B.a3n,w,w,w,new C.d1K(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c4(w,u,A.bD(!0,A.v(A.a([new A.D(D.a_I,A.F(A.a([t,A.G(new A.Lq(A.F(A.a([A.G(new A.D(B.jY,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.V,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.D(B.br,A.V(B.hF,B.a7,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d1L(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.G(new A.lK($.R5(),new C.d1M(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYy.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.H,B.a7.k(0.35),B.eC,28),new A.a5(0,B.H,B.A.k(0.45),B.d8,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dY8(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaSg(),v+"_full")
w=v}else w=new C.aRq(t.r,s)}else w=new C.aM6(m,s)
else w=D.dxc
return A.q(s,A.bQ(n,A.f_(A.v(A.a([new C.aYz(m,l,s),A.G(w,1),new C.aYx(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4p,B.o),s,r*2.05,s,s,B.bI,s,s,r)}}
C.aYz.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glO()
r=r.gFl()
w=new A.dM(q,r)
v=w.gL9()===0?12:w.gL9()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hz:B.jS)===B.hz?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o2,s,s,s),B.b7,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bO,D.aXs,B.de,D.aWA,B.de,D.aXx],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.F(A.a([A.V(B.xP,B.a7.k(0.9),s,s,12),B.de,A.G(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aw,s,s,s,s,s,s,D.aMF,s,s,s)}}
C.aRq.prototype={
B(d){var w=null
return A.q(w,A.aC(A.v(A.a([A.V(B.CR,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.eF(D.b0l,D.dbs,this.c,A.dy(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aE(B.a7.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.AT,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYx.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBA(B.Dg,"YouTube",s===0,r,new C.diH(u))
s=u.aBA(B.jn,"Device",s===1,r,new C.diI(u))
w=r?"Power off":"Power on"
v=r?D.a2o:D.aUx
return A.q(t,A.F(A.a([q,B.ai,s,B.b7,A.aP(t,t,t,t,A.V(v,r?B.bS:B.f5,t,t,t),t,t,t,u.f,t,t,t,t,w,B.d0)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,t,D.aMa,t,t,t)},
aBA(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b4
else w=f?B.a7:B.as
v=f&&g?B.a7.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.G(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.D(B.mc,A.v(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aSL.prototype={
B(d){return D.azS}}
C.aM6.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iA,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.uc("Serial",u.c),q=w.uc("Model",u.d),p=w.uc("Device ID",u.e),o=w.uc("IMEI",u.r),n=w.uc("MAC",u.f),m=w.uc("OS",u.w+" "+u.x),l=w.uc("Location",u.y+", "+u.z),k=w.uc("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.uc("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aJ,s,B.ae,r,q,p,o,n,m,l,k,j,w.uc("Provisioned",u.length>=10?B.b.al(u,0,10):u)],x.p),v,B.br,v,v,B.ak,!1)},
uc(d,e){var w=null
return new A.D(B.dj,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d2d,w,w,w)],x.p),B.G,w,B.i,B.k,0,B.p),w)}}
C.LF.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rh.prototype={
gaSg(){var w=this.c
return w===D.aj9||w===D.aja||w===D.R5||w===D.ajb}}
C.a9m.prototype={
U(){return new C.aRl(null,null)}}
C.aRl.prototype={
a_(){this.a4()
var w=A.bg(null,B.tz,null,1,null,this)
w.fV(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b1L()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bV,B.bT,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cD(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kB,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.ou
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aSQ(s,t),r,q,A.au(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.av(B.a5,t,B.b9,B.t,s,t)}}
C.aSQ.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kD(u,B.I,new C.d6a(this),B.cb,B.bW,!0,w,w,new C.d6b(this),w)
return new C.GR(v,w)}}
C.GR.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.to,B.Wr],x.O),B.kB)
break
case 1:w=new A.aI(A.a([B.AT,D.aFQ],x.O),B.mm)
break
case 2:w=new A.aI(A.a([D.aHE,D.aF9],x.O),B.CY)
break
case 3:w=new A.aI(A.a([B.V,B.dR],x.O),B.D5)
break
case 4:w=new A.aI(A.a([B.aw,B.aP],x.O),B.qI)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a7.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
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
aaV(d,e){var w,v=C.bvO(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dLj(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.elR(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bP0(){var w,v=this
if(v.w)return
v.n(new C.d1Z(v))
w=v.e
if(w!=null)v.aaV(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.D7()
$.pz().ty(w,new C.d27(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d20(v))
w=v.e
w.toString
v.aaV(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a2H,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.Q,n,n)],v))
return A.f_(A.aC(new A.D(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SQ(n,B.rb,w)],v)
if(o.f)w.push(A.f_(A.aC(new A.aa(28,28,D.aBh,n),n,n,n),B.cX,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b4,B.r,1)
q=A.V(B.Ds,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dP(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LD,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbP_(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bvO(o.a.d)
if(v!=null)w.push(A.au(8,A.js(D.aZ5,D.dk_,new C.d2_(o),A.ik(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hk,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.av(B.a5,n,B.b9,B.t,w,n)}}
var z=a.updateTypes(["p(oX)","~()","LC(M)","oX(a_<@,@>)","Z(oX)","a_<p,@>(oX)","aD<~>()","LB(M)","lK<L>(M,rh?,r?)","YX(M,L)","vc(M,rh?,r?)","GR(M,ar,dQ?)"])
C.dHc.prototype={
$1(d){return new C.LC(this.a,null)},
$S:z+2}
C.dHb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.ep,B.V],j):A.a([B.c,B.aA],j),h=A.a([new A.a5(0,B.H,B.a7.k(0.22),B.eC,32)],x.V),g=A.J(m?B.ce:B.a7.k(0.18),B.r,1),f=A.m(28),e=B.a7.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.q(n,D.aWh,B.j,n,n,new A.o(B.a7.k(0.18),n,A.J(B.a7.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.G(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.en,w,A.aP(n,n,n,n,A.V(B.cN,m?B.as:B.cX,n,n,n),n,n,n,new C.dH7(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LL,n,n,n)
e=A.em(B.cR,A.a([new C.Pb("YouTube",B.NP,m,n),new C.Pb("TikTok",B.mm,m,n),new C.Pb("Instagram",B.CY,m,n),new C.Pb("Facebook",B.D5,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.hR,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bD
r=A.V(B.fQ,B.a7.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aL
u=A.v(A.a([e,B.aS,A.aN(n,B.S,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.U),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.V9),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.am,n,B.i,B.k,0,B.p)
e=A.js(D.aWl,D.doa,new C.dH8(d),A.ik(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.D(new A.Q(12,0,12,12+l.f.d),A.cv(A.bQ(f,A.v(A.a([j,new A.D(B.a_c,u,n),new A.D(D.aO6,A.F(A.a([e,B.b7,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dH9(d),n,n),B.ai,A.dD(D.b00,D.dp0,new C.dHa(d,w),A.bn(B.a7,n,n,n,B.c,n,B.LD,n,new A.bp(A.m(14),B.U),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.am,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a7(B.av,B.aD,B.E,i,n,n),B.o),B.bq),n)},
$S:72}
C.dH7.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dH8.prototype={
$0(){C.dY6()
$.R5().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dH9.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dHa.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bw_.prototype={
$1(d){return C.dY7(A.S(d,x.N,x.z))},
$S:z+3}
C.bw0.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bvS.prototype={
$1(d){return d.c},
$S:z+0}
C.bvT.prototype={
$1(d){return d.r},
$S:z+0}
C.bvU.prototype={
$1(d){return d.f},
$S:z+0}
C.bvV.prototype={
$1(d){return d.at},
$S:z+0}
C.bvW.prototype={
$1(d){return d.c},
$S:z+0}
C.bvX.prototype={
$1(d){return d.r},
$S:z+0}
C.bvY.prototype={
$1(d){return d.f},
$S:z+0}
C.bvZ.prototype={
$1(d){return d.at},
$S:z+0}
C.bvR.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bvQ.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:81}
C.d1Q.prototype={
$0(){},
$S:0}
C.d1P.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d1N.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d1O.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d1R.prototype={
$1(d){return new C.LB(this.a,null)},
$S:z+7}
C.d1W.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qL,w,w,w,new C.d1V(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.G(A.h1(A.F(A.a([new A.oV(D.yk,e,g,36,B.xP,w),B.aO,A.G(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fQ(B.f.gI(D.yk).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.D(B.bI,A.V(B.hF,A.ao(B.f.gI(D.yk),B.f.ga7(D.yk),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gby3(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yk,w,g,B.eQ,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:368}
C.d1V.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d1X.prototype={
$3(d,e,f){return new A.lK($.I7(),new C.d1U(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d1U.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EE(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.k(0.12)
s=A.m(12)
r=A.J(B.a7.k(0.35),B.r,1)
q=A.V(B.kB,B.a7,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.I7().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.G(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.V,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dv,B.f9,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.hM(1.7777777777777777,C.dY8(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaSg(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uS(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.l9(new A.D(B.Lz,A.v(u,B.G,k,B.i,B.k,0,B.p),k),k),new A.oi(D.aLK,A.aGD(new A.og(new C.d1T(i,j),J.a3(i.d),!1,!0,!0,A.uE(),k),D.cWn),k)],w))},
$S:1849}
C.d1T.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.YX(v,e,J.a3(w.d),new C.d1S(w,v),this.b,null)},
$S:z+9}
C.d1S.prototype={
$0(){return this.a.bxo(this.b)},
$S:0}
C.d1Y.prototype={
$0(){this.a.Xi()
return null},
$S:0}
C.d1K.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d1L.prototype={
$0(){C.a1_(this.a,$.bvP)
return null},
$S:0}
C.d1M.prototype={
$3(d,e,f){return A.eK(new C.d1J(this.a,e))},
$S:z+10}
C.d1J.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.Q,v,v),B.aS,new C.aYy(u,s.a.c,s.e,s.d,new C.d1G(s),new C.d1H(s),new C.d1I(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oE,v,v,B.ak),v,v,v)},
$S:1850}
C.d1G.prototype={
$0(){var w=this.a.c
w.toString
C.a1_(w,$.bvP)
return null},
$S:0}
C.d1H.prototype={
$1(d){var w=this.a
return w.n(new C.d1F(w,d))},
$S:31}
C.d1F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d1I.prototype={
$0(){var w=this.a
return w.n(new C.d1E(w))},
$S:0}
C.d1E.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.diH.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.diI.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d6a.prototype={
$3(d,e,f){return new C.GR(this.a.c,null)},
$S:z+11}
C.d6b.prototype={
$3(d,e,f){if(f==null)return e
return new A.av(B.a5,null,B.b9,B.t,A.a([new C.GR(this.a.c,null),D.aAd],x.p),null)},
$C:"$3",
$R:3,
$S:440}
C.d1Z.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d27.prototype={
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
A.h6(v,"load",new C.d24(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.d25(w),!1,u)
A.bI(B.jW,new C.d26(w),x.H)
w=w.e
w.toString
return w},
$S:628}
C.d24.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d23(w))},
$S:28}
C.d23.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d25.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d22(w))},
$S:28}
C.d22.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d26.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d21(w))},
$S:12}
C.d21.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d20.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d2_.prototype={
$0(){var w,v=C.bvO(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mR.Lu(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dCw.prototype={
$1(d){var w,v,u,t,s=new A.w2([],[]).x5(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1851};(function aliases(){var w=C.apk.prototype
w.b1L=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajM.prototype,"gaBO","buM",1)
w(u,"gbvk","bvl",1)
w(u,"gby3","by4",6)
w(C.ajN.prototype,"gbP_","bP0",1)
v(C,"eGy","dY5",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zJ,[C.dHc,C.dHb,C.bw_,C.bw0,C.bvS,C.bvT,C.bvU,C.bvV,C.bvW,C.bvX,C.bvY,C.bvZ,C.bvR,C.bvQ,C.d1R,C.d1W,C.d1X,C.d1U,C.d1M,C.d1H,C.d6a,C.d6b,C.d27,C.d24,C.d25,C.dCw])
v(A.a2o,[C.dH7,C.dH8,C.dH9,C.dHa,C.d1Q,C.d1P,C.d1N,C.d1O,C.d1V,C.d1S,C.d1Y,C.d1K,C.d1L,C.d1G,C.d1F,C.d1I,C.d1E,C.diH,C.diI,C.d1Z,C.d23,C.d22,C.d26,C.d21,C.d20,C.d2_])
v(A.ap,[C.Pb,C.YX,C.aQ5,C.aYy,C.aYz,C.aRq,C.aYx,C.aSL,C.aM6,C.aSQ,C.GR])
v(A.ar,[C.oX,C.rh])
v(A.ad,[C.LC,C.LB,C.a9m,C.a9n])
v(A.ae,[C.ajM,C.aRk,C.apk,C.ajN])
v(A.a2p,[C.d1T,C.d1J])
u(C.LF,A.aN1)
u(C.aRl,C.apk)
w(C.apk,A.dB)})()
A.e0x(b.typeUniverse,JSON.parse('{"LC":{"ad":[],"r":[]},"YX":{"ap":[],"r":[]},"LB":{"ad":[],"r":[]},"Pb":{"ap":[],"r":[]},"ajM":{"ae":["LC"]},"aQ5":{"ap":[],"r":[]},"aRk":{"ae":["LB"]},"aYy":{"ap":[],"r":[]},"aYz":{"ap":[],"r":[]},"aRq":{"ap":[],"r":[]},"aYx":{"ap":[],"r":[]},"aSL":{"ap":[],"r":[]},"aM6":{"ap":[],"r":[]},"a9m":{"ad":[],"r":[]},"GR":{"ap":[],"r":[]},"aRl":{"ae":["a9m"]},"aSQ":{"ap":[],"r":[]},"a9n":{"ad":[],"r":[]},"ajN":{"ae":["a9n"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<oX>"),S:w("a9<fQ>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<oX>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oR"),_:w("EB"),k:w("oX"),N:w("p"),Y:w("bi<a4>"),W:w("d3<p>"),J:w("lK<L>"),j:w("lK<rh?>"),E:w("ud<d_>"),q:w("ZU"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2o=new A.P(983224,"MaterialIcons",!1)
D.aZc=new A.ab(D.a2o,48,B.b4,null,null,null)
D.dam=new A.z("Powered off",null,B.aqJ,null,null,null,null,null,null,null,null,null)
D.bVZ=w([D.aZc,B.N,D.dam],x.p)
D.aJ2=new A.eJ(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bVZ,null)
D.azS=new A.cU(B.I,null,null,D.aJ2,null)
D.cW2=new A.aa(18,18,B.W9,null)
D.aAd=new A.cU(B.I,null,null,D.cW2,null)
D.aBh=new A.fp(2,null,null,null,null,B.aa,null,null,null,null)
D.aF9=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aFQ=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aHE=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aLz=new A.Q(0,3,0,3)
D.aLK=new A.Q(10,0,10,88)
D.aMa=new A.Q(12,6,12,10)
D.aMF=new A.Q(14,8,14,6)
D.aO6=new A.Q(20,8,20,20)
D.a_I=new A.Q(8,6,15,8)
D.aUx=new A.P(983222,"MaterialIcons",!1)
D.aWh=new A.ab(B.kB,26,B.a7,null,null,null)
D.aWl=new A.ab(B.a1q,18,null,null,null,null)
D.aWA=new A.ab(B.us,14,B.aa,null,null,null)
D.aUQ=new A.P(983420,"MaterialIcons",!1)
D.aXs=new A.ab(D.aUQ,14,B.aa,null,null,null)
D.aSW=new A.P(62895,"MaterialIcons",!1)
D.aXx=new A.ab(D.aSW,14,B.aa,null,null,null)
D.aZ5=new A.ab(B.uj,16,B.aa,null,null,null)
D.b00=new A.ab(B.ip,20,null,null,null,null)
D.b0l=new A.ab(B.hF,16,null,null,null,null)
D.bZS=w([B.aP,B.V],x.O)
D.a4p=new A.a7(B.av,B.aD,B.E,D.bZS,null,null)
D.cPd=new A.aI("NGMY OS","14.2.1")
D.cNO=new A.aI("VirtualDroid","13.8.4")
D.cNN=new A.aI("NGMY OS","15.0.0")
D.cOH=new A.aI("VirtualDroid","14.1.2")
D.cNJ=new A.aI("NGMY Tab OS","12.9.7")
D.cNH=new A.aI("NGMY OS","13.5.3")
D.cNw=new A.aI("VirtualDroid","15.2.0")
D.cOd=new A.aI("NGMY OS","14.8.1")
D.cOM=new A.aI("NGMY Tab OS","13.2.4")
D.cPq=new A.aI("VirtualDroid","12.6.9")
D.cNq=new A.aI("NGMY OS","16.0.1")
D.cNg=new A.aI("VirtualDroid","14.9.0")
D.cP3=new A.aI("NGMY Tab OS","14.0.3")
D.cNZ=new A.aI("NGMY OS","13.1.8")
D.cNo=new A.aI("VirtualDroid","13.4.5")
D.cNG=new A.aI("NGMY OS","15.3.2")
D.cON=new A.aI("NGMY Tab OS","12.4.1")
D.cP6=new A.aI("VirtualDroid","16.1.0")
D.cOc=new A.aI("NGMY OS","14.4.6")
D.cPe=new A.aI("VirtualDroid","15.0.8")
D.bZ0=w([D.cPd,D.cNO,D.cNN,D.cOH,D.cNJ,D.cNH,D.cNw,D.cOd,D.cOM,D.cPq,D.cNq,D.cNg,D.cP3,D.cNZ,D.cNo,D.cNG,D.cON,D.cP6,D.cOc,D.cPe],A.b4("a9<+(p,p)>"))
D.yk=w([B.a7,B.fG],x.O)
D.cRB=new A.f3(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cR9=new A.f3(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cR4=new A.f3(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cRd=new A.f3(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cR0=new A.f3(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cRf=new A.f3(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cRD=new A.f3(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cR1=new A.f3(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cR8=new A.f3(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cRh=new A.f3(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cR_=new A.f3(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cRv=new A.f3(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cRs=new A.f3(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cR7=new A.f3(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cRp=new A.f3(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cRo=new A.f3(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cQZ=new A.f3(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cRc=new A.f3(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cRm=new A.f3(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cRr=new A.f3(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abm=w([D.cRB,D.cR9,D.cR4,D.cRd,D.cR0,D.cRf,D.cRD,D.cR1,D.cR8,D.cRh,D.cR_,D.cRv,D.cRs,D.cR7,D.cRp,D.cRo,D.cQZ,D.cRc,D.cRm,D.cRr],A.b4("a9<+(p,p,a4,a4,p)>"))
D.c7Q=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aj9=new C.LF(0,"youtube")
D.aja=new C.LF(1,"tiktok")
D.R5=new C.LF(2,"instagram")
D.ajb=new C.LF(3,"facebook")
D.cFX=new C.LF(4,"other")
D.cWn=new A.hr(4,10,8,0.52,null)
D.dbF=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cZQ=new A.aV(D.dbF,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.t,null)
D.d2d=new A.N(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dbs=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dk_=new A.z("Open in YouTube",null,B.jE,null,null,null,null,null,null,null,null,null)
D.doa=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dp0=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dp9=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dxc=new C.aSL(null)})();(function staticFields(){$.dY4=20
$.aCy=null
$.bvP=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eLy","I7",()=>A.adP(0))
w($,"eLz","R5",()=>A.adP(null))})()};
(a=>{a["+1Wj8H47/mo9Gq+dfNMIIDyZzU0="]=a.current})($__dart_deferred_initializers__);