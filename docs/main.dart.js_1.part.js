((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
etM(d,e){A.a4(d,!1).cv(A.eI(new C.duH(e),!0,null,x.H))},
a_W(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_W=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Ql()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.ak(new A.bc(n,B.aN,B.aB),t)
w=3
return A.b(A.dx(B.M,new C.duG(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_W)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e8O(r)
if(q==null){d.H(x.q).f.T(D.cRN)
w=1
break}w=4
return A.b(A.bF(B.ik,null,x.H),$async$a_W)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dL9=n
p=C.e8I(n)
n=$.Hr()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dyP(q)
d.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_W,v)},
dLc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
L2(d){return C.e8R(d)},
e8R(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L2=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$L2)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eB(r,x.f)
k=A.di(k,new C.btv(),k.$ti.j("G.E"),x.k)
j=A.R(k).j("ai<G.E>")
i=A.y(new A.ai(k,new C.btw(),j),j.j("G.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dLe(q)
w=12
return A.b(C.L1(a3,p),$async$L2)
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
case 19:m=C.dLc(A.U(n,x.N,x.z))
l=C.dLe(A.a([m],x.e))
w=21
return A.b(C.L1(a3,l),$async$L2)
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
case 18:case 14:q=C.e8P()
w=22
return A.b(C.L1(a3,q),$async$L2)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L2,v)},
dLe(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btn(),w).en(0),u=new A.E(d,new C.bto(),w).en(0),t=new A.E(d,new C.btp(),w).en(0),s=new A.E(d,new C.btq(),w).en(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dyQ(null,q,u,t,v,s));++q}return r},
aAg(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L2(d),$async$aAg)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.dk(t,new C.btr(),s).en(0)
p=r.dk(t,new C.bts(),s).en(0)
o=r.dk(t,new C.btt(),s).en(0)
n=r.dk(t,new C.btu(),s).en(0)
m=C.dyQ(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L1(d,t),$async$aAg)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAg,v)},
L1(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L1)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.btm(),x.P)
s=A.y(s,s.$ti.j("a5.E"))
w=3
return A.b(u.an("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L1)
case 3:return A.h(null,v)}})
return A.i($async$L1,v)},
e8P(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dA(20,x.k)
for(w=0;w<20;++w)q[w]=C.dyQ(w,w,t,s,u,r)
return q},
dyQ(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jT(),h=d==null,g=D.a8t[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8t[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.E(p,new C.btl(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bb(B.l.h0(i.bH(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c1G[w]
j=D.bTf[w]
return new C.oC("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bb(B.l.q(e+1),2,"0"),u,k,C.e8Q(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a7().a0())},
e8Q(d,e){var w,v=J.dA(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bb(B.l.h0(d.bH(256),16),2,"0")
return B.h.fA(v)},
duH:function duH(d){this.a=d},
duG:function duG(d,e){this.a=d
this.b=e},
duC:function duC(d){this.a=d},
duD:function duD(d){this.a=d},
duE:function duE(d){this.a=d},
duF:function duF(d,e){this.a=d
this.b=e},
Ow:function Ow(d,e,f,g){var _=this
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
btv:function btv(){},
btw:function btw(){},
btn:function btn(){},
bto:function bto(){},
btp:function btp(){},
btq:function btq(){},
btr:function btr(){},
bts:function bts(){},
btt:function btt(){},
btu:function btu(){},
btm:function btm(){},
btl:function btl(){},
L0:function L0(d,e){this.c=d
this.a=e},
aie:function aie(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cTp:function cTp(){},
cTo:function cTo(d,e){this.a=d
this.b=e},
cTm:function cTm(d){this.a=d},
cTn:function cTn(d,e){this.a=d
this.b=e},
cTq:function cTq(d){this.a=d},
cTv:function cTv(d){this.a=d},
cTu:function cTu(d){this.a=d},
cTw:function cTw(d,e){this.a=d
this.b=e},
cTt:function cTt(d,e,f){this.a=d
this.b=e
this.c=f},
cTs:function cTs(d,e){this.a=d
this.b=e},
cTr:function cTr(d,e){this.a=d
this.b=e},
cTx:function cTx(d){this.a=d},
Y6:function Y6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNA:function aNA(d,e){this.c=d
this.a=e},
L_:function L_(d,e){this.c=d
this.a=e},
aOO:function aOO(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cTj:function cTj(d){this.a=d},
cTk:function cTk(d){this.a=d},
cTl:function cTl(d){this.a=d},
cTi:function cTi(d,e){this.a=d
this.b=e},
cTf:function cTf(d){this.a=d},
cTg:function cTg(d){this.a=d},
cTe:function cTe(d,e){this.a=d
this.b=e},
cTh:function cTh(d){this.a=d},
cTd:function cTd(d){this.a=d},
aVU:function aVU(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aVV:function aVV(d,e,f){this.c=d
this.d=e
this.a=f},
aOU:function aOU(d,e){this.c=d
this.a=e},
aVT:function aVT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d87:function d87(d){this.a=d},
d88:function d88(d){this.a=d},
aQf:function aQf(d){this.a=d},
aJI:function aJI(d,e){this.c=d
this.a=e},
e8O(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e8N(v)
if(u!=null)return new C.qQ(w,C.dyO(u,!1),D.ag3,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e8M(v)
if(t!=null)return new C.qQ(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ag4,"TikTok",q)
s=C.e8L(w,v)
if(s!=null)return s
r=C.e8K(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qQ(w,w,D.cyv,"Video",q)
return q},
e8L(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.an("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dw(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qQ(d,"https://www.instagram.com/reel/"+w+u,D.Pn,t,null)}v=A.an("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dw(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qQ(d,"https://www.instagram.com/p/"+w+u,D.Pn,t,null)}return null},
e8K(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qQ(d,"https://www.facebook.com/plugins/video.php?href="+A.ff(2,d,B.bi,!1)+"&show_text=false&width=734",D.ag5,"Facebook",null)},
e8N(d){var w,v,u,t=[A.an(y.c,!0,!1,!1,!1),A.an("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.an("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dw(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e8M(d){var w,v=A.an("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dw(d)
if(v!=null)return v.b[1]
w=A.an("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dw(d)
return w==null?null:w.b[1]},
L3:function L3(d,e){this.a=d
this.b=e},
qQ:function qQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8a:function a8a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aOP:function aOP(d,e){var _=this
_.d=$
_.cz$=d
_.aI$=e
_.c=_.a=null},
aQk:function aQk(d,e){this.c=d
this.a=e},
cYc:function cYc(d){this.a=d},
cYd:function cYd(d){this.a=d},
Gh:function Gh(d,e){this.c=d
this.a=e},
ant:function ant(){},
dLd(d,e,f,g,h,i){return new C.a8b(i,f,h,e,g,d)},
esp(d){var w=window
w.toString
A.fT(w,"message",new C.dqL(d),!1,x._)},
a8b:function a8b(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aif:function aif(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cTy:function cTy(d){this.a=d},
cTH:function cTH(d){this.a=d},
cTE:function cTE(d){this.a=d},
cTD:function cTD(d){this.a=d},
cTF:function cTF(d){this.a=d},
cTC:function cTC(d){this.a=d},
cTG:function cTG(d){this.a=d},
cTB:function cTB(d){this.a=d},
cTA:function cTA(d){this.a=d},
cTz:function cTz(d){this.a=d},
dqL:function dqL(d){this.a=d},
e8G(){var w,v,u
try{v=A.xZ()
w=v.gv6(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cE(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dyO(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btj(d){var w=A.an(y.c,!0,!1,!1,!1).dw(d)
return w==null?null:w.b[1]},
dL8(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e8H(d,e,f){var w,v,u=C.btj(d)
if(u!=null){if(f){w=C.e8G()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dL8(C.dyO(u,e))}return C.dL8(d)},
e8I(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
e8J(d){var w
if($.Ql().a==null)return!1
w=$.Hr().a
return d>=w&&d<w+4},
dLb(){var w=$.aAf
if(w!=null)w.ab(0)
$.aAf=null
$.Hr().sv(0,0)},
dLa(){var w,v,u,t=$.Ql()
if(t.a==null)return
w=$.aAf
if(w!=null)w.ab(0)
v=$.dL9
if(v<=4){t=t.a
t.toString
C.dyP(t)
return}w=$.Hr()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dyP(t)},
dyP(d){var w=$.aAf
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
default:w=null}$.aAf=A.dw(A.df(0,0,0,0,0,w),C.esE())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ow.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.L(B.a9.k(0.25),B.u,1),r=A.W(this.d,B.a9,w,w,14)
return A.t(w,A.F(A.a([r,B.fB,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hk,w,w,w)}}
C.oC.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L0.prototype={
W(){return new C.aie(A.a([],x.e))},
gdM(){return this.c}}
C.aie.prototype={
a_(){var w=this
w.a5()
$.Hr().av(0,w.gazq())
C.esp(w.gbr8())
w.a_c()},
bqy(){if(this.c!=null)this.n(new C.cTp())},
br9(){C.dLa()},
p(){$.Hr().Y(0,this.gazq())
C.dLb()
$.Ql().sv(0,null)
this.a4()},
a_c(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L2(t.a.c),$async$a_c)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTo(t,s))
$.btk=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a_c,v)},
W_(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cTm(t))
w=3
return A.b(C.aAg(t.a.c),$async$W_)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTn(t,s))
$.btk=J.a3(t.d)
t.c.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W_,v)},
btd(d){var w=this.c
w.toString
A.a4(w,!1).cv(A.eI(new C.cTq(d),!1,null,x.H))},
btR(){var w=this.c
w.toString
return C.a_W(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fs:B.bx,s=A.bW(!0,A.v(A.a([new A.I(D.Ym,new A.jc(new C.cTv(w),v),v),A.H(w.e?B.nB:new A.lw($.Ql(),new C.cTw(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.j,0,B.q),!1,B.ad,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.atN(B.a9,B.I2,B.mR,D.dfQ,w.e?v:new C.cTx(w)),v)}}
C.Y6.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a9.k(0.18),B.dv,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8a(n,!0,!C.e8J(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.k9,B.nK,u,u,22),B.aI,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.j,0,B.q),B.k,B.zX,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.S,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bU(p,A.f6(A.v(A.a([new C.aNA(o,u),A.H(n,1),A.t(u,A.F(A.a([A.W(B.Cx,B.a9.k(0.85),u,u,9),D.cNv,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aH_,u,u,u)],w),B.n,u,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,u,u,new A.p(u,u,r,s,q,D.a1K,B.p),u,u,u,u,B.hl,u,u,u),1),B.aI,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a9.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a5)}}
C.aNA.prototype={
B(d){var w=null
return A.t(w,A.F(A.a([A.H(A.d(B.h.gag(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tu,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.Y9,w,w,w)}}
C.L_.prototype={
W(){return new C.aOO()}}
C.aOO.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fs:B.bx,t=A.aR(w,w,w,w,B.a0Q,w,w,w,new C.cTj(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bW(!0,A.v(A.a([new A.I(D.Ym,A.F(A.a([t,A.H(new A.KP(A.F(A.a([A.H(new A.I(B.jm,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.S,!0,w,A.aL(!1,w,!0,new A.I(B.bc,A.W(B.hp,B.a9,w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cTk(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lw($.Ql(),new C.cTl(this),w,w,x.j),1)],r),B.n,w,B.i,B.j,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aVU.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a9.k(0.35),B.f3,28),new A.a9(0,B.H,B.A.k(0.45),B.dc,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dLd(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaPo(),v+"_full")
w=v}else w=new C.aOU(t.r,s)}else w=new C.aJI(m,s)
else w=D.dne
return A.t(s,A.bU(n,A.f6(A.v(A.a([new C.aVV(m,l,s),A.H(w,1),new C.aVT(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,s,s,new A.p(s,s,o,q,p,D.a1K,B.p),s,r*2.05,s,s,B.bV,s,s,r)}}
C.aVV.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dp(r)
r=A.hm(r)
w=new A.dK(q,r)
v=w.gKo()===0?12:w.gKo()
r=B.b.bb(B.l.q(r),2,"0")
q=(q<12?B.hh:B.ji)===B.hh?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nm,s,s,s),B.aV,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bA,D.aSH,B.dV,D.aRR,B.dV,D.aSM],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aI,A.F(A.a([A.W(B.Cq,B.a9.k(0.9),s,s,12),B.dV,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aI4,s,s,s)}}
C.aOU.prototype={
B(d){var w=null
return A.t(w,A.aF(A.v(A.a([A.W(B.BP,B.e.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eQ(D.aWh,D.d36,this.c,A.eb(w,w,w,w,w,w,w,w,w,B.a9,w,w,w,w,w,new A.aG(B.a9.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.k,B.zX,w,w,w,w,w,w,w,w,w,1/0)}}
C.aVT.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azh(B.Ck,"YouTube",s===0,r,new C.d87(u))
s=u.azh(B.kN,"Device",s===1,r,new C.d88(u))
w=r?"Power off":"Power on"
v=r?D.a01:D.aPS
return A.t(t,A.F(A.a([q,B.ai,s,B.aV,A.aR(t,t,t,t,A.W(v,r?B.bR:B.hs,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dC)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aHF,t,t,t)},
azh(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bj
else w=f?B.a9:B.av
v=f&&g?B.a9.k(0.15):B.M
u=A.m(10)
t=g?h:s
return A.H(A.aC(!1,B.S,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.nY,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a5),1)}}
C.aQf.prototype={
B(d){return D.aw5}}
C.aJI.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.kl,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u1("Serial",u.c),q=w.u1("Model",u.d),p=w.u1("Device ID",u.e),o=w.u1("IMEI",u.r),n=w.u1("MAC",u.f),m=w.u1("OS",u.w+" "+u.x),l=w.u1("Location",u.y+", "+u.z),k=w.u1("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.u1("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.aI,s,B.ac,r,q,p,o,n,m,l,k,j,w.u1("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bc,v,v,B.am,!1)},
u1(d,e){var w=null
return new A.I(B.d9,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cx,A.d(e,w,w,w,w,w,w,D.cVd,w,w,w)],x.p),B.G,w,B.i,B.j,0,B.q),w)}}
C.L3.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qQ.prototype={
gaPo(){var w=this.c
return w===D.ag3||w===D.ag4||w===D.Pn||w===D.ag5}}
C.a8a.prototype={
W(){return new C.aOP(null,null)}}
C.aOP.prototype={
a_(){this.a5()
var w=A.bi(null,B.rK,null,1,null,this)
w.fZ(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZD()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cz(t,new A.p(t,t,t,t,t,new A.ac(B.c2,B.c_,B.E,A.a([B.M,B.A.k(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.d_,p,t)
w=B.e.k(0.92)
q=A.aF(new A.cJ(new A.aZ(p,new A.bh(0.72,1,q),q.j("aZ<bj.T>")),!1,A.W(B.k9,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nK
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQk(s,t),r,q,A.aA(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.S(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.az(B.ae,t,B.b6,B.t,s,t)}}
C.aQk.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lc(u,B.K,new C.cYc(this),B.bQ,!0,w,w,new C.cYd(this),w)
return new C.Gh(v,w)}}
C.Gh.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.ms,B.Ue],x.O),B.k9)
break
case 1:w=new A.aM(A.a([B.zX,D.aBl],x.O),B.lJ)
break
case 2:w=new A.aM(A.a([D.aD1,D.aAK],x.O),B.BY)
break
case 3:w=new A.aM(A.a([B.W,B.dH],x.O),B.C5)
break
case 4:w=new A.aM(A.a([B.aw,B.aL],x.O),B.oc)
break
default:w=u}v=w.a
return A.t(u,A.aF(A.W(w.b,B.a9.k(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aC,B.aJ,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.ant.prototype={
p(){var w=this,v=w.aI$
if(v!=null)v.Y(0,w.gd8())
w.aI$=null
w.a4()},
bj(){this.bx()
this.bv()
this.d9()}}
C.a8b.prototype={
W(){return new C.aif()}}
C.aif.prototype={
a9j(d,e){var w,v=C.btj(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dyO(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e8H(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bJB(){var w,v=this
if(v.w)return
v.n(new C.cTy(v))
w=v.e
if(w!=null)v.a9j(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aI()
u.d=w
try{$.z_()
$.ob().qF(w,new C.cTH(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cTA(v))
w=v.e
w.toString
v.a9j(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0g,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.f6(A.aF(new A.I(new A.S(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.IZ(n,B.oo,w)],v)
if(o.f)w.push(A.f6(A.aF(new A.aa(28,28,D.axj,n),n,n,n),B.cZ,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bj,B.u,1)
q=A.W(B.Mp,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.ef(0,A.aC(!1,B.S,!0,n,A.aL(!1,n,!0,A.aF(A.t(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.Kj,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbJA(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a5)))}v=C.btj(o.a.d)
if(v!=null)w.push(A.aA(8,A.jf(D.aUd,D.daX,new C.cTz(o),A.j3(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hk,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.az(B.ae,n,B.b6,B.t,w,n)}}
var z=a.updateTypes(["o(oC)","~()","L0(P)","oC(Z<@,@>)","a1(oC)","Z<o,@>(oC)","aD<~>()","L_(P)","lw<K>(P,qQ?,q?)","Y6(P,K)","uy(P,qQ?,q?)","Gh(P,ao,dJ?)"])
C.duH.prototype={
$1(d){return new C.L0(this.a,null)},
$S:z+2}
C.duG.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e9,B.W],j):A.a([B.e,B.ax],j),h=A.a([new A.a9(0,B.H,B.a9.k(0.22),B.f3,32)],x.V),g=A.L(m?B.c8:B.a9.k(0.18),B.u,1),f=A.m(28),e=B.a9.k(m?0.35:0.14)
j=A.a([e,B.ay.k(m?0.18:0.08)],j)
e=A.t(n,D.aRz,B.k,n,n,new A.p(B.a9.k(0.18),n,A.L(B.a9.k(0.45),B.u,1),n,n,n,B.an),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aI,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.j,0,B.q),1)
j=A.t(n,A.F(A.a([e,B.f5,w,A.aR(n,n,n,n,A.W(B.cX,m?B.av:B.cZ,n,n,n),n,n,n,new C.duC(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a3,B.a6,B.E,j,n,n),B.p),n,n,n,n,B.Kp,n,n,n)
e=A.eF(B.cT,A.a([new C.Ow("YouTube",B.Ml,m,n),new C.Ow("TikTok",B.lJ,m,n),new C.Ow("Instagram",B.BY,m,n),new C.Ow("Facebook",B.C5,m,n)],v),B.cL,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cd:B.iP,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.bx
r=A.W(B.fw,B.a9.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aM
u=A.v(A.a([e,B.aQ,A.aN(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.T1),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.ar,n,B.i,B.j,0,B.q)
e=A.jf(D.aRC,D.deU,new C.duD(d),A.j3(n,n,n,n,n,n,n,n,n,n,n,m?B.bq:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.S(12,0,12,12+l.f.d),A.cz(A.bU(f,A.v(A.a([j,new A.I(B.XW,u,n),new A.I(D.aJw,A.F(A.a([e,B.aV,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.duE(d),n,n),B.ai,A.dG(D.aW_,D.dfI,new C.duF(d,w),A.bv(B.a9,n,n,n,B.e,n,B.Kj,n,new A.by(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ac(B.aC,B.aJ,B.E,i,n,n),B.p),B.br),n)},
$S:90}
C.duC.prototype={
$0(){A.a4(this.a,!1).P(null)
return null},
$S:0}
C.duD.prototype={
$0(){C.dLb()
$.Ql().sv(0,null)
A.a4(this.a,!1).P(null)},
$S:0}
C.duE.prototype={
$0(){A.a4(this.a,!1).P(null)
return null},
$S:0}
C.duF.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a4(this.a,!1).P(w)
return null},
$S:0}
C.btv.prototype={
$1(d){return C.dLc(A.U(d,x.N,x.z))},
$S:z+3}
C.btw.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btn.prototype={
$1(d){return d.c},
$S:z+0}
C.bto.prototype={
$1(d){return d.r},
$S:z+0}
C.btp.prototype={
$1(d){return d.f},
$S:z+0}
C.btq.prototype={
$1(d){return d.at},
$S:z+0}
C.btr.prototype={
$1(d){return d.c},
$S:z+0}
C.bts.prototype={
$1(d){return d.r},
$S:z+0}
C.btt.prototype={
$1(d){return d.f},
$S:z+0}
C.btu.prototype={
$1(d){return d.at},
$S:z+0}
C.btm.prototype={
$1(d){return d.a9()},
$S:z+5}
C.btl.prototype={
$1(d){return B.b.bb(B.l.h0(d,16),2,"0").toUpperCase()},
$S:92}
C.cTp.prototype={
$0(){},
$S:0}
C.cTo.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cTm.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cTn.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cTq.prototype={
$1(d){return new C.L_(this.a,null)},
$S:z+7}
C.cTv.prototype={
$4(d,e,f,g){var w=null,v=A.aR(w,w,w,w,B.tw,w,w,w,new C.cTu(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.H(A.fP(A.F(A.a([new A.oA(D.xr,e,g,36,B.Cq,w),B.aS,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.h1(B.h.gN(D.xr).k(0.45+e*0.2),B.L,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.S,!0,w,A.aL(!1,w,!0,new A.I(B.bV,A.W(B.hp,A.am(B.h.gN(D.xr),B.h.gag(D.xr),e),w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbtQ(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.j,0,w,w),D.xr,w,g,B.fo,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:333}
C.cTu.prototype={
$0(){return A.a4(this.a,!1).eD()},
$S:0}
C.cTw.prototype={
$3(d,e,f){return new A.lw($.Hr(),new C.cTt(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cTt.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E4(d,k,x.Q)
w=w==null?k:w.glK()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a9.k(0.12)
s=A.m(12)
r=A.L(B.a9.k(0.35),B.u,1)
q=A.W(B.k9,B.a9,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Hr().a
m=B.m.U(n+4,1,o)
t=A.a([A.t(k,A.F(A.a([q,B.ai,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dp,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bU(s,new A.j7(1.7777777777777777,C.dLd(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaPo(),"fleet_master"),k),B.aA),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wt(0,B.t,k,B.F,k,k,k,k,!1,k,B.am,!1,A.a([new A.kV(new A.I(B.Ke,A.v(u,B.G,k,B.i,B.j,0,B.q),k),k),new A.oN(D.aHa,A.aEm(new A.nW(new C.cTs(i,j),J.a3(i.d),!1,!0,!0,A.tY(),k),D.cOn),k)],w))},
$S:1788}
C.cTs.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Y6(v,e,J.a3(w.d),new C.cTr(w,v),this.b,null)},
$S:z+9}
C.cTr.prototype={
$0(){return this.a.btd(this.b)},
$S:0}
C.cTx.prototype={
$0(){this.a.W_()
return null},
$S:0}
C.cTj.prototype={
$0(){return A.a4(this.a,!1).eD()},
$S:0}
C.cTk.prototype={
$0(){C.a_W(this.a,$.btk)
return null},
$S:0}
C.cTl.prototype={
$3(d,e,f){return A.eP(new C.cTi(this.a,e))},
$S:z+10}
C.cTi.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aF(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aQ,new C.aVU(u,s.a.c,s.e,s.d,new C.cTf(s),new C.cTg(s),new C.cTh(s),t,v)],x.p),B.n,v,B.i,B.j,0,B.q),B.t,v,B.F,v,B.pD,v,v,B.am),v,v,v)},
$S:1789}
C.cTf.prototype={
$0(){var w=this.a.c
w.toString
C.a_W(w,$.btk)
return null},
$S:0}
C.cTg.prototype={
$1(d){var w=this.a
return w.n(new C.cTe(w,d))},
$S:31}
C.cTe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cTh.prototype={
$0(){var w=this.a
return w.n(new C.cTd(w))},
$S:0}
C.cTd.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d87.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d88.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cYc.prototype={
$3(d,e,f){return new C.Gh(this.a.c,null)},
$S:z+11}
C.cYd.prototype={
$3(d,e,f){if(f==null)return e
return new A.az(B.ae,null,B.b6,B.t,A.a([new C.Gh(this.a.c,null),D.awp],x.p),null)},
$C:"$3",
$R:3,
$S:433}
C.cTy.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cTH.prototype={
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
A.fT(v,"load",new C.cTE(w),!1,u)
v=w.e
v.toString
A.fT(v,"error",new C.cTF(w),!1,u)
A.bF(B.jZ,new C.cTG(w),x.H)
w=w.e
w.toString
return w},
$S:401}
C.cTE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTD(w))},
$S:40}
C.cTD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cTF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTC(w))},
$S:40}
C.cTC.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cTG.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cTB(w))},
$S:12}
C.cTB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cTA.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cTz.prototype={
$0(){var w,v=C.btj(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kp.KJ(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dqL.prototype={
$1(d){var w,v,u,t,s=new A.y3([],[]).zQ(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1790};(function aliases(){var w=C.ant.prototype
w.aZD=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aie.prototype,"gazq","bqy",1)
w(u,"gbr8","br9",1)
w(u,"gbtQ","btR",6)
w(C.aif.prototype,"gbJA","bJB",1)
v(C,"esE","dLa",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zi,[C.duH,C.duG,C.btv,C.btw,C.btn,C.bto,C.btp,C.btq,C.btr,C.bts,C.btt,C.btu,C.btm,C.btl,C.cTq,C.cTv,C.cTw,C.cTt,C.cTl,C.cTg,C.cYc,C.cYd,C.cTH,C.cTE,C.cTF,C.dqL])
v(A.a1p,[C.duC,C.duD,C.duE,C.duF,C.cTp,C.cTo,C.cTm,C.cTn,C.cTu,C.cTr,C.cTx,C.cTj,C.cTk,C.cTf,C.cTe,C.cTh,C.cTd,C.d87,C.d88,C.cTy,C.cTD,C.cTC,C.cTG,C.cTB,C.cTA,C.cTz])
v(A.as,[C.Ow,C.Y6,C.aNA,C.aVU,C.aVV,C.aOU,C.aVT,C.aQf,C.aJI,C.aQk,C.Gh])
v(A.ao,[C.oC,C.qQ])
v(A.ad,[C.L0,C.L_,C.a8a,C.a8b])
v(A.ae,[C.aie,C.aOO,C.ant,C.aif])
v(A.a1q,[C.cTs,C.cTi])
u(C.L3,A.aKD)
u(C.aOP,C.ant)
w(C.ant,A.dI)})()
A.dOM(b.typeUniverse,JSON.parse('{"L0":{"ad":[],"q":[]},"Y6":{"as":[],"q":[]},"L_":{"ad":[],"q":[]},"Ow":{"as":[],"q":[]},"aie":{"ae":["L0"]},"aNA":{"as":[],"q":[]},"aOO":{"ae":["L_"]},"aVU":{"as":[],"q":[]},"aVV":{"as":[],"q":[]},"aOU":{"as":[],"q":[]},"aVT":{"as":[],"q":[]},"aQf":{"as":[],"q":[]},"aJI":{"as":[],"q":[]},"a8a":{"ad":[],"q":[]},"Gh":{"as":[],"q":[]},"aOP":{"ae":["a8a"]},"aQk":{"as":[],"q":[]},"a8b":{"ad":[],"q":[]},"aif":{"ae":["a8b"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a6<a9>"),O:w("a6<x>"),e:w("a6<oC>"),S:w("a6<h1>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ag<oC>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ow"),_:w("E1"),k:w("oC"),N:w("o"),Y:w("bh<a2>"),W:w("d3<o>"),J:w("lw<K>"),j:w("lw<qQ?>"),E:w("ty<cZ>"),q:w("YY"),z:w("@"),Q:w("ao?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a01=new A.M(983224,"MaterialIcons",!1)
D.aUk=new A.ab(D.a01,48,B.bj,null,null,null)
D.d1Z=new A.B("Powered off",null,B.ank,null,null,null,null,null,null,null,null,null)
D.bQi=w([D.aUk,B.O,D.d1Z],x.p)
D.aEs=new A.eG(B.am,B.i,B.a_,B.n,null,B.q,null,0,D.bQi,null)
D.aw5=new A.da(B.K,null,null,D.aEs,null)
D.cNZ=new A.aa(18,18,B.TX,null)
D.awp=new A.da(B.K,null,null,D.cNZ,null)
D.axj=new A.fV(2,null,null,null,null,B.ab,null,null,null,null)
D.aAK=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBl=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aD1=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aH_=new A.S(0,3,0,3)
D.aHa=new A.S(10,0,10,88)
D.aHF=new A.S(12,6,12,10)
D.aI4=new A.S(14,8,14,6)
D.aJw=new A.S(20,8,20,20)
D.Ym=new A.S(8,6,15,8)
D.aPS=new A.M(983222,"MaterialIcons",!1)
D.aRz=new A.ab(B.k9,26,B.a9,null,null,null)
D.aRC=new A.ab(B.a_3,18,null,null,null,null)
D.aRR=new A.ab(B.tu,14,B.ab,null,null,null)
D.aQc=new A.M(983420,"MaterialIcons",!1)
D.aSH=new A.ab(D.aQc,14,B.ab,null,null,null)
D.aOg=new A.M(62895,"MaterialIcons",!1)
D.aSM=new A.ab(D.aOg,14,B.ab,null,null,null)
D.aUd=new A.ab(B.tn,16,B.ab,null,null,null)
D.aW_=new A.ab(B.ir,20,null,null,null,null)
D.aWh=new A.ab(B.hp,16,null,null,null,null)
D.bU2=w([B.aL,B.W],x.O)
D.a1K=new A.ac(B.aC,B.aJ,B.E,D.bU2,null,null)
D.cHq=new A.aM("NGMY OS","14.2.1")
D.cG9=new A.aM("VirtualDroid","13.8.4")
D.cG8=new A.aM("NGMY OS","15.0.0")
D.cGX=new A.aM("VirtualDroid","14.1.2")
D.cG6=new A.aM("NGMY Tab OS","12.9.7")
D.cG4=new A.aM("NGMY OS","13.5.3")
D.cFU=new A.aM("VirtualDroid","15.2.0")
D.cGw=new A.aM("NGMY OS","14.8.1")
D.cH2=new A.aM("NGMY Tab OS","13.2.4")
D.cHC=new A.aM("VirtualDroid","12.6.9")
D.cFO=new A.aM("NGMY OS","16.0.1")
D.cFz=new A.aM("VirtualDroid","14.9.0")
D.cHh=new A.aM("NGMY Tab OS","14.0.3")
D.cGi=new A.aM("NGMY OS","13.1.8")
D.cFN=new A.aM("VirtualDroid","13.4.5")
D.cG3=new A.aM("NGMY OS","15.3.2")
D.cH3=new A.aM("NGMY Tab OS","12.4.1")
D.cHk=new A.aM("VirtualDroid","16.1.0")
D.cGv=new A.aM("NGMY OS","14.4.6")
D.cHr=new A.aM("VirtualDroid","15.0.8")
D.bTf=w([D.cHq,D.cG9,D.cG8,D.cGX,D.cG6,D.cG4,D.cFU,D.cGw,D.cH2,D.cHC,D.cFO,D.cFz,D.cHh,D.cGi,D.cFN,D.cG3,D.cH3,D.cHk,D.cGv,D.cHr],A.b4("a6<+(o,o)>"))
D.xr=w([B.a9,B.fk],x.O)
D.cJM=new A.eV(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJk=new A.eV(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJf=new A.eV(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJo=new A.eV(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJb=new A.eV(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJq=new A.eV(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cJO=new A.eV(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJc=new A.eV(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJj=new A.eV(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJs=new A.eV(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJa=new A.eV(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cJG=new A.eV(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJD=new A.eV(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJi=new A.eV(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJA=new A.eV(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJz=new A.eV(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJ9=new A.eV(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJn=new A.eV(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJx=new A.eV(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJC=new A.eV(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8t=w([D.cJM,D.cJk,D.cJf,D.cJo,D.cJb,D.cJq,D.cJO,D.cJc,D.cJj,D.cJs,D.cJa,D.cJG,D.cJD,D.cJi,D.cJA,D.cJz,D.cJ9,D.cJn,D.cJx,D.cJC],A.b4("a6<+(o,o,a2,a2,o)>"))
D.c1G=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ag3=new C.L3(0,"youtube")
D.ag4=new C.L3(1,"tiktok")
D.Pn=new C.L3(2,"instagram")
D.ag5=new C.L3(3,"facebook")
D.cyv=new C.L3(4,"other")
D.cNv=new A.aa(3,null,null,null)
D.cOn=new A.hG(4,10,8,0.52,null)
D.d3f=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cRN=new A.aV(D.d3f,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cVd=new A.O(!0,B.e,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d36=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.daX=new A.B("Open in YouTube",null,B.j7,null,null,null,null,null,null,null,null,null)
D.deU=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dfI=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dfQ=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dne=new C.aQf(null)})();(function staticFields(){$.dL9=20
$.aAf=null
$.btk=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"exE","Hr",()=>A.acy(0))
w($,"exF","Ql",()=>A.acy(null))})()};
(a=>{a["l2tmyhpZ7kU5FI4PZHhoRnC2uHQ="]=a.current})($__dart_deferred_initializers__);