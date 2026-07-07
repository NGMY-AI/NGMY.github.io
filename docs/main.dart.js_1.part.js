((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egx(d,e){A.a7(d,!1).cB(A.eE(new C.dis(e),!0,null,x.H))},
Zu(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zu=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P7()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dir(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zu)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dWK(r)
if(q==null){d.G(x.q).f.R(D.cKU)
w=1
break}w=4
return A.b(A.bK(B.id,null,x.H),$async$Zu)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dyJ=n
p=C.dWE(n)
n=$.Gy()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dmx(q)
d.G(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zu,v)},
dyM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aY(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aY(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.ob(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K_(d){return C.dWN(d)},
dWN(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K_=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$K_)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aE(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eR(r,x.f)
k=A.dt(k,new C.bnR(),k.$ti.j("G.E"),x.k)
j=A.O(k).j("ah<G.E>")
i=A.C(new A.ah(k,new C.bnS(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dyO(q)
w=12
return A.b(C.JZ(a3,p),$async$K_)
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
case 9:case 5:o=A.aN(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.H.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dyM(A.T(n,x.N,x.z))
l=C.dyO(A.a([m],x.e))
w=21
return A.b(C.JZ(a3,l),$async$K_)
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
case 18:case 14:q=C.dWL()
w=22
return A.b(C.JZ(a3,q),$async$K_)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K_,v)},
dyO(d){var w=A.Y(d).j("D<1,o>"),v=new A.D(d,new C.bnJ(),w).ey(0),u=new A.D(d,new C.bnK(),w).ey(0),t=new A.D(d,new C.bnL(),w).ey(0),s=new A.D(d,new C.bnM(),w).ey(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dmy(null,q,u,t,v,s));++q}return r},
awU(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$awU=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K_(d),$async$awU)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.df(t,new C.bnN(),s).ey(0)
p=r.df(t,new C.bnO(),s).ey(0)
o=r.df(t,new C.bnP(),s).ey(0)
n=r.df(t,new C.bnQ(),s).ey(0)
m=C.dmy(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JZ(d,t),$async$awU)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$awU,v)},
JZ(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JZ=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$JZ)
case 2:u=g
t=B.b.i(d)
s=J.b5(e,new C.bnI(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ao(s,null)),$async$JZ)
case 3:return A.f(null,v)}})
return A.h($async$JZ,v)},
dWL(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dx(20,x.k)
for(w=0;w<20;++w)q[w]=C.dmy(w,w,t,s,u,r)
return q},
dmy(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6H[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6H[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.D(p,new C.bnH(),A.Y(p).j("D<1,o>")).fv(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fv(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hu(i.bF(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a7(e,20)
k=D.bX9[w]
j=D.bO6[w]
return new C.ob("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dWM(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a_())},
dWM(d,e){var w,v=J.dx(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hu(d.bF(256),16),2,"0")
return B.h.fv(v)},
dis:function dis(d){this.a=d},
dir:function dir(d,e){this.a=d
this.b=e},
din:function din(d){this.a=d},
dio:function dio(d){this.a=d},
dip:function dip(d){this.a=d},
diq:function diq(d,e){this.a=d
this.b=e},
Np:function Np(d,e,f,g){var _=this
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
bnR:function bnR(){},
bnS:function bnS(){},
bnJ:function bnJ(){},
bnK:function bnK(){},
bnL:function bnL(){},
bnM:function bnM(){},
bnN:function bnN(){},
bnO:function bnO(){},
bnP:function bnP(){},
bnQ:function bnQ(){},
bnI:function bnI(){},
bnH:function bnH(){},
JY:function JY(d,e){this.c=d
this.a=e},
agg:function agg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHT:function cHT(){},
cHS:function cHS(d,e){this.a=d
this.b=e},
cHQ:function cHQ(d){this.a=d},
cHR:function cHR(d,e){this.a=d
this.b=e},
cHU:function cHU(d){this.a=d},
cHY:function cHY(d){this.a=d},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cHX:function cHX(d,e,f){this.a=d
this.b=e
this.c=f},
cHW:function cHW(d,e){this.a=d
this.b=e},
cHV:function cHV(d,e){this.a=d
this.b=e},
cI_:function cI_(d){this.a=d},
WK:function WK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJI:function aJI(d,e){this.c=d
this.a=e},
JX:function JX(d,e){this.c=d
this.a=e},
aKI:function aKI(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHN:function cHN(d){this.a=d},
cHO:function cHO(d){this.a=d},
cHP:function cHP(d){this.a=d},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHJ:function cHJ(d){this.a=d},
cHK:function cHK(d){this.a=d},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHL:function cHL(d){this.a=d},
cHH:function cHH(d){this.a=d},
aRw:function aRw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRx:function aRx(d,e,f){this.c=d
this.d=e
this.a=f},
aKO:function aKO(d,e){this.c=d
this.a=e},
aRv:function aRv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXe:function cXe(d){this.a=d},
cXf:function cXf(d){this.a=d},
aM3:function aM3(d){this.a=d},
aFZ:function aFZ(d,e){this.c=d
this.a=e},
dWK(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dWJ(v)
if(u!=null)return new C.qn(w,C.dmw(u,!1),D.aea,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dWI(v)
if(t!=null)return new C.qn(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aeb,"TikTok",q)
s=C.dWH(w,v)
if(s!=null)return s
r=C.dWG(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qn(w,w,D.csq,"Video",q)
return q},
dWH(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).de(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/reel/"+w+u,D.O_,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).de(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/p/"+w+u,D.O_,t,null)}return null},
dWG(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qn(d,"https://www.facebook.com/plugins/video.php?href="+A.fh(2,d,B.bd,!1)+"&show_text=false&width=734",D.aec,"Facebook",null)},
dWJ(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].de(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dWI(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).de(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).de(d)
return w==null?null:w.b[1]},
K0:function K0(d,e){this.a=d
this.b=e},
qn:function qn(d,e,f,g,h){var _=this
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
aKJ:function aKJ(d,e){var _=this
_.d=$
_.cX$=d
_.aW$=e
_.c=_.a=null},
aM8:function aM8(d,e){this.c=d
this.a=e},
cMA:function cMA(d){this.a=d},
cMB:function cMB(d){this.a=d},
Fo:function Fo(d,e){this.c=d
this.a=e},
al0:function al0(){},
dyN(d,e,f,g,h,i){return new C.a6F(i,f,h,e,g,d)},
ef4(d){var w=window
w.toString
A.hi(w,"message",new C.del(d),!1,x._)},
a6F:function a6F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agh:function agh(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cI0:function cI0(d){this.a=d},
cI9:function cI9(d){this.a=d},
cI7:function cI7(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI6:function cI6(d){this.a=d},
cI3:function cI3(d){this.a=d},
cI8:function cI8(d){this.a=d},
cI4:function cI4(d){this.a=d},
cI2:function cI2(d){this.a=d},
cI1:function cI1(d){this.a=d},
del:function del(d){this.a=d},
dWC(){var w,v,u
try{v=A.AL()
w=v.grT(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dmw(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bn(w,"&")},
bnF(d){var w=A.ao(y.c,!0,!1,!1,!1).de(d)
return w==null?null:w.b[1]},
dyI(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWD(d,e,f){var w,v,u=C.bnF(d)
if(u!=null){if(f){w=C.dWC()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dyI(C.dmw(u,e))}return C.dyI(d)},
dWE(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dWF(d){var w
if($.P7().a==null)return!1
w=$.Gy().a
return d>=w&&d<w+4},
dyL(){var w=$.awT
if(w!=null)w.ad(0)
$.awT=null
$.Gy().sv(0,0)},
dyK(){var w,v,u,t=$.P7()
if(t.a==null)return
w=$.awT
if(w!=null)w.ad(0)
v=$.dyJ
if(v<=4){t=t.a
t.toString
C.dmx(t)
return}w=$.Gy()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dmx(t)},
dmx(d){var w=$.awT
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
default:w=null}$.awT=A.dL(A.ds(0,0,0,0,0,w),C.efj())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Np.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.P(B.a6.l(0.25),B.w,1),r=A.X(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fT,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c2,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a0,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fr,w,w,w)}}
C.ob.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JY.prototype={
U(){return new C.agg(A.a([],x.e))},
ge0(){return this.c}}
C.agg.prototype={
a0(){var w=this
w.a6()
$.Gy().aq(0,w.gax_())
C.ef4(w.gbmJ())
w.YG()},
bm7(){if(this.c!=null)this.p(new C.cHT())},
bmK(){C.dyK()},
q(){$.Gy().Z(0,this.gax_())
C.dyL()
$.P7().sv(0,null)
this.a5()},
YG(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YG=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K_(t.a.c),$async$YG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHS(t,s))
$.bnG=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$YG,v)},
UG(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UG=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cHQ(t))
w=3
return A.b(C.awU(t.a.c),$async$UG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHR(t,s))
$.bnG=J.a4(t.d)
t.c.G(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UG,v)},
boE(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.eE(new C.cHU(d),!1,null,x.H))},
bpe(){var w=this.c
w.toString
return C.Zu(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fc:B.bw,s=A.aM(v,v,v,v,B.Lg,v,v,v,new C.cHY(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DP(A.H(A.a([A.I(new A.J(B.j9,A.j(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.X,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.V,!0,v,A.aS(!1,v,!0,new A.J(B.bc,A.X(B.h9,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpd(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c6(!0,A.w(A.a([new A.J(D.WW,r,v),A.I(w.e?B.n7:new A.ld($.P7(),new C.cHZ(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0)
return A.c8(v,t,s,v,!1,!1,A.aqZ(B.a6,B.Gu,B.ml,D.d7D,w.e?v:new C.cI_(w)),v)}}
C.WK.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a6.l(0.18),B.dl,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6E(n,!0,!C.dWF(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jP,B.nf,u,u,22),B.aN,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yN,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.V,!0,u,A.aS(!1,t,!0,A.w(A.a([A.I(A.t(u,A.ch(p,A.fT(A.w(A.a([new C.aJI(o,u),A.I(n,1),A.t(u,A.H(A.a([A.X(B.Bc,B.a6.l(0.85),u,u,9),D.cGK,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aD8,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a07,B.p),u,u,u,B.fN,u,u,u),1),B.aN,A.j(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJI.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.j(B.h.gaw(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rJ,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.WM,w,w,w)}}
C.JX.prototype={
U(){return new C.aKI()}}
C.aKI.prototype={
C(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fc:B.bw,t=A.aM(w,w,w,w,B.Lg,w,w,w,new C.cHN(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c8(w,u,A.c6(!0,A.w(A.a([new A.J(D.WW,A.H(A.a([t,A.I(new A.DP(A.H(A.a([A.I(new A.J(B.j9,A.j(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.V,!0,w,A.aS(!1,w,!0,new A.J(B.bc,A.X(B.h9,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHO(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.ld($.P7(),new C.cHP(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0),w,!1,!1,w,w)}}
C.aRw.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a6.l(0.35),B.f4,28),new A.a9(0,B.G,B.A.l(0.45),B.d9,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dyN(new A.dy(v+"_full_"+u,x.W),!1,u,!1,w.gaMD(),v+"_full")
w=v}else w=new C.aKO(t.r,s)}else w=new C.aFZ(m,s)
else w=D.ded
return A.t(s,A.ch(n,A.fT(A.w(A.a([new C.aRx(m,l,s),A.I(w,1),new C.aRv(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a07,B.p),s,r*2.05,s,B.bR,s,s,r)}}
C.aRx.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dD(r)
r=A.hL(r)
w=new A.dE(q,r)
v=w.gJr()===0?12:w.gJr()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h4:B.j7)===B.h4?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mQ,s,s,s),B.bC,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNY,B.eq,D.aNa,B.eq,D.aO1],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aN,A.H(A.a([A.X(B.L5,B.a6.l(0.9),s,s,12),B.eq,A.I(A.j(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDW,s,s,s)}}
C.aKO.prototype={
C(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.X(B.AH,B.e.l(0.35),w,w,40),B.W,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aRu,D.cWd,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a0,0,B.q),w,w,w),B.k,B.yN,w,w,w,w,w,w,w,w,1/0)}}
C.aRv.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awR(B.B1,"YouTube",s===0,r,new C.cXe(u))
s=u.awR(B.lo,"Device",s===1,r,new C.cXf(u))
w=r?"Power off":"Power on"
v=r?D.Zp:D.aLd
return A.t(t,A.H(A.a([q,B.am,s,B.bC,A.aM(t,t,t,t,A.X(v,r?B.bD:B.fy,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aDG,t,t,t)},
awR(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bo
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.V,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.np,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aM3.prototype={
C(d){return D.atq}}
C.aFZ.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.lJ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tE("Serial",u.c),q=w.tE("Model",u.d),p=w.tE("Device ID",u.e),o=w.tE("IMEI",u.r),n=w.tE("MAC",u.f),m=w.tE("OS",u.w+" "+u.x),l=w.tE("Location",u.y+", "+u.z),k=w.tE("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tE("Timezone",u.at)
u=u.ax
return A.ef(A.a([t,B.aN,s,B.ab,r,q,p,o,n,m,l,k,j,w.tE("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bc,v,v,B.aj,!1)},
tE(d,e){var w=null
return new A.J(B.cR,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cG,A.j(e,w,w,w,w,w,w,D.cO5,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.K0.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qn.prototype={
gaMD(){var w=this.c
return w===D.aea||w===D.aeb||w===D.O_||w===D.aec}}
C.a6E.prototype={
U(){return new C.aKJ(null,null)}}
C.aKJ.prototype={
a0(){this.a6()
var w=A.bJ(null,B.ve,null,1,null,this)
w.n6(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWo()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dr(t,new A.r(t,t,t,t,t,new A.ak(B.cI,B.cs,B.I,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bU),q=x.Y,p=u.d
p===$&&A.c()
p=A.cx(B.ic,p,t)
w=B.e.l(0.92)
q=A.aI(new A.d3(new A.b3(p,new A.bm(0.72,1,q),q.j("b3<bl.T>")),!1,A.X(B.jP,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nf
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM8(s,t),r,q,A.aT(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bb,B.y,s,t)}}
C.aM8.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kp(u,new C.cMA(this),B.c8,B.bM,!0,w,w,new C.cMB(this),w)
return new C.Fo(v,w)}}
C.Fo.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uT,B.SU],x.O),B.jP)
break
case 1:w=new A.aO(A.a([B.yN,D.axW],x.O),B.lp)
break
case 2:w=new A.aO(A.a([D.azs,D.axm],x.O),B.AO)
break
case 3:w=new A.aO(A.a([B.X,B.du],x.O),B.AR)
break
case 4:w=new A.aO(A.a([B.az,B.aO],x.O),B.pj)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.X(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aL,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.al0.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdE())
w.aW$=null
w.a5()},
by(){this.bP()
this.bK()
this.dF()}}
C.a6F.prototype={
U(){return new C.agh()}}
C.agh.prototype={
a7r(d,e){var w,v=C.bnF(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dmw(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dWD(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEr(){var w,v=this
if(v.w)return
v.p(new C.cI0(v))
w=v.e
if(w!=null)v.a7r(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.GA()
$.pI().uR(w,new C.cI9(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cI2(v))
w=v.e
w.toString
v.a7r(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZG,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aI(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1R(n,B.tu,w)],v)
if(o.f)w.push(A.fT(A.aI(new A.ac(28,28,D.auu,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bo,B.w,1)
q=A.X(B.L9,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eV(0,A.aL(!1,B.V,!0,n,A.aS(!1,n,!0,A.aI(A.t(n,A.H(A.a([q,B.am,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a0,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wi,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEq(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bnF(o.a.d)
if(v!=null)w.push(A.aT(8,A.jt(D.aPv,D.d2Q,new C.cI1(o),A.iM(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fr,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.al,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(ob)","~()","JY(S)","ob(a_<@,@>)","a1(ob)","a_<o,@>(ob)","aB<~>()","JX(S)","ld<K>(S,qn?,q?)","WK(S,K)","u_(S,qn?,q?)","Fo(S,al,dR?)"])
C.dis.prototype={
$1(d){return new C.JY(this.a,null)},
$S:z+2}
C.dir.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dW,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.G,B.a6.l(0.22),B.f4,32)],x.V),g=A.P(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMS,B.k,n,n,new A.r(B.a6.l(0.18),n,A.P(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aN,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aM(n,n,n,n,A.X(B.d6,m?B.ax:B.d1,n,n,n),n,n,n,new C.din(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ae,B.ag,B.I,j,n,n),B.p),n,n,n,B.IS,n,n,n)
e=A.em(B.cF,A.a([new C.Np("YouTube",B.L4,m,n),new C.Np("TikTok",B.lp,m,n),new C.Np("Instagram",B.AO,m,n),new C.Np("Facebook",B.AR,m,n)],v),B.cr,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cl:B.hH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bw
r=A.X(B.fv,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aJ(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.br(n,new A.b9(4,q,B.Y),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.RE),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.jt(D.aMV,D.d6K,new C.dio(d),A.iM(n,n,n,n,n,n,n,n,n,n,n,m?B.bj:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dr(A.ch(f,A.w(A.a([j,new A.J(B.Wx,u,n),new A.J(D.aFa,A.H(A.a([e,B.bC,A.c3(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dip(d),n,n),B.am,A.dM(D.aRd,D.d7y,new C.diq(d,w),A.bx(B.a6,n,n,n,B.e,n,D.Wi,n,new A.bF(A.m(14),B.Y),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a0,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aL,B.aR,B.I,i,n,n),B.p),B.bU),n)},
$S:84}
C.din.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dio.prototype={
$0(){C.dyL()
$.P7().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dip.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.diq.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnR.prototype={
$1(d){return C.dyM(A.T(d,x.N,x.z))},
$S:z+3}
C.bnS.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnJ.prototype={
$1(d){return d.c},
$S:z+0}
C.bnK.prototype={
$1(d){return d.r},
$S:z+0}
C.bnL.prototype={
$1(d){return d.f},
$S:z+0}
C.bnM.prototype={
$1(d){return d.at},
$S:z+0}
C.bnN.prototype={
$1(d){return d.c},
$S:z+0}
C.bnO.prototype={
$1(d){return d.r},
$S:z+0}
C.bnP.prototype={
$1(d){return d.f},
$S:z+0}
C.bnQ.prototype={
$1(d){return d.at},
$S:z+0}
C.bnI.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnH.prototype={
$1(d){return B.b.bi(B.l.hu(d,16),2,"0").toUpperCase()},
$S:82}
C.cHT.prototype={
$0(){},
$S:0}
C.cHS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHQ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHR.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHU.prototype={
$1(d){return new C.JX(this.a,null)},
$S:z+7}
C.cHY.prototype={
$0(){return A.a7(this.a,!1).ex()},
$S:0}
C.cHZ.prototype={
$3(d,e,f){return new A.ld($.Gy(),new C.cHX(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Df(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.P(B.a6.l(0.35),B.w,1)
q=A.X(B.jP,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gy().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.fM,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.j4(1.7777777777777777,C.dyN(new A.dy("fleet_master_"+r,x.W),!0,r,!0,j.gaMD(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vW(0,B.y,k,B.D,k,k,k,k,!1,k,B.aj,!1,A.a([new A.ky(new A.J(B.II,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ol(D.aDi,A.aAX(new A.nx(new C.cHW(i,j),J.a4(i.d),!1,!0,!0,A.tu(),k),D.cHv),k)],w))},
$S:1688}
C.cHW.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WK(v,e,J.a4(w.d),new C.cHV(w,v),this.b,null)},
$S:z+9}
C.cHV.prototype={
$0(){return this.a.boE(this.b)},
$S:0}
C.cI_.prototype={
$0(){this.a.UG()
return null},
$S:0}
C.cHN.prototype={
$0(){return A.a7(this.a,!1).ex()},
$S:0}
C.cHO.prototype={
$0(){C.Zu(this.a,$.bnG)
return null},
$S:0}
C.cHP.prototype={
$3(d,e,f){return A.fo(new C.cHM(this.a,e))},
$S:z+10}
C.cHM.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cp(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRw(u,s.a.c,s.e,s.d,new C.cHJ(s),new C.cHK(s),new C.cHL(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oW,v,v,B.aj),v,v,v)},
$S:1689}
C.cHJ.prototype={
$0(){var w=this.a.c
w.toString
C.Zu(w,$.bnG)
return null},
$S:0}
C.cHK.prototype={
$1(d){var w=this.a
return w.p(new C.cHI(w,d))},
$S:34}
C.cHI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHL.prototype={
$0(){var w=this.a
return w.p(new C.cHH(w))},
$S:0}
C.cHH.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cXe.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXf.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMA.prototype={
$3(d,e,f){return new C.Fo(this.a.c,null)},
$S:z+11}
C.cMB.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bb,B.y,A.a([new C.Fo(this.a.c,null),D.atF],x.p),null)},
$C:"$3",
$R:3,
$S:223}
C.cI0.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cI9.prototype={
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
w.a7r(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hi(v,"load",new C.cI7(w),!1,u)
v=w.e
v.toString
A.hi(v,"error",new C.cI8(w),!1,u)
w=w.e
w.toString
return w},
$S:590}
C.cI7.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cI5(w))
A.bK(B.O,new C.cI6(w),x.H)}},
$S:45}
C.cI5.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI6.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cI3(w))},
$S:12}
C.cI3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cI4(w))},
$S:45}
C.cI4.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cI2.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cI1.prototype={
$0(){var w,v=C.bnF(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kQ.Sv(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.del.prototype={
$1(d){var w,v,u,t,s=new A.EX([],[]).IG(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1690};(function aliases(){var w=C.al0.prototype
w.aWo=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agg.prototype,"gax_","bm7",1)
w(u,"gbmJ","bmK",1)
w(u,"gbpd","bpe",6)
w(C.agh.prototype,"gbEq","bEr",1)
v(C,"efj","dyK",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yD,[C.dis,C.dir,C.bnR,C.bnS,C.bnJ,C.bnK,C.bnL,C.bnM,C.bnN,C.bnO,C.bnP,C.bnQ,C.bnI,C.bnH,C.cHU,C.cHZ,C.cHX,C.cHP,C.cHK,C.cMA,C.cMB,C.cI9,C.cI7,C.cI8,C.del])
v(A.a_X,[C.din,C.dio,C.dip,C.diq,C.cHT,C.cHS,C.cHQ,C.cHR,C.cHY,C.cHV,C.cI_,C.cHN,C.cHO,C.cHJ,C.cHI,C.cHL,C.cHH,C.cXe,C.cXf,C.cI0,C.cI5,C.cI6,C.cI3,C.cI4,C.cI2,C.cI1])
v(A.au,[C.Np,C.WK,C.aJI,C.aRw,C.aRx,C.aKO,C.aRv,C.aM3,C.aFZ,C.aM8,C.Fo])
v(A.al,[C.ob,C.qn])
v(A.ae,[C.JY,C.JX,C.a6E,C.a6F])
v(A.af,[C.agg,C.aKI,C.al0,C.agh])
v(A.a_Y,[C.cHW,C.cHM])
u(C.K0,A.aGU)
u(C.aKJ,C.al0)
w(C.al0,A.ea)})()
A.dCf(b.typeUniverse,JSON.parse('{"JY":{"ae":[],"q":[]},"WK":{"au":[],"q":[]},"JX":{"ae":[],"q":[]},"Np":{"au":[],"q":[]},"agg":{"af":["JY"]},"aJI":{"au":[],"q":[]},"aKI":{"af":["JX"]},"aRw":{"au":[],"q":[]},"aRx":{"au":[],"q":[]},"aKO":{"au":[],"q":[]},"aRv":{"au":[],"q":[]},"aM3":{"au":[],"q":[]},"aFZ":{"au":[],"q":[]},"a6E":{"ae":[],"q":[]},"Fo":{"au":[],"q":[]},"aKJ":{"af":["a6E"]},"aM8":{"au":[],"q":[]},"a6F":{"ae":[],"q":[]},"agh":{"af":["a6F"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<ob>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ad<ob>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o6"),_:w("Dc"),k:w("ob"),N:w("o"),Y:w("bm<aa>"),W:w("dy<o>"),J:w("ld<K>"),j:w("ld<qn?>"),E:w("xv<cL>"),q:w("Xw"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zp=new A.M(983224,"MaterialIcons",!1)
D.aPD=new A.a8(D.Zp,48,B.bo,null,null,null)
D.cNK=new A.U(!0,B.cl,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cV7=new A.A("Powered off",null,D.cNK,null,null,null,null,null,null,null,null,null)
D.bLf=w([D.aPD,B.Q,D.cV7],x.p)
D.aAH=new A.eK(B.aj,B.i,B.a0,B.o,null,B.q,null,0,D.bLf,null)
D.atq=new A.dq(B.T,null,null,D.aAH,null)
D.cH9=new A.ac(18,18,B.SC,null)
D.atF=new A.dq(B.T,null,null,D.cH9,null)
D.auu=new A.hc(2,null,null,null,null,B.a7,null,null,null,null)
D.axm=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axW=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azs=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD8=new A.V(0,3,0,3)
D.aDi=new A.V(10,0,10,88)
D.aDG=new A.V(12,6,12,10)
D.aDW=new A.V(14,8,14,6)
D.Wi=new A.V(18,12,18,12)
D.aFa=new A.V(20,8,20,20)
D.WW=new A.V(8,6,15,8)
D.aLd=new A.M(983222,"MaterialIcons",!1)
D.aMS=new A.a8(B.jP,26,B.a6,null,null,null)
D.aMV=new A.a8(B.YE,18,null,null,null,null)
D.aNa=new A.a8(B.rJ,14,B.a7,null,null,null)
D.aLu=new A.M(983420,"MaterialIcons",!1)
D.aNY=new A.a8(D.aLu,14,B.a7,null,null,null)
D.aJD=new A.M(62895,"MaterialIcons",!1)
D.aO1=new A.a8(D.aJD,14,B.a7,null,null,null)
D.aPv=new A.a8(B.rA,16,B.a7,null,null,null)
D.aRd=new A.a8(B.jh,20,null,null,null,null)
D.aRu=new A.a8(B.h9,16,null,null,null,null)
D.bOT=w([B.aO,B.X],x.O)
D.a07=new A.ak(B.aL,B.aR,B.I,D.bOT,null,null)
D.cAQ=new A.aO("NGMY OS","14.2.1")
D.czD=new A.aO("VirtualDroid","13.8.4")
D.czC=new A.aO("NGMY OS","15.0.0")
D.cAo=new A.aO("VirtualDroid","14.1.2")
D.czA=new A.aO("NGMY Tab OS","12.9.7")
D.czy=new A.aO("NGMY OS","13.5.3")
D.czn=new A.aO("VirtualDroid","15.2.0")
D.cA_=new A.aO("NGMY OS","14.8.1")
D.cAu=new A.aO("NGMY Tab OS","13.2.4")
D.cB_=new A.aO("VirtualDroid","12.6.9")
D.czg=new A.aO("NGMY OS","16.0.1")
D.cz5=new A.aO("VirtualDroid","14.9.0")
D.cAH=new A.aO("NGMY Tab OS","14.0.3")
D.czM=new A.aO("NGMY OS","13.1.8")
D.czf=new A.aO("VirtualDroid","13.4.5")
D.czx=new A.aO("NGMY OS","15.3.2")
D.cAv=new A.aO("NGMY Tab OS","12.4.1")
D.cAK=new A.aO("VirtualDroid","16.1.0")
D.czZ=new A.aO("NGMY OS","14.4.6")
D.cAR=new A.aO("VirtualDroid","15.0.8")
D.bO6=w([D.cAQ,D.czD,D.czC,D.cAo,D.czA,D.czy,D.czn,D.cA_,D.cAu,D.cB_,D.czg,D.cz5,D.cAH,D.czM,D.czf,D.czx,D.cAv,D.cAK,D.czZ,D.cAR],A.b4("a3<+(o,o)>"))
D.cD5=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCE=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCz=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCI=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCv=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCK=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cD7=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCw=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCD=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCM=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCu=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cD_=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCX=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCC=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCU=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCT=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCt=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCH=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCR=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCW=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6H=w([D.cD5,D.cCE,D.cCz,D.cCI,D.cCv,D.cCK,D.cD7,D.cCw,D.cCD,D.cCM,D.cCu,D.cD_,D.cCX,D.cCC,D.cCU,D.cCT,D.cCt,D.cCH,D.cCR,D.cCW],A.b4("a3<+(o,o,aa,aa,o)>"))
D.bX9=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aea=new C.K0(0,"youtube")
D.aeb=new C.K0(1,"tiktok")
D.O_=new C.K0(2,"instagram")
D.aec=new C.K0(3,"facebook")
D.csq=new C.K0(4,"other")
D.cGK=new A.ac(3,null,null,null)
D.cHv=new A.i7(4,10,8,0.52,null)
D.cWp=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKU=new A.aW(D.cWp,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cO5=new A.U(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWd=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2Q=new A.A("Open in YouTube",null,B.iZ,null,null,null,null,null,null,null,null,null)
D.d6K=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7y=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7D=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ded=new C.aM3(null)})();(function staticFields(){$.dyJ=20
$.awT=null
$.bnG=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ekl","Gy",()=>A.aCM(0))
w($,"ekm","P7",()=>A.aCM(null))})()};
(a=>{a["oAft6U5/7xp3sw3BGhzqKfvhXzc="]=a.current})($__dart_deferred_initializers__);