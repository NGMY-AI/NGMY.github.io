((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dVY(d,e){A.a5(d,!1).cw(A.e8(new C.d2Q(e),!0,null,x.H))},
UW(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UW=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LE()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a5,B.U),t)
w=3
return A.b(A.d7(B.C,new C.d2P(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UW)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dDS(r)
if(q==null){d.F(x.q).f.O(D.bAZ)
w=1
break}w=4
return A.b(A.bM(B.fK,null,x.H),$async$UW)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dhr=n
p=C.dDM(n)
n=$.DO()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6B(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UW,v)},
dhu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mQ(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H0(d){return C.dDV(d)},
dDV(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H0=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H0)
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
k=A.dm(k,new C.bco(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("aa<J.E>")
i=A.C(new A.aa(k,new C.bcp(),j),j.j("J.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dhw(q)
w=12
return A.b(C.H_(a3,p),$async$H0)
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
case 19:m=C.dhu(A.O(n,x.N,x.z))
l=C.dhw(A.a([m],x.e))
w=21
return A.b(C.H_(a3,l),$async$H0)
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
case 18:case 14:q=C.dDT()
w=22
return A.b(C.H_(a3,q),$async$H0)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H0,v)},
dhw(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bcg(),w).eF(0),u=new A.B(d,new C.bch(),w).eF(0),t=new A.B(d,new C.bci(),w).eF(0),s=new A.B(d,new C.bcj(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d6C(null,q,u,t,v,s));++q}return r},
apJ(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apJ=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H0(d),$async$apJ)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d5(t,new C.bck(),s).eF(0)
p=r.d5(t,new C.bcl(),s).eF(0)
o=r.d5(t,new C.bcm(),s).eF(0)
n=r.d5(t,new C.bcn(),s).eF(0)
m=C.d6C(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H_(d,t),$async$apJ)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apJ,v)},
H_(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H_=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H_)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcf(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.ak(s,null)),$async$H_)
case 3:return A.f(null,v)}})
return A.h($async$H_,v)},
dDT(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d6C(w,w,t,s,u,r)
return q},
d6C(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jr(),h=d==null,g=D.TL[B.n.al(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TL[B.n.al(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bce(),A.T(p).j("B<1,m>")).f9(0)
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
w=B.n.al(e,20)
k=D.aTv[w]
j=D.aNS[w]
return new C.mQ("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dDU(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dDU(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.jg(d.by(256),16),2,"0")
return B.d.f9(v)},
d2Q:function d2Q(d){this.a=d},
d2P:function d2P(d,e){this.a=d
this.b=e},
d2L:function d2L(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2O:function d2O(d,e){this.a=d
this.b=e},
K3:function K3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mQ:function mQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bco:function bco(){},
bcp:function bcp(){},
bcg:function bcg(){},
bch:function bch(){},
bci:function bci(){},
bcj:function bcj(){},
bck:function bck(){},
bcl:function bcl(){},
bcm:function bcm(){},
bcn:function bcn(){},
bcf:function bcf(){},
bce:function bce(){},
GZ:function GZ(d,e){this.c=d
this.a=e},
aav:function aav(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cv6:function cv6(){},
cv5:function cv5(d,e){this.a=d
this.b=e},
cv3:function cv3(d){this.a=d},
cv4:function cv4(d,e){this.a=d
this.b=e},
cv7:function cv7(d){this.a=d},
cvb:function cvb(d){this.a=d},
cvc:function cvc(d,e){this.a=d
this.b=e},
cva:function cva(d,e,f){this.a=d
this.b=e
this.c=f},
cv9:function cv9(d,e){this.a=d
this.b=e},
cv8:function cv8(d,e){this.a=d
this.b=e},
cvd:function cvd(d){this.a=d},
Sj:function Sj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBo:function aBo(d,e){this.c=d
this.a=e},
GY:function GY(d,e){this.c=d
this.a=e},
aCm:function aCm(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cv0:function cv0(d){this.a=d},
cv1:function cv1(d){this.a=d},
cv2:function cv2(d){this.a=d},
cv_:function cv_(d,e){this.a=d
this.b=e},
cuX:function cuX(d){this.a=d},
cuY:function cuY(d){this.a=d},
cuW:function cuW(d,e){this.a=d
this.b=e},
cuZ:function cuZ(d){this.a=d},
cuV:function cuV(d){this.a=d},
aIV:function aIV(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aIW:function aIW(d,e,f){this.c=d
this.d=e
this.a=f},
aCs:function aCs(d,e){this.c=d
this.a=e},
aIU:function aIU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cIT:function cIT(d){this.a=d},
cIU:function cIU(d){this.a=d},
aDB:function aDB(d){this.a=d},
axN:function axN(d,e){this.c=d
this.a=e},
dDS(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dDR(v)
if(u!=null)return new C.oQ(w,C.d6A(u,!1),D.a_D,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dDQ(v)
if(t!=null)return new C.oQ(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_E,"TikTok",q)
s=C.dDP(w,v)
if(s!=null)return s
r=C.dDO(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oQ(w,w,D.bly,"Video",q)
return q},
dDP(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oQ(d,"https://www.instagram.com/reel/"+w+u,D.GV,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oQ(d,"https://www.instagram.com/p/"+w+u,D.GV,t,null)}return null},
dDO(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oQ(d,"https://www.facebook.com/plugins/video.php?href="+A.eB(2,d,B.aN,!1)+"&show_text=false&width=734",D.a_F,"Facebook",null)},
dDR(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dDQ(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H1:function H1(d,e){this.a=d
this.b=e},
oQ:function oQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1u:function a1u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCn:function aCn(d,e){var _=this
_.d=$
_.cU$=d
_.aT$=e
_.c=_.a=null},
aDF:function aDF(d,e){this.c=d
this.a=e},
cyE:function cyE(d){this.a=d},
cyF:function cyF(d){this.a=d},
CA:function CA(d,e){this.c=d
this.a=e},
af6:function af6(){},
dhv(d,e,f,g,h,i){return new C.a1v(i,f,h,e,g,d)},
dUE(d){var w=window
w.toString
A.h4(w,"message",new C.d_2(d),!1,x._)},
a1v:function a1v(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaw:function aaw(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cve:function cve(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvk:function cvk(d){this.a=d},
cvi:function cvi(d){this.a=d},
cvj:function cvj(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvh:function cvh(d){this.a=d},
cvf:function cvf(d){this.a=d},
d_2:function d_2(d){this.a=d},
dhp(){var w,v,u
try{v=A.y8()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d6A(d,e){var w=C.dhp(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eB(2,w,B.aN,!1))
v.push("widget_referrer="+A.eB(2,w,B.aN,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d6z(d){var w=A.ap(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dhq(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDL(d,e,f){var w,v,u=C.d6z(d)
if(u!=null){if(f){w=C.dhp()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dhq(C.d6A(u,e))}return C.dhq(d)},
dDM(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dDN(d){var w
if($.LE().a==null)return!1
w=$.DO().a
return d>=w&&d<w+4},
dht(){var w=$.apI
if(w!=null)w.a7(0)
$.apI=null
$.DO().sv(0,0)},
dhs(){var w,v,u,t=$.LE()
if(t.a==null)return
w=$.apI
if(w!=null)w.a7(0)
v=$.dhr
if(v<=4){t=t.a
t.toString
C.d6B(t)
return}w=$.DO()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6B(t)},
d6B(d){var w=$.apI
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
default:w=null}$.apI=A.dp(A.d8(0,0,0,0,0,w),C.dUP())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K3.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eD,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.X:B.cU,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.en,w,w,w)}}
C.mQ.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GZ.prototype={
S(){return new C.aav(A.a([],x.e))},
gez(){return this.c}}
C.aav.prototype={
Z(){var w=this
w.a3()
$.DO().ai(0,w.garW())
C.dUE(w.gbdQ())
w.Vk()},
bdi(){if(this.c!=null)this.n(new C.cv6())},
bdR(){C.dhs()},
p(){$.DO().V(0,this.garW())
C.dht()
$.LE().sv(0,null)
this.a2()},
Vk(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vk=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H0(t.a.c),$async$Vk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv5(t,s))
$.bcd=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vk,v)},
RC(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RC=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cv3(t))
w=3
return A.b(C.apJ(t.a.c),$async$RC)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv4(t,s))
$.bcd=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RC,v)},
bfJ(d){var w=this.c
w.toString
A.a5(w,!1).cw(A.e8(new C.cv7(d),!1,null,x.H))},
bgk(){var w=this.c
w.toString
return C.UW(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.V,t=u?B.dQ:B.da,s=A.aJ(v,v,v,v,B.F9,v,v,v,new C.cvb(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.B6(A.F(A.a([A.I(new A.G(B.i5,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.S,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aQ(!1,B.L,!0,v,A.aW(!1,v,!0,new A.G(B.aJ,A.a1(B.eQ,B.P,v,v,28),v),B.bY,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgj(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a_)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cj(!0,A.y(A.a([new A.G(D.Ot,r,v),A.I(w.e?B.l8:new A.iq($.LE(),new C.cvc(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.ch(v,t,s,v,!1,!1,A.akv(B.P,B.AK,B.mV,D.bYX,w.e?v:new C.cvd(w)),v)}}
C.Sj.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.cs,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1u(n,!0,!C.dDN(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.ib,B.ld,u,u,22),B.aj,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vt,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aQ(!1,B.L,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cC(p,A.hE(A.y(A.a([new C.aBo(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.t0,B.P.l(0.85),u,u,9),D.bwZ,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.amA,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.SC,B.k),u,u,u,B.f7,u,u,u),1),B.aj,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a_)}}
C.aBo.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.p6,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oi,w,w,w)}}
C.GY.prototype={
S(){return new C.aCm()}}
C.aCm.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.V,u=v?B.dQ:B.da,t=A.aJ(w,w,w,w,B.F9,w,w,w,new C.cv0(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ch(w,u,A.cj(!0,A.y(A.a([new A.G(D.Ot,A.F(A.a([t,A.I(new A.B6(A.F(A.a([A.I(new A.G(B.i5,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.S,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aQ(!1,B.L,!0,w,A.aW(!1,w,!0,new A.G(B.aJ,A.a1(B.eQ,B.P,w,w,28),w),B.bY,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cv1(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.iq($.LE(),new C.cv2(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aIV.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.ep,28),new A.ag(0,B.w,B.q.l(0.45),B.cB,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhv(new A.dq(v+"_full_"+u,x.W),!1,u,!1,w.gaGy(),v+"_full")
w=v}else w=new C.aCs(t.r,s)}else w=new C.axN(m,s)
else w=D.c2W
return A.u(s,A.cC(n,A.hE(A.y(A.a([new C.aIW(m,l,s),A.I(w,1),new C.aIU(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.SC,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aIW.prototype={
C(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h3(r)
w=new A.di(q,r)
v=w.gGB()===0?12:w.gGB()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eL:B.hr)===B.eL?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lN,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b9,D.axb,B.dB,D.awq,B.dB,D.axf],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.aj,A.F(A.a([A.a1(B.F2,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.ani,s,s,s)}}
C.aCs.prototype={
C(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.xc,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.ex(D.aAA,D.bMt,this.c,A.ey(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aI(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vt,w,w,w,w,w,w,w,w,1/0)}}
C.aIU.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arP(B.R3,"YouTube",s===0,r,new C.cIT(u))
s=u.arP(B.ky,"Device",s===1,r,new C.cIU(u))
w=r?"Power off":"Power on"
v=r?D.R4:D.aun
return A.u(t,A.F(A.a([q,B.a0,s,B.b3,A.aJ(t,t,t,t,A.a1(v,r?B.b4:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cS)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.an4,t,t,t)},
arP(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aW
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aQ(!1,B.L,!0,u,A.aW(!1,A.n(10),!0,new A.G(B.lm,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a_),1)}}
C.aDB.prototype={
C(d){return D.adq}}
C.axN.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.ja,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e7(A.a([t,B.aj,s,B.R,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.ag(u,0,10):u)],x.p),v,B.aJ,v,v,B.Z,!1)},
qB(d,e){var w=null
return new A.G(B.bZ,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.j(e,w,w,w,w,w,w,D.bE5,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H1.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oQ.prototype={
gaGy(){var w=this.c
return w===D.a_D||w===D.a_E||w===D.GV||w===D.a_F}}
C.a1u.prototype={
S(){return new C.aCn(null,null)}}
C.aCn.prototype={
Z(){this.a3()
var w=A.bF(null,B.rk,null,1,null,this)
w.mp(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPY()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dK(t,new A.t(t,t,t,t,t,new A.aq(B.d8,B.cb,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.bv),q=x.Y,p=u.d
p===$&&A.c()
p=A.ct(B.i2,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d1(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bl.T>")),!1,A.a1(B.ib,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ld
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDF(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aL(B.a6,t,B.aS,B.m,s,t)}}
C.aDF.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kA(u,new C.cyE(this),B.bx,!0,w,w,new C.cyF(this),w)
return new C.CA(v,w)}}
C.CA.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aK(A.a([B.r2,B.L7],x.O),B.ib)
break
case 1:w=new A.aK(A.a([B.vt,D.aho],x.O),B.jD)
break
case 2:w=new A.aK(A.a([D.aiT,D.agY],x.O),B.xk)
break
case 3:w=new A.aK(A.a([B.S,B.cH],x.O),B.xo)
break
case 4:w=new A.aK(A.a([B.aa,B.ai],x.O),B.mR)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.P.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.ak,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.af6.prototype={
p(){var w=this,v=w.aT$
if(v!=null)v.V(0,w.gdG())
w.aT$=null
w.a2()},
bp(){this.bH()
this.bD()
this.dH()}}
C.a1v.prototype={
S(){return new C.aaw()}}
C.aaw.prototype={
bwc(d,e){var w=C.d6z(d)
if(w!=null)return C.d6A(w,e)
return d},
a3z(d,e){var w,v=this,u=C.d6z(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwc(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDL(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bu6(){var w,v=this
if(v.w)return
v.n(new C.cve(v))
w=v.e
if(w!=null)v.a3z(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.DP()
$.oj().rP(w,new C.cvm(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvf(v))
w=v.e
w.toString
v.a3z(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.Rj,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.hE(A.aU(new A.G(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.O,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yc(n,B.pJ,w)],v)
if(o.f)w.push(A.hE(A.aU(new A.am(28,28,D.aei,n),n,n,n),B.ch,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aW,B.o,1)
q=A.a1(B.Rl,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eX(0,A.aQ(!1,B.L,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.NR,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbu5(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a_)))}return new A.aL(B.a6,n,B.aS,B.m,w,n)}}
var z=a.updateTypes(["m(mQ)","~()","GZ(Q)","mQ(W<@,@>)","a_(mQ)","W<m,@>(mQ)","ay<~>()","GY(Q)","iq<R>(Q,oQ?,p?)","Sj(Q,R)","ub(Q,oQ?,p?)","CA(Q,ak,dw?)"])
C.d2Q.prototype={
$1(d){return new C.GZ(this.a,null)},
$S:z+2}
C.d2P.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.V,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.S],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.ep,32)],x.V),g=A.U(m?B.bl:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.aw3,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.S,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.aj,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.X:B.az,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.er,w,A.aJ(n,n,n,n,A.a1(B.cI,m?B.a7:B.ch,n,n,n),n,n,n,new C.d2L(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a2,B.a4,B.y,j,n,n),B.k),n,n,n,B.O2,n,n,n)
e=A.er(B.bW,A.a([new C.K3("YouTube",B.F1,m,n),new C.K3("TikTok",B.jD,m,n),new C.K3("Instagram",B.xk,m,n),new C.K3("Facebook",B.xo,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.S,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.da
r=A.a1(B.jC,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bl:B.b0
u=A.y(A.a([e,B.aq,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bh(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aI(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.JX),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.M,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.iZ(D.aw7,D.bY3,new C.d2M(d),A.iC(n,n,n,n,n,n,n,n,n,n,n,m?B.aF:B.az,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.V(12,0,12,12+l.f.d),A.dK(A.cC(f,A.y(A.a([j,new A.G(D.aok,u,n),new A.G(D.aov,A.F(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.X:B.a1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2N(d),n,n),B.a0,A.dL(D.aAi,D.bYR,new C.d2O(d,w),A.bu(B.P,n,n,n,B.c,n,D.NR,n,new A.bE(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.O,0,B.l),B.as),new A.t(n,n,g,k,h,new A.aq(B.ak,B.av,B.y,i,n,n),B.k),B.bv),n)},
$S:67}
C.d2L.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2M.prototype={
$0(){C.dht()
$.LE().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2N.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2O.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bco.prototype={
$1(d){return C.dhu(A.O(d,x.N,x.z))},
$S:z+3}
C.bcp.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcg.prototype={
$1(d){return d.c},
$S:z+0}
C.bch.prototype={
$1(d){return d.r},
$S:z+0}
C.bci.prototype={
$1(d){return d.f},
$S:z+0}
C.bcj.prototype={
$1(d){return d.at},
$S:z+0}
C.bck.prototype={
$1(d){return d.c},
$S:z+0}
C.bcl.prototype={
$1(d){return d.r},
$S:z+0}
C.bcm.prototype={
$1(d){return d.f},
$S:z+0}
C.bcn.prototype={
$1(d){return d.at},
$S:z+0}
C.bcf.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bce.prototype={
$1(d){return B.a.bj(B.n.jg(d,16),2,"0").toUpperCase()},
$S:76}
C.cv6.prototype={
$0(){},
$S:0}
C.cv5.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cv3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cv4.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cv7.prototype={
$1(d){return new C.GY(this.a,null)},
$S:z+7}
C.cvb.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvc.prototype={
$3(d,e,f){return new A.iq($.DO(),new C.cva(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cva.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ay(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.P.l(0.12)
s=A.n(12)
r=A.U(B.P.l(0.35),B.o,1)
q=A.a1(B.ib,B.P,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DO().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.S,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cr,B.eN,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cC(s,new A.iM(1.7777777777777777,C.dhv(new A.dq("fleet_master_"+r,x.W),!0,r,!0,j.gaGy(),"fleet_master"),k),B.as),B.R],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zK(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kb(new A.G(B.CQ,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.oZ(D.amJ,A.atc(new A.o_(new C.cv9(i,j),J.a3(i.d),!1,!0,!0,A.vQ(),k),D.bxH),k)],w))},
$S:1590}
C.cv9.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sj(v,e,J.a3(w.d),new C.cv8(w,v),this.b,null)},
$S:z+9}
C.cv8.prototype={
$0(){return this.a.bfJ(this.b)},
$S:0}
C.cvd.prototype={
$0(){this.a.RC()
return null},
$S:0}
C.cv0.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cv1.prototype={
$0(){C.UW(this.a,$.bcd)
return null},
$S:0}
C.cv2.prototype={
$3(d,e,f){return A.fO(new C.cv_(this.a,e))},
$S:z+10}
C.cv_.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.co(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.aq,new C.aIV(u,s.a.c,s.e,s.d,new C.cuX(s),new C.cuY(s),new C.cuZ(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wy,v,v,B.Z),v,v,v)},
$S:1591}
C.cuX.prototype={
$0(){var w=this.a.c
w.toString
C.UW(w,$.bcd)
return null},
$S:0}
C.cuY.prototype={
$1(d){var w=this.a
return w.n(new C.cuW(w,d))},
$S:39}
C.cuW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cuZ.prototype={
$0(){var w=this.a
return w.n(new C.cuV(w))},
$S:0}
C.cuV.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cIT.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cIU.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cyE.prototype={
$3(d,e,f){return new C.CA(this.a.c,null)},
$S:z+11}
C.cyF.prototype={
$3(d,e,f){if(f==null)return e
return new A.aL(B.a6,null,B.aS,B.m,A.a([new C.CA(this.a.c,null),D.adF],x.p),null)},
$C:"$3",
$R:3,
$S:494}
C.cve.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvm.prototype={
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
A.h4(v,"load",new C.cvk(w),!1,u)
v=w.e
v.toString
A.h4(v,"error",new C.cvl(w),!1,u)
w=w.e
w.toString
return w},
$S:583}
C.cvk.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvi(w))
A.bM(B.B,new C.cvj(w),x.H)}},
$S:42}
C.cvi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvj.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvg(w))},
$S:12}
C.cvg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvh(w))},
$S:42}
C.cvh.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvf.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d_2.prototype={
$1(d){var w,v,u,t,s=new A.C9([],[]).FT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1592};(function aliases(){var w=C.af6.prototype
w.aPY=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aav.prototype,"garW","bdi",1)
w(u,"gbdQ","bdR",1)
w(u,"gbgj","bgk",6)
w(C.aaw.prototype,"gbu5","bu6",1)
v(C,"dUP","dhs",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.w9,[C.d2Q,C.d2P,C.bco,C.bcp,C.bcg,C.bch,C.bci,C.bcj,C.bck,C.bcl,C.bcm,C.bcn,C.bcf,C.bce,C.cv7,C.cvc,C.cva,C.cv2,C.cuY,C.cyE,C.cyF,C.cvm,C.cvk,C.cvl,C.d_2])
v(A.Wt,[C.d2L,C.d2M,C.d2N,C.d2O,C.cv6,C.cv5,C.cv3,C.cv4,C.cvb,C.cv8,C.cvd,C.cv0,C.cv1,C.cuX,C.cuW,C.cuZ,C.cuV,C.cIT,C.cIU,C.cve,C.cvi,C.cvj,C.cvg,C.cvh,C.cvf])
v(A.aA,[C.K3,C.Sj,C.aBo,C.aIV,C.aIW,C.aCs,C.aIU,C.aDB,C.axN,C.aDF,C.CA])
v(A.ak,[C.mQ,C.oQ])
v(A.ad,[C.GZ,C.GY,C.a1u,C.a1v])
v(A.ae,[C.aav,C.aCm,C.af6,C.aaw])
v(A.Wu,[C.cv9,C.cv_])
u(C.H1,A.ayG)
u(C.aCn,C.af6)
w(C.af6,A.e5)})()
A.dkK(b.typeUniverse,JSON.parse('{"GZ":{"ad":[],"p":[]},"Sj":{"aA":[],"p":[]},"GY":{"ad":[],"p":[]},"K3":{"aA":[],"p":[]},"aav":{"ae":["GZ"]},"aBo":{"aA":[],"p":[]},"aCm":{"ae":["GY"]},"aIV":{"aA":[],"p":[]},"aIW":{"aA":[],"p":[]},"aCs":{"aA":[],"p":[]},"aIU":{"aA":[],"p":[]},"aDB":{"aA":[],"p":[]},"axN":{"aA":[],"p":[]},"a1u":{"ad":[],"p":[]},"CA":{"aA":[],"p":[]},"aCn":{"ae":["a1u"]},"aDF":{"aA":[],"p":[]},"a1v":{"ad":[],"p":[]},"aaw":{"ae":["a1v"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mQ>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<R>"),X:w("ac<mQ>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mN"),_:w("Av"),k:w("mQ"),N:w("m"),Y:w("bn<a8>"),W:w("dq<m>"),J:w("iq<R>"),j:w("iq<oQ?>"),E:w("yh<cD>"),q:w("T0"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.R4=new A.K(983224,"MaterialIcons",!1)
D.ayN=new A.a6(D.R4,48,B.aW,null,null,null)
D.bDK=new A.M(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLo=new A.x("Powered off",null,D.bDK,null,null,null,null,null,null,null,null,null)
D.aMc=w([D.ayN,B.z,D.bLo],x.p)
D.ak5=new A.ej(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aMc,null)
D.adq=new A.de(B.K,null,null,D.ak5,null)
D.bxm=new A.am(18,18,B.KR,null)
D.adF=new A.de(B.K,null,null,D.bxm,null)
D.aei=new A.fM(2,null,null,null,null,B.X,null,null,null,null)
D.agY=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aho=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiT=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amA=new A.V(0,3,0,3)
D.amJ=new A.V(10,0,10,88)
D.an4=new A.V(12,6,12,10)
D.ani=new A.V(14,8,14,6)
D.NR=new A.V(18,12,18,12)
D.aok=new A.V(20,18,20,8)
D.aov=new A.V(20,8,20,20)
D.Ot=new A.V(8,6,15,8)
D.aun=new A.K(983222,"MaterialIcons",!1)
D.aw3=new A.a6(B.ib,26,B.P,null,null,null)
D.aw7=new A.a6(B.Q9,18,null,null,null,null)
D.awq=new A.a6(B.p6,14,B.X,null,null,null)
D.auF=new A.K(983420,"MaterialIcons",!1)
D.axb=new A.a6(D.auF,14,B.X,null,null,null)
D.asR=new A.K(62895,"MaterialIcons",!1)
D.axf=new A.a6(D.asR,14,B.X,null,null,null)
D.aAi=new A.a6(B.iP,20,null,null,null,null)
D.aAA=new A.a6(B.eQ,16,null,null,null,null)
D.aOj=w([B.ai,B.S],x.O)
D.SC=new A.aq(B.ak,B.av,B.y,D.aOj,null,null)
D.brg=new A.aK("NGMY OS","14.2.1")
D.bq7=new A.aK("VirtualDroid","13.8.4")
D.bq6=new A.aK("NGMY OS","15.0.0")
D.bqQ=new A.aK("VirtualDroid","14.1.2")
D.bq4=new A.aK("NGMY Tab OS","12.9.7")
D.bq2=new A.aK("NGMY OS","13.5.3")
D.bpS=new A.aK("VirtualDroid","15.2.0")
D.bqt=new A.aK("NGMY OS","14.8.1")
D.bqW=new A.aK("NGMY Tab OS","13.2.4")
D.brq=new A.aK("VirtualDroid","12.6.9")
D.bpO=new A.aK("NGMY OS","16.0.1")
D.bpF=new A.aK("VirtualDroid","14.9.0")
D.br8=new A.aK("NGMY Tab OS","14.0.3")
D.bqg=new A.aK("NGMY OS","13.1.8")
D.bpN=new A.aK("VirtualDroid","13.4.5")
D.bq1=new A.aK("NGMY OS","15.3.2")
D.bqX=new A.aK("NGMY Tab OS","12.4.1")
D.bra=new A.aK("VirtualDroid","16.1.0")
D.bqs=new A.aK("NGMY OS","14.4.6")
D.brh=new A.aK("VirtualDroid","15.0.8")
D.aNS=w([D.brg,D.bq7,D.bq6,D.bqQ,D.bq4,D.bq2,D.bpS,D.bqt,D.bqW,D.brq,D.bpO,D.bpF,D.br8,D.bqg,D.bpN,D.bq1,D.bqX,D.bra,D.bqs,D.brh],A.bk("ab<+(m,m)>"))
D.bts=new A.ee(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bt0=new A.ee(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bsW=new A.ee(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bt4=new A.ee(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bsS=new A.ee(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bt6=new A.ee(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.btu=new A.ee(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bsT=new A.ee(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bt_=new A.ee(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bt8=new A.ee(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bsR=new A.ee(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.btm=new A.ee(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.btj=new A.ee(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bsZ=new A.ee(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.btg=new A.ee(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.btf=new A.ee(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bsQ=new A.ee(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bt3=new A.ee(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.btd=new A.ee(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bti=new A.ee(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TL=w([D.bts,D.bt0,D.bsW,D.bt4,D.bsS,D.bt6,D.btu,D.bsT,D.bt_,D.bt8,D.bsR,D.btm,D.btj,D.bsZ,D.btg,D.btf,D.bsQ,D.bt3,D.btd,D.bti],A.bk("ab<+(m,m,a8,a8,m)>"))
D.aTv=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_D=new C.H1(0,"youtube")
D.a_E=new C.H1(1,"tiktok")
D.GV=new C.H1(2,"instagram")
D.a_F=new C.H1(3,"facebook")
D.bly=new C.H1(4,"other")
D.bwZ=new A.am(3,null,null,null)
D.bxH=new A.i8(4,10,8,0.52,null)
D.bMG=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bAZ=new A.aT(D.bMG,null,null,null,null,null,null,null,null,null,null,null,null,B.B,!1,null,null,null,B.m,null)
D.bE5=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMt=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bY3=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bYR=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bYX=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c2W=new C.aDB(null)})();(function staticFields(){$.dhr=20
$.apI=null
$.bcd=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dZ6","DO",()=>A.R1(0))
w($,"dZ7","LE",()=>A.R1(null))})()};
(a=>{a["EC+uy7TsdkLm9LRYZN8M6pIZwIs="]=a.current})($__dart_deferred_initializers__);