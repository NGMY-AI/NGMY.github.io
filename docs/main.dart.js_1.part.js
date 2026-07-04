((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dVx(d,e){A.a5(d,!1).cm(A.em(new C.d2g(e),!0,null,x.H))},
Vb(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Vb=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LV()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ak()
s=new A.ag(new A.aX(n,B.aa,B.a2),t)
w=3
return A.b(A.d9(B.D,new C.d2f(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vb)
case 3:r=g
s.F$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dDn(r)
if(q==null){d.E(x.q).f.O(D.bA2)
w=1
break}w=4
return A.b(A.bL(B.fO,null,x.H),$async$Vb)
case 4:if(d.e==null){w=1
break}n=B.m.am(e,1,999)
$.dgU=n
p=C.dDh(n)
n=$.DW()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6_(q)
d.E(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Vb,v)},
dgX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H9(d){return C.dDq(d)},
dDq(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H9=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H9)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aE(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aC(0,a0,null)
w=x.a.b(r)&&J.cA(r)?10:11
break
case 10:k=J.eL(r,x.f)
k=A.dj(k,new C.bcP(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("af<K.E>")
i=A.C(new A.af(k,new C.bcQ(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dgZ(q)
w=12
return A.b(C.H8(a3,p),$async$H9)
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
n=B.w.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dgX(A.R(n,x.N,x.z))
l=C.dgZ(A.a([m],x.e))
w=21
return A.b(C.H8(a3,l),$async$H9)
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
case 18:case 14:q=C.dDo()
w=22
return A.b(C.H8(a3,q),$async$H9)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H9,v)},
dgZ(d){var w=A.V(d).j("B<1,m>"),v=new A.B(d,new C.bcH(),w).ef(0),u=new A.B(d,new C.bcI(),w).ef(0),t=new A.B(d,new C.bcJ(),w).ef(0),s=new A.B(d,new C.bcK(),w).ef(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d60(null,q,u,t,v,s));++q}return r},
aq9(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aq9=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H9(d),$async$aq9)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.cX(t,new C.bcL(),s).ef(0)
p=r.cX(t,new C.bcM(),s).ef(0)
o=r.cX(t,new C.bcN(),s).ef(0)
n=r.cX(t,new C.bcO(),s).ef(0)
m=C.d60(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H8(d,t),$async$aq9)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aq9,v)},
H8(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H8=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H8)
case 2:u=g
t=B.a.i(d)
s=J.b_(e,new C.bcG(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$H8)
case 3:return A.f(null,v)}})
return A.h($async$H8,v)},
dDo(){var w,v=x.N,u=A.b5(v),t=A.b5(v),s=A.b5(v),r=A.b5(v),q=J.dP(20,x.k)
for(w=0;w<20;++w)q[w]=C.d60(w,w,t,s,u,r)
return q},
d60(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.j2(),h=d==null,g=D.TB[B.m.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TB[B.m.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bu(256)
n=new A.B(p,new C.bcF(),A.V(p).j("B<1,m>")).eU(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bu(10)
t=B.d.eU(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.m.iY(i.bu(256),16),2,"0")
s=B.d.bg(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.m.ag(e,20)
k=D.aTm[w]
j=D.aNj[w]
return new C.mY("vd_"+1000*Date.now()+"_"+e+"_"+i.bu(99999),"Device "+B.a.bh(B.m.p(e+1),2,"0"),u,k,C.dDp(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a0().Y())},
dDp(d,e){var w,v=J.dP(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.m.iY(d.bu(256),16),2,"0")
return B.d.eU(v)},
d2g:function d2g(d){this.a=d},
d2f:function d2f(d,e){this.a=d
this.b=e},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d){this.a=d},
d2d:function d2d(d){this.a=d},
d2e:function d2e(d,e){this.a=d
this.b=e},
Kg:function Kg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mY:function mY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcP:function bcP(){},
bcQ:function bcQ(){},
bcH:function bcH(){},
bcI:function bcI(){},
bcJ:function bcJ(){},
bcK:function bcK(){},
bcL:function bcL(){},
bcM:function bcM(){},
bcN:function bcN(){},
bcO:function bcO(){},
bcG:function bcG(){},
bcF:function bcF(){},
H7:function H7(d,e){this.c=d
this.a=e},
aaM:function aaM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ctE:function ctE(){},
ctD:function ctD(d,e){this.a=d
this.b=e},
ctB:function ctB(d){this.a=d},
ctC:function ctC(d,e){this.a=d
this.b=e},
ctF:function ctF(d){this.a=d},
ctJ:function ctJ(d){this.a=d},
ctK:function ctK(d,e){this.a=d
this.b=e},
ctI:function ctI(d,e,f){this.a=d
this.b=e
this.c=f},
ctH:function ctH(d,e){this.a=d
this.b=e},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctL:function ctL(d){this.a=d},
SA:function SA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBS:function aBS(d,e){this.c=d
this.a=e},
H6:function H6(d,e){this.c=d
this.a=e},
aCO:function aCO(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cty:function cty(d){this.a=d},
ctz:function ctz(d){this.a=d},
ctA:function ctA(d){this.a=d},
ctx:function ctx(d,e){this.a=d
this.b=e},
ctu:function ctu(d){this.a=d},
ctv:function ctv(d){this.a=d},
ctt:function ctt(d,e){this.a=d
this.b=e},
ctw:function ctw(d){this.a=d},
cts:function cts(d){this.a=d},
aJq:function aJq(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJr:function aJr(d,e,f){this.c=d
this.d=e
this.a=f},
aCU:function aCU(d,e){this.c=d
this.a=e},
aJp:function aJp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cI9:function cI9(d){this.a=d},
cIa:function cIa(d){this.a=d},
aE4:function aE4(d){this.a=d},
ayh:function ayh(d,e){this.c=d
this.a=e},
dDn(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dDm(v)
if(u!=null)return new C.p3(w,C.d5Z(u,!1),D.a_t,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dDl(v)
if(t!=null)return new C.p3(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_u,"TikTok",q)
s=C.dDk(w,v)
if(s!=null)return s
r=C.dDj(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p3(w,w,D.bkr,"Video",q)
return q},
dDk(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p3(d,"https://www.instagram.com/reel/"+w+u,D.GN,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p3(d,"https://www.instagram.com/p/"+w+u,D.GN,t,null)}return null},
dDj(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p3(d,"https://www.facebook.com/plugins/video.php?href="+A.eQ(2,d,B.aO,!1)+"&show_text=false&width=734",D.a_v,"Facebook",null)},
dDm(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cW(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dDl(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cW(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
Ha:function Ha(d,e){this.a=d
this.b=e},
p3:function p3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1M:function a1M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCP:function aCP(d,e){var _=this
_.d=$
_.cO$=d
_.aP$=e
_.c=_.a=null},
aE9:function aE9(d,e){this.c=d
this.a=e},
cxD:function cxD(d){this.a=d},
cxE:function cxE(d){this.a=d},
CN:function CN(d,e){this.c=d
this.a=e},
afr:function afr(){},
dgY(d,e,f,g,h,i){return new C.a1N(i,f,h,e,g,d)},
dUd(d){var w=window
w.toString
A.fN(w,"message",new C.cZp(d),!1,x._)},
a1N:function a1N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaN:function aaN(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
ctM:function ctM(d){this.a=d},
ctU:function ctU(d){this.a=d},
ctS:function ctS(d){this.a=d},
ctQ:function ctQ(d){this.a=d},
ctR:function ctR(d){this.a=d},
ctO:function ctO(d){this.a=d},
ctT:function ctT(d){this.a=d},
ctP:function ctP(d){this.a=d},
ctN:function ctN(d){this.a=d},
cZp:function cZp(d){this.a=d},
dgS(){var w,v,u
try{v=A.yt()
w=v.gpR(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d5Z(d,e){var w=C.dgS(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eQ(2,w,B.aO,!1))
v.push("widget_referrer="+A.eQ(2,w,B.aO,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bg(v,"&")},
d5Y(d){var w=A.ap(y.c,!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
dgT(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDg(d,e,f){var w,v,u=C.d5Y(d)
if(u!=null){if(f){w=C.dgS()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dgT(C.d5Z(u,e))}return C.dgT(d)},
dDh(d){if(d<=4)return 0
return B.m.aZ(d-1,4)*4},
dDi(d){var w
if($.LV().a==null)return!1
w=$.DW().a
return d>=w&&d<w+4},
dgW(){var w=$.aq8
if(w!=null)w.a6(0)
$.aq8=null
$.DW().sv(0,0)},
dgV(){var w,v,u,t=$.LV()
if(t.a==null)return
w=$.aq8
if(w!=null)w.a6(0)
v=$.dgU
if(v<=4){t=t.a
t.toString
C.d6_(t)
return}w=$.DW()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6_(t)},
d6_(d){var w=$.aq8
if(w!=null)w.a6(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aq8=A.dl(A.d6(0,0,0,0,0,w),C.dUo())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kg.prototype={
B(d){var w=null,v=this.e,u=v?B.al:B.c,t=A.n(20),s=A.U(B.S.l(0.25),B.o,1),r=A.Z(this.d,B.S,w,w,14)
return A.u(w,A.G(A.a([r,B.eY,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.V:B.bQ,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.eO,w,w,w)}}
C.mY.prototype={
a8(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H7.prototype={
T(){return new C.aaM(A.a([],x.e))},
gdU(){return this.c}}
C.aaM.prototype={
Z(){var w=this
w.a3()
$.DW().ak(0,w.gart())
C.dUd(w.gbdp())
w.UP()},
bcP(){if(this.c!=null)this.q(new C.ctE())},
bdq(){C.dgV()},
n(){$.DW().V(0,this.gart())
C.dgW()
$.LV().sv(0,null)
this.a2()},
UP(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UP=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H9(t.a.c),$async$UP)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.ctD(t,s))
$.bcE=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$UP,v)},
R1(){var w=0,v=A.i(x.H),u,t=this,s
var $async$R1=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.ctB(t))
w=3
return A.b(C.aq9(t.a.c),$async$R1)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.ctC(t,s))
$.bcE=J.a3(t.d)
t.c.E(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$R1,v)},
bfh(d){var w=this.c
w.toString
A.a5(w,!1).cm(A.em(new C.ctF(d),!1,null,x.H))},
bfQ(){var w=this.c
w.toString
return C.Vb(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.e7:B.bN,s=A.aH(v,v,v,v,B.F2,v,v,v,new C.ctJ(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.Bm(A.G(A.a([A.I(new A.H(B.i2,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.Q,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.J,!0,v,A.aT(!1,v,!0,new A.H(B.aP,A.Z(B.eR,B.S,v,v,28),v),B.c5,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfP(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.W)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.c2(!0,A.y(A.a([new A.H(D.OB,r,v),A.I(w.e?B.k8:new A.ip($.LV(),new C.ctK(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0)
return A.c7(v,t,s,v,!1,!1,A.akW(B.S,B.AD,B.kx,D.bXf,w.e?v:new C.ctL(w)),v)}}
C.SA.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ad(0,B.x,B.S.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1M(n,!0,!C.dDi(w),"Fold "+(B.m.aZ(w,4)+1)+"/"+B.m.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.i9,B.lk,u,u,22),B.am,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vv,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.J,!0,u,A.aT(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cw(p,A.fP(A.y(A.a([new C.aBS(o,u),A.I(n,1),A.u(u,A.G(A.a([A.Z(B.xy,B.S.l(0.85),u,u,9),D.bvY,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.a6,u,u,u,u,u,D.amd,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,u,u,new A.t(u,u,r,s,q,D.Sq,B.k),u,u,u,B.eP,u,u,u),1),B.am,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.z,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.S.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.W)}}
C.aBS.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.I(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.p3,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a6,w,w,w,w,w,B.Os,w,w,w)}}
C.H6.prototype={
T(){return new C.aCO()}}
C.aCO.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.e7:B.bN,t=A.aH(w,w,w,w,B.F2,w,w,w,new C.cty(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c7(w,u,A.c2(!0,A.y(A.a([new A.H(D.OB,A.G(A.a([t,A.I(new A.Bm(A.G(A.a([A.I(new A.H(B.i2,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.Q,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.J,!0,w,A.aT(!1,w,!0,new A.H(B.aP,A.Z(B.eR,B.S,w,w,28),w),B.c5,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ctz(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.W)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.ip($.LV(),new C.ctA(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJq.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ad(0,B.x,B.S.l(0.35),B.ea,28),new A.ad(0,B.x,B.q.l(0.45),B.co,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dgY(new A.dd(v+"_full_"+u,x.W),!1,u,!1,w.gaGd(),v+"_full")
w=v}else w=new C.aCU(t.r,s)}else w=new C.ayh(m,s)
else w=D.c1L
return A.u(s,A.cw(n,A.fP(A.y(A.a([new C.aJr(m,l,s),A.I(w,1),new C.aJp(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,s,s,new A.t(s,s,o,q,p,D.Sq,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aJr.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dh(r)
r=A.hf(r)
w=new A.dc(q,r)
v=w.gGi()===0?12:w.gGi()
r=B.a.bh(B.m.p(r),2,"0")
q=(q<12?B.eM:B.hB)===B.eM?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.kX,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bf,D.awz,B.dA,D.avO,B.dA,D.awD],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.am,A.G(A.a([A.Z(B.EU,B.S.l(0.9),s,s,12),B.dA,A.I(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.a6,s,s,s,s,s,D.amW,s,s,s)}}
C.aCU.prototype={
B(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.Z(B.xd,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ar,A.eB(D.azU,D.bLb,this.c,A.eh(w,w,w,w,w,w,w,w,w,B.S,w,w,w,w,w,new A.aF(B.S.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vv,w,w,w,w,w,w,w,w,1/0)}}
C.aJp.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arm(B.QZ,"YouTube",s===0,r,new C.cI9(u))
s=u.arm(B.jB,"Device",s===1,r,new C.cIa(u))
w=r?"Power off":"Power on"
v=r?D.R_:D.atY
return A.u(t,A.G(A.a([q,B.a_,s,B.b3,A.aH(t,t,t,t,A.Z(v,r?B.bZ:B.eC,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a6,t,t,t,t,t,D.amJ,t,t,t)},
arm(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.S:B.a5
v=f&&g?B.S.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.I(A.aI(!1,B.J,!0,u,A.aT(!1,A.n(10),!0,new A.H(B.ls,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.W),1)}}
C.aE4.prototype={
B(d){return D.ade}}
C.ayh.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jU,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qs("Serial",u.c),q=w.qs("Model",u.d),p=w.qs("Device ID",u.e),o=w.qs("IMEI",u.r),n=w.qs("MAC",u.f),m=w.qs("OS",u.w+" "+u.x),l=w.qs("Location",u.y+", "+u.z),k=w.qs("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qs("Timezone",u.at)
u=u.ax
return A.es(A.a([t,B.am,s,B.U,r,q,p,o,n,m,l,k,j,w.qs("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aP,v,v,B.Z,!1)},
qs(d,e){var w=null
return new A.H(B.c7,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bV,A.j(e,w,w,w,w,w,w,D.bD6,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Ha.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p3.prototype={
gaGd(){var w=this.c
return w===D.a_t||w===D.a_u||w===D.GN||w===D.a_v}}
C.a1M.prototype={
T(){return new C.aCP(null,null)}}
C.aCP.prototype={
Z(){this.a3()
var w=A.bC(null,B.ri,null,1,null,this)
w.lC(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPF()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dR(t,new A.t(t,t,t,t,t,new A.aq(B.d3,B.ca,B.B,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bz),q=x.Y,p=u.d
p===$&&A.c()
p=A.cp(B.h9,p,t)
w=B.c.l(0.92)
q=A.aU(new A.cV(new A.b0(p,new A.bk(0.72,1,q),q.j("b0<bh.T>")),!1,A.Z(B.i9,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lk
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aE9(s,t),r,q,A.b9(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b9(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b9(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aV(B.a8,t,B.by,B.n,s,t)}}
C.aE9.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l2(u,new C.cxD(this),B.bs,!0,w,w,new C.cxE(this),w)
return new C.CN(v,w)}}
C.CN.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.vG,B.Lc],x.O),B.i9)
break
case 1:w=new A.aO(A.a([B.vv,D.ah6],x.O),B.jD)
break
case 2:w=new A.aO(A.a([D.aiF,D.agD],x.O),B.xj)
break
case 3:w=new A.aO(A.a([B.Q,B.cN],x.O),B.xm)
break
case 4:w=new A.aO(A.a([B.a6,B.al],x.O),B.mX)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.Z(w.b,B.S.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.an,B.as,B.B,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afr.prototype={
n(){var w=this,v=w.aP$
if(v!=null)v.V(0,w.gdi())
w.aP$=null
w.a2()},
bo(){this.bB()
this.bA()
this.dj()}}
C.a1N.prototype={
T(){return new C.aaN()}}
C.aaN.prototype={
bvE(d,e){var w=C.d5Y(d)
if(w!=null)return C.d5Z(w,e)
return d},
a3a(d,e){var w,v=this,u=C.d5Y(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bvE(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDg(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btz(){var w,v=this
if(v.w)return
v.q(new C.ctM(v))
w=v.e
if(w!=null)v.a3a(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aM()
u.d=w
try{$.DX()
$.ov().rE(w,new C.ctU(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.ctN(v))
w=v.e
w.toString
v.a3a(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Rd,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.E,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fP(A.aU(new A.H(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yv(n,B.pG,w)],v)
if(o.f)w.push(A.fP(A.aU(new A.an(28,28,D.ae2,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b0,B.o,1)
q=A.Z(B.EX,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eH(0,A.aI(!1,B.J,!0,n,A.aT(!1,n,!0,A.aU(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.NZ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbty(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.W)))}return new A.aV(B.a8,n,B.by,B.n,w,n)}}
var z=a.updateTypes(["m(mY)","~()","H7(Q)","mY(X<@,@>)","a_(mY)","X<m,@>(mY)","aw<~>()","H6(Q)","ip<N>(Q,p3?,o?)","SA(Q,N)","rj(Q,p3?,o?)","CN(Q,ai,ds?)"])
C.d2g.prototype={
$1(d){return new C.H7(this.a,null)},
$S:z+2}
C.d2f.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.d4,B.Q],j):A.a([B.c,B.ac],j),h=A.a([new A.ad(0,B.x,B.S.l(0.22),B.ea,32)],x.V),g=A.U(m?B.bp:B.S.l(0.18),B.o,1),f=A.n(28),e=B.S.l(m?0.35:0.14)
j=A.a([e,B.a1.l(m?0.18:0.08)],j)
e=A.u(n,D.avw,B.h,n,n,new A.t(B.S.l(0.18),n,A.U(B.S.l(0.45),B.o,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.Q,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.am,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.V:B.ad,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.ec,w,A.aH(n,n,n,n,A.Z(B.cw,m?B.a5:B.cf,n,n,n),n,n,n,new C.d2b(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a0,B.a3,B.B,j,n,n),B.k),n,n,n,B.CK,n,n,n)
e=A.e4(B.bU,A.a([new C.Kg("YouTube",B.ET,m,n),new C.Kg("TikTok",B.jD,m,n),new C.Kg("Instagram",B.xj,m,n),new C.Kg("Facebook",B.xm,m,n)],v),B.bL,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.Q,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bG:B.fJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.al:B.bN
r=A.Z(B.jC,B.S.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bp:B.aF
u=A.y(A.a([e,B.aq,A.aA(n,B.A,!0,n,!0,B.n,n,A.aB(),w,n,n,n,n,n,2,A.bp(n,new A.b8(4,q,B.L),n,n,n,n,n,n,!0,new A.b8(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b8(4,A.n(16),B.K0),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.O,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.I,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.K,n,B.R,n,n,n,n)],v),B.af,B.e,B.f,0,B.l)
e=A.jH(D.avz,D.bWo,new C.d2c(d),A.iZ(n,n,n,n,n,n,n,n,n,n,n,m?B.aV:B.ad,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.W(12,0,12,12+l.f.d),A.dR(A.cw(f,A.y(A.a([j,new A.H(B.Oa,u,n),new A.H(D.aob,A.G(A.a([e,B.b3,A.bZ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.V:B.a4,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2d(d),n,n),B.a_,A.dE(D.azD,D.bXa,new C.d2e(d,w),A.bu(B.S,n,n,n,B.c,n,D.NZ,n,new A.bA(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.af,B.e,B.P,0,B.l),B.at),new A.t(n,n,g,k,h,new A.aq(B.an,B.as,B.B,i,n,n),B.k),B.bz),n)},
$S:79}
C.d2b.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2c.prototype={
$0(){C.dgW()
$.LV().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2d.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2e.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcP.prototype={
$1(d){return C.dgX(A.R(d,x.N,x.z))},
$S:z+3}
C.bcQ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcH.prototype={
$1(d){return d.c},
$S:z+0}
C.bcI.prototype={
$1(d){return d.r},
$S:z+0}
C.bcJ.prototype={
$1(d){return d.f},
$S:z+0}
C.bcK.prototype={
$1(d){return d.at},
$S:z+0}
C.bcL.prototype={
$1(d){return d.c},
$S:z+0}
C.bcM.prototype={
$1(d){return d.r},
$S:z+0}
C.bcN.prototype={
$1(d){return d.f},
$S:z+0}
C.bcO.prototype={
$1(d){return d.at},
$S:z+0}
C.bcG.prototype={
$1(d){return d.a8()},
$S:z+5}
C.bcF.prototype={
$1(d){return B.a.bh(B.m.iY(d,16),2,"0").toUpperCase()},
$S:77}
C.ctE.prototype={
$0(){},
$S:0}
C.ctD.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ctB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ctC.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.ctF.prototype={
$1(d){return new C.H6(this.a,null)},
$S:z+7}
C.ctJ.prototype={
$0(){return A.a5(this.a,!1).dY()},
$S:0}
C.ctK.prototype={
$3(d,e,f){return new A.ip($.DW(),new C.ctI(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.ctI.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AO(d,k,x.Q)
w=w==null?k:w.gkj()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.S.l(0.12)
s=A.n(12)
r=A.U(B.S.l(0.35),B.o,1)
q=A.Z(B.i9,B.S,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DW().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.Q,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cv,B.ey,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cw(s,new A.iL(1.7777777777777777,C.dgY(new A.dd("fleet_master_"+r,x.W),!0,r,!0,j.gaGd(),"fleet_master"),k),B.at),B.U],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u_(0,B.n,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.jG(new A.H(B.Cz,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.n6(D.amm,A.atD(new A.mn(new C.ctH(i,j),J.a3(i.d),!1,!0,!0,A.qX(),k),D.bwH),k)],w))},
$S:1600}
C.ctH.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.SA(v,e,J.a3(w.d),new C.ctG(w,v),this.b,null)},
$S:z+9}
C.ctG.prototype={
$0(){return this.a.bfh(this.b)},
$S:0}
C.ctL.prototype={
$0(){this.a.R1()
return null},
$S:0}
C.cty.prototype={
$0(){return A.a5(this.a,!1).dY()},
$S:0}
C.ctz.prototype={
$0(){C.Vb(this.a,$.bcE)
return null},
$S:0}
C.ctA.prototype={
$3(d,e,f){return A.fA(new C.ctx(this.a,e))},
$S:z+10}
C.ctx.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cr(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.aq,new C.aJq(u,s.a.c,s.e,s.d,new C.ctu(s),new C.ctv(s),new C.ctw(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.CA,v,v,B.Z),v,v,v)},
$S:1601}
C.ctu.prototype={
$0(){var w=this.a.c
w.toString
C.Vb(w,$.bcE)
return null},
$S:0}
C.ctv.prototype={
$1(d){var w=this.a
return w.q(new C.ctt(w,d))},
$S:36}
C.ctt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ctw.prototype={
$0(){var w=this.a
return w.q(new C.cts(w))},
$S:0}
C.cts.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cI9.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cIa.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cxD.prototype={
$3(d,e,f){return new C.CN(this.a.c,null)},
$S:z+11}
C.cxE.prototype={
$3(d,e,f){if(f==null)return e
return new A.aV(B.a8,null,B.by,B.n,A.a([new C.CN(this.a.c,null),D.ads],x.p),null)},
$C:"$3",
$R:3,
$S:423}
C.ctM.prototype={
$0(){return this.a.w=!0},
$S:0}
C.ctU.prototype={
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
w.a3a(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fN(v,"load",new C.ctS(w),!1,u)
v=w.e
v.toString
A.fN(v,"error",new C.ctT(w),!1,u)
w=w.e
w.toString
return w},
$S:564}
C.ctS.prototype={
$1(d){var w=this.a
if(w.c!=null){w.q(new C.ctQ(w))
A.bL(B.C,new C.ctR(w),x.H)}},
$S:42}
C.ctQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctR.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.ctO(w))},
$S:12}
C.ctO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.ctP(w))},
$S:42}
C.ctP.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.ctN.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZp.prototype={
$1(d){var w,v,u,t,s=new A.Cn([],[]).FA(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1602};(function aliases(){var w=C.afr.prototype
w.aPF=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaM.prototype,"gart","bcP",1)
w(u,"gbdp","bdq",1)
w(u,"gbfP","bfQ",6)
w(C.aaN.prototype,"gbty","btz",1)
v(C,"dUo","dgV",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wv,[C.d2g,C.d2f,C.bcP,C.bcQ,C.bcH,C.bcI,C.bcJ,C.bcK,C.bcL,C.bcM,C.bcN,C.bcO,C.bcG,C.bcF,C.ctF,C.ctK,C.ctI,C.ctA,C.ctv,C.cxD,C.cxE,C.ctU,C.ctS,C.ctT,C.cZp])
v(A.WK,[C.d2b,C.d2c,C.d2d,C.d2e,C.ctE,C.ctD,C.ctB,C.ctC,C.ctJ,C.ctG,C.ctL,C.cty,C.ctz,C.ctu,C.ctt,C.ctw,C.cts,C.cI9,C.cIa,C.ctM,C.ctQ,C.ctR,C.ctO,C.ctP,C.ctN])
v(A.au,[C.Kg,C.SA,C.aBS,C.aJq,C.aJr,C.aCU,C.aJp,C.aE4,C.ayh,C.aE9,C.CN])
v(A.ai,[C.mY,C.p3])
v(A.aa,[C.H7,C.H6,C.a1M,C.a1N])
v(A.ac,[C.aaM,C.aCO,C.afr,C.aaN])
v(A.WL,[C.ctH,C.ctx])
u(C.Ha,A.az8)
u(C.aCP,C.afr)
w(C.afr,A.e1)})()
A.dka(b.typeUniverse,JSON.parse('{"H7":{"aa":[],"o":[]},"SA":{"au":[],"o":[]},"H6":{"aa":[],"o":[]},"Kg":{"au":[],"o":[]},"aaM":{"ac":["H7"]},"aBS":{"au":[],"o":[]},"aCO":{"ac":["H6"]},"aJq":{"au":[],"o":[]},"aJr":{"au":[],"o":[]},"aCU":{"au":[],"o":[]},"aJp":{"au":[],"o":[]},"aE4":{"au":[],"o":[]},"ayh":{"au":[],"o":[]},"a1M":{"aa":[],"o":[]},"CN":{"au":[],"o":[]},"aCP":{"ac":["a1M"]},"aE9":{"au":[],"o":[]},"a1N":{"aa":[],"o":[]},"aaN":{"ac":["a1N"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("a9<ad>"),O:w("a9<A>"),e:w("a9<mY>"),s:w("a9<m>"),p:w("a9<o>"),t:w("a9<N>"),X:w("ab<mY>"),a:w("ab<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mU"),_:w("AL"),k:w("mY"),N:w("m"),Y:w("bk<a8>"),W:w("dd<m>"),J:w("ip<N>"),j:w("ip<p3?>"),E:w("vr<cy>"),q:w("Th"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.R_=new A.L(983224,"MaterialIcons",!1)
D.ay7=new A.a7(D.R_,48,B.b0,null,null,null)
D.bCK=new A.M(!0,B.bG,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bK8=new A.x("Powered off",null,D.bCK,null,null,null,null,null,null,null,null,null)
D.aLt=w([D.ay7,B.E,D.bK8],x.p)
D.ajM=new A.eF(B.Z,B.e,B.P,B.i,null,B.l,null,0,D.aLt,null)
D.ade=new A.dn(B.M,null,null,D.ajM,null)
D.bwm=new A.an(18,18,B.KV,null)
D.ads=new A.dn(B.M,null,null,D.bwm,null)
D.ae2=new A.hk(2,null,null,null,null,B.V,null,null,null,null)
D.agD=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ah6=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiF=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amd=new A.W(0,3,0,3)
D.amm=new A.W(10,0,10,88)
D.amJ=new A.W(12,6,12,10)
D.amW=new A.W(14,8,14,6)
D.NZ=new A.W(18,12,18,12)
D.aob=new A.W(20,8,20,20)
D.OB=new A.W(8,6,15,8)
D.atY=new A.L(983222,"MaterialIcons",!1)
D.avw=new A.a7(B.i9,26,B.S,null,null,null)
D.avz=new A.a7(B.Qa,18,null,null,null,null)
D.avO=new A.a7(B.p3,14,B.V,null,null,null)
D.aub=new A.L(983420,"MaterialIcons",!1)
D.awz=new A.a7(D.aub,14,B.V,null,null,null)
D.asp=new A.L(62895,"MaterialIcons",!1)
D.awD=new A.a7(D.asp,14,B.V,null,null,null)
D.azD=new A.a7(B.iO,20,null,null,null,null)
D.azU=new A.a7(B.eR,16,null,null,null,null)
D.aNQ=w([B.al,B.Q],x.O)
D.Sq=new A.aq(B.an,B.as,B.B,D.aNQ,null,null)
D.bqd=new A.aO("NGMY OS","14.2.1")
D.bpd=new A.aO("VirtualDroid","13.8.4")
D.bpc=new A.aO("NGMY OS","15.0.0")
D.bpS=new A.aO("VirtualDroid","14.1.2")
D.bpb=new A.aO("NGMY Tab OS","12.9.7")
D.bp9=new A.aO("NGMY OS","13.5.3")
D.boZ=new A.aO("VirtualDroid","15.2.0")
D.bpy=new A.aO("NGMY OS","14.8.1")
D.bpX=new A.aO("NGMY Tab OS","13.2.4")
D.bqm=new A.aO("VirtualDroid","12.6.9")
D.boW=new A.aO("NGMY OS","16.0.1")
D.boO=new A.aO("VirtualDroid","14.9.0")
D.bq6=new A.aO("NGMY Tab OS","14.0.3")
D.bpm=new A.aO("NGMY OS","13.1.8")
D.boV=new A.aO("VirtualDroid","13.4.5")
D.bp8=new A.aO("NGMY OS","15.3.2")
D.bpY=new A.aO("NGMY Tab OS","12.4.1")
D.bq8=new A.aO("VirtualDroid","16.1.0")
D.bpx=new A.aO("NGMY OS","14.4.6")
D.bqe=new A.aO("VirtualDroid","15.0.8")
D.aNj=w([D.bqd,D.bpd,D.bpc,D.bpS,D.bpb,D.bp9,D.boZ,D.bpy,D.bpX,D.bqm,D.boW,D.boO,D.bq6,D.bpm,D.boV,D.bp8,D.bpY,D.bq8,D.bpx,D.bqe],A.bf("a9<+(m,m)>"))
D.bsn=new A.ei(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.brW=new A.ei(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.brR=new A.ei(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bs_=new A.ei(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.brN=new A.ei(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bs1=new A.ei(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bsp=new A.ei(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.brO=new A.ei(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.brV=new A.ei(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bs3=new A.ei(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.brM=new A.ei(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bsh=new A.ei(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bse=new A.ei(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.brU=new A.ei(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bsb=new A.ei(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bsa=new A.ei(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.brL=new A.ei(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.brZ=new A.ei(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bs8=new A.ei(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bsd=new A.ei(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TB=w([D.bsn,D.brW,D.brR,D.bs_,D.brN,D.bs1,D.bsp,D.brO,D.brV,D.bs3,D.brM,D.bsh,D.bse,D.brU,D.bsb,D.bsa,D.brL,D.brZ,D.bs8,D.bsd],A.bf("a9<+(m,m,a8,a8,m)>"))
D.aTm=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_t=new C.Ha(0,"youtube")
D.a_u=new C.Ha(1,"tiktok")
D.GN=new C.Ha(2,"instagram")
D.a_v=new C.Ha(3,"facebook")
D.bkr=new C.Ha(4,"other")
D.bvY=new A.an(3,null,null,null)
D.bwH=new A.hX(4,10,8,0.52,null)
D.bLn=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bA2=new A.aP(D.bLn,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.n,null)
D.bD6=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLb=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bWo=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bXa=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bXf=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c1L=new C.aE4(null)})();(function staticFields(){$.dgU=20
$.aq8=null
$.bcE=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dYH","DW",()=>A.Rf(0))
w($,"dYI","LV",()=>A.Rf(null))})()};
(a=>{a["YwACHOA8r1WJp4SnuVXtoff6FQE="]=a.current})($__dart_deferred_initializers__);