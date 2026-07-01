((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dDl(d,e){A.ac(d,!1).cL(A.ep(new C.cNg(e),!0,null,y.H))},
SH(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SH=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JK()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.ak()
t=new A.aa(new A.aK(o,B.a_,B.V),u)
x=3
return A.b(A.d9(B.C,null,new C.cNf(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SH)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dlN(s)
if(r==null){d.E(y.q).f.O(D.bq8)
x=1
break}x=4
return A.b(A.bQ(B.fi,null,y.H),$async$SH)
case 4:if(d.e==null){x=1
break}o=B.p.aJ(e,1,999)
$.d0l=o
q=C.dlI(o)
o=$.xT()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQR(r)
d.E(y.q).f.O(A.b9(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SH,w)},
d0o(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
n=A.aV(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.aV(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.mg(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
Fj(d){return C.dlQ(d)},
dlQ(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fj=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$Fj)
case 3:h=a4
g=B.a.i(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.v.aF(0,d,null)
x=y.a.b(s)&&J.cx(s)?10:11
break
case 10:l=J.ij(s,y.f)
l=A.ee(l,new C.b68(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b69(),k),k.k("L.E"))
r=j
if(J.a4(r)>=20){v=r
x=1
break}q=C.d0p(r)
x=12
return A.b(C.Fi(a2,q),$async$Fj)
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
o=B.v.aF(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.d0o(A.K(o,y.N,y.z))
m=C.d0p(A.a([n],y.e))
x=21
return A.b(C.Fi(a2,m),$async$Fj)
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
case 18:case 14:r=C.dlO()
x=22
return A.b(C.Fi(a2,r),$async$Fj)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fj,w)},
d0p(d){var x=A.S(d).k("C<1,m>"),w=new A.C(d,new C.b60(),x).eu(0),v=new A.C(d,new C.b61(),x).eu(0),u=new A.C(d,new C.b62(),x).eu(0),t=new A.C(d,new C.b63(),x).eu(0),s=A.bc(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQS(null,r,v,u,w,t));++r}return s},
amo(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amo=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fj(d),$async$amo)
case 3:u=f
t=y.N
s=J.cj(u)
r=s.dd(u,new C.b64(),t).eu(0)
q=s.dd(u,new C.b65(),t).eu(0)
p=s.dd(u,new C.b66(),t).eu(0)
o=s.dd(u,new C.b67(),t).eu(0)
n=C.cQS(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fi(d,u),$async$amo)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amo,w)},
Fi(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fi=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fi)
case 2:v=g
u=B.a.i(d)
t=J.b3(e,new C.b6_(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.al("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fi)
case 3:return A.f(null,w)}})
return A.h($async$Fi,w)},
dlO(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dW(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQS(x,x,u,t,v,s)
return r},
cQS(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jV(),i=d==null,h=D.Qo[B.p.ao(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qo[B.p.ao(i?e+s:d,20)]
if(a1.q(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bA(256)
o=new A.C(q,new C.b5Z(),A.S(q).k("C<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bA(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bG(B.p.kP(j.bA(256),16),2,"0")
t=B.d.be(q,":").toUpperCase()
if(!a0.q(0,v)&&!f.q(0,u)&&!g.q(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.ao(e,20)
l=D.aN2[x]
k=D.aI7[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bA(99999),"Device "+B.a.bG(B.p.t(e+1),2,"0"),v,l,C.dlP(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.O(Date.now(),0,!1).a1().Y())},
dlP(d,e){var x,w=J.dW(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bG(B.p.kP(d.bA(256),16),2,"0")
return B.d.f9(w)},
cNg:function cNg(d){this.a=d},
cNf:function cNf(d,e){this.a=d
this.b=e},
cNb:function cNb(d){this.a=d},
cNc:function cNc(d){this.a=d},
cNd:function cNd(d){this.a=d},
cNe:function cNe(d,e){this.a=d
this.b=e},
Ia:function Ia(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mg:function mg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b68:function b68(){},
b69:function b69(){},
b60:function b60(){},
b61:function b61(){},
b62:function b62(){},
b63:function b63(){},
b64:function b64(){},
b65:function b65(){},
b66:function b66(){},
b67:function b67(){},
b6_:function b6_(){},
b5Z:function b5Z(){},
Fg:function Fg(d,e){this.c=d
this.a=e},
a7M:function a7M(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cis:function cis(){},
cir:function cir(d,e){this.a=d
this.b=e},
cip:function cip(d){this.a=d},
ciq:function ciq(d,e){this.a=d
this.b=e},
cit:function cit(d){this.a=d},
cix:function cix(d){this.a=d},
ciy:function ciy(d,e){this.a=d
this.b=e},
ciw:function ciw(d,e,f){this.a=d
this.b=e
this.c=f},
civ:function civ(d,e){this.a=d
this.b=e},
ciu:function ciu(d,e){this.a=d
this.b=e},
ciz:function ciz(d){this.a=d},
Qn:function Qn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axM:function axM(d,e){this.c=d
this.a=e},
Ff:function Ff(d,e){this.c=d
this.a=e},
ayH:function ayH(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cim:function cim(d){this.a=d},
cin:function cin(d){this.a=d},
cio:function cio(d){this.a=d},
cil:function cil(d,e){this.a=d
this.b=e},
cii:function cii(d){this.a=d},
cij:function cij(d){this.a=d},
cih:function cih(d,e){this.a=d
this.b=e},
cik:function cik(d){this.a=d},
cig:function cig(d){this.a=d},
aEX:function aEX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEY:function aEY(d,e,f){this.c=d
this.d=e
this.a=f},
ayO:function ayO(d,e){this.c=d
this.a=e},
aEW:function aEW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cum:function cum(d){this.a=d},
cun:function cun(d){this.a=d},
azU:function azU(d){this.a=d},
auo:function auo(d,e){this.c=d
this.a=e},
dlN(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d9(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o5(x,C.b5X(u,!1),D.X9,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dlM(w)
if(t!=null)return new C.o5(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Xa,"TikTok",q,q)
s=C.dlL(x,w)
if(s!=null)return s
r=C.dlK(x,w)
if(r!=null)return r
if(B.a.q(w,"tiktok.com")||B.a.q(w,"instagram.com")||B.a.q(w,"facebook.com")||B.a.q(w,"fb.watch")||B.a.q(w,"youtube.com")||B.a.q(w,"youtu.be"))return new C.o5(x,x,D.bbI,"Video",q,q)
return q},
dlL(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d9(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o5(d,"https://www.instagram.com/reel/"+x+u,D.Ev,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d9(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o5(d,"https://www.instagram.com/p/"+x+u,D.Ev,t,v,v)}return v},
dlK(d,e){if(!B.a.q(e,"facebook.com")&&!B.a.q(e,"fb.watch")&&!B.a.q(e,"fb.com"))return null
return new C.o5(d,"https://www.facebook.com/plugins/video.php?href="+A.f8(2,d,B.aJ,!1)+"&show_text=false&width=734",D.Xb,"Facebook",null,null)},
dlM(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d9(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d9(d)
return x==null?null:x.b[1]},
Fk:function Fk(d,e){this.a=d
this.b=e},
o5:function o5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_5:function a_5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayI:function ayI(d,e){var _=this
_.d=$
_.cO$=d
_.aW$=e
_.c=_.a=null},
azY:function azY(d,e){this.c=d
this.a=e},
ckZ:function ckZ(d){this.a=d},
cl_:function cl_(d){this.a=d},
B6:function B6(d,e){this.c=d
this.a=e},
aci:function aci(){},
dC8(d){var x=window
x.toString
A.h6(x,"message",new C.cJW(d),!1,y._)},
Fh:function Fh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayJ:function ayJ(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ciF:function ciF(d){this.a=d},
ciD:function ciD(d){this.a=d},
ciC:function ciC(d){this.a=d},
ciE:function ciE(d){this.a=d},
ciB:function ciB(d){this.a=d},
ciA:function ciA(d){this.a=d},
cJW:function cJW(d){this.a=d},
b5X(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.be(x,"&")},
d0i(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d9(d)
return x==null?null:x.b[1]},
d0j(d){var x=A.bz(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bz(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d0k(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dlH(d,e,f){var x=C.d0i(d)
if(x!=null){if(f)return C.d0k(x,e,!0)
return C.d0j(C.b5X(x,e))}return C.d0j(d)},
dlI(d){if(d<=4)return 0
return B.p.b_(d-1,4)*4},
dlJ(d){var x
if($.JK().a==null)return!1
x=$.xT().a
return d>=x&&d<x+4},
d0n(){var x=$.amn
if(x!=null)x.aa(0)
$.amn=null
$.xT().sv(0,0)},
d0m(){var x,w,v,u=$.JK()
if(u.a==null)return
x=$.amn
if(x!=null)x.aa(0)
w=$.d0l
if(w<=4){u=u.a
u.toString
C.cQR(u)
return}x=$.xT()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQR(u)},
cQR(d){var x=$.amn
if(x!=null)x.aa(0)
x=120
switch(d.c.a){case 0:x=180
break
case 1:x=60
break
case 2:x=90
break
case 3:break
case 4:break
default:x=null}$.amn=A.dl(A.d4(0,0,0,0,x),C.dCj())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ia.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.N.p(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.ex,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dw,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fD,x,x,x)}}
C.mg.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fg.prototype={
S(){return new C.a7M(A.a([],y.e))},
giu(){return this.c}}
C.a7M.prototype={
Z(){var x=this
x.a5()
$.xT().af(0,x.gap6())
C.dC8(x.gb9f())
x.Q1()},
b8I(){if(this.c!=null)this.n(new C.cis())},
b9g(){C.d0m()},
l(){$.xT().V(0,this.gap6())
C.d0n()
$.JK().sv(0,null)
this.a3()},
Q1(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Q1=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fj(u.a.c),$async$Q1)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cir(u,t))
$.b5Y=J.a4(t)
case 1:return A.f(v,w)}})
return A.h($async$Q1,w)},
PK(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PK=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cip(u))
x=3
return A.b(C.amo(u.a.c),$async$PK)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ciq(u,t))
$.b5Y=J.a4(u.d)
u.c.E(y.q).f.O(A.b9(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PK,w)},
bb8(d){var x=this.c
x.toString
A.ac(x,!1).cL(A.ep(new C.cit(d),!1,null,y.H))},
bbF(){var x=this.c
x.toString
return C.SH(x,J.a4(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.Q,u=v?B.dx:B.db,t=A.aT(w,w,w,w,B.CN,w,w,w,new C.cix(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a4(x.d)+")",r=y.p
s=A.G(A.a([t,A.H(new A.zF(A.G(A.a([A.H(new A.N(B.hY,A.j(s,1,B.ad,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aW(!1,w,!0,new A.N(B.aD,A.a5(B.eZ,B.N,w,w,28),w),B.bN,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbE(),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a0)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cP(!0,A.B(A.a([new A.N(D.LK,s,w),A.H(x.e?B.jg:new A.hY($.JK(),new C.ciy(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cr(w,u,t,w,!1,!1,A.ahw(B.N,B.yT,B.o2,D.bEf,x.e?w:new C.ciz(x)),w)}}
C.Qn.prototype={
b6P(d){var x,w=$.xT().a,v=this.d
if(C.dlJ(v)){v=this.c.a
x=d.gaBY()
return new C.Fh(v+"_mini",d.gaBY(),!0,d.gaee(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_5(d,!0,!0,"Fold "+(B.p.b_(v,4)+1)+"/"+B.p.b_(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.p(0.1),B.o,1),s=A.a([new A.ag(0,B.w,B.N.p(0.18),B.ce,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aW(!1,v,!0,A.B(A.a([A.H(A.w(w,A.cR(r,A.il(A.B(A.a([new C.axM(q,w),A.H(p!=null?x.b6P(p):A.w(w,A.B(A.a([A.a5(B.hq,B.lC,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.p(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.aq,B.f,0,B.k),B.h,B.u7,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vX,B.N.p(0.85),w,w,9),D.bmv,A.j("Tap",w,w,w,w,A.l(w,w,B.c.p(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.aq,B.f,0,w,w),B.h,B.a7,w,w,w,w,w,D.aiG,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.u(w,w,t,u,s,D.Po,B.l),w,w,w,B.eJ,w,w,w),1),B.ak,A.j(q.b,1,B.ad,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.ad,w,w,A.l(w,w,A.V(d).ax.k3.p(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.ad,w,w,A.l(w,w,B.N.p(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a0)}}
C.axM.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.H(A.j(B.d.gaq(this.c.c.split("-")),x,B.ad,x,x,A.l(x,x,B.c.p(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.o1,B.c.p(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a7,x,x,x,x,x,B.Lz,x,x,x)}}
C.Ff.prototype={
S(){return new C.ayH()}}
C.ayH.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.Q,v=w?B.dx:B.db,u=A.aT(x,x,x,x,B.CN,x,x,x,new C.cim(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cr(x,v,A.cP(!0,A.B(A.a([new A.N(D.LK,A.G(A.a([u,A.H(new A.zF(A.G(A.a([A.H(new A.N(B.hY,A.j(t.b+" \xb7 "+t.c,1,B.ad,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aW(!1,x,!0,new A.N(B.aD,A.a5(B.eZ,B.N,x,x,28),x),B.bN,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cin(d),x,x,x,x,x,x,x),B.h,B.C,0,x,x,x,x,x,B.a0)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.H(new A.hY($.JK(),new C.cio(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aEX.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.N.p(0.35),B.ew,28),new A.ag(0,B.w,B.q.p(0.45),B.cB,18)],y.V),p=A.W(B.c.p(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fh(w+"_full",v,!1,x.gaee(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayO(u.r,t)}else x=new C.auo(n,t)
else x=D.bR6
return A.w(t,A.cR(o,A.il(A.B(A.a([new C.aEY(n,m,t),A.H(x,1),new C.aEW(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.u(t,t,p,r,q,D.Po,B.l),t,s*2.05,t,B.b7,t,t,s)}}
C.aEY.prototype={
C(d){var x,w,v,u,t=null,s=new A.O(Date.now(),0,!1),r=A.eR(s)
s=A.i5(s)
x=new A.dc(r,s)
w=x.gFl()===0?12:x.gFl()
s=B.a.bG(B.p.t(s),2,"0")
r=(r<12?B.ep:B.fY)===B.ep?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l6,t,t,t),B.b0,A.j(v.b,t,t,t,t,A.l(t,t,B.c.p(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bi,D.asG,B.e9,D.arS,B.e9,D.asK],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a5(B.CG,B.N.p(0.9),t,t,12),B.e9,A.H(A.j(v.c,t,B.ad,t,t,A.l(t,t,B.c.p(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.p(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a7,t,t,t,t,t,D.ajn,t,t,t)}}
C.ayO.prototype={
C(d){var x=null
return A.w(x,A.b5(A.B(A.a([A.a5(B.vN,B.c.p(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.p(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.p(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ag,A.eq(D.avI,D.bCa,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aH(B.N.p(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u7,x,x,x,x,x,x,x,x,1/0)}}
C.aEW.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.ap0(B.O5,"YouTube",t===0,s,new C.cum(v))
t=v.ap0(B.jF,"Device",t===1,s,new C.cun(v))
x=s?"Power off":"Power on"
w=s?D.O6:D.aq1
return A.w(u,A.G(A.a([r,B.Y,t,B.b0,A.aT(u,u,u,u,A.a5(w,s?B.b2:B.dt,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dj)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a7,u,u,u,u,u,D.aja,u,u,u)},
ap0(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b9
else x=f?B.N:B.aa
w=f&&g?B.N.p(0.15):B.C
v=A.n(10)
u=g?h:t
return A.H(A.aU(!1,B.M,!0,v,A.aW(!1,A.n(10),!0,new A.N(B.kE,A.B(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a0),1)}}
C.azU.prototype={
C(d){return D.a9S}}
C.auo.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l1,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.p(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pY("Serial",v.c),r=x.pY("Model",v.d),q=x.pY("Device ID",v.e),p=x.pY("IMEI",v.r),o=x.pY("MAC",v.f),n=x.pY("OS",v.w+" "+v.x),m=x.pY("Location",v.y+", "+v.z),l=x.pY("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pY("Timezone",v.at)
v=v.ax
return A.eo(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pY("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aD,w,w,B.X,!1)},
pY(d,e){var x=null
return new A.N(B.c5,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.p(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bS,A.j(e,x,x,x,x,D.btj,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fk.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o5.prototype={
gaBY(){var x=this.f
if(x!=null&&x.length!==0)return C.b5X(x,!0)
return this.b},
gaee(){var x=this.c
return x===D.X9||x===D.Xa||x===D.Ev||x===D.Xb}}
C.a_5.prototype={
S(){return new C.ayI(null,null)}}
C.ayI.prototype={
Z(){this.a5()
var x=A.bG(null,B.q5,null,1,null,this)
x.mU(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMM()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fn(v,new A.u(v,v,v,v,v,new A.au(B.e1,B.co,B.B,A.a([B.C,B.q.p(0.55)],y.O),v,v),B.l),B.ci),s=y.Y,r=w.d
r===$&&A.c()
r=A.cN(B.hj,r,v)
x=B.c.p(0.92)
s=A.b5(new A.dS(new A.bi(r,new A.bs(0.72,1,s),s.k("bi<bq.T>")),!1,A.a5(B.hq,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.p(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.azY(u,v),t,s,A.bA(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.p(0.75)
u.push(A.bA(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.p(0.85)
u.push(A.bA(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bg(B.an,v,B.cC,B.m,u,v)}}
C.azY.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k6(v,new C.ckZ(this),B.bj,!0,x,x,new C.cl_(this),x)
return new C.B6(w,x)}}
C.B6.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aP(A.a([B.ue,B.II],y.O),B.hq)
break
case 1:x=new A.aP(A.a([B.u7,D.ado],y.O),B.hp)
break
case 2:x=new A.aP(A.a([D.af5,D.acT],y.O),B.vQ)
break
case 3:x=new A.aP(A.a([B.Z,B.dK],y.O),B.Ci)
break
case 4:x=new A.aP(A.a([B.a7,B.aj],y.O),B.m9)
break
default:x=v}w=x.a
return A.w(v,A.b5(A.a5(x.b,B.N.p(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.au(B.ao,B.aw,B.B,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.aci.prototype={
l(){var x=this,w=x.aW$
if(w!=null)w.V(0,x.gdE())
x.aW$=null
x.a3()},
bq(){this.bH()
this.bD()
this.dF()}}
C.Fh.prototype={
S(){return new C.ayJ()}}
C.ayJ.prototype={
ahO(d,e){var x,w,v=this,u="mute=1",t=C.d0i(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d0k(t,B.a.q(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b5X(t,B.a.q(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.q(x,"tiktok.com/player")||B.a.q(x,"instagram.com")||B.a.q(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dlH(e,B.a.q(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.JL()
$.oE().u1(x,new C.ciF(v),!0)}catch(w){v.r=!0
v.f=!1}},
aP(d){var x,w=this
w.b2(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.ciA(w))
x=w.e
x.toString
w.ahO(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.p(0.5)
return A.il(A.b5(A.a5(B.Og,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai8(u,B.rz,x)],y.p)
if(v.f)x.push(A.il(A.b5(new A.ao(w,w,D.aai,u),u,u,u),B.bU,!0))
return new A.bg(B.an,u,B.cC,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","~()","Fg(R)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","aw<~>()","Ff(R)","hY<Q>(R,o5?,p?)","Qn(R,Q)","tf(R,o5?,p?)","B6(R,ai,dh?)"])
C.cNg.prototype={
$1(d){return new C.Fg(this.a,null)},
$S:z+2}
C.cNf.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.Q,m=A.ay(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.N.p(0.22),B.ew,32)],y.V),h=A.W(n?B.bo:B.N.p(0.18),B.o,1),g=A.n(28),f=B.N.p(n?0.35:0.14)
k=A.a([f,B.R.p(n?0.18:0.08)],k)
f=A.w(o,D.arz,B.h,o,o,new A.u(B.N.p(0.18),o,A.W(B.N.p(0.45),B.o,1),o,o,o,B.ai),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.H(A.B(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fS,x,A.aT(o,o,o,o,A.a5(B.cG,n?B.aa:B.bU,o,o,o),o,o,o,new C.cNb(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.au(B.a2,B.a4,B.B,k,o,o),B.l),o,o,o,B.Lk,o,o,o)
f=A.eK(B.c4,A.a([new C.Ia("YouTube",B.CF,n,o),new C.Ia("TikTok",B.hp,n,o),new C.Ia("Instagram",B.vQ,n,o),new C.Ia("Facebook",B.Ci,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.by:B.ff,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a5(B.jG,B.N.p(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bo:B.b6
v=A.B(A.a([f,B.am,A.at(o,B.G,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bd(o,new A.b0(4,r,B.I),o,o,o,o,o,o,!0,new A.b0(4,q,new A.aH(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b0(4,A.n(16),D.a63),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.K,o,o,o,o)],w),B.ac,B.e,B.f,0,B.k)
f=A.iO(D.arD,D.bHX,new C.cNc(d),A.jL(o,o,o,o,o,o,o,o,o,o,o,n?B.aF:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fn(A.cR(g,A.B(A.a([k,new A.N(D.akn,v,o),new A.N(D.akv,A.G(A.a([f,B.b0,A.c_(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.W,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cNd(d),o,o),B.Y,A.dH(D.avs,D.bIh,new C.cNe(d,x),A.by(B.N,o,o,o,B.c,o,D.ajU,o,new A.bx(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ac,B.e,B.P,0,B.k),B.au),new A.u(o,o,h,l,i,new A.au(B.ao,B.aw,B.B,j,o,o),B.l),B.ci),o)},
$S:59}
C.cNb.prototype={
$0(){A.ac(this.a,!1).U(null)
return null},
$S:0}
C.cNc.prototype={
$0(){C.d0n()
$.JK().sv(0,null)
A.ac(this.a,!1).U(null)},
$S:0}
C.cNd.prototype={
$0(){A.ac(this.a,!1).U(null)
return null},
$S:0}
C.cNe.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.ac(this.a,!1).U(x)
return null},
$S:0}
C.b68.prototype={
$1(d){return C.d0o(A.K(d,y.N,y.z))},
$S:z+3}
C.b69.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b60.prototype={
$1(d){return d.c},
$S:z+0}
C.b61.prototype={
$1(d){return d.r},
$S:z+0}
C.b62.prototype={
$1(d){return d.f},
$S:z+0}
C.b63.prototype={
$1(d){return d.at},
$S:z+0}
C.b64.prototype={
$1(d){return d.c},
$S:z+0}
C.b65.prototype={
$1(d){return d.r},
$S:z+0}
C.b66.prototype={
$1(d){return d.f},
$S:z+0}
C.b67.prototype={
$1(d){return d.at},
$S:z+0}
C.b6_.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b5Z.prototype={
$1(d){return B.a.bG(B.p.kP(d,16),2,"0").toUpperCase()},
$S:73}
C.cis.prototype={
$0(){},
$S:0}
C.cir.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cip.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ciq.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cit.prototype={
$1(d){return new C.Ff(this.a,null)},
$S:z+7}
C.cix.prototype={
$0(){return A.ac(this.a,!1).es()},
$S:0}
C.ciy.prototype={
$3(d,e,f){return new A.hY($.xT(),new C.ciw(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.ciw.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.zc(d,l,y.Q)
x=x==null?l:x.gk7()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.p(0.12)
t=A.n(12)
s=A.W(B.N.p(0.35),B.o,1)
r=A.a5(B.hq,B.N,l,l,18)
q=k.d
p=J.a4(m.a.d)
o=$.xT().a
n=B.i.aJ(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.H(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cz,B.er,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cR(t,new A.iX(1.7777777777777777,new C.Fh("fleet_master",s,!1,k.gaee(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a4(t)+".":""+J.a4(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.p(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yl(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jI(new A.N(B.AN,A.B(v,B.t,B.e,B.f,0,B.k),l),l),new A.of(D.aiR,A.apU(new A.nf(new C.civ(u,k),J.a4(u.d),!1,!0,!0,A.uL(),l),D.bn8),l)],x))},
$S:1470}
C.civ.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qn(w,e,J.a4(x.d),new C.ciu(x,w),this.b,null)},
$S:z+9}
C.ciu.prototype={
$0(){return this.a.bb8(this.b)},
$S:0}
C.ciz.prototype={
$0(){this.a.PK()
return null},
$S:0}
C.cim.prototype={
$0(){return A.ac(this.a,!1).es()},
$S:0}
C.cin.prototype={
$0(){C.SH(this.a,$.b5Y)
return null},
$S:0}
C.cio.prototype={
$3(d,e,f){return A.hd(new C.cil(this.a,e))},
$S:z+10}
C.cil.prototype={
$2(d,e){var x,w=null,v=B.i.aJ(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b5(A.co(A.B(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.p(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.am,new C.aEX(v,t.a.c,t.e,t.d,new C.cii(t),new C.cij(t),new C.cik(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v8,w,w,B.X),w,w,w)},
$S:1471}
C.cii.prototype={
$0(){var x=this.a.c
x.toString
C.SH(x,$.b5Y)
return null},
$S:0}
C.cij.prototype={
$1(d){var x=this.a
return x.n(new C.cih(x,d))},
$S:35}
C.cih.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cik.prototype={
$0(){var x=this.a
return x.n(new C.cig(x))},
$S:0}
C.cig.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cum.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cun.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckZ.prototype={
$3(d,e,f){return new C.B6(this.a.c,null)},
$S:z+11}
C.cl_.prototype={
$3(d,e,f){if(f==null)return e
return new A.bg(B.an,null,B.cC,B.m,A.a([new C.B6(this.a.c,null),D.a9L],y.p),null)},
$C:"$3",
$R:3,
$S:430}
C.ciF.prototype={
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
x.ahO(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h6(w,"load",new C.ciD(x),!1,v)
w=x.e
w.toString
A.h6(w,"error",new C.ciE(x),!1,v)
x=x.e
x.toString
return x},
$S:1472}
C.ciD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ciC(x))},
$S:40}
C.ciC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ciE.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ciB(x))},
$S:40}
C.ciB.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.ciA.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJW.prototype={
$1(d){var x=new A.AG([],[]).ED(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1473};(function aliases(){var x=C.aci.prototype
x.aMM=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7M.prototype,"gap6","b8I",1)
x(v,"gb9f","b9g",1)
x(v,"gbbE","bbF",6)
w(C,"dCj","d0m",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.v3,[C.cNg,C.cNf,C.b68,C.b69,C.b60,C.b61,C.b62,C.b63,C.b64,C.b65,C.b66,C.b67,C.b6_,C.b5Z,C.cit,C.ciy,C.ciw,C.cio,C.cij,C.ckZ,C.cl_,C.ciF,C.ciD,C.ciE,C.cJW])
w(A.Uf,[C.cNb,C.cNc,C.cNd,C.cNe,C.cis,C.cir,C.cip,C.ciq,C.cix,C.ciu,C.ciz,C.cim,C.cin,C.cii,C.cih,C.cik,C.cig,C.cum,C.cun,C.ciC,C.ciB,C.ciA])
w(A.aD,[C.Ia,C.Qn,C.axM,C.aEX,C.aEY,C.ayO,C.aEW,C.azU,C.auo,C.azY,C.B6])
w(A.ai,[C.mg,C.o5])
w(A.ad,[C.Fg,C.Ff,C.a_5,C.Fh])
w(A.ae,[C.a7M,C.ayH,C.aci,C.ayJ])
w(A.Ug,[C.civ,C.cil])
v(C.Fk,A.avd)
v(C.ayI,C.aci)
x(C.aci,A.e2)})()
A.d3B(b.typeUniverse,JSON.parse('{"Fg":{"ad":[],"p":[]},"Qn":{"aD":[],"p":[]},"Ff":{"ad":[],"p":[]},"Ia":{"aD":[],"p":[]},"a7M":{"ae":["Fg"]},"axM":{"aD":[],"p":[]},"ayH":{"ae":["Ff"]},"aEX":{"aD":[],"p":[]},"aEY":{"aD":[],"p":[]},"ayO":{"aD":[],"p":[]},"aEW":{"aD":[],"p":[]},"azU":{"aD":[],"p":[]},"auo":{"aD":[],"p":[]},"a_5":{"ad":[],"p":[]},"B6":{"aD":[],"p":[]},"ayI":{"ae":["a_5"]},"azY":{"aD":[],"p":[]},"Fh":{"ad":[],"p":[]},"ayJ":{"ae":["Fh"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<z>"),e:x("af<mg>"),s:x("af<m>"),p:x("af<p>"),t:x("af<Q>"),X:x("a8<mg>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("md"),_:x("z7"),k:x("mg"),N:x("m"),Y:x("bs<a9>"),W:x("dD<m>"),J:x("hY<Q>"),j:x("hY<o5?>"),E:x("x1<ct>"),q:x("R1"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a63=new A.aH(B.N,1.6,B.o,-1)
D.bmS=new A.ao(18,18,B.It,null)
D.a9L=new A.dv(B.O,null,null,D.bmS,null)
D.O6=new A.P(983224,"MaterialIcons",!1)
D.au4=new A.a6(D.O6,48,B.b9,null,null,null)
D.bt_=new A.I(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCS=new A.y("Powered off",null,D.bt_,null,null,null,null,null,null,null,null)
D.aGs=x([D.au4,B.y,D.bCS],y.p)
D.agi=new A.eW(B.X,B.e,B.P,B.j,null,B.k,null,0,D.aGs,null)
D.a9S=new A.dv(B.O,null,null,D.agi,null)
D.aai=new A.hO(2,null,null,null,null,B.U,null,null,null,null)
D.acT=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.ado=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.af5=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.aiG=new A.U(0,3,0,3)
D.aiR=new A.U(10,0,10,88)
D.aja=new A.U(12,6,12,10)
D.ajn=new A.U(14,8,14,6)
D.ajU=new A.U(18,12,18,12)
D.akn=new A.U(20,18,20,8)
D.akv=new A.U(20,8,20,20)
D.LK=new A.U(8,6,15,8)
D.aq1=new A.P(983222,"MaterialIcons",!1)
D.arz=new A.a6(B.hq,26,B.N,null,null,null)
D.arD=new A.a6(B.Nf,18,null,null,null,null)
D.arS=new A.a6(B.o1,14,B.U,null,null,null)
D.aqh=new A.P(983420,"MaterialIcons",!1)
D.asG=new A.a6(D.aqh,14,B.U,null,null,null)
D.aoK=new A.P(62895,"MaterialIcons",!1)
D.asK=new A.a6(D.aoK,14,B.U,null,null,null)
D.avs=new A.a6(B.m5,20,null,null,null,null)
D.avI=new A.a6(B.eZ,16,null,null,null,null)
D.aIv=x([B.aj,B.Z],y.O)
D.Po=new A.au(B.ao,B.aw,B.B,D.aIv,null,null)
D.bgR=new A.aP("NGMY OS","14.2.1")
D.bg1=new A.aP("VirtualDroid","13.8.4")
D.bg0=new A.aP("NGMY OS","15.0.0")
D.bgy=new A.aP("VirtualDroid","14.1.2")
D.bg_=new A.aP("NGMY Tab OS","12.9.7")
D.bfZ=new A.aP("NGMY OS","13.5.3")
D.bfQ=new A.aP("VirtualDroid","15.2.0")
D.bgg=new A.aP("NGMY OS","14.8.1")
D.bgD=new A.aP("NGMY Tab OS","13.2.4")
D.bh_=new A.aP("VirtualDroid","12.6.9")
D.bfN=new A.aP("NGMY OS","16.0.1")
D.bfF=new A.aP("VirtualDroid","14.9.0")
D.bgL=new A.aP("NGMY Tab OS","14.0.3")
D.bg7=new A.aP("NGMY OS","13.1.8")
D.bfM=new A.aP("VirtualDroid","13.4.5")
D.bfY=new A.aP("NGMY OS","15.3.2")
D.bgE=new A.aP("NGMY Tab OS","12.4.1")
D.bgN=new A.aP("VirtualDroid","16.1.0")
D.bgf=new A.aP("NGMY OS","14.4.6")
D.bgS=new A.aP("VirtualDroid","15.0.8")
D.aI7=x([D.bgR,D.bg1,D.bg0,D.bgy,D.bg_,D.bfZ,D.bfQ,D.bgg,D.bgD,D.bh_,D.bfN,D.bfF,D.bgL,D.bg7,D.bfM,D.bfY,D.bgE,D.bgN,D.bgf,D.bgS],A.bm("af<+(m,m)>"))
D.bj0=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.biz=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.biu=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.biD=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.biq=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.biF=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bj2=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bir=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.biy=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.biH=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bip=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.biV=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.biS=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bix=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.biP=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.biO=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bio=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.biC=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.biM=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.biR=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qo=x([D.bj0,D.biz,D.biu,D.biD,D.biq,D.biF,D.bj2,D.bir,D.biy,D.biH,D.bip,D.biV,D.biS,D.bix,D.biP,D.biO,D.bio,D.biC,D.biM,D.biR],A.bm("af<+(m,m,a9,a9,m)>"))
D.aN2=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X9=new C.Fk(0,"youtube")
D.Xa=new C.Fk(1,"tiktok")
D.Ev=new C.Fk(2,"instagram")
D.Xb=new C.Fk(3,"facebook")
D.bbI=new C.Fk(4,"other")
D.bmv=new A.ao(3,null,null,null)
D.bn8=new A.iM(4,10,8,0.52,null)
D.bDM=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bq8=new A.aO(D.bDM,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.btj=new A.I(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCa=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bEf=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHX=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bIh=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bR6=new C.azU(null)})();(function staticFields(){$.d0l=20
$.amn=null
$.b5Y=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGt","xT",()=>A.Pc(0))
x($,"dGu","JK",()=>A.Pc(null))})()};
(a=>{a["+0dvMVgnBTfvQiZ0Q4isUv3dOrA="]=a.current})($__dart_deferred_initializers__);