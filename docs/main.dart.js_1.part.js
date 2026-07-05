((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ecC(d,e){A.a8(d,!1).cH(A.eJ(new C.dfl(e),!0,null,x.H))},
YJ(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OB()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b1(n,B.aE,B.ar),t)
w=3
return A.b(A.dq(B.M,new C.dfk(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YJ)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dT8(r)
if(q==null){d.G(x.q).f.R(D.cH3)
w=1
break}w=4
return A.b(A.bR(B.i6,null,x.H),$async$YJ)
case 4:if(d.e==null){w=1
break}n=B.l.a0(e,1,999)
$.dvs=n
p=C.dT2(n)
n=$.G3()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.djt(q)
d.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YJ,v)},
dvv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o5(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Ju(d){return C.dTb(d)},
dTb(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ju=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Ju)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aF(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eS(r,x.f)
k=A.ds(k,new C.bm2(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.A(new A.ag(k,new C.bm3(),j),j.j("G.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dvx(q)
w=12
return A.b(C.Jt(a3,p),$async$Ju)
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
case 9:case 5:o=A.aN(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.H.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dvv(A.Q(n,x.N,x.z))
l=C.dvx(A.a([m],x.e))
w=21
return A.b(C.Jt(a3,l),$async$Ju)
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
case 18:case 14:q=C.dT9()
w=22
return A.b(C.Jt(a3,q),$async$Ju)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ju,v)},
dvx(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.blV(),w).eE(0),u=new A.D(d,new C.blW(),w).eE(0),t=new A.D(d,new C.blX(),w).eE(0),s=new A.D(d,new C.blY(),w).eE(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dju(null,q,u,t,v,s));++q}return r},
avD(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$avD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ju(d),$async$avD)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.d8(t,new C.blZ(),s).eE(0)
p=r.d8(t,new C.bm_(),s).eE(0)
o=r.d8(t,new C.bm0(),s).eE(0)
n=r.d8(t,new C.bm1(),s).eE(0)
m=C.dju(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Jt(d,t),$async$avD)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avD,v)},
Jt(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Jt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Jt)
case 2:u=g
t=B.b.i(d)
s=J.b2(e,new C.blU(),x.P)
s=A.A(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$Jt)
case 3:return A.h(null,v)}})
return A.i($async$Jt,v)},
dT9(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dH(20,x.k)
for(w=0;w<20;++w)q[w]=C.dju(w,w,t,s,u,r)
return q},
dju(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jw(),h=d==null,g=D.a5o[B.l.ae(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a5o[B.l.ae(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.D(p,new C.blT(),A.W(p).j("D<1,o>")).fl(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fl(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bl(B.l.ia(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.ae(e,20)
k=D.bUz[w]
j=D.bLP[w]
return new C.o5("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bl(B.l.n(e+1),2,"0"),u,k,C.dTa(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().Z())},
dTa(d,e){var w,v=J.dH(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bl(B.l.ia(d.bF(256),16),2,"0")
return B.h.fl(v)},
dfl:function dfl(d){this.a=d},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfg:function dfg(d){this.a=d},
dfh:function dfh(d){this.a=d},
dfi:function dfi(d){this.a=d},
dfj:function dfj(d,e){this.a=d
this.b=e},
MW:function MW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o5:function o5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bm2:function bm2(){},
bm3:function bm3(){},
blV:function blV(){},
blW:function blW(){},
blX:function blX(){},
blY:function blY(){},
blZ:function blZ(){},
bm_:function bm_(){},
bm0:function bm0(){},
bm1:function bm1(){},
blU:function blU(){},
blT:function blT(){},
Js:function Js(d,e){this.c=d
this.a=e},
afd:function afd(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cFZ:function cFZ(){},
cFY:function cFY(d,e){this.a=d
this.b=e},
cFW:function cFW(d){this.a=d},
cFX:function cFX(d,e){this.a=d
this.b=e},
cG_:function cG_(d){this.a=d},
cG3:function cG3(d){this.a=d},
cG4:function cG4(d,e){this.a=d
this.b=e},
cG2:function cG2(d,e,f){this.a=d
this.b=e
this.c=f},
cG1:function cG1(d,e){this.a=d
this.b=e},
cG0:function cG0(d,e){this.a=d
this.b=e},
cG5:function cG5(d){this.a=d},
W3:function W3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIr:function aIr(d,e){this.c=d
this.a=e},
Jr:function Jr(d,e){this.c=d
this.a=e},
aJp:function aJp(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cFT:function cFT(d){this.a=d},
cFU:function cFU(d){this.a=d},
cFV:function cFV(d){this.a=d},
cFS:function cFS(d,e){this.a=d
this.b=e},
cFP:function cFP(d){this.a=d},
cFQ:function cFQ(d){this.a=d},
cFO:function cFO(d,e){this.a=d
this.b=e},
cFR:function cFR(d){this.a=d},
cFN:function cFN(d){this.a=d},
aQb:function aQb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQc:function aQc(d,e,f){this.c=d
this.d=e
this.a=f},
aJv:function aJv(d,e){this.c=d
this.a=e},
aQa:function aQa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cUy:function cUy(d){this.a=d},
cUz:function cUz(d){this.a=d},
aKK:function aKK(d){this.a=d},
aEJ:function aEJ(d,e){this.c=d
this.a=e},
dT8(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dT7(v)
if(u!=null)return new C.qb(w,C.djs(u,!1),D.acG,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dT6(v)
if(t!=null)return new C.qb(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.acH,"TikTok",q)
s=C.dT5(w,v)
if(s!=null)return s
r=C.dT4(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qb(w,w,D.coU,"Video",q)
return q},
dT5(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).df(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qb(d,"https://www.instagram.com/reel/"+w+u,D.N6,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).df(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qb(d,"https://www.instagram.com/p/"+w+u,D.N6,t,null)}return null},
dT4(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qb(d,"https://www.facebook.com/plugins/video.php?href="+A.f2(2,d,B.ba,!1)+"&show_text=false&width=734",D.acI,"Facebook",null)},
dT7(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].df(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dT6(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).df(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).df(d)
return w==null?null:w.b[1]},
Jv:function Jv(d,e){this.a=d
this.b=e},
qb:function qb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5F:function a5F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJq:function aJq(d,e){var _=this
_.d=$
_.d3$=d
_.aY$=e
_.c=_.a=null},
aKP:function aKP(d,e){this.c=d
this.a=e},
cJY:function cJY(d){this.a=d},
cJZ:function cJZ(d){this.a=d},
EV:function EV(d,e){this.c=d
this.a=e},
ajT:function ajT(){},
dvw(d,e,f,g,h,i){return new C.a5G(i,f,h,e,g,d)},
eb0(d){var w=window
w.toString
A.hf(w,"message",new C.dbo(d),!1,x._)},
a5G:function a5G(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afe:function afe(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cG6:function cG6(d){this.a=d},
cGe:function cGe(d){this.a=d},
cGc:function cGc(d){this.a=d},
cGa:function cGa(d){this.a=d},
cGb:function cGb(d){this.a=d},
cG8:function cG8(d){this.a=d},
cGd:function cGd(d){this.a=d},
cG9:function cG9(d){this.a=d},
cG7:function cG7(d){this.a=d},
dbo:function dbo(d){this.a=d},
dvq(){var w,v,u
try{v=A.An()
w=v.grI(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
djs(d,e){var w=C.dvq(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f2(2,w,B.ba,!1))
v.push("widget_referrer="+A.f2(2,w,B.ba,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bm(v,"&")},
djr(d){var w=A.aq(y.c,!0,!1,!1,!1).df(d)
return w==null?null:w.b[1]},
dvr(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dT1(d,e,f){var w,v,u=C.djr(d)
if(u!=null){if(f){w=C.dvq()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dvr(C.djs(u,e))}return C.dvr(d)},
dT2(d){if(d<=4)return 0
return B.l.aK(d-1,4)*4},
dT3(d){var w
if($.OB().a==null)return!1
w=$.G3().a
return d>=w&&d<w+4},
dvu(){var w=$.avC
if(w!=null)w.ad(0)
$.avC=null
$.G3().sv(0,0)},
dvt(){var w,v,u,t=$.OB()
if(t.a==null)return
w=$.avC
if(w!=null)w.ad(0)
v=$.dvs
if(v<=4){t=t.a
t.toString
C.djt(t)
return}w=$.G3()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.djt(t)},
djt(d){var w=$.avC
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
default:w=null}$.avC=A.dK(A.dp(0,0,0,0,0,w),C.ebq())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.MW.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.O(B.a8.l(0.25),B.w,1),r=A.Y(this.d,B.a8,w,w,14)
return A.t(w,A.H(A.a([r,B.fK,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c2,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a2,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fB,w,w,w)}}
C.o5.prototype={
a8(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Js.prototype={
U(){return new C.afd(A.a([],x.e))},
ge8(){return this.c}}
C.afd.prototype={
a_(){var w=this
w.a6()
$.G3().ao(0,w.gawk())
C.eb0(w.gblk())
w.Ye()},
bkK(){if(this.c!=null)this.p(new C.cFZ())},
bll(){C.dvt()},
q(){$.G3().Y(0,this.gawk())
C.dvu()
$.OB().sv(0,null)
this.a5()},
Ye(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ye=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ju(t.a.c),$async$Ye)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cFY(t,s))
$.blS=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Ye,v)},
Uf(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cFW(t))
w=3
return A.b(C.avD(t.a.c),$async$Uf)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cFX(t,s))
$.blS=J.a5(t.d)
t.c.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Uf,v)},
bnd(d){var w=this.c
w.toString
A.a8(w,!1).cH(A.eJ(new C.cG_(d),!1,null,x.H))},
bnN(){var w=this.c
w.toString
return C.YJ(w,J.a5(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.f8:B.bD,s=A.aM(v,v,v,v,B.Kn,v,v,v,new C.cG3(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a5(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Dn(A.H(A.a([A.J(new A.I(B.j1,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.Z,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.W,!0,v,A.aQ(!1,v,!0,new A.I(B.bc,A.Y(B.h_,B.a8,v,v,28),v),B.cH,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbnM(),v,v,v,v,v,v,v),B.k,B.M,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c5(!0,A.w(A.a([new A.I(D.VR,r,v),A.J(w.e?B.mP:new A.j9($.OB(),new C.cG4(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.apL(B.a8,B.FX,B.m7,D.d3E,w.e?v:new C.cG5(w)),v)}}
C.W3.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.ab(0,B.G,B.a8.l(0.18),B.dg,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5F(n,!0,!C.dT3(w),"Fold "+(B.l.aK(w,4)+1)+"/"+B.l.aK(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jF,B.mZ,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aV,B.j,0,B.q),B.k,B.yw,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.W,!0,u,A.aQ(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ck(p,A.hh(A.w(A.a([new C.aIr(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.AP,B.a8.l(0.85),u,u,9),D.cCV,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aV,B.j,0,u,u),B.k,B.at,u,u,u,u,u,D.aBl,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aM),B.k,u,u,new A.r(u,u,r,s,q,D.ZZ,B.p),u,u,u,B.fX,u,u,u),1),B.aK,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.aa)}}
C.aIr.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.rn,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.at,w,w,w,w,w,B.VH,w,w,w)}}
C.Jr.prototype={
U(){return new C.aJp()}}
C.aJp.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.f8:B.bD,t=A.aM(w,w,w,w,B.Kn,w,w,w,new C.cFT(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c5(!0,A.w(A.a([new A.I(D.VR,A.H(A.a([t,A.J(new A.Dn(A.H(A.a([A.J(new A.I(B.j1,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.Z,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.W,!0,w,A.aQ(!1,w,!0,new A.I(B.bc,A.Y(B.h_,B.a8,w,w,28),w),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cFU(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.j9($.OB(),new C.cFV(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aQb.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ab(0,B.G,B.a8.l(0.35),B.f2,28),new A.ab(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dvw(new A.dA(v+"_full_"+u,x.W),!1,u,!1,w.gaLR(),v+"_full")
w=v}else w=new C.aJv(t.r,s)}else w=new C.aEJ(m,s)
else w=D.da4
return A.t(s,A.ck(n,A.hh(A.w(A.a([new C.aQc(m,l,s),A.J(w,1),new C.aQa(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aM),B.k,s,s,new A.r(s,s,o,q,p,D.ZZ,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQc.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dy(r)
r=A.hH(r)
w=new A.dz(q,r)
v=w.gJ0()===0?12:w.gJ0()
r=B.b.bl(B.l.n(r),2,"0")
q=(q<12?B.fU:B.iZ)===B.fU?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.my,s,s,s),B.bx,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bR,D.aMb,B.eh,D.aLq,B.eh,D.aMf],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.H(A.a([A.Y(B.Kd,B.a8.l(0.9),s,s,12),B.eh,A.J(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.at,s,s,s,s,s,D.aC6,s,s,s)}}
C.aJv.prototype={
C(d){var w=null
return A.t(w,A.aL(A.w(A.a([A.Y(B.An,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eC(D.aPH,D.cSk,this.c,A.em(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aC(B.a8.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a2,0,B.q),w,w,w),B.k,B.yw,w,w,w,w,w,w,w,w,1/0)}}
C.aQa.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awc(B.AG,"YouTube",s===0,r,new C.cUy(u))
s=u.awc(B.l9,"Device",s===1,r,new C.cUz(u))
w=r?"Power off":"Power on"
v=r?D.Ym:D.aJs
return A.t(t,A.H(A.a([q,B.al,s,B.bx,A.aM(t,t,t,t,A.Y(v,r?B.bC:B.fo,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dn)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.at,t,t,t,t,t,D.aBS,t,t,t)},
awc(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a8:B.aw
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.J(A.aK(!1,B.W,!0,u,A.aQ(!1,A.m(10),!0,new A.I(B.n9,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a2,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aKK.prototype={
C(d){return D.arQ}}
C.aEJ.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lv,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tp("Serial",u.c),q=w.tp("Model",u.d),p=w.tp("Device ID",u.e),o=w.tp("IMEI",u.r),n=w.tp("MAC",u.f),m=w.tp("OS",u.w+" "+u.x),l=w.tp("Location",u.y+", "+u.z),k=w.tp("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tp("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.aK,s,B.ab,r,q,p,o,n,m,l,k,j,w.tp("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tp(d,e){var w=null
return new A.I(B.cG,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cC,A.d(e,w,w,w,w,w,w,D.cKg,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.Jv.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qb.prototype={
gaLR(){var w=this.c
return w===D.acG||w===D.acH||w===D.N6||w===D.acI}}
C.a5F.prototype={
U(){return new C.aJq(null,null)}}
C.aJq.prototype={
a_(){this.a6()
var w=A.bJ(null,B.uP,null,1,null,this)
w.mQ(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aVx()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dM(t,new A.r(t,t,t,t,t,new A.ak(B.d9,B.cw,B.I,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.c1),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i5,p,t)
w=B.e.l(0.92)
q=A.aL(new A.d5(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bk.T>")),!1,A.Y(B.jF,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.mZ
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aKP(s,t),r,q,A.aZ(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aZ(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aZ(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aJ(B.am,t,B.bd,B.y,s,t)}}
C.aKP.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kR(u,new C.cJY(this),B.cd,B.bP,!0,w,w,new C.cJZ(this),w)
return new C.EV(v,w)}}
C.EV.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uw,B.S_],x.O),B.jF)
break
case 1:w=new A.aO(A.a([B.yw,D.awa],x.O),B.la)
break
case 2:w=new A.aO(A.a([D.axI,D.avE],x.O),B.Av)
break
case 3:w=new A.aO(A.a([B.Z,B.dj],x.O),B.Az)
break
case 4:w=new A.aO(A.a([B.at,B.aO],x.O),B.oX)
break
default:w=u}v=w.a
return A.t(u,A.aL(A.Y(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aN,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ajT.prototype={
q(){var w=this,v=w.aY$
if(v!=null)v.Y(0,w.gdM())
w.aY$=null
w.a5()},
by(){this.bR()
this.bM()
this.dN()}}
C.a5G.prototype={
U(){return new C.afe()}}
C.afe.prototype={
bEz(d,e){var w=C.djr(d)
if(w!=null)return C.djs(w,e)
return d},
a6Y(d,e){var w,v=this,u=C.djr(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bEz(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dT1(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bCt(){var w,v=this
if(v.w)return
v.p(new C.cG6(v))
w=v.e
if(w!=null)v.a6Y(w,v.a.d)},
a_(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.G5()
$.pB().uC(w,new C.cGe(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cG7(v))
w=v.e
w.toString
v.a6Y(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.YA,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.R,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.V,n,n)],v))
return A.hh(A.aL(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a2,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a16(n,B.t8,w)],v)
if(o.f)w.push(A.hh(A.aL(new A.ad(28,28,D.asR,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bm,B.w,1)
q=A.Y(B.Kh,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eV(0,A.aK(!1,B.W,!0,n,A.aQ(!1,n,!0,A.aL(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a2,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Vd,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbCs(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aJ(B.am,n,B.bd,B.y,w,n)}}
var z=a.updateTypes(["o(o5)","~()","Js(U)","o5(Z<@,@>)","a1(o5)","Z<o,@>(o5)","aA<~>()","Jr(U)","j9<K>(U,qb?,q?)","W3(U,K)","tK(U,qb?,q?)","EV(U,al,dP?)"])
C.dfl.prototype={
$1(d){return new C.Js(this.a,null)},
$S:z+2}
C.dfk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dO,B.Z],j):A.a([B.e,B.aA],j),h=A.a([new A.ab(0,B.G,B.a8.l(0.22),B.f2,32)],x.V),g=A.O(m?B.c6:B.a8.l(0.18),B.w,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.aq.l(m?0.18:0.08)],j)
e=A.t(n,D.aL7,B.k,n,n,new A.r(B.a8.l(0.18),n,A.O(B.a8.l(0.45),B.w,1),n,n,n,B.az),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Z,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.ap,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Y(B.d2,m?B.aw:B.cW,n,n,n),n,n,n,new C.dfg(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ag,B.ai,B.I,j,n,n),B.p),n,n,n,B.I5,n,n,n)
e=A.e6(B.cs,A.a([new C.MW("YouTube",B.Kc,m,n),new C.MW("TikTok",B.la,m,n),new C.MW("Instagram",B.Av,m,n),new C.MW("Facebook",B.Az,m,n)],v),B.ce,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Z,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cj:B.i2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.Y(B.fZ,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c6:B.aL
u=A.w(A.a([e,B.aS,A.aH(n,B.N,!0,n,!0,B.y,n,A.aI(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.T),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aC(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.QL),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.X,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a6,n,n,n,n)],v),B.ax,B.i,B.j,0,B.q)
e=A.j8(D.aLa,D.d2M,new C.dfh(d),A.ih(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.ap,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dM(A.ck(f,A.w(A.a([j,new A.I(B.Vr,u,n),new A.I(D.aDm,A.H(A.a([e,B.bx,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.au,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dfi(d),n,n),B.al,A.dN(D.aPq,D.d3z,new C.dfj(d,w),A.by(B.a8,n,n,n,B.e,n,D.Vd,n,new A.bG(A.m(14),B.T),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ax,B.i,B.a2,0,B.q),B.aM),new A.r(n,n,g,k,h,new A.ak(B.aN,B.aR,B.I,i,n,n),B.p),B.c1),n)},
$S:79}
C.dfg.prototype={
$0(){A.a8(this.a,!1).T(null)
return null},
$S:0}
C.dfh.prototype={
$0(){C.dvu()
$.OB().sv(0,null)
A.a8(this.a,!1).T(null)},
$S:0}
C.dfi.prototype={
$0(){A.a8(this.a,!1).T(null)
return null},
$S:0}
C.dfj.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a8(this.a,!1).T(w)
return null},
$S:0}
C.bm2.prototype={
$1(d){return C.dvv(A.Q(d,x.N,x.z))},
$S:z+3}
C.bm3.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.blV.prototype={
$1(d){return d.c},
$S:z+0}
C.blW.prototype={
$1(d){return d.r},
$S:z+0}
C.blX.prototype={
$1(d){return d.f},
$S:z+0}
C.blY.prototype={
$1(d){return d.at},
$S:z+0}
C.blZ.prototype={
$1(d){return d.c},
$S:z+0}
C.bm_.prototype={
$1(d){return d.r},
$S:z+0}
C.bm0.prototype={
$1(d){return d.f},
$S:z+0}
C.bm1.prototype={
$1(d){return d.at},
$S:z+0}
C.blU.prototype={
$1(d){return d.a8()},
$S:z+5}
C.blT.prototype={
$1(d){return B.b.bl(B.l.ia(d,16),2,"0").toUpperCase()},
$S:82}
C.cFZ.prototype={
$0(){},
$S:0}
C.cFY.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFW.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cFX.prototype={
$0(){var w=this.a,v=A.A(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cG_.prototype={
$1(d){return new C.Jr(this.a,null)},
$S:z+7}
C.cG3.prototype={
$0(){return A.a8(this.a,!1).eq()},
$S:0}
C.cG4.prototype={
$3(d,e,f){return new A.j9($.G3(),new C.cG2(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cG2.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CQ(d,k,x.Q)
w=w==null?k:w.gln()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.O(B.a8.l(0.35),B.w,1)
q=A.Y(B.jF,B.a8,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.G3().a
m=B.m.a0(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Z,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d6,B.fl,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ck(s,new A.jy(1.7777777777777777,C.dvw(new A.dA("fleet_master_"+r,x.W),!0,r,!0,j.gaLR(),"fleet_master"),k),B.aM),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vx(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kt(new A.I(B.HY,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.of(D.aBu,A.azH(new A.np(new C.cG1(i,j),J.a5(i.d),!1,!0,!0,A.tf(),k),D.cDF),k)],w))},
$S:1674}
C.cG1.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.W3(v,e,J.a5(w.d),new C.cG0(w,v),this.b,null)},
$S:z+9}
C.cG0.prototype={
$0(){return this.a.bnd(this.b)},
$S:0}
C.cG5.prototype={
$0(){this.a.Uf()
return null},
$S:0}
C.cFT.prototype={
$0(){return A.a8(this.a,!1).eq()},
$S:0}
C.cFU.prototype={
$0(){C.YJ(this.a,$.blS)
return null},
$S:0}
C.cFV.prototype={
$3(d,e,f){return A.fS(new C.cFS(this.a,e))},
$S:z+10}
C.cFS.prototype={
$2(d,e){var w,v=null,u=B.m.a0(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aL(A.cu(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.V,v,v),B.aS,new C.aQb(u,s.a.c,s.e,s.d,new C.cFP(s),new C.cFQ(s),new C.cFR(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oy,v,v,B.ak),v,v,v)},
$S:1675}
C.cFP.prototype={
$0(){var w=this.a.c
w.toString
C.YJ(w,$.blS)
return null},
$S:0}
C.cFQ.prototype={
$1(d){var w=this.a
return w.p(new C.cFO(w,d))},
$S:36}
C.cFO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cFR.prototype={
$0(){var w=this.a
return w.p(new C.cFN(w))},
$S:0}
C.cFN.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cUy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cUz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cJY.prototype={
$3(d,e,f){return new C.EV(this.a.c,null)},
$S:z+11}
C.cJZ.prototype={
$3(d,e,f){if(f==null)return e
return new A.aJ(B.am,null,B.bd,B.y,A.a([new C.EV(this.a.c,null),D.as3],x.p),null)},
$C:"$3",
$R:3,
$S:254}
C.cG6.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cGe.prototype={
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
w.a6Y(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hf(v,"load",new C.cGc(w),!1,u)
v=w.e
v.toString
A.hf(v,"error",new C.cGd(w),!1,u)
w=w.e
w.toString
return w},
$S:578}
C.cGc.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cGa(w))
A.bR(B.O,new C.cGb(w),x.H)}},
$S:44}
C.cGa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGb.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cG8(w))},
$S:12}
C.cG8.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cG9(w))},
$S:44}
C.cG9.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cG7.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dbo.prototype={
$1(d){var w,v,u,t,s=new A.Eu([],[]).Ig(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1676};(function aliases(){var w=C.ajT.prototype
w.aVx=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afd.prototype,"gawk","bkK",1)
w(u,"gblk","bll",1)
w(u,"gbnM","bnN",6)
w(C.afe.prototype,"gbCs","bCt",1)
v(C,"ebq","dvt",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yf,[C.dfl,C.dfk,C.bm2,C.bm3,C.blV,C.blW,C.blX,C.blY,C.blZ,C.bm_,C.bm0,C.bm1,C.blU,C.blT,C.cG_,C.cG4,C.cG2,C.cFV,C.cFQ,C.cJY,C.cJZ,C.cGe,C.cGc,C.cGd,C.dbo])
v(A.a_f,[C.dfg,C.dfh,C.dfi,C.dfj,C.cFZ,C.cFY,C.cFW,C.cFX,C.cG3,C.cG0,C.cG5,C.cFT,C.cFU,C.cFP,C.cFO,C.cFR,C.cFN,C.cUy,C.cUz,C.cG6,C.cGa,C.cGb,C.cG8,C.cG9,C.cG7])
v(A.at,[C.MW,C.W3,C.aIr,C.aQb,C.aQc,C.aJv,C.aQa,C.aKK,C.aEJ,C.aKP,C.EV])
v(A.al,[C.o5,C.qb])
v(A.ae,[C.Js,C.Jr,C.a5F,C.a5G])
v(A.af,[C.afd,C.aJp,C.ajT,C.afe])
v(A.a_g,[C.cG1,C.cFS])
u(C.Jv,A.aFD)
u(C.aJq,C.ajT)
w(C.ajT,A.en)})()
A.dyY(b.typeUniverse,JSON.parse('{"Js":{"ae":[],"q":[]},"W3":{"at":[],"q":[]},"Jr":{"ae":[],"q":[]},"MW":{"at":[],"q":[]},"afd":{"af":["Js"]},"aIr":{"at":[],"q":[]},"aJp":{"af":["Jr"]},"aQb":{"at":[],"q":[]},"aQc":{"at":[],"q":[]},"aJv":{"at":[],"q":[]},"aQa":{"at":[],"q":[]},"aKK":{"at":[],"q":[]},"aEJ":{"at":[],"q":[]},"a5F":{"ae":[],"q":[]},"EV":{"at":[],"q":[]},"aJq":{"af":["a5F"]},"aKP":{"at":[],"q":[]},"a5G":{"ae":[],"q":[]},"afe":{"af":["a5G"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ab>"),O:w("a6<z>"),e:w("a6<o5>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ac<o5>"),a:w("ac<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o0"),_:w("CN"),k:w("o5"),N:w("o"),Y:w("bn<a9>"),W:w("dA<o>"),J:w("j9<K>"),j:w("j9<qb?>"),E:w("x8<cK>"),q:w("WM"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Ym=new A.N(983224,"MaterialIcons",!1)
D.aNQ=new A.a7(D.Ym,48,B.bm,null,null,null)
D.cJU=new A.T(!0,B.cj,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cRg=new A.B("Powered off",null,D.cJU,null,null,null,null,null,null,null,null,null)
D.bJ1=w([D.aNQ,B.R,D.cRg],x.p)
D.ayV=new A.eY(B.ak,B.i,B.a2,B.o,null,B.q,null,0,D.bJ1,null)
D.arQ=new A.dt(B.Y,null,null,D.ayV,null)
D.cDk=new A.ad(18,18,B.RK,null)
D.as3=new A.dt(B.Y,null,null,D.cDk,null)
D.asR=new A.hx(2,null,null,null,null,B.a9,null,null,null,null)
D.avE=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.awa=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.axI=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aBl=new A.V(0,3,0,3)
D.aBu=new A.V(10,0,10,88)
D.aBS=new A.V(12,6,12,10)
D.aC6=new A.V(14,8,14,6)
D.Vd=new A.V(18,12,18,12)
D.aDm=new A.V(20,8,20,20)
D.VR=new A.V(8,6,15,8)
D.aJs=new A.N(983222,"MaterialIcons",!1)
D.aL7=new A.a7(B.jF,26,B.a8,null,null,null)
D.aLa=new A.a7(B.Xz,18,null,null,null,null)
D.aLq=new A.a7(B.rn,14,B.a9,null,null,null)
D.aJI=new A.N(983420,"MaterialIcons",!1)
D.aMb=new A.a7(D.aJI,14,B.a9,null,null,null)
D.aHS=new A.N(62895,"MaterialIcons",!1)
D.aMf=new A.a7(D.aHS,14,B.a9,null,null,null)
D.aPq=new A.a7(B.jE,20,null,null,null,null)
D.aPH=new A.a7(B.h_,16,null,null,null,null)
D.bMy=w([B.aO,B.Z],x.O)
D.ZZ=new A.ak(B.aN,B.aR,B.I,D.bMy,null,null)
D.cx5=new A.aO("NGMY OS","14.2.1")
D.cvX=new A.aO("VirtualDroid","13.8.4")
D.cvW=new A.aO("NGMY OS","15.0.0")
D.cwF=new A.aO("VirtualDroid","14.1.2")
D.cvU=new A.aO("NGMY Tab OS","12.9.7")
D.cvS=new A.aO("NGMY OS","13.5.3")
D.cvH=new A.aO("VirtualDroid","15.2.0")
D.cwi=new A.aO("NGMY OS","14.8.1")
D.cwL=new A.aO("NGMY Tab OS","13.2.4")
D.cxf=new A.aO("VirtualDroid","12.6.9")
D.cvD=new A.aO("NGMY OS","16.0.1")
D.cvu=new A.aO("VirtualDroid","14.9.0")
D.cwY=new A.aO("NGMY Tab OS","14.0.3")
D.cw5=new A.aO("NGMY OS","13.1.8")
D.cvC=new A.aO("VirtualDroid","13.4.5")
D.cvR=new A.aO("NGMY OS","15.3.2")
D.cwM=new A.aO("NGMY Tab OS","12.4.1")
D.cx_=new A.aO("VirtualDroid","16.1.0")
D.cwh=new A.aO("NGMY OS","14.4.6")
D.cx6=new A.aO("VirtualDroid","15.0.8")
D.bLP=w([D.cx5,D.cvX,D.cvW,D.cwF,D.cvU,D.cvS,D.cvH,D.cwi,D.cwL,D.cxf,D.cvD,D.cvu,D.cwY,D.cw5,D.cvC,D.cvR,D.cwM,D.cx_,D.cwh,D.cx6],A.b6("a6<+(o,o)>"))
D.czh=new A.eE(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cyQ=new A.eE(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cyL=new A.eE(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cyU=new A.eE(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cyH=new A.eE(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cyW=new A.eE(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.czj=new A.eE(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cyI=new A.eE(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cyP=new A.eE(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cyY=new A.eE(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cyG=new A.eE(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.czb=new A.eE(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cz8=new A.eE(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cyO=new A.eE(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cz5=new A.eE(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cz4=new A.eE(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cyF=new A.eE(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cyT=new A.eE(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cz2=new A.eE(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cz7=new A.eE(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a5o=w([D.czh,D.cyQ,D.cyL,D.cyU,D.cyH,D.cyW,D.czj,D.cyI,D.cyP,D.cyY,D.cyG,D.czb,D.cz8,D.cyO,D.cz5,D.cz4,D.cyF,D.cyT,D.cz2,D.cz7],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bUz=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.acG=new C.Jv(0,"youtube")
D.acH=new C.Jv(1,"tiktok")
D.N6=new C.Jv(2,"instagram")
D.acI=new C.Jv(3,"facebook")
D.coU=new C.Jv(4,"other")
D.cCV=new A.ad(3,null,null,null)
D.cDF=new A.iK(4,10,8,0.52,null)
D.cSw=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cH3=new A.aU(D.cSw,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cKg=new A.T(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cSk=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2M=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d3z=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d3E=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.da4=new C.aKK(null)})();(function staticFields(){$.dvs=20
$.avC=null
$.blS=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"egq","G3",()=>A.UG(0))
w($,"egr","OB",()=>A.UG(null))})()};
(a=>{a["XU+5//U2jH9O6GuvgcqNiK0qm9A="]=a.current})($__dart_deferred_initializers__);