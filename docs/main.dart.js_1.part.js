((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eco(d,e){A.a8(d,!1).cH(A.eJ(new C.df8(e),!0,null,x.H))},
YH(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Oz()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aE,B.ar),t)
w=3
return A.b(A.dq(B.M,new C.df7(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YH)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dSU(r)
if(q==null){d.G(x.q).f.R(D.cH_)
w=1
break}w=4
return A.b(A.bR(B.i6,null,x.H),$async$YH)
case 4:if(d.e==null){w=1
break}n=B.l.a0(e,1,999)
$.dvf=n
p=C.dSO(n)
n=$.G1()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.djg(q)
d.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
dvi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
Js(d){return C.dSX(d)},
dSX(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Js=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Js)
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
k=A.ds(k,new C.blY(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.A(new A.ag(k,new C.blZ(),j),j.j("G.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dvk(q)
w=12
return A.b(C.Jr(a3,p),$async$Js)
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
case 19:m=C.dvi(A.R(n,x.N,x.z))
l=C.dvk(A.a([m],x.e))
w=21
return A.b(C.Jr(a3,l),$async$Js)
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
case 18:case 14:q=C.dSV()
w=22
return A.b(C.Jr(a3,q),$async$Js)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Js,v)},
dvk(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.blQ(),w).eE(0),u=new A.D(d,new C.blR(),w).eE(0),t=new A.D(d,new C.blS(),w).eE(0),s=new A.D(d,new C.blT(),w).eE(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.djh(null,q,u,t,v,s));++q}return r},
avB(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$avB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Js(d),$async$avB)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.d8(t,new C.blU(),s).eE(0)
p=r.d8(t,new C.blV(),s).eE(0)
o=r.d8(t,new C.blW(),s).eE(0)
n=r.d8(t,new C.blX(),s).eE(0)
m=C.djh(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Jr(d,t),$async$avB)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avB,v)},
Jr(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Jr)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.blP(),x.P)
s=A.A(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$Jr)
case 3:return A.h(null,v)}})
return A.i($async$Jr,v)},
dSV(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dH(20,x.k)
for(w=0;w<20;++w)q[w]=C.djh(w,w,t,s,u,r)
return q},
djh(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jv(),h=d==null,g=D.a5m[B.l.ae(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a5m[B.l.ae(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.D(p,new C.blO(),A.W(p).j("D<1,o>")).fl(0)
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
k=D.bUu[w]
j=D.bLL[w]
return new C.o5("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bl(B.l.n(e+1),2,"0"),u,k,C.dSW(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().Z())},
dSW(d,e){var w,v=J.dH(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bl(B.l.ia(d.bF(256),16),2,"0")
return B.h.fl(v)},
df8:function df8(d){this.a=d},
df7:function df7(d,e){this.a=d
this.b=e},
df3:function df3(d){this.a=d},
df4:function df4(d){this.a=d},
df5:function df5(d){this.a=d},
df6:function df6(d,e){this.a=d
this.b=e},
MT:function MT(d,e,f,g){var _=this
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
blY:function blY(){},
blZ:function blZ(){},
blQ:function blQ(){},
blR:function blR(){},
blS:function blS(){},
blT:function blT(){},
blU:function blU(){},
blV:function blV(){},
blW:function blW(){},
blX:function blX(){},
blP:function blP(){},
blO:function blO(){},
Jq:function Jq(d,e){this.c=d
this.a=e},
af9:function af9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cFM:function cFM(){},
cFL:function cFL(d,e){this.a=d
this.b=e},
cFJ:function cFJ(d){this.a=d},
cFK:function cFK(d,e){this.a=d
this.b=e},
cFN:function cFN(d){this.a=d},
cFR:function cFR(d){this.a=d},
cFS:function cFS(d,e){this.a=d
this.b=e},
cFQ:function cFQ(d,e,f){this.a=d
this.b=e
this.c=f},
cFP:function cFP(d,e){this.a=d
this.b=e},
cFO:function cFO(d,e){this.a=d
this.b=e},
cFT:function cFT(d){this.a=d},
W1:function W1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIp:function aIp(d,e){this.c=d
this.a=e},
Jp:function Jp(d,e){this.c=d
this.a=e},
aJn:function aJn(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cFG:function cFG(d){this.a=d},
cFH:function cFH(d){this.a=d},
cFI:function cFI(d){this.a=d},
cFF:function cFF(d,e){this.a=d
this.b=e},
cFC:function cFC(d){this.a=d},
cFD:function cFD(d){this.a=d},
cFB:function cFB(d,e){this.a=d
this.b=e},
cFE:function cFE(d){this.a=d},
cFA:function cFA(d){this.a=d},
aQ9:function aQ9(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQa:function aQa(d,e,f){this.c=d
this.d=e
this.a=f},
aJt:function aJt(d,e){this.c=d
this.a=e},
aQ8:function aQ8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cUl:function cUl(d){this.a=d},
cUm:function cUm(d){this.a=d},
aKI:function aKI(d){this.a=d},
aEH:function aEH(d,e){this.c=d
this.a=e},
dSU(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dST(v)
if(u!=null)return new C.qb(w,C.djf(u,!1),D.acD,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dSS(v)
if(t!=null)return new C.qb(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.acE,"TikTok",q)
s=C.dSR(w,v)
if(s!=null)return s
r=C.dSQ(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qb(w,w,D.coQ,"Video",q)
return q},
dSR(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).df(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qb(d,"https://www.instagram.com/reel/"+w+u,D.N5,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).df(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qb(d,"https://www.instagram.com/p/"+w+u,D.N5,t,null)}return null},
dSQ(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qb(d,"https://www.facebook.com/plugins/video.php?href="+A.f1(2,d,B.ba,!1)+"&show_text=false&width=734",D.acF,"Facebook",null)},
dST(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].df(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dSS(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).df(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).df(d)
return w==null?null:w.b[1]},
Jt:function Jt(d,e){this.a=d
this.b=e},
qb:function qb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5C:function a5C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJo:function aJo(d,e){var _=this
_.d=$
_.d3$=d
_.aY$=e
_.c=_.a=null},
aKN:function aKN(d,e){this.c=d
this.a=e},
cJL:function cJL(d){this.a=d},
cJM:function cJM(d){this.a=d},
EU:function EU(d,e){this.c=d
this.a=e},
ajP:function ajP(){},
dvj(d,e,f,g,h,i){return new C.a5D(i,f,h,e,g,d)},
eaN(d){var w=window
w.toString
A.hf(w,"message",new C.dbb(d),!1,x._)},
a5D:function a5D(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afa:function afa(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cFU:function cFU(d){this.a=d},
cG1:function cG1(d){this.a=d},
cG_:function cG_(d){this.a=d},
cFY:function cFY(d){this.a=d},
cFZ:function cFZ(d){this.a=d},
cFW:function cFW(d){this.a=d},
cG0:function cG0(d){this.a=d},
cFX:function cFX(d){this.a=d},
cFV:function cFV(d){this.a=d},
dbb:function dbb(d){this.a=d},
dvd(){var w,v,u
try{v=A.Al()
w=v.grI(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
djf(d,e){var w=C.dvd(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f1(2,w,B.ba,!1))
v.push("widget_referrer="+A.f1(2,w,B.ba,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bm(v,"&")},
dje(d){var w=A.aq(y.c,!0,!1,!1,!1).df(d)
return w==null?null:w.b[1]},
dve(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dSN(d,e,f){var w,v,u=C.dje(d)
if(u!=null){if(f){w=C.dvd()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dve(C.djf(u,e))}return C.dve(d)},
dSO(d){if(d<=4)return 0
return B.l.aK(d-1,4)*4},
dSP(d){var w
if($.Oz().a==null)return!1
w=$.G1().a
return d>=w&&d<w+4},
dvh(){var w=$.avA
if(w!=null)w.ad(0)
$.avA=null
$.G1().sv(0,0)},
dvg(){var w,v,u,t=$.Oz()
if(t.a==null)return
w=$.avA
if(w!=null)w.ad(0)
v=$.dvf
if(v<=4){t=t.a
t.toString
C.djg(t)
return}w=$.G1()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.djg(t)},
djg(d){var w=$.avA
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
default:w=null}$.avA=A.dK(A.dp(0,0,0,0,0,w),C.ebc())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.MT.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.O(B.a8.l(0.25),B.w,1),r=A.Y(this.d,B.a8,w,w,14)
return A.t(w,A.H(A.a([r,B.fK,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c2,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a2,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fB,w,w,w)}}
C.o5.prototype={
a8(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Jq.prototype={
U(){return new C.af9(A.a([],x.e))},
ge8(){return this.c}}
C.af9.prototype={
a_(){var w=this
w.a6()
$.G1().ao(0,w.gawh())
C.eaN(w.gblf())
w.Yd()},
bkF(){if(this.c!=null)this.p(new C.cFM())},
blg(){C.dvg()},
q(){$.G1().Y(0,this.gawh())
C.dvh()
$.Oz().sv(0,null)
this.a5()},
Yd(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Js(t.a.c),$async$Yd)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cFL(t,s))
$.blN=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Yd,v)},
Uf(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cFJ(t))
w=3
return A.b(C.avB(t.a.c),$async$Uf)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cFK(t,s))
$.blN=J.a5(t.d)
t.c.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Uf,v)},
bn8(d){var w=this.c
w.toString
A.a8(w,!1).cH(A.eJ(new C.cFN(d),!1,null,x.H))},
bnI(){var w=this.c
w.toString
return C.YH(w,J.a5(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.f8:B.bC,s=A.aM(v,v,v,v,B.Km,v,v,v,new C.cFR(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a5(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Dm(A.H(A.a([A.J(new A.I(B.j0,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.Z,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.W,!0,v,A.aQ(!1,v,!0,new A.I(B.bc,A.Y(B.h_,B.a8,v,v,28),v),B.cH,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbnH(),v,v,v,v,v,v,v),B.k,B.M,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c5(!0,A.w(A.a([new A.I(D.VP,r,v),A.J(w.e?B.mP:new A.j9($.Oz(),new C.cFS(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.apI(B.a8,B.FY,B.m7,D.d3z,w.e?v:new C.cFT(w)),v)}}
C.W1.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.ab(0,B.G,B.a8.l(0.18),B.dg,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5C(n,!0,!C.dSP(w),"Fold "+(B.l.aK(w,4)+1)+"/"+B.l.aK(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jE,B.mZ,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aV,B.j,0,B.q),B.k,B.yx,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.W,!0,u,A.aQ(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ck(p,A.hh(A.w(A.a([new C.aIp(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.AQ,B.a8.l(0.85),u,u,9),D.cCR,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aV,B.j,0,u,u),B.k,B.at,u,u,u,u,u,D.aBh,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aM),B.k,u,u,new A.r(u,u,r,s,q,D.ZX,B.p),u,u,u,B.fX,u,u,u),1),B.aK,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.aa)}}
C.aIp.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.rm,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.at,w,w,w,w,w,B.VF,w,w,w)}}
C.Jp.prototype={
U(){return new C.aJn()}}
C.aJn.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.f8:B.bC,t=A.aM(w,w,w,w,B.Km,w,w,w,new C.cFG(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c5(!0,A.w(A.a([new A.I(D.VP,A.H(A.a([t,A.J(new A.Dm(A.H(A.a([A.J(new A.I(B.j0,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.Z,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.W,!0,w,A.aQ(!1,w,!0,new A.I(B.bc,A.Y(B.h_,B.a8,w,w,28),w),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cFH(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.j9($.Oz(),new C.cFI(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aQ9.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ab(0,B.G,B.a8.l(0.35),B.f2,28),new A.ab(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dvj(new A.dA(v+"_full_"+u,x.W),!1,u,!1,w.gaLN(),v+"_full")
w=v}else w=new C.aJt(t.r,s)}else w=new C.aEH(m,s)
else w=D.da_
return A.t(s,A.ck(n,A.hh(A.w(A.a([new C.aQa(m,l,s),A.J(w,1),new C.aQ8(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aM),B.k,s,s,new A.r(s,s,o,q,p,D.ZX,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQa.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dy(r)
r=A.hH(r)
w=new A.dz(q,r)
v=w.gJ_()===0?12:w.gJ_()
r=B.b.bl(B.l.n(r),2,"0")
q=(q<12?B.fU:B.iY)===B.fU?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.my,s,s,s),B.bw,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bR,D.aM7,B.eh,D.aLm,B.eh,D.aMb],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.H(A.a([A.Y(B.Kc,B.a8.l(0.9),s,s,12),B.eh,A.J(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.at,s,s,s,s,s,D.aC2,s,s,s)}}
C.aJt.prototype={
C(d){var w=null
return A.t(w,A.aL(A.w(A.a([A.Y(B.Ao,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eC(D.aPD,D.cSg,this.c,A.em(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aC(B.a8.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a2,0,B.q),w,w,w),B.k,B.yx,w,w,w,w,w,w,w,w,1/0)}}
C.aQ8.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aw9(B.AH,"YouTube",s===0,r,new C.cUl(u))
s=u.aw9(B.l9,"Device",s===1,r,new C.cUm(u))
w=r?"Power off":"Power on"
v=r?D.Yk:D.aJo
return A.t(t,A.H(A.a([q,B.al,s,B.bw,A.aM(t,t,t,t,A.Y(v,r?B.bB:B.fo,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dn)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.at,t,t,t,t,t,D.aBO,t,t,t)},
aw9(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a8:B.aw
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.J(A.aK(!1,B.W,!0,u,A.aQ(!1,A.m(10),!0,new A.I(B.n8,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a2,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aKI.prototype={
C(d){return D.arO}}
C.aEH.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lv,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tp("Serial",u.c),q=w.tp("Model",u.d),p=w.tp("Device ID",u.e),o=w.tp("IMEI",u.r),n=w.tp("MAC",u.f),m=w.tp("OS",u.w+" "+u.x),l=w.tp("Location",u.y+", "+u.z),k=w.tp("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tp("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.aK,s,B.ab,r,q,p,o,n,m,l,k,j,w.tp("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tp(d,e){var w=null
return new A.I(B.cG,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cC,A.d(e,w,w,w,w,w,w,D.cKc,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.Jt.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qb.prototype={
gaLN(){var w=this.c
return w===D.acD||w===D.acE||w===D.N5||w===D.acF}}
C.a5C.prototype={
U(){return new C.aJo(null,null)}}
C.aJo.prototype={
a_(){this.a6()
var w=A.bJ(null,B.uP,null,1,null,this)
w.mQ(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aVt()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dM(t,new A.r(t,t,t,t,t,new A.ak(B.d9,B.cw,B.I,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.c1),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i5,p,t)
w=B.e.l(0.92)
q=A.aL(new A.d5(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bk.T>")),!1,A.Y(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.mZ
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aKN(s,t),r,q,A.aY(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aY(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aY(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aJ(B.am,t,B.bd,B.y,s,t)}}
C.aKN.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kQ(u,new C.cJL(this),B.cd,B.bP,!0,w,w,new C.cJM(this),w)
return new C.EU(v,w)}}
C.EU.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uv,B.RY],x.O),B.jE)
break
case 1:w=new A.aO(A.a([B.yx,D.aw7],x.O),B.la)
break
case 2:w=new A.aO(A.a([D.axF,D.avB],x.O),B.Aw)
break
case 3:w=new A.aO(A.a([B.Z,B.dj],x.O),B.AA)
break
case 4:w=new A.aO(A.a([B.at,B.aO],x.O),B.oX)
break
default:w=u}v=w.a
return A.t(u,A.aL(A.Y(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aN,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ajP.prototype={
q(){var w=this,v=w.aY$
if(v!=null)v.Y(0,w.gdM())
w.aY$=null
w.a5()},
by(){this.bR()
this.bM()
this.dN()}}
C.a5D.prototype={
U(){return new C.afa()}}
C.afa.prototype={
bEu(d,e){var w=C.dje(d)
if(w!=null)return C.djf(w,e)
return d},
a6W(d,e){var w,v=this,u=C.dje(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bEu(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dSN(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bCo(){var w,v=this
if(v.w)return
v.p(new C.cFU(v))
w=v.e
if(w!=null)v.a6W(w,v.a.d)},
a_(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.G3()
$.pB().uC(w,new C.cG1(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cFV(v))
w=v.e
w.toString
v.a6W(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Yy,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.R,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.V,n,n)],v))
return A.hh(A.aL(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a2,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a14(n,B.t7,w)],v)
if(o.f)w.push(A.hh(A.aL(new A.ad(28,28,D.asO,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bm,B.w,1)
q=A.Y(B.Kg,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eV(0,A.aK(!1,B.W,!0,n,A.aQ(!1,n,!0,A.aL(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a2,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Vb,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbCn(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aJ(B.am,n,B.bd,B.y,w,n)}}
var z=a.updateTypes(["o(o5)","~()","Jq(U)","o5(Z<@,@>)","a1(o5)","Z<o,@>(o5)","aA<~>()","Jp(U)","j9<K>(U,qb?,q?)","W1(U,K)","tJ(U,qb?,q?)","EU(U,al,dP?)"])
C.df8.prototype={
$1(d){return new C.Jq(this.a,null)},
$S:z+2}
C.df7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dO,B.Z],j):A.a([B.e,B.aA],j),h=A.a([new A.ab(0,B.G,B.a8.l(0.22),B.f2,32)],x.V),g=A.O(m?B.c6:B.a8.l(0.18),B.w,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.aq.l(m?0.18:0.08)],j)
e=A.t(n,D.aL3,B.k,n,n,new A.r(B.a8.l(0.18),n,A.O(B.a8.l(0.45),B.w,1),n,n,n,B.az),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Z,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.ap,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Y(B.d2,m?B.aw:B.cW,n,n,n),n,n,n,new C.df3(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ag,B.ai,B.I,j,n,n),B.p),n,n,n,B.I4,n,n,n)
e=A.e6(B.cs,A.a([new C.MT("YouTube",B.Kb,m,n),new C.MT("TikTok",B.la,m,n),new C.MT("Instagram",B.Aw,m,n),new C.MT("Facebook",B.AA,m,n)],v),B.ce,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Z,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cj:B.i2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bC
r=A.Y(B.fZ,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c6:B.aL
u=A.w(A.a([e,B.aS,A.aH(n,B.N,!0,n,!0,B.y,n,A.aI(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.T),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aC(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.QI),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.X,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a6,n,n,n,n)],v),B.ax,B.i,B.j,0,B.q)
e=A.j8(D.aL6,D.d2H,new C.df4(d),A.ih(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.ap,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dM(A.ck(f,A.w(A.a([j,new A.I(B.Vp,u,n),new A.I(D.aDi,A.H(A.a([e,B.bw,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.au,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.df5(d),n,n),B.al,A.dN(D.aPm,D.d3u,new C.df6(d,w),A.by(B.a8,n,n,n,B.e,n,D.Vb,n,new A.bG(A.m(14),B.T),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ax,B.i,B.a2,0,B.q),B.aM),new A.r(n,n,g,k,h,new A.ak(B.aN,B.aR,B.I,i,n,n),B.p),B.c1),n)},
$S:82}
C.df3.prototype={
$0(){A.a8(this.a,!1).T(null)
return null},
$S:0}
C.df4.prototype={
$0(){C.dvh()
$.Oz().sv(0,null)
A.a8(this.a,!1).T(null)},
$S:0}
C.df5.prototype={
$0(){A.a8(this.a,!1).T(null)
return null},
$S:0}
C.df6.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a8(this.a,!1).T(w)
return null},
$S:0}
C.blY.prototype={
$1(d){return C.dvi(A.R(d,x.N,x.z))},
$S:z+3}
C.blZ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.blQ.prototype={
$1(d){return d.c},
$S:z+0}
C.blR.prototype={
$1(d){return d.r},
$S:z+0}
C.blS.prototype={
$1(d){return d.f},
$S:z+0}
C.blT.prototype={
$1(d){return d.at},
$S:z+0}
C.blU.prototype={
$1(d){return d.c},
$S:z+0}
C.blV.prototype={
$1(d){return d.r},
$S:z+0}
C.blW.prototype={
$1(d){return d.f},
$S:z+0}
C.blX.prototype={
$1(d){return d.at},
$S:z+0}
C.blP.prototype={
$1(d){return d.a8()},
$S:z+5}
C.blO.prototype={
$1(d){return B.b.bl(B.l.ia(d,16),2,"0").toUpperCase()},
$S:80}
C.cFM.prototype={
$0(){},
$S:0}
C.cFL.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFJ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cFK.prototype={
$0(){var w=this.a,v=A.A(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cFN.prototype={
$1(d){return new C.Jp(this.a,null)},
$S:z+7}
C.cFR.prototype={
$0(){return A.a8(this.a,!1).eq()},
$S:0}
C.cFS.prototype={
$3(d,e,f){return new A.j9($.G1(),new C.cFQ(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cFQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CP(d,k,x.Q)
w=w==null?k:w.gln()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.O(B.a8.l(0.35),B.w,1)
q=A.Y(B.jE,B.a8,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.G1().a
m=B.m.a0(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Z,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d6,B.fl,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ck(s,new A.jx(1.7777777777777777,C.dvj(new A.dA("fleet_master_"+r,x.W),!0,r,!0,j.gaLN(),"fleet_master"),k),B.aM),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vx(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.ks(new A.I(B.HX,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.of(D.aBq,A.azF(new A.np(new C.cFP(i,j),J.a5(i.d),!1,!0,!0,A.te(),k),D.cDB),k)],w))},
$S:1672}
C.cFP.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.W1(v,e,J.a5(w.d),new C.cFO(w,v),this.b,null)},
$S:z+9}
C.cFO.prototype={
$0(){return this.a.bn8(this.b)},
$S:0}
C.cFT.prototype={
$0(){this.a.Uf()
return null},
$S:0}
C.cFG.prototype={
$0(){return A.a8(this.a,!1).eq()},
$S:0}
C.cFH.prototype={
$0(){C.YH(this.a,$.blN)
return null},
$S:0}
C.cFI.prototype={
$3(d,e,f){return A.fS(new C.cFF(this.a,e))},
$S:z+10}
C.cFF.prototype={
$2(d,e){var w,v=null,u=B.m.a0(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aL(A.cu(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.V,v,v),B.aS,new C.aQ9(u,s.a.c,s.e,s.d,new C.cFC(s),new C.cFD(s),new C.cFE(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oy,v,v,B.ak),v,v,v)},
$S:1673}
C.cFC.prototype={
$0(){var w=this.a.c
w.toString
C.YH(w,$.blN)
return null},
$S:0}
C.cFD.prototype={
$1(d){var w=this.a
return w.p(new C.cFB(w,d))},
$S:35}
C.cFB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cFE.prototype={
$0(){var w=this.a
return w.p(new C.cFA(w))},
$S:0}
C.cFA.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cUl.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cUm.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cJL.prototype={
$3(d,e,f){return new C.EU(this.a.c,null)},
$S:z+11}
C.cJM.prototype={
$3(d,e,f){if(f==null)return e
return new A.aJ(B.am,null,B.bd,B.y,A.a([new C.EU(this.a.c,null),D.as1],x.p),null)},
$C:"$3",
$R:3,
$S:209}
C.cFU.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cG1.prototype={
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
w.a6W(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hf(v,"load",new C.cG_(w),!1,u)
v=w.e
v.toString
A.hf(v,"error",new C.cG0(w),!1,u)
w=w.e
w.toString
return w},
$S:513}
C.cG_.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cFY(w))
A.bR(B.O,new C.cFZ(w),x.H)}},
$S:44}
C.cFY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cFZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cFW(w))},
$S:12}
C.cFW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cG0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cFX(w))},
$S:44}
C.cFX.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cFV.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dbb.prototype={
$1(d){var w,v,u,t,s=new A.Et([],[]).If(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1674};(function aliases(){var w=C.ajP.prototype
w.aVt=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.af9.prototype,"gawh","bkF",1)
w(u,"gblf","blg",1)
w(u,"gbnH","bnI",6)
w(C.afa.prototype,"gbCn","bCo",1)
v(C,"ebc","dvg",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yd,[C.df8,C.df7,C.blY,C.blZ,C.blQ,C.blR,C.blS,C.blT,C.blU,C.blV,C.blW,C.blX,C.blP,C.blO,C.cFN,C.cFS,C.cFQ,C.cFI,C.cFD,C.cJL,C.cJM,C.cG1,C.cG_,C.cG0,C.dbb])
v(A.a_d,[C.df3,C.df4,C.df5,C.df6,C.cFM,C.cFL,C.cFJ,C.cFK,C.cFR,C.cFO,C.cFT,C.cFG,C.cFH,C.cFC,C.cFB,C.cFE,C.cFA,C.cUl,C.cUm,C.cFU,C.cFY,C.cFZ,C.cFW,C.cFX,C.cFV])
v(A.at,[C.MT,C.W1,C.aIp,C.aQ9,C.aQa,C.aJt,C.aQ8,C.aKI,C.aEH,C.aKN,C.EU])
v(A.al,[C.o5,C.qb])
v(A.ae,[C.Jq,C.Jp,C.a5C,C.a5D])
v(A.af,[C.af9,C.aJn,C.ajP,C.afa])
v(A.a_e,[C.cFP,C.cFF])
u(C.Jt,A.aFB)
u(C.aJo,C.ajP)
w(C.ajP,A.en)})()
A.dyL(b.typeUniverse,JSON.parse('{"Jq":{"ae":[],"q":[]},"W1":{"at":[],"q":[]},"Jp":{"ae":[],"q":[]},"MT":{"at":[],"q":[]},"af9":{"af":["Jq"]},"aIp":{"at":[],"q":[]},"aJn":{"af":["Jp"]},"aQ9":{"at":[],"q":[]},"aQa":{"at":[],"q":[]},"aJt":{"at":[],"q":[]},"aQ8":{"at":[],"q":[]},"aKI":{"at":[],"q":[]},"aEH":{"at":[],"q":[]},"a5C":{"ae":[],"q":[]},"EU":{"at":[],"q":[]},"aJo":{"af":["a5C"]},"aKN":{"at":[],"q":[]},"a5D":{"ae":[],"q":[]},"afa":{"af":["a5D"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ab>"),O:w("a6<z>"),e:w("a6<o5>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ac<o5>"),a:w("ac<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o0"),_:w("CM"),k:w("o5"),N:w("o"),Y:w("bn<a9>"),W:w("dA<o>"),J:w("j9<K>"),j:w("j9<qb?>"),E:w("x6<cK>"),q:w("WK"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Yk=new A.N(983224,"MaterialIcons",!1)
D.aNM=new A.a7(D.Yk,48,B.bm,null,null,null)
D.cJQ=new A.T(!0,B.cj,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cRc=new A.B("Powered off",null,D.cJQ,null,null,null,null,null,null,null,null,null)
D.bIY=w([D.aNM,B.R,D.cRc],x.p)
D.ayS=new A.f5(B.ak,B.i,B.a2,B.o,null,B.q,null,0,D.bIY,null)
D.arO=new A.dv(B.Y,null,null,D.ayS,null)
D.cDg=new A.ad(18,18,B.RH,null)
D.as1=new A.dv(B.Y,null,null,D.cDg,null)
D.asO=new A.hx(2,null,null,null,null,B.a9,null,null,null,null)
D.avB=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.aw7=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.axF=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aBh=new A.V(0,3,0,3)
D.aBq=new A.V(10,0,10,88)
D.aBO=new A.V(12,6,12,10)
D.aC2=new A.V(14,8,14,6)
D.Vb=new A.V(18,12,18,12)
D.aDi=new A.V(20,8,20,20)
D.VP=new A.V(8,6,15,8)
D.aJo=new A.N(983222,"MaterialIcons",!1)
D.aL3=new A.a7(B.jE,26,B.a8,null,null,null)
D.aL6=new A.a7(B.Xx,18,null,null,null,null)
D.aLm=new A.a7(B.rm,14,B.a9,null,null,null)
D.aJE=new A.N(983420,"MaterialIcons",!1)
D.aM7=new A.a7(D.aJE,14,B.a9,null,null,null)
D.aHO=new A.N(62895,"MaterialIcons",!1)
D.aMb=new A.a7(D.aHO,14,B.a9,null,null,null)
D.aPm=new A.a7(B.jD,20,null,null,null,null)
D.aPD=new A.a7(B.h_,16,null,null,null,null)
D.bMu=w([B.aO,B.Z],x.O)
D.ZX=new A.ak(B.aN,B.aR,B.I,D.bMu,null,null)
D.cx1=new A.aO("NGMY OS","14.2.1")
D.cvT=new A.aO("VirtualDroid","13.8.4")
D.cvS=new A.aO("NGMY OS","15.0.0")
D.cwB=new A.aO("VirtualDroid","14.1.2")
D.cvQ=new A.aO("NGMY Tab OS","12.9.7")
D.cvO=new A.aO("NGMY OS","13.5.3")
D.cvD=new A.aO("VirtualDroid","15.2.0")
D.cwe=new A.aO("NGMY OS","14.8.1")
D.cwH=new A.aO("NGMY Tab OS","13.2.4")
D.cxb=new A.aO("VirtualDroid","12.6.9")
D.cvz=new A.aO("NGMY OS","16.0.1")
D.cvq=new A.aO("VirtualDroid","14.9.0")
D.cwU=new A.aO("NGMY Tab OS","14.0.3")
D.cw1=new A.aO("NGMY OS","13.1.8")
D.cvy=new A.aO("VirtualDroid","13.4.5")
D.cvN=new A.aO("NGMY OS","15.3.2")
D.cwI=new A.aO("NGMY Tab OS","12.4.1")
D.cwW=new A.aO("VirtualDroid","16.1.0")
D.cwd=new A.aO("NGMY OS","14.4.6")
D.cx2=new A.aO("VirtualDroid","15.0.8")
D.bLL=w([D.cx1,D.cvT,D.cvS,D.cwB,D.cvQ,D.cvO,D.cvD,D.cwe,D.cwH,D.cxb,D.cvz,D.cvq,D.cwU,D.cw1,D.cvy,D.cvN,D.cwI,D.cwW,D.cwd,D.cx2],A.b6("a6<+(o,o)>"))
D.czd=new A.eE(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cyM=new A.eE(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cyH=new A.eE(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cyQ=new A.eE(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cyD=new A.eE(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cyS=new A.eE(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.czf=new A.eE(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cyE=new A.eE(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cyL=new A.eE(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cyU=new A.eE(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cyC=new A.eE(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cz7=new A.eE(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cz4=new A.eE(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cyK=new A.eE(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cz1=new A.eE(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cz0=new A.eE(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cyB=new A.eE(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cyP=new A.eE(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cyZ=new A.eE(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cz3=new A.eE(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a5m=w([D.czd,D.cyM,D.cyH,D.cyQ,D.cyD,D.cyS,D.czf,D.cyE,D.cyL,D.cyU,D.cyC,D.cz7,D.cz4,D.cyK,D.cz1,D.cz0,D.cyB,D.cyP,D.cyZ,D.cz3],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bUu=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.acD=new C.Jt(0,"youtube")
D.acE=new C.Jt(1,"tiktok")
D.N5=new C.Jt(2,"instagram")
D.acF=new C.Jt(3,"facebook")
D.coQ=new C.Jt(4,"other")
D.cCR=new A.ad(3,null,null,null)
D.cDB=new A.iK(4,10,8,0.52,null)
D.cSs=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cH_=new A.aU(D.cSs,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cKc=new A.T(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cSg=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2H=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d3u=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d3z=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.da_=new C.aKI(null)})();(function staticFields(){$.dvf=20
$.avA=null
$.blN=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"egc","G1",()=>A.UE(0))
w($,"egd","Oz",()=>A.UE(null))})()};
(a=>{a["1S7yZ0dYoxD6qhTd1Go5U9MES8s="]=a.current})($__dart_deferred_initializers__);