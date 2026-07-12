((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
efj(d,e){A.a7(d,!1).cz(A.eB(new C.dhK(e),!0,null,x.H))},
Zz(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Zz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Pb()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.aq(new A.bm(n,B.aW,B.aN),t)
w=3
return A.b(A.dN(B.M,new C.dhJ(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zz)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVI(r)
if(q==null){d.H(x.q).f.V(D.cLS)
w=1
break}w=4
return A.b(A.bN(B.ia,null,x.H),$async$Zz)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dxS=n
p=C.dVC(n)
n=$.Gv()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlK(q)
d.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zz,v)},
dxV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aV(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aV(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.og(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
K8(d){return C.dVL(d)},
dVL(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$K8=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$K8)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aB(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eK(r,x.f)
k=A.dn(k,new C.bp3(),k.$ti.j("E.E"),x.k)
j=A.Q(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.bp4(),j),j.j("E.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dxX(q)
w=12
return A.b(C.K7(a3,p),$async$K8)
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
case 19:m=C.dxV(A.S(n,x.N,x.z))
l=C.dxX(A.a([m],x.e))
w=21
return A.b(C.K7(a3,l),$async$K8)
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
case 18:case 14:q=C.dVJ()
w=22
return A.b(C.K7(a3,q),$async$K8)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K8,v)},
dxX(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.boW(),w).ev(0),u=new A.F(d,new C.boX(),w).ev(0),t=new A.F(d,new C.boY(),w).ev(0),s=new A.F(d,new C.boZ(),w).ev(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlL(null,q,u,t,v,s));++q}return r},
axI(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$axI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K8(d),$async$axI)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.de(t,new C.bp_(),s).ev(0)
p=r.de(t,new C.bp0(),s).ev(0)
o=r.de(t,new C.bp1(),s).ev(0)
n=r.de(t,new C.bp2(),s).ev(0)
m=C.dlL(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.K7(d,t),$async$axI)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$axI,v)},
K7(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$K7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$K7)
case 2:u=g
t=B.b.i(d)
s=J.b_(e,new C.boV(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$K7)
case 3:return A.h(null,v)}})
return A.i($async$K7,v)},
dVJ(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.dv(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlL(w,w,t,s,u,r)
return q},
dlL(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jG(),h=d==null,g=D.a6U[B.l.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6U[B.l.a0(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.boU(),A.a_(p).j("F<1,o>")).fA(0)
u="VND-"+B.b.ak(n,0,4)+"-"+B.b.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fA(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.hw(i.bH(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a0(e,20)
k=D.bXv[w]
j=D.bOg[w]
return new C.og("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dVK(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.T(Date.now(),0,!1).a8().a1())},
dVK(d,e){var w,v=J.dv(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hw(d.bH(256),16),2,"0")
return B.h.fA(v)},
dhK:function dhK(d){this.a=d},
dhJ:function dhJ(d,e){this.a=d
this.b=e},
dhF:function dhF(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhH:function dhH(d){this.a=d},
dhI:function dhI(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
og:function og(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bp3:function bp3(){},
bp4:function bp4(){},
boW:function boW(){},
boX:function boX(){},
boY:function boY(){},
boZ:function boZ(){},
bp_:function bp_(){},
bp0:function bp0(){},
bp1:function bp1(){},
bp2:function bp2(){},
boV:function boV(){},
boU:function boU(){},
K6:function K6(d,e){this.c=d
this.a=e},
ags:function ags(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHK:function cHK(){},
cHJ:function cHJ(d,e){this.a=d
this.b=e},
cHH:function cHH(d){this.a=d},
cHI:function cHI(d,e){this.a=d
this.b=e},
cHL:function cHL(d){this.a=d},
cHQ:function cHQ(d){this.a=d},
cHP:function cHP(d){this.a=d},
cHR:function cHR(d,e){this.a=d
this.b=e},
cHO:function cHO(d,e,f){this.a=d
this.b=e
this.c=f},
cHN:function cHN(d,e){this.a=d
this.b=e},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHS:function cHS(d){this.a=d},
WJ:function WJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKB:function aKB(d,e){this.c=d
this.a=e},
K5:function K5(d,e){this.c=d
this.a=e},
aLM:function aLM(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHE:function cHE(d){this.a=d},
cHF:function cHF(d){this.a=d},
cHG:function cHG(d){this.a=d},
cHD:function cHD(d,e){this.a=d
this.b=e},
cHA:function cHA(d){this.a=d},
cHB:function cHB(d){this.a=d},
cHz:function cHz(d,e){this.a=d
this.b=e},
cHC:function cHC(d){this.a=d},
cHy:function cHy(d){this.a=d},
aSI:function aSI(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSJ:function aSJ(d,e,f){this.c=d
this.d=e
this.a=f},
aLS:function aLS(d,e){this.c=d
this.a=e},
aSH:function aSH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cXj:function cXj(d){this.a=d},
cXk:function cXk(d){this.a=d},
aNb:function aNb(d){this.a=d},
aGP:function aGP(d,e){this.c=d
this.a=e},
dVI(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVH(v)
if(u!=null)return new C.qv(w,C.dlJ(u,!1),D.aet,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVG(v)
if(t!=null)return new C.qv(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.aeu,"TikTok",q)
s=C.dVF(w,v)
if(s!=null)return s
r=C.dVE(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qv(w,w,D.ct7,"Video",q)
return q},
dVF(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qv(d,"https://www.instagram.com/reel/"+w+u,D.On,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).ds(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qv(d,"https://www.instagram.com/p/"+w+u,D.On,t,null)}return null},
dVE(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qv(d,"https://www.facebook.com/plugins/video.php?href="+A.fk(2,d,B.bg,!1)+"&show_text=false&width=734",D.aev,"Facebook",null)},
dVH(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].ds(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVG(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).ds(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
K9:function K9(d,e){this.a=d
this.b=e},
qv:function qv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6F:function a6F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aLN:function aLN(d,e){var _=this
_.d=$
_.cO$=d
_.aQ$=e
_.c=_.a=null},
aNg:function aNg(d,e){this.c=d
this.a=e},
cMv:function cMv(d){this.a=d},
cMw:function cMw(d){this.a=d},
Fv:function Fv(d,e){this.c=d
this.a=e},
aln:function aln(){},
dxW(d,e,f,g,h,i){return new C.a6G(i,f,h,e,g,d)},
ee2(d){var w=window
w.toString
A.hn(w,"message",new C.de8(d),!1,x._)},
a6G:function a6G(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
agt:function agt(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHT:function cHT(d){this.a=d},
cI1:function cI1(d){this.a=d},
cHZ:function cHZ(d){this.a=d},
cHY:function cHY(d){this.a=d},
cI_:function cI_(d){this.a=d},
cHX:function cHX(d){this.a=d},
cI0:function cI0(d){this.a=d},
cHW:function cHW(d){this.a=d},
cHV:function cHV(d){this.a=d},
cHU:function cHU(d){this.a=d},
de8:function de8(d){this.a=d},
dVA(){var w,v,u
try{v=A.AN()
w=v.grW(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cH(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlJ(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
boS(d){var w=A.ap(y.c,!0,!1,!1,!1).ds(d)
return w==null?null:w.b[1]},
dxR(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVB(d,e,f){var w,v,u=C.boS(d)
if(u!=null){if(f){w=C.dVA()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxR(C.dlJ(u,e))}return C.dxR(d)},
dVC(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dVD(d){var w
if($.Pb().a==null)return!1
w=$.Gv().a
return d>=w&&d<w+4},
dxU(){var w=$.axH
if(w!=null)w.ad(0)
$.axH=null
$.Gv().sv(0,0)},
dxT(){var w,v,u,t=$.Pb()
if(t.a==null)return
w=$.axH
if(w!=null)w.ad(0)
v=$.dxS
if(v<=4){t=t.a
t.toString
C.dlK(t)
return}w=$.Gv()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlK(t)},
dlK(d){var w=$.axH
if(w!=null)w.ad(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.axH=A.dI(A.dr(0,0,0,0,0,w),C.eeh())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nr.prototype={
B(d){var w=null,v=this.e,u=v?B.aM:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.v,1),r=A.W(this.d,B.a5,w,w,14)
return A.t(w,A.G(A.a([r,B.fC,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.aa:B.ce,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.Z,0,w,w),B.k,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.ff,w,w,w)}}
C.og.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.K6.prototype={
U(){return new C.ags(A.a([],x.e))},
gdQ(){return this.c}}
C.ags.prototype={
a_(){var w=this
w.a5()
$.Gv().aq(0,w.gaxr())
C.ee2(w.gbnQ())
w.Z3()},
bnf(){if(this.c!=null)this.q(new C.cHK())},
bnR(){C.dxT()},
p(){$.Gv().Z(0,this.gaxr())
C.dxU()
$.Pb().sv(0,null)
this.a4()},
Z3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.K8(t.a.c),$async$Z3)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHJ(t,s))
$.boT=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$Z3,v)},
V2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$V2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.q(new C.cHH(t))
w=3
return A.b(C.axI(t.a.c),$async$V2)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cHI(t,s))
$.boT=J.a3(t.d)
t.c.H(x.q).f.V(A.bx(null,null,null,null,null,B.x,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$V2,v)},
bpO(d){var w=this.c
w.toString
A.a7(w,!1).cz(A.eB(new C.cHL(d),!1,null,x.H))},
bqq(){var w=this.c
w.toString
return C.Zz(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fe:B.bt,s=A.c0(!0,A.w(A.a([new A.J(D.X3,new A.iQ(new C.cHQ(w),v),v),A.I(w.e?B.ox:new A.lg($.Pb(),new C.cHR(w,u),v,v,x.j),1)],x.p),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.art(B.a5,B.GZ,B.mg,D.d7J,w.e?v:new C.cHS(w)),v)}}
C.WJ.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.aa(0,B.H,B.a5.l(0.18),B.e6,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6F(n,!0,!C.dVD(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.W(B.jF,B.n9,u,u,22),B.aI,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aZ,B.j,0,B.q),B.k,B.yW,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.U,!0,u,A.aS(!1,t,!0,A.w(A.a([A.I(A.t(u,A.c2(p,A.fo(A.w(A.a([new C.aKB(o,u),A.I(n,1),A.t(u,A.G(A.a([A.W(B.Bt,B.a5.l(0.85),u,u,9),D.cHI,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aZ,B.j,0,u,u),B.k,B.av,u,u,u,u,u,D.aDH,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,u,u,new A.q(u,u,r,s,q,D.a0a,B.p),u,u,u,B.h8,u,u,u),1),B.aI,A.d(o.b,u,1,B.au,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.au,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.au,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.a8)}}
C.aKB.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.I(A.d(B.h.gaj(this.c.c.split("-")),w,w,B.au,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.rN,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,B.WT,w,w,w)}}
C.K5.prototype={
U(){return new C.aLM()}}
C.aLM.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fe:B.bt,t=A.aN(w,w,w,w,B.a_l,w,w,w,new C.cHE(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c0(!0,A.w(A.a([new A.J(D.X3,A.G(A.a([t,A.I(new A.JV(A.G(A.a([A.I(new A.J(B.jA,A.d(s.b+" \xb7 "+s.c,w,1,B.au,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.U,!0,w,A.aS(!1,w,!0,new A.J(B.b5,A.W(B.hc,B.a5,w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHF(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a8)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.lg($.Pb(),new C.cHG(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aSI.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.H,B.a5.l(0.35),B.f7,28),new A.aa(0,B.H,B.A.l(0.45),B.di,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxW(new A.dh(v+"_full_"+u,x.W),!1,u,!1,w.gaNc(),v+"_full")
w=v}else w=new C.aLS(t.r,s)}else w=new C.aGP(m,s)
else w=D.dew
return A.t(s,A.c2(n,A.fo(A.w(A.a([new C.aSJ(m,l,s),A.I(w,1),new C.aSH(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aD),B.k,s,s,new A.q(s,s,o,q,p,D.a0a,B.p),s,r*2.05,s,B.bI,s,s,r)}}
C.aSJ.prototype={
B(d){var w,v,u,t,s=null,r=new A.T(Date.now(),0,!1),q=A.dp(r)
r=A.he(r)
w=new A.dB(q,r)
v=w.gJF()===0?12:w.gJF()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h5:B.j5)===B.h5?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o7,s,s,s),B.b4,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bF,D.aOA,B.eo,D.aNQ,B.eo,D.aOE],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aI,A.G(A.a([A.W(B.Bm,B.a5.l(0.9),s,s,12),B.eo,A.I(A.d(u.c,s,s,B.au,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,D.aEz,s,s,s)}}
C.aLS.prototype={
B(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.W(B.AS,B.e.l(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG,A.f4(D.aRR,D.cXh,this.c,A.ee(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aG(B.a5.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.Z,0,B.q),w,w,w),B.k,B.yW,w,w,w,w,w,w,w,w,1/0)}}
C.aSH.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.axh(B.Bi,"YouTube",s===0,r,new C.cXj(u))
s=u.axh(B.kn,"Device",s===1,r,new C.cXk(u))
w=r?"Power off":"Power on"
v=r?D.ZA:D.aLT
return A.t(t,A.G(A.a([q,B.am,s,B.b4,A.aN(t,t,t,t,A.W(v,r?B.bY:B.hf,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dw)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,D.aEh,t,t,t)},
axh(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a5:B.az
v=f&&g?B.a5.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.I(A.aJ(!1,B.U,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.nm,A.w(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.Z,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a8),1)}}
C.aNb.prototype={
B(d){return D.atS}}
C.aGP.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.jU,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tK("Serial",u.c),q=w.tK("Model",u.d),p=w.tK("Device ID",u.e),o=w.tK("IMEI",u.r),n=w.tK("MAC",u.f),m=w.tK("OS",u.w+" "+u.x),l=w.tK("Location",u.y+", "+u.z),k=w.tK("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tK("Timezone",u.at)
u=u.ax
return A.er(A.a([t,B.aI,s,B.aj,r,q,p,o,n,m,l,k,j,w.tK("Provisioned",u.length>=10?B.b.ak(u,0,10):u)],x.p),v,B.b5,v,v,B.al,!1)},
tK(d,e){var w=null
return new A.J(B.d1,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.ct,A.d(e,w,w,w,w,w,w,D.cP8,w,w,w)],x.p),B.E,B.i,B.j,0,B.q),w)}}
C.K9.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qv.prototype={
gaNc(){var w=this.c
return w===D.aet||w===D.aeu||w===D.On||w===D.aev}}
C.a6F.prototype={
U(){return new C.aLN(null,null)}}
C.aLN.prototype={
a_(){this.a5()
var w=A.bu(null,B.ve,null,1,null,this)
w.jl(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aXc()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cV(t,new A.q(t,t,t,t,t,new A.ag(B.cg,B.cf,B.F,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.bC),q=x.Y,p=u.d
p===$&&A.c()
p=A.cn(B.ex,p,t)
w=B.e.l(0.92)
q=A.aI(new A.cS(new A.b1(p,new A.bk(0.72,1,q),q.j("b1<bj.T>")),!1,A.W(B.jF,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n9
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aNg(s,t),r,q,A.aD(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aD(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aD(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aB(B.ag,t,B.b8,B.x,s,t)}}
C.aNg.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kw(u,B.L,new C.cMv(this),B.c8,B.bL,!0,w,w,new C.cMw(this),w)
return new C.Fv(v,w)}}
C.Fv.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.uT,B.T9],x.O),B.jF)
break
case 1:w=new A.aM(A.a([B.yW,D.ayu],x.O),B.mc)
break
case 2:w=new A.aM(A.a([D.aA_,D.axX],x.O),B.B_)
break
case 3:w=new A.aM(A.a([B.V,B.dx],x.O),B.B4)
break
case 4:w=new A.aM(A.a([B.av,B.aM],x.O),B.po)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.W(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.q(u,u,u,u,u,new A.ag(B.aC,B.aJ,B.F,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.aln.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.Z(0,w.gdn())
w.aQ$=null
w.a4()},
bp(){this.bE()
this.bD()
this.dq()}}
C.a6G.prototype={
U(){return new C.agt()}}
C.agt.prototype={
a7N(d,e){var w,v=C.boS(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dlJ(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dVB(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bFF(){var w,v=this
if(v.w)return
v.q(new C.cHT(v))
w=v.e
if(w!=null)v.a7N(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aO()
u.d=w
try{$.Gx()
$.pO().uV(w,new C.cI1(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cHV(v))
w=v.e
w.toString
v.a7N(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.ZP,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fo(A.aI(new A.J(new A.U(12,12,12,12),A.w(w,B.o,B.i,B.Z,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1S(n,B.tD,w)],v)
if(o.f)w.push(A.fo(A.aI(new A.a9(28,28,D.auZ,n),n,n,n),B.de,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bq,B.v,1)
q=A.W(B.Ls,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eM(0,A.aJ(!1,B.U,!0,n,A.aS(!1,n,!0,A.aI(A.t(n,A.G(A.a([q,B.am,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.Z,0,n,n),B.k,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,B.Jf,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbFE(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a8)))}v=C.boS(o.a.d)
if(v!=null)w.push(A.aD(8,A.kg(D.aPZ,D.d3o,new C.cHU(o),A.iT(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ff,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aB(B.ag,n,B.b8,B.x,w,n)}}
var z=a.updateTypes(["o(og)","~()","K6(P)","og(Z<@,@>)","a1(og)","Z<o,@>(og)","aA<~>()","K5(P)","lg<K>(P,qv?,p?)","WJ(P,K)","u5(P,qv?,p?)","Fv(P,an,dH?)"])
C.dhK.prototype={
$1(d){return new C.K6(this.a,null)},
$S:z+2}
C.dhJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aH(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dU,B.V],j):A.a([B.e,B.ax],j),h=A.a([new A.aa(0,B.H,B.a5.l(0.22),B.f7,32)],x.V),g=A.O(m?B.cj:B.a5.l(0.18),B.v,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aNz,B.k,n,n,new A.q(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.v,1),n,n,n,B.aq),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aI,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.ah,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f8,w,A.aN(n,n,n,n,A.W(B.d2,m?B.az:B.de,n,n,n),n,n,n,new C.dhF(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.q(n,n,n,n,n,new A.ag(B.a6,B.a9,B.F,j,n,n),B.p),n,n,n,B.Jl,n,n,n)
e=A.e9(B.cD,A.a([new C.Nr("YouTube",B.Lo,m,n),new C.Nr("TikTok",B.mc,m,n),new C.Nr("Instagram",B.B_,m,n),new C.Nr("Facebook",B.B4,m,n)],v),B.cm,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cr:B.kd,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aM:B.bt
r=A.W(B.f6,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cj:B.aO
u=A.w(A.a([e,B.aS,A.b0(n,B.X,!0,n,!0,B.x,n,A.b3(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.Y),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aG(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.RV),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.G,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a4,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.kg(D.aNC,D.d6U,new C.dhG(d),A.iT(n,n,n,n,n,n,n,n,n,n,n,m?B.bz:B.ah,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.U(12,0,12,12+l.f.d),A.cV(A.c2(f,A.w(A.a([j,new A.J(B.WG,u,n),new A.J(D.aFN,A.G(A.a([e,B.b4,A.cd(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.aa:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhH(d),n,n),B.am,A.dO(D.aRC,D.d7D,new C.dhI(d,w),A.bF(B.a5,n,n,n,B.e,n,B.Jf,n,new A.bD(A.m(14),B.Y),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.Z,0,B.q),B.aD),new A.q(n,n,g,k,h,new A.ag(B.aC,B.aJ,B.F,i,n,n),B.p),B.bC),n)},
$S:85}
C.dhF.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhG.prototype={
$0(){C.dxU()
$.Pb().sv(0,null)
A.a7(this.a,!1).R(null)},
$S:0}
C.dhH.prototype={
$0(){A.a7(this.a,!1).R(null)
return null},
$S:0}
C.dhI.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).R(w)
return null},
$S:0}
C.bp3.prototype={
$1(d){return C.dxV(A.S(d,x.N,x.z))},
$S:z+3}
C.bp4.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.boW.prototype={
$1(d){return d.c},
$S:z+0}
C.boX.prototype={
$1(d){return d.r},
$S:z+0}
C.boY.prototype={
$1(d){return d.f},
$S:z+0}
C.boZ.prototype={
$1(d){return d.at},
$S:z+0}
C.bp_.prototype={
$1(d){return d.c},
$S:z+0}
C.bp0.prototype={
$1(d){return d.r},
$S:z+0}
C.bp1.prototype={
$1(d){return d.f},
$S:z+0}
C.bp2.prototype={
$1(d){return d.at},
$S:z+0}
C.boV.prototype={
$1(d){return d.aa()},
$S:z+5}
C.boU.prototype={
$1(d){return B.b.bj(B.l.hw(d,16),2,"0").toUpperCase()},
$S:86}
C.cHK.prototype={
$0(){},
$S:0}
C.cHJ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHH.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHI.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHL.prototype={
$1(d){return new C.K5(this.a,null)},
$S:z+7}
C.cHQ.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,D.aQX,w,w,w,new C.cHP(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.G(A.a([v,A.I(A.fE(A.G(A.a([new A.oe(D.ww,e,g,36,B.Bm,w),B.aQ,A.I(A.d(t,w,1,B.au,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,0.2,w,w,w,A.a([new A.fW(B.h.gT(D.ww).l(0.45+e*0.2),B.J,10)],x.S),w,w),w,w,w),1),A.aJ(!1,B.U,!0,w,A.aS(!1,w,!0,new A.J(B.bI,A.W(B.hc,A.ax(B.h.gT(D.ww),B.h.gaj(D.ww),e),w,w,28),w),B.cN,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbqp(),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.a8)],s),B.o,w,B.i,B.j,0,w,w),D.ww,w,g,B.fN,0,e,f),1)],s),B.o,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:320}
C.cHP.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHR.prototype={
$3(d,e,f){return new A.lg($.Gv(),new C.cHO(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHO.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.Dl(d,k,x.Q)
w=w==null?k:w.glz()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a5.l(0.12)
s=A.m(12)
r=A.O(B.a5.l(0.35),B.v,1)
q=A.W(B.jF,B.a5,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Gv().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.dl,B.hv,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c2(s,new A.iZ(1.7777777777777777,C.dxW(new A.dh("fleet_master_"+r,x.W),!0,r,!0,j.gaNc(),"fleet_master"),k),B.aD),B.aj],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vX(0,B.x,k,B.G,k,k,k,k,!1,k,B.al,!1,A.a([new A.kH(new A.J(B.J9,A.w(u,B.E,B.i,B.j,0,B.q),k),k),new A.or(D.aDT,A.aBK(new A.nD(new C.cHN(i,j),J.a3(i.d),!1,!0,!0,A.tz(),k),D.cIt),k)],w))},
$S:1718}
C.cHN.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WJ(v,e,J.a3(w.d),new C.cHM(w,v),this.b,null)},
$S:z+9}
C.cHM.prototype={
$0(){return this.a.bpO(this.b)},
$S:0}
C.cHS.prototype={
$0(){this.a.V2()
return null},
$S:0}
C.cHE.prototype={
$0(){return A.a7(this.a,!1).eC()},
$S:0}
C.cHF.prototype={
$0(){C.Zz(this.a,$.boT)
return null},
$S:0}
C.cHG.prototype={
$3(d,e,f){return A.eV(new C.cHD(this.a,e))},
$S:z+10}
C.cHD.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.cI(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aS,new C.aSI(u,s.a.c,s.e,s.d,new C.cHA(s),new C.cHB(s),new C.cHC(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),B.x,v,B.G,v,B.p0,v,v,B.al),v,v,v)},
$S:1719}
C.cHA.prototype={
$0(){var w=this.a.c
w.toString
C.Zz(w,$.boT)
return null},
$S:0}
C.cHB.prototype={
$1(d){var w=this.a
return w.q(new C.cHz(w,d))},
$S:32}
C.cHz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHC.prototype={
$0(){var w=this.a
return w.q(new C.cHy(w))},
$S:0}
C.cHy.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cXj.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cXk.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMv.prototype={
$3(d,e,f){return new C.Fv(this.a.c,null)},
$S:z+11}
C.cMw.prototype={
$3(d,e,f){if(f==null)return e
return new A.aB(B.ag,null,B.b8,B.x,A.a([new C.Fv(this.a.c,null),D.au6],x.p),null)},
$C:"$3",
$R:3,
$S:252}
C.cHT.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cI1.prototype={
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
w.a7N(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hn(v,"load",new C.cHZ(w),!1,u)
v=w.e
v.toString
A.hn(v,"error",new C.cI_(w),!1,u)
A.bN(B.kg,new C.cI0(w),x.H)
w=w.e
w.toString
return w},
$S:596}
C.cHZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHY(w))},
$S:47}
C.cHY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cHX(w))},
$S:47}
C.cHX.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cI0.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cHW(w))},
$S:12}
C.cHW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHV.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHU.prototype={
$0(){var w,v=C.boS(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kK.SN(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.de8.prototype={
$1(d){var w,v,u,t,s=new A.F3([],[]).IT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1720};(function aliases(){var w=C.aln.prototype
w.aXc=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ags.prototype,"gaxr","bnf",1)
w(u,"gbnQ","bnR",1)
w(u,"gbqp","bqq",6)
w(C.agt.prototype,"gbFE","bFF",1)
v(C,"eeh","dxT",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yD,[C.dhK,C.dhJ,C.bp3,C.bp4,C.boW,C.boX,C.boY,C.boZ,C.bp_,C.bp0,C.bp1,C.bp2,C.boV,C.boU,C.cHL,C.cHQ,C.cHR,C.cHO,C.cHG,C.cHB,C.cMv,C.cMw,C.cI1,C.cHZ,C.cI_,C.de8])
v(A.a_Z,[C.dhF,C.dhG,C.dhH,C.dhI,C.cHK,C.cHJ,C.cHH,C.cHI,C.cHP,C.cHM,C.cHS,C.cHE,C.cHF,C.cHA,C.cHz,C.cHC,C.cHy,C.cXj,C.cXk,C.cHT,C.cHY,C.cHX,C.cI0,C.cHW,C.cHV,C.cHU])
v(A.av,[C.Nr,C.WJ,C.aKB,C.aSI,C.aSJ,C.aLS,C.aSH,C.aNb,C.aGP,C.aNg,C.Fv])
v(A.an,[C.og,C.qv])
v(A.ae,[C.K6,C.K5,C.a6F,C.a6G])
v(A.af,[C.ags,C.aLM,C.aln,C.agt])
v(A.a0_,[C.cHN,C.cHD])
u(C.K9,A.aHK)
u(C.aLN,C.aln)
w(C.aln,A.dX)})()
A.dBn(b.typeUniverse,JSON.parse('{"K6":{"ae":[],"p":[]},"WJ":{"av":[],"p":[]},"K5":{"ae":[],"p":[]},"Nr":{"av":[],"p":[]},"ags":{"af":["K6"]},"aKB":{"av":[],"p":[]},"aLM":{"af":["K5"]},"aSI":{"av":[],"p":[]},"aSJ":{"av":[],"p":[]},"aLS":{"av":[],"p":[]},"aSH":{"av":[],"p":[]},"aNb":{"av":[],"p":[]},"aGP":{"av":[],"p":[]},"a6F":{"ae":[],"p":[]},"Fv":{"av":[],"p":[]},"aLN":{"af":["a6F"]},"aNg":{"av":[],"p":[]},"a6G":{"ae":[],"p":[]},"agt":{"af":["a6G"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a4<aa>"),O:w("a4<x>"),e:w("a4<og>"),S:w("a4<fW>"),s:w("a4<o>"),p:w("a4<p>"),t:w("a4<K>"),X:w("ad<og>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oa"),_:w("Di"),k:w("og"),N:w("o"),Y:w("bk<a2>"),W:w("dh<o>"),J:w("lg<K>"),j:w("lg<qv?>"),E:w("xv<cM>"),q:w("Xz"),z:w("@"),Q:w("an?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.ZA=new A.N(983224,"MaterialIcons",!1)
D.aQ6=new A.ac(D.ZA,48,B.bq,null,null,null)
D.cWd=new A.D("Powered off",null,B.alA,null,null,null,null,null,null,null,null,null)
D.bLk=w([D.aQ6,B.P,D.cWd],x.p)
D.aBg=new A.ew(B.al,B.i,B.Z,B.o,null,B.q,null,0,D.bLk,null)
D.atS=new A.dk(B.L,null,null,D.aBg,null)
D.cI7=new A.a9(18,18,B.SS,null)
D.au6=new A.dk(B.L,null,null,D.cI7,null)
D.auZ=new A.hb(2,null,null,null,null,B.aa,null,null,null,null)
D.axX=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.ayu=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aA_=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aDH=new A.U(0,3,0,3)
D.aDT=new A.U(10,0,10,88)
D.aEh=new A.U(12,6,12,10)
D.aEz=new A.U(14,8,14,6)
D.aFN=new A.U(20,8,20,20)
D.X3=new A.U(8,6,15,8)
D.aLT=new A.N(983222,"MaterialIcons",!1)
D.aNz=new A.ac(B.jF,26,B.a5,null,null,null)
D.aNC=new A.ac(B.YM,18,null,null,null,null)
D.aNQ=new A.ac(B.rN,14,B.aa,null,null,null)
D.aMc=new A.N(983420,"MaterialIcons",!1)
D.aOA=new A.ac(D.aMc,14,B.aa,null,null,null)
D.aKd=new A.N(62895,"MaterialIcons",!1)
D.aOE=new A.ac(D.aKd,14,B.aa,null,null,null)
D.aPZ=new A.ac(B.rH,16,B.aa,null,null,null)
D.aQX=new A.ac(B.dF,20,B.aa,null,null,null)
D.aRC=new A.ac(B.iL,20,null,null,null,null)
D.aRR=new A.ac(B.hc,16,null,null,null,null)
D.bP3=w([B.aM,B.V],x.O)
D.a0a=new A.ag(B.aC,B.aJ,B.F,D.bP3,null,null)
D.cBF=new A.aM("NGMY OS","14.2.1")
D.cAo=new A.aM("VirtualDroid","13.8.4")
D.cAn=new A.aM("NGMY OS","15.0.0")
D.cBb=new A.aM("VirtualDroid","14.1.2")
D.cAl=new A.aM("NGMY Tab OS","12.9.7")
D.cAj=new A.aM("NGMY OS","13.5.3")
D.cA8=new A.aM("VirtualDroid","15.2.0")
D.cAL=new A.aM("NGMY OS","14.8.1")
D.cBh=new A.aM("NGMY Tab OS","13.2.4")
D.cBR=new A.aM("VirtualDroid","12.6.9")
D.cA1=new A.aM("NGMY OS","16.0.1")
D.czR=new A.aM("VirtualDroid","14.9.0")
D.cBw=new A.aM("NGMY Tab OS","14.0.3")
D.cAx=new A.aM("NGMY OS","13.1.8")
D.cA0=new A.aM("VirtualDroid","13.4.5")
D.cAi=new A.aM("NGMY OS","15.3.2")
D.cBi=new A.aM("NGMY Tab OS","12.4.1")
D.cBz=new A.aM("VirtualDroid","16.1.0")
D.cAK=new A.aM("NGMY OS","14.4.6")
D.cBG=new A.aM("VirtualDroid","15.0.8")
D.bOg=w([D.cBF,D.cAo,D.cAn,D.cBb,D.cAl,D.cAj,D.cA8,D.cAL,D.cBh,D.cBR,D.cA1,D.czR,D.cBw,D.cAx,D.cA0,D.cAi,D.cBi,D.cBz,D.cAK,D.cBG],A.b4("a4<+(o,o)>"))
D.ww=w([B.a5,B.f5],x.O)
D.cDX=new A.eQ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cDv=new A.eQ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cDq=new A.eQ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cDz=new A.eQ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cDm=new A.eQ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cDB=new A.eQ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cDZ=new A.eQ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cDn=new A.eQ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cDu=new A.eQ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cDD=new A.eQ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cDl=new A.eQ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cDR=new A.eQ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cDO=new A.eQ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cDt=new A.eQ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cDL=new A.eQ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cDK=new A.eQ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cDk=new A.eQ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cDy=new A.eQ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cDI=new A.eQ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cDN=new A.eQ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6U=w([D.cDX,D.cDv,D.cDq,D.cDz,D.cDm,D.cDB,D.cDZ,D.cDn,D.cDu,D.cDD,D.cDl,D.cDR,D.cDO,D.cDt,D.cDL,D.cDK,D.cDk,D.cDy,D.cDI,D.cDN],A.b4("a4<+(o,o,a2,a2,o)>"))
D.bXv=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.aet=new C.K9(0,"youtube")
D.aeu=new C.K9(1,"tiktok")
D.On=new C.K9(2,"instagram")
D.aev=new C.K9(3,"facebook")
D.ct7=new C.K9(4,"other")
D.cHI=new A.a9(3,null,null,null)
D.cIt=new A.ib(4,10,8,0.52,null)
D.cXr=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cLS=new A.aY(D.cXr,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.x,null)
D.cP8=new A.R(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cXh=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d3o=new A.D("Open in YouTube",null,B.iq,null,null,null,null,null,null,null,null,null)
D.d6U=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d7D=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7J=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dew=new C.aNb(null)})();(function staticFields(){$.dxS=20
$.axH=null
$.boT=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ej8","Gv",()=>A.ab6(0))
w($,"ej9","Pb",()=>A.ab6(null))})()};
(a=>{a["Yjj9bvKrhxKtBrdglMsb8xAvL+0="]=a.current})($__dart_deferred_initializers__);