((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCk(d,e){A.ab(d,!1).cL(A.eo(new C.cMg(e),!0,null,y.H))},
SB(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SB=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JF()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.W),u)
x=3
return A.b(A.df(B.B,null,new C.cMf(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SB)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dkM(s)
if(r==null){d.E(y.q).f.O(D.bpk)
x=1
break}x=4
return A.b(A.bQ(B.fh,null,y.H),$async$SB)
case 4:if(d.e==null){x=1
break}o=B.p.aO(e,1,999)
$.d_l=o
q=C.dkH(o)
o=$.xR()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cPQ(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SB,w)},
d_o(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fe(d){return C.dkP(d)},
dkP(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
l=A.ee(l,new C.b6_(),l.$ti.k("L.E"),y.k)
k=A.S(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b60(),k),k.k("L.E"))
r=j
if(J.a4(r)>=20){v=r
x=1
break}q=C.d_p(r)
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
case 19:n=C.d_o(A.K(o,y.N,y.z))
m=C.d_p(A.a([n],y.e))
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
case 18:case 14:r=C.dkN()
x=22
return A.b(C.Fd(a2,r),$async$Fe)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fe,w)},
d_p(d){var x=A.R(d).k("z<1,m>"),w=new A.z(d,new C.b5S(),x).eu(0),v=new A.z(d,new C.b5T(),x).eu(0),u=new A.z(d,new C.b5U(),x).eu(0),t=new A.z(d,new C.b5V(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cPR(null,r,v,u,w,t));++r}return s},
amf(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amf=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(d),$async$amf)
case 3:u=f
t=y.N
s=J.ck(u)
r=s.dd(u,new C.b5W(),t).eu(0)
q=s.dd(u,new C.b5X(),t).eu(0)
p=s.dd(u,new C.b5Y(),t).eu(0)
o=s.dd(u,new C.b5Z(),t).eu(0)
n=C.cPR(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fd(d,u),$async$amf)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amf,w)},
Fd(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fd=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$Fd)
case 2:v=g
u=B.a.i(d)
t=J.b5(e,new C.b5R(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.am("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.u.aj(t,null)),$async$Fd)
case 3:return A.f(null,w)}})
return A.h($async$Fd,w)},
dkN(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dW(20,y.k)
for(x=0;x<20;++x)r[x]=C.cPR(x,x,u,t,v,s)
return r},
cPR(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jV(),i=d==null,h=D.Qb[B.p.ao(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qb[B.p.ao(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bA(256)
o=new A.z(q,new C.b5Q(),A.R(q).k("z<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bA(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bG(B.p.kO(j.bA(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.ao(e,20)
l=D.aMh[x]
k=D.aHm[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bA(99999),"Device "+B.a.bG(B.p.q(e+1),2,"0"),v,l,C.dkO(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dkO(d,e){var x,w=J.dW(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bG(B.p.kO(d.bA(256),16),2,"0")
return B.d.f9(w)},
cMg:function cMg(d){this.a=d},
cMf:function cMf(d,e){this.a=d
this.b=e},
cMb:function cMb(d){this.a=d},
cMc:function cMc(d){this.a=d},
cMd:function cMd(d){this.a=d},
cMe:function cMe(d,e){this.a=d
this.b=e},
I5:function I5(d,e,f,g){var _=this
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
b6_:function b6_(){},
b60:function b60(){},
b5S:function b5S(){},
b5T:function b5T(){},
b5U:function b5U(){},
b5V:function b5V(){},
b5W:function b5W(){},
b5X:function b5X(){},
b5Y:function b5Y(){},
b5Z:function b5Z(){},
b5R:function b5R(){},
b5Q:function b5Q(){},
Fb:function Fb(d,e){this.c=d
this.a=e},
a7E:function a7E(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
chw:function chw(){},
chv:function chv(d,e){this.a=d
this.b=e},
cht:function cht(d){this.a=d},
chu:function chu(d,e){this.a=d
this.b=e},
chx:function chx(d){this.a=d},
chB:function chB(d){this.a=d},
chC:function chC(d,e){this.a=d
this.b=e},
chA:function chA(d,e,f){this.a=d
this.b=e
this.c=f},
chz:function chz(d,e){this.a=d
this.b=e},
chy:function chy(d,e){this.a=d
this.b=e},
chD:function chD(d){this.a=d},
Qg:function Qg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axD:function axD(d,e){this.c=d
this.a=e},
Fa:function Fa(d,e){this.c=d
this.a=e},
ayx:function ayx(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
chq:function chq(d){this.a=d},
chr:function chr(d){this.a=d},
chs:function chs(d){this.a=d},
chp:function chp(d,e){this.a=d
this.b=e},
chm:function chm(d){this.a=d},
chn:function chn(d){this.a=d},
chl:function chl(d,e){this.a=d
this.b=e},
cho:function cho(d){this.a=d},
chk:function chk(d){this.a=d},
aEO:function aEO(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEP:function aEP(d,e,f){this.c=d
this.d=e
this.a=f},
ayE:function ayE(d,e){this.c=d
this.a=e},
aEN:function aEN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctk:function ctk(d){this.a=d},
ctl:function ctl(d){this.a=d},
azK:function azK(d){this.a=d},
auf:function auf(d,e){this.c=d
this.a=e},
dkM(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o4(x,C.b5O(u,!1),D.WV,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dkL(w)
if(t!=null)return new C.o4(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.WW,"TikTok",q,q)
s=C.dkK(x,w)
if(s!=null)return s
r=C.dkJ(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o4(x,x,D.baV,"Video",q,q)
return q},
dkK(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/reel/"+x+u,D.Eh,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/p/"+x+u,D.Eh,t,v,v)}return v},
dkJ(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o4(d,"https://www.facebook.com/plugins/video.php?href="+A.f5(2,d,B.aJ,!1)+"&show_text=false&width=734",D.WX,"Facebook",null,null)},
dkL(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
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
ZZ:function ZZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayy:function ayy(d,e){var _=this
_.d=$
_.cO$=d
_.aW$=e
_.c=_.a=null},
azO:function azO(d,e){this.c=d
this.a=e},
ck2:function ck2(d){this.a=d},
ck3:function ck3(d){this.a=d},
B2:function B2(d,e){this.c=d
this.a=e},
ac8:function ac8(){},
dB7(d){var x=window
x.toString
A.h4(x,"message",new C.cIV(d),!1,y._)},
Fc:function Fc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayz:function ayz(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
chJ:function chJ(d){this.a=d},
chH:function chH(d){this.a=d},
chG:function chG(d){this.a=d},
chI:function chI(d){this.a=d},
chF:function chF(d){this.a=d},
chE:function chE(d){this.a=d},
cIV:function cIV(d){this.a=d},
b5O(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_i(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d_j(d){var x=A.by(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.by(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_k(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dkG(d,e,f){var x=C.d_i(d)
if(x!=null){if(f)return C.d_k(x,e,!0)
return C.d_j(C.b5O(x,e))}return C.d_j(d)},
dkH(d){if(d<=4)return 0
return B.p.b0(d-1,4)*4},
dkI(d){var x
if($.JF().a==null)return!1
x=$.xR().a
return d>=x&&d<x+4},
d_n(){var x=$.ame
if(x!=null)x.aa(0)
$.ame=null
$.xR().sv(0,0)},
d_m(){var x,w,v,u=$.JF()
if(u.a==null)return
x=$.ame
if(x!=null)x.aa(0)
w=$.d_l
if(w<=4){u=u.a
u.toString
C.cPQ(u)
return}x=$.xR()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cPQ(u)},
cPQ(d){var x=$.ame
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
default:x=null}$.ame=A.dq(A.d7(0,0,0,0,x),C.dBi())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I5.prototype={
C(d){var x=null,w=this.e,v=w?B.aj:B.c,u=A.n(20),t=A.W(B.N.t(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.et,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dP,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.P,0,x,x),B.h,x,x,new A.v(v,x,t,u,x,x,B.l),x,x,x,B.fy,x,x,x)}}
C.mg.prototype={
ah(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fb.prototype={
T(){return new C.a7E(A.a([],y.e))},
git(){return this.c}}
C.a7E.prototype={
Z(){var x=this
x.a6()
$.xR().af(0,x.gaoU())
C.dB7(x.gb8U())
x.PX()},
b8m(){if(this.c!=null)this.n(new C.chw())},
b8V(){C.d_m()},
l(){$.xR().V(0,this.gaoU())
C.d_n()
$.JF().sv(0,null)
this.a3()},
PX(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PX=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(u.a.c),$async$PX)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chv(u,t))
$.b5P=J.a4(t)
case 1:return A.f(v,w)}})
return A.h($async$PX,w)},
PF(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PF=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cht(u))
x=3
return A.b(C.amf(u.a.c),$async$PF)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chu(u,t))
$.b5P=J.a4(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PF,w)},
baN(d){var x=this.c
x.toString
A.ab(x,!1).cL(A.eo(new C.chx(d),!1,null,y.H))},
bbj(){var x=this.c
x.toString
return C.SB(x,J.a4(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.Q,u=v?B.du:B.da,t=A.aT(w,w,w,w,B.CD,w,w,w,new C.chB(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a4(x.d)+")",r=y.p
s=A.G(A.a([t,A.H(new A.zD(A.G(A.a([A.H(new A.N(B.hU,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aW(!1,w,!0,new A.N(B.aG,A.a5(B.f_,B.N,w,w,28),w),B.bN,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbi(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cV(!0,A.C(A.a([new A.N(D.Lu,s,w),A.H(x.e?B.jb:new A.hW($.JF(),new C.chC(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.cq(w,u,t,w,!1,!1,A.aho(B.N,B.yJ,B.nY,D.bDl,x.e?w:new C.chD(x)),w)}}
C.Qg.prototype={
b6t(d){var x,w=$.xR().a,v=this.d
if(C.dkI(v)){v=this.c.a
x=d.gaBK()
return new C.Fc(v+"_mini",d.gaBK(),!0,d.gae5(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.ZZ(d,!0,!0,"Fold "+(B.p.b0(v,4)+1)+"/"+B.p.b0(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.o,1),s=A.a([new A.ag(0,B.x,B.N.t(0.18),B.ci,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aW(!1,v,!0,A.C(A.a([A.H(A.w(w,A.cT(r,A.iA(A.C(A.a([new C.axD(q,w),A.H(p!=null?x.b6t(p):A.w(w,A.C(A.a([A.a5(B.hn,B.lw,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u0,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vN,B.N.t(0.85),w,w,9),D.blI,A.j("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ap,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aif,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,w,w,new A.v(w,w,t,u,s,D.Pb,B.l),w,w,w,B.eI,w,w,w),1),B.ak,A.j(q.b,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.N.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axD.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.H(A.j(B.d.gar(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.nX,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lj,x,x,x)}}
C.Fa.prototype={
T(){return new C.ayx()}}
C.ayx.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.Q,v=w?B.du:B.da,u=A.aT(x,x,x,x,B.CD,x,x,x,new C.chq(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cq(x,v,A.cV(!0,A.C(A.a([new A.N(D.Lu,A.G(A.a([u,A.H(new A.zD(A.G(A.a([A.H(new A.N(B.hU,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.v,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aW(!1,x,!0,new A.N(B.aG,A.a5(B.f_,B.N,x,x,28),x),B.bN,!0,x,x,x,x,x,x,x,x,x,x,x,new C.chr(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.H(new A.hW($.JF(),new C.chs(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aEO.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.x,B.N.t(0.35),B.eM,28),new A.ag(0,B.x,B.q.t(0.45),B.cI,18)],y.V),p=A.W(B.c.t(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fc(w+"_full",v,!1,x.gae5(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayE(u.r,t)}else x=new C.auf(n,t)
else x=D.bQ9
return A.w(t,A.cT(o,A.iA(A.C(A.a([new C.aEP(n,m,t),A.H(x,1),new C.aEN(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.v(t,t,p,r,q,D.Pb,B.l),t,s*2.05,t,B.b9,t,t,s)}}
C.aEP.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.eQ(s)
s=A.i2(s)
x=new A.db(r,s)
w=x.gFi()===0?12:x.gFi()
s=B.a.bG(B.p.q(s),2,"0")
r=(r<12?B.em:B.fU)===B.em?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l2,t,t,t),B.b0,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bh,D.asd,B.e8,D.arq,B.e8,D.ash],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a5(B.Cw,B.N.t(0.9),t,t,12),B.e8,A.H(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.C(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aiZ,t,t,t)}}
C.ayE.prototype={
C(d){var x=null
return A.w(x,A.b4(A.C(A.a([A.a5(B.vD,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ah,A.eG(D.avd,D.bBi,this.c,A.ei(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aJ(B.N.t(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.P,0,B.k),x,x,x),B.h,B.u0,x,x,x,x,x,x,x,x,1/0)}}
C.aEN.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoO(B.NS,"YouTube",t===0,s,new C.ctk(v))
t=v.aoO(B.jy,"Device",t===1,s,new C.ctl(v))
x=s?"Power off":"Power on"
w=s?D.NT:D.apB
return A.w(u,A.G(A.a([r,B.Y,t,B.b0,A.aT(u,u,u,u,A.a5(w,s?B.b2:B.dr,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dh)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiK,u,u,u)},
aoO(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b7
else x=f?B.N:B.a9
w=f&&g?B.N.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.H(A.aU(!1,B.M,!0,v,A.aW(!1,A.n(10),!0,new A.N(B.kA,A.C(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.P,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azK.prototype={
C(d){return D.a9D}}
C.auf.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.kZ,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.en(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.X,!1)},
pX(d,e){var x=null
return new A.N(B.c3,A.C(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bV,A.j(e,x,x,x,x,D.bst,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Ff.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o4.prototype={
gaBK(){var x=this.f
if(x!=null&&x.length!==0)return C.b5O(x,!0)
return this.b},
gae5(){var x=this.c
return x===D.WV||x===D.WW||x===D.Eh||x===D.WX}}
C.ZZ.prototype={
T(){return new C.ayy(null,null)}}
C.ayy.prototype={
Z(){this.a6()
var x=A.bG(null,B.q_,null,1,null,this)
x.mS(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMv()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fl(v,new A.v(v,v,v,v,v,new A.aA(B.e0,B.co,B.G,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.hh,r,v)
x=B.c.t(0.92)
s=A.b4(new A.dS(new A.bi(r,new A.bu(0.72,1,s),s.k("bi<bq.T>")),!1,A.a5(B.hn,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.azO(u,v),t,s,A.bC(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.v,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.v(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bC(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bC(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bg(B.al,v,B.cz,B.m,u,v)}}
C.azO.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k6(v,new C.ck2(this),B.bm,!0,x,x,new C.ck3(this),x)
return new C.B2(w,x)}}
C.B2.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.u8,B.Ir],y.O),B.hn)
break
case 1:x=new A.aN(A.a([B.u0,D.ad4],y.O),B.hZ)
break
case 2:x=new A.aN(A.a([D.aeF,D.acA],y.O),B.vG)
break
case 3:x=new A.aN(A.a([B.Z,B.dI],y.O),B.C8)
break
case 4:x=new A.aN(A.a([B.a8,B.aj],y.O),B.m2)
break
default:x=v}w=x.a
return A.w(v,A.b4(A.a5(x.b,B.N.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.v(v,v,v,v,v,new A.aA(B.at,B.az,B.G,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.ac8.prototype={
l(){var x=this,w=x.aW$
if(w!=null)w.V(0,x.gdE())
x.aW$=null
x.a3()},
bq(){this.bH()
this.bD()
this.dF()}}
C.Fc.prototype={
T(){return new C.ayz()}}
C.ayz.prototype={
ahF(d,e){var x,w,v=this,u="mute=1",t=C.d_i(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_k(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b5O(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dkG(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a6()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.JG()
$.oD().u_(x,new C.chJ(v),!0)}catch(w){v.r=!0
v.f=!1}},
aQ(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.chE(w))
x=w.e
x.toString
w.ahF(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.iA(A.b4(A.a5(B.O2,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai0(u,B.ru,x)],y.p)
if(v.f)x.push(A.iA(A.b4(new A.ao(w,w,D.aa3,u),u,u,u),B.bT,!0))
return new A.bg(B.al,u,B.cz,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","~()","Fb(T)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","av<~>()","Fa(T)","hW<P>(T,o4?,q?)","Qg(T,P)","tf(T,o4?,q?)","B2(T,ai,dh?)"])
C.cMg.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+2}
C.cMf.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.Q,m=A.ax(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cr,B.Z],k):A.a([B.c,B.ab],k),i=A.a([new A.ag(0,B.x,B.N.t(0.22),B.eM,32)],y.V),h=A.W(n?B.bn:B.N.t(0.18),B.o,1),g=A.n(28),f=B.N.t(n?0.35:0.14)
k=A.a([f,B.R.t(n?0.18:0.08)],k)
f=A.w(o,D.ar7,B.h,o,o,new A.v(B.N.t(0.18),o,A.W(B.N.t(0.45),B.o,1),o,o,o,B.ai),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.v,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.H(A.C(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aT,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fM,x,A.aT(o,o,o,o,A.a5(B.cE,n?B.a9:B.bT,o,o,o),o,o,o,new C.cMb(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.v(o,o,o,o,o,new A.aA(B.a3,B.a6,B.G,k,o,o),B.l),o,o,o,B.L4,o,o,o)
f=A.eT(B.c6,A.a([new C.I5("YouTube",B.Cv,n,o),new C.I5("TikTok",B.hZ,n,o),new C.I5("Instagram",B.vG,n,o),new C.I5("Facebook",B.C8,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bz:B.ff,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.aj:B.da
s=A.a5(B.jz,B.N.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bn:B.b5
v=A.C(A.a([f,B.an,A.at(o,B.F,!0,o,!0,B.m,o,A.au(),x,o,o,o,o,o,2,A.be(o,new A.b3(4,r,B.I),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aJ(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a5Q),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.E,o,B.K,o,o,o,o)],w),B.ac,B.e,B.f,0,B.k)
f=A.iN(D.arb,D.bH0,new C.cMc(d),A.jL(o,o,o,o,o,o,o,o,o,o,o,n?B.aE:B.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fl(A.cT(g,A.C(A.a([k,new A.N(D.ajZ,v,o),new A.N(D.ak5,A.G(A.a([f,B.b0,A.c_(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cMd(d),o,o),B.Y,A.dM(D.auY,D.bHl,new C.cMe(d,x),A.bA(B.N,o,o,o,B.c,o,D.ajv,o,new A.bx(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ac,B.e,B.P,0,B.k),B.av),new A.v(o,o,h,l,i,new A.aA(B.at,B.az,B.G,j,o,o),B.l),B.ch),o)},
$S:59}
C.cMb.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cMc.prototype={
$0(){C.d_n()
$.JF().sv(0,null)
A.ab(this.a,!1).U(null)},
$S:0}
C.cMd.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cMe.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.ab(this.a,!1).U(x)
return null},
$S:0}
C.b6_.prototype={
$1(d){return C.d_o(A.K(d,y.N,y.z))},
$S:z+3}
C.b60.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b5S.prototype={
$1(d){return d.c},
$S:z+0}
C.b5T.prototype={
$1(d){return d.r},
$S:z+0}
C.b5U.prototype={
$1(d){return d.f},
$S:z+0}
C.b5V.prototype={
$1(d){return d.at},
$S:z+0}
C.b5W.prototype={
$1(d){return d.c},
$S:z+0}
C.b5X.prototype={
$1(d){return d.r},
$S:z+0}
C.b5Y.prototype={
$1(d){return d.f},
$S:z+0}
C.b5Z.prototype={
$1(d){return d.at},
$S:z+0}
C.b5R.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b5Q.prototype={
$1(d){return B.a.bG(B.p.kO(d,16),2,"0").toUpperCase()},
$S:71}
C.chw.prototype={
$0(){},
$S:0}
C.chv.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cht.prototype={
$0(){return this.a.e=!0},
$S:0}
C.chu.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.chx.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+7}
C.chB.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chC.prototype={
$3(d,e,f){return new A.hW($.xR(),new C.chA(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.chA.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.za(d,l,y.Q)
x=x==null?l:x.gk7()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.t(0.12)
t=A.n(12)
s=A.W(B.N.t(0.35),B.o,1)
r=A.a5(B.hn,B.N,l,l,18)
q=k.d
p=J.a4(m.a.d)
o=$.xR().a
n=B.i.aO(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.H(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.v(u,l,s,t,l,l,B.l),l,l,B.cD,B.eo,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cT(t,new A.iV(1.7777777777777777,new C.Fc("fleet_master",s,!1,k.gae5(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.av),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a4(t)+".":""+J.a4(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yj(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jI(new A.N(B.AE,A.C(v,B.t,B.e,B.f,0,B.k),l),l),new A.oe(D.aiq,A.apL(new A.nf(new C.chz(u,k),J.a4(u.d),!1,!0,!0,A.uI(),l),D.bmm),l)],x))},
$S:1461}
C.chz.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qg(w,e,J.a4(x.d),new C.chy(x,w),this.b,null)},
$S:z+9}
C.chy.prototype={
$0(){return this.a.baN(this.b)},
$S:0}
C.chD.prototype={
$0(){this.a.PF()
return null},
$S:0}
C.chq.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chr.prototype={
$0(){C.SB(this.a,$.b5P)
return null},
$S:0}
C.chs.prototype={
$3(d,e,f){return A.hd(new C.chp(this.a,e))},
$S:z+10}
C.chp.prototype={
$2(d,e){var x,w=null,v=B.i.aO(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.cr(A.C(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.an,new C.aEO(v,t.a.c,t.e,t.d,new C.chm(t),new C.chn(t),new C.cho(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v_,w,w,B.X),w,w,w)},
$S:1462}
C.chm.prototype={
$0(){var x=this.a.c
x.toString
C.SB(x,$.b5P)
return null},
$S:0}
C.chn.prototype={
$1(d){var x=this.a
return x.n(new C.chl(x,d))},
$S:34}
C.chl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cho.prototype={
$0(){var x=this.a
return x.n(new C.chk(x))},
$S:0}
C.chk.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctk.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctl.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ck2.prototype={
$3(d,e,f){return new C.B2(this.a.c,null)},
$S:z+11}
C.ck3.prototype={
$3(d,e,f){if(f==null)return e
return new A.bg(B.al,null,B.cz,B.m,A.a([new C.B2(this.a.c,null),D.a9w],y.p),null)},
$C:"$3",
$R:3,
$S:428}
C.chJ.prototype={
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
A.h4(w,"load",new C.chH(x),!1,v)
w=x.e
w.toString
A.h4(w,"error",new C.chI(x),!1,v)
x=x.e
x.toString
return x},
$S:1463}
C.chH.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chG(x))},
$S:39}
C.chG.prototype={
$0(){return this.a.f=!1},
$S:0}
C.chI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chF(x))},
$S:39}
C.chF.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.chE.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cIV.prototype={
$1(d){var x=new A.AD([],[]).EA(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1464};(function aliases(){var x=C.ac8.prototype
x.aMv=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7E.prototype,"gaoU","b8m",1)
x(v,"gb8U","b8V",1)
x(v,"gbbi","bbj",6)
w(C,"dBi","d_m",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.v_,[C.cMg,C.cMf,C.b6_,C.b60,C.b5S,C.b5T,C.b5U,C.b5V,C.b5W,C.b5X,C.b5Y,C.b5Z,C.b5R,C.b5Q,C.chx,C.chC,C.chA,C.chs,C.chn,C.ck2,C.ck3,C.chJ,C.chH,C.chI,C.cIV])
w(A.U8,[C.cMb,C.cMc,C.cMd,C.cMe,C.chw,C.chv,C.cht,C.chu,C.chB,C.chy,C.chD,C.chq,C.chr,C.chm,C.chl,C.cho,C.chk,C.ctk,C.ctl,C.chG,C.chF,C.chE])
w(A.aD,[C.I5,C.Qg,C.axD,C.aEO,C.aEP,C.ayE,C.aEN,C.azK,C.auf,C.azO,C.B2])
w(A.ai,[C.mg,C.o4])
w(A.ad,[C.Fb,C.Fa,C.ZZ,C.Fc])
w(A.af,[C.a7E,C.ayx,C.ac8,C.ayz])
w(A.U9,[C.chz,C.chp])
v(C.Ff,A.av4)
v(C.ayy,C.ac8)
x(C.ac8,A.e1)})()
A.d2C(b.typeUniverse,JSON.parse('{"Fb":{"ad":[],"q":[]},"Qg":{"aD":[],"q":[]},"Fa":{"ad":[],"q":[]},"I5":{"aD":[],"q":[]},"a7E":{"af":["Fb"]},"axD":{"aD":[],"q":[]},"ayx":{"af":["Fa"]},"aEO":{"aD":[],"q":[]},"aEP":{"aD":[],"q":[]},"ayE":{"aD":[],"q":[]},"aEN":{"aD":[],"q":[]},"azK":{"aD":[],"q":[]},"auf":{"aD":[],"q":[]},"ZZ":{"ad":[],"q":[]},"B2":{"aD":[],"q":[]},"ayy":{"af":["ZZ"]},"azO":{"aD":[],"q":[]},"Fc":{"ad":[],"q":[]},"ayz":{"af":["Fc"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<ag>"),O:x("ae<B>"),e:x("ae<mg>"),s:x("ae<m>"),p:x("ae<q>"),t:x("ae<P>"),X:x("a8<mg>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),w:x("md"),_:x("z5"),k:x("mg"),N:x("m"),Y:x("bu<aa>"),W:x("dD<m>"),J:x("hW<P>"),j:x("hW<o4?>"),E:x("wX<ct>"),q:x("QW"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a5Q=new A.aJ(B.N,1.6,B.o,-1)
D.bm5=new A.ao(18,18,B.Ic,null)
D.a9w=new A.dA(B.O,null,null,D.bm5,null)
D.NT=new A.O(983224,"MaterialIcons",!1)
D.atA=new A.a6(D.NT,48,B.b7,null,null,null)
D.bs9=new A.I(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC_=new A.y("Powered off",null,D.bs9,null,null,null,null,null,null,null,null)
D.aFK=x([D.atA,B.w,D.bC_],y.p)
D.afR=new A.eU(B.X,B.e,B.P,B.j,null,B.k,null,0,D.aFK,null)
D.a9D=new A.dA(B.O,null,null,D.afR,null)
D.aa3=new A.hM(2,null,null,null,null,B.U,null,null,null,null)
D.acA=new A.B(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.ad4=new A.B(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.aeF=new A.B(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.aif=new A.U(0,3,0,3)
D.aiq=new A.U(10,0,10,88)
D.aiK=new A.U(12,6,12,10)
D.aiZ=new A.U(14,8,14,6)
D.ajv=new A.U(18,12,18,12)
D.ajZ=new A.U(20,18,20,8)
D.ak5=new A.U(20,8,20,20)
D.Lu=new A.U(8,6,15,8)
D.apB=new A.O(983222,"MaterialIcons",!1)
D.ar7=new A.a6(B.hn,26,B.N,null,null,null)
D.arb=new A.a6(B.N_,18,null,null,null,null)
D.arq=new A.a6(B.nX,14,B.U,null,null,null)
D.apR=new A.O(983420,"MaterialIcons",!1)
D.asd=new A.a6(D.apR,14,B.U,null,null,null)
D.aok=new A.O(62895,"MaterialIcons",!1)
D.ash=new A.a6(D.aok,14,B.U,null,null,null)
D.auY=new A.a6(B.lZ,20,null,null,null,null)
D.avd=new A.a6(B.f_,16,null,null,null,null)
D.aHK=x([B.aj,B.Z],y.O)
D.Pb=new A.aA(B.at,B.az,B.G,D.aHK,null,null)
D.bg3=new A.aN("NGMY OS","14.2.1")
D.bfe=new A.aN("VirtualDroid","13.8.4")
D.bfd=new A.aN("NGMY OS","15.0.0")
D.bfL=new A.aN("VirtualDroid","14.1.2")
D.bfc=new A.aN("NGMY Tab OS","12.9.7")
D.bfb=new A.aN("NGMY OS","13.5.3")
D.bf2=new A.aN("VirtualDroid","15.2.0")
D.bft=new A.aN("NGMY OS","14.8.1")
D.bfQ=new A.aN("NGMY Tab OS","13.2.4")
D.bgc=new A.aN("VirtualDroid","12.6.9")
D.bf_=new A.aN("NGMY OS","16.0.1")
D.beS=new A.aN("VirtualDroid","14.9.0")
D.bfY=new A.aN("NGMY Tab OS","14.0.3")
D.bfk=new A.aN("NGMY OS","13.1.8")
D.beZ=new A.aN("VirtualDroid","13.4.5")
D.bfa=new A.aN("NGMY OS","15.3.2")
D.bfR=new A.aN("NGMY Tab OS","12.4.1")
D.bg_=new A.aN("VirtualDroid","16.1.0")
D.bfs=new A.aN("NGMY OS","14.4.6")
D.bg4=new A.aN("VirtualDroid","15.0.8")
D.aHm=x([D.bg3,D.bfe,D.bfd,D.bfL,D.bfc,D.bfb,D.bf2,D.bft,D.bfQ,D.bgc,D.bf_,D.beS,D.bfY,D.bfk,D.beZ,D.bfa,D.bfR,D.bg_,D.bfs,D.bg4],A.bm("ae<+(m,m)>"))
D.bid=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhM=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhH=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhQ=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhD=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhS=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bif=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhE=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhL=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhU=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhC=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bi7=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bi4=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhK=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bi1=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bi0=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhB=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhP=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bhZ=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bi3=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qb=x([D.bid,D.bhM,D.bhH,D.bhQ,D.bhD,D.bhS,D.bif,D.bhE,D.bhL,D.bhU,D.bhC,D.bi7,D.bi4,D.bhK,D.bi1,D.bi0,D.bhB,D.bhP,D.bhZ,D.bi3],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aMh=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.WV=new C.Ff(0,"youtube")
D.WW=new C.Ff(1,"tiktok")
D.Eh=new C.Ff(2,"instagram")
D.WX=new C.Ff(3,"facebook")
D.baV=new C.Ff(4,"other")
D.blI=new A.ao(3,null,null,null)
D.bmm=new A.iL(4,10,8,0.52,null)
D.bCT=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpk=new A.aP(D.bCT,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bst=new A.I(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBi=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDl=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bH0=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHl=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQ9=new C.azK(null)})();(function staticFields(){$.d_l=20
$.ame=null
$.b5P=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFs","xR",()=>A.P5(0))
x($,"dFt","JF",()=>A.P5(null))})()};
(a=>{a["YpBWID6j85f20sdDlKK+091OFRg="]=a.current})($__dart_deferred_initializers__);