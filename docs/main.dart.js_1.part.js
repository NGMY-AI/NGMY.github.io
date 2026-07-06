((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
edQ(d,e){A.a7(d,!1).cI(A.eK(new C.dgo(e),!0,null,x.H))},
YV(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OI()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.as),t)
w=3
return A.b(A.dn(B.M,new C.dgn(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YV)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dUk(r)
if(q==null){d.G(x.q).f.R(D.cHS)
w=1
break}w=4
return A.b(A.bR(B.i6,null,x.H),$async$YV)
case 4:if(d.e==null){w=1
break}n=B.l.Z(e,1,999)
$.dwB=n
p=C.dUe(n)
n=$.G7()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dky(q)
d.G(x.q).f.R(A.bn(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YV,v)},
dwE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o8(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JB(d){return C.dUn(d)},
dUn(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JB=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$JB)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aG(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eV(r,x.f)
k=A.ds(k,new C.bmL(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ah<G.E>")
i=A.B(new A.ah(k,new C.bmM(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dwG(q)
w=12
return A.b(C.JA(a3,p),$async$JB)
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
n=B.H.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dwE(A.Q(n,x.N,x.z))
l=C.dwG(A.a([m],x.e))
w=21
return A.b(C.JA(a3,l),$async$JB)
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
case 18:case 14:q=C.dUl()
w=22
return A.b(C.JA(a3,q),$async$JB)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JB,v)},
dwG(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.bmD(),w).eH(0),u=new A.D(d,new C.bmE(),w).eH(0),t=new A.D(d,new C.bmF(),w).eH(0),s=new A.D(d,new C.bmG(),w).eH(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dkz(null,q,u,t,v,s));++q}return r},
aw3(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aw3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JB(d),$async$aw3)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.dc(t,new C.bmH(),s).eH(0)
p=r.dc(t,new C.bmI(),s).eH(0)
o=r.dc(t,new C.bmJ(),s).eH(0)
n=r.dc(t,new C.bmK(),s).eH(0)
m=C.dkz(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JA(d,t),$async$aw3)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw3,v)},
JA(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$JA)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.bmC(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$JA)
case 3:return A.h(null,v)}})
return A.i($async$JA,v)},
dUl(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dkz(w,w,t,s,u,r)
return q},
dkz(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jx(),h=d==null,g=D.a5P[B.l.ab(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a5P[B.l.ab(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bmB(),A.W(p).j("D<1,o>")).fm(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fm(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.ht(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.ab(e,20)
k=D.bVg[w]
j=D.bMv[w]
return new C.o8("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dUm(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().a_())},
dUm(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.ht(d.bG(256),16),2,"0")
return B.h.fm(v)},
dgo:function dgo(d){this.a=d},
dgn:function dgn(d,e){this.a=d
this.b=e},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d,e){this.a=d
this.b=e},
N3:function N3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o8:function o8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bmL:function bmL(){},
bmM:function bmM(){},
bmD:function bmD(){},
bmE:function bmE(){},
bmF:function bmF(){},
bmG:function bmG(){},
bmH:function bmH(){},
bmI:function bmI(){},
bmJ:function bmJ(){},
bmK:function bmK(){},
bmC:function bmC(){},
bmB:function bmB(){},
Jz:function Jz(d,e){this.c=d
this.a=e},
afy:function afy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGY:function cGY(){},
cGX:function cGX(d,e){this.a=d
this.b=e},
cGV:function cGV(d){this.a=d},
cGW:function cGW(d,e){this.a=d
this.b=e},
cGZ:function cGZ(d){this.a=d},
cH2:function cH2(d){this.a=d},
cH3:function cH3(d,e){this.a=d
this.b=e},
cH1:function cH1(d,e,f){this.a=d
this.b=e
this.c=f},
cH0:function cH0(d,e){this.a=d
this.b=e},
cH_:function cH_(d,e){this.a=d
this.b=e},
cH4:function cH4(d){this.a=d},
Wd:function Wd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIT:function aIT(d,e){this.c=d
this.a=e},
Jy:function Jy(d,e){this.c=d
this.a=e},
aJU:function aJU(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGS:function cGS(d){this.a=d},
cGT:function cGT(d){this.a=d},
cGU:function cGU(d){this.a=d},
cGR:function cGR(d,e){this.a=d
this.b=e},
cGO:function cGO(d){this.a=d},
cGP:function cGP(d){this.a=d},
cGN:function cGN(d,e){this.a=d
this.b=e},
cGQ:function cGQ(d){this.a=d},
cGM:function cGM(d){this.a=d},
aQH:function aQH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQI:function aQI(d,e,f){this.c=d
this.d=e
this.a=f},
aK_:function aK_(d,e){this.c=d
this.a=e},
aQG:function aQG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cVx:function cVx(d){this.a=d},
cVy:function cVy(d){this.a=d},
aLe:function aLe(d){this.a=d},
aFa:function aFa(d,e){this.c=d
this.a=e},
dUk(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dUj(v)
if(u!=null)return new C.qe(w,C.dkx(u,!1),D.add,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dUi(v)
if(t!=null)return new C.qe(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ade,"TikTok",q)
s=C.dUh(w,v)
if(s!=null)return s
r=C.dUg(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qe(w,w,D.cpw,"Video",q)
return q},
dUh(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qe(d,"https://www.instagram.com/reel/"+w+u,D.Nl,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qe(d,"https://www.instagram.com/p/"+w+u,D.Nl,t,null)}return null},
dUg(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qe(d,"https://www.facebook.com/plugins/video.php?href="+A.f3(2,d,B.ba,!1)+"&show_text=false&width=734",D.adf,"Facebook",null)},
dUj(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dUi(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
JC:function JC(d,e){this.a=d
this.b=e},
qe:function qe(d,e,f,g,h){var _=this
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
aJV:function aJV(d,e){var _=this
_.d=$
_.cV$=d
_.aV$=e
_.c=_.a=null},
aLj:function aLj(d,e){this.c=d
this.a=e},
cKX:function cKX(d){this.a=d},
cKY:function cKY(d){this.a=d},
EX:function EX(d,e){this.c=d
this.a=e},
akg:function akg(){},
dwF(d,e,f,g,h,i){return new C.a6_(i,f,h,e,g,d)},
ece(d){var w=window
w.toString
A.hg(w,"message",new C.dcq(d),!1,x._)},
a6_:function a6_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afz:function afz(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cH5:function cH5(d){this.a=d},
cHd:function cHd(d){this.a=d},
cHb:function cHb(d){this.a=d},
cH9:function cH9(d){this.a=d},
cHa:function cHa(d){this.a=d},
cH7:function cH7(d){this.a=d},
cHc:function cHc(d){this.a=d},
cH8:function cH8(d){this.a=d},
cH6:function cH6(d){this.a=d},
dcq:function dcq(d){this.a=d},
dwz(){var w,v,u
try{v=A.Ar()
w=v.grO(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dkx(d,e){var w=C.dwz(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f3(2,w,B.ba,!1))
v.push("widget_referrer="+A.f3(2,w,B.ba,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bn(v,"&")},
dkw(d){var w=A.aq(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dwA(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUd(d,e,f){var w,v,u=C.dkw(d)
if(u!=null){if(f){w=C.dwz()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dwA(C.dkx(u,e))}return C.dwA(d)},
dUe(d){if(d<=4)return 0
return B.l.aL(d-1,4)*4},
dUf(d){var w
if($.OI().a==null)return!1
w=$.G7().a
return d>=w&&d<w+4},
dwD(){var w=$.aw2
if(w!=null)w.ae(0)
$.aw2=null
$.G7().sv(0,0)},
dwC(){var w,v,u,t=$.OI()
if(t.a==null)return
w=$.aw2
if(w!=null)w.ae(0)
v=$.dwB
if(v<=4){t=t.a
t.toString
C.dky(t)
return}w=$.G7()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dky(t)},
dky(d){var w=$.aw2
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
default:w=null}$.aw2=A.dL(A.dp(0,0,0,0,0,w),C.ecE())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.N3.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.Y(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fO,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fE,w,w,w)}}
C.o8.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Jz.prototype={
U(){return new C.afy(A.a([],x.e))},
ge9(){return this.c}}
C.afy.prototype={
a0(){var w=this
w.a6()
$.G7().ao(0,w.gawz())
C.ece(w.gblI())
w.Yn()},
bl7(){if(this.c!=null)this.p(new C.cGY())},
blJ(){C.dwC()},
q(){$.G7().Y(0,this.gawz())
C.dwD()
$.OI().sv(0,null)
this.a5()},
Yn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JB(t.a.c),$async$Yn)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGX(t,s))
$.bmA=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
Un(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Un=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cGV(t))
w=3
return A.b(C.aw3(t.a.c),$async$Un)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGW(t,s))
$.bmA=J.a4(t.d)
t.c.G(x.q).f.R(A.bn(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Un,v)},
bnB(d){var w=this.c
w.toString
A.a7(w,!1).cI(A.eK(new C.cGZ(d),!1,null,x.H))},
bob(){var w=this.c
w.toString
return C.YV(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.fb:B.bC,s=A.aM(v,v,v,v,B.KA,v,v,v,new C.cH2(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Dp(A.H(A.a([A.J(new A.I(B.j2,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aR(!1,v,!0,new A.I(B.bc,A.Y(B.h4,B.a6,v,v,28),v),B.cI,!0,v,v,v,v,v,v,v,v,v,v,v,w.gboa(),v,v,v,v,v,v,v),B.k,B.M,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c4(!0,A.w(A.a([new A.I(D.Wc,r,v),A.J(w.e?B.mX:new A.ja($.OI(),new C.cH3(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ai,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqb(B.a6,B.G6,B.me,D.d4u,w.e?v:new C.cH4(w)),v)}}
C.Wd.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.ab(0,B.G,B.a6.l(0.18),B.di,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5Z(n,!0,!C.dUf(w),"Fold "+(B.l.aL(w,4)+1)+"/"+B.l.aL(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jF,B.n5,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yG,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aR(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ch(p,A.h7(A.w(A.a([new C.aIT(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.AY,B.a6.l(0.85),u,u,9),D.cDJ,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.av,u,u,u,u,u,D.aC0,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aK),B.k,u,u,new A.r(u,u,r,s,q,D.a_j,B.p),u,u,u,B.fG,u,u,u),1),B.aM,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.aa)}}
C.aIT.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.ry,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,B.W2,w,w,w)}}
C.Jy.prototype={
U(){return new C.aJU()}}
C.aJU.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.fb:B.bC,t=A.aM(w,w,w,w,B.KA,w,w,w,new C.cGS(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c4(!0,A.w(A.a([new A.I(D.Wc,A.H(A.a([t,A.J(new A.Dp(A.H(A.a([A.J(new A.I(B.j2,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aR(!1,w,!0,new A.I(B.bc,A.Y(B.h4,B.a6,w,w,28),w),B.cI,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGT(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.ja($.OI(),new C.cGU(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ai,!0,!0),w,!1,!1,w,w)}}
C.aQH.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ab(0,B.G,B.a6.l(0.35),B.f2,28),new A.ab(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dwF(new A.dt(v+"_full_"+u,x.W),!1,u,!1,w.gaM5(),v+"_full")
w=v}else w=new C.aK_(t.r,s)}else w=new C.aFa(m,s)
else w=D.daV
return A.t(s,A.ch(n,A.h7(A.w(A.a([new C.aQI(m,l,s),A.J(w,1),new C.aQG(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aK),B.k,s,s,new A.r(s,s,o,q,p,D.a_j,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQI.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dB(r)
r=A.hI(r)
w=new A.dC(q,r)
v=w.gJc()===0?12:w.gJc()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h_:B.iZ)===B.h_?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mF,s,s,s),B.bz,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bR,D.aMW,B.ej,D.aM8,B.ej,D.aN_],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.Y(B.Kq,B.a6.l(0.9),s,s,12),B.ej,A.J(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,D.aCN,s,s,s)}}
C.aK_.prototype={
C(d){var w=null
return A.t(w,A.aK(A.w(A.a([A.Y(B.Aw,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.eC(D.aQp,D.cT9,this.c,A.eo(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yG,w,w,w,w,w,w,w,w,1/0)}}
C.aQG.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awr(B.AP,"YouTube",s===0,r,new C.cVx(u))
s=u.awr(B.lf,"Device",s===1,r,new C.cVy(u))
w=r?"Power off":"Power on"
v=r?D.YG:D.aK9
return A.t(t,A.H(A.a([q,B.al,s,B.bz,A.aM(t,t,t,t,A.Y(v,r?B.bH:B.ft,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dr)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,D.aCx,t,t,t)},
awr(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.J(A.aL(!1,B.W,!0,u,A.aR(!1,A.m(10),!0,new A.I(B.ng,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLe.prototype={
C(d){return D.asr}}
C.aFa.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lB,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tw("Serial",u.c),q=w.tw("Model",u.d),p=w.tw("Device ID",u.e),o=w.tw("IMEI",u.r),n=w.tw("MAC",u.f),m=w.tw("OS",u.w+" "+u.x),l=w.tw("Location",u.y+", "+u.z),k=w.tw("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tw("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aM,s,B.ab,r,q,p,o,n,m,l,k,j,w.tw("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tw(d,e){var w=null
return new A.I(B.cJ,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cE,A.d(e,w,w,w,w,w,w,D.cL3,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JC.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qe.prototype={
gaM5(){var w=this.c
return w===D.add||w===D.ade||w===D.Nl||w===D.adf}}
C.a5Z.prototype={
U(){return new C.aJV(null,null)}}
C.aJV.prototype={
a0(){this.a6()
var w=A.bJ(null,B.v3,null,1,null,this)
w.mV(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aVP()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dF(t,new A.r(t,t,t,t,t,new A.ak(B.cL,B.cy,B.I,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.bX),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i5,p,t)
w=B.e.l(0.92)
q=A.aK(new A.d6(new A.b4(p,new A.bo(0.72,1,q),q.j("b4<bk.T>")),!1,A.Y(B.jF,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n5
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLj(s,t),r,q,A.aX(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aX(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aX(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aI(B.am,t,B.bf,B.y,s,t)}}
C.aLj.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.km(u,new C.cKX(this),B.c8,B.bP,!0,w,w,new C.cKY(this),w)
return new C.EX(v,w)}}
C.EX.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uL,B.Se],x.O),B.jF)
break
case 1:w=new A.aO(A.a([B.yG,D.awP],x.O),B.lg)
break
case 2:w=new A.aO(A.a([D.ayk,D.awi],x.O),B.AD)
break
case 3:w=new A.aO(A.a([B.Y,B.dl],x.O),B.AH)
break
case 4:w=new A.aO(A.a([B.av,B.aO],x.O),B.pa)
break
default:w=u}v=w.a
return A.t(u,A.aK(A.Y(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aN,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akg.prototype={
q(){var w=this,v=w.aV$
if(v!=null)v.Y(0,w.gdD())
w.aV$=null
w.a5()},
bx(){this.bN()
this.bJ()
this.dE()}}
C.a6_.prototype={
U(){return new C.afz()}}
C.afz.prototype={
bF9(d,e){var w=C.dkw(d)
if(w!=null)return C.dkx(w,e)
return d},
a76(d,e){var w,v=this,u=C.dkw(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bF9(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dUd(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bD_(){var w,v=this
if(v.w)return
v.p(new C.cH5(v))
w=v.e
if(w!=null)v.a76(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aQ()
u.d=w
try{$.G9()
$.pD().uJ(w,new C.cHd(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cH6(v))
w=v.e
w.toString
v.a76(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.YU,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.V,n,n)],v))
return A.h7(A.aK(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1k(n,B.tk,w)],v)
if(o.f)w.push(A.h7(A.aK(new A.ac(28,28,D.ats,n),n,n,n),B.cZ,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bm,B.w,1)
q=A.Y(B.Ku,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eL(0,A.aL(!1,B.W,!0,n,A.aR(!1,n,!0,A.aK(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Vz,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbCZ(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aI(B.am,n,B.bf,B.y,w,n)}}
var z=a.updateTypes(["o(o8)","~()","Jz(U)","o8(Z<@,@>)","a1(o8)","Z<o,@>(o8)","aA<~>()","Jy(U)","ja<K>(U,qe?,p?)","Wd(U,K)","tO(U,qe?,p?)","EX(U,al,dP?)"])
C.dgo.prototype={
$1(d){return new C.Jz(this.a,null)},
$S:z+2}
C.dgn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dS,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.ab(0,B.G,B.a6.l(0.22),B.f2,32)],x.V),g=A.O(m?B.c7:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.ar.l(m?0.18:0.08)],j)
e=A.t(n,D.aLQ,B.k,n,n,new A.r(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.az),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Y(B.d5,m?B.ax:B.cZ,n,n,n),n,n,n,new C.dgj(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ah,B.aj,B.I,j,n,n),B.p),n,n,n,B.Ik,n,n,n)
e=A.ec(B.cx,A.a([new C.N3("YouTube",B.Kp,m,n),new C.N3("TikTok",B.lg,m,n),new C.N3("Instagram",B.AD,m,n),new C.N3("Facebook",B.AH,m,n)],v),B.ci,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bC
r=A.Y(B.fI,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aJ
u=A.w(A.a([e,B.aS,A.aH(n,B.N,!0,n,!0,B.y,n,A.aJ(),w,n,n,n,n,n,2,A.bq(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aE(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.QX),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a7,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jO(D.aLT,D.d3C,new C.dgk(d),A.iL(n,n,n,n,n,n,n,n,n,n,n,m?B.bh:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dF(A.ch(f,A.w(A.a([j,new A.I(B.VN,u,n),new A.I(D.aE2,A.H(A.a([e,B.bz,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.au,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dgl(d),n,n),B.al,A.dN(D.aQ8,D.d4p,new C.dgm(d,w),A.bx(B.a6,n,n,n,B.e,n,D.Vz,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a1,0,B.q),B.aK),new A.r(n,n,g,k,h,new A.ak(B.aN,B.aR,B.I,i,n,n),B.p),B.bX),n)},
$S:82}
C.dgj.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dgk.prototype={
$0(){C.dwD()
$.OI().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dgl.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dgm.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bmL.prototype={
$1(d){return C.dwE(A.Q(d,x.N,x.z))},
$S:z+3}
C.bmM.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bmD.prototype={
$1(d){return d.c},
$S:z+0}
C.bmE.prototype={
$1(d){return d.r},
$S:z+0}
C.bmF.prototype={
$1(d){return d.f},
$S:z+0}
C.bmG.prototype={
$1(d){return d.at},
$S:z+0}
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
C.bmC.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bmB.prototype={
$1(d){return B.b.bj(B.l.ht(d,16),2,"0").toUpperCase()},
$S:81}
C.cGY.prototype={
$0(){},
$S:0}
C.cGX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGV.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGW.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cGZ.prototype={
$1(d){return new C.Jy(this.a,null)},
$S:z+7}
C.cH2.prototype={
$0(){return A.a7(this.a,!1).es()},
$S:0}
C.cH3.prototype={
$3(d,e,f){return new A.ja($.G7(),new C.cH1(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cH1.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CS(d,k,x.Q)
w=w==null?k:w.glt()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.Y(B.jF,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.G7().a
m=B.m.Z(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d8,B.fp,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.jf(1.7777777777777777,C.dwF(new A.dt("fleet_master_"+r,x.W),!0,r,!0,j.gaM5(),"fleet_master"),k),B.aK),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vC(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kv(new A.I(B.Ic,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.oi(D.aC9,A.aA7(new A.np(new C.cH0(i,j),J.a4(i.d),!1,!0,!0,A.tj(),k),D.cEt),k)],w))},
$S:1678}
C.cH0.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wd(v,e,J.a4(w.d),new C.cH_(w,v),this.b,null)},
$S:z+9}
C.cH_.prototype={
$0(){return this.a.bnB(this.b)},
$S:0}
C.cH4.prototype={
$0(){this.a.Un()
return null},
$S:0}
C.cGS.prototype={
$0(){return A.a7(this.a,!1).es()},
$S:0}
C.cGT.prototype={
$0(){C.YV(this.a,$.bmA)
return null},
$S:0}
C.cGU.prototype={
$3(d,e,f){return A.fG(new C.cGR(this.a,e))},
$S:z+10}
C.cGR.prototype={
$2(d,e){var w,v=null,u=B.m.Z(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aK(A.cx(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.V,v,v),B.aS,new C.aQH(u,s.a.c,s.e,s.d,new C.cGO(s),new C.cGP(s),new C.cGQ(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oN,v,v,B.ak),v,v,v)},
$S:1679}
C.cGO.prototype={
$0(){var w=this.a.c
w.toString
C.YV(w,$.bmA)
return null},
$S:0}
C.cGP.prototype={
$1(d){var w=this.a
return w.p(new C.cGN(w,d))},
$S:35}
C.cGN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGQ.prototype={
$0(){var w=this.a
return w.p(new C.cGM(w))},
$S:0}
C.cGM.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cVx.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cVy.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cKX.prototype={
$3(d,e,f){return new C.EX(this.a.c,null)},
$S:z+11}
C.cKY.prototype={
$3(d,e,f){if(f==null)return e
return new A.aI(B.am,null,B.bf,B.y,A.a([new C.EX(this.a.c,null),D.asF],x.p),null)},
$C:"$3",
$R:3,
$S:209}
C.cH5.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHd.prototype={
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
w.a76(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hg(v,"load",new C.cHb(w),!1,u)
v=w.e
v.toString
A.hg(v,"error",new C.cHc(w),!1,u)
w=w.e
w.toString
return w},
$S:523}
C.cHb.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cH9(w))
A.bR(B.R,new C.cHa(w),x.H)}},
$S:44}
C.cH9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHa.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cH7(w))},
$S:12}
C.cH7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cH8(w))},
$S:44}
C.cH8.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cH6.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dcq.prototype={
$1(d){var w,v,u,t,s=new A.Ew([],[]).Is(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1680};(function aliases(){var w=C.akg.prototype
w.aVP=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afy.prototype,"gawz","bl7",1)
w(u,"gblI","blJ",1)
w(u,"gboa","bob",6)
w(C.afz.prototype,"gbCZ","bD_",1)
v(C,"ecE","dwC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yl,[C.dgo,C.dgn,C.bmL,C.bmM,C.bmD,C.bmE,C.bmF,C.bmG,C.bmH,C.bmI,C.bmJ,C.bmK,C.bmC,C.bmB,C.cGZ,C.cH3,C.cH1,C.cGU,C.cGP,C.cKX,C.cKY,C.cHd,C.cHb,C.cHc,C.dcq])
v(A.a_q,[C.dgj,C.dgk,C.dgl,C.dgm,C.cGY,C.cGX,C.cGV,C.cGW,C.cH2,C.cH_,C.cH4,C.cGS,C.cGT,C.cGO,C.cGN,C.cGQ,C.cGM,C.cVx,C.cVy,C.cH5,C.cH9,C.cHa,C.cH7,C.cH8,C.cH6])
v(A.at,[C.N3,C.Wd,C.aIT,C.aQH,C.aQI,C.aK_,C.aQG,C.aLe,C.aFa,C.aLj,C.EX])
v(A.al,[C.o8,C.qe])
v(A.ae,[C.Jz,C.Jy,C.a5Z,C.a6_])
v(A.af,[C.afy,C.aJU,C.akg,C.afz])
v(A.a_r,[C.cH0,C.cGR])
u(C.JC,A.aG4)
u(C.aJV,C.akg)
w(C.akg,A.e6)})()
A.dA6(b.typeUniverse,JSON.parse('{"Jz":{"ae":[],"p":[]},"Wd":{"at":[],"p":[]},"Jy":{"ae":[],"p":[]},"N3":{"at":[],"p":[]},"afy":{"af":["Jz"]},"aIT":{"at":[],"p":[]},"aJU":{"af":["Jy"]},"aQH":{"at":[],"p":[]},"aQI":{"at":[],"p":[]},"aK_":{"at":[],"p":[]},"aQG":{"at":[],"p":[]},"aLe":{"at":[],"p":[]},"aFa":{"at":[],"p":[]},"a5Z":{"ae":[],"p":[]},"EX":{"at":[],"p":[]},"aJV":{"af":["a5Z"]},"aLj":{"at":[],"p":[]},"a6_":{"ae":[],"p":[]},"afz":{"af":["a6_"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ab>"),O:w("a6<y>"),e:w("a6<o8>"),s:w("a6<o>"),p:w("a6<p>"),t:w("a6<K>"),X:w("ad<o8>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o3"),_:w("CP"),k:w("o8"),N:w("o"),Y:w("bo<a9>"),W:w("dt<o>"),J:w("ja<K>"),j:w("ja<qe?>"),E:w("xf<cK>"),q:w("WY"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.YG=new A.N(983224,"MaterialIcons",!1)
D.aOz=new A.a8(D.YG,48,B.bm,null,null,null)
D.cKH=new A.T(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cS5=new A.A("Powered off",null,D.cKH,null,null,null,null,null,null,null,null,null)
D.bJI=w([D.aOz,B.P,D.cS5],x.p)
D.azx=new A.eO(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bJI,null)
D.asr=new A.dr(B.T,null,null,D.azx,null)
D.cE8=new A.ac(18,18,B.RW,null)
D.asF=new A.dr(B.T,null,null,D.cE8,null)
D.ats=new A.hi(2,null,null,null,null,B.a9,null,null,null,null)
D.awi=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.awP=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.ayk=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aC0=new A.V(0,3,0,3)
D.aC9=new A.V(10,0,10,88)
D.aCx=new A.V(12,6,12,10)
D.aCN=new A.V(14,8,14,6)
D.Vz=new A.V(18,12,18,12)
D.aE2=new A.V(20,8,20,20)
D.Wc=new A.V(8,6,15,8)
D.aK9=new A.N(983222,"MaterialIcons",!1)
D.aLQ=new A.a8(B.jF,26,B.a6,null,null,null)
D.aLT=new A.a8(B.XU,18,null,null,null,null)
D.aM8=new A.a8(B.ry,14,B.a9,null,null,null)
D.aKp=new A.N(983420,"MaterialIcons",!1)
D.aMW=new A.a8(D.aKp,14,B.a9,null,null,null)
D.aIy=new A.N(62895,"MaterialIcons",!1)
D.aN_=new A.a8(D.aIy,14,B.a9,null,null,null)
D.aQ8=new A.a8(B.ja,20,null,null,null,null)
D.aQp=new A.a8(B.h4,16,null,null,null,null)
D.bNf=w([B.aO,B.Y],x.O)
D.a_j=new A.ak(B.aN,B.aR,B.I,D.bNf,null,null)
D.cxQ=new A.aO("NGMY OS","14.2.1")
D.cwD=new A.aO("VirtualDroid","13.8.4")
D.cwC=new A.aO("NGMY OS","15.0.0")
D.cxo=new A.aO("VirtualDroid","14.1.2")
D.cwA=new A.aO("NGMY Tab OS","12.9.7")
D.cwy=new A.aO("NGMY OS","13.5.3")
D.cwn=new A.aO("VirtualDroid","15.2.0")
D.cx_=new A.aO("NGMY OS","14.8.1")
D.cxu=new A.aO("NGMY Tab OS","13.2.4")
D.cy_=new A.aO("VirtualDroid","12.6.9")
D.cwi=new A.aO("NGMY OS","16.0.1")
D.cw9=new A.aO("VirtualDroid","14.9.0")
D.cxH=new A.aO("NGMY Tab OS","14.0.3")
D.cwM=new A.aO("NGMY OS","13.1.8")
D.cwh=new A.aO("VirtualDroid","13.4.5")
D.cwx=new A.aO("NGMY OS","15.3.2")
D.cxv=new A.aO("NGMY Tab OS","12.4.1")
D.cxK=new A.aO("VirtualDroid","16.1.0")
D.cwZ=new A.aO("NGMY OS","14.4.6")
D.cxR=new A.aO("VirtualDroid","15.0.8")
D.bMv=w([D.cxQ,D.cwD,D.cwC,D.cxo,D.cwA,D.cwy,D.cwn,D.cx_,D.cxu,D.cy_,D.cwi,D.cw9,D.cxH,D.cwM,D.cwh,D.cwx,D.cxv,D.cxK,D.cwZ,D.cxR],A.b6("a6<+(o,o)>"))
D.cA5=new A.eE(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.czE=new A.eE(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.czz=new A.eE(["New York","United States",40.7128,-74.006,"America/New_York"])
D.czI=new A.eE(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.czv=new A.eE(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.czK=new A.eE(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cA7=new A.eE(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.czw=new A.eE(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.czD=new A.eE(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.czM=new A.eE(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.czu=new A.eE(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cA_=new A.eE(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.czX=new A.eE(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.czC=new A.eE(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.czU=new A.eE(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.czT=new A.eE(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.czt=new A.eE(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.czH=new A.eE(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.czR=new A.eE(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.czW=new A.eE(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a5P=w([D.cA5,D.czE,D.czz,D.czI,D.czv,D.czK,D.cA7,D.czw,D.czD,D.czM,D.czu,D.cA_,D.czX,D.czC,D.czU,D.czT,D.czt,D.czH,D.czR,D.czW],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bVg=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.add=new C.JC(0,"youtube")
D.ade=new C.JC(1,"tiktok")
D.Nl=new C.JC(2,"instagram")
D.adf=new C.JC(3,"facebook")
D.cpw=new C.JC(4,"other")
D.cDJ=new A.ac(3,null,null,null)
D.cEt=new A.iy(4,10,8,0.52,null)
D.cTl=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cHS=new A.aU(D.cTl,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.y,null)
D.cL3=new A.T(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cT9=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d3C=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d4p=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d4u=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.daV=new C.aLe(null)})();(function staticFields(){$.dwB=20
$.aw2=null
$.bmA=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ehE","G7",()=>A.UQ(0))
w($,"ehF","OI",()=>A.UQ(null))})()};
(a=>{a["tOcKTt3YS9xAq6cVywlsX69YD5E="]=a.current})($__dart_deferred_initializers__);