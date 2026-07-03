((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dWT(d,e){A.a5(d,!1).cw(A.eb(new C.d3C(e),!0,null,x.H))},
V3(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V3=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LL()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.aa(new A.aI(n,B.a5,B.U),t)
w=3
return A.b(A.d2(B.C,new C.d3B(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V3)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dEH(r)
if(q==null){d.F(x.q).f.O(D.bCQ)
w=1
break}w=4
return A.b(A.bM(B.fM,null,x.H),$async$V3)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.die=n
p=C.dEB(n)
n=$.DS()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d7n(q)
d.F(x.q).f.O(A.bl(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V3,v)},
dih(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mT(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H5(d){return C.dEK(d)},
dEK(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H5=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H5)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aE(0,a0,null)
w=x.a.b(r)&&J.cw(r)?10:11
break
case 10:k=J.eT(r,x.f)
k=A.dm(k,new C.bcD(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("a9<J.E>")
i=A.C(new A.a9(k,new C.bcE(),j),j.j("J.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dij(q)
w=12
return A.b(C.H4(a3,p),$async$H5)
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
case 19:m=C.dih(A.O(n,x.N,x.z))
l=C.dij(A.a([m],x.e))
w=21
return A.b(C.H4(a3,l),$async$H5)
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
case 18:case 14:q=C.dEI()
w=22
return A.b(C.H4(a3,q),$async$H5)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H5,v)},
dij(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bcv(),w).eF(0),u=new A.B(d,new C.bcw(),w).eF(0),t=new A.B(d,new C.bcx(),w).eF(0),s=new A.B(d,new C.bcy(),w).eF(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d7o(null,q,u,t,v,s));++q}return r},
apV(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apV=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H5(d),$async$apV)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bcz(),s).eF(0)
p=r.d7(t,new C.bcA(),s).eF(0)
o=r.d7(t,new C.bcB(),s).eF(0)
n=r.d7(t,new C.bcC(),s).eF(0)
m=C.d7o(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H4(d,t),$async$apV)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apV,v)},
H4(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H4=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H4)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcu(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.an("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.al(s,null)),$async$H4)
case 3:return A.f(null,v)}})
return A.h($async$H4,v)},
dEI(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d7o(w,w,t,s,u,r)
return q},
d7o(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.U6[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U6[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bct(),A.T(p).j("B<1,m>")).fa(0)
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
k=D.aV0[w]
j=D.aOT[w]
return new C.mT("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dEJ(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dEJ(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.j0(d.by(256),16),2,"0")
return B.d.fa(v)},
d3C:function d3C(d){this.a=d},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3x:function d3x(d){this.a=d},
d3y:function d3y(d){this.a=d},
d3z:function d3z(d){this.a=d},
d3A:function d3A(d,e){this.a=d
this.b=e},
K8:function K8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mT:function mT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bcD:function bcD(){},
bcE:function bcE(){},
bcv:function bcv(){},
bcw:function bcw(){},
bcx:function bcx(){},
bcy:function bcy(){},
bcz:function bcz(){},
bcA:function bcA(){},
bcB:function bcB(){},
bcC:function bcC(){},
bcu:function bcu(){},
bct:function bct(){},
H3:function H3(d,e){this.c=d
this.a=e},
aaE:function aaE(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvo:function cvo(){},
cvn:function cvn(d,e){this.a=d
this.b=e},
cvl:function cvl(d){this.a=d},
cvm:function cvm(d,e){this.a=d
this.b=e},
cvp:function cvp(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvu:function cvu(d,e){this.a=d
this.b=e},
cvs:function cvs(d,e,f){this.a=d
this.b=e
this.c=f},
cvr:function cvr(d,e){this.a=d
this.b=e},
cvq:function cvq(d,e){this.a=d
this.b=e},
cvv:function cvv(d){this.a=d},
Ss:function Ss(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBB:function aBB(d,e){this.c=d
this.a=e},
H2:function H2(d,e){this.c=d
this.a=e},
aCz:function aCz(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvi:function cvi(d){this.a=d},
cvj:function cvj(d){this.a=d},
cvk:function cvk(d){this.a=d},
cvh:function cvh(d,e){this.a=d
this.b=e},
cve:function cve(d){this.a=d},
cvf:function cvf(d){this.a=d},
cvd:function cvd(d,e){this.a=d
this.b=e},
cvg:function cvg(d){this.a=d},
cvc:function cvc(d){this.a=d},
aJ8:function aJ8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJ9:function aJ9(d,e,f){this.c=d
this.d=e
this.a=f},
aCF:function aCF(d,e){this.c=d
this.a=e},
aJ7:function aJ7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJB:function cJB(d){this.a=d},
cJC:function cJC(d){this.a=d},
aDP:function aDP(d){this.a=d},
ay_:function ay_(d,e){this.c=d
this.a=e},
dEH(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dEG(v)
if(u!=null)return new C.oU(w,C.d7m(u,!1),D.a02,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dEF(v)
if(t!=null)return new C.oU(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a03,"TikTok",q)
s=C.dEE(w,v)
if(s!=null)return s
r=C.dED(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oU(w,w,D.bn6,"Video",q)
return q},
dEE(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oU(d,"https://www.instagram.com/reel/"+w+u,D.He,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oU(d,"https://www.instagram.com/p/"+w+u,D.He,t,null)}return null},
dED(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oU(d,"https://www.facebook.com/plugins/video.php?href="+A.eC(2,d,B.aN,!1)+"&show_text=false&width=734",D.a04,"Facebook",null)},
dEG(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dEF(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H6:function H6(d,e){this.a=d
this.b=e},
oU:function oU(d,e,f,g,h){var _=this
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
aCA:function aCA(d,e){var _=this
_.d=$
_.cQ$=d
_.aQ$=e
_.c=_.a=null},
aDT:function aDT(d,e){this.c=d
this.a=e},
czm:function czm(d){this.a=d},
czn:function czn(d){this.a=d},
CD:function CD(d,e){this.c=d
this.a=e},
afg:function afg(){},
dii(d,e,f,g,h,i){return new C.a1D(i,f,h,e,g,d)},
dVz(d){var w=window
w.toString
A.h6(w,"message",new C.d_P(d),!1,x._)},
a1D:function a1D(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaF:function aaF(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvw:function cvw(d){this.a=d},
cvE:function cvE(d){this.a=d},
cvC:function cvC(d){this.a=d},
cvA:function cvA(d){this.a=d},
cvB:function cvB(d){this.a=d},
cvy:function cvy(d){this.a=d},
cvD:function cvD(d){this.a=d},
cvz:function cvz(d){this.a=d},
cvx:function cvx(d){this.a=d},
d_P:function d_P(d){this.a=d},
dic(){var w,v,u
try{v=A.ye()
w=v.gq_(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d7m(d,e){var w=C.dic(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eC(2,w,B.aN,!1))
v.push("widget_referrer="+A.eC(2,w,B.aN,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(v,"&")},
d7l(d){var w=A.aq(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
did(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dEA(d,e,f){var w,v,u=C.d7l(d)
if(u!=null){if(f){w=C.dic()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.did(C.d7m(u,e))}return C.did(d)},
dEB(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dEC(d){var w
if($.LL().a==null)return!1
w=$.DS().a
return d>=w&&d<w+4},
dig(){var w=$.apU
if(w!=null)w.a7(0)
$.apU=null
$.DS().sv(0,0)},
dif(){var w,v,u,t=$.LL()
if(t.a==null)return
w=$.apU
if(w!=null)w.a7(0)
v=$.die
if(v<=4){t=t.a
t.toString
C.d7n(t)
return}w=$.DS()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d7n(t)},
d7n(d){var w=$.apU
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
default:w=null}$.apU=A.dq(A.d8(0,0,0,0,0,w),C.dVK())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K8.prototype={
B(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eE,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.X:B.cN,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.eo,w,w,w)}}
C.mT.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H3.prototype={
S(){return new C.aaE(A.a([],x.e))},
gez(){return this.c}}
C.aaE.prototype={
Z(){var w=this
w.a3()
$.DS().aj(0,w.gas7())
C.dVz(w.gbee())
w.Vo()},
bdE(){if(this.c!=null)this.n(new C.cvo())},
bef(){C.dif()},
p(){$.DS().V(0,this.gas7())
C.dig()
$.LL().sv(0,null)
this.a2()},
Vo(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vo=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H5(t.a.c),$async$Vo)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvn(t,s))
$.bcs=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vo,v)},
RE(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RE=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cvl(t))
w=3
return A.b(C.apV(t.a.c),$async$RE)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvm(t,s))
$.bcs=J.a3(t.d)
t.c.F(x.q).f.O(A.bl(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RE,v)},
bg7(d){var w=this.c
w.toString
A.a5(w,!1).cw(A.eb(new C.cvp(d),!1,null,x.H))},
bgJ(){var w=this.c
w.toString
return C.V3(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.Y(d).ax.a===B.W,t=u?B.dR:B.d6,s=A.aK(v,v,v,v,B.Ft,v,v,v,new C.cvt(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.Ba(A.F(A.a([A.I(new A.G(B.i7,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.R,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aQ(!1,B.L,!0,v,A.aW(!1,v,!0,new A.G(B.aI,A.a1(B.eS,B.P,v,v,28),v),B.c_,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgI(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a_)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cg(!0,A.y(A.a([new A.G(D.OL,r,v),A.I(w.e?B.lb:new A.is($.LL(),new C.cvu(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a1,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.akI(B.P,B.B0,B.mZ,D.c_U,w.e?v:new C.cvv(w)),v)}}
C.Ss.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1C(n,!0,!C.dEC(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.id,B.lg,u,u,22),B.aj,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vI,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aQ(!1,B.L,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cC(p,A.hy(A.y(A.a([new C.aBB(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.t8,B.P.l(0.85),u,u,9),D.byN,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.an6,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.SV,B.k),u,u,u,B.fb,u,u,u),1),B.aj,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a_)}}
C.aBB.prototype={
B(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gav(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.pk,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.OA,w,w,w)}}
C.H2.prototype={
S(){return new C.aCz()}}
C.aCz.prototype={
B(d){var w=null,v=A.Y(d).ax.a===B.W,u=v?B.dR:B.d6,t=A.aK(w,w,w,w,B.Ft,w,w,w,new C.cvi(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.cg(!0,A.y(A.a([new A.G(D.OL,A.F(A.a([t,A.I(new A.Ba(A.F(A.a([A.I(new A.G(B.i7,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.R,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aQ(!1,B.L,!0,w,A.aW(!1,w,!0,new A.G(B.aI,A.a1(B.eS,B.P,w,w,28),w),B.c_,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvj(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.is($.LL(),new C.cvk(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a1,!0,!0),w,!1,!1,w,w)}}
C.aJ8.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.eq,28),new A.ag(0,B.w,B.q.l(0.45),B.cB,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dii(new A.dj(v+"_full_"+u,x.W),!1,u,!1,w.gaGP(),v+"_full")
w=v}else w=new C.aCF(t.r,s)}else w=new C.ay_(m,s)
else w=D.c5n
return A.u(s,A.cC(n,A.hy(A.y(A.a([new C.aJ9(m,l,s),A.I(w,1),new C.aJ7(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.SV,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aJ9.prototype={
B(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h4(r)
w=new A.di(q,r)
v=w.gGH()===0?12:w.gGH()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eN:B.hv)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lR,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.axL,B.dB,D.ax_,B.dB,D.axP],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.aj,A.F(A.a([A.a1(B.Fm,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.anP,s,s,s)}}
C.aCF.prototype={
B(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.xs,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.ey(D.aB9,D.bOj,this.c,A.ez(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aJ(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vI,w,w,w,w,w,w,w,w,1/0)}}
C.aJ7.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as0(B.Rm,"YouTube",s===0,r,new C.cJB(u))
s=u.as0(B.kB,"Device",s===1,r,new C.cJC(u))
w=r?"Power off":"Power on"
v=r?D.Rn:D.auX
return A.u(t,A.F(A.a([q,B.a0,s,B.b3,A.aK(t,t,t,t,A.a1(v,r?B.b4:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.anB,t,t,t)},
as0(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aT
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aQ(!1,B.L,!0,u,A.aW(!1,A.n(10),!0,new A.G(B.lq,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a_),1)}}
C.aDP.prototype={
B(d){return D.adX}}
C.ay_.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.je,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qC("Serial",u.c),q=w.qC("Model",u.d),p=w.qC("Device ID",u.e),o=w.qC("IMEI",u.r),n=w.qC("MAC",u.f),m=w.qC("OS",u.w+" "+u.x),l=w.qC("Location",u.y+", "+u.z),k=w.qC("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qC("Timezone",u.at)
u=u.ax
return A.ea(A.a([t,B.aj,s,B.S,r,q,p,o,n,m,l,k,j,w.qC("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aI,v,v,B.Z,!1)},
qC(d,e){var w=null
return new A.G(B.c0,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ch,A.j(e,w,w,w,w,w,w,D.bFW,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H6.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oU.prototype={
gaGP(){var w=this.c
return w===D.a02||w===D.a03||w===D.He||w===D.a04}}
C.a1C.prototype={
S(){return new C.aCA(null,null)}}
C.aCA.prototype={
Z(){this.a3()
var w=A.bE(null,B.rr,null,1,null,this)
w.mq(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQf()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dL(t,new A.t(t,t,t,t,t,new A.ap(B.cM,B.bY,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.bv),q=x.Y,p=u.d
p===$&&A.c()
p=A.ct(B.i4,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d1(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bm.T>")),!1,A.a1(B.id,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lg
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDT(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aM(B.a6,t,B.aS,B.m,s,t)}}
C.aDT.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kC(u,new C.czm(this),B.bx,!0,w,w,new C.czn(this),w)
return new C.CD(v,w)}}
C.CD.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.rc,B.Lu],x.O),B.id)
break
case 1:w=new A.aH(A.a([B.vI,D.ahU],x.O),B.jH)
break
case 2:w=new A.aH(A.a([D.ajo,D.aht],x.O),B.xA)
break
case 3:w=new A.aH(A.a([B.R,B.cD],x.O),B.xE)
break
case 4:w=new A.aH(A.a([B.aa,B.ai],x.O),B.mV)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.P.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afg.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.V(0,w.gdn())
w.aQ$=null
w.a2()},
bp(){this.bE()
this.bC()
this.dq()}}
C.a1D.prototype={
S(){return new C.aaF()}}
C.aaF.prototype={
bwT(d,e){var w=C.d7l(d)
if(w!=null)return C.d7m(w,e)
return d},
a3G(d,e){var w,v=this,u=C.d7l(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwT(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dEA(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buM(){var w,v=this
if(v.w)return
v.n(new C.cvw(v))
w=v.e
if(w!=null)v.a3G(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aD()
u.d=w
try{$.DT()
$.on().rR(w,new C.cvE(u),!0)}catch(v){u.r=!0
u.f=!1}},
aR(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvx(v))
w=v.e
w.toString
v.a3G(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.RC,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.hy(A.aU(new A.G(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.O,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yk(n,B.pV,w)],v)
if(o.f)w.push(A.hy(A.aU(new A.am(28,28,D.aeP,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aT,B.o,1)
q=A.a1(B.RE,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eI(0,A.aQ(!1,B.L,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O8,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuL(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a_)))}return new A.aM(B.a6,n,B.aS,B.m,w,n)}}
var z=a.updateTypes(["m(mT)","~()","H3(R)","mT(W<@,@>)","a_(mT)","W<m,@>(mT)","az<~>()","H2(R)","is<Q>(R,oU?,o?)","Ss(R,Q)","rc(R,oU?,o?)","CD(R,ak,dw?)"])
C.d3C.prototype={
$1(d){return new C.H3(this.a,null)},
$S:z+2}
C.d3B.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.W,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.R],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.eq,32)],x.V),g=A.U(m?B.bl:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.awD,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.R,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.aj,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.X:B.az,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.es,w,A.aK(n,n,n,n,A.a1(B.cI,m?B.a7:B.ci,n,n,n),n,n,n,new C.d3x(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a3,B.a4,B.y,j,n,n),B.k),n,n,n,B.Ok,n,n,n)
e=A.ef(B.bX,A.a([new C.K8("YouTube",B.Fl,m,n),new C.K8("TikTok",B.jH,m,n),new C.K8("Instagram",B.xA,m,n),new C.K8("Facebook",B.xE,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.R,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d6
r=A.a1(B.jG,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bl:B.b0
u=A.y(A.a([e,B.ap,A.au(n,B.F,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.K),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aJ(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Kk),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.M,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.j1(D.awH,D.c__,new C.d3y(d),A.iE(n,n,n,n,n,n,n,n,n,n,n,m?B.aF:B.az,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.V(12,0,12,12+l.f.d),A.dL(A.cC(f,A.y(A.a([j,new A.G(D.aoT,u,n),new A.G(D.ap3,A.F(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.X:B.a2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d3z(d),n,n),B.a0,A.dM(D.aAS,D.c_O,new C.d3A(d,w),A.bu(B.P,n,n,n,B.c,n,D.O8,n,new A.bF(A.n(14),B.K),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.O,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.al,B.av,B.y,i,n,n),B.k),B.bv),n)},
$S:66}
C.d3x.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3y.prototype={
$0(){C.dig()
$.LL().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d3z.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3A.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcD.prototype={
$1(d){return C.dih(A.O(d,x.N,x.z))},
$S:z+3}
C.bcE.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bcv.prototype={
$1(d){return d.c},
$S:z+0}
C.bcw.prototype={
$1(d){return d.r},
$S:z+0}
C.bcx.prototype={
$1(d){return d.f},
$S:z+0}
C.bcy.prototype={
$1(d){return d.at},
$S:z+0}
C.bcz.prototype={
$1(d){return d.c},
$S:z+0}
C.bcA.prototype={
$1(d){return d.r},
$S:z+0}
C.bcB.prototype={
$1(d){return d.f},
$S:z+0}
C.bcC.prototype={
$1(d){return d.at},
$S:z+0}
C.bcu.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bct.prototype={
$1(d){return B.a.bj(B.n.j0(d,16),2,"0").toUpperCase()},
$S:78}
C.cvo.prototype={
$0(){},
$S:0}
C.cvn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvm.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvp.prototype={
$1(d){return new C.H2(this.a,null)},
$S:z+7}
C.cvt.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvu.prototype={
$3(d,e,f){return new A.is($.DS(),new C.cvs(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvs.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AC(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.P.l(0.12)
s=A.n(12)
r=A.U(B.P.l(0.35),B.o,1)
q=A.a1(B.id,B.P,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DS().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.R,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cs,B.eP,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cC(s,new A.iO(1.7777777777777777,C.dii(new A.dj("fleet_master_"+r,x.W),!0,r,!0,j.gaGP(),"fleet_master"),k),B.as),B.S],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zO(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kd(new A.G(B.D8,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p2(D.anf,A.ato(new A.o2(new C.cvr(i,j),J.a3(i.d),!1,!0,!0,A.vX(),k),D.bzu),k)],w))},
$S:1600}
C.cvr.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Ss(v,e,J.a3(w.d),new C.cvq(w,v),this.b,null)},
$S:z+9}
C.cvq.prototype={
$0(){return this.a.bg7(this.b)},
$S:0}
C.cvv.prototype={
$0(){this.a.RE()
return null},
$S:0}
C.cvi.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvj.prototype={
$0(){C.V3(this.a,$.bcs)
return null},
$S:0}
C.cvk.prototype={
$3(d,e,f){return A.fG(new C.cvh(this.a,e))},
$S:z+10}
C.cvh.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cm(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.ap,new C.aJ8(u,s.a.c,s.e,s.d,new C.cve(s),new C.cvf(s),new C.cvg(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wO,v,v,B.Z),v,v,v)},
$S:1601}
C.cve.prototype={
$0(){var w=this.a.c
w.toString
C.V3(w,$.bcs)
return null},
$S:0}
C.cvf.prototype={
$1(d){var w=this.a
return w.n(new C.cvd(w,d))},
$S:37}
C.cvd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvg.prototype={
$0(){var w=this.a
return w.n(new C.cvc(w))},
$S:0}
C.cvc.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJB.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJC.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czm.prototype={
$3(d,e,f){return new C.CD(this.a.c,null)},
$S:z+11}
C.czn.prototype={
$3(d,e,f){if(f==null)return e
return new A.aM(B.a6,null,B.aS,B.m,A.a([new C.CD(this.a.c,null),D.aeb],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.cvw.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvE.prototype={
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
w.a3G(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.cvC(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.cvD(w),!1,u)
w=w.e
w.toString
return w},
$S:575}
C.cvC.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvA(w))
A.bM(B.B,new C.cvB(w),x.H)}},
$S:43}
C.cvA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cvy(w))},
$S:12}
C.cvy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cvz(w))},
$S:43}
C.cvz.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvx.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d_P.prototype={
$1(d){var w,v,u,t,s=new A.Cc([],[]).FZ(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1602};(function aliases(){var w=C.afg.prototype
w.aQf=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaE.prototype,"gas7","bdE",1)
w(u,"gbee","bef",1)
w(u,"gbgI","bgJ",6)
w(C.aaF.prototype,"gbuL","buM",1)
v(C,"dVK","dif",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wf,[C.d3C,C.d3B,C.bcD,C.bcE,C.bcv,C.bcw,C.bcx,C.bcy,C.bcz,C.bcA,C.bcB,C.bcC,C.bcu,C.bct,C.cvp,C.cvu,C.cvs,C.cvk,C.cvf,C.czm,C.czn,C.cvE,C.cvC,C.cvD,C.d_P])
v(A.WB,[C.d3x,C.d3y,C.d3z,C.d3A,C.cvo,C.cvn,C.cvl,C.cvm,C.cvt,C.cvq,C.cvv,C.cvi,C.cvj,C.cve,C.cvd,C.cvg,C.cvc,C.cJB,C.cJC,C.cvw,C.cvA,C.cvB,C.cvy,C.cvz,C.cvx])
v(A.aA,[C.K8,C.Ss,C.aBB,C.aJ8,C.aJ9,C.aCF,C.aJ7,C.aDP,C.ay_,C.aDT,C.CD])
v(A.ak,[C.mT,C.oU])
v(A.ad,[C.H3,C.H2,C.a1C,C.a1D])
v(A.ae,[C.aaE,C.aCz,C.afg,C.aaF])
v(A.WC,[C.cvr,C.cvh])
u(C.H6,A.ayT)
u(C.aCA,C.afg)
w(C.afg,A.e_)})()
A.dlx(b.typeUniverse,JSON.parse('{"H3":{"ad":[],"o":[]},"Ss":{"aA":[],"o":[]},"H2":{"ad":[],"o":[]},"K8":{"aA":[],"o":[]},"aaE":{"ae":["H3"]},"aBB":{"aA":[],"o":[]},"aCz":{"ae":["H2"]},"aJ8":{"aA":[],"o":[]},"aJ9":{"aA":[],"o":[]},"aCF":{"aA":[],"o":[]},"aJ7":{"aA":[],"o":[]},"aDP":{"aA":[],"o":[]},"ay_":{"aA":[],"o":[]},"a1C":{"ad":[],"o":[]},"CD":{"aA":[],"o":[]},"aCA":{"ae":["a1C"]},"aDT":{"aA":[],"o":[]},"a1D":{"ad":[],"o":[]},"aaF":{"ae":["a1D"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bh
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mT>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<Q>"),X:w("ac<mT>"),a:w("ac<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mQ"),_:w("Az"),k:w("mT"),N:w("m"),Y:w("bn<a8>"),W:w("dj<m>"),J:w("is<Q>"),j:w("is<oU?>"),E:w("yn<cD>"),q:w("T8"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rn=new A.K(983224,"MaterialIcons",!1)
D.azm=new A.a6(D.Rn,48,B.aT,null,null,null)
D.bFA=new A.M(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNe=new A.x("Powered off",null,D.bFA,null,null,null,null,null,null,null,null,null)
D.aN_=w([D.azm,B.z,D.bNe],x.p)
D.akB=new A.el(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aN_,null)
D.adX=new A.de(B.I,null,null,D.akB,null)
D.bza=new A.am(18,18,B.Le,null)
D.aeb=new A.de(B.I,null,null,D.bza,null)
D.aeP=new A.fO(2,null,null,null,null,B.X,null,null,null,null)
D.aht=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahU=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajo=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.an6=new A.V(0,3,0,3)
D.anf=new A.V(10,0,10,88)
D.anB=new A.V(12,6,12,10)
D.anP=new A.V(14,8,14,6)
D.O8=new A.V(18,12,18,12)
D.aoT=new A.V(20,18,20,8)
D.ap3=new A.V(20,8,20,20)
D.OL=new A.V(8,6,15,8)
D.auX=new A.K(983222,"MaterialIcons",!1)
D.awD=new A.a6(B.id,26,B.P,null,null,null)
D.awH=new A.a6(B.Qr,18,null,null,null,null)
D.ax_=new A.a6(B.pk,14,B.X,null,null,null)
D.ave=new A.K(983420,"MaterialIcons",!1)
D.axL=new A.a6(D.ave,14,B.X,null,null,null)
D.atq=new A.K(62895,"MaterialIcons",!1)
D.axP=new A.a6(D.atq,14,B.X,null,null,null)
D.aAS=new A.a6(B.iU,20,null,null,null,null)
D.aB9=new A.a6(B.eS,16,null,null,null,null)
D.aPo=w([B.ai,B.R],x.O)
D.SV=new A.ap(B.al,B.av,B.y,D.aPo,null,null)
D.bt2=new A.aH("NGMY OS","14.2.1")
D.brU=new A.aH("VirtualDroid","13.8.4")
D.brT=new A.aH("NGMY OS","15.0.0")
D.bsC=new A.aH("VirtualDroid","14.1.2")
D.brR=new A.aH("NGMY Tab OS","12.9.7")
D.brP=new A.aH("NGMY OS","13.5.3")
D.brE=new A.aH("VirtualDroid","15.2.0")
D.bsf=new A.aH("NGMY OS","14.8.1")
D.bsI=new A.aH("NGMY Tab OS","13.2.4")
D.btc=new A.aH("VirtualDroid","12.6.9")
D.brA=new A.aH("NGMY OS","16.0.1")
D.brr=new A.aH("VirtualDroid","14.9.0")
D.bsV=new A.aH("NGMY Tab OS","14.0.3")
D.bs2=new A.aH("NGMY OS","13.1.8")
D.brz=new A.aH("VirtualDroid","13.4.5")
D.brO=new A.aH("NGMY OS","15.3.2")
D.bsJ=new A.aH("NGMY Tab OS","12.4.1")
D.bsX=new A.aH("VirtualDroid","16.1.0")
D.bse=new A.aH("NGMY OS","14.4.6")
D.bt3=new A.aH("VirtualDroid","15.0.8")
D.aOT=w([D.bt2,D.brU,D.brT,D.bsC,D.brR,D.brP,D.brE,D.bsf,D.bsI,D.btc,D.brA,D.brr,D.bsV,D.bs2,D.brz,D.brO,D.bsJ,D.bsX,D.bse,D.bt3],A.bh("ab<+(m,m)>"))
D.bve=new A.eg(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buN=new A.eg(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.buI=new A.eg(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buR=new A.eg(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.buE=new A.eg(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.buT=new A.eg(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bvg=new A.eg(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buF=new A.eg(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.buM=new A.eg(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.buV=new A.eg(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.buD=new A.eg(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bv8=new A.eg(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bv5=new A.eg(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.buL=new A.eg(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bv2=new A.eg(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bv1=new A.eg(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buC=new A.eg(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.buQ=new A.eg(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bv_=new A.eg(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bv4=new A.eg(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U6=w([D.bve,D.buN,D.buI,D.buR,D.buE,D.buT,D.bvg,D.buF,D.buM,D.buV,D.buD,D.bv8,D.bv5,D.buL,D.bv2,D.bv1,D.buC,D.buQ,D.bv_,D.bv4],A.bh("ab<+(m,m,a8,a8,m)>"))
D.aV0=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a02=new C.H6(0,"youtube")
D.a03=new C.H6(1,"tiktok")
D.He=new C.H6(2,"instagram")
D.a04=new C.H6(3,"facebook")
D.bn6=new C.H6(4,"other")
D.byN=new A.am(3,null,null,null)
D.bzu=new A.i9(4,10,8,0.52,null)
D.bOw=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCQ=new A.aS(D.bOw,null,null,null,null,null,null,null,null,null,null,null,null,B.B,!1,null,null,null,B.m,null)
D.bFW=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOj=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.c__=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c_O=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c_U=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c5n=new C.aDP(null)})();(function staticFields(){$.die=20
$.apU=null
$.bcs=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_1","DS",()=>A.R8(0))
w($,"e_2","LL",()=>A.R8(null))})()};
(a=>{a["kc1WBuWOtkuIA/LAS+s5fSGAtEY="]=a.current})($__dart_deferred_initializers__);