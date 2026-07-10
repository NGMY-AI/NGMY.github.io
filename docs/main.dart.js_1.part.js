((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ec5(d,e){A.a7(d,!1).cA(A.eD(new C.deD(e),!0,null,x.H))},
Zf(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Zf=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.OR()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.as()
s=new A.ar(new A.bo(n,B.aW,B.aO),t)
w=3
return A.b(A.dL(B.L,new C.deC(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zf)
case 3:r=g
s.J$=t
s.L$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dSo(r)
if(q==null){d.H(x.q).f.T(D.cJz)
w=1
break}w=4
return A.b(A.bN(B.ib,null,x.H),$async$Zf)
case 4:if(d.e==null){w=1
break}n=B.l.X(e,1,999)
$.duN=n
p=C.dSi(n)
n=$.Gd()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.diH(q)
d.H(x.q).f.T(A.bw(null,null,null,null,null,B.z,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Zf,v)},
duQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o8(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JP(d){return C.dSr(d)},
dSr(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JP=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$JP)
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
case 10:k=J.eF(r,x.f)
k=A.dj(k,new C.bnT(),k.$ti.j("E.E"),x.k)
j=A.O(k).j("ai<E.E>")
i=A.B(new A.ai(k,new C.bnU(),j),j.j("E.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.duS(q)
w=12
return A.b(C.JO(a3,p),$async$JP)
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
case 19:m=C.duQ(A.S(n,x.N,x.z))
l=C.duS(A.a([m],x.e))
w=21
return A.b(C.JO(a3,l),$async$JP)
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
case 18:case 14:q=C.dSp()
w=22
return A.b(C.JO(a3,q),$async$JP)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$JP,v)},
duS(d){var w=A.a_(d).j("F<1,o>"),v=new A.F(d,new C.bnL(),w).eA(0),u=new A.F(d,new C.bnM(),w).eA(0),t=new A.F(d,new C.bnN(),w).eA(0),s=new A.F(d,new C.bnO(),w).eA(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.diI(null,q,u,t,v,s));++q}return r},
awN(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$awN=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JP(d),$async$awN)
case 3:t=f
s=x.N
r=J.cb(t)
q=r.dh(t,new C.bnP(),s).eA(0)
p=r.dh(t,new C.bnQ(),s).eA(0)
o=r.dh(t,new C.bnR(),s).eA(0)
n=r.dh(t,new C.bnS(),s).eA(0)
m=C.diI(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JO(d,t),$async$awN)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$awN,v)},
JO(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$JO=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$JO)
case 2:u=g
t=B.b.i(d)
s=J.b4(e,new C.bnK(),x.P)
s=A.B(s,s.$ti.j("a5.E"))
w=3
return A.b(u.az("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JO)
case 3:return A.f(null,v)}})
return A.h($async$JO,v)},
dSp(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.ds(20,x.k)
for(w=0;w<20;++w)q[w]=C.diI(w,w,t,s,u,r)
return q},
diI(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jw(),h=d==null,g=D.a6d[B.l.a3(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6d[B.l.a3(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.F(p,new C.bnJ(),A.a_(p).j("F<1,o>")).fw(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fw(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.hv(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a3(e,20)
k=D.bVN[w]
j=D.bMG[w]
return new C.o8("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dSq(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.U(Date.now(),0,!1).a8().a2())},
dSq(d,e){var w,v=J.ds(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.hv(d.bF(256),16),2,"0")
return B.h.fw(v)},
deD:function deD(d){this.a=d},
deC:function deC(d,e){this.a=d
this.b=e},
dey:function dey(d){this.a=d},
dez:function dez(d){this.a=d},
deA:function deA(d){this.a=d},
deB:function deB(d,e){this.a=d
this.b=e},
Na:function Na(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o8:function o8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bnT:function bnT(){},
bnU:function bnU(){},
bnL:function bnL(){},
bnM:function bnM(){},
bnN:function bnN(){},
bnO:function bnO(){},
bnP:function bnP(){},
bnQ:function bnQ(){},
bnR:function bnR(){},
bnS:function bnS(){},
bnK:function bnK(){},
bnJ:function bnJ(){},
JN:function JN(d,e){this.c=d
this.a=e},
afY:function afY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cES:function cES(){},
cER:function cER(d,e){this.a=d
this.b=e},
cEP:function cEP(d){this.a=d},
cEQ:function cEQ(d,e){this.a=d
this.b=e},
cET:function cET(d){this.a=d},
cEX:function cEX(d){this.a=d},
cEY:function cEY(d,e){this.a=d
this.b=e},
cEW:function cEW(d,e,f){this.a=d
this.b=e
this.c=f},
cEV:function cEV(d,e){this.a=d
this.b=e},
cEU:function cEU(d,e){this.a=d
this.b=e},
cEZ:function cEZ(d){this.a=d},
Wl:function Wl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJB:function aJB(d,e){this.c=d
this.a=e},
JM:function JM(d,e){this.c=d
this.a=e},
aKI:function aKI(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cEM:function cEM(d){this.a=d},
cEN:function cEN(d){this.a=d},
cEO:function cEO(d){this.a=d},
cEL:function cEL(d,e){this.a=d
this.b=e},
cEI:function cEI(d){this.a=d},
cEJ:function cEJ(d){this.a=d},
cEH:function cEH(d,e){this.a=d
this.b=e},
cEK:function cEK(d){this.a=d},
cEG:function cEG(d){this.a=d},
aRB:function aRB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRC:function aRC(d,e,f){this.c=d
this.d=e
this.a=f},
aKO:function aKO(d,e){this.c=d
this.a=e},
aRA:function aRA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cUi:function cUi(d){this.a=d},
cUj:function cUj(d){this.a=d},
aM4:function aM4(d){this.a=d},
aFR:function aFR(d,e){this.c=d
this.a=e},
dSo(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dSn(v)
if(u!=null)return new C.qh(w,C.diG(u,!1),D.adF,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dSm(v)
if(t!=null)return new C.qh(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adG,"TikTok",q)
s=C.dSl(w,v)
if(s!=null)return s
r=C.dSk(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qh(w,w,D.cr5,"Video",q)
return q},
dSl(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qh(d,"https://www.instagram.com/reel/"+w+u,D.NR,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dm(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qh(d,"https://www.instagram.com/p/"+w+u,D.NR,t,null)}return null},
dSk(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qh(d,"https://www.facebook.com/plugins/video.php?href="+A.fj(2,d,B.be,!1)+"&show_text=false&width=734",D.adH,"Facebook",null)},
dSn(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dm(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dSm(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dm(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
JQ:function JQ(d,e){this.a=d
this.b=e},
qh:function qh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6m:function a6m(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKJ:function aKJ(d,e){var _=this
_.d=$
_.cW$=d
_.aU$=e
_.c=_.a=null},
aM9:function aM9(d,e){this.c=d
this.a=e},
cJA:function cJA(d){this.a=d},
cJB:function cJB(d){this.a=d},
Fd:function Fd(d,e){this.c=d
this.a=e},
akN:function akN(){},
duR(d,e,f,g,h,i){return new C.a6n(i,f,h,e,g,d)},
eaI(d){var w=window
w.toString
A.hg(w,"message",new C.db6(d),!1,x._)},
a6n:function a6n(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afZ:function afZ(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cF_:function cF_(d){this.a=d},
cF8:function cF8(d){this.a=d},
cF5:function cF5(d){this.a=d},
cF4:function cF4(d){this.a=d},
cF6:function cF6(d){this.a=d},
cF3:function cF3(d){this.a=d},
cF7:function cF7(d){this.a=d},
cF2:function cF2(d){this.a=d},
cF1:function cF1(d){this.a=d},
cF0:function cF0(d){this.a=d},
db6:function db6(d){this.a=d},
dSg(){var w,v,u
try{v=A.AA()
w=v.grQ(v)
if(J.a2(w)!==0&&!J.v(w,"null")&&!J.cH(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
diG(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bm(w,"&")},
bnH(d){var w=A.ao(y.c,!0,!1,!1,!1).dm(d)
return w==null?null:w.b[1]},
duM(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dSh(d,e,f){var w,v,u=C.bnH(d)
if(u!=null){if(f){w=C.dSg()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.duM(C.diG(u,e))}return C.duM(d)},
dSi(d){if(d<=4)return 0
return B.l.aI(d-1,4)*4},
dSj(d){var w
if($.OR().a==null)return!1
w=$.Gd().a
return d>=w&&d<w+4},
duP(){var w=$.awM
if(w!=null)w.ae(0)
$.awM=null
$.Gd().sv(0,0)},
duO(){var w,v,u,t=$.OR()
if(t.a==null)return
w=$.awM
if(w!=null)w.ae(0)
v=$.duN
if(v<=4){t=t.a
t.toString
C.diH(t)
return}w=$.Gd()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.diH(t)},
diH(d){var w=$.awM
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
default:w=null}$.awM=A.dH(A.dl(0,0,0,0,0,w),C.eaX())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Na.prototype={
C(d){var w=null,v=this.e,u=v?B.aJ:B.e,t=A.m(20),s=A.P(B.a3.l(0.25),B.w,1),r=A.X(this.d,B.a3,w,w,14)
return A.t(w,A.H(A.a([r,B.fL,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a_,0,w,w),B.j,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fb,w,w,w)}}
C.o8.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JN.prototype={
U(){return new C.afY(A.a([],x.e))},
gdV(){return this.c}}
C.afY.prototype={
a_(){var w=this
w.a5()
$.Gd().ap(0,w.gawS())
C.eaI(w.gbmO())
w.YI()},
bmd(){if(this.c!=null)this.q(new C.cES())},
bmP(){C.duO()},
p(){$.Gd().Z(0,this.gawS())
C.duP()
$.OR().sv(0,null)
this.a4()},
YI(){var w=0,v=A.i(x.H),u,t=this,s
var $async$YI=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JP(t.a.c),$async$YI)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cER(t,s))
$.bnI=J.a2(s)
case 1:return A.f(u,v)}})
return A.h($async$YI,v)},
UH(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UH=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.q(new C.cEP(t))
w=3
return A.b(C.awN(t.a.c),$async$UH)
case 3:s=e
if(t.c==null){w=1
break}t.q(new C.cEQ(t,s))
$.bnI=J.a2(t.d)
t.c.H(x.q).f.T(A.bw(null,null,null,null,null,B.z,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$UH,v)},
boK(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.eD(new C.cET(d),!1,null,x.H))},
bpl(){var w=this.c
w.toString
return C.Zf(w,J.a2(this.d))},
C(d){var w=this,v=null,u=A.A(d).ax.a===B.C,t=u?B.fa:B.by,s=A.aL(v,v,v,v,B.L4,v,v,v,new C.cEX(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a2(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.DF(A.H(A.a([A.J(new A.I(B.j1,A.j(r,v,1,B.az,v,v,v,A.l(v,v,u?B.e:B.V,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aJ(!1,B.U,!0,v,A.aO(!1,v,!0,new A.I(B.bd,A.X(B.h6,B.a3,v,v,28),v),B.cL,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpk(),v,v,v,v,v,v,v),B.j,B.L,0,v,v,v,v,v,B.a6)],q),B.o,v,B.i,B.k,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.k,0,v,v)
s=A.bY(!0,A.w(A.a([new A.I(D.Wz,r,v),A.J(w.e?B.oi:new A.l7($.OR(),new C.cEY(w,u),v,v,x.j),1)],q),B.o,B.i,B.k,0,B.q),!1,B.ai,!0,!0)
return A.c8(v,t,s,v,!1,!1,A.aqH(B.a3,B.Gn,B.mc,D.d59,w.e?v:new C.cEZ(w)),v)}}
C.Wl.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.a9(0,B.G,B.a3.l(0.18),B.dA,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6m(n,!0,!C.dSj(w),"Fold "+(B.l.aI(w,4)+1)+"/"+B.l.aI(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.X(B.jE,B.n3,u,u,22),B.aM,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aY,B.k,0,B.q),B.j,B.yH,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aJ(!1,B.U,!0,u,A.aO(!1,t,!0,A.w(A.a([A.J(A.t(u,A.cf(p,A.fK(A.w(A.a([new C.aJB(o,u),A.J(n,1),A.t(u,A.H(A.a([A.X(B.B6,B.a3.l(0.85),u,u,9),D.cFt,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aY,B.k,0,u,u),B.j,B.au,u,u,u,u,u,D.aCy,u,u,u)],w),B.o,B.i,B.k,0,B.q),B.A,!0),B.aE),B.j,u,u,new A.r(u,u,r,s,q,D.a_B,B.p),u,u,u,B.h1,u,u,u),1),B.aM,A.j(o.b,u,1,B.az,u,u,u,A.l(u,u,A.A(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.az,u,u,u,A.l(u,u,A.A(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.az,u,u,u,A.l(u,u,B.a3.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.k,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.L,0,u,u,u,u,u,B.a6)}}
C.aJB.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.j(B.h.gar(this.c.c.split("-")),w,w,B.az,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.rC,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.k,0,w,w),B.j,B.au,w,w,w,w,w,B.Wq,w,w,w)}}
C.JM.prototype={
U(){return new C.aKI()}}
C.aKI.prototype={
C(d){var w=null,v=A.A(d).ax.a===B.C,u=v?B.fa:B.by,t=A.aL(w,w,w,w,B.L4,w,w,w,new C.cEM(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c8(w,u,A.bY(!0,A.w(A.a([new A.I(D.Wz,A.H(A.a([t,A.J(new A.DF(A.H(A.a([A.J(new A.I(B.j1,A.j(s.b+" \xb7 "+s.c,w,1,B.az,w,w,w,A.l(w,w,v?B.e:B.V,w,w,w,w,w,w,w,w,14,w,w,B.D,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aJ(!1,B.U,!0,w,A.aO(!1,w,!0,new A.I(B.bd,A.X(B.h6,B.a3,w,w,28),w),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cEN(d),w,w,w,w,w,w,w),B.j,B.L,0,w,w,w,w,w,B.a6)],r),B.o,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.k,0,w,w),w),A.J(new A.l7($.OR(),new C.cEO(this),w,w,x.j),1)],r),B.o,B.i,B.k,0,B.q),!1,B.ai,!0,!0),w,!1,!1,w,w)}}
C.aRB.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.G,B.a3.l(0.35),B.eT,28),new A.a9(0,B.G,B.A.l(0.45),B.d1,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.duR(new A.du(v+"_full_"+u,x.W),!1,u,!1,w.gaMx(),v+"_full")
w=v}else w=new C.aKO(t.r,s)}else w=new C.aFR(m,s)
else w=D.dbN
return A.t(s,A.cf(n,A.fK(A.w(A.a([new C.aRC(m,l,s),A.J(w,1),new C.aRA(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.k,0,B.q),B.A,!0),B.aE),B.j,s,s,new A.r(s,s,o,q,p,D.a_B,B.p),s,r*2.05,s,B.bI,s,s,r)}}
C.aRC.prototype={
C(d){var w,v,u,t,s=null,r=new A.U(Date.now(),0,!1),q=A.dA(r)
r=A.hF(r)
w=new A.dB(q,r)
v=w.gJq()===0?12:w.gJq()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.fZ:B.j_)===B.fZ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.nT,s,s,s),B.bv,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNk,B.el,D.aMB,B.el,D.aNo],t),B.o,s,B.i,B.k,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.X(B.KR,B.a3.l(0.9),s,s,12),B.el,A.J(A.j(u.c,s,s,B.az,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.k,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.k,0,B.q),B.j,B.au,s,s,s,s,s,D.aDm,s,s,s)}}
C.aKO.prototype={
C(d){var w=null
return A.t(w,A.aG(A.w(A.a([A.X(B.Az,B.e.l(0.35),w,w,40),B.Y,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.f6(D.aQA,D.cUR,this.c,A.ev(w,w,w,w,w,w,w,w,w,B.a3,w,w,w,w,w,new A.aF(B.a3.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a_,0,B.q),w,w,w),B.j,B.yH,w,w,w,w,w,w,w,w,1/0)}}
C.aRA.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awI(B.AX,"YouTube",s===0,r,new C.cUi(u))
s=u.awI(B.kh,"Device",s===1,r,new C.cUj(u))
w=r?"Power off":"Power on"
v=r?D.Z_:D.aKH
return A.t(t,A.H(A.a([q,B.am,s,B.bv,A.aL(t,t,t,t,A.X(v,r?B.bT:B.fH,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dw)],x.p),B.o,t,B.i,B.k,0,t,t),B.j,B.au,t,t,t,t,t,D.aD7,t,t,t)},
awI(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bo
else w=f?B.a3:B.aB
v=f&&g?B.a3.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.J(A.aJ(!1,B.U,!0,u,A.aO(!1,A.m(10),!0,new A.I(B.nf,A.w(A.a([A.X(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a_,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a6),1)}}
C.aM4.prototype={
C(d){return D.asR}}
C.aFR.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.lA,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tD("Serial",u.c),q=w.tD("Model",u.d),p=w.tD("Device ID",u.e),o=w.tD("IMEI",u.r),n=w.tD("MAC",u.f),m=w.tD("OS",u.w+" "+u.x),l=w.tD("Location",u.y+", "+u.z),k=w.tD("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tD("Timezone",u.at)
u=u.ax
return A.eu(A.a([t,B.aM,s,B.ah,r,q,p,o,n,m,l,k,j,w.tD("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.bd,v,v,B.ak,!1)},
tD(d,e){var w=null
return new A.I(B.cZ,A.w(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cK,A.j(e,w,w,w,w,w,w,D.cMO,w,w,w)],x.p),B.E,B.i,B.k,0,B.q),w)}}
C.JQ.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qh.prototype={
gaMx(){var w=this.c
return w===D.adF||w===D.adG||w===D.NR||w===D.adH}}
C.a6m.prototype={
U(){return new C.aKJ(null,null)}}
C.aKJ.prototype={
a_(){this.a5()
var w=A.bB(null,B.v5,null,1,null,this)
w.mm(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aWr()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dh(t,new A.r(t,t,t,t,t,new A.ak(B.cl,B.cq,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bP),q=x.Y,p=u.d
p===$&&A.c()
p=A.cq(B.hJ,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cZ(new A.b1(p,new A.bk(0.72,1,q),q.j("b1<bj.T>")),!1,A.X(B.jE,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n3
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM9(s,t),r,q,A.aN(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.D,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aN(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aN(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aE(B.ag,t,B.bb,B.z,s,t)}}
C.aM9.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kl(u,B.N,new C.cJA(this),B.cb,B.bJ,!0,w,w,new C.cJB(this),w)
return new C.Fd(v,w)}}
C.Fd.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aM(A.a([B.uJ,B.SH],x.O),B.jE)
break
case 1:w=new A.aM(A.a([B.yH,D.axm],x.O),B.m9)
break
case 2:w=new A.aM(A.a([D.ayT,D.awO],x.O),B.AG)
break
case 3:w=new A.aM(A.a([B.V,B.ds],x.O),B.AL)
break
case 4:w=new A.aM(A.a([B.au,B.aJ],x.O),B.pa)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.X(w.b,B.a3.l(0.55),u,u,28),u,u,u),B.j,u,u,new A.r(u,u,u,u,u,new A.ak(B.aI,B.aP,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akN.prototype={
p(){var w=this,v=w.aU$
if(v!=null)v.Z(0,w.gdH())
w.aU$=null
w.a4()},
bt(){this.bK()
this.bH()
this.dI()}}
C.a6n.prototype={
U(){return new C.afZ()}}
C.afZ.prototype={
a7l(d,e){var w,v=C.bnH(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.diG(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dSh(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEp(){var w,v=this
if(v.w)return
v.q(new C.cF_(v))
w=v.e
if(w!=null)v.a7l(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.Gf()
$.pC().uO(w,new C.cF8(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.q(new C.cF1(v))
w=v.e
w.toString
v.a7l(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.Zf,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.T,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.S,n,n)],v))
return A.fK(A.aG(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a_,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1A(n,B.tp,w)],v)
if(o.f)w.push(A.fK(A.aG(new A.aa(28,28,D.atU,n),n,n,n),B.d9,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bo,B.w,1)
q=A.X(B.KX,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eW(0,A.aJ(!1,B.U,!0,n,A.aO(!1,n,!0,A.aG(A.t(n,A.H(A.a([q,B.am,A.j("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a_,0,n,n),B.j,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.VZ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEo(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a6)))}v=C.bnH(o.a.d)
if(v!=null)w.push(A.aN(8,A.k5(D.aON,D.d0X,new C.cF0(o),A.iK(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fb,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aE(B.ag,n,B.bb,B.z,w,n)}}
var z=a.updateTypes(["o(o8)","~()","JN(Q)","o8(Z<@,@>)","a0(o8)","Z<o,@>(o8)","aA<~>()","JM(Q)","l7<K>(Q,qh?,p?)","Wl(Q,K)","tU(Q,qh?,p?)","Fd(Q,am,dG?)"])
C.deD.prototype={
$1(d){return new C.JN(this.a,null)},
$S:z+2}
C.deC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.A(d).ax.a===B.C,l=A.aI(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dS,B.V],j):A.a([B.e,B.aw],j),h=A.a([new A.a9(0,B.G,B.a3.l(0.22),B.eT,32)],x.V),g=A.P(m?B.cd:B.a3.l(0.18),B.w,1),f=A.m(28),e=B.a3.l(m?0.35:0.14)
j=A.a([e,B.av.l(m?0.18:0.08)],j)
e=A.t(n,D.aMk,B.j,n,n,new A.r(B.a3.l(0.18),n,A.P(B.a3.l(0.45),B.w,1),n,n,n,B.at),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,18,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.al,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.E,B.i,B.k,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f2,w,A.aL(n,n,n,n,A.X(B.d_,m?B.aB:B.d9,n,n,n),n,n,n,new C.dey(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.k,0,n,n),B.j,n,n,new A.r(n,n,n,n,n,new A.ak(B.a9,B.ad,B.H,j,n,n),B.p),n,n,n,B.IJ,n,n,n)
e=A.ec(B.cC,A.a([new C.Na("YouTube",B.KQ,m,n),new C.Na("TikTok",B.m9,m,n),new C.Na("Instagram",B.AG,m,n),new C.Na("Facebook",B.AL,m,n)],v),B.cj,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.V,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cz:B.js,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aJ:B.by
r=A.X(B.fs,B.a3.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aL
u=A.w(A.a([e,B.aR,A.b0(n,B.X,!0,n,!0,B.z,n,A.b2(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.W),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Rs),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a4,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a7,n,B.ap,n,n,n,n)],v),B.as,B.i,B.k,0,B.q)
e=A.k5(D.aMn,D.d4n,new C.dez(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bw:B.al,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dh(A.cf(f,A.w(A.a([j,new A.I(B.Wd,u,n),new A.I(D.aED,A.H(A.a([e,B.bv,A.cj(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.aC,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.deA(d),n,n),B.am,A.dM(D.aQm,D.d53,new C.deB(d,w),A.bF(B.a3,n,n,n,B.e,n,D.VZ,n,new A.bE(A.m(14),B.W),n,n,n))],v),B.o,n,B.i,B.k,0,n,n),n)],v),B.as,B.i,B.a_,0,B.q),B.aE),new A.r(n,n,g,k,h,new A.ak(B.aI,B.aP,B.H,i,n,n),B.p),B.bP),n)},
$S:84}
C.dey.prototype={
$0(){A.a7(this.a,!1).S(null)
return null},
$S:0}
C.dez.prototype={
$0(){C.duP()
$.OR().sv(0,null)
A.a7(this.a,!1).S(null)},
$S:0}
C.deA.prototype={
$0(){A.a7(this.a,!1).S(null)
return null},
$S:0}
C.deB.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).S(w)
return null},
$S:0}
C.bnT.prototype={
$1(d){return C.duQ(A.S(d,x.N,x.z))},
$S:z+3}
C.bnU.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnL.prototype={
$1(d){return d.c},
$S:z+0}
C.bnM.prototype={
$1(d){return d.r},
$S:z+0}
C.bnN.prototype={
$1(d){return d.f},
$S:z+0}
C.bnO.prototype={
$1(d){return d.at},
$S:z+0}
C.bnP.prototype={
$1(d){return d.c},
$S:z+0}
C.bnQ.prototype={
$1(d){return d.r},
$S:z+0}
C.bnR.prototype={
$1(d){return d.f},
$S:z+0}
C.bnS.prototype={
$1(d){return d.at},
$S:z+0}
C.bnK.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bnJ.prototype={
$1(d){return B.b.bj(B.l.hv(d,16),2,"0").toUpperCase()},
$S:88}
C.cES.prototype={
$0(){},
$S:0}
C.cER.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cEP.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cEQ.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cET.prototype={
$1(d){return new C.JM(this.a,null)},
$S:z+7}
C.cEX.prototype={
$0(){return A.a7(this.a,!1).ez()},
$S:0}
C.cEY.prototype={
$3(d,e,f){return new A.l7($.Gd(),new C.cEW(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cEW.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.D6(d,k,x.Q)
w=w==null?k:w.glx()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a3.l(0.12)
s=A.m(12)
r=A.P(B.a3.l(0.35),B.w,1)
q=A.X(B.jE,B.a3,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Gd().a
m=B.m.X(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.J(A.j("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.V,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.k,0,k,k),B.j,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dg,B.hr,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cf(s,new A.j_(1.7777777777777777,C.duR(new A.du("fleet_master_"+r,x.W),!0,r,!0,j.gaMx(),"fleet_master"),k),B.aE),B.ah],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.A(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vM(0,B.z,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kw(new A.I(B.IA,A.w(u,B.E,B.i,B.k,0,B.q),k),k),new A.oj(D.aCL,A.aAP(new A.nx(new C.cEV(i,j),J.a2(i.d),!1,!0,!0,A.to(),k),D.cGd),k)],w))},
$S:1683}
C.cEV.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wl(v,e,J.a2(w.d),new C.cEU(w,v),this.b,null)},
$S:z+9}
C.cEU.prototype={
$0(){return this.a.boK(this.b)},
$S:0}
C.cEZ.prototype={
$0(){this.a.UH()
return null},
$S:0}
C.cEM.prototype={
$0(){return A.a7(this.a,!1).ez()},
$S:0}
C.cEN.prototype={
$0(){C.Zf(this.a,$.bnI)
return null},
$S:0}
C.cEO.prototype={
$3(d,e,f){return A.f5(new C.cEL(this.a,e))},
$S:z+10}
C.cEL.prototype={
$2(d,e){var w,v=null,u=B.m.X(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cI(A.w(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.A(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.S,v,v),B.aR,new C.aRB(u,s.a.c,s.e,s.d,new C.cEI(s),new C.cEJ(s),new C.cEK(s),t,v)],x.p),B.o,B.i,B.k,0,B.q),v,B.F,v,B.oM,v,v,B.ak),v,v,v)},
$S:1684}
C.cEI.prototype={
$0(){var w=this.a.c
w.toString
C.Zf(w,$.bnI)
return null},
$S:0}
C.cEJ.prototype={
$1(d){var w=this.a
return w.q(new C.cEH(w,d))},
$S:32}
C.cEH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cEK.prototype={
$0(){var w=this.a
return w.q(new C.cEG(w))},
$S:0}
C.cEG.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cUi.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cUj.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cJA.prototype={
$3(d,e,f){return new C.Fd(this.a.c,null)},
$S:z+11}
C.cJB.prototype={
$3(d,e,f){if(f==null)return e
return new A.aE(B.ag,null,B.bb,B.z,A.a([new C.Fd(this.a.c,null),D.at4],x.p),null)},
$C:"$3",
$R:3,
$S:260}
C.cF_.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cF8.prototype={
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
w.a7l(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hg(v,"load",new C.cF5(w),!1,u)
v=w.e
v.toString
A.hg(v,"error",new C.cF6(w),!1,u)
A.bN(B.kb,new C.cF7(w),x.H)
w=w.e
w.toString
return w},
$S:586}
C.cF5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cF4(w))},
$S:46}
C.cF4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cF6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.q(new C.cF3(w))},
$S:46}
C.cF3.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cF7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.q(new C.cF2(w))},
$S:12}
C.cF2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cF1.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cF0.prototype={
$0(){var w,v=C.bnH(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kF.Sr(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.db6.prototype={
$1(d){var w,v,u,t,s=new A.EM([],[]).IF(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1685};(function aliases(){var w=C.akN.prototype
w.aWr=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afY.prototype,"gawS","bmd",1)
w(u,"gbmO","bmP",1)
w(u,"gbpk","bpl",6)
w(C.afZ.prototype,"gbEo","bEp",1)
v(C,"eaX","duO",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yq,[C.deD,C.deC,C.bnT,C.bnU,C.bnL,C.bnM,C.bnN,C.bnO,C.bnP,C.bnQ,C.bnR,C.bnS,C.bnK,C.bnJ,C.cET,C.cEY,C.cEW,C.cEO,C.cEJ,C.cJA,C.cJB,C.cF8,C.cF5,C.cF6,C.db6])
v(A.a_G,[C.dey,C.dez,C.deA,C.deB,C.cES,C.cER,C.cEP,C.cEQ,C.cEX,C.cEU,C.cEZ,C.cEM,C.cEN,C.cEI,C.cEH,C.cEK,C.cEG,C.cUi,C.cUj,C.cF_,C.cF4,C.cF3,C.cF7,C.cF2,C.cF1,C.cF0])
v(A.av,[C.Na,C.Wl,C.aJB,C.aRB,C.aRC,C.aKO,C.aRA,C.aM4,C.aFR,C.aM9,C.Fd])
v(A.am,[C.o8,C.qh])
v(A.ae,[C.JN,C.JM,C.a6m,C.a6n])
v(A.af,[C.afY,C.aKI,C.akN,C.afZ])
v(A.a_H,[C.cEV,C.cEL])
u(C.JQ,A.aGM)
u(C.aKJ,C.akN)
w(C.akN,A.e6)})()
A.dyi(b.typeUniverse,JSON.parse('{"JN":{"ae":[],"p":[]},"Wl":{"av":[],"p":[]},"JM":{"ae":[],"p":[]},"Na":{"av":[],"p":[]},"afY":{"af":["JN"]},"aJB":{"av":[],"p":[]},"aKI":{"af":["JM"]},"aRB":{"av":[],"p":[]},"aRC":{"av":[],"p":[]},"aKO":{"av":[],"p":[]},"aRA":{"av":[],"p":[]},"aM4":{"av":[],"p":[]},"aFR":{"av":[],"p":[]},"a6m":{"ae":[],"p":[]},"Fd":{"av":[],"p":[]},"aKJ":{"af":["a6m"]},"aM9":{"av":[],"p":[]},"a6n":{"ae":[],"p":[]},"afZ":{"af":["a6n"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a3<a9>"),O:w("a3<y>"),e:w("a3<o8>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<o8>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o3"),_:w("D3"),k:w("o8"),N:w("o"),Y:w("bk<a8>"),W:w("du<o>"),J:w("l7<K>"),j:w("l7<qh?>"),E:w("xk<cL>"),q:w("X9"),z:w("@"),Q:w("am?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Z_=new A.N(983224,"MaterialIcons",!1)
D.aOV=new A.ac(D.Z_,48,B.bo,null,null,null)
D.cMs=new A.R(!0,B.cz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cTO=new A.D("Powered off",null,D.cMs,null,null,null,null,null,null,null,null,null)
D.bJN=w([D.aOV,B.T,D.cTO],x.p)
D.aA7=new A.eL(B.ak,B.i,B.a_,B.o,null,B.q,null,0,D.bJN,null)
D.asR=new A.dm(B.N,null,null,D.aA7,null)
D.cFT=new A.aa(18,18,B.So,null)
D.at4=new A.dm(B.N,null,null,D.cFT,null)
D.atU=new A.ha(2,null,null,null,null,B.a8,null,null,null,null)
D.awO=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.axm=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.ayT=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aCy=new A.V(0,3,0,3)
D.aCL=new A.V(10,0,10,88)
D.aD7=new A.V(12,6,12,10)
D.aDm=new A.V(14,8,14,6)
D.VZ=new A.V(18,12,18,12)
D.aED=new A.V(20,8,20,20)
D.Wz=new A.V(8,6,15,8)
D.aKH=new A.N(983222,"MaterialIcons",!1)
D.aMk=new A.ac(B.jE,26,B.a3,null,null,null)
D.aMn=new A.ac(B.Yg,18,null,null,null,null)
D.aMB=new A.ac(B.rC,14,B.a8,null,null,null)
D.aL_=new A.N(983420,"MaterialIcons",!1)
D.aNk=new A.ac(D.aL_,14,B.a8,null,null,null)
D.aJ2=new A.N(62895,"MaterialIcons",!1)
D.aNo=new A.ac(D.aJ2,14,B.a8,null,null,null)
D.aON=new A.ac(B.rt,16,B.a8,null,null,null)
D.aQm=new A.ac(B.iH,20,null,null,null,null)
D.aQA=new A.ac(B.h6,16,null,null,null,null)
D.bNs=w([B.aJ,B.V],x.O)
D.a_B=new A.ak(B.aI,B.aP,B.H,D.bNs,null,null)
D.czv=new A.aM("NGMY OS","14.2.1")
D.cyi=new A.aM("VirtualDroid","13.8.4")
D.cyh=new A.aM("NGMY OS","15.0.0")
D.cz3=new A.aM("VirtualDroid","14.1.2")
D.cyf=new A.aM("NGMY Tab OS","12.9.7")
D.cyd=new A.aM("NGMY OS","13.5.3")
D.cy2=new A.aM("VirtualDroid","15.2.0")
D.cyF=new A.aM("NGMY OS","14.8.1")
D.cz9=new A.aM("NGMY Tab OS","13.2.4")
D.czF=new A.aM("VirtualDroid","12.6.9")
D.cxW=new A.aM("NGMY OS","16.0.1")
D.cxL=new A.aM("VirtualDroid","14.9.0")
D.czm=new A.aM("NGMY Tab OS","14.0.3")
D.cyr=new A.aM("NGMY OS","13.1.8")
D.cxV=new A.aM("VirtualDroid","13.4.5")
D.cyc=new A.aM("NGMY OS","15.3.2")
D.cza=new A.aM("NGMY Tab OS","12.4.1")
D.czp=new A.aM("VirtualDroid","16.1.0")
D.cyE=new A.aM("NGMY OS","14.4.6")
D.czw=new A.aM("VirtualDroid","15.0.8")
D.bMG=w([D.czv,D.cyi,D.cyh,D.cz3,D.cyf,D.cyd,D.cy2,D.cyF,D.cz9,D.czF,D.cxW,D.cxL,D.czm,D.cyr,D.cxV,D.cyc,D.cza,D.czp,D.cyE,D.czw],A.b3("a3<+(o,o)>"))
D.cBL=new A.eJ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cBj=new A.eJ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cBe=new A.eJ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cBn=new A.eJ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cBa=new A.eJ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cBp=new A.eJ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cBN=new A.eJ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cBb=new A.eJ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cBi=new A.eJ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cBr=new A.eJ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cB9=new A.eJ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cBF=new A.eJ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cBC=new A.eJ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cBh=new A.eJ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cBz=new A.eJ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cBy=new A.eJ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cB8=new A.eJ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cBm=new A.eJ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cBw=new A.eJ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cBB=new A.eJ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6d=w([D.cBL,D.cBj,D.cBe,D.cBn,D.cBa,D.cBp,D.cBN,D.cBb,D.cBi,D.cBr,D.cB9,D.cBF,D.cBC,D.cBh,D.cBz,D.cBy,D.cB8,D.cBm,D.cBw,D.cBB],A.b3("a3<+(o,o,a8,a8,o)>"))
D.bVN=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adF=new C.JQ(0,"youtube")
D.adG=new C.JQ(1,"tiktok")
D.NR=new C.JQ(2,"instagram")
D.adH=new C.JQ(3,"facebook")
D.cr5=new C.JQ(4,"other")
D.cFt=new A.aa(3,null,null,null)
D.cGd=new A.ik(4,10,8,0.52,null)
D.cV2=new A.D("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cJz=new A.aY(D.cV2,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.z,null)
D.cMO=new A.R(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUR=new A.D("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d0X=new A.D("Open in YouTube",null,B.iR,null,null,null,null,null,null,null,null,null)
D.d4n=new A.D("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d53=new A.D("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d59=new A.D("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dbN=new C.aM4(null)})();(function staticFields(){$.duN=20
$.awM=null
$.bnI=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"efU","Gd",()=>A.aCD(0))
w($,"efV","OR",()=>A.aCD(null))})()};
(a=>{a["zP/rRIJkCkZYdLZw/X0J6ui5aFc="]=a.current})($__dart_deferred_initializers__);