((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dT4(d,e){A.a7(d,!1).cB(A.e6(new C.d0d(e),!0,null,x.H))},
UH(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UH=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Lp()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a3,B.V),t)
w=3
return A.b(A.dh(B.C,new C.d0c(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UH)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dB2(r)
if(q==null){d.F(x.q).f.O(D.byU)
w=1
break}w=4
return A.b(A.bN(B.fJ,null,x.H),$async$UH)
case 4:if(d.e==null){w=1
break}n=B.n.ar(e,1,999)
$.deG=n
p=C.dAX(n)
n=$.DF()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d3X(q)
d.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UH,v)},
deJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mM(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
GR(d){return C.dB5(d)},
dB5(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GR=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GR)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.ct(r)?10:11
break
case 10:k=J.fv(r,x.f)
k=A.du(k,new C.bbL(),k.$ti.j("K.E"),x.k)
j=A.S(k).j("ab<K.E>")
i=A.D(new A.ab(k,new C.bbM(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.deL(q)
w=12
return A.b(C.GQ(a3,p),$async$GR)
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
case 9:case 5:o=A.aG(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.v.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.deJ(A.P(n,x.N,x.z))
l=C.deL(A.a([m],x.e))
w=21
return A.b(C.GQ(a3,l),$async$GR)
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
case 18:case 14:q=C.dB3()
w=22
return A.b(C.GQ(a3,q),$async$GR)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GR,v)},
deL(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bbD(),w).eE(0),u=new A.B(d,new C.bbE(),w).eE(0),t=new A.B(d,new C.bbF(),w).eE(0),s=new A.B(d,new C.bbG(),w).eE(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d3Y(null,q,u,t,v,s));++q}return r},
apk(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apk=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GR(d),$async$apk)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.da(t,new C.bbH(),s).eE(0)
p=r.da(t,new C.bbI(),s).eE(0)
o=r.da(t,new C.bbJ(),s).eE(0)
n=r.da(t,new C.bbK(),s).eE(0)
m=C.d3Y(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GQ(d,t),$async$apk)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apk,v)},
GQ(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GQ=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GQ)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.bbC(),x.P)
s=A.D(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GQ)
case 3:return A.f(null,v)}})
return A.h($async$GQ,v)},
dB3(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dW(20,x.k)
for(w=0;w<20;++w)q[w]=C.d3Y(w,w,t,s,u,r)
return q},
d3Y(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jq(),h=d==null,g=D.Tc[B.n.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Tc[B.n.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.B(p,new C.bbB(),A.T(p).j("B<1,m>")).f8(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.f8(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bm(B.n.je(i.bz(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.an(e,20)
k=D.aRF[w]
j=D.aMj[w]
return new C.mM("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bm(B.n.q(e+1),2,"0"),u,k,C.dB4(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.J(Date.now(),0,!1).a0().W())},
dB4(d,e){var w,v=J.dW(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bm(B.n.je(d.bz(256),16),2,"0")
return B.d.f8(v)},
d0d:function d0d(d){this.a=d},
d0c:function d0c(d,e){this.a=d
this.b=e},
d08:function d08(d){this.a=d},
d09:function d09(d){this.a=d},
d0a:function d0a(d){this.a=d},
d0b:function d0b(d,e){this.a=d
this.b=e},
JQ:function JQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mM:function mM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bbL:function bbL(){},
bbM:function bbM(){},
bbD:function bbD(){},
bbE:function bbE(){},
bbF:function bbF(){},
bbG:function bbG(){},
bbH:function bbH(){},
bbI:function bbI(){},
bbJ:function bbJ(){},
bbK:function bbK(){},
bbC:function bbC(){},
bbB:function bbB(){},
GP:function GP(d,e){this.c=d
this.a=e},
aae:function aae(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ctM:function ctM(){},
ctL:function ctL(d,e){this.a=d
this.b=e},
ctJ:function ctJ(d){this.a=d},
ctK:function ctK(d,e){this.a=d
this.b=e},
ctN:function ctN(d){this.a=d},
ctR:function ctR(d){this.a=d},
ctS:function ctS(d,e){this.a=d
this.b=e},
ctQ:function ctQ(d,e,f){this.a=d
this.b=e
this.c=f},
ctP:function ctP(d,e){this.a=d
this.b=e},
ctO:function ctO(d,e){this.a=d
this.b=e},
ctT:function ctT(d){this.a=d},
S6:function S6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAW:function aAW(d,e){this.c=d
this.a=e},
GO:function GO(d,e){this.c=d
this.a=e},
aBU:function aBU(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ctG:function ctG(d){this.a=d},
ctH:function ctH(d){this.a=d},
ctI:function ctI(d){this.a=d},
ctF:function ctF(d,e){this.a=d
this.b=e},
ctC:function ctC(d){this.a=d},
ctD:function ctD(d){this.a=d},
ctB:function ctB(d,e){this.a=d
this.b=e},
ctE:function ctE(d){this.a=d},
ctA:function ctA(d){this.a=d},
aIo:function aIo(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIp:function aIp(d,e,f){this.c=d
this.d=e
this.a=f},
aC_:function aC_(d,e){this.c=d
this.a=e},
aIn:function aIn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cGv:function cGv(d){this.a=d},
cGw:function cGw(d){this.a=d},
aD5:function aD5(d){this.a=d},
axm:function axm(d,e){this.c=d
this.a=e},
dB2(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dB1(v)
if(u!=null)return new C.oL(w,C.d3W(u,!1),D.a_4,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dB0(v)
if(t!=null)return new C.oL(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_5,"TikTok",q)
s=C.dB_(w,v)
if(s!=null)return s
r=C.dAZ(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oL(w,w,D.bjF,"Video",q)
return q},
dB_(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cY(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oL(d,"https://www.instagram.com/reel/"+w+u,D.Gr,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cY(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oL(d,"https://www.instagram.com/p/"+w+u,D.Gr,t,null)}return null},
dAZ(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oL(d,"https://www.facebook.com/plugins/video.php?href="+A.ez(2,d,B.aN,!1)+"&show_text=false&width=734",D.a_6,"Facebook",null)},
dB1(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cY(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dB0(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cY(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cY(d)
return w==null?null:w.b[1]},
GS:function GS(d,e){this.a=d
this.b=e},
oL:function oL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1e:function a1e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBV:function aBV(d,e){var _=this
_.d=$
_.cW$=d
_.aU$=e
_.c=_.a=null},
aD9:function aD9(d,e){this.c=d
this.a=e},
cwl:function cwl(d){this.a=d},
cwm:function cwm(d){this.a=d},
Cu:function Cu(d,e){this.c=d
this.a=e},
aeN:function aeN(){},
deK(d,e,f,g,h,i){return new C.a1f(i,f,h,e,g,d)},
dRN(d){var w=window
w.toString
A.h4(w,"message",new C.cXo(d),!1,x._)},
a1f:function a1f(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaf:function aaf(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
ctU:function ctU(d){this.a=d},
cu1:function cu1(d){this.a=d},
cu_:function cu_(d){this.a=d},
ctY:function ctY(d){this.a=d},
ctZ:function ctZ(d){this.a=d},
ctW:function ctW(d){this.a=d},
cu0:function cu0(d){this.a=d},
ctX:function ctX(d){this.a=d},
ctV:function ctV(d){this.a=d},
cXo:function cXo(d){this.a=d},
deE(){var w,v,u
try{v=A.y4()
w=v.gpV(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d3W(d,e){var w=C.deE(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.ez(2,w,B.aN,!1))
v.push("widget_referrer="+A.ez(2,w,B.aN,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d3V(d){var w=A.ap(y.c,!0,!1,!1,!1).cY(d)
return w==null?null:w.b[1]},
deF(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dAW(d,e,f){var w,v,u=C.d3V(d)
if(u!=null){if(f){w=C.deE()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.deF(C.d3W(u,e))}return C.deF(d)},
dAX(d){if(d<=4)return 0
return B.n.aX(d-1,4)*4},
dAY(d){var w
if($.Lp().a==null)return!1
w=$.DF().a
return d>=w&&d<w+4},
deI(){var w=$.apj
if(w!=null)w.a8(0)
$.apj=null
$.DF().sv(0,0)},
deH(){var w,v,u,t=$.Lp()
if(t.a==null)return
w=$.apj
if(w!=null)w.a8(0)
v=$.deG
if(v<=4){t=t.a
t.toString
C.d3X(t)
return}w=$.DF()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d3X(t)},
d3X(d){var w=$.apj
if(w!=null)w.a8(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.apj=A.dr(A.d5(0,0,0,0,0,w),C.dRY())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.JQ.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.o,1),r=A.a1(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eA,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.X:B.d7,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ev,w,w,w)}}
C.mM.prototype={
ac(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GP.prototype={
T(){return new C.aae(A.a([],x.e))},
geP(){return this.c}}
C.aae.prototype={
Z(){var w=this
w.a3()
$.DF().ai(0,w.garr())
C.dRN(w.gbcY())
w.V1()},
bcq(){if(this.c!=null)this.n(new C.ctM())},
bcZ(){C.deH()},
p(){$.DF().V(0,this.garr())
C.deI()
$.Lp().sv(0,null)
this.a2()},
V1(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V1=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GR(t.a.c),$async$V1)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ctL(t,s))
$.bbA=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$V1,v)},
Rk(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rk=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.ctJ(t))
w=3
return A.b(C.apk(t.a.c),$async$Rk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ctK(t,s))
$.bbA=J.a3(t.d)
t.c.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rk,v)},
beQ(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.e6(new C.ctN(d),!1,null,x.H))},
bfq(){var w=this.c
w.toString
return C.UH(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dM:B.d9,s=A.aM(v,v,v,v,B.EJ,v,v,v,new C.ctR(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AZ(A.F(A.a([A.H(new A.I(B.hW,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.U,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.aZ(!1,v,!0,new A.I(B.aE,A.a1(B.f6,B.O,v,v,28),v),B.bU,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfp(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cy(!0,A.A(A.a([new A.I(D.O_,r,v),A.H(w.e?B.l2:new A.ik($.Lp(),new C.ctS(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.ak9(B.O,B.Ar,B.mP,D.bWw,w.e?v:new C.ctT(w)),v)}}
C.S6.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cr,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1e(n,!0,!C.dAY(w),"Fold "+(B.n.aX(w,4)+1)+"/"+B.n.aX(v.e+4-1,4),u)
n=w}else n=A.u(u,A.A(A.a([A.a1(B.i3,B.l8,u,u,22),B.ak,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.vi,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.aZ(!1,t,!0,A.A(A.a([A.H(A.u(u,A.cK(p,A.hO(A.A(A.a([new C.aAW(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a1(B.rN,B.O.l(0.85),u,u,9),D.buZ,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.alU,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.S6,B.k),u,u,u,B.f3,u,u,u),1),B.ak,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a1)}}
C.aAW.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.oU,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.NP,w,w,w)}}
C.GO.prototype={
T(){return new C.aBU()}}
C.aBU.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dM:B.d9,t=A.aM(w,w,w,w,B.EJ,w,w,w,new C.ctG(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cy(!0,A.A(A.a([new A.I(D.O_,A.F(A.a([t,A.H(new A.AZ(A.F(A.a([A.H(new A.I(B.hW,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.aZ(!1,w,!0,new A.I(B.aE,A.a1(B.f6,B.O,w,w,28),w),B.bU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ctH(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ik($.Lp(),new C.ctI(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0),w,!1,!1,w,w)}}
C.aIo.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.ey,28),new A.ag(0,B.w,B.q.l(0.45),B.cA,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.deK(new A.cN(v+"_full_"+u,x.W),!1,u,!1,w.gaG_(),v+"_full")
w=v}else w=new C.aC_(t.r,s)}else w=new C.axm(m,s)
else w=D.c_Q
return A.u(s,A.cK(n,A.hO(A.A(A.a([new C.aIp(m,l,s),A.H(w,1),new C.aIn(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.S6,B.k),s,r*2.05,s,B.bd,s,s,r)}}
C.aIp.prototype={
C(d){var w,v,u,t,s=null,r=new A.J(Date.now(),0,!1),q=A.dI(r)
r=A.hn(r)
w=new A.de(q,r)
v=w.gGq()===0?12:w.gGq()
r=B.a.bm(B.n.q(r),2,"0")
q=(q<12?B.eJ:B.hm)===B.eJ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lK,s,s,s),B.b6,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bc,D.awh,B.dS,D.avx,B.dS,D.awl],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ak,A.F(A.a([A.a1(B.EB,B.O.l(0.9),s,s,12),B.dS,A.H(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.A(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.amC,s,s,s)}}
C.aC_.prototype={
C(d){var w=null
return A.u(w,A.aV(A.A(A.a([A.a1(B.wW,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.eu(D.azC,D.bKh,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aJ(B.O.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vi,w,w,w,w,w,w,w,w,1/0)}}
C.aIn.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ark(B.Qy,"YouTube",s===0,r,new C.cGv(u))
s=u.ark(B.ks,"Device",s===1,r,new C.cGw(u))
w=r?"Power off":"Power on"
v=r?D.Qz:D.atx
return A.u(t,A.F(A.a([q,B.a0,s,B.b6,A.aM(t,t,t,t,A.a1(v,r?B.b_:B.dH,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cQ)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amo,t,t,t)},
ark(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b3
else w=f?B.O:B.a8
v=f&&g?B.O.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.aZ(!1,A.n(10),!0,new A.I(B.lk,A.A(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aD5.prototype={
C(d){return D.acQ}}
C.axm.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.j5,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qy("Serial",u.c),q=w.qy("Model",u.d),p=w.qy("Device ID",u.e),o=w.qy("IMEI",u.r),n=w.qy("MAC",u.f),m=w.qy("OS",u.w+" "+u.x),l=w.qy("Location",u.y+", "+u.z),k=w.qy("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qy("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.ak,s,B.R,r,q,p,o,n,m,l,k,j,w.qy("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aE,v,v,B.Z,!1)},
qy(d,e){var w=null
return new A.I(B.ca,A.A(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cb,A.j(e,w,w,w,w,w,w,D.bBX,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GS.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oL.prototype={
gaG_(){var w=this.c
return w===D.a_4||w===D.a_5||w===D.Gr||w===D.a_6}}
C.a1e.prototype={
T(){return new C.aBV(null,null)}}
C.aBV.prototype={
Z(){this.a3()
var w=A.bF(null,B.r4,null,1,null,this)
w.mo(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPq()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dQ(t,new A.t(t,t,t,t,t,new A.aq(B.dd,B.cc,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.bx),q=x.Y,p=u.d
p===$&&A.c()
p=A.c9(B.hT,p,t)
w=B.c.l(0.92)
q=A.aV(new A.dl(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bg.T>")),!1,A.a1(B.i3,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.l8
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aD9(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a6,t,B.b7,B.m,s,t)}}
C.aD9.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kA(u,new C.cwl(this),B.bu,!0,w,w,new C.cwm(this),w)
return new C.Cu(v,w)}}
C.Cu.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qM,B.KC],x.O),B.i3)
break
case 1:w=new A.aI(A.a([B.vi,D.agM],x.O),B.jx)
break
case 2:w=new A.aI(A.a([D.aif,D.agj],x.O),B.x3)
break
case 3:w=new A.aI(A.a([B.U,B.cS],x.O),B.x7)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.mL)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a1(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.aeN.prototype={
p(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdJ())
w.aU$=null
w.a2()},
bs(){this.bL()
this.bG()
this.dK()}}
C.a1f.prototype={
T(){return new C.aaf()}}
C.aaf.prototype={
bv3(d,e){var w=C.d3V(d)
if(w!=null)return C.d3W(w,e)
return d},
a3e(d,e){var w,v=this,u=C.d3V(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bv3(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dAW(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsY(){var w,v=this
if(v.w)return
v.n(new C.ctU(v))
w=v.e
if(w!=null)v.a3e(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DG()
$.od().rM(w,new C.cu1(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.ctV(v))
w=v.e
w.toString
v.a3e(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.QN,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hO(A.aV(new A.I(new A.V(12,12,12,12),A.A(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.XX(n,B.px,w)],v)
if(o.f)w.push(A.hO(A.aV(new A.an(28,28,D.adG,n),n,n,n),B.cd,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b3,B.o,1)
q=A.a1(B.QP,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.ff(0,A.aT(!1,B.M,!0,n,A.aZ(!1,n,!0,A.aV(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.No,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsX(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aQ(B.a6,n,B.b7,B.m,w,n)}}
var z=a.updateTypes(["m(mM)","~()","GP(R)","mM(W<@,@>)","a0(mM)","W<m,@>(mM)","ay<~>()","GO(R)","ik<Q>(R,oL?,p?)","S6(R,Q)","u7(R,oL?,p?)","Cu(R,ak,ds?)"])
C.d0d.prototype={
$1(d){return new C.GP(this.a,null)},
$S:z+2}
C.d0c.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.ax(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cw,B.U],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.ey,32)],x.V),g=A.U(m?B.bp:B.O.l(0.18),B.o,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.W.l(m?0.18:0.08)],j)
e=A.u(n,D.avb,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.A(A.a([w,B.ak,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.X:B.aA,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.f9,w,A.aM(n,n,n,n,A.a1(B.cJ,m?B.a8:B.cd,n,n,n),n,n,n,new C.d08(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a4,B.y,j,n,n),B.k),n,n,n,B.Nz,n,n,n)
e=A.ey(B.c4,A.a([new C.JQ("YouTube",B.EA,m,n),new C.JQ("TikTok",B.jx,m,n),new C.JQ("Instagram",B.x3,m,n),new C.JQ("Facebook",B.x7,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bD:B.fG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d9
r=A.a1(B.jw,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bp:B.b0
u=A.A(A.a([e,B.as,A.au(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bl(n,new A.b5(4,q,B.L),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aJ(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Jq),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.K,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.iU(D.avf,D.bVE,new C.d09(d),A.jf(n,n,n,n,n,n,n,n,n,n,n,m?B.aH:B.aA,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dQ(A.cK(f,A.A(A.a([j,new A.I(D.anD,u,n),new A.I(D.anN,A.F(A.a([e,B.b6,A.bQ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.X:B.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d0a(d),n,n),B.a0,A.dM(D.azl,D.bWq,new C.d0b(d,w),A.bx(B.O,n,n,n,B.c,n,D.No,n,new A.bE(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.bx),n)},
$S:62}
C.d08.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d09.prototype={
$0(){C.deI()
$.Lp().sv(0,null)
A.a7(this.a,!1).P(null)},
$S:0}
C.d0a.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d0b.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a7(this.a,!1).P(w)
return null},
$S:0}
C.bbL.prototype={
$1(d){return C.deJ(A.P(d,x.N,x.z))},
$S:z+3}
C.bbM.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bbD.prototype={
$1(d){return d.c},
$S:z+0}
C.bbE.prototype={
$1(d){return d.r},
$S:z+0}
C.bbF.prototype={
$1(d){return d.f},
$S:z+0}
C.bbG.prototype={
$1(d){return d.at},
$S:z+0}
C.bbH.prototype={
$1(d){return d.c},
$S:z+0}
C.bbI.prototype={
$1(d){return d.r},
$S:z+0}
C.bbJ.prototype={
$1(d){return d.f},
$S:z+0}
C.bbK.prototype={
$1(d){return d.at},
$S:z+0}
C.bbC.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bbB.prototype={
$1(d){return B.a.bm(B.n.je(d,16),2,"0").toUpperCase()},
$S:75}
C.ctM.prototype={
$0(){},
$S:0}
C.ctL.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ctJ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ctK.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.ctN.prototype={
$1(d){return new C.GO(this.a,null)},
$S:z+7}
C.ctR.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.ctS.prototype={
$3(d,e,f){return new A.ik($.DF(),new C.ctQ(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.ctQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ap(d,k,x.Q)
w=w==null?k:w.gkp()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.o,1)
q=A.a1(B.i3,B.O,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DF().a
m=B.j.ar(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.f1,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cK(s,new A.iF(1.7777777777777777,C.deK(new A.cN("fleet_master_"+r,x.W),!0,r,!0,j.gaG_(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zA(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kb(new A.I(B.Cu,A.A(u,B.t,B.e,B.f,0,B.l),k),k),new A.oW(D.am3,A.asO(new A.nS(new C.ctP(i,j),J.a3(i.d),!1,!0,!0,A.vL(),k),D.bvE),k)],w))},
$S:1574}
C.ctP.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.S6(v,e,J.a3(w.d),new C.ctO(w,v),this.b,null)},
$S:z+9}
C.ctO.prototype={
$0(){return this.a.beQ(this.b)},
$S:0}
C.ctT.prototype={
$0(){this.a.Rk()
return null},
$S:0}
C.ctG.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.ctH.prototype={
$0(){C.UH(this.a,$.bbA)
return null},
$S:0}
C.ctI.prototype={
$3(d,e,f){return A.fN(new C.ctF(this.a,e))},
$S:z+10}
C.ctF.prototype={
$2(d,e){var w,v=null,u=B.j.ar(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.cq(A.A(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aIo(u,s.a.c,s.e,s.d,new C.ctC(s),new C.ctD(s),new C.ctE(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wi,v,v,B.Z),v,v,v)},
$S:1575}
C.ctC.prototype={
$0(){var w=this.a.c
w.toString
C.UH(w,$.bbA)
return null},
$S:0}
C.ctD.prototype={
$1(d){var w=this.a
return w.n(new C.ctB(w,d))},
$S:35}
C.ctB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ctE.prototype={
$0(){var w=this.a
return w.n(new C.ctA(w))},
$S:0}
C.ctA.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cGv.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cGw.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cwl.prototype={
$3(d,e,f){return new C.Cu(this.a.c,null)},
$S:z+11}
C.cwm.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.b7,B.m,A.a([new C.Cu(this.a.c,null),D.ad3],x.p),null)},
$C:"$3",
$R:3,
$S:447}
C.ctU.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cu1.prototype={
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
w.a3e(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h4(v,"load",new C.cu_(w),!1,u)
v=w.e
v.toString
A.h4(v,"error",new C.cu0(w),!1,u)
w=w.e
w.toString
return w},
$S:419}
C.cu_.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.ctY(w))
A.bN(B.A,new C.ctZ(w),x.H)}},
$S:43}
C.ctY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.ctW(w))},
$S:12}
C.ctW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cu0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.ctX(w))},
$S:43}
C.ctX.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.ctV.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cXo.prototype={
$1(d){var w,v,u,t,s=new A.C3([],[]).FI(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1576};(function aliases(){var w=C.aeN.prototype
w.aPq=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aae.prototype,"garr","bcq",1)
w(u,"gbcY","bcZ",1)
w(u,"gbfp","bfq",6)
w(C.aaf.prototype,"gbsX","bsY",1)
v(C,"dRY","deH",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.w6,[C.d0d,C.d0c,C.bbL,C.bbM,C.bbD,C.bbE,C.bbF,C.bbG,C.bbH,C.bbI,C.bbJ,C.bbK,C.bbC,C.bbB,C.ctN,C.ctS,C.ctQ,C.ctI,C.ctD,C.cwl,C.cwm,C.cu1,C.cu_,C.cu0,C.cXo])
v(A.We,[C.d08,C.d09,C.d0a,C.d0b,C.ctM,C.ctL,C.ctJ,C.ctK,C.ctR,C.ctO,C.ctT,C.ctG,C.ctH,C.ctC,C.ctB,C.ctE,C.ctA,C.cGv,C.cGw,C.ctU,C.ctY,C.ctZ,C.ctW,C.ctX,C.ctV])
v(A.aC,[C.JQ,C.S6,C.aAW,C.aIo,C.aIp,C.aC_,C.aIn,C.aD5,C.axm,C.aD9,C.Cu])
v(A.ak,[C.mM,C.oL])
v(A.ad,[C.GP,C.GO,C.a1e,C.a1f])
v(A.af,[C.aae,C.aBU,C.aeN,C.aaf])
v(A.Wf,[C.ctP,C.ctF])
u(C.GS,A.ayd)
u(C.aBV,C.aeN)
w(C.aeN,A.e7)})()
A.dhZ(b.typeUniverse,JSON.parse('{"GP":{"ad":[],"p":[]},"S6":{"aC":[],"p":[]},"GO":{"ad":[],"p":[]},"JQ":{"aC":[],"p":[]},"aae":{"af":["GP"]},"aAW":{"aC":[],"p":[]},"aBU":{"af":["GO"]},"aIo":{"aC":[],"p":[]},"aIp":{"aC":[],"p":[]},"aC_":{"aC":[],"p":[]},"aIn":{"aC":[],"p":[]},"aD5":{"aC":[],"p":[]},"axm":{"aC":[],"p":[]},"a1e":{"ad":[],"p":[]},"Cu":{"aC":[],"p":[]},"aBV":{"af":["a1e"]},"aD9":{"aC":[],"p":[]},"a1f":{"ad":[],"p":[]},"aaf":{"af":["a1f"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("aa<ag>"),O:w("aa<z>"),e:w("aa<mM>"),s:w("aa<m>"),p:w("aa<p>"),t:w("aa<Q>"),X:w("ac<mM>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mJ"),_:w("Am"),k:w("mM"),N:w("m"),Y:w("bi<a8>"),W:w("cN<m>"),J:w("ik<Q>"),j:w("ik<oL?>"),E:w("yc<cA>"),q:w("SM"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Qz=new A.L(983224,"MaterialIcons",!1)
D.axQ=new A.a6(D.Qz,48,B.b3,null,null,null)
D.bBD=new A.N(!0,B.bD,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJc=new A.x("Powered off",null,D.bBD,null,null,null,null,null,null,null,null,null)
D.aKI=w([D.axQ,B.z,D.bJc],x.p)
D.ajs=new A.er(B.Z,B.e,B.P,B.i,null,B.l,null,0,D.aKI,null)
D.acQ=new A.dj(B.J,null,null,D.ajs,null)
D.bvm=new A.an(18,18,B.Kk,null)
D.ad3=new A.dj(B.J,null,null,D.bvm,null)
D.adG=new A.fX(2,null,null,null,null,B.X,null,null,null,null)
D.agj=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.agM=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aif=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.alU=new A.V(0,3,0,3)
D.am3=new A.V(10,0,10,88)
D.amo=new A.V(12,6,12,10)
D.amC=new A.V(14,8,14,6)
D.No=new A.V(18,12,18,12)
D.anD=new A.V(20,18,20,8)
D.anN=new A.V(20,8,20,20)
D.O_=new A.V(8,6,15,8)
D.atx=new A.L(983222,"MaterialIcons",!1)
D.avb=new A.a6(B.i3,26,B.O,null,null,null)
D.avf=new A.a6(B.PE,18,null,null,null,null)
D.avx=new A.a6(B.oU,14,B.X,null,null,null)
D.atP=new A.L(983420,"MaterialIcons",!1)
D.awh=new A.a6(D.atP,14,B.X,null,null,null)
D.as3=new A.L(62895,"MaterialIcons",!1)
D.awl=new A.a6(D.as3,14,B.X,null,null,null)
D.azl=new A.a6(B.iK,20,null,null,null,null)
D.azC=new A.a6(B.f6,16,null,null,null,null)
D.aMK=w([B.aj,B.U],x.O)
D.S6=new A.aq(B.al,B.av,B.y,D.aMK,null,null)
D.bpi=new A.aI("NGMY OS","14.2.1")
D.bo9=new A.aI("VirtualDroid","13.8.4")
D.bo8=new A.aI("NGMY OS","15.0.0")
D.boS=new A.aI("VirtualDroid","14.1.2")
D.bo6=new A.aI("NGMY Tab OS","12.9.7")
D.bo4=new A.aI("NGMY OS","13.5.3")
D.bnU=new A.aI("VirtualDroid","15.2.0")
D.bov=new A.aI("NGMY OS","14.8.1")
D.boY=new A.aI("NGMY Tab OS","13.2.4")
D.bps=new A.aI("VirtualDroid","12.6.9")
D.bnQ=new A.aI("NGMY OS","16.0.1")
D.bnH=new A.aI("VirtualDroid","14.9.0")
D.bpa=new A.aI("NGMY Tab OS","14.0.3")
D.boi=new A.aI("NGMY OS","13.1.8")
D.bnP=new A.aI("VirtualDroid","13.4.5")
D.bo3=new A.aI("NGMY OS","15.3.2")
D.boZ=new A.aI("NGMY Tab OS","12.4.1")
D.bpc=new A.aI("VirtualDroid","16.1.0")
D.bou=new A.aI("NGMY OS","14.4.6")
D.bpj=new A.aI("VirtualDroid","15.0.8")
D.aMj=w([D.bpi,D.bo9,D.bo8,D.boS,D.bo6,D.bo4,D.bnU,D.bov,D.boY,D.bps,D.bnQ,D.bnH,D.bpa,D.boi,D.bnP,D.bo3,D.boZ,D.bpc,D.bou,D.bpj],A.bk("aa<+(m,m)>"))
D.bru=new A.ed(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.br2=new A.ed(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bqY=new A.ed(["New York","United States",40.7128,-74.006,"America/New_York"])
D.br6=new A.ed(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bqU=new A.ed(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.br8=new A.ed(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.brw=new A.ed(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bqV=new A.ed(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.br1=new A.ed(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bra=new A.ed(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bqT=new A.ed(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bro=new A.ed(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.brl=new A.ed(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.br0=new A.ed(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bri=new A.ed(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.brh=new A.ed(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bqS=new A.ed(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.br5=new A.ed(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.brf=new A.ed(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.brk=new A.ed(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Tc=w([D.bru,D.br2,D.bqY,D.br6,D.bqU,D.br8,D.brw,D.bqV,D.br1,D.bra,D.bqT,D.bro,D.brl,D.br0,D.bri,D.brh,D.bqS,D.br5,D.brf,D.brk],A.bk("aa<+(m,m,a8,a8,m)>"))
D.aRF=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_4=new C.GS(0,"youtube")
D.a_5=new C.GS(1,"tiktok")
D.Gr=new C.GS(2,"instagram")
D.a_6=new C.GS(3,"facebook")
D.bjF=new C.GS(4,"other")
D.buZ=new A.an(3,null,null,null)
D.bvE=new A.iS(4,10,8,0.52,null)
D.bKt=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.byU=new A.aS(D.bKt,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bBX=new A.N(!0,B.c,null,null,null,null,11,B.Y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKh=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bVE=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bWq=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bWw=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c_Q=new C.aD5(null)})();(function staticFields(){$.deG=20
$.apj=null
$.bbA=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dWd","DF",()=>A.QP(0))
w($,"dWe","Lp",()=>A.QP(null))})()};
(a=>{a["ikHLC7nhNfRzqlwqGstetIGVeKU="]=a.current})($__dart_deferred_initializers__);