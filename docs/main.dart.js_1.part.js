((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dXz(d,e){A.a5(d,!1).cr(A.e2(new C.d4f(e),!0,null,x.H))},
V6(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V6=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LP()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a5,B.W),t)
w=3
return A.b(A.d0(B.E,new C.d4e(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V6)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dFn(r)
if(q==null){d.F(x.q).f.O(D.bCh)
w=1
break}w=4
return A.b(A.bL(B.fO,null,x.H),$async$V6)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.diV=n
p=C.dFh(n)
n=$.DR()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d81(q)
d.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V6,v)},
diY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aP(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aP(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mU(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H3(d){return C.dFq(d)},
dFq(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H3=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$H3)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cv(r)?10:11
break
case 10:k=J.eS(r,x.f)
k=A.dk(k,new C.bcT(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("aa<K.E>")
i=A.C(new A.aa(k,new C.bcU(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dj_(q)
w=12
return A.b(C.H2(a3,p),$async$H3)
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
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.diY(A.P(n,x.N,x.z))
l=C.dj_(A.a([m],x.e))
w=21
return A.b(C.H2(a3,l),$async$H3)
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
case 18:case 14:q=C.dFo()
w=22
return A.b(C.H2(a3,q),$async$H3)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H3,v)},
dj_(d){var w=A.V(d).j("B<1,m>"),v=new A.B(d,new C.bcL(),w).eq(0),u=new A.B(d,new C.bcM(),w).eq(0),t=new A.B(d,new C.bcN(),w).eq(0),s=new A.B(d,new C.bcO(),w).eq(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d82(null,q,u,t,v,s));++q}return r},
apZ(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apZ=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H3(d),$async$apZ)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d5(t,new C.bcP(),s).eq(0)
p=r.d5(t,new C.bcQ(),s).eq(0)
o=r.d5(t,new C.bcR(),s).eq(0)
n=r.d5(t,new C.bcS(),s).eq(0)
m=C.d82(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H2(d,t),$async$apZ)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apZ,v)},
H2(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H2=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$H2)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcK(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.ak(s,null)),$async$H2)
case 3:return A.f(null,v)}})
return A.h($async$H2,v)},
dFo(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d82(w,w,t,s,u,r)
return q},
d82(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.js(),h=d==null,g=D.TV[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TV[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bcJ(),A.V(p).j("B<1,m>")).fa(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bj(B.n.j1(i.by(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aUE[w]
j=D.aOw[w]
return new C.mU("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dFp(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a0().W())},
dFp(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.j1(d.by(256),16),2,"0")
return B.d.fa(v)},
d4f:function d4f(d){this.a=d},
d4e:function d4e(d,e){this.a=d
this.b=e},
d4a:function d4a(d){this.a=d},
d4b:function d4b(d){this.a=d},
d4c:function d4c(d){this.a=d},
d4d:function d4d(d,e){this.a=d
this.b=e},
K6:function K6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mU:function mU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcT:function bcT(){},
bcU:function bcU(){},
bcL:function bcL(){},
bcM:function bcM(){},
bcN:function bcN(){},
bcO:function bcO(){},
bcP:function bcP(){},
bcQ:function bcQ(){},
bcR:function bcR(){},
bcS:function bcS(){},
bcK:function bcK(){},
bcJ:function bcJ(){},
H1:function H1(d,e){this.c=d
this.a=e},
aaG:function aaG(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvJ:function cvJ(){},
cvI:function cvI(d,e){this.a=d
this.b=e},
cvG:function cvG(d){this.a=d},
cvH:function cvH(d,e){this.a=d
this.b=e},
cvK:function cvK(d){this.a=d},
cvO:function cvO(d){this.a=d},
cvP:function cvP(d,e){this.a=d
this.b=e},
cvN:function cvN(d,e,f){this.a=d
this.b=e
this.c=f},
cvM:function cvM(d,e){this.a=d
this.b=e},
cvL:function cvL(d,e){this.a=d
this.b=e},
cvQ:function cvQ(d){this.a=d},
Sw:function Sw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBK:function aBK(d,e){this.c=d
this.a=e},
H0:function H0(d,e){this.c=d
this.a=e},
aCH:function aCH(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvD:function cvD(d){this.a=d},
cvE:function cvE(d){this.a=d},
cvF:function cvF(d){this.a=d},
cvC:function cvC(d,e){this.a=d
this.b=e},
cvz:function cvz(d){this.a=d},
cvA:function cvA(d){this.a=d},
cvy:function cvy(d,e){this.a=d
this.b=e},
cvB:function cvB(d){this.a=d},
cvx:function cvx(d){this.a=d},
aJh:function aJh(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJi:function aJi(d,e,f){this.c=d
this.d=e
this.a=f},
aCN:function aCN(d,e){this.c=d
this.a=e},
aJg:function aJg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cK5:function cK5(d){this.a=d},
cK6:function cK6(d){this.a=d},
aDX:function aDX(d){this.a=d},
ay5:function ay5(d,e){this.c=d
this.a=e},
dFn(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dFm(v)
if(u!=null)return new C.oW(w,C.d80(u,!1),D.a_M,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dFl(v)
if(t!=null)return new C.oW(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_N,"TikTok",q)
s=C.dFk(w,v)
if(s!=null)return s
r=C.dFj(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oW(w,w,D.bmA,"Video",q)
return q},
dFk(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/reel/"+w+u,D.H2,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/p/"+w+u,D.H2,t,null)}return null},
dFj(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oW(d,"https://www.facebook.com/plugins/video.php?href="+A.eA(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_O,"Facebook",null)},
dFm(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cW(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dFl(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cW(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
H4:function H4(d,e){this.a=d
this.b=e},
oW:function oW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1z:function a1z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCI:function aCI(d,e){var _=this
_.d=$
_.cP$=d
_.aR$=e
_.c=_.a=null},
aE0:function aE0(d,e){this.c=d
this.a=e},
czI:function czI(d){this.a=d},
czJ:function czJ(d){this.a=d},
CD:function CD(d,e){this.c=d
this.a=e},
afg:function afg(){},
diZ(d,e,f,g,h,i){return new C.a1A(i,f,h,e,g,d)},
dWf(d){var w=window
w.toString
A.fM(w,"message",new C.d0s(d),!1,x._)},
a1A:function a1A(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaH:function aaH(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvR:function cvR(d){this.a=d},
cvZ:function cvZ(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvV:function cvV(d){this.a=d},
cvW:function cvW(d){this.a=d},
cvT:function cvT(d){this.a=d},
cvY:function cvY(d){this.a=d},
cvU:function cvU(d){this.a=d},
cvS:function cvS(d){this.a=d},
d0s:function d0s(d){this.a=d},
diT(){var w,v,u
try{v=A.yh()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d80(d,e){var w=C.diT(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eA(2,w,B.aP,!1))
v.push("widget_referrer="+A.eA(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d8_(d){var w=A.aq(y.c,!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
diU(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dFg(d,e,f){var w,v,u=C.d8_(d)
if(u!=null){if(f){w=C.diT()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.diU(C.d80(u,e))}return C.diU(d)},
dFh(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dFi(d){var w
if($.LP().a==null)return!1
w=$.DR().a
return d>=w&&d<w+4},
diX(){var w=$.apY
if(w!=null)w.a7(0)
$.apY=null
$.DR().sv(0,0)},
diW(){var w,v,u,t=$.LP()
if(t.a==null)return
w=$.apY
if(w!=null)w.a7(0)
v=$.diV
if(v<=4){t=t.a
t.toString
C.d81(t)
return}w=$.DR()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d81(t)},
d81(d){var w=$.apY
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
default:w=null}$.apY=A.dn(A.d6(0,0,0,0,0,w),C.dWq())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K6.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.n(20),s=A.U(B.R.l(0.25),B.o,1),r=A.Z(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eE,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bU,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.el,w,w,w)}}
C.mU.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H1.prototype={
S(){return new C.aaG(A.a([],x.e))},
ges(){return this.c}}
C.aaG.prototype={
Z(){var w=this
w.a3()
$.DR().aj(0,w.gas8())
C.dWf(w.gbed())
w.Vp()},
bdD(){if(this.c!=null)this.n(new C.cvJ())},
bee(){C.diW()},
p(){$.DR().V(0,this.gas8())
C.diX()
$.LP().sv(0,null)
this.a2()},
Vp(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vp=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H3(t.a.c),$async$Vp)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvI(t,s))
$.bcI=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vp,v)},
RD(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RD=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cvG(t))
w=3
return A.b(C.apZ(t.a.c),$async$RD)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvH(t,s))
$.bcI=J.a3(t.d)
t.c.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RD,v)},
bg5(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.e2(new C.cvK(d),!1,null,x.H))},
bgH(){var w=this.c
w.toString
return C.V6(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.ea:B.bF,s=A.aJ(v,v,v,v,B.Ff,v,v,v,new C.cvO(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Ba(A.G(A.a([A.H(new A.I(B.ia,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.P,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.aW(!1,v,!0,new A.I(B.aK,A.Z(B.eR,B.R,v,v,28),v),B.cc,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgG(),v,v,v,v,v,v,v),B.h,B.E,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.ca(!0,A.y(A.a([new A.I(D.OL,r,v),A.H(w.e?B.la:new A.ir($.LP(),new C.cvP(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a_,!0,!0)
return A.cd(v,t,s,v,!1,!1,A.akO(B.R,B.AT,B.n8,D.bZL,w.e?v:new C.cvQ(w)),v)}}
C.Sw.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.cv,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1z(n,!0,!C.dFi(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ii,B.lh,u,u,22),B.am,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vD,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cw(p,A.hx(A.y(A.a([new C.aBK(o,u),A.H(n,1),A.u(u,A.G(A.a([A.Z(B.t2,B.R.l(0.85),u,u,9),D.byc,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.ac,u,u,u,u,u,D.amN,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.au),B.h,u,u,new A.t(u,u,r,s,q,D.SL,B.k),u,u,u,B.fa,u,u,u),1),B.am,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.E,0,u,u,u,u,u,B.a1)}}
C.aBK.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pi,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.ac,w,w,w,w,w,B.OB,w,w,w)}}
C.H0.prototype={
S(){return new C.aCH()}}
C.aCH.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.ea:B.bF,t=A.aJ(w,w,w,w,B.Ff,w,w,w,new C.cvD(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cd(w,u,A.ca(!0,A.y(A.a([new A.I(D.OL,A.G(A.a([t,A.H(new A.Ba(A.G(A.a([A.H(new A.I(B.ia,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.P,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.aW(!1,w,!0,new A.I(B.aK,A.Z(B.eR,B.R,w,w,28),w),B.cc,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvE(d),w,w,w,w,w,w,w),B.h,B.E,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ir($.LP(),new C.cvF(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a_,!0,!0),w,!1,!1,w,w)}}
C.aJh.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.en,28),new A.ag(0,B.x,B.q.l(0.45),B.cy,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.diZ(new A.df(v+"_full_"+u,x.W),!1,u,!1,w.gaGL(),v+"_full")
w=v}else w=new C.aCN(t.r,s)}else w=new C.ay5(m,s)
else w=D.c4d
return A.u(s,A.cw(n,A.hx(A.y(A.a([new C.aJi(m,l,s),A.H(w,1),new C.aJg(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.au),B.h,s,s,new A.t(s,s,o,q,p,D.SL,B.k),s,r*2.05,s,B.bg,s,s,r)}}
C.aJi.prototype={
B(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dd(r)
r=A.h5(r)
w=new A.de(q,r)
v=w.gGK()===0?12:w.gGK()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eM:B.hy)===B.eM?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lV,s,s,s),B.b5,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bb,D.axh,B.dB,D.awv,B.dB,D.axl],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.am,A.G(A.a([A.Z(B.F8,B.R.l(0.9),s,s,12),B.dB,A.H(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.ac,s,s,s,s,s,D.anw,s,s,s)}}
C.aCN.prototype={
B(d){var w=null
return A.u(w,A.aS(A.y(A.a([A.Z(B.xo,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.ey(D.aAI,D.bNv,this.c,A.eu(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aF(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vD,w,w,w,w,w,w,w,w,1/0)}}
C.aJg.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as0(B.Rg,"YouTube",s===0,r,new C.cK5(u))
s=u.as0(B.jF,"Device",s===1,r,new C.cK6(u))
w=r?"Power off":"Power on"
v=r?D.Rh:D.aux
return A.u(t,A.G(A.a([q,B.Z,s,B.b5,A.aJ(t,t,t,t,A.Z(v,r?B.b4:B.dz,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cE)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.ac,t,t,t,t,t,D.anj,t,t,t)},
as0(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aX
else w=f?B.R:B.a8
v=f&&g?B.R.l(0.15):B.E
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.I(B.ls,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aDX.prototype={
B(d){return D.adK}}
C.ay5.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jY,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qA("Serial",u.c),q=w.qA("Model",u.d),p=w.qA("Device ID",u.e),o=w.qA("IMEI",u.r),n=w.qA("MAC",u.f),m=w.qA("OS",u.w+" "+u.x),l=w.qA("Location",u.y+", "+u.z),k=w.qA("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qA("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.am,s,B.U,r,q,p,o,n,m,l,k,j,w.qA("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aK,v,v,B.a0,!1)},
qA(d,e){var w=null
return new A.I(B.c7,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c0,A.j(e,w,w,w,w,w,w,D.bFi,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H4.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oW.prototype={
gaGL(){var w=this.c
return w===D.a_M||w===D.a_N||w===D.H2||w===D.a_O}}
C.a1z.prototype={
S(){return new C.aCI(null,null)}}
C.aCI.prototype={
Z(){this.a3()
var w=A.bE(null,B.ro,null,1,null,this)
w.no(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQe()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dP(t,new A.t(t,t,t,t,t,new A.ap(B.cW,B.c4,B.A,A.a([B.E,B.q.l(0.55)],x.O),t,t),B.k),B.bB),q=x.Y,p=u.d
p===$&&A.c()
p=A.ct(B.i5,p,t)
w=B.c.l(0.92)
q=A.aS(new A.d_(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bk.T>")),!1,A.Z(B.ii,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lh
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aE0(s,t),r,q,A.b6(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b6(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b6(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aK(B.a6,t,B.aT,B.m,s,t)}}
C.aE0.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kC(u,new C.czI(this),B.by,!0,w,w,new C.czJ(this),w)
return new C.CD(v,w)}}
C.CD.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.r9,B.Ln],x.O),B.ii)
break
case 1:w=new A.aI(A.a([B.vD,D.ahH],x.O),B.jH)
break
case 2:w=new A.aI(A.a([D.ajc,D.ahg],x.O),B.xx)
break
case 3:w=new A.aI(A.a([B.P,B.cG],x.O),B.xB)
break
case 4:w=new A.aI(A.a([B.ac,B.ak],x.O),B.n4)
break
default:w=u}v=w.a
return A.u(u,A.aS(A.Z(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.al,B.at,B.A,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afg.prototype={
p(){var w=this,v=w.aR$
if(v!=null)v.V(0,w.gdu())
w.aR$=null
w.a2()},
bp(){this.bF()
this.bD()
this.dv()}}
C.a1A.prototype={
S(){return new C.aaH()}}
C.aaH.prototype={
bwW(d,e){var w=C.d8_(d)
if(w!=null)return C.d80(w,e)
return d},
a3I(d,e){var w,v=this,u=C.d8_(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwW(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dFg(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buP(){var w,v=this
if(v.w)return
v.n(new C.cvR(v))
w=v.e
if(w!=null)v.a3I(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aL()
u.d=w
try{$.DS()
$.oo().rQ(w,new C.cvZ(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvS(v))
w=v.e
w.toString
v.a3I(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Rw,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.D,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hx(A.aS(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yk(n,B.pU,w)],v)
if(o.f)w.push(A.hx(A.aS(new A.an(28,28,D.aeD,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aX,B.o,1)
q=A.Z(B.Fb,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eG(0,A.aT(!1,B.M,!0,n,A.aW(!1,n,!0,A.aS(A.u(n,A.G(A.a([q,B.Z,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuO(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aK(B.a6,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mU)","~()","H1(R)","mU(X<@,@>)","a0(mU)","X<m,@>(mU)","aw<~>()","H0(R)","ir<S>(R,oW?,o?)","Sw(R,S)","ra(R,oW?,o?)","CD(R,ak,dw?)"])
C.d4f.prototype={
$1(d){return new C.H1(this.a,null)},
$S:z+2}
C.d4e.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cL,B.P],j):A.a([B.c,B.a9],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.en,32)],x.V),g=A.U(m?B.bt:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.aw9,B.h,n,n,new A.t(B.R.l(0.18),n,A.U(B.R.l(0.45),B.o,1),n,n,n,B.aj),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.am,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ag,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.eD,w,A.aJ(n,n,n,n,A.Z(B.cu,m?B.a8:B.ci,n,n,n),n,n,n,new C.d4a(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a3,B.a4,B.A,j,n,n),B.k),n,n,n,B.Ok,n,n,n)
e=A.e5(B.bT,A.a([new C.K6("YouTube",B.F7,m,n),new C.K6("TikTok",B.jH,m,n),new C.K6("Instagram",B.xx,m,n),new C.K6("Facebook",B.xB,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bA:B.fK,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bF
r=A.Z(B.jG,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bt:B.ax
u=A.y(A.a([e,B.ar,A.au(n,B.y,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bl(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Kd),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.G,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.O,n,n,n,n)],v),B.af,B.e,B.f,0,B.l)
e=A.j0(D.awd,D.bYS,new C.d4b(d),A.iE(n,n,n,n,n,n,n,n,n,n,n,m?B.aF:B.ag,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dP(A.cw(f,A.y(A.a([j,new A.I(D.aoz,u,n),new A.I(D.aoM,A.G(A.a([e,B.b5,A.bQ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d4c(d),n,n),B.Z,A.dF(D.aAp,D.bZF,new C.d4d(d,w),A.bs(B.R,n,n,n,B.c,n,D.O7,n,new A.bB(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.af,B.e,B.Q,0,B.l),B.au),new A.t(n,n,g,k,h,new A.ap(B.al,B.at,B.A,i,n,n),B.k),B.bB),n)},
$S:73}
C.d4a.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4b.prototype={
$0(){C.diX()
$.LP().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d4c.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4d.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcT.prototype={
$1(d){return C.diY(A.P(d,x.N,x.z))},
$S:z+3}
C.bcU.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcL.prototype={
$1(d){return d.c},
$S:z+0}
C.bcM.prototype={
$1(d){return d.r},
$S:z+0}
C.bcN.prototype={
$1(d){return d.f},
$S:z+0}
C.bcO.prototype={
$1(d){return d.at},
$S:z+0}
C.bcP.prototype={
$1(d){return d.c},
$S:z+0}
C.bcQ.prototype={
$1(d){return d.r},
$S:z+0}
C.bcR.prototype={
$1(d){return d.f},
$S:z+0}
C.bcS.prototype={
$1(d){return d.at},
$S:z+0}
C.bcK.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bcJ.prototype={
$1(d){return B.a.bj(B.n.j1(d,16),2,"0").toUpperCase()},
$S:77}
C.cvJ.prototype={
$0(){},
$S:0}
C.cvI.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvG.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvH.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvK.prototype={
$1(d){return new C.H0(this.a,null)},
$S:z+7}
C.cvO.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvP.prototype={
$3(d,e,f){return new A.ir($.DR(),new C.cvN(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvN.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AC(d,k,x.Q)
w=w==null?k:w.gkp()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.U(B.R.l(0.35),B.o,1)
q=A.Z(B.ii,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DR().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Z,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.P,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cn,B.ey,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cw(s,new A.iO(1.7777777777777777,C.diZ(new A.df("fleet_master_"+r,x.W),!0,r,!0,j.gaGL(),"fleet_master"),k),B.au),B.U],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wr(0,B.m,k,B.r,k,k,k,k,!1,k,B.a0,!1,A.a([new A.ke(new A.I(B.CX,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.o4(D.amX,A.ats(new A.n3(new C.cvM(i,j),J.a3(i.d),!1,!0,!0,A.tp(),k),D.byU),k)],w))},
$S:1600}
C.cvM.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sw(v,e,J.a3(w.d),new C.cvL(w,v),this.b,null)},
$S:z+9}
C.cvL.prototype={
$0(){return this.a.bg5(this.b)},
$S:0}
C.cvQ.prototype={
$0(){this.a.RD()
return null},
$S:0}
C.cvD.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvE.prototype={
$0(){C.V6(this.a,$.bcI)
return null},
$S:0}
C.cvF.prototype={
$3(d,e,f){return A.fJ(new C.cvC(this.a,e))},
$S:z+10}
C.cvC.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aS(A.cj(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.ar,new C.aJh(u,s.a.c,s.e,s.d,new C.cvz(s),new C.cvA(s),new C.cvB(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wK,v,v,B.a0),v,v,v)},
$S:1601}
C.cvz.prototype={
$0(){var w=this.a.c
w.toString
C.V6(w,$.bcI)
return null},
$S:0}
C.cvA.prototype={
$1(d){var w=this.a
return w.n(new C.cvy(w,d))},
$S:36}
C.cvy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvB.prototype={
$0(){var w=this.a
return w.n(new C.cvx(w))},
$S:0}
C.cvx.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cK5.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cK6.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czI.prototype={
$3(d,e,f){return new C.CD(this.a.c,null)},
$S:z+11}
C.czJ.prototype={
$3(d,e,f){if(f==null)return e
return new A.aK(B.a6,null,B.aT,B.m,A.a([new C.CD(this.a.c,null),D.adZ],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.cvR.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvZ.prototype={
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
w.a3I(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fM(v,"load",new C.cvX(w),!1,u)
v=w.e
v.toString
A.fM(v,"error",new C.cvY(w),!1,u)
w=w.e
w.toString
return w},
$S:574}
C.cvX.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvV(w))
A.bL(B.C,new C.cvW(w),x.H)}},
$S:42}
C.cvV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvW.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvT(w))},
$S:12}
C.cvT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvU(w))},
$S:42}
C.cvU.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvS.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d0s.prototype={
$1(d){var w,v,u,t,s=new A.Cc([],[]).G2(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1602};(function aliases(){var w=C.afg.prototype
w.aQe=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaG.prototype,"gas8","bdD",1)
w(u,"gbed","bee",1)
w(u,"gbgG","bgH",6)
w(C.aaH.prototype,"gbuO","buP",1)
v(C,"dWq","diW",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wj,[C.d4f,C.d4e,C.bcT,C.bcU,C.bcL,C.bcM,C.bcN,C.bcO,C.bcP,C.bcQ,C.bcR,C.bcS,C.bcK,C.bcJ,C.cvK,C.cvP,C.cvN,C.cvF,C.cvA,C.czI,C.czJ,C.cvZ,C.cvX,C.cvY,C.d0s])
v(A.WB,[C.d4a,C.d4b,C.d4c,C.d4d,C.cvJ,C.cvI,C.cvG,C.cvH,C.cvO,C.cvL,C.cvQ,C.cvD,C.cvE,C.cvz,C.cvy,C.cvB,C.cvx,C.cK5,C.cK6,C.cvR,C.cvV,C.cvW,C.cvT,C.cvU,C.cvS])
v(A.az,[C.K6,C.Sw,C.aBK,C.aJh,C.aJi,C.aCN,C.aJg,C.aDX,C.ay5,C.aE0,C.CD])
v(A.ak,[C.mU,C.oW])
v(A.ac,[C.H1,C.H0,C.a1z,C.a1A])
v(A.ad,[C.aaG,C.aCH,C.afg,C.aaH])
v(A.WC,[C.cvM,C.cvC])
u(C.H4,A.ayZ)
u(C.aCI,C.afg)
w(C.afg,A.e3)})()
A.dme(b.typeUniverse,JSON.parse('{"H1":{"ac":[],"o":[]},"Sw":{"az":[],"o":[]},"H0":{"ac":[],"o":[]},"K6":{"az":[],"o":[]},"aaG":{"ad":["H1"]},"aBK":{"az":[],"o":[]},"aCH":{"ad":["H0"]},"aJh":{"az":[],"o":[]},"aJi":{"az":[],"o":[]},"aCN":{"az":[],"o":[]},"aJg":{"az":[],"o":[]},"aDX":{"az":[],"o":[]},"ay5":{"az":[],"o":[]},"a1z":{"ac":[],"o":[]},"CD":{"az":[],"o":[]},"aCI":{"ad":["a1z"]},"aE0":{"az":[],"o":[]},"a1A":{"ac":[],"o":[]},"aaH":{"ad":["a1A"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mU>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<S>"),X:w("ae<mU>"),a:w("ae<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mR"),_:w("Az"),k:w("mU"),N:w("m"),Y:w("bn<a8>"),W:w("df<m>"),J:w("ir<S>"),j:w("ir<oW?>"),E:w("vi<cx>"),q:w("Td"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rh=new A.M(983224,"MaterialIcons",!1)
D.ayU=new A.a6(D.Rh,48,B.aX,null,null,null)
D.bEX=new A.O(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMq=new A.x("Powered off",null,D.bEX,null,null,null,null,null,null,null,null,null)
D.aMB=w([D.ayU,B.D,D.bMq],x.p)
D.akm=new A.fk(B.a0,B.e,B.Q,B.i,null,B.l,null,0,D.aMB,null)
D.adK=new A.dh(B.L,null,null,D.akm,null)
D.byA=new A.an(18,18,B.L5,null)
D.adZ=new A.dh(B.L,null,null,D.byA,null)
D.aeD=new A.h8(2,null,null,null,null,B.T,null,null,null,null)
D.ahg=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahH=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajc=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amN=new A.W(0,3,0,3)
D.amX=new A.W(10,0,10,88)
D.anj=new A.W(12,6,12,10)
D.anw=new A.W(14,8,14,6)
D.O7=new A.W(18,12,18,12)
D.aoz=new A.W(20,18,20,8)
D.aoM=new A.W(20,8,20,20)
D.OL=new A.W(8,6,15,8)
D.aux=new A.M(983222,"MaterialIcons",!1)
D.aw9=new A.a6(B.ii,26,B.R,null,null,null)
D.awd=new A.a6(B.Qr,18,null,null,null,null)
D.awv=new A.a6(B.pi,14,B.T,null,null,null)
D.auN=new A.M(983420,"MaterialIcons",!1)
D.axh=new A.a6(D.auN,14,B.T,null,null,null)
D.at_=new A.M(62895,"MaterialIcons",!1)
D.axl=new A.a6(D.at_,14,B.T,null,null,null)
D.aAp=new A.a6(B.iV,20,null,null,null,null)
D.aAI=new A.a6(B.eR,16,null,null,null,null)
D.aP1=w([B.ak,B.P],x.O)
D.SL=new A.ap(B.al,B.at,B.A,D.aP1,null,null)
D.bsv=new A.aI("NGMY OS","14.2.1")
D.brm=new A.aI("VirtualDroid","13.8.4")
D.brl=new A.aI("NGMY OS","15.0.0")
D.bs4=new A.aI("VirtualDroid","14.1.2")
D.brj=new A.aI("NGMY Tab OS","12.9.7")
D.brh=new A.aI("NGMY OS","13.5.3")
D.br6=new A.aI("VirtualDroid","15.2.0")
D.brI=new A.aI("NGMY OS","14.8.1")
D.bsa=new A.aI("NGMY Tab OS","13.2.4")
D.bsF=new A.aI("VirtualDroid","12.6.9")
D.br2=new A.aI("NGMY OS","16.0.1")
D.bqU=new A.aI("VirtualDroid","14.9.0")
D.bsn=new A.aI("NGMY Tab OS","14.0.3")
D.brv=new A.aI("NGMY OS","13.1.8")
D.br1=new A.aI("VirtualDroid","13.4.5")
D.brg=new A.aI("NGMY OS","15.3.2")
D.bsb=new A.aI("NGMY Tab OS","12.4.1")
D.bsp=new A.aI("VirtualDroid","16.1.0")
D.brH=new A.aI("NGMY OS","14.4.6")
D.bsw=new A.aI("VirtualDroid","15.0.8")
D.aOw=w([D.bsv,D.brm,D.brl,D.bs4,D.brj,D.brh,D.br6,D.brI,D.bsa,D.bsF,D.br2,D.bqU,D.bsn,D.brv,D.br1,D.brg,D.bsb,D.bsp,D.brH,D.bsw],A.bf("ab<+(m,m)>"))
D.buH=new A.eh(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buf=new A.eh(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bua=new A.eh(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buj=new A.eh(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bu6=new A.eh(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bul=new A.eh(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buJ=new A.eh(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bu7=new A.eh(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bue=new A.eh(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bun=new A.eh(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bu5=new A.eh(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buB=new A.eh(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buy=new A.eh(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bud=new A.eh(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buv=new A.eh(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.buu=new A.eh(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bu4=new A.eh(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bui=new A.eh(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bus=new A.eh(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bux=new A.eh(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TV=w([D.buH,D.buf,D.bua,D.buj,D.bu6,D.bul,D.buJ,D.bu7,D.bue,D.bun,D.bu5,D.buB,D.buy,D.bud,D.buv,D.buu,D.bu4,D.bui,D.bus,D.bux],A.bf("ab<+(m,m,a8,a8,m)>"))
D.aUE=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_M=new C.H4(0,"youtube")
D.a_N=new C.H4(1,"tiktok")
D.H2=new C.H4(2,"instagram")
D.a_O=new C.H4(3,"facebook")
D.bmA=new C.H4(4,"other")
D.byc=new A.an(3,null,null,null)
D.byU=new A.i8(4,10,8,0.52,null)
D.bNI=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCh=new A.aR(D.bNI,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.m,null)
D.bFi=new A.O(!0,B.c,null,null,null,null,11,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNv=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bYS=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZF=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZL=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4d=new C.aDX(null)})();(function staticFields(){$.diV=20
$.apY=null
$.bcI=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_I","DR",()=>A.Rb(0))
w($,"e_J","LP",()=>A.Rb(null))})()};
(a=>{a["qLXyT2RLR4DJ8DVkS5mX7LG4T/c="]=a.current})($__dart_deferred_initializers__);