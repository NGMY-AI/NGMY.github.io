((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eL5(d,e){A.a0(d,!1).cn(A.ez(new C.dJV(e),!0,null,x.H))},
a1h(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Rf()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.an(new A.be(n,B.aT,B.aI),t)
w=3
return A.b(A.d4(B.J,new C.dJU(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1h)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.ep_(r)
if(q==null){d.F(x.q).f.P(D.d18)
w=1
break}w=4
return A.b(A.bI(B.i0,null,x.H),$async$a1h)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.e_T=n
p=C.eoU(n)
n=$.Ig()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dOb(q)
d.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1h,v)},
e_W(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.p6(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LM(d){return C.ep2(d)},
ep2(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LM=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aq(),$async$LM)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aK(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aA(0,a0,null)
w=x.a.b(r)&&J.cB(r)?10:11
break
case 10:k=J.eu(r,x.f)
k=A.d9(k,new C.bxr(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.bxs(),j),j.j("I.E"))
q=i
if(J.a2(q)>=20){u=q
w=1
break}p=C.e_Y(q)
w=12
return A.b(C.LL(a3,p),$async$LM)
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
n=B.L.aA(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.e_W(A.S(n,x.N,x.z))
l=C.e_Y(A.a([m],x.e))
w=21
return A.b(C.LL(a3,l),$async$LM)
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
case 18:case 14:q=C.ep0()
w=22
return A.b(C.LL(a3,q),$async$LM)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LM,v)},
e_Y(d){var w=A.W(d).j("H<1,p>"),v=new A.H(d,new C.bxj(),w).eu(0),u=new A.H(d,new C.bxk(),w).eu(0),t=new A.H(d,new C.bxl(),w).eu(0),s=new A.H(d,new C.bxm(),w).eu(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dOc(null,q,u,t,v,s));++q}return r},
aDg(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aDg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LM(d),$async$aDg)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.d5(t,new C.bxn(),s).eu(0)
p=r.d5(t,new C.bxo(),s).eu(0)
o=r.d5(t,new C.bxp(),s).eu(0)
n=r.d5(t,new C.bxq(),s).eu(0)
m=C.dOc(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LL(d,t),$async$aDg)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aDg,v)},
LL(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aq(),$async$LL)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.bxi(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ai("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ag(s,null)),$async$LL)
case 3:return A.h(null,v)}})
return A.i($async$LL,v)},
ep0(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dOc(w,w,t,s,u,r)
return q},
dOc(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lY(),h=d==null,g=D.abR[B.m.a0(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abR[B.m.a0(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bw(256)
n=new A.H(p,new C.bxh(),A.W(p).j("H<1,p>")).fZ(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bw(10)
t=B.f.fZ(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b8(B.m.ha(i.bw(256),16),2,"0")
s=B.f.b9(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a0(e,20)
k=D.c9C[w]
j=D.c_t[w]
return new C.p6("vd_"+1000*Date.now()+"_"+e+"_"+i.bw(99999),"Device "+B.b.b8(B.m.t(e+1),2,"0"),u,k,C.ep1(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a8().a4())},
ep1(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b8(B.m.ha(d.bw(256),16),2,"0")
return B.f.fZ(v)},
dJV:function dJV(d){this.a=d},
dJU:function dJU(d,e){this.a=d
this.b=e},
dJQ:function dJQ(d){this.a=d},
dJR:function dJR(d){this.a=d},
dJS:function dJS(d){this.a=d},
dJT:function dJT(d,e){this.a=d
this.b=e},
Pk:function Pk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
p6:function p6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bxr:function bxr(){},
bxs:function bxs(){},
bxj:function bxj(){},
bxk:function bxk(){},
bxl:function bxl(){},
bxm:function bxm(){},
bxn:function bxn(){},
bxo:function bxo(){},
bxp:function bxp(){},
bxq:function bxq(){},
bxi:function bxi(){},
bxh:function bxh(){},
LK:function LK(d,e){this.c=d
this.a=e},
akc:function akc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d48:function d48(){},
d47:function d47(d,e){this.a=d
this.b=e},
d45:function d45(d){this.a=d},
d46:function d46(d,e){this.a=d
this.b=e},
d49:function d49(d){this.a=d},
d4e:function d4e(d){this.a=d},
d4d:function d4d(d){this.a=d},
d4f:function d4f(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e,f){this.a=d
this.b=e
this.c=f},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4a:function d4a(d,e){this.a=d
this.b=e},
d4g:function d4g(d){this.a=d},
Z9:function Z9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQR:function aQR(d,e){this.c=d
this.a=e},
LJ:function LJ(d,e){this.c=d
this.a=e},
aS7:function aS7(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d42:function d42(d){this.a=d},
d43:function d43(d){this.a=d},
d44:function d44(d){this.a=d},
d41:function d41(d,e){this.a=d
this.b=e},
d3Z:function d3Z(d){this.a=d},
d4_:function d4_(d){this.a=d},
d3Y:function d3Y(d,e){this.a=d
this.b=e},
d40:function d40(d){this.a=d},
d3X:function d3X(d){this.a=d},
aZn:function aZn(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZo:function aZo(d,e,f){this.c=d
this.d=e
this.a=f},
aSe:function aSe(d,e){this.c=d
this.a=e},
aZm:function aZm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dl6:function dl6(d){this.a=d},
dl7:function dl7(d){this.a=d},
aTz:function aTz(d){this.a=d},
aMT:function aMT(d,e){this.c=d
this.a=e},
ep_(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eoZ(v)
if(u!=null)return new C.ro(w,C.dOa(u,!1),D.ajF,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eoY(v)
if(t!=null)return new C.ro(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajG,"TikTok",q)
s=C.eoX(w,v)
if(s!=null)return s
r=C.eoW(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.ro(w,w,D.cI6,"Video",q)
return q},
eoX(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.af("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ro(d,"https://www.instagram.com/reel/"+w+u,D.Rt,t,null)}v=A.af("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ro(d,"https://www.instagram.com/p/"+w+u,D.Rt,t,null)}return null},
eoW(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.ro(d,"https://www.facebook.com/plugins/video.php?href="+A.fH(2,d,B.by,!1)+"&show_text=false&width=734",D.ajH,"Facebook",null)},
eoZ(d){var w,v,u,t=[A.af(y.c,!0,!1,!1,!1),A.af("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.af("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dn(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eoY(d){var w,v=A.af("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dn(d)
if(v!=null)return v.b[1]
w=A.af("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
LN:function LN(d,e){this.a=d
this.b=e},
ro:function ro(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9I:function a9I(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aS8:function aS8(d,e){var _=this
_.d=$
_.ck$=d
_.aC$=e
_.c=_.a=null},
aTE:function aTE(d,e){this.c=d
this.a=e},
d8A:function d8A(d){this.a=d},
d8B:function d8B(d){this.a=d},
H_:function H_(d,e){this.c=d
this.a=e},
apQ:function apQ(){},
e_X(d,e,f,g,h,i){return new C.a9J(i,f,h,e,g,d)},
eJw(d){var w=window
w.toString
A.h7(w,"message",new C.dF9(d),!1,x._)},
a9J:function a9J(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
akd:function akd(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d4h:function d4h(d){this.a=d},
d4q:function d4q(d){this.a=d},
d4n:function d4n(d){this.a=d},
d4m:function d4m(d){this.a=d},
d4o:function d4o(d){this.a=d},
d4l:function d4l(d){this.a=d},
d4p:function d4p(d){this.a=d},
d4k:function d4k(d){this.a=d},
d4j:function d4j(d){this.a=d},
d4i:function d4i(d){this.a=d},
dF9:function dF9(d){this.a=d},
eoS(){var w,v,u
try{v=A.rK()
w=v.gvm(v)
if(J.a2(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dOa(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b9(w,"&")},
bxf(d){var w=A.af(y.c,!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
e_S(d){var w=A.aR(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aR(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eoT(d,e,f){var w,v,u=C.bxf(d)
if(u!=null){if(f){w=C.eoS()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e_S(C.dOa(u,e))}return C.e_S(d)},
eoU(d){if(d<=4)return 0
return B.m.ak(d-1,4)*4},
eoV(d){var w
if($.Rf().a==null)return!1
w=$.Ig().a
return d>=w&&d<w+4},
e_V(){var w=$.aDf
if(w!=null)w.aa(0)
$.aDf=null
$.Ig().sv(0,0)},
e_U(){var w,v,u,t=$.Rf()
if(t.a==null)return
w=$.aDf
if(w!=null)w.aa(0)
v=$.e_T
if(v<=4){t=t.a
t.toString
C.dOb(t)
return}w=$.Ig()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dOb(t)},
dOb(d){var w=$.aDf
if(w!=null)w.aa(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aDf=A.du(A.d8(0,0,0,0,0,w),C.eJP())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pk.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.X(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fD,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.co,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fS,w,w,w)}}
C.p6.prototype={
ac(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LK.prototype={
U(){return new C.akc(A.a([],x.e))},
gel(){return this.c}}
C.akc.prototype={
a_(){var w=this
w.a3()
$.Ig().aB(0,w.gaCu())
C.eJw(w.gbwv())
w.a18()},
bvX(){if(this.c!=null)this.n(new C.d48())},
bww(){C.e_U()},
p(){$.Ig().Z(0,this.gaCu())
C.e_V()
$.Rf().sv(0,null)
this.a5()},
a18(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LM(t.a.c),$async$a18)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d47(t,s))
$.bxg=J.a2(s)
case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
XC(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d45(t))
w=3
return A.b(C.aDg(t.a.c),$async$XC)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d46(t,s))
$.bxg=J.a2(t.d)
t.c.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XC,v)},
byD(d){var w=this.c
w.toString
A.a0(w,!1).cn(A.ez(new C.d49(d),!1,null,x.H))},
bzj(){var w=this.c
w.toString
return C.a1h(w,J.a2(this.d))},
B(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.im:B.bD,s=A.bB(!0,A.u(A.a([new A.B(D.a07,new A.js(new C.d4e(w),v),v),A.E(w.e?B.n7:new A.lS($.Rf(),new C.d4f(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c4(v,t,s,v,!1,!1,A.awF(B.a6,B.JE,B.kP,D.drR,w.e?v:new C.d4g(w)),v)}}
C.Z9.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dE,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9I(n,!0,!C.eoV(w),"Fold "+(B.m.ak(w,4)+1)+"/"+B.m.ak(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.X(B.kL,B.oJ,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b1,B.k,0,B.p),B.j,B.Be,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.u(A.a([A.E(A.q(u,A.bK(p,A.f2(A.u(A.a([new C.aQR(o,u),A.E(n,1),A.q(u,A.F(A.a([A.X(B.y4,B.a6.k(0.85),u,u,9),B.aqc,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b1,B.k,0,u,u),B.j,B.aA,u,u,u,u,u,u,D.aMB,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aB),B.j,u,u,new A.o(u,u,r,s,q,D.a4R,B.o),u,u,u,u,B.fa,u,u,u),1),B.aK,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.C(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQR.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.uC,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aA,w,w,w,w,w,w,B.a_X,w,w,w)}}
C.LJ.prototype={
U(){return new C.aS7()}}
C.aS7.prototype={
B(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.im:B.bD,t=A.aO(w,w,w,w,B.a3Q,w,w,w,new C.d42(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c4(w,u,A.bB(!0,A.u(A.a([new A.B(D.a07,A.F(A.a([t,A.E(new A.Ly(A.F(A.a([A.E(new A.B(B.k2,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.B(B.bp,A.X(B.hL,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d43(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lS($.Rf(),new C.d44(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aZn.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eF,28),new A.a5(0,B.G,B.A.k(0.45),B.d9,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e_X(new A.d_(v+"_full_"+u,x.W),!1,u,!1,w.gaT1(),v+"_full")
w=v}else w=new C.aSe(t.r,s)}else w=new C.aMT(m,s)
else w=D.dzK
return A.q(s,A.bK(n,A.f2(A.u(A.a([new C.aZo(m,l,s),A.E(w,1),new C.aZm(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aB),B.j,s,s,new A.o(s,s,o,q,p,D.a4R,B.o),s,r*2.05,s,s,B.bN,s,s,r)}}
C.aZo.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glR()
r=r.gFy()
w=new A.dO(q,r)
v=w.gLp()===0?12:w.gLp()
r=B.b.b8(B.m.t(r),2,"0")
q=(q<12?B.hF:B.jX)===B.hF?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.og,s,s,s),B.ba,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bI,D.aYC,B.dc,D.aXJ,B.dc,D.aYH],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aK,A.F(A.a([A.X(B.y2,B.a6.k(0.9),s,s,12),B.dc,A.E(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aA,s,s,s,s,s,s,D.aNI,s,s,s)}}
C.aSe.prototype={
B(d){var w=null
return A.q(w,A.aC(A.u(A.a([A.X(B.Dc,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eN(D.b1s,D.ddW,this.c,A.dp(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aD(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.Be,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZm.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCg(B.Dz,"YouTube",s===0,r,new C.dl6(u))
s=u.aCg(B.jx,"Device",s===1,r,new C.dl7(u))
w=r?"Power off":"Power on"
v=r?D.a2Q:D.aVI
return A.q(t,A.F(A.a([q,B.ai,s,B.ba,A.aO(t,t,t,t,A.X(v,r?B.bM:B.fp,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cV)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aA,t,t,t,t,t,t,D.aNb,t,t,t)},
aCg(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b9
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.B(B.mn,A.u(A.a([A.X(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aTz.prototype={
B(d){return D.aAN}}
C.aMT.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iH,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ui("Serial",u.c),q=w.ui("Model",u.d),p=w.ui("Device ID",u.e),o=w.ui("IMEI",u.r),n=w.ui("MAC",u.f),m=w.ui("OS",u.w+" "+u.x),l=w.ui("Location",u.y+", "+u.z),k=w.ui("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ui("Timezone",u.at)
u=u.ax
return A.e9(A.a([t,B.aK,s,B.ae,r,q,p,o,n,m,l,k,j,w.ui("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bp,v,v,B.ak,!1)},
ui(d,e){var w=null
return new A.B(B.dk,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d4x,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LN.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ro.prototype={
gaT1(){var w=this.c
return w===D.ajF||w===D.ajG||w===D.Rt||w===D.ajH}}
C.a9I.prototype={
U(){return new C.aS8(null,null)}}
C.aS8.prototype={
a_(){this.a3()
var w=A.bd(null,B.tJ,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2y()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bL,B.bP,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bo),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cE(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.X(B.kL,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oJ
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aTE(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.bb,B.t,s,t)}}
C.aTE.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kH(u,B.I,new C.d8A(this),B.c7,B.c2,!0,w,w,new C.d8B(this),w)
return new C.H_(v,w)}}
C.H_.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.ty,B.WR],x.O),B.kL)
break
case 1:w=new A.aI(A.a([B.Be,D.aGO],x.O),B.mv)
break
case 2:w=new A.aI(A.a([D.aIE,D.aG6],x.O),B.Di)
break
case 3:w=new A.aI(A.a([B.U,B.dC],x.O),B.Dp)
break
case 4:w=new A.aI(A.a([B.aA,B.aO],x.O),B.qV)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.X(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apQ.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcN())
w.aC$=null
w.a5()},
be(){this.bq()
this.bp()
this.cO()}}
C.a9J.prototype={
U(){return new C.akd()}}
C.akd.prototype={
abp(d,e){var w,v=C.bxf(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dOa(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eoT(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bQv(){var w,v=this
if(v.w)return
v.n(new C.d4h(v))
w=v.e
if(w!=null)v.abp(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.Dg()
$.pH().tE(w,new C.d4q(u),!0)}catch(v){u.r=!0
u.f=!1}},
b7(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d4j(v))
w=v.e
w.toString
v.abp(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.a3a,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f2(A.aC(new A.B(new A.O(12,12,12,12),A.u(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.T_(n,B.rp,w)],v)
if(o.f)w.push(A.f2(A.aC(new A.aa(28,28,D.aCc,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b9,B.r,1)
q=A.X(B.DL,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dN(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LV,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbQu(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bxf(o.a.d)
if(v!=null)w.push(A.av(8,A.jj(D.b_g,D.dmB,new C.d4i(o),A.hs(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fS,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.bb,B.t,w,n)}}
var z=a.updateTypes(["p(p6)","~()","LK(N)","p6(a_<@,@>)","Z(p6)","a_<p,@>(p6)","aE<~>()","LJ(N)","lS<L>(N,ro?,r?)","Z9(N,L)","vk(N,ro?,r?)","H_(N,as,dR?)"])
C.dJV.prototype={
$1(d){return new C.LK(this.a,null)},
$S:z+2}
C.dJU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eq,B.U],j):A.a([B.c,B.az],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eF,32)],x.V),g=A.J(m?B.ce:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aXs,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.u(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eG,w,A.aO(n,n,n,n,A.X(B.cJ,m?B.at:B.d_,n,n,n),n,n,n,new C.dJQ(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.M2,n,n,n)
e=A.ec(B.cR,A.a([new C.Pk("YouTube",B.O9,m,n),new C.Pk("TikTok",B.mv,m,n),new C.Pk("Instagram",B.Di,m,n),new C.Pk("Facebook",B.Dp,m,n)],v),B.cz,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ca:B.hZ,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.X(B.fW,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aL
u=A.u(A.a([e,B.aS,A.aN(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bm(n,new A.b2(4,q,B.V),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aD(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vz),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.al,n,B.i,B.k,0,B.p)
e=A.jj(D.aXw,D.dqS,new C.dJR(d),A.hs(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.B(new A.O(12,0,12,12+l.f.d),A.cv(A.bK(f,A.u(A.a([j,new A.B(B.a_C,u,n),new A.B(D.aPf,A.F(A.a([e,B.ba,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dJS(d),n,n),B.ai,A.dH(D.b18,D.drI,new C.dJT(d,w),A.bp(B.a6,n,n,n,B.c,n,B.LV,n,new A.bo(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.al,n,B.i,B.Z,0,B.p),B.aB),new A.o(n,n,g,k,h,new A.a7(B.au,B.aD,B.E,i,n,n),B.o),B.bo),n)},
$S:74}
C.dJQ.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dJR.prototype={
$0(){C.e_V()
$.Rf().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dJS.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dJT.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bxr.prototype={
$1(d){return C.e_W(A.S(d,x.N,x.z))},
$S:z+3}
C.bxs.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bxj.prototype={
$1(d){return d.c},
$S:z+0}
C.bxk.prototype={
$1(d){return d.r},
$S:z+0}
C.bxl.prototype={
$1(d){return d.f},
$S:z+0}
C.bxm.prototype={
$1(d){return d.at},
$S:z+0}
C.bxn.prototype={
$1(d){return d.c},
$S:z+0}
C.bxo.prototype={
$1(d){return d.r},
$S:z+0}
C.bxp.prototype={
$1(d){return d.f},
$S:z+0}
C.bxq.prototype={
$1(d){return d.at},
$S:z+0}
C.bxi.prototype={
$1(d){return d.ac()},
$S:z+5}
C.bxh.prototype={
$1(d){return B.b.b8(B.m.ha(d,16),2,"0").toUpperCase()},
$S:91}
C.d48.prototype={
$0(){},
$S:0}
C.d47.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d45.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d46.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d49.prototype={
$1(d){return new C.LJ(this.a,null)},
$S:z+7}
C.d4e.prototype={
$4(d,e,f,g){var w=null,v=A.aO(w,w,w,w,B.qY,w,w,w,new C.d4d(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a2(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h2(A.F(A.a([new A.p4(D.yz,e,g,36,B.y2,w),B.aN,A.E(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fD(B.f.gI(D.yz).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.B(B.bN,A.X(B.hL,A.ao(B.f.gI(D.yz),B.f.ga6(D.yz),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbzi(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yz,w,g,B.eE,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:382}
C.d4d.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d4f.prototype={
$3(d,e,f){return new A.lS($.Ig(),new C.d4c(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d4c.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EM(d,k,x.Q)
w=w==null?k:w.glS()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.X(B.kL,B.a6,k,k,18)
p=j.d
o=J.a2(l.a.d)
n=$.Ig().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dx,B.f4,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bK(s,new A.hP(1.7777777777777777,C.e_X(new A.d_("fleet_master_"+r,x.W),!0,r,!0,j.gaT1(),"fleet_master"),k),B.aB),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a2(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.v0(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.le(new A.B(B.Cr,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.os(D.aML,A.aHk(new A.oq(new C.d4b(i,j),J.a2(i.d),!1,!0,!0,A.uL(),k),D.cYE),k)],w))},
$S:1858}
C.d4b.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Z9(v,e,J.a2(w.d),new C.d4a(w,v),this.b,null)},
$S:z+9}
C.d4a.prototype={
$0(){return this.a.byD(this.b)},
$S:0}
C.d4g.prototype={
$0(){this.a.XC()
return null},
$S:0}
C.d42.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d43.prototype={
$0(){C.a1h(this.a,$.bxg)
return null},
$S:0}
C.d44.prototype={
$3(d,e,f){return A.eL(new C.d41(this.a,e))},
$S:z+10}
C.d41.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cx(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aS,new C.aZn(u,s.a.c,s.e,s.d,new C.d3Z(s),new C.d4_(s),new C.d40(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oS,v,v,B.ak),v,v,v)},
$S:1859}
C.d3Z.prototype={
$0(){var w=this.a.c
w.toString
C.a1h(w,$.bxg)
return null},
$S:0}
C.d4_.prototype={
$1(d){var w=this.a
return w.n(new C.d3Y(w,d))},
$S:30}
C.d3Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d40.prototype={
$0(){var w=this.a
return w.n(new C.d3X(w))},
$S:0}
C.d3X.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dl6.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dl7.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d8A.prototype={
$3(d,e,f){return new C.H_(this.a.c,null)},
$S:z+11}
C.d8B.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.bb,B.t,A.a([new C.H_(this.a.c,null),D.aB8],x.p),null)},
$C:"$3",
$R:3,
$S:520}
C.d4h.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d4q.prototype={
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
w.abp(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h7(v,"load",new C.d4n(w),!1,u)
v=w.e
v.toString
A.h7(v,"error",new C.d4o(w),!1,u)
A.bI(B.kG,new C.d4p(w),x.H)
w=w.e
w.toString
return w},
$S:642}
C.d4n.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d4m(w))},
$S:31}
C.d4m.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d4o.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d4l(w))},
$S:31}
C.d4l.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d4p.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d4k(w))},
$S:12}
C.d4k.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d4j.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d4i.prototype={
$0(){var w,v=C.bxf(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mZ.LK(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dF9.prototype={
$1(d){var w,v,u,t,s=new A.ud([],[]).uT(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1860};(function aliases(){var w=C.apQ.prototype
w.b2y=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.akc.prototype,"gaCu","bvX",1)
w(u,"gbwv","bww",1)
w(u,"gbzi","bzj",6)
w(C.akd.prototype,"gbQu","bQv",1)
v(C,"eJP","e_U",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zT,[C.dJV,C.dJU,C.bxr,C.bxs,C.bxj,C.bxk,C.bxl,C.bxm,C.bxn,C.bxo,C.bxp,C.bxq,C.bxi,C.bxh,C.d49,C.d4e,C.d4f,C.d4c,C.d44,C.d4_,C.d8A,C.d8B,C.d4q,C.d4n,C.d4o,C.dF9])
v(A.a2K,[C.dJQ,C.dJR,C.dJS,C.dJT,C.d48,C.d47,C.d45,C.d46,C.d4d,C.d4a,C.d4g,C.d42,C.d43,C.d3Z,C.d3Y,C.d40,C.d3X,C.dl6,C.dl7,C.d4h,C.d4m,C.d4l,C.d4p,C.d4k,C.d4j,C.d4i])
v(A.ap,[C.Pk,C.Z9,C.aQR,C.aZn,C.aZo,C.aSe,C.aZm,C.aTz,C.aMT,C.aTE,C.H_])
v(A.as,[C.p6,C.ro])
v(A.ad,[C.LK,C.LJ,C.a9I,C.a9J])
v(A.ae,[C.akc,C.aS7,C.apQ,C.akd])
v(A.a2L,[C.d4b,C.d41])
u(C.LN,A.aNO)
u(C.aS8,C.apQ)
w(C.apQ,A.dB)})()
A.e3n(b.typeUniverse,JSON.parse('{"LK":{"ad":[],"r":[]},"Z9":{"ap":[],"r":[]},"LJ":{"ad":[],"r":[]},"Pk":{"ap":[],"r":[]},"akc":{"ae":["LK"]},"aQR":{"ap":[],"r":[]},"aS7":{"ae":["LJ"]},"aZn":{"ap":[],"r":[]},"aZo":{"ap":[],"r":[]},"aSe":{"ap":[],"r":[]},"aZm":{"ap":[],"r":[]},"aTz":{"ap":[],"r":[]},"aMT":{"ap":[],"r":[]},"a9I":{"ad":[],"r":[]},"H_":{"ap":[],"r":[]},"aS8":{"ae":["a9I"]},"aTE":{"ap":[],"r":[]},"a9J":{"ad":[],"r":[]},"akd":{"ae":["a9J"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<p6>"),S:w("a9<fD>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ai<p6>"),a:w("ai<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("p0"),_:w("EJ"),k:w("p6"),N:w("p"),Y:w("bi<a4>"),W:w("d_<p>"),J:w("lS<L>"),j:w("lS<ro?>"),E:w("uk<d0>"),q:w("a_6"),z:w("@"),Q:w("as?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2Q=new A.P(983224,"MaterialIcons",!1)
D.b_n=new A.ab(D.a2Q,48,B.b9,null,null,null)
D.dcQ=new A.z("Powered off",null,B.ard,null,null,null,null,null,null,null,null,null)
D.bXl=w([D.b_n,B.N,D.dcQ],x.p)
D.aK2=new A.eK(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bXl,null)
D.aAN=new A.cU(B.I,null,null,D.aK2,null)
D.cYj=new A.aa(18,18,B.Wz,null)
D.aB8=new A.cU(B.I,null,null,D.cYj,null)
D.aCc=new A.fs(2,null,null,null,null,B.a9,null,null,null,null)
D.aG6=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGO=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIE=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMB=new A.O(0,3,0,3)
D.aML=new A.O(10,0,10,88)
D.aNb=new A.O(12,6,12,10)
D.aNI=new A.O(14,8,14,6)
D.aPf=new A.O(20,8,20,20)
D.a07=new A.O(8,6,15,8)
D.aVI=new A.P(983222,"MaterialIcons",!1)
D.aXs=new A.ab(B.kL,26,B.a6,null,null,null)
D.aXw=new A.ab(B.a1R,18,null,null,null,null)
D.aXJ=new A.ab(B.uC,14,B.a9,null,null,null)
D.aW0=new A.P(983420,"MaterialIcons",!1)
D.aYC=new A.ab(D.aW0,14,B.a9,null,null,null)
D.aU1=new A.P(62895,"MaterialIcons",!1)
D.aYH=new A.ab(D.aU1,14,B.a9,null,null,null)
D.b_g=new A.ab(B.us,16,B.a9,null,null,null)
D.b18=new A.ab(B.iu,20,null,null,null,null)
D.b1s=new A.ab(B.hL,16,null,null,null,null)
D.c0m=w([B.aO,B.U],x.O)
D.a4R=new A.a7(B.au,B.aD,B.E,D.c0m,null,null)
D.cRr=new A.aI("NGMY OS","14.2.1")
D.cQ1=new A.aI("VirtualDroid","13.8.4")
D.cQ0=new A.aI("NGMY OS","15.0.0")
D.cQV=new A.aI("VirtualDroid","14.1.2")
D.cPX=new A.aI("NGMY Tab OS","12.9.7")
D.cPV=new A.aI("NGMY OS","13.5.3")
D.cPK=new A.aI("VirtualDroid","15.2.0")
D.cQr=new A.aI("NGMY OS","14.8.1")
D.cR_=new A.aI("NGMY Tab OS","13.2.4")
D.cRE=new A.aI("VirtualDroid","12.6.9")
D.cPE=new A.aI("NGMY OS","16.0.1")
D.cPu=new A.aI("VirtualDroid","14.9.0")
D.cRh=new A.aI("NGMY Tab OS","14.0.3")
D.cQc=new A.aI("NGMY OS","13.1.8")
D.cPC=new A.aI("VirtualDroid","13.4.5")
D.cPU=new A.aI("NGMY OS","15.3.2")
D.cR0=new A.aI("NGMY Tab OS","12.4.1")
D.cRk=new A.aI("VirtualDroid","16.1.0")
D.cQq=new A.aI("NGMY OS","14.4.6")
D.cRs=new A.aI("VirtualDroid","15.0.8")
D.c_t=w([D.cRr,D.cQ1,D.cQ0,D.cQV,D.cPX,D.cPV,D.cPK,D.cQr,D.cR_,D.cRE,D.cPE,D.cPu,D.cRh,D.cQc,D.cPC,D.cPU,D.cR0,D.cRk,D.cQq,D.cRs],A.b3("a9<+(p,p)>"))
D.yz=w([B.a6,B.fK],x.O)
D.cTP=new A.f5(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cTn=new A.f5(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cTi=new A.f5(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cTr=new A.f5(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cTe=new A.f5(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cTt=new A.f5(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cTR=new A.f5(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cTf=new A.f5(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cTm=new A.f5(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cTv=new A.f5(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cTd=new A.f5(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cTJ=new A.f5(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cTG=new A.f5(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cTl=new A.f5(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cTD=new A.f5(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cTC=new A.f5(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cTc=new A.f5(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cTq=new A.f5(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cTA=new A.f5(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cTF=new A.f5(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abR=w([D.cTP,D.cTn,D.cTi,D.cTr,D.cTe,D.cTt,D.cTR,D.cTf,D.cTm,D.cTv,D.cTd,D.cTJ,D.cTG,D.cTl,D.cTD,D.cTC,D.cTc,D.cTq,D.cTA,D.cTF],A.b3("a9<+(p,p,a4,a4,p)>"))
D.c9C=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajF=new C.LN(0,"youtube")
D.ajG=new C.LN(1,"tiktok")
D.Rt=new C.LN(2,"instagram")
D.ajH=new C.LN(3,"facebook")
D.cI6=new C.LN(4,"other")
D.cYE=new A.hk(4,10,8,0.52,null)
D.de8=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d18=new A.aV(D.de8,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d4x=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ddW=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dmB=new A.z("Open in YouTube",null,B.jJ,null,null,null,null,null,null,null,null,null)
D.dqS=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.drI=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.drR=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dzK=new C.aTz(null)})();(function staticFields(){$.e_T=20
$.aDf=null
$.bxg=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eOR","Ig",()=>A.aeb(0))
w($,"eOS","Rf",()=>A.aeb(null))})()};
(a=>{a["1LIx3mLjDi/QTAbC8rVw4pWg/gc="]=a.current})($__dart_deferred_initializers__);