((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eoh(d,e){A.a3(d,!1).cA(A.eF(new C.dpI(e),!0,null,x.H))},
a_k(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PO()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bc(n,B.aM,B.aA),t)
w=3
return A.b(A.dw(B.M,new C.dpH(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_k)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e3q(r)
if(q==null){d.F(x.q).f.S(D.cPg)
w=1
break}w=4
return A.b(A.bL(B.ih,null,x.H),$async$a_k)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dG1=n
p=C.e3k(n)
n=$.GW()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dtI(q)
d.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_k,v)},
dG4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"label")
w=J.k(w==null?"Virtual Device":w)
v=d.h(0,"serialNumber")
v=J.k(v==null?"":v)
u=d.h(0,"modelName")
u=J.k(u==null?"NGMY Virtual Phone":u)
t=d.h(0,"deviceId")
t=J.k(t==null?"":t)
s=d.h(0,"macAddress")
s=J.k(s==null?"":s)
r=d.h(0,"imei")
r=J.k(r==null?"":r)
q=d.h(0,"osName")
q=J.k(q==null?"NGMY OS":q)
p=d.h(0,"osVersion")
p=J.k(p==null?"1.0":p)
o=d.h(0,"virtualCity")
o=J.k(o==null?"Unknown":o)
n=d.h(0,"virtualCountry")
n=J.k(n==null?"":n)
m=A.aY(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aY(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.ou(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Kz(d){return C.e3t(d)},
e3t(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Kz=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Kz)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eD(r,x.f)
k=A.dj(k,new C.brL(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("ah<E.E>")
i=A.z(new A.ah(k,new C.brM(),j),j.j("E.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dG6(q)
w=12
return A.b(C.Ky(a3,p),$async$Kz)
case 12:u=p
w=1
break
case 11:t=2
w=9
break
case 7:t=6
a1=s.pop()
w=9
break
case 6:w=2
break
case 9:case 5:o=A.aJ(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dG4(A.T(n,x.N,x.z))
l=C.dG6(A.a([m],x.e))
w=21
return A.b(C.Ky(a3,l),$async$Kz)
case 21:u=l
w=1
break
case 20:t=2
w=18
break
case 16:t=15
a2=s.pop()
w=18
break
case 15:w=2
break
case 18:case 14:q=C.e3r()
w=22
return A.b(C.Ky(a3,q),$async$Kz)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kz,v)},
dG6(d){var w=A.Y(d).j("F<1,o>"),v=new A.F(d,new C.brD(),w).ex(0),u=new A.F(d,new C.brE(),w).ex(0),t=new A.F(d,new C.brF(),w).ex(0),s=new A.F(d,new C.brG(),w).ex(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dtJ(null,q,u,t,v,s));++q}return r},
az7(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$az7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kz(d),$async$az7)
case 3:t=f
s=x.N
r=J.c7(t)
q=r.dl(t,new C.brH(),s).ex(0)
p=r.dl(t,new C.brI(),s).ex(0)
o=r.dl(t,new C.brJ(),s).ex(0)
n=r.dl(t,new C.brK(),s).ex(0)
m=C.dtJ(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Ky(d,t),$async$az7)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$az7,v)},
Ky(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Ky=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Ky)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.brC(),x.P)
s=A.z(s,s.$ti.j("a4.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$Ky)
case 3:return A.h(null,v)}})
return A.i($async$Ky,v)},
e3r(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dtJ(w,w,t,s,u,r)
return q},
dtJ(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jO(),h=d==null,g=D.a7O[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7O[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bJ(256)
n=new A.F(p,new C.brB(),A.Y(p).j("F<1,o>")).fs(0)
u="VND-"+B.b.ai(n,0,4)+"-"+B.b.ai(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bJ(10)
t=B.h.fs(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bc(B.l.fY(i.bJ(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a2(e,20)
k=D.c_N[w]
j=D.bRr[w]
return new C.ou("vd_"+1000*Date.now()+"_"+e+"_"+i.bJ(99999),"Device "+B.b.bc(B.l.q(e+1),2,"0"),u,k,C.e3s(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e3s(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bc(B.l.fY(d.bJ(256),16),2,"0")
return B.h.fs(v)},
dpI:function dpI(d){this.a=d},
dpH:function dpH(d,e){this.a=d
this.b=e},
dpD:function dpD(d){this.a=d},
dpE:function dpE(d){this.a=d},
dpF:function dpF(d){this.a=d},
dpG:function dpG(d,e){this.a=d
this.b=e},
NY:function NY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ou:function ou(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
brL:function brL(){},
brM:function brM(){},
brD:function brD(){},
brE:function brE(){},
brF:function brF(){},
brG:function brG(){},
brH:function brH(){},
brI:function brI(){},
brJ:function brJ(){},
brK:function brK(){},
brC:function brC(){},
brB:function brB(){},
Kx:function Kx(d,e){this.c=d
this.a=e},
aht:function aht(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cP5:function cP5(){},
cP4:function cP4(d,e){this.a=d
this.b=e},
cP2:function cP2(d){this.a=d},
cP3:function cP3(d,e){this.a=d
this.b=e},
cP6:function cP6(d){this.a=d},
cPb:function cPb(d){this.a=d},
cPa:function cPa(d){this.a=d},
cPc:function cPc(d,e){this.a=d
this.b=e},
cP9:function cP9(d,e,f){this.a=d
this.b=e
this.c=f},
cP8:function cP8(d,e){this.a=d
this.b=e},
cP7:function cP7(d,e){this.a=d
this.b=e},
cPd:function cPd(d){this.a=d},
Xv:function Xv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aM8:function aM8(d,e){this.c=d
this.a=e},
Kw:function Kw(d,e){this.c=d
this.a=e},
aNk:function aNk(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cP_:function cP_(d){this.a=d},
cP0:function cP0(d){this.a=d},
cP1:function cP1(d){this.a=d},
cOZ:function cOZ(d,e){this.a=d
this.b=e},
cOW:function cOW(d){this.a=d},
cOX:function cOX(d){this.a=d},
cOV:function cOV(d,e){this.a=d
this.b=e},
cOY:function cOY(d){this.a=d},
cOU:function cOU(d){this.a=d},
aUl:function aUl(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aUm:function aUm(d,e,f){this.c=d
this.d=e
this.a=f},
aNq:function aNq(d,e){this.c=d
this.a=e},
aUk:function aUk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d){this.a=d},
aOK:function aOK(d){this.a=d},
aIl:function aIl(d,e){this.c=d
this.a=e},
e3q(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e3p(v)
if(u!=null)return new C.qE(w,C.dtH(u,!1),D.afn,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e3o(v)
if(t!=null)return new C.qE(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afo,"TikTok",q)
s=C.e3n(w,v)
if(s!=null)return s
r=C.e3m(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qE(w,w,D.cwu,"Video",q)
return q},
e3n(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/reel/"+w+u,D.OX,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/p/"+w+u,D.OX,t,null)}return null},
e3m(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qE(d,"https://www.facebook.com/plugins/video.php?href="+A.fa(2,d,B.bf,!1)+"&show_text=false&width=734",D.afp,"Facebook",null)},
e3p(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].du(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e3o(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).du(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
KA:function KA(d,e){this.a=d
this.b=e},
qE:function qE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7u:function a7u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aNl:function aNl(d,e){var _=this
_.d=$
_.cv$=d
_.aH$=e
_.c=_.a=null},
aOP:function aOP(d,e){this.c=d
this.a=e},
cTT:function cTT(d){this.a=d},
cTU:function cTU(d){this.a=d},
FQ:function FQ(d,e){this.c=d
this.a=e},
amz:function amz(){},
dG5(d,e,f,g,h,i){return new C.a7v(i,f,h,e,g,d)},
emW(d){var w=window
w.toString
A.he(w,"message",new C.dlO(d),!1,x._)},
a7v:function a7v(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahu:function ahu(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cPe:function cPe(d){this.a=d},
cPn:function cPn(d){this.a=d},
cPk:function cPk(d){this.a=d},
cPj:function cPj(d){this.a=d},
cPl:function cPl(d){this.a=d},
cPi:function cPi(d){this.a=d},
cPm:function cPm(d){this.a=d},
cPh:function cPh(d){this.a=d},
cPg:function cPg(d){this.a=d},
cPf:function cPf(d){this.a=d},
dlO:function dlO(d){this.a=d},
e3i(){var w,v,u
try{v=A.xF()
w=v.guW(v)
if(J.a5(w)!==0&&!J.w(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dtH(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
brz(d){var w=A.am(y.c,!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
dG0(d){var w=A.b7(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b7(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e3j(d,e,f){var w,v,u=C.brz(d)
if(u!=null){if(f){w=C.e3i()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dG0(C.dtH(u,e))}return C.dG0(d)},
e3k(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
e3l(d){var w
if($.PO().a==null)return!1
w=$.GW().a
return d>=w&&d<w+4},
dG3(){var w=$.az6
if(w!=null)w.ac(0)
$.az6=null
$.GW().sv(0,0)},
dG2(){var w,v,u,t=$.PO()
if(t.a==null)return
w=$.az6
if(w!=null)w.ac(0)
v=$.dG1
if(v<=4){t=t.a
t.toString
C.dtI(t)
return}w=$.GW()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dtI(t)},
dtI(d){var w=$.az6
if(w!=null)w.ac(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.az6=A.dH(A.dp(0,0,0,0,0,w),C.ena())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NY.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.ci,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hd,w,w,w)}}
C.ou.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kx.prototype={
V(){return new C.aht(A.a([],x.e))},
gdJ(){return this.c}}
C.aht.prototype={
a_(){var w=this
w.a4()
$.GW().au(0,w.gaym())
C.emW(w.gbpm())
w.ZB()},
boM(){if(this.c!=null)this.p(new C.cP5())},
bpn(){C.dG2()},
n(){$.GW().Z(0,this.gaym())
C.dG3()
$.PO().sv(0,null)
this.a3()},
ZB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kz(t.a.c),$async$ZB)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cP4(t,s))
$.brA=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
Vv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cP2(t))
w=3
return A.b(C.az7(t.a.c),$async$Vv)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cP3(t,s))
$.brA=J.a5(t.d)
t.c.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vv,v)},
brn(d){var w=this.c
w.toString
A.a3(w,!1).cA(A.eF(new C.cP6(d),!1,null,x.H))},
bs0(){var w=this.c
w.toString
return C.a_k(w,J.a5(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bz,s=A.c0(!0,A.v(A.a([new A.I(D.XN,new A.j8(new C.cPb(w),v),v),A.H(w.e?B.nt:new A.lp($.PO(),new C.cPc(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.asK(B.a8,B.HG,B.mJ,D.dcz,w.e?v:new C.cPd(w)),v)}}
C.Xv.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dJ,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7u(n,!0,!C.e3l(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jW,B.nD,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zx,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aD(!1,B.U,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bV(p,A.fk(A.v(A.a([new C.aM8(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C6,B.a8.l(0.85),u,u,9),D.cL4,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aFG,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a14,B.p),u,u,u,u,B.hg,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a6)}}
C.aM8.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.ti,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.XB,w,w,w)}}
C.Kw.prototype={
V(){return new C.aNk()}}
C.aNk.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bz,t=A.aQ(w,w,w,w,B.a0a,w,w,w,new C.cP_(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c0(!0,A.v(A.a([new A.I(D.XN,A.G(A.a([t,A.H(new A.Kl(A.G(A.a([A.H(new A.I(B.je,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aD(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.ba,A.W(B.hk,B.a8,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cP0(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lp($.PO(),new C.cP1(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aUl.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.d9,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dG5(new A.da(v+"_full_"+u,x.W),!1,u,!1,w.gaOb(),v+"_full")
w=v}else w=new C.aNq(t.r,s)}else w=new C.aIl(m,s)
else w=D.djI
return A.t(s,A.bV(n,A.fk(A.v(A.a([new C.aUm(m,l,s),A.H(w,1),new C.aUk(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a14,B.p),s,r*2.05,s,s,B.bJ,s,s,r)}}
C.aUm.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dr(r)
r=A.hc(r)
w=new A.dG(q,r)
v=w.gJZ()===0?12:w.gJZ()
r=B.b.bc(B.l.q(r),2,"0")
q=(q<12?B.ha:B.jc)===B.ha?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.ne,s,s,s),B.aZ,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bx,D.aR6,B.eN,D.aQh,B.eN,D.aRb],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.BZ,B.a8.l(0.9),s,s,12),B.eN,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aGF,s,s,s)}}
C.aNq.prototype={
B(d){var w=null
return A.t(w,A.aF(A.v(A.a([A.W(B.Bp,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eM(D.aUE,D.d08,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aH(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zx,w,w,w,w,w,w,w,w,w,1/0)}}
C.aUk.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayd(B.BU,"YouTube",s===0,r,new C.d3G(u))
s=u.ayd(B.kC,"Device",s===1,r,new C.d3H(u))
w=r?"Power off":"Power on"
v=r?D.a_p:D.aOf
return A.t(t,A.G(A.a([q,B.an,s,B.aZ,A.aQ(t,t,t,t,A.W(v,r?B.bQ:B.hn,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aGk,t,t,t)},
ayd(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.av
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aD(!1,B.U,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nR,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aOK.prototype={
B(d){return D.av8}}
C.aIl.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k9,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tR("Serial",u.c),q=w.tR("Model",u.d),p=w.tR("Device ID",u.e),o=w.tR("IMEI",u.r),n=w.tR("MAC",u.f),m=w.tR("OS",u.w+" "+u.x),l=w.tR("Location",u.y+", "+u.z),k=w.tR("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tR("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tR("Provisioned",u.length>=10?B.b.ai(u,0,10):u)],x.p),v,B.ba,v,v,B.am,!1)},
tR(d,e){var w=null
return new A.I(B.d8,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cu,A.d(e,w,w,w,w,w,w,D.cSC,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.KA.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qE.prototype={
gaOb(){var w=this.c
return w===D.afn||w===D.afo||w===D.OX||w===D.afp}}
C.a7u.prototype={
V(){return new C.aNl(null,null)}}
C.aNl.prototype={
a_(){this.a4()
var w=A.bm(null,B.ry,null,1,null,this)
w.h3(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aYk()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.p(t,t,t,t,t,new A.ac(B.c7,B.c0,B.F,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cj(B.d7,p,t)
w=B.e.l(0.92)
q=A.aF(new A.cQ(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bk.T>")),!1,A.W(B.jW,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nD
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aOP(s,t),r,q,A.ay(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aA(B.ag,t,B.b5,B.t,s,t)}}
C.aOP.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l5(u,B.K,new C.cTT(this),B.bO,!0,w,w,new C.cTU(this),w)
return new C.FQ(v,w)}}
C.FQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.mj,B.TJ],x.O),B.jW)
break
case 1:w=new A.aO(A.a([B.zx,D.aAa],x.O),B.lx)
break
case 2:w=new A.aO(A.a([D.aBQ,D.azz],x.O),B.By)
break
case 3:w=new A.aO(A.a([B.W,B.dB],x.O),B.BF)
break
case 4:w=new A.aO(A.a([B.aw,B.aN],x.O),B.o6)
break
default:w=u}v=w.a
return A.t(u,A.aF(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amz.prototype={
n(){var w=this,v=w.aH$
if(v!=null)v.Z(0,w.gd3())
w.aH$=null
w.a3()},
bl(){this.bA()
this.bx()
this.d4()}}
C.a7v.prototype={
V(){return new C.ahu()}}
C.ahu.prototype={
a8v(d,e){var w,v=C.brz(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dtH(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e3j(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHy(){var w,v=this
if(v.w)return
v.p(new C.cPe(v))
w=v.e
if(w!=null)v.a8v(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=w
try{$.yF()
$.o3().qy(w,new C.cPn(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cPg(v))
w=v.e
w.toString
v.a8v(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_D,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fk(A.aF(new A.I(new A.U(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Is(n,B.oi,w)],v)
if(o.f)w.push(A.fk(A.aF(new A.aa(28,28,D.awh,n),n,n,n),B.cX,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.M2,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.ek(0,A.aD(!1,B.U,!0,n,A.aL(!1,n,!0,A.aF(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.JW,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHx(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.brz(o.a.d)
if(v!=null)w.push(A.ay(8,A.jb(D.aSB,D.d7G,new C.cPf(o),A.iK(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aA(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ou)","~()","Kx(O)","ou(Z<@,@>)","a0(ou)","Z<o,@>(ou)","aB<~>()","Kw(O)","lp<K>(O,qE?,q?)","Xv(O,K)","ui(O,qE?,q?)","FQ(O,an,dF?)"])
C.dpI.prototype={
$1(d){return new C.Kx(this.a,null)},
$S:z+2}
C.dpH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e6,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.eY,32)],x.V),g=A.L(m?B.cd:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aQ_,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f_,w,A.aQ(n,n,n,n,A.W(B.d3,m?B.av:B.cX,n,n,n),n,n,n,new C.dpD(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a7,B.F,j,n,n),B.p),n,n,n,n,B.K1,n,n,n)
e=A.eB(B.cQ,A.a([new C.NY("YouTube",B.M_,m,n),new C.NY("TikTok",B.lx,m,n),new C.NY("Instagram",B.By,m,n),new C.NY("Facebook",B.BF,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cg:B.iI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bz
r=A.W(B.fp,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aL
u=A.v(A.a([e,B.aP,A.aM(n,B.R,!0,n,!0,B.t,n,A.aN(),w,n,n,n,n,n,2,A.bp(n,new A.bb(4,q,B.Y),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Su),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jb(D.aQ2,D.dbD,new C.dpE(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bu:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cz(A.bV(f,A.v(A.a([j,new A.I(B.Xm,u,n),new A.I(D.aHZ,A.G(A.a([e,B.aZ,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dpF(d),n,n),B.an,A.dL(D.aUm,D.dcs,new C.dpG(d,w),A.bx(B.a8,n,n,n,B.e,n,B.JW,n,new A.bB(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.F,i,n,n),B.p),B.br),n)},
$S:93}
C.dpD.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dpE.prototype={
$0(){C.dG3()
$.PO().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dpF.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dpG.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.brL.prototype={
$1(d){return C.dG4(A.T(d,x.N,x.z))},
$S:z+3}
C.brM.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brD.prototype={
$1(d){return d.c},
$S:z+0}
C.brE.prototype={
$1(d){return d.r},
$S:z+0}
C.brF.prototype={
$1(d){return d.f},
$S:z+0}
C.brG.prototype={
$1(d){return d.at},
$S:z+0}
C.brH.prototype={
$1(d){return d.c},
$S:z+0}
C.brI.prototype={
$1(d){return d.r},
$S:z+0}
C.brJ.prototype={
$1(d){return d.f},
$S:z+0}
C.brK.prototype={
$1(d){return d.at},
$S:z+0}
C.brC.prototype={
$1(d){return d.a9()},
$S:z+5}
C.brB.prototype={
$1(d){return B.b.bc(B.l.fY(d,16),2,"0").toUpperCase()},
$S:88}
C.cP5.prototype={
$0(){},
$S:0}
C.cP4.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cP2.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cP3.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cP6.prototype={
$1(d){return new C.Kw(this.a,null)},
$S:z+7}
C.cPb.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,D.aTz,w,w,w,new C.cPa(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a5(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fM(A.G(A.a([new A.os(D.x6,e,g,36,B.BZ,w),B.aR,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fU(B.h.gU(D.x6).l(0.45+e*0.2),B.L,10)],x.S),w,w),w,w,w),1),A.aD(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.bJ,A.W(B.hk,A.ao(B.h.gU(D.x6),B.h.gaj(D.x6),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbs_(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.j,0,w,w),D.x6,w,g,B.fn,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:359}
C.cPa.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cPc.prototype={
$3(d,e,f){return new A.lp($.GW(),new C.cP9(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cP9.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DI(d,k,x.Q)
w=w==null?k:w.glC()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.jW,B.a8,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.GW().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dt,B.he,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bV(s,new A.j2(1.7777777777777777,C.dG5(new A.da("fleet_master_"+r,x.W),!0,r,!0,j.gaOb(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wa(0,B.t,k,B.E,k,k,k,k,!1,k,B.am,!1,A.a([new A.kN(new A.I(B.JR,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oF(D.aFS,A.aDa(new A.nQ(new C.cP8(i,j),J.a5(i.d),!1,!0,!0,A.tJ(),k),D.cLT),k)],w))},
$S:1754}
C.cP8.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xv(v,e,J.a5(w.d),new C.cP7(w,v),this.b,null)},
$S:z+9}
C.cP7.prototype={
$0(){return this.a.brn(this.b)},
$S:0}
C.cPd.prototype={
$0(){this.a.Vv()
return null},
$S:0}
C.cP_.prototype={
$0(){return A.a3(this.a,!1).eG()},
$S:0}
C.cP0.prototype={
$0(){C.a_k(this.a,$.brA)
return null},
$S:0}
C.cP1.prototype={
$3(d,e,f){return A.eW(new C.cOZ(this.a,e))},
$S:z+10}
C.cOZ.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aF(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aP,new C.aUl(u,s.a.c,s.e,s.d,new C.cOW(s),new C.cOX(s),new C.cOY(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.py,v,v,B.am),v,v,v)},
$S:1755}
C.cOW.prototype={
$0(){var w=this.a.c
w.toString
C.a_k(w,$.brA)
return null},
$S:0}
C.cOX.prototype={
$1(d){var w=this.a
return w.p(new C.cOV(w,d))},
$S:33}
C.cOV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOY.prototype={
$0(){var w=this.a
return w.p(new C.cOU(w))},
$S:0}
C.cOU.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d3G.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d3H.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cTT.prototype={
$3(d,e,f){return new C.FQ(this.a.c,null)},
$S:z+11}
C.cTU.prototype={
$3(d,e,f){if(f==null)return e
return new A.aA(B.ag,null,B.b5,B.t,A.a([new C.FQ(this.a.c,null),D.avq],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.cPe.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cPn.prototype={
$1(d){var w=this.a,v=document.createElement("iframe"),u=v.style
u.border="none"
u=v.style
u.width="100%"
u=v.style
u.height="100%"
v.allowFullscreen=!0
v.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
v.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
w.e=v
w.a8v(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.he(v,"load",new C.cPk(w),!1,u)
v=w.e
v.toString
A.he(v,"error",new C.cPl(w),!1,u)
A.bL(B.kx,new C.cPm(w),x.H)
w=w.e
w.toString
return w},
$S:605}
C.cPk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cPj(w))},
$S:47}
C.cPj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cPl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cPi(w))},
$S:47}
C.cPi.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cPm.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cPh(w))},
$S:12}
C.cPh.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cPg.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cPf.prototype={
$0(){var w,v=C.brz(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kd.Kj(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dlO.prototype={
$1(d){var w,v,u,t,s=new A.Bd([],[]).Dy(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1756};(function aliases(){var w=C.amz.prototype
w.aYk=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aht.prototype,"gaym","boM",1)
w(u,"gbpm","bpn",1)
w(u,"gbs_","bs0",6)
w(C.ahu.prototype,"gbHx","bHy",1)
v(C,"ena","dG2",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yY,[C.dpI,C.dpH,C.brL,C.brM,C.brD,C.brE,C.brF,C.brG,C.brH,C.brI,C.brJ,C.brK,C.brC,C.brB,C.cP6,C.cPb,C.cPc,C.cP9,C.cP1,C.cOX,C.cTT,C.cTU,C.cPn,C.cPk,C.cPl,C.dlO])
v(A.a0O,[C.dpD,C.dpE,C.dpF,C.dpG,C.cP5,C.cP4,C.cP2,C.cP3,C.cPa,C.cP7,C.cPd,C.cP_,C.cP0,C.cOW,C.cOV,C.cOY,C.cOU,C.d3G,C.d3H,C.cPe,C.cPj,C.cPi,C.cPm,C.cPh,C.cPg,C.cPf])
v(A.as,[C.NY,C.Xv,C.aM8,C.aUl,C.aUm,C.aNq,C.aUk,C.aOK,C.aIl,C.aOP,C.FQ])
v(A.an,[C.ou,C.qE])
v(A.ae,[C.Kx,C.Kw,C.a7u,C.a7v])
v(A.af,[C.aht,C.aNk,C.amz,C.ahu])
v(A.a0P,[C.cP8,C.cOZ])
u(C.KA,A.aJg)
u(C.aNl,C.amz)
w(C.amz,A.dE)})()
A.dJz(b.typeUniverse,JSON.parse('{"Kx":{"ae":[],"q":[]},"Xv":{"as":[],"q":[]},"Kw":{"ae":[],"q":[]},"NY":{"as":[],"q":[]},"aht":{"af":["Kx"]},"aM8":{"as":[],"q":[]},"aNk":{"af":["Kw"]},"aUl":{"as":[],"q":[]},"aUm":{"as":[],"q":[]},"aNq":{"as":[],"q":[]},"aUk":{"as":[],"q":[]},"aOK":{"as":[],"q":[]},"aIl":{"as":[],"q":[]},"a7u":{"ae":[],"q":[]},"FQ":{"as":[],"q":[]},"aNl":{"af":["a7u"]},"aOP":{"as":[],"q":[]},"a7v":{"ae":[],"q":[]},"ahu":{"af":["a7v"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a7<a9>"),O:w("a7<x>"),e:w("a7<ou>"),S:w("a7<fU>"),s:w("a7<o>"),p:w("a7<q>"),t:w("a7<K>"),X:w("ag<ou>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oo"),_:w("DF"),k:w("ou"),N:w("o"),Y:w("bi<a2>"),W:w("da<o>"),J:w("lp<K>"),j:w("lp<qE?>"),E:w("xN<cP>"),q:w("Yl"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_p=new A.M(983224,"MaterialIcons",!1)
D.aSI=new A.ab(D.a_p,48,B.bq,null,null,null)
D.d__=new A.B("Powered off",null,B.amz,null,null,null,null,null,null,null,null,null)
D.bOt=w([D.aSI,B.O,D.d__],x.p)
D.aDb=new A.eu(B.am,B.i,B.a0,B.n,null,B.q,null,0,D.bOt,null)
D.av8=new A.dl(B.K,null,null,D.aDb,null)
D.cLw=new A.aa(18,18,B.Tq,null)
D.avq=new A.dl(B.K,null,null,D.cLw,null)
D.awh=new A.fZ(2,null,null,null,null,B.ab,null,null,null,null)
D.azz=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aAa=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aBQ=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aFG=new A.U(0,3,0,3)
D.aFS=new A.U(10,0,10,88)
D.aGk=new A.U(12,6,12,10)
D.aGF=new A.U(14,8,14,6)
D.aHZ=new A.U(20,8,20,20)
D.XN=new A.U(8,6,15,8)
D.aOf=new A.M(983222,"MaterialIcons",!1)
D.aQ_=new A.ab(B.jW,26,B.a8,null,null,null)
D.aQ2=new A.ab(B.Zx,18,null,null,null,null)
D.aQh=new A.ab(B.ti,14,B.ab,null,null,null)
D.aOz=new A.M(983420,"MaterialIcons",!1)
D.aR6=new A.ab(D.aOz,14,B.ab,null,null,null)
D.aMA=new A.M(62895,"MaterialIcons",!1)
D.aRb=new A.ab(D.aMA,14,B.ab,null,null,null)
D.aSB=new A.ab(B.tc,16,B.ab,null,null,null)
D.aTz=new A.ab(B.dE,20,B.ab,null,null,null)
D.aUm=new A.ab(B.iU,20,null,null,null,null)
D.aUE=new A.ab(B.hk,16,null,null,null,null)
D.bSe=w([B.aN,B.W],x.O)
D.a14=new A.ac(B.aC,B.aI,B.F,D.bSe,null,null)
D.cF3=new A.aO("NGMY OS","14.2.1")
D.cDN=new A.aO("VirtualDroid","13.8.4")
D.cDM=new A.aO("NGMY OS","15.0.0")
D.cEA=new A.aO("VirtualDroid","14.1.2")
D.cDK=new A.aO("NGMY Tab OS","12.9.7")
D.cDI=new A.aO("NGMY OS","13.5.3")
D.cDx=new A.aO("VirtualDroid","15.2.0")
D.cE9=new A.aO("NGMY OS","14.8.1")
D.cEG=new A.aO("NGMY Tab OS","13.2.4")
D.cFf=new A.aO("VirtualDroid","12.6.9")
D.cDq=new A.aO("NGMY OS","16.0.1")
D.cDf=new A.aO("VirtualDroid","14.9.0")
D.cEV=new A.aO("NGMY Tab OS","14.0.3")
D.cDW=new A.aO("NGMY OS","13.1.8")
D.cDp=new A.aO("VirtualDroid","13.4.5")
D.cDH=new A.aO("NGMY OS","15.3.2")
D.cEH=new A.aO("NGMY Tab OS","12.4.1")
D.cEY=new A.aO("VirtualDroid","16.1.0")
D.cE8=new A.aO("NGMY OS","14.4.6")
D.cF4=new A.aO("VirtualDroid","15.0.8")
D.bRr=w([D.cF3,D.cDN,D.cDM,D.cEA,D.cDK,D.cDI,D.cDx,D.cE9,D.cEG,D.cFf,D.cDq,D.cDf,D.cEV,D.cDW,D.cDp,D.cDH,D.cEH,D.cEY,D.cE8,D.cF4],A.b4("a7<+(o,o)>"))
D.x6=w([B.a8,B.fe],x.O)
D.cHl=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cGU=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cGP=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cGY=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cGL=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cH_=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cHn=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cGM=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cGT=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cH1=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cGK=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cHf=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cHc=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cGS=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cH9=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cH8=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cGJ=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cGX=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cH6=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cHb=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7O=w([D.cHl,D.cGU,D.cGP,D.cGY,D.cGL,D.cH_,D.cHn,D.cGM,D.cGT,D.cH1,D.cGK,D.cHf,D.cHc,D.cGS,D.cH9,D.cH8,D.cGJ,D.cGX,D.cH6,D.cHb],A.b4("a7<+(o,o,a2,a2,o)>"))
D.c_N=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afn=new C.KA(0,"youtube")
D.afo=new C.KA(1,"tiktok")
D.OX=new C.KA(2,"instagram")
D.afp=new C.KA(3,"facebook")
D.cwu=new C.KA(4,"other")
D.cL4=new A.aa(3,null,null,null)
D.cLT=new A.i2(4,10,8,0.52,null)
D.d0h=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cPg=new A.aV(D.d0h,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cSC=new A.Q(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d08=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d7G=new A.B("Open in YouTube",null,B.j2,null,null,null,null,null,null,null,null,null)
D.dbD=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dcs=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dcz=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.djI=new C.aOK(null)})();(function staticFields(){$.dG1=20
$.az6=null
$.brA=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"es8","GW",()=>A.abV(0))
w($,"es9","PO",()=>A.abV(null))})()};
(a=>{a["dJUI7CWFRDh4D5t/nMAx1S/NCoI="]=a.current})($__dart_deferred_initializers__);