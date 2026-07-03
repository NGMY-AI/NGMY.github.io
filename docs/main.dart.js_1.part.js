((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dIO(d,e){A.a9(d,!1).cP(A.en(new C.cSk(e),!0,null,x.H))},
To(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$To=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Kp()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a7(new A.aH(n,B.a_,B.U),t)
w=3
return A.b(A.dh(B.C,new C.cSj(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$To)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.drm(r)
if(q==null){d.F(x.q).f.O(D.bsC)
w=1
break}w=4
return A.b(A.bO(B.ft,null,x.H),$async$To)
case 4:if(d.e==null){w=1
break}n=B.p.aE(e,1,999)
$.d5y=n
p=C.drg(n)
n=$.CP()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.cVX(q)
d.F(x.q).f.O(A.bg(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$To,v)},
d5B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mo(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
G_(d){return C.drp(d)},
drp(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$G_=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$G_)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a1(e)
a0=A.aE(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aG(0,a0,null)
w=x.a.b(r)&&J.cs(r)?10:11
break
case 10:k=J.hq(r,x.f)
k=A.dU(k,new C.b8Z(),k.$ti.k("L.E"),x.k)
j=A.T(k).k("ab<L.E>")
i=A.E(new A.ab(k,new C.b9_(),j),j.k("L.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.d5D(q)
w=12
return A.b(C.FZ(a3,p),$async$G_)
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
case 9:case 5:o=A.aE(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.v.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.d5B(A.M(n,x.N,x.z))
l=C.d5D(A.a([m],x.e))
w=21
return A.b(C.FZ(a3,l),$async$G_)
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
case 18:case 14:q=C.drn()
w=22
return A.b(C.FZ(a3,q),$async$G_)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$G_,v)},
d5D(d){var w=A.S(d).k("A<1,m>"),v=new A.A(d,new C.b8R(),w).eD(0),u=new A.A(d,new C.b8S(),w).eD(0),t=new A.A(d,new C.b8T(),w).eD(0),s=new A.A(d,new C.b8U(),w).eD(0),r=A.bf(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.cVY(null,q,u,t,v,s));++q}return r},
anz(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$anz=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.G_(d),$async$anz)
case 3:t=f
s=x.N
r=J.ch(t)
q=r.dh(t,new C.b8V(),s).eD(0)
p=r.dh(t,new C.b8W(),s).eD(0)
o=r.dh(t,new C.b8X(),s).eD(0)
n=r.dh(t,new C.b8Y(),s).eD(0)
m=C.cVY(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.FZ(d,t),$async$anz)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$anz,v)},
FZ(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$FZ=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$FZ)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.b8Q(),x.P)
s=A.E(s,s.$ti.k("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.ak(s,null)),$async$FZ)
case 3:return A.f(null,v)}})
return A.h($async$FZ,v)},
drn(){var w,v=x.N,u=A.b2(v),t=A.b2(v),s=A.b2(v),r=A.b2(v),q=J.e_(20,x.k)
for(w=0;w<20;++w)q[w]=C.cVY(w,w,t,s,u,r)
return q},
cVY(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.k3(),h=d==null,g=D.Rj[B.p.ap(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Rj[B.p.ap(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bD(256)
n=new A.A(p,new C.b8P(),A.S(p).k("A<1,m>")).fg(0)
u="VND-"+B.a.aj(n,0,4)+"-"+B.a.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bD(10)
t=B.d.fg(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bP(B.p.l2(i.bD(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.ap(e,20)
k=D.aOl[w]
j=D.aJl[w]
return new C.mo("vd_"+1000*Date.now()+"_"+e+"_"+i.bD(99999),"Device "+B.a.bP(B.p.q(e+1),2,"0"),u,k,C.dro(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.K(Date.now(),0,!1).a0().X())},
dro(d,e){var w,v=J.e_(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bP(B.p.l2(d.bD(256),16),2,"0")
return B.d.fg(v)},
cSk:function cSk(d){this.a=d},
cSj:function cSj(d,e){this.a=d
this.b=e},
cSf:function cSf(d){this.a=d},
cSg:function cSg(d){this.a=d},
cSh:function cSh(d){this.a=d},
cSi:function cSi(d,e){this.a=d
this.b=e},
IU:function IU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mo:function mo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b8Z:function b8Z(){},
b9_:function b9_(){},
b8R:function b8R(){},
b8S:function b8S(){},
b8T:function b8T(){},
b8U:function b8U(){},
b8V:function b8V(){},
b8W:function b8W(){},
b8X:function b8X(){},
b8Y:function b8Y(){},
b8Q:function b8Q(){},
b8P:function b8P(){},
FY:function FY(d,e){this.c=d
this.a=e},
a8H:function a8H(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cn9:function cn9(){},
cn8:function cn8(d,e){this.a=d
this.b=e},
cn6:function cn6(d){this.a=d},
cn7:function cn7(d,e){this.a=d
this.b=e},
cna:function cna(d){this.a=d},
cne:function cne(d){this.a=d},
cnf:function cnf(d,e){this.a=d
this.b=e},
cnd:function cnd(d,e,f){this.a=d
this.b=e
this.c=f},
cnc:function cnc(d,e){this.a=d
this.b=e},
cnb:function cnb(d,e){this.a=d
this.b=e},
cng:function cng(d){this.a=d},
QX:function QX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
az7:function az7(d,e){this.c=d
this.a=e},
FX:function FX(d,e){this.c=d
this.a=e},
aA5:function aA5(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cn3:function cn3(d){this.a=d},
cn4:function cn4(d){this.a=d},
cn5:function cn5(d){this.a=d},
cn2:function cn2(d,e){this.a=d
this.b=e},
cn_:function cn_(d){this.a=d},
cn0:function cn0(d){this.a=d},
cmZ:function cmZ(d,e){this.a=d
this.b=e},
cn1:function cn1(d){this.a=d},
cmY:function cmY(d){this.a=d},
aGq:function aGq(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aGr:function aGr(d,e,f){this.c=d
this.d=e
this.a=f},
aAb:function aAb(d,e){this.c=d
this.a=e},
aGp:function aGp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cyR:function cyR(d){this.a=d},
cyS:function cyS(d){this.a=d},
aBh:function aBh(d){this.a=d},
avB:function avB(d,e){this.c=d
this.a=e},
drm(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.drl(v)
if(u!=null)return new C.om(w,C.cVW(u,!1),D.Yb,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.drk(v)
if(t!=null)return new C.om(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Yc,"TikTok",q)
s=C.drj(w,v)
if(s!=null)return s
r=C.dri(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.om(w,w,D.bdO,"Video",q)
return q},
drj(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.om(d,"https://www.instagram.com/reel/"+w+u,D.EM,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.om(d,"https://www.instagram.com/p/"+w+u,D.EM,t,null)}return null},
dri(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.om(d,"https://www.facebook.com/plugins/video.php?href="+A.eP(2,d,B.aM,!1)+"&show_text=false&width=734",D.Yd,"Facebook",null)},
drl(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
drk(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
G0:function G0(d,e){this.a=d
this.b=e},
om:function om(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_S:function a_S(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aA6:function aA6(d,e){var _=this
_.d=$
_.cV$=d
_.aZ$=e
_.c=_.a=null},
aBl:function aBl(d,e){this.c=d
this.a=e},
cpJ:function cpJ(d){this.a=d},
cpK:function cpK(d){this.a=d},
BG:function BG(d,e){this.c=d
this.a=e},
adb:function adb(){},
d5C(d,e,f,g,h,i){return new C.a_T(i,f,h,e,g,d)},
dHB(d){var w=window
w.toString
A.hm(w,"message",new C.cOC(d),!1,x._)},
a_T:function a_T(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
a8I:function a8I(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cnh:function cnh(d){this.a=d},
cnp:function cnp(d){this.a=d},
cnn:function cnn(d){this.a=d},
cnl:function cnl(d){this.a=d},
cnm:function cnm(d){this.a=d},
cnj:function cnj(d){this.a=d},
cno:function cno(d){this.a=d},
cnk:function cnk(d){this.a=d},
cni:function cni(d){this.a=d},
cOC:function cOC(d){this.a=d},
d5w(){var w,v,u
try{v=A.xn()
w=v.gpH(v)
if(J.a4(w)!==0&&!J.t(w,"null")&&!J.cv(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
cVW(d,e){var w=C.d5w(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eP(2,w,B.aM,!1))
v.push("widget_referrer="+A.eP(2,w,B.aM,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
cVV(d){var w=A.ap(y.c,!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
d5x(d){var w=A.bv(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bv(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
drf(d,e,f){var w,v,u=C.cVV(d)
if(u!=null){if(f){w=C.d5w()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.d5x(C.cVW(u,e))}return C.d5x(d)},
drg(d){if(d<=4)return 0
return B.p.aY(d-1,4)*4},
drh(d){var w
if($.Kp().a==null)return!1
w=$.CP().a
return d>=w&&d<w+4},
d5A(){var w=$.any
if(w!=null)w.aa(0)
$.any=null
$.CP().sv(0,0)},
d5z(){var w,v,u,t=$.Kp()
if(t.a==null)return
w=$.any
if(w!=null)w.aa(0)
v=$.d5y
if(v<=4){t=t.a
t.toString
C.cVX(t)
return}w=$.CP()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.cVX(t)},
cVX(d){var w=$.any
if(w!=null)w.aa(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.any=A.dk(A.d3(0,0,0,0,0,w),C.dHM())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.IU.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.N.m(0.25),B.o,1),r=A.a3(this.d,B.N,w,w,14)
return A.u(w,A.G(A.a([r,B.eI,A.j(this.c,w,w,w,w,A.l(w,w,v?B.V:B.dh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.v(u,w,s,t,w,w,B.k),w,w,w,B.fN,w,w,w)}}
C.mo.prototype={
af(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.FY.prototype={
T(){return new C.a8H(A.a([],x.e))},
gfU(){return this.c}}
C.a8H.prototype={
Z(){var w=this
w.a5()
$.CP().ai(0,w.gaqa())
C.dHB(w.gbaX())
w.U9()},
bap(){if(this.c!=null)this.p(new C.cn9())},
baY(){C.d5z()},
n(){$.CP().V(0,this.gaqa())
C.d5A()
$.Kp().sv(0,null)
this.a2()},
U9(){var w=0,v=A.i(x.H),u,t=this,s
var $async$U9=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.G_(t.a.c),$async$U9)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cn8(t,s))
$.b8O=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$U9,v)},
Qw(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Qw=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cn6(t))
w=3
return A.b(C.anz(t.a.c),$async$Qw)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cn7(t,s))
$.b8O=J.a4(t.d)
t.c.F(x.q).f.O(A.bg(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Qw,v)},
bcQ(d){var w=this.c
w.toString
A.a9(w,!1).cP(A.en(new C.cna(d),!1,null,x.H))},
bdk(){var w=this.c
w.toString
return C.To(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.W(d).ax.a===B.S,t=u?B.dv:B.d_,s=A.aS(v,v,v,v,B.D9,v,v,v,new C.cne(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Ac(A.G(A.a([A.H(new A.O(B.ia,A.j(r,1,B.ae,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.t,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aW(!1,B.M,!0,v,A.b0(!1,v,!0,new A.O(B.aH,A.a3(B.f7,B.N,v,v,28),v),B.bN,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbdj(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cR(!0,A.C(A.a([new A.O(D.Mh,r,v),A.H(w.e?B.kz:new A.i5($.Kp(),new C.cnf(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a4,!0,!0)
return A.cn(v,t,s,v,!1,!1,A.aiw(B.N,B.zh,B.oj,D.bGO,w.e?v:new C.cng(w)),v)}}
C.QX.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.m(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.N.m(0.18),B.cl,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a_S(n,!0,!C.drh(w),"Fold "+(B.p.aY(w,4)+1)+"/"+B.p.aY(v.e+4-1,4),u)
n=w}else n=A.u(u,A.C(A.a([A.a3(B.hC,B.kF,u,u,22),B.al,A.j("YouTube",u,u,u,u,A.l(u,u,B.c.m(0.7),u,u,u,u,u,u,u,u,7,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ar,B.f,0,B.l),B.h,B.uu,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aW(!1,B.M,!0,u,A.b0(!1,t,!0,A.C(A.a([A.H(A.u(u,A.cT(p,A.hD(A.C(A.a([new C.az7(o,u),A.H(n,1),A.u(u,A.G(A.a([A.a3(B.rc,B.N.m(0.85),u,u,9),D.boY,A.j("Tap",u,u,u,u,A.l(u,u,B.c.m(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ar,B.f,0,u,u),B.h,B.a9,u,u,u,u,u,D.ajO,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,u,u,new A.v(u,u,r,s,q,D.Qi,B.k),u,u,u,B.eC,u,u,u),1),B.al,A.j(o.b,1,B.ae,u,u,A.l(u,u,A.W(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,1,B.ae,u,u,A.l(u,u,A.W(d).ax.k3.m(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,1,B.ae,u,u,A.l(u,u,B.N.m(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a1)}}
C.az7.prototype={
C(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,B.ae,w,w,A.l(w,w,B.c.m(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a3(B.og,B.c.m(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a9,w,w,w,w,w,B.M6,w,w,w)}}
C.FX.prototype={
T(){return new C.aA5()}}
C.aA5.prototype={
C(d){var w=null,v=A.W(d).ax.a===B.S,u=v?B.dv:B.d_,t=A.aS(w,w,w,w,B.D9,w,w,w,new C.cn3(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cn(w,u,A.cR(!0,A.C(A.a([new A.O(D.Mh,A.G(A.a([t,A.H(new A.Ac(A.G(A.a([A.H(new A.O(B.ia,A.j(s.b+" \xb7 "+s.c,1,B.ae,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.t,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aW(!1,B.M,!0,w,A.b0(!1,w,!0,new A.O(B.aH,A.a3(B.f7,B.N,w,w,28),w),B.bN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cn4(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.i5($.Kp(),new C.cn5(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a4,!0,!0),w,!1,!1,w,w)}}
C.aGq.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.N.m(0.35),B.em,28),new A.ag(0,B.w,B.q.m(0.45),B.cw,18)],x.V),o=A.U(B.c.m(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.d5C(new A.dz(v+"_full_"+u,x.W),!1,u,!1,w.gaEJ(),v+"_full")
w=v}else w=new C.aAb(t.r,s)}else w=new C.avB(m,s)
else w=D.bTL
return A.u(s,A.cT(n,A.hD(A.C(A.a([new C.aGr(m,l,s),A.H(w,1),new C.aGp(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,s,s,new A.v(s,s,o,q,p,D.Qi,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aGr.prototype={
C(d){var w,v,u,t,s=null,r=new A.K(Date.now(),0,!1),q=A.dI(r)
r=A.hj(r)
w=new A.da(q,r)
v=w.gFV()===0?12:w.gFV()
r=B.a.bP(B.p.q(r),2,"0")
q=(q<12?B.ey:B.h4)===B.ey?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,B.n_,s,s,s),B.b8,A.j(u.b,s,s,s,s,A.l(s,s,B.c.m(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.atE,B.eb,D.asT,B.eb,D.atI],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.G(A.a([A.a3(B.D3,B.N.m(0.9),s,s,12),B.eb,A.H(A.j(u.c,s,B.ae,s,s,A.l(s,s,B.c.m(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,A.l(s,s,B.c.m(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.C(q,B.i,B.e,B.f,0,B.l),B.h,B.a9,s,s,s,s,s,D.akv,s,s,s)}}
C.aAb.prototype={
C(d){var w=null
return A.u(w,A.aV(A.C(A.a([A.a3(B.w3,B.c.m(0.35),w,w,40),B.E,A.j("No video yet",w,w,w,w,A.l(w,w,B.c.m(0.6),w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,A.l(w,w,B.c.m(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.ew(D.awT,D.bEJ,this.c,A.ex(w,w,w,w,w,w,w,w,w,B.N,w,w,w,w,w,new A.aL(B.N.m(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uu,w,w,w,w,w,w,w,w,1/0)}}
C.aGp.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aq3(B.OQ,"YouTube",s===0,r,new C.cyR(u))
s=u.aq3(B.jY,"Device",s===1,r,new C.cyS(u))
w=r?"Power off":"Power on"
v=r?D.OR:D.aqZ
return A.u(t,A.G(A.a([q,B.Z,s,B.b8,A.aS(t,t,t,t,A.a3(v,r?B.aW:B.dy,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cU)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a9,t,t,t,t,t,D.aki,t,t,t)},
aq3(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.N:B.a8
v=f&&g?B.N.m(0.15):B.C
u=A.n(10)
t=g?h:s
return A.H(A.aW(!1,B.M,!0,u,A.b0(!1,A.n(10),!0,new A.O(B.kQ,A.C(A.a([A.a3(d,w,s,s,18),A.j(e,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aBh.prototype={
C(d){return D.ab3}}
C.avB.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,B.iH,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,A.l(v,v,B.c.m(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qj("Serial",u.c),q=w.qj("Model",u.d),p=w.qj("Device ID",u.e),o=w.qj("IMEI",u.r),n=w.qj("MAC",u.f),m=w.qj("OS",u.w+" "+u.x),l=w.qj("Location",u.y+", "+u.z),k=w.qj("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qj("Timezone",u.at)
u=u.ax
return A.e4(A.a([t,B.al,s,B.Q,r,q,p,o,n,m,l,k,j,w.qj("Provisioned",u.length>=10?B.a.aj(u,0,10):u)],x.p),v,B.aH,v,v,B.X,!1)},
qj(d,e){var w=null
return new A.O(B.bV,A.C(A.a([A.j(d.toUpperCase(),w,w,w,w,A.l(w,w,B.c.m(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c6,A.j(e,w,w,w,w,D.bvH,w,w,w)],x.p),B.u,B.e,B.f,0,B.l),w)}}
C.G0.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.om.prototype={
gaEJ(){var w=this.c
return w===D.Yb||w===D.Yc||w===D.EM||w===D.Yd}}
C.a_S.prototype={
T(){return new C.aA6(null,null)}}
C.aA6.prototype={
Z(){this.a5()
var w=A.bH(null,B.qv,null,1,null,this)
w.me(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aO5()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.em(t,new A.v(t,t,t,t,t,new A.ar(B.dC,B.ch,B.y,A.a([B.C,B.q.m(0.55)],x.O),t,t),B.k),B.bK),q=x.Y,p=u.d
p===$&&A.c()
p=A.cG(B.hx,p,t)
w=B.c.m(0.92)
q=A.aV(new A.dL(new A.bd(p,new A.bt(0.72,1,q),q.k("bd<br.T>")),!1,A.a3(B.hC,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.m(0.22):B.kF
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aBl(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.v(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.m(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.m(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aZ(B.a7,t,B.b1,B.m,s,t)}}
C.aBl.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kh(u,new C.cpJ(this),B.bp,!0,w,w,new C.cpK(this),w)
return new C.BG(v,w)}}
C.BG.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qd,B.J_],x.O),B.hC)
break
case 1:w=new A.aI(A.a([B.uu,D.aeA],x.O),B.j4)
break
case 2:w=new A.aI(A.a([D.agc,D.ae6],x.O),B.w8)
break
case 3:w=new A.aI(A.a([B.W,B.di],x.O),B.wb)
break
case 4:w=new A.aI(A.a([B.a9,B.ai],x.O),B.mi)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a3(w.b,B.N.m(0.55),u,u,28),u,u,u),B.h,u,u,new A.v(u,u,u,u,u,new A.ar(B.ak,B.au,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.adb.prototype={
n(){var w=this,v=w.aZ$
if(v!=null)v.V(0,w.gdM())
w.aZ$=null
w.a2()},
bq(){this.bO()
this.bH()
this.dN()}}
C.a_T.prototype={
T(){return new C.a8I()}}
C.a8I.prototype={
bsM(d,e){var w=C.cVV(d)
if(w!=null)return C.cVW(w,e)
return d},
a2j(d,e){var w,v=this,u=C.cVV(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bsM(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.drf(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bqJ(){var w,v=this
if(v.w)return
v.p(new C.cnh(v))
w=v.e
if(w!=null)v.a2j(w,v.a.d)},
Z(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.Kq()
$.p1().ur(w,new C.cnp(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cni(v))
w=v.e
w.toString
v.a2j(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.m(0.55)
o.a.toString
v=x.p
w=A.a([A.a3(B.P3,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.A,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,A.l(n,n,B.c.m(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.L,n,n)],v))
return A.hD(A.aV(new A.O(new A.V(12,12,12,12),A.C(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.aj9(n,B.rX,w)],v)
if(o.f)w.push(A.hD(A.aV(new A.ao(28,28,D.abw,n),n,n,n),B.c4,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.m(0.35)
t=B.q.m(0.72)
s=A.n(14)
r=A.U(B.b_,B.o,1)
q=A.a3(B.P5,B.c.m(0.9),n,n,22)
p=B.c.m(0.92)
o.a.toString
w.push(A.f5(0,A.aW(!1,B.M,!0,n,A.b0(!1,n,!0,A.aV(A.u(n,A.G(A.a([q,B.Z,A.j("Tap for sound",n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.v(t,n,r,s,n,n,B.k),n,n,n,D.LH,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbqI(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aZ(B.a7,n,B.b1,B.m,w,n)}}
var z=a.updateTypes(["m(mo)","~()","FY(Q)","mo(X<@,@>)","a_(mo)","X<m,@>(mo)","ax<~>()","FX(Q)","i5<R>(Q,om?,p?)","QX(Q,R)","tD(Q,om?,p?)","BG(Q,ak,dj?)"])
C.cSk.prototype={
$1(d){return new C.FY(this.a,null)},
$S:z+2}
C.cSj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.W(d).ax.a===B.S,l=A.az(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cn,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.N.m(0.22),B.em,32)],x.V),g=A.U(m?B.bk:B.N.m(0.18),B.o,1),f=A.n(28),e=B.N.m(m?0.35:0.14)
j=A.a([e,B.T.m(m?0.18:0.08)],j)
e=A.u(n,D.asy,B.h,n,n,new A.v(B.N.m(0.18),n,A.U(B.N.m(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.t,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.C(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,A.l(n,n,m?B.V:B.aG,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.u,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.fC,w,A.aS(n,n,n,n,A.a3(B.cC,m?B.a8:B.c4,n,n,n),n,n,n,new C.cSf(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.v(n,n,n,n,n,new A.ar(B.a0,B.a3,B.y,j,n,n),B.k),n,n,n,B.LR,n,n,n)
e=A.eN(B.c8,A.a([new C.IU("YouTube",B.D2,m,n),new C.IU("TikTok",B.j4,m,n),new C.IU("Instagram",B.w8,m,n),new C.IU("Facebook",B.wb,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fp,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d_
r=A.a3(B.jZ,B.N.m(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bk:B.b0
u=A.C(A.a([e,B.as,A.av(n,B.F,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.I),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aL(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.HR),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.J,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.B,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.G,n,B.K,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.iU(D.asC,D.bKu,new C.cSg(d),A.jV(n,n,n,n,n,n,n,n,n,n,n,m?B.aA:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.O(new A.V(12,0,12,12+l.f.d),A.em(A.cT(f,A.C(A.a([j,new A.O(D.alw,u,n),new A.O(D.alF,A.G(A.a([e,B.b8,A.bP(!1,A.j("Cancel",n,n,n,n,A.l(n,n,m?B.V:B.Y,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cSh(d),n,n),B.Z,A.dM(D.awD,D.bKP,new C.cSi(d,w),A.bA(B.N,n,n,n,B.c,n,D.LH,n,new A.bD(A.n(14),B.I),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.av),new A.v(n,n,g,k,h,new A.ar(B.ak,B.au,B.y,i,n,n),B.k),B.bK),n)},
$S:63}
C.cSf.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cSg.prototype={
$0(){C.d5A()
$.Kp().sv(0,null)
A.a9(this.a,!1).S(null)},
$S:0}
C.cSh.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cSi.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a9(this.a,!1).S(w)
return null},
$S:0}
C.b8Z.prototype={
$1(d){return C.d5B(A.M(d,x.N,x.z))},
$S:z+3}
C.b9_.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b8R.prototype={
$1(d){return d.c},
$S:z+0}
C.b8S.prototype={
$1(d){return d.r},
$S:z+0}
C.b8T.prototype={
$1(d){return d.f},
$S:z+0}
C.b8U.prototype={
$1(d){return d.at},
$S:z+0}
C.b8V.prototype={
$1(d){return d.c},
$S:z+0}
C.b8W.prototype={
$1(d){return d.r},
$S:z+0}
C.b8X.prototype={
$1(d){return d.f},
$S:z+0}
C.b8Y.prototype={
$1(d){return d.at},
$S:z+0}
C.b8Q.prototype={
$1(d){return d.af()},
$S:z+5}
C.b8P.prototype={
$1(d){return B.a.bP(B.p.l2(d,16),2,"0").toUpperCase()},
$S:72}
C.cn9.prototype={
$0(){},
$S:0}
C.cn8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cn6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cn7.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cna.prototype={
$1(d){return new C.FX(this.a,null)},
$S:z+7}
C.cne.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cnf.prototype={
$3(d,e,f){return new A.i5($.CP(),new C.cnd(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cnd.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.zI(d,k,x.Q)
w=w==null?k:w.gki()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.N.m(0.12)
s=A.n(12)
r=A.U(B.N.m(0.35),B.o,1)
q=A.a3(B.hC,B.N,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.CP().a
m=B.j.aE(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Z,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.v(t,k,r,s,k,k,B.k),k,k,B.cB,B.eB,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cT(s,new A.io(1.7777777777777777,C.d5C(new A.dz("fleet_master_"+r,x.W),!0,r,!0,j.gaEJ(),"fleet_master"),k),B.av),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,A.l(k,k,A.W(d).ax.k3.m(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.yQ(0,B.m,k,B.r,k,k,k,k,!1,k,B.X,!1,A.a([new A.jS(new A.O(B.Ba,A.C(u,B.u,B.e,B.f,0,B.l),k),k),new A.ox(D.ajY,A.ar3(new A.nu(new C.cnc(i,j),J.a4(i.d),!1,!0,!0,A.ve(),k),D.bpD),k)],w))},
$S:1518}
C.cnc.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.QX(v,e,J.a4(w.d),new C.cnb(w,v),this.b,null)},
$S:z+9}
C.cnb.prototype={
$0(){return this.a.bcQ(this.b)},
$S:0}
C.cng.prototype={
$0(){this.a.Qw()
return null},
$S:0}
C.cn3.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cn4.prototype={
$0(){C.To(this.a,$.b8O)
return null},
$S:0}
C.cn5.prototype={
$3(d,e,f){return A.fD(new C.cn2(this.a,e))},
$S:z+10}
C.cn2.prototype={
$2(d,e){var w,v=null,u=B.j.aE(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.cp(A.C(A.a([A.j(r,v,v,v,v,A.l(v,v,A.W(d).ax.k3.m(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),B.as,new C.aGq(u,s.a.c,s.e,s.d,new C.cn_(s),new C.cn0(s),new C.cn1(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vp,v,v,B.X),v,v,v)},
$S:1519}
C.cn_.prototype={
$0(){var w=this.a.c
w.toString
C.To(w,$.b8O)
return null},
$S:0}
C.cn0.prototype={
$1(d){var w=this.a
return w.p(new C.cmZ(w,d))},
$S:36}
C.cmZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cn1.prototype={
$0(){var w=this.a
return w.p(new C.cmY(w))},
$S:0}
C.cmY.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cyR.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cyS.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cpJ.prototype={
$3(d,e,f){return new C.BG(this.a.c,null)},
$S:z+11}
C.cpK.prototype={
$3(d,e,f){if(f==null)return e
return new A.aZ(B.a7,null,B.b1,B.m,A.a([new C.BG(this.a.c,null),D.aaX],x.p),null)},
$C:"$3",
$R:3,
$S:430}
C.cnh.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cnp.prototype={
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
w.a2j(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hm(v,"load",new C.cnn(w),!1,u)
v=w.e
v.toString
A.hm(v,"error",new C.cno(w),!1,u)
w=w.e
w.toString
return w},
$S:1520}
C.cnn.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cnl(w))
A.bO(B.z,new C.cnm(w),x.H)}},
$S:40}
C.cnl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cnm.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cnj(w))},
$S:12}
C.cnj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cno.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cnk(w))},
$S:40}
C.cnk.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cni.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cOC.prototype={
$1(d){var w,v,u,t,s=new A.Bg([],[]).Fa(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.t(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.t(J.r(w,"event"),"onStateChange")&&J.t(v,0)){this.a.$0()
return}if(J.t(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.t(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1521};(function aliases(){var w=C.adb.prototype
w.aO5=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a8H.prototype,"gaqa","bap",1)
w(u,"gbaX","baY",1)
w(u,"gbdj","bdk",6)
w(C.a8I.prototype,"gbqI","bqJ",1)
v(C,"dHM","d5z",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vx,[C.cSk,C.cSj,C.b8Z,C.b9_,C.b8R,C.b8S,C.b8T,C.b8U,C.b8V,C.b8W,C.b8X,C.b8Y,C.b8Q,C.b8P,C.cna,C.cnf,C.cnd,C.cn5,C.cn0,C.cpJ,C.cpK,C.cnp,C.cnn,C.cno,C.cOC])
v(A.UW,[C.cSf,C.cSg,C.cSh,C.cSi,C.cn9,C.cn8,C.cn6,C.cn7,C.cne,C.cnb,C.cng,C.cn3,C.cn4,C.cn_,C.cmZ,C.cn1,C.cmY,C.cyR,C.cyS,C.cnh,C.cnl,C.cnm,C.cnj,C.cnk,C.cni])
v(A.aD,[C.IU,C.QX,C.az7,C.aGq,C.aGr,C.aAb,C.aGp,C.aBh,C.avB,C.aBl,C.BG])
v(A.ak,[C.mo,C.om])
v(A.ae,[C.FY,C.FX,C.a_S,C.a_T])
v(A.af,[C.a8H,C.aA5,C.adb,C.a8I])
v(A.UX,[C.cnc,C.cn2])
u(C.G0,A.aws)
u(C.aA6,C.adb)
w(C.adb,A.e8)})()
A.d8Q(b.typeUniverse,JSON.parse('{"FY":{"ae":[],"p":[]},"QX":{"aD":[],"p":[]},"FX":{"ae":[],"p":[]},"IU":{"aD":[],"p":[]},"a8H":{"af":["FY"]},"az7":{"aD":[],"p":[]},"aA5":{"af":["FX"]},"aGq":{"aD":[],"p":[]},"aGr":{"aD":[],"p":[]},"aAb":{"aD":[],"p":[]},"aGp":{"aD":[],"p":[]},"aBh":{"aD":[],"p":[]},"avB":{"aD":[],"p":[]},"a_S":{"ae":[],"p":[]},"BG":{"aD":[],"p":[]},"aA6":{"af":["a_S"]},"aBl":{"aD":[],"p":[]},"a_T":{"ae":[],"p":[]},"a8I":{"af":["a_T"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("ad<ag>"),O:w("ad<z>"),e:w("ad<mo>"),s:w("ad<m>"),p:w("ad<p>"),t:w("ad<R>"),X:w("aa<mo>"),a:w("aa<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mk"),_:w("zD"),k:w("mo"),N:w("m"),Y:w("bt<a8>"),W:w("dz<m>"),J:w("i5<R>"),j:w("i5<om?>"),E:w("xv<cw>"),q:w("RC"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bpm=new A.ao(18,18,B.IH,null)
D.aaX=new A.du(B.O,null,null,D.bpm,null)
D.OR=new A.P(983224,"MaterialIcons",!1)
D.av7=new A.a6(D.OR,48,B.b_,null,null,null)
D.bvn=new A.I(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFo=new A.y("Powered off",null,D.bvn,null,null,null,null,null,null,null,null)
D.aHI=w([D.av7,B.A,D.bFo],x.p)
D.aht=new A.eT(B.X,B.e,B.P,B.i,null,B.l,null,0,D.aHI,null)
D.ab3=new A.du(B.O,null,null,D.aht,null)
D.abw=new A.hC(2,null,null,null,null,B.V,null,null,null,null)
D.ae6=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.aeA=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.agc=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.ajO=new A.V(0,3,0,3)
D.ajY=new A.V(10,0,10,88)
D.aki=new A.V(12,6,12,10)
D.akv=new A.V(14,8,14,6)
D.LH=new A.V(18,12,18,12)
D.alw=new A.V(20,18,20,8)
D.alF=new A.V(20,8,20,20)
D.Mh=new A.V(8,6,15,8)
D.aqZ=new A.P(983222,"MaterialIcons",!1)
D.asy=new A.a6(B.hC,26,B.N,null,null,null)
D.asC=new A.a6(B.NU,18,null,null,null,null)
D.asT=new A.a6(B.og,14,B.V,null,null,null)
D.ari=new A.P(983420,"MaterialIcons",!1)
D.atE=new A.a6(D.ari,14,B.V,null,null,null)
D.apJ=new A.P(62895,"MaterialIcons",!1)
D.atI=new A.a6(D.apJ,14,B.V,null,null,null)
D.awD=new A.a6(B.j5,20,null,null,null,null)
D.awT=new A.a6(B.f7,16,null,null,null,null)
D.aJK=w([B.ai,B.W],x.O)
D.Qi=new A.ar(B.ak,B.au,B.y,D.aJK,null,null)
D.bjf=new A.aI("NGMY OS","14.2.1")
D.bia=new A.aI("VirtualDroid","13.8.4")
D.bi9=new A.aI("NGMY OS","15.0.0")
D.biP=new A.aI("VirtualDroid","14.1.2")
D.bi7=new A.aI("NGMY Tab OS","12.9.7")
D.bi5=new A.aI("NGMY OS","13.5.3")
D.bhW=new A.aI("VirtualDroid","15.2.0")
D.bis=new A.aI("NGMY OS","14.8.1")
D.biV=new A.aI("NGMY Tab OS","13.2.4")
D.bjp=new A.aI("VirtualDroid","12.6.9")
D.bhS=new A.aI("NGMY OS","16.0.1")
D.bhJ=new A.aI("VirtualDroid","14.9.0")
D.bj7=new A.aI("NGMY Tab OS","14.0.3")
D.bih=new A.aI("NGMY OS","13.1.8")
D.bhR=new A.aI("VirtualDroid","13.4.5")
D.bi4=new A.aI("NGMY OS","15.3.2")
D.biW=new A.aI("NGMY Tab OS","12.4.1")
D.bj9=new A.aI("VirtualDroid","16.1.0")
D.bir=new A.aI("NGMY OS","14.4.6")
D.bjg=new A.aI("VirtualDroid","15.0.8")
D.aJl=w([D.bjf,D.bia,D.bi9,D.biP,D.bi7,D.bi5,D.bhW,D.bis,D.biV,D.bjp,D.bhS,D.bhJ,D.bj7,D.bih,D.bhR,D.bi4,D.biW,D.bj9,D.bir,D.bjg],A.bk("ad<+(m,m)>"))
D.blr=new A.e5(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bl_=new A.e5(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bkV=new A.e5(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bl3=new A.e5(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bkR=new A.e5(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bl5=new A.e5(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.blt=new A.e5(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bkS=new A.e5(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bkZ=new A.e5(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bl7=new A.e5(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bkQ=new A.e5(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bll=new A.e5(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bli=new A.e5(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bkY=new A.e5(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.blf=new A.e5(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.ble=new A.e5(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bkP=new A.e5(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bl2=new A.e5(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.blc=new A.e5(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.blh=new A.e5(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Rj=w([D.blr,D.bl_,D.bkV,D.bl3,D.bkR,D.bl5,D.blt,D.bkS,D.bkZ,D.bl7,D.bkQ,D.bll,D.bli,D.bkY,D.blf,D.ble,D.bkP,D.bl2,D.blc,D.blh],A.bk("ad<+(m,m,a8,a8,m)>"))
D.aOl=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.Yb=new C.G0(0,"youtube")
D.Yc=new C.G0(1,"tiktok")
D.EM=new C.G0(2,"instagram")
D.Yd=new C.G0(3,"facebook")
D.bdO=new C.G0(4,"other")
D.boY=new A.ao(3,null,null,null)
D.bpD=new A.iS(4,10,8,0.52,null)
D.bGl=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bsC=new A.aR(D.bGl,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bvH=new A.I(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bEJ=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bGO=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bKu=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bKP=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bTL=new C.aBh(null)})();(function staticFields(){$.d5y=20
$.any=null
$.b8O=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dLW","CP",()=>A.PL(0))
w($,"dLX","Kp",()=>A.PL(null))})()};
(a=>{a["n6NUm1v0Gc1d/CLtvhTA5x9lZHc="]=a.current})($__dart_deferred_initializers__);