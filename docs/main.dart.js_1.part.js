((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ef_(d,e){A.a7(d,!1).cz(A.eB(new C.dhr(e),!0,null,x.H))},
ZA(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$ZA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Pc()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aP),t)
w=3
return A.b(A.dM(B.L,new C.dhq(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$ZA)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVo(r)
if(q==null){d.H(x.q).f.V(D.cLE)
w=1
break}w=4
return A.b(A.bN(B.i9,null,x.H),$async$ZA)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxz=n
p=C.dVi(n)
n=$.Gt()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlq(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZA,v)},
dxC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
K6(d){return C.dVr(d)},
dVr(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K6)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.J.aE(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eK(r,x.f)
k=A.dm(k,new C.bp_(),k.$ti.j("E.E"),x.k)
j=A.Q(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.bp0(),j),j.j("E.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dxE(q)
w=12
return A.b(C.K5(a3,p),$async$K6)
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
n=B.J.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dxC(A.S(n,x.N,x.z))
l=C.dxE(A.a([m],x.e))
w=21
return A.b(C.K5(a3,l),$async$K6)
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
case 18:case 14:q=C.dVp()
w=22
return A.b(C.K5(a3,q),$async$K6)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K6,v)},
dxE(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boS(),w).ev(0),u=new A.F(d,new C.boT(),w).ev(0),t=new A.F(d,new C.boU(),w).ev(0),s=new A.F(d,new C.boV(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlr(null,q,u,t,v,s));++q}return r},
axH(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$axH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K6(d),$async$axH)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boW(),s).ev(0)
p=r.de(t,new C.boX(),s).ev(0)
o=r.de(t,new C.boY(),s).ev(0)
n=r.de(t,new C.boZ(),s).ev(0)
m=C.dlr(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K5(d,t),$async$axH)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$axH,v)},
K5(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$K5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K5)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boR(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.J.au(s,null)),$async$K5)
case 3:return A.h(null,v)}})
return A.i($async$K5,v)},
dVp(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.du(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlr(w,w,t,s,u,r)
return q},
dlr(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jF(),h=d==null,g=D.a6T[B.l.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6T[B.l.a0(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boQ(),A.a_(p).j("F<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
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
k=D.bXo[w]
j=D.bO9[w]
return new C.of("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dVq(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a1())},
dVq(d,e){var w,v=J.du(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dhr:function dhr(d){this.a=d},
dhq:function dhq(d,e){this.a=d
this.b=e},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhp:function dhp(d,e){this.a=d
this.b=e},
Ns:function Ns(d,e,f,g){var _=this
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
bp_:function bp_(){},
bp0:function bp0(){},
boS:function boS(){},
boT:function boT(){},
boU:function boU(){},
boV:function boV(){},
boW:function boW(){},
boX:function boX(){},
boY:function boY(){},
boZ:function boZ(){},
boR:function boR(){},
boQ:function boQ(){},
K4:function K4(d,e){this.c=d
this.a=e},
agq:function agq(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHr:function cHr(){},
cHq:function cHq(d,e){this.a=d
this.b=e},
cHo:function cHo(d){this.a=d},
cHp:function cHp(d,e){this.a=d
this.b=e},
cHs:function cHs(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHw:function cHw(d){this.a=d},
cHy:function cHy(d,e){this.a=d
this.b=e},
cHv:function cHv(d,e,f){this.a=d
this.b=e
this.c=f},
cHu:function cHu(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e){this.a=d
this.b=e},
cHz:function cHz(d){this.a=d},
WK:function WK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKA:function aKA(d,e){this.c=d
this.a=e},
K3:function K3(d,e){this.c=d
this.a=e},
aLL:function aLL(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHl:function cHl(d){this.a=d},
cHm:function cHm(d){this.a=d},
cHn:function cHn(d){this.a=d},
cHk:function cHk(d,e){this.a=d
this.b=e},
cHh:function cHh(d){this.a=d},
cHi:function cHi(d){this.a=d},
cHg:function cHg(d,e){this.a=d
this.b=e},
cHj:function cHj(d){this.a=d},
cHf:function cHf(d){this.a=d},
aSH:function aSH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSI:function aSI(d,e,f){this.c=d
this.d=e
this.a=f},
aLR:function aLR(d,e){this.c=d
this.a=e},
aSG:function aSG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cX0:function cX0(d){this.a=d},
cX1:function cX1(d){this.a=d},
aNa:function aNa(d){this.a=d},
aGO:function aGO(d,e){this.c=d
this.a=e},
dVo(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVn(v)
if(u!=null)return new C.qv(w,C.dlp(u,!1),D.aes,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVm(v)
if(t!=null)return new C.qv(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aet,"TikTok",q)
s=C.dVl(w,v)
if(s!=null)return s
r=C.dVk(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qv(w,w,D.ct0,"Video",q)
return q},
dVl(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qv(d,"https://www.instagram.com/reel/"+w+u,D.Om,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qv(d,"https://www.instagram.com/p/"+w+u,D.Om,t,null)}return null},
dVk(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qv(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bg,!1)+"&show_text=false&width=734",D.aeu,"Facebook",null)},
dVn(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVm(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K7:function K7(d,e){this.a=d
this.b=e},
qv:function qv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6G:function a6G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLM:function aLM(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aNf:function aNf(d,e){this.c=d
this.a=e},
cMc:function cMc(d){this.a=d},
cMd:function cMd(d){this.a=d},
Fs:function Fs(d,e){this.c=d
this.a=e},
all:function all(){},
dxD(d,e,f,g,h,i){return new C.a6H(i,f,h,e,g,d)},
edJ(d){var w=window
w.toString
A.hm(w,"message",new C.ddQ(d),!1,x._)},
a6H:function a6H(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agr:function agr(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHA:function cHA(d){this.a=d},
cHJ:function cHJ(d){this.a=d},
cHG:function cHG(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHH:function cHH(d){this.a=d},
cHE:function cHE(d){this.a=d},
cHI:function cHI(d){this.a=d},
cHD:function cHD(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHB:function cHB(d){this.a=d},
ddQ:function ddQ(d){this.a=d},
dVg(){var w,v,u
try{v=A.AN()
w=v.grV(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cG(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlp(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boO(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dxy(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVh(d,e,f){var w,v,u=C.boO(d)
if(u!=null){if(f){w=C.dVg()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxy(C.dlp(u,e))}return C.dxy(d)},
dVi(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVj(d){var w
if($.Pc().a==null)return!1
w=$.Gt().a
return d>=w&&d<w+4},
dxB(){var w=$.axG
if(w!=null)w.ad(0)
$.axG=null
$.Gt().sv(0,0)},
dxA(){var w,v,u,t=$.Pc()
if(t.a==null)return
w=$.axG
if(w!=null)w.ad(0)
v=$.dxz
if(v<=4){t=t.a
t.toString
C.dlq(t)
return}w=$.Gt()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlq(t)},
dlq(d){var w=$.axG
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
default:w=null}$.axG=A.dI(A.dr(0,0,0,0,0,w),C.edY())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ns.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.O(B.a4.l(0.25),B.v,1),r=A.W(this.d,B.a4,w,w,14)
return A.t(w,A.G(A.a([r,B.fC,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ce,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.Z,0,w,w),B.k,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.ff,w,w,w)}}
C.of.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K4.prototype={
U(){return new C.agq(A.a([],x.e))},
gdQ(){return this.c}}
C.agq.prototype={
a_(){var w=this
w.a5()
$.Gt().aq(0,w.gaxn())
C.edJ(w.gbnI())
w.YX()},
bn7(){if(this.c!=null)this.q(new C.cHr())},
bnJ(){C.dxA()},
p(){$.Gt().Z(0,this.gaxn())
C.dxB()
$.Pc().sv(0,null)
this.a4()},
YX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K6(t.a.c),$async$YX)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHq(t,s))
$.boP=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
UX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.q(new C.cHo(t))
w=3
return A.b(C.axH(t.a.c),$async$UX)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHp(t,s))
$.boP=J.a3(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UX,v)},
bpF(d){var w=this.c
w.toString
A.a7(w,!1).cz(A.eB(new C.cHs(d),!1,null,x.H))},
bqh(){var w=this.c
w.toString
return C.ZA(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fe:B.bt,s=A.c_(!0,A.w(A.a([new A.J(D.X3,new A.iP(new C.cHx(w),v),v),A.I(w.e?B.ox:new A.lg($.Pc(),new C.cHy(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.arr(B.a4,B.GY,B.mg,D.d7t,w.e?v:new C.cHz(w)),v)}}
C.WK.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.aa(0,B.H,B.a4.l(0.18),B.e5,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6G(n,!0,!C.dVj(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jE,B.n9,u,u,22),B.aH,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.j,0,B.q),B.k,B.yW,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.U,!0,u,A.aS(!1,t,!0,A.w(A.a([A.I(A.t(u,A.c2(p,A.fz(A.w(A.a([new C.aKA(o,u),A.I(n,1),A.t(u,A.G(A.a([A.W(B.Bt,B.a4.l(0.85),u,u,9),D.cHv,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.j,0,u,u),B.k,B.av,u,u,u,u,u,D.aDE,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,u,u,new A.q(u,u,r,s,q,D.a0a,B.p),u,u,u,B.h8,u,u,u),1),B.aH,A.d(o.b,u,1,B.au,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.au,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.au,u,u,u,A.l(u,u,B.a4.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a7)}}
C.aKA.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.I(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.au,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,B.WT,w,w,w)}}
C.K3.prototype={
U(){return new C.aLL()}}
C.aLL.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fe:B.bt,t=A.aM(w,w,w,w,B.a_l,w,w,w,new C.cHl(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.J(D.X3,A.G(A.a([t,A.I(new A.JT(A.G(A.a([A.I(new A.J(B.jz,A.d(s.b+" \xb7 "+s.c,w,1,B.au,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.U,!0,w,A.aS(!1,w,!0,new A.J(B.b5,A.W(B.hc,B.a4,w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHm(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a7)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.lg($.Pc(),new C.cHn(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aSH.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.H,B.a4.l(0.35),B.f7,28),new A.aa(0,B.H,B.A.l(0.45),B.di,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxD(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaN6(),v+"_full")
w=v}else w=new C.aLR(t.r,s)}else w=new C.aGO(m,s)
else w=D.deg
return A.t(s,A.c2(n,A.fz(A.w(A.a([new C.aSI(m,l,s),A.I(w,1),new C.aSG(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,s,s,new A.q(s,s,o,q,p,D.a0a,B.p),s,r*2.05,s,B.bI,s,s,r)}}
C.aSI.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dn(r)
r=A.he(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h5:B.j5)===B.h5?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o7,s,s,s),B.b4,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bF,D.aOx,B.en,D.aNN,B.en,D.aOB],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aH,A.G(A.a([A.W(B.Bm,B.a4.l(0.9),s,s,12),B.en,A.I(A.d(u.c,s,s,B.au,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,D.aEw,s,s,s)}}
C.aLR.prototype={
B(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.W(B.AS,B.e.l(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF,A.f4(D.aRO,D.cX3,this.c,A.ec(w,w,w,w,w,w,w,w,w,B.a4,w,w,w,w,w,new A.aH(B.a4.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.Z,0,B.q),w,w,w),B.k,B.yW,w,w,w,w,w,w,w,w,1/0)}}
C.aSG.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axd(B.Bi,"YouTube",s===0,r,new C.cX0(u))
s=u.axd(B.km,"Device",s===1,r,new C.cX1(u))
w=r?"Power off":"Power on"
v=r?D.ZA:D.aLQ
return A.t(t,A.G(A.a([q,B.am,s,B.b4,A.aM(t,t,t,t,A.W(v,r?B.c_:B.hf,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dw)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,D.aEe,t,t,t)},
axd(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a4:B.az
v=f&&g?B.a4.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aJ(!1,B.U,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.nm,A.w(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a7),1)}}
C.aNa.prototype={
B(d){return D.atR}}
C.aGO.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.jT,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tH("Serial",u.c),q=w.tH("Model",u.d),p=w.tH("Device ID",u.e),o=w.tH("IMEI",u.r),n=w.tH("MAC",u.f),m=w.tH("OS",u.w+" "+u.x),l=w.tH("Location",u.y+", "+u.z),k=w.tH("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tH("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aH,s,B.aj,r,q,p,o,n,m,l,k,j,w.tH("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.b5,v,v,B.al,!1)},
tH(d,e){var w=null
return new A.J(B.d1,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cs,A.d(e,w,w,w,w,w,w,D.cOV,w,w,w)],x.p),B.E,B.i,B.j,0,B.q),w)}}
C.K7.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qv.prototype={
gaN6(){var w=this.c
return w===D.aes||w===D.aet||w===D.Om||w===D.aeu}}
C.a6G.prototype={
U(){return new C.aLM(null,null)}}
C.aLM.prototype={
a_(){this.a5()
var w=A.bu(null,B.ve,null,1,null,this)
w.jl(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aX6()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cV(t,new A.q(t,t,t,t,t,new A.ag(B.cg,B.cf,B.F,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bC),q=x.Y,p=u.d
p===$&&A.c()
p=A.cn(B.ex,p,t)
w=B.e.l(0.92)
q=A.aI(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n9
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aNf(s,t),r,q,A.aD(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aD(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aD(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aB(B.ag,t,B.b8,B.x,s,t)}}
C.aNf.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kv(u,B.M,new C.cMc(this),B.c8,B.bL,!0,w,w,new C.cMd(this),w)
return new C.Fs(v,w)}}
C.Fs.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uT,B.T9],x.O),B.jE)
break
case 1:w=new A.aN(A.a([B.yW,D.ays],x.O),B.mc)
break
case 2:w=new A.aN(A.a([D.azY,D.axV],x.O),B.B_)
break
case 3:w=new A.aN(A.a([B.V,B.dx],x.O),B.B4)
break
case 4:w=new A.aN(A.a([B.av,B.aM],x.O),B.pn)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.W(w.b,B.a4.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.q(u,u,u,u,u,new A.ag(B.aC,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.all.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6H.prototype={
U(){return new C.agr()}}
C.agr.prototype={
a7G(d,e){var w,v=C.boO(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlp(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVh(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFt(){var w,v=this
if(v.w)return
v.q(new C.cHA(v))
w=v.e
if(w!=null)v.a7G(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gv()
$.pO().uS(w,new C.cHJ(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHC(v))
w=v.e
w.toString
v.a7G(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.ZP,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fz(A.aI(new A.J(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1T(n,B.tD,w)],v)
if(o.f)w.push(A.fz(A.aI(new A.a9(28,28,D.auX,n),n,n,n),B.de,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.v,1)
q=A.W(B.Lr,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eM(0,A.aJ(!1,B.U,!0,n,A.aS(!1,n,!0,A.aI(A.t(n,A.G(A.a([q,B.am,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.Z,0,n,n),B.k,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,B.Je,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFs(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a7)))}v=C.boO(o.a.d)
if(v!=null)w.push(A.aD(8,A.kf(D.aPW,D.d39,new C.cHB(o),A.iS(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ff,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aB(B.ag,n,B.b8,B.x,w,n)}}
var z=a.updateTypes(["o(of)","~()","K4(P)","of(Z<@,@>)","a1(of)","Z<o,@>(of)","aA<~>()","K3(P)","lg<K>(P,qv?,p?)","WK(P,K)","u5(P,qv?,p?)","Fs(P,an,dH?)"])
C.dhr.prototype={
$1(d){return new C.K4(this.a,null)},
$S:z+2}
C.dhq.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aG(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dU,B.V],j):A.a([B.e,B.ax],j),h=A.a([new A.aa(0,B.H,B.a4.l(0.22),B.f7,32)],x.V),g=A.O(m?B.cj:B.a4.l(0.18),B.v,1),f=A.m(28),e=B.a4.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNw,B.k,n,n,new A.q(B.a4.l(0.18),n,A.O(B.a4.l(0.45),B.v,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aH,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f8,w,A.aM(n,n,n,n,A.W(B.d2,m?B.az:B.de,n,n,n),n,n,n,new C.dhm(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.q(n,n,n,n,n,new A.ag(B.a6,B.a8,B.F,j,n,n),B.p),n,n,n,B.Jk,n,n,n)
e=A.ed(B.cG,A.a([new C.Ns("YouTube",B.Ln,m,n),new C.Ns("TikTok",B.mc,m,n),new C.Ns("Instagram",B.B_,m,n),new C.Ns("Facebook",B.B4,m,n)],v),B.co,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cq:B.kc,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bt
r=A.W(B.f6,B.a4.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cj:B.aN
u=A.w(A.a([e,B.aS,A.b2(n,B.Y,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aH(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RV),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.G,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a5,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a9,n,B.an,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.kf(D.aNz,D.d6E,new C.dhn(d),A.iS(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.ai,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.T(12,0,12,12+l.f.d),A.cV(A.c2(f,A.w(A.a([j,new A.J(B.WG,u,n),new A.J(D.aFK,A.G(A.a([e,B.b4,A.ci(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dho(d),n,n),B.am,A.dN(D.aRz,D.d7n,new C.dhp(d,w),A.bF(B.a4,n,n,n,B.e,n,B.Je,n,new A.bD(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.Z,0,B.q),B.aD),new A.q(n,n,g,k,h,new A.ag(B.aC,B.aI,B.F,i,n,n),B.p),B.bC),n)},
$S:87}
C.dhm.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhn.prototype={
$0(){C.dxB()
$.Pc().sv(0,null)
A.a7(this.a,!1).R(null)},
$S:0}
C.dho.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhp.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).R(w)
return null},
$S:0}
C.bp_.prototype={
$1(d){return C.dxC(A.S(d,x.N,x.z))},
$S:z+3}
C.bp0.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.boS.prototype={
$1(d){return d.c},
$S:z+0}
C.boT.prototype={
$1(d){return d.r},
$S:z+0}
C.boU.prototype={
$1(d){return d.f},
$S:z+0}
C.boV.prototype={
$1(d){return d.at},
$S:z+0}
C.boW.prototype={
$1(d){return d.c},
$S:z+0}
C.boX.prototype={
$1(d){return d.r},
$S:z+0}
C.boY.prototype={
$1(d){return d.f},
$S:z+0}
C.boZ.prototype={
$1(d){return d.at},
$S:z+0}
C.boR.prototype={
$1(d){return d.aa()},
$S:z+5}
C.boQ.prototype={
$1(d){return B.b.bj(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cHr.prototype={
$0(){},
$S:0}
C.cHq.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHo.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHp.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHs.prototype={
$1(d){return new C.K3(this.a,null)},
$S:z+7}
C.cHx.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,D.aQU,w,w,w,new C.cHw(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.G(A.a([v,A.I(A.fE(A.G(A.a([new A.od(D.ww,e,g,36,B.Bm,w),B.aQ,A.I(A.d(t,w,1,B.au,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fW(B.h.gT(D.ww).l(0.45+e*0.2),B.I,10)],x.S),w,w),w,w,w),1),A.aJ(!1,B.U,!0,w,A.aS(!1,w,!0,new A.J(B.bI,A.W(B.hc,A.ax(B.h.gT(D.ww),B.h.gaj(D.ww),e),w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbqg(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a7)],s),B.o,w,B.i,B.j,0,w,w),D.ww,w,g,B.fN,0,e,f),1)],s),B.o,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:345}
C.cHw.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHy.prototype={
$3(d,e,f){return new A.lg($.Gt(),new C.cHv(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHv.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dk(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a4.l(0.12)
s=A.m(12)
r=A.O(B.a4.l(0.35),B.v,1)
q=A.W(B.jE,B.a4,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Gt().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dl,B.hu,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iZ(1.7777777777777777,C.dxD(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaN6(),"fleet_master"),k),B.aD),B.aj],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vX(0,B.x,k,B.G,k,k,k,k,!1,k,B.al,!1,A.a([new A.kH(new A.J(B.J8,A.w(u,B.E,B.i,B.j,0,B.q),k),k),new A.oq(D.aDQ,A.aBJ(new A.nD(new C.cHu(i,j),J.a3(i.d),!1,!0,!0,A.tz(),k),D.cIg),k)],w))},
$S:1717}
C.cHu.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WK(v,e,J.a3(w.d),new C.cHt(w,v),this.b,null)},
$S:z+9}
C.cHt.prototype={
$0(){return this.a.bpF(this.b)},
$S:0}
C.cHz.prototype={
$0(){this.a.UX()
return null},
$S:0}
C.cHl.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHm.prototype={
$0(){C.ZA(this.a,$.boP)
return null},
$S:0}
C.cHn.prototype={
$3(d,e,f){return A.f_(new C.cHk(this.a,e))},
$S:z+10}
C.cHk.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cH(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aS,new C.aSH(u,s.a.c,s.e,s.d,new C.cHh(s),new C.cHi(s),new C.cHj(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),B.x,v,B.G,v,B.p0,v,v,B.al),v,v,v)},
$S:1718}
C.cHh.prototype={
$0(){var w=this.a.c
w.toString
C.ZA(w,$.boP)
return null},
$S:0}
C.cHi.prototype={
$1(d){var w=this.a
return w.q(new C.cHg(w,d))},
$S:32}
C.cHg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHj.prototype={
$0(){var w=this.a
return w.q(new C.cHf(w))},
$S:0}
C.cHf.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cX0.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cX1.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMc.prototype={
$3(d,e,f){return new C.Fs(this.a.c,null)},
$S:z+11}
C.cMd.prototype={
$3(d,e,f){if(f==null)return e
return new A.aB(B.ag,null,B.b8,B.x,A.a([new C.Fs(this.a.c,null),D.au5],x.p),null)},
$C:"$3",
$R:3,
$S:210}
C.cHA.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHJ.prototype={
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
w.a7G(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hm(v,"load",new C.cHG(w),!1,u)
v=w.e
v.toString
A.hm(v,"error",new C.cHH(w),!1,u)
A.bN(B.kf,new C.cHI(w),x.H)
w=w.e
w.toString
return w},
$S:594}
C.cHG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHF(w))},
$S:47}
C.cHF.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHE(w))},
$S:47}
C.cHE.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHI.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHD(w))},
$S:12}
C.cHD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHC.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHB.prototype={
$0(){var w,v=C.boO(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kK.SI(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddQ.prototype={
$1(d){var w,v,u,t,s=new A.F0([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.J.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1719};(function aliases(){var w=C.all.prototype
w.aX6=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agq.prototype,"gaxn","bn7",1)
w(u,"gbnI","bnJ",1)
w(u,"gbqg","bqh",6)
w(C.agr.prototype,"gbFs","bFt",1)
v(C,"edY","dxA",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yE,[C.dhr,C.dhq,C.bp_,C.bp0,C.boS,C.boT,C.boU,C.boV,C.boW,C.boX,C.boY,C.boZ,C.boR,C.boQ,C.cHs,C.cHx,C.cHy,C.cHv,C.cHn,C.cHi,C.cMc,C.cMd,C.cHJ,C.cHG,C.cHH,C.ddQ])
v(A.a0_,[C.dhm,C.dhn,C.dho,C.dhp,C.cHr,C.cHq,C.cHo,C.cHp,C.cHw,C.cHt,C.cHz,C.cHl,C.cHm,C.cHh,C.cHg,C.cHj,C.cHf,C.cX0,C.cX1,C.cHA,C.cHF,C.cHE,C.cHI,C.cHD,C.cHC,C.cHB])
v(A.aw,[C.Ns,C.WK,C.aKA,C.aSH,C.aSI,C.aLR,C.aSG,C.aNa,C.aGO,C.aNf,C.Fs])
v(A.an,[C.of,C.qv])
v(A.ae,[C.K4,C.K3,C.a6G,C.a6H])
v(A.af,[C.agq,C.aLL,C.all,C.agr])
v(A.a00,[C.cHu,C.cHk])
u(C.K7,A.aHJ)
u(C.aLM,C.all)
w(C.all,A.dX)})()
A.dB4(b.typeUniverse,JSON.parse('{"K4":{"ae":[],"p":[]},"WK":{"aw":[],"p":[]},"K3":{"ae":[],"p":[]},"Ns":{"aw":[],"p":[]},"agq":{"af":["K4"]},"aKA":{"aw":[],"p":[]},"aLL":{"af":["K3"]},"aSH":{"aw":[],"p":[]},"aSI":{"aw":[],"p":[]},"aLR":{"aw":[],"p":[]},"aSG":{"aw":[],"p":[]},"aNa":{"aw":[],"p":[]},"aGO":{"aw":[],"p":[]},"a6G":{"ae":[],"p":[]},"Fs":{"aw":[],"p":[]},"aLM":{"af":["a6G"]},"aNf":{"aw":[],"p":[]},"a6H":{"ae":[],"p":[]},"agr":{"af":["a6H"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a4<aa>"),O:w("a4<x>"),e:w("a4<of>"),S:w("a4<fW>"),s:w("a4<o>"),p:w("a4<p>"),t:w("a4<K>"),X:w("ad<of>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o9"),_:w("Dh"),k:w("of"),N:w("o"),Y:w("bk<a2>"),W:w("dh<o>"),J:w("lg<K>"),j:w("lg<qv?>"),E:w("xw<cM>"),q:w("XA"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.ZA=new A.N(983224,"MaterialIcons",!1)
D.aQ3=new A.ac(D.ZA,48,B.bq,null,null,null)
D.cW_=new A.D("Powered off",null,B.alz,null,null,null,null,null,null,null,null,null)
D.bLf=w([D.aQ3,B.P,D.cW_],x.p)
D.aBd=new A.ew(B.al,B.i,B.Z,B.o,null,B.q,null,0,D.bLf,null)
D.atR=new A.dq(B.M,null,null,D.aBd,null)
D.cHV=new A.a9(18,18,B.SS,null)
D.au5=new A.dq(B.M,null,null,D.cHV,null)
D.auX=new A.hb(2,null,null,null,null,B.aa,null,null,null,null)
D.axV=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ays=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azY=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDE=new A.T(0,3,0,3)
D.aDQ=new A.T(10,0,10,88)
D.aEe=new A.T(12,6,12,10)
D.aEw=new A.T(14,8,14,6)
D.aFK=new A.T(20,8,20,20)
D.X3=new A.T(8,6,15,8)
D.aLQ=new A.N(983222,"MaterialIcons",!1)
D.aNw=new A.ac(B.jE,26,B.a4,null,null,null)
D.aNz=new A.ac(B.YM,18,null,null,null,null)
D.aNN=new A.ac(B.rN,14,B.aa,null,null,null)
D.aM9=new A.N(983420,"MaterialIcons",!1)
D.aOx=new A.ac(D.aM9,14,B.aa,null,null,null)
D.aKa=new A.N(62895,"MaterialIcons",!1)
D.aOB=new A.ac(D.aKa,14,B.aa,null,null,null)
D.aPW=new A.ac(B.rH,16,B.aa,null,null,null)
D.aQU=new A.ac(B.dF,20,B.aa,null,null,null)
D.aRz=new A.ac(B.iL,20,null,null,null,null)
D.aRO=new A.ac(B.hc,16,null,null,null,null)
D.bOX=w([B.aM,B.V],x.O)
D.a0a=new A.ag(B.aC,B.aI,B.F,D.bOX,null,null)
D.cBu=new A.aN("NGMY OS","14.2.1")
D.cAh=new A.aN("VirtualDroid","13.8.4")
D.cAg=new A.aN("NGMY OS","15.0.0")
D.cB2=new A.aN("VirtualDroid","14.1.2")
D.cAe=new A.aN("NGMY Tab OS","12.9.7")
D.cAc=new A.aN("NGMY OS","13.5.3")
D.cA1=new A.aN("VirtualDroid","15.2.0")
D.cAE=new A.aN("NGMY OS","14.8.1")
D.cB8=new A.aN("NGMY Tab OS","13.2.4")
D.cBE=new A.aN("VirtualDroid","12.6.9")
D.czV=new A.aN("NGMY OS","16.0.1")
D.czK=new A.aN("VirtualDroid","14.9.0")
D.cBl=new A.aN("NGMY Tab OS","14.0.3")
D.cAq=new A.aN("NGMY OS","13.1.8")
D.czU=new A.aN("VirtualDroid","13.4.5")
D.cAb=new A.aN("NGMY OS","15.3.2")
D.cB9=new A.aN("NGMY Tab OS","12.4.1")
D.cBo=new A.aN("VirtualDroid","16.1.0")
D.cAD=new A.aN("NGMY OS","14.4.6")
D.cBv=new A.aN("VirtualDroid","15.0.8")
D.bO9=w([D.cBu,D.cAh,D.cAg,D.cB2,D.cAe,D.cAc,D.cA1,D.cAE,D.cB8,D.cBE,D.czV,D.czK,D.cBl,D.cAq,D.czU,D.cAb,D.cB9,D.cBo,D.cAD,D.cBv],A.b4("a4<+(o,o)>"))
D.ww=w([B.a4,B.f5],x.O)
D.cDK=new A.eQ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cDi=new A.eQ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cDd=new A.eQ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cDm=new A.eQ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cD9=new A.eQ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDo=new A.eQ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDM=new A.eQ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cDa=new A.eQ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cDh=new A.eQ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDq=new A.eQ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cD8=new A.eQ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDE=new A.eQ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDB=new A.eQ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cDg=new A.eQ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDy=new A.eQ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDx=new A.eQ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cD7=new A.eQ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cDl=new A.eQ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDv=new A.eQ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDA=new A.eQ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6T=w([D.cDK,D.cDi,D.cDd,D.cDm,D.cD9,D.cDo,D.cDM,D.cDa,D.cDh,D.cDq,D.cD8,D.cDE,D.cDB,D.cDg,D.cDy,D.cDx,D.cD7,D.cDl,D.cDv,D.cDA],A.b4("a4<+(o,o,a2,a2,o)>"))
D.bXo=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aes=new C.K7(0,"youtube")
D.aet=new C.K7(1,"tiktok")
D.Om=new C.K7(2,"instagram")
D.aeu=new C.K7(3,"facebook")
D.ct0=new C.K7(4,"other")
D.cHv=new A.a9(3,null,null,null)
D.cIg=new A.ia(4,10,8,0.52,null)
D.cXd=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLE=new A.aY(D.cXd,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cOV=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cX3=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d39=new A.D("Open in YouTube",null,B.iq,null,null,null,null,null,null,null,null,null)
D.d6E=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7n=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7t=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.deg=new C.aNa(null)})();(function staticFields(){$.dxz=20
$.axG=null
$.boP=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiP","Gt",()=>A.aDx(0))
w($,"eiQ","Pc",()=>A.aDx(null))})()};
(a=>{a["22owgx2FOPhDMuF57TqZHGr2WPE="]=a.current})($__dart_deferred_initializers__);