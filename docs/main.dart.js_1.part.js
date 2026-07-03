((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dVC(d,e){A.a5(d,!1).cv(A.e7(new C.d2x(e),!0,null,x.H))},
US(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$US=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LE()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a4,B.S),t)
w=3
return A.b(A.da(B.C,new C.d2w(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$US)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dDv(r)
if(q==null){d.F(x.q).f.O(D.bzZ)
w=1
break}w=4
return A.b(A.bM(B.fK,null,x.H),$async$US)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.dh8=n
p=C.dDp(n)
n=$.DR()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6h(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$US,v)},
dhb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
H2(d){return C.dDy(d)},
dDy(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H2=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H2)
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
break}p=C.dhd(q)
w=12
return A.b(C.H1(a3,p),$async$H2)
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
case 19:m=C.dhb(A.O(n,x.N,x.z))
l=C.dhd(A.a([m],x.e))
w=21
return A.b(C.H1(a3,l),$async$H2)
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
case 18:case 14:q=C.dDw()
w=22
return A.b(C.H1(a3,q),$async$H2)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H2,v)},
dhd(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bc5(),w).eF(0),u=new A.B(d,new C.bc6(),w).eF(0),t=new A.B(d,new C.bc7(),w).eF(0),s=new A.B(d,new C.bc8(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d6i(null,q,u,t,v,s));++q}return r},
apD(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apD=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H2(d),$async$apD)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d5(t,new C.bc9(),s).eF(0)
p=r.d5(t,new C.bca(),s).eF(0)
o=r.d5(t,new C.bcb(),s).eF(0)
n=r.d5(t,new C.bcc(),s).eF(0)
m=C.d6i(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H1(d,t),$async$apD)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apD,v)},
H1(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H1=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H1)
case 2:u=g
t=B.a.i(d)
s=J.b1(e,new C.bc4(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.ak(s,null)),$async$H1)
case 3:return A.f(null,v)}})
return A.h($async$H1,v)},
dDw(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dX(20,x.k)
for(w=0;w<20;++w)q[w]=C.d6i(w,w,t,s,u,r)
return q},
d6i(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.TB[B.n.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TB[B.n.an(h?e+r:d,20)]
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
k=D.aSy[w]
j=D.aN8[w]
return new C.mR("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dDx(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dDx(d,e){var w,v=J.dX(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.jg(d.by(256),16),2,"0")
return B.d.f9(v)},
d2x:function d2x(d){this.a=d},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2s:function d2s(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d,e){this.a=d
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
H0:function H0(d,e){this.c=d
this.a=e},
aat:function aat(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cva:function cva(){},
cv9:function cv9(d,e){this.a=d
this.b=e},
cv7:function cv7(d){this.a=d},
cv8:function cv8(d,e){this.a=d
this.b=e},
cvb:function cvb(d){this.a=d},
cvf:function cvf(d){this.a=d},
cvg:function cvg(d,e){this.a=d
this.b=e},
cve:function cve(d,e,f){this.a=d
this.b=e
this.c=f},
cvd:function cvd(d,e){this.a=d
this.b=e},
cvc:function cvc(d,e){this.a=d
this.b=e},
cvh:function cvh(d){this.a=d},
Sg:function Sg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBg:function aBg(d,e){this.c=d
this.a=e},
H_:function H_(d,e){this.c=d
this.a=e},
aCe:function aCe(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cv4:function cv4(d){this.a=d},
cv5:function cv5(d){this.a=d},
cv6:function cv6(d){this.a=d},
cv3:function cv3(d,e){this.a=d
this.b=e},
cv0:function cv0(d){this.a=d},
cv1:function cv1(d){this.a=d},
cv_:function cv_(d,e){this.a=d
this.b=e},
cv2:function cv2(d){this.a=d},
cuZ:function cuZ(d){this.a=d},
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
cIE:function cIE(d){this.a=d},
cIF:function cIF(d){this.a=d},
aDr:function aDr(d){this.a=d},
axF:function axF(d,e){this.c=d
this.a=e},
dDv(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dDu(v)
if(u!=null)return new C.oR(w,C.d6g(u,!1),D.a_u,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dDt(v)
if(t!=null)return new C.oR(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_v,"TikTok",q)
s=C.dDs(w,v)
if(s!=null)return s
r=C.dDr(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oR(w,w,D.bkz,"Video",q)
return q},
dDs(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oR(d,"https://www.instagram.com/reel/"+w+u,D.GH,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oR(d,"https://www.instagram.com/p/"+w+u,D.GH,t,null)}return null},
dDr(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oR(d,"https://www.facebook.com/plugins/video.php?href="+A.eB(2,d,B.aO,!1)+"&show_text=false&width=734",D.a_w,"Facebook",null)},
dDu(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dDt(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H3:function H3(d,e){this.a=d
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
cyp:function cyp(d){this.a=d},
cyq:function cyq(d){this.a=d},
CD:function CD(d,e){this.c=d
this.a=e},
af3:function af3(){},
dhc(d,e,f,g,h,i){return new C.a1r(i,f,h,e,g,d)},
dUi(d){var w=window
w.toString
A.h5(w,"message",new C.cZK(d),!1,x._)},
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
cvi:function cvi(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvk:function cvk(d){this.a=d},
cvp:function cvp(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvj:function cvj(d){this.a=d},
cZK:function cZK(d){this.a=d},
dh6(){var w,v,u
try{v=A.y9()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d6g(d,e){var w=C.dh6(),v=A.a([],x.s)
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
d6f(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dh7(d){var w=A.bn(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bn(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDo(d,e,f){var w,v,u=C.d6f(d)
if(u!=null){if(f){w=C.dh6()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dh7(C.d6g(u,e))}return C.dh7(d)},
dDp(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dDq(d){var w
if($.LE().a==null)return!1
w=$.DR().a
return d>=w&&d<w+4},
dha(){var w=$.apC
if(w!=null)w.a7(0)
$.apC=null
$.DR().sv(0,0)},
dh9(){var w,v,u,t=$.LE()
if(t.a==null)return
w=$.apC
if(w!=null)w.a7(0)
v=$.dh8
if(v<=4){t=t.a
t.toString
C.d6h(t)
return}w=$.DR()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6h(t)},
d6h(d){var w=$.apC
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
default:w=null}$.apC=A.dq(A.d8(0,0,0,0,0,w),C.dUt())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K4.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eD,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.Y:B.d7,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.el,w,w,w)}}
C.mR.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H0.prototype={
S(){return new C.aat(A.a([],x.e))},
gez(){return this.c}}
C.aat.prototype={
Z(){var w=this
w.a3()
$.DR().ai(0,w.garQ())
C.dUi(w.gbdE())
w.Vi()},
bd6(){if(this.c!=null)this.n(new C.cva())},
bdF(){C.dh9()},
p(){$.DR().V(0,this.garQ())
C.dha()
$.LE().sv(0,null)
this.a2()},
Vi(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vi=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H2(t.a.c),$async$Vi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv9(t,s))
$.bc2=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vi,v)},
RB(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RB=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cv7(t))
w=3
return A.b(C.apD(t.a.c),$async$RB)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv8(t,s))
$.bc2=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RB,v)},
bfx(d){var w=this.c
w.toString
A.a5(w,!1).cv(A.e7(new C.cvb(d),!1,null,x.H))},
bg8(){var w=this.c
w.toString
return C.US(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.T,t=u?B.dQ:B.d9,s=A.aI(v,v,v,v,B.EX,v,v,v,new C.cvf(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.B7(A.F(A.a([A.I(new A.H(B.i_,A.j(r,v,1,B.ae,v,v,v,A.l(v,v,u?B.c:B.U,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aP(!1,B.K,!0,v,A.aW(!1,v,!0,new A.H(B.aJ,A.a1(B.eQ,B.P,v,v,28),v),B.bX,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbg7(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a_)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cn(!0,A.y(A.a([new A.H(D.Ol,r,v),A.I(w.e?B.l5:new A.ip($.LE(),new C.cvg(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.akq(B.P,B.AA,B.mU,D.bXS,w.e?v:new C.cvh(w)),v)}}
C.Sg.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.cs,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1q(n,!0,!C.dDq(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.i7,B.lc,u,u,22),B.aj,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vn,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aP(!1,B.K,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cH(p,A.hS(A.y(A.a([new C.aBg(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.rW,B.P.l(0.85),u,u,9),D.bw0,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.amk,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.St,B.k),u,u,u,B.f8,u,u,u),1),B.aj,A.j(o.b,u,1,B.ae,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ae,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ae,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a_)}}
C.aBg.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.ae,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.p3,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oa,w,w,w)}}
C.H_.prototype={
S(){return new C.aCe()}}
C.aCe.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.T,u=v?B.dQ:B.d9,t=A.aI(w,w,w,w,B.EX,w,w,w,new C.cv4(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cn(!0,A.y(A.a([new A.H(D.Ol,A.F(A.a([t,A.I(new A.B7(A.F(A.a([A.I(new A.H(B.i_,A.j(s.b+" \xb7 "+s.c,w,1,B.ae,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aP(!1,B.K,!0,w,A.aW(!1,w,!0,new A.H(B.aJ,A.a1(B.eQ,B.P,w,w,28),w),B.bX,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cv5(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.ip($.LE(),new C.cv6(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aIL.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.eo,28),new A.ag(0,B.w,B.q.l(0.45),B.cC,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhc(new A.cG(v+"_full_"+u,x.W),!1,u,!1,w.gaGq(),v+"_full")
w=v}else w=new C.aCk(t.r,s)}else w=new C.axF(m,s)
else w=D.c1v
return A.u(s,A.cH(n,A.hS(A.y(A.a([new C.aIM(m,l,s),A.I(w,1),new C.aIK(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.St,B.k),s,r*2.05,s,B.bd,s,s,r)}}
C.aIM.prototype={
C(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h4(r)
w=new A.di(q,r)
v=w.gGA()===0?12:w.gGA()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eL:B.hp)===B.eL?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lO,s,s,s),B.b5,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b8,D.awT,B.dB,D.aw8,B.dB,D.awX],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.aj,A.F(A.a([A.a1(B.EQ,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.ae,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.an2,s,s,s)}}
C.aCk.prototype={
C(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.x2,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.ex(D.aAh,D.bLs,this.c,A.ey(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aK(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vn,w,w,w,w,w,w,w,w,1/0)}}
C.aIK.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arJ(B.QV,"YouTube",s===0,r,new C.cIE(u))
s=u.arJ(B.kv,"Device",s===1,r,new C.cIF(u))
w=r?"Power off":"Power on"
v=r?D.QW:D.au7
return A.u(t,A.F(A.a([q,B.a0,s,B.b5,A.aI(t,t,t,t,A.a1(v,r?B.b3:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cM)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amP,t,t,t)},
arJ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aP(!1,B.K,!0,u,A.aW(!1,A.n(10),!0,new A.H(B.ln,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a_),1)}}
C.aDr.prototype={
C(d){return D.ade}}
C.axF.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.ja,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.aj,s,B.R,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.ag(u,0,10):u)],x.p),v,B.aJ,v,v,B.Z,!1)},
qB(d,e){var w=null
return new A.H(B.bY,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cc,A.j(e,w,w,w,w,w,w,D.bD3,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H3.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oR.prototype={
gaGq(){var w=this.c
return w===D.a_u||w===D.a_v||w===D.GH||w===D.a_w}}
C.a1q.prototype={
S(){return new C.aCf(null,null)}}
C.aCf.prototype={
Z(){this.a3()
var w=A.bE(null,B.ri,null,1,null,this)
w.mp(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPR()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dS(t,new A.t(t,t,t,t,t,new A.aq(B.df,B.cd,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.by),q=x.Y,p=u.d
p===$&&A.c()
p=A.ca(B.hX,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d3(new A.aX(p,new A.bg(0.72,1,q),q.j("aX<be.T>")),!1,A.a1(B.i7,w,t,t,20),t),t,t,t)
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
if(u!=null&&u.length!==0)return A.kB(u,new C.cyp(this),B.bw,!0,w,w,new C.cyq(this),w)
return new C.CD(v,w)}}
C.CD.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.r_,B.KU],x.O),B.i7)
break
case 1:w=new A.aJ(A.a([B.vn,D.ahb],x.O),B.jD)
break
case 2:w=new A.aJ(A.a([D.aiF,D.agJ],x.O),B.xb)
break
case 3:w=new A.aJ(A.a([B.U,B.cO],x.O),B.xf)
break
case 4:w=new A.aJ(A.a([B.aa,B.ai],x.O),B.mQ)
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
bvU(d,e){var w=C.d6f(d)
if(w!=null)return C.d6g(w,e)
return d},
a3w(d,e){var w,v=this,u=C.d6f(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bvU(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDo(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btO(){var w,v=this
if(v.w)return
v.n(new C.cvi(v))
w=v.e
if(w!=null)v.a3w(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DS()
$.ok().rP(w,new C.cvq(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvj(v))
w=v.e
w.toString
v.a3w(w,v.a.d)}},
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
w=A.a([A.Y8(n,B.pG,w)],v)
if(o.f)w.push(A.hS(A.aU(new A.an(28,28,D.ae5,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b_,B.o,1)
q=A.a1(B.Rc,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fb(0,A.aP(!1,B.K,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.NK,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtN(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a_)))}return new A.aQ(B.a6,n,B.aV,B.m,w,n)}}
var z=a.updateTypes(["m(mR)","~()","H0(Q)","mR(W<@,@>)","a_(mR)","W<m,@>(mR)","ay<~>()","H_(Q)","ip<R>(Q,oR?,o?)","Sg(Q,R)","uc(Q,oR?,o?)","CD(Q,ak,dv?)"])
C.d2x.prototype={
$1(d){return new C.H0(this.a,null)},
$S:z+2}
C.d2w.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.T,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.U],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.eo,32)],x.V),g=A.U(m?B.bo:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.X.l(m?0.18:0.08)],j)
e=A.u(n,D.avN,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.aj,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.Y:B.aA,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.eY,w,A.aI(n,n,n,n,A.a1(B.cF,m?B.a7:B.cf,n,n,n),n,n,n,new C.d2s(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a5,B.y,j,n,n),B.k),n,n,n,B.NV,n,n,n)
e=A.et(B.c0,A.a([new C.K4("YouTube",B.EP,m,n),new C.K4("TikTok",B.jD,m,n),new C.K4("Instagram",B.xb,m,n),new C.K4("Facebook",B.xf,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bu:B.fH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d9
r=A.a1(B.jC,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.b2
u=A.y(A.a([e,B.as,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b6(4,q,B.M),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aK(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.JH),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.L,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.af,B.e,B.f,0,B.l)
e=A.iY(D.avR,D.bX_,new C.d2t(d),A.ji(n,n,n,n,n,n,n,n,n,n,n,m?B.aE:B.aA,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.V(12,0,12,12+l.f.d),A.dS(A.cH(f,A.y(A.a([j,new A.H(D.ao4,u,n),new A.H(D.aof,A.F(A.a([e,B.b5,A.bS(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.Y:B.a1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2u(d),n,n),B.a0,A.dJ(D.aA_,D.bXM,new C.d2v(d,w),A.bw(B.P,n,n,n,B.c,n,D.NK,n,new A.bF(A.n(14),B.M),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.af,B.e,B.O,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.by),n)},
$S:65}
C.d2s.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2t.prototype={
$0(){C.dha()
$.LE().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2u.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2v.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcd.prototype={
$1(d){return C.dhb(A.O(d,x.N,x.z))},
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
$S:76}
C.cva.prototype={
$0(){},
$S:0}
C.cv9.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cv7.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cv8.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvb.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+7}
C.cvf.prototype={
$0(){return A.a5(this.a,!1).ef()},
$S:0}
C.cvg.prototype={
$3(d,e,f){return new A.ip($.DR(),new C.cve(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cve.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Az(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.P.l(0.12)
s=A.n(12)
r=A.U(B.P.l(0.35),B.o,1)
q=A.a1(B.i7,B.P,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DR().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cr,B.eN,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cH(s,new A.iM(1.7777777777777777,C.dhc(new A.cG("fleet_master_"+r,x.W),!0,r,!0,j.gaGq(),"fleet_master"),k),B.aw),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zJ(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kd(new A.H(B.CE,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p0(D.amt,A.at6(new A.o_(new C.cvd(i,j),J.a3(i.d),!1,!0,!0,A.vR(),k),D.bwH),k)],w))},
$S:1590}
C.cvd.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sg(v,e,J.a3(w.d),new C.cvc(w,v),this.b,null)},
$S:z+9}
C.cvc.prototype={
$0(){return this.a.bfx(this.b)},
$S:0}
C.cvh.prototype={
$0(){this.a.RB()
return null},
$S:0}
C.cv4.prototype={
$0(){return A.a5(this.a,!1).ef()},
$S:0}
C.cv5.prototype={
$0(){C.US(this.a,$.bc2)
return null},
$S:0}
C.cv6.prototype={
$3(d,e,f){return A.fP(new C.cv3(this.a,e))},
$S:z+10}
C.cv3.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.co(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aIL(u,s.a.c,s.e,s.d,new C.cv0(s),new C.cv1(s),new C.cv2(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wo,v,v,B.Z),v,v,v)},
$S:1591}
C.cv0.prototype={
$0(){var w=this.a.c
w.toString
C.US(w,$.bc2)
return null},
$S:0}
C.cv1.prototype={
$1(d){var w=this.a
return w.n(new C.cv_(w,d))},
$S:38}
C.cv_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv2.prototype={
$0(){var w=this.a
return w.n(new C.cuZ(w))},
$S:0}
C.cuZ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cIE.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cIF.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cyp.prototype={
$3(d,e,f){return new C.CD(this.a.c,null)},
$S:z+11}
C.cyq.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.aV,B.m,A.a([new C.CD(this.a.c,null),D.ads],x.p),null)},
$C:"$3",
$R:3,
$S:376}
C.cvi.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvq.prototype={
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
w.a3w(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h5(v,"load",new C.cvo(w),!1,u)
v=w.e
v.toString
A.h5(v,"error",new C.cvp(w),!1,u)
w=w.e
w.toString
return w},
$S:511}
C.cvo.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvm(w))
A.bM(B.B,new C.cvn(w),x.H)}},
$S:42}
C.cvm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvn.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvk(w))},
$S:12}
C.cvk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvl(w))},
$S:42}
C.cvl.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvj.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZK.prototype={
$1(d){var w,v,u,t,s=new A.Cc([],[]).FS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1592};(function aliases(){var w=C.af3.prototype
w.aPR=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aat.prototype,"garQ","bd6",1)
w(u,"gbdE","bdF",1)
w(u,"gbg7","bg8",6)
w(C.aau.prototype,"gbtN","btO",1)
v(C,"dUt","dh9",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wb,[C.d2x,C.d2w,C.bcd,C.bce,C.bc5,C.bc6,C.bc7,C.bc8,C.bc9,C.bca,C.bcb,C.bcc,C.bc4,C.bc3,C.cvb,C.cvg,C.cve,C.cv6,C.cv1,C.cyp,C.cyq,C.cvq,C.cvo,C.cvp,C.cZK])
v(A.Wp,[C.d2s,C.d2t,C.d2u,C.d2v,C.cva,C.cv9,C.cv7,C.cv8,C.cvf,C.cvc,C.cvh,C.cv4,C.cv5,C.cv0,C.cv_,C.cv2,C.cuZ,C.cIE,C.cIF,C.cvi,C.cvm,C.cvn,C.cvk,C.cvl,C.cvj])
v(A.aA,[C.K4,C.Sg,C.aBg,C.aIL,C.aIM,C.aCk,C.aIK,C.aDr,C.axF,C.aDv,C.CD])
v(A.ak,[C.mR,C.oR])
v(A.ad,[C.H0,C.H_,C.a1q,C.a1r])
v(A.ae,[C.aat,C.aCe,C.af3,C.aau])
v(A.Wq,[C.cvd,C.cv3])
u(C.H3,A.ayy)
u(C.aCf,C.af3)
w(C.af3,A.e8)})()
A.dkr(b.typeUniverse,JSON.parse('{"H0":{"ad":[],"o":[]},"Sg":{"aA":[],"o":[]},"H_":{"ad":[],"o":[]},"K4":{"aA":[],"o":[]},"aat":{"ae":["H0"]},"aBg":{"aA":[],"o":[]},"aCe":{"ae":["H_"]},"aIL":{"aA":[],"o":[]},"aIM":{"aA":[],"o":[]},"aCk":{"aA":[],"o":[]},"aIK":{"aA":[],"o":[]},"aDr":{"aA":[],"o":[]},"axF":{"aA":[],"o":[]},"a1q":{"ad":[],"o":[]},"CD":{"aA":[],"o":[]},"aCf":{"ae":["a1q"]},"aDv":{"aA":[],"o":[]},"a1r":{"ad":[],"o":[]},"aau":{"ae":["a1r"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bl
return{V:w("ab<ag>"),O:w("ab<A>"),e:w("ab<mR>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<R>"),X:w("ac<mR>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mO"),_:w("Aw"),k:w("mR"),N:w("m"),Y:w("bg<a6>"),W:w("cG<m>"),J:w("ip<R>"),j:w("ip<oR?>"),E:w("yi<cC>"),q:w("SX"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.QW=new A.K(983224,"MaterialIcons",!1)
D.ayu=new A.a7(D.QW,48,B.b_,null,null,null)
D.bCI=new A.M(!0,B.bu,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKo=new A.x("Powered off",null,D.bCI,null,null,null,null,null,null,null,null,null)
D.aLx=w([D.ayu,B.z,D.bKo],x.p)
D.ajQ=new A.ej(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aLx,null)
D.ade=new A.dk(B.J,null,null,D.ajQ,null)
D.bwo=new A.an(18,18,B.KC,null)
D.ads=new A.dk(B.J,null,null,D.bwo,null)
D.ae5=new A.fN(2,null,null,null,null,B.Y,null,null,null,null)
D.agJ=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahb=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiF=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amk=new A.V(0,3,0,3)
D.amt=new A.V(10,0,10,88)
D.amP=new A.V(12,6,12,10)
D.an2=new A.V(14,8,14,6)
D.NK=new A.V(18,12,18,12)
D.ao4=new A.V(20,18,20,8)
D.aof=new A.V(20,8,20,20)
D.Ol=new A.V(8,6,15,8)
D.au7=new A.K(983222,"MaterialIcons",!1)
D.avN=new A.a7(B.i7,26,B.P,null,null,null)
D.avR=new A.a7(B.Q1,18,null,null,null,null)
D.aw8=new A.a7(B.p3,14,B.Y,null,null,null)
D.aup=new A.K(983420,"MaterialIcons",!1)
D.awT=new A.a7(D.aup,14,B.Y,null,null,null)
D.asB=new A.K(62895,"MaterialIcons",!1)
D.awX=new A.a7(D.asB,14,B.Y,null,null,null)
D.aA_=new A.a7(B.iO,20,null,null,null,null)
D.aAh=new A.a7(B.eQ,16,null,null,null,null)
D.aNz=w([B.ai,B.U],x.O)
D.St=new A.aq(B.al,B.av,B.y,D.aNz,null,null)
D.bqh=new A.aJ("NGMY OS","14.2.1")
D.bp8=new A.aJ("VirtualDroid","13.8.4")
D.bp7=new A.aJ("NGMY OS","15.0.0")
D.bpR=new A.aJ("VirtualDroid","14.1.2")
D.bp5=new A.aJ("NGMY Tab OS","12.9.7")
D.bp3=new A.aJ("NGMY OS","13.5.3")
D.boT=new A.aJ("VirtualDroid","15.2.0")
D.bpu=new A.aJ("NGMY OS","14.8.1")
D.bpX=new A.aJ("NGMY Tab OS","13.2.4")
D.bqr=new A.aJ("VirtualDroid","12.6.9")
D.boP=new A.aJ("NGMY OS","16.0.1")
D.boG=new A.aJ("VirtualDroid","14.9.0")
D.bq9=new A.aJ("NGMY Tab OS","14.0.3")
D.bph=new A.aJ("NGMY OS","13.1.8")
D.boO=new A.aJ("VirtualDroid","13.4.5")
D.bp2=new A.aJ("NGMY OS","15.3.2")
D.bpY=new A.aJ("NGMY Tab OS","12.4.1")
D.bqb=new A.aJ("VirtualDroid","16.1.0")
D.bpt=new A.aJ("NGMY OS","14.4.6")
D.bqi=new A.aJ("VirtualDroid","15.0.8")
D.aN8=w([D.bqh,D.bp8,D.bp7,D.bpR,D.bp5,D.bp3,D.boT,D.bpu,D.bpX,D.bqr,D.boP,D.boG,D.bq9,D.bph,D.boO,D.bp2,D.bpY,D.bqb,D.bpt,D.bqi],A.bl("ab<+(m,m)>"))
D.bst=new A.ee(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bs1=new A.ee(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.brX=new A.ee(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bs5=new A.ee(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.brT=new A.ee(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bs7=new A.ee(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bsv=new A.ee(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.brU=new A.ee(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bs0=new A.ee(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bs9=new A.ee(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.brS=new A.ee(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bsn=new A.ee(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bsk=new A.ee(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bs_=new A.ee(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bsh=new A.ee(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bsg=new A.ee(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.brR=new A.ee(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bs4=new A.ee(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bse=new A.ee(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bsj=new A.ee(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TB=w([D.bst,D.bs1,D.brX,D.bs5,D.brT,D.bs7,D.bsv,D.brU,D.bs0,D.bs9,D.brS,D.bsn,D.bsk,D.bs_,D.bsh,D.bsg,D.brR,D.bs4,D.bse,D.bsj],A.bl("ab<+(m,m,a6,a6,m)>"))
D.aSy=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_u=new C.H3(0,"youtube")
D.a_v=new C.H3(1,"tiktok")
D.GH=new C.H3(2,"instagram")
D.a_w=new C.H3(3,"facebook")
D.bkz=new C.H3(4,"other")
D.bw0=new A.an(3,null,null,null)
D.bwH=new A.iB(4,10,8,0.52,null)
D.bLF=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bzZ=new A.aT(D.bLF,null,null,null,null,null,null,null,null,null,null,null,null,B.B,!1,null,null,null,B.m,null)
D.bD3=new A.M(!0,B.c,null,null,null,null,11,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLs=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bX_=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bXM=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bXS=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c1v=new C.aDr(null)})();(function staticFields(){$.dh8=20
$.apC=null
$.bc2=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dYL","DR",()=>A.QZ(0))
w($,"dYM","LE",()=>A.QZ(null))})()};
(a=>{a["Ed75EMBEu6zja1VgG7lsd5IkaXI="]=a.current})($__dart_deferred_initializers__);