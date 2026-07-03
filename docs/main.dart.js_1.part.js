((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dSU(d,e){A.a7(d,!1).cA(A.e6(new C.d01(e),!0,null,x.H))},
UG(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UG=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Lo()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a3,B.W),t)
w=3
return A.b(A.dg(B.C,new C.d00(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UG)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dAS(r)
if(q==null){d.F(x.q).f.O(D.byU)
w=1
break}w=4
return A.b(A.bN(B.fH,null,x.H),$async$UG)
case 4:if(d.e==null){w=1
break}n=B.n.ar(e,1,999)
$.dew=n
p=C.dAM(n)
n=$.DE()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d3N(q)
d.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UG,v)},
dez(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mJ(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
GQ(d){return C.dAV(d)},
dAV(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GQ=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GQ)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.cs(r)?10:11
break
case 10:k=J.fu(r,x.f)
k=A.dt(k,new C.bbI(),k.$ti.j("K.E"),x.k)
j=A.S(k).j("ab<K.E>")
i=A.D(new A.ab(k,new C.bbJ(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.deB(q)
w=12
return A.b(C.GP(a3,p),$async$GQ)
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
case 19:m=C.dez(A.P(n,x.N,x.z))
l=C.deB(A.a([m],x.e))
w=21
return A.b(C.GP(a3,l),$async$GQ)
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
case 18:case 14:q=C.dAT()
w=22
return A.b(C.GP(a3,q),$async$GQ)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GQ,v)},
deB(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bbA(),w).eE(0),u=new A.B(d,new C.bbB(),w).eE(0),t=new A.B(d,new C.bbC(),w).eE(0),s=new A.B(d,new C.bbD(),w).eE(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d3O(null,q,u,t,v,s));++q}return r},
api(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$api=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GQ(d),$async$api)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.da(t,new C.bbE(),s).eE(0)
p=r.da(t,new C.bbF(),s).eE(0)
o=r.da(t,new C.bbG(),s).eE(0)
n=r.da(t,new C.bbH(),s).eE(0)
m=C.d3O(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GP(d,t),$async$api)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$api,v)},
GP(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GP=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GP)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.bbz(),x.P)
s=A.D(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GP)
case 3:return A.f(null,v)}})
return A.h($async$GP,v)},
dAT(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dW(20,x.k)
for(w=0;w<20;++w)q[w]=C.d3O(w,w,t,s,u,r)
return q},
d3O(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jn(),h=d==null,g=D.Ta[B.n.am(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Ta[B.n.am(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bby(),A.T(p).j("B<1,m>")).f8(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.f8(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bl(B.n.je(i.by(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.am(e,20)
k=D.aRE[w]
j=D.aMi[w]
return new C.mJ("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bl(B.n.q(e+1),2,"0"),u,k,C.dAU(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.J(Date.now(),0,!1).a0().W())},
dAU(d,e){var w,v=J.dW(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bl(B.n.je(d.by(256),16),2,"0")
return B.d.f8(v)},
d01:function d01(d){this.a=d},
d00:function d00(d,e){this.a=d
this.b=e},
d_X:function d_X(d){this.a=d},
d_Y:function d_Y(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d0_:function d0_(d,e){this.a=d
this.b=e},
JP:function JP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mJ:function mJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bbI:function bbI(){},
bbJ:function bbJ(){},
bbA:function bbA(){},
bbB:function bbB(){},
bbC:function bbC(){},
bbD:function bbD(){},
bbE:function bbE(){},
bbF:function bbF(){},
bbG:function bbG(){},
bbH:function bbH(){},
bbz:function bbz(){},
bby:function bby(){},
GO:function GO(d,e){this.c=d
this.a=e},
aad:function aad(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ctH:function ctH(){},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctE:function ctE(d){this.a=d},
ctF:function ctF(d,e){this.a=d
this.b=e},
ctI:function ctI(d){this.a=d},
ctM:function ctM(d){this.a=d},
ctN:function ctN(d,e){this.a=d
this.b=e},
ctL:function ctL(d,e,f){this.a=d
this.b=e
this.c=f},
ctK:function ctK(d,e){this.a=d
this.b=e},
ctJ:function ctJ(d,e){this.a=d
this.b=e},
ctO:function ctO(d){this.a=d},
S5:function S5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAU:function aAU(d,e){this.c=d
this.a=e},
GN:function GN(d,e){this.c=d
this.a=e},
aBS:function aBS(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ctB:function ctB(d){this.a=d},
ctC:function ctC(d){this.a=d},
ctD:function ctD(d){this.a=d},
ctA:function ctA(d,e){this.a=d
this.b=e},
ctx:function ctx(d){this.a=d},
cty:function cty(d){this.a=d},
ctw:function ctw(d,e){this.a=d
this.b=e},
ctz:function ctz(d){this.a=d},
ctv:function ctv(d){this.a=d},
aIm:function aIm(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIn:function aIn(d,e,f){this.c=d
this.d=e
this.a=f},
aBY:function aBY(d,e){this.c=d
this.a=e},
aIl:function aIl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cGr:function cGr(d){this.a=d},
cGs:function cGs(d){this.a=d},
aD3:function aD3(d){this.a=d},
axk:function axk(d,e){this.c=d
this.a=e},
dAS(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dAR(v)
if(u!=null)return new C.oK(w,C.d3M(u,!1),D.a_2,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dAQ(v)
if(t!=null)return new C.oK(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_3,"TikTok",q)
s=C.dAP(w,v)
if(s!=null)return s
r=C.dAO(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oK(w,w,D.bjE,"Video",q)
return q},
dAP(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cY(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oK(d,"https://www.instagram.com/reel/"+w+u,D.Gp,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cY(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oK(d,"https://www.instagram.com/p/"+w+u,D.Gp,t,null)}return null},
dAO(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oK(d,"https://www.facebook.com/plugins/video.php?href="+A.ez(2,d,B.aO,!1)+"&show_text=false&width=734",D.a_4,"Facebook",null)},
dAR(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cY(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dAQ(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cY(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cY(d)
return w==null?null:w.b[1]},
GR:function GR(d,e){this.a=d
this.b=e},
oK:function oK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1d:function a1d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBT:function aBT(d,e){var _=this
_.d=$
_.cW$=d
_.aU$=e
_.c=_.a=null},
aD7:function aD7(d,e){this.c=d
this.a=e},
cwg:function cwg(d){this.a=d},
cwh:function cwh(d){this.a=d},
Ct:function Ct(d,e){this.c=d
this.a=e},
aeM:function aeM(){},
deA(d,e,f,g,h,i){return new C.a1e(i,f,h,e,g,d)},
dRC(d){var w=window
w.toString
A.h3(w,"message",new C.cXc(d),!1,x._)},
a1e:function a1e(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aae:function aae(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
ctP:function ctP(d){this.a=d},
ctX:function ctX(d){this.a=d},
ctV:function ctV(d){this.a=d},
ctT:function ctT(d){this.a=d},
ctU:function ctU(d){this.a=d},
ctR:function ctR(d){this.a=d},
ctW:function ctW(d){this.a=d},
ctS:function ctS(d){this.a=d},
ctQ:function ctQ(d){this.a=d},
cXc:function cXc(d){this.a=d},
deu(){var w,v,u
try{v=A.y2()
w=v.gpU(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d3M(d,e){var w=C.deu(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.ez(2,w,B.aO,!1))
v.push("widget_referrer="+A.ez(2,w,B.aO,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d3L(d){var w=A.ap(y.c,!0,!1,!1,!1).cY(d)
return w==null?null:w.b[1]},
dev(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dAL(d,e,f){var w,v,u=C.d3L(d)
if(u!=null){if(f){w=C.deu()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dev(C.d3M(u,e))}return C.dev(d)},
dAM(d){if(d<=4)return 0
return B.n.aW(d-1,4)*4},
dAN(d){var w
if($.Lo().a==null)return!1
w=$.DE().a
return d>=w&&d<w+4},
dey(){var w=$.aph
if(w!=null)w.a8(0)
$.aph=null
$.DE().sv(0,0)},
dex(){var w,v,u,t=$.Lo()
if(t.a==null)return
w=$.aph
if(w!=null)w.a8(0)
v=$.dew
if(v<=4){t=t.a
t.toString
C.d3N(t)
return}w=$.DE()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d3N(t)},
d3N(d){var w=$.aph
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
default:w=null}$.aph=A.dq(A.d4(0,0,0,0,0,w),C.dRN())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.JP.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.o,1),r=A.a1(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eS,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.Y:B.d7,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ev,w,w,w)}}
C.mJ.prototype={
ac(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GO.prototype={
T(){return new C.aad(A.a([],x.e))},
geP(){return this.c}}
C.aad.prototype={
Z(){var w=this
w.a3()
$.DE().ai(0,w.garr())
C.dRC(w.gbcX())
w.V1()},
bcp(){if(this.c!=null)this.n(new C.ctH())},
bcY(){C.dex()},
p(){$.DE().V(0,this.garr())
C.dey()
$.Lo().sv(0,null)
this.a2()},
V1(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V1=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GQ(t.a.c),$async$V1)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ctG(t,s))
$.bbx=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$V1,v)},
Rk(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rk=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.ctE(t))
w=3
return A.b(C.api(t.a.c),$async$Rk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ctF(t,s))
$.bbx=J.a3(t.d)
t.c.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rk,v)},
beP(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.e6(new C.ctI(d),!1,null,x.H))},
bfp(){var w=this.c
w.toString
return C.UG(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dM:B.d9,s=A.aM(v,v,v,v,B.EH,v,v,v,new C.ctM(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AX(A.F(A.a([A.H(new A.I(B.hU,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.V,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.aZ(!1,v,!0,new A.I(B.aE,A.a1(B.f6,B.O,v,v,28),v),B.bV,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfo(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a2)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cy(!0,A.A(A.a([new A.I(D.NY,r,v),A.H(w.e?B.kY:new A.ij($.Lo(),new C.ctN(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.ak7(B.O,B.Aq,B.mN,D.bWA,w.e?v:new C.ctO(w)),v)}}
C.S5.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cr,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1d(n,!0,!C.dAN(w),"Fold "+(B.n.aW(w,4)+1)+"/"+B.n.aW(v.e+4-1,4),u)
n=w}else n=A.u(u,A.A(A.a([A.a1(B.i1,B.l3,u,u,22),B.ak,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.vd,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.aZ(!1,t,!0,A.A(A.a([A.H(A.u(u,A.cN(p,A.hN(A.A(A.a([new C.aAU(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a1(B.rI,B.O.l(0.85),u,u,9),D.buZ,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.alS,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.S4,B.k),u,u,u,B.f3,u,u,u),1),B.ak,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a2)}}
C.aAU.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.oS,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.NM,w,w,w)}}
C.GN.prototype={
T(){return new C.aBS()}}
C.aBS.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dM:B.d9,t=A.aM(w,w,w,w,B.EH,w,w,w,new C.ctB(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cy(!0,A.A(A.a([new A.I(D.NY,A.F(A.a([t,A.H(new A.AX(A.F(A.a([A.H(new A.I(B.hU,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.V,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.aZ(!1,w,!0,new A.I(B.aE,A.a1(B.f6,B.O,w,w,28),w),B.bV,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ctC(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a2)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ij($.Lo(),new C.ctD(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0),w,!1,!1,w,w)}}
C.aIm.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.ey,28),new A.ag(0,B.w,B.q.l(0.45),B.cA,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.deA(new A.cR(v+"_full_"+u,x.W),!1,u,!1,w.gaG_(),v+"_full")
w=v}else w=new C.aBY(t.r,s)}else w=new C.axk(m,s)
else w=D.c_U
return A.u(s,A.cN(n,A.hN(A.A(A.a([new C.aIn(m,l,s),A.H(w,1),new C.aIl(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.S4,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aIn.prototype={
C(d){var w,v,u,t,s=null,r=new A.J(Date.now(),0,!1),q=A.dI(r)
r=A.hl(r)
w=new A.dd(q,r)
v=w.gGr()===0?12:w.gGr()
r=B.a.bl(B.n.q(r),2,"0")
q=(q<12?B.eI:B.hk)===B.eI?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lH,s,s,s),B.b5,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b8,D.awf,B.dT,D.avu,B.dT,D.awj],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ak,A.F(A.a([A.a1(B.Ez,B.O.l(0.9),s,s,12),B.dT,A.H(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.A(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.amA,s,s,s)}}
C.aBY.prototype={
C(d){var w=null
return A.u(w,A.aV(A.A(A.a([A.a1(B.wT,B.c.l(0.35),w,w,40),B.E,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.eu(D.azB,D.bKj,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aJ(B.O.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vd,w,w,w,w,w,w,w,w,1/0)}}
C.aIl.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ark(B.Qw,"YouTube",s===0,r,new C.cGr(u))
s=u.ark(B.kn,"Device",s===1,r,new C.cGs(u))
w=r?"Power off":"Power on"
v=r?D.Qx:D.atv
return A.u(t,A.F(A.a([q,B.a0,s,B.b5,A.aM(t,t,t,t,A.a1(v,r?B.aZ:B.dH,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cQ)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amm,t,t,t)},
ark(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b1
else w=f?B.O:B.a8
v=f&&g?B.O.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.aZ(!1,A.n(10),!0,new A.I(B.lf,A.A(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a2),1)}}
C.aD3.prototype={
C(d){return D.acO}}
C.axk.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.j0,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qy("Serial",u.c),q=w.qy("Model",u.d),p=w.qy("Device ID",u.e),o=w.qy("IMEI",u.r),n=w.qy("MAC",u.f),m=w.qy("OS",u.w+" "+u.x),l=w.qy("Location",u.y+", "+u.z),k=w.qy("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qy("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.ak,s,B.R,r,q,p,o,n,m,l,k,j,w.qy("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aE,v,v,B.Z,!1)},
qy(d,e){var w=null
return new A.I(B.c7,A.A(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.j(e,w,w,w,w,w,w,D.bBY,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GR.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oK.prototype={
gaG_(){var w=this.c
return w===D.a_2||w===D.a_3||w===D.Gp||w===D.a_4}}
C.a1d.prototype={
T(){return new C.aBT(null,null)}}
C.aBT.prototype={
Z(){this.a3()
var w=A.bF(null,B.r1,null,1,null,this)
w.mo(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPq()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dQ(t,new A.t(t,t,t,t,t,new A.aq(B.dd,B.cb,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.by),q=x.Y,p=u.d
p===$&&A.c()
p=A.c9(B.hQ,p,t)
w=B.c.l(0.92)
q=A.aV(new A.dk(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bg.T>")),!1,A.a1(B.i1,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.l3
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aD7(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a6,t,B.b6,B.m,s,t)}}
C.aD7.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kx(u,new C.cwg(this),B.bu,!0,w,w,new C.cwh(this),w)
return new C.Ct(v,w)}}
C.Ct.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qJ,B.KA],x.O),B.i1)
break
case 1:w=new A.aI(A.a([B.vd,D.agK],x.O),B.js)
break
case 2:w=new A.aI(A.a([D.aid,D.agh],x.O),B.x0)
break
case 3:w=new A.aI(A.a([B.V,B.d0],x.O),B.x4)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.mJ)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a1(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.aeM.prototype={
p(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdI())
w.aU$=null
w.a2()},
br(){this.bK()
this.bF()
this.dJ()}}
C.a1e.prototype={
T(){return new C.aae()}}
C.aae.prototype={
bv3(d,e){var w=C.d3L(d)
if(w!=null)return C.d3M(w,e)
return d},
a3e(d,e){var w,v=this,u=C.d3L(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bv3(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dAL(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsY(){var w,v=this
if(v.w)return
v.n(new C.ctP(v))
w=v.e
if(w!=null)v.a3e(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DF()
$.oc().rM(w,new C.ctX(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.ctQ(v))
w=v.e
w.toString
v.a3e(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.QL,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hN(A.aV(new A.I(new A.V(12,12,12,12),A.A(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.XW(n,B.pu,w)],v)
if(o.f)w.push(A.hN(A.aV(new A.an(28,28,D.adE,n),n,n,n),B.cc,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b1,B.o,1)
q=A.a1(B.QN,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fd(0,A.aT(!1,B.M,!0,n,A.aZ(!1,n,!0,A.aV(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Nl,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsX(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a2)))}return new A.aQ(B.a6,n,B.b6,B.m,w,n)}}
var z=a.updateTypes(["m(mJ)","~()","GO(R)","mJ(W<@,@>)","a0(mJ)","W<m,@>(mJ)","ay<~>()","GN(R)","ij<Q>(R,oK?,p?)","S5(R,Q)","u5(R,oK?,p?)","Ct(R,ak,dr?)"])
C.d01.prototype={
$1(d){return new C.GO(this.a,null)},
$S:z+2}
C.d00.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.ax(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cw,B.V],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.ey,32)],x.V),g=A.U(m?B.bp:B.O.l(0.18),B.o,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.X.l(m?0.18:0.08)],j)
e=A.u(n,D.av8,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.A(A.a([w,B.ak,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.Y:B.aA,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.f8,w,A.aM(n,n,n,n,A.a1(B.cJ,m?B.a8:B.cc,n,n,n),n,n,n,new C.d_X(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a1,B.a4,B.y,j,n,n),B.k),n,n,n,B.Nw,n,n,n)
e=A.ey(B.c4,A.a([new C.JP("YouTube",B.Ey,m,n),new C.JP("TikTok",B.js,m,n),new C.JP("Instagram",B.x0,m,n),new C.JP("Facebook",B.x4,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bE:B.fE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d9
r=A.a1(B.jr,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bp:B.b_
u=A.A(A.a([e,B.as,A.au(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bl(n,new A.b5(4,q,B.L),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aJ(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Jo),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.K,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.iv(D.avc,D.bVI,new C.d_Y(d),A.jA(n,n,n,n,n,n,n,n,n,n,n,m?B.aI:B.aA,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dQ(A.cN(f,A.A(A.a([j,new A.I(D.anC,u,n),new A.I(D.anM,A.F(A.a([e,B.b5,A.bQ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.Y:B.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d_Z(d),n,n),B.a0,A.dM(D.azk,D.bWu,new C.d0_(d,w),A.bw(B.O,n,n,n,B.c,n,D.Nl,n,new A.bE(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.by),n)},
$S:64}
C.d_X.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d_Y.prototype={
$0(){C.dey()
$.Lo().sv(0,null)
A.a7(this.a,!1).P(null)},
$S:0}
C.d_Z.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d0_.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a7(this.a,!1).P(w)
return null},
$S:0}
C.bbI.prototype={
$1(d){return C.dez(A.P(d,x.N,x.z))},
$S:z+3}
C.bbJ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bbA.prototype={
$1(d){return d.c},
$S:z+0}
C.bbB.prototype={
$1(d){return d.r},
$S:z+0}
C.bbC.prototype={
$1(d){return d.f},
$S:z+0}
C.bbD.prototype={
$1(d){return d.at},
$S:z+0}
C.bbE.prototype={
$1(d){return d.c},
$S:z+0}
C.bbF.prototype={
$1(d){return d.r},
$S:z+0}
C.bbG.prototype={
$1(d){return d.f},
$S:z+0}
C.bbH.prototype={
$1(d){return d.at},
$S:z+0}
C.bbz.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bby.prototype={
$1(d){return B.a.bl(B.n.je(d,16),2,"0").toUpperCase()},
$S:75}
C.ctH.prototype={
$0(){},
$S:0}
C.ctG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ctE.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ctF.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.ctI.prototype={
$1(d){return new C.GN(this.a,null)},
$S:z+7}
C.ctM.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.ctN.prototype={
$3(d,e,f){return new A.ij($.DE(),new C.ctL(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.ctL.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.An(d,k,x.Q)
w=w==null?k:w.gkp()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.o,1)
q=A.a1(B.i1,B.O,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DE().a
m=B.j.ar(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.V,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.f1,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cN(s,new A.iF(1.7777777777777777,C.deA(new A.cR("fleet_master_"+r,x.W),!0,r,!0,j.gaG_(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zy(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.k9(new A.I(B.Cs,A.A(u,B.t,B.e,B.f,0,B.l),k),k),new A.oV(D.am1,A.asM(new A.nQ(new C.ctK(i,j),J.a3(i.d),!1,!0,!0,A.vJ(),k),D.bvE),k)],w))},
$S:1573}
C.ctK.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.S5(v,e,J.a3(w.d),new C.ctJ(w,v),this.b,null)},
$S:z+9}
C.ctJ.prototype={
$0(){return this.a.beP(this.b)},
$S:0}
C.ctO.prototype={
$0(){this.a.Rk()
return null},
$S:0}
C.ctB.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.ctC.prototype={
$0(){C.UG(this.a,$.bbx)
return null},
$S:0}
C.ctD.prototype={
$3(d,e,f){return A.fM(new C.ctA(this.a,e))},
$S:z+10}
C.ctA.prototype={
$2(d,e){var w,v=null,u=B.j.ar(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.cp(A.A(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aIm(u,s.a.c,s.e,s.d,new C.ctx(s),new C.cty(s),new C.ctz(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.we,v,v,B.Z),v,v,v)},
$S:1574}
C.ctx.prototype={
$0(){var w=this.a.c
w.toString
C.UG(w,$.bbx)
return null},
$S:0}
C.cty.prototype={
$1(d){var w=this.a
return w.n(new C.ctw(w,d))},
$S:37}
C.ctw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ctz.prototype={
$0(){var w=this.a
return w.n(new C.ctv(w))},
$S:0}
C.ctv.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cGr.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cGs.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cwg.prototype={
$3(d,e,f){return new C.Ct(this.a.c,null)},
$S:z+11}
C.cwh.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.b6,B.m,A.a([new C.Ct(this.a.c,null),D.ad1],x.p),null)},
$C:"$3",
$R:3,
$S:366}
C.ctP.prototype={
$0(){return this.a.w=!0},
$S:0}
C.ctX.prototype={
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
A.h3(v,"load",new C.ctV(w),!1,u)
v=w.e
v.toString
A.h3(v,"error",new C.ctW(w),!1,u)
w=w.e
w.toString
return w},
$S:522}
C.ctV.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.ctT(w))
A.bN(B.A,new C.ctU(w),x.H)}},
$S:42}
C.ctT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctU.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.ctR(w))},
$S:12}
C.ctR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.ctS(w))},
$S:42}
C.ctS.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.ctQ.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cXc.prototype={
$1(d){var w,v,u,t,s=new A.C2([],[]).FJ(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1575};(function aliases(){var w=C.aeM.prototype
w.aPq=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aad.prototype,"garr","bcp",1)
w(u,"gbcX","bcY",1)
w(u,"gbfo","bfp",6)
w(C.aae.prototype,"gbsX","bsY",1)
v(C,"dRN","dex",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.w4,[C.d01,C.d00,C.bbI,C.bbJ,C.bbA,C.bbB,C.bbC,C.bbD,C.bbE,C.bbF,C.bbG,C.bbH,C.bbz,C.bby,C.ctI,C.ctN,C.ctL,C.ctD,C.cty,C.cwg,C.cwh,C.ctX,C.ctV,C.ctW,C.cXc])
v(A.Wd,[C.d_X,C.d_Y,C.d_Z,C.d0_,C.ctH,C.ctG,C.ctE,C.ctF,C.ctM,C.ctJ,C.ctO,C.ctB,C.ctC,C.ctx,C.ctw,C.ctz,C.ctv,C.cGr,C.cGs,C.ctP,C.ctT,C.ctU,C.ctR,C.ctS,C.ctQ])
v(A.aC,[C.JP,C.S5,C.aAU,C.aIm,C.aIn,C.aBY,C.aIl,C.aD3,C.axk,C.aD7,C.Ct])
v(A.ak,[C.mJ,C.oK])
v(A.ad,[C.GO,C.GN,C.a1d,C.a1e])
v(A.af,[C.aad,C.aBS,C.aeM,C.aae])
v(A.We,[C.ctK,C.ctA])
u(C.GR,A.ayb)
u(C.aBT,C.aeM)
w(C.aeM,A.e7)})()
A.dhP(b.typeUniverse,JSON.parse('{"GO":{"ad":[],"p":[]},"S5":{"aC":[],"p":[]},"GN":{"ad":[],"p":[]},"JP":{"aC":[],"p":[]},"aad":{"af":["GO"]},"aAU":{"aC":[],"p":[]},"aBS":{"af":["GN"]},"aIm":{"aC":[],"p":[]},"aIn":{"aC":[],"p":[]},"aBY":{"aC":[],"p":[]},"aIl":{"aC":[],"p":[]},"aD3":{"aC":[],"p":[]},"axk":{"aC":[],"p":[]},"a1d":{"ad":[],"p":[]},"Ct":{"aC":[],"p":[]},"aBT":{"af":["a1d"]},"aD7":{"aC":[],"p":[]},"a1e":{"ad":[],"p":[]},"aae":{"af":["a1e"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("aa<ag>"),O:w("aa<z>"),e:w("aa<mJ>"),s:w("aa<m>"),p:w("aa<p>"),t:w("aa<Q>"),X:w("ac<mJ>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mG"),_:w("Ak"),k:w("mJ"),N:w("m"),Y:w("bi<a8>"),W:w("cR<m>"),J:w("ij<Q>"),j:w("ij<oK?>"),E:w("ya<cA>"),q:w("SL"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Qx=new A.L(983224,"MaterialIcons",!1)
D.axQ=new A.a5(D.Qx,48,B.b1,null,null,null)
D.bBD=new A.M(!0,B.bE,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJe=new A.x("Powered off",null,D.bBD,null,null,null,null,null,null,null,null,null)
D.aKG=w([D.axQ,B.z,D.bJe],x.p)
D.ajq=new A.er(B.Z,B.e,B.P,B.i,null,B.l,null,0,D.aKG,null)
D.acO=new A.di(B.J,null,null,D.ajq,null)
D.bvm=new A.an(18,18,B.Ki,null)
D.ad1=new A.di(B.J,null,null,D.bvm,null)
D.adE=new A.fW(2,null,null,null,null,B.Y,null,null,null,null)
D.agh=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.agK=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aid=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.alS=new A.V(0,3,0,3)
D.am1=new A.V(10,0,10,88)
D.amm=new A.V(12,6,12,10)
D.amA=new A.V(14,8,14,6)
D.Nl=new A.V(18,12,18,12)
D.anC=new A.V(20,18,20,8)
D.anM=new A.V(20,8,20,20)
D.NY=new A.V(8,6,15,8)
D.atv=new A.L(983222,"MaterialIcons",!1)
D.av8=new A.a5(B.i1,26,B.O,null,null,null)
D.avc=new A.a5(B.PC,18,null,null,null,null)
D.avu=new A.a5(B.oS,14,B.Y,null,null,null)
D.atN=new A.L(983420,"MaterialIcons",!1)
D.awf=new A.a5(D.atN,14,B.Y,null,null,null)
D.as2=new A.L(62895,"MaterialIcons",!1)
D.awj=new A.a5(D.as2,14,B.Y,null,null,null)
D.azk=new A.a5(B.iH,20,null,null,null,null)
D.azB=new A.a5(B.f6,16,null,null,null,null)
D.aMJ=w([B.aj,B.V],x.O)
D.S4=new A.aq(B.al,B.av,B.y,D.aMJ,null,null)
D.bph=new A.aI("NGMY OS","14.2.1")
D.bo8=new A.aI("VirtualDroid","13.8.4")
D.bo7=new A.aI("NGMY OS","15.0.0")
D.boR=new A.aI("VirtualDroid","14.1.2")
D.bo5=new A.aI("NGMY Tab OS","12.9.7")
D.bo3=new A.aI("NGMY OS","13.5.3")
D.bnT=new A.aI("VirtualDroid","15.2.0")
D.bou=new A.aI("NGMY OS","14.8.1")
D.boX=new A.aI("NGMY Tab OS","13.2.4")
D.bpr=new A.aI("VirtualDroid","12.6.9")
D.bnP=new A.aI("NGMY OS","16.0.1")
D.bnG=new A.aI("VirtualDroid","14.9.0")
D.bp9=new A.aI("NGMY Tab OS","14.0.3")
D.boh=new A.aI("NGMY OS","13.1.8")
D.bnO=new A.aI("VirtualDroid","13.4.5")
D.bo2=new A.aI("NGMY OS","15.3.2")
D.boY=new A.aI("NGMY Tab OS","12.4.1")
D.bpb=new A.aI("VirtualDroid","16.1.0")
D.bot=new A.aI("NGMY OS","14.4.6")
D.bpi=new A.aI("VirtualDroid","15.0.8")
D.aMi=w([D.bph,D.bo8,D.bo7,D.boR,D.bo5,D.bo3,D.bnT,D.bou,D.boX,D.bpr,D.bnP,D.bnG,D.bp9,D.boh,D.bnO,D.bo2,D.boY,D.bpb,D.bot,D.bpi],A.bk("aa<+(m,m)>"))
D.brt=new A.ed(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.br1=new A.ed(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bqX=new A.ed(["New York","United States",40.7128,-74.006,"America/New_York"])
D.br5=new A.ed(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bqT=new A.ed(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.br7=new A.ed(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.brv=new A.ed(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bqU=new A.ed(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.br0=new A.ed(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.br9=new A.ed(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bqS=new A.ed(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.brn=new A.ed(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.brk=new A.ed(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.br_=new A.ed(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.brh=new A.ed(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.brg=new A.ed(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bqR=new A.ed(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.br4=new A.ed(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bre=new A.ed(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.brj=new A.ed(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Ta=w([D.brt,D.br1,D.bqX,D.br5,D.bqT,D.br7,D.brv,D.bqU,D.br0,D.br9,D.bqS,D.brn,D.brk,D.br_,D.brh,D.brg,D.bqR,D.br4,D.bre,D.brj],A.bk("aa<+(m,m,a8,a8,m)>"))
D.aRE=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_2=new C.GR(0,"youtube")
D.a_3=new C.GR(1,"tiktok")
D.Gp=new C.GR(2,"instagram")
D.a_4=new C.GR(3,"facebook")
D.bjE=new C.GR(4,"other")
D.buZ=new A.an(3,null,null,null)
D.bvE=new A.iS(4,10,8,0.52,null)
D.bKv=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.byU=new A.aS(D.bKv,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bBY=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKj=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bVI=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bWu=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bWA=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c_U=new C.aD3(null)})();(function staticFields(){$.dew=20
$.aph=null
$.bbx=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dW2","DE",()=>A.QO(0))
w($,"dW3","Lo",()=>A.QO(null))})()};
(a=>{a["YlkXYhFf5k87/Zz0ZlEFkvifZAA="]=a.current})($__dart_deferred_initializers__);