((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dOE(d,e){A.a8(d,!1).cN(A.ep(new C.cXh(e),!0,null,x.H))},
U5(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$U5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.L4()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a_,B.T),t)
w=3
return A.b(A.di(B.D,new C.cXg(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$U5)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dwM(r)
if(q==null){d.F(x.q).f.O(D.bvC)
w=1
break}w=4
return A.b(A.bN(B.fA,null,x.H),$async$U5)
case 4:if(d.e==null){w=1
break}n=B.p.az(e,1,999)
$.day=n
p=C.dwG(n)
n=$.Dp()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d_Z(q)
d.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$U5,v)},
daB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aQ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aQ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mB(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
GB(d){return C.dwP(d)},
dwP(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$GB=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$GB)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.cr(r)?10:11
break
case 10:k=J.fP(r,x.f)
k=A.dE(k,new C.baG(),k.$ti.j("L.E"),x.k)
j=A.S(k).j("aa<L.E>")
i=A.E(new A.aa(k,new C.baH(),j),j.j("L.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.daD(q)
w=12
return A.b(C.GA(a3,p),$async$GB)
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
n=B.v.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.daB(A.P(n,x.N,x.z))
l=C.daD(A.a([m],x.e))
w=21
return A.b(C.GA(a3,l),$async$GB)
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
case 18:case 14:q=C.dwN()
w=22
return A.b(C.GA(a3,q),$async$GB)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$GB,v)},
daD(d){var w=A.T(d).j("z<1,m>"),v=new A.z(d,new C.bay(),w).eA(0),u=new A.z(d,new C.baz(),w).eA(0),t=new A.z(d,new C.baA(),w).eA(0),s=new A.z(d,new C.baB(),w).eA(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d0_(null,q,u,t,v,s));++q}return r},
aoA(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aoA=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GB(d),$async$aoA)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d8(t,new C.baC(),s).eA(0)
p=r.d8(t,new C.baD(),s).eA(0)
o=r.d8(t,new C.baE(),s).eA(0)
n=r.d8(t,new C.baF(),s).eA(0)
m=C.d0_(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.GA(d,t),$async$aoA)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aoA,v)},
GA(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$GA=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$GA)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bax(),x.P)
s=A.E(s,s.$ti.j("a3.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$GA)
case 3:return A.f(null,v)}})
return A.h($async$GA,v)},
dwN(){var w,v=x.N,u=A.b5(v),t=A.b5(v),s=A.b5(v),r=A.b5(v),q=J.dZ(20,x.k)
for(w=0;w<20;++w)q[w]=C.d0_(w,w,t,s,u,r)
return q},
d0_(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jD(),h=d==null,g=D.S1[B.p.ap(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.S1[B.p.ap(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.z(p,new C.baw(),A.T(p).j("z<1,m>")).fi(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.fi(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bB(B.p.jc(i.bx(256),16),2,"0")
s=B.d.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.ap(e,20)
k=D.aQt[w]
j=D.aLg[w]
return new C.mB("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bB(B.p.q(e+1),2,"0"),u,k,C.dwO(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.M(Date.now(),0,!1).a0().W())},
dwO(d,e){var w,v=J.dZ(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bB(B.p.jc(d.bx(256),16),2,"0")
return B.d.fi(v)},
cXh:function cXh(d){this.a=d},
cXg:function cXg(d,e){this.a=d
this.b=e},
cXc:function cXc(d){this.a=d},
cXd:function cXd(d){this.a=d},
cXe:function cXe(d){this.a=d},
cXf:function cXf(d,e){this.a=d
this.b=e},
Jz:function Jz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mB:function mB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
baG:function baG(){},
baH:function baH(){},
bay:function bay(){},
baz:function baz(){},
baA:function baA(){},
baB:function baB(){},
baC:function baC(){},
baD:function baD(){},
baE:function baE(){},
baF:function baF(){},
bax:function bax(){},
baw:function baw(){},
Gz:function Gz(d,e){this.c=d
this.a=e},
a9D:function a9D(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cqL:function cqL(){},
cqK:function cqK(d,e){this.a=d
this.b=e},
cqI:function cqI(d){this.a=d},
cqJ:function cqJ(d,e){this.a=d
this.b=e},
cqM:function cqM(d){this.a=d},
cqQ:function cqQ(d){this.a=d},
cqR:function cqR(d,e){this.a=d
this.b=e},
cqP:function cqP(d,e,f){this.a=d
this.b=e
this.c=f},
cqO:function cqO(d,e){this.a=d
this.b=e},
cqN:function cqN(d,e){this.a=d
this.b=e},
cqS:function cqS(d){this.a=d},
RD:function RD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aA8:function aA8(d,e){this.c=d
this.a=e},
Gy:function Gy(d,e){this.c=d
this.a=e},
aB5:function aB5(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cqF:function cqF(d){this.a=d},
cqG:function cqG(d){this.a=d},
cqH:function cqH(d){this.a=d},
cqE:function cqE(d,e){this.a=d
this.b=e},
cqB:function cqB(d){this.a=d},
cqC:function cqC(d){this.a=d},
cqA:function cqA(d,e){this.a=d
this.b=e},
cqD:function cqD(d){this.a=d},
cqz:function cqz(d){this.a=d},
aHz:function aHz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aHA:function aHA(d,e,f){this.c=d
this.d=e
this.a=f},
aBb:function aBb(d,e){this.c=d
this.a=e},
aHy:function aHy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cDr:function cDr(d){this.a=d},
cDs:function cDs(d){this.a=d},
aCh:function aCh(d){this.a=d},
awA:function awA(d,e){this.c=d
this.a=e},
dwM(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Z(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dwL(v)
if(u!=null)return new C.oy(w,C.d_Y(u,!1),D.YZ,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dwK(v)
if(t!=null)return new C.oy(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Z_,"TikTok",q)
s=C.dwJ(w,v)
if(s!=null)return s
r=C.dwI(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oy(w,w,D.bgF,"Video",q)
return q},
dwJ(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cY(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oy(d,"https://www.instagram.com/reel/"+w+u,D.Fq,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cY(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oy(d,"https://www.instagram.com/p/"+w+u,D.Fq,t,null)}return null},
dwI(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oy(d,"https://www.facebook.com/plugins/video.php?href="+A.eu(2,d,B.aK,!1)+"&show_text=false&width=734",D.Z0,"Facebook",null)},
dwL(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cY(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dwK(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cY(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cY(d)
return w==null?null:w.b[1]},
GC:function GC(d,e){this.a=d
this.b=e},
oy:function oy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0E:function a0E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB6:function aB6(d,e){var _=this
_.d=$
_.cX$=d
_.aZ$=e
_.c=_.a=null},
aCl:function aCl(d,e){this.c=d
this.a=e},
ctk:function ctk(d){this.a=d},
ctl:function ctl(d){this.a=d},
Ce:function Ce(d,e){this.c=d
this.a=e},
ae9:function ae9(){},
daC(d,e,f,g,h,i){return new C.a0F(i,f,h,e,g,d)},
dNn(d){var w=window
w.toString
A.fV(w,"message",new C.cTB(d),!1,x._)},
a0F:function a0F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9E:function a9E(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cqT:function cqT(d){this.a=d},
cr0:function cr0(d){this.a=d},
cqZ:function cqZ(d){this.a=d},
cqX:function cqX(d){this.a=d},
cqY:function cqY(d){this.a=d},
cqV:function cqV(d){this.a=d},
cr_:function cr_(d){this.a=d},
cqW:function cqW(d){this.a=d},
cqU:function cqU(d){this.a=d},
cTB:function cTB(d){this.a=d},
daw(){var w,v,u
try{v=A.xP()
w=v.gpI(v)
if(J.a1(w)!==0&&!J.v(w,"null")&&!J.cy(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d_Y(d,e){var w=C.daw(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eu(2,w,B.aK,!1))
v.push("widget_referrer="+A.eu(2,w,B.aK,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
d_X(d){var w=A.ap(y.c,!0,!1,!1,!1).cY(d)
return w==null?null:w.b[1]},
dax(d){var w=A.bm(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bm(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dwF(d,e,f){var w,v,u=C.d_X(d)
if(u!=null){if(f){w=C.daw()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dax(C.d_Y(u,e))}return C.dax(d)},
dwG(d){if(d<=4)return 0
return B.p.aY(d-1,4)*4},
dwH(d){var w
if($.L4().a==null)return!1
w=$.Dp().a
return d>=w&&d<w+4},
daA(){var w=$.aoz
if(w!=null)w.a9(0)
$.aoz=null
$.Dp().sv(0,0)},
daz(){var w,v,u,t=$.L4()
if(t.a==null)return
w=$.aoz
if(w!=null)w.a9(0)
v=$.day
if(v<=4){t=t.a
t.toString
C.d_Z(t)
return}w=$.Dp()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d_Z(t)},
d_Z(d){var w=$.aoz
if(w!=null)w.a9(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aoz=A.dn(A.d4(0,0,0,0,0,w),C.dNy())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Jz.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.O.l(0.25),B.n,1),r=A.a2(this.d,B.O,w,w,14)
return A.u(w,A.F(A.a([r,B.eO,A.j(this.c,w,w,w,w,w,A.l(w,w,v?B.V:B.dd,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.eq,w,w,w)}}
C.mB.prototype={
ae(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Gz.prototype={
T(){return new C.a9D(A.a([],x.e))},
geU(){return this.c}}
C.a9D.prototype={
Y(){var w=this
w.a3()
$.Dp().ai(0,w.gaqX())
C.dNn(w.gbcd())
w.UK()},
bbG(){if(this.c!=null)this.p(new C.cqL())},
bce(){C.daz()},
n(){$.Dp().V(0,this.gaqX())
C.daA()
$.L4().sv(0,null)
this.a2()},
UK(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UK=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.GB(t.a.c),$async$UK)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cqK(t,s))
$.bav=J.a1(s)
case 1:return A.f(u,v)}})
return A.h($async$UK,v)},
QZ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$QZ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cqI(t))
w=3
return A.b(C.aoA(t.a.c),$async$QZ)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cqJ(t,s))
$.bav=J.a1(t.d)
t.c.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$QZ,v)},
be5(d){var w=this.c
w.toString
A.a8(w,!1).cN(A.ep(new C.cqM(d),!1,null,x.H))},
beE(){var w=this.c
w.toString
return C.U5(w,J.a1(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dK:B.d4,s=A.aM(v,v,v,v,B.DK,v,v,v,new C.cqQ(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a1(w.d)+")",q=x.p
r=A.F(A.a([s,A.H(new A.AL(A.F(A.a([A.H(new A.J(B.hL,A.j(r,v,1,B.ae,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aS(!1,B.L,!0,v,A.aZ(!1,v,!0,new A.J(B.aE,A.a2(B.f_,B.O,v,v,28),v),B.bS,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbeD(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a2)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cA(!0,A.B(A.a([new A.J(D.N_,r,v),A.H(w.e?B.kK:new A.ib($.L4(),new C.cqR(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.co(v,t,s,v,!1,!1,A.ajt(B.O,B.zG,B.mx,D.bK1,w.e?v:new C.cqS(w)),v)}}
C.RD.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.n,1),q=A.a([new A.ag(0,B.w,B.O.l(0.18),B.cn,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a0E(n,!0,!C.dwH(w),"Fold "+(B.p.aY(w,4)+1)+"/"+B.p.aY(v.e+4-1,4),u)
n=w}else n=A.u(u,A.B(A.a([A.a2(B.hl,B.kR,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.uQ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aS(!1,B.L,!0,u,A.aZ(!1,t,!0,A.B(A.a([A.H(A.u(u,A.cP(p,A.hT(A.B(A.a([new C.aA8(o,u),A.H(n,1),A.u(u,A.F(A.a([A.a2(B.rr,B.O.l(0.85),u,u,9),D.brV,A.j("Tap",u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.akQ,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,u,u,new A.t(u,u,r,s,q,D.QW,B.k),u,u,u,B.er,u,u,u),1),B.an,A.j(o.b,u,1,B.ae,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ae,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ae,u,u,A.l(u,u,B.O.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a2)}}
C.aA8.prototype={
C(d){var w=null
return A.u(w,A.F(A.a([A.H(A.j(B.d.gau(this.c.c.split("-")),w,w,B.ae,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a2(B.oB,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.MQ,w,w,w)}}
C.Gy.prototype={
T(){return new C.aB5()}}
C.aB5.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dK:B.d4,t=A.aM(w,w,w,w,B.DK,w,w,w,new C.cqF(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.co(w,u,A.cA(!0,A.B(A.a([new A.J(D.N_,A.F(A.a([t,A.H(new A.AL(A.F(A.a([A.H(new A.J(B.hL,A.j(s.b+" \xb7 "+s.c,w,1,B.ae,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aS(!1,B.L,!0,w,A.aZ(!1,w,!0,new A.J(B.aE,A.a2(B.f_,B.O,w,w,28),w),B.bS,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cqG(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a2)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ib($.L4(),new C.cqH(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aHz.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.O.l(0.35),B.et,28),new A.ag(0,B.w,B.q.l(0.45),B.cx,18)],x.V),o=A.U(B.c.l(0.12),B.n,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.daC(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaFu(),v+"_full")
w=v}else w=new C.aBb(t.r,s)}else w=new C.awA(m,s)
else w=D.bXa
return A.u(s,A.cP(n,A.hT(A.B(A.a([new C.aHA(m,l,s),A.H(w,1),new C.aHy(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,s,s,new A.t(s,s,o,q,p,D.QW,B.k),s,r*2.05,s,B.b9,s,s,r)}}
C.aHA.prototype={
C(d){var w,v,u,t,s=null,r=new A.M(Date.now(),0,!1),q=A.dL(r)
r=A.hq(r)
w=new A.de(q,r)
v=w.gGb()===0?12:w.gGb()
r=B.a.bB(B.p.q(r),2,"0")
q=(q<12?B.eD:B.hd)===B.eD?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,B.lp,s,s,s),B.b8,A.j(u.b,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.b7,D.av7,B.dF,D.aum,B.dF,D.avb],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.F(A.a([A.a2(B.DC,B.O.l(0.9),s,s,12),B.dF,A.H(A.j(u.c,s,s,B.ae,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.B(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.aly,s,s,s)}}
C.aBb.prototype={
C(d){var w=null
return A.u(w,A.aU(A.B(A.a([A.a2(B.wp,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.eA(D.ays,D.bHV,this.c,A.er(w,w,w,w,w,w,w,w,w,B.O,w,w,w,w,w,new A.aK(B.O.l(0.5),1,B.n,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uQ,w,w,w,w,w,w,w,w,1/0)}}
C.aHy.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aqQ(B.Ps,"YouTube",s===0,r,new C.cDr(u))
s=u.aqQ(B.ka,"Device",s===1,r,new C.cDs(u))
w=r?"Power off":"Power on"
v=r?D.Pt:D.asl
return A.u(t,A.F(A.a([q,B.Y,s,B.b8,A.aM(t,t,t,t,A.a2(v,r?B.aX:B.dD,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cT)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.alk,t,t,t)},
aqQ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.O:B.a8
v=f&&g?B.O.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aS(!1,B.L,!0,u,A.aZ(!1,A.n(10),!0,new A.J(B.l_,A.B(A.a([A.a2(d,w,s,s,18),A.j(e,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a2),1)}}
C.aCh.prototype={
C(d){return D.ac2}}
C.awA.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,B.iR,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qm("Serial",u.c),q=w.qm("Model",u.d),p=w.qm("Device ID",u.e),o=w.qm("IMEI",u.r),n=w.qm("MAC",u.f),m=w.qm("OS",u.w+" "+u.x),l=w.qm("Location",u.y+", "+u.z),k=w.qm("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qm("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.an,s,B.Q,r,q,p,o,n,m,l,k,j,w.qm("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aE,v,v,B.X,!1)},
qm(d,e){var w=null
return new A.J(B.c7,A.B(A.a([A.j(d.toUpperCase(),w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c9,A.j(e,w,w,w,w,w,D.byI,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.GC.prototype={
S(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oy.prototype={
gaFu(){var w=this.c
return w===D.YZ||w===D.Z_||w===D.Fq||w===D.Z0}}
C.a0E.prototype={
T(){return new C.aB6(null,null)}}
C.aB6.prototype={
Y(){this.a3()
var w=A.bH(null,B.qL,null,1,null,this)
w.mh(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aOT()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dU(t,new A.t(t,t,t,t,t,new A.aq(B.d8,B.c5,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bz),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.hH,p,t)
w=B.c.l(0.92)
q=A.aU(new A.dr(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bk.T>")),!1,A.a2(B.hl,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kR
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aCl(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aV(B.a7,t,B.b2,B.m,s,t)}}
C.aCl.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kp(u,new C.ctk(this),B.bs,!0,w,w,new C.ctl(this),w)
return new C.Ce(v,w)}}
C.Ce.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qt,B.JF],x.O),B.hl)
break
case 1:w=new A.aI(A.a([B.uQ,D.afD],x.O),B.jf)
break
case 2:w=new A.aI(A.a([D.ah9,D.afa],x.O),B.wv)
break
case 3:w=new A.aI(A.a([B.W,B.dl],x.O),B.wz)
break
case 4:w=new A.aI(A.a([B.aa,B.ai],x.O),B.mt)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a2(w.b,B.O.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.ak,B.au,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.ae9.prototype={
n(){var w=this,v=w.aZ$
if(v!=null)v.V(0,w.gdN())
w.aZ$=null
w.a2()},
bq(){this.bP()
this.bJ()
this.dO()}}
C.a0F.prototype={
T(){return new C.a9E()}}
C.a9E.prototype={
buj(d,e){var w=C.d_X(d)
if(w!=null)return C.d_Y(w,e)
return d},
a2T(d,e){var w,v=this,u=C.d_X(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.buj(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dwF(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bsd(){var w,v=this
if(v.w)return
v.p(new C.cqT(v))
w=v.e
if(w!=null)v.a2T(w,v.a.d)},
Y(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.Dq()
$.o1().rB(w,new C.cr0(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cqU(v))
w=v.e
w.toString
v.a2T(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a2(B.PF,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hT(A.aU(new A.J(new A.V(12,12,12,12),A.B(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Xm(n,B.pb,w)],v)
if(o.f)w.push(A.hT(A.aU(new A.ao(28,28,D.acy,n),n,n,n),B.c6,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b0,B.n,1)
q=A.a2(B.PH,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f7(0,A.aS(!1,B.L,!0,n,A.aZ(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Mq,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbsc(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a2)))}return new A.aV(B.a7,n,B.b2,B.m,w,n)}}
var z=a.updateTypes(["m(mB)","~()","Gz(R)","mB(W<@,@>)","a0(mB)","W<m,@>(mB)","ax<~>()","Gy(R)","ib<Q>(R,oy?,p?)","RD(R,Q)","tX(R,oy?,p?)","Ce(R,ak,dp?)"])
C.cXh.prototype={
$1(d){return new C.Gz(this.a,null)},
$S:z+2}
C.cXg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.az(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.ct,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.O.l(0.22),B.et,32)],x.V),g=A.U(m?B.bp:B.O.l(0.18),B.n,1),f=A.n(28),e=B.O.l(m?0.35:0.14)
j=A.a([e,B.U.l(m?0.18:0.08)],j)
e=A.u(n,D.au0,B.h,n,n,new A.t(B.O.l(0.18),n,A.U(B.O.l(0.45),B.n,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.B(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,A.l(n,n,m?B.V:B.aJ,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.fn,w,A.aM(n,n,n,n,A.a2(B.cG,m?B.a8:B.c6,n,n,n),n,n,n,new C.cXc(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a0,B.a4,B.y,j,n,n),B.k),n,n,n,B.MA,n,n,n)
e=A.el(B.bR,A.a([new C.Jz("YouTube",B.DB,m,n),new C.Jz("TikTok",B.jf,m,n),new C.Jz("Instagram",B.wv,m,n),new C.Jz("Facebook",B.wz,m,n)],v),B.bO,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fw,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d4
r=A.a2(B.kb,B.O.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bp:B.b1
u=A.B(A.a([e,B.as,A.av(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bi(n,new A.b6(4,q,B.J),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aK(o,1,B.n,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.n(16),B.It),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.I,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.j5(D.au4,D.bNK,new C.cXd(d),A.k4(n,n,n,n,n,n,n,n,n,n,n,m?B.aD:B.aJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dU(A.cP(f,A.B(A.a([j,new A.J(D.amC,u,n),new A.J(D.amM,A.F(A.a([e,B.b8,A.bQ(!1,A.j("Cancel",n,n,n,n,n,A.l(n,n,m?B.V:B.Z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cXe(d),n,n),B.Y,A.dJ(D.ayc,D.bO4,new C.cXf(d,w),A.by(B.O,n,n,n,B.c,n,D.Mq,n,new A.bD(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.av),new A.t(n,n,g,k,h,new A.aq(B.ak,B.au,B.y,i,n,n),B.k),B.bz),n)},
$S:64}
C.cXc.prototype={
$0(){A.a8(this.a,!1).R(null)
return null},
$S:0}
C.cXd.prototype={
$0(){C.daA()
$.L4().sv(0,null)
A.a8(this.a,!1).R(null)},
$S:0}
C.cXe.prototype={
$0(){A.a8(this.a,!1).R(null)
return null},
$S:0}
C.cXf.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a8(this.a,!1).R(w)
return null},
$S:0}
C.baG.prototype={
$1(d){return C.daB(A.P(d,x.N,x.z))},
$S:z+3}
C.baH.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bay.prototype={
$1(d){return d.c},
$S:z+0}
C.baz.prototype={
$1(d){return d.r},
$S:z+0}
C.baA.prototype={
$1(d){return d.f},
$S:z+0}
C.baB.prototype={
$1(d){return d.at},
$S:z+0}
C.baC.prototype={
$1(d){return d.c},
$S:z+0}
C.baD.prototype={
$1(d){return d.r},
$S:z+0}
C.baE.prototype={
$1(d){return d.f},
$S:z+0}
C.baF.prototype={
$1(d){return d.at},
$S:z+0}
C.bax.prototype={
$1(d){return d.ae()},
$S:z+5}
C.baw.prototype={
$1(d){return B.a.bB(B.p.jc(d,16),2,"0").toUpperCase()},
$S:74}
C.cqL.prototype={
$0(){},
$S:0}
C.cqK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cqI.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cqJ.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cqM.prototype={
$1(d){return new C.Gy(this.a,null)},
$S:z+7}
C.cqQ.prototype={
$0(){return A.a8(this.a,!1).eu()},
$S:0}
C.cqR.prototype={
$3(d,e,f){return new A.ib($.Dp(),new C.cqP(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cqP.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Ab(d,k,x.Q)
w=w==null?k:w.gkm()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.O.l(0.12)
s=A.n(12)
r=A.U(B.O.l(0.35),B.n,1)
q=A.a2(B.hl,B.O,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.Dp().a
m=B.j.az(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cp,B.eG,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cP(s,new A.ix(1.7777777777777777,C.daC(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaFu(),"fleet_master"),k),B.av),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zl(0,B.m,k,B.r,k,k,k,k,!1,k,B.X,!1,A.a([new A.k1(new A.J(B.BF,A.B(u,B.t,B.e,B.f,0,B.l),k),k),new A.oK(D.al_,A.as3(new A.nG(new C.cqO(i,j),J.a1(i.d),!1,!0,!0,A.vz(),k),D.bsA),k)],w))},
$S:1552}
C.cqO.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.RD(v,e,J.a1(w.d),new C.cqN(w,v),this.b,null)},
$S:z+9}
C.cqN.prototype={
$0(){return this.a.be5(this.b)},
$S:0}
C.cqS.prototype={
$0(){this.a.QZ()
return null},
$S:0}
C.cqF.prototype={
$0(){return A.a8(this.a,!1).eu()},
$S:0}
C.cqG.prototype={
$0(){C.U5(this.a,$.bav)
return null},
$S:0}
C.cqH.prototype={
$3(d,e,f){return A.fF(new C.cqE(this.a,e))},
$S:z+10}
C.cqE.prototype={
$2(d,e){var w,v=null,u=B.j.az(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cw(A.B(A.a([A.j(r,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.as,new C.aHz(u,s.a.c,s.e,s.d,new C.cqB(s),new C.cqC(s),new C.cqD(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vL,v,v,B.X),v,v,v)},
$S:1553}
C.cqB.prototype={
$0(){var w=this.a.c
w.toString
C.U5(w,$.bav)
return null},
$S:0}
C.cqC.prototype={
$1(d){var w=this.a
return w.p(new C.cqA(w,d))},
$S:37}
C.cqA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cqD.prototype={
$0(){var w=this.a
return w.p(new C.cqz(w))},
$S:0}
C.cqz.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cDr.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cDs.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ctk.prototype={
$3(d,e,f){return new C.Ce(this.a.c,null)},
$S:z+11}
C.ctl.prototype={
$3(d,e,f){if(f==null)return e
return new A.aV(B.a7,null,B.b2,B.m,A.a([new C.Ce(this.a.c,null),D.abV],x.p),null)},
$C:"$3",
$R:3,
$S:489}
C.cqT.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cr0.prototype={
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
w.a2T(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fV(v,"load",new C.cqZ(w),!1,u)
v=w.e
v.toString
A.fV(v,"error",new C.cr_(w),!1,u)
w=w.e
w.toString
return w},
$S:564}
C.cqZ.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cqX(w))
A.bN(B.A,new C.cqY(w),x.H)}},
$S:41}
C.cqX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cqY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cqV(w))},
$S:12}
C.cqV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cr_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cqW(w))},
$S:41}
C.cqW.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cqU.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cTB.prototype={
$1(d){var w,v,u,t,s=new A.BP([],[]).Ft(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1554};(function aliases(){var w=C.ae9.prototype
w.aOT=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a9D.prototype,"gaqX","bbG",1)
w(u,"gbcd","bce",1)
w(u,"gbeD","beE",6)
w(C.a9E.prototype,"gbsc","bsd",1)
v(C,"dNy","daz",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vU,[C.cXh,C.cXg,C.baG,C.baH,C.bay,C.baz,C.baA,C.baB,C.baC,C.baD,C.baE,C.baF,C.bax,C.baw,C.cqM,C.cqR,C.cqP,C.cqH,C.cqC,C.ctk,C.ctl,C.cr0,C.cqZ,C.cr_,C.cTB])
v(A.VE,[C.cXc,C.cXd,C.cXe,C.cXf,C.cqL,C.cqK,C.cqI,C.cqJ,C.cqQ,C.cqN,C.cqS,C.cqF,C.cqG,C.cqB,C.cqA,C.cqD,C.cqz,C.cDr,C.cDs,C.cqT,C.cqX,C.cqY,C.cqV,C.cqW,C.cqU])
v(A.aC,[C.Jz,C.RD,C.aA8,C.aHz,C.aHA,C.aBb,C.aHy,C.aCh,C.awA,C.aCl,C.Ce])
v(A.ak,[C.mB,C.oy])
v(A.ae,[C.Gz,C.Gy,C.a0E,C.a0F])
v(A.af,[C.a9D,C.aB5,C.ae9,C.a9E])
v(A.VF,[C.cqO,C.cqE])
u(C.GC,A.axr)
u(C.aB6,C.ae9)
w(C.ae9,A.ec)})()
A.ddS(b.typeUniverse,JSON.parse('{"Gz":{"ae":[],"p":[]},"RD":{"aC":[],"p":[]},"Gy":{"ae":[],"p":[]},"Jz":{"aC":[],"p":[]},"a9D":{"af":["Gz"]},"aA8":{"aC":[],"p":[]},"aB5":{"af":["Gy"]},"aHz":{"aC":[],"p":[]},"aHA":{"aC":[],"p":[]},"aBb":{"aC":[],"p":[]},"aHy":{"aC":[],"p":[]},"aCh":{"aC":[],"p":[]},"awA":{"aC":[],"p":[]},"a0E":{"ae":[],"p":[]},"Ce":{"aC":[],"p":[]},"aB6":{"af":["a0E"]},"aCl":{"aC":[],"p":[]},"a0F":{"ae":[],"p":[]},"a9E":{"af":["a0F"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bl
return{V:w("ac<ag>"),O:w("ac<A>"),e:w("ac<mB>"),s:w("ac<m>"),p:w("ac<p>"),t:w("ac<Q>"),X:w("ab<mB>"),a:w("ab<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mx"),_:w("A6"),k:w("mB"),N:w("m"),Y:w("bn<a7>"),W:w("d2<m>"),J:w("ib<Q>"),j:w("ib<oy?>"),E:w("xX<cz>"),q:w("Si"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bsj=new A.ao(18,18,B.Jl,null)
D.abV=new A.dc(B.M,null,null,D.bsj,null)
D.Pt=new A.N(983224,"MaterialIcons",!1)
D.awH=new A.a6(D.Pt,48,B.b0,null,null,null)
D.byo=new A.K(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bIB=new A.x("Powered off",null,D.byo,null,null,null,null,null,null,null,null)
D.aJw=w([D.awH,B.z,D.bIB],x.p)
D.aio=new A.en(B.X,B.e,B.P,B.i,null,B.l,null,0,D.aJw,null)
D.ac2=new A.dc(B.M,null,null,D.aio,null)
D.acy=new A.fY(2,null,null,null,null,B.V,null,null,null,null)
D.afa=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.afD=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.ah9=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.akQ=new A.V(0,3,0,3)
D.al_=new A.V(10,0,10,88)
D.alk=new A.V(12,6,12,10)
D.aly=new A.V(14,8,14,6)
D.Mq=new A.V(18,12,18,12)
D.amC=new A.V(20,18,20,8)
D.amM=new A.V(20,8,20,20)
D.N_=new A.V(8,6,15,8)
D.asl=new A.N(983222,"MaterialIcons",!1)
D.au0=new A.a6(B.hl,26,B.O,null,null,null)
D.au4=new A.a6(B.OB,18,null,null,null,null)
D.aum=new A.a6(B.oB,14,B.V,null,null,null)
D.asF=new A.N(983420,"MaterialIcons",!1)
D.av7=new A.a6(D.asF,14,B.V,null,null,null)
D.ar0=new A.N(62895,"MaterialIcons",!1)
D.avb=new A.a6(D.ar0,14,B.V,null,null,null)
D.ayc=new A.a6(B.jg,20,null,null,null,null)
D.ays=new A.a6(B.f_,16,null,null,null,null)
D.aLG=w([B.ai,B.W],x.O)
D.QW=new A.aq(B.ak,B.au,B.y,D.aLG,null,null)
D.bmf=new A.aI("NGMY OS","14.2.1")
D.bl6=new A.aI("VirtualDroid","13.8.4")
D.bl5=new A.aI("NGMY OS","15.0.0")
D.blP=new A.aI("VirtualDroid","14.1.2")
D.bl3=new A.aI("NGMY Tab OS","12.9.7")
D.bl1=new A.aI("NGMY OS","13.5.3")
D.bkR=new A.aI("VirtualDroid","15.2.0")
D.bls=new A.aI("NGMY OS","14.8.1")
D.blV=new A.aI("NGMY Tab OS","13.2.4")
D.bmp=new A.aI("VirtualDroid","12.6.9")
D.bkN=new A.aI("NGMY OS","16.0.1")
D.bkE=new A.aI("VirtualDroid","14.9.0")
D.bm7=new A.aI("NGMY Tab OS","14.0.3")
D.blf=new A.aI("NGMY OS","13.1.8")
D.bkM=new A.aI("VirtualDroid","13.4.5")
D.bl0=new A.aI("NGMY OS","15.3.2")
D.blW=new A.aI("NGMY Tab OS","12.4.1")
D.bm9=new A.aI("VirtualDroid","16.1.0")
D.blr=new A.aI("NGMY OS","14.4.6")
D.bmg=new A.aI("VirtualDroid","15.0.8")
D.aLg=w([D.bmf,D.bl6,D.bl5,D.blP,D.bl3,D.bl1,D.bkR,D.bls,D.blV,D.bmp,D.bkN,D.bkE,D.bm7,D.blf,D.bkM,D.bl0,D.blW,D.bm9,D.blr,D.bmg],A.bl("ac<+(m,m)>"))
D.bor=new A.e8(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bo_=new A.e8(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bnV=new A.e8(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bo3=new A.e8(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bnR=new A.e8(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bo5=new A.e8(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bot=new A.e8(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bnS=new A.e8(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bnZ=new A.e8(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bo7=new A.e8(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bnQ=new A.e8(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bol=new A.e8(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.boi=new A.e8(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bnY=new A.e8(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bof=new A.e8(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.boe=new A.e8(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bnP=new A.e8(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bo2=new A.e8(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.boc=new A.e8(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.boh=new A.e8(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.S1=w([D.bor,D.bo_,D.bnV,D.bo3,D.bnR,D.bo5,D.bot,D.bnS,D.bnZ,D.bo7,D.bnQ,D.bol,D.boi,D.bnY,D.bof,D.boe,D.bnP,D.bo2,D.boc,D.boh],A.bl("ac<+(m,m,a7,a7,m)>"))
D.aQt=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.YZ=new C.GC(0,"youtube")
D.Z_=new C.GC(1,"tiktok")
D.Fq=new C.GC(2,"instagram")
D.Z0=new C.GC(3,"facebook")
D.bgF=new C.GC(4,"other")
D.brV=new A.ao(3,null,null,null)
D.bsA=new A.j2(4,10,8,0.52,null)
D.bJz=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bvC=new A.aT(D.bJz,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.byI=new A.K(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bHV=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bK1=new A.x("Add device",null,null,null,null,null,null,null,null,null,null)
D.bNK=new A.x("Stop",null,null,null,null,null,null,null,null,null,null)
D.bO4=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bXa=new C.aCh(null)})();(function staticFields(){$.day=20
$.aoz=null
$.bav=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dRL","Dp",()=>A.Qp(0))
w($,"dRM","L4",()=>A.Qp(null))})()};
(a=>{a["02QfkQrxYhlgnkKYNcETOBq2OK8="]=a.current})($__dart_deferred_initializers__);