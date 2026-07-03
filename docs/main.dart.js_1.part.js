((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dNl(d,e){A.a9(d,!1).cQ(A.ep(new C.cWb(e),!0,null,x.H))},
U4(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$U4=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.L0()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a8(new A.aI(n,B.a0,B.V),t)
w=3
return A.b(A.d9(B.D,new C.cWa(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$U4)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dvB(r)
if(q==null){d.F(x.q).f.O(D.buJ)
w=1
break}w=4
return A.b(A.bN(B.fw,null,x.H),$async$U4)
case 4:if(d.e==null){w=1
break}n=B.p.aD(e,1,999)
$.d9q=n
p=C.dvv(n)
n=$.Dk()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.cZT(q)
d.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$U4,v)},
d9t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aP(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aP(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mx(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Gx(d){return C.dvE(d)},
dvE(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Gx=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Gx)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a3(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aF(0,a0,null)
w=x.a.b(r)&&J.cq(r)?10:11
break
case 10:k=J.fW(r,x.f)
k=A.dK(k,new C.baj(),k.$ti.j("L.E"),x.k)
j=A.S(k).j("aa<L.E>")
i=A.E(new A.aa(k,new C.bak(),j),j.j("L.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.d9v(q)
w=12
return A.b(C.Gw(a3,p),$async$Gx)
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
case 9:case 5:o=A.aG(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.v.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.d9t(A.O(n,x.N,x.z))
l=C.d9v(A.a([m],x.e))
w=21
return A.b(C.Gw(a3,l),$async$Gx)
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
case 18:case 14:q=C.dvC()
w=22
return A.b(C.Gw(a3,q),$async$Gx)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Gx,v)},
d9v(d){var w=A.T(d).j("z<1,m>"),v=new A.z(d,new C.bab(),w).eA(0),u=new A.z(d,new C.bac(),w).eA(0),t=new A.z(d,new C.bad(),w).eA(0),s=new A.z(d,new C.bae(),w).eA(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.cZU(null,q,u,t,v,s));++q}return r},
aol(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aol=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Gx(d),$async$aol)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d7(t,new C.baf(),s).eA(0)
p=r.d7(t,new C.bag(),s).eA(0)
o=r.d7(t,new C.bah(),s).eA(0)
n=r.d7(t,new C.bai(),s).eA(0)
m=C.cZU(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Gw(d,t),$async$aol)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aol,v)},
Gw(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Gw=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Gw)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.baa(),x.P)
s=A.E(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$Gw)
case 3:return A.f(null,v)}})
return A.h($async$Gw,v)},
dvC(){var w,v=x.N,u=A.b4(v),t=A.b4(v),s=A.b4(v),r=A.b4(v),q=J.dY(20,x.k)
for(w=0;w<20;++w)q[w]=C.cZU(w,w,t,s,u,r)
return q},
cZU(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.RL[B.p.ap(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.RL[B.p.ap(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.z(p,new C.ba9(),A.T(p).j("z<1,m>")).fh(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.fh(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bB(B.p.jc(i.bx(256),16),2,"0")
s=B.d.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.ap(e,20)
k=D.aPS[w]
j=D.aKF[w]
return new C.mx("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bB(B.p.q(e+1),2,"0"),u,k,C.dvD(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.K(Date.now(),0,!1).a0().W())},
dvD(d,e){var w,v=J.dY(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bB(B.p.jc(d.bx(256),16),2,"0")
return B.d.fh(v)},
cWb:function cWb(d){this.a=d},
cWa:function cWa(d,e){this.a=d
this.b=e},
cW6:function cW6(d){this.a=d},
cW7:function cW7(d){this.a=d},
cW8:function cW8(d){this.a=d},
cW9:function cW9(d,e){this.a=d
this.b=e},
Jt:function Jt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mx:function mx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
baj:function baj(){},
bak:function bak(){},
bab:function bab(){},
bac:function bac(){},
bad:function bad(){},
bae:function bae(){},
baf:function baf(){},
bag:function bag(){},
bah:function bah(){},
bai:function bai(){},
baa:function baa(){},
ba9:function ba9(){},
Gv:function Gv(d,e){this.c=d
this.a=e},
a9s:function a9s(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cpN:function cpN(){},
cpM:function cpM(d,e){this.a=d
this.b=e},
cpK:function cpK(d){this.a=d},
cpL:function cpL(d,e){this.a=d
this.b=e},
cpO:function cpO(d){this.a=d},
cpS:function cpS(d){this.a=d},
cpT:function cpT(d,e){this.a=d
this.b=e},
cpR:function cpR(d,e,f){this.a=d
this.b=e
this.c=f},
cpQ:function cpQ(d,e){this.a=d
this.b=e},
cpP:function cpP(d,e){this.a=d
this.b=e},
cpU:function cpU(d){this.a=d},
RC:function RC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
azV:function azV(d,e){this.c=d
this.a=e},
Gu:function Gu(d,e){this.c=d
this.a=e},
aAS:function aAS(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cpH:function cpH(d){this.a=d},
cpI:function cpI(d){this.a=d},
cpJ:function cpJ(d){this.a=d},
cpG:function cpG(d,e){this.a=d
this.b=e},
cpD:function cpD(d){this.a=d},
cpE:function cpE(d){this.a=d},
cpC:function cpC(d,e){this.a=d
this.b=e},
cpF:function cpF(d){this.a=d},
cpB:function cpB(d){this.a=d},
aHm:function aHm(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aHn:function aHn(d,e,f){this.c=d
this.d=e
this.a=f},
aAY:function aAY(d,e){this.c=d
this.a=e},
aHl:function aHl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cCv:function cCv(d){this.a=d},
cCw:function cCw(d){this.a=d},
aC3:function aC3(d){this.a=d},
awo:function awo(d,e){this.c=d
this.a=e},
dvB(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dvA(v)
if(u!=null)return new C.ou(w,C.cZS(u,!1),D.YI,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dvz(v)
if(t!=null)return new C.ou(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.YJ,"TikTok",q)
s=C.dvy(w,v)
if(s!=null)return s
r=C.dvx(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.ou(w,w,D.bfP,"Video",q)
return q},
dvy(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ou(d,"https://www.instagram.com/reel/"+w+u,D.Fg,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ou(d,"https://www.instagram.com/p/"+w+u,D.Fg,t,null)}return null},
dvx(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.ou(d,"https://www.facebook.com/plugins/video.php?href="+A.eu(2,d,B.aI,!1)+"&show_text=false&width=734",D.YK,"Facebook",null)},
dvA(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dvz(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
Gy:function Gy(d,e){this.a=d
this.b=e},
ou:function ou(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0A:function a0A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAT:function aAT(d,e){var _=this
_.d=$
_.cW$=d
_.aZ$=e
_.c=_.a=null},
aC7:function aC7(d,e){this.c=d
this.a=e},
csm:function csm(d){this.a=d},
csn:function csn(d){this.a=d},
C9:function C9(d,e){this.c=d
this.a=e},
adY:function adY(){},
d9u(d,e,f,g,h,i){return new C.a0B(i,f,h,e,g,d)},
dM6(d){var w=window
w.toString
A.fT(w,"message",new C.cSC(d),!1,x._)},
a0B:function a0B(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9t:function a9t(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cpV:function cpV(d){this.a=d},
cq2:function cq2(d){this.a=d},
cq0:function cq0(d){this.a=d},
cpZ:function cpZ(d){this.a=d},
cq_:function cq_(d){this.a=d},
cpX:function cpX(d){this.a=d},
cq1:function cq1(d){this.a=d},
cpY:function cpY(d){this.a=d},
cpW:function cpW(d){this.a=d},
cSC:function cSC(d){this.a=d},
d9o(){var w,v,u
try{v=A.xH()
w=v.gpI(v)
if(J.a1(w)!==0&&!J.t(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
cZS(d,e){var w=C.d9o(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eu(2,w,B.aI,!1))
v.push("widget_referrer="+A.eu(2,w,B.aI,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
cZR(d){var w=A.ap(y.c,!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
d9p(d){var w=A.bl(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bl(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dvu(d,e,f){var w,v,u=C.cZR(d)
if(u!=null){if(f){w=C.d9o()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.d9p(C.cZS(u,e))}return C.d9p(d)},
dvv(d){if(d<=4)return 0
return B.p.aY(d-1,4)*4},
dvw(d){var w
if($.L0().a==null)return!1
w=$.Dk().a
return d>=w&&d<w+4},
d9s(){var w=$.aok
if(w!=null)w.a9(0)
$.aok=null
$.Dk().sv(0,0)},
d9r(){var w,v,u,t=$.L0()
if(t.a==null)return
w=$.aok
if(w!=null)w.a9(0)
v=$.d9q
if(v<=4){t=t.a
t.toString
C.cZT(t)
return}w=$.Dk()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.cZT(t)},
cZT(d){var w=$.aok
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
default:w=null}$.aok=A.dk(A.d1(0,0,0,0,0,w),C.dMh())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Jt.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.N.l(0.25),B.n,1),r=A.a4(this.d,B.N,w,w,14)
return A.u(w,A.G(A.a([r,B.eN,A.j(this.c,w,w,w,w,A.l(w,w,v?B.U:B.dg,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.v(u,w,s,t,w,w,B.k),w,w,w,B.em,w,w,w)}}
C.mx.prototype={
ae(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Gv.prototype={
U(){return new C.a9s(A.a([],x.e))},
gfm(){return this.c}}
C.a9s.prototype={
Z(){var w=this
w.a3()
$.Dk().ai(0,w.gaqV())
C.dM6(w.gbc2())
w.UC()},
bbv(){if(this.c!=null)this.p(new C.cpN())},
bc3(){C.d9r()},
n(){$.Dk().V(0,this.gaqV())
C.d9s()
$.L0().sv(0,null)
this.a2()},
UC(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UC=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Gx(t.a.c),$async$UC)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cpM(t,s))
$.ba8=J.a1(s)
case 1:return A.f(u,v)}})
return A.h($async$UC,v)},
QT(){var w=0,v=A.i(x.H),u,t=this,s
var $async$QT=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cpK(t))
w=3
return A.b(C.aol(t.a.c),$async$QT)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cpL(t,s))
$.ba8=J.a1(t.d)
t.c.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$QT,v)},
bdW(d){var w=this.c
w.toString
A.a9(w,!1).cQ(A.ep(new C.cpO(d),!1,null,x.H))},
bet(){var w=this.c
w.toString
return C.U4(w,J.a1(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dH:B.d_,s=A.aQ(v,v,v,v,B.DA,v,v,v,new C.cpS(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a1(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.AG(A.G(A.a([A.I(new A.J(B.ic,A.j(r,1,B.ad,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aU(!1,B.M,!0,v,A.b_(!1,v,!0,new A.J(B.aF,A.a4(B.eZ,B.N,v,v,28),v),B.bP,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbes(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a2)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cF(!0,A.B(A.a([new A.J(D.MK,r,v),A.I(w.e?B.kI:new A.i7($.L0(),new C.cpT(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.cn(v,t,s,v,!1,!1,A.ajh(B.N,B.zC,B.l5,D.bIW,w.e?v:new C.cpU(w)),v)}}
C.RC.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.n,1),q=A.a([new A.ag(0,B.w,B.N.l(0.18),B.cl,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a0A(n,!0,!C.dvw(w),"Fold "+(B.p.aY(w,4)+1)+"/"+B.p.aY(v.e+4-1,4),u)
n=w}else n=A.u(u,A.B(A.a([A.a4(B.hf,B.kP,u,u,22),B.ak,A.j("YouTube",u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.uJ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aU(!1,B.M,!0,u,A.b_(!1,t,!0,A.B(A.a([A.I(A.u(u,A.cR(p,A.hG(A.B(A.a([new C.azV(o,u),A.I(n,1),A.u(u,A.G(A.a([A.a4(B.ro,B.N.l(0.85),u,u,9),D.br2,A.j("Tap",u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.a7,u,u,u,u,u,D.aku,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,u,u,new A.v(u,u,r,s,q,D.QH,B.k),u,u,u,B.eG,u,u,u),1),B.ak,A.j(o.b,1,B.ad,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,1,B.ad,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,1,B.ad,u,u,A.l(u,u,B.N.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a2)}}
C.azV.prototype={
C(d){var w=null
return A.u(w,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),w,B.ad,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a4(B.ow,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a7,w,w,w,w,w,B.MA,w,w,w)}}
C.Gu.prototype={
U(){return new C.aAS()}}
C.aAS.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dH:B.d_,t=A.aQ(w,w,w,w,B.DA,w,w,w,new C.cpH(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cn(w,u,A.cF(!0,A.B(A.a([new A.J(D.MK,A.G(A.a([t,A.I(new A.AG(A.G(A.a([A.I(new A.J(B.ic,A.j(s.b+" \xb7 "+s.c,1,B.ad,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.b_(!1,w,!0,new A.J(B.aF,A.a4(B.eZ,B.N,w,w,28),w),B.bP,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cpI(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a2)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.i7($.L0(),new C.cpJ(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aHm.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.N.l(0.35),B.eo,28),new A.ag(0,B.w,B.q.l(0.45),B.cw,18)],x.V),o=A.U(B.c.l(0.12),B.n,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.d9u(new A.dA(v+"_full_"+u,x.W),!1,u,!1,w.gaFr(),v+"_full")
w=v}else w=new C.aAY(t.r,s)}else w=new C.awo(m,s)
else w=D.bW1
return A.u(s,A.cR(n,A.hG(A.B(A.a([new C.aHn(m,l,s),A.I(w,1),new C.aHl(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,s,s,new A.v(s,s,o,q,p,D.QH,B.k),s,r*2.05,s,B.bf,s,s,r)}}
C.aHn.prototype={
C(d){var w,v,u,t,s=null,r=new A.K(Date.now(),0,!1),q=A.dL(r)
r=A.hp(r)
w=new A.dd(q,r)
v=w.gG8()===0?12:w.gG8()
r=B.a.bB(B.p.q(r),2,"0")
q=(q<12?B.eC:B.h8)===B.eC?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,B.lp,s,s,s),B.b7,A.j(u.b,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bb,D.auB,B.dC,D.atQ,B.dC,D.auF],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ak,A.G(A.a([A.a4(B.Du,B.N.l(0.9),s,s,12),B.dC,A.I(A.j(u.c,s,B.ad,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.B(q,B.i,B.e,B.f,0,B.l),B.h,B.a7,s,s,s,s,s,D.alc,s,s,s)}}
C.aAY.prototype={
C(d){var w=null
return A.u(w,A.aS(A.B(A.a([A.a4(B.wh,B.c.l(0.35),w,w,40),B.E,A.j("No video yet",w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.j("Tap search above to paste a link",w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.er(D.axW,D.bGS,this.c,A.em(w,w,w,w,w,w,w,w,w,B.N,w,w,w,w,w,new A.aM(B.N.l(0.5),1,B.n,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uJ,w,w,w,w,w,w,w,w,1/0)}}
C.aHl.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aqO(B.Pd,"YouTube",s===0,r,new C.cCv(u))
s=u.aqO(B.k4,"Device",s===1,r,new C.cCw(u))
w=r?"Power off":"Power on"
v=r?D.Pe:D.arR
return A.u(t,A.G(A.a([q,B.X,s,B.b7,A.aQ(t,t,t,t,A.a4(v,r?B.aX:B.dA,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cQ)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a7,t,t,t,t,t,D.akZ,t,t,t)},
aqO(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aW
else w=f?B.N:B.a8
v=f&&g?B.N.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.I(A.aU(!1,B.M,!0,u,A.b_(!1,A.n(10),!0,new A.J(B.l_,A.B(A.a([A.a4(d,w,s,s,18),A.j(e,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a2),1)}}
C.aC3.prototype={
C(d){return D.abF}}
C.awo.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,B.iJ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qm("Serial",u.c),q=w.qm("Model",u.d),p=w.qm("Device ID",u.e),o=w.qm("IMEI",u.r),n=w.qm("MAC",u.f),m=w.qm("OS",u.w+" "+u.x),l=w.qm("Location",u.y+", "+u.z),k=w.qm("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qm("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.ak,s,B.Q,r,q,p,o,n,m,l,k,j,w.qm("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aF,v,v,B.Y,!1)},
qm(d,e){var w=null
return new A.J(B.bY,A.B(A.a([A.j(d.toUpperCase(),w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c7,A.j(e,w,w,w,w,D.bxN,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Gy.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ou.prototype={
gaFr(){var w=this.c
return w===D.YI||w===D.YJ||w===D.Fg||w===D.YK}}
C.a0A.prototype={
U(){return new C.aAT(null,null)}}
C.aAT.prototype={
Z(){this.a3()
var w=A.bH(null,B.qH,null,1,null,this)
w.mh(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aOQ()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.eo(t,new A.v(t,t,t,t,t,new A.ar(B.dF,B.ch,B.z,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bM),q=x.Y,p=u.d
p===$&&A.c()
p=A.cA(B.hA,p,t)
w=B.c.l(0.92)
q=A.aS(new A.dC(new A.ba(p,new A.bs(0.72,1,q),q.j("ba<br.T>")),!1,A.a4(B.hf,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kP
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aC7(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.v(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aY(B.aa,t,B.b3,B.m,s,t)}}
C.aC7.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.km(u,new C.csm(this),B.bt,!0,w,w,new C.csn(this),w)
return new C.C9(v,w)}}
C.C9.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.qp,B.Jv],x.O),B.hf)
break
case 1:w=new A.aH(A.a([B.uJ,D.afe],x.O),B.j9)
break
case 2:w=new A.aH(A.a([D.agQ,D.aeM],x.O),B.wn)
break
case 3:w=new A.aH(A.a([B.W,B.dn],x.O),B.wq)
break
case 4:w=new A.aH(A.a([B.a7,B.ai],x.O),B.ms)
break
default:w=u}v=w.a
return A.u(u,A.aS(A.a4(w.b,B.N.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.v(u,u,u,u,u,new A.ar(B.al,B.au,B.z,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.adY.prototype={
n(){var w=this,v=w.aZ$
if(v!=null)v.V(0,w.gdN())
w.aZ$=null
w.a2()},
bq(){this.bP()
this.bJ()
this.dO()}}
C.a0B.prototype={
U(){return new C.a9t()}}
C.a9t.prototype={
bu5(d,e){var w=C.cZR(d)
if(w!=null)return C.cZS(w,e)
return d},
a2M(d,e){var w,v=this,u=C.cZR(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bu5(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dvu(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bs_(){var w,v=this
if(v.w)return
v.p(new C.cpV(v))
w=v.e
if(w!=null)v.a2M(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.L1()
$.pa().ux(w,new C.cq2(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cpW(v))
w=v.e
w.toString
v.a2M(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a4(B.Pq,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.y,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hG(A.aS(new A.J(new A.V(12,12,12,12),A.B(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.ajU(n,B.ta,w)],v)
if(o.f)w.push(A.hG(A.aS(new A.an(28,28,D.ac8,n),n,n,n),B.c5,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aW,B.n,1)
q=A.a4(B.Ps,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f7(0,A.aU(!1,B.M,!0,n,A.b_(!1,n,!0,A.aS(A.u(n,A.G(A.a([q,B.X,A.j("Tap for sound",n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.v(t,n,r,s,n,n,B.k),n,n,n,D.Ma,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbrZ(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a2)))}return new A.aY(B.aa,n,B.b3,B.m,w,n)}}
var z=a.updateTypes(["m(mx)","~()","Gv(Q)","mx(W<@,@>)","a0(mx)","W<m,@>(mx)","ay<~>()","Gu(Q)","i7<R>(Q,ou?,p?)","RC(Q,R)","tS(Q,ou?,p?)","C9(Q,ak,dm?)"])
C.cWb.prototype={
$1(d){return new C.Gv(this.a,null)},
$S:z+2}
C.cWa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.ax(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cq,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.N.l(0.22),B.eo,32)],x.V),g=A.U(m?B.bp:B.N.l(0.18),B.n,1),f=A.n(28),e=B.N.l(m?0.35:0.14)
j=A.a([e,B.T.l(m?0.18:0.08)],j)
e=A.u(n,D.atv,B.h,n,n,new A.v(B.N.l(0.18),n,A.U(B.N.l(0.45),B.n,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.B(A.a([w,B.ak,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,A.l(n,n,m?B.U:B.aH,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.fl,w,A.aQ(n,n,n,n,A.a4(B.cF,m?B.a8:B.c5,n,n,n),n,n,n,new C.cW6(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.v(n,n,n,n,n,new A.ar(B.a1,B.a4,B.z,j,n,n),B.k),n,n,n,B.Mk,n,n,n)
e=A.ek(B.bO,A.a([new C.Jt("YouTube",B.Dt,m,n),new C.Jt("TikTok",B.j9,m,n),new C.Jt("Instagram",B.wn,m,n),new C.Jt("Facebook",B.wq,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bC:B.fs,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d_
r=A.a4(B.k5,B.N.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bp:B.b1
u=A.B(A.a([e,B.ar,A.au(n,B.F,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bg(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aM(o,1,B.n,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Il),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.I,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.B,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.G,n,B.L,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.j0(D.atz,D.bMD,new C.cW7(d),A.k1(n,n,n,n,n,n,n,n,n,n,n,m?B.aC:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.eo(A.cR(f,A.B(A.a([j,new A.J(D.amd,u,n),new A.J(D.aml,A.G(A.a([e,B.b7,A.bQ(!1,A.j("Cancel",n,n,n,n,A.l(n,n,m?B.U:B.Z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cW8(d),n,n),B.X,A.dI(D.axG,D.bMY,new C.cW9(d,w),A.bA(B.N,n,n,n,B.c,n,D.Ma,n,new A.bG(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.P,0,B.l),B.av),new A.v(n,n,g,k,h,new A.ar(B.al,B.au,B.z,i,n,n),B.k),B.bM),n)},
$S:62}
C.cW6.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cW7.prototype={
$0(){C.d9s()
$.L0().sv(0,null)
A.a9(this.a,!1).S(null)},
$S:0}
C.cW8.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cW9.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a9(this.a,!1).S(w)
return null},
$S:0}
C.baj.prototype={
$1(d){return C.d9t(A.O(d,x.N,x.z))},
$S:z+3}
C.bak.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bab.prototype={
$1(d){return d.c},
$S:z+0}
C.bac.prototype={
$1(d){return d.r},
$S:z+0}
C.bad.prototype={
$1(d){return d.f},
$S:z+0}
C.bae.prototype={
$1(d){return d.at},
$S:z+0}
C.baf.prototype={
$1(d){return d.c},
$S:z+0}
C.bag.prototype={
$1(d){return d.r},
$S:z+0}
C.bah.prototype={
$1(d){return d.f},
$S:z+0}
C.bai.prototype={
$1(d){return d.at},
$S:z+0}
C.baa.prototype={
$1(d){return d.ae()},
$S:z+5}
C.ba9.prototype={
$1(d){return B.a.bB(B.p.jc(d,16),2,"0").toUpperCase()},
$S:72}
C.cpN.prototype={
$0(){},
$S:0}
C.cpM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cpK.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cpL.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cpO.prototype={
$1(d){return new C.Gu(this.a,null)},
$S:z+7}
C.cpS.prototype={
$0(){return A.a9(this.a,!1).eu()},
$S:0}
C.cpT.prototype={
$3(d,e,f){return new A.i7($.Dk(),new C.cpR(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cpR.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.A7(d,k,x.Q)
w=w==null?k:w.gkl()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.N.l(0.12)
s=A.n(12)
r=A.U(B.N.l(0.35),B.n,1)
q=A.a4(B.hf,B.N,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.Dk().a
m=B.j.aD(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.X,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.v(t,k,r,s,k,k,B.k),k,k,B.ct,B.eF,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cR(s,new A.iu(1.7777777777777777,C.d9u(new A.dA("fleet_master_"+r,x.W),!0,r,!0,j.gaFr(),"fleet_master"),k),B.av),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zf(0,B.m,k,B.r,k,k,k,k,!1,k,B.Y,!1,A.a([new A.jZ(new A.J(B.By,A.B(u,B.t,B.e,B.f,0,B.l),k),k),new A.oF(D.akE,A.arR(new A.nC(new C.cpQ(i,j),J.a1(i.d),!1,!0,!0,A.vw(),k),D.brI),k)],w))},
$S:1547}
C.cpQ.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.RC(v,e,J.a1(w.d),new C.cpP(w,v),this.b,null)},
$S:z+9}
C.cpP.prototype={
$0(){return this.a.bdW(this.b)},
$S:0}
C.cpU.prototype={
$0(){this.a.QT()
return null},
$S:0}
C.cpH.prototype={
$0(){return A.a9(this.a,!1).eu()},
$S:0}
C.cpI.prototype={
$0(){C.U4(this.a,$.ba8)
return null},
$S:0}
C.cpJ.prototype={
$3(d,e,f){return A.fE(new C.cpG(this.a,e))},
$S:z+10}
C.cpG.prototype={
$2(d,e){var w,v=null,u=B.j.aD(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aS(A.cr(A.B(A.a([A.j(r,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.ar,new C.aHm(u,s.a.c,s.e,s.d,new C.cpD(s),new C.cpE(s),new C.cpF(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vF,v,v,B.Y),v,v,v)},
$S:1548}
C.cpD.prototype={
$0(){var w=this.a.c
w.toString
C.U4(w,$.ba8)
return null},
$S:0}
C.cpE.prototype={
$1(d){var w=this.a
return w.p(new C.cpC(w,d))},
$S:37}
C.cpC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cpF.prototype={
$0(){var w=this.a
return w.p(new C.cpB(w))},
$S:0}
C.cpB.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cCv.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cCw.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.csm.prototype={
$3(d,e,f){return new C.C9(this.a.c,null)},
$S:z+11}
C.csn.prototype={
$3(d,e,f){if(f==null)return e
return new A.aY(B.aa,null,B.b3,B.m,A.a([new C.C9(this.a.c,null),D.aby],x.p),null)},
$C:"$3",
$R:3,
$S:430}
C.cpV.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cq2.prototype={
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
w.a2M(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fT(v,"load",new C.cq0(w),!1,u)
v=w.e
v.toString
A.fT(v,"error",new C.cq1(w),!1,u)
w=w.e
w.toString
return w},
$S:1549}
C.cq0.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cpZ(w))
A.bN(B.A,new C.cq_(w),x.H)}},
$S:40}
C.cpZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cq_.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cpX(w))},
$S:12}
C.cpX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cq1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cpY(w))},
$S:40}
C.cpY.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cpW.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cSC.prototype={
$1(d){var w,v,u,t,s=new A.BK([],[]).Fq(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.t(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.t(J.r(w,"event"),"onStateChange")&&J.t(v,0)){this.a.$0()
return}if(J.t(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.t(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1550};(function aliases(){var w=C.adY.prototype
w.aOQ=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a9s.prototype,"gaqV","bbv",1)
w(u,"gbc2","bc3",1)
w(u,"gbes","bet",6)
w(C.a9t.prototype,"gbrZ","bs_",1)
v(C,"dMh","d9r",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vP,[C.cWb,C.cWa,C.baj,C.bak,C.bab,C.bac,C.bad,C.bae,C.baf,C.bag,C.bah,C.bai,C.baa,C.ba9,C.cpO,C.cpT,C.cpR,C.cpJ,C.cpE,C.csm,C.csn,C.cq2,C.cq0,C.cq1,C.cSC])
v(A.VC,[C.cW6,C.cW7,C.cW8,C.cW9,C.cpN,C.cpM,C.cpK,C.cpL,C.cpS,C.cpP,C.cpU,C.cpH,C.cpI,C.cpD,C.cpC,C.cpF,C.cpB,C.cCv,C.cCw,C.cpV,C.cpZ,C.cq_,C.cpX,C.cpY,C.cpW])
v(A.aD,[C.Jt,C.RC,C.azV,C.aHm,C.aHn,C.aAY,C.aHl,C.aC3,C.awo,C.aC7,C.C9])
v(A.ak,[C.mx,C.ou])
v(A.ae,[C.Gv,C.Gu,C.a0A,C.a0B])
v(A.af,[C.a9s,C.aAS,C.adY,C.a9t])
v(A.VD,[C.cpQ,C.cpG])
u(C.Gy,A.axf)
u(C.aAT,C.adY)
w(C.adY,A.eb)})()
A.dcK(b.typeUniverse,JSON.parse('{"Gv":{"ae":[],"p":[]},"RC":{"aD":[],"p":[]},"Gu":{"ae":[],"p":[]},"Jt":{"aD":[],"p":[]},"a9s":{"af":["Gv"]},"azV":{"aD":[],"p":[]},"aAS":{"af":["Gu"]},"aHm":{"aD":[],"p":[]},"aHn":{"aD":[],"p":[]},"aAY":{"aD":[],"p":[]},"aHl":{"aD":[],"p":[]},"aC3":{"aD":[],"p":[]},"awo":{"aD":[],"p":[]},"a0A":{"ae":[],"p":[]},"C9":{"aD":[],"p":[]},"aAT":{"af":["a0A"]},"aC7":{"aD":[],"p":[]},"a0B":{"ae":[],"p":[]},"a9t":{"af":["a0B"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("ac<ag>"),O:w("ac<A>"),e:w("ac<mx>"),s:w("ac<m>"),p:w("ac<p>"),t:w("ac<R>"),X:w("ab<mx>"),a:w("ab<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mt"),_:w("A2"),k:w("mx"),N:w("m"),Y:w("bs<a7>"),W:w("dA<m>"),J:w("i7<R>"),j:w("i7<ou?>"),E:w("xP<cy>"),q:w("Sh"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.brr=new A.an(18,18,B.Jb,null)
D.aby=new A.dl(B.O,null,null,D.brr,null)
D.Pe=new A.P(983224,"MaterialIcons",!1)
D.aw8=new A.a6(D.Pe,48,B.aW,null,null,null)
D.bxt=new A.M(!0,B.bC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bHx=new A.y("Powered off",null,D.bxt,null,null,null,null,null,null,null,null)
D.aIY=w([D.aw8,B.y,D.bHx],x.p)
D.ai7=new A.eT(B.Y,B.e,B.P,B.i,null,B.l,null,0,D.aIY,null)
D.abF=new A.dl(B.O,null,null,D.ai7,null)
D.ac8=new A.h6(2,null,null,null,null,B.U,null,null,null,null)
D.aeM=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.afe=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.agQ=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.aku=new A.V(0,3,0,3)
D.akE=new A.V(10,0,10,88)
D.akZ=new A.V(12,6,12,10)
D.alc=new A.V(14,8,14,6)
D.Ma=new A.V(18,12,18,12)
D.amd=new A.V(20,18,20,8)
D.aml=new A.V(20,8,20,20)
D.MK=new A.V(8,6,15,8)
D.arR=new A.P(983222,"MaterialIcons",!1)
D.atv=new A.a6(B.hf,26,B.N,null,null,null)
D.atz=new A.a6(B.Om,18,null,null,null,null)
D.atQ=new A.a6(B.ow,14,B.U,null,null,null)
D.asa=new A.P(983420,"MaterialIcons",!1)
D.auB=new A.a6(D.asa,14,B.U,null,null,null)
D.aqv=new A.P(62895,"MaterialIcons",!1)
D.auF=new A.a6(D.aqv,14,B.U,null,null,null)
D.axG=new A.a6(B.ja,20,null,null,null,null)
D.axW=new A.a6(B.eZ,16,null,null,null,null)
D.aL4=w([B.ai,B.W],x.O)
D.QH=new A.ar(B.al,B.au,B.z,D.aL4,null,null)
D.blo=new A.aH("NGMY OS","14.2.1")
D.bkf=new A.aH("VirtualDroid","13.8.4")
D.bke=new A.aH("NGMY OS","15.0.0")
D.bkY=new A.aH("VirtualDroid","14.1.2")
D.bkc=new A.aH("NGMY Tab OS","12.9.7")
D.bka=new A.aH("NGMY OS","13.5.3")
D.bk_=new A.aH("VirtualDroid","15.2.0")
D.bkB=new A.aH("NGMY OS","14.8.1")
D.bl3=new A.aH("NGMY Tab OS","13.2.4")
D.bly=new A.aH("VirtualDroid","12.6.9")
D.bjW=new A.aH("NGMY OS","16.0.1")
D.bjN=new A.aH("VirtualDroid","14.9.0")
D.blg=new A.aH("NGMY Tab OS","14.0.3")
D.bko=new A.aH("NGMY OS","13.1.8")
D.bjV=new A.aH("VirtualDroid","13.4.5")
D.bk9=new A.aH("NGMY OS","15.3.2")
D.bl4=new A.aH("NGMY Tab OS","12.4.1")
D.bli=new A.aH("VirtualDroid","16.1.0")
D.bkA=new A.aH("NGMY OS","14.4.6")
D.blp=new A.aH("VirtualDroid","15.0.8")
D.aKF=w([D.blo,D.bkf,D.bke,D.bkY,D.bkc,D.bka,D.bk_,D.bkB,D.bl3,D.bly,D.bjW,D.bjN,D.blg,D.bko,D.bjV,D.bk9,D.bl4,D.bli,D.bkA,D.blp],A.bk("ac<+(m,m)>"))
D.bnA=new A.e7(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bn8=new A.e7(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bn3=new A.e7(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bnc=new A.e7(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bn_=new A.e7(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bne=new A.e7(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bnC=new A.e7(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bn0=new A.e7(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bn7=new A.e7(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bng=new A.e7(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bmZ=new A.e7(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bnu=new A.e7(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bnr=new A.e7(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bn6=new A.e7(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bno=new A.e7(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bnn=new A.e7(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bmY=new A.e7(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bnb=new A.e7(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bnl=new A.e7(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bnq=new A.e7(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.RL=w([D.bnA,D.bn8,D.bn3,D.bnc,D.bn_,D.bne,D.bnC,D.bn0,D.bn7,D.bng,D.bmZ,D.bnu,D.bnr,D.bn6,D.bno,D.bnn,D.bmY,D.bnb,D.bnl,D.bnq],A.bk("ac<+(m,m,a7,a7,m)>"))
D.aPS=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.YI=new C.Gy(0,"youtube")
D.YJ=new C.Gy(1,"tiktok")
D.Fg=new C.Gy(2,"instagram")
D.YK=new C.Gy(3,"facebook")
D.bfP=new C.Gy(4,"other")
D.br2=new A.an(3,null,null,null)
D.brI=new A.iZ(4,10,8,0.52,null)
D.bIv=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.buJ=new A.aT(D.bIv,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bxN=new A.M(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bGS=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bIW=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bMD=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bMY=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bW1=new C.aC3(null)})();(function staticFields(){$.d9q=20
$.aok=null
$.ba8=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dQs","Dk",()=>A.Qn(0))
w($,"dQt","L0",()=>A.Qn(null))})()};
(a=>{a["eWPCREWFmZ+FOPf19lFgBqHdQIU="]=a.current})($__dart_deferred_initializers__);