((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dW8(d,e){A.a5(d,!1).cw(A.e9(new C.d30(e),!0,null,x.H))},
UZ(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UZ=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LH()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a5,B.U),t)
w=3
return A.b(A.d7(B.C,new C.d3_(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UZ)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dE2(r)
if(q==null){d.F(x.q).f.O(D.bCp)
w=1
break}w=4
return A.b(A.bM(B.fL,null,x.H),$async$UZ)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dhC=n
p=C.dDX(n)
n=$.DP()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6M(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UZ,v)},
dhF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mS(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H1(d){return C.dE5(d)},
dE5(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
case 10:k=J.f4(r,x.f)
k=A.dm(k,new C.bct(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("aa<J.E>")
i=A.C(new A.aa(k,new C.bcu(),j),j.j("J.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dhH(q)
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
case 19:m=C.dhF(A.O(n,x.N,x.z))
l=C.dhH(A.a([m],x.e))
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
case 18:case 14:q=C.dE3()
w=22
return A.b(C.H0(a3,q),$async$H1)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H1,v)},
dhH(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bcl(),w).eF(0),u=new A.B(d,new C.bcm(),w).eF(0),t=new A.B(d,new C.bcn(),w).eF(0),s=new A.B(d,new C.bco(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d6N(null,q,u,t,v,s));++q}return r},
apO(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apO=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(d),$async$apO)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d5(t,new C.bcp(),s).eF(0)
p=r.d5(t,new C.bcq(),s).eF(0)
o=r.d5(t,new C.bcr(),s).eF(0)
n=r.d5(t,new C.bcs(),s).eF(0)
m=C.d6N(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H0(d,t),$async$apO)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apO,v)},
H0(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H0=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H0)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bck(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.al(s,null)),$async$H0)
case 3:return A.f(null,v)}})
return A.h($async$H0,v)},
dE3(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d6N(w,w,t,s,u,r)
return q},
d6N(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.js(),h=d==null,g=D.U4[B.n.af(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U4[B.n.af(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bcj(),A.T(p).j("B<1,m>")).f9(0)
u="VND-"+B.a.ah(n,0,4)+"-"+B.a.ah(n,4,8)
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
w=B.n.af(e,20)
k=D.aUQ[w]
j=D.aOH[w]
return new C.mS("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dE4(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dE4(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.jg(d.by(256),16),2,"0")
return B.d.f9(v)},
d30:function d30(d){this.a=d},
d3_:function d3_(d,e){this.a=d
this.b=e},
d2W:function d2W(d){this.a=d},
d2X:function d2X(d){this.a=d},
d2Y:function d2Y(d){this.a=d},
d2Z:function d2Z(d,e){this.a=d
this.b=e},
K4:function K4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mS:function mS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bct:function bct(){},
bcu:function bcu(){},
bcl:function bcl(){},
bcm:function bcm(){},
bcn:function bcn(){},
bco:function bco(){},
bcp:function bcp(){},
bcq:function bcq(){},
bcr:function bcr(){},
bcs:function bcs(){},
bck:function bck(){},
bcj:function bcj(){},
H_:function H_(d,e){this.c=d
this.a=e},
aay:function aay(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvb:function cvb(){},
cva:function cva(d,e){this.a=d
this.b=e},
cv8:function cv8(d){this.a=d},
cv9:function cv9(d,e){this.a=d
this.b=e},
cvc:function cvc(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvh:function cvh(d,e){this.a=d
this.b=e},
cvf:function cvf(d,e,f){this.a=d
this.b=e
this.c=f},
cve:function cve(d,e){this.a=d
this.b=e},
cvd:function cvd(d,e){this.a=d
this.b=e},
cvi:function cvi(d){this.a=d},
Sn:function Sn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBt:function aBt(d,e){this.c=d
this.a=e},
GZ:function GZ(d,e){this.c=d
this.a=e},
aCr:function aCr(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cv5:function cv5(d){this.a=d},
cv6:function cv6(d){this.a=d},
cv7:function cv7(d){this.a=d},
cv4:function cv4(d,e){this.a=d
this.b=e},
cv1:function cv1(d){this.a=d},
cv2:function cv2(d){this.a=d},
cv0:function cv0(d,e){this.a=d
this.b=e},
cv3:function cv3(d){this.a=d},
cv_:function cv_(d){this.a=d},
aJ0:function aJ0(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJ1:function aJ1(d,e,f){this.c=d
this.d=e
this.a=f},
aCx:function aCx(d,e){this.c=d
this.a=e},
aJ_:function aJ_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJ3:function cJ3(d){this.a=d},
cJ4:function cJ4(d){this.a=d},
aDH:function aDH(d){this.a=d},
axS:function axS(d,e){this.c=d
this.a=e},
dE2(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dE1(v)
if(u!=null)return new C.oS(w,C.d6L(u,!1),D.a00,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dE0(v)
if(t!=null)return new C.oS(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a01,"TikTok",q)
s=C.dE_(w,v)
if(s!=null)return s
r=C.dDZ(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oS(w,w,D.bmV,"Video",q)
return q},
dE_(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oS(d,"https://www.instagram.com/reel/"+w+u,D.Hd,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oS(d,"https://www.instagram.com/p/"+w+u,D.Hd,t,null)}return null},
dDZ(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oS(d,"https://www.facebook.com/plugins/video.php?href="+A.eC(2,d,B.aN,!1)+"&show_text=false&width=734",D.a02,"Facebook",null)},
dE1(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dE0(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H2:function H2(d,e){this.a=d
this.b=e},
oS:function oS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1x:function a1x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCs:function aCs(d,e){var _=this
_.d=$
_.cQ$=d
_.aR$=e
_.c=_.a=null},
aDL:function aDL(d,e){this.c=d
this.a=e},
cyP:function cyP(d){this.a=d},
cyQ:function cyQ(d){this.a=d},
CB:function CB(d,e){this.c=d
this.a=e},
af9:function af9(){},
dhG(d,e,f,g,h,i){return new C.a1y(i,f,h,e,g,d)},
dUP(d){var w=window
w.toString
A.h6(w,"message",new C.d_d(d),!1,x._)},
a1y:function a1y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaz:function aaz(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvj:function cvj(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvp:function cvp(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvk:function cvk(d){this.a=d},
d_d:function d_d(d){this.a=d},
dhA(){var w,v,u
try{v=A.ya()
w=v.gpZ(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d6L(d,e){var w=C.dhA(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eC(2,w,B.aN,!1))
v.push("widget_referrer="+A.eC(2,w,B.aN,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d6K(d){var w=A.aq(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dhB(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDW(d,e,f){var w,v,u=C.d6K(d)
if(u!=null){if(f){w=C.dhA()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dhB(C.d6L(u,e))}return C.dhB(d)},
dDX(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dDY(d){var w
if($.LH().a==null)return!1
w=$.DP().a
return d>=w&&d<w+4},
dhE(){var w=$.apN
if(w!=null)w.a7(0)
$.apN=null
$.DP().sv(0,0)},
dhD(){var w,v,u,t=$.LH()
if(t.a==null)return
w=$.apN
if(w!=null)w.a7(0)
v=$.dhC
if(v<=4){t=t.a
t.toString
C.d6M(t)
return}w=$.DP()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6M(t)},
d6M(d){var w=$.apN
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
default:w=null}$.apN=A.dp(A.d8(0,0,0,0,0,w),C.dV_())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K4.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eD,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.X:B.cM,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.en,w,w,w)}}
C.mS.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H_.prototype={
S(){return new C.aay(A.a([],x.e))},
gez(){return this.c}}
C.aay.prototype={
Z(){var w=this
w.a3()
$.DP().aj(0,w.garZ())
C.dUP(w.gbe_())
w.Vk()},
bds(){if(this.c!=null)this.n(new C.cvb())},
be0(){C.dhD()},
p(){$.DP().V(0,this.garZ())
C.dhE()
$.LH().sv(0,null)
this.a2()},
Vk(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vk=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H1(t.a.c),$async$Vk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cva(t,s))
$.bci=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vk,v)},
RC(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RC=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cv8(t))
w=3
return A.b(C.apO(t.a.c),$async$RC)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv9(t,s))
$.bci=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RC,v)},
bfT(d){var w=this.c
w.toString
A.a5(w,!1).cw(A.e9(new C.cvc(d),!1,null,x.H))},
bgu(){var w=this.c
w.toString
return C.UZ(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.V,t=u?B.dR:B.d5,s=A.aJ(v,v,v,v,B.Fs,v,v,v,new C.cvg(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.B7(A.F(A.a([A.I(new A.G(B.i7,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.R,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aQ(!1,B.L,!0,v,A.aW(!1,v,!0,new A.G(B.aI,A.a1(B.eR,B.P,v,v,28),v),B.bZ,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgt(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a_)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cj(!0,A.y(A.a([new A.G(D.OJ,r,v),A.I(w.e?B.lb:new A.is($.LH(),new C.cvh(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0)
return A.ch(v,t,s,v,!1,!1,A.akA(B.P,B.B_,B.mY,D.c_n,w.e?v:new C.cvi(w)),v)}}
C.Sn.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1x(n,!0,!C.dDY(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.id,B.lg,u,u,22),B.aj,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vE,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aQ(!1,B.L,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cC(p,A.hF(A.y(A.a([new C.aBt(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.t8,B.P.l(0.85),u,u,9),D.byp,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.an3,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.ST,B.k),u,u,u,B.f8,u,u,u),1),B.aj,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a_)}}
C.aBt.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.ph,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oy,w,w,w)}}
C.GZ.prototype={
S(){return new C.aCr()}}
C.aCr.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.V,u=v?B.dR:B.d5,t=A.aJ(w,w,w,w,B.Fs,w,w,w,new C.cv5(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ch(w,u,A.cj(!0,A.y(A.a([new A.G(D.OJ,A.F(A.a([t,A.I(new A.B7(A.F(A.a([A.I(new A.G(B.i7,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.R,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aQ(!1,B.L,!0,w,A.aW(!1,w,!0,new A.G(B.aI,A.a1(B.eR,B.P,w,w,28),w),B.bZ,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cv6(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.is($.LH(),new C.cv7(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0),w,!1,!1,w,w)}}
C.aJ0.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.ep,28),new A.ag(0,B.w,B.q.l(0.45),B.cB,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhG(new A.dq(v+"_full_"+u,x.W),!1,u,!1,w.gaGE(),v+"_full")
w=v}else w=new C.aCx(t.r,s)}else w=new C.axS(m,s)
else w=D.c4J
return A.u(s,A.cC(n,A.hF(A.y(A.a([new C.aJ1(m,l,s),A.I(w,1),new C.aJ_(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.ST,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aJ1.prototype={
C(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h4(r)
w=new A.di(q,r)
v=w.gGB()===0?12:w.gGB()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eM:B.hv)===B.eM?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lR,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.axE,B.dB,D.awT,B.dB,D.axI],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.aj,A.F(A.a([A.a1(B.Fl,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.anM,s,s,s)}}
C.aCx.prototype={
C(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.xo,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.ey(D.aB2,D.bNU,this.c,A.ez(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aI(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vE,w,w,w,w,w,w,w,w,1/0)}}
C.aJ_.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arS(B.Rk,"YouTube",s===0,r,new C.cJ3(u))
s=u.arS(B.kB,"Device",s===1,r,new C.cJ4(u))
w=r?"Power off":"Power on"
v=r?D.Rl:D.auQ
return A.u(t,A.F(A.a([q,B.a0,s,B.b3,A.aJ(t,t,t,t,A.a1(v,r?B.b4:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cT)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.any,t,t,t)},
arS(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aW
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aQ(!1,B.L,!0,u,A.aW(!1,A.n(10),!0,new A.G(B.lq,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a_),1)}}
C.aDH.prototype={
C(d){return D.adU}}
C.axS.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.je,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aj,s,B.S,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.ah(u,0,10):u)],x.p),v,B.aI,v,v,B.Z,!1)},
qB(d,e){var w=null
return new A.G(B.c_,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cg,A.j(e,w,w,w,w,w,w,D.bFw,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H2.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oS.prototype={
gaGE(){var w=this.c
return w===D.a00||w===D.a01||w===D.Hd||w===D.a02}}
C.a1x.prototype={
S(){return new C.aCs(null,null)}}
C.aCs.prototype={
Z(){this.a3()
var w=A.bF(null,B.rs,null,1,null,this)
w.mp(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQ3()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dK(t,new A.t(t,t,t,t,t,new A.ap(B.d2,B.c7,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.bv),q=x.Y,p=u.d
p===$&&A.c()
p=A.ct(B.i4,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d1(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bl.T>")),!1,A.a1(B.id,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lg
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDL(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aM(B.a6,t,B.aS,B.m,s,t)}}
C.aDL.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kB(u,new C.cyP(this),B.bx,!0,w,w,new C.cyQ(this),w)
return new C.CB(v,w)}}
C.CB.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aK(A.a([B.rc,B.Ls],x.O),B.id)
break
case 1:w=new A.aK(A.a([B.vE,D.ahR],x.O),B.jH)
break
case 2:w=new A.aK(A.a([D.ajl,D.ahq],x.O),B.xw)
break
case 3:w=new A.aK(A.a([B.R,B.cD],x.O),B.xA)
break
case 4:w=new A.aK(A.a([B.aa,B.ai],x.O),B.mU)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.P.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.ak,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.af9.prototype={
p(){var w=this,v=w.aR$
if(v!=null)v.V(0,w.gdu())
w.aR$=null
w.a2()},
bp(){this.bF()
this.bD()
this.dv()}}
C.a1y.prototype={
S(){return new C.aaz()}}
C.aaz.prototype={
bwy(d,e){var w=C.d6K(d)
if(w!=null)return C.d6L(w,e)
return d},
a3z(d,e){var w,v=this,u=C.d6K(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwy(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDW(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bus(){var w,v=this
if(v.w)return
v.n(new C.cvj(v))
w=v.e
if(w!=null)v.a3z(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aD()
u.d=w
try{$.DQ()
$.ol().rP(w,new C.cvr(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b2(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvk(v))
w=v.e
w.toString
v.a3z(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.RA,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hF(A.aU(new A.G(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.O,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yf(n,B.pT,w)],v)
if(o.f)w.push(A.hF(A.aU(new A.am(28,28,D.aeM,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aW,B.o,1)
q=A.a1(B.RC,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eI(0,A.aQ(!1,B.L,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O6,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbur(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a_)))}return new A.aM(B.a6,n,B.aS,B.m,w,n)}}
var z=a.updateTypes(["m(mS)","~()","H_(Q)","mS(W<@,@>)","a_(mS)","W<m,@>(mS)","ay<~>()","GZ(Q)","is<R>(Q,oS?,p?)","Sn(Q,R)","ra(Q,oS?,p?)","CB(Q,ak,dw?)"])
C.d30.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+2}
C.d3_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.V,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.R],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.ep,32)],x.V),g=A.U(m?B.bl:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.aww,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.R,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.aj,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.X:B.ay,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.er,w,A.aJ(n,n,n,n,A.a1(B.cI,m?B.a7:B.ci,n,n,n),n,n,n,new C.d2W(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a3,B.a4,B.y,j,n,n),B.k),n,n,n,B.Oi,n,n,n)
e=A.es(B.bX,A.a([new C.K4("YouTube",B.Fk,m,n),new C.K4("TikTok",B.jH,m,n),new C.K4("Instagram",B.xw,m,n),new C.K4("Facebook",B.xA,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.R,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d5
r=A.a1(B.jG,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bl:B.b0
u=A.y(A.a([e,B.aq,A.au(n,B.F,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bh(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aI(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Ki),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.M,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.j_(D.awA,D.bZu,new C.d2X(d),A.iE(n,n,n,n,n,n,n,n,n,n,n,m?B.aF:B.ay,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.V(12,0,12,12+l.f.d),A.dK(A.cC(f,A.y(A.a([j,new A.G(D.aoO,u,n),new A.G(D.aoZ,A.F(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.X:B.a1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2Y(d),n,n),B.a0,A.dL(D.aAL,D.c_h,new C.d2Z(d,w),A.bu(B.P,n,n,n,B.c,n,D.O6,n,new A.bE(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.O,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.ak,B.av,B.y,i,n,n),B.k),B.bv),n)},
$S:65}
C.d2W.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2X.prototype={
$0(){C.dhE()
$.LH().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2Y.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2Z.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bct.prototype={
$1(d){return C.dhF(A.O(d,x.N,x.z))},
$S:z+3}
C.bcu.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcl.prototype={
$1(d){return d.c},
$S:z+0}
C.bcm.prototype={
$1(d){return d.r},
$S:z+0}
C.bcn.prototype={
$1(d){return d.f},
$S:z+0}
C.bco.prototype={
$1(d){return d.at},
$S:z+0}
C.bcp.prototype={
$1(d){return d.c},
$S:z+0}
C.bcq.prototype={
$1(d){return d.r},
$S:z+0}
C.bcr.prototype={
$1(d){return d.f},
$S:z+0}
C.bcs.prototype={
$1(d){return d.at},
$S:z+0}
C.bck.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bcj.prototype={
$1(d){return B.a.bj(B.n.jg(d,16),2,"0").toUpperCase()},
$S:76}
C.cvb.prototype={
$0(){},
$S:0}
C.cva.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cv8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cv9.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvc.prototype={
$1(d){return new C.GZ(this.a,null)},
$S:z+7}
C.cvg.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvh.prototype={
$3(d,e,f){return new A.is($.DP(),new C.cvf(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvf.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Az(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.P.l(0.12)
s=A.n(12)
r=A.U(B.P.l(0.35),B.o,1)
q=A.a1(B.id,B.P,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DP().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.R,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cs,B.eO,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cC(s,new A.iO(1.7777777777777777,C.dhG(new A.dq("fleet_master_"+r,x.W),!0,r,!0,j.gaGE(),"fleet_master"),k),B.as),B.S],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zL(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kb(new A.G(B.D8,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p0(D.anc,A.ath(new A.o0(new C.cve(i,j),J.a3(i.d),!1,!0,!0,A.vS(),k),D.bz6),k)],w))},
$S:1592}
C.cve.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sn(v,e,J.a3(w.d),new C.cvd(w,v),this.b,null)},
$S:z+9}
C.cvd.prototype={
$0(){return this.a.bfT(this.b)},
$S:0}
C.cvi.prototype={
$0(){this.a.RC()
return null},
$S:0}
C.cv5.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cv6.prototype={
$0(){C.UZ(this.a,$.bci)
return null},
$S:0}
C.cv7.prototype={
$3(d,e,f){return A.fG(new C.cv4(this.a,e))},
$S:z+10}
C.cv4.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.co(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.aq,new C.aJ0(u,s.a.c,s.e,s.d,new C.cv1(s),new C.cv2(s),new C.cv3(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wK,v,v,B.Z),v,v,v)},
$S:1593}
C.cv1.prototype={
$0(){var w=this.a.c
w.toString
C.UZ(w,$.bci)
return null},
$S:0}
C.cv2.prototype={
$1(d){var w=this.a
return w.n(new C.cv0(w,d))},
$S:39}
C.cv0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv3.prototype={
$0(){var w=this.a
return w.n(new C.cv_(w))},
$S:0}
C.cv_.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJ3.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJ4.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cyP.prototype={
$3(d,e,f){return new C.CB(this.a.c,null)},
$S:z+11}
C.cyQ.prototype={
$3(d,e,f){if(f==null)return e
return new A.aM(B.a6,null,B.aS,B.m,A.a([new C.CB(this.a.c,null),D.ae8],x.p),null)},
$C:"$3",
$R:3,
$S:376}
C.cvj.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvr.prototype={
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
w.a3z(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.cvp(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.cvq(w),!1,u)
w=w.e
w.toString
return w},
$S:543}
C.cvp.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvn(w))
A.bM(B.B,new C.cvo(w),x.H)}},
$S:43}
C.cvn.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvo.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvl(w))},
$S:12}
C.cvl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvm(w))},
$S:43}
C.cvm.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvk.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d_d.prototype={
$1(d){var w,v,u,t,s=new A.Ca([],[]).FT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1594};(function aliases(){var w=C.af9.prototype
w.aQ3=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aay.prototype,"garZ","bds",1)
w(u,"gbe_","be0",1)
w(u,"gbgt","bgu",6)
w(C.aaz.prototype,"gbur","bus",1)
v(C,"dV_","dhD",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wb,[C.d30,C.d3_,C.bct,C.bcu,C.bcl,C.bcm,C.bcn,C.bco,C.bcp,C.bcq,C.bcr,C.bcs,C.bck,C.bcj,C.cvc,C.cvh,C.cvf,C.cv7,C.cv2,C.cyP,C.cyQ,C.cvr,C.cvp,C.cvq,C.d_d])
v(A.Ww,[C.d2W,C.d2X,C.d2Y,C.d2Z,C.cvb,C.cva,C.cv8,C.cv9,C.cvg,C.cvd,C.cvi,C.cv5,C.cv6,C.cv1,C.cv0,C.cv3,C.cv_,C.cJ3,C.cJ4,C.cvj,C.cvn,C.cvo,C.cvl,C.cvm,C.cvk])
v(A.aA,[C.K4,C.Sn,C.aBt,C.aJ0,C.aJ1,C.aCx,C.aJ_,C.aDH,C.axS,C.aDL,C.CB])
v(A.ak,[C.mS,C.oS])
v(A.ad,[C.H_,C.GZ,C.a1x,C.a1y])
v(A.ae,[C.aay,C.aCr,C.af9,C.aaz])
v(A.Wx,[C.cve,C.cv4])
u(C.H2,A.ayL)
u(C.aCs,C.af9)
w(C.af9,A.e0)})()
A.dkV(b.typeUniverse,JSON.parse('{"H_":{"ad":[],"p":[]},"Sn":{"aA":[],"p":[]},"GZ":{"ad":[],"p":[]},"K4":{"aA":[],"p":[]},"aay":{"ae":["H_"]},"aBt":{"aA":[],"p":[]},"aCr":{"ae":["GZ"]},"aJ0":{"aA":[],"p":[]},"aJ1":{"aA":[],"p":[]},"aCx":{"aA":[],"p":[]},"aJ_":{"aA":[],"p":[]},"aDH":{"aA":[],"p":[]},"axS":{"aA":[],"p":[]},"a1x":{"ad":[],"p":[]},"CB":{"aA":[],"p":[]},"aCs":{"ae":["a1x"]},"aDL":{"aA":[],"p":[]},"a1y":{"ad":[],"p":[]},"aaz":{"ae":["a1y"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mS>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<R>"),X:w("ac<mS>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mP"),_:w("Aw"),k:w("mS"),N:w("m"),Y:w("bn<a8>"),W:w("dq<m>"),J:w("is<R>"),j:w("is<oS?>"),E:w("yj<cD>"),q:w("T3"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rl=new A.K(983224,"MaterialIcons",!1)
D.azf=new A.a6(D.Rl,48,B.aW,null,null,null)
D.bFa=new A.M(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMP=new A.x("Powered off",null,D.bFa,null,null,null,null,null,null,null,null,null)
D.aMP=w([D.azf,B.z,D.bMP],x.p)
D.aky=new A.ek(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aMP,null)
D.adU=new A.de(B.K,null,null,D.aky,null)
D.byN=new A.am(18,18,B.Lc,null)
D.ae8=new A.de(B.K,null,null,D.byN,null)
D.aeM=new A.fO(2,null,null,null,null,B.X,null,null,null,null)
D.ahq=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahR=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajl=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.an3=new A.V(0,3,0,3)
D.anc=new A.V(10,0,10,88)
D.any=new A.V(12,6,12,10)
D.anM=new A.V(14,8,14,6)
D.O6=new A.V(18,12,18,12)
D.aoO=new A.V(20,18,20,8)
D.aoZ=new A.V(20,8,20,20)
D.OJ=new A.V(8,6,15,8)
D.auQ=new A.K(983222,"MaterialIcons",!1)
D.aww=new A.a6(B.id,26,B.P,null,null,null)
D.awA=new A.a6(B.Qp,18,null,null,null,null)
D.awT=new A.a6(B.ph,14,B.X,null,null,null)
D.av7=new A.K(983420,"MaterialIcons",!1)
D.axE=new A.a6(D.av7,14,B.X,null,null,null)
D.atk=new A.K(62895,"MaterialIcons",!1)
D.axI=new A.a6(D.atk,14,B.X,null,null,null)
D.aAL=new A.a6(B.iT,20,null,null,null,null)
D.aB2=new A.a6(B.eR,16,null,null,null,null)
D.aPd=w([B.ai,B.R],x.O)
D.ST=new A.ap(B.ak,B.av,B.y,D.aPd,null,null)
D.bsF=new A.aK("NGMY OS","14.2.1")
D.brw=new A.aK("VirtualDroid","13.8.4")
D.brv=new A.aK("NGMY OS","15.0.0")
D.bse=new A.aK("VirtualDroid","14.1.2")
D.brt=new A.aK("NGMY Tab OS","12.9.7")
D.brr=new A.aK("NGMY OS","13.5.3")
D.brg=new A.aK("VirtualDroid","15.2.0")
D.brS=new A.aK("NGMY OS","14.8.1")
D.bsk=new A.aK("NGMY Tab OS","13.2.4")
D.bsP=new A.aK("VirtualDroid","12.6.9")
D.brc=new A.aK("NGMY OS","16.0.1")
D.br3=new A.aK("VirtualDroid","14.9.0")
D.bsx=new A.aK("NGMY Tab OS","14.0.3")
D.brF=new A.aK("NGMY OS","13.1.8")
D.brb=new A.aK("VirtualDroid","13.4.5")
D.brq=new A.aK("NGMY OS","15.3.2")
D.bsl=new A.aK("NGMY Tab OS","12.4.1")
D.bsz=new A.aK("VirtualDroid","16.1.0")
D.brR=new A.aK("NGMY OS","14.4.6")
D.bsG=new A.aK("VirtualDroid","15.0.8")
D.aOH=w([D.bsF,D.brw,D.brv,D.bse,D.brt,D.brr,D.brg,D.brS,D.bsk,D.bsP,D.brc,D.br3,D.bsx,D.brF,D.brb,D.brq,D.bsl,D.bsz,D.brR,D.bsG],A.bk("ab<+(m,m)>"))
D.buR=new A.ef(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bup=new A.ef(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.buk=new A.ef(["New York","United States",40.7128,-74.006,"America/New_York"])
D.but=new A.ef(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bug=new A.ef(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.buv=new A.ef(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buT=new A.ef(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buh=new A.ef(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.buo=new A.ef(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bux=new A.ef(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.buf=new A.ef(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buL=new A.ef(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buI=new A.ef(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bun=new A.ef(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buF=new A.ef(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.buE=new A.ef(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bue=new A.ef(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bus=new A.ef(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.buC=new A.ef(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.buH=new A.ef(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U4=w([D.buR,D.bup,D.buk,D.but,D.bug,D.buv,D.buT,D.buh,D.buo,D.bux,D.buf,D.buL,D.buI,D.bun,D.buF,D.buE,D.bue,D.bus,D.buC,D.buH],A.bk("ab<+(m,m,a8,a8,m)>"))
D.aUQ=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a00=new C.H2(0,"youtube")
D.a01=new C.H2(1,"tiktok")
D.Hd=new C.H2(2,"instagram")
D.a02=new C.H2(3,"facebook")
D.bmV=new C.H2(4,"other")
D.byp=new A.am(3,null,null,null)
D.bz6=new A.i8(4,10,8,0.52,null)
D.bO6=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCp=new A.aT(D.bO6,null,null,null,null,null,null,null,null,null,null,null,null,B.B,!1,null,null,null,B.m,null)
D.bFw=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNU=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bZu=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c_h=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c_n=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4J=new C.aDH(null)})();(function staticFields(){$.dhC=20
$.apN=null
$.bci=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dZh","DP",()=>A.R4(0))
w($,"dZi","LH",()=>A.R4(null))})()};
(a=>{a["oT4nFNUN93Lkn2Z9z8YHnWD6t2Q="]=a.current})($__dart_deferred_initializers__);