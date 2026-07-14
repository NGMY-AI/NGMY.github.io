((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
epC(d,e){A.a4(d,!1).cH(A.f_(new C.drv(e),!0,null,x.H))},
a_j(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_j=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PN()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.am(new A.bb(n,B.aO,B.aC),t)
w=3
return A.b(A.dA(B.L,new C.dru(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_j)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e4K(r)
if(q==null){d.H(x.q).f.T(D.cRB)
w=1
break}w=4
return A.b(A.bM(B.ie,null,x.H),$async$a_j)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dHQ=n
p=C.e4E(n)
n=$.GU()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dvw(q)
d.H(x.q).f.T(A.bn(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_j,v)},
dHT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oA(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Kq(d){return C.e4N(d)},
e4N(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Kq=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$Kq)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aB(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eM(r,x.f)
k=A.dp(k,new C.brH(),k.$ti.j("F.E"),x.k)
j=A.S(k).j("ai<F.E>")
i=A.z(new A.ai(k,new C.brI(),j),j.j("F.E"))
q=i
if(J.a8(q)>=20){u=q
w=1
break}p=C.dHV(q)
w=12
return A.b(C.Kp(a3,p),$async$Kq)
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
n=B.I.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dHT(A.T(n,x.N,x.z))
l=C.dHV(A.a([m],x.e))
w=21
return A.b(C.Kp(a3,l),$async$Kq)
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
case 18:case 14:q=C.e4L()
w=22
return A.b(C.Kp(a3,q),$async$Kq)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kq,v)},
dHV(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.brz(),w).el(0),u=new A.E(d,new C.brA(),w).el(0),t=new A.E(d,new C.brB(),w).el(0),s=new A.E(d,new C.brC(),w).el(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dvx(null,q,u,t,v,s));++q}return r},
azn(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$azn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kq(d),$async$azn)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.dm(t,new C.brD(),s).el(0)
p=r.dm(t,new C.brE(),s).el(0)
o=r.dm(t,new C.brF(),s).el(0)
n=r.dm(t,new C.brG(),s).el(0)
m=C.dvx(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kp(d,t),$async$azn)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$azn,v)},
Kp(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$Kp)
case 2:u=g
t=B.b.i(d)
s=J.aY(e,new C.bry(),x.P)
s=A.z(s,s.$ti.j("a5.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$Kp)
case 3:return A.h(null,v)}})
return A.i($async$Kp,v)},
e4L(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dvx(w,w,t,s,u,r)
return q},
dvx(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.l2(),h=d==null,g=D.a8z[B.l.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8z[B.l.a0(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.E(p,new C.brx(),A.Y(p).j("E<1,o>")).fM(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fM(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.ba(B.l.h_(i.bH(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a0(e,20)
k=D.c1C[w]
j=D.bTe[w]
return new C.oA("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.ba(B.l.q(e+1),2,"0"),u,k,C.e4M(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
e4M(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.ba(B.l.h_(d.bH(256),16),2,"0")
return B.h.fM(v)},
drv:function drv(d){this.a=d},
dru:function dru(d,e){this.a=d
this.b=e},
drq:function drq(d){this.a=d},
drr:function drr(d){this.a=d},
drs:function drs(d){this.a=d},
drt:function drt(d,e){this.a=d
this.b=e},
NW:function NW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oA:function oA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
brH:function brH(){},
brI:function brI(){},
brz:function brz(){},
brA:function brA(){},
brB:function brB(){},
brC:function brC(){},
brD:function brD(){},
brE:function brE(){},
brF:function brF(){},
brG:function brG(){},
bry:function bry(){},
brx:function brx(){},
Ko:function Ko(d,e){this.c=d
this.a=e},
ahD:function ahD(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cRx:function cRx(){},
cRw:function cRw(d,e){this.a=d
this.b=e},
cRu:function cRu(d){this.a=d},
cRv:function cRv(d,e){this.a=d
this.b=e},
cRy:function cRy(d){this.a=d},
cRD:function cRD(d){this.a=d},
cRC:function cRC(d){this.a=d},
cRE:function cRE(d,e){this.a=d
this.b=e},
cRB:function cRB(d,e,f){this.a=d
this.b=e
this.c=f},
cRA:function cRA(d,e){this.a=d
this.b=e},
cRz:function cRz(d,e){this.a=d
this.b=e},
cRF:function cRF(d){this.a=d},
Xw:function Xw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMI:function aMI(d,e){this.c=d
this.a=e},
Kn:function Kn(d,e){this.c=d
this.a=e},
aNW:function aNW(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cRr:function cRr(d){this.a=d},
cRs:function cRs(d){this.a=d},
cRt:function cRt(d){this.a=d},
cRq:function cRq(d,e){this.a=d
this.b=e},
cRn:function cRn(d){this.a=d},
cRo:function cRo(d){this.a=d},
cRm:function cRm(d,e){this.a=d
this.b=e},
cRp:function cRp(d){this.a=d},
cRl:function cRl(d){this.a=d},
aUY:function aUY(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aUZ:function aUZ(d,e,f){this.c=d
this.d=e
this.a=f},
aO1:function aO1(d,e){this.c=d
this.a=e},
aUX:function aUX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d5r:function d5r(d){this.a=d},
d5s:function d5s(d){this.a=d},
aPm:function aPm(d){this.a=d},
aIP:function aIP(d,e){this.c=d
this.a=e},
e4K(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e4J(v)
if(u!=null)return new C.qO(w,C.dvv(u,!1),D.ag9,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e4I(v)
if(t!=null)return new C.qO(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aga,"TikTok",q)
s=C.e4H(w,v)
if(s!=null)return s
r=C.e4G(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qO(w,w,D.cyu,"Video",q)
return q},
e4H(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dE(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qO(d,"https://www.instagram.com/reel/"+w+u,D.Pl,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dE(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qO(d,"https://www.instagram.com/p/"+w+u,D.Pl,t,null)}return null},
e4G(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qO(d,"https://www.facebook.com/plugins/video.php?href="+A.fd(2,d,B.bn,!1)+"&show_text=false&width=734",D.agb,"Facebook",null)},
e4J(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dE(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e4I(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dE(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dE(d)
return w==null?null:w.b[1]},
Kr:function Kr(d,e){this.a=d
this.b=e},
qO:function qO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7y:function a7y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aNX:function aNX(d,e){var _=this
_.d=$
_.cr$=d
_.aG$=e
_.c=_.a=null},
aPr:function aPr(d,e){this.c=d
this.a=e},
cVD:function cVD(d){this.a=d},
cVE:function cVE(d){this.a=d},
FP:function FP(d,e){this.c=d
this.a=e},
amQ:function amQ(){},
dHU(d,e,f,g,h,i){return new C.a7z(i,f,h,e,g,d)},
eoh(d){var w=window
w.toString
A.ht(w,"message",new C.dnK(d),!1,x._)},
a7z:function a7z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahE:function ahE(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cRG:function cRG(d){this.a=d},
cRP:function cRP(d){this.a=d},
cRM:function cRM(d){this.a=d},
cRL:function cRL(d){this.a=d},
cRN:function cRN(d){this.a=d},
cRK:function cRK(d){this.a=d},
cRO:function cRO(d){this.a=d},
cRJ:function cRJ(d){this.a=d},
cRI:function cRI(d){this.a=d},
cRH:function cRH(d){this.a=d},
dnK:function dnK(d){this.a=d},
e4C(){var w,v,u
try{v=A.xH()
w=v.gv_(v)
if(J.a8(w)!==0&&!J.w(w,"null")&&!J.cH(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dvv(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
brv(d){var w=A.ao(y.c,!0,!1,!1,!1).dE(d)
return w==null?null:w.b[1]},
dHP(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e4D(d,e,f){var w,v,u=C.brv(d)
if(u!=null){if(f){w=C.e4C()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dHP(C.dvv(u,e))}return C.dHP(d)},
e4E(d){if(d<=4)return 0
return B.l.aw(d-1,4)*4},
e4F(d){var w
if($.PN().a==null)return!1
w=$.GU().a
return d>=w&&d<w+4},
dHS(){var w=$.azm
if(w!=null)w.ab(0)
$.azm=null
$.GU().sv(0,0)},
dHR(){var w,v,u,t=$.PN()
if(t.a==null)return
w=$.azm
if(w!=null)w.ab(0)
v=$.dHQ
if(v<=4){t=t.a
t.toString
C.dvw(t)
return}w=$.GU()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dvw(t)},
dvw(d){var w=$.azm
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
default:w=null}$.azm=A.dC(A.de(0,0,0,0,0,w),C.eow())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NW.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.L(B.ac.k(0.25),B.u,1),r=A.W(this.d,B.ac,w,w,14)
return A.r(w,A.I(A.a([r,B.fA,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ck,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hj,w,w,w)}}
C.oA.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ko.prototype={
W(){return new C.ahD(A.a([],x.e))},
ge6(){return this.c}}
C.ahD.prototype={
a_(){var w=this
w.a4()
$.GU().av(0,w.gaz9())
C.eoh(w.gbqu())
w.ZZ()},
bpW(){if(this.c!=null)this.n(new C.cRx())},
bqv(){C.dHR()},
p(){$.GU().X(0,this.gaz9())
C.dHS()
$.PN().sv(0,null)
this.a3()},
ZZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kq(t.a.c),$async$ZZ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cRw(t,s))
$.brw=J.a8(s)
case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
VN(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cRu(t))
w=3
return A.b(C.azn(t.a.c),$async$VN)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cRv(t,s))
$.brw=J.a8(t.d)
t.c.H(x.q).f.T(A.bn(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$VN,v)},
bsw(d){var w=this.c
w.toString
A.a4(w,!1).cH(A.f_(new C.cRy(d),!1,null,x.H))},
bt9(){var w=this.c
w.toString
return C.a_j(w,J.a8(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fY:B.bA,s=A.bV(!0,A.v(A.a([new A.G(D.Yv,new A.je(new C.cRD(w),v),v),A.H(w.e?B.nF:new A.lt($.PN(),new C.cRE(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ad,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.at6(B.ac,B.I0,B.mQ,D.dfA,w.e?v:new C.cRF(w)),v)}}
C.Xw.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a6(0,B.G,B.ac.k(0.18),B.du,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7y(n,!0,!C.e4F(w),"Fold "+(B.l.aw(w,4)+1)+"/"+B.l.aw(v.e+4-1,4),u)
n=w}else n=A.r(u,A.v(A.a([A.W(B.k5,B.nO,u,u,22),B.aG,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aX,B.k,0,B.q),B.j,B.zX,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aA(!1,B.T,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.r(u,A.bU(p,A.f9(A.v(A.a([new C.aMI(o,u),A.H(n,1),A.r(u,A.I(A.a([A.W(B.Cv,B.ac.k(0.85),u,u,9),D.cNp,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.k,0,u,u),B.j,B.az,u,u,u,u,u,u,D.aH4,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.p(u,u,r,s,q,D.a1Q,B.p),u,u,u,u,B.hk,u,u,u),1),B.aG,A.d(o.b,u,1,B.at,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.at,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.at,u,u,u,A.l(u,u,B.ac.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a6)}}
C.aMI.prototype={
B(d){var w=null
return A.r(w,A.I(A.a([A.H(A.d(B.h.gac(this.c.c.split("-")),w,w,B.at,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tw,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.az,w,w,w,w,w,w,B.Yj,w,w,w)}}
C.Kn.prototype={
W(){return new C.aNW()}}
C.aNW.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fY:B.bA,t=A.aQ(w,w,w,w,B.a0X,w,w,w,new C.cRr(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bV(!0,A.v(A.a([new A.G(D.Yv,A.I(A.a([t,A.H(new A.Ke(A.I(A.a([A.H(new A.G(B.jo,A.d(s.b+" \xb7 "+s.c,w,1,B.at,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aA(!1,B.T,!0,w,A.aL(!1,w,!0,new A.G(B.be,A.W(B.ho,B.ac,w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cRs(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.H(new A.lt($.PN(),new C.cRt(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aUY.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.G,B.ac.k(0.35),B.fe,28),new A.a6(0,B.G,B.A.k(0.45),B.d3,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dHU(new A.d7(v+"_full_"+u,x.W),!1,u,!1,w.gaP0(),v+"_full")
w=v}else w=new C.aO1(t.r,s)}else w=new C.aIP(m,s)
else w=D.dmV
return A.r(s,A.bU(n,A.f9(A.v(A.a([new C.aUZ(m,l,s),A.H(w,1),new C.aUX(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.p(s,s,o,q,p,D.a1Q,B.p),s,r*2.05,s,s,B.bU,s,s,r)}}
C.aUZ.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dj(r)
r=A.h1(r)
w=new A.dJ(q,r)
v=w.gKe()===0?12:w.gKe()
r=B.b.ba(B.l.q(r),2,"0")
q=(q<12?B.hi:B.jj)===B.hi?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.I(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.np,s,s,s),B.b4,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bK,D.aSL,B.dQ,D.aRW,B.dQ,D.aSQ],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aG,A.I(A.a([A.W(B.Co,B.ac.k(0.9),s,s,12),B.dQ,A.H(A.d(u.c,s,s,B.at,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.r(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.az,s,s,s,s,s,s,D.aI7,s,s,s)}}
C.aO1.prototype={
B(d){var w=null
return A.r(w,A.aD(A.v(A.a([A.W(B.BO,B.e.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eV(D.aWj,D.d2T,this.c,A.ee(w,w,w,w,w,w,w,w,w,B.ac,w,w,w,w,w,new A.aH(B.ac.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.q),w,w,w),B.j,B.zX,w,w,w,w,w,w,w,w,w,1/0)}}
C.aUX.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.az0(B.Ch,"YouTube",s===0,r,new C.d5r(u))
s=u.az0(B.kP,"Device",s===1,r,new C.d5s(u))
w=r?"Power off":"Power on"
v=r?D.a06:D.aPX
return A.r(t,A.I(A.a([q,B.ah,s,B.b4,A.aQ(t,t,t,t,A.W(v,r?B.bM:B.hq,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.az,t,t,t,t,t,t,D.aHJ,t,t,t)},
az0(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bi
else w=f?B.ac:B.av
v=f&&g?B.ac.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aA(!1,B.T,!0,u,A.aL(!1,A.m(10),!0,new A.G(B.nZ,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a6),1)}}
C.aPm.prototype={
B(d){return D.awa}}
C.aIP.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ki,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tV("Serial",u.c),q=w.tV("Model",u.d),p=w.tV("Device ID",u.e),o=w.tV("IMEI",u.r),n=w.tV("MAC",u.f),m=w.tV("OS",u.w+" "+u.x),l=w.tV("Location",u.y+", "+u.z),k=w.tV("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tV("Timezone",u.at)
u=u.ax
return A.ed(A.a([t,B.aG,s,B.ae,r,q,p,o,n,m,l,k,j,w.tV("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.be,v,v,B.ao,!1)},
tV(d,e){var w=null
return new A.G(B.db,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cv,A.d(e,w,w,w,w,w,w,D.cUW,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.Kr.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qO.prototype={
gaP0(){var w=this.c
return w===D.ag9||w===D.aga||w===D.Pl||w===D.agb}}
C.a7y.prototype={
W(){return new C.aNX(null,null)}}
C.aNX.prototype={
a_(){this.a4()
var w=A.bf(null,B.rJ,null,1,null,this)
w.fY(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZf()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.p(t,t,t,t,t,new A.aa(B.bV,B.bP,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.ci(B.cL,p,t)
w=B.e.k(0.92)
q=A.aD(new A.cO(new A.b_(p,new A.bh(0.72,1,q),q.j("b_<bj.T>")),!1,A.W(B.k5,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nO
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aPr(s,t),r,q,A.az(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.az(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.az(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ay(B.ab,t,B.b7,B.t,s,t)}}
C.aPr.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l9(u,B.J,new C.cVD(this),B.bW,!0,w,w,new C.cVE(this),w)
return new C.FP(v,w)}}
C.FP.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aP(A.a([B.jd,B.Um],x.O),B.k5)
break
case 1:w=new A.aP(A.a([B.zX,D.aBp],x.O),B.lK)
break
case 2:w=new A.aP(A.a([D.aDa,D.aAP],x.O),B.BX)
break
case 3:w=new A.aP(A.a([B.X,B.dE],x.O),B.C4)
break
case 4:w=new A.aP(A.a([B.az,B.aL],x.O),B.tu)
break
default:w=u}v=w.a
return A.r(u,A.aD(A.W(w.b,B.ac.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.p(u,u,u,u,u,new A.aa(B.aA,B.aH,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amQ.prototype={
p(){var w=this,v=w.aG$
if(v!=null)v.X(0,w.gd0())
w.aG$=null
w.a3()},
bh(){this.bv()
this.bs()
this.d1()}}
C.a7z.prototype={
W(){return new C.ahE()}}
C.ahE.prototype={
a8Y(d,e){var w,v=C.brv(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dvv(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e4D(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bIM(){var w,v=this
if(v.w)return
v.n(new C.cRG(v))
w=v.e
if(w!=null)v.a8Y(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.GW()
$.q8().v9(w,new C.cRP(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bg(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cRI(v))
w=v.e
w.toString
v.a8Y(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0m,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.R,n,n)],v))
return A.f9(A.aD(new A.G(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a2F(n,B.uk,w)],v)
if(o.f)w.push(A.f9(A.aD(new A.a9(28,28,D.axp,n),n,n,n),B.cY,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bi,B.u,1)
q=A.W(B.Mn,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e3(0,A.aA(!1,B.T,!0,n,A.aL(!1,n,!0,A.aD(A.r(n,A.I(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,D.XQ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbIL(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a6)))}v=C.brv(o.a.d)
if(v!=null)w.push(A.az(8,A.jA(D.aUf,D.daL,new C.cRH(o),A.j5(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hj,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ay(B.ab,n,B.b7,B.t,w,n)}}
var z=a.updateTypes(["o(oA)","~()","Ko(P)","oA(Z<@,@>)","a0(oA)","Z<o,@>(oA)","aC<~>()","Kn(P)","lt<K>(P,qO?,q?)","Xw(P,K)","uk(P,qO?,q?)","FP(P,ap,dI?)"])
C.drv.prototype={
$1(d){return new C.Ko(this.a,null)},
$S:z+2}
C.dru.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.X],j):A.a([B.e,B.ax],j),h=A.a([new A.a6(0,B.G,B.ac.k(0.22),B.fe,32)],x.V),g=A.L(m?B.cg:B.ac.k(0.18),B.u,1),f=A.m(28),e=B.ac.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.r(n,D.aRE,B.j,n,n,new A.p(B.ac.k(0.18),n,A.L(B.ac.k(0.45),B.u,1),n,n,n,B.ak),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aG,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.r(n,A.I(A.a([e,B.f5,w,A.aQ(n,n,n,n,A.W(B.cZ,m?B.av:B.cY,n,n,n),n,n,n,new C.drq(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.p(n,n,n,n,n,new A.aa(B.a1,B.a5,B.E,j,n,n),B.p),n,n,n,n,B.Ko,n,n,n)
e=A.ey(B.cQ,A.a([new C.NW("YouTube",B.Mk,m,n),new C.NW("TikTok",B.lK,m,n),new C.NW("Instagram",B.BX,m,n),new C.NW("Facebook",B.C4,m,n)],v),B.cF,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ch:B.je,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.W(B.fv,B.ac.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cg:B.aN
u=A.v(A.a([e,B.aU,A.aM(n,B.Q,!0,n,!0,B.t,n,A.aN(),w,n,n,n,n,n,2,A.bo(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Ta),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.a9,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a_,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.as,n,B.i,B.k,0,B.q)
e=A.jA(D.aRH,D.deD,new C.drr(d),A.j5(n,n,n,n,n,n,n,n,n,n,n,m?B.bw:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.R(12,0,12,12+l.f.d),A.cz(A.bU(f,A.v(A.a([j,new A.G(B.Y4,u,n),new A.G(D.aJw,A.I(A.a([e,B.b4,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.drs(d),n,n),B.ah,A.dV(D.aW_,D.dfs,new C.drt(d,w),A.bw(B.ac,n,n,n,B.e,n,D.XQ,n,new A.bz(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.as,n,B.i,B.Z,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.aa(B.aA,B.aH,B.E,i,n,n),B.p),B.br),n)},
$S:85}
C.drq.prototype={
$0(){A.a4(this.a,!1).R(null)
return null},
$S:0}
C.drr.prototype={
$0(){C.dHS()
$.PN().sv(0,null)
A.a4(this.a,!1).R(null)},
$S:0}
C.drs.prototype={
$0(){A.a4(this.a,!1).R(null)
return null},
$S:0}
C.drt.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a4(this.a,!1).R(w)
return null},
$S:0}
C.brH.prototype={
$1(d){return C.dHT(A.T(d,x.N,x.z))},
$S:z+3}
C.brI.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brz.prototype={
$1(d){return d.c},
$S:z+0}
C.brA.prototype={
$1(d){return d.r},
$S:z+0}
C.brB.prototype={
$1(d){return d.f},
$S:z+0}
C.brC.prototype={
$1(d){return d.at},
$S:z+0}
C.brD.prototype={
$1(d){return d.c},
$S:z+0}
C.brE.prototype={
$1(d){return d.r},
$S:z+0}
C.brF.prototype={
$1(d){return d.f},
$S:z+0}
C.brG.prototype={
$1(d){return d.at},
$S:z+0}
C.bry.prototype={
$1(d){return d.a9()},
$S:z+5}
C.brx.prototype={
$1(d){return B.b.ba(B.l.h_(d,16),2,"0").toUpperCase()},
$S:88}
C.cRx.prototype={
$0(){},
$S:0}
C.cRw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cRu.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cRv.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cRy.prototype={
$1(d){return new C.Kn(this.a,null)},
$S:z+7}
C.cRD.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,B.q5,w,w,w,new C.cRC(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a8(u.d)+")",s=x.p
return A.I(A.a([v,A.H(A.fP(A.I(A.a([new A.oy(D.xq,e,g,36,B.Co,w),B.aR,A.H(A.d(t,w,1,B.at,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fI(B.h.gM(D.xq).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aA(!1,B.T,!0,w,A.aL(!1,w,!0,new A.G(B.bU,A.W(B.ho,A.an(B.h.gM(D.xq),B.h.gac(D.xq),e),w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbt8(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.k,0,w,w),D.xq,w,g,B.fb,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:312}
C.cRC.prototype={
$0(){return A.a4(this.a,!1).ez()},
$S:0}
C.cRE.prototype={
$3(d,e,f){return new A.lt($.GU(),new C.cRB(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cRB.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DG(d,k,x.Q)
w=w==null?k:w.glK()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ac.k(0.12)
s=A.m(12)
r=A.L(B.ac.k(0.35),B.u,1)
q=A.W(B.k5,B.ac,k,k,18)
p=j.d
o=J.a8(l.a.d)
n=$.GU().a
m=B.m.U(n+4,1,o)
t=A.a([A.r(k,A.I(A.a([q,B.ah,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dn,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bU(s,new A.iX(1.7777777777777777,C.dHU(new A.d7("fleet_master_"+r,x.W),!0,r,!0,j.gaP0(),"fleet_master"),k),B.aB),B.ae],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a8(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wc(0,B.t,k,B.F,k,k,k,k,!1,k,B.ao,!1,A.a([new A.kS(new A.G(B.Ke,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oL(D.aHf,A.aDs(new A.nX(new C.cRA(i,j),J.a8(i.d),!1,!0,!0,A.tN(),k),D.cOg),k)],w))},
$S:1762}
C.cRA.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xw(v,e,J.a8(w.d),new C.cRz(w,v),this.b,null)},
$S:z+9}
C.cRz.prototype={
$0(){return this.a.bsw(this.b)},
$S:0}
C.cRF.prototype={
$0(){this.a.VN()
return null},
$S:0}
C.cRr.prototype={
$0(){return A.a4(this.a,!1).ez()},
$S:0}
C.cRs.prototype={
$0(){C.a_j(this.a,$.brw)
return null},
$S:0}
C.cRt.prototype={
$3(d,e,f){return A.eO(new C.cRq(this.a,e))},
$S:z+10}
C.cRq.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aD(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.R,v,v),B.aU,new C.aUY(u,s.a.c,s.e,s.d,new C.cRn(s),new C.cRo(s),new C.cRp(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.t,v,B.F,v,B.pD,v,v,B.ao),v,v,v)},
$S:1763}
C.cRn.prototype={
$0(){var w=this.a.c
w.toString
C.a_j(w,$.brw)
return null},
$S:0}
C.cRo.prototype={
$1(d){var w=this.a
return w.n(new C.cRm(w,d))},
$S:31}
C.cRm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cRp.prototype={
$0(){var w=this.a
return w.n(new C.cRl(w))},
$S:0}
C.cRl.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d5r.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d5s.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cVD.prototype={
$3(d,e,f){return new C.FP(this.a.c,null)},
$S:z+11}
C.cVE.prototype={
$3(d,e,f){if(f==null)return e
return new A.ay(B.ab,null,B.b7,B.t,A.a([new C.FP(this.a.c,null),D.awu],x.p),null)},
$C:"$3",
$R:3,
$S:493}
C.cRG.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cRP.prototype={
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
w.a8Y(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.ht(v,"load",new C.cRM(w),!1,u)
v=w.e
v.toString
A.ht(v,"error",new C.cRN(w),!1,u)
A.bM(B.kK,new C.cRO(w),x.H)
w=w.e
w.toString
return w},
$S:416}
C.cRM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cRL(w))},
$S:47}
C.cRL.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cRN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cRK(w))},
$S:47}
C.cRK.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cRO.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cRJ(w))},
$S:12}
C.cRJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cRI.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cRH.prototype={
$0(){var w,v=C.brv(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nw.Tv(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dnK.prototype={
$1(d){var w,v,u,t,s=new A.Fm([],[]).Jt(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1764};(function aliases(){var w=C.amQ.prototype
w.aZf=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahD.prototype,"gaz9","bpW",1)
w(u,"gbqu","bqv",1)
w(u,"gbt8","bt9",6)
w(C.ahE.prototype,"gbIL","bIM",1)
v(C,"eow","dHR",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yW,[C.drv,C.dru,C.brH,C.brI,C.brz,C.brA,C.brB,C.brC,C.brD,C.brE,C.brF,C.brG,C.bry,C.brx,C.cRy,C.cRD,C.cRE,C.cRB,C.cRt,C.cRo,C.cVD,C.cVE,C.cRP,C.cRM,C.cRN,C.dnK])
v(A.a0M,[C.drq,C.drr,C.drs,C.drt,C.cRx,C.cRw,C.cRu,C.cRv,C.cRC,C.cRz,C.cRF,C.cRr,C.cRs,C.cRn,C.cRm,C.cRp,C.cRl,C.d5r,C.d5s,C.cRG,C.cRL,C.cRK,C.cRO,C.cRJ,C.cRI,C.cRH])
v(A.at,[C.NW,C.Xw,C.aMI,C.aUY,C.aUZ,C.aO1,C.aUX,C.aPm,C.aIP,C.aPr,C.FP])
v(A.ap,[C.oA,C.qO])
v(A.ad,[C.Ko,C.Kn,C.a7y,C.a7z])
v(A.af,[C.ahD,C.aNW,C.amQ,C.ahE])
v(A.a0N,[C.cRA,C.cRq])
u(C.Kr,A.aJJ)
u(C.aNX,C.amQ)
w(C.amQ,A.dF)})()
A.dLn(b.typeUniverse,JSON.parse('{"Ko":{"ad":[],"q":[]},"Xw":{"at":[],"q":[]},"Kn":{"ad":[],"q":[]},"NW":{"at":[],"q":[]},"ahD":{"af":["Ko"]},"aMI":{"at":[],"q":[]},"aNW":{"af":["Kn"]},"aUY":{"at":[],"q":[]},"aUZ":{"at":[],"q":[]},"aO1":{"at":[],"q":[]},"aUX":{"at":[],"q":[]},"aPm":{"at":[],"q":[]},"aIP":{"at":[],"q":[]},"a7y":{"ad":[],"q":[]},"FP":{"at":[],"q":[]},"aNX":{"af":["a7y"]},"aPr":{"at":[],"q":[]},"a7z":{"ad":[],"q":[]},"ahE":{"af":["a7z"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a6>"),O:w("a3<x>"),e:w("a3<oA>"),S:w("a3<fI>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ag<oA>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ot"),_:w("DD"),k:w("oA"),N:w("o"),Y:w("bh<a2>"),W:w("d7<o>"),J:w("lt<K>"),j:w("lt<qO?>"),E:w("vh<cT>"),q:w("Yn"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a06=new A.N(983224,"MaterialIcons",!1)
D.aUm=new A.ab(D.a06,48,B.bi,null,null,null)
D.d1Q=new A.B("Powered off",null,B.ant,null,null,null,null,null,null,null,null,null)
D.bQg=w([D.aUm,B.N,D.d1Q],x.p)
D.aEy=new A.eE(B.ao,B.i,B.Z,B.n,null,B.q,null,0,D.bQg,null)
D.awa=new A.d4(B.J,null,null,D.aEy,null)
D.cNU=new A.a9(18,18,B.U4,null)
D.awu=new A.d4(B.J,null,null,D.cNU,null)
D.axp=new A.fV(2,null,null,null,null,B.aa,null,null,null,null)
D.aAP=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBp=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDa=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aH4=new A.R(0,3,0,3)
D.aHf=new A.R(10,0,10,88)
D.aHJ=new A.R(12,6,12,10)
D.aI7=new A.R(14,8,14,6)
D.XQ=new A.R(18,12,18,12)
D.aJw=new A.R(20,8,20,20)
D.Yv=new A.R(8,6,15,8)
D.aPX=new A.N(983222,"MaterialIcons",!1)
D.aRE=new A.ab(B.k5,26,B.ac,null,null,null)
D.aRH=new A.ab(B.a_a,18,null,null,null,null)
D.aRW=new A.ab(B.tw,14,B.aa,null,null,null)
D.aQh=new A.N(983420,"MaterialIcons",!1)
D.aSL=new A.ab(D.aQh,14,B.aa,null,null,null)
D.aOk=new A.N(62895,"MaterialIcons",!1)
D.aSQ=new A.ab(D.aOk,14,B.aa,null,null,null)
D.aUf=new A.ab(B.to,16,B.aa,null,null,null)
D.aW_=new A.ab(B.iV,20,null,null,null,null)
D.aWj=new A.ab(B.ho,16,null,null,null,null)
D.bU1=w([B.aL,B.X],x.O)
D.a1Q=new A.aa(B.aA,B.aH,B.E,D.bU1,null,null)
D.cHk=new A.aP("NGMY OS","14.2.1")
D.cG3=new A.aP("VirtualDroid","13.8.4")
D.cG2=new A.aP("NGMY OS","15.0.0")
D.cGR=new A.aP("VirtualDroid","14.1.2")
D.cG0=new A.aP("NGMY Tab OS","12.9.7")
D.cFZ=new A.aP("NGMY OS","13.5.3")
D.cFO=new A.aP("VirtualDroid","15.2.0")
D.cGq=new A.aP("NGMY OS","14.8.1")
D.cGX=new A.aP("NGMY Tab OS","13.2.4")
D.cHw=new A.aP("VirtualDroid","12.6.9")
D.cFJ=new A.aP("NGMY OS","16.0.1")
D.cFA=new A.aP("VirtualDroid","14.9.0")
D.cHb=new A.aP("NGMY Tab OS","14.0.3")
D.cGc=new A.aP("NGMY OS","13.1.8")
D.cFI=new A.aP("VirtualDroid","13.4.5")
D.cFY=new A.aP("NGMY OS","15.3.2")
D.cGY=new A.aP("NGMY Tab OS","12.4.1")
D.cHe=new A.aP("VirtualDroid","16.1.0")
D.cGp=new A.aP("NGMY OS","14.4.6")
D.cHl=new A.aP("VirtualDroid","15.0.8")
D.bTe=w([D.cHk,D.cG3,D.cG2,D.cGR,D.cG0,D.cFZ,D.cFO,D.cGq,D.cGX,D.cHw,D.cFJ,D.cFA,D.cHb,D.cGc,D.cFI,D.cFY,D.cGY,D.cHe,D.cGp,D.cHl],A.b4("a3<+(o,o)>"))
D.xq=w([B.ac,B.fm],x.O)
D.cJC=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJa=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJ5=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJe=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJ1=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJg=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cJE=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJ2=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJ9=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJi=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJ0=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cJw=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJt=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJ8=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJq=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJp=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJ_=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJd=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJn=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJs=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8z=w([D.cJC,D.cJa,D.cJ5,D.cJe,D.cJ1,D.cJg,D.cJE,D.cJ2,D.cJ9,D.cJi,D.cJ0,D.cJw,D.cJt,D.cJ8,D.cJq,D.cJp,D.cJ_,D.cJd,D.cJn,D.cJs],A.b4("a3<+(o,o,a2,a2,o)>"))
D.c1C=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ag9=new C.Kr(0,"youtube")
D.aga=new C.Kr(1,"tiktok")
D.Pl=new C.Kr(2,"instagram")
D.agb=new C.Kr(3,"facebook")
D.cyu=new C.Kr(4,"other")
D.cNp=new A.a9(3,null,null,null)
D.cOg=new A.hE(4,10,8,0.52,null)
D.d32=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cRB=new A.aX(D.d32,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.t,null)
D.cUW=new A.M(!0,B.e,null,null,null,null,11,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d2T=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.daL=new A.B("Open in YouTube",null,B.j6,null,null,null,null,null,null,null,null,null)
D.deD=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dfs=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dfA=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dmV=new C.aPm(null)})();(function staticFields(){$.dHQ=20
$.azm=null
$.brw=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"etr","GU",()=>A.abW(0))
w($,"ets","PN",()=>A.abW(null))})()};
(a=>{a["UKOqL89Ob8Rp/8RbKxPqZNkGIsQ="]=a.current})($__dart_deferred_initializers__);