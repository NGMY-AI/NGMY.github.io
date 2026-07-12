((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eo2(d,e){A.a3(d,!1).cA(A.eF(new C.dpw(e),!0,null,x.H))},
a_i(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PM()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bc(n,B.aM,B.aA),t)
w=3
return A.b(A.dw(B.M,new C.dpv(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_i)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e3b(r)
if(q==null){d.F(x.q).f.S(D.cPf)
w=1
break}w=4
return A.b(A.bL(B.ih,null,x.H),$async$a_i)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dFT=n
p=C.e35(n)
n=$.GV()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dty(q)
d.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_i,v)},
dFW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.ou(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Kx(d){return C.e3e(d)},
e3e(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Kx=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Kx)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eD(r,x.f)
k=A.dj(k,new C.bry(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("ah<E.E>")
i=A.z(new A.ah(k,new C.brz(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dFY(q)
w=12
return A.b(C.Kw(a3,p),$async$Kx)
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
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dFW(A.T(n,x.N,x.z))
l=C.dFY(A.a([m],x.e))
w=21
return A.b(C.Kw(a3,l),$async$Kx)
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
case 18:case 14:q=C.e3c()
w=22
return A.b(C.Kw(a3,q),$async$Kx)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kx,v)},
dFY(d){var w=A.Y(d).j("F<1,o>"),v=new A.F(d,new C.brq(),w).ex(0),u=new A.F(d,new C.brr(),w).ex(0),t=new A.F(d,new C.brs(),w).ex(0),s=new A.F(d,new C.brt(),w).ex(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dtz(null,q,u,t,v,s));++q}return r},
az_(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$az_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kx(d),$async$az_)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.dl(t,new C.bru(),s).ex(0)
p=r.dl(t,new C.brv(),s).ex(0)
o=r.dl(t,new C.brw(),s).ex(0)
n=r.dl(t,new C.brx(),s).ex(0)
m=C.dtz(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kw(d,t),$async$az_)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$az_,v)},
Kw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Kw)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.brp(),x.P)
s=A.z(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$Kw)
case 3:return A.h(null,v)}})
return A.i($async$Kw,v)},
e3c(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dtz(w,w,t,s,u,r)
return q},
dtz(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jO(),h=d==null,g=D.a7L[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7L[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bJ(256)
n=new A.F(p,new C.bro(),A.Y(p).j("F<1,o>")).fs(0)
u="VND-"+B.b.ai(n,0,4)+"-"+B.b.ai(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bJ(10)
t=B.h.fs(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bc(B.l.fY(i.bJ(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a2(e,20)
k=D.c_M[w]
j=D.bRq[w]
return new C.ou("vd_"+1000*Date.now()+"_"+e+"_"+i.bJ(99999),"Device "+B.b.bc(B.l.q(e+1),2,"0"),u,k,C.e3d(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e3d(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bc(B.l.fY(d.bJ(256),16),2,"0")
return B.h.fs(v)},
dpw:function dpw(d){this.a=d},
dpv:function dpv(d,e){this.a=d
this.b=e},
dpr:function dpr(d){this.a=d},
dps:function dps(d){this.a=d},
dpt:function dpt(d){this.a=d},
dpu:function dpu(d,e){this.a=d
this.b=e},
NW:function NW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ou:function ou(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bry:function bry(){},
brz:function brz(){},
brq:function brq(){},
brr:function brr(){},
brs:function brs(){},
brt:function brt(){},
bru:function bru(){},
brv:function brv(){},
brw:function brw(){},
brx:function brx(){},
brp:function brp(){},
bro:function bro(){},
Kv:function Kv(d,e){this.c=d
this.a=e},
aho:function aho(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cOT:function cOT(){},
cOS:function cOS(d,e){this.a=d
this.b=e},
cOQ:function cOQ(d){this.a=d},
cOR:function cOR(d,e){this.a=d
this.b=e},
cOU:function cOU(d){this.a=d},
cOZ:function cOZ(d){this.a=d},
cOY:function cOY(d){this.a=d},
cP_:function cP_(d,e){this.a=d
this.b=e},
cOX:function cOX(d,e,f){this.a=d
this.b=e
this.c=f},
cOW:function cOW(d,e){this.a=d
this.b=e},
cOV:function cOV(d,e){this.a=d
this.b=e},
cP0:function cP0(d){this.a=d},
Xt:function Xt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aM0:function aM0(d,e){this.c=d
this.a=e},
Ku:function Ku(d,e){this.c=d
this.a=e},
aNc:function aNc(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cON:function cON(d){this.a=d},
cOO:function cOO(d){this.a=d},
cOP:function cOP(d){this.a=d},
cOM:function cOM(d,e){this.a=d
this.b=e},
cOJ:function cOJ(d){this.a=d},
cOK:function cOK(d){this.a=d},
cOI:function cOI(d,e){this.a=d
this.b=e},
cOL:function cOL(d){this.a=d},
cOH:function cOH(d){this.a=d},
aUd:function aUd(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aUe:function aUe(d,e,f){this.c=d
this.d=e
this.a=f},
aNi:function aNi(d,e){this.c=d
this.a=e},
aUc:function aUc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d3t:function d3t(d){this.a=d},
d3u:function d3u(d){this.a=d},
aOC:function aOC(d){this.a=d},
aId:function aId(d,e){this.c=d
this.a=e},
e3b(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e3a(v)
if(u!=null)return new C.qE(w,C.dtx(u,!1),D.afk,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e39(v)
if(t!=null)return new C.qE(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afl,"TikTok",q)
s=C.e38(w,v)
if(s!=null)return s
r=C.e37(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qE(w,w,D.cwt,"Video",q)
return q},
e38(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/reel/"+w+u,D.OW,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/p/"+w+u,D.OW,t,null)}return null},
e37(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qE(d,"https://www.facebook.com/plugins/video.php?href="+A.fa(2,d,B.bf,!1)+"&show_text=false&width=734",D.afm,"Facebook",null)},
e3a(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].du(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e39(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).du(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
Ky:function Ky(d,e){this.a=d
this.b=e},
qE:function qE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7p:function a7p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aNd:function aNd(d,e){var _=this
_.d=$
_.cv$=d
_.aH$=e
_.c=_.a=null},
aOH:function aOH(d,e){this.c=d
this.a=e},
cTG:function cTG(d){this.a=d},
cTH:function cTH(d){this.a=d},
FP:function FP(d,e){this.c=d
this.a=e},
amu:function amu(){},
dFX(d,e,f,g,h,i){return new C.a7q(i,f,h,e,g,d)},
emH(d){var w=window
w.toString
A.he(w,"message",new C.dlC(d),!1,x._)},
a7q:function a7q(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahp:function ahp(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cP1:function cP1(d){this.a=d},
cPa:function cPa(d){this.a=d},
cP7:function cP7(d){this.a=d},
cP6:function cP6(d){this.a=d},
cP8:function cP8(d){this.a=d},
cP5:function cP5(d){this.a=d},
cP9:function cP9(d){this.a=d},
cP4:function cP4(d){this.a=d},
cP3:function cP3(d){this.a=d},
cP2:function cP2(d){this.a=d},
dlC:function dlC(d){this.a=d},
e33(){var w,v,u
try{v=A.xF()
w=v.guV(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dtx(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
brm(d){var w=A.am(y.c,!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
dFS(d){var w=A.b7(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b7(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e34(d,e,f){var w,v,u=C.brm(d)
if(u!=null){if(f){w=C.e33()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dFS(C.dtx(u,e))}return C.dFS(d)},
e35(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
e36(d){var w
if($.PM().a==null)return!1
w=$.GV().a
return d>=w&&d<w+4},
dFV(){var w=$.ayZ
if(w!=null)w.ac(0)
$.ayZ=null
$.GV().sv(0,0)},
dFU(){var w,v,u,t=$.PM()
if(t.a==null)return
w=$.ayZ
if(w!=null)w.ac(0)
v=$.dFT
if(v<=4){t=t.a
t.toString
C.dty(t)
return}w=$.GV()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dty(t)},
dty(d){var w=$.ayZ
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
default:w=null}$.ayZ=A.dH(A.dp(0,0,0,0,0,w),C.emW())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NW.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.ci,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hd,w,w,w)}}
C.ou.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kv.prototype={
V(){return new C.aho(A.a([],x.e))},
gdJ(){return this.c}}
C.aho.prototype={
a_(){var w=this
w.a4()
$.GV().au(0,w.gayl())
C.emH(w.gbpj())
w.ZA()},
boJ(){if(this.c!=null)this.p(new C.cOT())},
bpk(){C.dFU()},
n(){$.GV().Z(0,this.gayl())
C.dFV()
$.PM().sv(0,null)
this.a3()},
ZA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kx(t.a.c),$async$ZA)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cOS(t,s))
$.brn=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$ZA,v)},
Vu(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cOQ(t))
w=3
return A.b(C.az_(t.a.c),$async$Vu)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cOR(t,s))
$.brn=J.a4(t.d)
t.c.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
brk(d){var w=this.c
w.toString
A.a3(w,!1).cA(A.eF(new C.cOU(d),!1,null,x.H))},
brY(){var w=this.c
w.toString
return C.a_i(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bz,s=A.c0(!0,A.v(A.a([new A.I(D.XL,new A.j8(new C.cOZ(w),v),v),A.H(w.e?B.nt:new A.lp($.PM(),new C.cP_(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.asG(B.a8,B.HF,B.mJ,D.dcw,w.e?v:new C.cP0(w)),v)}}
C.Xt.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dJ,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7p(n,!0,!C.e36(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jW,B.nD,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zw,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aD(!1,B.U,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bV(p,A.fk(A.v(A.a([new C.aM0(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C5,B.a8.l(0.85),u,u,9),D.cL3,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.av,u,u,u,u,u,u,D.aFE,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a11,B.p),u,u,u,u,B.hg,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a6)}}
C.aM0.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.ti,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,w,B.Xz,w,w,w)}}
C.Ku.prototype={
V(){return new C.aNc()}}
C.aNc.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bz,t=A.aQ(w,w,w,w,B.a08,w,w,w,new C.cON(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c0(!0,A.v(A.a([new A.I(D.XL,A.G(A.a([t,A.H(new A.Kj(A.G(A.a([A.H(new A.I(B.je,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aD(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.ba,A.W(B.hk,B.a8,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cOO(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lp($.PM(),new C.cOP(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aUd.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.d9,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dFX(new A.da(v+"_full_"+u,x.W),!1,u,!1,w.gaO8(),v+"_full")
w=v}else w=new C.aNi(t.r,s)}else w=new C.aId(m,s)
else w=D.djF
return A.t(s,A.bV(n,A.fk(A.v(A.a([new C.aUe(m,l,s),A.H(w,1),new C.aUc(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a11,B.p),s,r*2.05,s,s,B.bJ,s,s,r)}}
C.aUe.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dr(r)
r=A.hc(r)
w=new A.dG(q,r)
v=w.gJZ()===0?12:w.gJZ()
r=B.b.bc(B.l.q(r),2,"0")
q=(q<12?B.ha:B.jc)===B.ha?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.ne,s,s,s),B.aZ,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bx,D.aR4,B.eN,D.aQf,B.eN,D.aR9],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.BY,B.a8.l(0.9),s,s,12),B.eN,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,s,D.aGD,s,s,s)}}
C.aNi.prototype={
B(d){var w=null
return A.t(w,A.aF(A.v(A.a([A.W(B.Bo,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eM(D.aUC,D.d06,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aH(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zw,w,w,w,w,w,w,w,w,w,1/0)}}
C.aUc.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayc(B.BT,"YouTube",s===0,r,new C.d3t(u))
s=u.ayc(B.kB,"Device",s===1,r,new C.d3u(u))
w=r?"Power off":"Power on"
v=r?D.a_n:D.aOd
return A.t(t,A.G(A.a([q,B.an,s,B.aZ,A.aQ(t,t,t,t,A.W(v,r?B.bQ:B.hn,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,t,D.aGi,t,t,t)},
ayc(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.aw
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aD(!1,B.U,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nR,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aOC.prototype={
B(d){return D.av5}}
C.aId.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k9,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tQ("Serial",u.c),q=w.tQ("Model",u.d),p=w.tQ("Device ID",u.e),o=w.tQ("IMEI",u.r),n=w.tQ("MAC",u.f),m=w.tQ("OS",u.w+" "+u.x),l=w.tQ("Location",u.y+", "+u.z),k=w.tQ("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tQ("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tQ("Provisioned",u.length>=10?B.b.ai(u,0,10):u)],x.p),v,B.ba,v,v,B.am,!1)},
tQ(d,e){var w=null
return new A.I(B.d8,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cu,A.d(e,w,w,w,w,w,w,D.cSA,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.Ky.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qE.prototype={
gaO8(){var w=this.c
return w===D.afk||w===D.afl||w===D.OW||w===D.afm}}
C.a7p.prototype={
V(){return new C.aNd(null,null)}}
C.aNd.prototype={
a_(){this.a4()
var w=A.bm(null,B.ry,null,1,null,this)
w.h3(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aYi()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cy(t,new A.p(t,t,t,t,t,new A.ac(B.c7,B.c0,B.F,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cj(B.d7,p,t)
w=B.e.l(0.92)
q=A.aF(new A.cQ(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bk.T>")),!1,A.W(B.jW,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nD
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aOH(s,t),r,q,A.ay(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aA(B.ag,t,B.b5,B.t,s,t)}}
C.aOH.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l4(u,B.K,new C.cTG(this),B.bO,!0,w,w,new C.cTH(this),w)
return new C.FP(v,w)}}
C.FP.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.mj,B.TJ],x.O),B.jW)
break
case 1:w=new A.aO(A.a([B.zw,D.aA7],x.O),B.lx)
break
case 2:w=new A.aO(A.a([D.aBN,D.azw],x.O),B.Bx)
break
case 3:w=new A.aO(A.a([B.W,B.dB],x.O),B.BE)
break
case 4:w=new A.aO(A.a([B.av,B.aN],x.O),B.o6)
break
default:w=u}v=w.a
return A.t(u,A.aF(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amu.prototype={
n(){var w=this,v=w.aH$
if(v!=null)v.Z(0,w.gd3())
w.aH$=null
w.a3()},
bl(){this.bA()
this.bx()
this.d4()}}
C.a7q.prototype={
V(){return new C.ahp()}}
C.ahp.prototype={
a8u(d,e){var w,v=C.brm(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dtx(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e34(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHv(){var w,v=this
if(v.w)return
v.p(new C.cP1(v))
w=v.e
if(w!=null)v.a8u(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=w
try{$.yF()
$.o3().qx(w,new C.cPa(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cP3(v))
w=v.e
w.toString
v.a8u(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_B,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fk(A.aF(new A.I(new A.U(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Iq(n,B.oi,w)],v)
if(o.f)w.push(A.fk(A.aF(new A.aa(28,28,D.awe,n),n,n,n),B.cX,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.M1,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.ek(0,A.aD(!1,B.U,!0,n,A.aL(!1,n,!0,A.aF(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.JV,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHu(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.brm(o.a.d)
if(v!=null)w.push(A.ay(8,A.jb(D.aSz,D.d7E,new C.cP2(o),A.iK(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aA(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ou)","~()","Kv(O)","ou(Z<@,@>)","a0(ou)","Z<o,@>(ou)","aB<~>()","Ku(O)","lp<K>(O,qE?,q?)","Xt(O,K)","uh(O,qE?,q?)","FP(O,an,dF?)"])
C.dpw.prototype={
$1(d){return new C.Kv(this.a,null)},
$S:z+2}
C.dpv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e6,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.eY,32)],x.V),g=A.L(m?B.cf:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aPY,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f_,w,A.aQ(n,n,n,n,A.W(B.d3,m?B.aw:B.cX,n,n,n),n,n,n,new C.dpr(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a7,B.F,j,n,n),B.p),n,n,n,n,B.K0,n,n,n)
e=A.eB(B.cQ,A.a([new C.NW("YouTube",B.LZ,m,n),new C.NW("TikTok",B.lx,m,n),new C.NW("Instagram",B.Bx,m,n),new C.NW("Facebook",B.BE,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cg:B.iI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bz
r=A.W(B.fp,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cf:B.aL
u=A.v(A.a([e,B.aP,A.aM(n,B.R,!0,n,!0,B.t,n,A.aN(),w,n,n,n,n,n,2,A.bp(n,new A.bb(4,q,B.Y),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Su),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jb(D.aQ0,D.dbA,new C.dps(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bu:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cy(A.bV(f,A.v(A.a([j,new A.I(B.Xk,u,n),new A.I(D.aHX,A.G(A.a([e,B.aZ,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dpt(d),n,n),B.an,A.dL(D.aUk,D.dcp,new C.dpu(d,w),A.bx(B.a8,n,n,n,B.e,n,B.JV,n,new A.bB(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.F,i,n,n),B.p),B.br),n)},
$S:93}
C.dpr.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dps.prototype={
$0(){C.dFV()
$.PM().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dpt.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dpu.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.bry.prototype={
$1(d){return C.dFW(A.T(d,x.N,x.z))},
$S:z+3}
C.brz.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brq.prototype={
$1(d){return d.c},
$S:z+0}
C.brr.prototype={
$1(d){return d.r},
$S:z+0}
C.brs.prototype={
$1(d){return d.f},
$S:z+0}
C.brt.prototype={
$1(d){return d.at},
$S:z+0}
C.bru.prototype={
$1(d){return d.c},
$S:z+0}
C.brv.prototype={
$1(d){return d.r},
$S:z+0}
C.brw.prototype={
$1(d){return d.f},
$S:z+0}
C.brx.prototype={
$1(d){return d.at},
$S:z+0}
C.brp.prototype={
$1(d){return d.a9()},
$S:z+5}
C.bro.prototype={
$1(d){return B.b.bc(B.l.fY(d,16),2,"0").toUpperCase()},
$S:90}
C.cOT.prototype={
$0(){},
$S:0}
C.cOS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cOQ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cOR.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cOU.prototype={
$1(d){return new C.Ku(this.a,null)},
$S:z+7}
C.cOZ.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,D.aTx,w,w,w,new C.cOY(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fM(A.G(A.a([new A.os(D.x5,e,g,36,B.BY,w),B.aR,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fU(B.h.gU(D.x5).l(0.45+e*0.2),B.L,10)],x.S),w,w),w,w,w),1),A.aD(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.bJ,A.W(B.hk,A.ao(B.h.gU(D.x5),B.h.gaj(D.x5),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbrX(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.j,0,w,w),D.x5,w,g,B.fn,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:328}
C.cOY.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cP_.prototype={
$3(d,e,f){return new A.lp($.GV(),new C.cOX(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cOX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DH(d,k,x.Q)
w=w==null?k:w.glC()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.jW,B.a8,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.GV().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dt,B.he,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bV(s,new A.j2(1.7777777777777777,C.dFX(new A.da("fleet_master_"+r,x.W),!0,r,!0,j.gaO8(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wa(0,B.t,k,B.E,k,k,k,k,!1,k,B.am,!1,A.a([new A.kM(new A.I(B.JQ,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oF(D.aFQ,A.aD2(new A.nQ(new C.cOW(i,j),J.a4(i.d),!1,!0,!0,A.tI(),k),D.cLS),k)],w))},
$S:1753}
C.cOW.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xt(v,e,J.a4(w.d),new C.cOV(w,v),this.b,null)},
$S:z+9}
C.cOV.prototype={
$0(){return this.a.brk(this.b)},
$S:0}
C.cP0.prototype={
$0(){this.a.Vu()
return null},
$S:0}
C.cON.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cOO.prototype={
$0(){C.a_i(this.a,$.brn)
return null},
$S:0}
C.cOP.prototype={
$3(d,e,f){return A.eW(new C.cOM(this.a,e))},
$S:z+10}
C.cOM.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aF(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aP,new C.aUd(u,s.a.c,s.e,s.d,new C.cOJ(s),new C.cOK(s),new C.cOL(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.py,v,v,B.am),v,v,v)},
$S:1754}
C.cOJ.prototype={
$0(){var w=this.a.c
w.toString
C.a_i(w,$.brn)
return null},
$S:0}
C.cOK.prototype={
$1(d){var w=this.a
return w.p(new C.cOI(w,d))},
$S:32}
C.cOI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOL.prototype={
$0(){var w=this.a
return w.p(new C.cOH(w))},
$S:0}
C.cOH.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d3t.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d3u.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cTG.prototype={
$3(d,e,f){return new C.FP(this.a.c,null)},
$S:z+11}
C.cTH.prototype={
$3(d,e,f){if(f==null)return e
return new A.aA(B.ag,null,B.b5,B.t,A.a([new C.FP(this.a.c,null),D.avn],x.p),null)},
$C:"$3",
$R:3,
$S:563}
C.cP1.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cPa.prototype={
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
w.a8u(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.he(v,"load",new C.cP7(w),!1,u)
v=w.e
v.toString
A.he(v,"error",new C.cP8(w),!1,u)
A.bL(B.kw,new C.cP9(w),x.H)
w=w.e
w.toString
return w},
$S:613}
C.cP7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cP6(w))},
$S:47}
C.cP6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cP8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cP5(w))},
$S:47}
C.cP5.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cP9.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cP4(w))},
$S:12}
C.cP4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cP3.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cP2.prototype={
$0(){var w,v=C.brm(this.a.a.d)
if(v==null)return
w=window
w.toString
B.l0.Tc(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dlC.prototype={
$1(d){var w,v,u,t,s=new A.Fn([],[]).Jc(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1755};(function aliases(){var w=C.amu.prototype
w.aYi=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aho.prototype,"gayl","boJ",1)
w(u,"gbpj","bpk",1)
w(u,"gbrX","brY",6)
w(C.ahp.prototype,"gbHu","bHv",1)
v(C,"emW","dFU",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yY,[C.dpw,C.dpv,C.bry,C.brz,C.brq,C.brr,C.brs,C.brt,C.bru,C.brv,C.brw,C.brx,C.brp,C.bro,C.cOU,C.cOZ,C.cP_,C.cOX,C.cOP,C.cOK,C.cTG,C.cTH,C.cPa,C.cP7,C.cP8,C.dlC])
v(A.a0K,[C.dpr,C.dps,C.dpt,C.dpu,C.cOT,C.cOS,C.cOQ,C.cOR,C.cOY,C.cOV,C.cP0,C.cON,C.cOO,C.cOJ,C.cOI,C.cOL,C.cOH,C.d3t,C.d3u,C.cP1,C.cP6,C.cP5,C.cP9,C.cP4,C.cP3,C.cP2])
v(A.as,[C.NW,C.Xt,C.aM0,C.aUd,C.aUe,C.aNi,C.aUc,C.aOC,C.aId,C.aOH,C.FP])
v(A.an,[C.ou,C.qE])
v(A.ae,[C.Kv,C.Ku,C.a7p,C.a7q])
v(A.af,[C.aho,C.aNc,C.amu,C.ahp])
v(A.a0L,[C.cOW,C.cOM])
u(C.Ky,A.aJ8)
u(C.aNd,C.amu)
w(C.amu,A.dE)})()
A.dJq(b.typeUniverse,JSON.parse('{"Kv":{"ae":[],"q":[]},"Xt":{"as":[],"q":[]},"Ku":{"ae":[],"q":[]},"NW":{"as":[],"q":[]},"aho":{"af":["Kv"]},"aM0":{"as":[],"q":[]},"aNc":{"af":["Ku"]},"aUd":{"as":[],"q":[]},"aUe":{"as":[],"q":[]},"aNi":{"as":[],"q":[]},"aUc":{"as":[],"q":[]},"aOC":{"as":[],"q":[]},"aId":{"as":[],"q":[]},"a7p":{"ae":[],"q":[]},"FP":{"as":[],"q":[]},"aNd":{"af":["a7p"]},"aOH":{"as":[],"q":[]},"a7q":{"ae":[],"q":[]},"ahp":{"af":["a7q"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a7<a9>"),O:w("a7<x>"),e:w("a7<ou>"),S:w("a7<fU>"),s:w("a7<o>"),p:w("a7<q>"),t:w("a7<K>"),X:w("ag<ou>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oo"),_:w("DE"),k:w("ou"),N:w("o"),Y:w("bi<a2>"),W:w("da<o>"),J:w("lp<K>"),j:w("lp<qE?>"),E:w("xN<cP>"),q:w("Yj"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_n=new A.M(983224,"MaterialIcons",!1)
D.aSG=new A.ab(D.a_n,48,B.bq,null,null,null)
D.cZY=new A.B("Powered off",null,B.amw,null,null,null,null,null,null,null,null,null)
D.bOs=w([D.aSG,B.O,D.cZY],x.p)
D.aD8=new A.eu(B.am,B.i,B.a0,B.n,null,B.q,null,0,D.bOs,null)
D.av5=new A.dl(B.K,null,null,D.aD8,null)
D.cLv=new A.aa(18,18,B.Tq,null)
D.avn=new A.dl(B.K,null,null,D.cLv,null)
D.awe=new A.fZ(2,null,null,null,null,B.ab,null,null,null,null)
D.azw=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aA7=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aBN=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aFE=new A.U(0,3,0,3)
D.aFQ=new A.U(10,0,10,88)
D.aGi=new A.U(12,6,12,10)
D.aGD=new A.U(14,8,14,6)
D.aHX=new A.U(20,8,20,20)
D.XL=new A.U(8,6,15,8)
D.aOd=new A.M(983222,"MaterialIcons",!1)
D.aPY=new A.ab(B.jW,26,B.a8,null,null,null)
D.aQ0=new A.ab(B.Zv,18,null,null,null,null)
D.aQf=new A.ab(B.ti,14,B.ab,null,null,null)
D.aOx=new A.M(983420,"MaterialIcons",!1)
D.aR4=new A.ab(D.aOx,14,B.ab,null,null,null)
D.aMy=new A.M(62895,"MaterialIcons",!1)
D.aR9=new A.ab(D.aMy,14,B.ab,null,null,null)
D.aSz=new A.ab(B.tc,16,B.ab,null,null,null)
D.aTx=new A.ab(B.dE,20,B.ab,null,null,null)
D.aUk=new A.ab(B.iU,20,null,null,null,null)
D.aUC=new A.ab(B.hk,16,null,null,null,null)
D.bSd=w([B.aN,B.W],x.O)
D.a11=new A.ac(B.aC,B.aI,B.F,D.bSd,null,null)
D.cF2=new A.aO("NGMY OS","14.2.1")
D.cDM=new A.aO("VirtualDroid","13.8.4")
D.cDL=new A.aO("NGMY OS","15.0.0")
D.cEz=new A.aO("VirtualDroid","14.1.2")
D.cDJ=new A.aO("NGMY Tab OS","12.9.7")
D.cDH=new A.aO("NGMY OS","13.5.3")
D.cDw=new A.aO("VirtualDroid","15.2.0")
D.cE8=new A.aO("NGMY OS","14.8.1")
D.cEF=new A.aO("NGMY Tab OS","13.2.4")
D.cFe=new A.aO("VirtualDroid","12.6.9")
D.cDp=new A.aO("NGMY OS","16.0.1")
D.cDe=new A.aO("VirtualDroid","14.9.0")
D.cEU=new A.aO("NGMY Tab OS","14.0.3")
D.cDV=new A.aO("NGMY OS","13.1.8")
D.cDo=new A.aO("VirtualDroid","13.4.5")
D.cDG=new A.aO("NGMY OS","15.3.2")
D.cEG=new A.aO("NGMY Tab OS","12.4.1")
D.cEX=new A.aO("VirtualDroid","16.1.0")
D.cE7=new A.aO("NGMY OS","14.4.6")
D.cF3=new A.aO("VirtualDroid","15.0.8")
D.bRq=w([D.cF2,D.cDM,D.cDL,D.cEz,D.cDJ,D.cDH,D.cDw,D.cE8,D.cEF,D.cFe,D.cDp,D.cDe,D.cEU,D.cDV,D.cDo,D.cDG,D.cEG,D.cEX,D.cE7,D.cF3],A.b4("a7<+(o,o)>"))
D.x5=w([B.a8,B.fe],x.O)
D.cHk=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cGT=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cGO=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cGX=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cGK=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cGZ=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cHm=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cGL=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cGS=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cH0=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cGJ=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cHe=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cHb=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cGR=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cH8=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cH7=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cGI=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cGW=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cH5=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cHa=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7L=w([D.cHk,D.cGT,D.cGO,D.cGX,D.cGK,D.cGZ,D.cHm,D.cGL,D.cGS,D.cH0,D.cGJ,D.cHe,D.cHb,D.cGR,D.cH8,D.cH7,D.cGI,D.cGW,D.cH5,D.cHa],A.b4("a7<+(o,o,a2,a2,o)>"))
D.c_M=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afk=new C.Ky(0,"youtube")
D.afl=new C.Ky(1,"tiktok")
D.OW=new C.Ky(2,"instagram")
D.afm=new C.Ky(3,"facebook")
D.cwt=new C.Ky(4,"other")
D.cL3=new A.aa(3,null,null,null)
D.cLS=new A.i2(4,10,8,0.52,null)
D.d0f=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cPf=new A.aU(D.d0f,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cSA=new A.Q(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d06=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d7E=new A.B("Open in YouTube",null,B.j2,null,null,null,null,null,null,null,null,null)
D.dbA=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dcp=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dcw=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.djF=new C.aOC(null)})();(function staticFields(){$.dFT=20
$.ayZ=null
$.brn=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"erT","GV",()=>A.abQ(0))
w($,"erU","PM",()=>A.abQ(null))})()};
(a=>{a["SQGiFX1h93AxpjzU3ENIBETk9iU="]=a.current})($__dart_deferred_initializers__);