((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eKH(d,e){A.a0(d,!1).cn(A.ey(new C.dJz(e),!0,null,x.H))},
a1f(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a1f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Rf()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ar()
s=new A.an(new A.bd(n,B.aS,B.aI),t)
w=3
return A.b(A.d4(B.J,new C.dJy(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a1f)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eoG(r)
if(q==null){d.F(x.q).f.P(D.d0I)
w=1
break}w=4
return A.b(A.bI(B.hY,null,x.H),$async$a1f)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.e_B=n
p=C.eoA(n)
n=$.Ig()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dNR(q)
d.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1f,v)},
e_E(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.p4(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LL(d){return C.eoJ(d)},
eoJ(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LL=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aq(),$async$LL)
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
k=A.d9(k,new C.bxe(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("ag<I.E>")
i=A.y(new A.ag(k,new C.bxf(),j),j.j("I.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.e_G(q)
w=12
return A.b(C.LK(a3,p),$async$LL)
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
case 19:m=C.e_E(A.S(n,x.N,x.z))
l=C.e_G(A.a([m],x.e))
w=21
return A.b(C.LK(a3,l),$async$LL)
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
case 18:case 14:q=C.eoH()
w=22
return A.b(C.LK(a3,q),$async$LL)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LL,v)},
e_G(d){var w=A.V(d).j("H<1,p>"),v=new A.H(d,new C.bx6(),w).eu(0),u=new A.H(d,new C.bx7(),w).eu(0),t=new A.H(d,new C.bx8(),w).eu(0),s=new A.H(d,new C.bx9(),w).eu(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dNS(null,q,u,t,v,s));++q}return r},
aD8(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aD8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LL(d),$async$aD8)
case 3:t=f
s=x.N
r=J.c8(t)
q=r.d5(t,new C.bxa(),s).eu(0)
p=r.d5(t,new C.bxb(),s).eu(0)
o=r.d5(t,new C.bxc(),s).eu(0)
n=r.d5(t,new C.bxd(),s).eu(0)
m=C.dNS(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LK(d,t),$async$aD8)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aD8,v)},
LK(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aq(),$async$LK)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.bx5(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.ai("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ag(s,null)),$async$LK)
case 3:return A.h(null,v)}})
return A.i($async$LK,v)},
eoH(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cR(20,x.k)
for(w=0;w<20;++w)q[w]=C.dNS(w,w,t,s,u,r)
return q},
dNS(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lU(),h=d==null,g=D.abO[B.m.a1(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abO[B.m.a1(h?e+r:d,20)]
if(a2.q(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bw(256)
n=new A.H(p,new C.bx4(),A.V(p).j("H<1,p>")).fZ(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bw(10)
t=B.f.fZ(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b7(B.m.ha(i.bw(256),16),2,"0")
s=B.f.b9(p,":").toUpperCase()
if(!a1.q(0,u)&&!f.q(0,t)&&!a0.q(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a1(e,20)
k=D.c9l[w]
j=D.c_h[w]
return new C.p4("vd_"+1000*Date.now()+"_"+e+"_"+i.bw(99999),"Device "+B.b.b7(B.m.t(e+1),2,"0"),u,k,C.eoI(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a8().a4())},
eoI(d,e){var w,v=J.cR(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b7(B.m.ha(d.bw(256),16),2,"0")
return B.f.fZ(v)},
dJz:function dJz(d){this.a=d},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJu:function dJu(d){this.a=d},
dJv:function dJv(d){this.a=d},
dJw:function dJw(d){this.a=d},
dJx:function dJx(d,e){this.a=d
this.b=e},
Pj:function Pj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
p4:function p4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bxe:function bxe(){},
bxf:function bxf(){},
bx6:function bx6(){},
bx7:function bx7(){},
bx8:function bx8(){},
bx9:function bx9(){},
bxa:function bxa(){},
bxb:function bxb(){},
bxc:function bxc(){},
bxd:function bxd(){},
bx5:function bx5(){},
bx4:function bx4(){},
LJ:function LJ(d,e){this.c=d
this.a=e},
ak7:function ak7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3Q:function d3Q(){},
d3P:function d3P(d,e){this.a=d
this.b=e},
d3N:function d3N(d){this.a=d},
d3O:function d3O(d,e){this.a=d
this.b=e},
d3R:function d3R(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3X:function d3X(d,e){this.a=d
this.b=e},
d3U:function d3U(d,e,f){this.a=d
this.b=e
this.c=f},
d3T:function d3T(d,e){this.a=d
this.b=e},
d3S:function d3S(d,e){this.a=d
this.b=e},
d3Y:function d3Y(d){this.a=d},
Z9:function Z9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQJ:function aQJ(d,e){this.c=d
this.a=e},
LI:function LI(d,e){this.c=d
this.a=e},
aS_:function aS_(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d3K:function d3K(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3J:function d3J(d,e){this.a=d
this.b=e},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d){this.a=d},
d3F:function d3F(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3E:function d3E(d){this.a=d},
aZe:function aZe(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZf:function aZf(d,e,f){this.c=d
this.d=e
this.a=f},
aS5:function aS5(d,e){this.c=d
this.a=e},
aZd:function aZd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
dkN:function dkN(d){this.a=d},
dkO:function dkO(d){this.a=d},
aTq:function aTq(d){this.a=d},
aML:function aML(d,e){this.c=d
this.a=e},
eoG(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.eoF(v)
if(u!=null)return new C.rn(w,C.dNQ(u,!1),D.ajC,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.eoE(v)
if(t!=null)return new C.rn(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajD,"TikTok",q)
s=C.eoD(w,v)
if(s!=null)return s
r=C.eoC(w,v)
if(r!=null)return r
if(B.b.q(v,"tiktok.com")||B.b.q(v,"instagram.com")||B.b.q(v,"facebook.com")||B.b.q(v,"fb.watch")||B.b.q(v,"youtube.com")||B.b.q(v,"youtu.be"))return new C.rn(w,w,D.cHF,"Video",q)
return q},
eoD(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.af("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rn(d,"https://www.instagram.com/reel/"+w+u,D.Ro,t,null)}v=A.af("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dn(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rn(d,"https://www.instagram.com/p/"+w+u,D.Ro,t,null)}return null},
eoC(d,e){if(!B.b.q(e,"facebook.com")&&!B.b.q(e,"fb.watch")&&!B.b.q(e,"fb.com"))return null
return new C.rn(d,"https://www.facebook.com/plugins/video.php?href="+A.fG(2,d,B.by,!1)+"&show_text=false&width=734",D.ajE,"Facebook",null)},
eoF(d){var w,v,u,t=[A.af(y.c,!0,!1,!1,!1),A.af("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.af("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dn(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
eoE(d){var w,v=A.af("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dn(d)
if(v!=null)return v.b[1]
w=A.af("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
LM:function LM(d,e){this.a=d
this.b=e},
rn:function rn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9E:function a9E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aS0:function aS0(d,e){var _=this
_.d=$
_.ci$=d
_.aC$=e
_.c=_.a=null},
aTv:function aTv(d,e){this.c=d
this.a=e},
d8g:function d8g(d){this.a=d},
d8h:function d8h(d){this.a=d},
H_:function H_(d,e){this.c=d
this.a=e},
apK:function apK(){},
e_F(d,e,f,g,h,i){return new C.a9F(i,f,h,e,g,d)},
eJa(d){var w=window
w.toString
A.h7(w,"message",new C.dEO(d),!1,x._)},
a9F:function a9F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ak8:function ak8(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d3Z:function d3Z(d){this.a=d},
d47:function d47(d){this.a=d},
d44:function d44(d){this.a=d},
d43:function d43(d){this.a=d},
d45:function d45(d){this.a=d},
d42:function d42(d){this.a=d},
d46:function d46(d){this.a=d},
d41:function d41(d){this.a=d},
d40:function d40(d){this.a=d},
d4_:function d4_(d){this.a=d},
dEO:function dEO(d){this.a=d},
eoy(){var w,v,u
try{v=A.rJ()
w=v.gvj(v)
if(J.a3(w)!==0&&!J.w(w,"null")&&!J.cC(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dNQ(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b9(w,"&")},
bx2(d){var w=A.af(y.c,!0,!1,!1,!1).dn(d)
return w==null?null:w.b[1]},
e_A(d){var w=A.aR(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aR(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
eoz(d,e,f){var w,v,u=C.bx2(d)
if(u!=null){if(f){w=C.eoy()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.e_A(C.dNQ(u,e))}return C.e_A(d)},
eoA(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
eoB(d){var w
if($.Rf().a==null)return!1
w=$.Ig().a
return d>=w&&d<w+4},
e_D(){var w=$.aD7
if(w!=null)w.aa(0)
$.aD7=null
$.Ig().sv(0,0)},
e_C(){var w,v,u,t=$.Rf()
if(t.a==null)return
w=$.aD7
if(w!=null)w.aa(0)
v=$.e_B
if(v<=4){t=t.a
t.toString
C.dNR(t)
return}w=$.Ig()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dNR(t)},
dNR(d){var w=$.aD7
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
default:w=null}$.aD7=A.dt(A.d8(0,0,0,0,0,w),C.eJq())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pj.prototype={
B(d){var w=null,v=this.e,u=v?B.aO:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.X(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fD,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cs,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fS,w,w,w)}}
C.p4.prototype={
ab(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LJ.prototype={
U(){return new C.ak7(A.a([],x.e))},
gek(){return this.c}}
C.ak7.prototype={
a_(){var w=this
w.a3()
$.Ig().aB(0,w.gaCp())
C.eJa(w.gbws())
w.a12()},
bvU(){if(this.c!=null)this.n(new C.d3Q())},
bwt(){C.e_C()},
p(){$.Ig().Z(0,this.gaCp())
C.e_D()
$.Rf().sv(0,null)
this.a5()},
a12(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a12=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LL(t.a.c),$async$a12)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3P(t,s))
$.bx3=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$a12,v)},
Xw(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d3N(t))
w=3
return A.b(C.aD8(t.a.c),$async$Xw)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3O(t,s))
$.bx3=J.a3(t.d)
t.c.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xw,v)},
byA(d){var w=this.c
w.toString
A.a0(w,!1).cn(A.ey(new C.d3R(d),!1,null,x.H))},
bzg(){var w=this.c
w.toString
return C.a1f(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.il:B.bD,s=A.bB(!0,A.u(A.a([new A.C(D.a05,new A.jr(new C.d3W(w),v),v),A.E(w.e?B.n5:new A.lO($.Rf(),new C.d3X(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c3(v,t,s,v,!1,!1,A.awx(B.a6,B.Jy,B.kM,D.drm,w.e?v:new C.d3Y(w)),v)}}
C.Z9.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dC,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9E(n,!0,!C.eoB(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.X(B.kI,B.oD,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.B6,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.P,!0,u,A.aG(!1,t,!0,A.u(A.a([A.E(A.q(u,A.bL(p,A.f2(A.u(A.a([new C.aQJ(o,u),A.E(n,1),A.q(u,A.F(A.a([A.X(B.y0,B.a6.k(0.85),u,u,9),B.aqa,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.az,u,u,u,u,u,u,D.aMx,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,u,u,new A.o(u,u,r,s,q,D.a4O,B.o),u,u,u,u,B.fa,u,u,u),1),B.aK,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQJ.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.X(B.uy,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.az,w,w,w,w,w,w,B.a_V,w,w,w)}}
C.LI.prototype={
U(){return new C.aS_()}}
C.aS_.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.il:B.bD,t=A.aO(w,w,w,w,B.a3M,w,w,w,new C.d3K(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c3(w,u,A.bB(!0,A.u(A.a([new A.C(D.a05,A.F(A.a([t,A.E(new A.Lx(A.F(A.a([A.E(new A.C(B.k1,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.C(B.bp,A.X(B.hK,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3L(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lO($.Rf(),new C.d3M(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aZe.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eF,28),new A.a5(0,B.G,B.A.k(0.45),B.d8,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.e_F(new A.d_(v+"_full_"+u,x.W),!1,u,!1,w.gaSY(),v+"_full")
w=v}else w=new C.aS5(t.r,s)}else w=new C.aML(m,s)
else w=D.dzf
return A.q(s,A.bL(n,A.f2(A.u(A.a([new C.aZf(m,l,s),A.E(w,1),new C.aZd(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aC),B.j,s,s,new A.o(s,s,o,q,p,D.a4O,B.o),s,r*2.05,s,s,B.bM,s,s,r)}}
C.aZf.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glP()
r=r.gFu()
w=new A.dO(q,r)
v=w.gLj()===0?12:w.gLj()
r=B.b.b7(B.m.t(r),2,"0")
q=(q<12?B.hE:B.jW)===B.hE?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.oa,s,s,s),B.b9,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bI,D.aYu,B.dc,D.aXC,B.dc,D.aYz],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aK,A.F(A.a([A.X(B.xZ,B.a6.k(0.9),s,s,12),B.dc,A.E(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.az,s,s,s,s,s,s,D.aNE,s,s,s)}}
C.aS5.prototype={
B(d){var w=null
return A.q(w,A.aC(A.u(A.a([A.X(B.D5,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.eQ(D.b1l,D.ddu,this.c,A.dq(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.B6,w,w,w,w,w,w,w,w,w,1/0)}}
C.aZd.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aCb(B.Ds,"YouTube",s===0,r,new C.dkN(u))
s=u.aCb(B.jv,"Device",s===1,r,new C.dkO(u))
w=r?"Power off":"Power on"
v=r?D.a2M:D.aVD
return A.q(t,A.F(A.a([q,B.ai,s,B.b9,A.aO(t,t,t,t,A.X(v,r?B.bL:B.fn,t,t,t),t,t,t,u.f,t,t,t,t,w,B.d4)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.az,t,t,t,t,t,t,D.aN7,t,t,t)},
aCb(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b7
else w=f?B.a6:B.at
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.P,!0,u,A.aG(!1,A.m(10),!0,new A.C(B.ml,A.u(A.a([A.X(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aTq.prototype={
B(d){return D.aAK}}
C.aML.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iG,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.uh("Serial",u.c),q=w.uh("Model",u.d),p=w.uh("Device ID",u.e),o=w.uh("IMEI",u.r),n=w.uh("MAC",u.f),m=w.uh("OS",u.w+" "+u.x),l=w.uh("Location",u.y+", "+u.z),k=w.uh("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.uh("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aK,s,B.ae,r,q,p,o,n,m,l,k,j,w.uh("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bp,v,v,B.ak,!1)},
uh(d,e){var w=null
return new A.C(B.dh,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d45,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LM.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rn.prototype={
gaSY(){var w=this.c
return w===D.ajC||w===D.ajD||w===D.Ro||w===D.ajE}}
C.a9E.prototype={
U(){return new C.aS0(null,null)}}
C.aS0.prototype={
a_(){this.a3()
var w=A.be(null,B.tH,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2u()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cv(t,new A.o(t,t,t,t,t,new A.a7(B.bT,B.bO,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.bo),q=x.Y,p=u.d
p===$&&A.c()
p=A.ce(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cE(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.X(B.kI,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oD
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aTv(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.ba,B.t,s,t)}}
C.aTv.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kF(u,B.I,new C.d8g(this),B.cb,B.c1,!0,w,w,new C.d8h(this),w)
return new C.H_(v,w)}}
C.H_.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tw,B.WN],x.O),B.kI)
break
case 1:w=new A.aI(A.a([B.B6,D.aGK],x.O),B.mt)
break
case 2:w=new A.aI(A.a([D.aIA,D.aG2],x.O),B.Db)
break
case 3:w=new A.aI(A.a([B.U,B.dL],x.O),B.Di)
break
case 4:w=new A.aI(A.a([B.az,B.aO],x.O),B.qT)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.X(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.au,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apK.prototype={
p(){var w=this,v=w.aC$
if(v!=null)v.Z(0,w.gcK())
w.aC$=null
w.a5()},
be(){this.bq()
this.bp()
this.cL()}}
C.a9F.prototype={
U(){return new C.ak8()}}
C.ak8.prototype={
abm(d,e){var w,v=C.bx2(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dNQ(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.q(w,"tiktok.com/player")||B.b.q(w,"instagram.com")||B.b.q(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.eoz(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bQj(){var w,v=this
if(v.w)return
v.n(new C.d3Z(v))
w=v.e
if(w!=null)v.abm(w,v.a.d)},
a_(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.Dg()
$.pF().tC(w,new C.d47(u),!0)}catch(v){u.r=!0
u.f=!1}},
b8(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d40(v))
w=v.e
w.toString
v.abm(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.X(B.a36,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f2(A.aC(new A.C(new A.O(12,12,12,12),A.u(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.T_(n,B.rn,w)],v)
if(o.f)w.push(A.f2(A.aC(new A.aa(28,28,D.aC9,n),n,n,n),B.cZ,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b7,B.r,1)
q=A.X(B.DE,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dN(0,A.az(!1,B.P,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ai,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LR,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbQi(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bx2(o.a.d)
if(v!=null)w.push(A.av(8,A.jh(D.b_7,D.dm8,new C.d4_(o),A.hr(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fS,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.ba,B.t,w,n)}}
var z=a.updateTypes(["p(p4)","~()","LJ(N)","p4(a_<@,@>)","Z(p4)","a_<p,@>(p4)","aD<~>()","LI(N)","lO<L>(N,rn?,r?)","Z9(N,L)","vh(N,rn?,r?)","H_(N,as,dR?)"])
C.dJz.prototype={
$1(d){return new C.LJ(this.a,null)},
$S:z+2}
C.dJy.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.U],j):A.a([B.c,B.aA],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eF,32)],x.V),g=A.J(m?B.ce:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.ax.k(m?0.18:0.08)],j)
e=A.q(n,D.aXl,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.u(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eG,w,A.aO(n,n,n,n,A.X(B.cJ,m?B.at:B.cZ,n,n,n),n,n,n,new C.dJu(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LZ,n,n,n)
e=A.ec(B.cR,A.a([new C.Pj("YouTube",B.O5,m,n),new C.Pj("TikTok",B.mt,m,n),new C.Pj("Instagram",B.Db,m,n),new C.Pj("Facebook",B.Di,m,n)],v),B.cz,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.hW,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bD
r=A.X(B.fW,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ce:B.aL
u=A.u(A.a([e,B.aR,A.aN(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bn(n,new A.b2(4,q,B.V),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vu),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ah,n,n,n,n)],v),B.al,n,B.i,B.k,0,B.p)
e=A.jh(D.aXp,D.dqn,new C.dJv(d),A.hr(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.C(new A.O(12,0,12,12+l.f.d),A.cv(A.bL(f,A.u(A.a([j,new A.C(B.a_A,u,n),new A.C(D.aPb,A.F(A.a([e,B.b9,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dJw(d),n,n),B.ai,A.dK(D.b11,D.drd,new C.dJx(d,w),A.br(B.a6,n,n,n,B.c,n,B.LR,n,new A.bo(A.m(14),B.V),n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.al,n,B.i,B.Z,0,B.p),B.aC),new A.o(n,n,g,k,h,new A.a7(B.au,B.aD,B.E,i,n,n),B.o),B.bo),n)},
$S:74}
C.dJu.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dJv.prototype={
$0(){C.e_D()
$.Rf().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dJw.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dJx.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bxe.prototype={
$1(d){return C.e_E(A.S(d,x.N,x.z))},
$S:z+3}
C.bxf.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bx6.prototype={
$1(d){return d.c},
$S:z+0}
C.bx7.prototype={
$1(d){return d.r},
$S:z+0}
C.bx8.prototype={
$1(d){return d.f},
$S:z+0}
C.bx9.prototype={
$1(d){return d.at},
$S:z+0}
C.bxa.prototype={
$1(d){return d.c},
$S:z+0}
C.bxb.prototype={
$1(d){return d.r},
$S:z+0}
C.bxc.prototype={
$1(d){return d.f},
$S:z+0}
C.bxd.prototype={
$1(d){return d.at},
$S:z+0}
C.bx5.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bx4.prototype={
$1(d){return B.b.b7(B.m.ha(d,16),2,"0").toUpperCase()},
$S:91}
C.d3Q.prototype={
$0(){},
$S:0}
C.d3P.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3N.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d3O.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d3R.prototype={
$1(d){return new C.LI(this.a,null)},
$S:z+7}
C.d3W.prototype={
$4(d,e,f,g){var w=null,v=A.aO(w,w,w,w,B.qW,w,w,w,new C.d3V(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a3(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h2(A.F(A.a([new A.p2(D.yu,e,g,36,B.xZ,w),B.aN,A.E(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fD(B.f.gI(D.yu).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.P,!0,w,A.aG(!1,w,!0,new A.C(B.bM,A.X(B.hK,A.ao(B.f.gI(D.yu),B.f.ga6(D.yu),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbzf(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yu,w,g,B.eD,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:382}
C.d3V.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d3X.prototype={
$3(d,e,f){return new A.lO($.Ig(),new C.d3U(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d3U.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EM(d,k,x.Q)
w=w==null?k:w.glQ()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.X(B.kI,B.a6,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Ig().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ai,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dx,B.f9,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bL(s,new A.hP(1.7777777777777777,C.e_F(new A.d_("fleet_master_"+r,x.W),!0,r,!0,j.gaSY(),"fleet_master"),k),B.aC),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uY(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.lc(new A.C(B.Cj,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.oq(D.aMH,A.aHc(new A.oo(new C.d3T(i,j),J.a3(i.d),!1,!0,!0,A.uI(),k),D.cYc),k)],w))},
$S:1858}
C.d3T.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Z9(v,e,J.a3(w.d),new C.d3S(w,v),this.b,null)},
$S:z+9}
C.d3S.prototype={
$0(){return this.a.byA(this.b)},
$S:0}
C.d3Y.prototype={
$0(){this.a.Xw()
return null},
$S:0}
C.d3K.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d3L.prototype={
$0(){C.a1f(this.a,$.bx3)
return null},
$S:0}
C.d3M.prototype={
$3(d,e,f){return A.eL(new C.d3J(this.a,e))},
$S:z+10}
C.d3J.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cx(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aR,new C.aZe(u,s.a.c,s.e,s.d,new C.d3G(s),new C.d3H(s),new C.d3I(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oM,v,v,B.ak),v,v,v)},
$S:1859}
C.d3G.prototype={
$0(){var w=this.a.c
w.toString
C.a1f(w,$.bx3)
return null},
$S:0}
C.d3H.prototype={
$1(d){var w=this.a
return w.n(new C.d3F(w,d))},
$S:30}
C.d3F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d3I.prototype={
$0(){var w=this.a
return w.n(new C.d3E(w))},
$S:0}
C.d3E.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.dkN.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.dkO.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d8g.prototype={
$3(d,e,f){return new C.H_(this.a.c,null)},
$S:z+11}
C.d8h.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.ba,B.t,A.a([new C.H_(this.a.c,null),D.aB5],x.p),null)},
$C:"$3",
$R:3,
$S:520}
C.d3Z.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d47.prototype={
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
w.abm(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h7(v,"load",new C.d44(w),!1,u)
v=w.e
v.toString
A.h7(v,"error",new C.d45(w),!1,u)
A.bI(B.kB,new C.d46(w),x.H)
w=w.e
w.toString
return w},
$S:642}
C.d44.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d43(w))},
$S:31}
C.d43.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d45.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d42(w))},
$S:31}
C.d42.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d46.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d41(w))},
$S:12}
C.d41.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d40.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d4_.prototype={
$0(){var w,v=C.bx2(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mX.LE(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dEO.prototype={
$1(d){var w,v,u,t,s=new A.w8([],[]).xc(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.q(u,"youtube.com")&&!B.b.q(u,"youtube-nocookie.com"))return
try{w=B.L.aA(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1860};(function aliases(){var w=C.apK.prototype
w.b2u=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ak7.prototype,"gaCp","bvU",1)
w(u,"gbws","bwt",1)
w(u,"gbzf","bzg",6)
w(C.ak8.prototype,"gbQi","bQj",1)
v(C,"eJq","e_C",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zT,[C.dJz,C.dJy,C.bxe,C.bxf,C.bx6,C.bx7,C.bx8,C.bx9,C.bxa,C.bxb,C.bxc,C.bxd,C.bx5,C.bx4,C.d3R,C.d3W,C.d3X,C.d3U,C.d3M,C.d3H,C.d8g,C.d8h,C.d47,C.d44,C.d45,C.dEO])
v(A.a2G,[C.dJu,C.dJv,C.dJw,C.dJx,C.d3Q,C.d3P,C.d3N,C.d3O,C.d3V,C.d3S,C.d3Y,C.d3K,C.d3L,C.d3G,C.d3F,C.d3I,C.d3E,C.dkN,C.dkO,C.d3Z,C.d43,C.d42,C.d46,C.d41,C.d40,C.d4_])
v(A.ap,[C.Pj,C.Z9,C.aQJ,C.aZe,C.aZf,C.aS5,C.aZd,C.aTq,C.aML,C.aTv,C.H_])
v(A.as,[C.p4,C.rn])
v(A.ad,[C.LJ,C.LI,C.a9E,C.a9F])
v(A.ae,[C.ak7,C.aS_,C.apK,C.ak8])
v(A.a2H,[C.d3T,C.d3J])
u(C.LM,A.aNG)
u(C.aS0,C.apK)
w(C.apK,A.dy)})()
A.e34(b.typeUniverse,JSON.parse('{"LJ":{"ad":[],"r":[]},"Z9":{"ap":[],"r":[]},"LI":{"ad":[],"r":[]},"Pj":{"ap":[],"r":[]},"ak7":{"ae":["LJ"]},"aQJ":{"ap":[],"r":[]},"aS_":{"ae":["LI"]},"aZe":{"ap":[],"r":[]},"aZf":{"ap":[],"r":[]},"aS5":{"ap":[],"r":[]},"aZd":{"ap":[],"r":[]},"aTq":{"ap":[],"r":[]},"aML":{"ap":[],"r":[]},"a9E":{"ad":[],"r":[]},"H_":{"ap":[],"r":[]},"aS0":{"ae":["a9E"]},"aTv":{"ap":[],"r":[]},"a9F":{"ad":[],"r":[]},"ak8":{"ae":["a9F"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b3
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<p4>"),S:w("a9<fD>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ah<p4>"),a:w("ah<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oZ"),_:w("EJ"),k:w("p4"),N:w("p"),Y:w("bi<a4>"),W:w("d_<p>"),J:w("lO<L>"),j:w("lO<rn?>"),E:w("ui<d0>"),q:w("a_6"),z:w("@"),Q:w("as?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2M=new A.P(983224,"MaterialIcons",!1)
D.b_e=new A.ab(D.a2M,48,B.b7,null,null,null)
D.dco=new A.z("Powered off",null,B.arb,null,null,null,null,null,null,null,null,null)
D.bXb=w([D.b_e,B.N,D.dco],x.p)
D.aJZ=new A.eK(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bXb,null)
D.aAK=new A.cU(B.I,null,null,D.aJZ,null)
D.cXS=new A.aa(18,18,B.Wu,null)
D.aB5=new A.cU(B.I,null,null,D.cXS,null)
D.aC9=new A.fs(2,null,null,null,null,B.a9,null,null,null,null)
D.aG2=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGK=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIA=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMx=new A.O(0,3,0,3)
D.aMH=new A.O(10,0,10,88)
D.aN7=new A.O(12,6,12,10)
D.aNE=new A.O(14,8,14,6)
D.aPb=new A.O(20,8,20,20)
D.a05=new A.O(8,6,15,8)
D.aVD=new A.P(983222,"MaterialIcons",!1)
D.aXl=new A.ab(B.kI,26,B.a6,null,null,null)
D.aXp=new A.ab(B.a1P,18,null,null,null,null)
D.aXC=new A.ab(B.uy,14,B.a9,null,null,null)
D.aVV=new A.P(983420,"MaterialIcons",!1)
D.aYu=new A.ab(D.aVV,14,B.a9,null,null,null)
D.aTY=new A.P(62895,"MaterialIcons",!1)
D.aYz=new A.ab(D.aTY,14,B.a9,null,null,null)
D.b_7=new A.ab(B.up,16,B.a9,null,null,null)
D.b11=new A.ab(B.it,20,null,null,null,null)
D.b1l=new A.ab(B.hK,16,null,null,null,null)
D.c0a=w([B.aO,B.U],x.O)
D.a4O=new A.a7(B.au,B.aD,B.E,D.c0a,null,null)
D.cR_=new A.aI("NGMY OS","14.2.1")
D.cPA=new A.aI("VirtualDroid","13.8.4")
D.cPz=new A.aI("NGMY OS","15.0.0")
D.cQt=new A.aI("VirtualDroid","14.1.2")
D.cPv=new A.aI("NGMY Tab OS","12.9.7")
D.cPt=new A.aI("NGMY OS","13.5.3")
D.cPi=new A.aI("VirtualDroid","15.2.0")
D.cQ_=new A.aI("NGMY OS","14.8.1")
D.cQy=new A.aI("NGMY Tab OS","13.2.4")
D.cRc=new A.aI("VirtualDroid","12.6.9")
D.cPc=new A.aI("NGMY OS","16.0.1")
D.cP2=new A.aI("VirtualDroid","14.9.0")
D.cQQ=new A.aI("NGMY Tab OS","14.0.3")
D.cPL=new A.aI("NGMY OS","13.1.8")
D.cPa=new A.aI("VirtualDroid","13.4.5")
D.cPs=new A.aI("NGMY OS","15.3.2")
D.cQz=new A.aI("NGMY Tab OS","12.4.1")
D.cQT=new A.aI("VirtualDroid","16.1.0")
D.cPZ=new A.aI("NGMY OS","14.4.6")
D.cR0=new A.aI("VirtualDroid","15.0.8")
D.c_h=w([D.cR_,D.cPA,D.cPz,D.cQt,D.cPv,D.cPt,D.cPi,D.cQ_,D.cQy,D.cRc,D.cPc,D.cP2,D.cQQ,D.cPL,D.cPa,D.cPs,D.cQz,D.cQT,D.cPZ,D.cR0],A.b3("a9<+(p,p)>"))
D.yu=w([B.a6,B.fK],x.O)
D.cTn=new A.f5(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cSW=new A.f5(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cSR=new A.f5(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cT_=new A.f5(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cSN=new A.f5(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cT1=new A.f5(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cTp=new A.f5(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cSO=new A.f5(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cSV=new A.f5(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cT3=new A.f5(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cSM=new A.f5(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cTh=new A.f5(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cTe=new A.f5(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cSU=new A.f5(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cTb=new A.f5(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cTa=new A.f5(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cSL=new A.f5(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cSZ=new A.f5(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cT8=new A.f5(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cTd=new A.f5(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abO=w([D.cTn,D.cSW,D.cSR,D.cT_,D.cSN,D.cT1,D.cTp,D.cSO,D.cSV,D.cT3,D.cSM,D.cTh,D.cTe,D.cSU,D.cTb,D.cTa,D.cSL,D.cSZ,D.cT8,D.cTd],A.b3("a9<+(p,p,a4,a4,p)>"))
D.c9l=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajC=new C.LM(0,"youtube")
D.ajD=new C.LM(1,"tiktok")
D.Ro=new C.LM(2,"instagram")
D.ajE=new C.LM(3,"facebook")
D.cHF=new C.LM(4,"other")
D.cYc=new A.hk(4,10,8,0.52,null)
D.ddH=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d0I=new A.aV(D.ddH,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.d45=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ddu=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dm8=new A.z("Open in YouTube",null,B.jI,null,null,null,null,null,null,null,null,null)
D.dqn=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.drd=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.drm=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dzf=new C.aTq(null)})();(function staticFields(){$.e_B=20
$.aD7=null
$.bx3=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eOs","Ig",()=>A.ae6(0))
w($,"eOt","Rf",()=>A.ae6(null))})()};
(a=>{a["LR4oJiMdXC4c2Pkm6PWZSwF9c5c="]=a.current})($__dart_deferred_initializers__);