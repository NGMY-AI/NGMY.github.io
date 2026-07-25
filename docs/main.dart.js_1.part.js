((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eIn(d,e){A.a0(d,!1).cq(A.eA(new C.dHL(e),!0,null,x.H))},
a11(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a11=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.R7()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.bd(n,B.aS,B.aH),t)
w=3
return A.b(A.d3(B.J,new C.dHK(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a11)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.emy(r)
if(q==null){d.G(x.q).f.P(D.d_Q)
w=1
break}w=4
return A.b(A.bJ(B.hT,null,x.H),$async$a11)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dYE=n
p=C.ems(n)
n=$.I9()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dLU(q)
d.G(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a11,v)},
dYH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
LG(d){return C.emB(d)},
emB(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
k=A.dd(k,new C.bw8(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bw9(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dYJ(q)
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
case 19:m=C.dYH(A.S(n,x.N,x.z))
l=C.dYJ(A.a([m],x.e))
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
case 18:case 14:q=C.emz()
w=22
return A.b(C.LF(a3,q),$async$LG)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LG,v)},
dYJ(d){var w=A.X(d).j("H<1,p>"),v=new A.H(d,new C.bw0(),w).es(0),u=new A.H(d,new C.bw1(),w).es(0),t=new A.H(d,new C.bw2(),w).es(0),s=new A.H(d,new C.bw3(),w).es(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dLV(null,q,u,t,v,s));++q}return r},
aCH(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LG(d),$async$aCH)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d5(t,new C.bw4(),s).es(0)
p=r.d5(t,new C.bw5(),s).es(0)
o=r.d5(t,new C.bw6(),s).es(0)
n=r.d5(t,new C.bw7(),s).es(0)
m=C.dLV(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LF(d,t),$async$aCH)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCH,v)},
LF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LF)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bw_(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LF)
case 3:return A.h(null,v)}})
return A.i($async$LF,v)},
emz(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cN(20,x.k)
for(w=0;w<20;++w)q[w]=C.dLV(w,w,t,s,u,r)
return q},
dLV(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lp(),h=d==null,g=D.abD[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abD[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bu(256)
n=new A.H(p,new C.bvZ(),A.X(p).j("H<1,p>")).fS(0)
u="VND-"+B.b.al(n,0,4)+"-"+B.b.al(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bu(10)
t=B.f.fS(p)
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
k=D.c8L[w]
j=D.bZQ[w]
return new C.oY("vd_"+1000*Date.now()+"_"+e+"_"+i.bu(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.emA(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a6().a3())},
emA(d,e){var w,v=J.cN(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bu(256),16),2,"0")
return B.f.fS(v)},
dHL:function dHL(d){this.a=d},
dHK:function dHK(d,e){this.a=d
this.b=e},
dHG:function dHG(d){this.a=d},
dHH:function dHH(d){this.a=d},
dHI:function dHI(d){this.a=d},
dHJ:function dHJ(d,e){this.a=d
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
bw8:function bw8(){},
bw9:function bw9(){},
bw0:function bw0(){},
bw1:function bw1(){},
bw2:function bw2(){},
bw3:function bw3(){},
bw4:function bw4(){},
bw5:function bw5(){},
bw6:function bw6(){},
bw7:function bw7(){},
bw_:function bw_(){},
bvZ:function bvZ(){},
LE:function LE(d,e){this.c=d
this.a=e},
ajS:function ajS(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d2o:function d2o(){},
d2n:function d2n(d,e){this.a=d
this.b=e},
d2l:function d2l(d){this.a=d},
d2m:function d2m(d,e){this.a=d
this.b=e},
d2p:function d2p(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2s:function d2s(d,e,f){this.a=d
this.b=e
this.c=f},
d2r:function d2r(d,e){this.a=d
this.b=e},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2w:function d2w(d){this.a=d},
YZ:function YZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQf:function aQf(d,e){this.c=d
this.a=e},
LD:function LD(d,e){this.c=d
this.a=e},
aRu:function aRu(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d2i:function d2i(d){this.a=d},
d2j:function d2j(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2h:function d2h(d,e){this.a=d
this.b=e},
d2e:function d2e(d){this.a=d},
d2f:function d2f(d){this.a=d},
d2d:function d2d(d,e){this.a=d
this.b=e},
d2g:function d2g(d){this.a=d},
d2c:function d2c(d){this.a=d},
aYI:function aYI(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aYJ:function aYJ(d,e,f){this.c=d
this.d=e
this.a=f},
aRA:function aRA(d,e){this.c=d
this.a=e},
aYH:function aYH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
djf:function djf(d){this.a=d},
djg:function djg(d){this.a=d},
aSV:function aSV(d){this.a=d},
aMg:function aMg(d,e){this.c=d
this.a=e},
emy(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.emx(v)
if(u!=null)return new C.rj(w,C.dLT(u,!1),D.ajp,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.emw(v)
if(t!=null)return new C.rj(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajq,"TikTok",q)
s=C.emv(w,v)
if(s!=null)return s
r=C.emu(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rj(w,w,D.cGT,"Video",q)
return q},
emv(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/reel/"+w+u,D.Rd,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rj(d,"https://www.instagram.com/p/"+w+u,D.Rd,t,null)}return null},
emu(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rj(d,"https://www.facebook.com/plugins/video.php?href="+A.fT(2,d,B.by,!1)+"&show_text=false&width=734",D.ajr,"Facebook",null)},
emx(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
emw(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
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
aRv:function aRv(d,e){var _=this
_.d=$
_.cl$=d
_.aD$=e
_.c=_.a=null},
aT_:function aT_(d,e){this.c=d
this.a=e},
d6J:function d6J(d){this.a=d},
d6K:function d6K(d){this.a=d},
GT:function GT(d,e){this.c=d
this.a=e},
apq:function apq(){},
dYI(d,e,f,g,h,i){return new C.a9r(i,f,h,e,g,d)},
eGT(d){var w=window
w.toString
A.h6(w,"message",new C.dD4(d),!1,x._)},
a9r:function a9r(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ajT:function ajT(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d2x:function d2x(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2D:function d2D(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2F:function d2F(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2z:function d2z(d){this.a=d},
d2y:function d2y(d){this.a=d},
dD4:function dD4(d){this.a=d},
emq(){var w,v,u
try{v=A.rE()
w=v.gvh(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dLT(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bvX(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dYD(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
emr(d,e,f){var w,v,u=C.bvX(d)
if(u!=null){if(f){w=C.emq()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dYD(C.dLT(u,e))}return C.dYD(d)},
ems(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
emt(d){var w
if($.R7().a==null)return!1
w=$.I9().a
return d>=w&&d<w+4},
dYG(){var w=$.aCG
if(w!=null)w.aa(0)
$.aCG=null
$.I9().sv(0,0)},
dYF(){var w,v,u,t=$.R7()
if(t.a==null)return
w=$.aCG
if(w!=null)w.aa(0)
v=$.dYE
if(v<=4){t=t.a
t.toString
C.dLU(t)
return}w=$.I9()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dLU(t)},
dLU(d){var w=$.aCG
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
default:w=null}$.aCG=A.du(A.d6(0,0,0,0,0,w),C.eH8())}},D
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
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LE.prototype={
U(){return new C.ajS(A.a([],x.e))},
gej(){return this.c}}
C.ajS.prototype={
a_(){var w=this
w.a4()
$.I9().aA(0,w.gaC1())
C.eGT(w.gbvL())
w.a0Q()},
bvc(){if(this.c!=null)this.n(new C.d2o())},
bvM(){C.dYF()},
p(){$.I9().Z(0,this.gaC1())
C.dYG()
$.R7().sv(0,null)
this.a5()},
a0Q(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LG(t.a.c),$async$a0Q)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2n(t,s))
$.bvY=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a0Q,v)},
Xm(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d2l(t))
w=3
return A.b(C.aCH(t.a.c),$async$Xm)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2m(t,s))
$.bvY=J.a3(t.d)
t.c.G(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xm,v)},
bxR(d){var w=this.c
w.toString
A.a0(w,!1).cq(A.eA(new C.d2p(d),!1,null,x.H))},
byx(){var w=this.c
w.toString
return C.a11(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.ib:B.bE,s=A.bB(!0,A.u(A.a([new A.C(D.a_V,new A.jq(new C.d2u(w),v),v),A.E(w.e?B.n_:new A.lM($.R7(),new C.d2v(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.aw9(B.a6,B.Jq,B.kI,D.dqx,w.e?v:new C.d2w(w)),v)}}
C.YZ.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dG,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9q(n,!0,!C.emt(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.V(B.kF,B.oy,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b0,B.k,0,B.p),B.j,B.AY,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.O,!0,u,A.aG(!1,t,!0,A.u(A.a([A.E(A.q(u,A.bQ(p,A.f0(A.u(A.a([new C.aQf(o,u),A.E(n,1),A.q(u,A.F(A.a([A.V(B.xT,B.a6.k(0.85),u,u,9),B.apX,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b0,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,u,D.aMc,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4D,B.o),u,u,u,u,B.fa,u,u,u),1),B.aM,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQf.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga7(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.uw,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,w,B.a_K,w,w,w)}}
C.LD.prototype={
U(){return new C.aRu()}}
C.aRu.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.ib:B.bE,t=A.aN(w,w,w,w,B.a3B,w,w,w,new C.d2i(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bB(!0,A.u(A.a([new A.C(D.a_V,A.F(A.a([t,A.E(new A.Ls(A.F(A.a([A.E(new A.C(B.jZ,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.V,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.O,!0,w,A.aG(!1,w,!0,new A.C(B.br,A.V(B.hH,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2j(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lM($.R7(),new C.d2k(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYI.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eC,28),new A.a5(0,B.G,B.A.k(0.45),B.d7,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dYI(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaSv(),v+"_full")
w=v}else w=new C.aRA(t.r,s)}else w=new C.aMg(m,s)
else w=D.dyq
return A.q(s,A.bQ(n,A.f0(A.u(A.a([new C.aYJ(m,l,s),A.E(w,1),new C.aYH(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4D,B.o),s,r*2.05,s,s,B.bI,s,s,r)}}
C.aYJ.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glO()
r=r.gFn()
w=new A.dM(q,r)
v=w.gLb()===0?12:w.gLb()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hC:B.jT)===B.hC?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o4,s,s,s),B.b7,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bP,D.aY7,B.df,D.aXf,B.df,D.aYc],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aM,A.F(A.a([A.V(B.xR,B.a6.k(0.9),s,s,12),B.df,A.E(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aw,s,s,s,s,s,s,D.aNi,s,s,s)}}
C.aRA.prototype={
B(d){var w=null
return A.q(w,A.aC(A.u(A.a([A.V(B.CX,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eF(D.b11,D.dcD,this.c,A.dr(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aD(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.AY,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYH.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBO(B.Dl,"YouTube",s===0,r,new C.djf(u))
s=u.aBO(B.jr,"Device",s===1,r,new C.djg(u))
w=r?"Power off":"Power on"
v=r?D.a2A:D.aVg
return A.q(t,A.F(A.a([q,B.ai,s,B.b7,A.aN(t,t,t,t,A.V(v,r?B.bL:B.f5,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cY)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,t,D.aMO,t,t,t)},
aBO(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b5
else w=f?B.a6:B.as
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.O,!0,u,A.aG(!1,A.m(10),!0,new A.C(B.me,A.u(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aSV.prototype={
B(d){return D.aAv}}
C.aMg.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iz,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ud("Serial",u.c),q=w.ud("Model",u.d),p=w.ud("Device ID",u.e),o=w.ud("IMEI",u.r),n=w.ud("MAC",u.f),m=w.ud("OS",u.w+" "+u.x),l=w.ud("Location",u.y+", "+u.z),k=w.ud("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ud("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aM,s,B.ae,r,q,p,o,n,m,l,k,j,w.ud("Provisioned",u.length>=10?B.b.al(u,0,10):u)],x.p),v,B.br,v,v,B.ak,!1)},
ud(d,e){var w=null
return new A.C(B.dj,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d3d,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LH.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rj.prototype={
gaSv(){var w=this.c
return w===D.ajp||w===D.ajq||w===D.Rd||w===D.ajr}}
C.a9q.prototype={
U(){return new C.aRv(null,null)}}
C.aRv.prototype={
a_(){this.a4()
var w=A.bh(null,B.tD,null,1,null,this)
w.fV(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b1Z()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bV,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cD(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kF,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oy
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aT_(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.b8,B.t,s,t)}}
C.aT_.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kE(u,B.I,new C.d6J(this),B.cb,B.bX,!0,w,w,new C.d6K(this),w)
return new C.GT(v,w)}}
C.GT.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.ts,B.WB],x.O),B.kF)
break
case 1:w=new A.aI(A.a([B.AY,D.aGt],x.O),B.mo)
break
case 2:w=new A.aI(A.a([D.aIg,D.aFN],x.O),B.D3)
break
case 3:w=new A.aI(A.a([B.V,B.dO],x.O),B.Da)
break
case 4:w=new A.aI(A.a([B.aw,B.aP],x.O),B.qK)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apq.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcP())
w.aD$=null
w.a5()},
be(){this.br()
this.bp()
this.cQ()}}
C.a9r.prototype={
U(){return new C.ajT()}}
C.ajT.prototype={
ab1(d,e){var w,v=C.bvX(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dLT(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.emr(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bPw(){var w,v=this
if(v.w)return
v.n(new C.d2x(v))
w=v.e
if(w!=null)v.ab1(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.D8()
$.pz().tz(w,new C.d2G(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d2z(v))
w=v.e
w.toString
v.ab1(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a2W,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.Q,n,n)],v))
return A.f0(A.aC(new A.C(new A.O(12,12,12,12),A.u(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SS(n,B.re,w)],v)
if(o.f)w.push(A.f0(A.aC(new A.aa(28,28,D.aBV,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b5,B.r,1)
q=A.V(B.Dx,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dP(0,A.az(!1,B.O,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LJ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbPv(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bvX(o.a.d)
if(v!=null)w.push(A.av(8,A.jt(D.aZL,D.dlf,new C.d2y(o),A.hM(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.b8,B.t,w,n)}}
var z=a.updateTypes(["p(oY)","~()","LE(N)","oY(a_<@,@>)","Z(oY)","a_<p,@>(oY)","aE<~>()","LD(N)","lM<L>(N,rj?,r?)","YZ(N,L)","vc(N,rj?,r?)","GT(N,ar,dQ?)"])
C.dHL.prototype={
$1(d){return new C.LE(this.a,null)},
$S:z+2}
C.dHK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.V],j):A.a([B.c,B.ax],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eC,32)],x.V),g=A.J(m?B.cd:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.aA.k(m?0.18:0.08)],j)
e=A.q(n,D.aWY,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.u(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.ex,w,A.aN(n,n,n,n,A.V(B.cL,m?B.as:B.d_,n,n,n),n,n,n,new C.dHG(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LR,n,n,n)
e=A.ea(B.cR,A.a([new C.Pd("YouTube",B.NX,m,n),new C.Pd("TikTok",B.mo,m,n),new C.Pd("Instagram",B.D3,m,n),new C.Pd("Facebook",B.Da,m,n)],v),B.cx,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.hR,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bE
r=A.V(B.fS,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aL
u=A.u(A.a([e,B.aR,A.aO(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.U),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vi),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.am,n,B.i,B.k,0,B.p)
e=A.jt(D.aX1,D.dpy,new C.dHH(d),A.hM(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.C(new A.O(12,0,12,12+l.f.d),A.cv(A.bQ(f,A.u(A.a([j,new A.C(B.a_p,u,n),new A.C(D.aOO,A.F(A.a([e,B.b7,A.bZ(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dHI(d),n,n),B.ai,A.dD(D.b0H,D.dqo,new C.dHJ(d,w),A.bn(B.a6,n,n,n,B.c,n,B.LJ,n,new A.bp(A.m(14),B.U),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.am,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a7(B.av,B.aD,B.E,i,n,n),B.o),B.bq),n)},
$S:73}
C.dHG.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dHH.prototype={
$0(){C.dYG()
$.R7().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dHI.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dHJ.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bw8.prototype={
$1(d){return C.dYH(A.S(d,x.N,x.z))},
$S:z+3}
C.bw9.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bw0.prototype={
$1(d){return d.c},
$S:z+0}
C.bw1.prototype={
$1(d){return d.r},
$S:z+0}
C.bw2.prototype={
$1(d){return d.f},
$S:z+0}
C.bw3.prototype={
$1(d){return d.at},
$S:z+0}
C.bw4.prototype={
$1(d){return d.c},
$S:z+0}
C.bw5.prototype={
$1(d){return d.r},
$S:z+0}
C.bw6.prototype={
$1(d){return d.f},
$S:z+0}
C.bw7.prototype={
$1(d){return d.at},
$S:z+0}
C.bw_.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bvZ.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:89}
C.d2o.prototype={
$0(){},
$S:0}
C.d2n.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d2l.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d2m.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d2p.prototype={
$1(d){return new C.LD(this.a,null)},
$S:z+7}
C.d2u.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,B.qN,w,w,w,new C.d2t(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h1(A.F(A.a([new A.oW(D.yl,e,g,36,B.xR,w),B.aO,A.E(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fR(B.f.gI(D.yl).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.O,!0,w,A.aG(!1,w,!0,new A.C(B.bI,A.V(B.hH,A.ao(B.f.gI(D.yl),B.f.ga7(D.yl),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbyw(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yl,w,g,B.eQ,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:343}
C.d2t.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d2v.prototype={
$3(d,e,f){return new A.lM($.I9(),new C.d2s(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d2s.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EF(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.V(B.kF,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.I9().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.V,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dv,B.f9,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.hO(1.7777777777777777,C.dYI(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaSv(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uS(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.la(new A.C(B.LF,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.ok(D.aMn,A.aGL(new A.oi(new C.d2r(i,j),J.a3(i.d),!1,!0,!0,A.uE(),k),D.cXn),k)],w))},
$S:1851}
C.d2r.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.YZ(v,e,J.a3(w.d),new C.d2q(w,v),this.b,null)},
$S:z+9}
C.d2q.prototype={
$0(){return this.a.bxR(this.b)},
$S:0}
C.d2w.prototype={
$0(){this.a.Xm()
return null},
$S:0}
C.d2i.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d2j.prototype={
$0(){C.a11(this.a,$.bvY)
return null},
$S:0}
C.d2k.prototype={
$3(d,e,f){return A.eK(new C.d2h(this.a,e))},
$S:z+10}
C.d2h.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cw(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.Q,v,v),B.aR,new C.aYI(u,s.a.c,s.e,s.d,new C.d2e(s),new C.d2f(s),new C.d2g(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oI,v,v,B.ak),v,v,v)},
$S:1852}
C.d2e.prototype={
$0(){var w=this.a.c
w.toString
C.a11(w,$.bvY)
return null},
$S:0}
C.d2f.prototype={
$1(d){var w=this.a
return w.n(new C.d2d(w,d))},
$S:32}
C.d2d.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d2g.prototype={
$0(){var w=this.a
return w.n(new C.d2c(w))},
$S:0}
C.d2c.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.djf.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.djg.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d6J.prototype={
$3(d,e,f){return new C.GT(this.a.c,null)},
$S:z+11}
C.d6K.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.b8,B.t,A.a([new C.GT(this.a.c,null),D.aAR],x.p),null)},
$C:"$3",
$R:3,
$S:564}
C.d2x.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2G.prototype={
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
w.ab1(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.d2D(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.d2E(w),!1,u)
A.bJ(B.jX,new C.d2F(w),x.H)
w=w.e
w.toString
return w},
$S:551}
C.d2D.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d2C(w))},
$S:30}
C.d2C.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d2E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d2B(w))},
$S:30}
C.d2B.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d2F.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d2A(w))},
$S:12}
C.d2A.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d2z.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d2y.prototype={
$0(){var w,v=C.bvX(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mS.Lw(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dD4.prototype={
$1(d){var w,v,u,t,s=new A.w3([],[]).x8(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1853};(function aliases(){var w=C.apq.prototype
w.b1Z=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ajS.prototype,"gaC1","bvc",1)
w(u,"gbvL","bvM",1)
w(u,"gbyw","byx",6)
w(C.ajT.prototype,"gbPv","bPw",1)
v(C,"eH8","dYF",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zL,[C.dHL,C.dHK,C.bw8,C.bw9,C.bw0,C.bw1,C.bw2,C.bw3,C.bw4,C.bw5,C.bw6,C.bw7,C.bw_,C.bvZ,C.d2p,C.d2u,C.d2v,C.d2s,C.d2k,C.d2f,C.d6J,C.d6K,C.d2G,C.d2D,C.d2E,C.dD4])
v(A.a2q,[C.dHG,C.dHH,C.dHI,C.dHJ,C.d2o,C.d2n,C.d2l,C.d2m,C.d2t,C.d2q,C.d2w,C.d2i,C.d2j,C.d2e,C.d2d,C.d2g,C.d2c,C.djf,C.djg,C.d2x,C.d2C,C.d2B,C.d2F,C.d2A,C.d2z,C.d2y])
v(A.ap,[C.Pd,C.YZ,C.aQf,C.aYI,C.aYJ,C.aRA,C.aYH,C.aSV,C.aMg,C.aT_,C.GT])
v(A.ar,[C.oY,C.rj])
v(A.ad,[C.LE,C.LD,C.a9q,C.a9r])
v(A.ae,[C.ajS,C.aRu,C.apq,C.ajT])
v(A.a2r,[C.d2r,C.d2h])
u(C.LH,A.aNb)
u(C.aRv,C.apq)
w(C.apq,A.dB)})()
A.e16(b.typeUniverse,JSON.parse('{"LE":{"ad":[],"r":[]},"YZ":{"ap":[],"r":[]},"LD":{"ad":[],"r":[]},"Pd":{"ap":[],"r":[]},"ajS":{"ae":["LE"]},"aQf":{"ap":[],"r":[]},"aRu":{"ae":["LD"]},"aYI":{"ap":[],"r":[]},"aYJ":{"ap":[],"r":[]},"aRA":{"ap":[],"r":[]},"aYH":{"ap":[],"r":[]},"aSV":{"ap":[],"r":[]},"aMg":{"ap":[],"r":[]},"a9q":{"ad":[],"r":[]},"GT":{"ap":[],"r":[]},"aRv":{"ae":["a9q"]},"aT_":{"ap":[],"r":[]},"a9r":{"ad":[],"r":[]},"ajT":{"ae":["a9r"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<oY>"),S:w("a9<fR>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<oY>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oS"),_:w("EC"),k:w("oY"),N:w("p"),Y:w("bi<a4>"),W:w("d2<p>"),J:w("lM<L>"),j:w("lM<rj?>"),E:w("ud<d_>"),q:w("ZW"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2A=new A.Q(983224,"MaterialIcons",!1)
D.aZS=new A.ab(D.a2A,48,B.b5,null,null,null)
D.dbw=new A.z("Powered off",null,B.aqY,null,null,null,null,null,null,null,null,null)
D.bWL=w([D.aZS,B.N,D.dbw],x.p)
D.aJF=new A.eJ(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bWL,null)
D.aAv=new A.cU(B.I,null,null,D.aJF,null)
D.cX2=new A.aa(18,18,B.Wj,null)
D.aAR=new A.cU(B.I,null,null,D.cX2,null)
D.aBV=new A.fp(2,null,null,null,null,B.a9,null,null,null,null)
D.aFN=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGt=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIg=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMc=new A.O(0,3,0,3)
D.aMn=new A.O(10,0,10,88)
D.aMO=new A.O(12,6,12,10)
D.aNi=new A.O(14,8,14,6)
D.aOO=new A.O(20,8,20,20)
D.a_V=new A.O(8,6,15,8)
D.aVg=new A.Q(983222,"MaterialIcons",!1)
D.aWY=new A.ab(B.kF,26,B.a6,null,null,null)
D.aX1=new A.ab(B.a1E,18,null,null,null,null)
D.aXf=new A.ab(B.uw,14,B.a9,null,null,null)
D.aVz=new A.Q(983420,"MaterialIcons",!1)
D.aY7=new A.ab(D.aVz,14,B.a9,null,null,null)
D.aTE=new A.Q(62895,"MaterialIcons",!1)
D.aYc=new A.ab(D.aTE,14,B.a9,null,null,null)
D.aZL=new A.ab(B.un,16,B.a9,null,null,null)
D.b0H=new A.ab(B.io,20,null,null,null,null)
D.b11=new A.ab(B.hH,16,null,null,null,null)
D.c_H=w([B.aP,B.V],x.O)
D.a4D=new A.a7(B.av,B.aD,B.E,D.c_H,null,null)
D.cQb=new A.aI("NGMY OS","14.2.1")
D.cOM=new A.aI("VirtualDroid","13.8.4")
D.cOL=new A.aI("NGMY OS","15.0.0")
D.cPF=new A.aI("VirtualDroid","14.1.2")
D.cOH=new A.aI("NGMY Tab OS","12.9.7")
D.cOF=new A.aI("NGMY OS","13.5.3")
D.cOu=new A.aI("VirtualDroid","15.2.0")
D.cPb=new A.aI("NGMY OS","14.8.1")
D.cPK=new A.aI("NGMY Tab OS","13.2.4")
D.cQo=new A.aI("VirtualDroid","12.6.9")
D.cOo=new A.aI("NGMY OS","16.0.1")
D.cOe=new A.aI("VirtualDroid","14.9.0")
D.cQ1=new A.aI("NGMY Tab OS","14.0.3")
D.cOX=new A.aI("NGMY OS","13.1.8")
D.cOm=new A.aI("VirtualDroid","13.4.5")
D.cOE=new A.aI("NGMY OS","15.3.2")
D.cPL=new A.aI("NGMY Tab OS","12.4.1")
D.cQ4=new A.aI("VirtualDroid","16.1.0")
D.cPa=new A.aI("NGMY OS","14.4.6")
D.cQc=new A.aI("VirtualDroid","15.0.8")
D.bZQ=w([D.cQb,D.cOM,D.cOL,D.cPF,D.cOH,D.cOF,D.cOu,D.cPb,D.cPK,D.cQo,D.cOo,D.cOe,D.cQ1,D.cOX,D.cOm,D.cOE,D.cPL,D.cQ4,D.cPa,D.cQc],A.b4("a9<+(p,p)>"))
D.yl=w([B.a6,B.fH],x.O)
D.cSz=new A.f3(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cS7=new A.f3(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cS2=new A.f3(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cSb=new A.f3(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cRZ=new A.f3(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cSd=new A.f3(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cSB=new A.f3(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cS_=new A.f3(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cS6=new A.f3(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cSf=new A.f3(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cRY=new A.f3(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cSt=new A.f3(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cSq=new A.f3(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cS5=new A.f3(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cSn=new A.f3(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cSm=new A.f3(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cRX=new A.f3(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cSa=new A.f3(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cSk=new A.f3(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cSp=new A.f3(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abD=w([D.cSz,D.cS7,D.cS2,D.cSb,D.cRZ,D.cSd,D.cSB,D.cS_,D.cS6,D.cSf,D.cRY,D.cSt,D.cSq,D.cS5,D.cSn,D.cSm,D.cRX,D.cSa,D.cSk,D.cSp],A.b4("a9<+(p,p,a4,a4,p)>"))
D.c8L=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajp=new C.LH(0,"youtube")
D.ajq=new C.LH(1,"tiktok")
D.Rd=new C.LH(2,"instagram")
D.ajr=new C.LH(3,"facebook")
D.cGT=new C.LH(4,"other")
D.cXn=new A.hr(4,10,8,0.52,null)
D.dcQ=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d_Q=new A.aV(D.dcQ,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.t,null)
D.d3d=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dcD=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dlf=new A.z("Open in YouTube",null,B.jF,null,null,null,null,null,null,null,null,null)
D.dpy=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dqo=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dqx=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dyq=new C.aSV(null)})();(function staticFields(){$.dYE=20
$.aCG=null
$.bvY=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eM8","I9",()=>A.adT(0))
w($,"eM9","R7",()=>A.adT(null))})()};
(a=>{a["N0Q1E9E7egJpNCnShVt/UIBs/w8="]=a.current})($__dart_deferred_initializers__);