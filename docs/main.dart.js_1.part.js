((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ePP(d,e){A.a0(d,!1).cr(A.eC(new C.dNN(e),!0,null,x.H))},
a23(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a23=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.RN()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.an(new A.be(n,B.aT,B.aI),t)
w=3
return A.b(A.d1(B.J,new C.dNM(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a23)
case 3:r=g
s.M$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.etv(r)
if(q==null){d.F(x.q).f.R(D.d40)
w=1
break}w=4
return A.b(A.bF(B.hs,null,x.H),$async$a23)
case 4:if(d.e==null){w=1
break}n=B.m.P(e,1,999)
$.e47=n
p=C.etp(n)
n=$.IH()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dS7(q)
d.F(x.q).f.R(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a23,v)},
e4a(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aV(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aV(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.pf(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Mf(d){return C.ety(d)},
ety(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Mf=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ar(),$async$Mf)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.aa(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cD(r)?10:11
break
case 10:k=J.eu(r,x.f)
k=A.d8(k,new C.bzz(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.bzA(),j),j.j("I.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.e4c(q)
w=12
return A.b(C.Me(a3,p),$async$Mf)
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
case 19:m=C.e4a(A.S(n,x.N,x.z))
l=C.e4c(A.a([m],x.e))
w=21
return A.b(C.Me(a3,l),$async$Mf)
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
case 18:case 14:q=C.etw()
w=22
return A.b(C.Me(a3,q),$async$Mf)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Mf,v)},
e4c(d){var w=A.X(d).j("G<1,q>"),v=new A.G(d,new C.bzr(),w).ew(0),u=new A.G(d,new C.bzs(),w).ew(0),t=new A.G(d,new C.bzt(),w).ew(0),s=new A.G(d,new C.bzu(),w).ew(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dS8(null,q,u,t,v,s));++q}return r},
aEq(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aEq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Mf(d),$async$aEq)
case 3:t=f
s=x.N
r=J.c6(t)
q=r.d1(t,new C.bzv(),s).ew(0)
p=r.d1(t,new C.bzw(),s).ew(0)
o=r.d1(t,new C.bzx(),s).ew(0)
n=r.d1(t,new C.bzy(),s).ew(0)
m=C.dS8(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.Me(d,t),$async$aEq)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aEq,v)},
Me(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Me=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ar(),$async$Me)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.bzq(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ak(s,null)),$async$Me)
case 3:return A.h(null,v)}})
return A.i($async$Me,v)},
etw(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cU(20,x.k)
for(w=0;w<20;++w)q[w]=C.dS8(w,w,t,s,u,r)
return q},
dS8(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.m3(),h=d==null,g=D.acf[B.m.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.acf[B.m.a0(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bv(256)
n=new A.G(p,new C.bzp(),A.X(p).j("G<1,q>")).h2(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bv(10)
t=B.f.h2(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b3(B.m.fX(i.bv(256),16),2,"0")
s=B.f.b7(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a0(e,20)
k=D.cbk[w]
j=D.c0Z[w]
return new C.pf("vd_"+1000*Date.now()+"_"+e+"_"+i.bv(99999),"Device "+B.b.b3(B.m.t(e+1),2,"0"),u,k,C.etx(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a9().a5())},
etx(d,e){var w,v=J.cU(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b3(B.m.fX(d.bv(256),16),2,"0")
return B.f.h2(v)},
dNN:function dNN(d){this.a=d},
dNM:function dNM(d,e){this.a=d
this.b=e},
dNI:function dNI(d){this.a=d},
dNJ:function dNJ(d){this.a=d},
dNK:function dNK(d){this.a=d},
dNL:function dNL(d,e){this.a=d
this.b=e},
PR:function PR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
pf:function pf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bzz:function bzz(){},
bzA:function bzA(){},
bzr:function bzr(){},
bzs:function bzs(){},
bzt:function bzt(){},
bzu:function bzu(){},
bzv:function bzv(){},
bzw:function bzw(){},
bzx:function bzx(){},
bzy:function bzy(){},
bzq:function bzq(){},
bzp:function bzp(){},
Md:function Md(d,e){this.c=d
this.a=e},
akX:function akX(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6S:function d6S(){},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
d6T:function d6T(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
d6X:function d6X(d){this.a=d},
d6Z:function d6Z(d,e){this.a=d
this.b=e},
d6W:function d6W(d,e,f){this.a=d
this.b=e
this.c=f},
d6V:function d6V(d,e){this.a=d
this.b=e},
d6U:function d6U(d,e){this.a=d
this.b=e},
d7_:function d7_(d){this.a=d},
ZT:function ZT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aS3:function aS3(d,e){this.c=d
this.a=e},
Mc:function Mc(d,e){this.c=d
this.a=e},
aTn:function aTn(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d6M:function d6M(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6O:function d6O(d){this.a=d},
d6L:function d6L(d,e){this.a=d
this.b=e},
d6I:function d6I(d){this.a=d},
d6J:function d6J(d){this.a=d},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6K:function d6K(d){this.a=d},
d6G:function d6G(d){this.a=d},
b_P:function b_P(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
b_Q:function b_Q(d,e,f){this.c=d
this.d=e
this.a=f},
aTu:function aTu(d,e){this.c=d
this.a=e},
b_O:function b_O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dou:function dou(d){this.a=d},
dov:function dov(d){this.a=d},
aUQ:function aUQ(d){this.a=d},
aO4:function aO4(d,e){this.c=d
this.a=e},
etv(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.T(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.etu(v)
if(u!=null)return new C.rz(w,C.dS6(u,!1),D.ak3,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.ett(v)
if(t!=null)return new C.rz(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ak4,"TikTok",q)
s=C.ets(w,v)
if(s!=null)return s
r=C.etr(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.rz(w,w,D.cKP,"Video",q)
return q},
ets(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ad("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).da(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rz(d,"https://www.instagram.com/reel/"+w+u,D.RN,t,null)}v=A.ad("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).da(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rz(d,"https://www.instagram.com/p/"+w+u,D.RN,t,null)}return null},
etr(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.rz(d,"https://www.facebook.com/plugins/video.php?href="+A.fW(2,d,B.bw,!1)+"&show_text=false&width=734",D.ak5,"Facebook",null)},
etu(d){var w,v,u,t=[A.ad(y.c,!0,!1,!1,!1),A.ad("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ad("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].da(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
ett(d){var w,v=A.ad("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).da(d)
if(v!=null)return v.b[1]
w=A.ad("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).da(d)
return w==null?null:w.b[1]},
Mg:function Mg(d,e){this.a=d
this.b=e},
rz:function rz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aat:function aat(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aTo:function aTo(d,e){var _=this
_.d=$
_.cg$=d
_.az$=e
_.c=_.a=null},
aUV:function aUV(d,e){this.c=d
this.a=e},
dbp:function dbp(d){this.a=d},
dbq:function dbq(d){this.a=d},
Ho:function Ho(d,e){this.c=d
this.a=e},
aqG:function aqG(){},
e4b(d,e,f,g,h,i){return new C.aau(i,f,h,e,g,d)},
eOc(d){var w=window
w.toString
A.eo(w,"message",new C.dIT(d),!1,x._)},
aau:function aau(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akY:function akY(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d70:function d70(d){this.a=d},
d79:function d79(d){this.a=d},
d76:function d76(d){this.a=d},
d75:function d75(d){this.a=d},
d77:function d77(d){this.a=d},
d74:function d74(d){this.a=d},
d78:function d78(d){this.a=d},
d73:function d73(d){this.a=d},
d72:function d72(d){this.a=d},
d71:function d71(d){this.a=d},
dIT:function dIT(d){this.a=d},
etn(){var w,v,u
try{v=A.rX()
w=v.gvq(v)
if(J.a1(w)!==0&&!J.w(w,"null")&&!J.cy(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dS6(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b7(w,"&")},
bzn(d){var w=A.ad(y.c,!0,!1,!1,!1).da(d)
return w==null?null:w.b[1]},
e46(d){var w=A.aM(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aM(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eto(d,e,f){var w,v,u=C.bzn(d)
if(u!=null){if(f){w=C.etn()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e46(C.dS6(u,e))}return C.e46(d)},
etp(d){if(d<=4)return 0
return B.m.am(d-1,4)*4},
etq(d){var w
if($.RN().a==null)return!1
w=$.IH().a
return d>=w&&d<w+4},
e49(){var w=$.aEp
if(w!=null)w.aa(0)
$.aEp=null
$.IH().sv(0,0)},
e48(){var w,v,u,t=$.RN()
if(t.a==null)return
w=$.aEp
if(w!=null)w.aa(0)
v=$.e47
if(v<=4){t=t.a
t.toString
C.dS7(t)
return}w=$.IH()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dS7(t)},
dS7(d){var w=$.aEp
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
default:w=null}$.aEp=A.dn(A.da(0,0,0,0,0,w),C.eOv())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.PR.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a9.k(0.25),B.r,1),r=A.W(this.d,B.a9,w,w,14)
return A.p(w,A.E(A.a([r,B.fs,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a6:B.cm,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Y,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fQ,w,w,w)}}
C.pf.prototype={
ad(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Md.prototype={
V(){return new C.akX(A.a([],x.e))},
ge0(){return this.c}}
C.akX.prototype={
a_(){var w=this
w.a3()
$.IH().aC(0,w.gaCX())
C.eOc(w.gbxz())
w.a1m()},
bx0(){if(this.c!=null)this.n(new C.d6S())},
bxA(){C.e48()},
p(){$.IH().Z(0,this.gaCX())
C.e49()
$.RN().sv(0,null)
this.a4()},
a1m(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Mf(t.a.c),$async$a1m)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d6R(t,s))
$.bzo=J.a1(s)
case 1:return A.h(u,v)}})
return A.i($async$a1m,v)},
XQ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d6P(t))
w=3
return A.b(C.aEq(t.a.c),$async$XQ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d6Q(t,s))
$.bzo=J.a1(t.d)
t.c.F(x.q).f.R(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XQ,v)},
bzI(d){var w=this.c
w.toString
A.a0(w,!1).cr(A.eC(new C.d6T(d),!1,null,x.H))},
bAp(){var w=this.c
w.toString
return C.a23(w,J.a1(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.C,t=u?B.ir:B.bG,s=A.bB(!0,A.u(A.a([new A.B(D.a0t,new A.jw(new C.d6Y(w),v),v),A.C(w.e?B.nf:new A.lX($.RN(),new C.d6Z(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.aa,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.axF(B.a9,B.JW,B.kY,D.dve,w.e?v:new C.d7_(w)),v)}}
C.ZT.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a9.k(0.18),B.dG,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.aat(n,!0,!C.etq(w),"Fold "+(B.m.am(w,4)+1)+"/"+B.m.am(v.e+4-1,4),u)
n=w}else n=A.p(u,A.u(A.a([A.W(B.kV,B.oT,u,u,22),B.aH,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.Bu,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.Q,!0,u,A.aH(!1,t,!0,A.u(A.a([A.C(A.p(u,A.bK(p,A.eL(A.u(A.a([new C.aS3(o,u),A.C(n,1),A.p(u,A.E(A.a([A.W(B.uK,B.a9.k(0.85),u,u,9),B.aqD,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.aC,u,u,u,u,u,u,D.aNg,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aA),B.j,u,u,new A.o(u,u,r,s,q,D.a5f,B.o),u,u,u,u,B.f6,u,u,u),1),B.aH,A.d(o.b,u,1,B.aq,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aq,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aq,u,u,u,A.l(u,u,B.a9.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a2)}}
C.aS3.prototype={
B(d){var w=null
return A.p(w,A.E(A.a([A.C(A.d(B.f.ga8(this.c.c.split("-")),w,w,B.aq,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.pj,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aC,w,w,w,w,w,w,B.a0i,w,w,w)}}
C.Mc.prototype={
V(){return new C.aTn()}}
C.aTn.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.C,u=v?B.ir:B.bG,t=A.aN(w,w,w,w,B.a4e,w,w,w,new C.d6M(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bB(!0,A.u(A.a([new A.B(D.a0t,A.E(A.a([t,A.C(new A.M2(A.E(A.a([A.C(new A.B(B.j2,A.d(s.b+" \xb7 "+s.c,w,1,B.aq,w,w,w,A.l(w,w,v?B.c:B.T,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.B(B.bq,A.W(B.hU,B.a9,w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6N(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a2)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.C(new A.lX($.RN(),new C.d6O(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.aa,!0,!0),w,!1,!1,w,w)}}
C.b_P.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a9.k(0.35),B.eH,28),new A.a5(0,B.G,B.A.k(0.45),B.d6,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e4b(new A.cM(v+"_full_"+u,x.W),!1,u,!1,w.gaTB(),v+"_full")
w=v}else w=new C.aTu(t.r,s)}else w=new C.aO4(m,s)
else w=D.dDb
return A.p(s,A.bK(n,A.eL(A.u(A.a([new C.b_Q(m,l,s),A.C(w,1),new C.b_O(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aA),B.j,s,s,new A.o(s,s,o,q,p,D.a5f,B.o),s,r*2.05,s,s,B.bS,s,s,r)}}
C.b_Q.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glU()
r=r.gFF()
w=new A.dN(q,r)
v=w.gLB()===0?12:w.gLB()
r=B.b.b3(B.m.t(r),2,"0")
q=(q<12?B.hK:B.k4)===B.hK?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.E(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.or,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bK,D.aZw,B.db,D.aYD,B.db,D.aZB],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aH,A.E(A.a([A.W(B.yi,B.a9.k(0.9),s,s,12),B.db,A.C(A.d(u.c,s,s,B.aq,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.p(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aC,s,s,s,s,s,s,D.aOr,s,s,s)}}
C.aTu.prototype={
B(d){var w=null
return A.p(w,A.aB(A.u(A.a([A.W(B.Du,B.c.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eO(D.b2q,D.dha,this.c,A.dr(w,w,w,w,w,w,w,w,w,B.a9,w,w,w,w,w,new A.aE(B.a9.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Y,0,B.p),w,w,w),B.j,B.Bu,w,w,w,w,w,w,w,w,w,1/0)}}
C.b_O.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCJ(B.DT,"YouTube",s===0,r,new C.dou(u))
s=u.aCJ(B.jF,"Device",s===1,r,new C.dov(u))
w=r?"Power off":"Power on"
v=r?D.a3d:D.aWx
return A.p(t,A.E(A.a([q,B.ai,s,B.ba,A.aN(t,t,t,t,A.W(v,r?B.bC:B.fD,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aC,t,t,t,t,t,t,D.aNU,t,t,t)},
aCJ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b7
else w=f?B.a9:B.at
v=f&&g?B.a9.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.C(A.az(!1,B.Q,!0,u,A.aH(!1,A.m(10),!0,new A.B(B.my,A.u(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Y,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a2),1)}}
C.aUQ.prototype={
B(d){return D.aBh}}
C.aO4.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ii,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.us("Serial",u.c),q=w.us("Model",u.d),p=w.us("Device ID",u.e),o=w.us("IMEI",u.r),n=w.us("MAC",u.f),m=w.us("OS",u.w+" "+u.x),l=w.us("Location",u.y+", "+u.z),k=w.us("Coordinates",B.l.ab(u.Q,4)+", "+B.l.ab(u.as,4)),j=w.us("Timezone",u.at)
u=u.ax
return A.ec(A.a([t,B.aH,s,B.af,r,q,p,o,n,m,l,k,j,w.us("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bq,v,v,B.al,!1)},
us(d,e){var w=null
return new A.B(B.dl,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.d(e,w,w,w,w,w,w,D.d7v,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.Mg.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rz.prototype={
gaTB(){var w=this.c
return w===D.ak3||w===D.ak4||w===D.RN||w===D.ak5}}
C.aat.prototype={
V(){return new C.aTo(null,null)}}
C.aTo.prototype={
a_(){this.a3()
var w=A.bd(null,B.tU,null,1,null,this)
w.fH(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b3c()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.o(t,t,t,t,t,new A.a7(B.bL,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bo),q=x.Y,p=u.d
p===$&&A.c()
p=A.cf(B.cS,p,t)
w=B.c.k(0.92)
q=A.aB(new A.cF(new A.aZ(p,new A.bi(0.72,1,q),q.j("aZ<bl.T>")),!1,A.W(B.kV,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oT
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aUV(s,t),r,q,A.au(t,A.p(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.N(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.at(B.a5,t,B.bb,B.t,s,t)}}
C.aUV.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kq(u,B.I,new C.dbp(this),B.cn,B.c2,!0,w,w,new C.dbq(this),w)
return new C.Ho(v,w)}}
C.Ho.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tI,B.Xc],x.O),B.kV)
break
case 1:w=new A.aI(A.a([B.Bu,D.aHm],x.O),B.mE)
break
case 2:w=new A.aI(A.a([D.aJa,D.aGF],x.O),B.DA)
break
case 3:w=new A.aI(A.a([B.T,B.dx],x.O),B.DG)
break
case 4:w=new A.aI(A.a([B.aC,B.aO],x.O),B.lI)
break
default:w=u}v=w.a
return A.p(u,A.aB(A.W(w.b,B.a9.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aE,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aqG.prototype={
p(){var w=this,v=w.az$
if(v!=null)v.Z(0,w.gcG())
w.az$=null
w.a4()},
bb(){this.bn()
this.bl()
this.cH()}}
C.aau.prototype={
V(){return new C.akY()}}
C.akY.prototype={
abN(d,e){var w,v=C.bzn(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dS6(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eto(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bRK(){var w,v=this
if(v.w)return
v.n(new C.d70(v))
w=v.e
if(w!=null)v.abN(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.wV()
$.o9().ps(w,new C.d79(u),!0)}catch(v){u.r=!0
u.f=!1}},
b6(d){var w,v=this
v.bh(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d72(v))
w=v.e
w.toString
v.abN(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a3z,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.eL(A.aB(new A.B(new A.N(12,12,12,12),A.u(w,B.n,n,B.i,B.Y,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.EB(n,B.o7,w)],v)
if(o.f)w.push(A.eL(A.aB(new A.ab(28,28,D.aCJ,n),n,n,n),B.d2,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b7,B.r,1)
q=A.W(B.Ox,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dR(0,A.az(!1,B.Q,!0,n,A.aH(!1,n,!0,A.aB(A.p(n,A.E(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Y,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.CM,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbRJ(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a2)))}v=C.bzn(o.a.d)
if(v!=null)w.push(A.au(8,A.iF(D.b0d,D.dpU,new C.d71(o),A.hf(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fQ,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.at(B.a5,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["q(pf)","~()","Md(O)","pf(a_<@,@>)","Z(pf)","a_<q,@>(pf)","aD<~>()","Mc(O)","lX<L>(O,rz?,r?)","ZT(O,L)","vu(O,rz?,r?)","Ho(O,aq,dS?)"])
C.dNN.prototype={
$1(d){return new C.Md(this.a,null)},
$S:z+2}
C.dNM.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eu,B.T],j):A.a([B.c,B.aB],j),h=A.a([new A.a5(0,B.G,B.a9.k(0.22),B.eH,32)],x.V),g=A.J(m?B.cf:B.a9.k(0.18),B.r,1),f=A.m(28),e=B.a9.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.p(n,D.aYl,B.j,n,n,new A.o(B.a9.k(0.18),n,A.J(B.a9.k(0.45),B.r,1),n,n,n,B.ae),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.T,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.C(A.u(A.a([w,B.aH,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.p(n,A.E(A.a([e,B.eI,w,A.aN(n,n,n,n,A.W(B.cJ,m?B.at:B.d2,n,n,n),n,n,n,new C.dNI(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a1,B.E,j,n,n),B.o),n,n,n,n,B.Mn,n,n,n)
e=A.e5(B.cM,A.a([new C.PR("YouTube",B.Or,m,n),new C.PR("TikTok",B.mE,m,n),new C.PR("Instagram",B.DA,m,n),new C.PR("Facebook",B.DG,m,n)],v),B.cy,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.T,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cc:B.hJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bG
r=A.W(B.fC,B.a9.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cf:B.aL
u=A.u(A.a([e,B.aR,A.aP(n,B.S,!0,n,!0,B.t,n,A.aQ(),w,n,n,n,n,n,2,A.bm(n,new A.b4(4,q,B.W),n,n,n,n,n,n,!0,new A.b4(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b4(4,A.m(16),B.VT),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.ak,n,B.i,B.k,0,B.p)
e=A.iF(D.aYp,D.dud,new C.dNJ(d),A.hf(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.B(new A.N(12,0,12,12+l.f.d),A.cw(A.bK(f,A.u(A.a([j,new A.B(B.a_Y,u,n),new A.B(D.aPZ,A.E(A.a([e,B.ba,A.c0(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dNK(d),n,n),B.ai,A.dH(D.b26,D.dv4,new C.dNL(d,w),A.bq(B.a9,n,n,n,B.c,n,B.CM,n,new A.bo(A.m(14),B.W),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ak,n,B.i,B.Y,0,B.p),B.aA),new A.o(n,n,g,k,h,new A.a7(B.au,B.aE,B.E,i,n,n),B.o),B.bo),n)},
$S:77}
C.dNI.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dNJ.prototype={
$0(){C.e49()
$.RN().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dNK.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dNL.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bzz.prototype={
$1(d){return C.e4a(A.S(d,x.N,x.z))},
$S:z+3}
C.bzA.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bzr.prototype={
$1(d){return d.c},
$S:z+0}
C.bzs.prototype={
$1(d){return d.r},
$S:z+0}
C.bzt.prototype={
$1(d){return d.f},
$S:z+0}
C.bzu.prototype={
$1(d){return d.at},
$S:z+0}
C.bzv.prototype={
$1(d){return d.c},
$S:z+0}
C.bzw.prototype={
$1(d){return d.r},
$S:z+0}
C.bzx.prototype={
$1(d){return d.f},
$S:z+0}
C.bzy.prototype={
$1(d){return d.at},
$S:z+0}
C.bzq.prototype={
$1(d){return d.ad()},
$S:z+5}
C.bzp.prototype={
$1(d){return B.b.b3(B.m.fX(d,16),2,"0").toUpperCase()},
$S:74}
C.d6S.prototype={
$0(){},
$S:0}
C.d6R.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6P.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d6Q.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d6T.prototype={
$1(d){return new C.Mc(this.a,null)},
$S:z+7}
C.d6Y.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,B.r6,w,w,w,new C.d6X(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a1(u.d)+")",s=x.p
return A.E(A.a([v,A.C(A.hs(A.E(A.a([new A.pd(D.yO,e,g,36,B.yi,w),B.aM,A.C(A.d(t,w,1,B.aq,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fG(B.f.gG(D.yO).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.B(B.bS,A.W(B.hU,A.ao(B.f.gG(D.yO),B.f.ga8(D.yO),e),w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbAo(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a2)],s),B.n,w,B.i,B.k,0,w,w),D.yO,w,g,B.eB,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:375}
C.d6X.prototype={
$0(){return A.a0(this.a,!1).ed()},
$S:0}
C.d6Z.prototype={
$3(d,e,f){return new A.lX($.IH(),new C.d6W(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d6W.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.F9(d,k,x.Q)
w=w==null?k:w.glV()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a9.k(0.12)
s=A.m(12)
r=A.J(B.a9.k(0.35),B.r,1)
q=A.W(B.kV,B.a9,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.IH().a
m=B.l.P(n+4,1,o)
t=A.a([A.p(k,A.E(A.a([q,B.ai,A.C(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.T,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dv,B.fb,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bK(s,new A.hO(1.7777777777777777,C.e4b(new A.cM("fleet_master_"+r,x.W),!0,r,!0,j.gaTB(),"fleet_master"),k),B.aA),B.af],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.va(0,B.t,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.lk(new A.B(B.CF,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.oD(D.aNq,A.aIu(new A.oB(new C.d6V(i,j),J.a1(i.d),!1,!0,!0,A.uV(),k),D.d0u),k)],w))},
$S:1885}
C.d6V.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.ZT(v,e,J.a1(w.d),new C.d6U(w,v),this.b,null)},
$S:z+9}
C.d6U.prototype={
$0(){return this.a.bzI(this.b)},
$S:0}
C.d7_.prototype={
$0(){this.a.XQ()
return null},
$S:0}
C.d6M.prototype={
$0(){return A.a0(this.a,!1).ed()},
$S:0}
C.d6N.prototype={
$0(){C.a23(this.a,$.bzo)
return null},
$S:0}
C.d6O.prototype={
$3(d,e,f){return A.eH(new C.d6L(this.a,e))},
$S:z+10}
C.d6L.prototype={
$2(d,e){var w,v=null,u=B.l.P(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aR,new C.b_P(u,s.a.c,s.e,s.d,new C.d6I(s),new C.d6J(s),new C.d6K(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.p3,v,v,B.al),v,v,v)},
$S:636}
C.d6I.prototype={
$0(){var w=this.a.c
w.toString
C.a23(w,$.bzo)
return null},
$S:0}
C.d6J.prototype={
$1(d){var w=this.a
return w.n(new C.d6H(w,d))},
$S:31}
C.d6H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d6K.prototype={
$0(){var w=this.a
return w.n(new C.d6G(w))},
$S:0}
C.d6G.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dou.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dov.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.dbp.prototype={
$3(d,e,f){return new C.Ho(this.a.c,null)},
$S:z+11}
C.dbq.prototype={
$3(d,e,f){if(f==null)return e
return new A.at(B.a5,null,B.bb,B.t,A.a([new C.Ho(this.a.c,null),D.aBD],x.p),null)},
$C:"$3",
$R:3,
$S:443}
C.d70.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d79.prototype={
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
w.abN(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.eo(v,"load",new C.d76(w),!1,u)
v=w.e
v.toString
A.eo(v,"error",new C.d77(w),!1,u)
A.bF(B.k9,new C.d78(w),x.H)
w=w.e
w.toString
return w},
$S:644}
C.d76.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d75(w))},
$S:21}
C.d75.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d77.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d74(w))},
$S:21}
C.d74.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d78.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d73(w))},
$S:12}
C.d73.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d72.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d71.prototype={
$0(){var w,v=C.bzn(this.a.a.d)
if(v==null)return
w=window
w.toString
B.m7.FK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dIT.prototype={
$1(d){var w,v,u,t,s=new A.qz([],[]).qk(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1886};(function aliases(){var w=C.aqG.prototype
w.b3c=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.akX.prototype,"gaCX","bx0",1)
w(u,"gbxz","bxA",1)
w(u,"gbAo","bAp",6)
w(C.akY.prototype,"gbRJ","bRK",1)
v(C,"eOv","e48",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.Aa,[C.dNN,C.dNM,C.bzz,C.bzA,C.bzr,C.bzs,C.bzt,C.bzu,C.bzv,C.bzw,C.bzx,C.bzy,C.bzq,C.bzp,C.d6T,C.d6Y,C.d6Z,C.d6W,C.d6O,C.d6J,C.dbp,C.dbq,C.d79,C.d76,C.d77,C.dIT])
v(A.a3x,[C.dNI,C.dNJ,C.dNK,C.dNL,C.d6S,C.d6R,C.d6P,C.d6Q,C.d6X,C.d6U,C.d7_,C.d6M,C.d6N,C.d6I,C.d6H,C.d6K,C.d6G,C.dou,C.dov,C.d70,C.d75,C.d74,C.d78,C.d73,C.d72,C.d71])
v(A.ap,[C.PR,C.ZT,C.aS3,C.b_P,C.b_Q,C.aTu,C.b_O,C.aUQ,C.aO4,C.aUV,C.Ho])
v(A.aq,[C.pf,C.rz])
v(A.ae,[C.Md,C.Mc,C.aat,C.aau])
v(A.af,[C.akX,C.aTn,C.aqG,C.akY])
v(A.a3y,[C.d6V,C.d6L])
u(C.Mg,A.aP_)
u(C.aTo,C.aqG)
w(C.aqG,A.dw)})()
A.e7D(b.typeUniverse,JSON.parse('{"Md":{"ae":[],"r":[]},"ZT":{"ap":[],"r":[]},"Mc":{"ae":[],"r":[]},"PR":{"ap":[],"r":[]},"akX":{"af":["Md"]},"aS3":{"ap":[],"r":[]},"aTn":{"af":["Mc"]},"b_P":{"ap":[],"r":[]},"b_Q":{"ap":[],"r":[]},"aTu":{"ap":[],"r":[]},"b_O":{"ap":[],"r":[]},"aUQ":{"ap":[],"r":[]},"aO4":{"ap":[],"r":[]},"aat":{"ae":[],"r":[]},"Ho":{"ap":[],"r":[]},"aTo":{"af":["aat"]},"aUV":{"ap":[],"r":[]},"aau":{"ae":[],"r":[]},"akY":{"af":["aau"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<pf>"),S:w("a9<fG>"),s:w("a9<q>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ai<pf>"),a:w("ai<@>"),P:w("a_<q,@>"),f:w("a_<@,@>"),w:w("p9"),_:w("F6"),k:w("pf"),N:w("q"),Y:w("bi<a3>"),W:w("cM<q>"),J:w("lX<L>"),j:w("lX<rz?>"),E:w("pC<d7>"),q:w("a_Q"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a3d=new A.P(983224,"MaterialIcons",!1)
D.b0k=new A.ac(D.a3d,48,B.b7,null,null,null)
D.d79=new A.M(!0,B.cc,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dg4=new A.z("Powered off",null,D.d79,null,null,null,null,null,null,null,null,null)
D.bYM=w([D.b0k,B.N,D.dg4],x.p)
D.aKA=new A.eM(B.al,B.i,B.Y,B.n,null,B.p,null,0,D.bYM,null)
D.aBh=new A.cP(B.I,null,null,D.aKA,null)
D.d09=new A.ab(18,18,B.WW,null)
D.aBD=new A.cP(B.I,null,null,D.d09,null)
D.aCJ=new A.fl(2,null,null,null,null,B.a6,null,null,null,null)
D.aGF=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aHm=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aJa=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aNg=new A.N(0,3,0,3)
D.aNq=new A.N(10,0,10,88)
D.aNU=new A.N(12,6,12,10)
D.aOr=new A.N(14,8,14,6)
D.aPZ=new A.N(20,8,20,20)
D.a0t=new A.N(8,6,15,8)
D.aWx=new A.P(983222,"MaterialIcons",!1)
D.aYl=new A.ac(B.kV,26,B.a9,null,null,null)
D.aYp=new A.ac(B.a2e,18,null,null,null,null)
D.aYD=new A.ac(B.pj,14,B.a6,null,null,null)
D.aWR=new A.P(983420,"MaterialIcons",!1)
D.aZw=new A.ac(D.aWR,14,B.a6,null,null,null)
D.aUQ=new A.P(62895,"MaterialIcons",!1)
D.aZB=new A.ac(D.aUQ,14,B.a6,null,null,null)
D.b0d=new A.ac(B.uC,16,B.a6,null,null,null)
D.b26=new A.ac(B.jH,20,null,null,null,null)
D.b2q=new A.ac(B.hU,16,null,null,null,null)
D.c1T=w([B.aO,B.T],x.O)
D.a5f=new A.a7(B.au,B.aE,B.E,D.c1T,null,null)
D.cU8=new A.aI("NGMY OS","14.2.1")
D.cSN=new A.aI("VirtualDroid","13.8.4")
D.cSM=new A.aI("NGMY OS","15.0.0")
D.cTF=new A.aI("VirtualDroid","14.1.2")
D.cSI=new A.aI("NGMY Tab OS","12.9.7")
D.cSG=new A.aI("NGMY OS","13.5.3")
D.cSv=new A.aI("VirtualDroid","15.2.0")
D.cTc=new A.aI("NGMY OS","14.8.1")
D.cTI=new A.aI("NGMY Tab OS","13.2.4")
D.cUl=new A.aI("VirtualDroid","12.6.9")
D.cSo=new A.aI("NGMY OS","16.0.1")
D.cSc=new A.aI("VirtualDroid","14.9.0")
D.cU_=new A.aI("NGMY Tab OS","14.0.3")
D.cSY=new A.aI("NGMY OS","13.1.8")
D.cSm=new A.aI("VirtualDroid","13.4.5")
D.cSF=new A.aI("NGMY OS","15.3.2")
D.cTJ=new A.aI("NGMY Tab OS","12.4.1")
D.cU2=new A.aI("VirtualDroid","16.1.0")
D.cTb=new A.aI("NGMY OS","14.4.6")
D.cU9=new A.aI("VirtualDroid","15.0.8")
D.c0Z=w([D.cU8,D.cSN,D.cSM,D.cTF,D.cSI,D.cSG,D.cSv,D.cTc,D.cTI,D.cUl,D.cSo,D.cSc,D.cU_,D.cSY,D.cSm,D.cSF,D.cTJ,D.cU2,D.cTb,D.cU9],A.b3("a9<+(q,q)>"))
D.yO=w([B.a9,B.fO],x.O)
D.cWG=new A.f6(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cWe=new A.f6(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cW9=new A.f6(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cWi=new A.f6(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cW5=new A.f6(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cWk=new A.f6(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cWI=new A.f6(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cW6=new A.f6(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cWd=new A.f6(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cWm=new A.f6(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cW4=new A.f6(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cWA=new A.f6(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cWx=new A.f6(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cWc=new A.f6(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cWu=new A.f6(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cWt=new A.f6(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cW3=new A.f6(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cWh=new A.f6(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cWr=new A.f6(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cWw=new A.f6(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.acf=w([D.cWG,D.cWe,D.cW9,D.cWi,D.cW5,D.cWk,D.cWI,D.cW6,D.cWd,D.cWm,D.cW4,D.cWA,D.cWx,D.cWc,D.cWu,D.cWt,D.cW3,D.cWh,D.cWr,D.cWw],A.b3("a9<+(q,q,a3,a3,q)>"))
D.cbk=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ak3=new C.Mg(0,"youtube")
D.ak4=new C.Mg(1,"tiktok")
D.RN=new C.Mg(2,"instagram")
D.ak5=new C.Mg(3,"facebook")
D.cKP=new C.Mg(4,"other")
D.d0u=new A.he(4,10,8,0.52,null)
D.dhn=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d40=new A.aX(D.dhn,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.t,null)
D.d7v=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dha=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dpU=new A.z("Open in YouTube",null,B.jT,null,null,null,null,null,null,null,null,null)
D.dud=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dv4=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dve=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dDb=new C.aUQ(null)})();(function staticFields(){$.e47=20
$.aEp=null
$.bzo=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eTE","IH",()=>A.aeV(0))
w($,"eTF","RN",()=>A.aeV(null))})()};
(a=>{a["bD8uCPfp/W5KKgspal1kONK+hb8="]=a.current})($__dart_deferred_initializers__);