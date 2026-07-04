((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dZv(d,e){A.a5(d,!1).cr(A.eo(new C.d5K(e),!0,null,x.H))},
Vv(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Vv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Mb()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aY(n,B.af,B.a6),t)
w=3
return A.b(A.d9(B.B,new C.d5J(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vv)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dHa(r)
if(q==null){d.F(x.q).f.O(D.bEY)
w=1
break}w=4
return A.b(A.bK(B.h_,null,x.H),$async$Vv)
case 4:if(d.e==null){w=1
break}n=B.o.am(e,1,999)
$.dkz=n
p=C.dH4(n)
n=$.Ea()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d9z(q)
d.F(x.q).f.O(A.bp(null,null,null,null,null,B.n,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vv,v)},
dkC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.n8(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hn(d){return C.dHd(d)},
dHd(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hn=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$Hn)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aH(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.x.aC(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eJ(r,x.f)
k=A.df(k,new C.bf6(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.C(new A.af(k,new C.bf7(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dkE(q)
w=12
return A.b(C.Hm(a3,p),$async$Hn)
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
case 9:case 5:o=A.aH(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.x.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dkC(A.S(n,x.N,x.z))
l=C.dkE(A.a([m],x.e))
w=21
return A.b(C.Hm(a3,l),$async$Hn)
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
case 18:case 14:q=C.dHb()
w=22
return A.b(C.Hm(a3,q),$async$Hn)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hn,v)},
dkE(d){var w=A.W(d).j("A<1,n>"),v=new A.A(d,new C.beZ(),w).ek(0),u=new A.A(d,new C.bf_(),w).ek(0),t=new A.A(d,new C.bf0(),w).ek(0),s=new A.A(d,new C.bf1(),w).ek(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d9A(null,q,u,t,v,s));++q}return r},
aqS(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aqS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hn(d),$async$aqS)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.cZ(t,new C.bf2(),s).ek(0)
p=r.cZ(t,new C.bf3(),s).ek(0)
o=r.cZ(t,new C.bf4(),s).ek(0)
n=r.cZ(t,new C.bf5(),s).ek(0)
m=C.d9A(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hm(d,t),$async$aqS)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqS,v)},
Hm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Hm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.au(),$async$Hm)
case 2:u=g
t=B.a.i(d)
s=J.b2(e,new C.beY(),x.P)
s=A.C(s,s.$ti.j("a1.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.x.al(s,null)),$async$Hm)
case 3:return A.h(null,v)}})
return A.i($async$Hm,v)},
dHb(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dQ(20,x.k)
for(w=0;w<20;++w)q[w]=C.d9A(w,w,t,s,u,r)
return q},
d9A(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jc(),h=d==null,g=D.UM[B.o.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.UM[B.o.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.A(p,new C.beX(),A.W(p).j("A<1,n>")).eR(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
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
k=D.aW6[w]
j=D.aPS[w]
return new C.n8("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.o.q(e+1),2,"0"),u,k,C.dHc(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a_().Y())},
dHc(d,e){var w,v=J.dQ(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.o.j4(d.bx(256),16),2,"0")
return B.d.eR(v)},
d5K:function d5K(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5F:function d5F(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5H:function d5H(d){this.a=d},
d5I:function d5I(d,e){this.a=d
this.b=e},
Ku:function Ku(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
n8:function n8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bf6:function bf6(){},
bf7:function bf7(){},
beZ:function beZ(){},
bf_:function bf_(){},
bf0:function bf0(){},
bf1:function bf1(){},
bf2:function bf2(){},
bf3:function bf3(){},
bf4:function bf4(){},
bf5:function bf5(){},
beY:function beY(){},
beX:function beX(){},
Hl:function Hl(d,e){this.c=d
this.a=e},
abg:function abg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cwP:function cwP(){},
cwO:function cwO(d,e){this.a=d
this.b=e},
cwM:function cwM(d){this.a=d},
cwN:function cwN(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d){this.a=d},
cwU:function cwU(d){this.a=d},
cwV:function cwV(d,e){this.a=d
this.b=e},
cwT:function cwT(d,e,f){this.a=d
this.b=e
this.c=f},
cwS:function cwS(d,e){this.a=d
this.b=e},
cwR:function cwR(d,e){this.a=d
this.b=e},
cwW:function cwW(d){this.a=d},
SU:function SU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCI:function aCI(d,e){this.c=d
this.a=e},
Hk:function Hk(d,e){this.c=d
this.a=e},
aDG:function aDG(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cwJ:function cwJ(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwL:function cwL(d){this.a=d},
cwI:function cwI(d,e){this.a=d
this.b=e},
cwF:function cwF(d){this.a=d},
cwG:function cwG(d){this.a=d},
cwE:function cwE(d,e){this.a=d
this.b=e},
cwH:function cwH(d){this.a=d},
cwD:function cwD(d){this.a=d},
aKl:function aKl(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aKm:function aKm(d,e,f){this.c=d
this.d=e
this.a=f},
aDM:function aDM(d,e){this.c=d
this.a=e},
aKk:function aKk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cLk:function cLk(d){this.a=d},
cLl:function cLl(d){this.a=d},
aEX:function aEX(d){this.a=d},
az0:function az0(d,e){this.c=d
this.a=e},
dHa(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dH9(v)
if(u!=null)return new C.pc(w,C.d9y(u,!1),D.a0J,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dH8(v)
if(t!=null)return new C.pc(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a0K,"TikTok",q)
s=C.dH7(w,v)
if(s!=null)return s
r=C.dH6(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.pc(w,w,D.bp2,"Video",q)
return q},
dH7(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.pc(d,"https://www.instagram.com/reel/"+w+u,D.HB,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.pc(d,"https://www.instagram.com/p/"+w+u,D.HB,t,null)}return null},
dH6(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.pc(d,"https://www.facebook.com/plugins/video.php?href="+A.eH(2,d,B.aN,!1)+"&show_text=false&width=734",D.a0L,"Facebook",null)},
dH9(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dH8(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d0(d)
return w==null?null:w.b[1]},
Ho:function Ho(d,e){this.a=d
this.b=e},
pc:function pc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2b:function a2b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDH:function aDH(d,e){var _=this
_.d=$
_.cS$=d
_.aQ$=e
_.c=_.a=null},
aF1:function aF1(d,e){this.c=d
this.a=e},
cAO:function cAO(d){this.a=d},
cAP:function cAP(d){this.a=d},
D2:function D2(d,e){this.c=d
this.a=e},
afV:function afV(){},
dkD(d,e,f,g,h,i){return new C.a2c(i,f,h,e,g,d)},
dYa(d){var w=window
w.toString
A.fR(w,"message",new C.d1P(d),!1,x._)},
a2c:function a2c(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
abh:function abh(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cwX:function cwX(d){this.a=d},
cx4:function cx4(d){this.a=d},
cx2:function cx2(d){this.a=d},
cx0:function cx0(d){this.a=d},
cx1:function cx1(d){this.a=d},
cwZ:function cwZ(d){this.a=d},
cx3:function cx3(d){this.a=d},
cx_:function cx_(d){this.a=d},
cwY:function cwY(d){this.a=d},
d1P:function d1P(d){this.a=d},
dkx(){var w,v,u
try{v=A.yI()
w=v.gq1(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d9y(d,e){var w=C.dkx(),v=A.a([],x.s)
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
d9x(d){var w=A.aq(y.c,!0,!1,!1,!1).d0(d)
return w==null?null:w.b[1]},
dky(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dH3(d,e,f){var w,v,u=C.d9x(d)
if(u!=null){if(f){w=C.dkx()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dky(C.d9y(u,e))}return C.dky(d)},
dH4(d){if(d<=4)return 0
return B.o.aZ(d-1,4)*4},
dH5(d){var w
if($.Mb().a==null)return!1
w=$.Ea().a
return d>=w&&d<w+4},
dkB(){var w=$.aqR
if(w!=null)w.a8(0)
$.aqR=null
$.Ea().sv(0,0)},
dkA(){var w,v,u,t=$.Mb()
if(t.a==null)return
w=$.aqR
if(w!=null)w.a8(0)
v=$.dkz
if(v<=4){t=t.a
t.toString
C.d9z(t)
return}w=$.Ea()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d9z(t)},
d9z(d){var w=$.aqR
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
default:w=null}$.aqR=A.dr(A.d7(0,0,0,0,0,w),C.dYl())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ku.prototype={
B(d){var w=null,v=this.e,u=v?B.am:B.c,t=A.m(20),s=A.T(B.T.l(0.25),B.m,1),r=A.Y(this.d,B.T,w,w,14)
return A.r(w,A.G(A.a([r,B.eI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bt,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.q(u,w,s,t,w,w,B.j),w,w,w,B.eC,w,w,w)}}
C.n8.prototype={
a7(){var w=this
return A.t(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Hl.prototype={
S(){return new C.abg(A.a([],x.e))},
gdR(){return this.c}}
C.abg.prototype={
Z(){var w=this
w.a3()
$.Ea().aj(0,w.gash())
C.dYa(w.gbeD())
w.Vi()},
be2(){if(this.c!=null)this.n(new C.cwP())},
beE(){C.dkA()},
p(){$.Ea().W(0,this.gash())
C.dkB()
$.Mb().sv(0,null)
this.a2()},
Vi(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hn(t.a.c),$async$Vi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwO(t,s))
$.beW=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$Vi,v)},
Rt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cwM(t))
w=3
return A.b(C.aqS(t.a.c),$async$Rt)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwN(t,s))
$.beW=J.a3(t.d)
t.c.F(x.q).f.O(A.bp(null,null,null,null,null,B.n,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rt,v)},
bgv(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.eo(new C.cwQ(d),!1,null,x.H))},
bh3(){var w=this.c
w.toString
return C.Vv(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.r,t=u?B.eb:B.bf,s=A.aI(v,v,v,v,B.FN,v,v,v,new C.cwU(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.BC(A.G(A.a([A.I(new A.H(B.ie,A.d(r,v,1,B.ai,v,v,v,A.l(v,v,u?B.c:B.M,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aG(!1,B.K,!0,v,A.aQ(!1,v,!0,new A.H(B.aP,A.Y(B.eY,B.T,v,v,28),v),B.c0,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbh2(),v,v,v,v,v,v,v),B.h,B.B,0,v,v,v,v,v,B.Y)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.c0(!0,A.x(A.a([new A.H(D.PK,r,v),A.I(w.e?B.lq:new A.iz($.Mb(),new C.cwV(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0)
return A.c6(v,t,s,v,!1,!1,A.alu(B.T,B.Bo,B.lP,D.c1b,w.e?v:new C.cwW(w)),v)}}
C.SU.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.m,1),q=A.a([new A.aa(0,B.w,B.T.l(0.18),B.cx,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a2b(n,!0,!C.dH5(w),"Fold "+(B.o.aZ(w,4)+1)+"/"+B.o.aZ(v.e+4-1,4),u)
n=w}else n=A.r(u,A.x(A.a([A.Y(B.ir,B.ly,u,u,22),B.ao,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ax,B.f,0,B.l),B.h,B.vW,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aG(!1,B.K,!0,u,A.aQ(!1,t,!0,A.x(A.a([A.I(A.r(u,A.ci(p,A.fT(A.x(A.a([new C.aCI(o,u),A.I(n,1),A.r(u,A.G(A.a([A.Y(B.tl,B.T.l(0.85),u,u,9),D.bAR,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ax,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.ao_,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,u,u,new A.q(u,u,r,s,q,D.TB,B.j),u,u,u,B.eV,u,u,u),1),B.ao,A.d(o.b,u,1,B.ai,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.y,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ai,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ai,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.B,0,u,u,u,u,u,B.Y)}}
C.aCI.prototype={
B(d){var w=null
return A.r(w,A.G(A.a([A.I(A.d(B.d.gav(this.c.c.split("-")),w,w,B.ai,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.pu,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.PB,w,w,w)}}
C.Hk.prototype={
S(){return new C.aDG()}}
C.aDG.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.r,u=v?B.eb:B.bf,t=A.aI(w,w,w,w,B.FN,w,w,w,new C.cwJ(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c6(w,u,A.c0(!0,A.x(A.a([new A.H(D.PK,A.G(A.a([t,A.I(new A.BC(A.G(A.a([A.I(new A.H(B.ie,A.d(s.b+" \xb7 "+s.c,w,1,B.ai,w,w,w,A.l(w,w,v?B.c:B.M,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aG(!1,B.K,!0,w,A.aQ(!1,w,!0,new A.H(B.aP,A.Y(B.eY,B.T,w,w,28),w),B.c0,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cwK(d),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Y)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.iz($.Mb(),new C.cwL(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0),w,!1,!1,w,w)}}
C.aKl.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.w,B.T.l(0.35),B.e5,28),new A.aa(0,B.w,B.q.l(0.45),B.cp,18)],x.V),o=A.T(B.c.l(0.12),B.m,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dkD(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaH2(),v+"_full")
w=v}else w=new C.aDM(t.r,s)}else w=new C.az0(m,s)
else w=D.c6I
return A.r(s,A.ci(n,A.fT(A.x(A.a([new C.aKm(m,l,s),A.I(w,1),new C.aKk(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,s,s,new A.q(s,s,o,q,p,D.TB,B.j),s,r*2.05,s,B.bd,s,s,r)}}
C.aKm.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.dn(r)
r=A.hk(r)
w=new A.dg(q,r)
v=w.gGJ()===0?12:w.gGJ()
r=B.a.bh(B.o.q(r),2,"0")
q=(q<12?B.eT:B.hK)===B.eT?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lb,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bk,D.ayA,B.dz,D.axP,B.dz,D.ayE],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ao,A.G(A.a([A.Y(B.FD,B.T.l(0.9),s,s,12),B.dz,A.I(A.d(u.c,s,s,B.ai,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.r(s,A.x(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.aoK,s,s,s)}}
C.aDM.prototype={
B(d){var w=null
return A.r(w,A.aJ(A.x(A.a([A.Y(B.xM,B.c.l(0.35),w,w,40),B.G,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.ep(D.aBZ,D.bQ3,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aB(B.T.l(0.5),1,B.m,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vW,w,w,w,w,w,w,w,w,1/0)}}
C.aKk.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as9(B.Fv,"YouTube",s===0,r,new C.cLk(u))
s=u.as9(B.jN,"Device",s===1,r,new C.cLl(u))
w=r?"Power off":"Power on"
v=r?D.S9:D.avS
return A.r(t,A.G(A.a([q,B.a1,s,B.b3,A.aI(t,t,t,t,A.Y(v,r?B.b7:B.ep,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cB)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.aow,t,t,t)},
as9(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aW
else w=f?B.T:B.a8
v=f&&g?B.T.l(0.15):B.B
u=A.m(10)
t=g?h:s
return A.I(A.aG(!1,B.K,!0,u,A.aQ(!1,A.m(10),!0,new A.H(B.lH,A.x(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.Y),1)}}
C.aEX.prototype={
B(d){return D.aeI}}
C.az0.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k7,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qE("Serial",u.c),q=w.qE("Model",u.d),p=w.qE("Device ID",u.e),o=w.qE("IMEI",u.r),n=w.qE("MAC",u.f),m=w.qE("OS",u.w+" "+u.x),l=w.qE("Location",u.y+", "+u.z),k=w.qE("Coordinates",B.k.a1(u.Q,4)+", "+B.k.a1(u.as,4)),j=w.qE("Timezone",u.at)
u=u.ax
return A.ej(A.a([t,B.ao,s,B.V,r,q,p,o,n,m,l,k,j,w.qE("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aP,v,v,B.a2,!1)},
qE(d,e){var w=null
return new A.H(B.c1,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bX,A.d(e,w,w,w,w,w,w,D.bHZ,w,w,w)],x.p),B.v,B.e,B.f,0,B.l),w)}}
C.Ho.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.pc.prototype={
gaH2(){var w=this.c
return w===D.a0J||w===D.a0K||w===D.HB||w===D.a0L}}
C.a2b.prototype={
S(){return new C.aDH(null,null)}}
C.aDH.prototype={
Z(){this.a3()
var w=A.bD(null,B.rF,null,1,null,this)
w.lO(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQw()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dB(t,new A.q(t,t,t,t,t,new A.an(B.cG,B.c2,B.z,A.a([B.B,B.q.l(0.55)],x.O),t,t),B.j),B.bu),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.hk,p,t)
w=B.c.l(0.92)
q=A.aJ(new A.cS(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bh.T>")),!1,A.Y(B.ir,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ly
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aF1(s,t),r,q,A.aW(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.q(p,t,t,w,t,t,B.j),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.aW(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.aW(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.a3,t,B.aT,B.n,s,t)}}
C.aF1.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lb(u,new C.cAO(this),B.bq,!0,w,w,new C.cAP(this),w)
return new C.D2(v,w)}}
C.D2.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aL(A.a([B.ro,B.M1],x.O),B.ir)
break
case 1:w=new A.aL(A.a([B.vW,D.aiQ],x.O),B.jP)
break
case 2:w=new A.aL(A.a([D.akp,D.aij],x.O),B.xU)
break
case 3:w=new A.aL(A.a([B.M,B.cC],x.O),B.xY)
break
case 4:w=new A.aL(A.a([B.aa,B.am],x.O),B.nh)
break
default:w=u}v=w.a
return A.r(u,A.aJ(A.Y(w.b,B.T.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.q(u,u,u,u,u,new A.an(B.an,B.as,B.z,v,u,u),B.j),u,u,u,u,u,u,u)}}
C.afV.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.W(0,w.gdm())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dn()}}
C.a2c.prototype={
S(){return new C.abh()}}
C.abh.prototype={
bx4(d,e){var w=C.d9x(d)
if(w!=null)return C.d9y(w,e)
return d},
a3L(d,e){var w,v=this,u=C.d9x(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bx4(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dH3(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bv_(){var w,v=this
if(v.w)return
v.n(new C.cwX(v))
w=v.e
if(w!=null)v.a3L(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.Eb()
$.oD().rS(w,new C.cx4(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cwY(v))
w=v.e
w.toString
v.a3L(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Sl,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fT(A.aJ(new A.H(new A.V(12,12,12,12),A.x(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YO(n,B.q5,w)],v)
if(o.f)w.push(A.fT(A.aJ(new A.ai(28,28,D.afx,n),n,n,n),B.ch,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.aW,B.m,1)
q=A.Y(B.FH,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eA(0,A.aG(!1,B.K,!0,n,A.aQ(!1,n,!0,A.aJ(A.r(n,A.G(A.a([q,B.a1,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.q(t,n,r,s,n,n,B.j),n,n,n,D.P7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuZ(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.Y)))}return new A.aF(B.a3,n,B.aT,B.n,w,n)}}
var z=a.updateTypes(["n(n8)","~()","Hl(R)","n8(X<@,@>)","a0(n8)","X<n,@>(n8)","ax<~>()","Hk(R)","iz<Q>(R,pc?,o?)","SU(R,Q)","ru(R,pc?,o?)","D2(R,aj,dx?)"])
C.d5K.prototype={
$1(d){return new C.Hl(this.a,null)},
$S:z+2}
C.d5J.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.r,l=A.az(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d1,B.M],j):A.a([B.c,B.ab],j),h=A.a([new A.aa(0,B.w,B.T.l(0.22),B.e5,32)],x.V),g=A.T(m?B.bw:B.T.l(0.18),B.m,1),f=A.m(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a5.l(m?0.18:0.08)],j)
e=A.r(n,D.axw,B.h,n,n,new A.q(B.T.l(0.18),n,A.T(B.T.l(0.45),B.m,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.M,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.x(A.a([w,B.ao,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a4,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.f,0,B.l),1)
j=A.r(n,A.G(A.a([e,B.e6,w,A.aI(n,n,n,n,A.Y(B.co,m?B.a8:B.ch,n,n,n),n,n,n,new C.d5F(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.q(n,n,n,n,n,new A.an(B.a_,B.a0,B.z,j,n,n),B.j),n,n,n,B.Dw,n,n,n)
e=A.e2(B.bV,A.a([new C.Ku("YouTube",B.FC,m,n),new C.Ku("TikTok",B.jP,m,n),new C.Ku("Instagram",B.xU,m,n),new C.Ku("Facebook",B.xY,m,n)],v),B.bP,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.M,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bE:B.fV,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.am:B.bf
r=A.Y(B.ip,B.T.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bw:B.at
u=A.x(A.a([e,B.au,A.aD(n,B.F,!0,n,!0,B.n,n,A.aE(),w,n,n,n,n,n,2,A.bl(n,new A.b6(4,q,B.I),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aB(o,1,B.m,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.m(16),B.KP),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.t,!0,n,!0,n,!1,n,B.Q,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.J,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.N,n,B.S,n,n,n,n)],v),B.a9,B.e,B.f,0,B.l)
e=A.j8(D.axz,D.c0j,new C.d5G(d),A.i7(n,n,n,n,n,n,n,n,n,n,n,m?B.aO:B.a4,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.V(12,0,12,12+l.f.d),A.dB(A.ci(f,A.x(A.a([j,new A.H(B.Pk,u,n),new A.H(D.aq2,A.G(A.a([e,B.b3,A.bX(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d5H(d),n,n),B.a1,A.dC(D.aBI,D.c16,new C.d5I(d,w),A.bu(B.T,n,n,n,B.c,n,D.P7,n,new A.bB(A.m(14),B.I),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.a9,B.e,B.P,0,B.l),B.ar),new A.q(n,n,g,k,h,new A.an(B.an,B.as,B.z,i,n,n),B.j),B.bu),n)},
$S:75}
C.d5F.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5G.prototype={
$0(){C.dkB()
$.Mb().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d5H.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5I.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bf6.prototype={
$1(d){return C.dkC(A.S(d,x.N,x.z))},
$S:z+3}
C.bf7.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.beZ.prototype={
$1(d){return d.c},
$S:z+0}
C.bf_.prototype={
$1(d){return d.r},
$S:z+0}
C.bf0.prototype={
$1(d){return d.f},
$S:z+0}
C.bf1.prototype={
$1(d){return d.at},
$S:z+0}
C.bf2.prototype={
$1(d){return d.c},
$S:z+0}
C.bf3.prototype={
$1(d){return d.r},
$S:z+0}
C.bf4.prototype={
$1(d){return d.f},
$S:z+0}
C.bf5.prototype={
$1(d){return d.at},
$S:z+0}
C.beY.prototype={
$1(d){return d.a7()},
$S:z+5}
C.beX.prototype={
$1(d){return B.a.bh(B.o.j4(d,16),2,"0").toUpperCase()},
$S:77}
C.cwP.prototype={
$0(){},
$S:0}
C.cwO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cwM.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cwN.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cwQ.prototype={
$1(d){return new C.Hk(this.a,null)},
$S:z+7}
C.cwU.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cwV.prototype={
$3(d,e,f){return new A.iz($.Ea(),new C.cwT(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cwT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.B4(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.T.l(0.12)
s=A.m(12)
r=A.T(B.T.l(0.35),B.m,1)
q=A.Y(B.ir,B.T,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Ea().a
m=B.k.am(n+4,1,o)
t=A.a([A.r(k,A.G(A.a([q,B.a1,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.M,k,k,k,k,k,k,k,k,12,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.q(t,k,r,s,k,k,B.j),k,k,B.cu,B.eD,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.ci(s,new A.iV(1.7777777777777777,C.dkD(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaH2(),"fleet_master"),k),B.ar),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.ub(0,B.n,k,B.t,k,k,k,k,!1,k,B.a2,!1,A.a([new A.jS(new A.H(B.Dn,A.x(u,B.v,B.e,B.f,0,B.l),k),k),new A.nh(D.ao8,A.auk(new A.my(new C.cwS(i,j),J.a3(i.d),!1,!0,!0,A.r4(),k),D.bBB),k)],w))},
$S:1633}
C.cwS.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.SU(v,e,J.a3(w.d),new C.cwR(w,v),this.b,null)},
$S:z+9}
C.cwR.prototype={
$0(){return this.a.bgv(this.b)},
$S:0}
C.cwW.prototype={
$0(){this.a.Rt()
return null},
$S:0}
C.cwJ.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cwK.prototype={
$0(){C.Vv(this.a,$.beW)
return null},
$S:0}
C.cwL.prototype={
$3(d,e,f){return A.fs(new C.cwI(this.a,e))},
$S:z+10}
C.cwI.prototype={
$2(d,e){var w,v=null,u=B.k.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.cn(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.au,new C.aKl(u,s.a.c,s.e,s.d,new C.cwF(s),new C.cwG(s),new C.cwH(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.t,v,B.oU,v,v,B.a2),v,v,v)},
$S:1634}
C.cwF.prototype={
$0(){var w=this.a.c
w.toString
C.Vv(w,$.beW)
return null},
$S:0}
C.cwG.prototype={
$1(d){var w=this.a
return w.n(new C.cwE(w,d))},
$S:36}
C.cwE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwH.prototype={
$0(){var w=this.a
return w.n(new C.cwD(w))},
$S:0}
C.cwD.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cLk.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cLl.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cAO.prototype={
$3(d,e,f){return new C.D2(this.a.c,null)},
$S:z+11}
C.cAP.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a3,null,B.aT,B.n,A.a([new C.D2(this.a.c,null),D.aeW],x.p),null)},
$C:"$3",
$R:3,
$S:423}
C.cwX.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cx4.prototype={
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
w.a3L(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fR(v,"load",new C.cx2(w),!1,u)
v=w.e
v.toString
A.fR(v,"error",new C.cx3(w),!1,u)
w=w.e
w.toString
return w},
$S:569}
C.cx2.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cx0(w))
A.bK(B.E,new C.cx1(w),x.H)}},
$S:43}
C.cx0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cx1.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cwZ(w))},
$S:12}
C.cwZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cx3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cx_(w))},
$S:43}
C.cx_.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cwY.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1P.prototype={
$1(d){var w,v,u,t,s=new A.CC([],[]).G0(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.x.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1635};(function aliases(){var w=C.afV.prototype
w.aQw=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.abg.prototype,"gash","be2",1)
w(u,"gbeD","beE",1)
w(u,"gbh2","bh3",6)
w(C.abh.prototype,"gbuZ","bv_",1)
v(C,"dYl","dkA",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wL,[C.d5K,C.d5J,C.bf6,C.bf7,C.beZ,C.bf_,C.bf0,C.bf1,C.bf2,C.bf3,C.bf4,C.bf5,C.beY,C.beX,C.cwQ,C.cwV,C.cwT,C.cwL,C.cwG,C.cAO,C.cAP,C.cx4,C.cx2,C.cx3,C.d1P])
v(A.X3,[C.d5F,C.d5G,C.d5H,C.d5I,C.cwP,C.cwO,C.cwM,C.cwN,C.cwU,C.cwR,C.cwW,C.cwJ,C.cwK,C.cwF,C.cwE,C.cwH,C.cwD,C.cLk,C.cLl,C.cwX,C.cx0,C.cx1,C.cwZ,C.cx_,C.cwY])
v(A.as,[C.Ku,C.SU,C.aCI,C.aKl,C.aKm,C.aDM,C.aKk,C.aEX,C.az0,C.aF1,C.D2])
v(A.aj,[C.n8,C.pc])
v(A.ab,[C.Hl,C.Hk,C.a2b,C.a2c])
v(A.ad,[C.abg,C.aDG,C.afV,C.abh])
v(A.X4,[C.cwS,C.cwI])
u(C.Ho,A.azV)
u(C.aDH,C.afV)
w(C.afV,A.e1)})()
A.dnS(b.typeUniverse,JSON.parse('{"Hl":{"ab":[],"o":[]},"SU":{"as":[],"o":[]},"Hk":{"ab":[],"o":[]},"Ku":{"as":[],"o":[]},"abg":{"ad":["Hl"]},"aCI":{"as":[],"o":[]},"aDG":{"ad":["Hk"]},"aKl":{"as":[],"o":[]},"aKm":{"as":[],"o":[]},"aDM":{"as":[],"o":[]},"aKk":{"as":[],"o":[]},"aEX":{"as":[],"o":[]},"az0":{"as":[],"o":[]},"a2b":{"ab":[],"o":[]},"D2":{"as":[],"o":[]},"aDH":{"ad":["a2b"]},"aF1":{"as":[],"o":[]},"a2c":{"ab":[],"o":[]},"abh":{"ad":["a2c"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bc
return{V:w("a9<aa>"),O:w("a9<z>"),e:w("a9<n8>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("ac<n8>"),a:w("ac<@>"),P:w("X<n,@>"),f:w("X<@,@>"),w:w("n3"),_:w("B1"),k:w("n8"),N:w("n"),Y:w("bi<a7>"),W:w("dh<n>"),J:w("iz<Q>"),j:w("iz<pc?>"),E:w("vG<cy>"),q:w("TB"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.S9=new A.L(983224,"MaterialIcons",!1)
D.aAb=new A.a6(D.S9,48,B.aW,null,null,null)
D.bHC=new A.M(!0,B.bE,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOZ=new A.y("Powered off",null,D.bHC,null,null,null,null,null,null,null,null,null)
D.aNX=w([D.aAb,B.C,D.bOZ],x.p)
D.alB=new A.eL(B.a2,B.e,B.P,B.i,null,B.l,null,0,D.aNX,null)
D.aeI=new A.dd(B.L,null,null,D.alB,null)
D.bBg=new A.ai(18,18,B.LK,null)
D.aeW=new A.dd(B.L,null,null,D.bBg,null)
D.afx=new A.h5(2,null,null,null,null,B.U,null,null,null,null)
D.aij=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aiQ=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.akp=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.ao_=new A.V(0,3,0,3)
D.ao8=new A.V(10,0,10,88)
D.aow=new A.V(12,6,12,10)
D.aoK=new A.V(14,8,14,6)
D.P7=new A.V(18,12,18,12)
D.aq2=new A.V(20,8,20,20)
D.PK=new A.V(8,6,15,8)
D.avS=new A.L(983222,"MaterialIcons",!1)
D.axw=new A.a6(B.ir,26,B.T,null,null,null)
D.axz=new A.a6(B.Rm,18,null,null,null,null)
D.axP=new A.a6(B.pu,14,B.U,null,null,null)
D.aw8=new A.L(983420,"MaterialIcons",!1)
D.ayA=new A.a6(D.aw8,14,B.U,null,null,null)
D.auh=new A.L(62895,"MaterialIcons",!1)
D.ayE=new A.a6(D.auh,14,B.U,null,null,null)
D.aBI=new A.a6(B.iq,20,null,null,null,null)
D.aBZ=new A.a6(B.eY,16,null,null,null,null)
D.aQn=w([B.am,B.M],x.O)
D.TB=new A.an(B.an,B.as,B.z,D.aQn,null,null)
D.bv5=new A.aL("NGMY OS","14.2.1")
D.btX=new A.aL("VirtualDroid","13.8.4")
D.btW=new A.aL("NGMY OS","15.0.0")
D.buF=new A.aL("VirtualDroid","14.1.2")
D.btU=new A.aL("NGMY Tab OS","12.9.7")
D.btS=new A.aL("NGMY OS","13.5.3")
D.btH=new A.aL("VirtualDroid","15.2.0")
D.bui=new A.aL("NGMY OS","14.8.1")
D.buL=new A.aL("NGMY Tab OS","13.2.4")
D.bvf=new A.aL("VirtualDroid","12.6.9")
D.btD=new A.aL("NGMY OS","16.0.1")
D.btu=new A.aL("VirtualDroid","14.9.0")
D.buY=new A.aL("NGMY Tab OS","14.0.3")
D.bu5=new A.aL("NGMY OS","13.1.8")
D.btC=new A.aL("VirtualDroid","13.4.5")
D.btR=new A.aL("NGMY OS","15.3.2")
D.buM=new A.aL("NGMY Tab OS","12.4.1")
D.bv_=new A.aL("VirtualDroid","16.1.0")
D.buh=new A.aL("NGMY OS","14.4.6")
D.bv6=new A.aL("VirtualDroid","15.0.8")
D.aPS=w([D.bv5,D.btX,D.btW,D.buF,D.btU,D.btS,D.btH,D.bui,D.buL,D.bvf,D.btD,D.btu,D.buY,D.bu5,D.btC,D.btR,D.buM,D.bv_,D.buh,D.bv6],A.bc("a9<+(n,n)>"))
D.bxh=new A.ek(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bwQ=new A.ek(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bwL=new A.ek(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bwU=new A.ek(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bwH=new A.ek(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bwW=new A.ek(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bxj=new A.ek(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bwI=new A.ek(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bwP=new A.ek(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bwY=new A.ek(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bwG=new A.ek(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bxb=new A.ek(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bx8=new A.ek(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bwO=new A.ek(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bx5=new A.ek(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bx4=new A.ek(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bwF=new A.ek(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bwT=new A.ek(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bx2=new A.ek(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bx7=new A.ek(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.UM=w([D.bxh,D.bwQ,D.bwL,D.bwU,D.bwH,D.bwW,D.bxj,D.bwI,D.bwP,D.bwY,D.bwG,D.bxb,D.bx8,D.bwO,D.bx5,D.bx4,D.bwF,D.bwT,D.bx2,D.bx7],A.bc("a9<+(n,n,a7,a7,n)>"))
D.aW6=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a0J=new C.Ho(0,"youtube")
D.a0K=new C.Ho(1,"tiktok")
D.HB=new C.Ho(2,"instagram")
D.a0L=new C.Ho(3,"facebook")
D.bp2=new C.Ho(4,"other")
D.bAR=new A.ai(3,null,null,null)
D.bBB=new A.i6(4,10,8,0.52,null)
D.bQf=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bEY=new A.aS(D.bQf,null,null,null,null,null,null,null,null,null,null,null,null,B.E,!1,null,null,null,B.n,null)
D.bHZ=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQ3=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.c0j=new A.y("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c16=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c1b=new A.y("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c6I=new C.aEX(null)})();(function staticFields(){$.dkz=20
$.aqR=null
$.beW=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e1E","Ea",()=>A.Ry(0))
w($,"e1F","Mb",()=>A.Ry(null))})()};
(a=>{a["7T72+VGHOQSTZ+AB5wiOWOq8q+g="]=a.current})($__dart_deferred_initializers__);