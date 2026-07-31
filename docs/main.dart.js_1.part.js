((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eMn(d,e){A.a0(d,!1).cn(A.ez(new C.dL3(e),!0,null,x.H))},
a1C(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Rw()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.an(new A.be(n,B.aT,B.aJ),t)
w=3
return A.b(A.d0(B.J,new C.dL2(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1C)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eqc(r)
if(q==null){d.F(x.q).f.P(D.d2p)
w=1
break}w=4
return A.b(A.bL(B.i6,null,x.H),$async$a1C)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.e13=n
p=C.eq6(n)
n=$.It()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dPi(q)
d.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
e16(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aU(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aU(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.pa(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
M_(d){return C.eqf(d)},
eqf(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$M_=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ar(),$async$M_)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aA(0,a0,null)
w=x.a.b(r)&&J.cB(r)?10:11
break
case 10:k=J.eu(r,x.f)
k=A.da(k,new C.by0(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.by1(),j),j.j("I.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.e18(q)
w=12
return A.b(C.LZ(a3,p),$async$M_)
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
n=B.L.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.e16(A.S(n,x.N,x.z))
l=C.e18(A.a([m],x.e))
w=21
return A.b(C.LZ(a3,l),$async$M_)
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
case 18:case 14:q=C.eqd()
w=22
return A.b(C.LZ(a3,q),$async$M_)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$M_,v)},
e18(d){var w=A.X(d).j("G<1,q>"),v=new A.G(d,new C.bxT(),w).ev(0),u=new A.G(d,new C.bxU(),w).ev(0),t=new A.G(d,new C.bxV(),w).ev(0),s=new A.G(d,new C.bxW(),w).ev(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dPj(null,q,u,t,v,s));++q}return r},
aDz(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aDz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.M_(d),$async$aDz)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d4(t,new C.bxX(),s).ev(0)
p=r.d4(t,new C.bxY(),s).ev(0)
o=r.d4(t,new C.bxZ(),s).ev(0)
n=r.d4(t,new C.by_(),s).ev(0)
m=C.dPj(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LZ(d,t),$async$aDz)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aDz,v)},
LZ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ar(),$async$LZ)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.bxS(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ai("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ag(s,null)),$async$LZ)
case 3:return A.h(null,v)}})
return A.i($async$LZ,v)},
eqd(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dPj(w,w,t,s,u,r)
return q},
dPj(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lZ(),h=d==null,g=D.ac1[B.m.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.ac1[B.m.a0(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bw(256)
n=new A.G(p,new C.bxR(),A.X(p).j("G<1,q>")).h_(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bw(10)
t=B.f.h_(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b8(B.m.fV(i.bw(256),16),2,"0")
s=B.f.b9(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a0(e,20)
k=D.cac[w]
j=D.c00[w]
return new C.pa("vd_"+1000*Date.now()+"_"+e+"_"+i.bw(99999),"Device "+B.b.b8(B.m.t(e+1),2,"0"),u,k,C.eqe(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a8().a4())},
eqe(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.fV(d.bw(256),16),2,"0")
return B.f.h_(v)},
dL3:function dL3(d){this.a=d},
dL2:function dL2(d,e){this.a=d
this.b=e},
dKZ:function dKZ(d){this.a=d},
dL_:function dL_(d){this.a=d},
dL0:function dL0(d){this.a=d},
dL1:function dL1(d,e){this.a=d
this.b=e},
PA:function PA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
pa:function pa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
by0:function by0(){},
by1:function by1(){},
bxT:function bxT(){},
bxU:function bxU(){},
bxV:function bxV(){},
bxW:function bxW(){},
bxX:function bxX(){},
bxY:function bxY(){},
bxZ:function bxZ(){},
by_:function by_(){},
bxS:function bxS(){},
bxR:function bxR(){},
LY:function LY(d,e){this.c=d
this.a=e},
akv:function akv(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d50:function d50(){},
d5_:function d5_(d,e){this.a=d
this.b=e},
d4Y:function d4Y(d){this.a=d},
d4Z:function d4Z(d,e){this.a=d
this.b=e},
d51:function d51(d){this.a=d},
d56:function d56(d){this.a=d},
d55:function d55(d){this.a=d},
d57:function d57(d,e){this.a=d
this.b=e},
d54:function d54(d,e,f){this.a=d
this.b=e
this.c=f},
d53:function d53(d,e){this.a=d
this.b=e},
d52:function d52(d,e){this.a=d
this.b=e},
d58:function d58(d){this.a=d},
Zs:function Zs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRc:function aRc(d,e){this.c=d
this.a=e},
LX:function LX(d,e){this.c=d
this.a=e},
aSv:function aSv(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d4V:function d4V(d){this.a=d},
d4W:function d4W(d){this.a=d},
d4X:function d4X(d){this.a=d},
d4U:function d4U(d,e){this.a=d
this.b=e},
d4R:function d4R(d){this.a=d},
d4S:function d4S(d){this.a=d},
d4Q:function d4Q(d,e){this.a=d
this.b=e},
d4T:function d4T(d){this.a=d},
d4P:function d4P(d){this.a=d},
aZS:function aZS(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZT:function aZT(d,e,f){this.c=d
this.d=e
this.a=f},
aSC:function aSC(d,e){this.c=d
this.a=e},
aZR:function aZR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dm_:function dm_(d){this.a=d},
dm0:function dm0(d){this.a=d},
aTY:function aTY(d){this.a=d},
aNd:function aNd(d,e){this.c=d
this.a=e},
eqc(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eqb(v)
if(u!=null)return new C.rr(w,C.dPh(u,!1),D.ajR,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eqa(v)
if(t!=null)return new C.rr(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajS,"TikTok",q)
s=C.eq9(w,v)
if(s!=null)return s
r=C.eq8(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.rr(w,w,D.cJe,"Video",q)
return q},
eq9(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.af("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rr(d,"https://www.instagram.com/reel/"+w+u,D.Rz,t,null)}v=A.af("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rr(d,"https://www.instagram.com/p/"+w+u,D.Rz,t,null)}return null},
eq8(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.rr(d,"https://www.facebook.com/plugins/video.php?href="+A.fI(2,d,B.by,!1)+"&show_text=false&width=734",D.ajT,"Facebook",null)},
eqb(d){var w,v,u,t=[A.af(y.c,!0,!1,!1,!1),A.af("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.af("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dn(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eqa(d){var w,v=A.af("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dn(d)
if(v!=null)return v.b[1]
w=A.af("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
M0:function M0(d,e){this.a=d
this.b=e},
rr:function rr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aa2:function aa2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aSw:function aSw(d,e){var _=this
_.d=$
_.ci$=d
_.aC$=e
_.c=_.a=null},
aU2:function aU2(d,e){this.c=d
this.a=e},
d9t:function d9t(d){this.a=d},
d9u:function d9u(d){this.a=d},
Hb:function Hb(d,e){this.c=d
this.a=e},
aq8:function aq8(){},
e17(d,e,f,g,h,i){return new C.aa3(i,f,h,e,g,d)},
eKM(d){var w=window
w.toString
A.hl(w,"message",new C.dGb(d),!1,x._)},
aa3:function aa3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akw:function akw(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d59:function d59(d){this.a=d},
d5i:function d5i(d){this.a=d},
d5f:function d5f(d){this.a=d},
d5e:function d5e(d){this.a=d},
d5g:function d5g(d){this.a=d},
d5d:function d5d(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5c:function d5c(d){this.a=d},
d5b:function d5b(d){this.a=d},
d5a:function d5a(d){this.a=d},
dGb:function dGb(d){this.a=d},
eq4(){var w,v,u
try{v=A.rN()
w=v.gvl(v)
if(J.a2(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dPh(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b9(w,"&")},
bxP(d){var w=A.af(y.c,!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
e12(d){var w=A.aR(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aR(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eq5(d,e,f){var w,v,u=C.bxP(d)
if(u!=null){if(f){w=C.eq4()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e12(C.dPh(u,e))}return C.e12(d)},
eq6(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
eq7(d){var w
if($.Rw().a==null)return!1
w=$.It().a
return d>=w&&d<w+4},
e15(){var w=$.aDy
if(w!=null)w.aa(0)
$.aDy=null
$.It().sv(0,0)},
e14(){var w,v,u,t=$.Rw()
if(t.a==null)return
w=$.aDy
if(w!=null)w.aa(0)
v=$.e13
if(v<=4){t=t.a
t.toString
C.dPi(t)
return}w=$.It()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dPi(t)},
dPi(d){var w=$.aDy
if(w!=null)w.aa(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aDy=A.dv(A.d9(0,0,0,0,0,w),C.eL4())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.PA.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.V(this.d,B.a6,w,w,14)
return A.p(w,A.E(A.a([r,B.fH,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.cl,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Y,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fW,w,w,w)}}
C.pa.prototype={
ac(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LY.prototype={
U(){return new C.akv(A.a([],x.e))},
gel(){return this.c}}
C.akv.prototype={
a_(){var w=this
w.a3()
$.It().aB(0,w.gaCx())
C.eKM(w.gbwK())
w.a1b()},
bwb(){if(this.c!=null)this.n(new C.d50())},
bwL(){C.e14()},
p(){$.It().Z(0,this.gaCx())
C.e15()
$.Rw().sv(0,null)
this.a5()},
a1b(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.M_(t.a.c),$async$a1b)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d5_(t,s))
$.bxQ=J.a2(s)
case 1:return A.h(u,v)}})
return A.i($async$a1b,v)},
XD(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d4Y(t))
w=3
return A.b(C.aDz(t.a.c),$async$XD)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d4Z(t,s))
$.bxQ=J.a2(t.d)
t.c.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XD,v)},
byS(d){var w=this.c
w.toString
A.a0(w,!1).cn(A.ez(new C.d51(d),!1,null,x.H))},
bzy(){var w=this.c
w.toString
return C.a1C(w,J.a2(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.C,t=u?B.ip:B.bD,s=A.bA(!0,A.u(A.a([new A.B(D.a0b,new A.jg(new C.d56(w),v),v),A.C(w.e?B.nb:new A.lT($.Rw(),new C.d57(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.aa,!0,!0)
return A.c4(v,t,s,v,!1,!1,A.awX(B.a6,B.JN,B.kS,D.dt8,w.e?v:new C.d58(w)),v)}}
C.Zs.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.aa2(n,!0,!C.eq7(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.p(u,A.u(A.a([A.V(B.kO,B.oM,u,u,22),B.aH,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b1,B.k,0,B.p),B.j,B.Bm,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.u(A.a([A.C(A.p(u,A.bI(p,A.f2(A.u(A.a([new C.aRc(o,u),A.C(n,1),A.p(u,A.E(A.a([A.V(B.uC,B.a6.k(0.85),u,u,9),B.aqq,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b1,B.k,0,u,u),B.j,B.aB,u,u,u,u,u,u,D.aMU,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.az),B.j,u,u,new A.o(u,u,r,s,q,D.a50,B.o),u,u,u,u,B.f5,u,u,u),1),B.aH,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aRc.prototype={
B(d){var w=null
return A.p(w,A.E(A.a([A.C(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.pb,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aB,w,w,w,w,w,w,B.a00,w,w,w)}}
C.LX.prototype={
U(){return new C.aSv()}}
C.aSv.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.C,u=v?B.ip:B.bD,t=A.aM(w,w,w,w,B.a4_,w,w,w,new C.d4V(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c4(w,u,A.bA(!0,A.u(A.a([new A.B(D.a0b,A.E(A.a([t,A.C(new A.LM(A.E(A.a([A.C(new A.B(B.iZ,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.B(B.bp,A.V(B.hQ,B.a6,w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d4W(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.C(new A.lT($.Rw(),new C.d4X(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.aa,!0,!0),w,!1,!1,w,w)}}
C.aZS.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eE,28),new A.a5(0,B.G,B.A.k(0.45),B.d9,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e17(new A.cX(v+"_full_"+u,x.W),!1,u,!1,w.gaT6(),v+"_full")
w=v}else w=new C.aSC(t.r,s)}else w=new C.aNd(m,s)
else w=D.dB1
return A.p(s,A.bI(n,A.f2(A.u(A.a([new C.aZT(m,l,s),A.C(w,1),new C.aZR(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.az),B.j,s,s,new A.o(s,s,o,q,p,D.a50,B.o),s,r*2.05,s,s,B.bO,s,s,r)}}
C.aZT.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glR()
r=r.gFy()
w=new A.dP(q,r)
v=w.gLp()===0?12:w.gLp()
r=B.b.b8(B.m.t(r),2,"0")
q=(q<12?B.hG:B.k1)===B.hG?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.E(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.ol,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bH,D.aZ_,B.da,D.aY7,B.da,D.aZ4],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aH,A.E(A.a([A.V(B.y8,B.a6.k(0.9),s,s,12),B.da,A.C(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.p(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aB,s,s,s,s,s,s,D.aO4,s,s,s)}}
C.aSC.prototype={
B(d){var w=null
return A.p(w,A.aB(A.u(A.a([A.V(B.Dn,B.c.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eN(D.b1S,D.dfd,this.c,A.dp(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aD(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Y,0,B.p),w,w,w),B.j,B.Bm,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZR.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCj(B.DL,"YouTube",s===0,r,new C.dm_(u))
s=u.aCj(B.jB,"Device",s===1,r,new C.dm0(u))
w=r?"Power off":"Power on"
v=r?D.a2Y:D.aW6
return A.p(t,A.E(A.a([q,B.ai,s,B.ba,A.aM(t,t,t,t,A.V(v,r?B.bN:B.fr,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aB,t,t,t,t,t,t,D.aNx,t,t,t)},
aCj(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b9
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.C(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.B(B.mt,A.u(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Y,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aTY.prototype={
B(d){return D.aB4}}
C.aNd.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ie,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.uk("Serial",u.c),q=w.uk("Model",u.d),p=w.uk("Device ID",u.e),o=w.uk("IMEI",u.r),n=w.uk("MAC",u.f),m=w.uk("OS",u.w+" "+u.x),l=w.uk("Location",u.y+", "+u.z),k=w.uk("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.uk("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aH,s,B.ae,r,q,p,o,n,m,l,k,j,w.uk("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bp,v,v,B.al,!1)},
uk(d,e){var w=null
return new A.B(B.dk,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.d(e,w,w,w,w,w,w,D.d5O,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.M0.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rr.prototype={
gaT6(){var w=this.c
return w===D.ajR||w===D.ajS||w===D.Rz||w===D.ajT}}
C.aa2.prototype={
U(){return new C.aSw(null,null)}}
C.aSw.prototype={
a_(){this.a3()
var w=A.bd(null,B.tO,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2E()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.o(t,t,t,t,t,new A.a7(B.bJ,B.bQ,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cT,p,t)
w=B.c.k(0.92)
q=A.aB(new A.cE(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kO,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oM
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aU2(s,t),r,q,A.au(t,A.p(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.M(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.at(B.a5,t,B.bb,B.t,s,t)}}
C.aU2.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kl(u,B.I,new C.d9t(this),B.c4,B.c0,!0,w,w,new C.d9u(this),w)
return new C.Hb(v,w)}}
C.Hb.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.tD,B.WX],x.O),B.kO)
break
case 1:w=new A.aJ(A.a([B.Bm,D.aH5],x.O),B.mz)
break
case 2:w=new A.aJ(A.a([D.aIV,D.aGo],x.O),B.Dt)
break
case 3:w=new A.aJ(A.a([B.U,B.dw],x.O),B.Dz)
break
case 4:w=new A.aJ(A.a([B.aB,B.aO],x.O),B.qW)
break
default:w=u}v=w.a
return A.p(u,A.aB(A.V(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aE,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aq8.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcK())
w.aC$=null
w.a5()},
bd(){this.bq()
this.bo()
this.cL()}}
C.aa3.prototype={
U(){return new C.akw()}}
C.akw.prototype={
abv(d,e){var w,v=C.bxP(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dPh(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eq5(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bQM(){var w,v=this
if(v.w)return
v.n(new C.d59(v))
w=v.e
if(w!=null)v.abv(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.Dr()
$.pJ().tE(w,new C.d5i(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d5b(v))
w=v.e
w.toString
v.abv(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a3j,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f2(A.aB(new A.B(new A.M(12,12,12,12),A.u(w,B.n,n,B.i,B.Y,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Tf(n,B.rt,w)],v)
if(o.f)w.push(A.f2(A.aB(new A.aa(28,28,D.aCu,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b9,B.r,1)
q=A.V(B.DW,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dN(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aB(A.p(n,A.E(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Y,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.M4,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbQL(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bxP(o.a.d)
if(v!=null)w.push(A.au(8,A.iQ(D.b_F,D.dnS,new C.d5a(o),A.he(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fW,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.at(B.a5,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["q(pa)","~()","LY(O)","pa(a_<@,@>)","Z(pa)","a_<q,@>(pa)","aE<~>()","LX(O)","lT<L>(O,rr?,r?)","Zs(O,L)","vn(O,rr?,r?)","Hb(O,aq,dS?)"])
C.dL3.prototype={
$1(d){return new C.LY(this.a,null)},
$S:z+2}
C.dL2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.U],j):A.a([B.c,B.aA],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eE,32)],x.V),g=A.J(m?B.cf:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.p(n,D.aXR,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.C(A.u(A.a([w,B.aH,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.p(n,A.E(A.a([e,B.eF,w,A.aM(n,n,n,n,A.V(B.cI,m?B.at:B.d0,n,n,n),n,n,n,new C.dKZ(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.Md,n,n,n)
e=A.ec(B.cR,A.a([new C.PA("YouTube",B.Oh,m,n),new C.PA("TikTok",B.mz,m,n),new C.PA("Instagram",B.Dt,m,n),new C.PA("Facebook",B.Dz,m,n)],v),B.cy,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ca:B.i4,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.V(B.fB,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cf:B.aL
u=A.u(A.a([e,B.aS,A.aO(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.W),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.VF),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.ak,n,B.i,B.k,0,B.p)
e=A.iQ(D.aXV,D.ds8,new C.dL_(d),A.he(n,n,n,n,n,n,n,n,n,n,n,m?B.bB:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.B(new A.M(12,0,12,12+l.f.d),A.cw(A.bI(f,A.u(A.a([j,new A.B(B.a_G,u,n),new A.B(D.aPC,A.E(A.a([e,B.ba,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dL0(d),n,n),B.ai,A.dI(D.b1y,D.dt_,new C.dL1(d,w),A.bp(B.a6,n,n,n,B.c,n,B.M4,n,new A.bo(A.m(14),B.W),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ak,n,B.i,B.Y,0,B.p),B.az),new A.o(n,n,g,k,h,new A.a7(B.au,B.aE,B.E,i,n,n),B.o),B.bq),n)},
$S:81}
C.dKZ.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dL_.prototype={
$0(){C.e15()
$.Rw().sv(0,null)
A.a0(this.a,!1).M(null)},
$S:0}
C.dL0.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dL1.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).M(w)
return null},
$S:0}
C.by0.prototype={
$1(d){return C.e16(A.S(d,x.N,x.z))},
$S:z+3}
C.by1.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bxT.prototype={
$1(d){return d.c},
$S:z+0}
C.bxU.prototype={
$1(d){return d.r},
$S:z+0}
C.bxV.prototype={
$1(d){return d.f},
$S:z+0}
C.bxW.prototype={
$1(d){return d.at},
$S:z+0}
C.bxX.prototype={
$1(d){return d.c},
$S:z+0}
C.bxY.prototype={
$1(d){return d.r},
$S:z+0}
C.bxZ.prototype={
$1(d){return d.f},
$S:z+0}
C.by_.prototype={
$1(d){return d.at},
$S:z+0}
C.bxS.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bxR.prototype={
$1(d){return B.b.b8(B.m.fV(d,16),2,"0").toUpperCase()},
$S:72}
C.d50.prototype={
$0(){},
$S:0}
C.d5_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d4Y.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d4Z.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d51.prototype={
$1(d){return new C.LX(this.a,null)},
$S:z+7}
C.d56.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,B.qZ,w,w,w,new C.d55(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a2(u.d)+")",s=x.p
return A.E(A.a([v,A.C(A.fZ(A.E(A.a([new A.p8(D.yF,e,g,36,B.y8,w),B.aN,A.C(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fE(B.f.gI(D.yF).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.B(B.bO,A.V(B.hQ,A.ao(B.f.gI(D.yF),B.f.ga6(D.yF),e),w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbzx(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yF,w,g,B.eD,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:389}
C.d55.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d57.prototype={
$3(d,e,f){return new A.lT($.It(),new C.d54(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d54.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EW(d,k,x.Q)
w=w==null?k:w.glS()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.V(B.kO,B.a6,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.It().a
m=B.l.O(n+4,1,o)
t=A.a([A.p(k,A.E(A.a([q,B.ai,A.C(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dy,B.f4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bI(s,new A.hP(1.7777777777777777,C.e17(new A.cX("fleet_master_"+r,x.W),!0,r,!0,j.gaT6(),"fleet_master"),k),B.az),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.v3(0,B.t,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.lf(new A.B(B.CC,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.ow(D.aN3,A.aHD(new A.ou(new C.d53(i,j),J.a2(i.d),!1,!0,!0,A.uO(),k),D.cZU),k)],w))},
$S:1865}
C.d53.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Zs(v,e,J.a2(w.d),new C.d52(w,v),this.b,null)},
$S:z+9}
C.d52.prototype={
$0(){return this.a.byS(this.b)},
$S:0}
C.d58.prototype={
$0(){this.a.XD()
return null},
$S:0}
C.d4V.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d4W.prototype={
$0(){C.a1C(this.a,$.bxQ)
return null},
$S:0}
C.d4X.prototype={
$3(d,e,f){return A.eH(new C.d4U(this.a,e))},
$S:z+10}
C.d4U.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aS,new C.aZS(u,s.a.c,s.e,s.d,new C.d4R(s),new C.d4S(s),new C.d4T(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oW,v,v,B.al),v,v,v)},
$S:449}
C.d4R.prototype={
$0(){var w=this.a.c
w.toString
C.a1C(w,$.bxQ)
return null},
$S:0}
C.d4S.prototype={
$1(d){var w=this.a
return w.n(new C.d4Q(w,d))},
$S:31}
C.d4Q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d4T.prototype={
$0(){var w=this.a
return w.n(new C.d4P(w))},
$S:0}
C.d4P.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dm_.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dm0.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d9t.prototype={
$3(d,e,f){return new C.Hb(this.a.c,null)},
$S:z+11}
C.d9u.prototype={
$3(d,e,f){if(f==null)return e
return new A.at(B.a5,null,B.bb,B.t,A.a([new C.Hb(this.a.c,null),D.aBp],x.p),null)},
$C:"$3",
$R:3,
$S:466}
C.d59.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5i.prototype={
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
w.abv(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hl(v,"load",new C.d5f(w),!1,u)
v=w.e
v.toString
A.hl(v,"error",new C.d5g(w),!1,u)
A.bL(B.kI,new C.d5h(w),x.H)
w=w.e
w.toString
return w},
$S:682}
C.d5f.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d5e(w))},
$S:30}
C.d5e.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d5g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d5d(w))},
$S:30}
C.d5d.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d5h.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d5c(w))},
$S:12}
C.d5c.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d5b.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d5a.prototype={
$0(){var w,v=C.bxP(this.a.a.d)
if(v==null)return
w=window
w.toString
B.n2.LK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dGb.prototype={
$1(d){var w,v,u,t,s=new A.ug([],[]).uT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1866};(function aliases(){var w=C.aq8.prototype
w.b2E=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.akv.prototype,"gaCx","bwb",1)
w(u,"gbwK","bwL",1)
w(u,"gbzx","bzy",6)
w(C.akw.prototype,"gbQL","bQM",1)
v(C,"eL4","e14",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.A0,[C.dL3,C.dL2,C.by0,C.by1,C.bxT,C.bxU,C.bxV,C.bxW,C.bxX,C.bxY,C.bxZ,C.by_,C.bxS,C.bxR,C.d51,C.d56,C.d57,C.d54,C.d4X,C.d4S,C.d9t,C.d9u,C.d5i,C.d5f,C.d5g,C.dGb])
v(A.a34,[C.dKZ,C.dL_,C.dL0,C.dL1,C.d50,C.d5_,C.d4Y,C.d4Z,C.d55,C.d52,C.d58,C.d4V,C.d4W,C.d4R,C.d4Q,C.d4T,C.d4P,C.dm_,C.dm0,C.d59,C.d5e,C.d5d,C.d5h,C.d5c,C.d5b,C.d5a])
v(A.ap,[C.PA,C.Zs,C.aRc,C.aZS,C.aZT,C.aSC,C.aZR,C.aTY,C.aNd,C.aU2,C.Hb])
v(A.aq,[C.pa,C.rr])
v(A.ad,[C.LY,C.LX,C.aa2,C.aa3])
v(A.ae,[C.akv,C.aSv,C.aq8,C.akw])
v(A.a35,[C.d53,C.d4U])
u(C.M0,A.aO8)
u(C.aSw,C.aq8)
w(C.aq8,A.dz)})()
A.e4y(b.typeUniverse,JSON.parse('{"LY":{"ad":[],"r":[]},"Zs":{"ap":[],"r":[]},"LX":{"ad":[],"r":[]},"PA":{"ap":[],"r":[]},"akv":{"ae":["LY"]},"aRc":{"ap":[],"r":[]},"aSv":{"ae":["LX"]},"aZS":{"ap":[],"r":[]},"aZT":{"ap":[],"r":[]},"aSC":{"ap":[],"r":[]},"aZR":{"ap":[],"r":[]},"aTY":{"ap":[],"r":[]},"aNd":{"ap":[],"r":[]},"aa2":{"ad":[],"r":[]},"Hb":{"ap":[],"r":[]},"aSw":{"ae":["aa2"]},"aU2":{"ap":[],"r":[]},"aa3":{"ad":[],"r":[]},"akw":{"ae":["aa3"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<pa>"),S:w("a9<fE>"),s:w("a9<q>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ai<pa>"),a:w("ai<@>"),P:w("a_<q,@>"),f:w("a_<@,@>"),w:w("p4"),_:w("ET"),k:w("pa"),N:w("q"),Y:w("bi<a4>"),W:w("cX<q>"),J:w("lT<L>"),j:w("lT<rr?>"),E:w("un<d1>"),q:w("a_p"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2Y=new A.P(983224,"MaterialIcons",!1)
D.b_M=new A.ab(D.a2Y,48,B.b9,null,null,null)
D.de7=new A.z("Powered off",null,B.arq,null,null,null,null,null,null,null,null,null)
D.bXR=w([D.b_M,B.N,D.de7],x.p)
D.aKj=new A.eL(B.al,B.i,B.Y,B.n,null,B.p,null,0,D.bXR,null)
D.aB4=new A.cU(B.I,null,null,D.aKj,null)
D.cZz=new A.aa(18,18,B.WF,null)
D.aBp=new A.cU(B.I,null,null,D.cZz,null)
D.aCu=new A.fr(2,null,null,null,null,B.a7,null,null,null,null)
D.aGo=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aH5=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIV=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMU=new A.M(0,3,0,3)
D.aN3=new A.M(10,0,10,88)
D.aNx=new A.M(12,6,12,10)
D.aO4=new A.M(14,8,14,6)
D.aPC=new A.M(20,8,20,20)
D.a0b=new A.M(8,6,15,8)
D.aW6=new A.P(983222,"MaterialIcons",!1)
D.aXR=new A.ab(B.kO,26,B.a6,null,null,null)
D.aXV=new A.ab(B.a1Y,18,null,null,null,null)
D.aY7=new A.ab(B.pb,14,B.a7,null,null,null)
D.aWp=new A.P(983420,"MaterialIcons",!1)
D.aZ_=new A.ab(D.aWp,14,B.a7,null,null,null)
D.aUq=new A.P(62895,"MaterialIcons",!1)
D.aZ4=new A.ab(D.aUq,14,B.a7,null,null,null)
D.b_F=new A.ab(B.uv,16,B.a7,null,null,null)
D.b1y=new A.ab(B.iw,20,null,null,null,null)
D.b1S=new A.ab(B.hQ,16,null,null,null,null)
D.c0T=w([B.aO,B.U],x.O)
D.a50=new A.a7(B.au,B.aE,B.E,D.c0T,null,null)
D.cSx=new A.aJ("NGMY OS","14.2.1")
D.cR7=new A.aJ("VirtualDroid","13.8.4")
D.cR6=new A.aJ("NGMY OS","15.0.0")
D.cS0=new A.aJ("VirtualDroid","14.1.2")
D.cR2=new A.aJ("NGMY Tab OS","12.9.7")
D.cR0=new A.aJ("NGMY OS","13.5.3")
D.cQQ=new A.aJ("VirtualDroid","15.2.0")
D.cRx=new A.aJ("NGMY OS","14.8.1")
D.cS5=new A.aJ("NGMY Tab OS","13.2.4")
D.cSK=new A.aJ("VirtualDroid","12.6.9")
D.cQK=new A.aJ("NGMY OS","16.0.1")
D.cQA=new A.aJ("VirtualDroid","14.9.0")
D.cSn=new A.aJ("NGMY Tab OS","14.0.3")
D.cRi=new A.aJ("NGMY OS","13.1.8")
D.cQI=new A.aJ("VirtualDroid","13.4.5")
D.cR_=new A.aJ("NGMY OS","15.3.2")
D.cS6=new A.aJ("NGMY Tab OS","12.4.1")
D.cSq=new A.aJ("VirtualDroid","16.1.0")
D.cRw=new A.aJ("NGMY OS","14.4.6")
D.cSy=new A.aJ("VirtualDroid","15.0.8")
D.c00=w([D.cSx,D.cR7,D.cR6,D.cS0,D.cR2,D.cR0,D.cQQ,D.cRx,D.cS5,D.cSK,D.cQK,D.cQA,D.cSn,D.cRi,D.cQI,D.cR_,D.cS6,D.cSq,D.cRw,D.cSy],A.b3("a9<+(q,q)>"))
D.yF=w([B.a6,B.fN],x.O)
D.cV4=new A.f5(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cUD=new A.f5(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cUy=new A.f5(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cUH=new A.f5(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cUu=new A.f5(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cUJ=new A.f5(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cV6=new A.f5(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cUv=new A.f5(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cUC=new A.f5(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cUL=new A.f5(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cUt=new A.f5(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cUZ=new A.f5(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cUW=new A.f5(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cUB=new A.f5(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cUT=new A.f5(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cUS=new A.f5(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cUs=new A.f5(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cUG=new A.f5(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cUQ=new A.f5(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cUV=new A.f5(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.ac1=w([D.cV4,D.cUD,D.cUy,D.cUH,D.cUu,D.cUJ,D.cV6,D.cUv,D.cUC,D.cUL,D.cUt,D.cUZ,D.cUW,D.cUB,D.cUT,D.cUS,D.cUs,D.cUG,D.cUQ,D.cUV],A.b3("a9<+(q,q,a4,a4,q)>"))
D.cac=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajR=new C.M0(0,"youtube")
D.ajS=new C.M0(1,"tiktok")
D.Rz=new C.M0(2,"instagram")
D.ajT=new C.M0(3,"facebook")
D.cJe=new C.M0(4,"other")
D.cZU=new A.hd(4,10,8,0.52,null)
D.dfq=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d2p=new A.aV(D.dfq,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d5O=new A.N(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dfd=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dnS=new A.z("Open in YouTube",null,B.jN,null,null,null,null,null,null,null,null,null)
D.ds8=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dt_=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dt8=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dB1=new C.aTY(null)})();(function staticFields(){$.e13=20
$.aDy=null
$.bxQ=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eQ8","It",()=>A.aes(0))
w($,"eQ9","Rw",()=>A.aes(null))})()};
(a=>{a["k6/sPUbmfEWiZf1A/5leY6wJCCQ="]=a.current})($__dart_deferred_initializers__);