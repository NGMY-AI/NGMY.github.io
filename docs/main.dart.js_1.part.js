((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eoM(d,e){A.a3(d,!1).cA(A.eF(new C.dq8(e),!0,null,x.H))},
a_n(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PQ()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bc(n,B.aM,B.aA),t)
w=3
return A.b(A.dw(B.M,new C.dq7(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_n)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e3U(r)
if(q==null){d.F(x.q).f.S(D.cPl)
w=1
break}w=4
return A.b(A.bJ(B.ih,null,x.H),$async$a_n)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dGs=n
p=C.e3O(n)
n=$.GZ()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dua(q)
d.F(x.q).f.S(A.bm(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_n,v)},
dGv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.os(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
KB(d){return C.e3X(d)},
e3X(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$KB=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$KB)
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
k=A.dj(k,new C.brX(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("ah<E.E>")
i=A.z(new A.ah(k,new C.brY(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dGx(q)
w=12
return A.b(C.KA(a3,p),$async$KB)
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
case 19:m=C.dGv(A.U(n,x.N,x.z))
l=C.dGx(A.a([m],x.e))
w=21
return A.b(C.KA(a3,l),$async$KB)
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
case 18:case 14:q=C.e3V()
w=22
return A.b(C.KA(a3,q),$async$KB)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KB,v)},
dGx(d){var w=A.Y(d).j("F<1,o>"),v=new A.F(d,new C.brP(),w).ey(0),u=new A.F(d,new C.brQ(),w).ey(0),t=new A.F(d,new C.brR(),w).ey(0),s=new A.F(d,new C.brS(),w).ey(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dub(null,q,u,t,v,s));++q}return r},
azi(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$azi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KB(d),$async$azi)
case 3:t=f
s=x.N
r=J.c7(t)
q=r.dl(t,new C.brT(),s).ey(0)
p=r.dl(t,new C.brU(),s).ey(0)
o=r.dl(t,new C.brV(),s).ey(0)
n=r.dl(t,new C.brW(),s).ey(0)
m=C.dub(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.KA(d,t),$async$azi)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$azi,v)},
KA(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$KA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$KA)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.brO(),x.P)
s=A.z(s,s.$ti.j("a5.E"))
w=3
return A.b(u.ar("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ak(s,null)),$async$KA)
case 3:return A.h(null,v)}})
return A.i($async$KA,v)},
e3V(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dub(w,w,t,s,u,r)
return q},
dub(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jO(),h=d==null,g=D.a7P[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7P[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bJ(256)
n=new A.F(p,new C.brN(),A.Y(p).j("F<1,o>")).fs(0)
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
k=D.c_R[w]
j=D.bRv[w]
return new C.os("vd_"+1000*Date.now()+"_"+e+"_"+i.bJ(99999),"Device "+B.b.bc(B.l.q(e+1),2,"0"),u,k,C.e3W(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e3W(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bc(B.l.fY(d.bJ(256),16),2,"0")
return B.h.fs(v)},
dq8:function dq8(d){this.a=d},
dq7:function dq7(d,e){this.a=d
this.b=e},
dq3:function dq3(d){this.a=d},
dq4:function dq4(d){this.a=d},
dq5:function dq5(d){this.a=d},
dq6:function dq6(d,e){this.a=d
this.b=e},
O_:function O_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
os:function os(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
brX:function brX(){},
brY:function brY(){},
brP:function brP(){},
brQ:function brQ(){},
brR:function brR(){},
brS:function brS(){},
brT:function brT(){},
brU:function brU(){},
brV:function brV(){},
brW:function brW(){},
brO:function brO(){},
brN:function brN(){},
Kz:function Kz(d,e){this.c=d
this.a=e},
ahx:function ahx(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cPr:function cPr(){},
cPq:function cPq(d,e){this.a=d
this.b=e},
cPo:function cPo(d){this.a=d},
cPp:function cPp(d,e){this.a=d
this.b=e},
cPs:function cPs(d){this.a=d},
cPx:function cPx(d){this.a=d},
cPw:function cPw(d){this.a=d},
cPy:function cPy(d,e){this.a=d
this.b=e},
cPv:function cPv(d,e,f){this.a=d
this.b=e
this.c=f},
cPu:function cPu(d,e){this.a=d
this.b=e},
cPt:function cPt(d,e){this.a=d
this.b=e},
cPz:function cPz(d){this.a=d},
Xy:function Xy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMm:function aMm(d,e){this.c=d
this.a=e},
Ky:function Ky(d,e){this.c=d
this.a=e},
aNy:function aNy(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cPl:function cPl(d){this.a=d},
cPm:function cPm(d){this.a=d},
cPn:function cPn(d){this.a=d},
cPk:function cPk(d,e){this.a=d
this.b=e},
cPh:function cPh(d){this.a=d},
cPi:function cPi(d){this.a=d},
cPg:function cPg(d,e){this.a=d
this.b=e},
cPj:function cPj(d){this.a=d},
cPf:function cPf(d){this.a=d},
aUz:function aUz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aUA:function aUA(d,e,f){this.c=d
this.d=e
this.a=f},
aNE:function aNE(d,e){this.c=d
this.a=e},
aUy:function aUy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d41:function d41(d){this.a=d},
d42:function d42(d){this.a=d},
aOY:function aOY(d){this.a=d},
aIz:function aIz(d,e){this.c=d
this.a=e},
e3U(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e3T(v)
if(u!=null)return new C.qF(w,C.du9(u,!1),D.afp,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e3S(v)
if(t!=null)return new C.qF(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afq,"TikTok",q)
s=C.e3R(w,v)
if(s!=null)return s
r=C.e3Q(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qF(w,w,D.cwy,"Video",q)
return q},
e3R(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.am("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qF(d,"https://www.instagram.com/reel/"+w+u,D.OX,t,null)}v=A.am("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).du(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qF(d,"https://www.instagram.com/p/"+w+u,D.OX,t,null)}return null},
e3Q(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qF(d,"https://www.facebook.com/plugins/video.php?href="+A.fa(2,d,B.bf,!1)+"&show_text=false&width=734",D.afr,"Facebook",null)},
e3T(d){var w,v,u,t=[A.am(y.c,!0,!1,!1,!1),A.am("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.am("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].du(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e3S(d){var w,v=A.am("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).du(d)
if(v!=null)return v.b[1]
w=A.am("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
KC:function KC(d,e){this.a=d
this.b=e},
qF:function qF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7y:function a7y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aNz:function aNz(d,e){var _=this
_.d=$
_.cv$=d
_.aH$=e
_.c=_.a=null},
aP2:function aP2(d,e){this.c=d
this.a=e},
cUe:function cUe(d){this.a=d},
cUf:function cUf(d){this.a=d},
FS:function FS(d,e){this.c=d
this.a=e},
amD:function amD(){},
dGw(d,e,f,g,h,i){return new C.a7z(i,f,h,e,g,d)},
enq(d){var w=window
w.toString
A.fP(w,"message",new C.dme(d),!1,x._)},
a7z:function a7z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahy:function ahy(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cPA:function cPA(d){this.a=d},
cPJ:function cPJ(d){this.a=d},
cPG:function cPG(d){this.a=d},
cPF:function cPF(d){this.a=d},
cPH:function cPH(d){this.a=d},
cPE:function cPE(d){this.a=d},
cPI:function cPI(d){this.a=d},
cPD:function cPD(d){this.a=d},
cPC:function cPC(d){this.a=d},
cPB:function cPB(d){this.a=d},
dme:function dme(d){this.a=d},
e3M(){var w,v,u
try{v=A.xI()
w=v.guW(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
du9(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
brL(d){var w=A.am(y.c,!0,!1,!1,!1).du(d)
return w==null?null:w.b[1]},
dGr(d){var w=A.b8(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b8(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e3N(d,e,f){var w,v,u=C.brL(d)
if(u!=null){if(f){w=C.e3M()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dGr(C.du9(u,e))}return C.dGr(d)},
e3O(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
e3P(d){var w
if($.PQ().a==null)return!1
w=$.GZ().a
return d>=w&&d<w+4},
dGu(){var w=$.azh
if(w!=null)w.ac(0)
$.azh=null
$.GZ().sv(0,0)},
dGt(){var w,v,u,t=$.PQ()
if(t.a==null)return
w=$.azh
if(w!=null)w.ac(0)
v=$.dGs
if(v<=4){t=t.a
t.toString
C.dua(t)
return}w=$.GZ()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dua(t)},
dua(d){var w=$.azh
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
default:w=null}$.azh=A.dA(A.dp(0,0,0,0,0,w),C.enF())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.O_.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.ci,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hd,w,w,w)}}
C.os.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kz.prototype={
V(){return new C.ahx(A.a([],x.e))},
gdK(){return this.c}}
C.ahx.prototype={
a_(){var w=this
w.a4()
$.GZ().au(0,w.gayq())
C.enq(w.gbps())
w.ZG()},
boS(){if(this.c!=null)this.p(new C.cPr())},
bpt(){C.dGt()},
n(){$.GZ().Z(0,this.gayq())
C.dGu()
$.PQ().sv(0,null)
this.a3()},
ZG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.KB(t.a.c),$async$ZG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cPq(t,s))
$.brM=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$ZG,v)},
Vz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cPo(t))
w=3
return A.b(C.azi(t.a.c),$async$Vz)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cPp(t,s))
$.brM=J.a4(t.d)
t.c.F(x.q).f.S(A.bm(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
brt(d){var w=this.c
w.toString
A.a3(w,!1).cA(A.eF(new C.cPs(d),!1,null,x.H))},
bs6(){var w=this.c
w.toString
return C.a_n(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bz,s=A.c0(!0,A.v(A.a([new A.I(D.XO,new A.j8(new C.cPx(w),v),v),A.H(w.e?B.ns:new A.lp($.PQ(),new C.cPy(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.asS(B.a8,B.HH,B.mJ,D.dcD,w.e?v:new C.cPz(w)),v)}}
C.Xy.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dJ,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7y(n,!0,!C.e3P(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jX,B.nC,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zx,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aD(!1,B.U,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bV(p,A.fk(A.v(A.a([new C.aMm(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C7,B.a8.l(0.85),u,u,9),D.cL9,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aFJ,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a15,B.p),u,u,u,u,B.hg,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a6)}}
C.aMm.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.th,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.XC,w,w,w)}}
C.Ky.prototype={
V(){return new C.aNy()}}
C.aNy.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bz,t=A.aR(w,w,w,w,B.a0b,w,w,w,new C.cPl(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c0(!0,A.v(A.a([new A.I(D.XO,A.G(A.a([t,A.H(new A.Kn(A.G(A.a([A.H(new A.I(B.je,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aD(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.ba,A.W(B.hk,B.a8,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cPm(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lp($.PQ(),new C.cPn(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aUz.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.d9,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dGw(new A.db(v+"_full_"+u,x.W),!1,u,!1,w.gaOf(),v+"_full")
w=v}else w=new C.aNE(t.r,s)}else w=new C.aIz(m,s)
else w=D.djM
return A.t(s,A.bV(n,A.fk(A.v(A.a([new C.aUA(m,l,s),A.H(w,1),new C.aUy(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a15,B.p),s,r*2.05,s,s,B.bJ,s,s,r)}}
C.aUA.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dr(r)
r=A.hd(r)
w=new A.dH(q,r)
v=w.gK2()===0?12:w.gK2()
r=B.b.bc(B.l.q(r),2,"0")
q=(q<12?B.ha:B.jd)===B.ha?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nd,s,s,s),B.aZ,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bx,D.aRa,B.eN,D.aQl,B.eN,D.aRf],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.C_,B.a8.l(0.9),s,s,12),B.eN,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aGI,s,s,s)}}
C.aNE.prototype={
B(d){var w=null
return A.t(w,A.aF(A.v(A.a([A.W(B.Bq,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eM(D.aUI,D.d0d,this.c,A.ea(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aH(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zx,w,w,w,w,w,w,w,w,w,1/0)}}
C.aUy.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayh(B.BV,"YouTube",s===0,r,new C.d41(u))
s=u.ayh(B.kC,"Device",s===1,r,new C.d42(u))
w=r?"Power off":"Power on"
v=r?D.a_q:D.aOj
return A.t(t,A.G(A.a([q,B.am,s,B.aZ,A.aR(t,t,t,t,A.W(v,r?B.bQ:B.hn,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dA)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aGn,t,t,t)},
ayh(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.av
v=f&&g?B.a8.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aD(!1,B.U,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nQ,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aOY.prototype={
B(d){return D.avc}}
C.aIz.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ka,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tR("Serial",u.c),q=w.tR("Model",u.d),p=w.tR("Device ID",u.e),o=w.tR("IMEI",u.r),n=w.tR("MAC",u.f),m=w.tR("OS",u.w+" "+u.x),l=w.tR("Location",u.y+", "+u.z),k=w.tR("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tR("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tR("Provisioned",u.length>=10?B.b.ai(u,0,10):u)],x.p),v,B.ba,v,v,B.an,!1)},
tR(d,e){var w=null
return new A.I(B.d8,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cu,A.d(e,w,w,w,w,w,w,D.cSH,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.KC.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qF.prototype={
gaOf(){var w=this.c
return w===D.afp||w===D.afq||w===D.OX||w===D.afr}}
C.a7y.prototype={
V(){return new C.aNz(null,null)}}
C.aNz.prototype={
a_(){this.a4()
var w=A.bn(null,B.rx,null,1,null,this)
w.h3(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aYo()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.p(t,t,t,t,t,new A.ac(B.c7,B.c0,B.F,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cj(B.d7,p,t)
w=B.e.l(0.92)
q=A.aF(new A.cQ(new A.b_(p,new A.bj(0.72,1,q),q.j("b_<bl.T>")),!1,A.W(B.jX,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nC
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aP2(s,t),r,q,A.ay(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.ay(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.ay(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aA(B.ag,t,B.b5,B.t,s,t)}}
C.aP2.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l5(u,B.K,new C.cUe(this),B.bO,!0,w,w,new C.cUf(this),w)
return new C.FS(v,w)}}
C.FS.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.mk,B.TJ],x.O),B.jX)
break
case 1:w=new A.aM(A.a([B.zx,D.aAe],x.O),B.ly)
break
case 2:w=new A.aM(A.a([D.aBU,D.azD],x.O),B.Bz)
break
case 3:w=new A.aM(A.a([B.W,B.dB],x.O),B.BG)
break
case 4:w=new A.aM(A.a([B.aw,B.aN],x.O),B.o5)
break
default:w=u}v=w.a
return A.t(u,A.aF(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.amD.prototype={
n(){var w=this,v=w.aH$
if(v!=null)v.Z(0,w.gd4())
w.aH$=null
w.a3()},
bl(){this.bA()
this.bx()
this.d5()}}
C.a7z.prototype={
V(){return new C.ahy()}}
C.ahy.prototype={
a8z(d,e){var w,v=C.brL(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.du9(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e3N(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHG(){var w,v=this
if(v.w)return
v.p(new C.cPA(v))
w=v.e
if(w!=null)v.a8z(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=w
try{$.yI()
$.o1().qx(w,new C.cPJ(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cPC(v))
w=v.e
w.toString
v.a8z(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_E,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fk(A.aF(new A.I(new A.V(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Iv(n,B.oh,w)],v)
if(o.f)w.push(A.fk(A.aF(new A.aa(28,28,D.awl,n),n,n,n),B.cY,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.M2,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.ek(0,A.aD(!1,B.U,!0,n,A.aL(!1,n,!0,A.aF(A.t(n,A.G(A.a([q,B.am,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.JW,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHF(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.brL(o.a.d)
if(v!=null)w.push(A.ay(8,A.jb(D.aSF,D.d7K,new C.cPB(o),A.iK(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aA(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(os)","~()","Kz(O)","os(Z<@,@>)","a1(os)","Z<o,@>(os)","aB<~>()","Ky(O)","lp<K>(O,qF?,q?)","Xy(O,K)","uk(O,qF?,q?)","FS(O,an,dG?)"])
C.dq8.prototype={
$1(d){return new C.Kz(this.a,null)},
$S:z+2}
C.dq7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e6,B.W],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.eY,32)],x.V),g=A.L(m?B.cd:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aQ3,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f_,w,A.aR(n,n,n,n,A.W(B.d3,m?B.av:B.cY,n,n,n),n,n,n,new C.dq3(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a7,B.F,j,n,n),B.p),n,n,n,n,B.K1,n,n,n)
e=A.eB(B.cR,A.a([new C.O_("YouTube",B.M_,m,n),new C.O_("TikTok",B.ly,m,n),new C.O_("Instagram",B.Bz,m,n),new C.O_("Facebook",B.BG,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cg:B.iI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bz
r=A.W(B.fp,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aL
u=A.v(A.a([e,B.aP,A.aN(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bq(n,new A.bb(4,q,B.Y),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Su),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jb(D.aQ6,D.dbH,new C.dq4(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bu:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.cz(A.bV(f,A.v(A.a([j,new A.I(B.Xn,u,n),new A.I(D.aI1,A.G(A.a([e,B.aZ,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dq5(d),n,n),B.am,A.dL(D.aUq,D.dcw,new C.dq6(d,w),A.bx(B.a8,n,n,n,B.e,n,B.JW,n,new A.bB(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aI,B.F,i,n,n),B.p),B.br),n)},
$S:93}
C.dq3.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dq4.prototype={
$0(){C.dGu()
$.PQ().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dq5.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dq6.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.brX.prototype={
$1(d){return C.dGv(A.U(d,x.N,x.z))},
$S:z+3}
C.brY.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.brP.prototype={
$1(d){return d.c},
$S:z+0}
C.brQ.prototype={
$1(d){return d.r},
$S:z+0}
C.brR.prototype={
$1(d){return d.f},
$S:z+0}
C.brS.prototype={
$1(d){return d.at},
$S:z+0}
C.brT.prototype={
$1(d){return d.c},
$S:z+0}
C.brU.prototype={
$1(d){return d.r},
$S:z+0}
C.brV.prototype={
$1(d){return d.f},
$S:z+0}
C.brW.prototype={
$1(d){return d.at},
$S:z+0}
C.brO.prototype={
$1(d){return d.a9()},
$S:z+5}
C.brN.prototype={
$1(d){return B.b.bc(B.l.fY(d,16),2,"0").toUpperCase()},
$S:88}
C.cPr.prototype={
$0(){},
$S:0}
C.cPq.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPo.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cPp.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cPs.prototype={
$1(d){return new C.Ky(this.a,null)},
$S:z+7}
C.cPx.prototype={
$4(d,e,f,g){var w=null,v=A.aR(w,w,w,w,D.aTD,w,w,w,new C.cPw(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fM(A.G(A.a([new A.oq(D.x5,e,g,36,B.C_,w),B.aR,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fV(B.h.gU(D.x5).l(0.45+e*0.2),B.L,10)],x.S),w,w),w,w,w),1),A.aD(!1,B.U,!0,w,A.aL(!1,w,!0,new A.I(B.bJ,A.W(B.hk,A.ao(B.h.gU(D.x5),B.h.gaj(D.x5),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbs5(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.j,0,w,w),D.x5,w,g,B.fn,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:359}
C.cPw.prototype={
$0(){return A.a3(this.a,!1).eH()},
$S:0}
C.cPy.prototype={
$3(d,e,f){return new A.lp($.GZ(),new C.cPv(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cPv.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DK(d,k,x.Q)
w=w==null?k:w.glC()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.jX,B.a8,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.GZ().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.am,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dt,B.he,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bV(s,new A.j2(1.7777777777777777,C.dGw(new A.db("fleet_master_"+r,x.W),!0,r,!0,j.gaOf(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wd(0,B.t,k,B.E,k,k,k,k,!1,k,B.an,!1,A.a([new A.kN(new A.I(B.JR,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oD(D.aFV,A.aDm(new A.nO(new C.cPu(i,j),J.a4(i.d),!1,!0,!0,A.tL(),k),D.cLY),k)],w))},
$S:1754}
C.cPu.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xy(v,e,J.a4(w.d),new C.cPt(w,v),this.b,null)},
$S:z+9}
C.cPt.prototype={
$0(){return this.a.brt(this.b)},
$S:0}
C.cPz.prototype={
$0(){this.a.Vz()
return null},
$S:0}
C.cPl.prototype={
$0(){return A.a3(this.a,!1).eH()},
$S:0}
C.cPm.prototype={
$0(){C.a_n(this.a,$.brM)
return null},
$S:0}
C.cPn.prototype={
$3(d,e,f){return A.eW(new C.cPk(this.a,e))},
$S:z+10}
C.cPk.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aF(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aP,new C.aUz(u,s.a.c,s.e,s.d,new C.cPh(s),new C.cPi(s),new C.cPj(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.py,v,v,B.an),v,v,v)},
$S:1755}
C.cPh.prototype={
$0(){var w=this.a.c
w.toString
C.a_n(w,$.brM)
return null},
$S:0}
C.cPi.prototype={
$1(d){var w=this.a
return w.p(new C.cPg(w,d))},
$S:33}
C.cPg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cPj.prototype={
$0(){var w=this.a
return w.p(new C.cPf(w))},
$S:0}
C.cPf.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d41.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d42.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cUe.prototype={
$3(d,e,f){return new C.FS(this.a.c,null)},
$S:z+11}
C.cUf.prototype={
$3(d,e,f){if(f==null)return e
return new A.aA(B.ag,null,B.b5,B.t,A.a([new C.FS(this.a.c,null),D.avu],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.cPA.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cPJ.prototype={
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
w.a8z(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fP(v,"load",new C.cPG(w),!1,u)
v=w.e
v.toString
A.fP(v,"error",new C.cPH(w),!1,u)
A.bJ(B.jN,new C.cPI(w),x.H)
w=w.e
w.toString
return w},
$S:605}
C.cPG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cPF(w))},
$S:41}
C.cPF.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cPH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cPE(w))},
$S:41}
C.cPE.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cPI.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cPD(w))},
$S:12}
C.cPD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cPC.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cPB.prototype={
$0(){var w,v=C.brL(this.a.a.d)
if(v==null)return
w=window
w.toString
B.ke.Kn(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dme.prototype={
$1(d){var w,v,u,t,s=new A.xL([],[]).zF(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1756};(function aliases(){var w=C.amD.prototype
w.aYo=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahx.prototype,"gayq","boS",1)
w(u,"gbps","bpt",1)
w(u,"gbs5","bs6",6)
w(C.ahy.prototype,"gbHF","bHG",1)
v(C,"enF","dGt",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.z_,[C.dq8,C.dq7,C.brX,C.brY,C.brP,C.brQ,C.brR,C.brS,C.brT,C.brU,C.brV,C.brW,C.brO,C.brN,C.cPs,C.cPx,C.cPy,C.cPv,C.cPn,C.cPi,C.cUe,C.cUf,C.cPJ,C.cPG,C.cPH,C.dme])
v(A.a0R,[C.dq3,C.dq4,C.dq5,C.dq6,C.cPr,C.cPq,C.cPo,C.cPp,C.cPw,C.cPt,C.cPz,C.cPl,C.cPm,C.cPh,C.cPg,C.cPj,C.cPf,C.d41,C.d42,C.cPA,C.cPF,C.cPE,C.cPI,C.cPD,C.cPC,C.cPB])
v(A.as,[C.O_,C.Xy,C.aMm,C.aUz,C.aUA,C.aNE,C.aUy,C.aOY,C.aIz,C.aP2,C.FS])
v(A.an,[C.os,C.qF])
v(A.ae,[C.Kz,C.Ky,C.a7y,C.a7z])
v(A.af,[C.ahx,C.aNy,C.amD,C.ahy])
v(A.a0S,[C.cPu,C.cPk])
u(C.KC,A.aJu)
u(C.aNz,C.amD)
w(C.amD,A.dF)})()
A.dK0(b.typeUniverse,JSON.parse('{"Kz":{"ae":[],"q":[]},"Xy":{"as":[],"q":[]},"Ky":{"ae":[],"q":[]},"O_":{"as":[],"q":[]},"ahx":{"af":["Kz"]},"aMm":{"as":[],"q":[]},"aNy":{"af":["Ky"]},"aUz":{"as":[],"q":[]},"aUA":{"as":[],"q":[]},"aNE":{"as":[],"q":[]},"aUy":{"as":[],"q":[]},"aOY":{"as":[],"q":[]},"aIz":{"as":[],"q":[]},"a7y":{"ae":[],"q":[]},"FS":{"as":[],"q":[]},"aNz":{"af":["a7y"]},"aP2":{"as":[],"q":[]},"a7z":{"ae":[],"q":[]},"ahy":{"af":["a7z"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a8<a9>"),O:w("a8<x>"),e:w("a8<os>"),S:w("a8<fV>"),s:w("a8<o>"),p:w("a8<q>"),t:w("a8<K>"),X:w("ag<os>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("om"),_:w("DH"),k:w("os"),N:w("o"),Y:w("bj<a2>"),W:w("db<o>"),J:w("lp<K>"),j:w("lp<qF?>"),E:w("vg<cX>"),q:w("Yo"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_q=new A.M(983224,"MaterialIcons",!1)
D.aSM=new A.ab(D.a_q,48,B.bq,null,null,null)
D.d_4=new A.B("Powered off",null,B.amD,null,null,null,null,null,null,null,null,null)
D.bOx=w([D.aSM,B.O,D.d_4],x.p)
D.aDf=new A.eu(B.an,B.i,B.a0,B.n,null,B.q,null,0,D.bOx,null)
D.avc=new A.dl(B.K,null,null,D.aDf,null)
D.cLB=new A.aa(18,18,B.Tq,null)
D.avu=new A.dl(B.K,null,null,D.cLB,null)
D.awl=new A.h_(2,null,null,null,null,B.ab,null,null,null,null)
D.azD=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aAe=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aBU=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aFJ=new A.V(0,3,0,3)
D.aFV=new A.V(10,0,10,88)
D.aGn=new A.V(12,6,12,10)
D.aGI=new A.V(14,8,14,6)
D.aI1=new A.V(20,8,20,20)
D.XO=new A.V(8,6,15,8)
D.aOj=new A.M(983222,"MaterialIcons",!1)
D.aQ3=new A.ab(B.jX,26,B.a8,null,null,null)
D.aQ6=new A.ab(B.Zy,18,null,null,null,null)
D.aQl=new A.ab(B.th,14,B.ab,null,null,null)
D.aOD=new A.M(983420,"MaterialIcons",!1)
D.aRa=new A.ab(D.aOD,14,B.ab,null,null,null)
D.aME=new A.M(62895,"MaterialIcons",!1)
D.aRf=new A.ab(D.aME,14,B.ab,null,null,null)
D.aSF=new A.ab(B.tb,16,B.ab,null,null,null)
D.aTD=new A.ab(B.dE,20,B.ab,null,null,null)
D.aUq=new A.ab(B.iV,20,null,null,null,null)
D.aUI=new A.ab(B.hk,16,null,null,null,null)
D.bSi=w([B.aN,B.W],x.O)
D.a15=new A.ac(B.aC,B.aI,B.F,D.bSi,null,null)
D.cFa=new A.aM("NGMY OS","14.2.1")
D.cDU=new A.aM("VirtualDroid","13.8.4")
D.cDT=new A.aM("NGMY OS","15.0.0")
D.cEH=new A.aM("VirtualDroid","14.1.2")
D.cDR=new A.aM("NGMY Tab OS","12.9.7")
D.cDP=new A.aM("NGMY OS","13.5.3")
D.cDE=new A.aM("VirtualDroid","15.2.0")
D.cEg=new A.aM("NGMY OS","14.8.1")
D.cEN=new A.aM("NGMY Tab OS","13.2.4")
D.cFm=new A.aM("VirtualDroid","12.6.9")
D.cDw=new A.aM("NGMY OS","16.0.1")
D.cDj=new A.aM("VirtualDroid","14.9.0")
D.cF1=new A.aM("NGMY Tab OS","14.0.3")
D.cE2=new A.aM("NGMY OS","13.1.8")
D.cDv=new A.aM("VirtualDroid","13.4.5")
D.cDO=new A.aM("NGMY OS","15.3.2")
D.cEO=new A.aM("NGMY Tab OS","12.4.1")
D.cF4=new A.aM("VirtualDroid","16.1.0")
D.cEf=new A.aM("NGMY OS","14.4.6")
D.cFb=new A.aM("VirtualDroid","15.0.8")
D.bRv=w([D.cFa,D.cDU,D.cDT,D.cEH,D.cDR,D.cDP,D.cDE,D.cEg,D.cEN,D.cFm,D.cDw,D.cDj,D.cF1,D.cE2,D.cDv,D.cDO,D.cEO,D.cF4,D.cEf,D.cFb],A.b4("a8<+(o,o)>"))
D.x5=w([B.a8,B.fe],x.O)
D.cHs=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cH0=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cGW=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cH4=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cGS=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cH6=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cHu=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cGT=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cH_=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cH8=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cGR=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cHm=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cHj=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cGZ=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cHg=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cHf=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cGQ=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cH3=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cHd=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cHi=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7P=w([D.cHs,D.cH0,D.cGW,D.cH4,D.cGS,D.cH6,D.cHu,D.cGT,D.cH_,D.cH8,D.cGR,D.cHm,D.cHj,D.cGZ,D.cHg,D.cHf,D.cGQ,D.cH3,D.cHd,D.cHi],A.b4("a8<+(o,o,a2,a2,o)>"))
D.c_R=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afp=new C.KC(0,"youtube")
D.afq=new C.KC(1,"tiktok")
D.OX=new C.KC(2,"instagram")
D.afr=new C.KC(3,"facebook")
D.cwy=new C.KC(4,"other")
D.cL9=new A.aa(3,null,null,null)
D.cLY=new A.i2(4,10,8,0.52,null)
D.d0m=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cPl=new A.aV(D.d0m,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cSH=new A.Q(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d0d=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d7K=new A.B("Open in YouTube",null,B.j3,null,null,null,null,null,null,null,null,null)
D.dbH=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dcw=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dcD=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.djM=new C.aOY(null)})();(function staticFields(){$.dGs=20
$.azh=null
$.brM=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"esE","GZ",()=>A.abZ(0))
w($,"esF","PQ",()=>A.abZ(null))})()};
(a=>{a["lf/gmT9IacYpye9fejxqpJseZWw="]=a.current})($__dart_deferred_initializers__);