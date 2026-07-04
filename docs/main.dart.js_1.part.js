((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dZ5(d,e){A.a5(d,!1).cl(A.eh(new C.d5G(e),!0,null,x.H))},
Vk(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Vk=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.M1()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aI(n,B.a5,B.W),t)
w=3
return A.b(A.d2(B.E,new C.d5F(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vk)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dGS(r)
if(q==null){d.F(x.q).f.O(D.bCU)
w=1
break}w=4
return A.b(A.bL(B.fQ,null,x.H),$async$Vk)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dko=n
p=C.dGM(n)
n=$.E3()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d9u(q)
d.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Vk,v)},
dkr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aP(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aP(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hg(d){return C.dGV(d)},
dGV(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hg=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$Hg)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eQ(r,x.f)
k=A.df(k,new C.bdJ(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("aa<K.E>")
i=A.C(new A.aa(k,new C.bdK(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dkt(q)
w=12
return A.b(C.Hf(a3,p),$async$Hg)
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
case 9:case 5:o=A.aG(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dkr(A.Q(n,x.N,x.z))
l=C.dkt(A.a([m],x.e))
w=21
return A.b(C.Hf(a3,l),$async$Hg)
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
case 18:case 14:q=C.dGT()
w=22
return A.b(C.Hf(a3,q),$async$Hg)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Hg,v)},
dkt(d){var w=A.V(d).j("A<1,m>"),v=new A.A(d,new C.bdB(),w).er(0),u=new A.A(d,new C.bdC(),w).er(0),t=new A.A(d,new C.bdD(),w).er(0),s=new A.A(d,new C.bdE(),w).er(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d9v(null,q,u,t,v,s));++q}return r},
aqm(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aqm=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hg(d),$async$aqm)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d1(t,new C.bdF(),s).er(0)
p=r.d1(t,new C.bdG(),s).er(0)
o=r.d1(t,new C.bdH(),s).er(0)
n=r.d1(t,new C.bdI(),s).er(0)
m=C.d9v(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hf(d,t),$async$aqm)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aqm,v)},
Hf(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Hf=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$Hf)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bdA(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.ak(s,null)),$async$Hf)
case 3:return A.f(null,v)}})
return A.h($async$Hf,v)},
dGT(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dV(20,x.k)
for(w=0;w<20;++w)q[w]=C.d9v(w,w,t,s,u,r)
return q},
d9v(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jy(),h=d==null,g=D.U7[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U7[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.A(p,new C.bdz(),A.V(p).j("A<1,m>")).fa(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bg(B.n.j1(i.bz(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aV8[w]
j=D.aP0[w]
return new C.mY("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bg(B.n.q(e+1),2,"0"),u,k,C.dGU(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a0().W())},
dGU(d,e){var w,v=J.dV(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bg(B.n.j1(d.bz(256),16),2,"0")
return B.d.fa(v)},
d5G:function d5G(d){this.a=d},
d5F:function d5F(d,e){this.a=d
this.b=e},
d5B:function d5B(d){this.a=d},
d5C:function d5C(d){this.a=d},
d5D:function d5D(d){this.a=d},
d5E:function d5E(d,e){this.a=d
this.b=e},
Km:function Km(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mY:function mY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bdJ:function bdJ(){},
bdK:function bdK(){},
bdB:function bdB(){},
bdC:function bdC(){},
bdD:function bdD(){},
bdE:function bdE(){},
bdF:function bdF(){},
bdG:function bdG(){},
bdH:function bdH(){},
bdI:function bdI(){},
bdA:function bdA(){},
bdz:function bdz(){},
He:function He(d,e){this.c=d
this.a=e},
ab0:function ab0(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cwT:function cwT(){},
cwS:function cwS(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d){this.a=d},
cwR:function cwR(d,e){this.a=d
this.b=e},
cwU:function cwU(d){this.a=d},
cwY:function cwY(d){this.a=d},
cwZ:function cwZ(d,e){this.a=d
this.b=e},
cwX:function cwX(d,e,f){this.a=d
this.b=e
this.c=f},
cwW:function cwW(d,e){this.a=d
this.b=e},
cwV:function cwV(d,e){this.a=d
this.b=e},
cx_:function cx_(d){this.a=d},
SH:function SH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC8:function aC8(d,e){this.c=d
this.a=e},
Hd:function Hd(d,e){this.c=d
this.a=e},
aD6:function aD6(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cwN:function cwN(d){this.a=d},
cwO:function cwO(d){this.a=d},
cwP:function cwP(d){this.a=d},
cwM:function cwM(d,e){this.a=d
this.b=e},
cwJ:function cwJ(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwI:function cwI(d,e){this.a=d
this.b=e},
cwL:function cwL(d){this.a=d},
cwH:function cwH(d){this.a=d},
aJJ:function aJJ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJK:function aJK(d,e,f){this.c=d
this.d=e
this.a=f},
aDc:function aDc(d,e){this.c=d
this.a=e},
aJI:function aJI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cLt:function cLt(d){this.a=d},
cLu:function cLu(d){this.a=d},
aEn:function aEn(d){this.a=d},
ayv:function ayv(d,e){this.c=d
this.a=e},
dGS(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dGR(v)
if(u!=null)return new C.p0(w,C.d9t(u,!1),D.a0_,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dGQ(v)
if(t!=null)return new C.p0(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a00,"TikTok",q)
s=C.dGP(w,v)
if(s!=null)return s
r=C.dGO(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p0(w,w,D.bn6,"Video",q)
return q},
dGP(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p0(d,"https://www.instagram.com/reel/"+w+u,D.He,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p0(d,"https://www.instagram.com/p/"+w+u,D.He,t,null)}return null},
dGO(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p0(d,"https://www.facebook.com/plugins/video.php?href="+A.eD(2,d,B.aP,!1)+"&show_text=false&width=734",D.a01,"Facebook",null)},
dGR(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cW(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dGQ(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cW(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
Hh:function Hh(d,e){this.a=d
this.b=e},
p0:function p0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1W:function a1W(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD7:function aD7(d,e){var _=this
_.d=$
_.cQ$=d
_.aR$=e
_.c=_.a=null},
aEs:function aEs(d,e){this.c=d
this.a=e},
cAS:function cAS(d){this.a=d},
cAT:function cAT(d){this.a=d},
CQ:function CQ(d,e){this.c=d
this.a=e},
afG:function afG(){},
dks(d,e,f,g,h,i){return new C.a1X(i,f,h,e,g,d)},
dXL(d){var w=window
w.toString
A.fP(w,"message",new C.d1R(d),!1,x._)},
a1X:function a1X(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ab1:function ab1(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cx0:function cx0(d){this.a=d},
cx8:function cx8(d){this.a=d},
cx6:function cx6(d){this.a=d},
cx4:function cx4(d){this.a=d},
cx5:function cx5(d){this.a=d},
cx2:function cx2(d){this.a=d},
cx7:function cx7(d){this.a=d},
cx3:function cx3(d){this.a=d},
cx1:function cx1(d){this.a=d},
d1R:function d1R(d){this.a=d},
dkm(){var w,v,u
try{v=A.ys()
w=v.gq_(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d9t(d,e){var w=C.dkm(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eD(2,w,B.aP,!1))
v.push("widget_referrer="+A.eD(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d9s(d){var w=A.aq(y.c,!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
dkn(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dGL(d,e,f){var w,v,u=C.d9s(d)
if(u!=null){if(f){w=C.dkm()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dkn(C.d9t(u,e))}return C.dkn(d)},
dGM(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dGN(d){var w
if($.M1().a==null)return!1
w=$.E3().a
return d>=w&&d<w+4},
dkq(){var w=$.aql
if(w!=null)w.a7(0)
$.aql=null
$.E3().sv(0,0)},
dkp(){var w,v,u,t=$.M1()
if(t.a==null)return
w=$.aql
if(w!=null)w.a7(0)
v=$.dko
if(v<=4){t=t.a
t.toString
C.d9u(t)
return}w=$.E3()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d9u(t)},
d9u(d){var w=$.aql
if(w!=null)w.a7(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aql=A.dp(A.d7(0,0,0,0,0,w),C.dXW())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Km.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.n(20),s=A.U(B.R.l(0.25),B.o,1),r=A.Z(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eG,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bF,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.en,w,w,w)}}
C.mY.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.He.prototype={
S(){return new C.ab0(A.a([],x.e))},
gek(){return this.c}}
C.ab0.prototype={
Z(){var w=this
w.a2()
$.E3().aj(0,w.gasn())
C.dXL(w.gbeE())
w.Vs()},
be3(){if(this.c!=null)this.n(new C.cwT())},
beF(){C.dkp()},
p(){$.E3().V(0,this.gasn())
C.dkq()
$.M1().sv(0,null)
this.a3()},
Vs(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vs=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hg(t.a.c),$async$Vs)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwS(t,s))
$.bdy=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vs,v)},
RI(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RI=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cwQ(t))
w=3
return A.b(C.aqm(t.a.c),$async$RI)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwR(t,s))
$.bdy=J.a3(t.d)
t.c.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RI,v)},
bgv(d){var w=this.c
w.toString
A.a5(w,!1).cl(A.eh(new C.cwU(d),!1,null,x.H))},
bh6(){var w=this.c
w.toString
return C.Vk(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.eb:B.bG,s=A.aH(v,v,v,v,B.Fs,v,v,v,new C.cwY(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bn(A.G(A.a([A.H(new A.I(B.ia,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.P,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aQ(!1,B.M,!0,v,A.aW(!1,v,!0,new A.I(B.aK,A.Z(B.eU,B.R,v,v,28),v),B.c8,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbh5(),v,v,v,v,v,v,v),B.h,B.E,0,v,v,v,v,v,B.a0)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.ca(!0,A.y(A.a([new A.I(D.OZ,r,v),A.H(w.e?B.le:new A.iv($.M1(),new C.cwZ(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.alb(B.R,B.AZ,B.n8,D.c_q,w.e?v:new C.cx_(w)),v)}}
C.SH.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.cu,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1W(n,!0,!C.dGN(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ik,B.ll,u,u,22),B.al,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vH,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aQ(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cx(p,A.fR(A.y(A.a([new C.aC8(o,u),A.H(n,1),A.u(u,A.G(A.a([A.Z(B.pj,B.R.l(0.85),u,u,9),D.byQ,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.ac,u,u,u,u,u,D.anc,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,u,u,new A.t(u,u,r,s,q,D.SY,B.k),u,u,u,B.fc,u,u,u),1),B.al,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.z,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.E,0,u,u,u,u,u,B.a0)}}
C.aC8.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pm,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.ac,w,w,w,w,w,B.OO,w,w,w)}}
C.Hd.prototype={
S(){return new C.aD6()}}
C.aD6.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.eb:B.bG,t=A.aH(w,w,w,w,B.Fs,w,w,w,new C.cwN(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.ca(!0,A.y(A.a([new A.I(D.OZ,A.G(A.a([t,A.H(new A.Bn(A.G(A.a([A.H(new A.I(B.ia,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.P,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aQ(!1,B.M,!0,w,A.aW(!1,w,!0,new A.I(B.aK,A.Z(B.eU,B.R,w,w,28),w),B.c8,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cwO(d),w,w,w,w,w,w,w),B.h,B.E,0,w,w,w,w,w,B.a0)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.iv($.M1(),new C.cwP(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0),w,!1,!1,w,w)}}
C.aJJ.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.eq,28),new A.ag(0,B.x,B.q.l(0.45),B.cv,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dks(new A.di(v+"_full_"+u,x.W),!1,u,!1,w.gaH0(),v+"_full")
w=v}else w=new C.aDc(t.r,s)}else w=new C.ayv(m,s)
else w=D.c4V
return A.u(s,A.cx(n,A.fR(A.y(A.a([new C.aJK(m,l,s),A.H(w,1),new C.aJI(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,s,s,new A.t(s,s,o,q,p,D.SY,B.k),s,r*2.05,s,B.bg,s,s,r)}}
C.aJK.prototype={
B(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dg(r)
r=A.h9(r)
w=new A.dh(q,r)
v=w.gGR()===0?12:w.gGR()
r=B.a.bg(B.n.q(r),2,"0")
q=(q<12?B.eO:B.hB)===B.eO?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lX,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.axJ,B.du,D.awY,B.du,D.axN],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.G(A.a([A.Z(B.Fl,B.R.l(0.9),s,s,12),B.du,A.H(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.ac,s,s,s,s,s,D.anW,s,s,s)}}
C.aDc.prototype={
B(d){var w=null
return A.u(w,A.aS(A.y(A.a([A.Z(B.xr,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.eB(D.aB7,D.bO8,this.c,A.ex(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aF(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vH,w,w,w,w,w,w,w,w,1/0)}}
C.aJI.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.asf(B.Rs,"YouTube",s===0,r,new C.cLt(u))
s=u.asf(B.kB,"Device",s===1,r,new C.cLu(u))
w=r?"Power off":"Power on"
v=r?D.Rt:D.auX
return A.u(t,A.G(A.a([q,B.a_,s,B.b3,A.aH(t,t,t,t,A.Z(v,r?B.b4:B.dC,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cD)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.ac,t,t,t,t,t,D.anJ,t,t,t)},
asf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aX
else w=f?B.R:B.a7
v=f&&g?B.R.l(0.15):B.E
u=A.n(10)
t=g?h:s
return A.H(A.aQ(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.I(B.lw,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a0),1)}}
C.aEn.prototype={
B(d){return D.ae_}}
C.ayv.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jZ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.al,s,B.V,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aK,v,v,B.a1,!1)},
qB(d,e){var w=null
return new A.I(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bZ,A.j(e,w,w,w,w,w,w,D.bFV,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Hh.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p0.prototype={
gaH0(){var w=this.c
return w===D.a0_||w===D.a00||w===D.He||w===D.a01}}
C.a1W.prototype={
S(){return new C.aD7(null,null)}}
C.aD7.prototype={
Z(){this.a2()
var w=A.bE(null,B.ru,null,1,null,this)
w.no(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQA()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dQ(t,new A.t(t,t,t,t,t,new A.ap(B.cP,B.c_,B.y,A.a([B.E,B.q.l(0.55)],x.O),t,t),B.k),B.bB),q=x.Y,p=u.d
p===$&&A.c()
p=A.cs(B.i5,p,t)
w=B.c.l(0.92)
q=A.aS(new A.cX(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bi.T>")),!1,A.Z(B.ik,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ll
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEs(s,t),r,q,A.b4(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b4(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b4(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aK(B.a6,t,B.aT,B.m,s,t)}}
C.aEs.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kG(u,new C.cAS(this),B.bt,!0,w,w,new C.cAT(this),w)
return new C.CQ(v,w)}}
C.CQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.rf,B.Ly],x.O),B.ik)
break
case 1:w=new A.aJ(A.a([B.vH,D.ai8],x.O),B.jI)
break
case 2:w=new A.aJ(A.a([D.ajF,D.ahF],x.O),B.xA)
break
case 3:w=new A.aJ(A.a([B.P,B.cF],x.O),B.xE)
break
case 4:w=new A.aJ(A.a([B.ac,B.ak],x.O),B.n4)
break
default:w=u}v=w.a
return A.u(u,A.aS(A.Z(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.an,B.as,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afG.prototype={
p(){var w=this,v=w.aR$
if(v!=null)v.V(0,w.gdv())
w.aR$=null
w.a3()},
bp(){this.bF()
this.bD()
this.dw()}}
C.a1X.prototype={
S(){return new C.ab1()}}
C.ab1.prototype={
bxj(d,e){var w=C.d9s(d)
if(w!=null)return C.d9t(w,e)
return d},
a3O(d,e){var w,v=this,u=C.d9s(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bxj(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dGL(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bvc(){var w,v=this
if(v.w)return
v.n(new C.cx0(v))
w=v.e
if(w!=null)v.a3O(w,v.a.d)},
Z(){var w,v,u=this
u.a2()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aL()
u.d=w
try{$.E4()
$.os().rQ(w,new C.cx8(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cx1(v))
w=v.e
w.toString
v.a3O(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.RH,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.fR(A.aS(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YD(n,B.pZ,w)],v)
if(o.f)w.push(A.fR(A.aS(new A.al(28,28,D.aeR,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aX,B.o,1)
q=A.Z(B.Fo,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eI(0,A.aQ(!1,B.M,!0,n,A.aW(!1,n,!0,A.aS(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Ol,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbvb(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a0)))}return new A.aK(B.a6,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mY)","~()","He(S)","mY(X<@,@>)","a_(mY)","X<m,@>(mY)","au<~>()","Hd(S)","iv<R>(S,p0?,o?)","SH(S,R)","rf(S,p0?,o?)","CQ(S,aj,dw?)"])
C.d5G.prototype={
$1(d){return new C.He(this.a,null)},
$S:z+2}
C.d5F.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cK,B.P],j):A.a([B.c,B.aa],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.eq,32)],x.V),g=A.U(m?B.bu:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.awC,B.h,n,n,new A.t(B.R.l(0.18),n,A.U(B.R.l(0.45),B.o,1),n,n,n,B.aj),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.es,w,A.aH(n,n,n,n,A.Z(B.ct,m?B.a7:B.ci,n,n,n),n,n,n,new C.d5B(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a3,B.a4,B.y,j,n,n),B.k),n,n,n,B.Dg,n,n,n)
e=A.ed(B.bX,A.a([new C.Km("YouTube",B.Fk,m,n),new C.Km("TikTok",B.jI,m,n),new C.Km("Instagram",B.xA,m,n),new C.Km("Facebook",B.xE,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bA:B.fL,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bG
r=A.Z(B.jH,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bu:B.ay
u=A.y(A.a([e,B.ar,A.av(n,B.A,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bl(n,new A.b7(4,q,B.L),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.n(16),B.Kp),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.G,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.O,n,n,n,n)],v),B.ag,B.e,B.f,0,B.l)
e=A.j5(D.awG,D.bZx,new C.d5C(d),A.iI(n,n,n,n,n,n,n,n,n,n,n,m?B.aE:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dQ(A.cx(f,A.y(A.a([j,new A.I(D.ap0,u,n),new A.I(D.apc,A.G(A.a([e,B.b3,A.bQ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d5D(d),n,n),B.a_,A.dK(D.aAP,D.c_k,new C.d5E(d,w),A.br(B.R,n,n,n,B.c,n,D.Ol,n,new A.bB(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ag,B.e,B.Q,0,B.l),B.at),new A.t(n,n,g,k,h,new A.ap(B.an,B.as,B.y,i,n,n),B.k),B.bB),n)},
$S:74}
C.d5B.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5C.prototype={
$0(){C.dkq()
$.M1().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d5D.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5E.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bdJ.prototype={
$1(d){return C.dkr(A.Q(d,x.N,x.z))},
$S:z+3}
C.bdK.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bdB.prototype={
$1(d){return d.c},
$S:z+0}
C.bdC.prototype={
$1(d){return d.r},
$S:z+0}
C.bdD.prototype={
$1(d){return d.f},
$S:z+0}
C.bdE.prototype={
$1(d){return d.at},
$S:z+0}
C.bdF.prototype={
$1(d){return d.c},
$S:z+0}
C.bdG.prototype={
$1(d){return d.r},
$S:z+0}
C.bdH.prototype={
$1(d){return d.f},
$S:z+0}
C.bdI.prototype={
$1(d){return d.at},
$S:z+0}
C.bdA.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bdz.prototype={
$1(d){return B.a.bg(B.n.j1(d,16),2,"0").toUpperCase()},
$S:75}
C.cwT.prototype={
$0(){},
$S:0}
C.cwS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cwQ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cwR.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cwU.prototype={
$1(d){return new C.Hd(this.a,null)},
$S:z+7}
C.cwY.prototype={
$0(){return A.a5(this.a,!1).e3()},
$S:0}
C.cwZ.prototype={
$3(d,e,f){return new A.iv($.E3(),new C.cwX(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cwX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AP(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.U(B.R.l(0.35),B.o,1)
q=A.Z(B.ik,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.E3().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.P,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cn,B.eo,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cx(s,new A.iS(1.7777777777777777,C.dks(new A.di("fleet_master_"+r,x.W),!0,r,!0,j.gaH0(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wC(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jK(new A.I(B.D5,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.o7(D.anm,A.atQ(new A.n8(new C.cwW(i,j),J.a3(i.d),!1,!0,!0,A.ty(),k),D.bzx),k)],w))},
$S:1613}
C.cwW.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.SH(v,e,J.a3(w.d),new C.cwV(w,v),this.b,null)},
$S:z+9}
C.cwV.prototype={
$0(){return this.a.bgv(this.b)},
$S:0}
C.cx_.prototype={
$0(){this.a.RI()
return null},
$S:0}
C.cwN.prototype={
$0(){return A.a5(this.a,!1).e3()},
$S:0}
C.cwO.prototype={
$0(){C.Vk(this.a,$.bdy)
return null},
$S:0}
C.cwP.prototype={
$3(d,e,f){return A.fI(new C.cwM(this.a,e))},
$S:z+10}
C.cwM.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aS(A.ck(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.ar,new C.aJJ(u,s.a.c,s.e,s.d,new C.cwJ(s),new C.cwK(s),new C.cwL(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wO,v,v,B.a1),v,v,v)},
$S:1614}
C.cwJ.prototype={
$0(){var w=this.a.c
w.toString
C.Vk(w,$.bdy)
return null},
$S:0}
C.cwK.prototype={
$1(d){var w=this.a
return w.n(new C.cwI(w,d))},
$S:37}
C.cwI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwL.prototype={
$0(){var w=this.a
return w.n(new C.cwH(w))},
$S:0}
C.cwH.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cLt.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cLu.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cAS.prototype={
$3(d,e,f){return new C.CQ(this.a.c,null)},
$S:z+11}
C.cAT.prototype={
$3(d,e,f){if(f==null)return e
return new A.aK(B.a6,null,B.aT,B.m,A.a([new C.CQ(this.a.c,null),D.aee],x.p),null)},
$C:"$3",
$R:3,
$S:444}
C.cx0.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cx8.prototype={
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
w.a3O(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fP(v,"load",new C.cx6(w),!1,u)
v=w.e
v.toString
A.fP(v,"error",new C.cx7(w),!1,u)
w=w.e
w.toString
return w},
$S:585}
C.cx6.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cx4(w))
A.bL(B.D,new C.cx5(w),x.H)}},
$S:43}
C.cx4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cx5.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cx2(w))},
$S:12}
C.cx2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cx7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cx3(w))},
$S:43}
C.cx3.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cx1.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1R.prototype={
$1(d){var w,v,u,t,s=new A.Cq([],[]).G8(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1615};(function aliases(){var w=C.afG.prototype
w.aQA=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ab0.prototype,"gasn","be3",1)
w(u,"gbeE","beF",1)
w(u,"gbh5","bh6",6)
w(C.ab1.prototype,"gbvb","bvc",1)
v(C,"dXW","dkp",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wu,[C.d5G,C.d5F,C.bdJ,C.bdK,C.bdB,C.bdC,C.bdD,C.bdE,C.bdF,C.bdG,C.bdH,C.bdI,C.bdA,C.bdz,C.cwU,C.cwZ,C.cwX,C.cwP,C.cwK,C.cAS,C.cAT,C.cx8,C.cx6,C.cx7,C.d1R])
v(A.WS,[C.d5B,C.d5C,C.d5D,C.d5E,C.cwT,C.cwS,C.cwQ,C.cwR,C.cwY,C.cwV,C.cx_,C.cwN,C.cwO,C.cwJ,C.cwI,C.cwL,C.cwH,C.cLt,C.cLu,C.cx0,C.cx4,C.cx5,C.cx2,C.cx3,C.cx1])
v(A.ax,[C.Km,C.SH,C.aC8,C.aJJ,C.aJK,C.aDc,C.aJI,C.aEn,C.ayv,C.aEs,C.CQ])
v(A.aj,[C.mY,C.p0])
v(A.ac,[C.He,C.Hd,C.a1W,C.a1X])
v(A.ae,[C.ab0,C.aD6,C.afG,C.ab1])
v(A.WT,[C.cwW,C.cwM])
u(C.Hh,A.azo)
u(C.aD7,C.afG)
w(C.afG,A.e3)})()
A.dnG(b.typeUniverse,JSON.parse('{"He":{"ac":[],"o":[]},"SH":{"ax":[],"o":[]},"Hd":{"ac":[],"o":[]},"Km":{"ax":[],"o":[]},"ab0":{"ae":["He"]},"aC8":{"ax":[],"o":[]},"aD6":{"ae":["Hd"]},"aJJ":{"ax":[],"o":[]},"aJK":{"ax":[],"o":[]},"aDc":{"ax":[],"o":[]},"aJI":{"ax":[],"o":[]},"aEn":{"ax":[],"o":[]},"ayv":{"ax":[],"o":[]},"a1W":{"ac":[],"o":[]},"CQ":{"ax":[],"o":[]},"aD7":{"ae":["a1W"]},"aEs":{"ax":[],"o":[]},"a1X":{"ac":[],"o":[]},"ab1":{"ae":["a1X"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mY>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<R>"),X:w("ad<mY>"),a:w("ad<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mV"),_:w("AM"),k:w("mY"),N:w("m"),Y:w("bn<a8>"),W:w("di<m>"),J:w("iv<R>"),j:w("iv<p0?>"),E:w("vt<cy>"),q:w("Tp"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rt=new A.M(983224,"MaterialIcons",!1)
D.azk=new A.a6(D.Rt,48,B.aX,null,null,null)
D.bFz=new A.O(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bN3=new A.x("Powered off",null,D.bFz,null,null,null,null,null,null,null,null,null)
D.aN5=w([D.azk,B.C,D.bN3],x.p)
D.akN=new A.fm(B.a1,B.e,B.Q,B.i,null,B.l,null,0,D.aN5,null)
D.ae_=new A.dk(B.K,null,null,D.akN,null)
D.bzd=new A.al(18,18,B.Lh,null)
D.aee=new A.dk(B.K,null,null,D.bzd,null)
D.aeR=new A.hc(2,null,null,null,null,B.T,null,null,null,null)
D.ahF=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ai8=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajF=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.anc=new A.W(0,3,0,3)
D.anm=new A.W(10,0,10,88)
D.anJ=new A.W(12,6,12,10)
D.anW=new A.W(14,8,14,6)
D.Ol=new A.W(18,12,18,12)
D.ap0=new A.W(20,18,20,8)
D.apc=new A.W(20,8,20,20)
D.OZ=new A.W(8,6,15,8)
D.auX=new A.M(983222,"MaterialIcons",!1)
D.awC=new A.a6(B.ik,26,B.R,null,null,null)
D.awG=new A.a6(B.QF,18,null,null,null,null)
D.awY=new A.a6(B.pm,14,B.T,null,null,null)
D.avc=new A.M(983420,"MaterialIcons",!1)
D.axJ=new A.a6(D.avc,14,B.T,null,null,null)
D.ato=new A.M(62895,"MaterialIcons",!1)
D.axN=new A.a6(D.ato,14,B.T,null,null,null)
D.aAP=new A.a6(B.iW,20,null,null,null,null)
D.aB7=new A.a6(B.eU,16,null,null,null,null)
D.aPw=w([B.ak,B.P],x.O)
D.SY=new A.ap(B.an,B.as,B.y,D.aPw,null,null)
D.bt8=new A.aJ("NGMY OS","14.2.1")
D.bs_=new A.aJ("VirtualDroid","13.8.4")
D.brZ=new A.aJ("NGMY OS","15.0.0")
D.bsI=new A.aJ("VirtualDroid","14.1.2")
D.brX=new A.aJ("NGMY Tab OS","12.9.7")
D.brV=new A.aJ("NGMY OS","13.5.3")
D.brK=new A.aJ("VirtualDroid","15.2.0")
D.bsl=new A.aJ("NGMY OS","14.8.1")
D.bsO=new A.aJ("NGMY Tab OS","13.2.4")
D.bti=new A.aJ("VirtualDroid","12.6.9")
D.brG=new A.aJ("NGMY OS","16.0.1")
D.brx=new A.aJ("VirtualDroid","14.9.0")
D.bt0=new A.aJ("NGMY Tab OS","14.0.3")
D.bs8=new A.aJ("NGMY OS","13.1.8")
D.brF=new A.aJ("VirtualDroid","13.4.5")
D.brU=new A.aJ("NGMY OS","15.3.2")
D.bsP=new A.aJ("NGMY Tab OS","12.4.1")
D.bt2=new A.aJ("VirtualDroid","16.1.0")
D.bsk=new A.aJ("NGMY OS","14.4.6")
D.bt9=new A.aJ("VirtualDroid","15.0.8")
D.aP0=w([D.bt8,D.bs_,D.brZ,D.bsI,D.brX,D.brV,D.brK,D.bsl,D.bsO,D.bti,D.brG,D.brx,D.bt0,D.bs8,D.brF,D.brU,D.bsP,D.bt2,D.bsk,D.bt9],A.bf("ab<+(m,m)>"))
D.bvk=new A.ei(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buT=new A.ei(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.buO=new A.ei(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buX=new A.ei(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.buK=new A.ei(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.buZ=new A.ei(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bvm=new A.ei(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buL=new A.ei(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.buS=new A.ei(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bv0=new A.ei(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.buJ=new A.ei(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bve=new A.ei(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bvb=new A.ei(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.buR=new A.ei(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bv8=new A.ei(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bv7=new A.ei(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buI=new A.ei(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.buW=new A.ei(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bv5=new A.ei(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bva=new A.ei(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U7=w([D.bvk,D.buT,D.buO,D.buX,D.buK,D.buZ,D.bvm,D.buL,D.buS,D.bv0,D.buJ,D.bve,D.bvb,D.buR,D.bv8,D.bv7,D.buI,D.buW,D.bv5,D.bva],A.bf("ab<+(m,m,a8,a8,m)>"))
D.aV8=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a0_=new C.Hh(0,"youtube")
D.a00=new C.Hh(1,"tiktok")
D.He=new C.Hh(2,"instagram")
D.a01=new C.Hh(3,"facebook")
D.bn6=new C.Hh(4,"other")
D.byQ=new A.al(3,null,null,null)
D.bzx=new A.ic(4,10,8,0.52,null)
D.bOl=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCU=new A.aT(D.bOl,null,null,null,null,null,null,null,null,null,null,null,null,B.D,!1,null,null,null,B.m,null)
D.bFV=new A.O(!0,B.c,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bO8=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bZx=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c_k=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c_q=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4V=new C.aEn(null)})();(function staticFields(){$.dko=20
$.aql=null
$.bdy=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e1e","E3",()=>A.Rm(0))
w($,"e1f","M1",()=>A.Rm(null))})()};
(a=>{a["rrev5eD22qQJK+a1bbyNgqmdUPE="]=a.current})($__dart_deferred_initializers__);