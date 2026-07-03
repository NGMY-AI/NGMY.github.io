((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dV_(d,e){A.a7(d,!1).cA(A.e7(new C.d1Z(e),!0,null,x.H))},
US(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$US=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LF()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a3,B.T),t)
w=3
return A.b(A.dk(B.D,new C.d1Y(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$US)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dCV(r)
if(q==null){d.F(x.q).f.O(D.bzj)
w=1
break}w=4
return A.b(A.bN(B.fJ,null,x.H),$async$US)
case 4:if(d.e==null){w=1
break}n=B.n.ao(e,1,999)
$.dgx=n
p=C.dCP(n)
n=$.DP()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d5I(q)
d.F(x.q).f.O(A.bl(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$US,v)},
dgA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aQ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aQ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mP(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H1(d){return C.dCY(d)},
dCY(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H1=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H1)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.cv(r)?10:11
break
case 10:k=J.f1(r,x.f)
k=A.dn(k,new C.bca(),k.$ti.j("I.E"),x.k)
j=A.S(k).j("aa<I.E>")
i=A.C(new A.aa(k,new C.bcb(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dgC(q)
w=12
return A.b(C.H0(a3,p),$async$H1)
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
case 19:m=C.dgA(A.O(n,x.N,x.z))
l=C.dgC(A.a([m],x.e))
w=21
return A.b(C.H0(a3,l),$async$H1)
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
case 18:case 14:q=C.dCW()
w=22
return A.b(C.H0(a3,q),$async$H1)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H1,v)},
dgC(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bc2(),w).eF(0),u=new A.B(d,new C.bc3(),w).eF(0),t=new A.B(d,new C.bc4(),w).eF(0),s=new A.B(d,new C.bc5(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d5J(null,q,u,t,v,s));++q}return r},
apA(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apA=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(d),$async$apA)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.da(t,new C.bc6(),s).eF(0)
p=r.da(t,new C.bc7(),s).eF(0)
o=r.da(t,new C.bc8(),s).eF(0)
n=r.da(t,new C.bc9(),s).eF(0)
m=C.d5J(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H0(d,t),$async$apA)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apA,v)},
H0(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H0=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H0)
case 2:u=g
t=B.a.i(d)
s=J.b1(e,new C.bc1(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$H0)
case 3:return A.f(null,v)}})
return A.h($async$H0,v)},
dCW(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dX(20,x.k)
for(w=0;w<20;++w)q[w]=C.d5J(w,w,t,s,u,r)
return q},
d5J(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.js(),h=d==null,g=D.To[B.n.am(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.To[B.n.am(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bc0(),A.T(p).j("B<1,m>")).f9(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.f9(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bk(B.n.je(i.by(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.am(e,20)
k=D.aS_[w]
j=D.aME[w]
return new C.mP("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bk(B.n.q(e+1),2,"0"),u,k,C.dCX(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.K(Date.now(),0,!1).a_().W())},
dCX(d,e){var w,v=J.dX(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bk(B.n.je(d.by(256),16),2,"0")
return B.d.f9(v)},
d1Z:function d1Z(d){this.a=d},
d1Y:function d1Y(d,e){this.a=d
this.b=e},
d1U:function d1U(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1W:function d1W(d){this.a=d},
d1X:function d1X(d,e){this.a=d
this.b=e},
K3:function K3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mP:function mP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bca:function bca(){},
bcb:function bcb(){},
bc2:function bc2(){},
bc3:function bc3(){},
bc4:function bc4(){},
bc5:function bc5(){},
bc6:function bc6(){},
bc7:function bc7(){},
bc8:function bc8(){},
bc9:function bc9(){},
bc1:function bc1(){},
bc0:function bc0(){},
H_:function H_(d,e){this.c=d
this.a=e},
aar:function aar(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cuW:function cuW(){},
cuV:function cuV(d,e){this.a=d
this.b=e},
cuT:function cuT(d){this.a=d},
cuU:function cuU(d,e){this.a=d
this.b=e},
cuX:function cuX(d){this.a=d},
cv0:function cv0(d){this.a=d},
cv1:function cv1(d,e){this.a=d
this.b=e},
cv_:function cv_(d,e,f){this.a=d
this.b=e
this.c=f},
cuZ:function cuZ(d,e){this.a=d
this.b=e},
cuY:function cuY(d,e){this.a=d
this.b=e},
cv2:function cv2(d){this.a=d},
Si:function Si(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBd:function aBd(d,e){this.c=d
this.a=e},
GZ:function GZ(d,e){this.c=d
this.a=e},
aCb:function aCb(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cuQ:function cuQ(d){this.a=d},
cuR:function cuR(d){this.a=d},
cuS:function cuS(d){this.a=d},
cuP:function cuP(d,e){this.a=d
this.b=e},
cuM:function cuM(d){this.a=d},
cuN:function cuN(d){this.a=d},
cuL:function cuL(d,e){this.a=d
this.b=e},
cuO:function cuO(d){this.a=d},
cuK:function cuK(d){this.a=d},
aII:function aII(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIJ:function aIJ(d,e,f){this.c=d
this.d=e
this.a=f},
aCh:function aCh(d,e){this.c=d
this.a=e},
aIH:function aIH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cI1:function cI1(d){this.a=d},
cI2:function cI2(d){this.a=d},
aDo:function aDo(d){this.a=d},
axD:function axD(d,e){this.c=d
this.a=e},
dCV(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dCU(v)
if(u!=null)return new C.oO(w,C.d5H(u,!1),D.a_g,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dCT(v)
if(t!=null)return new C.oO(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_h,"TikTok",q)
s=C.dCS(w,v)
if(s!=null)return s
r=C.dCR(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oO(w,w,D.bk_,"Video",q)
return q},
dCS(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oO(d,"https://www.instagram.com/reel/"+w+u,D.Gz,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oO(d,"https://www.instagram.com/p/"+w+u,D.Gz,t,null)}return null},
dCR(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oO(d,"https://www.facebook.com/plugins/video.php?href="+A.eA(2,d,B.aN,!1)+"&show_text=false&width=734",D.a_i,"Facebook",null)},
dCU(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dCT(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H2:function H2(d,e){this.a=d
this.b=e},
oO:function oO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1p:function a1p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCc:function aCc(d,e){var _=this
_.d=$
_.cW$=d
_.aU$=e
_.c=_.a=null},
aDs:function aDs(d,e){this.c=d
this.a=e},
cxM:function cxM(d){this.a=d},
cxN:function cxN(d){this.a=d},
CC:function CC(d,e){this.c=d
this.a=e},
af0:function af0(){},
dgB(d,e,f,g,h,i){return new C.a1q(i,f,h,e,g,d)},
dTG(d){var w=window
w.toString
A.h6(w,"message",new C.cZ6(d),!1,x._)},
a1q:function a1q(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aas:function aas(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cv3:function cv3(d){this.a=d},
cvb:function cvb(d){this.a=d},
cv9:function cv9(d){this.a=d},
cv7:function cv7(d){this.a=d},
cv8:function cv8(d){this.a=d},
cv5:function cv5(d){this.a=d},
cva:function cva(d){this.a=d},
cv6:function cv6(d){this.a=d},
cv4:function cv4(d){this.a=d},
cZ6:function cZ6(d){this.a=d},
dgv(){var w,v,u
try{v=A.yb()
w=v.gpV(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d5H(d,e){var w=C.dgv(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eA(2,w,B.aN,!1))
v.push("widget_referrer="+A.eA(2,w,B.aN,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d5G(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dgw(d){var w=A.bn(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bn(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dCO(d,e,f){var w,v,u=C.d5G(d)
if(u!=null){if(f){w=C.dgv()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dgw(C.d5H(u,e))}return C.dgw(d)},
dCP(d){if(d<=4)return 0
return B.n.aX(d-1,4)*4},
dCQ(d){var w
if($.LF().a==null)return!1
w=$.DP().a
return d>=w&&d<w+4},
dgz(){var w=$.apz
if(w!=null)w.a7(0)
$.apz=null
$.DP().sv(0,0)},
dgy(){var w,v,u,t=$.LF()
if(t.a==null)return
w=$.apz
if(w!=null)w.a7(0)
v=$.dgx
if(v<=4){t=t.a
t.toString
C.d5I(t)
return}w=$.DP()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d5I(t)},
d5I(d){var w=$.apz
if(w!=null)w.a7(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.apz=A.dq(A.d7(0,0,0,0,0,w),C.dTR())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K3.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.o,1),r=A.a1(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eB,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.W:B.d3,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ew,w,w,w)}}
C.mP.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H_.prototype={
S(){return new C.aar(A.a([],x.e))},
gez(){return this.c}}
C.aar.prototype={
Z(){var w=this
w.a3()
$.DP().ah(0,w.garG())
C.dTG(w.gbdo())
w.Vd()},
bcR(){if(this.c!=null)this.n(new C.cuW())},
bdp(){C.dgy()},
p(){$.DP().V(0,this.garG())
C.dgz()
$.LF().sv(0,null)
this.a2()},
Vd(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vd=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(t.a.c),$async$Vd)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cuV(t,s))
$.bc_=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vd,v)},
Rv(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rv=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cuT(t))
w=3
return A.b(C.apA(t.a.c),$async$Rv)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cuU(t,s))
$.bc_=J.a3(t.d)
t.c.F(x.q).f.O(A.bl(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rv,v)},
bfh(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.e7(new C.cuX(d),!1,null,x.H))},
bfT(){var w=this.c
w.toString
return C.US(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.U,t=u?B.dN:B.d9,s=A.aI(v,v,v,v,B.EP,v,v,v,new C.cv0(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.B8(A.F(A.a([A.H(new A.J(B.hY,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.S,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.b_(!1,v,!0,new A.J(B.aE,A.a1(B.eN,B.O,v,v,28),v),B.bV,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfS(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cw(!0,A.y(A.a([new A.J(D.O8,r,v),A.H(w.e?B.l3:new A.im($.LF(),new C.cv1(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0)
return A.cj(v,t,s,v,!1,!1,A.akn(B.O,B.Au,B.mS,D.bX2,w.e?v:new C.cv2(w)),v)}}
C.Si.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cs,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1p(n,!0,!C.dCQ(w),"Fold "+(B.n.aX(w,4)+1)+"/"+B.n.aX(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.i5,B.la,u,u,22),B.ak,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.vm,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.b_(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cL(p,A.hP(A.y(A.a([new C.aBd(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a1(B.rX,B.O.l(0.85),u,u,9),D.bvl,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.am6,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.Sh,B.k),u,u,u,B.f5,u,u,u),1),B.ak,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a1)}}
C.aBd.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.oZ,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.NZ,w,w,w)}}
C.GZ.prototype={
S(){return new C.aCb()}}
C.aCb.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.U,u=v?B.dN:B.d9,t=A.aI(w,w,w,w,B.EP,w,w,w,new C.cuQ(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cj(w,u,A.cw(!0,A.y(A.a([new A.J(D.O8,A.F(A.a([t,A.H(new A.B8(A.F(A.a([A.H(new A.J(B.hY,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.S,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.b_(!1,w,!0,new A.J(B.aE,A.a1(B.eN,B.O,w,w,28),w),B.bV,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cuR(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.im($.LF(),new C.cuS(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a5,!0,!0),w,!1,!1,w,w)}}
C.aII.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.ez,28),new A.ag(0,B.w,B.q.l(0.45),B.cD,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dgB(new A.cJ(v+"_full_"+u,x.W),!1,u,!1,w.gaGf(),v+"_full")
w=v}else w=new C.aCh(t.r,s)}else w=new C.axD(m,s)
else w=D.c0m
return A.u(s,A.cL(n,A.hP(A.y(A.a([new C.aIJ(m,l,s),A.H(w,1),new C.aIH(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.Sh,B.k),s,r*2.05,s,B.ba,s,s,r)}}
C.aIJ.prototype={
C(d){var w,v,u,t,s=null,r=new A.K(Date.now(),0,!1),q=A.du(r)
r=A.hd(r)
w=new A.dg(q,r)
v=w.gGA()===0?12:w.gGA()
r=B.a.bk(B.n.q(r),2,"0")
q=(q<12?B.eJ:B.hp)===B.eJ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lO,s,s,s),B.b6,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b9,D.awx,B.dU,D.avN,B.dU,D.awB],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ak,A.F(A.a([A.a1(B.EH,B.O.l(0.9),s,s,12),B.dU,A.H(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.amP,s,s,s)}}
C.aCh.prototype={
C(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.wZ,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.ev(D.azT,D.bKJ,this.c,A.ew(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aK(B.O.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vm,w,w,w,w,w,w,w,w,1/0)}}
C.aIH.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arz(B.QJ,"YouTube",s===0,r,new C.cI1(u))
s=u.arz(B.kt,"Device",s===1,r,new C.cI2(u))
w=r?"Power off":"Power on"
v=r?D.QK:D.atM
return A.u(t,A.F(A.a([q,B.a_,s,B.b6,A.aI(t,t,t,t,A.a1(v,r?B.b1:B.dH,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cJ)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amB,t,t,t)},
arz(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b3
else w=f?B.O:B.a7
v=f&&g?B.O.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.b_(!1,A.n(10),!0,new A.J(B.lm,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aDo.prototype={
C(d){return D.ad1}}
C.axD.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.j7,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qz("Serial",u.c),q=w.qz("Model",u.d),p=w.qz("Device ID",u.e),o=w.qz("IMEI",u.r),n=w.qz("MAC",u.f),m=w.qz("OS",u.w+" "+u.x),l=w.qz("Location",u.y+", "+u.z),k=w.qz("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qz("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.ak,s,B.R,r,q,p,o,n,m,l,k,j,w.qz("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aE,v,v,B.Z,!1)},
qz(d,e){var w=null
return new A.J(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cb,A.j(e,w,w,w,w,w,w,D.bCm,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H2.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oO.prototype={
gaGf(){var w=this.c
return w===D.a_g||w===D.a_h||w===D.Gz||w===D.a_i}}
C.a1p.prototype={
S(){return new C.aCc(null,null)}}
C.aCc.prototype={
Z(){this.a3()
var w=A.bF(null,B.rf,null,1,null,this)
w.mo(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPH()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dS(t,new A.t(t,t,t,t,t,new A.aq(B.de,B.cc,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.by),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.hV,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d9(new A.aX(p,new A.bh(0.72,1,q),q.j("aX<bf.T>")),!1,A.a1(B.i5,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.la
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDs(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aP(B.a6,t,B.b7,B.m,s,t)}}
C.aDs.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kA(u,new C.cxM(this),B.bu,!0,w,w,new C.cxN(this),w)
return new C.CC(v,w)}}
C.CC.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.qW,B.KL],x.O),B.i5)
break
case 1:w=new A.aJ(A.a([B.vm,D.agZ],x.O),B.jz)
break
case 2:w=new A.aJ(A.a([D.ais,D.agw],x.O),B.x6)
break
case 3:w=new A.aJ(A.a([B.S,B.cU],x.O),B.xa)
break
case 4:w=new A.aJ(A.a([B.aa,B.aj],x.O),B.mO)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.af0.prototype={
p(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdJ())
w.aU$=null
w.a2()},
br(){this.bK()
this.bF()
this.dK()}}
C.a1q.prototype={
S(){return new C.aas()}}
C.aas.prototype={
bvy(d,e){var w=C.d5G(d)
if(w!=null)return C.d5H(w,e)
return d},
a3q(d,e){var w,v=this,u=C.d5G(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bvy(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dCO(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bts(){var w,v=this
if(v.w)return
v.n(new C.cv3(v))
w=v.e
if(w!=null)v.a3q(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DQ()
$.og().rO(w,new C.cvb(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cv4(v))
w=v.e
w.toString
v.a3q(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.R_,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hP(A.aU(new A.J(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Y7(n,B.pE,w)],v)
if(o.f)w.push(A.hP(A.aU(new A.an(28,28,D.adT,n),n,n,n),B.cd,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b3,B.o,1)
q=A.a1(B.R1,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fa(0,A.aT(!1,B.M,!0,n,A.b_(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Ny,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtr(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aP(B.a6,n,B.b7,B.m,w,n)}}
var z=a.updateTypes(["m(mP)","~()","H_(R)","mP(W<@,@>)","a_(mP)","W<m,@>(mP)","ax<~>()","GZ(R)","im<Q>(R,oO?,p?)","Si(R,Q)","ub(R,oO?,p?)","CC(R,ak,dv?)"])
C.d1Z.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+2}
C.d1Y.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.U,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cy,B.S],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.ez,32)],x.V),g=A.U(m?B.bo:B.O.l(0.18),B.o,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.X.l(m?0.18:0.08)],j)
e=A.u(n,D.avr,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.o,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.S,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.ak,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.W:B.aA,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.f9,w,A.aI(n,n,n,n,A.a1(B.cM,m?B.a7:B.cd,n,n,n),n,n,n,new C.d1U(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a4,B.y,j,n,n),B.k),n,n,n,B.NJ,n,n,n)
e=A.ez(B.c6,A.a([new C.K3("YouTube",B.EG,m,n),new C.K3("TikTok",B.jz,m,n),new C.K3("Instagram",B.x6,m,n),new C.K3("Facebook",B.xa,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.S,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bw:B.fG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d9
r=A.a1(B.jy,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.b0
u=A.y(A.a([e,B.as,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.L),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aK(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Jy),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.K,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.iX(D.avv,D.bWa,new C.d1V(d),A.jh(n,n,n,n,n,n,n,n,n,n,n,m?B.aI:B.aA,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dS(A.cL(f,A.y(A.a([j,new A.J(D.anP,u,n),new A.J(D.anZ,A.F(A.a([e,B.b6,A.bQ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.W:B.a0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d1W(d),n,n),B.a_,A.dN(D.azC,D.bWX,new C.d1X(d,w),A.bx(B.O,n,n,n,B.c,n,D.Ny,n,new A.bE(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.by),n)},
$S:65}
C.d1U.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d1V.prototype={
$0(){C.dgz()
$.LF().sv(0,null)
A.a7(this.a,!1).P(null)},
$S:0}
C.d1W.prototype={
$0(){A.a7(this.a,!1).P(null)
return null},
$S:0}
C.d1X.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a7(this.a,!1).P(w)
return null},
$S:0}
C.bca.prototype={
$1(d){return C.dgA(A.O(d,x.N,x.z))},
$S:z+3}
C.bcb.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bc2.prototype={
$1(d){return d.c},
$S:z+0}
C.bc3.prototype={
$1(d){return d.r},
$S:z+0}
C.bc4.prototype={
$1(d){return d.f},
$S:z+0}
C.bc5.prototype={
$1(d){return d.at},
$S:z+0}
C.bc6.prototype={
$1(d){return d.c},
$S:z+0}
C.bc7.prototype={
$1(d){return d.r},
$S:z+0}
C.bc8.prototype={
$1(d){return d.f},
$S:z+0}
C.bc9.prototype={
$1(d){return d.at},
$S:z+0}
C.bc1.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bc0.prototype={
$1(d){return B.a.bk(B.n.je(d,16),2,"0").toUpperCase()},
$S:76}
C.cuW.prototype={
$0(){},
$S:0}
C.cuV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cuT.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cuU.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cuX.prototype={
$1(d){return new C.GZ(this.a,null)},
$S:z+7}
C.cv0.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.cv1.prototype={
$3(d,e,f){return new A.im($.DP(),new C.cv_(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cv_.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AA(d,k,x.Q)
w=w==null?k:w.gkp()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.o,1)
q=A.a1(B.i5,B.O,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DP().a
m=B.j.ao(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a_,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.S,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cw,B.f3,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cL(s,new A.iJ(1.7777777777777777,C.dgB(new A.cJ("fleet_master_"+r,x.W),!0,r,!0,j.gaGf(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zM(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kc(new A.J(B.Cy,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.oZ(D.amg,A.at3(new A.nU(new C.cuZ(i,j),J.a3(i.d),!1,!0,!0,A.vR(),k),D.bw0),k)],w))},
$S:1588}
C.cuZ.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Si(v,e,J.a3(w.d),new C.cuY(w,v),this.b,null)},
$S:z+9}
C.cuY.prototype={
$0(){return this.a.bfh(this.b)},
$S:0}
C.cv2.prototype={
$0(){this.a.Rv()
return null},
$S:0}
C.cuQ.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.cuR.prototype={
$0(){C.US(this.a,$.bc_)
return null},
$S:0}
C.cuS.prototype={
$3(d,e,f){return A.fQ(new C.cuP(this.a,e))},
$S:z+10}
C.cuP.prototype={
$2(d,e){var w,v=null,u=B.j.ao(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cs(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aII(u,s.a.c,s.e,s.d,new C.cuM(s),new C.cuN(s),new C.cuO(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wl,v,v,B.Z),v,v,v)},
$S:1589}
C.cuM.prototype={
$0(){var w=this.a.c
w.toString
C.US(w,$.bc_)
return null},
$S:0}
C.cuN.prototype={
$1(d){var w=this.a
return w.n(new C.cuL(w,d))},
$S:38}
C.cuL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cuO.prototype={
$0(){var w=this.a
return w.n(new C.cuK(w))},
$S:0}
C.cuK.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cI1.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cI2.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cxM.prototype={
$3(d,e,f){return new C.CC(this.a.c,null)},
$S:z+11}
C.cxN.prototype={
$3(d,e,f){if(f==null)return e
return new A.aP(B.a6,null,B.b7,B.m,A.a([new C.CC(this.a.c,null),D.adg],x.p),null)},
$C:"$3",
$R:3,
$S:433}
C.cv3.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvb.prototype={
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
w.a3q(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.cv9(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.cva(w),!1,u)
w=w.e
w.toString
return w},
$S:572}
C.cv9.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cv7(w))
A.bN(B.A,new C.cv8(w),x.H)}},
$S:43}
C.cv7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cv8.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cv5(w))},
$S:12}
C.cv5.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cva.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cv6(w))},
$S:43}
C.cv6.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cv4.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZ6.prototype={
$1(d){var w,v,u,t,s=new A.Cb([],[]).FS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1590};(function aliases(){var w=C.af0.prototype
w.aPH=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aar.prototype,"garG","bcR",1)
w(u,"gbdo","bdp",1)
w(u,"gbfS","bfT",6)
w(C.aas.prototype,"gbtr","bts",1)
v(C,"dTR","dgy",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wb,[C.d1Z,C.d1Y,C.bca,C.bcb,C.bc2,C.bc3,C.bc4,C.bc5,C.bc6,C.bc7,C.bc8,C.bc9,C.bc1,C.bc0,C.cuX,C.cv1,C.cv_,C.cuS,C.cuN,C.cxM,C.cxN,C.cvb,C.cv9,C.cva,C.cZ6])
v(A.Wp,[C.d1U,C.d1V,C.d1W,C.d1X,C.cuW,C.cuV,C.cuT,C.cuU,C.cv0,C.cuY,C.cv2,C.cuQ,C.cuR,C.cuM,C.cuL,C.cuO,C.cuK,C.cI1,C.cI2,C.cv3,C.cv7,C.cv8,C.cv5,C.cv6,C.cv4])
v(A.aC,[C.K3,C.Si,C.aBd,C.aII,C.aIJ,C.aCh,C.aIH,C.aDo,C.axD,C.aDs,C.CC])
v(A.ak,[C.mP,C.oO])
v(A.ad,[C.H_,C.GZ,C.a1p,C.a1q])
v(A.ae,[C.aar,C.aCb,C.af0,C.aas])
v(A.Wq,[C.cuZ,C.cuP])
u(C.H2,A.ayv)
u(C.aCc,C.af0)
w(C.af0,A.e8)})()
A.djQ(b.typeUniverse,JSON.parse('{"H_":{"ad":[],"p":[]},"Si":{"aC":[],"p":[]},"GZ":{"ad":[],"p":[]},"K3":{"aC":[],"p":[]},"aar":{"ae":["H_"]},"aBd":{"aC":[],"p":[]},"aCb":{"ae":["GZ"]},"aII":{"aC":[],"p":[]},"aIJ":{"aC":[],"p":[]},"aCh":{"aC":[],"p":[]},"aIH":{"aC":[],"p":[]},"aDo":{"aC":[],"p":[]},"axD":{"aC":[],"p":[]},"a1p":{"ad":[],"p":[]},"CC":{"aC":[],"p":[]},"aCc":{"ae":["a1p"]},"aDs":{"aC":[],"p":[]},"a1q":{"ad":[],"p":[]},"aas":{"ae":["a1q"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bm
return{V:w("ab<ag>"),O:w("ab<A>"),e:w("ab<mP>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<Q>"),X:w("ac<mP>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mM"),_:w("Ax"),k:w("mP"),N:w("m"),Y:w("bh<a8>"),W:w("cJ<m>"),J:w("im<Q>"),j:w("im<oO?>"),E:w("yk<cC>"),q:w("SY"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.QK=new A.L(983224,"MaterialIcons",!1)
D.ay6=new A.a5(D.QK,48,B.b3,null,null,null)
D.bC2=new A.N(!0,B.bw,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJD=new A.x("Powered off",null,D.bC2,null,null,null,null,null,null,null,null,null)
D.aL2=w([D.ay6,B.z,D.bJD],x.p)
D.ajE=new A.es(B.Z,B.e,B.P,B.i,null,B.l,null,0,D.aL2,null)
D.ad1=new A.di(B.J,null,null,D.ajE,null)
D.bvJ=new A.an(18,18,B.Kt,null)
D.adg=new A.di(B.J,null,null,D.bvJ,null)
D.adT=new A.fO(2,null,null,null,null,B.W,null,null,null,null)
D.agw=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.agZ=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ais=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.am6=new A.V(0,3,0,3)
D.amg=new A.V(10,0,10,88)
D.amB=new A.V(12,6,12,10)
D.amP=new A.V(14,8,14,6)
D.Ny=new A.V(18,12,18,12)
D.anP=new A.V(20,18,20,8)
D.anZ=new A.V(20,8,20,20)
D.O8=new A.V(8,6,15,8)
D.atM=new A.L(983222,"MaterialIcons",!1)
D.avr=new A.a5(B.i5,26,B.O,null,null,null)
D.avv=new A.a5(B.PP,18,null,null,null,null)
D.avN=new A.a5(B.oZ,14,B.W,null,null,null)
D.au3=new A.L(983420,"MaterialIcons",!1)
D.awx=new A.a5(D.au3,14,B.W,null,null,null)
D.asj=new A.L(62895,"MaterialIcons",!1)
D.awB=new A.a5(D.asj,14,B.W,null,null,null)
D.azC=new A.a5(B.iM,20,null,null,null,null)
D.azT=new A.a5(B.eN,16,null,null,null,null)
D.aN4=w([B.aj,B.S],x.O)
D.Sh=new A.aq(B.al,B.av,B.y,D.aN4,null,null)
D.bpF=new A.aJ("NGMY OS","14.2.1")
D.bow=new A.aJ("VirtualDroid","13.8.4")
D.bov=new A.aJ("NGMY OS","15.0.0")
D.bpe=new A.aJ("VirtualDroid","14.1.2")
D.bot=new A.aJ("NGMY Tab OS","12.9.7")
D.bor=new A.aJ("NGMY OS","13.5.3")
D.bog=new A.aJ("VirtualDroid","15.2.0")
D.boS=new A.aJ("NGMY OS","14.8.1")
D.bpk=new A.aJ("NGMY Tab OS","13.2.4")
D.bpP=new A.aJ("VirtualDroid","12.6.9")
D.boc=new A.aJ("NGMY OS","16.0.1")
D.bo3=new A.aJ("VirtualDroid","14.9.0")
D.bpx=new A.aJ("NGMY Tab OS","14.0.3")
D.boF=new A.aJ("NGMY OS","13.1.8")
D.bob=new A.aJ("VirtualDroid","13.4.5")
D.boq=new A.aJ("NGMY OS","15.3.2")
D.bpl=new A.aJ("NGMY Tab OS","12.4.1")
D.bpz=new A.aJ("VirtualDroid","16.1.0")
D.boR=new A.aJ("NGMY OS","14.4.6")
D.bpG=new A.aJ("VirtualDroid","15.0.8")
D.aME=w([D.bpF,D.bow,D.bov,D.bpe,D.bot,D.bor,D.bog,D.boS,D.bpk,D.bpP,D.boc,D.bo3,D.bpx,D.boF,D.bob,D.boq,D.bpl,D.bpz,D.boR,D.bpG],A.bm("ab<+(m,m)>"))
D.brR=new A.ee(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.brp=new A.ee(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.brk=new A.ee(["New York","United States",40.7128,-74.006,"America/New_York"])
D.brt=new A.ee(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.brg=new A.ee(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.brv=new A.ee(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.brT=new A.ee(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.brh=new A.ee(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bro=new A.ee(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.brx=new A.ee(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.brf=new A.ee(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.brL=new A.ee(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.brI=new A.ee(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.brn=new A.ee(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.brF=new A.ee(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.brE=new A.ee(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bre=new A.ee(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.brs=new A.ee(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.brC=new A.ee(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.brH=new A.ee(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.To=w([D.brR,D.brp,D.brk,D.brt,D.brg,D.brv,D.brT,D.brh,D.bro,D.brx,D.brf,D.brL,D.brI,D.brn,D.brF,D.brE,D.bre,D.brs,D.brC,D.brH],A.bm("ab<+(m,m,a8,a8,m)>"))
D.aS_=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_g=new C.H2(0,"youtube")
D.a_h=new C.H2(1,"tiktok")
D.Gz=new C.H2(2,"instagram")
D.a_i=new C.H2(3,"facebook")
D.bk_=new C.H2(4,"other")
D.bvl=new A.an(3,null,null,null)
D.bw0=new A.iV(4,10,8,0.52,null)
D.bKV=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bzj=new A.aS(D.bKV,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bCm=new A.N(!0,B.c,null,null,null,null,11,B.Y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKJ=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bWa=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bWX=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bX2=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c0m=new C.aDo(null)})();(function staticFields(){$.dgx=20
$.apz=null
$.bc_=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dY8","DP",()=>A.R0(0))
w($,"dY9","LF",()=>A.R0(null))})()};
(a=>{a["/HZUovTNWL3idL5EDKuNyUmvkOQ="]=a.current})($__dart_deferred_initializers__);