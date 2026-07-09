((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
efP(d,e){A.a7(d,!1).cB(A.eD(new C.dhS(e),!0,null,y.H))},
Zv(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o
var $async$Zv=A.d(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=$.P6()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.aq()
t=new A.ak(new A.b8(o,B.aF,B.ax),u)
x=3
return A.b(A.dv(B.L,new C.dhR(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$Zv)
case 3:s=g
t.H$=u
t.K$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dW3(s)
if(r==null){d.F(y.q).f.R(D.cKT)
x=1
break}x=4
return A.b(A.bN(B.ie,null,y.H),$async$Zv)
case 4:if(d.e==null){x=1
break}o=B.l.X(e,1,999)
$.dy6=o
q=C.dVY(o)
o=$.Gt()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.dlY(r)
d.F(y.q).f.R(A.bu(null,null,null,null,null,B.y,null,A.e("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$Zv,w)},
dy9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
j=J.k(j==null?"":j)
x=d.h(0,"label")
x=J.k(x==null?"Virtual Device":x)
w=d.h(0,"serialNumber")
w=J.k(w==null?"":w)
v=d.h(0,"modelName")
v=J.k(v==null?"NGMY Virtual Phone":v)
u=d.h(0,"deviceId")
u=J.k(u==null?"":u)
t=d.h(0,"macAddress")
t=J.k(t==null?"":t)
s=d.h(0,"imei")
s=J.k(s==null?"":s)
r=d.h(0,"osName")
r=J.k(r==null?"NGMY OS":r)
q=d.h(0,"osVersion")
q=J.k(q==null?"1.0":q)
p=d.h(0,"virtualCity")
p=J.k(p==null?"Unknown":p)
o=d.h(0,"virtualCountry")
o=J.k(o==null?"":o)
n=A.aY(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.aY(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.o9(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
K0(d){return C.dW6(d)},
dW6(a2){var x=0,w=A.j(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$K0=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$K0)
case 3:h=a4
g=B.b.i(a2)
f=h.a
e=J.a4(f)
d=A.aK(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.I.aD(0,d,null)
x=y.a.b(s)&&J.cM(s)?10:11
break
case 10:l=J.eQ(s,y.f)
l=A.dr(l,new C.bnW(),l.$ti.j("F.E"),y.k)
k=A.P(l).j("ah<F.E>")
j=A.C(new A.ah(l,new C.bnX(),k),k.j("F.E"))
r=j
if(J.a2(r)>=20){v=r
x=1
break}q=C.dyb(r)
x=12
return A.b(C.K_(a2,q),$async$K0)
case 12:v=q
x=1
break
case 11:u=2
x=9
break
case 7:u=6
a0=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:p=A.aK(e.h(f,"ngmy_virtual_device_v1_"+g.toLowerCase()))
x=p!=null&&p.length!==0?13:14
break
case 13:u=16
o=B.I.aD(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.dy9(A.U(o,y.N,y.z))
m=C.dyb(A.a([n],y.e))
x=21
return A.b(C.K_(a2,m),$async$K0)
case 21:v=m
x=1
break
case 20:u=2
x=18
break
case 16:u=15
a1=t.pop()
x=18
break
case 15:x=2
break
case 18:case 14:r=C.dW4()
x=22
return A.b(C.K_(a2,r),$async$K0)
case 22:v=r
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K0,w)},
dyb(d){var x=A.Z(d).j("E<1,o>"),w=new A.E(d,new C.bnO(),x).ez(0),v=new A.E(d,new C.bnP(),x).ez(0),u=new A.E(d,new C.bnQ(),x).ez(0),t=new A.E(d,new C.bnR(),x).ez(0),s=A.bi(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.dlZ(null,r,v,u,w,t));++r}return s},
awX(d){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n
var $async$awX=A.d(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.K0(d),$async$awX)
case 3:u=f
t=y.N
s=J.cc(u)
r=s.df(u,new C.bnS(),t).ez(0)
q=s.df(u,new C.bnT(),t).ez(0)
p=s.df(u,new C.bnU(),t).ez(0)
o=s.df(u,new C.bnV(),t).ez(0)
n=C.dlZ(null,s.gE(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.K_(d,u),$async$awX)
case 4:v=n
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$awX,w)},
K_(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$K_=A.d(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$K_)
case 2:v=g
u=B.b.i(d)
t=J.b4(e,new C.bnN(),y.P)
t=A.C(t,t.$ti.j("a5.E"))
x=3
return A.b(v.au("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.I.aq(t,null)),$async$K_)
case 3:return A.h(null,w)}})
return A.i($async$K_,w)},
dW4(){var x,w=y.N,v=A.bb(w),u=A.bb(w),t=A.bb(w),s=A.bb(w),r=J.dw(20,y.k)
for(x=0;x<20;++x)r[x]=C.dlZ(x,x,u,t,v,s)
return r},
dlZ(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jA(),i=d==null,h=D.a6D[B.l.a5(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.a6D[B.l.a5(i?e+s:d,20)]
if(a1.t(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bF(256)
o=new A.E(q,new C.bnM(),A.Z(q).j("E<1,o>")).fw(0)
v="VND-"+B.b.aj(o,0,4)+"-"+B.b.aj(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bF(10)
u=B.h.fw(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.b.bh(B.l.hv(j.bF(256),16),2,"0")
t=B.h.bl(q,":").toUpperCase()
if(!a0.t(0,v)&&!f.t(0,u)&&!g.t(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.l.a5(e,20)
l=D.bX_[x]
k=D.bNV[x]
return new C.o9("vd_"+1000*Date.now()+"_"+e+"_"+j.bF(99999),"Device "+B.b.bh(B.l.n(e+1),2,"0"),v,l,C.dW5(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a4().a_())},
dW5(d,e){var x,w=J.dw(e,y.N)
for(x=0;x<e;++x)w[x]=B.b.bh(B.l.hv(d.bF(256),16),2,"0")
return B.h.fw(w)},
dhS:function dhS(d){this.a=d},
dhR:function dhR(d,e){this.a=d
this.b=e},
dhN:function dhN(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d,e){this.a=d
this.b=e},
No:function No(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o9:function o9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bnW:function bnW(){},
bnX:function bnX(){},
bnO:function bnO(){},
bnP:function bnP(){},
bnQ:function bnQ(){},
bnR:function bnR(){},
bnS:function bnS(){},
bnT:function bnT(){},
bnU:function bnU(){},
bnV:function bnV(){},
bnN:function bnN(){},
bnM:function bnM(){},
JZ:function JZ(d,e){this.c=d
this.a=e},
ag7:function ag7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHT:function cHT(){},
cHS:function cHS(d,e){this.a=d
this.b=e},
cHQ:function cHQ(d){this.a=d},
cHR:function cHR(d,e){this.a=d
this.b=e},
cHU:function cHU(d){this.a=d},
cHY:function cHY(d){this.a=d},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cHX:function cHX(d,e,f){this.a=d
this.b=e
this.c=f},
cHW:function cHW(d,e){this.a=d
this.b=e},
cHV:function cHV(d,e){this.a=d
this.b=e},
cI_:function cI_(d){this.a=d},
WG:function WG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJL:function aJL(d,e){this.c=d
this.a=e},
JY:function JY(d,e){this.c=d
this.a=e},
aKO:function aKO(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHN:function cHN(d){this.a=d},
cHO:function cHO(d){this.a=d},
cHP:function cHP(d){this.a=d},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHJ:function cHJ(d){this.a=d},
cHK:function cHK(d){this.a=d},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHL:function cHL(d){this.a=d},
cHH:function cHH(d){this.a=d},
aRD:function aRD(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRE:function aRE(d,e,f){this.c=d
this.d=e
this.a=f},
aKU:function aKU(d,e){this.c=d
this.a=e},
aRC:function aRC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXn:function cXn(d){this.a=d},
cXo:function cXo(d){this.a=d},
aM9:function aM9(d){this.a=d},
aG1:function aG1(d,e){this.c=d
this.a=e},
dW3(d){var x,w,v,u,t,s,r=null,q=B.b.i(d)
if(q.length===0)return r
x=B.b.W(q,"http")?q:"https://"+q
w=x.toLowerCase()
v=C.dW2(w)
if(v!=null)return new C.ql(x,C.dlX(v,!1),D.ae6,"YouTube","https://img.youtube.com/vi/"+v+"/hqdefault.jpg")
u=C.dW1(w)
if(u!=null)return new C.ql(x,"https://www.tiktok.com/player/v1/"+u+"?music_info=0&description=0",D.ae7,"TikTok",r)
t=C.dW0(x,w)
if(t!=null)return t
s=C.dW_(x,w)
if(s!=null)return s
if(B.b.t(w,"tiktok.com")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com")||B.b.t(w,"fb.watch")||B.b.t(w,"youtube.com")||B.b.t(w,"youtu.be"))return new C.ql(x,x,D.csh,"Video",r)
return r},
dW0(d,e){var x,w,v="/embed/captioned/?cr=1&v=14",u="Instagram",t=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(t!=null){x=t.b[1]
x.toString
return new C.ql(d,"https://www.instagram.com/reel/"+x+v,D.NW,u,null)}w=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(w!=null){x=w.b[1]
x.toString
return new C.ql(d,"https://www.instagram.com/p/"+x+v,D.NW,u,null)}return null},
dW_(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.ql(d,"https://www.facebook.com/plugins/video.php?href="+A.fi(2,d,B.bg,!1)+"&show_text=false&width=734",D.ae8,"Facebook",null)},
dW2(d){var x,w,v,u=[A.ap("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(x=0;x<3;++x){w=u[x].dm(d)
v=w==null?null:w.b[1]
if(v!=null&&v.length===11)return v}return null},
dW1(d){var x,w=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(w!=null)return w.b[1]
x=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return x==null?null:x.b[1]},
K1:function K1(d,e){this.a=d
this.b=e},
ql:function ql(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6x:function a6x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKP:function aKP(d,e){var _=this
_.d=$
_.d2$=d
_.aW$=e
_.c=_.a=null},
aMe:function aMe(d,e){this.c=d
this.a=e},
cMJ:function cMJ(d){this.a=d},
cMK:function cMK(d){this.a=d},
Fl:function Fl(d,e){this.c=d
this.a=e},
akV:function akV(){},
dya(d,e,f,g,h,i){return new C.a6y(i,f,h,e,g,d)},
een(d){var x=window
x.toString
A.fJ(x,"message",new C.dea(d),!1,y._)},
a6y:function a6y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ag8:function ag8(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cI0:function cI0(d){this.a=d},
cI9:function cI9(d){this.a=d},
cI6:function cI6(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI7:function cI7(d){this.a=d},
cI4:function cI4(d){this.a=d},
cI8:function cI8(d){this.a=d},
cI3:function cI3(d){this.a=d},
cI2:function cI2(d){this.a=d},
cI1:function cI1(d){this.a=d},
dea:function dea(d){this.a=d},
dVW(){var x,w,v
try{w=A.AL()
x=w.grT(w)
if(J.a2(x)!==0&&!J.v(x,"null")&&!J.cI(x,"file:"))return x}catch(v){}return"https://ngmy.org"},
dlX(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("iv_load_policy=3")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bl(x,"&")},
dy5(d){var x=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVX(d,e,f){var x,w,v=A.a6w(d)
if(v!=null){if(f){x=C.dVW()
w=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+v+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+x+"',\n          mute: "+w+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dy5(C.dlX(v,e))}return C.dy5(d)},
dVY(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVZ(d){var x
if($.P6().a==null)return!1
x=$.Gt().a
return d>=x&&d<x+4},
dy8(){var x=$.awW
if(x!=null)x.af(0)
$.awW=null
$.Gt().sv(0,0)},
dy7(){var x,w,v,u=$.P6()
if(u.a==null)return
x=$.awW
if(x!=null)x.af(0)
w=$.dy6
if(w<=4){u=u.a
u.toString
C.dlY(u)
return}x=$.Gt()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.dlY(u)},
dlY(d){var x=$.awW
if(x!=null)x.af(0)
x=120
switch(d.c.a){case 0:x=180
break
case 1:x=60
break
case 2:x=90
break
case 3:break
case 4:break
default:x=null}$.awW=A.dM(A.dq(0,0,0,0,0,x),C.eeC())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.No.prototype={
C(d){var x=null,w=this.e,v=w?B.aM:B.e,u=A.m(20),t=A.O(B.a4.l(0.25),B.w,1),s=A.X(this.d,B.a4,x,x,14)
return A.t(x,A.H(A.a([s,B.fT,A.e(this.c,x,x,x,x,x,x,A.l(x,x,w?B.a6:B.c4,x,x,x,x,x,x,x,x,11,x,x,B.O,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.o,x,B.i,B.a1,0,x,x),B.j,x,x,new A.r(v,x,t,u,x,x,B.p),x,x,x,B.fd,x,x,x)}}
C.o9.prototype={
aa(){var x=this
return A.u(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.JZ.prototype={
U(){return new C.ag7(A.a([],y.e))},
ge3(){return this.c}}
C.ag7.prototype={
a0(){var x=this
x.a7()
$.Gt().ap(0,x.gax_())
C.een(x.gbmR())
x.YJ()},
bmg(){if(this.c!=null)this.p(new C.cHT())},
bmS(){C.dy7()},
q(){$.Gt().Z(0,this.gax_())
C.dy8()
$.P6().sv(0,null)
this.a6()},
YJ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$YJ=A.d(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.K0(u.a.c),$async$YJ)
case 3:t=e
if(u.c==null){x=1
break}u.p(new C.cHS(u,t))
$.bnL=J.a2(t)
case 1:return A.h(v,w)}})
return A.i($async$YJ,w)},
UL(){var x=0,w=A.j(y.H),v,u=this,t
var $async$UL=A.d(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.p(new C.cHQ(u))
x=3
return A.b(C.awX(u.a.c),$async$UL)
case 3:t=e
if(u.c==null){x=1
break}u.p(new C.cHR(u,t))
$.bnL=J.a2(u.d)
u.c.F(y.q).f.R(A.bu(null,null,null,null,null,B.y,null,A.e("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
boK(d){var x=this.c
x.toString
A.a7(x,!1).cB(A.eD(new C.cHU(d),!1,null,y.H))},
bpk(){var x=this.c
x.toString
return C.Zv(x,J.a2(this.d))},
C(d){var x=this,w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.bv,t=A.aL(w,w,w,w,B.L9,w,w,w,new C.cHY(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a2(x.d)+")",r=y.p
s=A.H(A.a([t,A.I(new A.DM(A.H(A.a([A.I(new A.J(B.ja,A.e(s,w,1,B.aD,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.V,!0,w,A.aP(!1,w,!0,new A.J(B.bf,A.X(B.fN,B.a4,w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbpj(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w)
t=A.bZ(!0,A.w(A.a([new A.J(D.WQ,s,w),A.I(x.e?B.n5:new A.l7($.P6(),new C.cHZ(x,v),w,w,y.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0)
return A.c9(w,u,t,w,!1,!1,A.aqS(B.a4,B.Gt,B.mm,D.d7p,x.e?w:new C.cI_(x)),w)}}
C.WG.prototype={
C(d){var x,w=this,v=null,u=A.m(14),t=A.m(14),s=A.O(B.e.l(0.1),B.w,1),r=A.a([new A.a9(0,B.G,B.a4.l(0.18),B.dl,8)],y.V),q=A.m(10),p=w.c,o=w.r
if(o!=null){x=w.d
x=new C.a6x(o,!0,!C.dVZ(x),"Fold "+(B.l.aH(x,4)+1)+"/"+B.l.aH(w.e+4-1,4),v)
o=x}else o=A.t(v,A.w(A.a([A.X(B.jh,B.ne,v,v,22),B.aO,A.e("YouTube",v,v,v,v,v,v,A.l(v,v,B.e.l(0.7),v,v,v,v,v,v,v,v,7,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p),B.o,B.aW,B.k,0,B.q),B.j,B.yJ,v,v,v,v,v,v,v,v,1/0)
x=y.p
return A.aJ(!1,B.V,!0,v,A.aP(!1,u,!0,A.w(A.a([A.I(A.t(v,A.ci(q,A.fS(A.w(A.a([new C.aJL(p,v),A.I(o,1),A.t(v,A.H(A.a([A.X(B.B8,B.a4.l(0.85),v,v,9),D.cGE,A.e("Tap",v,v,v,v,v,v,A.l(v,v,B.e.l(0.5),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x),B.o,v,B.aW,B.k,0,v,v),B.j,B.aw,v,v,v,v,v,D.aD6,v,v,v)],x),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,v,v,new A.r(v,v,s,t,r,D.a03,B.p),v,v,v,B.ht,v,v,v),1),B.aO,A.e(p.b,v,1,B.aD,v,v,v,A.l(v,v,A.A(d).ax.k3,v,v,v,v,v,v,v,v,9,v,v,B.K,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.e(p.y,v,1,B.aD,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.55),v,v,v,v,v,v,v,v,8,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.e(p.c,v,1,B.aD,v,v,v,A.l(v,v,B.a4.l(0.85),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v)],x),B.o,B.i,B.k,0,B.q),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a9)}}
C.aJL.prototype={
C(d){var x=null
return A.t(x,A.H(A.a([A.I(A.e(B.h.gav(this.c.c.split("-")),x,x,B.aD,x,x,x,A.l(x,x,B.e.l(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.X(B.rI,B.e.l(0.45),x,x,7)],y.p),B.o,x,B.i,B.k,0,x,x),B.j,B.aw,x,x,x,x,x,B.WG,x,x,x)}}
C.JY.prototype={
U(){return new C.aKO()}}
C.aKO.prototype={
C(d){var x=null,w=A.A(d).ax.a===B.C,v=w?B.fc:B.bv,u=A.aL(x,x,x,x,B.L9,x,x,x,new C.cHN(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.c9(x,v,A.bZ(!0,A.w(A.a([new A.J(D.WQ,A.H(A.a([u,A.I(new A.DM(A.H(A.a([A.I(new A.J(B.ja,A.e(t.b+" \xb7 "+t.c,x,1,B.aD,x,x,x,A.l(x,x,w?B.e:B.W,x,x,x,x,x,x,x,x,14,x,x,B.D,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aJ(!1,B.V,!0,x,A.aP(!1,x,!0,new A.J(B.bf,A.X(B.fN,B.a4,x,x,28),x),B.cN,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cHO(d),x,x,x,x,x,x,x),B.j,B.L,0,x,x,x,x,x,B.a9)],s),B.o,x,B.i,B.k,0,x,x),x,x,x),1)],s),B.o,x,B.i,B.k,0,x,x),x),A.I(new A.l7($.P6(),new C.cHP(this),x,x,y.j),1)],s),B.o,B.i,B.k,0,B.q),!1,B.aj,!0,!0),x,!1,!1,x,x)}}
C.aRD.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.m(36),q=A.a([new A.a9(0,B.G,B.a4.l(0.35),B.eW,28),new A.a9(0,B.G,B.A.l(0.45),B.d4,18)],y.V),p=A.O(B.e.l(0.12),B.w,2),o=A.m(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
w=C.dya(new A.dx(w+"_full_"+v,y.W),!1,v,!1,x.gaMC(),w+"_full")
x=w}else x=new C.aKU(u.r,t)}else x=new C.aG1(n,t)
else x=D.de0
return A.t(t,A.ci(o,A.fS(A.w(A.a([new C.aRE(n,m,t),A.I(x,1),new C.aRC(u.f,m,u.w,u.x,t)],y.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aJ),B.j,t,t,new A.r(t,t,p,r,q,D.a03,B.p),t,s*2.05,t,B.bF,t,t,s)}}
C.aRE.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.dD(s)
s=A.hL(s)
x=new A.dE(r,s)
w=x.gJw()===0?12:x.gJw()
s=B.b.bh(B.l.n(s),2,"0")
r=(r<12?B.h3:B.j7)===B.h3?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.H(A.a([A.e(""+w+":"+s+" "+r,t,t,t,t,t,t,B.mQ,t,t,t),B.bD,A.e(v.b,t,t,t,t,t,t,A.l(t,t,B.e.l(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bU,D.aO3,B.ef,D.aNg,B.ef,D.aO7],u),B.o,t,B.i,B.k,0,t,t)],u)
if(this.d)B.h.A(r,A.a([B.aO,A.H(A.a([A.X(B.KZ,B.a4.l(0.9),t,t,12),B.ef,A.I(A.e(v.c,t,t,B.aD,t,t,t,A.l(t,t,B.e.l(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.e(v.y,t,t,t,t,t,t,A.l(t,t,B.e.l(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.o,t,B.i,B.k,0,t,t)],u))
return A.t(t,A.w(r,B.o,B.i,B.k,0,B.q),B.j,B.aw,t,t,t,t,t,D.aDT,t,t,t)}}
C.aKU.prototype={
C(d){var x=null
return A.t(x,A.aH(A.w(A.a([A.X(B.Az,B.e.l(0.35),x,x,40),B.Y,A.e("No video yet",x,x,x,x,x,x,A.l(x,x,B.e.l(0.6),x,x,x,x,x,x,x,x,12,x,x,B.O,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aO,A.e("Tap search above to paste a link",x,x,x,x,x,x,A.l(x,x,B.e.l(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aN,A.eN(D.aRt,D.cWd,this.c,A.es(x,x,x,x,x,x,x,x,x,B.a4,x,x,x,x,x,new A.aG(B.a4.l(0.5),1,B.w,-1),x,x,x,x))],y.p),B.o,B.i,B.a1,0,B.q),x,x,x),B.j,B.yJ,x,x,x,x,x,x,x,x,1/0)}}
C.aRC.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.awR(B.AY,"YouTube",t===0,s,new C.cXn(v))
t=v.awR(B.kr,"Device",t===1,s,new C.cXo(v))
x=s?"Power off":"Power on"
w=s?D.Zl:D.aLj
return A.t(u,A.H(A.a([r,B.an,t,B.bD,A.aL(u,u,u,u,A.X(w,s?B.bE:B.fz,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dA)],y.p),B.o,u,B.i,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,D.aDD,u,u,u)},
awR(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bp
else x=f?B.a4:B.az
w=f&&g?B.a4.l(0.15):B.L
v=A.m(10)
u=g?h:t
return A.I(A.aJ(!1,B.V,!0,v,A.aP(!1,A.m(10),!0,new A.J(B.no,A.w(A.a([A.X(d,x,t,t,18),A.e(e,t,t,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.o,B.i,B.a1,0,B.q),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.j,w,0,t,t,t,t,t,B.a9),1)}}
C.aM9.prototype={
C(d){return D.atk}}
C.aG1.prototype={
C(d){var x=this,w=null,v=x.c,u=A.e(v.b,w,w,w,w,w,w,B.lL,w,w,w),t=A.e("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,w,w,A.l(w,w,B.e.l(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.tF("Serial",v.c),r=x.tF("Model",v.d),q=x.tF("Device ID",v.e),p=x.tF("IMEI",v.r),o=x.tF("MAC",v.f),n=x.tF("OS",v.w+" "+v.x),m=x.tF("Location",v.y+", "+v.z),l=x.tF("Coordinates",B.m.a3(v.Q,4)+", "+B.m.a3(v.as,4)),k=x.tF("Timezone",v.at)
v=v.ax
return A.ei(A.a([u,B.aO,t,B.ab,s,r,q,p,o,n,m,l,k,x.tF("Provisioned",v.length>=10?B.b.aj(v,0,10):v)],y.p),w,B.bf,w,w,B.ak,!1)},
tF(d,e){var x=null
return new A.J(B.cY,A.w(A.a([A.e(d.toUpperCase(),x,x,x,x,x,x,A.l(x,x,B.e.l(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.cy,A.e(e,x,x,x,x,x,x,D.cO8,x,x,x)],y.p),B.F,B.i,B.k,0,B.q),x)}}
C.K1.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ql.prototype={
gaMC(){var x=this.c
return x===D.ae6||x===D.ae7||x===D.NW||x===D.ae8}}
C.a6x.prototype={
U(){return new C.aKP(null,null)}}
C.aKP.prototype={
a0(){this.a7()
var x=A.bF(null,B.vb,null,1,null,this)
x.n6(0,!0)
this.d=x},
q(){var x=this.d
x===$&&A.c()
x.q()
this.aWo()},
C(d){var x,w,v=this,u=null,t=v.a.c,s=A.dp(u,new A.r(u,u,u,u,u,new A.am(B.cI,B.cu,B.H,A.a([B.L,B.A.l(0.55)],y.O),u,u),B.p),B.bS),r=y.Y,q=v.d
q===$&&A.c()
q=A.cw(B.id,q,u)
x=B.e.l(0.92)
r=A.aH(new A.d3(new A.b2(q,new A.bn(0.72,1,r),r.j("b2<bl.T>")),!1,A.X(B.jh,x,u,u,20),u),u,u,u)
q=v.a.e?B.e.l(0.22):B.ne
x=A.m(4)
w=v.a.e?"WAIT":"LIVE"
t=A.a([new C.aMe(t,u),s,r,A.aQ(u,A.t(u,A.e(w,u,u,u,u,u,u,A.l(u,u,B.e,u,u,u,u,u,u,u,u,5,u,u,B.D,u,u,!0,u,0.4,u,u,u,u,u,u),u,u,u),B.j,u,u,new A.r(q,u,u,x,u,u,B.p),u,u,u,new A.V(3,1,3,1),u,u,u),u,u,u,2,2,u)],y.p)
s=v.a
s=s.f
r=B.e.l(0.75)
t.push(A.aQ(u,A.e(s,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,5,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,3,u,3,u))
s=v.a.c
r=B.e.l(0.85)
t.push(A.aQ(3,A.e(s.d,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,6,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,3,u,u,u))
return new A.aF(B.al,u,B.bc,B.y,t,u)}}
C.aMe.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k1(v,B.N,new C.cMJ(this),B.c8,B.bL,!0,x,x,new C.cMK(this),x)
return new C.Fl(w,x)}}
C.Fl.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aO(A.a([B.uQ,B.SO],y.O),B.jh)
break
case 1:x=new A.aO(A.a([B.yJ,D.axT],y.O),B.lq)
break
case 2:x=new A.aO(A.a([D.azq,D.axj],y.O),B.AI)
break
case 3:x=new A.aO(A.a([B.W,B.du],y.O),B.AM)
break
case 4:x=new A.aO(A.a([B.aw,B.aM],y.O),B.pe)
break
default:x=v}w=x.a
return A.t(v,A.aH(A.X(x.b,B.a4.l(0.55),v,v,28),v,v,v),B.j,v,v,new A.r(v,v,v,v,v,new A.am(B.aK,B.aR,B.H,w,v,v),B.p),v,v,v,v,v,v,v)}}
C.akV.prototype={
q(){var x=this,w=x.aW$
if(w!=null)w.Z(0,x.gdK())
x.aW$=null
x.a6()},
by(){this.bP()
this.bK()
this.dL()}}
C.a6y.prototype={
U(){return new C.ag8()}}
C.ag8.prototype={
a7o(d,e){var x,w=A.a6w(e),v=this.a,u=v.x&&!this.w
if(w!=null&&v.f){d.removeAttribute("srcdoc")
d.src=C.dlX(w,u)
return}if(v.f){x=e.toLowerCase()
v=B.b.t(x,"tiktok.com/player")||B.b.t(x,"instagram.com")||B.b.t(x,"facebook.com/plugins")}else v=!1
if(v){d.removeAttribute("src")
d.srcdoc=C.dVX(e,u,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEs(){var x,w=this
if(w.w)return
w.p(new C.cI0(w))
x=w.e
if(x!=null)w.a7o(x,w.a.d)},
a0(){var x,w,v=this
v.a7()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aT()
v.d=x
try{$.Gv()
$.pG().uS(x,new C.cI9(v),!0)}catch(w){v.r=!0
v.f=!1}},
b2(d){var x,w=this
w.bf(d)
if(d.d!==w.a.d&&w.e!=null){w.p(new C.cI2(w))
x=w.e
x.toString
w.a7o(x,w.a.d)}},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.r){p.a.toString
x=B.e.l(0.55)
p.a.toString
w=y.p
x=A.a([A.X(B.ZB,x,o,o,36)],w)
p.a.toString
B.h.A(x,A.a([B.Q,A.e("Could not play this link.\nUse a public YouTube watch URL.",o,o,o,o,o,o,A.l(o,o,B.e.l(0.65),o,o,o,o,o,o,o,o,11,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),B.U,o,o)],w))
return A.fS(A.aH(new A.J(new A.V(12,12,12,12),A.w(x,B.o,B.i,B.a1,0,B.q),o),o,o,o),B.A,!0)}p.a.toString
x=p.d
x===$&&A.c()
w=y.p
x=A.a([A.a1S(o,B.tt,x)],w)
if(p.f)x.push(A.fS(A.aH(new A.ab(28,28,D.auo,o),o,o,o),B.cR,!0))
if(p.a.x&&!p.w&&!p.f&&!p.r){v=B.A.l(0.35)
u=B.A.l(0.72)
t=A.m(14)
s=A.O(B.bp,B.w,1)
r=A.X(B.L2,B.e.l(0.9),o,o,22)
q=B.e.l(0.92)
p.a.toString
x.push(A.eV(0,A.aJ(!1,B.V,!0,o,A.aP(!1,o,!0,A.aH(A.t(o,A.H(A.a([r,B.an,A.e("Tap to play music",o,o,o,o,o,o,A.l(o,o,q,o,o,o,o,o,o,o,o,14,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.o,o,B.i,B.a1,0,o,o),B.j,o,o,new A.r(u,o,s,t,o,o,B.p),o,o,o,D.Wa,o,o,o),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gbEr(),o,o,o,o,o,o,o),B.j,v,0,o,o,o,o,o,B.a9)))}w=A.a6w(p.a.d)
if(w!=null)x.push(A.aQ(8,A.jq(D.aPz,D.d2L,new C.cI1(p),A.iP(o,o,B.A.l(0.55),o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.fd,o,o,o,o,o,o,o,o)),o,o,o,8,o,o))
return new A.aF(B.al,o,B.bc,B.y,x,o)}}
var z=a.updateTypes(["o(o9)","~()","JZ(R)","o9(a_<@,@>)","a1(o9)","a_<o,@>(o9)","aB<~>()","JY(R)","l7<K>(R,ql?,q?)","WG(R,K)","u_(R,ql?,q?)","Fl(R,an,dL?)"])
C.dhS.prototype={
$1(d){return new C.JZ(this.a,null)},
$S:z+2}
C.dhR.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.A(d).ax.a===B.C,m=A.aE(d,o,y.w).w,l=A.m(28),k=y.O,j=n?A.a([B.dV,B.W],k):A.a([B.e,B.av],k),i=A.a([new A.a9(0,B.G,B.a4.l(0.22),B.eW,32)],y.V),h=A.O(n?B.c7:B.a4.l(0.18),B.w,1),g=A.m(28),f=B.a4.l(n?0.35:0.14)
k=A.a([f,B.au.l(n?0.18:0.08)],k)
f=A.t(o,D.aMZ,B.j,o,o,new A.r(B.a4.l(0.18),o,A.O(B.a4.l(0.45),B.w,1),o,o,o,B.at),o,48,o,o,o,o,48)
x=A.e("Paste video link",o,o,o,o,o,o,A.l(o,o,n?B.e:B.W,o,o,o,o,o,o,o,o,18,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.w(A.a([x,B.aO,A.e("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",o,o,o,o,o,o,A.l(o,o,n?B.a6:B.am,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,B.i,B.k,0,B.q),1)
k=A.t(o,A.H(A.a([f,B.f5,x,A.aL(o,o,o,o,A.X(B.d2,n?B.az:B.cR,o,o,o),o,o,o,new C.dhN(d),o,o,o,o,o,o)],w),B.o,o,B.i,B.k,0,o,o),B.j,o,o,new A.r(o,o,o,o,o,new A.am(B.ae,B.ag,B.H,k,o,o),B.p),o,o,o,B.IQ,o,o,o)
f=A.eg(B.cG,A.a([new C.No("YouTube",B.KY,n,o),new C.No("TikTok",B.lq,n,o),new C.No("Instagram",B.AI,n,o),new C.No("Facebook",B.AM,n,o)],w),B.cn,8,8)
x=this.b
v=A.l(o,o,n?B.e:B.W,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.cm:B.hJ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aM:B.bv
s=A.X(B.fx,B.a4.l(0.85),o,o,o)
r=A.m(16)
q=A.m(16)
p=n?B.c7:B.aI
v=A.w(A.a([f,B.aS,A.aM(o,B.S,!0,o,!0,B.y,o,A.aN(),x,o,o,o,o,o,2,A.bq(o,new A.ba(4,r,B.X),o,o,o,o,o,o,!0,new A.ba(4,q,new A.aG(p,1,B.w,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.ba(4,A.m(16),B.Gh),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.E,!0,o,!0,o,!1,o,B.a7,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.Z,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a_,o,B.aa,o,o,o,o)],w),B.as,B.i,B.k,0,B.q)
f=A.jq(D.aN1,D.d6y,new C.dhO(d),A.iP(o,o,o,o,o,o,o,o,o,o,o,n?B.bm:B.am,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.J(new A.V(12,0,12,12+m.f.d),A.dp(A.ci(g,A.w(A.a([k,new A.J(B.Ws,v,o),new A.J(D.aFc,A.H(A.a([f,B.bD,A.c8(!1,A.e("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.a6:B.ay,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,o,new C.dhP(d),o,o),B.an,A.dN(D.aRc,D.d7j,new C.dhQ(d,x),A.bz(B.a4,o,o,o,B.e,o,D.Wa,o,new A.bE(A.m(14),B.X),o,o,o))],w),B.o,o,B.i,B.k,0,o,o),o)],w),B.as,B.i,B.a1,0,B.q),B.aJ),new A.r(o,o,h,l,i,new A.am(B.aK,B.aR,B.H,j,o,o),B.p),B.bS),o)},
$S:80}
C.dhN.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhO.prototype={
$0(){C.dy8()
$.P6().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dhP.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhQ.prototype={
$0(){var x=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(x)
return null},
$S:0}
C.bnW.prototype={
$1(d){return C.dy9(A.U(d,y.N,y.z))},
$S:z+3}
C.bnX.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnO.prototype={
$1(d){return d.c},
$S:z+0}
C.bnP.prototype={
$1(d){return d.r},
$S:z+0}
C.bnQ.prototype={
$1(d){return d.f},
$S:z+0}
C.bnR.prototype={
$1(d){return d.at},
$S:z+0}
C.bnS.prototype={
$1(d){return d.c},
$S:z+0}
C.bnT.prototype={
$1(d){return d.r},
$S:z+0}
C.bnU.prototype={
$1(d){return d.f},
$S:z+0}
C.bnV.prototype={
$1(d){return d.at},
$S:z+0}
C.bnN.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnM.prototype={
$1(d){return B.b.bh(B.l.hv(d,16),2,"0").toUpperCase()},
$S:82}
C.cHT.prototype={
$0(){},
$S:0}
C.cHS.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cHQ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHR.prototype={
$0(){var x=this.a,w=A.C(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cHU.prototype={
$1(d){return new C.JY(this.a,null)},
$S:z+7}
C.cHY.prototype={
$0(){return A.a7(this.a,!1).ex()},
$S:0}
C.cHZ.prototype={
$3(d,e,f){return new A.l7($.Gt(),new C.cHX(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cHX.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.Dg(d,l,y.Q)
x=x==null?l:x.glz()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.a4.l(0.12)
t=A.m(12)
s=A.O(B.a4.l(0.35),B.w,1)
r=A.X(B.jh,B.a4,l,l,18)
q=k.d
p=J.a2(m.a.d)
o=$.Gt().a
n=B.m.X(o+4,1,p)
u=A.a([A.t(l,A.H(A.a([r,B.an,A.I(A.e("Now playing "+q+" \xb7 "+("Devices "+A.p(o+1)+"\u2013"+n+" of "+p),l,l,l,l,l,l,A.l(l,l,m.c?B.e:B.W,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.o,l,B.i,B.k,0,l,l),B.j,l,l,new A.r(u,l,s,t,l,l,B.p),l,l,B.d9,B.h5,l,l,1/0)],x)
if(w){t=A.m(16)
s=k.b
B.h.A(u,A.a([A.ci(t,new A.j5(1.7777777777777777,C.dya(new A.dx("fleet_master_"+s,y.W),!0,s,!0,k.gaMC(),"fleet_master"),l),B.aJ),B.ab],x))}B.h.A(v,u)}j=j?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(m.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.e(j,l,l,l,l,l,l,A.l(l,l,A.A(d).ax.k3.l(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
j=m.a
return A.vV(0,B.y,l,B.E,l,l,l,l,!1,l,B.ak,!1,A.a([new A.kx(new A.J(B.II,A.w(v,B.F,B.i,B.k,0,B.q),l),l),new A.oj(D.aDg,A.aAZ(new A.nx(new C.cHW(j,k),J.a2(j.d),!1,!0,!0,A.tt(),l),D.cHp),l)],x))},
$S:1685}
C.cHW.prototype={
$2(d,e){var x=this.a,w=J.n(x.d,e)
return new C.WG(w,e,J.a2(x.d),new C.cHV(x,w),this.b,null)},
$S:z+9}
C.cHV.prototype={
$0(){return this.a.boK(this.b)},
$S:0}
C.cI_.prototype={
$0(){this.a.UL()
return null},
$S:0}
C.cHN.prototype={
$0(){return A.a7(this.a,!1).ex()},
$S:0}
C.cHO.prototype={
$0(){C.Zv(this.a,$.bnL)
return null},
$S:0}
C.cHP.prototype={
$3(d,e,f){return A.fc(new C.cHM(this.a,e))},
$S:z+10}
C.cHM.prototype={
$2(d,e){var x,w=null,v=B.m.X(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aH(A.cz(A.w(A.a([A.e(s,w,w,w,w,w,w,A.l(w,w,A.A(d).ax.k3.l(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.U,w,w),B.aS,new C.aRD(v,t.a.c,t.e,t.d,new C.cHJ(t),new C.cHK(t),new C.cHL(t),u,w)],y.p),B.o,B.i,B.k,0,B.q),w,B.E,B.oR,w,w,B.ak),w,w,w)},
$S:1686}
C.cHJ.prototype={
$0(){var x=this.a.c
x.toString
C.Zv(x,$.bnL)
return null},
$S:0}
C.cHK.prototype={
$1(d){var x=this.a
return x.p(new C.cHI(x,d))},
$S:32}
C.cHI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHL.prototype={
$0(){var x=this.a
return x.p(new C.cHH(x))},
$S:0}
C.cHH.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cXn.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXo.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMJ.prototype={
$3(d,e,f){return new C.Fl(this.a.c,null)},
$S:z+11}
C.cMK.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.al,null,B.bc,B.y,A.a([new C.Fl(this.a.c,null),D.atz],y.p),null)},
$C:"$3",
$R:3,
$S:211}
C.cI0.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cI9.prototype={
$1(d){var x=this.a,w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
w.allowFullscreen=!0
w.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
w.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
x.e=w
x.a7o(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.fJ(w,"load",new C.cI6(x),!1,v)
w=x.e
w.toString
A.fJ(w,"error",new C.cI7(x),!1,v)
A.bN(B.kl,new C.cI8(x),y.H)
x=x.e
x.toString
return x},
$S:520}
C.cI6.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.cI5(x))},
$S:46}
C.cI5.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.cI4(x))},
$S:46}
C.cI4.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cI8.prototype={
$0(){var x=this.a
if(x.c!=null&&x.f)x.p(new C.cI3(x))},
$S:12}
C.cI3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI2.prototype={
$0(){var x=this.a
x.f=!0
x.w=x.r=!1},
$S:0}
C.cI1.prototype={
$0(){var x,w=A.a6w(this.a.a.d)
if(w==null)return
x=window
x.toString
B.kQ.SB(x,"https://www.youtube.com/watch?v="+w,"_blank")},
$S:0}
C.dea.prototype={
$1(d){var x,w,v,u,t=new A.EU([],[]).IL(d.data,!0),s=t==null?null:J.k(t),r=s==null?"":s
if(J.v(r,"ngmy-vd-ended")){this.a.$0()
return}v=d.origin.toLowerCase()
if(!B.b.t(v,"youtube.com")&&!B.b.t(v,"youtube-nocookie.com"))return
try{x=B.I.aD(0,r,null)
t=y.f
if(t.b(x)){w=J.n(x,"info")
if(J.v(J.n(x,"event"),"onStateChange")&&J.v(w,0)){this.a.$0()
return}if(J.v(J.n(x,"event"),"infoDelivery")&&t.b(w)&&J.v(J.n(w,"playerState"),0))this.a.$0()}}catch(u){}},
$S:1687};(function aliases(){var x=C.akV.prototype
x.aWo=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.ag7.prototype,"gax_","bmg",1)
x(v,"gbmR","bmS",1)
x(v,"gbpj","bpk",6)
x(C.ag8.prototype,"gbEr","bEs",1)
w(C,"eeC","dy7",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.yz,[C.dhS,C.dhR,C.bnW,C.bnX,C.bnO,C.bnP,C.bnQ,C.bnR,C.bnS,C.bnT,C.bnU,C.bnV,C.bnN,C.bnM,C.cHU,C.cHZ,C.cHX,C.cHP,C.cHK,C.cMJ,C.cMK,C.cI9,C.cI6,C.cI7,C.dea])
w(A.a_X,[C.dhN,C.dhO,C.dhP,C.dhQ,C.cHT,C.cHS,C.cHQ,C.cHR,C.cHY,C.cHV,C.cI_,C.cHN,C.cHO,C.cHJ,C.cHI,C.cHL,C.cHH,C.cXn,C.cXo,C.cI0,C.cI5,C.cI4,C.cI8,C.cI3,C.cI2,C.cI1])
w(A.av,[C.No,C.WG,C.aJL,C.aRD,C.aRE,C.aKU,C.aRC,C.aM9,C.aG1,C.aMe,C.Fl])
w(A.an,[C.o9,C.ql])
w(A.ae,[C.JZ,C.JY,C.a6x,C.a6y])
w(A.af,[C.ag7,C.aKO,C.akV,C.ag8])
w(A.a_Y,[C.cHW,C.cHM])
v(C.K1,A.aGX)
v(C.aKP,C.akV)
x(C.akV,A.ef)})()
A.dBF(b.typeUniverse,JSON.parse('{"JZ":{"ae":[],"q":[]},"WG":{"av":[],"q":[]},"JY":{"ae":[],"q":[]},"No":{"av":[],"q":[]},"ag7":{"af":["JZ"]},"aJL":{"av":[],"q":[]},"aKO":{"af":["JY"]},"aRD":{"av":[],"q":[]},"aRE":{"av":[],"q":[]},"aKU":{"av":[],"q":[]},"aRC":{"av":[],"q":[]},"aM9":{"av":[],"q":[]},"aG1":{"av":[],"q":[]},"a6x":{"ae":[],"q":[]},"Fl":{"av":[],"q":[]},"aKP":{"af":["a6x"]},"aMe":{"av":[],"q":[]},"a6y":{"ae":[],"q":[]},"ag8":{"af":["a6y"]}}'))
var y=(function rtii(){var x=A.b3
return{V:x("a3<a9>"),O:x("a3<x>"),e:x("a3<o9>"),s:x("a3<o>"),p:x("a3<q>"),t:x("a3<K>"),X:x("ad<o9>"),a:x("ad<@>"),P:x("a_<o,@>"),f:x("a_<@,@>"),w:x("o4"),_:x("Dd"),k:x("o9"),N:x("o"),Y:x("bn<aa>"),W:x("dx<o>"),J:x("l7<K>"),j:x("l7<ql?>"),E:x("uY<d0>"),q:x("Xs"),z:x("@"),Q:x("an?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Zl=new A.M(983224,"MaterialIcons",!1)
D.aPH=new A.a8(D.Zl,48,B.bp,null,null,null)
D.cNM=new A.S(!0,B.cm,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cV7=new A.B("Powered off",null,D.cNM,null,null,null,null,null,null,null,null,null)
D.bL4=x([D.aPH,B.Q,D.cV7],y.p)
D.aAE=new A.eJ(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bL4,null)
D.atk=new A.dn(B.N,null,null,D.aAE,null)
D.cH3=new A.ab(18,18,B.Sw,null)
D.atz=new A.dn(B.N,null,null,D.cH3,null)
D.auo=new A.hb(2,null,null,null,null,B.a6,null,null,null,null)
D.axj=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axT=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azq=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aD6=new A.V(0,3,0,3)
D.aDg=new A.V(10,0,10,88)
D.aDD=new A.V(12,6,12,10)
D.aDT=new A.V(14,8,14,6)
D.Wa=new A.V(18,12,18,12)
D.aFc=new A.V(20,8,20,20)
D.WQ=new A.V(8,6,15,8)
D.aLj=new A.M(983222,"MaterialIcons",!1)
D.aMZ=new A.a8(B.jh,26,B.a4,null,null,null)
D.aN1=new A.a8(B.YA,18,null,null,null,null)
D.aNg=new A.a8(B.rI,14,B.a6,null,null,null)
D.aLB=new A.M(983420,"MaterialIcons",!1)
D.aO3=new A.a8(D.aLB,14,B.a6,null,null,null)
D.aJI=new A.M(62895,"MaterialIcons",!1)
D.aO7=new A.a8(D.aJI,14,B.a6,null,null,null)
D.aPz=new A.a8(B.rA,16,B.a6,null,null,null)
D.aRc=new A.a8(B.jg,20,null,null,null,null)
D.aRt=new A.a8(B.fN,16,null,null,null,null)
D.bOH=x([B.aM,B.W],y.O)
D.a03=new A.am(B.aK,B.aR,B.H,D.bOH,null,null)
D.cAI=new A.aO("NGMY OS","14.2.1")
D.czv=new A.aO("VirtualDroid","13.8.4")
D.czu=new A.aO("NGMY OS","15.0.0")
D.cAg=new A.aO("VirtualDroid","14.1.2")
D.czs=new A.aO("NGMY Tab OS","12.9.7")
D.czq=new A.aO("NGMY OS","13.5.3")
D.czf=new A.aO("VirtualDroid","15.2.0")
D.czS=new A.aO("NGMY OS","14.8.1")
D.cAm=new A.aO("NGMY Tab OS","13.2.4")
D.cAS=new A.aO("VirtualDroid","12.6.9")
D.cz8=new A.aO("NGMY OS","16.0.1")
D.cyY=new A.aO("VirtualDroid","14.9.0")
D.cAz=new A.aO("NGMY Tab OS","14.0.3")
D.czE=new A.aO("NGMY OS","13.1.8")
D.cz7=new A.aO("VirtualDroid","13.4.5")
D.czp=new A.aO("NGMY OS","15.3.2")
D.cAn=new A.aO("NGMY Tab OS","12.4.1")
D.cAC=new A.aO("VirtualDroid","16.1.0")
D.czR=new A.aO("NGMY OS","14.4.6")
D.cAJ=new A.aO("VirtualDroid","15.0.8")
D.bNV=x([D.cAI,D.czv,D.czu,D.cAg,D.czs,D.czq,D.czf,D.czS,D.cAm,D.cAS,D.cz8,D.cyY,D.cAz,D.czE,D.cz7,D.czp,D.cAn,D.cAC,D.czR,D.cAJ],A.b3("a3<+(o,o)>"))
D.cCY=new A.eH(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cCw=new A.eH(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cCr=new A.eH(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cCA=new A.eH(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cCn=new A.eH(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCC=new A.eH(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cD_=new A.eH(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cCo=new A.eH(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cCv=new A.eH(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCE=new A.eH(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cCm=new A.eH(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCS=new A.eH(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCP=new A.eH(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cCu=new A.eH(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCM=new A.eH(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCL=new A.eH(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cCl=new A.eH(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cCz=new A.eH(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCJ=new A.eH(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCO=new A.eH(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6D=x([D.cCY,D.cCw,D.cCr,D.cCA,D.cCn,D.cCC,D.cD_,D.cCo,D.cCv,D.cCE,D.cCm,D.cCS,D.cCP,D.cCu,D.cCM,D.cCL,D.cCl,D.cCz,D.cCJ,D.cCO],A.b3("a3<+(o,o,aa,aa,o)>"))
D.bX_=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.ae6=new C.K1(0,"youtube")
D.ae7=new C.K1(1,"tiktok")
D.NW=new C.K1(2,"instagram")
D.ae8=new C.K1(3,"facebook")
D.csh=new C.K1(4,"other")
D.cGE=new A.ab(3,null,null,null)
D.cHp=new A.i6(4,10,8,0.52,null)
D.cWp=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKT=new A.aU(D.cWp,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.y,null)
D.cO8=new A.S(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cWd=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2L=new A.B("Open in YouTube",null,B.iX,null,null,null,null,null,null,null,null,null)
D.d6y=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7j=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7p=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.de0=new C.aM9(null)})();(function staticFields(){$.dy6=20
$.awW=null
$.bnL=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ejD","Gt",()=>A.aCO(0))
x($,"ejE","P6",()=>A.aCO(null))})()};
(a=>{a["6/joZUwKDr5MVPyWNxHjmjhkJug="]=a.current})($__dart_deferred_initializers__);