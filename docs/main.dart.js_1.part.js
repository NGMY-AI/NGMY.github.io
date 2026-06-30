((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dDd(d,e){A.a8(d,!1).cM(A.eq(new C.cN8(e),!0,null,y.H))},
SI(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o
var $async$SI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=$.JM()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.X),u)
x=3
return A.b(A.dg(B.B,null,new C.cN7(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SI)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dlG(s)
if(r==null){d.E(y.q).f.O(D.bpB)
x=1
break}x=4
return A.b(A.bS(B.fn,null,y.H),$async$SI)
case 4:if(d.e==null){x=1
break}o=B.p.aP(e,1,999)
$.d0a=o
q=C.dlB(o)
o=$.xR()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQH(r)
d.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.d("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
d0d(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fe(d){return C.dlJ(d)},
dlJ(a2){var x=0,w=A.j(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fe=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
case 10:l=J.il(s,y.f)
l=A.ef(l,new C.b6j(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6k(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d0e(r)
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
case 19:n=C.d0d(A.K(o,y.N,y.z))
m=C.d0e(A.a([n],y.e))
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
case 18:case 14:r=C.dlH()
x=22
return A.b(C.Fd(a2,r),$async$Fe)
case 22:v=r
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fe,w)},
d0e(d){var x=A.S(d).k("z<1,m>"),w=new A.z(d,new C.b6b(),x).eu(0),v=new A.z(d,new C.b6c(),x).eu(0),u=new A.z(d,new C.b6d(),x).eu(0),t=new A.z(d,new C.b6e(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQI(null,r,v,u,w,t));++r}return s},
amu(d){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n
var $async$amu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(d),$async$amu)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b6f(),t).eu(0)
q=s.df(u,new C.b6g(),t).eu(0)
p=s.df(u,new C.b6h(),t).eu(0)
o=s.df(u,new C.b6i(),t).eu(0)
n=C.cQI(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fd(d,u),$async$amu)
case 4:v=n
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amu,w)},
Fd(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Fd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fd)
case 2:v=g
u=B.a.j(d)
t=J.b5(e,new C.b6a(),y.P)
t=A.E(t,t.$ti.k("a3.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fd)
case 3:return A.h(null,w)}})
return A.i($async$Fd,w)},
dlH(){var x,w=y.N,v=A.aY(w),u=A.aY(w),t=A.aY(w),s=A.aY(w),r=J.dX(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQI(x,x,u,t,v,s)
return r},
cQI(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jX(),i=d==null,h=D.Qt[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qt[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bD(256)
o=new A.z(q,new C.b69(),A.S(q).k("z<1,m>")).f9(0)
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
l=D.aMz[x]
k=D.aHF[x]
return new C.mh("vd_"+1000*Date.now()+"_"+e+"_"+j.bD(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dlI(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dlI(d,e){var x,w=J.dX(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kP(d.bD(256),16),2,"0")
return B.d.f9(w)},
cN8:function cN8(d){this.a=d},
cN7:function cN7(d,e){this.a=d
this.b=e},
cN3:function cN3(d){this.a=d},
cN4:function cN4(d){this.a=d},
cN5:function cN5(d){this.a=d},
cN6:function cN6(d,e){this.a=d
this.b=e},
I9:function I9(d,e,f,g){var _=this
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
b6j:function b6j(){},
b6k:function b6k(){},
b6b:function b6b(){},
b6c:function b6c(){},
b6d:function b6d(){},
b6e:function b6e(){},
b6f:function b6f(){},
b6g:function b6g(){},
b6h:function b6h(){},
b6i:function b6i(){},
b6a:function b6a(){},
b69:function b69(){},
Fb:function Fb(d,e){this.c=d
this.a=e},
a7M:function a7M(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cin:function cin(){},
cim:function cim(d,e){this.a=d
this.b=e},
cik:function cik(d){this.a=d},
cil:function cil(d,e){this.a=d
this.b=e},
cio:function cio(d){this.a=d},
cis:function cis(d){this.a=d},
cit:function cit(d,e){this.a=d
this.b=e},
cir:function cir(d,e,f){this.a=d
this.b=e
this.c=f},
ciq:function ciq(d,e){this.a=d
this.b=e},
cip:function cip(d,e){this.a=d
this.b=e},
ciu:function ciu(d){this.a=d},
Qp:function Qp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axV:function axV(d,e){this.c=d
this.a=e},
Fa:function Fa(d,e){this.c=d
this.a=e},
ayQ:function ayQ(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cih:function cih(d){this.a=d},
cii:function cii(d){this.a=d},
cij:function cij(d){this.a=d},
cig:function cig(d,e){this.a=d
this.b=e},
cid:function cid(d){this.a=d},
cie:function cie(d){this.a=d},
cic:function cic(d,e){this.a=d
this.b=e},
cif:function cif(d){this.a=d},
cib:function cib(d){this.a=d},
aF6:function aF6(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aF7:function aF7(d,e,f){this.c=d
this.d=e
this.a=f},
ayX:function ayX(d,e){this.c=d
this.a=e},
aF5:function aF5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cub:function cub(d){this.a=d},
cuc:function cuc(d){this.a=d},
aA2:function aA2(d){this.a=d},
auv:function auv(d,e){this.c=d
this.a=e},
dlG(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o7(x,C.b67(u,!1),D.Xe,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dlF(w)
if(t!=null)return new C.o7(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Xf,"TikTok",q,q)
s=C.dlE(x,w)
if(s!=null)return s
r=C.dlD(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o7(x,x,D.bbb,"Video",q,q)
return q},
dlE(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o7(d,"https://www.instagram.com/reel/"+x+u,D.Eq,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o7(d,"https://www.instagram.com/p/"+x+u,D.Eq,t,v,v)}return v},
dlD(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o7(d,"https://www.facebook.com/plugins/video.php?href="+A.f8(2,d,B.aL,!1)+"&show_text=false&width=734",D.Xg,"Facebook",null,null)},
dlF(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Ff:function Ff(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_3:function a_3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayR:function ayR(d,e){var _=this
_.d=$
_.cz$=d
_.aM$=e
_.c=_.a=null},
aA6:function aA6(d,e){this.c=d
this.a=e},
ckU:function ckU(d){this.a=d},
ckV:function ckV(d){this.a=d},
B_:function B_(d,e){this.c=d
this.a=e},
acl:function acl(){},
dC0(d){var x=window
x.toString
A.h5(x,"message",new C.cJN(d),!1,y._)},
Fc:function Fc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayS:function ayS(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ciA:function ciA(d){this.a=d},
ciy:function ciy(d){this.a=d},
cix:function cix(d){this.a=d},
ciz:function ciz(d){this.a=d},
ciw:function ciw(d){this.a=d},
civ:function civ(d){this.a=d},
cJN:function cJN(d){this.a=d},
b67(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d07(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d08(d){var x=A.bA(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bA(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d09(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dlA(d,e,f){var x=C.d07(d)
if(x!=null){if(f)return C.d09(x,e,!0)
return C.d08(C.b67(x,e))}return C.d08(d)},
dlB(d){if(d<=4)return 0
return B.p.aT(d-1,4)*4},
dlC(d){var x
if($.JM().a==null)return!1
x=$.xR().a
return d>=x&&d<x+4},
d0c(){var x=$.amt
if(x!=null)x.aa(0)
$.amt=null
$.xR().sv(0,0)},
d0b(){var x,w,v,u=$.JM()
if(u.a==null)return
x=$.amt
if(x!=null)x.aa(0)
w=$.d0a
if(w<=4){u=u.a
u.toString
C.cQH(u)
return}x=$.xR()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQH(u)},
cQH(d){var x=$.amt
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
default:x=null}$.amt=A.dq(A.d8(0,0,0,0,x),C.dCb())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I9.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.P.t(0.25),B.n,1),s=A.a2(this.d,B.P,x,x,14)
return A.x(x,A.G(A.a([s,B.ej,A.d(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dT,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.Q,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fH,x,x,x)}}
C.mh.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fb.prototype={
T(){return new C.a7M(A.a([],y.e))},
git(){return this.c}}
C.a7M.prototype={
Z(){var x=this
x.a4()
$.xR().af(0,x.gap1())
C.dC0(x.gb8X())
x.Q_()},
b8o(){if(this.c!=null)this.n(new C.cin())},
b8Y(){C.d0b()},
l(){$.xR().V(0,this.gap1())
C.d0c()
$.JM().sv(0,null)
this.a3()},
Q_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(u.a.c),$async$Q_)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cim(u,t))
$.b68=J.a5(t)
case 1:return A.h(v,w)}})
return A.i($async$Q_,w)},
PJ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.n(new C.cik(u))
x=3
return A.b(C.amu(u.a.c),$async$PJ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cil(u,t))
$.b68=J.a5(u.d)
u.c.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.d("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$PJ,w)},
baP(d){var x=this.c
x.toString
A.a8(x,!1).cM(A.eq(new C.cio(d),!1,null,y.H))},
bbk(){var x=this.c
x.toString
return C.SI(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.R,u=v?B.dw:B.db,t=A.aT(w,w,w,w,B.CK,w,w,w,new C.cis(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zB(A.G(A.a([A.I(new A.M(B.i3,A.d(s,1,B.ag,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.N,!0,w,A.b_(!1,w,!0,new A.M(B.aG,A.a2(B.f4,B.P,w,w,28),w),B.c7,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbj(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.A(A.a([new A.M(D.LA,s,w),A.I(x.e?B.jm:new A.hY($.JM(),new C.cit(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cq(w,u,t,w,!1,!1,A.ahB(B.P,B.yT,B.o1,D.bDP,x.e?w:new C.ciu(x)),w)}}
C.Qp.prototype={
b6t(d){var x,w=$.xR().a,v=this.d
if(C.dlC(v)){v=this.c.a
x=d.gaBJ()
return new C.Fc(v+"_mini",d.gaBJ(),!0,d.gaec(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_3(d,!0,!0,"Fold "+(B.p.aT(v,4)+1)+"/"+B.p.aT(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.n,1),s=A.a([new A.ag(0,B.w,B.P.t(0.18),B.ce,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.N,!0,w,A.b_(!1,v,!0,A.A(A.a([A.I(A.x(w,A.cT(r,A.jt(A.A(A.a([new C.axV(q,w),A.I(p!=null?x.b6t(p):A.x(w,A.A(A.a([A.a2(B.hv,B.lB,w,w,22),B.ak,A.d("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u2,w,w,w,w,w,w,w,w,1/0),1),A.x(w,A.G(A.a([A.a2(B.vU,B.P.t(0.85),w,w,9),D.bm0,A.d("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ap,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aip,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.u(w,w,t,u,s,D.Ps,B.l),w,w,w,B.eL,w,w,w),1),B.ak,A.d(q.b,1,B.ag,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.d(q.y,1,B.ag,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.d(q.c,1,B.ag,w,w,A.l(w,w,B.P.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axV.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.d(B.d.gau(this.c.c.split("-")),x,B.ag,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a2(B.qN,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lp,x,x,x)}}
C.Fa.prototype={
T(){return new C.ayQ()}}
C.ayQ.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.R,v=w?B.dw:B.db,u=A.aT(x,x,x,x,B.CK,x,x,x,new C.cih(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cq(x,v,A.cX(!0,A.A(A.a([new A.M(D.LA,A.G(A.a([u,A.I(new A.zB(A.G(A.a([A.I(new A.M(B.i3,A.d(t.b+" \xb7 "+t.c,1,B.ag,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.N,!0,x,A.b_(!1,x,!0,new A.M(B.aG,A.a2(B.f4,B.P,x,x,28),x),B.c7,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cii(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hY($.JM(),new C.cij(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aF6.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.P.t(0.35),B.ex,28),new A.ag(0,B.w,B.q.t(0.45),B.cP,18)],y.V),p=A.W(B.c.t(0.12),B.n,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fc(w+"_full",v,!1,x.gaec(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayX(u.r,t)}else x=new C.auv(n,t)
else x=D.bQQ
return A.x(t,A.cT(o,A.jt(A.A(A.a([new C.aF7(n,m,t),A.I(x,1),new C.aF5(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.u(t,t,p,r,q,D.Ps,B.l),t,s*2.05,t,B.bd,t,t,s)}}
C.aF7.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hW(s)
x=new A.dd(r,s)
w=x.gFl()===0?12:x.gFl()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.eq:B.h0)===B.eq?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.d(""+w+":"+s+" "+r,t,t,t,t,B.l8,t,t,t),B.b6,A.d(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.asi,B.dQ,D.arw,B.dQ,D.asm],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a2(B.CD,B.P.t(0.9),t,t,12),B.dQ,A.I(A.d(v.c,t,B.ag,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.d(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.A(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.ajc,t,t,t)}}
C.ayX.prototype={
C(d){var x=null
return A.x(x,A.b4(A.A(A.a([A.a2(B.vI,B.c.t(0.35),x,x,40),B.D,A.d("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.d("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ah,A.ez(D.avo,D.bBK,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.P,x,x,x,x,x,new A.aJ(B.P.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.Q,0,B.k),x,x,x),B.h,B.u2,x,x,x,x,x,x,x,x,1/0)}}
C.aF5.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoW(B.O8,"YouTube",t===0,s,new C.cub(v))
t=v.aoW(B.i6,"Device",t===1,s,new C.cuc(v))
x=s?"Power off":"Power on"
w=s?D.O9:D.apE
return A.x(u,A.G(A.a([r,B.Y,t,B.b6,A.aT(u,u,u,u,A.a2(w,s?B.aH:B.dz,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dh)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiY,u,u,u)},
aoW(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.P:B.aa
w=f&&g?B.P.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aU(!1,B.N,!0,v,A.b_(!1,A.n(10),!0,new A.M(B.jy,A.A(A.a([A.a2(d,x,t,t,18),A.d(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.Q,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.aA2.prototype={
C(d){return D.aa_}}
C.auv.prototype={
C(d){var x=this,w=null,v=x.c,u=A.d(v.b,w,w,w,w,B.l5,w,w,w),t=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pX(d,e){var x=null
return new A.M(B.c8,A.A(A.a([A.d(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.d(e,x,x,x,x,D.bsN,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Ff.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o7.prototype={
gaBJ(){var x=this.f
if(x!=null&&x.length!==0)return C.b67(x,!0)
return this.b},
gaec(){var x=this.c
return x===D.Xe||x===D.Xf||x===D.Eq||x===D.Xg}}
C.a_3.prototype={
T(){return new C.ayR(null,null)}}
C.ayR.prototype={
Z(){this.a4()
var x=A.bD(null,B.q2,null,1,null,this)
x.kM(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMz()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fc(v,new A.u(v,v,v,v,v,new A.aw(B.d3,B.bX,B.C,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.ho,r,v)
x=B.c.t(0.92)
s=A.b4(new A.dT(new A.bh(r,new A.bw(0.72,1,s),s.k("bh<bq.T>")),!1,A.a2(B.hv,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.aA6(u,v),t,s,A.bu(v,A.x(v,A.d("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bu(v,A.d(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bu(3,A.d(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.ba(B.am,v,B.cE,B.m,u,v)}}
C.aA6.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k8(v,new C.ckU(this),B.bn,!0,x,x,new C.ckV(this),x)
return new C.B_(w,x)}}
C.B_.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.uc,B.IB],y.O),B.hv)
break
case 1:x=new A.aN(A.a([B.u2,D.adn],y.O),B.iR)
break
case 2:x=new A.aN(A.a([D.aeO,D.acS],y.O),B.vL)
break
case 3:x=new A.aN(A.a([B.Z,B.dL],y.O),B.Cg)
break
case 4:x=new A.aN(A.a([B.a8,B.aj],y.O),B.m9)
break
default:x=v}w=x.a
return A.x(v,A.b4(A.a2(x.b,B.P.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.aw(B.ar,B.ay,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acl.prototype={
l(){var x=this,w=x.aM$
if(w!=null)w.V(0,x.gda())
x.aM$=null
x.a3()},
bn(){this.bB()
this.by()
this.dc()}}
C.Fc.prototype={
T(){return new C.ayS()}}
C.ayS.prototype={
ahM(d,e){var x,w,v=this,u="mute=1",t=C.d07(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d09(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b67(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dlA(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a4()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aR()
v.d=x
try{$.JN()
$.oF().u0(x,new C.ciA(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.civ(w))
x=w.e
x.toString
w.ahM(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jt(A.b4(A.a2(B.Oj,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.aid(u,B.rx,x)],y.p)
if(v.f)x.push(A.jt(A.b4(new A.an(w,w,D.aaq,u),u,u,u),B.bU,!0))
return new A.ba(B.am,u,B.cE,B.m,x,u)}}
var z=a.updateTypes(["m(mh)","~()","Fb(R)","mh(Y<@,@>)","a0(mh)","Y<m,@>(mh)","au<~>()","Fa(R)","hY<P>(R,o7?,p?)","Qp(R,P)","tf(R,o7?,p?)","B_(R,ai,di?)"])
C.cN8.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+2}
C.cN7.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.R,m=A.az(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.P.t(0.22),B.ex,32)],y.V),h=A.W(n?B.bj:B.P.t(0.18),B.n,1),g=A.n(28),f=B.P.t(n?0.35:0.14)
k=A.a([f,B.O.t(n?0.18:0.08)],k)
f=A.x(o,D.arb,B.h,o,o,new A.u(B.P.t(0.18),o,A.W(B.P.t(0.45),B.n,1),o,o,o,B.ai),o,48,o,o,o,o,48)
x=A.d("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.A(A.a([x,B.ak,A.d("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aS,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.x(o,A.G(A.a([f,B.ft,x,A.aT(o,o,o,o,A.a2(B.cH,n?B.aa:B.bU,o,o,o),o,o,o,new C.cN3(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.aw(B.a2,B.a5,B.C,k,o,o),B.l),o,o,o,B.L9,o,o,o)
f=A.eL(B.c6,A.a([new C.I9("YouTube",B.CC,n,o),new C.I9("TikTok",B.iR,n,o),new C.I9("Instagram",B.vL,n,o),new C.I9("Facebook",B.Cg,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bB:B.fl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a2(B.jG,B.P.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bj:B.b8
v=A.A(A.a([f,B.ao,A.at(o,B.G,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bg(o,new A.b3(4,r,B.I),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aJ(p,1,B.n,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a6d),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.L,o,o,o,o)],w),B.ad,B.e,B.f,0,B.k)
f=A.iP(D.arf,D.bHz,new C.cN4(d),A.jN(o,o,o,o,o,o,o,o,o,o,o,n?B.aC:B.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.M(new A.U(12,0,12,12+m.f.d),A.fc(A.cT(g,A.A(A.a([k,new A.M(D.akb,v,o),new A.M(D.akh,A.G(A.a([f,B.b6,A.bY(!1,A.d("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cN5(d),o,o),B.Y,A.dH(D.av8,D.bHU,new C.cN6(d,x),A.bt(B.P,o,o,o,B.c,o,D.ajH,o,new A.bp(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ad,B.e,B.Q,0,B.k),B.au),new A.u(o,o,h,l,i,new A.aw(B.ar,B.ay,B.C,j,o,o),B.l),B.ch),o)},
$S:61}
C.cN3.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cN4.prototype={
$0(){C.d0c()
$.JM().sv(0,null)
A.a8(this.a,!1).S(null)},
$S:0}
C.cN5.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cN6.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a8(this.a,!1).S(x)
return null},
$S:0}
C.b6j.prototype={
$1(d){return C.d0d(A.K(d,y.N,y.z))},
$S:z+3}
C.b6k.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b6b.prototype={
$1(d){return d.c},
$S:z+0}
C.b6c.prototype={
$1(d){return d.r},
$S:z+0}
C.b6d.prototype={
$1(d){return d.f},
$S:z+0}
C.b6e.prototype={
$1(d){return d.at},
$S:z+0}
C.b6f.prototype={
$1(d){return d.c},
$S:z+0}
C.b6g.prototype={
$1(d){return d.r},
$S:z+0}
C.b6h.prototype={
$1(d){return d.f},
$S:z+0}
C.b6i.prototype={
$1(d){return d.at},
$S:z+0}
C.b6a.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b69.prototype={
$1(d){return B.a.bz(B.p.kP(d,16),2,"0").toUpperCase()},
$S:74}
C.cin.prototype={
$0(){},
$S:0}
C.cim.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cik.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cil.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cio.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+7}
C.cis.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.cit.prototype={
$3(d,e,f){return new A.hY($.xR(),new C.cir(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cir.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.z8(d,l,y.Q)
x=x==null?l:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.P.t(0.12)
t=A.n(12)
s=A.W(B.P.t(0.35),B.n,1)
r=A.a2(B.hv,B.P,l,l,18)
q=k.d
p=J.a5(m.a.d)
o=$.xR().a
n=B.i.aP(o+4,1,p)
u=A.a([A.x(l,A.G(A.a([r,B.Y,A.I(A.d("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cF,B.es,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cT(t,new A.iY(1.7777777777777777,new C.Fc("fleet_master",s,!1,k.gaec(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a5(t)+".":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.d(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yi(0,B.m,l,B.r,l,l,l,l,!1,l,B.W,!1,A.a([new A.jK(new A.M(B.AL,A.A(v,B.t,B.e,B.f,0,B.k),l),l),new A.oh(D.aiD,A.aq_(new A.nh(new C.ciq(u,k),J.a5(u.d),!1,!0,!0,A.uG(),l),D.bmD),l)],x))},
$S:1468}
C.ciq.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qp(w,e,J.a5(x.d),new C.cip(x,w),this.b,null)},
$S:z+9}
C.cip.prototype={
$0(){return this.a.baP(this.b)},
$S:0}
C.ciu.prototype={
$0(){this.a.PJ()
return null},
$S:0}
C.cih.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.cii.prototype={
$0(){C.SI(this.a,$.b68)
return null},
$S:0}
C.cij.prototype={
$3(d,e,f){return A.h1(new C.cig(this.a,e))},
$S:z+10}
C.cig.prototype={
$2(d,e){var x,w=null,v=B.i.aP(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.cp(A.A(A.a([A.d(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.ao,new C.aF6(v,t.a.c,t.e,t.d,new C.cid(t),new C.cie(t),new C.cif(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v4,w,w,B.W),w,w,w)},
$S:1469}
C.cid.prototype={
$0(){var x=this.a.c
x.toString
C.SI(x,$.b68)
return null},
$S:0}
C.cie.prototype={
$1(d){var x=this.a
return x.n(new C.cic(x,d))},
$S:33}
C.cic.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cif.prototype={
$0(){var x=this.a
return x.n(new C.cib(x))},
$S:0}
C.cib.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cub.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cuc.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckU.prototype={
$3(d,e,f){return new C.B_(this.a.c,null)},
$S:z+11}
C.ckV.prototype={
$3(d,e,f){if(f==null)return e
return new A.ba(B.am,null,B.cE,B.m,A.a([new C.B_(this.a.c,null),D.a9T],y.p),null)},
$C:"$3",
$R:3,
$S:479}
C.ciA.prototype={
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
A.h5(w,"load",new C.ciy(x),!1,v)
w=x.e
w.toString
A.h5(w,"error",new C.ciz(x),!1,v)
x=x.e
x.toString
return x},
$S:1470}
C.ciy.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cix(x))},
$S:39}
C.cix.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ciz.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ciw(x))},
$S:39}
C.ciw.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.civ.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJN.prototype={
$1(d){var x=new A.AA([],[]).ED(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1471};(function aliases(){var x=C.acl.prototype
x.aMz=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7M.prototype,"gap1","b8o",1)
x(v,"gb8X","b8Y",1)
x(v,"gbbj","bbk",6)
w(C,"dCb","d0b",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uZ,[C.cN8,C.cN7,C.b6j,C.b6k,C.b6b,C.b6c,C.b6d,C.b6e,C.b6f,C.b6g,C.b6h,C.b6i,C.b6a,C.b69,C.cio,C.cit,C.cir,C.cij,C.cie,C.ckU,C.ckV,C.ciA,C.ciy,C.ciz,C.cJN])
w(A.Ue,[C.cN3,C.cN4,C.cN5,C.cN6,C.cin,C.cim,C.cik,C.cil,C.cis,C.cip,C.ciu,C.cih,C.cii,C.cid,C.cic,C.cif,C.cib,C.cub,C.cuc,C.cix,C.ciw,C.civ])
w(A.aD,[C.I9,C.Qp,C.axV,C.aF6,C.aF7,C.ayX,C.aF5,C.aA2,C.auv,C.aA6,C.B_])
w(A.ai,[C.mh,C.o7])
w(A.ad,[C.Fb,C.Fa,C.a_3,C.Fc])
w(A.ae,[C.a7M,C.ayQ,C.acl,C.ayS])
w(A.Uf,[C.ciq,C.cig])
v(C.Ff,A.avk)
v(C.ayR,C.acl)
x(C.acl,A.dN)})()
A.d3s(b.typeUniverse,JSON.parse('{"Fb":{"ad":[],"p":[]},"Qp":{"aD":[],"p":[]},"Fa":{"ad":[],"p":[]},"I9":{"aD":[],"p":[]},"a7M":{"ae":["Fb"]},"axV":{"aD":[],"p":[]},"ayQ":{"ae":["Fa"]},"aF6":{"aD":[],"p":[]},"aF7":{"aD":[],"p":[]},"ayX":{"aD":[],"p":[]},"aF5":{"aD":[],"p":[]},"aA2":{"aD":[],"p":[]},"auv":{"aD":[],"p":[]},"a_3":{"ad":[],"p":[]},"B_":{"aD":[],"p":[]},"ayR":{"ae":["a_3"]},"aA6":{"aD":[],"p":[]},"Fc":{"ad":[],"p":[]},"ayS":{"ae":["Fc"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<C>"),e:x("af<mh>"),s:x("af<m>"),p:x("af<p>"),t:x("af<P>"),X:x("a9<mh>"),a:x("a9<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("me"),_:x("z3"),k:x("mh"),N:x("m"),Y:x("bw<aa>"),W:x("dD<m>"),J:x("hY<P>"),j:x("hY<o7?>"),E:x("wX<ct>"),q:x("R4"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a6d=new A.aJ(B.P,1.6,B.n,-1)
D.bmm=new A.an(18,18,B.Im,null)
D.a9T=new A.dw(B.M,null,null,D.bmm,null)
D.O9=new A.O(983224,"MaterialIcons",!1)
D.atJ=new A.a6(D.O9,48,B.bb,null,null,null)
D.bsr=new A.H(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCr=new A.y("Powered off",null,D.bsr,null,null,null,null,null,null,null,null)
D.aG3=x([D.atJ,B.x,D.bCr],y.p)
D.ag_=new A.eU(B.W,B.e,B.Q,B.j,null,B.k,null,0,D.aG3,null)
D.aa_=new A.dw(B.M,null,null,D.ag_,null)
D.aaq=new A.hO(2,null,null,null,null,B.U,null,null,null,null)
D.acS=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.adn=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.aeO=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.aip=new A.U(0,3,0,3)
D.aiD=new A.U(10,0,10,88)
D.aiY=new A.U(12,6,12,10)
D.ajc=new A.U(14,8,14,6)
D.ajH=new A.U(18,12,18,12)
D.akb=new A.U(20,18,20,8)
D.akh=new A.U(20,8,20,20)
D.LA=new A.U(8,6,15,8)
D.apE=new A.O(983222,"MaterialIcons",!1)
D.arb=new A.a6(B.hv,26,B.P,null,null,null)
D.arf=new A.a6(B.N9,18,null,null,null,null)
D.arw=new A.a6(B.qN,14,B.U,null,null,null)
D.apV=new A.O(983420,"MaterialIcons",!1)
D.asi=new A.a6(D.apV,14,B.U,null,null,null)
D.aor=new A.O(62895,"MaterialIcons",!1)
D.asm=new A.a6(D.aor,14,B.U,null,null,null)
D.av8=new A.a6(B.m6,20,null,null,null,null)
D.avo=new A.a6(B.f4,16,null,null,null,null)
D.aI1=x([B.aj,B.Z],y.O)
D.Ps=new A.aw(B.ar,B.ay,B.C,D.aI1,null,null)
D.bgj=new A.aN("NGMY OS","14.2.1")
D.bfu=new A.aN("VirtualDroid","13.8.4")
D.bft=new A.aN("NGMY OS","15.0.0")
D.bg0=new A.aN("VirtualDroid","14.1.2")
D.bfs=new A.aN("NGMY Tab OS","12.9.7")
D.bfr=new A.aN("NGMY OS","13.5.3")
D.bfi=new A.aN("VirtualDroid","15.2.0")
D.bfJ=new A.aN("NGMY OS","14.8.1")
D.bg5=new A.aN("NGMY Tab OS","13.2.4")
D.bgs=new A.aN("VirtualDroid","12.6.9")
D.bff=new A.aN("NGMY OS","16.0.1")
D.bf7=new A.aN("VirtualDroid","14.9.0")
D.bgd=new A.aN("NGMY Tab OS","14.0.3")
D.bfA=new A.aN("NGMY OS","13.1.8")
D.bfe=new A.aN("VirtualDroid","13.4.5")
D.bfq=new A.aN("NGMY OS","15.3.2")
D.bg6=new A.aN("NGMY Tab OS","12.4.1")
D.bgf=new A.aN("VirtualDroid","16.1.0")
D.bfI=new A.aN("NGMY OS","14.4.6")
D.bgk=new A.aN("VirtualDroid","15.0.8")
D.aHF=x([D.bgj,D.bfu,D.bft,D.bg0,D.bfs,D.bfr,D.bfi,D.bfJ,D.bg5,D.bgs,D.bff,D.bf7,D.bgd,D.bfA,D.bfe,D.bfq,D.bg6,D.bgf,D.bfI,D.bgk],A.bm("af<+(m,m)>"))
D.bit=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bi1=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhX=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bi5=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhT=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bi7=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.biv=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhU=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bi0=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bi9=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhS=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bin=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bik=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bi_=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bih=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.big=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhR=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bi4=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bie=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bij=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qt=x([D.bit,D.bi1,D.bhX,D.bi5,D.bhT,D.bi7,D.biv,D.bhU,D.bi0,D.bi9,D.bhS,D.bin,D.bik,D.bi_,D.bih,D.big,D.bhR,D.bi4,D.bie,D.bij],A.bm("af<+(m,m,aa,aa,m)>"))
D.aMz=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.Xe=new C.Ff(0,"youtube")
D.Xf=new C.Ff(1,"tiktok")
D.Eq=new C.Ff(2,"instagram")
D.Xg=new C.Ff(3,"facebook")
D.bbb=new C.Ff(4,"other")
D.bm0=new A.an(3,null,null,null)
D.bmD=new A.iN(4,10,8,0.52,null)
D.bDl=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpB=new A.aP(D.bDl,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsN=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBK=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDP=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHz=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHU=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQQ=new C.aA2(null)})();(function staticFields(){$.d0a=20
$.amt=null
$.b68=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGl","xR",()=>A.Pe(0))
x($,"dGm","JM",()=>A.Pe(null))})()};
(a=>{a["dIb9O9fx90tZeZVQewqbUuXdLtc="]=a.current})($__dart_deferred_initializers__);