((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
efJ(d,e){A.a7(d,!1).cB(A.eD(new C.dhU(e),!0,null,x.H))},
Zy(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zy=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.P5()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.ak(new A.b8(n,B.aF,B.ax),t)
w=3
return A.b(A.dz(B.L,new C.dhT(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zy)
case 3:r=g
s.H$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dW1(r)
if(q==null){d.F(x.q).f.R(D.cKR)
w=1
break}w=4
return A.b(A.bN(B.id,null,x.H),$async$Zy)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dy8=n
p=C.dVW(n)
n=$.Gs()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dm_(q)
d.F(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zy,v)},
dyb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aZ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aZ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.o8(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K0(d){return C.dW4(d)},
dW4(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K0=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K0)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eT(r,x.f)
k=A.dr(k,new C.boa(),k.$ti.j("F.E"),x.k)
j=A.P(k).j("ah<F.E>")
i=A.B(new A.ah(k,new C.bob(),j),j.j("F.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dyd(q)
w=12
return A.b(C.K_(a3,p),$async$K0)
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
n=B.I.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dyb(A.U(n,x.N,x.z))
l=C.dyd(A.a([m],x.e))
w=21
return A.b(C.K_(a3,l),$async$K0)
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
case 18:case 14:q=C.dW2()
w=22
return A.b(C.K_(a3,q),$async$K0)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$K0,v)},
dyd(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.bo2(),w).ez(0),u=new A.E(d,new C.bo3(),w).ez(0),t=new A.E(d,new C.bo4(),w).ez(0),s=new A.E(d,new C.bo5(),w).ez(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dm0(null,q,u,t,v,s));++q}return r},
ax3(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$ax3=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K0(d),$async$ax3)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.df(t,new C.bo6(),s).ez(0)
p=r.df(t,new C.bo7(),s).ez(0)
o=r.df(t,new C.bo8(),s).ez(0)
n=r.df(t,new C.bo9(),s).ez(0)
m=C.dm0(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K_(d,t),$async$ax3)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$ax3,v)},
K_(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$K_=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K_)
case 2:u=g
t=B.b.i(d)
s=J.b4(e,new C.bo1(),x.P)
s=A.B(s,s.$ti.j("a4.E"))
w=3
return A.b(u.au("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aq(s,null)),$async$K_)
case 3:return A.f(null,v)}})
return A.h($async$K_,v)},
dW2(){var w,v=x.N,u=A.ba(v),t=A.ba(v),s=A.ba(v),r=A.ba(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dm0(w,w,t,s,u,r)
return q},
dm0(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jz(),h=d==null,g=D.a6D[B.l.a5(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6D[B.l.a5(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.E(p,new C.bo0(),A.Y(p).j("E<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bh(B.l.hv(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a5(e,20)
k=D.bWZ[w]
j=D.bNV[w]
return new C.o8("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bh(B.l.n(e+1),2,"0"),u,k,C.dW3(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a_())},
dW3(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bh(B.l.hv(d.bF(256),16),2,"0")
return B.h.fw(v)},
dhU:function dhU(d){this.a=d},
dhT:function dhT(d,e){this.a=d
this.b=e},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhS:function dhS(d,e){this.a=d
this.b=e},
No:function No(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o8:function o8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
boa:function boa(){},
bob:function bob(){},
bo2:function bo2(){},
bo3:function bo3(){},
bo4:function bo4(){},
bo5:function bo5(){},
bo6:function bo6(){},
bo7:function bo7(){},
bo8:function bo8(){},
bo9:function bo9(){},
bo1:function bo1(){},
bo0:function bo0(){},
JZ:function JZ(d,e){this.c=d
this.a=e},
ag9:function ag9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cI3:function cI3(){},
cI2:function cI2(d,e){this.a=d
this.b=e},
cI0:function cI0(d){this.a=d},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI4:function cI4(d){this.a=d},
cI8:function cI8(d){this.a=d},
cI9:function cI9(d,e){this.a=d
this.b=e},
cI7:function cI7(d,e,f){this.a=d
this.b=e
this.c=f},
cI6:function cI6(d,e){this.a=d
this.b=e},
cI5:function cI5(d,e){this.a=d
this.b=e},
cIa:function cIa(d){this.a=d},
WJ:function WJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJR:function aJR(d,e){this.c=d
this.a=e},
JY:function JY(d,e){this.c=d
this.a=e},
aKU:function aKU(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHY:function cHY(d){this.a=d},
cHZ:function cHZ(d){this.a=d},
cI_:function cI_(d){this.a=d},
cHX:function cHX(d,e){this.a=d
this.b=e},
cHU:function cHU(d){this.a=d},
cHV:function cHV(d){this.a=d},
cHT:function cHT(d,e){this.a=d
this.b=e},
cHW:function cHW(d){this.a=d},
cHS:function cHS(d){this.a=d},
aRL:function aRL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRM:function aRM(d,e,f){this.c=d
this.d=e
this.a=f},
aL_:function aL_(d,e){this.c=d
this.a=e},
aRK:function aRK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXy:function cXy(d){this.a=d},
cXz:function cXz(d){this.a=d},
aMf:function aMf(d){this.a=d},
aG7:function aG7(d,e){this.c=d
this.a=e},
dW1(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dW0(v)
if(u!=null)return new C.ql(w,C.dlZ(u,!1),D.ae6,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dW_(v)
if(t!=null)return new C.ql(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ae7,"TikTok",q)
s=C.dVZ(w,v)
if(s!=null)return s
r=C.dVY(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.ql(w,w,D.csg,"Video",q)
return q},
dVZ(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ql(d,"https://www.instagram.com/reel/"+w+u,D.NW,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ql(d,"https://www.instagram.com/p/"+w+u,D.NW,t,null)}return null},
dVY(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.ql(d,"https://www.facebook.com/plugins/video.php?href="+A.fj(2,d,B.bg,!1)+"&show_text=false&width=734",D.ae8,"Facebook",null)},
dW0(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dm(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dW_(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
K1:function K1(d,e){this.a=d
this.b=e},
ql:function ql(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6y:function a6y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKV:function aKV(d,e){var _=this
_.d=$
_.d2$=d
_.aW$=e
_.c=_.a=null},
aMk:function aMk(d,e){this.c=d
this.a=e},
cMM:function cMM(d){this.a=d},
cMN:function cMN(d){this.a=d},
Fk:function Fk(d,e){this.c=d
this.a=e},
akX:function akX(){},
dyc(d,e,f,g,h,i){return new C.a6z(i,f,h,e,g,d)},
eei(d){var w=window
w.toString
A.hh(w,"message",new C.dek(d),!1,x._)},
a6z:function a6z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aga:function aga(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cIb:function cIb(d){this.a=d},
cIk:function cIk(d){this.a=d},
cIh:function cIh(d){this.a=d},
cIg:function cIg(d){this.a=d},
cIi:function cIi(d){this.a=d},
cIf:function cIf(d){this.a=d},
cIj:function cIj(d){this.a=d},
cIe:function cIe(d){this.a=d},
cId:function cId(d){this.a=d},
cIc:function cIc(d){this.a=d},
dek:function dek(d){this.a=d},
dVU(){var w,v,u
try{v=A.AJ()
w=v.grU(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlZ(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bnZ(d){var w=A.ap(y.c,!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
dy7(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVV(d,e,f){var w,v,u=C.bnZ(d)
if(u!=null){if(f){w=C.dVU()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dy7(C.dlZ(u,e))}return C.dy7(d)},
dVW(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVX(d){var w
if($.P5().a==null)return!1
w=$.Gs().a
return d>=w&&d<w+4},
dya(){var w=$.ax2
if(w!=null)w.ae(0)
$.ax2=null
$.Gs().sv(0,0)},
dy9(){var w,v,u,t=$.P5()
if(t.a==null)return
w=$.ax2
if(w!=null)w.ae(0)
v=$.dy8
if(v<=4){t=t.a
t.toString
C.dm_(t)
return}w=$.Gs()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dm_(t)},
dm_(d){var w=$.ax2
if(w!=null)w.ae(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.ax2=A.dL(A.dp(0,0,0,0,0,w),C.eex())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.No.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.w,1),r=A.X(this.d,B.a5,w,w,14)
return A.t(w,A.H(A.a([r,B.fS,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a6:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.j,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.o8.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JZ.prototype={
U(){return new C.ag9(A.a([],x.e))},
ge3(){return this.c}}
C.ag9.prototype={
a0(){var w=this
w.a7()
$.Gs().ap(0,w.gaxb())
C.eei(w.gbnh())
w.YQ()},
bmH(){if(this.c!=null)this.p(new C.cI3())},
bni(){C.dy9()},
q(){$.Gs().Z(0,this.gaxb())
C.dya()
$.P5().sv(0,null)
this.a6()},
YQ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YQ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K0(t.a.c),$async$YQ)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cI2(t,s))
$.bo_=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$YQ,v)},
US(){var w=0,v=A.i(x.H),u,t=this,s
var $async$US=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cI0(t))
w=3
return A.b(C.ax3(t.a.c),$async$US)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cI1(t,s))
$.bo_=J.a2(t.d)
t.c.F(x.q).f.R(A.bs(null,null,null,null,null,B.y,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$US,v)},
bpb(d){var w=this.c
w.toString
A.a7(w,!1).cB(A.eD(new C.cI4(d),!1,null,x.H))},
bpM(){var w=this.c
w.toString
return C.Zy(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.bw,s=A.aL(v,v,v,v,B.La,v,v,v,new C.cI8(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DL(A.H(A.a([A.I(new A.J(B.j9,A.j(r,v,1,B.aD,v,v,v,A.l(v,v,u?B.e:B.W,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aJ(!1,B.V,!0,v,A.aP(!1,v,!0,new A.J(B.bf,A.X(B.h8,B.a5,v,v,28),v),B.cM,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpL(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a9)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.c_(!0,A.w(A.a([new A.J(D.WQ,r,v),A.I(w.e?B.n6:new A.l8($.P5(),new C.cI9(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.aqV(B.a5,B.Gu,B.mn,D.d7l,w.e?v:new C.cIa(w)),v)}}
C.WJ.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a5.l(0.18),B.dl,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6y(n,!0,!C.dVX(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jK,B.nf,u,u,22),B.aO,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.k,0,B.q),B.j,B.yL,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.V,!0,u,A.aP(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cl(p,A.fS(A.w(A.a([new C.aJR(o,u),A.I(n,1),A.t(u,A.H(A.a([A.X(B.Ba,B.a5.l(0.85),u,u,9),D.cGC,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,D.aD8,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,u,u,new A.r(u,u,r,s,q,D.a03,B.p),u,u,u,B.h5,u,u,u),1),B.aO,A.j(o.b,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.aD,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.aD,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a9)}}
C.aJR.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.j(B.h.gav(this.c.c.split("-")),w,w,B.aD,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rJ,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,B.WG,w,w,w)}}
C.JY.prototype={
U(){return new C.aKU()}}
C.aKU.prototype={
C(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bw,t=A.aL(w,w,w,w,B.La,w,w,w,new C.cHY(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c_(!0,A.w(A.a([new A.J(D.WQ,A.H(A.a([t,A.I(new A.DL(A.H(A.a([A.I(new A.J(B.j9,A.j(s.b+" \xb7 "+s.c,w,1,B.aD,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.V,!0,w,A.aP(!1,w,!0,new A.J(B.bf,A.X(B.h8,B.a5,w,w,28),w),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHZ(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.I(new A.l8($.P5(),new C.cI_(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aRL.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a5.l(0.35),B.eX,28),new A.a9(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dyc(new A.dx(v+"_full_"+u,x.W),!1,u,!1,w.gaMT(),v+"_full")
w=v}else w=new C.aL_(t.r,s)}else w=new C.aG7(m,s)
else w=D.ddX
return A.t(s,A.cl(n,A.fS(A.w(A.a([new C.aRM(m,l,s),A.I(w,1),new C.aRK(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,s,s,new A.r(s,s,o,q,p,D.a03,B.p),s,r*2.05,s,B.bF,s,s,r)}}
C.aRM.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dD(r)
r=A.hL(r)
w=new A.dE(q,r)
v=w.gJv()===0?12:w.gJv()
r=B.b.bh(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j6)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mR,s,s,s),B.bD,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aO1,B.es,D.aNe,B.es,D.aO5],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.X(B.L_,B.a5.l(0.9),s,s,12),B.es,A.I(A.j(u.c,s,s,B.aD,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.aw,s,s,s,s,s,D.aDV,s,s,s)}}
C.aL_.prototype={
C(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.X(B.AB,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.eP(D.aRs,D.cWa,this.c,A.es(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aG(B.a5.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.j,B.yL,w,w,w,w,w,w,w,w,1/0)}}
C.aRK.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ax2(B.B_,"YouTube",s===0,r,new C.cXy(u))
s=u.ax2(B.kq,"Device",s===1,r,new C.cXz(u))
w=r?"Power off":"Power on"
v=r?D.Zl:D.aLi
return A.t(t,A.H(A.a([q,B.an,s,B.bD,A.aL(t,t,t,t,A.X(v,r?B.bE:B.fO,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,D.aDF,t,t,t)},
ax2(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bp
else w=f?B.a5:B.az
v=f&&g?B.a5.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aJ(!1,B.V,!0,u,A.aP(!1,A.m(10),!0,new A.J(B.np,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a9),1)}}
C.aMf.prototype={
C(d){return D.atm}}
C.aG7.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.lL,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tH("Serial",u.c),q=w.tH("Model",u.d),p=w.tH("Device ID",u.e),o=w.tH("IMEI",u.r),n=w.tH("MAC",u.f),m=w.tH("OS",u.w+" "+u.x),l=w.tH("Location",u.y+", "+u.z),k=w.tH("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tH("Timezone",u.at)
u=u.ax
return A.eg(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tH("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bf,v,v,B.al,!1)},
tH(d,e){var w=null
return new A.J(B.cX,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.j(e,w,w,w,w,w,w,D.cO5,w,w,w)],x.p),B.F,B.i,B.k,0,B.q),w)}}
C.K1.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ql.prototype={
gaMT(){var w=this.c
return w===D.ae6||w===D.ae7||w===D.NW||w===D.ae8}}
C.a6y.prototype={
U(){return new C.aKV(null,null)}}
C.aKV.prototype={
a0(){this.a7()
var w=A.bF(null,B.vc,null,1,null,this)
w.n6(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWN()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dq(t,new A.r(t,t,t,t,t,new A.am(B.cI,B.cu,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bS),q=x.Y,p=u.d
p===$&&A.c()
p=A.cw(B.ic,p,t)
w=B.e.l(0.92)
q=A.aI(new A.d3(new A.b2(p,new A.bl(0.72,1,q),q.j("b2<bk.T>")),!1,A.X(B.jK,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nf
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aMk(s,t),r,q,A.aQ(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aQ(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aQ(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aE(B.ak,t,B.bc,B.y,s,t)}}
C.aMk.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ko(u,B.N,new C.cMM(this),B.ca,B.bM,!0,w,w,new C.cMN(this),w)
return new C.Fk(v,w)}}
C.Fk.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.uR,B.SQ],x.O),B.jK)
break
case 1:w=new A.aN(A.a([B.yL,D.axV],x.O),B.lp)
break
case 2:w=new A.aN(A.a([D.azs,D.axl],x.O),B.AJ)
break
case 3:w=new A.aN(A.a([B.W,B.du],x.O),B.AN)
break
case 4:w=new A.aN(A.a([B.aw,B.aN],x.O),B.pf)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.X(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.r(u,u,u,u,u,new A.am(B.aK,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akX.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Z(0,w.gdK())
w.aW$=null
w.a6()},
by(){this.bQ()
this.bL()
this.dL()}}
C.a6z.prototype={
U(){return new C.aga()}}
C.aga.prototype={
a7y(d,e){var w,v=C.bnZ(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlZ(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVV(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEY(){var w,v=this
if(v.w)return
v.p(new C.cIb(v))
w=v.e
if(w!=null)v.a7y(w,v.a.d)},
a0(){var w,v,u=this
u.a7()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aU()
u.d=w
try{$.Gu()
$.pG().uT(w,new C.cIk(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cId(v))
w=v.e
w.toString
v.a7y(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.ZC,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fS(A.aI(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1U(n,B.tu,w)],v)
if(o.f)w.push(A.fS(A.aI(new A.ab(28,28,D.auq,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bp,B.w,1)
q=A.X(B.L3,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eX(0,A.aJ(!1,B.V,!0,n,A.aP(!1,n,!0,A.aI(A.t(n,A.H(A.a([q,B.an,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.j,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Wb,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEX(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a9)))}v=C.bnZ(o.a.d)
if(v!=null)w.push(A.aQ(8,A.jp(D.aPx,D.d2I,new C.cIc(o),A.iO(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aE(B.ak,n,B.bc,B.y,w,n)}}
var z=a.updateTypes(["o(o8)","~()","JZ(R)","o8(a_<@,@>)","a1(o8)","a_<o,@>(o8)","aB<~>()","JY(R)","l8<K>(R,ql?,q?)","WJ(R,K)","tZ(R,ql?,q?)","Fk(R,an,dK?)"])
C.dhU.prototype={
$1(d){return new C.JZ(this.a,null)},
$S:z+2}
C.dhT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dW,B.W],j):A.a([B.e,B.av],j),h=A.a([new A.a9(0,B.G,B.a5.l(0.22),B.eX,32)],x.V),g=A.O(m?B.c7:B.a5.l(0.18),B.w,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.au.l(m?0.18:0.08)],j)
e=A.t(n,D.aMX,B.j,n,n,new A.r(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.w,1),n,n,n,B.at),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.am,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aL(n,n,n,n,A.X(B.d6,m?B.az:B.d0,n,n,n),n,n,n,new C.dhP(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.r(n,n,n,n,n,new A.am(B.ad,B.ag,B.H,j,n,n),B.p),n,n,n,B.IR,n,n,n)
e=A.ee(B.cG,A.a([new C.No("YouTube",B.KZ,m,n),new C.No("TikTok",B.lp,m,n),new C.No("Instagram",B.AJ,m,n),new C.No("Facebook",B.AN,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cq:B.iA,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bw
r=A.X(B.fx,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aI
u=A.w(A.a([e,B.aS,A.aM(n,B.S,!0,n,!0,B.y,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.bb(4,q,B.X),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aG(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.RA),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.a8,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.aa,n,n,n,n)],v),B.as,B.i,B.k,0,B.q)
e=A.jp(D.aN_,D.d6u,new C.dhQ(d),A.iO(n,n,n,n,n,n,n,n,n,n,n,m?B.bm:B.am,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dq(A.cl(f,A.w(A.a([j,new A.J(B.Ws,u,n),new A.J(D.aFc,A.H(A.a([e,B.bD,A.c8(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.ay,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhR(d),n,n),B.an,A.dN(D.aRb,D.d7f,new C.dhS(d,w),A.bz(B.a5,n,n,n,B.e,n,D.Wb,n,new A.bE(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.as,B.i,B.a1,0,B.q),B.aJ),new A.r(n,n,g,k,h,new A.am(B.aK,B.aR,B.H,i,n,n),B.p),B.bS),n)},
$S:87}
C.dhP.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhQ.prototype={
$0(){C.dya()
$.P5().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dhR.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhS.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.boa.prototype={
$1(d){return C.dyb(A.U(d,x.N,x.z))},
$S:z+3}
C.bob.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bo2.prototype={
$1(d){return d.c},
$S:z+0}
C.bo3.prototype={
$1(d){return d.r},
$S:z+0}
C.bo4.prototype={
$1(d){return d.f},
$S:z+0}
C.bo5.prototype={
$1(d){return d.at},
$S:z+0}
C.bo6.prototype={
$1(d){return d.c},
$S:z+0}
C.bo7.prototype={
$1(d){return d.r},
$S:z+0}
C.bo8.prototype={
$1(d){return d.f},
$S:z+0}
C.bo9.prototype={
$1(d){return d.at},
$S:z+0}
C.bo1.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bo0.prototype={
$1(d){return B.b.bh(B.l.hv(d,16),2,"0").toUpperCase()},
$S:88}
C.cI3.prototype={
$0(){},
$S:0}
C.cI2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cI0.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cI1.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cI4.prototype={
$1(d){return new C.JY(this.a,null)},
$S:z+7}
C.cI8.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cI9.prototype={
$3(d,e,f){return new A.l8($.Gs(),new C.cI7(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cI7.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.De(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a5.l(0.12)
s=A.m(12)
r=A.O(B.a5.l(0.35),B.w,1)
q=A.X(B.jK,B.a5,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Gs().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.an,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d9,B.h4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cl(s,new A.j4(1.7777777777777777,C.dyc(new A.dx("fleet_master_"+r,x.W),!0,r,!0,j.gaMT(),"fleet_master"),k),B.aJ),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vT(0,B.y,k,B.E,k,k,k,k,!1,k,B.al,!1,A.a([new A.ky(new A.J(B.IJ,A.w(u,B.F,B.i,B.k,0,B.q),k),k),new A.oi(D.aDi,A.aB6(new A.nx(new C.cI6(i,j),J.a2(i.d),!1,!0,!0,A.ts(),k),D.cHn),k)],w))},
$S:1682}
C.cI6.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WJ(v,e,J.a2(w.d),new C.cI5(w,v),this.b,null)},
$S:z+9}
C.cI5.prototype={
$0(){return this.a.bpb(this.b)},
$S:0}
C.cIa.prototype={
$0(){this.a.US()
return null},
$S:0}
C.cHY.prototype={
$0(){return A.a7(this.a,!1).ey()},
$S:0}
C.cHZ.prototype={
$0(){C.Zy(this.a,$.bo_)
return null},
$S:0}
C.cI_.prototype={
$3(d,e,f){return A.fd(new C.cHX(this.a,e))},
$S:z+10}
C.cHX.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cA(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aRL(u,s.a.c,s.e,s.d,new C.cHU(s),new C.cHV(s),new C.cHW(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),v,B.E,B.oS,v,v,B.al),v,v,v)},
$S:1683}
C.cHU.prototype={
$0(){var w=this.a.c
w.toString
C.Zy(w,$.bo_)
return null},
$S:0}
C.cHV.prototype={
$1(d){var w=this.a
return w.p(new C.cHT(w,d))},
$S:33}
C.cHT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHW.prototype={
$0(){var w=this.a
return w.p(new C.cHS(w))},
$S:0}
C.cHS.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cXy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMM.prototype={
$3(d,e,f){return new C.Fk(this.a.c,null)},
$S:z+11}
C.cMN.prototype={
$3(d,e,f){if(f==null)return e
return new A.aE(B.ak,null,B.bc,B.y,A.a([new C.Fk(this.a.c,null),D.atB],x.p),null)},
$C:"$3",
$R:3,
$S:210}
C.cIb.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cIk.prototype={
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
w.a7y(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hh(v,"load",new C.cIh(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cIi(w),!1,u)
A.bN(B.kk,new C.cIj(w),x.H)
w=w.e
w.toString
return w},
$S:523}
C.cIh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cIg(w))},
$S:46}
C.cIg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cIi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cIf(w))},
$S:46}
C.cIf.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cIj.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cIe(w))},
$S:12}
C.cIe.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cId.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cIc.prototype={
$0(){var w,v=C.bnZ(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kP.SC(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dek.prototype={
$1(d){var w,v,u,t,s=new A.ET([],[]).IK(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1684};(function aliases(){var w=C.akX.prototype
w.aWN=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag9.prototype,"gaxb","bmH",1)
w(u,"gbnh","bni",1)
w(u,"gbpL","bpM",6)
w(C.aga.prototype,"gbEX","bEY",1)
v(C,"eex","dy9",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yy,[C.dhU,C.dhT,C.boa,C.bob,C.bo2,C.bo3,C.bo4,C.bo5,C.bo6,C.bo7,C.bo8,C.bo9,C.bo1,C.bo0,C.cI4,C.cI9,C.cI7,C.cI_,C.cHV,C.cMM,C.cMN,C.cIk,C.cIh,C.cIi,C.dek])
v(A.a0_,[C.dhP,C.dhQ,C.dhR,C.dhS,C.cI3,C.cI2,C.cI0,C.cI1,C.cI8,C.cI5,C.cIa,C.cHY,C.cHZ,C.cHU,C.cHT,C.cHW,C.cHS,C.cXy,C.cXz,C.cIb,C.cIg,C.cIf,C.cIj,C.cIe,C.cId,C.cIc])
v(A.aw,[C.No,C.WJ,C.aJR,C.aRL,C.aRM,C.aL_,C.aRK,C.aMf,C.aG7,C.aMk,C.Fk])
v(A.an,[C.o8,C.ql])
v(A.ae,[C.JZ,C.JY,C.a6y,C.a6z])
v(A.af,[C.ag9,C.aKU,C.akX,C.aga])
v(A.a00,[C.cI6,C.cHX])
u(C.K1,A.aH2)
u(C.aKV,C.akX)
w(C.akX,A.ed)})()
A.dBF(b.typeUniverse,JSON.parse('{"JZ":{"ae":[],"q":[]},"WJ":{"aw":[],"q":[]},"JY":{"ae":[],"q":[]},"No":{"aw":[],"q":[]},"ag9":{"af":["JZ"]},"aJR":{"aw":[],"q":[]},"aKU":{"af":["JY"]},"aRL":{"aw":[],"q":[]},"aRM":{"aw":[],"q":[]},"aL_":{"aw":[],"q":[]},"aRK":{"aw":[],"q":[]},"aMf":{"aw":[],"q":[]},"aG7":{"aw":[],"q":[]},"a6y":{"ae":[],"q":[]},"Fk":{"aw":[],"q":[]},"aKV":{"af":["a6y"]},"aMk":{"aw":[],"q":[]},"a6z":{"ae":[],"q":[]},"aga":{"af":["a6z"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<o8>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("ad<o8>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o3"),_:w("Db"),k:w("o8"),N:w("o"),Y:w("bl<aa>"),W:w("dx<o>"),J:w("l8<K>"),j:w("l8<ql?>"),E:w("xr<cM>"),q:w("Xv"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Zl=new A.M(983224,"MaterialIcons",!1)
D.aPF=new A.a8(D.Zl,48,B.bp,null,null,null)
D.cNJ=new A.S(!0,B.cq,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cV4=new A.C("Powered off",null,D.cNJ,null,null,null,null,null,null,null,null,null)
D.bL3=w([D.aPF,B.Q,D.cV4],x.p)
D.aAG=new A.eK(B.al,B.i,B.a1,B.o,null,B.q,null,0,D.bL3,null)
D.atm=new A.dn(B.N,null,null,D.aAG,null)
D.cH1=new A.ab(18,18,B.Sy,null)
D.atB=new A.dn(B.N,null,null,D.cH1,null)
D.auq=new A.ha(2,null,null,null,null,B.a6,null,null,null,null)
D.axl=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axV=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azs=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD8=new A.V(0,3,0,3)
D.aDi=new A.V(10,0,10,88)
D.aDF=new A.V(12,6,12,10)
D.aDV=new A.V(14,8,14,6)
D.Wb=new A.V(18,12,18,12)
D.aFc=new A.V(20,8,20,20)
D.WQ=new A.V(8,6,15,8)
D.aLi=new A.M(983222,"MaterialIcons",!1)
D.aMX=new A.a8(B.jK,26,B.a5,null,null,null)
D.aN_=new A.a8(B.YA,18,null,null,null,null)
D.aNe=new A.a8(B.rJ,14,B.a6,null,null,null)
D.aLA=new A.M(983420,"MaterialIcons",!1)
D.aO1=new A.a8(D.aLA,14,B.a6,null,null,null)
D.aJI=new A.M(62895,"MaterialIcons",!1)
D.aO5=new A.a8(D.aJI,14,B.a6,null,null,null)
D.aPx=new A.a8(B.rB,16,B.a6,null,null,null)
D.aRb=new A.a8(B.jf,20,null,null,null,null)
D.aRs=new A.a8(B.h8,16,null,null,null,null)
D.bOH=w([B.aN,B.W],x.O)
D.a03=new A.am(B.aK,B.aR,B.H,D.bOH,null,null)
D.cAG=new A.aN("NGMY OS","14.2.1")
D.czt=new A.aN("VirtualDroid","13.8.4")
D.czs=new A.aN("NGMY OS","15.0.0")
D.cAe=new A.aN("VirtualDroid","14.1.2")
D.czq=new A.aN("NGMY Tab OS","12.9.7")
D.czo=new A.aN("NGMY OS","13.5.3")
D.czd=new A.aN("VirtualDroid","15.2.0")
D.czQ=new A.aN("NGMY OS","14.8.1")
D.cAk=new A.aN("NGMY Tab OS","13.2.4")
D.cAQ=new A.aN("VirtualDroid","12.6.9")
D.cz6=new A.aN("NGMY OS","16.0.1")
D.cyW=new A.aN("VirtualDroid","14.9.0")
D.cAx=new A.aN("NGMY Tab OS","14.0.3")
D.czC=new A.aN("NGMY OS","13.1.8")
D.cz5=new A.aN("VirtualDroid","13.4.5")
D.czn=new A.aN("NGMY OS","15.3.2")
D.cAl=new A.aN("NGMY Tab OS","12.4.1")
D.cAA=new A.aN("VirtualDroid","16.1.0")
D.czP=new A.aN("NGMY OS","14.4.6")
D.cAH=new A.aN("VirtualDroid","15.0.8")
D.bNV=w([D.cAG,D.czt,D.czs,D.cAe,D.czq,D.czo,D.czd,D.czQ,D.cAk,D.cAQ,D.cz6,D.cyW,D.cAx,D.czC,D.cz5,D.czn,D.cAl,D.cAA,D.czP,D.cAH],A.b3("a3<+(o,o)>"))
D.cCW=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCu=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCp=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCy=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCl=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCA=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCY=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCm=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCt=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCC=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCk=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCQ=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCN=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCs=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCK=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCJ=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCj=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCx=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCH=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCM=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6D=w([D.cCW,D.cCu,D.cCp,D.cCy,D.cCl,D.cCA,D.cCY,D.cCm,D.cCt,D.cCC,D.cCk,D.cCQ,D.cCN,D.cCs,D.cCK,D.cCJ,D.cCj,D.cCx,D.cCH,D.cCM],A.b3("a3<+(o,o,aa,aa,o)>"))
D.bWZ=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ae6=new C.K1(0,"youtube")
D.ae7=new C.K1(1,"tiktok")
D.NW=new C.K1(2,"instagram")
D.ae8=new C.K1(3,"facebook")
D.csg=new C.K1(4,"other")
D.cGC=new A.ab(3,null,null,null)
D.cHn=new A.i6(4,10,8,0.52,null)
D.cWm=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKR=new A.aV(D.cWm,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cO5=new A.S(!0,B.e,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWa=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2I=new A.C("Open in YouTube",null,B.iX,null,null,null,null,null,null,null,null,null)
D.d6u=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7f=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7l=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddX=new C.aMf(null)})();(function staticFields(){$.dy8=20
$.ax2=null
$.bo_=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ejx","Gs",()=>A.aCV(0))
w($,"ejy","P5",()=>A.aCV(null))})()};
(a=>{a["HJyYLr51QmNiRdKeSGvLOzVEGRo="]=a.current})($__dart_deferred_initializers__);