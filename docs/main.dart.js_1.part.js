((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dXj(d,e){A.a5(d,!1).cw(A.ec(new C.d43(e),!0,null,x.H))},
V5(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LO()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aI(n,B.a5,B.W),t)
w=3
return A.b(A.d1(B.D,new C.d42(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V5)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dF7(r)
if(q==null){d.F(x.q).f.O(D.bCu)
w=1
break}w=4
return A.b(A.bM(B.fM,null,x.H),$async$V5)
case 4:if(d.e==null){w=1
break}n=B.n.aj(e,1,999)
$.diH=n
p=C.dF1(n)
n=$.DV()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d7Q(q)
d.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V5,v)},
diK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mX(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H8(d){return C.dFa(d)},
dFa(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H8=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H8)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aH(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eS(r,x.f)
k=A.dk(k,new C.bcJ(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("aa<K.E>")
i=A.C(new A.aa(k,new C.bcK(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.diM(q)
w=12
return A.b(C.H7(a3,p),$async$H8)
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
case 19:m=C.diK(A.P(n,x.N,x.z))
l=C.diM(A.a([m],x.e))
w=21
return A.b(C.H7(a3,l),$async$H8)
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
case 18:case 14:q=C.dF8()
w=22
return A.b(C.H7(a3,q),$async$H8)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H8,v)},
diM(d){var w=A.U(d).j("B<1,m>"),v=new A.B(d,new C.bcB(),w).eF(0),u=new A.B(d,new C.bcC(),w).eF(0),t=new A.B(d,new C.bcD(),w).eF(0),s=new A.B(d,new C.bcE(),w).eF(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d7R(null,q,u,t,v,s));++q}return r},
apX(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apX=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H8(d),$async$apX)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bcF(),s).eF(0)
p=r.d7(t,new C.bcG(),s).eF(0)
o=r.d7(t,new C.bcH(),s).eF(0)
n=r.d7(t,new C.bcI(),s).eF(0)
m=C.d7R(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H7(d,t),$async$apX)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apX,v)},
H7(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H7=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H7)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcA(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.an("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.am(s,null)),$async$H7)
case 3:return A.f(null,v)}})
return A.h($async$H7,v)},
dF8(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d7R(w,w,t,s,u,r)
return q},
d7R(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.ju(),h=d==null,g=D.U8[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U8[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bcz(),A.U(p).j("B<1,m>")).fa(0)
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
k=D.aUG[w]
j=D.aOB[w]
return new C.mX("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dF9(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.M(Date.now(),0,!1).a_().W())},
dF9(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.j0(d.by(256),16),2,"0")
return B.d.fa(v)},
d43:function d43(d){this.a=d},
d42:function d42(d,e){this.a=d
this.b=e},
d3Z:function d3Z(d){this.a=d},
d4_:function d4_(d){this.a=d},
d40:function d40(d){this.a=d},
d41:function d41(d,e){this.a=d
this.b=e},
Kb:function Kb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mX:function mX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcJ:function bcJ(){},
bcK:function bcK(){},
bcB:function bcB(){},
bcC:function bcC(){},
bcD:function bcD(){},
bcE:function bcE(){},
bcF:function bcF(){},
bcG:function bcG(){},
bcH:function bcH(){},
bcI:function bcI(){},
bcA:function bcA(){},
bcz:function bcz(){},
H6:function H6(d,e){this.c=d
this.a=e},
aaG:function aaG(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvP:function cvP(){},
cvO:function cvO(d,e){this.a=d
this.b=e},
cvM:function cvM(d){this.a=d},
cvN:function cvN(d,e){this.a=d
this.b=e},
cvQ:function cvQ(d){this.a=d},
cvU:function cvU(d){this.a=d},
cvV:function cvV(d,e){this.a=d
this.b=e},
cvT:function cvT(d,e,f){this.a=d
this.b=e
this.c=f},
cvS:function cvS(d,e){this.a=d
this.b=e},
cvR:function cvR(d,e){this.a=d
this.b=e},
cvW:function cvW(d){this.a=d},
Su:function Su(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBD:function aBD(d,e){this.c=d
this.a=e},
H5:function H5(d,e){this.c=d
this.a=e},
aCB:function aCB(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvJ:function cvJ(d){this.a=d},
cvK:function cvK(d){this.a=d},
cvL:function cvL(d){this.a=d},
cvI:function cvI(d,e){this.a=d
this.b=e},
cvF:function cvF(d){this.a=d},
cvG:function cvG(d){this.a=d},
cvE:function cvE(d,e){this.a=d
this.b=e},
cvH:function cvH(d){this.a=d},
cvD:function cvD(d){this.a=d},
aJa:function aJa(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJb:function aJb(d,e,f){this.c=d
this.d=e
this.a=f},
aCH:function aCH(d,e){this.c=d
this.a=e},
aJ9:function aJ9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cK1:function cK1(d){this.a=d},
cK2:function cK2(d){this.a=d},
aDR:function aDR(d){this.a=d},
ay1:function ay1(d,e){this.c=d
this.a=e},
dF7(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dF6(v)
if(u!=null)return new C.oW(w,C.d7P(u,!1),D.a03,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dF5(v)
if(t!=null)return new C.oW(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a04,"TikTok",q)
s=C.dF4(w,v)
if(s!=null)return s
r=C.dF3(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oW(w,w,D.bmL,"Video",q)
return q},
dF4(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/reel/"+w+u,D.Hc,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/p/"+w+u,D.Hc,t,null)}return null},
dF3(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oW(d,"https://www.facebook.com/plugins/video.php?href="+A.eB(2,d,B.aP,!1)+"&show_text=false&width=734",D.a05,"Facebook",null)},
dF6(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dF5(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H9:function H9(d,e){this.a=d
this.b=e},
oW:function oW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1E:function a1E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCC:function aCC(d,e){var _=this
_.d=$
_.cQ$=d
_.aQ$=e
_.c=_.a=null},
aDV:function aDV(d,e){this.c=d
this.a=e},
czN:function czN(d){this.a=d},
czO:function czO(d){this.a=d},
CG:function CG(d,e){this.c=d
this.a=e},
afh:function afh(){},
diL(d,e,f,g,h,i){return new C.a1F(i,f,h,e,g,d)},
dW_(d){var w=window
w.toString
A.fN(w,"message",new C.d0g(d),!1,x._)},
a1F:function a1F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaH:function aaH(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvX:function cvX(d){this.a=d},
cw4:function cw4(d){this.a=d},
cw2:function cw2(d){this.a=d},
cw0:function cw0(d){this.a=d},
cw1:function cw1(d){this.a=d},
cvZ:function cvZ(d){this.a=d},
cw3:function cw3(d){this.a=d},
cw_:function cw_(d){this.a=d},
cvY:function cvY(d){this.a=d},
d0g:function d0g(d){this.a=d},
diF(){var w,v,u
try{v=A.yj()
w=v.gq_(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d7P(d,e){var w=C.diF(),v=A.a([],x.s)
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
d7O(d){var w=A.aq(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
diG(d){var w=A.bn(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bn(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dF0(d,e,f){var w,v,u=C.d7O(d)
if(u!=null){if(f){w=C.diF()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.diG(C.d7P(u,e))}return C.diG(d)},
dF1(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dF2(d){var w
if($.LO().a==null)return!1
w=$.DV().a
return d>=w&&d<w+4},
diJ(){var w=$.apW
if(w!=null)w.a7(0)
$.apW=null
$.DV().sv(0,0)},
diI(){var w,v,u,t=$.LO()
if(t.a==null)return
w=$.apW
if(w!=null)w.a7(0)
v=$.diH
if(v<=4){t=t.a
t.toString
C.d7Q(t)
return}w=$.DV()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d7Q(t)},
d7Q(d){var w=$.apW
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
default:w=null}$.apW=A.dn(A.d7(0,0,0,0,0,w),C.dWa())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kb.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.n(20),s=A.V(B.R.l(0.25),B.o,1),r=A.a_(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eF,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bP,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ep,w,w,w)}}
C.mX.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H6.prototype={
S(){return new C.aaG(A.a([],x.e))},
gez(){return this.c}}
C.aaG.prototype={
Z(){var w=this
w.a3()
$.DV().ak(0,w.gasf())
C.dW_(w.gber())
w.Vs()},
bdR(){if(this.c!=null)this.n(new C.cvP())},
bes(){C.diI()},
p(){$.DV().V(0,this.gasf())
C.diJ()
$.LO().sv(0,null)
this.a2()},
Vs(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vs=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H8(t.a.c),$async$Vs)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvO(t,s))
$.bcy=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vs,v)},
RJ(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RJ=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cvM(t))
w=3
return A.b(C.apX(t.a.c),$async$RJ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvN(t,s))
$.bcy=J.a3(t.d)
t.c.F(x.q).f.O(A.bk(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RJ,v)},
bgk(d){var w=this.c
w.toString
A.a5(w,!1).cw(A.ec(new C.cvQ(d),!1,null,x.H))},
bgW(){var w=this.c
w.toString
return C.V5(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.dU:B.bE,s=A.aK(v,v,v,v,B.Fp,v,v,v,new C.cvU(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bd(A.G(A.a([A.H(new A.I(B.ib,A.j(r,v,1,B.ag,v,v,v,A.l(v,v,u?B.c:B.P,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aS(!1,B.M,!0,v,A.aW(!1,v,!0,new A.I(B.aJ,A.a_(B.eS,B.R,v,v,28),v),B.c0,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgV(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.Z)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cg(!0,A.y(A.a([new A.I(D.OP,r,v),A.H(w.e?B.ld:new A.it($.LO(),new C.cvV(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0)
return A.cj(v,t,s,v,!1,!1,A.akK(B.R,B.AZ,B.n3,D.c_0,w.e?v:new C.cvW(w)),v)}}
C.Su.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.V(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.cu,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1E(n,!0,!C.dF2(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a_(B.ih,B.lj,u,u,22),B.al,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.vI,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aS(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cC(p,A.hy(A.y(A.a([new C.aBD(o,u),A.H(n,1),A.u(u,A.G(A.a([A.a_(B.t6,B.R.l(0.85),u,u,9),D.byq,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.a9,u,u,u,u,u,D.amZ,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,u,u,new A.t(u,u,r,s,q,D.SX,B.k),u,u,u,B.fc,u,u,u),1),B.al,A.j(o.b,u,1,B.ag,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ag,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ag,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.Z)}}
C.aBD.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ag,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a_(B.pi,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a9,w,w,w,w,w,B.OE,w,w,w)}}
C.H5.prototype={
S(){return new C.aCB()}}
C.aCB.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.dU:B.bE,t=A.aK(w,w,w,w,B.Fp,w,w,w,new C.cvJ(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cj(w,u,A.cg(!0,A.y(A.a([new A.I(D.OP,A.G(A.a([t,A.H(new A.Bd(A.G(A.a([A.H(new A.I(B.ib,A.j(s.b+" \xb7 "+s.c,w,1,B.ag,w,w,w,A.l(w,w,v?B.c:B.P,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aS(!1,B.M,!0,w,A.aW(!1,w,!0,new A.I(B.aJ,A.a_(B.eS,B.R,w,w,28),w),B.c0,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvK(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.Z)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.it($.LO(),new C.cvL(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0),w,!1,!1,w,w)}}
C.aJa.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.er,28),new A.ag(0,B.x,B.q.l(0.45),B.cI,18)],x.V),o=A.V(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.diL(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaGZ(),v+"_full")
w=v}else w=new C.aCH(t.r,s)}else w=new C.ay1(m,s)
else w=D.c4t
return A.u(s,A.cC(n,A.hy(A.y(A.a([new C.aJb(m,l,s),A.H(w,1),new C.aJ9(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,s,s,new A.t(s,s,o,q,p,D.SX,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aJb.prototype={
B(d){var w,v,u,t,s=null,r=new A.M(Date.now(),0,!1),q=A.df(r)
r=A.h4(r)
w=new A.dg(q,r)
v=w.gGL()===0?12:w.gGL()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eN:B.hw)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lV,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.axr,B.dD,D.awF,B.dD,D.axv],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.G(A.a([A.a_(B.Fh,B.R.l(0.9),s,s,12),B.dD,A.H(A.j(u.c,s,s,B.ag,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.a9,s,s,s,s,s,D.anH,s,s,s)}}
C.aCH.prototype={
B(d){var w=null
return A.u(w,A.aP(A.y(A.a([A.a_(B.xr,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.ey(D.aAR,D.bNL,this.c,A.eu(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aG(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vI,w,w,w,w,w,w,w,w,1/0)}}
C.aJ9.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as8(B.Rp,"YouTube",s===0,r,new C.cK1(u))
s=u.as8(B.kA,"Device",s===1,r,new C.cK2(u))
w=r?"Power off":"Power on"
v=r?D.Rq:D.auB
return A.u(t,A.G(A.a([q,B.a_,s,B.b3,A.aK(t,t,t,t,A.a_(v,r?B.b4:B.dM,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cF)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a9,t,t,t,t,t,D.ant,t,t,t)},
as8(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aV
else w=f?B.R:B.a8
v=f&&g?B.R.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aS(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.I(B.lt,A.y(A.a([A.a_(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.Z),1)}}
C.aDR.prototype={
B(d){return D.adX}}
C.ay1.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jV,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qC("Serial",u.c),q=w.qC("Model",u.d),p=w.qC("Device ID",u.e),o=w.qC("IMEI",u.r),n=w.qC("MAC",u.f),m=w.qC("OS",u.w+" "+u.x),l=w.qC("Location",u.y+", "+u.z),k=w.qC("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qC("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.al,s,B.V,r,q,p,o,n,m,l,k,j,w.qC("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aJ,v,v,B.a1,!1)},
qC(d,e){var w=null
return new A.I(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.j(e,w,w,w,w,w,w,D.bFv,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H9.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oW.prototype={
gaGZ(){var w=this.c
return w===D.a03||w===D.a04||w===D.Hc||w===D.a05}}
C.a1E.prototype={
S(){return new C.aCC(null,null)}}
C.aCC.prototype={
Z(){this.a3()
var w=A.bF(null,B.rp,null,1,null,this)
w.mr(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQr()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dM(t,new A.t(t,t,t,t,t,new A.ap(B.cO,B.bZ,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bw),q=x.Y,p=u.d
p===$&&A.c()
p=A.cu(B.i5,p,t)
w=B.c.l(0.92)
q=A.aP(new A.d0(new A.b1(p,new A.bo(0.72,1,q),q.j("b1<bl.T>")),!1,A.a_(B.ih,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lj
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDV(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aM(B.a6,t,B.aU,B.m,s,t)}}
C.aDV.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kE(u,new C.czN(this),B.bx,!0,w,w,new C.czO(this),w)
return new C.CG(v,w)}}
C.CG.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.ra,B.Lr],x.O),B.ih)
break
case 1:w=new A.aJ(A.a([B.vI,D.ahS],x.O),B.jE)
break
case 2:w=new A.aJ(A.a([D.ajn,D.ahr],x.O),B.xA)
break
case 3:w=new A.aJ(A.a([B.P,B.cG],x.O),B.xE)
break
case 4:w=new A.aJ(A.a([B.a9,B.ak],x.O),B.n_)
break
default:w=u}v=w.a
return A.u(u,A.aP(A.a_(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.an,B.aw,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afh.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.V(0,w.gdn())
w.aQ$=null
w.a2()},
bp(){this.bE()
this.bC()
this.dq()}}
C.a1F.prototype={
S(){return new C.aaH()}}
C.aaH.prototype={
bx7(d,e){var w=C.d7O(d)
if(w!=null)return C.d7P(w,e)
return d},
a3M(d,e){var w,v=this,u=C.d7O(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bx7(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dF0(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bv0(){var w,v=this
if(v.w)return
v.n(new C.cvX(v))
w=v.e
if(w!=null)v.a3M(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aD()
u.d=w
try{$.DW()
$.op().rR(w,new C.cw4(u),!0)}catch(v){u.r=!0
u.f=!1}},
aR(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvY(v))
w=v.e
w.toString
v.a3M(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a_(B.RG,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.B,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.hy(A.aP(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Ym(n,B.pU,w)],v)
if(o.f)w.push(A.hy(A.aP(new A.al(28,28,D.aeN,n),n,n,n),B.cl,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.V(B.aV,B.o,1)
q=A.a_(B.Fl,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eH(0,A.aS(!1,B.M,!0,n,A.aW(!1,n,!0,A.aP(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O9,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbv_(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.Z)))}return new A.aM(B.a6,n,B.aU,B.m,w,n)}}
var z=a.updateTypes(["m(mX)","~()","H6(S)","mX(X<@,@>)","a0(mX)","X<m,@>(mX)","ax<~>()","H5(S)","it<R>(S,oW?,p?)","Su(S,R)","rd(S,oW?,p?)","CG(S,ak,dw?)"])
C.d43.prototype={
$1(d){return new C.H6(this.a,null)},
$S:z+2}
C.d42.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cz,B.P],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.er,32)],x.V),g=A.V(m?B.bo:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.awi,B.h,n,n,new A.t(B.R.l(0.18),n,A.V(B.R.l(0.45),B.o,1),n,n,n,B.aj),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ah,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.ei,w,A.aK(n,n,n,n,A.a_(B.cx,m?B.a8:B.cl,n,n,n),n,n,n,new C.d3Z(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a0,B.a3,B.y,j,n,n),B.k),n,n,n,B.On,n,n,n)
e=A.ed(B.bY,A.a([new C.Kb("YouTube",B.Fg,m,n),new C.Kb("TikTok",B.jE,m,n),new C.Kb("Instagram",B.xA,m,n),new C.Kb("Facebook",B.xE,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bE
r=A.a_(B.jD,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.az
u=A.y(A.a([e,B.aq,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bm(n,new A.b5(4,q,B.K),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aG(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Kj),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.F,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.O,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.j2(D.awm,D.bZ7,new C.d4_(d),A.iF(n,n,n,n,n,n,n,n,n,n,n,m?B.aG:B.ah,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dM(A.cC(f,A.y(A.a([j,new A.I(D.aoH,u,n),new A.I(D.aoS,A.G(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a4,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d40(d),n,n),B.a_,A.dK(D.aAz,D.bZV,new C.d41(d,w),A.bu(B.R,n,n,n,B.c,n,D.O9,n,new A.bD(A.n(14),B.K),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.Q,0,B.l),B.at),new A.t(n,n,g,k,h,new A.ap(B.an,B.aw,B.y,i,n,n),B.k),B.bw),n)},
$S:68}
C.d3Z.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4_.prototype={
$0(){C.diJ()
$.LO().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d40.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d41.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcJ.prototype={
$1(d){return C.diK(A.P(d,x.N,x.z))},
$S:z+3}
C.bcK.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcB.prototype={
$1(d){return d.c},
$S:z+0}
C.bcC.prototype={
$1(d){return d.r},
$S:z+0}
C.bcD.prototype={
$1(d){return d.f},
$S:z+0}
C.bcE.prototype={
$1(d){return d.at},
$S:z+0}
C.bcF.prototype={
$1(d){return d.c},
$S:z+0}
C.bcG.prototype={
$1(d){return d.r},
$S:z+0}
C.bcH.prototype={
$1(d){return d.f},
$S:z+0}
C.bcI.prototype={
$1(d){return d.at},
$S:z+0}
C.bcA.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bcz.prototype={
$1(d){return B.a.bj(B.n.j0(d,16),2,"0").toUpperCase()},
$S:78}
C.cvP.prototype={
$0(){},
$S:0}
C.cvO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvM.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvN.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvQ.prototype={
$1(d){return new C.H5(this.a,null)},
$S:z+7}
C.cvU.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvV.prototype={
$3(d,e,f){return new A.it($.DV(),new C.cvT(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AF(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.V(B.R.l(0.35),B.o,1)
q=A.a_(B.ih,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DV().a
m=B.j.aj(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.P,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.eP,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cC(s,new A.iP(1.7777777777777777,C.diL(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaGZ(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zR(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.kg(new A.I(B.D3,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p4(D.an7,A.atq(new A.o4(new C.cvS(i,j),J.a3(i.d),!1,!0,!0,A.w2(),k),D.bz7),k)],w))},
$S:1602}
C.cvS.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Su(v,e,J.a3(w.d),new C.cvR(w,v),this.b,null)},
$S:z+9}
C.cvR.prototype={
$0(){return this.a.bgk(this.b)},
$S:0}
C.cvW.prototype={
$0(){this.a.RJ()
return null},
$S:0}
C.cvJ.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvK.prototype={
$0(){C.V5(this.a,$.bcy)
return null},
$S:0}
C.cvL.prototype={
$3(d,e,f){return A.fG(new C.cvI(this.a,e))},
$S:z+10}
C.cvI.prototype={
$2(d,e){var w,v=null,u=B.j.aj(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aP(A.cl(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.aq,new C.aJa(u,s.a.c,s.e,s.d,new C.cvF(s),new C.cvG(s),new C.cvH(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wN,v,v,B.a1),v,v,v)},
$S:1603}
C.cvF.prototype={
$0(){var w=this.a.c
w.toString
C.V5(w,$.bcy)
return null},
$S:0}
C.cvG.prototype={
$1(d){var w=this.a
return w.n(new C.cvE(w,d))},
$S:39}
C.cvE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvH.prototype={
$0(){var w=this.a
return w.n(new C.cvD(w))},
$S:0}
C.cvD.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cK1.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cK2.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czN.prototype={
$3(d,e,f){return new C.CG(this.a.c,null)},
$S:z+11}
C.czO.prototype={
$3(d,e,f){if(f==null)return e
return new A.aM(B.a6,null,B.aU,B.m,A.a([new C.CG(this.a.c,null),D.aeb],x.p),null)},
$C:"$3",
$R:3,
$S:508}
C.cvX.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cw4.prototype={
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
w.a3M(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fN(v,"load",new C.cw2(w),!1,u)
v=w.e
v.toString
A.fN(v,"error",new C.cw3(w),!1,u)
w=w.e
w.toString
return w},
$S:533}
C.cw2.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cw0(w))
A.bM(B.C,new C.cw1(w),x.H)}},
$S:43}
C.cw0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cw1.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvZ(w))},
$S:12}
C.cvZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cw3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cw_(w))},
$S:43}
C.cw_.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvY.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d0g.prototype={
$1(d){var w,v,u,t,s=new A.Cf([],[]).G3(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1604};(function aliases(){var w=C.afh.prototype
w.aQr=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaG.prototype,"gasf","bdR",1)
w(u,"gber","bes",1)
w(u,"gbgV","bgW",6)
w(C.aaH.prototype,"gbv_","bv0",1)
v(C,"dWa","diI",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wl,[C.d43,C.d42,C.bcJ,C.bcK,C.bcB,C.bcC,C.bcD,C.bcE,C.bcF,C.bcG,C.bcH,C.bcI,C.bcA,C.bcz,C.cvQ,C.cvV,C.cvT,C.cvL,C.cvG,C.czN,C.czO,C.cw4,C.cw2,C.cw3,C.d0g])
v(A.WD,[C.d3Z,C.d4_,C.d40,C.d41,C.cvP,C.cvO,C.cvM,C.cvN,C.cvU,C.cvR,C.cvW,C.cvJ,C.cvK,C.cvF,C.cvE,C.cvH,C.cvD,C.cK1,C.cK2,C.cvX,C.cw0,C.cw1,C.cvZ,C.cw_,C.cvY])
v(A.aA,[C.Kb,C.Su,C.aBD,C.aJa,C.aJb,C.aCH,C.aJ9,C.aDR,C.ay1,C.aDV,C.CG])
v(A.ak,[C.mX,C.oW])
v(A.ad,[C.H6,C.H5,C.a1E,C.a1F])
v(A.ae,[C.aaG,C.aCB,C.afh,C.aaH])
v(A.WE,[C.cvS,C.cvI])
u(C.H9,A.ayV)
u(C.aCC,C.afh)
w(C.afh,A.e_)})()
A.dm_(b.typeUniverse,JSON.parse('{"H6":{"ad":[],"p":[]},"Su":{"aA":[],"p":[]},"H5":{"ad":[],"p":[]},"Kb":{"aA":[],"p":[]},"aaG":{"ae":["H6"]},"aBD":{"aA":[],"p":[]},"aCB":{"ae":["H5"]},"aJa":{"aA":[],"p":[]},"aJb":{"aA":[],"p":[]},"aCH":{"aA":[],"p":[]},"aJ9":{"aA":[],"p":[]},"aDR":{"aA":[],"p":[]},"ay1":{"aA":[],"p":[]},"a1E":{"ad":[],"p":[]},"CG":{"aA":[],"p":[]},"aCC":{"ae":["a1E"]},"aDV":{"aA":[],"p":[]},"a1F":{"ad":[],"p":[]},"aaH":{"ae":["a1F"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bh
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mX>"),s:w("ab<m>"),p:w("ab<p>"),t:w("ab<R>"),X:w("ac<mX>"),a:w("ac<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mU"),_:w("AC"),k:w("mX"),N:w("m"),Y:w("bo<a8>"),W:w("dh<m>"),J:w("it<R>"),j:w("it<oW?>"),E:w("vj<cx>"),q:w("Tb"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rq=new A.L(983224,"MaterialIcons",!1)
D.az3=new A.a6(D.Rq,48,B.aV,null,null,null)
D.bF9=new A.O(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMH=new A.x("Powered off",null,D.bF9,null,null,null,null,null,null,null,null,null)
D.aMG=w([D.az3,B.B,D.bMH],x.p)
D.akx=new A.fk(B.a1,B.e,B.Q,B.i,null,B.l,null,0,D.aMG,null)
D.adX=new A.dq(B.L,null,null,D.akx,null)
D.byO=new A.al(18,18,B.Lb,null)
D.aeb=new A.dq(B.L,null,null,D.byO,null)
D.aeN=new A.hh(2,null,null,null,null,B.T,null,null,null,null)
D.ahr=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahS=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajn=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amZ=new A.W(0,3,0,3)
D.an7=new A.W(10,0,10,88)
D.ant=new A.W(12,6,12,10)
D.anH=new A.W(14,8,14,6)
D.O9=new A.W(18,12,18,12)
D.aoH=new A.W(20,18,20,8)
D.aoS=new A.W(20,8,20,20)
D.OP=new A.W(8,6,15,8)
D.auB=new A.L(983222,"MaterialIcons",!1)
D.awi=new A.a6(B.ih,26,B.R,null,null,null)
D.awm=new A.a6(B.Qv,18,null,null,null,null)
D.awF=new A.a6(B.pi,14,B.T,null,null,null)
D.auS=new A.L(983420,"MaterialIcons",!1)
D.axr=new A.a6(D.auS,14,B.T,null,null,null)
D.at4=new A.L(62895,"MaterialIcons",!1)
D.axv=new A.a6(D.at4,14,B.T,null,null,null)
D.aAz=new A.a6(B.iV,20,null,null,null,null)
D.aAR=new A.a6(B.eS,16,null,null,null,null)
D.aP6=w([B.ak,B.P],x.O)
D.SX=new A.ap(B.an,B.aw,B.y,D.aP6,null,null)
D.bsG=new A.aJ("NGMY OS","14.2.1")
D.brx=new A.aJ("VirtualDroid","13.8.4")
D.brw=new A.aJ("NGMY OS","15.0.0")
D.bsf=new A.aJ("VirtualDroid","14.1.2")
D.bru=new A.aJ("NGMY Tab OS","12.9.7")
D.brs=new A.aJ("NGMY OS","13.5.3")
D.brh=new A.aJ("VirtualDroid","15.2.0")
D.brT=new A.aJ("NGMY OS","14.8.1")
D.bsl=new A.aJ("NGMY Tab OS","13.2.4")
D.bsQ=new A.aJ("VirtualDroid","12.6.9")
D.brd=new A.aJ("NGMY OS","16.0.1")
D.br4=new A.aJ("VirtualDroid","14.9.0")
D.bsy=new A.aJ("NGMY Tab OS","14.0.3")
D.brG=new A.aJ("NGMY OS","13.1.8")
D.brc=new A.aJ("VirtualDroid","13.4.5")
D.brr=new A.aJ("NGMY OS","15.3.2")
D.bsm=new A.aJ("NGMY Tab OS","12.4.1")
D.bsA=new A.aJ("VirtualDroid","16.1.0")
D.brS=new A.aJ("NGMY OS","14.4.6")
D.bsH=new A.aJ("VirtualDroid","15.0.8")
D.aOB=w([D.bsG,D.brx,D.brw,D.bsf,D.bru,D.brs,D.brh,D.brT,D.bsl,D.bsQ,D.brd,D.br4,D.bsy,D.brG,D.brc,D.brr,D.bsm,D.bsA,D.brS,D.bsH],A.bh("ab<+(m,m)>"))
D.buS=new A.eh(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buq=new A.eh(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bul=new A.eh(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buu=new A.eh(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.buh=new A.eh(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.buw=new A.eh(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buU=new A.eh(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bui=new A.eh(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bup=new A.eh(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.buy=new A.eh(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bug=new A.eh(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buM=new A.eh(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buJ=new A.eh(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.buo=new A.eh(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buG=new A.eh(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.buF=new A.eh(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buf=new A.eh(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.but=new A.eh(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.buD=new A.eh(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.buI=new A.eh(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U8=w([D.buS,D.buq,D.bul,D.buu,D.buh,D.buw,D.buU,D.bui,D.bup,D.buy,D.bug,D.buM,D.buJ,D.buo,D.buG,D.buF,D.buf,D.but,D.buD,D.buI],A.bh("ab<+(m,m,a8,a8,m)>"))
D.aUG=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a03=new C.H9(0,"youtube")
D.a04=new C.H9(1,"tiktok")
D.Hc=new C.H9(2,"instagram")
D.a05=new C.H9(3,"facebook")
D.bmL=new C.H9(4,"other")
D.byq=new A.al(3,null,null,null)
D.bz7=new A.i8(4,10,8,0.52,null)
D.bNY=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCu=new A.aT(D.bNY,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.m,null)
D.bFv=new A.O(!0,B.c,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNL=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bZ7=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZV=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c_0=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4t=new C.aDR(null)})();(function staticFields(){$.diH=20
$.apW=null
$.bcy=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_s","DV",()=>A.Ra(0))
w($,"e_t","LO",()=>A.Ra(null))})()};
(a=>{a["QLvoljXTgFGHQNpAyvAntGPZwBA="]=a.current})($__dart_deferred_initializers__);