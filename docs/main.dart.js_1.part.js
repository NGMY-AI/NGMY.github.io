((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCd(d,e){A.a9(d,!1).cM(A.ep(new C.cMb(e),!0,null,y.H))},
SA(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SA=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JF()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.ac(new A.aM(o,B.a0,B.W),u)
x=3
return A.b(A.df(B.B,null,new C.cMa(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$SA)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dkF(s)
if(r==null){d.E(y.q).f.O(D.bpl)
x=1
break}x=4
return A.b(A.bQ(B.ff,null,y.H),$async$SA)
case 4:if(d.e==null){x=1
break}o=B.p.aO(e,1,999)
$.d_d=o
q=C.dkA(o)
o=$.xP()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cPJ(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SA,w)},
d_g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fd(d){return C.dkI(d)},
dkI(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fd=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Fd)
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
l=A.ee(l,new C.b62(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b63(),k),k.k("L.E"))
r=j
if(J.a4(r)>=20){v=r
x=1
break}q=C.d_h(r)
x=12
return A.b(C.Fc(a2,q),$async$Fd)
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
case 19:n=C.d_g(A.K(o,y.N,y.z))
m=C.d_h(A.a([n],y.e))
x=21
return A.b(C.Fc(a2,m),$async$Fd)
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
case 18:case 14:r=C.dkG()
x=22
return A.b(C.Fc(a2,r),$async$Fd)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fd,w)},
d_h(d){var x=A.R(d).k("A<1,m>"),w=new A.A(d,new C.b5V(),x).eu(0),v=new A.A(d,new C.b5W(),x).eu(0),u=new A.A(d,new C.b5X(),x).eu(0),t=new A.A(d,new C.b5Y(),x).eu(0),s=A.be(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cPK(null,r,v,u,w,t));++r}return s},
amh(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amh=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fd(d),$async$amh)
case 3:u=f
t=y.N
s=J.ck(u)
r=s.dd(u,new C.b5Z(),t).eu(0)
q=s.dd(u,new C.b6_(),t).eu(0)
p=s.dd(u,new C.b60(),t).eu(0)
o=s.dd(u,new C.b61(),t).eu(0)
n=C.cPK(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fc(d,u),$async$amh)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amh,w)},
Fc(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fc=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$Fc)
case 2:v=g
u=B.a.i(d)
t=J.b5(e,new C.b5U(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.am("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.u.aj(t,null)),$async$Fc)
case 3:return A.f(null,w)}})
return A.h($async$Fc,w)},
dkG(){var x,w=y.N,v=A.aZ(w),u=A.aZ(w),t=A.aZ(w),s=A.aZ(w),r=J.dW(20,y.k)
for(x=0;x<20;++x)r[x]=C.cPK(x,x,u,t,v,s)
return r},
cPK(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jV(),i=d==null,h=D.Qb[B.p.ao(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qb[B.p.ao(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bA(256)
o=new A.A(q,new C.b5T(),A.R(q).k("A<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bA(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bH(B.p.kN(j.bA(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.ao(e,20)
l=D.aMk[x]
k=D.aHo[x]
return new C.mh("vd_"+1000*Date.now()+"_"+e+"_"+j.bA(99999),"Device "+B.a.bH(B.p.q(e+1),2,"0"),v,l,C.dkH(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Y())},
dkH(d,e){var x,w=J.dW(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bH(B.p.kN(d.bA(256),16),2,"0")
return B.d.f9(w)},
cMb:function cMb(d){this.a=d},
cMa:function cMa(d,e){this.a=d
this.b=e},
cM6:function cM6(d){this.a=d},
cM7:function cM7(d){this.a=d},
cM8:function cM8(d){this.a=d},
cM9:function cM9(d,e){this.a=d
this.b=e},
I5:function I5(d,e,f,g){var _=this
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
Fa:function Fa(d,e){this.c=d
this.a=e},
a7E:function a7E(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
chr:function chr(){},
chq:function chq(d,e){this.a=d
this.b=e},
cho:function cho(d){this.a=d},
chp:function chp(d,e){this.a=d
this.b=e},
chs:function chs(d){this.a=d},
chw:function chw(d){this.a=d},
chx:function chx(d,e){this.a=d
this.b=e},
chv:function chv(d,e,f){this.a=d
this.b=e
this.c=f},
chu:function chu(d,e){this.a=d
this.b=e},
cht:function cht(d,e){this.a=d
this.b=e},
chy:function chy(d){this.a=d},
Qg:function Qg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axF:function axF(d,e){this.c=d
this.a=e},
F9:function F9(d,e){this.c=d
this.a=e},
ayz:function ayz(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
chl:function chl(d){this.a=d},
chm:function chm(d){this.a=d},
chn:function chn(d){this.a=d},
chk:function chk(d,e){this.a=d
this.b=e},
chh:function chh(d){this.a=d},
chi:function chi(d){this.a=d},
chg:function chg(d,e){this.a=d
this.b=e},
chj:function chj(d){this.a=d},
chf:function chf(d){this.a=d},
aEQ:function aEQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aER:function aER(d,e,f){this.c=d
this.d=e
this.a=f},
ayG:function ayG(d,e){this.c=d
this.a=e},
aEP:function aEP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctf:function ctf(d){this.a=d},
ctg:function ctg(d){this.a=d},
azM:function azM(d){this.a=d},
auh:function auh(d,e){this.c=d
this.a=e},
dkF(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o4(x,C.b5R(u,!1),D.WW,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dkE(w)
if(t!=null)return new C.o4(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.WX,"TikTok",q,q)
s=C.dkD(x,w)
if(s!=null)return s
r=C.dkC(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o4(x,x,D.baY,"Video",q,q)
return q},
dkD(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/reel/"+x+u,D.Eh,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d8(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o4(d,"https://www.instagram.com/p/"+x+u,D.Eh,t,v,v)}return v},
dkC(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o4(d,"https://www.facebook.com/plugins/video.php?href="+A.f7(2,d,B.aK,!1)+"&show_text=false&width=734",D.WY,"Facebook",null,null)},
dkE(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d8(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
Fe:function Fe(d,e){this.a=d
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
ayA:function ayA(d,e){var _=this
_.d=$
_.cL$=d
_.aU$=e
_.c=_.a=null},
azQ:function azQ(d,e){this.c=d
this.a=e},
cjY:function cjY(d){this.a=d},
cjZ:function cjZ(d){this.a=d},
AZ:function AZ(d,e){this.c=d
this.a=e},
ac9:function ac9(){},
dB0(d){var x=window
x.toString
A.h5(x,"message",new C.cIQ(d),!1,y._)},
Fb:function Fb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayB:function ayB(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
chE:function chE(d){this.a=d},
chC:function chC(d){this.a=d},
chB:function chB(d){this.a=d},
chD:function chD(d){this.a=d},
chA:function chA(d){this.a=d},
chz:function chz(d){this.a=d},
cIQ:function cIQ(d){this.a=d},
b5R(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bg(x,"&")},
d_a(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d8(d)
return x==null?null:x.b[1]},
d_b(d){var x=A.by(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.by(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
d_c(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dkz(d,e,f){var x=C.d_a(d)
if(x!=null){if(f)return C.d_c(x,e,!0)
return C.d_b(C.b5R(x,e))}return C.d_b(d)},
dkA(d){if(d<=4)return 0
return B.p.b0(d-1,4)*4},
dkB(d){var x
if($.JF().a==null)return!1
x=$.xP().a
return d>=x&&d<x+4},
d_f(){var x=$.amg
if(x!=null)x.aa(0)
$.amg=null
$.xP().sv(0,0)},
d_e(){var x,w,v,u=$.JF()
if(u.a==null)return
x=$.amg
if(x!=null)x.aa(0)
w=$.d_d
if(w<=4){u=u.a
u.toString
C.cPJ(u)
return}x=$.xP()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cPJ(u)},
cPJ(d){var x=$.amg
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
default:x=null}$.amg=A.dq(A.d7(0,0,0,0,x),C.dBb())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.I5.prototype={
C(d){var x=null,w=this.e,v=w?B.ah:B.c,u=A.n(20),t=A.Y(B.N.t(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.es,A.j(this.c,x,x,x,x,A.l(x,x,w?B.U:B.dP,x,x,x,x,x,x,x,x,11,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.O,0,x,x),B.h,x,x,new A.v(v,x,t,u,x,x,B.l),x,x,x,B.fz,x,x,x)}}
C.mh.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fa.prototype={
S(){return new C.a7E(A.a([],y.e))},
git(){return this.c}}
C.a7E.prototype={
Z(){var x=this
x.a6()
$.xP().af(0,x.gaoP())
C.dB0(x.gb8K())
x.PX()},
b8b(){if(this.c!=null)this.n(new C.chr())},
b8L(){C.d_e()},
l(){$.xP().V(0,this.gaoP())
C.d_f()
$.JF().sv(0,null)
this.a3()},
PX(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PX=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fd(u.a.c),$async$PX)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chq(u,t))
$.b5S=J.a4(t)
case 1:return A.f(v,w)}})
return A.h($async$PX,w)},
PG(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PG=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cho(u))
x=3
return A.b(C.amh(u.a.c),$async$PG)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chp(u,t))
$.b5S=J.a4(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PG,w)},
baD(d){var x=this.c
x.toString
A.a9(x,!1).cM(A.ep(new C.chs(d),!1,null,y.H))},
bb8(){var x=this.c
x.toString
return C.SA(x,J.a4(this.d))},
C(d){var x=this,w=null,v=A.V(d).ax.a===B.Q,u=v?B.ds:B.db,t=A.aT(w,w,w,w,B.CD,w,w,w,new C.chw(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a4(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zA(A.G(A.a([A.I(new A.N(B.hT,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.Z,w,w,w,w,w,w,w,w,15,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.aY(!1,w,!0,new A.N(B.aF,A.a5(B.eX,B.N,w,w,28),w),B.bV,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbb7(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cV(!0,A.C(A.a([new A.N(D.Lw,s,w),A.I(x.e?B.j9:new A.hW($.JF(),new C.chx(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahp(B.N,B.yJ,B.nW,D.bDv,x.e?w:new C.chy(x)),w)}}
C.Qg.prototype={
b6g(d){var x,w=$.xP().a,v=this.d
if(C.dkB(v)){v=this.c.a
x=d.gaBB()
return new C.Fb(v+"_mini",d.gaBB(),!0,d.gae2(),!1,new A.dD(v+"_"+x+"_"+A.o(w),y.W))}return new C.ZZ(d,!0,!0,"Fold "+(B.p.b0(v,4)+1)+"/"+B.p.b0(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.Y(B.c.t(0.1),B.o,1),s=A.a([new A.ah(0,B.x,B.N.t(0.18),B.ci,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aU(!1,B.M,!0,w,A.aY(!1,v,!0,A.C(A.a([A.I(A.w(w,A.cT(r,A.jr(A.C(A.a([new C.axF(q,w),A.I(p!=null?x.b6g(p):A.w(w,A.C(A.a([A.a5(B.hm,B.ls,w,w,22),B.ak,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ar,B.f,0,B.k),B.h,B.tW,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vL,B.N.t(0.85),w,w,9),D.blK,A.j("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ar,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aih,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.v(w,w,t,u,s,D.Pb,B.l),w,w,w,B.eF,w,w,w),1),B.ak,A.j(q.b,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.V(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.N.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a_)}}
C.axF.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.I(A.j(B.d.gar(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.vM,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Ll,x,x,x)}}
C.F9.prototype={
S(){return new C.ayz()}}
C.ayz.prototype={
C(d){var x=null,w=A.V(d).ax.a===B.Q,v=w?B.ds:B.db,u=A.aT(x,x,x,x,B.CD,x,x,x,new C.chl(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cV(!0,A.C(A.a([new A.N(D.Lw,A.G(A.a([u,A.I(new A.zA(A.G(A.a([A.I(new A.N(B.hT,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.Z,x,x,x,x,x,x,x,x,14,x,x,B.v,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aU(!1,B.M,!0,x,A.aY(!1,x,!0,new A.N(B.aF,A.a5(B.eX,B.N,x,x,28),x),B.bV,!0,x,x,x,x,x,x,x,x,x,x,x,new C.chm(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a_)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hW($.JF(),new C.chn(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aEQ.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ah(0,B.x,B.N.t(0.35),B.eK,28),new A.ah(0,B.x,B.q.t(0.45),B.cO,18)],y.V),p=A.Y(B.c.t(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fb(w+"_full",v,!1,x.gae2(),!1,new A.dD(w+"_full_"+v,y.W))
x=v}else x=new C.ayG(u.r,t)}else x=new C.auh(n,t)
else x=D.bQl
return A.w(t,A.cT(o,A.jr(A.C(A.a([new C.aER(n,m,t),A.I(x,1),new C.aEP(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.v(t,t,p,r,q,D.Pb,B.l),t,s*2.05,t,B.ba,t,t,s)}}
C.aER.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.eH(s)
s=A.i3(s)
x=new A.db(r,s)
w=x.gFi()===0?12:x.gFi()
s=B.a.bH(B.p.q(s),2,"0")
r=(r<12?B.em:B.fT)===B.em?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.kY,t,t,t),B.b4,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bi,D.asd,B.e7,D.arr,B.e7,D.ash],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.ak,A.G(A.a([A.a5(B.Cw,B.N.t(0.9),t,t,12),B.e7,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.C(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aj2,t,t,t)}}
C.ayG.prototype={
C(d){var x=null
return A.w(x,A.b4(A.C(A.a([A.a5(B.vz,B.c.t(0.35),x,x,40),B.C,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ak,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eG(D.ave,D.bBr,this.c,A.ei(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aJ(B.N.t(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.tW,x,x,x,x,x,x,x,x,1/0)}}
C.aEP.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoJ(B.NT,"YouTube",t===0,s,new C.ctf(v))
t=v.aoJ(B.jx,"Device",t===1,s,new C.ctg(v))
x=s?"Power off":"Power on"
w=s?D.NU:D.apB
return A.w(u,A.G(A.a([r,B.Y,t,B.b4,A.aT(u,u,u,u,A.a5(w,s?B.b1:B.dv,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dg)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiP,u,u,u)},
aoJ(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.b8
else x=f?B.N:B.a9
w=f&&g?B.N.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aU(!1,B.M,!0,v,A.aY(!1,A.n(10),!0,new A.N(B.kw,A.C(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a_),1)}}
C.azM.prototype={
C(d){return D.a9D}}
C.auh.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.kU,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.eo(A.a([u,B.ak,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aF,w,w,B.X,!1)},
pX(d,e){var x=null
return new A.N(B.c4,A.C(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bR,A.j(e,x,x,x,x,D.bsv,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fe.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o4.prototype={
gaBB(){var x=this.f
if(x!=null&&x.length!==0)return C.b5R(x,!0)
return this.b},
gae2(){var x=this.c
return x===D.WW||x===D.WX||x===D.Eh||x===D.WY}}
C.ZZ.prototype={
S(){return new C.ayA(null,null)}}
C.ayA.prototype={
Z(){this.a6()
var x=A.bG(null,B.pZ,null,1,null,this)
x.mT(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMo()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fl(v,new A.v(v,v,v,v,v,new A.aB(B.e0,B.cp,B.G,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.ch),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.hg,r,v)
x=B.c.t(0.92)
s=A.b4(new A.dS(new A.bi(r,new A.bv(0.72,1,s),s.k("bi<bq.T>")),!1,A.a5(B.hm,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.azQ(u,v),t,s,A.bC(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.v,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.v(r,v,v,x,v,v,B.l),v,v,v,new A.U(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bC(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bC(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bf(B.al,v,B.cA,B.m,u,v)}}
C.azQ.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k6(v,new C.cjY(this),B.bm,!0,x,x,new C.cjZ(this),x)
return new C.AZ(w,x)}}
C.AZ.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.u3,B.Iq],y.O),B.hm)
break
case 1:x=new A.aN(A.a([B.tW,D.ad6],y.O),B.iF)
break
case 2:x=new A.aN(A.a([D.aeE,D.acB],y.O),B.vC)
break
case 3:x=new A.aN(A.a([B.Z,B.dI],y.O),B.C7)
break
case 4:x=new A.aN(A.a([B.a8,B.ah],y.O),B.m0)
break
default:x=v}w=x.a
return A.w(v,A.b4(A.a5(x.b,B.N.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.v(v,v,v,v,v,new A.aB(B.av,B.aD,B.G,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.ac9.prototype={
l(){var x=this,w=x.aU$
if(w!=null)w.V(0,x.gdv())
x.aU$=null
x.a3()},
bq(){this.bG()
this.bC()
this.dw()}}
C.Fb.prototype={
S(){return new C.ayB()}}
C.ayB.prototype={
ahC(d,e){var x,w,v=this,u="mute=1",t=C.d_a(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.d_c(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b5R(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dkz(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
Z(){var x,w,v=this
v.a6()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aR()
v.d=x
try{$.JG()
$.oD().u_(x,new C.chE(v),!0)}catch(w){v.r=!0
v.f=!1}},
aQ(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.chz(w))
x=w.e
x.toString
w.ahC(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jr(A.b4(A.a5(B.O3,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai1(u,B.rq,x)],y.p)
if(v.f)x.push(A.jr(A.b4(new A.ao(w,w,D.aa3,u),u,u,u),B.bT,!0))
return new A.bf(B.al,u,B.cA,B.m,x,u)}}
var z=a.updateTypes(["m(mh)","~()","Fa(S)","mh(X<@,@>)","a0(mh)","X<m,@>(mh)","au<~>()","F9(S)","hW<P>(S,o4?,p?)","Qg(S,P)","te(S,o4?,p?)","AZ(S,ai,dh?)"])
C.cMb.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+2}
C.cMa.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.V(d).ax.a===B.Q,m=A.ay(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cs,B.Z],k):A.a([B.c,B.aa],k),i=A.a([new A.ah(0,B.x,B.N.t(0.22),B.eK,32)],y.V),h=A.Y(n?B.bn:B.N.t(0.18),B.o,1),g=A.n(28),f=B.N.t(n?0.35:0.14)
k=A.a([f,B.R.t(n?0.18:0.08)],k)
f=A.w(o,D.ar8,B.h,o,o,new A.v(B.N.t(0.18),o,A.Y(B.N.t(0.45),B.o,1),o,o,o,B.aj),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,18,o,o,B.v,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.I(A.C(A.a([x,B.ak,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.U:B.aS,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fL,x,A.aT(o,o,o,o,A.a5(B.cE,n?B.a9:B.bT,o,o,o),o,o,o,new C.cM6(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.v(o,o,o,o,o,new A.aB(B.a3,B.a6,B.G,k,o,o),B.l),o,o,o,B.L6,o,o,o)
f=A.eS(B.c6,A.a([new C.I5("YouTube",B.Cv,n,o),new C.I5("TikTok",B.iF,n,o),new C.I5("Instagram",B.vC,n,o),new C.I5("Facebook",B.C7,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.Z,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bz:B.fc,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.ah:B.db
s=A.a5(B.jy,B.N.t(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bn:B.b6
v=A.C(A.a([f,B.ao,A.at(o,B.E,!0,o,!0,B.m,o,A.av(),x,o,o,o,o,o,2,A.bg(o,new A.b3(4,r,B.I),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aJ(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a5Q),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.J,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.D,o,B.K,o,o,o,o)],w),B.ad,B.e,B.f,0,B.k)
f=A.iM(D.arc,D.bHa,new C.cM7(d),A.jL(o,o,o,o,o,o,o,o,o,o,o,n?B.aE:B.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.U(12,0,12,12+m.f.d),A.fl(A.cT(g,A.C(A.a([k,new A.N(D.ak1,v,o),new A.N(D.ak7,A.G(A.a([f,B.b4,A.c_(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.U:B.V,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cM8(d),o,o),B.Y,A.dM(D.auZ,D.bHv,new C.cM9(d,x),A.bA(B.N,o,o,o,B.c,o,D.ajy,o,new A.bu(A.n(14),B.I),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ad,B.e,B.O,0,B.k),B.au),new A.v(o,o,h,l,i,new A.aB(B.av,B.aD,B.G,j,o,o),B.l),B.ch),o)},
$S:60}
C.cM6.prototype={
$0(){A.a9(this.a,!1).U(null)
return null},
$S:0}
C.cM7.prototype={
$0(){C.d_f()
$.JF().sv(0,null)
A.a9(this.a,!1).U(null)},
$S:0}
C.cM8.prototype={
$0(){A.a9(this.a,!1).U(null)
return null},
$S:0}
C.cM9.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.a9(this.a,!1).U(x)
return null},
$S:0}
C.b62.prototype={
$1(d){return C.d_g(A.K(d,y.N,y.z))},
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
$1(d){return B.a.bH(B.p.kN(d,16),2,"0").toUpperCase()},
$S:73}
C.chr.prototype={
$0(){},
$S:0}
C.chq.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cho.prototype={
$0(){return this.a.e=!0},
$S:0}
C.chp.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.chs.prototype={
$1(d){return new C.F9(this.a,null)},
$S:z+7}
C.chw.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.chx.prototype={
$3(d,e,f){return new A.hW($.xP(),new C.chv(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.chv.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.z7(d,l,y.Q)
x=x==null?l:x.gk7()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.t(0.12)
t=A.n(12)
s=A.Y(B.N.t(0.35),B.o,1)
r=A.a5(B.hm,B.N,l,l,18)
q=k.d
p=J.a4(m.a.d)
o=$.xP().a
n=B.i.aO(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.Z,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.v(u,l,s,t,l,l,B.l),l,l,B.cD,B.eo,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cT(t,new A.iU(1.7777777777777777,new C.Fb("fleet_master",s,!1,k.gae2(),!0,new A.dD("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a4(t)+".":""+J.a4(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.V(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yh(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jI(new A.N(B.AD,A.C(v,B.t,B.e,B.f,0,B.k),l),l),new A.oe(D.aiv,A.apN(new A.nf(new C.chu(u,k),J.a4(u.d),!1,!0,!0,A.uH(),l),D.bmn),l)],x))},
$S:1461}
C.chu.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qg(w,e,J.a4(x.d),new C.cht(x,w),this.b,null)},
$S:z+9}
C.cht.prototype={
$0(){return this.a.baD(this.b)},
$S:0}
C.chy.prototype={
$0(){this.a.PG()
return null},
$S:0}
C.chl.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.chm.prototype={
$0(){C.SA(this.a,$.b5S)
return null},
$S:0}
C.chn.prototype={
$3(d,e,f){return A.hc(new C.chk(this.a,e))},
$S:z+10}
C.chk.prototype={
$2(d,e){var x,w=null,v=B.i.aO(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.cp(A.C(A.a([A.j(s,w,w,w,w,A.l(w,w,A.V(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ao,new C.aEQ(v,t.a.c,t.e,t.d,new C.chh(t),new C.chi(t),new C.chj(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.uV,w,w,B.X),w,w,w)},
$S:1462}
C.chh.prototype={
$0(){var x=this.a.c
x.toString
C.SA(x,$.b5S)
return null},
$S:0}
C.chi.prototype={
$1(d){var x=this.a
return x.n(new C.chg(x,d))},
$S:33}
C.chg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.chj.prototype={
$0(){var x=this.a
return x.n(new C.chf(x))},
$S:0}
C.chf.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctf.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctg.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cjY.prototype={
$3(d,e,f){return new C.AZ(this.a.c,null)},
$S:z+11}
C.cjZ.prototype={
$3(d,e,f){if(f==null)return e
return new A.bf(B.al,null,B.cA,B.m,A.a([new C.AZ(this.a.c,null),D.a9w],y.p),null)},
$C:"$3",
$R:3,
$S:432}
C.chE.prototype={
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
x.ahC(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h5(w,"load",new C.chC(x),!1,v)
w=x.e
w.toString
A.h5(w,"error",new C.chD(x),!1,v)
x=x.e
x.toString
return x},
$S:1463}
C.chC.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chB(x))},
$S:39}
C.chB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.chD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chA(x))},
$S:39}
C.chA.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.chz.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cIQ.prototype={
$1(d){var x=new A.Az([],[]).EA(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1464};(function aliases(){var x=C.ac9.prototype
x.aMo=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7E.prototype,"gaoP","b8b",1)
x(v,"gb8K","b8L",1)
x(v,"gbb7","bb8",6)
w(C,"dBb","d_e",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uZ,[C.cMb,C.cMa,C.b62,C.b63,C.b5V,C.b5W,C.b5X,C.b5Y,C.b5Z,C.b6_,C.b60,C.b61,C.b5U,C.b5T,C.chs,C.chx,C.chv,C.chn,C.chi,C.cjY,C.cjZ,C.chE,C.chC,C.chD,C.cIQ])
w(A.U7,[C.cM6,C.cM7,C.cM8,C.cM9,C.chr,C.chq,C.cho,C.chp,C.chw,C.cht,C.chy,C.chl,C.chm,C.chh,C.chg,C.chj,C.chf,C.ctf,C.ctg,C.chB,C.chA,C.chz])
w(A.aD,[C.I5,C.Qg,C.axF,C.aEQ,C.aER,C.ayG,C.aEP,C.azM,C.auh,C.azQ,C.AZ])
w(A.ai,[C.mh,C.o4])
w(A.ad,[C.Fa,C.F9,C.ZZ,C.Fb])
w(A.ae,[C.a7E,C.ayz,C.ac9,C.ayB])
w(A.U8,[C.chu,C.chk])
v(C.Fe,A.av6)
v(C.ayA,C.ac9)
x(C.ac9,A.dZ)})()
A.d2t(b.typeUniverse,JSON.parse('{"Fa":{"ad":[],"p":[]},"Qg":{"aD":[],"p":[]},"F9":{"ad":[],"p":[]},"I5":{"aD":[],"p":[]},"a7E":{"ae":["Fa"]},"axF":{"aD":[],"p":[]},"ayz":{"ae":["F9"]},"aEQ":{"aD":[],"p":[]},"aER":{"aD":[],"p":[]},"ayG":{"aD":[],"p":[]},"aEP":{"aD":[],"p":[]},"azM":{"aD":[],"p":[]},"auh":{"aD":[],"p":[]},"ZZ":{"ad":[],"p":[]},"AZ":{"aD":[],"p":[]},"ayA":{"ae":["ZZ"]},"azQ":{"aD":[],"p":[]},"Fb":{"ad":[],"p":[]},"ayB":{"ae":["Fb"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("af<ah>"),O:x("af<B>"),e:x("af<mh>"),s:x("af<m>"),p:x("af<p>"),t:x("af<P>"),X:x("a8<mh>"),a:x("a8<@>"),P:x("X<m,@>"),f:x("X<@,@>"),w:x("me"),_:x("z2"),k:x("mh"),N:x("m"),Y:x("bv<ab>"),W:x("dD<m>"),J:x("hW<P>"),j:x("hW<o4?>"),E:x("wV<cs>"),q:x("QW"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a5Q=new A.aJ(B.N,1.6,B.o,-1)
D.bm6=new A.ao(18,18,B.Ib,null)
D.a9w=new A.dB(B.P,null,null,D.bm6,null)
D.NU=new A.O(983224,"MaterialIcons",!1)
D.atB=new A.a6(D.NU,48,B.b8,null,null,null)
D.bsb=new A.H(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC8=new A.y("Powered off",null,D.bsb,null,null,null,null,null,null,null,null)
D.aFN=x([D.atB,B.w,D.bC8],y.p)
D.afR=new A.eU(B.X,B.e,B.O,B.j,null,B.k,null,0,D.aFN,null)
D.a9D=new A.dB(B.P,null,null,D.afR,null)
D.aa3=new A.hN(2,null,null,null,null,B.U,null,null,null,null)
D.acB=new A.B(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.ad6=new A.B(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.aeE=new A.B(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.aih=new A.U(0,3,0,3)
D.aiv=new A.U(10,0,10,88)
D.aiP=new A.U(12,6,12,10)
D.aj2=new A.U(14,8,14,6)
D.ajy=new A.U(18,12,18,12)
D.ak1=new A.U(20,18,20,8)
D.ak7=new A.U(20,8,20,20)
D.Lw=new A.U(8,6,15,8)
D.apB=new A.O(983222,"MaterialIcons",!1)
D.ar8=new A.a6(B.hm,26,B.N,null,null,null)
D.arc=new A.a6(B.N1,18,null,null,null,null)
D.arr=new A.a6(B.vM,14,B.U,null,null,null)
D.apR=new A.O(983420,"MaterialIcons",!1)
D.asd=new A.a6(D.apR,14,B.U,null,null,null)
D.aok=new A.O(62895,"MaterialIcons",!1)
D.ash=new A.a6(D.aok,14,B.U,null,null,null)
D.auZ=new A.a6(B.lW,20,null,null,null,null)
D.ave=new A.a6(B.eX,16,null,null,null,null)
D.aHM=x([B.ah,B.Z],y.O)
D.Pb=new A.aB(B.av,B.aD,B.G,D.aHM,null,null)
D.bg6=new A.aN("NGMY OS","14.2.1")
D.bfh=new A.aN("VirtualDroid","13.8.4")
D.bfg=new A.aN("NGMY OS","15.0.0")
D.bfO=new A.aN("VirtualDroid","14.1.2")
D.bff=new A.aN("NGMY Tab OS","12.9.7")
D.bfe=new A.aN("NGMY OS","13.5.3")
D.bf5=new A.aN("VirtualDroid","15.2.0")
D.bfw=new A.aN("NGMY OS","14.8.1")
D.bfT=new A.aN("NGMY Tab OS","13.2.4")
D.bgf=new A.aN("VirtualDroid","12.6.9")
D.bf2=new A.aN("NGMY OS","16.0.1")
D.beV=new A.aN("VirtualDroid","14.9.0")
D.bg0=new A.aN("NGMY Tab OS","14.0.3")
D.bfn=new A.aN("NGMY OS","13.1.8")
D.bf1=new A.aN("VirtualDroid","13.4.5")
D.bfd=new A.aN("NGMY OS","15.3.2")
D.bfU=new A.aN("NGMY Tab OS","12.4.1")
D.bg2=new A.aN("VirtualDroid","16.1.0")
D.bfv=new A.aN("NGMY OS","14.4.6")
D.bg7=new A.aN("VirtualDroid","15.0.8")
D.aHo=x([D.bg6,D.bfh,D.bfg,D.bfO,D.bff,D.bfe,D.bf5,D.bfw,D.bfT,D.bgf,D.bf2,D.beV,D.bg0,D.bfn,D.bf1,D.bfd,D.bfU,D.bg2,D.bfv,D.bg7],A.bm("af<+(m,m)>"))
D.big=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhP=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhK=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhT=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhG=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhV=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bii=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhH=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhO=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhX=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhF=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bia=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bi7=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhN=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bi4=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bi3=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhE=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhS=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bi1=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bi6=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qb=x([D.big,D.bhP,D.bhK,D.bhT,D.bhG,D.bhV,D.bii,D.bhH,D.bhO,D.bhX,D.bhF,D.bia,D.bi7,D.bhN,D.bi4,D.bi3,D.bhE,D.bhS,D.bi1,D.bi6],A.bm("af<+(m,m,ab,ab,m)>"))
D.aMk=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.WW=new C.Fe(0,"youtube")
D.WX=new C.Fe(1,"tiktok")
D.Eh=new C.Fe(2,"instagram")
D.WY=new C.Fe(3,"facebook")
D.baY=new C.Fe(4,"other")
D.blK=new A.ao(3,null,null,null)
D.bmn=new A.iK(4,10,8,0.52,null)
D.bD1=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpl=new A.aP(D.bD1,null,null,null,null,null,null,null,null,null,null,null,null,B.y,!1,null,null,null,B.m,null)
D.bsv=new A.H(!0,B.c,null,null,null,null,11,B.ab,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBr=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDv=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bHa=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bHv=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bQl=new C.azM(null)})();(function staticFields(){$.d_d=20
$.amg=null
$.b5S=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFl","xP",()=>A.P5(0))
x($,"dFm","JF",()=>A.P5(null))})()};
(a=>{a["plP8iacYJqJF9iv1bGN4tq8ryuI="]=a.current})($__dart_deferred_initializers__);