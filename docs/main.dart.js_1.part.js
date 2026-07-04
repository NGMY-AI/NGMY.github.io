((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dXL(d,e){A.a5(d,!1).cr(A.e3(new C.d4q(e),!0,null,x.H))},
V9(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V9=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LS()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a5,B.W),t)
w=3
return A.b(A.d0(B.F,new C.d4p(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V9)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dFx(r)
if(q==null){d.F(x.q).f.O(D.bCh)
w=1
break}w=4
return A.b(A.bL(B.fP,null,x.H),$async$V9)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dj4=n
p=C.dFr(n)
n=$.DU()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d8c(q)
d.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V9,v)},
dj7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aP(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aP(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mV(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H6(d){return C.dFA(d)},
dFA(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H6=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$H6)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eS(r,x.f)
k=A.dk(k,new C.bcV(),k.$ti.j("K.E"),x.k)
j=A.V(k).j("aa<K.E>")
i=A.C(new A.aa(k,new C.bcW(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dj9(q)
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
case 9:case 5:o=A.aG(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dj7(A.Q(n,x.N,x.z))
l=C.dj9(A.a([m],x.e))
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
case 18:case 14:q=C.dFy()
w=22
return A.b(C.H5(a3,q),$async$H6)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H6,v)},
dj9(d){var w=A.U(d).j("A<1,m>"),v=new A.A(d,new C.bcN(),w).eq(0),u=new A.A(d,new C.bcO(),w).eq(0),t=new A.A(d,new C.bcP(),w).eq(0),s=new A.A(d,new C.bcQ(),w).eq(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d8d(null,q,u,t,v,s));++q}return r},
aq0(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aq0=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H6(d),$async$aq0)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d5(t,new C.bcR(),s).eq(0)
p=r.d5(t,new C.bcS(),s).eq(0)
o=r.d5(t,new C.bcT(),s).eq(0)
n=r.d5(t,new C.bcU(),s).eq(0)
m=C.d8d(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H5(d,t),$async$aq0)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aq0,v)},
H5(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$H5)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcM(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.ak(s,null)),$async$H5)
case 3:return A.f(null,v)}})
return A.h($async$H5,v)},
dFy(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d8d(w,w,t,s,u,r)
return q},
d8d(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.TT[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TT[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.A(p,new C.bcL(),A.U(p).j("A<1,m>")).fa(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bj(B.n.j0(i.by(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aUE[w]
j=D.aOx[w]
return new C.mV("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dFz(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a0().W())},
dFz(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.j0(d.by(256),16),2,"0")
return B.d.fa(v)},
d4q:function d4q(d){this.a=d},
d4p:function d4p(d,e){this.a=d
this.b=e},
d4l:function d4l(d){this.a=d},
d4m:function d4m(d){this.a=d},
d4n:function d4n(d){this.a=d},
d4o:function d4o(d,e){this.a=d
this.b=e},
Ka:function Ka(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mV:function mV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcV:function bcV(){},
bcW:function bcW(){},
bcN:function bcN(){},
bcO:function bcO(){},
bcP:function bcP(){},
bcQ:function bcQ(){},
bcR:function bcR(){},
bcS:function bcS(){},
bcT:function bcT(){},
bcU:function bcU(){},
bcM:function bcM(){},
bcL:function bcL(){},
H4:function H4(d,e){this.c=d
this.a=e},
aaH:function aaH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvK:function cvK(){},
cvJ:function cvJ(d,e){this.a=d
this.b=e},
cvH:function cvH(d){this.a=d},
cvI:function cvI(d,e){this.a=d
this.b=e},
cvL:function cvL(d){this.a=d},
cvP:function cvP(d){this.a=d},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvO:function cvO(d,e,f){this.a=d
this.b=e
this.c=f},
cvN:function cvN(d,e){this.a=d
this.b=e},
cvM:function cvM(d,e){this.a=d
this.b=e},
cvR:function cvR(d){this.a=d},
Sz:function Sz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBM:function aBM(d,e){this.c=d
this.a=e},
H3:function H3(d,e){this.c=d
this.a=e},
aCK:function aCK(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvE:function cvE(d){this.a=d},
cvF:function cvF(d){this.a=d},
cvG:function cvG(d){this.a=d},
cvD:function cvD(d,e){this.a=d
this.b=e},
cvA:function cvA(d){this.a=d},
cvB:function cvB(d){this.a=d},
cvz:function cvz(d,e){this.a=d
this.b=e},
cvC:function cvC(d){this.a=d},
cvy:function cvy(d){this.a=d},
aJj:function aJj(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJk:function aJk(d,e,f){this.c=d
this.d=e
this.a=f},
aCQ:function aCQ(d,e){this.c=d
this.a=e},
aJi:function aJi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cK9:function cK9(d){this.a=d},
cKa:function cKa(d){this.a=d},
aE_:function aE_(d){this.a=d},
ay7:function ay7(d,e){this.c=d
this.a=e},
dFx(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dFw(v)
if(u!=null)return new C.oW(w,C.d8b(u,!1),D.a_K,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dFv(v)
if(t!=null)return new C.oW(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_L,"TikTok",q)
s=C.dFu(w,v)
if(s!=null)return s
r=C.dFt(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oW(w,w,D.bmA,"Video",q)
return q},
dFu(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/reel/"+w+u,D.H3,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cW(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/p/"+w+u,D.H3,t,null)}return null},
dFt(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oW(d,"https://www.facebook.com/plugins/video.php?href="+A.eB(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_M,"Facebook",null)},
dFw(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cW(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dFv(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cW(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
H7:function H7(d,e){this.a=d
this.b=e},
oW:function oW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1C:function a1C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCL:function aCL(d,e){var _=this
_.d=$
_.cP$=d
_.aR$=e
_.c=_.a=null},
aE3:function aE3(d,e){this.c=d
this.a=e},
czJ:function czJ(d){this.a=d},
czK:function czK(d){this.a=d},
CG:function CG(d,e){this.c=d
this.a=e},
afi:function afi(){},
dj8(d,e,f,g,h,i){return new C.a1D(i,f,h,e,g,d)},
dWr(d){var w=window
w.toString
A.fN(w,"message",new C.d0D(d),!1,x._)},
a1D:function a1D(d,e,f,g,h,i){var _=this
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
cvS:function cvS(d){this.a=d},
cw_:function cw_(d){this.a=d},
cvY:function cvY(d){this.a=d},
cvW:function cvW(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvU:function cvU(d){this.a=d},
cvZ:function cvZ(d){this.a=d},
cvV:function cvV(d){this.a=d},
cvT:function cvT(d){this.a=d},
d0D:function d0D(d){this.a=d},
dj2(){var w,v,u
try{v=A.yj()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d8b(d,e){var w=C.dj2(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eB(2,w,B.aP,!1))
v.push("widget_referrer="+A.eB(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d8a(d){var w=A.aq(y.c,!0,!1,!1,!1).cW(d)
return w==null?null:w.b[1]},
dj3(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dFq(d,e,f){var w,v,u=C.d8a(d)
if(u!=null){if(f){w=C.dj2()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dj3(C.d8b(u,e))}return C.dj3(d)},
dFr(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dFs(d){var w
if($.LS().a==null)return!1
w=$.DU().a
return d>=w&&d<w+4},
dj6(){var w=$.aq_
if(w!=null)w.a7(0)
$.aq_=null
$.DU().sv(0,0)},
dj5(){var w,v,u,t=$.LS()
if(t.a==null)return
w=$.aq_
if(w!=null)w.a7(0)
v=$.dj4
if(v<=4){t=t.a
t.toString
C.d8c(t)
return}w=$.DU()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d8c(t)},
d8c(d){var w=$.aq_
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
default:w=null}$.aq_=A.dn(A.d6(0,0,0,0,0,w),C.dWC())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ka.prototype={
B(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.T(B.R.l(0.25),B.o,1),r=A.Z(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eG,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bP,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.en,w,w,w)}}
C.mV.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H4.prototype={
S(){return new C.aaH(A.a([],x.e))},
ges(){return this.c}}
C.aaH.prototype={
Z(){var w=this
w.a3()
$.DU().aj(0,w.gasd())
C.dWr(w.gbeh())
w.Vo()},
bdH(){if(this.c!=null)this.n(new C.cvK())},
bei(){C.dj5()},
p(){$.DU().V(0,this.gasd())
C.dj6()
$.LS().sv(0,null)
this.a2()},
Vo(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vo=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H6(t.a.c),$async$Vo)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvJ(t,s))
$.bcK=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vo,v)},
RC(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RC=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cvH(t))
w=3
return A.b(C.aq0(t.a.c),$async$RC)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvI(t,s))
$.bcK=J.a3(t.d)
t.c.F(x.q).f.O(A.bj(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RC,v)},
bg9(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.e3(new C.cvL(d),!1,null,x.H))},
bgL(){var w=this.c
w.toString
return C.V9(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.ec:B.bF,s=A.aJ(v,v,v,v,B.Fh,v,v,v,new C.cvP(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bd(A.G(A.a([A.H(new A.I(B.ib,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.P,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aT(!1,B.M,!0,v,A.aW(!1,v,!0,new A.I(B.aK,A.Z(B.eT,B.R,v,v,28),v),B.cc,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgK(),v,v,v,v,v,v,v),B.h,B.F,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.ca(!0,A.y(A.a([new A.I(D.OI,r,v),A.H(w.e?B.la:new A.ir($.LS(),new C.cvQ(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a_,!0,!0)
return A.cd(v,t,s,v,!1,!1,A.akQ(B.R,B.AX,B.n9,D.bZO,w.e?v:new C.cvR(w)),v)}}
C.Sz.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.T(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.cu,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1C(n,!0,!C.dFs(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ik,B.lh,u,u,22),B.am,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vG,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aT(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cv(p,A.hy(A.y(A.a([new C.aBM(o,u),A.H(n,1),A.u(u,A.G(A.a([A.Z(B.ph,B.R.l(0.85),u,u,9),D.byc,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.ac,u,u,u,u,u,D.amN,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.SJ,B.k),u,u,u,B.fc,u,u,u),1),B.am,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.z,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.F,0,u,u,u,u,u,B.a1)}}
C.aBM.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pk,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.ac,w,w,w,w,w,B.Oy,w,w,w)}}
C.H3.prototype={
S(){return new C.aCK()}}
C.aCK.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.ec:B.bF,t=A.aJ(w,w,w,w,B.Fh,w,w,w,new C.cvE(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cd(w,u,A.ca(!0,A.y(A.a([new A.I(D.OI,A.G(A.a([t,A.H(new A.Bd(A.G(A.a([A.H(new A.I(B.ib,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.P,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.M,!0,w,A.aW(!1,w,!0,new A.I(B.aK,A.Z(B.eT,B.R,w,w,28),w),B.cc,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvF(d),w,w,w,w,w,w,w),B.h,B.F,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ir($.LS(),new C.cvG(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a_,!0,!0),w,!1,!1,w,w)}}
C.aJj.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.eq,28),new A.ag(0,B.x,B.q.l(0.45),B.cx,18)],x.V),o=A.T(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dj8(new A.df(v+"_full_"+u,x.W),!1,u,!1,w.gaGP(),v+"_full")
w=v}else w=new C.aCQ(t.r,s)}else w=new C.ay7(m,s)
else w=D.c4g
return A.u(s,A.cv(n,A.hy(A.y(A.a([new C.aJk(m,l,s),A.H(w,1),new C.aJi(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.SJ,B.k),s,r*2.05,s,B.bf,s,s,r)}}
C.aJk.prototype={
B(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dd(r)
r=A.h6(r)
w=new A.de(q,r)
v=w.gGI()===0?12:w.gGI()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eN:B.hA)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lW,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.axi,B.dD,D.aww,B.dD,D.axm],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.am,A.G(A.a([A.Z(B.Fa,B.R.l(0.9),s,s,12),B.dD,A.H(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.ac,s,s,s,s,s,D.anw,s,s,s)}}
C.aCQ.prototype={
B(d){var w=null
return A.u(w,A.aS(A.y(A.a([A.Z(B.xs,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.ez(D.aAI,D.bNx,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aF(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vG,w,w,w,w,w,w,w,w,1/0)}}
C.aJi.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as5(B.Rd,"YouTube",s===0,r,new C.cK9(u))
s=u.as5(B.kz,"Device",s===1,r,new C.cKa(u))
w=r?"Power off":"Power on"
v=r?D.Re:D.aux
return A.u(t,A.G(A.a([q,B.Z,s,B.b3,A.aJ(t,t,t,t,A.Z(v,r?B.b4:B.dB,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cD)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.ac,t,t,t,t,t,D.anj,t,t,t)},
as5(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aX
else w=f?B.R:B.a7
v=f&&g?B.R.l(0.15):B.F
u=A.n(10)
t=g?h:s
return A.H(A.aT(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.I(B.ls,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aE_.prototype={
B(d){return D.adI}}
C.ay7.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jX,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qz("Serial",u.c),q=w.qz("Model",u.d),p=w.qz("Device ID",u.e),o=w.qz("IMEI",u.r),n=w.qz("MAC",u.f),m=w.qz("OS",u.w+" "+u.x),l=w.qz("Location",u.y+", "+u.z),k=w.qz("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qz("Timezone",u.at)
u=u.ax
return A.e2(A.a([t,B.am,s,B.U,r,q,p,o,n,m,l,k,j,w.qz("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aK,v,v,B.a0,!1)},
qz(d,e){var w=null
return new A.I(B.c_,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c1,A.j(e,w,w,w,w,w,w,D.bFi,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H7.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oW.prototype={
gaGP(){var w=this.c
return w===D.a_K||w===D.a_L||w===D.H3||w===D.a_M}}
C.a1C.prototype={
S(){return new C.aCL(null,null)}}
C.aCL.prototype={
Z(){this.a3()
var w=A.bE(null,B.rq,null,1,null,this)
w.no(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQi()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dP(t,new A.t(t,t,t,t,t,new A.ap(B.cY,B.c5,B.B,A.a([B.F,B.q.l(0.55)],x.O),t,t),B.k),B.bB),q=x.Y,p=u.d
p===$&&A.c()
p=A.ct(B.i6,p,t)
w=B.c.l(0.92)
q=A.aS(new A.d_(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bk.T>")),!1,A.Z(B.ik,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lh
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aE3(s,t),r,q,A.b6(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b6(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b6(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aK(B.a6,t,B.aT,B.m,s,t)}}
C.aE3.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kD(u,new C.czJ(this),B.bx,!0,w,w,new C.czK(this),w)
return new C.CG(v,w)}}
C.CG.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.rb,B.Lm],x.O),B.ik)
break
case 1:w=new A.aI(A.a([B.vG,D.ahG],x.O),B.jF)
break
case 2:w=new A.aI(A.a([D.ajb,D.ahf],x.O),B.xB)
break
case 3:w=new A.aI(A.a([B.P,B.cF],x.O),B.xF)
break
case 4:w=new A.aI(A.a([B.ac,B.aj],x.O),B.n5)
break
default:w=u}v=w.a
return A.u(u,A.aS(A.Z(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.al,B.au,B.B,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afi.prototype={
p(){var w=this,v=w.aR$
if(v!=null)v.V(0,w.gdu())
w.aR$=null
w.a2()},
bp(){this.bF()
this.bD()
this.dv()}}
C.a1D.prototype={
S(){return new C.aaI()}}
C.aaI.prototype={
bwZ(d,e){var w=C.d8a(d)
if(w!=null)return C.d8b(w,e)
return d},
a3I(d,e){var w,v=this,u=C.d8a(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwZ(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dFq(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buS(){var w,v=this
if(v.w)return
v.n(new C.cvS(v))
w=v.e
if(w!=null)v.a3I(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aL()
u.d=w
try{$.DV()
$.op().rP(w,new C.cw_(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvT(v))
w=v.e
w.toString
v.a3I(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Rt,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hy(A.aS(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yn(n,B.pW,w)],v)
if(o.f)w.push(A.hy(A.aS(new A.an(28,28,D.aeB,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.T(B.aX,B.o,1)
q=A.Z(B.Fd,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eH(0,A.aT(!1,B.M,!0,n,A.aW(!1,n,!0,A.aS(A.u(n,A.G(A.a([q,B.Z,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O5,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuR(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aK(B.a6,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mV)","~()","H4(R)","mV(X<@,@>)","a0(mV)","X<m,@>(mV)","aw<~>()","H3(R)","ir<S>(R,oW?,o?)","Sz(R,S)","rb(R,oW?,o?)","CG(R,ak,dw?)"])
C.d4q.prototype={
$1(d){return new C.H4(this.a,null)},
$S:z+2}
C.d4p.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.ax(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cK,B.P],j):A.a([B.c,B.aa],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.eq,32)],x.V),g=A.T(m?B.bt:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.awa,B.h,n,n,new A.t(B.R.l(0.18),n,A.T(B.R.l(0.45),B.o,1),n,n,n,B.ak),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.am,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.eF,w,A.aJ(n,n,n,n,A.Z(B.ct,m?B.a7:B.ci,n,n,n),n,n,n,new C.d4l(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a2,B.a4,B.B,j,n,n),B.k),n,n,n,B.Oh,n,n,n)
e=A.eb(B.bW,A.a([new C.Ka("YouTube",B.F9,m,n),new C.Ka("TikTok",B.jF,m,n),new C.Ka("Instagram",B.xB,m,n),new C.Ka("Facebook",B.xF,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bA:B.fL,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.bF
r=A.Z(B.jE,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bt:B.ax
u=A.y(A.a([e,B.ar,A.au(n,B.y,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bl(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Kd),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.G,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.O,n,n,n,n)],v),B.ag,B.e,B.f,0,B.l)
e=A.j1(D.awe,D.bYV,new C.d4m(d),A.iF(n,n,n,n,n,n,n,n,n,n,n,m?B.aE:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dP(A.cv(f,A.y(A.a([j,new A.I(D.aoB,u,n),new A.I(D.aoN,A.G(A.a([e,B.b3,A.bQ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a3,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d4n(d),n,n),B.Z,A.dF(D.aAp,D.bZI,new C.d4o(d,w),A.br(B.R,n,n,n,B.c,n,D.O5,n,new A.bB(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ag,B.e,B.Q,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.al,B.au,B.B,i,n,n),B.k),B.bB),n)},
$S:72}
C.d4l.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4m.prototype={
$0(){C.dj6()
$.LS().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d4n.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4o.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcV.prototype={
$1(d){return C.dj7(A.Q(d,x.N,x.z))},
$S:z+3}
C.bcW.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcN.prototype={
$1(d){return d.c},
$S:z+0}
C.bcO.prototype={
$1(d){return d.r},
$S:z+0}
C.bcP.prototype={
$1(d){return d.f},
$S:z+0}
C.bcQ.prototype={
$1(d){return d.at},
$S:z+0}
C.bcR.prototype={
$1(d){return d.c},
$S:z+0}
C.bcS.prototype={
$1(d){return d.r},
$S:z+0}
C.bcT.prototype={
$1(d){return d.f},
$S:z+0}
C.bcU.prototype={
$1(d){return d.at},
$S:z+0}
C.bcM.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bcL.prototype={
$1(d){return B.a.bj(B.n.j0(d,16),2,"0").toUpperCase()},
$S:75}
C.cvK.prototype={
$0(){},
$S:0}
C.cvJ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvH.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvI.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvL.prototype={
$1(d){return new C.H3(this.a,null)},
$S:z+7}
C.cvP.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvQ.prototype={
$3(d,e,f){return new A.ir($.DU(),new C.cvO(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvO.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AF(d,k,x.Q)
w=w==null?k:w.gkp()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.T(B.R.l(0.35),B.o,1)
q=A.Z(B.ik,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DU().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Z,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.P,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cn,B.eo,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cv(s,new A.iP(1.7777777777777777,C.dj8(new A.df("fleet_master_"+r,x.W),!0,r,!0,j.gaGP(),"fleet_master"),k),B.as),B.U],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wu(0,B.m,k,B.r,k,k,k,k,!1,k,B.a0,!1,A.a([new A.jH(new A.I(B.wN,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.o5(D.amX,A.atu(new A.n4(new C.cvN(i,j),J.a3(i.d),!1,!0,!0,A.tt(),k),D.byU),k)],w))},
$S:1602}
C.cvN.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sz(v,e,J.a3(w.d),new C.cvM(w,v),this.b,null)},
$S:z+9}
C.cvM.prototype={
$0(){return this.a.bg9(this.b)},
$S:0}
C.cvR.prototype={
$0(){this.a.RC()
return null},
$S:0}
C.cvE.prototype={
$0(){return A.a5(this.a,!1).eb()},
$S:0}
C.cvF.prototype={
$0(){C.V9(this.a,$.bcK)
return null},
$S:0}
C.cvG.prototype={
$3(d,e,f){return A.fK(new C.cvD(this.a,e))},
$S:z+10}
C.cvD.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aS(A.cj(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.ar,new C.aJj(u,s.a.c,s.e,s.d,new C.cvA(s),new C.cvB(s),new C.cvC(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wP,v,v,B.a0),v,v,v)},
$S:1603}
C.cvA.prototype={
$0(){var w=this.a.c
w.toString
C.V9(w,$.bcK)
return null},
$S:0}
C.cvB.prototype={
$1(d){var w=this.a
return w.n(new C.cvz(w,d))},
$S:36}
C.cvz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvC.prototype={
$0(){var w=this.a
return w.n(new C.cvy(w))},
$S:0}
C.cvy.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cK9.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cKa.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czJ.prototype={
$3(d,e,f){return new C.CG(this.a.c,null)},
$S:z+11}
C.czK.prototype={
$3(d,e,f){if(f==null)return e
return new A.aK(B.a6,null,B.aT,B.m,A.a([new C.CG(this.a.c,null),D.adY],x.p),null)},
$C:"$3",
$R:3,
$S:508}
C.cvS.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cw_.prototype={
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
w.a3I(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fN(v,"load",new C.cvY(w),!1,u)
v=w.e
v.toString
A.fN(v,"error",new C.cvZ(w),!1,u)
w=w.e
w.toString
return w},
$S:541}
C.cvY.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvW(w))
A.bL(B.D,new C.cvX(w),x.H)}},
$S:43}
C.cvW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvX.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvU(w))},
$S:12}
C.cvU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvV(w))},
$S:43}
C.cvV.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvT.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d0D.prototype={
$1(d){var w,v,u,t,s=new A.Cf([],[]).G0(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1604};(function aliases(){var w=C.afi.prototype
w.aQi=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaH.prototype,"gasd","bdH",1)
w(u,"gbeh","bei",1)
w(u,"gbgK","bgL",6)
w(C.aaI.prototype,"gbuR","buS",1)
v(C,"dWC","dj5",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wm,[C.d4q,C.d4p,C.bcV,C.bcW,C.bcN,C.bcO,C.bcP,C.bcQ,C.bcR,C.bcS,C.bcT,C.bcU,C.bcM,C.bcL,C.cvL,C.cvQ,C.cvO,C.cvG,C.cvB,C.czJ,C.czK,C.cw_,C.cvY,C.cvZ,C.d0D])
v(A.WE,[C.d4l,C.d4m,C.d4n,C.d4o,C.cvK,C.cvJ,C.cvH,C.cvI,C.cvP,C.cvM,C.cvR,C.cvE,C.cvF,C.cvA,C.cvz,C.cvC,C.cvy,C.cK9,C.cKa,C.cvS,C.cvW,C.cvX,C.cvU,C.cvV,C.cvT])
v(A.az,[C.Ka,C.Sz,C.aBM,C.aJj,C.aJk,C.aCQ,C.aJi,C.aE_,C.ay7,C.aE3,C.CG])
v(A.ak,[C.mV,C.oW])
v(A.ac,[C.H4,C.H3,C.a1C,C.a1D])
v(A.ad,[C.aaH,C.aCK,C.afi,C.aaI])
v(A.WF,[C.cvN,C.cvD])
u(C.H7,A.az0)
u(C.aCL,C.afi)
w(C.afi,A.e4)})()
A.dmn(b.typeUniverse,JSON.parse('{"H4":{"ac":[],"o":[]},"Sz":{"az":[],"o":[]},"H3":{"ac":[],"o":[]},"Ka":{"az":[],"o":[]},"aaH":{"ad":["H4"]},"aBM":{"az":[],"o":[]},"aCK":{"ad":["H3"]},"aJj":{"az":[],"o":[]},"aJk":{"az":[],"o":[]},"aCQ":{"az":[],"o":[]},"aJi":{"az":[],"o":[]},"aE_":{"az":[],"o":[]},"ay7":{"az":[],"o":[]},"a1C":{"ac":[],"o":[]},"CG":{"az":[],"o":[]},"aCL":{"ad":["a1C"]},"aE3":{"az":[],"o":[]},"a1D":{"ac":[],"o":[]},"aaI":{"ad":["a1D"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mV>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<S>"),X:w("ae<mV>"),a:w("ae<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mS"),_:w("AC"),k:w("mV"),N:w("m"),Y:w("bn<a8>"),W:w("df<m>"),J:w("ir<S>"),j:w("ir<oW?>"),E:w("vm<cx>"),q:w("Tg"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Re=new A.M(983224,"MaterialIcons",!1)
D.ayU=new A.a6(D.Re,48,B.aX,null,null,null)
D.bEX=new A.O(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMs=new A.x("Powered off",null,D.bEX,null,null,null,null,null,null,null,null,null)
D.aMB=w([D.ayU,B.C,D.bMs],x.p)
D.akm=new A.fl(B.a0,B.e,B.Q,B.i,null,B.l,null,0,D.aMB,null)
D.adI=new A.dh(B.L,null,null,D.akm,null)
D.byA=new A.an(18,18,B.L5,null)
D.adY=new A.dh(B.L,null,null,D.byA,null)
D.aeB=new A.h9(2,null,null,null,null,B.T,null,null,null,null)
D.ahf=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahG=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajb=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amN=new A.W(0,3,0,3)
D.amX=new A.W(10,0,10,88)
D.anj=new A.W(12,6,12,10)
D.anw=new A.W(14,8,14,6)
D.O5=new A.W(18,12,18,12)
D.aoB=new A.W(20,18,20,8)
D.aoN=new A.W(20,8,20,20)
D.OI=new A.W(8,6,15,8)
D.aux=new A.M(983222,"MaterialIcons",!1)
D.awa=new A.a6(B.ik,26,B.R,null,null,null)
D.awe=new A.a6(B.Qo,18,null,null,null,null)
D.aww=new A.a6(B.pk,14,B.T,null,null,null)
D.auN=new A.M(983420,"MaterialIcons",!1)
D.axi=new A.a6(D.auN,14,B.T,null,null,null)
D.at0=new A.M(62895,"MaterialIcons",!1)
D.axm=new A.a6(D.at0,14,B.T,null,null,null)
D.aAp=new A.a6(B.iU,20,null,null,null,null)
D.aAI=new A.a6(B.eT,16,null,null,null,null)
D.aP2=w([B.aj,B.P],x.O)
D.SJ=new A.ap(B.al,B.au,B.B,D.aP2,null,null)
D.bsv=new A.aI("NGMY OS","14.2.1")
D.brm=new A.aI("VirtualDroid","13.8.4")
D.brl=new A.aI("NGMY OS","15.0.0")
D.bs4=new A.aI("VirtualDroid","14.1.2")
D.brj=new A.aI("NGMY Tab OS","12.9.7")
D.brh=new A.aI("NGMY OS","13.5.3")
D.br6=new A.aI("VirtualDroid","15.2.0")
D.brI=new A.aI("NGMY OS","14.8.1")
D.bsa=new A.aI("NGMY Tab OS","13.2.4")
D.bsF=new A.aI("VirtualDroid","12.6.9")
D.br2=new A.aI("NGMY OS","16.0.1")
D.bqU=new A.aI("VirtualDroid","14.9.0")
D.bsn=new A.aI("NGMY Tab OS","14.0.3")
D.brv=new A.aI("NGMY OS","13.1.8")
D.br1=new A.aI("VirtualDroid","13.4.5")
D.brg=new A.aI("NGMY OS","15.3.2")
D.bsb=new A.aI("NGMY Tab OS","12.4.1")
D.bsp=new A.aI("VirtualDroid","16.1.0")
D.brH=new A.aI("NGMY OS","14.4.6")
D.bsw=new A.aI("VirtualDroid","15.0.8")
D.aOx=w([D.bsv,D.brm,D.brl,D.bs4,D.brj,D.brh,D.br6,D.brI,D.bsa,D.bsF,D.br2,D.bqU,D.bsn,D.brv,D.br1,D.brg,D.bsb,D.bsp,D.brH,D.bsw],A.bf("ab<+(m,m)>"))
D.buH=new A.eh(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buf=new A.eh(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bua=new A.eh(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buj=new A.eh(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bu6=new A.eh(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bul=new A.eh(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buJ=new A.eh(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bu7=new A.eh(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bue=new A.eh(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bun=new A.eh(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bu5=new A.eh(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buB=new A.eh(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buy=new A.eh(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bud=new A.eh(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buv=new A.eh(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.buu=new A.eh(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bu4=new A.eh(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bui=new A.eh(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bus=new A.eh(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bux=new A.eh(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TT=w([D.buH,D.buf,D.bua,D.buj,D.bu6,D.bul,D.buJ,D.bu7,D.bue,D.bun,D.bu5,D.buB,D.buy,D.bud,D.buv,D.buu,D.bu4,D.bui,D.bus,D.bux],A.bf("ab<+(m,m,a8,a8,m)>"))
D.aUE=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_K=new C.H7(0,"youtube")
D.a_L=new C.H7(1,"tiktok")
D.H3=new C.H7(2,"instagram")
D.a_M=new C.H7(3,"facebook")
D.bmA=new C.H7(4,"other")
D.byc=new A.an(3,null,null,null)
D.byU=new A.i9(4,10,8,0.52,null)
D.bNK=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCh=new A.aR(D.bNK,null,null,null,null,null,null,null,null,null,null,null,null,B.D,!1,null,null,null,B.m,null)
D.bFi=new A.O(!0,B.c,null,null,null,null,11,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNx=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bYV=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZI=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZO=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4g=new C.aE_(null)})();(function staticFields(){$.dj4=20
$.aq_=null
$.bcK=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_U","DU",()=>A.Re(0))
w($,"e_V","LS",()=>A.Re(null))})()};
(a=>{a["+liFbnQU6cg2UoVMFiaZJkKpD5E="]=a.current})($__dart_deferred_initializers__);