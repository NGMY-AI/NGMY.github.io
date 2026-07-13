((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
euq(d,e){A.a3(d,!1).cv(A.eI(new C.dvk(e),!0,null,x.H))},
a01(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a01=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qr()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.am(new A.bb(n,B.aO,B.aC),t)
w=3
return A.b(A.dx(B.L,new C.dvj(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a01)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e9s(r)
if(q==null){d.H(x.q).f.U(D.cS3)
w=1
break}w=4
return A.b(A.bG(B.ik,null,x.H),$async$a01)
case 4:if(d.e==null){w=1
break}n=B.l.T(e,1,999)
$.dLN=n
p=C.e9m(n)
n=$.Hv()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dzs(q)
d.H(x.q).f.U(A.bo(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a01,v)},
dLQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
L6(d){return C.e9v(d)},
e9v(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$L6)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aA(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eB(r,x.f)
k=A.dh(k,new C.btM(),k.$ti.j("G.E"),x.k)
j=A.R(k).j("ai<G.E>")
i=A.z(new A.ai(k,new C.btN(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dLS(q)
w=12
return A.b(C.L5(a3,p),$async$L6)
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
n=B.I.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dLQ(A.U(n,x.N,x.z))
l=C.dLS(A.a([m],x.e))
w=21
return A.b(C.L5(a3,l),$async$L6)
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
case 18:case 14:q=C.e9t()
w=22
return A.b(C.L5(a3,q),$async$L6)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L6,v)},
dLS(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btE(),w).en(0),u=new A.E(d,new C.btF(),w).en(0),t=new A.E(d,new C.btG(),w).en(0),s=new A.E(d,new C.btH(),w).en(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dzt(null,q,u,t,v,s));++q}return r},
aAp(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L6(d),$async$aAp)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.di(t,new C.btI(),s).en(0)
p=r.di(t,new C.btJ(),s).en(0)
o=r.di(t,new C.btK(),s).en(0)
n=r.di(t,new C.btL(),s).en(0)
m=C.dzt(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L5(d,t),$async$aAp)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAp,v)},
L5(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L5)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.btD(),x.P)
s=A.z(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L5)
case 3:return A.h(null,v)}})
return A.i($async$L5,v)},
e9t(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dB(20,x.k)
for(w=0;w<20;++w)q[w]=C.dzt(w,w,t,s,u,r)
return q},
dzt(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jT(),h=d==null,g=D.a8F[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8F[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bI(256)
n=new A.E(p,new C.btC(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bI(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bb(B.l.h0(i.bI(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c1W[w]
j=D.bTv[w]
return new C.oC("vd_"+1000*Date.now()+"_"+e+"_"+i.bI(99999),"Device "+B.b.bb(B.l.q(e+1),2,"0"),u,k,C.e9u(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a0())},
e9u(d,e){var w,v=J.dB(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bb(B.l.h0(d.bI(256),16),2,"0")
return B.h.fA(v)},
dvk:function dvk(d){this.a=d},
dvj:function dvj(d,e){this.a=d
this.b=e},
dvf:function dvf(d){this.a=d},
dvg:function dvg(d){this.a=d},
dvh:function dvh(d){this.a=d},
dvi:function dvi(d,e){this.a=d
this.b=e},
OB:function OB(d,e,f,g){var _=this
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
btM:function btM(){},
btN:function btN(){},
btE:function btE(){},
btF:function btF(){},
btG:function btG(){},
btH:function btH(){},
btI:function btI(){},
btJ:function btJ(){},
btK:function btK(){},
btL:function btL(){},
btD:function btD(){},
btC:function btC(){},
L4:function L4(d,e){this.c=d
this.a=e},
aik:function aik(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cTV:function cTV(){},
cTU:function cTU(d,e){this.a=d
this.b=e},
cTS:function cTS(d){this.a=d},
cTT:function cTT(d,e){this.a=d
this.b=e},
cTW:function cTW(d){this.a=d},
cU0:function cU0(d){this.a=d},
cU_:function cU_(d){this.a=d},
cU1:function cU1(d,e){this.a=d
this.b=e},
cTZ:function cTZ(d,e,f){this.a=d
this.b=e
this.c=f},
cTY:function cTY(d,e){this.a=d
this.b=e},
cTX:function cTX(d,e){this.a=d
this.b=e},
cU2:function cU2(d){this.a=d},
Yb:function Yb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNM:function aNM(d,e){this.c=d
this.a=e},
L3:function L3(d,e){this.c=d
this.a=e},
aP_:function aP_(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cTP:function cTP(d){this.a=d},
cTQ:function cTQ(d){this.a=d},
cTR:function cTR(d){this.a=d},
cTO:function cTO(d,e){this.a=d
this.b=e},
cTL:function cTL(d){this.a=d},
cTM:function cTM(d){this.a=d},
cTK:function cTK(d,e){this.a=d
this.b=e},
cTN:function cTN(d){this.a=d},
cTJ:function cTJ(d){this.a=d},
aW8:function aW8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aW9:function aW9(d,e,f){this.c=d
this.d=e
this.a=f},
aP5:function aP5(d,e){this.c=d
this.a=e},
aW7:function aW7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d8J:function d8J(d){this.a=d},
d8K:function d8K(d){this.a=d},
aQs:function aQs(d){this.a=d},
aJS:function aJS(d,e){this.c=d
this.a=e},
e9s(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e9r(v)
if(u!=null)return new C.qU(w,C.dzr(u,!1),D.agf,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e9q(v)
if(t!=null)return new C.qU(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agg,"TikTok",q)
s=C.e9p(w,v)
if(s!=null)return s
r=C.e9o(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qU(w,w,D.cyL,"Video",q)
return q},
e9p(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qU(d,"https://www.instagram.com/reel/"+w+u,D.Pv,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qU(d,"https://www.instagram.com/p/"+w+u,D.Pv,t,null)}return null},
e9o(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qU(d,"https://www.facebook.com/plugins/video.php?href="+A.ff(2,d,B.bj,!1)+"&show_text=false&width=734",D.agh,"Facebook",null)},
e9r(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dA(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e9q(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dA(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
L7:function L7(d,e){this.a=d
this.b=e},
qU:function qU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8h:function a8h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aP0:function aP0(d,e){var _=this
_.d=$
_.cA$=d
_.aI$=e
_.c=_.a=null},
aQx:function aQx(d,e){this.c=d
this.a=e},
cYI:function cYI(d){this.a=d},
cYJ:function cYJ(d){this.a=d},
Gl:function Gl(d,e){this.c=d
this.a=e},
anB:function anB(){},
dLR(d,e,f,g,h,i){return new C.a8i(i,f,h,e,g,d)},
et3(d){var w=window
w.toString
A.fT(w,"message",new C.dro(d),!1,x._)},
a8i:function a8i(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ail:function ail(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cU3:function cU3(d){this.a=d},
cUc:function cUc(d){this.a=d},
cU9:function cU9(d){this.a=d},
cU8:function cU8(d){this.a=d},
cUa:function cUa(d){this.a=d},
cU7:function cU7(d){this.a=d},
cUb:function cUb(d){this.a=d},
cU6:function cU6(d){this.a=d},
cU5:function cU5(d){this.a=d},
cU4:function cU4(d){this.a=d},
dro:function dro(d){this.a=d},
e9k(){var w,v,u
try{v=A.y2()
w=v.gv5(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cF(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dzr(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btA(d){var w=A.ao(y.c,!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
dLM(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e9l(d,e,f){var w,v,u=C.btA(d)
if(u!=null){if(f){w=C.e9k()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dLM(C.dzr(u,e))}return C.dLM(d)},
e9m(d){if(d<=4)return 0
return B.l.aG(d-1,4)*4},
e9n(d){var w
if($.Qr().a==null)return!1
w=$.Hv().a
return d>=w&&d<w+4},
dLP(){var w=$.aAo
if(w!=null)w.ab(0)
$.aAo=null
$.Hv().sv(0,0)},
dLO(){var w,v,u,t=$.Qr()
if(t.a==null)return
w=$.aAo
if(w!=null)w.ab(0)
v=$.dLN
if(v<=4){t=t.a
t.toString
C.dzs(t)
return}w=$.Hv()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dzs(t)},
dzs(d){var w=$.aAo
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
default:w=null}$.aAo=A.dy(A.df(0,0,0,0,0,w),C.eti())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OB.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.L(B.ab.k(0.25),B.u,1),r=A.W(this.d,B.ab,w,w,14)
return A.t(w,A.F(A.a([r,B.fB,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hk,w,w,w)}}
C.oC.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L4.prototype={
W(){return new C.aik(A.a([],x.e))},
gdQ(){return this.c}}
C.aik.prototype={
a_(){var w=this
w.a5()
$.Hv().av(0,w.gazE())
C.et3(w.gbrv())
w.a_j()},
bqV(){if(this.c!=null)this.n(new C.cTV())},
brw(){C.dLO()},
p(){$.Hv().Y(0,this.gazE())
C.dLP()
$.Qr().sv(0,null)
this.a3()},
a_j(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L6(t.a.c),$async$a_j)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTU(t,s))
$.btB=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a_j,v)},
W3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cTS(t))
w=3
return A.b(C.aAp(t.a.c),$async$W3)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTT(t,s))
$.btB=J.a4(t.d)
t.c.H(x.q).f.U(A.bo(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W3,v)},
btA(d){var w=this.c
w.toString
A.a3(w,!1).cv(A.eI(new C.cTW(d),!1,null,x.H))},
bud(){var w=this.c
w.toString
return C.a01(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fr:B.bA,s=A.bV(!0,A.v(A.a([new A.H(D.YB,new A.jc(new C.cU0(w),v),v),A.I(w.e?B.nF:new A.lw($.Qr(),new C.cU1(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.j,0,B.q),!1,B.ac,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.atW(B.ab,B.I9,B.lN,D.dge,w.e?v:new C.cU2(w)),v)}}
C.Yb.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.ab.k(0.18),B.dx,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8h(n,!0,!C.e9n(w),"Fold "+(B.l.aG(w,4)+1)+"/"+B.l.aG(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.k8,B.nO,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.j,0,B.q),B.k,B.A3,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.T,!0,u,A.aL(!1,t,!0,A.v(A.a([A.I(A.t(u,A.bS(p,A.f7(A.v(A.a([new C.aNM(o,u),A.I(n,1),A.t(u,A.F(A.a([A.W(B.CF,B.ab.k(0.85),u,u,9),D.cNO,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aHf,u,u,u)],w),B.n,u,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,u,u,new A.p(u,u,r,s,q,D.a1W,B.p),u,u,u,u,B.hl,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.ab.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a5)}}
C.aNM.prototype={
B(d){var w=null
return A.t(w,A.F(A.a([A.I(A.d(B.h.gad(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.ty,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.Yo,w,w,w)}}
C.L3.prototype={
W(){return new C.aP_()}}
C.aP_.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fr:B.bA,t=A.aQ(w,w,w,w,B.a11,w,w,w,new C.cTP(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bV(!0,A.v(A.a([new A.H(D.YB,A.F(A.a([t,A.I(new A.KT(A.F(A.a([A.I(new A.H(B.jn,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.T,!0,w,A.aL(!1,w,!0,new A.H(B.bd,A.W(B.hp,B.ab,w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cTQ(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.I(new A.lw($.Qr(),new C.cTR(this),w,w,x.j),1)],r),B.n,w,B.i,B.j,0,B.q),!1,B.ac,!0,!0),w,!1,!1,w,w)}}
C.aW8.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.ab.k(0.35),B.f4,28),new A.a9(0,B.H,B.A.k(0.45),B.d2,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dLR(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaPC(),v+"_full")
w=v}else w=new C.aP5(t.r,s)}else w=new C.aJS(m,s)
else w=D.dnI
return A.t(s,A.bS(n,A.f7(A.v(A.a([new C.aW9(m,l,s),A.I(w,1),new C.aW7(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,s,s,new A.p(s,s,o,q,p,D.a1W,B.p),s,r*2.05,s,s,B.bX,s,s,r)}}
C.aW9.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dp(r)
r=A.hl(r)
w=new A.dK(q,r)
v=w.gKq()===0?12:w.gKq()
r=B.b.bb(B.l.q(r),2,"0")
q=(q<12?B.hh:B.ji)===B.hh?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nq,s,s,s),B.aV,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bD,D.aSV,B.dT,D.aS4,B.dT,D.aT_],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aJ,A.F(A.a([A.W(B.Cy,B.ab.k(0.9),s,s,12),B.dT,A.I(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aIj,s,s,s)}}
C.aP5.prototype={
B(d){var w=null
return A.t(w,A.aE(A.v(A.a([A.W(B.BY,B.e.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eJ(D.aWv,D.d3s,this.c,A.e6(w,w,w,w,w,w,w,w,w,B.ab,w,w,w,w,w,new A.aH(B.ab.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.k,B.A3,w,w,w,w,w,w,w,w,w,1/0)}}
C.aW7.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azv(B.Cs,"YouTube",s===0,r,new C.d8J(u))
s=u.azv(B.kP,"Device",s===1,r,new C.d8K(u))
w=r?"Power off":"Power on"
v=r?D.a0e:D.aQ4
return A.t(t,A.F(A.a([q,B.ah,s,B.aV,A.aQ(t,t,t,t,A.W(v,r?B.bT:B.hs,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dC)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aHV,t,t,t)},
azv(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.be
else w=f?B.ab:B.au
v=f&&g?B.ab.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aC(!1,B.T,!0,u,A.aL(!1,A.m(10),!0,new A.H(B.o0,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a5),1)}}
C.aQs.prototype={
B(d){return D.awh}}
C.aJS.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kl,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u0("Serial",u.c),q=w.u0("Model",u.d),p=w.u0("Device ID",u.e),o=w.u0("IMEI",u.r),n=w.u0("MAC",u.f),m=w.u0("OS",u.w+" "+u.x),l=w.u0("Location",u.y+", "+u.z),k=w.u0("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.u0("Timezone",u.at)
u=u.ax
return A.e1(A.a([t,B.aJ,s,B.ad,r,q,p,o,n,m,l,k,j,w.u0("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bd,v,v,B.am,!1)},
u0(d,e){var w=null
return new A.H(B.d6,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cz,A.d(e,w,w,w,w,w,w,D.cVu,w,w,w)],x.p),B.G,w,B.i,B.j,0,B.q),w)}}
C.L7.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qU.prototype={
gaPC(){var w=this.c
return w===D.agf||w===D.agg||w===D.Pv||w===D.agh}}
C.a8h.prototype={
W(){return new C.aP0(null,null)}}
C.aP0.prototype={
a_(){this.a5()
var w=A.bg(null,B.rO,null,1,null,this)
w.fR(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZT()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cA(t,new A.p(t,t,t,t,t,new A.ac(B.bZ,B.bR,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.bs),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cN,p,t)
w=B.e.k(0.92)
q=A.aE(new A.cK(new A.aZ(p,new A.bi(0.72,1,q),q.j("aZ<bk.T>")),!1,A.W(B.k8,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nO
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQx(s,t),r,q,A.aA(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.S(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ay(B.ae,t,B.b7,B.r,s,t)}}
C.aQx.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.ld(u,B.K,new C.cYI(this),B.bS,!0,w,w,new C.cYJ(this),w)
return new C.Gl(v,w)}}
C.Gl.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.mu,B.Ur],x.O),B.k8)
break
case 1:w=new A.aN(A.a([B.A3,D.aBA],x.O),B.lK)
break
case 2:w=new A.aN(A.a([D.aDi,D.aB_],x.O),B.C6)
break
case 3:w=new A.aN(A.a([B.W,B.dH],x.O),B.Ce)
break
case 4:w=new A.aN(A.a([B.aw,B.aM],x.O),B.oi)
break
default:w=u}v=w.a
return A.t(u,A.aE(A.W(w.b,B.ab.k(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aB,B.aH,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anB.prototype={
p(){var w=this,v=w.aI$
if(v!=null)v.Y(0,w.gd9())
w.aI$=null
w.a3()},
bj(){this.bv()
this.bs()
this.da()}}
C.a8i.prototype={
W(){return new C.ail()}}
C.ail.prototype={
a9q(d,e){var w,v=C.btA(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dzr(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e9l(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bJZ(){var w,v=this
if(v.w)return
v.n(new C.cU3(v))
w=v.e
if(w!=null)v.a9q(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.z3()
$.ob().qF(w,new C.cUc(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cU5(v))
w=v.e
w.toString
v.a9q(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0s,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.f7(A.aE(new A.H(new A.S(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.J2(n,B.ou,w)],v)
if(o.f)w.push(A.f7(A.aE(new A.aa(28,28,D.axx,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.be,B.u,1)
q=A.W(B.My,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.eg(0,A.aC(!1,B.T,!0,n,A.aL(!1,n,!0,A.aE(A.t(n,A.F(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.Kr,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbJY(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a5)))}v=C.btA(o.a.d)
if(v!=null)w.push(A.aA(8,A.jf(D.aUr,D.dbl,new C.cU4(o),A.j3(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hk,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ay(B.ae,n,B.b7,B.r,w,n)}}
var z=a.updateTypes(["o(oC)","~()","L4(P)","oC(Z<@,@>)","a0(oC)","Z<o,@>(oC)","aD<~>()","L3(P)","lw<K>(P,qU?,q?)","Yb(P,K)","uE(P,qU?,q?)","Gl(P,ap,dJ?)"])
C.dvk.prototype={
$1(d){return new C.L4(this.a,null)},
$S:z+2}
C.dvj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e9,B.W],j):A.a([B.e,B.ax],j),h=A.a([new A.a9(0,B.H,B.ab.k(0.22),B.f4,32)],x.V),g=A.L(m?B.c3:B.ab.k(0.18),B.u,1),f=A.m(28),e=B.ab.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.t(n,D.aRN,B.k,n,n,new A.p(B.ab.k(0.18),n,A.L(B.ab.k(0.45),B.u,1),n,n,n,B.an),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.j,0,B.q),1)
j=A.t(n,A.F(A.a([e,B.f6,w,A.aQ(n,n,n,n,A.W(B.cX,m?B.au:B.d_,n,n,n),n,n,n,new C.dvf(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a3,B.a6,B.E,j,n,n),B.p),n,n,n,n,B.Kx,n,n,n)
e=A.eF(B.cU,A.a([new C.OB("YouTube",B.Mu,m,n),new C.OB("TikTok",B.lK,m,n),new C.OB("Instagram",B.C6,m,n),new C.OB("Facebook",B.Ce,m,n)],v),B.cL,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ce:B.iO,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bA
r=A.W(B.fw,B.ab.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c3:B.aN
u=A.v(A.a([e,B.aQ,A.aM(n,B.R,!0,n,!0,B.r,n,A.aO(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Td),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.a9,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.af,n,n,n,n)],v),B.ar,n,B.i,B.j,0,B.q)
e=A.jf(D.aRQ,D.dfi,new C.dvg(d),A.j3(n,n,n,n,n,n,n,n,n,n,n,m?B.br:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.S(12,0,12,12+l.f.d),A.cA(A.bS(f,A.v(A.a([j,new A.H(B.Ya,u,n),new A.H(D.aJH,A.F(A.a([e,B.aV,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dvh(d),n,n),B.ah,A.dG(D.aWd,D.dg6,new C.dvi(d,w),A.bu(B.ab,n,n,n,B.e,n,B.Kr,n,new A.bw(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ac(B.aB,B.aH,B.E,i,n,n),B.p),B.bs),n)},
$S:84}
C.dvf.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.dvg.prototype={
$0(){C.dLP()
$.Qr().sv(0,null)
A.a3(this.a,!1).P(null)},
$S:0}
C.dvh.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.dvi.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).P(w)
return null},
$S:0}
C.btM.prototype={
$1(d){return C.dLQ(A.U(d,x.N,x.z))},
$S:z+3}
C.btN.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btE.prototype={
$1(d){return d.c},
$S:z+0}
C.btF.prototype={
$1(d){return d.r},
$S:z+0}
C.btG.prototype={
$1(d){return d.f},
$S:z+0}
C.btH.prototype={
$1(d){return d.at},
$S:z+0}
C.btI.prototype={
$1(d){return d.c},
$S:z+0}
C.btJ.prototype={
$1(d){return d.r},
$S:z+0}
C.btK.prototype={
$1(d){return d.f},
$S:z+0}
C.btL.prototype={
$1(d){return d.at},
$S:z+0}
C.btD.prototype={
$1(d){return d.a9()},
$S:z+5}
C.btC.prototype={
$1(d){return B.b.bb(B.l.h0(d,16),2,"0").toUpperCase()},
$S:90}
C.cTV.prototype={
$0(){},
$S:0}
C.cTU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cTS.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cTT.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cTW.prototype={
$1(d){return new C.L3(this.a,null)},
$S:z+7}
C.cU0.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,B.qb,w,w,w,new C.cU_(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.F(A.a([v,A.I(A.fP(A.F(A.a([new A.oA(D.xt,e,g,36,B.Cy,w),B.aS,A.I(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.h1(B.h.gN(D.xt).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.T,!0,w,A.aL(!1,w,!0,new A.H(B.bX,A.W(B.hp,A.an(B.h.gN(D.xt),B.h.gad(D.xt),e),w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbuc(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.j,0,w,w),D.xt,w,g,B.fb,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:330}
C.cU_.prototype={
$0(){return A.a3(this.a,!1).eD()},
$S:0}
C.cU1.prototype={
$3(d,e,f){return new A.lw($.Hv(),new C.cTZ(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cTZ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E7(d,k,x.Q)
w=w==null?k:w.glK()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ab.k(0.12)
s=A.m(12)
r=A.L(B.ab.k(0.35),B.u,1)
q=A.W(B.k8,B.ab,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Hv().a
m=B.m.T(n+4,1,o)
t=A.a([A.t(k,A.F(A.a([q,B.ah,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dq,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bS(s,new A.j7(1.7777777777777777,C.dLR(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaPC(),"fleet_master"),k),B.aA),B.ad],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wy(0,B.r,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.kW(new A.H(B.Bh,A.v(u,B.G,k,B.i,B.j,0,B.q),k),k),new A.oN(D.aHq,A.aEv(new A.nX(new C.cTY(i,j),J.a4(i.d),!1,!0,!0,A.u2(),k),D.cOE),k)],w))},
$S:1793}
C.cTY.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Yb(v,e,J.a4(w.d),new C.cTX(w,v),this.b,null)},
$S:z+9}
C.cTX.prototype={
$0(){return this.a.btA(this.b)},
$S:0}
C.cU2.prototype={
$0(){this.a.W3()
return null},
$S:0}
C.cTP.prototype={
$0(){return A.a3(this.a,!1).eD()},
$S:0}
C.cTQ.prototype={
$0(){C.a01(this.a,$.btB)
return null},
$S:0}
C.cTR.prototype={
$3(d,e,f){return A.eQ(new C.cTO(this.a,e))},
$S:z+10}
C.cTO.prototype={
$2(d,e){var w,v=null,u=B.m.T(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aE(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aQ,new C.aW8(u,s.a.c,s.e,s.d,new C.cTL(s),new C.cTM(s),new C.cTN(s),t,v)],x.p),B.n,v,B.i,B.j,0,B.q),B.r,v,B.F,v,B.pI,v,v,B.am),v,v,v)},
$S:1794}
C.cTL.prototype={
$0(){var w=this.a.c
w.toString
C.a01(w,$.btB)
return null},
$S:0}
C.cTM.prototype={
$1(d){var w=this.a
return w.n(new C.cTK(w,d))},
$S:32}
C.cTK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cTN.prototype={
$0(){var w=this.a
return w.n(new C.cTJ(w))},
$S:0}
C.cTJ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d8J.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d8K.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cYI.prototype={
$3(d,e,f){return new C.Gl(this.a.c,null)},
$S:z+11}
C.cYJ.prototype={
$3(d,e,f){if(f==null)return e
return new A.ay(B.ae,null,B.b7,B.r,A.a([new C.Gl(this.a.c,null),D.awC],x.p),null)},
$C:"$3",
$R:3,
$S:579}
C.cU3.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cUc.prototype={
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
w.a9q(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fT(v,"load",new C.cU9(w),!1,u)
v=w.e
v.toString
A.fT(v,"error",new C.cUa(w),!1,u)
A.bG(B.jZ,new C.cUb(w),x.H)
w=w.e
w.toString
return w},
$S:656}
C.cU9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cU8(w))},
$S:41}
C.cU8.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cUa.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cU7(w))},
$S:41}
C.cU7.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cUb.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cU6(w))},
$S:12}
C.cU6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cU5.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cU4.prototype={
$0(){var w,v=C.btA(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kq.KL(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dro.prototype={
$1(d){var w,v,u,t,s=new A.y7([],[]).zS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1795};(function aliases(){var w=C.anB.prototype
w.aZT=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aik.prototype,"gazE","bqV",1)
w(u,"gbrv","brw",1)
w(u,"gbuc","bud",6)
w(C.ail.prototype,"gbJY","bJZ",1)
v(C,"eti","dLO",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zm,[C.dvk,C.dvj,C.btM,C.btN,C.btE,C.btF,C.btG,C.btH,C.btI,C.btJ,C.btK,C.btL,C.btD,C.btC,C.cTW,C.cU0,C.cU1,C.cTZ,C.cTR,C.cTM,C.cYI,C.cYJ,C.cUc,C.cU9,C.cUa,C.dro])
v(A.a1v,[C.dvf,C.dvg,C.dvh,C.dvi,C.cTV,C.cTU,C.cTS,C.cTT,C.cU_,C.cTX,C.cU2,C.cTP,C.cTQ,C.cTL,C.cTK,C.cTN,C.cTJ,C.d8J,C.d8K,C.cU3,C.cU8,C.cU7,C.cUb,C.cU6,C.cU5,C.cU4])
v(A.as,[C.OB,C.Yb,C.aNM,C.aW8,C.aW9,C.aP5,C.aW7,C.aQs,C.aJS,C.aQx,C.Gl])
v(A.ap,[C.oC,C.qU])
v(A.ad,[C.L4,C.L3,C.a8h,C.a8i])
v(A.ae,[C.aik,C.aP_,C.anB,C.ail])
v(A.a1w,[C.cTY,C.cTO])
u(C.L7,A.aKN)
u(C.aP0,C.anB)
w(C.anB,A.dI)})()
A.dPp(b.typeUniverse,JSON.parse('{"L4":{"ad":[],"q":[]},"Yb":{"as":[],"q":[]},"L3":{"ad":[],"q":[]},"OB":{"as":[],"q":[]},"aik":{"ae":["L4"]},"aNM":{"as":[],"q":[]},"aP_":{"ae":["L3"]},"aW8":{"as":[],"q":[]},"aW9":{"as":[],"q":[]},"aP5":{"as":[],"q":[]},"aW7":{"as":[],"q":[]},"aQs":{"as":[],"q":[]},"aJS":{"as":[],"q":[]},"a8h":{"ad":[],"q":[]},"Gl":{"as":[],"q":[]},"aP0":{"ae":["a8h"]},"aQx":{"as":[],"q":[]},"a8i":{"ad":[],"q":[]},"ail":{"ae":["a8i"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a5<a9>"),O:w("a5<x>"),e:w("a5<oC>"),S:w("a5<h1>"),s:w("a5<o>"),p:w("a5<q>"),t:w("a5<K>"),X:w("ag<oC>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ow"),_:w("E4"),k:w("oC"),N:w("o"),Y:w("bi<a2>"),W:w("d3<o>"),J:w("lw<K>"),j:w("lw<qU?>"),E:w("tD<cZ>"),q:w("Z3"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a0e=new A.N(983224,"MaterialIcons",!1)
D.aUy=new A.ab(D.a0e,48,B.be,null,null,null)
D.d2k=new A.B("Powered off",null,B.anz,null,null,null,null,null,null,null,null,null)
D.bQw=w([D.aUy,B.O,D.d2k],x.p)
D.aEJ=new A.eG(B.am,B.i,B.a_,B.n,null,B.q,null,0,D.bQw,null)
D.awh=new A.d6(B.K,null,null,D.aEJ,null)
D.cOh=new A.aa(18,18,B.U8,null)
D.awC=new A.d6(B.K,null,null,D.cOh,null)
D.axx=new A.fV(2,null,null,null,null,B.aa,null,null,null,null)
D.aB_=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBA=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDi=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aHf=new A.S(0,3,0,3)
D.aHq=new A.S(10,0,10,88)
D.aHV=new A.S(12,6,12,10)
D.aIj=new A.S(14,8,14,6)
D.aJH=new A.S(20,8,20,20)
D.YB=new A.S(8,6,15,8)
D.aQ4=new A.N(983222,"MaterialIcons",!1)
D.aRN=new A.ab(B.k8,26,B.ab,null,null,null)
D.aRQ=new A.ab(B.a_i,18,null,null,null,null)
D.aS4=new A.ab(B.ty,14,B.aa,null,null,null)
D.aQp=new A.N(983420,"MaterialIcons",!1)
D.aSV=new A.ab(D.aQp,14,B.aa,null,null,null)
D.aOr=new A.N(62895,"MaterialIcons",!1)
D.aT_=new A.ab(D.aOr,14,B.aa,null,null,null)
D.aUr=new A.ab(B.tr,16,B.aa,null,null,null)
D.aWd=new A.ab(B.ir,20,null,null,null,null)
D.aWv=new A.ab(B.hp,16,null,null,null,null)
D.bUi=w([B.aM,B.W],x.O)
D.a1W=new A.ac(B.aB,B.aH,B.E,D.bUi,null,null)
D.cHJ=new A.aN("NGMY OS","14.2.1")
D.cGs=new A.aN("VirtualDroid","13.8.4")
D.cGr=new A.aN("NGMY OS","15.0.0")
D.cHf=new A.aN("VirtualDroid","14.1.2")
D.cGp=new A.aN("NGMY Tab OS","12.9.7")
D.cGn=new A.aN("NGMY OS","13.5.3")
D.cGc=new A.aN("VirtualDroid","15.2.0")
D.cGP=new A.aN("NGMY OS","14.8.1")
D.cHl=new A.aN("NGMY Tab OS","13.2.4")
D.cHV=new A.aN("VirtualDroid","12.6.9")
D.cG6=new A.aN("NGMY OS","16.0.1")
D.cFS=new A.aN("VirtualDroid","14.9.0")
D.cHA=new A.aN("NGMY Tab OS","14.0.3")
D.cGB=new A.aN("NGMY OS","13.1.8")
D.cG5=new A.aN("VirtualDroid","13.4.5")
D.cGm=new A.aN("NGMY OS","15.3.2")
D.cHm=new A.aN("NGMY Tab OS","12.4.1")
D.cHD=new A.aN("VirtualDroid","16.1.0")
D.cGO=new A.aN("NGMY OS","14.4.6")
D.cHK=new A.aN("VirtualDroid","15.0.8")
D.bTv=w([D.cHJ,D.cGs,D.cGr,D.cHf,D.cGp,D.cGn,D.cGc,D.cGP,D.cHl,D.cHV,D.cG6,D.cFS,D.cHA,D.cGB,D.cG5,D.cGm,D.cHm,D.cHD,D.cGO,D.cHK],A.b4("a5<+(o,o)>"))
D.xt=w([B.ab,B.fl],x.O)
D.cK4=new A.eV(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJD=new A.eV(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJy=new A.eV(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJH=new A.eV(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJu=new A.eV(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJJ=new A.eV(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cK6=new A.eV(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJv=new A.eV(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJC=new A.eV(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJL=new A.eV(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJt=new A.eV(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cJZ=new A.eV(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJW=new A.eV(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJB=new A.eV(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJT=new A.eV(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJS=new A.eV(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJs=new A.eV(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJG=new A.eV(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJQ=new A.eV(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJV=new A.eV(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8F=w([D.cK4,D.cJD,D.cJy,D.cJH,D.cJu,D.cJJ,D.cK6,D.cJv,D.cJC,D.cJL,D.cJt,D.cJZ,D.cJW,D.cJB,D.cJT,D.cJS,D.cJs,D.cJG,D.cJQ,D.cJV],A.b4("a5<+(o,o,a2,a2,o)>"))
D.c1W=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.agf=new C.L7(0,"youtube")
D.agg=new C.L7(1,"tiktok")
D.Pv=new C.L7(2,"instagram")
D.agh=new C.L7(3,"facebook")
D.cyL=new C.L7(4,"other")
D.cNO=new A.aa(3,null,null,null)
D.cOE=new A.hY(4,10,8,0.52,null)
D.d3C=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cS3=new A.aV(D.d3C,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.r,null)
D.cVu=new A.M(!0,B.e,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d3s=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dbl=new A.B("Open in YouTube",null,B.j7,null,null,null,null,null,null,null,null,null)
D.dfi=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dg6=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dge=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dnI=new C.aQs(null)})();(function staticFields(){$.dLN=20
$.aAo=null
$.btB=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eyi","Hv",()=>A.acF(0))
w($,"eyj","Qr",()=>A.acF(null))})()};
(a=>{a["gZyAsCBN1pTDLQiX8Qjg6vZNkAA="]=a.current})($__dart_deferred_initializers__);