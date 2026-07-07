((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egK(d,e){A.a7(d,!1).cB(A.eF(new C.diA(e),!0,null,x.H))},
Zv(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zv=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P8()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.diz(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zv)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dWU(r)
if(q==null){d.G(x.q).f.R(D.cL0)
w=1
break}w=4
return A.b(A.bK(B.id,null,x.H),$async$Zv)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dyR=n
p=C.dWO(n)
n=$.Gy()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dmF(q)
d.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zv,v)},
dyU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oc(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K_(d){return C.dWX(d)},
dWX(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
case 10:k=J.eS(r,x.f)
k=A.dt(k,new C.bnT(),k.$ti.j("G.E"),x.k)
j=A.O(k).j("ag<G.E>")
i=A.C(new A.ag(k,new C.bnU(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dyW(q)
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
case 19:m=C.dyU(A.U(n,x.N,x.z))
l=C.dyW(A.a([m],x.e))
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
case 18:case 14:q=C.dWV()
w=22
return A.b(C.JZ(a3,q),$async$K_)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K_,v)},
dyW(d){var w=A.Y(d).j("D<1,o>"),v=new A.D(d,new C.bnL(),w).ey(0),u=new A.D(d,new C.bnM(),w).ey(0),t=new A.D(d,new C.bnN(),w).ey(0),s=new A.D(d,new C.bnO(),w).ey(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dmG(null,q,u,t,v,s));++q}return r},
awU(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$awU=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K_(d),$async$awU)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.df(t,new C.bnP(),s).ey(0)
p=r.df(t,new C.bnQ(),s).ey(0)
o=r.df(t,new C.bnR(),s).ey(0)
n=r.df(t,new C.bnS(),s).ey(0)
m=C.dmG(null,r.gE(t),p,o,q,n)
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
s=J.b5(e,new C.bnK(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ao(s,null)),$async$JZ)
case 3:return A.f(null,v)}})
return A.h($async$JZ,v)},
dWV(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dmG(w,w,t,s,u,r)
return q},
dmG(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6I[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6I[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bnJ(),A.Y(p).j("D<1,o>")).fz(0)
u="VND-"+B.b.ae(n,0,4)+"-"+B.b.ae(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fz(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hv(i.bG(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a7(e,20)
k=D.bXe[w]
j=D.bOb[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dWW(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a_())},
dWW(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hv(d.bG(256),16),2,"0")
return B.h.fz(v)},
diA:function diA(d){this.a=d},
diz:function diz(d,e){this.a=d
this.b=e},
div:function div(d){this.a=d},
diw:function diw(d){this.a=d},
dix:function dix(d){this.a=d},
diy:function diy(d,e){this.a=d
this.b=e},
Nq:function Nq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oc:function oc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bnT:function bnT(){},
bnU:function bnU(){},
bnL:function bnL(){},
bnM:function bnM(){},
bnN:function bnN(){},
bnO:function bnO(){},
bnP:function bnP(){},
bnQ:function bnQ(){},
bnR:function bnR(){},
bnS:function bnS(){},
bnK:function bnK(){},
bnJ:function bnJ(){},
JY:function JY(d,e){this.c=d
this.a=e},
agh:function agh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHW:function cHW(){},
cHV:function cHV(d,e){this.a=d
this.b=e},
cHT:function cHT(d){this.a=d},
cHU:function cHU(d,e){this.a=d
this.b=e},
cHX:function cHX(d){this.a=d},
cI0:function cI0(d){this.a=d},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI_:function cI_(d,e,f){this.a=d
this.b=e
this.c=f},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cHY:function cHY(d,e){this.a=d
this.b=e},
cI2:function cI2(d){this.a=d},
WL:function WL(d,e,f,g,h,i){var _=this
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
cHQ:function cHQ(d){this.a=d},
cHR:function cHR(d){this.a=d},
cHS:function cHS(d){this.a=d},
cHP:function cHP(d,e){this.a=d
this.b=e},
cHM:function cHM(d){this.a=d},
cHN:function cHN(d){this.a=d},
cHL:function cHL(d,e){this.a=d
this.b=e},
cHO:function cHO(d){this.a=d},
cHK:function cHK(d){this.a=d},
aRx:function aRx(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRy:function aRy(d,e,f){this.c=d
this.d=e
this.a=f},
aKO:function aKO(d,e){this.c=d
this.a=e},
aRw:function aRw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXn:function cXn(d){this.a=d},
cXo:function cXo(d){this.a=d},
aM4:function aM4(d){this.a=d},
aFZ:function aFZ(d,e){this.c=d
this.a=e},
dWU(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dWT(v)
if(u!=null)return new C.qn(w,C.dmE(u,!1),D.aeb,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dWS(v)
if(t!=null)return new C.qn(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aec,"TikTok",q)
s=C.dWR(w,v)
if(s!=null)return s
r=C.dWQ(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qn(w,w,D.csv,"Video",q)
return q},
dWR(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d9(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/reel/"+w+u,D.O_,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d9(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/p/"+w+u,D.O_,t,null)}return null},
dWQ(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qn(d,"https://www.facebook.com/plugins/video.php?href="+A.fi(2,d,B.bd,!1)+"&show_text=false&width=734",D.aed,"Facebook",null)},
dWT(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d9(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dWS(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d9(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d9(d)
return w==null?null:w.b[1]},
K0:function K0(d,e){this.a=d
this.b=e},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6G:function a6G(d,e,f,g,h){var _=this
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
aM9:function aM9(d,e){this.c=d
this.a=e},
cMJ:function cMJ(d){this.a=d},
cMK:function cMK(d){this.a=d},
Fo:function Fo(d,e){this.c=d
this.a=e},
al1:function al1(){},
dyV(d,e,f,g,h,i){return new C.a6H(i,f,h,e,g,d)},
efh(d){var w=window
w.toString
A.hi(w,"message",new C.det(d),!1,x._)},
a6H:function a6H(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agi:function agi(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cI3:function cI3(d){this.a=d},
cIc:function cIc(d){this.a=d},
cIa:function cIa(d){this.a=d},
cI8:function cI8(d){this.a=d},
cI9:function cI9(d){this.a=d},
cI6:function cI6(d){this.a=d},
cIb:function cIb(d){this.a=d},
cI7:function cI7(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI4:function cI4(d){this.a=d},
det:function det(d){this.a=d},
dWM(){var w,v,u
try{v=A.AK()
w=v.grX(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dmE(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bnH(d){var w=A.ao(y.c,!0,!1,!1,!1).d9(d)
return w==null?null:w.b[1]},
dyQ(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWN(d,e,f){var w,v,u=C.bnH(d)
if(u!=null){if(f){w=C.dWM()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dyQ(C.dmE(u,e))}return C.dyQ(d)},
dWO(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dWP(d){var w
if($.P8().a==null)return!1
w=$.Gy().a
return d>=w&&d<w+4},
dyT(){var w=$.awT
if(w!=null)w.ad(0)
$.awT=null
$.Gy().sv(0,0)},
dyS(){var w,v,u,t=$.P8()
if(t.a==null)return
w=$.awT
if(w!=null)w.ad(0)
v=$.dyR
if(v<=4){t=t.a
t.toString
C.dmF(t)
return}w=$.Gy()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dmF(t)},
dmF(d){var w=$.awT
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
default:w=null}$.awT=A.dM(A.ds(0,0,0,0,0,w),C.efw())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nq.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.P(B.a6.l(0.25),B.w,1),r=A.X(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fU,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a0,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fs,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JY.prototype={
U(){return new C.agh(A.a([],x.e))},
ge0(){return this.c}}
C.agh.prototype={
a0(){var w=this
w.a6()
$.Gy().aq(0,w.gax2())
C.efh(w.gbmQ())
w.YF()},
bme(){if(this.c!=null)this.p(new C.cHW())},
bmR(){C.dyS()},
q(){$.Gy().Z(0,this.gax2())
C.dyT()
$.P8().sv(0,null)
this.a5()},
YF(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YF=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K_(t.a.c),$async$YF)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHV(t,s))
$.bnI=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$YF,v)},
UG(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UG=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cHT(t))
w=3
return A.b(C.awU(t.a.c),$async$UG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHU(t,s))
$.bnI=J.a4(t.d)
t.c.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UG,v)},
boL(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.eF(new C.cHX(d),!1,null,x.H))},
bpl(){var w=this.c
w.toString
return C.Zv(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fc:B.bw,s=A.aM(v,v,v,v,B.Lg,v,v,v,new C.cI0(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DO(A.H(A.a([A.J(new A.I(B.ja,A.j(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.X,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.V,!0,v,A.aS(!1,v,!0,new A.I(B.bc,A.X(B.ha,B.a6,v,v,28),v),B.cP,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpk(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c6(!0,A.w(A.a([new A.I(D.WX,r,v),A.J(w.e?B.n7:new A.ld($.P8(),new C.cI1(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0)
return A.c8(v,t,s,v,!1,!1,A.aqZ(B.a6,B.Gt,B.ml,D.d7M,w.e?v:new C.cI2(w)),v)}}
C.WL.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a6.l(0.18),B.dl,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6G(n,!0,!C.dWP(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jQ,B.nf,u,u,22),B.aN,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yN,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.V,!0,u,A.aS(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ch(p,A.fT(A.w(A.a([new C.aJI(o,u),A.J(n,1),A.t(u,A.H(A.a([A.X(B.Bb,B.a6.l(0.85),u,u,9),D.cGP,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aD9,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a08,B.p),u,u,u,B.fO,u,u,u),1),B.aN,A.j(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJI.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gaw(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rK,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.WN,w,w,w)}}
C.JX.prototype={
U(){return new C.aKI()}}
C.aKI.prototype={
C(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fc:B.bw,t=A.aM(w,w,w,w,B.Lg,w,w,w,new C.cHQ(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c8(w,u,A.c6(!0,A.w(A.a([new A.I(D.WX,A.H(A.a([t,A.J(new A.DO(A.H(A.a([A.J(new A.I(B.ja,A.j(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.V,!0,w,A.aS(!1,w,!0,new A.I(B.bc,A.X(B.ha,B.a6,w,w,28),w),B.cP,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHR(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.ld($.P8(),new C.cHS(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0),w,!1,!1,w,w)}}
C.aRx.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a6.l(0.35),B.f4,28),new A.aa(0,B.G,B.A.l(0.45),B.d9,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dyV(new A.dv(v+"_full_"+u,x.W),!1,u,!1,w.gaMI(),v+"_full")
w=v}else w=new C.aKO(t.r,s)}else w=new C.aFZ(m,s)
else w=D.dem
return A.t(s,A.ch(n,A.fT(A.w(A.a([new C.aRy(m,l,s),A.J(w,1),new C.aRw(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a08,B.p),s,r*2.05,s,B.bR,s,s,r)}}
C.aRy.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dD(r)
r=A.hL(r)
w=new A.dE(q,r)
v=w.gJr()===0?12:w.gJr()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h5:B.j7)===B.h5?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mQ,s,s,s),B.bC,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aO2,B.eq,D.aNf,B.eq,D.aO6],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aN,A.H(A.a([A.X(B.L5,B.a6.l(0.9),s,s,12),B.eq,A.J(A.j(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDW,s,s,s)}}
C.aKO.prototype={
C(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.X(B.AH,B.e.l(0.35),w,w,40),B.W,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aRz,D.cWk,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a0,0,B.q),w,w,w),B.k,B.yN,w,w,w,w,w,w,w,w,1/0)}}
C.aRw.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awU(B.B0,"YouTube",s===0,r,new C.cXn(u))
s=u.awU(B.lo,"Device",s===1,r,new C.cXo(u))
w=r?"Power off":"Power on"
v=r?D.Zr:D.aLe
return A.t(t,A.H(A.a([q,B.am,s,B.bC,A.aM(t,t,t,t,A.X(v,r?B.bD:B.fA,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aDG,t,t,t)},
awU(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bo
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aL(!1,B.V,!0,u,A.aS(!1,A.m(10),!0,new A.I(B.np,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aM4.prototype={
C(d){return D.atr}}
C.aFZ.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.lJ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tI("Serial",u.c),q=w.tI("Model",u.d),p=w.tI("Device ID",u.e),o=w.tI("IMEI",u.r),n=w.tI("MAC",u.f),m=w.tI("OS",u.w+" "+u.x),l=w.tI("Location",u.y+", "+u.z),k=w.tI("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tI("Timezone",u.at)
u=u.ax
return A.ef(A.a([t,B.aN,s,B.ab,r,q,p,o,n,m,l,k,j,w.tI("Provisioned",u.length>=10?B.b.ae(u,0,10):u)],x.p),v,B.bc,v,v,B.aj,!1)},
tI(d,e){var w=null
return new A.I(B.cQ,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cH,A.j(e,w,w,w,w,w,w,D.cOc,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.K0.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qn.prototype={
gaMI(){var w=this.c
return w===D.aeb||w===D.aec||w===D.O_||w===D.aed}}
C.a6G.prototype={
U(){return new C.aKJ(null,null)}}
C.aKJ.prototype={
a0(){this.a6()
var w=A.bJ(null,B.ve,null,1,null,this)
w.n6(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWt()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dr(t,new A.r(t,t,t,t,t,new A.ak(B.cJ,B.cs,B.I,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bU),q=x.Y,p=u.d
p===$&&A.c()
p=A.cx(B.ic,p,t)
w=B.e.l(0.92)
q=A.aI(new A.d3(new A.b3(p,new A.bm(0.72,1,q),q.j("b3<bl.T>")),!1,A.X(B.jQ,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nf
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM9(s,t),r,q,A.aT(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bb,B.y,s,t)}}
C.aM9.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kq(u,new C.cMJ(this),B.c8,B.bM,!0,w,w,new C.cMK(this),w)
return new C.Fo(v,w)}}
C.Fo.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uT,B.SU],x.O),B.jQ)
break
case 1:w=new A.aO(A.a([B.yN,D.axX],x.O),B.lp)
break
case 2:w=new A.aO(A.a([D.azt,D.axn],x.O),B.AO)
break
case 3:w=new A.aO(A.a([B.X,B.du],x.O),B.AR)
break
case 4:w=new A.aO(A.a([B.az,B.aO],x.O),B.pj)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.X(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aL,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.al1.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdE())
w.aW$=null
w.a5()},
by(){this.bP()
this.bK()
this.dF()}}
C.a6H.prototype={
U(){return new C.agi()}}
C.agi.prototype={
a7r(d,e){var w,v=C.bnH(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dmE(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dWN(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEy(){var w,v=this
if(v.w)return
v.p(new C.cI3(v))
w=v.e
if(w!=null)v.a7r(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.GA()
$.pI().uW(w,new C.cIc(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cI5(v))
w=v.e
w.toString
v.a7r(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZI,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aI(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1T(n,B.tu,w)],v)
if(o.f)w.push(A.fT(A.aI(new A.ac(28,28,D.auv,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bo,B.w,1)
q=A.X(B.L9,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eW(0,A.aL(!1,B.V,!0,n,A.aS(!1,n,!0,A.aI(A.t(n,A.H(A.a([q,B.am,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a0,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wj,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEx(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bnH(o.a.d)
if(v!=null)w.push(A.aT(8,A.jt(D.aPA,D.d2Y,new C.cI4(o),A.iL(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fs,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.al,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(oc)","~()","JY(S)","oc(a_<@,@>)","a1(oc)","a_<o,@>(oc)","aB<~>()","JX(S)","ld<K>(S,qn?,q?)","WL(S,K)","u_(S,qn?,q?)","Fo(S,al,dR?)"])
C.diA.prototype={
$1(d){return new C.JY(this.a,null)},
$S:z+2}
C.diz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aD(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dX,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a6.l(0.22),B.f4,32)],x.V),g=A.P(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMX,B.k,n,n,new A.r(B.a6.l(0.18),n,A.P(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aN,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aM(n,n,n,n,A.X(B.d6,m?B.ax:B.d1,n,n,n),n,n,n,new C.div(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ae,B.ag,B.I,j,n,n),B.p),n,n,n,B.IR,n,n,n)
e=A.em(B.cG,A.a([new C.Nq("YouTube",B.L4,m,n),new C.Nq("TikTok",B.lp,m,n),new C.Nq("Instagram",B.AO,m,n),new C.Nq("Facebook",B.AR,m,n)],v),B.cr,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.hI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bw
r=A.X(B.fx,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aJ(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.bs(n,new A.b9(4,q,B.Y),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.RE),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.jt(D.aN_,D.d6T,new C.diw(d),A.iL(n,n,n,n,n,n,n,n,n,n,n,m?B.bj:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dr(A.ch(f,A.w(A.a([j,new A.I(B.Wy,u,n),new A.I(D.aFa,A.H(A.a([e,B.bC,A.c3(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dix(d),n,n),B.am,A.dN(D.aRi,D.d7H,new C.diy(d,w),A.bx(B.a6,n,n,n,B.e,n,D.Wj,n,new A.bF(A.m(14),B.Y),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a0,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aL,B.aR,B.I,i,n,n),B.p),B.bU),n)},
$S:82}
C.div.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.diw.prototype={
$0(){C.dyT()
$.P8().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dix.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.diy.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnT.prototype={
$1(d){return C.dyU(A.U(d,x.N,x.z))},
$S:z+3}
C.bnU.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnL.prototype={
$1(d){return d.c},
$S:z+0}
C.bnM.prototype={
$1(d){return d.r},
$S:z+0}
C.bnN.prototype={
$1(d){return d.f},
$S:z+0}
C.bnO.prototype={
$1(d){return d.at},
$S:z+0}
C.bnP.prototype={
$1(d){return d.c},
$S:z+0}
C.bnQ.prototype={
$1(d){return d.r},
$S:z+0}
C.bnR.prototype={
$1(d){return d.f},
$S:z+0}
C.bnS.prototype={
$1(d){return d.at},
$S:z+0}
C.bnK.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnJ.prototype={
$1(d){return B.b.bi(B.l.hv(d,16),2,"0").toUpperCase()},
$S:81}
C.cHW.prototype={
$0(){},
$S:0}
C.cHV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHT.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHU.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHX.prototype={
$1(d){return new C.JX(this.a,null)},
$S:z+7}
C.cI0.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cI1.prototype={
$3(d,e,f){return new A.ld($.Gy(),new C.cI_(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cI_.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.De(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.P(B.a6.l(0.35),B.w,1)
q=A.X(B.jQ,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gy().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.j3(1.7777777777777777,C.dyV(new A.dv("fleet_master_"+r,x.W),!0,r,!0,j.gaMI(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vV(0,B.y,k,B.D,k,k,k,k,!1,k,B.aj,!1,A.a([new A.kz(new A.I(B.IH,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ol(D.aDi,A.aAX(new A.ny(new C.cHZ(i,j),J.a4(i.d),!1,!0,!0,A.tv(),k),D.cHA),k)],w))},
$S:1690}
C.cHZ.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WL(v,e,J.a4(w.d),new C.cHY(w,v),this.b,null)},
$S:z+9}
C.cHY.prototype={
$0(){return this.a.boL(this.b)},
$S:0}
C.cI2.prototype={
$0(){this.a.UG()
return null},
$S:0}
C.cHQ.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cHR.prototype={
$0(){C.Zv(this.a,$.bnI)
return null},
$S:0}
C.cHS.prototype={
$3(d,e,f){return A.fp(new C.cHP(this.a,e))},
$S:z+10}
C.cHP.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cp(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRx(u,s.a.c,s.e,s.d,new C.cHM(s),new C.cHN(s),new C.cHO(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oW,v,v,B.aj),v,v,v)},
$S:1691}
C.cHM.prototype={
$0(){var w=this.a.c
w.toString
C.Zv(w,$.bnI)
return null},
$S:0}
C.cHN.prototype={
$1(d){var w=this.a
return w.p(new C.cHL(w,d))},
$S:33}
C.cHL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHO.prototype={
$0(){var w=this.a
return w.p(new C.cHK(w))},
$S:0}
C.cHK.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cXn.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXo.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMJ.prototype={
$3(d,e,f){return new C.Fo(this.a.c,null)},
$S:z+11}
C.cMK.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bb,B.y,A.a([new C.Fo(this.a.c,null),D.atG],x.p),null)},
$C:"$3",
$R:3,
$S:260}
C.cI3.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cIc.prototype={
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
A.hi(v,"load",new C.cIa(w),!1,u)
v=w.e
v.toString
A.hi(v,"error",new C.cIb(w),!1,u)
w=w.e
w.toString
return w},
$S:590}
C.cIa.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cI8(w))
A.bK(B.P,new C.cI9(w),x.H)}},
$S:45}
C.cI8.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI9.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cI6(w))},
$S:12}
C.cI6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cIb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cI7(w))},
$S:45}
C.cI7.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cI5.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cI4.prototype={
$0(){var w,v=C.bnH(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kQ.Sv(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.det.prototype={
$1(d){var w,v,u,t,s=new A.EX([],[]).IG(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1692};(function aliases(){var w=C.al1.prototype
w.aWt=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agh.prototype,"gax2","bme",1)
w(u,"gbmQ","bmR",1)
w(u,"gbpk","bpl",6)
w(C.agi.prototype,"gbEx","bEy",1)
v(C,"efw","dyS",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yD,[C.diA,C.diz,C.bnT,C.bnU,C.bnL,C.bnM,C.bnN,C.bnO,C.bnP,C.bnQ,C.bnR,C.bnS,C.bnK,C.bnJ,C.cHX,C.cI1,C.cI_,C.cHS,C.cHN,C.cMJ,C.cMK,C.cIc,C.cIa,C.cIb,C.det])
v(A.a_Z,[C.div,C.diw,C.dix,C.diy,C.cHW,C.cHV,C.cHT,C.cHU,C.cI0,C.cHY,C.cI2,C.cHQ,C.cHR,C.cHM,C.cHL,C.cHO,C.cHK,C.cXn,C.cXo,C.cI3,C.cI8,C.cI9,C.cI6,C.cI7,C.cI5,C.cI4])
v(A.au,[C.Nq,C.WL,C.aJI,C.aRx,C.aRy,C.aKO,C.aRw,C.aM4,C.aFZ,C.aM9,C.Fo])
v(A.al,[C.oc,C.qn])
v(A.ae,[C.JY,C.JX,C.a6G,C.a6H])
v(A.af,[C.agh,C.aKI,C.al1,C.agi])
v(A.a0_,[C.cHZ,C.cHP])
u(C.K0,A.aGU)
u(C.aKJ,C.al1)
w(C.al1,A.ea)})()
A.dCn(b.typeUniverse,JSON.parse('{"JY":{"ae":[],"q":[]},"WL":{"au":[],"q":[]},"JX":{"ae":[],"q":[]},"Nq":{"au":[],"q":[]},"agh":{"af":["JY"]},"aJI":{"au":[],"q":[]},"aKI":{"af":["JX"]},"aRx":{"au":[],"q":[]},"aRy":{"au":[],"q":[]},"aKO":{"au":[],"q":[]},"aRw":{"au":[],"q":[]},"aM4":{"au":[],"q":[]},"aFZ":{"au":[],"q":[]},"a6G":{"ae":[],"q":[]},"Fo":{"au":[],"q":[]},"aKJ":{"af":["a6G"]},"aM9":{"au":[],"q":[]},"a6H":{"ae":[],"q":[]},"agi":{"af":["a6H"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<aa>"),O:w("a3<x>"),e:w("a3<oc>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o7"),_:w("Db"),k:w("oc"),N:w("o"),Y:w("bm<a9>"),W:w("dv<o>"),J:w("ld<K>"),j:w("ld<qn?>"),E:w("xv<cL>"),q:w("Xx"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zr=new A.M(983224,"MaterialIcons",!1)
D.aPI=new A.a8(D.Zr,48,B.bo,null,null,null)
D.cNR=new A.R(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVe=new A.z("Powered off",null,D.cNR,null,null,null,null,null,null,null,null,null)
D.bLk=w([D.aPI,B.Q,D.cVe],x.p)
D.aAI=new A.eK(B.aj,B.i,B.a0,B.o,null,B.q,null,0,D.bLk,null)
D.atr=new A.dq(B.T,null,null,D.aAI,null)
D.cHe=new A.ac(18,18,B.SC,null)
D.atG=new A.dq(B.T,null,null,D.cHe,null)
D.auv=new A.hc(2,null,null,null,null,B.a7,null,null,null,null)
D.axn=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axX=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azt=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD9=new A.V(0,3,0,3)
D.aDi=new A.V(10,0,10,88)
D.aDG=new A.V(12,6,12,10)
D.aDW=new A.V(14,8,14,6)
D.Wj=new A.V(18,12,18,12)
D.aFa=new A.V(20,8,20,20)
D.WX=new A.V(8,6,15,8)
D.aLe=new A.M(983222,"MaterialIcons",!1)
D.aMX=new A.a8(B.jQ,26,B.a6,null,null,null)
D.aN_=new A.a8(B.YF,18,null,null,null,null)
D.aNf=new A.a8(B.rK,14,B.a7,null,null,null)
D.aLv=new A.M(983420,"MaterialIcons",!1)
D.aO2=new A.a8(D.aLv,14,B.a7,null,null,null)
D.aJC=new A.M(62895,"MaterialIcons",!1)
D.aO6=new A.a8(D.aJC,14,B.a7,null,null,null)
D.aPA=new A.a8(B.rB,16,B.a7,null,null,null)
D.aRi=new A.a8(B.ji,20,null,null,null,null)
D.aRz=new A.a8(B.ha,16,null,null,null,null)
D.bOY=w([B.aO,B.X],x.O)
D.a08=new A.ak(B.aL,B.aR,B.I,D.bOY,null,null)
D.cAV=new A.aO("NGMY OS","14.2.1")
D.czI=new A.aO("VirtualDroid","13.8.4")
D.czH=new A.aO("NGMY OS","15.0.0")
D.cAt=new A.aO("VirtualDroid","14.1.2")
D.czF=new A.aO("NGMY Tab OS","12.9.7")
D.czD=new A.aO("NGMY OS","13.5.3")
D.czs=new A.aO("VirtualDroid","15.2.0")
D.cA4=new A.aO("NGMY OS","14.8.1")
D.cAz=new A.aO("NGMY Tab OS","13.2.4")
D.cB4=new A.aO("VirtualDroid","12.6.9")
D.czl=new A.aO("NGMY OS","16.0.1")
D.cza=new A.aO("VirtualDroid","14.9.0")
D.cAM=new A.aO("NGMY Tab OS","14.0.3")
D.czR=new A.aO("NGMY OS","13.1.8")
D.czk=new A.aO("VirtualDroid","13.4.5")
D.czC=new A.aO("NGMY OS","15.3.2")
D.cAA=new A.aO("NGMY Tab OS","12.4.1")
D.cAP=new A.aO("VirtualDroid","16.1.0")
D.cA3=new A.aO("NGMY OS","14.4.6")
D.cAW=new A.aO("VirtualDroid","15.0.8")
D.bOb=w([D.cAV,D.czI,D.czH,D.cAt,D.czF,D.czD,D.czs,D.cA4,D.cAz,D.cB4,D.czl,D.cza,D.cAM,D.czR,D.czk,D.czC,D.cAA,D.cAP,D.cA3,D.cAW],A.b4("a3<+(o,o)>"))
D.cDa=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCJ=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCE=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCN=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCA=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCP=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDc=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCB=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCI=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCR=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCz=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cD4=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cD1=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCH=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCZ=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCY=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCy=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCM=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCW=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cD0=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6I=w([D.cDa,D.cCJ,D.cCE,D.cCN,D.cCA,D.cCP,D.cDc,D.cCB,D.cCI,D.cCR,D.cCz,D.cD4,D.cD1,D.cCH,D.cCZ,D.cCY,D.cCy,D.cCM,D.cCW,D.cD0],A.b4("a3<+(o,o,a9,a9,o)>"))
D.bXe=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aeb=new C.K0(0,"youtube")
D.aec=new C.K0(1,"tiktok")
D.O_=new C.K0(2,"instagram")
D.aed=new C.K0(3,"facebook")
D.csv=new C.K0(4,"other")
D.cGP=new A.ac(3,null,null,null)
D.cHA=new A.i6(4,10,8,0.52,null)
D.cWw=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cL0=new A.aV(D.cWw,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.y,null)
D.cOc=new A.R(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWk=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2Y=new A.z("Open in YouTube",null,B.iZ,null,null,null,null,null,null,null,null,null)
D.d6T=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7H=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7M=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dem=new C.aM4(null)})();(function staticFields(){$.dyR=20
$.awT=null
$.bnI=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eky","Gy",()=>A.aCM(0))
w($,"ekz","P8",()=>A.aCM(null))})()};
(a=>{a["oCKFaX+45vdT3cXS6H/3HVAxEHU="]=a.current})($__dart_deferred_initializers__);