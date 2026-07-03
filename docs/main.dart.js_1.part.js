((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dVw(d,e){A.a5(d,!1).cv(A.e7(new C.d2v(e),!0,null,x.H))},
UT(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UT=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LE()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a4,B.S),t)
w=3
return A.b(A.da(B.C,new C.d2u(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UT)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dDr(r)
if(q==null){d.F(x.q).f.O(D.bzT)
w=1
break}w=4
return A.b(A.bN(B.fK,null,x.H),$async$UT)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.dh4=n
p=C.dDl(n)
n=$.DR()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6f(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UT,v)},
dh7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
H1(d){return C.dDu(d)},
dDu(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
k=A.dp(k,new C.bca(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("aa<J.E>")
i=A.C(new A.aa(k,new C.bcb(),j),j.j("J.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dh9(q)
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
case 19:m=C.dh7(A.O(n,x.N,x.z))
l=C.dh9(A.a([m],x.e))
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
case 18:case 14:q=C.dDs()
w=22
return A.b(C.H0(a3,q),$async$H1)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H1,v)},
dh9(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bc2(),w).eF(0),u=new A.B(d,new C.bc3(),w).eF(0),t=new A.B(d,new C.bc4(),w).eF(0),s=new A.B(d,new C.bc5(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d6g(null,q,u,t,v,s));++q}return r},
apC(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apC=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(d),$async$apC)
case 3:t=f
s=x.N
r=J.cd(t)
q=r.d5(t,new C.bc6(),s).eF(0)
p=r.d5(t,new C.bc7(),s).eF(0)
o=r.d5(t,new C.bc8(),s).eF(0)
n=r.d5(t,new C.bc9(),s).eF(0)
m=C.d6g(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H0(d,t),$async$apC)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apC,v)},
H0(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H0=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H0)
case 2:u=g
t=B.a.i(d)
s=J.b1(e,new C.bc1(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.ak(s,null)),$async$H0)
case 3:return A.f(null,v)}})
return A.h($async$H0,v)},
dDs(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dX(20,x.k)
for(w=0;w<20;++w)q[w]=C.d6g(w,w,t,s,u,r)
return q},
d6g(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.TB[B.n.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TB[B.n.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bc0(),A.T(p).j("B<1,m>")).f9(0)
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
k=D.aSw[w]
j=D.aN6[w]
return new C.mR("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dDt(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dDt(d,e){var w,v=J.dX(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.jg(d.by(256),16),2,"0")
return B.d.f9(v)},
d2v:function d2v(d){this.a=d},
d2u:function d2u(d,e){this.a=d
this.b=e},
d2q:function d2q(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2s:function d2s(d){this.a=d},
d2t:function d2t(d,e){this.a=d
this.b=e},
K3:function K3(d,e,f,g){var _=this
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
aat:function aat(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cv3:function cv3(){},
cv2:function cv2(d,e){this.a=d
this.b=e},
cv0:function cv0(d){this.a=d},
cv1:function cv1(d,e){this.a=d
this.b=e},
cv4:function cv4(d){this.a=d},
cv8:function cv8(d){this.a=d},
cv9:function cv9(d,e){this.a=d
this.b=e},
cv7:function cv7(d,e,f){this.a=d
this.b=e
this.c=f},
cv6:function cv6(d,e){this.a=d
this.b=e},
cv5:function cv5(d,e){this.a=d
this.b=e},
cva:function cva(d){this.a=d},
Sh:function Sh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBe:function aBe(d,e){this.c=d
this.a=e},
GZ:function GZ(d,e){this.c=d
this.a=e},
aCc:function aCc(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cuY:function cuY(d){this.a=d},
cuZ:function cuZ(d){this.a=d},
cv_:function cv_(d){this.a=d},
cuX:function cuX(d,e){this.a=d
this.b=e},
cuU:function cuU(d){this.a=d},
cuV:function cuV(d){this.a=d},
cuT:function cuT(d,e){this.a=d
this.b=e},
cuW:function cuW(d){this.a=d},
cuS:function cuS(d){this.a=d},
aIJ:function aIJ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIK:function aIK(d,e,f){this.c=d
this.d=e
this.a=f},
aCi:function aCi(d,e){this.c=d
this.a=e},
aII:function aII(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cIy:function cIy(d){this.a=d},
cIz:function cIz(d){this.a=d},
aDp:function aDp(d){this.a=d},
axE:function axE(d,e){this.c=d
this.a=e},
dDr(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dDq(v)
if(u!=null)return new C.oR(w,C.d6e(u,!1),D.a_u,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dDp(v)
if(t!=null)return new C.oR(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_v,"TikTok",q)
s=C.dDo(w,v)
if(s!=null)return s
r=C.dDn(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oR(w,w,D.bkx,"Video",q)
return q},
dDo(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oR(d,"https://www.instagram.com/reel/"+w+u,D.GI,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oR(d,"https://www.instagram.com/p/"+w+u,D.GI,t,null)}return null},
dDn(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oR(d,"https://www.facebook.com/plugins/video.php?href="+A.eA(2,d,B.aO,!1)+"&show_text=false&width=734",D.a_w,"Facebook",null)},
dDq(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dDp(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
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
a1r:function a1r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCd:function aCd(d,e){var _=this
_.d=$
_.cW$=d
_.aU$=e
_.c=_.a=null},
aDt:function aDt(d,e){this.c=d
this.a=e},
cyi:function cyi(d){this.a=d},
cyj:function cyj(d){this.a=d},
CD:function CD(d,e){this.c=d
this.a=e},
af2:function af2(){},
dh8(d,e,f,g,h,i){return new C.a1s(i,f,h,e,g,d)},
dUc(d){var w=window
w.toString
A.h6(w,"message",new C.cZD(d),!1,x._)},
a1s:function a1s(d,e,f,g,h,i){var _=this
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
cvb:function cvb(d){this.a=d},
cvj:function cvj(d){this.a=d},
cvh:function cvh(d){this.a=d},
cvf:function cvf(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvd:function cvd(d){this.a=d},
cvi:function cvi(d){this.a=d},
cve:function cve(d){this.a=d},
cvc:function cvc(d){this.a=d},
cZD:function cZD(d){this.a=d},
dh2(){var w,v,u
try{v=A.y9()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d6e(d,e){var w=C.dh2(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eA(2,w,B.aO,!1))
v.push("widget_referrer="+A.eA(2,w,B.aO,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d6d(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dh3(d){var w=A.bn(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bn(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDk(d,e,f){var w,v,u=C.d6d(d)
if(u!=null){if(f){w=C.dh2()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dh3(C.d6e(u,e))}return C.dh3(d)},
dDl(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dDm(d){var w
if($.LE().a==null)return!1
w=$.DR().a
return d>=w&&d<w+4},
dh6(){var w=$.apB
if(w!=null)w.a7(0)
$.apB=null
$.DR().sv(0,0)},
dh5(){var w,v,u,t=$.LE()
if(t.a==null)return
w=$.apB
if(w!=null)w.a7(0)
v=$.dh4
if(v<=4){t=t.a
t.toString
C.d6f(t)
return}w=$.DR()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6f(t)},
d6f(d){var w=$.apB
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
default:w=null}$.apB=A.dr(A.d7(0,0,0,0,0,w),C.dUn())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K3.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eB,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.Y:B.d7,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.el,w,w,w)}}
C.mR.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H_.prototype={
S(){return new C.aat(A.a([],x.e))},
gez(){return this.c}}
C.aat.prototype={
Z(){var w=this
w.a3()
$.DR().ai(0,w.garQ())
C.dUc(w.gbdC())
w.Vi()},
bd4(){if(this.c!=null)this.n(new C.cv3())},
bdD(){C.dh5()},
p(){$.DR().V(0,this.garQ())
C.dh6()
$.LE().sv(0,null)
this.a2()},
Vi(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vi=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(t.a.c),$async$Vi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv2(t,s))
$.bc_=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vi,v)},
RB(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RB=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cv0(t))
w=3
return A.b(C.apC(t.a.c),$async$RB)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv1(t,s))
$.bc_=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RB,v)},
bfv(d){var w=this.c
w.toString
A.a5(w,!1).cv(A.e7(new C.cv4(d),!1,null,x.H))},
bg6(){var w=this.c
w.toString
return C.UT(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.T,t=u?B.dQ:B.d9,s=A.aJ(v,v,v,v,B.EY,v,v,v,new C.cv8(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.B7(A.F(A.a([A.I(new A.G(B.i0,A.j(r,v,1,B.ae,v,v,v,A.l(v,v,u?B.c:B.U,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aP(!1,B.K,!0,v,A.aW(!1,v,!0,new A.G(B.aG,A.a1(B.eO,B.P,v,v,28),v),B.bX,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbg5(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a0)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cn(!0,A.y(A.a([new A.G(D.Om,r,v),A.I(w.e?B.l6:new A.ip($.LE(),new C.cv9(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.akp(B.P,B.AA,B.mS,D.bXM,w.e?v:new C.cva(w)),v)}}
C.Sh.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.cs,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1r(n,!0,!C.dDm(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.i7,B.ld,u,u,22),B.ak,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vo,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aP(!1,B.K,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cK(p,A.hR(A.y(A.a([new C.aBe(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.rW,B.P.l(0.85),u,u,9),D.bvV,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.aml,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.ax),B.h,u,u,new A.t(u,u,r,s,q,D.St,B.k),u,u,u,B.f8,u,u,u),1),B.ak,A.j(o.b,u,1,B.ae,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ae,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ae,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a0)}}
C.aBe.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.ae,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.p1,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Ob,w,w,w)}}
C.GZ.prototype={
S(){return new C.aCc()}}
C.aCc.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.T,u=v?B.dQ:B.d9,t=A.aJ(w,w,w,w,B.EY,w,w,w,new C.cuY(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cn(!0,A.y(A.a([new A.G(D.Om,A.F(A.a([t,A.I(new A.B7(A.F(A.a([A.I(new A.G(B.i0,A.j(s.b+" \xb7 "+s.c,w,1,B.ae,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aP(!1,B.K,!0,w,A.aW(!1,w,!0,new A.G(B.aG,A.a1(B.eO,B.P,w,w,28),w),B.bX,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cuZ(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a0)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.ip($.LE(),new C.cv_(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aIJ.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.ez,28),new A.ag(0,B.w,B.q.l(0.45),B.cC,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dh8(new A.cL(v+"_full_"+u,x.W),!1,u,!1,w.gaGo(),v+"_full")
w=v}else w=new C.aCi(t.r,s)}else w=new C.axE(m,s)
else w=D.c1p
return A.u(s,A.cK(n,A.hR(A.y(A.a([new C.aIK(m,l,s),A.I(w,1),new C.aII(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.ax),B.h,s,s,new A.t(s,s,o,q,p,D.St,B.k),s,r*2.05,s,B.bd,s,s,r)}}
C.aIK.prototype={
C(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h5(r)
w=new A.di(q,r)
v=w.gGA()===0?12:w.gGA()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eJ:B.hp)===B.eJ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lO,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b7,D.awT,B.dB,D.aw8,B.dB,D.awX],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ak,A.F(A.a([A.a1(B.ER,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.ae,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.an3,s,s,s)}}
C.aCi.prototype={
C(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.x2,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.ew(D.aAh,D.bLl,this.c,A.ex(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aK(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vo,w,w,w,w,w,w,w,w,1/0)}}
C.aII.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arJ(B.QV,"YouTube",s===0,r,new C.cIy(u))
s=u.arJ(B.kw,"Device",s===1,r,new C.cIz(u))
w=r?"Power off":"Power on"
v=r?D.QW:D.au7
return A.u(t,A.F(A.a([q,B.a_,s,B.b3,A.aJ(t,t,t,t,A.a1(v,r?B.b2:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cS)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amQ,t,t,t)},
arJ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aP(!1,B.K,!0,u,A.aW(!1,A.n(10),!0,new A.G(B.lp,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a0),1)}}
C.aDp.prototype={
C(d){return D.ade}}
C.axE.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.ja,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.ak,s,B.R,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.ag(u,0,10):u)],x.p),v,B.aG,v,v,B.Z,!1)},
qB(d,e){var w=null
return new A.G(B.bY,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cc,A.j(e,w,w,w,w,w,w,D.bCY,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H2.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oR.prototype={
gaGo(){var w=this.c
return w===D.a_u||w===D.a_v||w===D.GI||w===D.a_w}}
C.a1r.prototype={
S(){return new C.aCd(null,null)}}
C.aCd.prototype={
Z(){this.a3()
var w=A.bF(null,B.rg,null,1,null,this)
w.mp(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPP()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dT(t,new A.t(t,t,t,t,t,new A.aq(B.df,B.cd,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.by),q=x.Y,p=u.d
p===$&&A.c()
p=A.cb(B.hY,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d8(new A.aX(p,new A.bg(0.72,1,q),q.j("aX<be.T>")),!1,A.a1(B.i7,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ld
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDt(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a6,t,B.b8,B.m,s,t)}}
C.aDt.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kB(u,new C.cyi(this),B.bv,!0,w,w,new C.cyj(this),w)
return new C.CD(v,w)}}
C.CD.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qY,B.KU],x.O),B.i7)
break
case 1:w=new A.aI(A.a([B.vo,D.ahb],x.O),B.jD)
break
case 2:w=new A.aI(A.a([D.aiF,D.agJ],x.O),B.xb)
break
case 3:w=new A.aI(A.a([B.U,B.cU],x.O),B.xf)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.mO)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.P.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.af2.prototype={
p(){var w=this,v=w.aU$
if(v!=null)v.V(0,w.gdJ())
w.aU$=null
w.a2()},
br(){this.bK()
this.bF()
this.dK()}}
C.a1s.prototype={
S(){return new C.aau()}}
C.aau.prototype={
bvR(d,e){var w=C.d6d(d)
if(w!=null)return C.d6e(w,e)
return d},
a3w(d,e){var w,v=this,u=C.d6d(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bvR(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDk(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btL(){var w,v=this
if(v.w)return
v.n(new C.cvb(v))
w=v.e
if(w!=null)v.a3w(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DS()
$.ok().rP(w,new C.cvj(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvc(v))
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
return A.hR(A.aU(new A.G(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.O,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Y9(n,B.pE,w)],v)
if(o.f)w.push(A.hR(A.aU(new A.an(28,28,D.ae5,n),n,n,n),B.ce,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b_,B.o,1)
q=A.a1(B.Rc,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.fb(0,A.aP(!1,B.K,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.NL,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtK(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a0)))}return new A.aQ(B.a6,n,B.b8,B.m,w,n)}}
var z=a.updateTypes(["m(mR)","~()","H_(Q)","mR(W<@,@>)","a_(mR)","W<m,@>(mR)","ax<~>()","GZ(Q)","ip<R>(Q,oR?,o?)","Sh(Q,R)","uc(Q,oR?,o?)","CD(Q,ak,dv?)"])
C.d2v.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+2}
C.d2u.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.T,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.U],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.ez,32)],x.V),g=A.U(m?B.bo:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.X.l(m?0.18:0.08)],j)
e=A.u(n,D.avN,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.ak,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.Y:B.aA,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.eX,w,A.aJ(n,n,n,n,A.a1(B.cK,m?B.a7:B.ce,n,n,n),n,n,n,new C.d2q(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a5,B.y,j,n,n),B.k),n,n,n,B.NW,n,n,n)
e=A.et(B.c0,A.a([new C.K3("YouTube",B.EQ,m,n),new C.K3("TikTok",B.jD,m,n),new C.K3("Instagram",B.xb,m,n),new C.K3("Facebook",B.xf,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bx:B.fH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d9
r=A.a1(B.jC,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.b1
u=A.y(A.a([e,B.as,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b6(4,q,B.L),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aK(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.JH),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.M,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.af,B.e,B.f,0,B.l)
e=A.iY(D.avR,D.bWU,new C.d2r(d),A.ji(n,n,n,n,n,n,n,n,n,n,n,m?B.aE:B.aA,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.V(12,0,12,12+l.f.d),A.dT(A.cK(f,A.y(A.a([j,new A.G(D.ao4,u,n),new A.G(D.aof,A.F(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.Y:B.a1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2s(d),n,n),B.a_,A.dJ(D.aA_,D.bXG,new C.d2t(d,w),A.bw(B.P,n,n,n,B.c,n,D.NL,n,new A.bE(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.af,B.e,B.O,0,B.l),B.ax),new A.t(n,n,g,k,h,new A.aq(B.al,B.av,B.y,i,n,n),B.k),B.by),n)},
$S:65}
C.d2q.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2r.prototype={
$0(){C.dh6()
$.LE().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2s.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2t.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bca.prototype={
$1(d){return C.dh7(A.O(d,x.N,x.z))},
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
$1(d){return B.a.bj(B.n.jg(d,16),2,"0").toUpperCase()},
$S:76}
C.cv3.prototype={
$0(){},
$S:0}
C.cv2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cv0.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cv1.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cv4.prototype={
$1(d){return new C.GZ(this.a,null)},
$S:z+7}
C.cv8.prototype={
$0(){return A.a5(this.a,!1).eq()},
$S:0}
C.cv9.prototype={
$3(d,e,f){return new A.ip($.DR(),new C.cv7(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cv7.prototype={
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
t=A.a([A.u(k,A.F(A.a([q,B.a_,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cr,B.eM,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cK(s,new A.iM(1.7777777777777777,C.dh8(new A.cL("fleet_master_"+r,x.W),!0,r,!0,j.gaGo(),"fleet_master"),k),B.ax),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zJ(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kd(new A.G(B.CE,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p0(D.amu,A.at5(new A.nZ(new C.cv6(i,j),J.a3(i.d),!1,!0,!0,A.vR(),k),D.bwB),k)],w))},
$S:1590}
C.cv6.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sh(v,e,J.a3(w.d),new C.cv5(w,v),this.b,null)},
$S:z+9}
C.cv5.prototype={
$0(){return this.a.bfv(this.b)},
$S:0}
C.cva.prototype={
$0(){this.a.RB()
return null},
$S:0}
C.cuY.prototype={
$0(){return A.a5(this.a,!1).eq()},
$S:0}
C.cuZ.prototype={
$0(){C.UT(this.a,$.bc_)
return null},
$S:0}
C.cv_.prototype={
$3(d,e,f){return A.fP(new C.cuX(this.a,e))},
$S:z+10}
C.cuX.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.co(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aIJ(u,s.a.c,s.e,s.d,new C.cuU(s),new C.cuV(s),new C.cuW(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wo,v,v,B.Z),v,v,v)},
$S:1591}
C.cuU.prototype={
$0(){var w=this.a.c
w.toString
C.UT(w,$.bc_)
return null},
$S:0}
C.cuV.prototype={
$1(d){var w=this.a
return w.n(new C.cuT(w,d))},
$S:38}
C.cuT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cuW.prototype={
$0(){var w=this.a
return w.n(new C.cuS(w))},
$S:0}
C.cuS.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cIy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cIz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cyi.prototype={
$3(d,e,f){return new C.CD(this.a.c,null)},
$S:z+11}
C.cyj.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a6,null,B.b8,B.m,A.a([new C.CD(this.a.c,null),D.ads],x.p),null)},
$C:"$3",
$R:3,
$S:376}
C.cvb.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvj.prototype={
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
A.h6(v,"load",new C.cvh(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.cvi(w),!1,u)
w=w.e
w.toString
return w},
$S:511}
C.cvh.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvf(w))
A.bN(B.A,new C.cvg(w),x.H)}},
$S:42}
C.cvf.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvg.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvd(w))},
$S:12}
C.cvd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cve(w))},
$S:42}
C.cve.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvc.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZD.prototype={
$1(d){var w,v,u,t,s=new A.Cc([],[]).FS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1592};(function aliases(){var w=C.af2.prototype
w.aPP=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aat.prototype,"garQ","bd4",1)
w(u,"gbdC","bdD",1)
w(u,"gbg5","bg6",6)
w(C.aau.prototype,"gbtK","btL",1)
v(C,"dUn","dh5",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wb,[C.d2v,C.d2u,C.bca,C.bcb,C.bc2,C.bc3,C.bc4,C.bc5,C.bc6,C.bc7,C.bc8,C.bc9,C.bc1,C.bc0,C.cv4,C.cv9,C.cv7,C.cv_,C.cuV,C.cyi,C.cyj,C.cvj,C.cvh,C.cvi,C.cZD])
v(A.Wq,[C.d2q,C.d2r,C.d2s,C.d2t,C.cv3,C.cv2,C.cv0,C.cv1,C.cv8,C.cv5,C.cva,C.cuY,C.cuZ,C.cuU,C.cuT,C.cuW,C.cuS,C.cIy,C.cIz,C.cvb,C.cvf,C.cvg,C.cvd,C.cve,C.cvc])
v(A.aA,[C.K3,C.Sh,C.aBe,C.aIJ,C.aIK,C.aCi,C.aII,C.aDp,C.axE,C.aDt,C.CD])
v(A.ak,[C.mR,C.oR])
v(A.ad,[C.H_,C.GZ,C.a1r,C.a1s])
v(A.ae,[C.aat,C.aCc,C.af2,C.aau])
v(A.Wr,[C.cv6,C.cuX])
u(C.H2,A.ayw)
u(C.aCd,C.af2)
w(C.af2,A.e8)})()
A.dkn(b.typeUniverse,JSON.parse('{"H_":{"ad":[],"o":[]},"Sh":{"aA":[],"o":[]},"GZ":{"ad":[],"o":[]},"K3":{"aA":[],"o":[]},"aat":{"ae":["H_"]},"aBe":{"aA":[],"o":[]},"aCc":{"ae":["GZ"]},"aIJ":{"aA":[],"o":[]},"aIK":{"aA":[],"o":[]},"aCi":{"aA":[],"o":[]},"aII":{"aA":[],"o":[]},"aDp":{"aA":[],"o":[]},"axE":{"aA":[],"o":[]},"a1r":{"ad":[],"o":[]},"CD":{"aA":[],"o":[]},"aCd":{"ae":["a1r"]},"aDt":{"aA":[],"o":[]},"a1s":{"ad":[],"o":[]},"aau":{"ae":["a1s"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bl
return{V:w("ab<ag>"),O:w("ab<A>"),e:w("ab<mR>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<R>"),X:w("ac<mR>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mO"),_:w("Aw"),k:w("mR"),N:w("m"),Y:w("bg<a7>"),W:w("cL<m>"),J:w("ip<R>"),j:w("ip<oR?>"),E:w("yi<cC>"),q:w("SY"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.QW=new A.K(983224,"MaterialIcons",!1)
D.ayu=new A.a6(D.QW,48,B.b_,null,null,null)
D.bCC=new A.M(!0,B.bx,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKg=new A.x("Powered off",null,D.bCC,null,null,null,null,null,null,null,null,null)
D.aLv=w([D.ayu,B.z,D.bKg],x.p)
D.ajQ=new A.ej(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aLv,null)
D.ade=new A.dk(B.J,null,null,D.ajQ,null)
D.bwi=new A.an(18,18,B.KC,null)
D.ads=new A.dk(B.J,null,null,D.bwi,null)
D.ae5=new A.fN(2,null,null,null,null,B.Y,null,null,null,null)
D.agJ=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahb=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiF=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.aml=new A.V(0,3,0,3)
D.amu=new A.V(10,0,10,88)
D.amQ=new A.V(12,6,12,10)
D.an3=new A.V(14,8,14,6)
D.NL=new A.V(18,12,18,12)
D.ao4=new A.V(20,18,20,8)
D.aof=new A.V(20,8,20,20)
D.Om=new A.V(8,6,15,8)
D.au7=new A.K(983222,"MaterialIcons",!1)
D.avN=new A.a6(B.i7,26,B.P,null,null,null)
D.avR=new A.a6(B.Q1,18,null,null,null,null)
D.aw8=new A.a6(B.p1,14,B.Y,null,null,null)
D.aup=new A.K(983420,"MaterialIcons",!1)
D.awT=new A.a6(D.aup,14,B.Y,null,null,null)
D.asB=new A.K(62895,"MaterialIcons",!1)
D.awX=new A.a6(D.asB,14,B.Y,null,null,null)
D.aA_=new A.a6(B.iO,20,null,null,null,null)
D.aAh=new A.a6(B.eO,16,null,null,null,null)
D.aNx=w([B.aj,B.U],x.O)
D.St=new A.aq(B.al,B.av,B.y,D.aNx,null,null)
D.bqd=new A.aI("NGMY OS","14.2.1")
D.bp4=new A.aI("VirtualDroid","13.8.4")
D.bp3=new A.aI("NGMY OS","15.0.0")
D.bpN=new A.aI("VirtualDroid","14.1.2")
D.bp1=new A.aI("NGMY Tab OS","12.9.7")
D.bp_=new A.aI("NGMY OS","13.5.3")
D.boP=new A.aI("VirtualDroid","15.2.0")
D.bpq=new A.aI("NGMY OS","14.8.1")
D.bpT=new A.aI("NGMY Tab OS","13.2.4")
D.bqn=new A.aI("VirtualDroid","12.6.9")
D.boL=new A.aI("NGMY OS","16.0.1")
D.boC=new A.aI("VirtualDroid","14.9.0")
D.bq5=new A.aI("NGMY Tab OS","14.0.3")
D.bpd=new A.aI("NGMY OS","13.1.8")
D.boK=new A.aI("VirtualDroid","13.4.5")
D.boZ=new A.aI("NGMY OS","15.3.2")
D.bpU=new A.aI("NGMY Tab OS","12.4.1")
D.bq7=new A.aI("VirtualDroid","16.1.0")
D.bpp=new A.aI("NGMY OS","14.4.6")
D.bqe=new A.aI("VirtualDroid","15.0.8")
D.aN6=w([D.bqd,D.bp4,D.bp3,D.bpN,D.bp1,D.bp_,D.boP,D.bpq,D.bpT,D.bqn,D.boL,D.boC,D.bq5,D.bpd,D.boK,D.boZ,D.bpU,D.bq7,D.bpp,D.bqe],A.bl("ab<+(m,m)>"))
D.bsp=new A.ee(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.brY=new A.ee(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.brT=new A.ee(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bs1=new A.ee(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.brP=new A.ee(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bs3=new A.ee(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bsr=new A.ee(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.brQ=new A.ee(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.brX=new A.ee(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bs5=new A.ee(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.brO=new A.ee(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bsj=new A.ee(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bsg=new A.ee(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.brW=new A.ee(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bsd=new A.ee(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bsc=new A.ee(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.brN=new A.ee(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bs0=new A.ee(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bsa=new A.ee(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bsf=new A.ee(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TB=w([D.bsp,D.brY,D.brT,D.bs1,D.brP,D.bs3,D.bsr,D.brQ,D.brX,D.bs5,D.brO,D.bsj,D.bsg,D.brW,D.bsd,D.bsc,D.brN,D.bs0,D.bsa,D.bsf],A.bl("ab<+(m,m,a7,a7,m)>"))
D.aSw=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_u=new C.H2(0,"youtube")
D.a_v=new C.H2(1,"tiktok")
D.GI=new C.H2(2,"instagram")
D.a_w=new C.H2(3,"facebook")
D.bkx=new C.H2(4,"other")
D.bvV=new A.an(3,null,null,null)
D.bwB=new A.iB(4,10,8,0.52,null)
D.bLy=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bzT=new A.aT(D.bLy,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bCY=new A.M(!0,B.c,null,null,null,null,11,B.W,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLl=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bWU=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bXG=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bXM=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c1p=new C.aDp(null)})();(function staticFields(){$.dh4=20
$.apB=null
$.bc_=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dYF","DR",()=>A.R_(0))
w($,"dYG","LE",()=>A.R_(null))})()};
(a=>{a["wNGDG3hAj1eQNXb7D5buaE5PiiA="]=a.current})($__dart_deferred_initializers__);