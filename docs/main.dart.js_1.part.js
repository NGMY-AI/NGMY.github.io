((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
euz(d,e){A.a3(d,!1).co(A.eI(new C.dvw(e),!0,null,x.H))},
a_Z(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_Z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qp()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ap()
s=new A.ak(new A.bc(n,B.aN,B.aC),t)
w=3
return A.b(A.dx(B.M,new C.dvv(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_Z)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e9E(r)
if(q==null){d.H(x.q).f.T(D.cS3)
w=1
break}w=4
return A.b(A.bF(B.il,null,x.H),$async$a_Z)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dM_=n
p=C.e9y(n)
n=$.Hq()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dzE(q)
d.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_Z,v)},
dM2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oC(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
L1(d){return C.e9H(d)},
e9H(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L1=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$L1)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cT(r)?10:11
break
case 10:k=J.eE(r,x.f)
k=A.dl(k,new C.btC(),k.$ti.j("G.E"),x.k)
j=A.S(k).j("ah<G.E>")
i=A.y(new A.ah(k,new C.btD(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dM4(q)
w=12
return A.b(C.L0(a3,p),$async$L1)
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
case 9:case 5:o=A.aJ(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dM2(A.U(n,x.N,x.z))
l=C.dM4(A.a([m],x.e))
w=21
return A.b(C.L0(a3,l),$async$L1)
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
case 18:case 14:q=C.e9F()
w=22
return A.b(C.L0(a3,q),$async$L1)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L1,v)},
dM4(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btu(),w).eD(0),u=new A.E(d,new C.btv(),w).eD(0),t=new A.E(d,new C.btw(),w).eD(0),s=new A.E(d,new C.btx(),w).eD(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dzF(null,q,u,t,v,s));++q}return r},
aAm(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L1(d),$async$aAm)
case 3:t=f
s=x.N
r=J.c7(t)
q=r.dk(t,new C.bty(),s).eD(0)
p=r.dk(t,new C.btz(),s).eD(0)
o=r.dk(t,new C.btA(),s).eD(0)
n=r.dk(t,new C.btB(),s).eD(0)
m=C.dzF(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L0(d,t),$async$aAm)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAm,v)},
L0(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L0)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.btt(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ap("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L0)
case 3:return A.h(null,v)}})
return A.i($async$L0,v)},
e9F(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dzF(w,w,t,s,u,r)
return q},
dzF(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jT(),h=d==null,g=D.a8x[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8x[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.E(p,new C.bts(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bb(B.l.h0(i.bF(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c1Z[w]
j=D.bTz[w]
return new C.oC("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bb(B.l.q(e+1),2,"0"),u,k,C.e9G(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a0())},
e9G(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bb(B.l.h0(d.bF(256),16),2,"0")
return B.h.fA(v)},
dvw:function dvw(d){this.a=d},
dvv:function dvv(d,e){this.a=d
this.b=e},
dvr:function dvr(d){this.a=d},
dvs:function dvs(d){this.a=d},
dvt:function dvt(d){this.a=d},
dvu:function dvu(d,e){this.a=d
this.b=e},
Oy:function Oy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oC:function oC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
btC:function btC(){},
btD:function btD(){},
btu:function btu(){},
btv:function btv(){},
btw:function btw(){},
btx:function btx(){},
bty:function bty(){},
btz:function btz(){},
btA:function btA(){},
btB:function btB(){},
btt:function btt(){},
bts:function bts(){},
L_:function L_(d,e){this.c=d
this.a=e},
aig:function aig(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cU0:function cU0(){},
cU_:function cU_(d,e){this.a=d
this.b=e},
cTY:function cTY(d){this.a=d},
cTZ:function cTZ(d,e){this.a=d
this.b=e},
cU1:function cU1(d){this.a=d},
cU6:function cU6(d){this.a=d},
cU5:function cU5(d){this.a=d},
cU7:function cU7(d,e){this.a=d
this.b=e},
cU4:function cU4(d,e,f){this.a=d
this.b=e
this.c=f},
cU3:function cU3(d,e){this.a=d
this.b=e},
cU2:function cU2(d,e){this.a=d
this.b=e},
cU8:function cU8(d){this.a=d},
Y8:function Y8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNG:function aNG(d,e){this.c=d
this.a=e},
KZ:function KZ(d,e){this.c=d
this.a=e},
aOU:function aOU(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cTV:function cTV(d){this.a=d},
cTW:function cTW(d){this.a=d},
cTX:function cTX(d){this.a=d},
cTU:function cTU(d,e){this.a=d
this.b=e},
cTR:function cTR(d){this.a=d},
cTS:function cTS(d){this.a=d},
cTQ:function cTQ(d,e){this.a=d
this.b=e},
cTT:function cTT(d){this.a=d},
cTP:function cTP(d){this.a=d},
aW_:function aW_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aW0:function aW0(d,e,f){this.c=d
this.d=e
this.a=f},
aP_:function aP_(d,e){this.c=d
this.a=e},
aVZ:function aVZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d8W:function d8W(d){this.a=d},
d8X:function d8X(d){this.a=d},
aQl:function aQl(d){this.a=d},
aJN:function aJN(d,e){this.c=d
this.a=e},
e9E(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e9D(v)
if(u!=null)return new C.qP(w,C.dzD(u,!1),D.ag6,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e9C(v)
if(t!=null)return new C.qP(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ag7,"TikTok",q)
s=C.e9B(w,v)
if(s!=null)return s
r=C.e9A(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qP(w,w,D.cyP,"Video",q)
return q},
e9B(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.an("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dw(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qP(d,"https://www.instagram.com/reel/"+w+u,D.Pv,t,null)}v=A.an("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dw(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qP(d,"https://www.instagram.com/p/"+w+u,D.Pv,t,null)}return null},
e9A(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qP(d,"https://www.facebook.com/plugins/video.php?href="+A.fg(2,d,B.bj,!1)+"&show_text=false&width=734",D.ag8,"Facebook",null)},
e9D(d){var w,v,u,t=[A.an(y.c,!0,!1,!1,!1),A.an("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.an("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dw(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e9C(d){var w,v=A.an("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dw(d)
if(v!=null)return v.b[1]
w=A.an("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dw(d)
return w==null?null:w.b[1]},
L2:function L2(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8d:function a8d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aOV:function aOV(d,e){var _=this
_.d=$
_.cu$=d
_.aH$=e
_.c=_.a=null},
aQq:function aQq(d,e){this.c=d
this.a=e},
cYO:function cYO(d){this.a=d},
cYP:function cYP(d){this.a=d},
Gg:function Gg(d,e){this.c=d
this.a=e},
anw:function anw(){},
dM3(d,e,f,g,h,i){return new C.a8e(i,f,h,e,g,d)},
etc(d){var w=window
w.toString
A.fS(w,"message",new C.drB(d),!1,x._)},
a8e:function a8e(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aih:function aih(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cU9:function cU9(d){this.a=d},
cUi:function cUi(d){this.a=d},
cUf:function cUf(d){this.a=d},
cUe:function cUe(d){this.a=d},
cUg:function cUg(d){this.a=d},
cUd:function cUd(d){this.a=d},
cUh:function cUh(d){this.a=d},
cUc:function cUc(d){this.a=d},
cUb:function cUb(d){this.a=d},
cUa:function cUa(d){this.a=d},
drB:function drB(d){this.a=d},
e9w(){var w,v,u
try{v=A.xX()
w=v.gv7(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cD(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dzD(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btq(d){var w=A.an(y.c,!0,!1,!1,!1).dw(d)
return w==null?null:w.b[1]},
dLZ(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e9x(d,e,f){var w,v,u=C.btq(d)
if(u!=null){if(f){w=C.e9w()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dLZ(C.dzD(u,e))}return C.dLZ(d)},
e9y(d){if(d<=4)return 0
return B.l.aC(d-1,4)*4},
e9z(d){var w
if($.Qp().a==null)return!1
w=$.Hq().a
return d>=w&&d<w+4},
dM1(){var w=$.aAl
if(w!=null)w.a9(0)
$.aAl=null
$.Hq().sv(0,0)},
dM0(){var w,v,u,t=$.Qp()
if(t.a==null)return
w=$.aAl
if(w!=null)w.a9(0)
v=$.dM_
if(v<=4){t=t.a
t.toString
C.dzE(t)
return}w=$.Hq()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dzE(t)},
dzE(d){var w=$.aAl
if(w!=null)w.a9(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aAl=A.dv(A.de(0,0,0,0,0,w),C.etr())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oy.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.L(B.a8.k(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.F(A.a([r,B.fB,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.h0,w,w,w)}}
C.oC.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L_.prototype={
W(){return new C.aig(A.a([],x.e))},
gdN(){return this.c}}
C.aig.prototype={
a_(){var w=this
w.a5()
$.Hq().av(0,w.gazr())
C.etc(w.gbr7())
w.a_b()},
bqx(){if(this.c!=null)this.n(new C.cU0())},
br8(){C.dM0()},
p(){$.Hq().Y(0,this.gazr())
C.dM1()
$.Qp().sv(0,null)
this.a3()},
a_b(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L1(t.a.c),$async$a_b)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cU_(t,s))
$.btr=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a_b,v)},
VZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cTY(t))
w=3
return A.b(C.aAm(t.a.c),$async$VZ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTZ(t,s))
$.btr=J.a4(t.d)
t.c.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$VZ,v)},
bta(d){var w=this.c
w.toString
A.a3(w,!1).co(A.eI(new C.cU1(d),!1,null,x.H))},
btP(){var w=this.c
w.toString
return C.a_Z(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.ft:B.bx,s=A.bW(!0,A.v(A.a([new A.I(D.Yu,new A.jb(new C.cU6(w),v),v),A.H(w.e?B.nD:new A.lu($.Qp(),new C.cU7(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.j,0,B.q),!1,B.ac,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.atS(B.a8,B.I7,B.mQ,D.dg7,w.e?v:new C.cU8(w)),v)}}
C.Y8.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.k(0.18),B.du,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8d(n,!0,!C.e9z(w),"Fold "+(B.l.aC(w,4)+1)+"/"+B.l.aC(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jw,B.nM,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.j,0,B.q),B.k,B.zY,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.T,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bU(p,A.f5(A.v(A.a([new C.aNG(o,u),A.H(n,1),A.t(u,A.F(A.a([A.W(B.CA,B.a8.k(0.85),u,u,9),D.cNM,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.j,0,u,u),B.k,B.ax,u,u,u,u,u,u,D.aH9,u,u,u)],w),B.n,u,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,u,u,new A.p(u,u,r,s,q,D.a1Q,B.p),u,u,u,u,B.hm,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a6)}}
C.aNG.prototype={
B(d){var w=null
return A.t(w,A.F(A.a([A.H(A.d(B.h.gaf(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tw,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.ax,w,w,w,w,w,w,B.Yh,w,w,w)}}
C.KZ.prototype={
W(){return new C.aOU()}}
C.aOU.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.ft:B.bx,t=A.aR(w,w,w,w,B.a0W,w,w,w,new C.cTV(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bW(!0,A.v(A.a([new A.I(D.Yu,A.F(A.a([t,A.H(new A.KO(A.F(A.a([A.H(new A.I(B.jn,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.T,!0,w,A.aL(!1,w,!0,new A.I(B.b9,A.W(B.hq,B.a8,w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cTW(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lu($.Qp(),new C.cTX(this),w,w,x.j),1)],r),B.n,w,B.i,B.j,0,B.q),!1,B.ac,!0,!0),w,!1,!1,w,w)}}
C.aW_.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.k(0.35),B.f7,28),new A.a9(0,B.H,B.A.k(0.45),B.de,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dM3(new A.d2(v+"_full_"+u,x.W),!1,u,!1,w.gaPo(),v+"_full")
w=v}else w=new C.aP_(t.r,s)}else w=new C.aJN(m,s)
else w=D.dnw
return A.t(s,A.bU(n,A.f5(A.v(A.a([new C.aW0(m,l,s),A.H(w,1),new C.aVZ(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,s,s,new A.p(s,s,o,q,p,D.a1Q,B.p),s,r*2.05,s,s,B.bV,s,s,r)}}
C.aW0.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dn(r)
r=A.hk(r)
w=new A.dJ(q,r)
v=w.gKo()===0?12:w.gKo()
r=B.b.bb(B.l.q(r),2,"0")
q=(q<12?B.hj:B.jj)===B.hj?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.no,s,s,s),B.aV,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bA,D.aSX,B.dT,D.aS6,B.dT,D.aT1],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.F(A.a([A.W(B.Ct,B.a8.k(0.9),s,s,12),B.dT,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.j,0,B.q),B.k,B.ax,s,s,s,s,s,s,D.aIe,s,s,s)}}
C.aP_.prototype={
B(d){var w=null
return A.t(w,A.aF(A.v(A.a([A.W(B.BR,B.e.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eP(D.aWB,D.d3m,this.c,A.e7(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aG(B.a8.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.k,B.zY,w,w,w,w,w,w,w,w,w,1/0)}}
C.aVZ.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azi(B.Cn,"YouTube",s===0,r,new C.d8W(u))
s=u.azi(B.kQ,"Device",s===1,r,new C.d8X(u))
w=r?"Power off":"Power on"
v=r?D.a09:D.aQ5
return A.t(t,A.F(A.a([q,B.ai,s,B.aV,A.aR(t,t,t,t,A.W(v,r?B.bR:B.hs,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dB)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.ax,t,t,t,t,t,t,D.aHP,t,t,t)},
azi(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bg
else w=f?B.a8:B.av
v=f&&g?B.a8.k(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aC(!1,B.T,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.o_,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aQl.prototype={
B(d){return D.aw9}}
C.aJN.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kl,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u2("Serial",u.c),q=w.u2("Model",u.d),p=w.u2("Device ID",u.e),o=w.u2("IMEI",u.r),n=w.u2("MAC",u.f),m=w.u2("OS",u.w+" "+u.x),l=w.u2("Location",u.y+", "+u.z),k=w.u2("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.u2("Timezone",u.at)
u=u.ax
return A.e6(A.a([t,B.aK,s,B.ad,r,q,p,o,n,m,l,k,j,w.u2("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.b9,v,v,B.an,!1)},
u2(d,e){var w=null
return new A.I(B.db,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cx,A.d(e,w,w,w,w,w,w,D.cVt,w,w,w)],x.p),B.G,w,B.i,B.j,0,B.q),w)}}
C.L2.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qP.prototype={
gaPo(){var w=this.c
return w===D.ag6||w===D.ag7||w===D.Pv||w===D.ag8}}
C.a8d.prototype={
W(){return new C.aOV(null,null)}}
C.aOV.prototype={
a_(){this.a5()
var w=A.bi(null,B.rL,null,1,null,this)
w.fR(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZE()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cy(t,new A.p(t,t,t,t,t,new A.ac(B.c2,B.bZ,B.E,A.a([B.M,B.A.k(0.55)],x.O),t,t),B.p),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cb(B.cX,p,t)
w=B.e.k(0.92)
q=A.aF(new A.cF(new A.aZ(p,new A.bg(0.72,1,q),q.j("aZ<bj.T>")),!1,A.W(B.jw,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nM
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQq(s,t),r,q,A.aA(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ay(B.ae,t,B.b6,B.t,s,t)}}
C.aQq.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lc(u,B.K,new C.cYO(this),B.bQ,!0,w,w,new C.cYP(this),w)
return new C.Gg(v,w)}}
C.Gg.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.mu,B.Un],x.O),B.jw)
break
case 1:w=new A.aM(A.a([B.zY,D.aBr],x.O),B.lK)
break
case 2:w=new A.aM(A.a([D.aD7,D.aAP],x.O),B.C0)
break
case 3:w=new A.aM(A.a([B.W,B.dH],x.O),B.C7)
break
case 4:w=new A.aM(A.a([B.ax,B.aL],x.O),B.of)
break
default:w=u}v=w.a
return A.t(u,A.aF(A.W(w.b,B.a8.k(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aB,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anw.prototype={
p(){var w=this,v=w.aH$
if(v!=null)v.Y(0,w.gd3())
w.aH$=null
w.a3()},
bj(){this.bv()
this.bs()
this.d4()}}
C.a8e.prototype={
W(){return new C.aih()}}
C.aih.prototype={
a9j(d,e){var w,v=C.btq(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dzD(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e9x(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bJy(){var w,v=this
if(v.w)return
v.n(new C.cU9(v))
w=v.e
if(w!=null)v.a9j(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.yY()
$.oc().qG(w,new C.cUi(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cUb(v))
w=v.e
w.toString
v.a9j(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0n,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.f5(A.aF(new A.I(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.IY(n,B.oq,w)],v)
if(o.f)w.push(A.f5(A.aF(new A.aa(28,28,D.axm,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bg,B.u,1)
q=A.W(B.My,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.ef(0,A.aC(!1,B.T,!0,n,A.aL(!1,n,!0,A.aF(A.t(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.Ks,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbJx(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.btq(o.a.d)
if(v!=null)w.push(A.aA(8,A.je(D.aUu,D.dbc,new C.cUa(o),A.j2(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.h0,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ay(B.ae,n,B.b6,B.t,w,n)}}
var z=a.updateTypes(["o(oC)","~()","L_(P)","oC(Z<@,@>)","a1(oC)","Z<o,@>(oC)","aE<~>()","KZ(P)","lu<K>(P,qP?,q?)","Y8(P,K)","ux(P,qP?,q?)","Gg(P,ao,dI?)"])
C.dvw.prototype={
$1(d){return new C.L_(this.a,null)},
$S:z+2}
C.dvv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e9,B.W],j):A.a([B.e,B.aw],j),h=A.a([new A.a9(0,B.H,B.a8.k(0.22),B.f7,32)],x.V),g=A.L(m?B.c8:B.a8.k(0.18),B.u,1),f=A.m(28),e=B.a8.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.t(n,D.aRP,B.k,n,n,new A.p(B.a8.k(0.18),n,A.L(B.a8.k(0.45),B.u,1),n,n,n,B.al),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.j,0,B.q),1)
j=A.t(n,A.F(A.a([e,B.eO,w,A.aR(n,n,n,n,A.W(B.cY,m?B.av:B.d1,n,n,n),n,n,n,new C.dvr(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a1,B.a5,B.E,j,n,n),B.p),n,n,n,n,B.Ky,n,n,n)
e=A.eD(B.cT,A.a([new C.Oy("YouTube",B.Mu,m,n),new C.Oy("TikTok",B.lK,m,n),new C.Oy("Instagram",B.C0,m,n),new C.Oy("Facebook",B.C7,m,n)],v),B.cL,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cd:B.iP,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bx
r=A.W(B.fw,B.a8.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aM
u=A.v(A.a([e,B.aS,A.aN(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.T9),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.a9,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.ar,n,B.i,B.j,0,B.q)
e=A.je(D.aRS,D.dfb,new C.dvs(d),A.j2(n,n,n,n,n,n,n,n,n,n,n,m?B.bs:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.R(12,0,12,12+l.f.d),A.cy(A.bU(f,A.v(A.a([j,new A.I(B.Y3,u,n),new A.I(D.aJE,A.F(A.a([e,B.aV,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dvt(d),n,n),B.ai,A.dG(D.aWi,D.dg_,new C.dvu(d,w),A.bv(B.a8,n,n,n,B.e,n,B.Ks,n,new A.by(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ac(B.aB,B.aI,B.E,i,n,n),B.p),B.bq),n)},
$S:91}
C.dvr.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dvs.prototype={
$0(){C.dM1()
$.Qp().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dvt.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dvu.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.btC.prototype={
$1(d){return C.dM2(A.U(d,x.N,x.z))},
$S:z+3}
C.btD.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btu.prototype={
$1(d){return d.c},
$S:z+0}
C.btv.prototype={
$1(d){return d.r},
$S:z+0}
C.btw.prototype={
$1(d){return d.f},
$S:z+0}
C.btx.prototype={
$1(d){return d.at},
$S:z+0}
C.bty.prototype={
$1(d){return d.c},
$S:z+0}
C.btz.prototype={
$1(d){return d.r},
$S:z+0}
C.btA.prototype={
$1(d){return d.f},
$S:z+0}
C.btB.prototype={
$1(d){return d.at},
$S:z+0}
C.btt.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bts.prototype={
$1(d){return B.b.bb(B.l.h0(d,16),2,"0").toUpperCase()},
$S:84}
C.cU0.prototype={
$0(){},
$S:0}
C.cU_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cTY.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cTZ.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cU1.prototype={
$1(d){return new C.KZ(this.a,null)},
$S:z+7}
C.cU6.prototype={
$4(d,e,f,g){var w=null,v=A.aR(w,w,w,w,B.x2,w,w,w,new C.cU5(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.F(A.a([v,A.H(A.fO(A.F(A.a([new A.oA(D.xt,e,g,36,B.Ct,w),B.aQ,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.h0(B.h.gN(D.xt).k(0.45+e*0.2),B.L,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.T,!0,w,A.aL(!1,w,!0,new A.I(B.bV,A.W(B.hq,A.am(B.h.gN(D.xt),B.h.gaf(D.xt),e),w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbtO(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.j,0,w,w),D.xt,w,g,B.fu,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:360}
C.cU5.prototype={
$0(){return A.a3(this.a,!1).eB()},
$S:0}
C.cU7.prototype={
$3(d,e,f){return new A.lu($.Hq(),new C.cU4(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cU4.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E3(d,k,x.Q)
w=w==null?k:w.glL()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.k(0.12)
s=A.m(12)
r=A.L(B.a8.k(0.35),B.u,1)
q=A.W(B.jw,B.a8,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Hq().a
m=B.m.U(n+4,1,o)
t=A.a([A.t(k,A.F(A.a([q,B.ai,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.di,B.fq,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bU(s,new A.j6(1.7777777777777777,C.dM3(new A.d2("fleet_master_"+r,x.W),!0,r,!0,j.gaPo(),"fleet_master"),k),B.aA),B.ad],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.ws(0,B.t,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kV(new A.I(B.Kn,A.v(u,B.G,k,B.i,B.j,0,B.q),k),k),new A.oM(D.aHk,A.aEs(new A.nX(new C.cU3(i,j),J.a4(i.d),!1,!0,!0,A.tX(),k),D.cOE),k)],w))},
$S:1788}
C.cU3.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Y8(v,e,J.a4(w.d),new C.cU2(w,v),this.b,null)},
$S:z+9}
C.cU2.prototype={
$0(){return this.a.bta(this.b)},
$S:0}
C.cU8.prototype={
$0(){this.a.VZ()
return null},
$S:0}
C.cTV.prototype={
$0(){return A.a3(this.a,!1).eB()},
$S:0}
C.cTW.prototype={
$0(){C.a_Z(this.a,$.btr)
return null},
$S:0}
C.cTX.prototype={
$3(d,e,f){return A.eG(new C.cTU(this.a,e))},
$S:z+10}
C.cTU.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aF(A.cv(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aS,new C.aW_(u,s.a.c,s.e,s.d,new C.cTR(s),new C.cTS(s),new C.cTT(s),t,v)],x.p),B.n,v,B.i,B.j,0,B.q),B.t,v,B.F,v,B.pG,v,v,B.an),v,v,v)},
$S:1789}
C.cTR.prototype={
$0(){var w=this.a.c
w.toString
C.a_Z(w,$.btr)
return null},
$S:0}
C.cTS.prototype={
$1(d){var w=this.a
return w.n(new C.cTQ(w,d))},
$S:30}
C.cTQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cTT.prototype={
$0(){var w=this.a
return w.n(new C.cTP(w))},
$S:0}
C.cTP.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d8W.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d8X.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cYO.prototype={
$3(d,e,f){return new C.Gg(this.a.c,null)},
$S:z+11}
C.cYP.prototype={
$3(d,e,f){if(f==null)return e
return new A.ay(B.ae,null,B.b6,B.t,A.a([new C.Gg(this.a.c,null),D.awt],x.p),null)},
$C:"$3",
$R:3,
$S:435}
C.cU9.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cUi.prototype={
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
w.a9j(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fS(v,"load",new C.cUf(w),!1,u)
v=w.e
v.toString
A.fS(v,"error",new C.cUg(w),!1,u)
A.bF(B.k_,new C.cUh(w),x.H)
w=w.e
w.toString
return w},
$S:407}
C.cUf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cUe(w))},
$S:42}
C.cUe.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cUg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cUd(w))},
$S:42}
C.cUd.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cUh.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cUc(w))},
$S:12}
C.cUc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cUb.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cUa.prototype={
$0(){var w,v=C.btq(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kp.KJ(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.drB.prototype={
$1(d){var w,v,u,t,s=new A.y1([],[]).zR(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1790};(function aliases(){var w=C.anw.prototype
w.aZE=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aig.prototype,"gazr","bqx",1)
w(u,"gbr7","br8",1)
w(u,"gbtO","btP",6)
w(C.aih.prototype,"gbJx","bJy",1)
v(C,"etr","dM0",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zg,[C.dvw,C.dvv,C.btC,C.btD,C.btu,C.btv,C.btw,C.btx,C.bty,C.btz,C.btA,C.btB,C.btt,C.bts,C.cU1,C.cU6,C.cU7,C.cU4,C.cTX,C.cTS,C.cYO,C.cYP,C.cUi,C.cUf,C.cUg,C.drB])
v(A.a1s,[C.dvr,C.dvs,C.dvt,C.dvu,C.cU0,C.cU_,C.cTY,C.cTZ,C.cU5,C.cU2,C.cU8,C.cTV,C.cTW,C.cTR,C.cTQ,C.cTT,C.cTP,C.d8W,C.d8X,C.cU9,C.cUe,C.cUd,C.cUh,C.cUc,C.cUb,C.cUa])
v(A.as,[C.Oy,C.Y8,C.aNG,C.aW_,C.aW0,C.aP_,C.aVZ,C.aQl,C.aJN,C.aQq,C.Gg])
v(A.ao,[C.oC,C.qP])
v(A.ad,[C.L_,C.KZ,C.a8d,C.a8e])
v(A.ae,[C.aig,C.aOU,C.anw,C.aih])
v(A.a1t,[C.cU3,C.cTU])
u(C.L2,A.aKI)
u(C.aOV,C.anw)
w(C.anw,A.dE)})()
A.dPB(b.typeUniverse,JSON.parse('{"L_":{"ad":[],"q":[]},"Y8":{"as":[],"q":[]},"KZ":{"ad":[],"q":[]},"Oy":{"as":[],"q":[]},"aig":{"ae":["L_"]},"aNG":{"as":[],"q":[]},"aOU":{"ae":["KZ"]},"aW_":{"as":[],"q":[]},"aW0":{"as":[],"q":[]},"aP_":{"as":[],"q":[]},"aVZ":{"as":[],"q":[]},"aQl":{"as":[],"q":[]},"aJN":{"as":[],"q":[]},"a8d":{"ad":[],"q":[]},"Gg":{"as":[],"q":[]},"aOV":{"ae":["a8d"]},"aQq":{"as":[],"q":[]},"a8e":{"ad":[],"q":[]},"aih":{"ae":["a8e"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a5<a9>"),O:w("a5<x>"),e:w("a5<oC>"),S:w("a5<h0>"),s:w("a5<o>"),p:w("a5<q>"),t:w("a5<K>"),X:w("ag<oC>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ow"),_:w("E0"),k:w("oC"),N:w("o"),Y:w("bg<a2>"),W:w("d2<o>"),J:w("lu<K>"),j:w("lu<qP?>"),E:w("tx<cY>"),q:w("Z0"),z:w("@"),Q:w("ao?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a09=new A.M(983224,"MaterialIcons",!1)
D.aUB=new A.ab(D.a09,48,B.bg,null,null,null)
D.d2e=new A.B("Powered off",null,B.ann,null,null,null,null,null,null,null,null,null)
D.bQE=w([D.aUB,B.O,D.d2e],x.p)
D.aEz=new A.ez(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bQE,null)
D.aw9=new A.d9(B.K,null,null,D.aEz,null)
D.cOf=new A.aa(18,18,B.U5,null)
D.awt=new A.d9(B.K,null,null,D.cOf,null)
D.axm=new A.fU(2,null,null,null,null,B.aa,null,null,null,null)
D.aAP=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBr=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aD7=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aH9=new A.R(0,3,0,3)
D.aHk=new A.R(10,0,10,88)
D.aHP=new A.R(12,6,12,10)
D.aIe=new A.R(14,8,14,6)
D.aJE=new A.R(20,8,20,20)
D.Yu=new A.R(8,6,15,8)
D.aQ5=new A.M(983222,"MaterialIcons",!1)
D.aRP=new A.ab(B.jw,26,B.a8,null,null,null)
D.aRS=new A.ab(B.a_b,18,null,null,null,null)
D.aS6=new A.ab(B.tw,14,B.aa,null,null,null)
D.aQq=new A.M(983420,"MaterialIcons",!1)
D.aSX=new A.ab(D.aQq,14,B.aa,null,null,null)
D.aOs=new A.M(62895,"MaterialIcons",!1)
D.aT1=new A.ab(D.aOs,14,B.aa,null,null,null)
D.aUu=new A.ab(B.tq,16,B.aa,null,null,null)
D.aWi=new A.ab(B.is,20,null,null,null,null)
D.aWB=new A.ab(B.hq,16,null,null,null,null)
D.bUm=w([B.aL,B.W],x.O)
D.a1Q=new A.ac(B.aB,B.aI,B.E,D.bUm,null,null)
D.cHJ=new A.aM("NGMY OS","14.2.1")
D.cGs=new A.aM("VirtualDroid","13.8.4")
D.cGr=new A.aM("NGMY OS","15.0.0")
D.cHf=new A.aM("VirtualDroid","14.1.2")
D.cGp=new A.aM("NGMY Tab OS","12.9.7")
D.cGn=new A.aM("NGMY OS","13.5.3")
D.cGc=new A.aM("VirtualDroid","15.2.0")
D.cGP=new A.aM("NGMY OS","14.8.1")
D.cHl=new A.aM("NGMY Tab OS","13.2.4")
D.cHV=new A.aM("VirtualDroid","12.6.9")
D.cG6=new A.aM("NGMY OS","16.0.1")
D.cFS=new A.aM("VirtualDroid","14.9.0")
D.cHA=new A.aM("NGMY Tab OS","14.0.3")
D.cGB=new A.aM("NGMY OS","13.1.8")
D.cG5=new A.aM("VirtualDroid","13.4.5")
D.cGm=new A.aM("NGMY OS","15.3.2")
D.cHm=new A.aM("NGMY Tab OS","12.4.1")
D.cHD=new A.aM("VirtualDroid","16.1.0")
D.cGO=new A.aM("NGMY OS","14.4.6")
D.cHK=new A.aM("VirtualDroid","15.0.8")
D.bTz=w([D.cHJ,D.cGs,D.cGr,D.cHf,D.cGp,D.cGn,D.cGc,D.cGP,D.cHl,D.cHV,D.cG6,D.cFS,D.cHA,D.cGB,D.cG5,D.cGm,D.cHm,D.cHD,D.cGO,D.cHK],A.b4("a5<+(o,o)>"))
D.xt=w([B.a8,B.fm],x.O)
D.cK4=new A.eU(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJD=new A.eU(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJy=new A.eU(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJH=new A.eU(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJu=new A.eU(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJJ=new A.eU(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cK6=new A.eU(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJv=new A.eU(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJC=new A.eU(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJL=new A.eU(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJt=new A.eU(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cJZ=new A.eU(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJW=new A.eU(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJB=new A.eU(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJT=new A.eU(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJS=new A.eU(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJs=new A.eU(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJG=new A.eU(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJQ=new A.eU(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJV=new A.eU(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8x=w([D.cK4,D.cJD,D.cJy,D.cJH,D.cJu,D.cJJ,D.cK6,D.cJv,D.cJC,D.cJL,D.cJt,D.cJZ,D.cJW,D.cJB,D.cJT,D.cJS,D.cJs,D.cJG,D.cJQ,D.cJV],A.b4("a5<+(o,o,a2,a2,o)>"))
D.c1Z=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ag6=new C.L2(0,"youtube")
D.ag7=new C.L2(1,"tiktok")
D.Pv=new C.L2(2,"instagram")
D.ag8=new C.L2(3,"facebook")
D.cyP=new C.L2(4,"other")
D.cNM=new A.aa(3,null,null,null)
D.cOE=new A.hF(4,10,8,0.52,null)
D.d3v=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cS3=new A.aW(D.d3v,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.t,null)
D.cVt=new A.O(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d3m=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dbc=new A.B("Open in YouTube",null,B.j7,null,null,null,null,null,null,null,null,null)
D.dfb=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dg_=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dg7=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dnw=new C.aQl(null)})();(function staticFields(){$.dM_=20
$.aAl=null
$.btr=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eyr","Hq",()=>A.acB(0))
w($,"eys","Qp",()=>A.acB(null))})()};
(a=>{a["iutds/4msStCr1/+R/LqWWARrx4="]=a.current})($__dart_deferred_initializers__);