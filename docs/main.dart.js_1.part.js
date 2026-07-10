((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eeu(d,e){A.a6(d,!1).cw(A.ez(new C.dgY(e),!0,null,x.H))},
Zt(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zt=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P4()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aO),t)
w=3
return A.b(A.dL(B.L,new C.dgX(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zt)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dUS(r)
if(q==null){d.H(x.q).f.V(D.cLp)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$Zt)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dx4=n
p=C.dUM(n)
n=$.Go()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dkZ(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zt,v)},
dx7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
JZ(d){return C.dUV(d)},
dUV(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JZ=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JZ)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aE(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eI(r,x.f)
k=A.dl(k,new C.boO(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.boP(),j),j.j("E.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dx9(q)
w=12
return A.b(C.JY(a3,p),$async$JZ)
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
n=B.I.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dx7(A.S(n,x.N,x.z))
l=C.dx9(A.a([m],x.e))
w=21
return A.b(C.JY(a3,l),$async$JZ)
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
case 18:case 14:q=C.dUT()
w=22
return A.b(C.JY(a3,q),$async$JZ)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JZ,v)},
dx9(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boG(),w).ev(0),u=new A.F(d,new C.boH(),w).ev(0),t=new A.F(d,new C.boI(),w).ev(0),s=new A.F(d,new C.boJ(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dl_(null,q,u,t,v,s));++q}return r},
axy(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axy=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JZ(d),$async$axy)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boK(),s).ev(0)
p=r.de(t,new C.boL(),s).ev(0)
o=r.de(t,new C.boM(),s).ev(0)
n=r.de(t,new C.boN(),s).ev(0)
m=C.dl_(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JY(d,t),$async$axy)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axy,v)},
JY(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JY=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JY)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boF(),x.P)
s=A.B(s,s.$ti.j("a4.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JY)
case 3:return A.f(null,v)}})
return A.h($async$JY,v)},
dUT(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dl_(w,w,t,s,u,r)
return q},
dl_(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6D[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6D[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boE(),A.a_(p).j("F<1,o>")).fA(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fA(p)
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
k=D.bX6[w]
j=D.bNS[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dUU(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
dUU(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dgY:function dgY(d){this.a=d},
dgX:function dgX(d,e){this.a=d
this.b=e},
dgT:function dgT(d){this.a=d},
dgU:function dgU(d){this.a=d},
dgV:function dgV(d){this.a=d},
dgW:function dgW(d,e){this.a=d
this.b=e},
Nk:function Nk(d,e,f,g){var _=this
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
boO:function boO(){},
boP:function boP(){},
boG:function boG(){},
boH:function boH(){},
boI:function boI(){},
boJ:function boJ(){},
boK:function boK(){},
boL:function boL(){},
boM:function boM(){},
boN:function boN(){},
boF:function boF(){},
boE:function boE(){},
JX:function JX(d,e){this.c=d
this.a=e},
agj:function agj(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cH5:function cH5(){},
cH4:function cH4(d,e){this.a=d
this.b=e},
cH2:function cH2(d){this.a=d},
cH3:function cH3(d,e){this.a=d
this.b=e},
cH6:function cH6(d){this.a=d},
cHa:function cHa(d){this.a=d},
cHb:function cHb(d,e){this.a=d
this.b=e},
cH9:function cH9(d,e,f){this.a=d
this.b=e
this.c=f},
cH8:function cH8(d,e){this.a=d
this.b=e},
cH7:function cH7(d,e){this.a=d
this.b=e},
cHc:function cHc(d){this.a=d},
WD:function WD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKq:function aKq(d,e){this.c=d
this.a=e},
JW:function JW(d,e){this.c=d
this.a=e},
aLB:function aLB(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cH_:function cH_(d){this.a=d},
cH0:function cH0(d){this.a=d},
cH1:function cH1(d){this.a=d},
cGZ:function cGZ(d,e){this.a=d
this.b=e},
cGW:function cGW(d){this.a=d},
cGX:function cGX(d){this.a=d},
cGV:function cGV(d,e){this.a=d
this.b=e},
cGY:function cGY(d){this.a=d},
cGU:function cGU(d){this.a=d},
aSw:function aSw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSx:function aSx(d,e,f){this.c=d
this.d=e
this.a=f},
aLH:function aLH(d,e){this.c=d
this.a=e},
aSv:function aSv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWy:function cWy(d){this.a=d},
cWz:function cWz(d){this.a=d},
aN_:function aN_(d){this.a=d},
aGE:function aGE(d,e){this.c=d
this.a=e},
dUS(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dUR(v)
if(u!=null)return new C.qr(w,C.dkY(u,!1),D.aec,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dUQ(v)
if(t!=null)return new C.qr(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aed,"TikTok",q)
s=C.dUP(w,v)
if(s!=null)return s
r=C.dUO(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qr(w,w,D.csR,"Video",q)
return q},
dUP(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qr(d,"https://www.instagram.com/reel/"+w+u,D.O1,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qr(d,"https://www.instagram.com/p/"+w+u,D.O1,t,null)}return null},
dUO(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qr(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bg,!1)+"&show_text=false&width=734",D.aee,"Facebook",null)},
dUR(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dUQ(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K_:function K_(d,e){this.a=d
this.b=e},
qr:function qr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6A:function a6A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLC:function aLC(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aN4:function aN4(d,e){this.c=d
this.a=e},
cLQ:function cLQ(d){this.a=d},
cLR:function cLR(d){this.a=d},
Fn:function Fn(d,e){this.c=d
this.a=e},
alf:function alf(){},
dx8(d,e,f,g,h,i){return new C.a6B(i,f,h,e,g,d)},
edd(d){var w=window
w.toString
A.hk(w,"message",new C.ddn(d),!1,x._)},
a6B:function a6B(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agk:function agk(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHd:function cHd(d){this.a=d},
cHm:function cHm(d){this.a=d},
cHj:function cHj(d){this.a=d},
cHi:function cHi(d){this.a=d},
cHk:function cHk(d){this.a=d},
cHh:function cHh(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHg:function cHg(d){this.a=d},
cHf:function cHf(d){this.a=d},
cHe:function cHe(d){this.a=d},
ddn:function ddn(d){this.a=d},
dUK(){var w,v,u
try{v=A.AL()
w=v.grW(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dkY(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boC(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dx3(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUL(d,e,f){var w,v,u=C.boC(d)
if(u!=null){if(f){w=C.dUK()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dx3(C.dkY(u,e))}return C.dx3(d)},
dUM(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dUN(d){var w
if($.P4().a==null)return!1
w=$.Go().a
return d>=w&&d<w+4},
dx6(){var w=$.axx
if(w!=null)w.ad(0)
$.axx=null
$.Go().sv(0,0)},
dx5(){var w,v,u,t=$.P4()
if(t.a==null)return
w=$.axx
if(w!=null)w.ad(0)
v=$.dx4
if(v<=4){t=t.a
t.toString
C.dkZ(t)
return}w=$.Go()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dkZ(t)},
dkZ(d){var w=$.axx
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
default:w=null}$.axx=A.dH(A.dr(0,0,0,0,0,w),C.eds())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nk.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.v,1),r=A.W(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fB,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c5,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fe,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JX.prototype={
U(){return new C.agj(A.a([],x.e))},
gdP(){return this.c}}
C.agj.prototype={
a_(){var w=this
w.a5()
$.Go().aq(0,w.gaxp())
C.edd(w.gbnI())
w.Z_()},
bn7(){if(this.c!=null)this.q(new C.cH5())},
bnJ(){C.dx5()},
p(){$.Go().Z(0,this.gaxp())
C.dx6()
$.P4().sv(0,null)
this.a4()},
Z_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Z_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JZ(t.a.c),$async$Z_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cH4(t,s))
$.boD=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Z_,v)},
V_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cH2(t))
w=3
return A.b(C.axy(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cH3(t,s))
$.boD=J.a3(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V_,v)},
bpF(d){var w=this.c
w.toString
A.a6(w,!1).cw(A.ez(new C.cH6(d),!1,null,x.H))},
bqh(){var w=this.c
w.toString
return C.Zt(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fd:B.bA,s=A.aL(v,v,v,v,B.Lf,v,v,v,new C.cHa(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DP(A.H(A.a([A.J(new A.I(B.j5,A.j(r,v,1,B.av,v,v,v,A.l(v,v,u?B.e:B.V,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aH(!1,B.U,!0,v,A.aP(!1,v,!0,new A.I(B.bc,A.W(B.hb,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbqg(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a5)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.c_(!0,A.w(A.a([new A.I(D.WM,r,v),A.J(w.e?B.ou:new A.ld($.P4(),new C.cHb(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.ark(B.a6,B.GB,B.me,D.d7f,w.e?v:new C.cHc(w)),v)}}
C.WD.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.a7(0,B.F,B.a6.l(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6A(n,!0,!C.dUN(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jI,B.n8,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.k,0,B.q),B.j,B.yU,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aH(!1,B.U,!0,u,A.aP(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c2(p,A.fy(A.w(A.a([new C.aKq(o,u),A.J(n,1),A.t(u,A.H(A.a([A.W(B.Bj,B.a6.l(0.85),u,u,9),D.cHi,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.k,0,u,u),B.j,B.au,u,u,u,u,u,D.aDq,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,u,u,new A.q(u,u,r,s,q,D.a_T,B.p),u,u,u,B.h6,u,u,u),1),B.aM,A.j(o.b,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.av,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a5)}}
C.aKq.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gao(this.c.c.split("-")),w,w,B.av,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.au,w,w,w,w,w,B.WD,w,w,w)}}
C.JW.prototype={
U(){return new C.aLB()}}
C.aLB.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fd:B.bA,t=A.aL(w,w,w,w,B.Lf,w,w,w,new C.cH_(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.I(D.WM,A.H(A.a([t,A.J(new A.DP(A.H(A.a([A.J(new A.I(B.j5,A.j(s.b+" \xb7 "+s.c,w,1,B.av,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aH(!1,B.U,!0,w,A.aP(!1,w,!0,new A.I(B.bc,A.W(B.hb,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cH0(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a5)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.J(new A.ld($.P4(),new C.cH1(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aSw.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a7(0,B.F,B.a6.l(0.35),B.eX,28),new A.a7(0,B.F,B.A.l(0.45),B.d5,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dx8(new A.dp(v+"_full_"+u,x.W),!1,u,!1,w.gaN6(),v+"_full")
w=v}else w=new C.aLH(t.r,s)}else w=new C.aGE(m,s)
else w=D.de4
return A.t(s,A.c2(n,A.fy(A.w(A.a([new C.aSx(m,l,s),A.J(w,1),new C.aSv(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,s,s,new A.q(s,s,o,q,p,D.a_T,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aSx.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dm(r)
r=A.hc(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h3:B.j3)===B.h3?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o4,s,s,s),B.bw,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aOn,B.eo,D.aND,B.eo,D.aOr],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.W(B.L2,B.a6.l(0.9),s,s,12),B.eo,A.J(A.j(u.c,s,s,B.av,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.au,s,s,s,s,s,D.aEh,s,s,s)}}
C.aLH.prototype={
B(d){var w=null
return A.t(w,A.aG(A.w(A.a([A.W(B.AN,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.f4(D.aRE,D.cWM,this.c,A.eh(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yU,w,w,w,w,w,w,w,w,1/0)}}
C.aSv.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axf(B.Ba,"YouTube",s===0,r,new C.cWy(u))
s=u.axf(B.kl,"Device",s===1,r,new C.cWz(u))
w=r?"Power off":"Power on"
v=r?D.Zi:D.aLE
return A.t(t,A.H(A.a([q,B.am,s,B.bw,A.aL(t,t,t,t,A.W(v,r?B.bU:B.fO,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dr)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.au,t,t,t,t,t,D.aE_,t,t,t)},
axf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a6:B.aD
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aH(!1,B.U,!0,u,A.aP(!1,A.m(10),!0,new A.I(B.nk,A.w(A.a([A.W(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a5),1)}}
C.aN_.prototype={
B(d){return D.atB}}
C.aGE.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jV,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tI("Serial",u.c),q=w.tI("Model",u.d),p=w.tI("Device ID",u.e),o=w.tI("IMEI",u.r),n=w.tI("MAC",u.f),m=w.tI("OS",u.w+" "+u.x),l=w.tI("Location",u.y+", "+u.z),k=w.tI("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tI("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.al,r,q,p,o,n,m,l,k,j,w.tI("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bc,v,v,B.ai,!1)},
tI(d,e){var w=null
return new A.I(B.d2,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cw,A.j(e,w,w,w,w,w,w,D.cOE,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.K_.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qr.prototype={
gaN6(){var w=this.c
return w===D.aec||w===D.aed||w===D.O1||w===D.aee}}
C.a6A.prototype={
U(){return new C.aLC(null,null)}}
C.aLC.prototype={
a_(){this.a5()
var w=A.bu(null,B.vd,null,1,null,this)
w.jl(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX6()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cZ(t,new A.q(t,t,t,t,t,new A.ag(B.ci,B.ch,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.ex,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jI,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n8
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aN4(s,t),r,q,A.aM(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aM(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aM(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aC(B.af,t,B.ba,B.x,s,t)}}
C.aN4.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kr(u,B.M,new C.cLQ(this),B.ca,B.bJ,!0,w,w,new C.cLR(this),w)
return new C.Fn(v,w)}}
C.Fn.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uR,B.SR],x.O),B.jI)
break
case 1:w=new A.aN(A.a([B.yU,D.aye],x.O),B.mb)
break
case 2:w=new A.aN(A.a([D.azK,D.axG],x.O),B.AT)
break
case 3:w=new A.aN(A.a([B.V,B.ds],x.O),B.AY)
break
case 4:w=new A.aN(A.a([B.au,B.aL],x.O),B.pl)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.q(u,u,u,u,u,new A.ag(B.aB,B.aH,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.alf.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6B.prototype={
U(){return new C.agk()}}
C.agk.prototype={
a7J(d,e){var w,v=C.boC(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dkY(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dUL(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFt(){var w,v=this
if(v.w)return
v.q(new C.cHd(v))
w=v.e
if(w!=null)v.a7J(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gq()
$.pK().uT(w,new C.cHm(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHf(v))
w=v.e
w.toString
v.a7J(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.Zx,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fy(A.aG(new A.I(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1N(n,B.tB,w)],v)
if(o.f)w.push(A.fy(A.aG(new A.aa(28,28,D.auI,n),n,n,n),B.d8,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.v,1)
q=A.W(B.L8,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eL(0,A.aH(!1,B.U,!0,n,A.aP(!1,n,!0,A.aG(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.Wc,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFs(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a5)))}v=C.boC(o.a.d)
if(v!=null)w.push(A.aM(8,A.ka(D.aPP,D.d2X,new C.cHe(o),A.iQ(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fe,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aC(B.af,n,B.ba,B.x,w,n)}}
var z=a.updateTypes(["o(oc)","~()","JX(Q)","oc(Z<@,@>)","a1(oc)","Z<o,@>(oc)","aA<~>()","JW(Q)","ld<K>(Q,qr?,p?)","WD(Q,K)","u3(Q,qr?,p?)","Fn(Q,an,dG?)"])
C.dgY.prototype={
$1(d){return new C.JX(this.a,null)},
$S:z+2}
C.dgX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aI(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.V],j):A.a([B.e,B.ax],j),h=A.a([new A.a7(0,B.F,B.a6.l(0.22),B.eX,32)],x.V),g=A.O(m?B.cj:B.a6.l(0.18),B.v,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNm,B.j,n,n,new A.q(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.v,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.fk,w,A.aL(n,n,n,n,A.W(B.cU,m?B.aD:B.d8,n,n,n),n,n,n,new C.dgT(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.q(n,n,n,n,n,new A.ag(B.a9,B.aa,B.H,j,n,n),B.p),n,n,n,B.IW,n,n,n)
e=A.ec(B.cF,A.a([new C.Nk("YouTube",B.L1,m,n),new C.Nk("TikTok",B.mb,m,n),new C.Nk("Instagram",B.AT,m,n),new C.Nk("Facebook",B.AY,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cC:B.jw,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.W(B.fg,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cj:B.aP
u=A.w(A.a([e,B.aR,A.b2(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RC),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.G,!0,n,!0,n,!1,n,B.ah,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a4,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.at,B.i,B.k,0,B.q)
e=A.ka(D.aNp,D.d6r,new C.dgU(d),A.iQ(n,n,n,n,n,n,n,n,n,n,n,m?B.by:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.T(12,0,12,12+l.f.d),A.cZ(A.c2(f,A.w(A.a([j,new A.I(B.Wq,u,n),new A.I(D.aFx,A.H(A.a([e,B.bw,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dgV(d),n,n),B.am,A.dM(D.aRq,D.d79,new C.dgW(d,w),A.bF(B.a6,n,n,n,B.e,n,D.Wc,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.at,B.i,B.a_,0,B.q),B.aC),new A.q(n,n,g,k,h,new A.ag(B.aB,B.aH,B.H,i,n,n),B.p),B.bD),n)},
$S:82}
C.dgT.prototype={
$0(){A.a6(this.a,!1).R(null)
return null},
$S:0}
C.dgU.prototype={
$0(){C.dx6()
$.P4().sv(0,null)
A.a6(this.a,!1).R(null)},
$S:0}
C.dgV.prototype={
$0(){A.a6(this.a,!1).R(null)
return null},
$S:0}
C.dgW.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a6(this.a,!1).R(w)
return null},
$S:0}
C.boO.prototype={
$1(d){return C.dx7(A.S(d,x.N,x.z))},
$S:z+3}
C.boP.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.boG.prototype={
$1(d){return d.c},
$S:z+0}
C.boH.prototype={
$1(d){return d.r},
$S:z+0}
C.boI.prototype={
$1(d){return d.f},
$S:z+0}
C.boJ.prototype={
$1(d){return d.at},
$S:z+0}
C.boK.prototype={
$1(d){return d.c},
$S:z+0}
C.boL.prototype={
$1(d){return d.r},
$S:z+0}
C.boM.prototype={
$1(d){return d.f},
$S:z+0}
C.boN.prototype={
$1(d){return d.at},
$S:z+0}
C.boF.prototype={
$1(d){return d.aa()},
$S:z+5}
C.boE.prototype={
$1(d){return B.b.bj(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cH5.prototype={
$0(){},
$S:0}
C.cH4.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cH2.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cH3.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cH6.prototype={
$1(d){return new C.JW(this.a,null)},
$S:z+7}
C.cHa.prototype={
$0(){return A.a6(this.a,!1).eC()},
$S:0}
C.cHb.prototype={
$3(d,e,f){return new A.ld($.Go(),new C.cH9(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cH9.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dg(d,k,x.Q)
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
n=$.Go().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dl,B.hv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iX(1.7777777777777777,C.dx8(new A.dp("fleet_master_"+r,x.W),!0,r,!0,j.gaN6(),"fleet_master"),k),B.aC),B.al],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vV(0,B.x,k,B.G,k,k,k,k,!1,k,B.ai,!1,A.a([new A.kE(new A.I(B.IK,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.om(D.aDC,A.aBA(new A.nC(new C.cH8(i,j),J.a3(i.d),!1,!0,!0,A.tx(),k),D.cI2),k)],w))},
$S:1709}
C.cH8.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WD(v,e,J.a3(w.d),new C.cH7(w,v),this.b,null)},
$S:z+9}
C.cH7.prototype={
$0(){return this.a.bpF(this.b)},
$S:0}
C.cHc.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.cH_.prototype={
$0(){return A.a6(this.a,!1).eC()},
$S:0}
C.cH0.prototype={
$0(){C.Zt(this.a,$.boD)
return null},
$S:0}
C.cH1.prototype={
$3(d,e,f){return A.f2(new C.cGZ(this.a,e))},
$S:z+10}
C.cGZ.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aSw(u,s.a.c,s.e,s.d,new C.cGW(s),new C.cGX(s),new C.cGY(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),B.x,v,B.G,v,B.oZ,v,v,B.ai),v,v,v)},
$S:1710}
C.cGW.prototype={
$0(){var w=this.a.c
w.toString
C.Zt(w,$.boD)
return null},
$S:0}
C.cGX.prototype={
$1(d){var w=this.a
return w.q(new C.cGV(w,d))},
$S:33}
C.cGV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGY.prototype={
$0(){var w=this.a
return w.q(new C.cGU(w))},
$S:0}
C.cGU.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cLQ.prototype={
$3(d,e,f){return new C.Fn(this.a.c,null)},
$S:z+11}
C.cLR.prototype={
$3(d,e,f){if(f==null)return e
return new A.aC(B.af,null,B.ba,B.x,A.a([new C.Fn(this.a.c,null),D.atQ],x.p),null)},
$C:"$3",
$R:3,
$S:256}
C.cHd.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHm.prototype={
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
A.hk(v,"load",new C.cHj(w),!1,u)
v=w.e
v.toString
A.hk(v,"error",new C.cHk(w),!1,u)
A.bN(B.kf,new C.cHl(w),x.H)
w=w.e
w.toString
return w},
$S:368}
C.cHj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHi(w))},
$S:47}
C.cHi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHh(w))},
$S:47}
C.cHh.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHl.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHg(w))},
$S:12}
C.cHg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHf.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHe.prototype={
$0(){var w,v=C.boC(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.SK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddn.prototype={
$1(d){var w,v,u,t,s=new A.EW([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1711};(function aliases(){var w=C.alf.prototype
w.aX6=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agj.prototype,"gaxp","bn7",1)
w(u,"gbnI","bnJ",1)
w(u,"gbqg","bqh",6)
w(C.agk.prototype,"gbFs","bFt",1)
v(C,"eds","dx5",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yB,[C.dgY,C.dgX,C.boO,C.boP,C.boG,C.boH,C.boI,C.boJ,C.boK,C.boL,C.boM,C.boN,C.boF,C.boE,C.cH6,C.cHb,C.cH9,C.cH1,C.cGX,C.cLQ,C.cLR,C.cHm,C.cHj,C.cHk,C.ddn])
v(A.a_U,[C.dgT,C.dgU,C.dgV,C.dgW,C.cH5,C.cH4,C.cH2,C.cH3,C.cHa,C.cH7,C.cHc,C.cH_,C.cH0,C.cGW,C.cGV,C.cGY,C.cGU,C.cWy,C.cWz,C.cHd,C.cHi,C.cHh,C.cHl,C.cHg,C.cHf,C.cHe])
v(A.av,[C.Nk,C.WD,C.aKq,C.aSw,C.aSx,C.aLH,C.aSv,C.aN_,C.aGE,C.aN4,C.Fn])
v(A.an,[C.oc,C.qr])
v(A.ae,[C.JX,C.JW,C.a6A,C.a6B])
v(A.af,[C.agj,C.aLB,C.alf,C.agk])
v(A.a_V,[C.cH8,C.cGZ])
u(C.K_,A.aHz)
u(C.aLC,C.alf)
w(C.alf,A.dX)})()
A.dAz(b.typeUniverse,JSON.parse('{"JX":{"ae":[],"p":[]},"WD":{"av":[],"p":[]},"JW":{"ae":[],"p":[]},"Nk":{"av":[],"p":[]},"agj":{"af":["JX"]},"aKq":{"av":[],"p":[]},"aLB":{"af":["JW"]},"aSw":{"av":[],"p":[]},"aSx":{"av":[],"p":[]},"aLH":{"av":[],"p":[]},"aSv":{"av":[],"p":[]},"aN_":{"av":[],"p":[]},"aGE":{"av":[],"p":[]},"a6A":{"ae":[],"p":[]},"Fn":{"av":[],"p":[]},"aLC":{"af":["a6A"]},"aN4":{"av":[],"p":[]},"a6B":{"ae":[],"p":[]},"agk":{"af":["a6B"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a2<a7>"),O:w("a2<x>"),e:w("a2<oc>"),s:w("a2<o>"),p:w("a2<p>"),t:w("a2<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o7"),_:w("Dd"),k:w("oc"),N:w("o"),Y:w("bk<a8>"),W:w("dp<o>"),J:w("ld<K>"),j:w("ld<qr?>"),E:w("xt<cM>"),q:w("Xt"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zi=new A.N(983224,"MaterialIcons",!1)
D.aPX=new A.ab(D.Zi,48,B.bq,null,null,null)
D.cOi=new A.R(!0,B.cC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVJ=new A.C("Powered off",null,D.cOi,null,null,null,null,null,null,null,null,null)
D.bL_=w([D.aPX,B.Q,D.cVJ],x.p)
D.aB_=new A.eE(B.ai,B.i,B.a_,B.o,null,B.q,null,0,D.bL_,null)
D.atB=new A.dd(B.M,null,null,D.aB_,null)
D.cHH=new A.aa(18,18,B.Sy,null)
D.atQ=new A.dd(B.M,null,null,D.cHH,null)
D.auI=new A.h7(2,null,null,null,null,B.a8,null,null,null,null)
D.axG=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.aye=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azK=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDq=new A.T(0,3,0,3)
D.aDC=new A.T(10,0,10,88)
D.aE_=new A.T(12,6,12,10)
D.aEh=new A.T(14,8,14,6)
D.Wc=new A.T(18,12,18,12)
D.aFx=new A.T(20,8,20,20)
D.WM=new A.T(8,6,15,8)
D.aLE=new A.N(983222,"MaterialIcons",!1)
D.aNm=new A.ab(B.jI,26,B.a6,null,null,null)
D.aNp=new A.ab(B.Yu,18,null,null,null,null)
D.aND=new A.ab(B.rN,14,B.a8,null,null,null)
D.aLY=new A.N(983420,"MaterialIcons",!1)
D.aOn=new A.ab(D.aLY,14,B.a8,null,null,null)
D.aJY=new A.N(62895,"MaterialIcons",!1)
D.aOr=new A.ab(D.aJY,14,B.a8,null,null,null)
D.aPP=new A.ab(B.rG,16,B.a8,null,null,null)
D.aRq=new A.ab(B.iK,20,null,null,null,null)
D.aRE=new A.ab(B.hb,16,null,null,null,null)
D.bOF=w([B.aL,B.V],x.O)
D.a_T=new A.ag(B.aB,B.aH,B.H,D.bOF,null,null)
D.cBi=new A.aN("NGMY OS","14.2.1")
D.cA5=new A.aN("VirtualDroid","13.8.4")
D.cA4=new A.aN("NGMY OS","15.0.0")
D.cAR=new A.aN("VirtualDroid","14.1.2")
D.cA2=new A.aN("NGMY Tab OS","12.9.7")
D.cA0=new A.aN("NGMY OS","13.5.3")
D.czQ=new A.aN("VirtualDroid","15.2.0")
D.cAs=new A.aN("NGMY OS","14.8.1")
D.cAX=new A.aN("NGMY Tab OS","13.2.4")
D.cBs=new A.aN("VirtualDroid","12.6.9")
D.czJ=new A.aN("NGMY OS","16.0.1")
D.czy=new A.aN("VirtualDroid","14.9.0")
D.cB9=new A.aN("NGMY Tab OS","14.0.3")
D.cAe=new A.aN("NGMY OS","13.1.8")
D.czI=new A.aN("VirtualDroid","13.4.5")
D.cA_=new A.aN("NGMY OS","15.3.2")
D.cAY=new A.aN("NGMY Tab OS","12.4.1")
D.cBc=new A.aN("VirtualDroid","16.1.0")
D.cAr=new A.aN("NGMY OS","14.4.6")
D.cBj=new A.aN("VirtualDroid","15.0.8")
D.bNS=w([D.cBi,D.cA5,D.cA4,D.cAR,D.cA2,D.cA0,D.czQ,D.cAs,D.cAX,D.cBs,D.czJ,D.czy,D.cB9,D.cAe,D.czI,D.cA_,D.cAY,D.cBc,D.cAr,D.cBj],A.b4("a2<+(o,o)>"))
D.cDy=new A.eP(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cD6=new A.eP(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cD1=new A.eP(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cDa=new A.eP(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCY=new A.eP(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDc=new A.eP(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDA=new A.eP(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCZ=new A.eP(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cD5=new A.eP(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDe=new A.eP(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCX=new A.eP(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDs=new A.eP(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDp=new A.eP(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cD4=new A.eP(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDm=new A.eP(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDl=new A.eP(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCW=new A.eP(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cD9=new A.eP(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDj=new A.eP(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDo=new A.eP(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6D=w([D.cDy,D.cD6,D.cD1,D.cDa,D.cCY,D.cDc,D.cDA,D.cCZ,D.cD5,D.cDe,D.cCX,D.cDs,D.cDp,D.cD4,D.cDm,D.cDl,D.cCW,D.cD9,D.cDj,D.cDo],A.b4("a2<+(o,o,a8,a8,o)>"))
D.bX6=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aec=new C.K_(0,"youtube")
D.aed=new C.K_(1,"tiktok")
D.O1=new C.K_(2,"instagram")
D.aee=new C.K_(3,"facebook")
D.csR=new C.K_(4,"other")
D.cHi=new A.aa(3,null,null,null)
D.cI2=new A.i5(4,10,8,0.52,null)
D.cWY=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLp=new A.aY(D.cWY,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cOE=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWM=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2X=new A.C("Open in YouTube",null,B.iU,null,null,null,null,null,null,null,null,null)
D.d6r=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d79=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7f=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.de4=new C.aN_(null)})();(function staticFields(){$.dx4=20
$.axx=null
$.boD=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eii","Go",()=>A.aDo(0))
w($,"eij","P4",()=>A.aDo(null))})()};
(a=>{a["Z+btnO0sjrjG2UmmH54V1EN9LUY="]=a.current})($__dart_deferred_initializers__);