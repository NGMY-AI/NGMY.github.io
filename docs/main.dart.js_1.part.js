((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dwW(d,e){A.ab(d,!1).cI(A.ek(new C.cHB(e),!0,null,y.H))},
Sk(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$Sk=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.Jo()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.al()
t=new A.aa(new A.aL(o,B.Z,B.W),u)
x=3
return A.b(A.dg(B.B,null,new C.cHA(e,t),d,!0,!0,!0,null,!1,!1,y.N),$async$Sk)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dfQ(s)
if(r==null){d.E(y.q).f.O(D.blI)
x=1
break}x=4
return A.b(A.c_(B.fi,null,y.H),$async$Sk)
case 4:if(d.e==null){x=1
break}o=B.p.aR(e,1,999)
$.cVx=o
q=C.dfL(o)
o=$.xB()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cL6(r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.w,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Sk,w)},
cVA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
j=J.k(j==null?"":j)
x=d.h(0,"label")
x=J.k(x==null?"Virtual Device":x)
w=d.h(0,"serialNumber")
w=J.k(w==null?"":w)
v=d.h(0,"modelName")
v=J.k(v==null?"NGMY Virtual Phone":v)
u=d.h(0,"deviceId")
u=J.k(u==null?"":u)
t=d.h(0,"macAddress")
t=J.k(t==null?"":t)
s=d.h(0,"imei")
s=J.k(s==null?"":s)
r=d.h(0,"osName")
r=J.k(r==null?"NGMY OS":r)
q=d.h(0,"osVersion")
q=J.k(q==null?"1.0":q)
p=d.h(0,"virtualCity")
p=J.k(p==null?"Unknown":p)
o=d.h(0,"virtualCountry")
o=J.k(o==null?"":o)
n=A.b2(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.b2(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.mb(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
F_(d){return C.dfT(d)},
dfT(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F_=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$F_)
case 3:h=a4
g=B.a.i(a2)
f=h.a
e=J.a4(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.u.aC(0,d,null)
x=y.a.b(s)&&J.cB(s)?10:11
break
case 10:l=J.id(s,y.f)
l=A.ea(l,new C.b4M(),l.$ti.k("I.E"),y.k)
k=A.P(l).k("a7<I.E>")
j=A.E(new A.a7(l,new C.b4N(),k),k.k("I.E"))
r=j
if(J.a2(r)>=20){v=r
x=1
break}q=C.cVB(r)
x=12
return A.b(C.EZ(a2,q),$async$F_)
case 12:v=q
x=1
break
case 11:u=2
x=9
break
case 7:u=6
a0=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:p=A.aE(e.h(f,"ngmy_virtual_device_v1_"+g.toLowerCase()))
x=p!=null&&p.length!==0?13:14
break
case 13:u=16
o=B.u.aC(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.cVA(A.L(o,y.N,y.z))
m=C.cVB(A.a([n],y.e))
x=21
return A.b(C.EZ(a2,m),$async$F_)
case 21:v=m
x=1
break
case 20:u=2
x=18
break
case 16:u=15
a1=t.pop()
x=18
break
case 15:x=2
break
case 18:case 14:r=C.dfR()
x=22
return A.b(C.EZ(a2,r),$async$F_)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$F_,w)},
cVB(d){var x=A.Q(d).k("A<1,m>"),w=new A.A(d,new C.b4E(),x).es(0),v=new A.A(d,new C.b4F(),x).es(0),u=new A.A(d,new C.b4G(),x).es(0),t=new A.A(d,new C.b4H(),x).es(0),s=A.bh(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cL7(null,r,v,u,w,t));++r}return s},
alo(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$alo=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.F_(d),$async$alo)
case 3:u=f
t=y.N
s=J.cm(u)
r=s.dc(u,new C.b4I(),t).es(0)
q=s.dc(u,new C.b4J(),t).es(0)
p=s.dc(u,new C.b4K(),t).es(0)
o=s.dc(u,new C.b4L(),t).es(0)
n=C.cL7(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.EZ(d,u),$async$alo)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$alo,w)},
EZ(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$EZ=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$EZ)
case 2:v=g
u=B.a.i(d)
t=J.b5(e,new C.b4D(),y.P)
t=A.E(t,t.$ti.k("a3.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.u.ah(t,null)),$async$EZ)
case 3:return A.f(null,w)}})
return A.h($async$EZ,w)},
dfR(){var x,w=y.N,v=A.b0(w),u=A.b0(w),t=A.b0(w),s=A.b0(w),r=J.fm(20,y.k)
for(x=0;x<20;++x)r[x]=C.cL7(x,x,u,t,v,s)
return r},
cL7(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jP(),i=d==null,h=D.Pm[B.p.aG(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Pm[B.p.aG(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.ed(256)
o=new A.A(q,new C.b4C(),A.Q(q).k("A<1,m>")).h5(0)
v="VND-"+B.a.aj(o,0,4)+"-"+B.a.aj(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.ed(10)
u=B.d.h5(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bR(B.p.kH(j.ed(256),16),2,"0")
t=B.d.bh(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.aG(e,20)
l=D.aJh[x]
k=D.aEC[x]
return new C.mb("vd_"+1000*Date.now()+"_"+e+"_"+j.ed(99999),"Device "+B.a.bR(B.p.q(e+1),2,"0"),v,l,C.dfS(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.S(Date.now(),0,!1).a_().Y())},
dfS(d,e){var x,w=J.fm(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bR(B.p.kH(d.ed(256),16),2,"0")
return B.d.h5(w)},
cHB:function cHB(d){this.a=d},
cHA:function cHA(d,e){this.a=d
this.b=e},
cHw:function cHw(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHy:function cHy(d){this.a=d},
cHz:function cHz(d,e){this.a=d
this.b=e},
HQ:function HQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mb:function mb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b4M:function b4M(){},
b4N:function b4N(){},
b4E:function b4E(){},
b4F:function b4F(){},
b4G:function b4G(){},
b4H:function b4H(){},
b4I:function b4I(){},
b4J:function b4J(){},
b4K:function b4K(){},
b4L:function b4L(){},
b4D:function b4D(){},
b4C:function b4C(){},
EX:function EX(d,e){this.c=d
this.a=e},
a6Z:function a6Z(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cdN:function cdN(){},
cdM:function cdM(d,e){this.a=d
this.b=e},
cdK:function cdK(d){this.a=d},
cdL:function cdL(d,e){this.a=d
this.b=e},
cdO:function cdO(d){this.a=d},
cdS:function cdS(d){this.a=d},
cdT:function cdT(d,e){this.a=d
this.b=e},
cdR:function cdR(d,e,f){this.a=d
this.b=e
this.c=f},
cdQ:function cdQ(d,e){this.a=d
this.b=e},
cdP:function cdP(d,e){this.a=d
this.b=e},
cdU:function cdU(d){this.a=d},
Q2:function Q2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
awM:function awM(d,e){this.c=d
this.a=e},
EW:function EW(d,e){this.c=d
this.a=e},
axD:function axD(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cdH:function cdH(d){this.a=d},
cdI:function cdI(d){this.a=d},
cdJ:function cdJ(d){this.a=d},
cdG:function cdG(d,e){this.a=d
this.b=e},
cdD:function cdD(d){this.a=d},
cdE:function cdE(d){this.a=d},
cdC:function cdC(d,e){this.a=d
this.b=e},
cdF:function cdF(d){this.a=d},
cdB:function cdB(d){this.a=d},
aDT:function aDT(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDU:function aDU(d,e,f){this.c=d
this.d=e
this.a=f},
axK:function axK(d,e){this.c=d
this.a=e},
aDS:function aDS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cpB:function cpB(d){this.a=d},
cpC:function cpC(d){this.a=d},
ayQ:function ayQ(d){this.a=d},
atp:function atp(d,e){this.c=d
this.a=e},
dfQ(d){var x,w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
x=B.a.Z(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d6(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.nX(x,C.b4A(u,!1),D.W1,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dfP(w)
if(t!=null)return new C.nX(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.W2,"TikTok",q,q)
s=C.dfO(x,w)
if(s!=null)return s
r=C.dfN(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.nX(x,x,D.b7z,"Video",q,q)
return q},
dfO(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d6(e)
if(s!=null){x=s.b[1]
x.toString
return new C.nX(d,"https://www.instagram.com/reel/"+x+u,D.DA,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d6(e)
if(w!=null){x=w.b[1]
x.toString
return new C.nX(d,"https://www.instagram.com/p/"+x+u,D.DA,t,v,v)}return v},
dfN(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.nX(d,"https://www.facebook.com/plugins/video.php?href="+A.eZ(2,d,B.aJ,!1)+"&show_text=false&width=734",D.W3,"Facebook",null,null)},
dfP(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d6(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).d6(d)
return x==null?null:x.b[1]},
F0:function F0(d,e){this.a=d
this.b=e},
nX:function nX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zr:function Zr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axE:function axE(d,e){var _=this
_.d=$
_.cX$=d
_.b_$=e
_.c=_.a=null},
ayU:function ayU(d,e){this.c=d
this.a=e},
cgj:function cgj(d){this.a=d},
cgk:function cgk(d){this.a=d},
AM:function AM(d,e){this.c=d
this.a=e},
abl:function abl(){},
dvP(d){var x=window
x.toString
A.h3(x,"message",new C.cEs(d),!1,y._)},
EY:function EY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axF:function axF(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ce_:function ce_(d){this.a=d},
cdY:function cdY(d){this.a=d},
cdX:function cdX(d){this.a=d},
cdZ:function cdZ(d){this.a=d},
cdW:function cdW(d){this.a=d},
cdV:function cdV(d){this.a=d},
cEs:function cEs(d){this.a=d},
b4A(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://ngmy.org")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.d.bh(x,"&")},
cVu(d){var x=A.ar("(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).d6(d)
return x==null?null:x.b[1]},
cVv(d){var x=A.bx(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bx(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
cVw(d,e,f){var x=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+d+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: 'https://ngmy.org',\n          mute: "+x+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"},
dfK(d,e,f){var x=C.cVu(d)
if(x!=null){if(f)return C.cVw(x,e,!0)
return C.cVv(C.b4A(x,e))}return C.cVv(d)},
dfL(d){if(d<=4)return 0
return B.p.b5(d-1,4)*4},
dfM(d){var x
if($.Jo().a==null)return!1
x=$.xB().a
return d>=x&&d<x+4},
cVz(){var x=$.aln
if(x!=null)x.af(0)
$.aln=null
$.xB().sv(0,0)},
cVy(){var x,w,v,u=$.Jo()
if(u.a==null)return
x=$.aln
if(x!=null)x.af(0)
w=$.cVx
if(w<=4){u=u.a
u.toString
C.cL6(u)
return}x=$.xB()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cL6(u)},
cL6(d){var x=$.aln
if(x!=null)x.af(0)
x=120
switch(d.c.a){case 0:x=180
break
case 1:x=60
break
case 2:x=90
break
case 3:break
case 4:break
default:x=null}$.aln=A.dr(A.d7(0,0,0,0,x),C.dvY())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.HQ.prototype={
C(d){var x=null,w=this.e,v=w?B.ag:B.c,u=A.n(20),t=A.Z(B.N.u(0.25),B.o,1),s=A.a5(this.d,B.N,x,x,14)
return A.w(x,A.G(A.a([s,B.eG,A.j(this.c,x,x,x,x,A.l(x,x,w?B.V:B.dT,x,x,x,x,x,x,x,x,11,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,x,B.e,B.O,0,x,x),B.h,x,x,new A.v(v,x,t,u,x,x,B.l),x,x,x,B.hc,x,x,x)}}
C.mb.prototype={
ag(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.EX.prototype={
T(){return new C.a6Z(A.a([],y.e))},
giD(){return this.c}}
C.a6Z.prototype={
a0(){var x=this
x.a6()
$.xB().ad(0,x.ganL())
C.dvP(x.gb70())
x.Pr()},
b6t(){if(this.c!=null)this.n(new C.cdN())},
b71(){C.cVy()},
l(){$.xB().V(0,this.ganL())
C.cVz()
$.Jo().sv(0,null)
this.a5()},
Pr(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Pr=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.F_(u.a.c),$async$Pr)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cdM(u,t))
$.b4B=J.a2(t)
case 1:return A.f(v,w)}})
return A.h($async$Pr,w)},
Pa(){var x=0,w=A.i(y.H),v,u=this,t
var $async$Pa=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cdK(u))
x=3
return A.b(C.alo(u.a.c),$async$Pa)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cdL(u,t))
$.b4B=J.a2(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.w,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Pa,w)},
b8T(d){var x=this.c
x.toString
A.ab(x,!1).cI(A.ek(new C.cdO(d),!1,null,y.H))},
b9m(){var x=this.c
x.toString
return C.Sk(x,J.a2(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.P,u=v?B.dn:B.dp,t=A.aT(w,w,w,w,B.BY,w,w,w,new C.cdS(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a2(x.d)+")",r=y.p
s=A.G(A.a([t,A.K(new A.zm(A.G(A.a([A.K(new A.N(B.ii,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.v,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aV(!1,B.L,!0,w,A.b_(!1,w,!0,new A.N(B.aG,A.a5(B.eS,B.N,w,w,28),w),B.bI,!0,w,w,w,w,w,w,w,w,w,w,w,x.gb9l(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a0)],r),B.j,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cZ(!0,A.D(A.a([new A.N(D.KF,s,w),A.K(x.e?B.iR:new A.hS($.Jo(),new C.cdT(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.ct(w,u,t,w,!1,!1,A.agB(B.N,B.yc,B.ny,D.bzc,x.e?w:new C.cdU(x)),w)}}
C.Q2.prototype={
b4z(d){var x,w=$.xB().a,v=this.d
if(C.dfM(v)){v=this.c.a
x=d.gaAn()
return new C.EY(v+"_mini",d.gaAn(),!0,d.gad9(),!1,new A.dz(v+"_"+x+"_"+A.o(w),y.W))}return new C.Zr(d,!0,!0,"Fold "+(B.p.b5(v,4)+1)+"/"+B.p.b5(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.Z(B.c.u(0.1),B.o,1),s=A.a([new A.am(0,B.z,B.N.u(0.18),B.cl,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aV(!1,B.L,!0,w,A.b_(!1,v,!0,A.D(A.a([A.K(A.w(w,A.cV(r,A.iO(A.D(A.a([new C.awM(q,w),A.K(p!=null?x.b4z(p):A.w(w,A.D(A.a([A.a5(B.hf,B.l9,w,w,22),B.aj,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.u(0.7),w,w,w,w,w,w,w,w,7,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.aq,B.f,0,B.k),B.h,B.tr,w,w,w,w,w,w,w,w,1/0),1),A.w(w,A.G(A.a([A.a5(B.vg,B.N.u(0.85),w,w,9),D.bid,A.j("Tap",w,w,w,w,A.l(w,w,B.c.u(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.aq,B.f,0,w,w),B.h,B.a7,w,w,w,w,w,D.agH,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,w,w,new A.v(w,w,t,u,s,D.Op,B.l),w,w,w,B.ez,w,w,w),1),B.aj,A.j(q.b,1,B.af,w,w,A.l(w,w,A.U(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.U(d).ax.k3.u(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.N.u(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.a0)}}
C.awM.prototype={
C(d){var x=null
return A.w(x,A.G(A.a([A.K(A.j(B.d.gap(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.u(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a5(B.nw,B.c.u(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a7,x,x,x,x,x,B.Kt,x,x,x)}}
C.EW.prototype={
T(){return new C.axD()}}
C.axD.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.P,v=w?B.dn:B.dp,u=A.aT(x,x,x,x,B.BY,x,x,x,new C.cdH(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.ct(x,v,A.cZ(!0,A.D(A.a([new A.N(D.KF,A.G(A.a([u,A.K(new A.zm(A.G(A.a([A.K(new A.N(B.ii,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.v,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aV(!1,B.L,!0,x,A.b_(!1,x,!0,new A.N(B.aG,A.a5(B.eS,B.N,x,x,28),x),B.bI,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cdI(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.a0)],s),B.j,x,B.e,B.f,0,x,x),x,x,x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.K(new A.hS($.Jo(),new C.cdJ(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aDT.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.am(0,B.z,B.N.u(0.35),B.eF,28),new A.am(0,B.z,B.q.u(0.45),B.cM,18)],y.V),p=A.Z(B.c.u(0.12),B.o,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.EY(w+"_full",v,!1,x.gad9(),!1,new A.dz(w+"_full_"+v,y.W))
x=v}else x=new C.axK(u.r,t)}else x=new C.atp(n,t)
else x=D.bLx
return A.w(t,A.cV(o,A.iO(A.D(A.a([new C.aDU(n,m,t),A.K(x,1),new C.aDS(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.au),B.h,t,t,new A.v(t,t,p,r,q,D.Op,B.l),t,s*2.05,t,B.b9,t,t,s)}}
C.aDU.prototype={
C(d){var x,w,v,u,t=null,s=new A.S(Date.now(),0,!1),r=A.eQ(s)
s=A.im(s)
x=new A.da(r,s)
w=x.gEV()===0?12:x.gEV()
s=B.a.bR(B.p.q(s),2,"0")
r=(r<12?B.ej:B.fJ)===B.ej?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.kE,t,t,t),B.bb,A.j(v.b,t,t,t,t,A.l(t,t,B.c.u(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bi,D.aqi,B.ec,D.apw,B.ec,D.aqm],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a5(B.BT,B.N.u(0.9),t,t,12),B.ec,A.K(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.u(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.u(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.w(t,A.D(r,B.j,B.e,B.f,0,B.k),B.h,B.a7,t,t,t,t,t,D.aho,t,t,t)}}
C.axK.prototype={
C(d){var x=null
return A.w(x,A.bb(A.D(A.a([A.a5(B.v6,B.c.u(0.35),x,x,40),B.F,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.u(0.6),x,x,x,x,x,x,x,x,12,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.u(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ah,A.eC(D.atb,D.bxi,this.c,A.el(x,x,x,x,x,x,x,x,x,B.N,x,x,x,x,x,new A.aK(B.N.u(0.5),1,B.o,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.tr,x,x,x,x,x,x,x,x,1/0)}}
C.aDS.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.anE(B.N4,"YouTube",t===0,s,new C.cpB(v))
t=v.anE(B.jd,"Device",t===1,s,new C.cpC(v))
x=s?"Power off":"Power on"
w=s?D.N5:D.anM
return A.w(u,A.G(A.a([r,B.Y,t,B.bb,A.aT(u,u,u,u,A.a5(w,s?B.bF:B.dj,u,u,u),u,u,u,v.f,u,u,u,u,x,B.db)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a7,u,u,u,u,u,D.aha,u,u,u)},
anE(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bk
else x=f?B.N:B.a9
w=f&&g?B.N.u(0.15):B.B
v=A.n(10)
u=g?h:t
return A.K(A.aV(!1,B.L,!0,v,A.b_(!1,A.n(10),!0,new A.N(B.kc,A.D(A.a([A.a5(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.G,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.a0),1)}}
C.ayQ.prototype={
C(d){return D.a8v}}
C.atp.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.oj,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.u(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pN("Serial",v.c),r=x.pN("Model",v.d),q=x.pN("Device ID",v.e),p=x.pN("IMEI",v.r),o=x.pN("MAC",v.f),n=x.pN("OS",v.w+" "+v.x),m=x.pN("Location",v.y+", "+v.z),l=x.pN("Coordinates",B.i.a2(v.Q,4)+", "+B.i.a2(v.as,4)),k=x.pN("Timezone",v.at)
v=v.ax
return A.ej(A.a([u,B.aj,t,B.T,s,r,q,p,o,n,m,l,k,x.pN("Provisioned",v.length>=10?B.a.aj(v,0,10):v)],y.p),w,B.aG,w,w,B.X,!1)},
pN(d,e){var x=null
return new A.N(B.cb,A.D(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.u(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.j(e,x,x,x,x,D.boO,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.F0.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.nX.prototype={
gaAn(){var x=this.f
if(x!=null&&x.length!==0)return C.b4A(x,!0)
return this.b},
gad9(){var x=this.c
return x===D.W1||x===D.W2||x===D.DA||x===D.W3}}
C.Zr.prototype={
T(){return new C.axE(null,null)}}
C.axE.prototype={
a0(){this.a6()
var x=A.bI(null,B.pz,null,1,null,this)
x.o3(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aKU()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fu(v,new A.v(v,v,v,v,v,new A.aD(B.e2,B.cp,B.J,A.a([B.B,B.q.u(0.55)],y.O),v,v),B.l),B.ck),s=y.Y,r=w.d
r===$&&A.c()
r=A.cK(B.h4,r,v)
x=B.c.u(0.92)
s=A.bb(new A.dV(new A.bg(r,new A.bu(0.72,1,s),s.k("bg<bq.T>")),!1,A.a5(B.hf,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.u(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.ayU(u,v),t,s,A.bF(v,A.w(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.v,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.v(r,v,v,x,v,v,B.l),v,v,v,new A.V(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.u(0.75)
u.push(A.bF(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.u(0.85)
u.push(A.bF(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.bl(B.am,v,B.cy,B.m,u,v)}}
C.ayU.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k0(v,new C.cgj(this),B.bj,!0,x,x,new C.cgk(this),x)
return new C.AM(w,x)}}
C.AM.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.tB,B.HH],y.O),B.hf)
break
case 1:x=new A.aN(A.a([B.tr,D.abP],y.O),B.hL)
break
case 2:x=new A.aN(A.a([D.adl,D.abm],y.O),B.v9)
break
case 3:x=new A.aN(A.a([B.a_,B.dU],y.O),B.By)
break
case 4:x=new A.aN(A.a([B.a7,B.ag],y.O),B.lK)
break
default:x=v}w=x.a
return A.w(v,A.bb(A.a5(x.b,B.N.u(0.55),v,v,28),v,v,v),B.h,v,v,new A.v(v,v,v,v,v,new A.aD(B.ax,B.aI,B.J,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.abl.prototype={
l(){var x=this,w=x.b_$
if(w!=null)w.V(0,x.gdO())
x.b_$=null
x.a5()},
br(){this.bO()
this.bI()
this.dP()}}
C.EY.prototype={
T(){return new C.axF()}}
C.axF.prototype={
agJ(d,e){var x,w,v=this,u="mute=1",t=C.cVu(e)
if(t!=null&&v.a.f){if(v.a.r){d.removeAttribute("src")
d.srcdoc=C.cVw(t,B.a.p(e,u),!0)}else{d.removeAttribute("srcdoc")
d.src=C.b4A(t,B.a.p(e,u))}return}if(v.a.f){x=e.toLowerCase()
w=B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")}else w=!1
if(w){d.removeAttribute("src")
w=v.a.r
d.srcdoc=C.dfK(e,B.a.p(e,u),w)}else{d.removeAttribute("srcdoc")
d.src=e}},
a0(){var x,w,v=this
v.a6()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aS()
v.d=x
try{$.Jp()
$.ou().tN(x,new C.ce_(v),!0)}catch(w){v.r=!0
v.f=!1}},
aO(d){var x,w=this
w.b2(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cdV(w))
x=w.e
x.toString
w.agJ(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.u(0.5)
return A.iO(A.bb(A.a5(B.Nf,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ahc(u,B.qW,x)],y.p)
if(v.f)x.push(A.iO(A.bb(new A.ap(w,w,D.a8U,u),u,u,u),B.bP,!0))
return new A.bl(B.am,u,B.cy,B.m,x,u)}}
var z=a.updateTypes(["m(mb)","~()","EX(R)","mb(W<@,@>)","a0(mb)","W<m,@>(mb)","at<~>()","EW(R)","hS<T>(R,nX?,q?)","Q2(R,T)","t3(R,nX?,q?)","AM(R,ah,de?)"])
C.cHB.prototype={
$1(d){return new C.EX(this.a,null)},
$S:z+2}
C.cHA.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=null,n=A.U(d).ax.a===B.P,m=A.ay(d,o,y.w).w,l=A.n(28),k=y.O,j=n?A.a([B.cq,B.a_],k):A.a([B.c,B.ab],k),i=A.a([new A.am(0,B.z,B.N.u(0.22),B.eF,32)],y.V),h=A.Z(n?B.bm:B.N.u(0.18),B.o,1),g=A.n(28),f=B.N.u(n?0.35:0.14)
k=A.a([f,B.Q.u(n?0.18:0.08)],k)
f=A.w(o,D.apc,B.h,o,o,new A.v(B.N.u(0.18),o,A.Z(B.N.u(0.45),B.o,1),o,o,o,B.ak),o,48,o,o,o,o,48)
x=A.j("Paste video link",o,o,o,o,A.l(o,o,n?B.c:B.a_,o,o,o,o,o,o,o,o,18,o,o,B.v,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=y.p
x=A.K(A.D(A.a([x,B.aj,A.j("4 phones play at a time \xb7 rotates through all "+this.a,o,o,o,o,A.l(o,o,n?B.V:B.aS,o,o,o,o,o,o,o,o,12,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.t,B.e,B.f,0,B.k),1)
k=A.w(o,A.G(A.a([f,B.fb,x,A.aT(o,o,o,o,A.a5(B.cL,n?B.a9:B.bP,o,o,o),o,o,o,new C.cHw(d),o,o,o,o,o,o)],w),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.v(o,o,o,o,o,new A.aD(B.a6,B.a8,B.J,k,o,o),B.l),o,o,o,B.Kf,o,o,o)
f=A.fb(B.c2,A.a([new C.HQ("YouTube",B.BS,n,o),new C.HQ("TikTok",B.hL,n,o),new C.HQ("Instagram",B.v9,n,o),new C.HQ("Facebook",B.By,n,o)],w),8,8)
x=this.b
v=A.l(o,o,n?B.c:B.a_,o,o,o,o,o,o,o,o,14,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=A.l(o,o,n?B.bu:B.f4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
t=n?B.ag:B.dp
s=A.a5(B.je,B.N.u(0.85),o,o,o)
r=A.n(16)
q=A.n(16)
p=n?B.bm:B.b4
v=A.D(A.a([f,B.ar,A.au(o,B.D,!0,o,!0,B.m,o,A.aw(),x,o,o,o,o,o,2,A.be(o,new A.b3(4,r,B.H),o,o,o,o,o,o,!0,new A.b3(4,q,new A.aK(p,1,B.o,-1)),o,o,o,o,o,t,!0,o,o,o,o,new A.b3(4,A.n(16),D.a4O),o,o,o,o,o,o,o,o,u,"https://youtube.com/watch?v=\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,s,o,o,o,o,o,o,o,o,o,o,o,o),B.r,!0,o,!0,o,!1,o,B.I,o,o,o,o,o,o,o,o,o,3,2,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.A,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.C,o,B.K,o,o,o,o)],w),B.ae,B.e,B.f,0,B.k)
f=A.j4(D.apg,D.bCK,new C.cHx(d),A.jE(o,o,o,o,o,o,o,o,o,o,o,n?B.aA:B.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
return new A.N(new A.V(12,0,12,12+m.f.d),A.fu(A.cV(g,A.D(A.a([k,new A.N(D.ain,v,o),new A.N(D.ait,A.G(A.a([f,B.bb,A.c0(!1,A.j("Cancel",o,o,o,o,A.l(o,o,n?B.V:B.U,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,!0,o,new C.cHy(d),o,o),B.Y,A.dS(D.asW,D.bD2,new C.cHz(d,x),A.bD(B.N,o,o,o,B.c,o,D.ahU,o,new A.by(A.n(14),B.H),o,o,o))],w),B.j,o,B.e,B.f,0,o,o),o)],w),B.ae,B.e,B.O,0,B.k),B.au),new A.v(o,o,h,l,i,new A.aD(B.ax,B.aI,B.J,j,o,o),B.l),B.ck),o)},
$S:62}
C.cHw.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cHx.prototype={
$0(){C.cVz()
$.Jo().sv(0,null)
A.ab(this.a,!1).U(null)},
$S:0}
C.cHy.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cHz.prototype={
$0(){var x=B.a.i(this.b.a.a)
A.ab(this.a,!1).U(x)
return null},
$S:0}
C.b4M.prototype={
$1(d){return C.cVA(A.L(d,y.N,y.z))},
$S:z+3}
C.b4N.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b4E.prototype={
$1(d){return d.c},
$S:z+0}
C.b4F.prototype={
$1(d){return d.r},
$S:z+0}
C.b4G.prototype={
$1(d){return d.f},
$S:z+0}
C.b4H.prototype={
$1(d){return d.at},
$S:z+0}
C.b4I.prototype={
$1(d){return d.c},
$S:z+0}
C.b4J.prototype={
$1(d){return d.r},
$S:z+0}
C.b4K.prototype={
$1(d){return d.f},
$S:z+0}
C.b4L.prototype={
$1(d){return d.at},
$S:z+0}
C.b4D.prototype={
$1(d){return d.ag()},
$S:z+5}
C.b4C.prototype={
$1(d){return B.a.bR(B.p.kH(d,16),2,"0").toUpperCase()},
$S:81}
C.cdN.prototype={
$0(){},
$S:0}
C.cdM.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cdK.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cdL.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cdO.prototype={
$1(d){return new C.EW(this.a,null)},
$S:z+7}
C.cdS.prototype={
$0(){return A.ab(this.a,!1).eU()},
$S:0}
C.cdT.prototype={
$3(d,e,f){return new A.hS($.xB(),new C.cdR(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cdR.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.yV(d,l,y.Q)
x=x==null?l:x.glc()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.N.u(0.12)
t=A.n(12)
s=A.Z(B.N.u(0.35),B.o,1)
r=A.a5(B.hf,B.N,l,l,18)
q=k.d
p=J.a2(m.a.d)
o=$.xB().a
n=B.i.aR(o+4,1,p)
u=A.a([A.w(l,A.G(A.a([r,B.Y,A.K(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.a_,l,l,l,l,l,l,l,l,12,l,l,B.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.v(u,l,s,t,l,l,B.l),l,l,B.cB,B.ey,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cV(t,new A.lR(1.7777777777777777,new C.EY("fleet_master",s,!1,k.gad9(),!0,new A.dz("fleet_master_"+s+"_"+e,y.W)),l),B.au),B.T],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a2(t)+".":""+J.a2(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.U(d).ax.k3.u(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.y1(0,B.m,l,B.r,l,l,l,l,!1,l,B.X,!1,A.a([new A.jB(new A.N(B.A6,A.D(v,B.t,B.e,B.f,0,B.k),l),l),new A.o6(D.agS,A.aoV(new A.na(new C.cdQ(u,k),J.a2(u.d),!1,!0,!0,A.uv(),l),D.biO),l)],x))},
$S:1433}
C.cdQ.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Q2(w,e,J.a2(x.d),new C.cdP(x,w),this.b,null)},
$S:z+9}
C.cdP.prototype={
$0(){return this.a.b8T(this.b)},
$S:0}
C.cdU.prototype={
$0(){this.a.Pa()
return null},
$S:0}
C.cdH.prototype={
$0(){return A.ab(this.a,!1).eU()},
$S:0}
C.cdI.prototype={
$0(){C.Sk(this.a,$.b4B)
return null},
$S:0}
C.cdJ.prototype={
$3(d,e,f){return A.hZ(new C.cdG(this.a,e))},
$S:z+10}
C.cdG.prototype={
$2(d,e){var x,w=null,v=B.i.aR(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.bb(A.cv(A.D(A.a([A.j(s,w,w,w,w,A.l(w,w,A.U(d).ax.k3.u(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.M,w,w),B.ar,new C.aDT(v,t.a.c,t.e,t.d,new C.cdD(t),new C.cdE(t),new C.cdF(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.ut,w,w,B.X),w,w,w)},
$S:1434}
C.cdD.prototype={
$0(){var x=this.a.c
x.toString
C.Sk(x,$.b4B)
return null},
$S:0}
C.cdE.prototype={
$1(d){var x=this.a
return x.n(new C.cdC(x,d))},
$S:37}
C.cdC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cdF.prototype={
$0(){var x=this.a
return x.n(new C.cdB(x))},
$S:0}
C.cdB.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cpB.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cpC.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cgj.prototype={
$3(d,e,f){return new C.AM(this.a.c,null)},
$S:z+11}
C.cgk.prototype={
$3(d,e,f){if(f==null)return e
return new A.bl(B.am,null,B.cy,B.m,A.a([new C.AM(this.a.c,null),D.a8o],y.p),null)},
$C:"$3",
$R:3,
$S:416}
C.ce_.prototype={
$1(d){var x=this.a,w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
w.allowFullscreen=!0
w.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
w.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
x.e=w
x.agJ(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h3(w,"load",new C.cdY(x),!1,v)
w=x.e
w.toString
A.h3(w,"error",new C.cdZ(x),!1,v)
x=x.e
x.toString
return x},
$S:1435}
C.cdY.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cdX(x))},
$S:40}
C.cdX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cdZ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cdW(x))},
$S:40}
C.cdW.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cdV.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cEs.prototype={
$1(d){var x=new A.Am([],[]).Ec(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1436};(function aliases(){var x=C.abl.prototype
x.aKU=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a6Z.prototype,"ganL","b6t",1)
x(v,"gb70","b71",1)
x(v,"gb9l","b9m",6)
w(C,"dvY","cVy",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uN,[C.cHB,C.cHA,C.b4M,C.b4N,C.b4E,C.b4F,C.b4G,C.b4H,C.b4I,C.b4J,C.b4K,C.b4L,C.b4D,C.b4C,C.cdO,C.cdT,C.cdR,C.cdJ,C.cdE,C.cgj,C.cgk,C.ce_,C.cdY,C.cdZ,C.cEs])
w(A.TP,[C.cHw,C.cHx,C.cHy,C.cHz,C.cdN,C.cdM,C.cdK,C.cdL,C.cdS,C.cdP,C.cdU,C.cdH,C.cdI,C.cdD,C.cdC,C.cdF,C.cdB,C.cpB,C.cpC,C.cdX,C.cdW,C.cdV])
w(A.aC,[C.HQ,C.Q2,C.awM,C.aDT,C.aDU,C.axK,C.aDS,C.ayQ,C.atp,C.ayU,C.AM])
w(A.ah,[C.mb,C.nX])
w(A.ae,[C.EX,C.EW,C.Zr,C.EY])
w(A.af,[C.a6Z,C.axD,C.abl,C.axF])
w(A.TQ,[C.cdQ,C.cdG])
v(C.F0,A.aue)
v(C.axE,C.abl)
x(C.abl,A.ee)})()
A.cYO(b.typeUniverse,JSON.parse('{"EX":{"ae":[],"q":[]},"Q2":{"aC":[],"q":[]},"EW":{"ae":[],"q":[]},"HQ":{"aC":[],"q":[]},"a6Z":{"af":["EX"]},"awM":{"aC":[],"q":[]},"axD":{"af":["EW"]},"aDT":{"aC":[],"q":[]},"aDU":{"aC":[],"q":[]},"axK":{"aC":[],"q":[]},"aDS":{"aC":[],"q":[]},"ayQ":{"aC":[],"q":[]},"atp":{"aC":[],"q":[]},"Zr":{"ae":[],"q":[]},"AM":{"aC":[],"q":[]},"axE":{"af":["Zr"]},"ayU":{"aC":[],"q":[]},"EY":{"ae":[],"q":[]},"axF":{"af":["EY"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ac<am>"),O:x("ac<C>"),e:x("ac<mb>"),s:x("ac<m>"),p:x("ac<q>"),t:x("ac<T>"),X:x("a9<mb>"),a:x("a9<@>"),P:x("W<m,@>"),f:x("W<@,@>"),w:x("m8"),_:x("yQ"),k:x("mb"),N:x("m"),Y:x("bu<ad>"),W:x("dz<m>"),J:x("hS<T>"),j:x("hS<nX?>"),E:x("wI<cq>"),q:x("QH"),z:x("@"),Q:x("ah?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.a4O=new A.aK(B.N,1.6,B.o,-1)
D.biz=new A.ap(18,18,B.Ht,null)
D.a8o=new A.dF(B.R,null,null,D.biz,null)
D.N5=new A.O(983224,"MaterialIcons",!1)
D.arD=new A.a6(D.N5,48,B.bk,null,null,null)
D.bou=new A.J(!0,B.bu,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bxX=new A.z("Powered off",null,D.bou,null,null,null,null,null,null,null,null)
D.aD4=x([D.arD,B.x,D.bxX],y.p)
D.aen=new A.eV(B.X,B.e,B.O,B.j,null,B.k,null,0,D.aD4,null)
D.a8v=new A.dF(B.R,null,null,D.aen,null)
D.a8U=new A.hX(2,null,null,null,null,B.V,null,null,null,null)
D.abm=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.n)
D.abP=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.n)
D.adl=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.n)
D.agH=new A.V(0,3,0,3)
D.agS=new A.V(10,0,10,88)
D.aha=new A.V(12,6,12,10)
D.aho=new A.V(14,8,14,6)
D.ahU=new A.V(18,12,18,12)
D.ain=new A.V(20,18,20,8)
D.ait=new A.V(20,8,20,20)
D.KF=new A.V(8,6,15,8)
D.anM=new A.O(983222,"MaterialIcons",!1)
D.apc=new A.a6(B.hf,26,B.N,null,null,null)
D.apg=new A.a6(B.M9,18,null,null,null,null)
D.apw=new A.a6(B.nw,14,B.V,null,null,null)
D.ao0=new A.O(983420,"MaterialIcons",!1)
D.aqi=new A.a6(D.ao0,14,B.V,null,null,null)
D.amz=new A.O(62895,"MaterialIcons",!1)
D.aqm=new A.a6(D.amz,14,B.V,null,null,null)
D.asW=new A.a6(B.lG,20,null,null,null,null)
D.atb=new A.a6(B.eS,16,null,null,null,null)
D.aEZ=x([B.ag,B.a_],y.O)
D.Op=new A.aD(B.ax,B.aI,B.J,D.aEZ,null,null)
D.bcC=new A.aN("NGMY OS","14.2.1")
D.bbN=new A.aN("VirtualDroid","13.8.4")
D.bbM=new A.aN("NGMY OS","15.0.0")
D.bcj=new A.aN("VirtualDroid","14.1.2")
D.bbL=new A.aN("NGMY Tab OS","12.9.7")
D.bbK=new A.aN("NGMY OS","13.5.3")
D.bbB=new A.aN("VirtualDroid","15.2.0")
D.bc1=new A.aN("NGMY OS","14.8.1")
D.bco=new A.aN("NGMY Tab OS","13.2.4")
D.bcL=new A.aN("VirtualDroid","12.6.9")
D.bby=new A.aN("NGMY OS","16.0.1")
D.bbq=new A.aN("VirtualDroid","14.9.0")
D.bcw=new A.aN("NGMY Tab OS","14.0.3")
D.bbT=new A.aN("NGMY OS","13.1.8")
D.bbx=new A.aN("VirtualDroid","13.4.5")
D.bbJ=new A.aN("NGMY OS","15.3.2")
D.bcp=new A.aN("NGMY Tab OS","12.4.1")
D.bcy=new A.aN("VirtualDroid","16.1.0")
D.bc0=new A.aN("NGMY OS","14.4.6")
D.bcD=new A.aN("VirtualDroid","15.0.8")
D.aEC=x([D.bcC,D.bbN,D.bbM,D.bcj,D.bbL,D.bbK,D.bbB,D.bc1,D.bco,D.bcL,D.bby,D.bbq,D.bcw,D.bbT,D.bbx,D.bbJ,D.bcp,D.bcy,D.bc0,D.bcD],A.bm("ac<+(m,m)>"))
D.beM=new A.dX(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bek=new A.dX(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bef=new A.dX(["New York","United States",40.7128,-74.006,"America/New_York"])
D.beo=new A.dX(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.beb=new A.dX(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.beq=new A.dX(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.beO=new A.dX(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bec=new A.dX(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bej=new A.dX(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bes=new A.dX(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bea=new A.dX(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.beG=new A.dX(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.beD=new A.dX(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bei=new A.dX(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.beA=new A.dX(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bez=new A.dX(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.be9=new A.dX(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.ben=new A.dX(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bex=new A.dX(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.beC=new A.dX(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Pm=x([D.beM,D.bek,D.bef,D.beo,D.beb,D.beq,D.beO,D.bec,D.bej,D.bes,D.bea,D.beG,D.beD,D.bei,D.beA,D.bez,D.be9,D.ben,D.bex,D.beC],A.bm("ac<+(m,m,ad,ad,m)>"))
D.aJh=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.W1=new C.F0(0,"youtube")
D.W2=new C.F0(1,"tiktok")
D.DA=new C.F0(2,"instagram")
D.W3=new C.F0(3,"facebook")
D.b7z=new C.F0(4,"other")
D.bid=new A.ap(3,null,null,null)
D.biO=new A.l2(4,10,8,0.52,null)
D.byL=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.blI=new A.aQ(D.byL,null,null,null,null,null,null,null,null,null,null,null,null,B.w,!1,null,null,null,B.m,null)
D.boO=new A.J(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bxi=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bzc=new A.z("Add device",null,null,null,null,null,null,null,null,null,null)
D.bCK=new A.z("Stop",null,null,null,null,null,null,null,null,null,null)
D.bD2=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bLx=new C.ayQ(null)})();(function staticFields(){$.cVx=20
$.aln=null
$.b4B=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dA1","xB",()=>A.OS(0))
x($,"dA2","Jo",()=>A.OS(null))})()};
(a=>{a["6CBI5R08L+sT1u7yr35/RrF4VUU="]=a.current})($__dart_deferred_initializers__);