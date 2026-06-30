((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCJ(d,e){A.a8(d,!1).cM(A.ep(new C.cME(e),!0,null,y.H))},
SD(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SD=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JI()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.W),u)
x=3
return A.b(A.dg(B.B,null,new C.cMD(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SD)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dl8(s)
if(r==null){d.E(y.q).f.O(D.bpD)
x=1
break}x=4
return A.b(A.bR(B.fi,null,y.H),$async$SD)
case 4:if(d.e==null){x=1
break}o=B.p.aO(e,1,999)
$.d_H=o
q=C.dl3(o)
o=$.xP()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQb(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SD,w)},
d_K(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fe(d){return C.dlb(d)},
dlb(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fe=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Fe)
case 3:h=a4
g=B.a.i(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.u.aE(0,d,null)
x=y.a.b(s)&&J.cw(s)?10:11
break
case 10:l=J.ih(s,y.f)
l=A.ee(l,new C.b6c(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6d(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_L(r)
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
o=B.u.aE(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.d_K(A.K(o,y.N,y.z))
m=C.d_L(A.a([n],y.e))
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
case 18:case 14:r=C.dl9()
x=22
return A.b(C.Fd(a2,r),$async$Fe)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fe,w)},
d_L(d){var x=A.S(d).k("A<1,m>"),w=new A.A(d,new C.b64(),x).eu(0),v=new A.A(d,new C.b65(),x).eu(0),u=new A.A(d,new C.b66(),x).eu(0),t=new A.A(d,new C.b67(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQc(null,r,v,u,w,t));++r}return s},
amo(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amo=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(d),$async$amo)
case 3:u=f
t=y.N
s=J.ck(u)
r=s.dd(u,new C.b68(),t).eu(0)
q=s.dd(u,new C.b69(),t).eu(0)
p=s.dd(u,new C.b6a(),t).eu(0)
o=s.dd(u,new C.b6b(),t).eu(0)
n=C.cQc(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fd(d,u),$async$amo)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amo,w)},
Fd(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fd=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$Fd)
case 2:v=g
u=B.a.i(d)
t=J.b5(e,new C.b63(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.u.aj(t,null)),$async$Fd)
case 3:return A.f(null,w)}})
return A.h($async$Fd,w)},
dl9(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dX(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQc(x,x,u,t,v,s)
return r},
cQc(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jV(),i=d==null,h=D.Qj[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qj[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bB(256)
o=new A.A(q,new C.b62(),A.S(q).k("A<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bB(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bC(B.p.kO(j.bB(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aMC[x]
k=D.aHF[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bB(99999),"Device "+B.a.bC(B.p.q(e+1),2,"0"),v,l,C.dla(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dla(d,e){var x,w=J.dX(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bC(B.p.kO(d.bB(256),16),2,"0")
return B.d.f9(w)},
cME:function cME(d){this.a=d},
cMD:function cMD(d,e){this.a=d
this.b=e},
cMz:function cMz(d){this.a=d},
cMA:function cMA(d){this.a=d},
cMB:function cMB(d){this.a=d},
cMC:function cMC(d,e){this.a=d
this.b=e},
I8:function I8(d,e,f,g){var _=this
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
b6c:function b6c(){},
b6d:function b6d(){},
b64:function b64(){},
b65:function b65(){},
b66:function b66(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(){},
b63:function b63(){},
b62:function b62(){},
Fb:function Fb(d,e){this.c=d
this.a=e},
a7H:function a7H(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
chU:function chU(){},
chT:function chT(d,e){this.a=d
this.b=e},
chR:function chR(d){this.a=d},
chS:function chS(d,e){this.a=d
this.b=e},
chV:function chV(d){this.a=d},
chZ:function chZ(d){this.a=d},
ci_:function ci_(d,e){this.a=d
this.b=e},
chY:function chY(d,e,f){this.a=d
this.b=e
this.c=f},
chX:function chX(d,e){this.a=d
this.b=e},
chW:function chW(d,e){this.a=d
this.b=e},
ci0:function ci0(d){this.a=d},
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
chO:function chO(d){this.a=d},
chP:function chP(d){this.a=d},
chQ:function chQ(d){this.a=d},
chN:function chN(d,e){this.a=d
this.b=e},
chK:function chK(d){this.a=d},
chL:function chL(d){this.a=d},
chJ:function chJ(d,e){this.a=d
this.b=e},
chM:function chM(d){this.a=d},
chI:function chI(d){this.a=d},
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
ctI:function ctI(d){this.a=d},
ctJ:function ctJ(d){this.a=d},
azW:function azW(d){this.a=d},
aup:function aup(d,e){this.c=d
this.a=e},
dl8(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o4(x,C.b60(u,!1),D.X4,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dl7(w)
if(t!=null)return new C.o4(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X5,"TikTok",q,q)
s=C.dl6(x,w)
if(s!=null)return s
r=C.dl5(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o4(x,x,D.bbf,"Video",q,q)
return q},
dl6(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/reel/"+x+u,D.En,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/p/"+x+u,D.En,t,v,v)}return v},
dl5(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o4(d,"https://www.facebook.com/plugins/video.php?href="+A.f8(2,d,B.aK,!1)+"&show_text=false&width=734",D.X6,"Facebook",null,null)},
dl7(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Ff:function Ff(d,e){this.a=d
this.b=e},
o4:function o4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_1:function a_1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayK:function ayK(d,e){var _=this
_.d=$
_.cz$=d
_.aP$=e
_.c=_.a=null},
aA_:function aA_(d,e){this.c=d
this.a=e},
ckq:function ckq(d){this.a=d},
ckr:function ckr(d){this.a=d},
AZ:function AZ(d,e){this.c=d
this.a=e},
acf:function acf(){},
dBw(d){var x=window
x.toString
A.h5(x,"message",new C.cJi(d),!1,y._)},
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
ci6:function ci6(d){this.a=d},
ci4:function ci4(d){this.a=d},
ci3:function ci3(d){this.a=d},
ci5:function ci5(d){this.a=d},
ci2:function ci2(d){this.a=d},
ci1:function ci1(d){this.a=d},
cJi:function cJi(d){this.a=d},
b60(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_E(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d_F(d){var x=A.bz(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bz(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_G(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dl2(d,e,f){var x=C.d_E(d)
if(x!=null){if(f)return C.d_G(x,e,!0)
return C.d_F(C.b60(x,e))}return C.d_F(d)},
dl3(d){if(d<=4)return 0
return B.p.aX(d-1,4)*4},
dl4(d){var x
if($.JI().a==null)return!1
x=$.xP().a
return d>=x&&d<x+4},
d_J(){var x=$.amn
if(x!=null)x.aa(0)
$.amn=null
$.xP().sv(0,0)},
d_I(){var x,w,v,u=$.JI()
if(u.a==null)return
x=$.amn
if(x!=null)x.aa(0)
w=$.d_H
if(w<=4){u=u.a
u.toString
C.cQb(u)
return}x=$.xP()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQb(u)},
cQb(d){var x=$.amn
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
default:x=null}$.amn=A.dq(A.d7(0,0,0,0,x),C.dBH())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I8.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.N.t(0.25),B.o,1),s=A.a4(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.eu,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dP,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.O,0,x,x),B.h,x,x,new A.v(v,x,t,u,x,x,B.l),x,x,x,B.fB,x,x,x)}}
C.mg.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fb.prototype={
T(){return new C.a7H(A.a([],y.e))},
git(){return this.c}}
C.a7H.prototype={
Z(){var x=this
x.a5()
$.xP().af(0,x.gaoU())
C.dBw(x.gb8U())
x.PY()},
b8l(){if(this.c!=null)this.n(new C.chU())},
b8V(){C.d_I()},
l(){$.xP().V(0,this.gaoU())
C.d_J()
$.JI().sv(0,null)
this.a3()},
PY(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PY=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(u.a.c),$async$PY)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chT(u,t))
$.b61=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PY,w)},
PH(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PH=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.chR(u))
x=3
return A.b(C.amo(u.a.c),$async$PH)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chS(u,t))
$.b61=J.a5(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PH,w)},
baN(d){var x=this.c
x.toString
A.a8(x,!1).cM(A.ep(new C.chV(d),!1,null,y.H))},
bbi(){var x=this.c
x.toString
return C.SD(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.R,u=v?B.ds:B.db,t=A.aT(w,w,w,w,B.CJ,w,w,w,new C.chZ(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zA(A.G(A.a([A.I(new A.N(B.hV,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aY(!1,w,!0,new A.N(B.aF,A.a4(B.eZ,B.N,w,w,28),w),B.bW,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbh(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cW(!0,A.C(A.a([new A.N(D.LC,s,w),A.I(x.e?B.jd:new A.hW($.JI(),new C.ci_(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahv(B.N,B.yR,B.nW,D.bDN,x.e?w:new C.ci0(x)),w)}}
C.Qj.prototype={
b6q(d){var x,w=$.xP().a,v=this.d
if(C.dl4(v)){v=this.c.a
x=d.gaBG()
return new C.Fc(v+"_mini",d.gaBG(),!0,d.gae7(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_1(d,!0,!0,"Fold "+(B.p.aX(v,4)+1)+"/"+B.p.aX(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.o,1),s=A.a([new A.ag(0,B.x,B.N.t(0.18),B.cj,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aY(!1,v,!0,A.C(A.a([A.I(A.w(w,A.cU(r,A.jr(A.C(A.a([new C.axO(q,w),A.I(p!=null?x.b6q(p):A.w(w,A.C(A.a([A.a4(B.ho,B.ly,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.aq,B.f,0,B.k),B.h,B.u_,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a4(B.vQ,B.N.t(0.85),w,w,9),D.bm1,A.j("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.aq,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.ait,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,w,w,new A.v(w,w,t,u,s,D.Pi,B.l),w,w,w,B.eG,w,w,w),1),B.ak,A.j(q.b,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.N.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axO.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.I(A.j(B.d.gar(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a4(B.vR,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lr,x,x,x)}}
C.Fa.prototype={
T(){return new C.ayJ()}}
C.ayJ.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.R,v=w?B.ds:B.db,u=A.aT(x,x,x,x,B.CJ,x,x,x,new C.chO(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cW(!0,A.C(A.a([new A.N(D.LC,A.G(A.a([u,A.I(new A.zA(A.G(A.a([A.I(new A.N(B.hV,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.v,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aY(!1,x,!0,new A.N(B.aF,A.a4(B.eZ,B.N,x,x,28),x),B.bW,!0,x,x,x,x,x,x,x,x,x,x,x,new C.chP(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hW($.JI(),new C.chQ(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aF_.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.x,B.N.t(0.35),B.ef,28),new A.ag(0,B.x,B.q.t(0.45),B.cO,18)],y.V),p=A.W(B.c.t(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fc(w+"_full",v,!1,x.gae7(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayQ(u.r,t)}else x=new C.aup(n,t)
else x=D.bQH
return A.w(t,A.cU(o,A.jr(A.C(A.a([new C.aF0(n,m,t),A.I(x,1),new C.aEZ(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.v(t,t,p,r,q,D.Pi,B.l),t,s*2.05,t,B.bb,t,t,s)}}
C.aF0.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.eI(s)
s=A.i3(s)
x=new A.db(r,s)
w=x.gFj()===0?12:x.gFj()
s=B.a.bC(B.p.q(s),2,"0")
r=(r<12?B.eo:B.fV)===B.eo?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l2,t,t,t),B.b5,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bi,D.aso,B.e7,D.arC,B.e7,D.ass],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a4(B.CC,B.N.t(0.9),t,t,12),B.e7,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.C(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aje,t,t,t)}}
C.ayQ.prototype={
C(d){var x=null
return A.w(x,A.b4(A.C(A.a([A.a4(B.vE,B.c.t(0.35),x,x,40),B.C,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ah,A.eH(D.avq,D.bBJ,this.c,A.ei(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aJ(B.N.t(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.u_,x,x,x,x,x,x,x,x,1/0)}}
C.aEZ.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoO(B.O_,"YouTube",t===0,s,new C.ctI(v))
t=v.aoO(B.hZ,"Device",t===1,s,new C.ctJ(v))
x=s?"Power off":"Power on"
w=s?D.O0:D.apK
return A.w(u,A.G(A.a([r,B.Y,t,B.b5,A.aT(u,u,u,u,A.a4(w,s?B.aY:B.dv,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dg)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aj0,u,u,u)},
aoO(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b9
else x=f?B.N:B.a9
w=f&&g?B.N.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aU(!1,B.M,!0,v,A.aY(!1,A.n(10),!0,new A.N(B.kA,A.C(A.a([A.a4(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azW.prototype={
C(d){return D.a9O}}
C.aup.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.kZ,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.eo(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aF,w,w,B.X,!1)},
pX(d,e){var x=null
return new A.N(B.c5,A.C(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bR,A.j(e,x,x,x,x,D.bsN,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Ff.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o4.prototype={
gaBG(){var x=this.f
if(x!=null&&x.length!==0)return C.b60(x,!0)
return this.b},
gae7(){var x=this.c
return x===D.X4||x===D.X5||x===D.En||x===D.X6}}
C.a_1.prototype={
T(){return new C.ayK(null,null)}}
C.ayK.prototype={
Z(){this.a5()
var x=A.bC(null,B.pZ,null,1,null,this)
x.lm(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMw()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fm(v,new A.v(v,v,v,v,v,new A.aA(B.e0,B.cp,B.F,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.ci),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.hh,r,v)
x=B.c.t(0.92)
s=A.b4(new A.dT(new A.bi(r,new A.bw(0.72,1,s),s.k("bi<br.T>")),!1,A.a4(B.ho,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.aA_(u,v),t,s,A.bD(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.v,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.v(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bD(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bD(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.be(B.am,v,B.cD,B.m,u,v)}}
C.aA_.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k6(v,new C.ckq(this),B.bn,!0,x,x,new C.ckr(this),x)
return new C.AZ(w,x)}}
C.AZ.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.u8,B.Iv],y.O),B.ho)
break
case 1:x=new A.aN(A.a([B.u_,D.adh],y.O),B.iJ)
break
case 2:x=new A.aN(A.a([D.aeQ,D.acN],y.O),B.vH)
break
case 3:x=new A.aN(A.a([B.Z,B.dI],y.O),B.Cd)
break
case 4:x=new A.aN(A.a([B.a8,B.aj],y.O),B.m5)
break
default:x=v}w=x.a
return A.w(v,A.b4(A.a4(x.b,B.N.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.v(v,v,v,v,v,new A.aA(B.at,B.az,B.F,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acf.prototype={
l(){var x=this,w=x.aP$
if(w!=null)w.V(0,x.gdi())
x.aP$=null
x.a3()},
bn(){this.bD()
this.by()
this.dj()}}
C.Fc.prototype={
T(){return new C.ayL()}}
C.ayL.prototype={
ahH(d,e){var x,w,v=this,u="mute=1",t=C.d_E(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_G(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b60(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dl2(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aR()
v.d=x
try{$.JJ()
$.oD().u_(x,new C.ci6(v),!0)}catch(w){v.r=!0
v.f=!1}},
aR(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.ci1(w))
x=w.e
x.toString
w.ahH(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jr(A.b4(A.a4(B.Oa,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai7(u,B.ru,x)],y.p)
if(v.f)x.push(A.jr(A.b4(new A.ao(w,w,D.aae,u),u,u,u),B.bT,!0))
return new A.be(B.am,u,B.cD,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","~()","Fb(R)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","au<~>()","Fa(R)","hW<P>(R,o4?,p?)","Qj(R,P)","te(R,o4?,p?)","AZ(R,ai,di?)"])
C.cME.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+2}
C.cMD.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.R,m=A.ay(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.x,B.N.t(0.22),B.ef,32)],y.V),h=A.W(n?B.bm:B.N.t(0.18),B.o,1),g=A.n(28),f=B.N.t(n?0.35:0.14)
k=A.a([f,B.Q.t(n?0.18:0.08)],k)
f=A.w(o,D.ari,B.h,o,o,new A.v(B.N.t(0.18),o,A.W(B.N.t(0.45),B.o,1),o,o,o,B.ai),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.v,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.C(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fM,x,A.aT(o,o,o,o,A.a4(B.cG,n?B.a9:B.bT,o,o,o),o,o,o,new C.cMz(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.v(o,o,o,o,o,new A.aA(B.a3,B.a6,B.F,k,o,o),B.l),o,o,o,B.Lb,o,o,o)
f=A.eS(B.c7,A.a([new C.I8("YouTube",B.CB,n,o),new C.I8("TikTok",B.iJ,n,o),new C.I8("Instagram",B.vH,n,o),new C.I8("Facebook",B.Cd,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bz:B.ff,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a4(B.jA,B.N.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bm:B.b7
v=A.C(A.a([f,B.an,A.at(o,B.E,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bg(o,new A.b3(4,r,B.I),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aJ(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a60),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.D,o,B.L,o,o,o,o)],w),B.ad,B.e,B.f,0,B.k)
f=A.iM(D.arm,D.bHt,new C.cMA(d),A.jL(o,o,o,o,o,o,o,o,o,o,o,n?B.aE:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fm(A.cU(g,A.C(A.a([k,new A.N(D.akd,v,o),new A.N(D.akj,A.G(A.a([f,B.b5,A.bY(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cMB(d),o,o),B.Y,A.dL(D.ava,D.bHO,new C.cMC(d,x),A.bt(B.N,o,o,o,B.c,o,D.ajK,o,new A.bp(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ad,B.e,B.O,0,B.k),B.av),new A.v(o,o,h,l,i,new A.aA(B.at,B.az,B.F,j,o,o),B.l),B.ci),o)},
$S:60}
C.cMz.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cMA.prototype={
$0(){C.d_J()
$.JI().sv(0,null)
A.a8(this.a,!1).S(null)},
$S:0}
C.cMB.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cMC.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.a8(this.a,!1).S(x)
return null},
$S:0}
C.b6c.prototype={
$1(d){return C.d_K(A.K(d,y.N,y.z))},
$S:z+3}
C.b6d.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
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
C.b63.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b62.prototype={
$1(d){return B.a.bC(B.p.kO(d,16),2,"0").toUpperCase()},
$S:73}
C.chU.prototype={
$0(){},
$S:0}
C.chT.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.chR.prototype={
$0(){return this.a.e=!0},
$S:0}
C.chS.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.chV.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+7}
C.chZ.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.ci_.prototype={
$3(d,e,f){return new A.hW($.xP(),new C.chY(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.chY.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.z7(d,l,y.Q)
x=x==null?l:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.t(0.12)
t=A.n(12)
s=A.W(B.N.t(0.35),B.o,1)
r=A.a4(B.ho,B.N,l,l,18)
q=k.d
p=J.a5(m.a.d)
o=$.xP().a
n=B.i.aO(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.v(u,l,s,t,l,l,B.l),l,l,B.cF,B.eq,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cU(t,new A.iU(1.7777777777777777,new C.Fc("fleet_master",s,!1,k.gae7(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.av),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a5(t)+".":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yh(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jI(new A.N(B.AI,A.C(v,B.t,B.e,B.f,0,B.k),l),l),new A.oe(D.aiH,A.apU(new A.nf(new C.chX(u,k),J.a5(u.d),!1,!0,!0,A.uH(),l),D.bmF),l)],x))},
$S:1464}
C.chX.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qj(w,e,J.a5(x.d),new C.chW(x,w),this.b,null)},
$S:z+9}
C.chW.prototype={
$0(){return this.a.baN(this.b)},
$S:0}
C.ci0.prototype={
$0(){this.a.PH()
return null},
$S:0}
C.chO.prototype={
$0(){return A.a8(this.a,!1).es()},
$S:0}
C.chP.prototype={
$0(){C.SD(this.a,$.b61)
return null},
$S:0}
C.chQ.prototype={
$3(d,e,f){return A.hc(new C.chN(this.a,e))},
$S:z+10}
C.chN.prototype={
$2(d,e){var x,w=null,v=B.i.aO(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.cp(A.C(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.an,new C.aF_(v,t.a.c,t.e,t.d,new C.chK(t),new C.chL(t),new C.chM(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v_,w,w,B.X),w,w,w)},
$S:1465}
C.chK.prototype={
$0(){var x=this.a.c
x.toString
C.SD(x,$.b61)
return null},
$S:0}
C.chL.prototype={
$1(d){var x=this.a
return x.n(new C.chJ(x,d))},
$S:34}
C.chJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.chM.prototype={
$0(){var x=this.a
return x.n(new C.chI(x))},
$S:0}
C.chI.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctI.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctJ.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckq.prototype={
$3(d,e,f){return new C.AZ(this.a.c,null)},
$S:z+11}
C.ckr.prototype={
$3(d,e,f){if(f==null)return e
return new A.be(B.am,null,B.cD,B.m,A.a([new C.AZ(this.a.c,null),D.a9H],y.p),null)},
$C:"$3",
$R:3,
$S:432}
C.ci6.prototype={
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
x.ahH(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h5(w,"load",new C.ci4(x),!1,v)
w=x.e
w.toString
A.h5(w,"error",new C.ci5(x),!1,v)
x=x.e
x.toString
return x},
$S:1466}
C.ci4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ci3(x))},
$S:39}
C.ci3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ci5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ci2(x))},
$S:39}
C.ci2.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.ci1.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJi.prototype={
$1(d){var x=new A.Az([],[]).EB(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1467};(function aliases(){var x=C.acf.prototype
x.aMw=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7H.prototype,"gaoU","b8l",1)
x(v,"gb8U","b8V",1)
x(v,"gbbh","bbi",6)
w(C,"dBH","d_I",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uZ,[C.cME,C.cMD,C.b6c,C.b6d,C.b64,C.b65,C.b66,C.b67,C.b68,C.b69,C.b6a,C.b6b,C.b63,C.b62,C.chV,C.ci_,C.chY,C.chQ,C.chL,C.ckq,C.ckr,C.ci6,C.ci4,C.ci5,C.cJi])
w(A.Ua,[C.cMz,C.cMA,C.cMB,C.cMC,C.chU,C.chT,C.chR,C.chS,C.chZ,C.chW,C.ci0,C.chO,C.chP,C.chK,C.chJ,C.chM,C.chI,C.ctI,C.ctJ,C.ci3,C.ci2,C.ci1])
w(A.aD,[C.I8,C.Qj,C.axO,C.aF_,C.aF0,C.ayQ,C.aEZ,C.azW,C.aup,C.aA_,C.AZ])
w(A.ai,[C.mg,C.o4])
w(A.ad,[C.Fb,C.Fa,C.a_1,C.Fc])
w(A.ae,[C.a7H,C.ayJ,C.acf,C.ayL])
w(A.Ub,[C.chX,C.chN])
v(C.Ff,A.ave)
v(C.ayK,C.acf)
x(C.acf,A.dP)})()
A.d2X(b.typeUniverse,JSON.parse('{"Fb":{"ad":[],"p":[]},"Qj":{"aD":[],"p":[]},"Fa":{"ad":[],"p":[]},"I8":{"aD":[],"p":[]},"a7H":{"ae":["Fb"]},"axO":{"aD":[],"p":[]},"ayJ":{"ae":["Fa"]},"aF_":{"aD":[],"p":[]},"aF0":{"aD":[],"p":[]},"ayQ":{"aD":[],"p":[]},"aEZ":{"aD":[],"p":[]},"azW":{"aD":[],"p":[]},"aup":{"aD":[],"p":[]},"a_1":{"ad":[],"p":[]},"AZ":{"aD":[],"p":[]},"ayK":{"ae":["a_1"]},"aA_":{"aD":[],"p":[]},"Fc":{"ad":[],"p":[]},"ayL":{"ae":["Fc"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<B>"),e:x("af<mg>"),s:x("af<m>"),p:x("af<p>"),t:x("af<P>"),X:x("a9<mg>"),a:x("a9<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("md"),_:x("z2"),k:x("mg"),N:x("m"),Y:x("bw<ab>"),W:x("dD<m>"),J:x("hW<P>"),j:x("hW<o4?>"),E:x("wV<ct>"),q:x("QZ"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a60=new A.aJ(B.N,1.6,B.o,-1)
D.bmo=new A.ao(18,18,B.Ig,null)
D.a9H=new A.dB(B.P,null,null,D.bmo,null)
D.O0=new A.O(983224,"MaterialIcons",!1)
D.atN=new A.a6(D.O0,48,B.b9,null,null,null)
D.bst=new A.H(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCq=new A.y("Powered off",null,D.bst,null,null,null,null,null,null,null,null)
D.aG2=x([D.atN,B.w,D.bCq],y.p)
D.ag2=new A.eU(B.X,B.e,B.O,B.j,null,B.k,null,0,D.aG2,null)
D.a9O=new A.dB(B.P,null,null,D.ag2,null)
D.aae=new A.hN(2,null,null,null,null,B.U,null,null,null,null)
D.acN=new A.B(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.adh=new A.B(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.aeQ=new A.B(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.ait=new A.U(0,3,0,3)
D.aiH=new A.U(10,0,10,88)
D.aj0=new A.U(12,6,12,10)
D.aje=new A.U(14,8,14,6)
D.ajK=new A.U(18,12,18,12)
D.akd=new A.U(20,18,20,8)
D.akj=new A.U(20,8,20,20)
D.LC=new A.U(8,6,15,8)
D.apK=new A.O(983222,"MaterialIcons",!1)
D.ari=new A.a6(B.ho,26,B.N,null,null,null)
D.arm=new A.a6(B.N7,18,null,null,null,null)
D.arC=new A.a6(B.vR,14,B.U,null,null,null)
D.aq_=new A.O(983420,"MaterialIcons",!1)
D.aso=new A.a6(D.aq_,14,B.U,null,null,null)
D.aou=new A.O(62895,"MaterialIcons",!1)
D.ass=new A.a6(D.aou,14,B.U,null,null,null)
D.ava=new A.a6(B.m2,20,null,null,null,null)
D.avq=new A.a6(B.eZ,16,null,null,null,null)
D.aI2=x([B.aj,B.Z],y.O)
D.Pi=new A.aA(B.at,B.az,B.F,D.aI2,null,null)
D.bgo=new A.aN("NGMY OS","14.2.1")
D.bfz=new A.aN("VirtualDroid","13.8.4")
D.bfy=new A.aN("NGMY OS","15.0.0")
D.bg5=new A.aN("VirtualDroid","14.1.2")
D.bfx=new A.aN("NGMY Tab OS","12.9.7")
D.bfw=new A.aN("NGMY OS","13.5.3")
D.bfn=new A.aN("VirtualDroid","15.2.0")
D.bfO=new A.aN("NGMY OS","14.8.1")
D.bga=new A.aN("NGMY Tab OS","13.2.4")
D.bgx=new A.aN("VirtualDroid","12.6.9")
D.bfk=new A.aN("NGMY OS","16.0.1")
D.bfc=new A.aN("VirtualDroid","14.9.0")
D.bgi=new A.aN("NGMY Tab OS","14.0.3")
D.bfF=new A.aN("NGMY OS","13.1.8")
D.bfj=new A.aN("VirtualDroid","13.4.5")
D.bfv=new A.aN("NGMY OS","15.3.2")
D.bgb=new A.aN("NGMY Tab OS","12.4.1")
D.bgk=new A.aN("VirtualDroid","16.1.0")
D.bfN=new A.aN("NGMY OS","14.4.6")
D.bgp=new A.aN("VirtualDroid","15.0.8")
D.aHF=x([D.bgo,D.bfz,D.bfy,D.bg5,D.bfx,D.bfw,D.bfn,D.bfO,D.bga,D.bgx,D.bfk,D.bfc,D.bgi,D.bfF,D.bfj,D.bfv,D.bgb,D.bgk,D.bfN,D.bgp],A.bm("af<+(m,m)>"))
D.biy=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bi6=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bi1=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bia=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhY=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bic=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.biA=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhZ=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bi5=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bie=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhX=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bis=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bip=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bi4=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bim=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bil=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhW=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bi9=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bij=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bio=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qj=x([D.biy,D.bi6,D.bi1,D.bia,D.bhY,D.bic,D.biA,D.bhZ,D.bi5,D.bie,D.bhX,D.bis,D.bip,D.bi4,D.bim,D.bil,D.bhW,D.bi9,D.bij,D.bio],A.bm("af<+(m,m,ab,ab,m)>"))
D.aMC=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X4=new C.Ff(0,"youtube")
D.X5=new C.Ff(1,"tiktok")
D.En=new C.Ff(2,"instagram")
D.X6=new C.Ff(3,"facebook")
D.bbf=new C.Ff(4,"other")
D.bm1=new A.ao(3,null,null,null)
D.bmF=new A.iK(4,10,8,0.52,null)
D.bDj=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpD=new A.aP(D.bDj,null,null,null,null,null,null,null,null,null,null,null,null,B.y,!1,null,null,null,B.m,null)
D.bsN=new A.H(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBJ=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDN=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHt=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHO=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQH=new C.azW(null)})();(function staticFields(){$.d_H=20
$.amn=null
$.b61=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFR","xP",()=>A.P8(0))
x($,"dFS","JI",()=>A.P8(null))})()};
(a=>{a["l7m/o6hvfSPPOL5j0EFYfRaaMcQ="]=a.current})($__dart_deferred_initializers__);