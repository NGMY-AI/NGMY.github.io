((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dDk(d,e){A.ac(d,!1).cL(A.ep(new C.cNf(e),!0,null,y.H))},
SG(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SG=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JK()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.ak()
t=new A.a9(new A.aK(o,B.a_,B.V),u)
x=3
return A.b(A.d9(B.C,null,new C.cNe(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SG)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dlM(s)
if(r==null){d.E(y.q).f.O(D.bq1)
x=1
break}x=4
return A.b(A.bR(B.fh,null,y.H),$async$SG)
case 4:if(d.e==null){x=1
break}o=B.p.aJ(e,1,999)
$.d0k=o
q=C.dlH(o)
o=$.xT()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQQ(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SG,w)},
d0n(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fk(d){return C.dlP(d)},
dlP(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fk=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$Fk)
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
l=A.ee(l,new C.b66(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b67(),k),k.k("L.E"))
r=j
if(J.a4(r)>=20){v=r
x=1
break}q=C.d0o(r)
x=12
return A.b(C.Fj(a2,q),$async$Fk)
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
case 19:n=C.d0n(A.K(o,y.N,y.z))
m=C.d0o(A.a([n],y.e))
x=21
return A.b(C.Fj(a2,m),$async$Fk)
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
case 18:case 14:r=C.dlN()
x=22
return A.b(C.Fj(a2,r),$async$Fk)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fk,w)},
d0o(d){var x=A.S(d).k("C<1,m>"),w=new A.C(d,new C.b5Z(),x).eu(0),v=new A.C(d,new C.b6_(),x).eu(0),u=new A.C(d,new C.b60(),x).eu(0),t=new A.C(d,new C.b61(),x).eu(0),s=A.bc(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQR(null,r,v,u,w,t));++r}return s},
amn(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amn=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fk(d),$async$amn)
case 3:u=f
t=y.N
s=J.cj(u)
r=s.dd(u,new C.b62(),t).eu(0)
q=s.dd(u,new C.b63(),t).eu(0)
p=s.dd(u,new C.b64(),t).eu(0)
o=s.dd(u,new C.b65(),t).eu(0)
n=C.cQR(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fj(d,u),$async$amn)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amn,w)},
Fj(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fj=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fj)
case 2:v=g
u=B.a.i(d)
t=J.b3(e,new C.b5Y(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.al("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fj)
case 3:return A.f(null,w)}})
return A.h($async$Fj,w)},
dlN(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dW(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQR(x,x,u,t,v,s)
return r},
cQR(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jW(),i=d==null,h=D.Qq[B.p.ao(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qq[B.p.ao(i?e+s:d,20)]
if(a1.q(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bA(256)
o=new A.C(q,new C.b5X(),A.S(q).k("C<1,m>")).f9(0)
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
l=D.aMW[x]
k=D.aI0[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bA(99999),"Device "+B.a.bG(B.p.t(e+1),2,"0"),v,l,C.dlO(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.O(Date.now(),0,!1).a1().Y())},
dlO(d,e){var x,w=J.dW(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bG(B.p.kP(d.bA(256),16),2,"0")
return B.d.f9(w)},
cNf:function cNf(d){this.a=d},
cNe:function cNe(d,e){this.a=d
this.b=e},
cNa:function cNa(d){this.a=d},
cNb:function cNb(d){this.a=d},
cNc:function cNc(d){this.a=d},
cNd:function cNd(d,e){this.a=d
this.b=e},
Ib:function Ib(d,e,f,g){var _=this
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
b66:function b66(){},
b67:function b67(){},
b5Z:function b5Z(){},
b6_:function b6_(){},
b60:function b60(){},
b61:function b61(){},
b62:function b62(){},
b63:function b63(){},
b64:function b64(){},
b65:function b65(){},
b5Y:function b5Y(){},
b5X:function b5X(){},
Fh:function Fh(d,e){this.c=d
this.a=e},
a7M:function a7M(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cip:function cip(){},
cio:function cio(d,e){this.a=d
this.b=e},
cim:function cim(d){this.a=d},
cin:function cin(d,e){this.a=d
this.b=e},
ciq:function ciq(d){this.a=d},
ciu:function ciu(d){this.a=d},
civ:function civ(d,e){this.a=d
this.b=e},
cit:function cit(d,e,f){this.a=d
this.b=e
this.c=f},
cis:function cis(d,e){this.a=d
this.b=e},
cir:function cir(d,e){this.a=d
this.b=e},
ciw:function ciw(d){this.a=d},
Qm:function Qm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axL:function axL(d,e){this.c=d
this.a=e},
Fg:function Fg(d,e){this.c=d
this.a=e},
ayG:function ayG(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cij:function cij(d){this.a=d},
cik:function cik(d){this.a=d},
cil:function cil(d){this.a=d},
cii:function cii(d,e){this.a=d
this.b=e},
cif:function cif(d){this.a=d},
cig:function cig(d){this.a=d},
cie:function cie(d,e){this.a=d
this.b=e},
cih:function cih(d){this.a=d},
cid:function cid(d){this.a=d},
aEW:function aEW(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEX:function aEX(d,e,f){this.c=d
this.d=e
this.a=f},
ayN:function ayN(d,e){this.c=d
this.a=e},
aEV:function aEV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cuj:function cuj(d){this.a=d},
cuk:function cuk(d){this.a=d},
azT:function azT(d){this.a=d},
aun:function aun(d,e){this.c=d
this.a=e},
dlM(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a_(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d9(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o5(x,C.b5V(u,!1),D.Xa,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dlL(w)
if(t!=null)return new C.o5(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Xb,"TikTok",q,q)
s=C.dlK(x,w)
if(s!=null)return s
r=C.dlJ(x,w)
if(r!=null)return r
if(B.a.q(w,"tiktok.com")||B.a.q(w,"instagram.com")||B.a.q(w,"facebook.com")||B.a.q(w,"fb.watch")||B.a.q(w,"youtube.com")||B.a.q(w,"youtu.be"))return new C.o5(x,x,D.bbB,"Video",q,q)
return q},
dlK(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d9(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o5(d,"https://www.instagram.com/reel/"+x+u,D.Et,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d9(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o5(d,"https://www.instagram.com/p/"+x+u,D.Et,t,v,v)}return v},
dlJ(d,e){if(!B.a.q(e,"facebook.com")&&!B.a.q(e,"fb.watch")&&!B.a.q(e,"fb.com"))return null
return new C.o5(d,"https://www.facebook.com/plugins/video.php?href="+A.f8(2,d,B.aJ,!1)+"&show_text=false&width=734",D.Xc,"Facebook",null,null)},
dlL(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d9(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d9(d)
return x==null?null:x.b[1]},
Fl:function Fl(d,e){this.a=d
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
ayH:function ayH(d,e){var _=this
_.d=$
_.cO$=d
_.aW$=e
_.c=_.a=null},
azX:function azX(d,e){this.c=d
this.a=e},
ckW:function ckW(d){this.a=d},
ckX:function ckX(d){this.a=d},
B6:function B6(d,e){this.c=d
this.a=e},
aci:function aci(){},
dC7(d){var x=window
x.toString
A.h6(x,"message",new C.cJU(d),!1,y._)},
Fi:function Fi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayI:function ayI(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ciC:function ciC(d){this.a=d},
ciA:function ciA(d){this.a=d},
ciz:function ciz(d){this.a=d},
ciB:function ciB(d){this.a=d},
ciy:function ciy(d){this.a=d},
cix:function cix(d){this.a=d},
cJU:function cJU(d){this.a=d},
b5V(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.be(x,"&")},
d0h(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d9(d)
return x==null?null:x.b[1]},
d0i(d){var x=A.bz(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bz(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d0j(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dlG(d,e,f){var x=C.d0h(d)
if(x!=null){if(f)return C.d0j(x,e,!0)
return C.d0i(C.b5V(x,e))}return C.d0i(d)},
dlH(d){if(d<=4)return 0
return B.p.b_(d-1,4)*4},
dlI(d){var x
if($.JK().a==null)return!1
x=$.xT().a
return d>=x&&d<x+4},
d0m(){var x=$.amm
if(x!=null)x.aa(0)
$.amm=null
$.xT().sv(0,0)},
d0l(){var x,w,v,u=$.JK()
if(u.a==null)return
x=$.amm
if(x!=null)x.aa(0)
w=$.d0k
if(w<=4){u=u.a
u.toString
C.cQQ(u)
return}x=$.xT()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQQ(u)},
cQQ(d){var x=$.amm
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
default:x=null}$.amm=A.dl(A.d4(0,0,0,0,x),C.dCi())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ib.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.N.p(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.ex,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dw,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fC,x,x,x)}}
C.mg.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fh.prototype={
S(){return new C.a7M(A.a([],y.e))},
giu(){return this.c}}
C.a7M.prototype={
Z(){var x=this
x.a5()
$.xT().af(0,x.gap5())
C.dC7(x.gb9a())
x.Q1()},
b8D(){if(this.c!=null)this.n(new C.cip())},
b9b(){C.d0l()},
l(){$.xT().V(0,this.gap5())
C.d0m()
$.JK().sv(0,null)
this.a3()},
Q1(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Q1=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fk(u.a.c),$async$Q1)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cio(u,t))
$.b5W=J.a4(t)
case 1:return A.f(v,w)}})
return A.h($async$Q1,w)},
PK(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PK=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cim(u))
x=3
return A.b(C.amn(u.a.c),$async$PK)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cin(u,t))
$.b5W=J.a4(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PK,w)},
bb3(d){var x=this.c
x.toString
A.ac(x,!1).cL(A.ep(new C.ciq(d),!1,null,y.H))},
bbA(){var x=this.c
x.toString
return C.SG(x,J.a4(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.Q,u=v?B.dx:B.db,t=A.aT(w,w,w,w,B.CL,w,w,w,new C.ciu(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a4(x.d)+")",r=y.p
s=A.G(A.a([t,A.H(new A.zF(A.G(A.a([A.H(new A.N(B.hY,A.j(s,1,B.ad,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aW(!1,w,!0,new A.N(B.aD,A.a5(B.eZ,B.N,w,w,28),w),B.bN,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbz(),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a0)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cP(!0,A.B(A.a([new A.N(D.LK,s,w),A.H(x.e?B.jg:new A.hY($.JK(),new C.civ(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cr(w,u,t,w,!1,!1,A.ahv(B.N,B.yQ,B.o2,D.bE8,x.e?w:new C.ciw(x)),w)}}
C.Qm.prototype={
b6K(d){var x,w=$.xT().a,v=this.d
if(C.dlI(v)){v=this.c.a
x=d.gaBX()
return new C.Fi(v+"_mini",d.gaBX(),!0,d.gaed(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_5(d,!0,!0,"Fold "+(B.p.b_(v,4)+1)+"/"+B.p.b_(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.p(0.1),B.o,1),s=A.a([new A.ag(0,B.w,B.N.p(0.18),B.ce,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aW(!1,v,!0,A.B(A.a([A.H(A.w(w,A.cT(r,A.il(A.B(A.a([new C.axL(q,w),A.H(p!=null?x.b6K(p):A.w(w,A.B(A.a([A.a5(B.hq,B.lB,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.p(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.aq,B.f,0,B.k),B.h,B.u5,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vV,B.N.p(0.85),w,w,9),D.bmo,A.j("Tap",w,w,w,w,A.l(w,w,B.c.p(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.aq,B.f,0,w,w),B.h,B.a7,w,w,w,w,w,D.aiC,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.u(w,w,t,u,s,D.Po,B.l),w,w,w,B.eJ,w,w,w),1),B.ak,A.j(q.b,1,B.ad,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.ad,w,w,A.l(w,w,A.V(d).ax.k3.p(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.ad,w,w,A.l(w,w,B.N.p(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a0)}}
C.axL.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.H(A.j(B.d.gaq(this.c.c.split("-")),x,B.ad,x,x,A.l(x,x,B.c.p(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.o1,B.c.p(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a7,x,x,x,x,x,B.Lz,x,x,x)}}
C.Fg.prototype={
S(){return new C.ayG()}}
C.ayG.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.Q,v=w?B.dx:B.db,u=A.aT(x,x,x,x,B.CL,x,x,x,new C.cij(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cr(x,v,A.cP(!0,A.B(A.a([new A.N(D.LK,A.G(A.a([u,A.H(new A.zF(A.G(A.a([A.H(new A.N(B.hY,A.j(t.b+" \xb7 "+t.c,1,B.ad,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aW(!1,x,!0,new A.N(B.aD,A.a5(B.eZ,B.N,x,x,28),x),B.bN,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cik(d),x,x,x,x,x,x,x),B.h,B.C,0,x,x,x,x,x,B.a0)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.H(new A.hY($.JK(),new C.cil(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aEW.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.N.p(0.35),B.ew,28),new A.ag(0,B.w,B.q.p(0.45),B.cB,18)],y.V),p=A.W(B.c.p(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fi(w+"_full",v,!1,x.gaed(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayN(u.r,t)}else x=new C.aun(n,t)
else x=D.bQZ
return A.w(t,A.cT(o,A.il(A.B(A.a([new C.aEX(n,m,t),A.H(x,1),new C.aEV(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.u(t,t,p,r,q,D.Po,B.l),t,s*2.05,t,B.b7,t,t,s)}}
C.aEX.prototype={
C(d){var x,w,v,u,t=null,s=new A.O(Date.now(),0,!1),r=A.eR(s)
s=A.i5(s)
x=new A.dc(r,s)
w=x.gFk()===0?12:x.gFk()
s=B.a.bG(B.p.t(s),2,"0")
r=(r<12?B.ep:B.fX)===B.ep?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l5,t,t,t),B.b0,A.j(v.b,t,t,t,t,A.l(t,t,B.c.p(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bi,D.asD,B.e9,D.arP,B.e9,D.asH],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a5(B.CE,B.N.p(0.9),t,t,12),B.e9,A.H(A.j(v.c,t,B.ad,t,t,A.l(t,t,B.c.p(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.p(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a7,t,t,t,t,t,D.ajj,t,t,t)}}
C.ayN.prototype={
C(d){var x=null
return A.w(x,A.b5(A.B(A.a([A.a5(B.vL,B.c.p(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.p(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.p(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ag,A.eq(D.avE,D.bC2,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aH(B.N.p(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u5,x,x,x,x,x,x,x,x,1/0)}}
C.aEV.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.ap_(B.O5,"YouTube",t===0,s,new C.cuj(v))
t=v.ap_(B.jF,"Device",t===1,s,new C.cuk(v))
x=s?"Power off":"Power on"
w=s?D.O6:D.apY
return A.w(u,A.G(A.a([r,B.Y,t,B.b0,A.aT(u,u,u,u,A.a5(w,s?B.b4:B.dt,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dj)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a7,u,u,u,u,u,D.aj6,u,u,u)},
ap_(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b9
else x=f?B.N:B.aa
w=f&&g?B.N.p(0.15):B.C
v=A.n(10)
u=g?h:t
return A.H(A.aU(!1,B.M,!0,v,A.aW(!1,A.n(10),!0,new A.N(B.kD,A.B(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a0),1)}}
C.azT.prototype={
C(d){return D.a9S}}
C.aun.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l0,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.p(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pY("Serial",v.c),r=x.pY("Model",v.d),q=x.pY("Device ID",v.e),p=x.pY("IMEI",v.r),o=x.pY("MAC",v.f),n=x.pY("OS",v.w+" "+v.x),m=x.pY("Location",v.y+", "+v.z),l=x.pY("Coordinates",B.i.a0(v.Q,4)+", "+B.i.a0(v.as,4)),k=x.pY("Timezone",v.at)
v=v.ax
return A.eo(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pY("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aD,w,w,B.X,!1)},
pY(d,e){var x=null
return new A.N(B.c4,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.p(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bS,A.j(e,x,x,x,x,D.btc,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fl.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o5.prototype={
gaBX(){var x=this.f
if(x!=null&&x.length!==0)return C.b5V(x,!0)
return this.b},
gaed(){var x=this.c
return x===D.Xa||x===D.Xb||x===D.Et||x===D.Xc}}
C.a_5.prototype={
S(){return new C.ayH(null,null)}}
C.ayH.prototype={
Z(){this.a5()
var x=A.bG(null,B.q5,null,1,null,this)
x.mS(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMJ()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fn(v,new A.u(v,v,v,v,v,new A.au(B.e1,B.co,B.B,A.a([B.C,B.q.p(0.55)],y.O),v,v),B.l),B.ci),s=y.Y,r=w.d
r===$&&A.c()
r=A.cN(B.hj,r,v)
x=B.c.p(0.92)
s=A.b5(new A.dS(new A.bi(r,new A.bs(0.72,1,s),s.k("bi<bq.T>")),!1,A.a5(B.hq,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.p(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.azX(u,v),t,s,A.bA(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.p(0.75)
u.push(A.bA(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.p(0.85)
u.push(A.bA(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bg(B.an,v,B.cC,B.m,u,v)}}
C.azX.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.jz(v,new C.ckW(this),B.bl,!0,x,x,new C.ckX(this),x)
return new C.B6(w,x)}}
C.B6.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aP(A.a([B.ud,B.IH],y.O),B.hq)
break
case 1:x=new A.aP(A.a([B.u5,D.adm],y.O),B.hp)
break
case 2:x=new A.aP(A.a([D.af2,D.acR],y.O),B.vO)
break
case 3:x=new A.aP(A.a([B.Z,B.dK],y.O),B.Cg)
break
case 4:x=new A.aP(A.a([B.a7,B.aj],y.O),B.m8)
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
C.Fi.prototype={
S(){return new C.ayI()}}
C.ayI.prototype={
ahN(d,e){var x,w,v=this,u="mute=1",t=C.d0h(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d0j(t,B.a.q(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b5V(t,B.a.q(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.q(x,"tiktok.com/player")||B.a.q(x,"instagram.com")||B.a.q(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dlG(e,B.a.q(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.JL()
$.oE().u0(x,new C.ciC(v),!0)}catch(w){v.r=!0
v.f=!1}},
aP(d){var x,w=this
w.b2(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cix(w))
x=w.e
x.toString
w.ahN(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.p(0.5)
return A.il(A.b5(A.a5(B.Og,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai7(u,B.ry,x)],y.p)
if(v.f)x.push(A.il(A.b5(new A.ao(w,w,D.aai,u),u,u,u),B.bU,!0))
return new A.bg(B.an,u,B.cC,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","~()","Fh(R)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","aw<~>()","Fg(R)","hY<Q>(R,o5?,p?)","Qm(R,Q)","tf(R,o5?,p?)","B6(R,ai,dh?)"])
C.cNf.prototype={
$1(d){return new C.Fh(this.a,null)},
$S:z+2}
C.cNe.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.Q,m=A.ay(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.N.p(0.22),B.ew,32)],y.V),h=A.W(n?B.bo:B.N.p(0.18),B.o,1),g=A.n(28),f=B.N.p(n?0.35:0.14)
k=A.a([f,B.R.p(n?0.18:0.08)],k)
f=A.w(o,D.arv,B.h,o,o,new A.u(B.N.p(0.18),o,A.W(B.N.p(0.45),B.o,1),o,o,o,B.ai),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.H(A.B(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fQ,x,A.aT(o,o,o,o,A.a5(B.cG,n?B.aa:B.bU,o,o,o),o,o,o,new C.cNa(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.au(B.a2,B.a4,B.B,k,o,o),B.l),o,o,o,B.Lk,o,o,o)
f=A.eK(B.c3,A.a([new C.Ib("YouTube",B.CD,n,o),new C.Ib("TikTok",B.hp,n,o),new C.Ib("Instagram",B.vO,n,o),new C.Ib("Facebook",B.Cg,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.by:B.ff,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a5(B.jG,B.N.p(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bo:B.b5
v=A.B(A.a([f,B.am,A.at(o,B.G,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bd(o,new A.b0(4,r,B.I),o,o,o,o,o,o,!0,new A.b0(4,q,new A.aH(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b0(4,A.n(16),D.a63),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.K,o,o,o,o)],w),B.ac,B.e,B.f,0,B.k)
f=A.iN(D.arz,D.bHQ,new C.cNb(d),A.jN(o,o,o,o,o,o,o,o,o,o,o,n?B.aF:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fn(A.cT(g,A.B(A.a([k,new A.N(D.akj,v,o),new A.N(D.akr,A.G(A.a([f,B.b0,A.c_(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.W,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cNc(d),o,o),B.Y,A.dH(D.avo,D.bIa,new C.cNd(d,x),A.by(B.N,o,o,o,B.c,o,D.ajQ,o,new A.bx(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ac,B.e,B.P,0,B.k),B.au),new A.u(o,o,h,l,i,new A.au(B.ao,B.aw,B.B,j,o,o),B.l),B.ci),o)},
$S:60}
C.cNa.prototype={
$0(){A.ac(this.a,!1).U(null)
return null},
$S:0}
C.cNb.prototype={
$0(){C.d0m()
$.JK().sv(0,null)
A.ac(this.a,!1).U(null)},
$S:0}
C.cNc.prototype={
$0(){A.ac(this.a,!1).U(null)
return null},
$S:0}
C.cNd.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.ac(this.a,!1).U(x)
return null},
$S:0}
C.b66.prototype={
$1(d){return C.d0n(A.K(d,y.N,y.z))},
$S:z+3}
C.b67.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b5Z.prototype={
$1(d){return d.c},
$S:z+0}
C.b6_.prototype={
$1(d){return d.r},
$S:z+0}
C.b60.prototype={
$1(d){return d.f},
$S:z+0}
C.b61.prototype={
$1(d){return d.at},
$S:z+0}
C.b62.prototype={
$1(d){return d.c},
$S:z+0}
C.b63.prototype={
$1(d){return d.r},
$S:z+0}
C.b64.prototype={
$1(d){return d.f},
$S:z+0}
C.b65.prototype={
$1(d){return d.at},
$S:z+0}
C.b5Y.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b5X.prototype={
$1(d){return B.a.bG(B.p.kP(d,16),2,"0").toUpperCase()},
$S:70}
C.cip.prototype={
$0(){},
$S:0}
C.cio.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cim.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cin.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.ciq.prototype={
$1(d){return new C.Fg(this.a,null)},
$S:z+7}
C.ciu.prototype={
$0(){return A.ac(this.a,!1).es()},
$S:0}
C.civ.prototype={
$3(d,e,f){return new A.hY($.xT(),new C.cit(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cit.prototype={
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
B.d.A(u,A.a([A.cT(t,new A.iV(1.7777777777777777,new C.Fi("fleet_master",s,!1,k.gaed(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a4(t)+".":""+J.a4(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.p(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yl(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jK(new A.N(B.AL,A.B(v,B.t,B.e,B.f,0,B.k),l),l),new A.of(D.aiN,A.apT(new A.nf(new C.cis(u,k),J.a4(u.d),!1,!0,!0,A.uL(),l),D.bn1),l)],x))},
$S:1469}
C.cis.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qm(w,e,J.a4(x.d),new C.cir(x,w),this.b,null)},
$S:z+9}
C.cir.prototype={
$0(){return this.a.bb3(this.b)},
$S:0}
C.ciw.prototype={
$0(){this.a.PK()
return null},
$S:0}
C.cij.prototype={
$0(){return A.ac(this.a,!1).es()},
$S:0}
C.cik.prototype={
$0(){C.SG(this.a,$.b5W)
return null},
$S:0}
C.cil.prototype={
$3(d,e,f){return A.hd(new C.cii(this.a,e))},
$S:z+10}
C.cii.prototype={
$2(d,e){var x,w=null,v=B.i.aJ(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b5(A.co(A.B(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.p(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.am,new C.aEW(v,t.a.c,t.e,t.d,new C.cif(t),new C.cig(t),new C.cih(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v6,w,w,B.X),w,w,w)},
$S:1470}
C.cif.prototype={
$0(){var x=this.a.c
x.toString
C.SG(x,$.b5W)
return null},
$S:0}
C.cig.prototype={
$1(d){var x=this.a
return x.n(new C.cie(x,d))},
$S:35}
C.cie.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cih.prototype={
$0(){var x=this.a
return x.n(new C.cid(x))},
$S:0}
C.cid.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cuj.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cuk.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckW.prototype={
$3(d,e,f){return new C.B6(this.a.c,null)},
$S:z+11}
C.ckX.prototype={
$3(d,e,f){if(f==null)return e
return new A.bg(B.an,null,B.cC,B.m,A.a([new C.B6(this.a.c,null),D.a9L],y.p),null)},
$C:"$3",
$R:3,
$S:431}
C.ciC.prototype={
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
x.ahN(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h6(w,"load",new C.ciA(x),!1,v)
w=x.e
w.toString
A.h6(w,"error",new C.ciB(x),!1,v)
x=x.e
x.toString
return x},
$S:1471}
C.ciA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ciz(x))},
$S:39}
C.ciz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ciB.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ciy(x))},
$S:39}
C.ciy.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cix.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJU.prototype={
$1(d){var x=new A.AG([],[]).EC(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1472};(function aliases(){var x=C.aci.prototype
x.aMJ=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7M.prototype,"gap5","b8D",1)
x(v,"gb9a","b9b",1)
x(v,"gbbz","bbA",6)
w(C,"dCi","d0l",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.v3,[C.cNf,C.cNe,C.b66,C.b67,C.b5Z,C.b6_,C.b60,C.b61,C.b62,C.b63,C.b64,C.b65,C.b5Y,C.b5X,C.ciq,C.civ,C.cit,C.cil,C.cig,C.ckW,C.ckX,C.ciC,C.ciA,C.ciB,C.cJU])
w(A.Uf,[C.cNa,C.cNb,C.cNc,C.cNd,C.cip,C.cio,C.cim,C.cin,C.ciu,C.cir,C.ciw,C.cij,C.cik,C.cif,C.cie,C.cih,C.cid,C.cuj,C.cuk,C.ciz,C.ciy,C.cix])
w(A.aD,[C.Ib,C.Qm,C.axL,C.aEW,C.aEX,C.ayN,C.aEV,C.azT,C.aun,C.azX,C.B6])
w(A.ai,[C.mg,C.o5])
w(A.ad,[C.Fh,C.Fg,C.a_5,C.Fi])
w(A.ae,[C.a7M,C.ayG,C.aci,C.ayI])
w(A.Ug,[C.cis,C.cii])
v(C.Fl,A.avc)
v(C.ayH,C.aci)
x(C.aci,A.e1)})()
A.d3A(b.typeUniverse,JSON.parse('{"Fh":{"ad":[],"p":[]},"Qm":{"aD":[],"p":[]},"Fg":{"ad":[],"p":[]},"Ib":{"aD":[],"p":[]},"a7M":{"ae":["Fh"]},"axL":{"aD":[],"p":[]},"ayG":{"ae":["Fg"]},"aEW":{"aD":[],"p":[]},"aEX":{"aD":[],"p":[]},"ayN":{"aD":[],"p":[]},"aEV":{"aD":[],"p":[]},"azT":{"aD":[],"p":[]},"aun":{"aD":[],"p":[]},"a_5":{"ad":[],"p":[]},"B6":{"aD":[],"p":[]},"ayH":{"ae":["a_5"]},"azX":{"aD":[],"p":[]},"Fi":{"ad":[],"p":[]},"ayI":{"ae":["Fi"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<z>"),e:x("af<mg>"),s:x("af<m>"),p:x("af<p>"),t:x("af<Q>"),X:x("a8<mg>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("md"),_:x("z7"),k:x("mg"),N:x("m"),Y:x("bs<aa>"),W:x("dD<m>"),J:x("hY<Q>"),j:x("hY<o5?>"),E:x("x1<ct>"),q:x("R0"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a63=new A.aH(B.N,1.6,B.o,-1)
D.bmL=new A.ao(18,18,B.Is,null)
D.a9L=new A.dv(B.O,null,null,D.bmL,null)
D.O6=new A.P(983224,"MaterialIcons",!1)
D.au0=new A.a6(D.O6,48,B.b9,null,null,null)
D.bsT=new A.I(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCL=new A.y("Powered off",null,D.bsT,null,null,null,null,null,null,null,null)
D.aGl=x([D.au0,B.y,D.bCL],y.p)
D.age=new A.eW(B.X,B.e,B.P,B.j,null,B.k,null,0,D.aGl,null)
D.a9S=new A.dv(B.O,null,null,D.age,null)
D.aai=new A.hO(2,null,null,null,null,B.U,null,null,null,null)
D.acR=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.adm=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.af2=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.aiC=new A.U(0,3,0,3)
D.aiN=new A.U(10,0,10,88)
D.aj6=new A.U(12,6,12,10)
D.ajj=new A.U(14,8,14,6)
D.ajQ=new A.U(18,12,18,12)
D.akj=new A.U(20,18,20,8)
D.akr=new A.U(20,8,20,20)
D.LK=new A.U(8,6,15,8)
D.apY=new A.P(983222,"MaterialIcons",!1)
D.arv=new A.a6(B.hq,26,B.N,null,null,null)
D.arz=new A.a6(B.Nf,18,null,null,null,null)
D.arP=new A.a6(B.o1,14,B.U,null,null,null)
D.aqd=new A.P(983420,"MaterialIcons",!1)
D.asD=new A.a6(D.aqd,14,B.U,null,null,null)
D.aoG=new A.P(62895,"MaterialIcons",!1)
D.asH=new A.a6(D.aoG,14,B.U,null,null,null)
D.avo=new A.a6(B.m4,20,null,null,null,null)
D.avE=new A.a6(B.eZ,16,null,null,null,null)
D.aIo=x([B.aj,B.Z],y.O)
D.Po=new A.au(B.ao,B.aw,B.B,D.aIo,null,null)
D.bgK=new A.aP("NGMY OS","14.2.1")
D.bfV=new A.aP("VirtualDroid","13.8.4")
D.bfU=new A.aP("NGMY OS","15.0.0")
D.bgr=new A.aP("VirtualDroid","14.1.2")
D.bfT=new A.aP("NGMY Tab OS","12.9.7")
D.bfS=new A.aP("NGMY OS","13.5.3")
D.bfJ=new A.aP("VirtualDroid","15.2.0")
D.bg9=new A.aP("NGMY OS","14.8.1")
D.bgw=new A.aP("NGMY Tab OS","13.2.4")
D.bgT=new A.aP("VirtualDroid","12.6.9")
D.bfG=new A.aP("NGMY OS","16.0.1")
D.bfy=new A.aP("VirtualDroid","14.9.0")
D.bgE=new A.aP("NGMY Tab OS","14.0.3")
D.bg0=new A.aP("NGMY OS","13.1.8")
D.bfF=new A.aP("VirtualDroid","13.4.5")
D.bfR=new A.aP("NGMY OS","15.3.2")
D.bgx=new A.aP("NGMY Tab OS","12.4.1")
D.bgG=new A.aP("VirtualDroid","16.1.0")
D.bg8=new A.aP("NGMY OS","14.4.6")
D.bgL=new A.aP("VirtualDroid","15.0.8")
D.aI0=x([D.bgK,D.bfV,D.bfU,D.bgr,D.bfT,D.bfS,D.bfJ,D.bg9,D.bgw,D.bgT,D.bfG,D.bfy,D.bgE,D.bg0,D.bfF,D.bfR,D.bgx,D.bgG,D.bg8,D.bgL],A.bm("af<+(m,m)>"))
D.biU=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bis=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bin=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.biw=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bij=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.biy=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.biW=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bik=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bir=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.biA=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bii=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.biO=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.biL=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.biq=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.biI=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.biH=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bih=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.biv=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.biF=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.biK=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qq=x([D.biU,D.bis,D.bin,D.biw,D.bij,D.biy,D.biW,D.bik,D.bir,D.biA,D.bii,D.biO,D.biL,D.biq,D.biI,D.biH,D.bih,D.biv,D.biF,D.biK],A.bm("af<+(m,m,aa,aa,m)>"))
D.aMW=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.Xa=new C.Fl(0,"youtube")
D.Xb=new C.Fl(1,"tiktok")
D.Et=new C.Fl(2,"instagram")
D.Xc=new C.Fl(3,"facebook")
D.bbB=new C.Fl(4,"other")
D.bmo=new A.ao(3,null,null,null)
D.bn1=new A.iL(4,10,8,0.52,null)
D.bDF=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bq1=new A.aO(D.bDF,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.btc=new A.I(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC2=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bE8=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHQ=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bIa=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQZ=new C.azT(null)})();(function staticFields(){$.d0k=20
$.amm=null
$.b5W=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGs","xT",()=>A.Pb(0))
x($,"dGt","JK",()=>A.Pb(null))})()};
(a=>{a["UOD8nCeokFL8taUDvcj2xCnbxSM="]=a.current})($__dart_deferred_initializers__);