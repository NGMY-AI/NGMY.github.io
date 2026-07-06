((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egg(d,e){A.a7(d,!1).cA(A.eG(new C.dil(e),!0,null,x.H))},
Zj(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Zj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.P_()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b3(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dik(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zj)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dWz(r)
if(q==null){d.G(x.q).f.R(D.cKc)
w=1
break}w=4
return A.b(A.bR(B.i9,null,x.H),$async$Zj)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dyD=n
p=C.dWt(n)
n=$.Go()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dmv(q)
d.G(x.q).f.R(A.bq(null,null,null,null,null,B.x,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zj,v)},
dyG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aZ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aZ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.od(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JU(d){return C.dWC(d)},
dWC(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JU=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$JU)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aO(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aG(0,a0,null)
w=x.a.b(r)&&J.cK(r)?10:11
break
case 10:k=J.eR(r,x.f)
k=A.ds(k,new C.bnq(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.B(new A.ag(k,new C.bnr(),j),j.j("G.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dyI(q)
w=12
return A.b(C.JT(a3,p),$async$JU)
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
case 9:case 5:o=A.aO(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dyG(A.S(n,x.N,x.z))
l=C.dyI(A.a([m],x.e))
w=21
return A.b(C.JT(a3,l),$async$JU)
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
case 18:case 14:q=C.dWA()
w=22
return A.b(C.JT(a3,q),$async$JU)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JU,v)},
dyI(d){var w=A.X(d).j("D<1,o>"),v=new A.D(d,new C.bni(),w).eJ(0),u=new A.D(d,new C.bnj(),w).eJ(0),t=new A.D(d,new C.bnk(),w).eJ(0),s=new A.D(d,new C.bnl(),w).eJ(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dmw(null,q,u,t,v,s));++q}return r},
awu(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JU(d),$async$awu)
case 3:t=f
s=x.N
r=J.ch(t)
q=r.dd(t,new C.bnm(),s).eJ(0)
p=r.dd(t,new C.bnn(),s).eJ(0)
o=r.dd(t,new C.bno(),s).eJ(0)
n=r.dd(t,new C.bnp(),s).eJ(0)
m=C.dmw(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JT(d,t),$async$awu)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awu,v)},
JT(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$JT)
case 2:u=g
t=B.b.i(d)
s=J.b2(e,new C.bnh(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.aw("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JT)
case 3:return A.h(null,v)}})
return A.i($async$JT,v)},
dWA(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dmw(w,w,t,s,u,r)
return q},
dmw(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6h[B.l.a5(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6h[B.l.a5(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bng(),A.X(p).j("D<1,o>")).fq(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fq(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.hv(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a5(e,20)
k=D.bWw[w]
j=D.bND[w]
return new C.od("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dWB(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a4().a_())},
dWB(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hv(d.bG(256),16),2,"0")
return B.h.fq(v)},
dil:function dil(d){this.a=d},
dik:function dik(d,e){this.a=d
this.b=e},
dig:function dig(d){this.a=d},
dih:function dih(d){this.a=d},
dii:function dii(d){this.a=d},
dij:function dij(d,e){this.a=d
this.b=e},
Nl:function Nl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
od:function od(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bnq:function bnq(){},
bnr:function bnr(){},
bni:function bni(){},
bnj:function bnj(){},
bnk:function bnk(){},
bnl:function bnl(){},
bnm:function bnm(){},
bnn:function bnn(){},
bno:function bno(){},
bnp:function bnp(){},
bnh:function bnh(){},
bng:function bng(){},
JS:function JS(d,e){this.c=d
this.a=e},
afX:function afX(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHX:function cHX(){},
cHW:function cHW(d,e){this.a=d
this.b=e},
cHU:function cHU(d){this.a=d},
cHV:function cHV(d,e){this.a=d
this.b=e},
cHY:function cHY(d){this.a=d},
cI1:function cI1(d){this.a=d},
cI2:function cI2(d,e){this.a=d
this.b=e},
cI0:function cI0(d,e,f){this.a=d
this.b=e
this.c=f},
cI_:function cI_(d,e){this.a=d
this.b=e},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cI3:function cI3(d){this.a=d},
Wx:function Wx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJl:function aJl(d,e){this.c=d
this.a=e},
JR:function JR(d,e){this.c=d
this.a=e},
aKm:function aKm(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHR:function cHR(d){this.a=d},
cHS:function cHS(d){this.a=d},
cHT:function cHT(d){this.a=d},
cHQ:function cHQ(d,e){this.a=d
this.b=e},
cHN:function cHN(d){this.a=d},
cHO:function cHO(d){this.a=d},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHP:function cHP(d){this.a=d},
cHL:function cHL(d){this.a=d},
aRc:function aRc(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRd:function aRd(d,e,f){this.c=d
this.d=e
this.a=f},
aKs:function aKs(d,e){this.c=d
this.a=e},
aRb:function aRb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXi:function cXi(d){this.a=d},
cXj:function cXj(d){this.a=d},
aLJ:function aLJ(d){this.a=d},
aFC:function aFC(d,e){this.c=d
this.a=e},
dWz(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dWy(v)
if(u!=null)return new C.qm(w,C.dmu(u,!1),D.adL,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dWx(v)
if(t!=null)return new C.qm(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adM,"TikTok",q)
s=C.dWw(w,v)
if(s!=null)return s
r=C.dWv(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qm(w,w,D.crH,"Video",q)
return q},
dWw(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qm(d,"https://www.instagram.com/reel/"+w+u,D.NI,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qm(d,"https://www.instagram.com/p/"+w+u,D.NI,t,null)}return null},
dWv(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qm(d,"https://www.facebook.com/plugins/video.php?href="+A.fi(2,d,B.be,!1)+"&show_text=false&width=734",D.adN,"Facebook",null)},
dWy(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dWx(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
JV:function JV(d,e){this.a=d
this.b=e},
qm:function qm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6m:function a6m(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKn:function aKn(d,e){var _=this
_.d=$
_.cY$=d
_.aW$=e
_.c=_.a=null},
aLO:function aLO(d,e){this.c=d
this.a=e},
cME:function cME(d){this.a=d},
cMF:function cMF(d){this.a=d},
Fe:function Fe(d,e){this.c=d
this.a=e},
akH:function akH(){},
dyH(d,e,f,g,h,i){return new C.a6n(i,f,h,e,g,d)},
eeO(d){var w=window
w.toString
A.hi(w,"message",new C.deh(d),!1,x._)},
a6n:function a6n(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afY:function afY(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cI4:function cI4(d){this.a=d},
cId:function cId(d){this.a=d},
cIb:function cIb(d){this.a=d},
cI9:function cI9(d){this.a=d},
cIa:function cIa(d){this.a=d},
cI7:function cI7(d){this.a=d},
cIc:function cIc(d){this.a=d},
cI8:function cI8(d){this.a=d},
cI6:function cI6(d){this.a=d},
cI5:function cI5(d){this.a=d},
deh:function deh(d){this.a=d},
dWr(){var w,v,u
try{v=A.AG()
w=v.grY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cL(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dmu(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bn(w,"&")},
bne(d){var w=A.aq(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dyC(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWs(d,e,f){var w,v,u=C.bne(d)
if(u!=null){if(f){w=C.dWr()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dyC(C.dmu(u,e))}return C.dyC(d)},
dWt(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
dWu(d){var w
if($.P_().a==null)return!1
w=$.Go().a
return d>=w&&d<w+4},
dyF(){var w=$.awt
if(w!=null)w.ad(0)
$.awt=null
$.Go().sv(0,0)},
dyE(){var w,v,u,t=$.P_()
if(t.a==null)return
w=$.awt
if(w!=null)w.ad(0)
v=$.dyD
if(v<=4){t=t.a
t.toString
C.dmv(t)
return}w=$.Go()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dmv(t)},
dmv(d){var w=$.awt
if(w!=null)w.ad(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.awt=A.dL(A.dr(0,0,0,0,0,w),C.ef2())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nl.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.Z(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fT,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fr,w,w,w)}}
C.od.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JS.prototype={
U(){return new C.afX(A.a([],x.e))},
ge0(){return this.c}}
C.afX.prototype={
a0(){var w=this
w.a7()
$.Go().ap(0,w.gax6())
C.eeO(w.gbmQ())
w.YH()},
bmd(){if(this.c!=null)this.p(new C.cHX())},
bmR(){C.dyE()},
q(){$.Go().Z(0,this.gax6())
C.dyF()
$.P_().sv(0,null)
this.a6()},
YH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JU(t.a.c),$async$YH)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHW(t,s))
$.bnf=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
UF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cHU(t))
w=3
return A.b(C.awu(t.a.c),$async$UF)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHV(t,s))
$.bnf=J.a3(t.d)
t.c.G(x.q).f.R(A.bq(null,null,null,null,null,B.x,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UF,v)},
boL(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.eG(new C.cHY(d),!1,null,x.H))},
bpl(){var w=this.c
w.toString
return C.Zj(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.fb:B.bx,s=A.aM(v,v,v,v,B.L_,v,v,v,new C.cI1(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DE(A.H(A.a([A.I(new A.J(B.j5,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.V,!0,v,A.aR(!1,v,!0,new A.J(B.bc,A.Z(B.ha,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpk(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c6(!0,A.w(A.a([new A.J(D.WC,r,v),A.I(w.e?B.n4:new A.je($.P_(),new C.cI2(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqE(B.a6,B.Go,B.mi,D.d6Y,w.e?v:new C.cI3(w)),v)}}
C.Wx.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a6.l(0.18),B.dk,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6m(n,!0,!C.dWu(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Z(B.jL,B.nd,u,u,22),B.aO,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yM,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.V,!0,u,A.aR(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cg(p,A.fW(A.w(A.a([new C.aJl(o,u),A.I(n,1),A.t(u,A.H(A.a([A.Z(B.Ba,B.a6.l(0.85),u,u,9),D.cG_,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aCG,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a_I,B.p),u,u,u,B.fM,u,u,u),1),B.aO,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJl.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gav(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.rH,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.Ws,w,w,w)}}
C.JR.prototype={
U(){return new C.aKm()}}
C.aKm.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.fb:B.bx,t=A.aM(w,w,w,w,B.L_,w,w,w,new C.cHR(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c6(!0,A.w(A.a([new A.J(D.WC,A.H(A.a([t,A.I(new A.DE(A.H(A.a([A.I(new A.J(B.j5,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.V,!0,w,A.aR(!1,w,!0,new A.J(B.bc,A.Z(B.ha,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHS(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.je($.P_(),new C.cHT(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aRc.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a6.l(0.35),B.f2,28),new A.aa(0,B.G,B.A.l(0.45),B.da,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dyH(new A.dw(v+"_full_"+u,x.W),!1,u,!1,w.gaML(),v+"_full")
w=v}else w=new C.aKs(t.r,s)}else w=new C.aFC(m,s)
else w=D.ddp
return A.t(s,A.cg(n,A.fW(A.w(A.a([new C.aRd(m,l,s),A.I(w,1),new C.aRb(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a_I,B.p),s,r*2.05,s,B.bS,s,s,r)}}
C.aRd.prototype={
C(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=A.dC(r)
r=A.hN(r)
w=new A.dD(q,r)
v=w.gJp()===0?12:w.gJp()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h4:B.j2)===B.h4?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mN,s,s,s),B.bB,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNE,B.ep,D.aMQ,B.ep,D.aNI],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.Z(B.KQ,B.a6.l(0.9),s,s,12),B.ep,A.I(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDt,s,s,s)}}
C.aKs.prototype={
C(d){var w=null
return A.t(w,A.aJ(A.w(A.a([A.Z(B.AI,B.e.l(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eA(D.aRa,D.cVw,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yM,w,w,w,w,w,w,w,w,1/0)}}
C.aRb.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awZ(B.B0,"YouTube",s===0,r,new C.cXi(u))
s=u.awZ(B.lj,"Device",s===1,r,new C.cXj(u))
w=r?"Power off":"Power on"
v=r?D.Z4:D.aKR
return A.t(t,A.H(A.a([q,B.am,s,B.bB,A.aM(t,t,t,t,A.Z(v,r?B.bE:B.fy,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aDd,t,t,t)},
awZ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bn
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.V,!0,u,A.aR(!1,A.m(10),!0,new A.J(B.no,A.w(A.a([A.Z(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLJ.prototype={
C(d){return D.at0}}
C.aFC.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lF,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tH("Serial",u.c),q=w.tH("Model",u.d),p=w.tH("Device ID",u.e),o=w.tH("IMEI",u.r),n=w.tH("MAC",u.f),m=w.tH("OS",u.w+" "+u.x),l=w.tH("Location",u.y+", "+u.z),k=w.tH("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tH("Timezone",u.at)
u=u.ax
return A.ef(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tH("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.al,!1)},
tH(d,e){var w=null
return new A.J(B.cP,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cH,A.d(e,w,w,w,w,w,w,D.cNo,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JV.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qm.prototype={
gaML(){var w=this.c
return w===D.adL||w===D.adM||w===D.NI||w===D.adN}}
C.a6m.prototype={
U(){return new C.aKn(null,null)}}
C.aKn.prototype={
a0(){this.a7()
var w=A.bJ(null,B.vd,null,1,null,this)
w.n7(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWv()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dq(t,new A.r(t,t,t,t,t,new A.ak(B.cN,B.cy,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bT),q=x.Y,p=u.d
p===$&&A.c()
p=A.cw(B.i8,p,t)
w=B.e.l(0.92)
q=A.aJ(new A.d2(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bl.T>")),!1,A.Z(B.jL,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nd
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLO(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.ak,t,B.ba,B.x,s,t)}}
C.aLO.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kr(u,new C.cME(this),B.c8,B.bM,!0,w,w,new C.cMF(this),w)
return new C.Fe(v,w)}}
C.Fe.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uS,B.Sz],x.O),B.jL)
break
case 1:w=new A.aN(A.a([B.yM,D.axu],x.O),B.lk)
break
case 2:w=new A.aN(A.a([D.az0,D.awV],x.O),B.AP)
break
case 3:w=new A.aN(A.a([B.Y,B.du],x.O),B.AT)
break
case 4:w=new A.aN(A.a([B.az,B.aN],x.O),B.pe)
break
default:w=u}v=w.a
return A.t(u,A.aJ(A.Z(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aM,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akH.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdE())
w.aW$=null
w.a6()},
by(){this.bP()
this.bK()
this.dF()}}
C.a6n.prototype={
U(){return new C.afY()}}
C.afY.prototype={
a7s(d,e){var w,v=C.bne(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dmu(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dWs(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEx(){var w,v=this
if(v.w)return
v.p(new C.cI4(v))
w=v.e
if(w!=null)v.a7s(w,v.a.d)},
a0(){var w,v,u=this
u.a7()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.Gq()
$.pI().uT(w,new C.cId(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cI6(v))
w=v.e
w.toString
v.a7s(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Zj,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fW(A.aJ(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1J(n,B.ts,w)],v)
if(o.f)w.push(A.fW(A.aJ(new A.ac(28,28,D.au1,n),n,n,n),B.d3,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bn,B.w,1)
q=A.Z(B.KU,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eI(0,A.aL(!1,B.V,!0,n,A.aR(!1,n,!0,A.aJ(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.VY,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEw(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bne(o.a.d)
if(v!=null)w.push(A.aT(8,A.jt(D.aPb,D.d2b,new C.cI5(o),A.iF(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fr,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.ak,n,B.ba,B.x,w,n)}}
var z=a.updateTypes(["o(od)","~()","JS(Q)","od(a_<@,@>)","a1(od)","a_<o,@>(od)","aB<~>()","JR(Q)","je<K>(Q,qm?,p?)","Wx(Q,K)","u0(Q,qm?,p?)","Fe(Q,al,dQ?)"])
C.dil.prototype={
$1(d){return new C.JS(this.a,null)},
$S:z+2}
C.dik.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dY,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a6.l(0.22),B.f2,32)],x.V),g=A.O(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMx,B.k,n,n,new A.r(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Z(B.d7,m?B.ax:B.d3,n,n,n),n,n,n,new C.dig(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ae,B.ag,B.H,j,n,n),B.p),n,n,n,B.II,n,n,n)
e=A.em(B.cG,A.a([new C.Nl("YouTube",B.KP,m,n),new C.Nl("TikTok",B.lk,m,n),new C.Nl("Instagram",B.AP,m,n),new C.Nl("Facebook",B.AT,m,n)],v),B.cs,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bx
r=A.Z(B.fO,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.x,n,A.aK(),w,n,n,n,n,n,2,A.bs(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Rj),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.jt(D.aMA,D.d65,new C.dih(d),A.iF(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dq(A.cg(f,A.w(A.a([j,new A.J(B.Wc,u,n),new A.J(D.aEI,A.H(A.a([e,B.bB,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dii(d),n,n),B.am,A.dN(D.aQU,D.d6T,new C.dij(d,w),A.bx(B.a6,n,n,n,B.e,n,D.VY,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a1,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aM,B.aR,B.H,i,n,n),B.p),B.bT),n)},
$S:80}
C.dig.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dih.prototype={
$0(){C.dyF()
$.P_().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dii.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dij.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnq.prototype={
$1(d){return C.dyG(A.S(d,x.N,x.z))},
$S:z+3}
C.bnr.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bni.prototype={
$1(d){return d.c},
$S:z+0}
C.bnj.prototype={
$1(d){return d.r},
$S:z+0}
C.bnk.prototype={
$1(d){return d.f},
$S:z+0}
C.bnl.prototype={
$1(d){return d.at},
$S:z+0}
C.bnm.prototype={
$1(d){return d.c},
$S:z+0}
C.bnn.prototype={
$1(d){return d.r},
$S:z+0}
C.bno.prototype={
$1(d){return d.f},
$S:z+0}
C.bnp.prototype={
$1(d){return d.at},
$S:z+0}
C.bnh.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bng.prototype={
$1(d){return B.b.bj(B.l.hv(d,16),2,"0").toUpperCase()},
$S:81}
C.cHX.prototype={
$0(){},
$S:0}
C.cHW.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHU.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHV.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHY.prototype={
$1(d){return new C.JR(this.a,null)},
$S:z+7}
C.cI1.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cI2.prototype={
$3(d,e,f){return new A.je($.Go(),new C.cI0(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cI0.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.D6(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.Z(B.jL,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Go().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dd,B.fs,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cg(s,new A.j4(1.7777777777777777,C.dyH(new A.dw("fleet_master_"+r,x.W),!0,r,!0,j.gaML(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vX(0,B.x,k,B.D,k,k,k,k,!1,k,B.al,!1,A.a([new A.kz(new A.J(B.Iz,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.on(D.aCQ,A.aAA(new A.nv(new C.cI_(i,j),J.a3(i.d),!1,!0,!0,A.tv(),k),D.cGL),k)],w))},
$S:1692}
C.cI_.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wx(v,e,J.a3(w.d),new C.cHZ(w,v),this.b,null)},
$S:z+9}
C.cHZ.prototype={
$0(){return this.a.boL(this.b)},
$S:0}
C.cI3.prototype={
$0(){this.a.UF()
return null},
$S:0}
C.cHR.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cHS.prototype={
$0(){C.Zj(this.a,$.bnf)
return null},
$S:0}
C.cHT.prototype={
$3(d,e,f){return A.fp(new C.cHQ(this.a,e))},
$S:z+10}
C.cHQ.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.cp(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRc(u,s.a.c,s.e,s.d,new C.cHN(s),new C.cHO(s),new C.cHP(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oR,v,v,B.al),v,v,v)},
$S:1693}
C.cHN.prototype={
$0(){var w=this.a.c
w.toString
C.Zj(w,$.bnf)
return null},
$S:0}
C.cHO.prototype={
$1(d){var w=this.a
return w.p(new C.cHM(w,d))},
$S:36}
C.cHM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHP.prototype={
$0(){var w=this.a
return w.p(new C.cHL(w))},
$S:0}
C.cHL.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cXi.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXj.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cME.prototype={
$3(d,e,f){return new C.Fe(this.a.c,null)},
$S:z+11}
C.cMF.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.ak,null,B.ba,B.x,A.a([new C.Fe(this.a.c,null),D.ate],x.p),null)},
$C:"$3",
$R:3,
$S:257}
C.cI4.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cId.prototype={
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
w.a7s(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hi(v,"load",new C.cIb(w),!1,u)
v=w.e
v.toString
A.hi(v,"error",new C.cIc(w),!1,u)
w=w.e
w.toString
return w},
$S:586}
C.cIb.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cI9(w))
A.bR(B.P,new C.cIa(w),x.H)}},
$S:45}
C.cI9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cIa.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cI7(w))},
$S:12}
C.cI7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cIc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cI8(w))},
$S:45}
C.cI8.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cI6.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cI5.prototype={
$0(){var w,v=C.bne(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kL.Ss(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.deh.prototype={
$1(d){var w,v,u,t,s=new A.EN([],[]).IF(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1694};(function aliases(){var w=C.akH.prototype
w.aWv=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afX.prototype,"gax6","bmd",1)
w(u,"gbmQ","bmR",1)
w(u,"gbpk","bpl",6)
w(C.afY.prototype,"gbEw","bEx",1)
v(C,"ef2","dyE",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yB,[C.dil,C.dik,C.bnq,C.bnr,C.bni,C.bnj,C.bnk,C.bnl,C.bnm,C.bnn,C.bno,C.bnp,C.bnh,C.bng,C.cHY,C.cI2,C.cI0,C.cHT,C.cHO,C.cME,C.cMF,C.cId,C.cIb,C.cIc,C.deh])
v(A.a_O,[C.dig,C.dih,C.dii,C.dij,C.cHX,C.cHW,C.cHU,C.cHV,C.cI1,C.cHZ,C.cI3,C.cHR,C.cHS,C.cHN,C.cHM,C.cHP,C.cHL,C.cXi,C.cXj,C.cI4,C.cI9,C.cIa,C.cI7,C.cI8,C.cI6,C.cI5])
v(A.au,[C.Nl,C.Wx,C.aJl,C.aRc,C.aRd,C.aKs,C.aRb,C.aLJ,C.aFC,C.aLO,C.Fe])
v(A.al,[C.od,C.qm])
v(A.ae,[C.JS,C.JR,C.a6m,C.a6n])
v(A.af,[C.afX,C.aKm,C.akH,C.afY])
v(A.a_P,[C.cI_,C.cHQ])
u(C.JV,A.aGx)
u(C.aKn,C.akH)
w(C.akH,A.ea)})()
A.dCb(b.typeUniverse,JSON.parse('{"JS":{"ae":[],"p":[]},"Wx":{"au":[],"p":[]},"JR":{"ae":[],"p":[]},"Nl":{"au":[],"p":[]},"afX":{"af":["JS"]},"aJl":{"au":[],"p":[]},"aKm":{"af":["JR"]},"aRc":{"au":[],"p":[]},"aRd":{"au":[],"p":[]},"aKs":{"au":[],"p":[]},"aRb":{"au":[],"p":[]},"aLJ":{"au":[],"p":[]},"aFC":{"au":[],"p":[]},"a6m":{"ae":[],"p":[]},"Fe":{"au":[],"p":[]},"aKn":{"af":["a6m"]},"aLO":{"au":[],"p":[]},"a6n":{"ae":[],"p":[]},"afY":{"af":["a6n"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a5<aa>"),O:w("a5<x>"),e:w("a5<od>"),s:w("a5<o>"),p:w("a5<p>"),t:w("a5<K>"),X:w("ad<od>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o8"),_:w("D3"),k:w("od"),N:w("o"),Y:w("bn<a9>"),W:w("dw<o>"),J:w("je<K>"),j:w("je<qm?>"),E:w("xt<cM>"),q:w("Xj"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Z4=new A.N(983224,"MaterialIcons",!1)
D.aPj=new A.a8(D.Z4,48,B.bn,null,null,null)
D.cN2=new A.U(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUq=new A.z("Powered off",null,D.cN2,null,null,null,null,null,null,null,null,null)
D.bKN=w([D.aPj,B.Q,D.cUq],x.p)
D.aAe=new A.eZ(B.al,B.i,B.a1,B.o,null,B.q,null,0,D.bKN,null)
D.at0=new A.du(B.T,null,null,D.aAe,null)
D.cGp=new A.ac(18,18,B.Sh,null)
D.ate=new A.du(B.T,null,null,D.cGp,null)
D.au1=new A.hk(2,null,null,null,null,B.a7,null,null,null,null)
D.awV=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axu=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.az0=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCG=new A.V(0,3,0,3)
D.aCQ=new A.V(10,0,10,88)
D.aDd=new A.V(12,6,12,10)
D.aDt=new A.V(14,8,14,6)
D.VY=new A.V(18,12,18,12)
D.aEI=new A.V(20,8,20,20)
D.WC=new A.V(8,6,15,8)
D.aKR=new A.N(983222,"MaterialIcons",!1)
D.aMx=new A.a8(B.jL,26,B.a6,null,null,null)
D.aMA=new A.a8(B.Yj,18,null,null,null,null)
D.aMQ=new A.a8(B.rH,14,B.a7,null,null,null)
D.aL6=new A.N(983420,"MaterialIcons",!1)
D.aNE=new A.a8(D.aL6,14,B.a7,null,null,null)
D.aJe=new A.N(62895,"MaterialIcons",!1)
D.aNI=new A.a8(D.aJe,14,B.a7,null,null,null)
D.aPb=new A.a8(B.rz,16,B.a7,null,null,null)
D.aQU=new A.a8(B.jd,20,null,null,null,null)
D.aRa=new A.a8(B.ha,16,null,null,null,null)
D.bOp=w([B.aN,B.Y],x.O)
D.a_I=new A.ak(B.aM,B.aR,B.H,D.bOp,null,null)
D.cA6=new A.aN("NGMY OS","14.2.1")
D.cyU=new A.aN("VirtualDroid","13.8.4")
D.cyT=new A.aN("NGMY OS","15.0.0")
D.czF=new A.aN("VirtualDroid","14.1.2")
D.cyR=new A.aN("NGMY Tab OS","12.9.7")
D.cyP=new A.aN("NGMY OS","13.5.3")
D.cyE=new A.aN("VirtualDroid","15.2.0")
D.czg=new A.aN("NGMY OS","14.8.1")
D.czL=new A.aN("NGMY Tab OS","13.2.4")
D.cAg=new A.aN("VirtualDroid","12.6.9")
D.cyx=new A.aN("NGMY OS","16.0.1")
D.cym=new A.aN("VirtualDroid","14.9.0")
D.czY=new A.aN("NGMY Tab OS","14.0.3")
D.cz2=new A.aN("NGMY OS","13.1.8")
D.cyw=new A.aN("VirtualDroid","13.4.5")
D.cyO=new A.aN("NGMY OS","15.3.2")
D.czM=new A.aN("NGMY Tab OS","12.4.1")
D.cA0=new A.aN("VirtualDroid","16.1.0")
D.czf=new A.aN("NGMY OS","14.4.6")
D.cA7=new A.aN("VirtualDroid","15.0.8")
D.bND=w([D.cA6,D.cyU,D.cyT,D.czF,D.cyR,D.cyP,D.cyE,D.czg,D.czL,D.cAg,D.cyx,D.cym,D.czY,D.cz2,D.cyw,D.cyO,D.czM,D.cA0,D.czf,D.cA7],A.b6("a5<+(o,o)>"))
D.cCm=new A.eK(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cBV=new A.eK(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cBQ=new A.eK(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cBZ=new A.eK(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cBM=new A.eK(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cC0=new A.eK(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCo=new A.eK(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cBN=new A.eK(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cBU=new A.eK(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cC2=new A.eK(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cBL=new A.eK(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCg=new A.eK(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCd=new A.eK(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cBT=new A.eK(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCa=new A.eK(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cC9=new A.eK(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cBK=new A.eK(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cBY=new A.eK(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cC7=new A.eK(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCc=new A.eK(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6h=w([D.cCm,D.cBV,D.cBQ,D.cBZ,D.cBM,D.cC0,D.cCo,D.cBN,D.cBU,D.cC2,D.cBL,D.cCg,D.cCd,D.cBT,D.cCa,D.cC9,D.cBK,D.cBY,D.cC7,D.cCc],A.b6("a5<+(o,o,a9,a9,o)>"))
D.bWw=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adL=new C.JV(0,"youtube")
D.adM=new C.JV(1,"tiktok")
D.NI=new C.JV(2,"instagram")
D.adN=new C.JV(3,"facebook")
D.crH=new C.JV(4,"other")
D.cG_=new A.ac(3,null,null,null)
D.cGL=new A.i8(4,10,8,0.52,null)
D.cVI=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKc=new A.aU(D.cVI,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.x,null)
D.cNo=new A.U(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVw=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2b=new A.z("Open in YouTube",null,B.iU,null,null,null,null,null,null,null,null,null)
D.d65=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d6T=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d6Y=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddp=new C.aLJ(null)})();(function staticFields(){$.dyD=20
$.awt=null
$.bnf=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ek4","Go",()=>A.V8(0))
w($,"ek5","P_",()=>A.V8(null))})()};
(a=>{a["nrF3BAZBFl60wR4kO6Bodw4/RNQ="]=a.current})($__dart_deferred_initializers__);