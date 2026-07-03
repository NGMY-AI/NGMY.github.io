((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dX6(d,e){A.a5(d,!1).cw(A.ec(new C.d3R(e),!0,null,x.H))},
V5(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LN()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.aa(new A.aJ(n,B.a5,B.W),t)
w=3
return A.b(A.d1(B.D,new C.d3Q(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V5)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dEV(r)
if(q==null){d.F(x.q).f.O(D.bCq)
w=1
break}w=4
return A.b(A.bM(B.fM,null,x.H),$async$V5)
case 4:if(d.e==null){w=1
break}n=B.n.ak(e,1,999)
$.diu=n
p=C.dEP(n)
n=$.DU()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d7D(q)
d.F(x.q).f.O(A.bl(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V5,v)},
dix(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mW(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H7(d){return C.dEY(d)},
dEY(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H7=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H7)
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
k=A.dk(k,new C.bcI(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("a9<K.E>")
i=A.C(new A.a9(k,new C.bcJ(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.diz(q)
w=12
return A.b(C.H6(a3,p),$async$H7)
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
case 19:m=C.dix(A.P(n,x.N,x.z))
l=C.diz(A.a([m],x.e))
w=21
return A.b(C.H6(a3,l),$async$H7)
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
case 18:case 14:q=C.dEW()
w=22
return A.b(C.H6(a3,q),$async$H7)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H7,v)},
diz(d){var w=A.U(d).j("B<1,m>"),v=new A.B(d,new C.bcA(),w).eF(0),u=new A.B(d,new C.bcB(),w).eF(0),t=new A.B(d,new C.bcC(),w).eF(0),s=new A.B(d,new C.bcD(),w).eF(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d7E(null,q,u,t,v,s));++q}return r},
apX(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apX=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H7(d),$async$apX)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bcE(),s).eF(0)
p=r.d7(t,new C.bcF(),s).eF(0)
o=r.d7(t,new C.bcG(),s).eF(0)
n=r.d7(t,new C.bcH(),s).eF(0)
m=C.d7E(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H6(d,t),$async$apX)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apX,v)},
H6(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H6=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H6)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcz(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.an("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.am(s,null)),$async$H6)
case 3:return A.f(null,v)}})
return A.h($async$H6,v)},
dEW(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d7E(w,w,t,s,u,r)
return q},
d7E(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.ju(),h=d==null,g=D.U2[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U2[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bcy(),A.U(p).j("B<1,m>")).fa(0)
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
k=D.aUC[w]
j=D.aOw[w]
return new C.mW("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dEX(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.M(Date.now(),0,!1).a_().W())},
dEX(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.j0(d.by(256),16),2,"0")
return B.d.fa(v)},
d3R:function d3R(d){this.a=d},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3O:function d3O(d){this.a=d},
d3P:function d3P(d,e){this.a=d
this.b=e},
Ka:function Ka(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mW:function mW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcI:function bcI(){},
bcJ:function bcJ(){},
bcA:function bcA(){},
bcB:function bcB(){},
bcC:function bcC(){},
bcD:function bcD(){},
bcE:function bcE(){},
bcF:function bcF(){},
bcG:function bcG(){},
bcH:function bcH(){},
bcz:function bcz(){},
bcy:function bcy(){},
H5:function H5(d,e){this.c=d
this.a=e},
aaG:function aaG(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvC:function cvC(){},
cvB:function cvB(d,e){this.a=d
this.b=e},
cvz:function cvz(d){this.a=d},
cvA:function cvA(d,e){this.a=d
this.b=e},
cvD:function cvD(d){this.a=d},
cvH:function cvH(d){this.a=d},
cvI:function cvI(d,e){this.a=d
this.b=e},
cvG:function cvG(d,e,f){this.a=d
this.b=e
this.c=f},
cvF:function cvF(d,e){this.a=d
this.b=e},
cvE:function cvE(d,e){this.a=d
this.b=e},
cvJ:function cvJ(d){this.a=d},
Su:function Su(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBD:function aBD(d,e){this.c=d
this.a=e},
H4:function H4(d,e){this.c=d
this.a=e},
aCB:function aCB(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvw:function cvw(d){this.a=d},
cvx:function cvx(d){this.a=d},
cvy:function cvy(d){this.a=d},
cvv:function cvv(d,e){this.a=d
this.b=e},
cvs:function cvs(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvr:function cvr(d,e){this.a=d
this.b=e},
cvu:function cvu(d){this.a=d},
cvq:function cvq(d){this.a=d},
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
cJP:function cJP(d){this.a=d},
cJQ:function cJQ(d){this.a=d},
aDR:function aDR(d){this.a=d},
ay1:function ay1(d,e){this.c=d
this.a=e},
dEV(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dEU(v)
if(u!=null)return new C.oW(w,C.d7C(u,!1),D.a_Y,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dET(v)
if(t!=null)return new C.oW(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_Z,"TikTok",q)
s=C.dES(w,v)
if(s!=null)return s
r=C.dER(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oW(w,w,D.bmH,"Video",q)
return q},
dES(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/reel/"+w+u,D.Hb,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oW(d,"https://www.instagram.com/p/"+w+u,D.Hb,t,null)}return null},
dER(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oW(d,"https://www.facebook.com/plugins/video.php?href="+A.eB(2,d,B.aO,!1)+"&show_text=false&width=734",D.a0_,"Facebook",null)},
dEU(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dET(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H8:function H8(d,e){this.a=d
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
czA:function czA(d){this.a=d},
czB:function czB(d){this.a=d},
CF:function CF(d,e){this.c=d
this.a=e},
afh:function afh(){},
diy(d,e,f,g,h,i){return new C.a1F(i,f,h,e,g,d)},
dVN(d){var w=window
w.toString
A.fN(w,"message",new C.d03(d),!1,x._)},
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
cvK:function cvK(d){this.a=d},
cvS:function cvS(d){this.a=d},
cvQ:function cvQ(d){this.a=d},
cvO:function cvO(d){this.a=d},
cvP:function cvP(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvR:function cvR(d){this.a=d},
cvN:function cvN(d){this.a=d},
cvL:function cvL(d){this.a=d},
d03:function d03(d){this.a=d},
dis(){var w,v,u
try{v=A.yi()
w=v.gq_(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cA(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d7C(d,e){var w=C.dis(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eB(2,w,B.aO,!1))
v.push("widget_referrer="+A.eB(2,w,B.aO,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d7B(d){var w=A.aq(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dit(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dEO(d,e,f){var w,v,u=C.d7B(d)
if(u!=null){if(f){w=C.dis()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dit(C.d7C(u,e))}return C.dit(d)},
dEP(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dEQ(d){var w
if($.LN().a==null)return!1
w=$.DU().a
return d>=w&&d<w+4},
diw(){var w=$.apW
if(w!=null)w.a7(0)
$.apW=null
$.DU().sv(0,0)},
div(){var w,v,u,t=$.LN()
if(t.a==null)return
w=$.apW
if(w!=null)w.a7(0)
v=$.diu
if(v<=4){t=t.a
t.toString
C.d7D(t)
return}w=$.DU()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d7D(t)},
d7D(d){var w=$.apW
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
default:w=null}$.apW=A.dn(A.d7(0,0,0,0,0,w),C.dVY())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ka.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.n(20),s=A.V(B.R.l(0.25),B.o,1),r=A.a0(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eE,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bN,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.eo,w,w,w)}}
C.mW.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H5.prototype={
S(){return new C.aaG(A.a([],x.e))},
gez(){return this.c}}
C.aaG.prototype={
Z(){var w=this
w.a3()
$.DU().aj(0,w.gasb())
C.dVN(w.gbel())
w.Vr()},
bdL(){if(this.c!=null)this.n(new C.cvC())},
bem(){C.div()},
p(){$.DU().V(0,this.gasb())
C.diw()
$.LN().sv(0,null)
this.a2()},
Vr(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vr=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H7(t.a.c),$async$Vr)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvB(t,s))
$.bcx=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vr,v)},
RI(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RI=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cvz(t))
w=3
return A.b(C.apX(t.a.c),$async$RI)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvA(t,s))
$.bcx=J.a3(t.d)
t.c.F(x.q).f.O(A.bl(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RI,v)},
bge(d){var w=this.c
w.toString
A.a5(w,!1).cw(A.ec(new C.cvD(d),!1,null,x.H))},
bgQ(){var w=this.c
w.toString
return C.V5(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.dU:B.bE,s=A.aK(v,v,v,v,B.Fp,v,v,v,new C.cvH(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bc(A.G(A.a([A.H(new A.I(B.i7,A.j(r,v,1,B.ag,v,v,v,A.l(v,v,u?B.c:B.P,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aR(!1,B.M,!0,v,A.aW(!1,v,!0,new A.I(B.aJ,A.a0(B.eS,B.R,v,v,28),v),B.c0,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgP(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.Z)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cg(!0,A.y(A.a([new A.I(D.OK,r,v),A.H(w.e?B.ld:new A.it($.LN(),new C.cvI(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a1,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.akK(B.R,B.AY,B.n2,D.bZW,w.e?v:new C.cvJ(w)),v)}}
C.Su.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.V(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.cu,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1E(n,!0,!C.dEQ(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a0(B.id,B.li,u,u,22),B.al,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.vH,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aR(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cD(p,A.hy(A.y(A.a([new C.aBD(o,u),A.H(n,1),A.u(u,A.G(A.a([A.a0(B.t7,B.R.l(0.85),u,u,9),D.byn,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.amR,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,u,u,new A.t(u,u,r,s,q,D.SS,B.k),u,u,u,B.fc,u,u,u),1),B.al,A.j(o.b,u,1,B.ag,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ag,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ag,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.Z)}}
C.aBD.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ag,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a0(B.pi,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oz,w,w,w)}}
C.H4.prototype={
S(){return new C.aCB()}}
C.aCB.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.dU:B.bE,t=A.aK(w,w,w,w,B.Fp,w,w,w,new C.cvw(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cg(!0,A.y(A.a([new A.I(D.OK,A.G(A.a([t,A.H(new A.Bc(A.G(A.a([A.H(new A.I(B.i7,A.j(s.b+" \xb7 "+s.c,w,1,B.ag,w,w,w,A.l(w,w,v?B.c:B.P,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aR(!1,B.M,!0,w,A.aW(!1,w,!0,new A.I(B.aJ,A.a0(B.eS,B.R,w,w,28),w),B.c0,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvx(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.Z)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.it($.LN(),new C.cvy(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a1,!0,!0),w,!1,!1,w,w)}}
C.aJa.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.eq,28),new A.ag(0,B.x,B.q.l(0.45),B.cD,18)],x.V),o=A.V(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.diy(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaGU(),v+"_full")
w=v}else w=new C.aCH(t.r,s)}else w=new C.ay1(m,s)
else w=D.c4o
return A.u(s,A.cD(n,A.hy(A.y(A.a([new C.aJb(m,l,s),A.H(w,1),new C.aJ9(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,s,s,new A.t(s,s,o,q,p,D.SS,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aJb.prototype={
B(d){var w,v,u,t,s=null,r=new A.M(Date.now(),0,!1),q=A.df(r)
r=A.h4(r)
w=new A.dg(q,r)
v=w.gGK()===0?12:w.gGK()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eN:B.hu)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lS,s,s,s),B.b4,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.axn,B.dC,D.awB,B.dC,D.axr],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.al,A.G(A.a([A.a0(B.Fh,B.R.l(0.9),s,s,12),B.dC,A.H(A.j(u.c,s,s,B.ag,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.anz,s,s,s)}}
C.aCH.prototype={
B(d){var w=null
return A.u(w,A.aP(A.y(A.a([A.a0(B.xq,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.ex(D.aAN,D.bNH,this.c,A.ey(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aG(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vH,w,w,w,w,w,w,w,w,1/0)}}
C.aJ9.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as4(B.Rl,"YouTube",s===0,r,new C.cJP(u))
s=u.as4(B.kA,"Device",s===1,r,new C.cJQ(u))
w=r?"Power off":"Power on"
v=r?D.Rm:D.aux
return A.u(t,A.G(A.a([q,B.a_,s,B.b4,A.aK(t,t,t,t,A.a0(v,r?B.b3:B.dL,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cU)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.anl,t,t,t)},
as4(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aU
else w=f?B.R:B.a8
v=f&&g?B.R.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aR(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.I(B.ls,A.y(A.a([A.a0(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.Z),1)}}
C.aDR.prototype={
B(d){return D.adP}}
C.ay1.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jV,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qC("Serial",u.c),q=w.qC("Model",u.d),p=w.qC("Device ID",u.e),o=w.qC("IMEI",u.r),n=w.qC("MAC",u.f),m=w.qC("OS",u.w+" "+u.x),l=w.qC("Location",u.y+", "+u.z),k=w.qC("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qC("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.al,s,B.V,r,q,p,o,n,m,l,k,j,w.qC("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aJ,v,v,B.a0,!1)},
qC(d,e){var w=null
return new A.I(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cj,A.j(e,w,w,w,w,w,w,D.bFr,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H8.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oW.prototype={
gaGU(){var w=this.c
return w===D.a_Y||w===D.a_Z||w===D.Hb||w===D.a0_}}
C.a1E.prototype={
S(){return new C.aCC(null,null)}}
C.aCC.prototype={
Z(){this.a3()
var w=A.bE(null,B.rq,null,1,null,this)
w.mq(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQm()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dL(t,new A.t(t,t,t,t,t,new A.ap(B.cN,B.bZ,B.z,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bv),q=x.Y,p=u.d
p===$&&A.c()
p=A.cu(B.i3,p,t)
w=B.c.l(0.92)
q=A.aP(new A.d0(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bm.T>")),!1,A.a0(B.id,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.li
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
return new A.aM(B.a6,t,B.aT,B.m,s,t)}}
C.aDV.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kE(u,new C.czA(this),B.bx,!0,w,w,new C.czB(this),w)
return new C.CF(v,w)}}
C.CF.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.rb,B.Lr],x.O),B.id)
break
case 1:w=new A.aI(A.a([B.vH,D.ahJ],x.O),B.jE)
break
case 2:w=new A.aI(A.a([D.aje,D.ahi],x.O),B.xy)
break
case 3:w=new A.aI(A.a([B.P,B.cF],x.O),B.xC)
break
case 4:w=new A.aI(A.a([B.aa,B.ak],x.O),B.mZ)
break
default:w=u}v=w.a
return A.u(u,A.aP(A.a0(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.an,B.aw,B.z,v,u,u),B.k),u,u,u,u,u,u,u)}}
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
bx0(d,e){var w=C.d7B(d)
if(w!=null)return C.d7C(w,e)
return d},
a3K(d,e){var w,v=this,u=C.d7B(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bx0(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dEO(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buU(){var w,v=this
if(v.w)return
v.n(new C.cvK(v))
w=v.e
if(w!=null)v.a3K(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aD()
u.d=w
try{$.DV()
$.op().rR(w,new C.cvS(u),!0)}catch(v){u.r=!0
u.f=!1}},
aR(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvL(v))
w=v.e
w.toString
v.a3K(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a0(B.RB,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.B,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.hy(A.aP(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Ym(n,B.pU,w)],v)
if(o.f)w.push(A.hy(A.aP(new A.am(28,28,D.aeF,n),n,n,n),B.cl,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.V(B.aU,B.o,1)
q=A.a0(B.Fl,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eH(0,A.aR(!1,B.M,!0,n,A.aW(!1,n,!0,A.aP(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuT(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.Z)))}return new A.aM(B.a6,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mW)","~()","H5(S)","mW(X<@,@>)","a_(mW)","X<m,@>(mW)","ax<~>()","H4(S)","it<R>(S,oW?,o?)","Su(S,R)","rd(S,oW?,o?)","CF(S,ak,dw?)"])
C.d3R.prototype={
$1(d){return new C.H5(this.a,null)},
$S:z+2}
C.d3Q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cy,B.P],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.eq,32)],x.V),g=A.V(m?B.bo:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.awe,B.h,n,n,new A.t(B.R.l(0.18),n,A.V(B.R.l(0.45),B.o,1),n,n,n,B.aj),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.al,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ah,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.es,w,A.aK(n,n,n,n,A.a0(B.cC,m?B.a8:B.cl,n,n,n),n,n,n,new C.d3M(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a3,B.a4,B.z,j,n,n),B.k),n,n,n,B.Oj,n,n,n)
e=A.eg(B.bY,A.a([new C.Ka("YouTube",B.Fg,m,n),new C.Ka("TikTok",B.jE,m,n),new C.Ka("Instagram",B.xy,m,n),new C.Ka("Facebook",B.xC,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.P,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bE
r=A.a0(B.jD,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.ay
u=A.y(A.a([e,B.aq,A.au(n,B.G,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.L),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aG(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Kj),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.F,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.O,n,n,n,n)],v),B.af,B.e,B.f,0,B.l)
e=A.j2(D.awi,D.bZ2,new C.d3N(d),A.iF(n,n,n,n,n,n,n,n,n,n,n,m?B.aG:B.ah,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dL(A.cD(f,A.y(A.a([j,new A.I(D.aoD,u,n),new A.I(D.aoO,A.G(A.a([e,B.b4,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d3O(d),n,n),B.a_,A.dM(D.aAv,D.bZQ,new C.d3P(d,w),A.bu(B.R,n,n,n,B.c,n,D.O7,n,new A.bF(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.af,B.e,B.Q,0,B.l),B.at),new A.t(n,n,g,k,h,new A.ap(B.an,B.aw,B.z,i,n,n),B.k),B.bv),n)},
$S:67}
C.d3M.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3N.prototype={
$0(){C.diw()
$.LN().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d3O.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3P.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcI.prototype={
$1(d){return C.dix(A.P(d,x.N,x.z))},
$S:z+3}
C.bcJ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcA.prototype={
$1(d){return d.c},
$S:z+0}
C.bcB.prototype={
$1(d){return d.r},
$S:z+0}
C.bcC.prototype={
$1(d){return d.f},
$S:z+0}
C.bcD.prototype={
$1(d){return d.at},
$S:z+0}
C.bcE.prototype={
$1(d){return d.c},
$S:z+0}
C.bcF.prototype={
$1(d){return d.r},
$S:z+0}
C.bcG.prototype={
$1(d){return d.f},
$S:z+0}
C.bcH.prototype={
$1(d){return d.at},
$S:z+0}
C.bcz.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bcy.prototype={
$1(d){return B.a.bj(B.n.j0(d,16),2,"0").toUpperCase()},
$S:76}
C.cvC.prototype={
$0(){},
$S:0}
C.cvB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvz.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvA.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvD.prototype={
$1(d){return new C.H4(this.a,null)},
$S:z+7}
C.cvH.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvI.prototype={
$3(d,e,f){return new A.it($.DU(),new C.cvG(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvG.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AE(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.V(B.R.l(0.35),B.o,1)
q=A.a0(B.id,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DU().a
m=B.j.ak(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.P,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.eP,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cD(s,new A.iP(1.7777777777777777,C.diy(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaGU(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zQ(0,B.m,k,B.r,k,k,k,k,!1,k,B.a0,!1,A.a([new A.kg(new A.I(B.D3,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p4(D.an_,A.atq(new A.o4(new C.cvF(i,j),J.a3(i.d),!1,!0,!0,A.w1(),k),D.bz4),k)],w))},
$S:1601}
C.cvF.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Su(v,e,J.a3(w.d),new C.cvE(w,v),this.b,null)},
$S:z+9}
C.cvE.prototype={
$0(){return this.a.bge(this.b)},
$S:0}
C.cvJ.prototype={
$0(){this.a.RI()
return null},
$S:0}
C.cvw.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvx.prototype={
$0(){C.V5(this.a,$.bcx)
return null},
$S:0}
C.cvy.prototype={
$3(d,e,f){return A.fG(new C.cvv(this.a,e))},
$S:z+10}
C.cvv.prototype={
$2(d,e){var w,v=null,u=B.j.ak(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aP(A.cm(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.aq,new C.aJa(u,s.a.c,s.e,s.d,new C.cvs(s),new C.cvt(s),new C.cvu(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wM,v,v,B.a0),v,v,v)},
$S:1602}
C.cvs.prototype={
$0(){var w=this.a.c
w.toString
C.V5(w,$.bcx)
return null},
$S:0}
C.cvt.prototype={
$1(d){var w=this.a
return w.n(new C.cvr(w,d))},
$S:39}
C.cvr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvu.prototype={
$0(){var w=this.a
return w.n(new C.cvq(w))},
$S:0}
C.cvq.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJP.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJQ.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czA.prototype={
$3(d,e,f){return new C.CF(this.a.c,null)},
$S:z+11}
C.czB.prototype={
$3(d,e,f){if(f==null)return e
return new A.aM(B.a6,null,B.aT,B.m,A.a([new C.CF(this.a.c,null),D.ae3],x.p),null)},
$C:"$3",
$R:3,
$S:442}
C.cvK.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvS.prototype={
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
w.a3K(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fN(v,"load",new C.cvQ(w),!1,u)
v=w.e
v.toString
A.fN(v,"error",new C.cvR(w),!1,u)
w=w.e
w.toString
return w},
$S:607}
C.cvQ.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvO(w))
A.bM(B.C,new C.cvP(w),x.H)}},
$S:43}
C.cvO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvP.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvM(w))},
$S:12}
C.cvM.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvN(w))},
$S:43}
C.cvN.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvL.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d03.prototype={
$1(d){var w,v,u,t,s=new A.Ce([],[]).G2(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1603};(function aliases(){var w=C.afh.prototype
w.aQm=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaG.prototype,"gasb","bdL",1)
w(u,"gbel","bem",1)
w(u,"gbgP","bgQ",6)
w(C.aaH.prototype,"gbuT","buU",1)
v(C,"dVY","div",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wk,[C.d3R,C.d3Q,C.bcI,C.bcJ,C.bcA,C.bcB,C.bcC,C.bcD,C.bcE,C.bcF,C.bcG,C.bcH,C.bcz,C.bcy,C.cvD,C.cvI,C.cvG,C.cvy,C.cvt,C.czA,C.czB,C.cvS,C.cvQ,C.cvR,C.d03])
v(A.WD,[C.d3M,C.d3N,C.d3O,C.d3P,C.cvC,C.cvB,C.cvz,C.cvA,C.cvH,C.cvE,C.cvJ,C.cvw,C.cvx,C.cvs,C.cvr,C.cvu,C.cvq,C.cJP,C.cJQ,C.cvK,C.cvO,C.cvP,C.cvM,C.cvN,C.cvL])
v(A.aA,[C.Ka,C.Su,C.aBD,C.aJa,C.aJb,C.aCH,C.aJ9,C.aDR,C.ay1,C.aDV,C.CF])
v(A.ak,[C.mW,C.oW])
v(A.ad,[C.H5,C.H4,C.a1E,C.a1F])
v(A.ae,[C.aaG,C.aCB,C.afh,C.aaH])
v(A.WE,[C.cvF,C.cvv])
u(C.H8,A.ayV)
u(C.aCC,C.afh)
w(C.afh,A.e_)})()
A.dlN(b.typeUniverse,JSON.parse('{"H5":{"ad":[],"o":[]},"Su":{"aA":[],"o":[]},"H4":{"ad":[],"o":[]},"Ka":{"aA":[],"o":[]},"aaG":{"ae":["H5"]},"aBD":{"aA":[],"o":[]},"aCB":{"ae":["H4"]},"aJa":{"aA":[],"o":[]},"aJb":{"aA":[],"o":[]},"aCH":{"aA":[],"o":[]},"aJ9":{"aA":[],"o":[]},"aDR":{"aA":[],"o":[]},"ay1":{"aA":[],"o":[]},"a1E":{"ad":[],"o":[]},"CF":{"aA":[],"o":[]},"aCC":{"ae":["a1E"]},"aDV":{"aA":[],"o":[]},"a1F":{"ad":[],"o":[]},"aaH":{"ae":["a1F"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bh
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mW>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<R>"),X:w("ac<mW>"),a:w("ac<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mT"),_:w("AB"),k:w("mW"),N:w("m"),Y:w("bn<a8>"),W:w("dh<m>"),J:w("it<R>"),j:w("it<oW?>"),E:w("vi<cx>"),q:w("Tb"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rm=new A.L(983224,"MaterialIcons",!1)
D.az_=new A.a6(D.Rm,48,B.aU,null,null,null)
D.bF5=new A.O(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bME=new A.x("Powered off",null,D.bF5,null,null,null,null,null,null,null,null,null)
D.aMC=w([D.az_,B.B,D.bME],x.p)
D.ako=new A.f5(B.a0,B.e,B.Q,B.i,null,B.l,null,0,D.aMC,null)
D.adP=new A.dq(B.K,null,null,D.ako,null)
D.byL=new A.am(18,18,B.Lb,null)
D.ae3=new A.dq(B.K,null,null,D.byL,null)
D.aeF=new A.hh(2,null,null,null,null,B.T,null,null,null,null)
D.ahi=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahJ=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aje=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amR=new A.W(0,3,0,3)
D.an_=new A.W(10,0,10,88)
D.anl=new A.W(12,6,12,10)
D.anz=new A.W(14,8,14,6)
D.O7=new A.W(18,12,18,12)
D.aoD=new A.W(20,18,20,8)
D.aoO=new A.W(20,8,20,20)
D.OK=new A.W(8,6,15,8)
D.aux=new A.L(983222,"MaterialIcons",!1)
D.awe=new A.a6(B.id,26,B.R,null,null,null)
D.awi=new A.a6(B.Qq,18,null,null,null,null)
D.awB=new A.a6(B.pi,14,B.T,null,null,null)
D.auP=new A.L(983420,"MaterialIcons",!1)
D.axn=new A.a6(D.auP,14,B.T,null,null,null)
D.at0=new A.L(62895,"MaterialIcons",!1)
D.axr=new A.a6(D.at0,14,B.T,null,null,null)
D.aAv=new A.a6(B.iT,20,null,null,null,null)
D.aAN=new A.a6(B.eS,16,null,null,null,null)
D.aP1=w([B.ak,B.P],x.O)
D.SS=new A.ap(B.an,B.aw,B.z,D.aP1,null,null)
D.bsD=new A.aI("NGMY OS","14.2.1")
D.bru=new A.aI("VirtualDroid","13.8.4")
D.brt=new A.aI("NGMY OS","15.0.0")
D.bsc=new A.aI("VirtualDroid","14.1.2")
D.brr=new A.aI("NGMY Tab OS","12.9.7")
D.brp=new A.aI("NGMY OS","13.5.3")
D.bre=new A.aI("VirtualDroid","15.2.0")
D.brQ=new A.aI("NGMY OS","14.8.1")
D.bsi=new A.aI("NGMY Tab OS","13.2.4")
D.bsN=new A.aI("VirtualDroid","12.6.9")
D.bra=new A.aI("NGMY OS","16.0.1")
D.br1=new A.aI("VirtualDroid","14.9.0")
D.bsv=new A.aI("NGMY Tab OS","14.0.3")
D.brD=new A.aI("NGMY OS","13.1.8")
D.br9=new A.aI("VirtualDroid","13.4.5")
D.bro=new A.aI("NGMY OS","15.3.2")
D.bsj=new A.aI("NGMY Tab OS","12.4.1")
D.bsx=new A.aI("VirtualDroid","16.1.0")
D.brP=new A.aI("NGMY OS","14.4.6")
D.bsE=new A.aI("VirtualDroid","15.0.8")
D.aOw=w([D.bsD,D.bru,D.brt,D.bsc,D.brr,D.brp,D.bre,D.brQ,D.bsi,D.bsN,D.bra,D.br1,D.bsv,D.brD,D.br9,D.bro,D.bsj,D.bsx,D.brP,D.bsE],A.bh("ab<+(m,m)>"))
D.buP=new A.eh(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bun=new A.eh(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bui=new A.eh(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bur=new A.eh(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bue=new A.eh(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.but=new A.eh(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buR=new A.eh(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buf=new A.eh(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bum=new A.eh(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.buv=new A.eh(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bud=new A.eh(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buJ=new A.eh(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buG=new A.eh(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bul=new A.eh(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buD=new A.eh(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.buC=new A.eh(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buc=new A.eh(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.buq=new A.eh(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.buA=new A.eh(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.buF=new A.eh(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U2=w([D.buP,D.bun,D.bui,D.bur,D.bue,D.but,D.buR,D.buf,D.bum,D.buv,D.bud,D.buJ,D.buG,D.bul,D.buD,D.buC,D.buc,D.buq,D.buA,D.buF],A.bh("ab<+(m,m,a8,a8,m)>"))
D.aUC=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_Y=new C.H8(0,"youtube")
D.a_Z=new C.H8(1,"tiktok")
D.Hb=new C.H8(2,"instagram")
D.a0_=new C.H8(3,"facebook")
D.bmH=new C.H8(4,"other")
D.byn=new A.am(3,null,null,null)
D.bz4=new A.i8(4,10,8,0.52,null)
D.bNU=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCq=new A.aT(D.bNU,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.m,null)
D.bFr=new A.O(!0,B.c,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNH=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bZ2=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZQ=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZW=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4o=new C.aDR(null)})();(function staticFields(){$.diu=20
$.apW=null
$.bcx=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_f","DU",()=>A.Ra(0))
w($,"e_g","LN",()=>A.Ra(null))})()};
(a=>{a["FCyLJSd1v5ThMXjhoSrGvM6Lphw="]=a.current})($__dart_deferred_initializers__);