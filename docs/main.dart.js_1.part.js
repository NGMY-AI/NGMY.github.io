((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
edb(d,e){A.a7(d,!1).cI(A.eJ(new C.dg_(e),!0,null,x.H))},
YN(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OE()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.as),t)
w=3
return A.b(A.dp(B.M,new C.dfZ(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YN)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dTP(r)
if(q==null){d.G(x.q).f.R(D.cHn)
w=1
break}w=4
return A.b(A.bR(B.ia,null,x.H),$async$YN)
case 4:if(d.e==null){w=1
break}n=B.l.a_(e,1,999)
$.dw5=n
p=C.dTJ(n)
n=$.G4()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dk7(q)
d.G(x.q).f.R(A.bn(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YN,v)},
dw8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aY(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aY(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.o6(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Jv(d){return C.dTS(d)},
dTS(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Jv=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Jv)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aG(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eT(r,x.f)
k=A.dt(k,new C.bmv(),k.$ti.j("G.E"),x.k)
j=A.O(k).j("ah<G.E>")
i=A.B(new A.ah(k,new C.bmw(),j),j.j("G.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dwa(q)
w=12
return A.b(C.Ju(a3,p),$async$Jv)
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
case 9:case 5:o=A.aN(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.H.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dw8(A.Q(n,x.N,x.z))
l=C.dwa(A.a([m],x.e))
w=21
return A.b(C.Ju(a3,l),$async$Jv)
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
case 18:case 14:q=C.dTQ()
w=22
return A.b(C.Ju(a3,q),$async$Jv)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jv,v)},
dwa(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.bmn(),w).eH(0),u=new A.D(d,new C.bmo(),w).eH(0),t=new A.D(d,new C.bmp(),w).eH(0),s=new A.D(d,new C.bmq(),w).eH(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dk8(null,q,u,t,v,s));++q}return r},
avU(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$avU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jv(d),$async$avU)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.d9(t,new C.bmr(),s).eH(0)
p=r.d9(t,new C.bms(),s).eH(0)
o=r.d9(t,new C.bmt(),s).eH(0)
n=r.d9(t,new C.bmu(),s).eH(0)
m=C.dk8(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Ju(d,t),$async$avU)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avU,v)},
Ju(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Ju=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Ju)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.bmm(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$Ju)
case 3:return A.h(null,v)}})
return A.i($async$Ju,v)},
dTQ(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dk8(w,w,t,s,u,r)
return q},
dk8(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jw(),h=d==null,g=D.a5B[B.l.ac(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a5B[B.l.ac(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bml(),A.W(p).j("D<1,o>")).fm(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fm(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bm(B.l.ic(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.ac(e,20)
k=D.bUV[w]
j=D.bM6[w]
return new C.o6("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bm(B.l.n(e+1),2,"0"),u,k,C.dTR(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().Z())},
dTR(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bm(B.l.ic(d.bG(256),16),2,"0")
return B.h.fm(v)},
dg_:function dg_(d){this.a=d},
dfZ:function dfZ(d,e){this.a=d
this.b=e},
dfV:function dfV(d){this.a=d},
dfW:function dfW(d){this.a=d},
dfX:function dfX(d){this.a=d},
dfY:function dfY(d,e){this.a=d
this.b=e},
MZ:function MZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o6:function o6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bmv:function bmv(){},
bmw:function bmw(){},
bmn:function bmn(){},
bmo:function bmo(){},
bmp:function bmp(){},
bmq:function bmq(){},
bmr:function bmr(){},
bms:function bms(){},
bmt:function bmt(){},
bmu:function bmu(){},
bmm:function bmm(){},
bml:function bml(){},
Jt:function Jt(d,e){this.c=d
this.a=e},
afj:function afj(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGv:function cGv(){},
cGu:function cGu(d,e){this.a=d
this.b=e},
cGs:function cGs(d){this.a=d},
cGt:function cGt(d,e){this.a=d
this.b=e},
cGw:function cGw(d){this.a=d},
cGA:function cGA(d){this.a=d},
cGB:function cGB(d,e){this.a=d
this.b=e},
cGz:function cGz(d,e,f){this.a=d
this.b=e
this.c=f},
cGy:function cGy(d,e){this.a=d
this.b=e},
cGx:function cGx(d,e){this.a=d
this.b=e},
cGC:function cGC(d){this.a=d},
W7:function W7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIK:function aIK(d,e){this.c=d
this.a=e},
Js:function Js(d,e){this.c=d
this.a=e},
aJJ:function aJJ(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGp:function cGp(d){this.a=d},
cGq:function cGq(d){this.a=d},
cGr:function cGr(d){this.a=d},
cGo:function cGo(d,e){this.a=d
this.b=e},
cGl:function cGl(d){this.a=d},
cGm:function cGm(d){this.a=d},
cGk:function cGk(d,e){this.a=d
this.b=e},
cGn:function cGn(d){this.a=d},
cGj:function cGj(d){this.a=d},
aQv:function aQv(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQw:function aQw(d,e,f){this.c=d
this.d=e
this.a=f},
aJP:function aJP(d,e){this.c=d
this.a=e},
aQu:function aQu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cV4:function cV4(d){this.a=d},
cV5:function cV5(d){this.a=d},
aL3:function aL3(d){this.a=d},
aF1:function aF1(d,e){this.c=d
this.a=e},
dTP(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dTO(v)
if(u!=null)return new C.qc(w,C.dk6(u,!1),D.acX,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dTN(v)
if(t!=null)return new C.qc(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.acY,"TikTok",q)
s=C.dTM(w,v)
if(s!=null)return s
r=C.dTL(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qc(w,w,D.cp7,"Video",q)
return q},
dTM(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).di(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qc(d,"https://www.instagram.com/reel/"+w+u,D.Nd,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).di(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qc(d,"https://www.instagram.com/p/"+w+u,D.Nd,t,null)}return null},
dTL(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qc(d,"https://www.facebook.com/plugins/video.php?href="+A.f3(2,d,B.b9,!1)+"&show_text=false&width=734",D.acZ,"Facebook",null)},
dTO(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].di(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dTN(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).di(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).di(d)
return w==null?null:w.b[1]},
Jw:function Jw(d,e){this.a=d
this.b=e},
qc:function qc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5M:function a5M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJK:function aJK(d,e){var _=this
_.d=$
_.d3$=d
_.aY$=e
_.c=_.a=null},
aL8:function aL8(d,e){this.c=d
this.a=e},
cKu:function cKu(d){this.a=d},
cKv:function cKv(d){this.a=d},
EW:function EW(d,e){this.c=d
this.a=e},
ak_:function ak_(){},
dw9(d,e,f,g,h,i){return new C.a5N(i,f,h,e,g,d)},
ebE(d){var w=window
w.toString
A.hh(w,"message",new C.dc1(d),!1,x._)},
a5N:function a5N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afk:function afk(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cGD:function cGD(d){this.a=d},
cGL:function cGL(d){this.a=d},
cGJ:function cGJ(d){this.a=d},
cGH:function cGH(d){this.a=d},
cGI:function cGI(d){this.a=d},
cGF:function cGF(d){this.a=d},
cGK:function cGK(d){this.a=d},
cGG:function cGG(d){this.a=d},
cGE:function cGE(d){this.a=d},
dc1:function dc1(d){this.a=d},
dw3(){var w,v,u
try{v=A.Aq()
w=v.grN(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dk6(d,e){var w=C.dw3(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f3(2,w,B.b9,!1))
v.push("widget_referrer="+A.f3(2,w,B.b9,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bn(v,"&")},
dk5(d){var w=A.ap(y.c,!0,!1,!1,!1).di(d)
return w==null?null:w.b[1]},
dw4(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dTI(d,e,f){var w,v,u=C.dk5(d)
if(u!=null){if(f){w=C.dw3()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dw4(C.dk6(u,e))}return C.dw4(d)},
dTJ(d){if(d<=4)return 0
return B.l.aL(d-1,4)*4},
dTK(d){var w
if($.OE().a==null)return!1
w=$.G4().a
return d>=w&&d<w+4},
dw7(){var w=$.avT
if(w!=null)w.ae(0)
$.avT=null
$.G4().sv(0,0)},
dw6(){var w,v,u,t=$.OE()
if(t.a==null)return
w=$.avT
if(w!=null)w.ae(0)
v=$.dw5
if(v<=4){t=t.a
t.toString
C.dk7(t)
return}w=$.G4()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dk7(t)},
dk7(d){var w=$.avT
if(w!=null)w.ae(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.avT=A.dL(A.dn(0,0,0,0,0,w),C.ec_())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.MZ.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.P(B.a8.l(0.25),B.w,1),r=A.Y(this.d,B.a8,w,w,14)
return A.t(w,A.H(A.a([r,B.fL,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fB,w,w,w)}}
C.o6.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Jt.prototype={
U(){return new C.afj(A.a([],x.e))},
ge9(){return this.c}}
C.afj.prototype={
a0(){var w=this
w.a6()
$.G4().ao(0,w.gawz())
C.ebE(w.gblC())
w.Yn()},
bl1(){if(this.c!=null)this.p(new C.cGv())},
blD(){C.dw6()},
q(){$.G4().Y(0,this.gawz())
C.dw7()
$.OE().sv(0,null)
this.a5()},
Yn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jv(t.a.c),$async$Yn)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGu(t,s))
$.bmk=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
Un(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Un=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cGs(t))
w=3
return A.b(C.avU(t.a.c),$async$Un)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGt(t,s))
$.bmk=J.a5(t.d)
t.c.G(x.q).f.R(A.bn(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Un,v)},
bnv(d){var w=this.c
w.toString
A.a7(w,!1).cI(A.eJ(new C.cGw(d),!1,null,x.H))},
bo5(){var w=this.c
w.toString
return C.YN(w,J.a5(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.f9:B.bH,s=A.aM(v,v,v,v,B.Kv,v,v,v,new C.cGA(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a5(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Do(A.H(A.a([A.J(new A.I(B.j2,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.W,!0,v,A.aQ(!1,v,!0,new A.I(B.bc,A.Y(B.h0,B.a8,v,v,28),v),B.cH,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbo4(),v,v,v,v,v,v,v),B.k,B.M,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c5(!0,A.w(A.a([new A.I(D.VY,r,v),A.J(w.e?B.mU:new A.j9($.OE(),new C.cGB(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ai,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.apZ(B.a8,B.G4,B.mb,D.d3Z,w.e?v:new C.cGC(w)),v)}}
C.W7.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.ab(0,B.G,B.a8.l(0.18),B.dh,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5M(n,!0,!C.dTK(w),"Fold "+(B.l.aL(w,4)+1)+"/"+B.l.aL(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jE,B.n1,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yB,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.W,!0,u,A.aQ(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ch(p,A.fL(A.w(A.a([new C.aIK(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.AT,B.a8.l(0.85),u,u,9),D.cDe,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,D.aBJ,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aJ),B.k,u,u,new A.r(u,u,r,s,q,D.a_4,B.p),u,u,u,B.fD,u,u,u),1),B.aK,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.aa)}}
C.aIK.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.rp,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,B.VO,w,w,w)}}
C.Js.prototype={
U(){return new C.aJJ()}}
C.aJJ.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.f9:B.bH,t=A.aM(w,w,w,w,B.Kv,w,w,w,new C.cGp(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c5(!0,A.w(A.a([new A.I(D.VY,A.H(A.a([t,A.J(new A.Do(A.H(A.a([A.J(new A.I(B.j2,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.W,!0,w,A.aQ(!1,w,!0,new A.I(B.bc,A.Y(B.h0,B.a8,w,w,28),w),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGq(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.j9($.OE(),new C.cGr(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ai,!0,!0),w,!1,!1,w,w)}}
C.aQv.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ab(0,B.G,B.a8.l(0.35),B.f1,28),new A.ab(0,B.G,B.A.l(0.45),B.d4,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dw9(new A.dB(v+"_full_"+u,x.W),!1,u,!1,w.gaM2(),v+"_full")
w=v}else w=new C.aJP(t.r,s)}else w=new C.aF1(m,s)
else w=D.dap
return A.t(s,A.ch(n,A.fL(A.w(A.a([new C.aQw(m,l,s),A.J(w,1),new C.aQu(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aJ),B.k,s,s,new A.r(s,s,o,q,p,D.a_4,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQw.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dz(r)
r=A.hH(r)
w=new A.dA(q,r)
v=w.gJc()===0?12:w.gJc()
r=B.b.bm(B.l.n(r),2,"0")
q=(q<12?B.fW:B.iZ)===B.fW?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mC,s,s,s),B.bz,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bQ,D.aMD,B.eh,D.aLQ,B.eh,D.aMH],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.H(A.a([A.Y(B.Kl,B.a8.l(0.9),s,s,12),B.eh,A.J(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,D.aCv,s,s,s)}}
C.aJP.prototype={
C(d){var w=null
return A.t(w,A.aL(A.w(A.a([A.Y(B.Ar,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.ew(D.aQ6,D.cSD,this.c,A.eo(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aD(B.a8.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yB,w,w,w,w,w,w,w,w,1/0)}}
C.aQu.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awr(B.AK,"YouTube",s===0,r,new C.cV4(u))
s=u.awr(B.l8,"Device",s===1,r,new C.cV5(u))
w=r?"Power off":"Power on"
v=r?D.Yr:D.aJR
return A.t(t,A.H(A.a([q,B.al,s,B.bz,A.aM(t,t,t,t,A.Y(v,r?B.bG:B.fo,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dn)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,D.aCf,t,t,t)},
awr(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a8:B.av
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.J(A.aK(!1,B.W,!0,u,A.aQ(!1,A.m(10),!0,new A.I(B.nd,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aL3.prototype={
C(d){return D.asa}}
C.aF1.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lu,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tv("Serial",u.c),q=w.tv("Model",u.d),p=w.tv("Device ID",u.e),o=w.tv("IMEI",u.r),n=w.tv("MAC",u.f),m=w.tv("OS",u.w+" "+u.x),l=w.tv("Location",u.y+", "+u.z),k=w.tv("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tv("Timezone",u.at)
u=u.ax
return A.ed(A.a([t,B.aK,s,B.ab,r,q,p,o,n,m,l,k,j,w.tv("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tv(d,e){var w=null
return new A.I(B.cI,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cD,A.d(e,w,w,w,w,w,w,D.cKy,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.Jw.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qc.prototype={
gaM2(){var w=this.c
return w===D.acX||w===D.acY||w===D.Nd||w===D.acZ}}
C.a5M.prototype={
U(){return new C.aJK(null,null)}}
C.aJK.prototype={
a0(){this.a6()
var w=A.bJ(null,B.uW,null,1,null,this)
w.mT(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aVK()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dE(t,new A.r(t,t,t,t,t,new A.ak(B.cQ,B.cz,B.J,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.bW),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i9,p,t)
w=B.e.l(0.92)
q=A.aL(new A.d7(new A.b4(p,new A.bo(0.72,1,q),q.j("b4<bl.T>")),!1,A.Y(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n1
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aL8(s,t),r,q,A.aU(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aU(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aU(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aH(B.am,t,B.ba,B.y,s,t)}}
C.aL8.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.km(u,new C.cKu(this),B.c9,B.bP,!0,w,w,new C.cKv(this),w)
return new C.EW(v,w)}}
C.EW.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uz,B.S5],x.O),B.jE)
break
case 1:w=new A.aO(A.a([B.yB,D.awA],x.O),B.l9)
break
case 2:w=new A.aO(A.a([D.ay6,D.aw3],x.O),B.Az)
break
case 3:w=new A.aO(A.a([B.Y,B.dp],x.O),B.AD)
break
case 4:w=new A.aO(A.a([B.aw,B.aN],x.O),B.p3)
break
default:w=u}v=w.a
return A.t(u,A.aL(A.Y(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aL,B.aR,B.J,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ak_.prototype={
q(){var w=this,v=w.aY$
if(v!=null)v.Y(0,w.gdL())
w.aY$=null
w.a5()},
by(){this.bQ()
this.bM()
this.dM()}}
C.a5N.prototype={
U(){return new C.afk()}}
C.afk.prototype={
bEX(d,e){var w=C.dk5(d)
if(w!=null)return C.dk6(w,e)
return d},
a75(d,e){var w,v=this,u=C.dk5(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bEX(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dTI(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bCO(){var w,v=this
if(v.w)return
v.p(new C.cGD(v))
w=v.e
if(w!=null)v.a75(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.G6()
$.pB().uI(w,new C.cGL(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cGE(v))
w=v.e
w.toString
v.a75(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.YF,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.R,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.X,n,n)],v))
return A.fL(A.aL(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1a(n,B.tb,w)],v)
if(o.f)w.push(A.fL(A.aL(new A.ad(28,28,D.atc,n),n,n,n),B.cY,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bm,B.w,1)
q=A.Y(B.Kp,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eW(0,A.aK(!1,B.W,!0,n,A.aQ(!1,n,!0,A.aL(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Vk,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbCN(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aH(B.am,n,B.ba,B.y,w,n)}}
var z=a.updateTypes(["o(o6)","~()","Jt(U)","o6(Z<@,@>)","a1(o6)","Z<o,@>(o6)","aA<~>()","Js(U)","j9<K>(U,qc?,p?)","W7(U,K)","tM(U,qc?,p?)","EW(U,al,dP?)"])
C.dg_.prototype={
$1(d){return new C.Jt(this.a,null)},
$S:z+2}
C.dfZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dQ,B.Y],j):A.a([B.e,B.az],j),h=A.a([new A.ab(0,B.G,B.a8.l(0.22),B.f1,32)],x.V),g=A.P(m?B.c7:B.a8.l(0.18),B.w,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ar.l(m?0.18:0.08)],j)
e=A.t(n,D.aLx,B.k,n,n,new A.r(B.a8.l(0.18),n,A.P(B.a8.l(0.45),B.w,1),n,n,n,B.ay),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f2,w,A.aM(n,n,n,n,A.Y(B.d3,m?B.av:B.cY,n,n,n),n,n,n,new C.dfV(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ah,B.aj,B.J,j,n,n),B.p),n,n,n,B.If,n,n,n)
e=A.eb(B.cx,A.a([new C.MZ("YouTube",B.Kk,m,n),new C.MZ("TikTok",B.l9,m,n),new C.MZ("Instagram",B.Az,m,n),new C.MZ("Facebook",B.AD,m,n)],v),B.cj,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cl:B.i5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bH
r=A.Y(B.fG,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aO
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.y,n,A.aJ(),w,n,n,n,n,n,2,A.bq(n,new A.ba(4,q,B.V),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aD(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.QP),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a6,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jM(D.aLA,D.d36,new C.dfW(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bh:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dE(A.ch(f,A.w(A.a([j,new A.I(B.Vy,u,n),new A.I(D.aDL,A.H(A.a([e,B.bz,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.au,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dfX(d),n,n),B.al,A.dN(D.aPQ,D.d3U,new C.dfY(d,w),A.bx(B.a8,n,n,n,B.e,n,D.Vk,n,new A.bG(A.m(14),B.V),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a1,0,B.q),B.aJ),new A.r(n,n,g,k,h,new A.ak(B.aL,B.aR,B.J,i,n,n),B.p),B.bW),n)},
$S:77}
C.dfV.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dfW.prototype={
$0(){C.dw7()
$.OE().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dfX.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dfY.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bmv.prototype={
$1(d){return C.dw8(A.Q(d,x.N,x.z))},
$S:z+3}
C.bmw.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bmn.prototype={
$1(d){return d.c},
$S:z+0}
C.bmo.prototype={
$1(d){return d.r},
$S:z+0}
C.bmp.prototype={
$1(d){return d.f},
$S:z+0}
C.bmq.prototype={
$1(d){return d.at},
$S:z+0}
C.bmr.prototype={
$1(d){return d.c},
$S:z+0}
C.bms.prototype={
$1(d){return d.r},
$S:z+0}
C.bmt.prototype={
$1(d){return d.f},
$S:z+0}
C.bmu.prototype={
$1(d){return d.at},
$S:z+0}
C.bmm.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bml.prototype={
$1(d){return B.b.bm(B.l.ic(d,16),2,"0").toUpperCase()},
$S:79}
C.cGv.prototype={
$0(){},
$S:0}
C.cGu.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGs.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGt.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cGw.prototype={
$1(d){return new C.Js(this.a,null)},
$S:z+7}
C.cGA.prototype={
$0(){return A.a7(this.a,!1).er()},
$S:0}
C.cGB.prototype={
$3(d,e,f){return new A.j9($.G4(),new C.cGz(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cGz.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CQ(d,k,x.Q)
w=w==null?k:w.glr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.P(B.a8.l(0.35),B.w,1)
q=A.Y(B.jE,B.a8,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.G4().a
m=B.m.a_(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d7,B.fl,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.je(1.7777777777777777,C.dw9(new A.dB("fleet_master_"+r,x.W),!0,r,!0,j.gaM2(),"fleet_master"),k),B.aJ),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vC(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kw(new A.I(B.I7,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.og(D.aBS,A.azY(new A.np(new C.cGy(i,j),J.a5(i.d),!1,!0,!0,A.th(),k),D.cDZ),k)],w))},
$S:1676}
C.cGy.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.W7(v,e,J.a5(w.d),new C.cGx(w,v),this.b,null)},
$S:z+9}
C.cGx.prototype={
$0(){return this.a.bnv(this.b)},
$S:0}
C.cGC.prototype={
$0(){this.a.Un()
return null},
$S:0}
C.cGp.prototype={
$0(){return A.a7(this.a,!1).er()},
$S:0}
C.cGq.prototype={
$0(){C.YN(this.a,$.bmk)
return null},
$S:0}
C.cGr.prototype={
$3(d,e,f){return A.fN(new C.cGo(this.a,e))},
$S:z+10}
C.cGo.prototype={
$2(d,e){var w,v=null,u=B.m.a_(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aL(A.cx(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.X,v,v),B.aS,new C.aQv(u,s.a.c,s.e,s.d,new C.cGl(s),new C.cGm(s),new C.cGn(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oF,v,v,B.ak),v,v,v)},
$S:1677}
C.cGl.prototype={
$0(){var w=this.a.c
w.toString
C.YN(w,$.bmk)
return null},
$S:0}
C.cGm.prototype={
$1(d){var w=this.a
return w.p(new C.cGk(w,d))},
$S:36}
C.cGk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGn.prototype={
$0(){var w=this.a
return w.p(new C.cGj(w))},
$S:0}
C.cGj.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cV4.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cV5.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cKu.prototype={
$3(d,e,f){return new C.EW(this.a.c,null)},
$S:z+11}
C.cKv.prototype={
$3(d,e,f){if(f==null)return e
return new A.aH(B.am,null,B.ba,B.y,A.a([new C.EW(this.a.c,null),D.aso],x.p),null)},
$C:"$3",
$R:3,
$S:209}
C.cGD.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cGL.prototype={
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
w.a75(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hh(v,"load",new C.cGJ(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cGK(w),!1,u)
w=w.e
w.toString
return w},
$S:505}
C.cGJ.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cGH(w))
A.bR(B.Q,new C.cGI(w),x.H)}},
$S:44}
C.cGH.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGI.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cGF(w))},
$S:12}
C.cGF.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cGG(w))},
$S:44}
C.cGG.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cGE.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dc1.prototype={
$1(d){var w,v,u,t,s=new A.Ev([],[]).Is(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1678};(function aliases(){var w=C.ak_.prototype
w.aVK=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afj.prototype,"gawz","bl1",1)
w(u,"gblC","blD",1)
w(u,"gbo4","bo5",6)
w(C.afk.prototype,"gbCN","bCO",1)
v(C,"ec_","dw6",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yl,[C.dg_,C.dfZ,C.bmv,C.bmw,C.bmn,C.bmo,C.bmp,C.bmq,C.bmr,C.bms,C.bmt,C.bmu,C.bmm,C.bml,C.cGw,C.cGB,C.cGz,C.cGr,C.cGm,C.cKu,C.cKv,C.cGL,C.cGJ,C.cGK,C.dc1])
v(A.a_i,[C.dfV,C.dfW,C.dfX,C.dfY,C.cGv,C.cGu,C.cGs,C.cGt,C.cGA,C.cGx,C.cGC,C.cGp,C.cGq,C.cGl,C.cGk,C.cGn,C.cGj,C.cV4,C.cV5,C.cGD,C.cGH,C.cGI,C.cGF,C.cGG,C.cGE])
v(A.at,[C.MZ,C.W7,C.aIK,C.aQv,C.aQw,C.aJP,C.aQu,C.aL3,C.aF1,C.aL8,C.EW])
v(A.al,[C.o6,C.qc])
v(A.ae,[C.Jt,C.Js,C.a5M,C.a5N])
v(A.af,[C.afj,C.aJJ,C.ak_,C.afk])
v(A.a_j,[C.cGy,C.cGo])
u(C.Jw,A.aFW)
u(C.aJK,C.ak_)
w(C.ak_,A.ei)})()
A.dzB(b.typeUniverse,JSON.parse('{"Jt":{"ae":[],"p":[]},"W7":{"at":[],"p":[]},"Js":{"ae":[],"p":[]},"MZ":{"at":[],"p":[]},"afj":{"af":["Jt"]},"aIK":{"at":[],"p":[]},"aJJ":{"af":["Js"]},"aQv":{"at":[],"p":[]},"aQw":{"at":[],"p":[]},"aJP":{"at":[],"p":[]},"aQu":{"at":[],"p":[]},"aL3":{"at":[],"p":[]},"aF1":{"at":[],"p":[]},"a5M":{"ae":[],"p":[]},"EW":{"at":[],"p":[]},"aJK":{"af":["a5M"]},"aL8":{"at":[],"p":[]},"a5N":{"ae":[],"p":[]},"afk":{"af":["a5N"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ab>"),O:w("a6<y>"),e:w("a6<o6>"),s:w("a6<o>"),p:w("a6<p>"),t:w("a6<K>"),X:w("ac<o6>"),a:w("ac<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o1"),_:w("CN"),k:w("o6"),N:w("o"),Y:w("bo<a9>"),W:w("dB<o>"),J:w("j9<K>"),j:w("j9<qc?>"),E:w("xf<cK>"),q:w("WQ"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Yr=new A.N(983224,"MaterialIcons",!1)
D.aOg=new A.a8(D.Yr,48,B.bm,null,null,null)
D.cKb=new A.T(!0,B.cl,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cRz=new A.A("Powered off",null,D.cKb,null,null,null,null,null,null,null,null,null)
D.bJn=w([D.aOg,B.R,D.cRz],x.p)
D.azh=new A.eZ(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bJn,null)
D.asa=new A.dr(B.T,null,null,D.azh,null)
D.cDE=new A.ad(18,18,B.RP,null)
D.aso=new A.dr(B.T,null,null,D.cDE,null)
D.atc=new A.hj(2,null,null,null,null,B.a9,null,null,null,null)
D.aw3=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.awA=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.ay6=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aBJ=new A.V(0,3,0,3)
D.aBS=new A.V(10,0,10,88)
D.aCf=new A.V(12,6,12,10)
D.aCv=new A.V(14,8,14,6)
D.Vk=new A.V(18,12,18,12)
D.aDL=new A.V(20,8,20,20)
D.VY=new A.V(8,6,15,8)
D.aJR=new A.N(983222,"MaterialIcons",!1)
D.aLx=new A.a8(B.jE,26,B.a8,null,null,null)
D.aLA=new A.a8(B.XF,18,null,null,null,null)
D.aLQ=new A.a8(B.rp,14,B.a9,null,null,null)
D.aK6=new A.N(983420,"MaterialIcons",!1)
D.aMD=new A.a8(D.aK6,14,B.a9,null,null,null)
D.aIf=new A.N(62895,"MaterialIcons",!1)
D.aMH=new A.a8(D.aIf,14,B.a9,null,null,null)
D.aPQ=new A.a8(B.ja,20,null,null,null,null)
D.aQ6=new A.a8(B.h0,16,null,null,null,null)
D.bMR=w([B.aN,B.Y],x.O)
D.a_4=new A.ak(B.aL,B.aR,B.J,D.bMR,null,null)
D.cxr=new A.aO("NGMY OS","14.2.1")
D.cwe=new A.aO("VirtualDroid","13.8.4")
D.cwd=new A.aO("NGMY OS","15.0.0")
D.cx_=new A.aO("VirtualDroid","14.1.2")
D.cwb=new A.aO("NGMY Tab OS","12.9.7")
D.cw9=new A.aO("NGMY OS","13.5.3")
D.cvZ=new A.aO("VirtualDroid","15.2.0")
D.cwB=new A.aO("NGMY OS","14.8.1")
D.cx5=new A.aO("NGMY Tab OS","13.2.4")
D.cxB=new A.aO("VirtualDroid","12.6.9")
D.cvU=new A.aO("NGMY OS","16.0.1")
D.cvL=new A.aO("VirtualDroid","14.9.0")
D.cxi=new A.aO("NGMY Tab OS","14.0.3")
D.cwn=new A.aO("NGMY OS","13.1.8")
D.cvT=new A.aO("VirtualDroid","13.4.5")
D.cw8=new A.aO("NGMY OS","15.3.2")
D.cx6=new A.aO("NGMY Tab OS","12.4.1")
D.cxl=new A.aO("VirtualDroid","16.1.0")
D.cwA=new A.aO("NGMY OS","14.4.6")
D.cxs=new A.aO("VirtualDroid","15.0.8")
D.bM6=w([D.cxr,D.cwe,D.cwd,D.cx_,D.cwb,D.cw9,D.cvZ,D.cwB,D.cx5,D.cxB,D.cvU,D.cvL,D.cxi,D.cwn,D.cvT,D.cw8,D.cx6,D.cxl,D.cwA,D.cxs],A.b6("a6<+(o,o)>"))
D.czD=new A.eE(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.czb=new A.eE(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cz6=new A.eE(["New York","United States",40.7128,-74.006,"America/New_York"])
D.czf=new A.eE(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cz2=new A.eE(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.czh=new A.eE(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.czF=new A.eE(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cz3=new A.eE(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cza=new A.eE(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.czj=new A.eE(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cz1=new A.eE(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.czx=new A.eE(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.czu=new A.eE(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cz9=new A.eE(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.czr=new A.eE(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.czq=new A.eE(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cz0=new A.eE(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cze=new A.eE(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.czo=new A.eE(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.czt=new A.eE(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a5B=w([D.czD,D.czb,D.cz6,D.czf,D.cz2,D.czh,D.czF,D.cz3,D.cza,D.czj,D.cz1,D.czx,D.czu,D.cz9,D.czr,D.czq,D.cz0,D.cze,D.czo,D.czt],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bUV=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.acX=new C.Jw(0,"youtube")
D.acY=new C.Jw(1,"tiktok")
D.Nd=new C.Jw(2,"instagram")
D.acZ=new C.Jw(3,"facebook")
D.cp7=new C.Jw(4,"other")
D.cDe=new A.ad(3,null,null,null)
D.cDZ=new A.ix(4,10,8,0.52,null)
D.cSP=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cHn=new A.aW(D.cSP,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.y,null)
D.cKy=new A.T(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cSD=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d36=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d3U=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d3Z=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dap=new C.aL3(null)})();(function staticFields(){$.dw5=20
$.avT=null
$.bmk=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eh_","G4",()=>A.UK(0))
w($,"eh0","OE",()=>A.UK(null))})()};
(a=>{a["boKPqSCDr0wJOrXRLZwOwO4tqd8="]=a.current})($__dart_deferred_initializers__);