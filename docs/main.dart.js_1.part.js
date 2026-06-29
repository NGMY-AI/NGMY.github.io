((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCG(d,e){A.a9(d,!1).cM(A.eq(new C.cMD(e),!0,null,y.H))},
SC(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SC=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JI()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ag(new A.aM(o,B.a0,B.X),u)
x=3
return A.b(A.dg(B.B,null,new C.cMC(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SC)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dla(s)
if(r==null){d.E(y.q).f.O(D.bpl)
x=1
break}x=4
return A.b(A.bS(B.fl,null,y.H),$async$SC)
case 4:if(d.e==null){x=1
break}o=B.p.aP(e,1,999)
$.d_E=o
q=C.dl5(o)
o=$.xQ()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQa(r)
d.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SC,w)},
d_H(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fe(d){return C.dld(d)},
dld(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
l=A.eg(l,new C.b6d(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6e(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_I(r)
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
case 19:n=C.d_H(A.K(o,y.N,y.z))
m=C.d_I(A.a([n],y.e))
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
case 18:case 14:r=C.dlb()
x=22
return A.b(C.Fd(a2,r),$async$Fe)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fe,w)},
d_I(d){var x=A.R(d).k("z<1,m>"),w=new A.z(d,new C.b65(),x).eu(0),v=new A.z(d,new C.b66(),x).eu(0),u=new A.z(d,new C.b67(),x).eu(0),t=new A.z(d,new C.b68(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQb(null,r,v,u,w,t));++r}return s},
amn(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amn=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(d),$async$amn)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b69(),t).eu(0)
q=s.df(u,new C.b6a(),t).eu(0)
p=s.df(u,new C.b6b(),t).eu(0)
o=s.df(u,new C.b6c(),t).eu(0)
n=C.cQb(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fd(d,u),$async$amn)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amn,w)},
Fd(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fd=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$Fd)
case 2:v=g
u=B.a.j(d)
t=J.b5(e,new C.b64(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fd)
case 3:return A.f(null,w)}})
return A.h($async$Fd,w)},
dlb(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.dX(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQb(x,x,u,t,v,s)
return r},
cQb(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jX(),i=d==null,h=D.Qj[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qj[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bD(256)
o=new A.z(q,new C.b63(),A.R(q).k("z<1,m>")).f9(0)
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
l=D.aMl[x]
k=D.aHq[x]
return new C.mh("vd_"+1000*Date.now()+"_"+e+"_"+j.bD(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dlc(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dlc(d,e){var x,w=J.dX(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kP(d.bD(256),16),2,"0")
return B.d.f9(w)},
cMD:function cMD(d){this.a=d},
cMC:function cMC(d,e){this.a=d
this.b=e},
cMy:function cMy(d){this.a=d},
cMz:function cMz(d){this.a=d},
cMA:function cMA(d){this.a=d},
cMB:function cMB(d,e){this.a=d
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
b6d:function b6d(){},
b6e:function b6e(){},
b65:function b65(){},
b66:function b66(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(){},
b6c:function b6c(){},
b64:function b64(){},
b63:function b63(){},
Fb:function Fb(d,e){this.c=d
this.a=e},
a7E:function a7E(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cia:function cia(){},
ci9:function ci9(d,e){this.a=d
this.b=e},
ci7:function ci7(d){this.a=d},
ci8:function ci8(d,e){this.a=d
this.b=e},
cib:function cib(d){this.a=d},
cif:function cif(d){this.a=d},
cig:function cig(d,e){this.a=d
this.b=e},
cie:function cie(d,e,f){this.a=d
this.b=e
this.c=f},
cid:function cid(d,e){this.a=d
this.b=e},
cic:function cic(d,e){this.a=d
this.b=e},
cih:function cih(d){this.a=d},
Qj:function Qj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axO:function axO(d,e){this.c=d
this.a=e},
Fa:function Fa(d,e){this.c=d
this.a=e},
ayJ:function ayJ(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ci4:function ci4(d){this.a=d},
ci5:function ci5(d){this.a=d},
ci6:function ci6(d){this.a=d},
ci3:function ci3(d,e){this.a=d
this.b=e},
ci0:function ci0(d){this.a=d},
ci1:function ci1(d){this.a=d},
ci_:function ci_(d,e){this.a=d
this.b=e},
ci2:function ci2(d){this.a=d},
chZ:function chZ(d){this.a=d},
aF_:function aF_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aF0:function aF0(d,e,f){this.c=d
this.d=e
this.a=f},
ayQ:function ayQ(d,e){this.c=d
this.a=e},
aEZ:function aEZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctJ:function ctJ(d){this.a=d},
ctK:function ctK(d){this.a=d},
azW:function azW(d){this.a=d},
auo:function auo(d,e){this.c=d
this.a=e},
dla(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o6(x,C.b61(u,!1),D.X4,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dl9(w)
if(t!=null)return new C.o6(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X5,"TikTok",q,q)
s=C.dl8(x,w)
if(s!=null)return s
r=C.dl7(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o6(x,x,D.baY,"Video",q,q)
return q},
dl8(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/reel/"+x+u,D.Ej,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/p/"+x+u,D.Ej,t,v,v)}return v},
dl7(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o6(d,"https://www.facebook.com/plugins/video.php?href="+A.f7(2,d,B.aL,!1)+"&show_text=false&width=734",D.X6,"Facebook",null,null)},
dl9(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Ff:function Ff(d,e){this.a=d
this.b=e},
o6:function o6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZY:function ZY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayK:function ayK(d,e){var _=this
_.d=$
_.cz$=d
_.aM$=e
_.c=_.a=null},
aA_:function aA_(d,e){this.c=d
this.a=e},
ckH:function ckH(d){this.a=d},
ckI:function ckI(d){this.a=d},
B_:function B_(d,e){this.c=d
this.a=e},
acb:function acb(){},
dBv(d){var x=window
x.toString
A.h5(x,"message",new C.cJj(d),!1,y._)},
Fc:function Fc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayL:function ayL(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
cin:function cin(d){this.a=d},
cil:function cil(d){this.a=d},
cik:function cik(d){this.a=d},
cim:function cim(d){this.a=d},
cij:function cij(d){this.a=d},
cii:function cii(d){this.a=d},
cJj:function cJj(d){this.a=d},
b61(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_B(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d_C(d){var x=A.bA(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bA(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_D(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dl4(d,e,f){var x=C.d_B(d)
if(x!=null){if(f)return C.d_D(x,e,!0)
return C.d_C(C.b61(x,e))}return C.d_C(d)},
dl5(d){if(d<=4)return 0
return B.p.aT(d-1,4)*4},
dl6(d){var x
if($.JI().a==null)return!1
x=$.xQ().a
return d>=x&&d<x+4},
d_G(){var x=$.amm
if(x!=null)x.aa(0)
$.amm=null
$.xQ().sv(0,0)},
d_F(){var x,w,v,u=$.JI()
if(u.a==null)return
x=$.amm
if(x!=null)x.aa(0)
w=$.d_E
if(w<=4){u=u.a
u.toString
C.cQa(u)
return}x=$.xQ()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQa(u)},
cQa(d){var x=$.amm
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
default:x=null}$.amm=A.dq(A.dc(0,0,0,0,x),C.dBG())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I8.prototype={
C(d){var x=null,w=this.e,v=w?B.ai:B.c,u=A.n(20),t=A.W(B.O.t(0.25),B.n,1),s=A.a3(this.d,B.O,x,x,14)
return A.x(x,A.G(A.a([s,B.ej,A.j(this.c,x,x,x,x,A.l(x,x,w?B.T:B.dS,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.u(v,x,t,u,x,x,B.l),x,x,x,B.fG,x,x,x)}}
C.mh.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fb.prototype={
T(){return new C.a7E(A.a([],y.e))},
git(){return this.c}}
C.a7E.prototype={
Z(){var x=this
x.a5()
$.xQ().af(0,x.gaoX())
C.dBv(x.gb8N())
x.PZ()},
b8e(){if(this.c!=null)this.n(new C.cia())},
b8O(){C.d_F()},
l(){$.xQ().V(0,this.gaoX())
C.d_G()
$.JI().sv(0,null)
this.a3()},
PZ(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PZ=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(u.a.c),$async$PZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ci9(u,t))
$.b62=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PZ,w)},
PI(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PI=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.ci7(u))
x=3
return A.b(C.amn(u.a.c),$async$PI)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ci8(u,t))
$.b62=J.a5(u.d)
u.c.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PI,w)},
baG(d){var x=this.c
x.toString
A.a9(x,!1).cM(A.eq(new C.cib(d),!1,null,y.H))},
bbb(){var x=this.c
x.toString
return C.SC(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.R,u=v?B.du:B.db,t=A.aU(w,w,w,w,B.CE,w,w,w,new C.cif(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zB(A.G(A.a([A.I(new A.M(B.i2,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.N,!0,w,A.aZ(!1,w,!0,new A.M(B.aG,A.a3(B.f2,B.O,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbba(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Lu,s,w),A.I(x.e?B.jk:new A.hY($.JI(),new C.cig(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahs(B.O,B.yN,B.o3,D.bDw,x.e?w:new C.cih(x)),w)}}
C.Qj.prototype={
b6n(d){var x,w=$.xQ().a,v=this.d
if(C.dl6(v)){v=this.c.a
x=d.gaBD()
return new C.Fc(v+"_mini",d.gaBD(),!0,d.gae8(),!1,new A.dC(v+"_"+x+"_"+A.o(w),y.W))}return new C.ZY(d,!0,!0,"Fold "+(B.p.aT(v,4)+1)+"/"+B.p.aT(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.n,1),s=A.a([new A.af(0,B.w,B.O.t(0.18),B.cd,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aT(!1,B.N,!0,w,A.aZ(!1,v,!0,A.B(A.a([A.I(A.x(w,A.cV(r,A.jt(A.B(A.a([new C.axO(q,w),A.I(p!=null?x.b6n(p):A.x(w,A.B(A.a([A.a3(B.hu,B.ly,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.aq,B.f,0,B.k),B.h,B.u0,w,w,w,w,w,w,w,w,1/0),1),A.x(w,A.G(A.a([A.a3(B.vQ,B.O.t(0.85),w,w,9),D.blM,A.j("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.aq,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aie,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.u(w,w,t,u,s,D.Pj,B.l),w,w,w,B.eJ,w,w,w),1),B.ak,A.j(q.b,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.O.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axO.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a3(B.qL,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lj,x,x,x)}}
C.Fa.prototype={
T(){return new C.ayJ()}}
C.ayJ.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.R,v=w?B.du:B.db,u=A.aU(x,x,x,x,B.CE,x,x,x,new C.ci4(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cX(!0,A.B(A.a([new A.M(D.Lu,A.G(A.a([u,A.I(new A.zB(A.G(A.a([A.I(new A.M(B.i2,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aT(!1,B.N,!0,x,A.aZ(!1,x,!0,new A.M(B.aG,A.a3(B.f2,B.O,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.ci5(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hY($.JI(),new C.ci6(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aF_.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.af(0,B.w,B.O.t(0.35),B.ev,28),new A.af(0,B.w,B.q.t(0.45),B.cP,18)],y.V),p=A.W(B.c.t(0.12),B.n,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fc(w+"_full",v,!1,x.gae8(),!1,new A.dC(w+"_full_"+v,y.W))
x=v}else x=new C.ayQ(u.r,t)}else x=new C.auo(n,t)
else x=D.bQv
return A.x(t,A.cV(o,A.jt(A.B(A.a([new C.aF0(n,m,t),A.I(x,1),new C.aEZ(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.u(t,t,p,r,q,D.Pj,B.l),t,s*2.05,t,B.bd,t,t,s)}}
C.aF0.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hW(s)
x=new A.db(r,s)
w=x.gFk()===0?12:x.gFk()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.ep:B.fZ)===B.ep?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l5,t,t,t),B.b8,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.as6,B.dP,D.ark,B.dP,D.asa],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a3(B.Cy,B.O.t(0.9),t,t,12),B.dP,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aj1,t,t,t)}}
C.ayQ.prototype={
C(d){var x=null
return A.x(x,A.b3(A.B(A.a([A.a3(B.vF,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.eH(D.av9,D.bBt,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.O,x,x,x,x,x,new A.aK(B.O.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u0,x,x,x,x,x,x,x,x,1/0)}}
C.aEZ.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoR(B.NZ,"YouTube",t===0,s,new C.ctJ(v))
t=v.aoR(B.i6,"Device",t===1,s,new C.ctK(v))
x=s?"Power off":"Power on"
w=s?D.O_:D.apt
return A.x(u,A.G(A.a([r,B.Y,t,B.b8,A.aU(u,u,u,u,A.a3(w,s?B.aH:B.dx,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dr)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiM,u,u,u)},
aoR(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.O:B.aa
w=f&&g?B.O.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aT(!1,B.N,!0,v,A.aZ(!1,A.n(10),!0,new A.M(B.jw,A.B(A.a([A.a3(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azW.prototype={
C(d){return D.a9P}}
C.auo.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l2,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pX(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.j(e,x,x,x,x,D.bsw,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Ff.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o6.prototype={
gaBD(){var x=this.f
if(x!=null&&x.length!==0)return C.b61(x,!0)
return this.b},
gae8(){var x=this.c
return x===D.X4||x===D.X5||x===D.Ej||x===D.X6}}
C.ZY.prototype={
T(){return new C.ayK(null,null)}}
C.ayK.prototype={
Z(){this.a5()
var x=A.bD(null,B.q2,null,1,null,this)
x.kM(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMt()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fc(v,new A.u(v,v,v,v,v,new A.aw(B.d3,B.bX,B.C,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.ho,r,v)
x=B.c.t(0.92)
s=A.b3(new A.dT(new A.bg(r,new A.bv(0.72,1,s),s.k("bg<bp.T>")),!1,A.a3(B.hu,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.aA_(u,v),t,s,A.bt(v,A.x(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bt(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bt(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.ba(B.am,v,B.cE,B.m,u,v)}}
C.aA_.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k8(v,new C.ckH(this),B.bn,!0,x,x,new C.ckI(this),x)
return new C.B_(w,x)}}
C.B_.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.ua,B.Iu],y.O),B.hu)
break
case 1:x=new A.aN(A.a([B.u0,D.adc],y.O),B.iP)
break
case 2:x=new A.aN(A.a([D.aeD,D.acH],y.O),B.vI)
break
case 3:x=new A.aN(A.a([B.Z,B.dK],y.O),B.Ca)
break
case 4:x=new A.aN(A.a([B.a8,B.ai],y.O),B.m7)
break
default:x=v}w=x.a
return A.x(v,A.b3(A.a3(x.b,B.O.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.aw(B.ar,B.ay,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acb.prototype={
l(){var x=this,w=x.aM$
if(w!=null)w.V(0,x.gda())
x.aM$=null
x.a3()},
bn(){this.bA()
this.by()
this.dc()}}
C.Fc.prototype={
T(){return new C.ayL()}}
C.ayL.prototype={
ahI(d,e){var x,w,v=this,u="mute=1",t=C.d_B(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_D(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b61(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dl4(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aR()
v.d=x
try{$.JJ()
$.oE().u_(x,new C.cin(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cii(w))
x=w.e
x.toString
w.ahI(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jt(A.b3(A.a3(B.O9,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai4(u,B.rw,x)],y.p)
if(v.f)x.push(A.jt(A.b3(new A.ao(w,w,D.aaf,u),u,u,u),B.bU,!0))
return new A.ba(B.am,u,B.cE,B.m,x,u)}}
var z=a.updateTypes(["m(mh)","~()","Fb(S)","mh(Y<@,@>)","a0(mh)","Y<m,@>(mh)","at<~>()","Fa(S)","hY<P>(S,o6?,p?)","Qj(S,P)","tg(S,o6?,p?)","B_(S,ai,di?)"])
C.cMD.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+2}
C.cMC.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.R,m=A.az(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cr,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.af(0,B.w,B.O.t(0.22),B.ev,32)],y.V),h=A.W(n?B.bj:B.O.t(0.18),B.n,1),g=A.n(28),f=B.O.t(n?0.35:0.14)
k=A.a([f,B.Q.t(n?0.18:0.08)],k)
f=A.x(o,D.ar0,B.h,o,o,new A.u(B.O.t(0.18),o,A.W(B.O.t(0.45),B.n,1),o,o,o,B.ah),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.B(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.T:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.x(o,A.G(A.a([f,B.fP,x,A.aU(o,o,o,o,A.a3(B.cH,n?B.aa:B.bU,o,o,o),o,o,o,new C.cMy(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(o,o,o,o,o,new A.aw(B.a2,B.a5,B.C,k,o,o),B.l),o,o,o,B.L3,o,o,o)
f=A.eS(B.c9,A.a([new C.I8("YouTube",B.Cx,n,o),new C.I8("TikTok",B.iP,n,o),new C.I8("Instagram",B.vI,n,o),new C.I8("Facebook",B.Ca,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bA:B.fj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.ai:B.db
s=A.a3(B.jF,B.O.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bj:B.b6
v=A.B(A.a([f,B.ap,A.au(o,B.G,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bh(o,new A.b4(4,r,B.I),o,o,o,o,o,o,!0,new A.b4(4,q,new A.aK(p,1,B.n,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b4(4,A.n(16),D.a61),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.L,o,o,o,o)],w),B.ad,B.e,B.f,0,B.k)
f=A.iP(D.ar4,D.bHe,new C.cMz(d),A.jN(o,o,o,o,o,o,o,o,o,o,o,n?B.aD:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.M(new A.U(12,0,12,12+m.f.d),A.fc(A.cV(g,A.B(A.a([k,new A.M(D.ak_,v,o),new A.M(D.ak5,A.G(A.a([f,B.b8,A.bY(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.T:B.U,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cMA(d),o,o),B.Y,A.dN(D.auU,D.bHz,new C.cMB(d,x),A.bw(B.O,o,o,o,B.c,o,D.ajw,o,new A.bs(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ad,B.e,B.P,0,B.k),B.au),new A.u(o,o,h,l,i,new A.aw(B.ar,B.ay,B.C,j,o,o),B.l),B.ch),o)},
$S:65}
C.cMy.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cMz.prototype={
$0(){C.d_G()
$.JI().sv(0,null)
A.a9(this.a,!1).S(null)},
$S:0}
C.cMA.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cMB.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a9(this.a,!1).S(x)
return null},
$S:0}
C.b6d.prototype={
$1(d){return C.d_H(A.K(d,y.N,y.z))},
$S:z+3}
C.b6e.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b65.prototype={
$1(d){return d.c},
$S:z+0}
C.b66.prototype={
$1(d){return d.r},
$S:z+0}
C.b67.prototype={
$1(d){return d.f},
$S:z+0}
C.b68.prototype={
$1(d){return d.at},
$S:z+0}
C.b69.prototype={
$1(d){return d.c},
$S:z+0}
C.b6a.prototype={
$1(d){return d.r},
$S:z+0}
C.b6b.prototype={
$1(d){return d.f},
$S:z+0}
C.b6c.prototype={
$1(d){return d.at},
$S:z+0}
C.b64.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b63.prototype={
$1(d){return B.a.bz(B.p.kP(d,16),2,"0").toUpperCase()},
$S:73}
C.cia.prototype={
$0(){},
$S:0}
C.ci9.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.ci7.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ci8.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cib.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+7}
C.cif.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cig.prototype={
$3(d,e,f){return new A.hY($.xQ(),new C.cie(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cie.prototype={
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
u=A.a([A.x(l,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cF,B.er,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cV(t,new A.iY(1.7777777777777777,new C.Fc("fleet_master",s,!1,k.gae8(),!0,new A.dC("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a5(t)+".":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yi(0,B.m,l,B.r,l,l,l,l,!1,l,B.W,!1,A.a([new A.jK(new A.M(B.AF,A.B(v,B.t,B.e,B.f,0,B.k),l),l),new A.og(D.ais,A.apT(new A.ng(new C.cid(u,k),J.a5(u.d),!1,!0,!0,A.uG(),l),D.bmo),l)],x))},
$S:1466}
C.cid.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qj(w,e,J.a5(x.d),new C.cic(x,w),this.b,null)},
$S:z+9}
C.cic.prototype={
$0(){return this.a.baG(this.b)},
$S:0}
C.cih.prototype={
$0(){this.a.PI()
return null},
$S:0}
C.ci4.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.ci5.prototype={
$0(){C.SC(this.a,$.b62)
return null},
$S:0}
C.ci6.prototype={
$3(d,e,f){return A.h1(new C.ci3(this.a,e))},
$S:z+10}
C.ci3.prototype={
$2(d,e){var x,w=null,v=B.i.aP(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b3(A.ct(A.B(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.ap,new C.aF_(v,t.a.c,t.e,t.d,new C.ci0(t),new C.ci1(t),new C.ci2(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v1,w,w,B.W),w,w,w)},
$S:1467}
C.ci0.prototype={
$0(){var x=this.a.c
x.toString
C.SC(x,$.b62)
return null},
$S:0}
C.ci1.prototype={
$1(d){var x=this.a
return x.n(new C.ci_(x,d))},
$S:34}
C.ci_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ci2.prototype={
$0(){var x=this.a
return x.n(new C.chZ(x))},
$S:0}
C.chZ.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctJ.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctK.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckH.prototype={
$3(d,e,f){return new C.B_(this.a.c,null)},
$S:z+11}
C.ckI.prototype={
$3(d,e,f){if(f==null)return e
return new A.ba(B.am,null,B.cE,B.m,A.a([new C.B_(this.a.c,null),D.a9I],y.p),null)},
$C:"$3",
$R:3,
$S:432}
C.cin.prototype={
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
x.ahI(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h5(w,"load",new C.cil(x),!1,v)
w=x.e
w.toString
A.h5(w,"error",new C.cim(x),!1,v)
x=x.e
x.toString
return x},
$S:1468}
C.cil.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cik(x))},
$S:39}
C.cik.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cim.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cij(x))},
$S:39}
C.cij.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cii.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJj.prototype={
$1(d){var x=new A.AA([],[]).EC(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1469};(function aliases(){var x=C.acb.prototype
x.aMt=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7E.prototype,"gaoX","b8e",1)
x(v,"gb8N","b8O",1)
x(v,"gbba","bbb",6)
w(C,"dBG","d_F",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uY,[C.cMD,C.cMC,C.b6d,C.b6e,C.b65,C.b66,C.b67,C.b68,C.b69,C.b6a,C.b6b,C.b6c,C.b64,C.b63,C.cib,C.cig,C.cie,C.ci6,C.ci1,C.ckH,C.ckI,C.cin,C.cil,C.cim,C.cJj])
w(A.U8,[C.cMy,C.cMz,C.cMA,C.cMB,C.cia,C.ci9,C.ci7,C.ci8,C.cif,C.cic,C.cih,C.ci4,C.ci5,C.ci0,C.ci_,C.ci2,C.chZ,C.ctJ,C.ctK,C.cik,C.cij,C.cii])
w(A.aD,[C.I8,C.Qj,C.axO,C.aF_,C.aF0,C.ayQ,C.aEZ,C.azW,C.auo,C.aA_,C.B_])
w(A.ai,[C.mh,C.o6])
w(A.ac,[C.Fb,C.Fa,C.ZY,C.Fc])
w(A.ad,[C.a7E,C.ayJ,C.acb,C.ayL])
w(A.U9,[C.cid,C.ci3])
v(C.Ff,A.avd)
v(C.ayK,C.acb)
x(C.acb,A.dM)})()
A.d2W(b.typeUniverse,JSON.parse('{"Fb":{"ac":[],"p":[]},"Qj":{"aD":[],"p":[]},"Fa":{"ac":[],"p":[]},"I8":{"aD":[],"p":[]},"a7E":{"ad":["Fb"]},"axO":{"aD":[],"p":[]},"ayJ":{"ad":["Fa"]},"aF_":{"aD":[],"p":[]},"aF0":{"aD":[],"p":[]},"ayQ":{"aD":[],"p":[]},"aEZ":{"aD":[],"p":[]},"azW":{"aD":[],"p":[]},"auo":{"aD":[],"p":[]},"ZY":{"ac":[],"p":[]},"B_":{"aD":[],"p":[]},"ayK":{"ad":["ZY"]},"aA_":{"aD":[],"p":[]},"Fc":{"ac":[],"p":[]},"ayL":{"ad":["Fc"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<af>"),O:x("ae<C>"),e:x("ae<mh>"),s:x("ae<m>"),p:x("ae<p>"),t:x("ae<P>"),X:x("a8<mh>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("me"),_:x("z3"),k:x("mh"),N:x("m"),Y:x("bv<aa>"),W:x("dC<m>"),J:x("hY<P>"),j:x("hY<o6?>"),E:x("wW<cr>"),q:x("R_"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a61=new A.aK(B.O,1.6,B.n,-1)
D.bm7=new A.ao(18,18,B.If,null)
D.a9I=new A.dw(B.M,null,null,D.bm7,null)
D.O_=new A.O(983224,"MaterialIcons",!1)
D.atx=new A.a6(D.O_,48,B.bb,null,null,null)
D.bsb=new A.H(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCa=new A.y("Powered off",null,D.bsb,null,null,null,null,null,null,null,null)
D.aFP=x([D.atx,B.y,D.bCa],y.p)
D.afP=new A.eU(B.W,B.e,B.P,B.j,null,B.k,null,0,D.aFP,null)
D.a9P=new A.dw(B.M,null,null,D.afP,null)
D.aaf=new A.hO(2,null,null,null,null,B.T,null,null,null,null)
D.acH=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.adc=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.aeD=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.aie=new A.U(0,3,0,3)
D.ais=new A.U(10,0,10,88)
D.aiM=new A.U(12,6,12,10)
D.aj1=new A.U(14,8,14,6)
D.ajw=new A.U(18,12,18,12)
D.ak_=new A.U(20,18,20,8)
D.ak5=new A.U(20,8,20,20)
D.Lu=new A.U(8,6,15,8)
D.apt=new A.O(983222,"MaterialIcons",!1)
D.ar0=new A.a6(B.hu,26,B.O,null,null,null)
D.ar4=new A.a6(B.N3,18,null,null,null,null)
D.ark=new A.a6(B.qL,14,B.T,null,null,null)
D.apK=new A.O(983420,"MaterialIcons",!1)
D.as6=new A.a6(D.apK,14,B.T,null,null,null)
D.aod=new A.O(62895,"MaterialIcons",!1)
D.asa=new A.a6(D.aod,14,B.T,null,null,null)
D.auU=new A.a6(B.m4,20,null,null,null,null)
D.av9=new A.a6(B.f2,16,null,null,null,null)
D.aHN=x([B.ai,B.Z],y.O)
D.Pj=new A.aw(B.ar,B.ay,B.C,D.aHN,null,null)
D.bg4=new A.aN("NGMY OS","14.2.1")
D.bff=new A.aN("VirtualDroid","13.8.4")
D.bfe=new A.aN("NGMY OS","15.0.0")
D.bfM=new A.aN("VirtualDroid","14.1.2")
D.bfd=new A.aN("NGMY Tab OS","12.9.7")
D.bfc=new A.aN("NGMY OS","13.5.3")
D.bf3=new A.aN("VirtualDroid","15.2.0")
D.bfu=new A.aN("NGMY OS","14.8.1")
D.bfR=new A.aN("NGMY Tab OS","13.2.4")
D.bgd=new A.aN("VirtualDroid","12.6.9")
D.bf0=new A.aN("NGMY OS","16.0.1")
D.beT=new A.aN("VirtualDroid","14.9.0")
D.bfZ=new A.aN("NGMY Tab OS","14.0.3")
D.bfl=new A.aN("NGMY OS","13.1.8")
D.bf_=new A.aN("VirtualDroid","13.4.5")
D.bfb=new A.aN("NGMY OS","15.3.2")
D.bfS=new A.aN("NGMY Tab OS","12.4.1")
D.bg0=new A.aN("VirtualDroid","16.1.0")
D.bft=new A.aN("NGMY OS","14.4.6")
D.bg5=new A.aN("VirtualDroid","15.0.8")
D.aHq=x([D.bg4,D.bff,D.bfe,D.bfM,D.bfd,D.bfc,D.bf3,D.bfu,D.bfR,D.bgd,D.bf0,D.beT,D.bfZ,D.bfl,D.bf_,D.bfb,D.bfS,D.bg0,D.bft,D.bg5],A.bm("ae<+(m,m)>"))
D.bie=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhN=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhI=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhR=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhE=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhT=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.big=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhF=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhM=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhV=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhD=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bi8=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bi5=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhL=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bi2=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bi1=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhC=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhQ=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bi_=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bi4=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qj=x([D.bie,D.bhN,D.bhI,D.bhR,D.bhE,D.bhT,D.big,D.bhF,D.bhM,D.bhV,D.bhD,D.bi8,D.bi5,D.bhL,D.bi2,D.bi1,D.bhC,D.bhQ,D.bi_,D.bi4],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aMl=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X4=new C.Ff(0,"youtube")
D.X5=new C.Ff(1,"tiktok")
D.Ej=new C.Ff(2,"instagram")
D.X6=new C.Ff(3,"facebook")
D.baY=new C.Ff(4,"other")
D.blM=new A.ao(3,null,null,null)
D.bmo=new A.iN(4,10,8,0.52,null)
D.bD3=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpl=new A.aP(D.bD3,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsw=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBt=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDw=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHe=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHz=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQv=new C.azW(null)})();(function staticFields(){$.d_E=20
$.amm=null
$.b62=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFO","xQ",()=>A.P8(0))
x($,"dFP","JI",()=>A.P8(null))})()};
(a=>{a["BJEYBQTnJuonYkjfG9irBwy5Sdw="]=a.current})($__dart_deferred_initializers__);