((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
enY(d,e){A.a3(d,!1).cA(A.eF(new C.dpr(e),!0,null,x.H))},
a_i(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PN()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bc(n,B.aM,B.aA),t)
w=3
return A.b(A.dw(B.M,new C.dpq(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_i)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e36(r)
if(q==null){d.F(x.q).f.S(D.cPc)
w=1
break}w=4
return A.b(A.bL(B.ih,null,x.H),$async$a_i)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dFO=n
p=C.e30(n)
n=$.GW()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dtt(q)
d.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_i,v)},
dFR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
Ky(d){return C.e39(d)},
e39(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ky=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Ky)
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
k=A.dj(k,new C.brv(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("ah<E.E>")
i=A.z(new A.ah(k,new C.brw(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dFT(q)
w=12
return A.b(C.Kx(a3,p),$async$Ky)
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
case 19:m=C.dFR(A.T(n,x.N,x.z))
l=C.dFT(A.a([m],x.e))
w=21
return A.b(C.Kx(a3,l),$async$Ky)
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
case 18:case 14:q=C.e37()
w=22
return A.b(C.Kx(a3,q),$async$Ky)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ky,v)},
dFT(d){var w=A.Y(d).j("F<1,o>"),v=new A.F(d,new C.brn(),w).ex(0),u=new A.F(d,new C.bro(),w).ex(0),t=new A.F(d,new C.brp(),w).ex(0),s=new A.F(d,new C.brq(),w).ex(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dtu(null,q,u,t,v,s));++q}return r},
ayX(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$ayX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ky(d),$async$ayX)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.dl(t,new C.brr(),s).ex(0)
p=r.dl(t,new C.brs(),s).ex(0)
o=r.dl(t,new C.brt(),s).ex(0)
n=r.dl(t,new C.bru(),s).ex(0)
m=C.dtu(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kx(d,t),$async$ayX)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ayX,v)},
Kx(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Kx)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.brm(),x.P)
s=A.z(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$Kx)
case 3:return A.h(null,v)}})
return A.i($async$Kx,v)},
e37(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dtu(w,w,t,s,u,r)
return q},
dtu(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jN(),h=d==null,g=D.a7L[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7L[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bJ(256)
n=new A.F(p,new C.brl(),A.Y(p).j("F<1,o>")).fs(0)
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
k=D.c_I[w]
j=D.bRn[w]
return new C.ou("vd_"+1000*Date.now()+"_"+e+"_"+i.bJ(99999),"Device "+B.b.bc(B.l.q(e+1),2,"0"),u,k,C.e38(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e38(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bc(B.l.fY(d.bJ(256),16),2,"0")
return B.h.fs(v)},
dpr:function dpr(d){this.a=d},
dpq:function dpq(d,e){this.a=d
this.b=e},
dpm:function dpm(d){this.a=d},
dpn:function dpn(d){this.a=d},
dpo:function dpo(d){this.a=d},
dpp:function dpp(d,e){this.a=d
this.b=e},
NX:function NX(d,e,f,g){var _=this
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
brv:function brv(){},
brw:function brw(){},
brn:function brn(){},
bro:function bro(){},
brp:function brp(){},
brq:function brq(){},
brr:function brr(){},
brs:function brs(){},
brt:function brt(){},
bru:function bru(){},
brm:function brm(){},
brl:function brl(){},
Kw:function Kw(d,e){this.c=d
this.a=e},
ahn:function ahn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cOR:function cOR(){},
cOQ:function cOQ(d,e){this.a=d
this.b=e},
cOO:function cOO(d){this.a=d},
cOP:function cOP(d,e){this.a=d
this.b=e},
cOS:function cOS(d){this.a=d},
cOX:function cOX(d){this.a=d},
cOW:function cOW(d){this.a=d},
cOY:function cOY(d,e){this.a=d
this.b=e},
cOV:function cOV(d,e,f){this.a=d
this.b=e
this.c=f},
cOU:function cOU(d,e){this.a=d
this.b=e},
cOT:function cOT(d,e){this.a=d
this.b=e},
cOZ:function cOZ(d){this.a=d},
Xt:function Xt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLZ:function aLZ(d,e){this.c=d
this.a=e},
Kv:function Kv(d,e){this.c=d
this.a=e},
aNa:function aNa(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cOL:function cOL(d){this.a=d},
cOM:function cOM(d){this.a=d},
cON:function cON(d){this.a=d},
cOK:function cOK(d,e){this.a=d
this.b=e},
cOH:function cOH(d){this.a=d},
cOI:function cOI(d){this.a=d},
cOG:function cOG(d,e){this.a=d
this.b=e},
cOJ:function cOJ(d){this.a=d},
cOF:function cOF(d){this.a=d},
aUa:function aUa(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aUb:function aUb(d,e,f){this.c=d
this.d=e
this.a=f},
aNg:function aNg(d,e){this.c=d
this.a=e},
aU9:function aU9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d3o:function d3o(d){this.a=d},
d3p:function d3p(d){this.a=d},
aOA:function aOA(d){this.a=d},
aIb:function aIb(d,e){this.c=d
this.a=e},
e36(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e35(v)
if(u!=null)return new C.qE(w,C.dts(u,!1),D.afk,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e34(v)
if(t!=null)return new C.qE(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afl,"TikTok",q)
s=C.e33(w,v)
if(s!=null)return s
r=C.e32(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qE(w,w,D.cwp,"Video",q)
return q},
e33(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/reel/"+w+u,D.OU,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/p/"+w+u,D.OU,t,null)}return null},
e32(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qE(d,"https://www.facebook.com/plugins/video.php?href="+A.fa(2,d,B.bf,!1)+"&show_text=false&width=734",D.afm,"Facebook",null)},
e35(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].du(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e34(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).du(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
Kz:function Kz(d,e){this.a=d
this.b=e},
qE:function qE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7o:function a7o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aNb:function aNb(d,e){var _=this
_.d=$
_.cw$=d
_.aH$=e
_.c=_.a=null},
aOF:function aOF(d,e){this.c=d
this.a=e},
cTE:function cTE(d){this.a=d},
cTF:function cTF(d){this.a=d},
FQ:function FQ(d,e){this.c=d
this.a=e},
ams:function ams(){},
dFS(d,e,f,g,h,i){return new C.a7p(i,f,h,e,g,d)},
emC(d){var w=window
w.toString
A.hd(w,"message",new C.dlx(d),!1,x._)},
a7p:function a7p(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aho:function aho(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cP_:function cP_(d){this.a=d},
cP8:function cP8(d){this.a=d},
cP5:function cP5(d){this.a=d},
cP4:function cP4(d){this.a=d},
cP6:function cP6(d){this.a=d},
cP3:function cP3(d){this.a=d},
cP7:function cP7(d){this.a=d},
cP2:function cP2(d){this.a=d},
cP1:function cP1(d){this.a=d},
cP0:function cP0(d){this.a=d},
dlx:function dlx(d){this.a=d},
e2Z(){var w,v,u
try{v=A.xF()
w=v.guV(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dts(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
brj(d){var w=A.am(y.c,!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
dFN(d){var w=A.b7(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b7(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e3_(d,e,f){var w,v,u=C.brj(d)
if(u!=null){if(f){w=C.e2Z()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dFN(C.dts(u,e))}return C.dFN(d)},
e30(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
e31(d){var w
if($.PN().a==null)return!1
w=$.GW().a
return d>=w&&d<w+4},
dFQ(){var w=$.ayW
if(w!=null)w.ac(0)
$.ayW=null
$.GW().sv(0,0)},
dFP(){var w,v,u,t=$.PN()
if(t.a==null)return
w=$.ayW
if(w!=null)w.ac(0)
v=$.dFO
if(v<=4){t=t.a
t.toString
C.dtt(t)
return}w=$.GW()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dtt(t)},
dtt(d){var w=$.ayW
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
default:w=null}$.ayW=A.dG(A.dp(0,0,0,0,0,w),C.emR())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NX.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.ci,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hd,w,w,w)}}
C.ou.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kw.prototype={
V(){return new C.ahn(A.a([],x.e))},
gdJ(){return this.c}}
C.ahn.prototype={
a_(){var w=this
w.a4()
$.GW().au(0,w.gayl())
C.emC(w.gbpi())
w.ZA()},
boI(){if(this.c!=null)this.p(new C.cOR())},
bpj(){C.dFP()},
n(){$.GW().Z(0,this.gayl())
C.dFQ()
$.PN().sv(0,null)
this.a3()},
ZA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ky(t.a.c),$async$ZA)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cOQ(t,s))
$.brk=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$ZA,v)},
Vu(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cOO(t))
w=3
return A.b(C.ayX(t.a.c),$async$Vu)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cOP(t,s))
$.brk=J.a4(t.d)
t.c.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
brj(d){var w=this.c
w.toString
A.a3(w,!1).cA(A.eF(new C.cOS(d),!1,null,x.H))},
brX(){var w=this.c
w.toString
return C.a_i(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bz,s=A.c0(!0,A.v(A.a([new A.I(D.XL,new A.iV(new C.cOX(w),v),v),A.H(w.e?B.nr:new A.lp($.PN(),new C.cOY(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.asD(B.a8,B.HD,B.mH,D.dcs,w.e?v:new C.cOZ(w)),v)}}
C.Xt.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dJ,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7o(n,!0,!C.e31(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jV,B.nA,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zv,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aF(!1,B.U,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bV(p,A.fk(A.v(A.a([new C.aLZ(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C4,B.a8.l(0.85),u,u,9),D.cL0,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.av,u,u,u,u,u,u,D.aFC,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a11,B.p),u,u,u,u,B.hg,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a6)}}
C.aLZ.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tg,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,w,B.Xz,w,w,w)}}
C.Kv.prototype={
V(){return new C.aNa()}}
C.aNa.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bz,t=A.aQ(w,w,w,w,B.a08,w,w,w,new C.cOL(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c0(!0,A.v(A.a([new A.I(D.XL,A.G(A.a([t,A.H(new A.Kk(A.G(A.a([A.H(new A.I(B.jf,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aF(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.ba,A.W(B.hj,B.a8,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cOM(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lp($.PN(),new C.cON(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aUa.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.dc,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dFS(new A.da(v+"_full_"+u,x.W),!1,u,!1,w.gaO8(),v+"_full")
w=v}else w=new C.aNg(t.r,s)}else w=new C.aIb(m,s)
else w=D.djB
return A.t(s,A.bV(n,A.fk(A.v(A.a([new C.aUb(m,l,s),A.H(w,1),new C.aU9(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a11,B.p),s,r*2.05,s,s,B.bJ,s,s,r)}}
C.aUb.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dr(r)
r=A.hc(r)
w=new A.dF(q,r)
v=w.gJZ()===0?12:w.gJZ()
r=B.b.bc(B.l.q(r),2,"0")
q=(q<12?B.ha:B.jd)===B.ha?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nc,s,s,s),B.b0,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bx,D.aR2,B.eN,D.aQd,B.eN,D.aR7],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.BX,B.a8.l(0.9),s,s,12),B.eN,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,s,D.aGB,s,s,s)}}
C.aNg.prototype={
B(d){var w=null
return A.t(w,A.aE(A.v(A.a([A.W(B.Bm,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eM(D.aUA,D.d02,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aH(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zv,w,w,w,w,w,w,w,w,w,1/0)}}
C.aU9.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayc(B.BS,"YouTube",s===0,r,new C.d3o(u))
s=u.ayc(B.kA,"Device",s===1,r,new C.d3p(u))
w=r?"Power off":"Power on"
v=r?D.a_n:D.aOb
return A.t(t,A.G(A.a([q,B.an,s,B.b0,A.aQ(t,t,t,t,A.W(v,r?B.bQ:B.hm,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,t,D.aGg,t,t,t)},
ayc(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.aw
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aF(!1,B.U,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nO,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aOA.prototype={
B(d){return D.av4}}
C.aIb.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k8,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tQ("Serial",u.c),q=w.tQ("Model",u.d),p=w.tQ("Device ID",u.e),o=w.tQ("IMEI",u.r),n=w.tQ("MAC",u.f),m=w.tQ("OS",u.w+" "+u.x),l=w.tQ("Location",u.y+", "+u.z),k=w.tQ("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tQ("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tQ("Provisioned",u.length>=10?B.b.ai(u,0,10):u)],x.p),v,B.ba,v,v,B.am,!1)},
tQ(d,e){var w=null
return new A.I(B.d7,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cu,A.d(e,w,w,w,w,w,w,D.cSx,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.Kz.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qE.prototype={
gaO8(){var w=this.c
return w===D.afk||w===D.afl||w===D.OU||w===D.afm}}
C.a7o.prototype={
V(){return new C.aNb(null,null)}}
C.aNb.prototype={
a_(){this.a4()
var w=A.bo(null,B.rw,null,1,null,this)
w.he(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aYi()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cy(t,new A.p(t,t,t,t,t,new A.ac(B.ca,B.c0,B.F,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cj(B.da,p,t)
w=B.e.l(0.92)
q=A.aE(new A.cQ(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bk.T>")),!1,A.W(B.jV,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nA
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aOF(s,t),r,q,A.ay(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aA(B.ag,t,B.b5,B.t,s,t)}}
C.aOF.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l4(u,B.L,new C.cTE(this),B.bO,!0,w,w,new C.cTF(this),w)
return new C.FQ(v,w)}}
C.FQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.mj,B.TI],x.O),B.jV)
break
case 1:w=new A.aO(A.a([B.zv,D.aA5],x.O),B.lx)
break
case 2:w=new A.aO(A.a([D.aBL,D.azu],x.O),B.Bv)
break
case 3:w=new A.aO(A.a([B.W,B.dB],x.O),B.BC)
break
case 4:w=new A.aO(A.a([B.av,B.aN],x.O),B.o3)
break
default:w=u}v=w.a
return A.t(u,A.aE(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.ams.prototype={
n(){var w=this,v=w.aH$
if(v!=null)v.Z(0,w.gd6())
w.aH$=null
w.a3()},
bm(){this.bA()
this.by()
this.d7()}}
C.a7p.prototype={
V(){return new C.aho()}}
C.aho.prototype={
a8u(d,e){var w,v=C.brj(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dts(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e3_(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHu(){var w,v=this
if(v.w)return
v.p(new C.cP_(v))
w=v.e
if(w!=null)v.a8u(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=w
try{$.yF()
$.o3().qx(w,new C.cP8(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cP1(v))
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
return A.fk(A.aE(new A.I(new A.U(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Ir(n,B.of,w)],v)
if(o.f)w.push(A.fk(A.aE(new A.aa(28,28,D.awd,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.M_,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.ek(0,A.aF(!1,B.U,!0,n,A.aL(!1,n,!0,A.aE(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.JT,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHt(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.brj(o.a.d)
if(v!=null)w.push(A.ay(8,A.jb(D.aSx,D.d7A,new C.cP0(o),A.iK(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aA(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ou)","~()","Kw(O)","ou(Z<@,@>)","a0(ou)","Z<o,@>(ou)","aB<~>()","Kv(O)","lp<K>(O,qE?,q?)","Xt(O,K)","uh(O,qE?,q?)","FQ(O,an,dE?)"])
C.dpr.prototype={
$1(d){return new C.Kw(this.a,null)},
$S:z+2}
C.dpq.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e6,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.eY,32)],x.V),g=A.L(m?B.cf:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aPW,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f_,w,A.aQ(n,n,n,n,A.W(B.d3,m?B.aw:B.cW,n,n,n),n,n,n,new C.dpm(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a7,B.F,j,n,n),B.p),n,n,n,n,B.JZ,n,n,n)
e=A.eB(B.cQ,A.a([new C.NX("YouTube",B.LX,m,n),new C.NX("TikTok",B.lx,m,n),new C.NX("Instagram",B.Bv,m,n),new C.NX("Facebook",B.BC,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cg:B.iI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bz
r=A.W(B.fp,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cf:B.aL
u=A.v(A.a([e,B.aP,A.aM(n,B.R,!0,n,!0,B.t,n,A.aN(),w,n,n,n,n,n,2,A.bp(n,new A.bb(4,q,B.Y),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.St),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jb(D.aPZ,D.dbw,new C.dpn(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bu:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cy(A.bV(f,A.v(A.a([j,new A.I(B.Xk,u,n),new A.I(D.aHV,A.G(A.a([e,B.b0,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dpo(d),n,n),B.an,A.dL(D.aUi,D.dcl,new C.dpp(d,w),A.bw(B.a8,n,n,n,B.e,n,B.JT,n,new A.bB(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.F,i,n,n),B.p),B.br),n)},
$S:91}
C.dpm.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dpn.prototype={
$0(){C.dFQ()
$.PN().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dpo.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dpp.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.brv.prototype={
$1(d){return C.dFR(A.T(d,x.N,x.z))},
$S:z+3}
C.brw.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brn.prototype={
$1(d){return d.c},
$S:z+0}
C.bro.prototype={
$1(d){return d.r},
$S:z+0}
C.brp.prototype={
$1(d){return d.f},
$S:z+0}
C.brq.prototype={
$1(d){return d.at},
$S:z+0}
C.brr.prototype={
$1(d){return d.c},
$S:z+0}
C.brs.prototype={
$1(d){return d.r},
$S:z+0}
C.brt.prototype={
$1(d){return d.f},
$S:z+0}
C.bru.prototype={
$1(d){return d.at},
$S:z+0}
C.brm.prototype={
$1(d){return d.a9()},
$S:z+5}
C.brl.prototype={
$1(d){return B.b.bc(B.l.fY(d,16),2,"0").toUpperCase()},
$S:88}
C.cOR.prototype={
$0(){},
$S:0}
C.cOQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cOO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cOP.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cOS.prototype={
$1(d){return new C.Kv(this.a,null)},
$S:z+7}
C.cOX.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,D.aTv,w,w,w,new C.cOW(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fF(A.G(A.a([new A.os(D.x4,e,g,36,B.BX,w),B.aR,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fU(B.h.gU(D.x4).l(0.45+e*0.2),B.K,10)],x.S),w,w),w,w,w),1),A.aF(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.bJ,A.W(B.hj,A.ao(B.h.gU(D.x4),B.h.gaj(D.x4),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbrW(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.j,0,w,w),D.x4,w,g,B.fn,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:328}
C.cOW.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cOY.prototype={
$3(d,e,f){return new A.lp($.GW(),new C.cOV(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cOV.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DH(d,k,x.Q)
w=w==null?k:w.glC()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.jV,B.a8,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.GW().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dt,B.he,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bV(s,new A.j3(1.7777777777777777,C.dFS(new A.da("fleet_master_"+r,x.W),!0,r,!0,j.gaO8(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wa(0,B.t,k,B.E,k,k,k,k,!1,k,B.am,!1,A.a([new A.kM(new A.I(B.JO,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oF(D.aFO,A.aD_(new A.nQ(new C.cOU(i,j),J.a4(i.d),!1,!0,!0,A.tI(),k),D.cLP),k)],w))},
$S:1753}
C.cOU.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xt(v,e,J.a4(w.d),new C.cOT(w,v),this.b,null)},
$S:z+9}
C.cOT.prototype={
$0(){return this.a.brj(this.b)},
$S:0}
C.cOZ.prototype={
$0(){this.a.Vu()
return null},
$S:0}
C.cOL.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cOM.prototype={
$0(){C.a_i(this.a,$.brk)
return null},
$S:0}
C.cON.prototype={
$3(d,e,f){return A.eW(new C.cOK(this.a,e))},
$S:z+10}
C.cOK.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aE(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aP,new C.aUa(u,s.a.c,s.e,s.d,new C.cOH(s),new C.cOI(s),new C.cOJ(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.pw,v,v,B.am),v,v,v)},
$S:1754}
C.cOH.prototype={
$0(){var w=this.a.c
w.toString
C.a_i(w,$.brk)
return null},
$S:0}
C.cOI.prototype={
$1(d){var w=this.a
return w.p(new C.cOG(w,d))},
$S:34}
C.cOG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOJ.prototype={
$0(){var w=this.a
return w.p(new C.cOF(w))},
$S:0}
C.cOF.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d3o.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d3p.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cTE.prototype={
$3(d,e,f){return new C.FQ(this.a.c,null)},
$S:z+11}
C.cTF.prototype={
$3(d,e,f){if(f==null)return e
return new A.aA(B.ag,null,B.b5,B.t,A.a([new C.FQ(this.a.c,null),D.avm],x.p),null)},
$C:"$3",
$R:3,
$S:563}
C.cP_.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cP8.prototype={
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
A.hd(v,"load",new C.cP5(w),!1,u)
v=w.e
v.toString
A.hd(v,"error",new C.cP6(w),!1,u)
A.bL(B.kv,new C.cP7(w),x.H)
w=w.e
w.toString
return w},
$S:613}
C.cP5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cP4(w))},
$S:46}
C.cP4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cP6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cP3(w))},
$S:46}
C.cP3.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cP7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cP2(w))},
$S:12}
C.cP2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cP1.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cP0.prototype={
$0(){var w,v=C.brj(this.a.a.d)
if(v==null)return
w=window
w.toString
B.l_.Tc(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dlx.prototype={
$1(d){var w,v,u,t,s=new A.Fo([],[]).Jc(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1755};(function aliases(){var w=C.ams.prototype
w.aYi=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahn.prototype,"gayl","boI",1)
w(u,"gbpi","bpj",1)
w(u,"gbrW","brX",6)
w(C.aho.prototype,"gbHt","bHu",1)
v(C,"emR","dFP",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yY,[C.dpr,C.dpq,C.brv,C.brw,C.brn,C.bro,C.brp,C.brq,C.brr,C.brs,C.brt,C.bru,C.brm,C.brl,C.cOS,C.cOX,C.cOY,C.cOV,C.cON,C.cOI,C.cTE,C.cTF,C.cP8,C.cP5,C.cP6,C.dlx])
v(A.a0J,[C.dpm,C.dpn,C.dpo,C.dpp,C.cOR,C.cOQ,C.cOO,C.cOP,C.cOW,C.cOT,C.cOZ,C.cOL,C.cOM,C.cOH,C.cOG,C.cOJ,C.cOF,C.d3o,C.d3p,C.cP_,C.cP4,C.cP3,C.cP7,C.cP2,C.cP1,C.cP0])
v(A.as,[C.NX,C.Xt,C.aLZ,C.aUa,C.aUb,C.aNg,C.aU9,C.aOA,C.aIb,C.aOF,C.FQ])
v(A.an,[C.ou,C.qE])
v(A.ae,[C.Kw,C.Kv,C.a7o,C.a7p])
v(A.af,[C.ahn,C.aNa,C.ams,C.aho])
v(A.a0K,[C.cOU,C.cOK])
u(C.Kz,A.aJ6)
u(C.aNb,C.ams)
w(C.ams,A.dJ)})()
A.dJl(b.typeUniverse,JSON.parse('{"Kw":{"ae":[],"q":[]},"Xt":{"as":[],"q":[]},"Kv":{"ae":[],"q":[]},"NX":{"as":[],"q":[]},"ahn":{"af":["Kw"]},"aLZ":{"as":[],"q":[]},"aNa":{"af":["Kv"]},"aUa":{"as":[],"q":[]},"aUb":{"as":[],"q":[]},"aNg":{"as":[],"q":[]},"aU9":{"as":[],"q":[]},"aOA":{"as":[],"q":[]},"aIb":{"as":[],"q":[]},"a7o":{"ae":[],"q":[]},"FQ":{"as":[],"q":[]},"aNb":{"af":["a7o"]},"aOF":{"as":[],"q":[]},"a7p":{"ae":[],"q":[]},"aho":{"af":["a7p"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a7<a9>"),O:w("a7<x>"),e:w("a7<ou>"),S:w("a7<fU>"),s:w("a7<o>"),p:w("a7<q>"),t:w("a7<K>"),X:w("ag<ou>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oo"),_:w("DE"),k:w("ou"),N:w("o"),Y:w("bi<a2>"),W:w("da<o>"),J:w("lp<K>"),j:w("lp<qE?>"),E:w("xN<cP>"),q:w("Yj"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_n=new A.M(983224,"MaterialIcons",!1)
D.aSE=new A.ab(D.a_n,48,B.bq,null,null,null)
D.cZU=new A.B("Powered off",null,B.amv,null,null,null,null,null,null,null,null,null)
D.bOp=w([D.aSE,B.O,D.cZU],x.p)
D.aD6=new A.eu(B.am,B.i,B.a0,B.n,null,B.q,null,0,D.bOp,null)
D.av4=new A.dl(B.L,null,null,D.aD6,null)
D.cLs=new A.aa(18,18,B.Tp,null)
D.avm=new A.dl(B.L,null,null,D.cLs,null)
D.awd=new A.fZ(2,null,null,null,null,B.ab,null,null,null,null)
D.azu=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aA5=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aBL=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aFC=new A.U(0,3,0,3)
D.aFO=new A.U(10,0,10,88)
D.aGg=new A.U(12,6,12,10)
D.aGB=new A.U(14,8,14,6)
D.aHV=new A.U(20,8,20,20)
D.XL=new A.U(8,6,15,8)
D.aOb=new A.M(983222,"MaterialIcons",!1)
D.aPW=new A.ab(B.jV,26,B.a8,null,null,null)
D.aPZ=new A.ab(B.Zv,18,null,null,null,null)
D.aQd=new A.ab(B.tg,14,B.ab,null,null,null)
D.aOv=new A.M(983420,"MaterialIcons",!1)
D.aR2=new A.ab(D.aOv,14,B.ab,null,null,null)
D.aMw=new A.M(62895,"MaterialIcons",!1)
D.aR7=new A.ab(D.aMw,14,B.ab,null,null,null)
D.aSx=new A.ab(B.ta,16,B.ab,null,null,null)
D.aTv=new A.ab(B.dD,20,B.ab,null,null,null)
D.aUi=new A.ab(B.iU,20,null,null,null,null)
D.aUA=new A.ab(B.hj,16,null,null,null,null)
D.bSa=w([B.aN,B.W],x.O)
D.a11=new A.ac(B.aC,B.aI,B.F,D.bSa,null,null)
D.cF_=new A.aO("NGMY OS","14.2.1")
D.cDJ=new A.aO("VirtualDroid","13.8.4")
D.cDI=new A.aO("NGMY OS","15.0.0")
D.cEw=new A.aO("VirtualDroid","14.1.2")
D.cDG=new A.aO("NGMY Tab OS","12.9.7")
D.cDE=new A.aO("NGMY OS","13.5.3")
D.cDt=new A.aO("VirtualDroid","15.2.0")
D.cE5=new A.aO("NGMY OS","14.8.1")
D.cEC=new A.aO("NGMY Tab OS","13.2.4")
D.cFb=new A.aO("VirtualDroid","12.6.9")
D.cDm=new A.aO("NGMY OS","16.0.1")
D.cDb=new A.aO("VirtualDroid","14.9.0")
D.cER=new A.aO("NGMY Tab OS","14.0.3")
D.cDS=new A.aO("NGMY OS","13.1.8")
D.cDl=new A.aO("VirtualDroid","13.4.5")
D.cDD=new A.aO("NGMY OS","15.3.2")
D.cED=new A.aO("NGMY Tab OS","12.4.1")
D.cEU=new A.aO("VirtualDroid","16.1.0")
D.cE4=new A.aO("NGMY OS","14.4.6")
D.cF0=new A.aO("VirtualDroid","15.0.8")
D.bRn=w([D.cF_,D.cDJ,D.cDI,D.cEw,D.cDG,D.cDE,D.cDt,D.cE5,D.cEC,D.cFb,D.cDm,D.cDb,D.cER,D.cDS,D.cDl,D.cDD,D.cED,D.cEU,D.cE4,D.cF0],A.b4("a7<+(o,o)>"))
D.x4=w([B.a8,B.fe],x.O)
D.cHh=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cGQ=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cGL=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cGU=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cGH=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cGW=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cHj=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cGI=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cGP=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cGY=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cGG=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cHb=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cH8=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cGO=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cH5=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cH4=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cGF=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cGT=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cH2=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cH7=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7L=w([D.cHh,D.cGQ,D.cGL,D.cGU,D.cGH,D.cGW,D.cHj,D.cGI,D.cGP,D.cGY,D.cGG,D.cHb,D.cH8,D.cGO,D.cH5,D.cH4,D.cGF,D.cGT,D.cH2,D.cH7],A.b4("a7<+(o,o,a2,a2,o)>"))
D.c_I=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afk=new C.Kz(0,"youtube")
D.afl=new C.Kz(1,"tiktok")
D.OU=new C.Kz(2,"instagram")
D.afm=new C.Kz(3,"facebook")
D.cwp=new C.Kz(4,"other")
D.cL0=new A.aa(3,null,null,null)
D.cLP=new A.i2(4,10,8,0.52,null)
D.d0b=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cPc=new A.aU(D.d0b,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cSx=new A.Q(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d02=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d7A=new A.B("Open in YouTube",null,B.j3,null,null,null,null,null,null,null,null,null)
D.dbw=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dcl=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dcs=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.djB=new C.aOA(null)})();(function staticFields(){$.dFO=20
$.ayW=null
$.brk=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"erO","GW",()=>A.abP(0))
w($,"erP","PN",()=>A.abP(null))})()};
(a=>{a["/YOFXYHjflum/J7vlSFY3lOMUqM="]=a.current})($__dart_deferred_initializers__);