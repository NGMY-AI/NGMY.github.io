((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eu3(d,e){A.a4(d,!1).cv(A.eJ(new C.duZ(e),!0,null,x.H))},
a_X(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_X=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Qo()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.al(new A.bc(n,B.aO,B.aC),t)
w=3
return A.b(A.dx(B.L,new C.duY(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_X)
case 3:r=g
s.I$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e95(r)
if(q==null){d.H(x.q).f.T(D.cRZ)
w=1
break}w=4
return A.b(A.bF(B.im,null,x.H),$async$a_X)
case 4:if(d.e==null){w=1
break}n=B.l.U(e,1,999)
$.dLr=n
p=C.e9_(n)
n=$.Hs()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dz6(q)
d.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_X,v)},
dLu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
L3(d){return C.e98(d)},
e98(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$L3=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$L3)
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
k=A.di(k,new C.btC(),k.$ti.j("G.E"),x.k)
j=A.R(k).j("ai<G.E>")
i=A.z(new A.ai(k,new C.btD(),j),j.j("G.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dLw(q)
w=12
return A.b(C.L2(a3,p),$async$L3)
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
case 19:m=C.dLu(A.U(n,x.N,x.z))
l=C.dLw(A.a([m],x.e))
w=21
return A.b(C.L2(a3,l),$async$L3)
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
case 18:case 14:q=C.e96()
w=22
return A.b(C.L2(a3,q),$async$L3)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L3,v)},
dLw(d){var w=A.Y(d).j("E<1,o>"),v=new A.E(d,new C.btu(),w).en(0),u=new A.E(d,new C.btv(),w).en(0),t=new A.E(d,new C.btw(),w).en(0),s=new A.E(d,new C.btx(),w).en(0),r=A.bh(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dz7(null,q,u,t,v,s));++q}return r},
aAi(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aAi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L3(d),$async$aAi)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.dk(t,new C.bty(),s).en(0)
p=r.dk(t,new C.btz(),s).en(0)
o=r.dk(t,new C.btA(),s).en(0)
n=r.dk(t,new C.btB(),s).en(0)
m=C.dz7(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.L2(d,t),$async$aAi)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aAi,v)},
L2(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$L2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$L2)
case 2:u=g
t=B.b.i(d)
s=J.aW(e,new C.btt(),x.P)
s=A.z(s,s.$ti.j("a5.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.aj(s,null)),$async$L2)
case 3:return A.h(null,v)}})
return A.i($async$L2,v)},
e96(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dA(20,x.k)
for(w=0;w<20;++w)q[w]=C.dz7(w,w,t,s,u,r)
return q},
dz7(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jT(),h=d==null,g=D.a8z[B.l.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a8z[B.l.a1(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.E(p,new C.bts(),A.Y(p).j("E<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bb(B.l.h0(i.bG(256),16),2,"0")
s=B.h.bk(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a1(e,20)
k=D.c1Q[w]
j=D.bTp[w]
return new C.oC("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bb(B.l.q(e+1),2,"0"),u,k,C.e97(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a0())},
e97(d,e){var w,v=J.dA(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bb(B.l.h0(d.bG(256),16),2,"0")
return B.h.fA(v)},
duZ:function duZ(d){this.a=d},
duY:function duY(d,e){this.a=d
this.b=e},
duU:function duU(d){this.a=d},
duV:function duV(d){this.a=d},
duW:function duW(d){this.a=d},
duX:function duX(d,e){this.a=d
this.b=e},
Oz:function Oz(d,e,f,g){var _=this
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
L1:function L1(d,e){this.c=d
this.a=e},
aif:function aif(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cTE:function cTE(){},
cTD:function cTD(d,e){this.a=d
this.b=e},
cTB:function cTB(d){this.a=d},
cTC:function cTC(d,e){this.a=d
this.b=e},
cTF:function cTF(d){this.a=d},
cTK:function cTK(d){this.a=d},
cTJ:function cTJ(d){this.a=d},
cTL:function cTL(d,e){this.a=d
this.b=e},
cTI:function cTI(d,e,f){this.a=d
this.b=e
this.c=f},
cTH:function cTH(d,e){this.a=d
this.b=e},
cTG:function cTG(d,e){this.a=d
this.b=e},
cTM:function cTM(d){this.a=d},
Y7:function Y7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNG:function aNG(d,e){this.c=d
this.a=e},
L0:function L0(d,e){this.c=d
this.a=e},
aOU:function aOU(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cTy:function cTy(d){this.a=d},
cTz:function cTz(d){this.a=d},
cTA:function cTA(d){this.a=d},
cTx:function cTx(d,e){this.a=d
this.b=e},
cTu:function cTu(d){this.a=d},
cTv:function cTv(d){this.a=d},
cTt:function cTt(d,e){this.a=d
this.b=e},
cTw:function cTw(d){this.a=d},
cTs:function cTs(d){this.a=d},
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
d8n:function d8n(d){this.a=d},
d8o:function d8o(d){this.a=d},
aQl:function aQl(d){this.a=d},
aJM:function aJM(d,e){this.c=d
this.a=e},
e95(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e94(v)
if(u!=null)return new C.qR(w,C.dz5(u,!1),D.aga,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e93(v)
if(t!=null)return new C.qR(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.agb,"TikTok",q)
s=C.e92(w,v)
if(s!=null)return s
r=C.e91(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qR(w,w,D.cyG,"Video",q)
return q},
e92(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dz(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qR(d,"https://www.instagram.com/reel/"+w+u,D.Ps,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dz(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qR(d,"https://www.instagram.com/p/"+w+u,D.Ps,t,null)}return null},
e91(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qR(d,"https://www.facebook.com/plugins/video.php?href="+A.ff(2,d,B.bj,!1)+"&show_text=false&width=734",D.agc,"Facebook",null)},
e94(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dz(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e93(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dz(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dz(d)
return w==null?null:w.b[1]},
L4:function L4(d,e){this.a=d
this.b=e},
qR:function qR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8b:function a8b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aOV:function aOV(d,e){var _=this
_.d=$
_.cz$=d
_.aI$=e
_.c=_.a=null},
aQq:function aQq(d,e){this.c=d
this.a=e},
cYr:function cYr(d){this.a=d},
cYs:function cYs(d){this.a=d},
Gi:function Gi(d,e){this.c=d
this.a=e},
anu:function anu(){},
dLv(d,e,f,g,h,i){return new C.a8c(i,f,h,e,g,d)},
esH(d){var w=window
w.toString
A.fT(w,"message",new C.dr2(d),!1,x._)},
a8c:function a8c(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aig:function aig(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cTN:function cTN(d){this.a=d},
cTW:function cTW(d){this.a=d},
cTT:function cTT(d){this.a=d},
cTS:function cTS(d){this.a=d},
cTU:function cTU(d){this.a=d},
cTR:function cTR(d){this.a=d},
cTV:function cTV(d){this.a=d},
cTQ:function cTQ(d){this.a=d},
cTP:function cTP(d){this.a=d},
cTO:function cTO(d){this.a=d},
dr2:function dr2(d){this.a=d},
e8Y(){var w,v,u
try{v=A.y0()
w=v.gv7(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cF(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dz5(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bk(w,"&")},
btq(d){var w=A.ao(y.c,!0,!1,!1,!1).dz(d)
return w==null?null:w.b[1]},
dLq(d){var w=A.b2(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b2(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e8Z(d,e,f){var w,v,u=C.btq(d)
if(u!=null){if(f){w=C.e8Y()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dLq(C.dz5(u,e))}return C.dLq(d)},
e9_(d){if(d<=4)return 0
return B.l.aG(d-1,4)*4},
e90(d){var w
if($.Qo().a==null)return!1
w=$.Hs().a
return d>=w&&d<w+4},
dLt(){var w=$.aAh
if(w!=null)w.ab(0)
$.aAh=null
$.Hs().sv(0,0)},
dLs(){var w,v,u,t=$.Qo()
if(t.a==null)return
w=$.aAh
if(w!=null)w.ab(0)
v=$.dLr
if(v<=4){t=t.a
t.toString
C.dz6(t)
return}w=$.Hs()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dz6(t)},
dz6(d){var w=$.aAh
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
default:w=null}$.aAh=A.dw(A.df(0,0,0,0,0,w),C.esW())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Oz.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.L(B.a9.k(0.25),B.u,1),r=A.W(this.d,B.a9,w,w,14)
return A.t(w,A.F(A.a([r,B.fB,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a_,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.hk,w,w,w)}}
C.oC.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.L1.prototype={
W(){return new C.aif(A.a([],x.e))},
gdP(){return this.c}}
C.aif.prototype={
a_(){var w=this
w.a5()
$.Hs().av(0,w.gazs())
C.esH(w.gbrb())
w.a_d()},
bqB(){if(this.c!=null)this.n(new C.cTE())},
brc(){C.dLs()},
p(){$.Hs().Y(0,this.gazs())
C.dLt()
$.Qo().sv(0,null)
this.a4()},
a_d(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.L3(t.a.c),$async$a_d)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTD(t,s))
$.btr=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a_d,v)},
W0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cTB(t))
w=3
return A.b(C.aAi(t.a.c),$async$W0)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cTC(t,s))
$.btr=J.a3(t.d)
t.c.H(x.q).f.T(A.bo(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$W0,v)},
btg(d){var w=this.c
w.toString
A.a4(w,!1).cv(A.eJ(new C.cTF(d),!1,null,x.H))},
btU(){var w=this.c
w.toString
return C.a_X(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fs:B.bA,s=A.bW(!0,A.v(A.a([new A.I(D.Yu,new A.jc(new C.cTK(w),v),v),A.H(w.e?B.nE:new A.lw($.Qo(),new C.cTL(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.j,0,B.q),!1,B.ad,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.atP(B.a9,B.I3,B.mS,D.dg2,w.e?v:new C.cTM(w)),v)}}
C.Y7.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.k(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a9.k(0.18),B.dv,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a8b(n,!0,!C.e90(w),"Fold "+(B.l.aG(w,4)+1)+"/"+B.l.aG(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.ka,B.nN,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.aZ,B.j,0,B.q),B.k,B.zY,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aC(!1,B.S,!0,u,A.aL(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bU(p,A.f7(A.v(A.a([new C.aNG(o,u),A.H(n,1),A.t(u,A.F(A.a([A.W(B.Cy,B.a9.k(0.85),u,u,9),D.cNH,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aZ,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,u,D.aH9,u,u,u)],w),B.n,u,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,u,u,new A.p(u,u,r,s,q,D.a1R,B.p),u,u,u,u,B.hl,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a9.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a5)}}
C.aNG.prototype={
B(d){var w=null
return A.t(w,A.F(A.a([A.H(A.d(B.h.gad(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tv,B.e.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,w,B.Yh,w,w,w)}}
C.L0.prototype={
W(){return new C.aOU()}}
C.aOU.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fs:B.bA,t=A.aR(w,w,w,w,B.a0X,w,w,w,new C.cTy(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bW(!0,A.v(A.a([new A.I(D.Yu,A.F(A.a([t,A.H(new A.KQ(A.F(A.a([A.H(new A.I(B.jn,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aC(!1,B.S,!0,w,A.aL(!1,w,!0,new A.I(B.bd,A.W(B.hp,B.a9,w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cTz(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a5)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lw($.Qo(),new C.cTA(this),w,w,x.j),1)],r),B.n,w,B.i,B.j,0,B.q),!1,B.ad,!0,!0),w,!1,!1,w,w)}}
C.aW_.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a9.k(0.35),B.f5,28),new A.a9(0,B.H,B.A.k(0.45),B.d5,18)],x.V),o=A.L(B.e.k(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dLv(new A.d3(v+"_full_"+u,x.W),!1,u,!1,w.gaPq(),v+"_full")
w=v}else w=new C.aP_(t.r,s)}else w=new C.aJM(m,s)
else w=D.dns
return A.t(s,A.bU(n,A.f7(A.v(A.a([new C.aW0(m,l,s),A.H(w,1),new C.aVZ(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.j,0,B.q),B.A,!0),B.aA),B.k,s,s,new A.p(s,s,o,q,p,D.a1R,B.p),s,r*2.05,s,s,B.bW,s,s,r)}}
C.aW0.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dp(r)
r=A.hm(r)
w=new A.dK(q,r)
v=w.gKo()===0?12:w.gKo()
r=B.b.bb(B.l.q(r),2,"0")
q=(q<12?B.hh:B.ji)===B.hh?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.np,s,s,s),B.aV,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bD,D.aSQ,B.dV,D.aS_,B.dV,D.aSV],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.F(A.a([A.W(B.Cr,B.a9.k(0.9),s,s,12),B.dV,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,s,B.i,B.j,0,B.q),B.k,B.aw,s,s,s,s,s,s,D.aId,s,s,s)}}
C.aP_.prototype={
B(d){var w=null
return A.t(w,A.aE(A.v(A.a([A.W(B.BQ,B.e.k(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aL,A.eQ(D.aWq,D.d3i,this.c,A.eb(w,w,w,w,w,w,w,w,w,B.a9,w,w,w,w,w,new A.aG(B.a9.k(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,w,B.i,B.a_,0,B.q),w,w,w),B.k,B.zY,w,w,w,w,w,w,w,w,w,1/0)}}
C.aVZ.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.azj(B.Cl,"YouTube",s===0,r,new C.d8n(u))
s=u.azj(B.kP,"Device",s===1,r,new C.d8o(u))
w=r?"Power off":"Power on"
v=r?D.a08:D.aQ0
return A.t(t,A.F(A.a([q,B.ai,s,B.aV,A.aR(t,t,t,t,A.W(v,r?B.bS:B.hs,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dC)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,t,D.aHP,t,t,t)},
azj(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a9:B.av
v=f&&g?B.a9.k(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aC(!1,B.S,!0,u,A.aL(!1,A.m(10),!0,new A.I(B.o_,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a5),1)}}
C.aQl.prototype={
B(d){return D.awc}}
C.aJM.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.km,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.u2("Serial",u.c),q=w.u2("Model",u.d),p=w.u2("Device ID",u.e),o=w.u2("IMEI",u.r),n=w.u2("MAC",u.f),m=w.u2("OS",u.w+" "+u.x),l=w.u2("Location",u.y+", "+u.z),k=w.u2("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.u2("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.u2("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.bd,v,v,B.an,!1)},
u2(d,e){var w=null
return new A.I(B.da,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cx,A.d(e,w,w,w,w,w,w,D.cVp,w,w,w)],x.p),B.G,w,B.i,B.j,0,B.q),w)}}
C.L4.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qR.prototype={
gaPq(){var w=this.c
return w===D.aga||w===D.agb||w===D.Ps||w===D.agc}}
C.a8b.prototype={
W(){return new C.aOV(null,null)}}
C.aOV.prototype={
a_(){this.a5()
var w=A.bg(null,B.rL,null,1,null,this)
w.fR(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aZF()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cA(t,new A.p(t,t,t,t,t,new A.ac(B.bZ,B.bQ,B.E,A.a([B.L,B.A.k(0.55)],x.O),t,t),B.p),B.bt),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cN,p,t)
w=B.e.k(0.92)
q=A.aE(new A.cK(new A.aZ(p,new A.bi(0.72,1,q),q.j("aZ<bk.T>")),!1,A.W(B.ka,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.k(0.22):B.nN
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aQq(s,t),r,q,A.aA(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.S(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.k(0.75)
s.push(A.aA(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.k(0.85)
s.push(A.aA(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.ay(B.ae,t,B.b7,B.t,s,t)}}
C.aQq.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.lc(u,B.K,new C.cYr(this),B.bR,!0,w,w,new C.cYs(this),w)
return new C.Gi(v,w)}}
C.Gi.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.ms,B.Uo],x.O),B.ka)
break
case 1:w=new A.aM(A.a([B.zY,D.aBw],x.O),B.lK)
break
case 2:w=new A.aM(A.a([D.aDd,D.aAW],x.O),B.BZ)
break
case 3:w=new A.aM(A.a([B.W,B.dH],x.O),B.C6)
break
case 4:w=new A.aM(A.a([B.aw,B.aM],x.O),B.of)
break
default:w=u}v=w.a
return A.t(u,A.aE(A.W(w.b,B.a9.k(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ac(B.aB,B.aI,B.E,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.anu.prototype={
p(){var w=this,v=w.aI$
if(v!=null)v.Y(0,w.gd8())
w.aI$=null
w.a4()},
bj(){this.bw()
this.bu()
this.d9()}}
C.a8c.prototype={
W(){return new C.aig()}}
C.aig.prototype={
a9k(d,e){var w,v=C.btq(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dz5(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e8Z(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bJF(){var w,v=this
if(v.w)return
v.n(new C.cTN(v))
w=v.e
if(w!=null)v.a9k(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.z0()
$.ob().qG(w,new C.cTW(u),!0)}catch(v){u.r=!0
u.f=!1}},
b3(d){var w,v=this
v.bf(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cTP(v))
w=v.e
w.toString
v.a9k(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a0n,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.f7(A.aE(new A.I(new A.S(12,12,12,12),A.v(w,B.n,n,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.J_(n,B.or,w)],v)
if(o.f)w.push(A.f7(A.aE(new A.aa(28,28,D.axr,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.L(B.bm,B.u,1)
q=A.W(B.Mu,B.e.k(0.9),n,n,22)
p=B.e.k(0.92)
o.a.toString
w.push(A.ef(0,A.aC(!1,B.S,!0,n,A.aL(!1,n,!0,A.aE(A.t(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a_,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.Kn,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbJE(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a5)))}v=C.btq(o.a.d)
if(v!=null)w.push(A.aA(8,A.jg(D.aUm,D.db9,new C.cTO(o),A.j3(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.hk,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.ay(B.ae,n,B.b7,B.t,w,n)}}
var z=a.updateTypes(["o(oC)","~()","L1(P)","oC(Z<@,@>)","a0(oC)","Z<o,@>(oC)","aD<~>()","L0(P)","lw<K>(P,qR?,q?)","Y7(P,K)","uz(P,qR?,q?)","Gi(P,ap,dJ?)"])
C.duZ.prototype={
$1(d){return new C.L1(this.a,null)},
$S:z+2}
C.duY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e9,B.W],j):A.a([B.e,B.ax],j),h=A.a([new A.a9(0,B.H,B.a9.k(0.22),B.f5,32)],x.V),g=A.L(m?B.c8:B.a9.k(0.18),B.u,1),f=A.m(28),e=B.a9.k(m?0.35:0.14)
j=A.a([e,B.az.k(m?0.18:0.08)],j)
e=A.t(n,D.aRI,B.k,n,n,new A.p(B.a9.k(0.18),n,A.L(B.a9.k(0.45),B.u,1),n,n,n,B.am),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,n,B.i,B.j,0,B.q),1)
j=A.t(n,A.F(A.a([e,B.f7,w,A.aR(n,n,n,n,A.W(B.cY,m?B.av:B.d_,n,n,n),n,n,n,new C.duU(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ac(B.a3,B.a6,B.E,j,n,n),B.p),n,n,n,n,B.Kt,n,n,n)
e=A.eF(B.cU,A.a([new C.Oz("YouTube",B.Mq,m,n),new C.Oz("TikTok",B.lK,m,n),new C.Oz("Instagram",B.BZ,m,n),new C.Oz("Facebook",B.C6,m,n)],v),B.cL,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cd:B.iO,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bA
r=A.W(B.fw,B.a9.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c8:B.aN
u=A.v(A.a([e,B.aQ,A.aN(n,B.R,!0,n,!0,B.t,n,A.aO(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Ta),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a0,n,B.ag,n,n,n,n)],v),B.ar,n,B.i,B.j,0,B.q)
e=A.jg(D.aRL,D.df6,new C.duV(d),A.j3(n,n,n,n,n,n,n,n,n,n,n,m?B.bs:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.S(12,0,12,12+l.f.d),A.cA(A.bU(f,A.v(A.a([j,new A.I(B.Y3,u,n),new A.I(D.aJF,A.F(A.a([e,B.aV,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.duW(d),n,n),B.ai,A.dG(D.aW8,D.dfV,new C.duX(d,w),A.bv(B.a9,n,n,n,B.e,n,B.Kn,n,new A.by(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.ar,n,B.i,B.a_,0,B.q),B.aA),new A.p(n,n,g,k,h,new A.ac(B.aB,B.aI,B.E,i,n,n),B.p),B.bt),n)},
$S:83}
C.duU.prototype={
$0(){A.a4(this.a,!1).P(null)
return null},
$S:0}
C.duV.prototype={
$0(){C.dLt()
$.Qo().sv(0,null)
A.a4(this.a,!1).P(null)},
$S:0}
C.duW.prototype={
$0(){A.a4(this.a,!1).P(null)
return null},
$S:0}
C.duX.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a4(this.a,!1).P(w)
return null},
$S:0}
C.btC.prototype={
$1(d){return C.dLu(A.U(d,x.N,x.z))},
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
$1(d){return d.a9()},
$S:z+5}
C.bts.prototype={
$1(d){return B.b.bb(B.l.h0(d,16),2,"0").toUpperCase()},
$S:89}
C.cTE.prototype={
$0(){},
$S:0}
C.cTD.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cTB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cTC.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cTF.prototype={
$1(d){return new C.L0(this.a,null)},
$S:z+7}
C.cTK.prototype={
$4(d,e,f,g){var w=null,v=A.aR(w,w,w,w,B.tx,w,w,w,new C.cTJ(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.H(A.fP(A.F(A.a([new A.oA(D.xq,e,g,36,B.Cr,w),B.aS,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.h1(B.h.gN(D.xq).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.aC(!1,B.S,!0,w,A.aL(!1,w,!0,new A.I(B.bW,A.W(B.hp,A.an(B.h.gN(D.xq),B.h.gad(D.xq),e),w,w,28),w),B.cr,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbtT(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a5)],s),B.n,w,B.i,B.j,0,w,w),D.xq,w,g,B.fo,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:330}
C.cTJ.prototype={
$0(){return A.a4(this.a,!1).eD()},
$S:0}
C.cTL.prototype={
$3(d,e,f){return new A.lw($.Hs(),new C.cTI(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cTI.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.E5(d,k,x.Q)
w=w==null?k:w.glK()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a9.k(0.12)
s=A.m(12)
r=A.L(B.a9.k(0.35),B.u,1)
q=A.W(B.ka,B.a9,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Hs().a
m=B.m.U(n+4,1,o)
t=A.a([A.t(k,A.F(A.a([q,B.ai,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dp,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bU(s,new A.j7(1.7777777777777777,C.dLv(new A.d3("fleet_master_"+r,x.W),!0,r,!0,j.gaPq(),"fleet_master"),k),B.aA),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wv(0,B.t,k,B.F,k,k,k,k,!1,k,B.an,!1,A.a([new A.kV(new A.I(B.Kh,A.v(u,B.G,k,B.i,B.j,0,B.q),k),k),new A.oN(D.aHk,A.aEo(new A.nX(new C.cTH(i,j),J.a3(i.d),!1,!0,!0,A.tZ(),k),D.cOy),k)],w))},
$S:1790}
C.cTH.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Y7(v,e,J.a3(w.d),new C.cTG(w,v),this.b,null)},
$S:z+9}
C.cTG.prototype={
$0(){return this.a.btg(this.b)},
$S:0}
C.cTM.prototype={
$0(){this.a.W0()
return null},
$S:0}
C.cTy.prototype={
$0(){return A.a4(this.a,!1).eD()},
$S:0}
C.cTz.prototype={
$0(){C.a_X(this.a,$.btr)
return null},
$S:0}
C.cTA.prototype={
$3(d,e,f){return A.eH(new C.cTx(this.a,e))},
$S:z+10}
C.cTx.prototype={
$2(d,e){var w,v=null,u=B.m.U(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aE(A.cx(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aQ,new C.aW_(u,s.a.c,s.e,s.d,new C.cTu(s),new C.cTv(s),new C.cTw(s),t,v)],x.p),B.n,v,B.i,B.j,0,B.q),B.t,v,B.F,v,B.pG,v,v,B.an),v,v,v)},
$S:1791}
C.cTu.prototype={
$0(){var w=this.a.c
w.toString
C.a_X(w,$.btr)
return null},
$S:0}
C.cTv.prototype={
$1(d){var w=this.a
return w.n(new C.cTt(w,d))},
$S:29}
C.cTt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cTw.prototype={
$0(){var w=this.a
return w.n(new C.cTs(w))},
$S:0}
C.cTs.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d8n.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d8o.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cYr.prototype={
$3(d,e,f){return new C.Gi(this.a.c,null)},
$S:z+11}
C.cYs.prototype={
$3(d,e,f){if(f==null)return e
return new A.ay(B.ae,null,B.b7,B.t,A.a([new C.Gi(this.a.c,null),D.aww],x.p),null)},
$C:"$3",
$R:3,
$S:513}
C.cTN.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cTW.prototype={
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
w.a9k(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fT(v,"load",new C.cTT(w),!1,u)
v=w.e
v.toString
A.fT(v,"error",new C.cTU(w),!1,u)
A.bF(B.k_,new C.cTV(w),x.H)
w=w.e
w.toString
return w},
$S:625}
C.cTT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTS(w))},
$S:40}
C.cTS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cTU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTR(w))},
$S:40}
C.cTR.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cTV.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cTQ(w))},
$S:12}
C.cTQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cTP.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cTO.prototype={
$0(){var w,v=C.btq(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kq.KJ(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dr2.prototype={
$1(d){var w,v,u,t,s=new A.y4([],[]).zR(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1792};(function aliases(){var w=C.anu.prototype
w.aZF=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aif.prototype,"gazs","bqB",1)
w(u,"gbrb","brc",1)
w(u,"gbtT","btU",6)
w(C.aig.prototype,"gbJE","bJF",1)
v(C,"esW","dLs",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zj,[C.duZ,C.duY,C.btC,C.btD,C.btu,C.btv,C.btw,C.btx,C.bty,C.btz,C.btA,C.btB,C.btt,C.bts,C.cTF,C.cTK,C.cTL,C.cTI,C.cTA,C.cTv,C.cYr,C.cYs,C.cTW,C.cTT,C.cTU,C.dr2])
v(A.a1q,[C.duU,C.duV,C.duW,C.duX,C.cTE,C.cTD,C.cTB,C.cTC,C.cTJ,C.cTG,C.cTM,C.cTy,C.cTz,C.cTu,C.cTt,C.cTw,C.cTs,C.d8n,C.d8o,C.cTN,C.cTS,C.cTR,C.cTV,C.cTQ,C.cTP,C.cTO])
v(A.as,[C.Oz,C.Y7,C.aNG,C.aW_,C.aW0,C.aP_,C.aVZ,C.aQl,C.aJM,C.aQq,C.Gi])
v(A.ap,[C.oC,C.qR])
v(A.ad,[C.L1,C.L0,C.a8b,C.a8c])
v(A.ae,[C.aif,C.aOU,C.anu,C.aig])
v(A.a1r,[C.cTH,C.cTx])
u(C.L4,A.aKI)
u(C.aOV,C.anu)
w(C.anu,A.dI)})()
A.dP3(b.typeUniverse,JSON.parse('{"L1":{"ad":[],"q":[]},"Y7":{"as":[],"q":[]},"L0":{"ad":[],"q":[]},"Oz":{"as":[],"q":[]},"aif":{"ae":["L1"]},"aNG":{"as":[],"q":[]},"aOU":{"ae":["L0"]},"aW_":{"as":[],"q":[]},"aW0":{"as":[],"q":[]},"aP_":{"as":[],"q":[]},"aVZ":{"as":[],"q":[]},"aQl":{"as":[],"q":[]},"aJM":{"as":[],"q":[]},"a8b":{"ad":[],"q":[]},"Gi":{"as":[],"q":[]},"aOV":{"ae":["a8b"]},"aQq":{"as":[],"q":[]},"a8c":{"ad":[],"q":[]},"aig":{"ae":["a8c"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a6<a9>"),O:w("a6<x>"),e:w("a6<oC>"),S:w("a6<h1>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ag<oC>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("ow"),_:w("E2"),k:w("oC"),N:w("o"),Y:w("bi<a2>"),W:w("d3<o>"),J:w("lw<K>"),j:w("lw<qR?>"),E:w("tz<d_>"),q:w("YZ"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a08=new A.M(983224,"MaterialIcons",!1)
D.aUt=new A.ab(D.a08,48,B.bm,null,null,null)
D.d2a=new A.B("Powered off",null,B.ant,null,null,null,null,null,null,null,null,null)
D.bQs=w([D.aUt,B.O,D.d2a],x.p)
D.aEE=new A.eG(B.an,B.i,B.a_,B.n,null,B.q,null,0,D.bQs,null)
D.awc=new A.d8(B.K,null,null,D.aEE,null)
D.cOa=new A.aa(18,18,B.U5,null)
D.aww=new A.d8(B.K,null,null,D.cOa,null)
D.axr=new A.fV(2,null,null,null,null,B.ab,null,null,null,null)
D.aAW=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aBw=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aDd=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aH9=new A.S(0,3,0,3)
D.aHk=new A.S(10,0,10,88)
D.aHP=new A.S(12,6,12,10)
D.aId=new A.S(14,8,14,6)
D.aJF=new A.S(20,8,20,20)
D.Yu=new A.S(8,6,15,8)
D.aQ0=new A.M(983222,"MaterialIcons",!1)
D.aRI=new A.ab(B.ka,26,B.a9,null,null,null)
D.aRL=new A.ab(B.a_b,18,null,null,null,null)
D.aS_=new A.ab(B.tv,14,B.ab,null,null,null)
D.aQl=new A.M(983420,"MaterialIcons",!1)
D.aSQ=new A.ab(D.aQl,14,B.ab,null,null,null)
D.aOp=new A.M(62895,"MaterialIcons",!1)
D.aSV=new A.ab(D.aOp,14,B.ab,null,null,null)
D.aUm=new A.ab(B.to,16,B.ab,null,null,null)
D.aW8=new A.ab(B.it,20,null,null,null,null)
D.aWq=new A.ab(B.hp,16,null,null,null,null)
D.bUc=w([B.aM,B.W],x.O)
D.a1R=new A.ac(B.aB,B.aI,B.E,D.bUc,null,null)
D.cHE=new A.aM("NGMY OS","14.2.1")
D.cGn=new A.aM("VirtualDroid","13.8.4")
D.cGm=new A.aM("NGMY OS","15.0.0")
D.cHa=new A.aM("VirtualDroid","14.1.2")
D.cGk=new A.aM("NGMY Tab OS","12.9.7")
D.cGi=new A.aM("NGMY OS","13.5.3")
D.cG7=new A.aM("VirtualDroid","15.2.0")
D.cGK=new A.aM("NGMY OS","14.8.1")
D.cHg=new A.aM("NGMY Tab OS","13.2.4")
D.cHQ=new A.aM("VirtualDroid","12.6.9")
D.cG1=new A.aM("NGMY OS","16.0.1")
D.cFN=new A.aM("VirtualDroid","14.9.0")
D.cHv=new A.aM("NGMY Tab OS","14.0.3")
D.cGw=new A.aM("NGMY OS","13.1.8")
D.cG0=new A.aM("VirtualDroid","13.4.5")
D.cGh=new A.aM("NGMY OS","15.3.2")
D.cHh=new A.aM("NGMY Tab OS","12.4.1")
D.cHy=new A.aM("VirtualDroid","16.1.0")
D.cGJ=new A.aM("NGMY OS","14.4.6")
D.cHF=new A.aM("VirtualDroid","15.0.8")
D.bTp=w([D.cHE,D.cGn,D.cGm,D.cHa,D.cGk,D.cGi,D.cG7,D.cGK,D.cHg,D.cHQ,D.cG1,D.cFN,D.cHv,D.cGw,D.cG0,D.cGh,D.cHh,D.cHy,D.cGJ,D.cHF],A.b4("a6<+(o,o)>"))
D.xq=w([B.a9,B.fk],x.O)
D.cK_=new A.eV(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cJy=new A.eV(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cJt=new A.eV(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cJC=new A.eV(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cJp=new A.eV(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cJE=new A.eV(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cK1=new A.eV(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cJq=new A.eV(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cJx=new A.eV(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cJG=new A.eV(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cJo=new A.eV(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cJU=new A.eV(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cJR=new A.eV(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cJw=new A.eV(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cJO=new A.eV(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cJN=new A.eV(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cJn=new A.eV(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cJB=new A.eV(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cJL=new A.eV(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cJQ=new A.eV(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a8z=w([D.cK_,D.cJy,D.cJt,D.cJC,D.cJp,D.cJE,D.cK1,D.cJq,D.cJx,D.cJG,D.cJo,D.cJU,D.cJR,D.cJw,D.cJO,D.cJN,D.cJn,D.cJB,D.cJL,D.cJQ],A.b4("a6<+(o,o,a2,a2,o)>"))
D.c1Q=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aga=new C.L4(0,"youtube")
D.agb=new C.L4(1,"tiktok")
D.Ps=new C.L4(2,"instagram")
D.agc=new C.L4(3,"facebook")
D.cyG=new C.L4(4,"other")
D.cNH=new A.aa(3,null,null,null)
D.cOy=new A.hG(4,10,8,0.52,null)
D.d3r=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cRZ=new A.aV(D.d3r,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cVp=new A.O(!0,B.e,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d3i=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.db9=new A.B("Open in YouTube",null,B.j7,null,null,null,null,null,null,null,null,null)
D.df6=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dfV=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dg2=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dns=new C.aQl(null)})();(function staticFields(){$.dLr=20
$.aAh=null
$.btr=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"exW","Hs",()=>A.acz(0))
w($,"exX","Qo",()=>A.acz(null))})()};
(a=>{a["cP2VTVbYfgLfKx11MbPXxeb8naQ="]=a.current})($__dart_deferred_initializers__);