((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eei(d,e){A.a7(d,!1).cJ(A.eK(new C.dgp(e),!0,null,x.H))},
YV(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OJ()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dgo(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YV)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dUl(r)
if(q==null){d.G(x.q).f.R(D.cIR)
w=1
break}w=4
return A.b(A.bR(B.i6,null,x.H),$async$YV)
case 4:if(d.e==null){w=1
break}n=B.l.Z(e,1,999)
$.dwC=n
p=C.dUf(n)
n=$.G7()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dkz(q)
d.G(x.q).f.R(A.bo(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YV,v)},
dwF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o9(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JC(d){return C.dUo(d)},
dUo(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JC=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$JC)
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
case 10:k=J.eU(r,x.f)
k=A.dt(k,new C.bmL(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ah<G.E>")
i=A.B(new A.ah(k,new C.bmM(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dwH(q)
w=12
return A.b(C.JB(a3,p),$async$JC)
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
case 19:m=C.dwF(A.Q(n,x.N,x.z))
l=C.dwH(A.a([m],x.e))
w=21
return A.b(C.JB(a3,l),$async$JC)
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
case 18:case 14:q=C.dUm()
w=22
return A.b(C.JB(a3,q),$async$JC)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JC,v)},
dwH(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.bmD(),w).eI(0),u=new A.D(d,new C.bmE(),w).eI(0),t=new A.D(d,new C.bmF(),w).eI(0),s=new A.D(d,new C.bmG(),w).eI(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dkA(null,q,u,t,v,s));++q}return r},
aw3(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aw3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JC(d),$async$aw3)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.dc(t,new C.bmH(),s).eI(0)
p=r.dc(t,new C.bmI(),s).eI(0)
o=r.dc(t,new C.bmJ(),s).eI(0)
n=r.dc(t,new C.bmK(),s).eI(0)
m=C.dkA(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JB(d,t),$async$aw3)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw3,v)},
JB(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$JB)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.bmC(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ar(s,null)),$async$JB)
case 3:return A.h(null,v)}})
return A.i($async$JB,v)},
dUm(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dx(20,x.k)
for(w=0;w<20;++w)q[w]=C.dkA(w,w,t,s,u,r)
return q},
dkA(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jz(),h=d==null,g=D.a5V[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a5V[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bmB(),A.W(p).j("D<1,o>")).fn(0)
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
k=D.bVz[w]
j=D.bML[w]
return new C.o9("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dUn(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().a_())},
dUn(d,e){var w,v=J.dx(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.ht(d.bG(256),16),2,"0")
return B.h.fn(v)},
dgp:function dgp(d){this.a=d},
dgo:function dgo(d,e){this.a=d
this.b=e},
dgk:function dgk(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgn:function dgn(d,e){this.a=d
this.b=e},
N4:function N4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o9:function o9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
JA:function JA(d,e){this.c=d
this.a=e},
afy:function afy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGZ:function cGZ(){},
cGY:function cGY(d,e){this.a=d
this.b=e},
cGW:function cGW(d){this.a=d},
cGX:function cGX(d,e){this.a=d
this.b=e},
cH_:function cH_(d){this.a=d},
cH3:function cH3(d){this.a=d},
cH4:function cH4(d,e){this.a=d
this.b=e},
cH2:function cH2(d,e,f){this.a=d
this.b=e
this.c=f},
cH1:function cH1(d,e){this.a=d
this.b=e},
cH0:function cH0(d,e){this.a=d
this.b=e},
cH5:function cH5(d){this.a=d},
Wd:function Wd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIT:function aIT(d,e){this.c=d
this.a=e},
Jz:function Jz(d,e){this.c=d
this.a=e},
aJU:function aJU(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGT:function cGT(d){this.a=d},
cGU:function cGU(d){this.a=d},
cGV:function cGV(d){this.a=d},
cGS:function cGS(d,e){this.a=d
this.b=e},
cGP:function cGP(d){this.a=d},
cGQ:function cGQ(d){this.a=d},
cGO:function cGO(d,e){this.a=d
this.b=e},
cGR:function cGR(d){this.a=d},
cGN:function cGN(d){this.a=d},
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
cVy:function cVy(d){this.a=d},
cVz:function cVz(d){this.a=d},
aLe:function aLe(d){this.a=d},
aFa:function aFa(d,e){this.c=d
this.a=e},
dUl(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dUk(v)
if(u!=null)return new C.qg(w,C.dky(u,!1),D.adf,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dUj(v)
if(t!=null)return new C.qg(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adg,"TikTok",q)
s=C.dUi(w,v)
if(s!=null)return s
r=C.dUh(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qg(w,w,D.cqu,"Video",q)
return q},
dUi(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qg(d,"https://www.instagram.com/reel/"+w+u,D.Nn,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qg(d,"https://www.instagram.com/p/"+w+u,D.Nn,t,null)}return null},
dUh(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qg(d,"https://www.facebook.com/plugins/video.php?href="+A.f4(2,d,B.bb,!1)+"&show_text=false&width=734",D.adh,"Facebook",null)},
dUk(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dUj(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
JD:function JD(d,e){this.a=d
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
aJV:function aJV(d,e){var _=this
_.d=$
_.cX$=d
_.aV$=e
_.c=_.a=null},
aLj:function aLj(d,e){this.c=d
this.a=e},
cKY:function cKY(d){this.a=d},
cKZ:function cKZ(d){this.a=d},
EX:function EX(d,e){this.c=d
this.a=e},
akg:function akg(){},
dwG(d,e,f,g,h,i){return new C.a6_(i,f,h,e,g,d)},
ect(d){var w=window
w.toString
A.hh(w,"message",new C.dcr(d),!1,x._)},
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
cH6:function cH6(d){this.a=d},
cHe:function cHe(d){this.a=d},
cHc:function cHc(d){this.a=d},
cHa:function cHa(d){this.a=d},
cHb:function cHb(d){this.a=d},
cH8:function cH8(d){this.a=d},
cHd:function cHd(d){this.a=d},
cH9:function cH9(d){this.a=d},
cH7:function cH7(d){this.a=d},
dcr:function dcr(d){this.a=d},
dwA(){var w,v,u
try{v=A.Ar()
w=v.grO(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dky(d,e){var w=C.dwA(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f4(2,w,B.bb,!1))
v.push("widget_referrer="+A.f4(2,w,B.bb,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bn(v,"&")},
dkx(d){var w=A.aq(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dwB(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dUe(d,e,f){var w,v,u=C.dkx(d)
if(u!=null){if(f){w=C.dwA()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dwB(C.dky(u,e))}return C.dwB(d)},
dUf(d){if(d<=4)return 0
return B.l.aL(d-1,4)*4},
dUg(d){var w
if($.OJ().a==null)return!1
w=$.G7().a
return d>=w&&d<w+4},
dwE(){var w=$.aw2
if(w!=null)w.ae(0)
$.aw2=null
$.G7().sv(0,0)},
dwD(){var w,v,u,t=$.OJ()
if(t.a==null)return
w=$.aw2
if(w!=null)w.ae(0)
v=$.dwC
if(v<=4){t=t.a
t.toString
C.dkz(t)
return}w=$.G7()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dkz(t)},
dkz(d){var w=$.aw2
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
default:w=null}$.aw2=A.dL(A.dq(0,0,0,0,0,w),C.ed6())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.N4.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.Y(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fP,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fF,w,w,w)}}
C.o9.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JA.prototype={
U(){return new C.afy(A.a([],x.e))},
gea(){return this.c}}
C.afy.prototype={
a0(){var w=this
w.a6()
$.G7().ao(0,w.gawC())
C.ect(w.gblQ())
w.Yp()},
blf(){if(this.c!=null)this.p(new C.cGZ())},
blR(){C.dwD()},
q(){$.G7().Y(0,this.gawC())
C.dwE()
$.OJ().sv(0,null)
this.a5()},
Yp(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JC(t.a.c),$async$Yp)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGY(t,s))
$.bmA=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$Yp,v)},
Uo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cGW(t))
w=3
return A.b(C.aw3(t.a.c),$async$Uo)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGX(t,s))
$.bmA=J.a4(t.d)
t.c.G(x.q).f.R(A.bo(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Uo,v)},
bnJ(d){var w=this.c
w.toString
A.a7(w,!1).cJ(A.eK(new C.cH_(d),!1,null,x.H))},
boj(){var w=this.c
w.toString
return C.YV(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.fb:B.bC,s=A.aM(v,v,v,v,B.KC,v,v,v,new C.cH3(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Dp(A.H(A.a([A.J(new A.I(B.j2,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aR(!1,v,!0,new A.I(B.bc,A.Y(B.h5,B.a6,v,v,28),v),B.cJ,!0,v,v,v,v,v,v,v,v,v,v,v,w.gboi(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c4(!0,A.w(A.a([new A.I(D.Wi,r,v),A.J(w.e?B.n_:new A.jc($.OJ(),new C.cH4(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqb(B.a6,B.G9,B.mh,D.d5v,w.e?v:new C.cH5(w)),v)}}
C.Wd.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a6.l(0.18),B.dp,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5Z(n,!0,!C.dUg(w),"Fold "+(B.l.aL(w,4)+1)+"/"+B.l.aL(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jG,B.n7,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yG,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aR(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ch(p,A.h8(A.w(A.a([new C.aIT(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.AZ,B.a6.l(0.85),u,u,9),D.cEI,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aC2,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aL),B.k,u,u,new A.r(u,u,r,s,q,D.a_p,B.p),u,u,u,B.fH,u,u,u),1),B.aM,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aIT.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.ry,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.W8,w,w,w)}}
C.Jz.prototype={
U(){return new C.aJU()}}
C.aJU.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.fb:B.bC,t=A.aM(w,w,w,w,B.KC,w,w,w,new C.cGT(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c4(!0,A.w(A.a([new A.I(D.Wi,A.H(A.a([t,A.J(new A.Dp(A.H(A.a([A.J(new A.I(B.j2,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aR(!1,w,!0,new A.I(B.bc,A.Y(B.h5,B.a6,w,w,28),w),B.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGU(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.jc($.OJ(),new C.cGV(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aQH.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a6.l(0.35),B.f2,28),new A.aa(0,B.G,B.A.l(0.45),B.d6,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dwG(new A.du(v+"_full_"+u,x.W),!1,u,!1,w.gaMb(),v+"_full")
w=v}else w=new C.aK_(t.r,s)}else w=new C.aFa(m,s)
else w=D.dbW
return A.t(s,A.ch(n,A.h8(A.w(A.a([new C.aQI(m,l,s),A.J(w,1),new C.aQG(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aL),B.k,s,s,new A.r(s,s,o,q,p,D.a_p,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQI.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dB(r)
r=A.hK(r)
w=new A.dC(q,r)
v=w.gJc()===0?12:w.gJc()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h0:B.iZ)===B.h0?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mI,s,s,s),B.bA,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bS,D.aMY,B.el,D.aMa,B.el,D.aN1],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.Y(B.Ks,B.a6.l(0.9),s,s,12),B.el,A.J(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aCP,s,s,s)}}
C.aK_.prototype={
C(d){var w=null
return A.t(w,A.aK(A.w(A.a([A.Y(B.Ax,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.eD(D.aQr,D.cUa,this.c,A.eo(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yG,w,w,w,w,w,w,w,w,1/0)}}
C.aQG.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awu(B.AQ,"YouTube",s===0,r,new C.cVy(u))
s=u.awu(B.lf,"Device",s===1,r,new C.cVz(u))
w=r?"Power off":"Power on"
v=r?D.YM:D.aKb
return A.t(t,A.H(A.a([q,B.al,s,B.bA,A.aM(t,t,t,t,A.Y(v,r?B.bE:B.ft,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dv)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aCz,t,t,t)},
awu(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aL(!1,B.W,!0,u,A.aR(!1,A.m(10),!0,new A.I(B.ni,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLe.prototype={
C(d){return D.ass}}
C.aFa.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lC,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tw("Serial",u.c),q=w.tw("Model",u.d),p=w.tw("Device ID",u.e),o=w.tw("IMEI",u.r),n=w.tw("MAC",u.f),m=w.tw("OS",u.w+" "+u.x),l=w.tw("Location",u.y+", "+u.z),k=w.tw("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tw("Timezone",u.at)
u=u.ax
return A.ed(A.a([t,B.aM,s,B.ab,r,q,p,o,n,m,l,k,j,w.tw("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tw(d,e){var w=null
return new A.I(B.cK,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cF,A.d(e,w,w,w,w,w,w,D.cM4,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JD.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qg.prototype={
gaMb(){var w=this.c
return w===D.adf||w===D.adg||w===D.Nn||w===D.adh}}
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
this.aVV()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dF(t,new A.r(t,t,t,t,t,new A.ak(B.cL,B.cx,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bX),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i5,p,t)
w=B.e.l(0.92)
q=A.aK(new A.d6(new A.b4(p,new A.bp(0.72,1,q),q.j("b4<bk.T>")),!1,A.Y(B.jG,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n7
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
return new A.aJ(B.am,t,B.bf,B.y,s,t)}}
C.aLj.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kp(u,new C.cKY(this),B.c9,B.bP,!0,w,w,new C.cKZ(this),w)
return new C.EX(v,w)}}
C.EX.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uL,B.Si],x.O),B.jG)
break
case 1:w=new A.aO(A.a([B.yG,D.awQ],x.O),B.lg)
break
case 2:w=new A.aO(A.a([D.aym,D.awi],x.O),B.AE)
break
case 3:w=new A.aO(A.a([B.Y,B.dl],x.O),B.AI)
break
case 4:w=new A.aO(A.a([B.az,B.aO],x.O),B.pc)
break
default:w=u}v=w.a
return A.t(u,A.aK(A.Y(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aN,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akg.prototype={
q(){var w=this,v=w.aV$
if(v!=null)v.Y(0,w.gdE())
w.aV$=null
w.a5()},
bx(){this.bO()
this.bK()
this.dF()}}
C.a6_.prototype={
U(){return new C.afz()}}
C.afz.prototype={
bFx(d,e){var w=C.dkx(d)
if(w!=null)return C.dky(w,e)
return d},
a78(d,e){var w,v=this,u=C.dkx(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bFx(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dUe(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bDn(){var w,v=this
if(v.w)return
v.p(new C.cH6(v))
w=v.e
if(w!=null)v.a78(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aQ()
u.d=w
try{$.G9()
$.pF().uJ(w,new C.cHe(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cH7(v))
w=v.e
w.toString
v.a78(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Z_,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.V,n,n)],v))
return A.h8(A.aK(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1k(n,B.tk,w)],v)
if(o.f)w.push(A.h8(A.aK(new A.ac(28,28,D.att,n),n,n,n),B.d0,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bm,B.w,1)
q=A.Y(B.Kw,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eL(0,A.aL(!1,B.W,!0,n,A.aR(!1,n,!0,A.aK(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.VF,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbDm(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aJ(B.am,n,B.bf,B.y,w,n)}}
var z=a.updateTypes(["o(o9)","~()","JA(U)","o9(Z<@,@>)","a1(o9)","Z<o,@>(o9)","aB<~>()","Jz(U)","jc<K>(U,qg?,p?)","Wd(U,K)","tP(U,qg?,p?)","EX(U,al,dP?)"])
C.dgp.prototype={
$1(d){return new C.JA(this.a,null)},
$S:z+2}
C.dgo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aD(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dV,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a6.l(0.22),B.f2,32)],x.V),g=A.O(m?B.c8:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aLS,B.k,n,n,new A.r(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Y(B.d9,m?B.ax:B.d0,n,n,n),n,n,n,new C.dgk(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.af,B.ah,B.H,j,n,n),B.p),n,n,n,B.Im,n,n,n)
e=A.ej(B.cB,A.a([new C.N4("YouTube",B.Kr,m,n),new C.N4("TikTok",B.lg,m,n),new C.N4("Instagram",B.AE,m,n),new C.N4("Facebook",B.AI,m,n)],v),B.cq,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bC
r=A.Y(B.fJ,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aK
u=A.w(A.a([e,B.aS,A.aH(n,B.N,!0,n,!0,B.y,n,A.aI(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.R_),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a7,n,n,n,n)],v),B.aq,B.i,B.j,0,B.q)
e=A.jQ(D.aLV,D.d4D,new C.dgl(d),A.iN(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dF(A.ch(f,A.w(A.a([j,new A.I(B.VT,u,n),new A.I(D.aE4,A.H(A.a([e,B.bA,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dgm(d),n,n),B.al,A.dN(D.aQa,D.d5q,new C.dgn(d,w),A.bx(B.a6,n,n,n,B.e,n,D.VF,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.aq,B.i,B.a1,0,B.q),B.aL),new A.r(n,n,g,k,h,new A.ak(B.aN,B.aR,B.H,i,n,n),B.p),B.bX),n)},
$S:83}
C.dgk.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dgl.prototype={
$0(){C.dwE()
$.OJ().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dgm.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dgn.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bmL.prototype={
$1(d){return C.dwF(A.Q(d,x.N,x.z))},
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
$1(d){return d.ab()},
$S:z+5}
C.bmB.prototype={
$1(d){return B.b.bj(B.l.ht(d,16),2,"0").toUpperCase()},
$S:80}
C.cGZ.prototype={
$0(){},
$S:0}
C.cGY.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGW.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGX.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cH_.prototype={
$1(d){return new C.Jz(this.a,null)},
$S:z+7}
C.cH3.prototype={
$0(){return A.a7(this.a,!1).eu()},
$S:0}
C.cH4.prototype={
$3(d,e,f){return new A.jc($.G7(),new C.cH2(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cH2.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CS(d,k,x.Q)
w=w==null?k:w.glt()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.Y(B.jG,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.G7().a
m=B.m.Z(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.fp,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.jh(1.7777777777777777,C.dwG(new A.du("fleet_master_"+r,x.W),!0,r,!0,j.gaMb(),"fleet_master"),k),B.aL),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vD(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.ky(new A.I(B.Ie,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ok(D.aCb,A.aA7(new A.ns(new C.cH1(i,j),J.a4(i.d),!1,!0,!0,A.tk(),k),D.cFs),k)],w))},
$S:1676}
C.cH1.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wd(v,e,J.a4(w.d),new C.cH0(w,v),this.b,null)},
$S:z+9}
C.cH0.prototype={
$0(){return this.a.bnJ(this.b)},
$S:0}
C.cH5.prototype={
$0(){this.a.Uo()
return null},
$S:0}
C.cGT.prototype={
$0(){return A.a7(this.a,!1).eu()},
$S:0}
C.cGU.prototype={
$0(){C.YV(this.a,$.bmA)
return null},
$S:0}
C.cGV.prototype={
$3(d,e,f){return A.fx(new C.cGS(this.a,e))},
$S:z+10}
C.cGS.prototype={
$2(d,e){var w,v=null,u=B.m.Z(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aK(A.ct(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.V,v,v),B.aS,new C.aQH(u,s.a.c,s.e,s.d,new C.cGP(s),new C.cGQ(s),new C.cGR(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oP,v,v,B.ak),v,v,v)},
$S:1677}
C.cGP.prototype={
$0(){var w=this.a.c
w.toString
C.YV(w,$.bmA)
return null},
$S:0}
C.cGQ.prototype={
$1(d){var w=this.a
return w.p(new C.cGO(w,d))},
$S:35}
C.cGO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGR.prototype={
$0(){var w=this.a
return w.p(new C.cGN(w))},
$S:0}
C.cGN.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cVy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cVz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cKY.prototype={
$3(d,e,f){return new C.EX(this.a.c,null)},
$S:z+11}
C.cKZ.prototype={
$3(d,e,f){if(f==null)return e
return new A.aJ(B.am,null,B.bf,B.y,A.a([new C.EX(this.a.c,null),D.asG],x.p),null)},
$C:"$3",
$R:3,
$S:246}
C.cH6.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHe.prototype={
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
w.a78(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hh(v,"load",new C.cHc(w),!1,u)
v=w.e
v.toString
A.hh(v,"error",new C.cHd(w),!1,u)
w=w.e
w.toString
return w},
$S:581}
C.cHc.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHa(w))
A.bR(B.R,new C.cHb(w),x.H)}},
$S:45}
C.cHa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHb.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cH8(w))},
$S:12}
C.cH8.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cH9(w))},
$S:45}
C.cH9.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cH7.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dcr.prototype={
$1(d){var w,v,u,t,s=new A.Ew([],[]).Is(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1678};(function aliases(){var w=C.akg.prototype
w.aVV=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afy.prototype,"gawC","blf",1)
w(u,"gblQ","blR",1)
w(u,"gboi","boj",6)
w(C.afz.prototype,"gbDm","bDn",1)
v(C,"ed6","dwD",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.ym,[C.dgp,C.dgo,C.bmL,C.bmM,C.bmD,C.bmE,C.bmF,C.bmG,C.bmH,C.bmI,C.bmJ,C.bmK,C.bmC,C.bmB,C.cH_,C.cH4,C.cH2,C.cGV,C.cGQ,C.cKY,C.cKZ,C.cHe,C.cHc,C.cHd,C.dcr])
v(A.a_q,[C.dgk,C.dgl,C.dgm,C.dgn,C.cGZ,C.cGY,C.cGW,C.cGX,C.cH3,C.cH0,C.cH5,C.cGT,C.cGU,C.cGP,C.cGO,C.cGR,C.cGN,C.cVy,C.cVz,C.cH6,C.cHa,C.cHb,C.cH8,C.cH9,C.cH7])
v(A.au,[C.N4,C.Wd,C.aIT,C.aQH,C.aQI,C.aK_,C.aQG,C.aLe,C.aFa,C.aLj,C.EX])
v(A.al,[C.o9,C.qg])
v(A.ae,[C.JA,C.Jz,C.a5Z,C.a6_])
v(A.af,[C.afy,C.aJU,C.akg,C.afz])
v(A.a_r,[C.cH1,C.cGS])
u(C.JD,A.aG4)
u(C.aJV,C.akg)
w(C.akg,A.e6)})()
A.dA7(b.typeUniverse,JSON.parse('{"JA":{"ae":[],"p":[]},"Wd":{"au":[],"p":[]},"Jz":{"ae":[],"p":[]},"N4":{"au":[],"p":[]},"afy":{"af":["JA"]},"aIT":{"au":[],"p":[]},"aJU":{"af":["Jz"]},"aQH":{"au":[],"p":[]},"aQI":{"au":[],"p":[]},"aK_":{"au":[],"p":[]},"aQG":{"au":[],"p":[]},"aLe":{"au":[],"p":[]},"aFa":{"au":[],"p":[]},"a5Z":{"ae":[],"p":[]},"EX":{"au":[],"p":[]},"aJV":{"af":["a5Z"]},"aLj":{"au":[],"p":[]},"a6_":{"ae":[],"p":[]},"afz":{"af":["a6_"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<aa>"),O:w("a6<y>"),e:w("a6<o9>"),s:w("a6<o>"),p:w("a6<p>"),t:w("a6<K>"),X:w("ad<o9>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o4"),_:w("CP"),k:w("o9"),N:w("o"),Y:w("bp<a9>"),W:w("du<o>"),J:w("jc<K>"),j:w("jc<qg?>"),E:w("xg<cK>"),q:w("WY"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.YM=new A.N(983224,"MaterialIcons",!1)
D.aOB=new A.a8(D.YM,48,B.bm,null,null,null)
D.cLI=new A.T(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cT6=new A.A("Powered off",null,D.cLI,null,null,null,null,null,null,null,null,null)
D.bJX=w([D.aOB,B.P,D.cT6],x.p)
D.azz=new A.f0(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bJX,null)
D.ass=new A.ds(B.T,null,null,D.azz,null)
D.cF7=new A.ac(18,18,B.S_,null)
D.asG=new A.ds(B.T,null,null,D.cF7,null)
D.att=new A.hj(2,null,null,null,null,B.a9,null,null,null,null)
D.awi=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.awQ=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aym=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aC2=new A.V(0,3,0,3)
D.aCb=new A.V(10,0,10,88)
D.aCz=new A.V(12,6,12,10)
D.aCP=new A.V(14,8,14,6)
D.VF=new A.V(18,12,18,12)
D.aE4=new A.V(20,8,20,20)
D.Wi=new A.V(8,6,15,8)
D.aKb=new A.N(983222,"MaterialIcons",!1)
D.aLS=new A.a8(B.jG,26,B.a6,null,null,null)
D.aLV=new A.a8(B.Y_,18,null,null,null,null)
D.aMa=new A.a8(B.ry,14,B.a9,null,null,null)
D.aKr=new A.N(983420,"MaterialIcons",!1)
D.aMY=new A.a8(D.aKr,14,B.a9,null,null,null)
D.aIA=new A.N(62895,"MaterialIcons",!1)
D.aN1=new A.a8(D.aIA,14,B.a9,null,null,null)
D.aQa=new A.a8(B.ja,20,null,null,null,null)
D.aQr=new A.a8(B.h5,16,null,null,null,null)
D.bNw=w([B.aO,B.Y],x.O)
D.a_p=new A.ak(B.aN,B.aR,B.H,D.bNw,null,null)
D.cyP=new A.aO("NGMY OS","14.2.1")
D.cxC=new A.aO("VirtualDroid","13.8.4")
D.cxB=new A.aO("NGMY OS","15.0.0")
D.cyn=new A.aO("VirtualDroid","14.1.2")
D.cxz=new A.aO("NGMY Tab OS","12.9.7")
D.cxx=new A.aO("NGMY OS","13.5.3")
D.cxm=new A.aO("VirtualDroid","15.2.0")
D.cxZ=new A.aO("NGMY OS","14.8.1")
D.cyt=new A.aO("NGMY Tab OS","13.2.4")
D.cyZ=new A.aO("VirtualDroid","12.6.9")
D.cxh=new A.aO("NGMY OS","16.0.1")
D.cx8=new A.aO("VirtualDroid","14.9.0")
D.cyG=new A.aO("NGMY Tab OS","14.0.3")
D.cxL=new A.aO("NGMY OS","13.1.8")
D.cxg=new A.aO("VirtualDroid","13.4.5")
D.cxw=new A.aO("NGMY OS","15.3.2")
D.cyu=new A.aO("NGMY Tab OS","12.4.1")
D.cyJ=new A.aO("VirtualDroid","16.1.0")
D.cxY=new A.aO("NGMY OS","14.4.6")
D.cyQ=new A.aO("VirtualDroid","15.0.8")
D.bML=w([D.cyP,D.cxC,D.cxB,D.cyn,D.cxz,D.cxx,D.cxm,D.cxZ,D.cyt,D.cyZ,D.cxh,D.cx8,D.cyG,D.cxL,D.cxg,D.cxw,D.cyu,D.cyJ,D.cxY,D.cyQ],A.b6("a6<+(o,o)>"))
D.cB4=new A.eF(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cAD=new A.eF(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cAy=new A.eF(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cAH=new A.eF(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cAu=new A.eF(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cAJ=new A.eF(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cB6=new A.eF(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cAv=new A.eF(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cAC=new A.eF(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cAL=new A.eF(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cAt=new A.eF(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cAZ=new A.eF(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cAW=new A.eF(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cAB=new A.eF(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cAT=new A.eF(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cAS=new A.eF(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cAs=new A.eF(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cAG=new A.eF(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cAQ=new A.eF(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cAV=new A.eF(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a5V=w([D.cB4,D.cAD,D.cAy,D.cAH,D.cAu,D.cAJ,D.cB6,D.cAv,D.cAC,D.cAL,D.cAt,D.cAZ,D.cAW,D.cAB,D.cAT,D.cAS,D.cAs,D.cAG,D.cAQ,D.cAV],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bVz=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adf=new C.JD(0,"youtube")
D.adg=new C.JD(1,"tiktok")
D.Nn=new C.JD(2,"instagram")
D.adh=new C.JD(3,"facebook")
D.cqu=new C.JD(4,"other")
D.cEI=new A.ac(3,null,null,null)
D.cFs=new A.ik(4,10,8,0.52,null)
D.cUm=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cIR=new A.aU(D.cUm,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.y,null)
D.cM4=new A.T(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUa=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d4D=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d5q=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d5v=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dbW=new C.aLe(null)})();(function staticFields(){$.dwC=20
$.aw2=null
$.bmA=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ei6","G7",()=>A.UQ(0))
w($,"ei7","OJ",()=>A.UQ(null))})()};
(a=>{a["lt65Ie56SkJEmFJ6C0JTg3nweD4="]=a.current})($__dart_deferred_initializers__);