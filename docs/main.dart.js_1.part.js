((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dUp(d,e){A.a5(d,!1).cr(A.et(new C.d1j(e),!0,null,x.H))},
UY(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$UY=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LJ()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aX(n,B.ac,B.a3),t)
w=3
return A.b(A.df(B.F,new C.d1i(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$UY)
case 3:r=g
s.F$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dCm(r)
if(q==null){d.E(x.q).f.O(D.bBh)
w=1
break}w=4
return A.b(A.bJ(B.fO,null,x.H),$async$UY)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.dfY=n
p=C.dCg(n)
n=$.DS()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d55(q)
d.E(x.q).f.O(A.bp(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UY,v)},
dg0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aR(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aR(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mW(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H2(d){return C.dCp(d)},
dCp(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H2=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H2)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aE(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cz(r)?10:11
break
case 10:k=J.eN(r,x.f)
k=A.di(k,new C.bd6(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("af<K.E>")
i=A.E(new A.af(k,new C.bd7(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dg2(q)
w=12
return A.b(C.H1(a3,p),$async$H2)
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
case 9:case 5:o=A.aE(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dg0(A.S(n,x.N,x.z))
l=C.dg2(A.a([m],x.e))
w=21
return A.b(C.H1(a3,l),$async$H2)
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
case 18:case 14:q=C.dCn()
w=22
return A.b(C.H1(a3,q),$async$H2)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H2,v)},
dg2(d){var w=A.V(d).j("D<1,m>"),v=new A.D(d,new C.bcZ(),w).er(0),u=new A.D(d,new C.bd_(),w).er(0),t=new A.D(d,new C.bd0(),w).er(0),s=new A.D(d,new C.bd1(),w).er(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d56(null,q,u,t,v,s));++q}return r},
apJ(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apJ=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H2(d),$async$apJ)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bd2(),s).er(0)
p=r.d7(t,new C.bd3(),s).er(0)
o=r.d7(t,new C.bd4(),s).er(0)
n=r.d7(t,new C.bd5(),s).er(0)
m=C.d56(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H1(d,t),$async$apJ)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apJ,v)},
H1(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H1=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H1)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bcY(),x.P)
s=A.E(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$H1)
case 3:return A.f(null,v)}})
return A.h($async$H1,v)},
dCn(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dS(20,x.k)
for(w=0;w<20;++w)q[w]=C.d56(w,w,t,s,u,r)
return q},
d56(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.TA[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TA[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.D(p,new C.bcX(),A.V(p).j("D<1,m>")).fa(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.n.j3(i.bz(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aTK[w]
j=D.aNC[w]
return new C.mW("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bh(B.n.p(e+1),2,"0"),u,k,C.dCo(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.P(Date.now(),0,!1).a1().Y())},
dCo(d,e){var w,v=J.dS(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.n.j3(d.bz(256),16),2,"0")
return B.d.fa(v)},
d1j:function d1j(d){this.a=d},
d1i:function d1i(d,e){this.a=d
this.b=e},
d1e:function d1e(d){this.a=d},
d1f:function d1f(d){this.a=d},
d1g:function d1g(d){this.a=d},
d1h:function d1h(d,e){this.a=d
this.b=e},
K4:function K4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mW:function mW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bd6:function bd6(){},
bd7:function bd7(){},
bcZ:function bcZ(){},
bd_:function bd_(){},
bd0:function bd0(){},
bd1:function bd1(){},
bd2:function bd2(){},
bd3:function bd3(){},
bd4:function bd4(){},
bd5:function bd5(){},
bcY:function bcY(){},
bcX:function bcX(){},
H0:function H0(d,e){this.c=d
this.a=e},
aas:function aas(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
csP:function csP(){},
csO:function csO(d,e){this.a=d
this.b=e},
csM:function csM(d){this.a=d},
csN:function csN(d,e){this.a=d
this.b=e},
csQ:function csQ(d){this.a=d},
csU:function csU(d){this.a=d},
csV:function csV(d,e){this.a=d
this.b=e},
csT:function csT(d,e,f){this.a=d
this.b=e
this.c=f},
csS:function csS(d,e){this.a=d
this.b=e},
csR:function csR(d,e){this.a=d
this.b=e},
csW:function csW(d){this.a=d},
Sn:function Sn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBu:function aBu(d,e){this.c=d
this.a=e},
H_:function H_(d,e){this.c=d
this.a=e},
aCp:function aCp(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
csJ:function csJ(d){this.a=d},
csK:function csK(d){this.a=d},
csL:function csL(d){this.a=d},
csI:function csI(d,e){this.a=d
this.b=e},
csF:function csF(d){this.a=d},
csG:function csG(d){this.a=d},
csE:function csE(d,e){this.a=d
this.b=e},
csH:function csH(d){this.a=d},
csD:function csD(d){this.a=d},
aJ3:function aJ3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJ4:function aJ4(d,e,f){this.c=d
this.d=e
this.a=f},
aCv:function aCv(d,e){this.c=d
this.a=e},
aJ2:function aJ2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cHk:function cHk(d){this.a=d},
cHl:function cHl(d){this.a=d},
aDG:function aDG(d){this.a=d},
axR:function axR(d,e){this.c=d
this.a=e},
dCm(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dCl(v)
if(u!=null)return new C.oX(w,C.d54(u,!1),D.a_s,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dCk(v)
if(t!=null)return new C.oX(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_t,"TikTok",q)
s=C.dCj(w,v)
if(s!=null)return s
r=C.dCi(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oX(w,w,D.blw,"Video",q)
return q},
dCj(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oX(d,"https://www.instagram.com/reel/"+w+u,D.GU,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oX(d,"https://www.instagram.com/p/"+w+u,D.GU,t,null)}return null},
dCi(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oX(d,"https://www.facebook.com/plugins/video.php?href="+A.eD(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_u,"Facebook",null)},
dCl(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dCk(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
H3:function H3(d,e){this.a=d
this.b=e},
oX:function oX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1u:function a1u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCq:function aCq(d,e){var _=this
_.d=$
_.cS$=d
_.aT$=e
_.c=_.a=null},
aDL:function aDL(d,e){this.c=d
this.a=e},
cwO:function cwO(d){this.a=d},
cwP:function cwP(d){this.a=d},
CJ:function CJ(d,e){this.c=d
this.a=e},
af4:function af4(){},
dg1(d,e,f,g,h,i){return new C.a1v(i,f,h,e,g,d)},
dT7(d){var w=window
w.toString
A.fN(w,"message",new C.cYu(d),!1,x._)},
a1v:function a1v(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aat:function aat(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
csX:function csX(d){this.a=d},
ct4:function ct4(d){this.a=d},
ct2:function ct2(d){this.a=d},
ct0:function ct0(d){this.a=d},
ct1:function ct1(d){this.a=d},
csZ:function csZ(d){this.a=d},
ct3:function ct3(d){this.a=d},
ct_:function ct_(d){this.a=d},
csY:function csY(d){this.a=d},
cYu:function cYu(d){this.a=d},
dfW(){var w,v,u
try{v=A.yo()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d54(d,e){var w=C.dfW(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eD(2,w,B.aP,!1))
v.push("widget_referrer="+A.eD(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d53(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
dfX(d){var w=A.bl(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bl(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dCf(d,e,f){var w,v,u=C.d53(d)
if(u!=null){if(f){w=C.dfW()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dfX(C.d54(u,e))}return C.dfX(d)},
dCg(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dCh(d){var w
if($.LJ().a==null)return!1
w=$.DS().a
return d>=w&&d<w+4},
dg_(){var w=$.apI
if(w!=null)w.a7(0)
$.apI=null
$.DS().sv(0,0)},
dfZ(){var w,v,u,t=$.LJ()
if(t.a==null)return
w=$.apI
if(w!=null)w.a7(0)
v=$.dfY
if(v<=4){t=t.a
t.toString
C.d55(t)
return}w=$.DS()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d55(t)},
d55(d){var w=$.apI
if(w!=null)w.a7(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.apI=A.dn(A.d5(0,0,0,0,0,w),C.dTi())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K4.prototype={
B(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.S.l(0.25),B.o,1),r=A.Z(this.d,B.S,w,w,14)
return A.u(w,A.G(A.a([r,B.eE,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bA,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.f,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ey,w,w,w)}}
C.mW.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H0.prototype={
U(){return new C.aas(A.a([],x.e))},
gdW(){return this.c}}
C.aas.prototype={
Z(){var w=this
w.a3()
$.DS().ak(0,w.garB())
C.dT7(w.gbdc())
w.UV()},
bcC(){if(this.c!=null)this.q(new C.csP())},
bdd(){C.dfZ()},
n(){$.DS().V(0,this.garB())
C.dg_()
$.LJ().sv(0,null)
this.a2()},
UV(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UV=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H2(t.a.c),$async$UV)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.csO(t,s))
$.bcW=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$UV,v)},
Re(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Re=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.csM(t))
w=3
return A.b(C.apJ(t.a.c),$async$Re)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.csN(t,s))
$.bcW=J.a3(t.d)
t.c.E(x.q).f.O(A.bp(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Re,v)},
bf2(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.et(new C.csQ(d),!1,null,x.H))},
bfB(){var w=this.c
w.toString
return C.UY(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.u,t=u?B.e6:B.bH,s=A.aJ(v,v,v,v,B.F9,v,v,v,new C.csU(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.J(new A.Bi(A.G(A.a([A.J(new A.I(B.i1,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.v,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aN(!1,B.L,!0,v,A.aV(!1,v,!0,new A.I(B.aO,A.Z(B.eR,B.S,v,v,28),v),B.c5,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfA(),v,v,v,v,v,v,v),B.f,B.F,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.h,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.h,0,v,v)
s=A.c8(!0,A.y(A.a([new A.I(D.OC,r,v),A.J(w.e?B.l9:new A.is($.LJ(),new C.csV(w,u),v,v,x.j),1)],q),B.i,B.e,B.h,0,B.l),!1,B.Y,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.akB(B.S,B.AI,B.pa,D.bYa,w.e?v:new C.csW(w)),v)}}
C.Sn.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ae(0,B.x,B.S.l(0.18),B.cs,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1u(n,!0,!C.dCh(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ib,B.lh,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.h,0,B.l),B.f,B.vs,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aN(!1,B.L,!0,u,A.aV(!1,t,!0,A.y(A.a([A.J(A.u(u,A.cx(p,A.fO(A.y(A.a([new C.aBu(o,u),A.J(n,1),A.u(u,A.G(A.a([A.Z(B.t0,B.S.l(0.85),u,u,9),D.bxf,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.h,0,u,u),B.f,B.aa,u,u,u,u,u,D.ame,u,u,u)],w),B.i,B.e,B.h,0,B.l),B.q,!0),B.as),B.f,u,u,new A.t(u,u,r,s,q,D.Ss,B.k),u,u,u,B.eN,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.S.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.h,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.f,B.F,0,u,u,u,u,u,B.X)}}
C.aBu.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.J(A.j(B.d.gau(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.p8,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.h,0,w,w),B.f,B.aa,w,w,w,w,w,B.Or,w,w,w)}}
C.H_.prototype={
U(){return new C.aCp()}}
C.aCp.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.u,u=v?B.e6:B.bH,t=A.aJ(w,w,w,w,B.F9,w,w,w,new C.csJ(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c8(!0,A.y(A.a([new A.I(D.OC,A.G(A.a([t,A.J(new A.Bi(A.G(A.a([A.J(new A.I(B.i1,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aN(!1,B.L,!0,w,A.aV(!1,w,!0,new A.I(B.aO,A.Z(B.eR,B.S,w,w,28),w),B.c5,!0,w,w,w,w,w,w,w,w,w,w,w,new C.csK(d),w,w,w,w,w,w,w),B.f,B.F,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.h,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.h,0,w,w),w),A.J(new A.is($.LJ(),new C.csL(this),w,w,x.j),1)],r),B.i,B.e,B.h,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJ3.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ae(0,B.x,B.S.l(0.35),B.ek,28),new A.ae(0,B.x,B.q.l(0.45),B.ct,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dg1(new A.dd(v+"_full_"+u,x.W),!1,u,!1,w.gaG9(),v+"_full")
w=v}else w=new C.aCv(t.r,s)}else w=new C.axR(m,s)
else w=D.c2E
return A.u(s,A.cx(n,A.fO(A.y(A.a([new C.aJ4(m,l,s),A.J(w,1),new C.aJ2(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.h,0,B.l),B.q,!0),B.as),B.f,s,s,new A.t(s,s,o,q,p,D.Ss,B.k),s,r*2.05,s,B.be,s,s,r)}}
C.aJ4.prototype={
B(d){var w,v,u,t,s=null,r=new A.P(Date.now(),0,!1),q=A.dj(r)
r=A.hf(r)
w=new A.dc(q,r)
v=w.gGv()===0?12:w.gGv()
r=B.a.bh(B.n.p(r),2,"0")
q=(q<12?B.eL:B.hw)===B.eL?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.kW,s,s,s),B.b2,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.awz,B.du,D.avP,B.du,D.awD],t),B.i,s,B.e,B.h,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.F2,B.S.l(0.9),s,s,12),B.du,A.J(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.h,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.h,0,B.l),B.f,B.aa,s,s,s,s,s,D.amY,s,s,s)}}
C.aCv.prototype={
B(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.Z(B.xa,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.eA(D.azR,D.bMi,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.S,w,w,w,w,w,new A.aF(B.S.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.f,B.vs,w,w,w,w,w,w,w,w,1/0)}}
C.aJ2.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.art(B.R1,"YouTube",s===0,r,new C.cHk(u))
s=u.art(B.kv,"Device",s===1,r,new C.cHl(u))
w=r?"Power off":"Power on"
v=r?D.R2:D.atV
return A.u(t,A.G(A.a([q,B.a_,s,B.b2,A.aJ(t,t,t,t,A.Z(v,r?B.b4:B.eB,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cH)],x.p),B.i,t,B.e,B.h,0,t,t),B.f,B.aa,t,t,t,t,t,D.amL,t,t,t)},
art(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.S:B.a7
v=f&&g?B.S.l(0.15):B.F
u=A.n(10)
t=g?h:s
return A.J(A.aN(!1,B.L,!0,u,A.aV(!1,A.n(10),!0,new A.I(B.ls,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.f,v,0,s,s,s,s,s,B.X),1)}}
C.aDG.prototype={
B(d){return D.adl}}
C.axR.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jX,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qA("Serial",u.c),q=w.qA("Model",u.d),p=w.qA("Device ID",u.e),o=w.qA("IMEI",u.r),n=w.qA("MAC",u.f),m=w.qA("OS",u.w+" "+u.x),l=w.qA("Location",u.y+", "+u.z),k=w.qA("Coordinates",B.j.a0(u.Q,4)+", "+B.j.a0(u.as,4)),j=w.qA("Timezone",u.at)
u=u.ax
return A.ey(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qA("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aO,v,v,B.a1,!1)},
qA(d,e){var w=null
return new A.I(B.c7,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c_,A.j(e,w,w,w,w,w,w,D.bEh,w,w,w)],x.p),B.t,B.e,B.h,0,B.l),w)}}
C.H3.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oX.prototype={
gaG9(){var w=this.c
return w===D.a_s||w===D.a_t||w===D.GU||w===D.a_u}}
C.a1u.prototype={
U(){return new C.aCq(null,null)}}
C.aCq.prototype={
Z(){this.a3()
var w=A.bC(null,B.rj,null,1,null,this)
w.no(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPA()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dP(t,new A.t(t,t,t,t,t,new A.ap(B.cK,B.c2,B.y,A.a([B.F,B.q.l(0.55)],x.O),t,t),B.k),B.by),q=x.Y,p=u.d
p===$&&A.c()
p=A.cp(B.hZ,p,t)
w=B.c.l(0.92)
q=A.aU(new A.cU(new A.b0(p,new A.bj(0.72,1,q),q.j("b0<bh.T>")),!1,A.Z(B.ib,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lh
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDL(s,t),r,q,A.b2(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.v,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b2(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b2(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.a2,t,B.aT,B.m,s,t)}}
C.aDL.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l2(u,new C.cwO(this),B.bt,!0,w,w,new C.cwP(this),w)
return new C.CJ(v,w)}}
C.CJ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.r3,B.Lc],x.O),B.ib)
break
case 1:w=new A.aH(A.a([B.vs,D.ahf],x.O),B.jG)
break
case 2:w=new A.aH(A.a([D.aiJ,D.agM],x.O),B.xi)
break
case 3:w=new A.aH(A.a([B.N,B.cz],x.O),B.xl)
break
case 4:w=new A.aH(A.a([B.aa,B.aj],x.O),B.mZ)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.Z(w.b,B.S.l(0.55),u,u,28),u,u,u),B.f,u,u,new A.t(u,u,u,u,u,new A.ap(B.am,B.ap,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.af4.prototype={
n(){var w=this,v=w.aT$
if(v!=null)v.V(0,w.gdF())
w.aT$=null
w.a2()},
bp(){this.bF()
this.bD()
this.dG()}}
C.a1v.prototype={
U(){return new C.aat()}}
C.aat.prototype={
bvk(d,e){var w=C.d53(d)
if(w!=null)return C.d54(w,e)
return d},
a3i(d,e){var w,v=this,u=C.d53(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bvk(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dCf(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bth(){var w,v=this
if(v.w)return
v.q(new C.csX(v))
w=v.e
if(w!=null)v.a3i(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.DT()
$.op().rO(w,new C.ct4(u),!0)}catch(v){u.r=!0
u.f=!1}},
aS(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.csY(v))
w=v.e
w.toString
v.a3i(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Re,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.D,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.fO(A.aU(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yg(n,B.pK,w)],v)
if(o.f)w.push(A.fO(A.aU(new A.an(28,28,D.aeb,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b0,B.o,1)
q=A.Z(B.F5,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eH(0,A.aN(!1,B.L,!0,n,A.aV(!1,n,!0,A.aU(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.f,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O_,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtg(),n,n,n,n,n,n,n),B.f,u,0,n,n,n,n,n,B.X)))}return new A.aG(B.a2,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mW)","~()","H0(R)","mW(X<@,@>)","a0(mW)","X<m,@>(mW)","ax<~>()","H_(R)","is<Q>(R,oX?,o?)","Sn(R,Q)","re(R,oX?,o?)","CJ(R,ai,du?)"])
C.d1j.prototype={
$1(d){return new C.H0(this.a,null)},
$S:z+2}
C.d1i.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.u,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.d2,B.N],j):A.a([B.c,B.a8],j),h=A.a([new A.ae(0,B.x,B.S.l(0.22),B.ek,32)],x.V),g=A.U(m?B.bx:B.S.l(0.18),B.o,1),f=A.n(28),e=B.S.l(m?0.35:0.14)
j=A.a([e,B.a4.l(m?0.18:0.08)],j)
e=A.u(n,D.avv,B.f,n,n,new A.t(B.S.l(0.18),n,A.U(B.S.l(0.45),B.o,1),n,n,n,B.ak),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.v,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.y(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.h,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.em,w,A.aJ(n,n,n,n,A.Z(B.cv,m?B.a7:B.ci,n,n,n),n,n,n,new C.d1e(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.h,0,n,n),B.f,n,n,new A.t(n,n,n,n,n,new A.ap(B.Z,B.a0,B.y,j,n,n),B.k),n,n,n,B.CY,n,n,n)
e=A.ec(B.bX,A.a([new C.K4("YouTube",B.F1,m,n),new C.K4("TikTok",B.jG,m,n),new C.K4("Instagram",B.xi,m,n),new C.K4("Facebook",B.xl,m,n)],v),B.bR,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bB:B.h9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.bH
r=A.Z(B.jF,B.S.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bx:B.az
u=A.y(A.a([e,B.ar,A.aC(n,B.B,!0,n,!0,B.m,n,A.aD(),w,n,n,n,n,n,2,A.bo(n,new A.b9(4,q,B.K),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.n(16),B.K3),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.O,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.H,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.R,n,n,n,n)],v),B.ag,B.e,B.h,0,B.l)
e=A.kd(D.avy,D.bXi,new C.d1f(d),A.j1(n,n,n,n,n,n,n,n,n,n,n,m?B.aM:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dP(A.cx(f,A.y(A.a([j,new A.I(D.ao1,u,n),new A.I(D.aod,A.G(A.a([e,B.b2,A.bX(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d1g(d),n,n),B.a_,A.dL(D.azA,D.bY4,new C.d1h(d,w),A.bv(B.S,n,n,n,B.c,n,D.O_,n,new A.bE(A.n(14),B.K),n,n,n))],v),B.i,n,B.e,B.h,0,n,n),n)],v),B.ag,B.e,B.P,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.am,B.ap,B.y,i,n,n),B.k),B.by),n)},
$S:77}
C.d1e.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d1f.prototype={
$0(){C.dg_()
$.LJ().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d1g.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d1h.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bd6.prototype={
$1(d){return C.dg0(A.S(d,x.N,x.z))},
$S:z+3}
C.bd7.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcZ.prototype={
$1(d){return d.c},
$S:z+0}
C.bd_.prototype={
$1(d){return d.r},
$S:z+0}
C.bd0.prototype={
$1(d){return d.f},
$S:z+0}
C.bd1.prototype={
$1(d){return d.at},
$S:z+0}
C.bd2.prototype={
$1(d){return d.c},
$S:z+0}
C.bd3.prototype={
$1(d){return d.r},
$S:z+0}
C.bd4.prototype={
$1(d){return d.f},
$S:z+0}
C.bd5.prototype={
$1(d){return d.at},
$S:z+0}
C.bcY.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bcX.prototype={
$1(d){return B.a.bh(B.n.j3(d,16),2,"0").toUpperCase()},
$S:74}
C.csP.prototype={
$0(){},
$S:0}
C.csO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.csM.prototype={
$0(){return this.a.e=!0},
$S:0}
C.csN.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.csQ.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+7}
C.csU.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.csV.prototype={
$3(d,e,f){return new A.is($.DS(),new C.csT(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.csT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AL(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.S.l(0.12)
s=A.n(12)
r=A.U(B.S.l(0.35),B.o,1)
q=A.Z(B.ib,B.S,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DS().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.h,0,k,k),B.f,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cC,B.ez,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cx(s,new A.iO(1.7777777777777777,C.dg1(new A.dd("fleet_master_"+r,x.W),!0,r,!0,j.gaG9(),"fleet_master"),k),B.as),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.tY(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jI(new A.I(B.CN,A.y(u,B.t,B.e,B.h,0,B.l),k),k),new A.n5(D.amo,A.atc(new A.ml(new C.csS(i,j),J.a3(i.d),!1,!0,!0,A.qR(),k),D.bxY),k)],w))},
$S:1588}
C.csS.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sn(v,e,J.a3(w.d),new C.csR(w,v),this.b,null)},
$S:z+9}
C.csR.prototype={
$0(){return this.a.bf2(this.b)},
$S:0}
C.csW.prototype={
$0(){this.a.Re()
return null},
$S:0}
C.csJ.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.csK.prototype={
$0(){C.UY(this.a,$.bcW)
return null},
$S:0}
C.csL.prototype={
$3(d,e,f){return A.fC(new C.csI(this.a,e))},
$S:z+10}
C.csI.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cr(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.ar,new C.aJ3(u,s.a.c,s.e,s.d,new C.csF(s),new C.csG(s),new C.csH(s),t,v)],x.p),B.i,B.e,B.h,0,B.l),v,B.r,v,B.NP,v,v,B.a1),v,v,v)},
$S:1589}
C.csF.prototype={
$0(){var w=this.a.c
w.toString
C.UY(w,$.bcW)
return null},
$S:0}
C.csG.prototype={
$1(d){var w=this.a
return w.q(new C.csE(w,d))},
$S:37}
C.csE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.csH.prototype={
$0(){var w=this.a
return w.q(new C.csD(w))},
$S:0}
C.csD.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cHk.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cHl.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cwO.prototype={
$3(d,e,f){return new C.CJ(this.a.c,null)},
$S:z+11}
C.cwP.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.a2,null,B.aT,B.m,A.a([new C.CJ(this.a.c,null),D.adz],x.p),null)},
$C:"$3",
$R:3,
$S:378}
C.csX.prototype={
$0(){return this.a.w=!0},
$S:0}
C.ct4.prototype={
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
w.a3i(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fN(v,"load",new C.ct2(w),!1,u)
v=w.e
v.toString
A.fN(v,"error",new C.ct3(w),!1,u)
w=w.e
w.toString
return w},
$S:361}
C.ct2.prototype={
$1(d){var w=this.a
if(w.c!=null){w.q(new C.ct0(w))
A.bJ(B.C,new C.ct1(w),x.H)}},
$S:43}
C.ct0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ct1.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.csZ(w))},
$S:12}
C.csZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ct3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.ct_(w))},
$S:43}
C.ct_.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.csY.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cYu.prototype={
$1(d){var w,v,u,t,s=new A.Cj([],[]).FM(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1590};(function aliases(){var w=C.af4.prototype
w.aPA=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aas.prototype,"garB","bcC",1)
w(u,"gbdc","bdd",1)
w(u,"gbfA","bfB",6)
w(C.aat.prototype,"gbtg","bth",1)
v(C,"dTi","dfZ",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wr,[C.d1j,C.d1i,C.bd6,C.bd7,C.bcZ,C.bd_,C.bd0,C.bd1,C.bd2,C.bd3,C.bd4,C.bd5,C.bcY,C.bcX,C.csQ,C.csV,C.csT,C.csL,C.csG,C.cwO,C.cwP,C.ct4,C.ct2,C.ct3,C.cYu])
v(A.Ww,[C.d1e,C.d1f,C.d1g,C.d1h,C.csP,C.csO,C.csM,C.csN,C.csU,C.csR,C.csW,C.csJ,C.csK,C.csF,C.csE,C.csH,C.csD,C.cHk,C.cHl,C.csX,C.ct0,C.ct1,C.csZ,C.ct_,C.csY])
v(A.au,[C.K4,C.Sn,C.aBu,C.aJ3,C.aJ4,C.aCv,C.aJ2,C.aDG,C.axR,C.aDL,C.CJ])
v(A.ai,[C.mW,C.oX])
v(A.ab,[C.H0,C.H_,C.a1u,C.a1v])
v(A.ad,[C.aas,C.aCp,C.af4,C.aat])
v(A.Wx,[C.csS,C.csI])
u(C.H3,A.ayK)
u(C.aCq,C.af4)
w(C.af4,A.e8)})()
A.djh(b.typeUniverse,JSON.parse('{"H0":{"ab":[],"o":[]},"Sn":{"au":[],"o":[]},"H_":{"ab":[],"o":[]},"K4":{"au":[],"o":[]},"aas":{"ad":["H0"]},"aBu":{"au":[],"o":[]},"aCp":{"ad":["H_"]},"aJ3":{"au":[],"o":[]},"aJ4":{"au":[],"o":[]},"aCv":{"au":[],"o":[]},"aJ2":{"au":[],"o":[]},"aDG":{"au":[],"o":[]},"axR":{"au":[],"o":[]},"a1u":{"ab":[],"o":[]},"CJ":{"au":[],"o":[]},"aCq":{"ad":["a1u"]},"aDL":{"au":[],"o":[]},"a1v":{"ab":[],"o":[]},"aat":{"ad":["a1v"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.be
return{V:w("a9<ae>"),O:w("a9<z>"),e:w("a9<mW>"),s:w("a9<m>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("aa<mW>"),a:w("aa<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mS"),_:w("AI"),k:w("mW"),N:w("m"),Y:w("bj<a7>"),W:w("dd<m>"),J:w("is<Q>"),j:w("is<oX?>"),E:w("vo<cv>"),q:w("T4"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.R2=new A.L(983224,"MaterialIcons",!1)
D.ay8=new A.a8(D.R2,48,B.b0,null,null,null)
D.bDV=new A.M(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLf=new A.x("Powered off",null,D.bDV,null,null,null,null,null,null,null,null,null)
D.aLI=w([D.ay8,B.D,D.bLf],x.p)
D.ajP=new A.fg(B.a1,B.e,B.P,B.i,null,B.l,null,0,D.aLI,null)
D.adl=new A.dk(B.I,null,null,D.ajP,null)
D.bxE=new A.an(18,18,B.KW,null)
D.adz=new A.dk(B.I,null,null,D.bxE,null)
D.aeb=new A.h9(2,null,null,null,null,B.T,null,null,null,null)
D.agM=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahf=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiJ=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.ame=new A.W(0,3,0,3)
D.amo=new A.W(10,0,10,88)
D.amL=new A.W(12,6,12,10)
D.amY=new A.W(14,8,14,6)
D.O_=new A.W(18,12,18,12)
D.ao1=new A.W(20,18,20,8)
D.aod=new A.W(20,8,20,20)
D.OC=new A.W(8,6,15,8)
D.atV=new A.L(983222,"MaterialIcons",!1)
D.avv=new A.a8(B.ib,26,B.S,null,null,null)
D.avy=new A.a8(B.Qe,18,null,null,null,null)
D.avP=new A.a8(B.p8,14,B.T,null,null,null)
D.aub=new A.L(983420,"MaterialIcons",!1)
D.awz=new A.a8(D.aub,14,B.T,null,null,null)
D.asn=new A.L(62895,"MaterialIcons",!1)
D.awD=new A.a8(D.asn,14,B.T,null,null,null)
D.azA=new A.a8(B.iO,20,null,null,null,null)
D.azR=new A.a8(B.eR,16,null,null,null,null)
D.aO7=w([B.aj,B.N],x.O)
D.Ss=new A.ap(B.am,B.ap,B.y,D.aO7,null,null)
D.brw=new A.aH("NGMY OS","14.2.1")
D.bqn=new A.aH("VirtualDroid","13.8.4")
D.bqm=new A.aH("NGMY OS","15.0.0")
D.br5=new A.aH("VirtualDroid","14.1.2")
D.bqk=new A.aH("NGMY Tab OS","12.9.7")
D.bqi=new A.aH("NGMY OS","13.5.3")
D.bq7=new A.aH("VirtualDroid","15.2.0")
D.bqJ=new A.aH("NGMY OS","14.8.1")
D.brb=new A.aH("NGMY Tab OS","13.2.4")
D.brG=new A.aH("VirtualDroid","12.6.9")
D.bq3=new A.aH("NGMY OS","16.0.1")
D.bpV=new A.aH("VirtualDroid","14.9.0")
D.bro=new A.aH("NGMY Tab OS","14.0.3")
D.bqw=new A.aH("NGMY OS","13.1.8")
D.bq2=new A.aH("VirtualDroid","13.4.5")
D.bqh=new A.aH("NGMY OS","15.3.2")
D.brc=new A.aH("NGMY Tab OS","12.4.1")
D.brq=new A.aH("VirtualDroid","16.1.0")
D.bqI=new A.aH("NGMY OS","14.4.6")
D.brx=new A.aH("VirtualDroid","15.0.8")
D.aNC=w([D.brw,D.bqn,D.bqm,D.br5,D.bqk,D.bqi,D.bq7,D.bqJ,D.brb,D.brG,D.bq3,D.bpV,D.bro,D.bqw,D.bq2,D.bqh,D.brc,D.brq,D.bqI,D.brx],A.be("a9<+(m,m)>"))
D.btI=new A.eg(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.btg=new A.eg(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.btb=new A.eg(["New York","United States",40.7128,-74.006,"America/New_York"])
D.btk=new A.eg(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bt7=new A.eg(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.btm=new A.eg(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.btK=new A.eg(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bt8=new A.eg(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.btf=new A.eg(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bto=new A.eg(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bt6=new A.eg(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.btC=new A.eg(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.btz=new A.eg(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bte=new A.eg(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.btw=new A.eg(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.btv=new A.eg(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bt5=new A.eg(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.btj=new A.eg(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.btt=new A.eg(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bty=new A.eg(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TA=w([D.btI,D.btg,D.btb,D.btk,D.bt7,D.btm,D.btK,D.bt8,D.btf,D.bto,D.bt6,D.btC,D.btz,D.bte,D.btw,D.btv,D.bt5,D.btj,D.btt,D.bty],A.be("a9<+(m,m,a7,a7,m)>"))
D.aTK=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_s=new C.H3(0,"youtube")
D.a_t=new C.H3(1,"tiktok")
D.GU=new C.H3(2,"instagram")
D.a_u=new C.H3(3,"facebook")
D.blw=new C.H3(4,"other")
D.bxf=new A.an(3,null,null,null)
D.bxY=new A.i8(4,10,8,0.52,null)
D.bMu=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bBh=new A.aQ(D.bMu,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.m,null)
D.bEh=new A.M(!0,B.c,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMi=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bXi=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bY4=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bYa=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c2E=new C.aDG(null)})();(function staticFields(){$.dfY=20
$.apI=null
$.bcW=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dXy","DS",()=>A.R2(0))
w($,"dXz","LJ",()=>A.R2(null))})()};
(a=>{a["90ul3z671fs+z+rquiCDdI/8XhM="]=a.current})($__dart_deferred_initializers__);