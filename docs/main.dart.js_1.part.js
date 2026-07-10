((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eeI(d,e){A.a7(d,!1).cw(A.ez(new C.dha(e),!0,null,x.H))},
Zx(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zx=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P7()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aO),t)
w=3
return A.b(A.dL(B.L,new C.dh9(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zx)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dV5(r)
if(q==null){d.H(x.q).f.V(D.cLm)
w=1
break}w=4
return A.b(A.bN(B.ib,null,x.H),$async$Zx)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxi=n
p=C.dV_(n)
n=$.Gp()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlb(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zx,v)},
dxl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
K1(d){return C.dV8(d)},
dV8(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K1=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K1)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aE(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eI(r,x.f)
k=A.dk(k,new C.boU(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.boV(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dxn(q)
w=12
return A.b(C.K0(a3,p),$async$K1)
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
case 19:m=C.dxl(A.S(n,x.N,x.z))
l=C.dxn(A.a([m],x.e))
w=21
return A.b(C.K0(a3,l),$async$K1)
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
case 18:case 14:q=C.dV6()
w=22
return A.b(C.K0(a3,q),$async$K1)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K1,v)},
dxn(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boM(),w).ev(0),u=new A.F(d,new C.boN(),w).ev(0),t=new A.F(d,new C.boO(),w).ev(0),s=new A.F(d,new C.boP(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlc(null,q,u,t,v,s));++q}return r},
axF(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axF=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K1(d),$async$axF)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boQ(),s).ev(0)
p=r.de(t,new C.boR(),s).ev(0)
o=r.de(t,new C.boS(),s).ev(0)
n=r.de(t,new C.boT(),s).ev(0)
m=C.dlc(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K0(d,t),$async$axF)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axF,v)},
K0(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$K0=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K0)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boL(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$K0)
case 3:return A.f(null,v)}})
return A.h($async$K0,v)},
dV6(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlc(w,w,t,s,u,r)
return q},
dlc(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.a6F[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6F[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boK(),A.a_(p).j("F<1,o>")).fA(0)
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
k=D.bX4[w]
j=D.bNP[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dV7(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
dV7(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dha:function dha(d){this.a=d},
dh9:function dh9(d,e){this.a=d
this.b=e},
dh5:function dh5(d){this.a=d},
dh6:function dh6(d){this.a=d},
dh7:function dh7(d){this.a=d},
dh8:function dh8(d,e){this.a=d
this.b=e},
Nn:function Nn(d,e,f,g){var _=this
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
boU:function boU(){},
boV:function boV(){},
boM:function boM(){},
boN:function boN(){},
boO:function boO(){},
boP:function boP(){},
boQ:function boQ(){},
boR:function boR(){},
boS:function boS(){},
boT:function boT(){},
boL:function boL(){},
boK:function boK(){},
K_:function K_(d,e){this.c=d
this.a=e},
ago:function ago(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHg:function cHg(){},
cHf:function cHf(d,e){this.a=d
this.b=e},
cHd:function cHd(d){this.a=d},
cHe:function cHe(d,e){this.a=d
this.b=e},
cHh:function cHh(d){this.a=d},
cHm:function cHm(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHn:function cHn(d,e){this.a=d
this.b=e},
cHk:function cHk(d,e,f){this.a=d
this.b=e
this.c=f},
cHj:function cHj(d,e){this.a=d
this.b=e},
cHi:function cHi(d,e){this.a=d
this.b=e},
cHo:function cHo(d){this.a=d},
WH:function WH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKx:function aKx(d,e){this.c=d
this.a=e},
JZ:function JZ(d,e){this.c=d
this.a=e},
aLI:function aLI(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHa:function cHa(d){this.a=d},
cHb:function cHb(d){this.a=d},
cHc:function cHc(d){this.a=d},
cH9:function cH9(d,e){this.a=d
this.b=e},
cH6:function cH6(d){this.a=d},
cH7:function cH7(d){this.a=d},
cH5:function cH5(d,e){this.a=d
this.b=e},
cH8:function cH8(d){this.a=d},
cH4:function cH4(d){this.a=d},
aSD:function aSD(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSE:function aSE(d,e,f){this.c=d
this.d=e
this.a=f},
aLO:function aLO(d,e){this.c=d
this.a=e},
aSC:function aSC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWL:function cWL(d){this.a=d},
cWM:function cWM(d){this.a=d},
aN6:function aN6(d){this.a=d},
aGL:function aGL(d,e){this.c=d
this.a=e},
dV5(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dV4(v)
if(u!=null)return new C.qt(w,C.dla(u,!1),D.aec,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dV3(v)
if(t!=null)return new C.qt(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aed,"TikTok",q)
s=C.dV2(w,v)
if(s!=null)return s
r=C.dV1(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qt(w,w,D.csO,"Video",q)
return q},
dV2(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qt(d,"https://www.instagram.com/reel/"+w+u,D.O6,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qt(d,"https://www.instagram.com/p/"+w+u,D.O6,t,null)}return null},
dV1(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qt(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bf,!1)+"&show_text=false&width=734",D.aee,"Facebook",null)},
dV4(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dV3(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K2:function K2(d,e){this.a=d
this.b=e},
qt:function qt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6F:function a6F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLJ:function aLJ(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aNb:function aNb(d,e){this.c=d
this.a=e},
cM1:function cM1(d){this.a=d},
cM2:function cM2(d){this.a=d},
Fo:function Fo(d,e){this.c=d
this.a=e},
alk:function alk(){},
dxm(d,e,f,g,h,i){return new C.a6G(i,f,h,e,g,d)},
edr(d){var w=window
w.toString
A.hl(w,"message",new C.ddA(d),!1,x._)},
a6G:function a6G(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agp:function agp(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHp:function cHp(d){this.a=d},
cHy:function cHy(d){this.a=d},
cHv:function cHv(d){this.a=d},
cHu:function cHu(d){this.a=d},
cHw:function cHw(d){this.a=d},
cHt:function cHt(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHs:function cHs(d){this.a=d},
cHr:function cHr(d){this.a=d},
cHq:function cHq(d){this.a=d},
ddA:function ddA(d){this.a=d},
dUY(){var w,v,u
try{v=A.AO()
w=v.grW(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dla(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boI(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dxh(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUZ(d,e,f){var w,v,u=C.boI(d)
if(u!=null){if(f){w=C.dUY()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxh(C.dla(u,e))}return C.dxh(d)},
dV_(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dV0(d){var w
if($.P7().a==null)return!1
w=$.Gp().a
return d>=w&&d<w+4},
dxk(){var w=$.axE
if(w!=null)w.ad(0)
$.axE=null
$.Gp().sv(0,0)},
dxj(){var w,v,u,t=$.P7()
if(t.a==null)return
w=$.axE
if(w!=null)w.ad(0)
v=$.dxi
if(v<=4){t=t.a
t.toString
C.dlb(t)
return}w=$.Gp()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlb(t)},
dlb(d){var w=$.axE
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
default:w=null}$.axE=A.dH(A.dq(0,0,0,0,0,w),C.edG())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nn.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.v,1),r=A.W(this.d,B.a5,w,w,14)
return A.t(w,A.H(A.a([r,B.fC,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c8,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.ff,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K_.prototype={
U(){return new C.ago(A.a([],x.e))},
gdP(){return this.c}}
C.ago.prototype={
a_(){var w=this
w.a5()
$.Gp().aq(0,w.gaxp())
C.edr(w.gbnG())
w.Z_()},
bn5(){if(this.c!=null)this.q(new C.cHg())},
bnH(){C.dxj()},
p(){$.Gp().Z(0,this.gaxp())
C.dxk()
$.P7().sv(0,null)
this.a4()},
Z_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Z_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K1(t.a.c),$async$Z_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHf(t,s))
$.boJ=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$Z_,v)},
V_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cHd(t))
w=3
return A.b(C.axF(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHe(t,s))
$.boJ=J.a4(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V_,v)},
bpD(d){var w=this.c
w.toString
A.a7(w,!1).cw(A.ez(new C.cHh(d),!1,null,x.H))},
bqf(){var w=this.c
w.toString
return C.Zx(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fe:B.bA,s=A.c_(!0,A.w(A.a([new A.J(D.WQ,new A.mK(new C.cHm(w),v),v),A.I(w.e?B.ou:new A.ld($.P7(),new C.cHn(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.k,0,B.q),!1,B.ah,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.arp(B.a5,B.GI,B.me,D.d76,w.e?v:new C.cHo(w)),v)}}
C.WH.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.a9(0,B.H,B.a5.l(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6F(n,!0,!C.dV0(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jG,B.n6,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.k,0,B.q),B.j,B.yW,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.U,!0,u,A.aP(!1,t,!0,A.w(A.a([A.I(A.t(u,A.c2(p,A.fy(A.w(A.a([new C.aKx(o,u),A.I(n,1),A.t(u,A.H(A.a([A.W(B.Bl,B.a5.l(0.85),u,u,9),D.cHf,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.k,0,u,u),B.j,B.at,u,u,u,u,u,D.aDq,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,u,u,new A.q(u,u,r,s,q,D.a_X,B.p),u,u,u,B.h9,u,u,u),1),B.aM,A.j(o.b,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.av,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a6)}}
C.aKx.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.I(A.j(B.h.gao(this.c.c.split("-")),w,w,B.av,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.at,w,w,w,w,w,B.WH,w,w,w)}}
C.JZ.prototype={
U(){return new C.aLI()}}
C.aLI.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fe:B.bA,t=A.aM(w,w,w,w,B.a_7,w,w,w,new C.cHa(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.J(D.WQ,A.H(A.a([t,A.I(new A.JO(A.H(A.a([A.I(new A.J(B.jB,A.j(s.b+" \xb7 "+s.c,w,1,B.av,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.U,!0,w,A.aP(!1,w,!0,new A.J(B.b4,A.W(B.hd,B.a5,w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHb(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.I(new A.ld($.P7(),new C.cHc(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.ah,!0,!0),w,!1,!1,w,w)}}
C.aSD.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a5.l(0.35),B.f6,28),new A.a9(0,B.H,B.A.l(0.45),B.d4,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxm(new A.dn(v+"_full_"+u,x.W),!1,u,!1,w.gaN6(),v+"_full")
w=v}else w=new C.aLO(t.r,s)}else w=new C.aGL(m,s)
else w=D.ddU
return A.t(s,A.c2(n,A.fy(A.w(A.a([new C.aSE(m,l,s),A.I(w,1),new C.aSC(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aC),B.j,s,s,new A.q(s,s,o,q,p,D.a_X,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aSE.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dl(r)
r=A.hd(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h6:B.j3)===B.h6?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o4,s,s,s),B.bx,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aOm,B.eo,D.aNB,B.eo,D.aOq],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.W(B.Bf,B.a5.l(0.9),s,s,12),B.eo,A.I(A.j(u.c,s,s,B.av,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.at,s,s,s,s,s,D.aEi,s,s,s)}}
C.aLO.prototype={
B(d){var w=null
return A.t(w,A.aG(A.w(A.a([A.W(B.AO,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.f4(D.aRB,D.cWJ,this.c,A.ec(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aF(B.a5.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yW,w,w,w,w,w,w,w,w,1/0)}}
C.aSC.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axf(B.Bb,"YouTube",s===0,r,new C.cWL(u))
s=u.axf(B.kl,"Device",s===1,r,new C.cWM(u))
w=r?"Power off":"Power on"
v=r?D.Zm:D.aLE
return A.t(t,A.H(A.a([q,B.am,s,B.bx,A.aM(t,t,t,t,A.W(v,r?B.bT:B.fQ,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dx)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.at,t,t,t,t,t,D.aE0,t,t,t)},
axf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a5:B.aD
v=f&&g?B.a5.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aI(!1,B.U,!0,u,A.aP(!1,A.m(10),!0,new A.J(B.ni,A.w(A.a([A.W(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a6),1)}}
C.aN6.prototype={
B(d){return D.atB}}
C.aGL.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jT,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tI("Serial",u.c),q=w.tI("Model",u.d),p=w.tI("Device ID",u.e),o=w.tI("IMEI",u.r),n=w.tI("MAC",u.f),m=w.tI("OS",u.w+" "+u.x),l=w.tI("Location",u.y+", "+u.z),k=w.tI("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tI("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.aj,r,q,p,o,n,m,l,k,j,w.tI("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b4,v,v,B.ak,!1)},
tI(d,e){var w=null
return new A.J(B.d2,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ct,A.j(e,w,w,w,w,w,w,D.cOB,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.K2.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qt.prototype={
gaN6(){var w=this.c
return w===D.aec||w===D.aed||w===D.O6||w===D.aee}}
C.a6F.prototype={
U(){return new C.aLJ(null,null)}}
C.aLJ.prototype={
a_(){this.a5()
var w=A.bu(null,B.ve,null,1,null,this)
w.jl(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX6()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cV(t,new A.q(t,t,t,t,t,new A.ag(B.cj,B.ci,B.G,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.ex,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jG,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n6
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aNb(s,t),r,q,A.aL(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aL(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aL(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aB(B.af,t,B.b8,B.x,s,t)}}
C.aNb.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kr(u,B.M,new C.cM1(this),B.c9,B.bJ,!0,w,w,new C.cM2(this),w)
return new C.Fo(v,w)}}
C.Fo.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uS,B.SW],x.O),B.jG)
break
case 1:w=new A.aN(A.a([B.yW,D.aye],x.O),B.mb)
break
case 2:w=new A.aN(A.a([D.azL,D.axG],x.O),B.AU)
break
case 3:w=new A.aN(A.a([B.V,B.dr],x.O),B.AZ)
break
case 4:w=new A.aN(A.a([B.at,B.aL],x.O),B.pm)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.q(u,u,u,u,u,new A.ag(B.aB,B.aF,B.G,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.alk.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6G.prototype={
U(){return new C.agp()}}
C.agp.prototype={
a7J(d,e){var w,v=C.boI(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dla(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dUZ(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFr(){var w,v=this
if(v.w)return
v.q(new C.cHp(v))
w=v.e
if(w!=null)v.a7J(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gr()
$.pL().uT(w,new C.cHy(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHr(v))
w=v.e
w.toString
v.a7J(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.ZB,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fy(A.aG(new A.J(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1R(n,B.tB,w)],v)
if(o.f)w.push(A.fy(A.aG(new A.aa(28,28,D.auH,n),n,n,n),B.dd,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.v,1)
q=A.W(B.Ld,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eM(0,A.aI(!1,B.U,!0,n,A.aP(!1,n,!0,A.aG(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.Wh,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFq(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a6)))}v=C.boI(o.a.d)
if(v!=null)w.push(A.aL(8,A.ka(D.aPL,D.d2O,new C.cHq(o),A.iQ(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ff,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aB(B.af,n,B.b8,B.x,w,n)}}
var z=a.updateTypes(["o(oc)","~()","K_(Q)","oc(Z<@,@>)","a1(oc)","Z<o,@>(oc)","aA<~>()","JZ(Q)","ld<K>(Q,qt?,p?)","WH(Q,K)","u6(Q,qt?,p?)","Fo(Q,an,dG?)"])
C.dha.prototype={
$1(d){return new C.K_(this.a,null)},
$S:z+2}
C.dh9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aH(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.V],j):A.a([B.e,B.ax],j),h=A.a([new A.a9(0,B.H,B.a5.l(0.22),B.f6,32)],x.V),g=A.O(m?B.ck:B.a5.l(0.18),B.v,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNk,B.j,n,n,new A.q(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.v,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f7,w,A.aM(n,n,n,n,A.W(B.cV,m?B.aD:B.dd,n,n,n),n,n,n,new C.dh5(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.q(n,n,n,n,n,new A.ag(B.a9,B.aa,B.G,j,n,n),B.p),n,n,n,B.J1,n,n,n)
e=A.ed(B.cE,A.a([new C.Nn("YouTube",B.L8,m,n),new C.Nn("TikTok",B.mb,m,n),new C.Nn("Instagram",B.AU,m,n),new C.Nn("Facebook",B.AZ,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cG:B.kb,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bA
r=A.W(B.fh,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ck:B.aP
u=A.w(A.a([e,B.aR,A.b2(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RH),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a4,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.au,B.i,B.k,0,B.q)
e=A.ka(D.aNn,D.d6i,new C.dh6(d),A.iQ(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.T(12,0,12,12+l.f.d),A.cV(A.c2(f,A.w(A.a([j,new A.J(B.Wu,u,n),new A.J(D.aFy,A.H(A.a([e,B.bx,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dh7(d),n,n),B.am,A.dM(D.aRn,D.d70,new C.dh8(d,w),A.bF(B.a5,n,n,n,B.e,n,D.Wh,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.au,B.i,B.a_,0,B.q),B.aC),new A.q(n,n,g,k,h,new A.ag(B.aB,B.aF,B.G,i,n,n),B.p),B.bD),n)},
$S:88}
C.dh5.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dh6.prototype={
$0(){C.dxk()
$.P7().sv(0,null)
A.a7(this.a,!1).R(null)},
$S:0}
C.dh7.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dh8.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).R(w)
return null},
$S:0}
C.boU.prototype={
$1(d){return C.dxl(A.S(d,x.N,x.z))},
$S:z+3}
C.boV.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.boM.prototype={
$1(d){return d.c},
$S:z+0}
C.boN.prototype={
$1(d){return d.r},
$S:z+0}
C.boO.prototype={
$1(d){return d.f},
$S:z+0}
C.boP.prototype={
$1(d){return d.at},
$S:z+0}
C.boQ.prototype={
$1(d){return d.c},
$S:z+0}
C.boR.prototype={
$1(d){return d.r},
$S:z+0}
C.boS.prototype={
$1(d){return d.f},
$S:z+0}
C.boT.prototype={
$1(d){return d.at},
$S:z+0}
C.boL.prototype={
$1(d){return d.aa()},
$S:z+5}
C.boK.prototype={
$1(d){return B.b.bj(B.l.hw(d,16),2,"0").toUpperCase()},
$S:84}
C.cHg.prototype={
$0(){},
$S:0}
C.cHf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHd.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHe.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHh.prototype={
$1(d){return new C.JZ(this.a,null)},
$S:z+7}
C.cHm.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,D.aQH,w,w,w,new C.cHl(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.I(A.qs(A.H(A.a([new A.rz(D.ww,e,g,36,B.Bf,w),B.aQ,A.I(A.j(t,w,1,B.av,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.he(B.h.gT(D.ww).l(0.45+e*0.2),B.J,10)],x.S),w,w),w,w,w),1),A.aI(!1,B.U,!0,w,A.aP(!1,w,!0,new A.J(B.bL,A.W(B.hd,A.ax(B.h.gT(D.ww),B.h.gao(D.ww),e),w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbqe(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],s),B.o,w,B.i,B.k,0,w,w),D.ww,g,B.fN,0,e,f),1)],s),B.o,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:317}
C.cHl.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHn.prototype={
$3(d,e,f){return new A.ld($.Gp(),new C.cHk(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dj(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a5.l(0.12)
s=A.m(12)
r=A.O(B.a5.l(0.35),B.v,1)
q=A.W(B.jG,B.a5,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gp().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dl,B.hv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iX(1.7777777777777777,C.dxm(new A.dn("fleet_master_"+r,x.W),!0,r,!0,j.gaN6(),"fleet_master"),k),B.aC),B.aj],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vY(0,B.x,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kE(new A.J(B.IQ,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.on(D.aDC,A.aBH(new A.nB(new C.cHj(i,j),J.a4(i.d),!1,!0,!0,A.tA(),k),D.cI_),k)],w))},
$S:1713}
C.cHj.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WH(v,e,J.a4(w.d),new C.cHi(w,v),this.b,null)},
$S:z+9}
C.cHi.prototype={
$0(){return this.a.bpD(this.b)},
$S:0}
C.cHo.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.cHa.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHb.prototype={
$0(){C.Zx(this.a,$.boJ)
return null},
$S:0}
C.cHc.prototype={
$3(d,e,f){return A.f2(new C.cH9(this.a,e))},
$S:z+10}
C.cH9.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aSD(u,s.a.c,s.e,s.d,new C.cH6(s),new C.cH7(s),new C.cH8(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),B.x,v,B.F,v,B.oZ,v,v,B.ak),v,v,v)},
$S:1714}
C.cH6.prototype={
$0(){var w=this.a.c
w.toString
C.Zx(w,$.boJ)
return null},
$S:0}
C.cH7.prototype={
$1(d){var w=this.a
return w.q(new C.cH5(w,d))},
$S:32}
C.cH5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cH8.prototype={
$0(){var w=this.a
return w.q(new C.cH4(w))},
$S:0}
C.cH4.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWL.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWM.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cM1.prototype={
$3(d,e,f){return new C.Fo(this.a.c,null)},
$S:z+11}
C.cM2.prototype={
$3(d,e,f){if(f==null)return e
return new A.aB(B.af,null,B.b8,B.x,A.a([new C.Fo(this.a.c,null),D.atQ],x.p),null)},
$C:"$3",
$R:3,
$S:255}
C.cHp.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHy.prototype={
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
A.hl(v,"load",new C.cHv(w),!1,u)
v=w.e
v.toString
A.hl(v,"error",new C.cHw(w),!1,u)
A.bN(B.ke,new C.cHx(w),x.H)
w=w.e
w.toString
return w},
$S:593}
C.cHv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHu(w))},
$S:47}
C.cHu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHt(w))},
$S:47}
C.cHt.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHx.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHs(w))},
$S:12}
C.cHs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHr.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHq.prototype={
$0(){var w,v=C.boI(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.SK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddA.prototype={
$1(d){var w,v,u,t,s=new A.EX([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1715};(function aliases(){var w=C.alk.prototype
w.aX6=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ago.prototype,"gaxp","bn5",1)
w(u,"gbnG","bnH",1)
w(u,"gbqe","bqf",6)
w(C.agp.prototype,"gbFq","bFr",1)
v(C,"edG","dxj",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yE,[C.dha,C.dh9,C.boU,C.boV,C.boM,C.boN,C.boO,C.boP,C.boQ,C.boR,C.boS,C.boT,C.boL,C.boK,C.cHh,C.cHm,C.cHn,C.cHk,C.cHc,C.cH7,C.cM1,C.cM2,C.cHy,C.cHv,C.cHw,C.ddA])
v(A.a_Y,[C.dh5,C.dh6,C.dh7,C.dh8,C.cHg,C.cHf,C.cHd,C.cHe,C.cHl,C.cHi,C.cHo,C.cHa,C.cHb,C.cH6,C.cH5,C.cH8,C.cH4,C.cWL,C.cWM,C.cHp,C.cHu,C.cHt,C.cHx,C.cHs,C.cHr,C.cHq])
v(A.av,[C.Nn,C.WH,C.aKx,C.aSD,C.aSE,C.aLO,C.aSC,C.aN6,C.aGL,C.aNb,C.Fo])
v(A.an,[C.oc,C.qt])
v(A.ae,[C.K_,C.JZ,C.a6F,C.a6G])
v(A.af,[C.ago,C.aLI,C.alk,C.agp])
v(A.a_Z,[C.cHj,C.cH9])
u(C.K2,A.aHG)
u(C.aLJ,C.alk)
w(C.alk,A.dX)})()
A.dAN(b.typeUniverse,JSON.parse('{"K_":{"ae":[],"p":[]},"WH":{"av":[],"p":[]},"JZ":{"ae":[],"p":[]},"Nn":{"av":[],"p":[]},"ago":{"af":["K_"]},"aKx":{"av":[],"p":[]},"aLI":{"af":["JZ"]},"aSD":{"av":[],"p":[]},"aSE":{"av":[],"p":[]},"aLO":{"av":[],"p":[]},"aSC":{"av":[],"p":[]},"aN6":{"av":[],"p":[]},"aGL":{"av":[],"p":[]},"a6F":{"ae":[],"p":[]},"Fo":{"av":[],"p":[]},"aLJ":{"af":["a6F"]},"aNb":{"av":[],"p":[]},"a6G":{"ae":[],"p":[]},"agp":{"af":["a6G"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<oc>"),S:w("a3<he>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o7"),_:w("Dg"),k:w("oc"),N:w("o"),Y:w("bk<a2>"),W:w("dn<o>"),J:w("ld<K>"),j:w("ld<qt?>"),E:w("xw<cM>"),q:w("Xx"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zm=new A.N(983224,"MaterialIcons",!1)
D.aPT=new A.ac(D.Zm,48,B.bq,null,null,null)
D.cVG=new A.D("Powered off",null,B.alh,null,null,null,null,null,null,null,null,null)
D.bKY=w([D.aPT,B.Q,D.cVG],x.p)
D.aB0=new A.eK(B.ak,B.i,B.a_,B.o,null,B.q,null,0,D.bKY,null)
D.atB=new A.df(B.M,null,null,D.aB0,null)
D.cHE=new A.aa(18,18,B.SD,null)
D.atQ=new A.df(B.M,null,null,D.cHE,null)
D.auH=new A.h8(2,null,null,null,null,B.a8,null,null,null,null)
D.axG=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.aye=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azL=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDq=new A.T(0,3,0,3)
D.aDC=new A.T(10,0,10,88)
D.aE0=new A.T(12,6,12,10)
D.aEi=new A.T(14,8,14,6)
D.Wh=new A.T(18,12,18,12)
D.aFy=new A.T(20,8,20,20)
D.WQ=new A.T(8,6,15,8)
D.aLE=new A.N(983222,"MaterialIcons",!1)
D.aNk=new A.ac(B.jG,26,B.a5,null,null,null)
D.aNn=new A.ac(B.Yy,18,null,null,null,null)
D.aNB=new A.ac(B.rN,14,B.a8,null,null,null)
D.aLY=new A.N(983420,"MaterialIcons",!1)
D.aOm=new A.ac(D.aLY,14,B.a8,null,null,null)
D.aJZ=new A.N(62895,"MaterialIcons",!1)
D.aOq=new A.ac(D.aJZ,14,B.a8,null,null,null)
D.aPL=new A.ac(B.rH,16,B.a8,null,null,null)
D.aQH=new A.ac(B.dH,20,B.a8,null,null,null)
D.aRn=new A.ac(B.iL,20,null,null,null,null)
D.aRB=new A.ac(B.hd,16,null,null,null,null)
D.bOC=w([B.aL,B.V],x.O)
D.a_X=new A.ag(B.aB,B.aF,B.G,D.bOC,null,null)
D.cBf=new A.aN("NGMY OS","14.2.1")
D.cA2=new A.aN("VirtualDroid","13.8.4")
D.cA1=new A.aN("NGMY OS","15.0.0")
D.cAO=new A.aN("VirtualDroid","14.1.2")
D.cA_=new A.aN("NGMY Tab OS","12.9.7")
D.czY=new A.aN("NGMY OS","13.5.3")
D.czN=new A.aN("VirtualDroid","15.2.0")
D.cAp=new A.aN("NGMY OS","14.8.1")
D.cAU=new A.aN("NGMY Tab OS","13.2.4")
D.cBp=new A.aN("VirtualDroid","12.6.9")
D.czG=new A.aN("NGMY OS","16.0.1")
D.czv=new A.aN("VirtualDroid","14.9.0")
D.cB6=new A.aN("NGMY Tab OS","14.0.3")
D.cAb=new A.aN("NGMY OS","13.1.8")
D.czF=new A.aN("VirtualDroid","13.4.5")
D.czX=new A.aN("NGMY OS","15.3.2")
D.cAV=new A.aN("NGMY Tab OS","12.4.1")
D.cB9=new A.aN("VirtualDroid","16.1.0")
D.cAo=new A.aN("NGMY OS","14.4.6")
D.cBg=new A.aN("VirtualDroid","15.0.8")
D.bNP=w([D.cBf,D.cA2,D.cA1,D.cAO,D.cA_,D.czY,D.czN,D.cAp,D.cAU,D.cBp,D.czG,D.czv,D.cB6,D.cAb,D.czF,D.czX,D.cAV,D.cB9,D.cAo,D.cBg],A.b4("a3<+(o,o)>"))
D.ww=w([B.a5,B.fq],x.O)
D.cDv=new A.eQ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cD3=new A.eQ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCZ=new A.eQ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cD7=new A.eQ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCV=new A.eQ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cD9=new A.eQ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDx=new A.eQ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCW=new A.eQ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cD2=new A.eQ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDb=new A.eQ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCU=new A.eQ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDp=new A.eQ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDm=new A.eQ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cD1=new A.eQ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDj=new A.eQ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDi=new A.eQ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCT=new A.eQ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cD6=new A.eQ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDg=new A.eQ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDl=new A.eQ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6F=w([D.cDv,D.cD3,D.cCZ,D.cD7,D.cCV,D.cD9,D.cDx,D.cCW,D.cD2,D.cDb,D.cCU,D.cDp,D.cDm,D.cD1,D.cDj,D.cDi,D.cCT,D.cD6,D.cDg,D.cDl],A.b4("a3<+(o,o,a2,a2,o)>"))
D.bX4=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aec=new C.K2(0,"youtube")
D.aed=new C.K2(1,"tiktok")
D.O6=new C.K2(2,"instagram")
D.aee=new C.K2(3,"facebook")
D.csO=new C.K2(4,"other")
D.cHf=new A.aa(3,null,null,null)
D.cI_=new A.i6(4,10,8,0.52,null)
D.cWT=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLm=new A.aY(D.cWT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cOB=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWJ=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2O=new A.D("Open in YouTube",null,B.iV,null,null,null,null,null,null,null,null,null)
D.d6i=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d70=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d76=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddU=new C.aN6(null)})();(function staticFields(){$.dxi=20
$.axE=null
$.boJ=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiw","Gp",()=>A.aDv(0))
w($,"eix","P7",()=>A.aDv(null))})()};
(a=>{a["kuj0JHaW+bKE71SHzbmF3573LZE="]=a.current})($__dart_deferred_initializers__);