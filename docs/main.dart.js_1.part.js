((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dYz(d,e){A.a5(d,!1).cr(A.eo(new C.d4V(e),!0,null,x.H))},
Vq(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Vq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.M7()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aY(n,B.af,B.a5),t)
w=3
return A.b(A.da(B.B,new C.d4U(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vq)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dGe(r)
if(q==null){d.F(x.q).f.O(D.bEy)
w=1
break}w=4
return A.b(A.bK(B.h_,null,x.H),$async$Vq)
case 4:if(d.e==null){w=1
break}n=B.o.am(e,1,999)
$.djG=n
p=C.dG8(n)
n=$.E7()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d8J(q)
d.F(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vq,v)},
djJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aU(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aU(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.n6(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hk(d){return C.dGh(d)},
dGh(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hk=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$Hk)
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
k=A.df(k,new C.beF(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.B(new A.af(k,new C.beG(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.djL(q)
w=12
return A.b(C.Hj(a3,p),$async$Hk)
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
case 19:m=C.djJ(A.S(n,x.N,x.z))
l=C.djL(A.a([m],x.e))
w=21
return A.b(C.Hj(a3,l),$async$Hk)
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
case 18:case 14:q=C.dGf()
w=22
return A.b(C.Hj(a3,q),$async$Hk)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hk,v)},
djL(d){var w=A.W(d).j("A<1,n>"),v=new A.A(d,new C.bex(),w).ek(0),u=new A.A(d,new C.bey(),w).ek(0),t=new A.A(d,new C.bez(),w).ek(0),s=new A.A(d,new C.beA(),w).ek(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d8K(null,q,u,t,v,s));++q}return r},
aqG(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aqG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hk(d),$async$aqG)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.d0(t,new C.beB(),s).ek(0)
p=r.d0(t,new C.beC(),s).ek(0)
o=r.d0(t,new C.beD(),s).ek(0)
n=r.d0(t,new C.beE(),s).ek(0)
m=C.d8K(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hj(d,t),$async$aqG)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqG,v)},
Hj(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Hj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.au(),$async$Hj)
case 2:u=g
t=B.a.i(d)
s=J.b2(e,new C.bew(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.x.al(s,null)),$async$Hj)
case 3:return A.h(null,v)}})
return A.i($async$Hj,v)},
dGf(){var w,v=x.N,u=A.b7(v),t=A.b7(v),s=A.b7(v),r=A.b7(v),q=J.dQ(20,x.k)
for(w=0;w<20;++w)q[w]=C.d8K(w,w,t,s,u,r)
return q},
d8K(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.ja(),h=d==null,g=D.UG[B.o.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.UG[B.o.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.A(p,new C.bev(),A.W(p).j("A<1,n>")).eP(0)
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
k=D.aVP[w]
j=D.aPC[w]
return new C.n6("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.o.q(e+1),2,"0"),u,k,C.dGg(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a_().Y())},
dGg(d,e){var w,v=J.dQ(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.o.j4(d.bx(256),16),2,"0")
return B.d.eP(v)},
d4V:function d4V(d){this.a=d},
d4U:function d4U(d,e){this.a=d
this.b=e},
d4Q:function d4Q(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4S:function d4S(d){this.a=d},
d4T:function d4T(d,e){this.a=d
this.b=e},
Kr:function Kr(d,e,f,g){var _=this
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
beF:function beF(){},
beG:function beG(){},
bex:function bex(){},
bey:function bey(){},
bez:function bez(){},
beA:function beA(){},
beB:function beB(){},
beC:function beC(){},
beD:function beD(){},
beE:function beE(){},
bew:function bew(){},
bev:function bev(){},
Hi:function Hi(d,e){this.c=d
this.a=e},
ab9:function ab9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cw0:function cw0(){},
cw_:function cw_(d,e){this.a=d
this.b=e},
cvY:function cvY(d){this.a=d},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cw1:function cw1(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw6:function cw6(d,e){this.a=d
this.b=e},
cw4:function cw4(d,e,f){this.a=d
this.b=e
this.c=f},
cw3:function cw3(d,e){this.a=d
this.b=e},
cw2:function cw2(d,e){this.a=d
this.b=e},
cw7:function cw7(d){this.a=d},
SP:function SP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCu:function aCu(d,e){this.c=d
this.a=e},
Hh:function Hh(d,e){this.c=d
this.a=e},
aDs:function aDs(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cvV:function cvV(d){this.a=d},
cvW:function cvW(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvU:function cvU(d,e){this.a=d
this.b=e},
cvR:function cvR(d){this.a=d},
cvS:function cvS(d){this.a=d},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvT:function cvT(d){this.a=d},
cvP:function cvP(d){this.a=d},
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
cKw:function cKw(d){this.a=d},
cKx:function cKx(d){this.a=d},
aEJ:function aEJ(d){this.a=d},
ayP:function ayP(d,e){this.c=d
this.a=e},
dGe(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dGd(v)
if(u!=null)return new C.pa(w,C.d8I(u,!1),D.a0D,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dGc(v)
if(t!=null)return new C.pa(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a0E,"TikTok",q)
s=C.dGb(w,v)
if(s!=null)return s
r=C.dGa(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.pa(w,w,D.boD,"Video",q)
return q},
dGb(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.pa(d,"https://www.instagram.com/reel/"+w+u,D.Hz,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.pa(d,"https://www.instagram.com/p/"+w+u,D.Hz,t,null)}return null},
dGa(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.pa(d,"https://www.facebook.com/plugins/video.php?href="+A.eH(2,d,B.aM,!1)+"&show_text=false&width=734",D.a0F,"Facebook",null)},
dGd(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dGc(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
Hl:function Hl(d,e){this.a=d
this.b=e},
pa:function pa(d,e,f,g,h){var _=this
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
cA_:function cA_(d){this.a=d},
cA0:function cA0(d){this.a=d},
D_:function D_(d,e){this.c=d
this.a=e},
afO:function afO(){},
djK(d,e,f,g,h,i){return new C.a26(i,f,h,e,g,d)},
dXe(d){var w=window
w.toString
A.fQ(w,"message",new C.d1_(d),!1,x._)},
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
cw8:function cw8(d){this.a=d},
cwg:function cwg(d){this.a=d},
cwe:function cwe(d){this.a=d},
cwc:function cwc(d){this.a=d},
cwd:function cwd(d){this.a=d},
cwa:function cwa(d){this.a=d},
cwf:function cwf(d){this.a=d},
cwb:function cwb(d){this.a=d},
cw9:function cw9(d){this.a=d},
d1_:function d1_(d){this.a=d},
djE(){var w,v,u
try{v=A.yG()
w=v.gq0(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d8I(d,e){var w=C.djE(),v=A.a([],x.s)
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
d8H(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
djF(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dG7(d,e,f){var w,v,u=C.d8H(d)
if(u!=null){if(f){w=C.djE()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.djF(C.d8I(u,e))}return C.djF(d)},
dG8(d){if(d<=4)return 0
return B.o.aZ(d-1,4)*4},
dG9(d){var w
if($.M7().a==null)return!1
w=$.E7().a
return d>=w&&d<w+4},
djI(){var w=$.aqF
if(w!=null)w.a7(0)
$.aqF=null
$.E7().sv(0,0)},
djH(){var w,v,u,t=$.M7()
if(t.a==null)return
w=$.aqF
if(w!=null)w.a7(0)
v=$.djG
if(v<=4){t=t.a
t.toString
C.d8J(t)
return}w=$.E7()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d8J(t)},
d8J(d){var w=$.aqF
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
default:w=null}$.aqF=A.dq(A.d7(0,0,0,0,0,w),C.dXp())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kr.prototype={
B(d){var w=null,v=this.e,u=v?B.am:B.c,t=A.m(20),s=A.T(B.T.l(0.25),B.m,1),r=A.Y(this.d,B.T,w,w,14)
return A.r(w,A.G(A.a([r,B.eH,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bs,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.q(u,w,s,t,w,w,B.j),w,w,w,B.eC,w,w,w)}}
C.n6.prototype={
a8(){var w=this
return A.t(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Hi.prototype={
S(){return new C.ab9(A.a([],x.e))},
gdR(){return this.c}}
C.ab9.prototype={
Z(){var w=this
w.a3()
$.E7().aj(0,w.gas9())
C.dXe(w.gber())
w.Vg()},
bdR(){if(this.c!=null)this.p(new C.cw0())},
bes(){C.djH()},
n(){$.E7().V(0,this.gas9())
C.djI()
$.M7().sv(0,null)
this.a2()},
Vg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hk(t.a.c),$async$Vg)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cw_(t,s))
$.beu=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$Vg,v)},
Rr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cvY(t))
w=3
return A.b(C.aqG(t.a.c),$async$Rr)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cvZ(t,s))
$.beu=J.a3(t.d)
t.c.F(x.q).f.O(A.bo(null,null,null,null,null,B.n,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
bgj(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.eo(new C.cw1(d),!1,null,x.H))},
bgS(){var w=this.c
w.toString
return C.Vq(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.r,t=u?B.eb:B.bl,s=A.aH(v,v,v,v,B.FL,v,v,v,new C.cw5(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.Bz(A.G(A.a([A.H(new A.I(B.ic,A.d(r,v,1,B.ai,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.K,!0,v,A.aS(!1,v,!0,new A.I(B.aN,A.Y(B.eW,B.T,v,v,28),v),B.c7,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgR(),v,v,v,v,v,v,v),B.h,B.B,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.c2(!0,A.x(A.a([new A.I(D.PG,r,v),A.H(w.e?B.lo:new A.ix($.M7(),new C.cw6(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0)
return A.c6(v,t,s,v,!1,!1,A.alm(B.T,B.Bm,B.lP,D.c0L,w.e?v:new C.cw7(w)),v)}}
C.SP.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.m,1),q=A.a([new A.aa(0,B.w,B.T.l(0.18),B.cx,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a25(n,!0,!C.dG9(w),"Fold "+(B.o.aZ(w,4)+1)+"/"+B.o.aZ(v.e+4-1,4),u)
n=w}else n=A.r(u,A.x(A.a([A.Y(B.im,B.lw,u,u,22),B.ap,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ax,B.f,0,B.l),B.h,B.vU,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.K,!0,u,A.aS(!1,t,!0,A.x(A.a([A.H(A.r(u,A.cj(p,A.fS(A.x(A.a([new C.aCu(o,u),A.H(n,1),A.r(u,A.G(A.a([A.Y(B.tj,B.T.l(0.85),u,u,9),D.bAr,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ax,B.f,0,u,u),B.h,B.a9,u,u,u,u,u,D.anM,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,u,u,new A.q(u,u,r,s,q,D.Tw,B.j),u,u,u,B.eU,u,u,u),1),B.ap,A.d(o.b,u,1,B.ai,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.y,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ai,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ai,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.B,0,u,u,u,u,u,B.X)}}
C.aCu.prototype={
B(d){var w=null
return A.r(w,A.G(A.a([A.H(A.d(B.d.gav(this.c.c.split("-")),w,w,B.ai,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.ps,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a9,w,w,w,w,w,B.Px,w,w,w)}}
C.Hh.prototype={
S(){return new C.aDs()}}
C.aDs.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.r,u=v?B.eb:B.bl,t=A.aH(w,w,w,w,B.FL,w,w,w,new C.cvV(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c6(w,u,A.c2(!0,A.x(A.a([new A.I(D.PG,A.G(A.a([t,A.H(new A.Bz(A.G(A.a([A.H(new A.I(B.ic,A.d(s.b+" \xb7 "+s.c,w,1,B.ai,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.K,!0,w,A.aS(!1,w,!0,new A.I(B.aN,A.Y(B.eW,B.T,w,w,28),w),B.c7,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvW(d),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.ix($.M7(),new C.cvX(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Z,!0,!0),w,!1,!1,w,w)}}
C.aK7.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.w,B.T.l(0.35),B.e5,28),new A.aa(0,B.w,B.q.l(0.45),B.co,18)],x.V),o=A.T(B.c.l(0.12),B.m,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.djK(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaGS(),v+"_full")
w=v}else w=new C.aDy(t.r,s)}else w=new C.ayP(m,s)
else w=D.c6h
return A.r(s,A.cj(n,A.fS(A.x(A.a([new C.aK8(m,l,s),A.H(w,1),new C.aK6(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.ar),B.h,s,s,new A.q(s,s,o,q,p,D.Tw,B.j),s,r*2.05,s,B.bd,s,s,r)}}
C.aK8.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.dm(r)
r=A.hj(r)
w=new A.dg(q,r)
v=w.gGI()===0?12:w.gGI()
r=B.a.bh(B.o.q(r),2,"0")
q=(q<12?B.eS:B.hH)===B.eS?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.l9,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bj,D.ayl,B.dy,D.axB,B.dy,D.ayp],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ap,A.G(A.a([A.Y(B.FB,B.T.l(0.9),s,s,12),B.dy,A.H(A.d(u.c,s,s,B.ai,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.r(s,A.x(q,B.i,B.e,B.f,0,B.l),B.h,B.a9,s,s,s,s,s,D.aow,s,s,s)}}
C.aDy.prototype={
B(d){var w=null
return A.r(w,A.aL(A.x(A.a([A.Y(B.xK,B.c.l(0.35),w,w,40),B.G,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ap,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.ep(D.aBK,D.bPF,this.c,A.e9(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aC(B.T.l(0.5),1,B.m,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vU,w,w,w,w,w,w,w,w,1/0)}}
C.aK6.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as1(B.S4,"YouTube",s===0,r,new C.cKw(u))
s=u.as1(B.jM,"Device",s===1,r,new C.cKx(u))
w=r?"Power off":"Power on"
v=r?D.S5:D.avE
return A.r(t,A.G(A.a([q,B.a1,s,B.b3,A.aH(t,t,t,t,A.Y(v,r?B.b6:B.ep,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cA)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a9,t,t,t,t,t,D.aoi,t,t,t)},
as1(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aZ
else w=f?B.T:B.a8
v=f&&g?B.T.l(0.15):B.B
u=A.m(10)
t=g?h:s
return A.H(A.aI(!1,B.K,!0,u,A.aS(!1,A.m(10),!0,new A.I(B.lG,A.x(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.X),1)}}
C.aEJ.prototype={
B(d){return D.aeA}}
C.ayP.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k4,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qD("Serial",u.c),q=w.qD("Model",u.d),p=w.qD("Device ID",u.e),o=w.qD("IMEI",u.r),n=w.qD("MAC",u.f),m=w.qD("OS",u.w+" "+u.x),l=w.qD("Location",u.y+", "+u.z),k=w.qD("Coordinates",B.k.a1(u.Q,4)+", "+B.k.a1(u.as,4)),j=w.qD("Timezone",u.at)
u=u.ax
return A.ej(A.a([t,B.ap,s,B.V,r,q,p,o,n,m,l,k,j,w.qD("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aN,v,v,B.a2,!1)},
qD(d,e){var w=null
return new A.I(B.c2,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bX,A.d(e,w,w,w,w,w,w,D.bHz,w,w,w)],x.p),B.v,B.e,B.f,0,B.l),w)}}
C.Hl.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.pa.prototype={
gaGS(){var w=this.c
return w===D.a0D||w===D.a0E||w===D.Hz||w===D.a0F}}
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
this.aQl()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dB(t,new A.q(t,t,t,t,t,new A.an(B.cG,B.c0,B.z,A.a([B.B,B.q.l(0.55)],x.O),t,t),B.j),B.bt),q=x.Y,p=u.d
p===$&&A.c()
p=A.cm(B.hj,p,t)
w=B.c.l(0.92)
q=A.aL(new A.cS(new A.b0(p,new A.bi(0.72,1,q),q.j("b0<bh.T>")),!1,A.Y(B.im,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.lw
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEO(s,t),r,q,A.aW(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.q(p,t,t,w,t,t,B.j),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
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
if(u!=null&&u.length!==0)return A.la(u,new C.cA_(this),B.bp,!0,w,w,new C.cA0(this),w)
return new C.D_(v,w)}}
C.D_.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aK(A.a([B.rm,B.M_],x.O),B.im)
break
case 1:w=new A.aK(A.a([B.vU,D.aiG],x.O),B.jN)
break
case 2:w=new A.aK(A.a([D.akd,D.aib],x.O),B.xS)
break
case 3:w=new A.aK(A.a([B.N,B.cB],x.O),B.xW)
break
case 4:w=new A.aK(A.a([B.a9,B.am],x.O),B.ng)
break
default:w=u}v=w.a
return A.r(u,A.aL(A.Y(w.b,B.T.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.q(u,u,u,u,u,new A.an(B.an,B.as,B.z,v,u,u),B.j),u,u,u,u,u,u,u)}}
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
bwR(d,e){var w=C.d8H(d)
if(w!=null)return C.d8I(w,e)
return d},
a3G(d,e){var w,v=this,u=C.d8H(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwR(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dG7(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buM(){var w,v=this
if(v.w)return
v.p(new C.cw8(v))
w=v.e
if(w!=null)v.a3G(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.E8()
$.oB().rQ(w,new C.cwg(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cw9(v))
w=v.e
w.toString
v.a3G(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Sh,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.D,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fS(A.aL(new A.I(new A.V(12,12,12,12),A.x(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YJ(n,B.q3,w)],v)
if(o.f)w.push(A.fS(A.aL(new A.ai(28,28,D.afp,n),n,n,n),B.ch,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.aZ,B.m,1)
q=A.Y(B.FF,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eF(0,A.aI(!1,B.K,!0,n,A.aS(!1,n,!0,A.aL(A.r(n,A.G(A.a([q,B.a1,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.q(t,n,r,s,n,n,B.j),n,n,n,D.P3,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuL(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.X)))}return new A.aF(B.a3,n,B.aT,B.n,w,n)}}
var z=a.updateTypes(["n(n6)","~()","Hi(R)","n6(X<@,@>)","a0(n6)","X<n,@>(n6)","ax<~>()","Hh(R)","ix<Q>(R,pa?,o?)","SP(R,Q)","rq(R,pa?,o?)","D_(R,aj,dx?)"])
C.d4V.prototype={
$1(d){return new C.Hi(this.a,null)},
$S:z+2}
C.d4U.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.r,l=A.az(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d1,B.N],j):A.a([B.c,B.ab],j),h=A.a([new A.aa(0,B.w,B.T.l(0.22),B.e5,32)],x.V),g=A.T(m?B.bw:B.T.l(0.18),B.m,1),f=A.m(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a4.l(m?0.18:0.08)],j)
e=A.r(n,D.axi,B.h,n,n,new A.q(B.T.l(0.18),n,A.T(B.T.l(0.45),B.m,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.x(A.a([w,B.ap,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a6,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.f,0,B.l),1)
j=A.r(n,A.G(A.a([e,B.e6,w,A.aH(n,n,n,n,A.Y(B.cq,m?B.a8:B.ch,n,n,n),n,n,n,new C.d4Q(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.q(n,n,n,n,n,new A.an(B.a_,B.a0,B.z,j,n,n),B.j),n,n,n,B.Dv,n,n,n)
e=A.e5(B.bW,A.a([new C.Kr("YouTube",B.FA,m,n),new C.Kr("TikTok",B.jN,m,n),new C.Kr("Instagram",B.xS,m,n),new C.Kr("Facebook",B.xW,m,n)],v),B.bQ,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bE:B.fV,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.am:B.bl
r=A.Y(B.il,B.T.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bw:B.au
u=A.x(A.a([e,B.at,A.aD(n,B.F,!0,n,!0,B.n,n,A.aE(),w,n,n,n,n,n,2,A.bm(n,new A.b6(4,q,B.I),n,n,n,n,n,n,!0,new A.b6(4,p,new A.aC(o,1,B.m,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b6(4,A.m(16),B.KM),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.t,!0,n,!0,n,!1,n,B.Q,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.J,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.S,n,n,n,n)],v),B.aa,B.e,B.f,0,B.l)
e=A.j6(D.axl,D.c_T,new C.d4R(d),A.ie(n,n,n,n,n,n,n,n,n,n,n,m?B.aQ:B.a6,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dB(A.cj(f,A.x(A.a([j,new A.I(B.Pg,u,n),new A.I(D.apQ,A.G(A.a([e,B.b3,A.bX(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d4S(d),n,n),B.a1,A.dC(D.aBt,D.c0G,new C.d4T(d,w),A.bu(B.T,n,n,n,B.c,n,D.P3,n,new A.bB(A.m(14),B.I),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.aa,B.e,B.P,0,B.l),B.ar),new A.q(n,n,g,k,h,new A.an(B.an,B.as,B.z,i,n,n),B.j),B.bt),n)},
$S:77}
C.d4Q.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4R.prototype={
$0(){C.djI()
$.M7().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d4S.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d4T.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.beF.prototype={
$1(d){return C.djJ(A.S(d,x.N,x.z))},
$S:z+3}
C.beG.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bex.prototype={
$1(d){return d.c},
$S:z+0}
C.bey.prototype={
$1(d){return d.r},
$S:z+0}
C.bez.prototype={
$1(d){return d.f},
$S:z+0}
C.beA.prototype={
$1(d){return d.at},
$S:z+0}
C.beB.prototype={
$1(d){return d.c},
$S:z+0}
C.beC.prototype={
$1(d){return d.r},
$S:z+0}
C.beD.prototype={
$1(d){return d.f},
$S:z+0}
C.beE.prototype={
$1(d){return d.at},
$S:z+0}
C.bew.prototype={
$1(d){return d.a8()},
$S:z+5}
C.bev.prototype={
$1(d){return B.a.bh(B.o.j4(d,16),2,"0").toUpperCase()},
$S:78}
C.cw0.prototype={
$0(){},
$S:0}
C.cw_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvY.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cvZ.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cw1.prototype={
$1(d){return new C.Hh(this.a,null)},
$S:z+7}
C.cw5.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cw6.prototype={
$3(d,e,f){return new A.ix($.E7(),new C.cw4(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cw4.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.B1(d,k,x.Q)
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
n=$.E7().a
m=B.k.am(n+4,1,o)
t=A.a([A.r(k,A.G(A.a([q,B.a1,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.q(t,k,r,s,k,k,B.j),k,k,B.ct,B.eD,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.cj(s,new A.iS(1.7777777777777777,C.djK(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaGS(),"fleet_master"),k),B.ar),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u8(0,B.n,k,B.t,k,k,k,k,!1,k,B.a2,!1,A.a([new A.jP(new A.I(B.Dm,A.x(u,B.v,B.e,B.f,0,B.l),k),k),new A.ng(D.anV,A.au8(new A.mw(new C.cw3(i,j),J.a3(i.d),!1,!0,!0,A.r2(),k),D.bBb),k)],w))},
$S:1625}
C.cw3.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.SP(v,e,J.a3(w.d),new C.cw2(w,v),this.b,null)},
$S:z+9}
C.cw2.prototype={
$0(){return this.a.bgj(this.b)},
$S:0}
C.cw7.prototype={
$0(){this.a.Rr()
return null},
$S:0}
C.cvV.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cvW.prototype={
$0(){C.Vq(this.a,$.beu)
return null},
$S:0}
C.cvX.prototype={
$3(d,e,f){return A.fz(new C.cvU(this.a,e))},
$S:z+10}
C.cvU.prototype={
$2(d,e){var w,v=null,u=B.k.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aL(A.cp(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.at,new C.aK7(u,s.a.c,s.e,s.d,new C.cvR(s),new C.cvS(s),new C.cvT(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.t,v,B.oT,v,v,B.a2),v,v,v)},
$S:1626}
C.cvR.prototype={
$0(){var w=this.a.c
w.toString
C.Vq(w,$.beu)
return null},
$S:0}
C.cvS.prototype={
$1(d){var w=this.a
return w.p(new C.cvQ(w,d))},
$S:39}
C.cvQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvT.prototype={
$0(){var w=this.a
return w.p(new C.cvP(w))},
$S:0}
C.cvP.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cKw.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cKx.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cA_.prototype={
$3(d,e,f){return new C.D_(this.a.c,null)},
$S:z+11}
C.cA0.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a3,null,B.aT,B.n,A.a([new C.D_(this.a.c,null),D.aeO],x.p),null)},
$C:"$3",
$R:3,
$S:423}
C.cw8.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cwg.prototype={
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
A.fQ(v,"load",new C.cwe(w),!1,u)
v=w.e
v.toString
A.fQ(v,"error",new C.cwf(w),!1,u)
w=w.e
w.toString
return w},
$S:567}
C.cwe.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cwc(w))
A.bK(B.E,new C.cwd(w),x.H)}},
$S:43}
C.cwc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cwd.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cwa(w))},
$S:12}
C.cwa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cwf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cwb(w))},
$S:43}
C.cwb.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cw9.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d1_.prototype={
$1(d){var w,v,u,t,s=new A.Cz([],[]).G_(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.x.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1627};(function aliases(){var w=C.afO.prototype
w.aQl=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ab9.prototype,"gas9","bdR",1)
w(u,"gber","bes",1)
w(u,"gbgR","bgS",6)
w(C.aba.prototype,"gbuL","buM",1)
v(C,"dXp","djH",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wJ,[C.d4V,C.d4U,C.beF,C.beG,C.bex,C.bey,C.bez,C.beA,C.beB,C.beC,C.beD,C.beE,C.bew,C.bev,C.cw1,C.cw6,C.cw4,C.cvX,C.cvS,C.cA_,C.cA0,C.cwg,C.cwe,C.cwf,C.d1_])
v(A.WZ,[C.d4Q,C.d4R,C.d4S,C.d4T,C.cw0,C.cw_,C.cvY,C.cvZ,C.cw5,C.cw2,C.cw7,C.cvV,C.cvW,C.cvR,C.cvQ,C.cvT,C.cvP,C.cKw,C.cKx,C.cw8,C.cwc,C.cwd,C.cwa,C.cwb,C.cw9])
v(A.at,[C.Kr,C.SP,C.aCu,C.aK7,C.aK8,C.aDy,C.aK6,C.aEJ,C.ayP,C.aEO,C.D_])
v(A.aj,[C.n6,C.pa])
v(A.ab,[C.Hi,C.Hh,C.a25,C.a26])
v(A.ad,[C.ab9,C.aDs,C.afO,C.aba])
v(A.X_,[C.cw3,C.cvU])
u(C.Hl,A.azJ)
u(C.aDt,C.afO)
w(C.afO,A.e1)})()
A.dmZ(b.typeUniverse,JSON.parse('{"Hi":{"ab":[],"o":[]},"SP":{"at":[],"o":[]},"Hh":{"ab":[],"o":[]},"Kr":{"at":[],"o":[]},"ab9":{"ad":["Hi"]},"aCu":{"at":[],"o":[]},"aDs":{"ad":["Hh"]},"aK7":{"at":[],"o":[]},"aK8":{"at":[],"o":[]},"aDy":{"at":[],"o":[]},"aK6":{"at":[],"o":[]},"aEJ":{"at":[],"o":[]},"ayP":{"at":[],"o":[]},"a25":{"ab":[],"o":[]},"D_":{"at":[],"o":[]},"aDt":{"ad":["a25"]},"aEO":{"at":[],"o":[]},"a26":{"ab":[],"o":[]},"aba":{"ad":["a26"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bc
return{V:w("a9<aa>"),O:w("a9<z>"),e:w("a9<n6>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("ac<n6>"),a:w("ac<@>"),P:w("X<n,@>"),f:w("X<@,@>"),w:w("n1"),_:w("AZ"),k:w("n6"),N:w("n"),Y:w("bi<a7>"),W:w("dh<n>"),J:w("ix<Q>"),j:w("ix<pa?>"),E:w("vE<cx>"),q:w("Tw"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.S5=new A.L(983224,"MaterialIcons",!1)
D.azX=new A.a6(D.S5,48,B.aZ,null,null,null)
D.bHc=new A.M(!0,B.bE,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOA=new A.y("Powered off",null,D.bHc,null,null,null,null,null,null,null,null,null)
D.aNH=w([D.azX,B.D,D.bOA],x.p)
D.aln=new A.eL(B.a2,B.e,B.P,B.i,null,B.l,null,0,D.aNH,null)
D.aeA=new A.dd(B.L,null,null,D.aln,null)
D.bAR=new A.ai(18,18,B.LI,null)
D.aeO=new A.dd(B.L,null,null,D.bAR,null)
D.afp=new A.h5(2,null,null,null,null,B.U,null,null,null,null)
D.aib=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aiG=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.akd=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.anM=new A.V(0,3,0,3)
D.anV=new A.V(10,0,10,88)
D.aoi=new A.V(12,6,12,10)
D.aow=new A.V(14,8,14,6)
D.P3=new A.V(18,12,18,12)
D.apQ=new A.V(20,8,20,20)
D.PG=new A.V(8,6,15,8)
D.avE=new A.L(983222,"MaterialIcons",!1)
D.axi=new A.a6(B.im,26,B.T,null,null,null)
D.axl=new A.a6(B.Rh,18,null,null,null,null)
D.axB=new A.a6(B.ps,14,B.U,null,null,null)
D.avV=new A.L(983420,"MaterialIcons",!1)
D.ayl=new A.a6(D.avV,14,B.U,null,null,null)
D.au3=new A.L(62895,"MaterialIcons",!1)
D.ayp=new A.a6(D.au3,14,B.U,null,null,null)
D.aBt=new A.a6(B.iX,20,null,null,null,null)
D.aBK=new A.a6(B.eW,16,null,null,null,null)
D.aQ7=w([B.am,B.N],x.O)
D.Tw=new A.an(B.an,B.as,B.z,D.aQ7,null,null)
D.buG=new A.aK("NGMY OS","14.2.1")
D.btx=new A.aK("VirtualDroid","13.8.4")
D.btw=new A.aK("NGMY OS","15.0.0")
D.buf=new A.aK("VirtualDroid","14.1.2")
D.btu=new A.aK("NGMY Tab OS","12.9.7")
D.bts=new A.aK("NGMY OS","13.5.3")
D.bth=new A.aK("VirtualDroid","15.2.0")
D.btT=new A.aK("NGMY OS","14.8.1")
D.bul=new A.aK("NGMY Tab OS","13.2.4")
D.buQ=new A.aK("VirtualDroid","12.6.9")
D.btd=new A.aK("NGMY OS","16.0.1")
D.bt4=new A.aK("VirtualDroid","14.9.0")
D.buy=new A.aK("NGMY Tab OS","14.0.3")
D.btG=new A.aK("NGMY OS","13.1.8")
D.btc=new A.aK("VirtualDroid","13.4.5")
D.btr=new A.aK("NGMY OS","15.3.2")
D.bum=new A.aK("NGMY Tab OS","12.4.1")
D.buA=new A.aK("VirtualDroid","16.1.0")
D.btS=new A.aK("NGMY OS","14.4.6")
D.buH=new A.aK("VirtualDroid","15.0.8")
D.aPC=w([D.buG,D.btx,D.btw,D.buf,D.btu,D.bts,D.bth,D.btT,D.bul,D.buQ,D.btd,D.bt4,D.buy,D.btG,D.btc,D.btr,D.bum,D.buA,D.btS,D.buH],A.bc("a9<+(n,n)>"))
D.bwS=new A.ek(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bwq=new A.ek(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bwl=new A.ek(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bwu=new A.ek(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bwh=new A.ek(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bww=new A.ek(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bwU=new A.ek(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bwi=new A.ek(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bwp=new A.ek(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bwy=new A.ek(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bwg=new A.ek(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bwM=new A.ek(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bwJ=new A.ek(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bwo=new A.ek(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bwG=new A.ek(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bwF=new A.ek(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bwf=new A.ek(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bwt=new A.ek(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bwD=new A.ek(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bwI=new A.ek(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.UG=w([D.bwS,D.bwq,D.bwl,D.bwu,D.bwh,D.bww,D.bwU,D.bwi,D.bwp,D.bwy,D.bwg,D.bwM,D.bwJ,D.bwo,D.bwG,D.bwF,D.bwf,D.bwt,D.bwD,D.bwI],A.bc("a9<+(n,n,a7,a7,n)>"))
D.aVP=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a0D=new C.Hl(0,"youtube")
D.a0E=new C.Hl(1,"tiktok")
D.Hz=new C.Hl(2,"instagram")
D.a0F=new C.Hl(3,"facebook")
D.boD=new C.Hl(4,"other")
D.bAr=new A.ai(3,null,null,null)
D.bBb=new A.i3(4,10,8,0.52,null)
D.bPR=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bEy=new A.aR(D.bPR,null,null,null,null,null,null,null,null,null,null,null,null,B.E,!1,null,null,null,B.n,null)
D.bHz=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bPF=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.c_T=new A.y("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c0G=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c0L=new A.y("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c6h=new C.aEJ(null)})();(function staticFields(){$.djG=20
$.aqF=null
$.beu=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e0I","E7",()=>A.Rt(0))
w($,"e0J","M7",()=>A.Rt(null))})()};
(a=>{a["ZZf5QDHe5pvK1kQ/vHihr7d6uYY="]=a.current})($__dart_deferred_initializers__);