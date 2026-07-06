((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
edY(d,e){A.a7(d,!1).cJ(A.eM(new C.dgt(e),!0,null,x.H))},
YY(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OJ()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dgs(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YY)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dUp(r)
if(q==null){d.G(x.q).f.R(D.cJb)
w=1
break}w=4
return A.b(A.bR(B.i7,null,x.H),$async$YY)
case 4:if(d.e==null){w=1
break}n=B.l.Z(e,1,999)
$.dwG=n
p=C.dUj(n)
n=$.G8()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dkD(q)
d.G(x.q).f.R(A.bo(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YY,v)},
dwJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.ob(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JD(d){return C.dUs(d)},
dUs(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JD=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$JD)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aG(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eV(r,x.f)
k=A.du(k,new C.bmP(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.B(new A.ag(k,new C.bmQ(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dwL(q)
w=12
return A.b(C.JC(a3,p),$async$JD)
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
case 9:case 5:o=A.aN(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dwJ(A.Q(n,x.N,x.z))
l=C.dwL(A.a([m],x.e))
w=21
return A.b(C.JC(a3,l),$async$JD)
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
case 18:case 14:q=C.dUq()
w=22
return A.b(C.JC(a3,q),$async$JD)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JD,v)},
dwL(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.bmH(),w).eI(0),u=new A.D(d,new C.bmI(),w).eI(0),t=new A.D(d,new C.bmJ(),w).eI(0),s=new A.D(d,new C.bmK(),w).eI(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dkE(null,q,u,t,v,s));++q}return r},
aw6(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aw6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JD(d),$async$aw6)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.dc(t,new C.bmL(),s).eI(0)
p=r.dc(t,new C.bmM(),s).eI(0)
o=r.dc(t,new C.bmN(),s).eI(0)
n=r.dc(t,new C.bmO(),s).eI(0)
m=C.dkE(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JC(d,t),$async$aw6)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw6,v)},
JC(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$JC)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.bmG(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ar(s,null)),$async$JC)
case 3:return A.h(null,v)}})
return A.i($async$JC,v)},
dUq(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dkE(w,w,t,s,u,r)
return q},
dkE(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jA(),h=d==null,g=D.a6_[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6_[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bmF(),A.W(p).j("D<1,o>")).fn(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fn(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.ht(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a7(e,20)
k=D.bVZ[w]
j=D.bN4[w]
return new C.ob("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dUr(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().a_())},
dUr(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.ht(d.bG(256),16),2,"0")
return B.h.fn(v)},
dgt:function dgt(d){this.a=d},
dgs:function dgs(d,e){this.a=d
this.b=e},
dgo:function dgo(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d,e){this.a=d
this.b=e},
N4:function N4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ob:function ob(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bmP:function bmP(){},
bmQ:function bmQ(){},
bmH:function bmH(){},
bmI:function bmI(){},
bmJ:function bmJ(){},
bmK:function bmK(){},
bmL:function bmL(){},
bmM:function bmM(){},
bmN:function bmN(){},
bmO:function bmO(){},
bmG:function bmG(){},
bmF:function bmF(){},
JB:function JB(d,e){this.c=d
this.a=e},
afA:function afA(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cH2:function cH2(){},
cH1:function cH1(d,e){this.a=d
this.b=e},
cH_:function cH_(d){this.a=d},
cH0:function cH0(d,e){this.a=d
this.b=e},
cH3:function cH3(d){this.a=d},
cH7:function cH7(d){this.a=d},
cH8:function cH8(d,e){this.a=d
this.b=e},
cH6:function cH6(d,e,f){this.a=d
this.b=e
this.c=f},
cH5:function cH5(d,e){this.a=d
this.b=e},
cH4:function cH4(d,e){this.a=d
this.b=e},
cH9:function cH9(d){this.a=d},
Wg:function Wg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIW:function aIW(d,e){this.c=d
this.a=e},
JA:function JA(d,e){this.c=d
this.a=e},
aJX:function aJX(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGX:function cGX(d){this.a=d},
cGY:function cGY(d){this.a=d},
cGZ:function cGZ(d){this.a=d},
cGW:function cGW(d,e){this.a=d
this.b=e},
cGT:function cGT(d){this.a=d},
cGU:function cGU(d){this.a=d},
cGS:function cGS(d,e){this.a=d
this.b=e},
cGV:function cGV(d){this.a=d},
cGR:function cGR(d){this.a=d},
aQJ:function aQJ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQK:function aQK(d,e,f){this.c=d
this.d=e
this.a=f},
aK2:function aK2(d,e){this.c=d
this.a=e},
aQI:function aQI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cVC:function cVC(d){this.a=d},
cVD:function cVD(d){this.a=d},
aLh:function aLh(d){this.a=d},
aFd:function aFd(d,e){this.c=d
this.a=e},
dUp(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dUo(v)
if(u!=null)return new C.qg(w,C.dkC(u,!1),D.ads,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dUn(v)
if(t!=null)return new C.qg(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adt,"TikTok",q)
s=C.dUm(w,v)
if(s!=null)return s
r=C.dUl(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qg(w,w,D.cqP,"Video",q)
return q},
dUm(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qg(d,"https://www.instagram.com/reel/"+w+u,D.Nw,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qg(d,"https://www.instagram.com/p/"+w+u,D.Nw,t,null)}return null},
dUl(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qg(d,"https://www.facebook.com/plugins/video.php?href="+A.f4(2,d,B.bc,!1)+"&show_text=false&width=734",D.adu,"Facebook",null)},
dUo(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dUn(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
JE:function JE(d,e){this.a=d
this.b=e},
qg:function qg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5Z:function a5Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJY:function aJY(d,e){var _=this
_.d=$
_.cX$=d
_.aV$=e
_.c=_.a=null},
aLm:function aLm(d,e){this.c=d
this.a=e},
cL1:function cL1(d){this.a=d},
cL2:function cL2(d){this.a=d},
EY:function EY(d,e){this.c=d
this.a=e},
aki:function aki(){},
dwK(d,e,f,g,h,i){return new C.a6_(i,f,h,e,g,d)},
ecx(d){var w=window
w.toString
A.hh(w,"message",new C.dcv(d),!1,x._)},
a6_:function a6_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afB:function afB(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHa:function cHa(d){this.a=d},
cHi:function cHi(d){this.a=d},
cHg:function cHg(d){this.a=d},
cHe:function cHe(d){this.a=d},
cHf:function cHf(d){this.a=d},
cHc:function cHc(d){this.a=d},
cHh:function cHh(d){this.a=d},
cHd:function cHd(d){this.a=d},
cHb:function cHb(d){this.a=d},
dcv:function dcv(d){this.a=d},
dwE(){var w,v,u
try{v=A.As()
w=v.grQ(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dkC(d,e){var w=C.dwE(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f4(2,w,B.bc,!1))
v.push("widget_referrer="+A.f4(2,w,B.bc,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bn(v,"&")},
dkB(d){var w=A.aq(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dwF(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUi(d,e,f){var w,v,u=C.dkB(d)
if(u!=null){if(f){w=C.dwE()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dwF(C.dkC(u,e))}return C.dwF(d)},
dUj(d){if(d<=4)return 0
return B.l.aL(d-1,4)*4},
dUk(d){var w
if($.OJ().a==null)return!1
w=$.G8().a
return d>=w&&d<w+4},
dwI(){var w=$.aw5
if(w!=null)w.ae(0)
$.aw5=null
$.G8().sv(0,0)},
dwH(){var w,v,u,t=$.OJ()
if(t.a==null)return
w=$.aw5
if(w!=null)w.ae(0)
v=$.dwG
if(v<=4){t=t.a
t.toString
C.dkD(t)
return}w=$.G8()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dkD(t)},
dkD(d){var w=$.aw5
if(w!=null)w.ae(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aw5=A.dL(A.dq(0,0,0,0,0,w),C.ecM())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.N4.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a7.l(0.25),B.w,1),r=A.Y(this.d,B.a7,w,w,14)
return A.t(w,A.H(A.a([r,B.fR,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fH,w,w,w)}}
C.ob.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JB.prototype={
U(){return new C.afA(A.a([],x.e))},
gea(){return this.c}}
C.afA.prototype={
a0(){var w=this
w.a6()
$.G8().ao(0,w.gawM())
C.ecx(w.gbma())
w.Yv()},
blA(){if(this.c!=null)this.p(new C.cH2())},
bmb(){C.dwH()},
q(){$.G8().Y(0,this.gawM())
C.dwI()
$.OJ().sv(0,null)
this.a5()},
Yv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JD(t.a.c),$async$Yv)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cH1(t,s))
$.bmE=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$Yv,v)},
Uu(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cH_(t))
w=3
return A.b(C.aw6(t.a.c),$async$Uu)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cH0(t,s))
$.bmE=J.a4(t.d)
t.c.G(x.q).f.R(A.bo(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Uu,v)},
bo3(d){var w=this.c
w.toString
A.a7(w,!1).cJ(A.eM(new C.cH3(d),!1,null,x.H))},
boE(){var w=this.c
w.toString
return C.YY(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.fb:B.bz,s=A.aM(v,v,v,v,B.KN,v,v,v,new C.cH7(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Dp(A.H(A.a([A.J(new A.I(B.j3,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aR(!1,v,!0,new A.I(B.bd,A.Y(B.h6,B.a7,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gboD(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c5(!0,A.w(A.a([new A.I(D.Wj,r,v),A.J(w.e?B.mY:new A.jd($.OJ(),new C.cH8(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqd(B.a7,B.Gf,B.me,D.d5Q,w.e?v:new C.cH9(w)),v)}}
C.Wg.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a7.l(0.18),B.dj,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5Z(n,!0,!C.dUk(w),"Fold "+(B.l.aL(w,4)+1)+"/"+B.l.aL(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jH,B.n6,u,u,22),B.aO,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yH,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aR(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ch(p,A.h_(A.w(A.a([new C.aIW(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.B4,B.a7.l(0.85),u,u,9),D.cF2,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aCm,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aJ),B.k,u,u,new A.r(u,u,r,s,q,D.a_q,B.p),u,u,u,B.fJ,u,u,u),1),B.aO,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a7.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aIW.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.ry,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.W9,w,w,w)}}
C.JA.prototype={
U(){return new C.aJX()}}
C.aJX.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.fb:B.bz,t=A.aM(w,w,w,w,B.KN,w,w,w,new C.cGX(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c5(!0,A.w(A.a([new A.I(D.Wj,A.H(A.a([t,A.J(new A.Dp(A.H(A.a([A.J(new A.I(B.j3,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aR(!1,w,!0,new A.I(B.bd,A.Y(B.h6,B.a7,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGY(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.jd($.OJ(),new C.cGZ(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aQJ.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a7.l(0.35),B.f2,28),new A.a9(0,B.G,B.A.l(0.45),B.d6,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dwK(new A.dv(v+"_full_"+u,x.W),!1,u,!1,w.gaMm(),v+"_full")
w=v}else w=new C.aK2(t.r,s)}else w=new C.aFd(m,s)
else w=D.dcg
return A.t(s,A.ch(n,A.h_(A.w(A.a([new C.aQK(m,l,s),A.J(w,1),new C.aQI(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aJ),B.k,s,s,new A.r(s,s,o,q,p,D.a_q,B.p),s,r*2.05,s,B.bQ,s,s,r)}}
C.aQK.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dC(r)
r=A.hK(r)
w=new A.dD(q,r)
v=w.gJg()===0?12:w.gJg()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h1:B.j_)===B.h1?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mG,s,s,s),B.bB,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aNh,B.en,D.aMu,B.en,D.aNl],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.Y(B.KD,B.a7.l(0.9),s,s,12),B.en,A.J(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aD8,s,s,s)}}
C.aK2.prototype={
C(d){var w=null
return A.t(w,A.aK(A.w(A.a([A.Y(B.AD,B.e.l(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.eE(D.aQL,D.cUv,this.c,A.ep(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aF(B.a7.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yH,w,w,w,w,w,w,w,w,1/0)}}
C.aQI.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awE(B.AW,"YouTube",s===0,r,new C.cVC(u))
s=u.awE(B.le,"Device",s===1,r,new C.cVD(u))
w=r?"Power off":"Power on"
v=r?D.YN:D.aKv
return A.t(t,A.H(A.a([q,B.am,s,B.bB,A.aM(t,t,t,t,A.Y(v,r?B.bD:B.fv,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dw)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aCT,t,t,t)},
awE(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bo
else w=f?B.a7:B.ax
v=f&&g?B.a7.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aL(!1,B.W,!0,u,A.aR(!1,A.m(10),!0,new A.I(B.nh,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLh.prototype={
C(d){return D.asF}}
C.aFd.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lA,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ty("Serial",u.c),q=w.ty("Model",u.d),p=w.ty("Device ID",u.e),o=w.ty("IMEI",u.r),n=w.ty("MAC",u.f),m=w.ty("OS",u.w+" "+u.x),l=w.ty("Location",u.y+", "+u.z),k=w.ty("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.ty("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.ty("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bd,v,v,B.ak,!1)},
ty(d,e){var w=null
return new A.I(B.cP,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cJ,A.d(e,w,w,w,w,w,w,D.cMp,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JE.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qg.prototype={
gaMm(){var w=this.c
return w===D.ads||w===D.adt||w===D.Nw||w===D.adu}}
C.a5Z.prototype={
U(){return new C.aJY(null,null)}}
C.aJY.prototype={
a0(){this.a6()
var w=A.bJ(null,B.v7,null,1,null,this)
w.mW(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aW5()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dt(t,new A.r(t,t,t,t,t,new A.ak(B.cN,B.cx,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bT),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i6,p,t)
w=B.e.l(0.92)
q=A.aK(new A.d5(new A.b4(p,new A.bp(0.72,1,q),q.j("b4<bl.T>")),!1,A.Y(B.jH,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n6
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLm(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bb,B.y,s,t)}}
C.aLm.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kp(u,new C.cL1(this),B.c9,B.bR,!0,w,w,new C.cL2(this),w)
return new C.EY(v,w)}}
C.EY.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uM,B.So],x.O),B.jH)
break
case 1:w=new A.aO(A.a([B.yH,D.ax7],x.O),B.lf)
break
case 2:w=new A.aO(A.a([D.ayF,D.awz],x.O),B.AK)
break
case 3:w=new A.aO(A.a([B.Y,B.ds],x.O),B.AO)
break
case 4:w=new A.aO(A.a([B.az,B.aN],x.O),B.pa)
break
default:w=u}v=w.a
return A.t(u,A.aK(A.Y(w.b,B.a7.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aM,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.aki.prototype={
q(){var w=this,v=w.aV$
if(v!=null)v.Y(0,w.gdE())
w.aV$=null
w.a5()},
by(){this.bO()
this.bK()
this.dF()}}
C.a6_.prototype={
U(){return new C.afB()}}
C.afB.prototype={
bFS(d,e){var w=C.dkB(d)
if(w!=null)return C.dkC(w,e)
return d},
a7f(d,e){var w,v=this,u=C.dkB(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bFS(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dUi(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bDI(){var w,v=this
if(v.w)return
v.p(new C.cHa(v))
w=v.e
if(w!=null)v.a7f(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aQ()
u.d=w
try{$.Ga()
$.pF().uL(w,new C.cHi(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cHb(v))
w=v.e
w.toString
v.a7f(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Z0,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.h_(A.aK(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1m(n,B.tk,w)],v)
if(o.f)w.push(A.h_(A.aK(new A.ac(28,28,D.atG,n),n,n,n),B.d2,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bo,B.w,1)
q=A.Y(B.KH,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eG(0,A.aL(!1,B.W,!0,n,A.aR(!1,n,!0,A.aK(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.VG,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbDH(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aG(B.al,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(ob)","~()","JB(U)","ob(Z<@,@>)","a1(ob)","Z<o,@>(ob)","aB<~>()","JA(U)","jd<K>(U,qg?,p?)","Wg(U,K)","tQ(U,qg?,p?)","EY(U,al,dP?)"])
C.dgt.prototype={
$1(d){return new C.JB(this.a,null)},
$S:z+2}
C.dgs.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aD(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dW,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.G,B.a7.l(0.22),B.f2,32)],x.V),g=A.O(m?B.c8:B.a7.l(0.18),B.w,1),f=A.m(28),e=B.a7.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMb,B.k,n,n,new A.r(B.a7.l(0.18),n,A.O(B.a7.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aO,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Y(B.d9,m?B.ax:B.d2,n,n,n),n,n,n,new C.dgo(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.af,B.ah,B.H,j,n,n),B.p),n,n,n,B.Ix,n,n,n)
e=A.ek(B.cG,A.a([new C.N4("YouTube",B.KC,m,n),new C.N4("TikTok",B.lf,m,n),new C.N4("Instagram",B.AK,m,n),new C.N4("Facebook",B.AO,m,n)],v),B.cs,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cm:B.i3,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bz
r=A.Y(B.fL,B.a7.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aH
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.y,n,A.aJ(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.R8),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a8,n,n,n,n)],v),B.aq,B.i,B.j,0,B.q)
e=A.jR(D.aMe,D.d4Y,new C.dgp(d),A.iN(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dt(A.ch(f,A.w(A.a([j,new A.I(B.VU,u,n),new A.I(D.aEo,A.H(A.a([e,B.bB,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aw,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dgq(d),n,n),B.am,A.dN(D.aQu,D.d5L,new C.dgr(d,w),A.bx(B.a7,n,n,n,B.e,n,D.VG,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.aq,B.i,B.a1,0,B.q),B.aJ),new A.r(n,n,g,k,h,new A.ak(B.aM,B.aR,B.H,i,n,n),B.p),B.bT),n)},
$S:81}
C.dgo.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dgp.prototype={
$0(){C.dwI()
$.OJ().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dgq.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dgr.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bmP.prototype={
$1(d){return C.dwJ(A.Q(d,x.N,x.z))},
$S:z+3}
C.bmQ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bmH.prototype={
$1(d){return d.c},
$S:z+0}
C.bmI.prototype={
$1(d){return d.r},
$S:z+0}
C.bmJ.prototype={
$1(d){return d.f},
$S:z+0}
C.bmK.prototype={
$1(d){return d.at},
$S:z+0}
C.bmL.prototype={
$1(d){return d.c},
$S:z+0}
C.bmM.prototype={
$1(d){return d.r},
$S:z+0}
C.bmN.prototype={
$1(d){return d.f},
$S:z+0}
C.bmO.prototype={
$1(d){return d.at},
$S:z+0}
C.bmG.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bmF.prototype={
$1(d){return B.b.bj(B.l.ht(d,16),2,"0").toUpperCase()},
$S:82}
C.cH2.prototype={
$0(){},
$S:0}
C.cH1.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cH_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cH0.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cH3.prototype={
$1(d){return new C.JA(this.a,null)},
$S:z+7}
C.cH7.prototype={
$0(){return A.a7(this.a,!1).eu()},
$S:0}
C.cH8.prototype={
$3(d,e,f){return new A.jd($.G8(),new C.cH6(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cH6.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CS(d,k,x.Q)
w=w==null?k:w.glv()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.l(0.12)
s=A.m(12)
r=A.O(B.a7.l(0.35),B.w,1)
q=A.Y(B.jH,B.a7,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.G8().a
m=B.m.Z(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.fr,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.ji(1.7777777777777777,C.dwK(new A.dv("fleet_master_"+r,x.W),!0,r,!0,j.gaMm(),"fleet_master"),k),B.aJ),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vF(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kx(new A.I(B.Ip,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ol(D.aCv,A.aAa(new A.nt(new C.cH5(i,j),J.a4(i.d),!1,!0,!0,A.tl(),k),D.cFN),k)],w))},
$S:1677}
C.cH5.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wg(v,e,J.a4(w.d),new C.cH4(w,v),this.b,null)},
$S:z+9}
C.cH4.prototype={
$0(){return this.a.bo3(this.b)},
$S:0}
C.cH9.prototype={
$0(){this.a.Uu()
return null},
$S:0}
C.cGX.prototype={
$0(){return A.a7(this.a,!1).eu()},
$S:0}
C.cGY.prototype={
$0(){C.YY(this.a,$.bmE)
return null},
$S:0}
C.cGZ.prototype={
$3(d,e,f){return A.fx(new C.cGW(this.a,e))},
$S:z+10}
C.cGW.prototype={
$2(d,e){var w,v=null,u=B.m.Z(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aK(A.cp(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aQJ(u,s.a.c,s.e,s.d,new C.cGT(s),new C.cGU(s),new C.cGV(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oN,v,v,B.ak),v,v,v)},
$S:1678}
C.cGT.prototype={
$0(){var w=this.a.c
w.toString
C.YY(w,$.bmE)
return null},
$S:0}
C.cGU.prototype={
$1(d){var w=this.a
return w.p(new C.cGS(w,d))},
$S:36}
C.cGS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGV.prototype={
$0(){var w=this.a
return w.p(new C.cGR(w))},
$S:0}
C.cGR.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cVC.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cVD.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cL1.prototype={
$3(d,e,f){return new C.EY(this.a.c,null)},
$S:z+11}
C.cL2.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bb,B.y,A.a([new C.EY(this.a.c,null),D.asT],x.p),null)},
$C:"$3",
$R:3,
$S:211}
C.cHa.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHi.prototype={
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
w.a7f(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hh(v,"load",new C.cHg(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cHh(w),!1,u)
w=w.e
w.toString
return w},
$S:515}
C.cHg.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHe(w))
A.bR(B.R,new C.cHf(w),x.H)}},
$S:45}
C.cHe.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHf.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cHc(w))},
$S:12}
C.cHc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cHd(w))},
$S:45}
C.cHd.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHb.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dcv.prototype={
$1(d){var w,v,u,t,s=new A.Ex([],[]).Iw(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1679};(function aliases(){var w=C.aki.prototype
w.aW5=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afA.prototype,"gawM","blA",1)
w(u,"gbma","bmb",1)
w(u,"gboD","boE",6)
w(C.afB.prototype,"gbDH","bDI",1)
v(C,"ecM","dwH",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yn,[C.dgt,C.dgs,C.bmP,C.bmQ,C.bmH,C.bmI,C.bmJ,C.bmK,C.bmL,C.bmM,C.bmN,C.bmO,C.bmG,C.bmF,C.cH3,C.cH8,C.cH6,C.cGZ,C.cGU,C.cL1,C.cL2,C.cHi,C.cHg,C.cHh,C.dcv])
v(A.a_t,[C.dgo,C.dgp,C.dgq,C.dgr,C.cH2,C.cH1,C.cH_,C.cH0,C.cH7,C.cH4,C.cH9,C.cGX,C.cGY,C.cGT,C.cGS,C.cGV,C.cGR,C.cVC,C.cVD,C.cHa,C.cHe,C.cHf,C.cHc,C.cHd,C.cHb])
v(A.au,[C.N4,C.Wg,C.aIW,C.aQJ,C.aQK,C.aK2,C.aQI,C.aLh,C.aFd,C.aLm,C.EY])
v(A.al,[C.ob,C.qg])
v(A.ae,[C.JB,C.JA,C.a5Z,C.a6_])
v(A.af,[C.afA,C.aJX,C.aki,C.afB])
v(A.a_u,[C.cH5,C.cGW])
u(C.JE,A.aG7)
u(C.aJY,C.aki)
w(C.aki,A.e7)})()
A.dAb(b.typeUniverse,JSON.parse('{"JB":{"ae":[],"p":[]},"Wg":{"au":[],"p":[]},"JA":{"ae":[],"p":[]},"N4":{"au":[],"p":[]},"afA":{"af":["JB"]},"aIW":{"au":[],"p":[]},"aJX":{"af":["JA"]},"aQJ":{"au":[],"p":[]},"aQK":{"au":[],"p":[]},"aK2":{"au":[],"p":[]},"aQI":{"au":[],"p":[]},"aLh":{"au":[],"p":[]},"aFd":{"au":[],"p":[]},"a5Z":{"ae":[],"p":[]},"EY":{"au":[],"p":[]},"aJY":{"af":["a5Z"]},"aLm":{"au":[],"p":[]},"a6_":{"ae":[],"p":[]},"afB":{"af":["a6_"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<a9>"),O:w("a6<y>"),e:w("a6<ob>"),s:w("a6<o>"),p:w("a6<p>"),t:w("a6<K>"),X:w("ad<ob>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o6"),_:w("CP"),k:w("ob"),N:w("o"),Y:w("bp<aa>"),W:w("dv<o>"),J:w("jd<K>"),j:w("jd<qg?>"),E:w("xh<cK>"),q:w("X0"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.YN=new A.N(983224,"MaterialIcons",!1)
D.aOV=new A.a8(D.YN,48,B.bo,null,null,null)
D.cM2=new A.T(!0,B.cm,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cTr=new A.A("Powered off",null,D.cM2,null,null,null,null,null,null,null,null,null)
D.bKh=w([D.aOV,B.P,D.cTr],x.p)
D.azU=new A.f0(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bKh,null)
D.asF=new A.ds(B.T,null,null,D.azU,null)
D.cFs=new A.ac(18,18,B.S7,null)
D.asT=new A.ds(B.T,null,null,D.cFs,null)
D.atG=new A.hj(2,null,null,null,null,B.a9,null,null,null,null)
D.awz=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ax7=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.ayF=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCm=new A.V(0,3,0,3)
D.aCv=new A.V(10,0,10,88)
D.aCT=new A.V(12,6,12,10)
D.aD8=new A.V(14,8,14,6)
D.VG=new A.V(18,12,18,12)
D.aEo=new A.V(20,8,20,20)
D.Wj=new A.V(8,6,15,8)
D.aKv=new A.N(983222,"MaterialIcons",!1)
D.aMb=new A.a8(B.jH,26,B.a7,null,null,null)
D.aMe=new A.a8(B.Y0,18,null,null,null,null)
D.aMu=new A.a8(B.ry,14,B.a9,null,null,null)
D.aKL=new A.N(983420,"MaterialIcons",!1)
D.aNh=new A.a8(D.aKL,14,B.a9,null,null,null)
D.aIU=new A.N(62895,"MaterialIcons",!1)
D.aNl=new A.a8(D.aIU,14,B.a9,null,null,null)
D.aQu=new A.a8(B.jb,20,null,null,null,null)
D.aQL=new A.a8(B.h6,16,null,null,null,null)
D.bNR=w([B.aN,B.Y],x.O)
D.a_q=new A.ak(B.aM,B.aR,B.H,D.bNR,null,null)
D.cz9=new A.aO("NGMY OS","14.2.1")
D.cxX=new A.aO("VirtualDroid","13.8.4")
D.cxW=new A.aO("NGMY OS","15.0.0")
D.cyI=new A.aO("VirtualDroid","14.1.2")
D.cxU=new A.aO("NGMY Tab OS","12.9.7")
D.cxS=new A.aO("NGMY OS","13.5.3")
D.cxH=new A.aO("VirtualDroid","15.2.0")
D.cyj=new A.aO("NGMY OS","14.8.1")
D.cyO=new A.aO("NGMY Tab OS","13.2.4")
D.czj=new A.aO("VirtualDroid","12.6.9")
D.cxC=new A.aO("NGMY OS","16.0.1")
D.cxt=new A.aO("VirtualDroid","14.9.0")
D.cz0=new A.aO("NGMY Tab OS","14.0.3")
D.cy5=new A.aO("NGMY OS","13.1.8")
D.cxB=new A.aO("VirtualDroid","13.4.5")
D.cxR=new A.aO("NGMY OS","15.3.2")
D.cyP=new A.aO("NGMY Tab OS","12.4.1")
D.cz3=new A.aO("VirtualDroid","16.1.0")
D.cyi=new A.aO("NGMY OS","14.4.6")
D.cza=new A.aO("VirtualDroid","15.0.8")
D.bN4=w([D.cz9,D.cxX,D.cxW,D.cyI,D.cxU,D.cxS,D.cxH,D.cyj,D.cyO,D.czj,D.cxC,D.cxt,D.cz0,D.cy5,D.cxB,D.cxR,D.cyP,D.cz3,D.cyi,D.cza],A.b6("a6<+(o,o)>"))
D.cBp=new A.eH(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cAY=new A.eH(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cAT=new A.eH(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cB1=new A.eH(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cAP=new A.eH(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cB3=new A.eH(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cBr=new A.eH(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cAQ=new A.eH(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cAX=new A.eH(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cB5=new A.eH(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cAO=new A.eH(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cBj=new A.eH(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cBg=new A.eH(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cAW=new A.eH(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cBd=new A.eH(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cBc=new A.eH(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cAN=new A.eH(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cB0=new A.eH(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cBa=new A.eH(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cBf=new A.eH(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6_=w([D.cBp,D.cAY,D.cAT,D.cB1,D.cAP,D.cB3,D.cBr,D.cAQ,D.cAX,D.cB5,D.cAO,D.cBj,D.cBg,D.cAW,D.cBd,D.cBc,D.cAN,D.cB0,D.cBa,D.cBf],A.b6("a6<+(o,o,aa,aa,o)>"))
D.bVZ=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ads=new C.JE(0,"youtube")
D.adt=new C.JE(1,"tiktok")
D.Nw=new C.JE(2,"instagram")
D.adu=new C.JE(3,"facebook")
D.cqP=new C.JE(4,"other")
D.cF2=new A.ac(3,null,null,null)
D.cFN=new A.ij(4,10,8,0.52,null)
D.cUH=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cJb=new A.aV(D.cUH,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.y,null)
D.cMp=new A.T(!0,B.e,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUv=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d4Y=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d5L=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d5Q=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dcg=new C.aLh(null)})();(function staticFields(){$.dwG=20
$.aw5=null
$.bmE=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ehM","G8",()=>A.UT(0))
w($,"ehN","OJ",()=>A.UT(null))})()};
(a=>{a["TUacs+OWk6hXdrUdXmBorcPuoHw="]=a.current})($__dart_deferred_initializers__);