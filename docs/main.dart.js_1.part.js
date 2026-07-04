((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dWu(d,e){A.a5(d,!1).cl(A.eg(new C.d3e(e),!0,null,x.H))},
Va(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Va=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LR()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ak()
s=new A.ac(new A.aN(n,B.a6,B.Z),t)
w=3
return A.b(A.d5(B.E,new C.d3d(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Va)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dEk(r)
if(q==null){d.F(x.q).f.O(D.bCc)
w=1
break}w=4
return A.b(A.bK(B.fQ,null,x.H),$async$Va)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dhV=n
p=C.dEe(n)
n=$.DW()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d72(q)
d.F(x.q).f.O(A.bo(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Va,v)},
dhY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aR(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aR(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H6(d){return C.dEn(d)},
dEn(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H6=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H6)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aH(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cB(r)?10:11
break
case 10:k=J.eN(r,x.f)
k=A.dk(k,new C.bdw(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("af<K.E>")
i=A.D(new A.af(k,new C.bdx(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.di_(q)
w=12
return A.b(C.H5(a3,p),$async$H6)
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
case 9:case 5:o=A.aH(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dhY(A.S(n,x.N,x.z))
l=C.di_(A.a([m],x.e))
w=21
return A.b(C.H5(a3,l),$async$H6)
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
case 18:case 14:q=C.dEl()
w=22
return A.b(C.H5(a3,q),$async$H6)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H6,v)},
di_(d){var w=A.V(d).j("B<1,m>"),v=new A.B(d,new C.bdo(),w).er(0),u=new A.B(d,new C.bdp(),w).er(0),t=new A.B(d,new C.bdq(),w).er(0),s=new A.B(d,new C.bdr(),w).er(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d73(null,q,u,t,v,s));++q}return r},
aq1(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aq1=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H6(d),$async$aq1)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d0(t,new C.bds(),s).er(0)
p=r.d0(t,new C.bdt(),s).er(0)
o=r.d0(t,new C.bdu(),s).er(0)
n=r.d0(t,new C.bdv(),s).er(0)
m=C.d73(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H5(d,t),$async$aq1)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aq1,v)},
H5(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H5)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bdn(),x.P)
s=A.D(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$H5)
case 3:return A.f(null,v)}})
return A.h($async$H5,v)},
dEl(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dT(20,x.k)
for(w=0;w<20;++w)q[w]=C.d73(w,w,t,s,u,r)
return q},
d73(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jw(),h=d==null,g=D.TL[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TL[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.B(p,new C.bdm(),A.V(p).j("B<1,m>")).fa(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.n.j3(i.bz(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aUt[w]
j=D.aOl[w]
return new C.mY("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bh(B.n.q(e+1),2,"0"),u,k,C.dEm(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.O(Date.now(),0,!1).a0().X())},
dEm(d,e){var w,v=J.dT(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.n.j3(d.bz(256),16),2,"0")
return B.d.fa(v)},
d3e:function d3e(d){this.a=d},
d3d:function d3d(d,e){this.a=d
this.b=e},
d39:function d39(d){this.a=d},
d3a:function d3a(d){this.a=d},
d3b:function d3b(d){this.a=d},
d3c:function d3c(d,e){this.a=d
this.b=e},
Ka:function Ka(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mY:function mY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bdw:function bdw(){},
bdx:function bdx(){},
bdo:function bdo(){},
bdp:function bdp(){},
bdq:function bdq(){},
bdr:function bdr(){},
bds:function bds(){},
bdt:function bdt(){},
bdu:function bdu(){},
bdv:function bdv(){},
bdn:function bdn(){},
bdm:function bdm(){},
H4:function H4(d,e){this.c=d
this.a=e},
aaH:function aaH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cuH:function cuH(){},
cuG:function cuG(d,e){this.a=d
this.b=e},
cuE:function cuE(d){this.a=d},
cuF:function cuF(d,e){this.a=d
this.b=e},
cuI:function cuI(d){this.a=d},
cuM:function cuM(d){this.a=d},
cuN:function cuN(d,e){this.a=d
this.b=e},
cuL:function cuL(d,e,f){this.a=d
this.b=e
this.c=f},
cuK:function cuK(d,e){this.a=d
this.b=e},
cuJ:function cuJ(d,e){this.a=d
this.b=e},
cuO:function cuO(d){this.a=d},
Sy:function Sy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBO:function aBO(d,e){this.c=d
this.a=e},
H3:function H3(d,e){this.c=d
this.a=e},
aCL:function aCL(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cuB:function cuB(d){this.a=d},
cuC:function cuC(d){this.a=d},
cuD:function cuD(d){this.a=d},
cuA:function cuA(d,e){this.a=d
this.b=e},
cux:function cux(d){this.a=d},
cuy:function cuy(d){this.a=d},
cuw:function cuw(d,e){this.a=d
this.b=e},
cuz:function cuz(d){this.a=d},
cuv:function cuv(d){this.a=d},
aJp:function aJp(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJq:function aJq(d,e,f){this.c=d
this.d=e
this.a=f},
aCR:function aCR(d,e){this.c=d
this.a=e},
aJo:function aJo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJc:function cJc(d){this.a=d},
cJd:function cJd(d){this.a=d},
aE1:function aE1(d){this.a=d},
aya:function aya(d,e){this.c=d
this.a=e},
dEk(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dEj(v)
if(u!=null)return new C.oZ(w,C.d71(u,!1),D.a_D,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dEi(v)
if(t!=null)return new C.oZ(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_E,"TikTok",q)
s=C.dEh(w,v)
if(s!=null)return s
r=C.dEg(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oZ(w,w,D.bmp,"Video",q)
return q},
dEh(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oZ(d,"https://www.instagram.com/reel/"+w+u,D.H1,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oZ(d,"https://www.instagram.com/p/"+w+u,D.H1,t,null)}return null},
dEg(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oZ(d,"https://www.facebook.com/plugins/video.php?href="+A.eD(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_F,"Facebook",null)},
dEj(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dEi(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
H7:function H7(d,e){this.a=d
this.b=e},
oZ:function oZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1I:function a1I(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCM:function aCM(d,e){var _=this
_.d=$
_.cT$=d
_.aT$=e
_.c=_.a=null},
aE6:function aE6(d,e){this.c=d
this.a=e},
cyG:function cyG(d){this.a=d},
cyH:function cyH(d){this.a=d},
CN:function CN(d,e){this.c=d
this.a=e},
afj:function afj(){},
dhZ(d,e,f,g,h,i){return new C.a1J(i,f,h,e,g,d)},
dVa(d){var w=window
w.toString
A.fO(w,"message",new C.d_m(d),!1,x._)},
a1J:function a1J(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaI:function aaI(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cuP:function cuP(d){this.a=d},
cuX:function cuX(d){this.a=d},
cuV:function cuV(d){this.a=d},
cuT:function cuT(d){this.a=d},
cuU:function cuU(d){this.a=d},
cuR:function cuR(d){this.a=d},
cuW:function cuW(d){this.a=d},
cuS:function cuS(d){this.a=d},
cuQ:function cuQ(d){this.a=d},
d_m:function d_m(d){this.a=d},
dhT(){var w,v,u
try{v=A.yq()
w=v.gpZ(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d71(d,e){var w=C.dhT(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eD(2,w,B.aP,!1))
v.push("widget_referrer="+A.eD(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d70(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
dhU(d){var w=A.bk(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bk(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dEd(d,e,f){var w,v,u=C.d70(d)
if(u!=null){if(f){w=C.dhT()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dhU(C.d71(u,e))}return C.dhU(d)},
dEe(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dEf(d){var w
if($.LR().a==null)return!1
w=$.DW().a
return d>=w&&d<w+4},
dhX(){var w=$.aq0
if(w!=null)w.a7(0)
$.aq0=null
$.DW().sv(0,0)},
dhW(){var w,v,u,t=$.LR()
if(t.a==null)return
w=$.aq0
if(w!=null)w.a7(0)
v=$.dhV
if(v<=4){t=t.a
t.toString
C.d72(t)
return}w=$.DW()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d72(t)},
d72(d){var w=$.aq0
if(w!=null)w.a7(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aq0=A.dp(A.d6(0,0,0,0,0,w),C.dVl())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ka.prototype={
B(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.R.l(0.25),B.o,1),r=A.Z(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eG,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bD,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.el,w,w,w)}}
C.mY.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H4.prototype={
T(){return new C.aaH(A.a([],x.e))},
gdW(){return this.c}}
C.aaH.prototype={
Z(){var w=this
w.a3()
$.DW().ak(0,w.garT())
C.dVa(w.gbdJ())
w.V9()},
bd8(){if(this.c!=null)this.p(new C.cuH())},
bdK(){C.dhW()},
n(){$.DW().V(0,this.garT())
C.dhX()
$.LR().sv(0,null)
this.a2()},
V9(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V9=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H6(t.a.c),$async$V9)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cuG(t,s))
$.bdl=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$V9,v)},
Rp(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rp=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cuE(t))
w=3
return A.b(C.aq1(t.a.c),$async$Rp)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cuF(t,s))
$.bdl=J.a3(t.d)
t.c.F(x.q).f.O(A.bo(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rp,v)},
bfz(d){var w=this.c
w.toString
A.a5(w,!1).cl(A.eg(new C.cuI(d),!1,null,x.H))},
bg8(){var w=this.c
w.toString
return C.Va(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.e8:B.bM,s=A.aJ(v,v,v,v,B.Fg,v,v,v,new C.cuM(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.Bm(A.G(A.a([A.I(new A.H(B.i4,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.O,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aP(!1,B.M,!0,v,A.aW(!1,v,!0,new A.H(B.aL,A.Z(B.eT,B.R,v,v,28),v),B.c6,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbg7(),v,v,v,v,v,v,v),B.h,B.E,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.ca(!0,A.y(A.a([new A.H(D.OK,r,v),A.I(w.e?B.lb:new A.is($.LR(),new C.cuN(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.akR(B.R,B.AN,B.ph,D.bZu,w.e?v:new C.cuO(w)),v)}}
C.Sy.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1I(n,!0,!C.dEf(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.id,B.li,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vE,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aP(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cw(p,A.fP(A.y(A.a([new C.aBO(o,u),A.I(n,1),A.u(u,A.G(A.a([A.Z(B.pc,B.R.l(0.85),u,u,9),D.bya,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.ac,u,u,u,u,u,D.amD,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.SC,B.k),u,u,u,B.eQ,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.E,0,u,u,u,u,u,B.X)}}
C.aBO.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.I(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pf,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.ac,w,w,w,w,w,B.Oz,w,w,w)}}
C.H3.prototype={
T(){return new C.aCL()}}
C.aCL.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.e8:B.bM,t=A.aJ(w,w,w,w,B.Fg,w,w,w,new C.cuB(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.ca(!0,A.y(A.a([new A.H(D.OK,A.G(A.a([t,A.I(new A.Bm(A.G(A.a([A.I(new A.H(B.i4,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.O,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aP(!1,B.M,!0,w,A.aW(!1,w,!0,new A.H(B.aL,A.Z(B.eT,B.R,w,w,28),w),B.c6,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cuC(d),w,w,w,w,w,w,w),B.h,B.E,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.is($.LR(),new C.cuD(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJp.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.en,28),new A.ag(0,B.x,B.q.l(0.45),B.cu,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhZ(new A.de(v+"_full_"+u,x.W),!1,u,!1,w.gaGr(),v+"_full")
w=v}else w=new C.aCR(t.r,s)}else w=new C.aya(m,s)
else w=D.c3Y
return A.u(s,A.cw(n,A.fP(A.y(A.a([new C.aJq(m,l,s),A.I(w,1),new C.aJo(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.SC,B.k),s,r*2.05,s,B.bf,s,s,r)}}
C.aJq.prototype={
B(d){var w,v,u,t,s=null,r=new A.O(Date.now(),0,!1),q=A.dl(r)
r=A.hf(r)
w=new A.dd(q,r)
v=w.gGH()===0?12:w.gGH()
r=B.a.bh(B.n.q(r),2,"0")
q=(q<12?B.eN:B.hB)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.kY,s,s,s),B.b2,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bb,D.ax7,B.du,D.awm,B.du,D.axb],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.F9,B.R.l(0.9),s,s,12),B.du,A.I(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.ac,s,s,s,s,s,D.anl,s,s,s)}}
C.aCR.prototype={
B(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.Z(B.xm,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.eA(D.aAt,D.bNn,this.c,A.ew(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aF(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vE,w,w,w,w,w,w,w,w,1/0)}}
C.aJo.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arL(B.Rb,"YouTube",s===0,r,new C.cJc(u))
s=u.arL(B.ky,"Device",s===1,r,new C.cJd(u))
w=r?"Power off":"Power on"
v=r?D.Rc:D.aun
return A.u(t,A.G(A.a([q,B.a_,s,B.b2,A.aJ(t,t,t,t,A.Z(v,r?B.b4:B.dM,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cH)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.ac,t,t,t,t,t,D.an8,t,t,t)},
arL(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.R:B.a8
v=f&&g?B.R.l(0.15):B.E
u=A.n(10)
t=g?h:s
return A.I(A.aP(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.H(B.lt,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.X),1)}}
C.aE1.prototype={
B(d){return D.adx}}
C.aya.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jZ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.ek(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aL,v,v,B.a1,!1)},
qB(d,e){var w=null
return new A.H(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c_,A.j(e,w,w,w,w,w,w,D.bFd,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H7.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oZ.prototype={
gaGr(){var w=this.c
return w===D.a_D||w===D.a_E||w===D.H1||w===D.a_F}}
C.a1I.prototype={
T(){return new C.aCM(null,null)}}
C.aCM.prototype={
Z(){this.a3()
var w=A.bE(null,B.rp,null,1,null,this)
w.nq(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPU()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dP(t,new A.t(t,t,t,t,t,new A.ap(B.cO,B.c3,B.y,A.a([B.E,B.q.l(0.55)],x.O),t,t),B.k),B.bA),q=x.Y,p=u.d
p===$&&A.c()
p=A.cr(B.i1,p,t)
w=B.c.l(0.92)
q=A.aU(new A.cU(new A.b0(p,new A.bj(0.72,1,q),q.j("b0<bh.T>")),!1,A.Z(B.id,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.li
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aE6(s,t),r,q,A.b2(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b2(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b2(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aI(B.a4,t,B.aT,B.m,s,t)}}
C.aE6.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kE(u,new C.cyG(this),B.br,!0,w,w,new C.cyH(this),w)
return new C.CN(v,w)}}
C.CN.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aG(A.a([B.ra,B.Ll],x.O),B.id)
break
case 1:w=new A.aG(A.a([B.vE,D.ahB],x.O),B.jI)
break
case 2:w=new A.aG(A.a([D.aj6,D.ah7],x.O),B.xu)
break
case 3:w=new A.aG(A.a([B.O,B.cA],x.O),B.xx)
break
case 4:w=new A.aG(A.a([B.ac,B.aj],x.O),B.n3)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.Z(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.am,B.aq,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afj.prototype={
n(){var w=this,v=w.aT$
if(v!=null)v.V(0,w.gdG())
w.aT$=null
w.a2()},
bp(){this.bF()
this.bD()
this.dH()}}
C.a1J.prototype={
T(){return new C.aaI()}}
C.aaI.prototype={
bw_(d,e){var w=C.d70(d)
if(w!=null)return C.d71(w,e)
return d},
a3w(d,e){var w,v=this,u=C.d70(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bw_(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dEd(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btX(){var w,v=this
if(v.w)return
v.p(new C.cuP(v))
w=v.e
if(w!=null)v.a3w(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=w
try{$.DX()
$.or().rP(w,new C.cuX(u),!0)}catch(v){u.r=!0
u.f=!1}},
aS(d){var w,v=this
v.b4(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cuQ(v))
w=v.e
w.toString
v.a3w(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Ro,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.fP(A.aU(new A.H(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yt(n,B.pS,w)],v)
if(o.f)w.push(A.fP(A.aU(new A.an(28,28,D.aeo,n),n,n,n),B.cm,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b0,B.o,1)
q=A.Z(B.Fc,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eH(0,A.aP(!1,B.M,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O6,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtW(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.X)))}return new A.aI(B.a4,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mY)","~()","H4(R)","mY(X<@,@>)","a_(mY)","X<m,@>(mY)","aw<~>()","H3(R)","is<Q>(R,oZ?,o?)","Sy(R,Q)","rf(R,oZ?,o?)","CN(R,ai,dv?)"])
C.d3e.prototype={
$1(d){return new C.H4(this.a,null)},
$S:z+2}
C.d3d.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.aA(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cJ,B.O],j):A.a([B.c,B.aa],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.en,32)],x.V),g=A.U(m?B.bx:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.a3.l(m?0.18:0.08)],j)
e=A.u(n,D.aw0,B.h,n,n,new A.t(B.R.l(0.18),n,A.U(B.R.l(0.45),B.o,1),n,n,n,B.ak),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.O,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.ep,w,A.aJ(n,n,n,n,A.Z(B.cy,m?B.a8:B.cm,n,n,n),n,n,n,new C.d39(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a0,B.a2,B.y,j,n,n),B.k),n,n,n,B.D5,n,n,n)
e=A.ea(B.bW,A.a([new C.Ka("YouTube",B.F8,m,n),new C.Ka("TikTok",B.jI,m,n),new C.Ka("Instagram",B.xu,m,n),new C.Ka("Facebook",B.xx,m,n)],v),B.bR,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.O,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fK,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.bM
r=A.Z(B.jH,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bx:B.aA
u=A.y(A.a([e,B.ar,A.ax(n,B.B,!0,n,!0,B.m,n,A.az(),w,n,n,n,n,n,2,A.bm(n,new A.b8(4,q,B.L),n,n,n,n,n,n,!0,new A.b8(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b8(4,A.n(16),B.Kc),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.G,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.P,n,n,n,n)],v),B.ag,B.e,B.f,0,B.l)
e=A.jn(D.aw4,D.bYB,new C.d3a(d),A.j2(n,n,n,n,n,n,n,n,n,n,n,m?B.aK:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.W(12,0,12,12+l.f.d),A.dP(A.cw(f,A.y(A.a([j,new A.H(D.aos,u,n),new A.H(D.aoE,A.G(A.a([e,B.b2,A.bU(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d3b(d),n,n),B.a_,A.dL(D.aAc,D.bZn,new C.d3c(d,w),A.bt(B.R,n,n,n,B.c,n,D.O6,n,new A.bC(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ag,B.e,B.Q,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.am,B.aq,B.y,i,n,n),B.k),B.bA),n)},
$S:71}
C.d39.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3a.prototype={
$0(){C.dhX()
$.LR().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d3b.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3c.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bdw.prototype={
$1(d){return C.dhY(A.S(d,x.N,x.z))},
$S:z+3}
C.bdx.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bdo.prototype={
$1(d){return d.c},
$S:z+0}
C.bdp.prototype={
$1(d){return d.r},
$S:z+0}
C.bdq.prototype={
$1(d){return d.f},
$S:z+0}
C.bdr.prototype={
$1(d){return d.at},
$S:z+0}
C.bds.prototype={
$1(d){return d.c},
$S:z+0}
C.bdt.prototype={
$1(d){return d.r},
$S:z+0}
C.bdu.prototype={
$1(d){return d.f},
$S:z+0}
C.bdv.prototype={
$1(d){return d.at},
$S:z+0}
C.bdn.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bdm.prototype={
$1(d){return B.a.bh(B.n.j3(d,16),2,"0").toUpperCase()},
$S:76}
C.cuH.prototype={
$0(){},
$S:0}
C.cuG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cuE.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cuF.prototype={
$0(){var w=this.a,v=A.D(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cuI.prototype={
$1(d){return new C.H3(this.a,null)},
$S:z+7}
C.cuM.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cuN.prototype={
$3(d,e,f){return new A.is($.DW(),new C.cuL(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cuL.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AN(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.U(B.R.l(0.35),B.o,1)
q=A.Z(B.id,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DW().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.O,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cs,B.eB,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cw(s,new A.iP(1.7777777777777777,C.dhZ(new A.de("fleet_master_"+r,x.W),!0,r,!0,j.gaGr(),"fleet_master"),k),B.as),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.tZ(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jK(new A.H(B.CV,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.n8(D.amM,A.atv(new A.mo(new C.cuK(i,j),J.a3(i.d),!1,!0,!0,A.qS(),k),D.byT),k)],w))},
$S:1599}
C.cuK.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sy(v,e,J.a3(w.d),new C.cuJ(w,v),this.b,null)},
$S:z+9}
C.cuJ.prototype={
$0(){return this.a.bfz(this.b)},
$S:0}
C.cuO.prototype={
$0(){this.a.Rp()
return null},
$S:0}
C.cuB.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cuC.prototype={
$0(){C.Va(this.a,$.bdl)
return null},
$S:0}
C.cuD.prototype={
$3(d,e,f){return A.fE(new C.cuA(this.a,e))},
$S:z+10}
C.cuA.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cq(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.ar,new C.aJp(u,s.a.c,s.e,s.d,new C.cux(s),new C.cuy(s),new C.cuz(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.NW,v,v,B.a1),v,v,v)},
$S:1600}
C.cux.prototype={
$0(){var w=this.a.c
w.toString
C.Va(w,$.bdl)
return null},
$S:0}
C.cuy.prototype={
$1(d){var w=this.a
return w.p(new C.cuw(w,d))},
$S:40}
C.cuw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cuz.prototype={
$0(){var w=this.a
return w.p(new C.cuv(w))},
$S:0}
C.cuv.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJc.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJd.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cyG.prototype={
$3(d,e,f){return new C.CN(this.a.c,null)},
$S:z+11}
C.cyH.prototype={
$3(d,e,f){if(f==null)return e
return new A.aI(B.a4,null,B.aT,B.m,A.a([new C.CN(this.a.c,null),D.adM],x.p),null)},
$C:"$3",
$R:3,
$S:420}
C.cuP.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cuX.prototype={
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
w.a3w(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fO(v,"load",new C.cuV(w),!1,u)
v=w.e
v.toString
A.fO(v,"error",new C.cuW(w),!1,u)
w=w.e
w.toString
return w},
$S:504}
C.cuV.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cuT(w))
A.bK(B.D,new C.cuU(w),x.H)}},
$S:43}
C.cuT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cuU.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cuR(w))},
$S:12}
C.cuR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cuW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cuS(w))},
$S:43}
C.cuS.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cuQ.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d_m.prototype={
$1(d){var w,v,u,t,s=new A.Cn([],[]).FZ(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1601};(function aliases(){var w=C.afj.prototype
w.aPU=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaH.prototype,"garT","bd8",1)
w(u,"gbdJ","bdK",1)
w(u,"gbg7","bg8",6)
w(C.aaI.prototype,"gbtW","btX",1)
v(C,"dVl","dhW",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.ws,[C.d3e,C.d3d,C.bdw,C.bdx,C.bdo,C.bdp,C.bdq,C.bdr,C.bds,C.bdt,C.bdu,C.bdv,C.bdn,C.bdm,C.cuI,C.cuN,C.cuL,C.cuD,C.cuy,C.cyG,C.cyH,C.cuX,C.cuV,C.cuW,C.d_m])
v(A.WJ,[C.d39,C.d3a,C.d3b,C.d3c,C.cuH,C.cuG,C.cuE,C.cuF,C.cuM,C.cuJ,C.cuO,C.cuB,C.cuC,C.cux,C.cuw,C.cuz,C.cuv,C.cJc,C.cJd,C.cuP,C.cuT,C.cuU,C.cuR,C.cuS,C.cuQ])
v(A.au,[C.Ka,C.Sy,C.aBO,C.aJp,C.aJq,C.aCR,C.aJo,C.aE1,C.aya,C.aE6,C.CN])
v(A.ai,[C.mY,C.oZ])
v(A.ab,[C.H4,C.H3,C.a1I,C.a1J])
v(A.ad,[C.aaH,C.aCL,C.afj,C.aaI])
v(A.WK,[C.cuK,C.cuA])
u(C.H7,A.az3)
u(C.aCM,C.afj)
w(C.afj,A.e8)})()
A.dle(b.typeUniverse,JSON.parse('{"H4":{"ab":[],"o":[]},"Sy":{"au":[],"o":[]},"H3":{"ab":[],"o":[]},"Ka":{"au":[],"o":[]},"aaH":{"ad":["H4"]},"aBO":{"au":[],"o":[]},"aCL":{"ad":["H3"]},"aJp":{"au":[],"o":[]},"aJq":{"au":[],"o":[]},"aCR":{"au":[],"o":[]},"aJo":{"au":[],"o":[]},"aE1":{"au":[],"o":[]},"aya":{"au":[],"o":[]},"a1I":{"ab":[],"o":[]},"CN":{"au":[],"o":[]},"aCM":{"ad":["a1I"]},"aE6":{"au":[],"o":[]},"a1J":{"ab":[],"o":[]},"aaI":{"ad":["a1J"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("a9<ag>"),O:w("a9<z>"),e:w("a9<mY>"),s:w("a9<m>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("aa<mY>"),a:w("aa<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mV"),_:w("AK"),k:w("mY"),N:w("m"),Y:w("bj<a8>"),W:w("de<m>"),J:w("is<Q>"),j:w("is<oZ?>"),E:w("vp<cx>"),q:w("Tg"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rc=new A.L(983224,"MaterialIcons",!1)
D.ayI=new A.a6(D.Rc,48,B.b0,null,null,null)
D.bER=new A.M(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMi=new A.x("Powered off",null,D.bER,null,null,null,null,null,null,null,null,null)
D.aMq=w([D.ayI,B.C,D.bMi],x.p)
D.akd=new A.fh(B.a1,B.e,B.Q,B.i,null,B.l,null,0,D.aMq,null)
D.adx=new A.dh(B.J,null,null,D.akd,null)
D.byz=new A.an(18,18,B.L4,null)
D.adM=new A.dh(B.J,null,null,D.byz,null)
D.aeo=new A.h9(2,null,null,null,null,B.U,null,null,null,null)
D.ah7=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahB=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aj6=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amD=new A.W(0,3,0,3)
D.amM=new A.W(10,0,10,88)
D.an8=new A.W(12,6,12,10)
D.anl=new A.W(14,8,14,6)
D.O6=new A.W(18,12,18,12)
D.aos=new A.W(20,18,20,8)
D.aoE=new A.W(20,8,20,20)
D.OK=new A.W(8,6,15,8)
D.aun=new A.L(983222,"MaterialIcons",!1)
D.aw0=new A.a6(B.id,26,B.R,null,null,null)
D.aw4=new A.a6(B.Qo,18,null,null,null,null)
D.awm=new A.a6(B.pf,14,B.U,null,null,null)
D.auE=new A.L(983420,"MaterialIcons",!1)
D.ax7=new A.a6(D.auE,14,B.U,null,null,null)
D.asQ=new A.L(62895,"MaterialIcons",!1)
D.axb=new A.a6(D.asQ,14,B.U,null,null,null)
D.aAc=new A.a6(B.iU,20,null,null,null,null)
D.aAt=new A.a6(B.eT,16,null,null,null,null)
D.aOR=w([B.aj,B.O],x.O)
D.SC=new A.ap(B.am,B.aq,B.y,D.aOR,null,null)
D.bsq=new A.aG("NGMY OS","14.2.1")
D.brh=new A.aG("VirtualDroid","13.8.4")
D.brg=new A.aG("NGMY OS","15.0.0")
D.bs_=new A.aG("VirtualDroid","14.1.2")
D.bre=new A.aG("NGMY Tab OS","12.9.7")
D.brc=new A.aG("NGMY OS","13.5.3")
D.br1=new A.aG("VirtualDroid","15.2.0")
D.brD=new A.aG("NGMY OS","14.8.1")
D.bs5=new A.aG("NGMY Tab OS","13.2.4")
D.bsA=new A.aG("VirtualDroid","12.6.9")
D.bqY=new A.aG("NGMY OS","16.0.1")
D.bqP=new A.aG("VirtualDroid","14.9.0")
D.bsi=new A.aG("NGMY Tab OS","14.0.3")
D.brq=new A.aG("NGMY OS","13.1.8")
D.bqX=new A.aG("VirtualDroid","13.4.5")
D.brb=new A.aG("NGMY OS","15.3.2")
D.bs6=new A.aG("NGMY Tab OS","12.4.1")
D.bsk=new A.aG("VirtualDroid","16.1.0")
D.brC=new A.aG("NGMY OS","14.4.6")
D.bsr=new A.aG("VirtualDroid","15.0.8")
D.aOl=w([D.bsq,D.brh,D.brg,D.bs_,D.bre,D.brc,D.br1,D.brD,D.bs5,D.bsA,D.bqY,D.bqP,D.bsi,D.brq,D.bqX,D.brb,D.bs6,D.bsk,D.brC,D.bsr],A.bf("a9<+(m,m)>"))
D.buC=new A.eh(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bua=new A.eh(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bu5=new A.eh(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bue=new A.eh(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bu1=new A.eh(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bug=new A.eh(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buE=new A.eh(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bu2=new A.eh(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bu9=new A.eh(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bui=new A.eh(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bu0=new A.eh(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buw=new A.eh(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.but=new A.eh(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bu8=new A.eh(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buq=new A.eh(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bup=new A.eh(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bu_=new A.eh(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bud=new A.eh(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bun=new A.eh(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bus=new A.eh(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TL=w([D.buC,D.bua,D.bu5,D.bue,D.bu1,D.bug,D.buE,D.bu2,D.bu9,D.bui,D.bu0,D.buw,D.but,D.bu8,D.buq,D.bup,D.bu_,D.bud,D.bun,D.bus],A.bf("a9<+(m,m,a8,a8,m)>"))
D.aUt=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_D=new C.H7(0,"youtube")
D.a_E=new C.H7(1,"tiktok")
D.H1=new C.H7(2,"instagram")
D.a_F=new C.H7(3,"facebook")
D.bmp=new C.H7(4,"other")
D.bya=new A.an(3,null,null,null)
D.byT=new A.i9(4,10,8,0.52,null)
D.bNA=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCc=new A.aT(D.bNA,null,null,null,null,null,null,null,null,null,null,null,null,B.D,!1,null,null,null,B.m,null)
D.bFd=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNn=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bYB=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZn=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZu=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c3Y=new C.aE1(null)})();(function staticFields(){$.dhV=20
$.aq0=null
$.bdl=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dZD","DW",()=>A.Rd(0))
w($,"dZE","LR",()=>A.Rd(null))})()};
(a=>{a["DBqASXEcOixLRIx57E/2xkEZ0SY="]=a.current})($__dart_deferred_initializers__);