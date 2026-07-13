((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
erh(d,e){A.a4(d,!1).cv(A.eG(new C.dsm(e),!0,null,x.H))},
a_B(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_B=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Q4()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bc(n,B.aN,B.aB),t)
w=3
return A.b(A.dv(B.L,new C.dsl(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_B)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e6p(r)
if(q==null){d.G(x.q).f.S(D.cQu)
w=1
break}w=4
return A.b(A.bJ(B.ij,null,x.H),$async$a_B)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dIR=n
p=C.e6j(n)
n=$.He()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dwu(q)
d.G(x.q).f.S(A.bm(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
dIU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aX(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aX(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.ox(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
KQ(d){return C.e6s(d)},
e6s(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
k=A.dh(k,new C.bsM(),k.$ti.j("F.E"),x.k)
j=A.R(k).j("ai<F.E>")
i=A.y(new A.ai(k,new C.bsN(),j),j.j("F.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dIW(q)
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
case 19:m=C.dIU(A.U(n,x.N,x.z))
l=C.dIW(A.a([m],x.e))
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
case 18:case 14:q=C.e6q()
w=22
return A.b(C.KP(a3,q),$async$KQ)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KQ,v)},
dIW(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.bsE(),w).eC(0),u=new A.E(d,new C.bsF(),w).eC(0),t=new A.E(d,new C.bsG(),w).eC(0),s=new A.E(d,new C.bsH(),w).eC(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dwv(null,q,u,t,v,s));++q}return r},
azM(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$azM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KQ(d),$async$azM)
case 3:t=f
s=x.N
r=J.c7(t)
q=r.dj(t,new C.bsI(),s).eC(0)
p=r.dj(t,new C.bsJ(),s).eC(0)
o=r.dj(t,new C.bsK(),s).eC(0)
n=r.dj(t,new C.bsL(),s).eC(0)
m=C.dwv(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.KP(d,t),$async$azM)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$azM,v)},
KP(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$KP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$KP)
case 2:u=g
t=B.b.i(d)
s=J.aZ(e,new C.bsD(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$KP)
case 3:return A.h(null,v)}})
return A.i($async$KP,v)},
e6q(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dz(20,x.k)
for(w=0;w<20;++w)q[w]=C.dwv(w,w,t,s,u,r)
return q},
dwv(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jS(),h=d==null,g=D.a8b[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8b[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bL(256)
n=new A.E(p,new C.bsC(),A.Y(p).j("E<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bL(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b5(B.l.h_(i.bL(256),16),2,"0")
s=B.h.bj(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c0M[w]
j=D.bSr[w]
return new C.ox("vd_"+1000*Date.now()+"_"+e+"_"+i.bL(99999),"Device "+B.b.b5(B.l.q(e+1),2,"0"),u,k,C.e6r(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e6r(d,e){var w,v=J.dz(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b5(B.l.h_(d.bL(256),16),2,"0")
return B.h.fw(v)},
dsm:function dsm(d){this.a=d},
dsl:function dsl(d,e){this.a=d
this.b=e},
dsh:function dsh(d){this.a=d},
dsi:function dsi(d){this.a=d},
dsj:function dsj(d){this.a=d},
dsk:function dsk(d,e){this.a=d
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
bsM:function bsM(){},
bsN:function bsN(){},
bsE:function bsE(){},
bsF:function bsF(){},
bsG:function bsG(){},
bsH:function bsH(){},
bsI:function bsI(){},
bsJ:function bsJ(){},
bsK:function bsK(){},
bsL:function bsL(){},
bsD:function bsD(){},
bsC:function bsC(){},
KO:function KO(d,e){this.c=d
this.a=e},
ahO:function ahO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cRo:function cRo(){},
cRn:function cRn(d,e){this.a=d
this.b=e},
cRl:function cRl(d){this.a=d},
cRm:function cRm(d,e){this.a=d
this.b=e},
cRp:function cRp(d){this.a=d},
cRu:function cRu(d){this.a=d},
cRt:function cRt(d){this.a=d},
cRv:function cRv(d,e){this.a=d
this.b=e},
cRs:function cRs(d,e,f){this.a=d
this.b=e
this.c=f},
cRr:function cRr(d,e){this.a=d
this.b=e},
cRq:function cRq(d,e){this.a=d
this.b=e},
cRw:function cRw(d){this.a=d},
XM:function XM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMW:function aMW(d,e){this.c=d
this.a=e},
KN:function KN(d,e){this.c=d
this.a=e},
aO8:function aO8(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cRi:function cRi(d){this.a=d},
cRj:function cRj(d){this.a=d},
cRk:function cRk(d){this.a=d},
cRh:function cRh(d,e){this.a=d
this.b=e},
cRe:function cRe(d){this.a=d},
cRf:function cRf(d){this.a=d},
cRd:function cRd(d,e){this.a=d
this.b=e},
cRg:function cRg(d){this.a=d},
cRc:function cRc(d){this.a=d},
aVb:function aVb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aVc:function aVc(d,e,f){this.c=d
this.d=e
this.a=f},
aOe:function aOe(d,e){this.c=d
this.a=e},
aVa:function aVa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d63:function d63(d){this.a=d},
d64:function d64(d){this.a=d},
aPz:function aPz(d){this.a=d},
aJ6:function aJ6(d,e){this.c=d
this.a=e},
e6p(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e6o(v)
if(u!=null)return new C.qN(w,C.dwt(u,!1),D.afM,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e6n(v)
if(t!=null)return new C.qN(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afN,"TikTok",q)
s=C.e6m(w,v)
if(s!=null)return s
r=C.e6l(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qN(w,w,D.cxx,"Video",q)
return q},
e6m(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qN(d,"https://www.instagram.com/reel/"+w+u,D.Pf,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qN(d,"https://www.instagram.com/p/"+w+u,D.Pf,t,null)}return null},
e6l(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qN(d,"https://www.facebook.com/plugins/video.php?href="+A.fd(2,d,B.bf,!1)+"&show_text=false&width=734",D.afO,"Facebook",null)},
e6o(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e6n(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
KR:function KR(d,e){this.a=d
this.b=e},
qN:function qN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7O:function a7O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aO9:function aO9(d,e){var _=this
_.d=$
_.cz$=d
_.aI$=e
_.c=_.a=null},
aPE:function aPE(d,e){this.c=d
this.a=e},
cWb:function cWb(d){this.a=d},
cWc:function cWc(d){this.a=d},
G7:function G7(d,e){this.c=d
this.a=e},
amX:function amX(){},
dIV(d,e,f,g,h,i){return new C.a7P(i,f,h,e,g,d)},
epV(d){var w=window
w.toString
A.fQ(w,"message",new C.dor(d),!1,x._)},
a7P:function a7P(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahP:function ahP(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cRx:function cRx(d){this.a=d},
cRG:function cRG(d){this.a=d},
cRD:function cRD(d){this.a=d},
cRC:function cRC(d){this.a=d},
cRE:function cRE(d){this.a=d},
cRB:function cRB(d){this.a=d},
cRF:function cRF(d){this.a=d},
cRA:function cRA(d){this.a=d},
cRz:function cRz(d){this.a=d},
cRy:function cRy(d){this.a=d},
dor:function dor(d){this.a=d},
e6h(){var w,v,u
try{v=A.xU()
w=v.gv2(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cD(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dwt(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bj(w,"&")},
bsA(d){var w=A.am(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dIQ(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e6i(d,e,f){var w,v,u=C.bsA(d)
if(u!=null){if(f){w=C.e6h()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dIQ(C.dwt(u,e))}return C.dIQ(d)},
e6j(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
e6k(d){var w
if($.Q4().a==null)return!1
w=$.He().a
return d>=w&&d<w+4},
dIT(){var w=$.azL
if(w!=null)w.ac(0)
$.azL=null
$.He().sv(0,0)},
dIS(){var w,v,u,t=$.Q4()
if(t.a==null)return
w=$.azL
if(w!=null)w.ac(0)
v=$.dIR
if(v<=4){t=t.a
t.toString
C.dwu(t)
return}w=$.He()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dwu(t)},
dwu(d){var w=$.azL
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
default:w=null}$.azL=A.dy(A.dq(0,0,0,0,0,w),C.eq9())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oe.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.L(B.a8.k(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fx,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.ci,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hI,w,w,w)}}
C.ox.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.KO.prototype={
V(){return new C.ahO(A.a([],x.e))},
gdK(){return this.c}}
C.ahO.prototype={
a_(){var w=this
w.a5()
$.He().au(0,w.gaz4())
C.epV(w.gbqp())
w.ZW()},
bpP(){if(this.c!=null)this.p(new C.cRo())},
bqq(){C.dIS()},
n(){$.He().Z(0,this.gaz4())
C.dIT()
$.Q4().sv(0,null)
this.a3()},
ZW(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KQ(t.a.c),$async$ZW)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cRn(t,s))
$.bsB=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
VL(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cRl(t))
w=3
return A.b(C.azM(t.a.c),$async$VL)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cRm(t,s))
$.bsB=J.a3(t.d)
t.c.G(x.q).f.S(A.bm(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$VL,v)},
bsq(d){var w=this.c
w.toString
A.a4(w,!1).cv(A.eG(new C.cRp(d),!1,null,x.H))},
bt3(){var w=this.c
w.toString
return C.a_B(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fn:B.bx,s=A.bY(!0,A.v(A.a([new A.I(D.Yd,new A.ja(new C.cRu(w),v),v),A.H(w.e?B.nw:new A.ls($.Q4(),new C.cRv(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.j,0,B.q),!1,B.ad,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.ath(B.a8,B.HT,B.mN,D.de9,w.e?v:new C.cRw(w)),v)}}
C.XM.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.k(0.18),B.dt,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7O(n,!0,!C.e6k(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.k6,B.nF,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.j,0,B.q),B.k,B.zM,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.S,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bW(p,A.f8(A.v(A.a([new C.aMW(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.Cm,B.a8.k(0.85),u,u,9),D.cMe,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aGn,u,u,u)],w),B.n,u,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,u,u,new A.p(u,u,r,s,q,D.a1v,B.p),u,u,u,u,B.hj,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a4)}}
C.aMW.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gai(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tq,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.Y0,w,w,w)}}
C.KN.prototype={
V(){return new C.aO8()}}
C.aO8.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fn:B.bx,t=A.aS(w,w,w,w,B.a0A,w,w,w,new C.cRi(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.bY(!0,A.v(A.a([new A.I(D.Yd,A.G(A.a([t,A.H(new A.KC(A.G(A.a([A.H(new A.I(B.jk,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.S,!0,w,A.aL(!1,w,!0,new A.I(B.b9,A.W(B.ho,B.a8,w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cRj(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a4)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.ls($.Q4(),new C.cRk(this),w,w,x.j),1)],r),B.n,w,B.i,B.j,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aVb.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.k(0.35),B.f1,28),new A.a9(0,B.H,B.A.k(0.45),B.d8,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dIV(new A.d7(v+"_full_"+u,x.W),!1,u,!1,w.gaP_(),v+"_full")
w=v}else w=new C.aOe(t.r,s)}else w=new C.aJ6(m,s)
else w=D.dlk
return A.t(s,A.bW(n,A.f8(A.v(A.a([new C.aVc(m,l,s),A.H(w,1),new C.aVa(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,s,s,new A.p(s,s,o,q,p,D.a1v,B.p),s,r*2.05,s,s,B.bR,s,s,r)}}
C.aVc.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dm(r)
r=A.hj(r)
w=new A.dH(q,r)
v=w.gKb()===0?12:w.gKb()
r=B.b.b5(B.l.q(r),2,"0")
q=(q<12?B.hf:B.jg)===B.hf?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nh,s,s,s),B.aW,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.by,D.aRZ,B.en,D.aR8,B.en,D.aS3],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.Ce,B.a8.k(0.9),s,s,12),B.en,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aHr,s,s,s)}}
C.aOe.prototype={
B(d){var w=null
return A.t(w,A.aF(A.v(A.a([A.W(B.BE,B.e.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eN(D.aVy,D.d1y,this.c,A.e8(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aG(B.a8.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a0,0,B.q),w,w,w),B.k,B.zM,w,w,w,w,w,w,w,w,w,1/0)}}
C.aVa.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayW(B.C8,"YouTube",s===0,r,new C.d63(u))
s=u.ayW(B.kI,"Device",s===1,r,new C.d64(u))
w=r?"Power off":"Power on"
v=r?D.a_N:D.aP8
return A.t(t,A.G(A.a([q,B.aj,s,B.aW,A.aS(t,t,t,t,A.W(v,r?B.bN:B.hq,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aH2,t,t,t)},
ayW(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.av
v=f&&g?B.a8.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aC(!1,B.S,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nV,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a4),1)}}
C.aPz.prototype={
B(d){return D.avG}}
C.aJ6.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.jG,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tY("Serial",u.c),q=w.tY("Model",u.d),p=w.tY("Device ID",u.e),o=w.tY("IMEI",u.r),n=w.tY("MAC",u.f),m=w.tY("OS",u.w+" "+u.x),l=w.tY("Location",u.y+", "+u.z),k=w.tY("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tY("Timezone",u.at)
u=u.ax
return A.e3(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tY("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b9,v,v,B.am,!1)},
tY(d,e){var w=null
return new A.I(B.d7,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cw,A.d(e,w,w,w,w,w,w,D.cTS,w,w,w)],x.p),B.G,w,B.i,B.j,0,B.q),w)}}
C.KR.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qN.prototype={
gaP_(){var w=this.c
return w===D.afM||w===D.afN||w===D.Pf||w===D.afO}}
C.a7O.prototype={
V(){return new C.aO9(null,null)}}
C.aO9.prototype={
a_(){this.a5()
var w=A.bn(null,B.rE,null,1,null,this)
w.h5(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aZa()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.p(t,t,t,t,t,new A.ac(B.c2,B.bY,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.bo),q=x.Y,p=u.d
p===$&&A.c()
p=A.cf(B.d6,p,t)
w=B.e.k(0.92)
q=A.aF(new A.cK(new A.aY(p,new A.bh(0.72,1,q),q.j("aY<bi.T>")),!1,A.W(B.k6,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nF
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aPE(s,t),r,q,A.az(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.az(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.az(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aA(B.ag,t,B.b5,B.t,s,t)}}
C.aPE.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.la(u,B.K,new C.cWb(this),B.bP,!0,w,w,new C.cWc(this),w)
return new C.G7(v,w)}}
C.G7.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.mp,B.U7],x.O),B.k6)
break
case 1:w=new A.aN(A.a([B.zM,D.aAL],x.O),B.lH)
break
case 2:w=new A.aN(A.a([D.aCs,D.aA9],x.O),B.BN)
break
case 3:w=new A.aN(A.a([B.W,B.dF],x.O),B.BU)
break
case 4:w=new A.aN(A.a([B.aw,B.aM],x.O),B.oa)
break
default:w=u}v=w.a
return A.t(u,A.aF(A.W(w.b,B.a8.k(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amX.prototype={
n(){var w=this,v=w.aI$
if(v!=null)v.Z(0,w.gd9())
w.aI$=null
w.a3()},
bl(){this.bz()
this.bw()
this.da()}}
C.a7P.prototype={
V(){return new C.ahP()}}
C.ahP.prototype={
a94(d,e){var w,v=C.bsA(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dwt(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e6i(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bIJ(){var w,v=this
if(v.w)return
v.p(new C.cRx(v))
w=v.e
if(w!=null)v.a94(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aI()
u.d=w
try{$.yT()
$.o5().qC(w,new C.cRG(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cRz(v))
w=v.e
w.toString
v.a94(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a00,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.f8(A.aF(new A.I(new A.T(12,12,12,12),A.v(w,B.n,n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.IM(n,B.om,w)],v)
if(o.f)w.push(A.f8(A.aF(new A.aa(28,28,D.awQ,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.Mi,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.ed(0,A.aC(!1,B.S,!0,n,A.aL(!1,n,!0,A.aF(A.t(n,A.G(A.a([q,B.aj,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.Kb,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbII(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a4)))}v=C.bsA(o.a.d)
if(v!=null)w.push(A.az(8,A.jd(D.aTv,D.d9f,new C.cRy(o),A.j1(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hI,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aA(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ox)","~()","KO(O)","ox(Z<@,@>)","a1(ox)","Z<o,@>(ox)","aD<~>()","KN(O)","ls<K>(O,qN?,q?)","XM(O,K)","ut(O,qN?,q?)","G7(O,an,dG?)"])
C.dsm.prototype={
$1(d){return new C.KO(this.a,null)},
$S:z+2}
C.dsl.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e7,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.k(0.22),B.f1,32)],x.V),g=A.L(m?B.cc:B.a8.k(0.18),B.u,1),f=A.m(28),e=B.a8.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.t(n,D.aQR,B.k,n,n,new A.p(B.a8.k(0.18),n,A.L(B.a8.k(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f3,w,A.aS(n,n,n,n,A.W(B.d0,m?B.av:B.d_,n,n,n),n,n,n,new C.dsh(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a7,B.E,j,n,n),B.p),n,n,n,n,B.Kh,n,n,n)
e=A.eC(B.cS,A.a([new C.Oe("YouTube",B.Me,m,n),new C.Oe("TikTok",B.lH,m,n),new C.Oe("Instagram",B.BN,m,n),new C.Oe("Facebook",B.BU,m,n)],v),B.cJ,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ch:B.iK,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bx
r=A.W(B.fs,B.a8.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cc:B.aL
u=A.v(A.a([e,B.aQ,A.aM(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.ST),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.a9,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.af,n,n,n,n)],v),B.ar,n,B.i,B.j,0,B.q)
e=A.jd(D.aQU,D.ddd,new C.dsi(d),A.j1(n,n,n,n,n,n,n,n,n,n,n,m?B.bt:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.T(12,0,12,12+l.f.d),A.cw(A.bW(f,A.v(A.a([j,new A.I(B.XL,u,n),new A.I(D.aIM,A.G(A.a([e,B.aW,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dsj(d),n,n),B.aj,A.dD(D.aVg,D.de1,new C.dsk(d,w),A.bw(B.a8,n,n,n,B.e,n,B.Kb,n,new A.by(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,n,B.i,B.a0,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.E,i,n,n),B.p),B.bo),n)},
$S:84}
C.dsh.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dsi.prototype={
$0(){C.dIT()
$.Q4().sv(0,null)
A.a4(this.a,!1).O(null)},
$S:0}
C.dsj.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dsk.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a4(this.a,!1).O(w)
return null},
$S:0}
C.bsM.prototype={
$1(d){return C.dIU(A.U(d,x.N,x.z))},
$S:z+3}
C.bsN.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bsE.prototype={
$1(d){return d.c},
$S:z+0}
C.bsF.prototype={
$1(d){return d.r},
$S:z+0}
C.bsG.prototype={
$1(d){return d.f},
$S:z+0}
C.bsH.prototype={
$1(d){return d.at},
$S:z+0}
C.bsI.prototype={
$1(d){return d.c},
$S:z+0}
C.bsJ.prototype={
$1(d){return d.r},
$S:z+0}
C.bsK.prototype={
$1(d){return d.f},
$S:z+0}
C.bsL.prototype={
$1(d){return d.at},
$S:z+0}
C.bsD.prototype={
$1(d){return d.a9()},
$S:z+5}
C.bsC.prototype={
$1(d){return B.b.b5(B.l.h_(d,16),2,"0").toUpperCase()},
$S:85}
C.cRo.prototype={
$0(){},
$S:0}
C.cRn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cRl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cRm.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cRp.prototype={
$1(d){return new C.KN(this.a,null)},
$S:z+7}
C.cRu.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,B.a0K,w,w,w,new C.cRt(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fM(A.G(A.a([new A.ov(D.xg,e,g,36,B.Ce,w),B.aP,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fX(B.h.gT(D.xg).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.S,!0,w,A.aL(!1,w,!0,new A.I(B.bR,A.W(B.ho,A.ao(B.h.gT(D.xg),B.h.gai(D.xg),e),w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbt2(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a4)],s),B.n,w,B.i,B.j,0,w,w),D.xg,w,g,B.fH,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:328}
C.cRt.prototype={
$0(){return A.a4(this.a,!1).eA()},
$S:0}
C.cRv.prototype={
$3(d,e,f){return new A.ls($.He(),new C.cRs(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cRs.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DY(d,k,x.Q)
w=w==null?k:w.glJ()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.k(0.12)
s=A.m(12)
r=A.L(B.a8.k(0.35),B.u,1)
q=A.W(B.k6,B.a8,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.He().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.aj,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.ds,B.fq,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bW(s,new A.j5(1.7777777777777777,C.dIV(new A.d7("fleet_master_"+r,x.W),!0,r,!0,j.gaP_(),"fleet_master"),k),B.aA),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wn(0,B.t,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.kS(new A.I(B.K6,A.v(u,B.G,k,B.i,B.j,0,B.q),k),k),new A.oI(D.aGy,A.aDS(new A.nS(new C.cRr(i,j),J.a3(i.d),!1,!0,!0,A.tT(),k),D.cN4),k)],w))},
$S:1772}
C.cRr.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.XM(v,e,J.a3(w.d),new C.cRq(w,v),this.b,null)},
$S:z+9}
C.cRq.prototype={
$0(){return this.a.bsq(this.b)},
$S:0}
C.cRw.prototype={
$0(){this.a.VL()
return null},
$S:0}
C.cRi.prototype={
$0(){return A.a4(this.a,!1).eA()},
$S:0}
C.cRj.prototype={
$0(){C.a_B(this.a,$.bsB)
return null},
$S:0}
C.cRk.prototype={
$3(d,e,f){return A.eX(new C.cRh(this.a,e))},
$S:z+10}
C.cRh.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aF(A.cA(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aQ,new C.aVb(u,s.a.c,s.e,s.d,new C.cRe(s),new C.cRf(s),new C.cRg(s),t,v)],x.p),B.n,v,B.i,B.j,0,B.q),B.t,v,B.F,v,B.pC,v,v,B.am),v,v,v)},
$S:1773}
C.cRe.prototype={
$0(){var w=this.a.c
w.toString
C.a_B(w,$.bsB)
return null},
$S:0}
C.cRf.prototype={
$1(d){var w=this.a
return w.p(new C.cRd(w,d))},
$S:35}
C.cRd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cRg.prototype={
$0(){var w=this.a
return w.p(new C.cRc(w))},
$S:0}
C.cRc.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d63.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d64.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cWb.prototype={
$3(d,e,f){return new C.G7(this.a.c,null)},
$S:z+11}
C.cWc.prototype={
$3(d,e,f){if(f==null)return e
return new A.aA(B.ag,null,B.b5,B.t,A.a([new C.G7(this.a.c,null),D.avY],x.p),null)},
$C:"$3",
$R:3,
$S:509}
C.cRx.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cRG.prototype={
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
w.a94(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fQ(v,"load",new C.cRD(w),!1,u)
v=w.e
v.toString
A.fQ(v,"error",new C.cRE(w),!1,u)
A.bJ(B.jW,new C.cRF(w),x.H)
w=w.e
w.toString
return w},
$S:621}
C.cRD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cRC(w))},
$S:42}
C.cRC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cRE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cRB(w))},
$S:42}
C.cRB.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cRF.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cRA(w))},
$S:12}
C.cRA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cRz.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cRy.prototype={
$0(){var w,v=C.bsA(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kl.Kw(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dor.prototype={
$1(d){var w,v,u,t,s=new A.xX([],[]).zM(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1774};(function aliases(){var w=C.amX.prototype
w.aZa=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahO.prototype,"gaz4","bpP",1)
w(u,"gbqp","bqq",1)
w(u,"gbt2","bt3",6)
w(C.ahP.prototype,"gbII","bIJ",1)
v(C,"eq9","dIS",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zb,[C.dsm,C.dsl,C.bsM,C.bsN,C.bsE,C.bsF,C.bsG,C.bsH,C.bsI,C.bsJ,C.bsK,C.bsL,C.bsD,C.bsC,C.cRp,C.cRu,C.cRv,C.cRs,C.cRk,C.cRf,C.cWb,C.cWc,C.cRG,C.cRD,C.cRE,C.dor])
v(A.a15,[C.dsh,C.dsi,C.dsj,C.dsk,C.cRo,C.cRn,C.cRl,C.cRm,C.cRt,C.cRq,C.cRw,C.cRi,C.cRj,C.cRe,C.cRd,C.cRg,C.cRc,C.d63,C.d64,C.cRx,C.cRC,C.cRB,C.cRF,C.cRA,C.cRz,C.cRy])
v(A.as,[C.Oe,C.XM,C.aMW,C.aVb,C.aVc,C.aOe,C.aVa,C.aPz,C.aJ6,C.aPE,C.G7])
v(A.an,[C.ox,C.qN])
v(A.ad,[C.KO,C.KN,C.a7O,C.a7P])
v(A.af,[C.ahO,C.aO8,C.amX,C.ahP])
v(A.a16,[C.cRr,C.cRh])
u(C.KR,A.aK1)
u(C.aO9,C.amX)
w(C.amX,A.dL)})()
A.dMr(b.typeUniverse,JSON.parse('{"KO":{"ad":[],"q":[]},"XM":{"as":[],"q":[]},"KN":{"ad":[],"q":[]},"Oe":{"as":[],"q":[]},"ahO":{"af":["KO"]},"aMW":{"as":[],"q":[]},"aO8":{"af":["KN"]},"aVb":{"as":[],"q":[]},"aVc":{"as":[],"q":[]},"aOe":{"as":[],"q":[]},"aVa":{"as":[],"q":[]},"aPz":{"as":[],"q":[]},"aJ6":{"as":[],"q":[]},"a7O":{"ad":[],"q":[]},"G7":{"as":[],"q":[]},"aO9":{"af":["a7O"]},"aPE":{"as":[],"q":[]},"a7P":{"ad":[],"q":[]},"ahP":{"af":["a7P"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b5
return{V:w("a8<a9>"),O:w("a8<x>"),e:w("a8<ox>"),S:w("a8<fX>"),s:w("a8<o>"),p:w("a8<q>"),t:w("a8<K>"),X:w("ag<ox>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("or"),_:w("DV"),k:w("ox"),N:w("o"),Y:w("bh<a2>"),W:w("d7<o>"),J:w("ls<K>"),j:w("ls<qN?>"),E:w("ts<cX>"),q:w("YC"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_N=new A.M(983224,"MaterialIcons",!1)
D.aTC=new A.ab(D.a_N,48,B.bq,null,null,null)
D.d0q=new A.A("Powered off",null,B.an1,null,null,null,null,null,null,null,null,null)
D.bPu=w([D.aTC,B.O,D.d0q],x.p)
D.aDP=new A.eE(B.am,B.i,B.a0,B.n,null,B.q,null,0,D.bPu,null)
D.avG=new A.dj(B.K,null,null,D.aDP,null)
D.cMI=new A.aa(18,18,B.TP,null)
D.avY=new A.dj(B.K,null,null,D.cMI,null)
D.awQ=new A.h2(2,null,null,null,null,B.ab,null,null,null,null)
D.aA9=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aAL=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aCs=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aGn=new A.T(0,3,0,3)
D.aGy=new A.T(10,0,10,88)
D.aH2=new A.T(12,6,12,10)
D.aHr=new A.T(14,8,14,6)
D.aIM=new A.T(20,8,20,20)
D.Yd=new A.T(8,6,15,8)
D.aP8=new A.M(983222,"MaterialIcons",!1)
D.aQR=new A.ab(B.k6,26,B.a8,null,null,null)
D.aQU=new A.ab(B.ZV,18,null,null,null,null)
D.aR8=new A.ab(B.tq,14,B.ab,null,null,null)
D.aPt=new A.M(983420,"MaterialIcons",!1)
D.aRZ=new A.ab(D.aPt,14,B.ab,null,null,null)
D.aNt=new A.M(62895,"MaterialIcons",!1)
D.aS3=new A.ab(D.aNt,14,B.ab,null,null,null)
D.aTv=new A.ab(B.tk,16,B.ab,null,null,null)
D.aVg=new A.ab(B.io,20,null,null,null,null)
D.aVy=new A.ab(B.ho,16,null,null,null,null)
D.bTe=w([B.aM,B.W],x.O)
D.a1v=new A.ac(B.aC,B.aI,B.E,D.bTe,null,null)
D.cGg=new A.aN("NGMY OS","14.2.1")
D.cF_=new A.aN("VirtualDroid","13.8.4")
D.cEZ=new A.aN("NGMY OS","15.0.0")
D.cFN=new A.aN("VirtualDroid","14.1.2")
D.cEX=new A.aN("NGMY Tab OS","12.9.7")
D.cEV=new A.aN("NGMY OS","13.5.3")
D.cEK=new A.aN("VirtualDroid","15.2.0")
D.cFm=new A.aN("NGMY OS","14.8.1")
D.cFT=new A.aN("NGMY Tab OS","13.2.4")
D.cGs=new A.aN("VirtualDroid","12.6.9")
D.cEC=new A.aN("NGMY OS","16.0.1")
D.cEp=new A.aN("VirtualDroid","14.9.0")
D.cG7=new A.aN("NGMY Tab OS","14.0.3")
D.cF8=new A.aN("NGMY OS","13.1.8")
D.cEB=new A.aN("VirtualDroid","13.4.5")
D.cEU=new A.aN("NGMY OS","15.3.2")
D.cFU=new A.aN("NGMY Tab OS","12.4.1")
D.cGa=new A.aN("VirtualDroid","16.1.0")
D.cFl=new A.aN("NGMY OS","14.4.6")
D.cGh=new A.aN("VirtualDroid","15.0.8")
D.bSr=w([D.cGg,D.cF_,D.cEZ,D.cFN,D.cEX,D.cEV,D.cEK,D.cFm,D.cFT,D.cGs,D.cEC,D.cEp,D.cG7,D.cF8,D.cEB,D.cEU,D.cFU,D.cGa,D.cFl,D.cGh],A.b5("a8<+(o,o)>"))
D.xg=w([B.a8,B.fh],x.O)
D.cIy=new A.eS(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cI6=new A.eS(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cI1=new A.eS(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cIa=new A.eS(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cHY=new A.eS(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cIc=new A.eS(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cIA=new A.eS(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cHZ=new A.eS(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cI5=new A.eS(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cIe=new A.eS(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cHX=new A.eS(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cIs=new A.eS(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cIp=new A.eS(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cI4=new A.eS(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cIm=new A.eS(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cIl=new A.eS(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cHW=new A.eS(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cI9=new A.eS(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cIj=new A.eS(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cIo=new A.eS(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8b=w([D.cIy,D.cI6,D.cI1,D.cIa,D.cHY,D.cIc,D.cIA,D.cHZ,D.cI5,D.cIe,D.cHX,D.cIs,D.cIp,D.cI4,D.cIm,D.cIl,D.cHW,D.cI9,D.cIj,D.cIo],A.b5("a8<+(o,o,a2,a2,o)>"))
D.c0M=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afM=new C.KR(0,"youtube")
D.afN=new C.KR(1,"tiktok")
D.Pf=new C.KR(2,"instagram")
D.afO=new C.KR(3,"facebook")
D.cxx=new C.KR(4,"other")
D.cMe=new A.aa(3,null,null,null)
D.cN4=new A.i7(4,10,8,0.52,null)
D.d1H=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cQu=new A.aT(D.d1H,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cTS=new A.P(!0,B.e,null,null,null,null,11,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d1y=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d9f=new A.A("Open in YouTube",null,B.j4,null,null,null,null,null,null,null,null,null)
D.ddd=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.de1=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.de9=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dlk=new C.aPz(null)})();(function staticFields(){$.dIR=20
$.azL=null
$.bsB=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ev9","He",()=>A.acc(0))
w($,"eva","Q4",()=>A.acc(null))})()};
(a=>{a["6ecQOS2KTUV70QDdW+N8Rd3Lyyo="]=a.current})($__dart_deferred_initializers__);