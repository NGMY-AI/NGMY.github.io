((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eeW(d,e){A.a7(d,!1).cw(A.eA(new C.dhn(e),!0,null,x.H))},
Zz(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zz=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Pb()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aP),t)
w=3
return A.b(A.dL(B.L,new C.dhm(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zz)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVj(r)
if(q==null){d.H(x.q).f.V(D.cLn)
w=1
break}w=4
return A.b(A.bN(B.i9,null,x.H),$async$Zz)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxv=n
p=C.dVd(n)
n=$.Gs()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dln(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zz,v)},
dxy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oe(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K5(d){return C.dVm(d)},
dVm(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K5=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K5)
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
j=A.Q(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.boZ(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dxA(q)
w=12
return A.b(C.K4(a3,p),$async$K5)
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
case 19:m=C.dxy(A.S(n,x.N,x.z))
l=C.dxA(A.a([m],x.e))
w=21
return A.b(C.K4(a3,l),$async$K5)
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
case 18:case 14:q=C.dVk()
w=22
return A.b(C.K4(a3,q),$async$K5)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K5,v)},
dxA(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boQ(),w).ev(0),u=new A.F(d,new C.boR(),w).ev(0),t=new A.F(d,new C.boS(),w).ev(0),s=new A.F(d,new C.boT(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlo(null,q,u,t,v,s));++q}return r},
axE(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axE=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K5(d),$async$axE)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boU(),s).ev(0)
p=r.de(t,new C.boV(),s).ev(0)
o=r.de(t,new C.boW(),s).ev(0)
n=r.de(t,new C.boX(),s).ev(0)
m=C.dlo(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K4(d,t),$async$axE)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axE,v)},
K4(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$K4=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K4)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boP(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$K4)
case 3:return A.f(null,v)}})
return A.h($async$K4,v)},
dVk(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.du(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlo(w,w,t,s,u,r)
return q},
dlo(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jE(),h=d==null,g=D.a6H[B.l.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6H[B.l.a0(h?e+r:d,20)]
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
w=B.l.a0(e,20)
k=D.bX7[w]
j=D.bNS[w]
return new C.oe("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dVl(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a1())},
dVl(d,e){var w,v=J.du(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dhn:function dhn(d){this.a=d},
dhm:function dhm(d,e){this.a=d
this.b=e},
dhi:function dhi(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oe:function oe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
K3:function K3(d,e){this.c=d
this.a=e},
ago:function ago(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHn:function cHn(){},
cHm:function cHm(d,e){this.a=d
this.b=e},
cHk:function cHk(d){this.a=d},
cHl:function cHl(d,e){this.a=d
this.b=e},
cHo:function cHo(d){this.a=d},
cHt:function cHt(d){this.a=d},
cHs:function cHs(d){this.a=d},
cHu:function cHu(d,e){this.a=d
this.b=e},
cHr:function cHr(d,e,f){this.a=d
this.b=e
this.c=f},
cHq:function cHq(d,e){this.a=d
this.b=e},
cHp:function cHp(d,e){this.a=d
this.b=e},
cHv:function cHv(d){this.a=d},
WJ:function WJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKy:function aKy(d,e){this.c=d
this.a=e},
K2:function K2(d,e){this.c=d
this.a=e},
aLJ:function aLJ(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHh:function cHh(d){this.a=d},
cHi:function cHi(d){this.a=d},
cHj:function cHj(d){this.a=d},
cHg:function cHg(d,e){this.a=d
this.b=e},
cHd:function cHd(d){this.a=d},
cHe:function cHe(d){this.a=d},
cHc:function cHc(d,e){this.a=d
this.b=e},
cHf:function cHf(d){this.a=d},
cHb:function cHb(d){this.a=d},
aSF:function aSF(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSG:function aSG(d,e,f){this.c=d
this.d=e
this.a=f},
aLP:function aLP(d,e){this.c=d
this.a=e},
aSE:function aSE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWX:function cWX(d){this.a=d},
cWY:function cWY(d){this.a=d},
aN8:function aN8(d){this.a=d},
aGM:function aGM(d,e){this.c=d
this.a=e},
dVj(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVi(v)
if(u!=null)return new C.qu(w,C.dlm(u,!1),D.aef,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVh(v)
if(t!=null)return new C.qu(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aeg,"TikTok",q)
s=C.dVg(w,v)
if(s!=null)return s
r=C.dVf(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qu(w,w,D.csP,"Video",q)
return q},
dVg(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qu(d,"https://www.instagram.com/reel/"+w+u,D.O8,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qu(d,"https://www.instagram.com/p/"+w+u,D.O8,t,null)}return null},
dVf(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qu(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bf,!1)+"&show_text=false&width=734",D.aeh,"Facebook",null)},
dVi(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVh(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K6:function K6(d,e){this.a=d
this.b=e},
qu:function qu(d,e,f,g,h){var _=this
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
aLK:function aLK(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aNd:function aNd(d,e){this.c=d
this.a=e},
cM8:function cM8(d){this.a=d},
cM9:function cM9(d){this.a=d},
Fr:function Fr(d,e){this.c=d
this.a=e},
alj:function alj(){},
dxz(d,e,f,g,h,i){return new C.a6G(i,f,h,e,g,d)},
edF(d){var w=window
w.toString
A.hm(w,"message",new C.ddM(d),!1,x._)},
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
cHw:function cHw(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHB:function cHB(d){this.a=d},
cHD:function cHD(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHE:function cHE(d){this.a=d},
cHz:function cHz(d){this.a=d},
cHy:function cHy(d){this.a=d},
cHx:function cHx(d){this.a=d},
ddM:function ddM(d){this.a=d},
dVb(){var w,v,u
try{v=A.AO()
w=v.grV(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlm(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boM(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dxu(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVc(d,e,f){var w,v,u=C.boM(d)
if(u!=null){if(f){w=C.dVb()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxu(C.dlm(u,e))}return C.dxu(d)},
dVd(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVe(d){var w
if($.Pb().a==null)return!1
w=$.Gs().a
return d>=w&&d<w+4},
dxx(){var w=$.axD
if(w!=null)w.ad(0)
$.axD=null
$.Gs().sv(0,0)},
dxw(){var w,v,u,t=$.Pb()
if(t.a==null)return
w=$.axD
if(w!=null)w.ad(0)
v=$.dxv
if(v<=4){t=t.a
t.toString
C.dln(t)
return}w=$.Gs()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dln(t)},
dln(d){var w=$.axD
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
default:w=null}$.axD=A.dH(A.dr(0,0,0,0,0,w),C.edU())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nr.prototype={
B(d){var w=null,v=this.e,u=v?B.aK:B.e,t=A.m(20),s=A.P(B.a4.l(0.25),B.w,1),r=A.X(this.d,B.a4,w,w,14)
return A.t(w,A.H(A.a([r,B.fC,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.ce,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.Z,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.ff,w,w,w)}}
C.oe.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K3.prototype={
U(){return new C.ago(A.a([],x.e))},
gdP(){return this.c}}
C.ago.prototype={
a_(){var w=this
w.a5()
$.Gs().aq(0,w.gaxp())
C.edF(w.gbnF())
w.Z_()},
bn4(){if(this.c!=null)this.q(new C.cHn())},
bnG(){C.dxw()},
p(){$.Gs().Z(0,this.gaxp())
C.dxx()
$.Pb().sv(0,null)
this.a4()},
Z_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Z_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K5(t.a.c),$async$Z_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHm(t,s))
$.boN=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$Z_,v)},
V_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cHk(t))
w=3
return A.b(C.axE(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHl(t,s))
$.boN=J.a4(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V_,v)},
bpC(d){var w=this.c
w.toString
A.a7(w,!1).cw(A.eA(new C.cHo(d),!1,null,x.H))},
bqe(){var w=this.c
w.toString
return C.Zz(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fd:B.bs,s=A.c_(!0,A.w(A.a([new A.I(D.WS,new A.iP(new C.cHt(w),v),v),A.J(w.e?B.ou:new A.lg($.Pb(),new C.cHu(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.aro(B.a4,B.GQ,B.mc,D.d78,w.e?v:new C.cHv(w)),v)}}
C.WJ.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.H,B.a4.l(0.18),B.e9,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6F(n,!0,!C.dVe(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jE,B.n4,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.j,0,B.q),B.k,B.yU,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.U,!0,u,A.aS(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c2(p,A.fy(A.w(A.a([new C.aKy(o,u),A.J(n,1),A.t(u,A.H(A.a([A.X(B.Bm,B.a4.l(0.85),u,u,9),D.cHg,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.j,0,u,u),B.k,B.au,u,u,u,u,u,D.aDq,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aC),B.k,u,u,new A.r(u,u,r,s,q,D.a_Z,B.p),u,u,u,B.h8,u,u,u),1),B.aM,A.j(o.b,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.av,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.av,u,u,u,A.l(u,u,B.a4.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a6)}}
C.aKy.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gan(this.c.c.split("-")),w,w,B.av,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rM,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.au,w,w,w,w,w,B.WH,w,w,w)}}
C.K2.prototype={
U(){return new C.aLJ()}}
C.aLJ.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fd:B.bs,t=A.aM(w,w,w,w,B.a_9,w,w,w,new C.cHh(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.I(D.WS,A.H(A.a([t,A.J(new A.JS(A.H(A.a([A.J(new A.I(B.jz,A.j(s.b+" \xb7 "+s.c,w,1,B.av,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.U,!0,w,A.aS(!1,w,!0,new A.I(B.b4,A.X(B.hc,B.a4,w,w,28),w),B.cP,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHi(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.lg($.Pb(),new C.cHj(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aSF.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.H,B.a4.l(0.35),B.f6,28),new A.aa(0,B.H,B.A.l(0.45),B.dh,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxz(new A.dn(v+"_full_"+u,x.W),!1,u,!1,w.gaN6(),v+"_full")
w=v}else w=new C.aLP(t.r,s)}else w=new C.aGM(m,s)
else w=D.ddW
return A.t(s,A.c2(n,A.fy(A.w(A.a([new C.aSG(m,l,s),A.J(w,1),new C.aSE(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aC),B.k,s,s,new A.r(s,s,o,q,p,D.a_Z,B.p),s,r*2.05,s,B.bG,s,s,r)}}
C.aSG.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dl(r)
r=A.he(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h5:B.j1)===B.h5?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o4,s,s,s),B.bx,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aOj,B.en,D.aNz,B.en,D.aOn],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.X(B.Bg,B.a4.l(0.9),s,s,12),B.en,A.J(A.j(u.c,s,s,B.av,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.au,s,s,s,s,s,D.aEi,s,s,s)}}
C.aLP.prototype={
B(d){var w=null
return A.t(w,A.aH(A.w(A.a([A.X(B.AN,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF,A.f4(D.aRA,D.cWK,this.c,A.ec(w,w,w,w,w,w,w,w,w,B.a4,w,w,w,w,w,new A.aG(B.a4.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.Z,0,B.q),w,w,w),B.k,B.yU,w,w,w,w,w,w,w,w,1/0)}}
C.aSE.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axf(B.Bc,"YouTube",s===0,r,new C.cWX(u))
s=u.axf(B.kl,"Device",s===1,r,new C.cWY(u))
w=r?"Power off":"Power on"
v=r?D.Zo:D.aLC
return A.t(t,A.H(A.a([q,B.am,s,B.bx,A.aM(t,t,t,t,A.X(v,r?B.bV:B.hf,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dv)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.au,t,t,t,t,t,D.aE0,t,t,t)},
axf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a4:B.az
v=f&&g?B.a4.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aI(!1,B.U,!0,u,A.aS(!1,A.m(10),!0,new A.I(B.nh,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aN8.prototype={
B(d){return D.atF}}
C.aGM.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jT,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tH("Serial",u.c),q=w.tH("Model",u.d),p=w.tH("Device ID",u.e),o=w.tH("IMEI",u.r),n=w.tH("MAC",u.f),m=w.tH("OS",u.w+" "+u.x),l=w.tH("Location",u.y+", "+u.z),k=w.tH("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tH("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.aj,r,q,p,o,n,m,l,k,j,w.tH("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b4,v,v,B.al,!1)},
tH(d,e){var w=null
return new A.I(B.d1,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cv,A.j(e,w,w,w,w,w,w,D.cOD,w,w,w)],x.p),B.E,B.i,B.j,0,B.q),w)}}
C.K6.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qu.prototype={
gaN6(){var w=this.c
return w===D.aef||w===D.aeg||w===D.O8||w===D.aeh}}
C.a6F.prototype={
U(){return new C.aLK(null,null)}}
C.aLK.prototype={
a_(){this.a5()
var w=A.bu(null,B.vc,null,1,null,this)
w.jl(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX6()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cZ(t,new A.r(t,t,t,t,t,new A.ag(B.cj,B.ci,B.G,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bC),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.ex,p,t)
w=B.e.l(0.92)
q=A.aH(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.X(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n4
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aNd(s,t),r,q,A.aL(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aL(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aL(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aB(B.ag,t,B.b7,B.x,s,t)}}
C.aNd.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ku(u,B.M,new C.cM8(this),B.c9,B.bJ,!0,w,w,new C.cM9(this),w)
return new C.Fr(v,w)}}
C.Fr.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uR,B.SX],x.O),B.jE)
break
case 1:w=new A.aN(A.a([B.yU,D.ayg],x.O),B.m9)
break
case 2:w=new A.aN(A.a([D.azL,D.axI],x.O),B.AU)
break
case 3:w=new A.aN(A.a([B.V,B.dw],x.O),B.AZ)
break
case 4:w=new A.aN(A.a([B.au,B.aK],x.O),B.pn)
break
default:w=u}v=w.a
return A.t(u,A.aH(A.X(w.b,B.a4.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ag(B.aD,B.aL,B.G,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.alj.prototype={
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
a7J(d,e){var w,v=C.boM(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlm(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVc(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFq(){var w,v=this
if(v.w)return
v.q(new C.cHw(v))
w=v.e
if(w!=null)v.a7J(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gu()
$.pN().uS(w,new C.cHF(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHy(v))
w=v.e
w.toString
v.a7J(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZD,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fy(A.aH(new A.I(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1S(n,B.tB,w)],v)
if(o.f)w.push(A.fy(A.aH(new A.a9(28,28,D.auL,n),n,n,n),B.dd,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bq,B.w,1)
q=A.X(B.Li,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eM(0,A.aI(!1,B.U,!0,n,A.aS(!1,n,!0,A.aH(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.Z,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wh,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFp(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.boM(o.a.d)
if(v!=null)w.push(A.aL(8,A.kd(D.aPI,D.d2P,new C.cHx(o),A.iS(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ff,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aB(B.ag,n,B.b7,B.x,w,n)}}
var z=a.updateTypes(["o(oe)","~()","K3(O)","oe(Z<@,@>)","a1(oe)","Z<o,@>(oe)","aA<~>()","K2(O)","lg<K>(O,qu?,p?)","WJ(O,K)","u6(O,qu?,p?)","Fr(O,am,dG?)"])
C.dhn.prototype={
$1(d){return new C.K3(this.a,null)},
$S:z+2}
C.dhm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dT,B.V],j):A.a([B.e,B.ax],j),h=A.a([new A.aa(0,B.H,B.a4.l(0.22),B.f6,32)],x.V),g=A.P(m?B.cg:B.a4.l(0.18),B.w,1),f=A.m(28),e=B.a4.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNi,B.k,n,n,new A.r(B.a4.l(0.18),n,A.P(B.a4.l(0.45),B.w,1),n,n,n,B.as),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f7,w,A.aM(n,n,n,n,A.X(B.d3,m?B.az:B.dd,n,n,n),n,n,n,new C.dhi(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ag(B.a8,B.aa,B.G,j,n,n),B.p),n,n,n,B.J9,n,n,n)
e=A.ed(B.cG,A.a([new C.Nr("YouTube",B.Ld,m,n),new C.Nr("TikTok",B.m9,m,n),new C.Nr("Instagram",B.AU,m,n),new C.Nr("Facebook",B.AZ,m,n)],v),B.cp,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cC:B.kb,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aK:B.bs
r=A.X(B.f5,B.a4.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cg:B.aN
u=A.w(A.a([e,B.aR,A.b2(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RH),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a5,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.kd(D.aNl,D.d6j,new C.dhj(d),A.iS(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.ai,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.T(12,0,12,12+l.f.d),A.cZ(A.c2(f,A.w(A.a([j,new A.I(B.Wu,u,n),new A.I(D.aFw,A.H(A.a([e,B.bx,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhk(d),n,n),B.am,A.dM(D.aRl,D.d72,new C.dhl(d,w),A.bF(B.a4,n,n,n,B.e,n,D.Wh,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.Z,0,B.q),B.aC),new A.r(n,n,g,k,h,new A.ag(B.aD,B.aL,B.G,i,n,n),B.p),B.bC),n)},
$S:88}
C.dhi.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhj.prototype={
$0(){C.dxx()
$.Pb().sv(0,null)
A.a7(this.a,!1).R(null)},
$S:0}
C.dhk.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhl.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).R(w)
return null},
$S:0}
C.boY.prototype={
$1(d){return C.dxy(A.S(d,x.N,x.z))},
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
$S:85}
C.cHn.prototype={
$0(){},
$S:0}
C.cHm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHk.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHl.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHo.prototype={
$1(d){return new C.K2(this.a,null)},
$S:z+7}
C.cHt.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,D.aQG,w,w,w,new C.cHs(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.H(A.a([v,A.J(A.fD(A.H(A.a([new A.oc(D.wu,e,g,36,B.Bg,w),B.aQ,A.J(A.j(t,w,1,B.av,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fW(B.h.gT(D.wu).l(0.45+e*0.2),B.J,10)],x.S),w,w),w,w,w),1),A.aI(!1,B.U,!0,w,A.aS(!1,w,!0,new A.I(B.bG,A.X(B.hc,A.aw(B.h.gT(D.wu),B.h.gan(D.wu),e),w,w,28),w),B.cP,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbqd(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],s),B.o,w,B.i,B.j,0,w,w),D.wu,w,g,B.fO,0,e,f),1)],s),B.o,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:346}
C.cHs.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHu.prototype={
$3(d,e,f){return new A.lg($.Gs(),new C.cHr(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHr.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dk(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a4.l(0.12)
s=A.m(12)
r=A.P(B.a4.l(0.35),B.w,1)
q=A.X(B.jE,B.a4,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gs().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dk,B.hv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iZ(1.7777777777777777,C.dxz(new A.dn("fleet_master_"+r,x.W),!0,r,!0,j.gaN6(),"fleet_master"),k),B.aC),B.aj],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vY(0,B.x,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.kH(new A.I(B.IY,A.w(u,B.E,B.i,B.j,0,B.q),k),k),new A.op(D.aDC,A.aBG(new A.nC(new C.cHq(i,j),J.a4(i.d),!1,!0,!0,A.tz(),k),D.cI0),k)],w))},
$S:1717}
C.cHq.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WJ(v,e,J.a4(w.d),new C.cHp(w,v),this.b,null)},
$S:z+9}
C.cHp.prototype={
$0(){return this.a.bpC(this.b)},
$S:0}
C.cHv.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.cHh.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHi.prototype={
$0(){C.Zz(this.a,$.boN)
return null},
$S:0}
C.cHj.prototype={
$3(d,e,f){return A.f_(new C.cHg(this.a,e))},
$S:z+10}
C.cHg.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aSF(u,s.a.c,s.e,s.d,new C.cHd(s),new C.cHe(s),new C.cHf(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),B.x,v,B.F,v,B.p0,v,v,B.al),v,v,v)},
$S:1718}
C.cHd.prototype={
$0(){var w=this.a.c
w.toString
C.Zz(w,$.boN)
return null},
$S:0}
C.cHe.prototype={
$1(d){var w=this.a
return w.q(new C.cHc(w,d))},
$S:32}
C.cHc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHf.prototype={
$0(){var w=this.a
return w.q(new C.cHb(w))},
$S:0}
C.cHb.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWX.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWY.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cM8.prototype={
$3(d,e,f){return new C.Fr(this.a.c,null)},
$S:z+11}
C.cM9.prototype={
$3(d,e,f){if(f==null)return e
return new A.aB(B.ag,null,B.b7,B.x,A.a([new C.Fr(this.a.c,null),D.atU],x.p),null)},
$C:"$3",
$R:3,
$S:210}
C.cHw.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHF.prototype={
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
A.hm(v,"load",new C.cHC(w),!1,u)
v=w.e
v.toString
A.hm(v,"error",new C.cHD(w),!1,u)
A.bN(B.ke,new C.cHE(w),x.H)
w=w.e
w.toString
return w},
$S:594}
C.cHC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHB(w))},
$S:47}
C.cHB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHA(w))},
$S:47}
C.cHA.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHE.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHz(w))},
$S:12}
C.cHz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHy.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHx.prototype={
$0(){var w,v=C.boM(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.SK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddM.prototype={
$1(d){var w,v,u,t,s=new A.F_([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1719};(function aliases(){var w=C.alj.prototype
w.aX6=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ago.prototype,"gaxp","bn4",1)
w(u,"gbnF","bnG",1)
w(u,"gbqd","bqe",6)
w(C.agp.prototype,"gbFp","bFq",1)
v(C,"edU","dxw",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yF,[C.dhn,C.dhm,C.boY,C.boZ,C.boQ,C.boR,C.boS,C.boT,C.boU,C.boV,C.boW,C.boX,C.boP,C.boO,C.cHo,C.cHt,C.cHu,C.cHr,C.cHj,C.cHe,C.cM8,C.cM9,C.cHF,C.cHC,C.cHD,C.ddM])
v(A.a_Z,[C.dhi,C.dhj,C.dhk,C.dhl,C.cHn,C.cHm,C.cHk,C.cHl,C.cHs,C.cHp,C.cHv,C.cHh,C.cHi,C.cHd,C.cHc,C.cHf,C.cHb,C.cWX,C.cWY,C.cHw,C.cHB,C.cHA,C.cHE,C.cHz,C.cHy,C.cHx])
v(A.av,[C.Nr,C.WJ,C.aKy,C.aSF,C.aSG,C.aLP,C.aSE,C.aN8,C.aGM,C.aNd,C.Fr])
v(A.am,[C.oe,C.qu])
v(A.ae,[C.K3,C.K2,C.a6F,C.a6G])
v(A.af,[C.ago,C.aLJ,C.alj,C.agp])
v(A.a0_,[C.cHq,C.cHg])
u(C.K6,A.aHH)
u(C.aLK,C.alj)
w(C.alj,A.dX)})()
A.dB0(b.typeUniverse,JSON.parse('{"K3":{"ae":[],"p":[]},"WJ":{"av":[],"p":[]},"K2":{"ae":[],"p":[]},"Nr":{"av":[],"p":[]},"ago":{"af":["K3"]},"aKy":{"av":[],"p":[]},"aLJ":{"af":["K2"]},"aSF":{"av":[],"p":[]},"aSG":{"av":[],"p":[]},"aLP":{"av":[],"p":[]},"aSE":{"av":[],"p":[]},"aN8":{"av":[],"p":[]},"aGM":{"av":[],"p":[]},"a6F":{"ae":[],"p":[]},"Fr":{"av":[],"p":[]},"aLK":{"af":["a6F"]},"aNd":{"av":[],"p":[]},"a6G":{"ae":[],"p":[]},"agp":{"af":["a6G"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<aa>"),O:w("a3<y>"),e:w("a3<oe>"),S:w("a3<fW>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<oe>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o8"),_:w("Dh"),k:w("oe"),N:w("o"),Y:w("bk<a2>"),W:w("dn<o>"),J:w("lg<K>"),j:w("lg<qu?>"),E:w("xx<cM>"),q:w("Xz"),z:w("@"),Q:w("am?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zo=new A.N(983224,"MaterialIcons",!1)
D.aPQ=new A.ac(D.Zo,48,B.bq,null,null,null)
D.cVG=new A.D("Powered off",null,B.alm,null,null,null,null,null,null,null,null,null)
D.bL_=w([D.aPQ,B.Q,D.cVG],x.p)
D.aB_=new A.ev(B.al,B.i,B.Z,B.o,null,B.q,null,0,D.bL_,null)
D.atF=new A.dp(B.M,null,null,D.aB_,null)
D.cHF=new A.a9(18,18,B.SE,null)
D.atU=new A.dp(B.M,null,null,D.cHF,null)
D.auL=new A.hb(2,null,null,null,null,B.a9,null,null,null,null)
D.axI=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ayg=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azL=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDq=new A.T(0,3,0,3)
D.aDC=new A.T(10,0,10,88)
D.aE0=new A.T(12,6,12,10)
D.aEi=new A.T(14,8,14,6)
D.Wh=new A.T(18,12,18,12)
D.aFw=new A.T(20,8,20,20)
D.WS=new A.T(8,6,15,8)
D.aLC=new A.N(983222,"MaterialIcons",!1)
D.aNi=new A.ac(B.jE,26,B.a4,null,null,null)
D.aNl=new A.ac(B.YA,18,null,null,null,null)
D.aNz=new A.ac(B.rM,14,B.a9,null,null,null)
D.aLW=new A.N(983420,"MaterialIcons",!1)
D.aOj=new A.ac(D.aLW,14,B.a9,null,null,null)
D.aJX=new A.N(62895,"MaterialIcons",!1)
D.aOn=new A.ac(D.aJX,14,B.a9,null,null,null)
D.aPI=new A.ac(B.rG,16,B.a9,null,null,null)
D.aQG=new A.ac(B.dF,20,B.a9,null,null,null)
D.aRl=new A.ac(B.iJ,20,null,null,null,null)
D.aRA=new A.ac(B.hc,16,null,null,null,null)
D.bOF=w([B.aK,B.V],x.O)
D.a_Z=new A.ag(B.aD,B.aL,B.G,D.bOF,null,null)
D.cBg=new A.aN("NGMY OS","14.2.1")
D.cA3=new A.aN("VirtualDroid","13.8.4")
D.cA2=new A.aN("NGMY OS","15.0.0")
D.cAP=new A.aN("VirtualDroid","14.1.2")
D.cA0=new A.aN("NGMY Tab OS","12.9.7")
D.czZ=new A.aN("NGMY OS","13.5.3")
D.czO=new A.aN("VirtualDroid","15.2.0")
D.cAq=new A.aN("NGMY OS","14.8.1")
D.cAV=new A.aN("NGMY Tab OS","13.2.4")
D.cBq=new A.aN("VirtualDroid","12.6.9")
D.czH=new A.aN("NGMY OS","16.0.1")
D.czw=new A.aN("VirtualDroid","14.9.0")
D.cB7=new A.aN("NGMY Tab OS","14.0.3")
D.cAc=new A.aN("NGMY OS","13.1.8")
D.czG=new A.aN("VirtualDroid","13.4.5")
D.czY=new A.aN("NGMY OS","15.3.2")
D.cAW=new A.aN("NGMY Tab OS","12.4.1")
D.cBa=new A.aN("VirtualDroid","16.1.0")
D.cAp=new A.aN("NGMY OS","14.4.6")
D.cBh=new A.aN("VirtualDroid","15.0.8")
D.bNS=w([D.cBg,D.cA3,D.cA2,D.cAP,D.cA0,D.czZ,D.czO,D.cAq,D.cAV,D.cBq,D.czH,D.czw,D.cB7,D.cAc,D.czG,D.czY,D.cAW,D.cBa,D.cAp,D.cBh],A.b4("a3<+(o,o)>"))
D.wu=w([B.a4,B.fe],x.O)
D.cDw=new A.eQ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cD4=new A.eQ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cD_=new A.eQ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cD8=new A.eQ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCW=new A.eQ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDa=new A.eQ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDy=new A.eQ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCX=new A.eQ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cD3=new A.eQ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDc=new A.eQ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCV=new A.eQ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDq=new A.eQ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDn=new A.eQ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cD2=new A.eQ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDk=new A.eQ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDj=new A.eQ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCU=new A.eQ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cD7=new A.eQ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDh=new A.eQ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDm=new A.eQ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6H=w([D.cDw,D.cD4,D.cD_,D.cD8,D.cCW,D.cDa,D.cDy,D.cCX,D.cD3,D.cDc,D.cCV,D.cDq,D.cDn,D.cD2,D.cDk,D.cDj,D.cCU,D.cD7,D.cDh,D.cDm],A.b4("a3<+(o,o,a2,a2,o)>"))
D.bX7=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aef=new C.K6(0,"youtube")
D.aeg=new C.K6(1,"tiktok")
D.O8=new C.K6(2,"instagram")
D.aeh=new C.K6(3,"facebook")
D.csP=new C.K6(4,"other")
D.cHg=new A.a9(3,null,null,null)
D.cI0=new A.i7(4,10,8,0.52,null)
D.cWU=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLn=new A.aY(D.cWU,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cOD=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWK=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2P=new A.D("Open in YouTube",null,B.ip,null,null,null,null,null,null,null,null,null)
D.d6j=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d72=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d78=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddW=new C.aN8(null)})();(function staticFields(){$.dxv=20
$.axD=null
$.boN=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiK","Gs",()=>A.aDv(0))
w($,"eiL","Pb",()=>A.aDv(null))})()};
(a=>{a["aos2K0vjQpgvBqRcWUXQ2693PLc="]=a.current})($__dart_deferred_initializers__);