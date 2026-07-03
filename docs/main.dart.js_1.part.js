((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dVG(d,e){A.a5(d,!1).cv(A.e7(new C.d2B(e),!0,null,x.H))},
US(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$US=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LE()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a5,B.T),t)
w=3
return A.b(A.d9(B.C,new C.d2A(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$US)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dDz(r)
if(q==null){d.F(x.q).f.O(D.bA0)
w=1
break}w=4
return A.b(A.bM(B.fK,null,x.H),$async$US)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.dhc=n
p=C.dDt(n)
n=$.DQ()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6l(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$US,v)},
dhf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mR(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H1(d){return C.dDC(d)},
dDC(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.f3(r,x.f)
k=A.dn(k,new C.bcd(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("aa<J.E>")
i=A.C(new A.aa(k,new C.bce(),j),j.j("J.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dhh(q)
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
case 19:m=C.dhf(A.O(n,x.N,x.z))
l=C.dhh(A.a([m],x.e))
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
case 18:case 14:q=C.dDA()
w=22
return A.b(C.H0(a3,q),$async$H1)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H1,v)},
dhh(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bc5(),w).eF(0),u=new A.B(d,new C.bc6(),w).eF(0),t=new A.B(d,new C.bc7(),w).eF(0),s=new A.B(d,new C.bc8(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d6m(null,q,u,t,v,s));++q}return r},
apD(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apD=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(d),$async$apD)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d5(t,new C.bc9(),s).eF(0)
p=r.d5(t,new C.bca(),s).eF(0)
o=r.d5(t,new C.bcb(),s).eF(0)
n=r.d5(t,new C.bcc(),s).eF(0)
m=C.d6m(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H0(d,t),$async$apD)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apD,v)},
H0(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H0=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H0)
case 2:u=g
t=B.a.i(d)
s=J.b1(e,new C.bc4(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.ak(s,null)),$async$H0)
case 3:return A.f(null,v)}})
return A.h($async$H0,v)},
dDA(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dX(20,x.k)
for(w=0;w<20;++w)q[w]=C.d6m(w,w,t,s,u,r)
return q},
d6m(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.TC[B.n.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TC[B.n.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bc3(),A.T(p).j("B<1,m>")).f9(0)
u="VND-"+B.a.ag(n,0,4)+"-"+B.a.ag(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.f9(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bj(B.n.jg(i.by(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.an(e,20)
k=D.aSC[w]
j=D.aNe[w]
return new C.mR("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dDB(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dDB(d,e){var w,v=J.dX(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.jg(d.by(256),16),2,"0")
return B.d.f9(v)},
d2B:function d2B(d){this.a=d},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d){this.a=d},
d2z:function d2z(d,e){this.a=d
this.b=e},
K4:function K4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mR:function mR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcd:function bcd(){},
bce:function bce(){},
bc5:function bc5(){},
bc6:function bc6(){},
bc7:function bc7(){},
bc8:function bc8(){},
bc9:function bc9(){},
bca:function bca(){},
bcb:function bcb(){},
bcc:function bcc(){},
bc4:function bc4(){},
bc3:function bc3(){},
H_:function H_(d,e){this.c=d
this.a=e},
aat:function aat(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvd:function cvd(){},
cvc:function cvc(d,e){this.a=d
this.b=e},
cva:function cva(d){this.a=d},
cvb:function cvb(d,e){this.a=d
this.b=e},
cve:function cve(d){this.a=d},
cvi:function cvi(d){this.a=d},
cvj:function cvj(d,e){this.a=d
this.b=e},
cvh:function cvh(d,e,f){this.a=d
this.b=e
this.c=f},
cvg:function cvg(d,e){this.a=d
this.b=e},
cvf:function cvf(d,e){this.a=d
this.b=e},
cvk:function cvk(d){this.a=d},
Sg:function Sg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBg:function aBg(d,e){this.c=d
this.a=e},
GZ:function GZ(d,e){this.c=d
this.a=e},
aCe:function aCe(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cv7:function cv7(d){this.a=d},
cv8:function cv8(d){this.a=d},
cv9:function cv9(d){this.a=d},
cv6:function cv6(d,e){this.a=d
this.b=e},
cv3:function cv3(d){this.a=d},
cv4:function cv4(d){this.a=d},
cv2:function cv2(d,e){this.a=d
this.b=e},
cv5:function cv5(d){this.a=d},
cv1:function cv1(d){this.a=d},
aIL:function aIL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIM:function aIM(d,e,f){this.c=d
this.d=e
this.a=f},
aCk:function aCk(d,e){this.c=d
this.a=e},
aIK:function aIK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cIH:function cIH(d){this.a=d},
cII:function cII(d){this.a=d},
aDr:function aDr(d){this.a=d},
axF:function axF(d,e){this.c=d
this.a=e},
dDz(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dDy(v)
if(u!=null)return new C.oR(w,C.d6k(u,!1),D.a_v,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dDx(v)
if(t!=null)return new C.oR(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_w,"TikTok",q)
s=C.dDw(w,v)
if(s!=null)return s
r=C.dDv(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oR(w,w,D.bkD,"Video",q)
return q},
dDw(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oR(d,"https://www.instagram.com/reel/"+w+u,D.GJ,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oR(d,"https://www.instagram.com/p/"+w+u,D.GJ,t,null)}return null},
dDv(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oR(d,"https://www.facebook.com/plugins/video.php?href="+A.eB(2,d,B.aO,!1)+"&show_text=false&width=734",D.a_x,"Facebook",null)},
dDy(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dDx(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H2:function H2(d,e){this.a=d
this.b=e},
oR:function oR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1q:function a1q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCf:function aCf(d,e){var _=this
_.d=$
_.cW$=d
_.aU$=e
_.c=_.a=null},
aDv:function aDv(d,e){this.c=d
this.a=e},
cys:function cys(d){this.a=d},
cyt:function cyt(d){this.a=d},
CC:function CC(d,e){this.c=d
this.a=e},
af3:function af3(){},
dhg(d,e,f,g,h,i){return new C.a1r(i,f,h,e,g,d)},
dUm(d){var w=window
w.toString
A.h5(w,"message",new C.cZO(d),!1,x._)},
a1r:function a1r(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aau:function aau(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvl:function cvl(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvp:function cvp(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvs:function cvs(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvm:function cvm(d){this.a=d},
cZO:function cZO(d){this.a=d},
dha(){var w,v,u
try{v=A.y9()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d6k(d,e){var w=C.dha(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eB(2,w,B.aO,!1))
v.push("widget_referrer="+A.eB(2,w,B.aO,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d6j(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dhb(d){var w=A.bn(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bn(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDs(d,e,f){var w,v,u=C.d6j(d)
if(u!=null){if(f){w=C.dha()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dhb(C.d6k(u,e))}return C.dhb(d)},
dDt(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dDu(d){var w
if($.LE().a==null)return!1
w=$.DQ().a
return d>=w&&d<w+4},
dhe(){var w=$.apC
if(w!=null)w.a7(0)
$.apC=null
$.DQ().sv(0,0)},
dhd(){var w,v,u,t=$.LE()
if(t.a==null)return
w=$.apC
if(w!=null)w.a7(0)
v=$.dhc
if(v<=4){t=t.a
t.toString
C.d6l(t)
return}w=$.DQ()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6l(t)},
d6l(d){var w=$.apC
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
default:w=null}$.apC=A.dq(A.d8(0,0,0,0,0,w),C.dUx())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K4.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eE,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.X:B.d3,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.em,w,w,w)}}
C.mR.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H_.prototype={
S(){return new C.aat(A.a([],x.e))},
gez(){return this.c}}
C.aat.prototype={
Z(){var w=this
w.a3()
$.DQ().ai(0,w.garT())
C.dUm(w.gbdK())
w.Vj()},
bdc(){if(this.c!=null)this.n(new C.cvd())},
bdL(){C.dhd()},
p(){$.DQ().V(0,this.garT())
C.dhe()
$.LE().sv(0,null)
this.a2()},
Vj(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vj=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(t.a.c),$async$Vj)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvc(t,s))
$.bc2=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vj,v)},
RC(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RC=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cva(t))
w=3
return A.b(C.apD(t.a.c),$async$RC)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvb(t,s))
$.bc2=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RC,v)},
bfD(d){var w=this.c
w.toString
A.a5(w,!1).cv(A.e7(new C.cve(d),!1,null,x.H))},
bge(){var w=this.c
w.toString
return C.US(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.U,t=u?B.dQ:B.d9,s=A.aI(v,v,v,v,B.EZ,v,v,v,new C.cvi(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.B7(A.F(A.a([A.I(new A.H(B.i1,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.V,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aP(!1,B.L,!0,v,A.aW(!1,v,!0,new A.H(B.aK,A.a1(B.eR,B.P,v,v,28),v),B.bX,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgd(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a_)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cl(!0,A.y(A.a([new A.H(D.Ol,r,v),A.I(w.e?B.l5:new A.ip($.LE(),new C.cvj(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.akq(B.P,B.AE,B.mV,D.bXV,w.e?v:new C.cvk(w)),v)}}
C.Sg.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.cs,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1q(n,!0,!C.dDu(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.i8,B.lc,u,u,22),B.aj,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vo,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aP(!1,B.L,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cH(p,A.hS(A.y(A.a([new C.aBg(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.rX,B.P.l(0.85),u,u,9),D.bw2,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.amm,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.St,B.k),u,u,u,B.f8,u,u,u),1),B.aj,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a_)}}
C.aBg.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.p4,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oa,w,w,w)}}
C.GZ.prototype={
S(){return new C.aCe()}}
C.aCe.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.U,u=v?B.dQ:B.d9,t=A.aI(w,w,w,w,B.EZ,w,w,w,new C.cv7(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cl(!0,A.y(A.a([new A.H(D.Ol,A.F(A.a([t,A.I(new A.B7(A.F(A.a([A.I(new A.H(B.i1,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.V,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aP(!1,B.L,!0,w,A.aW(!1,w,!0,new A.H(B.aK,A.a1(B.eR,B.P,w,w,28),w),B.bX,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cv8(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.ip($.LE(),new C.cv9(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aIL.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.eo,28),new A.ag(0,B.w,B.q.l(0.45),B.cC,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhg(new A.cG(v+"_full_"+u,x.W),!1,u,!1,w.gaGu(),v+"_full")
w=v}else w=new C.aCk(t.r,s)}else w=new C.axF(m,s)
else w=D.c1y
return A.u(s,A.cH(n,A.hS(A.y(A.a([new C.aIM(m,l,s),A.I(w,1),new C.aIK(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.St,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aIM.prototype={
C(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h4(r)
w=new A.di(q,r)
v=w.gGB()===0?12:w.gGB()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eM:B.hp)===B.eM?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lO,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b8,D.awY,B.dB,D.awd,B.dB,D.ax1],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.aj,A.F(A.a([A.a1(B.ES,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.an4,s,s,s)}}
C.aCk.prototype={
C(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.x5,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.ex(D.aAm,D.bLu,this.c,A.ey(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aK(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vo,w,w,w,w,w,w,w,w,1/0)}}
C.aIK.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arM(B.QV,"YouTube",s===0,r,new C.cIH(u))
s=u.arM(B.kv,"Device",s===1,r,new C.cII(u))
w=r?"Power off":"Power on"
v=r?D.QW:D.aub
return A.u(t,A.F(A.a([q,B.a0,s,B.b3,A.aI(t,t,t,t,A.a1(v,r?B.b4:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cT)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amR,t,t,t)},
arM(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aZ
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aP(!1,B.L,!0,u,A.aW(!1,A.n(10),!0,new A.H(B.ln,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a_),1)}}
C.aDr.prototype={
C(d){return D.adg}}
C.axF.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jb,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.aj,s,B.R,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.ag(u,0,10):u)],x.p),v,B.aK,v,v,B.Z,!1)},
qB(d,e){var w=null
return new A.H(B.bY,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cc,A.j(e,w,w,w,w,w,w,D.bD5,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H2.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oR.prototype={
gaGu(){var w=this.c
return w===D.a_v||w===D.a_w||w===D.GJ||w===D.a_x}}
C.a1q.prototype={
S(){return new C.aCf(null,null)}}
C.aCf.prototype={
Z(){this.a3()
var w=A.bF(null,B.rj,null,1,null,this)
w.mp(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPU()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dS(t,new A.t(t,t,t,t,t,new A.aq(B.df,B.cd,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.by),q=x.Y,p=u.d
p===$&&A.c()
p=A.ca(B.hZ,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d3(new A.aX(p,new A.bg(0.72,1,q),q.j("aX<be.T>")),!1,A.a1(B.i8,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lc
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDv(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a6,t,B.aV,B.m,s,t)}}
C.aDv.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kB(u,new C.cys(this),B.bv,!0,w,w,new C.cyt(this),w)
return new C.CC(v,w)}}
C.CC.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.r0,B.KV],x.O),B.i8)
break
case 1:w=new A.aJ(A.a([B.vo,D.ahd],x.O),B.jD)
break
case 2:w=new A.aJ(A.a([D.aiH,D.agL],x.O),B.xe)
break
case 3:w=new A.aJ(A.a([B.V,B.cN],x.O),B.xi)
break
case 4:w=new A.aJ(A.a([B.aa,B.ai],x.O),B.mR)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.P.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.af3.prototype={
p(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdJ())
w.aU$=null
w.a2()},
br(){this.bK()
this.bF()
this.dK()}}
C.a1r.prototype={
S(){return new C.aau()}}
C.aau.prototype={
bw0(d,e){var w=C.d6j(d)
if(w!=null)return C.d6k(w,e)
return d},
a3x(d,e){var w,v=this,u=C.d6j(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bw0(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDs(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btV(){var w,v=this
if(v.w)return
v.n(new C.cvl(v))
w=v.e
if(w!=null)v.a3x(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DR()
$.ok().rP(w,new C.cvt(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvm(v))
w=v.e
w.toString
v.a3x(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.Ra,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hS(A.aU(new A.H(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.O,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Y8(n,B.pH,w)],v)
if(o.f)w.push(A.hS(A.aU(new A.an(28,28,D.ae7,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aZ,B.o,1)
q=A.a1(B.Rc,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fb(0,A.aP(!1,B.L,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.NK,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtU(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a_)))}return new A.aQ(B.a6,n,B.aV,B.m,w,n)}}
var z=a.updateTypes(["m(mR)","~()","H_(Q)","mR(W<@,@>)","a_(mR)","W<m,@>(mR)","ay<~>()","GZ(Q)","ip<R>(Q,oR?,o?)","Sg(Q,R)","uc(Q,oR?,o?)","CC(Q,ak,dv?)"])
C.d2B.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+2}
C.d2A.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.U,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.V],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.eo,32)],x.V),g=A.U(m?B.bm:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.avR,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.aj,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.X:B.aA,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.eq,w,A.aI(n,n,n,n,A.a1(B.cJ,m?B.a7:B.cf,n,n,n),n,n,n,new C.d2w(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a4,B.y,j,n,n),B.k),n,n,n,B.NV,n,n,n)
e=A.et(B.c0,A.a([new C.K4("YouTube",B.ER,m,n),new C.K4("TikTok",B.jD,m,n),new C.K4("Instagram",B.xe,m,n),new C.K4("Facebook",B.xi,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bx:B.fH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d9
r=A.a1(B.jC,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bm:B.b0
u=A.y(A.a([e,B.as,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b6(4,q,B.J),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aK(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.JI),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.M,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.iZ(D.avV,D.bX1,new C.d2x(d),A.iD(n,n,n,n,n,n,n,n,n,n,n,m?B.aE:B.aA,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.V(12,0,12,12+l.f.d),A.dS(A.cH(f,A.y(A.a([j,new A.H(D.ao7,u,n),new A.H(D.aoi,A.F(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.X:B.a1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2y(d),n,n),B.a0,A.dK(D.aA4,D.bXP,new C.d2z(d,w),A.bu(B.P,n,n,n,B.c,n,D.NK,n,new A.bE(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.O,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.by),n)},
$S:65}
C.d2w.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2x.prototype={
$0(){C.dhe()
$.LE().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2y.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2z.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcd.prototype={
$1(d){return C.dhf(A.O(d,x.N,x.z))},
$S:z+3}
C.bce.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bc5.prototype={
$1(d){return d.c},
$S:z+0}
C.bc6.prototype={
$1(d){return d.r},
$S:z+0}
C.bc7.prototype={
$1(d){return d.f},
$S:z+0}
C.bc8.prototype={
$1(d){return d.at},
$S:z+0}
C.bc9.prototype={
$1(d){return d.c},
$S:z+0}
C.bca.prototype={
$1(d){return d.r},
$S:z+0}
C.bcb.prototype={
$1(d){return d.f},
$S:z+0}
C.bcc.prototype={
$1(d){return d.at},
$S:z+0}
C.bc4.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bc3.prototype={
$1(d){return B.a.bj(B.n.jg(d,16),2,"0").toUpperCase()},
$S:75}
C.cvd.prototype={
$0(){},
$S:0}
C.cvc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cva.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvb.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cve.prototype={
$1(d){return new C.GZ(this.a,null)},
$S:z+7}
C.cvi.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvj.prototype={
$3(d,e,f){return new A.ip($.DQ(),new C.cvh(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvh.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Az(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.P.l(0.12)
s=A.n(12)
r=A.U(B.P.l(0.35),B.o,1)
q=A.a1(B.i8,B.P,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DQ().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.V,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cr,B.eO,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cH(s,new A.iN(1.7777777777777777,C.dhg(new A.cG("fleet_master_"+r,x.W),!0,r,!0,j.gaGu(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zJ(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kd(new A.H(B.CG,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p0(D.amv,A.at6(new A.o_(new C.cvg(i,j),J.a3(i.d),!1,!0,!0,A.vR(),k),D.bwJ),k)],w))},
$S:1590}
C.cvg.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sg(v,e,J.a3(w.d),new C.cvf(w,v),this.b,null)},
$S:z+9}
C.cvf.prototype={
$0(){return this.a.bfD(this.b)},
$S:0}
C.cvk.prototype={
$0(){this.a.RC()
return null},
$S:0}
C.cv7.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cv8.prototype={
$0(){C.US(this.a,$.bc2)
return null},
$S:0}
C.cv9.prototype={
$3(d,e,f){return A.fP(new C.cv6(this.a,e))},
$S:z+10}
C.cv6.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.co(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aIL(u,s.a.c,s.e,s.d,new C.cv3(s),new C.cv4(s),new C.cv5(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wr,v,v,B.Z),v,v,v)},
$S:1591}
C.cv3.prototype={
$0(){var w=this.a.c
w.toString
C.US(w,$.bc2)
return null},
$S:0}
C.cv4.prototype={
$1(d){var w=this.a
return w.n(new C.cv2(w,d))},
$S:38}
C.cv2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv5.prototype={
$0(){var w=this.a
return w.n(new C.cv1(w))},
$S:0}
C.cv1.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cIH.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cII.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cys.prototype={
$3(d,e,f){return new C.CC(this.a.c,null)},
$S:z+11}
C.cyt.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.aV,B.m,A.a([new C.CC(this.a.c,null),D.adu],x.p),null)},
$C:"$3",
$R:3,
$S:376}
C.cvl.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvt.prototype={
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
w.a3x(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h5(v,"load",new C.cvr(w),!1,u)
v=w.e
v.toString
A.h5(v,"error",new C.cvs(w),!1,u)
w=w.e
w.toString
return w},
$S:511}
C.cvr.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvp(w))
A.bM(B.B,new C.cvq(w),x.H)}},
$S:42}
C.cvp.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvq.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvn(w))},
$S:12}
C.cvn.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvo(w))},
$S:42}
C.cvo.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvm.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZO.prototype={
$1(d){var w,v,u,t,s=new A.Cb([],[]).FT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1592};(function aliases(){var w=C.af3.prototype
w.aPU=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aat.prototype,"garT","bdc",1)
w(u,"gbdK","bdL",1)
w(u,"gbgd","bge",6)
w(C.aau.prototype,"gbtU","btV",1)
v(C,"dUx","dhd",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wb,[C.d2B,C.d2A,C.bcd,C.bce,C.bc5,C.bc6,C.bc7,C.bc8,C.bc9,C.bca,C.bcb,C.bcc,C.bc4,C.bc3,C.cve,C.cvj,C.cvh,C.cv9,C.cv4,C.cys,C.cyt,C.cvt,C.cvr,C.cvs,C.cZO])
v(A.Wp,[C.d2w,C.d2x,C.d2y,C.d2z,C.cvd,C.cvc,C.cva,C.cvb,C.cvi,C.cvf,C.cvk,C.cv7,C.cv8,C.cv3,C.cv2,C.cv5,C.cv1,C.cIH,C.cII,C.cvl,C.cvp,C.cvq,C.cvn,C.cvo,C.cvm])
v(A.aA,[C.K4,C.Sg,C.aBg,C.aIL,C.aIM,C.aCk,C.aIK,C.aDr,C.axF,C.aDv,C.CC])
v(A.ak,[C.mR,C.oR])
v(A.ad,[C.H_,C.GZ,C.a1q,C.a1r])
v(A.ae,[C.aat,C.aCe,C.af3,C.aau])
v(A.Wq,[C.cvg,C.cv6])
u(C.H2,A.ayy)
u(C.aCf,C.af3)
w(C.af3,A.e8)})()
A.dkv(b.typeUniverse,JSON.parse('{"H_":{"ad":[],"o":[]},"Sg":{"aA":[],"o":[]},"GZ":{"ad":[],"o":[]},"K4":{"aA":[],"o":[]},"aat":{"ae":["H_"]},"aBg":{"aA":[],"o":[]},"aCe":{"ae":["GZ"]},"aIL":{"aA":[],"o":[]},"aIM":{"aA":[],"o":[]},"aCk":{"aA":[],"o":[]},"aIK":{"aA":[],"o":[]},"aDr":{"aA":[],"o":[]},"axF":{"aA":[],"o":[]},"a1q":{"ad":[],"o":[]},"CC":{"aA":[],"o":[]},"aCf":{"ae":["a1q"]},"aDv":{"aA":[],"o":[]},"a1r":{"ad":[],"o":[]},"aau":{"ae":["a1r"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bl
return{V:w("ab<ag>"),O:w("ab<A>"),e:w("ab<mR>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<R>"),X:w("ac<mR>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mO"),_:w("Aw"),k:w("mR"),N:w("m"),Y:w("bg<a6>"),W:w("cG<m>"),J:w("ip<R>"),j:w("ip<oR?>"),E:w("yi<cC>"),q:w("SX"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.QW=new A.K(983224,"MaterialIcons",!1)
D.ayz=new A.a7(D.QW,48,B.aZ,null,null,null)
D.bCK=new A.M(!0,B.bx,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKp=new A.x("Powered off",null,D.bCK,null,null,null,null,null,null,null,null,null)
D.aLD=w([D.ayz,B.z,D.bKp],x.p)
D.ajS=new A.ej(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aLD,null)
D.adg=new A.dk(B.K,null,null,D.ajS,null)
D.bwq=new A.an(18,18,B.KD,null)
D.adu=new A.dk(B.K,null,null,D.bwq,null)
D.ae7=new A.fN(2,null,null,null,null,B.X,null,null,null,null)
D.agL=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahd=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiH=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amm=new A.V(0,3,0,3)
D.amv=new A.V(10,0,10,88)
D.amR=new A.V(12,6,12,10)
D.an4=new A.V(14,8,14,6)
D.NK=new A.V(18,12,18,12)
D.ao7=new A.V(20,18,20,8)
D.aoi=new A.V(20,8,20,20)
D.Ol=new A.V(8,6,15,8)
D.aub=new A.K(983222,"MaterialIcons",!1)
D.avR=new A.a7(B.i8,26,B.P,null,null,null)
D.avV=new A.a7(B.Q1,18,null,null,null,null)
D.awd=new A.a7(B.p4,14,B.X,null,null,null)
D.aut=new A.K(983420,"MaterialIcons",!1)
D.awY=new A.a7(D.aut,14,B.X,null,null,null)
D.asE=new A.K(62895,"MaterialIcons",!1)
D.ax1=new A.a7(D.asE,14,B.X,null,null,null)
D.aA4=new A.a7(B.iQ,20,null,null,null,null)
D.aAm=new A.a7(B.eR,16,null,null,null,null)
D.aNE=w([B.ai,B.V],x.O)
D.St=new A.aq(B.al,B.av,B.y,D.aNE,null,null)
D.bqk=new A.aJ("NGMY OS","14.2.1")
D.bpb=new A.aJ("VirtualDroid","13.8.4")
D.bpa=new A.aJ("NGMY OS","15.0.0")
D.bpU=new A.aJ("VirtualDroid","14.1.2")
D.bp8=new A.aJ("NGMY Tab OS","12.9.7")
D.bp6=new A.aJ("NGMY OS","13.5.3")
D.boW=new A.aJ("VirtualDroid","15.2.0")
D.bpx=new A.aJ("NGMY OS","14.8.1")
D.bq_=new A.aJ("NGMY Tab OS","13.2.4")
D.bqu=new A.aJ("VirtualDroid","12.6.9")
D.boS=new A.aJ("NGMY OS","16.0.1")
D.boJ=new A.aJ("VirtualDroid","14.9.0")
D.bqc=new A.aJ("NGMY Tab OS","14.0.3")
D.bpk=new A.aJ("NGMY OS","13.1.8")
D.boR=new A.aJ("VirtualDroid","13.4.5")
D.bp5=new A.aJ("NGMY OS","15.3.2")
D.bq0=new A.aJ("NGMY Tab OS","12.4.1")
D.bqe=new A.aJ("VirtualDroid","16.1.0")
D.bpw=new A.aJ("NGMY OS","14.4.6")
D.bql=new A.aJ("VirtualDroid","15.0.8")
D.aNe=w([D.bqk,D.bpb,D.bpa,D.bpU,D.bp8,D.bp6,D.boW,D.bpx,D.bq_,D.bqu,D.boS,D.boJ,D.bqc,D.bpk,D.boR,D.bp5,D.bq0,D.bqe,D.bpw,D.bql],A.bl("ab<+(m,m)>"))
D.bsw=new A.ee(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bs4=new A.ee(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bs_=new A.ee(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bs8=new A.ee(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.brW=new A.ee(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bsa=new A.ee(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bsy=new A.ee(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.brX=new A.ee(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bs3=new A.ee(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bsc=new A.ee(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.brV=new A.ee(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bsq=new A.ee(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bsn=new A.ee(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bs2=new A.ee(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bsk=new A.ee(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bsj=new A.ee(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.brU=new A.ee(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bs7=new A.ee(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bsh=new A.ee(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bsm=new A.ee(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TC=w([D.bsw,D.bs4,D.bs_,D.bs8,D.brW,D.bsa,D.bsy,D.brX,D.bs3,D.bsc,D.brV,D.bsq,D.bsn,D.bs2,D.bsk,D.bsj,D.brU,D.bs7,D.bsh,D.bsm],A.bl("ab<+(m,m,a6,a6,m)>"))
D.aSC=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_v=new C.H2(0,"youtube")
D.a_w=new C.H2(1,"tiktok")
D.GJ=new C.H2(2,"instagram")
D.a_x=new C.H2(3,"facebook")
D.bkD=new C.H2(4,"other")
D.bw2=new A.an(3,null,null,null)
D.bwJ=new A.iB(4,10,8,0.52,null)
D.bLH=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bA0=new A.aT(D.bLH,null,null,null,null,null,null,null,null,null,null,null,null,B.B,!1,null,null,null,B.m,null)
D.bD5=new A.M(!0,B.c,null,null,null,null,11,B.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLu=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bX1=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bXP=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bXV=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c1y=new C.aDr(null)})();(function staticFields(){$.dhc=20
$.apC=null
$.bc2=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dYP","DQ",()=>A.QZ(0))
w($,"dYQ","LE",()=>A.QZ(null))})()};
(a=>{a["BcCVHJpVzYWlsbnGodHjn5iFg/E="]=a.current})($__dart_deferred_initializers__);