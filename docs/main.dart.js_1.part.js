((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egm(d,e){A.a7(d,!1).cB(A.eD(new C.dio(e),!0,null,y.H))},
ZC(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$ZC=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.P9()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.aq()
t=new A.ak(new A.b8(o,B.aF,B.ax),u)
x=3
return A.b(A.dv(B.L,new C.din(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$ZC)
case 3:s=g
t.H$=u
t.K$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dWB(s)
if(r==null){d.F(y.q).f.R(D.cKZ)
x=1
break}x=4
return A.b(A.bN(B.ie,null,y.H),$async$ZC)
case 4:if(d.e==null){x=1
break}o=B.l.Y(e,1,999)
$.dyE=o
q=C.dWv(o)
o=$.Gv()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.dmu(r)
d.F(y.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$ZC,w)},
dyH(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
j=J.k(j==null?"":j)
x=d.h(0,"label")
x=J.k(x==null?"Virtual Device":x)
w=d.h(0,"serialNumber")
w=J.k(w==null?"":w)
v=d.h(0,"modelName")
v=J.k(v==null?"NGMY Virtual Phone":v)
u=d.h(0,"deviceId")
u=J.k(u==null?"":u)
t=d.h(0,"macAddress")
t=J.k(t==null?"":t)
s=d.h(0,"imei")
s=J.k(s==null?"":s)
r=d.h(0,"osName")
r=J.k(r==null?"NGMY OS":r)
q=d.h(0,"osVersion")
q=J.k(q==null?"1.0":q)
p=d.h(0,"virtualCity")
p=J.k(p==null?"Unknown":p)
o=d.h(0,"virtualCountry")
o=J.k(o==null?"":o)
n=A.aZ(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.aZ(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.o9(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
K3(d){return C.dWE(d)},
dWE(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$K3=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$K3)
case 3:h=a4
g=B.b.i(a2)
f=h.a
e=J.a4(f)
d=A.aK(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.I.aD(0,d,null)
x=y.a.b(s)&&J.cN(s)?10:11
break
case 10:l=J.eT(s,y.f)
l=A.dr(l,new C.bol(),l.$ti.j("F.E"),y.k)
k=A.P(l).j("ah<F.E>")
j=A.B(new A.ah(l,new C.bom(),k),k.j("F.E"))
r=j
if(J.a2(r)>=20){v=r
x=1
break}q=C.dyJ(r)
x=12
return A.b(C.K2(a2,q),$async$K3)
case 12:v=q
x=1
break
case 11:u=2
x=9
break
case 7:u=6
a0=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:p=A.aK(e.h(f,"ngmy_virtual_device_v1_"+g.toLowerCase()))
x=p!=null&&p.length!==0?13:14
break
case 13:u=16
o=B.I.aD(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.dyH(A.U(o,y.N,y.z))
m=C.dyJ(A.a([n],y.e))
x=21
return A.b(C.K2(a2,m),$async$K3)
case 21:v=m
x=1
break
case 20:u=2
x=18
break
case 16:u=15
a1=t.pop()
x=18
break
case 15:x=2
break
case 18:case 14:r=C.dWC()
x=22
return A.b(C.K2(a2,r),$async$K3)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$K3,w)},
dyJ(d){var x=A.Y(d).j("E<1,o>"),w=new A.E(d,new C.bod(),x).eA(0),v=new A.E(d,new C.boe(),x).eA(0),u=new A.E(d,new C.bof(),x).eA(0),t=new A.E(d,new C.bog(),x).eA(0),s=A.bi(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.dmv(null,r,v,u,w,t));++r}return s},
axb(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$axb=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.K3(d),$async$axb)
case 3:u=f
t=y.N
s=J.cc(u)
r=s.df(u,new C.boh(),t).eA(0)
q=s.df(u,new C.boi(),t).eA(0)
p=s.df(u,new C.boj(),t).eA(0)
o=s.df(u,new C.bok(),t).eA(0)
n=C.dmv(null,s.gE(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.K2(d,u),$async$axb)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$axb,w)},
K2(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$K2=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$K2)
case 2:v=g
u=B.b.i(d)
t=J.b4(e,new C.boc(),y.P)
t=A.B(t,t.$ti.j("a5.E"))
x=3
return A.b(v.au("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.I.aq(t,null)),$async$K2)
case 3:return A.f(null,w)}})
return A.h($async$K2,w)},
dWC(){var x,w=y.N,v=A.ba(w),u=A.ba(w),t=A.ba(w),s=A.ba(w),r=J.dw(20,y.k)
for(x=0;x<20;++x)r[x]=C.dmv(x,x,u,t,v,s)
return r},
dmv(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jA(),i=d==null,h=D.a6I[B.l.a6(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.a6I[B.l.a6(i?e+s:d,20)]
if(a1.t(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bF(256)
o=new A.E(q,new C.bob(),A.Y(q).j("E<1,o>")).fw(0)
v="VND-"+B.b.aj(o,0,4)+"-"+B.b.aj(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bF(10)
u=B.h.fw(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.b.bh(B.l.hv(j.bF(256),16),2,"0")
t=B.h.bl(q,":").toUpperCase()
if(!a0.t(0,v)&&!f.t(0,u)&&!g.t(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.l.a6(e,20)
l=D.bX5[x]
k=D.bO0[x]
return new C.o9("vd_"+1000*Date.now()+"_"+e+"_"+j.bF(99999),"Device "+B.b.bh(B.l.n(e+1),2,"0"),v,l,C.dWD(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a4().a_())},
dWD(d,e){var x,w=J.dw(e,y.N)
for(x=0;x<e;++x)w[x]=B.b.bh(B.l.hv(d.bF(256),16),2,"0")
return B.h.fw(w)},
dio:function dio(d){this.a=d},
din:function din(d,e){this.a=d
this.b=e},
dij:function dij(d){this.a=d},
dik:function dik(d){this.a=d},
dil:function dil(d){this.a=d},
dim:function dim(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o9:function o9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bol:function bol(){},
bom:function bom(){},
bod:function bod(){},
boe:function boe(){},
bof:function bof(){},
bog:function bog(){},
boh:function boh(){},
boi:function boi(){},
boj:function boj(){},
bok:function bok(){},
boc:function boc(){},
bob:function bob(){},
K1:function K1(d,e){this.c=d
this.a=e},
agf:function agf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cIe:function cIe(){},
cId:function cId(d,e){this.a=d
this.b=e},
cIb:function cIb(d){this.a=d},
cIc:function cIc(d,e){this.a=d
this.b=e},
cIf:function cIf(d){this.a=d},
cIj:function cIj(d){this.a=d},
cIk:function cIk(d,e){this.a=d
this.b=e},
cIi:function cIi(d,e,f){this.a=d
this.b=e
this.c=f},
cIh:function cIh(d,e){this.a=d
this.b=e},
cIg:function cIg(d,e){this.a=d
this.b=e},
cIl:function cIl(d){this.a=d},
WN:function WN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK_:function aK_(d,e){this.c=d
this.a=e},
K0:function K0(d,e){this.c=d
this.a=e},
aL2:function aL2(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cI8:function cI8(d){this.a=d},
cI9:function cI9(d){this.a=d},
cIa:function cIa(d){this.a=d},
cI7:function cI7(d,e){this.a=d
this.b=e},
cI4:function cI4(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI3:function cI3(d,e){this.a=d
this.b=e},
cI6:function cI6(d){this.a=d},
cI2:function cI2(d){this.a=d},
aRU:function aRU(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRV:function aRV(d,e,f){this.c=d
this.d=e
this.a=f},
aL8:function aL8(d,e){this.c=d
this.a=e},
aRT:function aRT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXR:function cXR(d){this.a=d},
cXS:function cXS(d){this.a=d},
aMo:function aMo(d){this.a=d},
aGg:function aGg(d,e){this.c=d
this.a=e},
dWB(d){var x,w,v,u,t,s,r=null,q=B.b.i(d)
if(q.length===0)return r
x=B.b.W(q,"http")?q:"https://"+q
w=x.toLowerCase()
v=C.dWA(w)
if(v!=null)return new C.ql(x,C.dmt(v,!1),D.aeb,"YouTube","https://img.youtube.com/vi/"+v+"/hqdefault.jpg")
u=C.dWz(w)
if(u!=null)return new C.ql(x,"https://www.tiktok.com/player/v1/"+u+"?music_info=0&description=0",D.aec,"TikTok",r)
t=C.dWy(x,w)
if(t!=null)return t
s=C.dWx(x,w)
if(s!=null)return s
if(B.b.t(w,"tiktok.com")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com")||B.b.t(w,"fb.watch")||B.b.t(w,"youtube.com")||B.b.t(w,"youtu.be"))return new C.ql(x,x,D.csn,"Video",r)
return r},
dWy(d,e){var x,w,v="/embed/captioned/?cr=1&v=14",u="Instagram",t=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(t!=null){x=t.b[1]
x.toString
return new C.ql(d,"https://www.instagram.com/reel/"+x+v,D.NY,u,null)}w=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(w!=null){x=w.b[1]
x.toString
return new C.ql(d,"https://www.instagram.com/p/"+x+v,D.NY,u,null)}return null},
dWx(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.ql(d,"https://www.facebook.com/plugins/video.php?href="+A.fj(2,d,B.bg,!1)+"&show_text=false&width=734",D.aed,"Facebook",null)},
dWA(d){var x,w,v,u=[A.ap("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(x=0;x<3;++x){w=u[x].dm(d)
v=w==null?null:w.b[1]
if(v!=null&&v.length===11)return v}return null},
dWz(d){var x,w=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(w!=null)return w.b[1]
x=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return x==null?null:x.b[1]},
K4:function K4(d,e){this.a=d
this.b=e},
ql:function ql(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6E:function a6E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aL3:function aL3(d,e){var _=this
_.d=$
_.d2$=d
_.aW$=e
_.c=_.a=null},
aMt:function aMt(d,e){this.c=d
this.a=e},
cN4:function cN4(d){this.a=d},
cN5:function cN5(d){this.a=d},
Fn:function Fn(d,e){this.c=d
this.a=e},
al4:function al4(){},
dyI(d,e,f,g,h,i){return new C.a6F(i,f,h,e,g,d)},
eeV(d){var x=window
x.toString
A.fM(x,"message",new C.deH(d),!1,y._)},
a6F:function a6F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agg:function agg(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cIm:function cIm(d){this.a=d},
cIv:function cIv(d){this.a=d},
cIs:function cIs(d){this.a=d},
cIr:function cIr(d){this.a=d},
cIt:function cIt(d){this.a=d},
cIq:function cIq(d){this.a=d},
cIu:function cIu(d){this.a=d},
cIp:function cIp(d){this.a=d},
cIo:function cIo(d){this.a=d},
cIn:function cIn(d){this.a=d},
deH:function deH(d){this.a=d},
dWt(){var x,w,v
try{w=A.AM()
x=w.grU(w)
if(J.a2(x)!==0&&!J.v(x,"null")&&!J.cH(x,"file:"))return x}catch(v){}return"https://ngmy.org"},
dmt(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("iv_load_policy=3")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bl(x,"&")},
dyD(d){var x=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWu(d,e,f){var x,w,v=A.a6D(d)
if(v!=null){if(f){x=C.dWt()
w=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+v+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+x+"',\n          mute: "+w+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dyD(C.dmt(v,e))}return C.dyD(d)},
dWv(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dWw(d){var x
if($.P9().a==null)return!1
x=$.Gv().a
return d>=x&&d<x+4},
dyG(){var x=$.axa
if(x!=null)x.ae(0)
$.axa=null
$.Gv().sv(0,0)},
dyF(){var x,w,v,u=$.P9()
if(u.a==null)return
x=$.axa
if(x!=null)x.ae(0)
w=$.dyE
if(w<=4){u=u.a
u.toString
C.dmu(u)
return}x=$.Gv()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.dmu(u)},
dmu(d){var x=$.axa
if(x!=null)x.ae(0)
x=120
switch(d.c.a){case 0:x=180
break
case 1:x=60
break
case 2:x=90
break
case 3:break
case 4:break
default:x=null}$.axa=A.dM(A.dp(0,0,0,0,0,x),C.ef9())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nr.prototype={
C(d){var x=null,w=this.e,v=w?B.aM:B.e,u=A.m(20),t=A.O(B.a4.l(0.25),B.w,1),s=A.X(this.d,B.a4,x,x,14)
return A.t(x,A.H(A.a([s,B.fT,A.j(this.c,x,x,x,x,x,x,A.l(x,x,w?B.a6:B.c4,x,x,x,x,x,x,x,x,11,x,x,B.P,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.o,x,B.i,B.a1,0,x,x),B.j,x,x,new A.r(v,x,t,u,x,x,B.p),x,x,x,B.fd,x,x,x)}}
C.o9.prototype={
aa(){var x=this
return A.u(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.K1.prototype={
U(){return new C.agf(A.a([],y.e))},
ge3(){return this.c}}
C.agf.prototype={
a0(){var x=this
x.a7()
$.Gv().ap(0,x.gaxc())
C.eeV(x.gbnj())
x.YR()},
bmJ(){if(this.c!=null)this.p(new C.cIe())},
bnk(){C.dyF()},
q(){$.Gv().Z(0,this.gaxc())
C.dyG()
$.P9().sv(0,null)
this.a5()},
YR(){var x=0,w=A.i(y.H),v,u=this,t
var $async$YR=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.K3(u.a.c),$async$YR)
case 3:t=e
if(u.c==null){x=1
break}u.p(new C.cId(u,t))
$.boa=J.a2(t)
case 1:return A.f(v,w)}})
return A.h($async$YR,w)},
UT(){var x=0,w=A.i(y.H),v,u=this,t
var $async$UT=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.p(new C.cIb(u))
x=3
return A.b(C.axb(u.a.c),$async$UT)
case 3:t=e
if(u.c==null){x=1
break}u.p(new C.cIc(u,t))
$.boa=J.a2(u.d)
u.c.F(y.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$UT,w)},
bpd(d){var x=this.c
x.toString
A.a7(x,!1).cB(A.eD(new C.cIf(d),!1,null,y.H))},
bpO(){var x=this.c
x.toString
return C.ZC(x,J.a2(this.d))},
C(d){var x=this,w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bv,t=A.aL(w,w,w,w,B.Lb,w,w,w,new C.cIj(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a2(x.d)+")",r=y.p
s=A.H(A.a([t,A.I(new A.DO(A.H(A.a([A.I(new A.J(B.ja,A.j(s,w,1,B.aD,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.V,!0,w,A.aP(!1,w,!0,new A.J(B.bf,A.X(B.fN,B.a4,w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbpN(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w)
t=A.c_(!0,A.w(A.a([new A.J(D.WU,s,w),A.I(x.e?B.n6:new A.l8($.P9(),new C.cIk(x,v),w,w,y.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.c9(w,u,t,w,!1,!1,A.ar2(B.a4,B.Gw,B.mn,D.d7v,x.e?w:new C.cIl(x)),w)}}
C.WN.prototype={
C(d){var x,w=this,v=null,u=A.m(14),t=A.m(14),s=A.O(B.e.l(0.1),B.w,1),r=A.a([new A.a9(0,B.G,B.a4.l(0.18),B.dl,8)],y.V),q=A.m(10),p=w.c,o=w.r
if(o!=null){x=w.d
x=new C.a6E(o,!0,!C.dWw(x),"Fold "+(B.l.aH(x,4)+1)+"/"+B.l.aH(w.e+4-1,4),v)
o=x}else o=A.t(v,A.w(A.a([A.X(B.jh,B.nf,v,v,22),B.aO,A.j("YouTube",v,v,v,v,v,v,A.l(v,v,B.e.l(0.7),v,v,v,v,v,v,v,v,7,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p),B.o,B.aW,B.k,0,B.q),B.j,B.yM,v,v,v,v,v,v,v,v,1/0)
x=y.p
return A.aJ(!1,B.V,!0,v,A.aP(!1,u,!0,A.w(A.a([A.I(A.t(v,A.ci(q,A.fT(A.w(A.a([new C.aK_(p,v),A.I(o,1),A.t(v,A.H(A.a([A.X(B.Bc,B.a4.l(0.85),v,v,9),D.cGK,A.j("Tap",v,v,v,v,v,v,A.l(v,v,B.e.l(0.5),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x),B.o,v,B.aW,B.k,0,v,v),B.j,B.aw,v,v,v,v,v,D.aDc,v,v,v)],x),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,v,v,new A.r(v,v,s,t,r,D.a08,B.p),v,v,v,B.h6,v,v,v),1),B.aO,A.j(p.b,v,1,B.aD,v,v,v,A.l(v,v,A.A(d).ax.k3,v,v,v,v,v,v,v,v,9,v,v,B.K,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.j(p.y,v,1,B.aD,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.55),v,v,v,v,v,v,v,v,8,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.j(p.c,v,1,B.aD,v,v,v,A.l(v,v,B.a4.l(0.85),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v)],x),B.o,B.i,B.k,0,B.q),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a9)}}
C.aK_.prototype={
C(d){var x=null
return A.t(x,A.H(A.a([A.I(A.j(B.h.gav(this.c.c.split("-")),x,x,B.aD,x,x,x,A.l(x,x,B.e.l(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.X(B.rJ,B.e.l(0.45),x,x,7)],y.p),B.o,x,B.i,B.k,0,x,x),B.j,B.aw,x,x,x,x,x,B.WK,x,x,x)}}
C.K0.prototype={
U(){return new C.aL2()}}
C.aL2.prototype={
C(d){var x=null,w=A.A(d).ax.a===B.C,v=w?B.fc:B.bv,u=A.aL(x,x,x,x,B.Lb,x,x,x,new C.cI8(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.c9(x,v,A.c_(!0,A.w(A.a([new A.J(D.WU,A.H(A.a([u,A.I(new A.DO(A.H(A.a([A.I(new A.J(B.ja,A.j(t.b+" \xb7 "+t.c,x,1,B.aD,x,x,x,A.l(x,x,w?B.e:B.W,x,x,x,x,x,x,x,x,14,x,x,B.D,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aJ(!1,B.V,!0,x,A.aP(!1,x,!0,new A.J(B.bf,A.X(B.fN,B.a4,x,x,28),x),B.cM,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cI9(d),x,x,x,x,x,x,x),B.j,B.L,0,x,x,x,x,x,B.a9)],s),B.o,x,B.i,B.k,0,x,x),x,x,x),1)],s),B.o,x,B.i,B.k,0,x,x),x),A.I(new A.l8($.P9(),new C.cIa(this),x,x,y.j),1)],s),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),x,!1,!1,x,x)}}
C.aRU.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.m(36),q=A.a([new A.a9(0,B.G,B.a4.l(0.35),B.eX,28),new A.a9(0,B.G,B.A.l(0.45),B.d4,18)],y.V),p=A.O(B.e.l(0.12),B.w,2),o=A.m(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
w=C.dyI(new A.dx(w+"_full_"+v,y.W),!1,v,!1,x.gaMU(),w+"_full")
x=w}else x=new C.aL8(u.r,t)}else x=new C.aGg(n,t)
else x=D.de6
return A.t(t,A.ci(o,A.fT(A.w(A.a([new C.aRV(n,m,t),A.I(x,1),new C.aRT(u.f,m,u.w,u.x,t)],y.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,t,t,new A.r(t,t,p,r,q,D.a08,B.p),t,s*2.05,t,B.bF,t,t,s)}}
C.aRV.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.dD(s)
s=A.hL(s)
x=new A.dE(r,s)
w=x.gJw()===0?12:x.gJw()
s=B.b.bh(B.l.n(s),2,"0")
r=(r<12?B.h3:B.j7)===B.h3?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.H(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,t,t,B.mR,t,t,t),B.bD,A.j(v.b,t,t,t,t,t,t,A.l(t,t,B.e.l(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bU,D.aO8,B.ef,D.aNl,B.ef,D.aOc],u),B.o,t,B.i,B.k,0,t,t)],u)
if(this.d)B.h.A(r,A.a([B.aO,A.H(A.a([A.X(B.L0,B.a4.l(0.9),t,t,12),B.ef,A.I(A.j(v.c,t,t,B.aD,t,t,t,A.l(t,t,B.e.l(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,t,t,A.l(t,t,B.e.l(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.o,t,B.i,B.k,0,t,t)],u))
return A.t(t,A.w(r,B.o,B.i,B.k,0,B.q),B.j,B.aw,t,t,t,t,t,D.aDZ,t,t,t)}}
C.aL8.prototype={
C(d){var x=null
return A.t(x,A.aH(A.w(A.a([A.X(B.AC,B.e.l(0.35),x,x,40),B.Y,A.j("No video yet",x,x,x,x,x,x,A.l(x,x,B.e.l(0.6),x,x,x,x,x,x,x,x,12,x,x,B.P,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aO,A.j("Tap search above to paste a link",x,x,x,x,x,x,A.l(x,x,B.e.l(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aN,A.eP(D.aRy,D.cWj,this.c,A.es(x,x,x,x,x,x,x,x,x,B.a4,x,x,x,x,x,new A.aG(B.a4.l(0.5),1,B.w,-1),x,x,x,x))],y.p),B.o,B.i,B.a1,0,B.q),x,x,x),B.j,B.yM,x,x,x,x,x,x,x,x,1/0)}}
C.aRT.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.ax3(B.B1,"YouTube",t===0,s,new C.cXR(v))
t=v.ax3(B.kr,"Device",t===1,s,new C.cXS(v))
x=s?"Power off":"Power on"
w=s?D.Zp:D.aLp
return A.t(u,A.H(A.a([r,B.an,t,B.bD,A.aL(u,u,u,u,A.X(w,s?B.bE:B.fz,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dA)],y.p),B.o,u,B.i,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,D.aDJ,u,u,u)},
ax3(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bp
else x=f?B.a4:B.az
w=f&&g?B.a4.l(0.15):B.L
v=A.m(10)
u=g?h:t
return A.I(A.aJ(!1,B.V,!0,v,A.aP(!1,A.m(10),!0,new A.J(B.np,A.w(A.a([A.X(d,x,t,t,18),A.j(e,t,t,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.P,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.o,B.i,B.a1,0,B.q),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.j,w,0,t,t,t,t,t,B.a9),1)}}
C.aMo.prototype={
C(d){return D.atq}}
C.aGg.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,w,w,B.lM,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,w,w,A.l(w,w,B.e.l(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.tH("Serial",v.c),r=x.tH("Model",v.d),q=x.tH("Device ID",v.e),p=x.tH("IMEI",v.r),o=x.tH("MAC",v.f),n=x.tH("OS",v.w+" "+v.x),m=x.tH("Location",v.y+", "+v.z),l=x.tH("Coordinates",B.m.a3(v.Q,4)+", "+B.m.a3(v.as,4)),k=x.tH("Timezone",v.at)
v=v.ax
return A.ei(A.a([u,B.aO,t,B.ab,s,r,q,p,o,n,m,l,k,x.tH("Provisioned",v.length>=10?B.b.aj(v,0,10):v)],y.p),w,B.bf,w,w,B.ak,!1)},
tH(d,e){var x=null
return new A.J(B.cY,A.w(A.a([A.j(d.toUpperCase(),x,x,x,x,x,x,A.l(x,x,B.e.l(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.cy,A.j(e,x,x,x,x,x,x,D.cOe,x,x,x)],y.p),B.F,B.i,B.k,0,B.q),x)}}
C.K4.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ql.prototype={
gaMU(){var x=this.c
return x===D.aeb||x===D.aec||x===D.NY||x===D.aed}}
C.a6E.prototype={
U(){return new C.aL3(null,null)}}
C.aL3.prototype={
a0(){this.a7()
var x=A.bF(null,B.vc,null,1,null,this)
x.n6(0,!0)
this.d=x},
q(){var x=this.d
x===$&&A.c()
x.q()
this.aWO()},
C(d){var x,w,v=this,u=null,t=v.a.c,s=A.dq(u,new A.r(u,u,u,u,u,new A.am(B.cI,B.cu,B.H,A.a([B.L,B.A.l(0.55)],y.O),u,u),B.p),B.bS),r=y.Y,q=v.d
q===$&&A.c()
q=A.cw(B.id,q,u)
x=B.e.l(0.92)
r=A.aH(new A.d3(new A.b2(q,new A.bn(0.72,1,r),r.j("b2<bl.T>")),!1,A.X(B.jh,x,u,u,20),u),u,u,u)
q=v.a.e?B.e.l(0.22):B.nf
x=A.m(4)
w=v.a.e?"WAIT":"LIVE"
t=A.a([new C.aMt(t,u),s,r,A.aR(u,A.t(u,A.j(w,u,u,u,u,u,u,A.l(u,u,B.e,u,u,u,u,u,u,u,u,5,u,u,B.D,u,u,!0,u,0.4,u,u,u,u,u,u),u,u,u),B.j,u,u,new A.r(q,u,u,x,u,u,B.p),u,u,u,new A.V(3,1,3,1),u,u,u),u,u,u,2,2,u)],y.p)
s=v.a
s=s.f
r=B.e.l(0.75)
t.push(A.aR(u,A.j(s,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,5,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,3,u,3,u))
s=v.a.c
r=B.e.l(0.85)
t.push(A.aR(3,A.j(s.d,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,6,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,3,u,u,u))
return new A.aF(B.al,u,B.bc,B.y,t,u)}}
C.aMt.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k2(v,B.N,new C.cN4(this),B.c8,B.bL,!0,x,x,new C.cN5(this),x)
return new C.Fn(w,x)}}
C.Fn.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aO(A.a([B.uR,B.SS],y.O),B.jh)
break
case 1:x=new A.aO(A.a([B.yM,D.axZ],y.O),B.lq)
break
case 2:x=new A.aO(A.a([D.azw,D.axp],y.O),B.AL)
break
case 3:x=new A.aO(A.a([B.W,B.du],y.O),B.AP)
break
case 4:x=new A.aO(A.a([B.aw,B.aM],y.O),B.pf)
break
default:x=v}w=x.a
return A.t(v,A.aH(A.X(x.b,B.a4.l(0.55),v,v,28),v,v,v),B.j,v,v,new A.r(v,v,v,v,v,new A.am(B.aK,B.aR,B.H,w,v,v),B.p),v,v,v,v,v,v,v)}}
C.al4.prototype={
q(){var x=this,w=x.aW$
if(w!=null)w.Z(0,x.gdK())
x.aW$=null
x.a5()},
by(){this.bQ()
this.bL()
this.dL()}}
C.a6F.prototype={
U(){return new C.agg()}}
C.agg.prototype={
a7z(d,e){var x,w=A.a6D(e),v=this.a,u=v.x&&!this.w
if(w!=null&&v.f){d.removeAttribute("srcdoc")
d.src=C.dmt(w,u)
return}if(v.f){x=e.toLowerCase()
v=B.b.t(x,"tiktok.com/player")||B.b.t(x,"instagram.com")||B.b.t(x,"facebook.com/plugins")}else v=!1
if(v){d.removeAttribute("src")
d.srcdoc=C.dWu(e,u,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bF_(){var x,w=this
if(w.w)return
w.p(new C.cIm(w))
x=w.e
if(x!=null)w.a7z(x,w.a.d)},
a0(){var x,w,v=this
v.a7()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aU()
v.d=x
try{$.Gx()
$.pG().uU(x,new C.cIv(v),!0)}catch(w){v.r=!0
v.f=!1}},
b2(d){var x,w=this
w.bf(d)
if(d.d!==w.a.d&&w.e!=null){w.p(new C.cIo(w))
x=w.e
x.toString
w.a7z(x,w.a.d)}},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.r){p.a.toString
x=B.e.l(0.55)
p.a.toString
w=y.p
x=A.a([A.X(B.ZG,x,o,o,36)],w)
p.a.toString
B.h.A(x,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",o,o,o,o,o,o,A.l(o,o,B.e.l(0.65),o,o,o,o,o,o,o,o,11,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),B.U,o,o)],w))
return A.fT(A.aH(new A.J(new A.V(12,12,12,12),A.w(x,B.o,B.i,B.a1,0,B.q),o),o,o,o),B.A,!0)}p.a.toString
x=p.d
x===$&&A.c()
w=y.p
x=A.a([A.a1Z(o,B.tu,x)],w)
if(p.f)x.push(A.fT(A.aH(new A.ab(28,28,D.auu,o),o,o,o),B.cR,!0))
if(p.a.x&&!p.w&&!p.f&&!p.r){v=B.A.l(0.35)
u=B.A.l(0.72)
t=A.m(14)
s=A.O(B.bp,B.w,1)
r=A.X(B.L4,B.e.l(0.9),o,o,22)
q=B.e.l(0.92)
p.a.toString
x.push(A.eX(0,A.aJ(!1,B.V,!0,o,A.aP(!1,o,!0,A.aH(A.t(o,A.H(A.a([r,B.an,A.j("Tap to play music",o,o,o,o,o,o,A.l(o,o,q,o,o,o,o,o,o,o,o,14,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.o,o,B.i,B.a1,0,o,o),B.j,o,o,new A.r(u,o,s,t,o,o,B.p),o,o,o,D.We,o,o,o),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gbEZ(),o,o,o,o,o,o,o),B.j,v,0,o,o,o,o,o,B.a9)))}w=A.a6D(p.a.d)
if(w!=null)x.push(A.aR(8,A.jq(D.aPE,D.d2R,new C.cIn(p),A.iP(o,o,B.A.l(0.55),o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.fd,o,o,o,o,o,o,o,o)),o,o,o,8,o,o))
return new A.aF(B.al,o,B.bc,B.y,x,o)}}
var z=a.updateTypes(["o(o9)","~()","K1(R)","o9(a_<@,@>)","a1(o9)","a_<o,@>(o9)","aB<~>()","K0(R)","l8<K>(R,ql?,q?)","WN(R,K)","u0(R,ql?,q?)","Fn(R,an,dL?)"])
C.dio.prototype={
$1(d){return new C.K1(this.a,null)},
$S:z+2}
C.din.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.A(d).ax.a===B.C,m=A.aE(d,o,y.w).w,l=A.m(28),k=y.O,j=n?A.a([B.dW,B.W],k):A.a([B.e,B.av],k),i=A.a([new A.a9(0,B.G,B.a4.l(0.22),B.eX,32)],y.V),h=A.O(n?B.c7:B.a4.l(0.18),B.w,1),g=A.m(28),f=B.a4.l(n?0.35:0.14)
k=A.a([f,B.au.l(n?0.18:0.08)],k)
f=A.t(o,D.aN3,B.j,o,o,new A.r(B.a4.l(0.18),o,A.O(B.a4.l(0.45),B.w,1),o,o,o,B.at),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,o,o,A.l(o,o,n?B.e:B.W,o,o,o,o,o,o,o,o,18,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.w(A.a([x,B.aO,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",o,o,o,o,o,o,A.l(o,o,n?B.a6:B.am,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,B.i,B.k,0,B.q),1)
k=A.t(o,A.H(A.a([f,B.f5,x,A.aL(o,o,o,o,A.X(B.d2,n?B.az:B.cR,o,o,o),o,o,o,new C.dij(d),o,o,o,o,o,o)],w),B.o,o,B.i,B.k,0,o,o),B.j,o,o,new A.r(o,o,o,o,o,new A.am(B.ae,B.ag,B.H,k,o,o),B.p),o,o,o,B.IT,o,o,o)
f=A.eg(B.cG,A.a([new C.Nr("YouTube",B.L_,n,o),new C.Nr("TikTok",B.lq,n,o),new C.Nr("Instagram",B.AL,n,o),new C.Nr("Facebook",B.AP,n,o)],w),B.cn,8,8)
x=this.b
v=A.l(o,o,n?B.e:B.W,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.cm:B.hJ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aM:B.bv
s=A.X(B.fx,B.a4.l(0.85),o,o,o)
r=A.m(16)
q=A.m(16)
p=n?B.c7:B.aI
v=A.w(A.a([f,B.aS,A.aM(o,B.S,!0,o,!0,B.y,o,A.aN(),x,o,o,o,o,o,2,A.bq(o,new A.bb(4,r,B.X),o,o,o,o,o,o,!0,new A.bb(4,q,new A.aG(p,1,B.w,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.bb(4,A.m(16),B.Gk),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.E,!0,o,!0,o,!1,o,B.a7,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.Z,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a_,o,B.aa,o,o,o,o)],w),B.as,B.i,B.k,0,B.q)
f=A.jq(D.aN6,D.d6E,new C.dik(d),A.iP(o,o,o,o,o,o,o,o,o,o,o,n?B.bm:B.am,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.J(new A.V(12,0,12,12+m.f.d),A.dq(A.ci(g,A.w(A.a([k,new A.J(B.Ww,v,o),new A.J(D.aFi,A.H(A.a([f,B.bD,A.c8(!1,A.j("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.a6:B.ay,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,o,new C.dil(d),o,o),B.an,A.dN(D.aRh,D.d7p,new C.dim(d,x),A.bz(B.a4,o,o,o,B.e,o,D.We,o,new A.bE(A.m(14),B.X),o,o,o))],w),B.o,o,B.i,B.k,0,o,o),o)],w),B.as,B.i,B.a1,0,B.q),B.aJ),new A.r(o,o,h,l,i,new A.am(B.aK,B.aR,B.H,j,o,o),B.p),B.bS),o)},
$S:86}
C.dij.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dik.prototype={
$0(){C.dyG()
$.P9().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dil.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dim.prototype={
$0(){var x=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(x)
return null},
$S:0}
C.bol.prototype={
$1(d){return C.dyH(A.U(d,y.N,y.z))},
$S:z+3}
C.bom.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bod.prototype={
$1(d){return d.c},
$S:z+0}
C.boe.prototype={
$1(d){return d.r},
$S:z+0}
C.bof.prototype={
$1(d){return d.f},
$S:z+0}
C.bog.prototype={
$1(d){return d.at},
$S:z+0}
C.boh.prototype={
$1(d){return d.c},
$S:z+0}
C.boi.prototype={
$1(d){return d.r},
$S:z+0}
C.boj.prototype={
$1(d){return d.f},
$S:z+0}
C.bok.prototype={
$1(d){return d.at},
$S:z+0}
C.boc.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bob.prototype={
$1(d){return B.b.bh(B.l.hv(d,16),2,"0").toUpperCase()},
$S:88}
C.cIe.prototype={
$0(){},
$S:0}
C.cId.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cIb.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cIc.prototype={
$0(){var x=this.a,w=A.B(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cIf.prototype={
$1(d){return new C.K0(this.a,null)},
$S:z+7}
C.cIj.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cIk.prototype={
$3(d,e,f){return new A.l8($.Gv(),new C.cIi(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cIi.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.Dh(d,l,y.Q)
x=x==null?l:x.glz()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.a4.l(0.12)
t=A.m(12)
s=A.O(B.a4.l(0.35),B.w,1)
r=A.X(B.jh,B.a4,l,l,18)
q=k.d
p=J.a2(m.a.d)
o=$.Gv().a
n=B.m.Y(o+4,1,p)
u=A.a([A.t(l,A.H(A.a([r,B.an,A.I(A.j("Now playing "+q+" \xb7 "+("Devices "+A.p(o+1)+"\u2013"+n+" of "+p),l,l,l,l,l,l,A.l(l,l,m.c?B.e:B.W,l,l,l,l,l,l,l,l,12,l,l,B.P,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.o,l,B.i,B.k,0,l,l),B.j,l,l,new A.r(u,l,s,t,l,l,B.p),l,l,B.d9,B.h5,l,l,1/0)],x)
if(w){t=A.m(16)
s=k.b
B.h.A(u,A.a([A.ci(t,new A.j5(1.7777777777777777,C.dyI(new A.dx("fleet_master_"+s,y.W),!0,s,!0,k.gaMU(),"fleet_master"),l),B.aJ),B.ab],x))}B.h.A(v,u)}j=j?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(m.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,l,l,A.l(l,l,A.A(d).ax.k3.l(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
j=m.a
return A.vW(0,B.y,l,B.E,l,l,l,l,!1,l,B.ak,!1,A.a([new A.ky(new A.J(B.IL,A.w(v,B.F,B.i,B.k,0,B.q),l),l),new A.oj(D.aDm,A.aBe(new A.nx(new C.cIh(j,k),J.a2(j.d),!1,!0,!0,A.tu(),l),D.cHv),l)],x))},
$S:1687}
C.cIh.prototype={
$2(d,e){var x=this.a,w=J.n(x.d,e)
return new C.WN(w,e,J.a2(x.d),new C.cIg(x,w),this.b,null)},
$S:z+9}
C.cIg.prototype={
$0(){return this.a.bpd(this.b)},
$S:0}
C.cIl.prototype={
$0(){this.a.UT()
return null},
$S:0}
C.cI8.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cI9.prototype={
$0(){C.ZC(this.a,$.boa)
return null},
$S:0}
C.cIa.prototype={
$3(d,e,f){return A.fd(new C.cI7(this.a,e))},
$S:z+10}
C.cI7.prototype={
$2(d,e){var x,w=null,v=B.m.Y(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cA(A.w(A.a([A.j(s,w,w,w,w,w,w,A.l(w,w,A.A(d).ax.k3.l(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.U,w,w),B.aS,new C.aRU(v,t.a.c,t.e,t.d,new C.cI4(t),new C.cI5(t),new C.cI6(t),u,w)],y.p),B.o,B.i,B.k,0,B.q),w,B.E,B.oS,w,w,B.ak),w,w,w)},
$S:1688}
C.cI4.prototype={
$0(){var x=this.a.c
x.toString
C.ZC(x,$.boa)
return null},
$S:0}
C.cI5.prototype={
$1(d){var x=this.a
return x.p(new C.cI3(x,d))},
$S:33}
C.cI3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cI6.prototype={
$0(){var x=this.a
return x.p(new C.cI2(x))},
$S:0}
C.cI2.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cXR.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXS.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cN4.prototype={
$3(d,e,f){return new C.Fn(this.a.c,null)},
$S:z+11}
C.cN5.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.al,null,B.bc,B.y,A.a([new C.Fn(this.a.c,null),D.atF],y.p),null)},
$C:"$3",
$R:3,
$S:266}
C.cIm.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cIv.prototype={
$1(d){var x=this.a,w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
w.allowFullscreen=!0
w.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
w.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
x.e=w
x.a7z(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.fM(w,"load",new C.cIs(x),!1,v)
w=x.e
w.toString
A.fM(w,"error",new C.cIt(x),!1,v)
A.bN(B.kl,new C.cIu(x),y.H)
x=x.e
x.toString
return x},
$S:603}
C.cIs.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.cIr(x))},
$S:46}
C.cIr.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cIt.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.cIq(x))},
$S:46}
C.cIq.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cIu.prototype={
$0(){var x=this.a
if(x.c!=null&&x.f)x.p(new C.cIp(x))},
$S:12}
C.cIp.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cIo.prototype={
$0(){var x=this.a
x.f=!0
x.w=x.r=!1},
$S:0}
C.cIn.prototype={
$0(){var x,w=A.a6D(this.a.a.d)
if(w==null)return
x=window
x.toString
B.kQ.SD(x,"https://www.youtube.com/watch?v="+w,"_blank")},
$S:0}
C.deH.prototype={
$1(d){var x,w,v,u,t=new A.EW([],[]).IL(d.data,!0),s=t==null?null:J.k(t),r=s==null?"":s
if(J.v(r,"ngmy-vd-ended")){this.a.$0()
return}v=d.origin.toLowerCase()
if(!B.b.t(v,"youtube.com")&&!B.b.t(v,"youtube-nocookie.com"))return
try{x=B.I.aD(0,r,null)
t=y.f
if(t.b(x)){w=J.n(x,"info")
if(J.v(J.n(x,"event"),"onStateChange")&&J.v(w,0)){this.a.$0()
return}if(J.v(J.n(x,"event"),"infoDelivery")&&t.b(w)&&J.v(J.n(w,"playerState"),0))this.a.$0()}}catch(u){}},
$S:1689};(function aliases(){var x=C.al4.prototype
x.aWO=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.agf.prototype,"gaxc","bmJ",1)
x(v,"gbnj","bnk",1)
x(v,"gbpN","bpO",6)
x(C.agg.prototype,"gbEZ","bF_",1)
w(C,"ef9","dyF",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.yA,[C.dio,C.din,C.bol,C.bom,C.bod,C.boe,C.bof,C.bog,C.boh,C.boi,C.boj,C.bok,C.boc,C.bob,C.cIf,C.cIk,C.cIi,C.cIa,C.cI5,C.cN4,C.cN5,C.cIv,C.cIs,C.cIt,C.deH])
w(A.a03,[C.dij,C.dik,C.dil,C.dim,C.cIe,C.cId,C.cIb,C.cIc,C.cIj,C.cIg,C.cIl,C.cI8,C.cI9,C.cI4,C.cI3,C.cI6,C.cI2,C.cXR,C.cXS,C.cIm,C.cIr,C.cIq,C.cIu,C.cIp,C.cIo,C.cIn])
w(A.aw,[C.Nr,C.WN,C.aK_,C.aRU,C.aRV,C.aL8,C.aRT,C.aMo,C.aGg,C.aMt,C.Fn])
w(A.an,[C.o9,C.ql])
w(A.ae,[C.K1,C.K0,C.a6E,C.a6F])
w(A.af,[C.agf,C.aL2,C.al4,C.agg])
w(A.a04,[C.cIh,C.cI7])
v(C.K4,A.aHb)
v(C.aL3,C.al4)
x(C.al4,A.ef)})()
A.dCc(b.typeUniverse,JSON.parse('{"K1":{"ae":[],"q":[]},"WN":{"aw":[],"q":[]},"K0":{"ae":[],"q":[]},"Nr":{"aw":[],"q":[]},"agf":{"af":["K1"]},"aK_":{"aw":[],"q":[]},"aL2":{"af":["K0"]},"aRU":{"aw":[],"q":[]},"aRV":{"aw":[],"q":[]},"aL8":{"aw":[],"q":[]},"aRT":{"aw":[],"q":[]},"aMo":{"aw":[],"q":[]},"aGg":{"aw":[],"q":[]},"a6E":{"ae":[],"q":[]},"Fn":{"aw":[],"q":[]},"aL3":{"af":["a6E"]},"aMt":{"aw":[],"q":[]},"a6F":{"ae":[],"q":[]},"agg":{"af":["a6F"]}}'))
var y=(function rtii(){var x=A.b3
return{V:x("a3<a9>"),O:x("a3<x>"),e:x("a3<o9>"),s:x("a3<o>"),p:x("a3<q>"),t:x("a3<K>"),X:x("ad<o9>"),a:x("ad<@>"),P:x("a_<o,@>"),f:x("a_<@,@>"),w:x("o4"),_:x("De"),k:x("o9"),N:x("o"),Y:x("bn<aa>"),W:x("dx<o>"),J:x("l8<K>"),j:x("l8<ql?>"),E:x("uZ<d0>"),q:x("Xz"),z:x("@"),Q:x("an?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Zp=new A.M(983224,"MaterialIcons",!1)
D.aPM=new A.a8(D.Zp,48,B.bp,null,null,null)
D.cNS=new A.T(!0,B.cm,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVd=new A.C("Powered off",null,D.cNS,null,null,null,null,null,null,null,null,null)
D.bL9=x([D.aPM,B.Q,D.cVd],y.p)
D.aAK=new A.eK(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bL9,null)
D.atq=new A.dn(B.N,null,null,D.aAK,null)
D.cH9=new A.ab(18,18,B.SA,null)
D.atF=new A.dn(B.N,null,null,D.cH9,null)
D.auu=new A.hb(2,null,null,null,null,B.a6,null,null,null,null)
D.axp=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axZ=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azw=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDc=new A.V(0,3,0,3)
D.aDm=new A.V(10,0,10,88)
D.aDJ=new A.V(12,6,12,10)
D.aDZ=new A.V(14,8,14,6)
D.We=new A.V(18,12,18,12)
D.aFi=new A.V(20,8,20,20)
D.WU=new A.V(8,6,15,8)
D.aLp=new A.M(983222,"MaterialIcons",!1)
D.aN3=new A.a8(B.jh,26,B.a4,null,null,null)
D.aN6=new A.a8(B.YE,18,null,null,null,null)
D.aNl=new A.a8(B.rJ,14,B.a6,null,null,null)
D.aLH=new A.M(983420,"MaterialIcons",!1)
D.aO8=new A.a8(D.aLH,14,B.a6,null,null,null)
D.aJO=new A.M(62895,"MaterialIcons",!1)
D.aOc=new A.a8(D.aJO,14,B.a6,null,null,null)
D.aPE=new A.a8(B.rB,16,B.a6,null,null,null)
D.aRh=new A.a8(B.jg,20,null,null,null,null)
D.aRy=new A.a8(B.fN,16,null,null,null,null)
D.bON=x([B.aM,B.W],y.O)
D.a08=new A.am(B.aK,B.aR,B.H,D.bON,null,null)
D.cAO=new A.aO("NGMY OS","14.2.1")
D.czB=new A.aO("VirtualDroid","13.8.4")
D.czA=new A.aO("NGMY OS","15.0.0")
D.cAm=new A.aO("VirtualDroid","14.1.2")
D.czy=new A.aO("NGMY Tab OS","12.9.7")
D.czw=new A.aO("NGMY OS","13.5.3")
D.czl=new A.aO("VirtualDroid","15.2.0")
D.czY=new A.aO("NGMY OS","14.8.1")
D.cAs=new A.aO("NGMY Tab OS","13.2.4")
D.cAY=new A.aO("VirtualDroid","12.6.9")
D.cze=new A.aO("NGMY OS","16.0.1")
D.cz3=new A.aO("VirtualDroid","14.9.0")
D.cAF=new A.aO("NGMY Tab OS","14.0.3")
D.czK=new A.aO("NGMY OS","13.1.8")
D.czd=new A.aO("VirtualDroid","13.4.5")
D.czv=new A.aO("NGMY OS","15.3.2")
D.cAt=new A.aO("NGMY Tab OS","12.4.1")
D.cAI=new A.aO("VirtualDroid","16.1.0")
D.czX=new A.aO("NGMY OS","14.4.6")
D.cAP=new A.aO("VirtualDroid","15.0.8")
D.bO0=x([D.cAO,D.czB,D.czA,D.cAm,D.czy,D.czw,D.czl,D.czY,D.cAs,D.cAY,D.cze,D.cz3,D.cAF,D.czK,D.czd,D.czv,D.cAt,D.cAI,D.czX,D.cAP],A.b3("a3<+(o,o)>"))
D.cD3=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCC=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCx=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCG=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCt=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCI=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cD5=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCu=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCB=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCK=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCs=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCY=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCV=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCA=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCS=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCR=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCr=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCF=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCP=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCU=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6I=x([D.cD3,D.cCC,D.cCx,D.cCG,D.cCt,D.cCI,D.cD5,D.cCu,D.cCB,D.cCK,D.cCs,D.cCY,D.cCV,D.cCA,D.cCS,D.cCR,D.cCr,D.cCF,D.cCP,D.cCU],A.b3("a3<+(o,o,aa,aa,o)>"))
D.bX5=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.aeb=new C.K4(0,"youtube")
D.aec=new C.K4(1,"tiktok")
D.NY=new C.K4(2,"instagram")
D.aed=new C.K4(3,"facebook")
D.csn=new C.K4(4,"other")
D.cGK=new A.ab(3,null,null,null)
D.cHv=new A.i6(4,10,8,0.52,null)
D.cWv=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKZ=new A.aV(D.cWv,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cOe=new A.T(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWj=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2R=new A.C("Open in YouTube",null,B.iX,null,null,null,null,null,null,null,null,null)
D.d6E=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7p=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7v=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.de6=new C.aMo(null)})();(function staticFields(){$.dyE=20
$.axa=null
$.boa=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ekb","Gv",()=>A.aD2(0))
x($,"ekc","P9",()=>A.aD2(null))})()};
(a=>{a["gKRS/EjKkdtV+Z3yFn9tzABcC38="]=a.current})($__dart_deferred_initializers__);