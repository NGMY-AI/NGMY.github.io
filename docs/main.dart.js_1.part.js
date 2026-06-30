((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dwJ(d,e){A.aa(d,!1).cI(A.ek(new C.cHo(e),!0,null,y.H))},
Si(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$Si=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.Jn()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.al()
t=new A.ab(new A.aL(o,B.Z,B.W),u)
x=3
return A.b(A.dg(B.B,null,new C.cHn(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$Si)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dfD(s)
if(r==null){d.E(y.q).f.O(D.bly)
x=1
break}x=4
return A.b(A.bY(B.fh,null,y.H),$async$Si)
case 4:if(d.e==null){x=1
break}o=B.p.aS(e,1,999)
$.cVi=o
q=C.dfy(o)
o=$.xy()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cKT(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.w,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Si,w)},
cVl(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
n=A.b2(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.b2(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.mc(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
EZ(d){return C.dfG(d)},
dfG(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EZ=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$EZ)
case 3:h=a4
g=B.a.i(a2)
f=h.a
e=J.a3(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.u.aC(0,d,null)
x=y.a.b(s)&&J.cB(s)?10:11
break
case 10:l=J.ic(s,y.f)
l=A.ea(l,new C.b4K(),l.$ti.k("I.E"),y.k)
k=A.P(l).k("a7<I.E>")
j=A.E(new A.a7(l,new C.b4L(),k),k.k("I.E"))
r=j
if(J.a2(r)>=20){v=r
x=1
break}q=C.cVm(r)
x=12
return A.b(C.EY(a2,q),$async$EZ)
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
case 9:case 5:p=A.aE(e.h(f,"ngmy_virtual_device_v1_"+g.toLowerCase()))
x=p!=null&&p.length!==0?13:14
break
case 13:u=16
o=B.u.aC(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.cVl(A.L(o,y.N,y.z))
m=C.cVm(A.a([n],y.e))
x=21
return A.b(C.EY(a2,m),$async$EZ)
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
case 18:case 14:r=C.dfE()
x=22
return A.b(C.EY(a2,r),$async$EZ)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$EZ,w)},
cVm(d){var x=A.Q(d).k("A<1,m>"),w=new A.A(d,new C.b4C(),x).es(0),v=new A.A(d,new C.b4D(),x).es(0),u=new A.A(d,new C.b4E(),x).es(0),t=new A.A(d,new C.b4F(),x).es(0),s=A.bh(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cKU(null,r,v,u,w,t));++r}return s},
aln(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$aln=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.EZ(d),$async$aln)
case 3:u=f
t=y.N
s=J.cm(u)
r=s.dc(u,new C.b4G(),t).es(0)
q=s.dc(u,new C.b4H(),t).es(0)
p=s.dc(u,new C.b4I(),t).es(0)
o=s.dc(u,new C.b4J(),t).es(0)
n=C.cKU(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.EY(d,u),$async$aln)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$aln,w)},
EY(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$EY=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$EY)
case 2:v=g
u=B.a.i(d)
t=J.b5(e,new C.b4B(),y.P)
t=A.E(t,t.$ti.k("a4.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.u.ah(t,null)),$async$EY)
case 3:return A.f(null,w)}})
return A.h($async$EY,w)},
dfE(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.fl(20,y.k)
for(x=0;x<20;++x)r[x]=C.cKU(x,x,u,t,v,s)
return r},
cKU(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jN(),i=d==null,h=D.Pi[B.p.aH(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Pi[B.p.aH(i?e+s:d,20)]
if(a1.n(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.ed(256)
o=new A.A(q,new C.b4A(),A.Q(q).k("A<1,m>")).h5(0)
v="VND-"+B.a.aj(o,0,4)+"-"+B.a.aj(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.ed(10)
u=B.d.h5(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bR(B.p.kG(j.ed(256),16),2,"0")
t=B.d.bh(q,":").toUpperCase()
if(!a0.n(0,v)&&!f.n(0,u)&&!g.n(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.aH(e,20)
l=D.aJ7[x]
k=D.aEu[x]
return new C.mc("vd_"+1000*Date.now()+"_"+e+"_"+j.ed(99999),"Device "+B.a.bR(B.p.q(e+1),2,"0"),v,l,C.dfF(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.S(Date.now(),0,!1).a0().Y())},
dfF(d,e){var x,w=J.fl(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bR(B.p.kG(d.ed(256),16),2,"0")
return B.d.h5(w)},
cHo:function cHo(d){this.a=d},
cHn:function cHn(d,e){this.a=d
this.b=e},
cHj:function cHj(d){this.a=d},
cHk:function cHk(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHm:function cHm(d,e){this.a=d
this.b=e},
HP:function HP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mc:function mc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b4K:function b4K(){},
b4L:function b4L(){},
b4C:function b4C(){},
b4D:function b4D(){},
b4E:function b4E(){},
b4F:function b4F(){},
b4G:function b4G(){},
b4H:function b4H(){},
b4I:function b4I(){},
b4J:function b4J(){},
b4B:function b4B(){},
b4A:function b4A(){},
EW:function EW(d,e){this.c=d
this.a=e},
a6Y:function a6Y(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cdz:function cdz(){},
cdy:function cdy(d,e){this.a=d
this.b=e},
cdw:function cdw(d){this.a=d},
cdx:function cdx(d,e){this.a=d
this.b=e},
cdA:function cdA(d){this.a=d},
cdE:function cdE(d){this.a=d},
cdF:function cdF(d,e){this.a=d
this.b=e},
cdD:function cdD(d,e,f){this.a=d
this.b=e
this.c=f},
cdC:function cdC(d,e){this.a=d
this.b=e},
cdB:function cdB(d,e){this.a=d
this.b=e},
cdG:function cdG(d){this.a=d},
Q1:function Q1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
awK:function awK(d,e){this.c=d
this.a=e},
EV:function EV(d,e){this.c=d
this.a=e},
axB:function axB(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d){this.a=d},
cdv:function cdv(d){this.a=d},
cds:function cds(d,e){this.a=d
this.b=e},
cdp:function cdp(d){this.a=d},
cdq:function cdq(d){this.a=d},
cdo:function cdo(d,e){this.a=d
this.b=e},
cdr:function cdr(d){this.a=d},
cdn:function cdn(d){this.a=d},
aDR:function aDR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDS:function aDS(d,e,f){this.c=d
this.d=e
this.a=f},
axI:function axI(d,e){this.c=d
this.a=e},
aDQ:function aDQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cpn:function cpn(d){this.a=d},
cpo:function cpo(d){this.a=d},
ayO:function ayO(d){this.a=d},
ato:function ato(d,e){this.c=d
this.a=e},
dfD(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.Z(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d6(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.nX(x,C.b4y(u,!1),D.VZ,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dfC(w)
if(t!=null)return new C.nX(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.W_,"TikTok",q,q)
s=C.dfB(x,w)
if(s!=null)return s
r=C.dfA(x,w)
if(r!=null)return r
if(B.a.n(w,"tiktok.com")||B.a.n(w,"instagram.com")||B.a.n(w,"facebook.com")||B.a.n(w,"fb.watch")||B.a.n(w,"youtube.com")||B.a.n(w,"youtu.be"))return new C.nX(x,x,D.b7p,"Video",q,q)
return q},
dfB(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d6(e)
if(s!=null){x=s.b[1]
x.toString
return new C.nX(d,"https://www.instagram.com/reel/"+x+u,D.Dv,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d6(e)
if(w!=null){x=w.b[1]
x.toString
return new C.nX(d,"https://www.instagram.com/p/"+x+u,D.Dv,t,v,v)}return v},
dfA(d,e){if(!B.a.n(e,"facebook.com")&&!B.a.n(e,"fb.watch")&&!B.a.n(e,"fb.com"))return null
return new C.nX(d,"https://www.facebook.com/plugins/video.php?href="+A.eZ(2,d,B.aI,!1)+"&show_text=false&width=734",D.W0,"Facebook",null,null)},
dfC(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d6(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d6(d)
return x==null?null:x.b[1]},
F_:function F_(d,e){this.a=d
this.b=e},
nX:function nX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zq:function Zq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axC:function axC(d,e){var _=this
_.d=$
_.cX$=d
_.b_$=e
_.c=_.a=null},
ayS:function ayS(d,e){this.c=d
this.a=e},
cg5:function cg5(d){this.a=d},
cg6:function cg6(d){this.a=d},
AI:function AI(d,e){this.c=d
this.a=e},
abk:function abk(){},
dvC(d){var x=window
x.toString
A.h3(x,"message",new C.cEf(d),!1,y._)},
EX:function EX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axD:function axD(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
cdM:function cdM(d){this.a=d},
cdK:function cdK(d){this.a=d},
cdJ:function cdJ(d){this.a=d},
cdL:function cdL(d){this.a=d},
cdI:function cdI(d){this.a=d},
cdH:function cdH(d){this.a=d},
cEf:function cEf(d){this.a=d},
b4y(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bh(x,"&")},
cVf(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d6(d)
return x==null?null:x.b[1]},
cVg(d){var x=A.bx(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bx(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
cVh(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dfx(d,e,f){var x=C.cVf(d)
if(x!=null){if(f)return C.cVh(x,e,!0)
return C.cVg(C.b4y(x,e))}return C.cVg(d)},
dfy(d){if(d<=4)return 0
return B.p.b5(d-1,4)*4},
dfz(d){var x
if($.Jn().a==null)return!1
x=$.xy().a
return d>=x&&d<x+4},
cVk(){var x=$.alm
if(x!=null)x.ae(0)
$.alm=null
$.xy().sv(0,0)},
cVj(){var x,w,v,u=$.Jn()
if(u.a==null)return
x=$.alm
if(x!=null)x.ae(0)
w=$.cVi
if(w<=4){u=u.a
u.toString
C.cKT(u)
return}x=$.xy()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cKT(u)},
cKT(d){var x=$.alm
if(x!=null)x.ae(0)
x=120
switch(d.c.a){case 0:x=180
break
case 1:x=60
break
case 2:x=90
break
case 3:break
case 4:break
default:x=null}$.alm=A.dr(A.d7(0,0,0,0,x),C.dvL())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.HP.prototype={
C(d){var x=null,w=this.e,v=w?B.ag:B.c,u=A.n(20),t=A.a0(B.N.u(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.eF,A.j(this.c,x,x,x,x,A.l(x,x,w?B.V:B.dS,x,x,x,x,x,x,x,x,11,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.O,0,x,x),B.h,x,x,new A.v(v,x,t,u,x,x,B.l),x,x,x,B.hd,x,x,x)}}
C.mc.prototype={
ag(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.EW.prototype={
U(){return new C.a6Y(A.a([],y.e))},
giD(){return this.c}}
C.a6Y.prototype={
a_(){var x=this
x.a6()
$.xy().ad(0,x.ganH())
C.dvC(x.gb6S())
x.Pq()},
b6j(){if(this.c!=null)this.p(new C.cdz())},
b6T(){C.cVj()},
l(){$.xy().V(0,this.ganH())
C.cVk()
$.Jn().sv(0,null)
this.a5()},
Pq(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Pq=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.EZ(u.a.c),$async$Pq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new C.cdy(u,t))
$.b4z=J.a2(t)
case 1:return A.f(v,w)}})
return A.h($async$Pq,w)},
Pa(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Pa=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.p(new C.cdw(u))
x=3
return A.b(C.aln(u.a.c),$async$Pa)
case 3:t=e
if(u.c==null){x=1
break}u.p(new C.cdx(u,t))
$.b4z=J.a2(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.w,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Pa,w)},
b8K(d){var x=this.c
x.toString
A.aa(x,!1).cI(A.ek(new C.cdA(d),!1,null,y.H))},
b9c(){var x=this.c
x.toString
return C.Si(x,J.a2(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.P,u=v?B.dl:B.dm,t=A.aT(w,w,w,w,B.BT,w,w,w,new C.cdE(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a2(x.d)+")",r=y.p
s=A.G(A.a([t,A.K(new A.zj(A.G(A.a([A.K(new A.N(B.ih,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aV(!1,B.L,!0,w,A.b1(!1,w,!0,new A.N(B.aG,A.a5(B.eR,B.N,w,w,28),w),B.bR,!0,w,w,w,w,w,w,w,w,w,w,w,x.gb9b(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a1)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cZ(!0,A.D(A.a([new A.N(D.KB,s,w),A.K(x.e?B.iQ:new A.hS($.Jn(),new C.cdF(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0)
return A.cr(w,u,t,w,!1,!1,A.agA(B.N,B.yb,B.nv,D.byY,x.e?w:new C.cdG(x)),w)}}
C.Q1.prototype={
b4o(d){var x,w=$.xy().a,v=this.d
if(C.dfz(v)){v=this.c.a
x=d.gaAf()
return new C.EX(v+"_mini",d.gaAf(),!0,d.gad6(),!1,new A.dz(v+"_"+x+"_"+A.o(w),y.W))}return new C.Zq(d,!0,!0,"Fold "+(B.p.b5(v,4)+1)+"/"+B.p.b5(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.a0(B.c.u(0.1),B.o,1),s=A.a([new A.am(0,B.A,B.N.u(0.18),B.cl,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aV(!1,B.L,!0,w,A.b1(!1,v,!0,A.D(A.a([A.K(A.w(w,A.cV(r,A.jS(A.D(A.a([new C.awK(q,w),A.K(p!=null?x.b4o(p):A.w(w,A.D(A.a([A.a5(B.hf,B.l4,w,w,22),B.aj,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.u(0.7),w,w,w,w,w,w,w,w,7,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.as,B.f,0,B.k),B.h,B.tl,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vf,B.N.u(0.85),w,w,9),D.bi2,A.j("Tap",w,w,w,w,A.l(w,w,B.c.u(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.as,B.f,0,w,w),B.h,B.a7,w,w,w,w,w,D.agB,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.v(w,w,t,u,s,D.Ol,B.l),w,w,w,B.ey,w,w,w),1),B.aj,A.j(q.b,1,B.af,w,w,A.l(w,w,A.U(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.U(d).ax.k3.u(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.N.u(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a1)}}
C.awK.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.K(A.j(B.d.gap(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.u(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.q8,B.c.u(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a7,x,x,x,x,x,B.Kp,x,x,x)}}
C.EV.prototype={
U(){return new C.axB()}}
C.axB.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.P,v=w?B.dl:B.dm,u=A.aT(x,x,x,x,B.BT,x,x,x,new C.cdt(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cr(x,v,A.cZ(!0,A.D(A.a([new A.N(D.KB,A.G(A.a([u,A.K(new A.zj(A.G(A.a([A.K(new A.N(B.ih,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.v,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aV(!1,B.L,!0,x,A.b1(!1,x,!0,new A.N(B.aG,A.a5(B.eR,B.N,x,x,28),x),B.bR,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cdu(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a1)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.K(new A.hS($.Jn(),new C.cdv(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0),x,!1,!1,x,x)}}
C.aDR.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.am(0,B.A,B.N.u(0.35),B.eE,28),new A.am(0,B.A,B.q.u(0.45),B.cU,18)],y.V),p=A.a0(B.c.u(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.EX(w+"_full",v,!1,x.gad6(),!1,new A.dz(w+"_full_"+v,y.W))
x=v}else x=new C.axI(u.r,t)}else x=new C.ato(n,t)
else x=D.bLi
return A.w(t,A.cV(o,A.jS(A.D(A.a([new C.aDS(n,m,t),A.K(x,1),new C.aDQ(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.v(t,t,p,r,q,D.Ol,B.l),t,s*2.05,t,B.b9,t,t,s)}}
C.aDS.prototype={
C(d){var x,w,v,u,t=null,s=new A.S(Date.now(),0,!1),r=A.eK(s)
s=A.im(s)
x=new A.da(r,s)
w=x.gEU()===0?12:x.gEU()
s=B.a.bR(B.p.q(s),2,"0")
r=(r<12?B.eh:B.fG)===B.eh?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.kz,t,t,t),B.bb,A.j(v.b,t,t,t,t,A.l(t,t,B.c.u(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bj,D.aqc,B.ea,D.apq,B.ea,D.aqg],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a5(B.BO,B.N.u(0.9),t,t,12),B.ea,A.K(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.u(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.u(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.D(r,B.j,B.e,B.f,0,B.k),B.h,B.a7,t,t,t,t,t,D.ahk,t,t,t)}}
C.axI.prototype={
C(d){var x=null
return A.w(x,A.bd(A.D(A.a([A.a5(B.v3,B.c.u(0.35),x,x,40),B.E,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.u(0.6),x,x,x,x,x,x,x,x,12,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.u(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eC(D.at4,D.bx3,this.c,A.el(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aK(B.N.u(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.tl,x,x,x,x,x,x,x,x,1/0)}}
C.aDQ.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.anB(B.N0,"YouTube",t===0,s,new C.cpn(v))
t=v.anB(B.jd,"Device",t===1,s,new C.cpo(v))
x=s?"Power off":"Power on"
w=s?D.N1:D.anH
return A.w(u,A.G(A.a([r,B.Y,t,B.bb,A.aT(u,u,u,u,A.a5(w,s?B.bF:B.dn,u,u,u),u,u,u,v.f,u,u,u,u,x,B.d9)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a7,u,u,u,u,u,D.ah6,u,u,u)},
anB(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bk
else x=f?B.N:B.a9
w=f&&g?B.N.u(0.15):B.B
v=A.n(10)
u=g?h:t
return A.K(A.aV(!1,B.L,!0,v,A.b1(!1,A.n(10),!0,new A.N(B.k8,A.D(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.G,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a1),1)}}
C.ayO.prototype={
C(d){return D.a8t}}
C.ato.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.og,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.u(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pN("Serial",v.c),r=x.pN("Model",v.d),q=x.pN("Device ID",v.e),p=x.pN("IMEI",v.r),o=x.pN("MAC",v.f),n=x.pN("OS",v.w+" "+v.x),m=x.pN("Location",v.y+", "+v.z),l=x.pN("Coordinates",B.i.a2(v.Q,4)+", "+B.i.a2(v.as,4)),k=x.pN("Timezone",v.at)
v=v.ax
return A.ej(A.a([u,B.aj,t,B.T,s,r,q,p,o,n,m,l,k,x.pN("Provisioned",v.length>=10?B.a.aj(v,0,10):v)],y.p),w,B.aG,w,w,B.X,!1)},
pN(d,e){var x=null
return new A.N(B.ca,A.D(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.u(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.j(e,x,x,x,x,D.boC,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.F_.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.nX.prototype={
gaAf(){var x=this.f
if(x!=null&&x.length!==0)return C.b4y(x,!0)
return this.b},
gad6(){var x=this.c
return x===D.VZ||x===D.W_||x===D.Dv||x===D.W0}}
C.Zq.prototype={
U(){return new C.axC(null,null)}}
C.axC.prototype={
a_(){this.a6()
var x=A.bI(null,B.pv,null,1,null,this)
x.o3(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aKN()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.ft(v,new A.v(v,v,v,v,v,new A.aD(B.e1,B.cp,B.J,A.a([B.B,B.q.u(0.55)],y.O),v,v),B.l),B.ck),s=y.Y,r=w.d
r===$&&A.c()
r=A.cK(B.h5,r,v)
x=B.c.u(0.92)
s=A.bd(new A.dV(new A.bg(r,new A.bu(0.72,1,s),s.k("bg<bq.T>")),!1,A.a5(B.hf,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.u(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.ayS(u,v),t,s,A.bH(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.v,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.v(r,v,v,x,v,v,B.l),v,v,v,new A.V(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.u(0.75)
u.push(A.bH(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.u(0.85)
u.push(A.bH(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bm(B.al,v,B.cx,B.m,u,v)}}
C.ayS.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k_(v,new C.cg5(this),B.bi,!0,x,x,new C.cg6(this),x)
return new C.AI(w,x)}}
C.AI.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.tv,B.HC],y.O),B.hf)
break
case 1:x=new A.aN(A.a([B.tl,D.abO],y.O),B.ik)
break
case 2:x=new A.aN(A.a([D.adh,D.abl],y.O),B.v6)
break
case 3:x=new A.aN(A.a([B.a_,B.dT],y.O),B.Bu)
break
case 4:x=new A.aN(A.a([B.a7,B.ag],y.O),B.lI)
break
default:x=v}w=x.a
return A.w(v,A.bd(A.a5(x.b,B.N.u(0.55),v,v,28),v,v,v),B.h,v,v,new A.v(v,v,v,v,v,new A.aD(B.ax,B.aH,B.J,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.abk.prototype={
l(){var x=this,w=x.b_$
if(w!=null)w.V(0,x.gdO())
x.b_$=null
x.a5()},
br(){this.bO()
this.bI()
this.dP()}}
C.EX.prototype={
U(){return new C.axD()}}
C.axD.prototype={
agG(d,e){var x,w,v=this,u="mute=1",t=C.cVf(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.cVh(t,B.a.n(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b4y(t,B.a.n(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.n(x,"tiktok.com/player")||B.a.n(x,"instagram.com")||B.a.n(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dfx(e,B.a.n(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
a_(){var x,w,v=this
v.a6()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.Jo()
$.ou().tN(x,new C.cdM(v),!0)}catch(w){v.r=!0
v.f=!1}},
aO(d){var x,w=this
w.b2(d)
if(d.d!==w.a.d&&w.e!=null){w.p(new C.cdH(w))
x=w.e
x.toString
w.agG(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.u(0.5)
return A.jS(A.bd(A.a5(B.Nb,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ahb(u,B.qQ,x)],y.p)
if(v.f)x.push(A.jS(A.bd(new A.ap(w,w,D.a8S,u),u,u,u),B.bO,!0))
return new A.bm(B.al,u,B.cx,B.m,x,u)}}
var z=a.updateTypes(["m(mc)","~()","EW(R)","mc(W<@,@>)","a_(mc)","W<m,@>(mc)","at<~>()","EV(R)","hS<T>(R,nX?,q?)","Q1(R,T)","t1(R,nX?,q?)","AI(R,ah,de?)"])
C.cHo.prototype={
$1(d){return new C.EW(this.a,null)},
$S:z+2}
C.cHn.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.U(d).ax.a===B.P,m=A.az(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cq,B.a_],k):A.a([B.c,B.aa],k),i=A.a([new A.am(0,B.A,B.N.u(0.22),B.eE,32)],y.V),h=A.a0(n?B.bl:B.N.u(0.18),B.o,1),g=A.n(28),f=B.N.u(n?0.35:0.14)
k=A.a([f,B.Q.u(n?0.18:0.08)],k)
f=A.w(o,D.ap7,B.h,o,o,new A.v(B.N.u(0.18),o,A.a0(B.N.u(0.45),B.o,1),o,o,o,B.an),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.a_,o,o,o,o,o,o,o,o,18,o,o,B.v,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.K(A.D(A.a([x,B.aj,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.V:B.aS,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fw,x,A.aT(o,o,o,o,A.a5(B.cL,n?B.a9:B.bO,o,o,o),o,o,o,new C.cHj(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.v(o,o,o,o,o,new A.aD(B.a6,B.a8,B.J,k,o,o),B.l),o,o,o,B.Kb,o,o,o)
f=A.fa(B.c2,A.a([new C.HP("YouTube",B.BN,n,o),new C.HP("TikTok",B.ik,n,o),new C.HP("Instagram",B.v6,n,o),new C.HP("Facebook",B.Bu,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.a_,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bu:B.f3,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.ag:B.dm
s=A.a5(B.je,B.N.u(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bl:B.b5
v=A.D(A.a([f,B.aq,A.au(o,B.D,!0,o,!0,B.m,o,A.aw(),x,o,o,o,o,o,2,A.be(o,new A.b3(4,r,B.H),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aK(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a4M),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.I,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.z,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.C,o,B.K,o,o,o,o)],w),B.ae,B.e,B.f,0,B.k)
f=A.j1(D.apb,D.bCw,new C.cHk(d),A.jC(o,o,o,o,o,o,o,o,o,o,o,n?B.aD:B.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.V(12,0,12,12+m.f.d),A.ft(A.cV(g,A.D(A.a([k,new A.N(D.aij,v,o),new A.N(D.aip,A.G(A.a([f,B.bb,A.c0(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.V:B.U,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cHl(d),o,o),B.Y,A.dS(D.asP,D.bCP,new C.cHm(d,x),A.bC(B.N,o,o,o,B.c,o,D.ahQ,o,new A.by(A.n(14),B.H),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ae,B.e,B.O,0,B.k),B.au),new A.v(o,o,h,l,i,new A.aD(B.ax,B.aH,B.J,j,o,o),B.l),B.ck),o)},
$S:58}
C.cHj.prototype={
$0(){A.aa(this.a,!1).T(null)
return null},
$S:0}
C.cHk.prototype={
$0(){C.cVk()
$.Jn().sv(0,null)
A.aa(this.a,!1).T(null)},
$S:0}
C.cHl.prototype={
$0(){A.aa(this.a,!1).T(null)
return null},
$S:0}
C.cHm.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.aa(this.a,!1).T(x)
return null},
$S:0}
C.b4K.prototype={
$1(d){return C.cVl(A.L(d,y.N,y.z))},
$S:z+3}
C.b4L.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b4C.prototype={
$1(d){return d.c},
$S:z+0}
C.b4D.prototype={
$1(d){return d.r},
$S:z+0}
C.b4E.prototype={
$1(d){return d.f},
$S:z+0}
C.b4F.prototype={
$1(d){return d.at},
$S:z+0}
C.b4G.prototype={
$1(d){return d.c},
$S:z+0}
C.b4H.prototype={
$1(d){return d.r},
$S:z+0}
C.b4I.prototype={
$1(d){return d.f},
$S:z+0}
C.b4J.prototype={
$1(d){return d.at},
$S:z+0}
C.b4B.prototype={
$1(d){return d.ag()},
$S:z+5}
C.b4A.prototype={
$1(d){return B.a.bR(B.p.kG(d,16),2,"0").toUpperCase()},
$S:78}
C.cdz.prototype={
$0(){},
$S:0}
C.cdy.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cdw.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cdx.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cdA.prototype={
$1(d){return new C.EV(this.a,null)},
$S:z+7}
C.cdE.prototype={
$0(){return A.aa(this.a,!1).eU()},
$S:0}
C.cdF.prototype={
$3(d,e,f){return new A.hS($.xy(),new C.cdD(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cdD.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.yS(d,l,y.Q)
x=x==null?l:x.glb()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.u(0.12)
t=A.n(12)
s=A.a0(B.N.u(0.35),B.o,1)
r=A.a5(B.hf,B.N,l,l,18)
q=k.d
p=J.a2(m.a.d)
o=$.xy().a
n=B.i.aS(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.K(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.a_,l,l,l,l,l,l,l,l,12,l,l,B.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.v(u,l,s,t,l,l,B.l),l,l,B.cB,B.ex,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cV(t,new A.lR(1.7777777777777777,new C.EX("fleet_master",s,!1,k.gad6(),!0,new A.dz("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.T],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a2(t)+".":""+J.a2(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.U(d).ax.k3.u(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.xZ(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jz(new A.N(B.A3,A.D(v,B.t,B.e,B.f,0,B.k),l),l),new A.o6(D.agO,A.aoU(new A.na(new C.cdC(u,k),J.a2(u.d),!1,!0,!0,A.ut(),l),D.biD),l)],x))},
$S:1431}
C.cdC.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Q1(w,e,J.a2(x.d),new C.cdB(x,w),this.b,null)},
$S:z+9}
C.cdB.prototype={
$0(){return this.a.b8K(this.b)},
$S:0}
C.cdG.prototype={
$0(){this.a.Pa()
return null},
$S:0}
C.cdt.prototype={
$0(){return A.aa(this.a,!1).eU()},
$S:0}
C.cdu.prototype={
$0(){C.Si(this.a,$.b4z)
return null},
$S:0}
C.cdv.prototype={
$3(d,e,f){return A.ii(new C.cds(this.a,e))},
$S:z+10}
C.cds.prototype={
$2(d,e){var x,w=null,v=B.i.aS(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.bd(A.cx(A.D(A.a([A.j(s,w,w,w,w,A.l(w,w,A.U(d).ax.k3.u(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.M,w,w),B.aq,new C.aDR(v,t.a.c,t.e,t.d,new C.cdp(t),new C.cdq(t),new C.cdr(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.up,w,w,B.X),w,w,w)},
$S:1432}
C.cdp.prototype={
$0(){var x=this.a.c
x.toString
C.Si(x,$.b4z)
return null},
$S:0}
C.cdq.prototype={
$1(d){var x=this.a
return x.p(new C.cdo(x,d))},
$S:36}
C.cdo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cdr.prototype={
$0(){var x=this.a
return x.p(new C.cdn(x))},
$S:0}
C.cdn.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cpn.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cpo.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cg5.prototype={
$3(d,e,f){return new C.AI(this.a.c,null)},
$S:z+11}
C.cg6.prototype={
$3(d,e,f){if(f==null)return e
return new A.bm(B.al,null,B.cx,B.m,A.a([new C.AI(this.a.c,null),D.a8m],y.p),null)},
$C:"$3",
$R:3,
$S:417}
C.cdM.prototype={
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
x.agG(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h3(w,"load",new C.cdK(x),!1,v)
w=x.e
w.toString
A.h3(w,"error",new C.cdL(x),!1,v)
x=x.e
x.toString
return x},
$S:1433}
C.cdK.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.cdJ(x))},
$S:39}
C.cdJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cdL.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.cdI(x))},
$S:39}
C.cdI.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cdH.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cEf.prototype={
$1(d){var x=new A.Ai([],[]).Eb(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1434};(function aliases(){var x=C.abk.prototype
x.aKN=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a6Y.prototype,"ganH","b6j",1)
x(v,"gb6S","b6T",1)
x(v,"gb9b","b9c",6)
w(C,"dvL","cVj",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uL,[C.cHo,C.cHn,C.b4K,C.b4L,C.b4C,C.b4D,C.b4E,C.b4F,C.b4G,C.b4H,C.b4I,C.b4J,C.b4B,C.b4A,C.cdA,C.cdF,C.cdD,C.cdv,C.cdq,C.cg5,C.cg6,C.cdM,C.cdK,C.cdL,C.cEf])
w(A.TN,[C.cHj,C.cHk,C.cHl,C.cHm,C.cdz,C.cdy,C.cdw,C.cdx,C.cdE,C.cdB,C.cdG,C.cdt,C.cdu,C.cdp,C.cdo,C.cdr,C.cdn,C.cpn,C.cpo,C.cdJ,C.cdI,C.cdH])
w(A.aC,[C.HP,C.Q1,C.awK,C.aDR,C.aDS,C.axI,C.aDQ,C.ayO,C.ato,C.ayS,C.AI])
w(A.ah,[C.mc,C.nX])
w(A.ae,[C.EW,C.EV,C.Zq,C.EX])
w(A.af,[C.a6Y,C.axB,C.abk,C.axD])
w(A.TO,[C.cdC,C.cds])
v(C.F_,A.aud)
v(C.axC,C.abk)
x(C.abk,A.ee)})()
A.cYz(b.typeUniverse,JSON.parse('{"EW":{"ae":[],"q":[]},"Q1":{"aC":[],"q":[]},"EV":{"ae":[],"q":[]},"HP":{"aC":[],"q":[]},"a6Y":{"af":["EW"]},"awK":{"aC":[],"q":[]},"axB":{"af":["EV"]},"aDR":{"aC":[],"q":[]},"aDS":{"aC":[],"q":[]},"axI":{"aC":[],"q":[]},"aDQ":{"aC":[],"q":[]},"ayO":{"aC":[],"q":[]},"ato":{"aC":[],"q":[]},"Zq":{"ae":[],"q":[]},"AI":{"aC":[],"q":[]},"axC":{"af":["Zq"]},"ayS":{"aC":[],"q":[]},"EX":{"ae":[],"q":[]},"axD":{"af":["EX"]}}'))
var y=(function rtii(){var x=A.bl
return{V:x("ac<am>"),O:x("ac<C>"),e:x("ac<mc>"),s:x("ac<m>"),p:x("ac<q>"),t:x("ac<T>"),X:x("a9<mc>"),a:x("a9<@>"),P:x("W<m,@>"),f:x("W<@,@>"),w:x("m9"),_:x("yN"),k:x("mc"),N:x("m"),Y:x("bu<ad>"),W:x("dz<m>"),J:x("hS<T>"),j:x("hS<nX?>"),E:x("wF<cq>"),q:x("QG"),z:x("@"),Q:x("ah?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a4M=new A.aK(B.N,1.6,B.o,-1)
D.bio=new A.ap(18,18,B.Hn,null)
D.a8m=new A.dF(B.R,null,null,D.bio,null)
D.N1=new A.O(983224,"MaterialIcons",!1)
D.arw=new A.a6(D.N1,48,B.bk,null,null,null)
D.boi=new A.J(!0,B.bu,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bxI=new A.z("Powered off",null,D.boi,null,null,null,null,null,null,null,null)
D.aCX=x([D.arw,B.x,D.bxI],y.p)
D.aei=new A.eU(B.X,B.e,B.O,B.j,null,B.k,null,0,D.aCX,null)
D.a8t=new A.dF(B.R,null,null,D.aei,null)
D.a8S=new A.hX(2,null,null,null,null,B.V,null,null,null,null)
D.abl=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.abO=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.adh=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.agB=new A.V(0,3,0,3)
D.agO=new A.V(10,0,10,88)
D.ah6=new A.V(12,6,12,10)
D.ahk=new A.V(14,8,14,6)
D.ahQ=new A.V(18,12,18,12)
D.aij=new A.V(20,18,20,8)
D.aip=new A.V(20,8,20,20)
D.KB=new A.V(8,6,15,8)
D.anH=new A.O(983222,"MaterialIcons",!1)
D.ap7=new A.a6(B.hf,26,B.N,null,null,null)
D.apb=new A.a6(B.M5,18,null,null,null,null)
D.apq=new A.a6(B.q8,14,B.V,null,null,null)
D.anW=new A.O(983420,"MaterialIcons",!1)
D.aqc=new A.a6(D.anW,14,B.V,null,null,null)
D.amt=new A.O(62895,"MaterialIcons",!1)
D.aqg=new A.a6(D.amt,14,B.V,null,null,null)
D.asP=new A.a6(B.lD,20,null,null,null,null)
D.at4=new A.a6(B.eR,16,null,null,null,null)
D.aER=x([B.ag,B.a_],y.O)
D.Ol=new A.aD(B.ax,B.aH,B.J,D.aER,null,null)
D.bcs=new A.aN("NGMY OS","14.2.1")
D.bbD=new A.aN("VirtualDroid","13.8.4")
D.bbC=new A.aN("NGMY OS","15.0.0")
D.bc9=new A.aN("VirtualDroid","14.1.2")
D.bbB=new A.aN("NGMY Tab OS","12.9.7")
D.bbA=new A.aN("NGMY OS","13.5.3")
D.bbr=new A.aN("VirtualDroid","15.2.0")
D.bbS=new A.aN("NGMY OS","14.8.1")
D.bce=new A.aN("NGMY Tab OS","13.2.4")
D.bcB=new A.aN("VirtualDroid","12.6.9")
D.bbo=new A.aN("NGMY OS","16.0.1")
D.bbg=new A.aN("VirtualDroid","14.9.0")
D.bcm=new A.aN("NGMY Tab OS","14.0.3")
D.bbJ=new A.aN("NGMY OS","13.1.8")
D.bbn=new A.aN("VirtualDroid","13.4.5")
D.bbz=new A.aN("NGMY OS","15.3.2")
D.bcf=new A.aN("NGMY Tab OS","12.4.1")
D.bco=new A.aN("VirtualDroid","16.1.0")
D.bbR=new A.aN("NGMY OS","14.4.6")
D.bct=new A.aN("VirtualDroid","15.0.8")
D.aEu=x([D.bcs,D.bbD,D.bbC,D.bc9,D.bbB,D.bbA,D.bbr,D.bbS,D.bce,D.bcB,D.bbo,D.bbg,D.bcm,D.bbJ,D.bbn,D.bbz,D.bcf,D.bco,D.bbR,D.bct],A.bl("ac<+(m,m)>"))
D.beC=new A.dX(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bea=new A.dX(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.be5=new A.dX(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bee=new A.dX(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.be1=new A.dX(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.beg=new A.dX(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.beE=new A.dX(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.be2=new A.dX(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.be9=new A.dX(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bei=new A.dX(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.be0=new A.dX(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bew=new A.dX(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bet=new A.dX(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.be8=new A.dX(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.beq=new A.dX(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bep=new A.dX(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.be_=new A.dX(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bed=new A.dX(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.ben=new A.dX(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bes=new A.dX(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Pi=x([D.beC,D.bea,D.be5,D.bee,D.be1,D.beg,D.beE,D.be2,D.be9,D.bei,D.be0,D.bew,D.bet,D.be8,D.beq,D.bep,D.be_,D.bed,D.ben,D.bes],A.bl("ac<+(m,m,ad,ad,m)>"))
D.aJ7=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.VZ=new C.F_(0,"youtube")
D.W_=new C.F_(1,"tiktok")
D.Dv=new C.F_(2,"instagram")
D.W0=new C.F_(3,"facebook")
D.b7p=new C.F_(4,"other")
D.bi2=new A.ap(3,null,null,null)
D.biD=new A.l1(4,10,8,0.52,null)
D.byw=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bly=new A.aQ(D.byw,null,null,null,null,null,null,null,null,null,null,null,null,B.w,!1,null,null,null,B.m,null)
D.boC=new A.J(!0,B.c,null,null,null,null,11,B.ab,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bx3=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.byY=new A.z("Add device",null,null,null,null,null,null,null,null,null,null)
D.bCw=new A.z("Stop",null,null,null,null,null,null,null,null,null,null)
D.bCP=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bLi=new C.ayO(null)})();(function staticFields(){$.cVi=20
$.alm=null
$.b4z=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dzP","xy",()=>A.OR(0))
x($,"dzQ","Jn",()=>A.OR(null))})()};
(a=>{a["Mqzc5joC+PtMqf1cA8hXhC0J1C4="]=a.current})($__dart_deferred_initializers__);