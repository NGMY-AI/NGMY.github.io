((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eqr(d,e){A.a3(d,!1).cH(A.f_(new C.dse(e),!0,null,x.H))},
a_l(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PR()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.am(new A.bb(n,B.aO,B.aC),t)
w=3
return A.b(A.dy(B.L,new C.dsd(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_l)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e5w(r)
if(q==null){d.H(x.q).f.T(D.cRH)
w=1
break}w=4
return A.b(A.bM(B.ie,null,x.H),$async$a_l)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dIB=n
p=C.e5q(n)
n=$.GV()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dwf(q)
d.H(x.q).f.T(A.bn(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_l,v)},
dIE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
Ks(d){return C.e5z(d)},
e5z(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ks=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$Ks)
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
k=A.dp(k,new C.brV(),k.$ti.j("F.E"),x.k)
j=A.S(k).j("ai<F.E>")
i=A.y(new A.ai(k,new C.brW(),j),j.j("F.E"))
q=i
if(J.a8(q)>=20){u=q
w=1
break}p=C.dIG(q)
w=12
return A.b(C.Kr(a3,p),$async$Ks)
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
case 19:m=C.dIE(A.T(n,x.N,x.z))
l=C.dIG(A.a([m],x.e))
w=21
return A.b(C.Kr(a3,l),$async$Ks)
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
case 18:case 14:q=C.e5x()
w=22
return A.b(C.Kr(a3,q),$async$Ks)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ks,v)},
dIG(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.brN(),w).ej(0),u=new A.D(d,new C.brO(),w).ej(0),t=new A.D(d,new C.brP(),w).ej(0),s=new A.D(d,new C.brQ(),w).ej(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dwg(null,q,u,t,v,s));++q}return r},
azu(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$azu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ks(d),$async$azu)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.dl(t,new C.brR(),s).ej(0)
p=r.dl(t,new C.brS(),s).ej(0)
o=r.dl(t,new C.brT(),s).ej(0)
n=r.dl(t,new C.brU(),s).ej(0)
m=C.dwg(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kr(d,t),$async$azu)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$azu,v)},
Kr(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$Kr)
case 2:u=g
t=B.b.i(d)
s=J.aY(e,new C.brM(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$Kr)
case 3:return A.h(null,v)}})
return A.i($async$Kr,v)},
e5x(){var w,v=x.N,u=A.ba(v),t=A.ba(v),s=A.ba(v),r=A.ba(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dwg(w,w,t,s,u,r)
return q},
dwg(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.l3(),h=d==null,g=D.a8C[B.l.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8C[B.l.a0(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.brL(),A.W(p).j("D<1,o>")).fM(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fM(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.ba(B.l.h0(i.bG(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a0(e,20)
k=D.c1G[w]
j=D.bTi[w]
return new C.oA("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.ba(B.l.q(e+1),2,"0"),u,k,C.e5y(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a1())},
e5y(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.ba(B.l.h0(d.bG(256),16),2,"0")
return B.h.fM(v)},
dse:function dse(d){this.a=d},
dsd:function dsd(d,e){this.a=d
this.b=e},
ds9:function ds9(d){this.a=d},
dsa:function dsa(d){this.a=d},
dsb:function dsb(d){this.a=d},
dsc:function dsc(d,e){this.a=d
this.b=e},
NY:function NY(d,e,f,g){var _=this
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
brV:function brV(){},
brW:function brW(){},
brN:function brN(){},
brO:function brO(){},
brP:function brP(){},
brQ:function brQ(){},
brR:function brR(){},
brS:function brS(){},
brT:function brT(){},
brU:function brU(){},
brM:function brM(){},
brL:function brL(){},
Kq:function Kq(d,e){this.c=d
this.a=e},
ahG:function ahG(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cS0:function cS0(){},
cS_:function cS_(d,e){this.a=d
this.b=e},
cRY:function cRY(d){this.a=d},
cRZ:function cRZ(d,e){this.a=d
this.b=e},
cS1:function cS1(d){this.a=d},
cS6:function cS6(d){this.a=d},
cS5:function cS5(d){this.a=d},
cS7:function cS7(d,e){this.a=d
this.b=e},
cS4:function cS4(d,e,f){this.a=d
this.b=e
this.c=f},
cS3:function cS3(d,e){this.a=d
this.b=e},
cS2:function cS2(d,e){this.a=d
this.b=e},
cS8:function cS8(d){this.a=d},
Xz:function Xz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMP:function aMP(d,e){this.c=d
this.a=e},
Kp:function Kp(d,e){this.c=d
this.a=e},
aO2:function aO2(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cRV:function cRV(d){this.a=d},
cRW:function cRW(d){this.a=d},
cRX:function cRX(d){this.a=d},
cRU:function cRU(d,e){this.a=d
this.b=e},
cRR:function cRR(d){this.a=d},
cRS:function cRS(d){this.a=d},
cRQ:function cRQ(d,e){this.a=d
this.b=e},
cRT:function cRT(d){this.a=d},
cRP:function cRP(d){this.a=d},
aV4:function aV4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aV5:function aV5(d,e,f){this.c=d
this.d=e
this.a=f},
aO8:function aO8(d,e){this.c=d
this.a=e},
aV3:function aV3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d6a:function d6a(d){this.a=d},
d6b:function d6b(d){this.a=d},
aPt:function aPt(d){this.a=d},
aIW:function aIW(d,e){this.c=d
this.a=e},
e5w(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e5v(v)
if(u!=null)return new C.qP(w,C.dwe(u,!1),D.agc,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e5u(v)
if(t!=null)return new C.qP(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agd,"TikTok",q)
s=C.e5t(w,v)
if(s!=null)return s
r=C.e5s(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qP(w,w,D.cyx,"Video",q)
return q},
e5t(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dF(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qP(d,"https://www.instagram.com/reel/"+w+u,D.Pn,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dF(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qP(d,"https://www.instagram.com/p/"+w+u,D.Pn,t,null)}return null},
e5s(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qP(d,"https://www.facebook.com/plugins/video.php?href="+A.fd(2,d,B.bn,!1)+"&show_text=false&width=734",D.age,"Facebook",null)},
e5v(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dF(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e5u(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dF(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dF(d)
return w==null?null:w.b[1]},
Kt:function Kt(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7B:function a7B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aO3:function aO3(d,e){var _=this
_.d=$
_.cr$=d
_.aG$=e
_.c=_.a=null},
aPy:function aPy(d,e){this.c=d
this.a=e},
cW6:function cW6(d){this.a=d},
cW7:function cW7(d){this.a=d},
FQ:function FQ(d,e){this.c=d
this.a=e},
amU:function amU(){},
dIF(d,e,f,g,h,i){return new C.a7C(i,f,h,e,g,d)},
ep4(d){var w=window
w.toString
A.hu(w,"message",new C.dot(d),!1,x._)},
a7C:function a7C(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahH:function ahH(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cS9:function cS9(d){this.a=d},
cSi:function cSi(d){this.a=d},
cSf:function cSf(d){this.a=d},
cSe:function cSe(d){this.a=d},
cSg:function cSg(d){this.a=d},
cSd:function cSd(d){this.a=d},
cSh:function cSh(d){this.a=d},
cSc:function cSc(d){this.a=d},
cSb:function cSb(d){this.a=d},
cSa:function cSa(d){this.a=d},
dot:function dot(d){this.a=d},
e5o(){var w,v,u
try{v=A.xL()
w=v.gv1(v)
if(J.a8(w)!==0&&!J.w(w,"null")&&!J.cH(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dwe(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
brJ(d){var w=A.ao(y.c,!0,!1,!1,!1).dF(d)
return w==null?null:w.b[1]},
dIA(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e5p(d,e,f){var w,v,u=C.brJ(d)
if(u!=null){if(f){w=C.e5o()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dIA(C.dwe(u,e))}return C.dIA(d)},
e5q(d){if(d<=4)return 0
return B.l.aw(d-1,4)*4},
e5r(d){var w
if($.PR().a==null)return!1
w=$.GV().a
return d>=w&&d<w+4},
dID(){var w=$.azt
if(w!=null)w.ab(0)
$.azt=null
$.GV().sv(0,0)},
dIC(){var w,v,u,t=$.PR()
if(t.a==null)return
w=$.azt
if(w!=null)w.ab(0)
v=$.dIB
if(v<=4){t=t.a
t.toString
C.dwf(t)
return}w=$.GV()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dwf(t)},
dwf(d){var w=$.azt
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
default:w=null}$.azt=A.dC(A.de(0,0,0,0,0,w),C.epk())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NY.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.L(B.ac.k(0.25),B.u,1),r=A.X(this.d,B.ac,w,w,14)
return A.r(w,A.I(A.a([r,B.fA,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ck,w,w,w,w,w,w,w,w,11,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.j,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hj,w,w,w)}}
C.oA.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kq.prototype={
W(){return new C.ahG(A.a([],x.e))},
ge6(){return this.c}}
C.ahG.prototype={
a_(){var w=this
w.a4()
$.GV().av(0,w.gazd())
C.ep4(w.gbqC())
w.a_3()},
bq3(){if(this.c!=null)this.n(new C.cS0())},
bqD(){C.dIC()},
p(){$.GV().X(0,this.gazd())
C.dID()
$.PR().sv(0,null)
this.a3()},
a_3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ks(t.a.c),$async$a_3)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cS_(t,s))
$.brK=J.a8(s)
case 1:return A.h(u,v)}})
return A.i($async$a_3,v)},
VR(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cRY(t))
w=3
return A.b(C.azu(t.a.c),$async$VR)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cRZ(t,s))
$.brK=J.a8(t.d)
t.c.H(x.q).f.T(A.bn(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$VR,v)},
bsE(d){var w=this.c
w.toString
A.a3(w,!1).cH(A.f_(new C.cS1(d),!1,null,x.H))},
bth(){var w=this.c
w.toString
return C.a_l(w,J.a8(this.d))},
B(d){var w=this,v=null,u=A.E(d).ax.a===B.D,t=u?B.fZ:B.bA,s=A.bU(!0,A.v(A.a([new A.G(D.Yy,new A.je(new C.cS6(w),v),v),A.H(w.e?B.nG:new A.lu($.PR(),new C.cS7(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ad,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.atc(B.ac,B.I0,B.mT,D.dfP,w.e?v:new C.cS8(w)),v)}}
C.Xz.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a6(0,B.G,B.ac.k(0.18),B.dv,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7B(n,!0,!C.e5r(w),"Fold "+(B.l.aw(w,4)+1)+"/"+B.l.aw(v.e+4-1,4),u)
n=w}else n=A.r(u,A.v(A.a([A.X(B.k5,B.nP,u,u,22),B.aH,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aX,B.k,0,B.q),B.j,B.zX,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aA(!1,B.T,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.r(u,A.bV(p,A.f9(A.v(A.a([new C.aMP(o,u),A.H(n,1),A.r(u,A.I(A.a([A.X(B.Cv,B.ac.k(0.85),u,u,9),D.cNs,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.k,0,u,u),B.j,B.az,u,u,u,u,u,u,D.aH8,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.p(u,u,r,s,q,D.a1T,B.p),u,u,u,u,B.hk,u,u,u),1),B.aH,A.d(o.b,u,1,B.at,u,u,u,A.l(u,u,A.E(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.at,u,u,u,A.l(u,u,A.E(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.at,u,u,u,A.l(u,u,B.ac.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a5)}}
C.aMP.prototype={
B(d){var w=null
return A.r(w,A.I(A.a([A.H(A.d(B.h.gac(this.c.c.split("-")),w,w,B.at,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.tx,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.az,w,w,w,w,w,w,B.Ym,w,w,w)}}
C.Kp.prototype={
W(){return new C.aO2()}}
C.aO2.prototype={
B(d){var w=null,v=A.E(d).ax.a===B.D,u=v?B.fZ:B.bA,t=A.aQ(w,w,w,w,B.a1_,w,w,w,new C.cRV(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bU(!0,A.v(A.a([new A.G(D.Yy,A.I(A.a([t,A.H(new A.Kg(A.I(A.a([A.H(new A.G(B.jp,A.d(s.b+" \xb7 "+s.c,w,1,B.at,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aA(!1,B.T,!0,w,A.aL(!1,w,!0,new A.G(B.be,A.X(B.ho,B.ac,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cRW(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.H(new A.lu($.PR(),new C.cRX(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aV4.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.G,B.ac.k(0.35),B.fe,28),new A.a6(0,B.G,B.A.k(0.45),B.d3,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dIF(new A.d7(v+"_full_"+u,x.W),!1,u,!1,w.gaP4(),v+"_full")
w=v}else w=new C.aO8(t.r,s)}else w=new C.aIW(m,s)
else w=D.dna
return A.r(s,A.bV(n,A.f9(A.v(A.a([new C.aV5(m,l,s),A.H(w,1),new C.aV3(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.p(s,s,o,q,p,D.a1T,B.p),s,r*2.05,s,s,B.bU,s,s,r)}}
C.aV5.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dj(r)
r=A.h1(r)
w=new A.dJ(q,r)
v=w.gKh()===0?12:w.gKh()
r=B.b.ba(B.l.q(r),2,"0")
q=(q<12?B.hi:B.jk)===B.hi?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.I(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nq,s,s,s),B.b4,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bK,D.aSO,B.dQ,D.aRZ,B.dQ,D.aST],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aH,A.I(A.a([A.X(B.Co,B.ac.k(0.9),s,s,12),B.dQ,A.H(A.d(u.c,s,s,B.at,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.r(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.az,s,s,s,s,s,s,D.aIb,s,s,s)}}
C.aO8.prototype={
B(d){var w=null
return A.r(w,A.aD(A.v(A.a([A.X(B.BO,B.e.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eQ(D.aWn,D.d2Z,this.c,A.ea(w,w,w,w,w,w,w,w,w,B.ac,w,w,w,w,w,new A.aG(B.ac.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.j,B.zX,w,w,w,w,w,w,w,w,w,1/0)}}
C.aV3.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.az4(B.Ch,"YouTube",s===0,r,new C.d6a(u))
s=u.az4(B.kP,"Device",s===1,r,new C.d6b(u))
w=r?"Power off":"Power on"
v=r?D.a09:D.aQ_
return A.r(t,A.I(A.a([q,B.ah,s,B.b4,A.aQ(t,t,t,t,A.X(v,r?B.bN:B.hq,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.az,t,t,t,t,t,t,D.aHN,t,t,t)},
az4(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bh
else w=f?B.ac:B.av
v=f&&g?B.ac.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aA(!1,B.T,!0,u,A.aL(!1,A.m(10),!0,new A.G(B.o_,A.v(A.a([A.X(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.Q,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a5),1)}}
C.aPt.prototype={
B(d){return D.awe}}
C.aIW.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ki,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tY("Serial",u.c),q=w.tY("Model",u.d),p=w.tY("Device ID",u.e),o=w.tY("IMEI",u.r),n=w.tY("MAC",u.f),m=w.tY("OS",u.w+" "+u.x),l=w.tY("Location",u.y+", "+u.z),k=w.tY("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tY("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aH,s,B.ae,r,q,p,o,n,m,l,k,j,w.tY("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.be,v,v,B.an,!1)},
tY(d,e){var w=null
return new A.G(B.db,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cw,A.d(e,w,w,w,w,w,w,D.cV1,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.Kt.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qP.prototype={
gaP4(){var w=this.c
return w===D.agc||w===D.agd||w===D.Pn||w===D.age}}
C.a7B.prototype={
W(){return new C.aO3(null,null)}}
C.aO3.prototype={
a_(){this.a4()
var w=A.bf(null,B.rL,null,1,null,this)
w.fZ(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZk()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.p(t,t,t,t,t,new A.aa(B.bV,B.bM,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.ci(B.cL,p,t)
w=B.e.k(0.92)
q=A.aD(new A.cO(new A.b_(p,new A.bh(0.72,1,q),q.j("b_<bl.T>")),!1,A.X(B.k5,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nP
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aPy(s,t),r,q,A.az(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.az(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.az(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ay(B.ab,t,B.b7,B.r,s,t)}}
C.aPy.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.la(u,B.J,new C.cW6(this),B.bW,!0,w,w,new C.cW7(this),w)
return new C.FQ(v,w)}}
C.FQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aP(A.a([B.je,B.Uo],x.O),B.k5)
break
case 1:w=new A.aP(A.a([B.zX,D.aBt],x.O),B.lL)
break
case 2:w=new A.aP(A.a([D.aDe,D.aAT],x.O),B.BX)
break
case 3:w=new A.aP(A.a([B.X,B.dF],x.O),B.C4)
break
case 4:w=new A.aP(A.a([B.az,B.aL],x.O),B.tv)
break
default:w=u}v=w.a
return A.r(u,A.aD(A.X(w.b,B.ac.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.p(u,u,u,u,u,new A.aa(B.aA,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amU.prototype={
p(){var w=this,v=w.aG$
if(v!=null)v.X(0,w.gd0())
w.aG$=null
w.a3()},
bi(){this.bv()
this.bs()
this.d1()}}
C.a7C.prototype={
W(){return new C.ahH()}}
C.ahH.prototype={
a91(d,e){var w,v=C.brJ(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dwe(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e5p(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bIV(){var w,v=this
if(v.w)return
v.n(new C.cS9(v))
w=v.e
if(w!=null)v.a91(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.GX()
$.q9().vb(w,new C.cSi(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bh(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cSb(v))
w=v.e
w.toString
v.a91(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.a0p,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.f9(A.aD(new A.G(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a2H(n,B.um,w)],v)
if(o.f)w.push(A.f9(A.aD(new A.a9(28,28,D.axt,n),n,n,n),B.cY,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bh,B.u,1)
q=A.X(B.Mn,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e5(0,A.aA(!1,B.T,!0,n,A.aL(!1,n,!0,A.aD(A.r(n,A.I(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.Q,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.j,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,D.XS,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbIU(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a5)))}v=C.brJ(o.a.d)
if(v!=null)w.push(A.az(8,A.jA(D.aUi,D.daY,new C.cSa(o),A.j6(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hj,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ay(B.ab,n,B.b7,B.r,w,n)}}
var z=a.updateTypes(["o(oA)","~()","Kq(P)","oA(Z<@,@>)","a0(oA)","Z<o,@>(oA)","aB<~>()","Kp(P)","lu<K>(P,qP?,q?)","Xz(P,K)","ul(P,qP?,q?)","FQ(P,ap,dI?)"])
C.dse.prototype={
$1(d){return new C.Kq(this.a,null)},
$S:z+2}
C.dsd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.E(d).ax.a===B.D,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.ei,B.X],j):A.a([B.e,B.ax],j),h=A.a([new A.a6(0,B.G,B.ac.k(0.22),B.fe,32)],x.V),g=A.L(m?B.cg:B.ac.k(0.18),B.u,1),f=A.m(28),e=B.ac.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.r(n,D.aRH,B.j,n,n,new A.p(B.ac.k(0.18),n,A.L(B.ac.k(0.45),B.u,1),n,n,n,B.ak),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aH,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ao,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.r(n,A.I(A.a([e,B.f5,w,A.aQ(n,n,n,n,A.X(B.cZ,m?B.av:B.cY,n,n,n),n,n,n,new C.ds9(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.p(n,n,n,n,n,new A.aa(B.a1,B.a6,B.E,j,n,n),B.p),n,n,n,n,B.Ko,n,n,n)
e=A.ey(B.cR,A.a([new C.NY("YouTube",B.Mk,m,n),new C.NY("TikTok",B.lL,m,n),new C.NY("Instagram",B.BX,m,n),new C.NY("Facebook",B.C4,m,n)],v),B.cH,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ch:B.jf,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.X(B.fv,B.ac.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cg:B.aN
u=A.v(A.a([e,B.aU,A.aM(n,B.R,!0,n,!0,B.r,n,A.aN(),w,n,n,n,n,n,2,A.bo(n,new A.b8(4,q,B.Y),n,n,n,n,n,n,!0,new A.b8(4,p,new A.aG(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b8(4,A.m(16),B.Tc),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.a9,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.aq,n,B.i,B.k,0,B.q)
e=A.jA(D.aRK,D.deR,new C.dsa(d),A.j6(n,n,n,n,n,n,n,n,n,n,n,m?B.bv:B.ao,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.R(12,0,12,12+l.f.d),A.cz(A.bV(f,A.v(A.a([j,new A.G(B.Y7,u,n),new A.G(D.aJz,A.I(A.a([e,B.b4,A.c0(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dsb(d),n,n),B.ah,A.dR(D.aW3,D.dfH,new C.dsc(d,w),A.bw(B.ac,n,n,n,B.e,n,D.XS,n,new A.bz(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.aq,n,B.i,B.a_,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.aa(B.aA,B.aI,B.E,i,n,n),B.p),B.br),n)},
$S:91}
C.ds9.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.dsa.prototype={
$0(){C.dID()
$.PR().sv(0,null)
A.a3(this.a,!1).P(null)},
$S:0}
C.dsb.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.dsc.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).P(w)
return null},
$S:0}
C.brV.prototype={
$1(d){return C.dIE(A.T(d,x.N,x.z))},
$S:z+3}
C.brW.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brN.prototype={
$1(d){return d.c},
$S:z+0}
C.brO.prototype={
$1(d){return d.r},
$S:z+0}
C.brP.prototype={
$1(d){return d.f},
$S:z+0}
C.brQ.prototype={
$1(d){return d.at},
$S:z+0}
C.brR.prototype={
$1(d){return d.c},
$S:z+0}
C.brS.prototype={
$1(d){return d.r},
$S:z+0}
C.brT.prototype={
$1(d){return d.f},
$S:z+0}
C.brU.prototype={
$1(d){return d.at},
$S:z+0}
C.brM.prototype={
$1(d){return d.a9()},
$S:z+5}
C.brL.prototype={
$1(d){return B.b.ba(B.l.h0(d,16),2,"0").toUpperCase()},
$S:90}
C.cS0.prototype={
$0(){},
$S:0}
C.cS_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cRY.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cRZ.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cS1.prototype={
$1(d){return new C.Kp(this.a,null)},
$S:z+7}
C.cS6.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,B.q7,w,w,w,new C.cS5(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a8(u.d)+")",s=x.p
return A.I(A.a([v,A.H(A.fP(A.I(A.a([new A.oy(D.xr,e,g,36,B.Co,w),B.aR,A.H(A.d(t,w,1,B.at,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fI(B.h.gM(D.xr).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aA(!1,B.T,!0,w,A.aL(!1,w,!0,new A.G(B.bU,A.X(B.ho,A.an(B.h.gM(D.xr),B.h.gac(D.xr),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbtg(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.k,0,w,w),D.xr,w,g,B.fb,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:352}
C.cS5.prototype={
$0(){return A.a3(this.a,!1).eA()},
$S:0}
C.cS7.prototype={
$3(d,e,f){return new A.lu($.GV(),new C.cS4(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cS4.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DJ(d,k,x.Q)
w=w==null?k:w.glK()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ac.k(0.12)
s=A.m(12)
r=A.L(B.ac.k(0.35),B.u,1)
q=A.X(B.k5,B.ac,k,k,18)
p=j.d
o=J.a8(l.a.d)
n=$.GV().a
m=B.m.U(n+4,1,o)
t=A.a([A.r(k,A.I(A.a([q,B.ah,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dp,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bV(s,new A.iX(1.7777777777777777,C.dIF(new A.d7("fleet_master_"+r,x.W),!0,r,!0,j.gaP4(),"fleet_master"),k),B.aB),B.ae],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a8(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.E(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.we(0,B.r,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kT(new A.G(B.Ke,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oL(D.aHj,A.aDz(new A.nX(new C.cS3(i,j),J.a8(i.d),!1,!0,!0,A.tO(),k),D.cOj),k)],w))},
$S:1768}
C.cS3.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xz(v,e,J.a8(w.d),new C.cS2(w,v),this.b,null)},
$S:z+9}
C.cS2.prototype={
$0(){return this.a.bsE(this.b)},
$S:0}
C.cS8.prototype={
$0(){this.a.VR()
return null},
$S:0}
C.cRV.prototype={
$0(){return A.a3(this.a,!1).eA()},
$S:0}
C.cRW.prototype={
$0(){C.a_l(this.a,$.brK)
return null},
$S:0}
C.cRX.prototype={
$3(d,e,f){return A.eO(new C.cRU(this.a,e))},
$S:z+10}
C.cRU.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aD(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.E(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aU,new C.aV4(u,s.a.c,s.e,s.d,new C.cRR(s),new C.cRS(s),new C.cRT(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.pG,v,v,B.an),v,v,v)},
$S:1769}
C.cRR.prototype={
$0(){var w=this.a.c
w.toString
C.a_l(w,$.brK)
return null},
$S:0}
C.cRS.prototype={
$1(d){var w=this.a
return w.n(new C.cRQ(w,d))},
$S:29}
C.cRQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cRT.prototype={
$0(){var w=this.a
return w.n(new C.cRP(w))},
$S:0}
C.cRP.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d6a.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d6b.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cW6.prototype={
$3(d,e,f){return new C.FQ(this.a.c,null)},
$S:z+11}
C.cW7.prototype={
$3(d,e,f){if(f==null)return e
return new A.ay(B.ab,null,B.b7,B.r,A.a([new C.FQ(this.a.c,null),D.awy],x.p),null)},
$C:"$3",
$R:3,
$S:422}
C.cS9.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cSi.prototype={
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
w.a91(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hu(v,"load",new C.cSf(w),!1,u)
v=w.e
v.toString
A.hu(v,"error",new C.cSg(w),!1,u)
A.bM(B.kK,new C.cSh(w),x.H)
w=w.e
w.toString
return w},
$S:633}
C.cSf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSe(w))},
$S:47}
C.cSe.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cSg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSd(w))},
$S:47}
C.cSd.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cSh.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cSc(w))},
$S:12}
C.cSc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cSb.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cSa.prototype={
$0(){var w,v=C.brJ(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nx.Ty(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dot.prototype={
$1(d){var w,v,u,t,s=new A.Fn([],[]).Jw(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1770};(function aliases(){var w=C.amU.prototype
w.aZk=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahG.prototype,"gazd","bq3",1)
w(u,"gbqC","bqD",1)
w(u,"gbtg","bth",6)
w(C.ahH.prototype,"gbIU","bIV",1)
v(C,"epk","dIC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.z_,[C.dse,C.dsd,C.brV,C.brW,C.brN,C.brO,C.brP,C.brQ,C.brR,C.brS,C.brT,C.brU,C.brM,C.brL,C.cS1,C.cS6,C.cS7,C.cS4,C.cRX,C.cRS,C.cW6,C.cW7,C.cSi,C.cSf,C.cSg,C.dot])
v(A.a0O,[C.ds9,C.dsa,C.dsb,C.dsc,C.cS0,C.cS_,C.cRY,C.cRZ,C.cS5,C.cS2,C.cS8,C.cRV,C.cRW,C.cRR,C.cRQ,C.cRT,C.cRP,C.d6a,C.d6b,C.cS9,C.cSe,C.cSd,C.cSh,C.cSc,C.cSb,C.cSa])
v(A.at,[C.NY,C.Xz,C.aMP,C.aV4,C.aV5,C.aO8,C.aV3,C.aPt,C.aIW,C.aPy,C.FQ])
v(A.ap,[C.oA,C.qP])
v(A.ad,[C.Kq,C.Kp,C.a7B,C.a7C])
v(A.ae,[C.ahG,C.aO2,C.amU,C.ahH])
v(A.a0P,[C.cS3,C.cRU])
u(C.Kt,A.aJQ)
u(C.aO3,C.amU)
w(C.amU,A.dF)})()
A.dM8(b.typeUniverse,JSON.parse('{"Kq":{"ad":[],"q":[]},"Xz":{"at":[],"q":[]},"Kp":{"ad":[],"q":[]},"NY":{"at":[],"q":[]},"ahG":{"ae":["Kq"]},"aMP":{"at":[],"q":[]},"aO2":{"ae":["Kp"]},"aV4":{"at":[],"q":[]},"aV5":{"at":[],"q":[]},"aO8":{"at":[],"q":[]},"aV3":{"at":[],"q":[]},"aPt":{"at":[],"q":[]},"aIW":{"at":[],"q":[]},"a7B":{"ad":[],"q":[]},"FQ":{"at":[],"q":[]},"aO3":{"ae":["a7B"]},"aPy":{"at":[],"q":[]},"a7C":{"ad":[],"q":[]},"ahH":{"ae":["a7C"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a4<a6>"),O:w("a4<x>"),e:w("a4<oA>"),S:w("a4<fI>"),s:w("a4<o>"),p:w("a4<q>"),t:w("a4<K>"),X:w("ag<oA>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ot"),_:w("DG"),k:w("oA"),N:w("o"),Y:w("bh<a2>"),W:w("d7<o>"),J:w("lu<K>"),j:w("lu<qP?>"),E:w("vj<cT>"),q:w("Yq"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a09=new A.N(983224,"MaterialIcons",!1)
D.aUp=new A.ab(D.a09,48,B.bh,null,null,null)
D.d1W=new A.B("Powered off",null,B.anw,null,null,null,null,null,null,null,null,null)
D.bQk=w([D.aUp,B.N,D.d1W],x.p)
D.aEC=new A.eE(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bQk,null)
D.awe=new A.d4(B.J,null,null,D.aEC,null)
D.cNX=new A.a9(18,18,B.U6,null)
D.awy=new A.d4(B.J,null,null,D.cNX,null)
D.axt=new A.fV(2,null,null,null,null,B.aa,null,null,null,null)
D.aAT=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBt=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDe=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aH8=new A.R(0,3,0,3)
D.aHj=new A.R(10,0,10,88)
D.aHN=new A.R(12,6,12,10)
D.aIb=new A.R(14,8,14,6)
D.XS=new A.R(18,12,18,12)
D.aJz=new A.R(20,8,20,20)
D.Yy=new A.R(8,6,15,8)
D.aQ_=new A.N(983222,"MaterialIcons",!1)
D.aRH=new A.ab(B.k5,26,B.ac,null,null,null)
D.aRK=new A.ab(B.a_d,18,null,null,null,null)
D.aRZ=new A.ab(B.tx,14,B.aa,null,null,null)
D.aQk=new A.N(983420,"MaterialIcons",!1)
D.aSO=new A.ab(D.aQk,14,B.aa,null,null,null)
D.aOn=new A.N(62895,"MaterialIcons",!1)
D.aST=new A.ab(D.aOn,14,B.aa,null,null,null)
D.aUi=new A.ab(B.tq,16,B.aa,null,null,null)
D.aW3=new A.ab(B.iV,20,null,null,null,null)
D.aWn=new A.ab(B.ho,16,null,null,null,null)
D.bU5=w([B.aL,B.X],x.O)
D.a1T=new A.aa(B.aA,B.aI,B.E,D.bU5,null,null)
D.cHn=new A.aP("NGMY OS","14.2.1")
D.cG6=new A.aP("VirtualDroid","13.8.4")
D.cG5=new A.aP("NGMY OS","15.0.0")
D.cGU=new A.aP("VirtualDroid","14.1.2")
D.cG3=new A.aP("NGMY Tab OS","12.9.7")
D.cG1=new A.aP("NGMY OS","13.5.3")
D.cFR=new A.aP("VirtualDroid","15.2.0")
D.cGt=new A.aP("NGMY OS","14.8.1")
D.cH_=new A.aP("NGMY Tab OS","13.2.4")
D.cHz=new A.aP("VirtualDroid","12.6.9")
D.cFM=new A.aP("NGMY OS","16.0.1")
D.cFD=new A.aP("VirtualDroid","14.9.0")
D.cHe=new A.aP("NGMY Tab OS","14.0.3")
D.cGf=new A.aP("NGMY OS","13.1.8")
D.cFL=new A.aP("VirtualDroid","13.4.5")
D.cG0=new A.aP("NGMY OS","15.3.2")
D.cH0=new A.aP("NGMY Tab OS","12.4.1")
D.cHh=new A.aP("VirtualDroid","16.1.0")
D.cGs=new A.aP("NGMY OS","14.4.6")
D.cHo=new A.aP("VirtualDroid","15.0.8")
D.bTi=w([D.cHn,D.cG6,D.cG5,D.cGU,D.cG3,D.cG1,D.cFR,D.cGt,D.cH_,D.cHz,D.cFM,D.cFD,D.cHe,D.cGf,D.cFL,D.cG0,D.cH0,D.cHh,D.cGs,D.cHo],A.b4("a4<+(o,o)>"))
D.xr=w([B.ac,B.fm],x.O)
D.cJF=new A.eS(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJd=new A.eS(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJ8=new A.eS(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJh=new A.eS(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJ4=new A.eS(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJj=new A.eS(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cJH=new A.eS(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJ5=new A.eS(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJc=new A.eS(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJl=new A.eS(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJ3=new A.eS(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cJz=new A.eS(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJw=new A.eS(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJb=new A.eS(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJt=new A.eS(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJs=new A.eS(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJ2=new A.eS(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJg=new A.eS(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJq=new A.eS(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJv=new A.eS(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8C=w([D.cJF,D.cJd,D.cJ8,D.cJh,D.cJ4,D.cJj,D.cJH,D.cJ5,D.cJc,D.cJl,D.cJ3,D.cJz,D.cJw,D.cJb,D.cJt,D.cJs,D.cJ2,D.cJg,D.cJq,D.cJv],A.b4("a4<+(o,o,a2,a2,o)>"))
D.c1G=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.agc=new C.Kt(0,"youtube")
D.agd=new C.Kt(1,"tiktok")
D.Pn=new C.Kt(2,"instagram")
D.age=new C.Kt(3,"facebook")
D.cyx=new C.Kt(4,"other")
D.cNs=new A.a9(3,null,null,null)
D.cOj=new A.hE(4,10,8,0.52,null)
D.d39=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cRH=new A.aV(D.d39,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.r,null)
D.cV1=new A.M(!0,B.e,null,null,null,null,11,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d2Z=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.daY=new A.B("Open in YouTube",null,B.j6,null,null,null,null,null,null,null,null,null)
D.deR=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dfH=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dfP=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dna=new C.aPt(null)})();(function staticFields(){$.dIB=20
$.azt=null
$.brK=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eug","GV",()=>A.abZ(0))
w($,"euh","PR",()=>A.abZ(null))})()};
(a=>{a["eU+2qZh4goYb7n3GxW4hhSMYsgI="]=a.current})($__dart_deferred_initializers__);