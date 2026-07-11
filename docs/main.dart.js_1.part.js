((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eeY(d,e){A.a7(d,!1).cz(A.eA(new C.dhp(e),!0,null,x.H))},
ZA(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$ZA=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.Pc()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aY,B.aP),t)
w=3
return A.b(A.dM(B.L,new C.dho(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$ZA)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVm(r)
if(q==null){d.H(x.q).f.V(D.cLC)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$ZA)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxx=n
p=C.dVg(n)
n=$.Gs()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlp(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$ZA,v)},
dxA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
K6(d){return C.dVp(d)},
dVp(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K6=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K6)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.J.aE(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eK(r,x.f)
k=A.dl(k,new C.bp_(),k.$ti.j("E.E"),x.k)
j=A.Q(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.bp0(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dxC(q)
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
case 9:case 5:o=A.aK(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.J.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dxA(A.S(n,x.N,x.z))
l=C.dxC(A.a([m],x.e))
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
case 18:case 14:q=C.dVn()
w=22
return A.b(C.K5(a3,q),$async$K6)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K6,v)},
dxC(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boS(),w).ev(0),u=new A.F(d,new C.boT(),w).ev(0),t=new A.F(d,new C.boU(),w).ev(0),s=new A.F(d,new C.boV(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlq(null,q,u,t,v,s));++q}return r},
axH(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$axH=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K6(d),$async$axH)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.boW(),s).ev(0)
p=r.de(t,new C.boX(),s).ev(0)
o=r.de(t,new C.boY(),s).ev(0)
n=r.de(t,new C.boZ(),s).ev(0)
m=C.dlq(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K5(d,t),$async$axH)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$axH,v)},
K5(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$K5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K5)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boR(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.J.au(s,null)),$async$K5)
case 3:return A.f(null,v)}})
return A.h($async$K5,v)},
dVn(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.du(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlq(w,w,t,s,u,r)
return q},
dlq(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jE(),h=d==null,g=D.a6U[B.l.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6U[B.l.a0(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boQ(),A.a_(p).j("F<1,o>")).fA(0)
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
k=D.bXq[w]
j=D.bOb[w]
return new C.of("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dVo(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a1())},
dVo(d,e){var w,v=J.du(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dhp:function dhp(d){this.a=d},
dho:function dho(d,e){this.a=d
this.b=e},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d,e){this.a=d
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
cHp:function cHp(){},
cHo:function cHo(d,e){this.a=d
this.b=e},
cHm:function cHm(d){this.a=d},
cHn:function cHn(d,e){this.a=d
this.b=e},
cHq:function cHq(d){this.a=d},
cHv:function cHv(d){this.a=d},
cHu:function cHu(d){this.a=d},
cHw:function cHw(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e,f){this.a=d
this.b=e
this.c=f},
cHs:function cHs(d,e){this.a=d
this.b=e},
cHr:function cHr(d,e){this.a=d
this.b=e},
cHx:function cHx(d){this.a=d},
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
cHj:function cHj(d){this.a=d},
cHk:function cHk(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHi:function cHi(d,e){this.a=d
this.b=e},
cHf:function cHf(d){this.a=d},
cHg:function cHg(d){this.a=d},
cHe:function cHe(d,e){this.a=d
this.b=e},
cHh:function cHh(d){this.a=d},
cHd:function cHd(d){this.a=d},
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
cWZ:function cWZ(d){this.a=d},
cX_:function cX_(d){this.a=d},
aNa:function aNa(d){this.a=d},
aGO:function aGO(d,e){this.c=d
this.a=e},
dVm(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVl(v)
if(u!=null)return new C.qu(w,C.dlo(u,!1),D.aet,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVk(v)
if(t!=null)return new C.qu(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aeu,"TikTok",q)
s=C.dVj(w,v)
if(s!=null)return s
r=C.dVi(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qu(w,w,D.ct2,"Video",q)
return q},
dVj(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qu(d,"https://www.instagram.com/reel/"+w+u,D.Ok,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qu(d,"https://www.instagram.com/p/"+w+u,D.Ok,t,null)}return null},
dVi(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qu(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bf,!1)+"&show_text=false&width=734",D.aev,"Facebook",null)},
dVl(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVk(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K7:function K7(d,e){this.a=d
this.b=e},
qu:function qu(d,e,f,g,h){var _=this
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
cMa:function cMa(d){this.a=d},
cMb:function cMb(d){this.a=d},
Fr:function Fr(d,e){this.c=d
this.a=e},
all:function all(){},
dxB(d,e,f,g,h,i){return new C.a6H(i,f,h,e,g,d)},
edH(d){var w=window
w.toString
A.hm(w,"message",new C.ddO(d),!1,x._)},
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
cHy:function cHy(d){this.a=d},
cHH:function cHH(d){this.a=d},
cHE:function cHE(d){this.a=d},
cHD:function cHD(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHC:function cHC(d){this.a=d},
cHG:function cHG(d){this.a=d},
cHB:function cHB(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHz:function cHz(d){this.a=d},
ddO:function ddO(d){this.a=d},
dVe(){var w,v,u
try{v=A.AN()
w=v.grV(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlo(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boO(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dxw(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVf(d,e,f){var w,v,u=C.boO(d)
if(u!=null){if(f){w=C.dVe()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxw(C.dlo(u,e))}return C.dxw(d)},
dVg(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVh(d){var w
if($.Pc().a==null)return!1
w=$.Gs().a
return d>=w&&d<w+4},
dxz(){var w=$.axG
if(w!=null)w.ad(0)
$.axG=null
$.Gs().sv(0,0)},
dxy(){var w,v,u,t=$.Pc()
if(t.a==null)return
w=$.axG
if(w!=null)w.ad(0)
v=$.dxx
if(v<=4){t=t.a
t.toString
C.dlp(t)
return}w=$.Gs()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlp(t)},
dlp(d){var w=$.axG
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
default:w=null}$.axG=A.dI(A.dr(0,0,0,0,0,w),C.edW())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ns.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.P(B.a4.l(0.25),B.w,1),r=A.W(this.d,B.a4,w,w,14)
return A.t(w,A.G(A.a([r,B.f9,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ce,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.Z,0,w,w),B.k,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fg,w,w,w)}}
C.of.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K4.prototype={
U(){return new C.agq(A.a([],x.e))},
gdP(){return this.c}}
C.agq.prototype={
a_(){var w=this
w.a5()
$.Gs().aq(0,w.gaxp())
C.edH(w.gbnI())
w.Z_()},
bn7(){if(this.c!=null)this.q(new C.cHp())},
bnJ(){C.dxy()},
p(){$.Gs().Z(0,this.gaxp())
C.dxz()
$.Pc().sv(0,null)
this.a4()},
Z_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Z_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K6(t.a.c),$async$Z_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHo(t,s))
$.boP=J.a4(s)
case 1:return A.f(u,v)}})
return A.h($async$Z_,v)},
V_(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V_=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cHm(t))
w=3
return A.b(C.axH(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHn(t,s))
$.boP=J.a4(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V_,v)},
bpF(d){var w=this.c
w.toString
A.a7(w,!1).cz(A.eA(new C.cHq(d),!1,null,x.H))},
bqh(){var w=this.c
w.toString
return C.ZA(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.ff:B.bt,s=A.c_(!0,A.w(A.a([new A.J(D.X3,new A.iP(new C.cHv(w),v),v),A.I(w.e?B.ow:new A.lg($.Pc(),new C.cHw(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.arr(B.a4,B.GV,B.mg,D.d7n,w.e?v:new C.cHx(w)),v)}}
C.WK.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.H,B.a4.l(0.18),B.e4,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6G(n,!0,!C.dVh(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jE,B.n8,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.j,0,B.q),B.k,B.yY,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.U,!0,u,A.aS(!1,t,!0,A.w(A.a([A.I(A.t(u,A.c2(p,A.fy(A.w(A.a([new C.aKA(o,u),A.I(n,1),A.t(u,A.G(A.a([A.W(B.Br,B.a4.l(0.85),u,u,9),D.cHv,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.j,0,u,u),B.k,B.av,u,u,u,u,u,D.aDH,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,u,u,new A.q(u,u,r,s,q,D.a0b,B.p),u,u,u,B.h8,u,u,u),1),B.aM,A.j(o.b,u,1,B.au,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.au,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.au,u,u,u,A.l(u,u,B.a4.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a6)}}
C.aKA.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.I(A.j(B.h.gan(this.c.c.split("-")),w,w,B.au,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,B.WT,w,w,w)}}
C.K3.prototype={
U(){return new C.aLL()}}
C.aLL.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.ff:B.bt,t=A.aM(w,w,w,w,B.a_m,w,w,w,new C.cHj(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c_(!0,A.w(A.a([new A.J(D.X3,A.G(A.a([t,A.I(new A.JT(A.G(A.a([A.I(new A.J(B.jy,A.j(s.b+" \xb7 "+s.c,w,1,B.au,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.U,!0,w,A.aS(!1,w,!0,new A.J(B.b4,A.W(B.hc,B.a4,w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHk(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.lg($.Pc(),new C.cHl(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aSH.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.H,B.a4.l(0.35),B.f7,28),new A.aa(0,B.H,B.A.l(0.45),B.dh,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxB(new A.dp(v+"_full_"+u,x.W),!1,u,!1,w.gaN6(),v+"_full")
w=v}else w=new C.aLR(t.r,s)}else w=new C.aGO(m,s)
else w=D.dea
return A.t(s,A.c2(n,A.fy(A.w(A.a([new C.aSI(m,l,s),A.I(w,1),new C.aSG(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,s,s,new A.q(s,s,o,q,p,D.a0b,B.p),s,r*2.05,s,B.bH,s,s,r)}}
C.aSI.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dm(r)
r=A.he(r)
w=new A.dB(q,r)
v=w.gJE()===0?12:w.gJE()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h5:B.j3)===B.h5?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o6,s,s,s),B.bq,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bW,D.aOz,B.eo,D.aNP,B.eo,D.aOD],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.G(A.a([A.W(B.Bm,B.a4.l(0.9),s,s,12),B.eo,A.I(A.j(u.c,s,s,B.au,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,D.aEz,s,s,s)}}
C.aLR.prototype={
B(d){var w=null
return A.t(w,A.aH(A.w(A.a([A.W(B.AT,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF,A.f4(D.aRQ,D.cWZ,this.c,A.ec(w,w,w,w,w,w,w,w,w,B.a4,w,w,w,w,w,new A.aG(B.a4.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.Z,0,B.q),w,w,w),B.k,B.yY,w,w,w,w,w,w,w,w,1/0)}}
C.aSG.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axf(B.Bi,"YouTube",s===0,r,new C.cWZ(u))
s=u.axf(B.kl,"Device",s===1,r,new C.cX_(u))
w=r?"Power off":"Power on"
v=r?D.ZA:D.aLT
return A.t(t,A.G(A.a([q,B.am,s,B.bq,A.aM(t,t,t,t,A.W(v,r?B.c_:B.hf,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dw)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,D.aEh,t,t,t)},
axf(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bp
else w=f?B.a4:B.az
v=f&&g?B.a4.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aI(!1,B.U,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.nl,A.w(A.a([A.W(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aNa.prototype={
B(d){return D.atU}}
C.aGO.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jT,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tH("Serial",u.c),q=w.tH("Model",u.d),p=w.tH("Device ID",u.e),o=w.tH("IMEI",u.r),n=w.tH("MAC",u.f),m=w.tH("OS",u.w+" "+u.x),l=w.tH("Location",u.y+", "+u.z),k=w.tH("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tH("Timezone",u.at)
u=u.ax
return A.eq(A.a([t,B.aM,s,B.aj,r,q,p,o,n,m,l,k,j,w.tH("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b4,v,v,B.al,!1)},
tH(d,e){var w=null
return new A.J(B.d1,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cm,A.j(e,w,w,w,w,w,w,D.cOT,w,w,w)],x.p),B.E,B.i,B.j,0,B.q),w)}}
C.K7.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qu.prototype={
gaN6(){var w=this.c
return w===D.aet||w===D.aeu||w===D.Ok||w===D.aev}}
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
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cZ(t,new A.q(t,t,t,t,t,new A.ag(B.ci,B.ch,B.F,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bC),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.ey,p,t)
w=B.e.l(0.92)
q=A.aH(new A.cS(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bj.T>")),!1,A.W(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n8
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aNf(s,t),r,q,A.aL(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aL(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aL(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aB(B.ag,t,B.b7,B.x,s,t)}}
C.aNf.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ku(u,B.M,new C.cMa(this),B.c8,B.bK,!0,w,w,new C.cMb(this),w)
return new C.Fr(v,w)}}
C.Fr.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uT,B.T7],x.O),B.jE)
break
case 1:w=new A.aN(A.a([B.yY,D.ayv],x.O),B.mc)
break
case 2:w=new A.aN(A.a([D.aA0,D.axY],x.O),B.B_)
break
case 3:w=new A.aN(A.a([B.V,B.dx],x.O),B.B4)
break
case 4:w=new A.aN(A.a([B.av,B.aL],x.O),B.pn)
break
default:w=u}v=w.a
return A.t(u,A.aH(A.W(w.b,B.a4.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.q(u,u,u,u,u,new A.ag(B.aC,B.aK,B.F,v,u,u),B.p),u,u,u,u,u,u,u)}}
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
a7J(d,e){var w,v=C.boO(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlo(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVf(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFt(){var w,v=this
if(v.w)return
v.q(new C.cHy(v))
w=v.e
if(w!=null)v.a7J(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gu()
$.pO().uS(w,new C.cHH(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHA(v))
w=v.e
w.toString
v.a7J(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.ZP,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.fy(A.aH(new A.J(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1T(n,B.tD,w)],v)
if(o.f)w.push(A.fy(A.aH(new A.a9(28,28,D.av_,n),n,n,n),B.dd,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bp,B.w,1)
q=A.W(B.Lp,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eM(0,A.aI(!1,B.U,!0,n,A.aS(!1,n,!0,A.aH(A.t(n,A.G(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.Z,0,n,n),B.k,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.Wt,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFs(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.boO(o.a.d)
if(v!=null)w.push(A.aL(8,A.ke(D.aPY,D.d33,new C.cHz(o),A.iS(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fg,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aB(B.ag,n,B.b7,B.x,w,n)}}
var z=a.updateTypes(["o(of)","~()","K4(O)","of(Z<@,@>)","a1(of)","Z<o,@>(of)","aA<~>()","K3(O)","lg<K>(O,qu?,p?)","WK(O,K)","u5(O,qu?,p?)","Fr(O,an,dH?)"])
C.dhp.prototype={
$1(d){return new C.K4(this.a,null)},
$S:z+2}
C.dho.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dT,B.V],j):A.a([B.e,B.aw],j),h=A.a([new A.aa(0,B.H,B.a4.l(0.22),B.f7,32)],x.V),g=A.P(m?B.cj:B.a4.l(0.18),B.w,1),f=A.m(28),e=B.a4.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aNy,B.k,n,n,new A.q(B.a4.l(0.18),n,A.P(B.a4.l(0.45),B.w,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f8,w,A.aM(n,n,n,n,A.W(B.d2,m?B.az:B.dd,n,n,n),n,n,n,new C.dhk(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.q(n,n,n,n,n,new A.ag(B.a8,B.a9,B.F,j,n,n),B.p),n,n,n,B.Jg,n,n,n)
e=A.ed(B.cG,A.a([new C.Ns("YouTube",B.Lk,m,n),new C.Ns("TikTok",B.mc,m,n),new C.Ns("Instagram",B.B_,m,n),new C.Ns("Facebook",B.B4,m,n)],v),B.cp,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cC:B.kb,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bt
r=A.W(B.f6,B.a4.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cj:B.aN
u=A.w(A.a([e,B.aS,A.b2(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RT),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.G,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a5,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.ke(D.aNB,D.d6y,new C.dhl(d),A.iS(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.ai,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.T(12,0,12,12+l.f.d),A.cZ(A.c2(f,A.w(A.a([j,new A.J(B.WG,u,n),new A.J(D.aFN,A.G(A.a([e,B.bq,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhm(d),n,n),B.am,A.dN(D.aRB,D.d7h,new C.dhn(d,w),A.bF(B.a4,n,n,n,B.e,n,D.Wt,n,new A.bD(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.Z,0,B.q),B.aD),new A.q(n,n,g,k,h,new A.ag(B.aC,B.aK,B.F,i,n,n),B.p),B.bC),n)},
$S:88}
C.dhk.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhl.prototype={
$0(){C.dxz()
$.Pc().sv(0,null)
A.a7(this.a,!1).R(null)},
$S:0}
C.dhm.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhn.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).R(w)
return null},
$S:0}
C.bp_.prototype={
$1(d){return C.dxA(A.S(d,x.N,x.z))},
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
$S:85}
C.cHp.prototype={
$0(){},
$S:0}
C.cHo.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHm.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHn.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHq.prototype={
$1(d){return new C.K3(this.a,null)},
$S:z+7}
C.cHv.prototype={
$4(d,e,f,g){var w=null,v=A.aM(w,w,w,w,D.aQW,w,w,w,new C.cHu(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.G(A.a([v,A.I(A.fD(A.G(A.a([new A.od(D.wy,e,g,36,B.Bm,w),B.aQ,A.I(A.j(t,w,1,B.au,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fW(B.h.gT(D.wy).l(0.45+e*0.2),B.I,10)],x.S),w,w),w,w,w),1),A.aI(!1,B.U,!0,w,A.aS(!1,w,!0,new A.J(B.bH,A.W(B.hc,A.ax(B.h.gT(D.wy),B.h.gan(D.wy),e),w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbqg(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],s),B.o,w,B.i,B.j,0,w,w),D.wy,w,g,B.fN,0,e,f),1)],s),B.o,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:346}
C.cHu.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHw.prototype={
$3(d,e,f){return new A.lg($.Gs(),new C.cHt(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHt.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dj(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a4.l(0.12)
s=A.m(12)
r=A.P(B.a4.l(0.35),B.w,1)
q=A.W(B.jE,B.a4,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Gs().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.am,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dl,B.hu,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iZ(1.7777777777777777,C.dxB(new A.dp("fleet_master_"+r,x.W),!0,r,!0,j.gaN6(),"fleet_master"),k),B.aD),B.aj],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vX(0,B.x,k,B.G,k,k,k,k,!1,k,B.al,!1,A.a([new A.kH(new A.J(B.J4,A.w(u,B.E,B.i,B.j,0,B.q),k),k),new A.oq(D.aDT,A.aBJ(new A.nD(new C.cHs(i,j),J.a4(i.d),!1,!0,!0,A.ty(),k),D.cIf),k)],w))},
$S:1717}
C.cHs.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WK(v,e,J.a4(w.d),new C.cHr(w,v),this.b,null)},
$S:z+9}
C.cHr.prototype={
$0(){return this.a.bpF(this.b)},
$S:0}
C.cHx.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.cHj.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHk.prototype={
$0(){C.ZA(this.a,$.boP)
return null},
$S:0}
C.cHl.prototype={
$3(d,e,f){return A.f_(new C.cHi(this.a,e))},
$S:z+10}
C.cHi.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aS,new C.aSH(u,s.a.c,s.e,s.d,new C.cHf(s),new C.cHg(s),new C.cHh(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),B.x,v,B.G,v,B.p0,v,v,B.al),v,v,v)},
$S:1718}
C.cHf.prototype={
$0(){var w=this.a.c
w.toString
C.ZA(w,$.boP)
return null},
$S:0}
C.cHg.prototype={
$1(d){var w=this.a
return w.q(new C.cHe(w,d))},
$S:32}
C.cHe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHh.prototype={
$0(){var w=this.a
return w.q(new C.cHd(w))},
$S:0}
C.cHd.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWZ.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cX_.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMa.prototype={
$3(d,e,f){return new C.Fr(this.a.c,null)},
$S:z+11}
C.cMb.prototype={
$3(d,e,f){if(f==null)return e
return new A.aB(B.ag,null,B.b7,B.x,A.a([new C.Fr(this.a.c,null),D.au8],x.p),null)},
$C:"$3",
$R:3,
$S:210}
C.cHy.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHH.prototype={
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
A.hm(v,"load",new C.cHE(w),!1,u)
v=w.e
v.toString
A.hm(v,"error",new C.cHF(w),!1,u)
A.bN(B.ke,new C.cHG(w),x.H)
w=w.e
w.toString
return w},
$S:594}
C.cHE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHD(w))},
$S:47}
C.cHD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHC(w))},
$S:47}
C.cHC.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHG.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHB(w))},
$S:12}
C.cHB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHA.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHz.prototype={
$0(){var w,v=C.boO(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.SK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.ddO.prototype={
$1(d){var w,v,u,t,s=new A.F_([],[]).IS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
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
w(u=C.agq.prototype,"gaxp","bn7",1)
w(u,"gbnI","bnJ",1)
w(u,"gbqg","bqh",6)
w(C.agr.prototype,"gbFs","bFt",1)
v(C,"edW","dxy",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yE,[C.dhp,C.dho,C.bp_,C.bp0,C.boS,C.boT,C.boU,C.boV,C.boW,C.boX,C.boY,C.boZ,C.boR,C.boQ,C.cHq,C.cHv,C.cHw,C.cHt,C.cHl,C.cHg,C.cMa,C.cMb,C.cHH,C.cHE,C.cHF,C.ddO])
v(A.a0_,[C.dhk,C.dhl,C.dhm,C.dhn,C.cHp,C.cHo,C.cHm,C.cHn,C.cHu,C.cHr,C.cHx,C.cHj,C.cHk,C.cHf,C.cHe,C.cHh,C.cHd,C.cWZ,C.cX_,C.cHy,C.cHD,C.cHC,C.cHG,C.cHB,C.cHA,C.cHz])
v(A.aw,[C.Ns,C.WK,C.aKA,C.aSH,C.aSI,C.aLR,C.aSG,C.aNa,C.aGO,C.aNf,C.Fr])
v(A.an,[C.of,C.qu])
v(A.ae,[C.K4,C.K3,C.a6G,C.a6H])
v(A.af,[C.agq,C.aLL,C.all,C.agr])
v(A.a00,[C.cHs,C.cHi])
u(C.K7,A.aHJ)
u(C.aLM,C.all)
w(C.all,A.dX)})()
A.dB2(b.typeUniverse,JSON.parse('{"K4":{"ae":[],"p":[]},"WK":{"aw":[],"p":[]},"K3":{"ae":[],"p":[]},"Ns":{"aw":[],"p":[]},"agq":{"af":["K4"]},"aKA":{"aw":[],"p":[]},"aLL":{"af":["K3"]},"aSH":{"aw":[],"p":[]},"aSI":{"aw":[],"p":[]},"aLR":{"aw":[],"p":[]},"aSG":{"aw":[],"p":[]},"aNa":{"aw":[],"p":[]},"aGO":{"aw":[],"p":[]},"a6G":{"ae":[],"p":[]},"Fr":{"aw":[],"p":[]},"aLM":{"af":["a6G"]},"aNf":{"aw":[],"p":[]},"a6H":{"ae":[],"p":[]},"agr":{"af":["a6H"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<aa>"),O:w("a3<x>"),e:w("a3<of>"),S:w("a3<fW>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<of>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o9"),_:w("Dg"),k:w("of"),N:w("o"),Y:w("bk<a2>"),W:w("dp<o>"),J:w("lg<K>"),j:w("lg<qu?>"),E:w("xw<cM>"),q:w("XA"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.ZA=new A.N(983224,"MaterialIcons",!1)
D.aQ5=new A.ac(D.ZA,48,B.bp,null,null,null)
D.cVV=new A.D("Powered off",null,B.alA,null,null,null,null,null,null,null,null,null)
D.bLh=w([D.aQ5,B.Q,D.cVV],x.p)
D.aBg=new A.ev(B.al,B.i,B.Z,B.o,null,B.q,null,0,D.bLh,null)
D.atU=new A.dq(B.M,null,null,D.aBg,null)
D.cHU=new A.a9(18,18,B.SQ,null)
D.au8=new A.dq(B.M,null,null,D.cHU,null)
D.av_=new A.hb(2,null,null,null,null,B.aa,null,null,null,null)
D.axY=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ayv=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aA0=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDH=new A.T(0,3,0,3)
D.aDT=new A.T(10,0,10,88)
D.aEh=new A.T(12,6,12,10)
D.aEz=new A.T(14,8,14,6)
D.Wt=new A.T(18,12,18,12)
D.aFN=new A.T(20,8,20,20)
D.X3=new A.T(8,6,15,8)
D.aLT=new A.N(983222,"MaterialIcons",!1)
D.aNy=new A.ac(B.jE,26,B.a4,null,null,null)
D.aNB=new A.ac(B.YM,18,null,null,null,null)
D.aNP=new A.ac(B.rN,14,B.aa,null,null,null)
D.aMc=new A.N(983420,"MaterialIcons",!1)
D.aOz=new A.ac(D.aMc,14,B.aa,null,null,null)
D.aKd=new A.N(62895,"MaterialIcons",!1)
D.aOD=new A.ac(D.aKd,14,B.aa,null,null,null)
D.aPY=new A.ac(B.rH,16,B.aa,null,null,null)
D.aQW=new A.ac(B.dF,20,B.aa,null,null,null)
D.aRB=new A.ac(B.iK,20,null,null,null,null)
D.aRQ=new A.ac(B.hc,16,null,null,null,null)
D.bOZ=w([B.aL,B.V],x.O)
D.a0b=new A.ag(B.aC,B.aK,B.F,D.bOZ,null,null)
D.cBv=new A.aN("NGMY OS","14.2.1")
D.cAi=new A.aN("VirtualDroid","13.8.4")
D.cAh=new A.aN("NGMY OS","15.0.0")
D.cB3=new A.aN("VirtualDroid","14.1.2")
D.cAf=new A.aN("NGMY Tab OS","12.9.7")
D.cAd=new A.aN("NGMY OS","13.5.3")
D.cA2=new A.aN("VirtualDroid","15.2.0")
D.cAF=new A.aN("NGMY OS","14.8.1")
D.cB9=new A.aN("NGMY Tab OS","13.2.4")
D.cBF=new A.aN("VirtualDroid","12.6.9")
D.czW=new A.aN("NGMY OS","16.0.1")
D.czL=new A.aN("VirtualDroid","14.9.0")
D.cBm=new A.aN("NGMY Tab OS","14.0.3")
D.cAr=new A.aN("NGMY OS","13.1.8")
D.czV=new A.aN("VirtualDroid","13.4.5")
D.cAc=new A.aN("NGMY OS","15.3.2")
D.cBa=new A.aN("NGMY Tab OS","12.4.1")
D.cBp=new A.aN("VirtualDroid","16.1.0")
D.cAE=new A.aN("NGMY OS","14.4.6")
D.cBw=new A.aN("VirtualDroid","15.0.8")
D.bOb=w([D.cBv,D.cAi,D.cAh,D.cB3,D.cAf,D.cAd,D.cA2,D.cAF,D.cB9,D.cBF,D.czW,D.czL,D.cBm,D.cAr,D.czV,D.cAc,D.cBa,D.cBp,D.cAE,D.cBw],A.b4("a3<+(o,o)>"))
D.wy=w([B.a4,B.f5],x.O)
D.cDL=new A.eQ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cDj=new A.eQ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cDe=new A.eQ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cDn=new A.eQ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cDa=new A.eQ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDp=new A.eQ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDN=new A.eQ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cDb=new A.eQ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cDi=new A.eQ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDr=new A.eQ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cD9=new A.eQ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDF=new A.eQ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDC=new A.eQ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cDh=new A.eQ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDz=new A.eQ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDy=new A.eQ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cD8=new A.eQ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cDm=new A.eQ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDw=new A.eQ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDB=new A.eQ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6U=w([D.cDL,D.cDj,D.cDe,D.cDn,D.cDa,D.cDp,D.cDN,D.cDb,D.cDi,D.cDr,D.cD9,D.cDF,D.cDC,D.cDh,D.cDz,D.cDy,D.cD8,D.cDm,D.cDw,D.cDB],A.b4("a3<+(o,o,a2,a2,o)>"))
D.bXq=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aet=new C.K7(0,"youtube")
D.aeu=new C.K7(1,"tiktok")
D.Ok=new C.K7(2,"instagram")
D.aev=new C.K7(3,"facebook")
D.ct2=new C.K7(4,"other")
D.cHv=new A.a9(3,null,null,null)
D.cIf=new A.i8(4,10,8,0.52,null)
D.cX8=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLC=new A.aY(D.cX8,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.x,null)
D.cOT=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWZ=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d33=new A.D("Open in YouTube",null,B.ir,null,null,null,null,null,null,null,null,null)
D.d6y=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7h=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7n=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dea=new C.aNa(null)})();(function staticFields(){$.dxx=20
$.axG=null
$.boP=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiN","Gs",()=>A.aDx(0))
w($,"eiO","Pc",()=>A.aDx(null))})()};
(a=>{a["e0Ioeyg+vHu37spynAzA6YFX1BM="]=a.current})($__dart_deferred_initializers__);