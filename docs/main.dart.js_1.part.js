((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dVX(d,e){A.a5(d,!1).cr(A.en(new C.d2z(e),!0,null,x.H))},
V5(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V5=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LR()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ak()
s=new A.ag(new A.aX(n,B.ad,B.a4),t)
w=3
return A.b(A.d9(B.F,new C.d2y(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V5)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dDK(r)
if(q==null){d.F(x.q).f.O(D.bBS)
w=1
break}w=4
return A.b(A.bJ(B.fT,null,x.H),$async$V5)
case 4:if(d.e==null){w=1
break}n=B.m.am(e,1,999)
$.dhh=n
p=C.dDE(n)
n=$.DW()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d6l(q)
d.F(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V5,v)},
dhk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mY(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H7(d){return C.dDN(d)},
dDN(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H7=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H7)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aC(0,a0,null)
w=x.a.b(r)&&J.cz(r)?10:11
break
case 10:k=J.eH(r,x.f)
k=A.dd(k,new C.bdE(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.E(new A.af(k,new C.bdF(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dhm(q)
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
case 9:case 5:o=A.aG(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.w.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dhk(A.S(n,x.N,x.z))
l=C.dhm(A.a([m],x.e))
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
case 18:case 14:q=C.dDL()
w=22
return A.b(C.H6(a3,q),$async$H7)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H7,v)},
dhm(d){var w=A.V(d).j("C<1,n>"),v=new A.C(d,new C.bdw(),w).es(0),u=new A.C(d,new C.bdx(),w).es(0),t=new A.C(d,new C.bdy(),w).es(0),s=new A.C(d,new C.bdz(),w).es(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d6m(null,q,u,t,v,s));++q}return r},
aq6(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aq6=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H7(d),$async$aq6)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bdA(),s).es(0)
p=r.d7(t,new C.bdB(),s).es(0)
o=r.d7(t,new C.bdC(),s).es(0)
n=r.d7(t,new C.bdD(),s).es(0)
m=C.d6m(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H6(d,t),$async$aq6)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aq6,v)},
H6(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H6=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H6)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.bdv(),x.P)
s=A.E(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$H6)
case 3:return A.f(null,v)}})
return A.h($async$H6,v)},
dDL(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dS(20,x.k)
for(w=0;w<20;++w)q[w]=C.d6m(w,w,t,s,u,r)
return q},
d6m(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.j6(),h=d==null,g=D.TM[B.m.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.TM[B.m.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.C(p,new C.bdu(),A.V(p).j("C<1,n>")).eX(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.eX(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.m.j3(i.bx(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.m.ag(e,20)
k=D.aUg[w]
j=D.aO5[w]
return new C.mY("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.m.q(e+1),2,"0"),u,k,C.dDM(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a0().Y())},
dDM(d,e){var w,v=J.dS(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.m.j3(d.bx(256),16),2,"0")
return B.d.eX(v)},
d2z:function d2z(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
Kc:function Kc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mY:function mY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bdE:function bdE(){},
bdF:function bdF(){},
bdw:function bdw(){},
bdx:function bdx(){},
bdy:function bdy(){},
bdz:function bdz(){},
bdA:function bdA(){},
bdB:function bdB(){},
bdC:function bdC(){},
bdD:function bdD(){},
bdv:function bdv(){},
bdu:function bdu(){},
H5:function H5(d,e){this.c=d
this.a=e},
aaJ:function aaJ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ctR:function ctR(){},
ctQ:function ctQ(d,e){this.a=d
this.b=e},
ctO:function ctO(d){this.a=d},
ctP:function ctP(d,e){this.a=d
this.b=e},
ctS:function ctS(d){this.a=d},
ctW:function ctW(d){this.a=d},
ctX:function ctX(d,e){this.a=d
this.b=e},
ctV:function ctV(d,e,f){this.a=d
this.b=e
this.c=f},
ctU:function ctU(d,e){this.a=d
this.b=e},
ctT:function ctT(d,e){this.a=d
this.b=e},
ctY:function ctY(d){this.a=d},
Sv:function Sv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBS:function aBS(d,e){this.c=d
this.a=e},
H4:function H4(d,e){this.c=d
this.a=e},
aCP:function aCP(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ctL:function ctL(d){this.a=d},
ctM:function ctM(d){this.a=d},
ctN:function ctN(d){this.a=d},
ctK:function ctK(d,e){this.a=d
this.b=e},
ctH:function ctH(d){this.a=d},
ctI:function ctI(d){this.a=d},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctJ:function ctJ(d){this.a=d},
ctF:function ctF(d){this.a=d},
aJu:function aJu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJv:function aJv(d,e,f){this.c=d
this.d=e
this.a=f},
aCV:function aCV(d,e){this.c=d
this.a=e},
aJt:function aJt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cIm:function cIm(d){this.a=d},
cIn:function cIn(d){this.a=d},
aE5:function aE5(d){this.a=d},
aye:function aye(d,e){this.c=d
this.a=e},
dDK(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dDJ(v)
if(u!=null)return new C.p_(w,C.d6k(u,!1),D.a_E,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dDI(v)
if(t!=null)return new C.p_(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a_F,"TikTok",q)
s=C.dDH(w,v)
if(s!=null)return s
r=C.dDG(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p_(w,w,D.bm3,"Video",q)
return q},
dDH(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p_(d,"https://www.instagram.com/reel/"+w+u,D.H0,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p_(d,"https://www.instagram.com/p/"+w+u,D.H0,t,null)}return null},
dDG(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p_(d,"https://www.facebook.com/plugins/video.php?href="+A.eF(2,d,B.aM,!1)+"&show_text=false&width=734",D.a_G,"Facebook",null)},
dDJ(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dDI(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
H8:function H8(d,e){this.a=d
this.b=e},
p_:function p_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1H:function a1H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCQ:function aCQ(d,e){var _=this
_.d=$
_.cR$=d
_.aQ$=e
_.c=_.a=null},
aEa:function aEa(d,e){this.c=d
this.a=e},
cxQ:function cxQ(d){this.a=d},
cxR:function cxR(d){this.a=d},
CO:function CO(d,e){this.c=d
this.a=e},
afn:function afn(){},
dhl(d,e,f,g,h,i){return new C.a1I(i,f,h,e,g,d)},
dUD(d){var w=window
w.toString
A.fP(w,"message",new C.cZH(d),!1,x._)},
a1I:function a1I(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaK:function aaK(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
ctZ:function ctZ(d){this.a=d},
cu6:function cu6(d){this.a=d},
cu4:function cu4(d){this.a=d},
cu2:function cu2(d){this.a=d},
cu3:function cu3(d){this.a=d},
cu0:function cu0(d){this.a=d},
cu5:function cu5(d){this.a=d},
cu1:function cu1(d){this.a=d},
cu_:function cu_(d){this.a=d},
cZH:function cZH(d){this.a=d},
dhf(){var w,v,u
try{v=A.yt()
w=v.gpY(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d6k(d,e){var w=C.dhf(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eF(2,w,B.aM,!1))
v.push("widget_referrer="+A.eF(2,w,B.aM,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d6j(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
dhg(d){var w=A.bk(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bk(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dDD(d,e,f){var w,v,u=C.d6j(d)
if(u!=null){if(f){w=C.dhf()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dhg(C.d6k(u,e))}return C.dhg(d)},
dDE(d){if(d<=4)return 0
return B.m.aZ(d-1,4)*4},
dDF(d){var w
if($.LR().a==null)return!1
w=$.DW().a
return d>=w&&d<w+4},
dhj(){var w=$.aq5
if(w!=null)w.a7(0)
$.aq5=null
$.DW().sv(0,0)},
dhi(){var w,v,u,t=$.LR()
if(t.a==null)return
w=$.aq5
if(w!=null)w.a7(0)
v=$.dhh
if(v<=4){t=t.a
t.toString
C.d6l(t)
return}w=$.DW()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d6l(t)},
d6l(d){var w=$.aq5
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
default:w=null}$.aq5=A.dn(A.d6(0,0,0,0,0,w),C.dUO())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kc.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.m(20),s=A.T(B.S.l(0.25),B.o,1),r=A.Z(this.d,B.S,w,w,14)
return A.u(w,A.G(A.a([r,B.eF,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bA,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.Q,0,w,w),B.f,w,w,new A.r(u,w,s,t,w,w,B.k),w,w,w,B.ey,w,w,w)}}
C.mY.prototype={
ab(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H5.prototype={
T(){return new C.aaJ(A.a([],x.e))},
gdW(){return this.c}}
C.aaJ.prototype={
Z(){var w=this
w.a3()
$.DW().ak(0,w.garT())
C.dUD(w.gbdK())
w.V3()},
bd9(){if(this.c!=null)this.p(new C.ctR())},
bdL(){C.dhi()},
n(){$.DW().V(0,this.garT())
C.dhj()
$.LR().sv(0,null)
this.a2()},
V3(){var w=0,v=A.i(x.H),u,t=this,s
var $async$V3=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H7(t.a.c),$async$V3)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ctQ(t,s))
$.bdt=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$V3,v)},
Rh(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rh=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.ctO(t))
w=3
return A.b(C.aq6(t.a.c),$async$Rh)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.ctP(t,s))
$.bdt=J.a3(t.d)
t.c.F(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.C,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rh,v)},
bfC(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.en(new C.ctS(d),!1,null,x.H))},
bga(){var w=this.c
w.toString
return C.V5(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.v,t=u?B.e8:B.bB,s=A.aJ(v,v,v,v,B.Ff,v,v,v,new C.ctW(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bn(A.G(A.a([A.H(new A.I(B.i3,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.O,v,v,v,v,v,v,v,v,15,v,v,B.t,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.J,!0,v,A.aV(!1,v,!0,new A.I(B.aQ,A.Z(B.eR,B.S,v,v,28),v),B.c7,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbg9(),v,v,v,v,v,v,v),B.f,B.F,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.h,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.h,0,v,v)
s=A.c5(!0,A.y(A.a([new A.I(D.OL,r,v),A.H(w.e?B.lf:new A.iu($.LR(),new C.ctX(w,u),v,v,x.j),1)],q),B.i,B.e,B.h,0,B.l),!1,B.Y,!0,!0)
return A.c7(v,t,s,v,!1,!1,A.akW(B.S,B.AR,B.n9,D.bYR,w.e?v:new C.ctY(w)),v)}}
C.Sv.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.o,1),q=A.a([new A.ad(0,B.x,B.S.l(0.18),B.cu,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1H(n,!0,!C.dDF(w),"Fold "+(B.m.aZ(w,4)+1)+"/"+B.m.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.Z(B.ic,B.ln,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.av,B.h,0,B.l),B.f,B.vB,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.J,!0,u,A.aV(!1,t,!0,A.y(A.a([A.H(A.u(u,A.cv(p,A.fR(A.y(A.a([new C.aBS(o,u),A.H(n,1),A.u(u,A.G(A.a([A.Z(B.ta,B.S.l(0.85),u,u,9),D.bxP,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.av,B.h,0,u,u),B.f,B.a8,u,u,u,u,u,D.amw,u,u,u)],w),B.i,B.e,B.h,0,B.l),B.q,!0),B.at),B.f,u,u,new A.r(u,u,r,s,q,D.SC,B.k),u,u,u,B.eP,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.S.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.h,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.f,B.F,0,u,u,u,u,u,B.X)}}
C.aBS.prototype={
B(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pi,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.h,0,w,w),B.f,B.a8,w,w,w,w,w,B.OB,w,w,w)}}
C.H4.prototype={
T(){return new C.aCP()}}
C.aCP.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.v,u=v?B.e8:B.bB,t=A.aJ(w,w,w,w,B.Ff,w,w,w,new C.ctL(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c7(w,u,A.c5(!0,A.y(A.a([new A.I(D.OL,A.G(A.a([t,A.H(new A.Bn(A.G(A.a([A.H(new A.I(B.i3,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.O,w,w,w,w,w,w,w,w,14,w,w,B.t,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.J,!0,w,A.aV(!1,w,!0,new A.I(B.aQ,A.Z(B.eR,B.S,w,w,28),w),B.c7,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ctM(d),w,w,w,w,w,w,w),B.f,B.F,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.h,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.h,0,w,w),w),A.H(new A.iu($.LR(),new C.ctN(this),w,w,x.j),1)],r),B.i,B.e,B.h,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJu.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ad(0,B.x,B.S.l(0.35),B.ec,28),new A.ad(0,B.x,B.q.l(0.45),B.cp,18)],x.V),o=A.T(B.c.l(0.12),B.o,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhl(new A.df(v+"_full_"+u,x.W),!1,u,!1,w.gaGv(),v+"_full")
w=v}else w=new C.aCV(t.r,s)}else w=new C.aye(m,s)
else w=D.c3m
return A.u(s,A.cv(n,A.fR(A.y(A.a([new C.aJv(m,l,s),A.H(w,1),new C.aJt(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.h,0,B.l),B.q,!0),B.at),B.f,s,s,new A.r(s,s,o,q,p,D.SC,B.k),s,r*2.05,s,B.bc,s,s,r)}}
C.aJv.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.dj(r)
r=A.hj(r)
w=new A.de(q,r)
v=w.gGA()===0?12:w.gGA()
r=B.a.bh(B.m.q(r),2,"0")
q=(q<12?B.eN:B.hB)===B.eN?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.l0,s,s,s),B.b4,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.awW,B.dx,D.awb,B.dx,D.ax_],t),B.i,s,B.e,B.h,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.F8,B.S.l(0.9),s,s,12),B.dx,A.H(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.h,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.h,0,B.l),B.f,B.a8,s,s,s,s,s,D.anf,s,s,s)}}
C.aCV.prototype={
B(d){var w=null
return A.u(w,A.aQ(A.y(A.a([A.Z(B.xm,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aq,A.ez(D.aAh,D.bMW,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.S,w,w,w,w,w,new A.aE(B.S.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.Q,0,B.l),w,w,w),B.f,B.vB,w,w,w,w,w,w,w,w,1/0)}}
C.aJt.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arL(B.Ra,"YouTube",s===0,r,new C.cIm(u))
s=u.arL(B.jF,"Device",s===1,r,new C.cIn(u))
w=r?"Power off":"Power on"
v=r?D.Rb:D.auf
return A.u(t,A.G(A.a([q,B.a_,s,B.b4,A.aJ(t,t,t,t,A.Z(v,r?B.b6:B.eD,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cH)],x.p),B.i,t,B.e,B.h,0,t,t),B.f,B.a8,t,t,t,t,t,D.an2,t,t,t)},
arL(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.S:B.a6
v=f&&g?B.S.l(0.15):B.F
u=A.m(10)
t=g?h:s
return A.H(A.aK(!1,B.J,!0,u,A.aV(!1,A.m(10),!0,new A.I(B.ly,A.y(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.Q,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.f,v,0,s,s,s,s,s,B.X),1)}}
C.aE5.prototype={
B(d){return D.adC}}
C.aye.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.jZ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qA("Serial",u.c),q=w.qA("Model",u.d),p=w.qA("Device ID",u.e),o=w.qA("IMEI",u.r),n=w.qA("MAC",u.f),m=w.qA("OS",u.w+" "+u.x),l=w.qA("Location",u.y+", "+u.z),k=w.qA("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qA("Timezone",u.at)
u=u.ax
return A.ex(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qA("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aQ,v,v,B.a1,!1)},
qA(d,e){var w=null
return new A.I(B.c1,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bV,A.j(e,w,w,w,w,w,w,D.bET,w,w,w)],x.p),B.u,B.e,B.h,0,B.l),w)}}
C.H8.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p_.prototype={
gaGv(){var w=this.c
return w===D.a_E||w===D.a_F||w===D.H0||w===D.a_G}}
C.a1H.prototype={
T(){return new C.aCQ(null,null)}}
C.aCQ.prototype={
Z(){this.a3()
var w=A.bD(null,B.rt,null,1,null,this)
w.lM(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aPZ()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dJ(t,new A.r(t,t,t,t,t,new A.ap(B.cN,B.c5,B.y,A.a([B.F,B.q.l(0.55)],x.O),t,t),B.k),B.bx),q=x.Y,p=u.d
p===$&&A.c()
p=A.cl(B.he,p,t)
w=B.c.l(0.92)
q=A.aQ(new A.cV(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bg.T>")),!1,A.Z(B.ic,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ln
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEa(s,t),r,q,A.b1(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.r(p,t,t,w,t,t,B.k),t,t,t,new A.W(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b1(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b1(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.a2,t,B.aS,B.n,s,t)}}
C.aEa.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l3(u,new C.cxQ(this),B.bt,!0,w,w,new C.cxR(this),w)
return new C.CO(v,w)}}
C.CO.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.rd,B.Lk],x.O),B.ic)
break
case 1:w=new A.aH(A.a([B.vB,D.ahw],x.O),B.jH)
break
case 2:w=new A.aH(A.a([D.aj_,D.ah2],x.O),B.xt)
break
case 3:w=new A.aH(A.a([B.O,B.cA],x.O),B.xw)
break
case 4:w=new A.aH(A.a([B.a8,B.ak],x.O),B.n5)
break
default:w=u}v=w.a
return A.u(u,A.aQ(A.Z(w.b,B.S.l(0.55),u,u,28),u,u,u),B.f,u,u,new A.r(u,u,u,u,u,new A.ap(B.am,B.ar,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afn.prototype={
n(){var w=this,v=w.aQ$
if(v!=null)v.V(0,w.gdl())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dm()}}
C.a1I.prototype={
T(){return new C.aaK()}}
C.aaK.prototype={
bw_(d,e){var w=C.d6j(d)
if(w!=null)return C.d6k(w,e)
return d},
a3s(d,e){var w,v=this,u=C.d6j(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bw_(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dDD(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
btV(){var w,v=this
if(v.w)return
v.p(new C.ctZ(v))
w=v.e
if(w!=null)v.a3s(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.DX()
$.or().rO(w,new C.cu6(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cu_(v))
w=v.e
w.toString
v.a3s(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Rn,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.E,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.I,n,n)],v))
return A.fR(A.aQ(new A.I(new A.W(12,12,12,12),A.y(w,B.i,B.e,B.Q,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yo(n,B.pU,w)],v)
if(o.f)w.push(A.fR(A.aQ(new A.am(28,28,D.aer,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.b0,B.o,1)
q=A.Z(B.Fb,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eK(0,A.aK(!1,B.J,!0,n,A.aV(!1,n,!0,A.aQ(A.u(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.Q,0,n,n),B.f,n,n,new A.r(t,n,r,s,n,n,B.k),n,n,n,D.O7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbtU(),n,n,n,n,n,n,n),B.f,u,0,n,n,n,n,n,B.X)))}return new A.aF(B.a2,n,B.aS,B.n,w,n)}}
var z=a.updateTypes(["n(mY)","~()","H5(R)","mY(Y<@,@>)","a0(mY)","Y<n,@>(mY)","aw<~>()","H4(R)","iu<Q>(R,p_?,o?)","Sv(R,Q)","rh(R,p_?,o?)","CO(R,ai,du?)"])
C.d2z.prototype={
$1(d){return new C.H5(this.a,null)},
$S:z+2}
C.d2y.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.v,l=A.ay(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d5,B.O],j):A.a([B.c,B.aa],j),h=A.a([new A.ad(0,B.x,B.S.l(0.22),B.ec,32)],x.V),g=A.T(m?B.bs:B.S.l(0.18),B.o,1),f=A.m(28),e=B.S.l(m?0.35:0.14)
j=A.a([e,B.a3.l(m?0.18:0.08)],j)
e=A.u(n,D.avS,B.f,n,n,new A.r(B.S.l(0.18),n,A.T(B.S.l(0.45),B.o,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.O,n,n,n,n,n,n,n,n,18,n,n,B.t,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.y(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.ab,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.u,B.e,B.h,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.ee,w,A.aJ(n,n,n,n,A.Z(B.ct,m?B.a6:B.cf,n,n,n),n,n,n,new C.d2u(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.h,0,n,n),B.f,n,n,new A.r(n,n,n,n,n,new A.ap(B.Z,B.a0,B.y,j,n,n),B.k),n,n,n,B.D4,n,n,n)
e=A.ee(B.bY,A.a([new C.Kc("YouTube",B.F7,m,n),new C.Kc("TikTok",B.jH,m,n),new C.Kc("Instagram",B.xt,m,n),new C.Kc("Facebook",B.xw,m,n)],v),B.bT,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.O,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bC:B.hc,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bB
r=A.Z(B.jG,B.S.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bs:B.ay
u=A.y(A.a([e,B.as,A.aC(n,B.B,!0,n,!0,B.n,n,A.aD(),w,n,n,n,n,n,2,A.bp(n,new A.b9(4,q,B.L),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aE(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.K9),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.P,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.H,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.T,n,n,n,n)],v),B.ag,B.e,B.h,0,B.l)
e=A.ke(D.avV,D.bXZ,new C.d2v(d),A.j2(n,n,n,n,n,n,n,n,n,n,n,m?B.aO:B.ab,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.W(12,0,12,12+l.f.d),A.dJ(A.cv(f,A.y(A.a([j,new A.I(B.Oj,u,n),new A.I(D.aow,A.G(A.a([e,B.b4,A.bZ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d2w(d),n,n),B.a_,A.dK(D.aA0,D.bYM,new C.d2x(d,w),A.bu(B.S,n,n,n,B.c,n,D.O7,n,new A.bB(A.m(14),B.L),n,n,n))],v),B.i,n,B.e,B.h,0,n,n),n)],v),B.ag,B.e,B.Q,0,B.l),B.at),new A.r(n,n,g,k,h,new A.ap(B.am,B.ar,B.y,i,n,n),B.k),B.bx),n)},
$S:75}
C.d2u.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2v.prototype={
$0(){C.dhj()
$.LR().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d2w.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d2x.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bdE.prototype={
$1(d){return C.dhk(A.S(d,x.N,x.z))},
$S:z+3}
C.bdF.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bdw.prototype={
$1(d){return d.c},
$S:z+0}
C.bdx.prototype={
$1(d){return d.r},
$S:z+0}
C.bdy.prototype={
$1(d){return d.f},
$S:z+0}
C.bdz.prototype={
$1(d){return d.at},
$S:z+0}
C.bdA.prototype={
$1(d){return d.c},
$S:z+0}
C.bdB.prototype={
$1(d){return d.r},
$S:z+0}
C.bdC.prototype={
$1(d){return d.f},
$S:z+0}
C.bdD.prototype={
$1(d){return d.at},
$S:z+0}
C.bdv.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bdu.prototype={
$1(d){return B.a.bh(B.m.j3(d,16),2,"0").toUpperCase()},
$S:76}
C.ctR.prototype={
$0(){},
$S:0}
C.ctQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ctO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ctP.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.ctS.prototype={
$1(d){return new C.H4(this.a,null)},
$S:z+7}
C.ctW.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.ctX.prototype={
$3(d,e,f){return new A.iu($.DW(),new C.ctV(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.ctV.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AQ(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.S.l(0.12)
s=A.m(12)
r=A.T(B.S.l(0.35),B.o,1)
q=A.Z(B.ic,B.S,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.DW().a
m=B.j.am(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.a_,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.O,k,k,k,k,k,k,k,k,12,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.h,0,k,k),B.f,k,k,new A.r(t,k,r,s,k,k,B.k),k,k,B.cy,B.ez,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.cv(s,new A.iO(1.7777777777777777,C.dhl(new A.df("fleet_master_"+r,x.W),!0,r,!0,j.gaGv(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u_(0,B.n,k,B.r,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jJ(new A.I(B.CU,A.y(u,B.u,B.e,B.h,0,B.l),k),k),new A.n8(D.amF,A.atA(new A.mm(new C.ctU(i,j),J.a3(i.d),!1,!0,!0,A.qU(),k),D.byy),k)],w))},
$S:1599}
C.ctU.prototype={
$2(d,e){var w=this.a,v=J.t(w.d,e)
return new C.Sv(v,e,J.a3(w.d),new C.ctT(w,v),this.b,null)},
$S:z+9}
C.ctT.prototype={
$0(){return this.a.bfC(this.b)},
$S:0}
C.ctY.prototype={
$0(){this.a.Rh()
return null},
$S:0}
C.ctL.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.ctM.prototype={
$0(){C.V5(this.a,$.bdt)
return null},
$S:0}
C.ctN.prototype={
$3(d,e,f){return A.fE(new C.ctK(this.a,e))},
$S:z+10}
C.ctK.prototype={
$2(d,e){var w,v=null,u=B.j.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aQ(A.cq(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.I,v,v),B.as,new C.aJu(u,s.a.c,s.e,s.d,new C.ctH(s),new C.ctI(s),new C.ctJ(s),t,v)],x.p),B.i,B.e,B.h,0,B.l),v,B.r,v,B.NX,v,v,B.a1),v,v,v)},
$S:1600}
C.ctH.prototype={
$0(){var w=this.a.c
w.toString
C.V5(w,$.bdt)
return null},
$S:0}
C.ctI.prototype={
$1(d){var w=this.a
return w.p(new C.ctG(w,d))},
$S:39}
C.ctG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ctJ.prototype={
$0(){var w=this.a
return w.p(new C.ctF(w))},
$S:0}
C.ctF.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cIm.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cIn.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cxQ.prototype={
$3(d,e,f){return new C.CO(this.a.c,null)},
$S:z+11}
C.cxR.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a2,null,B.aS,B.n,A.a([new C.CO(this.a.c,null),D.adQ],x.p),null)},
$C:"$3",
$R:3,
$S:453}
C.ctZ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cu6.prototype={
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
w.a3s(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fP(v,"load",new C.cu4(w),!1,u)
v=w.e
v.toString
A.fP(v,"error",new C.cu5(w),!1,u)
w=w.e
w.toString
return w},
$S:592}
C.cu4.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cu2(w))
A.bJ(B.C,new C.cu3(w),x.H)}},
$S:43}
C.cu2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cu3.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cu0(w))},
$S:12}
C.cu0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cu5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cu1(w))},
$S:43}
C.cu1.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cu_.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cZH.prototype={
$1(d){var w,v,u,t,s=new A.Co([],[]).FR(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.t(w,"info")
if(J.v(J.t(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.t(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.t(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1601};(function aliases(){var w=C.afn.prototype
w.aPZ=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaJ.prototype,"garT","bd9",1)
w(u,"gbdK","bdL",1)
w(u,"gbg9","bga",6)
w(C.aaK.prototype,"gbtU","btV",1)
v(C,"dUO","dhi",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wy,[C.d2z,C.d2y,C.bdE,C.bdF,C.bdw,C.bdx,C.bdy,C.bdz,C.bdA,C.bdB,C.bdC,C.bdD,C.bdv,C.bdu,C.ctS,C.ctX,C.ctV,C.ctN,C.ctI,C.cxQ,C.cxR,C.cu6,C.cu4,C.cu5,C.cZH])
v(A.WE,[C.d2u,C.d2v,C.d2w,C.d2x,C.ctR,C.ctQ,C.ctO,C.ctP,C.ctW,C.ctT,C.ctY,C.ctL,C.ctM,C.ctH,C.ctG,C.ctJ,C.ctF,C.cIm,C.cIn,C.ctZ,C.cu2,C.cu3,C.cu0,C.cu1,C.cu_])
v(A.au,[C.Kc,C.Sv,C.aBS,C.aJu,C.aJv,C.aCV,C.aJt,C.aE5,C.aye,C.aEa,C.CO])
v(A.ai,[C.mY,C.p_])
v(A.ab,[C.H5,C.H4,C.a1H,C.a1I])
v(A.ac,[C.aaJ,C.aCP,C.afn,C.aaK])
v(A.WF,[C.ctU,C.ctK])
u(C.H8,A.az7)
u(C.aCQ,C.afn)
w(C.afn,A.e1)})()
A.dkB(b.typeUniverse,JSON.parse('{"H5":{"ab":[],"o":[]},"Sv":{"au":[],"o":[]},"H4":{"ab":[],"o":[]},"Kc":{"au":[],"o":[]},"aaJ":{"ac":["H5"]},"aBS":{"au":[],"o":[]},"aCP":{"ac":["H4"]},"aJu":{"au":[],"o":[]},"aJv":{"au":[],"o":[]},"aCV":{"au":[],"o":[]},"aJt":{"au":[],"o":[]},"aE5":{"au":[],"o":[]},"aye":{"au":[],"o":[]},"a1H":{"ab":[],"o":[]},"CO":{"au":[],"o":[]},"aCQ":{"ac":["a1H"]},"aEa":{"au":[],"o":[]},"a1I":{"ab":[],"o":[]},"aaK":{"ac":["a1I"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bf
return{V:w("a9<ad>"),O:w("a9<z>"),e:w("a9<mY>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("aa<mY>"),a:w("aa<@>"),P:w("Y<n,@>"),f:w("Y<@,@>"),w:w("mU"),_:w("AN"),k:w("mY"),N:w("n"),Y:w("bi<a8>"),W:w("df<n>"),J:w("iu<Q>"),j:w("iu<p_?>"),E:w("vt<cx>"),q:w("Tc"),z:w("@"),Q:w("ai?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rb=new A.L(983224,"MaterialIcons",!1)
D.ayw=new A.a7(D.Rb,48,B.b0,null,null,null)
D.bEw=new A.M(!0,B.bC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLT=new A.x("Powered off",null,D.bEw,null,null,null,null,null,null,null,null,null)
D.aMb=w([D.ayw,B.E,D.bLT],x.p)
D.ak6=new A.eP(B.a1,B.e,B.Q,B.i,null,B.l,null,0,D.aMb,null)
D.adC=new A.dk(B.K,null,null,D.ak6,null)
D.bye=new A.am(18,18,B.L2,null)
D.adQ=new A.dk(B.K,null,null,D.bye,null)
D.aer=new A.hd(2,null,null,null,null,B.U,null,null,null,null)
D.ah2=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahw=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aj_=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.amw=new A.W(0,3,0,3)
D.amF=new A.W(10,0,10,88)
D.an2=new A.W(12,6,12,10)
D.anf=new A.W(14,8,14,6)
D.O7=new A.W(18,12,18,12)
D.aow=new A.W(20,8,20,20)
D.OL=new A.W(8,6,15,8)
D.auf=new A.L(983222,"MaterialIcons",!1)
D.avS=new A.a7(B.ic,26,B.S,null,null,null)
D.avV=new A.a7(B.Qn,18,null,null,null,null)
D.awb=new A.a7(B.pi,14,B.U,null,null,null)
D.auw=new A.L(983420,"MaterialIcons",!1)
D.awW=new A.a7(D.auw,14,B.U,null,null,null)
D.asI=new A.L(62895,"MaterialIcons",!1)
D.ax_=new A.a7(D.asI,14,B.U,null,null,null)
D.aA0=new A.a7(B.iP,20,null,null,null,null)
D.aAh=new A.a7(B.eR,16,null,null,null,null)
D.aOB=w([B.ak,B.O],x.O)
D.SC=new A.ap(B.am,B.ar,B.y,D.aOB,null,null)
D.bs5=new A.aH("NGMY OS","14.2.1")
D.bqX=new A.aH("VirtualDroid","13.8.4")
D.bqW=new A.aH("NGMY OS","15.0.0")
D.brF=new A.aH("VirtualDroid","14.1.2")
D.bqU=new A.aH("NGMY Tab OS","12.9.7")
D.bqS=new A.aH("NGMY OS","13.5.3")
D.bqH=new A.aH("VirtualDroid","15.2.0")
D.bri=new A.aH("NGMY OS","14.8.1")
D.brL=new A.aH("NGMY Tab OS","13.2.4")
D.bsf=new A.aH("VirtualDroid","12.6.9")
D.bqD=new A.aH("NGMY OS","16.0.1")
D.bqu=new A.aH("VirtualDroid","14.9.0")
D.brY=new A.aH("NGMY Tab OS","14.0.3")
D.br5=new A.aH("NGMY OS","13.1.8")
D.bqC=new A.aH("VirtualDroid","13.4.5")
D.bqR=new A.aH("NGMY OS","15.3.2")
D.brM=new A.aH("NGMY Tab OS","12.4.1")
D.bs_=new A.aH("VirtualDroid","16.1.0")
D.brh=new A.aH("NGMY OS","14.4.6")
D.bs6=new A.aH("VirtualDroid","15.0.8")
D.aO5=w([D.bs5,D.bqX,D.bqW,D.brF,D.bqU,D.bqS,D.bqH,D.bri,D.brL,D.bsf,D.bqD,D.bqu,D.brY,D.br5,D.bqC,D.bqR,D.brM,D.bs_,D.brh,D.bs6],A.bf("a9<+(n,n)>"))
D.buh=new A.ej(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.btQ=new A.ej(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.btL=new A.ej(["New York","United States",40.7128,-74.006,"America/New_York"])
D.btU=new A.ej(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.btH=new A.ej(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.btW=new A.ej(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buj=new A.ej(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.btI=new A.ej(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.btP=new A.ej(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.btY=new A.ej(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.btG=new A.ej(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bub=new A.ej(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bu8=new A.ej(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.btO=new A.ej(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bu5=new A.ej(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bu4=new A.ej(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.btF=new A.ej(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.btT=new A.ej(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bu2=new A.ej(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bu7=new A.ej(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.TM=w([D.buh,D.btQ,D.btL,D.btU,D.btH,D.btW,D.buj,D.btI,D.btP,D.btY,D.btG,D.bub,D.bu8,D.btO,D.bu5,D.bu4,D.btF,D.btT,D.bu2,D.bu7],A.bf("a9<+(n,n,a8,a8,n)>"))
D.aUg=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a_E=new C.H8(0,"youtube")
D.a_F=new C.H8(1,"tiktok")
D.H0=new C.H8(2,"instagram")
D.a_G=new C.H8(3,"facebook")
D.bm3=new C.H8(4,"other")
D.bxP=new A.am(3,null,null,null)
D.byy=new A.i9(4,10,8,0.52,null)
D.bN7=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bBS=new A.aT(D.bN7,null,null,null,null,null,null,null,null,null,null,null,null,B.C,!1,null,null,null,B.n,null)
D.bET=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMW=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bXZ=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bYM=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bYR=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c3m=new C.aE5(null)})();(function staticFields(){$.dhh=20
$.aq5=null
$.bdt=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dZ5","DW",()=>A.Ra(0))
w($,"dZ6","LR",()=>A.Ra(null))})()};
(a=>{a["r+1yMQkt23CzuswPU6M0/NH/iLM="]=a.current})($__dart_deferred_initializers__);