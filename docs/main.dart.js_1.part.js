((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
elS(d,e){A.a4(d,!1).cz(A.eF(new C.dnF(e),!0,null,x.H))},
a_f(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PL()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.b9(n,B.aL,B.az),t)
w=3
return A.b(A.dA(B.L,new C.dnE(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_f)
case 3:r=g
s.G$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e16(r)
if(q==null){d.I(x.q).f.U(D.cOx)
w=1
break}w=4
return A.b(A.bK(B.ih,null,x.H),$async$a_f)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dDU=n
p=C.e10(n)
n=$.GU()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.drG(q)
d.I(x.q).f.U(A.bt(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_f,v)},
dDX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
Kv(d){return C.e19(d)},
e19(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Kv=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Kv)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aB(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eL(r,x.f)
k=A.dq(k,new C.bqL(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("aj<E.E>")
i=A.A(new A.aj(k,new C.bqM(),j),j.j("E.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dDZ(q)
w=12
return A.b(C.Ku(a3,p),$async$Kv)
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
case 9:case 5:o=A.aL(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dDX(A.V(n,x.N,x.z))
l=C.dDZ(A.a([m],x.e))
w=21
return A.b(C.Ku(a3,l),$async$Kv)
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
case 18:case 14:q=C.e17()
w=22
return A.b(C.Ku(a3,q),$async$Kv)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kv,v)},
dDZ(d){var w=A.Z(d).j("F<1,o>"),v=new A.F(d,new C.bqD(),w).ew(0),u=new A.F(d,new C.bqE(),w).ew(0),t=new A.F(d,new C.bqF(),w).ew(0),s=new A.F(d,new C.bqG(),w).ew(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.drH(null,q,u,t,v,s));++q}return r},
ayK(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$ayK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kv(d),$async$ayK)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.df(t,new C.bqH(),s).ew(0)
p=r.df(t,new C.bqI(),s).ew(0)
o=r.df(t,new C.bqJ(),s).ew(0)
n=r.df(t,new C.bqK(),s).ew(0)
m=C.drH(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Ku(d,t),$async$ayK)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ayK,v)},
Ku(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Ku=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Ku)
case 2:u=g
t=B.b.i(d)
s=J.b0(e,new C.bqC(),x.P)
s=A.A(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aw("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ao(s,null)),$async$Ku)
case 3:return A.h(null,v)}})
return A.i($async$Ku,v)},
e17(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dz(20,x.k)
for(w=0;w<20;++w)q[w]=C.drH(w,w,t,s,u,r)
return q},
drH(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jN(),h=d==null,g=D.a7C[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7C[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bI(256)
n=new A.F(p,new C.bqB(),A.Z(p).j("F<1,o>")).fD(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bI(10)
t=B.h.fD(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bh(B.l.fY(i.bI(256),16),2,"0")
s=B.h.bj(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a2(e,20)
k=D.c_2[w]
j=D.bQK[w]
return new C.os("vd_"+1000*Date.now()+"_"+e+"_"+i.bI(99999),"Device "+B.b.bh(B.l.q(e+1),2,"0"),u,k,C.e18(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e18(d,e){var w,v=J.dz(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bh(B.l.fY(d.bI(256),16),2,"0")
return B.h.fD(v)},
dnF:function dnF(d){this.a=d},
dnE:function dnE(d,e){this.a=d
this.b=e},
dnA:function dnA(d){this.a=d},
dnB:function dnB(d){this.a=d},
dnC:function dnC(d){this.a=d},
dnD:function dnD(d,e){this.a=d
this.b=e},
NU:function NU(d,e,f,g){var _=this
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
bqL:function bqL(){},
bqM:function bqM(){},
bqD:function bqD(){},
bqE:function bqE(){},
bqF:function bqF(){},
bqG:function bqG(){},
bqH:function bqH(){},
bqI:function bqI(){},
bqJ:function bqJ(){},
bqK:function bqK(){},
bqC:function bqC(){},
bqB:function bqB(){},
Kt:function Kt(d,e){this.c=d
this.a=e},
ahd:function ahd(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cNk:function cNk(){},
cNj:function cNj(d,e){this.a=d
this.b=e},
cNh:function cNh(d){this.a=d},
cNi:function cNi(d,e){this.a=d
this.b=e},
cNl:function cNl(d){this.a=d},
cNq:function cNq(d){this.a=d},
cNp:function cNp(d){this.a=d},
cNr:function cNr(d,e){this.a=d
this.b=e},
cNo:function cNo(d,e,f){this.a=d
this.b=e
this.c=f},
cNn:function cNn(d,e){this.a=d
this.b=e},
cNm:function cNm(d,e){this.a=d
this.b=e},
cNs:function cNs(d){this.a=d},
Xt:function Xt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLG:function aLG(d,e){this.c=d
this.a=e},
Ks:function Ks(d,e){this.c=d
this.a=e},
aMS:function aMS(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cNe:function cNe(d){this.a=d},
cNf:function cNf(d){this.a=d},
cNg:function cNg(d){this.a=d},
cNd:function cNd(d,e){this.a=d
this.b=e},
cNa:function cNa(d){this.a=d},
cNb:function cNb(d){this.a=d},
cN9:function cN9(d,e){this.a=d
this.b=e},
cNc:function cNc(d){this.a=d},
cN8:function cN8(d){this.a=d},
aTP:function aTP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aTQ:function aTQ(d,e,f){this.c=d
this.d=e
this.a=f},
aMY:function aMY(d,e){this.c=d
this.a=e},
aTO:function aTO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d1N:function d1N(d){this.a=d},
d1O:function d1O(d){this.a=d},
aOh:function aOh(d){this.a=d},
aHT:function aHT(d,e){this.c=d
this.a=e},
e16(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e15(v)
if(u!=null)return new C.qA(w,C.drF(u,!1),D.afa,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e14(v)
if(t!=null)return new C.qA(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afb,"TikTok",q)
s=C.e13(w,v)
if(s!=null)return s
r=C.e12(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qA(w,w,D.cvK,"Video",q)
return q},
e13(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qA(d,"https://www.instagram.com/reel/"+w+u,D.OL,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qA(d,"https://www.instagram.com/p/"+w+u,D.OL,t,null)}return null},
e12(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qA(d,"https://www.facebook.com/plugins/video.php?href="+A.fb(2,d,B.bi,!1)+"&show_text=false&width=734",D.afc,"Facebook",null)},
e15(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e14(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
Kw:function Kw(d,e){this.a=d
this.b=e},
qA:function qA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7k:function a7k(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aMT:function aMT(d,e){var _=this
_.d=$
_.cP$=d
_.aP$=e
_.c=_.a=null},
aOm:function aOm(d,e){this.c=d
this.a=e},
cS6:function cS6(d){this.a=d},
cS7:function cS7(d){this.a=d},
FO:function FO(d,e){this.c=d
this.a=e},
amb:function amb(){},
dDY(d,e,f,g,h,i){return new C.a7l(i,f,h,e,g,d)},
ekx(d){var w=window
w.toString
A.fW(w,"message",new C.djQ(d),!1,x._)},
a7l:function a7l(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahe:function ahe(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cNt:function cNt(d){this.a=d},
cNC:function cNC(d){this.a=d},
cNz:function cNz(d){this.a=d},
cNy:function cNy(d){this.a=d},
cNA:function cNA(d){this.a=d},
cNx:function cNx(d){this.a=d},
cNB:function cNB(d){this.a=d},
cNw:function cNw(d){this.a=d},
cNv:function cNv(d){this.a=d},
cNu:function cNu(d){this.a=d},
djQ:function djQ(d){this.a=d},
e0Z(){var w,v,u
try{v=A.xB()
w=v.guU(v)
if(J.a5(w)!==0&&!J.w(w,"null")&&!J.cK(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
drF(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bj(w,"&")},
bqz(d){var w=A.aq(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dDT(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e1_(d,e,f){var w,v,u=C.bqz(d)
if(u!=null){if(f){w=C.e0Z()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dDT(C.drF(u,e))}return C.dDT(d)},
e10(d){if(d<=4)return 0
return B.l.aG(d-1,4)*4},
e11(d){var w
if($.PL().a==null)return!1
w=$.GU().a
return d>=w&&d<w+4},
dDW(){var w=$.ayJ
if(w!=null)w.ac(0)
$.ayJ=null
$.GU().sv(0,0)},
dDV(){var w,v,u,t=$.PL()
if(t.a==null)return
w=$.ayJ
if(w!=null)w.ac(0)
v=$.dDU
if(v<=4){t=t.a
t.toString
C.drG(t)
return}w=$.GU()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.drG(t)},
drG(d){var w=$.ayJ
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
default:w=null}$.ayJ=A.dM(A.dw(0,0,0,0,0,w),C.ekM())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NU.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.L(B.a9.l(0.25),B.u,1),r=A.W(this.d,B.a9,w,w,14)
return A.t(w,A.G(A.a([r,B.fI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,B.he,w,w,w)}}
C.os.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kt.prototype={
V(){return new C.ahd(A.a([],x.e))},
gdI(){return this.c}}
C.ahd.prototype={
a_(){var w=this
w.a4()
$.GU().aq(0,w.gayj())
C.ekx(w.gbpe())
w.Zx()},
boE(){if(this.c!=null)this.n(new C.cNk())},
bpf(){C.dDV()},
p(){$.GU().Z(0,this.gayj())
C.dDW()
$.PL().sv(0,null)
this.a5()},
Zx(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Kv(t.a.c),$async$Zx)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cNj(t,s))
$.bqA=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Zx,v)},
Vt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cNh(t))
w=3
return A.b(C.ayK(t.a.c),$async$Vt)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cNi(t,s))
$.bqA=J.a5(t.d)
t.c.I(x.q).f.U(A.bt(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vt,v)},
brg(d){var w=this.c
w.toString
A.a4(w,!1).cz(A.eF(new C.cNl(d),!1,null,x.H))},
brT(){var w=this.c
w.toString
return C.a_f(w,J.a5(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bx,s=A.c1(!0,A.v(A.a([new A.I(D.XE,new A.iT(new C.cNq(w),v),v),A.H(w.e?B.nn:new A.lo($.PL(),new C.cNr(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.asp(B.a9,B.Hx,B.mz,D.dbI,w.e?v:new C.cNs(w)),v)}}
C.Xt.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a9.l(0.18),B.dN,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7k(n,!0,!C.e11(w),"Fold "+(B.l.aG(w,4)+1)+"/"+B.l.aG(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jV,B.nv,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zl,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aH(!1,B.U,!0,u,A.aP(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bW(p,A.fp(A.v(A.a([new C.aLG(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C_,B.a9.l(0.85),u,u,9),D.cKm,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.au,u,u,u,u,u,D.aEY,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aC),B.k,u,u,new A.p(u,u,r,s,q,D.a0U,B.p),u,u,u,B.hh,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a9.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a7)}}
C.aLG.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gak(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.t7,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.au,w,w,w,w,w,B.Xs,w,w,w)}}
C.Ks.prototype={
V(){return new C.aMS()}}
C.aMS.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bx,t=A.aS(w,w,w,w,B.a00,w,w,w,new C.cNe(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c1(!0,A.v(A.a([new A.I(D.XE,A.G(A.a([t,A.H(new A.Kh(A.G(A.a([A.H(new A.I(B.jR,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aH(!1,B.U,!0,w,A.aP(!1,w,!0,new A.I(B.b9,A.W(B.hk,B.a9,w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cNf(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a7)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lo($.PL(),new C.cNg(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aTP.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a9.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.dg,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dDY(new A.dr(v+"_full_"+u,x.W),!1,u,!1,w.gaO9(),v+"_full")
w=v}else w=new C.aMY(t.r,s)}else w=new C.aHT(m,s)
else w=D.diN
return A.t(s,A.bW(n,A.fp(A.v(A.a([new C.aTQ(m,l,s),A.H(w,1),new C.aTO(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aC),B.k,s,s,new A.p(s,s,o,q,p,D.a0U,B.p),s,r*2.05,s,B.bI,s,s,r)}}
C.aTQ.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.du(r)
r=A.hh(r)
w=new A.dF(q,r)
v=w.gJY()===0?12:w.gJY()
r=B.b.bh(B.l.q(r),2,"0")
q=(q<12?B.hb:B.je)===B.hb?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.n7,s,s,s),B.b_,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bC,D.aQk,B.f_,D.aPw,B.f_,D.aQp],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.BS,B.a9.l(0.9),s,s,12),B.f_,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.au,s,s,s,s,s,D.aFT,s,s,s)}}
C.aMY.prototype={
B(d){var w=null
return A.t(w,A.aG(A.v(A.a([A.W(B.Bh,B.e.l(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.eM(D.aTU,D.d_g,this.c,A.e2(w,w,w,w,w,w,w,w,w,B.a9,w,w,w,w,w,new A.aI(B.a9.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zl,w,w,w,w,w,w,w,w,1/0)}}
C.aTO.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aya(B.BN,"YouTube",s===0,r,new C.d1N(u))
s=u.aya(B.kA,"Device",s===1,r,new C.d1O(u))
w=r?"Power off":"Power on"
v=r?D.a_e:D.aNt
return A.t(t,A.G(A.a([q,B.an,s,B.b_,A.aS(t,t,t,t,A.W(v,r?B.bJ:B.hn,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.au,t,t,t,t,t,D.aFz,t,t,t)},
aya(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a9:B.av
v=f&&g?B.a9.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aH(!1,B.U,!0,u,A.aP(!1,A.m(10),!0,new A.I(B.nH,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a7),1)}}
C.aOh.prototype={
B(d){return D.auR}}
C.aHT.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.jB,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tR("Serial",u.c),q=w.tR("Model",u.d),p=w.tR("Device ID",u.e),o=w.tR("IMEI",u.r),n=w.tR("MAC",u.f),m=w.tR("OS",u.w+" "+u.x),l=w.tR("Location",u.y+", "+u.z),k=w.tR("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tR("Timezone",u.at)
u=u.ax
return A.e7(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tR("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b9,v,v,B.ak,!1)},
tR(d,e){var w=null
return new A.I(B.d2,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ct,A.d(e,w,w,w,w,w,w,D.cRR,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.Kw.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qA.prototype={
gaO9(){var w=this.c
return w===D.afa||w===D.afb||w===D.OL||w===D.afc}}
C.a7k.prototype={
V(){return new C.aMT(null,null)}}
C.aMT.prototype={
a_(){this.a4()
var w=A.br(null,B.vx,null,1,null,this)
w.ih(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aYg()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cF(t,new A.p(t,t,t,t,t,new A.ac(B.ch,B.c0,B.F,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bu),q=x.Y,p=u.d
p===$&&A.c()
p=A.cn(B.dB,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cV(new A.b1(p,new A.bl(0.72,1,q),q.j("b1<bk.T>")),!1,A.W(B.jV,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nv
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aOm(s,t),r,q,A.aB(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aB(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aB(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aC(B.ag,t,B.b6,B.t,s,t)}}
C.aOm.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kD(u,B.M,new C.cS6(this),B.ce,B.bP,!0,w,w,new C.cS7(this),w)
return new C.FO(v,w)}}
C.FO.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aQ(A.a([B.rf,B.TE],x.O),B.jV)
break
case 1:w=new A.aQ(A.a([B.zl,D.azD],x.O),B.lv)
break
case 2:w=new A.aQ(A.a([D.aBc,D.az6],x.O),B.Bq)
break
case 3:w=new A.aQ(A.a([B.X,B.dw],x.O),B.By)
break
case 4:w=new A.aQ(A.a([B.au,B.aO],x.O),B.nX)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a9.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aE,B.aJ,B.F,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.amb.prototype={
p(){var w=this,v=w.aP$
if(v!=null)v.Z(0,w.gdl())
w.aP$=null
w.a5()},
bl(){this.bC()
this.bA()
this.dm()}}
C.a7l.prototype={
V(){return new C.ahe()}}
C.ahe.prototype={
a8r(d,e){var w,v=C.bqz(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.drF(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e1_(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHn(){var w,v=this
if(v.w)return
v.n(new C.cNt(v))
w=v.e
if(w!=null)v.a8r(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aM()
u.d=w
try{$.yB()
$.o1().qB(w,new C.cNC(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cNv(v))
w=v.e
w.toString
v.a8r(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_t,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fp(A.aG(new A.I(new A.T(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Ip(n,B.o8,w)],v)
if(o.f)w.push(A.fp(A.aG(new A.ab(28,28,D.avY,n),n,n,n),B.cX,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bm,B.u,1)
q=A.W(B.LS,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eq(0,A.aH(!1,B.U,!0,n,A.aP(!1,n,!0,A.aG(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,B.AC,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHm(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a7)))}v=C.bqz(o.a.d)
if(v!=null)w.push(A.aB(8,A.jo(D.aRP,D.d6S,new C.cNu(o),A.iW(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.he,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aC(B.ag,n,B.b6,B.t,w,n)}}
var z=a.updateTypes(["o(os)","~()","Kt(O)","os(a_<@,@>)","a0(os)","a_<o,@>(os)","aD<~>()","Ks(O)","lo<K>(O,qA?,q?)","Xt(O,K)","uc(O,qA?,q?)","FO(O,ao,dL?)"])
C.dnF.prototype={
$1(d){return new C.Kt(this.a,null)},
$S:z+2}
C.dnE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e3,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.H,B.a9.l(0.22),B.eY,32)],x.V),g=A.L(m?B.c1:B.a9.l(0.18),B.u,1),f=A.m(28),e=B.a9.l(m?0.35:0.14)
j=A.a([e,B.ax.l(m?0.18:0.08)],j)
e=A.t(n,D.aPe,B.k,n,n,new A.p(B.a9.l(0.18),n,A.L(B.a9.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.am,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f6,w,A.aS(n,n,n,n,A.W(B.d7,m?B.av:B.cX,n,n,n),n,n,n,new C.dnA(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a5,B.a6,B.F,j,n,n),B.p),n,n,n,B.JS,n,n,n)
e=A.et(B.cO,A.a([new C.NU("YouTube",B.LP,m,n),new C.NU("TikTok",B.lv,m,n),new C.NU("Instagram",B.Bq,m,n),new C.NU("Facebook",B.By,m,n)],v),B.cz,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cf:B.iL,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bx
r=A.W(B.fl,B.a9.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c1:B.aM
u=A.v(A.a([e,B.aQ,A.aN(n,B.Q,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bm(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aI(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Sn),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.a8,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jo(D.aPh,D.daM,new C.dnB(d),A.iW(n,n,n,n,n,n,n,n,n,n,n,m?B.bs:B.am,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.T(12,0,12,12+l.f.d),A.cF(A.bW(f,A.v(A.a([j,new A.I(B.Xe,u,n),new A.I(D.aHc,A.G(A.a([e,B.b_,A.c2(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dnC(d),n,n),B.an,A.dI(D.aTB,D.dbB,new C.dnD(d,w),A.by(B.a9,n,n,n,B.e,n,B.AC,n,new A.bD(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aC),new A.p(n,n,g,k,h,new A.ac(B.aE,B.aJ,B.F,i,n,n),B.p),B.bu),n)},
$S:90}
C.dnA.prototype={
$0(){A.a4(this.a,!1).R(null)
return null},
$S:0}
C.dnB.prototype={
$0(){C.dDW()
$.PL().sv(0,null)
A.a4(this.a,!1).R(null)},
$S:0}
C.dnC.prototype={
$0(){A.a4(this.a,!1).R(null)
return null},
$S:0}
C.dnD.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a4(this.a,!1).R(w)
return null},
$S:0}
C.bqL.prototype={
$1(d){return C.dDX(A.V(d,x.N,x.z))},
$S:z+3}
C.bqM.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bqD.prototype={
$1(d){return d.c},
$S:z+0}
C.bqE.prototype={
$1(d){return d.r},
$S:z+0}
C.bqF.prototype={
$1(d){return d.f},
$S:z+0}
C.bqG.prototype={
$1(d){return d.at},
$S:z+0}
C.bqH.prototype={
$1(d){return d.c},
$S:z+0}
C.bqI.prototype={
$1(d){return d.r},
$S:z+0}
C.bqJ.prototype={
$1(d){return d.f},
$S:z+0}
C.bqK.prototype={
$1(d){return d.at},
$S:z+0}
C.bqC.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bqB.prototype={
$1(d){return B.b.bh(B.l.fY(d,16),2,"0").toUpperCase()},
$S:84}
C.cNk.prototype={
$0(){},
$S:0}
C.cNj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cNh.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cNi.prototype={
$0(){var w=this.a,v=A.A(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cNl.prototype={
$1(d){return new C.Ks(this.a,null)},
$S:z+7}
C.cNq.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,D.aSO,w,w,w,new C.cNp(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a5(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fG(A.G(A.a([new A.oq(D.wT,e,g,36,B.BS,w),B.aR,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fN(B.h.gT(D.wT).l(0.45+e*0.2),B.J,10)],x.S),w,w),w,w,w),1),A.aH(!1,B.U,!0,w,A.aP(!1,w,!0,new A.I(B.bI,A.W(B.hk,A.at(B.h.gT(D.wT),B.h.gak(D.wT),e),w,w,28),w),B.cp,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbrS(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a7)],s),B.n,w,B.i,B.j,0,w,w),D.wT,w,g,B.fB,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:327}
C.cNp.prototype={
$0(){return A.a4(this.a,!1).eE()},
$S:0}
C.cNr.prototype={
$3(d,e,f){return new A.lo($.GU(),new C.cNo(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cNo.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DE(d,k,x.Q)
w=w==null?k:w.glC()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a9.l(0.12)
s=A.m(12)
r=A.L(B.a9.l(0.35),B.u,1)
q=A.W(B.jV,B.a9,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.GU().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,B.dx,B.hf,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bW(s,new A.j1(1.7777777777777777,C.dDY(new A.dr("fleet_master_"+r,x.W),!0,r,!0,j.gaO9(),"fleet_master"),k),B.aC),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.w6(0,B.t,k,B.E,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kN(new A.I(B.JJ,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oD(D.aF9,A.aCN(new A.nN(new C.cNn(i,j),J.a5(i.d),!1,!0,!0,A.tF(),k),D.cL9),k)],w))},
$S:1744}
C.cNn.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xt(v,e,J.a5(w.d),new C.cNm(w,v),this.b,null)},
$S:z+9}
C.cNm.prototype={
$0(){return this.a.brg(this.b)},
$S:0}
C.cNs.prototype={
$0(){this.a.Vt()
return null},
$S:0}
C.cNe.prototype={
$0(){return A.a4(this.a,!1).eE()},
$S:0}
C.cNf.prototype={
$0(){C.a_f(this.a,$.bqA)
return null},
$S:0}
C.cNg.prototype={
$3(d,e,f){return A.eW(new C.cNd(this.a,e))},
$S:z+10}
C.cNd.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cv(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aQ,new C.aTP(u,s.a.c,s.e,s.d,new C.cNa(s),new C.cNb(s),new C.cNc(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.pj,v,v,B.ak),v,v,v)},
$S:1745}
C.cNa.prototype={
$0(){var w=this.a.c
w.toString
C.a_f(w,$.bqA)
return null},
$S:0}
C.cNb.prototype={
$1(d){var w=this.a
return w.n(new C.cN9(w,d))},
$S:32}
C.cN9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNc.prototype={
$0(){var w=this.a
return w.n(new C.cN8(w))},
$S:0}
C.cN8.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d1N.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d1O.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cS6.prototype={
$3(d,e,f){return new C.FO(this.a.c,null)},
$S:z+11}
C.cS7.prototype={
$3(d,e,f){if(f==null)return e
return new A.aC(B.ag,null,B.b6,B.t,A.a([new C.FO(this.a.c,null),D.av7],x.p),null)},
$C:"$3",
$R:3,
$S:228}
C.cNt.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cNC.prototype={
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
w.a8r(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fW(v,"load",new C.cNz(w),!1,u)
v=w.e
v.toString
A.fW(v,"error",new C.cNA(w),!1,u)
A.bK(B.jg,new C.cNB(w),x.H)
w=w.e
w.toString
return w},
$S:618}
C.cNz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cNy(w))},
$S:38}
C.cNy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cNA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cNx(w))},
$S:38}
C.cNx.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cNB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cNw(w))},
$S:12}
C.cNw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cNv.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cNu.prototype={
$0(){var w,v=C.bqz(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kY.Tc(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.djQ.prototype={
$1(d){var w,v,u,t,s=new A.Fl([],[]).Jb(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1746};(function aliases(){var w=C.amb.prototype
w.aYg=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahd.prototype,"gayj","boE",1)
w(u,"gbpe","bpf",1)
w(u,"gbrS","brT",6)
w(C.ahe.prototype,"gbHm","bHn",1)
v(C,"ekM","dDV",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yU,[C.dnF,C.dnE,C.bqL,C.bqM,C.bqD,C.bqE,C.bqF,C.bqG,C.bqH,C.bqI,C.bqJ,C.bqK,C.bqC,C.bqB,C.cNl,C.cNq,C.cNr,C.cNo,C.cNg,C.cNb,C.cS6,C.cS7,C.cNC,C.cNz,C.cNA,C.djQ])
v(A.a0E,[C.dnA,C.dnB,C.dnC,C.dnD,C.cNk,C.cNj,C.cNh,C.cNi,C.cNp,C.cNm,C.cNs,C.cNe,C.cNf,C.cNa,C.cN9,C.cNc,C.cN8,C.d1N,C.d1O,C.cNt,C.cNy,C.cNx,C.cNB,C.cNw,C.cNv,C.cNu])
v(A.av,[C.NU,C.Xt,C.aLG,C.aTP,C.aTQ,C.aMY,C.aTO,C.aOh,C.aHT,C.aOm,C.FO])
v(A.ao,[C.os,C.qA])
v(A.ae,[C.Kt,C.Ks,C.a7k,C.a7l])
v(A.ag,[C.ahd,C.aMS,C.amb,C.ahe])
v(A.a0F,[C.cNn,C.cNd])
u(C.Kw,A.aIO)
u(C.aMT,C.amb)
w(C.amb,A.dW)})()
A.dHp(b.typeUniverse,JSON.parse('{"Kt":{"ae":[],"q":[]},"Xt":{"av":[],"q":[]},"Ks":{"ae":[],"q":[]},"NU":{"av":[],"q":[]},"ahd":{"ag":["Kt"]},"aLG":{"av":[],"q":[]},"aMS":{"ag":["Ks"]},"aTP":{"av":[],"q":[]},"aTQ":{"av":[],"q":[]},"aMY":{"av":[],"q":[]},"aTO":{"av":[],"q":[]},"aOh":{"av":[],"q":[]},"aHT":{"av":[],"q":[]},"a7k":{"ae":[],"q":[]},"FO":{"av":[],"q":[]},"aMT":{"ag":["a7k"]},"aOm":{"av":[],"q":[]},"a7l":{"ae":[],"q":[]},"ahe":{"ag":["a7l"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<os>"),S:w("a3<fN>"),s:w("a3<o>"),p:w("a3<q>"),t:w("a3<K>"),X:w("af<os>"),a:w("af<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("om"),_:w("DB"),k:w("os"),N:w("o"),Y:w("bl<a2>"),W:w("dr<o>"),J:w("lo<K>"),j:w("lo<qA?>"),E:w("tg<cQ>"),q:w("Yj"),z:w("@"),Q:w("ao?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_e=new A.M(983224,"MaterialIcons",!1)
D.aRW=new A.aa(D.a_e,48,B.bm,null,null,null)
D.cZ9=new A.B("Powered off",null,B.amh,null,null,null,null,null,null,null,null,null)
D.bNM=w([D.aRW,B.N,D.cZ9],x.p)
D.aCt=new A.ev(B.ak,B.i,B.a0,B.n,null,B.q,null,0,D.bNM,null)
D.auR=new A.dm(B.M,null,null,D.aCt,null)
D.cKN=new A.ab(18,18,B.Tl,null)
D.av7=new A.dm(B.M,null,null,D.cKN,null)
D.avY=new A.h_(2,null,null,null,null,B.ab,null,null,null,null)
D.az6=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.azD=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aBc=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aEY=new A.T(0,3,0,3)
D.aF9=new A.T(10,0,10,88)
D.aFz=new A.T(12,6,12,10)
D.aFT=new A.T(14,8,14,6)
D.aHc=new A.T(20,8,20,20)
D.XE=new A.T(8,6,15,8)
D.aNt=new A.M(983222,"MaterialIcons",!1)
D.aPe=new A.aa(B.jV,26,B.a9,null,null,null)
D.aPh=new A.aa(B.Zo,18,null,null,null,null)
D.aPw=new A.aa(B.t7,14,B.ab,null,null,null)
D.aNN=new A.M(983420,"MaterialIcons",!1)
D.aQk=new A.aa(D.aNN,14,B.ab,null,null,null)
D.aLO=new A.M(62895,"MaterialIcons",!1)
D.aQp=new A.aa(D.aLO,14,B.ab,null,null,null)
D.aRP=new A.aa(B.t1,16,B.ab,null,null,null)
D.aSO=new A.aa(B.dD,20,B.ab,null,null,null)
D.aTB=new A.aa(B.iq,20,null,null,null,null)
D.aTU=new A.aa(B.hk,16,null,null,null,null)
D.bRx=w([B.aO,B.X],x.O)
D.a0U=new A.ac(B.aE,B.aJ,B.F,D.bRx,null,null)
D.cEl=new A.aQ("NGMY OS","14.2.1")
D.cD4=new A.aQ("VirtualDroid","13.8.4")
D.cD3=new A.aQ("NGMY OS","15.0.0")
D.cDS=new A.aQ("VirtualDroid","14.1.2")
D.cD1=new A.aQ("NGMY Tab OS","12.9.7")
D.cD_=new A.aQ("NGMY OS","13.5.3")
D.cCP=new A.aQ("VirtualDroid","15.2.0")
D.cDr=new A.aQ("NGMY OS","14.8.1")
D.cDY=new A.aQ("NGMY Tab OS","13.2.4")
D.cEx=new A.aQ("VirtualDroid","12.6.9")
D.cCI=new A.aQ("NGMY OS","16.0.1")
D.cCx=new A.aQ("VirtualDroid","14.9.0")
D.cEc=new A.aQ("NGMY Tab OS","14.0.3")
D.cDd=new A.aQ("NGMY OS","13.1.8")
D.cCH=new A.aQ("VirtualDroid","13.4.5")
D.cCZ=new A.aQ("NGMY OS","15.3.2")
D.cDZ=new A.aQ("NGMY Tab OS","12.4.1")
D.cEf=new A.aQ("VirtualDroid","16.1.0")
D.cDq=new A.aQ("NGMY OS","14.4.6")
D.cEm=new A.aQ("VirtualDroid","15.0.8")
D.bQK=w([D.cEl,D.cD4,D.cD3,D.cDS,D.cD1,D.cD_,D.cCP,D.cDr,D.cDY,D.cEx,D.cCI,D.cCx,D.cEc,D.cDd,D.cCH,D.cCZ,D.cDZ,D.cEf,D.cDq,D.cEm],A.b4("a3<+(o,o)>"))
D.wT=w([B.a9,B.fd],x.O)
D.cGD=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cGb=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cG6=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cGf=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cG2=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cGh=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cGF=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cG3=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cGa=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cGj=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cG1=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cGx=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cGu=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cG9=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cGr=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cGq=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cG0=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cGe=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cGo=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cGt=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7C=w([D.cGD,D.cGb,D.cG6,D.cGf,D.cG2,D.cGh,D.cGF,D.cG3,D.cGa,D.cGj,D.cG1,D.cGx,D.cGu,D.cG9,D.cGr,D.cGq,D.cG0,D.cGe,D.cGo,D.cGt],A.b4("a3<+(o,o,a2,a2,o)>"))
D.c_2=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afa=new C.Kw(0,"youtube")
D.afb=new C.Kw(1,"tiktok")
D.OL=new C.Kw(2,"instagram")
D.afc=new C.Kw(3,"facebook")
D.cvK=new C.Kw(4,"other")
D.cKm=new A.ab(3,null,null,null)
D.cL9=new A.i3(4,10,8,0.52,null)
D.d_p=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cOx=new A.b_(D.d_p,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.t,null)
D.cRR=new A.Q(!0,B.e,null,null,null,null,11,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d_g=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d6S=new A.B("Open in YouTube",null,B.j3,null,null,null,null,null,null,null,null,null)
D.daM=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dbB=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dbI=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.diN=new C.aOh(null)})();(function staticFields(){$.dDU=20
$.ayJ=null
$.bqA=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"epI","GU",()=>A.abL(0))
w($,"epJ","PL",()=>A.abL(null))})()};
(a=>{a["vaE1TudJzr+9m9bIUl29ah0f+kA="]=a.current})($__dart_deferred_initializers__);