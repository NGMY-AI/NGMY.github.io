((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eeX(d,e){A.a7(d,!1).cw(A.eA(new C.dho(e),!0,null,x.H))},
Zy(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zy=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Pa()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aO),t)
w=3
return A.b(A.dL(B.L,new C.dhn(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zy)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVk(r)
if(q==null){d.H(x.q).f.V(D.cLq)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$Zy)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxw=n
p=C.dVe(n)
n=$.Gs()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlo(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zy,v)},
dxz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.of(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K4(d){return C.dVn(d)},
dVn(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K4=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K4)
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
case 10:k=J.eJ(r,x.f)
k=A.dk(k,new C.boY(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.A(new A.aj(k,new C.boZ(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dxB(q)
w=12
return A.b(C.K3(a3,p),$async$K4)
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
case 19:m=C.dxz(A.S(n,x.N,x.z))
l=C.dxB(A.a([m],x.e))
w=21
return A.b(C.K3(a3,l),$async$K4)
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
case 18:case 14:q=C.dVl()
w=22
return A.b(C.K3(a3,q),$async$K4)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K4,v)},
dxB(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boQ(),w).ev(0),u=new A.F(d,new C.boR(),w).ev(0),t=new A.F(d,new C.boS(),w).ev(0),s=new A.F(d,new C.boT(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlp(null,q,u,t,v,s));++q}return r},
axD(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axD=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K4(d),$async$axD)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boU(),s).ev(0)
p=r.de(t,new C.boV(),s).ev(0)
o=r.de(t,new C.boW(),s).ev(0)
n=r.de(t,new C.boX(),s).ev(0)
m=C.dlp(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K3(d,t),$async$axD)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axD,v)},
K3(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$K3=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K3)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boP(),x.P)
s=A.A(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$K3)
case 3:return A.f(null,v)}})
return A.h($async$K3,v)},
dVl(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.du(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlp(w,w,t,s,u,r)
return q},
dlp(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jE(),h=d==null,g=D.a6J[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6J[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boO(),A.a_(p).j("F<1,o>")).fA(0)
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
w=B.l.a1(e,20)
k=D.bXa[w]
j=D.bNV[w]
return new C.of("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dVm(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
dVm(d,e){var w,v=J.du(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dho:function dho(d){this.a=d},
dhn:function dhn(d,e){this.a=d
this.b=e},
dhj:function dhj(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d,e){this.a=d
this.b=e},
Nq:function Nq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
of:function of(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
boY:function boY(){},
boZ:function boZ(){},
boQ:function boQ(){},
boR:function boR(){},
boS:function boS(){},
boT:function boT(){},
boU:function boU(){},
boV:function boV(){},
boW:function boW(){},
boX:function boX(){},
boP:function boP(){},
boO:function boO(){},
K2:function K2(d,e){this.c=d
this.a=e},
agn:function agn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHo:function cHo(){},
cHn:function cHn(d,e){this.a=d
this.b=e},
cHl:function cHl(d){this.a=d},
cHm:function cHm(d,e){this.a=d
this.b=e},
cHp:function cHp(d){this.a=d},
cHu:function cHu(d){this.a=d},
cHt:function cHt(d){this.a=d},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHs:function cHs(d,e,f){this.a=d
this.b=e
this.c=f},
cHr:function cHr(d,e){this.a=d
this.b=e},
cHq:function cHq(d,e){this.a=d
this.b=e},
cHw:function cHw(d){this.a=d},
WI:function WI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKx:function aKx(d,e){this.c=d
this.a=e},
K1:function K1(d,e){this.c=d
this.a=e},
aLI:function aLI(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHi:function cHi(d){this.a=d},
cHj:function cHj(d){this.a=d},
cHk:function cHk(d){this.a=d},
cHh:function cHh(d,e){this.a=d
this.b=e},
cHe:function cHe(d){this.a=d},
cHf:function cHf(d){this.a=d},
cHd:function cHd(d,e){this.a=d
this.b=e},
cHg:function cHg(d){this.a=d},
cHc:function cHc(d){this.a=d},
aSE:function aSE(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSF:function aSF(d,e,f){this.c=d
this.d=e
this.a=f},
aLO:function aLO(d,e){this.c=d
this.a=e},
aSD:function aSD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWY:function cWY(d){this.a=d},
cWZ:function cWZ(d){this.a=d},
aN7:function aN7(d){this.a=d},
aGL:function aGL(d,e){this.c=d
this.a=e},
dVk(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVj(v)
if(u!=null)return new C.qu(w,C.dln(u,!1),D.aeh,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVi(v)
if(t!=null)return new C.qu(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aei,"TikTok",q)
s=C.dVh(w,v)
if(s!=null)return s
r=C.dVg(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qu(w,w,D.csS,"Video",q)
return q},
dVh(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qu(d,"https://www.instagram.com/reel/"+w+u,D.Oa,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qu(d,"https://www.instagram.com/p/"+w+u,D.Oa,t,null)}return null},
dVg(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qu(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bf,!1)+"&show_text=false&width=734",D.aej,"Facebook",null)},
dVj(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVi(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K5:function K5(d,e){this.a=d
this.b=e},
qu:function qu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6E:function a6E(d,e,f,g,h){var _=this
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
aNc:function aNc(d,e){this.c=d
this.a=e},
cM9:function cM9(d){this.a=d},
cMa:function cMa(d){this.a=d},
Fr:function Fr(d,e){this.c=d
this.a=e},
ali:function ali(){},
dxA(d,e,f,g,h,i){return new C.a6F(i,f,h,e,g,d)},
edG(d){var w=window
w.toString
A.hm(w,"message",new C.ddN(d),!1,x._)},
a6F:function a6F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ago:function ago(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHx:function cHx(d){this.a=d},
cHG:function cHG(d){this.a=d},
cHD:function cHD(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHE:function cHE(d){this.a=d},
cHB:function cHB(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHz:function cHz(d){this.a=d},
cHy:function cHy(d){this.a=d},
ddN:function ddN(d){this.a=d},
dVc(){var w,v,u
try{v=A.AO()
w=v.grV(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dln(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boM(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dxv(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVd(d,e,f){var w,v,u=C.boM(d)
if(u!=null){if(f){w=C.dVc()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxv(C.dln(u,e))}return C.dxv(d)},
dVe(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVf(d){var w
if($.Pa().a==null)return!1
w=$.Gs().a
return d>=w&&d<w+4},
dxy(){var w=$.axC
if(w!=null)w.ad(0)
$.axC=null
$.Gs().sv(0,0)},
dxx(){var w,v,u,t=$.Pa()
if(t.a==null)return
w=$.axC
if(w!=null)w.ad(0)
v=$.dxw
if(v<=4){t=t.a
t.toString
C.dlo(t)
return}w=$.Gs()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlo(t)},
dlo(d){var w=$.axC
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
default:w=null}$.axC=A.dH(A.dr(0,0,0,0,0,w),C.edV())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nq.prototype={
B(d){var w=null,v=this.e,u=v?B.aK:B.e,t=A.m(20),s=A.Q(B.a4.l(0.25),B.w,1),r=A.X(this.d,B.a4,w,w,14)
return A.t(w,A.H(A.a([r,B.fD,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.cf,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.Z,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fg,w,w,w)}}
C.of.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K2.prototype={
U(){return new C.agn(A.a([],x.e))},
gdP(){return this.c}}
C.agn.prototype={
a_(){var w=this
w.a5()
$.Gs().aq(0,w.gaxp())
C.edG(w.gbnF())
w.Z_()},
bn4(){if(this.c!=null)this.q(new C.cHo())},
bnG(){C.dxx()},
p(){$.Gs().Z(0,this.gaxp())
C.dxy()
$.Pa().sv(0,null)
this.a4()},
Z_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Z_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K4(t.a.c),$async$Z_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHn(t,s))
$.boN=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$Z_,v)},
V_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cHl(t))
w=3
return A.b(C.axD(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHm(t,s))
$.boN=J.a4(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V_,v)},
bpC(d){var w=this.c
w.toString
A.a7(w,!1).cw(A.eA(new C.cHp(d),!1,null,x.H))},
bqe(){var w=this.c
w.toString
return C.Zy(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fe:B.bD,s=A.c_(!0,A.w(A.a([new A.I(D.WU,new A.iP(new C.cHu(w),v),v),A.J(w.e?B.ov:new A.lg($.Pa(),new C.cHv(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.arn(B.a4,B.GS,B.mc,D.d7m,w.e?v:new C.cHw(w)),v)}}
C.WI.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.Q(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.H,B.a4.l(0.18),B.e9,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6E(n,!0,!C.dVf(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jE,B.n4,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.j,0,B.q),B.k,B.yU,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.U,!0,u,A.aS(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c2(p,A.fy(A.w(A.a([new C.aKx(o,u),A.J(n,1),A.t(u,A.H(A.a([A.X(B.Bm,B.a4.l(0.85),u,u,9),D.cHj,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.j,0,u,u),B.k,B.au,u,u,u,u,u,D.aDs,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.r(u,u,r,s,q,D.a00,B.p),u,u,u,B.h8,u,u,u),1),B.aM,A.j(o.b,u,1,B.av,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.av,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.av,u,u,u,A.l(u,u,B.a4.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a6)}}
C.aKx.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gao(this.c.c.split("-")),w,w,B.av,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.au,w,w,w,w,w,B.WJ,w,w,w)}}
C.K1.prototype={
U(){return new C.aLI()}}
C.aLI.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fe:B.bD,t=A.aM(w,w,w,w,B.a_b,w,w,w,new C.cHi(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.I(D.WU,A.H(A.a([t,A.J(new A.JR(A.H(A.a([A.J(new A.I(B.jz,A.j(s.b+" \xb7 "+s.c,w,1,B.av,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.U,!0,w,A.aS(!1,w,!0,new A.I(B.b4,A.X(B.hc,B.a4,w,w,28),w),B.cP,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHj(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.lg($.Pa(),new C.cHk(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aSE.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.H,B.a4.l(0.35),B.f7,28),new A.aa(0,B.H,B.A.l(0.45),B.dh,18)],x.V),o=A.Q(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxA(new A.dn(v+"_full_"+u,x.W),!1,u,!1,w.gaN6(),v+"_full")
w=v}else w=new C.aLO(t.r,s)}else w=new C.aGL(m,s)
else w=D.de9
return A.t(s,A.c2(n,A.fy(A.w(A.a([new C.aSF(m,l,s),A.J(w,1),new C.aSD(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.r(s,s,o,q,p,D.a00,B.p),s,r*2.05,s,B.bG,s,s,r)}}
C.aSF.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dl(r)
r=A.he(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h5:B.j1)===B.h5?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o4,s,s,s),B.bw,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aOl,B.en,D.aNB,B.en,D.aOp],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.X(B.Bg,B.a4.l(0.9),s,s,12),B.en,A.J(A.j(u.c,s,s,B.av,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.au,s,s,s,s,s,D.aEk,s,s,s)}}
C.aLO.prototype={
B(d){var w=null
return A.t(w,A.aH(A.w(A.a([A.X(B.AN,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF,A.f4(D.aRD,D.cWU,this.c,A.ec(w,w,w,w,w,w,w,w,w,B.a4,w,w,w,w,w,new A.aG(B.a4.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.Z,0,B.q),w,w,w),B.k,B.yU,w,w,w,w,w,w,w,w,1/0)}}
C.aSD.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axf(B.Bc,"YouTube",s===0,r,new C.cWY(u))
s=u.axf(B.kl,"Device",s===1,r,new C.cWZ(u))
w=r?"Power off":"Power on"
v=r?D.Zq:D.aLE
return A.t(t,A.H(A.a([q,B.al,s,B.bw,A.aM(t,t,t,t,A.X(v,r?B.bV:B.hf,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dv)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.au,t,t,t,t,t,D.aE2,t,t,t)},
axf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a4:B.aC
v=f&&g?B.a4.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aI(!1,B.U,!0,u,A.aS(!1,A.m(10),!0,new A.I(B.nh,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aN7.prototype={
B(d){return D.atH}}
C.aGL.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jT,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tH("Serial",u.c),q=w.tH("Model",u.d),p=w.tH("Device ID",u.e),o=w.tH("IMEI",u.r),n=w.tH("MAC",u.f),m=w.tH("OS",u.w+" "+u.x),l=w.tH("Location",u.y+", "+u.z),k=w.tH("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tH("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.ai,r,q,p,o,n,m,l,k,j,w.tH("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b4,v,v,B.ak,!1)},
tH(d,e){var w=null
return new A.I(B.d1,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ct,A.j(e,w,w,w,w,w,w,D.cOH,w,w,w)],x.p),B.E,B.i,B.j,0,B.q),w)}}
C.K5.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qu.prototype={
gaN6(){var w=this.c
return w===D.aeh||w===D.aei||w===D.Oa||w===D.aej}}
C.a6E.prototype={
U(){return new C.aLJ(null,null)}}
C.aLJ.prototype={
a_(){this.a5()
var w=A.bu(null,B.vc,null,1,null,this)
w.jl(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX6()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cZ(t,new A.r(t,t,t,t,t,new A.ag(B.cj,B.ci,B.G,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bB),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.ex,p,t)
w=B.e.l(0.92)
q=A.aH(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.X(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n4
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aNc(s,t),r,q,A.aL(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aL(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aL(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aB(B.ag,t,B.b7,B.x,s,t)}}
C.aNc.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ku(u,B.M,new C.cM9(this),B.c9,B.bJ,!0,w,w,new C.cMa(this),w)
return new C.Fr(v,w)}}
C.Fr.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uR,B.SY],x.O),B.jE)
break
case 1:w=new A.aN(A.a([B.yU,D.ayi],x.O),B.m9)
break
case 2:w=new A.aN(A.a([D.azN,D.axK],x.O),B.AU)
break
case 3:w=new A.aN(A.a([B.X,B.dw],x.O),B.AZ)
break
case 4:w=new A.aN(A.a([B.au,B.aK],x.O),B.po)
break
default:w=u}v=w.a
return A.t(u,A.aH(A.X(w.b,B.a4.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ag(B.aD,B.aL,B.G,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ali.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6F.prototype={
U(){return new C.ago()}}
C.ago.prototype={
a7J(d,e){var w,v=C.boM(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dln(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVd(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFq(){var w,v=this
if(v.w)return
v.q(new C.cHx(v))
w=v.e
if(w!=null)v.a7J(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gu()
$.pN().uS(w,new C.cHG(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHz(v))
w=v.e
w.toString
v.a7J(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZF,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fy(A.aH(new A.I(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1R(n,B.tC,w)],v)
if(o.f)w.push(A.fy(A.aH(new A.a9(28,28,D.auN,n),n,n,n),B.dd,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.Q(B.bq,B.w,1)
q=A.X(B.Lk,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eM(0,A.aI(!1,B.U,!0,n,A.aS(!1,n,!0,A.aH(A.t(n,A.H(A.a([q,B.al,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.Z,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wj,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFp(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.boM(o.a.d)
if(v!=null)w.push(A.aL(8,A.kd(D.aPK,D.d30,new C.cHy(o),A.iS(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fg,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aB(B.ag,n,B.b7,B.x,w,n)}}
var z=a.updateTypes(["o(of)","~()","K2(O)","of(Z<@,@>)","a1(of)","Z<o,@>(of)","aA<~>()","K1(O)","lg<K>(O,qu?,p?)","WI(O,K)","u6(O,qu?,p?)","Fr(O,an,dG?)"])
C.dho.prototype={
$1(d){return new C.K2(this.a,null)},
$S:z+2}
C.dhn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dU,B.X],j):A.a([B.e,B.ax],j),h=A.a([new A.aa(0,B.H,B.a4.l(0.22),B.f7,32)],x.V),g=A.Q(m?B.cg:B.a4.l(0.18),B.w,1),f=A.m(28),e=B.a4.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNk,B.k,n,n,new A.r(B.a4.l(0.18),n,A.Q(B.a4.l(0.45),B.w,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.am,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f8,w,A.aM(n,n,n,n,A.X(B.d3,m?B.aC:B.dd,n,n,n),n,n,n,new C.dhj(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ag(B.a9,B.aa,B.G,j,n,n),B.p),n,n,n,B.Jb,n,n,n)
e=A.ed(B.cF,A.a([new C.Nq("YouTube",B.Lf,m,n),new C.Nq("TikTok",B.m9,m,n),new C.Nq("Instagram",B.AU,m,n),new C.Nq("Facebook",B.AZ,m,n)],v),B.cn,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cA:B.kb,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aK:B.bD
r=A.X(B.f6,B.a4.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cg:B.aQ
u=A.w(A.a([e,B.aR,A.b2(n,B.W,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.V),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RI),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a5,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.as,B.i,B.j,0,B.q)
e=A.kd(D.aNn,D.d6w,new C.dhk(d),A.iS(n,n,n,n,n,n,n,n,n,n,n,m?B.by:B.am,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.T(12,0,12,12+l.f.d),A.cZ(A.c2(f,A.w(A.a([j,new A.I(B.Ww,u,n),new A.I(D.aFy,A.H(A.a([e,B.bw,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhl(d),n,n),B.al,A.dM(D.aRo,D.d7g,new C.dhm(d,w),A.bF(B.a4,n,n,n,B.e,n,D.Wj,n,new A.bD(A.m(14),B.V),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.as,B.i,B.Z,0,B.q),B.aB),new A.r(n,n,g,k,h,new A.ag(B.aD,B.aL,B.G,i,n,n),B.p),B.bB),n)},
$S:85}
C.dhj.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhk.prototype={
$0(){C.dxy()
$.Pa().sv(0,null)
A.a7(this.a,!1).R(null)},
$S:0}
C.dhl.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhm.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).R(w)
return null},
$S:0}
C.boY.prototype={
$1(d){return C.dxz(A.S(d,x.N,x.z))},
$S:z+3}
C.boZ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
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
C.boU.prototype={
$1(d){return d.c},
$S:z+0}
C.boV.prototype={
$1(d){return d.r},
$S:z+0}
C.boW.prototype={
$1(d){return d.f},
$S:z+0}
C.boX.prototype={
$1(d){return d.at},
$S:z+0}
C.boP.prototype={
$1(d){return d.aa()},
$S:z+5}
C.boO.prototype={
$1(d){return B.b.bj(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cHo.prototype={
$0(){},
$S:0}
C.cHn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHm.prototype={
$0(){var w=this.a,v=A.A(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHp.prototype={
$1(d){return new C.K1(this.a,null)},
$S:z+7}
C.cHu.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,D.aQJ,w,w,w,new C.cHt(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.J(A.fD(A.H(A.a([new A.od(D.wu,e,g,36,B.Bg,w),B.aP,A.J(A.j(t,w,1,B.av,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fW(B.h.gT(D.wu).l(0.45+e*0.2),B.J,10)],x.S),w,w),w,w,w),1),A.aI(!1,B.U,!0,w,A.aS(!1,w,!0,new A.I(B.bG,A.X(B.hc,A.ax(B.h.gT(D.wu),B.h.gao(D.wu),e),w,w,28),w),B.cP,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbqd(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],s),B.o,w,B.i,B.j,0,w,w),D.wu,w,g,B.fO,0,e,f),1)],s),B.o,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:320}
C.cHt.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHv.prototype={
$3(d,e,f){return new A.lg($.Gs(),new C.cHs(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHs.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dk(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a4.l(0.12)
s=A.m(12)
r=A.Q(B.a4.l(0.35),B.w,1)
q=A.X(B.jE,B.a4,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gs().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dk,B.hv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iZ(1.7777777777777777,C.dxA(new A.dn("fleet_master_"+r,x.W),!0,r,!0,j.gaN6(),"fleet_master"),k),B.aB),B.ai],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vY(0,B.x,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kH(new A.I(B.J_,A.w(u,B.E,B.i,B.j,0,B.q),k),k),new A.oq(D.aDE,A.aBF(new A.nC(new C.cHr(i,j),J.a4(i.d),!1,!0,!0,A.tz(),k),D.cI3),k)],w))},
$S:1718}
C.cHr.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WI(v,e,J.a4(w.d),new C.cHq(w,v),this.b,null)},
$S:z+9}
C.cHq.prototype={
$0(){return this.a.bpC(this.b)},
$S:0}
C.cHw.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.cHi.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHj.prototype={
$0(){C.Zy(this.a,$.boN)
return null},
$S:0}
C.cHk.prototype={
$3(d,e,f){return A.f_(new C.cHh(this.a,e))},
$S:z+10}
C.cHh.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aSE(u,s.a.c,s.e,s.d,new C.cHe(s),new C.cHf(s),new C.cHg(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),B.x,v,B.F,v,B.p1,v,v,B.ak),v,v,v)},
$S:1719}
C.cHe.prototype={
$0(){var w=this.a.c
w.toString
C.Zy(w,$.boN)
return null},
$S:0}
C.cHf.prototype={
$1(d){var w=this.a
return w.q(new C.cHd(w,d))},
$S:32}
C.cHd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHg.prototype={
$0(){var w=this.a
return w.q(new C.cHc(w))},
$S:0}
C.cHc.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWY.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWZ.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cM9.prototype={
$3(d,e,f){return new C.Fr(this.a.c,null)},
$S:z+11}
C.cMa.prototype={
$3(d,e,f){if(f==null)return e
return new A.aB(B.ag,null,B.b7,B.x,A.a([new C.Fr(this.a.c,null),D.atW],x.p),null)},
$C:"$3",
$R:3,
$S:251}
C.cHx.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHG.prototype={
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
A.hm(v,"load",new C.cHD(w),!1,u)
v=w.e
v.toString
A.hm(v,"error",new C.cHE(w),!1,u)
A.bN(B.ke,new C.cHF(w),x.H)
w=w.e
w.toString
return w},
$S:595}
C.cHD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHC(w))},
$S:47}
C.cHC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHB(w))},
$S:47}
C.cHB.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHF.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHA(w))},
$S:12}
C.cHA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHz.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHy.prototype={
$0(){var w,v=C.boM(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.SK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddN.prototype={
$1(d){var w,v,u,t,s=new A.F_([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1720};(function aliases(){var w=C.ali.prototype
w.aX6=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agn.prototype,"gaxp","bn4",1)
w(u,"gbnF","bnG",1)
w(u,"gbqd","bqe",6)
w(C.ago.prototype,"gbFp","bFq",1)
v(C,"edV","dxx",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yF,[C.dho,C.dhn,C.boY,C.boZ,C.boQ,C.boR,C.boS,C.boT,C.boU,C.boV,C.boW,C.boX,C.boP,C.boO,C.cHp,C.cHu,C.cHv,C.cHs,C.cHk,C.cHf,C.cM9,C.cMa,C.cHG,C.cHD,C.cHE,C.ddN])
v(A.a_Y,[C.dhj,C.dhk,C.dhl,C.dhm,C.cHo,C.cHn,C.cHl,C.cHm,C.cHt,C.cHq,C.cHw,C.cHi,C.cHj,C.cHe,C.cHd,C.cHg,C.cHc,C.cWY,C.cWZ,C.cHx,C.cHC,C.cHB,C.cHF,C.cHA,C.cHz,C.cHy])
v(A.av,[C.Nq,C.WI,C.aKx,C.aSE,C.aSF,C.aLO,C.aSD,C.aN7,C.aGL,C.aNc,C.Fr])
v(A.an,[C.of,C.qu])
v(A.ae,[C.K2,C.K1,C.a6E,C.a6F])
v(A.af,[C.agn,C.aLI,C.ali,C.ago])
v(A.a_Z,[C.cHr,C.cHh])
u(C.K5,A.aHG)
u(C.aLJ,C.ali)
w(C.ali,A.dX)})()
A.dB1(b.typeUniverse,JSON.parse('{"K2":{"ae":[],"p":[]},"WI":{"av":[],"p":[]},"K1":{"ae":[],"p":[]},"Nq":{"av":[],"p":[]},"agn":{"af":["K2"]},"aKx":{"av":[],"p":[]},"aLI":{"af":["K1"]},"aSE":{"av":[],"p":[]},"aSF":{"av":[],"p":[]},"aLO":{"av":[],"p":[]},"aSD":{"av":[],"p":[]},"aN7":{"av":[],"p":[]},"aGL":{"av":[],"p":[]},"a6E":{"ae":[],"p":[]},"Fr":{"av":[],"p":[]},"aLJ":{"af":["a6E"]},"aNc":{"av":[],"p":[]},"a6F":{"ae":[],"p":[]},"ago":{"af":["a6F"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<aa>"),O:w("a3<y>"),e:w("a3<of>"),S:w("a3<fW>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<of>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o9"),_:w("Dh"),k:w("of"),N:w("o"),Y:w("bk<a2>"),W:w("dn<o>"),J:w("lg<K>"),j:w("lg<qu?>"),E:w("xx<cM>"),q:w("Xy"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zq=new A.N(983224,"MaterialIcons",!1)
D.aPS=new A.ac(D.Zq,48,B.bq,null,null,null)
D.cVR=new A.D("Powered off",null,B.alo,null,null,null,null,null,null,null,null,null)
D.bL2=w([D.aPS,B.Q,D.cVR],x.p)
D.aB1=new A.ev(B.ak,B.i,B.Z,B.o,null,B.q,null,0,D.bL2,null)
D.atH=new A.dp(B.M,null,null,D.aB1,null)
D.cHI=new A.a9(18,18,B.SF,null)
D.atW=new A.dp(B.M,null,null,D.cHI,null)
D.auN=new A.hb(2,null,null,null,null,B.a8,null,null,null,null)
D.axK=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ayi=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azN=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDs=new A.T(0,3,0,3)
D.aDE=new A.T(10,0,10,88)
D.aE2=new A.T(12,6,12,10)
D.aEk=new A.T(14,8,14,6)
D.Wj=new A.T(18,12,18,12)
D.aFy=new A.T(20,8,20,20)
D.WU=new A.T(8,6,15,8)
D.aLE=new A.N(983222,"MaterialIcons",!1)
D.aNk=new A.ac(B.jE,26,B.a4,null,null,null)
D.aNn=new A.ac(B.YC,18,null,null,null,null)
D.aNB=new A.ac(B.rN,14,B.a8,null,null,null)
D.aLY=new A.N(983420,"MaterialIcons",!1)
D.aOl=new A.ac(D.aLY,14,B.a8,null,null,null)
D.aJZ=new A.N(62895,"MaterialIcons",!1)
D.aOp=new A.ac(D.aJZ,14,B.a8,null,null,null)
D.aPK=new A.ac(B.rH,16,B.a8,null,null,null)
D.aQJ=new A.ac(B.dF,20,B.a8,null,null,null)
D.aRo=new A.ac(B.iJ,20,null,null,null,null)
D.aRD=new A.ac(B.hc,16,null,null,null,null)
D.bOI=w([B.aK,B.X],x.O)
D.a00=new A.ag(B.aD,B.aL,B.G,D.bOI,null,null)
D.cBj=new A.aN("NGMY OS","14.2.1")
D.cA6=new A.aN("VirtualDroid","13.8.4")
D.cA5=new A.aN("NGMY OS","15.0.0")
D.cAS=new A.aN("VirtualDroid","14.1.2")
D.cA3=new A.aN("NGMY Tab OS","12.9.7")
D.cA1=new A.aN("NGMY OS","13.5.3")
D.czR=new A.aN("VirtualDroid","15.2.0")
D.cAt=new A.aN("NGMY OS","14.8.1")
D.cAY=new A.aN("NGMY Tab OS","13.2.4")
D.cBt=new A.aN("VirtualDroid","12.6.9")
D.czK=new A.aN("NGMY OS","16.0.1")
D.czz=new A.aN("VirtualDroid","14.9.0")
D.cBa=new A.aN("NGMY Tab OS","14.0.3")
D.cAf=new A.aN("NGMY OS","13.1.8")
D.czJ=new A.aN("VirtualDroid","13.4.5")
D.cA0=new A.aN("NGMY OS","15.3.2")
D.cAZ=new A.aN("NGMY Tab OS","12.4.1")
D.cBd=new A.aN("VirtualDroid","16.1.0")
D.cAs=new A.aN("NGMY OS","14.4.6")
D.cBk=new A.aN("VirtualDroid","15.0.8")
D.bNV=w([D.cBj,D.cA6,D.cA5,D.cAS,D.cA3,D.cA1,D.czR,D.cAt,D.cAY,D.cBt,D.czK,D.czz,D.cBa,D.cAf,D.czJ,D.cA0,D.cAZ,D.cBd,D.cAs,D.cBk],A.b4("a3<+(o,o)>"))
D.wu=w([B.a4,B.ff],x.O)
D.cDz=new A.eQ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cD7=new A.eQ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cD2=new A.eQ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cDb=new A.eQ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCZ=new A.eQ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDd=new A.eQ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDB=new A.eQ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cD_=new A.eQ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cD6=new A.eQ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDf=new A.eQ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCY=new A.eQ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDt=new A.eQ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDq=new A.eQ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cD5=new A.eQ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDn=new A.eQ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDm=new A.eQ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCX=new A.eQ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cDa=new A.eQ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDk=new A.eQ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDp=new A.eQ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6J=w([D.cDz,D.cD7,D.cD2,D.cDb,D.cCZ,D.cDd,D.cDB,D.cD_,D.cD6,D.cDf,D.cCY,D.cDt,D.cDq,D.cD5,D.cDn,D.cDm,D.cCX,D.cDa,D.cDk,D.cDp],A.b4("a3<+(o,o,a2,a2,o)>"))
D.bXa=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aeh=new C.K5(0,"youtube")
D.aei=new C.K5(1,"tiktok")
D.Oa=new C.K5(2,"instagram")
D.aej=new C.K5(3,"facebook")
D.csS=new C.K5(4,"other")
D.cHj=new A.a9(3,null,null,null)
D.cI3=new A.i7(4,10,8,0.52,null)
D.cX3=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLq=new A.aY(D.cX3,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cOH=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWU=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d30=new A.D("Open in YouTube",null,B.iq,null,null,null,null,null,null,null,null,null)
D.d6w=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7g=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7m=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.de9=new C.aN7(null)})();(function staticFields(){$.dxw=20
$.axC=null
$.boN=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiL","Gs",()=>A.aDu(0))
w($,"eiM","Pa",()=>A.aDu(null))})()};
(a=>{a["pZGrbBm43mgphK1i5MuTbxv3dCE="]=a.current})($__dart_deferred_initializers__);