((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ef0(d,e){A.a7(d,!1).cA(A.eE(new C.dhu(e),!0,null,x.H))},
Z2(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Z2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OO()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b3(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.dht(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Z2)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dVr(r)
if(q==null){d.G(x.q).f.R(D.cJo)
w=1
break}w=4
return A.b(A.bR(B.i8,null,x.H),$async$Z2)
case 4:if(d.e==null){w=1
break}n=B.l.Z(e,1,999)
$.dxH=n
p=C.dVl(n)
n=$.Gb()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dlE(q)
d.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
dxK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aY(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aY(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oc(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JH(d){return C.dVu(d)},
dVu(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JH=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$JH)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a6(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aG(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eP(r,x.f)
k=A.ds(k,new C.bn3(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.B(new A.ag(k,new C.bn4(),j),j.j("G.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dxM(q)
w=12
return A.b(C.JG(a3,p),$async$JH)
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
case 9:case 5:o=A.aN(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.I.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dxK(A.Q(n,x.N,x.z))
l=C.dxM(A.a([m],x.e))
w=21
return A.b(C.JG(a3,l),$async$JH)
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
case 18:case 14:q=C.dVs()
w=22
return A.b(C.JG(a3,q),$async$JH)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JH,v)},
dxM(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.bmW(),w).eI(0),u=new A.D(d,new C.bmX(),w).eI(0),t=new A.D(d,new C.bmY(),w).eI(0),s=new A.D(d,new C.bmZ(),w).eI(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dlF(null,q,u,t,v,s));++q}return r},
awd(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JH(d),$async$awd)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.dc(t,new C.bn_(),s).eI(0)
p=r.dc(t,new C.bn0(),s).eI(0)
o=r.dc(t,new C.bn1(),s).eI(0)
n=r.dc(t,new C.bn2(),s).eI(0)
m=C.dlF(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JG(d,t),$async$awd)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awd,v)},
JG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$JG)
case 2:u=g
t=B.b.i(d)
s=J.b2(e,new C.bmV(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.aw("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.ar(s,null)),$async$JG)
case 3:return A.h(null,v)}})
return A.i($async$JG,v)},
dVs(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dlF(w,w,t,s,u,r)
return q},
dlF(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jB(),h=d==null,g=D.a65[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a65[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bmU(),A.W(p).j("D<1,o>")).fo(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fo(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bj(B.l.ht(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a7(e,20)
k=D.bW8[w]
j=D.bNe[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bj(B.l.n(e+1),2,"0"),u,k,C.dVt(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a4().a_())},
dVt(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bj(B.l.ht(d.bG(256),16),2,"0")
return B.h.fo(v)},
dhu:function dhu(d){this.a=d},
dht:function dht(d,e){this.a=d
this.b=e},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhs:function dhs(d,e){this.a=d
this.b=e},
N8:function N8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
oc:function oc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bn3:function bn3(){},
bn4:function bn4(){},
bmW:function bmW(){},
bmX:function bmX(){},
bmY:function bmY(){},
bmZ:function bmZ(){},
bn_:function bn_(){},
bn0:function bn0(){},
bn1:function bn1(){},
bn2:function bn2(){},
bmV:function bmV(){},
bmU:function bmU(){},
JF:function JF(d,e){this.c=d
this.a=e},
afF:function afF(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cHj:function cHj(){},
cHi:function cHi(d,e){this.a=d
this.b=e},
cHg:function cHg(d){this.a=d},
cHh:function cHh(d,e){this.a=d
this.b=e},
cHk:function cHk(d){this.a=d},
cHo:function cHo(d){this.a=d},
cHp:function cHp(d,e){this.a=d
this.b=e},
cHn:function cHn(d,e,f){this.a=d
this.b=e
this.c=f},
cHm:function cHm(d,e){this.a=d
this.b=e},
cHl:function cHl(d,e){this.a=d
this.b=e},
cHq:function cHq(d){this.a=d},
Wj:function Wj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJ3:function aJ3(d,e){this.c=d
this.a=e},
JE:function JE(d,e){this.c=d
this.a=e},
aK4:function aK4(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cHd:function cHd(d){this.a=d},
cHe:function cHe(d){this.a=d},
cHf:function cHf(d){this.a=d},
cHc:function cHc(d,e){this.a=d
this.b=e},
cH9:function cH9(d){this.a=d},
cHa:function cHa(d){this.a=d},
cH8:function cH8(d,e){this.a=d
this.b=e},
cHb:function cHb(d){this.a=d},
cH7:function cH7(d){this.a=d},
aQV:function aQV(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQW:function aQW(d,e,f){this.c=d
this.d=e
this.a=f},
aKa:function aKa(d,e){this.c=d
this.a=e},
aQU:function aQU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cWx:function cWx(d){this.a=d},
cWy:function cWy(d){this.a=d},
aLr:function aLr(d){this.a=d},
aFk:function aFk(d,e){this.c=d
this.a=e},
dVr(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dVq(v)
if(u!=null)return new C.qh(w,C.dlD(u,!1),D.ady,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dVp(v)
if(t!=null)return new C.qh(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adz,"TikTok",q)
s=C.dVo(w,v)
if(s!=null)return s
r=C.dVn(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qh(w,w,D.cqZ,"Video",q)
return q},
dVo(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qh(d,"https://www.instagram.com/reel/"+w+u,D.NB,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qh(d,"https://www.instagram.com/p/"+w+u,D.NB,t,null)}return null},
dVn(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qh(d,"https://www.facebook.com/plugins/video.php?href="+A.f4(2,d,B.bc,!1)+"&show_text=false&width=734",D.adA,"Facebook",null)},
dVq(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dVp(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
JI:function JI(d,e){this.a=d
this.b=e},
qh:function qh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a63:function a63(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aK5:function aK5(d,e){var _=this
_.d=$
_.cX$=d
_.aV$=e
_.c=_.a=null},
aLw:function aLw(d,e){this.c=d
this.a=e},
cLU:function cLU(d){this.a=d},
cLV:function cLV(d){this.a=d},
F0:function F0(d,e){this.c=d
this.a=e},
ako:function ako(){},
dxL(d,e,f,g,h,i){return new C.a64(i,f,h,e,g,d)},
edz(d){var w=window
w.toString
A.hi(w,"message",new C.ddt(d),!1,x._)},
a64:function a64(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afG:function afG(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHr:function cHr(d){this.a=d},
cHz:function cHz(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHv:function cHv(d){this.a=d},
cHw:function cHw(d){this.a=d},
cHt:function cHt(d){this.a=d},
cHy:function cHy(d){this.a=d},
cHu:function cHu(d){this.a=d},
cHs:function cHs(d){this.a=d},
ddt:function ddt(d){this.a=d},
dxF(){var w,v,u
try{v=A.At()
w=v.grQ(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dlD(d,e){var w=C.dxF(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f4(2,w,B.bc,!1))
v.push("widget_referrer="+A.f4(2,w,B.bc,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bn(v,"&")},
dlC(d){var w=A.aq(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dxG(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVk(d,e,f){var w,v,u=C.dlC(d)
if(u!=null){if(f){w=C.dxF()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dxG(C.dlD(u,e))}return C.dxG(d)},
dVl(d){if(d<=4)return 0
return B.l.aL(d-1,4)*4},
dVm(d){var w
if($.OO().a==null)return!1
w=$.Gb().a
return d>=w&&d<w+4},
dxJ(){var w=$.awc
if(w!=null)w.ae(0)
$.awc=null
$.Gb().sv(0,0)},
dxI(){var w,v,u,t=$.OO()
if(t.a==null)return
w=$.awc
if(w!=null)w.ae(0)
v=$.dxH
if(v<=4){t=t.a
t.toString
C.dlE(t)
return}w=$.Gb()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dlE(t)},
dlE(d){var w=$.awc
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
default:w=null}$.awc=A.dL(A.dr(0,0,0,0,0,w),C.edO())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.N8.prototype={
C(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.O(B.a7.l(0.25),B.w,1),r=A.Y(this.d,B.a7,w,w,14)
return A.t(w,A.H(A.a([r,B.fR,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c2,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fI,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JF.prototype={
U(){return new C.afF(A.a([],x.e))},
ge0(){return this.c}}
C.afF.prototype={
a0(){var w=this
w.a6()
$.Gb().ao(0,w.gawR())
C.edz(w.gbmm())
w.YA()},
blK(){if(this.c!=null)this.p(new C.cHj())},
bmn(){C.dxI()},
q(){$.Gb().Y(0,this.gawR())
C.dxJ()
$.OO().sv(0,null)
this.a5()},
YA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JH(t.a.c),$async$YA)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHi(t,s))
$.bmT=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$YA,v)},
Uy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cHg(t))
w=3
return A.b(C.awd(t.a.c),$async$Uy)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHh(t,s))
$.bmT=J.a3(t.d)
t.c.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.O,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Uy,v)},
bof(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.eE(new C.cHk(d),!1,null,x.H))},
boQ(){var w=this.c
w.toString
return C.Z2(w,J.a3(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.fc:B.bx,s=A.aM(v,v,v,v,B.KU,v,v,v,new C.cHo(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.Dr(A.H(A.a([A.I(new A.J(B.j3,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aQ(!1,v,!0,new A.J(B.bd,A.Y(B.h9,B.a7,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gboP(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c5(!0,A.w(A.a([new A.J(D.Wq,r,v),A.I(w.e?B.mZ:new A.jd($.OO(),new C.cHp(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aqk(B.a7,B.Gk,B.me,D.d67,w.e?v:new C.cHq(w)),v)}}
C.Wj.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a7.l(0.18),B.dk,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a63(n,!0,!C.dVm(w),"Fold "+(B.l.aL(w,4)+1)+"/"+B.l.aL(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jI,B.n7,u,u,22),B.aO,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yI,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aQ(!1,t,!0,A.w(A.a([A.I(A.t(u,A.ch(p,A.h_(A.w(A.a([new C.aJ3(o,u),A.I(n,1),A.t(u,A.H(A.a([A.Y(B.B6,B.a7.l(0.85),u,u,9),D.cFc,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aCs,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a_w,B.p),u,u,u,B.fJ,u,u,u),1),B.aO,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a7.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJ3.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gav(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.rA,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.Wg,w,w,w)}}
C.JE.prototype={
U(){return new C.aK4()}}
C.aK4.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.fc:B.bx,t=A.aM(w,w,w,w,B.KU,w,w,w,new C.cHd(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c5(!0,A.w(A.a([new A.J(D.Wq,A.H(A.a([t,A.I(new A.Dr(A.H(A.a([A.I(new A.J(B.j3,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aQ(!1,w,!0,new A.J(B.bd,A.Y(B.h9,B.a7,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHe(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.jd($.OO(),new C.cHf(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.aj,!0,!0),w,!1,!1,w,w)}}
C.aQV.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a7.l(0.35),B.f2,28),new A.aa(0,B.G,B.A.l(0.45),B.d8,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dxL(new A.dv(v+"_full_"+u,x.W),!1,u,!1,w.gaMt(),v+"_full")
w=v}else w=new C.aKa(t.r,s)}else w=new C.aFk(m,s)
else w=D.dcy
return A.t(s,A.ch(n,A.h_(A.w(A.a([new C.aQW(m,l,s),A.I(w,1),new C.aQU(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a_w,B.p),s,r*2.05,s,B.bR,s,s,r)}}
C.aQW.prototype={
C(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=A.dC(r)
r=A.hL(r)
w=new A.dD(q,r)
v=w.gJj()===0?12:w.gJj()
r=B.b.bj(B.l.n(r),2,"0")
q=(q<12?B.h2:B.j0)===B.h2?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mH,s,s,s),B.bB,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bU,D.aNn,B.eo,D.aMz,B.eo,D.aNr],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aO,A.H(A.a([A.Y(B.KJ,B.a7.l(0.9),s,s,12),B.eo,A.I(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDe,s,s,s)}}
C.aKa.prototype={
C(d){var w=null
return A.t(w,A.aJ(A.w(A.a([A.Y(B.AE,B.e.l(0.35),w,w,40),B.V,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aO,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aQT,D.cUI,this.c,A.eh(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aF(B.a7.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yI,w,w,w,w,w,w,w,w,1/0)}}
C.aQU.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awJ(B.AX,"YouTube",s===0,r,new C.cWx(u))
s=u.awJ(B.lf,"Device",s===1,r,new C.cWy(u))
w=r?"Power off":"Power on"
v=r?D.YU:D.aKA
return A.t(t,A.H(A.a([q,B.am,s,B.bB,A.aM(t,t,t,t,A.Y(v,r?B.bE:B.fw,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dy)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aCZ,t,t,t)},
awJ(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bn
else w=f?B.a7:B.ax
v=f&&g?B.a7.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.W,!0,u,A.aQ(!1,A.m(10),!0,new A.J(B.ni,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLr.prototype={
C(d){return D.asM}}
C.aFk.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lB,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tz("Serial",u.c),q=w.tz("Model",u.d),p=w.tz("Device ID",u.e),o=w.tz("IMEI",u.r),n=w.tz("MAC",u.f),m=w.tz("OS",u.w+" "+u.x),l=w.tz("Location",u.y+", "+u.z),k=w.tz("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tz("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aO,s,B.ab,r,q,p,o,n,m,l,k,j,w.tz("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bd,v,v,B.al,!1)},
tz(d,e){var w=null
return new A.J(B.cP,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cJ,A.d(e,w,w,w,w,w,w,D.cMC,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JI.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qh.prototype={
gaMt(){var w=this.c
return w===D.ady||w===D.adz||w===D.NB||w===D.adA}}
C.a63.prototype={
U(){return new C.aK5(null,null)}}
C.aK5.prototype={
a0(){this.a6()
var w=A.bJ(null,B.v8,null,1,null,this)
w.mX(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWc()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dq(t,new A.r(t,t,t,t,t,new A.ak(B.cN,B.cy,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bS),q=x.Y,p=u.d
p===$&&A.c()
p=A.cw(B.i7,p,t)
w=B.e.l(0.92)
q=A.aJ(new A.d1(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bl.T>")),!1,A.Y(B.jI,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n7
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLw(s,t),r,q,A.aS(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aS(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aS(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.ak,t,B.bb,B.y,s,t)}}
C.aLw.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kr(u,new C.cLU(this),B.c7,B.bO,!0,w,w,new C.cLV(this),w)
return new C.F0(v,w)}}
C.F0.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uN,B.St],x.O),B.jI)
break
case 1:w=new A.aO(A.a([B.yI,D.axe],x.O),B.lg)
break
case 2:w=new A.aO(A.a([D.ayL,D.awG],x.O),B.AL)
break
case 3:w=new A.aO(A.a([B.Y,B.dt],x.O),B.AP)
break
case 4:w=new A.aO(A.a([B.az,B.aN],x.O),B.pb)
break
default:w=u}v=w.a
return A.t(u,A.aJ(A.Y(w.b,B.a7.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aM,B.aR,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ako.prototype={
q(){var w=this,v=w.aV$
if(v!=null)v.Y(0,w.gdE())
w.aV$=null
w.a5()},
by(){this.bO()
this.bK()
this.dF()}}
C.a64.prototype={
U(){return new C.afG()}}
C.afG.prototype={
bG7(d,e){var w=C.dlC(d)
if(w!=null)return C.dlD(w,e)
return d},
a7k(d,e){var w,v=this,u=C.dlC(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bG7(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dVk(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bDY(){var w,v=this
if(v.w)return
v.p(new C.cHr(v))
w=v.e
if(w!=null)v.a7k(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.Gd()
$.pG().uM(w,new C.cHz(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cHs(v))
w=v.e
w.toString
v.a7k(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Z7,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.h_(A.aJ(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1r(n,B.tm,w)],v)
if(o.f)w.push(A.h_(A.aJ(new A.ac(28,28,D.atN,n),n,n,n),B.d2,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bn,B.w,1)
q=A.Y(B.KN,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eH(0,A.aL(!1,B.W,!0,n,A.aQ(!1,n,!0,A.aJ(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.VM,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbDX(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aG(B.ak,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(oc)","~()","JF(S)","oc(Z<@,@>)","a1(oc)","Z<o,@>(oc)","aB<~>()","JE(S)","jd<K>(S,qh?,p?)","Wj(S,K)","tT(S,qh?,p?)","F0(S,al,dP?)"])
C.dhu.prototype={
$1(d){return new C.JF(this.a,null)},
$S:z+2}
C.dht.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aC(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dX,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a7.l(0.22),B.f2,32)],x.V),g=A.O(m?B.ca:B.a7.l(0.18),B.w,1),f=A.m(28),e=B.a7.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMg,B.k,n,n,new A.r(B.a7.l(0.18),n,A.O(B.a7.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aO,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f3,w,A.aM(n,n,n,n,A.Y(B.d7,m?B.ax:B.d2,n,n,n),n,n,n,new C.dhp(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.af,B.ah,B.H,j,n,n),B.p),n,n,n,B.ID,n,n,n)
e=A.el(B.cG,A.a([new C.N8("YouTube",B.KI,m,n),new C.N8("TikTok",B.lg,m,n),new C.N8("Instagram",B.AL,m,n),new C.N8("Facebook",B.AP,m,n)],v),B.ct,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i4,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bx
r=A.Y(B.fL,B.a7.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.Rd),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a8,n,n,n,n)],v),B.aq,B.i,B.j,0,B.q)
e=A.jR(D.aMj,D.d5f,new C.dhq(d),A.iO(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dq(A.ch(f,A.w(A.a([j,new A.J(B.W0,u,n),new A.J(D.aEt,A.H(A.a([e,B.bB,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dhr(d),n,n),B.am,A.dN(D.aQC,D.d62,new C.dhs(d,w),A.bx(B.a7,n,n,n,B.e,n,D.VM,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.aq,B.i,B.a1,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aM,B.aR,B.H,i,n,n),B.p),B.bS),n)},
$S:80}
C.dhp.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhq.prototype={
$0(){C.dxJ()
$.OO().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dhr.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dhs.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bn3.prototype={
$1(d){return C.dxK(A.Q(d,x.N,x.z))},
$S:z+3}
C.bn4.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bmW.prototype={
$1(d){return d.c},
$S:z+0}
C.bmX.prototype={
$1(d){return d.r},
$S:z+0}
C.bmY.prototype={
$1(d){return d.f},
$S:z+0}
C.bmZ.prototype={
$1(d){return d.at},
$S:z+0}
C.bn_.prototype={
$1(d){return d.c},
$S:z+0}
C.bn0.prototype={
$1(d){return d.r},
$S:z+0}
C.bn1.prototype={
$1(d){return d.f},
$S:z+0}
C.bn2.prototype={
$1(d){return d.at},
$S:z+0}
C.bmV.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bmU.prototype={
$1(d){return B.b.bj(B.l.ht(d,16),2,"0").toUpperCase()},
$S:83}
C.cHj.prototype={
$0(){},
$S:0}
C.cHi.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cHg.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cHh.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHk.prototype={
$1(d){return new C.JE(this.a,null)},
$S:z+7}
C.cHo.prototype={
$0(){return A.a7(this.a,!1).eu()},
$S:0}
C.cHp.prototype={
$3(d,e,f){return new A.jd($.Gb(),new C.cHn(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHn.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CU(d,k,x.Q)
w=w==null?k:w.glv()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.l(0.12)
s=A.m(12)
r=A.O(B.a7.l(0.35),B.w,1)
q=A.Y(B.jI,B.a7,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Gb().a
m=B.m.Z(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.fr,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.ji(1.7777777777777777,C.dxL(new A.dv("fleet_master_"+r,x.W),!0,r,!0,j.gaMt(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vM(0,B.y,k,B.D,k,k,k,k,!1,k,B.al,!1,A.a([new A.kz(new A.J(B.Iu,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.om(D.aCB,A.aAh(new A.nu(new C.cHm(i,j),J.a3(i.d),!1,!0,!0,A.tp(),k),D.cFX),k)],w))},
$S:1685}
C.cHm.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wj(v,e,J.a3(w.d),new C.cHl(w,v),this.b,null)},
$S:z+9}
C.cHl.prototype={
$0(){return this.a.bof(this.b)},
$S:0}
C.cHq.prototype={
$0(){this.a.Uy()
return null},
$S:0}
C.cHd.prototype={
$0(){return A.a7(this.a,!1).eu()},
$S:0}
C.cHe.prototype={
$0(){C.Z2(this.a,$.bmT)
return null},
$S:0}
C.cHf.prototype={
$3(d,e,f){return A.fx(new C.cHc(this.a,e))},
$S:z+10}
C.cHc.prototype={
$2(d,e){var w,v=null,u=B.m.Z(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aJ(A.cp(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aS,new C.aQV(u,s.a.c,s.e,s.d,new C.cH9(s),new C.cHa(s),new C.cHb(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oO,v,v,B.al),v,v,v)},
$S:1686}
C.cH9.prototype={
$0(){var w=this.a.c
w.toString
C.Z2(w,$.bmT)
return null},
$S:0}
C.cHa.prototype={
$1(d){var w=this.a
return w.p(new C.cH8(w,d))},
$S:35}
C.cH8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHb.prototype={
$0(){var w=this.a
return w.p(new C.cH7(w))},
$S:0}
C.cH7.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cWx.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cWy.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cLU.prototype={
$3(d,e,f){return new C.F0(this.a.c,null)},
$S:z+11}
C.cLV.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.ak,null,B.bb,B.y,A.a([new C.F0(this.a.c,null),D.at_],x.p),null)},
$C:"$3",
$R:3,
$S:267}
C.cHr.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cHz.prototype={
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
w.a7k(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hi(v,"load",new C.cHx(w),!1,u)
v=w.e
v.toString
A.hi(v,"error",new C.cHy(w),!1,u)
w=w.e
w.toString
return w},
$S:586}
C.cHx.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHv(w))
A.bR(B.O,new C.cHw(w),x.H)}},
$S:45}
C.cHv.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHw.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cHt(w))},
$S:12}
C.cHt.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cHu(w))},
$S:45}
C.cHu.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHs.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.ddt.prototype={
$1(d){var w,v,u,t,s=new A.Ez([],[]).Iz(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1687};(function aliases(){var w=C.ako.prototype
w.aWc=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afF.prototype,"gawR","blK",1)
w(u,"gbmm","bmn",1)
w(u,"gboP","boQ",6)
w(C.afG.prototype,"gbDX","bDY",1)
v(C,"edO","dxI",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yp,[C.dhu,C.dht,C.bn3,C.bn4,C.bmW,C.bmX,C.bmY,C.bmZ,C.bn_,C.bn0,C.bn1,C.bn2,C.bmV,C.bmU,C.cHk,C.cHp,C.cHn,C.cHf,C.cHa,C.cLU,C.cLV,C.cHz,C.cHx,C.cHy,C.ddt])
v(A.a_y,[C.dhp,C.dhq,C.dhr,C.dhs,C.cHj,C.cHi,C.cHg,C.cHh,C.cHo,C.cHl,C.cHq,C.cHd,C.cHe,C.cH9,C.cH8,C.cHb,C.cH7,C.cWx,C.cWy,C.cHr,C.cHv,C.cHw,C.cHt,C.cHu,C.cHs])
v(A.au,[C.N8,C.Wj,C.aJ3,C.aQV,C.aQW,C.aKa,C.aQU,C.aLr,C.aFk,C.aLw,C.F0])
v(A.al,[C.oc,C.qh])
v(A.ae,[C.JF,C.JE,C.a63,C.a64])
v(A.af,[C.afF,C.aK4,C.ako,C.afG])
v(A.a_z,[C.cHm,C.cHc])
u(C.JI,A.aGf)
u(C.aK5,C.ako)
w(C.ako,A.e8)})()
A.dBc(b.typeUniverse,JSON.parse('{"JF":{"ae":[],"p":[]},"Wj":{"au":[],"p":[]},"JE":{"ae":[],"p":[]},"N8":{"au":[],"p":[]},"afF":{"af":["JF"]},"aJ3":{"au":[],"p":[]},"aK4":{"af":["JE"]},"aQV":{"au":[],"p":[]},"aQW":{"au":[],"p":[]},"aKa":{"au":[],"p":[]},"aQU":{"au":[],"p":[]},"aLr":{"au":[],"p":[]},"aFk":{"au":[],"p":[]},"a63":{"ae":[],"p":[]},"F0":{"au":[],"p":[]},"aK5":{"af":["a63"]},"aLw":{"au":[],"p":[]},"a64":{"ae":[],"p":[]},"afG":{"af":["a64"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b7
return{V:w("a5<aa>"),O:w("a5<x>"),e:w("a5<oc>"),s:w("a5<o>"),p:w("a5<p>"),t:w("a5<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o7"),_:w("CR"),k:w("oc"),N:w("o"),Y:w("bn<a9>"),W:w("dv<o>"),J:w("jd<K>"),j:w("jd<qh?>"),E:w("xk<cK>"),q:w("X4"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.YU=new A.N(983224,"MaterialIcons",!1)
D.aP1=new A.a8(D.YU,48,B.bn,null,null,null)
D.cMf=new A.U(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cTE=new A.z("Powered off",null,D.cMf,null,null,null,null,null,null,null,null,null)
D.bKr=w([D.aP1,B.Q,D.cTE],x.p)
D.aA0=new A.f0(B.al,B.i,B.a1,B.o,null,B.q,null,0,D.bKr,null)
D.asM=new A.du(B.T,null,null,D.aA0,null)
D.cFC=new A.ac(18,18,B.Sc,null)
D.at_=new A.du(B.T,null,null,D.cFC,null)
D.atN=new A.hk(2,null,null,null,null,B.a9,null,null,null,null)
D.awG=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axe=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.ayL=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCs=new A.V(0,3,0,3)
D.aCB=new A.V(10,0,10,88)
D.aCZ=new A.V(12,6,12,10)
D.aDe=new A.V(14,8,14,6)
D.VM=new A.V(18,12,18,12)
D.aEt=new A.V(20,8,20,20)
D.Wq=new A.V(8,6,15,8)
D.aKA=new A.N(983222,"MaterialIcons",!1)
D.aMg=new A.a8(B.jI,26,B.a7,null,null,null)
D.aMj=new A.a8(B.Y7,18,null,null,null,null)
D.aMz=new A.a8(B.rA,14,B.a9,null,null,null)
D.aKQ=new A.N(983420,"MaterialIcons",!1)
D.aNn=new A.a8(D.aKQ,14,B.a9,null,null,null)
D.aIY=new A.N(62895,"MaterialIcons",!1)
D.aNr=new A.a8(D.aIY,14,B.a9,null,null,null)
D.aQC=new A.a8(B.jb,20,null,null,null,null)
D.aQT=new A.a8(B.h9,16,null,null,null,null)
D.bO0=w([B.aN,B.Y],x.O)
D.a_w=new A.ak(B.aM,B.aR,B.H,D.bO0,null,null)
D.czj=new A.aO("NGMY OS","14.2.1")
D.cy6=new A.aO("VirtualDroid","13.8.4")
D.cy5=new A.aO("NGMY OS","15.0.0")
D.cyS=new A.aO("VirtualDroid","14.1.2")
D.cy3=new A.aO("NGMY Tab OS","12.9.7")
D.cy1=new A.aO("NGMY OS","13.5.3")
D.cxR=new A.aO("VirtualDroid","15.2.0")
D.cyt=new A.aO("NGMY OS","14.8.1")
D.cyY=new A.aO("NGMY Tab OS","13.2.4")
D.czt=new A.aO("VirtualDroid","12.6.9")
D.cxM=new A.aO("NGMY OS","16.0.1")
D.cxD=new A.aO("VirtualDroid","14.9.0")
D.cza=new A.aO("NGMY Tab OS","14.0.3")
D.cyf=new A.aO("NGMY OS","13.1.8")
D.cxL=new A.aO("VirtualDroid","13.4.5")
D.cy0=new A.aO("NGMY OS","15.3.2")
D.cyZ=new A.aO("NGMY Tab OS","12.4.1")
D.czd=new A.aO("VirtualDroid","16.1.0")
D.cys=new A.aO("NGMY OS","14.4.6")
D.czk=new A.aO("VirtualDroid","15.0.8")
D.bNe=w([D.czj,D.cy6,D.cy5,D.cyS,D.cy3,D.cy1,D.cxR,D.cyt,D.cyY,D.czt,D.cxM,D.cxD,D.cza,D.cyf,D.cxL,D.cy0,D.cyZ,D.czd,D.cys,D.czk],A.b7("a5<+(o,o)>"))
D.cBz=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cB7=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cB2=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cBb=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cAZ=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cBd=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cBB=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cB_=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cB6=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cBf=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cAY=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cBt=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cBq=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cB5=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cBn=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cBm=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cAX=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cBa=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cBk=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cBp=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a65=w([D.cBz,D.cB7,D.cB2,D.cBb,D.cAZ,D.cBd,D.cBB,D.cB_,D.cB6,D.cBf,D.cAY,D.cBt,D.cBq,D.cB5,D.cBn,D.cBm,D.cAX,D.cBa,D.cBk,D.cBp],A.b7("a5<+(o,o,a9,a9,o)>"))
D.bW8=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ady=new C.JI(0,"youtube")
D.adz=new C.JI(1,"tiktok")
D.NB=new C.JI(2,"instagram")
D.adA=new C.JI(3,"facebook")
D.cqZ=new C.JI(4,"other")
D.cFc=new A.ac(3,null,null,null)
D.cFX=new A.ik(4,10,8,0.52,null)
D.cUU=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cJo=new A.aU(D.cUU,null,null,null,null,null,null,null,null,null,null,null,null,B.O,!1,null,null,null,B.y,null)
D.cMC=new A.U(!0,B.e,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUI=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d5f=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d62=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d67=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dcy=new C.aLr(null)})();(function staticFields(){$.dxH=20
$.awc=null
$.bmT=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eiP","Gb",()=>A.UW(0))
w($,"eiQ","OO",()=>A.UW(null))})()};
(a=>{a["OdMArHAoQX5P0yJgmwnDy2qPcjA="]=a.current})($__dart_deferred_initializers__);