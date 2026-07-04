((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dZf(d,e){A.a5(d,!1).cg(A.ee(new C.d5O(e),!0,null,x.H))},
Vn(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Vn=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.M2()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.aa(new A.aJ(n,B.a5,B.X),t)
w=3
return A.b(A.d3(B.F,new C.d5N(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vn)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dH1(r)
if(q==null){d.F(x.q).f.O(D.bCX)
w=1
break}w=4
return A.b(A.bK(B.fR,null,x.H),$async$Vn)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dky=n
p=C.dGW(n)
n=$.E4()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d9C(q)
d.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Vn,v)},
dkB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.n_(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hg(d){return C.dH4(d)},
dH4(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hg=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$Hg)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aI(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eP(r,x.f)
k=A.df(k,new C.bdS(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("a9<K.E>")
i=A.C(new A.a9(k,new C.bdT(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dkD(q)
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
case 9:case 5:o=A.aI(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dkB(A.Q(n,x.N,x.z))
l=C.dkD(A.a([m],x.e))
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
case 18:case 14:q=C.dH2()
w=22
return A.b(C.Hf(a3,q),$async$Hg)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Hg,v)},
dkD(d){var w=A.V(d).j("A<1,m>"),v=new A.A(d,new C.bdK(),w).er(0),u=new A.A(d,new C.bdL(),w).er(0),t=new A.A(d,new C.bdM(),w).er(0),s=new A.A(d,new C.bdN(),w).er(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d9D(null,q,u,t,v,s));++q}return r},
aqo(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aqo=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hg(d),$async$aqo)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d1(t,new C.bdO(),s).er(0)
p=r.d1(t,new C.bdP(),s).er(0)
o=r.d1(t,new C.bdQ(),s).er(0)
n=r.d1(t,new C.bdR(),s).er(0)
m=C.d9D(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hf(d,t),$async$aqo)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aqo,v)},
Hf(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Hf=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$Hf)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bdJ(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.ak(s,null)),$async$Hf)
case 3:return A.f(null,v)}})
return A.h($async$Hf,v)},
dH2(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dV(20,x.k)
for(w=0;w<20;++w)q[w]=C.d9D(w,w,t,s,u,r)
return q},
d9D(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jy(),h=d==null,g=D.U2[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U2[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.A(p,new C.bdI(),A.V(p).j("A<1,m>")).fa(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.n.j3(i.bz(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aV9[w]
j=D.aP1[w]
return new C.n_("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bh(B.n.q(e+1),2,"0"),u,k,C.dH3(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.M(Date.now(),0,!1).a0().W())},
dH3(d,e){var w,v=J.dV(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.n.j3(d.bz(256),16),2,"0")
return B.d.fa(v)},
d5O:function d5O(d){this.a=d},
d5N:function d5N(d,e){this.a=d
this.b=e},
d5J:function d5J(d){this.a=d},
d5K:function d5K(d){this.a=d},
d5L:function d5L(d){this.a=d},
d5M:function d5M(d,e){this.a=d
this.b=e},
Km:function Km(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
n_:function n_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bdS:function bdS(){},
bdT:function bdT(){},
bdK:function bdK(){},
bdL:function bdL(){},
bdM:function bdM(){},
bdN:function bdN(){},
bdO:function bdO(){},
bdP:function bdP(){},
bdQ:function bdQ(){},
bdR:function bdR(){},
bdJ:function bdJ(){},
bdI:function bdI(){},
He:function He(d,e){this.c=d
this.a=e},
ab_:function ab_(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cx_:function cx_(){},
cwZ:function cwZ(d,e){this.a=d
this.b=e},
cwX:function cwX(d){this.a=d},
cwY:function cwY(d,e){this.a=d
this.b=e},
cx0:function cx0(d){this.a=d},
cx4:function cx4(d){this.a=d},
cx5:function cx5(d,e){this.a=d
this.b=e},
cx3:function cx3(d,e,f){this.a=d
this.b=e
this.c=f},
cx2:function cx2(d,e){this.a=d
this.b=e},
cx1:function cx1(d,e){this.a=d
this.b=e},
cx6:function cx6(d){this.a=d},
SL:function SL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCa:function aCa(d,e){this.c=d
this.a=e},
Hd:function Hd(d,e){this.c=d
this.a=e},
aD8:function aD8(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cwU:function cwU(d){this.a=d},
cwV:function cwV(d){this.a=d},
cwW:function cwW(d){this.a=d},
cwT:function cwT(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d){this.a=d},
cwR:function cwR(d){this.a=d},
cwP:function cwP(d,e){this.a=d
this.b=e},
cwS:function cwS(d){this.a=d},
cwO:function cwO(d){this.a=d},
aJN:function aJN(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJO:function aJO(d,e,f){this.c=d
this.d=e
this.a=f},
aDe:function aDe(d,e){this.c=d
this.a=e},
aJM:function aJM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cLA:function cLA(d){this.a=d},
cLB:function cLB(d){this.a=d},
aEp:function aEp(d){this.a=d},
ayx:function ayx(d,e){this.c=d
this.a=e},
dH1(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dH0(v)
if(u!=null)return new C.p_(w,C.d9B(u,!1),D.a_V,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dH_(v)
if(t!=null)return new C.p_(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_W,"TikTok",q)
s=C.dGZ(w,v)
if(s!=null)return s
r=C.dGY(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p_(w,w,D.bn8,"Video",q)
return q},
dGZ(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cV(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p_(d,"https://www.instagram.com/reel/"+w+u,D.Hc,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cV(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p_(d,"https://www.instagram.com/p/"+w+u,D.Hc,t,null)}return null},
dGY(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p_(d,"https://www.facebook.com/plugins/video.php?href="+A.eE(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_X,"Facebook",null)},
dH0(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cV(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dH_(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cV(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cV(d)
return w==null?null:w.b[1]},
Hh:function Hh(d,e){this.a=d
this.b=e},
p_:function p_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1X:function a1X(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD9:function aD9(d,e){var _=this
_.d=$
_.cQ$=d
_.aR$=e
_.c=_.a=null},
aEu:function aEu(d,e){this.c=d
this.a=e},
cAZ:function cAZ(d){this.a=d},
cB_:function cB_(d){this.a=d},
CQ:function CQ(d,e){this.c=d
this.a=e},
afE:function afE(){},
dkC(d,e,f,g,h,i){return new C.a1Y(i,f,h,e,g,d)},
dXU(d){var w=window
w.toString
A.fP(w,"message",new C.d1U(d),!1,x._)},
a1Y:function a1Y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ab0:function ab0(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cx7:function cx7(d){this.a=d},
cxf:function cxf(d){this.a=d},
cxd:function cxd(d){this.a=d},
cxb:function cxb(d){this.a=d},
cxc:function cxc(d){this.a=d},
cx9:function cx9(d){this.a=d},
cxe:function cxe(d){this.a=d},
cxa:function cxa(d){this.a=d},
cx8:function cx8(d){this.a=d},
d1U:function d1U(d){this.a=d},
dkw(){var w,v,u
try{v=A.ys()
w=v.gq_(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d9B(d,e){var w=C.dkw(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eE(2,w,B.aP,!1))
v.push("widget_referrer="+A.eE(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d9A(d){var w=A.aq(y.c,!0,!1,!1,!1).cV(d)
return w==null?null:w.b[1]},
dkx(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dGV(d,e,f){var w,v,u=C.d9A(d)
if(u!=null){if(f){w=C.dkw()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dkx(C.d9B(u,e))}return C.dkx(d)},
dGW(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dGX(d){var w
if($.M2().a==null)return!1
w=$.E4().a
return d>=w&&d<w+4},
dkA(){var w=$.aqn
if(w!=null)w.a7(0)
$.aqn=null
$.E4().sv(0,0)},
dkz(){var w,v,u,t=$.M2()
if(t.a==null)return
w=$.aqn
if(w!=null)w.a7(0)
v=$.dky
if(v<=4){t=t.a
t.toString
C.d9C(t)
return}w=$.E4()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d9C(t)},
d9C(d){var w=$.aqn
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
default:w=null}$.aqn=A.dp(A.d7(0,0,0,0,0,w),C.dY4())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Km.prototype={
B(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.Q.l(0.25),B.o,1),r=A.Z(this.d,B.Q,w,w,14)
return A.u(w,A.G(A.a([r,B.eI,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bD,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.R,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ep,w,w,w)}}
C.n_.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.He.prototype={
S(){return new C.ab_(A.a([],x.e))},
gek(){return this.c}}
C.ab_.prototype={
Z(){var w=this
w.a3()
$.E4().aj(0,w.gaso())
C.dXU(w.gbeE())
w.Vs()},
be3(){if(this.c!=null)this.n(new C.cx_())},
beF(){C.dkz()},
p(){$.E4().V(0,this.gaso())
C.dkA()
$.M2().sv(0,null)
this.a2()},
Vs(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vs=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hg(t.a.c),$async$Vs)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwZ(t,s))
$.bdH=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vs,v)},
RI(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RI=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cwX(t))
w=3
return A.b(C.aqo(t.a.c),$async$RI)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwY(t,s))
$.bdH=J.a3(t.d)
t.c.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RI,v)},
bgv(d){var w=this.c
w.toString
A.a5(w,!1).cg(A.ee(new C.cx0(d),!1,null,x.H))},
bh6(){var w=this.c
w.toString
return C.Vn(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.eb:B.bH,s=A.aG(v,v,v,v,B.Fq,v,v,v,new C.cx4(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bn(A.G(A.a([A.H(new A.I(B.ib,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.P,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aQ(!1,B.M,!0,v,A.aW(!1,v,!0,new A.I(B.aK,A.Z(B.eV,B.Q,v,v,28),v),B.c9,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbh5(),v,v,v,v,v,v,v),B.h,B.F,0,v,v,v,v,v,B.a0)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cb(!0,A.y(A.a([new A.I(D.OW,r,v),A.H(w.e?B.lh:new A.iw($.M2(),new C.cx5(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a_,!0,!0)
return A.c8(v,t,s,v,!1,!1,A.alb(B.Q,B.AY,B.na,D.c_t,w.e?v:new C.cx6(w)),v)}}
C.SL.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.Q.l(0.18),B.cu,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1X(n,!0,!C.dGX(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ik,B.lo,u,u,22),B.al,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vG,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aQ(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cx(p,A.fR(A.y(A.a([new C.aCa(o,u),A.H(n,1),A.u(u,A.G(A.a([A.Z(B.pi,B.Q.l(0.85),u,u,9),D.byT,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.ac,u,u,u,u,u,D.ana,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,u,u,new A.t(u,u,r,s,q,D.SU,B.k),u,u,u,B.fe,u,u,u),1),B.al,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.z,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.Q.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.F,0,u,u,u,u,u,B.a0)}}
C.aCa.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pl,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.ac,w,w,w,w,w,B.OL,w,w,w)}}
C.Hd.prototype={
S(){return new C.aD8()}}
C.aD8.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.eb:B.bH,t=A.aG(w,w,w,w,B.Fq,w,w,w,new C.cwU(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c8(w,u,A.cb(!0,A.y(A.a([new A.I(D.OW,A.G(A.a([t,A.H(new A.Bn(A.G(A.a([A.H(new A.I(B.ib,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.P,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aQ(!1,B.M,!0,w,A.aW(!1,w,!0,new A.I(B.aK,A.Z(B.eV,B.Q,w,w,28),w),B.c9,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cwV(d),w,w,w,w,w,w,w),B.h,B.F,0,w,w,w,w,w,B.a0)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.iw($.M2(),new C.cwW(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a_,!0,!0),w,!1,!1,w,w)}}
C.aJN.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.Q.l(0.35),B.es,28),new A.ag(0,B.x,B.q.l(0.45),B.cv,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dkC(new A.di(v+"_full_"+u,x.W),!1,u,!1,w.gaH1(),v+"_full")
w=v}else w=new C.aDe(t.r,s)}else w=new C.ayx(m,s)
else w=D.c4X
return A.u(s,A.cx(n,A.fR(A.y(A.a([new C.aJO(m,l,s),A.H(w,1),new C.aJM(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,s,s,new A.t(s,s,o,q,p,D.SU,B.k),s,r*2.05,s,B.bf,s,s,r)}}
C.aJO.prototype={
B(d){var w,v,u,t,s=null,r=new A.M(Date.now(),0,!1),q=A.dg(r)
r=A.h8(r)
w=new A.dh(q,r)
v=w.gGQ()===0?12:w.gGQ()
r=B.a.bh(B.n.q(r),2,"0")
q=(q<12?B.eQ:B.hD)===B.eQ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.l4,s,s,s),B.b2,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.axJ,B.dw,D.awY,B.dw,D.axN],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.G(A.a([A.Z(B.Fj,B.Q.l(0.9),s,s,12),B.dw,A.H(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.ac,s,s,s,s,s,D.anU,s,s,s)}}
C.aDe.prototype={
B(d){var w=null
return A.u(w,A.aS(A.y(A.a([A.Z(B.xr,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.eB(D.aB7,D.bOc,this.c,A.ew(w,w,w,w,w,w,w,w,w,B.Q,w,w,w,w,w,new A.aF(B.Q.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.R,0,B.l),w,w,w),B.h,B.vG,w,w,w,w,w,w,w,w,1/0)}}
C.aJM.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.asg(B.Ro,"YouTube",s===0,r,new C.cLA(u))
s=u.asg(B.kC,"Device",s===1,r,new C.cLB(u))
w=r?"Power off":"Power on"
v=r?D.Rp:D.auW
return A.u(t,A.G(A.a([q,B.Y,s,B.b2,A.aG(t,t,t,t,A.Z(v,r?B.b4:B.dD,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cE)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.ac,t,t,t,t,t,D.anH,t,t,t)},
asg(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.Q:B.a7
v=f&&g?B.Q.l(0.15):B.F
u=A.n(10)
t=g?h:s
return A.H(A.aQ(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.I(B.lz,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.R,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a0),1)}}
C.aEp.prototype={
B(d){return D.adX}}
C.ayx.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.k1,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qC("Serial",u.c),q=w.qC("Model",u.d),p=w.qC("Device ID",u.e),o=w.qC("IMEI",u.r),n=w.qC("MAC",u.f),m=w.qC("OS",u.w+" "+u.x),l=w.qC("Location",u.y+", "+u.z),k=w.qC("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qC("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.al,s,B.V,r,q,p,o,n,m,l,k,j,w.qC("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aK,v,v,B.a1,!1)},
qC(d,e){var w=null
return new A.I(B.c2,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c_,A.j(e,w,w,w,w,w,w,D.bFZ,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Hh.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p_.prototype={
gaH1(){var w=this.c
return w===D.a_V||w===D.a_W||w===D.Hc||w===D.a_X}}
C.a1X.prototype={
S(){return new C.aD9(null,null)}}
C.aD9.prototype={
Z(){this.a3()
var w=A.bE(null,B.rt,null,1,null,this)
w.no(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQA()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dQ(t,new A.t(t,t,t,t,t,new A.ap(B.cQ,B.c0,B.y,A.a([B.F,B.q.l(0.55)],x.O),t,t),B.k),B.bB),q=x.Y,p=u.d
p===$&&A.c()
p=A.cs(B.i8,p,t)
w=B.c.l(0.92)
q=A.aS(new A.cX(new A.b1(p,new A.bl(0.72,1,q),q.j("b1<bh.T>")),!1,A.Z(B.ik,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lo
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEu(s,t),r,q,A.b3(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b3(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b3(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aK(B.a6,t,B.aT,B.m,s,t)}}
C.aEu.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kH(u,new C.cAZ(this),B.bt,!0,w,w,new C.cB_(this),w)
return new C.CQ(v,w)}}
C.CQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.re,B.Lv],x.O),B.ik)
break
case 1:w=new A.aH(A.a([B.vG,D.ai5],x.O),B.jK)
break
case 2:w=new A.aH(A.a([D.ajC,D.ahC],x.O),B.xA)
break
case 3:w=new A.aH(A.a([B.P,B.cF],x.O),B.xE)
break
case 4:w=new A.aH(A.a([B.ac,B.aj],x.O),B.n6)
break
default:w=u}v=w.a
return A.u(u,A.aS(A.Z(w.b,B.Q.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.an,B.ar,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afE.prototype={
p(){var w=this,v=w.aR$
if(v!=null)v.V(0,w.gdv())
w.aR$=null
w.a2()},
bp(){this.bF()
this.bD()
this.dw()}}
C.a1Y.prototype={
S(){return new C.ab0()}}
C.ab0.prototype={
bxj(d,e){var w=C.d9A(d)
if(w!=null)return C.d9B(w,e)
return d},
a3O(d,e){var w,v=this,u=C.d9A(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bxj(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dGV(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bvc(){var w,v=this
if(v.w)return
v.n(new C.cx7(v))
w=v.e
if(w!=null)v.a3O(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aL()
u.d=w
try{$.E5()
$.os().rR(w,new C.cxf(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b4(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cx8(v))
w=v.e
w.toString
v.a3O(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.RD,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.fR(A.aS(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.R,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YF(n,B.pX,w)],v)
if(o.f)w.push(A.fR(A.aS(new A.al(28,28,D.aeO,n),n,n,n),B.ck,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b_,B.o,1)
q=A.Z(B.Fm,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eI(0,A.aQ(!1,B.M,!0,n,A.aW(!1,n,!0,A.aS(A.u(n,A.G(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.R,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Oi,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbvb(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a0)))}return new A.aK(B.a6,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(n_)","~()","He(R)","n_(X<@,@>)","a_(n_)","X<m,@>(n_)","au<~>()","Hd(R)","iw<S>(R,p_?,o?)","SL(R,S)","rh(R,p_?,o?)","CQ(R,ak,dw?)"])
C.d5O.prototype={
$1(d){return new C.He(this.a,null)},
$S:z+2}
C.d5N.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.aA(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cK,B.P],j):A.a([B.c,B.aa],j),h=A.a([new A.ag(0,B.x,B.Q.l(0.22),B.es,32)],x.V),g=A.U(m?B.bu:B.Q.l(0.18),B.o,1),f=A.n(28),e=B.Q.l(m?0.35:0.14)
j=A.a([e,B.Z.l(m?0.18:0.08)],j)
e=A.u(n,D.awC,B.h,n,n,new A.t(B.Q.l(0.18),n,A.U(B.Q.l(0.45),B.o,1),n,n,n,B.ak),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.eu,w,A.aG(n,n,n,n,A.Z(B.cA,m?B.a7:B.ck,n,n,n),n,n,n,new C.d5J(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a2,B.a4,B.y,j,n,n),B.k),n,n,n,B.Df,n,n,n)
e=A.eb(B.bY,A.a([new C.Km("YouTube",B.Fi,m,n),new C.Km("TikTok",B.jK,m,n),new C.Km("Instagram",B.xA,m,n),new C.Km("Facebook",B.xE,m,n)],v),B.bS,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bA:B.fM,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.bH
r=A.Z(B.jJ,B.Q.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bu:B.ay
u=A.y(A.a([e,B.aq,A.aw(n,B.A,!0,n,!0,B.m,n,A.ax(),w,n,n,n,n,n,2,A.bn(n,new A.b7(4,q,B.L),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.n(16),B.Km),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.G,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.O,n,n,n,n)],v),B.ag,B.e,B.f,0,B.l)
e=A.j5(D.awG,D.bZA,new C.d5K(d),A.ic(n,n,n,n,n,n,n,n,n,n,n,m?B.aG:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dQ(A.cx(f,A.y(A.a([j,new A.I(D.ap_,u,n),new A.I(D.apb,A.G(A.a([e,B.b2,A.bP(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a3,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d5L(d),n,n),B.Y,A.dL(D.aAP,D.c_n,new C.d5M(d,w),A.br(B.Q,n,n,n,B.c,n,D.Oi,n,new A.bC(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ag,B.e,B.R,0,B.l),B.at),new A.t(n,n,g,k,h,new A.ap(B.an,B.ar,B.y,i,n,n),B.k),B.bB),n)},
$S:70}
C.d5J.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5K.prototype={
$0(){C.dkA()
$.M2().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d5L.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5M.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bdS.prototype={
$1(d){return C.dkB(A.Q(d,x.N,x.z))},
$S:z+3}
C.bdT.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bdK.prototype={
$1(d){return d.c},
$S:z+0}
C.bdL.prototype={
$1(d){return d.r},
$S:z+0}
C.bdM.prototype={
$1(d){return d.f},
$S:z+0}
C.bdN.prototype={
$1(d){return d.at},
$S:z+0}
C.bdO.prototype={
$1(d){return d.c},
$S:z+0}
C.bdP.prototype={
$1(d){return d.r},
$S:z+0}
C.bdQ.prototype={
$1(d){return d.f},
$S:z+0}
C.bdR.prototype={
$1(d){return d.at},
$S:z+0}
C.bdJ.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bdI.prototype={
$1(d){return B.a.bh(B.n.j3(d,16),2,"0").toUpperCase()},
$S:78}
C.cx_.prototype={
$0(){},
$S:0}
C.cwZ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cwX.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cwY.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cx0.prototype={
$1(d){return new C.Hd(this.a,null)},
$S:z+7}
C.cx4.prototype={
$0(){return A.a5(this.a,!1).e3()},
$S:0}
C.cx5.prototype={
$3(d,e,f){return new A.iw($.E4(),new C.cx3(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cx3.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AO(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.Q.l(0.12)
s=A.n(12)
r=A.U(B.Q.l(0.35),B.o,1)
q=A.Z(B.ik,B.Q,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.E4().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.P,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.co,B.eq,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cx(s,new A.iS(1.7777777777777777,C.dkC(new A.di("fleet_master_"+r,x.W),!0,r,!0,j.gaH1(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u1(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jL(new A.I(B.D4,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.na(D.ank,A.atS(new A.mq(new C.cx2(i,j),J.a3(i.d),!1,!0,!0,A.qU(),k),D.bzA),k)],w))},
$S:1613}
C.cx2.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.SL(v,e,J.a3(w.d),new C.cx1(w,v),this.b,null)},
$S:z+9}
C.cx1.prototype={
$0(){return this.a.bgv(this.b)},
$S:0}
C.cx6.prototype={
$0(){this.a.RI()
return null},
$S:0}
C.cwU.prototype={
$0(){return A.a5(this.a,!1).e3()},
$S:0}
C.cwV.prototype={
$0(){C.Vn(this.a,$.bdH)
return null},
$S:0}
C.cwW.prototype={
$3(d,e,f){return A.fG(new C.cwT(this.a,e))},
$S:z+10}
C.cwT.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aS(A.cm(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.aq,new C.aJN(u,s.a.c,s.e,s.d,new C.cwQ(s),new C.cwR(s),new C.cwS(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wN,v,v,B.a1),v,v,v)},
$S:1614}
C.cwQ.prototype={
$0(){var w=this.a.c
w.toString
C.Vn(w,$.bdH)
return null},
$S:0}
C.cwR.prototype={
$1(d){var w=this.a
return w.n(new C.cwP(w,d))},
$S:39}
C.cwP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwS.prototype={
$0(){var w=this.a
return w.n(new C.cwO(w))},
$S:0}
C.cwO.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cLA.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cLB.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cAZ.prototype={
$3(d,e,f){return new C.CQ(this.a.c,null)},
$S:z+11}
C.cB_.prototype={
$3(d,e,f){if(f==null)return e
return new A.aK(B.a6,null,B.aT,B.m,A.a([new C.CQ(this.a.c,null),D.aeb],x.p),null)},
$C:"$3",
$R:3,
$S:445}
C.cx7.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cxf.prototype={
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
A.fP(v,"load",new C.cxd(w),!1,u)
v=w.e
v.toString
A.fP(v,"error",new C.cxe(w),!1,u)
w=w.e
w.toString
return w},
$S:388}
C.cxd.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cxb(w))
A.bK(B.D,new C.cxc(w),x.H)}},
$S:43}
C.cxb.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cxc.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cx9(w))},
$S:12}
C.cx9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cxe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cxa(w))},
$S:43}
C.cxa.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cx8.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1U.prototype={
$1(d){var w,v,u,t,s=new A.Cq([],[]).G7(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1615};(function aliases(){var w=C.afE.prototype
w.aQA=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ab_.prototype,"gaso","be3",1)
w(u,"gbeE","beF",1)
w(u,"gbh5","bh6",6)
w(C.ab0.prototype,"gbvb","bvc",1)
v(C,"dY4","dkz",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wv,[C.d5O,C.d5N,C.bdS,C.bdT,C.bdK,C.bdL,C.bdM,C.bdN,C.bdO,C.bdP,C.bdQ,C.bdR,C.bdJ,C.bdI,C.cx0,C.cx5,C.cx3,C.cwW,C.cwR,C.cAZ,C.cB_,C.cxf,C.cxd,C.cxe,C.d1U])
v(A.WV,[C.d5J,C.d5K,C.d5L,C.d5M,C.cx_,C.cwZ,C.cwX,C.cwY,C.cx4,C.cx1,C.cx6,C.cwU,C.cwV,C.cwQ,C.cwP,C.cwS,C.cwO,C.cLA,C.cLB,C.cx7,C.cxb,C.cxc,C.cx9,C.cxa,C.cx8])
v(A.av,[C.Km,C.SL,C.aCa,C.aJN,C.aJO,C.aDe,C.aJM,C.aEp,C.ayx,C.aEu,C.CQ])
v(A.ak,[C.n_,C.p_])
v(A.ac,[C.He,C.Hd,C.a1X,C.a1Y])
v(A.ae,[C.ab_,C.aD8,C.afE,C.ab0])
v(A.WW,[C.cx2,C.cwT])
u(C.Hh,A.azq)
u(C.aD9,C.afE)
w(C.afE,A.e3)})()
A.dnR(b.typeUniverse,JSON.parse('{"He":{"ac":[],"o":[]},"SL":{"av":[],"o":[]},"Hd":{"ac":[],"o":[]},"Km":{"av":[],"o":[]},"ab_":{"ae":["He"]},"aCa":{"av":[],"o":[]},"aD8":{"ae":["Hd"]},"aJN":{"av":[],"o":[]},"aJO":{"av":[],"o":[]},"aDe":{"av":[],"o":[]},"aJM":{"av":[],"o":[]},"aEp":{"av":[],"o":[]},"ayx":{"av":[],"o":[]},"a1X":{"ac":[],"o":[]},"CQ":{"av":[],"o":[]},"aD9":{"ae":["a1X"]},"aEu":{"av":[],"o":[]},"a1Y":{"ac":[],"o":[]},"ab0":{"ae":["a1Y"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<n_>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<S>"),X:w("ad<n_>"),a:w("ad<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mX"),_:w("AL"),k:w("n_"),N:w("m"),Y:w("bl<a8>"),W:w("di<m>"),J:w("iw<S>"),j:w("iw<p_?>"),E:w("vu<cy>"),q:w("Tt"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rp=new A.L(983224,"MaterialIcons",!1)
D.azk=new A.a6(D.Rp,48,B.b_,null,null,null)
D.bFD=new A.O(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bN7=new A.x("Powered off",null,D.bFD,null,null,null,null,null,null,null,null,null)
D.aN6=w([D.azk,B.C,D.bN7],x.p)
D.akL=new A.fl(B.a1,B.e,B.R,B.i,null,B.l,null,0,D.aN6,null)
D.adX=new A.dk(B.K,null,null,D.akL,null)
D.bzg=new A.al(18,18,B.Ld,null)
D.aeb=new A.dk(B.K,null,null,D.bzg,null)
D.aeO=new A.hb(2,null,null,null,null,B.T,null,null,null,null)
D.ahC=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ai5=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajC=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.ana=new A.W(0,3,0,3)
D.ank=new A.W(10,0,10,88)
D.anH=new A.W(12,6,12,10)
D.anU=new A.W(14,8,14,6)
D.Oi=new A.W(18,12,18,12)
D.ap_=new A.W(20,18,20,8)
D.apb=new A.W(20,8,20,20)
D.OW=new A.W(8,6,15,8)
D.auW=new A.L(983222,"MaterialIcons",!1)
D.awC=new A.a6(B.ik,26,B.Q,null,null,null)
D.awG=new A.a6(B.QB,18,null,null,null,null)
D.awY=new A.a6(B.pl,14,B.T,null,null,null)
D.avc=new A.L(983420,"MaterialIcons",!1)
D.axJ=new A.a6(D.avc,14,B.T,null,null,null)
D.atn=new A.L(62895,"MaterialIcons",!1)
D.axN=new A.a6(D.atn,14,B.T,null,null,null)
D.aAP=new A.a6(B.iY,20,null,null,null,null)
D.aB7=new A.a6(B.eV,16,null,null,null,null)
D.aPx=w([B.aj,B.P],x.O)
D.SU=new A.ap(B.an,B.ar,B.y,D.aPx,null,null)
D.bt9=new A.aH("NGMY OS","14.2.1")
D.bs0=new A.aH("VirtualDroid","13.8.4")
D.bs_=new A.aH("NGMY OS","15.0.0")
D.bsJ=new A.aH("VirtualDroid","14.1.2")
D.brY=new A.aH("NGMY Tab OS","12.9.7")
D.brW=new A.aH("NGMY OS","13.5.3")
D.brL=new A.aH("VirtualDroid","15.2.0")
D.bsm=new A.aH("NGMY OS","14.8.1")
D.bsP=new A.aH("NGMY Tab OS","13.2.4")
D.btj=new A.aH("VirtualDroid","12.6.9")
D.brH=new A.aH("NGMY OS","16.0.1")
D.bry=new A.aH("VirtualDroid","14.9.0")
D.bt1=new A.aH("NGMY Tab OS","14.0.3")
D.bs9=new A.aH("NGMY OS","13.1.8")
D.brG=new A.aH("VirtualDroid","13.4.5")
D.brV=new A.aH("NGMY OS","15.3.2")
D.bsQ=new A.aH("NGMY Tab OS","12.4.1")
D.bt3=new A.aH("VirtualDroid","16.1.0")
D.bsl=new A.aH("NGMY OS","14.4.6")
D.bta=new A.aH("VirtualDroid","15.0.8")
D.aP1=w([D.bt9,D.bs0,D.bs_,D.bsJ,D.brY,D.brW,D.brL,D.bsm,D.bsP,D.btj,D.brH,D.bry,D.bt1,D.bs9,D.brG,D.brV,D.bsQ,D.bt3,D.bsl,D.bta],A.bf("ab<+(m,m)>"))
D.bvl=new A.ei(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buU=new A.ei(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.buP=new A.ei(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buY=new A.ei(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.buL=new A.ei(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bv_=new A.ei(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bvn=new A.ei(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buM=new A.ei(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.buT=new A.ei(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bv1=new A.ei(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.buK=new A.ei(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bvf=new A.ei(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bvc=new A.ei(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.buS=new A.ei(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bv9=new A.ei(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bv8=new A.ei(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buJ=new A.ei(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.buX=new A.ei(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bv6=new A.ei(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bvb=new A.ei(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U2=w([D.bvl,D.buU,D.buP,D.buY,D.buL,D.bv_,D.bvn,D.buM,D.buT,D.bv1,D.buK,D.bvf,D.bvc,D.buS,D.bv9,D.bv8,D.buJ,D.buX,D.bv6,D.bvb],A.bf("ab<+(m,m,a8,a8,m)>"))
D.aV9=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_V=new C.Hh(0,"youtube")
D.a_W=new C.Hh(1,"tiktok")
D.Hc=new C.Hh(2,"instagram")
D.a_X=new C.Hh(3,"facebook")
D.bn8=new C.Hh(4,"other")
D.byT=new A.al(3,null,null,null)
D.bzA=new A.ib(4,10,8,0.52,null)
D.bOp=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCX=new A.aT(D.bOp,null,null,null,null,null,null,null,null,null,null,null,null,B.D,!1,null,null,null,B.m,null)
D.bFZ=new A.O(!0,B.c,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOc=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bZA=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c_n=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c_t=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4X=new C.aEp(null)})();(function staticFields(){$.dky=20
$.aqn=null
$.bdH=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e1o","E4",()=>A.Rq(0))
w($,"e1p","M2",()=>A.Rq(null))})()};
(a=>{a["iM06EqXlD5rie0HUCnerYlcRuKw="]=a.current})($__dart_deferred_initializers__);