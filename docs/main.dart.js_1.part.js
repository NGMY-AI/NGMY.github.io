((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCN(d,e){A.ab(d,!1).cL(A.eo(new C.cMH(e),!0,null,y.H))},
SG(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SG=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JJ()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.W),u)
x=3
return A.b(A.dd(B.C,null,new C.cMG(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SG)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dle(s)
if(r==null){d.E(y.q).f.O(D.bpH)
x=1
break}x=4
return A.b(A.bR(B.fg,null,y.H),$async$SG)
case 4:if(d.e==null){x=1
break}o=B.p.aJ(e,1,999)
$.d_L=o
q=C.dl9(o)
o=$.xT()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQh(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SG,w)},
d_O(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fi(d){return C.dlh(d)},
dlh(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fi=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$Fi)
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
case 10:l=J.ii(s,y.f)
l=A.ee(l,new C.b65(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b66(),k),k.k("L.E"))
r=j
if(J.a4(r)>=20){v=r
x=1
break}q=C.d_P(r)
x=12
return A.b(C.Fh(a2,q),$async$Fi)
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
case 19:n=C.d_O(A.K(o,y.N,y.z))
m=C.d_P(A.a([n],y.e))
x=21
return A.b(C.Fh(a2,m),$async$Fi)
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
case 18:case 14:r=C.dlf()
x=22
return A.b(C.Fh(a2,r),$async$Fi)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fi,w)},
d_P(d){var x=A.S(d).k("B<1,m>"),w=new A.B(d,new C.b5Y(),x).eu(0),v=new A.B(d,new C.b5Z(),x).eu(0),u=new A.B(d,new C.b6_(),x).eu(0),t=new A.B(d,new C.b60(),x).eu(0),s=A.bc(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQi(null,r,v,u,w,t));++r}return s},
amn(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amn=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fi(d),$async$amn)
case 3:u=f
t=y.N
s=J.cj(u)
r=s.de(u,new C.b61(),t).eu(0)
q=s.de(u,new C.b62(),t).eu(0)
p=s.de(u,new C.b63(),t).eu(0)
o=s.de(u,new C.b64(),t).eu(0)
n=C.cQi(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fh(d,u),$async$amn)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amn,w)},
Fh(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fh=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fh)
case 2:v=g
u=B.a.i(d)
t=J.b2(e,new C.b5X(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.al("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fh)
case 3:return A.f(null,w)}})
return A.h($async$Fh,w)},
dlf(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dW(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQi(x,x,u,t,v,s)
return r},
cQi(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jV(),i=d==null,h=D.Qg[B.p.ao(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qg[B.p.ao(i?e+s:d,20)]
if(a1.q(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bA(256)
o=new A.B(q,new C.b5W(),A.S(q).k("B<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bA(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bG(B.p.kP(j.bA(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.q(0,v)&&!f.q(0,u)&&!g.q(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.ao(e,20)
l=D.aME[x]
k=D.aHJ[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bA(99999),"Device "+B.a.bG(B.p.t(e+1),2,"0"),v,l,C.dlg(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.O(Date.now(),0,!1).a1().Y())},
dlg(d,e){var x,w=J.dW(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bG(B.p.kP(d.bA(256),16),2,"0")
return B.d.f9(w)},
cMH:function cMH(d){this.a=d},
cMG:function cMG(d,e){this.a=d
this.b=e},
cMC:function cMC(d){this.a=d},
cMD:function cMD(d){this.a=d},
cME:function cME(d){this.a=d},
cMF:function cMF(d,e){this.a=d
this.b=e},
I9:function I9(d,e,f,g){var _=this
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
b65:function b65(){},
b66:function b66(){},
b5Y:function b5Y(){},
b5Z:function b5Z(){},
b6_:function b6_(){},
b60:function b60(){},
b61:function b61(){},
b62:function b62(){},
b63:function b63(){},
b64:function b64(){},
b5X:function b5X(){},
b5W:function b5W(){},
Ff:function Ff(d,e){this.c=d
this.a=e},
a7L:function a7L(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
chR:function chR(){},
chQ:function chQ(d,e){this.a=d
this.b=e},
chO:function chO(d){this.a=d},
chP:function chP(d,e){this.a=d
this.b=e},
chS:function chS(d){this.a=d},
chW:function chW(d){this.a=d},
chX:function chX(d,e){this.a=d
this.b=e},
chV:function chV(d,e,f){this.a=d
this.b=e
this.c=f},
chU:function chU(d,e){this.a=d
this.b=e},
chT:function chT(d,e){this.a=d
this.b=e},
chY:function chY(d){this.a=d},
Qm:function Qm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axK:function axK(d,e){this.c=d
this.a=e},
Fe:function Fe(d,e){this.c=d
this.a=e},
ayF:function ayF(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
chL:function chL(d){this.a=d},
chM:function chM(d){this.a=d},
chN:function chN(d){this.a=d},
chK:function chK(d,e){this.a=d
this.b=e},
chH:function chH(d){this.a=d},
chI:function chI(d){this.a=d},
chG:function chG(d,e){this.a=d
this.b=e},
chJ:function chJ(d){this.a=d},
chF:function chF(d){this.a=d},
aEV:function aEV(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEW:function aEW(d,e,f){this.c=d
this.d=e
this.a=f},
ayM:function ayM(d,e){this.c=d
this.a=e},
aEU:function aEU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctL:function ctL(d){this.a=d},
ctM:function ctM(d){this.a=d},
azS:function azS(d){this.a=d},
aum:function aum(d,e){this.c=d
this.a=e},
dle(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).da(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o4(x,C.b5U(u,!1),D.X0,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dld(w)
if(t!=null)return new C.o4(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X1,"TikTok",q,q)
s=C.dlc(x,w)
if(s!=null)return s
r=C.dlb(x,w)
if(r!=null)return r
if(B.a.q(w,"tiktok.com")||B.a.q(w,"instagram.com")||B.a.q(w,"facebook.com")||B.a.q(w,"fb.watch")||B.a.q(w,"youtube.com")||B.a.q(w,"youtu.be"))return new C.o4(x,x,D.bbi,"Video",q,q)
return q},
dlc(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).da(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/reel/"+x+u,D.El,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).da(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/p/"+x+u,D.El,t,v,v)}return v},
dlb(d,e){if(!B.a.q(e,"facebook.com")&&!B.a.q(e,"fb.watch")&&!B.a.q(e,"fb.com"))return null
return new C.o4(d,"https://www.facebook.com/plugins/video.php?href="+A.f6(2,d,B.aJ,!1)+"&show_text=false&width=734",D.X2,"Facebook",null,null)},
dld(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).da(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).da(d)
return x==null?null:x.b[1]},
Fj:function Fj(d,e){this.a=d
this.b=e},
o4:function o4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_4:function a_4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayG:function ayG(d,e){var _=this
_.d=$
_.cO$=d
_.aW$=e
_.c=_.a=null},
azW:function azW(d,e){this.c=d
this.a=e},
ckn:function ckn(d){this.a=d},
cko:function cko(d){this.a=d},
B5:function B5(d,e){this.c=d
this.a=e},
ach:function ach(){},
dBA(d){var x=window
x.toString
A.h6(x,"message",new C.cJl(d),!1,y._)},
Fg:function Fg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayH:function ayH(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ci3:function ci3(d){this.a=d},
ci1:function ci1(d){this.a=d},
ci0:function ci0(d){this.a=d},
ci2:function ci2(d){this.a=d},
ci_:function ci_(d){this.a=d},
chZ:function chZ(d){this.a=d},
cJl:function cJl(d){this.a=d},
b5U(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_I(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).da(d)
return x==null?null:x.b[1]},
d_J(d){var x=A.by(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.by(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_K(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dl8(d,e,f){var x=C.d_I(d)
if(x!=null){if(f)return C.d_K(x,e,!0)
return C.d_J(C.b5U(x,e))}return C.d_J(d)},
dl9(d){if(d<=4)return 0
return B.p.b_(d-1,4)*4},
dla(d){var x
if($.JJ().a==null)return!1
x=$.xT().a
return d>=x&&d<x+4},
d_N(){var x=$.amm
if(x!=null)x.aa(0)
$.amm=null
$.xT().sv(0,0)},
d_M(){var x,w,v,u=$.JJ()
if(u.a==null)return
x=$.amm
if(x!=null)x.aa(0)
w=$.d_L
if(w<=4){u=u.a
u.toString
C.cQh(u)
return}x=$.xT()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQh(u)},
cQh(d){var x=$.amm
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
default:x=null}$.amm=A.dl(A.d4(0,0,0,0,x),C.dBL())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I9.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.N.p(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.ew,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dP,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fA,x,x,x)}}
C.mg.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Ff.prototype={
S(){return new C.a7L(A.a([],y.e))},
giu(){return this.c}}
C.a7L.prototype={
Z(){var x=this
x.a5()
$.xT().af(0,x.gap2())
C.dBA(x.gb95())
x.Q0()},
b8y(){if(this.c!=null)this.n(new C.chR())},
b96(){C.d_M()},
l(){$.xT().V(0,this.gap2())
C.d_N()
$.JJ().sv(0,null)
this.a3()},
Q0(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Q0=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fi(u.a.c),$async$Q0)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chQ(u,t))
$.b5V=J.a4(t)
case 1:return A.f(v,w)}})
return A.h($async$Q0,w)},
PJ(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PJ=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.chO(u))
x=3
return A.b(C.amn(u.a.c),$async$PJ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chP(u,t))
$.b5V=J.a4(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PJ,w)},
baZ(d){var x=this.c
x.toString
A.ab(x,!1).cL(A.eo(new C.chS(d),!1,null,y.H))},
bbv(){var x=this.c
x.toString
return C.SG(x,J.a4(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.Q,u=v?B.dw:B.db,t=A.aT(w,w,w,w,B.CF,w,w,w,new C.chW(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a4(x.d)+")",r=y.p
s=A.G(A.a([t,A.H(new A.zF(A.G(A.a([A.H(new A.N(B.hY,A.j(s,1,B.ad,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aW(!1,w,!0,new A.N(B.aF,A.a5(B.eZ,B.N,w,w,28),w),B.bN,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbu(),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cS(!0,A.C(A.a([new A.N(D.Ly,s,w),A.H(x.e?B.jg:new A.hY($.JJ(),new C.chX(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cq(w,u,t,w,!1,!1,A.ahv(B.N,B.yN,B.o1,D.bDN,x.e?w:new C.chY(x)),w)}}
C.Qm.prototype={
b6F(d){var x,w=$.xT().a,v=this.d
if(C.dla(v)){v=this.c.a
x=d.gaBU()
return new C.Fg(v+"_mini",d.gaBU(),!0,d.gaec(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_4(d,!0,!0,"Fold "+(B.p.b_(v,4)+1)+"/"+B.p.b_(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.p(0.1),B.o,1),s=A.a([new A.ag(0,B.w,B.N.p(0.18),B.ci,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aW(!1,v,!0,A.C(A.a([A.H(A.w(w,A.cU(r,A.ik(A.C(A.a([new C.axK(q,w),A.H(p!=null?x.b6F(p):A.w(w,A.C(A.a([A.a5(B.hq,B.lA,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.p(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.aq,B.f,0,B.k),B.h,B.u4,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vT,B.N.p(0.85),w,w,9),D.bm6,A.j("Tap",w,w,w,w,A.l(w,w,B.c.p(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.aq,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.ait,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,w,w,new A.u(w,w,t,u,s,D.Pg,B.l),w,w,w,B.eJ,w,w,w),1),B.ak,A.j(q.b,1,B.ad,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.ad,w,w,A.l(w,w,A.V(d).ax.k3.p(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.ad,w,w,A.l(w,w,B.N.p(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)}}
C.axK.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.H(A.j(B.d.gar(this.c.c.split("-")),x,B.ad,x,x,A.l(x,x,B.c.p(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.o0,B.c.p(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Ln,x,x,x)}}
C.Fe.prototype={
S(){return new C.ayF()}}
C.ayF.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.Q,v=w?B.dw:B.db,u=A.aT(x,x,x,x,B.CF,x,x,x,new C.chL(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cq(x,v,A.cS(!0,A.C(A.a([new A.N(D.Ly,A.G(A.a([u,A.H(new A.zF(A.G(A.a([A.H(new A.N(B.hY,A.j(t.b+" \xb7 "+t.c,1,B.ad,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aW(!1,x,!0,new A.N(B.aF,A.a5(B.eZ,B.N,x,x,28),x),B.bN,!0,x,x,x,x,x,x,x,x,x,x,x,new C.chM(d),x,x,x,x,x,x,x),B.h,B.C,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.H(new A.hY($.JJ(),new C.chN(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aEV.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.N.p(0.35),B.ev,28),new A.ag(0,B.w,B.q.p(0.45),B.cB,18)],y.V),p=A.W(B.c.p(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fg(w+"_full",v,!1,x.gaec(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayM(u.r,t)}else x=new C.aum(n,t)
else x=D.bQA
return A.w(t,A.cU(o,A.ik(A.C(A.a([new C.aEW(n,m,t),A.H(x,1),new C.aEU(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.u(t,t,p,r,q,D.Pg,B.l),t,s*2.05,t,B.b6,t,t,s)}}
C.aEW.prototype={
C(d){var x,w,v,u,t=null,s=new A.O(Date.now(),0,!1),r=A.eQ(s)
s=A.i4(s)
x=new A.db(r,s)
w=x.gFk()===0?12:x.gFk()
s=B.a.bG(B.p.t(s),2,"0")
r=(r<12?B.eo:B.fW)===B.eo?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l4,t,t,t),B.b0,A.j(v.b,t,t,t,t,A.l(t,t,B.c.p(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bi,D.asr,B.e8,D.arE,B.e8,D.asv],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a5(B.Cy,B.N.p(0.9),t,t,12),B.e8,A.H(A.j(v.c,t,B.ad,t,t,A.l(t,t,B.c.p(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.p(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.C(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.ajb,t,t,t)}}
C.ayM.prototype={
C(d){var x=null
return A.w(x,A.b5(A.C(A.a([A.a5(B.vJ,B.c.p(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.p(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.p(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eH(D.avs,D.bBJ,this.c,A.ei(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aI(B.N.p(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u4,x,x,x,x,x,x,x,x,1/0)}}
C.aEU.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoX(B.NW,"YouTube",t===0,s,new C.ctL(v))
t=v.aoX(B.jD,"Device",t===1,s,new C.ctM(v))
x=s?"Power off":"Power on"
w=s?D.NX:D.apP
return A.w(u,A.G(A.a([r,B.Y,t,B.b0,A.aT(u,u,u,u,A.a5(w,s?B.b4:B.dt,u,u,u),u,u,u,v.f,u,u,u,u,x,B.di)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiY,u,u,u)},
aoX(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b9
else x=f?B.N:B.a9
w=f&&g?B.N.p(0.15):B.C
v=A.n(10)
u=g?h:t
return A.H(A.aU(!1,B.M,!0,v,A.aW(!1,A.n(10),!0,new A.N(B.kC,A.C(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azS.prototype={
C(d){return D.a9K}}
C.aum.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l_,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.p(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.en(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aF,w,w,B.X,!1)},
pX(d,e){var x=null
return new A.N(B.c3,A.C(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.p(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bV,A.j(e,x,x,x,x,D.bsS,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fj.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o4.prototype={
gaBU(){var x=this.f
if(x!=null&&x.length!==0)return C.b5U(x,!0)
return this.b},
gaec(){var x=this.c
return x===D.X0||x===D.X1||x===D.El||x===D.X2}}
C.a_4.prototype={
S(){return new C.ayG(null,null)}}
C.ayG.prototype={
Z(){this.a5()
var x=A.bG(null,B.q3,null,1,null,this)
x.mS(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMF()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fm(v,new A.u(v,v,v,v,v,new A.aw(B.e0,B.co,B.B,A.a([B.C,B.q.p(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cN(B.hj,r,v)
x=B.c.p(0.92)
s=A.b5(new A.dS(new A.bi(r,new A.bt(0.72,1,s),s.k("bi<bq.T>")),!1,A.a5(B.hq,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.p(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.azW(u,v),t,s,A.bC(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.p(0.75)
u.push(A.bC(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.p(0.85)
u.push(A.bC(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bg(B.al,v,B.cC,B.m,u,v)}}
C.azW.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k6(v,new C.ckn(this),B.bm,!0,x,x,new C.cko(this),x)
return new C.B5(w,x)}}
C.B5.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aO(A.a([B.uc,B.Iw],y.O),B.hq)
break
case 1:x=new A.aO(A.a([B.u4,D.add],y.O),B.hp)
break
case 2:x=new A.aO(A.a([D.aeT,D.acI],y.O),B.vM)
break
case 3:x=new A.aO(A.a([B.Z,B.dJ],y.O),B.Ca)
break
case 4:x=new A.aO(A.a([B.a8,B.aj],y.O),B.m7)
break
default:x=v}w=x.a
return A.w(v,A.b5(A.a5(x.b,B.N.p(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.aw(B.ap,B.aw,B.B,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.ach.prototype={
l(){var x=this,w=x.aW$
if(w!=null)w.V(0,x.gdF())
x.aW$=null
x.a3()},
bq(){this.bH()
this.bD()
this.dG()}}
C.Fg.prototype={
S(){return new C.ayH()}}
C.ayH.prototype={
ahM(d,e){var x,w,v=this,u="mute=1",t=C.d_I(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_K(t,B.a.q(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b5U(t,B.a.q(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.q(x,"tiktok.com/player")||B.a.q(x,"instagram.com")||B.a.q(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dl8(e,B.a.q(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.JK()
$.oD().u0(x,new C.ci3(v),!0)}catch(w){v.r=!0
v.f=!1}},
aP(d){var x,w=this
w.b2(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.chZ(w))
x=w.e
x.toString
w.ahM(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.p(0.5)
return A.ik(A.b5(A.a5(B.O6,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai7(u,B.rx,x)],y.p)
if(v.f)x.push(A.ik(A.b5(new A.ao(w,w,D.aaa,u),u,u,u),B.bT,!0))
return new A.bg(B.al,u,B.cC,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","~()","Ff(R)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","av<~>()","Fe(R)","hY<Q>(R,o4?,p?)","Qm(R,Q)","tf(R,o4?,p?)","B5(R,ai,dh?)"])
C.cMH.prototype={
$1(d){return new C.Ff(this.a,null)},
$S:z+2}
C.cMG.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.Q,m=A.ay(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.N.p(0.22),B.ev,32)],y.V),h=A.W(n?B.bo:B.N.p(0.18),B.o,1),g=A.n(28),f=B.N.p(n?0.35:0.14)
k=A.a([f,B.R.p(n?0.18:0.08)],k)
f=A.w(o,D.arl,B.h,o,o,new A.u(B.N.p(0.18),o,A.W(B.N.p(0.45),B.o,1),o,o,o,B.ah),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.H(A.C(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fP,x,A.aT(o,o,o,o,A.a5(B.cG,n?B.a9:B.bT,o,o,o),o,o,o,new C.cMC(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.aw(B.a2,B.a5,B.B,k,o,o),B.l),o,o,o,B.L8,o,o,o)
f=A.eT(B.c7,A.a([new C.I9("YouTube",B.Cx,n,o),new C.I9("TikTok",B.hp,n,o),new C.I9("Instagram",B.vM,n,o),new C.I9("Facebook",B.Ca,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.by:B.fe,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a5(B.jE,B.N.p(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bo:B.b5
v=A.C(A.a([f,B.an,A.at(o,B.G,!0,o,!0,B.m,o,A.au(),x,o,o,o,o,o,2,A.bf(o,new A.b3(4,r,B.I),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aI(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a5W),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.K,o,o,o,o)],w),B.ac,B.e,B.f,0,B.k)
f=A.iN(D.arp,D.bHr,new C.cMD(d),A.jL(o,o,o,o,o,o,o,o,o,o,o,n?B.aE:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fm(A.cU(g,A.C(A.a([k,new A.N(D.akb,v,o),new A.N(D.akj,A.G(A.a([f,B.b0,A.c_(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cME(d),o,o),B.Y,A.dM(D.avc,D.bHM,new C.cMF(d,x),A.bA(B.N,o,o,o,B.c,o,D.ajI,o,new A.bx(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ac,B.e,B.P,0,B.k),B.av),new A.u(o,o,h,l,i,new A.aw(B.ap,B.aw,B.B,j,o,o),B.l),B.ch),o)},
$S:59}
C.cMC.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cMD.prototype={
$0(){C.d_N()
$.JJ().sv(0,null)
A.ab(this.a,!1).U(null)},
$S:0}
C.cME.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cMF.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.ab(this.a,!1).U(x)
return null},
$S:0}
C.b65.prototype={
$1(d){return C.d_O(A.K(d,y.N,y.z))},
$S:z+3}
C.b66.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b5Y.prototype={
$1(d){return d.c},
$S:z+0}
C.b5Z.prototype={
$1(d){return d.r},
$S:z+0}
C.b6_.prototype={
$1(d){return d.f},
$S:z+0}
C.b60.prototype={
$1(d){return d.at},
$S:z+0}
C.b61.prototype={
$1(d){return d.c},
$S:z+0}
C.b62.prototype={
$1(d){return d.r},
$S:z+0}
C.b63.prototype={
$1(d){return d.f},
$S:z+0}
C.b64.prototype={
$1(d){return d.at},
$S:z+0}
C.b5X.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b5W.prototype={
$1(d){return B.a.bG(B.p.kP(d,16),2,"0").toUpperCase()},
$S:70}
C.chR.prototype={
$0(){},
$S:0}
C.chQ.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.chO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.chP.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.chS.prototype={
$1(d){return new C.Fe(this.a,null)},
$S:z+7}
C.chW.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chX.prototype={
$3(d,e,f){return new A.hY($.xT(),new C.chV(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.chV.prototype={
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
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.H(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cz,B.eq,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cU(t,new A.iV(1.7777777777777777,new C.Fg("fleet_master",s,!1,k.gaec(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.av),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a4(t)+".":""+J.a4(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.p(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yl(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jI(new A.N(B.AH,A.C(v,B.t,B.e,B.f,0,B.k),l),l),new A.oe(D.aiE,A.apS(new A.nf(new C.chU(u,k),J.a4(u.d),!1,!0,!0,A.uL(),l),D.bmK),l)],x))},
$S:1466}
C.chU.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qm(w,e,J.a4(x.d),new C.chT(x,w),this.b,null)},
$S:z+9}
C.chT.prototype={
$0(){return this.a.baZ(this.b)},
$S:0}
C.chY.prototype={
$0(){this.a.PJ()
return null},
$S:0}
C.chL.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chM.prototype={
$0(){C.SG(this.a,$.b5V)
return null},
$S:0}
C.chN.prototype={
$3(d,e,f){return A.hd(new C.chK(this.a,e))},
$S:z+10}
C.chK.prototype={
$2(d,e){var x,w=null,v=B.i.aJ(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b5(A.cr(A.C(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.p(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.an,new C.aEV(v,t.a.c,t.e,t.d,new C.chH(t),new C.chI(t),new C.chJ(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v5,w,w,B.X),w,w,w)},
$S:1467}
C.chH.prototype={
$0(){var x=this.a.c
x.toString
C.SG(x,$.b5V)
return null},
$S:0}
C.chI.prototype={
$1(d){var x=this.a
return x.n(new C.chG(x,d))},
$S:36}
C.chG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.chJ.prototype={
$0(){var x=this.a
return x.n(new C.chF(x))},
$S:0}
C.chF.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctL.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctM.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckn.prototype={
$3(d,e,f){return new C.B5(this.a.c,null)},
$S:z+11}
C.cko.prototype={
$3(d,e,f){if(f==null)return e
return new A.bg(B.al,null,B.cC,B.m,A.a([new C.B5(this.a.c,null),D.a9D],y.p),null)},
$C:"$3",
$R:3,
$S:428}
C.ci3.prototype={
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
x.ahM(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h6(w,"load",new C.ci1(x),!1,v)
w=x.e
w.toString
A.h6(w,"error",new C.ci2(x),!1,v)
x=x.e
x.toString
return x},
$S:1468}
C.ci1.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ci0(x))},
$S:39}
C.ci0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ci2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ci_(x))},
$S:39}
C.ci_.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.chZ.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJl.prototype={
$1(d){var x=new A.AF([],[]).EC(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1469};(function aliases(){var x=C.ach.prototype
x.aMF=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7L.prototype,"gap2","b8y",1)
x(v,"gb95","b96",1)
x(v,"gbbu","bbv",6)
w(C,"dBL","d_M",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.v3,[C.cMH,C.cMG,C.b65,C.b66,C.b5Y,C.b5Z,C.b6_,C.b60,C.b61,C.b62,C.b63,C.b64,C.b5X,C.b5W,C.chS,C.chX,C.chV,C.chN,C.chI,C.ckn,C.cko,C.ci3,C.ci1,C.ci2,C.cJl])
w(A.Ue,[C.cMC,C.cMD,C.cME,C.cMF,C.chR,C.chQ,C.chO,C.chP,C.chW,C.chT,C.chY,C.chL,C.chM,C.chH,C.chG,C.chJ,C.chF,C.ctL,C.ctM,C.ci0,C.ci_,C.chZ])
w(A.aD,[C.I9,C.Qm,C.axK,C.aEV,C.aEW,C.ayM,C.aEU,C.azS,C.aum,C.azW,C.B5])
w(A.ai,[C.mg,C.o4])
w(A.ad,[C.Ff,C.Fe,C.a_4,C.Fg])
w(A.ae,[C.a7L,C.ayF,C.ach,C.ayH])
w(A.Uf,[C.chU,C.chK])
v(C.Fj,A.avb)
v(C.ayG,C.ach)
x(C.ach,A.e1)})()
A.d32(b.typeUniverse,JSON.parse('{"Ff":{"ad":[],"p":[]},"Qm":{"aD":[],"p":[]},"Fe":{"ad":[],"p":[]},"I9":{"aD":[],"p":[]},"a7L":{"ae":["Ff"]},"axK":{"aD":[],"p":[]},"ayF":{"ae":["Fe"]},"aEV":{"aD":[],"p":[]},"aEW":{"aD":[],"p":[]},"ayM":{"aD":[],"p":[]},"aEU":{"aD":[],"p":[]},"azS":{"aD":[],"p":[]},"aum":{"aD":[],"p":[]},"a_4":{"ad":[],"p":[]},"B5":{"aD":[],"p":[]},"ayG":{"ae":["a_4"]},"azW":{"aD":[],"p":[]},"Fg":{"ad":[],"p":[]},"ayH":{"ae":["Fg"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<A>"),e:x("af<mg>"),s:x("af<m>"),p:x("af<p>"),t:x("af<Q>"),X:x("a8<mg>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("md"),_:x("z7"),k:x("mg"),N:x("m"),Y:x("bt<a9>"),W:x("dD<m>"),J:x("hY<Q>"),j:x("hY<o4?>"),E:x("x1<ct>"),q:x("R0"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a5W=new A.aI(B.N,1.6,B.o,-1)
D.bmt=new A.ao(18,18,B.Ih,null)
D.a9D=new A.dv(B.O,null,null,D.bmt,null)
D.NX=new A.P(983224,"MaterialIcons",!1)
D.atP=new A.a6(D.NX,48,B.b9,null,null,null)
D.bsy=new A.I(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCq=new A.y("Powered off",null,D.bsy,null,null,null,null,null,null,null,null)
D.aG6=x([D.atP,B.y,D.bCq],y.p)
D.ag4=new A.eV(B.X,B.e,B.P,B.j,null,B.k,null,0,D.aG6,null)
D.a9K=new A.dv(B.O,null,null,D.ag4,null)
D.aaa=new A.hO(2,null,null,null,null,B.U,null,null,null,null)
D.acI=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.add=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.aeT=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.ait=new A.U(0,3,0,3)
D.aiE=new A.U(10,0,10,88)
D.aiY=new A.U(12,6,12,10)
D.ajb=new A.U(14,8,14,6)
D.ajI=new A.U(18,12,18,12)
D.akb=new A.U(20,18,20,8)
D.akj=new A.U(20,8,20,20)
D.Ly=new A.U(8,6,15,8)
D.apP=new A.P(983222,"MaterialIcons",!1)
D.arl=new A.a6(B.hq,26,B.N,null,null,null)
D.arp=new A.a6(B.N3,18,null,null,null,null)
D.arE=new A.a6(B.o0,14,B.U,null,null,null)
D.aq4=new A.P(983420,"MaterialIcons",!1)
D.asr=new A.a6(D.aq4,14,B.U,null,null,null)
D.aoy=new A.P(62895,"MaterialIcons",!1)
D.asv=new A.a6(D.aoy,14,B.U,null,null,null)
D.avc=new A.a6(B.m3,20,null,null,null,null)
D.avs=new A.a6(B.eZ,16,null,null,null,null)
D.aI6=x([B.aj,B.Z],y.O)
D.Pg=new A.aw(B.ap,B.aw,B.B,D.aI6,null,null)
D.bgs=new A.aO("NGMY OS","14.2.1")
D.bfD=new A.aO("VirtualDroid","13.8.4")
D.bfC=new A.aO("NGMY OS","15.0.0")
D.bg9=new A.aO("VirtualDroid","14.1.2")
D.bfB=new A.aO("NGMY Tab OS","12.9.7")
D.bfA=new A.aO("NGMY OS","13.5.3")
D.bfr=new A.aO("VirtualDroid","15.2.0")
D.bfS=new A.aO("NGMY OS","14.8.1")
D.bge=new A.aO("NGMY Tab OS","13.2.4")
D.bgB=new A.aO("VirtualDroid","12.6.9")
D.bfo=new A.aO("NGMY OS","16.0.1")
D.bfg=new A.aO("VirtualDroid","14.9.0")
D.bgm=new A.aO("NGMY Tab OS","14.0.3")
D.bfJ=new A.aO("NGMY OS","13.1.8")
D.bfn=new A.aO("VirtualDroid","13.4.5")
D.bfz=new A.aO("NGMY OS","15.3.2")
D.bgf=new A.aO("NGMY Tab OS","12.4.1")
D.bgo=new A.aO("VirtualDroid","16.1.0")
D.bfR=new A.aO("NGMY OS","14.4.6")
D.bgt=new A.aO("VirtualDroid","15.0.8")
D.aHJ=x([D.bgs,D.bfD,D.bfC,D.bg9,D.bfB,D.bfA,D.bfr,D.bfS,D.bge,D.bgB,D.bfo,D.bfg,D.bgm,D.bfJ,D.bfn,D.bfz,D.bgf,D.bgo,D.bfR,D.bgt],A.bm("af<+(m,m)>"))
D.biC=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bia=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bi5=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bie=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bi1=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.big=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.biE=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bi2=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bi9=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bii=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bi0=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.biw=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bit=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bi8=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.biq=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bip=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bi_=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bid=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bin=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bis=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qg=x([D.biC,D.bia,D.bi5,D.bie,D.bi1,D.big,D.biE,D.bi2,D.bi9,D.bii,D.bi0,D.biw,D.bit,D.bi8,D.biq,D.bip,D.bi_,D.bid,D.bin,D.bis],A.bm("af<+(m,m,a9,a9,m)>"))
D.aME=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X0=new C.Fj(0,"youtube")
D.X1=new C.Fj(1,"tiktok")
D.El=new C.Fj(2,"instagram")
D.X2=new C.Fj(3,"facebook")
D.bbi=new C.Fj(4,"other")
D.bm6=new A.ao(3,null,null,null)
D.bmK=new A.iL(4,10,8,0.52,null)
D.bDk=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpH=new A.aP(D.bDk,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsS=new A.I(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBJ=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDN=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHr=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHM=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQA=new C.azS(null)})();(function staticFields(){$.d_L=20
$.amm=null
$.b5V=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFV","xT",()=>A.Pb(0))
x($,"dFW","JJ",()=>A.Pb(null))})()};
(a=>{a["skdnu0DhD85pLlDivw3TTLlAb4Y="]=a.current})($__dart_deferred_initializers__);