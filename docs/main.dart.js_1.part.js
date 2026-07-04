((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dUK(d,e){A.a5(d,!1).cr(A.ev(new C.d1B(e),!0,null,x.H))},
V0(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V0=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LM()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aX(n,B.ac,B.a4),t)
w=3
return A.b(A.df(B.F,new C.d1A(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V0)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dCG(r)
if(q==null){d.F(x.q).f.O(D.bBs)
w=1
break}w=4
return A.b(A.bJ(B.fR,null,x.H),$async$V0)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.dgf=n
p=C.dCA(n)
n=$.DS()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d5n(q)
d.F(x.q).f.O(A.bq(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V0,v)},
dgi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mX(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H2(d){return C.dCJ(d)},
dCJ(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H2=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H2)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aF(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aE(0,a0,null)
w=x.a.b(r)&&J.cz(r)?10:11
break
case 10:k=J.eN(r,x.f)
k=A.di(k,new C.bdk(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("af<K.E>")
i=A.E(new A.af(k,new C.bdl(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dgk(q)
w=12
return A.b(C.H1(a3,p),$async$H2)
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
case 9:case 5:o=A.aF(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aE(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dgi(A.S(n,x.N,x.z))
l=C.dgk(A.a([m],x.e))
w=21
return A.b(C.H1(a3,l),$async$H2)
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
case 18:case 14:q=C.dCH()
w=22
return A.b(C.H1(a3,q),$async$H2)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H2,v)},
dgk(d){var w=A.V(d).j("D<1,m>"),v=new A.D(d,new C.bdc(),w).er(0),u=new A.D(d,new C.bdd(),w).er(0),t=new A.D(d,new C.bde(),w).er(0),s=new A.D(d,new C.bdf(),w).er(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d5o(null,q,u,t,v,s));++q}return r},
apS(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apS=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H2(d),$async$apS)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bdg(),s).er(0)
p=r.d7(t,new C.bdh(),s).er(0)
o=r.d7(t,new C.bdi(),s).er(0)
n=r.d7(t,new C.bdj(),s).er(0)
m=C.d5o(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H1(d,t),$async$apS)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apS,v)},
H1(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H1=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H1)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bdb(),x.P)
s=A.E(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$H1)
case 3:return A.f(null,v)}})
return A.h($async$H1,v)},
dCH(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dS(20,x.k)
for(w=0;w<20;++w)q[w]=C.d5o(w,w,t,s,u,r)
return q},
d5o(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.Tz[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.Tz[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.D(p,new C.bda(),A.V(p).j("D<1,m>")).fa(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.n.j3(i.bz(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aTX[w]
j=D.aNO[w]
return new C.mX("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bh(B.n.q(e+1),2,"0"),u,k,C.dCI(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.P(Date.now(),0,!1).a1().Z())},
dCI(d,e){var w,v=J.dS(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.n.j3(d.bz(256),16),2,"0")
return B.d.fa(v)},
d1B:function d1B(d){this.a=d},
d1A:function d1A(d,e){this.a=d
this.b=e},
d1w:function d1w(d){this.a=d},
d1x:function d1x(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1z:function d1z(d,e){this.a=d
this.b=e},
K6:function K6(d,e,f,g){var _=this
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
bdk:function bdk(){},
bdl:function bdl(){},
bdc:function bdc(){},
bdd:function bdd(){},
bde:function bde(){},
bdf:function bdf(){},
bdg:function bdg(){},
bdh:function bdh(){},
bdi:function bdi(){},
bdj:function bdj(){},
bdb:function bdb(){},
bda:function bda(){},
H0:function H0(d,e){this.c=d
this.a=e},
aaw:function aaw(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ct2:function ct2(){},
ct1:function ct1(d,e){this.a=d
this.b=e},
ct_:function ct_(d){this.a=d},
ct0:function ct0(d,e){this.a=d
this.b=e},
ct3:function ct3(d){this.a=d},
ct7:function ct7(d){this.a=d},
ct8:function ct8(d,e){this.a=d
this.b=e},
ct6:function ct6(d,e,f){this.a=d
this.b=e
this.c=f},
ct5:function ct5(d,e){this.a=d
this.b=e},
ct4:function ct4(d,e){this.a=d
this.b=e},
ct9:function ct9(d){this.a=d},
Sq:function Sq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBD:function aBD(d,e){this.c=d
this.a=e},
H_:function H_(d,e){this.c=d
this.a=e},
aCz:function aCz(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
csX:function csX(d){this.a=d},
csY:function csY(d){this.a=d},
csZ:function csZ(d){this.a=d},
csW:function csW(d,e){this.a=d
this.b=e},
csT:function csT(d){this.a=d},
csU:function csU(d){this.a=d},
csS:function csS(d,e){this.a=d
this.b=e},
csV:function csV(d){this.a=d},
csR:function csR(d){this.a=d},
aJd:function aJd(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJe:function aJe(d,e,f){this.c=d
this.d=e
this.a=f},
aCF:function aCF(d,e){this.c=d
this.a=e},
aJc:function aJc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cHy:function cHy(d){this.a=d},
cHz:function cHz(d){this.a=d},
aDQ:function aDQ(d){this.a=d},
ay_:function ay_(d,e){this.c=d
this.a=e},
dCG(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dCF(v)
if(u!=null)return new C.oY(w,C.d5m(u,!1),D.a_r,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dCE(v)
if(t!=null)return new C.oY(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_s,"TikTok",q)
s=C.dCD(w,v)
if(s!=null)return s
r=C.dCC(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oY(w,w,D.blJ,"Video",q)
return q},
dCD(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oY(d,"https://www.instagram.com/reel/"+w+u,D.GU,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oY(d,"https://www.instagram.com/p/"+w+u,D.GU,t,null)}return null},
dCC(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oY(d,"https://www.facebook.com/plugins/video.php?href="+A.eF(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_t,"Facebook",null)},
dCF(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dCE(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
H3:function H3(d,e){this.a=d
this.b=e},
oY:function oY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1x:function a1x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCA:function aCA(d,e){var _=this
_.d=$
_.cP$=d
_.aQ$=e
_.c=_.a=null},
aDV:function aDV(d,e){this.c=d
this.a=e},
cx1:function cx1(d){this.a=d},
cx2:function cx2(d){this.a=d},
CK:function CK(d,e){this.c=d
this.a=e},
afa:function afa(){},
dgj(d,e,f,g,h,i){return new C.a1y(i,f,h,e,g,d)},
dTr(d){var w=window
w.toString
A.fN(w,"message",new C.cYL(d),!1,x._)},
a1y:function a1y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aax:function aax(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cta:function cta(d){this.a=d},
cti:function cti(d){this.a=d},
ctg:function ctg(d){this.a=d},
cte:function cte(d){this.a=d},
ctf:function ctf(d){this.a=d},
ctc:function ctc(d){this.a=d},
cth:function cth(d){this.a=d},
ctd:function ctd(d){this.a=d},
ctb:function ctb(d){this.a=d},
cYL:function cYL(d){this.a=d},
dgd(){var w,v,u
try{v=A.yq()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d5m(d,e){var w=C.dgd(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eF(2,w,B.aP,!1))
v.push("widget_referrer="+A.eF(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d5l(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
dge(d){var w=A.bk(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bk(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dCz(d,e,f){var w,v,u=C.d5l(d)
if(u!=null){if(f){w=C.dgd()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dge(C.d5m(u,e))}return C.dge(d)},
dCA(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dCB(d){var w
if($.LM().a==null)return!1
w=$.DS().a
return d>=w&&d<w+4},
dgh(){var w=$.apR
if(w!=null)w.a7(0)
$.apR=null
$.DS().sv(0,0)},
dgg(){var w,v,u,t=$.LM()
if(t.a==null)return
w=$.apR
if(w!=null)w.a7(0)
v=$.dgf
if(v<=4){t=t.a
t.toString
C.d5n(t)
return}w=$.DS()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d5n(t)},
d5n(d){var w=$.apR
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
default:w=null}$.apR=A.dn(A.d6(0,0,0,0,0,w),C.dTC())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K6.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.n(20),s=A.U(B.R.l(0.25),B.o,1),r=A.Z(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eD,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.T:B.bA,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.ex,w,w,w)}}
C.mX.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H0.prototype={
U(){return new C.aaw(A.a([],x.e))},
gdW(){return this.c}}
C.aaw.prototype={
Y(){var w=this
w.a3()
$.DS().ak(0,w.garH())
C.dTr(w.gbdi())
w.UX()},
bcI(){if(this.c!=null)this.p(new C.ct2())},
bdj(){C.dgg()},
n(){$.DS().V(0,this.garH())
C.dgh()
$.LM().sv(0,null)
this.a2()},
UX(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UX=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H2(t.a.c),$async$UX)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ct1(t,s))
$.bd9=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$UX,v)},
Rg(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rg=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.ct_(t))
w=3
return A.b(C.apS(t.a.c),$async$Rg)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ct0(t,s))
$.bd9=J.a3(t.d)
t.c.F(x.q).f.O(A.bq(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rg,v)},
bf8(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.ev(new C.ct3(d),!1,null,x.H))},
bfH(){var w=this.c
w.toString
return C.V0(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.u,t=u?B.e7:B.bI,s=A.aJ(v,v,v,v,B.F9,v,v,v,new C.ct7(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.Bj(A.G(A.a([A.I(new A.J(B.i1,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.v,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aM(!1,B.L,!0,v,A.aV(!1,v,!0,new A.J(B.aO,A.Z(B.eR,B.R,v,v,28),v),B.c5,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbfG(),v,v,v,v,v,v,v),B.h,B.F,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.c8(!0,A.y(A.a([new A.J(D.OB,r,v),A.I(w.e?B.lb:new A.it($.LM(),new C.ct8(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.akJ(B.R,B.AM,B.pc,D.bYh,w.e?v:new C.ct9(w)),v)}}
C.Sq.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ae(0,B.x,B.R.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1x(n,!0,!C.dCB(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ib,B.lj,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.au,B.f,0,B.l),B.h,B.vw,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aM(!1,B.L,!0,u,A.aV(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cv(p,A.fO(A.y(A.a([new C.aBD(o,u),A.I(n,1),A.u(u,A.G(A.a([A.Z(B.t3,B.R.l(0.85),u,u,9),D.bxs,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.au,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.amk,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,u,u,new A.t(u,u,r,s,q,D.Sr,B.k),u,u,u,B.eN,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.F,0,u,u,u,u,u,B.X)}}
C.aBD.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.I(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pa,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oq,w,w,w)}}
C.H_.prototype={
U(){return new C.aCz()}}
C.aCz.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.u,u=v?B.e7:B.bI,t=A.aJ(w,w,w,w,B.F9,w,w,w,new C.csX(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c8(!0,A.y(A.a([new A.J(D.OB,A.G(A.a([t,A.I(new A.Bj(A.G(A.a([A.I(new A.J(B.i1,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aM(!1,B.L,!0,w,A.aV(!1,w,!0,new A.J(B.aO,A.Z(B.eR,B.R,w,w,28),w),B.c5,!0,w,w,w,w,w,w,w,w,w,w,w,new C.csY(d),w,w,w,w,w,w,w),B.h,B.F,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.it($.LM(),new C.csZ(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJd.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ae(0,B.x,B.R.l(0.35),B.eb,28),new A.ae(0,B.x,B.q.l(0.45),B.cp,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dgj(new A.dd(v+"_full_"+u,x.W),!1,u,!1,w.gaGf(),v+"_full")
w=v}else w=new C.aCF(t.r,s)}else w=new C.ay_(m,s)
else w=D.c2M
return A.u(s,A.cv(n,A.fO(A.y(A.a([new C.aJe(m,l,s),A.I(w,1),new C.aJc(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,s,s,new A.t(s,s,o,q,p,D.Sr,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aJe.prototype={
B(d){var w,v,u,t,s=null,r=new A.P(Date.now(),0,!1),q=A.dj(r)
r=A.hg(r)
w=new A.dc(q,r)
v=w.gGx()===0?12:w.gGx()
r=B.a.bh(B.n.q(r),2,"0")
q=(q<12?B.eL:B.hz)===B.eL?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.kX,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.awI,B.dv,D.avY,B.dv,D.awM],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.F2,B.R.l(0.9),s,s,12),B.dv,A.I(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.an3,s,s,s)}}
C.aCF.prototype={
B(d){var w=null
return A.u(w,A.aS(A.y(A.a([A.Z(B.xf,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.eD(D.aA1,D.bMv,this.c,A.el(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aE(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vw,w,w,w,w,w,w,w,w,1/0)}}
C.aJc.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arz(B.R0,"YouTube",s===0,r,new C.cHy(u))
s=u.arz(B.kv,"Device",s===1,r,new C.cHz(u))
w=r?"Power off":"Power on"
v=r?D.R1:D.au2
return A.u(t,A.G(A.a([q,B.a_,s,B.b3,A.aJ(t,t,t,t,A.Z(v,r?B.b6:B.eA,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cG)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.amR,t,t,t)},
arz(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b1
else w=f?B.R:B.a7
v=f&&g?B.R.l(0.15):B.F
u=A.n(10)
t=g?h:s
return A.I(A.aM(!1,B.L,!0,u,A.aV(!1,A.n(10),!0,new A.J(B.lu,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.X),1)}}
C.aDQ.prototype={
B(d){return D.adp}}
C.ay_.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jX,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qA("Serial",u.c),q=w.qA("Model",u.d),p=w.qA("Device ID",u.e),o=w.qA("IMEI",u.r),n=w.qA("MAC",u.f),m=w.qA("OS",u.w+" "+u.x),l=w.qA("Location",u.y+", "+u.z),k=w.qA("Coordinates",B.j.a0(u.Q,4)+", "+B.j.a0(u.as,4)),j=w.qA("Timezone",u.at)
u=u.ax
return A.eB(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qA("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aO,v,v,B.a1,!1)},
qA(d,e){var w=null
return new A.J(B.c7,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bY,A.j(e,w,w,w,w,w,w,D.bEs,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H3.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oY.prototype={
gaGf(){var w=this.c
return w===D.a_r||w===D.a_s||w===D.GU||w===D.a_t}}
C.a1x.prototype={
U(){return new C.aCA(null,null)}}
C.aCA.prototype={
Y(){this.a3()
var w=A.bD(null,B.rl,null,1,null,this)
w.lL(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPI()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dJ(t,new A.t(t,t,t,t,t,new A.ap(B.cM,B.c3,B.y,A.a([B.F,B.q.l(0.55)],x.O),t,t),B.k),B.bv),q=x.Y,p=u.d
p===$&&A.c()
p=A.cl(B.hc,p,t)
w=B.c.l(0.92)
q=A.aS(new A.cU(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bg.T>")),!1,A.Z(B.ib,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lj
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDV(s,t),r,q,A.b2(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.v,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b2(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b2(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.a2,t,B.aT,B.m,s,t)}}
C.aDV.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l2(u,new C.cx1(this),B.bt,!0,w,w,new C.cx2(this),w)
return new C.CK(v,w)}}
C.CK.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.r5,B.Lb],x.O),B.ib)
break
case 1:w=new A.aH(A.a([B.vw,D.ahl],x.O),B.jF)
break
case 2:w=new A.aH(A.a([D.aiP,D.agS],x.O),B.xn)
break
case 3:w=new A.aH(A.a([B.N,B.cz],x.O),B.xq)
break
case 4:w=new A.aH(A.a([B.aa,B.ak],x.O),B.n0)
break
default:w=u}v=w.a
return A.u(u,A.aS(A.Z(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.al,B.aq,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afa.prototype={
n(){var w=this,v=w.aQ$
if(v!=null)v.V(0,w.gdl())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dm()}}
C.a1y.prototype={
U(){return new C.aax()}}
C.aax.prototype={
bvr(d,e){var w=C.d5l(d)
if(w!=null)return C.d5m(w,e)
return d},
a3k(d,e){var w,v=this,u=C.d5l(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bvr(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dCz(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btn(){var w,v=this
if(v.w)return
v.p(new C.cta(v))
w=v.e
if(w!=null)v.a3k(w,v.a.d)},
Y(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.DT()
$.oq().rO(w,new C.cti(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.ctb(v))
w=v.e
w.toString
v.a3k(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Rd,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.fO(A.aS(new A.J(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yj(n,B.pM,w)],v)
if(o.f)w.push(A.fO(A.aS(new A.an(28,28,D.aef,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b1,B.o,1)
q=A.Z(B.F5,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eJ(0,A.aM(!1,B.L,!0,n,A.aV(!1,n,!0,A.aS(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.NZ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtm(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.X)))}return new A.aG(B.a2,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mX)","~()","H0(R)","mX(X<@,@>)","a0(mX)","X<m,@>(mX)","ax<~>()","H_(R)","it<Q>(R,oY?,o?)","Sq(R,Q)","re(R,oY?,o?)","CK(R,ai,du?)"])
C.d1B.prototype={
$1(d){return new C.H0(this.a,null)},
$S:z+2}
C.d1A.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.u,l=A.ay(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.d4,B.N],j):A.a([B.c,B.a8],j),h=A.a([new A.ae(0,B.x,B.R.l(0.22),B.eb,32)],x.V),g=A.U(m?B.by:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.a3.l(m?0.18:0.08)],j)
e=A.u(n,D.avE,B.h,n,n,new A.t(B.R.l(0.18),n,A.U(B.R.l(0.45),B.o,1),n,n,n,B.aj),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.v,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.T:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.el,w,A.aJ(n,n,n,n,A.Z(B.cv,m?B.a7:B.ci,n,n,n),n,n,n,new C.d1w(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.Z,B.a0,B.y,j,n,n),B.k),n,n,n,B.CZ,n,n,n)
e=A.ec(B.bW,A.a([new C.K6("YouTube",B.F1,m,n),new C.K6("TikTok",B.jF,m,n),new C.K6("Instagram",B.xn,m,n),new C.K6("Facebook",B.xq,m,n)],v),B.bS,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bB:B.ha,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bI
r=A.Z(B.jE,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.by:B.az
u=A.y(A.a([e,B.as,A.aC(n,B.B,!0,n,!0,B.m,n,A.aD(),w,n,n,n,n,n,2,A.bo(n,new A.b9(4,q,B.K),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aE(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.n(16),B.K2),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.O,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.H,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.S,n,n,n,n)],v),B.ag,B.e,B.f,0,B.l)
e=A.kd(D.avH,D.bXr,new C.d1x(d),A.j1(n,n,n,n,n,n,n,n,n,n,n,m?B.aM:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.W(12,0,12,12+l.f.d),A.dJ(A.cv(f,A.y(A.a([j,new A.J(B.O9,u,n),new A.J(D.aok,A.G(A.a([e,B.b3,A.bZ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.T:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d1y(d),n,n),B.a_,A.dM(D.azL,D.bYc,new C.d1z(d,w),A.bv(B.R,n,n,n,B.c,n,D.NZ,n,new A.bC(A.n(14),B.K),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ag,B.e,B.P,0,B.l),B.ar),new A.t(n,n,g,k,h,new A.ap(B.al,B.aq,B.y,i,n,n),B.k),B.bv),n)},
$S:74}
C.d1w.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d1x.prototype={
$0(){C.dgh()
$.LM().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d1y.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d1z.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bdk.prototype={
$1(d){return C.dgi(A.S(d,x.N,x.z))},
$S:z+3}
C.bdl.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bdc.prototype={
$1(d){return d.c},
$S:z+0}
C.bdd.prototype={
$1(d){return d.r},
$S:z+0}
C.bde.prototype={
$1(d){return d.f},
$S:z+0}
C.bdf.prototype={
$1(d){return d.at},
$S:z+0}
C.bdg.prototype={
$1(d){return d.c},
$S:z+0}
C.bdh.prototype={
$1(d){return d.r},
$S:z+0}
C.bdi.prototype={
$1(d){return d.f},
$S:z+0}
C.bdj.prototype={
$1(d){return d.at},
$S:z+0}
C.bdb.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bda.prototype={
$1(d){return B.a.bh(B.n.j3(d,16),2,"0").toUpperCase()},
$S:78}
C.ct2.prototype={
$0(){},
$S:0}
C.ct1.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ct_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ct0.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.ct3.prototype={
$1(d){return new C.H_(this.a,null)},
$S:z+7}
C.ct7.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.ct8.prototype={
$3(d,e,f){return new A.it($.DS(),new C.ct6(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.ct6.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AM(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.U(B.R.l(0.35),B.o,1)
q=A.Z(B.ib,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DS().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cC,B.ey,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cv(s,new A.iO(1.7777777777777777,C.dgj(new A.dd("fleet_master_"+r,x.W),!0,r,!0,j.gaGf(),"fleet_master"),k),B.ar),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.tY(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jI(new A.J(B.CP,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.n7(D.amu,A.atl(new A.ml(new C.ct5(i,j),J.a3(i.d),!1,!0,!0,A.qR(),k),D.bya),k)],w))},
$S:1591}
C.ct5.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sq(v,e,J.a3(w.d),new C.ct4(w,v),this.b,null)},
$S:z+9}
C.ct4.prototype={
$0(){return this.a.bf8(this.b)},
$S:0}
C.ct9.prototype={
$0(){this.a.Rg()
return null},
$S:0}
C.csX.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.csY.prototype={
$0(){C.V0(this.a,$.bd9)
return null},
$S:0}
C.csZ.prototype={
$3(d,e,f){return A.fD(new C.csW(this.a,e))},
$S:z+10}
C.csW.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aS(A.cr(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.as,new C.aJd(u,s.a.c,s.e,s.d,new C.csT(s),new C.csU(s),new C.csV(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.NO,v,v,B.a1),v,v,v)},
$S:1592}
C.csT.prototype={
$0(){var w=this.a.c
w.toString
C.V0(w,$.bd9)
return null},
$S:0}
C.csU.prototype={
$1(d){var w=this.a
return w.p(new C.csS(w,d))},
$S:40}
C.csS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.csV.prototype={
$0(){var w=this.a
return w.p(new C.csR(w))},
$S:0}
C.csR.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cHy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cHz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cx1.prototype={
$3(d,e,f){return new C.CK(this.a.c,null)},
$S:z+11}
C.cx2.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.a2,null,B.aT,B.m,A.a([new C.CK(this.a.c,null),D.adD],x.p),null)},
$C:"$3",
$R:3,
$S:490}
C.cta.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cti.prototype={
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
w.a3k(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fN(v,"load",new C.ctg(w),!1,u)
v=w.e
v.toString
A.fN(v,"error",new C.cth(w),!1,u)
w=w.e
w.toString
return w},
$S:577}
C.ctg.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cte(w))
A.bJ(B.D,new C.ctf(w),x.H)}},
$S:43}
C.cte.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ctf.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.ctc(w))},
$S:12}
C.ctc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cth.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.ctd(w))},
$S:43}
C.ctd.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.ctb.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cYL.prototype={
$1(d){var w,v,u,t,s=new A.Ck([],[]).FO(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1593};(function aliases(){var w=C.afa.prototype
w.aPI=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaw.prototype,"garH","bcI",1)
w(u,"gbdi","bdj",1)
w(u,"gbfG","bfH",6)
w(C.aax.prototype,"gbtm","btn",1)
v(C,"dTC","dgg",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wt,[C.d1B,C.d1A,C.bdk,C.bdl,C.bdc,C.bdd,C.bde,C.bdf,C.bdg,C.bdh,C.bdi,C.bdj,C.bdb,C.bda,C.ct3,C.ct8,C.ct6,C.csZ,C.csU,C.cx1,C.cx2,C.cti,C.ctg,C.cth,C.cYL])
v(A.Wz,[C.d1w,C.d1x,C.d1y,C.d1z,C.ct2,C.ct1,C.ct_,C.ct0,C.ct7,C.ct4,C.ct9,C.csX,C.csY,C.csT,C.csS,C.csV,C.csR,C.cHy,C.cHz,C.cta,C.cte,C.ctf,C.ctc,C.ctd,C.ctb])
v(A.au,[C.K6,C.Sq,C.aBD,C.aJd,C.aJe,C.aCF,C.aJc,C.aDQ,C.ay_,C.aDV,C.CK])
v(A.ai,[C.mX,C.oY])
v(A.ab,[C.H0,C.H_,C.a1x,C.a1y])
v(A.ac,[C.aaw,C.aCz,C.afa,C.aax])
v(A.WA,[C.ct5,C.csW])
u(C.H3,A.ayT)
u(C.aCA,C.afa)
w(C.afa,A.e1)})()
A.djz(b.typeUniverse,JSON.parse('{"H0":{"ab":[],"o":[]},"Sq":{"au":[],"o":[]},"H_":{"ab":[],"o":[]},"K6":{"au":[],"o":[]},"aaw":{"ac":["H0"]},"aBD":{"au":[],"o":[]},"aCz":{"ac":["H_"]},"aJd":{"au":[],"o":[]},"aJe":{"au":[],"o":[]},"aCF":{"au":[],"o":[]},"aJc":{"au":[],"o":[]},"aDQ":{"au":[],"o":[]},"ay_":{"au":[],"o":[]},"a1x":{"ab":[],"o":[]},"CK":{"au":[],"o":[]},"aCA":{"ac":["a1x"]},"aDV":{"au":[],"o":[]},"a1y":{"ab":[],"o":[]},"aax":{"ac":["a1y"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.be
return{V:w("a9<ae>"),O:w("a9<z>"),e:w("a9<mX>"),s:w("a9<m>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("aa<mX>"),a:w("aa<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mT"),_:w("AJ"),k:w("mX"),N:w("m"),Y:w("bi<a7>"),W:w("dd<m>"),J:w("it<Q>"),j:w("it<oY?>"),E:w("vp<cw>"),q:w("T7"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.R1=new A.L(983224,"MaterialIcons",!1)
D.ayi=new A.a8(D.R1,48,B.b1,null,null,null)
D.bE5=new A.M(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLs=new A.x("Powered off",null,D.bE5,null,null,null,null,null,null,null,null,null)
D.aLU=w([D.ayi,B.C,D.bLs],x.p)
D.ajV=new A.fg(B.a1,B.e,B.P,B.i,null,B.l,null,0,D.aLU,null)
D.adp=new A.dk(B.I,null,null,D.ajV,null)
D.bxR=new A.an(18,18,B.KV,null)
D.adD=new A.dk(B.I,null,null,D.bxR,null)
D.aef=new A.hb(2,null,null,null,null,B.T,null,null,null,null)
D.agS=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahl=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aiP=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amk=new A.W(0,3,0,3)
D.amu=new A.W(10,0,10,88)
D.amR=new A.W(12,6,12,10)
D.an3=new A.W(14,8,14,6)
D.NZ=new A.W(18,12,18,12)
D.aok=new A.W(20,8,20,20)
D.OB=new A.W(8,6,15,8)
D.au2=new A.L(983222,"MaterialIcons",!1)
D.avE=new A.a8(B.ib,26,B.R,null,null,null)
D.avH=new A.a8(B.Qd,18,null,null,null,null)
D.avY=new A.a8(B.pa,14,B.T,null,null,null)
D.auj=new A.L(983420,"MaterialIcons",!1)
D.awI=new A.a8(D.auj,14,B.T,null,null,null)
D.asv=new A.L(62895,"MaterialIcons",!1)
D.awM=new A.a8(D.asv,14,B.T,null,null,null)
D.azL=new A.a8(B.iO,20,null,null,null,null)
D.aA1=new A.a8(B.eR,16,null,null,null,null)
D.aOj=w([B.ak,B.N],x.O)
D.Sr=new A.ap(B.al,B.aq,B.y,D.aOj,null,null)
D.brJ=new A.aH("NGMY OS","14.2.1")
D.bqA=new A.aH("VirtualDroid","13.8.4")
D.bqz=new A.aH("NGMY OS","15.0.0")
D.bri=new A.aH("VirtualDroid","14.1.2")
D.bqx=new A.aH("NGMY Tab OS","12.9.7")
D.bqv=new A.aH("NGMY OS","13.5.3")
D.bqk=new A.aH("VirtualDroid","15.2.0")
D.bqW=new A.aH("NGMY OS","14.8.1")
D.bro=new A.aH("NGMY Tab OS","13.2.4")
D.brT=new A.aH("VirtualDroid","12.6.9")
D.bqg=new A.aH("NGMY OS","16.0.1")
D.bq7=new A.aH("VirtualDroid","14.9.0")
D.brB=new A.aH("NGMY Tab OS","14.0.3")
D.bqJ=new A.aH("NGMY OS","13.1.8")
D.bqf=new A.aH("VirtualDroid","13.4.5")
D.bqu=new A.aH("NGMY OS","15.3.2")
D.brp=new A.aH("NGMY Tab OS","12.4.1")
D.brD=new A.aH("VirtualDroid","16.1.0")
D.bqV=new A.aH("NGMY OS","14.4.6")
D.brK=new A.aH("VirtualDroid","15.0.8")
D.aNO=w([D.brJ,D.bqA,D.bqz,D.bri,D.bqx,D.bqv,D.bqk,D.bqW,D.bro,D.brT,D.bqg,D.bq7,D.brB,D.bqJ,D.bqf,D.bqu,D.brp,D.brD,D.bqV,D.brK],A.be("a9<+(m,m)>"))
D.btV=new A.eg(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.btt=new A.eg(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bto=new A.eg(["New York","United States",40.7128,-74.006,"America/New_York"])
D.btx=new A.eg(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.btk=new A.eg(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.btz=new A.eg(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.btX=new A.eg(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.btl=new A.eg(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bts=new A.eg(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.btB=new A.eg(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.btj=new A.eg(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.btP=new A.eg(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.btM=new A.eg(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.btr=new A.eg(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.btJ=new A.eg(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.btI=new A.eg(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bti=new A.eg(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.btw=new A.eg(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.btG=new A.eg(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.btL=new A.eg(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Tz=w([D.btV,D.btt,D.bto,D.btx,D.btk,D.btz,D.btX,D.btl,D.bts,D.btB,D.btj,D.btP,D.btM,D.btr,D.btJ,D.btI,D.bti,D.btw,D.btG,D.btL],A.be("a9<+(m,m,a7,a7,m)>"))
D.aTX=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_r=new C.H3(0,"youtube")
D.a_s=new C.H3(1,"tiktok")
D.GU=new C.H3(2,"instagram")
D.a_t=new C.H3(3,"facebook")
D.blJ=new C.H3(4,"other")
D.bxs=new A.an(3,null,null,null)
D.bya=new A.i8(4,10,8,0.52,null)
D.bMH=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bBs=new A.aT(D.bMH,null,null,null,null,null,null,null,null,null,null,null,null,B.D,!1,null,null,null,B.m,null)
D.bEs=new A.M(!0,B.c,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMv=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bXr=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bYc=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bYh=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c2M=new C.aDQ(null)})();(function staticFields(){$.dgf=20
$.apR=null
$.bd9=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dXT","DS",()=>A.R5(0))
w($,"dXU","LM",()=>A.R5(null))})()};
(a=>{a["0PBuWHhRWqozd4UseUeZy04w3+I="]=a.current})($__dart_deferred_initializers__);