((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eeT(d,e){A.a6(d,!1).cA(A.eD(new C.dh4(e),!0,null,x.H))},
Z3(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Z3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OP()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b1(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dh3(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Z3)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVg(r)
if(q==null){d.G(x.q).f.R(D.cJ8)
w=1
break}w=4
return A.b(A.bR(B.i9,null,x.H),$async$Z3)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dxh=n
p=C.dVa(n)
n=$.Gf()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dl8(q)
d.G(x.q).f.R(A.bo(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Z3,v)},
dxk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oa(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JI(d){return C.dVj(d)},
dVj(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JI=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JI)
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
case 10:k=J.eO(r,x.f)
k=A.du(k,new C.bn5(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.C(new A.ag(k,new C.bn6(),j),j.j("G.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dxm(q)
w=12
return A.b(C.JH(a3,p),$async$JI)
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
case 19:m=C.dxk(A.T(n,x.N,x.z))
l=C.dxm(A.a([m],x.e))
w=21
return A.b(C.JH(a3,l),$async$JI)
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
case 18:case 14:q=C.dVh()
w=22
return A.b(C.JH(a3,q),$async$JI)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JI,v)},
dxm(d){var w=A.X(d).j("D<1,o>"),v=new A.D(d,new C.bmY(),w).eJ(0),u=new A.D(d,new C.bmZ(),w).eJ(0),t=new A.D(d,new C.bn_(),w).eJ(0),s=new A.D(d,new C.bn0(),w).eJ(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dl9(null,q,u,t,v,s));++q}return r},
awc(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JI(d),$async$awc)
case 3:t=f
s=x.N
r=J.ch(t)
q=r.dd(t,new C.bn1(),s).eJ(0)
p=r.dd(t,new C.bn2(),s).eJ(0)
o=r.dd(t,new C.bn3(),s).eJ(0)
n=r.dd(t,new C.bn4(),s).eJ(0)
m=C.dl9(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JH(d,t),$async$awc)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awc,v)},
JH(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JH)
case 2:u=g
t=B.b.i(d)
s=J.b6(e,new C.bmX(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JH)
case 3:return A.h(null,v)}})
return A.i($async$JH,v)},
dVh(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dl9(w,w,t,s,u,r)
return q},
dl9(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jz(),h=d==null,g=D.a6a[B.l.a4(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6a[B.l.a4(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bmW(),A.X(p).j("D<1,o>")).fq(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fq(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hu(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a4(e,20)
k=D.bVT[w]
j=D.bN7[w]
return new C.oa("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dVi(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
dVi(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hu(d.bG(256),16),2,"0")
return B.h.fq(v)},
dh4:function dh4(d){this.a=d},
dh3:function dh3(d,e){this.a=d
this.b=e},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
N9:function N9(d,e,f,g){var _=this
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
bn5:function bn5(){},
bn6:function bn6(){},
bmY:function bmY(){},
bmZ:function bmZ(){},
bn_:function bn_(){},
bn0:function bn0(){},
bn1:function bn1(){},
bn2:function bn2(){},
bn3:function bn3(){},
bn4:function bn4(){},
bmX:function bmX(){},
bmW:function bmW(){},
JG:function JG(d,e){this.c=d
this.a=e},
afF:function afF(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGN:function cGN(){},
cGM:function cGM(d,e){this.a=d
this.b=e},
cGK:function cGK(d){this.a=d},
cGL:function cGL(d,e){this.a=d
this.b=e},
cGO:function cGO(d){this.a=d},
cGS:function cGS(d){this.a=d},
cGT:function cGT(d,e){this.a=d
this.b=e},
cGR:function cGR(d,e,f){this.a=d
this.b=e
this.c=f},
cGQ:function cGQ(d,e){this.a=d
this.b=e},
cGP:function cGP(d,e){this.a=d
this.b=e},
cGU:function cGU(d){this.a=d},
Wm:function Wm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJ5:function aJ5(d,e){this.c=d
this.a=e},
JF:function JF(d,e){this.c=d
this.a=e},
aK5:function aK5(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGH:function cGH(d){this.a=d},
cGI:function cGI(d){this.a=d},
cGJ:function cGJ(d){this.a=d},
cGG:function cGG(d,e){this.a=d
this.b=e},
cGD:function cGD(d){this.a=d},
cGE:function cGE(d){this.a=d},
cGC:function cGC(d,e){this.a=d
this.b=e},
cGF:function cGF(d){this.a=d},
cGB:function cGB(d){this.a=d},
aQW:function aQW(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQX:function aQX(d,e,f){this.c=d
this.d=e
this.a=f},
aKb:function aKb(d,e){this.c=d
this.a=e},
aQV:function aQV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cW8:function cW8(d){this.a=d},
cW9:function cW9(d){this.a=d},
aLs:function aLs(d){this.a=d},
aFm:function aFm(d,e){this.c=d
this.a=e},
dVg(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVf(v)
if(u!=null)return new C.qj(w,C.dl7(u,!1),D.adF,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVe(v)
if(t!=null)return new C.qj(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adG,"TikTok",q)
s=C.dVd(w,v)
if(s!=null)return s
r=C.dVc(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qj(w,w,D.cqB,"Video",q)
return q},
dVd(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dB(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qj(d,"https://www.instagram.com/reel/"+w+u,D.NB,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dB(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qj(d,"https://www.instagram.com/p/"+w+u,D.NB,t,null)}return null},
dVc(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qj(d,"https://www.facebook.com/plugins/video.php?href="+A.fE(2,d,B.bh,!1)+"&show_text=false&width=734",D.adH,"Facebook",null)},
dVf(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dB(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVe(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dB(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dB(d)
return w==null?null:w.b[1]},
JJ:function JJ(d,e){this.a=d
this.b=e},
qj:function qj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a66:function a66(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aK6:function aK6(d,e){var _=this
_.d=$
_.cX$=d
_.aV$=e
_.c=_.a=null},
aLx:function aLx(d,e){this.c=d
this.a=e},
cLu:function cLu(d){this.a=d},
cLv:function cLv(d){this.a=d},
F4:function F4(d,e){this.c=d
this.a=e},
akq:function akq(){},
dxl(d,e,f,g,h,i){return new C.a67(i,f,h,e,g,d)},
edq(d){var w=window
w.toString
A.hh(w,"message",new C.dd0(d),!1,x._)},
a67:function a67(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afG:function afG(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cGV:function cGV(d){this.a=d},
cH3:function cH3(d){this.a=d},
cH1:function cH1(d){this.a=d},
cH_:function cH_(d){this.a=d},
cH0:function cH0(d){this.a=d},
cGY:function cGY(d){this.a=d},
cH2:function cH2(d){this.a=d},
cGZ:function cGZ(d){this.a=d},
cGX:function cGX(d){this.a=d},
cGW:function cGW(d){this.a=d},
dd0:function dd0(d){this.a=d},
dV8(){var w,v,u
try{v=A.Av()
w=v.grT(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cK(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dl7(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bn(w,"&")},
bmU(d){var w=A.aq(y.c,!0,!1,!1,!1).dB(d)
return w==null?null:w.b[1]},
dxg(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dV9(d,e,f){var w,v,u=C.bmU(d)
if(u!=null){if(f){w=C.dV8()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxg(C.dl7(u,e))}return C.dxg(d)},
dVa(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
dVb(d){var w
if($.OP().a==null)return!1
w=$.Gf().a
return d>=w&&d<w+4},
dxj(){var w=$.awb
if(w!=null)w.ad(0)
$.awb=null
$.Gf().sv(0,0)},
dxi(){var w,v,u,t=$.OP()
if(t.a==null)return
w=$.awb
if(w!=null)w.ad(0)
v=$.dxh
if(v<=4){t=t.a
t.toString
C.dl8(t)
return}w=$.Gf()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dl8(t)},
dl8(d){var w=$.awb
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
default:w=null}$.awb=A.dL(A.dr(0,0,0,0,0,w),C.edF())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.N9.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.Z(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fR,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fq,w,w,w)}}
C.oa.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JG.prototype={
U(){return new C.afF(A.a([],x.e))},
ge_(){return this.c}}
C.afF.prototype={
a_(){var w=this
w.a6()
$.Gf().ap(0,w.gawZ())
C.edq(w.gbmB())
w.YC()},
blZ(){if(this.c!=null)this.p(new C.cGN())},
bmC(){C.dxi()},
q(){$.Gf().Z(0,this.gawZ())
C.dxj()
$.OP().sv(0,null)
this.a5()},
YC(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JI(t.a.c),$async$YC)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGM(t,s))
$.bmV=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$YC,v)},
UB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cGK(t))
w=3
return A.b(C.awc(t.a.c),$async$UB)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGL(t,s))
$.bmV=J.a5(t.d)
t.c.G(x.q).f.R(A.bo(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UB,v)},
bow(d){var w=this.c
w.toString
A.a6(w,!1).cA(A.eD(new C.cGO(d),!1,null,x.H))},
bp6(){var w=this.c
w.toString
return C.Z3(w,J.a5(this.d))},
C(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fa:B.bv,s=A.aM(v,v,v,v,B.KV,v,v,v,new C.cGS(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a5(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.Dt(A.H(A.a([A.I(new A.J(B.j5,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aR(!1,v,!0,new A.J(B.bc,A.Z(B.h8,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbp5(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c7(!0,A.w(A.a([new A.J(D.Ww,r,v),A.I(w.e?B.n4:new A.lb($.OP(),new C.cGT(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqk(B.a6,B.Gi,B.mh,D.d5T,w.e?v:new C.cGU(w)),v)}}
C.Wm.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a6.l(0.18),B.dj,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a66(n,!0,!C.dVb(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Z(B.jL,B.nd,u,u,22),B.aO,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yJ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aR(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cf(p,A.fT(A.w(A.a([new C.aJ5(o,u),A.I(n,1),A.t(u,A.H(A.a([A.Z(B.B6,B.a6.l(0.85),u,u,9),D.cEW,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aCz,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.q(u,u,r,s,q,D.a_B,B.p),u,u,u,B.fK,u,u,u),1),B.aO,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJ5.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gav(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.rF,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.Wm,w,w,w)}}
C.JF.prototype={
U(){return new C.aK5()}}
C.aK5.prototype={
C(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fa:B.bv,t=A.aM(w,w,w,w,B.KV,w,w,w,new C.cGH(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c7(!0,A.w(A.a([new A.J(D.Ww,A.H(A.a([t,A.I(new A.Dt(A.H(A.a([A.I(new A.J(B.j5,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aR(!1,w,!0,new A.J(B.bc,A.Z(B.h8,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGI(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.lb($.OP(),new C.cGJ(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aQW.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a6.l(0.35),B.f2,28),new A.aa(0,B.G,B.A.l(0.45),B.d9,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxl(new A.dv(v+"_full_"+u,x.W),!1,u,!1,w.gaMB(),v+"_full")
w=v}else w=new C.aKb(t.r,s)}else w=new C.aFm(m,s)
else w=D.dcj
return A.t(s,A.cf(n,A.fT(A.w(A.a([new C.aQX(m,l,s),A.I(w,1),new C.aQV(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.q(s,s,o,q,p,D.a_B,B.p),s,r*2.05,s,B.bS,s,s,r)}}
C.aQX.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dC(r)
r=A.hK(r)
w=new A.dD(q,r)
v=w.gJf()===0?12:w.gJf()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j2)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mM,s,s,s),B.bB,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNu,B.ep,D.aMH,B.ep,D.aNy],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.Z(B.KL,B.a6.l(0.9),s,s,12),B.ep,A.I(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDm,s,s,s)}}
C.aKb.prototype={
C(d){var w=null
return A.t(w,A.aJ(A.w(A.a([A.Z(B.AE,B.e.l(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aR0,D.cUs,this.c,A.eh(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yJ,w,w,w,w,w,w,w,w,1/0)}}
C.aQV.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awQ(B.AX,"YouTube",s===0,r,new C.cW8(u))
s=u.awQ(B.lk,"Device",s===1,r,new C.cW9(u))
w=r?"Power off":"Power on"
v=r?D.YZ:D.aKI
return A.t(t,A.H(A.a([q,B.am,s,B.bB,A.aM(t,t,t,t,A.Z(v,r?B.bD:B.fx,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aD6,t,t,t)},
awQ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bn
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.W,!0,u,A.aR(!1,A.m(10),!0,new A.J(B.nn,A.w(A.a([A.Z(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLs.prototype={
C(d){return D.asU}}
C.aFm.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lF,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tB("Serial",u.c),q=w.tB("Model",u.d),p=w.tB("Device ID",u.e),o=w.tB("IMEI",u.r),n=w.tB("MAC",u.f),m=w.tB("OS",u.w+" "+u.x),l=w.tB("Location",u.y+", "+u.z),k=w.tB("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tB("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tB("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tB(d,e){var w=null
return new A.J(B.cP,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cG,A.d(e,w,w,w,w,w,w,D.cMk,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JJ.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qj.prototype={
gaMB(){var w=this.c
return w===D.adF||w===D.adG||w===D.NB||w===D.adH}}
C.a66.prototype={
U(){return new C.aK6(null,null)}}
C.aK6.prototype={
a_(){this.a6()
var w=A.bJ(null,B.v9,null,1,null,this)
w.n5(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWk()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dq(t,new A.q(t,t,t,t,t,new A.ak(B.cN,B.cx,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bT),q=x.Y,p=u.d
p===$&&A.c()
p=A.cw(B.i8,p,t)
w=B.e.l(0.92)
q=A.aJ(new A.d2(new A.b2(p,new A.bl(0.72,1,q),q.j("b2<bk.T>")),!1,A.Z(B.jL,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nd
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLx(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bb,B.y,s,t)}}
C.aLx.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kp(u,new C.cLu(this),B.c8,B.bM,!0,w,w,new C.cLv(this),w)
return new C.F4(v,w)}}
C.F4.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uO,B.St],x.O),B.jL)
break
case 1:w=new A.aN(A.a([B.yJ,D.axn],x.O),B.ll)
break
case 2:w=new A.aN(A.a([D.ayU,D.awO],x.O),B.AL)
break
case 3:w=new A.aN(A.a([B.Y,B.du],x.O),B.AP)
break
case 4:w=new A.aN(A.a([B.az,B.aN],x.O),B.pd)
break
default:w=u}v=w.a
return A.t(u,A.aJ(A.Z(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.q(u,u,u,u,u,new A.ak(B.aM,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akq.prototype={
q(){var w=this,v=w.aV$
if(v!=null)v.Z(0,w.gdE())
w.aV$=null
w.a5()},
by(){this.bP()
this.bK()
this.dF()}}
C.a67.prototype={
U(){return new C.afG()}}
C.afG.prototype={
a7n(d,e){var w,v=C.bmU(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dl7(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dV9(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEi(){var w,v=this
if(v.w)return
v.p(new C.cGV(v))
w=v.e
if(w!=null)v.a7n(w,v.a.d)},
a_(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.Gh()
$.pE().uP(w,new C.cH3(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cGX(v))
w=v.e
w.toString
v.a7n(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Zd,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aJ(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1t(n,B.tp,w)],v)
if(o.f)w.push(A.fT(A.aJ(new A.ac(28,28,D.atV,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bn,B.w,1)
q=A.Z(B.KP,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eR(0,A.aL(!1,B.W,!0,n,A.aR(!1,n,!0,A.aJ(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.VS,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEh(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bmU(o.a.d)
if(v!=null)w.push(A.aT(8,A.jq(D.aP1,D.d16,new C.cGW(o),A.iN(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fq,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.al,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(oa)","~()","JG(R)","oa(a_<@,@>)","a1(oa)","a_<o,@>(oa)","aB<~>()","JF(R)","lb<K>(R,qj?,p?)","Wm(R,K)","tT(R,qj?,p?)","F4(R,al,dQ?)"])
C.dh4.prototype={
$1(d){return new C.JG(this.a,null)},
$S:z+2}
C.dh3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dX,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a6.l(0.22),B.f2,32)],x.V),g=A.O(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMo,B.k,n,n,new A.q(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Z(B.d6,m?B.ax:B.d1,n,n,n),n,n,n,new C.dh_(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.q(n,n,n,n,n,new A.ak(B.ae,B.ag,B.H,j,n,n),B.p),n,n,n,B.ID,n,n,n)
e=A.el(B.cF,A.a([new C.N9("YouTube",B.KK,m,n),new C.N9("TikTok",B.ll,m,n),new C.N9("Instagram",B.AL,m,n),new C.N9("Facebook",B.AP,m,n)],v),B.cr,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bv
r=A.Z(B.fM,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.bq(n,new A.b9(4,q,B.X),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.Re),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.jq(D.aMr,D.d50,new C.dh0(d),A.iN(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dq(A.cf(f,A.w(A.a([j,new A.J(B.W6,u,n),new A.J(D.aEB,A.H(A.a([e,B.bB,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dh1(d),n,n),B.am,A.dN(D.aQK,D.d5O,new C.dh2(d,w),A.bx(B.a6,n,n,n,B.e,n,D.VS,n,new A.bF(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a1,0,B.q),B.aI),new A.q(n,n,g,k,h,new A.ak(B.aM,B.aR,B.H,i,n,n),B.p),B.bT),n)},
$S:80}
C.dh_.prototype={
$0(){A.a6(this.a,!1).T(null)
return null},
$S:0}
C.dh0.prototype={
$0(){C.dxj()
$.OP().sv(0,null)
A.a6(this.a,!1).T(null)},
$S:0}
C.dh1.prototype={
$0(){A.a6(this.a,!1).T(null)
return null},
$S:0}
C.dh2.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a6(this.a,!1).T(w)
return null},
$S:0}
C.bn5.prototype={
$1(d){return C.dxk(A.T(d,x.N,x.z))},
$S:z+3}
C.bn6.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bmY.prototype={
$1(d){return d.c},
$S:z+0}
C.bmZ.prototype={
$1(d){return d.r},
$S:z+0}
C.bn_.prototype={
$1(d){return d.f},
$S:z+0}
C.bn0.prototype={
$1(d){return d.at},
$S:z+0}
C.bn1.prototype={
$1(d){return d.c},
$S:z+0}
C.bn2.prototype={
$1(d){return d.r},
$S:z+0}
C.bn3.prototype={
$1(d){return d.f},
$S:z+0}
C.bn4.prototype={
$1(d){return d.at},
$S:z+0}
C.bmX.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bmW.prototype={
$1(d){return B.b.bi(B.l.hu(d,16),2,"0").toUpperCase()},
$S:83}
C.cGN.prototype={
$0(){},
$S:0}
C.cGM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGK.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGL.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cGO.prototype={
$1(d){return new C.JF(this.a,null)},
$S:z+7}
C.cGS.prototype={
$0(){return A.a6(this.a,!1).ev()},
$S:0}
C.cGT.prototype={
$3(d,e,f){return new A.lb($.Gf(),new C.cGR(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cGR.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CV(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.Z(B.jL,B.a6,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.Gf().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dc,B.fr,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cf(s,new A.j3(1.7777777777777777,C.dxl(new A.dv("fleet_master_"+r,x.W),!0,r,!0,j.gaMB(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vM(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kx(new A.J(B.Iu,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ok(D.aCJ,A.aAh(new A.nu(new C.cGQ(i,j),J.a5(i.d),!1,!0,!0,A.tq(),k),D.cFH),k)],w))},
$S:1689}
C.cGQ.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wm(v,e,J.a5(w.d),new C.cGP(w,v),this.b,null)},
$S:z+9}
C.cGP.prototype={
$0(){return this.a.bow(this.b)},
$S:0}
C.cGU.prototype={
$0(){this.a.UB()
return null},
$S:0}
C.cGH.prototype={
$0(){return A.a6(this.a,!1).ev()},
$S:0}
C.cGI.prototype={
$0(){C.Z3(this.a,$.bmV)
return null},
$S:0}
C.cGJ.prototype={
$3(d,e,f){return A.fn(new C.cGG(this.a,e))},
$S:z+10}
C.cGG.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.co(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aQW(u,s.a.c,s.e,s.d,new C.cGD(s),new C.cGE(s),new C.cGF(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oQ,v,v,B.ak),v,v,v)},
$S:1690}
C.cGD.prototype={
$0(){var w=this.a.c
w.toString
C.Z3(w,$.bmV)
return null},
$S:0}
C.cGE.prototype={
$1(d){var w=this.a
return w.p(new C.cGC(w,d))},
$S:35}
C.cGC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGF.prototype={
$0(){var w=this.a
return w.p(new C.cGB(w))},
$S:0}
C.cGB.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cW8.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cW9.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cLu.prototype={
$3(d,e,f){return new C.F4(this.a.c,null)},
$S:z+11}
C.cLv.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bb,B.y,A.a([new C.F4(this.a.c,null),D.at7],x.p),null)},
$C:"$3",
$R:3,
$S:254}
C.cGV.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cH3.prototype={
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
A.hh(v,"load",new C.cH1(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cH2(w),!1,u)
w=w.e
w.toString
return w},
$S:586}
C.cH1.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cH_(w))
A.bR(B.P,new C.cH0(w),x.H)}},
$S:45}
C.cH_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cH0.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cGY(w))},
$S:12}
C.cGY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cH2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cGZ(w))},
$S:45}
C.cGZ.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cGX.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cGW.prototype={
$0(){var w,v=C.bmU(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kM.Sn(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dd0.prototype={
$1(d){var w,v,u,t,s=new A.ED([],[]).Iv(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1691};(function aliases(){var w=C.akq.prototype
w.aWk=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afF.prototype,"gawZ","blZ",1)
w(u,"gbmB","bmC",1)
w(u,"gbp5","bp6",6)
w(C.afG.prototype,"gbEh","bEi",1)
v(C,"edF","dxi",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yp,[C.dh4,C.dh3,C.bn5,C.bn6,C.bmY,C.bmZ,C.bn_,C.bn0,C.bn1,C.bn2,C.bn3,C.bn4,C.bmX,C.bmW,C.cGO,C.cGT,C.cGR,C.cGJ,C.cGE,C.cLu,C.cLv,C.cH3,C.cH1,C.cH2,C.dd0])
v(A.a_y,[C.dh_,C.dh0,C.dh1,C.dh2,C.cGN,C.cGM,C.cGK,C.cGL,C.cGS,C.cGP,C.cGU,C.cGH,C.cGI,C.cGD,C.cGC,C.cGF,C.cGB,C.cW8,C.cW9,C.cGV,C.cH_,C.cH0,C.cGY,C.cGZ,C.cGX,C.cGW])
v(A.au,[C.N9,C.Wm,C.aJ5,C.aQW,C.aQX,C.aKb,C.aQV,C.aLs,C.aFm,C.aLx,C.F4])
v(A.al,[C.oa,C.qj])
v(A.ae,[C.JG,C.JF,C.a66,C.a67])
v(A.af,[C.afF,C.aK5,C.akq,C.afG])
v(A.a_z,[C.cGQ,C.cGG])
u(C.JJ,A.aGh)
u(C.aK6,C.akq)
w(C.akq,A.e9)})()
A.dAN(b.typeUniverse,JSON.parse('{"JG":{"ae":[],"p":[]},"Wm":{"au":[],"p":[]},"JF":{"ae":[],"p":[]},"N9":{"au":[],"p":[]},"afF":{"af":["JG"]},"aJ5":{"au":[],"p":[]},"aK5":{"af":["JF"]},"aQW":{"au":[],"p":[]},"aQX":{"au":[],"p":[]},"aKb":{"au":[],"p":[]},"aQV":{"au":[],"p":[]},"aLs":{"au":[],"p":[]},"aFm":{"au":[],"p":[]},"a66":{"ae":[],"p":[]},"F4":{"au":[],"p":[]},"aK6":{"af":["a66"]},"aLx":{"au":[],"p":[]},"a67":{"ae":[],"p":[]},"afG":{"af":["a67"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<aa>"),O:w("a3<x>"),e:w("a3<oa>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<oa>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o5"),_:w("CS"),k:w("oa"),N:w("o"),Y:w("bl<a9>"),W:w("dv<o>"),J:w("lb<K>"),j:w("lb<qj?>"),E:w("xi<cL>"),q:w("X8"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.YZ=new A.N(983224,"MaterialIcons",!1)
D.aP9=new A.a7(D.YZ,48,B.bn,null,null,null)
D.cLZ=new A.Q(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cTm=new A.z("Powered off",null,D.cLZ,null,null,null,null,null,null,null,null,null)
D.bKk=w([D.aP9,B.Q,D.cTm],x.p)
D.aA7=new A.eY(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bKk,null)
D.asU=new A.dt(B.T,null,null,D.aA7,null)
D.cFl=new A.ac(18,18,B.Sb,null)
D.at7=new A.dt(B.T,null,null,D.cFl,null)
D.atV=new A.hj(2,null,null,null,null,B.a7,null,null,null,null)
D.awO=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axn=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.ayU=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCz=new A.V(0,3,0,3)
D.aCJ=new A.V(10,0,10,88)
D.aD6=new A.V(12,6,12,10)
D.aDm=new A.V(14,8,14,6)
D.VS=new A.V(18,12,18,12)
D.aEB=new A.V(20,8,20,20)
D.Ww=new A.V(8,6,15,8)
D.aKI=new A.N(983222,"MaterialIcons",!1)
D.aMo=new A.a7(B.jL,26,B.a6,null,null,null)
D.aMr=new A.a7(B.Yd,18,null,null,null,null)
D.aMH=new A.a7(B.rF,14,B.a7,null,null,null)
D.aKY=new A.N(983420,"MaterialIcons",!1)
D.aNu=new A.a7(D.aKY,14,B.a7,null,null,null)
D.aJ5=new A.N(62895,"MaterialIcons",!1)
D.aNy=new A.a7(D.aJ5,14,B.a7,null,null,null)
D.aP1=new A.a7(B.rx,16,B.a7,null,null,null)
D.aQK=new A.a7(B.jd,20,null,null,null,null)
D.aR0=new A.a7(B.h8,16,null,null,null,null)
D.bNT=w([B.aN,B.Y],x.O)
D.a_B=new A.ak(B.aM,B.aR,B.H,D.bNT,null,null)
D.cz0=new A.aN("NGMY OS","14.2.1")
D.cxO=new A.aN("VirtualDroid","13.8.4")
D.cxN=new A.aN("NGMY OS","15.0.0")
D.cyz=new A.aN("VirtualDroid","14.1.2")
D.cxL=new A.aN("NGMY Tab OS","12.9.7")
D.cxJ=new A.aN("NGMY OS","13.5.3")
D.cxy=new A.aN("VirtualDroid","15.2.0")
D.cya=new A.aN("NGMY OS","14.8.1")
D.cyF=new A.aN("NGMY Tab OS","13.2.4")
D.cza=new A.aN("VirtualDroid","12.6.9")
D.cxr=new A.aN("NGMY OS","16.0.1")
D.cxg=new A.aN("VirtualDroid","14.9.0")
D.cyS=new A.aN("NGMY Tab OS","14.0.3")
D.cxX=new A.aN("NGMY OS","13.1.8")
D.cxq=new A.aN("VirtualDroid","13.4.5")
D.cxI=new A.aN("NGMY OS","15.3.2")
D.cyG=new A.aN("NGMY Tab OS","12.4.1")
D.cyV=new A.aN("VirtualDroid","16.1.0")
D.cy9=new A.aN("NGMY OS","14.4.6")
D.cz1=new A.aN("VirtualDroid","15.0.8")
D.bN7=w([D.cz0,D.cxO,D.cxN,D.cyz,D.cxL,D.cxJ,D.cxy,D.cya,D.cyF,D.cza,D.cxr,D.cxg,D.cyS,D.cxX,D.cxq,D.cxI,D.cyG,D.cyV,D.cy9,D.cz1],A.b4("a3<+(o,o)>"))
D.cBg=new A.eH(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cAP=new A.eH(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cAK=new A.eH(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cAT=new A.eH(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cAG=new A.eH(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cAV=new A.eH(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cBi=new A.eH(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cAH=new A.eH(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cAO=new A.eH(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cAX=new A.eH(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cAF=new A.eH(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cBa=new A.eH(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cB7=new A.eH(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cAN=new A.eH(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cB4=new A.eH(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cB3=new A.eH(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cAE=new A.eH(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cAS=new A.eH(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cB1=new A.eH(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cB6=new A.eH(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6a=w([D.cBg,D.cAP,D.cAK,D.cAT,D.cAG,D.cAV,D.cBi,D.cAH,D.cAO,D.cAX,D.cAF,D.cBa,D.cB7,D.cAN,D.cB4,D.cB3,D.cAE,D.cAS,D.cB1,D.cB6],A.b4("a3<+(o,o,a9,a9,o)>"))
D.bVT=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adF=new C.JJ(0,"youtube")
D.adG=new C.JJ(1,"tiktok")
D.NB=new C.JJ(2,"instagram")
D.adH=new C.JJ(3,"facebook")
D.cqB=new C.JJ(4,"other")
D.cEW=new A.ac(3,null,null,null)
D.cFH=new A.i6(4,10,8,0.52,null)
D.cUE=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cJ8=new A.aU(D.cUE,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.y,null)
D.cMk=new A.Q(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUs=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d16=new A.z("Open in YouTube",null,B.iU,null,null,null,null,null,null,null,null,null)
D.d50=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d5O=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d5T=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dcj=new C.aLs(null)})();(function staticFields(){$.dxh=20
$.awb=null
$.bmV=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiI","Gf",()=>A.aC7(0))
w($,"eiJ","OP",()=>A.aC7(null))})()};
(a=>{a["5OZ8kMaVkvWKABMgz4xN43eDChE="]=a.current})($__dart_deferred_initializers__);