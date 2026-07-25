((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eJN(d,e){A.a0(d,!1).cg(A.ef(new C.dJ5(e),!0,null,x.H))},
a1h(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Rf()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.be(n,B.aS,B.aH),t)
w=3
return A.b(A.d3(B.J,new C.dJ4(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1h)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.enW(r)
if(q==null){d.G(x.q).f.P(D.d0Q)
w=1
break}w=4
return A.b(A.bJ(B.hV,null,x.H),$async$a1h)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dZY=n
p=C.enQ(n)
n=$.Ie()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dNd(q)
d.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1h,v)},
e_0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.p0(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LM(d){return C.enZ(d)},
enZ(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LM=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$LM)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cL(r)?10:11
break
case 10:k=J.ev(r,x.f)
k=A.da(k,new C.bwz(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bwA(),j),j.j("I.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.e_2(q)
w=12
return A.b(C.LL(a3,p),$async$LM)
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
case 9:case 5:o=A.aK(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.e_0(A.S(n,x.N,x.z))
l=C.e_2(A.a([m],x.e))
w=21
return A.b(C.LL(a3,l),$async$LM)
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
case 18:case 14:q=C.enX()
w=22
return A.b(C.LL(a3,q),$async$LM)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LM,v)},
e_2(d){var w=A.W(d).j("H<1,p>"),v=new A.H(d,new C.bwr(),w).es(0),u=new A.H(d,new C.bws(),w).es(0),t=new A.H(d,new C.bwt(),w).es(0),s=new A.H(d,new C.bwu(),w).es(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dNe(null,q,u,t,v,s));++q}return r},
aD1(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aD1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LM(d),$async$aD1)
case 3:t=f
s=x.N
r=J.c7(t)
q=r.d3(t,new C.bwv(),s).es(0)
p=r.d3(t,new C.bww(),s).es(0)
o=r.d3(t,new C.bwx(),s).es(0)
n=r.d3(t,new C.bwy(),s).es(0)
m=C.dNe(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LL(d,t),$async$aD1)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aD1,v)},
LL(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LL)
case 2:u=g
t=B.b.i(d)
s=J.aR(e,new C.bwq(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ag("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LL)
case 3:return A.h(null,v)}})
return A.i($async$LL,v)},
enX(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cN(20,x.k)
for(w=0;w<20;++w)q[w]=C.dNe(w,w,t,s,u,r)
return q},
dNe(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lq(),h=d==null,g=D.abQ[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abQ[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bu(256)
n=new A.H(p,new C.bwp(),A.W(p).j("H<1,p>")).fT(0)
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
k=D.c9j[w]
j=D.c_h[w]
return new C.p0("vd_"+1000*Date.now()+"_"+e+"_"+i.bu(99999),"Device "+B.b.b8(B.m.q(e+1),2,"0"),u,k,C.enY(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a7().a3())},
enY(d,e){var w,v=J.cN(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bu(256),16),2,"0")
return B.f.fT(v)},
dJ5:function dJ5(d){this.a=d},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
dJ0:function dJ0(d){this.a=d},
dJ1:function dJ1(d){this.a=d},
dJ2:function dJ2(d){this.a=d},
dJ3:function dJ3(d,e){this.a=d
this.b=e},
Pj:function Pj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
p0:function p0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bwz:function bwz(){},
bwA:function bwA(){},
bwr:function bwr(){},
bws:function bws(){},
bwt:function bwt(){},
bwu:function bwu(){},
bwv:function bwv(){},
bww:function bww(){},
bwx:function bwx(){},
bwy:function bwy(){},
bwq:function bwq(){},
bwp:function bwp(){},
LK:function LK(d,e){this.c=d
this.a=e},
ak9:function ak9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3e:function d3e(){},
d3d:function d3d(d,e){this.a=d
this.b=e},
d3b:function d3b(d){this.a=d},
d3c:function d3c(d,e){this.a=d
this.b=e},
d3f:function d3f(d){this.a=d},
d3k:function d3k(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3l:function d3l(d,e){this.a=d
this.b=e},
d3i:function d3i(d,e,f){this.a=d
this.b=e
this.c=f},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3m:function d3m(d){this.a=d},
Za:function Za(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQD:function aQD(d,e){this.c=d
this.a=e},
LJ:function LJ(d,e){this.c=d
this.a=e},
aRS:function aRS(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d38:function d38(d){this.a=d},
d39:function d39(d){this.a=d},
d3a:function d3a(d){this.a=d},
d37:function d37(d,e){this.a=d
this.b=e},
d34:function d34(d){this.a=d},
d35:function d35(d){this.a=d},
d33:function d33(d,e){this.a=d
this.b=e},
d36:function d36(d){this.a=d},
d32:function d32(d){this.a=d},
aZ6:function aZ6(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZ7:function aZ7(d,e,f){this.c=d
this.d=e
this.a=f},
aRY:function aRY(d,e){this.c=d
this.a=e},
aZ5:function aZ5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dkw:function dkw(d){this.a=d},
dkx:function dkx(d){this.a=d},
aTi:function aTi(d){this.a=d},
aMC:function aMC(d,e){this.c=d
this.a=e},
enW(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.enV(v)
if(u!=null)return new C.rp(w,C.dNc(u,!1),D.ajC,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.enU(v)
if(t!=null)return new C.rp(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajD,"TikTok",q)
s=C.enT(w,v)
if(s!=null)return s
r=C.enS(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rp(w,w,D.cHr,"Video",q)
return q},
enT(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rp(d,"https://www.instagram.com/reel/"+w+u,D.Rg,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rp(d,"https://www.instagram.com/p/"+w+u,D.Rg,t,null)}return null},
enS(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rp(d,"https://www.facebook.com/plugins/video.php?href="+A.fT(2,d,B.by,!1)+"&show_text=false&width=734",D.ajE,"Facebook",null)},
enV(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
enU(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LN:function LN(d,e){this.a=d
this.b=e},
rp:function rp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9G:function a9G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRT:function aRT(d,e){var _=this
_.d=$
_.cm$=d
_.aD$=e
_.c=_.a=null},
aTn:function aTn(d,e){this.c=d
this.a=e},
d7z:function d7z(d){this.a=d},
d7A:function d7A(d){this.a=d},
GX:function GX(d,e){this.c=d
this.a=e},
apL:function apL(){},
e_1(d,e,f,g,h,i){return new C.a9H(i,f,h,e,g,d)},
eIi(d){var w=window
w.toString
A.h7(w,"message",new C.dEo(d),!1,x._)},
a9H:function a9H(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aka:function aka(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d3n:function d3n(d){this.a=d},
d3w:function d3w(d){this.a=d},
d3t:function d3t(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3u:function d3u(d){this.a=d},
d3r:function d3r(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3q:function d3q(d){this.a=d},
d3p:function d3p(d){this.a=d},
d3o:function d3o(d){this.a=d},
dEo:function dEo(d){this.a=d},
enO(){var w,v,u
try{v=A.rL()
w=v.gvh(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dNc(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.ba(w,"&")},
bwn(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dZX(d){var w=A.aU(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aU(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
enP(d,e,f){var w,v,u=C.bwn(d)
if(u!=null){if(f){w=C.enO()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dZX(C.dNc(u,e))}return C.dZX(d)},
enQ(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
enR(d){var w
if($.Rf().a==null)return!1
w=$.Ie().a
return d>=w&&d<w+4},
e__(){var w=$.aD0
if(w!=null)w.ab(0)
$.aD0=null
$.Ie().sv(0,0)},
dZZ(){var w,v,u,t=$.Rf()
if(t.a==null)return
w=$.aD0
if(w!=null)w.ab(0)
v=$.dZY
if(v<=4){t=t.a
t.toString
C.dNd(t)
return}w=$.Ie()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dNd(t)},
dNd(d){var w=$.aD0
if(w!=null)w.ab(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aD0=A.dw(A.d6(0,0,0,0,0,w),C.eIy())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pj.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.V(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fK,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ct,w,w,w,w,w,w,w,w,11,w,w,B.S,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.hm,w,w,w)}}
C.p0.prototype={
aa(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LK.prototype={
U(){return new C.ak9(A.a([],x.e))},
ge1(){return this.c}}
C.ak9.prototype={
a_(){var w=this
w.a4()
$.Ie().aA(0,w.gaC8())
C.eIi(w.gbw2())
w.a0W()},
bvu(){if(this.c!=null)this.n(new C.d3e())},
bw3(){C.dZZ()},
p(){$.Ie().Z(0,this.gaC8())
C.e__()
$.Rf().sv(0,null)
this.a5()},
a0W(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LM(t.a.c),$async$a0W)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3d(t,s))
$.bwo=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0W,v)},
Xr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d3b(t))
w=3
return A.b(C.aD1(t.a.c),$async$Xr)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3c(t,s))
$.bwo=J.a4(t.d)
t.c.G(x.q).f.P(A.bh(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xr,v)},
by8(d){var w=this.c
w.toString
A.a0(w,!1).cg(A.ef(new C.d3f(d),!1,null,x.H))},
byP(){var w=this.c
w.toString
return C.a1h(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.ie:B.bE,s=A.bB(!0,A.u(A.a([new A.C(D.a_Z,new A.iA(new C.d3k(w),v),v),A.E(w.e?B.n1:new A.lN($.Rf(),new C.d3l(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ac,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.awv(B.a6,B.Jx,B.k8,D.drE,w.e?v:new C.d3m(w)),v)}}
C.Za.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dH,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9G(n,!0,!C.enR(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.V(B.kH,B.oA,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.S,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.B1,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.u(A.a([A.E(A.q(u,A.bN(p,A.f0(A.u(A.a([new C.aQD(o,u),A.E(n,1),A.q(u,A.F(A.a([A.V(B.xW,B.a6.k(0.85),u,u,9),B.aq9,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,u,D.aMq,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4M,B.o),u,u,u,u,B.fb,u,u,u),1),B.aK,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQD.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.V(B.uy,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,w,B.a_O,w,w,w)}}
C.LJ.prototype={
U(){return new C.aRS()}}
C.aRS.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.ie:B.bE,t=A.aO(w,w,w,w,B.a3J,w,w,w,new C.d38(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bB(!0,A.u(A.a([new A.C(D.a_Z,A.F(A.a([t,A.E(new A.Ly(A.F(A.a([A.E(new A.C(B.k_,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.C(B.bp,A.V(B.hI,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d39(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lN($.Rf(),new C.d3a(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ac,!0,!0),w,!1,!1,w,w)}}
C.aZ6.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eB,28),new A.a5(0,B.G,B.A.k(0.45),B.d8,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e_1(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaSG(),v+"_full")
w=v}else w=new C.aRY(t.r,s)}else w=new C.aMC(m,s)
else w=D.dzx
return A.q(s,A.bN(n,A.f0(A.u(A.a([new C.aZ7(m,l,s),A.E(w,1),new C.aZ5(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4M,B.o),s,r*2.05,s,s,B.bI,s,s,r)}}
C.aZ7.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glO()
r=r.gFp()
w=new A.dN(q,r)
v=w.gLe()===0?12:w.gLe()
r=B.b.b8(B.m.q(r),2,"0")
q=(q<12?B.hC:B.jU)===B.hC?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o6,s,s,s),B.b4,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bQ,D.aYs,B.dg,D.aXA,B.dg,D.aYx],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aK,A.F(A.a([A.V(B.uu,B.a6.k(0.9),s,s,12),B.dg,A.E(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aw,s,s,s,s,s,s,D.aNw,s,s,s)}}
C.aRY.prototype={
B(d){var w=null
return A.q(w,A.aC(A.u(A.a([A.V(B.D1,B.c.k(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.S,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ex(D.b1l,D.ddF,this.c,A.ds(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aD(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.B1,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZ5.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBV(B.Dr,"YouTube",s===0,r,new C.dkw(u))
s=u.aBV(B.jv,"Device",s===1,r,new C.dkx(u))
w=r?"Power off":"Power on"
v=r?D.a2I:D.aVy
return A.q(t,A.F(A.a([q,B.ai,s,B.b4,A.aO(t,t,t,t,A.V(v,r?B.bM:B.f6,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cY)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,t,D.aN1,t,t,t)},
aBV(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b6
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.C(B.mg,A.u(A.a([A.V(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.S,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aTi.prototype={
B(d){return D.aAG}}
C.aMC.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iC,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ue("Serial",u.c),q=w.ue("Model",u.d),p=w.ue("Device ID",u.e),o=w.ue("IMEI",u.r),n=w.ue("MAC",u.f),m=w.ue("OS",u.w+" "+u.x),l=w.ue("Location",u.y+", "+u.z),k=w.ue("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ue("Timezone",u.at)
u=u.ax
return A.e2(A.a([t,B.aK,s,B.ae,r,q,p,o,n,m,l,k,j,w.ue("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bp,v,v,B.aj,!1)},
ue(d,e){var w=null
return new A.C(B.dk,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d4d,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LN.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rp.prototype={
gaSG(){var w=this.c
return w===D.ajC||w===D.ajD||w===D.Rg||w===D.ajE}}
C.a9G.prototype={
U(){return new C.aRT(null,null)}}
C.aRT.prototype={
a_(){this.a4()
var w=A.bf(null,B.tF,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2b()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.o(t,t,t,t,t,new A.a7(B.bT,B.bS,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cc(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cD(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.V(B.kH,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oA
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aTn(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.b8,B.t,s,t)}}
C.aTn.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kF(u,B.I,new C.d7z(this),B.c4,B.bU,!0,w,w,new C.d7A(this),w)
return new C.GX(v,w)}}
C.GX.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tu,B.WE],x.O),B.kH)
break
case 1:w=new A.aI(A.a([B.B1,D.aGH],x.O),B.mq)
break
case 2:w=new A.aI(A.a([D.aIu,D.aG0],x.O),B.D8)
break
case 3:w=new A.aI(A.a([B.W,B.dO],x.O),B.Df)
break
case 4:w=new A.aI(A.a([B.aw,B.aP],x.O),B.qM)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.V(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apL.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcQ())
w.aD$=null
w.a5()},
be(){this.bq()
this.bp()
this.cR()}}
C.a9H.prototype={
U(){return new C.aka()}}
C.aka.prototype={
ab9(d,e){var w,v=C.bwn(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dNc(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.enP(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bPP(){var w,v=this
if(v.w)return
v.n(new C.d3n(v))
w=v.e
if(w!=null)v.ab9(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.De()
$.pC().tA(w,new C.d3w(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d3p(v))
w=v.e
w.toString
v.ab9(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.V(B.a33,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f0(A.aC(new A.C(new A.O(12,12,12,12),A.u(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.T_(n,B.rh,w)],v)
if(o.f)w.push(A.f0(A.aC(new A.ab(28,28,D.aC7,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b6,B.r,1)
q=A.V(B.DD,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dM(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.S,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LP,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbPO(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bwn(o.a.d)
if(v!=null)w.push(A.av(8,A.jj(D.b_6,D.dmk,new C.d3o(o),A.hO(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.b8,B.t,w,n)}}
var z=a.updateTypes(["p(p0)","~()","LK(M)","p0(a_<@,@>)","Z(p0)","a_<p,@>(p0)","aE<~>()","LJ(M)","lN<L>(M,rp?,r?)","Za(M,L)","vh(M,rp?,r?)","GX(M,ar,dR?)"])
C.dJ5.prototype={
$1(d){return new C.LK(this.a,null)},
$S:z+2}
C.dJ4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.W],j):A.a([B.c,B.ax],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eB,32)],x.V),g=A.J(m?B.ce:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.aA.k(m?0.18:0.08)],j)
e=A.q(n,D.aXh,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.ag),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.u(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eC,w,A.aO(n,n,n,n,A.V(B.cL,m?B.at:B.d_,n,n,n),n,n,n,new C.dJ0(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a_,B.a3,B.E,j,n,n),B.o),n,n,n,n,B.LX,n,n,n)
e=A.e8(B.cQ,A.a([new C.Pj("YouTube",B.O0,m,n),new C.Pj("TikTok",B.mq,m,n),new C.Pj("Instagram",B.D8,m,n),new C.Pj("Facebook",B.Df,m,n)],v),B.cx,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ca:B.hT,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bE
r=A.V(B.fU,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aM
u=A.u(A.a([e,B.aR,A.aL(n,B.R,!0,n,!0,B.t,n,A.aN(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.V),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vm),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.a9,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a2,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.af,n,n,n,n)],v),B.al,n,B.i,B.k,0,B.p)
e=A.jj(D.aXl,D.dqC,new C.dJ1(d),A.hO(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.C(new A.O(12,0,12,12+l.f.d),A.cw(A.bN(f,A.u(A.a([j,new A.C(B.a_t,u,n),new A.C(D.aP4,A.F(A.a([e,B.b4,A.bZ(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dJ2(d),n,n),B.ai,A.dE(D.b10,D.drt,new C.dJ3(d,w),A.bn(B.a6,n,n,n,B.c,n,B.LP,n,new A.br(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.al,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a7(B.av,B.aD,B.E,i,n,n),B.o),B.br),n)},
$S:77}
C.dJ0.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dJ1.prototype={
$0(){C.e__()
$.Rf().sv(0,null)
A.a0(this.a,!1).M(null)},
$S:0}
C.dJ2.prototype={
$0(){A.a0(this.a,!1).M(null)
return null},
$S:0}
C.dJ3.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).M(w)
return null},
$S:0}
C.bwz.prototype={
$1(d){return C.e_0(A.S(d,x.N,x.z))},
$S:z+3}
C.bwA.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bwr.prototype={
$1(d){return d.c},
$S:z+0}
C.bws.prototype={
$1(d){return d.r},
$S:z+0}
C.bwt.prototype={
$1(d){return d.f},
$S:z+0}
C.bwu.prototype={
$1(d){return d.at},
$S:z+0}
C.bwv.prototype={
$1(d){return d.c},
$S:z+0}
C.bww.prototype={
$1(d){return d.r},
$S:z+0}
C.bwx.prototype={
$1(d){return d.f},
$S:z+0}
C.bwy.prototype={
$1(d){return d.at},
$S:z+0}
C.bwq.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bwp.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:92}
C.d3e.prototype={
$0(){},
$S:0}
C.d3d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3b.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d3c.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d3f.prototype={
$1(d){return new C.LJ(this.a,null)},
$S:z+7}
C.d3k.prototype={
$4(d,e,f,g){var w=null,v=A.aO(w,w,w,w,B.qQ,w,w,w,new C.d3j(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h2(A.F(A.a([new A.oZ(D.yo,e,g,36,B.uu,w),B.aN,A.E(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fR(B.f.gH(D.yo).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.C(B.bI,A.V(B.hI,A.ao(B.f.gH(D.yo),B.f.ga6(D.yo),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbyO(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yo,w,g,B.eQ,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:347}
C.d3j.prototype={
$0(){return A.a0(this.a,!1).e7()},
$S:0}
C.d3l.prototype={
$3(d,e,f){return new A.lN($.Ie(),new C.d3i(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d3i.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EJ(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.V(B.kH,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Ie().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.S,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dv,B.fa,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bN(s,new A.hG(1.7777777777777777,C.e_1(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaSG(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uX(0,B.t,k,B.F,k,k,k,k,!1,k,B.aj,!1,A.a([new A.lb(new A.C(B.LL,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.on(D.aMB,A.aH5(new A.ol(new C.d3h(i,j),J.a4(i.d),!1,!0,!0,A.uK(),k),D.cYk),k)],w))},
$S:1866}
C.d3h.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Za(v,e,J.a4(w.d),new C.d3g(w,v),this.b,null)},
$S:z+9}
C.d3g.prototype={
$0(){return this.a.by8(this.b)},
$S:0}
C.d3m.prototype={
$0(){this.a.Xr()
return null},
$S:0}
C.d38.prototype={
$0(){return A.a0(this.a,!1).e7()},
$S:0}
C.d39.prototype={
$0(){C.a1h(this.a,$.bwo)
return null},
$S:0}
C.d3a.prototype={
$3(d,e,f){return A.eK(new C.d37(this.a,e))},
$S:z+10}
C.d37.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aR,new C.aZ6(u,s.a.c,s.e,s.d,new C.d34(s),new C.d35(s),new C.d36(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oK,v,v,B.aj),v,v,v)},
$S:1867}
C.d34.prototype={
$0(){var w=this.a.c
w.toString
C.a1h(w,$.bwo)
return null},
$S:0}
C.d35.prototype={
$1(d){var w=this.a
return w.n(new C.d33(w,d))},
$S:30}
C.d33.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d36.prototype={
$0(){var w=this.a
return w.n(new C.d32(w))},
$S:0}
C.d32.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dkw.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dkx.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d7z.prototype={
$3(d,e,f){return new C.GX(this.a.c,null)},
$S:z+11}
C.d7A.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.b8,B.t,A.a([new C.GX(this.a.c,null),D.aB1],x.p),null)},
$C:"$3",
$R:3,
$S:474}
C.d3n.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3w.prototype={
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
w.ab9(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h7(v,"load",new C.d3t(w),!1,u)
v=w.e
v.toString
A.h7(v,"error",new C.d3u(w),!1,u)
A.bJ(B.jY,new C.d3v(w),x.H)
w=w.e
w.toString
return w},
$S:401}
C.d3t.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d3s(w))},
$S:29}
C.d3s.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3u.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d3r(w))},
$S:29}
C.d3r.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d3v.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d3q(w))},
$S:12}
C.d3q.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3p.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d3o.prototype={
$0(){var w,v=C.bwn(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mU.Lz(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dEo.prototype={
$1(d){var w,v,u,t,s=new A.w8([],[]).x8(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1868};(function aliases(){var w=C.apL.prototype
w.b2b=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ak9.prototype,"gaC8","bvu",1)
w(u,"gbw2","bw3",1)
w(u,"gbyO","byP",6)
w(C.aka.prototype,"gbPO","bPP",1)
v(C,"eIy","dZZ",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zS,[C.dJ5,C.dJ4,C.bwz,C.bwA,C.bwr,C.bws,C.bwt,C.bwu,C.bwv,C.bww,C.bwx,C.bwy,C.bwq,C.bwp,C.d3f,C.d3k,C.d3l,C.d3i,C.d3a,C.d35,C.d7z,C.d7A,C.d3w,C.d3t,C.d3u,C.dEo])
v(A.a2G,[C.dJ0,C.dJ1,C.dJ2,C.dJ3,C.d3e,C.d3d,C.d3b,C.d3c,C.d3j,C.d3g,C.d3m,C.d38,C.d39,C.d34,C.d33,C.d36,C.d32,C.dkw,C.dkx,C.d3n,C.d3s,C.d3r,C.d3v,C.d3q,C.d3p,C.d3o])
v(A.ap,[C.Pj,C.Za,C.aQD,C.aZ6,C.aZ7,C.aRY,C.aZ5,C.aTi,C.aMC,C.aTn,C.GX])
v(A.ar,[C.p0,C.rp])
v(A.ad,[C.LK,C.LJ,C.a9G,C.a9H])
v(A.ae,[C.ak9,C.aRS,C.apL,C.aka])
v(A.a2H,[C.d3h,C.d37])
u(C.LN,A.aNx)
u(C.aRT,C.apL)
w(C.apL,A.dC)})()
A.e2r(b.typeUniverse,JSON.parse('{"LK":{"ad":[],"r":[]},"Za":{"ap":[],"r":[]},"LJ":{"ad":[],"r":[]},"Pj":{"ap":[],"r":[]},"ak9":{"ae":["LK"]},"aQD":{"ap":[],"r":[]},"aRS":{"ae":["LJ"]},"aZ6":{"ap":[],"r":[]},"aZ7":{"ap":[],"r":[]},"aRY":{"ap":[],"r":[]},"aZ5":{"ap":[],"r":[]},"aTi":{"ap":[],"r":[]},"aMC":{"ap":[],"r":[]},"a9G":{"ad":[],"r":[]},"GX":{"ap":[],"r":[]},"aRT":{"ae":["a9G"]},"aTn":{"ap":[],"r":[]},"a9H":{"ad":[],"r":[]},"aka":{"ae":["a9H"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<p0>"),S:w("a9<fR>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<p0>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oV"),_:w("EG"),k:w("p0"),N:w("p"),Y:w("bi<a3>"),W:w("d2<p>"),J:w("lN<L>"),j:w("lN<rp?>"),E:w("uk<d_>"),q:w("a_8"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2I=new A.P(983224,"MaterialIcons",!1)
D.b_d=new A.aa(D.a2I,48,B.b6,null,null,null)
D.dcy=new A.z("Powered off",null,B.ara,null,null,null,null,null,null,null,null,null)
D.bXa=w([D.b_d,B.N,D.dcy],x.p)
D.aJT=new A.eJ(B.aj,B.i,B.Z,B.n,null,B.p,null,0,D.bXa,null)
D.aAG=new A.cQ(B.I,null,null,D.aJT,null)
D.cY_=new A.ab(18,18,B.Wm,null)
D.aB1=new A.cQ(B.I,null,null,D.cY_,null)
D.aC7=new A.fm(2,null,null,null,null,B.aa,null,null,null,null)
D.aG0=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGH=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIu=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMq=new A.O(0,3,0,3)
D.aMB=new A.O(10,0,10,88)
D.aN1=new A.O(12,6,12,10)
D.aNw=new A.O(14,8,14,6)
D.aP4=new A.O(20,8,20,20)
D.a_Z=new A.O(8,6,15,8)
D.aVy=new A.P(983222,"MaterialIcons",!1)
D.aXh=new A.aa(B.kH,26,B.a6,null,null,null)
D.aXl=new A.aa(B.a1I,18,null,null,null,null)
D.aXA=new A.aa(B.uy,14,B.aa,null,null,null)
D.aVR=new A.P(983420,"MaterialIcons",!1)
D.aYs=new A.aa(D.aVR,14,B.aa,null,null,null)
D.aTV=new A.P(62895,"MaterialIcons",!1)
D.aYx=new A.aa(D.aTV,14,B.aa,null,null,null)
D.b_6=new A.aa(B.up,16,B.aa,null,null,null)
D.b10=new A.aa(B.ip,20,null,null,null,null)
D.b1l=new A.aa(B.hI,16,null,null,null,null)
D.c09=w([B.aP,B.W],x.O)
D.a4M=new A.a7(B.av,B.aD,B.E,D.c09,null,null)
D.cQL=new A.aI("NGMY OS","14.2.1")
D.cPl=new A.aI("VirtualDroid","13.8.4")
D.cPk=new A.aI("NGMY OS","15.0.0")
D.cQe=new A.aI("VirtualDroid","14.1.2")
D.cPg=new A.aI("NGMY Tab OS","12.9.7")
D.cPe=new A.aI("NGMY OS","13.5.3")
D.cP3=new A.aI("VirtualDroid","15.2.0")
D.cPL=new A.aI("NGMY OS","14.8.1")
D.cQj=new A.aI("NGMY Tab OS","13.2.4")
D.cQY=new A.aI("VirtualDroid","12.6.9")
D.cOY=new A.aI("NGMY OS","16.0.1")
D.cOO=new A.aI("VirtualDroid","14.9.0")
D.cQB=new A.aI("NGMY Tab OS","14.0.3")
D.cPw=new A.aI("NGMY OS","13.1.8")
D.cOW=new A.aI("VirtualDroid","13.4.5")
D.cPd=new A.aI("NGMY OS","15.3.2")
D.cQk=new A.aI("NGMY Tab OS","12.4.1")
D.cQE=new A.aI("VirtualDroid","16.1.0")
D.cPK=new A.aI("NGMY OS","14.4.6")
D.cQM=new A.aI("VirtualDroid","15.0.8")
D.c_h=w([D.cQL,D.cPl,D.cPk,D.cQe,D.cPg,D.cPe,D.cP3,D.cPL,D.cQj,D.cQY,D.cOY,D.cOO,D.cQB,D.cPw,D.cOW,D.cPd,D.cQk,D.cQE,D.cPK,D.cQM],A.b4("a9<+(p,p)>"))
D.yo=w([B.a6,B.fG],x.O)
D.cT8=new A.f3(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cSH=new A.f3(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cSC=new A.f3(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cSL=new A.f3(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cSy=new A.f3(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cSN=new A.f3(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cTa=new A.f3(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cSz=new A.f3(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cSG=new A.f3(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cSP=new A.f3(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cSx=new A.f3(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cT2=new A.f3(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cT_=new A.f3(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cSF=new A.f3(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cSX=new A.f3(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cSW=new A.f3(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cSw=new A.f3(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cSK=new A.f3(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cSU=new A.f3(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cSZ=new A.f3(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abQ=w([D.cT8,D.cSH,D.cSC,D.cSL,D.cSy,D.cSN,D.cTa,D.cSz,D.cSG,D.cSP,D.cSx,D.cT2,D.cT_,D.cSF,D.cSX,D.cSW,D.cSw,D.cSK,D.cSU,D.cSZ],A.b4("a9<+(p,p,a3,a3,p)>"))
D.c9j=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajC=new C.LN(0,"youtube")
D.ajD=new C.LN(1,"tiktok")
D.Rg=new C.LN(2,"instagram")
D.ajE=new C.LN(3,"facebook")
D.cHr=new C.LN(4,"other")
D.cYk=new A.hk(4,10,8,0.52,null)
D.ddS=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d0Q=new A.aV(D.ddS,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d4d=new A.N(!0,B.c,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ddF=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dmk=new A.z("Open in YouTube",null,B.jI,null,null,null,null,null,null,null,null,null)
D.dqC=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.drt=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.drE=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dzx=new C.aTi(null)})();(function staticFields(){$.dZY=20
$.aD0=null
$.bwo=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eNy","Ie",()=>A.ae8(0))
w($,"eNz","Rf",()=>A.ae8(null))})()};
(a=>{a["fAUvEXbz5DapPvlweiI8LPuUYpw="]=a.current})($__dart_deferred_initializers__);