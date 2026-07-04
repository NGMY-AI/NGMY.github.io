((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dXt(d,e){A.a5(d,!1).cr(A.en(new C.d3Z(e),!0,null,x.H))},
Ve(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Ve=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LY()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ak()
s=new A.ag(new A.aX(n,B.ad,B.a4),t)
w=3
return A.b(A.d9(B.E,new C.d3Y(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Ve)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dFc(r)
if(q==null){d.F(x.q).f.O(D.bC2)
w=1
break}w=4
return A.b(A.bK(B.fX,null,x.H),$async$Ve)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.diF=n
p=C.dF6(n)
n=$.DZ()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d7L(q)
d.F(x.q).f.O(A.bp(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Ve,v)},
diI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aT(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aT(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.n_(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hc(d){return C.dFf(d)},
dFf(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hc=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Hc)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aC(0,a0,null)
w=x.a.b(r)&&J.cA(r)?10:11
break
case 10:k=J.eG(r,x.f)
k=A.dj(k,new C.be9(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.C(new A.af(k,new C.bea(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.diK(q)
w=12
return A.b(C.Hb(a3,p),$async$Hc)
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
n=B.w.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.diI(A.S(n,x.N,x.z))
l=C.diK(A.a([m],x.e))
w=21
return A.b(C.Hb(a3,l),$async$Hc)
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
case 18:case 14:q=C.dFd()
w=22
return A.b(C.Hb(a3,q),$async$Hc)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Hc,v)},
diK(d){var w=A.V(d).j("B<1,m>"),v=new A.B(d,new C.be1(),w).ek(0),u=new A.B(d,new C.be2(),w).ek(0),t=new A.B(d,new C.be3(),w).ek(0),s=new A.B(d,new C.be4(),w).ek(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d7M(null,q,u,t,v,s));++q}return r},
aqn(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aqn=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hc(d),$async$aqn)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d0(t,new C.be5(),s).ek(0)
p=r.d0(t,new C.be6(),s).ek(0)
o=r.d0(t,new C.be7(),s).ek(0)
n=r.d0(t,new C.be8(),s).ek(0)
m=C.d7M(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hb(d,t),$async$aqn)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aqn,v)},
Hb(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Hb=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Hb)
case 2:u=g
t=B.a.i(d)
s=J.b2(e,new C.be0(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$Hb)
case 3:return A.f(null,v)}})
return A.h($async$Hb,v)},
dFd(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dR(20,x.k)
for(w=0;w<20;++w)q[w]=C.d7M(w,w,t,s,u,r)
return q},
d7M(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.j7(),h=d==null,g=D.U0[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U0[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.B(p,new C.be_(),A.V(p).j("B<1,m>")).eY(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.eY(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.n.j4(i.bx(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aUq[w]
j=D.aOk[w]
return new C.n_("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.n.q(e+1),2,"0"),u,k,C.dFe(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.M(Date.now(),0,!1).a0().Y())},
dFe(d,e){var w,v=J.dR(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.n.j4(d.bx(256),16),2,"0")
return B.d.eY(v)},
d3Z:function d3Z(d){this.a=d},
d3Y:function d3Y(d,e){this.a=d
this.b=e},
d3U:function d3U(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3X:function d3X(d,e){this.a=d
this.b=e},
Kj:function Kj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
n_:function n_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
be9:function be9(){},
bea:function bea(){},
be1:function be1(){},
be2:function be2(){},
be3:function be3(){},
be4:function be4(){},
be5:function be5(){},
be6:function be6(){},
be7:function be7(){},
be8:function be8(){},
be0:function be0(){},
be_:function be_(){},
Ha:function Ha(d,e){this.c=d
this.a=e},
aaW:function aaW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cv8:function cv8(){},
cv7:function cv7(d,e){this.a=d
this.b=e},
cv5:function cv5(d){this.a=d},
cv6:function cv6(d,e){this.a=d
this.b=e},
cv9:function cv9(d){this.a=d},
cvd:function cvd(d){this.a=d},
cve:function cve(d,e){this.a=d
this.b=e},
cvc:function cvc(d,e,f){this.a=d
this.b=e
this.c=f},
cvb:function cvb(d,e){this.a=d
this.b=e},
cva:function cva(d,e){this.a=d
this.b=e},
cvf:function cvf(d){this.a=d},
SD:function SD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCd:function aCd(d,e){this.c=d
this.a=e},
H9:function H9(d,e){this.c=d
this.a=e},
aDa:function aDa(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cv2:function cv2(d){this.a=d},
cv3:function cv3(d){this.a=d},
cv4:function cv4(d){this.a=d},
cv1:function cv1(d,e){this.a=d
this.b=e},
cuZ:function cuZ(d){this.a=d},
cv_:function cv_(d){this.a=d},
cuY:function cuY(d,e){this.a=d
this.b=e},
cv0:function cv0(d){this.a=d},
cuX:function cuX(d){this.a=d},
aJP:function aJP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJQ:function aJQ(d,e,f){this.c=d
this.d=e
this.a=f},
aDg:function aDg(d,e){this.c=d
this.a=e},
aJO:function aJO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJE:function cJE(d){this.a=d},
cJF:function cJF(d){this.a=d},
aEr:function aEr(d){this.a=d},
ayz:function ayz(d,e){this.c=d
this.a=e},
dFc(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dFb(v)
if(u!=null)return new C.p6(w,C.d7K(u,!1),D.a_T,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dFa(v)
if(t!=null)return new C.p6(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_U,"TikTok",q)
s=C.dF9(w,v)
if(s!=null)return s
r=C.dF8(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p6(w,w,D.bm6,"Video",q)
return q},
dF9(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p6(d,"https://www.instagram.com/reel/"+w+u,D.H8,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p6(d,"https://www.instagram.com/p/"+w+u,D.H8,t,null)}return null},
dF8(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p6(d,"https://www.facebook.com/plugins/video.php?href="+A.eT(2,d,B.aQ,!1)+"&show_text=false&width=734",D.a_V,"Facebook",null)},
dFb(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dFa(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
Hd:function Hd(d,e){this.a=d
this.b=e},
p6:function p6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1T:function a1T(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDb:function aDb(d,e){var _=this
_.d=$
_.cS$=d
_.aQ$=e
_.c=_.a=null},
aEw:function aEw(d,e){this.c=d
this.a=e},
cz7:function cz7(d){this.a=d},
cz8:function cz8(d){this.a=d},
CQ:function CQ(d,e){this.c=d
this.a=e},
afB:function afB(){},
diJ(d,e,f,g,h,i){return new C.a1U(i,f,h,e,g,d)},
dW8(d){var w=window
w.toString
A.fP(w,"message",new C.d03(d),!1,x._)},
a1U:function a1U(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaX:function aaX(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvg:function cvg(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvk:function cvk(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvi:function cvi(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvj:function cvj(d){this.a=d},
cvh:function cvh(d){this.a=d},
d03:function d03(d){this.a=d},
diD(){var w,v,u
try{v=A.yv()
w=v.gpZ(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d7K(d,e){var w=C.diD(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eT(2,w,B.aQ,!1))
v.push("widget_referrer="+A.eT(2,w,B.aQ,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d7J(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
diE(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dF5(d,e,f){var w,v,u=C.d7J(d)
if(u!=null){if(f){w=C.diD()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.diE(C.d7K(u,e))}return C.diE(d)},
dF6(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dF7(d){var w
if($.LY().a==null)return!1
w=$.DZ().a
return d>=w&&d<w+4},
diH(){var w=$.aqm
if(w!=null)w.a7(0)
$.aqm=null
$.DZ().sv(0,0)},
diG(){var w,v,u,t=$.LY()
if(t.a==null)return
w=$.aqm
if(w!=null)w.a7(0)
v=$.diF
if(v<=4){t=t.a
t.toString
C.d7L(t)
return}w=$.DZ()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d7L(t)},
d7L(d){var w=$.aqm
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
default:w=null}$.aqm=A.dn(A.d6(0,0,0,0,0,w),C.dWj())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kj.prototype={
B(d){var w=null,v=this.e,u=v?B.al:B.c,t=A.n(20),s=A.T(B.T.l(0.25),B.o,1),r=A.Z(this.d,B.T,w,w,14)
return A.t(w,A.G(A.a([r,B.eH,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bA,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.f,w,w,new A.r(u,w,s,t,w,w,B.k),w,w,w,B.eA,w,w,w)}}
C.n_.prototype={
a8(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ha.prototype={
S(){return new C.aaW(A.a([],x.e))},
gdR(){return this.c}}
C.aaW.prototype={
Z(){var w=this
w.a3()
$.DZ().ak(0,w.gas_())
C.dW8(w.gbe3())
w.Vb()},
bdt(){if(this.c!=null)this.p(new C.cv8())},
be4(){C.diG()},
n(){$.DZ().W(0,this.gas_())
C.diH()
$.LY().sv(0,null)
this.a2()},
Vb(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vb=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hc(t.a.c),$async$Vb)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cv7(t,s))
$.bdZ=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vb,v)},
Rn(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rn=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cv5(t))
w=3
return A.b(C.aqn(t.a.c),$async$Rn)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cv6(t,s))
$.bdZ=J.a3(t.d)
t.c.F(x.q).f.O(A.bp(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rn,v)},
bfW(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.en(new C.cv9(d),!1,null,x.H))},
bgu(){var w=this.c
w.toString
return C.Ve(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.u,t=u?B.ea:B.bB,s=A.aH(v,v,v,v,B.Fm,v,v,v,new C.cvd(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bp(A.G(A.a([A.H(new A.I(B.i7,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.t,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.K,!0,v,A.aV(!1,v,!0,new A.I(B.aM,A.Z(B.eU,B.T,v,v,28),v),B.c7,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgt(),v,v,v,v,v,v,v),B.f,B.E,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.h,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.h,0,v,v)
s=A.c2(!0,A.y(A.a([new A.I(D.P0,r,v),A.H(w.e?B.kh:new A.it($.LY(),new C.cve(w,u),v,v,x.j),1)],q),B.i,B.e,B.h,0,B.l),!1,B.Y,!0,!0)
return A.c7(v,t,s,v,!1,!1,A.al6(B.T,B.AT,B.kG,D.bZh,w.e?v:new C.cvf(w)),v)}}
C.SD.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.T(B.c.l(0.1),B.o,1),q=A.a([new A.ad(0,B.x,B.T.l(0.18),B.cu,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1T(n,!0,!C.dF7(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.t(u,A.y(A.a([A.Z(B.ig,B.lr,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.h,0,B.l),B.f,B.vJ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.K,!0,u,A.aV(!1,t,!0,A.y(A.a([A.H(A.t(u,A.cs(p,A.fR(A.y(A.a([new C.aCd(o,u),A.H(n,1),A.t(u,A.G(A.a([A.Z(B.tf,B.T.l(0.85),u,u,9),D.bxW,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.h,0,u,u),B.f,B.a8,u,u,u,u,u,D.amU,u,u,u)],w),B.i,B.e,B.h,0,B.l),B.q,!0),B.at),B.f,u,u,new A.r(u,u,r,s,q,D.SR,B.k),u,u,u,B.eS,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.h,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.f,B.E,0,u,u,u,u,u,B.X)}}
C.aCd.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pi,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.h,0,w,w),B.f,B.a8,w,w,w,w,w,B.OS,w,w,w)}}
C.H9.prototype={
S(){return new C.aDa()}}
C.aDa.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.u,u=v?B.ea:B.bB,t=A.aH(w,w,w,w,B.Fm,w,w,w,new C.cv2(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c7(w,u,A.c2(!0,A.y(A.a([new A.I(D.P0,A.G(A.a([t,A.H(new A.Bp(A.G(A.a([A.H(new A.I(B.i7,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.t,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.K,!0,w,A.aV(!1,w,!0,new A.I(B.aM,A.Z(B.eU,B.T,w,w,28),w),B.c7,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cv3(d),w,w,w,w,w,w,w),B.f,B.E,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.h,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.h,0,w,w),w),A.H(new A.it($.LY(),new C.cv4(this),w,w,x.j),1)],r),B.i,B.e,B.h,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJP.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ad(0,B.x,B.T.l(0.35),B.e4,28),new A.ad(0,B.x,B.q.l(0.45),B.co,18)],x.V),o=A.T(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.diJ(new A.de(v+"_full_"+u,x.W),!1,u,!1,w.gaGJ(),v+"_full")
w=v}else w=new C.aDg(t.r,s)}else w=new C.ayz(m,s)
else w=D.c3N
return A.t(s,A.cs(n,A.fR(A.y(A.a([new C.aJQ(m,l,s),A.H(w,1),new C.aJO(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.h,0,B.l),B.q,!0),B.at),B.f,s,s,new A.r(s,s,o,q,p,D.SR,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aJQ.prototype={
B(d){var w,v,u,t,s=null,r=new A.M(Date.now(),0,!1),q=A.dk(r)
r=A.hi(r)
w=new A.dd(q,r)
v=w.gGA()===0?12:w.gGA()
r=B.a.bh(B.n.q(r),2,"0")
q=(q<12?B.eQ:B.hG)===B.eQ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.l6,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bf,D.axj,B.dx,D.awy,B.dx,D.axn],t),B.i,s,B.e,B.h,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.Fd,B.T.l(0.9),s,s,12),B.dx,A.H(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.h,0,s,s)],t))
return A.t(s,A.y(q,B.i,B.e,B.h,0,B.l),B.f,B.a8,s,s,s,s,s,D.anD,s,s,s)}}
C.aDg.prototype={
B(d){var w=null
return A.t(w,A.aN(A.y(A.a([A.Z(B.xt,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ar,A.eu(D.aAI,D.bNa,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aE(B.T.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.f,B.vJ,w,w,w,w,w,w,w,w,1/0)}}
C.aJO.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arS(B.Rq,"YouTube",s===0,r,new C.cJE(u))
s=u.arS(B.jK,"Device",s===1,r,new C.cJF(u))
w=r?"Power off":"Power on"
v=r?D.Rr:D.auE
return A.t(t,A.G(A.a([q,B.a0,s,B.b3,A.aH(t,t,t,t,A.Z(v,r?B.b6:B.eF,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cG)],x.p),B.i,t,B.e,B.h,0,t,t),B.f,B.a8,t,t,t,t,t,D.anq,t,t,t)},
arS(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.T:B.a6
v=f&&g?B.T.l(0.15):B.E
u=A.n(10)
t=g?h:s
return A.H(A.aK(!1,B.K,!0,u,A.aV(!1,A.n(10),!0,new A.I(B.lC,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.f,v,0,s,s,s,s,s,B.X),1)}}
C.aEr.prototype={
B(d){return D.adM}}
C.ayz.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.k2,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qA("Serial",u.c),q=w.qA("Model",u.d),p=w.qA("Device ID",u.e),o=w.qA("IMEI",u.r),n=w.qA("MAC",u.f),m=w.qA("OS",u.w+" "+u.x),l=w.qA("Location",u.y+", "+u.z),k=w.qA("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qA("Timezone",u.at)
u=u.ax
return A.eh(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qA("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aM,v,v,B.a_,!1)},
qA(d,e){var w=null
return new A.I(B.c2,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bW,A.j(e,w,w,w,w,w,w,D.bF6,w,w,w)],x.p),B.v,B.e,B.h,0,B.l),w)}}
C.Hd.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p6.prototype={
gaGJ(){var w=this.c
return w===D.a_T||w===D.a_U||w===D.H8||w===D.a_V}}
C.a1T.prototype={
S(){return new C.aDb(null,null)}}
C.aDb.prototype={
Z(){this.a3()
var w=A.bD(null,B.ry,null,1,null,this)
w.lM(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aQa()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dI(t,new A.r(t,t,t,t,t,new A.ao(B.cP,B.c5,B.y,A.a([B.E,B.q.l(0.55)],x.O),t,t),B.k),B.bu),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.hf,p,t)
w=B.c.l(0.92)
q=A.aN(new A.cS(new A.b0(p,new A.bj(0.72,1,q),q.j("b0<bh.T>")),!1,A.Z(B.ig,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lr
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEw(s,t),r,q,A.aZ(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.r(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.aZ(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.aZ(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.a2,t,B.aS,B.m,s,t)}}
C.aEw.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l6(u,new C.cz7(this),B.bt,!0,w,w,new C.cz8(this),w)
return new C.CQ(v,w)}}
C.CQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.rg,B.Ly],x.O),B.ig)
break
case 1:w=new A.aI(A.a([B.vJ,D.ahK],x.O),B.jM)
break
case 2:w=new A.aI(A.a([D.ajj,D.ahe],x.O),B.xA)
break
case 3:w=new A.aI(A.a([B.N,B.cA],x.O),B.xD)
break
case 4:w=new A.aI(A.a([B.a8,B.al],x.O),B.n7)
break
default:w=u}v=w.a
return A.t(u,A.aN(A.Z(w.b,B.T.l(0.55),u,u,28),u,u,u),B.f,u,u,new A.r(u,u,u,u,u,new A.ao(B.am,B.as,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afB.prototype={
n(){var w=this,v=w.aQ$
if(v!=null)v.W(0,w.gdm())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dn()}}
C.a1U.prototype={
S(){return new C.aaX()}}
C.aaX.prototype={
bwn(d,e){var w=C.d7J(d)
if(w!=null)return C.d7K(w,e)
return d},
a3B(d,e){var w,v=this,u=C.d7J(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwn(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dF5(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bui(){var w,v=this
if(v.w)return
v.p(new C.cvg(v))
w=v.e
if(w!=null)v.a3B(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.E_()
$.oy().rN(w,new C.cvo(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cvh(v))
w=v.e
w.toString
v.a3B(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.RF,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.D,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fR(A.aN(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yz(n,B.pU,w)],v)
if(o.f)w.push(A.fR(A.aN(new A.al(28,28,D.aeC,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.T(B.b_,B.o,1)
q=A.Z(B.Fg,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eL(0,A.aK(!1,B.K,!0,n,A.aV(!1,n,!0,A.aN(A.t(n,A.G(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.f,n,n,new A.r(t,n,r,s,n,n,B.k),n,n,n,D.Oo,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuh(),n,n,n,n,n,n,n),B.f,u,0,n,n,n,n,n,B.X)))}return new A.aF(B.a2,n,B.aS,B.m,w,n)}}
var z=a.updateTypes(["m(n_)","~()","Ha(Q)","n_(X<@,@>)","a0(n_)","X<m,@>(n_)","aw<~>()","H9(Q)","it<P>(Q,p6?,o?)","SD(Q,P)","ro(Q,p6?,o?)","CQ(Q,ai,du?)"])
C.d3Z.prototype={
$1(d){return new C.Ha(this.a,null)},
$S:z+2}
C.d3Y.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.u,l=A.az(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.d5,B.N],j):A.a([B.c,B.aa],j),h=A.a([new A.ad(0,B.x,B.T.l(0.22),B.e4,32)],x.V),g=A.T(m?B.bs:B.T.l(0.18),B.o,1),f=A.n(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a3.l(m?0.18:0.08)],j)
e=A.t(n,D.awe,B.f,n,n,new A.r(B.T.l(0.18),n,A.T(B.T.l(0.45),B.o,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.t,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a9,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.h,0,B.l),1)
j=A.t(n,A.G(A.a([e,B.ef,w,A.aH(n,n,n,n,A.Z(B.ct,m?B.a6:B.cf,n,n,n),n,n,n,new C.d3U(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.h,0,n,n),B.f,n,n,new A.r(n,n,n,n,n,new A.ao(B.Z,B.a1,B.y,j,n,n),B.k),n,n,n,B.D8,n,n,n)
e=A.e4(B.bV,A.a([new C.Kj("YouTube",B.Fc,m,n),new C.Kj("TikTok",B.jM,m,n),new C.Kj("Instagram",B.xA,m,n),new C.Kj("Facebook",B.xD,m,n)],v),B.bQ,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bD:B.fS,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.al:B.bB
r=A.Z(B.jL,B.T.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bs:B.ax
u=A.y(A.a([e,B.aq,A.aB(n,B.B,!0,n,!0,B.m,n,A.aC(),w,n,n,n,n,n,2,A.bq(n,new A.b9(4,q,B.M),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aE(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.n(16),B.Km),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.P,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.I,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.L,n,B.R,n,n,n,n)],v),B.af,B.e,B.h,0,B.l)
e=A.jJ(D.awh,D.bYp,new C.d3V(d),A.j3(n,n,n,n,n,n,n,n,n,n,n,m?B.aO:B.a9,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dI(A.cs(f,A.y(A.a([j,new A.I(B.OA,u,n),new A.I(D.aoU,A.G(A.a([e,B.b3,A.bX(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d3W(d),n,n),B.a0,A.dF(D.aAr,D.bZc,new C.d3X(d,w),A.bu(B.T,n,n,n,B.c,n,D.Oo,n,new A.bB(A.n(14),B.M),n,n,n))],v),B.i,n,B.e,B.h,0,n,n),n)],v),B.af,B.e,B.Q,0,B.l),B.at),new A.r(n,n,g,k,h,new A.ao(B.am,B.as,B.y,i,n,n),B.k),B.bu),n)},
$S:75}
C.d3U.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3V.prototype={
$0(){C.diH()
$.LY().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d3W.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3X.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.be9.prototype={
$1(d){return C.diI(A.S(d,x.N,x.z))},
$S:z+3}
C.bea.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.be1.prototype={
$1(d){return d.c},
$S:z+0}
C.be2.prototype={
$1(d){return d.r},
$S:z+0}
C.be3.prototype={
$1(d){return d.f},
$S:z+0}
C.be4.prototype={
$1(d){return d.at},
$S:z+0}
C.be5.prototype={
$1(d){return d.c},
$S:z+0}
C.be6.prototype={
$1(d){return d.r},
$S:z+0}
C.be7.prototype={
$1(d){return d.f},
$S:z+0}
C.be8.prototype={
$1(d){return d.at},
$S:z+0}
C.be0.prototype={
$1(d){return d.a8()},
$S:z+5}
C.be_.prototype={
$1(d){return B.a.bh(B.n.j4(d,16),2,"0").toUpperCase()},
$S:79}
C.cv8.prototype={
$0(){},
$S:0}
C.cv7.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cv5.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cv6.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cv9.prototype={
$1(d){return new C.H9(this.a,null)},
$S:z+7}
C.cvd.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cve.prototype={
$3(d,e,f){return new A.it($.DZ(),new C.cvc(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvc.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AR(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.T.l(0.12)
s=A.n(12)
r=A.T(B.T.l(0.35),B.o,1)
q=A.Z(B.ig,B.T,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DZ().a
m=B.j.am(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.a0,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.h,0,k,k),B.f,k,k,new A.r(t,k,r,s,k,k,B.k),k,k,B.cw,B.eB,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cs(s,new A.iQ(1.7777777777777777,C.diJ(new A.de("fleet_master_"+r,x.W),!0,r,!0,j.gaGJ(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u3(0,B.m,k,B.r,k,k,k,k,!1,k,B.a_,!1,A.a([new A.jI(new A.I(B.CY,A.y(u,B.v,B.e,B.h,0,B.l),k),k),new A.na(D.an2,A.atR(new A.mq(new C.cvb(i,j),J.a3(i.d),!1,!0,!0,A.r_(),k),D.byG),k)],w))},
$S:1616}
C.cvb.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.SD(v,e,J.a3(w.d),new C.cva(w,v),this.b,null)},
$S:z+9}
C.cva.prototype={
$0(){return this.a.bfW(this.b)},
$S:0}
C.cvf.prototype={
$0(){this.a.Rn()
return null},
$S:0}
C.cv2.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cv3.prototype={
$0(){C.Ve(this.a,$.bdZ)
return null},
$S:0}
C.cv4.prototype={
$3(d,e,f){return A.fE(new C.cv1(this.a,e))},
$S:z+10}
C.cv1.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aN(A.cp(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.aq,new C.aJP(u,s.a.c,s.e,s.d,new C.cuZ(s),new C.cv_(s),new C.cv0(s),t,v)],x.p),B.i,B.e,B.h,0,B.l),v,B.r,v,B.CZ,v,v,B.a_),v,v,v)},
$S:1617}
C.cuZ.prototype={
$0(){var w=this.a.c
w.toString
C.Ve(w,$.bdZ)
return null},
$S:0}
C.cv_.prototype={
$1(d){var w=this.a
return w.p(new C.cuY(w,d))},
$S:37}
C.cuY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv0.prototype={
$0(){var w=this.a
return w.p(new C.cuX(w))},
$S:0}
C.cuX.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJE.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJF.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cz7.prototype={
$3(d,e,f){return new C.CQ(this.a.c,null)},
$S:z+11}
C.cz8.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a2,null,B.aS,B.m,A.a([new C.CQ(this.a.c,null),D.ae_],x.p),null)},
$C:"$3",
$R:3,
$S:423}
C.cvg.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvo.prototype={
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
w.a3B(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fP(v,"load",new C.cvm(w),!1,u)
v=w.e
v.toString
A.fP(v,"error",new C.cvn(w),!1,u)
w=w.e
w.toString
return w},
$S:567}
C.cvm.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cvk(w))
A.bK(B.C,new C.cvl(w),x.H)}},
$S:43}
C.cvk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvl.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cvi(w))},
$S:12}
C.cvi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cvj(w))},
$S:43}
C.cvj.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvh.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d03.prototype={
$1(d){var w,v,u,t,s=new A.Cq([],[]).FR(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1618};(function aliases(){var w=C.afB.prototype
w.aQa=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaW.prototype,"gas_","bdt",1)
w(u,"gbe3","be4",1)
w(u,"gbgt","bgu",6)
w(C.aaX.prototype,"gbuh","bui",1)
v(C,"dWj","diG",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wz,[C.d3Z,C.d3Y,C.be9,C.bea,C.be1,C.be2,C.be3,C.be4,C.be5,C.be6,C.be7,C.be8,C.be0,C.be_,C.cv9,C.cve,C.cvc,C.cv4,C.cv_,C.cz7,C.cz8,C.cvo,C.cvm,C.cvn,C.d03])
v(A.WO,[C.d3U,C.d3V,C.d3W,C.d3X,C.cv8,C.cv7,C.cv5,C.cv6,C.cvd,C.cva,C.cvf,C.cv2,C.cv3,C.cuZ,C.cuY,C.cv0,C.cuX,C.cJE,C.cJF,C.cvg,C.cvk,C.cvl,C.cvi,C.cvj,C.cvh])
v(A.au,[C.Kj,C.SD,C.aCd,C.aJP,C.aJQ,C.aDg,C.aJO,C.aEr,C.ayz,C.aEw,C.CQ])
v(A.ai,[C.n_,C.p6])
v(A.aa,[C.Ha,C.H9,C.a1T,C.a1U])
v(A.ac,[C.aaW,C.aDa,C.afB,C.aaX])
v(A.WP,[C.cvb,C.cv1])
u(C.Hd,A.azs)
u(C.aDb,C.afB)
w(C.afB,A.e1)})()
A.dlW(b.typeUniverse,JSON.parse('{"Ha":{"aa":[],"o":[]},"SD":{"au":[],"o":[]},"H9":{"aa":[],"o":[]},"Kj":{"au":[],"o":[]},"aaW":{"ac":["Ha"]},"aCd":{"au":[],"o":[]},"aDa":{"ac":["H9"]},"aJP":{"au":[],"o":[]},"aJQ":{"au":[],"o":[]},"aDg":{"au":[],"o":[]},"aJO":{"au":[],"o":[]},"aEr":{"au":[],"o":[]},"ayz":{"au":[],"o":[]},"a1T":{"aa":[],"o":[]},"CQ":{"au":[],"o":[]},"aDb":{"ac":["a1T"]},"aEw":{"au":[],"o":[]},"a1U":{"aa":[],"o":[]},"aaX":{"ac":["a1U"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.be
return{V:w("a9<ad>"),O:w("a9<z>"),e:w("a9<n_>"),s:w("a9<m>"),p:w("a9<o>"),t:w("a9<P>"),X:w("ab<n_>"),a:w("ab<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mW"),_:w("AO"),k:w("n_"),N:w("m"),Y:w("bj<a7>"),W:w("de<m>"),J:w("it<P>"),j:w("it<p6?>"),E:w("vv<cy>"),q:w("Tk"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rr=new A.L(983224,"MaterialIcons",!1)
D.ayU=new A.a6(D.Rr,48,B.b_,null,null,null)
D.bEK=new A.N(!0,B.bD,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bM7=new A.x("Powered off",null,D.bEK,null,null,null,null,null,null,null,null,null)
D.aMt=w([D.ayU,B.D,D.bM7],x.p)
D.akt=new A.eJ(B.a_,B.e,B.Q,B.i,null,B.l,null,0,D.aMt,null)
D.adM=new A.dh(B.J,null,null,D.akt,null)
D.byl=new A.al(18,18,B.Lg,null)
D.ae_=new A.dh(B.J,null,null,D.byl,null)
D.aeC=new A.hc(2,null,null,null,null,B.U,null,null,null,null)
D.ahe=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahK=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajj=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amU=new A.W(0,3,0,3)
D.an2=new A.W(10,0,10,88)
D.anq=new A.W(12,6,12,10)
D.anD=new A.W(14,8,14,6)
D.Oo=new A.W(18,12,18,12)
D.aoU=new A.W(20,8,20,20)
D.P0=new A.W(8,6,15,8)
D.auE=new A.L(983222,"MaterialIcons",!1)
D.awe=new A.a6(B.ig,26,B.T,null,null,null)
D.awh=new A.a6(B.QD,18,null,null,null,null)
D.awy=new A.a6(B.pi,14,B.U,null,null,null)
D.auT=new A.L(983420,"MaterialIcons",!1)
D.axj=new A.a6(D.auT,14,B.U,null,null,null)
D.at6=new A.L(62895,"MaterialIcons",!1)
D.axn=new A.a6(D.at6,14,B.U,null,null,null)
D.aAr=new A.a6(B.iV,20,null,null,null,null)
D.aAI=new A.a6(B.eU,16,null,null,null,null)
D.aOR=w([B.al,B.N],x.O)
D.SR=new A.ao(B.am,B.as,B.y,D.aOR,null,null)
D.bs9=new A.aI("NGMY OS","14.2.1")
D.br0=new A.aI("VirtualDroid","13.8.4")
D.br_=new A.aI("NGMY OS","15.0.0")
D.brJ=new A.aI("VirtualDroid","14.1.2")
D.bqY=new A.aI("NGMY Tab OS","12.9.7")
D.bqW=new A.aI("NGMY OS","13.5.3")
D.bqL=new A.aI("VirtualDroid","15.2.0")
D.brm=new A.aI("NGMY OS","14.8.1")
D.brP=new A.aI("NGMY Tab OS","13.2.4")
D.bsj=new A.aI("VirtualDroid","12.6.9")
D.bqH=new A.aI("NGMY OS","16.0.1")
D.bqy=new A.aI("VirtualDroid","14.9.0")
D.bs1=new A.aI("NGMY Tab OS","14.0.3")
D.br9=new A.aI("NGMY OS","13.1.8")
D.bqG=new A.aI("VirtualDroid","13.4.5")
D.bqV=new A.aI("NGMY OS","15.3.2")
D.brQ=new A.aI("NGMY Tab OS","12.4.1")
D.bs3=new A.aI("VirtualDroid","16.1.0")
D.brl=new A.aI("NGMY OS","14.4.6")
D.bsa=new A.aI("VirtualDroid","15.0.8")
D.aOk=w([D.bs9,D.br0,D.br_,D.brJ,D.bqY,D.bqW,D.bqL,D.brm,D.brP,D.bsj,D.bqH,D.bqy,D.bs1,D.br9,D.bqG,D.bqV,D.brQ,D.bs3,D.brl,D.bsa],A.be("a9<+(m,m)>"))
D.bul=new A.ej(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.btU=new A.ej(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.btP=new A.ej(["New York","United States",40.7128,-74.006,"America/New_York"])
D.btY=new A.ej(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.btL=new A.ej(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bu_=new A.ej(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bun=new A.ej(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.btM=new A.ej(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.btT=new A.ej(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bu1=new A.ej(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.btK=new A.ej(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buf=new A.ej(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buc=new A.ej(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.btS=new A.ej(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bu9=new A.ej(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bu8=new A.ej(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.btJ=new A.ej(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.btX=new A.ej(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bu6=new A.ej(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bub=new A.ej(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U0=w([D.bul,D.btU,D.btP,D.btY,D.btL,D.bu_,D.bun,D.btM,D.btT,D.bu1,D.btK,D.buf,D.buc,D.btS,D.bu9,D.bu8,D.btJ,D.btX,D.bu6,D.bub],A.be("a9<+(m,m,a7,a7,m)>"))
D.aUq=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_T=new C.Hd(0,"youtube")
D.a_U=new C.Hd(1,"tiktok")
D.H8=new C.Hd(2,"instagram")
D.a_V=new C.Hd(3,"facebook")
D.bm6=new C.Hd(4,"other")
D.bxW=new A.al(3,null,null,null)
D.byG=new A.i_(4,10,8,0.52,null)
D.bNm=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bC2=new A.aR(D.bNm,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.m,null)
D.bF6=new A.N(!0,B.c,null,null,null,null,11,B.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNa=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bYp=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZc=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZh=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c3N=new C.aEr(null)})();(function staticFields(){$.diF=20
$.aqm=null
$.bdZ=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_D","DZ",()=>A.Rh(0))
w($,"e_E","LY",()=>A.Rh(null))})()};
(a=>{a["lGeoc99yqyTc98R1+uHpqGmr0v4="]=a.current})($__dart_deferred_initializers__);