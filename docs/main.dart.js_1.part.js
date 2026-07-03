((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dWp(d,e){A.a5(d,!1).cw(A.ea(new C.d3h(e),!0,null,x.H))},
V2(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$V2=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LJ()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aH(n,B.a5,B.U),t)
w=3
return A.b(A.d3(B.C,new C.d3g(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$V2)
case 3:r=g
s.E$=t
s.G$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dEj(r)
if(q==null){d.F(x.q).f.O(D.bCJ)
w=1
break}w=4
return A.b(A.bM(B.fL,null,x.H),$async$V2)
case 4:if(d.e==null){w=1
break}n=B.n.an(e,1,999)
$.dhU=n
p=C.dEd(n)
n=$.DS()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d72(q)
d.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$V2,v)},
dhX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mS(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
H3(d){return C.dEm(d)},
dEm(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$H3=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$H3)
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
case 10:k=J.f6(r,x.f)
k=A.dn(k,new C.bcD(),k.$ti.j("J.E"),x.k)
j=A.S(k).j("aa<J.E>")
i=A.C(new A.aa(k,new C.bcE(),j),j.j("J.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dhZ(q)
w=12
return A.b(C.H2(a3,p),$async$H3)
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
case 19:m=C.dhX(A.O(n,x.N,x.z))
l=C.dhZ(A.a([m],x.e))
w=21
return A.b(C.H2(a3,l),$async$H3)
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
case 18:case 14:q=C.dEk()
w=22
return A.b(C.H2(a3,q),$async$H3)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$H3,v)},
dhZ(d){var w=A.T(d).j("B<1,m>"),v=new A.B(d,new C.bcv(),w).eF(0),u=new A.B(d,new C.bcw(),w).eF(0),t=new A.B(d,new C.bcx(),w).eF(0),s=new A.B(d,new C.bcy(),w).eF(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d73(null,q,u,t,v,s));++q}return r},
apW(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$apW=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H3(d),$async$apW)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d7(t,new C.bcz(),s).eF(0)
p=r.d7(t,new C.bcA(),s).eF(0)
o=r.d7(t,new C.bcB(),s).eF(0)
n=r.d7(t,new C.bcC(),s).eF(0)
m=C.d73(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.H2(d,t),$async$apW)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$apW,v)},
H2(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$H2=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$H2)
case 2:u=g
t=B.a.i(d)
s=J.b0(e,new C.bcu(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.am("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.al(s,null)),$async$H2)
case 3:return A.f(null,v)}})
return A.h($async$H2,v)},
dEk(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dV(20,x.k)
for(w=0;w<20;++w)q[w]=C.d73(w,w,t,s,u,r)
return q},
d73(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jt(),h=d==null,g=D.U5[B.n.af(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U5[B.n.af(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.by(256)
n=new A.B(p,new C.bct(),A.T(p).j("B<1,m>")).f9(0)
u="VND-"+B.a.ag(n,0,4)+"-"+B.a.ag(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.by(10)
t=B.d.f9(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bj(B.n.jg(i.by(256),16),2,"0")
s=B.d.be(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.af(e,20)
k=D.aV_[w]
j=D.aOS[w]
return new C.mS("vd_"+1000*Date.now()+"_"+e+"_"+i.by(99999),"Device "+B.a.bj(B.n.q(e+1),2,"0"),u,k,C.dEl(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a_().W())},
dEl(d,e){var w,v=J.dV(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bj(B.n.jg(d.by(256),16),2,"0")
return B.d.f9(v)},
d3h:function d3h(d){this.a=d},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d,e){this.a=d
this.b=e},
K6:function K6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mS:function mS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
H1:function H1(d,e){this.c=d
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
Sq:function Sq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBC:function aBC(d,e){this.c=d
this.a=e},
H0:function H0(d,e){this.c=d
this.a=e},
aCA:function aCA(){var _=this
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
aCG:function aCG(d,e){this.c=d
this.a=e},
aJ9:function aJ9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJk:function cJk(d){this.a=d},
cJl:function cJl(d){this.a=d},
aDR:function aDR(d){this.a=d},
ay0:function ay0(d,e){this.c=d
this.a=e},
dEj(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dEi(v)
if(u!=null)return new C.oS(w,C.d71(u,!1),D.a02,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dEh(v)
if(t!=null)return new C.oS(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a03,"TikTok",q)
s=C.dEg(w,v)
if(s!=null)return s
r=C.dEf(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.oS(w,w,D.bn4,"Video",q)
return q},
dEg(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(s!=null){w=s.b[1]
w.toString
return new C.oS(d,"https://www.instagram.com/reel/"+w+u,D.He,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).cX(e)
if(v!=null){w=v.b[1]
w.toString
return new C.oS(d,"https://www.instagram.com/p/"+w+u,D.He,t,null)}return null},
dEf(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.oS(d,"https://www.facebook.com/plugins/video.php?href="+A.eC(2,d,B.aN,!1)+"&show_text=false&width=734",D.a04,"Facebook",null)},
dEi(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].cX(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dEh(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).cX(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
H4:function H4(d,e){this.a=d
this.b=e},
oS:function oS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1B:function a1B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCB:function aCB(d,e){var _=this
_.d=$
_.cM$=d
_.aO$=e
_.c=_.a=null},
aDV:function aDV(d,e){this.c=d
this.a=e},
cz5:function cz5(d){this.a=d},
cz6:function cz6(d){this.a=d},
CE:function CE(d,e){this.c=d
this.a=e},
afi:function afi(){},
dhY(d,e,f,g,h,i){return new C.a1C(i,f,h,e,g,d)},
dV5(d){var w=window
w.toString
A.h6(w,"message",new C.d_u(d),!1,x._)},
a1C:function a1C(d,e,f,g,h,i){var _=this
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
d_u:function d_u(d){this.a=d},
dhS(){var w,v,u
try{v=A.ye()
w=v.gpZ(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cz(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d71(d,e){var w=C.dhS(),v=A.a([],x.s)
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
d70(d){var w=A.aq(y.c,!0,!1,!1,!1).cX(d)
return w==null?null:w.b[1]},
dhT(d){var w=A.bo(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bo(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dEc(d,e,f){var w,v,u=C.d70(d)
if(u!=null){if(f){w=C.dhS()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dhT(C.d71(u,e))}return C.dhT(d)},
dEd(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dEe(d){var w
if($.LJ().a==null)return!1
w=$.DS().a
return d>=w&&d<w+4},
dhW(){var w=$.apV
if(w!=null)w.a7(0)
$.apV=null
$.DS().sv(0,0)},
dhV(){var w,v,u,t=$.LJ()
if(t.a==null)return
w=$.apV
if(w!=null)w.a7(0)
v=$.dhU
if(v<=4){t=t.a
t.toString
C.d72(t)
return}w=$.DS()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d72(t)},
d72(d){var w=$.apV
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
default:w=null}$.apV=A.dq(A.d9(0,0,0,0,0,w),C.dVg())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.K6.prototype={
B(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.P.l(0.25),B.o,1),r=A.a1(this.d,B.P,w,w,14)
return A.u(w,A.F(A.a([r,B.eD,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.X:B.cN,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.O,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.en,w,w,w)}}
C.mS.prototype={
aa(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.H1.prototype={
S(){return new C.aaE(A.a([],x.e))},
gez(){return this.c}}
C.aaE.prototype={
Z(){var w=this
w.a3()
$.DS().aj(0,w.gas_())
C.dV5(w.gbe4())
w.Vk()},
bdx(){if(this.c!=null)this.n(new C.cvo())},
be5(){C.dhV()},
p(){$.DS().V(0,this.gas_())
C.dhW()
$.LJ().sv(0,null)
this.a2()},
Vk(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vk=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.H3(t.a.c),$async$Vk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvn(t,s))
$.bcs=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vk,v)},
RC(){var w=0,v=A.i(x.H),u,t=this,s
var $async$RC=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.n(new C.cvl(t))
w=3
return A.b(C.apW(t.a.c),$async$RC)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvm(t,s))
$.bcs=J.a3(t.d)
t.c.F(x.q).f.O(A.bm(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.B,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$RC,v)},
bg_(d){var w=this.c
w.toString
A.a5(w,!1).cw(A.ea(new C.cvp(d),!1,null,x.H))},
bgB(){var w=this.c
w.toString
return C.V2(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.Y(d).ax.a===B.V,t=u?B.dR:B.d5,s=A.aJ(v,v,v,v,B.Ft,v,v,v,new C.cvt(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.F(A.a([s,A.I(new A.Ba(A.F(A.a([A.I(new A.G(B.i7,A.j(r,v,1,B.af,v,v,v,A.l(v,v,u?B.c:B.R,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aQ(!1,B.L,!0,v,A.aW(!1,v,!0,new A.G(B.aI,A.a1(B.eR,B.P,v,v,28),v),B.c_,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgA(),v,v,v,v,v,v,v),B.h,B.C,0,v,v,v,v,v,B.a_)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.ch(!0,A.y(A.a([new A.G(D.OK,r,v),A.I(w.e?B.lb:new A.is($.LJ(),new C.cvu(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0)
return A.ci(v,t,s,v,!1,!1,A.akJ(B.P,B.B_,B.mZ,D.c_I,w.e?v:new C.cvv(w)),v)}}
C.Sq.prototype={
B(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.o,1),q=A.a([new A.ag(0,B.w,B.P.l(0.18),B.ct,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1B(n,!0,!C.dEe(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.u(u,A.y(A.a([A.a1(B.id,B.lg,u,u,22),B.aj,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.vG,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aQ(!1,B.L,!0,u,A.aW(!1,t,!0,A.y(A.a([A.I(A.u(u,A.cC(p,A.hF(A.y(A.a([new C.aBC(o,u),A.I(n,1),A.u(u,A.F(A.a([A.a1(B.ta,B.P.l(0.85),u,u,9),D.byJ,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.aa,u,u,u,u,u,D.an9,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,u,u,new A.t(u,u,r,s,q,D.SU,B.k),u,u,u,B.fa,u,u,u),1),B.aj,A.j(o.b,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.A,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.af,u,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.af,u,u,u,A.l(u,u,B.P.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.C,0,u,u,u,u,u,B.a_)}}
C.aBC.prototype={
B(d){var w=null
return A.u(w,A.F(A.a([A.I(A.j(B.d.gaw(this.c.c.split("-")),w,w,B.af,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a1(B.pj,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.aa,w,w,w,w,w,B.Oz,w,w,w)}}
C.H0.prototype={
S(){return new C.aCA()}}
C.aCA.prototype={
B(d){var w=null,v=A.Y(d).ax.a===B.V,u=v?B.dR:B.d5,t=A.aJ(w,w,w,w,B.Ft,w,w,w,new C.cvi(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ci(w,u,A.ch(!0,A.y(A.a([new A.G(D.OK,A.F(A.a([t,A.I(new A.Ba(A.F(A.a([A.I(new A.G(B.i7,A.j(s.b+" \xb7 "+s.c,w,1,B.af,w,w,w,A.l(w,w,v?B.c:B.R,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aQ(!1,B.L,!0,w,A.aW(!1,w,!0,new A.G(B.aI,A.a1(B.eR,B.P,w,w,28),w),B.c_,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvj(d),w,w,w,w,w,w,w),B.h,B.C,0,w,w,w,w,w,B.a_)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.is($.LJ(),new C.cvk(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0),w,!1,!1,w,w)}}
C.aJa.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.P.l(0.35),B.ep,28),new A.ag(0,B.w,B.q.l(0.45),B.cB,18)],x.V),o=A.U(B.c.l(0.12),B.o,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dhY(new A.dj(v+"_full_"+u,x.W),!1,u,!1,w.gaGH(),v+"_full")
w=v}else w=new C.aCG(t.r,s)}else w=new C.ay0(m,s)
else w=D.c5a
return A.u(s,A.cC(n,A.hF(A.y(A.a([new C.aJb(m,l,s),A.I(w,1),new C.aJ9(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.as),B.h,s,s,new A.t(s,s,o,q,p,D.SU,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aJb.prototype={
B(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dh(r)
r=A.h4(r)
w=new A.di(q,r)
v=w.gGE()===0?12:w.gGE()
r=B.a.bj(B.n.q(r),2,"0")
q=(q<12?B.eM:B.hv)===B.eM?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lR,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.ba,D.axM,B.dB,D.ax0,B.dB,D.axQ],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.aj,A.F(A.a([A.a1(B.Fm,B.P.l(0.9),s,s,12),B.dB,A.I(A.j(u.c,s,s,B.af,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.y(q,B.i,B.e,B.f,0,B.l),B.h,B.aa,s,s,s,s,s,D.anS,s,s,s)}}
C.aCG.prototype={
B(d){var w=null
return A.u(w,A.aU(A.y(A.a([A.a1(B.xp,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aj,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.am,A.ey(D.aBa,D.bOc,this.c,A.ez(w,w,w,w,w,w,w,w,w,B.P,w,w,w,w,w,new A.aI(B.P.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.O,0,B.l),w,w,w),B.h,B.vG,w,w,w,w,w,w,w,w,1/0)}}
C.aJ9.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arT(B.Rl,"YouTube",s===0,r,new C.cJk(u))
s=u.arT(B.kB,"Device",s===1,r,new C.cJl(u))
w=r?"Power off":"Power on"
v=r?D.Rm:D.auY
return A.u(t,A.F(A.a([q,B.a0,s,B.b3,A.aJ(t,t,t,t,A.a1(v,r?B.b4:B.dK,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cW)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.aa,t,t,t,t,t,D.anE,t,t,t)},
arT(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aW
else w=f?B.P:B.a7
v=f&&g?B.P.l(0.15):B.C
u=A.n(10)
t=g?h:s
return A.I(A.aQ(!1,B.L,!0,u,A.aW(!1,A.n(10),!0,new A.G(B.lq,A.y(A.a([A.a1(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.O,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a_),1)}}
C.aDR.prototype={
B(d){return D.ae0}}
C.ay0.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.je,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aj,s,B.S,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.ag(u,0,10):u)],x.p),v,B.aI,v,v,B.Z,!1)},
qB(d,e){var w=null
return new A.G(B.c0,A.y(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ch,A.j(e,w,w,w,w,w,w,D.bFP,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.H4.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.oS.prototype={
gaGH(){var w=this.c
return w===D.a02||w===D.a03||w===D.He||w===D.a04}}
C.a1B.prototype={
S(){return new C.aCB(null,null)}}
C.aCB.prototype={
Z(){this.a3()
var w=A.bD(null,B.rt,null,1,null,this)
w.ms(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQ8()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dK(t,new A.t(t,t,t,t,t,new A.ap(B.cM,B.bY,B.y,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.k),B.bv),q=x.Y,p=u.d
p===$&&A.c()
p=A.ct(B.i4,p,t)
w=B.c.l(0.92)
q=A.aU(new A.d1(new A.b1(p,new A.bn(0.72,1,q),q.j("b1<bl.T>")),!1,A.a1(B.id,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lg
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aDV(s,t),r,q,A.b8(t,A.u(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b8(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b8(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.A,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aM(B.a6,t,B.aS,B.m,s,t)}}
C.aDV.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kB(u,new C.cz5(this),B.bx,!0,w,w,new C.cz6(this),w)
return new C.CE(v,w)}}
C.CE.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aK(A.a([B.re,B.Lt],x.O),B.id)
break
case 1:w=new A.aK(A.a([B.vG,D.ahY],x.O),B.jH)
break
case 2:w=new A.aK(A.a([D.ajs,D.ahx],x.O),B.xx)
break
case 3:w=new A.aK(A.a([B.R,B.cD],x.O),B.xB)
break
case 4:w=new A.aK(A.a([B.aa,B.ai],x.O),B.mV)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a1(w.b,B.P.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.ap(B.al,B.av,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.afi.prototype={
p(){var w=this,v=w.aO$
if(v!=null)v.V(0,w.gdk())
w.aO$=null
w.a2()},
bm(){this.bD()
this.bz()
this.dl()}}
C.a1C.prototype={
S(){return new C.aaF()}}
C.aaF.prototype={
bwH(d,e){var w=C.d70(d)
if(w!=null)return C.d71(w,e)
return d},
a3A(d,e){var w,v=this,u=C.d70(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwH(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dEc(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buB(){var w,v=this
if(v.w)return
v.n(new C.cvw(v))
w=v.e
if(w!=null)v.a3A(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aD()
u.d=w
try{$.DT()
$.ol().rP(w,new C.cvE(u),!0)}catch(v){u.r=!0
u.f=!1}},
aR(d){var w,v=this
v.b2(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cvx(v))
w=v.e
w.toString
v.a3A(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a1(B.RB,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.J,n,n)],v))
return A.hF(A.aU(new A.G(new A.V(12,12,12,12),A.y(w,B.i,B.e,B.O,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Yj(n,B.pV,w)],v)
if(o.f)w.push(A.hF(A.aU(new A.am(28,28,D.aeT,n),n,n,n),B.ci,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aW,B.o,1)
q=A.a1(B.RD,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eI(0,A.aQ(!1,B.L,!0,n,A.aW(!1,n,!0,A.aU(A.u(n,A.F(A.a([q,B.a0,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.O,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.O7,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuA(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a_)))}return new A.aM(B.a6,n,B.aS,B.m,w,n)}}
var z=a.updateTypes(["m(mS)","~()","H1(Q)","mS(W<@,@>)","a_(mS)","W<m,@>(mS)","az<~>()","H0(Q)","is<R>(Q,oS?,o?)","Sq(Q,R)","rb(Q,oS?,o?)","CE(Q,ak,dw?)"])
C.d3h.prototype={
$1(d){return new C.H1(this.a,null)},
$S:z+2}
C.d3g.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.V,l=A.aw(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cx,B.R],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.P.l(0.22),B.ep,32)],x.V),g=A.U(m?B.bl:B.P.l(0.18),B.o,1),f=A.n(28),e=B.P.l(m?0.35:0.14)
j=A.a([e,B.Y.l(m?0.18:0.08)],j)
e=A.u(n,D.awE,B.h,n,n,new A.t(B.P.l(0.18),n,A.U(B.P.l(0.45),B.o,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.R,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.y(A.a([w,B.aj,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.X:B.az,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.F(A.a([e,B.er,w,A.aJ(n,n,n,n,A.a1(B.cI,m?B.a7:B.ci,n,n,n),n,n,n,new C.d3c(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.ap(B.a3,B.a4,B.y,j,n,n),B.k),n,n,n,B.Oj,n,n,n)
e=A.ej(B.bX,A.a([new C.K6("YouTube",B.Fl,m,n),new C.K6("TikTok",B.jH,m,n),new C.K6("Instagram",B.xx,m,n),new C.K6("Facebook",B.xB,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.R,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d5
r=A.a1(B.jG,B.P.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bl:B.b0
u=A.y(A.a([e,B.aq,A.au(n,B.F,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.K),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aI(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Kj),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.M,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.D,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.N,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.j0(D.awI,D.bZO,new C.d3d(d),A.iF(n,n,n,n,n,n,n,n,n,n,n,m?B.aF:B.az,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.V(12,0,12,12+l.f.d),A.dK(A.cC(f,A.y(A.a([j,new A.G(D.aoV,u,n),new A.G(D.ap5,A.F(A.a([e,B.b3,A.bR(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.X:B.a1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d3e(d),n,n),B.a0,A.dL(D.aAT,D.c_C,new C.d3f(d,w),A.bu(B.P,n,n,n,B.c,n,D.O7,n,new A.bF(A.n(14),B.K),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.O,0,B.l),B.as),new A.t(n,n,g,k,h,new A.ap(B.al,B.av,B.y,i,n,n),B.k),B.bv),n)},
$S:63}
C.d3c.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3d.prototype={
$0(){C.dhW()
$.LJ().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d3e.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d3f.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bcD.prototype={
$1(d){return C.dhX(A.O(d,x.N,x.z))},
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
$1(d){return d.aa()},
$S:z+5}
C.bct.prototype={
$1(d){return B.a.bj(B.n.jg(d,16),2,"0").toUpperCase()},
$S:75}
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
$1(d){return new C.H0(this.a,null)},
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
m=B.j.an(n+4,1,o)
t=A.a([A.u(k,A.F(A.a([q,B.a0,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.R,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.cs,B.eO,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cC(s,new A.iP(1.7777777777777777,C.dhY(new A.dj("fleet_master_"+r,x.W),!0,r,!0,j.gaGH(),"fleet_master"),k),B.as),B.S],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zO(0,B.m,k,B.r,k,k,k,k,!1,k,B.Z,!1,A.a([new A.kc(new A.G(B.D9,A.y(u,B.t,B.e,B.f,0,B.l),k),k),new A.p0(D.ani,A.atp(new A.o0(new C.cvr(i,j),J.a3(i.d),!1,!0,!0,A.vW(),k),D.bzq),k)],w))},
$S:1596}
C.cvr.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Sq(v,e,J.a3(w.d),new C.cvq(w,v),this.b,null)},
$S:z+9}
C.cvq.prototype={
$0(){return this.a.bg_(this.b)},
$S:0}
C.cvv.prototype={
$0(){this.a.RC()
return null},
$S:0}
C.cvi.prototype={
$0(){return A.a5(this.a,!1).ec()},
$S:0}
C.cvj.prototype={
$0(){C.V2(this.a,$.bcs)
return null},
$S:0}
C.cvk.prototype={
$3(d,e,f){return A.fG(new C.cvh(this.a,e))},
$S:z+10}
C.cvh.prototype={
$2(d,e){var w,v=null,u=B.j.an(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.co(A.y(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.J,v,v),B.aq,new C.aJa(u,s.a.c,s.e,s.d,new C.cve(s),new C.cvf(s),new C.cvg(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.wL,v,v,B.Z),v,v,v)},
$S:1597}
C.cve.prototype={
$0(){var w=this.a.c
w.toString
C.V2(w,$.bcs)
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
C.cJk.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJl.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cz5.prototype={
$3(d,e,f){return new C.CE(this.a.c,null)},
$S:z+11}
C.cz6.prototype={
$3(d,e,f){if(f==null)return e
return new A.aM(B.a6,null,B.aS,B.m,A.a([new C.CE(this.a.c,null),D.aef],x.p),null)},
$C:"$3",
$R:3,
$S:416}
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
w.a3A(v,w.a.d)
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
$S:487}
C.cvC.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cvA(w))
A.bM(B.B,new C.cvB(w),x.H)}},
$S:44}
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
$S:44}
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
C.d_u.prototype={
$1(d){var w,v,u,t,s=new A.Cc([],[]).FW(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aE(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1598};(function aliases(){var w=C.afi.prototype
w.aQ8=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaE.prototype,"gas_","bdx",1)
w(u,"gbe4","be5",1)
w(u,"gbgA","bgB",6)
w(C.aaF.prototype,"gbuA","buB",1)
v(C,"dVg","dhV",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wf,[C.d3h,C.d3g,C.bcD,C.bcE,C.bcv,C.bcw,C.bcx,C.bcy,C.bcz,C.bcA,C.bcB,C.bcC,C.bcu,C.bct,C.cvp,C.cvu,C.cvs,C.cvk,C.cvf,C.cz5,C.cz6,C.cvE,C.cvC,C.cvD,C.d_u])
v(A.WA,[C.d3c,C.d3d,C.d3e,C.d3f,C.cvo,C.cvn,C.cvl,C.cvm,C.cvt,C.cvq,C.cvv,C.cvi,C.cvj,C.cve,C.cvd,C.cvg,C.cvc,C.cJk,C.cJl,C.cvw,C.cvA,C.cvB,C.cvy,C.cvz,C.cvx])
v(A.aA,[C.K6,C.Sq,C.aBC,C.aJa,C.aJb,C.aCG,C.aJ9,C.aDR,C.ay0,C.aDV,C.CE])
v(A.ak,[C.mS,C.oS])
v(A.ac,[C.H1,C.H0,C.a1B,C.a1C])
v(A.ae,[C.aaE,C.aCA,C.afi,C.aaF])
v(A.WB,[C.cvr,C.cvh])
u(C.H4,A.ayU)
u(C.aCB,C.afi)
w(C.afi,A.dU)})()
A.dlc(b.typeUniverse,JSON.parse('{"H1":{"ac":[],"o":[]},"Sq":{"aA":[],"o":[]},"H0":{"ac":[],"o":[]},"K6":{"aA":[],"o":[]},"aaE":{"ae":["H1"]},"aBC":{"aA":[],"o":[]},"aCA":{"ae":["H0"]},"aJa":{"aA":[],"o":[]},"aJb":{"aA":[],"o":[]},"aCG":{"aA":[],"o":[]},"aJ9":{"aA":[],"o":[]},"aDR":{"aA":[],"o":[]},"ay0":{"aA":[],"o":[]},"a1B":{"ac":[],"o":[]},"CE":{"aA":[],"o":[]},"aCB":{"ae":["a1B"]},"aDV":{"aA":[],"o":[]},"a1C":{"ac":[],"o":[]},"aaF":{"ae":["a1C"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bg
return{V:w("ab<ag>"),O:w("ab<z>"),e:w("ab<mS>"),s:w("ab<m>"),p:w("ab<o>"),t:w("ab<R>"),X:w("ad<mS>"),a:w("ad<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mP"),_:w("Az"),k:w("mS"),N:w("m"),Y:w("bn<a8>"),W:w("dj<m>"),J:w("is<R>"),j:w("is<oS?>"),E:w("yn<cD>"),q:w("T6"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rm=new A.K(983224,"MaterialIcons",!1)
D.azn=new A.a6(D.Rm,48,B.aW,null,null,null)
D.bFt=new A.M(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bN7=new A.x("Powered off",null,D.bFt,null,null,null,null,null,null,null,null,null)
D.aMZ=w([D.azn,B.z,D.bN7],x.p)
D.akF=new A.el(B.Z,B.e,B.O,B.i,null,B.l,null,0,D.aMZ,null)
D.ae0=new A.de(B.I,null,null,D.akF,null)
D.bz6=new A.am(18,18,B.Ld,null)
D.aef=new A.de(B.I,null,null,D.bz6,null)
D.aeT=new A.fO(2,null,null,null,null,B.X,null,null,null,null)
D.ahx=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.ahY=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajs=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.an9=new A.V(0,3,0,3)
D.ani=new A.V(10,0,10,88)
D.anE=new A.V(12,6,12,10)
D.anS=new A.V(14,8,14,6)
D.O7=new A.V(18,12,18,12)
D.aoV=new A.V(20,18,20,8)
D.ap5=new A.V(20,8,20,20)
D.OK=new A.V(8,6,15,8)
D.auY=new A.K(983222,"MaterialIcons",!1)
D.awE=new A.a6(B.id,26,B.P,null,null,null)
D.awI=new A.a6(B.Qq,18,null,null,null,null)
D.ax0=new A.a6(B.pj,14,B.X,null,null,null)
D.avf=new A.K(983420,"MaterialIcons",!1)
D.axM=new A.a6(D.avf,14,B.X,null,null,null)
D.ats=new A.K(62895,"MaterialIcons",!1)
D.axQ=new A.a6(D.ats,14,B.X,null,null,null)
D.aAT=new A.a6(B.iU,20,null,null,null,null)
D.aBa=new A.a6(B.eR,16,null,null,null,null)
D.aPn=w([B.ai,B.R],x.O)
D.SU=new A.ap(B.al,B.av,B.y,D.aPn,null,null)
D.bt0=new A.aK("NGMY OS","14.2.1")
D.brS=new A.aK("VirtualDroid","13.8.4")
D.brR=new A.aK("NGMY OS","15.0.0")
D.bsA=new A.aK("VirtualDroid","14.1.2")
D.brP=new A.aK("NGMY Tab OS","12.9.7")
D.brN=new A.aK("NGMY OS","13.5.3")
D.brC=new A.aK("VirtualDroid","15.2.0")
D.bsd=new A.aK("NGMY OS","14.8.1")
D.bsG=new A.aK("NGMY Tab OS","13.2.4")
D.bta=new A.aK("VirtualDroid","12.6.9")
D.bry=new A.aK("NGMY OS","16.0.1")
D.brp=new A.aK("VirtualDroid","14.9.0")
D.bsT=new A.aK("NGMY Tab OS","14.0.3")
D.bs0=new A.aK("NGMY OS","13.1.8")
D.brx=new A.aK("VirtualDroid","13.4.5")
D.brM=new A.aK("NGMY OS","15.3.2")
D.bsH=new A.aK("NGMY Tab OS","12.4.1")
D.bsV=new A.aK("VirtualDroid","16.1.0")
D.bsc=new A.aK("NGMY OS","14.4.6")
D.bt1=new A.aK("VirtualDroid","15.0.8")
D.aOS=w([D.bt0,D.brS,D.brR,D.bsA,D.brP,D.brN,D.brC,D.bsd,D.bsG,D.bta,D.bry,D.brp,D.bsT,D.bs0,D.brx,D.brM,D.bsH,D.bsV,D.bsc,D.bt1],A.bg("ab<+(m,m)>"))
D.bvc=new A.ef(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.buL=new A.ef(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.buG=new A.ef(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buP=new A.ef(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.buC=new A.ef(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.buR=new A.ef(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bve=new A.ef(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buD=new A.ef(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.buK=new A.ef(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.buT=new A.ef(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.buB=new A.ef(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bv6=new A.ef(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bv3=new A.ef(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.buJ=new A.ef(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bv0=new A.ef(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bv_=new A.ef(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buA=new A.ef(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.buO=new A.ef(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.buY=new A.ef(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bv2=new A.ef(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U5=w([D.bvc,D.buL,D.buG,D.buP,D.buC,D.buR,D.bve,D.buD,D.buK,D.buT,D.buB,D.bv6,D.bv3,D.buJ,D.bv0,D.bv_,D.buA,D.buO,D.buY,D.bv2],A.bg("ab<+(m,m,a8,a8,m)>"))
D.aV_=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a02=new C.H4(0,"youtube")
D.a03=new C.H4(1,"tiktok")
D.He=new C.H4(2,"instagram")
D.a04=new C.H4(3,"facebook")
D.bn4=new C.H4(4,"other")
D.byJ=new A.am(3,null,null,null)
D.bzq=new A.ia(4,10,8,0.52,null)
D.bOp=new A.x("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCJ=new A.aT(D.bOp,null,null,null,null,null,null,null,null,null,null,null,null,B.B,!1,null,null,null,B.m,null)
D.bFP=new A.M(!0,B.c,null,null,null,null,11,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOc=new A.x("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bZO=new A.x("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c_C=new A.x("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c_I=new A.x("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c5a=new C.aDR(null)})();(function staticFields(){$.dhU=20
$.apV=null
$.bcs=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dZy","DS",()=>A.R7(0))
w($,"dZz","LJ",()=>A.R7(null))})()};
(a=>{a["Iv3icLG0q7z6LNRDpHqp9fq9u48="]=a.current})($__dart_deferred_initializers__);