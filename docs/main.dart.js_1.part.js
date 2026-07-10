((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eef(d,e){A.a6(d,!1).cw(A.ez(new C.dgJ(e),!0,null,x.H))},
Zs(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zs=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P2()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aP),t)
w=3
return A.b(A.dL(B.L,new C.dgI(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zs)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dUD(r)
if(q==null){d.H(x.q).f.U(D.cLu)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$Zs)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dwQ=n
p=C.dUx(n)
n=$.Gm()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dkK(q)
d.H(x.q).f.U(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zs,v)},
dwT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
JX(d){return C.dUG(d)},
dUG(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JX=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JX)
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
k=A.dl(k,new C.boD(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.boE(),j),j.j("E.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dwV(q)
w=12
return A.b(C.JW(a3,p),$async$JX)
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
case 19:m=C.dwT(A.S(n,x.N,x.z))
l=C.dwV(A.a([m],x.e))
w=21
return A.b(C.JW(a3,l),$async$JX)
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
case 18:case 14:q=C.dUE()
w=22
return A.b(C.JW(a3,q),$async$JX)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JX,v)},
dwV(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.bov(),w).ev(0),u=new A.F(d,new C.bow(),w).ev(0),t=new A.F(d,new C.box(),w).ev(0),s=new A.F(d,new C.boy(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dkL(null,q,u,t,v,s));++q}return r},
axr(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axr=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JX(d),$async$axr)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boz(),s).ev(0)
p=r.de(t,new C.boA(),s).ev(0)
o=r.de(t,new C.boB(),s).ev(0)
n=r.de(t,new C.boC(),s).ev(0)
m=C.dkL(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JW(d,t),$async$axr)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axr,v)},
JW(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JW=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JW)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.bou(),x.P)
s=A.B(s,s.$ti.j("a4.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JW)
case 3:return A.f(null,v)}})
return A.h($async$JW,v)},
dUE(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dkL(w,w,t,s,u,r)
return q},
dkL(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6F[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6F[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.bot(),A.a_(p).j("F<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.hw(i.bH(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a3(e,20)
k=D.bXa[w]
j=D.bNX[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dUF(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a2())},
dUF(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fw(v)},
dgJ:function dgJ(d){this.a=d},
dgI:function dgI(d,e){this.a=d
this.b=e},
dgE:function dgE(d){this.a=d},
dgF:function dgF(d){this.a=d},
dgG:function dgG(d){this.a=d},
dgH:function dgH(d,e){this.a=d
this.b=e},
Ni:function Ni(d,e,f,g){var _=this
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
boD:function boD(){},
boE:function boE(){},
bov:function bov(){},
bow:function bow(){},
box:function box(){},
boy:function boy(){},
boz:function boz(){},
boA:function boA(){},
boB:function boB(){},
boC:function boC(){},
bou:function bou(){},
bot:function bot(){},
JV:function JV(d,e){this.c=d
this.a=e},
agh:function agh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGR:function cGR(){},
cGQ:function cGQ(d,e){this.a=d
this.b=e},
cGO:function cGO(d){this.a=d},
cGP:function cGP(d,e){this.a=d
this.b=e},
cGS:function cGS(d){this.a=d},
cGW:function cGW(d){this.a=d},
cGX:function cGX(d,e){this.a=d
this.b=e},
cGV:function cGV(d,e,f){this.a=d
this.b=e
this.c=f},
cGU:function cGU(d,e){this.a=d
this.b=e},
cGT:function cGT(d,e){this.a=d
this.b=e},
cGY:function cGY(d){this.a=d},
WB:function WB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKj:function aKj(d,e){this.c=d
this.a=e},
JU:function JU(d,e){this.c=d
this.a=e},
aLt:function aLt(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGL:function cGL(d){this.a=d},
cGM:function cGM(d){this.a=d},
cGN:function cGN(d){this.a=d},
cGK:function cGK(d,e){this.a=d
this.b=e},
cGH:function cGH(d){this.a=d},
cGI:function cGI(d){this.a=d},
cGG:function cGG(d,e){this.a=d
this.b=e},
cGJ:function cGJ(d){this.a=d},
cGF:function cGF(d){this.a=d},
aSo:function aSo(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSp:function aSp(d,e,f){this.c=d
this.d=e
this.a=f},
aLz:function aLz(d,e){this.c=d
this.a=e},
aSn:function aSn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWj:function cWj(d){this.a=d},
cWk:function cWk(d){this.a=d},
aMS:function aMS(d){this.a=d},
aGx:function aGx(d,e){this.c=d
this.a=e},
dUD(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dUC(v)
if(u!=null)return new C.qr(w,C.dkJ(u,!1),D.aee,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dUB(v)
if(t!=null)return new C.qr(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aef,"TikTok",q)
s=C.dUA(w,v)
if(s!=null)return s
r=C.dUz(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qr(w,w,D.csW,"Video",q)
return q},
dUA(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qr(d,"https://www.instagram.com/reel/"+w+u,D.O1,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dr(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qr(d,"https://www.instagram.com/p/"+w+u,D.O1,t,null)}return null},
dUz(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qr(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bg,!1)+"&show_text=false&width=734",D.aeg,"Facebook",null)},
dUC(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dr(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dUB(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dr(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
JY:function JY(d,e){this.a=d
this.b=e},
qr:function qr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6z:function a6z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLu:function aLu(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aMX:function aMX(d,e){this.c=d
this.a=e},
cLB:function cLB(d){this.a=d},
cLC:function cLC(d){this.a=d},
Fl:function Fl(d,e){this.c=d
this.a=e},
alc:function alc(){},
dwU(d,e,f,g,h,i){return new C.a6A(i,f,h,e,g,d)},
ecZ(d){var w=window
w.toString
A.hk(w,"message",new C.dd8(d),!1,x._)},
a6A:function a6A(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agi:function agi(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cGZ:function cGZ(d){this.a=d},
cH7:function cH7(d){this.a=d},
cH4:function cH4(d){this.a=d},
cH3:function cH3(d){this.a=d},
cH5:function cH5(d){this.a=d},
cH2:function cH2(d){this.a=d},
cH6:function cH6(d){this.a=d},
cH1:function cH1(d){this.a=d},
cH0:function cH0(d){this.a=d},
cH_:function cH_(d){this.a=d},
dd8:function dd8(d){this.a=d},
dUv(){var w,v,u
try{v=A.AK()
w=v.grW(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dkJ(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
bor(d){var w=A.ap(y.c,!0,!1,!1,!1).dr(d)
return w==null?null:w.b[1]},
dwP(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUw(d,e,f){var w,v,u=C.bor(d)
if(u!=null){if(f){w=C.dUv()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dwP(C.dkJ(u,e))}return C.dwP(d)},
dUx(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dUy(d){var w
if($.P2().a==null)return!1
w=$.Gm().a
return d>=w&&d<w+4},
dwS(){var w=$.axq
if(w!=null)w.ad(0)
$.axq=null
$.Gm().sv(0,0)},
dwR(){var w,v,u,t=$.P2()
if(t.a==null)return
w=$.axq
if(w!=null)w.ad(0)
v=$.dwQ
if(v<=4){t=t.a
t.toString
C.dkK(t)
return}w=$.Gm()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dkK(t)},
dkK(d){var w=$.axq
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
default:w=null}$.axq=A.dH(A.dq(0,0,0,0,0,w),C.edd())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ni.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.v,1),r=A.W(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fB,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fe,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JV.prototype={
T(){return new C.agh(A.a([],x.e))},
gdP(){return this.c}}
C.agh.prototype={
a_(){var w=this
w.a5()
$.Gm().ap(0,w.gaxo())
C.ecZ(w.gbnF())
w.Z_()},
bn4(){if(this.c!=null)this.q(new C.cGR())},
bnG(){C.dwR()},
p(){$.Gm().Z(0,this.gaxo())
C.dwS()
$.P2().sv(0,null)
this.a4()},
Z_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Z_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JX(t.a.c),$async$Z_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cGQ(t,s))
$.bos=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Z_,v)},
V_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cGO(t))
w=3
return A.b(C.axr(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cGP(t,s))
$.bos=J.a3(t.d)
t.c.H(x.q).f.U(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V_,v)},
bpC(d){var w=this.c
w.toString
A.a6(w,!1).cw(A.ez(new C.cGS(d),!1,null,x.H))},
bqe(){var w=this.c
w.toString
return C.Zs(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fd:B.bA,s=A.aL(v,v,v,v,B.Lf,v,v,v,new C.cGW(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DN(A.H(A.a([A.J(new A.I(B.j5,A.j(r,v,1,B.av,v,v,v,A.l(v,v,u?B.e:B.V,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aF(!1,B.U,!0,v,A.aO(!1,v,!0,new A.I(B.bc,A.W(B.hc,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbqd(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a5)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.c_(!0,A.w(A.a([new A.I(D.WO,r,v),A.J(w.e?B.ou:new A.ld($.P2(),new C.cGX(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.arg(B.a6,B.GB,B.mf,D.d7j,w.e?v:new C.cGY(w)),v)}}
C.WB.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.a7(0,B.F,B.a6.l(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6z(n,!0,!C.dUy(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jI,B.n8,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.k,0,B.q),B.j,B.yU,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aF(!1,B.U,!0,u,A.aO(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c2(p,A.fy(A.w(A.a([new C.aKj(o,u),A.J(n,1),A.t(u,A.H(A.a([A.W(B.Bj,B.a6.l(0.85),u,u,9),D.cHn,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.k,0,u,u),B.j,B.at,u,u,u,u,u,D.aDs,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,u,u,new A.q(u,u,r,s,q,D.a_V,B.p),u,u,u,B.h7,u,u,u),1),B.aM,A.j(o.b,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.av,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a5)}}
C.aKj.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gar(this.c.c.split("-")),w,w,B.av,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.at,w,w,w,w,w,B.WF,w,w,w)}}
C.JU.prototype={
T(){return new C.aLt()}}
C.aLt.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fd:B.bA,t=A.aL(w,w,w,w,B.Lf,w,w,w,new C.cGL(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.I(D.WO,A.H(A.a([t,A.J(new A.DN(A.H(A.a([A.J(new A.I(B.j5,A.j(s.b+" \xb7 "+s.c,w,1,B.av,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aF(!1,B.U,!0,w,A.aO(!1,w,!0,new A.I(B.bc,A.W(B.hc,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGM(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.J(new A.ld($.P2(),new C.cGN(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aSo.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a7(0,B.F,B.a6.l(0.35),B.eX,28),new A.a7(0,B.F,B.A.l(0.45),B.d5,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dwU(new A.dp(v+"_full_"+u,x.W),!1,u,!1,w.gaN5(),v+"_full")
w=v}else w=new C.aLz(t.r,s)}else w=new C.aGx(m,s)
else w=D.de8
return A.t(s,A.c2(n,A.fy(A.w(A.a([new C.aSp(m,l,s),A.J(w,1),new C.aSn(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,s,s,new A.q(s,s,o,q,p,D.a_V,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aSp.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dm(r)
r=A.hc(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h4:B.j3)===B.h4?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o4,s,s,s),B.bw,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aOo,B.eo,D.aNE,B.eo,D.aOs],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.W(B.L2,B.a6.l(0.9),s,s,12),B.eo,A.J(A.j(u.c,s,s,B.av,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.at,s,s,s,s,s,D.aEh,s,s,s)}}
C.aLz.prototype={
B(d){var w=null
return A.t(w,A.aH(A.w(A.a([A.W(B.AN,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.f5(D.aRG,D.cWQ,this.c,A.eh(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aG(B.a6.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yU,w,w,w,w,w,w,w,w,1/0)}}
C.aSn.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axe(B.Ba,"YouTube",s===0,r,new C.cWj(u))
s=u.axe(B.km,"Device",s===1,r,new C.cWk(u))
w=r?"Power off":"Power on"
v=r?D.Zk:D.aLE
return A.t(t,A.H(A.a([q,B.am,s,B.bw,A.aL(t,t,t,t,A.W(v,r?B.bT:B.fP,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dr)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.at,t,t,t,t,t,D.aE0,t,t,t)},
axe(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a6:B.aD
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aF(!1,B.U,!0,u,A.aO(!1,A.m(10),!0,new A.I(B.nj,A.w(A.a([A.W(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a5),1)}}
C.aMS.prototype={
B(d){return D.atB}}
C.aGx.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jV,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tI("Serial",u.c),q=w.tI("Model",u.d),p=w.tI("Device ID",u.e),o=w.tI("IMEI",u.r),n=w.tI("MAC",u.f),m=w.tI("OS",u.w+" "+u.x),l=w.tI("Location",u.y+", "+u.z),k=w.tI("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tI("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.ak,r,q,p,o,n,m,l,k,j,w.tI("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bc,v,v,B.ai,!1)},
tI(d,e){var w=null
return new A.I(B.d2,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cw,A.j(e,w,w,w,w,w,w,D.cOJ,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.JY.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qr.prototype={
gaN5(){var w=this.c
return w===D.aee||w===D.aef||w===D.O1||w===D.aeg}}
C.a6z.prototype={
T(){return new C.aLu(null,null)}}
C.aLu.prototype={
a_(){this.a5()
var w=A.bv(null,B.vd,null,1,null,this)
w.jE(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX4()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cV(t,new A.q(t,t,t,t,t,new A.ag(B.ck,B.cj,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.eC,p,t)
w=B.e.l(0.92)
q=A.aH(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jI,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n8
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aMX(s,t),r,q,A.aM(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aM(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aM(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aC(B.af,t,B.b9,B.x,s,t)}}
C.aMX.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kr(u,B.M,new C.cLB(this),B.c9,B.bJ,!0,w,w,new C.cLC(this),w)
return new C.Fl(v,w)}}
C.Fl.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uR,B.ST],x.O),B.jI)
break
case 1:w=new A.aN(A.a([B.yU,D.aye],x.O),B.mc)
break
case 2:w=new A.aN(A.a([D.azL,D.axG],x.O),B.AT)
break
case 3:w=new A.aN(A.a([B.V,B.ds],x.O),B.AY)
break
case 4:w=new A.aN(A.a([B.at,B.aL],x.O),B.pm)
break
default:w=u}v=w.a
return A.t(u,A.aH(A.W(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.q(u,u,u,u,u,new A.ag(B.aB,B.aG,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.alc.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6A.prototype={
T(){return new C.agi()}}
C.agi.prototype={
a7J(d,e){var w,v=C.bor(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dkJ(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dUw(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFq(){var w,v=this
if(v.w)return
v.q(new C.cGZ(v))
w=v.e
if(w!=null)v.a7J(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.Go()
$.pI().uT(w,new C.cH7(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cH0(v))
w=v.e
w.toString
v.a7J(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.Zz,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fy(A.aH(new A.I(new A.U(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1M(n,B.tB,w)],v)
if(o.f)w.push(A.fy(A.aH(new A.aa(28,28,D.auI,n),n,n,n),B.d8,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.v,1)
q=A.W(B.L8,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eK(0,A.aF(!1,B.U,!0,n,A.aO(!1,n,!0,A.aH(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.We,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFp(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a5)))}v=C.bor(o.a.d)
if(v!=null)w.push(A.aM(8,A.kb(D.aPQ,D.d30,new C.cH_(o),A.iQ(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fe,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aC(B.af,n,B.b9,B.x,w,n)}}
var z=a.updateTypes(["o(oc)","~()","JV(Q)","oc(Z<@,@>)","a1(oc)","Z<o,@>(oc)","aA<~>()","JU(Q)","ld<K>(Q,qr?,p?)","WB(Q,K)","u2(Q,qr?,p?)","Fl(Q,am,dG?)"])
C.dgJ.prototype={
$1(d){return new C.JV(this.a,null)},
$S:z+2}
C.dgI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aI(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.V],j):A.a([B.e,B.ax],j),h=A.a([new A.a7(0,B.F,B.a6.l(0.22),B.eX,32)],x.V),g=A.O(m?B.ch:B.a6.l(0.18),B.v,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNn,B.j,n,n,new A.q(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.v,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.fk,w,A.aL(n,n,n,n,A.W(B.cU,m?B.aD:B.d8,n,n,n),n,n,n,new C.dgE(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.q(n,n,n,n,n,new A.ag(B.a9,B.aa,B.H,j,n,n),B.p),n,n,n,B.IW,n,n,n)
e=A.ec(B.cF,A.a([new C.Ni("YouTube",B.L1,m,n),new C.Ni("TikTok",B.mc,m,n),new C.Ni("Instagram",B.AT,m,n),new C.Ni("Facebook",B.AY,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cC:B.jw,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.W(B.fg,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ch:B.aN
u=A.w(A.a([e,B.aR,A.b2(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RD),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.G,!0,n,!0,n,!1,n,B.ah,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a4,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.au,B.i,B.k,0,B.q)
e=A.kb(D.aNq,D.d6v,new C.dgF(d),A.iQ(n,n,n,n,n,n,n,n,n,n,n,m?B.by:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cV(A.c2(f,A.w(A.a([j,new A.I(B.Ws,u,n),new A.I(D.aFx,A.H(A.a([e,B.bw,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dgG(d),n,n),B.am,A.dM(D.aRr,D.d7d,new C.dgH(d,w),A.bF(B.a6,n,n,n,B.e,n,D.We,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.au,B.i,B.a_,0,B.q),B.aC),new A.q(n,n,g,k,h,new A.ag(B.aB,B.aG,B.H,i,n,n),B.p),B.bD),n)},
$S:82}
C.dgE.prototype={
$0(){A.a6(this.a,!1).R(null)
return null},
$S:0}
C.dgF.prototype={
$0(){C.dwS()
$.P2().sv(0,null)
A.a6(this.a,!1).R(null)},
$S:0}
C.dgG.prototype={
$0(){A.a6(this.a,!1).R(null)
return null},
$S:0}
C.dgH.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a6(this.a,!1).R(w)
return null},
$S:0}
C.boD.prototype={
$1(d){return C.dwT(A.S(d,x.N,x.z))},
$S:z+3}
C.boE.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bov.prototype={
$1(d){return d.c},
$S:z+0}
C.bow.prototype={
$1(d){return d.r},
$S:z+0}
C.box.prototype={
$1(d){return d.f},
$S:z+0}
C.boy.prototype={
$1(d){return d.at},
$S:z+0}
C.boz.prototype={
$1(d){return d.c},
$S:z+0}
C.boA.prototype={
$1(d){return d.r},
$S:z+0}
C.boB.prototype={
$1(d){return d.f},
$S:z+0}
C.boC.prototype={
$1(d){return d.at},
$S:z+0}
C.bou.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bot.prototype={
$1(d){return B.b.bj(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cGR.prototype={
$0(){},
$S:0}
C.cGQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGP.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cGS.prototype={
$1(d){return new C.JU(this.a,null)},
$S:z+7}
C.cGW.prototype={
$0(){return A.a6(this.a,!1).eC()},
$S:0}
C.cGX.prototype={
$3(d,e,f){return new A.ld($.Gm(),new C.cGV(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cGV.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Df(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.v,1)
q=A.W(B.jI,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Gm().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dl,B.hv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iX(1.7777777777777777,C.dwU(new A.dp("fleet_master_"+r,x.W),!0,r,!0,j.gaN5(),"fleet_master"),k),B.aC),B.ak],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vU(0,B.x,k,B.G,k,k,k,k,!1,k,B.ai,!1,A.a([new A.kE(new A.I(B.IK,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.om(D.aDE,A.aBt(new A.nC(new C.cGU(i,j),J.a3(i.d),!1,!0,!0,A.tw(),k),D.cI7),k)],w))},
$S:1706}
C.cGU.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WB(v,e,J.a3(w.d),new C.cGT(w,v),this.b,null)},
$S:z+9}
C.cGT.prototype={
$0(){return this.a.bpC(this.b)},
$S:0}
C.cGY.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.cGL.prototype={
$0(){return A.a6(this.a,!1).eC()},
$S:0}
C.cGM.prototype={
$0(){C.Zs(this.a,$.bos)
return null},
$S:0}
C.cGN.prototype={
$3(d,e,f){return A.f3(new C.cGK(this.a,e))},
$S:z+10}
C.cGK.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aSo(u,s.a.c,s.e,s.d,new C.cGH(s),new C.cGI(s),new C.cGJ(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),B.x,v,B.G,v,B.p0,v,v,B.ai),v,v,v)},
$S:1707}
C.cGH.prototype={
$0(){var w=this.a.c
w.toString
C.Zs(w,$.bos)
return null},
$S:0}
C.cGI.prototype={
$1(d){var w=this.a
return w.q(new C.cGG(w,d))},
$S:33}
C.cGG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGJ.prototype={
$0(){var w=this.a
return w.q(new C.cGF(w))},
$S:0}
C.cGF.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWj.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWk.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cLB.prototype={
$3(d,e,f){return new C.Fl(this.a.c,null)},
$S:z+11}
C.cLC.prototype={
$3(d,e,f){if(f==null)return e
return new A.aC(B.af,null,B.b9,B.x,A.a([new C.Fl(this.a.c,null),D.atQ],x.p),null)},
$C:"$3",
$R:3,
$S:256}
C.cGZ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cH7.prototype={
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
w.a7J(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hk(v,"load",new C.cH4(w),!1,u)
v=w.e
v.toString
A.hk(v,"error",new C.cH5(w),!1,u)
A.bN(B.kg,new C.cH6(w),x.H)
w=w.e
w.toString
return w},
$S:604}
C.cH4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cH3(w))},
$S:47}
C.cH3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cH5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cH2(w))},
$S:47}
C.cH2.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cH6.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cH1(w))},
$S:12}
C.cH1.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cH0.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cH_.prototype={
$0(){var w,v=C.bor(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kK.SK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dd8.prototype={
$1(d){var w,v,u,t,s=new A.EU([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aD(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1708};(function aliases(){var w=C.alc.prototype
w.aX4=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agh.prototype,"gaxo","bn4",1)
w(u,"gbnF","bnG",1)
w(u,"gbqd","bqe",6)
w(C.agi.prototype,"gbFp","bFq",1)
v(C,"edd","dwR",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yA,[C.dgJ,C.dgI,C.boD,C.boE,C.bov,C.bow,C.box,C.boy,C.boz,C.boA,C.boB,C.boC,C.bou,C.bot,C.cGS,C.cGX,C.cGV,C.cGN,C.cGI,C.cLB,C.cLC,C.cH7,C.cH4,C.cH5,C.dd8])
v(A.a_T,[C.dgE,C.dgF,C.dgG,C.dgH,C.cGR,C.cGQ,C.cGO,C.cGP,C.cGW,C.cGT,C.cGY,C.cGL,C.cGM,C.cGH,C.cGG,C.cGJ,C.cGF,C.cWj,C.cWk,C.cGZ,C.cH3,C.cH2,C.cH6,C.cH1,C.cH0,C.cH_])
v(A.av,[C.Ni,C.WB,C.aKj,C.aSo,C.aSp,C.aLz,C.aSn,C.aMS,C.aGx,C.aMX,C.Fl])
v(A.am,[C.oc,C.qr])
v(A.ae,[C.JV,C.JU,C.a6z,C.a6A])
v(A.af,[C.agh,C.aLt,C.alc,C.agi])
v(A.a_U,[C.cGU,C.cGK])
u(C.JY,A.aHs)
u(C.aLu,C.alc)
w(C.alc,A.dX)})()
A.dAk(b.typeUniverse,JSON.parse('{"JV":{"ae":[],"p":[]},"WB":{"av":[],"p":[]},"JU":{"ae":[],"p":[]},"Ni":{"av":[],"p":[]},"agh":{"af":["JV"]},"aKj":{"av":[],"p":[]},"aLt":{"af":["JU"]},"aSo":{"av":[],"p":[]},"aSp":{"av":[],"p":[]},"aLz":{"av":[],"p":[]},"aSn":{"av":[],"p":[]},"aMS":{"av":[],"p":[]},"aGx":{"av":[],"p":[]},"a6z":{"ae":[],"p":[]},"Fl":{"av":[],"p":[]},"aLu":{"af":["a6z"]},"aMX":{"av":[],"p":[]},"a6A":{"ae":[],"p":[]},"agi":{"af":["a6A"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a2<a7>"),O:w("a2<x>"),e:w("a2<oc>"),s:w("a2<o>"),p:w("a2<p>"),t:w("a2<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o7"),_:w("Dc"),k:w("oc"),N:w("o"),Y:w("bk<a9>"),W:w("dp<o>"),J:w("ld<K>"),j:w("ld<qr?>"),E:w("xs<cM>"),q:w("Xr"),z:w("@"),Q:w("am?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zk=new A.N(983224,"MaterialIcons",!1)
D.aPY=new A.ab(D.Zk,48,B.bq,null,null,null)
D.cOn=new A.R(!0,B.cC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVN=new A.C("Powered off",null,D.cOn,null,null,null,null,null,null,null,null,null)
D.bL2=w([D.aPY,B.Q,D.cVN],x.p)
D.aB0=new A.eE(B.ai,B.i,B.a_,B.o,null,B.q,null,0,D.bL2,null)
D.atB=new A.dd(B.M,null,null,D.aB0,null)
D.cHM=new A.aa(18,18,B.SA,null)
D.atQ=new A.dd(B.M,null,null,D.cHM,null)
D.auI=new A.h7(2,null,null,null,null,B.a8,null,null,null,null)
D.axG=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.aye=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azL=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDs=new A.U(0,3,0,3)
D.aDE=new A.U(10,0,10,88)
D.aE0=new A.U(12,6,12,10)
D.aEh=new A.U(14,8,14,6)
D.We=new A.U(18,12,18,12)
D.aFx=new A.U(20,8,20,20)
D.WO=new A.U(8,6,15,8)
D.aLE=new A.N(983222,"MaterialIcons",!1)
D.aNn=new A.ab(B.jI,26,B.a6,null,null,null)
D.aNq=new A.ab(B.Yw,18,null,null,null,null)
D.aNE=new A.ab(B.rN,14,B.a8,null,null,null)
D.aLY=new A.N(983420,"MaterialIcons",!1)
D.aOo=new A.ab(D.aLY,14,B.a8,null,null,null)
D.aJY=new A.N(62895,"MaterialIcons",!1)
D.aOs=new A.ab(D.aJY,14,B.a8,null,null,null)
D.aPQ=new A.ab(B.rG,16,B.a8,null,null,null)
D.aRr=new A.ab(B.iK,20,null,null,null,null)
D.aRG=new A.ab(B.hc,16,null,null,null,null)
D.bOK=w([B.aL,B.V],x.O)
D.a_V=new A.ag(B.aB,B.aG,B.H,D.bOK,null,null)
D.cBn=new A.aN("NGMY OS","14.2.1")
D.cAa=new A.aN("VirtualDroid","13.8.4")
D.cA9=new A.aN("NGMY OS","15.0.0")
D.cAW=new A.aN("VirtualDroid","14.1.2")
D.cA7=new A.aN("NGMY Tab OS","12.9.7")
D.cA5=new A.aN("NGMY OS","13.5.3")
D.czV=new A.aN("VirtualDroid","15.2.0")
D.cAx=new A.aN("NGMY OS","14.8.1")
D.cB1=new A.aN("NGMY Tab OS","13.2.4")
D.cBx=new A.aN("VirtualDroid","12.6.9")
D.czO=new A.aN("NGMY OS","16.0.1")
D.czD=new A.aN("VirtualDroid","14.9.0")
D.cBe=new A.aN("NGMY Tab OS","14.0.3")
D.cAj=new A.aN("NGMY OS","13.1.8")
D.czN=new A.aN("VirtualDroid","13.4.5")
D.cA4=new A.aN("NGMY OS","15.3.2")
D.cB2=new A.aN("NGMY Tab OS","12.4.1")
D.cBh=new A.aN("VirtualDroid","16.1.0")
D.cAw=new A.aN("NGMY OS","14.4.6")
D.cBo=new A.aN("VirtualDroid","15.0.8")
D.bNX=w([D.cBn,D.cAa,D.cA9,D.cAW,D.cA7,D.cA5,D.czV,D.cAx,D.cB1,D.cBx,D.czO,D.czD,D.cBe,D.cAj,D.czN,D.cA4,D.cB2,D.cBh,D.cAw,D.cBo],A.b4("a2<+(o,o)>"))
D.cDD=new A.eP(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cDb=new A.eP(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cD6=new A.eP(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cDf=new A.eP(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cD2=new A.eP(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDh=new A.eP(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDF=new A.eP(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cD3=new A.eP(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cDa=new A.eP(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDj=new A.eP(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cD1=new A.eP(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDx=new A.eP(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDu=new A.eP(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cD9=new A.eP(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDr=new A.eP(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDq=new A.eP(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cD0=new A.eP(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cDe=new A.eP(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDo=new A.eP(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDt=new A.eP(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6F=w([D.cDD,D.cDb,D.cD6,D.cDf,D.cD2,D.cDh,D.cDF,D.cD3,D.cDa,D.cDj,D.cD1,D.cDx,D.cDu,D.cD9,D.cDr,D.cDq,D.cD0,D.cDe,D.cDo,D.cDt],A.b4("a2<+(o,o,a9,a9,o)>"))
D.bXa=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aee=new C.JY(0,"youtube")
D.aef=new C.JY(1,"tiktok")
D.O1=new C.JY(2,"instagram")
D.aeg=new C.JY(3,"facebook")
D.csW=new C.JY(4,"other")
D.cHn=new A.aa(3,null,null,null)
D.cI7=new A.i5(4,10,8,0.52,null)
D.cX1=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLu=new A.aY(D.cX1,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cOJ=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWQ=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d30=new A.C("Open in YouTube",null,B.iU,null,null,null,null,null,null,null,null,null)
D.d6v=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7d=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7j=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.de8=new C.aMS(null)})();(function staticFields(){$.dwQ=20
$.axq=null
$.bos=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ei3","Gm",()=>A.aDh(0))
w($,"ei4","P2",()=>A.aDh(null))})()};
(a=>{a["cJYsuMR09u7hkbf8mTSmL5VI1S4="]=a.current})($__dart_deferred_initializers__);