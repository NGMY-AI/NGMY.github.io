((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egE(d,e){A.a7(d,!1).cB(A.eD(new C.diO(e),!0,null,x.H))},
ZH(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$ZH=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Pb()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.b8(n,B.aF,B.ax),t)
w=3
return A.b(A.ds(B.L,new C.diN(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$ZH)
case 3:r=g
s.H$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dWX(r)
if(q==null){d.F(x.q).f.R(D.cL2)
w=1
break}w=4
return A.b(A.bN(B.id,null,x.H),$async$ZH)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dz3=n
p=C.dWR(n)
n=$.Gw()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dmU(q)
d.F(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$ZH,v)},
dz6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aZ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aZ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.ob(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K3(d){return C.dX_(d)},
dX_(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K3=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$K3)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aD(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eG(r,x.f)
k=A.dm(k,new C.boz(),k.$ti.j("F.E"),x.k)
j=A.P(k).j("ah<F.E>")
i=A.B(new A.ah(k,new C.boA(),j),j.j("F.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dz8(q)
w=12
return A.b(C.K2(a3,p),$async$K3)
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
case 9:case 5:o=A.aK(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aD(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dz6(A.U(n,x.N,x.z))
l=C.dz8(A.a([m],x.e))
w=21
return A.b(C.K2(a3,l),$async$K3)
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
case 18:case 14:q=C.dWY()
w=22
return A.b(C.K2(a3,q),$async$K3)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K3,v)},
dz8(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.bor(),w).ez(0),u=new A.E(d,new C.bos(),w).ez(0),t=new A.E(d,new C.bot(),w).ez(0),s=new A.E(d,new C.bou(),w).ez(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dmV(null,q,u,t,v,s));++q}return r},
axi(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axi=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K3(d),$async$axi)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.dc(t,new C.bov(),s).ez(0)
p=r.dc(t,new C.bow(),s).ez(0)
o=r.dc(t,new C.box(),s).ez(0)
n=r.dc(t,new C.boy(),s).ez(0)
m=C.dmV(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K2(d,t),$async$axi)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axi,v)},
K2(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$K2=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$K2)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.boq(),x.P)
s=A.B(s,s.$ti.j("a4.E"))
w=3
return A.b(u.au("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ap(s,null)),$async$K2)
case 3:return A.f(null,v)}})
return A.h($async$K2,v)},
dWY(){var w,v=x.N,u=A.ba(v),t=A.ba(v),s=A.ba(v),r=A.ba(v),q=J.dx(20,x.k)
for(w=0;w<20;++w)q[w]=C.dmV(w,w,t,s,u,r)
return q},
dmV(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jz(),h=d==null,g=D.a6M[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6M[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.E(p,new C.bop(),A.Y(p).j("E<1,o>")).fz(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fz(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bh(B.l.hw(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a7(e,20)
k=D.bX8[w]
j=D.bO4[w]
return new C.ob("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bh(B.l.n(e+1),2,"0"),u,k,C.dWZ(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a5().a_())},
dWZ(d,e){var w,v=J.dx(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bh(B.l.hw(d.bF(256),16),2,"0")
return B.h.fz(v)},
diO:function diO(d){this.a=d},
diN:function diN(d,e){this.a=d
this.b=e},
diJ:function diJ(d){this.a=d},
diK:function diK(d){this.a=d},
diL:function diL(d){this.a=d},
diM:function diM(d,e){this.a=d
this.b=e},
Nu:function Nu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ob:function ob(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
boz:function boz(){},
boA:function boA(){},
bor:function bor(){},
bos:function bos(){},
bot:function bot(){},
bou:function bou(){},
bov:function bov(){},
bow:function bow(){},
box:function box(){},
boy:function boy(){},
boq:function boq(){},
bop:function bop(){},
K1:function K1(d,e){this.c=d
this.a=e},
agp:function agp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cIY:function cIY(){},
cIX:function cIX(d,e){this.a=d
this.b=e},
cIV:function cIV(d){this.a=d},
cIW:function cIW(d,e){this.a=d
this.b=e},
cIZ:function cIZ(d){this.a=d},
cJ2:function cJ2(d){this.a=d},
cJ3:function cJ3(d,e){this.a=d
this.b=e},
cJ1:function cJ1(d,e,f){this.a=d
this.b=e
this.c=f},
cJ0:function cJ0(d,e){this.a=d
this.b=e},
cJ_:function cJ_(d,e){this.a=d
this.b=e},
cJ4:function cJ4(d){this.a=d},
WQ:function WQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK5:function aK5(d,e){this.c=d
this.a=e},
K0:function K0(d,e){this.c=d
this.a=e},
aLb:function aLb(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cIS:function cIS(d){this.a=d},
cIT:function cIT(d){this.a=d},
cIU:function cIU(d){this.a=d},
cIR:function cIR(d,e){this.a=d
this.b=e},
cIO:function cIO(d){this.a=d},
cIP:function cIP(d){this.a=d},
cIN:function cIN(d,e){this.a=d
this.b=e},
cIQ:function cIQ(d){this.a=d},
cIM:function cIM(d){this.a=d},
aS4:function aS4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aS5:function aS5(d,e,f){this.c=d
this.d=e
this.a=f},
aLh:function aLh(d,e){this.c=d
this.a=e},
aS3:function aS3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cYs:function cYs(d){this.a=d},
cYt:function cYt(d){this.a=d},
aMy:function aMy(d){this.a=d},
aGm:function aGm(d,e){this.c=d
this.a=e},
dWX(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dWW(v)
if(u!=null)return new C.qn(w,C.dmT(u,!1),D.aef,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dWV(v)
if(t!=null)return new C.qn(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aeg,"TikTok",q)
s=C.dWU(w,v)
if(s!=null)return s
r=C.dWT(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qn(w,w,D.csq,"Video",q)
return q},
dWU(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/reel/"+w+u,D.O3,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/p/"+w+u,D.O3,t,null)}return null},
dWT(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qn(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bg,!1)+"&show_text=false&width=734",D.aeh,"Facebook",null)},
dWW(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dm(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dWV(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
K4:function K4(d,e){this.a=d
this.b=e},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6M:function a6M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLc:function aLc(d,e){var _=this
_.d=$
_.cX$=d
_.aV$=e
_.c=_.a=null},
aMD:function aMD(d,e){this.c=d
this.a=e},
cNG:function cNG(d){this.a=d},
cNH:function cNH(d){this.a=d},
Fo:function Fo(d,e){this.c=d
this.a=e},
alc:function alc(){},
dz7(d,e,f,g,h,i){return new C.a6N(i,f,h,e,g,d)},
efd(d){var w=window
w.toString
A.hh(w,"message",new C.dfe(d),!1,x._)},
a6N:function a6N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agq:function agq(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cJ5:function cJ5(d){this.a=d},
cJe:function cJe(d){this.a=d},
cJb:function cJb(d){this.a=d},
cJa:function cJa(d){this.a=d},
cJc:function cJc(d){this.a=d},
cJ9:function cJ9(d){this.a=d},
cJd:function cJd(d){this.a=d},
cJ8:function cJ8(d){this.a=d},
cJ7:function cJ7(d){this.a=d},
cJ6:function cJ6(d){this.a=d},
dfe:function dfe(d){this.a=d},
dWP(){var w,v,u
try{v=A.AN()
w=v.grV(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dmT(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bon(d){var w=A.aq(y.c,!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
dz2(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWQ(d,e,f){var w,v,u=C.bon(d)
if(u!=null){if(f){w=C.dWP()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dz2(C.dmT(u,e))}return C.dz2(d)},
dWR(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dWS(d){var w
if($.Pb().a==null)return!1
w=$.Gw().a
return d>=w&&d<w+4},
dz5(){var w=$.axh
if(w!=null)w.ae(0)
$.axh=null
$.Gw().sv(0,0)},
dz4(){var w,v,u,t=$.Pb()
if(t.a==null)return
w=$.axh
if(w!=null)w.ae(0)
v=$.dz3
if(v<=4){t=t.a
t.toString
C.dmU(t)
return}w=$.Gw()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dmU(t)},
dmU(d){var w=$.axh
if(w!=null)w.ae(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.axh=A.dL(A.dq(0,0,0,0,0,w),C.efs())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nu.prototype={
C(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.w,1),r=A.X(this.d,B.a5,w,w,14)
return A.t(w,A.H(A.a([r,B.fh,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a0,0,w,w),B.j,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.ob.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K1.prototype={
U(){return new C.agp(A.a([],x.e))},
gdW(){return this.c}}
C.agp.prototype={
a0(){var w=this
w.a6()
$.Gw().aq(0,w.gaxi())
C.efd(w.gbnx())
w.YW()},
bmX(){if(this.c!=null)this.p(new C.cIY())},
bny(){C.dz4()},
q(){$.Gw().Z(0,this.gaxi())
C.dz5()
$.Pb().sv(0,null)
this.a4()},
YW(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YW=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K3(t.a.c),$async$YW)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cIX(t,s))
$.boo=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$YW,v)},
UU(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UU=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cIV(t))
w=3
return A.b(C.axi(t.a.c),$async$UU)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cIW(t,s))
$.boo=J.a2(t.d)
t.c.F(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UU,v)},
bpw(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.eD(new C.cIZ(d),!1,null,x.H))},
bq6(){var w=this.c
w.toString
return C.ZH(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.bs,s=A.aL(v,v,v,v,B.Lf,v,v,v,new C.cJ2(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DP(A.H(A.a([A.I(new A.J(B.jb,A.j(r,v,1,B.aD,v,v,v,A.l(v,v,u?B.e:B.W,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aJ(!1,B.V,!0,v,A.aP(!1,v,!0,new A.J(B.bf,A.X(B.ha,B.a5,v,v,28),v),B.cM,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbq5(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a9)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.bZ(!0,A.w(A.a([new A.J(D.X_,r,v),A.I(w.e?B.n6:new A.la($.Pb(),new C.cJ3(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.ara(B.a5,B.Gz,B.mn,D.d7y,w.e?v:new C.cJ4(w)),v)}}
C.WQ.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a5.l(0.18),B.dg,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6M(n,!0,!C.dWS(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jL,B.nf,u,u,22),B.aO,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.k,0,B.q),B.j,B.yN,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.V,!0,u,A.aP(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cj(p,A.fS(A.w(A.a([new C.aK5(o,u),A.I(n,1),A.t(u,A.H(A.a([A.X(B.Bf,B.a5.l(0.85),u,u,9),D.cGN,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,D.aDh,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aI),B.j,u,u,new A.r(u,u,r,s,q,D.a0c,B.p),u,u,u,B.h6,u,u,u),1),B.aO,A.j(o.b,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.aD,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a9)}}
C.aK5.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.j(B.h.gav(this.c.c.split("-")),w,w,B.aD,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rJ,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,B.WQ,w,w,w)}}
C.K0.prototype={
U(){return new C.aLb()}}
C.aLb.prototype={
C(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bs,t=A.aL(w,w,w,w,B.Lf,w,w,w,new C.cIS(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.bZ(!0,A.w(A.a([new A.J(D.X_,A.H(A.a([t,A.I(new A.DP(A.H(A.a([A.I(new A.J(B.jb,A.j(s.b+" \xb7 "+s.c,w,1,B.aD,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.V,!0,w,A.aP(!1,w,!0,new A.J(B.bf,A.X(B.ha,B.a5,w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cIT(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.I(new A.la($.Pb(),new C.cIU(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aS4.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a5.l(0.35),B.eX,28),new A.a9(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dz7(new A.dy(v+"_full_"+u,x.W),!1,u,!1,w.gaN_(),v+"_full")
w=v}else w=new C.aLh(t.r,s)}else w=new C.aGm(m,s)
else w=D.deb
return A.t(s,A.cj(n,A.fS(A.w(A.a([new C.aS5(m,l,s),A.I(w,1),new C.aS3(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aI),B.j,s,s,new A.r(s,s,o,q,p,D.a0c,B.p),s,r*2.05,s,B.bF,s,s,r)}}
C.aS5.prototype={
C(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=A.dD(r)
r=A.hM(r)
w=new A.dE(q,r)
v=w.gJw()===0?12:w.gJw()
r=B.b.bh(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j8)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mR,s,s,s),B.bC,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aOa,B.et,D.aNn,B.et,D.aOe],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.X(B.L4,B.a5.l(0.9),s,s,12),B.et,A.I(A.j(u.c,s,s,B.aD,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.aw,s,s,s,s,s,D.aE2,s,s,s)}}
C.aLh.prototype={
C(d){var w=null
return A.t(w,A.aH(A.w(A.a([A.X(B.AD,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.eQ(D.aRB,D.cWn,this.c,A.es(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aG(B.a5.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a0,0,B.q),w,w,w),B.j,B.yN,w,w,w,w,w,w,w,w,1/0)}}
C.aS3.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ax9(B.B3,"YouTube",s===0,r,new C.cYs(u))
s=u.ax9(B.kq,"Device",s===1,r,new C.cYt(u))
w=r?"Power off":"Power on"
v=r?D.Zv:D.aLq
return A.t(t,A.H(A.a([q,B.an,s,B.bC,A.aL(t,t,t,t,A.X(v,r?B.bE:B.fQ,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,D.aDO,t,t,t)},
ax9(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a5:B.az
v=f&&g?B.a5.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aJ(!1,B.V,!0,u,A.aP(!1,A.m(10),!0,new A.J(B.nq,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a9),1)}}
C.aMy.prototype={
C(d){return D.atw}}
C.aGm.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.lL,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tI("Serial",u.c),q=w.tI("Model",u.d),p=w.tI("Device ID",u.e),o=w.tI("IMEI",u.r),n=w.tI("MAC",u.f),m=w.tI("OS",u.w+" "+u.x),l=w.tI("Location",u.y+", "+u.z),k=w.tI("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tI("Timezone",u.at)
u=u.ax
return A.eg(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tI("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bf,v,v,B.am,!1)},
tI(d,e){var w=null
return new A.J(B.cY,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.j(e,w,w,w,w,w,w,D.cOh,w,w,w)],x.p),B.F,B.i,B.k,0,B.q),w)}}
C.K4.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qn.prototype={
gaN_(){var w=this.c
return w===D.aef||w===D.aeg||w===D.O3||w===D.aeh}}
C.a6M.prototype={
U(){return new C.aLc(null,null)}}
C.aLc.prototype={
a0(){this.a6()
var w=A.bF(null,B.vd,null,1,null,this)
w.n6(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWV()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dr(t,new A.r(t,t,t,t,t,new A.al(B.cH,B.cu,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bT),q=x.Y,p=u.d
p===$&&A.c()
p=A.cv(B.ic,p,t)
w=B.e.l(0.92)
q=A.aH(new A.d3(new A.b2(p,new A.bl(0.72,1,q),q.j("b2<bk.T>")),!1,A.X(B.jL,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nf
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aMD(s,t),r,q,A.aQ(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aQ(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aQ(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aE(B.ak,t,B.bd,B.y,s,t)}}
C.aMD.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ko(u,B.N,new C.cNG(this),B.ca,B.bM,!0,w,w,new C.cNH(this),w)
return new C.Fo(v,w)}}
C.Fo.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uS,B.SZ],x.O),B.jL)
break
case 1:w=new A.aO(A.a([B.yN,D.ay4],x.O),B.lq)
break
case 2:w=new A.aO(A.a([D.azC,D.axv],x.O),B.AL)
break
case 3:w=new A.aO(A.a([B.W,B.dv],x.O),B.AR)
break
case 4:w=new A.aO(A.a([B.aw,B.aL],x.O),B.pg)
break
default:w=u}v=w.a
return A.t(u,A.aH(A.X(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.r(u,u,u,u,u,new A.al(B.aK,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.alc.prototype={
q(){var w=this,v=w.aV$
if(v!=null)v.Z(0,w.gdF())
w.aV$=null
w.a4()},
bx(){this.bO()
this.bL()
this.dG()}}
C.a6N.prototype={
U(){return new C.agq()}}
C.agq.prototype={
a7E(d,e){var w,v=C.bon(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dmT(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dWQ(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFj(){var w,v=this
if(v.w)return
v.p(new C.cJ5(v))
w=v.e
if(w!=null)v.a7E(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.Gy()
$.pI().uT(w,new C.cJe(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cJ7(v))
w=v.e
w.toString
v.a7E(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZK,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fS(A.aH(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a23(n,B.tu,w)],v)
if(o.f)w.push(A.fS(A.aH(new A.ab(28,28,D.auA,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.w,1)
q=A.X(B.L8,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eX(0,A.aJ(!1,B.V,!0,n,A.aP(!1,n,!0,A.aH(A.t(n,A.H(A.a([q,B.an,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a0,0,n,n),B.j,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wl,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFi(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a9)))}v=C.bon(o.a.d)
if(v!=null)w.push(A.aQ(8,A.jp(D.aPG,D.d2V,new C.cJ6(o),A.iO(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aE(B.ak,n,B.bd,B.y,w,n)}}
var z=a.updateTypes(["o(ob)","~()","K1(Q)","ob(a_<@,@>)","a1(ob)","a_<o,@>(ob)","aB<~>()","K0(Q)","la<K>(Q,qn?,p?)","WQ(Q,K)","u0(Q,qn?,p?)","Fo(Q,an,dK?)"])
C.diO.prototype={
$1(d){return new C.K1(this.a,null)},
$S:z+2}
C.diN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dW,B.W],j):A.a([B.e,B.av],j),h=A.a([new A.a9(0,B.G,B.a5.l(0.22),B.eX,32)],x.V),g=A.O(m?B.c7:B.a5.l(0.18),B.w,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.au.l(m?0.18:0.08)],j)
e=A.t(n,D.aN6,B.j,n,n,new A.r(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.w,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aL(n,n,n,n,A.X(B.d6,m?B.az:B.cW,n,n,n),n,n,n,new C.diJ(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.r(n,n,n,n,n,new A.al(B.ad,B.ag,B.H,j,n,n),B.p),n,n,n,B.IX,n,n,n)
e=A.ec(B.cD,A.a([new C.Nu("YouTube",B.L3,m,n),new C.Nu("TikTok",B.lq,m,n),new C.Nu("Instagram",B.AL,m,n),new C.Nu("Facebook",B.AR,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.co:B.iB,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bs
r=A.X(B.fy,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aJ
u=A.w(A.a([e,B.aS,A.aM(n,B.S,!0,n,!0,B.y,n,A.aN(),w,n,n,n,n,n,2,A.bp(n,new A.bb(4,q,B.X),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.RJ),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.a6,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.aa,n,n,n,n)],v),B.as,B.i,B.k,0,B.q)
e=A.jp(D.aN9,D.d6H,new C.diK(d),A.iO(n,n,n,n,n,n,n,n,n,n,n,m?B.bl:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dr(A.cj(f,A.w(A.a([j,new A.J(B.WC,u,n),new A.J(D.aFl,A.H(A.a([e,B.bC,A.c8(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.ay,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.diL(d),n,n),B.an,A.dN(D.aRk,D.d7s,new C.diM(d,w),A.by(B.a5,n,n,n,B.e,n,D.Wl,n,new A.bD(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.as,B.i,B.a0,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.al(B.aK,B.aR,B.H,i,n,n),B.p),B.bT),n)},
$S:82}
C.diJ.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.diK.prototype={
$0(){C.dz5()
$.Pb().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.diL.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.diM.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.boz.prototype={
$1(d){return C.dz6(A.U(d,x.N,x.z))},
$S:z+3}
C.boA.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bor.prototype={
$1(d){return d.c},
$S:z+0}
C.bos.prototype={
$1(d){return d.r},
$S:z+0}
C.bot.prototype={
$1(d){return d.f},
$S:z+0}
C.bou.prototype={
$1(d){return d.at},
$S:z+0}
C.bov.prototype={
$1(d){return d.c},
$S:z+0}
C.bow.prototype={
$1(d){return d.r},
$S:z+0}
C.box.prototype={
$1(d){return d.f},
$S:z+0}
C.boy.prototype={
$1(d){return d.at},
$S:z+0}
C.boq.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bop.prototype={
$1(d){return B.b.bh(B.l.hw(d,16),2,"0").toUpperCase()},
$S:87}
C.cIY.prototype={
$0(){},
$S:0}
C.cIX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cIV.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cIW.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cIZ.prototype={
$1(d){return new C.K0(this.a,null)},
$S:z+7}
C.cJ2.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cJ3.prototype={
$3(d,e,f){return new A.la($.Gw(),new C.cJ1(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cJ1.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Di(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a5.l(0.12)
s=A.m(12)
r=A.O(B.a5.l(0.35),B.w,1)
q=A.X(B.jL,B.a5,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Gw().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.an,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d9,B.h5,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cj(s,new A.j4(1.7777777777777777,C.dz7(new A.dy("fleet_master_"+r,x.W),!0,r,!0,j.gaN_(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vV(0,B.y,k,B.E,k,k,k,k,!1,k,B.am,!1,A.a([new A.kz(new A.J(B.IP,A.w(u,B.F,B.i,B.k,0,B.q),k),k),new A.om(D.aDr,A.aBl(new A.nA(new C.cJ0(i,j),J.a2(i.d),!1,!0,!0,A.tu(),k),D.cHz),k)],w))},
$S:1697}
C.cJ0.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WQ(v,e,J.a2(w.d),new C.cJ_(w,v),this.b,null)},
$S:z+9}
C.cJ_.prototype={
$0(){return this.a.bpw(this.b)},
$S:0}
C.cJ4.prototype={
$0(){this.a.UU()
return null},
$S:0}
C.cIS.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cIT.prototype={
$0(){C.ZH(this.a,$.boo)
return null},
$S:0}
C.cIU.prototype={
$3(d,e,f){return A.fd(new C.cIR(this.a,e))},
$S:z+10}
C.cIR.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cA(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aS4(u,s.a.c,s.e,s.d,new C.cIO(s),new C.cIP(s),new C.cIQ(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),v,B.E,B.oT,v,v,B.am),v,v,v)},
$S:1698}
C.cIO.prototype={
$0(){var w=this.a.c
w.toString
C.ZH(w,$.boo)
return null},
$S:0}
C.cIP.prototype={
$1(d){var w=this.a
return w.p(new C.cIN(w,d))},
$S:34}
C.cIN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cIQ.prototype={
$0(){var w=this.a
return w.p(new C.cIM(w))},
$S:0}
C.cIM.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cYs.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cYt.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cNG.prototype={
$3(d,e,f){return new C.Fo(this.a.c,null)},
$S:z+11}
C.cNH.prototype={
$3(d,e,f){if(f==null)return e
return new A.aE(B.ak,null,B.bd,B.y,A.a([new C.Fo(this.a.c,null),D.atL],x.p),null)},
$C:"$3",
$R:3,
$S:227}
C.cJ5.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cJe.prototype={
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
w.a7E(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hh(v,"load",new C.cJb(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cJc(w),!1,u)
A.bN(B.kk,new C.cJd(w),x.H)
w=w.e
w.toString
return w},
$S:611}
C.cJb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cJa(w))},
$S:46}
C.cJa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cJc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cJ9(w))},
$S:46}
C.cJ9.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cJd.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cJ8(w))},
$S:12}
C.cJ8.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cJ7.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cJ6.prototype={
$0(){var w,v=C.bon(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kQ.SE(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dfe.prototype={
$1(d){var w,v,u,t,s=new A.EX([],[]).IL(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aD(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1699};(function aliases(){var w=C.alc.prototype
w.aWV=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agp.prototype,"gaxi","bmX",1)
w(u,"gbnx","bny",1)
w(u,"gbq5","bq6",6)
w(C.agq.prototype,"gbFi","bFj",1)
v(C,"efs","dz4",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yC,[C.diO,C.diN,C.boz,C.boA,C.bor,C.bos,C.bot,C.bou,C.bov,C.bow,C.box,C.boy,C.boq,C.bop,C.cIZ,C.cJ3,C.cJ1,C.cIU,C.cIP,C.cNG,C.cNH,C.cJe,C.cJb,C.cJc,C.dfe])
v(A.a09,[C.diJ,C.diK,C.diL,C.diM,C.cIY,C.cIX,C.cIV,C.cIW,C.cJ2,C.cJ_,C.cJ4,C.cIS,C.cIT,C.cIO,C.cIN,C.cIQ,C.cIM,C.cYs,C.cYt,C.cJ5,C.cJa,C.cJ9,C.cJd,C.cJ8,C.cJ7,C.cJ6])
v(A.av,[C.Nu,C.WQ,C.aK5,C.aS4,C.aS5,C.aLh,C.aS3,C.aMy,C.aGm,C.aMD,C.Fo])
v(A.an,[C.ob,C.qn])
v(A.ae,[C.K1,C.K0,C.a6M,C.a6N])
v(A.af,[C.agp,C.aLb,C.alc,C.agq])
v(A.a0a,[C.cJ0,C.cIR])
u(C.K4,A.aHh)
u(C.aLc,C.alc)
w(C.alc,A.ea)})()
A.dCA(b.typeUniverse,JSON.parse('{"K1":{"ae":[],"p":[]},"WQ":{"av":[],"p":[]},"K0":{"ae":[],"p":[]},"Nu":{"av":[],"p":[]},"agp":{"af":["K1"]},"aK5":{"av":[],"p":[]},"aLb":{"af":["K0"]},"aS4":{"av":[],"p":[]},"aS5":{"av":[],"p":[]},"aLh":{"av":[],"p":[]},"aS3":{"av":[],"p":[]},"aMy":{"av":[],"p":[]},"aGm":{"av":[],"p":[]},"a6M":{"ae":[],"p":[]},"Fo":{"av":[],"p":[]},"aLc":{"af":["a6M"]},"aMD":{"av":[],"p":[]},"a6N":{"ae":[],"p":[]},"agq":{"af":["a6N"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<ob>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<ob>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o6"),_:w("Df"),k:w("ob"),N:w("o"),Y:w("bl<aa>"),W:w("dy<o>"),J:w("la<K>"),j:w("la<qn?>"),E:w("xu<cM>"),q:w("XD"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zv=new A.M(983224,"MaterialIcons",!1)
D.aPO=new A.a8(D.Zv,48,B.bq,null,null,null)
D.cNV=new A.S(!0,B.co,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVh=new A.C("Powered off",null,D.cNV,null,null,null,null,null,null,null,null,null)
D.bLd=w([D.aPO,B.P,D.cVh],x.p)
D.aAQ=new A.eL(B.am,B.i,B.a0,B.o,null,B.q,null,0,D.bLd,null)
D.atw=new A.dp(B.N,null,null,D.aAQ,null)
D.cHd=new A.ab(18,18,B.SH,null)
D.atL=new A.dp(B.N,null,null,D.cHd,null)
D.auA=new A.hb(2,null,null,null,null,B.a8,null,null,null,null)
D.axv=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ay4=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azC=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDh=new A.V(0,3,0,3)
D.aDr=new A.V(10,0,10,88)
D.aDO=new A.V(12,6,12,10)
D.aE2=new A.V(14,8,14,6)
D.Wl=new A.V(18,12,18,12)
D.aFl=new A.V(20,8,20,20)
D.X_=new A.V(8,6,15,8)
D.aLq=new A.M(983222,"MaterialIcons",!1)
D.aN6=new A.a8(B.jL,26,B.a5,null,null,null)
D.aN9=new A.a8(B.YK,18,null,null,null,null)
D.aNn=new A.a8(B.rJ,14,B.a8,null,null,null)
D.aLJ=new A.M(983420,"MaterialIcons",!1)
D.aOa=new A.a8(D.aLJ,14,B.a8,null,null,null)
D.aJR=new A.M(62895,"MaterialIcons",!1)
D.aOe=new A.a8(D.aJR,14,B.a8,null,null,null)
D.aPG=new A.a8(B.rB,16,B.a8,null,null,null)
D.aRk=new A.a8(B.jh,20,null,null,null,null)
D.aRB=new A.a8(B.ha,16,null,null,null,null)
D.bOR=w([B.aL,B.W],x.O)
D.a0c=new A.al(B.aK,B.aR,B.H,D.bOR,null,null)
D.cAR=new A.aO("NGMY OS","14.2.1")
D.czE=new A.aO("VirtualDroid","13.8.4")
D.czD=new A.aO("NGMY OS","15.0.0")
D.cAp=new A.aO("VirtualDroid","14.1.2")
D.czB=new A.aO("NGMY Tab OS","12.9.7")
D.czz=new A.aO("NGMY OS","13.5.3")
D.czo=new A.aO("VirtualDroid","15.2.0")
D.cA0=new A.aO("NGMY OS","14.8.1")
D.cAv=new A.aO("NGMY Tab OS","13.2.4")
D.cB0=new A.aO("VirtualDroid","12.6.9")
D.czh=new A.aO("NGMY OS","16.0.1")
D.cz6=new A.aO("VirtualDroid","14.9.0")
D.cAI=new A.aO("NGMY Tab OS","14.0.3")
D.czN=new A.aO("NGMY OS","13.1.8")
D.czg=new A.aO("VirtualDroid","13.4.5")
D.czy=new A.aO("NGMY OS","15.3.2")
D.cAw=new A.aO("NGMY Tab OS","12.4.1")
D.cAL=new A.aO("VirtualDroid","16.1.0")
D.cA_=new A.aO("NGMY OS","14.4.6")
D.cAS=new A.aO("VirtualDroid","15.0.8")
D.bO4=w([D.cAR,D.czE,D.czD,D.cAp,D.czB,D.czz,D.czo,D.cA0,D.cAv,D.cB0,D.czh,D.cz6,D.cAI,D.czN,D.czg,D.czy,D.cAw,D.cAL,D.cA_,D.cAS],A.b4("a3<+(o,o)>"))
D.cD6=new A.eJ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCF=new A.eJ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCA=new A.eJ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCJ=new A.eJ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCw=new A.eJ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCL=new A.eJ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cD8=new A.eJ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCx=new A.eJ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCE=new A.eJ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCN=new A.eJ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCv=new A.eJ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cD0=new A.eJ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCY=new A.eJ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCD=new A.eJ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCV=new A.eJ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCU=new A.eJ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCu=new A.eJ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCI=new A.eJ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCS=new A.eJ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCX=new A.eJ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6M=w([D.cD6,D.cCF,D.cCA,D.cCJ,D.cCw,D.cCL,D.cD8,D.cCx,D.cCE,D.cCN,D.cCv,D.cD0,D.cCY,D.cCD,D.cCV,D.cCU,D.cCu,D.cCI,D.cCS,D.cCX],A.b4("a3<+(o,o,aa,aa,o)>"))
D.bX8=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aef=new C.K4(0,"youtube")
D.aeg=new C.K4(1,"tiktok")
D.O3=new C.K4(2,"instagram")
D.aeh=new C.K4(3,"facebook")
D.csq=new C.K4(4,"other")
D.cGN=new A.ab(3,null,null,null)
D.cHz=new A.i7(4,10,8,0.52,null)
D.cWz=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cL2=new A.aV(D.cWz,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.y,null)
D.cOh=new A.S(!0,B.e,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWn=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2V=new A.C("Open in YouTube",null,B.iY,null,null,null,null,null,null,null,null,null)
D.d6H=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7s=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7y=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.deb=new C.aMy(null)})();(function staticFields(){$.dz3=20
$.axh=null
$.boo=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eks","Gw",()=>A.aD9(0))
w($,"ekt","Pb",()=>A.aD9(null))})()};
(a=>{a["5ujJJKgSdL7L65KWmsslDEa2W38="]=a.current})($__dart_deferred_initializers__);