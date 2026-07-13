((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eqh(d,e){A.a6(d,!1).cA(A.eF(new C.drm(e),!0,null,x.H))},
a_y(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Q3()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bb(n,B.aM,B.aA),t)
w=3
return A.b(A.dy(B.L,new C.drl(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_y)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e5q(r)
if(q==null){d.F(x.q).f.S(D.cQ6)
w=1
break}w=4
return A.b(A.bJ(B.ih,null,x.H),$async$a_y)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dHQ=n
p=C.e5k(n)
n=$.Hc()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dvt(q)
d.F(x.q).f.S(A.bm(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_y,v)},
dHT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aY(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aY(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.ox(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
KQ(d){return C.e5t(d)},
e5t(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$KQ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$KQ)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cT(r)?10:11
break
case 10:k=J.eD(r,x.f)
k=A.dg(k,new C.bsD(),k.$ti.j("F.E"),x.k)
j=A.R(k).j("ai<F.E>")
i=A.y(new A.ai(k,new C.bsE(),j),j.j("F.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dHV(q)
w=12
return A.b(C.KP(a3,p),$async$KQ)
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
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dHT(A.T(n,x.N,x.z))
l=C.dHV(A.a([m],x.e))
w=21
return A.b(C.KP(a3,l),$async$KQ)
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
case 18:case 14:q=C.e5r()
w=22
return A.b(C.KP(a3,q),$async$KQ)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KQ,v)},
dHV(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.bsv(),w).eA(0),u=new A.E(d,new C.bsw(),w).eA(0),t=new A.E(d,new C.bsx(),w).eA(0),s=new A.E(d,new C.bsy(),w).eA(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dvu(null,q,u,t,v,s));++q}return r},
azH(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$azH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KQ(d),$async$azH)
case 3:t=f
s=x.N
r=J.c6(t)
q=r.dh(t,new C.bsz(),s).eA(0)
p=r.dh(t,new C.bsA(),s).eA(0)
o=r.dh(t,new C.bsB(),s).eA(0)
n=r.dh(t,new C.bsC(),s).eA(0)
m=C.dvu(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.KP(d,t),$async$azH)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$azH,v)},
KP(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$KP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$KP)
case 2:u=g
t=B.b.i(d)
s=J.aX(e,new C.bsu(),x.P)
s=A.y(s,s.$ti.j("a4.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$KP)
case 3:return A.h(null,v)}})
return A.i($async$KP,v)},
e5r(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dz(20,x.k)
for(w=0;w<20;++w)q[w]=C.dvu(w,w,t,s,u,r)
return q},
dvu(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jR(),h=d==null,g=D.a81[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a81[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bK(256)
n=new A.E(p,new C.bst(),A.Y(p).j("E<1,o>")).ft(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bK(10)
t=B.h.ft(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.ba(B.l.h_(i.bK(256),16),2,"0")
s=B.h.bj(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c0q[w]
j=D.bS4[w]
return new C.ox("vd_"+1000*Date.now()+"_"+e+"_"+i.bK(99999),"Device "+B.b.ba(B.l.q(e+1),2,"0"),u,k,C.e5s(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e5s(d,e){var w,v=J.dz(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.ba(B.l.h_(d.bK(256),16),2,"0")
return B.h.ft(v)},
drm:function drm(d){this.a=d},
drl:function drl(d,e){this.a=d
this.b=e},
drh:function drh(d){this.a=d},
dri:function dri(d){this.a=d},
drj:function drj(d){this.a=d},
drk:function drk(d,e){this.a=d
this.b=e},
Oe:function Oe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ox:function ox(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bsD:function bsD(){},
bsE:function bsE(){},
bsv:function bsv(){},
bsw:function bsw(){},
bsx:function bsx(){},
bsy:function bsy(){},
bsz:function bsz(){},
bsA:function bsA(){},
bsB:function bsB(){},
bsC:function bsC(){},
bsu:function bsu(){},
bst:function bst(){},
KO:function KO(d,e){this.c=d
this.a=e},
ahJ:function ahJ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cQq:function cQq(){},
cQp:function cQp(d,e){this.a=d
this.b=e},
cQn:function cQn(d){this.a=d},
cQo:function cQo(d,e){this.a=d
this.b=e},
cQr:function cQr(d){this.a=d},
cQw:function cQw(d){this.a=d},
cQv:function cQv(d){this.a=d},
cQx:function cQx(d,e){this.a=d
this.b=e},
cQu:function cQu(d,e,f){this.a=d
this.b=e
this.c=f},
cQt:function cQt(d,e){this.a=d
this.b=e},
cQs:function cQs(d,e){this.a=d
this.b=e},
cQy:function cQy(d){this.a=d},
XK:function XK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMQ:function aMQ(d,e){this.c=d
this.a=e},
KN:function KN(d,e){this.c=d
this.a=e},
aO2:function aO2(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cQk:function cQk(d){this.a=d},
cQl:function cQl(d){this.a=d},
cQm:function cQm(d){this.a=d},
cQj:function cQj(d,e){this.a=d
this.b=e},
cQg:function cQg(d){this.a=d},
cQh:function cQh(d){this.a=d},
cQf:function cQf(d,e){this.a=d
this.b=e},
cQi:function cQi(d){this.a=d},
cQe:function cQe(d){this.a=d},
aV4:function aV4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aV5:function aV5(d,e,f){this.c=d
this.d=e
this.a=f},
aO8:function aO8(d,e){this.c=d
this.a=e},
aV3:function aV3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d55:function d55(d){this.a=d},
d56:function d56(d){this.a=d},
aPt:function aPt(d){this.a=d},
aJ0:function aJ0(d,e){this.c=d
this.a=e},
e5q(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e5p(v)
if(u!=null)return new C.qM(w,C.dvs(u,!1),D.afB,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e5o(v)
if(t!=null)return new C.qM(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afC,"TikTok",q)
s=C.e5n(w,v)
if(s!=null)return s
r=C.e5m(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qM(w,w,D.cxa,"Video",q)
return q},
e5n(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qM(d,"https://www.instagram.com/reel/"+w+u,D.P4,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qM(d,"https://www.instagram.com/p/"+w+u,D.P4,t,null)}return null},
e5m(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qM(d,"https://www.facebook.com/plugins/video.php?href="+A.fc(2,d,B.bf,!1)+"&show_text=false&width=734",D.afD,"Facebook",null)},
e5p(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].du(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e5o(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).du(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
KR:function KR(d,e){this.a=d
this.b=e},
qM:function qM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7K:function a7K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aO3:function aO3(d,e){var _=this
_.d=$
_.cv$=d
_.aH$=e
_.c=_.a=null},
aPy:function aPy(d,e){this.c=d
this.a=e},
cVd:function cVd(d){this.a=d},
cVe:function cVe(d){this.a=d},
G4:function G4(d,e){this.c=d
this.a=e},
amQ:function amQ(){},
dHU(d,e,f,g,h,i){return new C.a7L(i,f,h,e,g,d)},
eoV(d){var w=window
w.toString
A.fP(w,"message",new C.dnr(d),!1,x._)},
a7L:function a7L(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahK:function ahK(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cQz:function cQz(d){this.a=d},
cQI:function cQI(d){this.a=d},
cQF:function cQF(d){this.a=d},
cQE:function cQE(d){this.a=d},
cQG:function cQG(d){this.a=d},
cQD:function cQD(d){this.a=d},
cQH:function cQH(d){this.a=d},
cQC:function cQC(d){this.a=d},
cQB:function cQB(d){this.a=d},
cQA:function cQA(d){this.a=d},
dnr:function dnr(d){this.a=d},
e5i(){var w,v,u
try{v=A.xR()
w=v.gv2(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dvs(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bj(w,"&")},
bsr(d){var w=A.am(y.c,!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
dHP(d){var w=A.b1(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b1(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e5j(d,e,f){var w,v,u=C.bsr(d)
if(u!=null){if(f){w=C.e5i()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dHP(C.dvs(u,e))}return C.dHP(d)},
e5k(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
e5l(d){var w
if($.Q3().a==null)return!1
w=$.Hc().a
return d>=w&&d<w+4},
dHS(){var w=$.azG
if(w!=null)w.ac(0)
$.azG=null
$.Hc().sv(0,0)},
dHR(){var w,v,u,t=$.Q3()
if(t.a==null)return
w=$.azG
if(w!=null)w.ac(0)
v=$.dHQ
if(v<=4){t=t.a
t.toString
C.dvt(t)
return}w=$.Hc()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dvt(t)},
dvt(d){var w=$.azG
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
default:w=null}$.azG=A.dx(A.dq(0,0,0,0,0,w),C.ep9())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oe.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.ci,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hf,w,w,w)}}
C.ox.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.KO.prototype={
V(){return new C.ahJ(A.a([],x.e))},
gdJ(){return this.c}}
C.ahJ.prototype={
a_(){var w=this
w.a4()
$.Hc().au(0,w.gayO())
C.eoV(w.gbpY())
w.ZP()},
bpn(){if(this.c!=null)this.p(new C.cQq())},
bpZ(){C.dHR()},
n(){$.Hc().Z(0,this.gayO())
C.dHS()
$.Q3().sv(0,null)
this.a3()},
ZP(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KQ(t.a.c),$async$ZP)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cQp(t,s))
$.bss=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$ZP,v)},
VG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cQn(t))
w=3
return A.b(C.azH(t.a.c),$async$VG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cQo(t,s))
$.bss=J.a3(t.d)
t.c.F(x.q).f.S(A.bm(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$VG,v)},
brZ(d){var w=this.c
w.toString
A.a6(w,!1).cA(A.eF(new C.cQr(d),!1,null,x.H))},
bsC(){var w=this.c
w.toString
return C.a_y(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bz,s=A.c_(!0,A.v(A.a([new A.I(D.Y2,new A.j9(new C.cQw(w),v),v),A.H(w.e?B.nw:new A.lr($.Q3(),new C.cQx(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.atc(B.a8,B.HM,B.mO,D.ddE,w.e?v:new C.cQy(w)),v)}}
C.XK.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dK,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7K(n,!0,!C.e5l(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.k1,B.nF,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zC,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.U,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bW(p,A.ff(A.v(A.a([new C.aMQ(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.Cc,B.a8.l(0.85),u,u,9),D.cLS,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aG8,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a1i,B.p),u,u,u,u,B.hh,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a5)}}
C.aMQ.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gai(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tn,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.XQ,w,w,w)}}
C.KN.prototype={
V(){return new C.aO2()}}
C.aO2.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bz,t=A.aS(w,w,w,w,B.a0o,w,w,w,new C.cQk(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c_(!0,A.v(A.a([new A.I(D.Y2,A.G(A.a([t,A.H(new A.KC(A.G(A.a([A.H(new A.I(B.jg,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.b9,A.W(B.hl,B.a8,w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cQl(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lr($.Q3(),new C.cQm(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aV4.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.f_,28),new A.a9(0,B.H,B.A.l(0.45),B.d9,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dHU(new A.dd(v+"_full_"+u,x.W),!1,u,!1,w.gaOG(),v+"_full")
w=v}else w=new C.aO8(t.r,s)}else w=new C.aJ0(m,s)
else w=D.dkO
return A.t(s,A.bW(n,A.ff(A.v(A.a([new C.aV5(m,l,s),A.H(w,1),new C.aV3(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a1i,B.p),s,r*2.05,s,s,B.bK,s,s,r)}}
C.aV5.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dm(r)
r=A.hg(r)
w=new A.dI(q,r)
v=w.gK9()===0?12:w.gK9()
r=B.b.ba(B.l.q(r),2,"0")
q=(q<12?B.hb:B.je)===B.hb?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nh,s,s,s),B.aZ,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bx,D.aRH,B.eO,D.aQS,B.eO,D.aRM],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aJ,A.G(A.a([A.W(B.C4,B.a8.l(0.9),s,s,12),B.eO,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aH9,s,s,s)}}
C.aO8.prototype={
B(d){var w=null
return A.t(w,A.aD(A.v(A.a([A.W(B.Bv,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eN(D.aVf,D.d15,this.c,A.e7(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aH(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zC,w,w,w,w,w,w,w,w,w,1/0)}}
C.aV3.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayF(B.BZ,"YouTube",s===0,r,new C.d55(u))
s=u.ayF(B.kF,"Device",s===1,r,new C.d56(u))
w=r?"Power off":"Power on"
v=r?D.a_D:D.aOR
return A.t(t,A.G(A.a([q,B.ak,s,B.aZ,A.aS(t,t,t,t,A.W(v,r?B.bR:B.ho,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dB)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aGN,t,t,t)},
ayF(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.br
else w=f?B.a8:B.av
v=f&&g?B.a8.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aC(!1,B.U,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nU,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a5),1)}}
C.aPt.prototype={
B(d){return D.avx}}
C.aJ0.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ke,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tX("Serial",u.c),q=w.tX("Model",u.d),p=w.tX("Device ID",u.e),o=w.tX("IMEI",u.r),n=w.tX("MAC",u.f),m=w.tX("OS",u.w+" "+u.x),l=w.tX("Location",u.y+", "+u.z),k=w.tX("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tX("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.aJ,s,B.ac,r,q,p,o,n,m,l,k,j,w.tX("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b9,v,v,B.an,!1)},
tX(d,e){var w=null
return new A.I(B.d8,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cv,A.d(e,w,w,w,w,w,w,D.cTs,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.KR.prototype={
O(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qM.prototype={
gaOG(){var w=this.c
return w===D.afB||w===D.afC||w===D.P4||w===D.afD}}
C.a7K.prototype={
V(){return new C.aO3(null,null)}}
C.aO3.prototype={
a_(){this.a4()
var w=A.bo(null,B.rD,null,1,null,this)
w.h5(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aYQ()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cB(t,new A.p(t,t,t,t,t,new A.ac(B.c3,B.bW,B.E,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.ch(B.d7,p,t)
w=B.e.l(0.92)
q=A.aD(new A.cR(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bk.T>")),!1,A.W(B.k1,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nF
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aPy(s,t),r,q,A.az(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.az(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.az(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aA(B.ag,t,B.b5,B.t,s,t)}}
C.aPy.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l9(u,B.K,new C.cVd(this),B.bP,!0,w,w,new C.cVe(this),w)
return new C.G4(v,w)}}
C.G4.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.mo,B.TV],x.O),B.k1)
break
case 1:w=new A.aM(A.a([B.zC,D.aAA],x.O),B.lD)
break
case 2:w=new A.aM(A.a([D.aCf,D.azZ],x.O),B.BE)
break
case 3:w=new A.aM(A.a([B.W,B.dC],x.O),B.BL)
break
case 4:w=new A.aM(A.a([B.aw,B.aN],x.O),B.o9)
break
default:w=u}v=w.a
return A.t(u,A.aD(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amQ.prototype={
n(){var w=this,v=w.aH$
if(v!=null)v.Z(0,w.gd5())
w.aH$=null
w.a3()},
bl(){this.bA()
this.bx()
this.d6()}}
C.a7L.prototype={
V(){return new C.ahK()}}
C.ahK.prototype={
a8R(d,e){var w,v=C.bsr(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dvs(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e5j(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bI9(){var w,v=this
if(v.w)return
v.p(new C.cQz(v))
w=v.e
if(w!=null)v.a8R(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aJ()
u.d=w
try{$.yR()
$.o5().qC(w,new C.cQI(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cQB(v))
w=v.e
w.toString
v.a8R(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_R,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.ff(A.aD(new A.I(new A.V(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.IM(n,B.ol,w)],v)
if(o.f)w.push(A.ff(A.aD(new A.aa(28,28,D.awH,n),n,n,n),B.cY,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.br,B.u,1)
q=A.W(B.M8,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eg(0,A.aC(!1,B.U,!0,n,A.aL(!1,n,!0,A.aD(A.t(n,A.G(A.a([q,B.ak,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.K1,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbI8(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a5)))}v=C.bsr(o.a.d)
if(v!=null)w.push(A.az(8,A.jc(D.aTc,D.d8J,new C.cQA(o),A.iO(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hf,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aA(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ox)","~()","KO(O)","ox(Z<@,@>)","a1(ox)","Z<o,@>(ox)","aB<~>()","KN(O)","lr<K>(O,qM?,q?)","XK(O,K)","us(O,qM?,q?)","G4(O,an,dH?)"])
C.drm.prototype={
$1(d){return new C.KO(this.a,null)},
$S:z+2}
C.drl.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e6,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.f_,32)],x.V),g=A.L(m?B.cd:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aQA,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f1,w,A.aS(n,n,n,n,A.W(B.d3,m?B.av:B.cY,n,n,n),n,n,n,new C.drh(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a6,B.a7,B.E,j,n,n),B.p),n,n,n,n,B.K7,n,n,n)
e=A.eC(B.cR,A.a([new C.Oe("YouTube",B.M5,m,n),new C.Oe("TikTok",B.lD,m,n),new C.Oe("Instagram",B.BE,m,n),new C.Oe("Facebook",B.BL,m,n)],v),B.cJ,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cg:B.iJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bz
r=A.W(B.fq,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aL
u=A.v(A.a([e,B.aQ,A.aN(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.bc(4,q,B.Y),n,n,n,n,n,n,!0,new A.bc(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bc(4,A.m(16),B.SG),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ae,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.jc(D.aQD,D.dcH,new C.dri(d),A.iO(n,n,n,n,n,n,n,n,n,n,n,m?B.bt:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.cB(A.bW(f,A.v(A.a([j,new A.I(B.XB,u,n),new A.I(D.aIs,A.G(A.a([e,B.aZ,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.drj(d),n,n),B.ak,A.dD(D.aUY,D.ddw,new C.drk(d,w),A.bw(B.a8,n,n,n,B.e,n,B.K1,n,new A.by(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.E,i,n,n),B.p),B.bq),n)},
$S:91}
C.drh.prototype={
$0(){A.a6(this.a,!1).P(null)
return null},
$S:0}
C.dri.prototype={
$0(){C.dHS()
$.Q3().sv(0,null)
A.a6(this.a,!1).P(null)},
$S:0}
C.drj.prototype={
$0(){A.a6(this.a,!1).P(null)
return null},
$S:0}
C.drk.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a6(this.a,!1).P(w)
return null},
$S:0}
C.bsD.prototype={
$1(d){return C.dHT(A.T(d,x.N,x.z))},
$S:z+3}
C.bsE.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bsv.prototype={
$1(d){return d.c},
$S:z+0}
C.bsw.prototype={
$1(d){return d.r},
$S:z+0}
C.bsx.prototype={
$1(d){return d.f},
$S:z+0}
C.bsy.prototype={
$1(d){return d.at},
$S:z+0}
C.bsz.prototype={
$1(d){return d.c},
$S:z+0}
C.bsA.prototype={
$1(d){return d.r},
$S:z+0}
C.bsB.prototype={
$1(d){return d.f},
$S:z+0}
C.bsC.prototype={
$1(d){return d.at},
$S:z+0}
C.bsu.prototype={
$1(d){return d.a9()},
$S:z+5}
C.bst.prototype={
$1(d){return B.b.ba(B.l.h_(d,16),2,"0").toUpperCase()},
$S:88}
C.cQq.prototype={
$0(){},
$S:0}
C.cQp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQn.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cQo.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cQr.prototype={
$1(d){return new C.KN(this.a,null)},
$S:z+7}
C.cQw.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,D.aUa,w,w,w,new C.cQv(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fM(A.G(A.a([new A.ov(D.x7,e,g,36,B.C4,w),B.aP,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fW(B.h.gU(D.x7).l(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.bK,A.W(B.hl,A.ao(B.h.gU(D.x7),B.h.gai(D.x7),e),w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbsB(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.j,0,w,w),D.x7,w,g,B.fo,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:322}
C.cQv.prototype={
$0(){return A.a6(this.a,!1).eK()},
$S:0}
C.cQx.prototype={
$3(d,e,f){return new A.lr($.Hc(),new C.cQu(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cQu.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DV(d,k,x.Q)
w=w==null?k:w.glI()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.k1,B.a8,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Hc().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.ak,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dt,B.hg,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bW(s,new A.j3(1.7777777777777777,C.dHU(new A.dd("fleet_master_"+r,x.W),!0,r,!0,j.gaOG(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wl(0,B.t,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kR(new A.I(B.JX,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oI(D.aGk,A.aDM(new A.nS(new C.cQt(i,j),J.a3(i.d),!1,!0,!0,A.tS(),k),D.cMH),k)],w))},
$S:1766}
C.cQt.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.XK(v,e,J.a3(w.d),new C.cQs(w,v),this.b,null)},
$S:z+9}
C.cQs.prototype={
$0(){return this.a.brZ(this.b)},
$S:0}
C.cQy.prototype={
$0(){this.a.VG()
return null},
$S:0}
C.cQk.prototype={
$0(){return A.a6(this.a,!1).eK()},
$S:0}
C.cQl.prototype={
$0(){C.a_y(this.a,$.bss)
return null},
$S:0}
C.cQm.prototype={
$3(d,e,f){return A.eW(new C.cQj(this.a,e))},
$S:z+10}
C.cQj.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aD(A.cz(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aQ,new C.aV4(u,s.a.c,s.e,s.d,new C.cQg(s),new C.cQh(s),new C.cQi(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.F,v,B.pC,v,v,B.an),v,v,v)},
$S:1767}
C.cQg.prototype={
$0(){var w=this.a.c
w.toString
C.a_y(w,$.bss)
return null},
$S:0}
C.cQh.prototype={
$1(d){var w=this.a
return w.p(new C.cQf(w,d))},
$S:34}
C.cQf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cQi.prototype={
$0(){var w=this.a
return w.p(new C.cQe(w))},
$S:0}
C.cQe.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d55.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d56.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cVd.prototype={
$3(d,e,f){return new C.G4(this.a.c,null)},
$S:z+11}
C.cVe.prototype={
$3(d,e,f){if(f==null)return e
return new A.aA(B.ag,null,B.b5,B.t,A.a([new C.G4(this.a.c,null),D.avP],x.p),null)},
$C:"$3",
$R:3,
$S:536}
C.cQz.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cQI.prototype={
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
w.a8R(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fP(v,"load",new C.cQF(w),!1,u)
v=w.e
v.toString
A.fP(v,"error",new C.cQG(w),!1,u)
A.bJ(B.jR,new C.cQH(w),x.H)
w=w.e
w.toString
return w},
$S:519}
C.cQF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cQE(w))},
$S:40}
C.cQE.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cQG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cQD(w))},
$S:40}
C.cQD.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cQH.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cQC(w))},
$S:12}
C.cQC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cQB.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cQA.prototype={
$0(){var w,v=C.bsr(this.a.a.d)
if(v==null)return
w=window
w.toString
B.ki.Ku(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dnr.prototype={
$1(d){var w,v,u,t,s=new A.xU([],[]).zL(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1768};(function aliases(){var w=C.amQ.prototype
w.aYQ=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahJ.prototype,"gayO","bpn",1)
w(u,"gbpY","bpZ",1)
w(u,"gbsB","bsC",6)
w(C.ahK.prototype,"gbI8","bI9",1)
v(C,"ep9","dHR",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.z9,[C.drm,C.drl,C.bsD,C.bsE,C.bsv,C.bsw,C.bsx,C.bsy,C.bsz,C.bsA,C.bsB,C.bsC,C.bsu,C.bst,C.cQr,C.cQw,C.cQx,C.cQu,C.cQm,C.cQh,C.cVd,C.cVe,C.cQI,C.cQF,C.cQG,C.dnr])
v(A.a10,[C.drh,C.dri,C.drj,C.drk,C.cQq,C.cQp,C.cQn,C.cQo,C.cQv,C.cQs,C.cQy,C.cQk,C.cQl,C.cQg,C.cQf,C.cQi,C.cQe,C.d55,C.d56,C.cQz,C.cQE,C.cQD,C.cQH,C.cQC,C.cQB,C.cQA])
v(A.as,[C.Oe,C.XK,C.aMQ,C.aV4,C.aV5,C.aO8,C.aV3,C.aPt,C.aJ0,C.aPy,C.G4])
v(A.an,[C.ox,C.qM])
v(A.ae,[C.KO,C.KN,C.a7K,C.a7L])
v(A.af,[C.ahJ,C.aO2,C.amQ,C.ahK])
v(A.a11,[C.cQt,C.cQj])
u(C.KR,A.aJW)
u(C.aO3,C.amQ)
w(C.amQ,A.dG)})()
A.dLr(b.typeUniverse,JSON.parse('{"KO":{"ae":[],"q":[]},"XK":{"as":[],"q":[]},"KN":{"ae":[],"q":[]},"Oe":{"as":[],"q":[]},"ahJ":{"af":["KO"]},"aMQ":{"as":[],"q":[]},"aO2":{"af":["KN"]},"aV4":{"as":[],"q":[]},"aV5":{"as":[],"q":[]},"aO8":{"as":[],"q":[]},"aV3":{"as":[],"q":[]},"aPt":{"as":[],"q":[]},"aJ0":{"as":[],"q":[]},"a7K":{"ae":[],"q":[]},"G4":{"as":[],"q":[]},"aO3":{"af":["a7K"]},"aPy":{"as":[],"q":[]},"a7L":{"ae":[],"q":[]},"ahK":{"af":["a7L"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b5
return{V:w("a8<a9>"),O:w("a8<x>"),e:w("a8<ox>"),S:w("a8<fW>"),s:w("a8<o>"),p:w("a8<q>"),t:w("a8<K>"),X:w("ag<ox>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("or"),_:w("DS"),k:w("ox"),N:w("o"),Y:w("bi<a2>"),W:w("dd<o>"),J:w("lr<K>"),j:w("lr<qM?>"),E:w("tr<cX>"),q:w("YA"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_D=new A.M(983224,"MaterialIcons",!1)
D.aTj=new A.ab(D.a_D,48,B.br,null,null,null)
D.d_X=new A.A("Powered off",null,B.amT,null,null,null,null,null,null,null,null,null)
D.bP6=w([D.aTj,B.O,D.d_X],x.p)
D.aDB=new A.eu(B.an,B.i,B.a0,B.n,null,B.q,null,0,D.bP6,null)
D.avx=new A.di(B.K,null,null,D.aDB,null)
D.cMk=new A.aa(18,18,B.TC,null)
D.avP=new A.di(B.K,null,null,D.cMk,null)
D.awH=new A.h1(2,null,null,null,null,B.ab,null,null,null,null)
D.azZ=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aAA=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aCf=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aG8=new A.V(0,3,0,3)
D.aGk=new A.V(10,0,10,88)
D.aGN=new A.V(12,6,12,10)
D.aH9=new A.V(14,8,14,6)
D.aIs=new A.V(20,8,20,20)
D.Y2=new A.V(8,6,15,8)
D.aOR=new A.M(983222,"MaterialIcons",!1)
D.aQA=new A.ab(B.k1,26,B.a8,null,null,null)
D.aQD=new A.ab(B.ZM,18,null,null,null,null)
D.aQS=new A.ab(B.tn,14,B.ab,null,null,null)
D.aPa=new A.M(983420,"MaterialIcons",!1)
D.aRH=new A.ab(D.aPa,14,B.ab,null,null,null)
D.aNb=new A.M(62895,"MaterialIcons",!1)
D.aRM=new A.ab(D.aNb,14,B.ab,null,null,null)
D.aTc=new A.ab(B.th,16,B.ab,null,null,null)
D.aUa=new A.ab(B.dF,20,B.ab,null,null,null)
D.aUY=new A.ab(B.im,20,null,null,null,null)
D.aVf=new A.ab(B.hl,16,null,null,null,null)
D.bSS=w([B.aN,B.W],x.O)
D.a1i=new A.ac(B.aC,B.aI,B.E,D.bSS,null,null)
D.cFS=new A.aM("NGMY OS","14.2.1")
D.cEB=new A.aM("VirtualDroid","13.8.4")
D.cEA=new A.aM("NGMY OS","15.0.0")
D.cFo=new A.aM("VirtualDroid","14.1.2")
D.cEy=new A.aM("NGMY Tab OS","12.9.7")
D.cEw=new A.aM("NGMY OS","13.5.3")
D.cEl=new A.aM("VirtualDroid","15.2.0")
D.cEY=new A.aM("NGMY OS","14.8.1")
D.cFu=new A.aM("NGMY Tab OS","13.2.4")
D.cG3=new A.aM("VirtualDroid","12.6.9")
D.cEd=new A.aM("NGMY OS","16.0.1")
D.cE0=new A.aM("VirtualDroid","14.9.0")
D.cFJ=new A.aM("NGMY Tab OS","14.0.3")
D.cEK=new A.aM("NGMY OS","13.1.8")
D.cEc=new A.aM("VirtualDroid","13.4.5")
D.cEv=new A.aM("NGMY OS","15.3.2")
D.cFv=new A.aM("NGMY Tab OS","12.4.1")
D.cFM=new A.aM("VirtualDroid","16.1.0")
D.cEX=new A.aM("NGMY OS","14.4.6")
D.cFT=new A.aM("VirtualDroid","15.0.8")
D.bS4=w([D.cFS,D.cEB,D.cEA,D.cFo,D.cEy,D.cEw,D.cEl,D.cEY,D.cFu,D.cG3,D.cEd,D.cE0,D.cFJ,D.cEK,D.cEc,D.cEv,D.cFv,D.cFM,D.cEX,D.cFT],A.b5("a8<+(o,o)>"))
D.x7=w([B.a8,B.fe],x.O)
D.cI9=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cHI=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cHD=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cHM=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cHz=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cHO=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cIb=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cHA=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cHH=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cHQ=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cHy=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cI3=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cI0=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cHG=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cHY=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cHX=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cHx=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cHL=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cHV=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cI_=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a81=w([D.cI9,D.cHI,D.cHD,D.cHM,D.cHz,D.cHO,D.cIb,D.cHA,D.cHH,D.cHQ,D.cHy,D.cI3,D.cI0,D.cHG,D.cHY,D.cHX,D.cHx,D.cHL,D.cHV,D.cI_],A.b5("a8<+(o,o,a2,a2,o)>"))
D.c0q=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afB=new C.KR(0,"youtube")
D.afC=new C.KR(1,"tiktok")
D.P4=new C.KR(2,"instagram")
D.afD=new C.KR(3,"facebook")
D.cxa=new C.KR(4,"other")
D.cLS=new A.aa(3,null,null,null)
D.cMH=new A.i5(4,10,8,0.52,null)
D.d1e=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cQ6=new A.aT(D.d1e,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cTs=new A.P(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d15=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d8J=new A.A("Open in YouTube",null,B.j2,null,null,null,null,null,null,null,null,null)
D.dcH=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.ddw=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.ddE=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dkO=new C.aPt(null)})();(function staticFields(){$.dHQ=20
$.azG=null
$.bss=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eu9","Hc",()=>A.ac8(0))
w($,"eua","Q3",()=>A.ac8(null))})()};
(a=>{a["xpglJIRAW00urVabuXY1YZc0AOE="]=a.current})($__dart_deferred_initializers__);