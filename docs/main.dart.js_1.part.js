((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eyz(d,e){A.a3(d,!1).cG(A.f1(new C.dAi(e),!0,null,x.H))},
a_K(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Q9()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.am(new A.bb(n,B.aP,B.aD),t)
w=3
return A.b(A.dD(B.M,new C.dAh(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_K)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.edD(r)
if(q==null){d.I(x.q).f.V(D.cTt)
w=1
break}w=4
return A.b(A.bK(B.ip,null,x.H),$async$a_K)
case 4:if(d.e==null){w=1
break}n=B.l.N(e,1,999)
$.dQK=n
p=C.edx(n)
n=$.H3()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dEk(q)
d.I(x.q).f.V(A.bj(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_K,v)},
dQN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aT(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aT(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oI(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
KB(d){return C.edG(d)},
edG(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$KB=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$KB)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.K.aC(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eP(r,x.f)
k=A.ds(k,new C.btY(),k.$ti.j("H.E"),x.k)
j=A.S(k).j("aj<H.E>")
i=A.z(new A.aj(k,new C.btZ(),j),j.j("H.E"))
q=i
if(J.a8(q)>=20){u=q
w=1
break}p=C.dQP(q)
w=12
return A.b(C.KA(a3,p),$async$KB)
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
case 9:case 5:o=A.aJ(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.K.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dQN(A.T(n,x.N,x.z))
l=C.dQP(A.a([m],x.e))
w=21
return A.b(C.KA(a3,l),$async$KB)
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
case 18:case 14:q=C.edE()
w=22
return A.b(C.KA(a3,q),$async$KB)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KB,v)},
dQP(d){var w=A.Y(d).j("D<1,o>"),v=new A.D(d,new C.btQ(),w).ep(0),u=new A.D(d,new C.btR(),w).ep(0),t=new A.D(d,new C.btS(),w).ep(0),s=new A.D(d,new C.btT(),w).ep(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dEl(null,q,u,t,v,s));++q}return r},
aAY(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KB(d),$async$aAY)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.ds(t,new C.btU(),s).ep(0)
p=r.ds(t,new C.btV(),s).ep(0)
o=r.ds(t,new C.btW(),s).ep(0)
n=r.ds(t,new C.btX(),s).ep(0)
m=C.dEl(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.KA(d,t),$async$aAY)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAY,v)},
KA(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$KA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$KA)
case 2:u=g
t=B.b.i(d)
s=J.aY(e,new C.btP(),x.P)
s=A.z(s,s.$ti.j("a6.E"))
w=3
return A.b(u.an("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.K.ak(s,null)),$async$KA)
case 3:return A.h(null,v)}})
return A.i($async$KA,v)},
edE(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.di(20,x.k)
for(w=0;w<20;++w)q[w]=C.dEl(w,w,t,s,u,r)
return q},
dEl(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.ld(),h=d==null,g=D.a9v[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a9v[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.D(p,new C.btO(),A.Y(p).j("D<1,o>")).fU(0)
u="VND-"+B.b.al(n,0,4)+"-"+B.b.al(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.f.fU(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.ba(B.l.h6(i.by(256),16),2,"0")
s=B.f.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a3(e,20)
k=D.c3b[w]
j=D.bUC[w]
return new C.oI("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.b.ba(B.l.q(e+1),2,"0"),u,k,C.edF(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).aa().a5())},
edF(d,e){var w,v=J.di(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.ba(B.l.h6(d.by(256),16),2,"0")
return B.f.fU(v)},
dAi:function dAi(d){this.a=d},
dAh:function dAh(d,e){this.a=d
this.b=e},
dAd:function dAd(d){this.a=d},
dAe:function dAe(d){this.a=d},
dAf:function dAf(d){this.a=d},
dAg:function dAg(d,e){this.a=d
this.b=e},
Oc:function Oc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oI:function oI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
btY:function btY(){},
btZ:function btZ(){},
btQ:function btQ(){},
btR:function btR(){},
btS:function btS(){},
btT:function btT(){},
btU:function btU(){},
btV:function btV(){},
btW:function btW(){},
btX:function btX(){},
btP:function btP(){},
btO:function btO(){},
Kz:function Kz(d,e){this.c=d
this.a=e},
aiO:function aiO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cXe:function cXe(){},
cXd:function cXd(d,e){this.a=d
this.b=e},
cXb:function cXb(d){this.a=d},
cXc:function cXc(d,e){this.a=d
this.b=e},
cXf:function cXf(d){this.a=d},
cXk:function cXk(d){this.a=d},
cXj:function cXj(d){this.a=d},
cXl:function cXl(d,e){this.a=d
this.b=e},
cXi:function cXi(d,e,f){this.a=d
this.b=e
this.c=f},
cXh:function cXh(d,e){this.a=d
this.b=e},
cXg:function cXg(d,e){this.a=d
this.b=e},
cXm:function cXm(d){this.a=d},
XU:function XU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aOr:function aOr(d,e){this.c=d
this.a=e},
Ky:function Ky(d,e){this.c=d
this.a=e},
aPF:function aPF(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cX8:function cX8(d){this.a=d},
cX9:function cX9(d){this.a=d},
cXa:function cXa(d){this.a=d},
cX7:function cX7(d,e){this.a=d
this.b=e},
cX4:function cX4(d){this.a=d},
cX5:function cX5(d){this.a=d},
cX3:function cX3(d,e){this.a=d
this.b=e},
cX6:function cX6(d){this.a=d},
cX2:function cX2(d){this.a=d},
aWM:function aWM(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aWN:function aWN(d,e,f){this.c=d
this.d=e
this.a=f},
aPL:function aPL(d,e){this.c=d
this.a=e},
aWL:function aWL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ddH:function ddH(d){this.a=d},
ddI:function ddI(d){this.a=d},
aR7:function aR7(d){this.a=d},
aKx:function aKx(d,e){this.c=d
this.a=e},
edD(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.edC(v)
if(u!=null)return new C.qX(w,C.dEj(u,!1),D.aha,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.edB(v)
if(t!=null)return new C.qX(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ahb,"TikTok",q)
s=C.edA(w,v)
if(s!=null)return s
r=C.edz(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qX(w,w,D.cA8,"Video",q)
return q},
edA(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dI(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qX(d,"https://www.instagram.com/reel/"+w+u,D.Q1,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dI(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qX(d,"https://www.instagram.com/p/"+w+u,D.Q1,t,null)}return null},
edz(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qX(d,"https://www.facebook.com/plugins/video.php?href="+A.fh(2,d,B.br,!1)+"&show_text=false&width=734",D.ahc,"Facebook",null)},
edC(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dI(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
edB(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dI(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dI(d)
return w==null?null:w.b[1]},
KC:function KC(d,e){this.a=d
this.b=e},
qX:function qX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8s:function a8s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aPG:function aPG(d,e){var _=this
_.d=$
_.cl$=d
_.aB$=e
_.c=_.a=null},
aRc:function aRc(d,e){this.c=d
this.a=e},
d0U:function d0U(d){this.a=d},
d0V:function d0V(d){this.a=d},
FZ:function FZ(d,e){this.c=d
this.a=e},
aom:function aom(){},
dQO(d,e,f,g,h,i){return new C.a8t(i,f,h,e,g,d)},
exc(d){var w=window
w.toString
A.hv(w,"message",new C.dwy(d),!1,x._)},
a8t:function a8t(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aiP:function aiP(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cXn:function cXn(d){this.a=d},
cXw:function cXw(d){this.a=d},
cXt:function cXt(d){this.a=d},
cXs:function cXs(d){this.a=d},
cXu:function cXu(d){this.a=d},
cXr:function cXr(d){this.a=d},
cXv:function cXv(d){this.a=d},
cXq:function cXq(d){this.a=d},
cXp:function cXp(d){this.a=d},
cXo:function cXo(d){this.a=d},
dwy:function dwy(d){this.a=d},
edv(){var w,v,u
try{v=A.xT()
w=v.gvj(v)
if(J.a8(w)!==0&&!J.x(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dEj(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.bk(w,"&")},
btM(d){var w=A.ao(y.c,!0,!1,!1,!1).dI(d)
return w==null?null:w.b[1]},
dQJ(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
edw(d,e,f){var w,v,u=C.btM(d)
if(u!=null){if(f){w=C.edv()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dQJ(C.dEj(u,e))}return C.dQJ(d)},
edx(d){if(d<=4)return 0
return B.l.ad(d-1,4)*4},
edy(d){var w
if($.Q9().a==null)return!1
w=$.H3().a
return d>=w&&d<w+4},
dQM(){var w=$.aAX
if(w!=null)w.a0(0)
$.aAX=null
$.H3().sv(0,0)},
dQL(){var w,v,u,t=$.Q9()
if(t.a==null)return
w=$.aAX
if(w!=null)w.a0(0)
v=$.dQK
if(v<=4){t=t.a
t.toString
C.dEk(t)
return}w=$.H3()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dEk(t)},
dEk(d){var w=$.aAX
if(w!=null)w.a0(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aAX=A.dC(A.dd(0,0,0,0,0,w),C.exs())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oc.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.ad.k(0.25),B.u,1),r=A.X(this.d,B.ad,w,w,14)
return A.r(w,A.I(A.a([r,B.fE,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ck,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.j,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.ho,w,w,w)}}
C.oI.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kz.prototype={
S(){return new C.aiO(A.a([],x.e))},
ge9(){return this.c}}
C.aiO.prototype={
X(){var w=this
w.a2()
$.H3().aA(0,w.gazK())
C.exc(w.gbrG())
w.a_s()},
br7(){if(this.c!=null)this.n(new C.cXe())},
brH(){C.dQL()},
p(){$.H3().Y(0,this.gazK())
C.dQM()
$.Q9().sv(0,null)
this.a1()},
a_s(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KB(t.a.c),$async$a_s)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cXd(t,s))
$.btN=J.a8(s)
case 1:return A.h(u,v)}})
return A.i($async$a_s,v)},
Wg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cXb(t))
w=3
return A.b(C.aAY(t.a.c),$async$Wg)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cXc(t,s))
$.btN=J.a8(t.d)
t.c.I(x.q).f.V(A.bj(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Wg,v)},
btJ(d){var w=this.c
w.toString
A.a3(w,!1).cG(A.f1(new C.cXf(d),!1,null,x.H))},
bum(){var w=this.c
w.toString
return C.a_K(w,J.a8(this.d))},
B(d){var w=this,v=null,u=A.E(d).ax.a===B.D,t=u?B.h1:B.bA,s=A.bR(!0,A.v(A.a([new A.F(D.Zi,new A.jh(new C.cXk(w),v),v),A.G(w.e?B.nQ:new A.lD($.Q9(),new C.cXl(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ac,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.auH(B.ad,B.IE,B.n1,D.dhG,w.e?v:new C.cXm(w)),v)}}
C.XU.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a5(0,B.G,B.ad.k(0.18),B.dB,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8s(n,!0,!C.edy(w),"Fold "+(B.l.ad(w,4)+1)+"/"+B.l.ad(v.e+4-1,4),u)
n=w}else n=A.r(u,A.v(A.a([A.X(B.ka,B.nZ,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aW,B.k,0,B.q),B.j,B.Ai,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aB(!1,B.T,!0,u,A.aL(!1,t,!0,A.v(A.a([A.G(A.r(u,A.bX(p,A.fb(A.v(A.a([new C.aOr(o,u),A.G(n,1),A.r(u,A.I(A.a([A.X(B.D1,B.ad.k(0.85),u,u,9),D.cPg,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aW,B.k,0,u,u),B.j,B.ay,u,u,u,u,u,u,D.aI8,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.p(u,u,r,s,q,D.a2O,B.p),u,u,u,u,B.hp,u,u,u),1),B.aJ,A.d(o.b,u,1,B.au,u,u,u,A.l(u,u,A.E(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.L,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.au,u,u,u,A.l(u,u,A.E(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.au,u,u,u,A.l(u,u,B.ad.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.M,0,u,u,u,u,u,B.a7)}}
C.aOr.prototype={
B(d){var w=null
return A.r(w,A.I(A.a([A.G(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.au,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.tN,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.ay,w,w,w,w,w,w,B.Z6,w,w,w)}}
C.Ky.prototype={
S(){return new C.aPF()}}
C.aPF.prototype={
B(d){var w=null,v=A.E(d).ax.a===B.D,u=v?B.h1:B.bA,t=A.aS(w,w,w,w,B.a1V,w,w,w,new C.cX8(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bR(!0,A.v(A.a([new A.F(D.Zi,A.I(A.a([t,A.G(new A.Kp(A.I(A.a([A.G(new A.F(B.jw,A.d(s.b+" \xb7 "+s.c,w,1,B.au,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aB(!1,B.T,!0,w,A.aL(!1,w,!0,new A.F(B.bj,A.X(B.ht,B.ad,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cX9(d),w,w,w,w,w,w,w),B.j,B.M,0,w,w,w,w,w,B.a7)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.G(new A.lD($.Q9(),new C.cXa(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ac,!0,!0),w,!1,!1,w,w)}}
C.aWM.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.ad.k(0.35),B.fg,28),new A.a5(0,B.G,B.A.k(0.45),B.da,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dQO(new A.da(v+"_full_"+u,x.W),!1,u,!1,w.gaPG(),v+"_full")
w=v}else w=new C.aPL(t.r,s)}else w=new C.aKx(m,s)
else w=D.dps
return A.r(s,A.bX(n,A.fb(A.v(A.a([new C.aWN(m,l,s),A.G(w,1),new C.aWL(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.p(s,s,o,q,p,D.a2O,B.p),s,r*2.05,s,s,B.bW,s,s,r)}}
C.aWN.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dm(r)
r=A.h2(r)
w=new A.dM(q,r)
v=w.gKE()===0?12:w.gKE()
r=B.b.ba(B.l.q(r),2,"0")
q=(q<12?B.hl:B.js)===B.hl?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.I(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nA,s,s,s),B.b7,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bM,D.aTV,B.dK,D.aT5,B.dK,D.aU_],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.I(A.a([A.X(B.CV,B.ad.k(0.9),s,s,12),B.dK,A.G(A.d(u.c,s,s,B.au,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.r(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.ay,s,s,s,s,s,s,D.aJb,s,s,s)}}
C.aPL.prototype={
B(d){var w=null
return A.r(w,A.aD(A.v(A.a([A.X(B.Ci,B.e.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.eS(D.aXv,D.d4N,this.c,A.e6(w,w,w,w,w,w,w,w,w,B.ad,w,w,w,w,w,new A.aH(B.ad.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.j,B.Ai,w,w,w,w,w,w,w,w,w,1/0)}}
C.aWL.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azB(B.CO,"YouTube",s===0,r,new C.ddH(u))
s=u.azB(B.kX,"Device",s===1,r,new C.ddI(u))
w=r?"Power off":"Power on"
v=r?D.a0X:D.aR3
return A.r(t,A.I(A.a([q,B.aj,s,B.b7,A.aS(t,t,t,t,A.X(v,r?B.bP:B.hv,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dE)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.ay,t,t,t,t,t,t,D.aIN,t,t,t)},
azB(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bk
else w=f?B.ad:B.aw
v=f&&g?B.ad.k(0.15):B.M
u=A.m(10)
t=g?h:s
return A.G(A.aB(!1,B.T,!0,u,A.aL(!1,A.m(10),!0,new A.F(B.o8,A.v(A.a([A.X(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a7),1)}}
C.aR7.prototype={
B(d){return D.axk}}
C.aKx.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kp,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ug("Serial",u.c),q=w.ug("Model",u.d),p=w.ug("Device ID",u.e),o=w.ug("IMEI",u.r),n=w.ug("MAC",u.f),m=w.ug("OS",u.w+" "+u.x),l=w.ug("Location",u.y+", "+u.z),k=w.ug("Coordinates",B.m.a9(u.Q,4)+", "+B.m.a9(u.as,4)),j=w.ug("Timezone",u.at)
u=u.ax
return A.ej(A.a([t,B.aJ,s,B.ae,r,q,p,o,n,m,l,k,j,w.ug("Provisioned",u.length>=10?B.b.al(u,0,10):u)],x.p),v,B.bj,v,v,B.ap,!1)},
ug(d,e){var w=null
return new A.F(B.dj,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.d(e,w,w,w,w,w,w,D.cWO,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.KC.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qX.prototype={
gaPG(){var w=this.c
return w===D.aha||w===D.ahb||w===D.Q1||w===D.ahc}}
C.a8s.prototype={
S(){return new C.aPG(null,null)}}
C.aPG.prototype={
X(){this.a2()
var w=A.bd(null,B.pO,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZZ()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cA(t,new A.p(t,t,t,t,t,new A.a9(B.bS,B.bG,B.E,A.a([B.M,B.A.k(0.55)],x.O),t,t),B.p),B.bt),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.cN,p,t)
w=B.e.k(0.92)
q=A.aD(new A.cM(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bl.T>")),!1,A.X(B.ka,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nZ
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aRc(s,t),r,q,A.ay(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.L,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.L,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ap(B.Z,t,B.bc,B.r,s,t)}}
C.aRc.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lk(u,B.I,new C.d0U(this),B.bX,!0,w,w,new C.d0V(this),w)
return new C.FZ(v,w)}}
C.FZ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aR(A.a([B.jm,B.Vb],x.O),B.ka)
break
case 1:w=new A.aR(A.a([B.Ai,D.aCz],x.O),B.lV)
break
case 2:w=new A.aR(A.a([D.aEj,D.aBZ],x.O),B.Cr)
break
case 3:w=new A.aR(A.a([B.X,B.dN],x.O),B.CA)
break
case 4:w=new A.aR(A.a([B.ay,B.aN],x.O),B.tL)
break
default:w=u}v=w.a
return A.r(u,A.aD(A.X(w.b,B.ad.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.p(u,u,u,u,u,new A.a9(B.aA,B.aK,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.aom.prototype={
p(){var w=this,v=w.aB$
if(v!=null)v.Y(0,w.gcP())
w.aB$=null
w.a1()},
bd(){this.br()
this.bn()
this.cQ()}}
C.a8t.prototype={
S(){return new C.aiP()}}
C.aiP.prototype={
a9r(d,e){var w,v=C.btM(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dEj(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.edw(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bKi(){var w,v=this
if(v.w)return
v.n(new C.cXn(v))
w=v.e
if(w!=null)v.a9r(w,v.a.d)},
X(){var w,v,u=this
u.a2()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aE()
u.d=w
try{$.H5()
$.qh().vt(w,new C.cXw(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bi(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cXp(v))
w=v.e
w.toString
v.a9r(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.a1h,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.fb(A.aD(new A.F(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a34(n,B.uD,w)],v)
if(o.f)w.push(A.fb(A.aD(new A.aa(28,28,D.ayz,n),n,n,n),B.d3,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bk,B.u,1)
q=A.X(B.MY,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.e2(0,A.aB(!1,B.T,!0,n,A.aL(!1,n,!0,A.aD(A.r(n,A.I(A.a([q,B.aj,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.j,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,D.YD,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbKh(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a7)))}v=C.btM(o.a.d)
if(v!=null)w.push(A.ay(8,A.jE(D.aVp,D.dcQ,new C.cXo(o),A.j8(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ho,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ap(B.Z,n,B.bc,B.r,w,n)}}
var z=a.updateTypes(["o(oI)","~()","Kz(P)","oI(a_<@,@>)","Z(oI)","a_<o,@>(oI)","aC<~>()","Ky(P)","lD<K>(P,qX?,q?)","XU(P,K)","uw(P,qX?,q?)","FZ(P,aq,dL?)"])
C.dAi.prototype={
$1(d){return new C.Kz(this.a,null)},
$S:z+2}
C.dAh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.E(d).ax.a===B.D,l=A.aA(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.em,B.X],j):A.a([B.e,B.ax],j),h=A.a([new A.a5(0,B.G,B.ad.k(0.22),B.fg,32)],x.V),g=A.L(m?B.c7:B.ad.k(0.18),B.u,1),f=A.m(28),e=B.ad.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.r(n,D.aSO,B.j,n,n,new A.p(B.ad.k(0.18),n,A.L(B.ad.k(0.45),B.u,1),n,n,n,B.ah),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.G(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ao,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.r(n,A.I(A.a([e,B.f6,w,A.aS(n,n,n,n,A.X(B.d1,m?B.aw:B.d3,n,n,n),n,n,n,new C.dAd(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.p(n,n,n,n,n,new A.a9(B.a0,B.a3,B.E,j,n,n),B.p),n,n,n,n,B.L1,n,n,n)
e=A.eD(B.cW,A.a([new C.Oc("YouTube",B.MW,m,n),new C.Oc("TikTok",B.lV,m,n),new C.Oc("Instagram",B.Cr,m,n),new C.Oc("Facebook",B.CA,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ci:B.jn,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bA
r=A.X(B.fy,B.ad.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aO
u=A.v(A.a([e,B.aV,A.aM(n,B.S,!0,n,!0,B.r,n,A.aN(),w,n,n,n,n,n,2,A.bo(n,new A.b8(4,q,B.Y),n,n,n,n,n,n,!0,new A.b8(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b8(4,A.m(16),B.U_),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ab,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a1,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a2,n,B.ag,n,n,n,n)],v),B.ar,n,B.i,B.k,0,B.q)
e=A.jE(D.aSR,D.dgJ,new C.dAe(d),A.j8(n,n,n,n,n,n,n,n,n,n,n,m?B.bx:B.ao,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.F(new A.R(12,0,12,12+l.f.d),A.cA(A.bX(f,A.v(A.a([j,new A.F(B.YT,u,n),new A.F(D.aKz,A.I(A.a([e,B.b7,A.c4(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dAf(d),n,n),B.aj,A.dW(D.aXc,D.dhy,new C.dAg(d,w),A.bu(B.ad,n,n,n,B.e,n,D.YD,n,new A.bA(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ar,n,B.i,B.a_,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.a9(B.aA,B.aK,B.E,i,n,n),B.p),B.bt),n)},
$S:95}
C.dAd.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.dAe.prototype={
$0(){C.dQM()
$.Q9().sv(0,null)
A.a3(this.a,!1).P(null)},
$S:0}
C.dAf.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.dAg.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).P(w)
return null},
$S:0}
C.btY.prototype={
$1(d){return C.dQN(A.T(d,x.N,x.z))},
$S:z+3}
C.btZ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btQ.prototype={
$1(d){return d.c},
$S:z+0}
C.btR.prototype={
$1(d){return d.r},
$S:z+0}
C.btS.prototype={
$1(d){return d.f},
$S:z+0}
C.btT.prototype={
$1(d){return d.at},
$S:z+0}
C.btU.prototype={
$1(d){return d.c},
$S:z+0}
C.btV.prototype={
$1(d){return d.r},
$S:z+0}
C.btW.prototype={
$1(d){return d.f},
$S:z+0}
C.btX.prototype={
$1(d){return d.at},
$S:z+0}
C.btP.prototype={
$1(d){return d.ab()},
$S:z+5}
C.btO.prototype={
$1(d){return B.b.ba(B.l.h6(d,16),2,"0").toUpperCase()},
$S:91}
C.cXe.prototype={
$0(){},
$S:0}
C.cXd.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cXb.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cXc.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cXf.prototype={
$1(d){return new C.Ky(this.a,null)},
$S:z+7}
C.cXk.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,B.qr,w,w,w,new C.cXj(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a8(u.d)+")",s=x.p
return A.I(A.a([v,A.G(A.fQ(A.I(A.a([new A.oG(D.xK,e,g,36,B.CV,w),B.aT,A.G(A.d(t,w,1,B.au,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fI(B.f.gG(D.xK).k(0.45+e*0.2),B.J,10)],x.S),w,w),w,w,w),1),A.aB(!1,B.T,!0,w,A.aL(!1,w,!0,new A.F(B.bW,A.X(B.ht,A.an(B.f.gG(D.xK),B.f.ga6(D.xK),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbul(),w,w,w,w,w,w,w),B.j,B.M,0,w,w,w,w,w,B.a7)],s),B.n,w,B.i,B.k,0,w,w),D.xK,w,g,B.fd,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:372}
C.cXj.prototype={
$0(){return A.a3(this.a,!1).eF()},
$S:0}
C.cXl.prototype={
$3(d,e,f){return new A.lD($.H3(),new C.cXi(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cXi.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DU(d,k,x.Q)
w=w==null?k:w.glX()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ad.k(0.12)
s=A.m(12)
r=A.L(B.ad.k(0.35),B.u,1)
q=A.X(B.ka,B.ad,k,k,18)
p=j.d
o=J.a8(l.a.d)
n=$.H3().a
m=B.m.N(n+4,1,o)
t=A.a([A.r(k,A.I(A.a([q,B.aj,A.G(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.df,B.fw,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bX(s,new A.iM(1.7777777777777777,C.dQO(new A.da("fleet_master_"+r,x.W),!0,r,!0,j.gaPG(),"fleet_master"),k),B.aB),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a8(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.E(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wl(0,B.r,k,B.F,k,k,k,k,!1,k,B.ap,!1,A.a([new A.l1(new A.F(B.KS,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oT(D.aIj,A.aF2(new A.o3(new C.cXh(i,j),J.a8(i.d),!1,!0,!0,A.u_(),k),D.cQ7),k)],w))},
$S:1785}
C.cXh.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.XU(v,e,J.a8(w.d),new C.cXg(w,v),this.b,null)},
$S:z+9}
C.cXg.prototype={
$0(){return this.a.btJ(this.b)},
$S:0}
C.cXm.prototype={
$0(){this.a.Wg()
return null},
$S:0}
C.cX8.prototype={
$0(){return A.a3(this.a,!1).eF()},
$S:0}
C.cX9.prototype={
$0(){C.a_K(this.a,$.btN)
return null},
$S:0}
C.cXa.prototype={
$3(d,e,f){return A.dB(new C.cX7(this.a,e))},
$S:z+10}
C.cX7.prototype={
$2(d,e){var w,v=null,u=B.m.N(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aD(A.cy(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.E(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aV,new C.aWM(u,s.a.c,s.e,s.d,new C.cX4(s),new C.cX5(s),new C.cX6(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.q_,v,v,B.ap),v,v,v)},
$S:1786}
C.cX4.prototype={
$0(){var w=this.a.c
w.toString
C.a_K(w,$.btN)
return null},
$S:0}
C.cX5.prototype={
$1(d){var w=this.a
return w.n(new C.cX3(w,d))},
$S:31}
C.cX3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cX6.prototype={
$0(){var w=this.a
return w.n(new C.cX2(w))},
$S:0}
C.cX2.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.ddH.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ddI.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d0U.prototype={
$3(d,e,f){return new C.FZ(this.a.c,null)},
$S:z+11}
C.d0V.prototype={
$3(d,e,f){if(f==null)return e
return new A.ap(B.Z,null,B.bc,B.r,A.a([new C.FZ(this.a.c,null),D.axE],x.p),null)},
$C:"$3",
$R:3,
$S:524}
C.cXn.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cXw.prototype={
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
w.a9r(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hv(v,"load",new C.cXt(w),!1,u)
v=w.e
v.toString
A.hv(v,"error",new C.cXu(w),!1,u)
A.bK(B.kS,new C.cXv(w),x.H)
w=w.e
w.toString
return w},
$S:528}
C.cXt.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cXs(w))},
$S:49}
C.cXs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cXu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cXr(w))},
$S:49}
C.cXr.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cXv.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cXq(w))},
$S:12}
C.cXq.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cXp.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cXo.prototype={
$0(){var w,v=C.btM(this.a.a.d)
if(v==null)return
w=window
w.toString
B.nH.TX(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dwy.prototype={
$1(d){var w,v,u,t,s=new A.Fw([],[]).JS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.x(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.K.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.x(J.n(w,"event"),"onStateChange")&&J.x(v,0)){this.a.$0()
return}if(J.x(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.x(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1787};(function aliases(){var w=C.aom.prototype
w.aZZ=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aiO.prototype,"gazK","br7",1)
w(u,"gbrG","brH",1)
w(u,"gbul","bum",6)
w(C.aiP.prototype,"gbKh","bKi",1)
v(C,"exs","dQL",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.z8,[C.dAi,C.dAh,C.btY,C.btZ,C.btQ,C.btR,C.btS,C.btT,C.btU,C.btV,C.btW,C.btX,C.btP,C.btO,C.cXf,C.cXk,C.cXl,C.cXi,C.cXa,C.cX5,C.d0U,C.d0V,C.cXw,C.cXt,C.cXu,C.dwy])
v(A.a1b,[C.dAd,C.dAe,C.dAf,C.dAg,C.cXe,C.cXd,C.cXb,C.cXc,C.cXj,C.cXg,C.cXm,C.cX8,C.cX9,C.cX4,C.cX3,C.cX6,C.cX2,C.ddH,C.ddI,C.cXn,C.cXs,C.cXr,C.cXv,C.cXq,C.cXp,C.cXo])
v(A.at,[C.Oc,C.XU,C.aOr,C.aWM,C.aWN,C.aPL,C.aWL,C.aR7,C.aKx,C.aRc,C.FZ])
v(A.aq,[C.oI,C.qX])
v(A.ab,[C.Kz,C.Ky,C.a8s,C.a8t])
v(A.ac,[C.aiO,C.aPF,C.aom,C.aiP])
v(A.a1c,[C.cXh,C.cX7])
u(C.KC,A.aLr)
u(C.aPG,C.aom)
w(C.aom,A.dx)})()
A.dUh(b.typeUniverse,JSON.parse('{"Kz":{"ab":[],"q":[]},"XU":{"at":[],"q":[]},"Ky":{"ab":[],"q":[]},"Oc":{"at":[],"q":[]},"aiO":{"ac":["Kz"]},"aOr":{"at":[],"q":[]},"aPF":{"ac":["Ky"]},"aWM":{"at":[],"q":[]},"aWN":{"at":[],"q":[]},"aPL":{"at":[],"q":[]},"aWL":{"at":[],"q":[]},"aR7":{"at":[],"q":[]},"aKx":{"at":[],"q":[]},"a8s":{"ab":[],"q":[]},"FZ":{"at":[],"q":[]},"aPG":{"ac":["a8s"]},"aRc":{"at":[],"q":[]},"a8t":{"ab":[],"q":[]},"aiP":{"ac":["a8t"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a4<a5>"),O:w("a4<y>"),e:w("a4<oI>"),S:w("a4<fI>"),s:w("a4<o>"),p:w("a4<q>"),t:w("a4<K>"),X:w("ah<oI>"),a:w("ah<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("oB"),_:w("DR"),k:w("oI"),N:w("o"),Y:w("bi<a2>"),W:w("da<o>"),J:w("lD<K>"),j:w("lD<qX?>"),E:w("vr<cV>"),q:w("YM"),z:w("@"),Q:w("aq?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a0X=new A.M(983224,"MaterialIcons",!1)
D.aVw=new A.ad(D.a0X,48,B.bk,null,null,null)
D.d3I=new A.A("Powered off",null,B.aoB,null,null,null,null,null,null,null,null,null)
D.bRD=w([D.aVw,B.N,D.d3I],x.p)
D.aFH=new A.eH(B.ap,B.i,B.a_,B.n,null,B.q,null,0,D.bRD,null)
D.axk=new A.d7(B.I,null,null,D.aFH,null)
D.cPL=new A.aa(18,18,B.UU,null)
D.axE=new A.d7(B.I,null,null,D.cPL,null)
D.ayz=new A.fW(2,null,null,null,null,B.aa,null,null,null,null)
D.aBZ=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aCz=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aEj=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aI8=new A.R(0,3,0,3)
D.aIj=new A.R(10,0,10,88)
D.aIN=new A.R(12,6,12,10)
D.aJb=new A.R(14,8,14,6)
D.YD=new A.R(18,12,18,12)
D.aKz=new A.R(20,8,20,20)
D.Zi=new A.R(8,6,15,8)
D.aR3=new A.M(983222,"MaterialIcons",!1)
D.aSO=new A.ad(B.ka,26,B.ad,null,null,null)
D.aSR=new A.ad(B.a_Y,18,null,null,null,null)
D.aT5=new A.ad(B.tN,14,B.aa,null,null,null)
D.aRo=new A.M(983420,"MaterialIcons",!1)
D.aTV=new A.ad(D.aRo,14,B.aa,null,null,null)
D.aPm=new A.M(62895,"MaterialIcons",!1)
D.aU_=new A.ad(D.aPm,14,B.aa,null,null,null)
D.aVp=new A.ad(B.tG,16,B.aa,null,null,null)
D.aXc=new A.ad(B.j3,20,null,null,null,null)
D.aXv=new A.ad(B.ht,16,null,null,null,null)
D.bVr=w([B.aN,B.X],x.O)
D.a2O=new A.a9(B.aA,B.aK,B.E,D.bVr,null,null)
D.cJa=new A.aR("NGMY OS","14.2.1")
D.cHU=new A.aR("VirtualDroid","13.8.4")
D.cHT=new A.aR("NGMY OS","15.0.0")
D.cIH=new A.aR("VirtualDroid","14.1.2")
D.cHR=new A.aR("NGMY Tab OS","12.9.7")
D.cHP=new A.aR("NGMY OS","13.5.3")
D.cHE=new A.aR("VirtualDroid","15.2.0")
D.cIg=new A.aR("NGMY OS","14.8.1")
D.cIN=new A.aR("NGMY Tab OS","13.2.4")
D.cJm=new A.aR("VirtualDroid","12.6.9")
D.cHz=new A.aR("NGMY OS","16.0.1")
D.cHq=new A.aR("VirtualDroid","14.9.0")
D.cJ1=new A.aR("NGMY Tab OS","14.0.3")
D.cI2=new A.aR("NGMY OS","13.1.8")
D.cHy=new A.aR("VirtualDroid","13.4.5")
D.cHO=new A.aR("NGMY OS","15.3.2")
D.cIO=new A.aR("NGMY Tab OS","12.4.1")
D.cJ4=new A.aR("VirtualDroid","16.1.0")
D.cIf=new A.aR("NGMY OS","14.4.6")
D.cJb=new A.aR("VirtualDroid","15.0.8")
D.bUC=w([D.cJa,D.cHU,D.cHT,D.cIH,D.cHR,D.cHP,D.cHE,D.cIg,D.cIN,D.cJm,D.cHz,D.cHq,D.cJ1,D.cI2,D.cHy,D.cHO,D.cIO,D.cJ4,D.cIf,D.cJb],A.b4("a4<+(o,o)>"))
D.xK=w([B.ad,B.fo],x.O)
D.cLs=new A.eU(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cL0=new A.eU(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cKW=new A.eU(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cL4=new A.eU(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cKS=new A.eU(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cL6=new A.eU(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cLu=new A.eU(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cKT=new A.eU(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cL_=new A.eU(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cL8=new A.eU(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cKR=new A.eU(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cLm=new A.eU(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cLj=new A.eU(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cKZ=new A.eU(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cLg=new A.eU(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cLf=new A.eU(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cKQ=new A.eU(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cL3=new A.eU(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cLd=new A.eU(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cLi=new A.eU(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a9v=w([D.cLs,D.cL0,D.cKW,D.cL4,D.cKS,D.cL6,D.cLu,D.cKT,D.cL_,D.cL8,D.cKR,D.cLm,D.cLj,D.cKZ,D.cLg,D.cLf,D.cKQ,D.cL3,D.cLd,D.cLi],A.b4("a4<+(o,o,a2,a2,o)>"))
D.c3b=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aha=new C.KC(0,"youtube")
D.ahb=new C.KC(1,"tiktok")
D.Q1=new C.KC(2,"instagram")
D.ahc=new C.KC(3,"facebook")
D.cA8=new C.KC(4,"other")
D.cPg=new A.aa(3,null,null,null)
D.cQ7=new A.hm(4,10,8,0.52,null)
D.d4Y=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cTt=new A.aW(D.d4Y,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.r,null)
D.cWO=new A.N(!0,B.e,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d4N=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dcQ=new A.A("Open in YouTube",null,B.je,null,null,null,null,null,null,null,null,null)
D.dgJ=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dhy=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dhG=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dps=new C.aR7(null)})();(function staticFields(){$.dQK=20
$.aAX=null
$.btN=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eCo","H3",()=>A.acQ(0))
w($,"eCp","Q9",()=>A.acQ(null))})()};
(a=>{a["xP0B2QC0spuZKosWEhO15NRwHis="]=a.current})($__dart_deferred_initializers__);