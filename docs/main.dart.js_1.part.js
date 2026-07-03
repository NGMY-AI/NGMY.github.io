((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dR3(d,e){A.a8(d,!1).cO(A.er(new C.cZh(e),!0,null,x.H))},
Ut(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Ut=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Le()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a2,B.T),t)
w=3
return A.b(A.dg(B.D,new C.cZg(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Ut)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dz2(r)
if(q==null){d.F(x.q).f.O(D.bwT)
w=1
break}w=4
return A.b(A.bN(B.fA,null,x.H),$async$Ut)
case 4:if(d.e==null){w=1
break}n=B.p.au(e,1,999)
$.dcI=n
p=C.dyX(n)
n=$.Du()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d20(q)
d.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Ut,v)},
dcL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aR(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aR(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mG(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
GF(d){return C.dz5(d)},
dz5(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GF=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GF)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.cr(r)?10:11
break
case 10:k=J.fr(r,x.f)
k=A.ds(k,new C.bbl(),k.$ti.j("I.E"),x.k)
j=A.S(k).j("ab<I.E>")
i=A.D(new A.ab(k,new C.bbm(),j),j.j("I.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dcN(q)
w=12
return A.b(C.GE(a3,p),$async$GF)
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
n=B.v.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dcL(A.O(n,x.N,x.z))
l=C.dcN(A.a([m],x.e))
w=21
return A.b(C.GE(a3,l),$async$GF)
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
case 18:case 14:q=C.dz3()
w=22
return A.b(C.GE(a3,q),$async$GF)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GF,v)},
dcN(d){var w=A.T(d).j("A<1,m>"),v=new A.A(d,new C.bbd(),w).eB(0),u=new A.A(d,new C.bbe(),w).eB(0),t=new A.A(d,new C.bbf(),w).eB(0),s=new A.A(d,new C.bbg(),w).eB(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d21(null,q,u,t,v,s));++q}return r},
ap2(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$ap2=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GF(d),$async$ap2)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d8(t,new C.bbh(),s).eB(0)
p=r.d8(t,new C.bbi(),s).eB(0)
o=r.d8(t,new C.bbj(),s).eB(0)
n=r.d8(t,new C.bbk(),s).eB(0)
m=C.d21(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GE(d,t),$async$ap2)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$ap2,v)},
GE(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GE=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GE)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bbc(),x.P)
s=A.D(s,s.$ti.j("a1.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GE)
case 3:return A.f(null,v)}})
return A.h($async$GE,v)},
dz3(){var w,v=x.N,u=A.b5(v),t=A.b5(v),s=A.b5(v),r=A.b5(v),q=J.dW(20,x.k)
for(w=0;w<20;++w)q[w]=C.d21(w,w,t,s,u,r)
return q},
d21(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jI(),h=d==null,g=D.Ss[B.p.an(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Ss[B.p.an(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.A(p,new C.bbb(),A.T(p).j("A<1,m>")).fj(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.fj(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bl(B.p.jd(i.by(256),16),2,"0")
s=B.d.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.an(e,20)
k=D.aRe[w]
j=D.aM0[w]
return new C.mG("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bl(B.p.q(e+1),2,"0"),u,k,C.dz4(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.J(Date.now(),0,!1).a0().W())},
dz4(d,e){var w,v=J.dW(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bl(B.p.jd(d.by(256),16),2,"0")
return B.d.fj(v)},
cZh:function cZh(d){this.a=d},
cZg:function cZg(d,e){this.a=d
this.b=e},
cZc:function cZc(d){this.a=d},
cZd:function cZd(d){this.a=d},
cZe:function cZe(d){this.a=d},
cZf:function cZf(d,e){this.a=d
this.b=e},
JF:function JF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mG:function mG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bbl:function bbl(){},
bbm:function bbm(){},
bbd:function bbd(){},
bbe:function bbe(){},
bbf:function bbf(){},
bbg:function bbg(){},
bbh:function bbh(){},
bbi:function bbi(){},
bbj:function bbj(){},
bbk:function bbk(){},
bbc:function bbc(){},
bbb:function bbb(){},
GD:function GD(d,e){this.c=d
this.a=e},
aa0:function aa0(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cso:function cso(){},
csn:function csn(d,e){this.a=d
this.b=e},
csl:function csl(d){this.a=d},
csm:function csm(d,e){this.a=d
this.b=e},
csp:function csp(d){this.a=d},
cst:function cst(d){this.a=d},
csu:function csu(d,e){this.a=d
this.b=e},
css:function css(d,e,f){this.a=d
this.b=e
this.c=f},
csr:function csr(d,e){this.a=d
this.b=e},
csq:function csq(d,e){this.a=d
this.b=e},
csv:function csv(d){this.a=d},
RU:function RU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAD:function aAD(d,e){this.c=d
this.a=e},
GC:function GC(d,e){this.c=d
this.a=e},
aBA:function aBA(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
csi:function csi(d){this.a=d},
csj:function csj(d){this.a=d},
csk:function csk(d){this.a=d},
csh:function csh(d,e){this.a=d
this.b=e},
cse:function cse(d){this.a=d},
csf:function csf(d){this.a=d},
csd:function csd(d,e){this.a=d
this.b=e},
csg:function csg(d){this.a=d},
csc:function csc(d){this.a=d},
aI5:function aI5(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aI6:function aI6(d,e,f){this.c=d
this.d=e
this.a=f},
aBG:function aBG(d,e){this.c=d
this.a=e},
aI4:function aI4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cF8:function cF8(d){this.a=d},
cF9:function cF9(d){this.a=d},
aCM:function aCM(d){this.a=d},
ax3:function ax3(d,e){this.c=d
this.a=e},
dz2(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dz1(v)
if(u!=null)return new C.oF(w,C.d2_(u,!1),D.Zq,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dz0(v)
if(t!=null)return new C.oF(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Zr,"TikTok",q)
s=C.dz_(w,v)
if(s!=null)return s
r=C.dyZ(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oF(w,w,D.bhO,"Video",q)
return q},
dz_(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oF(d,"https://www.instagram.com/reel/"+w+u,D.FF,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oF(d,"https://www.instagram.com/p/"+w+u,D.FF,t,null)}return null},
dyZ(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oF(d,"https://www.facebook.com/plugins/video.php?href="+A.ew(2,d,B.aK,!1)+"&show_text=false&width=734",D.Zs,"Facebook",null)},
dz1(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cW(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dz0(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cW(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
GG:function GG(d,e){this.a=d
this.b=e},
oF:function oF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a11:function a11(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBB:function aBB(d,e){var _=this
_.d=$
_.cV$=d
_.aY$=e
_.c=_.a=null},
aCQ:function aCQ(d,e){this.c=d
this.a=e},
cuY:function cuY(d){this.a=d},
cuZ:function cuZ(d){this.a=d},
Cj:function Cj(d,e){this.c=d
this.a=e},
aey:function aey(){},
dcM(d,e,f,g,h,i){return new C.a12(i,f,h,e,g,d)},
dPL(d){var w=window
w.toString
A.h_(w,"message",new C.cVu(d),!1,x._)},
a12:function a12(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aa1:function aa1(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
csw:function csw(d){this.a=d},
csE:function csE(d){this.a=d},
csC:function csC(d){this.a=d},
csA:function csA(d){this.a=d},
csB:function csB(d){this.a=d},
csy:function csy(d){this.a=d},
csD:function csD(d){this.a=d},
csz:function csz(d){this.a=d},
csx:function csx(d){this.a=d},
cVu:function cVu(d){this.a=d},
dcG(){var w,v,u
try{v=A.xS()
w=v.gpO(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d2_(d,e){var w=C.dcG(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.ew(2,w,B.aK,!1))
v.push("widget_referrer="+A.ew(2,w,B.aK,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
d1Z(d){var w=A.ap(y.c,!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
dcH(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dyW(d,e,f){var w,v,u=C.d1Z(d)
if(u!=null){if(f){w=C.dcG()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dcH(C.d2_(u,e))}return C.dcH(d)},
dyX(d){if(d<=4)return 0
return B.p.aW(d-1,4)*4},
dyY(d){var w
if($.Le().a==null)return!1
w=$.Du().a
return d>=w&&d<w+4},
dcK(){var w=$.ap1
if(w!=null)w.a8(0)
$.ap1=null
$.Du().sv(0,0)},
dcJ(){var w,v,u,t=$.Le()
if(t.a==null)return
w=$.ap1
if(w!=null)w.a8(0)
v=$.dcI
if(v<=4){t=t.a
t.toString
C.d20(t)
return}w=$.Du()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d20(t)},
d20(d){var w=$.ap1
if(w!=null)w.a8(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.ap1=A.dp(A.d4(0,0,0,0,0,w),C.dPW())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.JF.prototype={
C(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.n,1),r=A.a3(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eN,A.j(this.c,w,w,w,w,w,A.l(w,w,v?B.V:B.dc,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.eq,w,w,w)}}
C.mG.prototype={
ac(){var w=this
return A.r(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.GD.prototype={
U(){return new C.aa0(A.a([],x.e))},
geM(){return this.c}}
C.aa0.prototype={
Y(){var w=this
w.a3()
$.Du().ai(0,w.garb())
C.dPL(w.gbcC())
w.UT()},
bc4(){if(this.c!=null)this.n(new C.cso())},
bcD(){C.dcJ()},
p(){$.Du().V(0,this.garb())
C.dcK()
$.Le().sv(0,null)
this.a2()},
UT(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UT=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GF(t.a.c),$async$UT)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.csn(t,s))
$.bba=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$UT,v)},
R7(){var w=0,v=A.i(x.H),u,t=this,s
var $async$R7=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.csl(t))
w=3
return A.b(C.ap2(t.a.c),$async$R7)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.csm(t,s))
$.bba=J.a2(t.d)
t.c.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$R7,v)},
beu(d){var w=this.c
w.toString
A.a8(w,!1).cO(A.er(new C.csp(d),!1,null,x.H))},
bf2(){var w=this.c
w.toString
return C.Ut(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.R,t=u?B.dJ:B.d4,s=A.aM(v,v,v,v,B.E_,v,v,v,new C.cst(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AP(A.F(A.a([A.H(new A.M(B.hN,A.j(r,v,1,B.af,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.L,!0,v,A.aZ(!1,v,!0,new A.M(B.aF,A.a3(B.f2,B.O,v,v,28),v),B.bS,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbf1(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cA(!0,A.B(A.a([new A.M(D.Ng,r,v),A.H(w.e?B.kO:new A.ig($.Le(),new C.csu(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a0,!0,!0)
return A.co(v,t,s,v,!1,!1,A.ajU(B.O,B.zT,B.mE,D.bLn,w.e?v:new C.csv(w)),v)}}
C.RU.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.n,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cm,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a11(n,!0,!C.dyY(w),"Fold "+(B.p.aW(w,4)+1)+"/"+B.p.aW(v.e+4-1,4),u)
n=w}else n=A.u(u,A.B(A.a([A.a3(B.hT,B.kV,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.av,B.f,0,B.l),B.h,B.uS,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.L,!0,u,A.aZ(!1,t,!0,A.B(A.a([A.H(A.u(u,A.cN(p,A.hL(A.B(A.a([new C.aAD(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a3(B.rs,B.O.l(0.85),u,u,9),D.bt9,A.j("Tap",u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.av,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.alj,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,u,u,new A.t(u,u,r,s,q,D.Rm,B.k),u,u,u,B.er,u,u,u),1),B.an,A.j(o.b,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a1)}}
C.aAD.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a3(B.oE,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.N6,w,w,w)}}
C.GC.prototype={
U(){return new C.aBA()}}
C.aBA.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.R,u=v?B.dJ:B.d4,t=A.aM(w,w,w,w,B.E_,w,w,w,new C.csi(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.co(w,u,A.cA(!0,A.B(A.a([new A.M(D.Ng,A.F(A.a([t,A.H(new A.AP(A.F(A.a([A.H(new A.M(B.hN,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.L,!0,w,A.aZ(!1,w,!0,new A.M(B.aF,A.a3(B.f2,B.O,w,w,28),w),B.bS,!0,w,w,w,w,w,w,w,w,w,w,w,new C.csj(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ig($.Le(),new C.csk(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a0,!0,!0),w,!1,!1,w,w)}}
C.aI5.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.eu,28),new A.ag(0,B.w,B.q.l(0.45),B.cw,18)],x.V),o=A.U(B.c.l(0.12),B.n,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dcM(new A.cQ(v+"_full_"+u,x.W),!1,u,!1,w.gaFM(),v+"_full")
w=v}else w=new C.aBG(t.r,s)}else w=new C.ax3(m,s)
else w=D.bYO
return A.u(s,A.cN(n,A.hL(A.B(A.a([new C.aI6(m,l,s),A.H(w,1),new C.aI4(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.aw),B.h,s,s,new A.t(s,s,o,q,p,D.Rm,B.k),s,r*2.05,s,B.ba,s,s,r)}}
C.aI6.prototype={
C(d){var w,v,u,t,s=null,r=new A.J(Date.now(),0,!1),q=A.dG(r)
r=A.hi(r)
w=new A.db(q,r)
v=w.gGl()===0?12:w.gGl()
r=B.a.bl(B.p.q(r),2,"0")
q=(q<12?B.eE:B.he)===B.eE?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,B.lx,s,s,s),B.b4,A.j(u.b,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b9,D.avH,B.dR,D.auT,B.dR,D.avL],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.F(A.a([A.a3(B.DT,B.O.l(0.9),s,s,12),B.dR,A.H(A.j(u.c,s,s,B.af,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.B(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.am1,s,s,s)}}
C.aBG.prototype={
C(d){var w=null
return A.u(w,A.aV(A.B(A.a([A.a3(B.wu,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.en(D.az6,D.bJd,this.c,A.et(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aJ(B.O.l(0.5),1,B.n,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uS,w,w,w,w,w,w,w,w,1/0)}}
C.aI4.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ar4(B.PR,"YouTube",s===0,r,new C.cF8(u))
s=u.ar4(B.kc,"Device",s===1,r,new C.cF9(u))
w=r?"Power off":"Power on"
v=r?D.PS:D.asS
return A.u(t,A.F(A.a([q,B.Y,s,B.b4,A.aM(t,t,t,t,A.a3(v,r?B.aX:B.dD,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cC)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.alO,t,t,t)},
ar4(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.O:B.a8
v=f&&g?B.O.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.L,!0,u,A.aZ(!1,A.n(10),!0,new A.M(B.l4,A.B(A.a([A.a3(d,w,s,s,18),A.j(e,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aCM.prototype={
C(d){return D.acw}}
C.ax3.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,B.iW,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qr("Serial",u.c),q=w.qr("Model",u.d),p=w.qr("Device ID",u.e),o=w.qr("IMEI",u.r),n=w.qr("MAC",u.f),m=w.qr("OS",u.w+" "+u.x),l=w.qr("Location",u.y+", "+u.z),k=w.qr("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qr("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.an,s,B.Q,r,q,p,o,n,m,l,k,j,w.qr("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aF,v,v,B.X,!1)},
qr(d,e){var w=null
return new A.M(B.c5,A.B(A.a([A.j(d.toUpperCase(),w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c9,A.j(e,w,w,w,w,w,D.bA_,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GG.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oF.prototype={
gaFM(){var w=this.c
return w===D.Zq||w===D.Zr||w===D.FF||w===D.Zs}}
C.a11.prototype={
U(){return new C.aBB(null,null)}}
C.aBB.prototype={
Y(){this.a3()
var w=A.bE(null,B.qN,null,1,null,this)
w.mk(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aPb()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dT(t,new A.t(t,t,t,t,t,new A.aq(B.d8,B.c6,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bx),q=x.Y,p=u.d
p===$&&A.c()
p=A.c9(B.hJ,p,t)
w=B.c.l(0.92)
q=A.aV(new A.di(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bg.T>")),!1,A.a3(B.hT,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kV
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aCQ(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aQ(B.a5,t,B.b2,B.m,s,t)}}
C.aCQ.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kt(u,new C.cuY(this),B.bs,!0,w,w,new C.cuZ(this),w)
return new C.Cj(v,w)}}
C.Cj.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qu,B.JW],x.O),B.hT)
break
case 1:w=new A.aI(A.a([B.uS,D.ag9],x.O),B.ji)
break
case 2:w=new A.aI(A.a([D.ahE,D.afH],x.O),B.wB)
break
case 3:w=new A.aI(A.a([B.W,B.dd],x.O),B.wF)
break
case 4:w=new A.aI(A.a([B.aa,B.aj],x.O),B.mA)
break
default:w=u}v=w.a
return A.u(u,A.aV(A.a3(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.al,B.au,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.aey.prototype={
p(){var w=this,v=w.aY$
if(v!=null)v.V(0,w.gdF())
w.aY$=null
w.a2()},
br(){this.bK()
this.bH()
this.dG()}}
C.a12.prototype={
U(){return new C.aa1()}}
C.aa1.prototype={
buH(d,e){var w=C.d1Z(d)
if(w!=null)return C.d2_(w,e)
return d},
a33(d,e){var w,v=this,u=C.d1Z(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.buH(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dyW(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsB(){var w,v=this
if(v.w)return
v.n(new C.csw(v))
w=v.e
if(w!=null)v.a33(w,v.a.d)},
Y(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.Dv()
$.o7().rF(w,new C.csE(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.csx(v))
w=v.e
w.toString
v.a33(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a3(B.Q4,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.M,n,n)],v))
return A.hL(A.aV(new A.M(new A.V(12,12,12,12),A.B(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.XK(n,B.pf,w)],v)
if(o.f)w.push(A.hL(A.aV(new A.an(28,28,D.ad2,n),n,n,n),B.c7,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b_,B.n,1)
q=A.a3(B.Q6,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f9(0,A.aT(!1,B.L,!0,n,A.aZ(!1,n,!0,A.aV(A.u(n,A.F(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.MI,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsA(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aQ(B.a5,n,B.b2,B.m,w,n)}}
var z=a.updateTypes(["m(mG)","~()","GD(R)","mG(W<@,@>)","a0(mG)","W<m,@>(mG)","ax<~>()","GC(R)","ig<Q>(R,oF?,p?)","RU(R,Q)","u_(R,oF?,p?)","Cj(R,ak,dq?)"])
C.cZh.prototype={
$1(d){return new C.GD(this.a,null)},
$S:z+2}
C.cZg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.R,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cs,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.eu,32)],x.V),g=A.U(m?B.bm:B.O.l(0.18),B.n,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.U.l(m?0.18:0.08)],j)
e=A.u(n,D.aux,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.n,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.B(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,A.l(n,n,m?B.V:B.aI,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.fp,w,A.aM(n,n,n,n,A.a3(B.cy,m?B.a8:B.c7,n,n,n),n,n,n,new C.cZc(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a_,B.a4,B.y,j,n,n),B.k),n,n,n,B.MR,n,n,n)
e=A.el(B.bR,A.a([new C.JF("YouTube",B.DS,m,n),new C.JF("TikTok",B.ji,m,n),new C.JF("Instagram",B.wB,m,n),new C.JF("Facebook",B.wF,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bz:B.fx,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.d4
r=A.a3(B.kd,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bm:B.b1
u=A.B(A.a([e,B.aq,A.au(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bj(n,new A.b6(4,q,B.K),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aJ(o,1,B.n,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.IJ),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.I,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.j9(D.auB,D.bPc,new C.cZd(d),A.k8(n,n,n,n,n,n,n,n,n,n,n,m?B.aE:B.aI,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.M(new A.V(12,0,12,12+l.f.d),A.dT(A.cN(f,A.B(A.a([j,new A.M(D.an5,u,n),new A.M(D.anf,A.F(A.a([e,B.b4,A.bQ(!1,A.j("Cancel",n,n,n,n,n,A.l(n,n,m?B.V:B.Z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cZe(d),n,n),B.Y,A.dE(D.ayQ,D.bPx,new C.cZf(d,w),A.bx(B.O,n,n,n,B.c,n,D.MI,n,new A.bD(A.n(14),B.K),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.aw),new A.t(n,n,g,k,h,new A.aq(B.al,B.au,B.y,i,n,n),B.k),B.bx),n)},
$S:65}
C.cZc.prototype={
$0(){A.a8(this.a,!1).R(null)
return null},
$S:0}
C.cZd.prototype={
$0(){C.dcK()
$.Le().sv(0,null)
A.a8(this.a,!1).R(null)},
$S:0}
C.cZe.prototype={
$0(){A.a8(this.a,!1).R(null)
return null},
$S:0}
C.cZf.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a8(this.a,!1).R(w)
return null},
$S:0}
C.bbl.prototype={
$1(d){return C.dcL(A.O(d,x.N,x.z))},
$S:z+3}
C.bbm.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bbd.prototype={
$1(d){return d.c},
$S:z+0}
C.bbe.prototype={
$1(d){return d.r},
$S:z+0}
C.bbf.prototype={
$1(d){return d.f},
$S:z+0}
C.bbg.prototype={
$1(d){return d.at},
$S:z+0}
C.bbh.prototype={
$1(d){return d.c},
$S:z+0}
C.bbi.prototype={
$1(d){return d.r},
$S:z+0}
C.bbj.prototype={
$1(d){return d.f},
$S:z+0}
C.bbk.prototype={
$1(d){return d.at},
$S:z+0}
C.bbc.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bbb.prototype={
$1(d){return B.a.bl(B.p.jd(d,16),2,"0").toUpperCase()},
$S:73}
C.cso.prototype={
$0(){},
$S:0}
C.csn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.csl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.csm.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.csp.prototype={
$1(d){return new C.GC(this.a,null)},
$S:z+7}
C.cst.prototype={
$0(){return A.a8(this.a,!1).en()},
$S:0}
C.csu.prototype={
$3(d,e,f){return new A.ig($.Du(),new C.css(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.css.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Af(d,k,x.Q)
w=w==null?k:w.gkn()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.n,1)
q=A.a3(B.hT,B.O,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Du().a
m=B.j.au(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.co,B.eY,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cN(s,new A.iB(1.7777777777777777,C.dcM(new A.cQ("fleet_master_"+r,x.W),!0,r,!0,j.gaFM(),"fleet_master"),k),B.aw),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zo(0,B.m,k,B.r,k,k,k,k,!1,k,B.X,!1,A.a([new A.k5(new A.M(B.BW,A.B(u,B.t,B.e,B.f,0,B.l),k),k),new A.oQ(D.alt,A.asv(new A.nM(new C.csr(i,j),J.a2(i.d),!1,!0,!0,A.vB(),k),D.btP),k)],w))},
$S:1562}
C.csr.prototype={
$2(d,e){var w=this.a,v=J.q(w.d,e)
return new C.RU(v,e,J.a2(w.d),new C.csq(w,v),this.b,null)},
$S:z+9}
C.csq.prototype={
$0(){return this.a.beu(this.b)},
$S:0}
C.csv.prototype={
$0(){this.a.R7()
return null},
$S:0}
C.csi.prototype={
$0(){return A.a8(this.a,!1).en()},
$S:0}
C.csj.prototype={
$0(){C.Ut(this.a,$.bba)
return null},
$S:0}
C.csk.prototype={
$3(d,e,f){return A.fI(new C.csh(this.a,e))},
$S:z+10}
C.csh.prototype={
$2(d,e){var w,v=null,u=B.j.au(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aV(A.ct(A.B(A.a([A.j(r,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.M,v,v),B.aq,new C.aI5(u,s.a.c,s.e,s.d,new C.cse(s),new C.csf(s),new C.csg(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vQ,v,v,B.X),v,v,v)},
$S:1563}
C.cse.prototype={
$0(){var w=this.a.c
w.toString
C.Ut(w,$.bba)
return null},
$S:0}
C.csf.prototype={
$1(d){var w=this.a
return w.n(new C.csd(w,d))},
$S:37}
C.csd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.csg.prototype={
$0(){var w=this.a
return w.n(new C.csc(w))},
$S:0}
C.csc.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cF8.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cF9.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cuY.prototype={
$3(d,e,f){return new C.Cj(this.a.c,null)},
$S:z+11}
C.cuZ.prototype={
$3(d,e,f){if(f==null)return e
return new A.aQ(B.a5,null,B.b2,B.m,A.a([new C.Cj(this.a.c,null),D.aco],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.csw.prototype={
$0(){return this.a.w=!0},
$S:0}
C.csE.prototype={
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
w.a33(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h_(v,"load",new C.csC(w),!1,u)
v=w.e
v.toString
A.h_(v,"error",new C.csD(w),!1,u)
w=w.e
w.toString
return w},
$S:560}
C.csC.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.csA(w))
A.bN(B.A,new C.csB(w),x.H)}},
$S:41}
C.csA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.csB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.csy(w))},
$S:12}
C.csy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.csD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.csz(w))},
$S:41}
C.csz.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.csx.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cVu.prototype={
$1(d){var w,v,u,t,s=new A.BT([],[]).FD(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.q(w,"info")
if(J.v(J.q(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.q(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.q(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1564};(function aliases(){var w=C.aey.prototype
w.aPb=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aa0.prototype,"garb","bc4",1)
w(u,"gbcC","bcD",1)
w(u,"gbf1","bf2",6)
w(C.aa1.prototype,"gbsA","bsB",1)
v(C,"dPW","dcJ",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vW,[C.cZh,C.cZg,C.bbl,C.bbm,C.bbd,C.bbe,C.bbf,C.bbg,C.bbh,C.bbi,C.bbj,C.bbk,C.bbc,C.bbb,C.csp,C.csu,C.css,C.csk,C.csf,C.cuY,C.cuZ,C.csE,C.csC,C.csD,C.cVu])
v(A.W1,[C.cZc,C.cZd,C.cZe,C.cZf,C.cso,C.csn,C.csl,C.csm,C.cst,C.csq,C.csv,C.csi,C.csj,C.cse,C.csd,C.csg,C.csc,C.cF8,C.cF9,C.csw,C.csA,C.csB,C.csy,C.csz,C.csx])
v(A.aC,[C.JF,C.RU,C.aAD,C.aI5,C.aI6,C.aBG,C.aI4,C.aCM,C.ax3,C.aCQ,C.Cj])
v(A.ak,[C.mG,C.oF])
v(A.ae,[C.GD,C.GC,C.a11,C.a12])
v(A.af,[C.aa0,C.aBA,C.aey,C.aa1])
v(A.W2,[C.csr,C.csh])
u(C.GG,A.axV)
u(C.aBB,C.aey)
w(C.aey,A.e7)})()
A.dg1(b.typeUniverse,JSON.parse('{"GD":{"ae":[],"p":[]},"RU":{"aC":[],"p":[]},"GC":{"ae":[],"p":[]},"JF":{"aC":[],"p":[]},"aa0":{"af":["GD"]},"aAD":{"aC":[],"p":[]},"aBA":{"af":["GC"]},"aI5":{"aC":[],"p":[]},"aI6":{"aC":[],"p":[]},"aBG":{"aC":[],"p":[]},"aI4":{"aC":[],"p":[]},"aCM":{"aC":[],"p":[]},"ax3":{"aC":[],"p":[]},"a11":{"ae":[],"p":[]},"Cj":{"aC":[],"p":[]},"aBB":{"af":["a11"]},"aCQ":{"aC":[],"p":[]},"a12":{"ae":[],"p":[]},"aa1":{"af":["a12"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bm
return{V:w("aa<ag>"),O:w("aa<z>"),e:w("aa<mG>"),s:w("aa<m>"),p:w("aa<p>"),t:w("aa<Q>"),X:w("ac<mG>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mC"),_:w("Aa"),k:w("mG"),N:w("m"),Y:w("bi<a7>"),W:w("cQ<m>"),J:w("ig<Q>"),j:w("ig<oF?>"),E:w("y_<cz>"),q:w("Sz"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bty=new A.an(18,18,B.JE,null)
D.aco=new A.de(B.J,null,null,D.bty,null)
D.PS=new A.P(983224,"MaterialIcons",!1)
D.axj=new A.a5(D.PS,48,B.b_,null,null,null)
D.bzG=new A.K(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJU=new A.x("Powered off",null,D.bzG,null,null,null,null,null,null,null,null)
D.aKg=w([D.axj,B.z,D.bJU],x.p)
D.aiS=new A.ep(B.X,B.e,B.P,B.i,null,B.l,null,0,D.aKg,null)
D.acw=new A.de(B.J,null,null,D.aiS,null)
D.ad2=new A.fS(2,null,null,null,null,B.V,null,null,null,null)
D.afH=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.ag9=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.ahE=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.alj=new A.V(0,3,0,3)
D.alt=new A.V(10,0,10,88)
D.alO=new A.V(12,6,12,10)
D.am1=new A.V(14,8,14,6)
D.MI=new A.V(18,12,18,12)
D.an5=new A.V(20,18,20,8)
D.anf=new A.V(20,8,20,20)
D.Ng=new A.V(8,6,15,8)
D.asS=new A.P(983222,"MaterialIcons",!1)
D.aux=new A.a5(B.hT,26,B.O,null,null,null)
D.auB=new A.a5(B.OY,18,null,null,null,null)
D.auT=new A.a5(B.oE,14,B.V,null,null,null)
D.at9=new A.P(983420,"MaterialIcons",!1)
D.avH=new A.a5(D.at9,14,B.V,null,null,null)
D.arw=new A.P(62895,"MaterialIcons",!1)
D.avL=new A.a5(D.arw,14,B.V,null,null,null)
D.ayQ=new A.a5(B.iA,20,null,null,null,null)
D.az6=new A.a5(B.f2,16,null,null,null,null)
D.aMr=w([B.aj,B.W],x.O)
D.Rm=new A.aq(B.al,B.au,B.y,D.aMr,null,null)
D.bns=new A.aI("NGMY OS","14.2.1")
D.bmj=new A.aI("VirtualDroid","13.8.4")
D.bmi=new A.aI("NGMY OS","15.0.0")
D.bn1=new A.aI("VirtualDroid","14.1.2")
D.bmg=new A.aI("NGMY Tab OS","12.9.7")
D.bme=new A.aI("NGMY OS","13.5.3")
D.bm3=new A.aI("VirtualDroid","15.2.0")
D.bmF=new A.aI("NGMY OS","14.8.1")
D.bn7=new A.aI("NGMY Tab OS","13.2.4")
D.bnC=new A.aI("VirtualDroid","12.6.9")
D.bm_=new A.aI("NGMY OS","16.0.1")
D.blR=new A.aI("VirtualDroid","14.9.0")
D.bnk=new A.aI("NGMY Tab OS","14.0.3")
D.bms=new A.aI("NGMY OS","13.1.8")
D.blZ=new A.aI("VirtualDroid","13.4.5")
D.bmd=new A.aI("NGMY OS","15.3.2")
D.bn8=new A.aI("NGMY Tab OS","12.4.1")
D.bnm=new A.aI("VirtualDroid","16.1.0")
D.bmE=new A.aI("NGMY OS","14.4.6")
D.bnt=new A.aI("VirtualDroid","15.0.8")
D.aM0=w([D.bns,D.bmj,D.bmi,D.bn1,D.bmg,D.bme,D.bm3,D.bmF,D.bn7,D.bnC,D.bm_,D.blR,D.bnk,D.bms,D.blZ,D.bmd,D.bn8,D.bnm,D.bmE,D.bnt],A.bm("aa<+(m,m)>"))
D.bpE=new A.e9(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bpc=new A.e9(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bp7=new A.e9(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bpg=new A.e9(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bp3=new A.e9(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bpi=new A.e9(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bpG=new A.e9(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bp4=new A.e9(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bpb=new A.e9(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bpk=new A.e9(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bp2=new A.e9(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bpy=new A.e9(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bpv=new A.e9(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bpa=new A.e9(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bps=new A.e9(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bpr=new A.e9(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bp1=new A.e9(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bpf=new A.e9(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bpp=new A.e9(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bpu=new A.e9(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Ss=w([D.bpE,D.bpc,D.bp7,D.bpg,D.bp3,D.bpi,D.bpG,D.bp4,D.bpb,D.bpk,D.bp2,D.bpy,D.bpv,D.bpa,D.bps,D.bpr,D.bp1,D.bpf,D.bpp,D.bpu],A.bm("aa<+(m,m,a7,a7,m)>"))
D.aRe=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.Zq=new C.GG(0,"youtube")
D.Zr=new C.GG(1,"tiktok")
D.FF=new C.GG(2,"instagram")
D.Zs=new C.GG(3,"facebook")
D.bhO=new C.GG(4,"other")
D.bt9=new A.an(3,null,null,null)
D.btP=new A.j7(4,10,8,0.52,null)
D.bKV=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bwT=new A.aS(D.bKV,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bA_=new A.K(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bJd=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bLn=new A.x("Add device",null,null,null,null,null,null,null,null,null,null)
D.bPc=new A.x("Stop",null,null,null,null,null,null,null,null,null,null)
D.bPx=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bYO=new C.aCM(null)})();(function staticFields(){$.dcI=20
$.ap1=null
$.bba=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUc","Du",()=>A.QD(0))
w($,"dUd","Le",()=>A.QD(null))})()};
(a=>{a["i4eLZhFN4YVElH0NIf50yVFa//4="]=a.current})($__dart_deferred_initializers__);