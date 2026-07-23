((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eDS(d,e){A.a2(d,!1).co(A.ez(new C.dDV(e),!0,null,x.H))},
a0K(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a0K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.QO()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bd(n,B.aQ,B.aH),t)
w=3
return A.b(A.d2(B.J,new C.dDU(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a0K)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eih(r)
if(q==null){d.G(x.q).f.S(D.cX7)
w=1
break}w=4
return A.b(A.bM(B.hL,null,x.H),$async$a0K)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dUD=n
p=C.eib(n)
n=$.HV()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dI1(q)
d.G(x.q).f.S(A.bh(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
dUG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aS(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aS(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oR(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Lu(d){return C.eik(d)},
eik(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Lu=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Lu)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cM(r)?10:11
break
case 10:k=J.eB(r,x.f)
k=A.de(k,new C.buX(),k.$ti.j("G.E"),x.k)
j=A.T(k).j("ag<G.E>")
i=A.y(new A.ag(k,new C.buY(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dUI(q)
w=12
return A.b(C.Lt(a3,p),$async$Lu)
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
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dUG(A.R(n,x.N,x.z))
l=C.dUI(A.a([m],x.e))
w=21
return A.b(C.Lt(a3,l),$async$Lu)
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
case 18:case 14:q=C.eii()
w=22
return A.b(C.Lt(a3,q),$async$Lu)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lu,v)},
dUI(d){var w=A.W(d).j("F<1,p>"),v=new A.F(d,new C.buP(),w).eq(0),u=new A.F(d,new C.buQ(),w).eq(0),t=new A.F(d,new C.buR(),w).eq(0),s=new A.F(d,new C.buS(),w).eq(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dI2(null,q,u,t,v,s));++q}return r},
aBW(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aBW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Lu(d),$async$aBW)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d7(t,new C.buT(),s).eq(0)
p=r.d7(t,new C.buU(),s).eq(0)
o=r.d7(t,new C.buV(),s).eq(0)
n=r.d7(t,new C.buW(),s).eq(0)
m=C.dI2(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.Lt(d,t),$async$aBW)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aBW,v)},
Lt(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Lt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Lt)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.buO(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$Lt)
case 3:return A.h(null,v)}})
return A.i($async$Lt,v)},
eii(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cP(20,x.k)
for(w=0;w<20;++w)q[w]=C.dI2(w,w,t,s,u,r)
return q},
dI2(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lh(),h=d==null,g=D.aao[B.m.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.aao[B.m.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.buN(),A.W(p).j("F<1,p>")).fQ(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.f.fQ(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bb(B.m.ha(i.bH(256),16),2,"0")
s=B.f.bf(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a1(e,20)
k=D.c5L[w]
j=D.bWX[w]
return new C.oR("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bb(B.m.q(e+1),2,"0"),u,k,C.eij(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a6().a3())},
eij(d,e){var w,v=J.cP(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bb(B.m.ha(d.bH(256),16),2,"0")
return B.f.fQ(v)},
dDV:function dDV(d){this.a=d},
dDU:function dDU(d,e){this.a=d
this.b=e},
dDQ:function dDQ(d){this.a=d},
dDR:function dDR(d){this.a=d},
dDS:function dDS(d){this.a=d},
dDT:function dDT(d,e){this.a=d
this.b=e},
OZ:function OZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oR:function oR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
buX:function buX(){},
buY:function buY(){},
buP:function buP(){},
buQ:function buQ(){},
buR:function buR(){},
buS:function buS(){},
buT:function buT(){},
buU:function buU(){},
buV:function buV(){},
buW:function buW(){},
buO:function buO(){},
buN:function buN(){},
Ls:function Ls(d,e){this.c=d
this.a=e},
ajq:function ajq(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d_V:function d_V(){},
d_U:function d_U(d,e){this.a=d
this.b=e},
d_S:function d_S(d){this.a=d},
d_T:function d_T(d,e){this.a=d
this.b=e},
d_W:function d_W(d){this.a=d},
d00:function d00(d){this.a=d},
d0_:function d0_(d){this.a=d},
d01:function d01(d,e){this.a=d
this.b=e},
d_Z:function d_Z(d,e,f){this.a=d
this.b=e
this.c=f},
d_Y:function d_Y(d,e){this.a=d
this.b=e},
d_X:function d_X(d,e){this.a=d
this.b=e},
d02:function d02(d){this.a=d},
YF:function YF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aPp:function aPp(d,e){this.c=d
this.a=e},
Lr:function Lr(d,e){this.c=d
this.a=e},
aQE:function aQE(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d_P:function d_P(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_O:function d_O(d,e){this.a=d
this.b=e},
d_L:function d_L(d){this.a=d},
d_M:function d_M(d){this.a=d},
d_K:function d_K(d,e){this.a=d
this.b=e},
d_N:function d_N(d){this.a=d},
d_J:function d_J(d){this.a=d},
aXQ:function aXQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aXR:function aXR(d,e,f){this.c=d
this.d=e
this.a=f},
aQK:function aQK(d,e){this.c=d
this.a=e},
aXP:function aXP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dgk:function dgk(d){this.a=d},
dgl:function dgl(d){this.a=d},
aS4:function aS4(d){this.a=d},
aLt:function aLt(d,e){this.c=d
this.a=e},
eih(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eig(v)
if(u!=null)return new C.r9(w,C.dI0(u,!1),D.ai9,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eif(v)
if(t!=null)return new C.r9(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aia,"TikTok",q)
s=C.eie(w,v)
if(s!=null)return s
r=C.eid(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.r9(w,w,D.cDn,"Video",q)
return q},
eie(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.r9(d,"https://www.instagram.com/reel/"+w+u,D.Qv,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.r9(d,"https://www.instagram.com/p/"+w+u,D.Qv,t,null)}return null},
eid(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.r9(d,"https://www.facebook.com/plugins/video.php?href="+A.fS(2,d,B.bw,!1)+"&show_text=false&width=734",D.aib,"Facebook",null)},
eig(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eif(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
Lv:function Lv(d,e){this.a=d
this.b=e},
r9:function r9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a95:function a95(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aQF:function aQF(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aS9:function aS9(d,e){this.c=d
this.a=e},
d47:function d47(d){this.a=d},
d48:function d48(d){this.a=d},
GG:function GG(d,e){this.c=d
this.a=e},
aoW:function aoW(){},
dUH(d,e,f,g,h,i){return new C.a96(i,f,h,e,g,d)},
eCp(d){var w=window
w.toString
A.jo(w,"message",new C.dzG(d),!1,x._)},
a96:function a96(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajr:function ajr(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d03:function d03(d){this.a=d},
d0c:function d0c(d){this.a=d},
d09:function d09(d){this.a=d},
d08:function d08(d){this.a=d},
d0a:function d0a(d){this.a=d},
d07:function d07(d){this.a=d},
d0b:function d0b(d){this.a=d},
d06:function d06(d){this.a=d},
d05:function d05(d){this.a=d},
d04:function d04(d){this.a=d},
dzG:function dzG(d){this.a=d},
ei9(){var w,v,u
try{v=A.rs()
w=v.gvb(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cA(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dI0(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bf(w,"&")},
buL(d){var w=A.am(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dUC(d){var w=A.aZ(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aZ(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eia(d,e,f){var w,v,u=C.buL(d)
if(u!=null){if(f){w=C.ei9()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dUC(C.dI0(u,e))}return C.dUC(d)},
eib(d){if(d<=4)return 0
return B.m.an(d-1,4)*4},
eic(d){var w
if($.QO().a==null)return!1
w=$.HV().a
return d>=w&&d<w+4},
dUF(){var w=$.aBV
if(w!=null)w.ac(0)
$.aBV=null
$.HV().sv(0,0)},
dUE(){var w,v,u,t=$.QO()
if(t.a==null)return
w=$.aBV
if(w!=null)w.ac(0)
v=$.dUD
if(v<=4){t=t.a
t.toString
C.dI1(t)
return}w=$.HV()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dI1(t)},
dI1(d){var w=$.aBV
if(w!=null)w.ac(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aBV=A.dD(A.dl(0,0,0,0,0,w),C.eCF())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OZ.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.d,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.Y(this.d,B.a6,w,w,14)
return A.q(w,A.I(A.a([r,B.fD,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cq,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hw,w,w,w)}}
C.oR.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ls.prototype={
W(){return new C.ajq(A.a([],x.e))},
geh(){return this.c}}
C.ajq.prototype={
a0(){var w=this
w.a4()
$.HV().az(0,w.gaBb())
C.eCp(w.gbum())
w.a0l()},
btO(){if(this.c!=null)this.n(new C.d_V())},
bun(){C.dUE()},
p(){$.HV().Z(0,this.gaBb())
C.dUF()
$.QO().sv(0,null)
this.a5()},
a0l(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Lu(t.a.c),$async$a0l)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d_U(t,s))
$.buM=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0l,v)},
WW(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d_S(t))
w=3
return A.b(C.aBW(t.a.c),$async$WW)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d_T(t,s))
$.buM=J.a4(t.d)
t.c.G(x.q).f.S(A.bh(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$WW,v)},
bwo(d){var w=this.c
w.toString
A.a2(w,!1).co(A.ez(new C.d_W(d),!1,null,x.H))},
bx4(){var w=this.c
w.toString
return C.a0K(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.B,t=u?B.i6:B.bD,s=A.bF(!0,A.v(A.a([new A.E(D.ZX,new A.jj(new C.d00(w),v),v),A.H(w.e?B.mQ:new A.lG($.QO(),new C.d01(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ad,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.avy(B.a6,B.IR,B.jZ,D.dm2,w.e?v:new C.d02(w)),v)}}
C.YF.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.d.k(0.1),B.r,1),q=A.a([new A.a6(0,B.G,B.a6.k(0.18),B.dB,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a95(n,!0,!C.eic(w),"Fold "+(B.m.an(w,4)+1)+"/"+B.m.an(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.Y(B.ko,B.oj,u,u,22),B.aN,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.d.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b0,B.k,0,B.q),B.j,B.Av,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aB(!1,B.R,!0,u,A.aI(!1,t,!0,A.v(A.a([A.H(A.q(u,A.bU(p,A.f9(A.v(A.a([new C.aPp(o,u),A.H(n,1),A.q(u,A.I(A.a([A.Y(B.xt,B.a6.k(0.85),u,u,9),B.aoF,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.d.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b0,B.k,0,u,u),B.j,B.ay,u,u,u,u,u,u,D.aK4,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aD),B.j,u,u,new A.o(u,u,r,s,q,D.a3z,B.o),u,u,u,u,B.fA,u,u,u),1),B.aN,A.d(o.b,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.as,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.as,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a3)}}
C.aPp.prototype={
B(d){var w=null
return A.q(w,A.I(A.a([A.H(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.as,w,w,w,A.l(w,w,B.d.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.u6,B.d.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.ay,w,w,w,w,w,w,B.ZL,w,w,w)}}
C.Lr.prototype={
W(){return new C.aQE()}}
C.aQE.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.B,u=v?B.i6:B.bD,t=A.aP(w,w,w,w,B.a2A,w,w,w,new C.d_P(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bF(!0,A.v(A.a([new A.E(D.ZX,A.I(A.a([t,A.H(new A.Lh(A.I(A.a([A.H(new A.E(B.jO,A.d(s.b+" \xb7 "+s.c,w,1,B.as,w,w,w,A.l(w,w,v?B.d:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aB(!1,B.R,!0,w,A.aI(!1,w,!0,new A.E(B.bq,A.Y(B.hz,B.a6,w,w,28),w),B.ck,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d_Q(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a3)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.H(new A.lG($.QO(),new C.d_R(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aXQ.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.G,B.a6.k(0.35),B.eE,28),new A.a6(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.J(B.d.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dUH(new A.d4(v+"_full_"+u,x.W),!1,u,!1,w.gaRy(),v+"_full")
w=v}else w=new C.aQK(t.r,s)}else w=new C.aLt(m,s)
else w=D.du4
return A.q(s,A.bU(n,A.f9(A.v(A.a([new C.aXR(m,l,s),A.H(w,1),new C.aXP(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aD),B.j,s,s,new A.o(s,s,o,q,p,D.a3z,B.o),s,r*2.05,s,s,B.bH,s,s,r)}}
C.aXR.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.d3(r)
r=A.h3(r)
w=new A.dQ(q,r)
v=w.gL0()===0?12:w.gL0()
r=B.b.bb(B.m.q(r),2,"0")
q=(q<12?B.hu:B.jH)===B.hu?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.I(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nS,s,s,s),B.b9,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.d.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bQ,D.aVP,B.dy,D.aUW,B.dy,D.aVU],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aN,A.I(A.a([A.Y(B.CZ,B.a6.k(0.9),s,s,12),B.dy,A.H(A.d(u.c,s,s,B.as,s,s,s,A.l(s,s,B.d.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.d.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.ay,s,s,s,s,s,s,D.aL4,s,s,s)}}
C.aQK.prototype={
B(d){var w=null
return A.q(w,A.aC(A.v(A.a([A.Y(B.Cr,B.d.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.d.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.d.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.eD(D.aZx,D.d8J,this.c,A.dy(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.q),w,w,w),B.j,B.Av,w,w,w,w,w,w,w,w,w,1/0)}}
C.aXP.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aAY(B.CS,"YouTube",s===0,r,new C.dgk(u))
s=u.aAY(B.jW,"Device",s===1,r,new C.dgl(u))
w=r?"Power off":"Power on"
v=r?D.a1E:D.aSS
return A.q(t,A.I(A.a([q,B.ai,s,B.b9,A.aP(t,t,t,t,A.Y(v,r?B.bP:B.fj,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dn)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.ay,t,t,t,t,t,t,D.aKF,t,t,t)},
aAY(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b6
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.H(A.aB(!1,B.R,!0,u,A.aI(!1,A.m(10),!0,new A.E(B.m2,A.v(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a3),1)}}
C.aS4.prototype={
B(d){return D.ayJ}}
C.aLt.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k8,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.d.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u8("Serial",u.c),q=w.u8("Model",u.d),p=w.u8("Device ID",u.e),o=w.u8("IMEI",u.r),n=w.u8("MAC",u.f),m=w.u8("OS",u.w+" "+u.x),l=w.u8("Location",u.y+", "+u.z),k=w.u8("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.u8("Timezone",u.at)
u=u.ax
return A.e1(A.a([t,B.aN,s,B.ae,r,q,p,o,n,m,l,k,j,w.u8("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bq,v,v,B.am,!1)},
u8(d,e){var w=null
return new A.E(B.dd,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.d.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.co,A.d(e,w,w,w,w,w,w,D.d_w,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.Lv.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.r9.prototype={
gaRy(){var w=this.c
return w===D.ai9||w===D.aia||w===D.Qv||w===D.aib}}
C.a95.prototype={
W(){return new C.aQF(null,null)}}
C.aQF.prototype={
a0(){this.a4()
var w=A.be(null,B.tj,null,1,null,this)
w.fU(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b0Z()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.o(t,t,t,t,t,new A.a9(B.bT,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cf(B.cQ,p,t)
w=B.d.k(0.92)
q=A.aC(new A.cH(new A.aX(p,new A.bi(0.72,1,q),q.j("aX<bl.T>")),!1,A.Y(B.ko,w,t,t,20),t),t,t,t)
p=u.a.e?B.d.k(0.22):B.oj
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aS9(s,t),r,q,A.ay(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.d,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.Q(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.d.k(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.d.k(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aw(B.a7,t,B.bb,B.t,s,t)}}
C.aS9.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kA(u,B.I,new C.d47(this),B.c9,B.bW,!0,w,w,new C.d48(this),w)
return new C.GG(v,w)}}
C.GG.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.t8,B.VJ],x.O),B.ko)
break
case 1:w=new A.aJ(A.a([B.Av,D.aEw],x.O),B.md)
break
case 2:w=new A.aJ(A.a([D.aGi,D.aDR],x.O),B.Cz)
break
case 3:w=new A.aJ(A.a([B.W,B.dQ],x.O),B.CH)
break
case 4:w=new A.aJ(A.a([B.ay,B.aP],x.O),B.qs)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.Y(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a9(B.aA,B.aC,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aoW.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcO())
w.aD$=null
w.a5()},
bd(){this.br()
this.bp()
this.cP()}}
C.a96.prototype={
W(){return new C.ajr()}}
C.ajr.prototype={
aap(d,e){var w,v=C.buL(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dI0(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eia(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bNL(){var w,v=this
if(v.w)return
v.n(new C.d03(v))
w=v.e
if(w!=null)v.aap(w,v.a.d)},
a0(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.HX()
$.qu().vl(w,new C.d0c(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d05(v))
w=v.e
w.toString
v.aap(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.d.k(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.a1W,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.d.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.Q,n,n)],v))
return A.f9(A.aC(new A.E(new A.Q(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a4_(n,B.uY,w)],v)
if(o.f)w.push(A.f9(A.aC(new A.aa(28,28,D.aA5,n),n,n,n),B.d2,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b6,B.r,1)
q=A.Y(B.Nl,B.d.k(0.9),n,n,22)
p=B.d.k(0.92)
o.a.toString
w.push(A.e8(0,A.aB(!1,B.R,!0,n,A.aI(!1,n,!0,A.aC(A.q(n,A.I(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.La,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbNK(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a3)))}v=C.buL(o.a.d)
if(v!=null)w.push(A.ay(8,A.jn(D.aXp,D.dh1,new C.d04(o),A.ix(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hw,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aw(B.a7,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["p(oR)","~()","Ls(O)","oR(Z<@,@>)","a_(oR)","Z<p,@>(oR)","aD<~>()","Lr(O)","lG<L>(O,r9?,r?)","YF(O,L)","uZ(O,r9?,r?)","GG(O,ar,dP?)"])
C.dDV.prototype={
$1(d){return new C.Ls(this.a,null)},
$S:z+2}
C.dDU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.B,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.W],j):A.a([B.d,B.az],j),h=A.a([new A.a6(0,B.G,B.a6.k(0.22),B.eE,32)],x.V),g=A.J(m?B.cn:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aUC,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.d:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aN,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.q(n,A.I(A.a([e,B.ej,w,A.aP(n,n,n,n,A.Y(B.cR,m?B.at:B.d2,n,n,n),n,n,n,new C.dDQ(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a9(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.Lh,n,n,n)
e=A.eq(B.cS,A.a([new C.OZ("YouTube",B.Ng,m,n),new C.OZ("TikTok",B.md,m,n),new C.OZ("Instagram",B.Cz,m,n),new C.OZ("Facebook",B.CH,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.d:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cb:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bD
r=A.Y(B.fK,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cn:B.aK
u=A.v(A.a([e,B.aS,A.aN(n,B.S,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bm(n,new A.b4(4,q,B.U),n,n,n,n,n,n,!0,new A.b4(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b4(4,A.m(16),B.Ut),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ac,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a1,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.ap,n,B.i,B.k,0,B.q)
e=A.jn(D.aUG,D.dl4,new C.dDR(d),A.ix(n,n,n,n,n,n,n,n,n,n,n,m?B.bB:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.E(new A.Q(12,0,12,12+l.f.d),A.cz(A.bU(f,A.v(A.a([j,new A.E(B.Zs,u,n),new A.E(D.aMu,A.I(A.a([e,B.b9,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dDS(d),n,n),B.ai,A.dF(D.aZe,D.dlU,new C.dDT(d,w),A.bn(B.a6,n,n,n,B.d,n,B.La,n,new A.br(A.m(14),B.U),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ap,n,B.i,B.Z,0,B.q),B.aD),new A.o(n,n,g,k,h,new A.a9(B.aA,B.aC,B.E,i,n,n),B.o),B.br),n)},
$S:68}
C.dDQ.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dDR.prototype={
$0(){C.dUF()
$.QO().sv(0,null)
A.a2(this.a,!1).N(null)},
$S:0}
C.dDS.prototype={
$0(){A.a2(this.a,!1).N(null)
return null},
$S:0}
C.dDT.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a2(this.a,!1).N(w)
return null},
$S:0}
C.buX.prototype={
$1(d){return C.dUG(A.R(d,x.N,x.z))},
$S:z+3}
C.buY.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.buP.prototype={
$1(d){return d.c},
$S:z+0}
C.buQ.prototype={
$1(d){return d.r},
$S:z+0}
C.buR.prototype={
$1(d){return d.f},
$S:z+0}
C.buS.prototype={
$1(d){return d.at},
$S:z+0}
C.buT.prototype={
$1(d){return d.c},
$S:z+0}
C.buU.prototype={
$1(d){return d.r},
$S:z+0}
C.buV.prototype={
$1(d){return d.f},
$S:z+0}
C.buW.prototype={
$1(d){return d.at},
$S:z+0}
C.buO.prototype={
$1(d){return d.aa()},
$S:z+5}
C.buN.prototype={
$1(d){return B.b.bb(B.m.ha(d,16),2,"0").toUpperCase()},
$S:79}
C.d_V.prototype={
$0(){},
$S:0}
C.d_U.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d_S.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d_T.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d_W.prototype={
$1(d){return new C.Lr(this.a,null)},
$S:z+7}
C.d00.prototype={
$4(d,e,f,g){var w=null,v=A.aP(w,w,w,w,B.qw,w,w,w,new C.d0_(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.I(A.a([v,A.H(A.h0(A.I(A.a([new A.oP(D.xW,e,g,36,B.CZ,w),B.aO,A.H(A.d(t,w,1,B.as,w,w,w,A.l(w,w,B.d,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fA(B.f.gI(D.xW).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aB(!1,B.R,!0,w,A.aI(!1,w,!0,new A.E(B.bH,A.Y(B.hz,A.ao(B.f.gI(D.xW),B.f.ga7(D.xW),e),w,w,28),w),B.ck,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbx3(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a3)],s),B.n,w,B.i,B.k,0,w,w),D.xW,w,g,B.f5,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:338}
C.d0_.prototype={
$0(){return A.a2(this.a,!1).ep()},
$S:0}
C.d01.prototype={
$3(d,e,f){return new A.lG($.HV(),new C.d_Z(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d_Z.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Eu(d,k,x.Q)
w=w==null?k:w.glN()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.Y(B.ko,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.HV().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.I(A.a([q,B.ai,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.d:B.W,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dr,B.f4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bU(s,new A.hI(1.7777777777777777,C.dUH(new A.d4("fleet_master_"+r,x.W),!0,r,!0,j.gaRy(),"fleet_master"),k),B.aD),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wS(0,B.t,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.l4(new A.E(B.L4,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.p0(D.aKf,A.aG_(new A.oc(new C.d_Y(i,j),J.a4(i.d),!1,!0,!0,A.uq(),k),D.cTK),k)],w))},
$S:1826}
C.d_Y.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.YF(v,e,J.a4(w.d),new C.d_X(w,v),this.b,null)},
$S:z+9}
C.d_X.prototype={
$0(){return this.a.bwo(this.b)},
$S:0}
C.d02.prototype={
$0(){this.a.WW()
return null},
$S:0}
C.d_P.prototype={
$0(){return A.a2(this.a,!1).ep()},
$S:0}
C.d_Q.prototype={
$0(){C.a0K(this.a,$.buM)
return null},
$S:0}
C.d_R.prototype={
$3(d,e,f){return A.eN(new C.d_O(this.a,e))},
$S:z+10}
C.d_O.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cy(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.Q,v,v),B.aS,new C.aXQ(u,s.a.c,s.e,s.d,new C.d_L(s),new C.d_M(s),new C.d_N(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.t,v,B.F,v,B.os,v,v,B.am),v,v,v)},
$S:1827}
C.d_L.prototype={
$0(){var w=this.a.c
w.toString
C.a0K(w,$.buM)
return null},
$S:0}
C.d_M.prototype={
$1(d){var w=this.a
return w.n(new C.d_K(w,d))},
$S:29}
C.d_K.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d_N.prototype={
$0(){var w=this.a
return w.n(new C.d_J(w))},
$S:0}
C.d_J.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dgk.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dgl.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d47.prototype={
$3(d,e,f){return new C.GG(this.a.c,null)},
$S:z+11}
C.d48.prototype={
$3(d,e,f){if(f==null)return e
return new A.aw(B.a7,null,B.bb,B.t,A.a([new C.GG(this.a.c,null),D.az4],x.p),null)},
$C:"$3",
$R:3,
$S:527}
C.d03.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d0c.prototype={
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
w.aap(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.jo(v,"load",new C.d09(w),!1,u)
v=w.e
v.toString
A.jo(v,"error",new C.d0a(w),!1,u)
A.bM(B.ki,new C.d0b(w),x.H)
w=w.e
w.toString
return w},
$S:640}
C.d09.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d08(w))},
$S:51}
C.d08.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d0a.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d07(w))},
$S:51}
C.d07.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d0b.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d06(w))},
$S:12}
C.d06.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d05.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d04.prototype={
$0(){var w,v=C.buL(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nZ.UB(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dzG.prototype={
$1(d){var w,v,u,t,s=new A.vS([],[]).x0(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1828};(function aliases(){var w=C.aoW.prototype
w.b0Z=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajq.prototype,"gaBb","btO",1)
w(u,"gbum","bun",1)
w(u,"gbx3","bx4",6)
w(C.ajr.prototype,"gbNK","bNL",1)
v(C,"eCF","dUE",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zG,[C.dDV,C.dDU,C.buX,C.buY,C.buP,C.buQ,C.buR,C.buS,C.buT,C.buU,C.buV,C.buW,C.buO,C.buN,C.d_W,C.d00,C.d01,C.d_Z,C.d_R,C.d_M,C.d47,C.d48,C.d0c,C.d09,C.d0a,C.dzG])
v(A.a28,[C.dDQ,C.dDR,C.dDS,C.dDT,C.d_V,C.d_U,C.d_S,C.d_T,C.d0_,C.d_X,C.d02,C.d_P,C.d_Q,C.d_L,C.d_K,C.d_N,C.d_J,C.dgk,C.dgl,C.d03,C.d08,C.d07,C.d0b,C.d06,C.d05,C.d04])
v(A.ap,[C.OZ,C.YF,C.aPp,C.aXQ,C.aXR,C.aQK,C.aXP,C.aS4,C.aLt,C.aS9,C.GG])
v(A.ar,[C.oR,C.r9])
v(A.ad,[C.Ls,C.Lr,C.a95,C.a96])
v(A.ae,[C.ajq,C.aQE,C.aoW,C.ajr])
v(A.a29,[C.d_Y,C.d_O])
u(C.Lv,A.aMo)
u(C.aQF,C.aoW)
w(C.aoW,A.dz)})()
A.dY5(b.typeUniverse,JSON.parse('{"Ls":{"ad":[],"r":[]},"YF":{"ap":[],"r":[]},"Lr":{"ad":[],"r":[]},"OZ":{"ap":[],"r":[]},"ajq":{"ae":["Ls"]},"aPp":{"ap":[],"r":[]},"aQE":{"ae":["Lr"]},"aXQ":{"ap":[],"r":[]},"aXR":{"ap":[],"r":[]},"aQK":{"ap":[],"r":[]},"aXP":{"ap":[],"r":[]},"aS4":{"ap":[],"r":[]},"aLt":{"ap":[],"r":[]},"a95":{"ad":[],"r":[]},"GG":{"ap":[],"r":[]},"aQF":{"ae":["a95"]},"aS9":{"ap":[],"r":[]},"a96":{"ad":[],"r":[]},"ajr":{"ae":["a96"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a8<a6>"),O:w("a8<x>"),e:w("a8<oR>"),S:w("a8<fA>"),s:w("a8<p>"),p:w("a8<r>"),t:w("a8<L>"),X:w("af<oR>"),a:w("af<@>"),P:w("Z<p,@>"),f:w("Z<@,@>"),w:w("oL"),_:w("Er"),k:w("oR"),N:w("p"),Y:w("bi<a3>"),W:w("d4<p>"),J:w("lG<L>"),j:w("lG<r9?>"),E:w("vY<d_>"),q:w("ZA"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a1E=new A.P(983224,"MaterialIcons",!1)
D.aXw=new A.ab(D.a1E,48,B.b6,null,null,null)
D.d7E=new A.A("Powered off",null,B.apH,null,null,null,null,null,null,null,null,null)
D.bTZ=w([D.aXw,B.N,D.d7E],x.p)
D.aHD=new A.eT(B.am,B.i,B.Z,B.n,null,B.q,null,0,D.bTZ,null)
D.ayJ=new A.cY(B.I,null,null,D.aHD,null)
D.cTp=new A.aa(18,18,B.Vq,null)
D.az4=new A.cY(B.I,null,null,D.cTp,null)
D.aA5=new A.fs(2,null,null,null,null,B.aa,null,null,null,null)
D.aDR=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.w)
D.aEw=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.w)
D.aGi=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.w)
D.aK4=new A.Q(0,3,0,3)
D.aKf=new A.Q(10,0,10,88)
D.aKF=new A.Q(12,6,12,10)
D.aL4=new A.Q(14,8,14,6)
D.aMu=new A.Q(20,8,20,20)
D.ZX=new A.Q(8,6,15,8)
D.aSS=new A.P(983222,"MaterialIcons",!1)
D.aUC=new A.ab(B.ko,26,B.a6,null,null,null)
D.aUG=new A.ab(B.a0K,18,null,null,null,null)
D.aUW=new A.ab(B.u6,14,B.aa,null,null,null)
D.aTb=new A.P(983420,"MaterialIcons",!1)
D.aVP=new A.ab(D.aTb,14,B.aa,null,null,null)
D.aRd=new A.P(62895,"MaterialIcons",!1)
D.aVU=new A.ab(D.aRd,14,B.aa,null,null,null)
D.aXp=new A.ab(B.u0,16,B.aa,null,null,null)
D.aZe=new A.ab(B.je,20,null,null,null,null)
D.aZx=new A.ab(B.hz,16,null,null,null,null)
D.bXO=w([B.aP,B.W],x.O)
D.a3z=new A.a9(B.aA,B.aC,B.E,D.bXO,null,null)
D.cMC=new A.aJ("NGMY OS","14.2.1")
D.cLc=new A.aJ("VirtualDroid","13.8.4")
D.cLb=new A.aJ("NGMY OS","15.0.0")
D.cM5=new A.aJ("VirtualDroid","14.1.2")
D.cL7=new A.aJ("NGMY Tab OS","12.9.7")
D.cL5=new A.aJ("NGMY OS","13.5.3")
D.cKV=new A.aJ("VirtualDroid","15.2.0")
D.cLC=new A.aJ("NGMY OS","14.8.1")
D.cMa=new A.aJ("NGMY Tab OS","13.2.4")
D.cMP=new A.aJ("VirtualDroid","12.6.9")
D.cKP=new A.aJ("NGMY OS","16.0.1")
D.cKF=new A.aJ("VirtualDroid","14.9.0")
D.cMs=new A.aJ("NGMY Tab OS","14.0.3")
D.cLn=new A.aJ("NGMY OS","13.1.8")
D.cKN=new A.aJ("VirtualDroid","13.4.5")
D.cL4=new A.aJ("NGMY OS","15.3.2")
D.cMb=new A.aJ("NGMY Tab OS","12.4.1")
D.cMv=new A.aJ("VirtualDroid","16.1.0")
D.cLB=new A.aJ("NGMY OS","14.4.6")
D.cMD=new A.aJ("VirtualDroid","15.0.8")
D.bWX=w([D.cMC,D.cLc,D.cLb,D.cM5,D.cL7,D.cL5,D.cKV,D.cLC,D.cMa,D.cMP,D.cKP,D.cKF,D.cMs,D.cLn,D.cKN,D.cL4,D.cMb,D.cMv,D.cLB,D.cMD],A.b3("a8<+(p,p)>"))
D.xW=w([B.a6,B.fz],x.O)
D.cP_=new A.f1(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cOy=new A.f1(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cOt=new A.f1(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cOC=new A.f1(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cOp=new A.f1(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cOE=new A.f1(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cP1=new A.f1(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cOq=new A.f1(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cOx=new A.f1(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cOG=new A.f1(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cOo=new A.f1(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cOU=new A.f1(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cOR=new A.f1(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cOw=new A.f1(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cOO=new A.f1(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cON=new A.f1(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cOn=new A.f1(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cOB=new A.f1(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cOL=new A.f1(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cOQ=new A.f1(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.aao=w([D.cP_,D.cOy,D.cOt,D.cOC,D.cOp,D.cOE,D.cP1,D.cOq,D.cOx,D.cOG,D.cOo,D.cOU,D.cOR,D.cOw,D.cOO,D.cON,D.cOn,D.cOB,D.cOL,D.cOQ],A.b3("a8<+(p,p,a3,a3,p)>"))
D.c5L=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ai9=new C.Lv(0,"youtube")
D.aia=new C.Lv(1,"tiktok")
D.Qv=new C.Lv(2,"instagram")
D.aib=new C.Lv(3,"facebook")
D.cDn=new C.Lv(4,"other")
D.cTK=new A.hH(4,10,8,0.52,null)
D.d8V=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cX7=new A.aU(D.d8V,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.t,null)
D.d_w=new A.M(!0,B.d,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d8J=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dh1=new A.A("Open in YouTube",null,B.jt,null,null,null,null,null,null,null,null,null)
D.dl4=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dlU=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dm2=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.du4=new C.aS4(null)})();(function staticFields(){$.dUD=20
$.aBV=null
$.buM=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eHD","HV",()=>A.adx(0))
w($,"eHE","QO",()=>A.adx(null))})()};
(a=>{a["Jq+Y1pbDsKPYVRAiwM2WC9Syots="]=a.current})($__dart_deferred_initializers__);