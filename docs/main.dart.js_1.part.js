((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eMU(d,e){A.a0(d,!1).cq(A.ez(new C.dLv(e),!0,null,x.H))},
a1E(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1E=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Rz()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.an(new A.be(n,B.aT,B.aJ),t)
w=3
return A.b(A.d1(B.J,new C.dLu(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1E)
case 3:r=g
s.L$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eqE(r)
if(q==null){d.F(x.q).f.P(D.d2u)
w=1
break}w=4
return A.b(A.bI(B.hI,null,x.H),$async$a1E)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.e1x=n
p=C.eqy(n)
n=$.Ix()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dPK(q)
d.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1E,v)},
e1A(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.pb(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
M2(d){return C.eqH(d)},
eqH(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$M2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ar(),$async$M2)
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
k=A.d9(k,new C.byc(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.byd(),j),j.j("I.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.e1C(q)
w=12
return A.b(C.M1(a3,p),$async$M2)
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
case 19:m=C.e1A(A.S(n,x.N,x.z))
l=C.e1C(A.a([m],x.e))
w=21
return A.b(C.M1(a3,l),$async$M2)
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
case 18:case 14:q=C.eqF()
w=22
return A.b(C.M1(a3,q),$async$M2)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$M2,v)},
e1C(d){var w=A.X(d).j("G<1,q>"),v=new A.G(d,new C.by4(),w).eu(0),u=new A.G(d,new C.by5(),w).eu(0),t=new A.G(d,new C.by6(),w).eu(0),s=new A.G(d,new C.by7(),w).eu(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dPL(null,q,u,t,v,s));++q}return r},
aDF(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aDF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.M2(d),$async$aDF)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d5(t,new C.by8(),s).eu(0)
p=r.d5(t,new C.by9(),s).eu(0)
o=r.d5(t,new C.bya(),s).eu(0)
n=r.d5(t,new C.byb(),s).eu(0)
m=C.dPL(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.M1(d,t),$async$aDF)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aDF,v)},
M1(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$M1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ar(),$async$M1)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.by3(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ak("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.aj(s,null)),$async$M1)
case 3:return A.h(null,v)}})
return A.i($async$M1,v)},
eqF(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dPL(w,w,t,s,u,r)
return q},
dPL(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.m_(),h=d==null,g=D.ac1[B.m.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.ac1[B.m.a0(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bw(256)
n=new A.G(p,new C.by2(),A.X(p).j("G<1,q>")).h_(0)
u="VND-"+B.b.an(n,0,4)+"-"+B.b.an(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bw(10)
t=B.f.h_(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b6(B.m.fU(i.bw(256),16),2,"0")
s=B.f.b7(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a0(e,20)
k=D.cai[w]
j=D.c04[w]
return new C.pb("vd_"+1000*Date.now()+"_"+e+"_"+i.bw(99999),"Device "+B.b.b6(B.m.t(e+1),2,"0"),u,k,C.eqG(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a9().a4())},
eqG(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b6(B.m.fU(d.bw(256),16),2,"0")
return B.f.h_(v)},
dLv:function dLv(d){this.a=d},
dLu:function dLu(d,e){this.a=d
this.b=e},
dLq:function dLq(d){this.a=d},
dLr:function dLr(d){this.a=d},
dLs:function dLs(d){this.a=d},
dLt:function dLt(d,e){this.a=d
this.b=e},
PC:function PC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
pb:function pb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
byc:function byc(){},
byd:function byd(){},
by4:function by4(){},
by5:function by5(){},
by6:function by6(){},
by7:function by7(){},
by8:function by8(){},
by9:function by9(){},
bya:function bya(){},
byb:function byb(){},
by3:function by3(){},
by2:function by2(){},
M0:function M0(d,e){this.c=d
this.a=e},
akw:function akw(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d59:function d59(){},
d58:function d58(d,e){this.a=d
this.b=e},
d56:function d56(d){this.a=d},
d57:function d57(d,e){this.a=d
this.b=e},
d5a:function d5a(d){this.a=d},
d5f:function d5f(d){this.a=d},
d5e:function d5e(d){this.a=d},
d5g:function d5g(d,e){this.a=d
this.b=e},
d5d:function d5d(d,e,f){this.a=d
this.b=e
this.c=f},
d5c:function d5c(d,e){this.a=d
this.b=e},
d5b:function d5b(d,e){this.a=d
this.b=e},
d5h:function d5h(d){this.a=d},
Zw:function Zw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRi:function aRi(d,e){this.c=d
this.a=e},
M_:function M_(d,e){this.c=d
this.a=e},
aSB:function aSB(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
d55:function d55(d){this.a=d},
d52:function d52(d,e){this.a=d
this.b=e},
d5_:function d5_(d){this.a=d},
d50:function d50(d){this.a=d},
d4Z:function d4Z(d,e){this.a=d
this.b=e},
d51:function d51(d){this.a=d},
d4Y:function d4Y(d){this.a=d},
aZZ:function aZZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
b__:function b__(d,e,f){this.c=d
this.d=e
this.a=f},
aSI:function aSI(d,e){this.c=d
this.a=e},
aZY:function aZY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dm9:function dm9(d){this.a=d},
dma:function dma(d){this.a=d},
aU3:function aU3(d){this.a=d},
aNj:function aNj(d,e){this.c=d
this.a=e},
eqE(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eqD(v)
if(u!=null)return new C.rt(w,C.dPJ(u,!1),D.ajR,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eqC(v)
if(t!=null)return new C.rt(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajS,"TikTok",q)
s=C.eqB(w,v)
if(s!=null)return s
r=C.eqA(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.rt(w,w,D.cJk,"Video",q)
return q},
eqB(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.af("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rt(d,"https://www.instagram.com/reel/"+w+u,D.RA,t,null)}v=A.af("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rt(d,"https://www.instagram.com/p/"+w+u,D.RA,t,null)}return null},
eqA(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.rt(d,"https://www.facebook.com/plugins/video.php?href="+A.fJ(2,d,B.by,!1)+"&show_text=false&width=734",D.ajT,"Facebook",null)},
eqD(d){var w,v,u,t=[A.af(y.c,!0,!1,!1,!1),A.af("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.af("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dn(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eqC(d){var w,v=A.af("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dn(d)
if(v!=null)return v.b[1]
w=A.af("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
M3:function M3(d,e){this.a=d
this.b=e},
rt:function rt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aa3:function aa3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aSC:function aSC(d,e){var _=this
_.d=$
_.cj$=d
_.aB$=e
_.c=_.a=null},
aU8:function aU8(d,e){this.c=d
this.a=e},
d9B:function d9B(d){this.a=d},
d9C:function d9C(d){this.a=d},
He:function He(d,e){this.c=d
this.a=e},
aqa:function aqa(){},
e1B(d,e,f,g,h,i){return new C.aa4(i,f,h,e,g,d)},
eLi(d){var w=window
w.toString
A.h0(w,"message",new C.dGD(d),!1,x._)},
aa4:function aa4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akx:function akx(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d5i:function d5i(d){this.a=d},
d5r:function d5r(d){this.a=d},
d5o:function d5o(d){this.a=d},
d5n:function d5n(d){this.a=d},
d5p:function d5p(d){this.a=d},
d5m:function d5m(d){this.a=d},
d5q:function d5q(d){this.a=d},
d5l:function d5l(d){this.a=d},
d5k:function d5k(d){this.a=d},
d5j:function d5j(d){this.a=d},
dGD:function dGD(d){this.a=d},
eqw(){var w,v,u
try{v=A.rP()
w=v.gvk(v)
if(J.a2(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dPJ(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b7(w,"&")},
by0(d){var w=A.af(y.c,!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
e1w(d){var w=A.aQ(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aQ(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eqx(d,e,f){var w,v,u=C.by0(d)
if(u!=null){if(f){w=C.eqw()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e1w(C.dPJ(u,e))}return C.e1w(d)},
eqy(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
eqz(d){var w
if($.Rz().a==null)return!1
w=$.Ix().a
return d>=w&&d<w+4},
e1z(){var w=$.aDE
if(w!=null)w.ab(0)
$.aDE=null
$.Ix().sv(0,0)},
e1y(){var w,v,u,t=$.Rz()
if(t.a==null)return
w=$.aDE
if(w!=null)w.ab(0)
v=$.e1x
if(v<=4){t=t.a
t.toString
C.dPK(t)
return}w=$.Ix()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dPK(t)},
dPK(d){var w=$.aDE
if(w!=null)w.ab(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aDE=A.ds(A.d8(0,0,0,0,0,w),C.eLB())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.PC.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.W(this.d,B.a6,w,w,14)
return A.p(w,A.E(A.a([r,B.fI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.cl,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Y,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fX,w,w,w)}}
C.pb.prototype={
ad(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.M0.prototype={
U(){return new C.akw(A.a([],x.e))},
gek(){return this.c}}
C.akw.prototype={
a_(){var w=this
w.a3()
$.Ix().aC(0,w.gaCw())
C.eLi(w.gbwI())
w.a15()},
bw9(){if(this.c!=null)this.n(new C.d59())},
bwJ(){C.e1y()},
p(){$.Ix().Z(0,this.gaCw())
C.e1z()
$.Rz().sv(0,null)
this.a5()},
a15(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a15=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.M2(t.a.c),$async$a15)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d58(t,s))
$.by1=J.a2(s)
case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
Xy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d56(t))
w=3
return A.b(C.aDF(t.a.c),$async$Xy)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d57(t,s))
$.by1=J.a2(t.d)
t.c.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xy,v)},
byQ(d){var w=this.c
w.toString
A.a0(w,!1).cq(A.ez(new C.d5a(d),!1,null,x.H))},
bzw(){var w=this.c
w.toString
return C.a1E(w,J.a2(this.d))},
B(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.iq:B.bD,s=A.bB(!0,A.u(A.a([new A.B(D.a0d,new A.jt(new C.d5f(w),v),v),A.D(w.e?B.nb:new A.lT($.Rz(),new C.d5g(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.aa,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.ax4(B.a6,B.JN,B.kS,D.dtd,w.e?v:new C.d5h(w)),v)}}
C.Zw.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dA,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.aa3(n,!0,!C.eqz(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.p(u,A.u(A.a([A.W(B.kO,B.oN,u,u,22),B.aH,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b1,B.k,0,B.p),B.j,B.Bl,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.Q,!0,u,A.aG(!1,t,!0,A.u(A.a([A.D(A.p(u,A.bL(p,A.eZ(A.u(A.a([new C.aRi(o,u),A.D(n,1),A.p(u,A.E(A.a([A.W(B.uA,B.a6.k(0.85),u,u,9),B.aqq,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b1,B.k,0,u,u),B.j,B.aB,u,u,u,u,u,u,D.aMU,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a51,B.o),u,u,u,u,B.f5,u,u,u),1),B.aH,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.C(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aRi.prototype={
B(d){var w=null
return A.p(w,A.E(A.a([A.D(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.pc,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aB,w,w,w,w,w,w,B.a02,w,w,w)}}
C.M_.prototype={
U(){return new C.aSB()}}
C.aSB.prototype={
B(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.iq:B.bD,t=A.aM(w,w,w,w,B.a40,w,w,w,new C.d53(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bB(!0,A.u(A.a([new A.B(D.a0d,A.E(A.a([t,A.D(new A.LQ(A.E(A.a([A.D(new A.B(B.iZ,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.Q,!0,w,A.aG(!1,w,!0,new A.B(B.bp,A.W(B.hS,B.a6,w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d54(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.D(new A.lT($.Rz(),new C.d55(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.aa,!0,!0),w,!1,!1,w,w)}}
C.aZZ.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eE,28),new A.a5(0,B.G,B.A.k(0.45),B.d9,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e1B(new A.cX(v+"_full_"+u,x.W),!1,u,!1,w.gaT6(),v+"_full")
w=v}else w=new C.aSI(t.r,s)}else w=new C.aNj(m,s)
else w=D.dB6
return A.p(s,A.bL(n,A.eZ(A.u(A.a([new C.b__(m,l,s),A.D(w,1),new C.aZY(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a51,B.o),s,r*2.05,s,s,B.bP,s,s,r)}}
C.b__.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glR()
r=r.gFw()
w=new A.dN(q,r)
v=w.gLm()===0?12:w.gLm()
r=B.b.b6(B.m.t(r),2,"0")
q=(q<12?B.hH:B.k1)===B.hH?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.E(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.om,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bH,D.aZ0,B.da,D.aY8,B.da,D.aZ5],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aH,A.E(A.a([A.W(B.y8,B.a6.k(0.9),s,s,12),B.da,A.D(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.p(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aB,s,s,s,s,s,s,D.aO4,s,s,s)}}
C.aSI.prototype={
B(d){var w=null
return A.p(w,A.aB(A.u(A.a([A.W(B.Dm,B.c.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eN(D.b1T,D.dfi,this.c,A.dq(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Y,0,B.p),w,w,w),B.j,B.Bl,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZY.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCi(B.DK,"YouTube",s===0,r,new C.dm9(u))
s=u.aCi(B.jB,"Device",s===1,r,new C.dma(u))
w=r?"Power off":"Power on"
v=r?D.a2Z:D.aW7
return A.p(t,A.E(A.a([q,B.ai,s,B.ba,A.aM(t,t,t,t,A.W(v,r?B.bO:B.fr,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aB,t,t,t,t,t,t,D.aNx,t,t,t)},
aCi(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b9
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.D(A.az(!1,B.Q,!0,u,A.aG(!1,A.m(10),!0,new A.B(B.mt,A.u(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Y,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aU3.prototype={
B(d){return D.aB3}}
C.aNj.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ig,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.un("Serial",u.c),q=w.un("Model",u.d),p=w.un("Device ID",u.e),o=w.un("IMEI",u.r),n=w.un("MAC",u.f),m=w.un("OS",u.w+" "+u.x),l=w.un("Location",u.y+", "+u.z),k=w.un("Coordinates",B.l.aa(u.Q,4)+", "+B.l.aa(u.as,4)),j=w.un("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aH,s,B.ae,r,q,p,o,n,m,l,k,j,w.un("Provisioned",u.length>=10?B.b.an(u,0,10):u)],x.p),v,B.bp,v,v,B.al,!1)},
un(d,e){var w=null
return new A.B(B.dk,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cd,A.d(e,w,w,w,w,w,w,D.d5T,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.M3.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rt.prototype={
gaT6(){var w=this.c
return w===D.ajR||w===D.ajS||w===D.RA||w===D.ajT}}
C.aa3.prototype={
U(){return new C.aSC(null,null)}}
C.aSC.prototype={
a_(){this.a3()
var w=A.bd(null,B.tO,null,1,null,this)
w.fL(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2F()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.o(t,t,t,t,t,new A.a7(B.bJ,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cT,p,t)
w=B.c.k(0.92)
q=A.aB(new A.cE(new A.aZ(p,new A.bi(0.72,1,q),q.j("aZ<bl.T>")),!1,A.W(B.kO,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oN
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aU8(s,t),r,q,A.au(t,A.p(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.M(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.at(B.a5,t,B.bb,B.t,s,t)}}
C.aU8.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kn(u,B.I,new C.d9B(this),B.ch,B.c_,!0,w,w,new C.d9C(this),w)
return new C.He(v,w)}}
C.He.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.tD,B.X_],x.O),B.kO)
break
case 1:w=new A.aJ(A.a([B.Bl,D.aH4],x.O),B.mz)
break
case 2:w=new A.aJ(A.a([D.aIU,D.aGn],x.O),B.Ds)
break
case 3:w=new A.aJ(A.a([B.U,B.dw],x.O),B.Dy)
break
case 4:w=new A.aJ(A.a([B.aB,B.aO],x.O),B.qX)
break
default:w=u}v=w.a
return A.p(u,A.aB(A.W(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aE,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aqa.prototype={
p(){var w=this,v=w.aB$
if(v!=null)v.Z(0,w.gcJ())
w.aB$=null
w.a5()},
bb(){this.bo()
this.bl()
this.cK()}}
C.aa4.prototype={
U(){return new C.akx()}}
C.akx.prototype={
abt(d,e){var w,v=C.by0(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dPJ(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eqx(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bQP(){var w,v=this
if(v.w)return
v.n(new C.d5i(v))
w=v.e
if(w!=null)v.abt(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.Dx()
$.pM().tI(w,new C.d5r(u),!0)}catch(v){u.r=!0
u.f=!1}},
b5(d){var w,v=this
v.bi(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d5k(v))
w=v.e
w.toString
v.abt(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a3k,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.eZ(A.aB(new A.B(new A.M(12,12,12,12),A.u(w,B.n,n,B.i,B.Y,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Ti(n,B.rt,w)],v)
if(o.f)w.push(A.eZ(A.aB(new A.aa(28,28,D.aCt,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b9,B.r,1)
q=A.W(B.DV,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dR(0,A.az(!1,B.Q,!0,n,A.aG(!1,n,!0,A.aB(A.p(n,A.E(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Y,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.M6,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbQO(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.by0(o.a.d)
if(v!=null)w.push(A.au(8,A.iQ(D.b_G,D.dnX,new C.d5j(o),A.hf(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fX,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.at(B.a5,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["q(pb)","~()","M0(O)","pb(a_<@,@>)","Z(pb)","a_<q,@>(pb)","aD<~>()","M_(O)","lT<L>(O,rt?,r?)","Zw(O,L)","vq(O,rt?,r?)","He(O,aq,dS?)"])
C.dLv.prototype={
$1(d){return new C.M0(this.a,null)},
$S:z+2}
C.dLu.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.U],j):A.a([B.c,B.aA],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eE,32)],x.V),g=A.J(m?B.ce:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.p(n,D.aXS,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.D(A.u(A.a([w,B.aH,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.p(n,A.E(A.a([e,B.eF,w,A.aM(n,n,n,n,A.W(B.cI,m?B.at:B.d0,n,n,n),n,n,n,new C.dLq(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.Mf,n,n,n)
e=A.ed(B.cR,A.a([new C.PC("YouTube",B.Oi,m,n),new C.PC("TikTok",B.mz,m,n),new C.PC("Instagram",B.Ds,m,n),new C.PC("Facebook",B.Dy,m,n)],v),B.cy,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ca:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.W(B.fC,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aL
u=A.u(A.a([e,B.aS,A.aO(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.W),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.VG),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.ak,n,B.i,B.k,0,B.p)
e=A.iQ(D.aXW,D.dsd,new C.dLr(d),A.hf(n,n,n,n,n,n,n,n,n,n,n,m?B.bB:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.B(new A.M(12,0,12,12+l.f.d),A.cw(A.bL(f,A.u(A.a([j,new A.B(B.a_I,u,n),new A.B(D.aPC,A.E(A.a([e,B.ba,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dLs(d),n,n),B.ai,A.dI(D.b1z,D.dt4,new C.dLt(d,w),A.bp(B.a6,n,n,n,B.c,n,B.M6,n,new A.bo(A.m(14),B.W),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ak,n,B.i,B.Y,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a7(B.au,B.aE,B.E,i,n,n),B.o),B.bq),n)},
$S:81}
C.dLq.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dLr.prototype={
$0(){C.e1z()
$.Rz().sv(0,null)
A.a0(this.a,!1).M(null)},
$S:0}
C.dLs.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dLt.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).M(w)
return null},
$S:0}
C.byc.prototype={
$1(d){return C.e1A(A.S(d,x.N,x.z))},
$S:z+3}
C.byd.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.by4.prototype={
$1(d){return d.c},
$S:z+0}
C.by5.prototype={
$1(d){return d.r},
$S:z+0}
C.by6.prototype={
$1(d){return d.f},
$S:z+0}
C.by7.prototype={
$1(d){return d.at},
$S:z+0}
C.by8.prototype={
$1(d){return d.c},
$S:z+0}
C.by9.prototype={
$1(d){return d.r},
$S:z+0}
C.bya.prototype={
$1(d){return d.f},
$S:z+0}
C.byb.prototype={
$1(d){return d.at},
$S:z+0}
C.by3.prototype={
$1(d){return d.ad()},
$S:z+5}
C.by2.prototype={
$1(d){return B.b.b6(B.m.fU(d,16),2,"0").toUpperCase()},
$S:71}
C.d59.prototype={
$0(){},
$S:0}
C.d58.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d56.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d57.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d5a.prototype={
$1(d){return new C.M_(this.a,null)},
$S:z+7}
C.d5f.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,B.r_,w,w,w,new C.d5e(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a2(u.d)+")",s=x.p
return A.E(A.a([v,A.D(A.h_(A.E(A.a([new A.p9(D.yF,e,g,36,B.y8,w),B.aN,A.D(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fE(B.f.gH(D.yF).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.Q,!0,w,A.aG(!1,w,!0,new A.B(B.bP,A.W(B.hS,A.ao(B.f.gH(D.yF),B.f.ga7(D.yF),e),w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbzv(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yF,w,g,B.eD,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:342}
C.d5e.prototype={
$0(){return A.a0(this.a,!1).e5()},
$S:0}
C.d5g.prototype={
$3(d,e,f){return new A.lT($.Ix(),new C.d5d(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d5d.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.F0(d,k,x.Q)
w=w==null?k:w.glS()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.W(B.kO,B.a6,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Ix().a
m=B.l.O(n+4,1,o)
t=A.a([A.p(k,A.E(A.a([q,B.ai,A.D(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dy,B.f4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bL(s,new A.hP(1.7777777777777777,C.e1B(new A.cX("fleet_master_"+r,x.W),!0,r,!0,j.gaT6(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.v6(0,B.t,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.lf(new A.B(B.Cz,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.oz(D.aN3,A.aHJ(new A.ox(new C.d5c(i,j),J.a2(i.d),!1,!0,!0,A.uR(),k),D.cZZ),k)],w))},
$S:1869}
C.d5c.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Zw(v,e,J.a2(w.d),new C.d5b(w,v),this.b,null)},
$S:z+9}
C.d5b.prototype={
$0(){return this.a.byQ(this.b)},
$S:0}
C.d5h.prototype={
$0(){this.a.Xy()
return null},
$S:0}
C.d53.prototype={
$0(){return A.a0(this.a,!1).e5()},
$S:0}
C.d54.prototype={
$0(){C.a1E(this.a,$.by1)
return null},
$S:0}
C.d55.prototype={
$3(d,e,f){return A.eH(new C.d52(this.a,e))},
$S:z+10}
C.d52.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aS,new C.aZZ(u,s.a.c,s.e,s.d,new C.d5_(s),new C.d50(s),new C.d51(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oX,v,v,B.al),v,v,v)},
$S:650}
C.d5_.prototype={
$0(){var w=this.a.c
w.toString
C.a1E(w,$.by1)
return null},
$S:0}
C.d50.prototype={
$1(d){var w=this.a
return w.n(new C.d4Z(w,d))},
$S:31}
C.d4Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d51.prototype={
$0(){var w=this.a
return w.n(new C.d4Y(w))},
$S:0}
C.d4Y.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dm9.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dma.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d9B.prototype={
$3(d,e,f){return new C.He(this.a.c,null)},
$S:z+11}
C.d9C.prototype={
$3(d,e,f){if(f==null)return e
return new A.at(B.a5,null,B.bb,B.t,A.a([new C.He(this.a.c,null),D.aBo],x.p),null)},
$C:"$3",
$R:3,
$S:531}
C.d5i.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5r.prototype={
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
w.abt(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h0(v,"load",new C.d5o(w),!1,u)
v=w.e
v.toString
A.h0(v,"error",new C.d5p(w),!1,u)
A.bI(B.k6,new C.d5q(w),x.H)
w=w.e
w.toString
return w},
$S:654}
C.d5o.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d5n(w))},
$S:30}
C.d5n.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d5p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d5m(w))},
$S:30}
C.d5m.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d5q.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d5l(w))},
$S:12}
C.d5l.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d5k.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d5j.prototype={
$0(){var w,v=C.by0(this.a.a.d)
if(v==null)return
w=window
w.toString
B.n2.LH(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dGD.prototype={
$1(d){var w,v,u,t,s=new A.uk([],[]).uX(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1870};(function aliases(){var w=C.aqa.prototype
w.b2F=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.akw.prototype,"gaCw","bw9",1)
w(u,"gbwI","bwJ",1)
w(u,"gbzv","bzw",6)
w(C.akx.prototype,"gbQO","bQP",1)
v(C,"eLB","e1y",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.A3,[C.dLv,C.dLu,C.byc,C.byd,C.by4,C.by5,C.by6,C.by7,C.by8,C.by9,C.bya,C.byb,C.by3,C.by2,C.d5a,C.d5f,C.d5g,C.d5d,C.d55,C.d50,C.d9B,C.d9C,C.d5r,C.d5o,C.d5p,C.dGD])
v(A.a36,[C.dLq,C.dLr,C.dLs,C.dLt,C.d59,C.d58,C.d56,C.d57,C.d5e,C.d5b,C.d5h,C.d53,C.d54,C.d5_,C.d4Z,C.d51,C.d4Y,C.dm9,C.dma,C.d5i,C.d5n,C.d5m,C.d5q,C.d5l,C.d5k,C.d5j])
v(A.ap,[C.PC,C.Zw,C.aRi,C.aZZ,C.b__,C.aSI,C.aZY,C.aU3,C.aNj,C.aU8,C.He])
v(A.aq,[C.pb,C.rt])
v(A.ad,[C.M0,C.M_,C.aa3,C.aa4])
v(A.ae,[C.akw,C.aSB,C.aqa,C.akx])
v(A.a37,[C.d5c,C.d52])
u(C.M3,A.aOe)
u(C.aSC,C.aqa)
w(C.aqa,A.dx)})()
A.e50(b.typeUniverse,JSON.parse('{"M0":{"ad":[],"r":[]},"Zw":{"ap":[],"r":[]},"M_":{"ad":[],"r":[]},"PC":{"ap":[],"r":[]},"akw":{"ae":["M0"]},"aRi":{"ap":[],"r":[]},"aSB":{"ae":["M_"]},"aZZ":{"ap":[],"r":[]},"b__":{"ap":[],"r":[]},"aSI":{"ap":[],"r":[]},"aZY":{"ap":[],"r":[]},"aU3":{"ap":[],"r":[]},"aNj":{"ap":[],"r":[]},"aa3":{"ad":[],"r":[]},"He":{"ap":[],"r":[]},"aSC":{"ae":["aa3"]},"aU8":{"ap":[],"r":[]},"aa4":{"ad":[],"r":[]},"akx":{"ae":["aa4"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<pb>"),S:w("a9<fE>"),s:w("a9<q>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ai<pb>"),a:w("ai<@>"),P:w("a_<q,@>"),f:w("a_<@,@>"),w:w("p5"),_:w("EY"),k:w("pb"),N:w("q"),Y:w("bi<a4>"),W:w("cX<q>"),J:w("lT<L>"),j:w("lT<rt?>"),E:w("py<dj>"),q:w("a_t"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2Z=new A.P(983224,"MaterialIcons",!1)
D.b_N=new A.ac(D.a2Z,48,B.b9,null,null,null)
D.dec=new A.z("Powered off",null,B.arr,null,null,null,null,null,null,null,null,null)
D.bXV=w([D.b_N,B.N,D.dec],x.p)
D.aKi=new A.eL(B.al,B.i,B.Y,B.n,null,B.p,null,0,D.bXV,null)
D.aB3=new A.cT(B.I,null,null,D.aKi,null)
D.cZE=new A.aa(18,18,B.WI,null)
D.aBo=new A.cT(B.I,null,null,D.cZE,null)
D.aCt=new A.fr(2,null,null,null,null,B.a7,null,null,null,null)
D.aGn=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aH4=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIU=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMU=new A.M(0,3,0,3)
D.aN3=new A.M(10,0,10,88)
D.aNx=new A.M(12,6,12,10)
D.aO4=new A.M(14,8,14,6)
D.aPC=new A.M(20,8,20,20)
D.a0d=new A.M(8,6,15,8)
D.aW7=new A.P(983222,"MaterialIcons",!1)
D.aXS=new A.ac(B.kO,26,B.a6,null,null,null)
D.aXW=new A.ac(B.a1Z,18,null,null,null,null)
D.aY8=new A.ac(B.pc,14,B.a7,null,null,null)
D.aWq=new A.P(983420,"MaterialIcons",!1)
D.aZ0=new A.ac(D.aWq,14,B.a7,null,null,null)
D.aUr=new A.P(62895,"MaterialIcons",!1)
D.aZ5=new A.ac(D.aUr,14,B.a7,null,null,null)
D.b_G=new A.ac(B.uu,16,B.a7,null,null,null)
D.b1z=new A.ac(B.j4,20,null,null,null,null)
D.b1T=new A.ac(B.hS,16,null,null,null,null)
D.c0Y=w([B.aO,B.U],x.O)
D.a51=new A.a7(B.au,B.aE,B.E,D.c0Y,null,null)
D.cSD=new A.aJ("NGMY OS","14.2.1")
D.cRd=new A.aJ("VirtualDroid","13.8.4")
D.cRc=new A.aJ("NGMY OS","15.0.0")
D.cS6=new A.aJ("VirtualDroid","14.1.2")
D.cR8=new A.aJ("NGMY Tab OS","12.9.7")
D.cR6=new A.aJ("NGMY OS","13.5.3")
D.cQW=new A.aJ("VirtualDroid","15.2.0")
D.cRD=new A.aJ("NGMY OS","14.8.1")
D.cSb=new A.aJ("NGMY Tab OS","13.2.4")
D.cSQ=new A.aJ("VirtualDroid","12.6.9")
D.cQQ=new A.aJ("NGMY OS","16.0.1")
D.cQG=new A.aJ("VirtualDroid","14.9.0")
D.cSt=new A.aJ("NGMY Tab OS","14.0.3")
D.cRo=new A.aJ("NGMY OS","13.1.8")
D.cQO=new A.aJ("VirtualDroid","13.4.5")
D.cR5=new A.aJ("NGMY OS","15.3.2")
D.cSc=new A.aJ("NGMY Tab OS","12.4.1")
D.cSw=new A.aJ("VirtualDroid","16.1.0")
D.cRC=new A.aJ("NGMY OS","14.4.6")
D.cSE=new A.aJ("VirtualDroid","15.0.8")
D.c04=w([D.cSD,D.cRd,D.cRc,D.cS6,D.cR8,D.cR6,D.cQW,D.cRD,D.cSb,D.cSQ,D.cQQ,D.cQG,D.cSt,D.cRo,D.cQO,D.cR5,D.cSc,D.cSw,D.cRC,D.cSE],A.b3("a9<+(q,q)>"))
D.yF=w([B.a6,B.fO],x.O)
D.cVa=new A.f5(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cUJ=new A.f5(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cUE=new A.f5(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cUN=new A.f5(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cUA=new A.f5(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cUP=new A.f5(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cVc=new A.f5(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cUB=new A.f5(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cUI=new A.f5(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cUR=new A.f5(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cUz=new A.f5(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cV4=new A.f5(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cV1=new A.f5(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cUH=new A.f5(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cUZ=new A.f5(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cUY=new A.f5(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cUy=new A.f5(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cUM=new A.f5(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cUW=new A.f5(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cV0=new A.f5(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.ac1=w([D.cVa,D.cUJ,D.cUE,D.cUN,D.cUA,D.cUP,D.cVc,D.cUB,D.cUI,D.cUR,D.cUz,D.cV4,D.cV1,D.cUH,D.cUZ,D.cUY,D.cUy,D.cUM,D.cUW,D.cV0],A.b3("a9<+(q,q,a4,a4,q)>"))
D.cai=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajR=new C.M3(0,"youtube")
D.ajS=new C.M3(1,"tiktok")
D.RA=new C.M3(2,"instagram")
D.ajT=new C.M3(3,"facebook")
D.cJk=new C.M3(4,"other")
D.cZZ=new A.he(4,10,8,0.52,null)
D.dfv=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d2u=new A.aW(D.dfv,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.t,null)
D.d5T=new A.N(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dfi=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dnX=new A.z("Open in YouTube",null,B.jN,null,null,null,null,null,null,null,null,null)
D.dsd=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dt4=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dtd=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dB6=new C.aU3(null)})();(function staticFields(){$.e1x=20
$.aDE=null
$.by1=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eQG","Ix",()=>A.aeu(0))
w($,"eQH","Rz",()=>A.aeu(null))})()};
(a=>{a["qiyrJC8q8lPqmV4Japb9RUN7af4="]=a.current})($__dart_deferred_initializers__);