((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ebQ(d,e){A.a7(d,!1).cH(A.eJ(new C.deH(e),!0,null,x.H))},
YF(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Ow()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.am()
s=new A.ah(new A.b1(n,B.aD,B.ar),t)
w=3
return A.b(A.dp(B.M,new C.deG(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YF)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dSt(r)
if(q==null){d.G(x.q).f.R(D.cFN)
w=1
break}w=4
return A.b(A.bQ(B.i2,null,x.H),$async$YF)
case 4:if(d.e==null){w=1
break}n=B.l.a0(e,1,999)
$.duP=n
p=C.dSn(n)
n=$.FY()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.diP(q)
d.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YF,v)},
duS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aX(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aX(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.o2(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Jp(d){return C.dSw(d)},
dSw(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Jp=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Jp)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aE(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eR(r,x.f)
k=A.dr(k,new C.blQ(),k.$ti.j("G.E"),x.k)
j=A.O(k).j("af<G.E>")
i=A.A(new A.af(k,new C.blR(),j),j.j("G.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.duU(q)
w=12
return A.b(C.Jo(a3,p),$async$Jp)
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
n=B.H.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.duS(A.Q(n,x.N,x.z))
l=C.duU(A.a([m],x.e))
w=21
return A.b(C.Jo(a3,l),$async$Jp)
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
case 18:case 14:q=C.dSu()
w=22
return A.b(C.Jo(a3,q),$async$Jp)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jp,v)},
duU(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.blI(),w).eE(0),u=new A.D(d,new C.blJ(),w).eE(0),t=new A.D(d,new C.blK(),w).eE(0),s=new A.D(d,new C.blL(),w).eE(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.diQ(null,q,u,t,v,s));++q}return r},
avu(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$avu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jp(d),$async$avu)
case 3:t=f
s=x.N
r=J.cf(t)
q=r.d8(t,new C.blM(),s).eE(0)
p=r.d8(t,new C.blN(),s).eE(0)
o=r.d8(t,new C.blO(),s).eE(0)
n=r.d8(t,new C.blP(),s).eE(0)
m=C.diQ(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Jo(d,t),$async$avu)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avu,v)},
Jo(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Jo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$Jo)
case 2:u=g
t=B.b.i(d)
s=J.b2(e,new C.blH(),x.P)
s=A.A(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$Jo)
case 3:return A.h(null,v)}})
return A.i($async$Jo,v)},
dSu(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dG(20,x.k)
for(w=0;w<20;++w)q[w]=C.diQ(w,w,t,s,u,r)
return q},
diQ(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.js(),h=d==null,g=D.a55[B.l.ae(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a55[B.l.ae(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.D(p,new C.blG(),A.W(p).j("D<1,o>")).fl(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fl(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bl(B.l.ia(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.ae(e,20)
k=D.bTO[w]
j=D.bL9[w]
return new C.o2("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bl(B.l.n(e+1),2,"0"),u,k,C.dSv(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.P(Date.now(),0,!1).a3().Z())},
dSv(d,e){var w,v=J.dG(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bl(B.l.ia(d.bF(256),16),2,"0")
return B.h.fl(v)},
deH:function deH(d){this.a=d},
deG:function deG(d,e){this.a=d
this.b=e},
deC:function deC(d){this.a=d},
deD:function deD(d){this.a=d},
deE:function deE(d){this.a=d},
deF:function deF(d,e){this.a=d
this.b=e},
MQ:function MQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o2:function o2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
blQ:function blQ(){},
blR:function blR(){},
blI:function blI(){},
blJ:function blJ(){},
blK:function blK(){},
blL:function blL(){},
blM:function blM(){},
blN:function blN(){},
blO:function blO(){},
blP:function blP(){},
blH:function blH(){},
blG:function blG(){},
Jn:function Jn(d,e){this.c=d
this.a=e},
af5:function af5(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cFm:function cFm(){},
cFl:function cFl(d,e){this.a=d
this.b=e},
cFj:function cFj(d){this.a=d},
cFk:function cFk(d,e){this.a=d
this.b=e},
cFn:function cFn(d){this.a=d},
cFr:function cFr(d){this.a=d},
cFs:function cFs(d,e){this.a=d
this.b=e},
cFq:function cFq(d,e,f){this.a=d
this.b=e
this.c=f},
cFp:function cFp(d,e){this.a=d
this.b=e},
cFo:function cFo(d,e){this.a=d
this.b=e},
cFt:function cFt(d){this.a=d},
W_:function W_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIh:function aIh(d,e){this.c=d
this.a=e},
Jm:function Jm(d,e){this.c=d
this.a=e},
aJf:function aJf(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cFg:function cFg(d){this.a=d},
cFh:function cFh(d){this.a=d},
cFi:function cFi(d){this.a=d},
cFf:function cFf(d,e){this.a=d
this.b=e},
cFc:function cFc(d){this.a=d},
cFd:function cFd(d){this.a=d},
cFb:function cFb(d,e){this.a=d
this.b=e},
cFe:function cFe(d){this.a=d},
cFa:function cFa(d){this.a=d},
aQ0:function aQ0(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQ1:function aQ1(d,e,f){this.c=d
this.d=e
this.a=f},
aJl:function aJl(d,e){this.c=d
this.a=e},
aQ_:function aQ_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cTU:function cTU(d){this.a=d},
cTV:function cTV(d){this.a=d},
aKz:function aKz(d){this.a=d},
aEz:function aEz(d,e){this.c=d
this.a=e},
dSt(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dSs(v)
if(u!=null)return new C.q9(w,C.diO(u,!1),D.ack,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dSr(v)
if(t!=null)return new C.q9(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.acl,"TikTok",q)
s=C.dSq(w,v)
if(s!=null)return s
r=C.dSp(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.q9(w,w,D.cnE,"Video",q)
return q},
dSq(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).df(e)
if(s!=null){w=s.b[1]
w.toString
return new C.q9(d,"https://www.instagram.com/reel/"+w+u,D.ML,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).df(e)
if(v!=null){w=v.b[1]
w.toString
return new C.q9(d,"https://www.instagram.com/p/"+w+u,D.ML,t,null)}return null},
dSp(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.q9(d,"https://www.facebook.com/plugins/video.php?href="+A.f0(2,d,B.ba,!1)+"&show_text=false&width=734",D.acm,"Facebook",null)},
dSs(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].df(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dSr(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).df(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).df(d)
return w==null?null:w.b[1]},
Jq:function Jq(d,e){this.a=d
this.b=e},
q9:function q9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5z:function a5z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJg:function aJg(d,e){var _=this
_.d=$
_.d3$=d
_.aY$=e
_.c=_.a=null},
aKE:function aKE(d,e){this.c=d
this.a=e},
cJl:function cJl(d){this.a=d},
cJm:function cJm(d){this.a=d},
EQ:function EQ(d,e){this.c=d
this.a=e},
ajL:function ajL(){},
duT(d,e,f,g,h,i){return new C.a5A(i,f,h,e,g,d)},
eai(d){var w=window
w.toString
A.he(w,"message",new C.daK(d),!1,x._)},
a5A:function a5A(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
af6:function af6(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cFu:function cFu(d){this.a=d},
cFC:function cFC(d){this.a=d},
cFA:function cFA(d){this.a=d},
cFy:function cFy(d){this.a=d},
cFz:function cFz(d){this.a=d},
cFw:function cFw(d){this.a=d},
cFB:function cFB(d){this.a=d},
cFx:function cFx(d){this.a=d},
cFv:function cFv(d){this.a=d},
daK:function daK(d){this.a=d},
duN(){var w,v,u
try{v=A.Aj()
w=v.grE(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
diO(d,e){var w=C.duN(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f0(2,w,B.ba,!1))
v.push("widget_referrer="+A.f0(2,w,B.ba,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bm(v,"&")},
diN(d){var w=A.aq(y.c,!0,!1,!1,!1).df(d)
return w==null?null:w.b[1]},
duO(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dSm(d,e,f){var w,v,u=C.diN(d)
if(u!=null){if(f){w=C.duN()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.duO(C.diO(u,e))}return C.duO(d)},
dSn(d){if(d<=4)return 0
return B.l.aK(d-1,4)*4},
dSo(d){var w
if($.Ow().a==null)return!1
w=$.FY().a
return d>=w&&d<w+4},
duR(){var w=$.avt
if(w!=null)w.ac(0)
$.avt=null
$.FY().sv(0,0)},
duQ(){var w,v,u,t=$.Ow()
if(t.a==null)return
w=$.avt
if(w!=null)w.ac(0)
v=$.duP
if(v<=4){t=t.a
t.toString
C.diP(t)
return}w=$.FY()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.diP(t)},
diP(d){var w=$.avt
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
default:w=null}$.avt=A.dI(A.dn(0,0,0,0,0,w),C.eaE())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.MQ.prototype={
C(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.T(B.a7.l(0.25),B.w,1),r=A.Z(this.d,B.a7,w,w,14)
return A.t(w,A.H(A.a([r,B.fG,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c2,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a2,0,w,w),B.j,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fy,w,w,w)}}
C.o2.prototype={
a7(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Jn.prototype={
U(){return new C.af5(A.a([],x.e))},
ge8(){return this.c}}
C.af5.prototype={
a_(){var w=this
w.a5()
$.FY().ao(0,w.gaw4())
C.eai(w.gbkR())
w.Y8()},
bkg(){if(this.c!=null)this.p(new C.cFm())},
bkS(){C.duQ()},
q(){$.FY().Y(0,this.gaw4())
C.duR()
$.Ow().sv(0,null)
this.a4()},
Y8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jp(t.a.c),$async$Y8)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cFl(t,s))
$.blF=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Y8,v)},
Ua(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ua=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cFj(t))
w=3
return A.b(C.avu(t.a.c),$async$Ua)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cFk(t,s))
$.blF=J.a5(t.d)
t.c.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ua,v)},
bmK(d){var w=this.c
w.toString
A.a7(w,!1).cH(A.eJ(new C.cFn(d),!1,null,x.H))},
bni(){var w=this.c
w.toString
return C.YF(w,J.a5(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.f7:B.bN,s=A.aM(v,v,v,v,B.K3,v,v,v,new C.cFr(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a5(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.Di(A.H(A.a([A.I(new A.J(B.iY,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.Z,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.V,!0,v,A.aS(!1,v,!0,new A.J(B.bc,A.Z(B.fZ,B.a7,v,v,28),v),B.cH,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbnh(),v,v,v,v,v,v,v),B.j,B.M,0,v,v,v,v,v,B.ab)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.c6(!0,A.x(A.a([new A.J(D.Vw,r,v),A.I(w.e?B.mM:new A.j6($.Ow(),new C.cFs(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.r),!1,B.ai,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.apE(B.a7,B.FD,B.m3,D.d2j,w.e?v:new C.cFt(w)),v)}}
C.W_.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.e.l(0.1),B.w,1),q=A.a([new A.ab(0,B.G,B.a7.l(0.18),B.de,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5z(n,!0,!C.dSo(w),"Fold "+(B.l.aK(w,4)+1)+"/"+B.l.aK(v.e+4-1,4),u)
n=w}else n=A.t(u,A.x(A.a([A.Z(B.jB,B.mU,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.k,0,B.r),B.j,B.yl,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.V,!0,u,A.aS(!1,t,!0,A.x(A.a([A.I(A.t(u,A.cj(p,A.hg(A.x(A.a([new C.aIh(o,u),A.I(n,1),A.t(u,A.H(A.a([A.Z(B.Az,B.a7.l(0.85),u,u,9),D.cBE,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.k,0,u,u),B.j,B.au,u,u,u,u,u,D.aB_,u,u,u)],w),B.o,B.i,B.k,0,B.r),B.A,!0),B.aO),B.j,u,u,new A.r(u,u,r,s,q,D.ZG,B.p),u,u,u,B.fz,u,u,u),1),B.aK,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a7.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.r),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.M,0,u,u,u,u,u,B.ab)}}
C.aIh.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.r8,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.au,w,w,w,w,w,B.Vm,w,w,w)}}
C.Jm.prototype={
U(){return new C.aJf()}}
C.aJf.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.f7:B.bN,t=A.aM(w,w,w,w,B.K3,w,w,w,new C.cFg(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c6(!0,A.x(A.a([new A.J(D.Vw,A.H(A.a([t,A.I(new A.Di(A.H(A.a([A.I(new A.J(B.iY,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.Z,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.V,!0,w,A.aS(!1,w,!0,new A.J(B.bc,A.Z(B.fZ,B.a7,w,w,28),w),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cFh(d),w,w,w,w,w,w,w),B.j,B.M,0,w,w,w,w,w,B.ab)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.I(new A.j6($.Ow(),new C.cFi(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.r),!1,B.ai,!0,!0),w,!1,!1,w,w)}}
C.aQ0.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ab(0,B.G,B.a7.l(0.35),B.f_,28),new A.ab(0,B.G,B.A.l(0.45),B.d1,18)],x.V),o=A.T(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.duT(new A.dz(v+"_full_"+u,x.W),!1,u,!1,w.gaLw(),v+"_full")
w=v}else w=new C.aJl(t.r,s)}else w=new C.aEz(m,s)
else w=D.d8K
return A.t(s,A.cj(n,A.hg(A.x(A.a([new C.aQ1(m,l,s),A.I(w,1),new C.aQ_(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.r),B.A,!0),B.aO),B.j,s,s,new A.r(s,s,o,q,p,D.ZG,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQ1.prototype={
C(d){var w,v,u,t,s=null,r=new A.P(Date.now(),0,!1),q=A.dx(r)
r=A.hG(r)
w=new A.dy(q,r)
v=w.gIU()===0?12:w.gIU()
r=B.b.bl(B.l.n(r),2,"0")
q=(q<12?B.fT:B.iU)===B.fT?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mv,s,s,s),B.by,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bT,D.aLQ,B.eg,D.aL4,B.eg,D.aLU],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.H(A.a([A.Z(B.JU,B.a7.l(0.9),s,s,12),B.eg,A.I(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.x(q,B.o,B.i,B.k,0,B.r),B.j,B.au,s,s,s,s,s,D.aBL,s,s,s)}}
C.aJl.prototype={
C(d){var w=null
return A.t(w,A.aL(A.x(A.a([A.Z(B.A9,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eq(D.aPg,D.cR2,this.c,A.ew(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aE(B.a7.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a2,0,B.r),w,w,w),B.j,B.yl,w,w,w,w,w,w,w,w,1/0)}}
C.aQ_.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.avX(B.Aq,"YouTube",s===0,r,new C.cTU(u))
s=u.avX(B.l5,"Device",s===1,r,new C.cTV(u))
w=r?"Power off":"Power on"
v=r?D.Y1:D.aJ7
return A.t(t,A.H(A.a([q,B.al,s,B.by,A.aM(t,t,t,t,A.Z(v,r?B.bD:B.fn,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dm)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.au,t,t,t,t,t,D.aBw,t,t,t)},
avX(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a7:B.av
v=f&&g?B.a7.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.I(A.aK(!1,B.V,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.n2,A.x(A.a([A.Z(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a2,0,B.r),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.ab),1)}}
C.aKz.prototype={
C(d){return D.arq}}
C.aEz.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lq,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tj("Serial",u.c),q=w.tj("Model",u.d),p=w.tj("Device ID",u.e),o=w.tj("IMEI",u.r),n=w.tj("MAC",u.f),m=w.tj("OS",u.w+" "+u.x),l=w.tj("Location",u.y+", "+u.z),k=w.tj("Coordinates",B.m.a2(u.Q,4)+", "+B.m.a2(u.as,4)),j=w.tj("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.aK,s,B.a9,r,q,p,o,n,m,l,k,j,w.tj("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.ak,!1)},
tj(d,e){var w=null
return new A.J(B.cG,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cA,A.d(e,w,w,w,w,w,w,D.cIZ,w,w,w)],x.p),B.F,B.i,B.k,0,B.r),w)}}
C.Jq.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.q9.prototype={
gaLw(){var w=this.c
return w===D.ack||w===D.acl||w===D.ML||w===D.acm}}
C.a5z.prototype={
U(){return new C.aJg(null,null)}}
C.aJg.prototype={
a_(){this.a5()
var w=A.bJ(null,B.uA,null,1,null,this)
w.mN(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aVc()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dO(t,new A.r(t,t,t,t,t,new A.an(B.dh,B.cB,B.J,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.c3),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.iv,p,t)
w=B.e.l(0.92)
q=A.aL(new A.d5(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bk.T>")),!1,A.Z(B.jB,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.mU
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aKE(s,t),r,q,A.b_(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.b_(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.b_(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aJ(B.am,t,B.bi,B.y,s,t)}}
C.aKE.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kP(u,new C.cJl(this),B.cd,B.bP,!0,w,w,new C.cJm(this),w)
return new C.EQ(v,w)}}
C.EQ.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uh,B.RD],x.O),B.jB)
break
case 1:w=new A.aO(A.a([B.yl,D.avO],x.O),B.l6)
break
case 2:w=new A.aO(A.a([D.axm,D.avh],x.O),B.Ag)
break
case 3:w=new A.aO(A.a([B.Z,B.di],x.O),B.Ak)
break
case 4:w=new A.aO(A.a([B.au,B.aL],x.O),B.oS)
break
default:w=u}v=w.a
return A.t(u,A.aL(A.Z(w.b,B.a7.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.r(u,u,u,u,u,new A.an(B.aN,B.aT,B.J,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ajL.prototype={
q(){var w=this,v=w.aY$
if(v!=null)v.Y(0,w.gdL())
w.aY$=null
w.a4()},
by(){this.bR()
this.bM()
this.dM()}}
C.a5A.prototype={
U(){return new C.af6()}}
C.af6.prototype={
bE3(d,e){var w=C.diN(d)
if(w!=null)return C.diO(w,e)
return d},
a6P(d,e){var w,v=this,u=C.diN(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bE3(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dSm(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bBY(){var w,v=this
if(v.w)return
v.p(new C.cFu(v))
w=v.e
if(w!=null)v.a6P(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.G_()
$.pz().uw(w,new C.cFC(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cFv(v))
w=v.e
w.toString
v.a6P(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Yf,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.hg(A.aL(new A.J(new A.V(12,12,12,12),A.x(w,B.o,B.i,B.a2,0,B.r),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a11(n,B.rU,w)],v)
if(o.f)w.push(A.hg(A.aL(new A.ai(28,28,D.asq,n),n,n,n),B.cV,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.T(B.bm,B.w,1)
q=A.Z(B.JY,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eZ(0,A.aK(!1,B.V,!0,n,A.aS(!1,n,!0,A.aL(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a2,0,n,n),B.j,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.US,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbBX(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.ab)))}return new A.aJ(B.am,n,B.bi,B.y,w,n)}}
var z=a.updateTypes(["o(o2)","~()","Jn(U)","o2(Y<@,@>)","a0(o2)","Y<o,@>(o2)","az<~>()","Jm(U)","j6<K>(U,q9?,q?)","W_(U,K)","tH(U,q9?,q?)","EQ(U,ak,dM?)"])
C.deH.prototype={
$1(d){return new C.Jn(this.a,null)},
$S:z+2}
C.deG.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aD(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dN,B.Z],j):A.a([B.e,B.ay],j),h=A.a([new A.ab(0,B.G,B.a7.l(0.22),B.f_,32)],x.V),g=A.T(m?B.c6:B.a7.l(0.18),B.w,1),f=A.m(28),e=B.a7.l(m?0.35:0.14)
j=A.a([e,B.aq.l(m?0.18:0.08)],j)
e=A.t(n,D.aKM,B.j,n,n,new A.r(B.a7.l(0.18),n,A.T(B.a7.l(0.45),B.w,1),n,n,n,B.aA),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Z,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.x(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.ap,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.k,0,B.r),1)
j=A.t(n,A.H(A.a([e,B.f0,w,A.aM(n,n,n,n,A.Z(B.d5,m?B.av:B.cV,n,n,n),n,n,n,new C.deC(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.r(n,n,n,n,n,new A.an(B.ah,B.aj,B.J,j,n,n),B.p),n,n,n,B.HM,n,n,n)
e=A.e6(B.ct,A.a([new C.MQ("YouTube",B.JT,m,n),new C.MQ("TikTok",B.l6,m,n),new C.MQ("Instagram",B.Ag,m,n),new C.MQ("Facebook",B.Ak,m,n)],v),B.ce,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Z,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ci:B.hZ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bN
r=A.Z(B.hh,B.a7.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c6:B.aQ
u=A.x(A.a([e,B.aR,A.aH(n,B.N,!0,n,!0,B.y,n,A.aI(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aE(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Qm),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.X,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a6,n,n,n,n)],v),B.aw,B.i,B.k,0,B.r)
e=A.jJ(D.aKP,D.d1r,new C.deD(d),A.iI(n,n,n,n,n,n,n,n,n,n,n,m?B.bg:B.ap,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dO(A.cj(f,A.x(A.a([j,new A.J(B.V5,u,n),new A.J(D.aD1,A.H(A.a([e,B.by,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.at,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.deE(d),n,n),B.al,A.dP(D.aP_,D.d2e,new C.deF(d,w),A.bx(B.a7,n,n,n,B.e,n,D.US,n,new A.bG(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.aw,B.i,B.a2,0,B.r),B.aO),new A.r(n,n,g,k,h,new A.an(B.aN,B.aT,B.J,i,n,n),B.p),B.c3),n)},
$S:77}
C.deC.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.deD.prototype={
$0(){C.duR()
$.Ow().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.deE.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.deF.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.blQ.prototype={
$1(d){return C.duS(A.Q(d,x.N,x.z))},
$S:z+3}
C.blR.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.blI.prototype={
$1(d){return d.c},
$S:z+0}
C.blJ.prototype={
$1(d){return d.r},
$S:z+0}
C.blK.prototype={
$1(d){return d.f},
$S:z+0}
C.blL.prototype={
$1(d){return d.at},
$S:z+0}
C.blM.prototype={
$1(d){return d.c},
$S:z+0}
C.blN.prototype={
$1(d){return d.r},
$S:z+0}
C.blO.prototype={
$1(d){return d.f},
$S:z+0}
C.blP.prototype={
$1(d){return d.at},
$S:z+0}
C.blH.prototype={
$1(d){return d.a7()},
$S:z+5}
C.blG.prototype={
$1(d){return B.b.bl(B.l.ia(d,16),2,"0").toUpperCase()},
$S:79}
C.cFm.prototype={
$0(){},
$S:0}
C.cFl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFj.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cFk.prototype={
$0(){var w=this.a,v=A.A(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cFn.prototype={
$1(d){return new C.Jm(this.a,null)},
$S:z+7}
C.cFr.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.cFs.prototype={
$3(d,e,f){return new A.j6($.FY(),new C.cFq(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cFq.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CL(d,k,x.Q)
w=w==null?k:w.gll()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.l(0.12)
s=A.m(12)
r=A.T(B.a7.l(0.35),B.w,1)
q=A.Z(B.jB,B.a7,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.FY().a
m=B.m.a0(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Z,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d8,B.fk,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cj(s,new A.ju(1.7777777777777777,C.duT(new A.dz("fleet_master_"+r,x.W),!0,r,!0,j.gaLw(),"fleet_master"),k),B.aO),B.a9],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vw(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.ks(new A.J(B.HE,A.x(u,B.F,B.i,B.k,0,B.r),k),k),new A.od(D.aB8,A.azy(new A.nm(new C.cFp(i,j),J.a5(i.d),!1,!0,!0,A.tb(),k),D.cCo),k)],w))},
$S:1672}
C.cFp.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.W_(v,e,J.a5(w.d),new C.cFo(w,v),this.b,null)},
$S:z+9}
C.cFo.prototype={
$0(){return this.a.bmK(this.b)},
$S:0}
C.cFt.prototype={
$0(){this.a.Ua()
return null},
$S:0}
C.cFg.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.cFh.prototype={
$0(){C.YF(this.a,$.blF)
return null},
$S:0}
C.cFi.prototype={
$3(d,e,f){return A.fS(new C.cFf(this.a,e))},
$S:z+10}
C.cFf.prototype={
$2(d,e){var w,v=null,u=B.m.a0(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aL(A.ct(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aQ0(u,s.a.c,s.e,s.d,new C.cFc(s),new C.cFd(s),new C.cFe(s),t,v)],x.p),B.o,B.i,B.k,0,B.r),v,B.D,v,B.ou,v,v,B.ak),v,v,v)},
$S:1673}
C.cFc.prototype={
$0(){var w=this.a.c
w.toString
C.YF(w,$.blF)
return null},
$S:0}
C.cFd.prototype={
$1(d){var w=this.a
return w.p(new C.cFb(w,d))},
$S:36}
C.cFb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cFe.prototype={
$0(){var w=this.a
return w.p(new C.cFa(w))},
$S:0}
C.cFa.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cTU.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cTV.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cJl.prototype={
$3(d,e,f){return new C.EQ(this.a.c,null)},
$S:z+11}
C.cJm.prototype={
$3(d,e,f){if(f==null)return e
return new A.aJ(B.am,null,B.bi,B.y,A.a([new C.EQ(this.a.c,null),D.arE],x.p),null)},
$C:"$3",
$R:3,
$S:209}
C.cFu.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cFC.prototype={
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
w.a6P(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.he(v,"load",new C.cFA(w),!1,u)
v=w.e
v.toString
A.he(v,"error",new C.cFB(w),!1,u)
w=w.e
w.toString
return w},
$S:511}
C.cFA.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cFy(w))
A.bQ(B.P,new C.cFz(w),x.H)}},
$S:44}
C.cFy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cFz.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cFw(w))},
$S:12}
C.cFw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cFB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cFx(w))},
$S:44}
C.cFx.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cFv.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.daK.prototype={
$1(d){var w,v,u,t,s=new A.Ep([],[]).I9(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1674};(function aliases(){var w=C.ajL.prototype
w.aVc=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.af5.prototype,"gaw4","bkg",1)
w(u,"gbkR","bkS",1)
w(u,"gbnh","bni",6)
w(C.af6.prototype,"gbBX","bBY",1)
v(C,"eaE","duQ",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yc,[C.deH,C.deG,C.blQ,C.blR,C.blI,C.blJ,C.blK,C.blL,C.blM,C.blN,C.blO,C.blP,C.blH,C.blG,C.cFn,C.cFs,C.cFq,C.cFi,C.cFd,C.cJl,C.cJm,C.cFC,C.cFA,C.cFB,C.daK])
v(A.a_a,[C.deC,C.deD,C.deE,C.deF,C.cFm,C.cFl,C.cFj,C.cFk,C.cFr,C.cFo,C.cFt,C.cFg,C.cFh,C.cFc,C.cFb,C.cFe,C.cFa,C.cTU,C.cTV,C.cFu,C.cFy,C.cFz,C.cFw,C.cFx,C.cFv])
v(A.at,[C.MQ,C.W_,C.aIh,C.aQ0,C.aQ1,C.aJl,C.aQ_,C.aKz,C.aEz,C.aKE,C.EQ])
v(A.ak,[C.o2,C.q9])
v(A.ad,[C.Jn,C.Jm,C.a5z,C.a5A])
v(A.ae,[C.af5,C.aJf,C.ajL,C.af6])
v(A.a_b,[C.cFp,C.cFf])
u(C.Jq,A.aFt)
u(C.aJg,C.ajL)
w(C.ajL,A.em)})()
A.dyk(b.typeUniverse,JSON.parse('{"Jn":{"ad":[],"q":[]},"W_":{"at":[],"q":[]},"Jm":{"ad":[],"q":[]},"MQ":{"at":[],"q":[]},"af5":{"ae":["Jn"]},"aIh":{"at":[],"q":[]},"aJf":{"ae":["Jm"]},"aQ0":{"at":[],"q":[]},"aQ1":{"at":[],"q":[]},"aJl":{"at":[],"q":[]},"aQ_":{"at":[],"q":[]},"aKz":{"at":[],"q":[]},"aEz":{"at":[],"q":[]},"a5z":{"ad":[],"q":[]},"EQ":{"at":[],"q":[]},"aJg":{"ae":["a5z"]},"aKE":{"at":[],"q":[]},"a5A":{"ad":[],"q":[]},"af6":{"ae":["a5A"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ab>"),O:w("a6<z>"),e:w("a6<o2>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ac<o2>"),a:w("ac<@>"),P:w("Y<o,@>"),f:w("Y<@,@>"),w:w("nY"),_:w("CI"),k:w("o2"),N:w("o"),Y:w("bn<a9>"),W:w("dz<o>"),J:w("j6<K>"),j:w("j6<q9?>"),E:w("x5<cK>"),q:w("WI"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Y1=new A.N(983224,"MaterialIcons",!1)
D.aNs=new A.a8(D.Y1,48,B.bm,null,null,null)
D.cIC=new A.S(!0,B.ci,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cPZ=new A.B("Powered off",null,D.cIC,null,null,null,null,null,null,null,null,null)
D.bIt=w([D.aNs,B.O,D.cPZ],x.p)
D.ayA=new A.f4(B.ak,B.i,B.a2,B.o,null,B.r,null,0,D.bIt,null)
D.arq=new A.dv(B.Y,null,null,D.ayA,null)
D.cC3=new A.ai(18,18,B.Rl,null)
D.arE=new A.dv(B.Y,null,null,D.cC3,null)
D.asq=new A.hw(2,null,null,null,null,B.a8,null,null,null,null)
D.avh=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.avO=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.axm=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aB_=new A.V(0,3,0,3)
D.aB8=new A.V(10,0,10,88)
D.aBw=new A.V(12,6,12,10)
D.aBL=new A.V(14,8,14,6)
D.US=new A.V(18,12,18,12)
D.aD1=new A.V(20,8,20,20)
D.Vw=new A.V(8,6,15,8)
D.aJ7=new A.N(983222,"MaterialIcons",!1)
D.aKM=new A.a8(B.jB,26,B.a7,null,null,null)
D.aKP=new A.a8(B.Xe,18,null,null,null,null)
D.aL4=new A.a8(B.r8,14,B.a8,null,null,null)
D.aJn=new A.N(983420,"MaterialIcons",!1)
D.aLQ=new A.a8(D.aJn,14,B.a8,null,null,null)
D.aHx=new A.N(62895,"MaterialIcons",!1)
D.aLU=new A.a8(D.aHx,14,B.a8,null,null,null)
D.aP_=new A.a8(B.jA,20,null,null,null,null)
D.aPg=new A.a8(B.fZ,16,null,null,null,null)
D.bLT=w([B.aL,B.Z],x.O)
D.ZG=new A.an(B.aN,B.aT,B.J,D.bLT,null,null)
D.cvP=new A.aO("NGMY OS","14.2.1")
D.cuG=new A.aO("VirtualDroid","13.8.4")
D.cuF=new A.aO("NGMY OS","15.0.0")
D.cvo=new A.aO("VirtualDroid","14.1.2")
D.cuD=new A.aO("NGMY Tab OS","12.9.7")
D.cuB=new A.aO("NGMY OS","13.5.3")
D.cuq=new A.aO("VirtualDroid","15.2.0")
D.cv1=new A.aO("NGMY OS","14.8.1")
D.cvu=new A.aO("NGMY Tab OS","13.2.4")
D.cvZ=new A.aO("VirtualDroid","12.6.9")
D.cum=new A.aO("NGMY OS","16.0.1")
D.cud=new A.aO("VirtualDroid","14.9.0")
D.cvH=new A.aO("NGMY Tab OS","14.0.3")
D.cuP=new A.aO("NGMY OS","13.1.8")
D.cul=new A.aO("VirtualDroid","13.4.5")
D.cuA=new A.aO("NGMY OS","15.3.2")
D.cvv=new A.aO("NGMY Tab OS","12.4.1")
D.cvJ=new A.aO("VirtualDroid","16.1.0")
D.cv0=new A.aO("NGMY OS","14.4.6")
D.cvQ=new A.aO("VirtualDroid","15.0.8")
D.bL9=w([D.cvP,D.cuG,D.cuF,D.cvo,D.cuD,D.cuB,D.cuq,D.cv1,D.cvu,D.cvZ,D.cum,D.cud,D.cvH,D.cuP,D.cul,D.cuA,D.cvv,D.cvJ,D.cv0,D.cvQ],A.b6("a6<+(o,o)>"))
D.cy0=new A.eE(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cxz=new A.eE(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cxu=new A.eE(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cxD=new A.eE(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cxq=new A.eE(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cxF=new A.eE(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cy2=new A.eE(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cxr=new A.eE(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cxy=new A.eE(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cxH=new A.eE(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cxp=new A.eE(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cxV=new A.eE(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cxS=new A.eE(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cxx=new A.eE(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cxP=new A.eE(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cxO=new A.eE(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cxo=new A.eE(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cxC=new A.eE(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cxM=new A.eE(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cxR=new A.eE(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a55=w([D.cy0,D.cxz,D.cxu,D.cxD,D.cxq,D.cxF,D.cy2,D.cxr,D.cxy,D.cxH,D.cxp,D.cxV,D.cxS,D.cxx,D.cxP,D.cxO,D.cxo,D.cxC,D.cxM,D.cxR],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bTO=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ack=new C.Jq(0,"youtube")
D.acl=new C.Jq(1,"tiktok")
D.ML=new C.Jq(2,"instagram")
D.acm=new C.Jq(3,"facebook")
D.cnE=new C.Jq(4,"other")
D.cBE=new A.ai(3,null,null,null)
D.cCo=new A.iH(4,10,8,0.52,null)
D.cRe=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cFN=new A.aU(D.cRe,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.y,null)
D.cIZ=new A.S(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cR2=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d1r=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d2e=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d2j=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.d8K=new C.aKz(null)})();(function staticFields(){$.duP=20
$.avt=null
$.blF=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"efE","FY",()=>A.UC(0))
w($,"efF","Ow",()=>A.UC(null))})()};
(a=>{a["86vhYZJniWYZcaU4LXldtUhsC74="]=a.current})($__dart_deferred_initializers__);