((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eia(d,e){A.a7(d,!1).cB(A.eE(new C.dkh(e),!0,null,x.H))},
Zw(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Zw=A.d(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.P5()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ao()
s=new A.aj(new A.b8(n,B.aF,B.ax),t)
w=3
return A.b(A.dB(B.L,new C.dkg(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zw)
case 3:r=g
s.H$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dYr(r)
if(q==null){d.F(x.q).f.R(D.cKM)
w=1
break}w=4
return A.b(A.bP(B.id,null,x.H),$async$Zw)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dAv=n
p=C.dYl(n)
n=$.Gs()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.don(q)
d.F(x.q).f.R(A.bw(null,null,null,null,null,B.y,null,A.e("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zw,v)},
dAy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oa(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K_(d){return C.dYu(d)},
dYu(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K_=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$K_)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cQ(r)?10:11
break
case 10:k=J.eS(r,x.f)
k=A.dt(k,new C.bnO(),k.$ti.j("F.E"),x.k)
j=A.P(k).j("ah<F.E>")
i=A.C(new A.ah(k,new C.bnP(),j),j.j("F.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dAA(q)
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
case 9:case 5:o=A.aK(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dAy(A.U(n,x.N,x.z))
l=C.dAA(A.a([m],x.e))
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
case 18:case 14:q=C.dYs()
w=22
return A.b(C.JZ(a3,q),$async$K_)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K_,v)},
dAA(d){var w=A.Z(d).j("E<1,o>"),v=new A.E(d,new C.bnG(),w).ez(0),u=new A.E(d,new C.bnH(),w).ez(0),t=new A.E(d,new C.bnI(),w).ez(0),s=new A.E(d,new C.bnJ(),w).ez(0),r=A.bk(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.doo(null,q,u,t,v,s));++q}return r},
awR(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awR=A.d(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K_(d),$async$awR)
case 3:t=f
s=x.N
r=J.ce(t)
q=r.df(t,new C.bnK(),s).ez(0)
p=r.df(t,new C.bnL(),s).ez(0)
o=r.df(t,new C.bnM(),s).ez(0)
n=r.df(t,new C.bnN(),s).ez(0)
m=C.doo(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JZ(d,t),$async$awR)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awR,v)},
JZ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JZ=A.d(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$JZ)
case 2:u=g
t=B.b.i(d)
s=J.b5(e,new C.bnF(),x.P)
s=A.C(s,s.$ti.j("a4.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aq(s,null)),$async$JZ)
case 3:return A.h(null,v)}})
return A.i($async$JZ,v)},
dYs(){var w,v=x.N,u=A.ba(v),t=A.ba(v),s=A.ba(v),r=A.ba(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.doo(w,w,t,s,u,r)
return q},
doo(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jA(),h=d==null,g=D.a6y[B.l.a5(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6y[B.l.a5(h?e+r:d,20)]
if(a2.n(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.E(p,new C.bnE(),A.Z(p).j("E<1,o>")).fv(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fv(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bh(B.l.hv(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.n(0,u)&&!f.n(0,t)&&!a0.n(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a5(e,20)
k=D.bWU[w]
j=D.bNQ[w]
return new C.oa("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bh(B.l.p(e+1),2,"0"),u,k,C.dYt(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a_())},
dYt(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bh(B.l.hv(d.bF(256),16),2,"0")
return B.h.fv(v)},
dkh:function dkh(d){this.a=d},
dkg:function dkg(d,e){this.a=d
this.b=e},
dkc:function dkc(d){this.a=d},
dkd:function dkd(d){this.a=d},
dke:function dke(d){this.a=d},
dkf:function dkf(d,e){this.a=d
this.b=e},
No:function No(d,e,f,g){var _=this
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
bnO:function bnO(){},
bnP:function bnP(){},
bnG:function bnG(){},
bnH:function bnH(){},
bnI:function bnI(){},
bnJ:function bnJ(){},
bnK:function bnK(){},
bnL:function bnL(){},
bnM:function bnM(){},
bnN:function bnN(){},
bnF:function bnF(){},
bnE:function bnE(){},
JY:function JY(d,e){this.c=d
this.a=e},
ag4:function ag4(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHL:function cHL(){},
cHK:function cHK(d,e){this.a=d
this.b=e},
cHI:function cHI(d){this.a=d},
cHJ:function cHJ(d,e){this.a=d
this.b=e},
cHM:function cHM(d){this.a=d},
cHQ:function cHQ(d){this.a=d},
cHR:function cHR(d,e){this.a=d
this.b=e},
cHP:function cHP(d,e,f){this.a=d
this.b=e
this.c=f},
cHO:function cHO(d,e){this.a=d
this.b=e},
cHN:function cHN(d,e){this.a=d
this.b=e},
cHS:function cHS(d){this.a=d},
WG:function WG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJE:function aJE(d,e){this.c=d
this.a=e},
JX:function JX(d,e){this.c=d
this.a=e},
aKH:function aKH(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHF:function cHF(d){this.a=d},
cHG:function cHG(d){this.a=d},
cHH:function cHH(d){this.a=d},
cHE:function cHE(d,e){this.a=d
this.b=e},
cHB:function cHB(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHA:function cHA(d,e){this.a=d
this.b=e},
cHD:function cHD(d){this.a=d},
cHz:function cHz(d){this.a=d},
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
aKN:function aKN(d,e){this.c=d
this.a=e},
aRw:function aRw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cX7:function cX7(d){this.a=d},
cX8:function cX8(d){this.a=d},
aM2:function aM2(d){this.a=d},
aFV:function aFV(d,e){this.c=d
this.a=e},
dYr(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dYq(v)
if(u!=null)return new C.qn(w,C.dom(u,!1),D.ae1,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dYp(v)
if(t!=null)return new C.qn(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ae2,"TikTok",q)
s=C.dYo(w,v)
if(s!=null)return s
r=C.dYn(w,v)
if(r!=null)return r
if(B.b.n(v,"tiktok.com")||B.b.n(v,"instagram.com")||B.b.n(v,"facebook.com")||B.b.n(v,"fb.watch")||B.b.n(v,"youtube.com")||B.b.n(v,"youtu.be"))return new C.qn(w,w,D.csb,"Video",q)
return q},
dYo(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/reel/"+w+u,D.NU,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qn(d,"https://www.instagram.com/p/"+w+u,D.NU,t,null)}return null},
dYn(d,e){if(!B.b.n(e,"facebook.com")&&!B.b.n(e,"fb.watch")&&!B.b.n(e,"fb.com"))return null
return new C.qn(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bg,!1)+"&show_text=false&width=734",D.ae3,"Facebook",null)},
dYq(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dr(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dYp(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dr(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
K0:function K0(d,e){this.a=d
this.b=e},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6v:function a6v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKI:function aKI(d,e){var _=this
_.d=$
_.d2$=d
_.aW$=e
_.c=_.a=null},
aM7:function aM7(d,e){this.c=d
this.a=e},
cMt:function cMt(d){this.a=d},
cMu:function cMu(d){this.a=d},
Fk:function Fk(d,e){this.c=d
this.a=e},
akQ:function akQ(){},
dAz(d,e,f,g,h,i){return new C.a6w(i,f,h,e,g,d)},
egK(d){var w=window
w.toString
A.hj(w,"message",new C.dgI(d),!1,x._)},
a6w:function a6w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ag5:function ag5(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHT:function cHT(d){this.a=d},
cI1:function cI1(d){this.a=d},
cI_:function cI_(d){this.a=d},
cHY:function cHY(d){this.a=d},
cHZ:function cHZ(d){this.a=d},
cHW:function cHW(d){this.a=d},
cI0:function cI0(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHV:function cHV(d){this.a=d},
cHU:function cHU(d){this.a=d},
dgI:function dgI(d){this.a=d},
dYj(){var w,v,u
try{v=A.AK()
w=v.grS(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cL(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dom(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bnC(d){var w=A.am(y.c,!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
dAu(d){var w=A.bf(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bf(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dYk(d,e,f){var w,v,u=C.bnC(d)
if(u!=null){if(f){w=C.dYj()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dAu(C.dom(u,e))}return C.dAu(d)},
dYl(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dYm(d){var w
if($.P5().a==null)return!1
w=$.Gs().a
return d>=w&&d<w+4},
dAx(){var w=$.awQ
if(w!=null)w.ad(0)
$.awQ=null
$.Gs().sv(0,0)},
dAw(){var w,v,u,t=$.P5()
if(t.a==null)return
w=$.awQ
if(w!=null)w.ad(0)
v=$.dAv
if(v<=4){t=t.a
t.toString
C.don(t)
return}w=$.Gs()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.don(t)},
don(d){var w=$.awQ
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
default:w=null}$.awQ=A.dN(A.ds(0,0,0,0,0,w),C.egZ())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.No.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.w,1),r=A.X(this.d,B.a5,w,w,14)
return A.t(w,A.H(A.a([r,B.fS,A.e(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a6:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.j,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.oa.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JY.prototype={
U(){return new C.ag4(A.a([],x.e))},
ge3(){return this.c}}
C.ag4.prototype={
a0(){var w=this
w.a7()
$.Gs().ap(0,w.gawZ())
C.egK(w.gbmP())
w.YI()},
bme(){if(this.c!=null)this.q(new C.cHL())},
bmQ(){C.dAw()},
t(){$.Gs().Z(0,this.gawZ())
C.dAx()
$.P5().sv(0,null)
this.a6()},
YI(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YI=A.d(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K_(t.a.c),$async$YI)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHK(t,s))
$.bnD=J.a2(s)
case 1:return A.h(u,v)}})
return A.i($async$YI,v)},
UK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UK=A.d(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.q(new C.cHI(t))
w=3
return A.b(C.awR(t.a.c),$async$UK)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHJ(t,s))
$.bnD=J.a2(t.d)
t.c.F(x.q).f.R(A.bw(null,null,null,null,null,B.y,null,A.e("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UK,v)},
boI(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.eE(new C.cHM(d),!1,null,x.H))},
bpi(){var w=this.c
w.toString
return C.Zw(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.bw,s=A.aL(v,v,v,v,B.L8,v,v,v,new C.cHQ(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DL(A.H(A.a([A.I(new A.J(B.j9,A.e(r,v,1,B.aD,v,v,v,A.l(v,v,u?B.e:B.W,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aJ(!1,B.V,!0,v,A.aP(!1,v,!0,new A.J(B.bf,A.X(B.h7,B.a5,v,v,28),v),B.cN,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbph(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a9)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.c1(!0,A.w(A.a([new A.J(D.WM,r,v),A.I(w.e?B.n5:new A.l9($.P5(),new C.cHR(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqM(B.a5,B.Gr,B.mm,D.d7f,w.e?v:new C.cHS(w)),v)}}
C.WG.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a5.l(0.18),B.dk,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6v(n,!0,!C.dYm(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jK,B.ne,u,u,22),B.aO,A.e("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.k,0,B.q),B.j,B.yI,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.V,!0,u,A.aP(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cn(p,A.fT(A.w(A.a([new C.aJE(o,u),A.I(n,1),A.t(u,A.H(A.a([A.X(B.B6,B.a5.l(0.85),u,u,9),D.cGx,A.e("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,D.aD3,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,u,u,new A.r(u,u,r,s,q,D.a_Z,B.p),u,u,u,B.ht,u,u,u),1),B.aO,A.e(o.b,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.e(o.y,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.e(o.c,u,1,B.aD,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a9)}}
C.aJE.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.e(B.h.gaw(this.c.c.split("-")),w,w,B.aD,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rI,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,B.WC,w,w,w)}}
C.JX.prototype={
U(){return new C.aKH()}}
C.aKH.prototype={
C(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bw,t=A.aL(w,w,w,w,B.L8,w,w,w,new C.cHF(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c1(!0,A.w(A.a([new A.J(D.WM,A.H(A.a([t,A.I(new A.DL(A.H(A.a([A.I(new A.J(B.j9,A.e(s.b+" \xb7 "+s.c,w,1,B.aD,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.V,!0,w,A.aP(!1,w,!0,new A.J(B.bf,A.X(B.h7,B.a5,w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHG(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.I(new A.l9($.P5(),new C.cHH(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aRx.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a5.l(0.35),B.eW,28),new A.a9(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dAz(new A.dz(v+"_full_"+u,x.W),!1,u,!1,w.gaMB(),v+"_full")
w=v}else w=new C.aKN(t.r,s)}else w=new C.aFV(m,s)
else w=D.ddR
return A.t(s,A.cn(n,A.fT(A.w(A.a([new C.aRy(m,l,s),A.I(w,1),new C.aRw(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,s,s,new A.r(s,s,o,q,p,D.a_Z,B.p),s,r*2.05,s,B.bF,s,s,r)}}
C.aRy.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dF(r)
r=A.hN(r)
w=new A.dG(q,r)
v=w.gJv()===0?12:w.gJv()
r=B.b.bh(B.l.p(r),2,"0")
q=(q<12?B.h2:B.j6)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.e(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mQ,s,s,s),B.bD,A.e(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aNY,B.es,D.aNa,B.es,D.aO1],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.X(B.KY,B.a5.l(0.9),s,s,12),B.es,A.I(A.e(u.c,s,s,B.aD,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.e(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.aw,s,s,s,s,s,D.aDQ,s,s,s)}}
C.aKN.prototype={
C(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.X(B.Ay,B.e.l(0.35),w,w,40),B.Y,A.e("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.e("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.eP(D.aRo,D.cW4,this.c,A.eu(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aG(B.a5.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.j,B.yI,w,w,w,w,w,w,w,w,1/0)}}
C.aRw.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awQ(B.AW,"YouTube",s===0,r,new C.cX7(u))
s=u.awQ(B.kp,"Device",s===1,r,new C.cX8(u))
w=r?"Power off":"Power on"
v=r?D.Zh:D.aLd
return A.t(t,A.H(A.a([q,B.an,s,B.bD,A.aL(t,t,t,t,A.X(v,r?B.bE:B.fO,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,D.aDA,t,t,t)},
awQ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bp
else w=f?B.a5:B.az
v=f&&g?B.a5.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aJ(!1,B.V,!0,u,A.aP(!1,A.m(10),!0,new A.J(B.no,A.w(A.a([A.X(d,w,s,s,18),A.e(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a9),1)}}
C.aM2.prototype={
C(d){return D.ath}}
C.aFV.prototype={
C(d){var w=this,v=null,u=w.c,t=A.e(u.b,v,v,v,v,v,v,B.lK,v,v,v),s=A.e("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tE("Serial",u.c),q=w.tE("Model",u.d),p=w.tE("Device ID",u.e),o=w.tE("IMEI",u.r),n=w.tE("MAC",u.f),m=w.tE("OS",u.w+" "+u.x),l=w.tE("Location",u.y+", "+u.z),k=w.tE("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tE("Timezone",u.at)
u=u.ax
return A.ei(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tE("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bf,v,v,B.al,!1)},
tE(d,e){var w=null
return new A.J(B.cX,A.w(A.a([A.e(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.e(e,w,w,w,w,w,w,D.cO_,w,w,w)],x.p),B.F,B.i,B.k,0,B.q),w)}}
C.K0.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qn.prototype={
gaMB(){var w=this.c
return w===D.ae1||w===D.ae2||w===D.NU||w===D.ae3}}
C.a6v.prototype={
U(){return new C.aKI(null,null)}}
C.aKI.prototype={
a0(){this.a7()
var w=A.bH(null,B.vb,null,1,null,this)
w.n7(0,!0)
this.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.aWn()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dr(t,new A.r(t,t,t,t,t,new A.ak(B.cI,B.cu,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bS),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.ic,p,t)
w=B.e.l(0.92)
q=A.aI(new A.d5(new A.b3(p,new A.bn(0.72,1,q),q.j("b3<bm.T>")),!1,A.X(B.jK,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.ne
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM7(s,t),r,q,A.aQ(t,A.t(t,A.e(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aQ(t,A.e(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aQ(3,A.e(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aE(B.ak,t,B.bc,B.y,s,t)}}
C.aM7.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kq(u,B.N,new C.cMt(this),B.ca,B.bM,!0,w,w,new C.cMu(this),w)
return new C.Fk(v,w)}}
C.Fk.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uQ,B.SM],x.O),B.jK)
break
case 1:w=new A.aN(A.a([B.yI,D.axQ],x.O),B.lp)
break
case 2:w=new A.aN(A.a([D.azn,D.axg],x.O),B.AG)
break
case 3:w=new A.aN(A.a([B.W,B.du],x.O),B.AK)
break
case 4:w=new A.aN(A.a([B.aw,B.aN],x.O),B.pe)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.X(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.r(u,u,u,u,u,new A.ak(B.aK,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akQ.prototype={
t(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdK())
w.aW$=null
w.a6()},
by(){this.bP()
this.bK()
this.dL()}}
C.a6w.prototype={
U(){return new C.ag5()}}
C.ag5.prototype={
a7n(d,e){var w,v=C.bnC(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dom(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.n(w,"tiktok.com/player")||B.b.n(w,"instagram.com")||B.b.n(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dYk(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEq(){var w,v=this
if(v.w)return
v.q(new C.cHT(v))
w=v.e
if(w!=null)v.a7n(w,v.a.d)},
a0(){var w,v,u=this
u.a7()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aT()
u.d=w
try{$.Gu()
$.pI().uR(w,new C.cI1(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHV(v))
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
B.h.A(w,A.a([B.Q,A.e("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aI(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1R(n,B.tt,w)],v)
if(o.f)w.push(A.fT(A.aI(new A.ab(28,28,D.aul,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bp,B.w,1)
q=A.X(B.L1,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eX(0,A.aJ(!1,B.V,!0,n,A.aP(!1,n,!0,A.aI(A.t(n,A.H(A.a([q,B.an,A.e("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.j,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.W7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEp(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a9)))}v=C.bnC(o.a.d)
if(v!=null)w.push(A.aQ(8,A.jq(D.aPt,D.d2C,new C.cHU(o),A.iQ(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aE(B.ak,n,B.bc,B.y,w,n)}}
var z=a.updateTypes(["o(oa)","~()","JY(R)","oa(a_<@,@>)","a1(oa)","a_<o,@>(oa)","aB<~>()","JX(R)","l9<K>(R,qn?,q?)","WG(R,K)","u_(R,qn?,q?)","Fk(R,al,dM?)"])
C.dkh.prototype={
$1(d){return new C.JY(this.a,null)},
$S:z+2}
C.dkg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.W],j):A.a([B.e,B.av],j),h=A.a([new A.a9(0,B.G,B.a5.l(0.22),B.eW,32)],x.V),g=A.O(m?B.c7:B.a5.l(0.18),B.w,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.au.l(m?0.18:0.08)],j)
e=A.t(n,D.aMT,B.j,n,n,new A.r(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.w,1),n,n,n,B.at),n,48,n,n,n,n,48)
w=A.e("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.e("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.am,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aL(n,n,n,n,A.X(B.d6,m?B.az:B.d0,n,n,n),n,n,n,new C.dkc(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.r(n,n,n,n,n,new A.ak(B.ad,B.ag,B.H,j,n,n),B.p),n,n,n,B.IO,n,n,n)
e=A.eg(B.cG,A.a([new C.No("YouTube",B.KX,m,n),new C.No("TikTok",B.lp,m,n),new C.No("Instagram",B.AG,m,n),new C.No("Facebook",B.AK,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cq:B.iA,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bw
r=A.X(B.fx,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aI
u=A.w(A.a([e,B.aS,A.aM(n,B.S,!0,n,!0,B.y,n,A.aO(),w,n,n,n,n,n,2,A.bt(n,new A.bb(4,q,B.X),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Rw),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.a8,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.aa,n,n,n,n)],v),B.as,B.i,B.k,0,B.q)
e=A.jq(D.aMW,D.d6o,new C.dkd(d),A.iQ(n,n,n,n,n,n,n,n,n,n,n,m?B.bm:B.am,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dr(A.cn(f,A.w(A.a([j,new A.J(B.Wo,u,n),new A.J(D.aF7,A.H(A.a([e,B.bD,A.ca(!1,A.e("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.ay,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dke(d),n,n),B.an,A.dP(D.aR7,D.d79,new C.dkf(d,w),A.bB(B.a5,n,n,n,B.e,n,D.W7,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.as,B.i,B.a1,0,B.q),B.aJ),new A.r(n,n,g,k,h,new A.ak(B.aK,B.aR,B.H,i,n,n),B.p),B.bS),n)},
$S:85}
C.dkc.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dkd.prototype={
$0(){C.dAx()
$.P5().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dke.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dkf.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnO.prototype={
$1(d){return C.dAy(A.U(d,x.N,x.z))},
$S:z+3}
C.bnP.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnG.prototype={
$1(d){return d.c},
$S:z+0}
C.bnH.prototype={
$1(d){return d.r},
$S:z+0}
C.bnI.prototype={
$1(d){return d.f},
$S:z+0}
C.bnJ.prototype={
$1(d){return d.at},
$S:z+0}
C.bnK.prototype={
$1(d){return d.c},
$S:z+0}
C.bnL.prototype={
$1(d){return d.r},
$S:z+0}
C.bnM.prototype={
$1(d){return d.f},
$S:z+0}
C.bnN.prototype={
$1(d){return d.at},
$S:z+0}
C.bnF.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnE.prototype={
$1(d){return B.b.bh(B.l.hv(d,16),2,"0").toUpperCase()},
$S:81}
C.cHL.prototype={
$0(){},
$S:0}
C.cHK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHI.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHJ.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHM.prototype={
$1(d){return new C.JX(this.a,null)},
$S:z+7}
C.cHQ.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cHR.prototype={
$3(d,e,f){return new A.l9($.Gs(),new C.cHP(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHP.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Df(d,k,x.Q)
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
n=$.Gs().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.an,A.I(A.e("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d9,B.h4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cn(s,new A.j6(1.7777777777777777,C.dAz(new A.dz("fleet_master_"+r,x.W),!0,r,!0,j.gaMB(),"fleet_master"),k),B.aJ),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.e(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vU(0,B.y,k,B.E,k,k,k,k,!1,k,B.al,!1,A.a([new A.kz(new A.J(B.IG,A.w(u,B.F,B.i,B.k,0,B.q),k),k),new A.ok(D.aDd,A.aAT(new A.nz(new C.cHO(i,j),J.a2(i.d),!1,!0,!0,A.tt(),k),D.cHi),k)],w))},
$S:1680}
C.cHO.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WG(v,e,J.a2(w.d),new C.cHN(w,v),this.b,null)},
$S:z+9}
C.cHN.prototype={
$0(){return this.a.boI(this.b)},
$S:0}
C.cHS.prototype={
$0(){this.a.UK()
return null},
$S:0}
C.cHF.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cHG.prototype={
$0(){C.Zw(this.a,$.bnD)
return null},
$S:0}
C.cHH.prototype={
$3(d,e,f){return A.fe(new C.cHE(this.a,e))},
$S:z+10}
C.cHE.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cB(A.w(A.a([A.e(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRx(u,s.a.c,s.e,s.d,new C.cHB(s),new C.cHC(s),new C.cHD(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),v,B.E,B.oR,v,v,B.al),v,v,v)},
$S:1681}
C.cHB.prototype={
$0(){var w=this.a.c
w.toString
C.Zw(w,$.bnD)
return null},
$S:0}
C.cHC.prototype={
$1(d){var w=this.a
return w.q(new C.cHA(w,d))},
$S:36}
C.cHA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHD.prototype={
$0(){var w=this.a
return w.q(new C.cHz(w))},
$S:0}
C.cHz.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cX7.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cX8.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMt.prototype={
$3(d,e,f){return new C.Fk(this.a.c,null)},
$S:z+11}
C.cMu.prototype={
$3(d,e,f){if(f==null)return e
return new A.aE(B.ak,null,B.bc,B.y,A.a([new C.Fk(this.a.c,null),D.atw],x.p),null)},
$C:"$3",
$R:3,
$S:268}
C.cHT.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cI1.prototype={
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
A.hj(v,"load",new C.cI_(w),!1,u)
v=w.e
v.toString
A.hj(v,"error",new C.cI0(w),!1,u)
w=w.e
w.toString
return w},
$S:589}
C.cI_.prototype={
$1(d){var w=this.a
if(w.c!=null){w.q(new C.cHY(w))
A.bP(B.O,new C.cHZ(w),x.H)}},
$S:46}
C.cHY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHW(w))},
$S:13}
C.cHW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHX(w))},
$S:46}
C.cHX.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHV.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHU.prototype={
$0(){var w,v=C.bnC(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kO.SA(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dgI.prototype={
$1(d){var w,v,u,t,s=new A.ET([],[]).IK(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.n(u,"youtube.com")&&!B.b.n(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1682};(function aliases(){var w=C.akQ.prototype
w.aWn=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag4.prototype,"gawZ","bme",1)
w(u,"gbmP","bmQ",1)
w(u,"gbph","bpi",6)
w(C.ag5.prototype,"gbEp","bEq",1)
v(C,"egZ","dAw",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yz,[C.dkh,C.dkg,C.bnO,C.bnP,C.bnG,C.bnH,C.bnI,C.bnJ,C.bnK,C.bnL,C.bnM,C.bnN,C.bnF,C.bnE,C.cHM,C.cHR,C.cHP,C.cHH,C.cHC,C.cMt,C.cMu,C.cI1,C.cI_,C.cI0,C.dgI])
v(A.a_X,[C.dkc,C.dkd,C.dke,C.dkf,C.cHL,C.cHK,C.cHI,C.cHJ,C.cHQ,C.cHN,C.cHS,C.cHF,C.cHG,C.cHB,C.cHA,C.cHD,C.cHz,C.cX7,C.cX8,C.cHT,C.cHY,C.cHZ,C.cHW,C.cHX,C.cHV,C.cHU])
v(A.at,[C.No,C.WG,C.aJE,C.aRx,C.aRy,C.aKN,C.aRw,C.aM2,C.aFV,C.aM7,C.Fk])
v(A.al,[C.oa,C.qn])
v(A.ae,[C.JY,C.JX,C.a6v,C.a6w])
v(A.af,[C.ag4,C.aKH,C.akQ,C.ag5])
v(A.a_Y,[C.cHO,C.cHE])
u(C.K0,A.aGQ)
u(C.aKI,C.akQ)
w(C.akQ,A.ef)})()
A.dE1(b.typeUniverse,JSON.parse('{"JY":{"ae":[],"q":[]},"WG":{"at":[],"q":[]},"JX":{"ae":[],"q":[]},"No":{"at":[],"q":[]},"ag4":{"af":["JY"]},"aJE":{"at":[],"q":[]},"aKH":{"af":["JX"]},"aRx":{"at":[],"q":[]},"aRy":{"at":[],"q":[]},"aKN":{"at":[],"q":[]},"aRw":{"at":[],"q":[]},"aM2":{"at":[],"q":[]},"aFV":{"at":[],"q":[]},"a6v":{"ae":[],"q":[]},"Fk":{"at":[],"q":[]},"aKI":{"af":["a6v"]},"aM7":{"at":[],"q":[]},"a6w":{"ae":[],"q":[]},"ag5":{"af":["a6w"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b2
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<oa>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ad<oa>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o5"),_:w("Dc"),k:w("oa"),N:w("o"),Y:w("bn<aa>"),W:w("dz<o>"),J:w("l9<K>"),j:w("l9<qn?>"),E:w("xs<cN>"),q:w("Xs"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zh=new A.M(983224,"MaterialIcons",!1)
D.aPB=new A.a8(D.Zh,48,B.bp,null,null,null)
D.cND=new A.S(!0,B.cq,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUZ=new A.B("Powered off",null,D.cND,null,null,null,null,null,null,null,null,null)
D.bL_=w([D.aPB,B.Q,D.cUZ],x.p)
D.aAB=new A.eL(B.al,B.i,B.a1,B.o,null,B.q,null,0,D.bL_,null)
D.ath=new A.dq(B.N,null,null,D.aAB,null)
D.cGX=new A.ab(18,18,B.Su,null)
D.atw=new A.dq(B.N,null,null,D.cGX,null)
D.aul=new A.hc(2,null,null,null,null,B.a6,null,null,null,null)
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
D.aLd=new A.M(983222,"MaterialIcons",!1)
D.aMT=new A.a8(B.jK,26,B.a5,null,null,null)
D.aMW=new A.a8(B.Yw,18,null,null,null,null)
D.aNa=new A.a8(B.rI,14,B.a6,null,null,null)
D.aLv=new A.M(983420,"MaterialIcons",!1)
D.aNY=new A.a8(D.aLv,14,B.a6,null,null,null)
D.aJD=new A.M(62895,"MaterialIcons",!1)
D.aO1=new A.a8(D.aJD,14,B.a6,null,null,null)
D.aPt=new A.a8(B.rA,16,B.a6,null,null,null)
D.aR7=new A.a8(B.jf,20,null,null,null,null)
D.aRo=new A.a8(B.h7,16,null,null,null,null)
D.bOC=w([B.aN,B.W],x.O)
D.a_Z=new A.ak(B.aK,B.aR,B.H,D.bOC,null,null)
D.cAB=new A.aN("NGMY OS","14.2.1")
D.czo=new A.aN("VirtualDroid","13.8.4")
D.czn=new A.aN("NGMY OS","15.0.0")
D.cA9=new A.aN("VirtualDroid","14.1.2")
D.czl=new A.aN("NGMY Tab OS","12.9.7")
D.czj=new A.aN("NGMY OS","13.5.3")
D.cz8=new A.aN("VirtualDroid","15.2.0")
D.czL=new A.aN("NGMY OS","14.8.1")
D.cAf=new A.aN("NGMY Tab OS","13.2.4")
D.cAL=new A.aN("VirtualDroid","12.6.9")
D.cz1=new A.aN("NGMY OS","16.0.1")
D.cyR=new A.aN("VirtualDroid","14.9.0")
D.cAs=new A.aN("NGMY Tab OS","14.0.3")
D.czx=new A.aN("NGMY OS","13.1.8")
D.cz0=new A.aN("VirtualDroid","13.4.5")
D.czi=new A.aN("NGMY OS","15.3.2")
D.cAg=new A.aN("NGMY Tab OS","12.4.1")
D.cAv=new A.aN("VirtualDroid","16.1.0")
D.czK=new A.aN("NGMY OS","14.4.6")
D.cAC=new A.aN("VirtualDroid","15.0.8")
D.bNQ=w([D.cAB,D.czo,D.czn,D.cA9,D.czl,D.czj,D.cz8,D.czL,D.cAf,D.cAL,D.cz1,D.cyR,D.cAs,D.czx,D.cz0,D.czi,D.cAg,D.cAv,D.czK,D.cAC],A.b2("a3<+(o,o)>"))
D.cCR=new A.eJ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCp=new A.eJ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCk=new A.eJ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCt=new A.eJ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCg=new A.eJ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCv=new A.eJ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCT=new A.eJ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCh=new A.eJ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCo=new A.eJ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCx=new A.eJ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCf=new A.eJ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCL=new A.eJ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCI=new A.eJ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCn=new A.eJ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCF=new A.eJ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCE=new A.eJ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCe=new A.eJ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCs=new A.eJ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCC=new A.eJ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCH=new A.eJ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6y=w([D.cCR,D.cCp,D.cCk,D.cCt,D.cCg,D.cCv,D.cCT,D.cCh,D.cCo,D.cCx,D.cCf,D.cCL,D.cCI,D.cCn,D.cCF,D.cCE,D.cCe,D.cCs,D.cCC,D.cCH],A.b2("a3<+(o,o,aa,aa,o)>"))
D.bWU=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ae1=new C.K0(0,"youtube")
D.ae2=new C.K0(1,"tiktok")
D.NU=new C.K0(2,"instagram")
D.ae3=new C.K0(3,"facebook")
D.csb=new C.K0(4,"other")
D.cGx=new A.ab(3,null,null,null)
D.cHi=new A.i8(4,10,8,0.52,null)
D.cWg=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKM=new A.aU(D.cWg,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cO_=new A.S(!0,B.e,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cW4=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2C=new A.B("Open in YouTube",null,B.iX,null,null,null,null,null,null,null,null,null)
D.d6o=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d79=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7f=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddR=new C.aM2(null)})();(function staticFields(){$.dAv=20
$.awQ=null
$.bnD=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"elY","Gs",()=>A.aCI(0))
w($,"elZ","P5",()=>A.aCI(null))})()};
(a=>{a["gUfAKehc8fA6Dl5j0XQLYslXBnE="]=a.current})($__dart_deferred_initializers__);