((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dXb(d,e){A.a5(d,!1).cl(A.eg(new C.d3R(e),!0,null,x.H))},
Vg(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Vg=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LY()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ak()
s=new A.ae(new A.aN(n,B.a6,B.Z),t)
w=3
return A.b(A.d5(B.E,new C.d3Q(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vg)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dF0(r)
if(q==null){d.F(x.q).f.O(D.bCd)
w=1
break}w=4
return A.b(A.bK(B.fP,null,x.H),$async$Vg)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.diB=n
p=C.dEV(n)
n=$.E1()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d7F(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Vg,v)},
diE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mZ(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hc(d){return C.dF3(d)},
dF3(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hc=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$Hc)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aH(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aF(0,a0,null)
w=x.a.b(r)&&J.cB(r)?10:11
break
case 10:k=J.eO(r,x.f)
k=A.dk(k,new C.bdF(),k.$ti.j("K.E"),x.k)
j=A.T(k).j("ab<K.E>")
i=A.C(new A.ab(k,new C.bdG(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.diG(q)
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
case 9:case 5:o=A.aH(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.diE(A.S(n,x.N,x.z))
l=C.diG(A.a([m],x.e))
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
case 18:case 14:q=C.dF1()
w=22
return A.b(C.Hb(a3,q),$async$Hc)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Hc,v)},
diG(d){var w=A.V(d).j("B<1,m>"),v=new A.B(d,new C.bdx(),w).er(0),u=new A.B(d,new C.bdy(),w).er(0),t=new A.B(d,new C.bdz(),w).er(0),s=new A.B(d,new C.bdA(),w).er(0),r=A.bb(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d7G(null,q,u,t,v,s));++q}return r},
aqa(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aqa=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hc(d),$async$aqa)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d0(t,new C.bdB(),s).er(0)
p=r.d0(t,new C.bdC(),s).er(0)
o=r.d0(t,new C.bdD(),s).er(0)
n=r.d0(t,new C.bdE(),s).er(0)
m=C.d7G(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hb(d,t),$async$aqa)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aqa,v)},
Hb(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Hb=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$Hb)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bdw(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.aj(s,null)),$async$Hb)
case 3:return A.f(null,v)}})
return A.h($async$Hb,v)},
dF1(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dU(20,x.k)
for(w=0;w<20;++w)q[w]=C.d7G(w,w,t,s,u,r)
return q},
d7G(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jx(),h=d==null,g=D.TL[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TL[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bz(256)
n=new A.B(p,new C.bdv(),A.V(p).j("B<1,m>")).fa(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bz(10)
t=B.d.fa(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bi(B.n.j3(i.bz(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aUt[w]
j=D.aOl[w]
return new C.mZ("vd_"+1000*Date.now()+"_"+e+"_"+i.bz(99999),"Device "+B.a.bi(B.n.q(e+1),2,"0"),u,k,C.dF2(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.M(Date.now(),0,!1).a0().W())},
dF2(d,e){var w,v=J.dU(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bi(B.n.j3(d.bz(256),16),2,"0")
return B.d.fa(v)},
d3R:function d3R(d){this.a=d},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3O:function d3O(d){this.a=d},
d3P:function d3P(d,e){this.a=d
this.b=e},
Kh:function Kh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mZ:function mZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bdF:function bdF(){},
bdG:function bdG(){},
bdx:function bdx(){},
bdy:function bdy(){},
bdz:function bdz(){},
bdA:function bdA(){},
bdB:function bdB(){},
bdC:function bdC(){},
bdD:function bdD(){},
bdE:function bdE(){},
bdw:function bdw(){},
bdv:function bdv(){},
Ha:function Ha(d,e){this.c=d
this.a=e},
aaP:function aaP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvb:function cvb(){},
cva:function cva(d,e){this.a=d
this.b=e},
cv8:function cv8(d){this.a=d},
cv9:function cv9(d,e){this.a=d
this.b=e},
cvc:function cvc(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvh:function cvh(d,e){this.a=d
this.b=e},
cvf:function cvf(d,e,f){this.a=d
this.b=e
this.c=f},
cve:function cve(d,e){this.a=d
this.b=e},
cvd:function cvd(d,e){this.a=d
this.b=e},
cvi:function cvi(d){this.a=d},
SE:function SE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBW:function aBW(d,e){this.c=d
this.a=e},
H9:function H9(d,e){this.c=d
this.a=e},
aCT:function aCT(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cv5:function cv5(d){this.a=d},
cv6:function cv6(d){this.a=d},
cv7:function cv7(d){this.a=d},
cv4:function cv4(d,e){this.a=d
this.b=e},
cv1:function cv1(d){this.a=d},
cv2:function cv2(d){this.a=d},
cv0:function cv0(d,e){this.a=d
this.b=e},
cv3:function cv3(d){this.a=d},
cv_:function cv_(d){this.a=d},
aJx:function aJx(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJy:function aJy(d,e,f){this.c=d
this.d=e
this.a=f},
aCZ:function aCZ(d,e){this.c=d
this.a=e},
aJw:function aJw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJM:function cJM(d){this.a=d},
cJN:function cJN(d){this.a=d},
aE9:function aE9(d){this.a=d},
ayi:function ayi(d,e){this.c=d
this.a=e},
dF0(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dF_(v)
if(u!=null)return new C.oZ(w,C.d7E(u,!1),D.a_D,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dEZ(v)
if(t!=null)return new C.oZ(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_E,"TikTok",q)
s=C.dEY(w,v)
if(s!=null)return s
r=C.dEX(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oZ(w,w,D.bmp,"Video",q)
return q},
dEY(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cU(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oZ(d,"https://www.instagram.com/reel/"+w+u,D.H0,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cU(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oZ(d,"https://www.instagram.com/p/"+w+u,D.H0,t,null)}return null},
dEX(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oZ(d,"https://www.facebook.com/plugins/video.php?href="+A.eE(2,d,B.aP,!1)+"&show_text=false&width=734",D.a_F,"Facebook",null)},
dF_(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cU(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dEZ(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cU(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cU(d)
return w==null?null:w.b[1]},
Hd:function Hd(d,e){this.a=d
this.b=e},
oZ:function oZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1P:function a1P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCU:function aCU(d,e){var _=this
_.d=$
_.cT$=d
_.aT$=e
_.c=_.a=null},
aEe:function aEe(d,e){this.c=d
this.a=e},
cza:function cza(d){this.a=d},
czb:function czb(d){this.a=d},
CO:function CO(d,e){this.c=d
this.a=e},
afs:function afs(){},
diF(d,e,f,g,h,i){return new C.a1Q(i,f,h,e,g,d)},
dVS(d){var w=window
w.toString
A.fO(w,"message",new C.d_Z(d),!1,x._)},
a1Q:function a1Q(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaQ:function aaQ(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvj:function cvj(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvp:function cvp(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvk:function cvk(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
diz(){var w,v,u
try{v=A.yq()
w=v.gpZ(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d7E(d,e){var w=C.diz(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eE(2,w,B.aP,!1))
v.push("widget_referrer="+A.eE(2,w,B.aP,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d7D(d){var w=A.aq(y.c,!0,!1,!1,!1).cU(d)
return w==null?null:w.b[1]},
diA(d){var w=A.bk(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bk(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dEU(d,e,f){var w,v,u=C.d7D(d)
if(u!=null){if(f){w=C.diz()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.diA(C.d7E(u,e))}return C.diA(d)},
dEV(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dEW(d){var w
if($.LY().a==null)return!1
w=$.E1().a
return d>=w&&d<w+4},
diD(){var w=$.aq9
if(w!=null)w.a7(0)
$.aq9=null
$.E1().sv(0,0)},
diC(){var w,v,u,t=$.LY()
if(t.a==null)return
w=$.aq9
if(w!=null)w.a7(0)
v=$.diB
if(v<=4){t=t.a
t.toString
C.d7F(t)
return}w=$.E1()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d7F(t)},
d7F(d){var w=$.aq9
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
default:w=null}$.aq9=A.dp(A.d6(0,0,0,0,0,w),C.dW2())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kh.prototype={
B(d){var w=null,v=this.e,u=v?B.aj:B.c,t=A.n(20),s=A.U(B.R.l(0.25),B.o,1),r=A.Z(this.d,B.R,w,w,14)
return A.u(w,A.G(A.a([r,B.eG,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bD,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.em,w,w,w)}}
C.mZ.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ha.prototype={
T(){return new C.aaP(A.a([],x.e))},
gdX(){return this.c}}
C.aaP.prototype={
Z(){var w=this
w.a3()
$.E1().al(0,w.gas0())
C.dVS(w.gbdU())
w.Vj()},
bdj(){if(this.c!=null)this.p(new C.cvb())},
bdV(){C.diC()},
n(){$.E1().V(0,this.gas0())
C.diD()
$.LY().sv(0,null)
this.a2()},
Vj(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vj=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hc(t.a.c),$async$Vj)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cva(t,s))
$.bdu=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vj,v)},
Rx(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rx=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cv8(t))
w=3
return A.b(C.aqa(t.a.c),$async$Rx)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cv9(t,s))
$.bdu=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.D,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rx,v)},
bfK(d){var w=this.c
w.toString
A.a5(w,!1).cl(A.eg(new C.cvc(d),!1,null,x.H))},
bgj(){var w=this.c
w.toString
return C.Vg(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.e9:B.bM,s=A.aJ(v,v,v,v,B.Ff,v,v,v,new C.cvg(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.Bm(A.G(A.a([A.I(new A.H(B.i4,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.O,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aP(!1,B.M,!0,v,A.aW(!1,v,!0,new A.H(B.aL,A.Z(B.eS,B.R,v,v,28),v),B.c6,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgi(),v,v,v,v,v,v,v),B.h,B.E,0,v,v,v,v,v,B.Y)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.ca(!0,A.y(A.a([new A.H(D.OJ,r,v),A.I(w.e?B.lb:new A.iv($.LY(),new C.cvh(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.X,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.al0(B.R,B.AN,B.pi,D.bZw,w.e?v:new C.cvi(w)),v)}}
C.SE.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.x,B.R.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1P(n,!0,!C.dEW(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.id,B.li,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.aw,B.f,0,B.l),B.h,B.vE,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aP(!1,B.M,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cw(p,A.fP(A.y(A.a([new C.aBW(o,u),A.I(n,1),A.u(u,A.G(A.a([A.Z(B.pd,B.R.l(0.85),u,u,9),D.bya,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.aw,B.f,0,u,u),B.h,B.ac,u,u,u,u,u,D.amD,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.SC,B.k),u,u,u,B.fb,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.R.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.E,0,u,u,u,u,u,B.Y)}}
C.aBW.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.I(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pg,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.ac,w,w,w,w,w,B.Oy,w,w,w)}}
C.H9.prototype={
T(){return new C.aCT()}}
C.aCT.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.e9:B.bM,t=A.aJ(w,w,w,w,B.Ff,w,w,w,new C.cv5(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.ca(!0,A.y(A.a([new A.H(D.OJ,A.G(A.a([t,A.I(new A.Bm(A.G(A.a([A.I(new A.H(B.i4,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.O,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aP(!1,B.M,!0,w,A.aW(!1,w,!0,new A.H(B.aL,A.Z(B.eS,B.R,w,w,28),w),B.c6,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cv6(d),w,w,w,w,w,w,w),B.h,B.E,0,w,w,w,w,w,B.Y)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.iv($.LY(),new C.cv7(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.X,!0,!0),w,!1,!1,w,w)}}
C.aJx.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.x,B.R.l(0.35),B.eo,28),new A.ag(0,B.x,B.q.l(0.45),B.cu,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.diF(new A.df(v+"_full_"+u,x.W),!1,u,!1,w.gaGz(),v+"_full")
w=v}else w=new C.aCZ(t.r,s)}else w=new C.ayi(m,s)
else w=D.c4_
return A.u(s,A.cw(n,A.fP(A.y(A.a([new C.aJy(m,l,s),A.I(w,1),new C.aJw(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.SC,B.k),s,r*2.05,s,B.bf,s,s,r)}}
C.aJy.prototype={
B(d){var w,v,u,t,s=null,r=new A.M(Date.now(),0,!1),q=A.dl(r)
r=A.hf(r)
w=new A.de(q,r)
v=w.gGL()===0?12:w.gGL()
r=B.a.bi(B.n.q(r),2,"0")
q=(q<12?B.eN:B.hB)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.kY,s,s,s),B.b2,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bb,D.ax7,B.du,D.awm,B.du,D.axb],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.F8,B.R.l(0.9),s,s,12),B.du,A.I(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.ac,s,s,s,s,s,D.anl,s,s,s)}}
C.aCZ.prototype={
B(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.Z(B.xm,B.c.l(0.35),w,w,40),B.H,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.eB(D.aAt,D.bNo,this.c,A.ew(w,w,w,w,w,w,w,w,w,B.R,w,w,w,w,w,new A.aF(B.R.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.h,B.vE,w,w,w,w,w,w,w,w,1/0)}}
C.aJw.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arT(B.Ra,"YouTube",s===0,r,new C.cJM(u))
s=u.arT(B.ky,"Device",s===1,r,new C.cJN(u))
w=r?"Power off":"Power on"
v=r?D.Rb:D.aun
return A.u(t,A.G(A.a([q,B.a_,s,B.b2,A.aJ(t,t,t,t,A.Z(v,r?B.b4:B.dN,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cH)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.ac,t,t,t,t,t,D.an8,t,t,t)},
arT(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.R:B.a8
v=f&&g?B.R.l(0.15):B.E
u=A.n(10)
t=g?h:s
return A.I(A.aP(!1,B.M,!0,u,A.aW(!1,A.n(10),!0,new A.H(B.lt,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.Y),1)}}
C.aE9.prototype={
B(d){return D.adx}}
C.ayi.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jZ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.ek(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aL,v,v,B.a1,!1)},
qB(d,e){var w=null
return new A.H(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c_,A.j(e,w,w,w,w,w,w,D.bFe,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Hd.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oZ.prototype={
gaGz(){var w=this.c
return w===D.a_D||w===D.a_E||w===D.H0||w===D.a_F}}
C.a1P.prototype={
T(){return new C.aCU(null,null)}}
C.aCU.prototype={
Z(){this.a3()
var w=A.bE(null,B.rr,null,1,null,this)
w.nq(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aQ1()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dQ(t,new A.t(t,t,t,t,t,new A.ap(B.cO,B.c3,B.y,A.a([B.E,B.q.l(0.55)],x.O),t,t),B.k),B.bA),q=x.Y,p=u.d
p===$&&A.c()
p=A.cr(B.i1,p,t)
w=B.c.l(0.92)
q=A.aU(new A.cW(new A.b0(p,new A.bj(0.72,1,q),q.j("b0<bh.T>")),!1,A.Z(B.id,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.li
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEe(s,t),r,q,A.b2(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b2(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b2(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aI(B.a4,t,B.aT,B.m,s,t)}}
C.aEe.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kF(u,new C.cza(this),B.br,!0,w,w,new C.czb(this),w)
return new C.CO(v,w)}}
C.CO.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aG(A.a([B.rc,B.Lk],x.O),B.id)
break
case 1:w=new A.aG(A.a([B.vE,D.ahB],x.O),B.jI)
break
case 2:w=new A.aG(A.a([D.aj6,D.ah7],x.O),B.xu)
break
case 3:w=new A.aG(A.a([B.O,B.cB],x.O),B.xx)
break
case 4:w=new A.aG(A.a([B.ac,B.aj],x.O),B.n3)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.Z(w.b,B.R.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.am,B.aq,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afs.prototype={
n(){var w=this,v=w.aT$
if(v!=null)v.V(0,w.gdG())
w.aT$=null
w.a2()},
bp(){this.bG()
this.bD()
this.dH()}}
C.a1Q.prototype={
T(){return new C.aaQ()}}
C.aaQ.prototype={
bwk(d,e){var w=C.d7D(d)
if(w!=null)return C.d7E(w,e)
return d},
a3C(d,e){var w,v=this,u=C.d7D(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwk(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dEU(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bue(){var w,v=this
if(v.w)return
v.p(new C.cvj(v))
w=v.e
if(w!=null)v.a3C(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aK()
u.d=w
try{$.E2()
$.or().rQ(w,new C.cvr(u),!0)}catch(v){u.r=!0
u.f=!1}},
aR(d){var w,v=this
v.b4(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cvk(v))
w=v.e
w.toString
v.a3C(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Ro,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.fP(A.aU(new A.H(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yz(n,B.pT,w)],v)
if(o.f)w.push(A.fP(A.aU(new A.an(28,28,D.aeo,n),n,n,n),B.cm,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b0,B.o,1)
q=A.Z(B.Fb,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eI(0,A.aP(!1,B.M,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O5,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbud(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.Y)))}return new A.aI(B.a4,n,B.aT,B.m,w,n)}}
var z=a.updateTypes(["m(mZ)","~()","Ha(R)","mZ(X<@,@>)","a_(mZ)","X<m,@>(mZ)","au<~>()","H9(R)","iv<Q>(R,oZ?,o?)","SE(R,Q)","rg(R,oZ?,o?)","CO(R,ai,dv?)"])
C.d3R.prototype={
$1(d){return new C.Ha(this.a,null)},
$S:z+2}
C.d3Q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.aA(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cJ,B.O],j):A.a([B.c,B.aa],j),h=A.a([new A.ag(0,B.x,B.R.l(0.22),B.eo,32)],x.V),g=A.U(m?B.bx:B.R.l(0.18),B.o,1),f=A.n(28),e=B.R.l(m?0.35:0.14)
j=A.a([e,B.a3.l(m?0.18:0.08)],j)
e=A.u(n,D.aw0,B.h,n,n,new A.t(B.R.l(0.18),n,A.U(B.R.l(0.45),B.o,1),n,n,n,B.ak),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.O,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.ae,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.eq,w,A.aJ(n,n,n,n,A.Z(B.cy,m?B.a8:B.cm,n,n,n),n,n,n,new C.d3M(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a0,B.a2,B.y,j,n,n),B.k),n,n,n,B.D5,n,n,n)
e=A.ea(B.bW,A.a([new C.Kh("YouTube",B.F7,m,n),new C.Kh("TikTok",B.jI,m,n),new C.Kh("Instagram",B.xu,m,n),new C.Kh("Facebook",B.xx,m,n)],v),B.bR,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.O,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bz:B.he,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aj:B.bM
r=A.Z(B.jH,B.R.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bx:B.aA
u=A.y(A.a([e,B.ar,A.ax(n,B.B,!0,n,!0,B.m,n,A.az(),w,n,n,n,n,n,2,A.bn(n,new A.b8(4,q,B.L),n,n,n,n,n,n,!0,new A.b8(4,p,new A.aF(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b8(4,A.n(16),B.Kb),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.N,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.G,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.I,n,B.P,n,n,n,n)],v),B.ag,B.e,B.f,0,B.l)
e=A.jo(D.aw4,D.bYD,new C.d3N(d),A.iu(n,n,n,n,n,n,n,n,n,n,n,m?B.aK:B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.W(12,0,12,12+l.f.d),A.dQ(A.cw(f,A.y(A.a([j,new A.H(D.aos,u,n),new A.H(D.aoE,A.G(A.a([e,B.b2,A.bS(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d3O(d),n,n),B.a_,A.dN(D.aAc,D.bZp,new C.d3P(d,w),A.bt(B.R,n,n,n,B.c,n,D.O5,n,new A.bC(A.n(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ag,B.e,B.Q,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.am,B.aq,B.y,i,n,n),B.k),B.bA),n)},
$S:71}
C.d3M.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3N.prototype={
$0(){C.diD()
$.LY().sv(0,null)
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
C.bdF.prototype={
$1(d){return C.diE(A.S(d,x.N,x.z))},
$S:z+3}
C.bdG.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bdx.prototype={
$1(d){return d.c},
$S:z+0}
C.bdy.prototype={
$1(d){return d.r},
$S:z+0}
C.bdz.prototype={
$1(d){return d.f},
$S:z+0}
C.bdA.prototype={
$1(d){return d.at},
$S:z+0}
C.bdB.prototype={
$1(d){return d.c},
$S:z+0}
C.bdC.prototype={
$1(d){return d.r},
$S:z+0}
C.bdD.prototype={
$1(d){return d.f},
$S:z+0}
C.bdE.prototype={
$1(d){return d.at},
$S:z+0}
C.bdw.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bdv.prototype={
$1(d){return B.a.bi(B.n.j3(d,16),2,"0").toUpperCase()},
$S:77}
C.cvb.prototype={
$0(){},
$S:0}
C.cva.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cv8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cv9.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvc.prototype={
$1(d){return new C.H9(this.a,null)},
$S:z+7}
C.cvg.prototype={
$0(){return A.a5(this.a,!1).e3()},
$S:0}
C.cvh.prototype={
$3(d,e,f){return new A.iv($.E1(),new C.cvf(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvf.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AN(d,k,x.Q)
w=w==null?k:w.gkr()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.R.l(0.12)
s=A.n(12)
r=A.U(B.R.l(0.35),B.o,1)
q=A.Z(B.id,B.R,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.E1().a
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.O,k,k,k,k,k,k,k,k,12,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cs,B.eB,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cw(s,new A.iS(1.7777777777777777,C.diF(new A.df("fleet_master_"+r,x.W),!0,r,!0,j.gaGz(),"fleet_master"),k),B.as),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u0(0,B.m,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jL(new A.H(B.CV,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.n9(D.amM,A.atE(new A.mp(new C.cve(i,j),J.a3(i.d),!1,!0,!0,A.qT(),k),D.byT),k)],w))},
$S:1605}
C.cve.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.SE(v,e,J.a3(w.d),new C.cvd(w,v),this.b,null)},
$S:z+9}
C.cvd.prototype={
$0(){return this.a.bfK(this.b)},
$S:0}
C.cvi.prototype={
$0(){this.a.Rx()
return null},
$S:0}
C.cv5.prototype={
$0(){return A.a5(this.a,!1).e3()},
$S:0}
C.cv6.prototype={
$0(){C.Vg(this.a,$.bdu)
return null},
$S:0}
C.cv7.prototype={
$3(d,e,f){return A.fE(new C.cv4(this.a,e))},
$S:z+10}
C.cv4.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cq(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.ar,new C.aJx(u,s.a.c,s.e,s.d,new C.cv1(s),new C.cv2(s),new C.cv3(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.NV,v,v,B.a1),v,v,v)},
$S:1606}
C.cv1.prototype={
$0(){var w=this.a.c
w.toString
C.Vg(w,$.bdu)
return null},
$S:0}
C.cv2.prototype={
$1(d){var w=this.a
return w.p(new C.cv0(w,d))},
$S:37}
C.cv0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv3.prototype={
$0(){var w=this.a
return w.p(new C.cv_(w))},
$S:0}
C.cv_.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJM.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJN.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cza.prototype={
$3(d,e,f){return new C.CO(this.a.c,null)},
$S:z+11}
C.czb.prototype={
$3(d,e,f){if(f==null)return e
return new A.aI(B.a4,null,B.aT,B.m,A.a([new C.CO(this.a.c,null),D.adM],x.p),null)},
$C:"$3",
$R:3,
$S:426}
C.cvj.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvr.prototype={
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
w.a3C(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fO(v,"load",new C.cvp(w),!1,u)
v=w.e
v.toString
A.fO(v,"error",new C.cvq(w),!1,u)
w=w.e
w.toString
return w},
$S:566}
C.cvp.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cvn(w))
A.bK(B.D,new C.cvo(w),x.H)}},
$S:43}
C.cvn.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvo.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cvl(w))},
$S:12}
C.cvl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cvm(w))},
$S:43}
C.cvm.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvk.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d_Z.prototype={
$1(d){var w,v,u,t,s=new A.Co([],[]).G3(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1607};(function aliases(){var w=C.afs.prototype
w.aQ1=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaP.prototype,"gas0","bdj",1)
w(u,"gbdU","bdV",1)
w(u,"gbgi","bgj",6)
w(C.aaQ.prototype,"gbud","bue",1)
v(C,"dW2","diC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.ws,[C.d3R,C.d3Q,C.bdF,C.bdG,C.bdx,C.bdy,C.bdz,C.bdA,C.bdB,C.bdC,C.bdD,C.bdE,C.bdw,C.bdv,C.cvc,C.cvh,C.cvf,C.cv7,C.cv2,C.cza,C.czb,C.cvr,C.cvp,C.cvq,C.d_Z])
v(A.WP,[C.d3M,C.d3N,C.d3O,C.d3P,C.cvb,C.cva,C.cv8,C.cv9,C.cvg,C.cvd,C.cvi,C.cv5,C.cv6,C.cv1,C.cv0,C.cv3,C.cv_,C.cJM,C.cJN,C.cvj,C.cvn,C.cvo,C.cvl,C.cvm,C.cvk])
v(A.av,[C.Kh,C.SE,C.aBW,C.aJx,C.aJy,C.aCZ,C.aJw,C.aE9,C.ayi,C.aEe,C.CO])
v(A.ai,[C.mZ,C.oZ])
v(A.aa,[C.Ha,C.H9,C.a1P,C.a1Q])
v(A.ad,[C.aaP,C.aCT,C.afs,C.aaQ])
v(A.WQ,[C.cve,C.cv4])
u(C.Hd,A.azb)
u(C.aCU,C.afs)
w(C.afs,A.e8)})()
A.dlU(b.typeUniverse,JSON.parse('{"Ha":{"aa":[],"o":[]},"SE":{"av":[],"o":[]},"H9":{"aa":[],"o":[]},"Kh":{"av":[],"o":[]},"aaP":{"ad":["Ha"]},"aBW":{"av":[],"o":[]},"aCT":{"ad":["H9"]},"aJx":{"av":[],"o":[]},"aJy":{"av":[],"o":[]},"aCZ":{"av":[],"o":[]},"aJw":{"av":[],"o":[]},"aE9":{"av":[],"o":[]},"ayi":{"av":[],"o":[]},"a1P":{"aa":[],"o":[]},"CO":{"av":[],"o":[]},"aCU":{"ad":["a1P"]},"aEe":{"av":[],"o":[]},"a1Q":{"aa":[],"o":[]},"aaQ":{"ad":["a1Q"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("a9<ag>"),O:w("a9<z>"),e:w("a9<mZ>"),s:w("a9<m>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("ac<mZ>"),a:w("ac<@>"),P:w("X<m,@>"),f:w("X<@,@>"),w:w("mW"),_:w("AK"),k:w("mZ"),N:w("m"),Y:w("bj<a8>"),W:w("df<m>"),J:w("iv<Q>"),j:w("iv<oZ?>"),E:w("vq<cx>"),q:w("Tm"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rb=new A.L(983224,"MaterialIcons",!1)
D.ayI=new A.a6(D.Rb,48,B.b0,null,null,null)
D.bES=new A.O(!0,B.bz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMj=new A.x("Powered off",null,D.bES,null,null,null,null,null,null,null,null,null)
D.aMq=w([D.ayI,B.C,D.bMj],x.p)
D.akd=new A.fi(B.a1,B.e,B.Q,B.i,null,B.l,null,0,D.aMq,null)
D.adx=new A.di(B.J,null,null,D.akd,null)
D.byz=new A.an(18,18,B.L3,null)
D.adM=new A.di(B.J,null,null,D.byz,null)
D.aeo=new A.h9(2,null,null,null,null,B.U,null,null,null,null)
D.ah7=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahB=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aj6=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amD=new A.W(0,3,0,3)
D.amM=new A.W(10,0,10,88)
D.an8=new A.W(12,6,12,10)
D.anl=new A.W(14,8,14,6)
D.O5=new A.W(18,12,18,12)
D.aos=new A.W(20,18,20,8)
D.aoE=new A.W(20,8,20,20)
D.OJ=new A.W(8,6,15,8)
D.aun=new A.L(983222,"MaterialIcons",!1)
D.aw0=new A.a6(B.id,26,B.R,null,null,null)
D.aw4=new A.a6(B.Qn,18,null,null,null,null)
D.awm=new A.a6(B.pg,14,B.U,null,null,null)
D.auE=new A.L(983420,"MaterialIcons",!1)
D.ax7=new A.a6(D.auE,14,B.U,null,null,null)
D.asQ=new A.L(62895,"MaterialIcons",!1)
D.axb=new A.a6(D.asQ,14,B.U,null,null,null)
D.aAc=new A.a6(B.iV,20,null,null,null,null)
D.aAt=new A.a6(B.eS,16,null,null,null,null)
D.aOR=w([B.aj,B.O],x.O)
D.SC=new A.ap(B.am,B.aq,B.y,D.aOR,null,null)
D.bsq=new A.aG("NGMY OS","14.2.1")
D.brh=new A.aG("VirtualDroid","13.8.4")
D.brg=new A.aG("NGMY OS","15.0.0")
D.bs_=new A.aG("VirtualDroid","14.1.2")
D.bre=new A.aG("NGMY Tab OS","12.9.7")
D.brc=new A.aG("NGMY OS","13.5.3")
D.br1=new A.aG("VirtualDroid","15.2.0")
D.brD=new A.aG("NGMY OS","14.8.1")
D.bs5=new A.aG("NGMY Tab OS","13.2.4")
D.bsA=new A.aG("VirtualDroid","12.6.9")
D.bqY=new A.aG("NGMY OS","16.0.1")
D.bqP=new A.aG("VirtualDroid","14.9.0")
D.bsi=new A.aG("NGMY Tab OS","14.0.3")
D.brq=new A.aG("NGMY OS","13.1.8")
D.bqX=new A.aG("VirtualDroid","13.4.5")
D.brb=new A.aG("NGMY OS","15.3.2")
D.bs6=new A.aG("NGMY Tab OS","12.4.1")
D.bsk=new A.aG("VirtualDroid","16.1.0")
D.brC=new A.aG("NGMY OS","14.4.6")
D.bsr=new A.aG("VirtualDroid","15.0.8")
D.aOl=w([D.bsq,D.brh,D.brg,D.bs_,D.bre,D.brc,D.br1,D.brD,D.bs5,D.bsA,D.bqY,D.bqP,D.bsi,D.brq,D.bqX,D.brb,D.bs6,D.bsk,D.brC,D.bsr],A.bf("a9<+(m,m)>"))
D.buC=new A.eh(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bua=new A.eh(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bu5=new A.eh(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bue=new A.eh(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bu1=new A.eh(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bug=new A.eh(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buE=new A.eh(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bu2=new A.eh(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bu9=new A.eh(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bui=new A.eh(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bu0=new A.eh(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buw=new A.eh(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.but=new A.eh(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bu8=new A.eh(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buq=new A.eh(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bup=new A.eh(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bu_=new A.eh(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bud=new A.eh(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bun=new A.eh(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bus=new A.eh(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TL=w([D.buC,D.bua,D.bu5,D.bue,D.bu1,D.bug,D.buE,D.bu2,D.bu9,D.bui,D.bu0,D.buw,D.but,D.bu8,D.buq,D.bup,D.bu_,D.bud,D.bun,D.bus],A.bf("a9<+(m,m,a8,a8,m)>"))
D.aUt=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_D=new C.Hd(0,"youtube")
D.a_E=new C.Hd(1,"tiktok")
D.H0=new C.Hd(2,"instagram")
D.a_F=new C.Hd(3,"facebook")
D.bmp=new C.Hd(4,"other")
D.bya=new A.an(3,null,null,null)
D.byT=new A.ib(4,10,8,0.52,null)
D.bNB=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCd=new A.aT(D.bNB,null,null,null,null,null,null,null,null,null,null,null,null,B.D,!1,null,null,null,B.m,null)
D.bFe=new A.O(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNo=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bYD=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZp=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZw=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4_=new C.aE9(null)})();(function staticFields(){$.diB=20
$.aq9=null
$.bdu=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_k","E1",()=>A.Rj(0))
w($,"e_l","LY",()=>A.Rj(null))})()};
(a=>{a["hJKY7ofrvcInpip/PLYjpYyq+A0="]=a.current})($__dart_deferred_initializers__);