((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dD3(d,e){A.a8(d,!1).cM(A.eq(new C.cMZ(e),!0,null,y.H))},
SI(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o
var $async$SI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=$.JL()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.W),u)
x=3
return A.b(A.dg(B.B,null,new C.cMY(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SI)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dlw(s)
if(r==null){d.E(y.q).f.O(D.bpX)
x=1
break}x=4
return A.b(A.bS(B.fm,null,y.H),$async$SI)
case 4:if(d.e==null){x=1
break}o=B.p.aP(e,1,999)
$.d01=o
q=C.dlr(o)
o=$.xP()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQx(r)
d.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.d("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
d04(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Ff(d){return C.dlz(d)},
dlz(a2){var x=0,w=A.j(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ff=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$Ff)
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
case 10:l=J.ij(s,y.f)
l=A.ef(l,new C.b6g(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6h(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d05(r)
x=12
return A.b(C.Fe(a2,q),$async$Ff)
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
case 19:n=C.d04(A.K(o,y.N,y.z))
m=C.d05(A.a([n],y.e))
x=21
return A.b(C.Fe(a2,m),$async$Ff)
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
case 18:case 14:r=C.dlx()
x=22
return A.b(C.Fe(a2,r),$async$Ff)
case 22:v=r
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ff,w)},
d05(d){var x=A.S(d).k("z<1,m>"),w=new A.z(d,new C.b68(),x).eu(0),v=new A.z(d,new C.b69(),x).eu(0),u=new A.z(d,new C.b6a(),x).eu(0),t=new A.z(d,new C.b6b(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQy(null,r,v,u,w,t));++r}return s},
amr(d){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n
var $async$amr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Ff(d),$async$amr)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b6c(),t).eu(0)
q=s.df(u,new C.b6d(),t).eu(0)
p=s.df(u,new C.b6e(),t).eu(0)
o=s.df(u,new C.b6f(),t).eu(0)
n=C.cQy(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fe(d,u),$async$amr)
case 4:v=n
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amr,w)},
Fe(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Fe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fe)
case 2:v=g
u=B.a.j(d)
t=J.b5(e,new C.b67(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fe)
case 3:return A.h(null,w)}})
return A.i($async$Fe,w)},
dlx(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dX(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQy(x,x,u,t,v,s)
return r},
cQy(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jX(),i=d==null,h=D.Qw[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qw[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bD(256)
o=new A.z(q,new C.b66(),A.S(q).k("z<1,m>")).f9(0)
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
l=D.aMT[x]
k=D.aHW[x]
return new C.mh("vd_"+1000*Date.now()+"_"+e+"_"+j.bD(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dly(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dly(d,e){var x,w=J.dX(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kP(d.bD(256),16),2,"0")
return B.d.f9(w)},
cMZ:function cMZ(d){this.a=d},
cMY:function cMY(d,e){this.a=d
this.b=e},
cMU:function cMU(d){this.a=d},
cMV:function cMV(d){this.a=d},
cMW:function cMW(d){this.a=d},
cMX:function cMX(d,e){this.a=d
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
b6g:function b6g(){},
b6h:function b6h(){},
b68:function b68(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(){},
b6c:function b6c(){},
b6d:function b6d(){},
b6e:function b6e(){},
b6f:function b6f(){},
b67:function b67(){},
b66:function b66(){},
Fc:function Fc(d,e){this.c=d
this.a=e},
a7J:function a7J(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cie:function cie(){},
cid:function cid(d,e){this.a=d
this.b=e},
cib:function cib(d){this.a=d},
cic:function cic(d,e){this.a=d
this.b=e},
cif:function cif(d){this.a=d},
cij:function cij(d){this.a=d},
cik:function cik(d,e){this.a=d
this.b=e},
cii:function cii(d,e,f){this.a=d
this.b=e
this.c=f},
cih:function cih(d,e){this.a=d
this.b=e},
cig:function cig(d,e){this.a=d
this.b=e},
cil:function cil(d){this.a=d},
Qp:function Qp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axS:function axS(d,e){this.c=d
this.a=e},
Fb:function Fb(d,e){this.c=d
this.a=e},
ayN:function ayN(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ci8:function ci8(d){this.a=d},
ci9:function ci9(d){this.a=d},
cia:function cia(d){this.a=d},
ci7:function ci7(d,e){this.a=d
this.b=e},
ci4:function ci4(d){this.a=d},
ci5:function ci5(d){this.a=d},
ci3:function ci3(d,e){this.a=d
this.b=e},
ci6:function ci6(d){this.a=d},
ci2:function ci2(d){this.a=d},
aF3:function aF3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aF4:function aF4(d,e,f){this.c=d
this.d=e
this.a=f},
ayU:function ayU(d,e){this.c=d
this.a=e},
aF2:function aF2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cu2:function cu2(d){this.a=d},
cu3:function cu3(d){this.a=d},
aA_:function aA_(d){this.a=d},
aus:function aus(d,e){this.c=d
this.a=e},
dlw(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o7(x,C.b64(u,!1),D.Xi,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dlv(w)
if(t!=null)return new C.o7(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Xj,"TikTok",q,q)
s=C.dlu(x,w)
if(s!=null)return s
r=C.dlt(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o7(x,x,D.bbw,"Video",q,q)
return q},
dlu(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o7(d,"https://www.instagram.com/reel/"+x+u,D.Eq,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o7(d,"https://www.instagram.com/p/"+x+u,D.Eq,t,v,v)}return v},
dlt(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o7(d,"https://www.facebook.com/plugins/video.php?href="+A.f8(2,d,B.aL,!1)+"&show_text=false&width=734",D.Xk,"Facebook",null,null)},
dlv(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Fg:function Fg(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_2:function a_2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayO:function ayO(d,e){var _=this
_.d=$
_.cz$=d
_.aM$=e
_.c=_.a=null},
aA3:function aA3(d,e){this.c=d
this.a=e},
ckL:function ckL(d){this.a=d},
ckM:function ckM(d){this.a=d},
AZ:function AZ(d,e){this.c=d
this.a=e},
aci:function aci(){},
dBR(d){var x=window
x.toString
A.h6(x,"message",new C.cJD(d),!1,y._)},
Fd:function Fd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayP:function ayP(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
cir:function cir(d){this.a=d},
cip:function cip(d){this.a=d},
cio:function cio(d){this.a=d},
ciq:function ciq(d){this.a=d},
cin:function cin(d){this.a=d},
cim:function cim(d){this.a=d},
cJD:function cJD(d){this.a=d},
b64(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_Z(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d0_(d){var x=A.bA(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bA(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d00(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dlq(d,e,f){var x=C.d_Z(d)
if(x!=null){if(f)return C.d00(x,e,!0)
return C.d0_(C.b64(x,e))}return C.d0_(d)},
dlr(d){if(d<=4)return 0
return B.p.aT(d-1,4)*4},
dls(d){var x
if($.JL().a==null)return!1
x=$.xP().a
return d>=x&&d<x+4},
d03(){var x=$.amq
if(x!=null)x.aa(0)
$.amq=null
$.xP().sv(0,0)},
d02(){var x,w,v,u=$.JL()
if(u.a==null)return
x=$.amq
if(x!=null)x.aa(0)
w=$.d01
if(w<=4){u=u.a
u.toString
C.cQx(u)
return}x=$.xP()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQx(u)},
cQx(d){var x=$.amq
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
default:x=null}$.amq=A.dq(A.d8(0,0,0,0,x),C.dC1())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I9.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.O.t(0.25),B.o,1),s=A.a3(this.d,B.O,x,x,14)
return A.x(x,A.G(A.a([s,B.ej,A.d(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dS,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fG,x,x,x)}}
C.mh.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fc.prototype={
T(){return new C.a7J(A.a([],y.e))},
git(){return this.c}}
C.a7J.prototype={
Z(){var x=this
x.a4()
$.xP().af(0,x.gap4())
C.dBR(x.gb98())
x.Q_()},
b8A(){if(this.c!=null)this.n(new C.cie())},
b99(){C.d02()},
l(){$.xP().V(0,this.gap4())
C.d03()
$.JL().sv(0,null)
this.a3()},
Q_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Ff(u.a.c),$async$Q_)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cid(u,t))
$.b65=J.a5(t)
case 1:return A.h(v,w)}})
return A.i($async$Q_,w)},
PJ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.n(new C.cib(u))
x=3
return A.b(C.amr(u.a.c),$async$PJ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cic(u,t))
$.b65=J.a5(u.d)
u.c.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.d("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$PJ,w)},
bb1(d){var x=this.c
x.toString
A.a8(x,!1).cM(A.eq(new C.cif(d),!1,null,y.H))},
bbx(){var x=this.c
x.toString
return C.SI(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.R,u=v?B.du:B.dc,t=A.aT(w,w,w,w,B.CL,w,w,w,new C.cij(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.H(new A.zA(A.G(A.a([A.H(new A.M(B.i0,A.d(s,1,B.ae,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.N,!0,w,A.aY(!1,w,!0,new A.M(B.aH,A.a3(B.f1,B.O,w,w,28),w),B.bY,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbw(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cW(!0,A.A(A.a([new A.M(D.LH,s,w),A.H(x.e?B.jl:new A.hX($.JL(),new C.cik(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cp(w,u,t,w,!1,!1,A.ahy(B.O,B.yV,B.o1,D.bEa,x.e?w:new C.cil(x)),w)}}
C.Qp.prototype={
b6F(d){var x,w=$.xP().a,v=this.d
if(C.dls(v)){v=this.c.a
x=d.gaBQ()
return new C.Fd(v+"_mini",d.gaBQ(),!0,d.gaee(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_2(d,!0,!0,"Fold "+(B.p.aT(v,4)+1)+"/"+B.p.aT(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.o,1),s=A.a([new A.ag(0,B.w,B.O.t(0.18),B.ch,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.N,!0,w,A.aY(!1,v,!0,A.A(A.a([A.H(A.x(w,A.cT(r,A.jt(A.A(A.a([new C.axS(q,w),A.H(p!=null?x.b6F(p):A.x(w,A.A(A.a([A.a3(B.ht,B.lA,w,w,22),B.ak,A.d("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u2,w,w,w,w,w,w,w,w,1/0),1),A.x(w,A.G(A.a([A.a3(B.vW,B.O.t(0.85),w,w,9),D.bml,A.d("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ap,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aiK,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.u(w,w,t,u,s,D.Pv,B.l),w,w,w,B.eH,w,w,w),1),B.ak,A.d(q.b,1,B.ae,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.d(q.y,1,B.ae,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.d(q.c,1,B.ae,w,w,A.l(w,w,B.O.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axS.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.H(A.d(B.d.gau(this.c.c.split("-")),x,B.ae,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a3(B.qM,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lw,x,x,x)}}
C.Fb.prototype={
T(){return new C.ayN()}}
C.ayN.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.R,v=w?B.du:B.dc,u=A.aT(x,x,x,x,B.CL,x,x,x,new C.ci8(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cp(x,v,A.cW(!0,A.A(A.a([new A.M(D.LH,A.G(A.a([u,A.H(new A.zA(A.G(A.a([A.H(new A.M(B.i0,A.d(t.b+" \xb7 "+t.c,1,B.ae,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.N,!0,x,A.aY(!1,x,!0,new A.M(B.aH,A.a3(B.f1,B.O,x,x,28),x),B.bY,!0,x,x,x,x,x,x,x,x,x,x,x,new C.ci9(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.H(new A.hX($.JL(),new C.cia(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aF3.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.O.t(0.35),B.eh,28),new A.ag(0,B.w,B.q.t(0.45),B.cK,18)],y.V),p=A.W(B.c.t(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fd(w+"_full",v,!1,x.gaee(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayU(u.r,t)}else x=new C.aus(n,t)
else x=D.bR8
return A.x(t,A.cT(o,A.jt(A.A(A.a([new C.aF4(n,m,t),A.H(x,1),new C.aF2(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.u(t,t,p,r,q,D.Pv,B.l),t,s*2.05,t,B.bc,t,t,s)}}
C.aF4.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hV(s)
x=new A.dc(r,s)
w=x.gFl()===0?12:x.gFl()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.eq:B.fY)===B.eq?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.d(""+w+":"+s+" "+r,t,t,t,t,B.l7,t,t,t),B.b3,A.d(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.be,D.asB,B.e7,D.arP,B.e7,D.asF],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a3(B.CE,B.O.t(0.9),t,t,12),B.e7,A.H(A.d(v.c,t,B.ae,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.d(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.A(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.ajv,t,t,t)}}
C.ayU.prototype={
C(d){var x=null
return A.x(x,A.b4(A.A(A.a([A.a3(B.vK,B.c.t(0.35),x,x,40),B.D,A.d("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.d("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eI(D.avF,D.bC6,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.O,x,x,x,x,x,new A.aJ(B.O.t(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u2,x,x,x,x,x,x,x,x,1/0)}}
C.aF2.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoZ(B.Ob,"YouTube",t===0,s,new C.cu2(v))
t=v.aoZ(B.i4,"Device",t===1,s,new C.cu3(v))
x=s?"Power off":"Power on"
w=s?D.Oc:D.apX
return A.x(u,A.G(A.a([r,B.Y,t,B.b3,A.aT(u,u,u,u,A.a3(w,s?B.aO:B.dx,u,u,u),u,u,u,v.f,u,u,u,u,x,B.di)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.ajh,u,u,u)},
aoZ(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.ba
else x=f?B.O:B.a9
w=f&&g?B.O.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.H(A.aU(!1,B.N,!0,v,A.aY(!1,A.n(10),!0,new A.M(B.jz,A.A(A.a([A.a3(d,x,t,t,18),A.d(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.aA_.prototype={
C(d){return D.aa5}}
C.aus.prototype={
C(d){var x=this,w=null,v=x.c,u=A.d(v.b,w,w,w,w,B.l4,w,w,w),t=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aH,w,w,B.X,!1)},
pX(d,e){var x=null
return new A.M(B.c7,A.A(A.a([A.d(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bS,A.d(e,x,x,x,x,D.bt8,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fg.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o7.prototype={
gaBQ(){var x=this.f
if(x!=null&&x.length!==0)return C.b64(x,!0)
return this.b},
gaee(){var x=this.c
return x===D.Xi||x===D.Xj||x===D.Eq||x===D.Xk}}
C.a_2.prototype={
T(){return new C.ayO(null,null)}}
C.ayO.prototype={
Z(){this.a4()
var x=A.bC(null,B.q2,null,1,null,this)
x.kM(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMG()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fc(v,new A.u(v,v,v,v,v,new A.aw(B.da,B.c2,B.C,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.cg),s=y.Y,r=w.d
r===$&&A.c()
r=A.cN(B.hn,r,v)
x=B.c.t(0.92)
s=A.b4(new A.dT(new A.bh(r,new A.bw(0.72,1,s),s.k("bh<bq.T>")),!1,A.a3(B.ht,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.aA3(u,v),t,s,A.bu(v,A.x(v,A.d("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bu(v,A.d(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bu(3,A.d(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.b9(B.al,v,B.cE,B.m,u,v)}}
C.aA3.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k8(v,new C.ckL(this),B.bn,!0,x,x,new C.ckM(this),x)
return new C.AZ(w,x)}}
C.AZ.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.uc,B.IA],y.O),B.ht)
break
case 1:x=new A.aN(A.a([B.u2,D.ady],y.O),B.iR)
break
case 2:x=new A.aN(A.a([D.af6,D.ad2],y.O),B.vN)
break
case 3:x=new A.aN(A.a([B.Z,B.dK],y.O),B.Cg)
break
case 4:x=new A.aN(A.a([B.a8,B.aj],y.O),B.m7)
break
default:x=v}w=x.a
return A.x(v,A.b4(A.a3(x.b,B.O.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.aw(B.ar,B.ay,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.aci.prototype={
l(){var x=this,w=x.aM$
if(w!=null)w.V(0,x.gda())
x.aM$=null
x.a3()},
bn(){this.bB()
this.by()
this.dc()}}
C.Fd.prototype={
T(){return new C.ayP()}}
C.ayP.prototype={
ahP(d,e){var x,w,v=this,u="mute=1",t=C.d_Z(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d00(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b64(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dlq(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a4()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aR()
v.d=x
try{$.JM()
$.oF().u_(x,new C.cir(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cim(w))
x=w.e
x.toString
w.ahP(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jt(A.b4(A.a3(B.Om,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.aia(u,B.rx,x)],y.p)
if(v.f)x.push(A.jt(A.b4(new A.an(w,w,D.aaw,u),u,u,u),B.bV,!0))
return new A.b9(B.al,u,B.cE,B.m,x,u)}}
var z=a.updateTypes(["m(mh)","~()","Fc(R)","mh(Y<@,@>)","a0(mh)","Y<m,@>(mh)","au<~>()","Fb(R)","hX<P>(R,o7?,p?)","Qp(R,P)","tf(R,o7?,p?)","AZ(R,ai,di?)"])
C.cMZ.prototype={
$1(d){return new C.Fc(this.a,null)},
$S:z+2}
C.cMY.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.R,m=A.az(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.O.t(0.22),B.eh,32)],y.V),h=A.W(n?B.bj:B.O.t(0.18),B.o,1),g=A.n(28),f=B.O.t(n?0.35:0.14)
k=A.a([f,B.Q.t(n?0.18:0.08)],k)
f=A.x(o,D.arv,B.h,o,o,new A.u(B.O.t(0.18),o,A.W(B.O.t(0.45),B.o,1),o,o,o,B.ag),o,48,o,o,o,o,48)
x=A.d("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.H(A.A(A.a([x,B.ak,A.d("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.x(o,A.G(A.a([f,B.fP,x,A.aT(o,o,o,o,A.a3(B.cG,n?B.a9:B.bV,o,o,o),o,o,o,new C.cMU(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.aw(B.a2,B.a5,B.C,k,o,o),B.l),o,o,o,B.Lg,o,o,o)
f=A.eS(B.ca,A.a([new C.I9("YouTube",B.CD,n,o),new C.I9("TikTok",B.iR,n,o),new C.I9("Instagram",B.vN,n,o),new C.I9("Facebook",B.Cg,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bz:B.fj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.dc
s=A.a3(B.jH,B.O.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bj:B.b7
v=A.A(A.a([f,B.ao,A.at(o,B.G,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bg(o,new A.b3(4,r,B.I),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aJ(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a6g),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.L,o,o,o,o)],w),B.ad,B.e,B.f,0,B.k)
f=A.iP(D.arz,D.bHT,new C.cMV(d),A.jN(o,o,o,o,o,o,o,o,o,o,o,n?B.aE:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.M(new A.U(12,0,12,12+m.f.d),A.fc(A.cT(g,A.A(A.a([k,new A.M(D.aku,v,o),new A.M(D.akA,A.G(A.a([f,B.b3,A.bY(!1,A.d("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cMW(d),o,o),B.Y,A.dL(D.avp,D.bId,new C.cMX(d,x),A.bt(B.O,o,o,o,B.c,o,D.ak0,o,new A.bp(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ad,B.e,B.P,0,B.k),B.au),new A.u(o,o,h,l,i,new A.aw(B.ar,B.ay,B.C,j,o,o),B.l),B.cg),o)},
$S:61}
C.cMU.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cMV.prototype={
$0(){C.d03()
$.JL().sv(0,null)
A.a8(this.a,!1).S(null)},
$S:0}
C.cMW.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cMX.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a8(this.a,!1).S(x)
return null},
$S:0}
C.b6g.prototype={
$1(d){return C.d04(A.K(d,y.N,y.z))},
$S:z+3}
C.b6h.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b68.prototype={
$1(d){return d.c},
$S:z+0}
C.b69.prototype={
$1(d){return d.r},
$S:z+0}
C.b6a.prototype={
$1(d){return d.f},
$S:z+0}
C.b6b.prototype={
$1(d){return d.at},
$S:z+0}
C.b6c.prototype={
$1(d){return d.c},
$S:z+0}
C.b6d.prototype={
$1(d){return d.r},
$S:z+0}
C.b6e.prototype={
$1(d){return d.f},
$S:z+0}
C.b6f.prototype={
$1(d){return d.at},
$S:z+0}
C.b67.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b66.prototype={
$1(d){return B.a.bz(B.p.kP(d,16),2,"0").toUpperCase()},
$S:74}
C.cie.prototype={
$0(){},
$S:0}
C.cid.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cib.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cic.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cif.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+7}
C.cij.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.cik.prototype={
$3(d,e,f){return new A.hX($.xP(),new C.cii(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cii.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.z7(d,l,y.Q)
x=x==null?l:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.O.t(0.12)
t=A.n(12)
s=A.W(B.O.t(0.35),B.o,1)
r=A.a3(B.ht,B.O,l,l,18)
q=k.d
p=J.a5(m.a.d)
o=$.xP().a
n=B.i.aP(o+4,1,p)
u=A.a([A.x(l,A.G(A.a([r,B.Y,A.H(A.d("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cF,B.es,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cT(t,new A.iY(1.7777777777777777,new C.Fd("fleet_master",s,!1,k.gaee(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a5(t)+".":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.d(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yh(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jK(new A.M(B.AL,A.A(v,B.t,B.e,B.f,0,B.k),l),l),new A.oh(D.aiY,A.apX(new A.nh(new C.cih(u,k),J.a5(u.d),!1,!0,!0,A.uH(),l),D.bmZ),l)],x))},
$S:1468}
C.cih.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qp(w,e,J.a5(x.d),new C.cig(x,w),this.b,null)},
$S:z+9}
C.cig.prototype={
$0(){return this.a.bb1(this.b)},
$S:0}
C.cil.prototype={
$0(){this.a.PJ()
return null},
$S:0}
C.ci8.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.ci9.prototype={
$0(){C.SI(this.a,$.b65)
return null},
$S:0}
C.cia.prototype={
$3(d,e,f){return A.h2(new C.ci7(this.a,e))},
$S:z+10}
C.ci7.prototype={
$2(d,e){var x,w=null,v=B.i.aP(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.cq(A.A(A.a([A.d(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.ao,new C.aF3(v,t.a.c,t.e,t.d,new C.ci4(t),new C.ci5(t),new C.ci6(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v5,w,w,B.X),w,w,w)},
$S:1469}
C.ci4.prototype={
$0(){var x=this.a.c
x.toString
C.SI(x,$.b65)
return null},
$S:0}
C.ci5.prototype={
$1(d){var x=this.a
return x.n(new C.ci3(x,d))},
$S:35}
C.ci3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ci6.prototype={
$0(){var x=this.a
return x.n(new C.ci2(x))},
$S:0}
C.ci2.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cu2.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cu3.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckL.prototype={
$3(d,e,f){return new C.AZ(this.a.c,null)},
$S:z+11}
C.ckM.prototype={
$3(d,e,f){if(f==null)return e
return new A.b9(B.al,null,B.cE,B.m,A.a([new C.AZ(this.a.c,null),D.a9Z],y.p),null)},
$C:"$3",
$R:3,
$S:478}
C.cir.prototype={
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
x.ahP(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h6(w,"load",new C.cip(x),!1,v)
w=x.e
w.toString
A.h6(w,"error",new C.ciq(x),!1,v)
x=x.e
x.toString
return x},
$S:1470}
C.cip.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cio(x))},
$S:39}
C.cio.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ciq.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cin(x))},
$S:39}
C.cin.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cim.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJD.prototype={
$1(d){var x=new A.Az([],[]).ED(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1471};(function aliases(){var x=C.aci.prototype
x.aMG=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7J.prototype,"gap4","b8A",1)
x(v,"gb98","b99",1)
x(v,"gbbw","bbx",6)
w(C,"dC1","d02",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uZ,[C.cMZ,C.cMY,C.b6g,C.b6h,C.b68,C.b69,C.b6a,C.b6b,C.b6c,C.b6d,C.b6e,C.b6f,C.b67,C.b66,C.cif,C.cik,C.cii,C.cia,C.ci5,C.ckL,C.ckM,C.cir,C.cip,C.ciq,C.cJD])
w(A.Ue,[C.cMU,C.cMV,C.cMW,C.cMX,C.cie,C.cid,C.cib,C.cic,C.cij,C.cig,C.cil,C.ci8,C.ci9,C.ci4,C.ci3,C.ci6,C.ci2,C.cu2,C.cu3,C.cio,C.cin,C.cim])
w(A.aD,[C.I9,C.Qp,C.axS,C.aF3,C.aF4,C.ayU,C.aF2,C.aA_,C.aus,C.aA3,C.AZ])
w(A.ai,[C.mh,C.o7])
w(A.ad,[C.Fc,C.Fb,C.a_2,C.Fd])
w(A.ae,[C.a7J,C.ayN,C.aci,C.ayP])
w(A.Uf,[C.cih,C.ci7])
v(C.Fg,A.avh)
v(C.ayO,C.aci)
x(C.aci,A.dN)})()
A.d3j(b.typeUniverse,JSON.parse('{"Fc":{"ad":[],"p":[]},"Qp":{"aD":[],"p":[]},"Fb":{"ad":[],"p":[]},"I9":{"aD":[],"p":[]},"a7J":{"ae":["Fc"]},"axS":{"aD":[],"p":[]},"ayN":{"ae":["Fb"]},"aF3":{"aD":[],"p":[]},"aF4":{"aD":[],"p":[]},"ayU":{"aD":[],"p":[]},"aF2":{"aD":[],"p":[]},"aA_":{"aD":[],"p":[]},"aus":{"aD":[],"p":[]},"a_2":{"ad":[],"p":[]},"AZ":{"aD":[],"p":[]},"ayO":{"ae":["a_2"]},"aA3":{"aD":[],"p":[]},"Fd":{"ad":[],"p":[]},"ayP":{"ae":["Fd"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<C>"),e:x("af<mh>"),s:x("af<m>"),p:x("af<p>"),t:x("af<P>"),X:x("a9<mh>"),a:x("a9<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("me"),_:x("z2"),k:x("mh"),N:x("m"),Y:x("bw<aa>"),W:x("dD<m>"),J:x("hX<P>"),j:x("hX<o7?>"),E:x("wV<ct>"),q:x("R4"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a6g=new A.aJ(B.O,1.6,B.o,-1)
D.bmI=new A.an(18,18,B.Ik,null)
D.a9Z=new A.dw(B.M,null,null,D.bmI,null)
D.Oc=new A.O(983224,"MaterialIcons",!1)
D.au1=new A.a6(D.Oc,48,B.ba,null,null,null)
D.bsO=new A.I(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCO=new A.y("Powered off",null,D.bsO,null,null,null,null,null,null,null,null)
D.aGj=x([D.au1,B.x,D.bCO],y.p)
D.agk=new A.eU(B.X,B.e,B.P,B.j,null,B.k,null,0,D.aGj,null)
D.aa5=new A.dw(B.M,null,null,D.agk,null)
D.aaw=new A.hN(2,null,null,null,null,B.U,null,null,null,null)
D.ad2=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.ady=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.af6=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.aiK=new A.U(0,3,0,3)
D.aiY=new A.U(10,0,10,88)
D.ajh=new A.U(12,6,12,10)
D.ajv=new A.U(14,8,14,6)
D.ak0=new A.U(18,12,18,12)
D.aku=new A.U(20,18,20,8)
D.akA=new A.U(20,8,20,20)
D.LH=new A.U(8,6,15,8)
D.apX=new A.O(983222,"MaterialIcons",!1)
D.arv=new A.a6(B.ht,26,B.O,null,null,null)
D.arz=new A.a6(B.Nf,18,null,null,null,null)
D.arP=new A.a6(B.qM,14,B.U,null,null,null)
D.aqd=new A.O(983420,"MaterialIcons",!1)
D.asB=new A.a6(D.aqd,14,B.U,null,null,null)
D.aoJ=new A.O(62895,"MaterialIcons",!1)
D.asF=new A.a6(D.aoJ,14,B.U,null,null,null)
D.avp=new A.a6(B.m4,20,null,null,null,null)
D.avF=new A.a6(B.f1,16,null,null,null,null)
D.aIj=x([B.aj,B.Z],y.O)
D.Pv=new A.aw(B.ar,B.ay,B.C,D.aIj,null,null)
D.bgH=new A.aN("NGMY OS","14.2.1")
D.bfS=new A.aN("VirtualDroid","13.8.4")
D.bfR=new A.aN("NGMY OS","15.0.0")
D.bgo=new A.aN("VirtualDroid","14.1.2")
D.bfQ=new A.aN("NGMY Tab OS","12.9.7")
D.bfP=new A.aN("NGMY OS","13.5.3")
D.bfG=new A.aN("VirtualDroid","15.2.0")
D.bg6=new A.aN("NGMY OS","14.8.1")
D.bgt=new A.aN("NGMY Tab OS","13.2.4")
D.bgQ=new A.aN("VirtualDroid","12.6.9")
D.bfD=new A.aN("NGMY OS","16.0.1")
D.bfv=new A.aN("VirtualDroid","14.9.0")
D.bgB=new A.aN("NGMY Tab OS","14.0.3")
D.bfY=new A.aN("NGMY OS","13.1.8")
D.bfC=new A.aN("VirtualDroid","13.4.5")
D.bfO=new A.aN("NGMY OS","15.3.2")
D.bgu=new A.aN("NGMY Tab OS","12.4.1")
D.bgD=new A.aN("VirtualDroid","16.1.0")
D.bg5=new A.aN("NGMY OS","14.4.6")
D.bgI=new A.aN("VirtualDroid","15.0.8")
D.aHW=x([D.bgH,D.bfS,D.bfR,D.bgo,D.bfQ,D.bfP,D.bfG,D.bg6,D.bgt,D.bgQ,D.bfD,D.bfv,D.bgB,D.bfY,D.bfC,D.bfO,D.bgu,D.bgD,D.bg5,D.bgI],A.bm("af<+(m,m)>"))
D.biR=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bip=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bik=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bit=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.big=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.biv=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.biT=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bih=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bio=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bix=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bif=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.biL=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.biI=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bin=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.biF=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.biE=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bie=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bis=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.biC=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.biH=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qw=x([D.biR,D.bip,D.bik,D.bit,D.big,D.biv,D.biT,D.bih,D.bio,D.bix,D.bif,D.biL,D.biI,D.bin,D.biF,D.biE,D.bie,D.bis,D.biC,D.biH],A.bm("af<+(m,m,aa,aa,m)>"))
D.aMT=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.Xi=new C.Fg(0,"youtube")
D.Xj=new C.Fg(1,"tiktok")
D.Eq=new C.Fg(2,"instagram")
D.Xk=new C.Fg(3,"facebook")
D.bbw=new C.Fg(4,"other")
D.bml=new A.an(3,null,null,null)
D.bmZ=new A.iN(4,10,8,0.52,null)
D.bDH=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpX=new A.aP(D.bDH,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bt8=new A.I(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC6=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bEa=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHT=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bId=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bR8=new C.aA_(null)})();(function staticFields(){$.d01=20
$.amq=null
$.b65=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGb","xP",()=>A.Pe(0))
x($,"dGc","JL",()=>A.Pe(null))})()};
(a=>{a["y+b67kvmAnvXz1ao2G3YnSTwRgs="]=a.current})($__dart_deferred_initializers__);