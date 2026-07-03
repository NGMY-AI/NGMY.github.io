((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dK0(d,e){A.a9(d,!1).cP(A.en(new C.cT9(e),!0,null,x.H))},
TE(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$TE=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.KC()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a7(new A.aH(n,B.a_,B.U),t)
w=3
return A.b(A.dh(B.C,new C.cT8(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$TE)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dsr(r)
if(q==null){d.F(x.q).f.O(D.btQ)
w=1
break}w=4
return A.b(A.bL(B.fu,null,x.H),$async$TE)
case 4:if(d.e==null){w=1
break}n=B.p.aE(e,1,999)
$.d6p=n
p=C.dsl(n)
n=$.D6()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.cWO(q)
d.F(x.q).f.O(A.bg(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$TE,v)},
d6s(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mr(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Ge(d){return C.dsu(d)},
dsu(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ge=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Ge)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a1(e)
a0=A.aF(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aG(0,a0,null)
w=x.a.b(r)&&J.cq(r)?10:11
break
case 10:k=J.hr(r,x.f)
k=A.dQ(k,new C.b9B(),k.$ti.j("M.E"),x.k)
j=A.S(k).j("ac<M.E>")
i=A.E(new A.ac(k,new C.b9C(),j),j.j("M.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.d6u(q)
w=12
return A.b(C.Gd(a3,p),$async$Ge)
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
case 9:case 5:o=A.aF(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.v.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.d6s(A.N(n,x.N,x.z))
l=C.d6u(A.a([m],x.e))
w=21
return A.b(C.Gd(a3,l),$async$Ge)
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
case 18:case 14:q=C.dss()
w=22
return A.b(C.Gd(a3,q),$async$Ge)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Ge,v)},
d6u(d){var w=A.T(d).j("A<1,m>"),v=new A.A(d,new C.b9t(),w).eE(0),u=new A.A(d,new C.b9u(),w).eE(0),t=new A.A(d,new C.b9v(),w).eE(0),s=new A.A(d,new C.b9w(),w).eE(0),r=A.bf(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.cWP(null,q,u,t,v,s));++q}return r},
anW(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$anW=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ge(d),$async$anW)
case 3:t=f
s=x.N
r=J.cd(t)
q=r.d7(t,new C.b9x(),s).eE(0)
p=r.d7(t,new C.b9y(),s).eE(0)
o=r.d7(t,new C.b9z(),s).eE(0)
n=r.d7(t,new C.b9A(),s).eE(0)
m=C.cWP(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Gd(d,t),$async$anW)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$anW,v)},
Gd(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Gd=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Gd)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.b9s(),x.P)
s=A.E(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.ak(s,null)),$async$Gd)
case 3:return A.f(null,v)}})
return A.h($async$Gd,v)},
dss(){var w,v=x.N,u=A.b3(v),t=A.b3(v),s=A.b3(v),r=A.b3(v),q=J.dY(20,x.k)
for(w=0;w<20;++w)q[w]=C.cWP(w,w,t,s,u,r)
return q},
cWP(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jx(),h=d==null,g=D.Rm[B.p.ap(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Rm[B.p.ap(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.A(p,new C.b9r(),A.T(p).j("A<1,m>")).fg(0)
u="VND-"+B.a.aj(n,0,4)+"-"+B.a.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.fg(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bF(B.p.l2(i.bx(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.ap(e,20)
k=D.aP6[w]
j=D.aJW[w]
return new C.mr("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bF(B.p.q(e+1),2,"0"),u,k,C.dst(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.K(Date.now(),0,!1).a0().W())},
dst(d,e){var w,v=J.dY(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bF(B.p.l2(d.bx(256),16),2,"0")
return B.d.fg(v)},
cT9:function cT9(d){this.a=d},
cT8:function cT8(d,e){this.a=d
this.b=e},
cT4:function cT4(d){this.a=d},
cT5:function cT5(d){this.a=d},
cT6:function cT6(d){this.a=d},
cT7:function cT7(d,e){this.a=d
this.b=e},
J9:function J9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mr:function mr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b9B:function b9B(){},
b9C:function b9C(){},
b9t:function b9t(){},
b9u:function b9u(){},
b9v:function b9v(){},
b9w:function b9w(){},
b9x:function b9x(){},
b9y:function b9y(){},
b9z:function b9z(){},
b9A:function b9A(){},
b9s:function b9s(){},
b9r:function b9r(){},
Gc:function Gc(d,e){this.c=d
this.a=e},
a8Y:function a8Y(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cnR:function cnR(){},
cnQ:function cnQ(d,e){this.a=d
this.b=e},
cnO:function cnO(d){this.a=d},
cnP:function cnP(d,e){this.a=d
this.b=e},
cnS:function cnS(d){this.a=d},
cnW:function cnW(d){this.a=d},
cnX:function cnX(d,e){this.a=d
this.b=e},
cnV:function cnV(d,e,f){this.a=d
this.b=e
this.c=f},
cnU:function cnU(d,e){this.a=d
this.b=e},
cnT:function cnT(d,e){this.a=d
this.b=e},
cnY:function cnY(d){this.a=d},
Ra:function Ra(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
azt:function azt(d,e){this.c=d
this.a=e},
Gb:function Gb(d,e){this.c=d
this.a=e},
aAr:function aAr(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cnL:function cnL(d){this.a=d},
cnM:function cnM(d){this.a=d},
cnN:function cnN(d){this.a=d},
cnK:function cnK(d,e){this.a=d
this.b=e},
cnH:function cnH(d){this.a=d},
cnI:function cnI(d){this.a=d},
cnG:function cnG(d,e){this.a=d
this.b=e},
cnJ:function cnJ(d){this.a=d},
cnF:function cnF(d){this.a=d},
aGR:function aGR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aGS:function aGS(d,e,f){this.c=d
this.d=e
this.a=f},
aAx:function aAx(d,e){this.c=d
this.a=e},
aGQ:function aGQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
czz:function czz(d){this.a=d},
czA:function czA(d){this.a=d},
aBD:function aBD(d){this.a=d},
avX:function avX(d,e){this.c=d
this.a=e},
dsr(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dsq(v)
if(u!=null)return new C.op(w,C.cWN(u,!1),D.Yh,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dsp(v)
if(t!=null)return new C.op(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Yi,"TikTok",q)
s=C.dso(w,v)
if(s!=null)return s
r=C.dsn(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.op(w,w,D.bf1,"Video",q)
return q},
dso(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.op(d,"https://www.instagram.com/reel/"+w+u,D.ET,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.op(d,"https://www.instagram.com/p/"+w+u,D.ET,t,null)}return null},
dsn(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.op(d,"https://www.facebook.com/plugins/video.php?href="+A.eA(2,d,B.aJ,!1)+"&show_text=false&width=734",D.Yj,"Facebook",null)},
dsq(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dsp(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
Gf:function Gf(d,e){this.a=d
this.b=e},
op:function op(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a08:function a08(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAs:function aAs(d,e){var _=this
_.d=$
_.cV$=d
_.aZ$=e
_.c=_.a=null},
aBH:function aBH(d,e){this.c=d
this.a=e},
cqq:function cqq(d){this.a=d},
cqr:function cqr(d){this.a=d},
BW:function BW(d,e){this.c=d
this.a=e},
ads:function ads(){},
d6t(d,e,f,g,h,i){return new C.a09(i,f,h,e,g,d)},
dIO(d){var w=window
w.toString
A.hc(w,"message",new C.cPn(d),!1,x._)},
a09:function a09(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
a8Z:function a8Z(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cnZ:function cnZ(d){this.a=d},
co6:function co6(d){this.a=d},
co4:function co4(d){this.a=d},
co2:function co2(d){this.a=d},
co3:function co3(d){this.a=d},
co0:function co0(d){this.a=d},
co5:function co5(d){this.a=d},
co1:function co1(d){this.a=d},
co_:function co_(d){this.a=d},
cPn:function cPn(d){this.a=d},
d6n(){var w,v,u
try{v=A.xD()
w=v.gpI(v)
if(J.a3(w)!==0&&!J.t(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
cWN(d,e){var w=C.d6n(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eA(2,w,B.aJ,!1))
v.push("widget_referrer="+A.eA(2,w,B.aJ,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
cWM(d){var w=A.ap(y.c,!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
d6o(d){var w=A.bt(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bt(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dsk(d,e,f){var w,v,u=C.cWM(d)
if(u!=null){if(f){w=C.d6n()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.d6o(C.cWN(u,e))}return C.d6o(d)},
dsl(d){if(d<=4)return 0
return B.p.aY(d-1,4)*4},
dsm(d){var w
if($.KC().a==null)return!1
w=$.D6().a
return d>=w&&d<w+4},
d6r(){var w=$.anV
if(w!=null)w.a9(0)
$.anV=null
$.D6().sv(0,0)},
d6q(){var w,v,u,t=$.KC()
if(t.a==null)return
w=$.anV
if(w!=null)w.a9(0)
v=$.d6p
if(v<=4){t=t.a
t.toString
C.cWO(t)
return}w=$.D6()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.cWO(t)},
cWO(d){var w=$.anV
if(w!=null)w.a9(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.anV=A.dk(A.d3(0,0,0,0,0,w),C.dIZ())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.J9.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.N.l(0.25),B.o,1),r=A.a4(this.d,B.N,w,w,14)
return A.u(w,A.G(A.a([r,B.eJ,A.j(this.c,w,w,w,w,A.l(w,w,v?B.V:B.dh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.j,w,B.e,B.P,0,w,w),B.h,w,w,new A.v(u,w,s,t,w,w,B.k),w,w,w,B.fw,w,w,w)}}
C.mr.prototype={
af(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Gc.prototype={
U(){return new C.a8Y(A.a([],x.e))},
gfU(){return this.c}}
C.a8Y.prototype={
a_(){var w=this
w.a5()
$.D6().ai(0,w.gaqe())
C.dIO(w.gbba())
w.Ub()},
baD(){if(this.c!=null)this.p(new C.cnR())},
bbb(){C.d6q()},
n(){$.D6().V(0,this.gaqe())
C.d6r()
$.KC().sv(0,null)
this.a2()},
Ub(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Ub=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ge(t.a.c),$async$Ub)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cnQ(t,s))
$.b9q=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Ub,v)},
Qy(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Qy=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cnO(t))
w=3
return A.b(C.anW(t.a.c),$async$Qy)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cnP(t,s))
$.b9q=J.a3(t.d)
t.c.F(x.q).f.O(A.bg(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Qy,v)},
bd3(d){var w=this.c
w.toString
A.a9(w,!1).cP(A.en(new C.cnS(d),!1,null,x.H))},
bdy(){var w=this.c
w.toString
return C.TE(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.W(d).ax.a===B.S,t=u?B.dD:B.cS,s=A.aS(v,v,v,v,B.Dg,v,v,v,new C.cnW(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.Au(A.G(A.a([A.I(new A.O(B.ia,A.j(r,1,B.ae,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aW(!1,B.M,!0,v,A.b1(!1,v,!0,new A.O(B.aG,A.a4(B.f8,B.N,v,v,28),v),B.bN,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbdx(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a1)],q),B.j,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.j,v,B.e,B.f,0,v,v)
s=A.cS(!0,A.C(A.a([new A.O(D.Mj,r,v),A.I(w.e?B.kA:new A.i6($.KC(),new C.cnX(w,u),v,v,x.j),1)],q),B.j,B.e,B.f,0,B.l),!1,B.a4,!0,!0)
return A.cn(v,t,s,v,!1,!1,A.aiR(B.N,B.zl,B.on,D.bI1,w.e?v:new C.cnY(w)),v)}}
C.Ra.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.N.l(0.18),B.cl,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a08(n,!0,!C.dsm(w),"Fold "+(B.p.aY(w,4)+1)+"/"+B.p.aY(v.e+4-1,4),u)
n=w}else n=A.u(u,A.C(A.a([A.a4(B.hD,B.kG,u,u,22),B.al,A.j("YouTube",u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.j,B.as,B.f,0,B.l),B.h,B.ux,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aW(!1,B.M,!0,u,A.b1(!1,t,!0,A.C(A.a([A.I(A.u(u,A.cQ(p,A.hF(A.C(A.a([new C.azt(o,u),A.I(n,1),A.u(u,A.G(A.a([A.a4(B.re,B.N.l(0.85),u,u,9),D.bqb,A.j("Tap",u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.j,u,B.as,B.f,0,u,u),B.h,B.a9,u,u,u,u,u,D.ak1,u,u,u)],w),B.j,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,u,u,new A.v(u,u,r,s,q,D.Ql,B.k),u,u,u,B.eD,u,u,u),1),B.al,A.j(o.b,1,B.ae,u,u,A.l(u,u,A.W(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,1,B.ae,u,u,A.l(u,u,A.W(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,1,B.ae,u,u,A.l(u,u,B.N.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.j,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a1)}}
C.azt.prototype={
C(d){var w=null
return A.u(w,A.G(A.a([A.I(A.j(B.d.gar(this.c.c.split("-")),w,B.ae,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a4(B.ok,B.c.l(0.45),w,w,7)],x.p),B.j,w,B.e,B.f,0,w,w),B.h,B.a9,w,w,w,w,w,B.M8,w,w,w)}}
C.Gb.prototype={
U(){return new C.aAr()}}
C.aAr.prototype={
C(d){var w=null,v=A.W(d).ax.a===B.S,u=v?B.dD:B.cS,t=A.aS(w,w,w,w,B.Dg,w,w,w,new C.cnL(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cn(w,u,A.cS(!0,A.C(A.a([new A.O(D.Mj,A.G(A.a([t,A.I(new A.Au(A.G(A.a([A.I(new A.O(B.ia,A.j(s.b+" \xb7 "+s.c,1,B.ae,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aW(!1,B.M,!0,w,A.b1(!1,w,!0,new A.O(B.aG,A.a4(B.f8,B.N,w,w,28),w),B.bN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cnM(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a1)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w),w),A.I(new A.i6($.KC(),new C.cnN(this),w,w,x.j),1)],r),B.j,B.e,B.f,0,B.l),!1,B.a4,!0,!0),w,!1,!1,w,w)}}
C.aGR.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.N.l(0.35),B.el,28),new A.ag(0,B.w,B.q.l(0.45),B.ct,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.d6t(new A.dA(v+"_full_"+u,x.W),!1,u,!1,w.gaEM(),v+"_full")
w=v}else w=new C.aAx(t.r,s)}else w=new C.avX(m,s)
else w=D.bUZ
return A.u(s,A.cQ(n,A.hF(A.C(A.a([new C.aGS(m,l,s),A.I(w,1),new C.aGQ(t.f,l,t.w,t.x,s)],x.p),B.j,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,s,s,new A.v(s,s,o,q,p,D.Ql,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aGS.prototype={
C(d){var w,v,u,t,s=null,r=new A.K(Date.now(),0,!1),q=A.dI(r)
r=A.hl(r)
w=new A.da(q,r)
v=w.gFV()===0?12:w.gFV()
r=B.a.bF(B.p.q(r),2,"0")
q=(q<12?B.ez:B.h4)===B.ez?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,B.n_,s,s,s),B.b8,A.j(u.b,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.be,D.atV,B.e1,D.at9,B.e1,D.atZ],t),B.j,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.G(A.a([A.a4(B.Da,B.N.l(0.9),s,s,12),B.e1,A.I(A.j(u.c,s,B.ae,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.j,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.C(q,B.j,B.e,B.f,0,B.l),B.h,B.a9,s,s,s,s,s,D.akK,s,s,s)}}
C.aAx.prototype={
C(d){var w=null
return A.u(w,A.aV(A.C(A.a([A.a4(B.w5,B.c.l(0.35),w,w,40),B.E,A.j("No video yet",w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.ew(D.ax9,D.bFX,this.c,A.ex(w,w,w,w,w,w,w,w,w,B.N,w,w,w,w,w,new A.aM(B.N.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.j,B.e,B.P,0,B.l),w,w,w),B.h,B.ux,w,w,w,w,w,w,w,w,1/0)}}
C.aGQ.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aq7(B.OR,"YouTube",s===0,r,new C.czz(u))
s=u.aq7(B.k0,"Device",s===1,r,new C.czA(u))
w=r?"Power off":"Power on"
v=r?D.OS:D.are
return A.u(t,A.G(A.a([q,B.Z,s,B.b8,A.aS(t,t,t,t,A.a4(v,r?B.aW:B.dx,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.j,t,B.e,B.f,0,t,t),B.h,B.a9,t,t,t,t,t,D.akw,t,t,t)},
aq7(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.N:B.a8
v=f&&g?B.N.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aW(!1,B.M,!0,u,A.b1(!1,A.n(10),!0,new A.O(B.kQ,A.C(A.a([A.a4(d,w,s,s,18),A.j(e,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.j,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aBD.prototype={
C(d){return D.abd}}
C.avX.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,B.iI,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ql("Serial",u.c),q=w.ql("Model",u.d),p=w.ql("Device ID",u.e),o=w.ql("IMEI",u.r),n=w.ql("MAC",u.f),m=w.ql("OS",u.w+" "+u.x),l=w.ql("Location",u.y+", "+u.z),k=w.ql("Coordinates",B.i.a1(u.Q,4)+", "+B.i.a1(u.as,4)),j=w.ql("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.al,s,B.Q,r,q,p,o,n,m,l,k,j,w.ql("Provisioned",u.length>=10?B.a.aj(u,0,10):u)],x.p),v,B.aG,v,v,B.X,!1)},
ql(d,e){var w=null
return new A.O(B.c0,A.C(A.a([A.j(d.toUpperCase(),w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c6,A.j(e,w,w,w,w,D.bwU,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Gf.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.op.prototype={
gaEM(){var w=this.c
return w===D.Yh||w===D.Yi||w===D.ET||w===D.Yj}}
C.a08.prototype={
U(){return new C.aAs(null,null)}}
C.aAs.prototype={
a_(){this.a5()
var w=A.bH(null,B.qy,null,1,null,this)
w.me(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aOa()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.em(t,new A.v(t,t,t,t,t,new A.ar(B.dB,B.ch,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.bK),q=x.Y,p=u.d
p===$&&A.c()
p=A.cG(B.hw,p,t)
w=B.c.l(0.92)
q=A.aV(new A.dL(new A.bd(p,new A.bu(0.72,1,q),q.j("bd<br.T>")),!1,A.a4(B.hD,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kG
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aBH(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.v(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aY(B.a7,t,B.b1,B.m,s,t)}}
C.aBH.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kj(u,new C.cqq(this),B.bp,!0,w,w,new C.cqr(this),w)
return new C.BW(v,w)}}
C.BW.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qg,B.J4],x.O),B.hD)
break
case 1:w=new A.aI(A.a([B.ux,D.aeL],x.O),B.j5)
break
case 2:w=new A.aI(A.a([D.agn,D.aeh],x.O),B.wa)
break
case 3:w=new A.aI(A.a([B.W,B.di],x.O),B.wd)
break
case 4:w=new A.aI(A.a([B.a9,B.ai],x.O),B.mi)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a4(w.b,B.N.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.v(u,u,u,u,u,new A.ar(B.ak,B.au,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.ads.prototype={
n(){var w=this,v=w.aZ$
if(v!=null)v.V(0,w.gdM())
w.aZ$=null
w.a2()},
bq(){this.bP()
this.bJ()
this.dN()}}
C.a09.prototype={
U(){return new C.a8Z()}}
C.a8Z.prototype={
bsZ(d,e){var w=C.cWM(d)
if(w!=null)return C.cWN(w,e)
return d},
a2m(d,e){var w,v=this,u=C.cWM(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bsZ(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dsk(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bqW(){var w,v=this
if(v.w)return
v.p(new C.cnZ(v))
w=v.e
if(w!=null)v.a2m(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.KD()
$.p4().uv(w,new C.co6(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.co_(v))
w=v.e
w.toString
v.a2m(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a4(B.P4,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.A,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hF(A.aV(new A.O(new A.V(12,12,12,12),A.C(w,B.j,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.ajt(n,B.t_,w)],v)
if(o.f)w.push(A.hF(A.aV(new A.ao(28,28,D.abG,n),n,n,n),B.c4,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b_,B.o,1)
q=A.a4(B.P6,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f6(0,A.aW(!1,B.M,!0,n,A.b1(!1,n,!0,A.aV(A.u(n,A.G(A.a([q,B.Z,A.j("Tap for sound",n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.j,n,B.e,B.P,0,n,n),B.h,n,n,new A.v(t,n,r,s,n,n,B.k),n,n,n,D.LJ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbqV(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aY(B.a7,n,B.b1,B.m,w,n)}}
var z=a.updateTypes(["m(mr)","~()","Gc(R)","mr(Y<@,@>)","a0(mr)","Y<m,@>(mr)","ax<~>()","Gb(R)","i6<Q>(R,op?,p?)","Ra(R,Q)","tN(R,op?,p?)","BW(R,ak,dj?)"])
C.cT9.prototype={
$1(d){return new C.Gc(this.a,null)},
$S:z+2}
C.cT8.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.W(d).ax.a===B.S,l=A.az(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cp,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.N.l(0.22),B.el,32)],x.V),g=A.U(m?B.bn:B.N.l(0.18),B.o,1),f=A.n(28),e=B.N.l(m?0.35:0.14)
j=A.a([e,B.T.l(m?0.18:0.08)],j)
e=A.u(n,D.asP,B.h,n,n,new A.v(B.N.l(0.18),n,A.U(B.N.l(0.45),B.o,1),n,n,n,B.ag),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.C(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,A.l(n,n,m?B.V:B.aI,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.fi,w,A.aS(n,n,n,n,A.a4(B.cC,m?B.a8:B.c4,n,n,n),n,n,n,new C.cT4(d),n,n,n,n,n,n)],v),B.j,n,B.e,B.f,0,n,n),B.h,n,n,new A.v(n,n,n,n,n,new A.ar(B.a0,B.a3,B.y,j,n,n),B.k),n,n,n,B.LT,n,n,n)
e=A.eO(B.c8,A.a([new C.J9("YouTube",B.D9,m,n),new C.J9("TikTok",B.j5,m,n),new C.J9("Instagram",B.wa,m,n),new C.J9("Facebook",B.wd,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bA:B.fq,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.cS
r=A.a4(B.k1,B.N.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bn:B.b0
u=A.C(A.a([e,B.at,A.av(n,B.F,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.I),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aM(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.HW),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.J,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.B,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.G,n,B.L,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.iV(D.asT,D.bLI,new C.cT5(d),A.jY(n,n,n,n,n,n,n,n,n,n,n,m?B.aC:B.aI,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.O(new A.V(12,0,12,12+l.f.d),A.em(A.cQ(f,A.C(A.a([j,new A.O(D.alM,u,n),new A.O(D.alU,A.G(A.a([e,B.b8,A.bP(!1,A.j("Cancel",n,n,n,n,A.l(n,n,m?B.V:B.Y,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cT6(d),n,n),B.Z,A.dM(D.awU,D.bM2,new C.cT7(d,w),A.bA(B.N,n,n,n,B.c,n,D.LJ,n,new A.bD(A.n(14),B.I),n,n,n))],v),B.j,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.av),new A.v(n,n,g,k,h,new A.ar(B.ak,B.au,B.y,i,n,n),B.k),B.bK),n)},
$S:61}
C.cT4.prototype={
$0(){A.a9(this.a,!1).T(null)
return null},
$S:0}
C.cT5.prototype={
$0(){C.d6r()
$.KC().sv(0,null)
A.a9(this.a,!1).T(null)},
$S:0}
C.cT6.prototype={
$0(){A.a9(this.a,!1).T(null)
return null},
$S:0}
C.cT7.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a9(this.a,!1).T(w)
return null},
$S:0}
C.b9B.prototype={
$1(d){return C.d6s(A.N(d,x.N,x.z))},
$S:z+3}
C.b9C.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b9t.prototype={
$1(d){return d.c},
$S:z+0}
C.b9u.prototype={
$1(d){return d.r},
$S:z+0}
C.b9v.prototype={
$1(d){return d.f},
$S:z+0}
C.b9w.prototype={
$1(d){return d.at},
$S:z+0}
C.b9x.prototype={
$1(d){return d.c},
$S:z+0}
C.b9y.prototype={
$1(d){return d.r},
$S:z+0}
C.b9z.prototype={
$1(d){return d.f},
$S:z+0}
C.b9A.prototype={
$1(d){return d.at},
$S:z+0}
C.b9s.prototype={
$1(d){return d.af()},
$S:z+5}
C.b9r.prototype={
$1(d){return B.a.bF(B.p.l2(d,16),2,"0").toUpperCase()},
$S:72}
C.cnR.prototype={
$0(){},
$S:0}
C.cnQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cnO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cnP.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cnS.prototype={
$1(d){return new C.Gb(this.a,null)},
$S:z+7}
C.cnW.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cnX.prototype={
$3(d,e,f){return new A.i6($.D6(),new C.cnV(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cnV.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.zY(d,k,x.Q)
w=w==null?k:w.gkj()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.N.l(0.12)
s=A.n(12)
r=A.U(B.N.l(0.35),B.o,1)
q=A.a4(B.hD,B.N,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.D6().a
m=B.i.aE(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Z,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.j,k,B.e,B.f,0,k,k),B.h,k,k,new A.v(t,k,r,s,k,k,B.k),k,k,B.cB,B.eC,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cQ(s,new A.ip(1.7777777777777777,C.d6t(new A.dA("fleet_master_"+r,x.W),!0,r,!0,j.gaEM(),"fleet_master"),k),B.av),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,A.l(k,k,A.W(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.z6(0,B.m,k,B.r,k,k,k,k,!1,k,B.X,!1,A.a([new A.jV(new A.O(B.Bf,A.C(u,B.t,B.e,B.f,0,B.l),k),k),new A.oA(D.akb,A.arq(new A.nx(new C.cnU(i,j),J.a3(i.d),!1,!0,!0,A.vq(),k),D.bqR),k)],w))},
$S:1519}
C.cnU.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Ra(v,e,J.a3(w.d),new C.cnT(w,v),this.b,null)},
$S:z+9}
C.cnT.prototype={
$0(){return this.a.bd3(this.b)},
$S:0}
C.cnY.prototype={
$0(){this.a.Qy()
return null},
$S:0}
C.cnL.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cnM.prototype={
$0(){C.TE(this.a,$.b9q)
return null},
$S:0}
C.cnN.prototype={
$3(d,e,f){return A.fD(new C.cnK(this.a,e))},
$S:z+10}
C.cnK.prototype={
$2(d,e){var w,v=null,u=B.i.aE(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.cp(A.C(A.a([A.j(r,v,v,v,v,A.l(v,v,A.W(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.at,new C.aGR(u,s.a.c,s.e,s.d,new C.cnH(s),new C.cnI(s),new C.cnJ(s),t,v)],x.p),B.j,B.e,B.f,0,B.l),v,B.r,v,B.vt,v,v,B.X),v,v,v)},
$S:1520}
C.cnH.prototype={
$0(){var w=this.a.c
w.toString
C.TE(w,$.b9q)
return null},
$S:0}
C.cnI.prototype={
$1(d){var w=this.a
return w.p(new C.cnG(w,d))},
$S:35}
C.cnG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cnJ.prototype={
$0(){var w=this.a
return w.p(new C.cnF(w))},
$S:0}
C.cnF.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.czz.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.czA.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cqq.prototype={
$3(d,e,f){return new C.BW(this.a.c,null)},
$S:z+11}
C.cqr.prototype={
$3(d,e,f){if(f==null)return e
return new A.aY(B.a7,null,B.b1,B.m,A.a([new C.BW(this.a.c,null),D.ab6],x.p),null)},
$C:"$3",
$R:3,
$S:455}
C.cnZ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.co6.prototype={
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
w.a2m(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hc(v,"load",new C.co4(w),!1,u)
v=w.e
v.toString
A.hc(v,"error",new C.co5(w),!1,u)
w=w.e
w.toString
return w},
$S:1521}
C.co4.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.co2(w))
A.bL(B.z,new C.co3(w),x.H)}},
$S:39}
C.co2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.co3.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.co0(w))},
$S:12}
C.co0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.co5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.co1(w))},
$S:39}
C.co1.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.co_.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cPn.prototype={
$1(d){var w,v,u,t,s=new A.Bw([],[]).Fc(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.t(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.t(J.r(w,"event"),"onStateChange")&&J.t(v,0)){this.a.$0()
return}if(J.t(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.t(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1522};(function aliases(){var w=C.ads.prototype
w.aOa=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a8Y.prototype,"gaqe","baD",1)
w(u,"gbba","bbb",1)
w(u,"gbdx","bdy",6)
w(C.a8Z.prototype,"gbqV","bqW",1)
v(C,"dIZ","d6q",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vJ,[C.cT9,C.cT8,C.b9B,C.b9C,C.b9t,C.b9u,C.b9v,C.b9w,C.b9x,C.b9y,C.b9z,C.b9A,C.b9s,C.b9r,C.cnS,C.cnX,C.cnV,C.cnN,C.cnI,C.cqq,C.cqr,C.co6,C.co4,C.co5,C.cPn])
v(A.Va,[C.cT4,C.cT5,C.cT6,C.cT7,C.cnR,C.cnQ,C.cnO,C.cnP,C.cnW,C.cnT,C.cnY,C.cnL,C.cnM,C.cnH,C.cnG,C.cnJ,C.cnF,C.czz,C.czA,C.cnZ,C.co2,C.co3,C.co0,C.co1,C.co_])
v(A.aE,[C.J9,C.Ra,C.azt,C.aGR,C.aGS,C.aAx,C.aGQ,C.aBD,C.avX,C.aBH,C.BW])
v(A.ak,[C.mr,C.op])
v(A.ae,[C.Gc,C.Gb,C.a08,C.a09])
v(A.af,[C.a8Y,C.aAr,C.ads,C.a8Z])
v(A.Vb,[C.cnU,C.cnK])
u(C.Gf,A.awO)
u(C.aAs,C.ads)
w(C.ads,A.eb)})()
A.d9J(b.typeUniverse,JSON.parse('{"Gc":{"ae":[],"p":[]},"Ra":{"aE":[],"p":[]},"Gb":{"ae":[],"p":[]},"J9":{"aE":[],"p":[]},"a8Y":{"af":["Gc"]},"azt":{"aE":[],"p":[]},"aAr":{"af":["Gb"]},"aGR":{"aE":[],"p":[]},"aGS":{"aE":[],"p":[]},"aAx":{"aE":[],"p":[]},"aGQ":{"aE":[],"p":[]},"aBD":{"aE":[],"p":[]},"avX":{"aE":[],"p":[]},"a08":{"ae":[],"p":[]},"BW":{"aE":[],"p":[]},"aAs":{"af":["a08"]},"aBH":{"aE":[],"p":[]},"a09":{"ae":[],"p":[]},"a8Z":{"af":["a09"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("ad<ag>"),O:w("ad<z>"),e:w("ad<mr>"),s:w("ad<m>"),p:w("ad<p>"),t:w("ad<Q>"),X:w("aa<mr>"),a:w("aa<@>"),P:w("Y<m,@>"),f:w("Y<@,@>"),w:w("mn"),_:w("zT"),k:w("mr"),N:w("m"),Y:w("bu<a8>"),W:w("dA<m>"),J:w("i6<Q>"),j:w("i6<op?>"),E:w("xL<cx>"),q:w("RQ"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bqA=new A.ao(18,18,B.IM,null)
D.ab6=new A.du(B.O,null,null,D.bqA,null)
D.OS=new A.P(983224,"MaterialIcons",!1)
D.avo=new A.a6(D.OS,48,B.b_,null,null,null)
D.bwA=new A.J(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bGC=new A.y("Powered off",null,D.bwA,null,null,null,null,null,null,null,null)
D.aIf=w([D.avo,B.A,D.bGC],x.p)
D.ahF=new A.eT(B.X,B.e,B.P,B.j,null,B.l,null,0,D.aIf,null)
D.abd=new A.du(B.O,null,null,D.ahF,null)
D.abG=new A.hE(2,null,null,null,null,B.V,null,null,null,null)
D.aeh=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.aeL=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.agn=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.ak1=new A.V(0,3,0,3)
D.akb=new A.V(10,0,10,88)
D.akw=new A.V(12,6,12,10)
D.akK=new A.V(14,8,14,6)
D.LJ=new A.V(18,12,18,12)
D.alM=new A.V(20,18,20,8)
D.alU=new A.V(20,8,20,20)
D.Mj=new A.V(8,6,15,8)
D.are=new A.P(983222,"MaterialIcons",!1)
D.asP=new A.a6(B.hD,26,B.N,null,null,null)
D.asT=new A.a6(B.NW,18,null,null,null,null)
D.at9=new A.a6(B.ok,14,B.V,null,null,null)
D.ary=new A.P(983420,"MaterialIcons",!1)
D.atV=new A.a6(D.ary,14,B.V,null,null,null)
D.apY=new A.P(62895,"MaterialIcons",!1)
D.atZ=new A.a6(D.apY,14,B.V,null,null,null)
D.awU=new A.a6(B.j6,20,null,null,null,null)
D.ax9=new A.a6(B.f8,16,null,null,null,null)
D.aKl=w([B.ai,B.W],x.O)
D.Ql=new A.ar(B.ak,B.au,B.y,D.aKl,null,null)
D.bkv=new A.aI("NGMY OS","14.2.1")
D.bjq=new A.aI("VirtualDroid","13.8.4")
D.bjp=new A.aI("NGMY OS","15.0.0")
D.bk4=new A.aI("VirtualDroid","14.1.2")
D.bjn=new A.aI("NGMY Tab OS","12.9.7")
D.bjl=new A.aI("NGMY OS","13.5.3")
D.bjb=new A.aI("VirtualDroid","15.2.0")
D.bjI=new A.aI("NGMY OS","14.8.1")
D.bka=new A.aI("NGMY Tab OS","13.2.4")
D.bkF=new A.aI("VirtualDroid","12.6.9")
D.bj7=new A.aI("NGMY OS","16.0.1")
D.biZ=new A.aI("VirtualDroid","14.9.0")
D.bkn=new A.aI("NGMY Tab OS","14.0.3")
D.bjx=new A.aI("NGMY OS","13.1.8")
D.bj6=new A.aI("VirtualDroid","13.4.5")
D.bjk=new A.aI("NGMY OS","15.3.2")
D.bkb=new A.aI("NGMY Tab OS","12.4.1")
D.bkp=new A.aI("VirtualDroid","16.1.0")
D.bjH=new A.aI("NGMY OS","14.4.6")
D.bkw=new A.aI("VirtualDroid","15.0.8")
D.aJW=w([D.bkv,D.bjq,D.bjp,D.bk4,D.bjn,D.bjl,D.bjb,D.bjI,D.bka,D.bkF,D.bj7,D.biZ,D.bkn,D.bjx,D.bj6,D.bjk,D.bkb,D.bkp,D.bjH,D.bkw],A.bk("ad<+(m,m)>"))
D.bmH=new A.e7(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bmf=new A.e7(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bma=new A.e7(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bmj=new A.e7(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bm6=new A.e7(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bml=new A.e7(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bmJ=new A.e7(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bm7=new A.e7(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bme=new A.e7(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bmn=new A.e7(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bm5=new A.e7(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bmB=new A.e7(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bmy=new A.e7(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bmd=new A.e7(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bmv=new A.e7(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bmu=new A.e7(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bm4=new A.e7(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bmi=new A.e7(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bms=new A.e7(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bmx=new A.e7(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Rm=w([D.bmH,D.bmf,D.bma,D.bmj,D.bm6,D.bml,D.bmJ,D.bm7,D.bme,D.bmn,D.bm5,D.bmB,D.bmy,D.bmd,D.bmv,D.bmu,D.bm4,D.bmi,D.bms,D.bmx],A.bk("ad<+(m,m,a8,a8,m)>"))
D.aP6=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.Yh=new C.Gf(0,"youtube")
D.Yi=new C.Gf(1,"tiktok")
D.ET=new C.Gf(2,"instagram")
D.Yj=new C.Gf(3,"facebook")
D.bf1=new C.Gf(4,"other")
D.bqb=new A.ao(3,null,null,null)
D.bqR=new A.iT(4,10,8,0.52,null)
D.bHz=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.btQ=new A.aR(D.bHz,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bwU=new A.J(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bFX=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bI1=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bLI=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bM2=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bUZ=new C.aBD(null)})();(function staticFields(){$.d6p=20
$.anV=null
$.b9q=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dN7","D6",()=>A.PZ(0))
w($,"dN8","KC",()=>A.PZ(null))})()};
(a=>{a["sBm/cGKwHtnuksVv5tislbFsJvY="]=a.current})($__dart_deferred_initializers__);