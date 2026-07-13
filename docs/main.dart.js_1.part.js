((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eu4(d,e){A.a3(d,!1).cv(A.eI(new C.dv_(e),!0,null,x.H))},
a_Z(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_Z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qr()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.al(new A.bc(n,B.aO,B.aC),t)
w=3
return A.b(A.dz(B.K,new C.duZ(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_Z)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e96(r)
if(q==null){d.H(x.q).f.T(D.cS5)
w=1
break}w=4
return A.b(A.bF(B.il,null,x.H),$async$a_Z)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dLs=n
p=C.e90(n)
n=$.Hv()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dz7(q)
d.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_Z,v)},
dLv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.oB(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
L6(d){return C.e99(d)},
e99(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
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
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eB(r,x.f)
k=A.di(k,new C.btB(),k.$ti.j("G.E"),x.k)
j=A.R(k).j("ai<G.E>")
i=A.y(new A.ai(k,new C.btC(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dLx(q)
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
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dLv(A.U(n,x.N,x.z))
l=C.dLx(A.a([m],x.e))
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
case 18:case 14:q=C.e97()
w=22
return A.b(C.L5(a3,q),$async$L6)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L6,v)},
dLx(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btt(),w).en(0),u=new A.E(d,new C.btu(),w).en(0),t=new A.E(d,new C.btv(),w).en(0),s=new A.E(d,new C.btw(),w).en(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dz8(null,q,u,t,v,s));++q}return r},
aAl(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L6(d),$async$aAl)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.dg(t,new C.btx(),s).en(0)
p=r.dg(t,new C.bty(),s).en(0)
o=r.dg(t,new C.btz(),s).en(0)
n=r.dg(t,new C.btA(),s).en(0)
m=C.dz8(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L5(d,t),$async$aAl)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAl,v)},
L5(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L5)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.bts(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L5)
case 3:return A.h(null,v)}})
return A.i($async$L5,v)},
e97(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dz8(w,w,t,s,u,r)
return q},
dz8(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jU(),h=d==null,g=D.a8F[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8F[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bC(256)
n=new A.E(p,new C.btr(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bC(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bb(B.l.fT(i.bC(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c21[w]
j=D.bTB[w]
return new C.oB("vd_"+1000*Date.now()+"_"+e+"_"+i.bC(99999),"Device "+B.b.bb(B.l.q(e+1),2,"0"),u,k,C.e98(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a0())},
e98(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bb(B.l.fT(d.bC(256),16),2,"0")
return B.h.fA(v)},
dv_:function dv_(d){this.a=d},
duZ:function duZ(d,e){this.a=d
this.b=e},
duV:function duV(d){this.a=d},
duW:function duW(d){this.a=d},
duX:function duX(d){this.a=d},
duY:function duY(d,e){this.a=d
this.b=e},
OB:function OB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oB:function oB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
btB:function btB(){},
btC:function btC(){},
btt:function btt(){},
btu:function btu(){},
btv:function btv(){},
btw:function btw(){},
btx:function btx(){},
bty:function bty(){},
btz:function btz(){},
btA:function btA(){},
bts:function bts(){},
btr:function btr(){},
L4:function L4(d,e){this.c=d
this.a=e},
aih:function aih(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cTG:function cTG(){},
cTF:function cTF(d,e){this.a=d
this.b=e},
cTD:function cTD(d){this.a=d},
cTE:function cTE(d,e){this.a=d
this.b=e},
cTH:function cTH(d){this.a=d},
cTM:function cTM(d){this.a=d},
cTL:function cTL(d){this.a=d},
cTN:function cTN(d,e){this.a=d
this.b=e},
cTK:function cTK(d,e,f){this.a=d
this.b=e
this.c=f},
cTJ:function cTJ(d,e){this.a=d
this.b=e},
cTI:function cTI(d,e){this.a=d
this.b=e},
cTO:function cTO(d){this.a=d},
Ya:function Ya(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNF:function aNF(d,e){this.c=d
this.a=e},
L3:function L3(d,e){this.c=d
this.a=e},
aOT:function aOT(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cTA:function cTA(d){this.a=d},
cTB:function cTB(d){this.a=d},
cTC:function cTC(d){this.a=d},
cTz:function cTz(d,e){this.a=d
this.b=e},
cTw:function cTw(d){this.a=d},
cTx:function cTx(d){this.a=d},
cTv:function cTv(d,e){this.a=d
this.b=e},
cTy:function cTy(d){this.a=d},
cTu:function cTu(d){this.a=d},
aVZ:function aVZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aW_:function aW_(d,e,f){this.c=d
this.d=e
this.a=f},
aOZ:function aOZ(d,e){this.c=d
this.a=e},
aVY:function aVY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d8o:function d8o(d){this.a=d},
d8p:function d8p(d){this.a=d},
aQj:function aQj(d){this.a=d},
aJO:function aJO(d,e){this.c=d
this.a=e},
e96(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e95(v)
if(u!=null)return new C.qU(w,C.dz6(u,!1),D.agg,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e94(v)
if(t!=null)return new C.qU(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agh,"TikTok",q)
s=C.e93(w,v)
if(s!=null)return s
r=C.e92(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qU(w,w,D.cyQ,"Video",q)
return q},
e93(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qU(d,"https://www.instagram.com/reel/"+w+u,D.Pw,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dA(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qU(d,"https://www.instagram.com/p/"+w+u,D.Pw,t,null)}return null},
e92(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qU(d,"https://www.facebook.com/plugins/video.php?href="+A.fe(2,d,B.bi,!1)+"&show_text=false&width=734",D.agi,"Facebook",null)},
e95(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dA(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e94(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dA(d)
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
a8e:function a8e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aOU:function aOU(d,e){var _=this
_.d=$
_.cA$=d
_.aI$=e
_.c=_.a=null},
aQo:function aQo(d,e){this.c=d
this.a=e},
cYt:function cYt(d){this.a=d},
cYu:function cYu(d){this.a=d},
Gl:function Gl(d,e){this.c=d
this.a=e},
anx:function anx(){},
dLw(d,e,f,g,h,i){return new C.a8f(i,f,h,e,g,d)},
esI(d){var w=window
w.toString
A.fU(w,"message",new C.dr3(d),!1,x._)},
a8f:function a8f(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aii:function aii(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cTP:function cTP(d){this.a=d},
cTY:function cTY(d){this.a=d},
cTV:function cTV(d){this.a=d},
cTU:function cTU(d){this.a=d},
cTW:function cTW(d){this.a=d},
cTT:function cTT(d){this.a=d},
cTX:function cTX(d){this.a=d},
cTS:function cTS(d){this.a=d},
cTR:function cTR(d){this.a=d},
cTQ:function cTQ(d){this.a=d},
dr3:function dr3(d){this.a=d},
e8Z(){var w,v,u
try{v=A.y2()
w=v.gv5(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cE(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dz6(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btp(d){var w=A.ao(y.c,!0,!1,!1,!1).dA(d)
return w==null?null:w.b[1]},
dLr(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e9_(d,e,f){var w,v,u=C.btp(d)
if(u!=null){if(f){w=C.e8Z()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dLr(C.dz6(u,e))}return C.dLr(d)},
e90(d){if(d<=4)return 0
return B.l.aG(d-1,4)*4},
e91(d){var w
if($.Qr().a==null)return!1
w=$.Hv().a
return d>=w&&d<w+4},
dLu(){var w=$.aAk
if(w!=null)w.ab(0)
$.aAk=null
$.Hv().sv(0,0)},
dLt(){var w,v,u,t=$.Qr()
if(t.a==null)return
w=$.aAk
if(w!=null)w.ab(0)
v=$.dLs
if(v<=4){t=t.a
t.toString
C.dz7(t)
return}w=$.Hv()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dz7(t)},
dz7(d){var w=$.aAk
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
default:w=null}$.aAk=A.dy(A.df(0,0,0,0,0,w),C.esX())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.OB.prototype={
B(d){var w=null,v=this.e,u=v?B.aL:B.e,t=A.m(20),s=A.L(B.a9.k(0.25),B.u,1),r=A.W(this.d,B.a9,w,w,14)
return A.t(w,A.F(A.a([r,B.fA,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hj,w,w,w)}}
C.oB.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L4.prototype={
W(){return new C.aih(A.a([],x.e))},
gdQ(){return this.c}}
C.aih.prototype={
a_(){var w=this
w.a5()
$.Hv().av(0,w.gazG())
C.esI(w.gbrx())
w.a_l()},
bqX(){if(this.c!=null)this.n(new C.cTG())},
bry(){C.dLt()},
p(){$.Hv().Y(0,this.gazG())
C.dLu()
$.Qr().sv(0,null)
this.a3()},
a_l(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L6(t.a.c),$async$a_l)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTF(t,s))
$.btq=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a_l,v)},
W5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cTD(t))
w=3
return A.b(C.aAl(t.a.c),$async$W5)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTE(t,s))
$.btq=J.a4(t.d)
t.c.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W5,v)},
btC(d){var w=this.c
w.toString
A.a3(w,!1).cv(A.eI(new C.cTH(d),!1,null,x.H))},
buf(){var w=this.c
w.toString
return C.a_Z(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fs:B.by,s=A.bV(!0,A.v(A.a([new A.H(D.YA,new A.jd(new C.cTM(w),v),v),A.I(w.e?B.nE:new A.lx($.Qr(),new C.cTN(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.j,0,B.q),!1,B.ae,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.atS(B.a9,B.I8,B.mS,D.dgd,w.e?v:new C.cTO(w)),v)}}
C.Ya.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a9.k(0.18),B.dv,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8e(n,!0,!C.e91(w),"Fold "+(B.l.aG(w,4)+1)+"/"+B.l.aG(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.k9,B.nN,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.j,0,B.q),B.k,B.A0,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.T,!0,u,A.aK(!1,t,!0,A.v(A.a([A.I(A.t(u,A.bS(p,A.f7(A.v(A.a([new C.aNF(o,u),A.I(n,1),A.t(u,A.F(A.a([A.W(B.CA,B.a9.k(0.85),u,u,9),D.cNQ,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aHf,u,u,u)],w),B.n,u,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,u,u,new A.p(u,u,r,s,q,D.a1U,B.p),u,u,u,u,B.hk,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a9.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.K,0,u,u,u,u,u,B.a5)}}
C.aNF.prototype={
B(d){var w=null
return A.t(w,A.F(A.a([A.I(A.d(B.h.gad(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tx,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.Yn,w,w,w)}}
C.L3.prototype={
W(){return new C.aOT()}}
C.aOT.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fs:B.by,t=A.aQ(w,w,w,w,B.a1_,w,w,w,new C.cTA(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bV(!0,A.v(A.a([new A.H(D.YA,A.F(A.a([t,A.I(new A.KT(A.F(A.a([A.I(new A.H(B.jn,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.T,!0,w,A.aK(!1,w,!0,new A.H(B.bc,A.W(B.ho,B.a9,w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cTB(d),w,w,w,w,w,w,w),B.k,B.K,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.I(new A.lx($.Qr(),new C.cTC(this),w,w,x.j),1)],r),B.n,w,B.i,B.j,0,B.q),!1,B.ae,!0,!0),w,!1,!1,w,w)}}
C.aVZ.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a9.k(0.35),B.f5,28),new A.a9(0,B.H,B.A.k(0.45),B.d7,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dLw(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaPE(),v+"_full")
w=v}else w=new C.aOZ(t.r,s)}else w=new C.aJO(m,s)
else w=D.dnB
return A.t(s,A.bS(n,A.f7(A.v(A.a([new C.aW_(m,l,s),A.I(w,1),new C.aVY(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,s,s,new A.p(s,s,o,q,p,D.a1U,B.p),s,r*2.05,s,s,B.bW,s,s,r)}}
C.aW_.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dp(r)
r=A.hm(r)
w=new A.dK(q,r)
v=w.gKq()===0?12:w.gKq()
r=B.b.bb(B.l.q(r),2,"0")
q=(q<12?B.hg:B.ji)===B.hg?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.np,s,s,s),B.aU,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bB,D.aSX,B.dT,D.aS6,B.dT,D.aT1],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aJ,A.F(A.a([A.W(B.Ct,B.a9.k(0.9),s,s,12),B.dT,A.I(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aIj,s,s,s)}}
C.aOZ.prototype={
B(d){var w=null
return A.t(w,A.aE(A.v(A.a([A.W(B.BT,B.e.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eP(D.aWx,D.d3u,this.c,A.ec(w,w,w,w,w,w,w,w,w,B.a9,w,w,w,w,w,new A.aH(B.a9.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.k,B.A0,w,w,w,w,w,w,w,w,w,1/0)}}
C.aVY.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azx(B.Cn,"YouTube",s===0,r,new C.d8o(u))
s=u.azx(B.kP,"Device",s===1,r,new C.d8p(u))
w=r?"Power off":"Power on"
v=r?D.a0c:D.aQ5
return A.t(t,A.F(A.a([q,B.ah,s,B.aU,A.aQ(t,t,t,t,A.W(v,r?B.bO:B.hr,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dC)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aHV,t,t,t)},
azx(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bk
else w=f?B.a9:B.av
v=f&&g?B.a9.k(0.15):B.K
u=A.m(10)
t=g?h:s
return A.I(A.aC(!1,B.T,!0,u,A.aK(!1,A.m(10),!0,new A.H(B.o_,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a5),1)}}
C.aQj.prototype={
B(d){return D.awk}}
C.aJO.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.km,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u0("Serial",u.c),q=w.u0("Model",u.d),p=w.u0("Device ID",u.e),o=w.u0("IMEI",u.r),n=w.u0("MAC",u.f),m=w.u0("OS",u.w+" "+u.x),l=w.u0("Location",u.y+", "+u.z),k=w.u0("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.u0("Timezone",u.at)
u=u.ax
return A.e4(A.a([t,B.aJ,s,B.ac,r,q,p,o,n,m,l,k,j,w.u0("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bc,v,v,B.an,!1)},
u0(d,e){var w=null
return new A.H(B.d6,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cy,A.d(e,w,w,w,w,w,w,D.cVx,w,w,w)],x.p),B.G,w,B.i,B.j,0,B.q),w)}}
C.L7.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qU.prototype={
gaPE(){var w=this.c
return w===D.agg||w===D.agh||w===D.Pw||w===D.agi}}
C.a8e.prototype={
W(){return new C.aOU(null,null)}}
C.aOU.prototype={
a_(){this.a5()
var w=A.bg(null,B.rM,null,1,null,this)
w.fR(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZV()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cA(t,new A.p(t,t,t,t,t,new A.ab(B.bZ,B.bR,B.E,A.a([B.K,B.A.k(0.55)],x.O),t,t),B.p),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cf(B.cN,p,t)
w=B.e.k(0.92)
q=A.aE(new A.cJ(new A.aZ(p,new A.bi(0.72,1,q),q.j("aZ<bk.T>")),!1,A.W(B.k9,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nN
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQo(s,t),r,q,A.az(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.S(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.az(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.az(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ay(B.ad,t,B.b6,B.t,s,t)}}
C.aQo.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.le(u,B.L,new C.cYt(this),B.bS,!0,w,w,new C.cYu(this),w)
return new C.Gl(v,w)}}
C.Gl.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.ms,B.Ur],x.O),B.k9)
break
case 1:w=new A.aM(A.a([B.A0,D.aBC],x.O),B.lK)
break
case 2:w=new A.aM(A.a([D.aDi,D.aB1],x.O),B.C1)
break
case 3:w=new A.aM(A.a([B.W,B.dH],x.O),B.C9)
break
case 4:w=new A.aM(A.a([B.aw,B.aL],x.O),B.of)
break
default:w=u}v=w.a
return A.t(u,A.aE(A.W(w.b,B.a9.k(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ab(B.aB,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anx.prototype={
p(){var w=this,v=w.aI$
if(v!=null)v.Y(0,w.gd8())
w.aI$=null
w.a3()},
bi(){this.bv()
this.bs()
this.d9()}}
C.a8f.prototype={
W(){return new C.aii()}}
C.aii.prototype={
a9s(d,e){var w,v=C.btp(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dz6(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e9_(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bK4(){var w,v=this
if(v.w)return
v.n(new C.cTP(v))
w=v.e
if(w!=null)v.a9s(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aG()
u.d=w
try{$.z3()
$.oa().qF(w,new C.cTY(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cTR(v))
w=v.e
w.toString
v.a9s(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0q,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.f7(A.aE(new A.H(new A.S(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.J2(n,B.or,w)],v)
if(o.f)w.push(A.f7(A.aE(new A.aa(28,28,D.axy,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bk,B.u,1)
q=A.W(B.MA,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.eh(0,A.aC(!1,B.T,!0,n,A.aK(!1,n,!0,A.aE(A.t(n,A.F(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.Ks,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbK3(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a5)))}v=C.btp(o.a.d)
if(v!=null)w.push(A.az(8,A.jg(D.aUt,D.dbk,new C.cTQ(o),A.j4(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hj,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ay(B.ad,n,B.b6,B.t,w,n)}}
var z=a.updateTypes(["o(oB)","~()","L4(P)","oB(Z<@,@>)","a0(oB)","Z<o,@>(oB)","aD<~>()","L3(P)","lx<K>(P,qU?,q?)","Ya(P,K)","uE(P,qU?,q?)","Gl(P,ap,dJ?)"])
C.dv_.prototype={
$1(d){return new C.L4(this.a,null)},
$S:z+2}
C.duZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e9,B.W],j):A.a([B.e,B.ax],j),h=A.a([new A.a9(0,B.H,B.a9.k(0.22),B.f5,32)],x.V),g=A.L(m?B.c6:B.a9.k(0.18),B.u,1),f=A.m(28),e=B.a9.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.t(n,D.aRP,B.k,n,n,new A.p(B.a9.k(0.18),n,A.L(B.a9.k(0.45),B.u,1),n,n,n,B.am),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.v(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.j,0,B.q),1)
j=A.t(n,A.F(A.a([e,B.f7,w,A.aQ(n,n,n,n,A.W(B.cY,m?B.av:B.d_,n,n,n),n,n,n,new C.duV(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ab(B.a2,B.a6,B.E,j,n,n),B.p),n,n,n,n,B.Ky,n,n,n)
e=A.eF(B.cU,A.a([new C.OB("YouTube",B.Mw,m,n),new C.OB("TikTok",B.lK,m,n),new C.OB("Instagram",B.C1,m,n),new C.OB("Facebook",B.C9,m,n)],v),B.cL,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ce:B.iO,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aL:B.by
r=A.W(B.fw,B.a9.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c6:B.aM
u=A.v(A.a([e,B.aQ,A.aN(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aH(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Te),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ab,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.ar,n,B.i,B.j,0,B.q)
e=A.jg(D.aRS,D.dfh,new C.duW(d),A.j4(n,n,n,n,n,n,n,n,n,n,n,m?B.bq:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.S(12,0,12,12+l.f.d),A.cA(A.bS(f,A.v(A.a([j,new A.H(B.Y9,u,n),new A.H(D.aJK,A.F(A.a([e,B.aU,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.duX(d),n,n),B.ah,A.dG(D.aWf,D.dg5,new C.duY(d,w),A.bv(B.a9,n,n,n,B.e,n,B.Ks,n,new A.bx(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ab(B.aB,B.aI,B.E,i,n,n),B.p),B.br),n)},
$S:92}
C.duV.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.duW.prototype={
$0(){C.dLu()
$.Qr().sv(0,null)
A.a3(this.a,!1).P(null)},
$S:0}
C.duX.prototype={
$0(){A.a3(this.a,!1).P(null)
return null},
$S:0}
C.duY.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).P(w)
return null},
$S:0}
C.btB.prototype={
$1(d){return C.dLv(A.U(d,x.N,x.z))},
$S:z+3}
C.btC.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.btt.prototype={
$1(d){return d.c},
$S:z+0}
C.btu.prototype={
$1(d){return d.r},
$S:z+0}
C.btv.prototype={
$1(d){return d.f},
$S:z+0}
C.btw.prototype={
$1(d){return d.at},
$S:z+0}
C.btx.prototype={
$1(d){return d.c},
$S:z+0}
C.bty.prototype={
$1(d){return d.r},
$S:z+0}
C.btz.prototype={
$1(d){return d.f},
$S:z+0}
C.btA.prototype={
$1(d){return d.at},
$S:z+0}
C.bts.prototype={
$1(d){return d.a9()},
$S:z+5}
C.btr.prototype={
$1(d){return B.b.bb(B.l.fT(d,16),2,"0").toUpperCase()},
$S:79}
C.cTG.prototype={
$0(){},
$S:0}
C.cTF.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cTD.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cTE.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cTH.prototype={
$1(d){return new C.L3(this.a,null)},
$S:z+7}
C.cTM.prototype={
$4(d,e,f,g){var w=null,v=A.aQ(w,w,w,w,B.qa,w,w,w,new C.cTL(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.F(A.a([v,A.I(A.fQ(A.F(A.a([new A.oz(D.xs,e,g,36,B.Ct,w),B.aS,A.I(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.h2(B.h.gN(D.xs).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.T,!0,w,A.aK(!1,w,!0,new A.H(B.bW,A.W(B.ho,A.an(B.h.gN(D.xs),B.h.gad(D.xs),e),w,w,28),w),B.cs,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbue(),w,w,w,w,w,w,w),B.k,B.K,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.j,0,w,w),D.xs,w,g,B.fb,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:330}
C.cTL.prototype={
$0(){return A.a3(this.a,!1).eE()},
$S:0}
C.cTN.prototype={
$3(d,e,f){return new A.lx($.Hv(),new C.cTK(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cTK.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E7(d,k,x.Q)
w=w==null?k:w.glL()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a9.k(0.12)
s=A.m(12)
r=A.L(B.a9.k(0.35),B.u,1)
q=A.W(B.k9,B.a9,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Hv().a
m=B.m.U(n+4,1,o)
t=A.a([A.t(k,A.F(A.a([q,B.ah,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dq,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bS(s,new A.j8(1.7777777777777777,C.dLw(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaPE(),"fleet_master"),k),B.aA),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wz(0,B.t,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kX(new A.H(B.Km,A.v(u,B.G,k,B.i,B.j,0,B.q),k),k),new A.oM(D.aHq,A.aEr(new A.nW(new C.cTJ(i,j),J.a4(i.d),!1,!0,!0,A.u2(),k),D.cOG),k)],w))},
$S:1790}
C.cTJ.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Ya(v,e,J.a4(w.d),new C.cTI(w,v),this.b,null)},
$S:z+9}
C.cTI.prototype={
$0(){return this.a.btC(this.b)},
$S:0}
C.cTO.prototype={
$0(){this.a.W5()
return null},
$S:0}
C.cTA.prototype={
$0(){return A.a3(this.a,!1).eE()},
$S:0}
C.cTB.prototype={
$0(){C.a_Z(this.a,$.btq)
return null},
$S:0}
C.cTC.prototype={
$3(d,e,f){return A.f_(new C.cTz(this.a,e))},
$S:z+10}
C.cTz.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aE(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aQ,new C.aVZ(u,s.a.c,s.e,s.d,new C.cTw(s),new C.cTx(s),new C.cTy(s),t,v)],x.p),B.n,v,B.i,B.j,0,B.q),B.t,v,B.F,v,B.pF,v,v,B.an),v,v,v)},
$S:1791}
C.cTw.prototype={
$0(){var w=this.a.c
w.toString
C.a_Z(w,$.btq)
return null},
$S:0}
C.cTx.prototype={
$1(d){var w=this.a
return w.n(new C.cTv(w,d))},
$S:29}
C.cTv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cTy.prototype={
$0(){var w=this.a
return w.n(new C.cTu(w))},
$S:0}
C.cTu.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d8o.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d8p.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cYt.prototype={
$3(d,e,f){return new C.Gl(this.a.c,null)},
$S:z+11}
C.cYu.prototype={
$3(d,e,f){if(f==null)return e
return new A.ay(B.ad,null,B.b6,B.t,A.a([new C.Gl(this.a.c,null),D.awD],x.p),null)},
$C:"$3",
$R:3,
$S:513}
C.cTP.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cTY.prototype={
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
w.a9s(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fU(v,"load",new C.cTV(w),!1,u)
v=w.e
v.toString
A.fU(v,"error",new C.cTW(w),!1,u)
A.bF(B.k_,new C.cTX(w),x.H)
w=w.e
w.toString
return w},
$S:624}
C.cTV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTU(w))},
$S:42}
C.cTU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cTW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTT(w))},
$S:42}
C.cTT.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cTX.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cTS(w))},
$S:12}
C.cTS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cTR.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cTQ.prototype={
$0(){var w,v=C.btp(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kq.KK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dr3.prototype={
$1(d){var w,v,u,t,s=new A.y7([],[]).zR(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1792};(function aliases(){var w=C.anx.prototype
w.aZV=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aih.prototype,"gazG","bqX",1)
w(u,"gbrx","bry",1)
w(u,"gbue","buf",6)
w(C.aii.prototype,"gbK3","bK4",1)
v(C,"esX","dLt",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zm,[C.dv_,C.duZ,C.btB,C.btC,C.btt,C.btu,C.btv,C.btw,C.btx,C.bty,C.btz,C.btA,C.bts,C.btr,C.cTH,C.cTM,C.cTN,C.cTK,C.cTC,C.cTx,C.cYt,C.cYu,C.cTY,C.cTV,C.cTW,C.dr3])
v(A.a1s,[C.duV,C.duW,C.duX,C.duY,C.cTG,C.cTF,C.cTD,C.cTE,C.cTL,C.cTI,C.cTO,C.cTA,C.cTB,C.cTw,C.cTv,C.cTy,C.cTu,C.d8o,C.d8p,C.cTP,C.cTU,C.cTT,C.cTX,C.cTS,C.cTR,C.cTQ])
v(A.as,[C.OB,C.Ya,C.aNF,C.aVZ,C.aW_,C.aOZ,C.aVY,C.aQj,C.aJO,C.aQo,C.Gl])
v(A.ap,[C.oB,C.qU])
v(A.ad,[C.L4,C.L3,C.a8e,C.a8f])
v(A.ae,[C.aih,C.aOT,C.anx,C.aii])
v(A.a1t,[C.cTJ,C.cTz])
u(C.L7,A.aKJ)
u(C.aOU,C.anx)
w(C.anx,A.dI)})()
A.dP4(b.typeUniverse,JSON.parse('{"L4":{"ad":[],"q":[]},"Ya":{"as":[],"q":[]},"L3":{"ad":[],"q":[]},"OB":{"as":[],"q":[]},"aih":{"ae":["L4"]},"aNF":{"as":[],"q":[]},"aOT":{"ae":["L3"]},"aVZ":{"as":[],"q":[]},"aW_":{"as":[],"q":[]},"aOZ":{"as":[],"q":[]},"aVY":{"as":[],"q":[]},"aQj":{"as":[],"q":[]},"aJO":{"as":[],"q":[]},"a8e":{"ad":[],"q":[]},"Gl":{"as":[],"q":[]},"aOU":{"ae":["a8e"]},"aQo":{"as":[],"q":[]},"a8f":{"ad":[],"q":[]},"aii":{"ae":["a8f"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a5<a9>"),O:w("a5<x>"),e:w("a5<oB>"),S:w("a5<h2>"),s:w("a5<o>"),p:w("a5<q>"),t:w("a5<K>"),X:w("ag<oB>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ov"),_:w("E4"),k:w("oB"),N:w("o"),Y:w("bi<a2>"),W:w("d3<o>"),J:w("lx<K>"),j:w("lx<qU?>"),E:w("tD<cZ>"),q:w("Z0"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a0c=new A.N(983224,"MaterialIcons",!1)
D.aUA=new A.ac(D.a0c,48,B.bk,null,null,null)
D.d2m=new A.B("Powered off",null,B.any,null,null,null,null,null,null,null,null,null)
D.bQC=w([D.aUA,B.O,D.d2m],x.p)
D.aEJ=new A.eG(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bQC,null)
D.awk=new A.da(B.L,null,null,D.aEJ,null)
D.cOj=new A.aa(18,18,B.U9,null)
D.awD=new A.da(B.L,null,null,D.cOj,null)
D.axy=new A.fW(2,null,null,null,null,B.aa,null,null,null,null)
D.aB1=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBC=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDi=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aHf=new A.S(0,3,0,3)
D.aHq=new A.S(10,0,10,88)
D.aHV=new A.S(12,6,12,10)
D.aIj=new A.S(14,8,14,6)
D.aJK=new A.S(20,8,20,20)
D.YA=new A.S(8,6,15,8)
D.aQ5=new A.N(983222,"MaterialIcons",!1)
D.aRP=new A.ac(B.k9,26,B.a9,null,null,null)
D.aRS=new A.ac(B.a_h,18,null,null,null,null)
D.aS6=new A.ac(B.tx,14,B.aa,null,null,null)
D.aQr=new A.N(983420,"MaterialIcons",!1)
D.aSX=new A.ac(D.aQr,14,B.aa,null,null,null)
D.aOu=new A.N(62895,"MaterialIcons",!1)
D.aT1=new A.ac(D.aOu,14,B.aa,null,null,null)
D.aUt=new A.ac(B.tq,16,B.aa,null,null,null)
D.aWf=new A.ac(B.ir,20,null,null,null,null)
D.aWx=new A.ac(B.ho,16,null,null,null,null)
D.bUo=w([B.aL,B.W],x.O)
D.a1U=new A.ab(B.aB,B.aI,B.E,D.bUo,null,null)
D.cHM=new A.aM("NGMY OS","14.2.1")
D.cGv=new A.aM("VirtualDroid","13.8.4")
D.cGu=new A.aM("NGMY OS","15.0.0")
D.cHi=new A.aM("VirtualDroid","14.1.2")
D.cGs=new A.aM("NGMY Tab OS","12.9.7")
D.cGq=new A.aM("NGMY OS","13.5.3")
D.cGf=new A.aM("VirtualDroid","15.2.0")
D.cGS=new A.aM("NGMY OS","14.8.1")
D.cHo=new A.aM("NGMY Tab OS","13.2.4")
D.cHY=new A.aM("VirtualDroid","12.6.9")
D.cG9=new A.aM("NGMY OS","16.0.1")
D.cFV=new A.aM("VirtualDroid","14.9.0")
D.cHD=new A.aM("NGMY Tab OS","14.0.3")
D.cGE=new A.aM("NGMY OS","13.1.8")
D.cG8=new A.aM("VirtualDroid","13.4.5")
D.cGp=new A.aM("NGMY OS","15.3.2")
D.cHp=new A.aM("NGMY Tab OS","12.4.1")
D.cHG=new A.aM("VirtualDroid","16.1.0")
D.cGR=new A.aM("NGMY OS","14.4.6")
D.cHN=new A.aM("VirtualDroid","15.0.8")
D.bTB=w([D.cHM,D.cGv,D.cGu,D.cHi,D.cGs,D.cGq,D.cGf,D.cGS,D.cHo,D.cHY,D.cG9,D.cFV,D.cHD,D.cGE,D.cG8,D.cGp,D.cHp,D.cHG,D.cGR,D.cHN],A.b4("a5<+(o,o)>"))
D.xs=w([B.a9,B.fl],x.O)
D.cK7=new A.eW(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJG=new A.eW(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJB=new A.eW(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJK=new A.eW(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJx=new A.eW(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJM=new A.eW(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cK9=new A.eW(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJy=new A.eW(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJF=new A.eW(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJO=new A.eW(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJw=new A.eW(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cK1=new A.eW(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJZ=new A.eW(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJE=new A.eW(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJW=new A.eW(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJV=new A.eW(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJv=new A.eW(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJJ=new A.eW(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJT=new A.eW(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJY=new A.eW(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8F=w([D.cK7,D.cJG,D.cJB,D.cJK,D.cJx,D.cJM,D.cK9,D.cJy,D.cJF,D.cJO,D.cJw,D.cK1,D.cJZ,D.cJE,D.cJW,D.cJV,D.cJv,D.cJJ,D.cJT,D.cJY],A.b4("a5<+(o,o,a2,a2,o)>"))
D.c21=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.agg=new C.L7(0,"youtube")
D.agh=new C.L7(1,"tiktok")
D.Pw=new C.L7(2,"instagram")
D.agi=new C.L7(3,"facebook")
D.cyQ=new C.L7(4,"other")
D.cNQ=new A.aa(3,null,null,null)
D.cOG=new A.i_(4,10,8,0.52,null)
D.d3E=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cS5=new A.aV(D.d3E,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cVx=new A.M(!0,B.e,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d3u=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dbk=new A.B("Open in YouTube",null,B.j7,null,null,null,null,null,null,null,null,null)
D.dfh=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dg5=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dgd=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dnB=new C.aQj(null)})();(function staticFields(){$.dLs=20
$.aAk=null
$.btq=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"exX","Hv",()=>A.acC(0))
w($,"exY","Qr",()=>A.acC(null))})()};
(a=>{a["6Jf6NaWUw+H7SqVy1T2m7aFovr0="]=a.current})($__dart_deferred_initializers__);