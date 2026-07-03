((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dS4(d,e){A.a7(d,!1).cA(A.e5(new C.d_f(e),!0,null,x.H))},
UB(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UB=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Lj()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a3,B.U),t)
w=3
return A.b(A.dl(B.D,new C.d_e(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UB)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dA4(r)
if(q==null){d.F(x.q).f.O(D.byo)
w=1
break}w=4
return A.b(A.bM(B.fD,null,x.H),$async$UB)
case 4:if(d.e==null){w=1
break}n=B.n.au(e,1,999)
$.ddJ=n
p=C.dzZ(n)
n=$.Dz()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d3_(q)
d.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UB,v)},
ddM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
GL(d){return C.dA7(d)},
dA7(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GL=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GL)
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
k=A.dt(k,new C.bbD(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("aa<J.E>")
i=A.D(new A.aa(k,new C.bbE(),j),j.j("J.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.ddO(q)
w=12
return A.b(C.GK(a3,p),$async$GL)
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
case 19:m=C.ddM(A.P(n,x.N,x.z))
l=C.ddO(A.a([m],x.e))
w=21
return A.b(C.GK(a3,l),$async$GL)
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
case 18:case 14:q=C.dA5()
w=22
return A.b(C.GK(a3,q),$async$GL)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GL,v)},
ddO(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bbv(),w).eD(0),u=new A.B(d,new C.bbw(),w).eD(0),t=new A.B(d,new C.bbx(),w).eD(0),s=new A.B(d,new C.bby(),w).eD(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d30(null,q,u,t,v,s));++q}return r},
apd(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apd=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GL(d),$async$apd)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d9(t,new C.bbz(),s).eD(0)
p=r.d9(t,new C.bbA(),s).eD(0)
o=r.d9(t,new C.bbB(),s).eD(0)
n=r.d9(t,new C.bbC(),s).eD(0)
m=C.d30(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GK(d,t),$async$apd)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apd,v)},
GK(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GK=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GK)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.bbu(),x.P)
s=A.D(s,s.$ti.j("a3.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GK)
case 3:return A.f(null,v)}})
return A.h($async$GK,v)},
dA5(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dV(20,x.k)
for(w=0;w<20;++w)q[w]=C.d30(w,w,t,s,u,r)
return q},
d30(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jn(),h=d==null,g=D.SU[B.n.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.SU[B.n.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bbt(),A.T(p).j("B<1,m>")).f7(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.f7(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bl(B.n.je(i.by(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.an(e,20)
k=D.aRD[w]
j=D.aMo[w]
return new C.mI("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bl(B.n.q(e+1),2,"0"),u,k,C.dA6(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.I(Date.now(),0,!1).a0().W())},
dA6(d,e){var w,v=J.dV(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bl(B.n.je(d.by(256),16),2,"0")
return B.d.f7(v)},
d_f:function d_f(d){this.a=d},
d_e:function d_e(d,e){this.a=d
this.b=e},
d_a:function d_a(d){this.a=d},
d_b:function d_b(d){this.a=d},
d_c:function d_c(d){this.a=d},
d_d:function d_d(d,e){this.a=d
this.b=e},
JK:function JK(d,e,f,g){var _=this
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
bbD:function bbD(){},
bbE:function bbE(){},
bbv:function bbv(){},
bbw:function bbw(){},
bbx:function bbx(){},
bby:function bby(){},
bbz:function bbz(){},
bbA:function bbA(){},
bbB:function bbB(){},
bbC:function bbC(){},
bbu:function bbu(){},
bbt:function bbt(){},
GJ:function GJ(d,e){this.c=d
this.a=e},
aa8:function aa8(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cte:function cte(){},
ctd:function ctd(d,e){this.a=d
this.b=e},
ctb:function ctb(d){this.a=d},
ctc:function ctc(d,e){this.a=d
this.b=e},
ctf:function ctf(d){this.a=d},
ctj:function ctj(d){this.a=d},
ctk:function ctk(d,e){this.a=d
this.b=e},
cti:function cti(d,e,f){this.a=d
this.b=e
this.c=f},
cth:function cth(d,e){this.a=d
this.b=e},
ctg:function ctg(d,e){this.a=d
this.b=e},
ctl:function ctl(d){this.a=d},
S0:function S0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAP:function aAP(d,e){this.c=d
this.a=e},
GI:function GI(d,e){this.c=d
this.a=e},
aBN:function aBN(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ct8:function ct8(d){this.a=d},
ct9:function ct9(d){this.a=d},
cta:function cta(d){this.a=d},
ct7:function ct7(d,e){this.a=d
this.b=e},
ct4:function ct4(d){this.a=d},
ct5:function ct5(d){this.a=d},
ct3:function ct3(d,e){this.a=d
this.b=e},
ct6:function ct6(d){this.a=d},
ct2:function ct2(d){this.a=d},
aIh:function aIh(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIi:function aIi(d,e,f){this.c=d
this.d=e
this.a=f},
aBT:function aBT(d,e){this.c=d
this.a=e},
aIg:function aIg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cFZ:function cFZ(d){this.a=d},
cG_:function cG_(d){this.a=d},
aCZ:function aCZ(d){this.a=d},
axf:function axf(d,e){this.c=d
this.a=e},
dA4(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dA3(v)
if(u!=null)return new C.oH(w,C.d2Z(u,!1),D.ZL,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dA2(v)
if(t!=null)return new C.oH(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ZM,"TikTok",q)
s=C.dA1(w,v)
if(s!=null)return s
r=C.dA0(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oH(w,w,D.bjg,"Video",q)
return q},
dA1(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oH(d,"https://www.instagram.com/reel/"+w+u,D.Gd,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oH(d,"https://www.instagram.com/p/"+w+u,D.Gd,t,null)}return null},
dA0(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oH(d,"https://www.facebook.com/plugins/video.php?href="+A.ey(2,d,B.aK,!1)+"&show_text=false&width=734",D.ZN,"Facebook",null)},
dA3(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dA2(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
GM:function GM(d,e){this.a=d
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
aBO:function aBO(d,e){var _=this
_.d=$
_.cV$=d
_.aU$=e
_.c=_.a=null},
aD2:function aD2(d,e){this.c=d
this.a=e},
cvO:function cvO(d){this.a=d},
cvP:function cvP(d){this.a=d},
Co:function Co(d,e){this.c=d
this.a=e},
aeH:function aeH(){},
ddN(d,e,f,g,h,i){return new C.a19(i,f,h,e,g,d)},
dQN(d){var w=window
w.toString
A.h3(w,"message",new C.cWq(d),!1,x._)},
a19:function a19(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aa9:function aa9(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
ctm:function ctm(d){this.a=d},
ctu:function ctu(d){this.a=d},
cts:function cts(d){this.a=d},
ctq:function ctq(d){this.a=d},
ctr:function ctr(d){this.a=d},
cto:function cto(d){this.a=d},
ctt:function ctt(d){this.a=d},
ctp:function ctp(d){this.a=d},
ctn:function ctn(d){this.a=d},
cWq:function cWq(d){this.a=d},
ddH(){var w,v,u
try{v=A.xY()
w=v.gpT(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d2Z(d,e){var w=C.ddH(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.ey(2,w,B.aK,!1))
v.push("widget_referrer="+A.ey(2,w,B.aK,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d2Y(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
ddI(d){var w=A.bl(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bl(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dzY(d,e,f){var w,v,u=C.d2Y(d)
if(u!=null){if(f){w=C.ddH()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.ddI(C.d2Z(u,e))}return C.ddI(d)},
dzZ(d){if(d<=4)return 0
return B.n.aX(d-1,4)*4},
dA_(d){var w
if($.Lj().a==null)return!1
w=$.Dz().a
return d>=w&&d<w+4},
ddL(){var w=$.apc
if(w!=null)w.a8(0)
$.apc=null
$.Dz().sv(0,0)},
ddK(){var w,v,u,t=$.Lj()
if(t.a==null)return
w=$.apc
if(w!=null)w.a8(0)
v=$.ddJ
if(v<=4){t=t.a
t.toString
C.d3_(t)
return}w=$.Dz()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d3_(t)},
d3_(d){var w=$.apc
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
default:w=null}$.apc=A.dq(A.d4(0,0,0,0,0,w),C.dQY())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.JK.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.o,1),r=A.a1(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eR,A.j(this.c,w,w,w,w,w,A.l(w,w,v?B.W:B.df,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.et,w,w,w)}}
C.mI.prototype={
ac(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GJ.prototype={
T(){return new C.aa8(A.a([],x.e))},
geO(){return this.c}}
C.aa8.prototype={
Z(){var w=this
w.a3()
$.Dz().ai(0,w.garm())
C.dQN(w.gbcT())
w.V0()},
bcl(){if(this.c!=null)this.p(new C.cte())},
bcU(){C.ddK()},
n(){$.Dz().V(0,this.garm())
C.ddL()
$.Lj().sv(0,null)
this.a2()},
V0(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V0=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GL(t.a.c),$async$V0)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ctd(t,s))
$.bbs=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$V0,v)},
Ri(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Ri=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.ctb(t))
w=3
return A.b(C.apd(t.a.c),$async$Ri)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ctc(t,s))
$.bbs=J.a2(t.d)
t.c.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Ri,v)},
beL(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.e5(new C.ctf(d),!1,null,x.H))},
bfk(){var w=this.c
w.toString
return C.UB(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dL:B.d6,s=A.aM(v,v,v,v,B.Eo,v,v,v,new C.ctj(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AS(A.F(A.a([A.H(new A.K(B.hR,A.j(r,v,1,B.af,v,v,A.l(v,v,u?B.c:B.X,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.aZ(!1,v,!0,new A.K(B.aC,A.a1(B.f5,B.O,v,v,28),v),B.bT,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfj(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cy(!0,A.A(A.a([new A.K(D.NL,r,v),A.H(w.e?B.kR:new A.ih($.Lj(),new C.ctk(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.ak2(B.O,B.Aa,B.mG,D.bN0,w.e?v:new C.ctl(w)),v)}}
C.S0.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cr,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a18(n,!0,!C.dA_(w),"Fold "+(B.n.aX(w,4)+1)+"/"+B.n.aX(v.e+4-1,4),u)
n=w}else n=A.u(u,A.A(A.a([A.a1(B.hY,B.kY,u,u,22),B.al,A.j("YouTube",u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.uZ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.aZ(!1,t,!0,A.A(A.a([A.H(A.u(u,A.cN(p,A.hN(A.A(A.a([new C.aAP(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a1(B.rz,B.O.l(0.85),u,u,9),D.buA,A.j("Tap",u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.alE,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.RO,B.k),u,u,u,B.eu,u,u,u),1),B.al,A.j(o.b,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a1)}}
C.aAP.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.oL,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.NA,w,w,w)}}
C.GI.prototype={
T(){return new C.aBN()}}
C.aBN.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dL:B.d6,t=A.aM(w,w,w,w,B.Eo,w,w,w,new C.ct8(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cy(!0,A.A(A.a([new A.K(D.NL,A.F(A.a([t,A.H(new A.AS(A.F(A.a([A.H(new A.K(B.hR,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,A.l(w,w,v?B.c:B.X,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.aZ(!1,w,!0,new A.K(B.aC,A.a1(B.f5,B.O,w,w,28),w),B.bT,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ct9(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ih($.Lj(),new C.cta(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0),w,!1,!1,w,w)}}
C.aIh.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.ex,28),new A.ag(0,B.w,B.q.l(0.45),B.cA,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.ddN(new A.cR(v+"_full_"+u,x.W),!1,u,!1,w.gaFW(),v+"_full")
w=v}else w=new C.aBT(t.r,s)}else w=new C.axf(m,s)
else w=D.c_u
return A.u(s,A.cN(n,A.hN(A.A(A.a([new C.aIi(m,l,s),A.H(w,1),new C.aIg(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.RO,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aIi.prototype={
C(d){var w,v,u,t,s=null,r=new A.I(Date.now(),0,!1),q=A.dH(r)
r=A.hl(r)
w=new A.dd(q,r)
v=w.gGo()===0?12:w.gGo()
r=B.a.bl(B.n.q(r),2,"0")
q=(q<12?B.eH:B.hh)===B.eH?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,B.lA,s,s,s),B.b5,A.j(u.b,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b8,D.awa,B.dR,D.avp,B.dR,D.awe],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.F(A.a([A.a1(B.Eg,B.O.l(0.9),s,s,12),B.dR,A.H(A.j(u.c,s,s,B.af,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.A(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.amm,s,s,s)}}
C.aBT.prototype={
C(d){var w=null
return A.u(w,A.aV(A.A(A.a([A.a1(B.wC,B.c.l(0.35),w,w,40),B.E,A.j("No video yet",w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.eu(D.azw,D.bKQ,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aJ(B.O.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uZ,w,w,w,w,w,w,w,w,1/0)}}
C.aIg.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arf(B.Qh,"YouTube",s===0,r,new C.cFZ(u))
s=u.arf(B.kf,"Device",s===1,r,new C.cG_(u))
w=r?"Power off":"Power on"
v=r?D.Qi:D.atl
return A.u(t,A.F(A.a([q,B.Z,s,B.b5,A.aM(t,t,t,t,A.a1(v,r?B.aY:B.dH,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cO)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.am8,t,t,t)},
arf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b1
else w=f?B.O:B.a9
v=f&&g?B.O.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.aZ(!1,A.n(10),!0,new A.K(B.l9,A.A(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aCZ.prototype={
C(d){return D.acR}}
C.axf.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,B.iZ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qx("Serial",u.c),q=w.qx("Model",u.d),p=w.qx("Device ID",u.e),o=w.qx("IMEI",u.r),n=w.qx("MAC",u.f),m=w.qx("OS",u.w+" "+u.x),l=w.qx("Location",u.y+", "+u.z),k=w.qx("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qx("Timezone",u.at)
u=u.ax
return A.e4(A.a([t,B.al,s,B.R,r,q,p,o,n,m,l,k,j,w.qx("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aC,v,v,B.Y,!1)},
qx(d,e){var w=null
return new A.K(B.c5,A.A(A.a([A.j(d.toUpperCase(),w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cb,A.j(e,w,w,w,w,w,D.bBz,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GM.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oH.prototype={
gaFW(){var w=this.c
return w===D.ZL||w===D.ZM||w===D.Gd||w===D.ZN}}
C.a18.prototype={
T(){return new C.aBO(null,null)}}
C.aBO.prototype={
Z(){this.a3()
var w=A.bE(null,B.qV,null,1,null,this)
w.mn(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPm()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dU(t,new A.t(t,t,t,t,t,new A.aq(B.db,B.c8,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bz),q=x.Y,p=u.d
p===$&&A.c()
p=A.c9(B.hN,p,t)
w=B.c.l(0.92)
q=A.aV(new A.dj(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bg.T>")),!1,A.a1(B.hY,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kY
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aD2(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a6,t,B.b6,B.m,s,t)}}
C.aD2.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kw(u,new C.cvO(this),B.bu,!0,w,w,new C.cvP(this),w)
return new C.Co(v,w)}}
C.Co.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qC,B.Ko],x.O),B.hY)
break
case 1:w=new A.aI(A.a([B.uZ,D.agu],x.O),B.jm)
break
case 2:w=new A.aI(A.a([D.ahZ,D.ag1],x.O),B.wK)
break
case 3:w=new A.aI(A.a([B.X,B.dg],x.O),B.wO)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.mC)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a1(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.am,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.aeH.prototype={
n(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdH())
w.aU$=null
w.a2()},
br(){this.bK()
this.bF()
this.dI()}}
C.a19.prototype={
T(){return new C.aa9()}}
C.aa9.prototype={
bv_(d,e){var w=C.d2Y(d)
if(w!=null)return C.d2Z(w,e)
return d},
a3b(d,e){var w,v=this,u=C.d2Y(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bv_(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dzY(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsU(){var w,v=this
if(v.w)return
v.p(new C.ctm(v))
w=v.e
if(w!=null)v.a3b(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DA()
$.o9().rK(w,new C.ctu(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.ctn(v))
w=v.e
w.toString
v.a3b(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.Qu,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hN(A.aV(new A.K(new A.V(12,12,12,12),A.A(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.XR(n,B.pn,w)],v)
if(o.f)w.push(A.hN(A.aV(new A.an(28,28,D.adn,n),n,n,n),B.c9,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b1,B.o,1)
q=A.a1(B.Qx,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fc(0,A.aT(!1,B.M,!0,n,A.aZ(!1,n,!0,A.aV(A.u(n,A.F(A.a([q,B.Z,A.j("Tap for sound",n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Na,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsT(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aQ(B.a6,n,B.b6,B.m,w,n)}}
var z=a.updateTypes(["m(mI)","~()","GJ(R)","mI(W<@,@>)","a0(mI)","W<m,@>(mI)","ax<~>()","GI(R)","ih<Q>(R,oH?,p?)","S0(R,Q)","u2(R,oH?,p?)","Co(R,ak,dr?)"])
C.d_f.prototype={
$1(d){return new C.GJ(this.a,null)},
$S:z+2}
C.d_e.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cw,B.X],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.ex,32)],x.V),g=A.U(m?B.bo:B.O.l(0.18),B.o,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.V.l(m?0.18:0.08)],j)
e=A.u(n,D.av3,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,A.l(n,n,m?B.c:B.X,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.A(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,A.l(n,n,m?B.W:B.aE,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.f7,w,A.aM(n,n,n,n,A.a1(B.cI,m?B.a9:B.c9,n,n,n),n,n,n,new C.d_a(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a4,B.y,j,n,n),B.k),n,n,n,B.Nk,n,n,n)
e=A.eq(B.bW,A.a([new C.JK("YouTube",B.Ef,m,n),new C.JK("TikTok",B.jm,m,n),new C.JK("Instagram",B.wK,m,n),new C.JK("Facebook",B.wO,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bC:B.fA,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d6
r=A.a1(B.jl,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.b3
u=A.A(A.a([e,B.ar,A.au(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bk(n,new A.b5(4,q,B.L),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aJ(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Jc),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.K,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.it(D.av7,D.bQT,new C.d_b(d),A.jA(n,n,n,n,n,n,n,n,n,n,n,m?B.aG:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.K(new A.V(12,0,12,12+l.f.d),A.dU(A.cN(f,A.A(A.a([j,new A.K(D.anp,u,n),new A.K(D.anz,A.F(A.a([e,B.b5,A.bP(!1,A.j("Cancel",n,n,n,n,n,A.l(n,n,m?B.W:B.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d_c(d),n,n),B.Z,A.dL(D.azf,D.bRd,new C.d_d(d,w),A.bw(B.O,n,n,n,B.c,n,D.Na,n,new A.bD(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.am,B.av,B.y,i,n,n),B.k),B.bz),n)},
$S:65}
C.d_a.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d_b.prototype={
$0(){C.ddL()
$.Lj().sv(0,null)
A.a7(this.a,!1).P(null)},
$S:0}
C.d_c.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d_d.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a7(this.a,!1).P(w)
return null},
$S:0}
C.bbD.prototype={
$1(d){return C.ddM(A.P(d,x.N,x.z))},
$S:z+3}
C.bbE.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bbv.prototype={
$1(d){return d.c},
$S:z+0}
C.bbw.prototype={
$1(d){return d.r},
$S:z+0}
C.bbx.prototype={
$1(d){return d.f},
$S:z+0}
C.bby.prototype={
$1(d){return d.at},
$S:z+0}
C.bbz.prototype={
$1(d){return d.c},
$S:z+0}
C.bbA.prototype={
$1(d){return d.r},
$S:z+0}
C.bbB.prototype={
$1(d){return d.f},
$S:z+0}
C.bbC.prototype={
$1(d){return d.at},
$S:z+0}
C.bbu.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bbt.prototype={
$1(d){return B.a.bl(B.n.je(d,16),2,"0").toUpperCase()},
$S:74}
C.cte.prototype={
$0(){},
$S:0}
C.ctd.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ctb.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ctc.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.ctf.prototype={
$1(d){return new C.GI(this.a,null)},
$S:z+7}
C.ctj.prototype={
$0(){return A.a7(this.a,!1).ep()},
$S:0}
C.ctk.prototype={
$3(d,e,f){return new A.ih($.Dz(),new C.cti(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cti.prototype={
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
o=J.a2(l.a.d)
n=$.Dz().a
m=B.j.au(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.Z,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,A.l(k,k,l.c?B.c:B.X,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.f1,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cN(s,new A.iD(1.7777777777777777,C.ddN(new A.cR("fleet_master_"+r,x.W),!0,r,!0,j.gaFW(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zt(0,B.m,k,B.r,k,k,k,k,!1,k,B.Y,!1,A.a([new A.k9(new A.K(B.Cd,A.A(u,B.t,B.e,B.f,0,B.l),k),k),new A.oS(D.alO,A.asH(new A.nO(new C.cth(i,j),J.a2(i.d),!1,!0,!0,A.vE(),k),D.bvf),k)],w))},
$S:1567}
C.cth.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.S0(v,e,J.a2(w.d),new C.ctg(w,v),this.b,null)},
$S:z+9}
C.ctg.prototype={
$0(){return this.a.beL(this.b)},
$S:0}
C.ctl.prototype={
$0(){this.a.Ri()
return null},
$S:0}
C.ct8.prototype={
$0(){return A.a7(this.a,!1).ep()},
$S:0}
C.ct9.prototype={
$0(){C.UB(this.a,$.bbs)
return null},
$S:0}
C.cta.prototype={
$3(d,e,f){return A.fM(new C.ct7(this.a,e))},
$S:z+10}
C.ct7.prototype={
$2(d,e){var w,v=null,u=B.j.au(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.ct(A.A(A.a([A.j(r,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.ar,new C.aIh(u,s.a.c,s.e,s.d,new C.ct4(s),new C.ct5(s),new C.ct6(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vY,v,v,B.Y),v,v,v)},
$S:1568}
C.ct4.prototype={
$0(){var w=this.a.c
w.toString
C.UB(w,$.bbs)
return null},
$S:0}
C.ct5.prototype={
$1(d){var w=this.a
return w.p(new C.ct3(w,d))},
$S:36}
C.ct3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ct6.prototype={
$0(){var w=this.a
return w.p(new C.ct2(w))},
$S:0}
C.ct2.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cFZ.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cG_.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cvO.prototype={
$3(d,e,f){return new C.Co(this.a.c,null)},
$S:z+11}
C.cvP.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.b6,B.m,A.a([new C.Co(this.a.c,null),D.acJ],x.p),null)},
$C:"$3",
$R:3,
$S:490}
C.ctm.prototype={
$0(){return this.a.w=!0},
$S:0}
C.ctu.prototype={
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
w.a3b(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h3(v,"load",new C.cts(w),!1,u)
v=w.e
v.toString
A.h3(v,"error",new C.ctt(w),!1,u)
w=w.e
w.toString
return w},
$S:575}
C.cts.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.ctq(w))
A.bM(B.A,new C.ctr(w),x.H)}},
$S:41}
C.ctq.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctr.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cto(w))},
$S:12}
C.cto.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctt.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.ctp(w))},
$S:41}
C.ctp.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.ctn.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cWq.prototype={
$1(d){var w,v,u,t,s=new A.BY([],[]).FG(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1569};(function aliases(){var w=C.aeH.prototype
w.aPm=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aa8.prototype,"garm","bcl",1)
w(u,"gbcT","bcU",1)
w(u,"gbfj","bfk",6)
w(C.aa9.prototype,"gbsT","bsU",1)
v(C,"dQY","ddK",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.w_,[C.d_f,C.d_e,C.bbD,C.bbE,C.bbv,C.bbw,C.bbx,C.bby,C.bbz,C.bbA,C.bbB,C.bbC,C.bbu,C.bbt,C.ctf,C.ctk,C.cti,C.cta,C.ct5,C.cvO,C.cvP,C.ctu,C.cts,C.ctt,C.cWq])
v(A.W8,[C.d_a,C.d_b,C.d_c,C.d_d,C.cte,C.ctd,C.ctb,C.ctc,C.ctj,C.ctg,C.ctl,C.ct8,C.ct9,C.ct4,C.ct3,C.ct6,C.ct2,C.cFZ,C.cG_,C.ctm,C.ctq,C.ctr,C.cto,C.ctp,C.ctn])
v(A.aB,[C.JK,C.S0,C.aAP,C.aIh,C.aIi,C.aBT,C.aIg,C.aCZ,C.axf,C.aD2,C.Co])
v(A.ak,[C.mI,C.oH])
v(A.ad,[C.GJ,C.GI,C.a18,C.a19])
v(A.af,[C.aa8,C.aBN,C.aeH,C.aa9])
v(A.W9,[C.cth,C.ct7])
u(C.GM,A.ay6)
u(C.aBO,C.aeH)
w(C.aeH,A.e6)})()
A.dh1(b.typeUniverse,JSON.parse('{"GJ":{"ad":[],"p":[]},"S0":{"aB":[],"p":[]},"GI":{"ad":[],"p":[]},"JK":{"aB":[],"p":[]},"aa8":{"af":["GJ"]},"aAP":{"aB":[],"p":[]},"aBN":{"af":["GI"]},"aIh":{"aB":[],"p":[]},"aIi":{"aB":[],"p":[]},"aBT":{"aB":[],"p":[]},"aIg":{"aB":[],"p":[]},"aCZ":{"aB":[],"p":[]},"axf":{"aB":[],"p":[]},"a18":{"ad":[],"p":[]},"Co":{"aB":[],"p":[]},"aBO":{"af":["a18"]},"aD2":{"aB":[],"p":[]},"a19":{"ad":[],"p":[]},"aa9":{"af":["a19"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bn
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mI>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<Q>"),X:w("ac<mI>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mE"),_:w("Af"),k:w("mI"),N:w("m"),Y:w("bi<a8>"),W:w("cR<m>"),J:w("ih<Q>"),j:w("ih<oH?>"),E:w("y5<cA>"),q:w("SG"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.buZ=new A.an(18,18,B.K6,null)
D.acJ=new A.df(B.J,null,null,D.buZ,null)
D.Qi=new A.L(983224,"MaterialIcons",!1)
D.axL=new A.a5(D.Qi,48,B.b1,null,null,null)
D.bBe=new A.M(!0,B.bC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLx=new A.x("Powered off",null,D.bBe,null,null,null,null,null,null,null,null)
D.aKD=w([D.axL,B.z,D.bLx],x.p)
D.ajc=new A.er(B.Y,B.e,B.P,B.i,null,B.l,null,0,D.aKD,null)
D.acR=new A.df(B.J,null,null,D.ajc,null)
D.adn=new A.fW(2,null,null,null,null,B.W,null,null,null,null)
D.ag1=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.agu=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ahZ=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.alE=new A.V(0,3,0,3)
D.alO=new A.V(10,0,10,88)
D.am8=new A.V(12,6,12,10)
D.amm=new A.V(14,8,14,6)
D.Na=new A.V(18,12,18,12)
D.anp=new A.V(20,18,20,8)
D.anz=new A.V(20,8,20,20)
D.NL=new A.V(8,6,15,8)
D.atl=new A.L(983222,"MaterialIcons",!1)
D.av3=new A.a5(B.hY,26,B.O,null,null,null)
D.av7=new A.a5(B.Pp,18,null,null,null,null)
D.avp=new A.a5(B.oL,14,B.W,null,null,null)
D.atE=new A.L(983420,"MaterialIcons",!1)
D.awa=new A.a5(D.atE,14,B.W,null,null,null)
D.arQ=new A.L(62895,"MaterialIcons",!1)
D.awe=new A.a5(D.arQ,14,B.W,null,null,null)
D.azf=new A.a5(B.iF,20,null,null,null,null)
D.azw=new A.a5(B.f5,16,null,null,null,null)
D.aMP=w([B.aj,B.X],x.O)
D.RO=new A.aq(B.am,B.av,B.y,D.aMP,null,null)
D.boU=new A.aI("NGMY OS","14.2.1")
D.bnL=new A.aI("VirtualDroid","13.8.4")
D.bnK=new A.aI("NGMY OS","15.0.0")
D.bot=new A.aI("VirtualDroid","14.1.2")
D.bnI=new A.aI("NGMY Tab OS","12.9.7")
D.bnG=new A.aI("NGMY OS","13.5.3")
D.bnv=new A.aI("VirtualDroid","15.2.0")
D.bo6=new A.aI("NGMY OS","14.8.1")
D.boz=new A.aI("NGMY Tab OS","13.2.4")
D.bp3=new A.aI("VirtualDroid","12.6.9")
D.bnr=new A.aI("NGMY OS","16.0.1")
D.bni=new A.aI("VirtualDroid","14.9.0")
D.boM=new A.aI("NGMY Tab OS","14.0.3")
D.bnU=new A.aI("NGMY OS","13.1.8")
D.bnq=new A.aI("VirtualDroid","13.4.5")
D.bnF=new A.aI("NGMY OS","15.3.2")
D.boA=new A.aI("NGMY Tab OS","12.4.1")
D.boO=new A.aI("VirtualDroid","16.1.0")
D.bo5=new A.aI("NGMY OS","14.4.6")
D.boV=new A.aI("VirtualDroid","15.0.8")
D.aMo=w([D.boU,D.bnL,D.bnK,D.bot,D.bnI,D.bnG,D.bnv,D.bo6,D.boz,D.bp3,D.bnr,D.bni,D.boM,D.bnU,D.bnq,D.bnF,D.boA,D.boO,D.bo5,D.boV],A.bn("ab<+(m,m)>"))
D.br5=new A.ec(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bqE=new A.ec(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bqz=new A.ec(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bqI=new A.ec(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bqv=new A.ec(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bqK=new A.ec(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.br7=new A.ec(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bqw=new A.ec(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bqD=new A.ec(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bqM=new A.ec(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bqu=new A.ec(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.br_=new A.ec(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bqX=new A.ec(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bqC=new A.ec(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bqU=new A.ec(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bqT=new A.ec(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bqt=new A.ec(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bqH=new A.ec(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bqR=new A.ec(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bqW=new A.ec(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.SU=w([D.br5,D.bqE,D.bqz,D.bqI,D.bqv,D.bqK,D.br7,D.bqw,D.bqD,D.bqM,D.bqu,D.br_,D.bqX,D.bqC,D.bqU,D.bqT,D.bqt,D.bqH,D.bqR,D.bqW],A.bn("ab<+(m,m,a8,a8,m)>"))
D.aRD=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ZL=new C.GM(0,"youtube")
D.ZM=new C.GM(1,"tiktok")
D.Gd=new C.GM(2,"instagram")
D.ZN=new C.GM(3,"facebook")
D.bjg=new C.GM(4,"other")
D.buA=new A.an(3,null,null,null)
D.bvf=new A.jb(4,10,8,0.52,null)
D.bMx=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.byo=new A.aS(D.bMx,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bBz=new A.M(!0,B.c,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKQ=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bN0=new A.x("Add device",null,null,null,null,null,null,null,null,null,null)
D.bQT=new A.x("Stop",null,null,null,null,null,null,null,null,null,null)
D.bRd=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.c_u=new C.aCZ(null)})();(function staticFields(){$.ddJ=20
$.apc=null
$.bbs=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dVd","Dz",()=>A.QJ(0))
w($,"dVe","Lj",()=>A.QJ(null))})()};
(a=>{a["jugLEkY2NZLnRrecR6BQvbDEvJk="]=a.current})($__dart_deferred_initializers__);