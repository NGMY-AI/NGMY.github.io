((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
efh(d,e){A.a7(d,!1).cA(A.eF(new C.dhk(e),!0,null,x.H))},
Ze(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Ze=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.P_()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dhj(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Ze)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVy(r)
if(q==null){d.G(x.q).f.R(D.cK9)
w=1
break}w=4
return A.b(A.bR(B.ia,null,x.H),$async$Ze)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dxz=n
p=C.dVs(n)
n=$.Gk()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlr(q)
d.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ze,v)},
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
JN(d){return C.dVB(d)},
dVB(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JN=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JN)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aO(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eP(r,x.f)
k=A.ds(k,new C.bnd(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.C(new A.ag(k,new C.bne(),j),j.j("G.E"))
q=i
if(J.a6(q)>=20){u=q
w=1
break}p=C.dxE(q)
w=12
return A.b(C.JM(a3,p),$async$JN)
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
case 9:case 5:o=A.aO(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dxC(A.U(n,x.N,x.z))
l=C.dxE(A.a([m],x.e))
w=21
return A.b(C.JM(a3,l),$async$JN)
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
case 18:case 14:q=C.dVz()
w=22
return A.b(C.JM(a3,q),$async$JN)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JN,v)},
dxE(d){var w=A.X(d).j("D<1,o>"),v=new A.D(d,new C.bn5(),w).eJ(0),u=new A.D(d,new C.bn6(),w).eJ(0),t=new A.D(d,new C.bn7(),w).eJ(0),s=new A.D(d,new C.bn8(),w).eJ(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dls(null,q,u,t,v,s));++q}return r},
awo(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JN(d),$async$awo)
case 3:t=f
s=x.N
r=J.ch(t)
q=r.dd(t,new C.bn9(),s).eJ(0)
p=r.dd(t,new C.bna(),s).eJ(0)
o=r.dd(t,new C.bnb(),s).eJ(0)
n=r.dd(t,new C.bnc(),s).eJ(0)
m=C.dls(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JM(d,t),$async$awo)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awo,v)},
JM(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JM)
case 2:u=g
t=B.b.i(d)
s=J.b6(e,new C.bn4(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JM)
case 3:return A.h(null,v)}})
return A.i($async$JM,v)},
dVz(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dls(w,w,t,s,u,r)
return q},
dls(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jB(),h=d==null,g=D.a6f[B.l.a5(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6f[B.l.a5(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bn3(),A.X(p).j("D<1,o>")).fq(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fq(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hu(i.bG(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a5(e,20)
k=D.bWt[w]
j=D.bNA[w]
return new C.ob("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dVA(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().a0())},
dVA(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hu(d.bG(256),16),2,"0")
return B.h.fq(v)},
dhk:function dhk(d){this.a=d},
dhj:function dhj(d,e){this.a=d
this.b=e},
dhf:function dhf(d){this.a=d},
dhg:function dhg(d){this.a=d},
dhh:function dhh(d){this.a=d},
dhi:function dhi(d,e){this.a=d
this.b=e},
Ne:function Ne(d,e,f,g){var _=this
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
bnd:function bnd(){},
bne:function bne(){},
bn5:function bn5(){},
bn6:function bn6(){},
bn7:function bn7(){},
bn8:function bn8(){},
bn9:function bn9(){},
bna:function bna(){},
bnb:function bnb(){},
bnc:function bnc(){},
bn4:function bn4(){},
bn3:function bn3(){},
JL:function JL(d,e){this.c=d
this.a=e},
afT:function afT(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cH1:function cH1(){},
cH0:function cH0(d,e){this.a=d
this.b=e},
cGZ:function cGZ(d){this.a=d},
cH_:function cH_(d,e){this.a=d
this.b=e},
cH2:function cH2(d){this.a=d},
cH6:function cH6(d){this.a=d},
cH7:function cH7(d,e){this.a=d
this.b=e},
cH5:function cH5(d,e,f){this.a=d
this.b=e
this.c=f},
cH4:function cH4(d,e){this.a=d
this.b=e},
cH3:function cH3(d,e){this.a=d
this.b=e},
cH8:function cH8(d){this.a=d},
Wx:function Wx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJe:function aJe(d,e){this.c=d
this.a=e},
JK:function JK(d,e){this.c=d
this.a=e},
aKe:function aKe(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGW:function cGW(d){this.a=d},
cGX:function cGX(d){this.a=d},
cGY:function cGY(d){this.a=d},
cGV:function cGV(d,e){this.a=d
this.b=e},
cGS:function cGS(d){this.a=d},
cGT:function cGT(d){this.a=d},
cGR:function cGR(d,e){this.a=d
this.b=e},
cGU:function cGU(d){this.a=d},
cGQ:function cGQ(d){this.a=d},
aR4:function aR4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aR5:function aR5(d,e,f){this.c=d
this.d=e
this.a=f},
aKk:function aKk(d,e){this.c=d
this.a=e},
aR3:function aR3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
aLB:function aLB(d){this.a=d},
aFv:function aFv(d,e){this.c=d
this.a=e},
dVy(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVx(v)
if(u!=null)return new C.qk(w,C.dlq(u,!1),D.adJ,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVw(v)
if(t!=null)return new C.qk(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adK,"TikTok",q)
s=C.dVv(w,v)
if(s!=null)return s
r=C.dVu(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qk(w,w,D.crE,"Video",q)
return q},
dVv(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dq(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qk(d,"https://www.instagram.com/reel/"+w+u,D.NH,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dq(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qk(d,"https://www.instagram.com/p/"+w+u,D.NH,t,null)}return null},
dVu(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qk(d,"https://www.facebook.com/plugins/video.php?href="+A.fi(2,d,B.be,!1)+"&show_text=false&width=734",D.adL,"Facebook",null)},
dVx(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dq(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVw(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dq(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dq(d)
return w==null?null:w.b[1]},
JO:function JO(d,e){this.a=d
this.b=e},
qk:function qk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6i:function a6i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKf:function aKf(d,e){var _=this
_.d=$
_.cX$=d
_.aW$=e
_.c=_.a=null},
aLG:function aLG(d,e){this.c=d
this.a=e},
cLJ:function cLJ(d){this.a=d},
cLK:function cLK(d){this.a=d},
Fa:function Fa(d,e){this.c=d
this.a=e},
akD:function akD(){},
dxD(d,e,f,g,h,i){return new C.a6j(i,f,h,e,g,d)},
edP(d){var w=window
w.toString
A.hi(w,"message",new C.ddg(d),!1,x._)},
a6j:function a6j(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afU:function afU(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cH9:function cH9(d){this.a=d},
cHi:function cHi(d){this.a=d},
cHg:function cHg(d){this.a=d},
cHe:function cHe(d){this.a=d},
cHf:function cHf(d){this.a=d},
cHc:function cHc(d){this.a=d},
cHh:function cHh(d){this.a=d},
cHd:function cHd(d){this.a=d},
cHb:function cHb(d){this.a=d},
cHa:function cHa(d){this.a=d},
ddg:function ddg(d){this.a=d},
dVq(){var w,v,u
try{v=A.AD()
w=v.grT(v)
if(J.a6(w)!==0&&!J.v(w,"null")&&!J.cK(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlq(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bn1(d){var w=A.aq(y.c,!0,!1,!1,!1).dq(d)
return w==null?null:w.b[1]},
dxy(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVr(d,e,f){var w,v,u=C.bn1(d)
if(u!=null){if(f){w=C.dVq()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxy(C.dlq(u,e))}return C.dxy(d)},
dVs(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVt(d){var w
if($.P_().a==null)return!1
w=$.Gk().a
return d>=w&&d<w+4},
dxB(){var w=$.awn
if(w!=null)w.ad(0)
$.awn=null
$.Gk().sv(0,0)},
dxA(){var w,v,u,t=$.P_()
if(t.a==null)return
w=$.awn
if(w!=null)w.ad(0)
v=$.dxz
if(v<=4){t=t.a
t.toString
C.dlr(t)
return}w=$.Gk()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlr(t)},
dlr(d){var w=$.awn
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
default:w=null}$.awn=A.dL(A.dr(0,0,0,0,0,w),C.ee3())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ne.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.Z(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fS,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fr,w,w,w)}}
C.ob.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JL.prototype={
U(){return new C.afT(A.a([],x.e))},
ge_(){return this.c}}
C.afT.prototype={
a_(){var w=this
w.a7()
$.Gk().ap(0,w.gax_())
C.edP(w.gbmJ())
w.YC()},
bm6(){if(this.c!=null)this.p(new C.cH1())},
bmK(){C.dxA()},
q(){$.Gk().Z(0,this.gax_())
C.dxB()
$.P_().sv(0,null)
this.a6()},
YC(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JN(t.a.c),$async$YC)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cH0(t,s))
$.bn2=J.a6(s)
case 1:return A.h(u,v)}})
return A.i($async$YC,v)},
UB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cGZ(t))
w=3
return A.b(C.awo(t.a.c),$async$UB)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cH_(t,s))
$.bn2=J.a6(t.d)
t.c.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UB,v)},
boE(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.eF(new C.cH2(d),!1,null,x.H))},
bpe(){var w=this.c
w.toString
return C.Ze(w,J.a6(this.d))},
C(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fb:B.bv,s=A.aM(v,v,v,v,B.KZ,v,v,v,new C.cH6(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a6(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DA(A.H(A.a([A.I(new A.J(B.j5,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aR(!1,v,!0,new A.J(B.bc,A.Z(B.h9,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpd(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c7(!0,A.w(A.a([new A.J(D.WA,r,v),A.I(w.e?B.n4:new A.ld($.P_(),new C.cH7(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqy(B.a6,B.Gm,B.mh,D.d6U,w.e?v:new C.cH8(w)),v)}}
C.Wx.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a6.l(0.18),B.dj,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6i(n,!0,!C.dVt(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Z(B.jL,B.nd,u,u,22),B.aO,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yK,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aR(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cf(p,A.fT(A.w(A.a([new C.aJe(o,u),A.I(n,1),A.t(u,A.H(A.a([A.Z(B.B7,B.a6.l(0.85),u,u,9),D.cFX,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aCG,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a_G,B.p),u,u,u,B.fL,u,u,u),1),B.aO,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJe.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gav(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.rG,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.Wq,w,w,w)}}
C.JK.prototype={
U(){return new C.aKe()}}
C.aKe.prototype={
C(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fb:B.bv,t=A.aM(w,w,w,w,B.KZ,w,w,w,new C.cGW(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c7(!0,A.w(A.a([new A.J(D.WA,A.H(A.a([t,A.I(new A.DA(A.H(A.a([A.I(new A.J(B.j5,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aR(!1,w,!0,new A.J(B.bc,A.Z(B.h9,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGX(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.ld($.P_(),new C.cGY(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aR4.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a6.l(0.35),B.f3,28),new A.aa(0,B.G,B.A.l(0.45),B.d9,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxD(new A.dv(v+"_full_"+u,x.W),!1,u,!1,w.gaMD(),v+"_full")
w=v}else w=new C.aKk(t.r,s)}else w=new C.aFv(m,s)
else w=D.ddk
return A.t(s,A.cf(n,A.fT(A.w(A.a([new C.aR5(m,l,s),A.I(w,1),new C.aR3(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a_G,B.p),s,r*2.05,s,B.bS,s,s,r)}}
C.aR5.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dC(r)
r=A.hL(r)
w=new A.dD(q,r)
v=w.gJi()===0?12:w.gJi()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h3:B.j2)===B.h3?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mM,s,s,s),B.bB,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNB,B.ep,D.aMO,B.ep,D.aNF],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.Z(B.KP,B.a6.l(0.9),s,s,12),B.ep,A.I(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDt,s,s,s)}}
C.aKk.prototype={
C(d){var w=null
return A.t(w,A.aJ(A.w(A.a([A.Z(B.AF,B.e.l(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aR7,D.cVt,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yK,w,w,w,w,w,w,w,w,1/0)}}
C.aR3.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awR(B.AY,"YouTube",s===0,r,new C.cWn(u))
s=u.awR(B.lk,"Device",s===1,r,new C.cWo(u))
w=r?"Power off":"Power on"
v=r?D.Z2:D.aKP
return A.t(t,A.H(A.a([q,B.am,s,B.bB,A.aM(t,t,t,t,A.Z(v,r?B.bD:B.fy,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aDd,t,t,t)},
awR(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bn
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.W,!0,u,A.aR(!1,A.m(10),!0,new A.J(B.nn,A.w(A.a([A.Z(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLB.prototype={
C(d){return D.at0}}
C.aFv.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lF,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tD("Serial",u.c),q=w.tD("Model",u.d),p=w.tD("Device ID",u.e),o=w.tD("IMEI",u.r),n=w.tD("MAC",u.f),m=w.tD("OS",u.w+" "+u.x),l=w.tD("Location",u.y+", "+u.z),k=w.tD("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tD("Timezone",u.at)
u=u.ax
return A.ef(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tD("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tD(d,e){var w=null
return new A.J(B.cP,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cH,A.d(e,w,w,w,w,w,w,D.cNl,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JO.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qk.prototype={
gaMD(){var w=this.c
return w===D.adJ||w===D.adK||w===D.NH||w===D.adL}}
C.a6i.prototype={
U(){return new C.aKf(null,null)}}
C.aKf.prototype={
a_(){this.a7()
var w=A.bJ(null,B.va,null,1,null,this)
w.n6(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWo()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dq(t,new A.r(t,t,t,t,t,new A.ak(B.cN,B.cx,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bT),q=x.Y,p=u.d
p===$&&A.c()
p=A.cw(B.i9,p,t)
w=B.e.l(0.92)
q=A.aJ(new A.d2(new A.b3(p,new A.bm(0.72,1,q),q.j("b3<bk.T>")),!1,A.Z(B.jL,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nd
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLG(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bb,B.y,s,t)}}
C.aLG.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kq(u,new C.cLJ(this),B.c8,B.bM,!0,w,w,new C.cLK(this),w)
return new C.Fa(v,w)}}
C.Fa.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uP,B.Sx],x.O),B.jL)
break
case 1:w=new A.aN(A.a([B.yK,D.axu],x.O),B.ll)
break
case 2:w=new A.aN(A.a([D.az0,D.awV],x.O),B.AM)
break
case 3:w=new A.aN(A.a([B.Y,B.du],x.O),B.AQ)
break
case 4:w=new A.aN(A.a([B.az,B.aN],x.O),B.pe)
break
default:w=u}v=w.a
return A.t(u,A.aJ(A.Z(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aM,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akD.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdE())
w.aW$=null
w.a6()},
by(){this.bP()
this.bK()
this.dF()}}
C.a6j.prototype={
U(){return new C.afU()}}
C.afU.prototype={
a7o(d,e){var w,v=C.bn1(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlq(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVr(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEq(){var w,v=this
if(v.w)return
v.p(new C.cH9(v))
w=v.e
if(w!=null)v.a7o(w,v.a.d)},
a_(){var w,v,u=this
u.a7()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.Gm()
$.pF().uR(w,new C.cHi(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cHb(v))
w=v.e
w.toString
v.a7o(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Zh,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aJ(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1E(n,B.tq,w)],v)
if(o.f)w.push(A.fT(A.aJ(new A.ac(28,28,D.au1,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bn,B.w,1)
q=A.Z(B.KT,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eT(0,A.aL(!1,B.W,!0,n,A.aR(!1,n,!0,A.aJ(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.VW,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEp(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bn1(o.a.d)
if(v!=null)w.push(A.aT(8,A.js(D.aP8,D.d27,new C.cHa(o),A.iN(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fr,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.al,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(ob)","~()","JL(R)","ob(a_<@,@>)","a1(ob)","a_<o,@>(ob)","aB<~>()","JK(R)","ld<K>(R,qk?,p?)","Wx(R,K)","tV(R,qk?,p?)","Fa(R,al,dQ?)"])
C.dhk.prototype={
$1(d){return new C.JL(this.a,null)},
$S:z+2}
C.dhj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dX,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a6.l(0.22),B.f3,32)],x.V),g=A.O(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMv,B.k,n,n,new A.r(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f4,w,A.aM(n,n,n,n,A.Z(B.d6,m?B.ax:B.d1,n,n,n),n,n,n,new C.dhf(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ae,B.ag,B.H,j,n,n),B.p),n,n,n,B.IH,n,n,n)
e=A.em(B.cG,A.a([new C.Ne("YouTube",B.KO,m,n),new C.Ne("TikTok",B.ll,m,n),new C.Ne("Instagram",B.AM,m,n),new C.Ne("Facebook",B.AQ,m,n)],v),B.cr,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i6,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bv
r=A.Z(B.fN,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.bs(n,new A.b9(4,q,B.X),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.Ri),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.js(D.aMy,D.d61,new C.dhg(d),A.iN(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dq(A.cf(f,A.w(A.a([j,new A.J(B.Wa,u,n),new A.J(D.aEI,A.H(A.a([e,B.bB,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhh(d),n,n),B.am,A.dN(D.aQR,D.d6P,new C.dhi(d,w),A.bx(B.a6,n,n,n,B.e,n,D.VW,n,new A.bF(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a1,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aM,B.aR,B.H,i,n,n),B.p),B.bT),n)},
$S:83}
C.dhf.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhg.prototype={
$0(){C.dxB()
$.P_().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dhh.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhi.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnd.prototype={
$1(d){return C.dxC(A.U(d,x.N,x.z))},
$S:z+3}
C.bne.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bn5.prototype={
$1(d){return d.c},
$S:z+0}
C.bn6.prototype={
$1(d){return d.r},
$S:z+0}
C.bn7.prototype={
$1(d){return d.f},
$S:z+0}
C.bn8.prototype={
$1(d){return d.at},
$S:z+0}
C.bn9.prototype={
$1(d){return d.c},
$S:z+0}
C.bna.prototype={
$1(d){return d.r},
$S:z+0}
C.bnb.prototype={
$1(d){return d.f},
$S:z+0}
C.bnc.prototype={
$1(d){return d.at},
$S:z+0}
C.bn4.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bn3.prototype={
$1(d){return B.b.bi(B.l.hu(d,16),2,"0").toUpperCase()},
$S:80}
C.cH1.prototype={
$0(){},
$S:0}
C.cH0.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGZ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cH_.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cH2.prototype={
$1(d){return new C.JK(this.a,null)},
$S:z+7}
C.cH6.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cH7.prototype={
$3(d,e,f){return new A.ld($.Gk(),new C.cH5(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cH5.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.D2(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.Z(B.jL,B.a6,k,k,18)
p=j.d
o=J.a6(l.a.d)
n=$.Gk().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.fs,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cf(s,new A.j4(1.7777777777777777,C.dxD(new A.dv("fleet_master_"+r,x.W),!0,r,!0,j.gaMD(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a6(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vQ(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.ky(new A.J(B.Iy,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ol(D.aCQ,A.aAs(new A.nw(new C.cH4(i,j),J.a6(i.d),!1,!0,!0,A.tr(),k),D.cGI),k)],w))},
$S:1689}
C.cH4.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wx(v,e,J.a6(w.d),new C.cH3(w,v),this.b,null)},
$S:z+9}
C.cH3.prototype={
$0(){return this.a.boE(this.b)},
$S:0}
C.cH8.prototype={
$0(){this.a.UB()
return null},
$S:0}
C.cGW.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cGX.prototype={
$0(){C.Ze(this.a,$.bn2)
return null},
$S:0}
C.cGY.prototype={
$3(d,e,f){return A.fp(new C.cGV(this.a,e))},
$S:z+10}
C.cGV.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.co(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aR4(u,s.a.c,s.e,s.d,new C.cGS(s),new C.cGT(s),new C.cGU(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oR,v,v,B.ak),v,v,v)},
$S:1690}
C.cGS.prototype={
$0(){var w=this.a.c
w.toString
C.Ze(w,$.bn2)
return null},
$S:0}
C.cGT.prototype={
$1(d){var w=this.a
return w.p(new C.cGR(w,d))},
$S:36}
C.cGR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGU.prototype={
$0(){var w=this.a
return w.p(new C.cGQ(w))},
$S:0}
C.cGQ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWn.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWo.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cLJ.prototype={
$3(d,e,f){return new C.Fa(this.a.c,null)},
$S:z+11}
C.cLK.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bb,B.y,A.a([new C.Fa(this.a.c,null),D.ate],x.p),null)},
$C:"$3",
$R:3,
$S:260}
C.cH9.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHi.prototype={
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
w.a7o(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hi(v,"load",new C.cHg(w),!1,u)
v=w.e
v.toString
A.hi(v,"error",new C.cHh(w),!1,u)
w=w.e
w.toString
return w},
$S:587}
C.cHg.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHe(w))
A.bR(B.P,new C.cHf(w),x.H)}},
$S:46}
C.cHe.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHf.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cHc(w))},
$S:12}
C.cHc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cHd(w))},
$S:46}
C.cHd.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHb.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHa.prototype={
$0(){var w,v=C.bn1(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kM.So(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddg.prototype={
$1(d){var w,v,u,t,s=new A.EJ([],[]).Iy(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1691};(function aliases(){var w=C.akD.prototype
w.aWo=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afT.prototype,"gax_","bm6",1)
w(u,"gbmJ","bmK",1)
w(u,"gbpd","bpe",6)
w(C.afU.prototype,"gbEp","bEq",1)
v(C,"ee3","dxA",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yx,[C.dhk,C.dhj,C.bnd,C.bne,C.bn5,C.bn6,C.bn7,C.bn8,C.bn9,C.bna,C.bnb,C.bnc,C.bn4,C.bn3,C.cH2,C.cH7,C.cH5,C.cGY,C.cGT,C.cLJ,C.cLK,C.cHi,C.cHg,C.cHh,C.ddg])
v(A.a_J,[C.dhf,C.dhg,C.dhh,C.dhi,C.cH1,C.cH0,C.cGZ,C.cH_,C.cH6,C.cH3,C.cH8,C.cGW,C.cGX,C.cGS,C.cGR,C.cGU,C.cGQ,C.cWn,C.cWo,C.cH9,C.cHe,C.cHf,C.cHc,C.cHd,C.cHb,C.cHa])
v(A.au,[C.Ne,C.Wx,C.aJe,C.aR4,C.aR5,C.aKk,C.aR3,C.aLB,C.aFv,C.aLG,C.Fa])
v(A.al,[C.ob,C.qk])
v(A.ae,[C.JL,C.JK,C.a6i,C.a6j])
v(A.af,[C.afT,C.aKe,C.akD,C.afU])
v(A.a_K,[C.cH4,C.cGV])
u(C.JO,A.aGq)
u(C.aKf,C.akD)
w(C.akD,A.ea)})()
A.dB7(b.typeUniverse,JSON.parse('{"JL":{"ae":[],"p":[]},"Wx":{"au":[],"p":[]},"JK":{"ae":[],"p":[]},"Ne":{"au":[],"p":[]},"afT":{"af":["JL"]},"aJe":{"au":[],"p":[]},"aKe":{"af":["JK"]},"aR4":{"au":[],"p":[]},"aR5":{"au":[],"p":[]},"aKk":{"au":[],"p":[]},"aR3":{"au":[],"p":[]},"aLB":{"au":[],"p":[]},"aFv":{"au":[],"p":[]},"a6i":{"ae":[],"p":[]},"Fa":{"au":[],"p":[]},"aKf":{"af":["a6i"]},"aLG":{"au":[],"p":[]},"a6j":{"ae":[],"p":[]},"afU":{"af":["a6j"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b5
return{V:w("a3<aa>"),O:w("a3<x>"),e:w("a3<ob>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<ob>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o6"),_:w("D_"),k:w("ob"),N:w("o"),Y:w("bm<a9>"),W:w("dv<o>"),J:w("ld<K>"),j:w("ld<qk?>"),E:w("xp<cL>"),q:w("Xj"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Z2=new A.N(983224,"MaterialIcons",!1)
D.aPg=new A.a8(D.Z2,48,B.bn,null,null,null)
D.cN_=new A.Q(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUn=new A.A("Powered off",null,D.cN_,null,null,null,null,null,null,null,null,null)
D.bKK=w([D.aPg,B.Q,D.cUn],x.p)
D.aAe=new A.eZ(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bKK,null)
D.at0=new A.du(B.T,null,null,D.aAe,null)
D.cGm=new A.ac(18,18,B.Sf,null)
D.ate=new A.du(B.T,null,null,D.cGm,null)
D.au1=new A.hj(2,null,null,null,null,B.a7,null,null,null,null)
D.awV=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axu=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.az0=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCG=new A.V(0,3,0,3)
D.aCQ=new A.V(10,0,10,88)
D.aDd=new A.V(12,6,12,10)
D.aDt=new A.V(14,8,14,6)
D.VW=new A.V(18,12,18,12)
D.aEI=new A.V(20,8,20,20)
D.WA=new A.V(8,6,15,8)
D.aKP=new A.N(983222,"MaterialIcons",!1)
D.aMv=new A.a8(B.jL,26,B.a6,null,null,null)
D.aMy=new A.a8(B.Yh,18,null,null,null,null)
D.aMO=new A.a8(B.rG,14,B.a7,null,null,null)
D.aL4=new A.N(983420,"MaterialIcons",!1)
D.aNB=new A.a8(D.aL4,14,B.a7,null,null,null)
D.aJc=new A.N(62895,"MaterialIcons",!1)
D.aNF=new A.a8(D.aJc,14,B.a7,null,null,null)
D.aP8=new A.a8(B.ry,16,B.a7,null,null,null)
D.aQR=new A.a8(B.jd,20,null,null,null,null)
D.aR7=new A.a8(B.h9,16,null,null,null,null)
D.bOm=w([B.aN,B.Y],x.O)
D.a_G=new A.ak(B.aM,B.aR,B.H,D.bOm,null,null)
D.cA3=new A.aN("NGMY OS","14.2.1")
D.cyR=new A.aN("VirtualDroid","13.8.4")
D.cyQ=new A.aN("NGMY OS","15.0.0")
D.czC=new A.aN("VirtualDroid","14.1.2")
D.cyO=new A.aN("NGMY Tab OS","12.9.7")
D.cyM=new A.aN("NGMY OS","13.5.3")
D.cyB=new A.aN("VirtualDroid","15.2.0")
D.czd=new A.aN("NGMY OS","14.8.1")
D.czI=new A.aN("NGMY Tab OS","13.2.4")
D.cAd=new A.aN("VirtualDroid","12.6.9")
D.cyu=new A.aN("NGMY OS","16.0.1")
D.cyj=new A.aN("VirtualDroid","14.9.0")
D.czV=new A.aN("NGMY Tab OS","14.0.3")
D.cz_=new A.aN("NGMY OS","13.1.8")
D.cyt=new A.aN("VirtualDroid","13.4.5")
D.cyL=new A.aN("NGMY OS","15.3.2")
D.czJ=new A.aN("NGMY Tab OS","12.4.1")
D.czY=new A.aN("VirtualDroid","16.1.0")
D.czc=new A.aN("NGMY OS","14.4.6")
D.cA4=new A.aN("VirtualDroid","15.0.8")
D.bNA=w([D.cA3,D.cyR,D.cyQ,D.czC,D.cyO,D.cyM,D.cyB,D.czd,D.czI,D.cAd,D.cyu,D.cyj,D.czV,D.cz_,D.cyt,D.cyL,D.czJ,D.czY,D.czc,D.cA4],A.b5("a3<+(o,o)>"))
D.cCj=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cBS=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cBN=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cBW=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cBJ=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cBY=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCl=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cBK=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cBR=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cC_=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cBI=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCd=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCa=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cBQ=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cC7=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cC6=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cBH=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cBV=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cC4=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cC9=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6f=w([D.cCj,D.cBS,D.cBN,D.cBW,D.cBJ,D.cBY,D.cCl,D.cBK,D.cBR,D.cC_,D.cBI,D.cCd,D.cCa,D.cBQ,D.cC7,D.cC6,D.cBH,D.cBV,D.cC4,D.cC9],A.b5("a3<+(o,o,a9,a9,o)>"))
D.bWt=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adJ=new C.JO(0,"youtube")
D.adK=new C.JO(1,"tiktok")
D.NH=new C.JO(2,"instagram")
D.adL=new C.JO(3,"facebook")
D.crE=new C.JO(4,"other")
D.cFX=new A.ac(3,null,null,null)
D.cGI=new A.i7(4,10,8,0.52,null)
D.cVF=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cK9=new A.aU(D.cVF,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.y,null)
D.cNl=new A.Q(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVt=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d27=new A.A("Open in YouTube",null,B.iU,null,null,null,null,null,null,null,null,null)
D.d61=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d6P=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d6U=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddk=new C.aLB(null)})();(function staticFields(){$.dxz=20
$.awn=null
$.bn2=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ej5","Gk",()=>A.aCh(0))
w($,"ej6","P_",()=>A.aCh(null))})()};
(a=>{a["w2RdKNqGsJaGld5F7I9CmjwbkvM="]=a.current})($__dart_deferred_initializers__);