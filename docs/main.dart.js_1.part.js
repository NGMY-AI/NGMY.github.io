((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCA(d,e){A.ab(d,!1).cL(A.eo(new C.cMu(e),!0,null,y.H))},
SF(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SF=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JG()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.W),u)
x=3
return A.b(A.df(B.B,null,new C.cMt(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SF)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dl1(s)
if(r==null){d.E(y.q).f.O(D.bpr)
x=1
break}x=4
return A.b(A.bR(B.fg,null,y.H),$async$SF)
case 4:if(d.e==null){x=1
break}o=B.p.aJ(e,1,999)
$.d_y=o
q=C.dkX(o)
o=$.xS()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQ3(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SF,w)},
d_B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Ff(d){return C.dl4(d)},
dl4(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ff=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Ff)
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
case 10:l=J.ii(s,y.f)
l=A.ee(l,new C.b62(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b63(),k),k.k("L.E"))
r=j
if(J.a4(r)>=20){v=r
x=1
break}q=C.d_C(r)
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
o=B.u.aE(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.d_B(A.K(o,y.N,y.z))
m=C.d_C(A.a([n],y.e))
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
case 18:case 14:r=C.dl2()
x=22
return A.b(C.Fe(a2,r),$async$Ff)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Ff,w)},
d_C(d){var x=A.R(d).k("z<1,m>"),w=new A.z(d,new C.b5V(),x).eu(0),v=new A.z(d,new C.b5W(),x).eu(0),u=new A.z(d,new C.b5X(),x).eu(0),t=new A.z(d,new C.b5Y(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQ4(null,r,v,u,w,t));++r}return s},
amj(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amj=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Ff(d),$async$amj)
case 3:u=f
t=y.N
s=J.ck(u)
r=s.dd(u,new C.b5Z(),t).eu(0)
q=s.dd(u,new C.b6_(),t).eu(0)
p=s.dd(u,new C.b60(),t).eu(0)
o=s.dd(u,new C.b61(),t).eu(0)
n=C.cQ4(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fe(d,u),$async$amj)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amj,w)},
Fe(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fe=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$Fe)
case 2:v=g
u=B.a.i(d)
t=J.b5(e,new C.b5U(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.am("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.u.aj(t,null)),$async$Fe)
case 3:return A.f(null,w)}})
return A.h($async$Fe,w)},
dl2(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dW(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQ4(x,x,u,t,v,s)
return r},
cQ4(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jV(),i=d==null,h=D.Qc[B.p.ao(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qc[B.p.ao(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bA(256)
o=new A.z(q,new C.b5T(),A.R(q).k("z<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bA(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bG(B.p.kP(j.bA(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.ao(e,20)
l=D.aMo[x]
k=D.aHt[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bA(99999),"Device "+B.a.bG(B.p.t(e+1),2,"0"),v,l,C.dl3(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.O(Date.now(),0,!1).a1().Y())},
dl3(d,e){var x,w=J.dW(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bG(B.p.kP(d.bA(256),16),2,"0")
return B.d.f9(w)},
cMu:function cMu(d){this.a=d},
cMt:function cMt(d,e){this.a=d
this.b=e},
cMp:function cMp(d){this.a=d},
cMq:function cMq(d){this.a=d},
cMr:function cMr(d){this.a=d},
cMs:function cMs(d,e){this.a=d
this.b=e},
I6:function I6(d,e,f,g){var _=this
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
b62:function b62(){},
b63:function b63(){},
b5V:function b5V(){},
b5W:function b5W(){},
b5X:function b5X(){},
b5Y:function b5Y(){},
b5Z:function b5Z(){},
b6_:function b6_(){},
b60:function b60(){},
b61:function b61(){},
b5U:function b5U(){},
b5T:function b5T(){},
Fc:function Fc(d,e){this.c=d
this.a=e},
a7I:function a7I(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
chE:function chE(){},
chD:function chD(d,e){this.a=d
this.b=e},
chB:function chB(d){this.a=d},
chC:function chC(d,e){this.a=d
this.b=e},
chF:function chF(d){this.a=d},
chJ:function chJ(d){this.a=d},
chK:function chK(d,e){this.a=d
this.b=e},
chI:function chI(d,e,f){this.a=d
this.b=e
this.c=f},
chH:function chH(d,e){this.a=d
this.b=e},
chG:function chG(d,e){this.a=d
this.b=e},
chL:function chL(d){this.a=d},
Qk:function Qk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axG:function axG(d,e){this.c=d
this.a=e},
Fb:function Fb(d,e){this.c=d
this.a=e},
ayA:function ayA(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
chy:function chy(d){this.a=d},
chz:function chz(d){this.a=d},
chA:function chA(d){this.a=d},
chx:function chx(d,e){this.a=d
this.b=e},
chu:function chu(d){this.a=d},
chv:function chv(d){this.a=d},
cht:function cht(d,e){this.a=d
this.b=e},
chw:function chw(d){this.a=d},
chs:function chs(d){this.a=d},
aER:function aER(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aES:function aES(d,e,f){this.c=d
this.d=e
this.a=f},
ayH:function ayH(d,e){this.c=d
this.a=e},
aEQ:function aEQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cty:function cty(d){this.a=d},
ctz:function ctz(d){this.a=d},
azN:function azN(d){this.a=d},
aui:function aui(d,e){this.c=d
this.a=e},
dl1(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o4(x,C.b5R(u,!1),D.WW,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dl0(w)
if(t!=null)return new C.o4(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.WX,"TikTok",q,q)
s=C.dl_(x,w)
if(s!=null)return s
r=C.dkZ(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o4(x,x,D.bb1,"Video",q,q)
return q},
dl_(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/reel/"+x+u,D.Ej,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/p/"+x+u,D.Ej,t,v,v)}return v},
dkZ(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o4(d,"https://www.facebook.com/plugins/video.php?href="+A.f6(2,d,B.aJ,!1)+"&show_text=false&width=734",D.WY,"Facebook",null,null)},
dl0(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Fg:function Fg(d,e){this.a=d
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
ayB:function ayB(d,e){var _=this
_.d=$
_.cO$=d
_.aW$=e
_.c=_.a=null},
azR:function azR(d,e){this.c=d
this.a=e},
cka:function cka(d){this.a=d},
ckb:function ckb(d){this.a=d},
B3:function B3(d,e){this.c=d
this.a=e},
acd:function acd(){},
dBn(d){var x=window
x.toString
A.h5(x,"message",new C.cJ8(d),!1,y._)},
Fd:function Fd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayC:function ayC(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
chR:function chR(d){this.a=d},
chP:function chP(d){this.a=d},
chO:function chO(d){this.a=d},
chQ:function chQ(d){this.a=d},
chN:function chN(d){this.a=d},
chM:function chM(d){this.a=d},
cJ8:function cJ8(d){this.a=d},
b5R(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_v(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d_w(d){var x=A.by(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.by(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_x(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dkW(d,e,f){var x=C.d_v(d)
if(x!=null){if(f)return C.d_x(x,e,!0)
return C.d_w(C.b5R(x,e))}return C.d_w(d)},
dkX(d){if(d<=4)return 0
return B.p.b_(d-1,4)*4},
dkY(d){var x
if($.JG().a==null)return!1
x=$.xS().a
return d>=x&&d<x+4},
d_A(){var x=$.ami
if(x!=null)x.aa(0)
$.ami=null
$.xS().sv(0,0)},
d_z(){var x,w,v,u=$.JG()
if(u.a==null)return
x=$.ami
if(x!=null)x.aa(0)
w=$.d_y
if(w<=4){u=u.a
u.toString
C.cQ3(u)
return}x=$.xS()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQ3(u)},
cQ3(d){var x=$.ami
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
default:x=null}$.ami=A.dl(A.d4(0,0,0,0,x),C.dBy())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I6.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.N.q(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.ev,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dP,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.v(v,x,t,u,x,x,B.l),x,x,x,B.fA,x,x,x)}}
C.mg.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fc.prototype={
S(){return new C.a7I(A.a([],y.e))},
giu(){return this.c}}
C.a7I.prototype={
Z(){var x=this
x.a6()
$.xS().af(0,x.gaoV())
C.dBn(x.gb8W())
x.PY()},
b8o(){if(this.c!=null)this.n(new C.chE())},
b8X(){C.d_z()},
l(){$.xS().V(0,this.gaoV())
C.d_A()
$.JG().sv(0,null)
this.a3()},
PY(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PY=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Ff(u.a.c),$async$PY)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chD(u,t))
$.b5S=J.a4(t)
case 1:return A.f(v,w)}})
return A.h($async$PY,w)},
PG(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PG=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.chB(u))
x=3
return A.b(C.amj(u.a.c),$async$PG)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chC(u,t))
$.b5S=J.a4(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PG,w)},
baP(d){var x=this.c
x.toString
A.ab(x,!1).cL(A.eo(new C.chF(d),!1,null,y.H))},
bbl(){var x=this.c
x.toString
return C.SF(x,J.a4(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.Q,u=v?B.dv:B.db,t=A.aT(w,w,w,w,B.CE,w,w,w,new C.chJ(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a4(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zE(A.G(A.a([A.I(new A.N(B.hW,A.j(s,1,B.ae,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aY(!1,w,!0,new A.N(B.aG,A.a5(B.eZ,B.N,w,w,28),w),B.bP,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbk(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cW(!0,A.C(A.a([new A.N(D.Lw,s,w),A.I(x.e?B.jg:new A.hX($.JG(),new C.chK(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cq(w,u,t,w,!1,!1,A.ahs(B.N,B.yL,B.o0,D.bDw,x.e?w:new C.chL(x)),w)}}
C.Qk.prototype={
b6v(d){var x,w=$.xS().a,v=this.d
if(C.dkY(v)){v=this.c.a
x=d.gaBM()
return new C.Fd(v+"_mini",d.gaBM(),!0,d.gae5(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.a_1(d,!0,!0,"Fold "+(B.p.b_(v,4)+1)+"/"+B.p.b_(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.q(0.1),B.o,1),s=A.a([new A.ag(0,B.w,B.N.q(0.18),B.ci,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aY(!1,v,!0,A.C(A.a([A.I(A.w(w,A.cT(r,A.ik(A.C(A.a([new C.axG(q,w),A.I(p!=null?x.b6v(p):A.w(w,A.C(A.a([A.a5(B.hn,B.ly,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.q(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u_,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vP,B.N.q(0.85),w,w,9),D.blP,A.j("Tap",w,w,w,w,A.l(w,w,B.c.q(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ap,B.f,0,w,w),B.h,B.a7,w,w,w,w,w,D.aij,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,w,w,new A.v(w,w,t,u,s,D.Pd,B.l),w,w,w,B.eJ,w,w,w),1),B.ak,A.j(q.b,1,B.ae,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.ae,w,w,A.l(w,w,A.V(d).ax.k3.q(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.ae,w,w,A.l(w,w,B.N.q(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axG.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.I(A.j(B.d.gar(this.c.c.split("-")),x,B.ae,x,x,A.l(x,x,B.c.q(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.o_,B.c.q(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a7,x,x,x,x,x,B.Ll,x,x,x)}}
C.Fb.prototype={
S(){return new C.ayA()}}
C.ayA.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.Q,v=w?B.dv:B.db,u=A.aT(x,x,x,x,B.CE,x,x,x,new C.chy(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cq(x,v,A.cW(!0,A.C(A.a([new A.N(D.Lw,A.G(A.a([u,A.I(new A.zE(A.G(A.a([A.I(new A.N(B.hW,A.j(t.b+" \xb7 "+t.c,1,B.ae,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.v,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aY(!1,x,!0,new A.N(B.aG,A.a5(B.eZ,B.N,x,x,28),x),B.bP,!0,x,x,x,x,x,x,x,x,x,x,x,new C.chz(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hX($.JG(),new C.chA(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aER.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.N.q(0.35),B.eu,28),new A.ag(0,B.w,B.q.q(0.45),B.cJ,18)],y.V),p=A.W(B.c.q(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fd(w+"_full",v,!1,x.gae5(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayH(u.r,t)}else x=new C.aui(n,t)
else x=D.bQj
return A.w(t,A.cT(o,A.ik(A.C(A.a([new C.aES(n,m,t),A.I(x,1),new C.aEQ(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.v(t,t,p,r,q,D.Pd,B.l),t,s*2.05,t,B.b9,t,t,s)}}
C.aES.prototype={
C(d){var x,w,v,u,t=null,s=new A.O(Date.now(),0,!1),r=A.eQ(s)
s=A.i3(s)
x=new A.db(r,s)
w=x.gFj()===0?12:x.gFj()
s=B.a.bG(B.p.t(s),2,"0")
r=(r<12?B.en:B.fV)===B.en?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l4,t,t,t),B.b0,A.j(v.b,t,t,t,t,A.l(t,t,B.c.q(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bh,D.asg,B.e8,D.art,B.e8,D.ask],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a5(B.Cx,B.N.q(0.9),t,t,12),B.e8,A.I(A.j(v.c,t,B.ae,t,t,A.l(t,t,B.c.q(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.q(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.C(r,B.j,B.e,B.f,0,B.k),B.h,B.a7,t,t,t,t,t,D.aj1,t,t,t)}}
C.ayH.prototype={
C(d){var x=null
return A.w(x,A.b4(A.C(A.a([A.a5(B.vF,B.c.q(0.35),x,x,40),B.C,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.q(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.q(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eG(D.avh,D.bBs,this.c,A.ei(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aI(B.N.q(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u_,x,x,x,x,x,x,x,x,1/0)}}
C.aEQ.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoP(B.NU,"YouTube",t===0,s,new C.cty(v))
t=v.aoP(B.jC,"Device",t===1,s,new C.ctz(v))
x=s?"Power off":"Power on"
w=s?D.NV:D.apE
return A.w(u,A.G(A.a([r,B.Y,t,B.b0,A.aT(u,u,u,u,A.a5(w,s?B.b4:B.ds,u,u,u),u,u,u,v.f,u,u,u,u,x,B.di)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a7,u,u,u,u,u,D.aiO,u,u,u)},
aoP(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b7
else x=f?B.N:B.a9
w=f&&g?B.N.q(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aU(!1,B.M,!0,v,A.aY(!1,A.n(10),!0,new A.N(B.kC,A.C(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azN.prototype={
C(d){return D.a9D}}
C.aui.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l_,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.q(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.en(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.X,!1)},
pX(d,e){var x=null
return new A.N(B.c2,A.C(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.q(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bV,A.j(e,x,x,x,x,D.bsC,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fg.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o4.prototype={
gaBM(){var x=this.f
if(x!=null&&x.length!==0)return C.b5R(x,!0)
return this.b},
gae5(){var x=this.c
return x===D.WW||x===D.WX||x===D.Ej||x===D.WY}}
C.a_1.prototype={
S(){return new C.ayB(null,null)}}
C.ayB.prototype={
Z(){this.a6()
var x=A.bG(null,B.q_,null,1,null,this)
x.mS(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMx()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fm(v,new A.v(v,v,v,v,v,new A.az(B.e0,B.co,B.D,A.a([B.B,B.q.q(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.hh,r,v)
x=B.c.q(0.92)
s=A.b4(new A.dS(new A.bi(r,new A.bt(0.72,1,s),s.k("bi<bq.T>")),!1,A.a5(B.hn,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.q(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.azR(u,v),t,s,A.bC(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.v,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.v(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.q(0.75)
u.push(A.bC(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.q(0.85)
u.push(A.bC(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bg(B.al,v,B.cA,B.m,u,v)}}
C.azR.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k6(v,new C.cka(this),B.bm,!0,x,x,new C.ckb(this),x)
return new C.B3(w,x)}}
C.B3.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aO(A.a([B.u7,B.It],y.O),B.hn)
break
case 1:x=new A.aO(A.a([B.u_,D.ad4],y.O),B.iL)
break
case 2:x=new A.aO(A.a([D.aeJ,D.acA],y.O),B.vI)
break
case 3:x=new A.aO(A.a([B.Z,B.dJ],y.O),B.C9)
break
case 4:x=new A.aO(A.a([B.a7,B.aj],y.O),B.m4)
break
default:x=v}w=x.a
return A.w(v,A.b4(A.a5(x.b,B.N.q(0.55),v,v,28),v,v,v),B.h,v,v,new A.v(v,v,v,v,v,new A.az(B.aq,B.ax,B.D,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acd.prototype={
l(){var x=this,w=x.aW$
if(w!=null)w.V(0,x.gdE())
x.aW$=null
x.a3()},
bq(){this.bH()
this.bD()
this.dF()}}
C.Fd.prototype={
S(){return new C.ayC()}}
C.ayC.prototype={
ahF(d,e){var x,w,v=this,u="mute=1",t=C.d_v(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_x(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b5R(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dkW(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a6()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.JH()
$.oD().u_(x,new C.chR(v),!0)}catch(w){v.r=!0
v.f=!1}},
aP(d){var x,w=this
w.b2(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.chM(w))
x=w.e
x.toString
w.ahF(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.q(0.5)
return A.ik(A.b4(A.a5(B.O4,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai4(u,B.rt,x)],y.p)
if(v.f)x.push(A.ik(A.b4(new A.ao(w,w,D.aa3,u),u,u,u),B.bT,!0))
return new A.bg(B.al,u,B.cA,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","~()","Fc(S)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","av<~>()","Fb(S)","hX<Q>(S,o4?,p?)","Qk(S,Q)","tf(S,o4?,p?)","B3(S,ai,dh?)"])
C.cMu.prototype={
$1(d){return new C.Fc(this.a,null)},
$S:z+2}
C.cMt.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.Q,m=A.ax(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.w,B.N.q(0.22),B.eu,32)],y.V),h=A.W(n?B.bn:B.N.q(0.18),B.o,1),g=A.n(28),f=B.N.q(n?0.35:0.14)
k=A.a([f,B.R.q(n?0.18:0.08)],k)
f=A.w(o,D.ara,B.h,o,o,new A.v(B.N.q(0.18),o,A.W(B.N.q(0.45),B.o,1),o,o,o,B.ah),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.v,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.C(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fO,x,A.aT(o,o,o,o,A.a5(B.cF,n?B.a9:B.bT,o,o,o),o,o,o,new C.cMp(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.v(o,o,o,o,o,new A.az(B.a2,B.a5,B.D,k,o,o),B.l),o,o,o,B.L6,o,o,o)
f=A.eS(B.c6,A.a([new C.I6("YouTube",B.Cw,n,o),new C.I6("TikTok",B.iL,n,o),new C.I6("Instagram",B.vI,n,o),new C.I6("Facebook",B.C9,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.by:B.fe,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.db
s=A.a5(B.jD,B.N.q(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bn:B.b5
v=A.C(A.a([f,B.an,A.at(o,B.G,!0,o,!0,B.m,o,A.au(),x,o,o,o,o,o,2,A.be(o,new A.b2(4,r,B.I),o,o,o,o,o,o,!0,new A.b2(4,q,new A.aI(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b2(4,A.n(16),D.a5Q),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.F,o,B.K,o,o,o,o)],w),B.ac,B.e,B.f,0,B.k)
f=A.iN(D.are,D.bHa,new C.cMq(d),A.jL(o,o,o,o,o,o,o,o,o,o,o,n?B.aD:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fm(A.cT(g,A.C(A.a([k,new A.N(D.ak0,v,o),new A.N(D.ak8,A.G(A.a([f,B.b0,A.c_(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cMr(d),o,o),B.Y,A.dM(D.av1,D.bHv,new C.cMs(d,x),A.bA(B.N,o,o,o,B.c,o,D.ajy,o,new A.bx(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ac,B.e,B.P,0,B.k),B.av),new A.v(o,o,h,l,i,new A.az(B.aq,B.ax,B.D,j,o,o),B.l),B.ch),o)},
$S:59}
C.cMp.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cMq.prototype={
$0(){C.d_A()
$.JG().sv(0,null)
A.ab(this.a,!1).U(null)},
$S:0}
C.cMr.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cMs.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.ab(this.a,!1).U(x)
return null},
$S:0}
C.b62.prototype={
$1(d){return C.d_B(A.K(d,y.N,y.z))},
$S:z+3}
C.b63.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b5V.prototype={
$1(d){return d.c},
$S:z+0}
C.b5W.prototype={
$1(d){return d.r},
$S:z+0}
C.b5X.prototype={
$1(d){return d.f},
$S:z+0}
C.b5Y.prototype={
$1(d){return d.at},
$S:z+0}
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
C.b5U.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b5T.prototype={
$1(d){return B.a.bG(B.p.kP(d,16),2,"0").toUpperCase()},
$S:70}
C.chE.prototype={
$0(){},
$S:0}
C.chD.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.chB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.chC.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.chF.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+7}
C.chJ.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chK.prototype={
$3(d,e,f){return new A.hX($.xS(),new C.chI(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.chI.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.zb(d,l,y.Q)
x=x==null?l:x.gk7()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.q(0.12)
t=A.n(12)
s=A.W(B.N.q(0.35),B.o,1)
r=A.a5(B.hn,B.N,l,l,18)
q=k.d
p=J.a4(m.a.d)
o=$.xS().a
n=B.i.aJ(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.v(u,l,s,t,l,l,B.l),l,l,B.cE,B.ep,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cT(t,new A.iV(1.7777777777777777,new C.Fd("fleet_master",s,!1,k.gae5(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.av),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a4(t)+".":""+J.a4(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.q(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yk(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jI(new A.N(B.AF,A.C(v,B.t,B.e,B.f,0,B.k),l),l),new A.oe(D.aiu,A.apO(new A.nf(new C.chH(u,k),J.a4(u.d),!1,!0,!0,A.uL(),l),D.bmt),l)],x))},
$S:1466}
C.chH.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qk(w,e,J.a4(x.d),new C.chG(x,w),this.b,null)},
$S:z+9}
C.chG.prototype={
$0(){return this.a.baP(this.b)},
$S:0}
C.chL.prototype={
$0(){this.a.PG()
return null},
$S:0}
C.chy.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chz.prototype={
$0(){C.SF(this.a,$.b5S)
return null},
$S:0}
C.chA.prototype={
$3(d,e,f){return A.hd(new C.chx(this.a,e))},
$S:z+10}
C.chx.prototype={
$2(d,e){var x,w=null,v=B.i.aJ(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.cr(A.C(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.q(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.an,new C.aER(v,t.a.c,t.e,t.d,new C.chu(t),new C.chv(t),new C.chw(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v1,w,w,B.X),w,w,w)},
$S:1467}
C.chu.prototype={
$0(){var x=this.a.c
x.toString
C.SF(x,$.b5S)
return null},
$S:0}
C.chv.prototype={
$1(d){var x=this.a
return x.n(new C.cht(x,d))},
$S:36}
C.cht.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.chw.prototype={
$0(){var x=this.a
return x.n(new C.chs(x))},
$S:0}
C.chs.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cty.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cka.prototype={
$3(d,e,f){return new C.B3(this.a.c,null)},
$S:z+11}
C.ckb.prototype={
$3(d,e,f){if(f==null)return e
return new A.bg(B.al,null,B.cA,B.m,A.a([new C.B3(this.a.c,null),D.a9w],y.p),null)},
$C:"$3",
$R:3,
$S:427}
C.chR.prototype={
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
x.ahF(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h5(w,"load",new C.chP(x),!1,v)
w=x.e
w.toString
A.h5(w,"error",new C.chQ(x),!1,v)
x=x.e
x.toString
return x},
$S:1468}
C.chP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chO(x))},
$S:39}
C.chO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.chQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chN(x))},
$S:39}
C.chN.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.chM.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJ8.prototype={
$1(d){var x=new A.AE([],[]).EB(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1469};(function aliases(){var x=C.acd.prototype
x.aMx=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7I.prototype,"gaoV","b8o",1)
x(v,"gb8W","b8X",1)
x(v,"gbbk","bbl",6)
w(C,"dBy","d_z",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.v3,[C.cMu,C.cMt,C.b62,C.b63,C.b5V,C.b5W,C.b5X,C.b5Y,C.b5Z,C.b6_,C.b60,C.b61,C.b5U,C.b5T,C.chF,C.chK,C.chI,C.chA,C.chv,C.cka,C.ckb,C.chR,C.chP,C.chQ,C.cJ8])
w(A.Uc,[C.cMp,C.cMq,C.cMr,C.cMs,C.chE,C.chD,C.chB,C.chC,C.chJ,C.chG,C.chL,C.chy,C.chz,C.chu,C.cht,C.chw,C.chs,C.cty,C.ctz,C.chO,C.chN,C.chM])
w(A.aD,[C.I6,C.Qk,C.axG,C.aER,C.aES,C.ayH,C.aEQ,C.azN,C.aui,C.azR,C.B3])
w(A.ai,[C.mg,C.o4])
w(A.ad,[C.Fc,C.Fb,C.a_1,C.Fd])
w(A.ae,[C.a7I,C.ayA,C.acd,C.ayC])
w(A.Ud,[C.chH,C.chx])
v(C.Fg,A.av7)
v(C.ayB,C.acd)
x(C.acd,A.e1)})()
A.d2Q(b.typeUniverse,JSON.parse('{"Fc":{"ad":[],"p":[]},"Qk":{"aD":[],"p":[]},"Fb":{"ad":[],"p":[]},"I6":{"aD":[],"p":[]},"a7I":{"ae":["Fc"]},"axG":{"aD":[],"p":[]},"ayA":{"ae":["Fb"]},"aER":{"aD":[],"p":[]},"aES":{"aD":[],"p":[]},"ayH":{"aD":[],"p":[]},"aEQ":{"aD":[],"p":[]},"azN":{"aD":[],"p":[]},"aui":{"aD":[],"p":[]},"a_1":{"ad":[],"p":[]},"B3":{"aD":[],"p":[]},"ayB":{"ae":["a_1"]},"azR":{"aD":[],"p":[]},"Fd":{"ad":[],"p":[]},"ayC":{"ae":["Fd"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ag>"),O:x("af<B>"),e:x("af<mg>"),s:x("af<m>"),p:x("af<p>"),t:x("af<Q>"),X:x("a8<mg>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("md"),_:x("z6"),k:x("mg"),N:x("m"),Y:x("bt<a9>"),W:x("dD<m>"),J:x("hX<Q>"),j:x("hX<o4?>"),E:x("x0<ct>"),q:x("R_"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a5Q=new A.aI(B.N,1.6,B.o,-1)
D.bmc=new A.ao(18,18,B.Ie,null)
D.a9w=new A.dv(B.O,null,null,D.bmc,null)
D.NV=new A.P(983224,"MaterialIcons",!1)
D.atE=new A.a6(D.NV,48,B.b7,null,null,null)
D.bsi=new A.H(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC9=new A.y("Powered off",null,D.bsi,null,null,null,null,null,null,null,null)
D.aFR=x([D.atE,B.y,D.bC9],y.p)
D.afV=new A.eU(B.X,B.e,B.P,B.j,null,B.k,null,0,D.aFR,null)
D.a9D=new A.dv(B.O,null,null,D.afV,null)
D.aa3=new A.hN(2,null,null,null,null,B.U,null,null,null,null)
D.acA=new A.B(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.ad4=new A.B(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.aeJ=new A.B(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.aij=new A.U(0,3,0,3)
D.aiu=new A.U(10,0,10,88)
D.aiO=new A.U(12,6,12,10)
D.aj1=new A.U(14,8,14,6)
D.ajy=new A.U(18,12,18,12)
D.ak0=new A.U(20,18,20,8)
D.ak8=new A.U(20,8,20,20)
D.Lw=new A.U(8,6,15,8)
D.apE=new A.P(983222,"MaterialIcons",!1)
D.ara=new A.a6(B.hn,26,B.N,null,null,null)
D.are=new A.a6(B.N1,18,null,null,null,null)
D.art=new A.a6(B.o_,14,B.U,null,null,null)
D.apU=new A.P(983420,"MaterialIcons",!1)
D.asg=new A.a6(D.apU,14,B.U,null,null,null)
D.aon=new A.P(62895,"MaterialIcons",!1)
D.ask=new A.a6(D.aon,14,B.U,null,null,null)
D.av1=new A.a6(B.m0,20,null,null,null,null)
D.avh=new A.a6(B.eZ,16,null,null,null,null)
D.aHR=x([B.aj,B.Z],y.O)
D.Pd=new A.az(B.aq,B.ax,B.D,D.aHR,null,null)
D.bga=new A.aO("NGMY OS","14.2.1")
D.bfl=new A.aO("VirtualDroid","13.8.4")
D.bfk=new A.aO("NGMY OS","15.0.0")
D.bfS=new A.aO("VirtualDroid","14.1.2")
D.bfj=new A.aO("NGMY Tab OS","12.9.7")
D.bfi=new A.aO("NGMY OS","13.5.3")
D.bf9=new A.aO("VirtualDroid","15.2.0")
D.bfA=new A.aO("NGMY OS","14.8.1")
D.bfX=new A.aO("NGMY Tab OS","13.2.4")
D.bgj=new A.aO("VirtualDroid","12.6.9")
D.bf6=new A.aO("NGMY OS","16.0.1")
D.beZ=new A.aO("VirtualDroid","14.9.0")
D.bg4=new A.aO("NGMY Tab OS","14.0.3")
D.bfr=new A.aO("NGMY OS","13.1.8")
D.bf5=new A.aO("VirtualDroid","13.4.5")
D.bfh=new A.aO("NGMY OS","15.3.2")
D.bfY=new A.aO("NGMY Tab OS","12.4.1")
D.bg6=new A.aO("VirtualDroid","16.1.0")
D.bfz=new A.aO("NGMY OS","14.4.6")
D.bgb=new A.aO("VirtualDroid","15.0.8")
D.aHt=x([D.bga,D.bfl,D.bfk,D.bfS,D.bfj,D.bfi,D.bf9,D.bfA,D.bfX,D.bgj,D.bf6,D.beZ,D.bg4,D.bfr,D.bf5,D.bfh,D.bfY,D.bg6,D.bfz,D.bgb],A.bm("af<+(m,m)>"))
D.bik=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhT=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhO=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhX=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhK=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhZ=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bim=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhL=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhS=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bi0=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhJ=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bie=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bib=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhR=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bi8=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bi7=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhI=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhW=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bi5=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bia=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qc=x([D.bik,D.bhT,D.bhO,D.bhX,D.bhK,D.bhZ,D.bim,D.bhL,D.bhS,D.bi0,D.bhJ,D.bie,D.bib,D.bhR,D.bi8,D.bi7,D.bhI,D.bhW,D.bi5,D.bia],A.bm("af<+(m,m,a9,a9,m)>"))
D.aMo=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.WW=new C.Fg(0,"youtube")
D.WX=new C.Fg(1,"tiktok")
D.Ej=new C.Fg(2,"instagram")
D.WY=new C.Fg(3,"facebook")
D.bb1=new C.Fg(4,"other")
D.blP=new A.ao(3,null,null,null)
D.bmt=new A.iL(4,10,8,0.52,null)
D.bD3=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpr=new A.aP(D.bD3,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsC=new A.H(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBs=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDw=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHa=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHv=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQj=new C.azN(null)})();(function staticFields(){$.d_y=20
$.ami=null
$.b5S=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFI","xS",()=>A.P9(0))
x($,"dFJ","JG",()=>A.P9(null))})()};
(a=>{a["YJHxCbBNbjB/S5C393hOuc62zZM="]=a.current})($__dart_deferred_initializers__);