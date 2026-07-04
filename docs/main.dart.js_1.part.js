((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dYq(d,e){A.a5(d,!1).cr(A.eo(new C.d4N(e),!0,null,x.H))},
Vp(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Vp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.M6()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aY(n,B.af,B.a5),t)
w=3
return A.b(A.da(B.B,new C.d4M(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vp)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dG6(r)
if(q==null){d.F(x.q).f.O(D.bEG)
w=1
break}w=4
return A.b(A.bK(B.h0,null,x.H),$async$Vp)
case 4:if(d.e==null){w=1
break}n=B.o.am(e,1,999)
$.djy=n
p=C.dG0(n)
n=$.E6()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d8B(q)
d.F(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vp,v)},
djB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.n6(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hj(d){return C.dG9(d)},
dG9(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hj=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$Hj)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.x.aC(0,a0,null)
w=x.a.b(r)&&J.cz(r)?10:11
break
case 10:k=J.eJ(r,x.f)
k=A.de(k,new C.beC(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.C(new A.af(k,new C.beD(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.djD(q)
w=12
return A.b(C.Hi(a3,p),$async$Hj)
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
n=B.x.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.djB(A.S(n,x.N,x.z))
l=C.djD(A.a([m],x.e))
w=21
return A.b(C.Hi(a3,l),$async$Hj)
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
case 18:case 14:q=C.dG7()
w=22
return A.b(C.Hi(a3,q),$async$Hj)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hj,v)},
djD(d){var w=A.W(d).j("B<1,n>"),v=new A.B(d,new C.beu(),w).ek(0),u=new A.B(d,new C.bev(),w).ek(0),t=new A.B(d,new C.bew(),w).ek(0),s=new A.B(d,new C.bex(),w).ek(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d8C(null,q,u,t,v,s));++q}return r},
aqG(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aqG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hj(d),$async$aqG)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d0(t,new C.bey(),s).ek(0)
p=r.d0(t,new C.bez(),s).ek(0)
o=r.d0(t,new C.beA(),s).ek(0)
n=r.d0(t,new C.beB(),s).ek(0)
m=C.d8C(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hi(d,t),$async$aqG)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqG,v)},
Hi(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Hi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.au(),$async$Hi)
case 2:u=g
t=B.a.i(d)
s=J.b2(e,new C.bet(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.x.al(s,null)),$async$Hi)
case 3:return A.h(null,v)}})
return A.i($async$Hi,v)},
dG7(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dQ(20,x.k)
for(w=0;w<20;++w)q[w]=C.d8C(w,w,t,s,u,r)
return q},
d8C(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.j9(),h=d==null,g=D.UE[B.o.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.UE[B.o.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.B(p,new C.bes(),A.W(p).j("B<1,n>")).eP(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.eP(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.o.j4(i.bx(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.o.ag(e,20)
k=D.aVZ[w]
j=D.aPJ[w]
return new C.n6("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.o.q(e+1),2,"0"),u,k,C.dG8(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a0().Y())},
dG8(d,e){var w,v=J.dQ(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.o.j4(d.bx(256),16),2,"0")
return B.d.eP(v)},
d4N:function d4N(d){this.a=d},
d4M:function d4M(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
d4J:function d4J(d){this.a=d},
d4K:function d4K(d){this.a=d},
d4L:function d4L(d,e){this.a=d
this.b=e},
Kq:function Kq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
n6:function n6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
beC:function beC(){},
beD:function beD(){},
beu:function beu(){},
bev:function bev(){},
bew:function bew(){},
bex:function bex(){},
bey:function bey(){},
bez:function bez(){},
beA:function beA(){},
beB:function beB(){},
bet:function bet(){},
bes:function bes(){},
Hh:function Hh(d,e){this.c=d
this.a=e},
ab9:function ab9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvV:function cvV(){},
cvU:function cvU(d,e){this.a=d
this.b=e},
cvS:function cvS(d){this.a=d},
cvT:function cvT(d,e){this.a=d
this.b=e},
cvW:function cvW(d){this.a=d},
cw_:function cw_(d){this.a=d},
cw0:function cw0(d,e){this.a=d
this.b=e},
cvZ:function cvZ(d,e,f){this.a=d
this.b=e
this.c=f},
cvY:function cvY(d,e){this.a=d
this.b=e},
cvX:function cvX(d,e){this.a=d
this.b=e},
cw1:function cw1(d){this.a=d},
SO:function SO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCu:function aCu(d,e){this.c=d
this.a=e},
Hg:function Hg(d,e){this.c=d
this.a=e},
aDs:function aDs(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvP:function cvP(d){this.a=d},
cvQ:function cvQ(d){this.a=d},
cvR:function cvR(d){this.a=d},
cvO:function cvO(d,e){this.a=d
this.b=e},
cvL:function cvL(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvK:function cvK(d,e){this.a=d
this.b=e},
cvN:function cvN(d){this.a=d},
cvJ:function cvJ(d){this.a=d},
aK7:function aK7(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aK8:function aK8(d,e,f){this.c=d
this.d=e
this.a=f},
aDy:function aDy(d,e){this.c=d
this.a=e},
aK6:function aK6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cKq:function cKq(d){this.a=d},
cKr:function cKr(d){this.a=d},
aEJ:function aEJ(d){this.a=d},
ayP:function ayP(d,e){this.c=d
this.a=e},
dG6(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dG5(v)
if(u!=null)return new C.p9(w,C.d8A(u,!1),D.a0B,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dG4(v)
if(t!=null)return new C.p9(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a0C,"TikTok",q)
s=C.dG3(w,v)
if(s!=null)return s
r=C.dG2(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p9(w,w,D.boK,"Video",q)
return q},
dG3(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p9(d,"https://www.instagram.com/reel/"+w+u,D.Hz,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p9(d,"https://www.instagram.com/p/"+w+u,D.Hz,t,null)}return null},
dG2(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p9(d,"https://www.facebook.com/plugins/video.php?href="+A.eH(2,d,B.aM,!1)+"&show_text=false&width=734",D.a0D,"Facebook",null)},
dG5(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dG4(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
Hk:function Hk(d,e){this.a=d
this.b=e},
p9:function p9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a25:function a25(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDt:function aDt(d,e){var _=this
_.d=$
_.cS$=d
_.aQ$=e
_.c=_.a=null},
aEO:function aEO(d,e){this.c=d
this.a=e},
czU:function czU(d){this.a=d},
czV:function czV(d){this.a=d},
CZ:function CZ(d,e){this.c=d
this.a=e},
afO:function afO(){},
djC(d,e,f,g,h,i){return new C.a26(i,f,h,e,g,d)},
dX5(d){var w=window
w.toString
A.fQ(w,"message",new C.d0S(d),!1,x._)},
a26:function a26(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aba:function aba(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cw2:function cw2(d){this.a=d},
cwa:function cwa(d){this.a=d},
cw8:function cw8(d){this.a=d},
cw6:function cw6(d){this.a=d},
cw7:function cw7(d){this.a=d},
cw4:function cw4(d){this.a=d},
cw9:function cw9(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw3:function cw3(d){this.a=d},
d0S:function d0S(d){this.a=d},
djw(){var w,v,u
try{v=A.yF()
w=v.gq0(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d8A(d,e){var w=C.djw(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eH(2,w,B.aM,!1))
v.push("widget_referrer="+A.eH(2,w,B.aM,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d8z(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
djx(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dG_(d,e,f){var w,v,u=C.d8z(d)
if(u!=null){if(f){w=C.djw()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.djx(C.d8A(u,e))}return C.djx(d)},
dG0(d){if(d<=4)return 0
return B.o.aZ(d-1,4)*4},
dG1(d){var w
if($.M6().a==null)return!1
w=$.E6().a
return d>=w&&d<w+4},
djA(){var w=$.aqF
if(w!=null)w.a7(0)
$.aqF=null
$.E6().sv(0,0)},
djz(){var w,v,u,t=$.M6()
if(t.a==null)return
w=$.aqF
if(w!=null)w.a7(0)
v=$.djy
if(v<=4){t=t.a
t.toString
C.d8B(t)
return}w=$.E6()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d8B(t)},
d8B(d){var w=$.aqF
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
default:w=null}$.aqF=A.dq(A.d7(0,0,0,0,0,w),C.dXg())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kq.prototype={
B(d){var w=null,v=this.e,u=v?B.am:B.c,t=A.m(20),s=A.T(B.T.l(0.25),B.m,1),r=A.Y(this.d,B.T,w,w,14)
return A.r(w,A.G(A.a([r,B.eH,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.f,w,w,new A.q(u,w,s,t,w,w,B.j),w,w,w,B.eC,w,w,w)}}
C.n6.prototype={
a8(){var w=this
return A.t(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Hh.prototype={
S(){return new C.ab9(A.a([],x.e))},
gdR(){return this.c}}
C.ab9.prototype={
Z(){var w=this
w.a3()
$.E6().aj(0,w.gas9())
C.dX5(w.gbeu())
w.Vg()},
bdU(){if(this.c!=null)this.p(new C.cvV())},
bev(){C.djz()},
n(){$.E6().V(0,this.gas9())
C.djA()
$.M6().sv(0,null)
this.a2()},
Vg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hj(t.a.c),$async$Vg)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cvU(t,s))
$.ber=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$Vg,v)},
Rr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cvS(t))
w=3
return A.b(C.aqG(t.a.c),$async$Rr)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cvT(t,s))
$.ber=J.a3(t.d)
t.c.F(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
bgm(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.eo(new C.cvW(d),!1,null,x.H))},
bgV(){var w=this.c
w.toString
return C.Vp(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.E(d).ax.a===B.r,t=u?B.eb:B.bm,s=A.aH(v,v,v,v,B.FL,v,v,v,new C.cw_(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.By(A.G(A.a([A.H(new A.I(B.ic,A.d(r,v,1,B.ai,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.K,!0,v,A.aU(!1,v,!0,new A.I(B.aN,A.Y(B.eU,B.T,v,v,28),v),B.c7,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgU(),v,v,v,v,v,v,v),B.f,B.B,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.h,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.h,0,v,v)
s=A.c2(!0,A.x(A.a([new A.I(D.PE,r,v),A.H(w.e?B.lo:new A.ix($.M6(),new C.cw0(w,u),v,v,x.j),1)],q),B.i,B.e,B.h,0,B.l),!1,B.Z,!0,!0)
return A.c6(v,t,s,v,!1,!1,A.alm(B.T,B.Bk,B.lP,D.c0U,w.e?v:new C.cw1(w)),v)}}
C.SO.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.m,1),q=A.a([new A.aa(0,B.w,B.T.l(0.18),B.cx,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a25(n,!0,!C.dG1(w),"Fold "+(B.o.aZ(w,4)+1)+"/"+B.o.aZ(v.e+4-1,4),u)
n=w}else n=A.r(u,A.x(A.a([A.Y(B.im,B.lv,u,u,22),B.ap,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ax,B.h,0,B.l),B.f,B.vR,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.K,!0,u,A.aU(!1,t,!0,A.x(A.a([A.H(A.r(u,A.cl(p,A.fS(A.x(A.a([new C.aCu(o,u),A.H(n,1),A.r(u,A.G(A.a([A.Y(B.th,B.T.l(0.85),u,u,9),D.bAz,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ax,B.h,0,u,u),B.f,B.a9,u,u,u,u,u,D.anR,u,u,u)],w),B.i,B.e,B.h,0,B.l),B.q,!0),B.ar),B.f,u,u,new A.q(u,u,r,s,q,D.Tu,B.j),u,u,u,B.eS,u,u,u),1),B.ap,A.d(o.b,u,1,B.ai,u,u,u,A.l(u,u,A.E(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.y,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ai,u,u,u,A.l(u,u,A.E(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ai,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.h,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.f,B.B,0,u,u,u,u,u,B.X)}}
C.aCu.prototype={
B(d){var w=null
return A.r(w,A.G(A.a([A.H(A.d(B.d.gav(this.c.c.split("-")),w,w,B.ai,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.pt,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.h,0,w,w),B.f,B.a9,w,w,w,w,w,B.Pv,w,w,w)}}
C.Hg.prototype={
S(){return new C.aDs()}}
C.aDs.prototype={
B(d){var w=null,v=A.E(d).ax.a===B.r,u=v?B.eb:B.bm,t=A.aH(w,w,w,w,B.FL,w,w,w,new C.cvP(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c6(w,u,A.c2(!0,A.x(A.a([new A.I(D.PE,A.G(A.a([t,A.H(new A.By(A.G(A.a([A.H(new A.I(B.ic,A.d(s.b+" \xb7 "+s.c,w,1,B.ai,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.K,!0,w,A.aU(!1,w,!0,new A.I(B.aN,A.Y(B.eU,B.T,w,w,28),w),B.c7,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvQ(d),w,w,w,w,w,w,w),B.f,B.B,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.h,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.h,0,w,w),w),A.H(new A.ix($.M6(),new C.cvR(this),w,w,x.j),1)],r),B.i,B.e,B.h,0,B.l),!1,B.Z,!0,!0),w,!1,!1,w,w)}}
C.aK7.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.w,B.T.l(0.35),B.dY,28),new A.aa(0,B.w,B.q.l(0.45),B.co,18)],x.V),o=A.T(B.c.l(0.12),B.m,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.djC(new A.dg(v+"_full_"+u,x.W),!1,u,!1,w.gaGV(),v+"_full")
w=v}else w=new C.aDy(t.r,s)}else w=new C.ayP(m,s)
else w=D.c6q
return A.r(s,A.cl(n,A.fS(A.x(A.a([new C.aK8(m,l,s),A.H(w,1),new C.aK6(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.h,0,B.l),B.q,!0),B.ar),B.f,s,s,new A.q(s,s,o,q,p,D.Tu,B.j),s,r*2.05,s,B.bd,s,s,r)}}
C.aK8.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.dl(r)
r=A.hj(r)
w=new A.df(q,r)
v=w.gGI()===0?12:w.gGI()
r=B.a.bh(B.o.q(r),2,"0")
q=(q<12?B.eQ:B.hH)===B.eQ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.l9,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bj,D.ayr,B.dz,D.axH,B.dz,D.ayv],t),B.i,s,B.e,B.h,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ap,A.G(A.a([A.Y(B.FB,B.T.l(0.9),s,s,12),B.dz,A.H(A.d(u.c,s,s,B.ai,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.h,0,s,s)],t))
return A.r(s,A.x(q,B.i,B.e,B.h,0,B.l),B.f,B.a9,s,s,s,s,s,D.aoB,s,s,s)}}
C.aDy.prototype={
B(d){var w=null
return A.r(w,A.aL(A.x(A.a([A.Y(B.xI,B.c.l(0.35),w,w,40),B.G,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.ep(D.aBQ,D.bPO,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aC(B.T.l(0.5),1,B.m,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.f,B.vR,w,w,w,w,w,w,w,w,1/0)}}
C.aK6.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as1(B.S2,"YouTube",s===0,r,new C.cKq(u))
s=u.as1(B.jM,"Device",s===1,r,new C.cKr(u))
w=r?"Power off":"Power on"
v=r?D.S3:D.avK
return A.r(t,A.G(A.a([q,B.a1,s,B.b3,A.aH(t,t,t,t,A.Y(v,r?B.b6:B.ep,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cA)],x.p),B.i,t,B.e,B.h,0,t,t),B.f,B.a9,t,t,t,t,t,D.aon,t,t,t)},
as1(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aZ
else w=f?B.T:B.a8
v=f&&g?B.T.l(0.15):B.B
u=A.m(10)
t=g?h:s
return A.H(A.aI(!1,B.K,!0,u,A.aU(!1,A.m(10),!0,new A.I(B.lG,A.x(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.f,v,0,s,s,s,s,s,B.X),1)}}
C.aEJ.prototype={
B(d){return D.aex}}
C.ayP.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k4,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qD("Serial",u.c),q=w.qD("Model",u.d),p=w.qD("Device ID",u.e),o=w.qD("IMEI",u.r),n=w.qD("MAC",u.f),m=w.qD("OS",u.w+" "+u.x),l=w.qD("Location",u.y+", "+u.z),k=w.qD("Coordinates",B.k.a1(u.Q,4)+", "+B.k.a1(u.as,4)),j=w.qD("Timezone",u.at)
u=u.ax
return A.ej(A.a([t,B.ap,s,B.V,r,q,p,o,n,m,l,k,j,w.qD("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aN,v,v,B.a2,!1)},
qD(d,e){var w=null
return new A.I(B.c2,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bX,A.d(e,w,w,w,w,w,w,D.bHI,w,w,w)],x.p),B.v,B.e,B.h,0,B.l),w)}}
C.Hk.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p9.prototype={
gaGV(){var w=this.c
return w===D.a0B||w===D.a0C||w===D.Hz||w===D.a0D}}
C.a25.prototype={
S(){return new C.aDt(null,null)}}
C.aDt.prototype={
Z(){this.a3()
var w=A.bD(null,B.rD,null,1,null,this)
w.lN(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aQo()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dz(t,new A.q(t,t,t,t,t,new A.am(B.cB,B.c0,B.z,A.a([B.B,B.q.l(0.55)],x.O),t,t),B.j),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.hj,p,t)
w=B.c.l(0.92)
q=A.aL(new A.cS(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bh.T>")),!1,A.Y(B.im,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lv
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEO(s,t),r,q,A.aW(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.q(p,t,t,w,t,t,B.j),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.aW(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.aW(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.a3,t,B.aT,B.n,s,t)}}
C.aEO.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.la(u,new C.czU(this),B.bp,!0,w,w,new C.czV(this),w)
return new C.CZ(v,w)}}
C.CZ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aK(A.a([B.rm,B.LY],x.O),B.im)
break
case 1:w=new A.aK(A.a([B.vR,D.aiI],x.O),B.jN)
break
case 2:w=new A.aK(A.a([D.aki,D.aid],x.O),B.xQ)
break
case 3:w=new A.aK(A.a([B.N,B.cC],x.O),B.xU)
break
case 4:w=new A.aK(A.a([B.a9,B.am],x.O),B.ng)
break
default:w=u}v=w.a
return A.r(u,A.aL(A.Y(w.b,B.T.l(0.55),u,u,28),u,u,u),B.f,u,u,new A.q(u,u,u,u,u,new A.am(B.al,B.as,B.z,v,u,u),B.j),u,u,u,u,u,u,u)}}
C.afO.prototype={
n(){var w=this,v=w.aQ$
if(v!=null)v.V(0,w.gdm())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dn()}}
C.a26.prototype={
S(){return new C.aba()}}
C.aba.prototype={
bwT(d,e){var w=C.d8z(d)
if(w!=null)return C.d8A(w,e)
return d},
a3G(d,e){var w,v=this,u=C.d8z(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwT(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dG_(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buO(){var w,v=this
if(v.w)return
v.p(new C.cw2(v))
w=v.e
if(w!=null)v.a3G(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.E7()
$.oB().rQ(w,new C.cwa(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cw3(v))
w=v.e
w.toString
v.a3G(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Sf,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.D,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fS(A.aL(new A.I(new A.V(12,12,12,12),A.x(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YJ(n,B.q4,w)],v)
if(o.f)w.push(A.fS(A.aL(new A.ai(28,28,D.afo,n),n,n,n),B.cg,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.aZ,B.m,1)
q=A.Y(B.FF,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eF(0,A.aI(!1,B.K,!0,n,A.aU(!1,n,!0,A.aL(A.r(n,A.G(A.a([q,B.a1,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.f,n,n,new A.q(t,n,r,s,n,n,B.j),n,n,n,D.P1,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuN(),n,n,n,n,n,n,n),B.f,u,0,n,n,n,n,n,B.X)))}return new A.aF(B.a3,n,B.aT,B.n,w,n)}}
var z=a.updateTypes(["n(n6)","~()","Hh(R)","n6(X<@,@>)","a0(n6)","X<n,@>(n6)","ax<~>()","Hg(R)","ix<Q>(R,p9?,o?)","SO(R,Q)","rp(R,p9?,o?)","CZ(R,aj,dx?)"])
C.d4N.prototype={
$1(d){return new C.Hh(this.a,null)},
$S:z+2}
C.d4M.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.E(d).ax.a===B.r,l=A.az(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d6,B.N],j):A.a([B.c,B.ab],j),h=A.a([new A.aa(0,B.w,B.T.l(0.22),B.dY,32)],x.V),g=A.T(m?B.bw:B.T.l(0.18),B.m,1),f=A.m(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a4.l(m?0.18:0.08)],j)
e=A.r(n,D.axo,B.f,n,n,new A.q(B.T.l(0.18),n,A.T(B.T.l(0.45),B.m,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.x(A.a([w,B.ap,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a6,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.h,0,B.l),1)
j=A.r(n,A.G(A.a([e,B.e6,w,A.aH(n,n,n,n,A.Y(B.cq,m?B.a8:B.cg,n,n,n),n,n,n,new C.d4I(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.h,0,n,n),B.f,n,n,new A.q(n,n,n,n,n,new A.am(B.a_,B.a0,B.z,j,n,n),B.j),n,n,n,B.Dv,n,n,n)
e=A.e5(B.bW,A.a([new C.Kq("YouTube",B.FA,m,n),new C.Kq("TikTok",B.jN,m,n),new C.Kq("Instagram",B.xQ,m,n),new C.Kq("Facebook",B.xU,m,n)],v),B.bQ,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bE:B.fW,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.am:B.bm
r=A.Y(B.il,B.T.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bw:B.au
u=A.x(A.a([e,B.at,A.aD(n,B.F,!0,n,!0,B.n,n,A.aE(),w,n,n,n,n,n,2,A.bm(n,new A.b6(4,q,B.I),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aC(o,1,B.m,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.m(16),B.KM),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.t,!0,n,!0,n,!1,n,B.Q,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.J,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.S,n,n,n,n)],v),B.aa,B.e,B.h,0,B.l)
e=A.j5(D.axr,D.c01,new C.d4J(d),A.ie(n,n,n,n,n,n,n,n,n,n,n,m?B.aQ:B.a6,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dz(A.cl(f,A.x(A.a([j,new A.I(B.Pe,u,n),new A.I(D.apV,A.G(A.a([e,B.b3,A.bX(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d4K(d),n,n),B.a1,A.dC(D.aBz,D.c0P,new C.d4L(d,w),A.bu(B.T,n,n,n,B.c,n,D.P1,n,new A.bB(A.m(14),B.I),n,n,n))],v),B.i,n,B.e,B.h,0,n,n),n)],v),B.aa,B.e,B.P,0,B.l),B.ar),new A.q(n,n,g,k,h,new A.am(B.al,B.as,B.z,i,n,n),B.j),B.br),n)},
$S:77}
C.d4I.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4J.prototype={
$0(){C.djA()
$.M6().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d4K.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4L.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.beC.prototype={
$1(d){return C.djB(A.S(d,x.N,x.z))},
$S:z+3}
C.beD.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.beu.prototype={
$1(d){return d.c},
$S:z+0}
C.bev.prototype={
$1(d){return d.r},
$S:z+0}
C.bew.prototype={
$1(d){return d.f},
$S:z+0}
C.bex.prototype={
$1(d){return d.at},
$S:z+0}
C.bey.prototype={
$1(d){return d.c},
$S:z+0}
C.bez.prototype={
$1(d){return d.r},
$S:z+0}
C.beA.prototype={
$1(d){return d.f},
$S:z+0}
C.beB.prototype={
$1(d){return d.at},
$S:z+0}
C.bet.prototype={
$1(d){return d.a8()},
$S:z+5}
C.bes.prototype={
$1(d){return B.a.bh(B.o.j4(d,16),2,"0").toUpperCase()},
$S:78}
C.cvV.prototype={
$0(){},
$S:0}
C.cvU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvS.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvT.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvW.prototype={
$1(d){return new C.Hg(this.a,null)},
$S:z+7}
C.cw_.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cw0.prototype={
$3(d,e,f){return new A.ix($.E6(),new C.cvZ(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvZ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.B0(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.T.l(0.12)
s=A.m(12)
r=A.T(B.T.l(0.35),B.m,1)
q=A.Y(B.im,B.T,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.E6().a
m=B.k.am(n+4,1,o)
t=A.a([A.r(k,A.G(A.a([q,B.a1,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.h,0,k,k),B.f,k,k,new A.q(t,k,r,s,k,k,B.j),k,k,B.ct,B.eD,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.cl(s,new A.iS(1.7777777777777777,C.djC(new A.dg("fleet_master_"+r,x.W),!0,r,!0,j.gaGV(),"fleet_master"),k),B.ar),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.E(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u8(0,B.n,k,B.t,k,k,k,k,!1,k,B.a2,!1,A.a([new A.jP(new A.I(B.Dm,A.x(u,B.v,B.e,B.h,0,B.l),k),k),new A.ng(D.ao_,A.au8(new A.mw(new C.cvY(i,j),J.a3(i.d),!1,!0,!0,A.r1(),k),D.bBj),k)],w))},
$S:1622}
C.cvY.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.SO(v,e,J.a3(w.d),new C.cvX(w,v),this.b,null)},
$S:z+9}
C.cvX.prototype={
$0(){return this.a.bgm(this.b)},
$S:0}
C.cw1.prototype={
$0(){this.a.Rr()
return null},
$S:0}
C.cvP.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cvQ.prototype={
$0(){C.Vp(this.a,$.ber)
return null},
$S:0}
C.cvR.prototype={
$3(d,e,f){return A.fz(new C.cvO(this.a,e))},
$S:z+10}
C.cvO.prototype={
$2(d,e){var w,v=null,u=B.k.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aL(A.cp(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.E(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.at,new C.aK7(u,s.a.c,s.e,s.d,new C.cvL(s),new C.cvM(s),new C.cvN(s),t,v)],x.p),B.i,B.e,B.h,0,B.l),v,B.t,v,B.oU,v,v,B.a2),v,v,v)},
$S:1623}
C.cvL.prototype={
$0(){var w=this.a.c
w.toString
C.Vp(w,$.ber)
return null},
$S:0}
C.cvM.prototype={
$1(d){var w=this.a
return w.p(new C.cvK(w,d))},
$S:37}
C.cvK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvN.prototype={
$0(){var w=this.a
return w.p(new C.cvJ(w))},
$S:0}
C.cvJ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cKq.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cKr.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czU.prototype={
$3(d,e,f){return new C.CZ(this.a.c,null)},
$S:z+11}
C.czV.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a3,null,B.aT,B.n,A.a([new C.CZ(this.a.c,null),D.aeL],x.p),null)},
$C:"$3",
$R:3,
$S:423}
C.cw2.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cwa.prototype={
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
A.fQ(v,"load",new C.cw8(w),!1,u)
v=w.e
v.toString
A.fQ(v,"error",new C.cw9(w),!1,u)
w=w.e
w.toString
return w},
$S:567}
C.cw8.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cw6(w))
A.bK(B.E,new C.cw7(w),x.H)}},
$S:43}
C.cw6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cw7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cw4(w))},
$S:12}
C.cw4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cw9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cw5(w))},
$S:43}
C.cw5.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cw3.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d0S.prototype={
$1(d){var w,v,u,t,s=new A.Cy([],[]).G_(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.x.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1624};(function aliases(){var w=C.afO.prototype
w.aQo=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ab9.prototype,"gas9","bdU",1)
w(u,"gbeu","bev",1)
w(u,"gbgU","bgV",6)
w(C.aba.prototype,"gbuN","buO",1)
v(C,"dXg","djz",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wI,[C.d4N,C.d4M,C.beC,C.beD,C.beu,C.bev,C.bew,C.bex,C.bey,C.bez,C.beA,C.beB,C.bet,C.bes,C.cvW,C.cw0,C.cvZ,C.cvR,C.cvM,C.czU,C.czV,C.cwa,C.cw8,C.cw9,C.d0S])
v(A.WY,[C.d4I,C.d4J,C.d4K,C.d4L,C.cvV,C.cvU,C.cvS,C.cvT,C.cw_,C.cvX,C.cw1,C.cvP,C.cvQ,C.cvL,C.cvK,C.cvN,C.cvJ,C.cKq,C.cKr,C.cw2,C.cw6,C.cw7,C.cw4,C.cw5,C.cw3])
v(A.at,[C.Kq,C.SO,C.aCu,C.aK7,C.aK8,C.aDy,C.aK6,C.aEJ,C.ayP,C.aEO,C.CZ])
v(A.aj,[C.n6,C.p9])
v(A.ab,[C.Hh,C.Hg,C.a25,C.a26])
v(A.ad,[C.ab9,C.aDs,C.afO,C.aba])
v(A.WZ,[C.cvY,C.cvO])
u(C.Hk,A.azJ)
u(C.aDt,C.afO)
w(C.afO,A.e1)})()
A.dmR(b.typeUniverse,JSON.parse('{"Hh":{"ab":[],"o":[]},"SO":{"at":[],"o":[]},"Hg":{"ab":[],"o":[]},"Kq":{"at":[],"o":[]},"ab9":{"ad":["Hh"]},"aCu":{"at":[],"o":[]},"aDs":{"ad":["Hg"]},"aK7":{"at":[],"o":[]},"aK8":{"at":[],"o":[]},"aDy":{"at":[],"o":[]},"aK6":{"at":[],"o":[]},"aEJ":{"at":[],"o":[]},"ayP":{"at":[],"o":[]},"a25":{"ab":[],"o":[]},"CZ":{"at":[],"o":[]},"aDt":{"ad":["a25"]},"aEO":{"at":[],"o":[]},"a26":{"ab":[],"o":[]},"aba":{"ad":["a26"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bc
return{V:w("a9<aa>"),O:w("a9<y>"),e:w("a9<n6>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("ac<n6>"),a:w("ac<@>"),P:w("X<n,@>"),f:w("X<@,@>"),w:w("n1"),_:w("AY"),k:w("n6"),N:w("n"),Y:w("bi<a7>"),W:w("dg<n>"),J:w("ix<Q>"),j:w("ix<p9?>"),E:w("vD<cx>"),q:w("Tv"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.S3=new A.L(983224,"MaterialIcons",!1)
D.aA2=new A.a6(D.S3,48,B.aZ,null,null,null)
D.bHl=new A.M(!0,B.bE,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOJ=new A.z("Powered off",null,D.bHl,null,null,null,null,null,null,null,null,null)
D.aNO=w([D.aA2,B.D,D.bOJ],x.p)
D.als=new A.eL(B.a2,B.e,B.P,B.i,null,B.l,null,0,D.aNO,null)
D.aex=new A.dc(B.L,null,null,D.als,null)
D.bAZ=new A.ai(18,18,B.LH,null)
D.aeL=new A.dc(B.L,null,null,D.bAZ,null)
D.afo=new A.h5(2,null,null,null,null,B.U,null,null,null,null)
D.aid=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aiI=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.aki=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.anR=new A.V(0,3,0,3)
D.ao_=new A.V(10,0,10,88)
D.aon=new A.V(12,6,12,10)
D.aoB=new A.V(14,8,14,6)
D.P1=new A.V(18,12,18,12)
D.apV=new A.V(20,8,20,20)
D.PE=new A.V(8,6,15,8)
D.avK=new A.L(983222,"MaterialIcons",!1)
D.axo=new A.a6(B.im,26,B.T,null,null,null)
D.axr=new A.a6(B.Rf,18,null,null,null,null)
D.axH=new A.a6(B.pt,14,B.U,null,null,null)
D.aw0=new A.L(983420,"MaterialIcons",!1)
D.ayr=new A.a6(D.aw0,14,B.U,null,null,null)
D.au9=new A.L(62895,"MaterialIcons",!1)
D.ayv=new A.a6(D.au9,14,B.U,null,null,null)
D.aBz=new A.a6(B.iX,20,null,null,null,null)
D.aBQ=new A.a6(B.eU,16,null,null,null,null)
D.aQg=w([B.am,B.N],x.O)
D.Tu=new A.am(B.al,B.as,B.z,D.aQg,null,null)
D.buO=new A.aK("NGMY OS","14.2.1")
D.btF=new A.aK("VirtualDroid","13.8.4")
D.btE=new A.aK("NGMY OS","15.0.0")
D.bun=new A.aK("VirtualDroid","14.1.2")
D.btC=new A.aK("NGMY Tab OS","12.9.7")
D.btA=new A.aK("NGMY OS","13.5.3")
D.btp=new A.aK("VirtualDroid","15.2.0")
D.bu0=new A.aK("NGMY OS","14.8.1")
D.but=new A.aK("NGMY Tab OS","13.2.4")
D.buY=new A.aK("VirtualDroid","12.6.9")
D.btl=new A.aK("NGMY OS","16.0.1")
D.btc=new A.aK("VirtualDroid","14.9.0")
D.buG=new A.aK("NGMY Tab OS","14.0.3")
D.btO=new A.aK("NGMY OS","13.1.8")
D.btk=new A.aK("VirtualDroid","13.4.5")
D.btz=new A.aK("NGMY OS","15.3.2")
D.buu=new A.aK("NGMY Tab OS","12.4.1")
D.buI=new A.aK("VirtualDroid","16.1.0")
D.bu_=new A.aK("NGMY OS","14.4.6")
D.buP=new A.aK("VirtualDroid","15.0.8")
D.aPJ=w([D.buO,D.btF,D.btE,D.bun,D.btC,D.btA,D.btp,D.bu0,D.but,D.buY,D.btl,D.btc,D.buG,D.btO,D.btk,D.btz,D.buu,D.buI,D.bu_,D.buP],A.bc("a9<+(n,n)>"))
D.bx_=new A.ek(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bwy=new A.ek(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bwt=new A.ek(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bwC=new A.ek(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bwp=new A.ek(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bwE=new A.ek(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bx1=new A.ek(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bwq=new A.ek(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bwx=new A.ek(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bwG=new A.ek(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bwo=new A.ek(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bwU=new A.ek(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bwR=new A.ek(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bww=new A.ek(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bwO=new A.ek(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bwN=new A.ek(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bwn=new A.ek(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bwB=new A.ek(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bwL=new A.ek(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bwQ=new A.ek(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.UE=w([D.bx_,D.bwy,D.bwt,D.bwC,D.bwp,D.bwE,D.bx1,D.bwq,D.bwx,D.bwG,D.bwo,D.bwU,D.bwR,D.bww,D.bwO,D.bwN,D.bwn,D.bwB,D.bwL,D.bwQ],A.bc("a9<+(n,n,a7,a7,n)>"))
D.aVZ=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a0B=new C.Hk(0,"youtube")
D.a0C=new C.Hk(1,"tiktok")
D.Hz=new C.Hk(2,"instagram")
D.a0D=new C.Hk(3,"facebook")
D.boK=new C.Hk(4,"other")
D.bAz=new A.ai(3,null,null,null)
D.bBj=new A.i3(4,10,8,0.52,null)
D.bQ_=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bEG=new A.aR(D.bQ_,null,null,null,null,null,null,null,null,null,null,null,null,B.E,!1,null,null,null,B.n,null)
D.bHI=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bPO=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.c01=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c0P=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c0U=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c6q=new C.aEJ(null)})();(function staticFields(){$.djy=20
$.aqF=null
$.ber=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e0z","E6",()=>A.Rs(0))
w($,"e0A","M6",()=>A.Rs(null))})()};
(a=>{a["/CXINIiq+cswe9+z0HlckWOy9lY="]=a.current})($__dart_deferred_initializers__);