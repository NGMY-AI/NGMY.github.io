((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dRQ(d,e){A.a7(d,!1).cJ(A.ef(new C.d_7(e),!0,null,x.H))},
UB(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UB=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Li()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a4,B.U),t)
w=3
return A.b(A.dl(B.D,new C.d_6(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UB)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dzR(r)
if(q==null){d.F(x.q).f.O(D.byi)
w=1
break}w=4
return A.b(A.bM(B.fD,null,x.H),$async$UB)
case 4:if(d.e==null){w=1
break}n=B.n.au(e,1,999)
$.ddx=n
p=C.dzL(n)
n=$.Dx()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d2Q(q)
d.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UB,v)},
ddA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mI(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
GJ(d){return C.dzU(d)},
dzU(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GJ=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GJ)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.cr(r)?10:11
break
case 10:k=J.ft(r,x.f)
k=A.dt(k,new C.bbA(),k.$ti.j("I.E"),x.k)
j=A.S(k).j("aa<I.E>")
i=A.D(new A.aa(k,new C.bbB(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.ddC(q)
w=12
return A.b(C.GI(a3,p),$async$GJ)
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
case 19:m=C.ddA(A.P(n,x.N,x.z))
l=C.ddC(A.a([m],x.e))
w=21
return A.b(C.GI(a3,l),$async$GJ)
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
case 18:case 14:q=C.dzS()
w=22
return A.b(C.GI(a3,q),$async$GJ)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GJ,v)},
ddC(d){var w=A.T(d).j("A<1,m>"),v=new A.A(d,new C.bbs(),w).eD(0),u=new A.A(d,new C.bbt(),w).eD(0),t=new A.A(d,new C.bbu(),w).eD(0),s=new A.A(d,new C.bbv(),w).eD(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d2R(null,q,u,t,v,s));++q}return r},
apb(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apb=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GJ(d),$async$apb)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d9(t,new C.bbw(),s).eD(0)
p=r.d9(t,new C.bbx(),s).eD(0)
o=r.d9(t,new C.bby(),s).eD(0)
n=r.d9(t,new C.bbz(),s).eD(0)
m=C.d2R(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GI(d,t),$async$apb)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apb,v)},
GI(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GI=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GI)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bbr(),x.P)
s=A.D(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GI)
case 3:return A.f(null,v)}})
return A.h($async$GI,v)},
dzS(){var w,v=x.N,u=A.b5(v),t=A.b5(v),s=A.b5(v),r=A.b5(v),q=J.dX(20,x.k)
for(w=0;w<20;++w)q[w]=C.d2R(w,w,t,s,u,r)
return q},
d2R(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jL(),h=d==null,g=D.SP[B.n.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.SP[B.n.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.A(p,new C.bbq(),A.T(p).j("A<1,m>")).fj(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.fj(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bl(B.n.je(i.by(256),16),2,"0")
s=B.d.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.an(e,20)
k=D.aRz[w]
j=D.aMk[w]
return new C.mI("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bl(B.n.q(e+1),2,"0"),u,k,C.dzT(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.J(Date.now(),0,!1).a0().W())},
dzT(d,e){var w,v=J.dX(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bl(B.n.je(d.by(256),16),2,"0")
return B.d.fj(v)},
d_7:function d_7(d){this.a=d},
d_6:function d_6(d,e){this.a=d
this.b=e},
d_2:function d_2(d){this.a=d},
d_3:function d_3(d){this.a=d},
d_4:function d_4(d){this.a=d},
d_5:function d_5(d,e){this.a=d
this.b=e},
JJ:function JJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mI:function mI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bbA:function bbA(){},
bbB:function bbB(){},
bbs:function bbs(){},
bbt:function bbt(){},
bbu:function bbu(){},
bbv:function bbv(){},
bbw:function bbw(){},
bbx:function bbx(){},
bby:function bby(){},
bbz:function bbz(){},
bbr:function bbr(){},
bbq:function bbq(){},
GH:function GH(d,e){this.c=d
this.a=e},
aa7:function aa7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ct9:function ct9(){},
ct8:function ct8(d,e){this.a=d
this.b=e},
ct6:function ct6(d){this.a=d},
ct7:function ct7(d,e){this.a=d
this.b=e},
cta:function cta(d){this.a=d},
cte:function cte(d){this.a=d},
ctf:function ctf(d,e){this.a=d
this.b=e},
ctd:function ctd(d,e,f){this.a=d
this.b=e
this.c=f},
ctc:function ctc(d,e){this.a=d
this.b=e},
ctb:function ctb(d,e){this.a=d
this.b=e},
ctg:function ctg(d){this.a=d},
S0:function S0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAN:function aAN(d,e){this.c=d
this.a=e},
GG:function GG(d,e){this.c=d
this.a=e},
aBL:function aBL(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ct3:function ct3(d){this.a=d},
ct4:function ct4(d){this.a=d},
ct5:function ct5(d){this.a=d},
ct2:function ct2(d,e){this.a=d
this.b=e},
ct_:function ct_(d){this.a=d},
ct0:function ct0(d){this.a=d},
csZ:function csZ(d,e){this.a=d
this.b=e},
ct1:function ct1(d){this.a=d},
csY:function csY(d){this.a=d},
aIf:function aIf(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIg:function aIg(d,e,f){this.c=d
this.d=e
this.a=f},
aBR:function aBR(d,e){this.c=d
this.a=e},
aIe:function aIe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cFS:function cFS(d){this.a=d},
cFT:function cFT(d){this.a=d},
aCX:function aCX(d){this.a=d},
axd:function axd(d,e){this.c=d
this.a=e},
dzR(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dzQ(v)
if(u!=null)return new C.oH(w,C.d2P(u,!1),D.ZG,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dzP(v)
if(t!=null)return new C.oH(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ZH,"TikTok",q)
s=C.dzO(w,v)
if(s!=null)return s
r=C.dzN(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oH(w,w,D.bjc,"Video",q)
return q},
dzO(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oH(d,"https://www.instagram.com/reel/"+w+u,D.G8,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oH(d,"https://www.instagram.com/p/"+w+u,D.G8,t,null)}return null},
dzN(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oH(d,"https://www.facebook.com/plugins/video.php?href="+A.ey(2,d,B.aK,!1)+"&show_text=false&width=734",D.ZI,"Facebook",null)},
dzQ(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dzP(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
GK:function GK(d,e){this.a=d
this.b=e},
oH:function oH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a18:function a18(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBM:function aBM(d,e){var _=this
_.d=$
_.cV$=d
_.aU$=e
_.c=_.a=null},
aD0:function aD0(d,e){this.c=d
this.a=e},
cvJ:function cvJ(d){this.a=d},
cvK:function cvK(d){this.a=d},
Cm:function Cm(d,e){this.c=d
this.a=e},
aeG:function aeG(){},
ddB(d,e,f,g,h,i){return new C.a19(i,f,h,e,g,d)},
dQy(d){var w=window
w.toString
A.h2(w,"message",new C.cWi(d),!1,x._)},
a19:function a19(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aa8:function aa8(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cth:function cth(d){this.a=d},
ctp:function ctp(d){this.a=d},
ctn:function ctn(d){this.a=d},
ctl:function ctl(d){this.a=d},
ctm:function ctm(d){this.a=d},
ctj:function ctj(d){this.a=d},
cto:function cto(d){this.a=d},
ctk:function ctk(d){this.a=d},
cti:function cti(d){this.a=d},
cWi:function cWi(d){this.a=d},
ddv(){var w,v,u
try{v=A.xX()
w=v.gpS(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d2P(d,e){var w=C.ddv(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.ey(2,w,B.aK,!1))
v.push("widget_referrer="+A.ey(2,w,B.aK,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
d2O(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
ddw(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dzK(d,e,f){var w,v,u=C.d2O(d)
if(u!=null){if(f){w=C.ddv()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.ddw(C.d2P(u,e))}return C.ddw(d)},
dzL(d){if(d<=4)return 0
return B.n.aX(d-1,4)*4},
dzM(d){var w
if($.Li().a==null)return!1
w=$.Dx().a
return d>=w&&d<w+4},
ddz(){var w=$.apa
if(w!=null)w.a8(0)
$.apa=null
$.Dx().sv(0,0)},
ddy(){var w,v,u,t=$.Li()
if(t.a==null)return
w=$.apa
if(w!=null)w.a8(0)
v=$.ddx
if(v<=4){t=t.a
t.toString
C.d2Q(t)
return}w=$.Dx()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d2Q(t)},
d2Q(d){var w=$.apa
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
default:w=null}$.apa=A.dq(A.d4(0,0,0,0,0,w),C.dQJ())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.JJ.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.o,1),r=A.a1(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eQ,A.j(this.c,w,w,w,w,w,A.l(w,w,v?B.W:B.de,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.et,w,w,w)}}
C.mI.prototype={
ac(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GH.prototype={
U(){return new C.aa7(A.a([],x.e))},
geO(){return this.c}}
C.aa7.prototype={
Y(){var w=this
w.a3()
$.Dx().ai(0,w.garj())
C.dQy(w.gbcO())
w.UZ()},
bcg(){if(this.c!=null)this.p(new C.ct9())},
bcP(){C.ddy()},
n(){$.Dx().V(0,this.garj())
C.ddz()
$.Li().sv(0,null)
this.a2()},
UZ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UZ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GJ(t.a.c),$async$UZ)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ct8(t,s))
$.bbp=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$UZ,v)},
Rg(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rg=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.ct6(t))
w=3
return A.b(C.apb(t.a.c),$async$Rg)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ct7(t,s))
$.bbp=J.a3(t.d)
t.c.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rg,v)},
beG(d){var w=this.c
w.toString
A.a7(w,!1).cJ(A.ef(new C.cta(d),!1,null,x.H))},
bfe(){var w=this.c
w.toString
return C.UB(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dN:B.d6,s=A.aK(v,v,v,v,B.Ek,v,v,v,new C.cte(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AS(A.F(A.a([A.H(new A.K(B.hR,A.j(r,v,1,B.af,v,v,A.l(v,v,u?B.c:B.X,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.aZ(!1,v,!0,new A.K(B.aG,A.a1(B.f5,B.O,v,v,28),v),B.bT,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfd(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cA(!0,A.B(A.a([new A.K(D.NI,r,v),A.H(w.e?B.kR:new A.ih($.Li(),new C.ctf(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.ck(v,t,s,v,!1,!1,A.ak1(B.O,B.A6,B.mG,D.bMO,w.e?v:new C.ctg(w)),v)}}
C.S0.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cr,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a18(n,!0,!C.dzM(w),"Fold "+(B.n.aX(w,4)+1)+"/"+B.n.aX(v.e+4-1,4),u)
n=w}else n=A.u(u,A.B(A.a([A.a1(B.hY,B.kY,u,u,22),B.al,A.j("YouTube",u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.uY,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.aZ(!1,t,!0,A.B(A.a([A.H(A.u(u,A.cN(p,A.hN(A.B(A.a([new C.aAN(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a1(B.ry,B.O.l(0.85),u,u,9),D.buw,A.j("Tap",u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.alw,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.RJ,B.k),u,u,u,B.eu,u,u,u),1),B.al,A.j(o.b,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a1)}}
C.aAN.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.oI,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Ny,w,w,w)}}
C.GG.prototype={
U(){return new C.aBL()}}
C.aBL.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dN:B.d6,t=A.aK(w,w,w,w,B.Ek,w,w,w,new C.ct3(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ck(w,u,A.cA(!0,A.B(A.a([new A.K(D.NI,A.F(A.a([t,A.H(new A.AS(A.F(A.a([A.H(new A.K(B.hR,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,A.l(w,w,v?B.c:B.X,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.aZ(!1,w,!0,new A.K(B.aG,A.a1(B.f5,B.O,w,w,28),w),B.bT,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ct4(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ih($.Li(),new C.ct5(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aIf.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.ew,28),new A.ag(0,B.w,B.q.l(0.45),B.cA,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.ddB(new A.cR(v+"_full_"+u,x.W),!1,u,!1,w.gaFT(),v+"_full")
w=v}else w=new C.aBR(t.r,s)}else w=new C.axd(m,s)
else w=D.c_l
return A.u(s,A.cN(n,A.hN(A.B(A.a([new C.aIg(m,l,s),A.H(w,1),new C.aIe(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.RJ,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aIg.prototype={
C(d){var w,v,u,t,s=null,r=new A.J(Date.now(),0,!1),q=A.dH(r)
r=A.hl(r)
w=new A.dd(q,r)
v=w.gGn()===0?12:w.gGn()
r=B.a.bl(B.n.q(r),2,"0")
q=(q<12?B.eG:B.hk)===B.eG?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,B.lA,s,s,s),B.b8,A.j(u.b,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b7,D.aw4,B.dU,D.avi,B.dU,D.aw8],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.F(A.a([A.a1(B.Ec,B.O.l(0.9),s,s,12),B.dU,A.H(A.j(u.c,s,s,B.af,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.B(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.ame,s,s,s)}}
C.aBR.prototype={
C(d){var w=null
return A.u(w,A.aV(A.B(A.a([A.a1(B.wB,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.ep(D.azs,D.bKC,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aJ(B.O.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uY,w,w,w,w,w,w,w,w,1/0)}}
C.aIe.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arb(B.Qd,"YouTube",s===0,r,new C.cFS(u))
s=u.arb(B.kg,"Device",s===1,r,new C.cFT(u))
w=r?"Power off":"Power on"
v=r?D.Qe:D.atf
return A.u(t,A.F(A.a([q,B.Y,s,B.b8,A.aK(t,t,t,t,A.a1(v,r?B.aY:B.dI,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cH)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.am0,t,t,t)},
arb(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b1
else w=f?B.O:B.a9
v=f&&g?B.O.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.aZ(!1,A.n(10),!0,new A.K(B.l9,A.B(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aCX.prototype={
C(d){return D.acK}}
C.axd.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,B.i9,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qw("Serial",u.c),q=w.qw("Model",u.d),p=w.qw("Device ID",u.e),o=w.qw("IMEI",u.r),n=w.qw("MAC",u.f),m=w.qw("OS",u.w+" "+u.x),l=w.qw("Location",u.y+", "+u.z),k=w.qw("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qw("Timezone",u.at)
u=u.ax
return A.e4(A.a([t,B.al,s,B.R,r,q,p,o,n,m,l,k,j,w.qw("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aG,v,v,B.Z,!1)},
qw(d,e){var w=null
return new A.K(B.c7,A.B(A.a([A.j(d.toUpperCase(),w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cb,A.j(e,w,w,w,w,w,D.bBp,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GK.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oH.prototype={
gaFT(){var w=this.c
return w===D.ZG||w===D.ZH||w===D.G8||w===D.ZI}}
C.a18.prototype={
U(){return new C.aBM(null,null)}}
C.aBM.prototype={
Y(){this.a3()
var w=A.bE(null,B.qS,null,1,null,this)
w.mn(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPj()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dU(t,new A.t(t,t,t,t,t,new A.aq(B.da,B.c8,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bz),q=x.Y,p=u.d
p===$&&A.c()
p=A.c9(B.hN,p,t)
w=B.c.l(0.92)
q=A.aV(new A.dj(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bg.T>")),!1,A.a1(B.hY,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kY
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aD0(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a6,t,B.b4,B.m,s,t)}}
C.aD0.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kw(u,new C.cvJ(this),B.bu,!0,w,w,new C.cvK(this),w)
return new C.Cm(v,w)}}
C.Cm.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qz,B.Kn],x.O),B.hY)
break
case 1:w=new A.aI(A.a([B.uY,D.agm],x.O),B.jm)
break
case 2:w=new A.aI(A.a([D.ahR,D.afU],x.O),B.wJ)
break
case 3:w=new A.aI(A.a([B.X,B.df],x.O),B.wN)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.mC)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a1(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.am,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.aeG.prototype={
n(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdH())
w.aU$=null
w.a2()},
br(){this.bK()
this.bE()
this.dI()}}
C.a19.prototype={
U(){return new C.aa8()}}
C.aa8.prototype={
buT(d,e){var w=C.d2O(d)
if(w!=null)return C.d2P(w,e)
return d},
a38(d,e){var w,v=this,u=C.d2O(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.buT(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dzK(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsN(){var w,v=this
if(v.w)return
v.p(new C.cth(v))
w=v.e
if(w!=null)v.a38(w,v.a.d)},
Y(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.Dy()
$.o9().rK(w,new C.ctp(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cti(v))
w=v.e
w.toString
v.a38(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.Qq,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hN(A.aV(new A.K(new A.V(12,12,12,12),A.B(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.XR(n,B.pk,w)],v)
if(o.f)w.push(A.hN(A.aV(new A.an(28,28,D.adf,n),n,n,n),B.c9,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b1,B.o,1)
q=A.a1(B.Qt,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fc(0,A.aT(!1,B.M,!0,n,A.aZ(!1,n,!0,A.aV(A.u(n,A.F(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.N9,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsM(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aQ(B.a6,n,B.b4,B.m,w,n)}}
var z=a.updateTypes(["m(mI)","~()","GH(R)","mI(W<@,@>)","a0(mI)","W<m,@>(mI)","ax<~>()","GG(R)","ih<Q>(R,oH?,p?)","S0(R,Q)","u2(R,oH?,p?)","Cm(R,ak,dr?)"])
C.d_7.prototype={
$1(d){return new C.GH(this.a,null)},
$S:z+2}
C.d_6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cw,B.X],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.ew,32)],x.V),g=A.U(m?B.bo:B.O.l(0.18),B.o,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.V.l(m?0.18:0.08)],j)
e=A.u(n,D.auX,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,A.l(n,n,m?B.c:B.X,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.B(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,A.l(n,n,m?B.W:B.aD,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.f7,w,A.aK(n,n,n,n,A.a1(B.cJ,m?B.a9:B.c9,n,n,n),n,n,n,new C.d_2(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a5,B.y,j,n,n),B.k),n,n,n,B.Ni,n,n,n)
e=A.er(B.bW,A.a([new C.JJ("YouTube",B.Eb,m,n),new C.JJ("TikTok",B.jm,m,n),new C.JJ("Instagram",B.wJ,m,n),new C.JJ("Facebook",B.wN,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bB:B.fA,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d6
r=A.a1(B.jl,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.b3
u=A.B(A.a([e,B.aq,A.au(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bk(n,new A.b6(4,q,B.L),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aJ(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.Jb),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.K,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.jc(D.av0,D.bQI,new C.d_3(d),A.kb(n,n,n,n,n,n,n,n,n,n,n,m?B.aF:B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.K(new A.V(12,0,12,12+l.f.d),A.dU(A.cN(f,A.B(A.a([j,new A.K(D.ani,u,n),new A.K(D.ans,A.F(A.a([e,B.b8,A.bQ(!1,A.j("Cancel",n,n,n,n,n,A.l(n,n,m?B.W:B.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d_4(d),n,n),B.Y,A.dN(D.azb,D.bR2,new C.d_5(d,w),A.bx(B.O,n,n,n,B.c,n,D.N9,n,new A.bD(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.am,B.av,B.y,i,n,n),B.k),B.bz),n)},
$S:65}
C.d_2.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d_3.prototype={
$0(){C.ddz()
$.Li().sv(0,null)
A.a7(this.a,!1).P(null)},
$S:0}
C.d_4.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d_5.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a7(this.a,!1).P(w)
return null},
$S:0}
C.bbA.prototype={
$1(d){return C.ddA(A.P(d,x.N,x.z))},
$S:z+3}
C.bbB.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bbs.prototype={
$1(d){return d.c},
$S:z+0}
C.bbt.prototype={
$1(d){return d.r},
$S:z+0}
C.bbu.prototype={
$1(d){return d.f},
$S:z+0}
C.bbv.prototype={
$1(d){return d.at},
$S:z+0}
C.bbw.prototype={
$1(d){return d.c},
$S:z+0}
C.bbx.prototype={
$1(d){return d.r},
$S:z+0}
C.bby.prototype={
$1(d){return d.f},
$S:z+0}
C.bbz.prototype={
$1(d){return d.at},
$S:z+0}
C.bbr.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bbq.prototype={
$1(d){return B.a.bl(B.n.je(d,16),2,"0").toUpperCase()},
$S:74}
C.ct9.prototype={
$0(){},
$S:0}
C.ct8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ct6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ct7.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cta.prototype={
$1(d){return new C.GG(this.a,null)},
$S:z+7}
C.cte.prototype={
$0(){return A.a7(this.a,!1).ep()},
$S:0}
C.ctf.prototype={
$3(d,e,f){return new A.ih($.Dx(),new C.ctd(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.ctd.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ai(d,k,x.Q)
w=w==null?k:w.gko()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.o,1)
q=A.a1(B.hY,B.O,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Dx().a
m=B.j.au(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,A.l(k,k,l.c?B.c:B.X,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.f1,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cN(s,new A.iC(1.7777777777777777,C.ddB(new A.cR("fleet_master_"+r,x.W),!0,r,!0,j.gaFT(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zt(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.k8(new A.K(B.C9,A.B(u,B.t,B.e,B.f,0,B.l),k),k),new A.oS(D.alG,A.asF(new A.nO(new C.ctc(i,j),J.a3(i.d),!1,!0,!0,A.vE(),k),D.bvb),k)],w))},
$S:1566}
C.ctc.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.S0(v,e,J.a3(w.d),new C.ctb(w,v),this.b,null)},
$S:z+9}
C.ctb.prototype={
$0(){return this.a.beG(this.b)},
$S:0}
C.ctg.prototype={
$0(){this.a.Rg()
return null},
$S:0}
C.ct3.prototype={
$0(){return A.a7(this.a,!1).ep()},
$S:0}
C.ct4.prototype={
$0(){C.UB(this.a,$.bbp)
return null},
$S:0}
C.ct5.prototype={
$3(d,e,f){return A.fM(new C.ct2(this.a,e))},
$S:z+10}
C.ct2.prototype={
$2(d,e){var w,v=null,u=B.j.au(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.ct(A.B(A.a([A.j(r,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.aq,new C.aIf(u,s.a.c,s.e,s.d,new C.ct_(s),new C.ct0(s),new C.ct1(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vX,v,v,B.Z),v,v,v)},
$S:1567}
C.ct_.prototype={
$0(){var w=this.a.c
w.toString
C.UB(w,$.bbp)
return null},
$S:0}
C.ct0.prototype={
$1(d){var w=this.a
return w.p(new C.csZ(w,d))},
$S:36}
C.csZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ct1.prototype={
$0(){var w=this.a
return w.p(new C.csY(w))},
$S:0}
C.csY.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cFS.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cFT.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cvJ.prototype={
$3(d,e,f){return new C.Cm(this.a.c,null)},
$S:z+11}
C.cvK.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.b4,B.m,A.a([new C.Cm(this.a.c,null),D.acC],x.p),null)},
$C:"$3",
$R:3,
$S:490}
C.cth.prototype={
$0(){return this.a.w=!0},
$S:0}
C.ctp.prototype={
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
w.a38(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h2(v,"load",new C.ctn(w),!1,u)
v=w.e
v.toString
A.h2(v,"error",new C.cto(w),!1,u)
w=w.e
w.toString
return w},
$S:573}
C.ctn.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.ctl(w))
A.bM(B.A,new C.ctm(w),x.H)}},
$S:41}
C.ctl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctm.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.ctj(w))},
$S:12}
C.ctj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cto.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.ctk(w))},
$S:41}
C.ctk.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cti.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cWi.prototype={
$1(d){var w,v,u,t,s=new A.BW([],[]).FF(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1568};(function aliases(){var w=C.aeG.prototype
w.aPj=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aa7.prototype,"garj","bcg",1)
w(u,"gbcO","bcP",1)
w(u,"gbfd","bfe",6)
w(C.aa8.prototype,"gbsM","bsN",1)
v(C,"dQJ","ddy",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vZ,[C.d_7,C.d_6,C.bbA,C.bbB,C.bbs,C.bbt,C.bbu,C.bbv,C.bbw,C.bbx,C.bby,C.bbz,C.bbr,C.bbq,C.cta,C.ctf,C.ctd,C.ct5,C.ct0,C.cvJ,C.cvK,C.ctp,C.ctn,C.cto,C.cWi])
v(A.W8,[C.d_2,C.d_3,C.d_4,C.d_5,C.ct9,C.ct8,C.ct6,C.ct7,C.cte,C.ctb,C.ctg,C.ct3,C.ct4,C.ct_,C.csZ,C.ct1,C.csY,C.cFS,C.cFT,C.cth,C.ctl,C.ctm,C.ctj,C.ctk,C.cti])
v(A.aB,[C.JJ,C.S0,C.aAN,C.aIf,C.aIg,C.aBR,C.aIe,C.aCX,C.axd,C.aD0,C.Cm])
v(A.ak,[C.mI,C.oH])
v(A.ad,[C.GH,C.GG,C.a18,C.a19])
v(A.af,[C.aa7,C.aBL,C.aeG,C.aa8])
v(A.W9,[C.ctc,C.ct2])
u(C.GK,A.ay4)
u(C.aBM,C.aeG)
w(C.aeG,A.e5)})()
A.dgQ(b.typeUniverse,JSON.parse('{"GH":{"ad":[],"p":[]},"S0":{"aB":[],"p":[]},"GG":{"ad":[],"p":[]},"JJ":{"aB":[],"p":[]},"aa7":{"af":["GH"]},"aAN":{"aB":[],"p":[]},"aBL":{"af":["GG"]},"aIf":{"aB":[],"p":[]},"aIg":{"aB":[],"p":[]},"aBR":{"aB":[],"p":[]},"aIe":{"aB":[],"p":[]},"aCX":{"aB":[],"p":[]},"axd":{"aB":[],"p":[]},"a18":{"ad":[],"p":[]},"Cm":{"aB":[],"p":[]},"aBM":{"af":["a18"]},"aD0":{"aB":[],"p":[]},"a19":{"ad":[],"p":[]},"aa8":{"af":["a19"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bm
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mI>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<Q>"),X:w("ac<mI>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mE"),_:w("Af"),k:w("mI"),N:w("m"),Y:w("bi<a8>"),W:w("cR<m>"),J:w("ih<Q>"),j:w("ih<oH?>"),E:w("y4<cz>"),q:w("SG"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.buV=new A.an(18,18,B.K5,null)
D.acC=new A.dg(B.J,null,null,D.buV,null)
D.Qe=new A.L(983224,"MaterialIcons",!1)
D.axG=new A.a5(D.Qe,48,B.b1,null,null,null)
D.bB5=new A.M(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLj=new A.x("Powered off",null,D.bB5,null,null,null,null,null,null,null,null)
D.aKz=w([D.axG,B.z,D.bLj],x.p)
D.aj4=new A.es(B.Z,B.e,B.P,B.i,null,B.l,null,0,D.aKz,null)
D.acK=new A.dg(B.J,null,null,D.aj4,null)
D.adf=new A.h5(2,null,null,null,null,B.W,null,null,null,null)
D.afU=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.agm=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ahR=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.alw=new A.V(0,3,0,3)
D.alG=new A.V(10,0,10,88)
D.am0=new A.V(12,6,12,10)
D.ame=new A.V(14,8,14,6)
D.N9=new A.V(18,12,18,12)
D.ani=new A.V(20,18,20,8)
D.ans=new A.V(20,8,20,20)
D.NI=new A.V(8,6,15,8)
D.atf=new A.L(983222,"MaterialIcons",!1)
D.auX=new A.a5(B.hY,26,B.O,null,null,null)
D.av0=new A.a5(B.Pl,18,null,null,null,null)
D.avi=new A.a5(B.oI,14,B.W,null,null,null)
D.aty=new A.L(983420,"MaterialIcons",!1)
D.aw4=new A.a5(D.aty,14,B.W,null,null,null)
D.arK=new A.L(62895,"MaterialIcons",!1)
D.aw8=new A.a5(D.arK,14,B.W,null,null,null)
D.azb=new A.a5(B.iF,20,null,null,null,null)
D.azs=new A.a5(B.f5,16,null,null,null,null)
D.aML=w([B.aj,B.X],x.O)
D.RJ=new A.aq(B.am,B.av,B.y,D.aML,null,null)
D.boQ=new A.aI("NGMY OS","14.2.1")
D.bnH=new A.aI("VirtualDroid","13.8.4")
D.bnG=new A.aI("NGMY OS","15.0.0")
D.bop=new A.aI("VirtualDroid","14.1.2")
D.bnE=new A.aI("NGMY Tab OS","12.9.7")
D.bnC=new A.aI("NGMY OS","13.5.3")
D.bnr=new A.aI("VirtualDroid","15.2.0")
D.bo2=new A.aI("NGMY OS","14.8.1")
D.bov=new A.aI("NGMY Tab OS","13.2.4")
D.bp_=new A.aI("VirtualDroid","12.6.9")
D.bnn=new A.aI("NGMY OS","16.0.1")
D.bne=new A.aI("VirtualDroid","14.9.0")
D.boI=new A.aI("NGMY Tab OS","14.0.3")
D.bnQ=new A.aI("NGMY OS","13.1.8")
D.bnm=new A.aI("VirtualDroid","13.4.5")
D.bnB=new A.aI("NGMY OS","15.3.2")
D.bow=new A.aI("NGMY Tab OS","12.4.1")
D.boK=new A.aI("VirtualDroid","16.1.0")
D.bo1=new A.aI("NGMY OS","14.4.6")
D.boR=new A.aI("VirtualDroid","15.0.8")
D.aMk=w([D.boQ,D.bnH,D.bnG,D.bop,D.bnE,D.bnC,D.bnr,D.bo2,D.bov,D.bp_,D.bnn,D.bne,D.boI,D.bnQ,D.bnm,D.bnB,D.bow,D.boK,D.bo1,D.boR],A.bm("ab<+(m,m)>"))
D.br1=new A.eb(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bqA=new A.eb(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bqv=new A.eb(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bqE=new A.eb(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bqr=new A.eb(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bqG=new A.eb(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.br3=new A.eb(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bqs=new A.eb(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bqz=new A.eb(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bqI=new A.eb(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bqq=new A.eb(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bqW=new A.eb(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bqT=new A.eb(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bqy=new A.eb(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bqQ=new A.eb(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bqP=new A.eb(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bqp=new A.eb(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bqD=new A.eb(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bqN=new A.eb(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bqS=new A.eb(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.SP=w([D.br1,D.bqA,D.bqv,D.bqE,D.bqr,D.bqG,D.br3,D.bqs,D.bqz,D.bqI,D.bqq,D.bqW,D.bqT,D.bqy,D.bqQ,D.bqP,D.bqp,D.bqD,D.bqN,D.bqS],A.bm("ab<+(m,m,a8,a8,m)>"))
D.aRz=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ZG=new C.GK(0,"youtube")
D.ZH=new C.GK(1,"tiktok")
D.G8=new C.GK(2,"instagram")
D.ZI=new C.GK(3,"facebook")
D.bjc=new C.GK(4,"other")
D.buw=new A.an(3,null,null,null)
D.bvb=new A.ja(4,10,8,0.52,null)
D.bMk=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.byi=new A.aS(D.bMk,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bBp=new A.M(!0,B.c,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKC=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bMO=new A.x("Add device",null,null,null,null,null,null,null,null,null,null)
D.bQI=new A.x("Stop",null,null,null,null,null,null,null,null,null,null)
D.bR2=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.c_l=new C.aCX(null)})();(function staticFields(){$.ddx=20
$.apa=null
$.bbp=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUZ","Dx",()=>A.QJ(0))
w($,"dV_","Li",()=>A.QJ(null))})()};
(a=>{a["Ldckx4G3FQQuEHHHk9x/l/HMGoc="]=a.current})($__dart_deferred_initializers__);