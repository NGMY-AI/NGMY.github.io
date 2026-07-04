((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dZc(d,e){A.a5(d,!1).cr(A.eo(new C.d5v(e),!0,null,x.H))},
Vu(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Vu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Ma()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aY(n,B.af,B.a6),t)
w=3
return A.b(A.da(B.B,new C.d5u(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vu)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dGT(r)
if(q==null){d.F(x.q).f.O(D.bEN)
w=1
break}w=4
return A.b(A.bK(B.h_,null,x.H),$async$Vu)
case 4:if(d.e==null){w=1
break}n=B.o.am(e,1,999)
$.dki=n
p=C.dGN(n)
n=$.E9()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d9k(q)
d.F(x.q).f.O(A.bp(null,null,null,null,null,B.n,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
dkl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aU(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aU(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.n7(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hm(d){return C.dGW(d)},
dGW(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$Hm)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.x.aC(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eJ(r,x.f)
k=A.df(k,new C.bf0(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.C(new A.af(k,new C.bf1(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dkn(q)
w=12
return A.b(C.Hl(a3,p),$async$Hm)
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
case 9:case 5:o=A.aG(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.x.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dkl(A.S(n,x.N,x.z))
l=C.dkn(A.a([m],x.e))
w=21
return A.b(C.Hl(a3,l),$async$Hm)
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
case 18:case 14:q=C.dGU()
w=22
return A.b(C.Hl(a3,q),$async$Hm)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hm,v)},
dkn(d){var w=A.W(d).j("A<1,n>"),v=new A.A(d,new C.beT(),w).ek(0),u=new A.A(d,new C.beU(),w).ek(0),t=new A.A(d,new C.beV(),w).ek(0),s=new A.A(d,new C.beW(),w).ek(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d9l(null,q,u,t,v,s));++q}return r},
aqO(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aqO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hm(d),$async$aqO)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.cY(t,new C.beX(),s).ek(0)
p=r.cY(t,new C.beY(),s).ek(0)
o=r.cY(t,new C.beZ(),s).ek(0)
n=r.cY(t,new C.bf_(),s).ek(0)
m=C.d9l(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hl(d,t),$async$aqO)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqO,v)},
Hl(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Hl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.au(),$async$Hl)
case 2:u=g
t=B.a.i(d)
s=J.b2(e,new C.beS(),x.P)
s=A.C(s,s.$ti.j("a1.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.x.al(s,null)),$async$Hl)
case 3:return A.h(null,v)}})
return A.i($async$Hl,v)},
dGU(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dQ(20,x.k)
for(w=0;w<20;++w)q[w]=C.d9l(w,w,t,s,u,r)
return q},
d9l(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jc(),h=d==null,g=D.UM[B.o.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.UM[B.o.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.A(p,new C.beR(),A.W(p).j("A<1,n>")).eR(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.eR(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.o.j4(i.bx(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.o.ag(e,20)
k=D.aW3[w]
j=D.aPP[w]
return new C.n7("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.o.q(e+1),2,"0"),u,k,C.dGV(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a_().Y())},
dGV(d,e){var w,v=J.dQ(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.o.j4(d.bx(256),16),2,"0")
return B.d.eR(v)},
d5v:function d5v(d){this.a=d},
d5u:function d5u(d,e){this.a=d
this.b=e},
d5q:function d5q(d){this.a=d},
d5r:function d5r(d){this.a=d},
d5s:function d5s(d){this.a=d},
d5t:function d5t(d,e){this.a=d
this.b=e},
Kt:function Kt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
n7:function n7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bf0:function bf0(){},
bf1:function bf1(){},
beT:function beT(){},
beU:function beU(){},
beV:function beV(){},
beW:function beW(){},
beX:function beX(){},
beY:function beY(){},
beZ:function beZ(){},
bf_:function bf_(){},
beS:function beS(){},
beR:function beR(){},
Hk:function Hk(d,e){this.c=d
this.a=e},
abf:function abf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cwB:function cwB(){},
cwA:function cwA(d,e){this.a=d
this.b=e},
cwy:function cwy(d){this.a=d},
cwz:function cwz(d,e){this.a=d
this.b=e},
cwC:function cwC(d){this.a=d},
cwG:function cwG(d){this.a=d},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwF:function cwF(d,e,f){this.a=d
this.b=e
this.c=f},
cwE:function cwE(d,e){this.a=d
this.b=e},
cwD:function cwD(d,e){this.a=d
this.b=e},
cwI:function cwI(d){this.a=d},
ST:function ST(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCE:function aCE(d,e){this.c=d
this.a=e},
Hj:function Hj(d,e){this.c=d
this.a=e},
aDC:function aDC(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cwv:function cwv(d){this.a=d},
cww:function cww(d){this.a=d},
cwx:function cwx(d){this.a=d},
cwu:function cwu(d,e){this.a=d
this.b=e},
cwr:function cwr(d){this.a=d},
cws:function cws(d){this.a=d},
cwq:function cwq(d,e){this.a=d
this.b=e},
cwt:function cwt(d){this.a=d},
cwp:function cwp(d){this.a=d},
aKh:function aKh(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aKi:function aKi(d,e,f){this.c=d
this.d=e
this.a=f},
aDI:function aDI(d,e){this.c=d
this.a=e},
aKg:function aKg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cL6:function cL6(d){this.a=d},
cL7:function cL7(d){this.a=d},
aET:function aET(d){this.a=d},
ayX:function ayX(d,e){this.c=d
this.a=e},
dGT(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dGS(v)
if(u!=null)return new C.pb(w,C.d9j(u,!1),D.a0J,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dGR(v)
if(t!=null)return new C.pb(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a0K,"TikTok",q)
s=C.dGQ(w,v)
if(s!=null)return s
r=C.dGP(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.pb(w,w,D.boS,"Video",q)
return q},
dGQ(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.pb(d,"https://www.instagram.com/reel/"+w+u,D.HB,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.pb(d,"https://www.instagram.com/p/"+w+u,D.HB,t,null)}return null},
dGP(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.pb(d,"https://www.facebook.com/plugins/video.php?href="+A.eH(2,d,B.aN,!1)+"&show_text=false&width=734",D.a0L,"Facebook",null)},
dGS(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dGR(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d0(d)
return w==null?null:w.b[1]},
Hn:function Hn(d,e){this.a=d
this.b=e},
pb:function pb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2a:function a2a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDD:function aDD(d,e){var _=this
_.d=$
_.cS$=d
_.aQ$=e
_.c=_.a=null},
aEY:function aEY(d,e){this.c=d
this.a=e},
cAA:function cAA(d){this.a=d},
cAB:function cAB(d){this.a=d},
D1:function D1(d,e){this.c=d
this.a=e},
afU:function afU(){},
dkm(d,e,f,g,h,i){return new C.a2b(i,f,h,e,g,d)},
dXS(d){var w=window
w.toString
A.fQ(w,"message",new C.d1A(d),!1,x._)},
a2b:function a2b(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
abg:function abg(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cwJ:function cwJ(d){this.a=d},
cwR:function cwR(d){this.a=d},
cwP:function cwP(d){this.a=d},
cwN:function cwN(d){this.a=d},
cwO:function cwO(d){this.a=d},
cwL:function cwL(d){this.a=d},
cwQ:function cwQ(d){this.a=d},
cwM:function cwM(d){this.a=d},
cwK:function cwK(d){this.a=d},
d1A:function d1A(d){this.a=d},
dkg(){var w,v,u
try{v=A.yH()
w=v.gq1(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d9j(d,e){var w=C.dkg(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eH(2,w,B.aN,!1))
v.push("widget_referrer="+A.eH(2,w,B.aN,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d9i(d){var w=A.aq(y.c,!0,!1,!1,!1).d0(d)
return w==null?null:w.b[1]},
dkh(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dGM(d,e,f){var w,v,u=C.d9i(d)
if(u!=null){if(f){w=C.dkg()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dkh(C.d9j(u,e))}return C.dkh(d)},
dGN(d){if(d<=4)return 0
return B.o.aZ(d-1,4)*4},
dGO(d){var w
if($.Ma().a==null)return!1
w=$.E9().a
return d>=w&&d<w+4},
dkk(){var w=$.aqN
if(w!=null)w.a8(0)
$.aqN=null
$.E9().sv(0,0)},
dkj(){var w,v,u,t=$.Ma()
if(t.a==null)return
w=$.aqN
if(w!=null)w.a8(0)
v=$.dki
if(v<=4){t=t.a
t.toString
C.d9k(t)
return}w=$.E9()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d9k(t)},
d9k(d){var w=$.aqN
if(w!=null)w.a8(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aqN=A.dq(A.d7(0,0,0,0,0,w),C.dY2())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kt.prototype={
B(d){var w=null,v=this.e,u=v?B.am:B.c,t=A.m(20),s=A.T(B.T.l(0.25),B.m,1),r=A.Y(this.d,B.T,w,w,14)
return A.r(w,A.G(A.a([r,B.eI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bs,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.q(u,w,s,t,w,w,B.j),w,w,w,B.eC,w,w,w)}}
C.n7.prototype={
a7(){var w=this
return A.t(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Hk.prototype={
S(){return new C.abf(A.a([],x.e))},
gdR(){return this.c}}
C.abf.prototype={
Z(){var w=this
w.a3()
$.E9().aj(0,w.gasg())
C.dXS(w.gbeA())
w.Vi()},
be_(){if(this.c!=null)this.n(new C.cwB())},
beB(){C.dkj()},
p(){$.E9().W(0,this.gasg())
C.dkk()
$.Ma().sv(0,null)
this.a2()},
Vi(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hm(t.a.c),$async$Vi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwA(t,s))
$.beQ=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$Vi,v)},
Rt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cwy(t))
w=3
return A.b(C.aqO(t.a.c),$async$Rt)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwz(t,s))
$.beQ=J.a3(t.d)
t.c.F(x.q).f.O(A.bp(null,null,null,null,null,B.n,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rt,v)},
bgs(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.eo(new C.cwC(d),!1,null,x.H))},
bh0(){var w=this.c
w.toString
return C.Vu(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.r,t=u?B.eb:B.bg,s=A.aI(v,v,v,v,B.FM,v,v,v,new C.cwG(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.BB(A.G(A.a([A.H(new A.I(B.ic,A.d(r,v,1,B.ai,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aH(!1,B.K,!0,v,A.aS(!1,v,!0,new A.I(B.aO,A.Y(B.eX,B.T,v,v,28),v),B.c1,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbh_(),v,v,v,v,v,v,v),B.h,B.B,0,v,v,v,v,v,B.Y)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.c2(!0,A.x(A.a([new A.I(D.PL,r,v),A.H(w.e?B.lq:new A.iz($.Ma(),new C.cwH(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0)
return A.c6(v,t,s,v,!1,!1,A.als(B.T,B.Bm,B.lP,D.c10,w.e?v:new C.cwI(w)),v)}}
C.ST.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.m,1),q=A.a([new A.aa(0,B.w,B.T.l(0.18),B.cx,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a2a(n,!0,!C.dGO(w),"Fold "+(B.o.aZ(w,4)+1)+"/"+B.o.aZ(v.e+4-1,4),u)
n=w}else n=A.r(u,A.x(A.a([A.Y(B.io,B.ly,u,u,22),B.ap,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ax,B.f,0,B.l),B.h,B.vW,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aH(!1,B.K,!0,u,A.aS(!1,t,!0,A.x(A.a([A.H(A.r(u,A.ck(p,A.fS(A.x(A.a([new C.aCE(o,u),A.H(n,1),A.r(u,A.G(A.a([A.Y(B.tm,B.T.l(0.85),u,u,9),D.bAG,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ax,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.anX,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,u,u,new A.q(u,u,r,s,q,D.TC,B.j),u,u,u,B.eV,u,u,u),1),B.ap,A.d(o.b,u,1,B.ai,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.y,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ai,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ai,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.B,0,u,u,u,u,u,B.Y)}}
C.aCE.prototype={
B(d){var w=null
return A.r(w,A.G(A.a([A.H(A.d(B.d.gav(this.c.c.split("-")),w,w,B.ai,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.pt,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.PC,w,w,w)}}
C.Hj.prototype={
S(){return new C.aDC()}}
C.aDC.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.r,u=v?B.eb:B.bg,t=A.aI(w,w,w,w,B.FM,w,w,w,new C.cwv(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c6(w,u,A.c2(!0,A.x(A.a([new A.I(D.PL,A.G(A.a([t,A.H(new A.BB(A.G(A.a([A.H(new A.I(B.ic,A.d(s.b+" \xb7 "+s.c,w,1,B.ai,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aH(!1,B.K,!0,w,A.aS(!1,w,!0,new A.I(B.aO,A.Y(B.eX,B.T,w,w,28),w),B.c1,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cww(d),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Y)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.iz($.Ma(),new C.cwx(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0),w,!1,!1,w,w)}}
C.aKh.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.w,B.T.l(0.35),B.e5,28),new A.aa(0,B.w,B.q.l(0.45),B.cp,18)],x.V),o=A.T(B.c.l(0.12),B.m,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dkm(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaH_(),v+"_full")
w=v}else w=new C.aDI(t.r,s)}else w=new C.ayX(m,s)
else w=D.c6x
return A.r(s,A.ck(n,A.fS(A.x(A.a([new C.aKi(m,l,s),A.H(w,1),new C.aKg(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,s,s,new A.q(s,s,o,q,p,D.TC,B.j),s,r*2.05,s,B.bd,s,s,r)}}
C.aKi.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.dm(r)
r=A.hj(r)
w=new A.dg(q,r)
v=w.gGJ()===0?12:w.gGJ()
r=B.a.bh(B.o.q(r),2,"0")
q=(q<12?B.eT:B.hJ)===B.eT?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lb,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bk,D.ayx,B.dy,D.axM,B.dy,D.ayB],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ap,A.G(A.a([A.Y(B.FC,B.T.l(0.9),s,s,12),B.dy,A.H(A.d(u.c,s,s,B.ai,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.r(s,A.x(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.aoH,s,s,s)}}
C.aDI.prototype={
B(d){var w=null
return A.r(w,A.aJ(A.x(A.a([A.Y(B.xL,B.c.l(0.35),w,w,40),B.G,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.ep(D.aBW,D.bPU,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aB(B.T.l(0.5),1,B.m,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vW,w,w,w,w,w,w,w,w,1/0)}}
C.aKg.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as8(B.Fu,"YouTube",s===0,r,new C.cL6(u))
s=u.as8(B.jM,"Device",s===1,r,new C.cL7(u))
w=r?"Power off":"Power on"
v=r?D.Sa:D.avP
return A.r(t,A.G(A.a([q,B.a0,s,B.b3,A.aI(t,t,t,t,A.Y(v,r?B.b7:B.ep,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cB)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.aot,t,t,t)},
as8(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aZ
else w=f?B.T:B.a8
v=f&&g?B.T.l(0.15):B.B
u=A.m(10)
t=g?h:s
return A.H(A.aH(!1,B.K,!0,u,A.aS(!1,A.m(10),!0,new A.I(B.lH,A.x(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.Y),1)}}
C.aET.prototype={
B(d){return D.aeH}}
C.ayX.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k5,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qE("Serial",u.c),q=w.qE("Model",u.d),p=w.qE("Device ID",u.e),o=w.qE("IMEI",u.r),n=w.qE("MAC",u.f),m=w.qE("OS",u.w+" "+u.x),l=w.qE("Location",u.y+", "+u.z),k=w.qE("Coordinates",B.k.a1(u.Q,4)+", "+B.k.a1(u.as,4)),j=w.qE("Timezone",u.at)
u=u.ax
return A.ej(A.a([t,B.ap,s,B.V,r,q,p,o,n,m,l,k,j,w.qE("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aO,v,v,B.a2,!1)},
qE(d,e){var w=null
return new A.I(B.c2,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bX,A.d(e,w,w,w,w,w,w,D.bHO,w,w,w)],x.p),B.v,B.e,B.f,0,B.l),w)}}
C.Hn.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.pb.prototype={
gaH_(){var w=this.c
return w===D.a0J||w===D.a0K||w===D.HB||w===D.a0L}}
C.a2a.prototype={
S(){return new C.aDD(null,null)}}
C.aDD.prototype={
Z(){this.a3()
var w=A.bD(null,B.rF,null,1,null,this)
w.lO(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQt()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dB(t,new A.q(t,t,t,t,t,new A.an(B.cC,B.c0,B.z,A.a([B.B,B.q.l(0.55)],x.O),t,t),B.j),B.bt),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.hj,p,t)
w=B.c.l(0.92)
q=A.aJ(new A.cS(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bh.T>")),!1,A.Y(B.io,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ly
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEY(s,t),r,q,A.aW(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.q(p,t,t,w,t,t,B.j),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.aW(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.aW(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.a3,t,B.aT,B.n,s,t)}}
C.aEY.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lb(u,new C.cAA(this),B.bp,!0,w,w,new C.cAB(this),w)
return new C.D1(v,w)}}
C.D1.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aL(A.a([B.ro,B.M1],x.O),B.io)
break
case 1:w=new A.aL(A.a([B.vW,D.aiO],x.O),B.jO)
break
case 2:w=new A.aL(A.a([D.akm,D.aii],x.O),B.xT)
break
case 3:w=new A.aL(A.a([B.N,B.cD],x.O),B.xX)
break
case 4:w=new A.aL(A.a([B.aa,B.am],x.O),B.nh)
break
default:w=u}v=w.a
return A.r(u,A.aJ(A.Y(w.b,B.T.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.q(u,u,u,u,u,new A.an(B.an,B.as,B.z,v,u,u),B.j),u,u,u,u,u,u,u)}}
C.afU.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.W(0,w.gdm())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dn()}}
C.a2b.prototype={
S(){return new C.abg()}}
C.abg.prototype={
bx_(d,e){var w=C.d9i(d)
if(w!=null)return C.d9j(w,e)
return d},
a3K(d,e){var w,v=this,u=C.d9i(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bx_(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dGM(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buV(){var w,v=this
if(v.w)return
v.n(new C.cwJ(v))
w=v.e
if(w!=null)v.a3K(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.Ea()
$.oC().rS(w,new C.cwR(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cwK(v))
w=v.e
w.toString
v.a3K(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Sm,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.D,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fS(A.aJ(new A.I(new A.V(12,12,12,12),A.x(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YN(n,B.q5,w)],v)
if(o.f)w.push(A.fS(A.aJ(new A.ai(28,28,D.afw,n),n,n,n),B.ch,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.aZ,B.m,1)
q=A.Y(B.FG,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eF(0,A.aH(!1,B.K,!0,n,A.aS(!1,n,!0,A.aJ(A.r(n,A.G(A.a([q,B.a0,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.q(t,n,r,s,n,n,B.j),n,n,n,D.P8,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuU(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.Y)))}return new A.aF(B.a3,n,B.aT,B.n,w,n)}}
var z=a.updateTypes(["n(n7)","~()","Hk(R)","n7(X<@,@>)","a0(n7)","X<n,@>(n7)","ax<~>()","Hj(R)","iz<Q>(R,pb?,o?)","ST(R,Q)","rt(R,pb?,o?)","D1(R,aj,dx?)"])
C.d5v.prototype={
$1(d){return new C.Hk(this.a,null)},
$S:z+2}
C.d5u.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.r,l=A.az(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d1,B.N],j):A.a([B.c,B.ab],j),h=A.a([new A.aa(0,B.w,B.T.l(0.22),B.e5,32)],x.V),g=A.T(m?B.bw:B.T.l(0.18),B.m,1),f=A.m(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a4.l(m?0.18:0.08)],j)
e=A.r(n,D.axt,B.h,n,n,new A.q(B.T.l(0.18),n,A.T(B.T.l(0.45),B.m,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.x(A.a([w,B.ap,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a5,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.f,0,B.l),1)
j=A.r(n,A.G(A.a([e,B.e6,w,A.aI(n,n,n,n,A.Y(B.co,m?B.a8:B.ch,n,n,n),n,n,n,new C.d5q(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.q(n,n,n,n,n,new A.an(B.a_,B.a1,B.z,j,n,n),B.j),n,n,n,B.Dv,n,n,n)
e=A.e2(B.bV,A.a([new C.Kt("YouTube",B.FB,m,n),new C.Kt("TikTok",B.jO,m,n),new C.Kt("Instagram",B.xT,m,n),new C.Kt("Facebook",B.xX,m,n)],v),B.bP,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bE:B.fV,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.am:B.bg
r=A.Y(B.il,B.T.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bw:B.at
u=A.x(A.a([e,B.au,A.aD(n,B.F,!0,n,!0,B.n,n,A.aE(),w,n,n,n,n,n,2,A.bl(n,new A.b6(4,q,B.I),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aB(o,1,B.m,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.m(16),B.KO),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.t,!0,n,!0,n,!1,n,B.Q,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.J,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.S,n,n,n,n)],v),B.a9,B.e,B.f,0,B.l)
e=A.j8(D.axw,D.c08,new C.d5r(d),A.ii(n,n,n,n,n,n,n,n,n,n,n,m?B.aQ:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dB(A.ck(f,A.x(A.a([j,new A.I(B.Pl,u,n),new A.I(D.aq_,A.G(A.a([e,B.b3,A.bY(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d5s(d),n,n),B.a0,A.dC(D.aBF,D.c0W,new C.d5t(d,w),A.bu(B.T,n,n,n,B.c,n,D.P8,n,new A.bB(A.m(14),B.I),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.a9,B.e,B.P,0,B.l),B.ar),new A.q(n,n,g,k,h,new A.an(B.an,B.as,B.z,i,n,n),B.j),B.bt),n)},
$S:75}
C.d5q.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5r.prototype={
$0(){C.dkk()
$.Ma().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d5s.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5t.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bf0.prototype={
$1(d){return C.dkl(A.S(d,x.N,x.z))},
$S:z+3}
C.bf1.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.beT.prototype={
$1(d){return d.c},
$S:z+0}
C.beU.prototype={
$1(d){return d.r},
$S:z+0}
C.beV.prototype={
$1(d){return d.f},
$S:z+0}
C.beW.prototype={
$1(d){return d.at},
$S:z+0}
C.beX.prototype={
$1(d){return d.c},
$S:z+0}
C.beY.prototype={
$1(d){return d.r},
$S:z+0}
C.beZ.prototype={
$1(d){return d.f},
$S:z+0}
C.bf_.prototype={
$1(d){return d.at},
$S:z+0}
C.beS.prototype={
$1(d){return d.a7()},
$S:z+5}
C.beR.prototype={
$1(d){return B.a.bh(B.o.j4(d,16),2,"0").toUpperCase()},
$S:77}
C.cwB.prototype={
$0(){},
$S:0}
C.cwA.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cwy.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cwz.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cwC.prototype={
$1(d){return new C.Hj(this.a,null)},
$S:z+7}
C.cwG.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cwH.prototype={
$3(d,e,f){return new A.iz($.E9(),new C.cwF(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cwF.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.B3(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.T.l(0.12)
s=A.m(12)
r=A.T(B.T.l(0.35),B.m,1)
q=A.Y(B.io,B.T,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.E9().a
m=B.k.am(n+4,1,o)
t=A.a([A.r(k,A.G(A.a([q,B.a0,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.q(t,k,r,s,k,k,B.j),k,k,B.ct,B.eD,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.ck(s,new A.iV(1.7777777777777777,C.dkm(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaH_(),"fleet_master"),k),B.ar),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.ua(0,B.n,k,B.t,k,k,k,k,!1,k,B.a2,!1,A.a([new A.jS(new A.I(B.Dm,A.x(u,B.v,B.e,B.f,0,B.l),k),k),new A.nh(D.ao5,A.aug(new A.mx(new C.cwE(i,j),J.a3(i.d),!1,!0,!0,A.r3(),k),D.bBq),k)],w))},
$S:1630}
C.cwE.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.ST(v,e,J.a3(w.d),new C.cwD(w,v),this.b,null)},
$S:z+9}
C.cwD.prototype={
$0(){return this.a.bgs(this.b)},
$S:0}
C.cwI.prototype={
$0(){this.a.Rt()
return null},
$S:0}
C.cwv.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cww.prototype={
$0(){C.Vu(this.a,$.beQ)
return null},
$S:0}
C.cwx.prototype={
$3(d,e,f){return A.fz(new C.cwu(this.a,e))},
$S:z+10}
C.cwu.prototype={
$2(d,e){var w,v=null,u=B.k.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.cp(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.au,new C.aKh(u,s.a.c,s.e,s.d,new C.cwr(s),new C.cws(s),new C.cwt(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.t,v,B.oU,v,v,B.a2),v,v,v)},
$S:1631}
C.cwr.prototype={
$0(){var w=this.a.c
w.toString
C.Vu(w,$.beQ)
return null},
$S:0}
C.cws.prototype={
$1(d){var w=this.a
return w.n(new C.cwq(w,d))},
$S:35}
C.cwq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwt.prototype={
$0(){var w=this.a
return w.n(new C.cwp(w))},
$S:0}
C.cwp.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cL6.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cL7.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cAA.prototype={
$3(d,e,f){return new C.D1(this.a.c,null)},
$S:z+11}
C.cAB.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a3,null,B.aT,B.n,A.a([new C.D1(this.a.c,null),D.aeV],x.p),null)},
$C:"$3",
$R:3,
$S:515}
C.cwJ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cwR.prototype={
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
w.a3K(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fQ(v,"load",new C.cwP(w),!1,u)
v=w.e
v.toString
A.fQ(v,"error",new C.cwQ(w),!1,u)
w=w.e
w.toString
return w},
$S:575}
C.cwP.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cwN(w))
A.bK(B.E,new C.cwO(w),x.H)}},
$S:43}
C.cwN.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cwO.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cwL(w))},
$S:12}
C.cwL.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cwQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cwM(w))},
$S:43}
C.cwM.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cwK.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1A.prototype={
$1(d){var w,v,u,t,s=new A.CB([],[]).G0(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.x.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1632};(function aliases(){var w=C.afU.prototype
w.aQt=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.abf.prototype,"gasg","be_",1)
w(u,"gbeA","beB",1)
w(u,"gbh_","bh0",6)
w(C.abg.prototype,"gbuU","buV",1)
v(C,"dY2","dkj",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wK,[C.d5v,C.d5u,C.bf0,C.bf1,C.beT,C.beU,C.beV,C.beW,C.beX,C.beY,C.beZ,C.bf_,C.beS,C.beR,C.cwC,C.cwH,C.cwF,C.cwx,C.cws,C.cAA,C.cAB,C.cwR,C.cwP,C.cwQ,C.d1A])
v(A.X2,[C.d5q,C.d5r,C.d5s,C.d5t,C.cwB,C.cwA,C.cwy,C.cwz,C.cwG,C.cwD,C.cwI,C.cwv,C.cww,C.cwr,C.cwq,C.cwt,C.cwp,C.cL6,C.cL7,C.cwJ,C.cwN,C.cwO,C.cwL,C.cwM,C.cwK])
v(A.as,[C.Kt,C.ST,C.aCE,C.aKh,C.aKi,C.aDI,C.aKg,C.aET,C.ayX,C.aEY,C.D1])
v(A.aj,[C.n7,C.pb])
v(A.ab,[C.Hk,C.Hj,C.a2a,C.a2b])
v(A.ad,[C.abf,C.aDC,C.afU,C.abg])
v(A.X3,[C.cwE,C.cwu])
u(C.Hn,A.azR)
u(C.aDD,C.afU)
w(C.afU,A.e1)})()
A.dnB(b.typeUniverse,JSON.parse('{"Hk":{"ab":[],"o":[]},"ST":{"as":[],"o":[]},"Hj":{"ab":[],"o":[]},"Kt":{"as":[],"o":[]},"abf":{"ad":["Hk"]},"aCE":{"as":[],"o":[]},"aDC":{"ad":["Hj"]},"aKh":{"as":[],"o":[]},"aKi":{"as":[],"o":[]},"aDI":{"as":[],"o":[]},"aKg":{"as":[],"o":[]},"aET":{"as":[],"o":[]},"ayX":{"as":[],"o":[]},"a2a":{"ab":[],"o":[]},"D1":{"as":[],"o":[]},"aDD":{"ad":["a2a"]},"aEY":{"as":[],"o":[]},"a2b":{"ab":[],"o":[]},"abg":{"ad":["a2b"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bc
return{V:w("a9<aa>"),O:w("a9<z>"),e:w("a9<n7>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("ac<n7>"),a:w("ac<@>"),P:w("X<n,@>"),f:w("X<@,@>"),w:w("n2"),_:w("B0"),k:w("n7"),N:w("n"),Y:w("bi<a7>"),W:w("dh<n>"),J:w("iz<Q>"),j:w("iz<pb?>"),E:w("vF<cy>"),q:w("TA"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Sa=new A.L(983224,"MaterialIcons",!1)
D.aA8=new A.a6(D.Sa,48,B.aZ,null,null,null)
D.bHr=new A.M(!0,B.bE,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOP=new A.y("Powered off",null,D.bHr,null,null,null,null,null,null,null,null,null)
D.aNU=w([D.aA8,B.D,D.bOP],x.p)
D.aly=new A.eL(B.a2,B.e,B.P,B.i,null,B.l,null,0,D.aNU,null)
D.aeH=new A.dd(B.L,null,null,D.aly,null)
D.bB5=new A.ai(18,18,B.LK,null)
D.aeV=new A.dd(B.L,null,null,D.bB5,null)
D.afw=new A.h5(2,null,null,null,null,B.U,null,null,null,null)
D.aii=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aiO=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.akm=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.anX=new A.V(0,3,0,3)
D.ao5=new A.V(10,0,10,88)
D.aot=new A.V(12,6,12,10)
D.aoH=new A.V(14,8,14,6)
D.P8=new A.V(18,12,18,12)
D.aq_=new A.V(20,8,20,20)
D.PL=new A.V(8,6,15,8)
D.avP=new A.L(983222,"MaterialIcons",!1)
D.axt=new A.a6(B.io,26,B.T,null,null,null)
D.axw=new A.a6(B.Rn,18,null,null,null,null)
D.axM=new A.a6(B.pt,14,B.U,null,null,null)
D.aw5=new A.L(983420,"MaterialIcons",!1)
D.ayx=new A.a6(D.aw5,14,B.U,null,null,null)
D.aue=new A.L(62895,"MaterialIcons",!1)
D.ayB=new A.a6(D.aue,14,B.U,null,null,null)
D.aBF=new A.a6(B.im,20,null,null,null,null)
D.aBW=new A.a6(B.eX,16,null,null,null,null)
D.aQk=w([B.am,B.N],x.O)
D.TC=new A.an(B.an,B.as,B.z,D.aQk,null,null)
D.buV=new A.aL("NGMY OS","14.2.1")
D.btM=new A.aL("VirtualDroid","13.8.4")
D.btL=new A.aL("NGMY OS","15.0.0")
D.buu=new A.aL("VirtualDroid","14.1.2")
D.btJ=new A.aL("NGMY Tab OS","12.9.7")
D.btH=new A.aL("NGMY OS","13.5.3")
D.btw=new A.aL("VirtualDroid","15.2.0")
D.bu7=new A.aL("NGMY OS","14.8.1")
D.buA=new A.aL("NGMY Tab OS","13.2.4")
D.bv4=new A.aL("VirtualDroid","12.6.9")
D.bts=new A.aL("NGMY OS","16.0.1")
D.btj=new A.aL("VirtualDroid","14.9.0")
D.buN=new A.aL("NGMY Tab OS","14.0.3")
D.btV=new A.aL("NGMY OS","13.1.8")
D.btr=new A.aL("VirtualDroid","13.4.5")
D.btG=new A.aL("NGMY OS","15.3.2")
D.buB=new A.aL("NGMY Tab OS","12.4.1")
D.buP=new A.aL("VirtualDroid","16.1.0")
D.bu6=new A.aL("NGMY OS","14.4.6")
D.buW=new A.aL("VirtualDroid","15.0.8")
D.aPP=w([D.buV,D.btM,D.btL,D.buu,D.btJ,D.btH,D.btw,D.bu7,D.buA,D.bv4,D.bts,D.btj,D.buN,D.btV,D.btr,D.btG,D.buB,D.buP,D.bu6,D.buW],A.bc("a9<+(n,n)>"))
D.bx6=new A.ek(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bwF=new A.ek(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bwA=new A.ek(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bwJ=new A.ek(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bww=new A.ek(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bwL=new A.ek(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bx8=new A.ek(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bwx=new A.ek(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bwE=new A.ek(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bwN=new A.ek(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bwv=new A.ek(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bx0=new A.ek(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bwY=new A.ek(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bwD=new A.ek(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bwV=new A.ek(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bwU=new A.ek(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bwu=new A.ek(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bwI=new A.ek(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bwS=new A.ek(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bwX=new A.ek(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.UM=w([D.bx6,D.bwF,D.bwA,D.bwJ,D.bww,D.bwL,D.bx8,D.bwx,D.bwE,D.bwN,D.bwv,D.bx0,D.bwY,D.bwD,D.bwV,D.bwU,D.bwu,D.bwI,D.bwS,D.bwX],A.bc("a9<+(n,n,a7,a7,n)>"))
D.aW3=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a0J=new C.Hn(0,"youtube")
D.a0K=new C.Hn(1,"tiktok")
D.HB=new C.Hn(2,"instagram")
D.a0L=new C.Hn(3,"facebook")
D.boS=new C.Hn(4,"other")
D.bAG=new A.ai(3,null,null,null)
D.bBq=new A.i5(4,10,8,0.52,null)
D.bQ5=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bEN=new A.aR(D.bQ5,null,null,null,null,null,null,null,null,null,null,null,null,B.E,!1,null,null,null,B.n,null)
D.bHO=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bPU=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.c08=new A.y("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c0W=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c10=new A.y("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c6x=new C.aET(null)})();(function staticFields(){$.dki=20
$.aqN=null
$.beQ=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e1l","E9",()=>A.Rx(0))
w($,"e1m","Ma",()=>A.Rx(null))})()};
(a=>{a["auZ6Ka1hhylKtHAXDTIVzZJIKFE="]=a.current})($__dart_deferred_initializers__);