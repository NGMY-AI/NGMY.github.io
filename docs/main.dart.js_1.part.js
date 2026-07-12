((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
enJ(d,e){A.a3(d,!1).cz(A.eH(new C.dpc(e),!0,null,x.H))},
a_k(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PP()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.ak(new A.bc(n,B.aM,B.aA),t)
w=3
return A.b(A.dx(B.M,new C.dpb(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_k)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e2S(r)
if(q==null){d.F(x.q).f.S(D.cP8)
w=1
break}w=4
return A.b(A.bM(B.ig,null,x.H),$async$a_k)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dFB=n
p=C.e2M(n)
n=$.GX()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dth(q)
d.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_k,v)},
dFE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aZ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aZ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.ov(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
KA(d){return C.e2V(d)},
e2V(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$KA=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$KA)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eF(r,x.f)
k=A.dk(k,new C.brs(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("ah<E.E>")
i=A.z(new A.ah(k,new C.brt(),j),j.j("E.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dFG(q)
w=12
return A.b(C.Kz(a3,p),$async$KA)
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
case 9:case 5:o=A.aL(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dFE(A.T(n,x.N,x.z))
l=C.dFG(A.a([m],x.e))
w=21
return A.b(C.Kz(a3,l),$async$KA)
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
case 18:case 14:q=C.e2T()
w=22
return A.b(C.Kz(a3,q),$async$KA)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KA,v)},
dFG(d){var w=A.Y(d).j("F<1,o>"),v=new A.F(d,new C.brk(),w).ex(0),u=new A.F(d,new C.brl(),w).ex(0),t=new A.F(d,new C.brm(),w).ex(0),s=new A.F(d,new C.brn(),w).ex(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dti(null,q,u,t,v,s));++q}return r},
ayW(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$ayW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KA(d),$async$ayW)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.dm(t,new C.bro(),s).ex(0)
p=r.dm(t,new C.brp(),s).ex(0)
o=r.dm(t,new C.brq(),s).ex(0)
n=r.dm(t,new C.brr(),s).ex(0)
m=C.dti(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kz(d,t),$async$ayW)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ayW,v)},
Kz(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Kz)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.brj(),x.P)
s=A.z(s,s.$ti.j("a7.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$Kz)
case 3:return A.h(null,v)}})
return A.i($async$Kz,v)},
e2T(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dti(w,w,t,s,u,r)
return q},
dti(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jP(),h=d==null,g=D.a7J[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7J[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bI(256)
n=new A.F(p,new C.bri(),A.Y(p).j("F<1,o>")).fs(0)
u="VND-"+B.b.ai(n,0,4)+"-"+B.b.ai(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bI(10)
t=B.h.fs(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bc(B.l.fY(i.bI(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a2(e,20)
k=D.c_E[w]
j=D.bRk[w]
return new C.ov("vd_"+1000*Date.now()+"_"+e+"_"+i.bI(99999),"Device "+B.b.bc(B.l.p(e+1),2,"0"),u,k,C.e2U(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e2U(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bc(B.l.fY(d.bI(256),16),2,"0")
return B.h.fs(v)},
dpc:function dpc(d){this.a=d},
dpb:function dpb(d,e){this.a=d
this.b=e},
dp7:function dp7(d){this.a=d},
dp8:function dp8(d){this.a=d},
dp9:function dp9(d){this.a=d},
dpa:function dpa(d,e){this.a=d
this.b=e},
NZ:function NZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ov:function ov(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
brs:function brs(){},
brt:function brt(){},
brk:function brk(){},
brl:function brl(){},
brm:function brm(){},
brn:function brn(){},
bro:function bro(){},
brp:function brp(){},
brq:function brq(){},
brr:function brr(){},
brj:function brj(){},
bri:function bri(){},
Ky:function Ky(d,e){this.c=d
this.a=e},
ahn:function ahn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cOH:function cOH(){},
cOG:function cOG(d,e){this.a=d
this.b=e},
cOE:function cOE(d){this.a=d},
cOF:function cOF(d,e){this.a=d
this.b=e},
cOI:function cOI(d){this.a=d},
cON:function cON(d){this.a=d},
cOM:function cOM(d){this.a=d},
cOO:function cOO(d,e){this.a=d
this.b=e},
cOL:function cOL(d,e,f){this.a=d
this.b=e
this.c=f},
cOK:function cOK(d,e){this.a=d
this.b=e},
cOJ:function cOJ(d,e){this.a=d
this.b=e},
cOP:function cOP(d){this.a=d},
Xv:function Xv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLX:function aLX(d,e){this.c=d
this.a=e},
Kx:function Kx(d,e){this.c=d
this.a=e},
aN7:function aN7(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cOB:function cOB(d){this.a=d},
cOC:function cOC(d){this.a=d},
cOD:function cOD(d){this.a=d},
cOA:function cOA(d,e){this.a=d
this.b=e},
cOx:function cOx(d){this.a=d},
cOy:function cOy(d){this.a=d},
cOw:function cOw(d,e){this.a=d
this.b=e},
cOz:function cOz(d){this.a=d},
cOv:function cOv(d){this.a=d},
aU7:function aU7(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aU8:function aU8(d,e,f){this.c=d
this.d=e
this.a=f},
aNd:function aNd(d,e){this.c=d
this.a=e},
aU6:function aU6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d){this.a=d},
aOx:function aOx(d){this.a=d},
aI9:function aI9(d,e){this.c=d
this.a=e},
e2S(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e2R(v)
if(u!=null)return new C.qF(w,C.dtg(u,!1),D.afj,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e2Q(v)
if(t!=null)return new C.qF(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afk,"TikTok",q)
s=C.e2P(w,v)
if(s!=null)return s
r=C.e2O(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qF(w,w,D.cwl,"Video",q)
return q},
e2P(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dk(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qF(d,"https://www.instagram.com/reel/"+w+u,D.OS,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dk(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qF(d,"https://www.instagram.com/p/"+w+u,D.OS,t,null)}return null},
e2O(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qF(d,"https://www.facebook.com/plugins/video.php?href="+A.fb(2,d,B.bf,!1)+"&show_text=false&width=734",D.afl,"Facebook",null)},
e2R(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dk(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e2Q(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dk(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dk(d)
return w==null?null:w.b[1]},
KB:function KB(d,e){this.a=d
this.b=e},
qF:function qF(d,e,f,g,h){var _=this
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
aN8:function aN8(d,e){var _=this
_.d=$
_.cB$=d
_.aI$=e
_.c=_.a=null},
aOC:function aOC(d,e){this.c=d
this.a=e},
cTu:function cTu(d){this.a=d},
cTv:function cTv(d){this.a=d},
FR:function FR(d,e){this.c=d
this.a=e},
amr:function amr(){},
dFF(d,e,f,g,h,i){return new C.a7p(i,f,h,e,g,d)},
emo(d){var w=window
w.toString
A.hd(w,"message",new C.dln(d),!1,x._)},
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
cOQ:function cOQ(d){this.a=d},
cOZ:function cOZ(d){this.a=d},
cOW:function cOW(d){this.a=d},
cOV:function cOV(d){this.a=d},
cOX:function cOX(d){this.a=d},
cOU:function cOU(d){this.a=d},
cOY:function cOY(d){this.a=d},
cOT:function cOT(d){this.a=d},
cOS:function cOS(d){this.a=d},
cOR:function cOR(d){this.a=d},
dln:function dln(d){this.a=d},
e2K(){var w,v,u
try{v=A.xG()
w=v.guU(v)
if(J.a5(w)!==0&&!J.w(w,"null")&&!J.cK(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dtg(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
brg(d){var w=A.ao(y.c,!0,!1,!1,!1).dk(d)
return w==null?null:w.b[1]},
dFA(d){var w=A.b7(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b7(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e2L(d,e,f){var w,v,u=C.brg(d)
if(u!=null){if(f){w=C.e2K()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dFA(C.dtg(u,e))}return C.dFA(d)},
e2M(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
e2N(d){var w
if($.PP().a==null)return!1
w=$.GX().a
return d>=w&&d<w+4},
dFD(){var w=$.ayV
if(w!=null)w.ac(0)
$.ayV=null
$.GX().sv(0,0)},
dFC(){var w,v,u,t=$.PP()
if(t.a==null)return
w=$.ayV
if(w!=null)w.ac(0)
v=$.dFB
if(v<=4){t=t.a
t.toString
C.dth(t)
return}w=$.GX()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dth(t)},
dth(d){var w=$.ayV
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
default:w=null}$.ayV=A.dH(A.dq(0,0,0,0,0,w),C.emD())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NZ.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hd,w,w,w)}}
C.ov.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ky.prototype={
V(){return new C.ahn(A.a([],x.e))},
gdJ(){return this.c}}
C.ahn.prototype={
a_(){var w=this
w.a5()
$.GX().au(0,w.gayk())
C.emo(w.gbph())
w.ZA()},
boH(){if(this.c!=null)this.q(new C.cOH())},
bpi(){C.dFC()},
n(){$.GX().Z(0,this.gayk())
C.dFD()
$.PP().sv(0,null)
this.a4()},
ZA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KA(t.a.c),$async$ZA)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cOG(t,s))
$.brh=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$ZA,v)},
Vu(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.q(new C.cOE(t))
w=3
return A.b(C.ayW(t.a.c),$async$Vu)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cOF(t,s))
$.brh=J.a5(t.d)
t.c.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
bri(d){var w=this.c
w.toString
A.a3(w,!1).cz(A.eH(new C.cOI(d),!1,null,x.H))},
brW(){var w=this.c
w.toString
return C.a_k(w,J.a5(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.by,s=A.c1(!0,A.v(A.a([new A.I(D.XJ,new A.iV(new C.cON(w),v),v),A.H(w.e?B.np:new A.lp($.PP(),new C.cOO(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.asD(B.a8,B.HB,B.mG,D.dco,w.e?v:new C.cOP(w)),v)}}
C.Xv.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dJ,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7o(n,!0,!C.e2N(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jV,B.ny,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zw,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aH(!1,B.U,!0,u,A.aN(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bV(p,A.fk(A.v(A.a([new C.aLX(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C4,B.a8.l(0.85),u,u,9),D.cKX,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.av,u,u,u,u,u,u,D.aFB,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a1_,B.p),u,u,u,u,B.hg,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a7)}}
C.aLX.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tf,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,w,B.Xx,w,w,w)}}
C.Kx.prototype={
V(){return new C.aN7()}}
C.aN7.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.by,t=A.aS(w,w,w,w,B.a06,w,w,w,new C.cOB(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c1(!0,A.v(A.a([new A.I(D.XJ,A.G(A.a([t,A.H(new A.Km(A.G(A.a([A.H(new A.I(B.jf,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aH(!1,B.U,!0,w,A.aN(!1,w,!0,new A.I(B.b9,A.W(B.hj,B.a8,w,w,28),w),B.cu,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cOC(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a7)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lp($.PP(),new C.cOD(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aU7.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.df,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dFF(new A.db(v+"_full_"+u,x.W),!1,u,!1,w.gaO7(),v+"_full")
w=v}else w=new C.aNd(t.r,s)}else w=new C.aI9(m,s)
else w=D.djx
return A.t(s,A.bV(n,A.fk(A.v(A.a([new C.aU8(m,l,s),A.H(w,1),new C.aU6(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a1_,B.p),s,r*2.05,s,s,B.bK,s,s,r)}}
C.aU8.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.ds(r)
r=A.hc(r)
w=new A.dG(q,r)
v=w.gJZ()===0?12:w.gJZ()
r=B.b.bc(B.l.p(r),2,"0")
q=(q<12?B.ha:B.jd)===B.ha?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.na,s,s,s),B.b0,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bw,D.aR_,B.eN,D.aQa,B.eN,D.aR4],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.BX,B.a8.l(0.9),s,s,12),B.eN,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,s,D.aGA,s,s,s)}}
C.aNd.prototype={
B(d){var w=null
return A.t(w,A.aG(A.v(A.a([A.W(B.Bm,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eN(D.aUx,D.d_Y,this.c,A.ea(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aJ(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zw,w,w,w,w,w,w,w,w,w,1/0)}}
C.aU6.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayb(B.BS,"YouTube",s===0,r,new C.d3f(u))
s=u.ayb(B.kA,"Device",s===1,r,new C.d3g(u))
w=r?"Power off":"Power on"
v=r?D.a_l:D.aO9
return A.t(t,A.G(A.a([q,B.an,s,B.b0,A.aS(t,t,t,t,A.W(v,r?B.bP:B.hm,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,t,D.aGf,t,t,t)},
ayb(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.aw
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aH(!1,B.U,!0,u,A.aN(!1,A.m(10),!0,new A.I(B.nM,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a7),1)}}
C.aOx.prototype={
B(d){return D.av3}}
C.aI9.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k8,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tQ("Serial",u.c),q=w.tQ("Model",u.d),p=w.tQ("Device ID",u.e),o=w.tQ("IMEI",u.r),n=w.tQ("MAC",u.f),m=w.tQ("OS",u.w+" "+u.x),l=w.tQ("Location",u.y+", "+u.z),k=w.tQ("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tQ("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tQ("Provisioned",u.length>=10?B.b.ai(u,0,10):u)],x.p),v,B.b9,v,v,B.am,!1)},
tQ(d,e){var w=null
return new A.I(B.d8,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cw,A.d(e,w,w,w,w,w,w,D.cSu,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.KB.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qF.prototype={
gaO7(){var w=this.c
return w===D.afj||w===D.afk||w===D.OS||w===D.afl}}
C.a7o.prototype={
V(){return new C.aN8(null,null)}}
C.aN8.prototype={
a_(){this.a5()
var w=A.br(null,B.vM,null,1,null,this)
w.hA(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aYg()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.p(t,t,t,t,t,new A.ac(B.ca,B.c0,B.F,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.co(B.dj,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cW(new A.b3(p,new A.bk(0.72,1,q),q.j("b3<bm.T>")),!1,A.W(B.jV,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.ny
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aOC(s,t),r,q,A.aA(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aC(B.ag,t,B.b5,B.t,s,t)}}
C.aOC.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kg(u,B.L,new C.cTu(this),B.cd,B.bI,!0,w,w,new C.cTv(this),w)
return new C.FR(v,w)}}
C.FR.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aQ(A.a([B.mi,B.TH],x.O),B.jV)
break
case 1:w=new A.aQ(A.a([B.zw,D.aA3],x.O),B.lx)
break
case 2:w=new A.aQ(A.a([D.aBJ,D.azs],x.O),B.Bv)
break
case 3:w=new A.aQ(A.a([B.W,B.dB],x.O),B.BC)
break
case 4:w=new A.aQ(A.a([B.av,B.aN],x.O),B.o1)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amr.prototype={
n(){var w=this,v=w.aI$
if(v!=null)v.Z(0,w.gd8())
w.aI$=null
w.a4()},
bm(){this.bA()
this.bz()
this.d9()}}
C.a7p.prototype={
V(){return new C.aho()}}
C.aho.prototype={
a8u(d,e){var w,v=C.brg(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dtg(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e2L(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHt(){var w,v=this
if(v.w)return
v.q(new C.cOQ(v))
w=v.e
if(w!=null)v.a8u(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aM()
u.d=w
try{$.yG()
$.o4().qx(w,new C.cOZ(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cOS(v))
w=v.e
w.toString
v.a8u(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_z,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fk(A.aG(new A.I(new A.U(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Is(n,B.oe,w)],v)
if(o.f)w.push(A.fk(A.aG(new A.aa(28,28,D.awb,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.LX,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.el(0,A.aH(!1,B.U,!0,n,A.aN(!1,n,!0,A.aG(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.JQ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHs(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a7)))}v=C.brg(o.a.d)
if(v!=null)w.push(A.aA(8,A.ja(D.aSu,D.d7u,new C.cOR(o),A.iY(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aC(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ov)","~()","Ky(O)","ov(Z<@,@>)","a0(ov)","Z<o,@>(ov)","aD<~>()","Kx(O)","lp<K>(O,qF?,q?)","Xv(O,K)","ui(O,qF?,q?)","FR(O,ap,dF?)"])
C.dpc.prototype={
$1(d){return new C.Ky(this.a,null)},
$S:z+2}
C.dpb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aE(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e6,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.eY,32)],x.V),g=A.L(m?B.cg:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aPT,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f_,w,A.aS(n,n,n,n,A.W(B.d3,m?B.aw:B.cW,n,n,n),n,n,n,new C.dp7(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a6,B.F,j,n,n),B.p),n,n,n,n,B.JW,n,n,n)
e=A.eC(B.cR,A.a([new C.NZ("YouTube",B.LU,m,n),new C.NZ("TikTok",B.lx,m,n),new C.NZ("Instagram",B.Bv,m,n),new C.NZ("Facebook",B.BC,m,n)],v),B.cJ,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ch:B.iH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.by
r=A.W(B.fo,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cg:B.aL
u=A.v(A.a([e,B.aR,A.aO(n,B.R,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bo(n,new A.bb(4,q,B.Y),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aJ(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Ss),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.ja(D.aPW,D.dbs,new C.dp8(d),A.iY(n,n,n,n,n,n,n,n,n,n,n,m?B.bu:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cz(A.bV(f,A.v(A.a([j,new A.I(B.Xj,u,n),new A.I(D.aHT,A.G(A.a([e,B.b0,A.c2(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dp9(d),n,n),B.an,A.dL(D.aUf,D.dch,new C.dpa(d,w),A.bx(B.a8,n,n,n,B.e,n,B.JQ,n,new A.bE(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.F,i,n,n),B.p),B.br),n)},
$S:91}
C.dp7.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dp8.prototype={
$0(){C.dFD()
$.PP().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dp9.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dpa.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.brs.prototype={
$1(d){return C.dFE(A.T(d,x.N,x.z))},
$S:z+3}
C.brt.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brk.prototype={
$1(d){return d.c},
$S:z+0}
C.brl.prototype={
$1(d){return d.r},
$S:z+0}
C.brm.prototype={
$1(d){return d.f},
$S:z+0}
C.brn.prototype={
$1(d){return d.at},
$S:z+0}
C.bro.prototype={
$1(d){return d.c},
$S:z+0}
C.brp.prototype={
$1(d){return d.r},
$S:z+0}
C.brq.prototype={
$1(d){return d.f},
$S:z+0}
C.brr.prototype={
$1(d){return d.at},
$S:z+0}
C.brj.prototype={
$1(d){return d.a9()},
$S:z+5}
C.bri.prototype={
$1(d){return B.b.bc(B.l.fY(d,16),2,"0").toUpperCase()},
$S:88}
C.cOH.prototype={
$0(){},
$S:0}
C.cOG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cOE.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cOF.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cOI.prototype={
$1(d){return new C.Kx(this.a,null)},
$S:z+7}
C.cON.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,D.aTs,w,w,w,new C.cOM(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a5(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fG(A.G(A.a([new A.ot(D.x4,e,g,36,B.BX,w),B.aQ,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fV(B.h.gU(D.x4).l(0.45+e*0.2),B.K,10)],x.S),w,w),w,w,w),1),A.aH(!1,B.U,!0,w,A.aN(!1,w,!0,new A.I(B.bK,A.W(B.hj,A.aq(B.h.gU(D.x4),B.h.gaj(D.x4),e),w,w,28),w),B.cu,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbrV(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a7)],s),B.n,w,B.i,B.j,0,w,w),D.x4,w,g,B.fm,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:329}
C.cOM.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cOO.prototype={
$3(d,e,f){return new A.lp($.GX(),new C.cOL(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cOL.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DI(d,k,x.Q)
w=w==null?k:w.glC()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.jV,B.a8,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.GX().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.ds,B.he,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bV(s,new A.j3(1.7777777777777777,C.dFF(new A.db("fleet_master_"+r,x.W),!0,r,!0,j.gaO7(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wb(0,B.t,k,B.E,k,k,k,k,!1,k,B.am,!1,A.a([new A.kN(new A.I(B.JL,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oG(D.aFN,A.aCZ(new A.nR(new C.cOK(i,j),J.a5(i.d),!1,!0,!0,A.tJ(),k),D.cLL),k)],w))},
$S:1753}
C.cOK.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xv(v,e,J.a5(w.d),new C.cOJ(w,v),this.b,null)},
$S:z+9}
C.cOJ.prototype={
$0(){return this.a.bri(this.b)},
$S:0}
C.cOP.prototype={
$0(){this.a.Vu()
return null},
$S:0}
C.cOB.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cOC.prototype={
$0(){C.a_k(this.a,$.brh)
return null},
$S:0}
C.cOD.prototype={
$3(d,e,f){return A.eX(new C.cOA(this.a,e))},
$S:z+10}
C.cOA.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aU7(u,s.a.c,s.e,s.d,new C.cOx(s),new C.cOy(s),new C.cOz(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.pt,v,v,B.am),v,v,v)},
$S:1754}
C.cOx.prototype={
$0(){var w=this.a.c
w.toString
C.a_k(w,$.brh)
return null},
$S:0}
C.cOy.prototype={
$1(d){var w=this.a
return w.q(new C.cOw(w,d))},
$S:33}
C.cOw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOz.prototype={
$0(){var w=this.a
return w.q(new C.cOv(w))},
$S:0}
C.cOv.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d3f.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d3g.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cTu.prototype={
$3(d,e,f){return new C.FR(this.a.c,null)},
$S:z+11}
C.cTv.prototype={
$3(d,e,f){if(f==null)return e
return new A.aC(B.ag,null,B.b5,B.t,A.a([new C.FR(this.a.c,null),D.avk],x.p),null)},
$C:"$3",
$R:3,
$S:239}
C.cOQ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cOZ.prototype={
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
A.hd(v,"load",new C.cOW(w),!1,u)
v=w.e
v.toString
A.hd(v,"error",new C.cOX(w),!1,u)
A.bM(B.kv,new C.cOY(w),x.H)
w=w.e
w.toString
return w},
$S:617}
C.cOW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cOV(w))},
$S:46}
C.cOV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cOX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cOU(w))},
$S:46}
C.cOU.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cOY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cOT(w))},
$S:12}
C.cOT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cOS.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cOR.prototype={
$0(){var w,v=C.brg(this.a.a.d)
if(v==null)return
w=window
w.toString
B.l_.Tc(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dln.prototype={
$1(d){var w,v,u,t,s=new A.Fp([],[]).Jc(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1755};(function aliases(){var w=C.amr.prototype
w.aYg=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahn.prototype,"gayk","boH",1)
w(u,"gbph","bpi",1)
w(u,"gbrV","brW",6)
w(C.aho.prototype,"gbHs","bHt",1)
v(C,"emD","dFC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yY,[C.dpc,C.dpb,C.brs,C.brt,C.brk,C.brl,C.brm,C.brn,C.bro,C.brp,C.brq,C.brr,C.brj,C.bri,C.cOI,C.cON,C.cOO,C.cOL,C.cOD,C.cOy,C.cTu,C.cTv,C.cOZ,C.cOW,C.cOX,C.dln])
v(A.a0K,[C.dp7,C.dp8,C.dp9,C.dpa,C.cOH,C.cOG,C.cOE,C.cOF,C.cOM,C.cOJ,C.cOP,C.cOB,C.cOC,C.cOx,C.cOw,C.cOz,C.cOv,C.d3f,C.d3g,C.cOQ,C.cOV,C.cOU,C.cOY,C.cOT,C.cOS,C.cOR])
v(A.au,[C.NZ,C.Xv,C.aLX,C.aU7,C.aU8,C.aNd,C.aU6,C.aOx,C.aI9,C.aOC,C.FR])
v(A.ap,[C.ov,C.qF])
v(A.ae,[C.Ky,C.Kx,C.a7o,C.a7p])
v(A.af,[C.ahn,C.aN7,C.amr,C.aho])
v(A.a0L,[C.cOK,C.cOA])
u(C.KB,A.aJ4)
u(C.aN8,C.amr)
w(C.amr,A.dN)})()
A.dJ7(b.typeUniverse,JSON.parse('{"Ky":{"ae":[],"q":[]},"Xv":{"au":[],"q":[]},"Kx":{"ae":[],"q":[]},"NZ":{"au":[],"q":[]},"ahn":{"af":["Ky"]},"aLX":{"au":[],"q":[]},"aN7":{"af":["Kx"]},"aU7":{"au":[],"q":[]},"aU8":{"au":[],"q":[]},"aNd":{"au":[],"q":[]},"aU6":{"au":[],"q":[]},"aOx":{"au":[],"q":[]},"aI9":{"au":[],"q":[]},"a7o":{"ae":[],"q":[]},"FR":{"au":[],"q":[]},"aN8":{"af":["a7o"]},"aOC":{"au":[],"q":[]},"a7p":{"ae":[],"q":[]},"aho":{"af":["a7p"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a6<a9>"),O:w("a6<x>"),e:w("a6<ov>"),S:w("a6<fV>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ag<ov>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("op"),_:w("DF"),k:w("ov"),N:w("o"),Y:w("bk<a2>"),W:w("db<o>"),J:w("lp<K>"),j:w("lp<qF?>"),E:w("xO<cQ>"),q:w("Yl"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_l=new A.N(983224,"MaterialIcons",!1)
D.aSB=new A.ab(D.a_l,48,B.bq,null,null,null)
D.cZP=new A.B("Powered off",null,B.amt,null,null,null,null,null,null,null,null,null)
D.bOm=w([D.aSB,B.O,D.cZP],x.p)
D.aD4=new A.ev(B.am,B.i,B.a0,B.n,null,B.q,null,0,D.bOm,null)
D.av3=new A.dm(B.L,null,null,D.aD4,null)
D.cLo=new A.aa(18,18,B.To,null)
D.avk=new A.dm(B.L,null,null,D.cLo,null)
D.awb=new A.h_(2,null,null,null,null,B.ab,null,null,null,null)
D.azs=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aA3=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aBJ=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aFB=new A.U(0,3,0,3)
D.aFN=new A.U(10,0,10,88)
D.aGf=new A.U(12,6,12,10)
D.aGA=new A.U(14,8,14,6)
D.aHT=new A.U(20,8,20,20)
D.XJ=new A.U(8,6,15,8)
D.aO9=new A.N(983222,"MaterialIcons",!1)
D.aPT=new A.ab(B.jV,26,B.a8,null,null,null)
D.aPW=new A.ab(B.Zt,18,null,null,null,null)
D.aQa=new A.ab(B.tf,14,B.ab,null,null,null)
D.aOs=new A.N(983420,"MaterialIcons",!1)
D.aR_=new A.ab(D.aOs,14,B.ab,null,null,null)
D.aMv=new A.N(62895,"MaterialIcons",!1)
D.aR4=new A.ab(D.aMv,14,B.ab,null,null,null)
D.aSu=new A.ab(B.t9,16,B.ab,null,null,null)
D.aTs=new A.ab(B.dD,20,B.ab,null,null,null)
D.aUf=new A.ab(B.iU,20,null,null,null,null)
D.aUx=new A.ab(B.hj,16,null,null,null,null)
D.bS7=w([B.aN,B.W],x.O)
D.a1_=new A.ac(B.aC,B.aI,B.F,D.bS7,null,null)
D.cEW=new A.aQ("NGMY OS","14.2.1")
D.cDF=new A.aQ("VirtualDroid","13.8.4")
D.cDE=new A.aQ("NGMY OS","15.0.0")
D.cEs=new A.aQ("VirtualDroid","14.1.2")
D.cDC=new A.aQ("NGMY Tab OS","12.9.7")
D.cDA=new A.aQ("NGMY OS","13.5.3")
D.cDp=new A.aQ("VirtualDroid","15.2.0")
D.cE1=new A.aQ("NGMY OS","14.8.1")
D.cEy=new A.aQ("NGMY Tab OS","13.2.4")
D.cF7=new A.aQ("VirtualDroid","12.6.9")
D.cDi=new A.aQ("NGMY OS","16.0.1")
D.cD7=new A.aQ("VirtualDroid","14.9.0")
D.cEN=new A.aQ("NGMY Tab OS","14.0.3")
D.cDO=new A.aQ("NGMY OS","13.1.8")
D.cDh=new A.aQ("VirtualDroid","13.4.5")
D.cDz=new A.aQ("NGMY OS","15.3.2")
D.cEz=new A.aQ("NGMY Tab OS","12.4.1")
D.cEQ=new A.aQ("VirtualDroid","16.1.0")
D.cE0=new A.aQ("NGMY OS","14.4.6")
D.cEX=new A.aQ("VirtualDroid","15.0.8")
D.bRk=w([D.cEW,D.cDF,D.cDE,D.cEs,D.cDC,D.cDA,D.cDp,D.cE1,D.cEy,D.cF7,D.cDi,D.cD7,D.cEN,D.cDO,D.cDh,D.cDz,D.cEz,D.cEQ,D.cE0,D.cEX],A.b4("a6<+(o,o)>"))
D.x4=w([B.a8,B.fd],x.O)
D.cHd=new A.eS(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cGM=new A.eS(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cGH=new A.eS(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cGQ=new A.eS(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cGD=new A.eS(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cGS=new A.eS(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cHf=new A.eS(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cGE=new A.eS(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cGL=new A.eS(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cGU=new A.eS(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cGC=new A.eS(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cH7=new A.eS(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cH4=new A.eS(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cGK=new A.eS(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cH1=new A.eS(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cH0=new A.eS(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cGB=new A.eS(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cGP=new A.eS(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cGZ=new A.eS(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cH3=new A.eS(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7J=w([D.cHd,D.cGM,D.cGH,D.cGQ,D.cGD,D.cGS,D.cHf,D.cGE,D.cGL,D.cGU,D.cGC,D.cH7,D.cH4,D.cGK,D.cH1,D.cH0,D.cGB,D.cGP,D.cGZ,D.cH3],A.b4("a6<+(o,o,a2,a2,o)>"))
D.c_E=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afj=new C.KB(0,"youtube")
D.afk=new C.KB(1,"tiktok")
D.OS=new C.KB(2,"instagram")
D.afl=new C.KB(3,"facebook")
D.cwl=new C.KB(4,"other")
D.cKX=new A.aa(3,null,null,null)
D.cLL=new A.i2(4,10,8,0.52,null)
D.d06=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cP8=new A.aW(D.d06,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cSu=new A.Q(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d_Y=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d7u=new A.B("Open in YouTube",null,B.j3,null,null,null,null,null,null,null,null,null)
D.dbs=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dch=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dco=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.djx=new C.aOx(null)})();(function staticFields(){$.dFB=20
$.ayV=null
$.brh=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"erz","GX",()=>A.abQ(0))
w($,"erA","PP",()=>A.abQ(null))})()};
(a=>{a["d/mMrjPzbzTiFfeuK4xkPK1J2rg="]=a.current})($__dart_deferred_initializers__);