((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dMr(d,e){A.a9(d,!1).cQ(A.ep(new C.cVt(e),!0,null,x.H))},
U1(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$U1=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.KY()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.ai()
s=new A.a8(new A.aH(n,B.a_,B.V),t)
w=3
return A.b(A.dd(B.D,new C.cVs(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$U1)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.duN(r)
if(q==null){d.F(x.q).f.O(D.bui)
w=1
break}w=4
return A.b(A.bN(B.fw,null,x.H),$async$U1)
case 4:if(d.e==null){w=1
break}n=B.p.aE(e,1,999)
$.d8G=n
p=C.duH(n)
n=$.Di()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.cZ9(q)
d.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$U1,v)},
d8J(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.mv(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Gv(d){return C.duQ(d)},
duQ(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Gv=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Gv)
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
k=A.dK(k,new C.bad(),k.$ti.j("L.E"),x.k)
j=A.S(k).j("aa<L.E>")
i=A.E(new A.aa(k,new C.bae(),j),j.j("L.E"))
q=i
if(J.a1(q)>=20){u=q
w=1
break}p=C.d8L(q)
w=12
return A.b(C.Gu(a3,p),$async$Gv)
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
case 19:m=C.d8J(A.O(n,x.N,x.z))
l=C.d8L(A.a([m],x.e))
w=21
return A.b(C.Gu(a3,l),$async$Gv)
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
case 18:case 14:q=C.duO()
w=22
return A.b(C.Gu(a3,q),$async$Gv)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Gv,v)},
d8L(d){var w=A.T(d).j("z<1,m>"),v=new A.z(d,new C.ba5(),w).eA(0),u=new A.z(d,new C.ba6(),w).eA(0),t=new A.z(d,new C.ba7(),w).eA(0),s=new A.z(d,new C.ba8(),w).eA(0),r=A.be(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.cZa(null,q,u,t,v,s));++q}return r},
aoh(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aoh=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Gv(d),$async$aoh)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d7(t,new C.ba9(),s).eA(0)
p=r.d7(t,new C.baa(),s).eA(0)
o=r.d7(t,new C.bab(),s).eA(0)
n=r.d7(t,new C.bac(),s).eA(0)
m=C.cZa(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Gu(d,t),$async$aoh)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aoh,v)},
Gu(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Gu=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Gu)
case 2:u=g
t=B.a.i(d)
s=J.b3(e,new C.ba4(),x.P)
s=A.E(s,s.$ti.j("a2.E"))
w=3
return A.b(u.al("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.v.aj(s,null)),$async$Gu)
case 3:return A.f(null,v)}})
return A.h($async$Gu,v)},
duO(){var w,v=x.N,u=A.b4(v),t=A.b4(v),s=A.b4(v),r=A.b4(v),q=J.dY(20,x.k)
for(w=0;w<20;++w)q[w]=C.cZa(w,w,t,s,u,r)
return q},
cZa(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jz(),h=d==null,g=D.RA[B.p.ap(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.RA[B.p.ap(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.z(p,new C.ba3(),A.T(p).j("z<1,m>")).fg(0)
u="VND-"+B.a.ak(n,0,4)+"-"+B.a.ak(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.fg(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bE(B.p.l2(i.bx(256),16),2,"0")
s=B.d.bc(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.p.ap(e,20)
k=D.aPx[w]
j=D.aKn[w]
return new C.mv("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bE(B.p.q(e+1),2,"0"),u,k,C.duP(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.K(Date.now(),0,!1).a0().W())},
duP(d,e){var w,v=J.dY(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bE(B.p.l2(d.bx(256),16),2,"0")
return B.d.fg(v)},
cVt:function cVt(d){this.a=d},
cVs:function cVs(d,e){this.a=d
this.b=e},
cVo:function cVo(d){this.a=d},
cVp:function cVp(d){this.a=d},
cVq:function cVq(d){this.a=d},
cVr:function cVr(d,e){this.a=d
this.b=e},
Jr:function Jr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
mv:function mv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bad:function bad(){},
bae:function bae(){},
ba5:function ba5(){},
ba6:function ba6(){},
ba7:function ba7(){},
ba8:function ba8(){},
ba9:function ba9(){},
baa:function baa(){},
bab:function bab(){},
bac:function bac(){},
ba4:function ba4(){},
ba3:function ba3(){},
Gt:function Gt(d,e){this.c=d
this.a=e},
a9m:function a9m(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cpa:function cpa(){},
cp9:function cp9(d,e){this.a=d
this.b=e},
cp7:function cp7(d){this.a=d},
cp8:function cp8(d,e){this.a=d
this.b=e},
cpb:function cpb(d){this.a=d},
cpf:function cpf(d){this.a=d},
cpg:function cpg(d,e){this.a=d
this.b=e},
cpe:function cpe(d,e,f){this.a=d
this.b=e
this.c=f},
cpd:function cpd(d,e){this.a=d
this.b=e},
cpc:function cpc(d,e){this.a=d
this.b=e},
cph:function cph(d){this.a=d},
Rz:function Rz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
azR:function azR(d,e){this.c=d
this.a=e},
Gs:function Gs(d,e){this.c=d
this.a=e},
aAP:function aAP(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cp4:function cp4(d){this.a=d},
cp5:function cp5(d){this.a=d},
cp6:function cp6(d){this.a=d},
cp3:function cp3(d,e){this.a=d
this.b=e},
cp0:function cp0(d){this.a=d},
cp1:function cp1(d){this.a=d},
cp_:function cp_(d,e){this.a=d
this.b=e},
cp2:function cp2(d){this.a=d},
coZ:function coZ(d){this.a=d},
aHi:function aHi(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aHj:function aHj(d,e,f){this.c=d
this.d=e
this.a=f},
aAV:function aAV(d,e){this.c=d
this.a=e},
aHh:function aHh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cBT:function cBT(d){this.a=d},
cBU:function cBU(d){this.a=d},
aC0:function aC0(d){this.a=d},
awk:function awk(d,e){this.c=d
this.a=e},
duN(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.duM(v)
if(u!=null)return new C.ou(w,C.cZ8(u,!1),D.Yv,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.duL(v)
if(t!=null)return new C.ou(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.Yw,"TikTok",q)
s=C.duK(w,v)
if(s!=null)return s
r=C.duJ(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.ou(w,w,D.bfu,"Video",q)
return q},
duK(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ap("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ou(d,"https://www.instagram.com/reel/"+w+u,D.F5,t,null)}v=A.ap("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ou(d,"https://www.instagram.com/p/"+w+u,D.F5,t,null)}return null},
duJ(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.ou(d,"https://www.facebook.com/plugins/video.php?href="+A.eu(2,d,B.aH,!1)+"&show_text=false&width=734",D.Yx,"Facebook",null)},
duM(d){var w,v,u,t=[A.ap(y.c,!0,!1,!1),A.ap("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1),A.ap("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
duL(d){var w,v=A.ap("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.ap("tiktok\\.com/t/(\\w+)",!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
Gw:function Gw(d,e){this.a=d
this.b=e},
ou:function ou(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0v:function a0v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAQ:function aAQ(d,e){var _=this
_.d=$
_.cV$=d
_.aZ$=e
_.c=_.a=null},
aC4:function aC4(d,e){this.c=d
this.a=e},
crK:function crK(d){this.a=d},
crL:function crL(d){this.a=d},
C7:function C7(d,e){this.c=d
this.a=e},
adS:function adS(){},
d8K(d,e,f,g,h,i){return new C.a0w(i,f,h,e,g,d)},
dLc(d){var w=window
w.toString
A.fT(w,"message",new C.cRT(d),!1,x._)},
a0w:function a0w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
a9n:function a9n(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cpi:function cpi(d){this.a=d},
cpq:function cpq(d){this.a=d},
cpo:function cpo(d){this.a=d},
cpm:function cpm(d){this.a=d},
cpn:function cpn(d){this.a=d},
cpk:function cpk(d){this.a=d},
cpp:function cpp(d){this.a=d},
cpl:function cpl(d){this.a=d},
cpj:function cpj(d){this.a=d},
cRT:function cRT(d){this.a=d},
d8E(){var w,v,u
try{v=A.xI()
w=v.gpI(v)
if(J.a1(w)!==0&&!J.t(w,"null")&&!J.cx(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
cZ8(d,e){var w=C.d8E(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eu(2,w,B.aH,!1))
v.push("widget_referrer="+A.eu(2,w,B.aH,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bc(v,"&")},
cZ7(d){var w=A.ap(y.c,!0,!1,!1).d0(d)
return w==null?null:w.b[1]},
d8F(d){var w=A.bs(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bs(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
duG(d,e,f){var w,v,u=C.cZ7(d)
if(u!=null){if(f){w=C.d8E()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.d8F(C.cZ8(u,e))}return C.d8F(d)},
duH(d){if(d<=4)return 0
return B.p.aY(d-1,4)*4},
duI(d){var w
if($.KY().a==null)return!1
w=$.Di().a
return d>=w&&d<w+4},
d8I(){var w=$.aog
if(w!=null)w.a9(0)
$.aog=null
$.Di().sv(0,0)},
d8H(){var w,v,u,t=$.KY()
if(t.a==null)return
w=$.aog
if(w!=null)w.a9(0)
v=$.d8G
if(v<=4){t=t.a
t.toString
C.cZ9(t)
return}w=$.Di()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.cZ9(t)},
cZ9(d){var w=$.aog
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
default:w=null}$.aog=A.dl(A.d3(0,0,0,0,0,w),C.dLn())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Jr.prototype={
C(d){var w=null,v=this.e,u=v?B.ai:B.c,t=A.n(20),s=A.U(B.N.l(0.25),B.n,1),r=A.a4(this.d,B.N,w,w,14)
return A.u(w,A.G(A.a([r,B.eN,A.j(this.c,w,w,w,w,A.l(w,w,v?B.U:B.dj,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.v(u,w,s,t,w,w,B.k),w,w,w,B.eE,w,w,w)}}
C.mv.prototype={
ae(){var w=this
return A.q(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Gt.prototype={
U(){return new C.a9m(A.a([],x.e))},
gfl(){return this.c}}
C.a9m.prototype={
Z(){var w=this
w.a3()
$.Di().ai(0,w.gaqI())
C.dLc(w.gbbT())
w.Uv()},
bbl(){if(this.c!=null)this.p(new C.cpa())},
bbU(){C.d8H()},
n(){$.Di().V(0,this.gaqI())
C.d8I()
$.KY().sv(0,null)
this.a2()},
Uv(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Uv=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Gv(t.a.c),$async$Uv)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cp9(t,s))
$.ba2=J.a1(s)
case 1:return A.f(u,v)}})
return A.h($async$Uv,v)},
QN(){var w=0,v=A.i(x.H),u,t=this,s
var $async$QN=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cp7(t))
w=3
return A.b(C.aoh(t.a.c),$async$QN)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cp8(t,s))
$.ba2=J.a1(t.d)
t.c.F(x.q).f.O(A.bh(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null),null,B.A,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$QN,v)},
bdM(d){var w=this.c
w.toString
A.a9(w,!1).cQ(A.ep(new C.cpb(d),!1,null,x.H))},
bej(){var w=this.c
w.toString
return C.U1(w,J.a1(this.d))},
C(d){var w=this,v=null,u=A.X(d).ax.a===B.S,t=u?B.dF:B.cV,s=A.aQ(v,v,v,v,B.Ds,v,v,v,new C.cpf(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a1(w.d)+")",q=x.p
r=A.G(A.a([s,A.H(new A.AF(A.G(A.a([A.H(new A.J(B.ic,A.j(r,1,B.ad,v,v,A.l(v,v,u?B.c:B.W,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aU(!1,B.M,!0,v,A.b_(!1,v,!0,new A.J(B.aF,A.a4(B.eZ,B.N,v,v,28),v),B.bO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbei(),v,v,v,v,v,v,v),B.h,B.D,0,v,v,v,v,v,B.a1)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.cI(!0,A.C(A.a([new A.J(D.Mz,r,v),A.H(w.e?B.kG:new A.i6($.KY(),new C.cpg(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0)
return A.cn(v,t,s,v,!1,!1,A.ajd(B.N,B.zv,B.l3,D.bIu,w.e?v:new C.cph(w)),v)}}
C.Rz.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.c.l(0.1),B.n,1),q=A.a([new A.ag(0,B.w,B.N.l(0.18),B.cl,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a0v(n,!0,!C.duI(w),"Fold "+(B.p.aY(w,4)+1)+"/"+B.p.aY(v.e+4-1,4),u)
n=w}else n=A.u(u,A.C(A.a([A.a4(B.hG,B.kN,u,u,22),B.ak,A.j("YouTube",u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.at,B.f,0,B.l),B.h,B.uD,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aU(!1,B.M,!0,u,A.b_(!1,t,!0,A.C(A.a([A.H(A.u(u,A.cR(p,A.hF(A.C(A.a([new C.azR(o,u),A.H(n,1),A.u(u,A.G(A.a([A.a4(B.rl,B.N.l(0.85),u,u,9),D.bqC,A.j("Tap",u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.at,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aki,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,u,u,new A.v(u,u,r,s,q,D.Qx,B.k),u,u,u,B.eG,u,u,u),1),B.ak,A.j(o.b,1,B.ad,u,u,A.l(u,u,A.X(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,1,B.ad,u,u,A.l(u,u,A.X(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,1,B.ad,u,u,A.l(u,u,B.N.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.D,0,u,u,u,u,u,B.a1)}}
C.azR.prototype={
C(d){var w=null
return A.u(w,A.G(A.a([A.H(A.j(B.d.gar(this.c.c.split("-")),w,B.ad,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.a4(B.or,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,B.Mo,w,w,w)}}
C.Gs.prototype={
U(){return new C.aAP()}}
C.aAP.prototype={
C(d){var w=null,v=A.X(d).ax.a===B.S,u=v?B.dF:B.cV,t=A.aQ(w,w,w,w,B.Ds,w,w,w,new C.cp4(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cn(w,u,A.cI(!0,A.C(A.a([new A.J(D.Mz,A.G(A.a([t,A.H(new A.AF(A.G(A.a([A.H(new A.J(B.ic,A.j(s.b+" \xb7 "+s.c,1,B.ad,w,w,A.l(w,w,v?B.c:B.W,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aU(!1,B.M,!0,w,A.b_(!1,w,!0,new A.J(B.aF,A.a4(B.eZ,B.N,w,w,28),w),B.bO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cp5(d),w,w,w,w,w,w,w),B.h,B.D,0,w,w,w,w,w,B.a1)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.H(new A.i6($.KY(),new C.cp6(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.a2,!0,!0),w,!1,!1,w,w)}}
C.aHi.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ag(0,B.w,B.N.l(0.35),B.en,28),new A.ag(0,B.w,B.q.l(0.45),B.cv,18)],x.V),o=A.U(B.c.l(0.12),B.n,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.d8K(new A.dA(v+"_full_"+u,x.W),!1,u,!1,w.gaFf(),v+"_full")
w=v}else w=new C.aAV(t.r,s)}else w=new C.awk(m,s)
else w=D.bVy
return A.u(s,A.cR(n,A.hF(A.C(A.a([new C.aHj(m,l,s),A.H(w,1),new C.aHh(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.av),B.h,s,s,new A.v(s,s,o,q,p,D.Qx,B.k),s,r*2.05,s,B.bf,s,s,r)}}
C.aHj.prototype={
C(d){var w,v,u,t,s=null,r=new A.K(Date.now(),0,!1),q=A.dL(r)
r=A.ho(r)
w=new A.dc(q,r)
v=w.gG5()===0?12:w.gG5()
r=B.a.bE(B.p.q(r),2,"0")
q=(q<12?B.eB:B.h6)===B.eB?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,B.n4,s,s,s),B.b7,A.j(u.b,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bb,D.auj,B.dA,D.aty,B.dA,D.aun],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.ak,A.G(A.a([A.a4(B.Dm,B.N.l(0.9),s,s,12),B.dA,A.H(A.j(u.c,s,B.ad,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.u(s,A.C(q,B.i,B.e,B.f,0,B.l),B.h,B.a8,s,s,s,s,s,D.al0,s,s,s)}}
C.aAV.prototype={
C(d){var w=null
return A.u(w,A.aT(A.C(A.a([A.a4(B.wc,B.c.l(0.35),w,w,40),B.E,A.j("No video yet",w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.j("Tap search above to paste a link",w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.er(D.axC,D.bGr,this.c,A.em(w,w,w,w,w,w,w,w,w,B.N,w,w,w,w,w,new A.aM(B.N.l(0.5),1,B.n,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.uD,w,w,w,w,w,w,w,w,1/0)}}
C.aHh.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aqB(B.P3,"YouTube",s===0,r,new C.cBT(u))
s=u.aqB(B.k3,"Device",s===1,r,new C.cBU(u))
w=r?"Power off":"Power on"
v=r?D.P4:D.arB
return A.u(t,A.G(A.a([q,B.Y,s,B.b7,A.aQ(t,t,t,t,A.a4(v,r?B.aW:B.dy,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cZ)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a8,t,t,t,t,t,D.akN,t,t,t)},
aqB(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aY
else w=f?B.N:B.a7
v=f&&g?B.N.l(0.15):B.D
u=A.n(10)
t=g?h:s
return A.H(A.aU(!1,B.M,!0,u,A.b_(!1,A.n(10),!0,new A.J(B.kX,A.C(A.a([A.a4(d,w,s,s,18),A.j(e,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.a1),1)}}
C.aC0.prototype={
C(d){return D.abs}}
C.awk.prototype={
C(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,B.iJ,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qm("Serial",u.c),q=w.qm("Model",u.d),p=w.qm("Device ID",u.e),o=w.qm("IMEI",u.r),n=w.qm("MAC",u.f),m=w.qm("OS",u.w+" "+u.x),l=w.qm("Location",u.y+", "+u.z),k=w.qm("Coordinates",B.j.a1(u.Q,4)+", "+B.j.a1(u.as,4)),j=w.qm("Timezone",u.at)
u=u.ax
return A.e5(A.a([t,B.ak,s,B.Q,r,q,p,o,n,m,l,k,j,w.qm("Provisioned",u.length>=10?B.a.ak(u,0,10):u)],x.p),v,B.aF,v,v,B.X,!1)},
qm(d,e){var w=null
return new A.J(B.bW,A.C(A.a([A.j(d.toUpperCase(),w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.c7,A.j(e,w,w,w,w,D.bxm,w,w,w)],x.p),B.t,B.e,B.f,0,B.l),w)}}
C.Gw.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ou.prototype={
gaFf(){var w=this.c
return w===D.Yv||w===D.Yw||w===D.F5||w===D.Yx}}
C.a0v.prototype={
U(){return new C.aAQ(null,null)}}
C.aAQ.prototype={
Z(){this.a3()
var w=A.bH(null,B.qE,null,1,null,this)
w.mf(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aOE()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.eo(t,new A.v(t,t,t,t,t,new A.ar(B.dD,B.ch,B.y,A.a([B.D,B.q.l(0.55)],x.O),t,t),B.k),B.bL),q=x.Y,p=u.d
p===$&&A.c()
p=A.cA(B.hy,p,t)
w=B.c.l(0.92)
q=A.aT(new A.dC(new A.ba(p,new A.br(0.72,1,q),q.j("ba<bq.T>")),!1,A.a4(B.hG,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.kN
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aC4(s,t),r,q,A.b7(t,A.u(t,A.j(v,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.v(p,t,t,w,t,t,B.k),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.b7(t,A.j(r,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.b7(3,A.j(r.d,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aY(B.a9,t,B.b2,B.m,s,t)}}
C.aC4.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.km(u,new C.crK(this),B.bs,!0,w,w,new C.crL(this),w)
return new C.C7(v,w)}}
C.C7.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.qm,B.Jj],x.O),B.hG)
break
case 1:w=new A.aI(A.a([B.uD,D.af2],x.O),B.j9)
break
case 2:w=new A.aI(A.a([D.agE,D.aeA],x.O),B.wi)
break
case 3:w=new A.aI(A.a([B.W,B.dk],x.O),B.wl)
break
case 4:w=new A.aI(A.a([B.a8,B.ai],x.O),B.mp)
break
default:w=u}v=w.a
return A.u(u,A.aT(A.a4(w.b,B.N.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.v(u,u,u,u,u,new A.ar(B.al,B.au,B.y,v,u,u),B.k),u,u,u,u,u,u,u)}}
C.adS.prototype={
n(){var w=this,v=w.aZ$
if(v!=null)v.V(0,w.gdN())
w.aZ$=null
w.a2()},
bq(){this.bP()
this.bJ()
this.dO()}}
C.a0w.prototype={
U(){return new C.a9n()}}
C.a9n.prototype={
btQ(d,e){var w=C.cZ7(d)
if(w!=null)return C.cZ8(w,e)
return d},
a2G(d,e){var w,v=this,u=C.cZ7(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.btQ(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.duG(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
brM(){var w,v=this
if(v.w)return
v.p(new C.cpi(v))
w=v.e
if(w!=null)v.a2G(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aF()
u.d=w
try{$.KZ()
$.pa().uw(w,new C.cpq(u),!0)}catch(v){u.r=!0
u.f=!1}},
aQ(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cpj(v))
w=v.e
w.toString
v.a2G(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.a4(B.Ph,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.z,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.K,n,n)],v))
return A.hF(A.aT(new A.J(new A.V(12,12,12,12),A.C(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.ajQ(n,B.t5,w)],v)
if(o.f)w.push(A.hF(A.aT(new A.ao(28,28,D.abW,n),n,n,n),B.c5,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.n(14)
r=A.U(B.aY,B.n,1)
q=A.a4(B.Pj,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.f7(0,A.aU(!1,B.M,!0,n,A.b_(!1,n,!0,A.aT(A.u(n,A.G(A.a([q,B.Y,A.j("Tap for sound",n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.v(t,n,r,s,n,n,B.k),n,n,n,D.LZ,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbrL(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.a1)))}return new A.aY(B.a9,n,B.b2,B.m,w,n)}}
var z=a.updateTypes(["m(mv)","~()","Gt(Q)","mv(W<@,@>)","a0(mv)","W<m,@>(mv)","ay<~>()","Gs(Q)","i6<R>(Q,ou?,p?)","Rz(Q,R)","tR(Q,ou?,p?)","C7(Q,ak,dk?)"])
C.cVt.prototype={
$1(d){return new C.Gt(this.a,null)},
$S:z+2}
C.cVs.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.X(d).ax.a===B.S,l=A.ax(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.cp,B.W],j):A.a([B.c,B.ab],j),h=A.a([new A.ag(0,B.w,B.N.l(0.22),B.en,32)],x.V),g=A.U(m?B.bo:B.N.l(0.18),B.n,1),f=A.n(28),e=B.N.l(m?0.35:0.14)
j=A.a([e,B.T.l(m?0.18:0.08)],j)
e=A.u(n,D.atd,B.h,n,n,new A.v(B.N.l(0.18),n,A.U(B.N.l(0.45),B.n,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.C(A.a([w,B.ak,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,A.l(n,n,m?B.U:B.aJ,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.t,B.e,B.f,0,B.l),1)
j=A.u(n,A.G(A.a([e,B.fl,w,A.aQ(n,n,n,n,A.a4(B.cE,m?B.a7:B.c5,n,n,n),n,n,n,new C.cVo(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.v(n,n,n,n,n,new A.ar(B.a0,B.a4,B.y,j,n,n),B.k),n,n,n,B.M8,n,n,n)
e=A.ek(B.bN,A.a([new C.Jr("YouTube",B.Dl,m,n),new C.Jr("TikTok",B.j9,m,n),new C.Jr("Instagram",B.wi,m,n),new C.Jr("Facebook",B.wl,m,n)],v),8,8)
w=this.b
u=A.l(n,n,m?B.c:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bB:B.fs,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ai:B.cV
r=A.a4(B.k4,B.N.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.bo:B.b1
u=A.C(A.a([e,B.ar,A.au(n,B.F,!0,n,!0,B.m,n,A.av(),w,n,n,n,n,n,2,A.bg(n,new A.b5(4,q,B.J),n,n,n,n,n,n,!0,new A.b5(4,p,new A.aM(o,1,B.n,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b5(4,A.n(16),B.Ia),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.r,!0,n,!0,n,!1,n,B.I,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.B,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.G,n,B.L,n,n,n,n)],v),B.ae,B.e,B.f,0,B.l)
e=A.iY(D.ath,D.bMa,new C.cVp(d),A.k0(n,n,n,n,n,n,n,n,n,n,n,m?B.aC:B.aJ,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.eo(A.cR(f,A.C(A.a([j,new A.J(D.am1,u,n),new A.J(D.am9,A.G(A.a([e,B.b7,A.bQ(!1,A.j("Cancel",n,n,n,n,A.l(n,n,m?B.U:B.Z,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.cVq(d),n,n),B.Y,A.dI(D.axm,D.bMv,new C.cVr(d,w),A.bA(B.N,n,n,n,B.c,n,D.LZ,n,new A.bG(A.n(14),B.J),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.ae,B.e,B.P,0,B.l),B.av),new A.v(n,n,g,k,h,new A.ar(B.al,B.au,B.y,i,n,n),B.k),B.bL),n)},
$S:61}
C.cVo.prototype={
$0(){A.a9(this.a,!1).T(null)
return null},
$S:0}
C.cVp.prototype={
$0(){C.d8I()
$.KY().sv(0,null)
A.a9(this.a,!1).T(null)},
$S:0}
C.cVq.prototype={
$0(){A.a9(this.a,!1).T(null)
return null},
$S:0}
C.cVr.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a9(this.a,!1).T(w)
return null},
$S:0}
C.bad.prototype={
$1(d){return C.d8J(A.O(d,x.N,x.z))},
$S:z+3}
C.bae.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.ba5.prototype={
$1(d){return d.c},
$S:z+0}
C.ba6.prototype={
$1(d){return d.r},
$S:z+0}
C.ba7.prototype={
$1(d){return d.f},
$S:z+0}
C.ba8.prototype={
$1(d){return d.at},
$S:z+0}
C.ba9.prototype={
$1(d){return d.c},
$S:z+0}
C.baa.prototype={
$1(d){return d.r},
$S:z+0}
C.bab.prototype={
$1(d){return d.f},
$S:z+0}
C.bac.prototype={
$1(d){return d.at},
$S:z+0}
C.ba4.prototype={
$1(d){return d.ae()},
$S:z+5}
C.ba3.prototype={
$1(d){return B.a.bE(B.p.l2(d,16),2,"0").toUpperCase()},
$S:73}
C.cpa.prototype={
$0(){},
$S:0}
C.cp9.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cp7.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cp8.prototype={
$0(){var w=this.a,v=A.E(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cpb.prototype={
$1(d){return new C.Gs(this.a,null)},
$S:z+7}
C.cpf.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cpg.prototype={
$3(d,e,f){return new A.i6($.Di(),new C.cpe(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cpe.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.A6(d,k,x.Q)
w=w==null?k:w.gkj()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.N.l(0.12)
s=A.n(12)
r=A.U(B.N.l(0.35),B.n,1)
q=A.a4(B.hG,B.N,k,k,18)
p=j.d
o=J.a1(l.a.d)
n=$.Di().a
m=B.j.aE(n+4,1,o)
t=A.a([A.u(k,A.G(A.a([q,B.Y,A.H(A.j("Now playing "+p+" \xb7 "+("Devices "+A.o(n+1)+"\u2013"+m+" of "+o),k,k,k,k,A.l(k,k,l.c?B.c:B.W,k,k,k,k,k,k,k,k,12,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.v(t,k,r,s,k,k,B.k),k,k,B.cs,B.eF,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.d.A(t,A.a([A.cR(s,new A.is(1.7777777777777777,C.d8K(new A.dA("fleet_master_"+r,x.W),!0,r,!0,j.gaFf(),"fleet_master"),k),B.av),B.Q],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a1(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,A.l(k,k,A.X(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.zf(0,B.m,k,B.r,k,k,k,k,!1,k,B.X,!1,A.a([new A.jY(new A.J(B.Br,A.C(u,B.t,B.e,B.f,0,B.l),k),k),new A.oF(D.aks,A.arN(new A.nC(new C.cpd(i,j),J.a1(i.d),!1,!0,!0,A.vw(),k),D.brh),k)],w))},
$S:1546}
C.cpd.prototype={
$2(d,e){var w=this.a,v=J.r(w.d,e)
return new C.Rz(v,e,J.a1(w.d),new C.cpc(w,v),this.b,null)},
$S:z+9}
C.cpc.prototype={
$0(){return this.a.bdM(this.b)},
$S:0}
C.cph.prototype={
$0(){this.a.QN()
return null},
$S:0}
C.cp4.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cp5.prototype={
$0(){C.U1(this.a,$.ba2)
return null},
$S:0}
C.cp6.prototype={
$3(d,e,f){return A.fE(new C.cp3(this.a,e))},
$S:z+10}
C.cp3.prototype={
$2(d,e){var w,v=null,u=B.j.aE(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aT(A.cr(A.C(A.a([A.j(r,v,v,v,v,A.l(v,v,A.X(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),B.ar,new C.aHi(u,s.a.c,s.e,s.d,new C.cp0(s),new C.cp1(s),new C.cp2(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.r,v,B.vz,v,v,B.X),v,v,v)},
$S:1547}
C.cp0.prototype={
$0(){var w=this.a.c
w.toString
C.U1(w,$.ba2)
return null},
$S:0}
C.cp1.prototype={
$1(d){var w=this.a
return w.p(new C.cp_(w,d))},
$S:36}
C.cp_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cp2.prototype={
$0(){var w=this.a
return w.p(new C.coZ(w))},
$S:0}
C.coZ.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cBT.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cBU.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.crK.prototype={
$3(d,e,f){return new C.C7(this.a.c,null)},
$S:z+11}
C.crL.prototype={
$3(d,e,f){if(f==null)return e
return new A.aY(B.a9,null,B.b2,B.m,A.a([new C.C7(this.a.c,null),D.abl],x.p),null)},
$C:"$3",
$R:3,
$S:431}
C.cpi.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cpq.prototype={
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
w.a2G(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fT(v,"load",new C.cpo(w),!1,u)
v=w.e
v.toString
A.fT(v,"error",new C.cpp(w),!1,u)
w=w.e
w.toString
return w},
$S:1548}
C.cpo.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cpm(w))
A.bN(B.A,new C.cpn(w),x.H)}},
$S:41}
C.cpm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cpn.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cpk(w))},
$S:12}
C.cpk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cpp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cpl(w))},
$S:41}
C.cpl.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cpj.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cRT.prototype={
$1(d){var w,v,u,t,s=new A.BI([],[]).Fn(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.t(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.v.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.r(w,"info")
if(J.t(J.r(w,"event"),"onStateChange")&&J.t(v,0)){this.a.$0()
return}if(J.t(J.r(w,"event"),"infoDelivery")&&s.b(v)&&J.t(J.r(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1549};(function aliases(){var w=C.adS.prototype
w.aOE=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.a9m.prototype,"gaqI","bbl",1)
w(u,"gbbT","bbU",1)
w(u,"gbei","bej",6)
w(C.a9n.prototype,"gbrL","brM",1)
v(C,"dLn","d8H",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.vP,[C.cVt,C.cVs,C.bad,C.bae,C.ba5,C.ba6,C.ba7,C.ba8,C.ba9,C.baa,C.bab,C.bac,C.ba4,C.ba3,C.cpb,C.cpg,C.cpe,C.cp6,C.cp1,C.crK,C.crL,C.cpq,C.cpo,C.cpp,C.cRT])
v(A.Vw,[C.cVo,C.cVp,C.cVq,C.cVr,C.cpa,C.cp9,C.cp7,C.cp8,C.cpf,C.cpc,C.cph,C.cp4,C.cp5,C.cp0,C.cp_,C.cp2,C.coZ,C.cBT,C.cBU,C.cpi,C.cpm,C.cpn,C.cpk,C.cpl,C.cpj])
v(A.aD,[C.Jr,C.Rz,C.azR,C.aHi,C.aHj,C.aAV,C.aHh,C.aC0,C.awk,C.aC4,C.C7])
v(A.ak,[C.mv,C.ou])
v(A.ae,[C.Gt,C.Gs,C.a0v,C.a0w])
v(A.af,[C.a9m,C.aAP,C.adS,C.a9n])
v(A.Vx,[C.cpd,C.cp3])
u(C.Gw,A.axb)
u(C.aAQ,C.adS)
w(C.adS,A.eb)})()
A.dc_(b.typeUniverse,JSON.parse('{"Gt":{"ae":[],"p":[]},"Rz":{"aD":[],"p":[]},"Gs":{"ae":[],"p":[]},"Jr":{"aD":[],"p":[]},"a9m":{"af":["Gt"]},"azR":{"aD":[],"p":[]},"aAP":{"af":["Gs"]},"aHi":{"aD":[],"p":[]},"aHj":{"aD":[],"p":[]},"aAV":{"aD":[],"p":[]},"aHh":{"aD":[],"p":[]},"aC0":{"aD":[],"p":[]},"awk":{"aD":[],"p":[]},"a0v":{"ae":[],"p":[]},"C7":{"aD":[],"p":[]},"aAQ":{"af":["a0v"]},"aC4":{"aD":[],"p":[]},"a0w":{"ae":[],"p":[]},"a9n":{"af":["a0w"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.bl
return{V:w("ac<ag>"),O:w("ac<A>"),e:w("ac<mv>"),s:w("ac<m>"),p:w("ac<p>"),t:w("ac<R>"),X:w("ab<mv>"),a:w("ab<@>"),P:w("W<m,@>"),f:w("W<@,@>"),w:w("mr"),_:w("A1"),k:w("mv"),N:w("m"),Y:w("br<a7>"),W:w("dA<m>"),J:w("i6<R>"),j:w("i6<ou?>"),E:w("xQ<cy>"),q:w("Se"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.br0=new A.ao(18,18,B.J0,null)
D.abl=new A.dj(B.O,null,null,D.br0,null)
D.P4=new A.P(983224,"MaterialIcons",!1)
D.avP=new A.a6(D.P4,48,B.aY,null,null,null)
D.bx2=new A.M(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bH6=new A.y("Powered off",null,D.bx2,null,null,null,null,null,null,null,null)
D.aIG=w([D.avP,B.z,D.bH6],x.p)
D.ahW=new A.eT(B.X,B.e,B.P,B.i,null,B.l,null,0,D.aIG,null)
D.abs=new A.dj(B.O,null,null,D.ahW,null)
D.abW=new A.h6(2,null,null,null,null,B.U,null,null,null,null)
D.aeA=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.af2=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.agE=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.aki=new A.V(0,3,0,3)
D.aks=new A.V(10,0,10,88)
D.akN=new A.V(12,6,12,10)
D.al0=new A.V(14,8,14,6)
D.LZ=new A.V(18,12,18,12)
D.am1=new A.V(20,18,20,8)
D.am9=new A.V(20,8,20,20)
D.Mz=new A.V(8,6,15,8)
D.arB=new A.P(983222,"MaterialIcons",!1)
D.atd=new A.a6(B.hG,26,B.N,null,null,null)
D.ath=new A.a6(B.Ob,18,null,null,null,null)
D.aty=new A.a6(B.or,14,B.U,null,null,null)
D.arV=new A.P(983420,"MaterialIcons",!1)
D.auj=new A.a6(D.arV,14,B.U,null,null,null)
D.aqg=new A.P(62895,"MaterialIcons",!1)
D.aun=new A.a6(D.aqg,14,B.U,null,null,null)
D.axm=new A.a6(B.ja,20,null,null,null,null)
D.axC=new A.a6(B.eZ,16,null,null,null,null)
D.aKN=w([B.ai,B.W],x.O)
D.Qx=new A.ar(B.al,B.au,B.y,D.aKN,null,null)
D.bkY=new A.aI("NGMY OS","14.2.1")
D.bjT=new A.aI("VirtualDroid","13.8.4")
D.bjS=new A.aI("NGMY OS","15.0.0")
D.bkx=new A.aI("VirtualDroid","14.1.2")
D.bjQ=new A.aI("NGMY Tab OS","12.9.7")
D.bjO=new A.aI("NGMY OS","13.5.3")
D.bjE=new A.aI("VirtualDroid","15.2.0")
D.bka=new A.aI("NGMY OS","14.8.1")
D.bkD=new A.aI("NGMY Tab OS","13.2.4")
D.bl7=new A.aI("VirtualDroid","12.6.9")
D.bjA=new A.aI("NGMY OS","16.0.1")
D.bjr=new A.aI("VirtualDroid","14.9.0")
D.bkQ=new A.aI("NGMY Tab OS","14.0.3")
D.bk_=new A.aI("NGMY OS","13.1.8")
D.bjz=new A.aI("VirtualDroid","13.4.5")
D.bjN=new A.aI("NGMY OS","15.3.2")
D.bkE=new A.aI("NGMY Tab OS","12.4.1")
D.bkS=new A.aI("VirtualDroid","16.1.0")
D.bk9=new A.aI("NGMY OS","14.4.6")
D.bkZ=new A.aI("VirtualDroid","15.0.8")
D.aKn=w([D.bkY,D.bjT,D.bjS,D.bkx,D.bjQ,D.bjO,D.bjE,D.bka,D.bkD,D.bl7,D.bjA,D.bjr,D.bkQ,D.bk_,D.bjz,D.bjN,D.bkE,D.bkS,D.bk9,D.bkZ],A.bl("ac<+(m,m)>"))
D.bn9=new A.e7(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bmI=new A.e7(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bmD=new A.e7(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bmM=new A.e7(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bmz=new A.e7(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bmO=new A.e7(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bnb=new A.e7(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bmA=new A.e7(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bmH=new A.e7(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bmQ=new A.e7(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bmy=new A.e7(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bn3=new A.e7(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bn0=new A.e7(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bmG=new A.e7(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bmY=new A.e7(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bmX=new A.e7(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bmx=new A.e7(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bmL=new A.e7(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bmV=new A.e7(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bn_=new A.e7(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.RA=w([D.bn9,D.bmI,D.bmD,D.bmM,D.bmz,D.bmO,D.bnb,D.bmA,D.bmH,D.bmQ,D.bmy,D.bn3,D.bn0,D.bmG,D.bmY,D.bmX,D.bmx,D.bmL,D.bmV,D.bn_],A.bl("ac<+(m,m,a7,a7,m)>"))
D.aPx=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.Yv=new C.Gw(0,"youtube")
D.Yw=new C.Gw(1,"tiktok")
D.F5=new C.Gw(2,"instagram")
D.Yx=new C.Gw(3,"facebook")
D.bfu=new C.Gw(4,"other")
D.bqC=new A.ao(3,null,null,null)
D.brh=new A.iW(4,10,8,0.52,null)
D.bI3=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bui=new A.aS(D.bI3,null,null,null,null,null,null,null,null,null,null,null,null,B.A,!1,null,null,null,B.m,null)
D.bxm=new A.M(!0,B.c,null,null,null,null,11,B.aa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bGr=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bIu=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bMa=new A.y("Stop",null,null,null,null,null,null,null,null,null,null)
D.bMv=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null)
D.bVy=new C.aC0(null)})();(function staticFields(){$.d8G=20
$.aog=null
$.ba2=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dPy","Di",()=>A.Qk(0))
w($,"dPz","KY",()=>A.Qk(null))})()};
(a=>{a["iqQi8PDDSamXsHpCZfN0l3zcLLI="]=a.current})($__dart_deferred_initializers__);