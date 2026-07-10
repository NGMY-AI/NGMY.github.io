((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
edZ(d,e){A.a7(d,!1).cv(A.ez(new C.dgu(e),!0,null,x.H))},
Zo(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zo=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P_()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aX,B.aO),t)
w=3
return A.b(A.dL(B.L,new C.dgt(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zo)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dUo(r)
if(q==null){d.H(x.q).f.U(D.cKT)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$Zo)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dwB=n
p=C.dUi(n)
n=$.Gj()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dkv(q)
d.H(x.q).f.U(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zo,v)},
dwE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oc(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JU(d){return C.dUr(d)},
dUr(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JU=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JU)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aD(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eH(r,x.f)
k=A.dl(k,new C.boA(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.boB(),j),j.j("E.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dwG(q)
w=12
return A.b(C.JT(a3,p),$async$JU)
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
n=B.I.aD(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dwE(A.S(n,x.N,x.z))
l=C.dwG(A.a([m],x.e))
w=21
return A.b(C.JT(a3,l),$async$JU)
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
case 18:case 14:q=C.dUp()
w=22
return A.b(C.JT(a3,q),$async$JU)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JU,v)},
dwG(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.bos(),w).eu(0),u=new A.F(d,new C.bot(),w).eu(0),t=new A.F(d,new C.bou(),w).eu(0),s=new A.F(d,new C.bov(),w).eu(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dkw(null,q,u,t,v,s));++q}return r},
axn(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axn=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JU(d),$async$axn)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.bow(),s).eu(0)
p=r.de(t,new C.box(),s).eu(0)
o=r.de(t,new C.boy(),s).eu(0)
n=r.de(t,new C.boz(),s).eu(0)
m=C.dkw(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JT(d,t),$async$axn)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axn,v)},
JT(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JT=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JT)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.bor(),x.P)
s=A.B(s,s.$ti.j("a4.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ar(s,null)),$async$JT)
case 3:return A.f(null,v)}})
return A.h($async$JT,v)},
dUp(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dkw(w,w,t,s,u,r)
return q},
dkw(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6F[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6F[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boq(),A.a_(p).j("F<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hw(i.bH(256),16),2,"0")
s=B.h.bh(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a3(e,20)
k=D.bWV[w]
j=D.bNL[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dUq(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a2())},
dUq(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hw(d.bH(256),16),2,"0")
return B.h.fw(v)},
dgu:function dgu(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d,e){this.a=d
this.b=e},
Nf:function Nf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oc:function oc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
boA:function boA(){},
boB:function boB(){},
bos:function bos(){},
bot:function bot(){},
bou:function bou(){},
bov:function bov(){},
bow:function bow(){},
box:function box(){},
boy:function boy(){},
boz:function boz(){},
bor:function bor(){},
boq:function boq(){},
JS:function JS(d,e){this.c=d
this.a=e},
agc:function agc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGD:function cGD(){},
cGC:function cGC(d,e){this.a=d
this.b=e},
cGA:function cGA(d){this.a=d},
cGB:function cGB(d,e){this.a=d
this.b=e},
cGE:function cGE(d){this.a=d},
cGI:function cGI(d){this.a=d},
cGJ:function cGJ(d,e){this.a=d
this.b=e},
cGH:function cGH(d,e,f){this.a=d
this.b=e
this.c=f},
cGG:function cGG(d,e){this.a=d
this.b=e},
cGF:function cGF(d,e){this.a=d
this.b=e},
cGK:function cGK(d){this.a=d},
Wx:function Wx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKf:function aKf(d,e){this.c=d
this.a=e},
JR:function JR(d,e){this.c=d
this.a=e},
aLo:function aLo(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGx:function cGx(d){this.a=d},
cGy:function cGy(d){this.a=d},
cGz:function cGz(d){this.a=d},
cGw:function cGw(d,e){this.a=d
this.b=e},
cGt:function cGt(d){this.a=d},
cGu:function cGu(d){this.a=d},
cGs:function cGs(d,e){this.a=d
this.b=e},
cGv:function cGv(d){this.a=d},
cGr:function cGr(d){this.a=d},
aSj:function aSj(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSk:function aSk(d,e,f){this.c=d
this.d=e
this.a=f},
aLu:function aLu(d,e){this.c=d
this.a=e},
aSi:function aSi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cW5:function cW5(d){this.a=d},
cW6:function cW6(d){this.a=d},
aMN:function aMN(d){this.a=d},
aGt:function aGt(d,e){this.c=d
this.a=e},
dUo(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dUn(v)
if(u!=null)return new C.qp(w,C.dku(u,!1),D.aee,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dUm(v)
if(t!=null)return new C.qp(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aef,"TikTok",q)
s=C.dUl(w,v)
if(s!=null)return s
r=C.dUk(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qp(w,w,D.csl,"Video",q)
return q},
dUl(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qp(d,"https://www.instagram.com/reel/"+w+u,D.O_,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qp(d,"https://www.instagram.com/p/"+w+u,D.O_,t,null)}return null},
dUk(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qp(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bf,!1)+"&show_text=false&width=734",D.aeg,"Facebook",null)},
dUn(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dr(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dUm(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dr(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
JV:function JV(d,e){this.a=d
this.b=e},
qp:function qp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6v:function a6v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLp:function aLp(d,e){var _=this
_.d=$
_.cN$=d
_.aQ$=e
_.c=_.a=null},
aMS:function aMS(d,e){this.c=d
this.a=e},
cLn:function cLn(d){this.a=d},
cLo:function cLo(d){this.a=d},
Fj:function Fj(d,e){this.c=d
this.a=e},
al7:function al7(){},
dwF(d,e,f,g,h,i){return new C.a6w(i,f,h,e,g,d)},
ecI(d){var w=window
w.toString
A.hj(w,"message",new C.dcU(d),!1,x._)},
a6w:function a6w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agd:function agd(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cGL:function cGL(d){this.a=d},
cGU:function cGU(d){this.a=d},
cGR:function cGR(d){this.a=d},
cGQ:function cGQ(d){this.a=d},
cGS:function cGS(d){this.a=d},
cGP:function cGP(d){this.a=d},
cGT:function cGT(d){this.a=d},
cGO:function cGO(d){this.a=d},
cGN:function cGN(d){this.a=d},
cGM:function cGM(d){this.a=d},
dcU:function dcU(d){this.a=d},
dUg(){var w,v,u
try{v=A.AI()
w=v.grW(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dku(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bh(w,"&")},
boo(d){var w=A.ao(y.c,!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
dwA(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUh(d,e,f){var w,v,u=C.boo(d)
if(u!=null){if(f){w=C.dUg()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dwA(C.dku(u,e))}return C.dwA(d)},
dUi(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dUj(d){var w
if($.P_().a==null)return!1
w=$.Gj().a
return d>=w&&d<w+4},
dwD(){var w=$.axm
if(w!=null)w.ad(0)
$.axm=null
$.Gj().sv(0,0)},
dwC(){var w,v,u,t=$.P_()
if(t.a==null)return
w=$.axm
if(w!=null)w.ad(0)
v=$.dwB
if(v<=4){t=t.a
t.toString
C.dkv(t)
return}w=$.Gj()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dkv(t)},
dkv(d){var w=$.axm
if(w!=null)w.ad(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.axm=A.dH(A.dp(0,0,0,0,0,w),C.ecX())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nf.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.v,1),r=A.W(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fB,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JS.prototype={
T(){return new C.agc(A.a([],x.e))},
gdP(){return this.c}}
C.agc.prototype={
a_(){var w=this
w.a5()
$.Gj().ap(0,w.gaxn())
C.ecI(w.gbnC())
w.YZ()},
bn1(){if(this.c!=null)this.q(new C.cGD())},
bnD(){C.dwC()},
p(){$.Gj().Z(0,this.gaxn())
C.dwD()
$.P_().sv(0,null)
this.a4()},
YZ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YZ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JU(t.a.c),$async$YZ)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cGC(t,s))
$.bop=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$YZ,v)},
UZ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UZ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cGA(t))
w=3
return A.b(C.axn(t.a.c),$async$UZ)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cGB(t,s))
$.bop=J.a3(t.d)
t.c.H(x.q).f.U(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UZ,v)},
bpz(d){var w=this.c
w.toString
A.a7(w,!1).cv(A.ez(new C.cGE(d),!1,null,x.H))},
bqb(){var w=this.c
w.toString
return C.Zo(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.bA,s=A.aL(v,v,v,v,B.Ld,v,v,v,new C.cGI(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DL(A.H(A.a([A.J(new A.I(B.j4,A.j(r,v,1,B.ax,v,v,v,A.l(v,v,u?B.e:B.V,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aF(!1,B.U,!0,v,A.aO(!1,v,!0,new A.I(B.bc,A.W(B.hb,B.a6,v,v,28),v),B.cN,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbqa(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a5)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.bZ(!0,A.w(A.a([new A.I(D.WN,r,v),A.J(w.e?B.ot:new A.lc($.P_(),new C.cGJ(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.arb(B.a6,B.Gz,B.mf,D.d6F,w.e?v:new C.cGK(w)),v)}}
C.Wx.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.a6(0,B.F,B.a6.l(0.18),B.dF,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6v(n,!0,!C.dUj(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jH,B.n8,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.k,0,B.q),B.j,B.yS,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aF(!1,B.U,!0,u,A.aO(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c5(p,A.fy(A.w(A.a([new C.aKf(o,u),A.J(n,1),A.t(u,A.H(A.a([A.W(B.Bi,B.a6.l(0.85),u,u,9),D.cGM,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.k,0,u,u),B.j,B.au,u,u,u,u,u,D.aDo,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,u,u,new A.q(u,u,r,s,q,D.a_U,B.p),u,u,u,B.h6,u,u,u),1),B.aM,A.j(o.b,u,1,B.ax,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ax,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ax,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a5)}}
C.aKf.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gau(this.c.c.split("-")),w,w,B.ax,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rI,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.au,w,w,w,w,w,B.WE,w,w,w)}}
C.JR.prototype={
T(){return new C.aLo()}}
C.aLo.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bA,t=A.aL(w,w,w,w,B.Ld,w,w,w,new C.cGx(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.bZ(!0,A.w(A.a([new A.I(D.WN,A.H(A.a([t,A.J(new A.DL(A.H(A.a([A.J(new A.I(B.j4,A.j(s.b+" \xb7 "+s.c,w,1,B.ax,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aF(!1,B.U,!0,w,A.aO(!1,w,!0,new A.I(B.bc,A.W(B.hb,B.a6,w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGy(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.J(new A.lc($.P_(),new C.cGz(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aSj.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a6(0,B.F,B.a6.l(0.35),B.eX,28),new A.a6(0,B.F,B.A.l(0.45),B.d5,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dwF(new A.dq(v+"_full_"+u,x.W),!1,u,!1,w.gaN4(),v+"_full")
w=v}else w=new C.aLu(t.r,s)}else w=new C.aGt(m,s)
else w=D.ddu
return A.t(s,A.c5(n,A.fy(A.w(A.a([new C.aSk(m,l,s),A.J(w,1),new C.aSi(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,s,s,new A.q(s,s,o,q,p,D.a_U,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aSk.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dm(r)
r=A.hc(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h3:B.j2)===B.h3?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o3,s,s,s),B.bw,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aOk,B.eo,D.aNA,B.eo,D.aOo],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.W(B.L0,B.a6.l(0.9),s,s,12),B.eo,A.J(A.j(u.c,s,s,B.ax,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.au,s,s,s,s,s,D.aEd,s,s,s)}}
C.aLu.prototype={
B(d){var w=null
return A.t(w,A.aH(A.w(A.a([A.W(B.AM,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.f4(D.aRC,D.cWd,this.c,A.eg(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aG(B.a6.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yS,w,w,w,w,w,w,w,w,1/0)}}
C.aSi.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axd(B.B9,"YouTube",s===0,r,new C.cW5(u))
s=u.axd(B.km,"Device",s===1,r,new C.cW6(u))
w=r?"Power off":"Power on"
v=r?D.Zj:D.aLA
return A.t(t,A.H(A.a([q,B.am,s,B.bw,A.aL(t,t,t,t,A.W(v,r?B.bT:B.fL,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dw)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.au,t,t,t,t,t,D.aDX,t,t,t)},
axd(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a6:B.aD
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aF(!1,B.U,!0,u,A.aO(!1,A.m(10),!0,new A.I(B.nj,A.w(A.a([A.W(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a5),1)}}
C.aMN.prototype={
B(d){return D.aty}}
C.aGt.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jU,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tI("Serial",u.c),q=w.tI("Model",u.d),p=w.tI("Device ID",u.e),o=w.tI("IMEI",u.r),n=w.tI("MAC",u.f),m=w.tI("OS",u.w+" "+u.x),l=w.tI("Location",u.y+", "+u.z),k=w.tI("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tI("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.ak,r,q,p,o,n,m,l,k,j,w.tI("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bc,v,v,B.ai,!1)},
tI(d,e){var w=null
return new A.I(B.d1,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cv,A.j(e,w,w,w,w,w,w,D.cO7,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.JV.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qp.prototype={
gaN4(){var w=this.c
return w===D.aee||w===D.aef||w===D.O_||w===D.aeg}}
C.a6v.prototype={
T(){return new C.aLp(null,null)}}
C.aLp.prototype={
a_(){this.a5()
var w=A.bv(null,B.vb,null,1,null,this)
w.jE(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX3()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cV(t,new A.q(t,t,t,t,t,new A.ag(B.cj,B.ck,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.eC,p,t)
w=B.e.l(0.92)
q=A.aH(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jH,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n8
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aMS(s,t),r,q,A.aM(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aM(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aM(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aD(B.ag,t,B.bb,B.x,s,t)}}
C.aMS.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kr(u,B.M,new C.cLn(this),B.c9,B.bJ,!0,w,w,new C.cLo(this),w)
return new C.Fj(v,w)}}
C.Fj.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uP,B.SR],x.O),B.jH)
break
case 1:w=new A.aN(A.a([B.yS,D.aya],x.O),B.mc)
break
case 2:w=new A.aN(A.a([D.azH,D.axC],x.O),B.AS)
break
case 3:w=new A.aN(A.a([B.V,B.dx],x.O),B.AX)
break
case 4:w=new A.aN(A.a([B.au,B.aL],x.O),B.pk)
break
default:w=u}v=w.a
return A.t(u,A.aH(A.W(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.q(u,u,u,u,u,new A.ag(B.aB,B.aI,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.al7.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6w.prototype={
T(){return new C.agd()}}
C.agd.prototype={
a7I(d,e){var w,v=C.boo(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dku(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dUh(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFn(){var w,v=this
if(v.w)return
v.q(new C.cGL(v))
w=v.e
if(w!=null)v.a7I(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.Gl()
$.pI().uT(w,new C.cGU(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cGN(v))
w=v.e
w.toString
v.a7I(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.Zy,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fy(A.aH(new A.I(new A.U(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1J(n,B.tw,w)],v)
if(o.f)w.push(A.fy(A.aH(new A.aa(28,28,D.auF,n),n,n,n),B.d8,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.v,1)
q=A.W(B.L6,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eY(0,A.aF(!1,B.U,!0,n,A.aO(!1,n,!0,A.aH(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.Wd,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFm(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a5)))}v=C.boo(o.a.d)
if(v!=null)w.push(A.aM(8,A.kb(D.aPM,D.d2m,new C.cGM(o),A.iP(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aD(B.ag,n,B.bb,B.x,w,n)}}
var z=a.updateTypes(["o(oc)","~()","JS(Q)","oc(Z<@,@>)","a1(oc)","Z<o,@>(oc)","aA<~>()","JR(Q)","lc<K>(Q,qp?,p?)","Wx(Q,K)","u0(Q,qp?,p?)","Fj(Q,am,dG?)"])
C.dgu.prototype={
$1(d){return new C.JS(this.a,null)},
$S:z+2}
C.dgt.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aI(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.V],j):A.a([B.e,B.aw],j),h=A.a([new A.a6(0,B.F,B.a6.l(0.22),B.eX,32)],x.V),g=A.O(m?B.ch:B.a6.l(0.18),B.v,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.av.l(m?0.18:0.08)],j)
e=A.t(n,D.aNj,B.j,n,n,new A.q(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.v,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.fj,w,A.aL(n,n,n,n,A.W(B.cU,m?B.aD:B.d8,n,n,n),n,n,n,new C.dgp(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.q(n,n,n,n,n,new A.ag(B.a9,B.aa,B.H,j,n,n),B.p),n,n,n,B.IU,n,n,n)
e=A.ec(B.cE,A.a([new C.Nf("YouTube",B.L_,m,n),new C.Nf("TikTok",B.mc,m,n),new C.Nf("Instagram",B.AS,m,n),new C.Nf("Facebook",B.AX,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cB:B.jv,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.W(B.ff,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ch:B.aP
u=A.w(A.a([e,B.aR,A.b2(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RB),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.G,!0,n,!0,n,!1,n,B.ah,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.at,B.i,B.k,0,B.q)
e=A.kb(D.aNm,D.d5R,new C.dgq(d),A.iP(n,n,n,n,n,n,n,n,n,n,n,m?B.by:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cV(A.c5(f,A.w(A.a([j,new A.I(B.Wr,u,n),new A.I(D.aFu,A.H(A.a([e,B.bw,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dgr(d),n,n),B.am,A.dM(D.aRn,D.d6z,new C.dgs(d,w),A.bF(B.a6,n,n,n,B.e,n,D.Wd,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.at,B.i,B.a_,0,B.q),B.aC),new A.q(n,n,g,k,h,new A.ag(B.aB,B.aI,B.H,i,n,n),B.p),B.bD),n)},
$S:82}
C.dgp.prototype={
$0(){A.a7(this.a,!1).S(null)
return null},
$S:0}
C.dgq.prototype={
$0(){C.dwD()
$.P_().sv(0,null)
A.a7(this.a,!1).S(null)},
$S:0}
C.dgr.prototype={
$0(){A.a7(this.a,!1).S(null)
return null},
$S:0}
C.dgs.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).S(w)
return null},
$S:0}
C.boA.prototype={
$1(d){return C.dwE(A.S(d,x.N,x.z))},
$S:z+3}
C.boB.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bos.prototype={
$1(d){return d.c},
$S:z+0}
C.bot.prototype={
$1(d){return d.r},
$S:z+0}
C.bou.prototype={
$1(d){return d.f},
$S:z+0}
C.bov.prototype={
$1(d){return d.at},
$S:z+0}
C.bow.prototype={
$1(d){return d.c},
$S:z+0}
C.box.prototype={
$1(d){return d.r},
$S:z+0}
C.boy.prototype={
$1(d){return d.f},
$S:z+0}
C.boz.prototype={
$1(d){return d.at},
$S:z+0}
C.bor.prototype={
$1(d){return d.aa()},
$S:z+5}
C.boq.prototype={
$1(d){return B.b.bi(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cGD.prototype={
$0(){},
$S:0}
C.cGC.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGA.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGB.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cGE.prototype={
$1(d){return new C.JR(this.a,null)},
$S:z+7}
C.cGI.prototype={
$0(){return A.a7(this.a,!1).eB()},
$S:0}
C.cGJ.prototype={
$3(d,e,f){return new A.lc($.Gj(),new C.cGH(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cGH.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dd(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.v,1)
q=A.W(B.jH,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Gj().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dk,B.ht,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c5(s,new A.iW(1.7777777777777777,C.dwF(new A.dq("fleet_master_"+r,x.W),!0,r,!0,j.gaN4(),"fleet_master"),k),B.aC),B.ak],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vS(0,B.x,k,B.G,k,k,k,k,!1,k,B.ai,!1,A.a([new A.kD(new A.I(B.II,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.om(D.aDA,A.aBp(new A.nC(new C.cGG(i,j),J.a3(i.d),!1,!0,!0,A.tu(),k),D.cHw),k)],w))},
$S:1705}
C.cGG.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wx(v,e,J.a3(w.d),new C.cGF(w,v),this.b,null)},
$S:z+9}
C.cGF.prototype={
$0(){return this.a.bpz(this.b)},
$S:0}
C.cGK.prototype={
$0(){this.a.UZ()
return null},
$S:0}
C.cGx.prototype={
$0(){return A.a7(this.a,!1).eB()},
$S:0}
C.cGy.prototype={
$0(){C.Zo(this.a,$.bop)
return null},
$S:0}
C.cGz.prototype={
$3(d,e,f){return A.f2(new C.cGw(this.a,e))},
$S:z+10}
C.cGw.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aSj(u,s.a.c,s.e,s.d,new C.cGt(s),new C.cGu(s),new C.cGv(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),B.x,v,B.G,v,B.oZ,v,v,B.ai),v,v,v)},
$S:1706}
C.cGt.prototype={
$0(){var w=this.a.c
w.toString
C.Zo(w,$.bop)
return null},
$S:0}
C.cGu.prototype={
$1(d){var w=this.a
return w.q(new C.cGs(w,d))},
$S:33}
C.cGs.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGv.prototype={
$0(){var w=this.a
return w.q(new C.cGr(w))},
$S:0}
C.cGr.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cW5.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cW6.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cLn.prototype={
$3(d,e,f){return new C.Fj(this.a.c,null)},
$S:z+11}
C.cLo.prototype={
$3(d,e,f){if(f==null)return e
return new A.aD(B.ag,null,B.bb,B.x,A.a([new C.Fj(this.a.c,null),D.atN],x.p),null)},
$C:"$3",
$R:3,
$S:256}
C.cGL.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cGU.prototype={
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
w.a7I(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hj(v,"load",new C.cGR(w),!1,u)
v=w.e
v.toString
A.hj(v,"error",new C.cGS(w),!1,u)
A.bN(B.kg,new C.cGT(w),x.H)
w=w.e
w.toString
return w},
$S:606}
C.cGR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cGQ(w))},
$S:47}
C.cGQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cGP(w))},
$S:47}
C.cGP.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cGT.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cGO(w))},
$S:12}
C.cGO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGN.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cGM.prototype={
$0(){var w,v=C.boo(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kK.SJ(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dcU.prototype={
$1(d){var w,v,u,t,s=new A.ES([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aD(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1707};(function aliases(){var w=C.al7.prototype
w.aX3=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agc.prototype,"gaxn","bn1",1)
w(u,"gbnC","bnD",1)
w(u,"gbqa","bqb",6)
w(C.agd.prototype,"gbFm","bFn",1)
v(C,"ecX","dwC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yy,[C.dgu,C.dgt,C.boA,C.boB,C.bos,C.bot,C.bou,C.bov,C.bow,C.box,C.boy,C.boz,C.bor,C.boq,C.cGE,C.cGJ,C.cGH,C.cGz,C.cGu,C.cLn,C.cLo,C.cGU,C.cGR,C.cGS,C.dcU])
v(A.a_P,[C.dgp,C.dgq,C.dgr,C.dgs,C.cGD,C.cGC,C.cGA,C.cGB,C.cGI,C.cGF,C.cGK,C.cGx,C.cGy,C.cGt,C.cGs,C.cGv,C.cGr,C.cW5,C.cW6,C.cGL,C.cGQ,C.cGP,C.cGT,C.cGO,C.cGN,C.cGM])
v(A.av,[C.Nf,C.Wx,C.aKf,C.aSj,C.aSk,C.aLu,C.aSi,C.aMN,C.aGt,C.aMS,C.Fj])
v(A.am,[C.oc,C.qp])
v(A.ae,[C.JS,C.JR,C.a6v,C.a6w])
v(A.af,[C.agc,C.aLo,C.al7,C.agd])
v(A.a_Q,[C.cGG,C.cGw])
u(C.JV,A.aHo)
u(C.aLp,C.al7)
w(C.al7,A.dX)})()
A.dA5(b.typeUniverse,JSON.parse('{"JS":{"ae":[],"p":[]},"Wx":{"av":[],"p":[]},"JR":{"ae":[],"p":[]},"Nf":{"av":[],"p":[]},"agc":{"af":["JS"]},"aKf":{"av":[],"p":[]},"aLo":{"af":["JR"]},"aSj":{"av":[],"p":[]},"aSk":{"av":[],"p":[]},"aLu":{"av":[],"p":[]},"aSi":{"av":[],"p":[]},"aMN":{"av":[],"p":[]},"aGt":{"av":[],"p":[]},"a6v":{"ae":[],"p":[]},"Fj":{"av":[],"p":[]},"aLp":{"af":["a6v"]},"aMS":{"av":[],"p":[]},"a6w":{"ae":[],"p":[]},"agd":{"af":["a6w"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a2<a6>"),O:w("a2<x>"),e:w("a2<oc>"),s:w("a2<o>"),p:w("a2<p>"),t:w("a2<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o7"),_:w("Da"),k:w("oc"),N:w("o"),Y:w("bk<a9>"),W:w("dq<o>"),J:w("lc<K>"),j:w("lc<qp?>"),E:w("xq<cL>"),q:w("Xn"),z:w("@"),Q:w("am?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zj=new A.N(983224,"MaterialIcons",!1)
D.aPU=new A.ab(D.Zj,48,B.bq,null,null,null)
D.cNM=new A.R(!0,B.cB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVa=new A.C("Powered off",null,D.cNM,null,null,null,null,null,null,null,null,null)
D.bKT=w([D.aPU,B.Q,D.cVa],x.p)
D.aAX=new A.eE(B.ai,B.i,B.a_,B.o,null,B.q,null,0,D.bKT,null)
D.aty=new A.dd(B.M,null,null,D.aAX,null)
D.cHa=new A.aa(18,18,B.Sy,null)
D.atN=new A.dd(B.M,null,null,D.cHa,null)
D.auF=new A.h7(2,null,null,null,null,B.a8,null,null,null,null)
D.axC=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.aya=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azH=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDo=new A.U(0,3,0,3)
D.aDA=new A.U(10,0,10,88)
D.aDX=new A.U(12,6,12,10)
D.aEd=new A.U(14,8,14,6)
D.Wd=new A.U(18,12,18,12)
D.aFu=new A.U(20,8,20,20)
D.WN=new A.U(8,6,15,8)
D.aLA=new A.N(983222,"MaterialIcons",!1)
D.aNj=new A.ab(B.jH,26,B.a6,null,null,null)
D.aNm=new A.ab(B.Yv,18,null,null,null,null)
D.aNA=new A.ab(B.rI,14,B.a8,null,null,null)
D.aLU=new A.N(983420,"MaterialIcons",!1)
D.aOk=new A.ab(D.aLU,14,B.a8,null,null,null)
D.aJU=new A.N(62895,"MaterialIcons",!1)
D.aOo=new A.ab(D.aJU,14,B.a8,null,null,null)
D.aPM=new A.ab(B.rB,16,B.a8,null,null,null)
D.aRn=new A.ab(B.iK,20,null,null,null,null)
D.aRC=new A.ab(B.hb,16,null,null,null,null)
D.bOy=w([B.aL,B.V],x.O)
D.a_U=new A.ag(B.aB,B.aI,B.H,D.bOy,null,null)
D.cAM=new A.aN("NGMY OS","14.2.1")
D.czz=new A.aN("VirtualDroid","13.8.4")
D.czy=new A.aN("NGMY OS","15.0.0")
D.cAk=new A.aN("VirtualDroid","14.1.2")
D.czw=new A.aN("NGMY Tab OS","12.9.7")
D.czu=new A.aN("NGMY OS","13.5.3")
D.czj=new A.aN("VirtualDroid","15.2.0")
D.czW=new A.aN("NGMY OS","14.8.1")
D.cAq=new A.aN("NGMY Tab OS","13.2.4")
D.cAW=new A.aN("VirtualDroid","12.6.9")
D.czc=new A.aN("NGMY OS","16.0.1")
D.cz1=new A.aN("VirtualDroid","14.9.0")
D.cAD=new A.aN("NGMY Tab OS","14.0.3")
D.czI=new A.aN("NGMY OS","13.1.8")
D.czb=new A.aN("VirtualDroid","13.4.5")
D.czt=new A.aN("NGMY OS","15.3.2")
D.cAr=new A.aN("NGMY Tab OS","12.4.1")
D.cAG=new A.aN("VirtualDroid","16.1.0")
D.czV=new A.aN("NGMY OS","14.4.6")
D.cAN=new A.aN("VirtualDroid","15.0.8")
D.bNL=w([D.cAM,D.czz,D.czy,D.cAk,D.czw,D.czu,D.czj,D.czW,D.cAq,D.cAW,D.czc,D.cz1,D.cAD,D.czI,D.czb,D.czt,D.cAr,D.cAG,D.czV,D.cAN],A.b4("a2<+(o,o)>"))
D.cD1=new A.eN(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCA=new A.eN(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCv=new A.eN(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCE=new A.eN(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCr=new A.eN(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCG=new A.eN(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cD3=new A.eN(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCs=new A.eN(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCz=new A.eN(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCI=new A.eN(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCq=new A.eN(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCW=new A.eN(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCT=new A.eN(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCy=new A.eN(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCQ=new A.eN(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCP=new A.eN(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCp=new A.eN(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCD=new A.eN(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCN=new A.eN(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCS=new A.eN(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6F=w([D.cD1,D.cCA,D.cCv,D.cCE,D.cCr,D.cCG,D.cD3,D.cCs,D.cCz,D.cCI,D.cCq,D.cCW,D.cCT,D.cCy,D.cCQ,D.cCP,D.cCp,D.cCD,D.cCN,D.cCS],A.b4("a2<+(o,o,a9,a9,o)>"))
D.bWV=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aee=new C.JV(0,"youtube")
D.aef=new C.JV(1,"tiktok")
D.O_=new C.JV(2,"instagram")
D.aeg=new C.JV(3,"facebook")
D.csl=new C.JV(4,"other")
D.cGM=new A.aa(3,null,null,null)
D.cHw=new A.i6(4,10,8,0.52,null)
D.cWp=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKT=new A.aY(D.cWp,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cO7=new A.R(!0,B.e,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWd=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2m=new A.C("Open in YouTube",null,B.iU,null,null,null,null,null,null,null,null,null)
D.d5R=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d6z=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d6F=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddu=new C.aMN(null)})();(function staticFields(){$.dwB=20
$.axm=null
$.bop=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ehN","Gj",()=>A.aDd(0))
w($,"ehO","P_",()=>A.aDd(null))})()};
(a=>{a["R14GeWZWbpM50LvG+mWR1xZXyYE="]=a.current})($__dart_deferred_initializers__);