((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eOv(d,e){A.a0(d,!1).cr(A.ez(new C.dMO(e),!0,null,x.H))},
a1L(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.RH()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.an(new A.be(n,B.aT,B.aI),t)
w=3
return A.b(A.d2(B.J,new C.dMN(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1L)
case 3:r=g
s.M$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.ese(r)
if(q==null){d.F(x.q).f.R(D.d2L)
w=1
break}w=4
return A.b(A.bH(B.hL,null,x.H),$async$a1L)
case 4:if(d.e==null){w=1
break}n=B.m.P(e,1,999)
$.e2V=n
p=C.es8(n)
n=$.IF()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dR6(q)
d.F(x.q).f.R(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1L,v)},
e2Y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.pf(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Mc(d){return C.esh(d)},
esh(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Mc=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aq(),$async$Mc)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a9(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aA(0,a0,null)
w=x.a.b(r)&&J.cD(r)?10:11
break
case 10:k=J.et(r,x.f)
k=A.d7(k,new C.bz4(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.bz5(),j),j.j("I.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.e3_(q)
w=12
return A.b(C.Mb(a3,p),$async$Mc)
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
case 9:case 5:o=A.aK(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.L.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.e2Y(A.S(n,x.N,x.z))
l=C.e3_(A.a([m],x.e))
w=21
return A.b(C.Mb(a3,l),$async$Mc)
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
case 18:case 14:q=C.esf()
w=22
return A.b(C.Mb(a3,q),$async$Mc)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Mc,v)},
e3_(d){var w=A.X(d).j("G<1,q>"),v=new A.G(d,new C.byX(),w).eu(0),u=new A.G(d,new C.byY(),w).eu(0),t=new A.G(d,new C.byZ(),w).eu(0),s=new A.G(d,new C.bz_(),w).eu(0),r=A.ba(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dR7(null,q,u,t,v,s));++q}return r},
aE8(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aE8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Mc(d),$async$aE8)
case 3:t=f
s=x.N
r=J.c6(t)
q=r.d6(t,new C.bz0(),s).eu(0)
p=r.d6(t,new C.bz1(),s).eu(0)
o=r.d6(t,new C.bz2(),s).eu(0)
n=r.d6(t,new C.bz3(),s).eu(0)
m=C.dR7(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.Mb(d,t),$async$aE8)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aE8,v)},
Mb(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Mb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aq(),$async$Mb)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.byW(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ak("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.aj(s,null)),$async$Mb)
case 3:return A.h(null,v)}})
return A.i($async$Mb,v)},
esf(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cU(20,x.k)
for(w=0;w<20;++w)q[w]=C.dR7(w,w,t,s,u,r)
return q},
dR7(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.m2(),h=d==null,g=D.ac7[B.m.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.ac7[B.m.a0(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bv(256)
n=new A.G(p,new C.byV(),A.X(p).j("G<1,q>")).h0(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bv(10)
t=B.f.h0(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b5(B.m.fV(i.bv(256),16),2,"0")
s=B.f.b7(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a0(e,20)
k=D.cax[w]
j=D.c0k[w]
return new C.pf("vd_"+1000*Date.now()+"_"+e+"_"+i.bv(99999),"Device "+B.b.b5(B.m.t(e+1),2,"0"),u,k,C.esg(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a9().a5())},
esg(d,e){var w,v=J.cU(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b5(B.m.fV(d.bv(256),16),2,"0")
return B.f.h0(v)},
dMO:function dMO(d){this.a=d},
dMN:function dMN(d,e){this.a=d
this.b=e},
dMJ:function dMJ(d){this.a=d},
dMK:function dMK(d){this.a=d},
dML:function dML(d){this.a=d},
dMM:function dMM(d,e){this.a=d
this.b=e},
PM:function PM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
pf:function pf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bz4:function bz4(){},
bz5:function bz5(){},
byX:function byX(){},
byY:function byY(){},
byZ:function byZ(){},
bz_:function bz_(){},
bz0:function bz0(){},
bz1:function bz1(){},
bz2:function bz2(){},
bz3:function bz3(){},
byW:function byW(){},
byV:function byV(){},
Ma:function Ma(d,e){this.c=d
this.a=e},
akI:function akI(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6h:function d6h(){},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6e:function d6e(d){this.a=d},
d6f:function d6f(d,e){this.a=d
this.b=e},
d6i:function d6i(d){this.a=d},
d6n:function d6n(d){this.a=d},
d6m:function d6m(d){this.a=d},
d6o:function d6o(d,e){this.a=d
this.b=e},
d6l:function d6l(d,e,f){this.a=d
this.b=e
this.c=f},
d6k:function d6k(d,e){this.a=d
this.b=e},
d6j:function d6j(d,e){this.a=d
this.b=e},
d6p:function d6p(d){this.a=d},
ZC:function ZC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRP:function aRP(d,e){this.c=d
this.a=e},
M9:function M9(d,e){this.c=d
this.a=e},
aT7:function aT7(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d6b:function d6b(d){this.a=d},
d6c:function d6c(d){this.a=d},
d6d:function d6d(d){this.a=d},
d6a:function d6a(d,e){this.a=d
this.b=e},
d67:function d67(d){this.a=d},
d68:function d68(d){this.a=d},
d66:function d66(d,e){this.a=d
this.b=e},
d69:function d69(d){this.a=d},
d65:function d65(d){this.a=d},
b_v:function b_v(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
b_w:function b_w(d,e,f){this.c=d
this.d=e
this.a=f},
aTe:function aTe(d,e){this.c=d
this.a=e},
b_u:function b_u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dnw:function dnw(d){this.a=d},
dnx:function dnx(d){this.a=d},
aUz:function aUz(d){this.a=d},
aNQ:function aNQ(d,e){this.c=d
this.a=e},
ese(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.V(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.esd(v)
if(u!=null)return new C.ry(w,C.dR5(u,!1),D.ajW,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.esc(v)
if(t!=null)return new C.ry(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajX,"TikTok",q)
s=C.esb(w,v)
if(s!=null)return s
r=C.esa(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.ry(w,w,D.cJA,"Video",q)
return q},
esb(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ae("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dg(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ry(d,"https://www.instagram.com/reel/"+w+u,D.RD,t,null)}v=A.ae("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dg(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ry(d,"https://www.instagram.com/p/"+w+u,D.RD,t,null)}return null},
esa(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.ry(d,"https://www.facebook.com/plugins/video.php?href="+A.fW(2,d,B.bv,!1)+"&show_text=false&width=734",D.ajY,"Facebook",null)},
esd(d){var w,v,u,t=[A.ae(y.c,!0,!1,!1,!1),A.ae("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ae("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dg(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
esc(d){var w,v=A.ae("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dg(d)
if(v!=null)return v.b[1]
w=A.ae("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dg(d)
return w==null?null:w.b[1]},
Md:function Md(d,e){this.a=d
this.b=e},
ry:function ry(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aaf:function aaf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aT8:function aT8(d,e){var _=this
_.d=$
_.cj$=d
_.aB$=e
_.c=_.a=null},
aUE:function aUE(d,e){this.c=d
this.a=e},
daI:function daI(d){this.a=d},
daJ:function daJ(d){this.a=d},
Hl:function Hl(d,e){this.c=d
this.a=e},
aqs:function aqs(){},
e2Z(d,e,f,g,h,i){return new C.aag(i,f,h,e,g,d)},
eMU(d){var w=window
w.toString
A.fr(w,"message",new C.dHW(d),!1,x._)},
aag:function aag(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akJ:function akJ(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d6q:function d6q(d){this.a=d},
d6z:function d6z(d){this.a=d},
d6w:function d6w(d){this.a=d},
d6v:function d6v(d){this.a=d},
d6x:function d6x(d){this.a=d},
d6u:function d6u(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6t:function d6t(d){this.a=d},
d6s:function d6s(d){this.a=d},
d6r:function d6r(d){this.a=d},
dHW:function dHW(d){this.a=d},
es6(){var w,v,u
try{v=A.rW()
w=v.gvo(v)
if(J.a1(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dR5(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b7(w,"&")},
byT(d){var w=A.ae(y.c,!0,!1,!1,!1).dg(d)
return w==null?null:w.b[1]},
e2U(d){var w=A.aM(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aM(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
es7(d,e,f){var w,v,u=C.byT(d)
if(u!=null){if(f){w=C.es6()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e2U(C.dR5(u,e))}return C.e2U(d)},
es8(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
es9(d){var w
if($.RH().a==null)return!1
w=$.IF().a
return d>=w&&d<w+4},
e2X(){var w=$.aE7
if(w!=null)w.ab(0)
$.aE7=null
$.IF().sv(0,0)},
e2W(){var w,v,u,t=$.RH()
if(t.a==null)return
w=$.aE7
if(w!=null)w.ab(0)
v=$.e2V
if(v<=4){t=t.a
t.toString
C.dR6(t)
return}w=$.IF()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dR6(t)},
dR6(d){var w=$.aE7
if(w!=null)w.ab(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aE7=A.di(A.d9(0,0,0,0,0,w),C.eNc())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.PM.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a9.k(0.25),B.r,1),r=A.W(this.d,B.a9,w,w,14)
return A.p(w,A.E(A.a([r,B.fH,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a6:B.cm,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Y,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.h0,w,w,w)}}
C.pf.prototype={
ad(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ma.prototype={
U(){return new C.akI(A.a([],x.e))},
ge7(){return this.c}}
C.akI.prototype={
a_(){var w=this
w.a3()
$.IF().aC(0,w.gaCN())
C.eMU(w.gbxd())
w.a1j()},
bwF(){if(this.c!=null)this.n(new C.d6h())},
bxe(){C.e2W()},
p(){$.IF().Z(0,this.gaCN())
C.e2X()
$.RH().sv(0,null)
this.a4()},
a1j(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Mc(t.a.c),$async$a1j)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d6g(t,s))
$.byU=J.a1(s)
case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
XM(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d6e(t))
w=3
return A.b(C.aE8(t.a.c),$async$XM)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d6f(t,s))
$.byU=J.a1(t.d)
t.c.F(x.q).f.R(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XM,v)},
bzm(d){var w=this.c
w.toString
A.a0(w,!1).cr(A.ez(new C.d6i(d),!1,null,x.H))},
bA3(){var w=this.c
w.toString
return C.a1L(w,J.a1(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.C,t=u?B.it:B.bE,s=A.bB(!0,A.u(A.a([new A.B(D.a0j,new A.jt(new C.d6n(w),v),v),A.C(w.e?B.nd:new A.lW($.RH(),new C.d6o(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.aa,!0,!0)
return A.c4(v,t,s,v,!1,!1,A.axn(B.a9,B.JT,B.kU,D.dtV,w.e?v:new C.d6p(w)),v)}}
C.ZC.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a9.k(0.18),B.dA,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.aaf(n,!0,!C.es9(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.p(u,A.u(A.a([A.W(B.kQ,B.oT,u,u,22),B.aH,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.Bv,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.Q,!0,u,A.aH(!1,t,!0,A.u(A.a([A.C(A.p(u,A.bI(p,A.eR(A.u(A.a([new C.aRP(o,u),A.C(n,1),A.p(u,A.E(A.a([A.W(B.uI,B.a9.k(0.85),u,u,9),B.aqx,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.aC,u,u,u,u,u,u,D.aN1,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.ax),B.j,u,u,new A.o(u,u,r,s,q,D.a56,B.o),u,u,u,u,B.f6,u,u,u),1),B.aH,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a9.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aRP.prototype={
B(d){var w=null
return A.p(w,A.E(A.a([A.C(A.d(B.f.ga8(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.pj,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aC,w,w,w,w,w,w,B.a08,w,w,w)}}
C.M9.prototype={
U(){return new C.aT7()}}
C.aT7.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.C,u=v?B.it:B.bE,t=A.aN(w,w,w,w,B.a45,w,w,w,new C.d6b(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c4(w,u,A.bB(!0,A.u(A.a([new A.B(D.a0j,A.E(A.a([t,A.C(new A.M_(A.E(A.a([A.C(new A.B(B.j1,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.B(B.bo,A.W(B.hV,B.a9,w,w,28),w),B.cq,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6c(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.C(new A.lW($.RH(),new C.d6d(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.aa,!0,!0),w,!1,!1,w,w)}}
C.b_v.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a9.k(0.35),B.eF,28),new A.a5(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e2Z(new A.cM(v+"_full_"+u,x.W),!1,u,!1,w.gaTn(),v+"_full")
w=v}else w=new C.aTe(t.r,s)}else w=new C.aNQ(m,s)
else w=D.dBR
return A.p(s,A.bI(n,A.eR(A.u(A.a([new C.b_w(m,l,s),A.C(w,1),new C.b_u(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.ax),B.j,s,s,new A.o(s,s,o,q,p,D.a56,B.o),s,r*2.05,s,s,B.bS,s,s,r)}}
C.b_w.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glU()
r=r.gFC()
w=new A.dN(q,r)
v=w.gLx()===0?12:w.gLx()
r=B.b.b5(B.m.t(r),2,"0")
q=(q<12?B.hK:B.k2)===B.hK?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.E(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.or,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bJ,D.aZd,B.db,D.aYk,B.db,D.aZi],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aH,A.E(A.a([A.W(B.yj,B.a9.k(0.9),s,s,12),B.db,A.C(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.p(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aC,s,s,s,s,s,s,D.aOc,s,s,s)}}
C.aTe.prototype={
B(d){var w=null
return A.p(w,A.aB(A.u(A.a([A.W(B.Ds,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eI(D.b29,D.dfO,this.c,A.dm(w,w,w,w,w,w,w,w,w,B.a9,w,w,w,w,w,new A.aD(B.a9.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Y,0,B.p),w,w,w),B.j,B.Bv,w,w,w,w,w,w,w,w,w,1/0)}}
C.b_u.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCz(B.DP,"YouTube",s===0,r,new C.dnw(u))
s=u.aCz(B.jF,"Device",s===1,r,new C.dnx(u))
w=r?"Power off":"Power on"
v=r?D.a33:D.aWi
return A.p(t,A.E(A.a([q,B.ai,s,B.ba,A.aN(t,t,t,t,A.W(v,r?B.bA:B.fB,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cW)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aC,t,t,t,t,t,t,D.aNF,t,t,t)},
aCz(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b7
else w=f?B.a9:B.at
v=f&&g?B.a9.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.C(A.az(!1,B.Q,!0,u,A.aH(!1,A.m(10),!0,new A.B(B.mv,A.u(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Y,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aUz.prototype={
B(d){return D.aB9}}
C.aNQ.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.ij,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.us("Serial",u.c),q=w.us("Model",u.d),p=w.us("Device ID",u.e),o=w.us("IMEI",u.r),n=w.us("MAC",u.f),m=w.us("OS",u.w+" "+u.x),l=w.us("Location",u.y+", "+u.z),k=w.us("Coordinates",B.l.aa(u.Q,4)+", "+B.l.aa(u.as,4)),j=w.us("Timezone",u.at)
u=u.ax
return A.eb(A.a([t,B.aH,s,B.ae,r,q,p,o,n,m,l,k,j,w.us("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bo,v,v,B.al,!1)},
us(d,e){var w=null
return new A.B(B.dl,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ce,A.d(e,w,w,w,w,w,w,D.d6d,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.Md.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ry.prototype={
gaTn(){var w=this.c
return w===D.ajW||w===D.ajX||w===D.RD||w===D.ajY}}
C.aaf.prototype={
U(){return new C.aT8(null,null)}}
C.aT8.prototype={
a_(){this.a3()
var w=A.bd(null,B.tV,null,1,null,this)
w.fE(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2Y()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cx(t,new A.o(t,t,t,t,t,new A.a7(B.bN,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cT,p,t)
w=B.c.k(0.92)
q=A.aB(new A.cE(new A.aZ(p,new A.bi(0.72,1,q),q.j("aZ<bm.T>")),!1,A.W(B.kQ,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oT
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aUE(s,t),r,q,A.au(t,A.p(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.N(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.au(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.au(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.at(B.a5,t,B.bb,B.t,s,t)}}
C.aUE.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.jF(u,B.I,new C.daI(this),B.cf,B.c_,!0,w,w,new C.daJ(this),w)
return new C.Hl(v,w)}}
C.Hl.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tI,B.X2],x.O),B.kQ)
break
case 1:w=new A.aI(A.a([B.Bv,D.aHc],x.O),B.mB)
break
case 2:w=new A.aI(A.a([D.aJ1,D.aGv],x.O),B.y0)
break
case 3:w=new A.aI(A.a([B.U,B.dx],x.O),B.DD)
break
case 4:w=new A.aI(A.a([B.aC,B.aO],x.O),B.lG)
break
default:w=u}v=w.a
return A.p(u,A.aB(A.W(w.b,B.a9.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aE,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.aqs.prototype={
p(){var w=this,v=w.aB$
if(v!=null)v.Z(0,w.gcK())
w.aB$=null
w.a4()},
bb(){this.bn()
this.bl()
this.cL()}}
C.aag.prototype={
U(){return new C.akJ()}}
C.akJ.prototype={
abG(d,e){var w,v=C.byT(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dR5(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.es7(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bRr(){var w,v=this
if(v.w)return
v.n(new C.d6q(v))
w=v.e
if(w!=null)v.abG(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.wT()
$.o8().pq(w,new C.d6z(u),!0)}catch(v){u.r=!0
u.f=!1}},
b6(d){var w,v=this
v.bh(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d6s(v))
w=v.e
w.toString
v.abG(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a3p,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.eR(A.aB(new A.B(new A.N(12,12,12,12),A.u(w,B.n,n,B.i,B.Y,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Ex(n,B.o6,w)],v)
if(o.f)w.push(A.eR(A.aB(new A.ab(28,28,D.aCA,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b7,B.r,1)
q=A.W(B.E_,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dR(0,A.az(!1,B.Q,!0,n,A.aH(!1,n,!0,A.aB(A.p(n,A.E(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Y,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.Md,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbRq(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.byT(o.a.d)
if(v!=null)w.push(A.au(8,A.iD(D.b_W,D.doy,new C.d6r(o),A.hf(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.h0,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.at(B.a5,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["q(pf)","~()","Ma(O)","pf(a_<@,@>)","Z(pf)","a_<q,@>(pf)","aE<~>()","M9(O)","lW<L>(O,ry?,r?)","ZC(O,L)","vt(O,ry?,r?)","Hl(O,as,dS?)"])
C.dMO.prototype={
$1(d){return new C.Ma(this.a,null)},
$S:z+2}
C.dMN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.C,l=A.aG(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.et,B.U],j):A.a([B.c,B.aB],j),h=A.a([new A.a5(0,B.G,B.a9.k(0.22),B.eF,32)],x.V),g=A.J(m?B.cd:B.a9.k(0.18),B.r,1),f=A.m(28),e=B.a9.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.p(n,D.aY3,B.j,n,n,new A.o(B.a9.k(0.18),n,A.J(B.a9.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.C(A.u(A.a([w,B.aH,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.p(n,A.E(A.a([e,B.eG,w,A.aN(n,n,n,n,A.W(B.cJ,m?B.at:B.d1,n,n,n),n,n,n,new C.dMJ(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.Ml,n,n,n)
e=A.ea(B.cR,A.a([new C.PM("YouTube",B.On,m,n),new C.PM("TikTok",B.mB,m,n),new C.PM("Instagram",B.y0,m,n),new C.PM("Facebook",B.DD,m,n)],v),B.cx,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c8:B.hJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bE
r=A.W(B.fA,B.a9.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aM
u=A.u(A.a([e,B.aR,A.aP(n,B.S,!0,n,!0,B.t,n,A.aQ(),w,n,n,n,n,n,2,A.bo(n,new A.b4(4,q,B.V),n,n,n,n,n,n,!0,new A.b4(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b4(4,A.m(16),B.VJ),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.ak,n,B.i,B.k,0,B.p)
e=A.iD(D.aY7,D.dsV,new C.dMK(d),A.hf(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.B(new A.N(12,0,12,12+l.f.d),A.cx(A.bI(f,A.u(A.a([j,new A.B(B.a_O,u,n),new A.B(D.aPK,A.E(A.a([e,B.ba,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a6:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dML(d),n,n),B.ai,A.dD(D.b1Q,D.dtM,new C.dMM(d,w),A.bn(B.a9,n,n,n,B.c,n,B.Md,n,new A.bk(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.ak,n,B.i,B.Y,0,B.p),B.ax),new A.o(n,n,g,k,h,new A.a7(B.au,B.aE,B.E,i,n,n),B.o),B.bq),n)},
$S:83}
C.dMJ.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dMK.prototype={
$0(){C.e2X()
$.RH().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dML.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dMM.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bz4.prototype={
$1(d){return C.e2Y(A.S(d,x.N,x.z))},
$S:z+3}
C.bz5.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.byX.prototype={
$1(d){return d.c},
$S:z+0}
C.byY.prototype={
$1(d){return d.r},
$S:z+0}
C.byZ.prototype={
$1(d){return d.f},
$S:z+0}
C.bz_.prototype={
$1(d){return d.at},
$S:z+0}
C.bz0.prototype={
$1(d){return d.c},
$S:z+0}
C.bz1.prototype={
$1(d){return d.r},
$S:z+0}
C.bz2.prototype={
$1(d){return d.f},
$S:z+0}
C.bz3.prototype={
$1(d){return d.at},
$S:z+0}
C.byW.prototype={
$1(d){return d.ad()},
$S:z+5}
C.byV.prototype={
$1(d){return B.b.b5(B.m.fV(d,16),2,"0").toUpperCase()},
$S:73}
C.d6h.prototype={
$0(){},
$S:0}
C.d6g.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6e.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d6f.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d6i.prototype={
$1(d){return new C.M9(this.a,null)},
$S:z+7}
C.d6n.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,B.r7,w,w,w,new C.d6m(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a1(u.d)+")",s=x.p
return A.E(A.a([v,A.C(A.ht(A.E(A.a([new A.pd(D.yO,e,g,36,B.yj,w),B.aL,A.C(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fG(B.f.gG(D.yO).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.Q,!0,w,A.aH(!1,w,!0,new A.B(B.bS,A.W(B.hV,A.ao(B.f.gG(D.yO),B.f.ga8(D.yO),e),w,w,28),w),B.cq,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbA2(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yO,w,g,B.eD,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:342}
C.d6m.prototype={
$0(){return A.a0(this.a,!1).eb()},
$S:0}
C.d6o.prototype={
$3(d,e,f){return new A.lW($.IF(),new C.d6l(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d6l.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.F4(d,k,x.Q)
w=w==null?k:w.glV()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a9.k(0.12)
s=A.m(12)
r=A.J(B.a9.k(0.35),B.r,1)
q=A.W(B.kQ,B.a9,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.IF().a
m=B.l.P(n+4,1,o)
t=A.a([A.p(k,A.E(A.a([q,B.ai,A.C(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dw,B.eU,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bI(s,new A.hO(1.7777777777777777,C.e2Z(new A.cM("fleet_master_"+r,x.W),!0,r,!0,j.gaTn(),"fleet_master"),k),B.ax),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.v9(0,B.t,k,B.F,k,k,k,k,!1,k,B.al,!1,A.a([new A.lj(new A.B(B.CG,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.oC(D.aNb,A.aId(new A.oA(new C.d6k(i,j),J.a1(i.d),!1,!0,!0,A.uU(),k),D.d_d),k)],w))},
$S:1876}
C.d6k.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.ZC(v,e,J.a1(w.d),new C.d6j(w,v),this.b,null)},
$S:z+9}
C.d6j.prototype={
$0(){return this.a.bzm(this.b)},
$S:0}
C.d6p.prototype={
$0(){this.a.XM()
return null},
$S:0}
C.d6b.prototype={
$0(){return A.a0(this.a,!1).eb()},
$S:0}
C.d6c.prototype={
$0(){C.a1L(this.a,$.byU)
return null},
$S:0}
C.d6d.prototype={
$3(d,e,f){return A.eG(new C.d6a(this.a,e))},
$S:z+10}
C.d6a.prototype={
$2(d,e){var w,v=null,u=B.l.P(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aB(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aR,new C.b_v(u,s.a.c,s.e,s.d,new C.d67(s),new C.d68(s),new C.d69(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.p2,v,v,B.al),v,v,v)},
$S:653}
C.d67.prototype={
$0(){var w=this.a.c
w.toString
C.a1L(w,$.byU)
return null},
$S:0}
C.d68.prototype={
$1(d){var w=this.a
return w.n(new C.d66(w,d))},
$S:31}
C.d66.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d69.prototype={
$0(){var w=this.a
return w.n(new C.d65(w))},
$S:0}
C.d65.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dnw.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dnx.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.daI.prototype={
$3(d,e,f){return new C.Hl(this.a.c,null)},
$S:z+11}
C.daJ.prototype={
$3(d,e,f){if(f==null)return e
return new A.at(B.a5,null,B.bb,B.t,A.a([new C.Hl(this.a.c,null),D.aBu],x.p),null)},
$C:"$3",
$R:3,
$S:532}
C.d6q.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6z.prototype={
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
w.abG(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fr(v,"load",new C.d6w(w),!1,u)
v=w.e
v.toString
A.fr(v,"error",new C.d6x(w),!1,u)
A.bH(B.k7,new C.d6y(w),x.H)
w=w.e
w.toString
return w},
$S:657}
C.d6w.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d6v(w))},
$S:26}
C.d6v.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d6x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d6u(w))},
$S:26}
C.d6u.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d6y.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d6t(w))},
$S:12}
C.d6t.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d6s.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d6r.prototype={
$0(){var w,v=C.byT(this.a.a.d)
if(v==null)return
w=window
w.toString
B.m5.FH(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dHW.prototype={
$1(d){var w,v,u,t,s=new A.qy([],[]).qk(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1877};(function aliases(){var w=C.aqs.prototype
w.b2Y=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.akI.prototype,"gaCN","bwF",1)
w(u,"gbxd","bxe",1)
w(u,"gbA2","bA3",6)
w(C.akJ.prototype,"gbRq","bRr",1)
v(C,"eNc","e2W",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.A7,[C.dMO,C.dMN,C.bz4,C.bz5,C.byX,C.byY,C.byZ,C.bz_,C.bz0,C.bz1,C.bz2,C.bz3,C.byW,C.byV,C.d6i,C.d6n,C.d6o,C.d6l,C.d6d,C.d68,C.daI,C.daJ,C.d6z,C.d6w,C.d6x,C.dHW])
v(A.a3e,[C.dMJ,C.dMK,C.dML,C.dMM,C.d6h,C.d6g,C.d6e,C.d6f,C.d6m,C.d6j,C.d6p,C.d6b,C.d6c,C.d67,C.d66,C.d69,C.d65,C.dnw,C.dnx,C.d6q,C.d6v,C.d6u,C.d6y,C.d6t,C.d6s,C.d6r])
v(A.ap,[C.PM,C.ZC,C.aRP,C.b_v,C.b_w,C.aTe,C.b_u,C.aUz,C.aNQ,C.aUE,C.Hl])
v(A.as,[C.pf,C.ry])
v(A.ad,[C.Ma,C.M9,C.aaf,C.aag])
v(A.af,[C.akI,C.aT7,C.aqs,C.akJ])
v(A.a3f,[C.d6k,C.d6a])
u(C.Md,A.aOL)
u(C.aT8,C.aqs)
w(C.aqs,A.dx)})()
A.e6o(b.typeUniverse,JSON.parse('{"Ma":{"ad":[],"r":[]},"ZC":{"ap":[],"r":[]},"M9":{"ad":[],"r":[]},"PM":{"ap":[],"r":[]},"akI":{"af":["Ma"]},"aRP":{"ap":[],"r":[]},"aT7":{"af":["M9"]},"b_v":{"ap":[],"r":[]},"b_w":{"ap":[],"r":[]},"aTe":{"ap":[],"r":[]},"b_u":{"ap":[],"r":[]},"aUz":{"ap":[],"r":[]},"aNQ":{"ap":[],"r":[]},"aaf":{"ad":[],"r":[]},"Hl":{"ap":[],"r":[]},"aT8":{"af":["aaf"]},"aUE":{"ap":[],"r":[]},"aag":{"ad":[],"r":[]},"akJ":{"af":["aag"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b2
return{V:w("aa<a5>"),O:w("aa<x>"),e:w("aa<pf>"),S:w("aa<fG>"),s:w("aa<q>"),p:w("aa<r>"),t:w("aa<L>"),X:w("ai<pf>"),a:w("ai<@>"),P:w("a_<q,@>"),f:w("a_<@,@>"),w:w("p9"),_:w("F1"),k:w("pf"),N:w("q"),Y:w("bi<a4>"),W:w("cM<q>"),J:w("lW<L>"),j:w("lW<ry?>"),E:w("pC<da>"),q:w("a_z"),z:w("@"),Q:w("as?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a33=new A.P(983224,"MaterialIcons",!1)
D.b02=new A.ac(D.a33,48,B.b7,null,null,null)
D.d5S=new A.M(!0,B.c8,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.deH=new A.z("Powered off",null,D.d5S,null,null,null,null,null,null,null,null,null)
D.bYa=w([D.b02,B.N,D.deH],x.p)
D.aKq=new A.eL(B.al,B.i,B.Y,B.n,null,B.p,null,0,D.bYa,null)
D.aB9=new A.cR(B.I,null,null,D.aKq,null)
D.cZT=new A.ab(18,18,B.WL,null)
D.aBu=new A.cR(B.I,null,null,D.cZT,null)
D.aCA=new A.fo(2,null,null,null,null,B.a6,null,null,null,null)
D.aGv=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aHc=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aJ1=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aN1=new A.N(0,3,0,3)
D.aNb=new A.N(10,0,10,88)
D.aNF=new A.N(12,6,12,10)
D.aOc=new A.N(14,8,14,6)
D.aPK=new A.N(20,8,20,20)
D.a0j=new A.N(8,6,15,8)
D.aWi=new A.P(983222,"MaterialIcons",!1)
D.aY3=new A.ac(B.kQ,26,B.a9,null,null,null)
D.aY7=new A.ac(B.a24,18,null,null,null,null)
D.aYk=new A.ac(B.pj,14,B.a6,null,null,null)
D.aWB=new A.P(983420,"MaterialIcons",!1)
D.aZd=new A.ac(D.aWB,14,B.a6,null,null,null)
D.aUC=new A.P(62895,"MaterialIcons",!1)
D.aZi=new A.ac(D.aUC,14,B.a6,null,null,null)
D.b_W=new A.ac(B.uC,16,B.a6,null,null,null)
D.b1Q=new A.ac(B.ic,20,null,null,null,null)
D.b29=new A.ac(B.hV,16,null,null,null,null)
D.c1d=w([B.aO,B.U],x.O)
D.a56=new A.a7(B.au,B.aE,B.E,D.c1d,null,null)
D.cSU=new A.aI("NGMY OS","14.2.1")
D.cRy=new A.aI("VirtualDroid","13.8.4")
D.cRx=new A.aI("NGMY OS","15.0.0")
D.cSq=new A.aI("VirtualDroid","14.1.2")
D.cRt=new A.aI("NGMY Tab OS","12.9.7")
D.cRr=new A.aI("NGMY OS","13.5.3")
D.cRg=new A.aI("VirtualDroid","15.2.0")
D.cRY=new A.aI("NGMY OS","14.8.1")
D.cSt=new A.aI("NGMY Tab OS","13.2.4")
D.cT6=new A.aI("VirtualDroid","12.6.9")
D.cR9=new A.aI("NGMY OS","16.0.1")
D.cQY=new A.aI("VirtualDroid","14.9.0")
D.cSL=new A.aI("NGMY Tab OS","14.0.3")
D.cRJ=new A.aI("NGMY OS","13.1.8")
D.cR7=new A.aI("VirtualDroid","13.4.5")
D.cRq=new A.aI("NGMY OS","15.3.2")
D.cSu=new A.aI("NGMY Tab OS","12.4.1")
D.cSO=new A.aI("VirtualDroid","16.1.0")
D.cRX=new A.aI("NGMY OS","14.4.6")
D.cSV=new A.aI("VirtualDroid","15.0.8")
D.c0k=w([D.cSU,D.cRy,D.cRx,D.cSq,D.cRt,D.cRr,D.cRg,D.cRY,D.cSt,D.cT6,D.cR9,D.cQY,D.cSL,D.cRJ,D.cR7,D.cRq,D.cSu,D.cSO,D.cRX,D.cSV],A.b2("aa<+(q,q)>"))
D.yO=w([B.a9,B.fO],x.O)
D.cVr=new A.f4(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cV_=new A.f4(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cUV=new A.f4(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cV3=new A.f4(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cUR=new A.f4(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cV5=new A.f4(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cVt=new A.f4(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cUS=new A.f4(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cUZ=new A.f4(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cV7=new A.f4(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cUQ=new A.f4(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cVl=new A.f4(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cVi=new A.f4(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cUY=new A.f4(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cVf=new A.f4(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cVe=new A.f4(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cUP=new A.f4(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cV2=new A.f4(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cVc=new A.f4(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cVh=new A.f4(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.ac7=w([D.cVr,D.cV_,D.cUV,D.cV3,D.cUR,D.cV5,D.cVt,D.cUS,D.cUZ,D.cV7,D.cUQ,D.cVl,D.cVi,D.cUY,D.cVf,D.cVe,D.cUP,D.cV2,D.cVc,D.cVh],A.b2("aa<+(q,q,a4,a4,q)>"))
D.cax=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajW=new C.Md(0,"youtube")
D.ajX=new C.Md(1,"tiktok")
D.RD=new C.Md(2,"instagram")
D.ajY=new C.Md(3,"facebook")
D.cJA=new C.Md(4,"other")
D.d_d=new A.he(4,10,8,0.52,null)
D.dg0=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d2L=new A.aW(D.dg0,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.t,null)
D.d6d=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dfO=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.doy=new A.z("Open in YouTube",null,B.jR,null,null,null,null,null,null,null,null,null)
D.dsV=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dtM=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dtV=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dBR=new C.aUz(null)})();(function staticFields(){$.e2V=20
$.aE7=null
$.byU=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eSj","IF",()=>A.aeG(0))
w($,"eSk","RH",()=>A.aeG(null))})()};
(a=>{a["yKHMx3H/a4ZmlWkNlFWG9yXUJ/8="]=a.current})($__dart_deferred_initializers__);