((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dQy(d,e){A.a8(d,!1).cO(A.eq(new C.cYR(e),!0,null,x.H))},
Uq(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Uq=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Lc()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a_,B.T),t)
w=3
return A.b(A.dg(B.D,new C.cYQ(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Uq)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dyA(r)
if(q==null){d.F(x.q).f.O(D.bwI)
w=1
break}w=4
return A.b(A.bN(B.fA,null,x.H),$async$Uq)
case 4:if(d.e==null){w=1
break}n=B.p.au(e,1,999)
$.dcg=n
p=C.dyu(n)
n=$.Dt()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d1A(q)
d.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Uq,v)},
dcj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mG(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
GF(d){return C.dyD(d)},
dyD(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GF=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GF)
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
case 10:k=J.fr(r,x.f)
k=A.ds(k,new C.bbe(),k.$ti.j("I.E"),x.k)
j=A.S(k).j("aa<I.E>")
i=A.D(new A.aa(k,new C.bbf(),j),j.j("I.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.dcl(q)
w=12
return A.b(C.GE(a3,p),$async$GF)
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
case 19:m=C.dcj(A.O(n,x.N,x.z))
l=C.dcl(A.a([m],x.e))
w=21
return A.b(C.GE(a3,l),$async$GF)
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
case 18:case 14:q=C.dyB()
w=22
return A.b(C.GE(a3,q),$async$GF)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GF,v)},
dcl(d){var w=A.T(d).j("A<1,m>"),v=new A.A(d,new C.bb6(),w).eA(0),u=new A.A(d,new C.bb7(),w).eA(0),t=new A.A(d,new C.bb8(),w).eA(0),s=new A.A(d,new C.bb9(),w).eA(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d1B(null,q,u,t,v,s));++q}return r},
aoZ(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aoZ=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GF(d),$async$aoZ)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d8(t,new C.bba(),s).eA(0)
p=r.d8(t,new C.bbb(),s).eA(0)
o=r.d8(t,new C.bbc(),s).eA(0)
n=r.d8(t,new C.bbd(),s).eA(0)
m=C.d1B(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GE(d,t),$async$aoZ)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aoZ,v)},
GE(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GE=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GE)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.bb5(),x.P)
s=A.D(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GE)
case 3:return A.f(null,v)}})
return A.h($async$GE,v)},
dyB(){var w,v=x.N,u=A.b5(v),t=A.b5(v),s=A.b5(v),r=A.b5(v),q=J.e0(20,x.k)
for(w=0;w<20;++w)q[w]=C.d1B(w,w,t,s,u,r)
return q},
d1B(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jI(),h=d==null,g=D.Sr[B.p.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Sr[B.p.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.A(p,new C.bb4(),A.T(p).j("A<1,m>")).fj(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.fj(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bn(B.p.jd(i.by(256),16),2,"0")
s=B.d.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.an(e,20)
k=D.aR3[w]
j=D.aLR[w]
return new C.mG("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bn(B.p.q(e+1),2,"0"),u,k,C.dyC(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.J(Date.now(),0,!1).a0().W())},
dyC(d,e){var w,v=J.e0(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bn(B.p.jd(d.by(256),16),2,"0")
return B.d.fj(v)},
cYR:function cYR(d){this.a=d},
cYQ:function cYQ(d,e){this.a=d
this.b=e},
cYM:function cYM(d){this.a=d},
cYN:function cYN(d){this.a=d},
cYO:function cYO(d){this.a=d},
cYP:function cYP(d,e){this.a=d
this.b=e},
JE:function JE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mG:function mG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bbe:function bbe(){},
bbf:function bbf(){},
bb6:function bb6(){},
bb7:function bb7(){},
bb8:function bb8(){},
bb9:function bb9(){},
bba:function bba(){},
bbb:function bbb(){},
bbc:function bbc(){},
bbd:function bbd(){},
bb5:function bb5(){},
bb4:function bb4(){},
GD:function GD(d,e){this.c=d
this.a=e},
a9Z:function a9Z(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cs8:function cs8(){},
cs7:function cs7(d,e){this.a=d
this.b=e},
cs5:function cs5(d){this.a=d},
cs6:function cs6(d,e){this.a=d
this.b=e},
cs9:function cs9(d){this.a=d},
csd:function csd(d){this.a=d},
cse:function cse(d,e){this.a=d
this.b=e},
csc:function csc(d,e,f){this.a=d
this.b=e
this.c=f},
csb:function csb(d,e){this.a=d
this.b=e},
csa:function csa(d,e){this.a=d
this.b=e},
csf:function csf(d){this.a=d},
RR:function RR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAy:function aAy(d,e){this.c=d
this.a=e},
GC:function GC(d,e){this.c=d
this.a=e},
aBv:function aBv(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cs2:function cs2(d){this.a=d},
cs3:function cs3(d){this.a=d},
cs4:function cs4(d){this.a=d},
cs1:function cs1(d,e){this.a=d
this.b=e},
crZ:function crZ(d){this.a=d},
cs_:function cs_(d){this.a=d},
crY:function crY(d,e){this.a=d
this.b=e},
cs0:function cs0(d){this.a=d},
crX:function crX(d){this.a=d},
aI0:function aI0(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aI1:function aI1(d,e,f){this.c=d
this.d=e
this.a=f},
aBB:function aBB(d,e){this.c=d
this.a=e},
aI_:function aI_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cER:function cER(d){this.a=d},
cES:function cES(d){this.a=d},
aCH:function aCH(d){this.a=d},
ax_:function ax_(d,e){this.c=d
this.a=e},
dyA(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dyz(v)
if(u!=null)return new C.oE(w,C.d1z(u,!1),D.Zp,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dyy(v)
if(t!=null)return new C.oE(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Zq,"TikTok",q)
s=C.dyx(w,v)
if(s!=null)return s
r=C.dyw(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oE(w,w,D.bhD,"Video",q)
return q},
dyx(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oE(d,"https://www.instagram.com/reel/"+w+u,D.FA,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oE(d,"https://www.instagram.com/p/"+w+u,D.FA,t,null)}return null},
dyw(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oE(d,"https://www.facebook.com/plugins/video.php?href="+A.ev(2,d,B.aJ,!1)+"&show_text=false&width=734",D.Zr,"Facebook",null)},
dyz(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cW(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dyy(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cW(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
GG:function GG(d,e){this.a=d
this.b=e},
oE:function oE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0Z:function a0Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBw:function aBw(d,e){var _=this
_.d=$
_.cV$=d
_.aX$=e
_.c=_.a=null},
aCL:function aCL(d,e){this.c=d
this.a=e},
cuI:function cuI(d){this.a=d},
cuJ:function cuJ(d){this.a=d},
Ci:function Ci(d,e){this.c=d
this.a=e},
aew:function aew(){},
dck(d,e,f,g,h,i){return new C.a1_(i,f,h,e,g,d)},
dPg(d){var w=window
w.toString
A.h_(w,"message",new C.cV6(d),!1,x._)},
a1_:function a1_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aa_:function aa_(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
csg:function csg(d){this.a=d},
cso:function cso(d){this.a=d},
csm:function csm(d){this.a=d},
csk:function csk(d){this.a=d},
csl:function csl(d){this.a=d},
csi:function csi(d){this.a=d},
csn:function csn(d){this.a=d},
csj:function csj(d){this.a=d},
csh:function csh(d){this.a=d},
cV6:function cV6(d){this.a=d},
dce(){var w,v,u
try{v=A.xR()
w=v.gpN(v)
if(J.a1(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d1z(d,e){var w=C.dce(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.ev(2,w,B.aJ,!1))
v.push("widget_referrer="+A.ev(2,w,B.aJ,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
d1y(d){var w=A.ap(y.c,!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
dcf(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dyt(d,e,f){var w,v,u=C.d1y(d)
if(u!=null){if(f){w=C.dce()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dcf(C.d1z(u,e))}return C.dcf(d)},
dyu(d){if(d<=4)return 0
return B.p.aZ(d-1,4)*4},
dyv(d){var w
if($.Lc().a==null)return!1
w=$.Dt().a
return d>=w&&d<w+4},
dci(){var w=$.aoY
if(w!=null)w.a9(0)
$.aoY=null
$.Dt().sv(0,0)},
dch(){var w,v,u,t=$.Lc()
if(t.a==null)return
w=$.aoY
if(w!=null)w.a9(0)
v=$.dcg
if(v<=4){t=t.a
t.toString
C.d1A(t)
return}w=$.Dt()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d1A(t)},
d1A(d){var w=$.aoY
if(w!=null)w.a9(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aoY=A.dp(A.d4(0,0,0,0,0,w),C.dPr())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.JE.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.n,1),r=A.a3(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eN,A.j(this.c,w,w,w,w,w,A.l(w,w,v?B.V:B.dc,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.eq,w,w,w)}}
C.mG.prototype={
ac(){var w=this
return A.r(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GD.prototype={
U(){return new C.a9Z(A.a([],x.e))},
geM(){return this.c}}
C.a9Z.prototype={
Y(){var w=this
w.a3()
$.Dt().ai(0,w.gar8())
C.dPg(w.gbcy())
w.US()},
bc0(){if(this.c!=null)this.n(new C.cs8())},
bcz(){C.dch()},
p(){$.Dt().V(0,this.gar8())
C.dci()
$.Lc().sv(0,null)
this.a2()},
US(){var w=0,v=A.i(x.H),u,t=this,s
var $async$US=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GF(t.a.c),$async$US)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cs7(t,s))
$.bb3=J.a1(s)
case 1:return A.f(u,v)}})
return A.h($async$US,v)},
R6(){var w=0,v=A.i(x.H),u,t=this,s
var $async$R6=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cs5(t))
w=3
return A.b(C.aoZ(t.a.c),$async$R6)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cs6(t,s))
$.bb3=J.a1(t.d)
t.c.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$R6,v)},
beq(d){var w=this.c
w.toString
A.a8(w,!1).cO(A.eq(new C.cs9(d),!1,null,x.H))},
beZ(){var w=this.c
w.toString
return C.Uq(w,J.a1(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dJ:B.d4,s=A.aN(v,v,v,v,B.DV,v,v,v,new C.csd(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a1(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AO(A.F(A.a([A.H(new A.L(B.hL,A.j(r,v,1,B.af,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aU(!1,B.L,!0,v,A.b_(!1,v,!0,new A.L(B.aE,A.a3(B.f1,B.O,v,v,28),v),B.bS,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbeY(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a2)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cA(!0,A.B(A.a([new A.L(D.Ng,r,v),A.H(w.e?B.kN:new A.ig($.Lc(),new C.cse(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a1,!0,!0)
return A.co(v,t,s,v,!1,!1,A.ajQ(B.O,B.zR,B.mC,D.bLa,w.e?v:new C.csf(w)),v)}}
C.RR.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.n,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cm,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a0Z(n,!0,!C.dyv(w),"Fold "+(B.p.aZ(w,4)+1)+"/"+B.p.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.B(A.a([A.a3(B.hR,B.kU,u,u,22),B.ao,A.j("YouTube",u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.uQ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aU(!1,B.L,!0,u,A.b_(!1,t,!0,A.B(A.a([A.H(A.u(u,A.cL(p,A.hK(A.B(A.a([new C.aAy(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a3(B.rs,B.O.l(0.85),u,u,9),D.bsZ,A.j("Tap",u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.alf,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.Rl,B.k),u,u,u,B.er,u,u,u),1),B.ao,A.j(o.b,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a2)}}
C.aAy.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a3(B.oE,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.N6,w,w,w)}}
C.GC.prototype={
U(){return new C.aBv()}}
C.aBv.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dJ:B.d4,t=A.aN(w,w,w,w,B.DV,w,w,w,new C.cs2(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.co(w,u,A.cA(!0,A.B(A.a([new A.L(D.Ng,A.F(A.a([t,A.H(new A.AO(A.F(A.a([A.H(new A.L(B.hL,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.L,!0,w,A.b_(!1,w,!0,new A.L(B.aE,A.a3(B.f1,B.O,w,w,28),w),B.bS,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cs3(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a2)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ig($.Lc(),new C.cs4(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a1,!0,!0),w,!1,!1,w,w)}}
C.aI0.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.eu,28),new A.ag(0,B.w,B.q.l(0.45),B.cw,18)],x.V),o=A.U(B.c.l(0.12),B.n,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dck(new A.cO(v+"_full_"+u,x.W),!1,u,!1,w.gaFJ(),v+"_full")
w=v}else w=new C.aBB(t.r,s)}else w=new C.ax_(m,s)
else w=D.bYy
return A.u(s,A.cL(n,A.hK(A.B(A.a([new C.aI1(m,l,s),A.H(w,1),new C.aI_(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.Rl,B.k),s,r*2.05,s,B.b9,s,s,r)}}
C.aI1.prototype={
C(d){var w,v,u,t,s=null,r=new A.J(Date.now(),0,!1),q=A.dG(r)
r=A.hi(r)
w=new A.df(q,r)
v=w.gGk()===0?12:w.gGk()
r=B.a.bn(B.p.q(r),2,"0")
q=(q<12?B.eE:B.he)===B.eE?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,B.lv,s,s,s),B.b7,A.j(u.b,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.avC,B.dR,D.auP,B.dR,D.avG],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ao,A.F(A.a([A.a3(B.DN,B.O.l(0.9),s,s,12),B.dR,A.H(A.j(u.c,s,s,B.af,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.B(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.alY,s,s,s)}}
C.aBB.prototype={
C(d){var w=null
return A.u(w,A.aV(A.B(A.a([A.a3(B.ws,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.j("Tap search above to paste a link",w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.en(D.az_,D.bJ0,this.c,A.es(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aK(B.O.l(0.5),1,B.n,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uQ,w,w,w,w,w,w,w,w,1/0)}}
C.aI_.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ar1(B.PQ,"YouTube",s===0,r,new C.cER(u))
s=u.ar1(B.kb,"Device",s===1,r,new C.cES(u))
w=r?"Power off":"Power on"
v=r?D.PR:D.asO
return A.u(t,A.F(A.a([q,B.Y,s,B.b7,A.aN(t,t,t,t,A.a3(v,r?B.aX:B.dD,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cM)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.alK,t,t,t)},
ar1(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.O:B.a8
v=f&&g?B.O.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aU(!1,B.L,!0,u,A.b_(!1,A.n(10),!0,new A.L(B.l3,A.B(A.a([A.a3(d,w,s,s,18),A.j(e,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a2),1)}}
C.aCH.prototype={
C(d){return D.acu}}
C.ax_.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,B.iV,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qq("Serial",u.c),q=w.qq("Model",u.d),p=w.qq("Device ID",u.e),o=w.qq("IMEI",u.r),n=w.qq("MAC",u.f),m=w.qq("OS",u.w+" "+u.x),l=w.qq("Location",u.y+", "+u.z),k=w.qq("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qq("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.ao,s,B.Q,r,q,p,o,n,m,l,k,j,w.qq("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aE,v,v,B.X,!1)},
qq(d,e){var w=null
return new A.L(B.c7,A.B(A.a([A.j(d.toUpperCase(),w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c9,A.j(e,w,w,w,w,w,D.bzO,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GG.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oE.prototype={
gaFJ(){var w=this.c
return w===D.Zp||w===D.Zq||w===D.FA||w===D.Zr}}
C.a0Z.prototype={
U(){return new C.aBw(null,null)}}
C.aBw.prototype={
Y(){this.a3()
var w=A.bE(null,B.qN,null,1,null,this)
w.mk(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aP8()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dS(t,new A.t(t,t,t,t,t,new A.aq(B.d8,B.c5,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bx),q=x.Y,p=u.d
p===$&&A.c()
p=A.c9(B.hI,p,t)
w=B.c.l(0.92)
q=A.aV(new A.dk(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bh.T>")),!1,A.a3(B.hR,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kU
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aCL(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a5,t,B.b2,B.m,s,t)}}
C.aCL.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ks(u,new C.cuI(this),B.bs,!0,w,w,new C.cuJ(this),w)
return new C.Ci(v,w)}}
C.Ci.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qu,B.JS],x.O),B.hR)
break
case 1:w=new A.aI(A.a([B.uQ,D.ag6],x.O),B.jh)
break
case 2:w=new A.aI(A.a([D.ahA,D.afE],x.O),B.wz)
break
case 3:w=new A.aI(A.a([B.W,B.dd],x.O),B.wD)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.my)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a3(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.aew.prototype={
p(){var w=this,v=w.aX$
if(v!=null)v.V(0,w.gdF())
w.aX$=null
w.a2()},
br(){this.bK()
this.bH()
this.dG()}}
C.a1_.prototype={
U(){return new C.aa_()}}
C.aa_.prototype={
buB(d,e){var w=C.d1y(d)
if(w!=null)return C.d1z(w,e)
return d},
a30(d,e){var w,v=this,u=C.d1y(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.buB(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dyt(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsv(){var w,v=this
if(v.w)return
v.n(new C.csg(v))
w=v.e
if(w!=null)v.a30(w,v.a.d)},
Y(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.Du()
$.o6().rE(w,new C.cso(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.csh(v))
w=v.e
w.toString
v.a30(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a3(B.Q3,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.A,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.M,n,n)],v))
return A.hK(A.aV(new A.L(new A.V(12,12,12,12),A.B(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.XH(n,B.pf,w)],v)
if(o.f)w.push(A.hK(A.aV(new A.ao(28,28,D.ad0,n),n,n,n),B.c6,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b_,B.n,1)
q=A.a3(B.Q5,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f9(0,A.aU(!1,B.L,!0,n,A.b_(!1,n,!0,A.aV(A.u(n,A.F(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.MH,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsu(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a2)))}return new A.aQ(B.a5,n,B.b2,B.m,w,n)}}
var z=a.updateTypes(["m(mG)","~()","GD(R)","mG(W<@,@>)","a0(mG)","W<m,@>(mG)","ax<~>()","GC(R)","ig<Q>(R,oE?,p?)","RR(R,Q)","u_(R,oE?,p?)","Ci(R,ak,dq?)"])
C.cYR.prototype={
$1(d){return new C.GD(this.a,null)},
$S:z+2}
C.cYQ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cs,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.eu,32)],x.V),g=A.U(m?B.bm:B.O.l(0.18),B.n,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.U.l(m?0.18:0.08)],j)
e=A.u(n,D.aut,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.n,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.B(A.a([w,B.ao,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,A.l(n,n,m?B.V:B.aH,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.fo,w,A.aN(n,n,n,n,A.a3(B.cy,m?B.a8:B.c6,n,n,n),n,n,n,new C.cYM(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a0,B.a4,B.y,j,n,n),B.k),n,n,n,B.MR,n,n,n)
e=A.ed(B.bQ,A.a([new C.JE("YouTube",B.DM,m,n),new C.JE("TikTok",B.jh,m,n),new C.JE("Instagram",B.wz,m,n),new C.JE("Facebook",B.wD,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bz:B.fw,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d4
r=A.a3(B.kc,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bm:B.b1
u=A.B(A.a([e,B.aq,A.au(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bj(n,new A.b6(4,q,B.J),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aK(o,1,B.n,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.IE),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.I,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.j9(D.aux,D.bP_,new C.cYN(d),A.k7(n,n,n,n,n,n,n,n,n,n,n,m?B.aD:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.L(new A.V(12,0,12,12+l.f.d),A.dS(A.cL(f,A.B(A.a([j,new A.L(D.an1,u,n),new A.L(D.anb,A.F(A.a([e,B.b7,A.bQ(!1,A.j("Cancel",n,n,n,n,n,A.l(n,n,m?B.V:B.Z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cYO(d),n,n),B.Y,A.dE(D.ayK,D.bPk,new C.cYP(d,w),A.bx(B.O,n,n,n,B.c,n,D.MH,n,new A.bD(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.bx),n)},
$S:64}
C.cYM.prototype={
$0(){A.a8(this.a,!1).R(null)
return null},
$S:0}
C.cYN.prototype={
$0(){C.dci()
$.Lc().sv(0,null)
A.a8(this.a,!1).R(null)},
$S:0}
C.cYO.prototype={
$0(){A.a8(this.a,!1).R(null)
return null},
$S:0}
C.cYP.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a8(this.a,!1).R(w)
return null},
$S:0}
C.bbe.prototype={
$1(d){return C.dcj(A.O(d,x.N,x.z))},
$S:z+3}
C.bbf.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bb6.prototype={
$1(d){return d.c},
$S:z+0}
C.bb7.prototype={
$1(d){return d.r},
$S:z+0}
C.bb8.prototype={
$1(d){return d.f},
$S:z+0}
C.bb9.prototype={
$1(d){return d.at},
$S:z+0}
C.bba.prototype={
$1(d){return d.c},
$S:z+0}
C.bbb.prototype={
$1(d){return d.r},
$S:z+0}
C.bbc.prototype={
$1(d){return d.f},
$S:z+0}
C.bbd.prototype={
$1(d){return d.at},
$S:z+0}
C.bb5.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bb4.prototype={
$1(d){return B.a.bn(B.p.jd(d,16),2,"0").toUpperCase()},
$S:73}
C.cs8.prototype={
$0(){},
$S:0}
C.cs7.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cs5.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cs6.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cs9.prototype={
$1(d){return new C.GC(this.a,null)},
$S:z+7}
C.csd.prototype={
$0(){return A.a8(this.a,!1).ev()},
$S:0}
C.cse.prototype={
$3(d,e,f){return new A.ig($.Dt(),new C.csc(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.csc.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ae(d,k,x.Q)
w=w==null?k:w.gkn()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.n,1)
q=A.a3(B.hR,B.O,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.Dt().a
m=B.j.au(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.co,B.eX,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cL(s,new A.iB(1.7777777777777777,C.dck(new A.cO("fleet_master_"+r,x.W),!0,r,!0,j.gaFJ(),"fleet_master"),k),B.aw),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zn(0,B.m,k,B.r,k,k,k,k,!1,k,B.X,!1,A.a([new A.k4(new A.L(B.BR,A.B(u,B.t,B.e,B.f,0,B.l),k),k),new A.oP(D.alp,A.asr(new A.nL(new C.csb(i,j),J.a1(i.d),!1,!0,!0,A.vB(),k),D.btE),k)],w))},
$S:1561}
C.csb.prototype={
$2(d,e){var w=this.a,v=J.q(w.d,e)
return new C.RR(v,e,J.a1(w.d),new C.csa(w,v),this.b,null)},
$S:z+9}
C.csa.prototype={
$0(){return this.a.beq(this.b)},
$S:0}
C.csf.prototype={
$0(){this.a.R6()
return null},
$S:0}
C.cs2.prototype={
$0(){return A.a8(this.a,!1).ev()},
$S:0}
C.cs3.prototype={
$0(){C.Uq(this.a,$.bb3)
return null},
$S:0}
C.cs4.prototype={
$3(d,e,f){return A.fI(new C.cs1(this.a,e))},
$S:z+10}
C.cs1.prototype={
$2(d,e){var w,v=null,u=B.j.au(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.ct(A.B(A.a([A.j(r,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.M,v,v),B.aq,new C.aI0(u,s.a.c,s.e,s.d,new C.crZ(s),new C.cs_(s),new C.cs0(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vO,v,v,B.X),v,v,v)},
$S:1562}
C.crZ.prototype={
$0(){var w=this.a.c
w.toString
C.Uq(w,$.bb3)
return null},
$S:0}
C.cs_.prototype={
$1(d){var w=this.a
return w.n(new C.crY(w,d))},
$S:37}
C.crY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cs0.prototype={
$0(){var w=this.a
return w.n(new C.crX(w))},
$S:0}
C.crX.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cER.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cES.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cuI.prototype={
$3(d,e,f){return new C.Ci(this.a.c,null)},
$S:z+11}
C.cuJ.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a5,null,B.b2,B.m,A.a([new C.Ci(this.a.c,null),D.acm],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.csg.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cso.prototype={
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
w.a30(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h_(v,"load",new C.csm(w),!1,u)
v=w.e
v.toString
A.h_(v,"error",new C.csn(w),!1,u)
w=w.e
w.toString
return w},
$S:560}
C.csm.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.csk(w))
A.bN(B.z,new C.csl(w),x.H)}},
$S:41}
C.csk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.csl.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.csi(w))},
$S:12}
C.csi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.csn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.csj(w))},
$S:41}
C.csj.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.csh.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cV6.prototype={
$1(d){var w,v,u,t,s=new A.BS([],[]).FC(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.q(w,"info")
if(J.v(J.q(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.q(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.q(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1563};(function aliases(){var w=C.aew.prototype
w.aP8=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a9Z.prototype,"gar8","bc0",1)
w(u,"gbcy","bcz",1)
w(u,"gbeY","beZ",6)
w(C.aa_.prototype,"gbsu","bsv",1)
v(C,"dPr","dch",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vW,[C.cYR,C.cYQ,C.bbe,C.bbf,C.bb6,C.bb7,C.bb8,C.bb9,C.bba,C.bbb,C.bbc,C.bbd,C.bb5,C.bb4,C.cs9,C.cse,C.csc,C.cs4,C.cs_,C.cuI,C.cuJ,C.cso,C.csm,C.csn,C.cV6])
v(A.VZ,[C.cYM,C.cYN,C.cYO,C.cYP,C.cs8,C.cs7,C.cs5,C.cs6,C.csd,C.csa,C.csf,C.cs2,C.cs3,C.crZ,C.crY,C.cs0,C.crX,C.cER,C.cES,C.csg,C.csk,C.csl,C.csi,C.csj,C.csh])
v(A.aC,[C.JE,C.RR,C.aAy,C.aI0,C.aI1,C.aBB,C.aI_,C.aCH,C.ax_,C.aCL,C.Ci])
v(A.ak,[C.mG,C.oE])
v(A.ae,[C.GD,C.GC,C.a0Z,C.a1_])
v(A.af,[C.a9Z,C.aBv,C.aew,C.aa_])
v(A.W_,[C.csb,C.cs1])
u(C.GG,A.axR)
u(C.aBw,C.aew)
w(C.aew,A.e7)})()
A.dfA(b.typeUniverse,JSON.parse('{"GD":{"ae":[],"p":[]},"RR":{"aC":[],"p":[]},"GC":{"ae":[],"p":[]},"JE":{"aC":[],"p":[]},"a9Z":{"af":["GD"]},"aAy":{"aC":[],"p":[]},"aBv":{"af":["GC"]},"aI0":{"aC":[],"p":[]},"aI1":{"aC":[],"p":[]},"aBB":{"aC":[],"p":[]},"aI_":{"aC":[],"p":[]},"aCH":{"aC":[],"p":[]},"ax_":{"aC":[],"p":[]},"a0Z":{"ae":[],"p":[]},"Ci":{"aC":[],"p":[]},"aBw":{"af":["a0Z"]},"aCL":{"aC":[],"p":[]},"a1_":{"ae":[],"p":[]},"aa_":{"af":["a1_"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bm
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mG>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<Q>"),X:w("ac<mG>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mC"),_:w("A9"),k:w("mG"),N:w("m"),Y:w("bi<a7>"),W:w("cO<m>"),J:w("ig<Q>"),j:w("ig<oE?>"),E:w("xZ<cz>"),q:w("Sw"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.btn=new A.ao(18,18,B.Jz,null)
D.acm=new A.dd(B.K,null,null,D.btn,null)
D.PR=new A.P(983224,"MaterialIcons",!1)
D.axd=new A.a5(D.PR,48,B.b_,null,null,null)
D.bzu=new A.M(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJH=new A.x("Powered off",null,D.bzu,null,null,null,null,null,null,null,null)
D.aK6=w([D.axd,B.A,D.bJH],x.p)
D.aiO=new A.eo(B.X,B.e,B.P,B.i,null,B.l,null,0,D.aK6,null)
D.acu=new A.dd(B.K,null,null,D.aiO,null)
D.ad0=new A.fS(2,null,null,null,null,B.V,null,null,null,null)
D.afE=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.ag6=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.ahA=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.alf=new A.V(0,3,0,3)
D.alp=new A.V(10,0,10,88)
D.alK=new A.V(12,6,12,10)
D.alY=new A.V(14,8,14,6)
D.MH=new A.V(18,12,18,12)
D.an1=new A.V(20,18,20,8)
D.anb=new A.V(20,8,20,20)
D.Ng=new A.V(8,6,15,8)
D.asO=new A.P(983222,"MaterialIcons",!1)
D.aut=new A.a5(B.hR,26,B.O,null,null,null)
D.aux=new A.a5(B.OY,18,null,null,null,null)
D.auP=new A.a5(B.oE,14,B.V,null,null,null)
D.at5=new A.P(983420,"MaterialIcons",!1)
D.avC=new A.a5(D.at5,14,B.V,null,null,null)
D.ars=new A.P(62895,"MaterialIcons",!1)
D.avG=new A.a5(D.ars,14,B.V,null,null,null)
D.ayK=new A.a5(B.iz,20,null,null,null,null)
D.az_=new A.a5(B.f1,16,null,null,null,null)
D.aMg=w([B.aj,B.W],x.O)
D.Rl=new A.aq(B.al,B.av,B.y,D.aMg,null,null)
D.bnh=new A.aI("NGMY OS","14.2.1")
D.bm8=new A.aI("VirtualDroid","13.8.4")
D.bm7=new A.aI("NGMY OS","15.0.0")
D.bmR=new A.aI("VirtualDroid","14.1.2")
D.bm5=new A.aI("NGMY Tab OS","12.9.7")
D.bm3=new A.aI("NGMY OS","13.5.3")
D.blT=new A.aI("VirtualDroid","15.2.0")
D.bmu=new A.aI("NGMY OS","14.8.1")
D.bmX=new A.aI("NGMY Tab OS","13.2.4")
D.bnr=new A.aI("VirtualDroid","12.6.9")
D.blP=new A.aI("NGMY OS","16.0.1")
D.blG=new A.aI("VirtualDroid","14.9.0")
D.bn9=new A.aI("NGMY Tab OS","14.0.3")
D.bmh=new A.aI("NGMY OS","13.1.8")
D.blO=new A.aI("VirtualDroid","13.4.5")
D.bm2=new A.aI("NGMY OS","15.3.2")
D.bmY=new A.aI("NGMY Tab OS","12.4.1")
D.bnb=new A.aI("VirtualDroid","16.1.0")
D.bmt=new A.aI("NGMY OS","14.4.6")
D.bni=new A.aI("VirtualDroid","15.0.8")
D.aLR=w([D.bnh,D.bm8,D.bm7,D.bmR,D.bm5,D.bm3,D.blT,D.bmu,D.bmX,D.bnr,D.blP,D.blG,D.bn9,D.bmh,D.blO,D.bm2,D.bmY,D.bnb,D.bmt,D.bni],A.bm("ab<+(m,m)>"))
D.bpt=new A.e9(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bp1=new A.e9(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.boX=new A.e9(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bp5=new A.e9(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.boT=new A.e9(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bp7=new A.e9(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bpv=new A.e9(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.boU=new A.e9(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bp0=new A.e9(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bp9=new A.e9(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.boS=new A.e9(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bpn=new A.e9(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bpk=new A.e9(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bp_=new A.e9(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bph=new A.e9(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bpg=new A.e9(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.boR=new A.e9(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bp4=new A.e9(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bpe=new A.e9(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bpj=new A.e9(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Sr=w([D.bpt,D.bp1,D.boX,D.bp5,D.boT,D.bp7,D.bpv,D.boU,D.bp0,D.bp9,D.boS,D.bpn,D.bpk,D.bp_,D.bph,D.bpg,D.boR,D.bp4,D.bpe,D.bpj],A.bm("ab<+(m,m,a7,a7,m)>"))
D.aR3=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.Zp=new C.GG(0,"youtube")
D.Zq=new C.GG(1,"tiktok")
D.FA=new C.GG(2,"instagram")
D.Zr=new C.GG(3,"facebook")
D.bhD=new C.GG(4,"other")
D.bsZ=new A.ao(3,null,null,null)
D.btE=new A.j7(4,10,8,0.52,null)
D.bKI=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bwI=new A.aS(D.bKI,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bzO=new A.M(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJ0=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bLa=new A.x("Add device",null,null,null,null,null,null,null,null,null,null)
D.bP_=new A.x("Stop",null,null,null,null,null,null,null,null,null,null)
D.bPk=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bYy=new C.aCH(null)})();(function staticFields(){$.dcg=20
$.aoY=null
$.bb3=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dTH","Dt",()=>A.QA(0))
w($,"dTI","Lc",()=>A.QA(null))})()};
(a=>{a["rf9dJj0htKYeDjv1Hz3u7SRExew="]=a.current})($__dart_deferred_initializers__);