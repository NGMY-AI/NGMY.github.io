((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ecW(d,e){A.a6(d,!1).cv(A.ez(new C.dfv(e),!0,null,x.H))},
Zl(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zl=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.OU()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bp(n,B.aW,B.aN),t)
w=3
return A.b(A.dE(B.L,new C.dfu(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zl)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dTe(r)
if(q==null){d.H(x.q).f.T(D.cKg)
w=1
break}w=4
return A.b(A.bN(B.ib,null,x.H),$async$Zl)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.dvB=n
p=C.dT8(n)
n=$.Gg()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.djw(q)
d.H(x.q).f.T(A.bw(null,null,null,null,null,B.x,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zl,v)},
dvE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o9(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JR(d){return C.dTh(d)},
dTh(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JR=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$JR)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cR(r)?10:11
break
case 10:k=J.eH(r,x.f)
k=A.dk(k,new C.boj(),k.$ti.j("E.E"),x.k)
j=A.P(k).j("aj<E.E>")
i=A.B(new A.aj(k,new C.bok(),j),j.j("E.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.dvG(q)
w=12
return A.b(C.JQ(a3,p),$async$JR)
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
n=B.I.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dvE(A.S(n,x.N,x.z))
l=C.dvG(A.a([m],x.e))
w=21
return A.b(C.JQ(a3,l),$async$JR)
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
case 18:case 14:q=C.dTf()
w=22
return A.b(C.JQ(a3,q),$async$JR)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JR,v)},
dvG(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.bob(),w).eA(0),u=new A.F(d,new C.boc(),w).eA(0),t=new A.F(d,new C.bod(),w).eA(0),s=new A.F(d,new C.boe(),w).eA(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.djx(null,q,u,t,v,s));++q}return r},
ax4(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$ax4=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JR(d),$async$ax4)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.dd(t,new C.bof(),s).eA(0)
p=r.dd(t,new C.bog(),s).eA(0)
o=r.dd(t,new C.boh(),s).eA(0)
n=r.dd(t,new C.boi(),s).eA(0)
m=C.djx(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JQ(d,t),$async$ax4)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$ax4,v)},
JQ(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JQ=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$JQ)
case 2:u=g
t=B.b.i(d)
s=J.b4(e,new C.boa(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.aA("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JQ)
case 3:return A.f(null,v)}})
return A.h($async$JQ,v)},
dTf(){var w,v=x.N,u=A.ba(v),t=A.ba(v),s=A.ba(v),r=A.ba(v),q=J.du(20,x.k)
for(w=0;w<20;++w)q[w]=C.djx(w,w,t,s,u,r)
return q},
djx(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jA(),h=d==null,g=D.a6m[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6m[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bH(256)
n=new A.F(p,new C.bo9(),A.a_(p).j("F<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bH(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hv(i.bH(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a3(e,20)
k=D.bWr[w]
j=D.bNf[w]
return new C.o9("vd_"+1000*Date.now()+"_"+e+"_"+i.bH(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dTg(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
dTg(d,e){var w,v=J.du(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hv(d.bH(256),16),2,"0")
return B.h.fw(v)},
dfv:function dfv(d){this.a=d},
dfu:function dfu(d,e){this.a=d
this.b=e},
dfq:function dfq(d){this.a=d},
dfr:function dfr(d){this.a=d},
dfs:function dfs(d){this.a=d},
dft:function dft(d,e){this.a=d
this.b=e},
Nd:function Nd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o9:function o9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
boj:function boj(){},
bok:function bok(){},
bob:function bob(){},
boc:function boc(){},
bod:function bod(){},
boe:function boe(){},
bof:function bof(){},
bog:function bog(){},
boh:function boh(){},
boi:function boi(){},
boa:function boa(){},
bo9:function bo9(){},
JP:function JP(d,e){this.c=d
this.a=e},
ag8:function ag8(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cFG:function cFG(){},
cFF:function cFF(d,e){this.a=d
this.b=e},
cFD:function cFD(d){this.a=d},
cFE:function cFE(d,e){this.a=d
this.b=e},
cFH:function cFH(d){this.a=d},
cFL:function cFL(d){this.a=d},
cFM:function cFM(d,e){this.a=d
this.b=e},
cFK:function cFK(d,e,f){this.a=d
this.b=e
this.c=f},
cFJ:function cFJ(d,e){this.a=d
this.b=e},
cFI:function cFI(d,e){this.a=d
this.b=e},
cFN:function cFN(d){this.a=d},
Wp:function Wp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJX:function aJX(d,e){this.c=d
this.a=e},
JO:function JO(d,e){this.c=d
this.a=e},
aL4:function aL4(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cFA:function cFA(d){this.a=d},
cFB:function cFB(d){this.a=d},
cFC:function cFC(d){this.a=d},
cFz:function cFz(d,e){this.a=d
this.b=e},
cFw:function cFw(d){this.a=d},
cFx:function cFx(d){this.a=d},
cFv:function cFv(d,e){this.a=d
this.b=e},
cFy:function cFy(d){this.a=d},
cFu:function cFu(d){this.a=d},
aS_:function aS_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aS0:function aS0(d,e,f){this.c=d
this.d=e
this.a=f},
aLa:function aLa(d,e){this.c=d
this.a=e},
aRZ:function aRZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cV8:function cV8(d){this.a=d},
cV9:function cV9(d){this.a=d},
aMt:function aMt(d){this.a=d},
aGa:function aGa(d,e){this.c=d
this.a=e},
dTe(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dTd(v)
if(u!=null)return new C.qj(w,C.djv(u,!1),D.adP,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dTc(v)
if(t!=null)return new C.qj(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adQ,"TikTok",q)
s=C.dTb(w,v)
if(s!=null)return s
r=C.dTa(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qj(w,w,D.crN,"Video",q)
return q},
dTb(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qj(d,"https://www.instagram.com/reel/"+w+u,D.NU,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qj(d,"https://www.instagram.com/p/"+w+u,D.NU,t,null)}return null},
dTa(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qj(d,"https://www.facebook.com/plugins/video.php?href="+A.fj(2,d,B.bf,!1)+"&show_text=false&width=734",D.adR,"Facebook",null)},
dTd(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dm(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dTc(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
JS:function JS(d,e){this.a=d
this.b=e},
qj:function qj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6t:function a6t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aL5:function aL5(d,e){var _=this
_.d=$
_.cS$=d
_.aR$=e
_.c=_.a=null},
aMy:function aMy(d,e){this.c=d
this.a=e},
cKq:function cKq(d){this.a=d},
cKr:function cKr(d){this.a=d},
Fg:function Fg(d,e){this.c=d
this.a=e},
al1:function al1(){},
dvF(d,e,f,g,h,i){return new C.a6u(i,f,h,e,g,d)},
eby(d){var w=window
w.toString
A.hg(w,"message",new C.dbX(d),!1,x._)},
a6u:function a6u(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ag9:function ag9(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cFO:function cFO(d){this.a=d},
cFX:function cFX(d){this.a=d},
cFU:function cFU(d){this.a=d},
cFT:function cFT(d){this.a=d},
cFV:function cFV(d){this.a=d},
cFS:function cFS(d){this.a=d},
cFW:function cFW(d){this.a=d},
cFR:function cFR(d){this.a=d},
cFQ:function cFQ(d){this.a=d},
cFP:function cFP(d){this.a=d},
dbX:function dbX(d){this.a=d},
dT6(){var w,v,u
try{v=A.AD()
w=v.grT(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cI(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
djv(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bo7(d){var w=A.ao(y.c,!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
dvA(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dT7(d,e,f){var w,v,u=C.bo7(d)
if(u!=null){if(f){w=C.dT6()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dvA(C.djv(u,e))}return C.dvA(d)},
dT8(d){if(d<=4)return 0
return B.l.aJ(d-1,4)*4},
dT9(d){var w
if($.OU().a==null)return!1
w=$.Gg().a
return d>=w&&d<w+4},
dvD(){var w=$.ax3
if(w!=null)w.ae(0)
$.ax3=null
$.Gg().sv(0,0)},
dvC(){var w,v,u,t=$.OU()
if(t.a==null)return
w=$.ax3
if(w!=null)w.ae(0)
v=$.dvB
if(v<=4){t=t.a
t.toString
C.djw(t)
return}w=$.Gg()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.djw(t)},
djw(d){var w=$.ax3
if(w!=null)w.ae(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.ax3=A.dJ(A.dm(0,0,0,0,0,w),C.ebN())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Nd.prototype={
B(d){var w=null,v=this.e,u=v?B.aK:B.e,t=A.m(20),s=A.O(B.a5.l(0.25),B.v,1),r=A.X(this.d,B.a5,w,w,14)
return A.t(w,A.H(A.a([r,B.fA,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.q(u,w,s,t,w,w,B.p),w,w,w,B.fd,w,w,w)}}
C.o9.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JP.prototype={
U(){return new C.ag8(A.a([],x.e))},
gdQ(){return this.c}}
C.ag8.prototype={
a_(){var w=this
w.a5()
$.Gg().ap(0,w.gawZ())
C.eby(w.gbn5())
w.YM()},
bmv(){if(this.c!=null)this.q(new C.cFG())},
bn6(){C.dvC()},
p(){$.Gg().Z(0,this.gawZ())
C.dvD()
$.OU().sv(0,null)
this.a4()},
YM(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YM=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JR(t.a.c),$async$YM)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cFF(t,s))
$.bo8=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$YM,v)},
UO(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UO=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cFD(t))
w=3
return A.b(C.ax4(t.a.c),$async$UO)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cFE(t,s))
$.bo8=J.a2(t.d)
t.c.H(x.q).f.T(A.bw(null,null,null,null,null,B.x,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UO,v)},
bp1(d){var w=this.c
w.toString
A.a6(w,!1).cv(A.ez(new C.cFH(d),!1,null,x.H))},
bpD(){var w=this.c
w.toString
return C.Zl(w,J.a2(this.d))},
B(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fc:B.by,s=A.aL(v,v,v,v,B.L7,v,v,v,new C.cFL(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DI(A.H(A.a([A.J(new A.I(B.j3,A.j(r,v,1,B.ax,v,v,v,A.l(v,v,u?B.e:B.V,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.U,!0,v,A.aO(!1,v,!0,new A.I(B.be,A.X(B.ha,B.a5,v,v,28),v),B.cL,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpC(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a6)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.bY(!0,A.w(A.a([new A.I(D.WE,r,v),A.J(w.e?B.om:new A.l9($.OU(),new C.cFM(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.ah,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.aqW(B.a5,B.Gx,B.me,D.d5Z,w.e?v:new C.cFN(w)),v)}}
C.Wp.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.v,1),q=A.a([new A.a8(0,B.G,B.a5.l(0.18),B.dC,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6t(n,!0,!C.dT9(w),"Fold "+(B.l.aJ(w,4)+1)+"/"+B.l.aJ(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jG,B.n6,u,u,22),B.aP,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aY,B.k,0,B.q),B.j,B.yL,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.U,!0,u,A.aO(!1,t,!0,A.w(A.a([A.J(A.t(u,A.c7(p,A.fK(A.w(A.a([new C.aJX(o,u),A.J(n,1),A.t(u,A.H(A.a([A.X(B.Bg,B.a5.l(0.85),u,u,9),D.cGa,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aY,B.k,0,u,u),B.j,B.at,u,u,u,u,u,D.aCT,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,u,u,new A.q(u,u,r,s,q,D.a_I,B.p),u,u,u,B.h5,u,u,u),1),B.aP,A.j(o.b,u,1,B.ax,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ax,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ax,u,u,u,A.l(u,u,B.a5.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a6)}}
C.aJX.prototype={
B(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gar(this.c.c.split("-")),w,w,B.ax,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rI,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.at,w,w,w,w,w,B.Wu,w,w,w)}}
C.JO.prototype={
U(){return new C.aL4()}}
C.aL4.prototype={
B(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fc:B.by,t=A.aL(w,w,w,w,B.L7,w,w,w,new C.cFA(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.bY(!0,A.w(A.a([new A.I(D.WE,A.H(A.a([t,A.J(new A.DI(A.H(A.a([A.J(new A.I(B.j3,A.j(s.b+" \xb7 "+s.c,w,1,B.ax,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.U,!0,w,A.aO(!1,w,!0,new A.I(B.be,A.X(B.ha,B.a5,w,w,28),w),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cFB(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.J(new A.l9($.OU(),new C.cFC(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.ah,!0,!0),w,!1,!1,w,w)}}
C.aS_.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a8(0,B.G,B.a5.l(0.35),B.eW,28),new A.a8(0,B.G,B.A.l(0.45),B.d2,18)],x.V),o=A.O(B.e.l(0.12),B.v,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dvF(new A.dn(v+"_full_"+u,x.W),!1,u,!1,w.gaMG(),v+"_full")
w=v}else w=new C.aLa(t.r,s)}else w=new C.aGa(m,s)
else w=D.dcD
return A.t(s,A.c7(n,A.fK(A.w(A.a([new C.aS0(m,l,s),A.J(w,1),new C.aRZ(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aB),B.j,s,s,new A.q(s,s,o,q,p,D.a_I,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aS0.prototype={
B(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dp(r)
r=A.hq(r)
w=new A.dB(q,r)
v=w.gJt()===0?12:w.gJt()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j1)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nX,s,s,s),B.bt,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aNL,B.eo,D.aN_,B.eo,D.aNP],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aP,A.H(A.a([A.X(B.KW,B.a5.l(0.9),s,s,12),B.eo,A.J(A.j(u.c,s,s,B.ax,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.at,s,s,s,s,s,D.aDH,s,s,s)}}
C.aLa.prototype={
B(d){var w=null
return A.t(w,A.aG(A.w(A.a([A.X(B.AH,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aP,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.eR(D.aR3,D.cVy,this.c,A.e7(w,w,w,w,w,w,w,w,w,B.a5,w,w,w,w,w,new A.aC(B.a5.l(0.5),1,B.v,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yL,w,w,w,w,w,w,w,w,1/0)}}
C.aRZ.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awP(B.B6,"YouTube",s===0,r,new C.cV8(u))
s=u.awP(B.kl,"Device",s===1,r,new C.cV9(u))
w=r?"Power off":"Power on"
v=r?D.Z5:D.aL4
return A.t(t,A.H(A.a([q,B.am,s,B.bt,A.aL(t,t,t,t,A.X(v,r?B.bT:B.fL,t,t,t),t,t,t,u.f,t,t,t,t,w,B.ds)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.at,t,t,t,t,t,D.aDs,t,t,t)},
awP(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bo
else w=f?B.a5:B.aC
v=f&&g?B.a5.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aI(!1,B.U,!0,u,A.aO(!1,A.m(10),!0,new A.I(B.nh,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a6),1)}}
C.aMt.prototype={
B(d){return D.at6}}
C.aGa.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.kC,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tE("Serial",u.c),q=w.tE("Model",u.d),p=w.tE("Device ID",u.e),o=w.tE("IMEI",u.r),n=w.tE("MAC",u.f),m=w.tE("OS",u.w+" "+u.x),l=w.tE("Location",u.y+", "+u.z),k=w.tE("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tE("Timezone",u.at)
u=u.ax
return A.ef(A.a([t,B.aP,s,B.al,r,q,p,o,n,m,l,k,j,w.tE("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.be,v,v,B.aj,!1)},
tE(d,e){var w=null
return new A.I(B.d_,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cC,A.j(e,w,w,w,w,w,w,D.cNu,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.JS.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qj.prototype={
gaMG(){var w=this.c
return w===D.adP||w===D.adQ||w===D.NU||w===D.adR}}
C.a6t.prototype={
U(){return new C.aL5(null,null)}}
C.aL5.prototype={
a_(){this.a5()
var w=A.bx(null,B.va,null,1,null,this)
w.kh(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aWD()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.d0(t,new A.q(t,t,t,t,t,new A.ah(B.ck,B.cg,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.cp(B.eU,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cX(new A.b1(p,new A.bk(0.72,1,q),q.j("b1<bj.T>")),!1,A.X(B.jG,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n6
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aMy(s,t),r,q,A.aN(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.q(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aN(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aN(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.ag,t,B.ba,B.x,s,t)}}
C.aMy.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kn(u,B.M,new C.cKq(this),B.c8,B.bI,!0,w,w,new C.cKr(this),w)
return new C.Fg(v,w)}}
C.Fg.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.uO,B.SL],x.O),B.jG)
break
case 1:w=new A.aM(A.a([B.yL,D.axG],x.O),B.mb)
break
case 2:w=new A.aM(A.a([D.azc,D.ax7],x.O),B.AQ)
break
case 3:w=new A.aM(A.a([B.V,B.dt],x.O),B.AV)
break
case 4:w=new A.aM(A.a([B.at,B.aK],x.O),B.pe)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.X(w.b,B.a5.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.q(u,u,u,u,u,new A.ah(B.aD,B.aL,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.al1.prototype={
p(){var w=this,v=w.aR$
if(v!=null)v.Z(0,w.gdw())
w.aR$=null
w.a4()},
br(){this.bF()
this.bD()
this.dz()}}
C.a6u.prototype={
U(){return new C.ag9()}}
C.ag9.prototype={
a7r(d,e){var w,v=C.bo7(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.djv(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dT7(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEK(){var w,v=this
if(v.w)return
v.q(new C.cFO(v))
w=v.e
if(w!=null)v.a7r(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.Gi()
$.pC().uP(w,new C.cFX(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cFQ(v))
w=v.e
w.toString
v.a7r(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.Zl,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fK(A.aG(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1G(n,B.tv,w)],v)
if(o.f)w.push(A.fK(A.aG(new A.aa(28,28,D.aub,n),n,n,n),B.d6,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bo,B.v,1)
q=A.X(B.L_,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eX(0,A.aI(!1,B.U,!0,n,A.aO(!1,n,!0,A.aG(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.q(t,n,r,s,n,n,B.p),n,n,n,D.W4,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEJ(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a6)))}v=C.bo7(o.a.d)
if(v!=null)w.push(A.aN(8,A.k7(D.aPe,D.d1H,new C.cFP(o),A.iM(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aF(B.ag,n,B.ba,B.x,w,n)}}
var z=a.updateTypes(["o(o9)","~()","JP(Q)","o9(Z<@,@>)","a0(o9)","Z<o,@>(o9)","aA<~>()","JO(Q)","l9<K>(Q,qj?,p?)","Wp(Q,K)","tY(Q,qj?,p?)","Fg(Q,am,dI?)"])
C.dfv.prototype={
$1(d){return new C.JP(this.a,null)},
$S:z+2}
C.dfu.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aH(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dU,B.V],j):A.a([B.e,B.av],j),h=A.a([new A.a8(0,B.G,B.a5.l(0.22),B.eW,32)],x.V),g=A.O(m?B.ci:B.a5.l(0.18),B.v,1),f=A.m(28),e=B.a5.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aMJ,B.j,n,n,new A.q(B.a5.l(0.18),n,A.O(B.a5.l(0.45),B.v,1),n,n,n,B.ar),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aP,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.fi,w,A.aL(n,n,n,n,A.X(B.d0,m?B.aC:B.d6,n,n,n),n,n,n,new C.dfq(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.q(n,n,n,n,n,new A.ah(B.aa,B.ad,B.H,j,n,n),B.p),n,n,n,B.IR,n,n,n)
e=A.ed(B.cD,A.a([new C.Nd("YouTube",B.KV,m,n),new C.Nd("TikTok",B.mb,m,n),new C.Nd("Instagram",B.AQ,m,n),new C.Nd("Facebook",B.AV,m,n)],v),B.cl,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cz:B.ju,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aK:B.by
r=A.X(B.fv,B.a5.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ci:B.aO
u=A.w(A.a([e,B.aR,A.b0(n,B.X,!0,n,!0,B.x,n,A.b2(),w,n,n,n,n,n,2,A.bq(n,new A.b7(4,q,B.W),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aC(o,1,B.v,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.m(16),B.Rw),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.an,n,n,n,n)],v),B.au,B.i,B.k,0,B.q)
e=A.k7(D.aMM,D.d5b,new C.dfr(d),A.iM(n,n,n,n,n,n,n,n,n,n,n,m?B.bv:B.ak,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.d0(A.c7(f,A.w(A.a([j,new A.I(B.Wh,u,n),new A.I(D.aF_,A.H(A.a([e,B.bt,A.ci(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aE,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dfs(d),n,n),B.am,A.dN(D.aQP,D.d5T,new C.dft(d,w),A.bF(B.a5,n,n,n,B.e,n,D.W4,n,new A.bC(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.au,B.i,B.a_,0,B.q),B.aB),new A.q(n,n,g,k,h,new A.ah(B.aD,B.aL,B.H,i,n,n),B.p),B.bD),n)},
$S:86}
C.dfq.prototype={
$0(){A.a6(this.a,!1).S(null)
return null},
$S:0}
C.dfr.prototype={
$0(){C.dvD()
$.OU().sv(0,null)
A.a6(this.a,!1).S(null)},
$S:0}
C.dfs.prototype={
$0(){A.a6(this.a,!1).S(null)
return null},
$S:0}
C.dft.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a6(this.a,!1).S(w)
return null},
$S:0}
C.boj.prototype={
$1(d){return C.dvE(A.S(d,x.N,x.z))},
$S:z+3}
C.bok.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bob.prototype={
$1(d){return d.c},
$S:z+0}
C.boc.prototype={
$1(d){return d.r},
$S:z+0}
C.bod.prototype={
$1(d){return d.f},
$S:z+0}
C.boe.prototype={
$1(d){return d.at},
$S:z+0}
C.bof.prototype={
$1(d){return d.c},
$S:z+0}
C.bog.prototype={
$1(d){return d.r},
$S:z+0}
C.boh.prototype={
$1(d){return d.f},
$S:z+0}
C.boi.prototype={
$1(d){return d.at},
$S:z+0}
C.boa.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bo9.prototype={
$1(d){return B.b.bi(B.l.hv(d,16),2,"0").toUpperCase()},
$S:87}
C.cFG.prototype={
$0(){},
$S:0}
C.cFF.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFD.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cFE.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cFH.prototype={
$1(d){return new C.JO(this.a,null)},
$S:z+7}
C.cFL.prototype={
$0(){return A.a6(this.a,!1).ez()},
$S:0}
C.cFM.prototype={
$3(d,e,f){return new A.l9($.Gg(),new C.cFK(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cFK.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.D9(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a5.l(0.12)
s=A.m(12)
r=A.O(B.a5.l(0.35),B.v,1)
q=A.X(B.jG,B.a5,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Gg().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.q(t,k,r,s,k,k,B.p),k,k,B.di,B.ht,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.c7(s,new A.iT(1.7777777777777777,C.dvF(new A.dn("fleet_master_"+r,x.W),!0,r,!0,j.gaMG(),"fleet_master"),k),B.aB),B.al],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vP(0,B.x,k,B.F,k,k,k,k,!1,k,B.aj,!1,A.a([new A.kx(new A.I(B.IH,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.oj(D.aD4,A.aB6(new A.nz(new C.cFJ(i,j),J.a2(i.d),!1,!0,!0,A.tq(),k),D.cGU),k)],w))},
$S:1694}
C.cFJ.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wp(v,e,J.a2(w.d),new C.cFI(w,v),this.b,null)},
$S:z+9}
C.cFI.prototype={
$0(){return this.a.bp1(this.b)},
$S:0}
C.cFN.prototype={
$0(){this.a.UO()
return null},
$S:0}
C.cFA.prototype={
$0(){return A.a6(this.a,!1).ez()},
$S:0}
C.cFB.prototype={
$0(){C.Zl(this.a,$.bo8)
return null},
$S:0}
C.cFC.prototype={
$3(d,e,f){return A.f2(new C.cFz(this.a,e))},
$S:z+10}
C.cFz.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cG(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aR,new C.aS_(u,s.a.c,s.e,s.d,new C.cFw(s),new C.cFx(s),new C.cFy(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),B.x,v,B.F,v,B.oR,v,v,B.aj),v,v,v)},
$S:1695}
C.cFw.prototype={
$0(){var w=this.a.c
w.toString
C.Zl(w,$.bo8)
return null},
$S:0}
C.cFx.prototype={
$1(d){var w=this.a
return w.q(new C.cFv(w,d))},
$S:31}
C.cFv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cFy.prototype={
$0(){var w=this.a
return w.q(new C.cFu(w))},
$S:0}
C.cFu.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cV8.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cV9.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cKq.prototype={
$3(d,e,f){return new C.Fg(this.a.c,null)},
$S:z+11}
C.cKr.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.ag,null,B.ba,B.x,A.a([new C.Fg(this.a.c,null),D.atk],x.p),null)},
$C:"$3",
$R:3,
$S:226}
C.cFO.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cFX.prototype={
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
w.a7r(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hg(v,"load",new C.cFU(w),!1,u)
v=w.e
v.toString
A.hg(v,"error",new C.cFV(w),!1,u)
A.bN(B.kf,new C.cFW(w),x.H)
w=w.e
w.toString
return w},
$S:587}
C.cFU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cFT(w))},
$S:46}
C.cFT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cFV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cFS(w))},
$S:46}
C.cFS.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cFW.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cFR(w))},
$S:12}
C.cFR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cFQ.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cFP.prototype={
$0(){var w,v=C.bo7(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kJ.Sy(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dbX.prototype={
$1(d){var w,v,u,t,s=new A.EP([],[]).II(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1696};(function aliases(){var w=C.al1.prototype
w.aWD=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag8.prototype,"gawZ","bmv",1)
w(u,"gbn5","bn6",1)
w(u,"gbpC","bpD",6)
w(C.ag9.prototype,"gbEJ","bEK",1)
v(C,"ebN","dvC",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yt,[C.dfv,C.dfu,C.boj,C.bok,C.bob,C.boc,C.bod,C.boe,C.bof,C.bog,C.boh,C.boi,C.boa,C.bo9,C.cFH,C.cFM,C.cFK,C.cFC,C.cFx,C.cKq,C.cKr,C.cFX,C.cFU,C.cFV,C.dbX])
v(A.a_M,[C.dfq,C.dfr,C.dfs,C.dft,C.cFG,C.cFF,C.cFD,C.cFE,C.cFL,C.cFI,C.cFN,C.cFA,C.cFB,C.cFw,C.cFv,C.cFy,C.cFu,C.cV8,C.cV9,C.cFO,C.cFT,C.cFS,C.cFW,C.cFR,C.cFQ,C.cFP])
v(A.av,[C.Nd,C.Wp,C.aJX,C.aS_,C.aS0,C.aLa,C.aRZ,C.aMt,C.aGa,C.aMy,C.Fg])
v(A.am,[C.o9,C.qj])
v(A.ae,[C.JP,C.JO,C.a6t,C.a6u])
v(A.af,[C.ag8,C.aL4,C.al1,C.ag9])
v(A.a_N,[C.cFJ,C.cFz])
u(C.JS,A.aH5)
u(C.aL5,C.al1)
w(C.al1,A.e1)})()
A.dz6(b.typeUniverse,JSON.parse('{"JP":{"ae":[],"p":[]},"Wp":{"av":[],"p":[]},"JO":{"ae":[],"p":[]},"Nd":{"av":[],"p":[]},"ag8":{"af":["JP"]},"aJX":{"av":[],"p":[]},"aL4":{"af":["JO"]},"aS_":{"av":[],"p":[]},"aS0":{"av":[],"p":[]},"aLa":{"av":[],"p":[]},"aRZ":{"av":[],"p":[]},"aMt":{"av":[],"p":[]},"aGa":{"av":[],"p":[]},"a6t":{"ae":[],"p":[]},"Fg":{"av":[],"p":[]},"aL5":{"af":["a6t"]},"aMy":{"av":[],"p":[]},"a6u":{"ae":[],"p":[]},"ag9":{"af":["a6u"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a3<a8>"),O:w("a3<x>"),e:w("a3<o9>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<o9>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o4"),_:w("D6"),k:w("o9"),N:w("o"),Y:w("bk<a9>"),W:w("dn<o>"),J:w("l9<K>"),j:w("l9<qj?>"),E:w("xn<cL>"),q:w("Xf"),z:w("@"),Q:w("am?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Z5=new A.N(983224,"MaterialIcons",!1)
D.aPm=new A.ab(D.Z5,48,B.bo,null,null,null)
D.cN8=new A.R(!0,B.cz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUv=new A.C("Powered off",null,D.cN8,null,null,null,null,null,null,null,null,null)
D.bKn=w([D.aPm,B.Q,D.cUv],x.p)
D.aAr=new A.eE(B.aj,B.i,B.a_,B.o,null,B.q,null,0,D.bKn,null)
D.at6=new A.di(B.M,null,null,D.aAr,null)
D.cGz=new A.aa(18,18,B.Ss,null)
D.atk=new A.di(B.M,null,null,D.cGz,null)
D.aub=new A.h9(2,null,null,null,null,B.a8,null,null,null,null)
D.ax7=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axG=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.azc=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCT=new A.V(0,3,0,3)
D.aD4=new A.V(10,0,10,88)
D.aDs=new A.V(12,6,12,10)
D.aDH=new A.V(14,8,14,6)
D.W4=new A.V(18,12,18,12)
D.aF_=new A.V(20,8,20,20)
D.WE=new A.V(8,6,15,8)
D.aL4=new A.N(983222,"MaterialIcons",!1)
D.aMJ=new A.ab(B.jG,26,B.a5,null,null,null)
D.aMM=new A.ab(B.Yl,18,null,null,null,null)
D.aN_=new A.ab(B.rI,14,B.a8,null,null,null)
D.aLn=new A.N(983420,"MaterialIcons",!1)
D.aNL=new A.ab(D.aLn,14,B.a8,null,null,null)
D.aJo=new A.N(62895,"MaterialIcons",!1)
D.aNP=new A.ab(D.aJo,14,B.a8,null,null,null)
D.aPe=new A.ab(B.rA,16,B.a8,null,null,null)
D.aQP=new A.ab(B.iI,20,null,null,null,null)
D.aR3=new A.ab(B.ha,16,null,null,null,null)
D.bO2=w([B.aK,B.V],x.O)
D.a_I=new A.ah(B.aD,B.aL,B.H,D.bO2,null,null)
D.cAc=new A.aM("NGMY OS","14.2.1")
D.cz_=new A.aM("VirtualDroid","13.8.4")
D.cyZ=new A.aM("NGMY OS","15.0.0")
D.czL=new A.aM("VirtualDroid","14.1.2")
D.cyX=new A.aM("NGMY Tab OS","12.9.7")
D.cyV=new A.aM("NGMY OS","13.5.3")
D.cyK=new A.aM("VirtualDroid","15.2.0")
D.czm=new A.aM("NGMY OS","14.8.1")
D.czR=new A.aM("NGMY Tab OS","13.2.4")
D.cAm=new A.aM("VirtualDroid","12.6.9")
D.cyD=new A.aM("NGMY OS","16.0.1")
D.cys=new A.aM("VirtualDroid","14.9.0")
D.cA3=new A.aM("NGMY Tab OS","14.0.3")
D.cz8=new A.aM("NGMY OS","13.1.8")
D.cyC=new A.aM("VirtualDroid","13.4.5")
D.cyU=new A.aM("NGMY OS","15.3.2")
D.czS=new A.aM("NGMY Tab OS","12.4.1")
D.cA6=new A.aM("VirtualDroid","16.1.0")
D.czl=new A.aM("NGMY OS","14.4.6")
D.cAd=new A.aM("VirtualDroid","15.0.8")
D.bNf=w([D.cAc,D.cz_,D.cyZ,D.czL,D.cyX,D.cyV,D.cyK,D.czm,D.czR,D.cAm,D.cyD,D.cys,D.cA3,D.cz8,D.cyC,D.cyU,D.czS,D.cA6,D.czl,D.cAd],A.b3("a3<+(o,o)>"))
D.cCs=new A.eM(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cC0=new A.eM(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cBW=new A.eM(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cC4=new A.eM(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cBS=new A.eM(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cC6=new A.eM(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCu=new A.eM(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cBT=new A.eM(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cC_=new A.eM(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cC8=new A.eM(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cBR=new A.eM(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCm=new A.eM(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCj=new A.eM(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cBZ=new A.eM(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCg=new A.eM(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCf=new A.eM(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cBQ=new A.eM(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cC3=new A.eM(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCd=new A.eM(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCi=new A.eM(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6m=w([D.cCs,D.cC0,D.cBW,D.cC4,D.cBS,D.cC6,D.cCu,D.cBT,D.cC_,D.cC8,D.cBR,D.cCm,D.cCj,D.cBZ,D.cCg,D.cCf,D.cBQ,D.cC3,D.cCd,D.cCi],A.b3("a3<+(o,o,a9,a9,o)>"))
D.bWr=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adP=new C.JS(0,"youtube")
D.adQ=new C.JS(1,"tiktok")
D.NU=new C.JS(2,"instagram")
D.adR=new C.JS(3,"facebook")
D.crN=new C.JS(4,"other")
D.cGa=new A.aa(3,null,null,null)
D.cGU=new A.im(4,10,8,0.52,null)
D.cVK=new A.C("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKg=new A.aY(D.cVK,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.x,null)
D.cNu=new A.R(!0,B.e,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVy=new A.C("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d1H=new A.C("Open in YouTube",null,B.iS,null,null,null,null,null,null,null,null,null)
D.d5b=new A.C("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d5T=new A.C("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d5Z=new A.C("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dcD=new C.aMt(null)})();(function staticFields(){$.dvB=20
$.ax3=null
$.bo8=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"egK","Gg",()=>A.aCV(0))
w($,"egL","OU",()=>A.aCV(null))})()};
(a=>{a["TY/Z6TcQrQG+YWdDAOkQFgKiWaM="]=a.current})($__dart_deferred_initializers__);