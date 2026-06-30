((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCV(d,e){A.a8(d,!1).cM(A.eq(new C.cMR(e),!0,null,y.H))},
SF(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o
var $async$SF=A.d(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=$.JJ()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.af(new A.aM(o,B.a1,B.X),u)
x=3
return A.b(A.dg(B.B,null,new C.cMQ(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SF)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dlo(s)
if(r==null){d.E(y.q).f.O(D.bpo)
x=1
break}x=4
return A.b(A.bS(B.fl,null,y.H),$async$SF)
case 4:if(d.e==null){x=1
break}o=B.p.aP(e,1,999)
$.d_T=o
q=C.dlj(o)
o=$.xQ()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQo(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.e("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$SF,w)},
d_W(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
return new C.mh(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
Fe(d){return C.dlr(d)},
dlr(a2){var x=0,w=A.j(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fe=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$Fe)
case 3:h=a4
g=B.a.j(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.v.aE(0,d,null)
x=y.a.b(s)&&J.cx(s)?10:11
break
case 10:l=J.ik(s,y.f)
l=A.eg(l,new C.b6e(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6f(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_X(r)
x=12
return A.b(C.Fd(a2,q),$async$Fe)
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
o=B.v.aE(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.d_W(A.K(o,y.N,y.z))
m=C.d_X(A.a([n],y.e))
x=21
return A.b(C.Fd(a2,m),$async$Fe)
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
case 18:case 14:r=C.dlp()
x=22
return A.b(C.Fd(a2,r),$async$Fe)
case 22:v=r
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fe,w)},
d_X(d){var x=A.S(d).k("z<1,m>"),w=new A.z(d,new C.b66(),x).eu(0),v=new A.z(d,new C.b67(),x).eu(0),u=new A.z(d,new C.b68(),x).eu(0),t=new A.z(d,new C.b69(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQp(null,r,v,u,w,t));++r}return s},
amp(d){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n
var $async$amp=A.d(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(d),$async$amp)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b6a(),t).eu(0)
q=s.df(u,new C.b6b(),t).eu(0)
p=s.df(u,new C.b6c(),t).eu(0)
o=s.df(u,new C.b6d(),t).eu(0)
n=C.cQp(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fd(d,u),$async$amp)
case 4:v=n
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amp,w)},
Fd(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Fd=A.d(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fd)
case 2:v=g
u=B.a.j(d)
t=J.b5(e,new C.b65(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fd)
case 3:return A.h(null,w)}})
return A.i($async$Fd,w)},
dlp(){var x,w=y.N,v=A.aY(w),u=A.aY(w),t=A.aY(w),s=A.aY(w),r=J.dX(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQp(x,x,u,t,v,s)
return r},
cQp(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jX(),i=d==null,h=D.Ql[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Ql[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bD(256)
o=new A.z(q,new C.b64(),A.S(q).k("z<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bD(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bz(B.p.kP(j.bD(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aMo[x]
k=D.aHu[x]
return new C.mh("vd_"+1000*Date.now()+"_"+e+"_"+j.bD(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dlq(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dlq(d,e){var x,w=J.dX(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kP(d.bD(256),16),2,"0")
return B.d.f9(w)},
cMR:function cMR(d){this.a=d},
cMQ:function cMQ(d,e){this.a=d
this.b=e},
cMM:function cMM(d){this.a=d},
cMN:function cMN(d){this.a=d},
cMO:function cMO(d){this.a=d},
cMP:function cMP(d,e){this.a=d
this.b=e},
I8:function I8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mh:function mh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b6e:function b6e(){},
b6f:function b6f(){},
b66:function b66(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(){},
b6c:function b6c(){},
b6d:function b6d(){},
b65:function b65(){},
b64:function b64(){},
Fb:function Fb(d,e){this.c=d
this.a=e},
a7H:function a7H(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cib:function cib(){},
cia:function cia(d,e){this.a=d
this.b=e},
ci8:function ci8(d){this.a=d},
ci9:function ci9(d,e){this.a=d
this.b=e},
cic:function cic(d){this.a=d},
cig:function cig(d){this.a=d},
cih:function cih(d,e){this.a=d
this.b=e},
cif:function cif(d,e,f){this.a=d
this.b=e
this.c=f},
cie:function cie(d,e){this.a=d
this.b=e},
cid:function cid(d,e){this.a=d
this.b=e},
cii:function cii(d){this.a=d},
Ql:function Ql(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axQ:function axQ(d,e){this.c=d
this.a=e},
Fa:function Fa(d,e){this.c=d
this.a=e},
ayL:function ayL(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ci5:function ci5(d){this.a=d},
ci6:function ci6(d){this.a=d},
ci7:function ci7(d){this.a=d},
ci4:function ci4(d,e){this.a=d
this.b=e},
ci1:function ci1(d){this.a=d},
ci2:function ci2(d){this.a=d},
ci0:function ci0(d,e){this.a=d
this.b=e},
ci3:function ci3(d){this.a=d},
ci_:function ci_(d){this.a=d},
aF1:function aF1(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aF2:function aF2(d,e,f){this.c=d
this.d=e
this.a=f},
ayS:function ayS(d,e){this.c=d
this.a=e},
aF0:function aF0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctV:function ctV(d){this.a=d},
ctW:function ctW(d){this.a=d},
azY:function azY(d){this.a=d},
auq:function auq(d,e){this.c=d
this.a=e},
dlo(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o8(x,C.b62(u,!1),D.X7,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dln(w)
if(t!=null)return new C.o8(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X8,"TikTok",q,q)
s=C.dlm(x,w)
if(s!=null)return s
r=C.dll(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o8(x,x,D.bb0,"Video",q,q)
return q},
dlm(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o8(d,"https://www.instagram.com/reel/"+x+u,D.En,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o8(d,"https://www.instagram.com/p/"+x+u,D.En,t,v,v)}return v},
dll(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o8(d,"https://www.facebook.com/plugins/video.php?href="+A.f8(2,d,B.aL,!1)+"&show_text=false&width=734",D.X9,"Facebook",null,null)},
dln(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Ff:function Ff(d,e){this.a=d
this.b=e},
o8:function o8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_0:function a_0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayM:function ayM(d,e){var _=this
_.d=$
_.cz$=d
_.aM$=e
_.c=_.a=null},
aA1:function aA1(d,e){this.c=d
this.a=e},
ckI:function ckI(d){this.a=d},
ckJ:function ckJ(d){this.a=d},
B_:function B_(d,e){this.c=d
this.a=e},
acf:function acf(){},
dBJ(d){var x=window
x.toString
A.h5(x,"message",new C.cJw(d),!1,y._)},
Fc:function Fc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayN:function ayN(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
cio:function cio(d){this.a=d},
cim:function cim(d){this.a=d},
cil:function cil(d){this.a=d},
cin:function cin(d){this.a=d},
cik:function cik(d){this.a=d},
cij:function cij(d){this.a=d},
cJw:function cJw(d){this.a=d},
b62(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_Q(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d_R(d){var x=A.bA(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bA(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_S(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dli(d,e,f){var x=C.d_Q(d)
if(x!=null){if(f)return C.d_S(x,e,!0)
return C.d_R(C.b62(x,e))}return C.d_R(d)},
dlj(d){if(d<=4)return 0
return B.p.aT(d-1,4)*4},
dlk(d){var x
if($.JJ().a==null)return!1
x=$.xQ().a
return d>=x&&d<x+4},
d_V(){var x=$.amo
if(x!=null)x.aa(0)
$.amo=null
$.xQ().sv(0,0)},
d_U(){var x,w,v,u=$.JJ()
if(u.a==null)return
x=$.amo
if(x!=null)x.aa(0)
w=$.d_T
if(w<=4){u=u.a
u.toString
C.cQo(u)
return}x=$.xQ()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQo(u)},
cQo(d){var x=$.amo
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
default:x=null}$.amo=A.dq(A.d8(0,0,0,0,x),C.dBU())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I8.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.O.t(0.25),B.n,1),s=A.a3(this.d,B.O,x,x,14)
return A.x(x,A.G(A.a([s,B.ej,A.e(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dS,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fG,x,x,x)}}
C.mh.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fb.prototype={
T(){return new C.a7H(A.a([],y.e))},
git(){return this.c}}
C.a7H.prototype={
Z(){var x=this
x.a5()
$.xQ().af(0,x.gaoY())
C.dBJ(x.gb8S())
x.PZ()},
b8j(){if(this.c!=null)this.n(new C.cib())},
b8T(){C.d_U()},
l(){$.xQ().V(0,this.gaoY())
C.d_V()
$.JJ().sv(0,null)
this.a3()},
PZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PZ=A.d(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(u.a.c),$async$PZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cia(u,t))
$.b63=J.a5(t)
case 1:return A.h(v,w)}})
return A.i($async$PZ,w)},
PI(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PI=A.d(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.n(new C.ci8(u))
x=3
return A.b(C.amp(u.a.c),$async$PI)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ci9(u,t))
$.b63=J.a5(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.e("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$PI,w)},
baL(d){var x=this.c
x.toString
A.a8(x,!1).cM(A.eq(new C.cic(d),!1,null,y.H))},
bbg(){var x=this.c
x.toString
return C.SF(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.R,u=v?B.du:B.db,t=A.aT(w,w,w,w,B.CH,w,w,w,new C.cig(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zB(A.G(A.a([A.I(new A.M(B.i1,A.e(s,1,B.af,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.N,!0,w,A.b_(!1,w,!0,new A.M(B.aG,A.a3(B.f2,B.O,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbf(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Lv,s,w),A.I(x.e?B.jl:new A.hY($.JJ(),new C.cih(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0)
return A.cp(w,u,t,w,!1,!1,A.ahv(B.O,B.yP,B.o1,D.bDz,x.e?w:new C.cii(x)),w)}}
C.Ql.prototype={
b6o(d){var x,w=$.xQ().a,v=this.d
if(C.dlk(v)){v=this.c.a
x=d.gaBE()
return new C.Fc(v+"_mini",d.gaBE(),!0,d.gae9(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_0(d,!0,!0,"Fold "+(B.p.aT(v,4)+1)+"/"+B.p.aT(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.n,1),s=A.a([new A.ag(0,B.w,B.O.t(0.18),B.ce,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.N,!0,w,A.b_(!1,v,!0,A.B(A.a([A.I(A.x(w,A.cV(r,A.jt(A.B(A.a([new C.axQ(q,w),A.I(p!=null?x.b6o(p):A.x(w,A.B(A.a([A.a3(B.hu,B.lA,w,w,22),B.ak,A.e("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ao,B.f,0,B.k),B.h,B.u0,w,w,w,w,w,w,w,w,1/0),1),A.x(w,A.G(A.a([A.a3(B.vR,B.O.t(0.85),w,w,9),D.blP,A.e("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ao,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aij,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.u(w,w,t,u,s,D.Pk,B.l),w,w,w,B.eJ,w,w,w),1),B.ak,A.e(q.b,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.e(q.y,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.e(q.c,1,B.af,w,w,A.l(w,w,B.O.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axQ.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.e(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a3(B.qL,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lk,x,x,x)}}
C.Fa.prototype={
T(){return new C.ayL()}}
C.ayL.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.R,v=w?B.du:B.db,u=A.aT(x,x,x,x,B.CH,x,x,x,new C.ci5(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cp(x,v,A.cX(!0,A.B(A.a([new A.M(D.Lv,A.G(A.a([u,A.I(new A.zB(A.G(A.a([A.I(new A.M(B.i1,A.e(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.N,!0,x,A.b_(!1,x,!0,new A.M(B.aG,A.a3(B.f2,B.O,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.ci6(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hY($.JJ(),new C.ci7(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0),x,!1,!1,x,x)}}
C.aF1.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.O.t(0.35),B.ev,28),new A.ag(0,B.w,B.q.t(0.45),B.cP,18)],y.V),p=A.W(B.c.t(0.12),B.n,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fc(w+"_full",v,!1,x.gae9(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayS(u.r,t)}else x=new C.auq(n,t)
else x=D.bQx
return A.x(t,A.cV(o,A.jt(A.B(A.a([new C.aF2(n,m,t),A.I(x,1),new C.aF0(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.u(t,t,p,r,q,D.Pk,B.l),t,s*2.05,t,B.bd,t,t,s)}}
C.aF2.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hW(s)
x=new A.dc(r,s)
w=x.gFk()===0?12:x.gFk()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.ep:B.fZ)===B.ep?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.e(""+w+":"+s+" "+r,t,t,t,t,B.l7,t,t,t),B.b5,A.e(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.asc,B.dP,D.arq,B.dP,D.asg],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a3(B.CB,B.O.t(0.9),t,t,12),B.dP,A.I(A.e(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.e(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aj6,t,t,t)}}
C.ayS.prototype={
C(d){var x=null
return A.x(x,A.b3(A.B(A.a([A.a3(B.vG,B.c.t(0.35),x,x,40),B.D,A.e("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.e("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eH(D.avf,D.bBw,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.O,x,x,x,x,x,new A.aK(B.O.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u0,x,x,x,x,x,x,x,x,1/0)}}
C.aF0.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoS(B.O_,"YouTube",t===0,s,new C.ctV(v))
t=v.aoS(B.i5,"Device",t===1,s,new C.ctW(v))
x=s?"Power off":"Power on"
w=s?D.O0:D.apz
return A.x(u,A.G(A.a([r,B.Y,t,B.b5,A.aT(u,u,u,u,A.a3(w,s?B.aH:B.dx,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dh)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiR,u,u,u)},
aoS(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.O:B.aa
w=f&&g?B.O.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aU(!1,B.N,!0,v,A.b_(!1,A.n(10),!0,new A.M(B.jx,A.B(A.a([A.a3(d,x,t,t,18),A.e(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azY.prototype={
C(d){return D.a9U}}
C.auq.prototype={
C(d){var x=this,w=null,v=x.c,u=A.e(v.b,w,w,w,w,B.l4,w,w,w),t=A.e("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pX(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.e(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.e(e,x,x,x,x,D.bsz,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Ff.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o8.prototype={
gaBE(){var x=this.f
if(x!=null&&x.length!==0)return C.b62(x,!0)
return this.b},
gae9(){var x=this.c
return x===D.X7||x===D.X8||x===D.En||x===D.X9}}
C.a_0.prototype={
T(){return new C.ayM(null,null)}}
C.ayM.prototype={
Z(){this.a5()
var x=A.bD(null,B.q0,null,1,null,this)
x.kM(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMu()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fc(v,new A.u(v,v,v,v,v,new A.aw(B.d3,B.bX,B.C,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.ho,r,v)
x=B.c.t(0.92)
s=A.b3(new A.dT(new A.bg(r,new A.bv(0.72,1,s),s.k("bg<bp.T>")),!1,A.a3(B.hu,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.aA1(u,v),t,s,A.bt(v,A.x(v,A.e("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bt(v,A.e(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bt(3,A.e(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bb(B.am,v,B.cE,B.m,u,v)}}
C.aA1.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k8(v,new C.ckI(this),B.bn,!0,x,x,new C.ckJ(this),x)
return new C.B_(w,x)}}
C.B_.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.ua,B.Ix],y.O),B.hu)
break
case 1:x=new A.aN(A.a([B.u0,D.adh],y.O),B.iQ)
break
case 2:x=new A.aN(A.a([D.aeI,D.acM],y.O),B.vJ)
break
case 3:x=new A.aN(A.a([B.Z,B.dK],y.O),B.Cd)
break
case 4:x=new A.aN(A.a([B.a8,B.aj],y.O),B.m8)
break
default:x=v}w=x.a
return A.x(v,A.b3(A.a3(x.b,B.O.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.aw(B.ar,B.ay,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acf.prototype={
l(){var x=this,w=x.aM$
if(w!=null)w.V(0,x.gda())
x.aM$=null
x.a3()},
bn(){this.bB()
this.by()
this.dc()}}
C.Fc.prototype={
T(){return new C.ayN()}}
C.ayN.prototype={
ahJ(d,e){var x,w,v=this,u="mute=1",t=C.d_Q(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_S(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b62(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dli(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aR()
v.d=x
try{$.JK()
$.oF().u_(x,new C.cio(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cij(w))
x=w.e
x.toString
w.ahJ(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jt(A.b3(A.a3(B.Oa,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai7(u,B.rw,x)],y.p)
if(v.f)x.push(A.jt(A.b3(new A.an(w,w,D.aak,u),u,u,u),B.bU,!0))
return new A.bb(B.am,u,B.cE,B.m,x,u)}}
var z=a.updateTypes(["m(mh)","~()","Fb(R)","mh(Y<@,@>)","a0(mh)","Y<m,@>(mh)","at<~>()","Fa(R)","hY<P>(R,o8?,p?)","Ql(R,P)","tg(R,o8?,p?)","B_(R,ai,di?)"])
C.cMR.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+2}
C.cMQ.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.R,m=A.az(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cr,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.O.t(0.22),B.ev,32)],y.V),h=A.W(n?B.bj:B.O.t(0.18),B.n,1),g=A.n(28),f=B.O.t(n?0.35:0.14)
k=A.a([f,B.Q.t(n?0.18:0.08)],k)
f=A.x(o,D.ar6,B.h,o,o,new A.u(B.O.t(0.18),o,A.W(B.O.t(0.45),B.n,1),o,o,o,B.ah),o,48,o,o,o,o,48)
x=A.e("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.B(A.a([x,B.ak,A.e("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.x(o,A.G(A.a([f,B.fP,x,A.aT(o,o,o,o,A.a3(B.cH,n?B.aa:B.bU,o,o,o),o,o,o,new C.cMM(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.aw(B.a2,B.a5,B.C,k,o,o),B.l),o,o,o,B.L4,o,o,o)
f=A.eS(B.ca,A.a([new C.I8("YouTube",B.CA,n,o),new C.I8("TikTok",B.iQ,n,o),new C.I8("Instagram",B.vJ,n,o),new C.I8("Facebook",B.Cd,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bA:B.fj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a3(B.jF,B.O.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bj:B.b7
v=A.B(A.a([f,B.aq,A.au(o,B.G,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bh(o,new A.b4(4,r,B.I),o,o,o,o,o,o,!0,new A.b4(4,q,new A.aK(p,1,B.n,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b4(4,A.n(16),D.a65),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.L,o,o,o,o)],w),B.ad,B.e,B.f,0,B.k)
f=A.iP(D.ara,D.bHh,new C.cMN(d),A.jN(o,o,o,o,o,o,o,o,o,o,o,n?B.aD:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.M(new A.U(12,0,12,12+m.f.d),A.fc(A.cV(g,A.B(A.a([k,new A.M(D.ak5,v,o),new A.M(D.akb,A.G(A.a([f,B.b5,A.bY(!1,A.e("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cMO(d),o,o),B.Y,A.dN(D.av_,D.bHC,new C.cMP(d,x),A.bw(B.O,o,o,o,B.c,o,D.ajB,o,new A.bq(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ad,B.e,B.P,0,B.k),B.au),new A.u(o,o,h,l,i,new A.aw(B.ar,B.ay,B.C,j,o,o),B.l),B.ch),o)},
$S:61}
C.cMM.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cMN.prototype={
$0(){C.d_V()
$.JJ().sv(0,null)
A.a8(this.a,!1).S(null)},
$S:0}
C.cMO.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cMP.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a8(this.a,!1).S(x)
return null},
$S:0}
C.b6e.prototype={
$1(d){return C.d_W(A.K(d,y.N,y.z))},
$S:z+3}
C.b6f.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b66.prototype={
$1(d){return d.c},
$S:z+0}
C.b67.prototype={
$1(d){return d.r},
$S:z+0}
C.b68.prototype={
$1(d){return d.f},
$S:z+0}
C.b69.prototype={
$1(d){return d.at},
$S:z+0}
C.b6a.prototype={
$1(d){return d.c},
$S:z+0}
C.b6b.prototype={
$1(d){return d.r},
$S:z+0}
C.b6c.prototype={
$1(d){return d.f},
$S:z+0}
C.b6d.prototype={
$1(d){return d.at},
$S:z+0}
C.b65.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b64.prototype={
$1(d){return B.a.bz(B.p.kP(d,16),2,"0").toUpperCase()},
$S:74}
C.cib.prototype={
$0(){},
$S:0}
C.cia.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.ci8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ci9.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cic.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+7}
C.cig.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.cih.prototype={
$3(d,e,f){return new A.hY($.xQ(),new C.cif(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cif.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.z8(d,l,y.Q)
x=x==null?l:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.O.t(0.12)
t=A.n(12)
s=A.W(B.O.t(0.35),B.n,1)
r=A.a3(B.hu,B.O,l,l,18)
q=k.d
p=J.a5(m.a.d)
o=$.xQ().a
n=B.i.aP(o+4,1,p)
u=A.a([A.x(l,A.G(A.a([r,B.Y,A.I(A.e("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cF,B.er,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cV(t,new A.iY(1.7777777777777777,new C.Fc("fleet_master",s,!1,k.gae9(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a5(t)+".":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.e(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yi(0,B.m,l,B.r,l,l,l,l,!1,l,B.W,!1,A.a([new A.jK(new A.M(B.AI,A.B(v,B.t,B.e,B.f,0,B.k),l),l),new A.oi(D.aix,A.apV(new A.ng(new C.cie(u,k),J.a5(u.d),!1,!0,!0,A.uG(),l),D.bmr),l)],x))},
$S:1467}
C.cie.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Ql(w,e,J.a5(x.d),new C.cid(x,w),this.b,null)},
$S:z+9}
C.cid.prototype={
$0(){return this.a.baL(this.b)},
$S:0}
C.cii.prototype={
$0(){this.a.PI()
return null},
$S:0}
C.ci5.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.ci6.prototype={
$0(){C.SF(this.a,$.b63)
return null},
$S:0}
C.ci7.prototype={
$3(d,e,f){return A.h1(new C.ci4(this.a,e))},
$S:z+10}
C.ci4.prototype={
$2(d,e){var x,w=null,v=B.i.aP(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b3(A.cr(A.B(A.a([A.e(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.aq,new C.aF1(v,t.a.c,t.e,t.d,new C.ci1(t),new C.ci2(t),new C.ci3(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v2,w,w,B.W),w,w,w)},
$S:1468}
C.ci1.prototype={
$0(){var x=this.a.c
x.toString
C.SF(x,$.b63)
return null},
$S:0}
C.ci2.prototype={
$1(d){var x=this.a
return x.n(new C.ci0(x,d))},
$S:35}
C.ci0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ci3.prototype={
$0(){var x=this.a
return x.n(new C.ci_(x))},
$S:0}
C.ci_.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctV.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctW.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckI.prototype={
$3(d,e,f){return new C.B_(this.a.c,null)},
$S:z+11}
C.ckJ.prototype={
$3(d,e,f){if(f==null)return e
return new A.bb(B.am,null,B.cE,B.m,A.a([new C.B_(this.a.c,null),D.a9N],y.p),null)},
$C:"$3",
$R:3,
$S:434}
C.cio.prototype={
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
x.ahJ(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h5(w,"load",new C.cim(x),!1,v)
w=x.e
w.toString
A.h5(w,"error",new C.cin(x),!1,v)
x=x.e
x.toString
return x},
$S:1469}
C.cim.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cil(x))},
$S:39}
C.cil.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cin.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cik(x))},
$S:39}
C.cik.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cij.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJw.prototype={
$1(d){var x=new A.AA([],[]).EC(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1470};(function aliases(){var x=C.acf.prototype
x.aMu=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7H.prototype,"gaoY","b8j",1)
x(v,"gb8S","b8T",1)
x(v,"gbbf","bbg",6)
w(C,"dBU","d_U",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uY,[C.cMR,C.cMQ,C.b6e,C.b6f,C.b66,C.b67,C.b68,C.b69,C.b6a,C.b6b,C.b6c,C.b6d,C.b65,C.b64,C.cic,C.cih,C.cif,C.ci7,C.ci2,C.ckI,C.ckJ,C.cio,C.cim,C.cin,C.cJw])
w(A.Ub,[C.cMM,C.cMN,C.cMO,C.cMP,C.cib,C.cia,C.ci8,C.ci9,C.cig,C.cid,C.cii,C.ci5,C.ci6,C.ci1,C.ci0,C.ci3,C.ci_,C.ctV,C.ctW,C.cil,C.cik,C.cij])
w(A.aD,[C.I8,C.Ql,C.axQ,C.aF1,C.aF2,C.ayS,C.aF0,C.azY,C.auq,C.aA1,C.B_])
w(A.ai,[C.mh,C.o8])
w(A.ac,[C.Fb,C.Fa,C.a_0,C.Fc])
w(A.ad,[C.a7H,C.ayL,C.acf,C.ayN])
w(A.Uc,[C.cie,C.ci4])
v(C.Ff,A.avf)
v(C.ayM,C.acf)
x(C.acf,A.dM)})()
A.d3a(b.typeUniverse,JSON.parse('{"Fb":{"ac":[],"p":[]},"Ql":{"aD":[],"p":[]},"Fa":{"ac":[],"p":[]},"I8":{"aD":[],"p":[]},"a7H":{"ad":["Fb"]},"axQ":{"aD":[],"p":[]},"ayL":{"ad":["Fa"]},"aF1":{"aD":[],"p":[]},"aF2":{"aD":[],"p":[]},"ayS":{"aD":[],"p":[]},"aF0":{"aD":[],"p":[]},"azY":{"aD":[],"p":[]},"auq":{"aD":[],"p":[]},"a_0":{"ac":[],"p":[]},"B_":{"aD":[],"p":[]},"ayM":{"ad":["a_0"]},"aA1":{"aD":[],"p":[]},"Fc":{"ac":[],"p":[]},"ayN":{"ad":["Fc"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<ag>"),O:x("ae<C>"),e:x("ae<mh>"),s:x("ae<m>"),p:x("ae<p>"),t:x("ae<P>"),X:x("a9<mh>"),a:x("a9<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("me"),_:x("z3"),k:x("mh"),N:x("m"),Y:x("bv<aa>"),W:x("dD<m>"),J:x("hY<P>"),j:x("hY<o8?>"),E:x("wW<ct>"),q:x("R1"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a65=new A.aK(B.O,1.6,B.n,-1)
D.bma=new A.an(18,18,B.Ii,null)
D.a9N=new A.dw(B.M,null,null,D.bma,null)
D.O0=new A.O(983224,"MaterialIcons",!1)
D.atD=new A.a6(D.O0,48,B.bb,null,null,null)
D.bse=new A.H(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCd=new A.y("Powered off",null,D.bse,null,null,null,null,null,null,null,null)
D.aFT=x([D.atD,B.y,D.bCd],y.p)
D.afU=new A.eU(B.W,B.e,B.P,B.j,null,B.k,null,0,D.aFT,null)
D.a9U=new A.dw(B.M,null,null,D.afU,null)
D.aak=new A.hO(2,null,null,null,null,B.U,null,null,null,null)
D.acM=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.adh=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.aeI=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.aij=new A.U(0,3,0,3)
D.aix=new A.U(10,0,10,88)
D.aiR=new A.U(12,6,12,10)
D.aj6=new A.U(14,8,14,6)
D.ajB=new A.U(18,12,18,12)
D.ak5=new A.U(20,18,20,8)
D.akb=new A.U(20,8,20,20)
D.Lv=new A.U(8,6,15,8)
D.apz=new A.O(983222,"MaterialIcons",!1)
D.ar6=new A.a6(B.hu,26,B.O,null,null,null)
D.ara=new A.a6(B.N4,18,null,null,null,null)
D.arq=new A.a6(B.qL,14,B.U,null,null,null)
D.apQ=new A.O(983420,"MaterialIcons",!1)
D.asc=new A.a6(D.apQ,14,B.U,null,null,null)
D.aoj=new A.O(62895,"MaterialIcons",!1)
D.asg=new A.a6(D.aoj,14,B.U,null,null,null)
D.av_=new A.a6(B.m5,20,null,null,null,null)
D.avf=new A.a6(B.f2,16,null,null,null,null)
D.aHR=x([B.aj,B.Z],y.O)
D.Pk=new A.aw(B.ar,B.ay,B.C,D.aHR,null,null)
D.bg7=new A.aN("NGMY OS","14.2.1")
D.bfi=new A.aN("VirtualDroid","13.8.4")
D.bfh=new A.aN("NGMY OS","15.0.0")
D.bfP=new A.aN("VirtualDroid","14.1.2")
D.bfg=new A.aN("NGMY Tab OS","12.9.7")
D.bff=new A.aN("NGMY OS","13.5.3")
D.bf6=new A.aN("VirtualDroid","15.2.0")
D.bfx=new A.aN("NGMY OS","14.8.1")
D.bfU=new A.aN("NGMY Tab OS","13.2.4")
D.bgg=new A.aN("VirtualDroid","12.6.9")
D.bf3=new A.aN("NGMY OS","16.0.1")
D.beW=new A.aN("VirtualDroid","14.9.0")
D.bg1=new A.aN("NGMY Tab OS","14.0.3")
D.bfo=new A.aN("NGMY OS","13.1.8")
D.bf2=new A.aN("VirtualDroid","13.4.5")
D.bfe=new A.aN("NGMY OS","15.3.2")
D.bfV=new A.aN("NGMY Tab OS","12.4.1")
D.bg3=new A.aN("VirtualDroid","16.1.0")
D.bfw=new A.aN("NGMY OS","14.4.6")
D.bg8=new A.aN("VirtualDroid","15.0.8")
D.aHu=x([D.bg7,D.bfi,D.bfh,D.bfP,D.bfg,D.bff,D.bf6,D.bfx,D.bfU,D.bgg,D.bf3,D.beW,D.bg1,D.bfo,D.bf2,D.bfe,D.bfV,D.bg3,D.bfw,D.bg8],A.bm("ae<+(m,m)>"))
D.bih=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhQ=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhL=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhU=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhH=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhW=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bij=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhI=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhP=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhY=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhG=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bib=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bi8=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhO=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bi5=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bi4=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhF=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhT=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bi2=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bi7=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Ql=x([D.bih,D.bhQ,D.bhL,D.bhU,D.bhH,D.bhW,D.bij,D.bhI,D.bhP,D.bhY,D.bhG,D.bib,D.bi8,D.bhO,D.bi5,D.bi4,D.bhF,D.bhT,D.bi2,D.bi7],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aMo=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X7=new C.Ff(0,"youtube")
D.X8=new C.Ff(1,"tiktok")
D.En=new C.Ff(2,"instagram")
D.X9=new C.Ff(3,"facebook")
D.bb0=new C.Ff(4,"other")
D.blP=new A.an(3,null,null,null)
D.bmr=new A.iN(4,10,8,0.52,null)
D.bD6=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpo=new A.aP(D.bD6,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsz=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBw=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDz=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHh=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHC=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQx=new C.azY(null)})();(function staticFields(){$.d_T=20
$.amo=null
$.b63=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dG2","xQ",()=>A.Pa(0))
x($,"dG3","JJ",()=>A.Pa(null))})()};
(a=>{a["tSFzceteTRpfvjtVwGMvQtI5y7g="]=a.current})($__dart_deferred_initializers__);