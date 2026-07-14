((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ety(d,e){A.a3(d,!1).cE(A.f1(new C.dv7(e),!0,null,x.H))},
a_H(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Q6()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.am(new A.bb(n,B.aP,B.aD),t)
w=3
return A.b(A.dz(B.L,new C.dv6(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_H)
case 3:r=g
s.I$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e8A(r)
if(q==null){d.H(x.q).f.U(D.cSX)
w=1
break}w=4
return A.b(A.bI(B.ik,null,x.H),$async$a_H)
case 4:if(d.e==null){w=1
break}n=B.l.S(e,1,999)
$.dLA=n
p=C.e8u(n)
n=$.H7()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dza(q)
d.H(x.q).f.U(A.bj(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_H,v)},
dLD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oG(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
KG(d){return C.e8D(d)},
e8D(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$KG=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$KG)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.J.aB(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eN(r,x.f)
k=A.dq(k,new C.bsF(),k.$ti.j("G.E"),x.k)
j=A.S(k).j("ai<G.E>")
i=A.y(new A.ai(k,new C.bsG(),j),j.j("G.E"))
q=i
if(J.a8(q)>=20){u=q
w=1
break}p=C.dLF(q)
w=12
return A.b(C.KF(a3,p),$async$KG)
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
case 9:case 5:o=A.aJ(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.J.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dLD(A.T(n,x.N,x.z))
l=C.dLF(A.a([m],x.e))
w=21
return A.b(C.KF(a3,l),$async$KG)
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
case 18:case 14:q=C.e8B()
w=22
return A.b(C.KF(a3,q),$async$KG)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KG,v)},
dLF(d){var w=A.X(d).j("D<1,o>"),v=new A.D(d,new C.bsx(),w).em(0),u=new A.D(d,new C.bsy(),w).em(0),t=new A.D(d,new C.bsz(),w).em(0),s=new A.D(d,new C.bsA(),w).em(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dzb(null,q,u,t,v,s));++q}return r},
aA9(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aA9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KG(d),$async$aA9)
case 3:t=f
s=x.N
r=J.ce(t)
q=r.dn(t,new C.bsB(),s).em(0)
p=r.dn(t,new C.bsC(),s).em(0)
o=r.dn(t,new C.bsD(),s).em(0)
n=r.dn(t,new C.bsE(),s).em(0)
m=C.dzb(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.KF(d,t),$async$aA9)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aA9,v)},
KF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$KF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$KF)
case 2:u=g
t=B.b.i(d)
s=J.aY(e,new C.bsw(),x.P)
s=A.y(s,s.$ti.j("a4.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.J.aj(s,null)),$async$KF)
case 3:return A.h(null,v)}})
return A.i($async$KF,v)},
e8B(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cP(20,x.k)
for(w=0;w<20;++w)q[w]=C.dzb(w,w,t,s,u,r)
return q},
dzb(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.l6(),h=d==null,g=D.a91[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a91[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bsv(),A.X(p).j("D<1,o>")).fO(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.f.fO(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.ba(B.l.h1(i.bG(256),16),2,"0")
s=B.f.bj(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.l.a1(e,20)
k=D.c2T[w]
j=D.bUk[w]
return new C.oG("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.ba(B.l.q(e+1),2,"0"),u,k,C.e8C(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a9().a4())},
e8C(d,e){var w,v=J.cP(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.ba(B.l.h1(d.bG(256),16),2,"0")
return B.f.fO(v)},
dv7:function dv7(d){this.a=d},
dv6:function dv6(d,e){this.a=d
this.b=e},
dv2:function dv2(d){this.a=d},
dv3:function dv3(d){this.a=d},
dv4:function dv4(d){this.a=d},
dv5:function dv5(d,e){this.a=d
this.b=e},
Oc:function Oc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oG:function oG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bsF:function bsF(){},
bsG:function bsG(){},
bsx:function bsx(){},
bsy:function bsy(){},
bsz:function bsz(){},
bsA:function bsA(){},
bsB:function bsB(){},
bsC:function bsC(){},
bsD:function bsD(){},
bsE:function bsE(){},
bsw:function bsw(){},
bsv:function bsv(){},
KE:function KE(d,e){this.c=d
this.a=e},
aif:function aif(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cU6:function cU6(){},
cU5:function cU5(d,e){this.a=d
this.b=e},
cU3:function cU3(d){this.a=d},
cU4:function cU4(d,e){this.a=d
this.b=e},
cU7:function cU7(d){this.a=d},
cUc:function cUc(d){this.a=d},
cUb:function cUb(d){this.a=d},
cUd:function cUd(d,e){this.a=d
this.b=e},
cUa:function cUa(d,e,f){this.a=d
this.b=e
this.c=f},
cU9:function cU9(d,e){this.a=d
this.b=e},
cU8:function cU8(d,e){this.a=d
this.b=e},
cUe:function cUe(d){this.a=d},
XS:function XS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNz:function aNz(d,e){this.c=d
this.a=e},
KD:function KD(d,e){this.c=d
this.a=e},
aON:function aON(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cU0:function cU0(d){this.a=d},
cU1:function cU1(d){this.a=d},
cU2:function cU2(d){this.a=d},
cU_:function cU_(d,e){this.a=d
this.b=e},
cTX:function cTX(d){this.a=d},
cTY:function cTY(d){this.a=d},
cTW:function cTW(d,e){this.a=d
this.b=e},
cTZ:function cTZ(d){this.a=d},
cTV:function cTV(d){this.a=d},
aVR:function aVR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aVS:function aVS(d,e,f){this.c=d
this.d=e
this.a=f},
aOT:function aOT(d,e){this.c=d
this.a=e},
aVQ:function aVQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d8X:function d8X(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
aQd:function aQd(d){this.a=d},
aJG:function aJG(d,e){this.c=d
this.a=e},
e8A(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e8z(v)
if(u!=null)return new C.qW(w,C.dz9(u,!1),D.agD,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e8y(v)
if(t!=null)return new C.qW(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agE,"TikTok",q)
s=C.e8x(w,v)
if(s!=null)return s
r=C.e8w(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qW(w,w,D.czP,"Video",q)
return q},
e8x(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dF(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qW(d,"https://www.instagram.com/reel/"+w+u,D.Pz,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dF(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qW(d,"https://www.instagram.com/p/"+w+u,D.Pz,t,null)}return null},
e8w(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qW(d,"https://www.facebook.com/plugins/video.php?href="+A.ff(2,d,B.br,!1)+"&show_text=false&width=734",D.agF,"Facebook",null)},
e8z(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dF(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e8y(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dF(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dF(d)
return w==null?null:w.b[1]},
KH:function KH(d,e){this.a=d
this.b=e},
qW:function qW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a82:function a82(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aOO:function aOO(d,e){var _=this
_.d=$
_.cn$=d
_.aF$=e
_.c=_.a=null},
aQi:function aQi(d,e){this.c=d
this.a=e},
cYc:function cYc(d){this.a=d},
cYd:function cYd(d){this.a=d},
G1:function G1(d,e){this.c=d
this.a=e},
anA:function anA(){},
dLE(d,e,f,g,h,i){return new C.a83(i,f,h,e,g,d)},
esb(d){var w=window
w.toString
A.hw(w,"message",new C.drl(d),!1,x._)},
a83:function a83(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aig:function aig(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cUf:function cUf(d){this.a=d},
cUo:function cUo(d){this.a=d},
cUl:function cUl(d){this.a=d},
cUk:function cUk(d){this.a=d},
cUm:function cUm(d){this.a=d},
cUj:function cUj(d){this.a=d},
cUn:function cUn(d){this.a=d},
cUi:function cUi(d){this.a=d},
cUh:function cUh(d){this.a=d},
cUg:function cUg(d){this.a=d},
drl:function drl(d){this.a=d},
e8s(){var w,v,u
try{v=A.xX()
w=v.gv5(v)
if(J.a8(w)!==0&&!J.w(w,"null")&&!J.cH(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dz9(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bj(w,"&")},
bst(d){var w=A.ao(y.c,!0,!1,!1,!1).dF(d)
return w==null?null:w.b[1]},
dLz(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e8t(d,e,f){var w,v,u=C.bst(d)
if(u!=null){if(f){w=C.e8s()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dLz(C.dz9(u,e))}return C.dLz(d)},
e8u(d){if(d<=4)return 0
return B.l.an(d-1,4)*4},
e8v(d){var w
if($.Q6().a==null)return!1
w=$.H7().a
return d>=w&&d<w+4},
dLC(){var w=$.aA8
if(w!=null)w.ac(0)
$.aA8=null
$.H7().sv(0,0)},
dLB(){var w,v,u,t=$.Q6()
if(t.a==null)return
w=$.aA8
if(w!=null)w.ac(0)
v=$.dLA
if(v<=4){t=t.a
t.toString
C.dza(t)
return}w=$.H7()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dza(t)},
dza(d){var w=$.aA8
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
default:w=null}$.aA8=A.dE(A.dg(0,0,0,0,0,w),C.esr())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oc.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.K(B.ad.k(0.25),B.t,1),r=A.Y(this.d,B.ad,w,w,14)
return A.r(w,A.I(A.a([r,B.fB,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cl,w,w,w,w,w,w,w,w,11,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.j,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hm,w,w,w)}}
C.oG.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.KE.prototype={
V(){return new C.aif(A.a([],x.e))},
ge7(){return this.c}}
C.aif.prototype={
a_(){var w=this
w.a2()
$.H7().az(0,w.gazT())
C.esb(w.gbrW())
w.a_o()},
brn(){if(this.c!=null)this.n(new C.cU6())},
brX(){C.dLB()},
p(){$.H7().X(0,this.gazT())
C.dLC()
$.Q6().sv(0,null)
this.a5()},
a_o(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KG(t.a.c),$async$a_o)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cU5(t,s))
$.bsu=J.a8(s)
case 1:return A.h(u,v)}})
return A.i($async$a_o,v)},
W9(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cU3(t))
w=3
return A.b(C.aA9(t.a.c),$async$W9)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cU4(t,s))
$.bsu=J.a8(t.d)
t.c.H(x.q).f.U(A.bj(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W9,v)},
bu_(d){var w=this.c
w.toString
A.a3(w,!1).cE(A.f1(new C.cU7(d),!1,null,x.H))},
buD(){var w=this.c
w.toString
return C.a_H(w,J.a8(this.d))},
B(d){var w=this,v=null,u=A.E(d).ax.a===B.D,t=u?B.h_:B.bA,s=A.bU(!0,A.v(A.a([new A.F(D.YU,new A.jf(new C.cUc(w),v),v),A.H(w.e?B.nP:new A.lw($.Q6(),new C.cUd(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ac,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.atT(B.ad,B.Ib,B.n_,D.dh9,w.e?v:new C.cUe(w)),v)}}
C.XS.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.K(B.e.k(0.1),B.t,1),q=A.a([new A.a7(0,B.G,B.ad.k(0.18),B.dy,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a82(n,!0,!C.e8v(w),"Fold "+(B.l.an(w,4)+1)+"/"+B.l.an(v.e+4-1,4),u)
n=w}else n=A.r(u,A.v(A.a([A.Y(B.ka,B.nY,u,u,22),B.aI,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aW,B.k,0,B.q),B.j,B.A1,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aA(!1,B.T,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.r(u,A.bV(p,A.f8(A.v(A.a([new C.aNz(o,u),A.H(n,1),A.r(u,A.I(A.a([A.Y(B.CA,B.ad.k(0.85),u,u,9),D.cOL,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aW,B.k,0,u,u),B.j,B.ax,u,u,u,u,u,u,D.aHQ,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.p(u,u,r,s,q,D.a2i,B.p),u,u,u,u,B.h2,u,u,u),1),B.aI,A.d(o.b,u,1,B.au,u,u,u,A.l(u,u,A.E(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.au,u,u,u,A.l(u,u,A.E(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.au,u,u,u,A.l(u,u,B.ad.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a5)}}
C.aNz.prototype={
B(d){var w=null
return A.r(w,A.I(A.a([A.H(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.au,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.tE,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.ax,w,w,w,w,w,w,B.YH,w,w,w)}}
C.KD.prototype={
V(){return new C.aON()}}
C.aON.prototype={
B(d){var w=null,v=A.E(d).ax.a===B.D,u=v?B.h_:B.bA,t=A.aR(w,w,w,w,B.a1o,w,w,w,new C.cU0(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bU(!0,A.v(A.a([new A.F(D.YU,A.I(A.a([t,A.H(new A.Ku(A.I(A.a([A.H(new A.F(B.js,A.d(s.b+" \xb7 "+s.c,w,1,B.au,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aA(!1,B.T,!0,w,A.aL(!1,w,!0,new A.F(B.bj,A.Y(B.hq,B.ad,w,w,28),w),B.cu,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cU1(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.H(new A.lw($.Q6(),new C.cU2(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ac,!0,!0),w,!1,!1,w,w)}}
C.aVR.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a7(0,B.G,B.ad.k(0.35),B.fe,28),new A.a7(0,B.G,B.A.k(0.45),B.d6,18)],x.V),o=A.K(B.e.k(0.12),B.t,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dLE(new A.d9(v+"_full_"+u,x.W),!1,u,!1,w.gaPY(),v+"_full")
w=v}else w=new C.aOT(t.r,s)}else w=new C.aJG(m,s)
else w=D.doT
return A.r(s,A.bV(n,A.f8(A.v(A.a([new C.aVS(m,l,s),A.H(w,1),new C.aVQ(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.p(s,s,o,q,p,D.a2i,B.p),s,r*2.05,s,s,B.bS,s,s,r)}}
C.aVS.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dl(r)
r=A.h2(r)
w=new A.dK(q,r)
v=w.gKs()===0?12:w.gKs()
r=B.b.ba(B.l.q(r),2,"0")
q=(q<12?B.hk:B.jm)===B.hk?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.I(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nz,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bK,D.aTw,B.dN,D.aSH,B.dN,D.aTB],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aI,A.I(A.a([A.Y(B.Ct,B.ad.k(0.9),s,s,12),B.dN,A.H(A.d(u.c,s,s,B.au,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.r(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.ax,s,s,s,s,s,s,D.aIT,s,s,s)}}
C.aOT.prototype={
B(d){var w=null
return A.r(w,A.aD(A.v(A.a([A.Y(B.BU,B.e.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aL,A.eR(D.aX4,D.d4g,this.c,A.dZ(w,w,w,w,w,w,w,w,w,B.ad,w,w,w,w,w,new A.aH(B.ad.k(0.5),1,B.t,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.j,B.A1,w,w,w,w,w,w,w,w,w,1/0)}}
C.aVQ.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azK(B.Cm,"YouTube",s===0,r,new C.d8X(u))
s=u.azK(B.kS,"Device",s===1,r,new C.d8Y(u))
w=r?"Power off":"Power on"
v=r?D.a0y:D.aQF
return A.r(t,A.I(A.a([q,B.ah,s,B.b3,A.aR(t,t,t,t,A.Y(v,r?B.bP:B.hs,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dB)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.ax,t,t,t,t,t,t,D.aIt,t,t,t)},
azK(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bg
else w=f?B.ad:B.aw
v=f&&g?B.ad.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aA(!1,B.T,!0,u,A.aL(!1,A.m(10),!0,new A.F(B.o8,A.v(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.Q,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a5),1)}}
C.aQd.prototype={
B(d){return D.awY}}
C.aJG.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kn,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u1("Serial",u.c),q=w.u1("Model",u.d),p=w.u1("Device ID",u.e),o=w.u1("IMEI",u.r),n=w.u1("MAC",u.f),m=w.u1("OS",u.w+" "+u.x),l=w.u1("Location",u.y+", "+u.z),k=w.u1("Coordinates",B.m.a8(u.Q,4)+", "+B.m.a8(u.as,4)),j=w.u1("Timezone",u.at)
u=u.ax
return A.ed(A.a([t,B.aI,s,B.ae,r,q,p,o,n,m,l,k,j,w.u1("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bj,v,v,B.an,!1)},
u1(d,e){var w=null
return new A.F(B.dd,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.d(e,w,w,w,w,w,w,D.cWh,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.KH.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qW.prototype={
gaPY(){var w=this.c
return w===D.agD||w===D.agE||w===D.Pz||w===D.agF}}
C.a82.prototype={
V(){return new C.aOO(null,null)}}
C.aOO.prototype={
a_(){this.a2()
var w=A.bf(null,B.rP,null,1,null,this)
w.h_(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b_g()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cC(t,new A.p(t,t,t,t,t,new A.aa(B.bU,B.bM,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.bt),q=x.Y,p=u.d
p===$&&A.c()
p=A.cl(B.cM,p,t)
w=B.e.k(0.92)
q=A.aD(new A.cL(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bl.T>")),!1,A.Y(B.ka,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nY
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQi(s,t),r,q,A.az(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.az(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.az(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ax(B.a9,t,B.bb,B.r,s,t)}}
C.aQi.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ld(u,B.I,new C.cYc(this),B.bV,!0,w,w,new C.cYd(this),w)
return new C.G1(v,w)}}
C.G1.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.jg,B.UD],x.O),B.ka)
break
case 1:w=new A.aM(A.a([B.A1,D.aCc],x.O),B.lP)
break
case 2:w=new A.aM(A.a([D.aDX,D.aBC],x.O),B.C2)
break
case 3:w=new A.aM(A.a([B.X,B.dK],x.O),B.Ca)
break
case 4:w=new A.aM(A.a([B.ax,B.aM],x.O),B.tB)
break
default:w=u}v=w.a
return A.r(u,A.aD(A.Y(w.b,B.ad.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.p(u,u,u,u,u,new A.aa(B.aA,B.aJ,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anA.prototype={
p(){var w=this,v=w.aF$
if(v!=null)v.X(0,w.gcW())
w.aF$=null
w.a5()},
bg(){this.bt()
this.br()
this.cX()}}
C.a83.prototype={
V(){return new C.aig()}}
C.aig.prototype={
a9o(d,e){var w,v=C.bst(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dz9(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e8t(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bKJ(){var w,v=this
if(v.w)return
v.n(new C.cUf(v))
w=v.e
if(w!=null)v.a9o(w,v.a.d)},
a_(){var w,v,u=this
u.a2()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.H9()
$.qh().vf(w,new C.cUo(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bi(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cUh(v))
w=v.e
w.toString
v.a9o(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.a0O,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.f8(A.aD(new A.F(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a3_(n,B.ut,w)],v)
if(o.f)w.push(A.f8(A.aD(new A.a9(28,28,D.ayc,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.K(B.bg,B.t,1)
q=A.Y(B.Mx,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e7(0,A.aA(!1,B.T,!0,n,A.aL(!1,n,!0,A.aD(A.r(n,A.I(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.Q,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.j,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,D.Ya,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbKI(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a5)))}v=C.bst(o.a.d)
if(v!=null)w.push(A.az(8,A.jB(D.aV0,D.dch,new C.cUg(o),A.j8(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ax(B.a9,n,B.bb,B.r,w,n)}}
var z=a.updateTypes(["o(oG)","~()","KE(P)","oG(Z<@,@>)","a0(oG)","Z<o,@>(oG)","aB<~>()","KD(P)","lw<L>(P,qW?,q?)","XS(P,L)","uy(P,qW?,q?)","G1(P,ap,dJ?)"])
C.dv7.prototype={
$1(d){return new C.KE(this.a,null)},
$S:z+2}
C.dv6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.E(d).ax.a===B.D,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.el,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a7(0,B.G,B.ad.k(0.22),B.fe,32)],x.V),g=A.K(m?B.c8:B.ad.k(0.18),B.t,1),f=A.m(28),e=B.ad.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.r(n,D.aSp,B.j,n,n,new A.p(B.ad.k(0.18),n,A.K(B.ad.k(0.45),B.t,1),n,n,n,B.ai),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aI,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.ao,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.r(n,A.I(A.a([e,B.f5,w,A.aR(n,n,n,n,A.Y(B.cY,m?B.aw:B.d0,n,n,n),n,n,n,new C.dv2(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.p(n,n,n,n,n,new A.aa(B.a0,B.a4,B.E,j,n,n),B.p),n,n,n,n,B.Kz,n,n,n)
e=A.er(B.cR,A.a([new C.Oc("YouTube",B.Mt,m,n),new C.Oc("TikTok",B.lP,m,n),new C.Oc("Instagram",B.C2,m,n),new C.Oc("Facebook",B.Ca,m,n)],v),B.cA,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cd:B.jh,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bA
r=A.Y(B.fw,B.ad.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aN
u=A.v(A.a([e,B.aV,A.aN(n,B.R,!0,n,!0,B.r,n,A.aO(),w,n,n,n,n,n,2,A.bo(n,new A.b7(4,q,B.Y),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aH(o,1,B.t,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.m(16),B.Tr),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a1,n,B.ag,n,n,n,n)],v),B.aq,n,B.i,B.k,0,B.q)
e=A.jB(D.aSs,D.dgc,new C.dv3(d),A.j8(n,n,n,n,n,n,n,n,n,n,n,m?B.bx:B.ao,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.F(new A.R(12,0,12,12+l.f.d),A.cC(A.bV(f,A.v(A.a([j,new A.F(B.Yr,u,n),new A.F(D.aKg,A.I(A.a([e,B.b3,A.c4(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dv4(d),n,n),B.ah,A.dT(D.aWM,D.dh1,new C.dv5(d,w),A.bu(B.ad,n,n,n,B.e,n,D.Ya,n,new A.bz(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.aq,n,B.i,B.a_,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.aa(B.aA,B.aJ,B.E,i,n,n),B.p),B.bt),n)},
$S:87}
C.dv2.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dv3.prototype={
$0(){C.dLC()
$.Q6().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dv4.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dv5.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.bsF.prototype={
$1(d){return C.dLD(A.T(d,x.N,x.z))},
$S:z+3}
C.bsG.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bsx.prototype={
$1(d){return d.c},
$S:z+0}
C.bsy.prototype={
$1(d){return d.r},
$S:z+0}
C.bsz.prototype={
$1(d){return d.f},
$S:z+0}
C.bsA.prototype={
$1(d){return d.at},
$S:z+0}
C.bsB.prototype={
$1(d){return d.c},
$S:z+0}
C.bsC.prototype={
$1(d){return d.r},
$S:z+0}
C.bsD.prototype={
$1(d){return d.f},
$S:z+0}
C.bsE.prototype={
$1(d){return d.at},
$S:z+0}
C.bsw.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bsv.prototype={
$1(d){return B.b.ba(B.l.h1(d,16),2,"0").toUpperCase()},
$S:94}
C.cU6.prototype={
$0(){},
$S:0}
C.cU5.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cU3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cU4.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cU7.prototype={
$1(d){return new C.KD(this.a,null)},
$S:z+7}
C.cUc.prototype={
$4(d,e,f,g){var w=null,v=A.aR(w,w,w,w,B.qd,w,w,w,new C.cUb(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a8(u.d)+")",s=x.p
return A.I(A.a([v,A.H(A.fQ(A.I(A.a([new A.oE(D.xx,e,g,36,B.Ct,w),B.aS,A.H(A.d(t,w,1,B.au,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fK(B.f.gJ(D.xx).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aA(!1,B.T,!0,w,A.aL(!1,w,!0,new A.F(B.bS,A.Y(B.hq,A.an(B.f.gJ(D.xx),B.f.ga6(D.xx),e),w,w,28),w),B.cu,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbuC(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.k,0,w,w),D.xx,w,g,B.fb,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:328}
C.cUb.prototype={
$0(){return A.a3(this.a,!1).eC()},
$S:0}
C.cUd.prototype={
$3(d,e,f){return new A.lw($.H7(),new C.cUa(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cUa.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DX(d,k,x.Q)
w=w==null?k:w.glO()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ad.k(0.12)
s=A.m(12)
r=A.K(B.ad.k(0.35),B.t,1)
q=A.Y(B.ka,B.ad,k,k,18)
p=j.d
o=J.a8(l.a.d)
n=$.H7().a
m=B.m.S(n+4,1,o)
t=A.a([A.r(k,A.I(A.a([q,B.ah,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.ds,B.fu,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bV(s,new A.hO(1.7777777777777777,C.dLE(new A.d9("fleet_master_"+r,x.W),!0,r,!0,j.gaPY(),"fleet_master"),k),B.aB),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a8(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.E(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wo(0,B.r,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kV(new A.F(B.Kp,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oR(D.aI_,A.aEe(new A.o2(new C.cU9(i,j),J.a8(i.d),!1,!0,!0,A.u2(),k),D.cPC),k)],w))},
$S:1779}
C.cU9.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.XS(v,e,J.a8(w.d),new C.cU8(w,v),this.b,null)},
$S:z+9}
C.cU8.prototype={
$0(){return this.a.bu_(this.b)},
$S:0}
C.cUe.prototype={
$0(){this.a.W9()
return null},
$S:0}
C.cU0.prototype={
$0(){return A.a3(this.a,!1).eC()},
$S:0}
C.cU1.prototype={
$0(){C.a_H(this.a,$.bsu)
return null},
$S:0}
C.cU2.prototype={
$3(d,e,f){return A.eP(new C.cU_(this.a,e))},
$S:z+10}
C.cU_.prototype={
$2(d,e){var w,v=null,u=B.m.S(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aD(A.cz(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.E(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aV,new C.aVR(u,s.a.c,s.e,s.d,new C.cTX(s),new C.cTY(s),new C.cTZ(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.pM,v,v,B.an),v,v,v)},
$S:1780}
C.cTX.prototype={
$0(){var w=this.a.c
w.toString
C.a_H(w,$.bsu)
return null},
$S:0}
C.cTY.prototype={
$1(d){var w=this.a
return w.n(new C.cTW(w,d))},
$S:29}
C.cTW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cTZ.prototype={
$0(){var w=this.a
return w.n(new C.cTV(w))},
$S:0}
C.cTV.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d8X.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d8Y.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cYc.prototype={
$3(d,e,f){return new C.G1(this.a.c,null)},
$S:z+11}
C.cYd.prototype={
$3(d,e,f){if(f==null)return e
return new A.ax(B.a9,null,B.bb,B.r,A.a([new C.G1(this.a.c,null),D.axh],x.p),null)},
$C:"$3",
$R:3,
$S:513}
C.cUf.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cUo.prototype={
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
w.a9o(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hw(v,"load",new C.cUl(w),!1,u)
v=w.e
v.toString
A.hw(v,"error",new C.cUm(w),!1,u)
A.bI(B.kO,new C.cUn(w),x.H)
w=w.e
w.toString
return w},
$S:618}
C.cUl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cUk(w))},
$S:50}
C.cUk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cUm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cUj(w))},
$S:50}
C.cUj.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cUn.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cUi(w))},
$S:12}
C.cUi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cUh.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cUg.prototype={
$0(){var w,v=C.bst(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nG.TR(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.drl.prototype={
$1(d){var w,v,u,t,s=new A.Fz([],[]).JG(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.J.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1781};(function aliases(){var w=C.anA.prototype
w.b_g=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aif.prototype,"gazT","brn",1)
w(u,"gbrW","brX",1)
w(u,"gbuC","buD",6)
w(C.aig.prototype,"gbKI","bKJ",1)
v(C,"esr","dLB",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zc,[C.dv7,C.dv6,C.bsF,C.bsG,C.bsx,C.bsy,C.bsz,C.bsA,C.bsB,C.bsC,C.bsD,C.bsE,C.bsw,C.bsv,C.cU7,C.cUc,C.cUd,C.cUa,C.cU2,C.cTY,C.cYc,C.cYd,C.cUo,C.cUl,C.cUm,C.drl])
v(A.a17,[C.dv2,C.dv3,C.dv4,C.dv5,C.cU6,C.cU5,C.cU3,C.cU4,C.cUb,C.cU8,C.cUe,C.cU0,C.cU1,C.cTX,C.cTW,C.cTZ,C.cTV,C.d8X,C.d8Y,C.cUf,C.cUk,C.cUj,C.cUn,C.cUi,C.cUh,C.cUg])
v(A.as,[C.Oc,C.XS,C.aNz,C.aVR,C.aVS,C.aOT,C.aVQ,C.aQd,C.aJG,C.aQi,C.G1])
v(A.ap,[C.oG,C.qW])
v(A.ad,[C.KE,C.KD,C.a82,C.a83])
v(A.ae,[C.aif,C.aON,C.anA,C.aig])
v(A.a18,[C.cU9,C.cU_])
u(C.KH,A.aKA)
u(C.aOO,C.anA)
w(C.anA,A.dB)})()
A.dP7(b.typeUniverse,JSON.parse('{"KE":{"ad":[],"q":[]},"XS":{"as":[],"q":[]},"KD":{"ad":[],"q":[]},"Oc":{"as":[],"q":[]},"aif":{"ae":["KE"]},"aNz":{"as":[],"q":[]},"aON":{"ae":["KD"]},"aVR":{"as":[],"q":[]},"aVS":{"as":[],"q":[]},"aOT":{"as":[],"q":[]},"aVQ":{"as":[],"q":[]},"aQd":{"as":[],"q":[]},"aJG":{"as":[],"q":[]},"a82":{"ad":[],"q":[]},"G1":{"as":[],"q":[]},"aOO":{"ae":["a82"]},"aQi":{"as":[],"q":[]},"a83":{"ad":[],"q":[]},"aig":{"ae":["a83"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a5<a7>"),O:w("a5<x>"),e:w("a5<oG>"),S:w("a5<fK>"),s:w("a5<o>"),p:w("a5<q>"),t:w("a5<L>"),X:w("ag<oG>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oz"),_:w("DU"),k:w("oG"),N:w("o"),Y:w("bi<a2>"),W:w("d9<o>"),J:w("lw<L>"),j:w("lw<qW?>"),E:w("vt<cU>"),q:w("YJ"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a0y=new A.N(983224,"MaterialIcons",!1)
D.aV7=new A.ab(D.a0y,48,B.bg,null,null,null)
D.d3c=new A.A("Powered off",null,B.ao3,null,null,null,null,null,null,null,null,null)
D.bRl=w([D.aV7,B.N,D.d3c],x.p)
D.aFk=new A.eF(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bRl,null)
D.awY=new A.d6(B.I,null,null,D.aFk,null)
D.cPf=new A.a9(18,18,B.Ul,null)
D.axh=new A.d6(B.I,null,null,D.cPf,null)
D.ayc=new A.fW(2,null,null,null,null,B.ab,null,null,null,null)
D.aBC=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aCc=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDX=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aHQ=new A.R(0,3,0,3)
D.aI_=new A.R(10,0,10,88)
D.aIt=new A.R(12,6,12,10)
D.aIT=new A.R(14,8,14,6)
D.Ya=new A.R(18,12,18,12)
D.aKg=new A.R(20,8,20,20)
D.YU=new A.R(8,6,15,8)
D.aQF=new A.N(983222,"MaterialIcons",!1)
D.aSp=new A.ab(B.ka,26,B.ad,null,null,null)
D.aSs=new A.ab(B.a_A,18,null,null,null,null)
D.aSH=new A.ab(B.tE,14,B.ab,null,null,null)
D.aR0=new A.N(983420,"MaterialIcons",!1)
D.aTw=new A.ab(D.aR0,14,B.ab,null,null,null)
D.aP2=new A.N(62895,"MaterialIcons",!1)
D.aTB=new A.ab(D.aP2,14,B.ab,null,null,null)
D.aV0=new A.ab(B.tw,16,B.ab,null,null,null)
D.aWM=new A.ab(B.iX,20,null,null,null,null)
D.aX4=new A.ab(B.hq,16,null,null,null,null)
D.bV8=w([B.aM,B.X],x.O)
D.a2i=new A.aa(B.aA,B.aJ,B.E,D.bV8,null,null)
D.cIG=new A.aM("NGMY OS","14.2.1")
D.cHm=new A.aM("VirtualDroid","13.8.4")
D.cHl=new A.aM("NGMY OS","15.0.0")
D.cI9=new A.aM("VirtualDroid","14.1.2")
D.cHj=new A.aM("NGMY Tab OS","12.9.7")
D.cHh=new A.aM("NGMY OS","13.5.3")
D.cH6=new A.aM("VirtualDroid","15.2.0")
D.cHJ=new A.aM("NGMY OS","14.8.1")
D.cIf=new A.aM("NGMY Tab OS","13.2.4")
D.cIS=new A.aM("VirtualDroid","12.6.9")
D.cH1=new A.aM("NGMY OS","16.0.1")
D.cGW=new A.aM("VirtualDroid","14.9.0")
D.cIx=new A.aM("NGMY Tab OS","14.0.3")
D.cHv=new A.aM("NGMY OS","13.1.8")
D.cH0=new A.aM("VirtualDroid","13.4.5")
D.cHg=new A.aM("NGMY OS","15.3.2")
D.cIg=new A.aM("NGMY Tab OS","12.4.1")
D.cIA=new A.aM("VirtualDroid","16.1.0")
D.cHI=new A.aM("NGMY OS","14.4.6")
D.cIH=new A.aM("VirtualDroid","15.0.8")
D.bUk=w([D.cIG,D.cHm,D.cHl,D.cI9,D.cHj,D.cHh,D.cH6,D.cHJ,D.cIf,D.cIS,D.cH1,D.cGW,D.cIx,D.cHv,D.cH0,D.cHg,D.cIg,D.cIA,D.cHI,D.cIH],A.b4("a5<+(o,o)>"))
D.xx=w([B.ad,B.fm],x.O)
D.cKY=new A.eT(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cKw=new A.eT(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cKr=new A.eT(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cKA=new A.eT(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cKn=new A.eT(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cKC=new A.eT(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cL_=new A.eT(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cKo=new A.eT(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cKv=new A.eT(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cKE=new A.eT(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cKm=new A.eT(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cKS=new A.eT(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cKP=new A.eT(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cKu=new A.eT(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cKM=new A.eT(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cKL=new A.eT(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cKl=new A.eT(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cKz=new A.eT(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cKJ=new A.eT(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cKO=new A.eT(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a91=w([D.cKY,D.cKw,D.cKr,D.cKA,D.cKn,D.cKC,D.cL_,D.cKo,D.cKv,D.cKE,D.cKm,D.cKS,D.cKP,D.cKu,D.cKM,D.cKL,D.cKl,D.cKz,D.cKJ,D.cKO],A.b4("a5<+(o,o,a2,a2,o)>"))
D.c2T=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.agD=new C.KH(0,"youtube")
D.agE=new C.KH(1,"tiktok")
D.Pz=new C.KH(2,"instagram")
D.agF=new C.KH(3,"facebook")
D.czP=new C.KH(4,"other")
D.cOL=new A.a9(3,null,null,null)
D.cPC=new A.hv(4,10,8,0.52,null)
D.d4r=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cSX=new A.aV(D.d4r,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.r,null)
D.cWh=new A.M(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d4g=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dch=new A.A("Open in YouTube",null,B.j8,null,null,null,null,null,null,null,null,null)
D.dgc=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dh1=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dh9=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.doT=new C.aQd(null)})();(function staticFields(){$.dLA=20
$.aA8=null
$.bsu=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"exn","H7",()=>A.acq(0))
w($,"exo","Q6",()=>A.acq(null))})()};
(a=>{a["JxFxKoMVmmMowcX7tIMmwwnbj5s="]=a.current})($__dart_deferred_initializers__);