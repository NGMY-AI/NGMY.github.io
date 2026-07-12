((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eki(d,e){A.a4(d,!1).cz(A.eE(new C.dmh(e),!0,null,x.H))},
a_4(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PB()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.ak(new A.ba(n,B.aL,B.az),t)
w=3
return A.b(A.dA(B.L,new C.dmg(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_4)
case 3:r=g
s.G$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e_z(r)
if(q==null){d.I(x.q).f.U(D.cNT)
w=1
break}w=4
return A.b(A.bL(B.id,null,x.H),$async$a_4)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dCu=n
p=C.e_t(n)
n=$.GO()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dqi(q)
d.I(x.q).f.U(A.bs(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_4,v)},
dCx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aY(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aY(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.om(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Ko(d){return C.e_C(d)},
e_C(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ko=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Ko)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a7(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aB(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eM(r,x.f)
k=A.ds(k,new C.bq6(),k.$ti.j("E.E"),x.k)
j=A.Q(k).j("aj<E.E>")
i=A.A(new A.aj(k,new C.bq7(),j),j.j("E.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dCz(q)
w=12
return A.b(C.Kn(a3,p),$async$Ko)
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
case 9:case 5:o=A.aL(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dCx(A.U(n,x.N,x.z))
l=C.dCz(A.a([m],x.e))
w=21
return A.b(C.Kn(a3,l),$async$Ko)
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
case 18:case 14:q=C.e_A()
w=22
return A.b(C.Kn(a3,q),$async$Ko)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ko,v)},
dCz(d){var w=A.Z(d).j("F<1,o>"),v=new A.F(d,new C.bpZ(),w).ev(0),u=new A.F(d,new C.bq_(),w).ev(0),t=new A.F(d,new C.bq0(),w).ev(0),s=new A.F(d,new C.bq1(),w).ev(0),r=A.bj(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dqj(null,q,u,t,v,s));++q}return r},
ayq(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$ayq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ko(d),$async$ayq)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.de(t,new C.bq2(),s).ev(0)
p=r.de(t,new C.bq3(),s).ev(0)
o=r.de(t,new C.bq4(),s).ev(0)
n=r.de(t,new C.bq5(),s).ev(0)
m=C.dqj(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kn(d,t),$async$ayq)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ayq,v)},
Kn(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Kn)
case 2:u=g
t=B.b.i(d)
s=J.b0(e,new C.bpY(),x.P)
s=A.A(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aw("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ao(s,null)),$async$Kn)
case 3:return A.h(null,v)}})
return A.i($async$Kn,v)},
e_A(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dqj(w,w,t,s,u,r)
return q},
dqj(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jM(),h=d==null,g=D.a7t[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7t[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.bpX(),A.Z(p).j("F<1,o>")).fC(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fC(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.hx(i.bH(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.bZt[w]
j=D.bQc[w]
return new C.om("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.e_B(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e_B(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hx(d.bH(256),16),2,"0")
return B.h.fC(v)},
dmh:function dmh(d){this.a=d},
dmg:function dmg(d,e){this.a=d
this.b=e},
dmc:function dmc(d){this.a=d},
dmd:function dmd(d){this.a=d},
dme:function dme(d){this.a=d},
dmf:function dmf(d,e){this.a=d
this.b=e},
NN:function NN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
om:function om(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bq6:function bq6(){},
bq7:function bq7(){},
bpZ:function bpZ(){},
bq_:function bq_(){},
bq0:function bq0(){},
bq1:function bq1(){},
bq2:function bq2(){},
bq3:function bq3(){},
bq4:function bq4(){},
bq5:function bq5(){},
bpY:function bpY(){},
bpX:function bpX(){},
Km:function Km(d,e){this.c=d
this.a=e},
agY:function agY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cMp:function cMp(){},
cMo:function cMo(d,e){this.a=d
this.b=e},
cMm:function cMm(d){this.a=d},
cMn:function cMn(d,e){this.a=d
this.b=e},
cMq:function cMq(d){this.a=d},
cMv:function cMv(d){this.a=d},
cMu:function cMu(d){this.a=d},
cMw:function cMw(d,e){this.a=d
this.b=e},
cMt:function cMt(d,e,f){this.a=d
this.b=e
this.c=f},
cMs:function cMs(d,e){this.a=d
this.b=e},
cMr:function cMr(d,e){this.a=d
this.b=e},
cMx:function cMx(d){this.a=d},
Xh:function Xh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLl:function aLl(d,e){this.c=d
this.a=e},
Kl:function Kl(d,e){this.c=d
this.a=e},
aMx:function aMx(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cMj:function cMj(d){this.a=d},
cMk:function cMk(d){this.a=d},
cMl:function cMl(d){this.a=d},
cMi:function cMi(d,e){this.a=d
this.b=e},
cMf:function cMf(d){this.a=d},
cMg:function cMg(d){this.a=d},
cMe:function cMe(d,e){this.a=d
this.b=e},
cMh:function cMh(d){this.a=d},
cMd:function cMd(d){this.a=d},
aTu:function aTu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aTv:function aTv(d,e,f){this.c=d
this.d=e
this.a=f},
aMD:function aMD(d,e){this.c=d
this.a=e},
aTt:function aTt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d0R:function d0R(d){this.a=d},
d0S:function d0S(d){this.a=d},
aNX:function aNX(d){this.a=d},
aHy:function aHy(d,e){this.c=d
this.a=e},
e_z(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e_y(v)
if(u!=null)return new C.qy(w,C.dqh(u,!1),D.af4,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e_x(v)
if(t!=null)return new C.qy(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.af5,"TikTok",q)
s=C.e_w(w,v)
if(s!=null)return s
r=C.e_v(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qy(w,w,D.cv7,"Video",q)
return q},
e_w(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dq(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qy(d,"https://www.instagram.com/reel/"+w+u,D.OC,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dq(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qy(d,"https://www.instagram.com/p/"+w+u,D.OC,t,null)}return null},
e_v(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qy(d,"https://www.facebook.com/plugins/video.php?href="+A.f9(2,d,B.bg,!1)+"&show_text=false&width=734",D.af6,"Facebook",null)},
e_y(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dq(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e_x(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dq(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dq(d)
return w==null?null:w.b[1]},
Kp:function Kp(d,e){this.a=d
this.b=e},
qy:function qy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a76:function a76(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aMy:function aMy(d,e){var _=this
_.d=$
_.cQ$=d
_.aQ$=e
_.c=_.a=null},
aO1:function aO1(d,e){this.c=d
this.a=e},
cRa:function cRa(d){this.a=d},
cRb:function cRb(d){this.a=d},
FI:function FI(d,e){this.c=d
this.a=e},
alT:function alT(){},
dCy(d,e,f,g,h,i){return new C.a77(i,f,h,e,g,d)},
ej_(d){var w=window
w.toString
A.hn(w,"message",new C.diD(d),!1,x._)},
a77:function a77(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agZ:function agZ(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cMy:function cMy(d){this.a=d},
cMH:function cMH(d){this.a=d},
cME:function cME(d){this.a=d},
cMD:function cMD(d){this.a=d},
cMF:function cMF(d){this.a=d},
cMC:function cMC(d){this.a=d},
cMG:function cMG(d){this.a=d},
cMB:function cMB(d){this.a=d},
cMA:function cMA(d){this.a=d},
cMz:function cMz(d){this.a=d},
diD:function diD(d){this.a=d},
e_r(){var w,v,u
try{v=A.xy()
w=v.guP(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dqh(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
bpV(d){var w=A.ap(y.c,!0,!1,!1,!1).dq(d)
return w==null?null:w.b[1]},
dCt(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e_s(d,e,f){var w,v,u=C.bpV(d)
if(u!=null){if(f){w=C.e_r()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dCt(C.dqh(u,e))}return C.dCt(d)},
e_t(d){if(d<=4)return 0
return B.l.aG(d-1,4)*4},
e_u(d){var w
if($.PB().a==null)return!1
w=$.GO().a
return d>=w&&d<w+4},
dCw(){var w=$.ayp
if(w!=null)w.ac(0)
$.ayp=null
$.GO().sv(0,0)},
dCv(){var w,v,u,t=$.PB()
if(t.a==null)return
w=$.ayp
if(w!=null)w.ac(0)
v=$.dCu
if(v<=4){t=t.a
t.toString
C.dqi(t)
return}w=$.GO()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dqi(t)},
dqi(d){var w=$.ayp
if(w!=null)w.ac(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.ayp=A.dL(A.dv(0,0,0,0,0,w),C.eje())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NN.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.N(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cg,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a0,0,w,w),B.k,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.hc,w,w,w)}}
C.om.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Km.prototype={
V(){return new C.agY(A.a([],x.e))},
gdQ(){return this.c}}
C.agY.prototype={
a_(){var w=this
w.a4()
$.GO().ar(0,w.gaxU())
C.ej_(w.gbot())
w.Zh()},
bnT(){if(this.c!=null)this.p(new C.cMp())},
bou(){C.dCv()},
q(){$.GO().Z(0,this.gaxU())
C.dCw()
$.PB().sv(0,null)
this.a6()},
Zh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ko(t.a.c),$async$Zh)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cMo(t,s))
$.bpW=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Zh,v)},
Vg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cMm(t))
w=3
return A.b(C.ayq(t.a.c),$async$Vg)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cMn(t,s))
$.bpW=J.a5(t.d)
t.c.I(x.q).f.U(A.bs(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vg,v)},
bqt(d){var w=this.c
w.toString
A.a4(w,!1).cz(A.eE(new C.cMq(d),!1,null,x.H))},
br5(){var w=this.c
w.toString
return C.a_4(w,J.a5(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bw,s=A.c1(!0,A.w(A.a([new A.J(D.Xu,new A.iS(new C.cMv(w),v),v),A.H(w.e?B.nk:new A.lk($.PB(),new C.cMw(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.as7(B.a8,B.Hr,B.mx,D.daC,w.e?v:new C.cMx(w)),v)}}
C.Xh.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.N(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dN,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a76(n,!0,!C.e_u(w),"Fold "+(B.l.aG(w,4)+1)+"/"+B.l.aG(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jS,B.ns,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aX,B.j,0,B.q),B.k,B.ze,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.V,!0,u,A.aQ(!1,t,!0,A.w(A.a([A.H(A.t(u,A.bX(p,A.fp(A.w(A.a([new C.aLl(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.BU,B.a8.l(0.85),u,u,9),D.cJJ,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aX,B.j,0,u,u),B.k,B.ax,u,u,u,u,u,D.aEP,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,u,u,new A.q(u,u,r,s,q,D.a0L,B.p),u,u,u,B.hf,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a9)}}
C.aLl.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gak(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.t1,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.ax,w,w,w,w,w,B.Xi,w,w,w)}}
C.Kl.prototype={
V(){return new C.aMx()}}
C.aMx.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bw,t=A.aS(w,w,w,w,B.a_S,w,w,w,new C.cMj(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c1(!0,A.w(A.a([new A.J(D.Xu,A.G(A.a([t,A.H(new A.Ka(A.G(A.a([A.H(new A.J(B.jM,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.V,!0,w,A.aQ(!1,w,!0,new A.J(B.b9,A.W(B.hi,B.a8,w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cMk(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a9)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.H(new A.lk($.PB(),new C.cMl(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aTu.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.fe,28),new A.a9(0,B.H,B.A.l(0.45),B.de,18)],x.V),o=A.N(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dCy(new A.dk(v+"_full_"+u,x.W),!1,u,!1,w.gaNG(),v+"_full")
w=v}else w=new C.aMD(t.r,s)}else w=new C.aHy(m,s)
else w=D.dhr
return A.t(s,A.bX(n,A.fp(A.w(A.a([new C.aTv(m,l,s),A.H(w,1),new C.aTt(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,s,s,new A.q(s,s,o,q,p,D.a0L,B.p),s,r*2.05,s,B.bI,s,s,r)}}
C.aTv.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dt(r)
r=A.hg(r)
w=new A.dF(q,r)
v=w.gJM()===0?12:w.gJM()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.ha:B.jb)===B.ha?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.n4,s,s,s),B.b_,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bB,D.aQ2,B.eZ,D.aPf,B.eZ,D.aQ7],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.BM,B.a8.l(0.9),s,s,12),B.eZ,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.ax,s,s,s,s,s,D.aFK,s,s,s)}}
C.aMD.prototype={
B(d){var w=null
return A.t(w,A.aG(A.w(A.a([A.W(B.Ba,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eN(D.aTx,D.cZq,this.c,A.ed(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aI(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.o,B.i,B.a0,0,B.q),w,w,w),B.k,B.ze,w,w,w,w,w,w,w,w,1/0)}}
C.aTt.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axL(B.BH,"YouTube",s===0,r,new C.d0R(u))
s=u.axL(B.ky,"Device",s===1,r,new C.d0S(u))
w=r?"Power off":"Power on"
v=r?D.a_4:D.aNe
return A.t(t,A.G(A.a([q,B.an,s,B.b_,A.aS(t,t,t,t,A.W(v,r?B.bP:B.hl,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.ax,t,t,t,t,t,D.aFq,t,t,t)},
axL(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bu
else w=f?B.a8:B.ay
v=f&&g?B.a8.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aJ(!1,B.V,!0,u,A.aQ(!1,A.m(10),!0,new A.J(B.nF,A.w(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a9),1)}}
C.aNX.prototype={
B(d){return D.auH}}
C.aHy.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k5,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tN("Serial",u.c),q=w.tN("Model",u.d),p=w.tN("Device ID",u.e),o=w.tN("IMEI",u.r),n=w.tN("MAC",u.f),m=w.tN("OS",u.w+" "+u.x),l=w.tN("Location",u.y+", "+u.z),k=w.tN("Coordinates",B.m.a5(u.Q,4)+", "+B.m.a5(u.as,4)),j=w.tN("Timezone",u.at)
u=u.ax
return A.ec(A.a([t,B.aK,s,B.ad,r,q,p,o,n,m,l,k,j,w.tN("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b9,v,v,B.am,!1)},
tN(d,e){var w=null
return new A.J(B.d4,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cs,A.d(e,w,w,w,w,w,w,D.cRa,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.Kp.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qy.prototype={
gaNG(){var w=this.c
return w===D.af4||w===D.af5||w===D.OC||w===D.af6}}
C.a76.prototype={
V(){return new C.aMy(null,null)}}
C.aMy.prototype={
a_(){this.a4()
var w=A.bu(null,B.vu,null,1,null,this)
w.j3(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aXH()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cE(t,new A.q(t,t,t,t,t,new A.ad(B.ci,B.ca,B.F,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bs),q=x.Y,p=u.d
p===$&&A.c()
p=A.co(B.dL,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cW(new A.b3(p,new A.bl(0.72,1,q),q.j("b3<bk.T>")),!1,A.W(B.jS,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.ns
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aO1(s,t),r,q,A.aB(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.T(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aB(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aB(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aC(B.ag,t,B.b5,B.t,s,t)}}
C.aO1.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kA(u,B.M,new C.cRa(this),B.cd,B.bN,!0,w,w,new C.cRb(this),w)
return new C.FI(v,w)}}
C.FI.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aP(A.a([B.r7,B.Tu],x.O),B.jS)
break
case 1:w=new A.aP(A.a([B.ze,D.azu],x.O),B.lt)
break
case 2:w=new A.aP(A.a([D.aB3,D.ayX],x.O),B.Bj)
break
case 3:w=new A.aP(A.a([B.W,B.dz],x.O),B.Br)
break
case 4:w=new A.aP(A.a([B.ax,B.aO],x.O),B.pD)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.q(u,u,u,u,u,new A.ad(B.aE,B.aI,B.F,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.alT.prototype={
q(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gds())
w.aQ$=null
w.a6()},
bo(){this.bF()
this.bD()
this.dt()}}
C.a77.prototype={
V(){return new C.agZ()}}
C.agZ.prototype={
a86(d,e){var w,v=C.bpV(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dqh(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e_s(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bGu(){var w,v=this
if(v.w)return
v.p(new C.cMy(v))
w=v.e
if(w!=null)v.a86(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aM()
u.d=w
try{$.GQ()
$.pT().uZ(w,new C.cMH(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cMA(v))
w=v.e
w.toString
v.a86(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_k,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fp(A.aG(new A.J(new A.T(12,12,12,12),A.w(w,B.o,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a2m(n,B.tR,w)],v)
if(o.f)w.push(A.fp(A.aG(new A.ab(28,28,D.avN,n),n,n,n),B.cW,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.N(B.bu,B.u,1)
q=A.W(B.LI,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.ep(0,A.aJ(!1,B.V,!0,n,A.aQ(!1,n,!0,A.aG(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a0,0,n,n),B.k,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,B.Av,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbGt(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a9)))}v=C.bpV(o.a.d)
if(v!=null)w.push(A.aB(8,A.jB(D.aRv,D.d5S,new C.cMz(o),A.iV(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hc,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aC(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(om)","~()","Km(O)","om(a_<@,@>)","a1(om)","a_<o,@>(om)","aD<~>()","Kl(O)","lk<K>(O,qy?,p?)","Xh(O,K)","u9(O,qy?,p?)","FI(O,ao,dK?)"])
C.dmh.prototype={
$1(d){return new C.Km(this.a,null)},
$S:z+2}
C.dmg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e2,B.W],j):A.a([B.e,B.aw],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.fe,32)],x.V),g=A.N(m?B.ch:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.av.l(m?0.18:0.08)],j)
e=A.t(n,D.aOY,B.k,n,n,new A.q(B.a8.l(0.18),n,A.N(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.w(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f6,w,A.aS(n,n,n,n,A.W(B.d7,m?B.ay:B.cW,n,n,n),n,n,n,new C.dmc(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.q(n,n,n,n,n,new A.ad(B.a5,B.a6,B.F,j,n,n),B.p),n,n,n,B.JJ,n,n,n)
e=A.ew(B.cP,A.a([new C.NN("YouTube",B.LF,m,n),new C.NN("TikTok",B.lt,m,n),new C.NN("Instagram",B.Bj,m,n),new C.NN("Facebook",B.Br,m,n)],v),B.cB,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.j7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bw
r=A.W(B.fd,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ch:B.aM
u=A.w(A.a([e,B.aQ,A.aN(n,B.Q,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.bm(n,new A.b9(4,q,B.Y),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aI(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.Sd),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.a7,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ac,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jB(D.aP0,D.d9I,new C.dmd(d),A.iV(n,n,n,n,n,n,n,n,n,n,n,m?B.br:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.T(12,0,12,12+l.f.d),A.cE(A.bX(f,A.w(A.a([j,new A.J(B.X4,u,n),new A.J(D.aH1,A.G(A.a([e,B.b_,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dme(d),n,n),B.an,A.dN(D.aTf,D.dav,new C.dmf(d,w),A.bz(B.a8,n,n,n,B.e,n,B.Av,n,new A.bE(A.m(14),B.Y),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aD),new A.q(n,n,g,k,h,new A.ad(B.aE,B.aI,B.F,i,n,n),B.p),B.bs),n)},
$S:89}
C.dmc.prototype={
$0(){A.a4(this.a,!1).R(null)
return null},
$S:0}
C.dmd.prototype={
$0(){C.dCw()
$.PB().sv(0,null)
A.a4(this.a,!1).R(null)},
$S:0}
C.dme.prototype={
$0(){A.a4(this.a,!1).R(null)
return null},
$S:0}
C.dmf.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a4(this.a,!1).R(w)
return null},
$S:0}
C.bq6.prototype={
$1(d){return C.dCx(A.U(d,x.N,x.z))},
$S:z+3}
C.bq7.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bpZ.prototype={
$1(d){return d.c},
$S:z+0}
C.bq_.prototype={
$1(d){return d.r},
$S:z+0}
C.bq0.prototype={
$1(d){return d.f},
$S:z+0}
C.bq1.prototype={
$1(d){return d.at},
$S:z+0}
C.bq2.prototype={
$1(d){return d.c},
$S:z+0}
C.bq3.prototype={
$1(d){return d.r},
$S:z+0}
C.bq4.prototype={
$1(d){return d.f},
$S:z+0}
C.bq5.prototype={
$1(d){return d.at},
$S:z+0}
C.bpY.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bpX.prototype={
$1(d){return B.b.bj(B.l.hx(d,16),2,"0").toUpperCase()},
$S:86}
C.cMp.prototype={
$0(){},
$S:0}
C.cMo.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cMm.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cMn.prototype={
$0(){var w=this.a,v=A.A(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cMq.prototype={
$1(d){return new C.Kl(this.a,null)},
$S:z+7}
C.cMv.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,D.aSt,w,w,w,new C.cMu(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a5(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fF(A.G(A.a([new A.ok(D.wP,e,g,36,B.BM,w),B.aS,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fN(B.h.gT(D.wP).l(0.45+e*0.2),B.K,10)],x.S),w,w),w,w,w),1),A.aJ(!1,B.V,!0,w,A.aQ(!1,w,!0,new A.J(B.bI,A.W(B.hi,A.aw(B.h.gT(D.wP),B.h.gak(D.wP),e),w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbr4(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a9)],s),B.o,w,B.i,B.j,0,w,w),D.wP,w,g,B.fB,0,e,f),1)],s),B.o,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:328}
C.cMu.prototype={
$0(){return A.a4(this.a,!1).eD()},
$S:0}
C.cMw.prototype={
$3(d,e,f){return new A.lk($.GO(),new C.cMt(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cMt.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dy(d,k,x.Q)
w=w==null?k:w.glB()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.N(B.a8.l(0.35),B.u,1)
q=A.W(B.jS,B.a8,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.GO().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dB,B.hd,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bX(s,new A.j1(1.7777777777777777,C.dCy(new A.dk("fleet_master_"+r,x.W),!0,r,!0,j.gaNG(),"fleet_master"),k),B.aD),B.ad],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.w3(0,B.t,k,B.E,k,k,k,k,!1,k,B.am,!1,A.a([new A.kL(new A.J(B.Jz,A.w(u,B.G,B.i,B.j,0,B.q),k),k),new A.ox(D.aF0,A.aCt(new A.nH(new C.cMs(i,j),J.a5(i.d),!1,!0,!0,A.tB(),k),D.cKw),k)],w))},
$S:1733}
C.cMs.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xh(v,e,J.a5(w.d),new C.cMr(w,v),this.b,null)},
$S:z+9}
C.cMr.prototype={
$0(){return this.a.bqt(this.b)},
$S:0}
C.cMx.prototype={
$0(){this.a.Vg()
return null},
$S:0}
C.cMj.prototype={
$0(){return A.a4(this.a,!1).eD()},
$S:0}
C.cMk.prototype={
$0(){C.a_4(this.a,$.bpW)
return null},
$S:0}
C.cMl.prototype={
$3(d,e,f){return A.eW(new C.cMi(this.a,e))},
$S:z+10}
C.cMi.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cw(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aQ,new C.aTu(u,s.a.c,s.e,s.d,new C.cMf(s),new C.cMg(s),new C.cMh(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),B.t,v,B.E,v,B.pg,v,v,B.am),v,v,v)},
$S:1734}
C.cMf.prototype={
$0(){var w=this.a.c
w.toString
C.a_4(w,$.bpW)
return null},
$S:0}
C.cMg.prototype={
$1(d){var w=this.a
return w.p(new C.cMe(w,d))},
$S:33}
C.cMe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cMh.prototype={
$0(){var w=this.a
return w.p(new C.cMd(w))},
$S:0}
C.cMd.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d0R.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d0S.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cRa.prototype={
$3(d,e,f){return new C.FI(this.a.c,null)},
$S:z+11}
C.cRb.prototype={
$3(d,e,f){if(f==null)return e
return new A.aC(B.ag,null,B.b5,B.t,A.a([new C.FI(this.a.c,null),D.auX],x.p),null)},
$C:"$3",
$R:3,
$S:223}
C.cMy.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cMH.prototype={
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
w.a86(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hn(v,"load",new C.cME(w),!1,u)
v=w.e
v.toString
A.hn(v,"error",new C.cMF(w),!1,u)
A.bL(B.kt,new C.cMG(w),x.H)
w=w.e
w.toString
return w},
$S:617}
C.cME.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cMD(w))},
$S:47}
C.cMD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cMF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cMC(w))},
$S:47}
C.cMC.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cMG.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cMB(w))},
$S:12}
C.cMB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cMA.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cMz.prototype={
$0(){var w,v=C.bpV(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kW.T0(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.diD.prototype={
$1(d){var w,v,u,t,s=new A.Ff([],[]).J_(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1735};(function aliases(){var w=C.alT.prototype
w.aXH=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.agY.prototype,"gaxU","bnT",1)
w(u,"gbot","bou",1)
w(u,"gbr4","br5",6)
w(C.agZ.prototype,"gbGt","bGu",1)
v(C,"eje","dCv",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yP,[C.dmh,C.dmg,C.bq6,C.bq7,C.bpZ,C.bq_,C.bq0,C.bq1,C.bq2,C.bq3,C.bq4,C.bq5,C.bpY,C.bpX,C.cMq,C.cMv,C.cMw,C.cMt,C.cMl,C.cMg,C.cRa,C.cRb,C.cMH,C.cME,C.cMF,C.diD])
v(A.a0u,[C.dmc,C.dmd,C.dme,C.dmf,C.cMp,C.cMo,C.cMm,C.cMn,C.cMu,C.cMr,C.cMx,C.cMj,C.cMk,C.cMf,C.cMe,C.cMh,C.cMd,C.d0R,C.d0S,C.cMy,C.cMD,C.cMC,C.cMG,C.cMB,C.cMA,C.cMz])
v(A.au,[C.NN,C.Xh,C.aLl,C.aTu,C.aTv,C.aMD,C.aTt,C.aNX,C.aHy,C.aO1,C.FI])
v(A.ao,[C.om,C.qy])
v(A.af,[C.Km,C.Kl,C.a76,C.a77])
v(A.ag,[C.agY,C.aMx,C.alT,C.agZ])
v(A.a0v,[C.cMs,C.cMi])
u(C.Kp,A.aIt)
u(C.aMy,C.alT)
w(C.alT,A.e_)})()
A.dG0(b.typeUniverse,JSON.parse('{"Km":{"af":[],"p":[]},"Xh":{"au":[],"p":[]},"Kl":{"af":[],"p":[]},"NN":{"au":[],"p":[]},"agY":{"ag":["Km"]},"aLl":{"au":[],"p":[]},"aMx":{"ag":["Kl"]},"aTu":{"au":[],"p":[]},"aTv":{"au":[],"p":[]},"aMD":{"au":[],"p":[]},"aTt":{"au":[],"p":[]},"aNX":{"au":[],"p":[]},"aHy":{"au":[],"p":[]},"a76":{"af":[],"p":[]},"FI":{"au":[],"p":[]},"aMy":{"ag":["a76"]},"aO1":{"au":[],"p":[]},"a77":{"af":[],"p":[]},"agZ":{"ag":["a77"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a3<a9>"),O:w("a3<x>"),e:w("a3<om>"),S:w("a3<fN>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ae<om>"),a:w("ae<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("og"),_:w("Dv"),k:w("om"),N:w("o"),Y:w("bl<a2>"),W:w("dk<o>"),J:w("lk<K>"),j:w("lk<qy?>"),E:w("xG<cP>"),q:w("Y7"),z:w("@"),Q:w("ao?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_4=new A.M(983224,"MaterialIcons",!1)
D.aRC=new A.aa(D.a_4,48,B.bu,null,null,null)
D.cYk=new A.B("Powered off",null,B.amc,null,null,null,null,null,null,null,null,null)
D.bNg=w([D.aRC,B.N,D.cYk],x.p)
D.aCk=new A.ex(B.am,B.i,B.a0,B.o,null,B.q,null,0,D.bNg,null)
D.auH=new A.dp(B.M,null,null,D.aCk,null)
D.cK9=new A.ab(18,18,B.Tc,null)
D.auX=new A.dp(B.M,null,null,D.cK9,null)
D.avN=new A.fZ(2,null,null,null,null,B.ab,null,null,null,null)
D.ayX=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.azu=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aB3=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aEP=new A.T(0,3,0,3)
D.aF0=new A.T(10,0,10,88)
D.aFq=new A.T(12,6,12,10)
D.aFK=new A.T(14,8,14,6)
D.aH1=new A.T(20,8,20,20)
D.Xu=new A.T(8,6,15,8)
D.aNe=new A.M(983222,"MaterialIcons",!1)
D.aOY=new A.aa(B.jS,26,B.a8,null,null,null)
D.aP0=new A.aa(B.Ze,18,null,null,null,null)
D.aPf=new A.aa(B.t1,14,B.ab,null,null,null)
D.aNx=new A.M(983420,"MaterialIcons",!1)
D.aQ2=new A.aa(D.aNx,14,B.ab,null,null,null)
D.aLA=new A.M(62895,"MaterialIcons",!1)
D.aQ7=new A.aa(D.aLA,14,B.ab,null,null,null)
D.aRv=new A.aa(B.rW,16,B.ab,null,null,null)
D.aSt=new A.aa(B.dC,20,B.ab,null,null,null)
D.aTf=new A.aa(B.iQ,20,null,null,null,null)
D.aTx=new A.aa(B.hi,16,null,null,null,null)
D.bR_=w([B.aO,B.W],x.O)
D.a0L=new A.ad(B.aE,B.aI,B.F,D.bR_,null,null)
D.cDI=new A.aP("NGMY OS","14.2.1")
D.cCr=new A.aP("VirtualDroid","13.8.4")
D.cCq=new A.aP("NGMY OS","15.0.0")
D.cDe=new A.aP("VirtualDroid","14.1.2")
D.cCo=new A.aP("NGMY Tab OS","12.9.7")
D.cCm=new A.aP("NGMY OS","13.5.3")
D.cCb=new A.aP("VirtualDroid","15.2.0")
D.cCO=new A.aP("NGMY OS","14.8.1")
D.cDk=new A.aP("NGMY Tab OS","13.2.4")
D.cDU=new A.aP("VirtualDroid","12.6.9")
D.cC4=new A.aP("NGMY OS","16.0.1")
D.cBU=new A.aP("VirtualDroid","14.9.0")
D.cDz=new A.aP("NGMY Tab OS","14.0.3")
D.cCA=new A.aP("NGMY OS","13.1.8")
D.cC3=new A.aP("VirtualDroid","13.4.5")
D.cCl=new A.aP("NGMY OS","15.3.2")
D.cDl=new A.aP("NGMY Tab OS","12.4.1")
D.cDC=new A.aP("VirtualDroid","16.1.0")
D.cCN=new A.aP("NGMY OS","14.4.6")
D.cDJ=new A.aP("VirtualDroid","15.0.8")
D.bQc=w([D.cDI,D.cCr,D.cCq,D.cDe,D.cCo,D.cCm,D.cCb,D.cCO,D.cDk,D.cDU,D.cC4,D.cBU,D.cDz,D.cCA,D.cC3,D.cCl,D.cDl,D.cDC,D.cCN,D.cDJ],A.b4("a3<+(o,o)>"))
D.wP=w([B.a8,B.f1],x.O)
D.cG_=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cFy=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cFt=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cFC=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cFp=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cFE=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cG1=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cFq=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cFx=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cFG=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cFo=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cFU=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cFR=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cFw=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cFO=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cFN=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cFn=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cFB=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cFL=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cFQ=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7t=w([D.cG_,D.cFy,D.cFt,D.cFC,D.cFp,D.cFE,D.cG1,D.cFq,D.cFx,D.cFG,D.cFo,D.cFU,D.cFR,D.cFw,D.cFO,D.cFN,D.cFn,D.cFB,D.cFL,D.cFQ],A.b4("a3<+(o,o,a2,a2,o)>"))
D.bZt=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.af4=new C.Kp(0,"youtube")
D.af5=new C.Kp(1,"tiktok")
D.OC=new C.Kp(2,"instagram")
D.af6=new C.Kp(3,"facebook")
D.cv7=new C.Kp(4,"other")
D.cJJ=new A.ab(3,null,null,null)
D.cKw=new A.i_(4,10,8,0.52,null)
D.cZz=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cNT=new A.b_(D.cZz,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.t,null)
D.cRa=new A.R(!0,B.e,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cZq=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d5S=new A.B("Open in YouTube",null,B.j_,null,null,null,null,null,null,null,null,null)
D.d9I=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dav=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.daC=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dhr=new C.aNX(null)})();(function staticFields(){$.dCu=20
$.ayp=null
$.bpW=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eo7","GO",()=>A.abx(0))
w($,"eo8","PB",()=>A.abx(null))})()};
(a=>{a["wfsAl6B0EF2uoOp+DfdKhn6ObKo="]=a.current})($__dart_deferred_initializers__);