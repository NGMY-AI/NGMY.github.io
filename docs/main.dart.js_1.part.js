((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
evu(d,e){A.a3(d,!1).cw(A.eI(new C.dww(e),!0,null,x.H))},
a05(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a05=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qw()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.am(new A.bc(n,B.aO,B.aC),t)
w=3
return A.b(A.dA(B.L,new C.dwv(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a05)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eay(r)
if(q==null){d.H(x.q).f.T(D.cSr)
w=1
break}w=4
return A.b(A.bG(B.il,null,x.H),$async$a05)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dN0=n
p=C.eas(n)
n=$.Hx()
if(n.a>p)n.sA(0,0)
o.sA(0,q)
n.sA(0,0)
C.dAE(q)
d.H(x.q).f.T(A.bo(null,null,null,null,null,B.r,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a05,v)},
dN3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oE(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
L9(d){return C.eaB(d)},
eaB(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L9=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$L9)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aB(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eC(r,x.f)
k=A.dh(k,new C.bu_(),k.$ti.j("F.E"),x.k)
j=A.S(k).j("ai<F.E>")
i=A.y(new A.ai(k,new C.bu0(),j),j.j("F.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dN5(q)
w=12
return A.b(C.L8(a3,p),$async$L9)
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
n=B.I.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dN3(A.U(n,x.N,x.z))
l=C.dN5(A.a([m],x.e))
w=21
return A.b(C.L8(a3,l),$async$L9)
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
case 18:case 14:q=C.eaz()
w=22
return A.b(C.L8(a3,q),$async$L9)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L9,v)},
dN5(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btS(),w).en(0),u=new A.E(d,new C.btT(),w).en(0),t=new A.E(d,new C.btU(),w).en(0),s=new A.E(d,new C.btV(),w).en(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dAF(null,q,u,t,v,s));++q}return r},
aAH(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L9(d),$async$aAH)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.di(t,new C.btW(),s).en(0)
p=r.di(t,new C.btX(),s).en(0)
o=r.di(t,new C.btY(),s).en(0)
n=r.di(t,new C.btZ(),s).en(0)
m=C.dAF(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L8(d,t),$async$aAH)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAH,v)},
L8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L8)
case 2:u=g
t=B.b.i(d)
s=J.aX(e,new C.btR(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.an("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L8)
case 3:return A.h(null,v)}})
return A.i($async$L8,v)},
eaz(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.ds(20,x.k)
for(w=0;w<20;++w)q[w]=C.dAF(w,w,t,s,u,r)
return q},
dAF(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jX(),h=d==null,g=D.a8S[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8S[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bD(256)
n=new A.E(p,new C.btQ(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bD(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b6(B.l.h0(i.bD(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c2h[w]
j=D.bTS[w]
return new C.oE("vd_"+1000*Date.now()+"_"+e+"_"+i.bD(99999),"Device "+B.b.b6(B.l.q(e+1),2,"0"),u,k,C.eaA(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a0())},
eaA(d,e){var w,v=J.ds(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b6(B.l.h0(d.bD(256),16),2,"0")
return B.h.fA(v)},
dww:function dww(d){this.a=d},
dwv:function dwv(d,e){this.a=d
this.b=e},
dwr:function dwr(d){this.a=d},
dws:function dws(d){this.a=d},
dwt:function dwt(d){this.a=d},
dwu:function dwu(d,e){this.a=d
this.b=e},
OE:function OE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oE:function oE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bu_:function bu_(){},
bu0:function bu0(){},
btS:function btS(){},
btT:function btT(){},
btU:function btU(){},
btV:function btV(){},
btW:function btW(){},
btX:function btX(){},
btY:function btY(){},
btZ:function btZ(){},
btR:function btR(){},
btQ:function btQ(){},
L7:function L7(d,e){this.c=d
this.a=e},
aiu:function aiu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cV4:function cV4(){},
cV3:function cV3(d,e){this.a=d
this.b=e},
cV1:function cV1(d){this.a=d},
cV2:function cV2(d,e){this.a=d
this.b=e},
cV5:function cV5(d){this.a=d},
cVa:function cVa(d){this.a=d},
cV9:function cV9(d){this.a=d},
cVb:function cVb(d,e){this.a=d
this.b=e},
cV8:function cV8(d,e,f){this.a=d
this.b=e
this.c=f},
cV7:function cV7(d,e){this.a=d
this.b=e},
cV6:function cV6(d,e){this.a=d
this.b=e},
cVc:function cVc(d){this.a=d},
Yg:function Yg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aO4:function aO4(d,e){this.c=d
this.a=e},
L6:function L6(d,e){this.c=d
this.a=e},
aPi:function aPi(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cUZ:function cUZ(d){this.a=d},
cV_:function cV_(d){this.a=d},
cV0:function cV0(d){this.a=d},
cUY:function cUY(d,e){this.a=d
this.b=e},
cUV:function cUV(d){this.a=d},
cUW:function cUW(d){this.a=d},
cUU:function cUU(d,e){this.a=d
this.b=e},
cUX:function cUX(d){this.a=d},
cUT:function cUT(d){this.a=d},
aWr:function aWr(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aWs:function aWs(d,e,f){this.c=d
this.d=e
this.a=f},
aPo:function aPo(d,e){this.c=d
this.a=e},
aWq:function aWq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d9U:function d9U(d){this.a=d},
d9V:function d9V(d){this.a=d},
aQL:function aQL(d){this.a=d},
aKa:function aKa(d,e){this.c=d
this.a=e},
eay(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eax(v)
if(u!=null)return new C.qW(w,C.dAD(u,!1),D.agu,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eaw(v)
if(t!=null)return new C.qW(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agv,"TikTok",q)
s=C.eav(w,v)
if(s!=null)return s
r=C.eau(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qW(w,w,D.cz9,"Video",q)
return q},
eav(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qW(d,"https://www.instagram.com/reel/"+w+u,D.PB,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qW(d,"https://www.instagram.com/p/"+w+u,D.PB,t,null)}return null},
eau(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qW(d,"https://www.facebook.com/plugins/video.php?href="+A.fg(2,d,B.bj,!1)+"&show_text=false&width=734",D.agw,"Facebook",null)},
eax(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dA(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eaw(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dA(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
La:function La(d,e){this.a=d
this.b=e},
qW:function qW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8n:function a8n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aPj:function aPj(d,e){var _=this
_.d=$
_.ct$=d
_.aG$=e
_.c=_.a=null},
aQQ:function aQQ(d,e){this.c=d
this.a=e},
cZS:function cZS(d){this.a=d},
cZT:function cZT(d){this.a=d},
Gp:function Gp(d,e){this.c=d
this.a=e},
anN:function anN(){},
dN4(d,e,f,g,h,i){return new C.a8o(i,f,h,e,g,d)},
eu7(d){var w=window
w.toString
A.fV(w,"message",new C.dsA(d),!1,x._)},
a8o:function a8o(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aiv:function aiv(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cVd:function cVd(d){this.a=d},
cVm:function cVm(d){this.a=d},
cVj:function cVj(d){this.a=d},
cVi:function cVi(d){this.a=d},
cVk:function cVk(d){this.a=d},
cVh:function cVh(d){this.a=d},
cVl:function cVl(d){this.a=d},
cVg:function cVg(d){this.a=d},
cVf:function cVf(d){this.a=d},
cVe:function cVe(d){this.a=d},
dsA:function dsA(d){this.a=d},
eaq(){var w,v,u
try{v=A.y3()
w=v.gv6(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cE(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dAD(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btO(d){var w=A.ao(y.c,!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
dN_(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
ear(d,e,f){var w,v,u=C.btO(d)
if(u!=null){if(f){w=C.eaq()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dN_(C.dAD(u,e))}return C.dN_(d)},
eas(d){if(d<=4)return 0
return B.l.av(d-1,4)*4},
eat(d){var w
if($.Qw().a==null)return!1
w=$.Hx().a
return d>=w&&d<w+4},
dN2(){var w=$.aAG
if(w!=null)w.a9(0)
$.aAG=null
$.Hx().sA(0,0)},
dN1(){var w,v,u,t=$.Qw()
if(t.a==null)return
w=$.aAG
if(w!=null)w.a9(0)
v=$.dN0
if(v<=4){t=t.a
t.toString
C.dAE(t)
return}w=$.Hx()
u=w.a+4
w.sA(0,u>=v?0:u)
t=t.a
t.toString
C.dAE(t)},
dAE(d){var w=$.aAG
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
default:w=null}$.aAG=A.dz(A.df(0,0,0,0,0,w),C.eum())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OE.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.L(B.ab.k(0.25),B.u,1),r=A.W(this.d,B.ab,w,w,14)
return A.r(w,A.I(A.a([r,B.fD,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.j,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hm,w,w,w)}}
C.oE.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L7.prototype={
W(){return new C.aiu(A.a([],x.e))},
gdQ(){return this.c}}
C.aiu.prototype={
a_(){var w=this
w.a4()
$.Hx().az(0,w.gazO())
C.eu7(w.gbrE())
w.a_p()},
br3(){if(this.c!=null)this.n(new C.cV4())},
brF(){C.dN1()},
p(){$.Hx().Y(0,this.gazO())
C.dN2()
$.Qw().sA(0,null)
this.a2()},
a_p(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L9(t.a.c),$async$a_p)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cV3(t,s))
$.btP=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
W9(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cV1(t))
w=3
return A.b(C.aAH(t.a.c),$async$W9)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cV2(t,s))
$.btP=J.a4(t.d)
t.c.H(x.q).f.T(A.bo(null,null,null,null,null,B.r,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W9,v)},
btJ(d){var w=this.c
w.toString
A.a3(w,!1).cw(A.eI(new C.cV5(d),!1,null,x.H))},
bum(){var w=this.c
w.toString
return C.a05(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.ft:B.bA,s=A.bV(!0,A.v(A.a([new A.G(D.YL,new A.jf(new C.cVa(w),v),v),A.H(w.e?B.nI:new A.ly($.Qw(),new C.cVb(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.q),!1,B.ae,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.aua(B.ab,B.If,B.mT,D.dgY,w.e?v:new C.cVc(w)),v)}}
C.Yg.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.G,B.ab.k(0.18),B.dv,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8n(n,!0,!C.eat(w),"Fold "+(B.l.av(w,4)+1)+"/"+B.l.av(v.e+4-1,4),u)
n=w}else n=A.r(u,A.v(A.a([A.W(B.kc,B.nR,u,u,22),B.aG,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.k,0,B.q),B.j,B.A8,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.T,!0,u,A.aK(!1,t,!0,A.v(A.a([A.H(A.r(u,A.bU(p,A.f8(A.v(A.a([new C.aO4(o,u),A.H(n,1),A.r(u,A.I(A.a([A.W(B.CJ,B.ab.k(0.85),u,u,9),D.cO8,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.k,0,u,u),B.j,B.ax,u,u,u,u,u,u,D.aHv,u,u,u)],w),B.n,u,B.i,B.k,0,B.q),B.A,!0),B.aA),B.j,u,u,new A.p(u,u,r,s,q,D.a27,B.p),u,u,u,u,B.hn,u,u,u),1),B.aG,A.d(o.b,u,1,B.at,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.at,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.at,u,u,u,A.l(u,u,B.ab.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a4)}}
C.aO4.prototype={
B(d){var w=null
return A.r(w,A.I(A.a([A.H(A.d(B.h.gad(this.c.c.split("-")),w,w,B.at,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tC,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.ax,w,w,w,w,w,w,B.Yz,w,w,w)}}
C.L6.prototype={
W(){return new C.aPi()}}
C.aPi.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.ft:B.bA,t=A.aQ(w,w,w,w,B.a1d,w,w,w,new C.cUZ(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bV(!0,A.v(A.a([new A.G(D.YL,A.I(A.a([t,A.H(new A.KW(A.I(A.a([A.H(new A.G(B.js,A.d(s.b+" \xb7 "+s.c,w,1,B.at,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.T,!0,w,A.aK(!1,w,!0,new A.G(B.bd,A.W(B.hr,B.ab,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cV_(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a4)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.H(new A.ly($.Qw(),new C.cV0(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.q),!1,B.ae,!0,!0),w,!1,!1,w,w)}}
C.aWr.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.ab.k(0.35),B.f7,28),new A.a9(0,B.G,B.A.k(0.45),B.d5,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dN4(new A.d1(v+"_full_"+u,x.W),!1,u,!1,w.gaPK(),v+"_full")
w=v}else w=new C.aPo(t.r,s)}else w=new C.aKa(m,s)
else w=D.don
return A.r(s,A.bU(n,A.f8(A.v(A.a([new C.aWs(m,l,s),A.H(w,1),new C.aWq(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.q),B.A,!0),B.aA),B.j,s,s,new A.p(s,s,o,q,p,D.a27,B.p),s,r*2.05,s,s,B.bW,s,s,r)}}
C.aWs.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dm(r)
r=A.h8(r)
w=new A.dK(q,r)
v=w.gKw()===0?12:w.gKw()
r=B.b.b6(B.l.q(r),2,"0")
q=(q<12?B.hk:B.jm)===B.hk?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.I(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nt,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bJ,D.aTd,B.dR,D.aSn,B.dR,D.aTi],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.v(q,A.a([B.aG,A.I(A.a([A.W(B.CC,B.ab.k(0.9),s,s,12),B.dR,A.H(A.d(u.c,s,s,B.at,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.r(s,A.v(q,B.n,s,B.i,B.k,0,B.q),B.j,B.ax,s,s,s,s,s,s,D.aIy,s,s,s)}}
C.aPo.prototype={
B(d){var w=null
return A.r(w,A.aE(A.v(A.a([A.W(B.C1,B.e.k(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eQ(D.aWR,D.d3X,this.c,A.e3(w,w,w,w,w,w,w,w,w,B.ab,w,w,w,w,w,new A.aH(B.ab.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.j,B.A8,w,w,w,w,w,w,w,w,w,1/0)}}
C.aWq.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azF(B.Cw,"YouTube",s===0,r,new C.d9U(u))
s=u.azF(B.kU,"Device",s===1,r,new C.d9V(u))
w=r?"Power off":"Power on"
v=r?D.a0p:D.aQn
return A.r(t,A.I(A.a([q,B.ah,s,B.b3,A.aQ(t,t,t,t,A.W(v,r?B.bP:B.ht,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.ax,t,t,t,t,t,t,D.aI9,t,t,t)},
azF(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bf
else w=f?B.ab:B.au
v=f&&g?B.ab.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aC(!1,B.T,!0,u,A.aK(!1,A.m(10),!0,new A.G(B.o3,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a4),1)}}
C.aQL.prototype={
B(d){return D.awB}}
C.aKa.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kp,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u1("Serial",u.c),q=w.u1("Model",u.d),p=w.u1("Device ID",u.e),o=w.u1("IMEI",u.r),n=w.u1("MAC",u.f),m=w.u1("OS",u.w+" "+u.x),l=w.u1("Location",u.y+", "+u.z),k=w.u1("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.u1("Timezone",u.at)
u=u.ax
return A.e7(A.a([t,B.aG,s,B.ad,r,q,p,o,n,m,l,k,j,w.u1("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bd,v,v,B.an,!1)},
u1(d,e){var w=null
return new A.G(B.da,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.d(e,w,w,w,w,w,w,D.cVQ,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.q),w)}}
C.La.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qW.prototype={
gaPK(){var w=this.c
return w===D.agu||w===D.agv||w===D.PB||w===D.agw}}
C.a8n.prototype={
W(){return new C.aPj(null,null)}}
C.aPj.prototype={
a_(){this.a4()
var w=A.bg(null,B.rP,null,1,null,this)
w.fR(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b_1()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cy(t,new A.p(t,t,t,t,t,new A.ab(B.bX,B.bO,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.bq),q=x.Y,p=u.d
p===$&&A.c()
p=A.cf(B.cN,p,t)
w=B.e.k(0.92)
q=A.aE(new A.cK(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bk.T>")),!1,A.W(B.kc,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nR
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQQ(s,t),r,q,A.aA(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.R(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ax(B.ac,t,B.b7,B.r,s,t)}}
C.aQQ.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lf(u,B.J,new C.cZS(this),B.bS,!0,w,w,new C.cZT(this),w)
return new C.Gp(v,w)}}
C.Gp.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.jh,B.UB],x.O),B.kc)
break
case 1:w=new A.aO(A.a([B.A8,D.aBQ],x.O),B.lP)
break
case 2:w=new A.aO(A.a([D.aDB,D.aBf],x.O),B.Ca)
break
case 3:w=new A.aO(A.a([B.X,B.dH],x.O),B.Ci)
break
case 4:w=new A.aO(A.a([B.ax,B.aM],x.O),B.om)
break
default:w=u}v=w.a
return A.r(u,A.aE(A.W(w.b,B.ab.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.p(u,u,u,u,u,new A.ab(B.aB,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anN.prototype={
p(){var w=this,v=w.aG$
if(v!=null)v.Y(0,w.gd3())
w.aG$=null
w.a2()},
bh(){this.bv()
this.bs()
this.d4()}}
C.a8o.prototype={
W(){return new C.aiv()}}
C.aiv.prototype={
a9x(d,e){var w,v=C.btO(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dAD(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.ear(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bKc(){var w,v=this
if(v.w)return
v.n(new C.cVd(v))
w=v.e
if(w!=null)v.a9x(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.z3()
$.od().qG(w,new C.cVm(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cVf(v))
w=v.e
w.toString
v.a9x(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0E,w,n,n,36)],v)
o.a.toString
B.h.v(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f8(A.aE(new A.G(new A.R(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.J5(n,B.ox,w)],v)
if(o.f)w.push(A.f8(A.aE(new A.aa(28,28,D.axR,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bf,B.u,1)
q=A.W(B.MF,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.ea(0,A.aC(!1,B.T,!0,n,A.aK(!1,n,!0,A.aE(A.r(n,A.I(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.j,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,D.Y4,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbKb(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a4)))}v=C.btO(o.a.d)
if(v!=null)w.push(A.aA(8,A.ji(D.aUK,D.dbX,new C.cVe(o),A.j8(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hm,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ax(B.ac,n,B.b7,B.r,w,n)}}
var z=a.updateTypes(["o(oE)","~()","L7(P)","oE(Z<@,@>)","a0(oE)","Z<o,@>(oE)","aD<~>()","L6(P)","ly<K>(P,qW?,q?)","Yg(P,K)","uF(P,qW?,q?)","Gp(P,ap,dJ?)"])
C.dww.prototype={
$1(d){return new C.L7(this.a,null)},
$S:z+2}
C.dwv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.ec,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.a9(0,B.G,B.ab.k(0.22),B.f7,32)],x.V),g=A.L(m?B.c3:B.ab.k(0.18),B.u,1),f=A.m(28),e=B.ab.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.r(n,D.aS5,B.j,n,n,new A.p(B.ab.k(0.18),n,A.L(B.ab.k(0.45),B.u,1),n,n,n,B.ak),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aG,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.q),1)
j=A.r(n,A.I(A.a([e,B.f9,w,A.aQ(n,n,n,n,A.W(B.cY,m?B.au:B.d_,n,n,n),n,n,n,new C.dwr(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.p(n,n,n,n,n,new A.ab(B.a1,B.a6,B.E,j,n,n),B.p),n,n,n,n,B.KE,n,n,n)
e=A.eB(B.cU,A.a([new C.OE("YouTube",B.MB,m,n),new C.OE("TikTok",B.lP,m,n),new C.OE("Instagram",B.Ca,m,n),new C.OE("Facebook",B.Ci,m,n)],v),B.cI,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.iO,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bA
r=A.W(B.fy,B.ab.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c3:B.aN
u=A.v(A.a([e,B.aS,A.aM(n,B.S,!0,n,!0,B.r,n,A.aN(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Tn),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.aq,n,B.i,B.k,0,B.q)
e=A.ji(D.aS8,D.dg0,new C.dws(d),A.j8(n,n,n,n,n,n,n,n,n,n,n,m?B.bs:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.G(new A.R(12,0,12,12+l.f.d),A.cy(A.bU(f,A.v(A.a([j,new A.G(B.Yk,u,n),new A.G(D.aJZ,A.I(A.a([e,B.b3,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dwt(d),n,n),B.ah,A.dH(D.aWx,D.dgQ,new C.dwu(d,w),A.bu(B.ab,n,n,n,B.e,n,D.Y4,n,new A.bw(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.aq,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ab(B.aB,B.aI,B.E,i,n,n),B.p),B.bq),n)},
$S:92}
C.dwr.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dws.prototype={
$0(){C.dN2()
$.Qw().sA(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dwt.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dwu.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.bu_.prototype={
$1(d){return C.dN3(A.U(d,x.N,x.z))},
$S:z+3}
C.bu0.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btS.prototype={
$1(d){return d.c},
$S:z+0}
C.btT.prototype={
$1(d){return d.r},
$S:z+0}
C.btU.prototype={
$1(d){return d.f},
$S:z+0}
C.btV.prototype={
$1(d){return d.at},
$S:z+0}
C.btW.prototype={
$1(d){return d.c},
$S:z+0}
C.btX.prototype={
$1(d){return d.r},
$S:z+0}
C.btY.prototype={
$1(d){return d.f},
$S:z+0}
C.btZ.prototype={
$1(d){return d.at},
$S:z+0}
C.btR.prototype={
$1(d){return d.aa()},
$S:z+5}
C.btQ.prototype={
$1(d){return B.b.b6(B.l.h0(d,16),2,"0").toUpperCase()},
$S:90}
C.cV4.prototype={
$0(){},
$S:0}
C.cV3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cV1.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cV2.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cV5.prototype={
$1(d){return new C.L6(this.a,null)},
$S:z+7}
C.cVa.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,B.qb,w,w,w,new C.cV9(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.I(A.a([v,A.H(A.fQ(A.I(A.a([new A.oC(D.xz,e,g,36,B.CC,w),B.aR,A.H(A.d(t,w,1,B.at,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fL(B.h.gN(D.xz).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.T,!0,w,A.aK(!1,w,!0,new A.G(B.bW,A.W(B.hr,A.an(B.h.gN(D.xz),B.h.gad(D.xz),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbul(),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a4)],s),B.n,w,B.i,B.k,0,w,w),D.xz,w,g,B.fe,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:332}
C.cV9.prototype={
$0(){return A.a3(this.a,!1).eC()},
$S:0}
C.cVb.prototype={
$3(d,e,f){return new A.ly($.Hx(),new C.cV8(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cV8.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E8(d,k,x.Q)
w=w==null?k:w.glL()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.ab.k(0.12)
s=A.m(12)
r=A.L(B.ab.k(0.35),B.u,1)
q=A.W(B.kc,B.ab,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Hx().a
m=B.m.U(n+4,1,o)
t=A.a([A.r(k,A.I(A.a([q,B.ah,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dn,B.fv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.v(t,A.a([A.bU(s,new A.iZ(1.7777777777777777,C.dN4(new A.d1("fleet_master_"+r,x.W),!0,r,!0,j.gaPK(),"fleet_master"),k),B.aA),B.ad],w))}B.h.v(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wA(0,B.r,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kZ(new A.G(B.Kt,A.v(u,B.H,k,B.i,B.k,0,B.q),k),k),new A.oP(D.aHG,A.aEN(new A.o_(new C.cV7(i,j),J.a4(i.d),!1,!0,!0,A.u4(),k),D.cP_),k)],w))},
$S:1794}
C.cV7.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Yg(v,e,J.a4(w.d),new C.cV6(w,v),this.b,null)},
$S:z+9}
C.cV6.prototype={
$0(){return this.a.btJ(this.b)},
$S:0}
C.cVc.prototype={
$0(){this.a.W9()
return null},
$S:0}
C.cUZ.prototype={
$0(){return A.a3(this.a,!1).eC()},
$S:0}
C.cV_.prototype={
$0(){C.a05(this.a,$.btP)
return null},
$S:0}
C.cV0.prototype={
$3(d,e,f){return A.eP(new C.cUY(this.a,e))},
$S:z+10}
C.cUY.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aE(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aS,new C.aWr(u,s.a.c,s.e,s.d,new C.cUV(s),new C.cUW(s),new C.cUX(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.q),B.r,v,B.F,v,B.pJ,v,v,B.an),v,v,v)},
$S:1795}
C.cUV.prototype={
$0(){var w=this.a.c
w.toString
C.a05(w,$.btP)
return null},
$S:0}
C.cUW.prototype={
$1(d){var w=this.a
return w.n(new C.cUU(w,d))},
$S:31}
C.cUU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cUX.prototype={
$0(){var w=this.a
return w.n(new C.cUT(w))},
$S:0}
C.cUT.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d9U.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d9V.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cZS.prototype={
$3(d,e,f){return new C.Gp(this.a.c,null)},
$S:z+11}
C.cZT.prototype={
$3(d,e,f){if(f==null)return e
return new A.ax(B.ac,null,B.b7,B.r,A.a([new C.Gp(this.a.c,null),D.awW],x.p),null)},
$C:"$3",
$R:3,
$S:515}
C.cVd.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cVm.prototype={
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
w.a9x(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fV(v,"load",new C.cVj(w),!1,u)
v=w.e
v.toString
A.fV(v,"error",new C.cVk(w),!1,u)
A.bG(B.k2,new C.cVl(w),x.H)
w=w.e
w.toString
return w},
$S:627}
C.cVj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cVi(w))},
$S:39}
C.cVi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cVk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cVh(w))},
$S:39}
C.cVh.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cVl.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cVg(w))},
$S:11}
C.cVg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cVf.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cVe.prototype={
$0(){var w,v=C.btO(this.a.a.d)
if(v==null)return
w=window
w.toString
B.ku.KR(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dsA.prototype={
$1(d){var w,v,u,t,s=new A.y8([],[]).zT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1796};(function aliases(){var w=C.anN.prototype
w.b_1=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aiu.prototype,"gazO","br3",1)
w(u,"gbrE","brF",1)
w(u,"gbul","bum",6)
w(C.aiv.prototype,"gbKb","bKc",1)
v(C,"eum","dN1",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zm,[C.dww,C.dwv,C.bu_,C.bu0,C.btS,C.btT,C.btU,C.btV,C.btW,C.btX,C.btY,C.btZ,C.btR,C.btQ,C.cV5,C.cVa,C.cVb,C.cV8,C.cV0,C.cUW,C.cZS,C.cZT,C.cVm,C.cVj,C.cVk,C.dsA])
v(A.a1y,[C.dwr,C.dws,C.dwt,C.dwu,C.cV4,C.cV3,C.cV1,C.cV2,C.cV9,C.cV6,C.cVc,C.cUZ,C.cV_,C.cUV,C.cUU,C.cUX,C.cUT,C.d9U,C.d9V,C.cVd,C.cVi,C.cVh,C.cVl,C.cVg,C.cVf,C.cVe])
v(A.as,[C.OE,C.Yg,C.aO4,C.aWr,C.aWs,C.aPo,C.aWq,C.aQL,C.aKa,C.aQQ,C.Gp])
v(A.ap,[C.oE,C.qW])
v(A.ad,[C.L7,C.L6,C.a8n,C.a8o])
v(A.ae,[C.aiu,C.aPi,C.anN,C.aiv])
v(A.a1z,[C.cV7,C.cUY])
u(C.La,A.aL5)
u(C.aPj,C.anN)
w(C.anN,A.dF)})()
A.dQD(b.typeUniverse,JSON.parse('{"L7":{"ad":[],"q":[]},"Yg":{"as":[],"q":[]},"L6":{"ad":[],"q":[]},"OE":{"as":[],"q":[]},"aiu":{"ae":["L7"]},"aO4":{"as":[],"q":[]},"aPi":{"ae":["L6"]},"aWr":{"as":[],"q":[]},"aWs":{"as":[],"q":[]},"aPo":{"as":[],"q":[]},"aWq":{"as":[],"q":[]},"aQL":{"as":[],"q":[]},"aKa":{"as":[],"q":[]},"a8n":{"ad":[],"q":[]},"Gp":{"as":[],"q":[]},"aPj":{"ae":["a8n"]},"aQQ":{"as":[],"q":[]},"a8o":{"ad":[],"q":[]},"aiv":{"ae":["a8o"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a5<a9>"),O:w("a5<x>"),e:w("a5<oE>"),S:w("a5<fL>"),s:w("a5<o>"),p:w("a5<q>"),t:w("a5<K>"),X:w("ag<oE>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oy"),_:w("E5"),k:w("oE"),N:w("o"),Y:w("bi<a2>"),W:w("d1<o>"),J:w("ly<K>"),j:w("ly<qW?>"),E:w("tF<cY>"),q:w("Z8"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a0p=new A.N(983224,"MaterialIcons",!1)
D.aUR=new A.ac(D.a0p,48,B.bf,null,null,null)
D.d2S=new A.A("Powered off",null,B.anO,null,null,null,null,null,null,null,null,null)
D.bQT=w([D.aUR,B.N,D.d2S],x.p)
D.aF_=new A.eG(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bQT,null)
D.awB=new A.d5(B.J,null,null,D.aF_,null)
D.cOD=new A.aa(18,18,B.Ui,null)
D.awW=new A.d5(B.J,null,null,D.cOD,null)
D.axR=new A.fX(2,null,null,null,null,B.a9,null,null,null,null)
D.aBf=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBQ=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDB=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aHv=new A.R(0,3,0,3)
D.aHG=new A.R(10,0,10,88)
D.aI9=new A.R(12,6,12,10)
D.aIy=new A.R(14,8,14,6)
D.Y4=new A.R(18,12,18,12)
D.aJZ=new A.R(20,8,20,20)
D.YL=new A.R(8,6,15,8)
D.aQn=new A.N(983222,"MaterialIcons",!1)
D.aS5=new A.ac(B.kc,26,B.ab,null,null,null)
D.aS8=new A.ac(B.a_s,18,null,null,null,null)
D.aSn=new A.ac(B.tC,14,B.a9,null,null,null)
D.aQI=new A.N(983420,"MaterialIcons",!1)
D.aTd=new A.ac(D.aQI,14,B.a9,null,null,null)
D.aON=new A.N(62895,"MaterialIcons",!1)
D.aTi=new A.ac(D.aON,14,B.a9,null,null,null)
D.aUK=new A.ac(B.tv,16,B.a9,null,null,null)
D.aWx=new A.ac(B.is,20,null,null,null,null)
D.aWR=new A.ac(B.hr,16,null,null,null,null)
D.bUF=w([B.aM,B.X],x.O)
D.a27=new A.ab(B.aB,B.aI,B.E,D.bUF,null,null)
D.cI5=new A.aO("NGMY OS","14.2.1")
D.cGP=new A.aO("VirtualDroid","13.8.4")
D.cGO=new A.aO("NGMY OS","15.0.0")
D.cHC=new A.aO("VirtualDroid","14.1.2")
D.cGM=new A.aO("NGMY Tab OS","12.9.7")
D.cGK=new A.aO("NGMY OS","13.5.3")
D.cGz=new A.aO("VirtualDroid","15.2.0")
D.cHb=new A.aO("NGMY OS","14.8.1")
D.cHI=new A.aO("NGMY Tab OS","13.2.4")
D.cIh=new A.aO("VirtualDroid","12.6.9")
D.cGt=new A.aO("NGMY OS","16.0.1")
D.cGi=new A.aO("VirtualDroid","14.9.0")
D.cHX=new A.aO("NGMY Tab OS","14.0.3")
D.cGY=new A.aO("NGMY OS","13.1.8")
D.cGs=new A.aO("VirtualDroid","13.4.5")
D.cGJ=new A.aO("NGMY OS","15.3.2")
D.cHJ=new A.aO("NGMY Tab OS","12.4.1")
D.cI_=new A.aO("VirtualDroid","16.1.0")
D.cHa=new A.aO("NGMY OS","14.4.6")
D.cI6=new A.aO("VirtualDroid","15.0.8")
D.bTS=w([D.cI5,D.cGP,D.cGO,D.cHC,D.cGM,D.cGK,D.cGz,D.cHb,D.cHI,D.cIh,D.cGt,D.cGi,D.cHX,D.cGY,D.cGs,D.cGJ,D.cHJ,D.cI_,D.cHa,D.cI6],A.b4("a5<+(o,o)>"))
D.xz=w([B.ab,B.fo],x.O)
D.cKn=new A.eV(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJW=new A.eV(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJR=new A.eV(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cK_=new A.eV(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJN=new A.eV(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cK1=new A.eV(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cKp=new A.eV(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJO=new A.eV(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJV=new A.eV(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cK3=new A.eV(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJM=new A.eV(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cKh=new A.eV(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cKe=new A.eV(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJU=new A.eV(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cKb=new A.eV(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cKa=new A.eV(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJL=new A.eV(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJZ=new A.eV(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cK8=new A.eV(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cKd=new A.eV(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8S=w([D.cKn,D.cJW,D.cJR,D.cK_,D.cJN,D.cK1,D.cKp,D.cJO,D.cJV,D.cK3,D.cJM,D.cKh,D.cKe,D.cJU,D.cKb,D.cKa,D.cJL,D.cJZ,D.cK8,D.cKd],A.b4("a5<+(o,o,a2,a2,o)>"))
D.c2h=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.agu=new C.La(0,"youtube")
D.agv=new C.La(1,"tiktok")
D.PB=new C.La(2,"instagram")
D.agw=new C.La(3,"facebook")
D.cz9=new C.La(4,"other")
D.cO8=new A.aa(3,null,null,null)
D.cP_=new A.hF(4,10,8,0.52,null)
D.d46=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cSr=new A.aV(D.d46,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.r,null)
D.cVQ=new A.M(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d3X=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dbX=new A.A("Open in YouTube",null,B.ja,null,null,null,null,null,null,null,null,null)
D.dg0=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dgQ=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dgY=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.don=new C.aQL(null)})();(function staticFields(){$.dN0=20
$.aAG=null
$.btP=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ezm","Hx",()=>A.acL(0))
w($,"ezn","Qw",()=>A.acL(null))})()};
(a=>{a["BedSMZhQwXJK2Dz/GRSWutw1Dc4="]=a.current})($__dart_deferred_initializers__);