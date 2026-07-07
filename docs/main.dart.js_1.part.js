((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egm(d,e){A.a7(d,!1).cA(A.eE(new C.dii(e),!0,null,x.H))},
Zp(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Zp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.P3()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dih(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zp)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dWz(r)
if(q==null){d.G(x.q).f.R(D.cKX)
w=1
break}w=4
return A.b(A.bN(B.id,null,x.H),$async$Zp)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dyB=n
p=C.dWt(n)
n=$.Gr()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dmn(q)
d.G(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zp,v)},
dyE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
JV(d){return C.dWC(d)},
dWC(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JV=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$JV)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aD(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eR(r,x.f)
k=A.dt(k,new C.bnH(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ah<G.E>")
i=A.C(new A.ah(k,new C.bnI(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dyG(q)
w=12
return A.b(C.JU(a3,p),$async$JV)
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
n=B.H.aD(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dyE(A.U(n,x.N,x.z))
l=C.dyG(A.a([m],x.e))
w=21
return A.b(C.JU(a3,l),$async$JV)
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
case 18:case 14:q=C.dWA()
w=22
return A.b(C.JU(a3,q),$async$JV)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JV,v)},
dyG(d){var w=A.Y(d).j("D<1,o>"),v=new A.D(d,new C.bnz(),w).ey(0),u=new A.D(d,new C.bnA(),w).ey(0),t=new A.D(d,new C.bnB(),w).ey(0),s=new A.D(d,new C.bnC(),w).ey(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dmo(null,q,u,t,v,s));++q}return r},
awL(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JV(d),$async$awL)
case 3:t=f
s=x.N
r=J.cf(t)
q=r.df(t,new C.bnD(),s).ey(0)
p=r.df(t,new C.bnE(),s).ey(0)
o=r.df(t,new C.bnF(),s).ey(0)
n=r.df(t,new C.bnG(),s).ey(0)
m=C.dmo(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JU(d,t),$async$awL)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awL,v)},
JU(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$JU)
case 2:u=g
t=B.b.i(d)
s=J.b5(e,new C.bny(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ao(s,null)),$async$JU)
case 3:return A.h(null,v)}})
return A.i($async$JU,v)},
dWA(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dx(20,x.k)
for(w=0;w<20;++w)q[w]=C.dmo(w,w,t,s,u,r)
return q},
dmo(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jB(),h=d==null,g=D.a6F[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6F[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.D(p,new C.bnx(),A.Y(p).j("D<1,o>")).fv(0)
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
k=D.bXa[w]
j=D.bO7[w]
return new C.ob("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dWB(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a_())},
dWB(d,e){var w,v=J.dx(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hu(d.bF(256),16),2,"0")
return B.h.fv(v)},
dii:function dii(d){this.a=d},
dih:function dih(d,e){this.a=d
this.b=e},
did:function did(d){this.a=d},
die:function die(d){this.a=d},
dif:function dif(d){this.a=d},
dig:function dig(d,e){this.a=d
this.b=e},
Nk:function Nk(d,e,f,g){var _=this
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
bnH:function bnH(){},
bnI:function bnI(){},
bnz:function bnz(){},
bnA:function bnA(){},
bnB:function bnB(){},
bnC:function bnC(){},
bnD:function bnD(){},
bnE:function bnE(){},
bnF:function bnF(){},
bnG:function bnG(){},
bny:function bny(){},
bnx:function bnx(){},
JT:function JT(d,e){this.c=d
this.a=e},
ag5:function ag5(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHK:function cHK(){},
cHJ:function cHJ(d,e){this.a=d
this.b=e},
cHH:function cHH(d){this.a=d},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHL:function cHL(d){this.a=d},
cHP:function cHP(d){this.a=d},
cHQ:function cHQ(d,e){this.a=d
this.b=e},
cHO:function cHO(d,e,f){this.a=d
this.b=e
this.c=f},
cHN:function cHN(d,e){this.a=d
this.b=e},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHR:function cHR(d){this.a=d},
WF:function WF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJz:function aJz(d,e){this.c=d
this.a=e},
JS:function JS(d,e){this.c=d
this.a=e},
aKz:function aKz(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHE:function cHE(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHG:function cHG(d){this.a=d},
cHD:function cHD(d,e){this.a=d
this.b=e},
cHA:function cHA(d){this.a=d},
cHB:function cHB(d){this.a=d},
cHz:function cHz(d,e){this.a=d
this.b=e},
cHC:function cHC(d){this.a=d},
cHy:function cHy(d){this.a=d},
aRo:function aRo(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRp:function aRp(d,e,f){this.c=d
this.d=e
this.a=f},
aKF:function aKF(d,e){this.c=d
this.a=e},
aRn:function aRn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cX5:function cX5(d){this.a=d},
cX6:function cX6(d){this.a=d},
aLV:function aLV(d){this.a=d},
aFQ:function aFQ(d,e){this.c=d
this.a=e},
dWz(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dWy(v)
if(u!=null)return new C.qm(w,C.dmm(u,!1),D.ae8,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dWx(v)
if(t!=null)return new C.qm(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ae9,"TikTok",q)
s=C.dWw(w,v)
if(s!=null)return s
r=C.dWv(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qm(w,w,D.csr,"Video",q)
return q},
dWw(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).de(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qm(d,"https://www.instagram.com/reel/"+w+u,D.O0,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).de(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qm(d,"https://www.instagram.com/p/"+w+u,D.O0,t,null)}return null},
dWv(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qm(d,"https://www.facebook.com/plugins/video.php?href="+A.fh(2,d,B.bd,!1)+"&show_text=false&width=734",D.aea,"Facebook",null)},
dWy(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].de(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dWx(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).de(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).de(d)
return w==null?null:w.b[1]},
JW:function JW(d,e){this.a=d
this.b=e},
qm:function qm(d,e,f,g,h){var _=this
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
aKA:function aKA(d,e){var _=this
_.d=$
_.cX$=d
_.aW$=e
_.c=_.a=null},
aM_:function aM_(d,e){this.c=d
this.a=e},
cMr:function cMr(d){this.a=d},
cMs:function cMs(d){this.a=d},
Fj:function Fj(d,e){this.c=d
this.a=e},
akQ:function akQ(){},
dyF(d,e,f,g,h,i){return new C.a6u(i,f,h,e,g,d)},
eeU(d){var w=window
w.toString
A.hi(w,"message",new C.deb(d),!1,x._)},
a6u:function a6u(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ag6:function ag6(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHS:function cHS(d){this.a=d},
cI0:function cI0(d){this.a=d},
cHZ:function cHZ(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHY:function cHY(d){this.a=d},
cHV:function cHV(d){this.a=d},
cI_:function cI_(d){this.a=d},
cHW:function cHW(d){this.a=d},
cHU:function cHU(d){this.a=d},
cHT:function cHT(d){this.a=d},
deb:function deb(d){this.a=d},
dWr(){var w,v,u
try{v=A.AI()
w=v.grT(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dmm(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bn(w,"&")},
bnv(d){var w=A.ao(y.c,!0,!1,!1,!1).de(d)
return w==null?null:w.b[1]},
dyA(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWs(d,e,f){var w,v,u=C.bnv(d)
if(u!=null){if(f){w=C.dWr()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dyA(C.dmm(u,e))}return C.dyA(d)},
dWt(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dWu(d){var w
if($.P3().a==null)return!1
w=$.Gr().a
return d>=w&&d<w+4},
dyD(){var w=$.awK
if(w!=null)w.ad(0)
$.awK=null
$.Gr().sv(0,0)},
dyC(){var w,v,u,t=$.P3()
if(t.a==null)return
w=$.awK
if(w!=null)w.ad(0)
v=$.dyB
if(v<=4){t=t.a
t.toString
C.dmn(t)
return}w=$.Gr()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dmn(t)},
dmn(d){var w=$.awK
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
default:w=null}$.awK=A.dM(A.ds(0,0,0,0,0,w),C.ef8())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nk.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.X(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fT,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c2,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a0,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fr,w,w,w)}}
C.ob.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JT.prototype={
U(){return new C.ag5(A.a([],x.e))},
ge0(){return this.c}}
C.ag5.prototype={
a0(){var w=this
w.a6()
$.Gr().aq(0,w.gax0())
C.eeU(w.gbmJ())
w.YG()},
bm7(){if(this.c!=null)this.p(new C.cHK())},
bmK(){C.dyC()},
q(){$.Gr().Z(0,this.gax0())
C.dyD()
$.P3().sv(0,null)
this.a5()},
YG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JV(t.a.c),$async$YG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHJ(t,s))
$.bnw=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
UG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cHH(t))
w=3
return A.b(C.awL(t.a.c),$async$UG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHI(t,s))
$.bnw=J.a4(t.d)
t.c.G(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UG,v)},
boE(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.eE(new C.cHL(d),!1,null,x.H))},
bpe(){var w=this.c
w.toString
return C.Zp(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fc:B.bv,s=A.aM(v,v,v,v,B.Lh,v,v,v,new C.cHP(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DK(A.H(A.a([A.I(new A.J(B.j8,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.X,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.V,!0,v,A.aS(!1,v,!0,new A.J(B.bb,A.X(B.h9,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpd(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c6(!0,A.w(A.a([new A.J(D.WU,r,v),A.I(w.e?B.n6:new A.lc($.P3(),new C.cHQ(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0)
return A.c8(v,t,s,v,!1,!1,A.aqN(B.a6,B.Gv,B.mk,D.d7K,w.e?v:new C.cHR(w)),v)}}
C.WF.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a6.l(0.18),B.dl,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6t(n,!0,!C.dWu(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jO,B.ne,u,u,22),B.aN,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yN,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.V,!0,u,A.aS(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cg(p,A.fT(A.w(A.a([new C.aJz(o,u),A.I(n,1),A.t(u,A.H(A.a([A.X(B.Bc,B.a6.l(0.85),u,u,9),D.cGL,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aD7,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a05,B.p),u,u,u,B.fN,u,u,u),1),B.aN,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJz.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gaw(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rJ,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.WK,w,w,w)}}
C.JS.prototype={
U(){return new C.aKz()}}
C.aKz.prototype={
C(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fc:B.bv,t=A.aM(w,w,w,w,B.Lh,w,w,w,new C.cHE(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c8(w,u,A.c6(!0,A.w(A.a([new A.J(D.WU,A.H(A.a([t,A.I(new A.DK(A.H(A.a([A.I(new A.J(B.j8,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.V,!0,w,A.aS(!1,w,!0,new A.J(B.bb,A.X(B.h9,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHF(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.lc($.P3(),new C.cHG(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0),w,!1,!1,w,w)}}
C.aRo.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a6.l(0.35),B.f4,28),new A.a9(0,B.G,B.A.l(0.45),B.d9,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dyF(new A.dy(v+"_full_"+u,x.W),!1,u,!1,w.gaMD(),v+"_full")
w=v}else w=new C.aKF(t.r,s)}else w=new C.aFQ(m,s)
else w=D.dek
return A.t(s,A.cg(n,A.fT(A.w(A.a([new C.aRp(m,l,s),A.I(w,1),new C.aRn(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a05,B.p),s,r*2.05,s,B.bR,s,s,r)}}
C.aRp.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dC(r)
r=A.hL(r)
w=new A.dD(q,r)
v=w.gJr()===0?12:w.gJr()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h4:B.j6)===B.h4?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mP,s,s,s),B.bC,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNZ,B.ep,D.aNb,B.ep,D.aO2],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aN,A.H(A.a([A.X(B.L6,B.a6.l(0.9),s,s,12),B.ep,A.I(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDV,s,s,s)}}
C.aKF.prototype={
C(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.X(B.AH,B.e.l(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aRv,D.cWh,this.c,A.ej(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a0,0,B.q),w,w,w),B.k,B.yN,w,w,w,w,w,w,w,w,1/0)}}
C.aRn.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awS(B.B1,"YouTube",s===0,r,new C.cX5(u))
s=u.awS(B.lo,"Device",s===1,r,new C.cX6(u))
w=r?"Power off":"Power on"
v=r?D.Zn:D.aLd
return A.t(t,A.H(A.a([q,B.am,s,B.bC,A.aM(t,t,t,t,A.X(v,r?B.bD:B.fy,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aDF,t,t,t)},
awS(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bo
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.V,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.no,A.w(A.a([A.X(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLV.prototype={
C(d){return D.atp}}
C.aFQ.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lJ,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tE("Serial",u.c),q=w.tE("Model",u.d),p=w.tE("Device ID",u.e),o=w.tE("IMEI",u.r),n=w.tE("MAC",u.f),m=w.tE("OS",u.w+" "+u.x),l=w.tE("Location",u.y+", "+u.z),k=w.tE("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tE("Timezone",u.at)
u=u.ax
return A.eg(A.a([t,B.aN,s,B.ab,r,q,p,o,n,m,l,k,j,w.tE("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bb,v,v,B.aj,!1)},
tE(d,e){var w=null
return new A.J(B.cR,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cG,A.d(e,w,w,w,w,w,w,D.cO8,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JW.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qm.prototype={
gaMD(){var w=this.c
return w===D.ae8||w===D.ae9||w===D.O0||w===D.aea}}
C.a6t.prototype={
U(){return new C.aKA(null,null)}}
C.aKA.prototype={
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
q=A.aI(new A.d3(new A.b3(p,new A.bm(0.72,1,q),q.j("b3<bl.T>")),!1,A.X(B.jO,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.ne
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM_(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bc,B.y,s,t)}}
C.aM_.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ko(u,new C.cMr(this),B.c8,B.bM,!0,w,w,new C.cMs(this),w)
return new C.Fj(v,w)}}
C.Fj.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uT,B.SS],x.O),B.jO)
break
case 1:w=new A.aO(A.a([B.yN,D.axV],x.O),B.lp)
break
case 2:w=new A.aO(A.a([D.azr,D.axl],x.O),B.AO)
break
case 3:w=new A.aO(A.a([B.X,B.du],x.O),B.AR)
break
case 4:w=new A.aO(A.a([B.az,B.aO],x.O),B.pi)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.X(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aL,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akQ.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdE())
w.aW$=null
w.a5()},
by(){this.bP()
this.bK()
this.dF()}}
C.a6u.prototype={
U(){return new C.ag6()}}
C.ag6.prototype={
a7r(d,e){var w,v=C.bnv(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dmm(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dWs(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEr(){var w,v=this
if(v.w)return
v.p(new C.cHS(v))
w=v.e
if(w!=null)v.a7r(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.Gt()
$.pH().uR(w,new C.cI0(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cHU(v))
w=v.e
w.toString
v.a7r(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZE,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aI(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1M(n,B.tu,w)],v)
if(o.f)w.push(A.fT(A.aI(new A.ac(28,28,D.aut,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bo,B.w,1)
q=A.X(B.La,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eW(0,A.aL(!1,B.V,!0,n,A.aS(!1,n,!0,A.aI(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a0,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wg,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEq(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bnv(o.a.d)
if(v!=null)w.push(A.aT(8,A.js(D.aPw,D.d2X,new C.cHT(o),A.iM(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fr,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.al,n,B.bc,B.y,w,n)}}
var z=a.updateTypes(["o(ob)","~()","JT(R)","ob(a_<@,@>)","a1(ob)","a_<o,@>(ob)","aB<~>()","JS(R)","lc<K>(R,qm?,q?)","WF(R,K)","u_(R,qm?,q?)","Fj(R,al,dR?)"])
C.dii.prototype={
$1(d){return new C.JT(this.a,null)},
$S:z+2}
C.dih.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dW,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.G,B.a6.l(0.22),B.f4,32)],x.V),g=A.O(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMT,B.k,n,n,new A.r(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aN,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aM(n,n,n,n,A.X(B.d6,m?B.ax:B.d1,n,n,n),n,n,n,new C.did(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ae,B.ag,B.I,j,n,n),B.p),n,n,n,B.IT,n,n,n)
e=A.ee(B.cE,A.a([new C.Nk("YouTube",B.L5,m,n),new C.Nk("TikTok",B.lp,m,n),new C.Nk("Instagram",B.AO,m,n),new C.Nk("Facebook",B.AR,m,n)],v),B.cl,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cm:B.hH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bv
r=A.X(B.fv,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aJ(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.br(n,new A.b9(4,q,B.Y),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.RD),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.js(D.aMW,D.d6R,new C.die(d),A.iM(n,n,n,n,n,n,n,n,n,n,n,m?B.bj:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dr(A.cg(f,A.w(A.a([j,new A.J(B.Wv,u,n),new A.J(D.aF9,A.H(A.a([e,B.bC,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dif(d),n,n),B.am,A.dK(D.aRe,D.d7F,new C.dig(d,w),A.bw(B.a6,n,n,n,B.e,n,D.Wg,n,new A.bF(A.m(14),B.Y),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a0,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aL,B.aR,B.I,i,n,n),B.p),B.bU),n)},
$S:84}
C.did.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.die.prototype={
$0(){C.dyD()
$.P3().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dif.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dig.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnH.prototype={
$1(d){return C.dyE(A.U(d,x.N,x.z))},
$S:z+3}
C.bnI.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnz.prototype={
$1(d){return d.c},
$S:z+0}
C.bnA.prototype={
$1(d){return d.r},
$S:z+0}
C.bnB.prototype={
$1(d){return d.f},
$S:z+0}
C.bnC.prototype={
$1(d){return d.at},
$S:z+0}
C.bnD.prototype={
$1(d){return d.c},
$S:z+0}
C.bnE.prototype={
$1(d){return d.r},
$S:z+0}
C.bnF.prototype={
$1(d){return d.f},
$S:z+0}
C.bnG.prototype={
$1(d){return d.at},
$S:z+0}
C.bny.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnx.prototype={
$1(d){return B.b.bi(B.l.hu(d,16),2,"0").toUpperCase()},
$S:82}
C.cHK.prototype={
$0(){},
$S:0}
C.cHJ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHH.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHI.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHL.prototype={
$1(d){return new C.JS(this.a,null)},
$S:z+7}
C.cHP.prototype={
$0(){return A.a7(this.a,!1).ex()},
$S:0}
C.cHQ.prototype={
$3(d,e,f){return new A.lc($.Gr(),new C.cHO(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHO.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dc(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.X(B.jO,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gr().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.fM,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cg(s,new A.j4(1.7777777777777777,C.dyF(new A.dy("fleet_master_"+r,x.W),!0,r,!0,j.gaMD(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vU(0,B.y,k,B.D,k,k,k,k,!1,k,B.aj,!1,A.a([new A.kx(new A.J(B.IJ,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ol(D.aDh,A.aAO(new A.nx(new C.cHN(i,j),J.a4(i.d),!1,!0,!0,A.tt(),k),D.cHw),k)],w))},
$S:1688}
C.cHN.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WF(v,e,J.a4(w.d),new C.cHM(w,v),this.b,null)},
$S:z+9}
C.cHM.prototype={
$0(){return this.a.boE(this.b)},
$S:0}
C.cHR.prototype={
$0(){this.a.UG()
return null},
$S:0}
C.cHE.prototype={
$0(){return A.a7(this.a,!1).ex()},
$S:0}
C.cHF.prototype={
$0(){C.Zp(this.a,$.bnw)
return null},
$S:0}
C.cHG.prototype={
$3(d,e,f){return A.fo(new C.cHD(this.a,e))},
$S:z+10}
C.cHD.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cn(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRo(u,s.a.c,s.e,s.d,new C.cHA(s),new C.cHB(s),new C.cHC(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oV,v,v,B.aj),v,v,v)},
$S:1689}
C.cHA.prototype={
$0(){var w=this.a.c
w.toString
C.Zp(w,$.bnw)
return null},
$S:0}
C.cHB.prototype={
$1(d){var w=this.a
return w.p(new C.cHz(w,d))},
$S:34}
C.cHz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHC.prototype={
$0(){var w=this.a
return w.p(new C.cHy(w))},
$S:0}
C.cHy.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cX5.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cX6.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMr.prototype={
$3(d,e,f){return new C.Fj(this.a.c,null)},
$S:z+11}
C.cMs.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bc,B.y,A.a([new C.Fj(this.a.c,null),D.atE],x.p),null)},
$C:"$3",
$R:3,
$S:223}
C.cHS.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cI0.prototype={
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
A.hi(v,"load",new C.cHZ(w),!1,u)
v=w.e
v.toString
A.hi(v,"error",new C.cI_(w),!1,u)
w=w.e
w.toString
return w},
$S:590}
C.cHZ.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHX(w))
A.bN(B.O,new C.cHY(w),x.H)}},
$S:45}
C.cHX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cHV(w))},
$S:12}
C.cHV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cHW(w))},
$S:45}
C.cHW.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHU.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHT.prototype={
$0(){var w,v=C.bnv(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kP.Sv(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.deb.prototype={
$1(d){var w,v,u,t,s=new A.ES([],[]).IG(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aD(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1690};(function aliases(){var w=C.akQ.prototype
w.aWo=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag5.prototype,"gax0","bm7",1)
w(u,"gbmJ","bmK",1)
w(u,"gbpd","bpe",6)
w(C.ag6.prototype,"gbEq","bEr",1)
v(C,"ef8","dyC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yA,[C.dii,C.dih,C.bnH,C.bnI,C.bnz,C.bnA,C.bnB,C.bnC,C.bnD,C.bnE,C.bnF,C.bnG,C.bny,C.bnx,C.cHL,C.cHQ,C.cHO,C.cHG,C.cHB,C.cMr,C.cMs,C.cI0,C.cHZ,C.cI_,C.deb])
v(A.a_S,[C.did,C.die,C.dif,C.dig,C.cHK,C.cHJ,C.cHH,C.cHI,C.cHP,C.cHM,C.cHR,C.cHE,C.cHF,C.cHA,C.cHz,C.cHC,C.cHy,C.cX5,C.cX6,C.cHS,C.cHX,C.cHY,C.cHV,C.cHW,C.cHU,C.cHT])
v(A.au,[C.Nk,C.WF,C.aJz,C.aRo,C.aRp,C.aKF,C.aRn,C.aLV,C.aFQ,C.aM_,C.Fj])
v(A.al,[C.ob,C.qm])
v(A.ae,[C.JT,C.JS,C.a6t,C.a6u])
v(A.af,[C.ag5,C.aKz,C.akQ,C.ag6])
v(A.a_T,[C.cHN,C.cHD])
u(C.JW,A.aGL)
u(C.aKA,C.akQ)
w(C.akQ,A.ea)})()
A.dC8(b.typeUniverse,JSON.parse('{"JT":{"ae":[],"q":[]},"WF":{"au":[],"q":[]},"JS":{"ae":[],"q":[]},"Nk":{"au":[],"q":[]},"ag5":{"af":["JT"]},"aJz":{"au":[],"q":[]},"aKz":{"af":["JS"]},"aRo":{"au":[],"q":[]},"aRp":{"au":[],"q":[]},"aKF":{"au":[],"q":[]},"aRn":{"au":[],"q":[]},"aLV":{"au":[],"q":[]},"aFQ":{"au":[],"q":[]},"a6t":{"ae":[],"q":[]},"Fj":{"au":[],"q":[]},"aKA":{"af":["a6t"]},"aM_":{"au":[],"q":[]},"a6u":{"ae":[],"q":[]},"ag6":{"af":["a6u"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<ob>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ad<ob>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o6"),_:w("D9"),k:w("ob"),N:w("o"),Y:w("bm<aa>"),W:w("dy<o>"),J:w("lc<K>"),j:w("lc<qm?>"),E:w("xs<cL>"),q:w("Xr"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zn=new A.M(983224,"MaterialIcons",!1)
D.aPE=new A.a8(D.Zn,48,B.bo,null,null,null)
D.cNN=new A.S(!0,B.cm,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVa=new A.z("Powered off",null,D.cNN,null,null,null,null,null,null,null,null,null)
D.bLg=w([D.aPE,B.Q,D.cVa],x.p)
D.aAG=new A.eK(B.aj,B.i,B.a0,B.o,null,B.q,null,0,D.bLg,null)
D.atp=new A.dq(B.T,null,null,D.aAG,null)
D.cHa=new A.ac(18,18,B.SA,null)
D.atE=new A.dq(B.T,null,null,D.cHa,null)
D.aut=new A.hc(2,null,null,null,null,B.a7,null,null,null,null)
D.axl=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axV=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azr=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD7=new A.V(0,3,0,3)
D.aDh=new A.V(10,0,10,88)
D.aDF=new A.V(12,6,12,10)
D.aDV=new A.V(14,8,14,6)
D.Wg=new A.V(18,12,18,12)
D.aF9=new A.V(20,8,20,20)
D.WU=new A.V(8,6,15,8)
D.aLd=new A.M(983222,"MaterialIcons",!1)
D.aMT=new A.a8(B.jO,26,B.a6,null,null,null)
D.aMW=new A.a8(B.YC,18,null,null,null,null)
D.aNb=new A.a8(B.rJ,14,B.a7,null,null,null)
D.aLu=new A.M(983420,"MaterialIcons",!1)
D.aNZ=new A.a8(D.aLu,14,B.a7,null,null,null)
D.aJD=new A.M(62895,"MaterialIcons",!1)
D.aO2=new A.a8(D.aJD,14,B.a7,null,null,null)
D.aPw=new A.a8(B.rA,16,B.a7,null,null,null)
D.aRe=new A.a8(B.jg,20,null,null,null,null)
D.aRv=new A.a8(B.h9,16,null,null,null,null)
D.bOU=w([B.aO,B.X],x.O)
D.a05=new A.ak(B.aL,B.aR,B.I,D.bOU,null,null)
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
D.bO7=w([D.cAR,D.czE,D.czD,D.cAp,D.czB,D.czz,D.czo,D.cA0,D.cAv,D.cB0,D.czh,D.cz6,D.cAI,D.czN,D.czg,D.czy,D.cAw,D.cAL,D.cA_,D.cAS],A.b4("a3<+(o,o)>"))
D.cD6=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCF=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCA=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCJ=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCw=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCL=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cD8=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCx=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCE=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCN=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCv=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cD0=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCY=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCD=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCV=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCU=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCu=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCI=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCS=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCX=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6F=w([D.cD6,D.cCF,D.cCA,D.cCJ,D.cCw,D.cCL,D.cD8,D.cCx,D.cCE,D.cCN,D.cCv,D.cD0,D.cCY,D.cCD,D.cCV,D.cCU,D.cCu,D.cCI,D.cCS,D.cCX],A.b4("a3<+(o,o,aa,aa,o)>"))
D.bXa=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ae8=new C.JW(0,"youtube")
D.ae9=new C.JW(1,"tiktok")
D.O0=new C.JW(2,"instagram")
D.aea=new C.JW(3,"facebook")
D.csr=new C.JW(4,"other")
D.cGL=new A.ac(3,null,null,null)
D.cHw=new A.i8(4,10,8,0.52,null)
D.cWt=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKX=new A.aV(D.cWt,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cO8=new A.S(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWh=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2X=new A.z("Open in YouTube",null,B.iY,null,null,null,null,null,null,null,null,null)
D.d6R=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7F=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7K=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dek=new C.aLV(null)})();(function staticFields(){$.dyB=20
$.awK=null
$.bnw=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eka","Gr",()=>A.aCD(0))
w($,"ekb","P3",()=>A.aCD(null))})()};
(a=>{a["sDruqxT4lNJp6JZLhHo7Huu1EYY="]=a.current})($__dart_deferred_initializers__);