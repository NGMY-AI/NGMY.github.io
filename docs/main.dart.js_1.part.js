((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dNI(d,e){A.a8(d,!1).cN(A.eo(new C.cWs(e),!0,null,x.H))},
U3(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$U3=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.KZ()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a9(new A.aI(n,B.a2,B.V),t)
w=3
return A.b(A.dg(B.D,new C.cWr(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$U3)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dvW(r)
if(q==null){d.F(x.q).f.O(D.bv5)
w=1
break}w=4
return A.b(A.bN(B.fx,null,x.H),$async$U3)
case 4:if(d.e==null){w=1
break}n=B.p.aD(e,1,999)
$.d9L=n
p=C.dvQ(n)
n=$.Dk()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d_a(q)
d.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$U3,v)},
d9O(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aQ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aQ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.mx(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Gx(d){return C.dvZ(d)},
dvZ(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Gx=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Gx)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.v.aF(0,a0,null)
w=x.a.b(r)&&J.cq(r)?10:11
break
case 10:k=J.fW(r,x.f)
k=A.dK(k,new C.bav(),k.$ti.j("M.E"),x.k)
j=A.S(k).j("aa<M.E>")
i=A.E(new A.aa(k,new C.baw(),j),j.j("M.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.d9Q(q)
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
case 19:m=C.d9O(A.O(n,x.N,x.z))
l=C.d9Q(A.a([m],x.e))
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
case 18:case 14:q=C.dvX()
w=22
return A.b(C.Gw(a3,q),$async$Gx)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Gx,v)},
d9Q(d){var w=A.T(d).j("z<1,m>"),v=new A.z(d,new C.ban(),w).eA(0),u=new A.z(d,new C.bao(),w).eA(0),t=new A.z(d,new C.bap(),w).eA(0),s=new A.z(d,new C.baq(),w).eA(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d_b(null,q,u,t,v,s));++q}return r},
aou(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aou=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Gx(d),$async$aou)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d7(t,new C.bar(),s).eA(0)
p=r.d7(t,new C.bas(),s).eA(0)
o=r.d7(t,new C.bat(),s).eA(0)
n=r.d7(t,new C.bau(),s).eA(0)
m=C.d_b(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Gw(d,t),$async$aou)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aou,v)},
Gw(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Gw=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Gw)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.bam(),x.P)
s=A.E(s,s.$ti.j("a3.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$Gw)
case 3:return A.f(null,v)}})
return A.h($async$Gw,v)},
dvX(){var w,v=x.N,u=A.b4(v),t=A.b4(v),s=A.b4(v),r=A.b4(v),q=J.dY(20,x.k)
for(w=0;w<20;++w)q[w]=C.d_b(w,w,t,s,u,r)
return q},
d_b(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jC(),h=d==null,g=D.RS[B.p.ap(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.RS[B.p.ap(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.z(p,new C.bal(),A.T(p).j("z<1,m>")).fi(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.fi(p)
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
k=D.aQc[w]
j=D.aKZ[w]
return new C.mx("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bB(B.p.q(e+1),2,"0"),u,k,C.dvY(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.L(Date.now(),0,!1).a0().W())},
dvY(d,e){var w,v=J.dY(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bB(B.p.jc(d.bx(256),16),2,"0")
return B.d.fi(v)},
cWs:function cWs(d){this.a=d},
cWr:function cWr(d,e){this.a=d
this.b=e},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWp:function cWp(d){this.a=d},
cWq:function cWq(d,e){this.a=d
this.b=e},
Js:function Js(d,e,f,g){var _=this
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
bav:function bav(){},
baw:function baw(){},
ban:function ban(){},
bao:function bao(){},
bap:function bap(){},
baq:function baq(){},
bar:function bar(){},
bas:function bas(){},
bat:function bat(){},
bau:function bau(){},
bam:function bam(){},
bal:function bal(){},
Gv:function Gv(d,e){this.c=d
this.a=e},
a9w:function a9w(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cq1:function cq1(){},
cq0:function cq0(d,e){this.a=d
this.b=e},
cpZ:function cpZ(d){this.a=d},
cq_:function cq_(d,e){this.a=d
this.b=e},
cq2:function cq2(d){this.a=d},
cq6:function cq6(d){this.a=d},
cq7:function cq7(d,e){this.a=d
this.b=e},
cq5:function cq5(d,e,f){this.a=d
this.b=e
this.c=f},
cq4:function cq4(d,e){this.a=d
this.b=e},
cq3:function cq3(d,e){this.a=d
this.b=e},
cq8:function cq8(d){this.a=d},
RB:function RB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aA3:function aA3(d,e){this.c=d
this.a=e},
Gu:function Gu(d,e){this.c=d
this.a=e},
aB0:function aB0(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cpW:function cpW(d){this.a=d},
cpX:function cpX(d){this.a=d},
cpY:function cpY(d){this.a=d},
cpV:function cpV(d,e){this.a=d
this.b=e},
cpS:function cpS(d){this.a=d},
cpT:function cpT(d){this.a=d},
cpR:function cpR(d,e){this.a=d
this.b=e},
cpU:function cpU(d){this.a=d},
cpQ:function cpQ(d){this.a=d},
aHu:function aHu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aHv:function aHv(d,e,f){this.c=d
this.d=e
this.a=f},
aB6:function aB6(d,e){this.c=d
this.a=e},
aHt:function aHt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cCK:function cCK(d){this.a=d},
cCL:function cCL(d){this.a=d},
aCc:function aCc(d){this.a=d},
aww:function aww(d,e){this.c=d
this.a=e},
dvW(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dvV(v)
if(u!=null)return new C.ou(w,C.d_9(u,!1),D.YQ,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dvU(v)
if(t!=null)return new C.ou(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.YR,"TikTok",q)
s=C.dvT(w,v)
if(s!=null)return s
r=C.dvS(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.ou(w,w,D.bga,"Video",q)
return q},
dvT(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ou(d,"https://www.instagram.com/reel/"+w+u,D.Fl,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ou(d,"https://www.instagram.com/p/"+w+u,D.Fl,t,null)}return null},
dvS(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.ou(d,"https://www.facebook.com/plugins/video.php?href="+A.et(2,d,B.aI,!1)+"&show_text=false&width=734",D.YS,"Facebook",null)},
dvV(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dvU(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d0(d)
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
a0z:function a0z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB1:function aB1(d,e){var _=this
_.d=$
_.cW$=d
_.aZ$=e
_.c=_.a=null},
aCg:function aCg(d,e){this.c=d
this.a=e},
csB:function csB(d){this.a=d},
csC:function csC(d){this.a=d},
C9:function C9(d,e){this.c=d
this.a=e},
ae3:function ae3(){},
d9P(d,e,f,g,h,i){return new C.a0A(i,f,h,e,g,d)},
dMs(d){var w=window
w.toString
A.fT(w,"message",new C.cSP(d),!1,x._)},
a0A:function a0A(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9x:function a9x(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cq9:function cq9(d){this.a=d},
cqh:function cqh(d){this.a=d},
cqf:function cqf(d){this.a=d},
cqd:function cqd(d){this.a=d},
cqe:function cqe(d){this.a=d},
cqb:function cqb(d){this.a=d},
cqg:function cqg(d){this.a=d},
cqc:function cqc(d){this.a=d},
cqa:function cqa(d){this.a=d},
cSP:function cSP(d){this.a=d},
d9J(){var w,v,u
try{v=A.xK()
w=v.gpI(v)
if(J.a1(w)!==0&&!J.v(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d_9(d,e){var w=C.d9J(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.et(2,w,B.aI,!1))
v.push("widget_referrer="+A.et(2,w,B.aI,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
d_8(d){var w=A.ap(y.c,!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
d9K(d){var w=A.bl(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bl(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dvP(d,e,f){var w,v,u=C.d_8(d)
if(u!=null){if(f){w=C.d9J()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.d9K(C.d_9(u,e))}return C.d9K(d)},
dvQ(d){if(d<=4)return 0
return B.p.aY(d-1,4)*4},
dvR(d){var w
if($.KZ().a==null)return!1
w=$.Dk().a
return d>=w&&d<w+4},
d9N(){var w=$.aot
if(w!=null)w.a9(0)
$.aot=null
$.Dk().sv(0,0)},
d9M(){var w,v,u,t=$.KZ()
if(t.a==null)return
w=$.aot
if(w!=null)w.a9(0)
v=$.d9L
if(v<=4){t=t.a
t.toString
C.d_a(t)
return}w=$.Dk()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d_a(t)},
d_a(d){var w=$.aot
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
default:w=null}$.aot=A.dk(A.d1(0,0,0,0,0,w),C.dMD())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Js.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.N.l(0.25),B.n,1),r=A.a2(this.d,B.N,w,w,14)
return A.u(w,A.G(A.a([r,B.eO,A.j(this.c,w,w,w,w,A.l(w,w,v?B.U:B.di,w,w,w,w,w,w,w,w,11,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.t(u,w,s,t,w,w,B.k),w,w,w,B.en,w,w,w)}}
C.mx.prototype={
ae(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Gv.prototype={
U(){return new C.a9w(A.a([],x.e))},
gf7(){return this.c}}
C.a9w.prototype={
Z(){var w=this
w.a3()
$.Dk().ai(0,w.gaqQ())
C.dMs(w.gbc1())
w.UD()},
bbu(){if(this.c!=null)this.p(new C.cq1())},
bc2(){C.d9M()},
n(){$.Dk().V(0,this.gaqQ())
C.d9N()
$.KZ().sv(0,null)
this.a2()},
UD(){var w=0,v=A.i(x.H),u,t=this,s
var $async$UD=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Gx(t.a.c),$async$UD)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cq0(t,s))
$.bak=J.a1(s)
case 1:return A.f(u,v)}})
return A.h($async$UD,v)},
QV(){var w=0,v=A.i(x.H),u,t=this,s
var $async$QV=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cpZ(t))
w=3
return A.b(C.aou(t.a.c),$async$QV)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cq_(t,s))
$.bak=J.a1(t.d)
t.c.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$QV,v)},
bdU(d){var w=this.c
w.toString
A.a8(w,!1).cN(A.eo(new C.cq2(d),!1,null,x.H))},
ber(){var w=this.c
w.toString
return C.U3(w,J.a1(this.d))},
C(d){var w=this,v=null,u=A.Y(d).ax.a===B.S,t=u?B.dH:B.d0,s=A.aP(v,v,v,v,B.DF,v,v,v,new C.cq6(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a1(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.AG(A.G(A.a([A.H(new A.J(B.hH,A.j(r,1,B.ae,v,v,A.l(v,v,u?B.c:B.X,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aS(!1,B.L,!0,v,A.aZ(!1,v,!0,new A.J(B.aF,A.a2(B.eZ,B.N,v,v,28),v),B.bP,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbeq(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cB(!0,A.B(A.a([new A.J(D.MR,r,v),A.H(w.e?B.kJ:new A.i8($.KZ(),new C.cq7(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0)
return A.cn(v,t,s,v,!1,!1,A.ajn(B.N,B.zD,B.mx,D.bJq,w.e?v:new C.cq8(w)),v)}}
C.RB.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.n,1),q=A.a([new A.ag(0,B.w,B.N.l(0.18),B.cm,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a0z(n,!0,!C.dvR(w),"Fold "+(B.p.aY(w,4)+1)+"/"+B.p.aY(v.e+4-1,4),u)
n=w}else n=A.u(u,A.B(A.a([A.a2(B.hj,B.kQ,u,u,22),B.an,A.j("YouTube",u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.uI,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aS(!1,B.L,!0,u,A.aZ(!1,t,!0,A.B(A.a([A.H(A.u(u,A.cP(p,A.hG(A.B(A.a([new C.aA3(o,u),A.H(n,1),A.u(u,A.G(A.a([A.a2(B.rm,B.N.l(0.85),u,u,9),D.brp,A.j("Tap",u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.akG,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,u,u,new A.t(u,u,r,s,q,D.QN,B.k),u,u,u,B.eH,u,u,u),1),B.an,A.j(o.b,1,B.ae,u,u,A.l(u,u,A.Y(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.B,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,1,B.ae,u,u,A.l(u,u,A.Y(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,1,B.ae,u,u,A.l(u,u,B.N.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a1)}}
C.aA3.prototype={
C(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gau(this.c.c.split("-")),w,B.ae,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a2(B.ov,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,B.MG,w,w,w)}}
C.Gu.prototype={
U(){return new C.aB0()}}
C.aB0.prototype={
C(d){var w=null,v=A.Y(d).ax.a===B.S,u=v?B.dH:B.d0,t=A.aP(w,w,w,w,B.DF,w,w,w,new C.cpW(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cn(w,u,A.cB(!0,A.B(A.a([new A.J(D.MR,A.G(A.a([t,A.H(new A.AG(A.G(A.a([A.H(new A.J(B.hH,A.j(s.b+" \xb7 "+s.c,1,B.ae,w,w,A.l(w,w,v?B.c:B.X,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aS(!1,B.L,!0,w,A.aZ(!1,w,!0,new A.J(B.aF,A.a2(B.eZ,B.N,w,w,28),w),B.bP,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cpX(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.i8($.KZ(),new C.cpY(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a3,!0,!0),w,!1,!1,w,w)}}
C.aHu.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.N.l(0.35),B.ep,28),new A.ag(0,B.w,B.q.l(0.45),B.cv,18)],x.V),o=A.U(B.c.l(0.12),B.n,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.d9P(new A.dB(v+"_full_"+u,x.W),!1,u,!1,w.gaFm(),v+"_full")
w=v}else w=new C.aB6(t.r,s)}else w=new C.aww(m,s)
else w=D.bWx
return A.u(s,A.cP(n,A.hG(A.B(A.a([new C.aHv(m,l,s),A.H(w,1),new C.aHt(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,s,s,new A.t(s,s,o,q,p,D.QN,B.k),s,r*2.05,s,B.bb,s,s,r)}}
C.aHv.prototype={
C(d){var w,v,u,t,s=null,r=new A.L(Date.now(),0,!1),q=A.dL(r)
r=A.hp(r)
w=new A.dc(q,r)
v=w.gG9()===0?12:w.gG9()
r=B.a.bB(B.p.q(r),2,"0")
q=(q<12?B.eD:B.ha)===B.eD?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,B.lr,s,s,s),B.b6,A.j(u.b,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bd,D.auS,B.dD,D.au6,B.dD,D.auW],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.a2(B.Dy,B.N.l(0.9),s,s,12),B.dD,A.H(A.j(u.c,s,B.ae,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.B(q,B.i,B.e,B.f,0,B.l),B.h,B.a8,s,s,s,s,s,D.alo,s,s,s)}}
C.aB6.prototype={
C(d){var w=null
return A.u(w,A.aU(A.B(A.a([A.a2(B.wh,B.c.l(0.35),w,w,40),B.F,A.j("No video yet",w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.al,A.eA(D.ayb,D.bHl,this.c,A.eq(w,w,w,w,w,w,w,w,w,B.N,w,w,w,w,w,new A.aK(B.N.l(0.5),1,B.n,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uI,w,w,w,w,w,w,w,w,1/0)}}
C.aHt.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aqJ(B.Pj,"YouTube",s===0,r,new C.cCK(u))
s=u.aqJ(B.k8,"Device",s===1,r,new C.cCL(u))
w=r?"Power off":"Power on"
v=r?D.Pk:D.as8
return A.u(t,A.G(A.a([q,B.Y,s,B.b6,A.aP(t,t,t,t,A.a2(v,r?B.aX:B.dB,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cR)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a8,t,t,t,t,t,D.ala,t,t,t)},
aqJ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b0
else w=f?B.N:B.aa
v=f&&g?B.N.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aS(!1,B.L,!0,u,A.aZ(!1,A.n(10),!0,new A.J(B.kZ,A.B(A.a([A.a2(d,w,s,s,18),A.j(e,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.E,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aCc.prototype={
C(d){return D.abP}}
C.aww.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,B.iN,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qm("Serial",u.c),q=w.qm("Model",u.d),p=w.qm("Device ID",u.e),o=w.qm("IMEI",u.r),n=w.qm("MAC",u.f),m=w.qm("OS",u.w+" "+u.x),l=w.qm("Location",u.y+", "+u.z),k=w.qm("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qm("Timezone",u.at)
u=u.ax
return A.e3(A.a([t,B.an,s,B.Q,r,q,p,o,n,m,l,k,j,w.qm("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aF,v,v,B.W,!1)},
qm(d,e){var w=null
return new A.J(B.c5,A.B(A.a([A.j(d.toUpperCase(),w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c7,A.j(e,w,w,w,w,D.byb,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Gy.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ou.prototype={
gaFm(){var w=this.c
return w===D.YQ||w===D.YR||w===D.Fl||w===D.YS}}
C.a0z.prototype={
U(){return new C.aB1(null,null)}}
C.aB1.prototype={
Z(){this.a3()
var w=A.bH(null,B.qF,null,1,null,this)
w.mh(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aOL()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.e1(t,new A.t(t,t,t,t,t,new A.aq(B.dg,B.c9,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bD),q=x.Y,p=u.d
p===$&&A.c()
p=A.cz(B.hD,p,t)
w=B.c.l(0.92)
q=A.aU(new A.dv(new A.b9(p,new A.bs(0.72,1,q),q.j("b9<bq.T>")),!1,A.a2(B.hj,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kQ
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aCg(s,t),r,q,A.b6(t,A.u(t,A.j(v,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.t(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b6(t,A.j(r,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b6(3,A.j(r.d,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.B,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aV(B.a7,t,B.b3,B.m,s,t)}}
C.aCg.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.km(u,new C.csB(this),B.bs,!0,w,w,new C.csC(this),w)
return new C.C9(v,w)}}
C.C9.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aH(A.a([B.qm,B.JA],x.O),B.hj)
break
case 1:w=new A.aH(A.a([B.uI,D.afn],x.O),B.jd)
break
case 2:w=new A.aH(A.a([D.agW,D.aeV],x.O),B.wo)
break
case 3:w=new A.aH(A.a([B.X,B.dj],x.O),B.ws)
break
case 4:w=new A.aH(A.a([B.a8,B.ai],x.O),B.mt)
break
default:w=u}v=w.a
return A.u(u,A.aU(A.a2(w.b,B.N.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.t(u,u,u,u,u,new A.aq(B.ak,B.au,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.ae3.prototype={
n(){var w=this,v=w.aZ$
if(v!=null)v.V(0,w.gdN())
w.aZ$=null
w.a2()},
bq(){this.bP()
this.bJ()
this.dO()}}
C.a0A.prototype={
U(){return new C.a9x()}}
C.a9x.prototype={
bu3(d,e){var w=C.d_8(d)
if(w!=null)return C.d_9(w,e)
return d},
a2M(d,e){var w,v=this,u=C.d_8(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bu3(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dvP(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
brY(){var w,v=this
if(v.w)return
v.p(new C.cq9(v))
w=v.e
if(w!=null)v.a2M(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.L_()
$.pa().ux(w,new C.cqh(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cqa(v))
w=v.e
w.toString
v.a2M(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a2(B.Pv,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hG(A.aU(new A.J(new A.V(12,12,12,12),A.B(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.ak0(n,B.t9,w)],v)
if(o.f)w.push(A.hG(A.aU(new A.ao(28,28,D.aci,n),n,n,n),B.c4,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.b0,B.n,1)
q=A.a2(B.Px,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f7(0,A.aS(!1,B.L,!0,n,A.aZ(!1,n,!0,A.aU(A.u(n,A.G(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.t(t,n,r,s,n,n,B.k),n,n,n,D.Mg,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbrX(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aV(B.a7,n,B.b3,B.m,w,n)}}
var z=a.updateTypes(["m(mx)","~()","Gv(R)","mx(W<@,@>)","a0(mx)","W<m,@>(mx)","ax<~>()","Gu(R)","i8<Q>(R,ou?,p?)","RB(R,Q)","tU(R,ou?,p?)","C9(R,ak,dm?)"])
C.cWs.prototype={
$1(d){return new C.Gv(this.a,null)},
$S:z+2}
C.cWr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.Y(d).ax.a===B.S,l=A.az(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cq,B.X],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.N.l(0.22),B.ep,32)],x.V),g=A.U(m?B.bp:B.N.l(0.18),B.n,1),f=A.n(28),e=B.N.l(m?0.35:0.14)
j=A.a([e,B.T.l(m?0.18:0.08)],j)
e=A.u(n,D.atL,B.h,n,n,new A.t(B.N.l(0.18),n,A.U(B.N.l(0.45),B.n,1),n,n,n,B.ag),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,A.l(n,n,m?B.c:B.X,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.B(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,A.l(n,n,m?B.U:B.aH,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.f0,w,A.aP(n,n,n,n,A.a2(B.cF,m?B.aa:B.c4,n,n,n),n,n,n,new C.cWn(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.t(n,n,n,n,n,new A.aq(B.a0,B.a4,B.y,j,n,n),B.k),n,n,n,B.Mq,n,n,n)
e=A.em(B.bT,A.a([new C.Js("YouTube",B.Dx,m,n),new C.Js("TikTok",B.jd,m,n),new C.Js("Instagram",B.wo,m,n),new C.Js("Facebook",B.ws,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.by:B.fu,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.d0
r=A.a2(B.k9,B.N.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bp:B.b1
u=A.B(A.a([e,B.as,A.av(n,B.G,!0,n,!0,B.m,n,A.aw(),w,n,n,n,n,n,2,A.bi(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aK(o,1,B.n,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Iq),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.I,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.C,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.H,n,B.M,n,n,n,n)],v),B.ad,B.e,B.f,0,B.l)
e=A.j1(D.atP,D.bN7,new C.cWo(d),A.k1(n,n,n,n,n,n,n,n,n,n,n,m?B.aC:B.aH,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.e1(A.cP(f,A.B(A.a([j,new A.J(D.amr,u,n),new A.J(D.amB,A.G(A.a([e,B.b6,A.bQ(!1,A.j("Cancel",n,n,n,n,A.l(n,n,m?B.U:B.Z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cWp(d),n,n),B.Y,A.dI(D.axW,D.bNs,new C.cWq(d,w),A.bz(B.N,n,n,n,B.c,n,D.Mg,n,new A.bD(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ad,B.e,B.P,0,B.l),B.av),new A.t(n,n,g,k,h,new A.aq(B.ak,B.au,B.y,i,n,n),B.k),B.bD),n)},
$S:64}
C.cWn.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cWo.prototype={
$0(){C.d9N()
$.KZ().sv(0,null)
A.a8(this.a,!1).S(null)},
$S:0}
C.cWp.prototype={
$0(){A.a8(this.a,!1).S(null)
return null},
$S:0}
C.cWq.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a8(this.a,!1).S(w)
return null},
$S:0}
C.bav.prototype={
$1(d){return C.d9O(A.O(d,x.N,x.z))},
$S:z+3}
C.baw.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.ban.prototype={
$1(d){return d.c},
$S:z+0}
C.bao.prototype={
$1(d){return d.r},
$S:z+0}
C.bap.prototype={
$1(d){return d.f},
$S:z+0}
C.baq.prototype={
$1(d){return d.at},
$S:z+0}
C.bar.prototype={
$1(d){return d.c},
$S:z+0}
C.bas.prototype={
$1(d){return d.r},
$S:z+0}
C.bat.prototype={
$1(d){return d.f},
$S:z+0}
C.bau.prototype={
$1(d){return d.at},
$S:z+0}
C.bam.prototype={
$1(d){return d.ae()},
$S:z+5}
C.bal.prototype={
$1(d){return B.a.bB(B.p.jc(d,16),2,"0").toUpperCase()},
$S:72}
C.cq1.prototype={
$0(){},
$S:0}
C.cq0.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cpZ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cq_.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cq2.prototype={
$1(d){return new C.Gu(this.a,null)},
$S:z+7}
C.cq6.prototype={
$0(){return A.a8(this.a,!1).eu()},
$S:0}
C.cq7.prototype={
$3(d,e,f){return new A.i8($.Dk(),new C.cq5(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cq5.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.A7(d,k,x.Q)
w=w==null?k:w.gkl()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.N.l(0.12)
s=A.n(12)
r=A.U(B.N.l(0.35),B.n,1)
q=A.a2(B.hj,B.N,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.Dk().a
m=B.j.aD(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,A.l(k,k,l.c?B.c:B.X,k,k,k,k,k,k,k,k,12,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.t(t,k,r,s,k,k,B.k),k,k,B.ct,B.eG,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cP(s,new A.iv(1.7777777777777777,C.d9P(new A.dB("fleet_master_"+r,x.W),!0,r,!0,j.gaFm(),"fleet_master"),k),B.av),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,A.l(k,k,A.Y(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zg(0,B.m,k,B.r,k,k,k,k,!1,k,B.W,!1,A.a([new A.jZ(new A.J(B.BA,A.B(u,B.t,B.e,B.f,0,B.l),k),k),new A.oF(D.akQ,A.arZ(new A.nC(new C.cq4(i,j),J.a1(i.d),!1,!0,!0,A.vx(),k),D.bs4),k)],w))},
$S:1545}
C.cq4.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.RB(v,e,J.a1(w.d),new C.cq3(w,v),this.b,null)},
$S:z+9}
C.cq3.prototype={
$0(){return this.a.bdU(this.b)},
$S:0}
C.cq8.prototype={
$0(){this.a.QV()
return null},
$S:0}
C.cpW.prototype={
$0(){return A.a8(this.a,!1).eu()},
$S:0}
C.cpX.prototype={
$0(){C.U3(this.a,$.bak)
return null},
$S:0}
C.cpY.prototype={
$3(d,e,f){return A.fE(new C.cpV(this.a,e))},
$S:z+10}
C.cpV.prototype={
$2(d,e){var w,v=null,u=B.j.aD(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aU(A.cv(A.B(A.a([A.j(r,v,v,v,v,A.l(v,v,A.Y(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.as,new C.aHu(u,s.a.c,s.e,s.d,new C.cpS(s),new C.cpT(s),new C.cpU(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vE,v,v,B.W),v,v,v)},
$S:1546}
C.cpS.prototype={
$0(){var w=this.a.c
w.toString
C.U3(w,$.bak)
return null},
$S:0}
C.cpT.prototype={
$1(d){var w=this.a
return w.p(new C.cpR(w,d))},
$S:35}
C.cpR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cpU.prototype={
$0(){var w=this.a
return w.p(new C.cpQ(w))},
$S:0}
C.cpQ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cCK.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cCL.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.csB.prototype={
$3(d,e,f){return new C.C9(this.a.c,null)},
$S:z+11}
C.csC.prototype={
$3(d,e,f){if(f==null)return e
return new A.aV(B.a7,null,B.b3,B.m,A.a([new C.C9(this.a.c,null),D.abI],x.p),null)},
$C:"$3",
$R:3,
$S:432}
C.cq9.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cqh.prototype={
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
A.fT(v,"load",new C.cqf(w),!1,u)
v=w.e
v.toString
A.fT(v,"error",new C.cqg(w),!1,u)
w=w.e
w.toString
return w},
$S:1547}
C.cqf.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cqd(w))
A.bN(B.A,new C.cqe(w),x.H)}},
$S:40}
C.cqd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cqe.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cqb(w))},
$S:12}
C.cqb.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cqg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cqc(w))},
$S:40}
C.cqc.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cqa.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cSP.prototype={
$1(d){var w,v,u,t,s=new A.BK([],[]).Fr(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.v(J.r(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1548};(function aliases(){var w=C.ae3.prototype
w.aOL=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a9w.prototype,"gaqQ","bbu",1)
w(u,"gbc1","bc2",1)
w(u,"gbeq","ber",6)
w(C.a9x.prototype,"gbrX","brY",1)
v(C,"dMD","d9M",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vR,[C.cWs,C.cWr,C.bav,C.baw,C.ban,C.bao,C.bap,C.baq,C.bar,C.bas,C.bat,C.bau,C.bam,C.bal,C.cq2,C.cq7,C.cq5,C.cpY,C.cpT,C.csB,C.csC,C.cqh,C.cqf,C.cqg,C.cSP])
v(A.VB,[C.cWn,C.cWo,C.cWp,C.cWq,C.cq1,C.cq0,C.cpZ,C.cq_,C.cq6,C.cq3,C.cq8,C.cpW,C.cpX,C.cpS,C.cpR,C.cpU,C.cpQ,C.cCK,C.cCL,C.cq9,C.cqd,C.cqe,C.cqb,C.cqc,C.cqa])
v(A.aC,[C.Js,C.RB,C.aA3,C.aHu,C.aHv,C.aB6,C.aHt,C.aCc,C.aww,C.aCg,C.C9])
v(A.ak,[C.mx,C.ou])
v(A.ae,[C.Gv,C.Gu,C.a0z,C.a0A])
v(A.af,[C.a9w,C.aB0,C.ae3,C.a9x])
v(A.VC,[C.cq4,C.cpV])
u(C.Gy,A.axn)
u(C.aB1,C.ae3)
w(C.ae3,A.ec)})()
A.dd4(b.typeUniverse,JSON.parse('{"Gv":{"ae":[],"p":[]},"RB":{"aC":[],"p":[]},"Gu":{"ae":[],"p":[]},"Js":{"aC":[],"p":[]},"a9w":{"af":["Gv"]},"aA3":{"aC":[],"p":[]},"aB0":{"af":["Gu"]},"aHu":{"aC":[],"p":[]},"aHv":{"aC":[],"p":[]},"aB6":{"aC":[],"p":[]},"aHt":{"aC":[],"p":[]},"aCc":{"aC":[],"p":[]},"aww":{"aC":[],"p":[]},"a0z":{"ae":[],"p":[]},"C9":{"aC":[],"p":[]},"aB1":{"af":["a0z"]},"aCg":{"aC":[],"p":[]},"a0A":{"ae":[],"p":[]},"a9x":{"af":["a0A"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bk
return{V:w("ac<ag>"),O:w("ac<A>"),e:w("ac<mx>"),s:w("ac<m>"),p:w("ac<p>"),t:w("ac<Q>"),X:w("ab<mx>"),a:w("ab<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mt"),_:w("A2"),k:w("mx"),N:w("m"),Y:w("bs<a7>"),W:w("dB<m>"),J:w("i8<Q>"),j:w("i8<ou?>"),E:w("xS<cy>"),q:w("Sg"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.brO=new A.ao(18,18,B.Jh,null)
D.abI=new A.dl(B.O,null,null,D.brO,null)
D.Pk=new A.P(983224,"MaterialIcons",!1)
D.awo=new A.a6(D.Pk,48,B.b0,null,null,null)
D.bxS=new A.K(!0,B.by,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bI1=new A.y("Powered off",null,D.bxS,null,null,null,null,null,null,null,null)
D.aJe=w([D.awo,B.z,D.bI1],x.p)
D.aie=new A.ew(B.W,B.e,B.P,B.i,null,B.l,null,0,D.aJe,null)
D.abP=new A.dl(B.O,null,null,D.aie,null)
D.aci=new A.h6(2,null,null,null,null,B.U,null,null,null,null)
D.aeV=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.afn=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.agW=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.akG=new A.V(0,3,0,3)
D.akQ=new A.V(10,0,10,88)
D.ala=new A.V(12,6,12,10)
D.alo=new A.V(14,8,14,6)
D.Mg=new A.V(18,12,18,12)
D.amr=new A.V(20,18,20,8)
D.amB=new A.V(20,8,20,20)
D.MR=new A.V(8,6,15,8)
D.as8=new A.P(983222,"MaterialIcons",!1)
D.atL=new A.a6(B.hj,26,B.N,null,null,null)
D.atP=new A.a6(B.Ot,18,null,null,null,null)
D.au6=new A.a6(B.ov,14,B.U,null,null,null)
D.ass=new A.P(983420,"MaterialIcons",!1)
D.auS=new A.a6(D.ass,14,B.U,null,null,null)
D.aqO=new A.P(62895,"MaterialIcons",!1)
D.auW=new A.a6(D.aqO,14,B.U,null,null,null)
D.axW=new A.a6(B.je,20,null,null,null,null)
D.ayb=new A.a6(B.eZ,16,null,null,null,null)
D.aLo=w([B.ai,B.X],x.O)
D.QN=new A.aq(B.ak,B.au,B.y,D.aLo,null,null)
D.blK=new A.aH("NGMY OS","14.2.1")
D.bkB=new A.aH("VirtualDroid","13.8.4")
D.bkA=new A.aH("NGMY OS","15.0.0")
D.blj=new A.aH("VirtualDroid","14.1.2")
D.bky=new A.aH("NGMY Tab OS","12.9.7")
D.bkw=new A.aH("NGMY OS","13.5.3")
D.bkl=new A.aH("VirtualDroid","15.2.0")
D.bkX=new A.aH("NGMY OS","14.8.1")
D.blp=new A.aH("NGMY Tab OS","13.2.4")
D.blU=new A.aH("VirtualDroid","12.6.9")
D.bkh=new A.aH("NGMY OS","16.0.1")
D.bk8=new A.aH("VirtualDroid","14.9.0")
D.blC=new A.aH("NGMY Tab OS","14.0.3")
D.bkK=new A.aH("NGMY OS","13.1.8")
D.bkg=new A.aH("VirtualDroid","13.4.5")
D.bkv=new A.aH("NGMY OS","15.3.2")
D.blq=new A.aH("NGMY Tab OS","12.4.1")
D.blE=new A.aH("VirtualDroid","16.1.0")
D.bkW=new A.aH("NGMY OS","14.4.6")
D.blL=new A.aH("VirtualDroid","15.0.8")
D.aKZ=w([D.blK,D.bkB,D.bkA,D.blj,D.bky,D.bkw,D.bkl,D.bkX,D.blp,D.blU,D.bkh,D.bk8,D.blC,D.bkK,D.bkg,D.bkv,D.blq,D.blE,D.bkW,D.blL],A.bk("ac<+(m,m)>"))
D.bnW=new A.e8(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bnu=new A.e8(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bnp=new A.e8(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bny=new A.e8(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bnl=new A.e8(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bnA=new A.e8(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bnY=new A.e8(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bnm=new A.e8(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bnt=new A.e8(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bnC=new A.e8(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bnk=new A.e8(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bnQ=new A.e8(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bnN=new A.e8(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bns=new A.e8(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bnK=new A.e8(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bnJ=new A.e8(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bnj=new A.e8(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bnx=new A.e8(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bnH=new A.e8(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bnM=new A.e8(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.RS=w([D.bnW,D.bnu,D.bnp,D.bny,D.bnl,D.bnA,D.bnY,D.bnm,D.bnt,D.bnC,D.bnk,D.bnQ,D.bnN,D.bns,D.bnK,D.bnJ,D.bnj,D.bnx,D.bnH,D.bnM],A.bk("ac<+(m,m,a7,a7,m)>"))
D.aQc=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.YQ=new C.Gy(0,"youtube")
D.YR=new C.Gy(1,"tiktok")
D.Fl=new C.Gy(2,"instagram")
D.YS=new C.Gy(3,"facebook")
D.bga=new C.Gy(4,"other")
D.brp=new A.ao(3,null,null,null)
D.bs4=new A.j_(4,10,8,0.52,null)
D.bJ_=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bv5=new A.aT(D.bJ_,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.byb=new A.K(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bHl=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bJq=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bN7=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bNs=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bWx=new C.aCc(null)})();(function staticFields(){$.d9L=20
$.aot=null
$.bak=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dQP","Dk",()=>A.Qn(0))
w($,"dQQ","KZ",()=>A.Qn(null))})()};
(a=>{a["nr2fBk8/JjL02DWV/vnl1ITzmLI="]=a.current})($__dart_deferred_initializers__);