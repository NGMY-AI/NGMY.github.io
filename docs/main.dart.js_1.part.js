((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
edf(d,e){A.a6(d,!1).cv(A.ez(new C.dfM(e),!0,null,x.H))},
Zl(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zl=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.OU()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aX,B.aO),t)
w=3
return A.b(A.dK(B.L,new C.dfL(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zl)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dTy(r)
if(q==null){d.H(x.q).f.T(D.cKA)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$Zl)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dvS=n
p=C.dTs(n)
n=$.Gh()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.djN(q)
d.H(x.q).f.T(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zl,v)},
dvV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aV(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aV(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oa(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JS(d){return C.dTB(d)},
dTB(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JS=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JS)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eH(r,x.f)
k=A.dk(k,new C.boq(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.bor(),j),j.j("E.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dvX(q)
w=12
return A.b(C.JR(a3,p),$async$JS)
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
n=B.I.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dvV(A.S(n,x.N,x.z))
l=C.dvX(A.a([m],x.e))
w=21
return A.b(C.JR(a3,l),$async$JS)
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
case 18:case 14:q=C.dTz()
w=22
return A.b(C.JR(a3,q),$async$JS)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JS,v)},
dvX(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boi(),w).eA(0),u=new A.F(d,new C.boj(),w).eA(0),t=new A.F(d,new C.bok(),w).eA(0),s=new A.F(d,new C.bol(),w).eA(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.djO(null,q,u,t,v,s));++q}return r},
ax8(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$ax8=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JS(d),$async$ax8)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.dd(t,new C.bom(),s).eA(0)
p=r.dd(t,new C.bon(),s).eA(0)
o=r.dd(t,new C.boo(),s).eA(0)
n=r.dd(t,new C.bop(),s).eA(0)
m=C.djO(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JR(d,t),$async$ax8)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$ax8,v)},
JR(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JR=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JR)
case 2:u=g
t=B.b.i(d)
s=J.b4(e,new C.boh(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ar(s,null)),$async$JR)
case 3:return A.f(null,v)}})
return A.h($async$JR,v)},
dTz(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.du(20,x.k)
for(w=0;w<20;++w)q[w]=C.djO(w,w,t,s,u,r)
return q},
djO(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jA(),h=d==null,g=D.a6w[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6w[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.bog(),A.a_(p).j("F<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hw(i.bH(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a3(e,20)
k=D.bWD[w]
j=D.bNq[w]
return new C.oa("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dTA(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
dTA(d,e){var w,v=J.du(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hw(d.bH(256),16),2,"0")
return B.h.fw(v)},
dfM:function dfM(d){this.a=d},
dfL:function dfL(d,e){this.a=d
this.b=e},
dfH:function dfH(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d,e){this.a=d
this.b=e},
Nd:function Nd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oa:function oa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
boq:function boq(){},
bor:function bor(){},
boi:function boi(){},
boj:function boj(){},
bok:function bok(){},
bol:function bol(){},
bom:function bom(){},
bon:function bon(){},
boo:function boo(){},
bop:function bop(){},
boh:function boh(){},
bog:function bog(){},
JQ:function JQ(d,e){this.c=d
this.a=e},
ag9:function ag9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cFX:function cFX(){},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFU:function cFU(d){this.a=d},
cFV:function cFV(d,e){this.a=d
this.b=e},
cFY:function cFY(d){this.a=d},
cG1:function cG1(d){this.a=d},
cG2:function cG2(d,e){this.a=d
this.b=e},
cG0:function cG0(d,e,f){this.a=d
this.b=e
this.c=f},
cG_:function cG_(d,e){this.a=d
this.b=e},
cFZ:function cFZ(d,e){this.a=d
this.b=e},
cG3:function cG3(d){this.a=d},
Wp:function Wp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK0:function aK0(d,e){this.c=d
this.a=e},
JP:function JP(d,e){this.c=d
this.a=e},
aL8:function aL8(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cFR:function cFR(d){this.a=d},
cFS:function cFS(d){this.a=d},
cFT:function cFT(d){this.a=d},
cFQ:function cFQ(d,e){this.a=d
this.b=e},
cFN:function cFN(d){this.a=d},
cFO:function cFO(d){this.a=d},
cFM:function cFM(d,e){this.a=d
this.b=e},
cFP:function cFP(d){this.a=d},
cFL:function cFL(d){this.a=d},
aS3:function aS3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aS4:function aS4(d,e,f){this.c=d
this.d=e
this.a=f},
aLe:function aLe(d,e){this.c=d
this.a=e},
aS2:function aS2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cVp:function cVp(d){this.a=d},
cVq:function cVq(d){this.a=d},
aMx:function aMx(d){this.a=d},
aGe:function aGe(d,e){this.c=d
this.a=e},
dTy(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dTx(v)
if(u!=null)return new C.qk(w,C.djM(u,!1),D.adY,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dTw(v)
if(t!=null)return new C.qk(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adZ,"TikTok",q)
s=C.dTv(w,v)
if(s!=null)return s
r=C.dTu(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qk(w,w,D.cs5,"Video",q)
return q},
dTv(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qk(d,"https://www.instagram.com/reel/"+w+u,D.NW,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qk(d,"https://www.instagram.com/p/"+w+u,D.NW,t,null)}return null},
dTu(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qk(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bf,!1)+"&show_text=false&width=734",D.ae_,"Facebook",null)},
dTx(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dm(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dTw(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
JT:function JT(d,e){this.a=d
this.b=e},
qk:function qk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6t:function a6t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aL9:function aL9(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aMC:function aMC(d,e){this.c=d
this.a=e},
cKH:function cKH(d){this.a=d},
cKI:function cKI(d){this.a=d},
Fh:function Fh(d,e){this.c=d
this.a=e},
al4:function al4(){},
dvW(d,e,f,g,h,i){return new C.a6u(i,f,h,e,g,d)},
ebS(d){var w=window
w.toString
A.hh(w,"message",new C.dcd(d),!1,x._)},
a6u:function a6u(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aga:function aga(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cG4:function cG4(d){this.a=d},
cGd:function cGd(d){this.a=d},
cGa:function cGa(d){this.a=d},
cG9:function cG9(d){this.a=d},
cGb:function cGb(d){this.a=d},
cG8:function cG8(d){this.a=d},
cGc:function cGc(d){this.a=d},
cG7:function cG7(d){this.a=d},
cG6:function cG6(d){this.a=d},
cG5:function cG5(d){this.a=d},
dcd:function dcd(d){this.a=d},
dTq(){var w,v,u
try{v=A.AE()
w=v.grU(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
djM(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
boe(d){var w=A.ao(y.c,!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
dvR(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dTr(d,e,f){var w,v,u=C.boe(d)
if(u!=null){if(f){w=C.dTq()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dvR(C.djM(u,e))}return C.dvR(d)},
dTs(d){if(d<=4)return 0
return B.l.aJ(d-1,4)*4},
dTt(d){var w
if($.OU().a==null)return!1
w=$.Gh().a
return d>=w&&d<w+4},
dvU(){var w=$.ax7
if(w!=null)w.ad(0)
$.ax7=null
$.Gh().sv(0,0)},
dvT(){var w,v,u,t=$.OU()
if(t.a==null)return
w=$.ax7
if(w!=null)w.ad(0)
v=$.dvS
if(v<=4){t=t.a
t.toString
C.djN(t)
return}w=$.Gh()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.djN(t)},
djN(d){var w=$.ax7
if(w!=null)w.ad(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.ax7=A.dI(A.dm(0,0,0,0,0,w),C.ec6())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nd.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.O(B.a4.l(0.25),B.w,1),r=A.W(this.d,B.a4,w,w,14)
return A.t(w,A.H(A.a([r,B.fA,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.oa.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JQ.prototype={
U(){return new C.ag9(A.a([],x.e))},
gdQ(){return this.c}}
C.ag9.prototype={
a_(){var w=this
w.a5()
$.Gh().ap(0,w.gaxb())
C.ebS(w.gbno())
w.YQ()},
bmO(){if(this.c!=null)this.q(new C.cFX())},
bnp(){C.dvT()},
p(){$.Gh().Z(0,this.gaxb())
C.dvU()
$.OU().sv(0,null)
this.a4()},
YQ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YQ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JS(t.a.c),$async$YQ)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cFW(t,s))
$.bof=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$YQ,v)},
UR(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UR=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cFU(t))
w=3
return A.b(C.ax8(t.a.c),$async$UR)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cFV(t,s))
$.bof=J.a2(t.d)
t.c.H(x.q).f.T(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UR,v)},
bpk(d){var w=this.c
w.toString
A.a6(w,!1).cv(A.ez(new C.cFY(d),!1,null,x.H))},
bpW(){var w=this.c
w.toString
return C.Zl(w,J.a2(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.bA,s=A.aL(v,v,v,v,B.L9,v,v,v,new C.cG1(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DJ(A.H(A.a([A.J(new A.I(B.j4,A.j(r,v,1,B.ax,v,v,v,A.l(v,v,u?B.e:B.V,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aH(!1,B.U,!0,v,A.aO(!1,v,!0,new A.I(B.bd,A.W(B.hb,B.a4,v,v,28),v),B.cL,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpV(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a6)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.bY(!0,A.w(A.a([new A.I(D.WJ,r,v),A.J(w.e?B.oo:new A.la($.OU(),new C.cG2(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.ah,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.aqZ(B.a4,B.GA,B.me,D.d6h,w.e?v:new C.cG3(w)),v)}}
C.Wp.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a7(0,B.G,B.a4.l(0.18),B.dF,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6t(n,!0,!C.dTt(w),"Fold "+(B.l.aJ(w,4)+1)+"/"+B.l.aJ(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jG,B.n6,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.k,0,B.q),B.j,B.yN,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aH(!1,B.U,!0,u,A.aO(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c5(p,A.fG(A.w(A.a([new C.aK0(o,u),A.J(n,1),A.t(u,A.H(A.a([A.W(B.Bh,B.a4.l(0.85),u,u,9),D.cGu,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.k,0,u,u),B.j,B.au,u,u,u,u,u,D.aD2,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.q(u,u,r,s,q,D.a_Q,B.p),u,u,u,B.h6,u,u,u),1),B.aM,A.j(o.b,u,1,B.ax,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ax,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ax,u,u,u,A.l(u,u,B.a4.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a6)}}
C.aK0.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gau(this.c.c.split("-")),w,w,B.ax,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rH,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.au,w,w,w,w,w,B.Wz,w,w,w)}}
C.JP.prototype={
U(){return new C.aL8()}}
C.aL8.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bA,t=A.aL(w,w,w,w,B.L9,w,w,w,new C.cFR(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.bY(!0,A.w(A.a([new A.I(D.WJ,A.H(A.a([t,A.J(new A.DJ(A.H(A.a([A.J(new A.I(B.j4,A.j(s.b+" \xb7 "+s.c,w,1,B.ax,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aH(!1,B.U,!0,w,A.aO(!1,w,!0,new A.I(B.bd,A.W(B.hb,B.a4,w,w,28),w),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cFS(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.J(new A.la($.OU(),new C.cFT(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.ah,!0,!0),w,!1,!1,w,w)}}
C.aS3.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a7(0,B.G,B.a4.l(0.35),B.eX,28),new A.a7(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dvW(new A.dp(v+"_full_"+u,x.W),!1,u,!1,w.gaMU(),v+"_full")
w=v}else w=new C.aLe(t.r,s)}else w=new C.aGe(m,s)
else w=D.dcW
return A.t(s,A.c5(n,A.fG(A.w(A.a([new C.aS4(m,l,s),A.J(w,1),new C.aS2(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.q(s,s,o,q,p,D.a_Q,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aS4.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dq(r)
r=A.hr(r)
w=new A.dB(q,r)
v=w.gJw()===0?12:w.gJw()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j1)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nZ,s,s,s),B.bu,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aNZ,B.en,D.aNd,B.en,D.aO2],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.W(B.KY,B.a4.l(0.9),s,s,12),B.en,A.J(A.j(u.c,s,s,B.ax,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.au,s,s,s,s,s,D.aDR,s,s,s)}}
C.aLe.prototype={
B(d){var w=null
return A.t(w,A.aG(A.w(A.a([A.W(B.AJ,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.f8(D.aRf,D.cVS,this.c,A.es(w,w,w,w,w,w,w,w,w,B.a4,w,w,w,w,w,new A.aF(B.a4.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yN,w,w,w,w,w,w,w,w,1/0)}}
C.aS2.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ax1(B.B7,"YouTube",s===0,r,new C.cVp(u))
s=u.ax1(B.kl,"Device",s===1,r,new C.cVq(u))
w=r?"Power off":"Power on"
v=r?D.Ze:D.aLe
return A.t(t,A.H(A.a([q,B.am,s,B.bu,A.aL(t,t,t,t,A.W(v,r?B.bT:B.fL,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dv)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.au,t,t,t,t,t,D.aDC,t,t,t)},
ax1(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bp
else w=f?B.a4:B.aD
v=f&&g?B.a4.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aH(!1,B.U,!0,u,A.aO(!1,A.m(10),!0,new A.I(B.ni,A.w(A.a([A.W(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a6),1)}}
C.aMx.prototype={
B(d){return D.ati}}
C.aGe.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.kC,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tF("Serial",u.c),q=w.tF("Model",u.d),p=w.tF("Device ID",u.e),o=w.tF("IMEI",u.r),n=w.tF("MAC",u.f),m=w.tF("OS",u.w+" "+u.x),l=w.tF("Location",u.y+", "+u.z),k=w.tF("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tF("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aM,s,B.al,r,q,p,o,n,m,l,k,j,w.tF("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bd,v,v,B.aj,!1)},
tF(d,e){var w=null
return new A.I(B.d1,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.j(e,w,w,w,w,w,w,D.cNO,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.JT.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qk.prototype={
gaMU(){var w=this.c
return w===D.adY||w===D.adZ||w===D.NW||w===D.ae_}}
C.a6t.prototype={
U(){return new C.aL9(null,null)}}
C.aL9.prototype={
a_(){this.a5()
var w=A.bw(null,B.va,null,1,null,this)
w.jV(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aWS()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cZ(t,new A.q(t,t,t,t,t,new A.ah(B.ck,B.cj,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.co(B.eN,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cT(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jG,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n6
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aMC(s,t),r,q,A.aM(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aM(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aM(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aE(B.ag,t,B.bb,B.x,s,t)}}
C.aMC.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ko(u,B.M,new C.cKH(this),B.c9,B.bJ,!0,w,w,new C.cKI(this),w)
return new C.Fh(v,w)}}
C.Fh.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uO,B.SM],x.O),B.jG)
break
case 1:w=new A.aN(A.a([B.yN,D.axS],x.O),B.mb)
break
case 2:w=new A.aN(A.a([D.azo,D.axj],x.O),B.AR)
break
case 3:w=new A.aN(A.a([B.V,B.dw],x.O),B.AW)
break
case 4:w=new A.aN(A.a([B.au,B.aL],x.O),B.pg)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a4.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.q(u,u,u,u,u,new A.ah(B.aC,B.aK,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.al4.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdq())
w.aQ$=null
w.a4()},
bq(){this.bF()
this.bD()
this.dr()}}
C.a6u.prototype={
U(){return new C.aga()}}
C.aga.prototype={
a7y(d,e){var w,v=C.boe(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.djM(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dTr(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bF5(){var w,v=this
if(v.w)return
v.q(new C.cG4(v))
w=v.e
if(w!=null)v.a7y(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.Gj()
$.pD().uQ(w,new C.cGd(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cG6(v))
w=v.e
w.toString
v.a7y(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.Zu,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fG(A.aG(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1G(n,B.tv,w)],v)
if(o.f)w.push(A.fG(A.aG(new A.aa(28,28,D.aun,n),n,n,n),B.d7,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bp,B.w,1)
q=A.W(B.L1,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eX(0,A.aH(!1,B.U,!0,n,A.aO(!1,n,!0,A.aG(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.W8,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbF4(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a6)))}v=C.boe(o.a.d)
if(v!=null)w.push(A.aM(8,A.k8(D.aPq,D.d20,new C.cG5(o),A.iM(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aE(B.ag,n,B.bb,B.x,w,n)}}
var z=a.updateTypes(["o(oa)","~()","JQ(Q)","oa(Z<@,@>)","a0(oa)","Z<o,@>(oa)","aA<~>()","JP(Q)","la<K>(Q,qk?,p?)","Wp(Q,K)","tZ(Q,qk?,p?)","Fh(Q,am,dH?)"])
C.dfM.prototype={
$1(d){return new C.JQ(this.a,null)},
$S:z+2}
C.dfL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aI(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.V],j):A.a([B.e,B.av],j),h=A.a([new A.a7(0,B.G,B.a4.l(0.22),B.eX,32)],x.V),g=A.O(m?B.ch:B.a4.l(0.18),B.w,1),f=A.m(28),e=B.a4.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aMX,B.j,n,n,new A.q(B.a4.l(0.18),n,A.O(B.a4.l(0.45),B.w,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.fh,w,A.aL(n,n,n,n,A.W(B.cY,m?B.aD:B.d7,n,n,n),n,n,n,new C.dfH(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.q(n,n,n,n,n,new A.ah(B.a9,B.aa,B.H,j,n,n),B.p),n,n,n,B.IT,n,n,n)
e=A.ec(B.cD,A.a([new C.Nd("YouTube",B.KX,m,n),new C.Nd("TikTok",B.mb,m,n),new C.Nd("Instagram",B.AR,m,n),new C.Nd("Facebook",B.AW,m,n)],v),B.cl,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cA:B.jv,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.W(B.fv,B.a4.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ch:B.aP
u=A.w(A.a([e,B.aR,A.b1(n,B.X,!0,n,!0,B.x,n,A.b2(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Rx),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.at,B.i,B.k,0,B.q)
e=A.k8(D.aN_,D.d5u,new C.dfI(d),A.iM(n,n,n,n,n,n,n,n,n,n,n,m?B.bw:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.cZ(A.c5(f,A.w(A.a([j,new A.I(B.Wm,u,n),new A.I(D.aF9,A.H(A.a([e,B.bu,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dfJ(d),n,n),B.am,A.dN(D.aR0,D.d6b,new C.dfK(d,w),A.bF(B.a4,n,n,n,B.e,n,D.W8,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.at,B.i,B.a_,0,B.q),B.aB),new A.q(n,n,g,k,h,new A.ah(B.aC,B.aK,B.H,i,n,n),B.p),B.bD),n)},
$S:88}
C.dfH.prototype={
$0(){A.a6(this.a,!1).S(null)
return null},
$S:0}
C.dfI.prototype={
$0(){C.dvU()
$.OU().sv(0,null)
A.a6(this.a,!1).S(null)},
$S:0}
C.dfJ.prototype={
$0(){A.a6(this.a,!1).S(null)
return null},
$S:0}
C.dfK.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a6(this.a,!1).S(w)
return null},
$S:0}
C.boq.prototype={
$1(d){return C.dvV(A.S(d,x.N,x.z))},
$S:z+3}
C.bor.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.boi.prototype={
$1(d){return d.c},
$S:z+0}
C.boj.prototype={
$1(d){return d.r},
$S:z+0}
C.bok.prototype={
$1(d){return d.f},
$S:z+0}
C.bol.prototype={
$1(d){return d.at},
$S:z+0}
C.bom.prototype={
$1(d){return d.c},
$S:z+0}
C.bon.prototype={
$1(d){return d.r},
$S:z+0}
C.boo.prototype={
$1(d){return d.f},
$S:z+0}
C.bop.prototype={
$1(d){return d.at},
$S:z+0}
C.boh.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bog.prototype={
$1(d){return B.b.bi(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cFX.prototype={
$0(){},
$S:0}
C.cFW.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFU.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cFV.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cFY.prototype={
$1(d){return new C.JP(this.a,null)},
$S:z+7}
C.cG1.prototype={
$0(){return A.a6(this.a,!1).ez()},
$S:0}
C.cG2.prototype={
$3(d,e,f){return new A.la($.Gh(),new C.cG0(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cG0.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Da(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a4.l(0.12)
s=A.m(12)
r=A.O(B.a4.l(0.35),B.w,1)
q=A.W(B.jG,B.a4,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Gh().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dk,B.ht,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c5(s,new A.iT(1.7777777777777777,C.dvW(new A.dp("fleet_master_"+r,x.W),!0,r,!0,j.gaMU(),"fleet_master"),k),B.aB),B.al],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vQ(0,B.x,k,B.F,k,k,k,k,!1,k,B.aj,!1,A.a([new A.ky(new A.I(B.IJ,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.ok(D.aDe,A.aBa(new A.nA(new C.cG_(i,j),J.a2(i.d),!1,!0,!0,A.tr(),k),D.cHd),k)],w))},
$S:1696}
C.cG_.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wp(v,e,J.a2(w.d),new C.cFZ(w,v),this.b,null)},
$S:z+9}
C.cFZ.prototype={
$0(){return this.a.bpk(this.b)},
$S:0}
C.cG3.prototype={
$0(){this.a.UR()
return null},
$S:0}
C.cFR.prototype={
$0(){return A.a6(this.a,!1).ez()},
$S:0}
C.cFS.prototype={
$0(){C.Zl(this.a,$.bof)
return null},
$S:0}
C.cFT.prototype={
$3(d,e,f){return A.f2(new C.cFQ(this.a,e))},
$S:z+10}
C.cFQ.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aS3(u,s.a.c,s.e,s.d,new C.cFN(s),new C.cFO(s),new C.cFP(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),B.x,v,B.F,v,B.oT,v,v,B.aj),v,v,v)},
$S:1697}
C.cFN.prototype={
$0(){var w=this.a.c
w.toString
C.Zl(w,$.bof)
return null},
$S:0}
C.cFO.prototype={
$1(d){var w=this.a
return w.q(new C.cFM(w,d))},
$S:33}
C.cFM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cFP.prototype={
$0(){var w=this.a
return w.q(new C.cFL(w))},
$S:0}
C.cFL.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cVp.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cVq.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cKH.prototype={
$3(d,e,f){return new C.Fh(this.a.c,null)},
$S:z+11}
C.cKI.prototype={
$3(d,e,f){if(f==null)return e
return new A.aE(B.ag,null,B.bb,B.x,A.a([new C.Fh(this.a.c,null),D.atw],x.p),null)},
$C:"$3",
$R:3,
$S:209}
C.cG4.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cGd.prototype={
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
w.a7y(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hh(v,"load",new C.cGa(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cGb(w),!1,u)
A.bN(B.kf,new C.cGc(w),x.H)
w=w.e
w.toString
return w},
$S:532}
C.cGa.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cG9(w))},
$S:46}
C.cG9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cG8(w))},
$S:46}
C.cG8.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cGc.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cG7(w))},
$S:12}
C.cG7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cG6.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cG5.prototype={
$0(){var w,v=C.boe(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.SB(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dcd.prototype={
$1(d){var w,v,u,t,s=new A.EQ([],[]).IL(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1698};(function aliases(){var w=C.al4.prototype
w.aWS=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag9.prototype,"gaxb","bmO",1)
w(u,"gbno","bnp",1)
w(u,"gbpV","bpW",6)
w(C.aga.prototype,"gbF4","bF5",1)
v(C,"ec6","dvT",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yu,[C.dfM,C.dfL,C.boq,C.bor,C.boi,C.boj,C.bok,C.bol,C.bom,C.bon,C.boo,C.bop,C.boh,C.bog,C.cFY,C.cG2,C.cG0,C.cFT,C.cFO,C.cKH,C.cKI,C.cGd,C.cGa,C.cGb,C.dcd])
v(A.a_M,[C.dfH,C.dfI,C.dfJ,C.dfK,C.cFX,C.cFW,C.cFU,C.cFV,C.cG1,C.cFZ,C.cG3,C.cFR,C.cFS,C.cFN,C.cFM,C.cFP,C.cFL,C.cVp,C.cVq,C.cG4,C.cG9,C.cG8,C.cGc,C.cG7,C.cG6,C.cG5])
v(A.av,[C.Nd,C.Wp,C.aK0,C.aS3,C.aS4,C.aLe,C.aS2,C.aMx,C.aGe,C.aMC,C.Fh])
v(A.am,[C.oa,C.qk])
v(A.ae,[C.JQ,C.JP,C.a6t,C.a6u])
v(A.af,[C.ag9,C.aL8,C.al4,C.aga])
v(A.a_N,[C.cG_,C.cFQ])
u(C.JT,A.aH9)
u(C.aL9,C.al4)
w(C.al4,A.e_)})()
A.dzn(b.typeUniverse,JSON.parse('{"JQ":{"ae":[],"p":[]},"Wp":{"av":[],"p":[]},"JP":{"ae":[],"p":[]},"Nd":{"av":[],"p":[]},"ag9":{"af":["JQ"]},"aK0":{"av":[],"p":[]},"aL8":{"af":["JP"]},"aS3":{"av":[],"p":[]},"aS4":{"av":[],"p":[]},"aLe":{"av":[],"p":[]},"aS2":{"av":[],"p":[]},"aMx":{"av":[],"p":[]},"aGe":{"av":[],"p":[]},"a6t":{"ae":[],"p":[]},"Fh":{"av":[],"p":[]},"aL9":{"af":["a6t"]},"aMC":{"av":[],"p":[]},"a6u":{"ae":[],"p":[]},"aga":{"af":["a6u"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a3<a7>"),O:w("a3<x>"),e:w("a3<oa>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<oa>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o5"),_:w("D7"),k:w("oa"),N:w("o"),Y:w("bk<a9>"),W:w("dp<o>"),J:w("la<K>"),j:w("la<qk?>"),E:w("xo<cL>"),q:w("Xf"),z:w("@"),Q:w("am?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Ze=new A.N(983224,"MaterialIcons",!1)
D.aPy=new A.ab(D.Ze,48,B.bp,null,null,null)
D.cNs=new A.R(!0,B.cA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUP=new A.D("Powered off",null,D.cNs,null,null,null,null,null,null,null,null,null)
D.bKy=w([D.aPy,B.Q,D.cUP],x.p)
D.aAD=new A.eE(B.aj,B.i,B.a_,B.o,null,B.q,null,0,D.bKy,null)
D.ati=new A.di(B.M,null,null,D.aAD,null)
D.cGT=new A.aa(18,18,B.St,null)
D.atw=new A.di(B.M,null,null,D.cGT,null)
D.aun=new A.hc(2,null,null,null,null,B.a8,null,null,null,null)
D.axj=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axS=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azo=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD2=new A.V(0,3,0,3)
D.aDe=new A.V(10,0,10,88)
D.aDC=new A.V(12,6,12,10)
D.aDR=new A.V(14,8,14,6)
D.W8=new A.V(18,12,18,12)
D.aF9=new A.V(20,8,20,20)
D.WJ=new A.V(8,6,15,8)
D.aLe=new A.N(983222,"MaterialIcons",!1)
D.aMX=new A.ab(B.jG,26,B.a4,null,null,null)
D.aN_=new A.ab(B.Yq,18,null,null,null,null)
D.aNd=new A.ab(B.rH,14,B.a8,null,null,null)
D.aLy=new A.N(983420,"MaterialIcons",!1)
D.aNZ=new A.ab(D.aLy,14,B.a8,null,null,null)
D.aJy=new A.N(62895,"MaterialIcons",!1)
D.aO2=new A.ab(D.aJy,14,B.a8,null,null,null)
D.aPq=new A.ab(B.rz,16,B.a8,null,null,null)
D.aR0=new A.ab(B.iI,20,null,null,null,null)
D.aRf=new A.ab(B.hb,16,null,null,null,null)
D.bOd=w([B.aL,B.V],x.O)
D.a_Q=new A.ah(B.aC,B.aK,B.H,D.bOd,null,null)
D.cAw=new A.aN("NGMY OS","14.2.1")
D.czj=new A.aN("VirtualDroid","13.8.4")
D.czi=new A.aN("NGMY OS","15.0.0")
D.cA4=new A.aN("VirtualDroid","14.1.2")
D.czg=new A.aN("NGMY Tab OS","12.9.7")
D.cze=new A.aN("NGMY OS","13.5.3")
D.cz3=new A.aN("VirtualDroid","15.2.0")
D.czG=new A.aN("NGMY OS","14.8.1")
D.cAa=new A.aN("NGMY Tab OS","13.2.4")
D.cAG=new A.aN("VirtualDroid","12.6.9")
D.cyX=new A.aN("NGMY OS","16.0.1")
D.cyM=new A.aN("VirtualDroid","14.9.0")
D.cAn=new A.aN("NGMY Tab OS","14.0.3")
D.czs=new A.aN("NGMY OS","13.1.8")
D.cyW=new A.aN("VirtualDroid","13.4.5")
D.czd=new A.aN("NGMY OS","15.3.2")
D.cAb=new A.aN("NGMY Tab OS","12.4.1")
D.cAq=new A.aN("VirtualDroid","16.1.0")
D.czF=new A.aN("NGMY OS","14.4.6")
D.cAx=new A.aN("VirtualDroid","15.0.8")
D.bNq=w([D.cAw,D.czj,D.czi,D.cA4,D.czg,D.cze,D.cz3,D.czG,D.cAa,D.cAG,D.cyX,D.cyM,D.cAn,D.czs,D.cyW,D.czd,D.cAb,D.cAq,D.czF,D.cAx],A.b3("a3<+(o,o)>"))
D.cCM=new A.eM(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCk=new A.eM(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCf=new A.eM(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCo=new A.eM(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCb=new A.eM(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCq=new A.eM(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCO=new A.eM(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCc=new A.eM(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCj=new A.eM(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCs=new A.eM(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCa=new A.eM(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCG=new A.eM(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCD=new A.eM(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCi=new A.eM(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCA=new A.eM(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCz=new A.eM(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cC9=new A.eM(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCn=new A.eM(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCx=new A.eM(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCC=new A.eM(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6w=w([D.cCM,D.cCk,D.cCf,D.cCo,D.cCb,D.cCq,D.cCO,D.cCc,D.cCj,D.cCs,D.cCa,D.cCG,D.cCD,D.cCi,D.cCA,D.cCz,D.cC9,D.cCn,D.cCx,D.cCC],A.b3("a3<+(o,o,a9,a9,o)>"))
D.bWD=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adY=new C.JT(0,"youtube")
D.adZ=new C.JT(1,"tiktok")
D.NW=new C.JT(2,"instagram")
D.ae_=new C.JT(3,"facebook")
D.cs5=new C.JT(4,"other")
D.cGu=new A.aa(3,null,null,null)
D.cHd=new A.im(4,10,8,0.52,null)
D.cW3=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKA=new A.aY(D.cW3,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cNO=new A.R(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVS=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d20=new A.D("Open in YouTube",null,B.iS,null,null,null,null,null,null,null,null,null)
D.d5u=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d6b=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d6h=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dcW=new C.aMx(null)})();(function staticFields(){$.dvS=20
$.ax7=null
$.bof=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eh3","Gh",()=>A.aCZ(0))
w($,"eh4","OU",()=>A.aCZ(null))})()};
(a=>{a["f4jfVQhP8jCYtfFJlqxWtL2zPrg="]=a.current})($__dart_deferred_initializers__);