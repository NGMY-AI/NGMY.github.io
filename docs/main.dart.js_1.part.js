((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ef8(d,e){A.a7(d,!1).cB(A.eD(new C.dhl(e),!0,null,x.H))},
Zr(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zr=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P2()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.aj(new A.b8(n,B.aF,B.ax),t)
w=3
return A.b(A.dz(B.L,new C.dhk(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zr)
case 3:r=g
s.H$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVs(r)
if(q==null){d.F(x.q).f.R(D.cKK)
w=1
break}w=4
return A.b(A.bN(B.id,null,x.H),$async$Zr)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxz=n
p=C.dVm(n)
n=$.Gq()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlr(q)
d.F(x.q).f.R(A.bu(null,null,null,null,null,B.y,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zr,v)},
dxC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o8(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JY(d){return C.dVv(d)},
dVv(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JY=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$JY)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eQ(r,x.f)
k=A.dr(k,new C.bnJ(),k.$ti.j("F.E"),x.k)
j=A.P(k).j("ah<F.E>")
i=A.C(new A.ah(k,new C.bnK(),j),j.j("F.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dxE(q)
w=12
return A.b(C.JX(a3,p),$async$JY)
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
case 19:m=C.dxC(A.U(n,x.N,x.z))
l=C.dxE(A.a([m],x.e))
w=21
return A.b(C.JX(a3,l),$async$JY)
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
case 18:case 14:q=C.dVt()
w=22
return A.b(C.JX(a3,q),$async$JY)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JY,v)},
dxE(d){var w=A.Z(d).j("E<1,o>"),v=new A.E(d,new C.bnB(),w).ez(0),u=new A.E(d,new C.bnC(),w).ez(0),t=new A.E(d,new C.bnD(),w).ez(0),s=new A.E(d,new C.bnE(),w).ez(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dls(null,q,u,t,v,s));++q}return r},
awO(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$awO=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JY(d),$async$awO)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.df(t,new C.bnF(),s).ez(0)
p=r.df(t,new C.bnG(),s).ez(0)
o=r.df(t,new C.bnH(),s).ez(0)
n=r.df(t,new C.bnI(),s).ez(0)
m=C.dls(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JX(d,t),$async$awO)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$awO,v)},
JX(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JX=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$JX)
case 2:u=g
t=B.b.i(d)
s=J.b5(e,new C.bnA(),x.P)
s=A.C(s,s.$ti.j("a4.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aq(s,null)),$async$JX)
case 3:return A.f(null,v)}})
return A.h($async$JX,v)},
dVt(){var w,v=x.N,u=A.ba(v),t=A.ba(v),s=A.ba(v),r=A.ba(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dls(w,w,t,s,u,r)
return q},
dls(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jy(),h=d==null,g=D.a6y[B.l.a5(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6y[B.l.a5(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.E(p,new C.bnz(),A.Z(p).j("E<1,o>")).fv(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fv(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bh(B.l.hv(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a5(e,20)
k=D.bWT[w]
j=D.bNP[w]
return new C.o8("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bh(B.l.n(e+1),2,"0"),u,k,C.dVu(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a_())},
dVu(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bh(B.l.hv(d.bF(256),16),2,"0")
return B.h.fv(v)},
dhl:function dhl(d){this.a=d},
dhk:function dhk(d,e){this.a=d
this.b=e},
dhg:function dhg(d){this.a=d},
dhh:function dhh(d){this.a=d},
dhi:function dhi(d){this.a=d},
dhj:function dhj(d,e){this.a=d
this.b=e},
Nl:function Nl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o8:function o8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bnJ:function bnJ(){},
bnK:function bnK(){},
bnB:function bnB(){},
bnC:function bnC(){},
bnD:function bnD(){},
bnE:function bnE(){},
bnF:function bnF(){},
bnG:function bnG(){},
bnH:function bnH(){},
bnI:function bnI(){},
bnA:function bnA(){},
bnz:function bnz(){},
JW:function JW(d,e){this.c=d
this.a=e},
ag1:function ag1(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHG:function cHG(){},
cHF:function cHF(d,e){this.a=d
this.b=e},
cHD:function cHD(d){this.a=d},
cHE:function cHE(d,e){this.a=d
this.b=e},
cHH:function cHH(d){this.a=d},
cHL:function cHL(d){this.a=d},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHK:function cHK(d,e,f){this.a=d
this.b=e
this.c=f},
cHJ:function cHJ(d,e){this.a=d
this.b=e},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHN:function cHN(d){this.a=d},
WC:function WC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJB:function aJB(d,e){this.c=d
this.a=e},
JV:function JV(d,e){this.c=d
this.a=e},
aKE:function aKE(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHA:function cHA(d){this.a=d},
cHB:function cHB(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHz:function cHz(d,e){this.a=d
this.b=e},
cHw:function cHw(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHy:function cHy(d){this.a=d},
cHu:function cHu(d){this.a=d},
aRt:function aRt(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRu:function aRu(d,e,f){this.c=d
this.d=e
this.a=f},
aKK:function aKK(d,e){this.c=d
this.a=e},
aRs:function aRs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cX2:function cX2(d){this.a=d},
cX3:function cX3(d){this.a=d},
aM_:function aM_(d){this.a=d},
aFS:function aFS(d,e){this.c=d
this.a=e},
dVs(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVr(v)
if(u!=null)return new C.ql(w,C.dlq(u,!1),D.ae1,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVq(v)
if(t!=null)return new C.ql(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ae2,"TikTok",q)
s=C.dVp(w,v)
if(s!=null)return s
r=C.dVo(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.ql(w,w,D.csa,"Video",q)
return q},
dVp(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ql(d,"https://www.instagram.com/reel/"+w+u,D.NS,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ql(d,"https://www.instagram.com/p/"+w+u,D.NS,t,null)}return null},
dVo(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.ql(d,"https://www.facebook.com/plugins/video.php?href="+A.fi(2,d,B.bg,!1)+"&show_text=false&width=734",D.ae3,"Facebook",null)},
dVr(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dr(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVq(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dr(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
JZ:function JZ(d,e){this.a=d
this.b=e},
ql:function ql(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6r:function a6r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKF:function aKF(d,e){var _=this
_.d=$
_.d2$=d
_.aW$=e
_.c=_.a=null},
aM4:function aM4(d,e){this.c=d
this.a=e},
cMo:function cMo(d){this.a=d},
cMp:function cMp(d){this.a=d},
Fi:function Fi(d,e){this.c=d
this.a=e},
akN:function akN(){},
dxD(d,e,f,g,h,i){return new C.a6s(i,f,h,e,g,d)},
edI(d){var w=window
w.toString
A.hg(w,"message",new C.ddM(d),!1,x._)},
a6s:function a6s(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ag2:function ag2(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHO:function cHO(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHV:function cHV(d){this.a=d},
cHT:function cHT(d){this.a=d},
cHU:function cHU(d){this.a=d},
cHR:function cHR(d){this.a=d},
cHW:function cHW(d){this.a=d},
cHS:function cHS(d){this.a=d},
cHQ:function cHQ(d){this.a=d},
cHP:function cHP(d){this.a=d},
ddM:function ddM(d){this.a=d},
dVk(){var w,v,u
try{v=A.AI()
w=v.grS(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlq(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bnx(d){var w=A.ao(y.c,!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
dxy(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVl(d,e,f){var w,v,u=C.bnx(d)
if(u!=null){if(f){w=C.dVk()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxy(C.dlq(u,e))}return C.dxy(d)},
dVm(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVn(d){var w
if($.P2().a==null)return!1
w=$.Gq().a
return d>=w&&d<w+4},
dxB(){var w=$.awN
if(w!=null)w.ad(0)
$.awN=null
$.Gq().sv(0,0)},
dxA(){var w,v,u,t=$.P2()
if(t.a==null)return
w=$.awN
if(w!=null)w.ad(0)
v=$.dxz
if(v<=4){t=t.a
t.toString
C.dlr(t)
return}w=$.Gq()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlr(t)},
dlr(d){var w=$.awN
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
default:w=null}$.awN=A.dL(A.dq(0,0,0,0,0,w),C.edX())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nl.prototype={
C(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.w,1),r=A.X(this.d,B.a5,w,w,14)
return A.t(w,A.H(A.a([r,B.fS,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a6:B.c5,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.j,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.o8.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JW.prototype={
U(){return new C.ag1(A.a([],x.e))},
ge3(){return this.c}}
C.ag1.prototype={
a0(){var w=this
w.a7()
$.Gq().ap(0,w.gawY())
C.edI(w.gbmO())
w.YI()},
bmd(){if(this.c!=null)this.p(new C.cHG())},
bmP(){C.dxA()},
q(){$.Gq().Z(0,this.gawY())
C.dxB()
$.P2().sv(0,null)
this.a6()},
YI(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YI=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JY(t.a.c),$async$YI)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHF(t,s))
$.bny=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$YI,v)},
UK(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UK=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cHD(t))
w=3
return A.b(C.awO(t.a.c),$async$UK)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHE(t,s))
$.bny=J.a2(t.d)
t.c.F(x.q).f.R(A.bu(null,null,null,null,null,B.y,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UK,v)},
boH(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.eD(new C.cHH(d),!1,null,x.H))},
bph(){var w=this.c
w.toString
return C.Zr(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.bw,s=A.aL(v,v,v,v,B.L6,v,v,v,new C.cHL(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DJ(A.H(A.a([A.I(new A.J(B.j9,A.j(r,v,1,B.aD,v,v,v,A.l(v,v,u?B.e:B.W,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.V,!0,v,A.aP(!1,v,!0,new A.J(B.bf,A.X(B.h7,B.a5,v,v,28),v),B.cN,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpg(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a9)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.c_(!0,A.w(A.a([new A.J(D.WM,r,v),A.I(w.e?B.n6:new A.l7($.P2(),new C.cHM(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.aqK(B.a5,B.Gr,B.mm,D.d7e,w.e?v:new C.cHN(w)),v)}}
C.WC.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a5.l(0.18),B.dk,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6r(n,!0,!C.dVn(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jK,B.ne,u,u,22),B.aN,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.k,0,B.q),B.j,B.yI,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.V,!0,u,A.aP(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cl(p,A.fR(A.w(A.a([new C.aJB(o,u),A.I(n,1),A.t(u,A.H(A.a([A.X(B.B6,B.a5.l(0.85),u,u,9),D.cGv,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,D.aD3,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,u,u,new A.r(u,u,r,s,q,D.a_Z,B.p),u,u,u,B.ht,u,u,u),1),B.aN,A.j(o.b,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.aD,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a9)}}
C.aJB.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.j(B.h.gaw(this.c.c.split("-")),w,w,B.aD,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rI,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,B.WC,w,w,w)}}
C.JV.prototype={
U(){return new C.aKE()}}
C.aKE.prototype={
C(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bw,t=A.aL(w,w,w,w,B.L6,w,w,w,new C.cHA(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c_(!0,A.w(A.a([new A.J(D.WM,A.H(A.a([t,A.I(new A.DJ(A.H(A.a([A.I(new A.J(B.j9,A.j(s.b+" \xb7 "+s.c,w,1,B.aD,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.V,!0,w,A.aP(!1,w,!0,new A.J(B.bf,A.X(B.h7,B.a5,w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHB(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.I(new A.l7($.P2(),new C.cHC(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aRt.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a5.l(0.35),B.eW,28),new A.a9(0,B.G,B.A.l(0.45),B.d2,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxD(new A.dx(v+"_full_"+u,x.W),!1,u,!1,w.gaMA(),v+"_full")
w=v}else w=new C.aKK(t.r,s)}else w=new C.aFS(m,s)
else w=D.ddQ
return A.t(s,A.cl(n,A.fR(A.w(A.a([new C.aRu(m,l,s),A.I(w,1),new C.aRs(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,s,s,new A.r(s,s,o,q,p,D.a_Z,B.p),s,r*2.05,s,B.bF,s,s,r)}}
C.aRu.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dD(r)
r=A.hL(r)
w=new A.dE(q,r)
v=w.gJv()===0?12:w.gJv()
r=B.b.bh(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j6)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mR,s,s,s),B.bD,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aNX,B.er,D.aN9,B.er,D.aO0],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aN,A.H(A.a([A.X(B.KW,B.a5.l(0.9),s,s,12),B.er,A.I(A.j(u.c,s,s,B.aD,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.aw,s,s,s,s,s,D.aDQ,s,s,s)}}
C.aKK.prototype={
C(d){var w=null
return A.t(w,A.aJ(A.w(A.a([A.X(B.Ay,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.eN(D.aRn,D.cW3,this.c,A.es(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aG(B.a5.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.j,B.yI,w,w,w,w,w,w,w,w,1/0)}}
C.aRs.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awP(B.AW,"YouTube",s===0,r,new C.cX2(u))
s=u.awP(B.kp,"Device",s===1,r,new C.cX3(u))
w=r?"Power off":"Power on"
v=r?D.Zh:D.aLc
return A.t(t,A.H(A.a([q,B.an,s,B.bD,A.aL(t,t,t,t,A.X(v,r?B.bE:B.fO,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,D.aDA,t,t,t)},
awP(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bp
else w=f?B.a5:B.az
v=f&&g?B.a5.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aI(!1,B.V,!0,u,A.aP(!1,A.m(10),!0,new A.J(B.no,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a9),1)}}
C.aM_.prototype={
C(d){return D.ath}}
C.aFS.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.lK,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tE("Serial",u.c),q=w.tE("Model",u.d),p=w.tE("Device ID",u.e),o=w.tE("IMEI",u.r),n=w.tE("MAC",u.f),m=w.tE("OS",u.w+" "+u.x),l=w.tE("Location",u.y+", "+u.z),k=w.tE("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tE("Timezone",u.at)
u=u.ax
return A.eg(A.a([t,B.aN,s,B.ab,r,q,p,o,n,m,l,k,j,w.tE("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bf,v,v,B.al,!1)},
tE(d,e){var w=null
return new A.J(B.cX,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cC,A.j(e,w,w,w,w,w,w,D.cNZ,w,w,w)],x.p),B.F,B.i,B.k,0,B.q),w)}}
C.JZ.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ql.prototype={
gaMA(){var w=this.c
return w===D.ae1||w===D.ae2||w===D.NS||w===D.ae3}}
C.a6r.prototype={
U(){return new C.aKF(null,null)}}
C.aKF.prototype={
a0(){this.a7()
var w=A.bF(null,B.vb,null,1,null,this)
w.n7(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWm()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dp(t,new A.r(t,t,t,t,t,new A.ak(B.cI,B.cu,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bS),q=x.Y,p=u.d
p===$&&A.c()
p=A.cw(B.ic,p,t)
w=B.e.l(0.92)
q=A.aJ(new A.d3(new A.b2(p,new A.bl(0.72,1,q),q.j("b2<bk.T>")),!1,A.X(B.jK,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.ne
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM4(s,t),r,q,A.aQ(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aQ(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aQ(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aE(B.ak,t,B.bc,B.y,s,t)}}
C.aM4.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ko(u,B.N,new C.cMo(this),B.ca,B.bM,!0,w,w,new C.cMp(this),w)
return new C.Fi(v,w)}}
C.Fi.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uQ,B.SK],x.O),B.jK)
break
case 1:w=new A.aN(A.a([B.yI,D.axQ],x.O),B.lp)
break
case 2:w=new A.aN(A.a([D.azn,D.axg],x.O),B.AG)
break
case 3:w=new A.aN(A.a([B.W,B.du],x.O),B.AK)
break
case 4:w=new A.aN(A.a([B.aw,B.aM],x.O),B.pe)
break
default:w=u}v=w.a
return A.t(u,A.aJ(A.X(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.r(u,u,u,u,u,new A.ak(B.aL,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akN.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdK())
w.aW$=null
w.a6()},
by(){this.bP()
this.bK()
this.dL()}}
C.a6s.prototype={
U(){return new C.ag2()}}
C.ag2.prototype={
a7n(d,e){var w,v=C.bnx(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlq(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVl(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEp(){var w,v=this
if(v.w)return
v.p(new C.cHO(v))
w=v.e
if(w!=null)v.a7n(w,v.a.d)},
a0(){var w,v,u=this
u.a7()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aT()
u.d=w
try{$.Gs()
$.pG().uR(w,new C.cHX(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cHQ(v))
w=v.e
w.toString
v.a7n(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.Zx,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fR(A.aJ(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1N(n,B.tt,w)],v)
if(o.f)w.push(A.fR(A.aJ(new A.ac(28,28,D.aul,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bp,B.w,1)
q=A.X(B.L_,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eV(0,A.aI(!1,B.V,!0,n,A.aP(!1,n,!0,A.aJ(A.t(n,A.H(A.a([q,B.an,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.j,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.W7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEo(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a9)))}v=C.bnx(o.a.d)
if(v!=null)w.push(A.aQ(8,A.jo(D.aPs,D.d2B,new C.cHP(o),A.iN(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aE(B.ak,n,B.bc,B.y,w,n)}}
var z=a.updateTypes(["o(o8)","~()","JW(R)","o8(a_<@,@>)","a1(o8)","a_<o,@>(o8)","aB<~>()","JV(R)","l7<K>(R,ql?,q?)","WC(R,K)","tY(R,ql?,q?)","Fi(R,al,dK?)"])
C.dhl.prototype={
$1(d){return new C.JW(this.a,null)},
$S:z+2}
C.dhk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.W],j):A.a([B.e,B.av],j),h=A.a([new A.a9(0,B.G,B.a5.l(0.22),B.eW,32)],x.V),g=A.O(m?B.c8:B.a5.l(0.18),B.w,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.au.l(m?0.18:0.08)],j)
e=A.t(n,D.aMS,B.j,n,n,new A.r(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.w,1),n,n,n,B.as),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aN,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.am,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aL(n,n,n,n,A.X(B.d5,m?B.az:B.d0,n,n,n),n,n,n,new C.dhg(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.r(n,n,n,n,n,new A.ak(B.ad,B.ag,B.H,j,n,n),B.p),n,n,n,B.IM,n,n,n)
e=A.ee(B.cG,A.a([new C.Nl("YouTube",B.KV,m,n),new C.Nl("TikTok",B.lp,m,n),new C.Nl("Instagram",B.AG,m,n),new C.Nl("Facebook",B.AK,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cq:B.iz,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bw
r=A.X(B.fx,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aI
u=A.w(A.a([e,B.aS,A.aM(n,B.S,!0,n,!0,B.y,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.bb(4,q,B.X),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Ru),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.a8,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.aa,n,n,n,n)],v),B.at,B.i,B.k,0,B.q)
e=A.jo(D.aMV,D.d6n,new C.dhh(d),A.iN(n,n,n,n,n,n,n,n,n,n,n,m?B.bm:B.am,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dp(A.cl(f,A.w(A.a([j,new A.J(B.Wo,u,n),new A.J(D.aF7,A.H(A.a([e,B.bD,A.c8(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.ay,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhi(d),n,n),B.an,A.dN(D.aR6,D.d78,new C.dhj(d,w),A.bz(B.a5,n,n,n,B.e,n,D.W7,n,new A.bE(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.at,B.i,B.a1,0,B.q),B.aJ),new A.r(n,n,g,k,h,new A.ak(B.aL,B.aR,B.H,i,n,n),B.p),B.bS),n)},
$S:81}
C.dhg.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhh.prototype={
$0(){C.dxB()
$.P2().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dhi.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhj.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnJ.prototype={
$1(d){return C.dxC(A.U(d,x.N,x.z))},
$S:z+3}
C.bnK.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnB.prototype={
$1(d){return d.c},
$S:z+0}
C.bnC.prototype={
$1(d){return d.r},
$S:z+0}
C.bnD.prototype={
$1(d){return d.f},
$S:z+0}
C.bnE.prototype={
$1(d){return d.at},
$S:z+0}
C.bnF.prototype={
$1(d){return d.c},
$S:z+0}
C.bnG.prototype={
$1(d){return d.r},
$S:z+0}
C.bnH.prototype={
$1(d){return d.f},
$S:z+0}
C.bnI.prototype={
$1(d){return d.at},
$S:z+0}
C.bnA.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnz.prototype={
$1(d){return B.b.bh(B.l.hv(d,16),2,"0").toUpperCase()},
$S:84}
C.cHG.prototype={
$0(){},
$S:0}
C.cHF.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHD.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHE.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHH.prototype={
$1(d){return new C.JV(this.a,null)},
$S:z+7}
C.cHL.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cHM.prototype={
$3(d,e,f){return new A.l7($.Gq(),new C.cHK(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHK.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dd(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a5.l(0.12)
s=A.m(12)
r=A.O(B.a5.l(0.35),B.w,1)
q=A.X(B.jK,B.a5,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Gq().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.an,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d9,B.h4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cl(s,new A.j4(1.7777777777777777,C.dxD(new A.dx("fleet_master_"+r,x.W),!0,r,!0,j.gaMA(),"fleet_master"),k),B.aJ),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vS(0,B.y,k,B.E,k,k,k,k,!1,k,B.al,!1,A.a([new A.kx(new A.J(B.IE,A.w(u,B.F,B.i,B.k,0,B.q),k),k),new A.oi(D.aDd,A.aAQ(new A.nw(new C.cHJ(i,j),J.a2(i.d),!1,!0,!0,A.tr(),k),D.cHg),k)],w))},
$S:1680}
C.cHJ.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WC(v,e,J.a2(w.d),new C.cHI(w,v),this.b,null)},
$S:z+9}
C.cHI.prototype={
$0(){return this.a.boH(this.b)},
$S:0}
C.cHN.prototype={
$0(){this.a.UK()
return null},
$S:0}
C.cHA.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cHB.prototype={
$0(){C.Zr(this.a,$.bny)
return null},
$S:0}
C.cHC.prototype={
$3(d,e,f){return A.fc(new C.cHz(this.a,e))},
$S:z+10}
C.cHz.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.cz(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRt(u,s.a.c,s.e,s.d,new C.cHw(s),new C.cHx(s),new C.cHy(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),v,B.E,B.oR,v,v,B.al),v,v,v)},
$S:1681}
C.cHw.prototype={
$0(){var w=this.a.c
w.toString
C.Zr(w,$.bny)
return null},
$S:0}
C.cHx.prototype={
$1(d){var w=this.a
return w.p(new C.cHv(w,d))},
$S:33}
C.cHv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHy.prototype={
$0(){var w=this.a
return w.p(new C.cHu(w))},
$S:0}
C.cHu.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cX2.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cX3.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMo.prototype={
$3(d,e,f){return new C.Fi(this.a.c,null)},
$S:z+11}
C.cMp.prototype={
$3(d,e,f){if(f==null)return e
return new A.aE(B.ak,null,B.bc,B.y,A.a([new C.Fi(this.a.c,null),D.atw],x.p),null)},
$C:"$3",
$R:3,
$S:227}
C.cHO.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHX.prototype={
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
w.a7n(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hg(v,"load",new C.cHV(w),!1,u)
v=w.e
v.toString
A.hg(v,"error",new C.cHW(w),!1,u)
w=w.e
w.toString
return w},
$S:589}
C.cHV.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHT(w))
A.bN(B.O,new C.cHU(w),x.H)}},
$S:45}
C.cHT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHU.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cHR(w))},
$S:12}
C.cHR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cHS(w))},
$S:45}
C.cHS.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHQ.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHP.prototype={
$0(){var w,v=C.bnx(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kO.SA(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddM.prototype={
$1(d){var w,v,u,t,s=new A.ER([],[]).IK(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1682};(function aliases(){var w=C.akN.prototype
w.aWm=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag1.prototype,"gawY","bmd",1)
w(u,"gbmO","bmP",1)
w(u,"gbpg","bph",6)
w(C.ag2.prototype,"gbEo","bEp",1)
v(C,"edX","dxA",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yx,[C.dhl,C.dhk,C.bnJ,C.bnK,C.bnB,C.bnC,C.bnD,C.bnE,C.bnF,C.bnG,C.bnH,C.bnI,C.bnA,C.bnz,C.cHH,C.cHM,C.cHK,C.cHC,C.cHx,C.cMo,C.cMp,C.cHX,C.cHV,C.cHW,C.ddM])
v(A.a_T,[C.dhg,C.dhh,C.dhi,C.dhj,C.cHG,C.cHF,C.cHD,C.cHE,C.cHL,C.cHI,C.cHN,C.cHA,C.cHB,C.cHw,C.cHv,C.cHy,C.cHu,C.cX2,C.cX3,C.cHO,C.cHT,C.cHU,C.cHR,C.cHS,C.cHQ,C.cHP])
v(A.au,[C.Nl,C.WC,C.aJB,C.aRt,C.aRu,C.aKK,C.aRs,C.aM_,C.aFS,C.aM4,C.Fi])
v(A.al,[C.o8,C.ql])
v(A.ae,[C.JW,C.JV,C.a6r,C.a6s])
v(A.af,[C.ag1,C.aKE,C.akN,C.ag2])
v(A.a_U,[C.cHJ,C.cHz])
u(C.JZ,A.aGN)
u(C.aKF,C.akN)
w(C.akN,A.ed)})()
A.dB5(b.typeUniverse,JSON.parse('{"JW":{"ae":[],"q":[]},"WC":{"au":[],"q":[]},"JV":{"ae":[],"q":[]},"Nl":{"au":[],"q":[]},"ag1":{"af":["JW"]},"aJB":{"au":[],"q":[]},"aKE":{"af":["JV"]},"aRt":{"au":[],"q":[]},"aRu":{"au":[],"q":[]},"aKK":{"au":[],"q":[]},"aRs":{"au":[],"q":[]},"aM_":{"au":[],"q":[]},"aFS":{"au":[],"q":[]},"a6r":{"ae":[],"q":[]},"Fi":{"au":[],"q":[]},"aKF":{"af":["a6r"]},"aM4":{"au":[],"q":[]},"a6s":{"ae":[],"q":[]},"ag2":{"af":["a6s"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<o8>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ad<o8>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o3"),_:w("Da"),k:w("o8"),N:w("o"),Y:w("bl<aa>"),W:w("dx<o>"),J:w("l7<K>"),j:w("l7<ql?>"),E:w("xq<cL>"),q:w("Xo"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zh=new A.M(983224,"MaterialIcons",!1)
D.aPA=new A.a8(D.Zh,48,B.bp,null,null,null)
D.cNC=new A.S(!0,B.cq,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUY=new A.B("Powered off",null,D.cNC,null,null,null,null,null,null,null,null,null)
D.bKZ=w([D.aPA,B.Q,D.cUY],x.p)
D.aAB=new A.eJ(B.al,B.i,B.a1,B.o,null,B.q,null,0,D.bKZ,null)
D.ath=new A.dn(B.N,null,null,D.aAB,null)
D.cGV=new A.ac(18,18,B.Ss,null)
D.atw=new A.dn(B.N,null,null,D.cGV,null)
D.aul=new A.ha(2,null,null,null,null,B.a6,null,null,null,null)
D.axg=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axQ=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azn=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD3=new A.V(0,3,0,3)
D.aDd=new A.V(10,0,10,88)
D.aDA=new A.V(12,6,12,10)
D.aDQ=new A.V(14,8,14,6)
D.W7=new A.V(18,12,18,12)
D.aF7=new A.V(20,8,20,20)
D.WM=new A.V(8,6,15,8)
D.aLc=new A.M(983222,"MaterialIcons",!1)
D.aMS=new A.a8(B.jK,26,B.a5,null,null,null)
D.aMV=new A.a8(B.Yw,18,null,null,null,null)
D.aN9=new A.a8(B.rI,14,B.a6,null,null,null)
D.aLu=new A.M(983420,"MaterialIcons",!1)
D.aNX=new A.a8(D.aLu,14,B.a6,null,null,null)
D.aJC=new A.M(62895,"MaterialIcons",!1)
D.aO0=new A.a8(D.aJC,14,B.a6,null,null,null)
D.aPs=new A.a8(B.rA,16,B.a6,null,null,null)
D.aR6=new A.a8(B.jf,20,null,null,null,null)
D.aRn=new A.a8(B.h7,16,null,null,null,null)
D.bOB=w([B.aM,B.W],x.O)
D.a_Z=new A.ak(B.aL,B.aR,B.H,D.bOB,null,null)
D.cAz=new A.aN("NGMY OS","14.2.1")
D.czm=new A.aN("VirtualDroid","13.8.4")
D.czl=new A.aN("NGMY OS","15.0.0")
D.cA7=new A.aN("VirtualDroid","14.1.2")
D.czj=new A.aN("NGMY Tab OS","12.9.7")
D.czh=new A.aN("NGMY OS","13.5.3")
D.cz6=new A.aN("VirtualDroid","15.2.0")
D.czJ=new A.aN("NGMY OS","14.8.1")
D.cAd=new A.aN("NGMY Tab OS","13.2.4")
D.cAJ=new A.aN("VirtualDroid","12.6.9")
D.cz_=new A.aN("NGMY OS","16.0.1")
D.cyP=new A.aN("VirtualDroid","14.9.0")
D.cAq=new A.aN("NGMY Tab OS","14.0.3")
D.czv=new A.aN("NGMY OS","13.1.8")
D.cyZ=new A.aN("VirtualDroid","13.4.5")
D.czg=new A.aN("NGMY OS","15.3.2")
D.cAe=new A.aN("NGMY Tab OS","12.4.1")
D.cAt=new A.aN("VirtualDroid","16.1.0")
D.czI=new A.aN("NGMY OS","14.4.6")
D.cAA=new A.aN("VirtualDroid","15.0.8")
D.bNP=w([D.cAz,D.czm,D.czl,D.cA7,D.czj,D.czh,D.cz6,D.czJ,D.cAd,D.cAJ,D.cz_,D.cyP,D.cAq,D.czv,D.cyZ,D.czg,D.cAe,D.cAt,D.czI,D.cAA],A.b3("a3<+(o,o)>"))
D.cCP=new A.eH(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCn=new A.eH(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCi=new A.eH(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCr=new A.eH(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCe=new A.eH(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCt=new A.eH(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCR=new A.eH(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCf=new A.eH(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCm=new A.eH(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCv=new A.eH(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCd=new A.eH(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCJ=new A.eH(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCG=new A.eH(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCl=new A.eH(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCD=new A.eH(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCC=new A.eH(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCc=new A.eH(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCq=new A.eH(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCA=new A.eH(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCF=new A.eH(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6y=w([D.cCP,D.cCn,D.cCi,D.cCr,D.cCe,D.cCt,D.cCR,D.cCf,D.cCm,D.cCv,D.cCd,D.cCJ,D.cCG,D.cCl,D.cCD,D.cCC,D.cCc,D.cCq,D.cCA,D.cCF],A.b3("a3<+(o,o,aa,aa,o)>"))
D.bWT=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ae1=new C.JZ(0,"youtube")
D.ae2=new C.JZ(1,"tiktok")
D.NS=new C.JZ(2,"instagram")
D.ae3=new C.JZ(3,"facebook")
D.csa=new C.JZ(4,"other")
D.cGv=new A.ac(3,null,null,null)
D.cHg=new A.i6(4,10,8,0.52,null)
D.cWf=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKK=new A.aU(D.cWf,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cNZ=new A.S(!0,B.e,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cW3=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2B=new A.B("Open in YouTube",null,B.iX,null,null,null,null,null,null,null,null,null)
D.d6n=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d78=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7e=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddQ=new C.aM_(null)})();(function staticFields(){$.dxz=20
$.awN=null
$.bny=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiW","Gq",()=>A.aCF(0))
w($,"eiX","P2",()=>A.aCF(null))})()};
(a=>{a["Oj98PhWN1iGkRy7qJDdeNYwiAaQ="]=a.current})($__dart_deferred_initializers__);