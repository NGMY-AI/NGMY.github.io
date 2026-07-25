((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eIw(d,e){A.a0(d,!1).cq(A.eA(new C.dHU(e),!0,null,x.H))},
a11(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a11=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.R7()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bd(n,B.aS,B.aH),t)
w=3
return A.b(A.d3(B.J,new C.dHT(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a11)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.emH(r)
if(q==null){d.G(x.q).f.P(D.d_O)
w=1
break}w=4
return A.b(A.bJ(B.hU,null,x.H),$async$a11)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dYN=n
p=C.emB(n)
n=$.I9()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dM2(q)
d.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a11,v)},
dYQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aS(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aS(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LG(d){return C.emK(d)},
emK(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LG=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$LG)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cL(r)?10:11
break
case 10:k=J.ez(r,x.f)
k=A.dd(k,new C.bwb(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bwc(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dYS(q)
w=12
return A.b(C.LF(a3,p),$async$LG)
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
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dYQ(A.S(n,x.N,x.z))
l=C.dYS(A.a([m],x.e))
w=21
return A.b(C.LF(a3,l),$async$LG)
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
case 18:case 14:q=C.emI()
w=22
return A.b(C.LF(a3,q),$async$LG)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LG,v)},
dYS(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bw3(),w).es(0),u=new A.H(d,new C.bw4(),w).es(0),t=new A.H(d,new C.bw5(),w).es(0),s=new A.H(d,new C.bw6(),w).es(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dM3(null,q,u,t,v,s));++q}return r},
aCJ(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LG(d),$async$aCJ)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d5(t,new C.bw7(),s).es(0)
p=r.d5(t,new C.bw8(),s).es(0)
o=r.d5(t,new C.bw9(),s).es(0)
n=r.d5(t,new C.bwa(),s).es(0)
m=C.dM3(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LF(d,t),$async$aCJ)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCJ,v)},
LF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LF)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bw2(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LF)
case 3:return A.h(null,v)}})
return A.i($async$LF,v)},
emI(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cN(20,x.k)
for(w=0;w<20;++w)q[w]=C.dM3(w,w,t,s,u,r)
return q},
dM3(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lp(),h=d==null,g=D.abC[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abC[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bu(256)
n=new A.H(p,new C.bw1(),A.X(p).j("H<1,p>")).fT(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bu(10)
t=B.f.fT(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b8(B.m.ha(i.bu(256),16),2,"0")
s=B.f.ba(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a2(e,20)
k=D.c8J[w]
j=D.bZO[w]
return new C.oY("vd_"+1000*Date.now()+"_"+e+"_"+i.bu(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.emJ(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a7().a3())},
emJ(d,e){var w,v=J.cN(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bu(256),16),2,"0")
return B.f.fT(v)},
dHU:function dHU(d){this.a=d},
dHT:function dHT(d,e){this.a=d
this.b=e},
dHP:function dHP(d){this.a=d},
dHQ:function dHQ(d){this.a=d},
dHR:function dHR(d){this.a=d},
dHS:function dHS(d,e){this.a=d
this.b=e},
Pd:function Pd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oY:function oY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bwb:function bwb(){},
bwc:function bwc(){},
bw3:function bw3(){},
bw4:function bw4(){},
bw5:function bw5(){},
bw6:function bw6(){},
bw7:function bw7(){},
bw8:function bw8(){},
bw9:function bw9(){},
bwa:function bwa(){},
bw2:function bw2(){},
bw1:function bw1(){},
LE:function LE(d,e){this.c=d
this.a=e},
ajT:function ajT(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d2x:function d2x(){},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2y:function d2y(d){this.a=d},
d2D:function d2D(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2E:function d2E(d,e){this.a=d
this.b=e},
d2B:function d2B(d,e,f){this.a=d
this.b=e
this.c=f},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2F:function d2F(d){this.a=d},
YZ:function YZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQi:function aQi(d,e){this.c=d
this.a=e},
LD:function LD(d,e){this.c=d
this.a=e},
aRx:function aRx(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d2r:function d2r(d){this.a=d},
d2s:function d2s(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2n:function d2n(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2m:function d2m(d,e){this.a=d
this.b=e},
d2p:function d2p(d){this.a=d},
d2l:function d2l(d){this.a=d},
aYL:function aYL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aYM:function aYM(d,e,f){this.c=d
this.d=e
this.a=f},
aRD:function aRD(d,e){this.c=d
this.a=e},
aYK:function aYK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
djo:function djo(d){this.a=d},
djp:function djp(d){this.a=d},
aSY:function aSY(d){this.a=d},
aMj:function aMj(d,e){this.c=d
this.a=e},
emH(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.emG(v)
if(u!=null)return new C.rj(w,C.dM1(u,!1),D.ajo,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.emF(v)
if(t!=null)return new C.rj(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajp,"TikTok",q)
s=C.emE(w,v)
if(s!=null)return s
r=C.emD(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rj(w,w,D.cGQ,"Video",q)
return q},
emE(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/reel/"+w+u,D.Re,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/p/"+w+u,D.Re,t,null)}return null},
emD(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rj(d,"https://www.facebook.com/plugins/video.php?href="+A.fT(2,d,B.by,!1)+"&show_text=false&width=734",D.ajq,"Facebook",null)},
emG(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
emF(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LH:function LH(d,e){this.a=d
this.b=e},
rj:function rj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9q:function a9q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRy:function aRy(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aT2:function aT2(d,e){this.c=d
this.a=e},
d6S:function d6S(d){this.a=d},
d6T:function d6T(d){this.a=d},
GT:function GT(d,e){this.c=d
this.a=e},
aps:function aps(){},
dYR(d,e,f,g,h,i){return new C.a9r(i,f,h,e,g,d)},
eH1(d){var w=window
w.toString
A.h6(w,"message",new C.dDd(d),!1,x._)},
a9r:function a9r(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajU:function ajU(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d2G:function d2G(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2K:function d2K(d){this.a=d},
d2O:function d2O(d){this.a=d},
d2J:function d2J(d){this.a=d},
d2I:function d2I(d){this.a=d},
d2H:function d2H(d){this.a=d},
dDd:function dDd(d){this.a=d},
emz(){var w,v,u
try{v=A.rE()
w=v.gvh(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dM1(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bw_(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dYM(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
emA(d,e,f){var w,v,u=C.bw_(d)
if(u!=null){if(f){w=C.emz()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dYM(C.dM1(u,e))}return C.dYM(d)},
emB(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
emC(d){var w
if($.R7().a==null)return!1
w=$.I9().a
return d>=w&&d<w+4},
dYP(){var w=$.aCI
if(w!=null)w.aa(0)
$.aCI=null
$.I9().sv(0,0)},
dYO(){var w,v,u,t=$.R7()
if(t.a==null)return
w=$.aCI
if(w!=null)w.aa(0)
v=$.dYN
if(v<=4){t=t.a
t.toString
C.dM2(t)
return}w=$.I9()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dM2(t)},
dM2(d){var w=$.aCI
if(w!=null)w.aa(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aCI=A.dv(A.d6(0,0,0,0,0,w),C.eHh())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pd.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.V(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cs,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hm,w,w,w)}}
C.oY.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LE.prototype={
U(){return new C.ajT(A.a([],x.e))},
gej(){return this.c}}
C.ajT.prototype={
a_(){var w=this
w.a4()
$.I9().aA(0,w.gaC2())
C.eH1(w.gbvN())
w.a0R()},
bve(){if(this.c!=null)this.n(new C.d2x())},
bvO(){C.dYO()},
p(){$.I9().Z(0,this.gaC2())
C.dYP()
$.R7().sv(0,null)
this.a5()},
a0R(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LG(t.a.c),$async$a0R)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2w(t,s))
$.bw0=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
Xn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d2u(t))
w=3
return A.b(C.aCJ(t.a.c),$async$Xn)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2v(t,s))
$.bw0=J.a3(t.d)
t.c.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
bxT(d){var w=this.c
w.toString
A.a0(w,!1).cq(A.eA(new C.d2y(d),!1,null,x.H))},
byz(){var w=this.c
w.toString
return C.a11(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.ib:B.bE,s=A.bB(!0,A.v(A.a([new A.C(D.a_V,new A.jq(new C.d2D(w),v),v),A.E(w.e?B.n1:new A.lM($.R7(),new C.d2E(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.awb(B.a6,B.Js,B.kJ,D.dqt,w.e?v:new C.d2F(w)),v)}}
C.YZ.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dG,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9q(n,!0,!C.emC(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.q(u,A.v(A.a([A.V(B.kG,B.oz,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.AZ,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aH(!1,t,!0,A.v(A.a([A.E(A.q(u,A.bQ(p,A.f0(A.v(A.a([new C.aQi(o,u),A.E(n,1),A.q(u,A.F(A.a([A.V(B.xU,B.a6.k(0.85),u,u,9),B.apW,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,u,D.aMb,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4D,B.o),u,u,u,u,B.fb,u,u,u),1),B.aK,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQi.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.ux,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,w,B.a_K,w,w,w)}}
C.LD.prototype={
U(){return new C.aRx()}}
C.aRx.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.ib:B.bE,t=A.aO(w,w,w,w,B.a3B,w,w,w,new C.d2r(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bB(!0,A.v(A.a([new A.C(D.a_V,A.F(A.a([t,A.E(new A.Ls(A.F(A.a([A.E(new A.C(B.jZ,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aH(!1,w,!0,new A.C(B.br,A.V(B.hH,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2s(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lM($.R7(),new C.d2t(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYL.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eB,28),new A.a5(0,B.G,B.A.k(0.45),B.d8,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dYR(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaSw(),v+"_full")
w=v}else w=new C.aRD(t.r,s)}else w=new C.aMj(m,s)
else w=D.dym
return A.q(s,A.bQ(n,A.f0(A.v(A.a([new C.aYM(m,l,s),A.E(w,1),new C.aYK(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4D,B.o),s,r*2.05,s,s,B.bI,s,s,r)}}
C.aYM.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glO()
r=r.gFo()
w=new A.dM(q,r)
v=w.gLc()===0?12:w.gLc()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hC:B.jT)===B.hC?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o5,s,s,s),B.b7,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bP,D.aY5,B.df,D.aXd,B.df,D.aYa],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aK,A.F(A.a([A.V(B.xS,B.a6.k(0.9),s,s,12),B.df,A.E(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.v(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aw,s,s,s,s,s,s,D.aNh,s,s,s)}}
C.aRD.prototype={
B(d){var w=null
return A.q(w,A.aC(A.v(A.a([A.V(B.CZ,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eF(D.b0Z,D.dcA,this.c,A.dr(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.AZ,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYK.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBP(B.Dn,"YouTube",s===0,r,new C.djo(u))
s=u.aBP(B.jr,"Device",s===1,r,new C.djp(u))
w=r?"Power off":"Power on"
v=r?D.a2A:D.aVe
return A.q(t,A.F(A.a([q,B.ai,s,B.b7,A.aO(t,t,t,t,A.V(v,r?B.bL:B.f6,t,t,t),t,t,t,u.f,t,t,t,t,w,B.d2)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,t,D.aMN,t,t,t)},
aBP(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b5
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.P,!0,u,A.aH(!1,A.m(10),!0,new A.C(B.mg,A.v(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aSY.prototype={
B(d){return D.aAs}}
C.aMj.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iA,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ue("Serial",u.c),q=w.ue("Model",u.d),p=w.ue("Device ID",u.e),o=w.ue("IMEI",u.r),n=w.ue("MAC",u.f),m=w.ue("OS",u.w+" "+u.x),l=w.ue("Location",u.y+", "+u.z),k=w.ue("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ue("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aK,s,B.ae,r,q,p,o,n,m,l,k,j,w.ue("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.br,v,v,B.ak,!1)},
ue(d,e){var w=null
return new A.C(B.dj,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d3b,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LH.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rj.prototype={
gaSw(){var w=this.c
return w===D.ajo||w===D.ajp||w===D.Re||w===D.ajq}}
C.a9q.prototype={
U(){return new C.aRy(null,null)}}
C.aRy.prototype={
a_(){this.a4()
var w=A.be(null,B.tE,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b20()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bS,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cD(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kG,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oz
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aT2(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.b8,B.t,s,t)}}
C.aT2.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kE(u,B.I,new C.d6S(this),B.cb,B.bX,!0,w,w,new C.d6T(this),w)
return new C.GT(v,w)}}
C.GT.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tt,B.WC],x.O),B.kG)
break
case 1:w=new A.aI(A.a([B.AZ,D.aGr],x.O),B.mq)
break
case 2:w=new A.aI(A.a([D.aIe,D.aFL],x.O),B.D5)
break
case 3:w=new A.aI(A.a([B.U,B.dO],x.O),B.Dc)
break
case 4:w=new A.aI(A.a([B.aw,B.aP],x.O),B.qM)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aps.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcP())
w.aD$=null
w.a5()},
be(){this.bq()
this.bp()
this.cQ()}}
C.a9r.prototype={
U(){return new C.ajU()}}
C.ajU.prototype={
ab2(d,e){var w,v=C.bw_(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dM1(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.emA(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bPy(){var w,v=this
if(v.w)return
v.n(new C.d2G(v))
w=v.e
if(w!=null)v.ab2(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.D9()
$.pz().tA(w,new C.d2P(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d2I(v))
w=v.e
w.toString
v.ab2(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a2W,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f0(A.aC(new A.C(new A.O(12,12,12,12),A.v(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SS(n,B.rg,w)],v)
if(o.f)w.push(A.f0(A.aC(new A.aa(28,28,D.aBS,n),n,n,n),B.cZ,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b5,B.r,1)
q=A.V(B.Dz,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dP(0,A.az(!1,B.P,!0,n,A.aH(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LK,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbPx(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bw_(o.a.d)
if(v!=null)w.push(A.av(8,A.jt(D.aZJ,D.dlc,new C.d2H(o),A.hM(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.b8,B.t,w,n)}}
var z=a.updateTypes(["p(oY)","~()","LE(N)","oY(a_<@,@>)","Z(oY)","a_<p,@>(oY)","aD<~>()","LD(N)","lM<L>(N,rj?,r?)","YZ(N,L)","vc(N,rj?,r?)","GT(N,ar,dQ?)"])
C.dHU.prototype={
$1(d){return new C.LE(this.a,null)},
$S:z+2}
C.dHT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.U],j):A.a([B.c,B.ax],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eB,32)],x.V),g=A.J(m?B.cd:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.aA.k(m?0.18:0.08)],j)
e=A.q(n,D.aWW,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eC,w,A.aO(n,n,n,n,A.V(B.cN,m?B.at:B.cZ,n,n,n),n,n,n,new C.dHP(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LS,n,n,n)
e=A.eb(B.cR,A.a([new C.Pd("YouTube",B.NY,m,n),new C.Pd("TikTok",B.mq,m,n),new C.Pd("Instagram",B.D5,m,n),new C.Pd("Facebook",B.Dc,m,n)],v),B.cx,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.hS,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bE
r=A.V(B.fT,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aM
u=A.v(A.a([e,B.aR,A.aN(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.V),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vk),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.am,n,B.i,B.k,0,B.p)
e=A.jt(D.aX_,D.dpu,new C.dHQ(d),A.hM(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.C(new A.O(12,0,12,12+l.f.d),A.cv(A.bQ(f,A.v(A.a([j,new A.C(B.a_p,u,n),new A.C(D.aOM,A.F(A.a([e,B.b7,A.bZ(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dHR(d),n,n),B.ai,A.dE(D.b0E,D.dqk,new C.dHS(d,w),A.bn(B.a6,n,n,n,B.c,n,B.LK,n,new A.bq(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.am,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a7(B.av,B.aD,B.E,i,n,n),B.o),B.bq),n)},
$S:75}
C.dHP.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dHQ.prototype={
$0(){C.dYP()
$.R7().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dHR.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dHS.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bwb.prototype={
$1(d){return C.dYQ(A.S(d,x.N,x.z))},
$S:z+3}
C.bwc.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bw3.prototype={
$1(d){return d.c},
$S:z+0}
C.bw4.prototype={
$1(d){return d.r},
$S:z+0}
C.bw5.prototype={
$1(d){return d.f},
$S:z+0}
C.bw6.prototype={
$1(d){return d.at},
$S:z+0}
C.bw7.prototype={
$1(d){return d.c},
$S:z+0}
C.bw8.prototype={
$1(d){return d.r},
$S:z+0}
C.bw9.prototype={
$1(d){return d.f},
$S:z+0}
C.bwa.prototype={
$1(d){return d.at},
$S:z+0}
C.bw2.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bw1.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:86}
C.d2x.prototype={
$0(){},
$S:0}
C.d2w.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d2u.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d2v.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d2y.prototype={
$1(d){return new C.LD(this.a,null)},
$S:z+7}
C.d2D.prototype={
$4(d,e,f,g){var w=null,v=A.aO(w,w,w,w,B.qP,w,w,w,new C.d2C(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h1(A.F(A.a([new A.oW(D.ym,e,g,36,B.xS,w),B.aN,A.E(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fR(B.f.gI(D.ym).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aH(!1,w,!0,new A.C(B.bI,A.V(B.hH,A.ao(B.f.gI(D.ym),B.f.ga6(D.ym),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbyy(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.ym,w,g,B.eQ,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:343}
C.d2C.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d2E.prototype={
$3(d,e,f){return new A.lM($.I9(),new C.d2B(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d2B.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EG(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.V(B.kG,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.I9().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dw,B.fa,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.hO(1.7777777777777777,C.dYR(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaSw(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uS(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.la(new A.C(B.LG,A.v(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.ok(D.aMm,A.aGN(new A.oi(new C.d2A(i,j),J.a3(i.d),!1,!0,!0,A.uE(),k),D.cXl),k)],w))},
$S:1851}
C.d2A.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.YZ(v,e,J.a3(w.d),new C.d2z(w,v),this.b,null)},
$S:z+9}
C.d2z.prototype={
$0(){return this.a.bxT(this.b)},
$S:0}
C.d2F.prototype={
$0(){this.a.Xn()
return null},
$S:0}
C.d2r.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d2s.prototype={
$0(){C.a11(this.a,$.bw0)
return null},
$S:0}
C.d2t.prototype={
$3(d,e,f){return A.eK(new C.d2q(this.a,e))},
$S:z+10}
C.d2q.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aR,new C.aYL(u,s.a.c,s.e,s.d,new C.d2n(s),new C.d2o(s),new C.d2p(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oJ,v,v,B.ak),v,v,v)},
$S:1852}
C.d2n.prototype={
$0(){var w=this.a.c
w.toString
C.a11(w,$.bw0)
return null},
$S:0}
C.d2o.prototype={
$1(d){var w=this.a
return w.n(new C.d2m(w,d))},
$S:33}
C.d2m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d2p.prototype={
$0(){var w=this.a
return w.n(new C.d2l(w))},
$S:0}
C.d2l.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.djo.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.djp.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d6S.prototype={
$3(d,e,f){return new C.GT(this.a.c,null)},
$S:z+11}
C.d6T.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.b8,B.t,A.a([new C.GT(this.a.c,null),D.aAO],x.p),null)},
$C:"$3",
$R:3,
$S:564}
C.d2G.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2P.prototype={
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
w.ab2(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.d2M(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.d2N(w),!1,u)
A.bJ(B.jX,new C.d2O(w),x.H)
w=w.e
w.toString
return w},
$S:551}
C.d2M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d2L(w))},
$S:30}
C.d2L.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d2N.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d2K(w))},
$S:30}
C.d2K.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d2O.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d2J(w))},
$S:12}
C.d2J.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d2I.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d2H.prototype={
$0(){var w,v=C.bw_(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mU.Lx(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dDd.prototype={
$1(d){var w,v,u,t,s=new A.w3([],[]).x8(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1853};(function aliases(){var w=C.aps.prototype
w.b20=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajT.prototype,"gaC2","bve",1)
w(u,"gbvN","bvO",1)
w(u,"gbyy","byz",6)
w(C.ajU.prototype,"gbPx","bPy",1)
v(C,"eHh","dYO",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zL,[C.dHU,C.dHT,C.bwb,C.bwc,C.bw3,C.bw4,C.bw5,C.bw6,C.bw7,C.bw8,C.bw9,C.bwa,C.bw2,C.bw1,C.d2y,C.d2D,C.d2E,C.d2B,C.d2t,C.d2o,C.d6S,C.d6T,C.d2P,C.d2M,C.d2N,C.dDd])
v(A.a2q,[C.dHP,C.dHQ,C.dHR,C.dHS,C.d2x,C.d2w,C.d2u,C.d2v,C.d2C,C.d2z,C.d2F,C.d2r,C.d2s,C.d2n,C.d2m,C.d2p,C.d2l,C.djo,C.djp,C.d2G,C.d2L,C.d2K,C.d2O,C.d2J,C.d2I,C.d2H])
v(A.ap,[C.Pd,C.YZ,C.aQi,C.aYL,C.aYM,C.aRD,C.aYK,C.aSY,C.aMj,C.aT2,C.GT])
v(A.ar,[C.oY,C.rj])
v(A.ad,[C.LE,C.LD,C.a9q,C.a9r])
v(A.ae,[C.ajT,C.aRx,C.aps,C.ajU])
v(A.a2r,[C.d2A,C.d2q])
u(C.LH,A.aNe)
u(C.aRy,C.aps)
w(C.aps,A.dC)})()
A.e1f(b.typeUniverse,JSON.parse('{"LE":{"ad":[],"r":[]},"YZ":{"ap":[],"r":[]},"LD":{"ad":[],"r":[]},"Pd":{"ap":[],"r":[]},"ajT":{"ae":["LE"]},"aQi":{"ap":[],"r":[]},"aRx":{"ae":["LD"]},"aYL":{"ap":[],"r":[]},"aYM":{"ap":[],"r":[]},"aRD":{"ap":[],"r":[]},"aYK":{"ap":[],"r":[]},"aSY":{"ap":[],"r":[]},"aMj":{"ap":[],"r":[]},"a9q":{"ad":[],"r":[]},"GT":{"ap":[],"r":[]},"aRy":{"ae":["a9q"]},"aT2":{"ap":[],"r":[]},"a9r":{"ad":[],"r":[]},"ajU":{"ae":["a9r"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<oY>"),S:w("a9<fR>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<oY>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oS"),_:w("ED"),k:w("oY"),N:w("p"),Y:w("bi<a4>"),W:w("d2<p>"),J:w("lM<L>"),j:w("lM<rj?>"),E:w("ud<d_>"),q:w("ZW"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2A=new A.Q(983224,"MaterialIcons",!1)
D.aZQ=new A.ab(D.a2A,48,B.b5,null,null,null)
D.dbt=new A.z("Powered off",null,B.aqX,null,null,null,null,null,null,null,null,null)
D.bWJ=w([D.aZQ,B.N,D.dbt],x.p)
D.aJD=new A.eJ(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bWJ,null)
D.aAs=new A.cU(B.I,null,null,D.aJD,null)
D.cX0=new A.aa(18,18,B.Wk,null)
D.aAO=new A.cU(B.I,null,null,D.cX0,null)
D.aBS=new A.fq(2,null,null,null,null,B.a9,null,null,null,null)
D.aFL=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGr=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIe=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMb=new A.O(0,3,0,3)
D.aMm=new A.O(10,0,10,88)
D.aMN=new A.O(12,6,12,10)
D.aNh=new A.O(14,8,14,6)
D.aOM=new A.O(20,8,20,20)
D.a_V=new A.O(8,6,15,8)
D.aVe=new A.Q(983222,"MaterialIcons",!1)
D.aWW=new A.ab(B.kG,26,B.a6,null,null,null)
D.aX_=new A.ab(B.a1E,18,null,null,null,null)
D.aXd=new A.ab(B.ux,14,B.a9,null,null,null)
D.aVx=new A.Q(983420,"MaterialIcons",!1)
D.aY5=new A.ab(D.aVx,14,B.a9,null,null,null)
D.aTC=new A.Q(62895,"MaterialIcons",!1)
D.aYa=new A.ab(D.aTC,14,B.a9,null,null,null)
D.aZJ=new A.ab(B.uo,16,B.a9,null,null,null)
D.b0E=new A.ab(B.io,20,null,null,null,null)
D.b0Z=new A.ab(B.hH,16,null,null,null,null)
D.c_F=w([B.aP,B.U],x.O)
D.a4D=new A.a7(B.av,B.aD,B.E,D.c_F,null,null)
D.cQ9=new A.aI("NGMY OS","14.2.1")
D.cOK=new A.aI("VirtualDroid","13.8.4")
D.cOJ=new A.aI("NGMY OS","15.0.0")
D.cPD=new A.aI("VirtualDroid","14.1.2")
D.cOF=new A.aI("NGMY Tab OS","12.9.7")
D.cOD=new A.aI("NGMY OS","13.5.3")
D.cOs=new A.aI("VirtualDroid","15.2.0")
D.cP9=new A.aI("NGMY OS","14.8.1")
D.cPI=new A.aI("NGMY Tab OS","13.2.4")
D.cQm=new A.aI("VirtualDroid","12.6.9")
D.cOm=new A.aI("NGMY OS","16.0.1")
D.cOc=new A.aI("VirtualDroid","14.9.0")
D.cQ_=new A.aI("NGMY Tab OS","14.0.3")
D.cOV=new A.aI("NGMY OS","13.1.8")
D.cOk=new A.aI("VirtualDroid","13.4.5")
D.cOC=new A.aI("NGMY OS","15.3.2")
D.cPJ=new A.aI("NGMY Tab OS","12.4.1")
D.cQ2=new A.aI("VirtualDroid","16.1.0")
D.cP8=new A.aI("NGMY OS","14.4.6")
D.cQa=new A.aI("VirtualDroid","15.0.8")
D.bZO=w([D.cQ9,D.cOK,D.cOJ,D.cPD,D.cOF,D.cOD,D.cOs,D.cP9,D.cPI,D.cQm,D.cOm,D.cOc,D.cQ_,D.cOV,D.cOk,D.cOC,D.cPJ,D.cQ2,D.cP8,D.cQa],A.b4("a9<+(p,p)>"))
D.ym=w([B.a6,B.fG],x.O)
D.cSx=new A.f3(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cS5=new A.f3(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cS0=new A.f3(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cS9=new A.f3(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cRX=new A.f3(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cSb=new A.f3(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cSz=new A.f3(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cRY=new A.f3(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cS4=new A.f3(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cSd=new A.f3(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cRW=new A.f3(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cSr=new A.f3(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cSo=new A.f3(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cS3=new A.f3(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cSl=new A.f3(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cSk=new A.f3(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cRV=new A.f3(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cS8=new A.f3(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cSi=new A.f3(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cSn=new A.f3(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abC=w([D.cSx,D.cS5,D.cS0,D.cS9,D.cRX,D.cSb,D.cSz,D.cRY,D.cS4,D.cSd,D.cRW,D.cSr,D.cSo,D.cS3,D.cSl,D.cSk,D.cRV,D.cS8,D.cSi,D.cSn],A.b4("a9<+(p,p,a4,a4,p)>"))
D.c8J=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajo=new C.LH(0,"youtube")
D.ajp=new C.LH(1,"tiktok")
D.Re=new C.LH(2,"instagram")
D.ajq=new C.LH(3,"facebook")
D.cGQ=new C.LH(4,"other")
D.cXl=new A.hr(4,10,8,0.52,null)
D.dcN=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d_O=new A.aW(D.dcN,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d3b=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dcA=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dlc=new A.z("Open in YouTube",null,B.jF,null,null,null,null,null,null,null,null,null)
D.dpu=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dqk=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dqt=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dym=new C.aSY(null)})();(function staticFields(){$.dYN=20
$.aCI=null
$.bw0=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eMh","I9",()=>A.adT(0))
w($,"eMi","R7",()=>A.adT(null))})()};
(a=>{a["Ar0u+5nmJE+mw2U6C0gbQ4/704o="]=a.current})($__dart_deferred_initializers__);