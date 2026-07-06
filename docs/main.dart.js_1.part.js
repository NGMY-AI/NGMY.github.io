((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
egd(d,e){A.a7(d,!1).cA(A.eF(new C.dia(e),!0,null,x.H))},
Zp(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Zp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.P3()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.at),t)
w=3
return A.b(A.dp(B.L,new C.di9(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Zp)
case 3:r=g
s.F$=t
s.J$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dWp(r)
if(q==null){d.G(x.q).f.R(D.cKp)
w=1
break}w=4
return A.b(A.bR(B.ib,null,x.H),$async$Zp)
case 4:if(d.e==null){w=1
break}n=B.l.Y(e,1,999)
$.dyt=n
p=C.dWj(n)
n=$.Gm()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dmf(q)
d.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zp,v)},
dyw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aZ(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aZ(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.oc(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
JS(d){return C.dWs(d)},
dWs(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$JS=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$JS)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a4(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.aF(0,a0,null)
w=x.a.b(r)&&J.cO(r)?10:11
break
case 10:k=J.eR(r,x.f)
k=A.dt(k,new C.bnI(),k.$ti.j("G.E"),x.k)
j=A.P(k).j("ag<G.E>")
i=A.C(new A.ag(k,new C.bnJ(),j),j.j("G.E"))
q=i
if(J.a6(q)>=20){u=q
w=1
break}p=C.dyy(q)
w=12
return A.b(C.JR(a3,p),$async$JS)
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
n=B.I.aF(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dyw(A.U(n,x.N,x.z))
l=C.dyy(A.a([m],x.e))
w=21
return A.b(C.JR(a3,l),$async$JS)
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
case 18:case 14:q=C.dWq()
w=22
return A.b(C.JR(a3,q),$async$JS)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JS,v)},
dyy(d){var w=A.X(d).j("D<1,o>"),v=new A.D(d,new C.bnA(),w).ex(0),u=new A.D(d,new C.bnB(),w).ex(0),t=new A.D(d,new C.bnC(),w).ex(0),s=new A.D(d,new C.bnD(),w).ex(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dmg(null,q,u,t,v,s));++q}return r},
awL(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$awL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JS(d),$async$awL)
case 3:t=f
s=x.N
r=J.cf(t)
q=r.de(t,new C.bnE(),s).ex(0)
p=r.de(t,new C.bnF(),s).ex(0)
o=r.de(t,new C.bnG(),s).ex(0)
n=r.de(t,new C.bnH(),s).ex(0)
m=C.dmg(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.JR(d,t),$async$awL)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$awL,v)},
JR(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$JR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$JR)
case 2:u=g
t=B.b.i(d)
s=J.b4(e,new C.bnz(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.au(s,null)),$async$JR)
case 3:return A.h(null,v)}})
return A.i($async$JR,v)},
dWq(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dmg(w,w,t,s,u,r)
return q},
dmg(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jB(),h=d==null,g=D.a6n[B.l.a7(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a6n[B.l.a7(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bny(),A.X(p).j("D<1,o>")).fu(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fu(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bi(B.l.hu(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a7(e,20)
k=D.bWF[w]
j=D.bNL[w]
return new C.oc("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bi(B.l.n(e+1),2,"0"),u,k,C.dWr(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a4().a0())},
dWr(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bi(B.l.hu(d.bG(256),16),2,"0")
return B.h.fu(v)},
dia:function dia(d){this.a=d},
di9:function di9(d,e){this.a=d
this.b=e},
di5:function di5(d){this.a=d},
di6:function di6(d){this.a=d},
di7:function di7(d){this.a=d},
di8:function di8(d,e){this.a=d
this.b=e},
Ni:function Ni(d,e,f,g){var _=this
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
bnI:function bnI(){},
bnJ:function bnJ(){},
bnA:function bnA(){},
bnB:function bnB(){},
bnC:function bnC(){},
bnD:function bnD(){},
bnE:function bnE(){},
bnF:function bnF(){},
bnG:function bnG(){},
bnH:function bnH(){},
bnz:function bnz(){},
bny:function bny(){},
JQ:function JQ(d,e){this.c=d
this.a=e},
ag5:function ag5(d){var _=this
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
cHP:function cHP(d){this.a=d},
cHQ:function cHQ(d,e){this.a=d
this.b=e},
cHO:function cHO(d,e,f){this.a=d
this.b=e
this.c=f},
cHN:function cHN(d,e){this.a=d
this.b=e},
cHM:function cHM(d,e){this.a=d
this.b=e},
cHR:function cHR(d){this.a=d},
WE:function WE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJB:function aJB(d,e){this.c=d
this.a=e},
JP:function JP(d,e){this.c=d
this.a=e},
aKB:function aKB(){var _=this
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
aRr:function aRr(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aRs:function aRs(d,e,f){this.c=d
this.d=e
this.a=f},
aKH:function aKH(d,e){this.c=d
this.a=e},
aRq:function aRq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cX5:function cX5(d){this.a=d},
cX6:function cX6(d){this.a=d},
aLY:function aLY(d){this.a=d},
aFS:function aFS(d,e){this.c=d
this.a=e},
dWp(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dWo(v)
if(u!=null)return new C.ql(w,C.dme(u,!1),D.adR,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dWn(v)
if(t!=null)return new C.ql(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.adS,"TikTok",q)
s=C.dWm(w,v)
if(s!=null)return s
r=C.dWl(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.ql(w,w,D.crS,"Video",q)
return q},
dWm(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dk(e)
if(s!=null){w=s.b[1]
w.toString
return new C.ql(d,"https://www.instagram.com/reel/"+w+u,D.NM,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dk(e)
if(v!=null){w=v.b[1]
w.toString
return new C.ql(d,"https://www.instagram.com/p/"+w+u,D.NM,t,null)}return null},
dWl(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.ql(d,"https://www.facebook.com/plugins/video.php?href="+A.fi(2,d,B.be,!1)+"&show_text=false&width=734",D.adT,"Facebook",null)},
dWo(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dk(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dWn(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dk(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dk(d)
return w==null?null:w.b[1]},
JT:function JT(d,e){this.a=d
this.b=e},
ql:function ql(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6u:function a6u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aKC:function aKC(d,e){var _=this
_.d=$
_.cV$=d
_.aT$=e
_.c=_.a=null},
aM2:function aM2(d,e){this.c=d
this.a=e},
cMr:function cMr(d){this.a=d},
cMs:function cMs(d){this.a=d},
Fc:function Fc(d,e){this.c=d
this.a=e},
akR:function akR(){},
dyx(d,e,f,g,h,i){return new C.a6v(i,f,h,e,g,d)},
eeM(d){var w=window
w.toString
A.hj(w,"message",new C.de4(d),!1,x._)},
a6v:function a6v(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ag6:function ag6(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cHS:function cHS(d){this.a=d},
cI0:function cI0(d){this.a=d},
cHZ:function cHZ(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHY:function cHY(d){this.a=d},
cHV:function cHV(d){this.a=d},
cI_:function cI_(d){this.a=d},
cHW:function cHW(d){this.a=d},
cHU:function cHU(d){this.a=d},
cHT:function cHT(d){this.a=d},
de4:function de4(d){this.a=d},
dWh(){var w,v,u
try{v=A.AE()
w=v.grT(v)
if(J.a6(w)!==0&&!J.v(w,"null")&&!J.cK(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dme(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bn(w,"&")},
bnw(d){var w=A.aq(y.c,!0,!1,!1,!1).dk(d)
return w==null?null:w.b[1]},
dys(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dWi(d,e,f){var w,v,u=C.bnw(d)
if(u!=null){if(f){w=C.dWh()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dys(C.dme(u,e))}return C.dys(d)},
dWj(d){if(d<=4)return 0
return B.l.aH(d-1,4)*4},
dWk(d){var w
if($.P3().a==null)return!1
w=$.Gm().a
return d>=w&&d<w+4},
dyv(){var w=$.awK
if(w!=null)w.ad(0)
$.awK=null
$.Gm().sv(0,0)},
dyu(){var w,v,u,t=$.P3()
if(t.a==null)return
w=$.awK
if(w!=null)w.ad(0)
v=$.dyt
if(v<=4){t=t.a
t.toString
C.dmf(t)
return}w=$.Gm()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dmf(t)},
dmf(d){var w=$.awK
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
default:w=null}$.awK=A.dM(A.ds(0,0,0,0,0,w),C.ef0())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ni.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.O(B.a6.l(0.25),B.w,1),r=A.Z(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fT,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a7:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a0,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fs,w,w,w)}}
C.oc.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.JQ.prototype={
U(){return new C.ag5(A.a([],x.e))},
ge_(){return this.c}}
C.ag5.prototype={
a_(){var w=this
w.a6()
$.Gm().ap(0,w.gax2())
C.eeM(w.gbmP())
w.YG()},
bmc(){if(this.c!=null)this.p(new C.cHK())},
bmQ(){C.dyu()},
q(){$.Gm().Z(0,this.gax2())
C.dyv()
$.P3().sv(0,null)
this.a5()},
YG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.JS(t.a.c),$async$YG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHJ(t,s))
$.bnx=J.a6(s)
case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
UG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$UG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cHH(t))
w=3
return A.b(C.awL(t.a.c),$async$UG)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cHI(t,s))
$.bnx=J.a6(t.d)
t.c.G(x.q).f.R(A.bp(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$UG,v)},
boK(d){var w=this.c
w.toString
A.a7(w,!1).cA(A.eF(new C.cHL(d),!1,null,x.H))},
bpk(){var w=this.c
w.toString
return C.Zp(w,J.a6(this.d))},
C(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.fc:B.bv,s=A.aM(v,v,v,v,B.L2,v,v,v,new C.cHP(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a6(w.d)+")",q=x.p
r=A.H(A.a([s,A.I(new A.DC(A.H(A.a([A.I(new A.J(B.j7,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.e:B.X,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.V,!0,v,A.aS(!1,v,!0,new A.J(B.bc,A.Z(B.ha,B.a6,v,v,28),v),B.cO,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbpj(),v,v,v,v,v,v,v),B.k,B.L,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c6(!0,A.w(A.a([new A.J(D.WG,r,v),A.I(w.e?B.n5:new A.ld($.P3(),new C.cHQ(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0)
return A.c8(v,t,s,v,!1,!1,A.aqO(B.a6,B.Gp,B.mj,D.d7a,w.e?v:new C.cHR(w)),v)}}
C.WE.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.O(B.e.l(0.1),B.w,1),q=A.a([new A.aa(0,B.G,B.a6.l(0.18),B.dj,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a6u(n,!0,!C.dWk(w),"Fold "+(B.l.aH(w,4)+1)+"/"+B.l.aH(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Z(B.jN,B.ne,u,u,22),B.aN,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yM,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.V,!0,u,A.aS(!1,t,!0,A.w(A.a([A.I(A.t(u,A.cg(p,A.fT(A.w(A.a([new C.aJB(o,u),A.I(n,1),A.t(u,A.H(A.a([A.Z(B.B9,B.a6.l(0.85),u,u,9),D.cGc,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.az,u,u,u,u,u,D.aCR,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,u,u,new A.r(u,u,r,s,q,D.a_O,B.p),u,u,u,B.fN,u,u,u),1),B.aN,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.aa)}}
C.aJB.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.I(A.d(B.h.gaw(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.rJ,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.az,w,w,w,w,w,B.Ww,w,w,w)}}
C.JP.prototype={
U(){return new C.aKB()}}
C.aKB.prototype={
C(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.fc:B.bv,t=A.aM(w,w,w,w,B.L2,w,w,w,new C.cHE(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c8(w,u,A.c6(!0,A.w(A.a([new A.J(D.WG,A.H(A.a([t,A.I(new A.DC(A.H(A.a([A.I(new A.J(B.j7,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.e:B.X,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.V,!0,w,A.aS(!1,w,!0,new A.J(B.bc,A.Z(B.ha,B.a6,w,w,28),w),B.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cHF(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.I(new A.ld($.P3(),new C.cHG(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ak,!0,!0),w,!1,!1,w,w)}}
C.aRr.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.G,B.a6.l(0.35),B.f4,28),new A.aa(0,B.G,B.A.l(0.45),B.d9,18)],x.V),o=A.O(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dyx(new A.dv(v+"_full_"+u,x.W),!1,u,!1,w.gaMG(),v+"_full")
w=v}else w=new C.aKH(t.r,s)}else w=new C.aFS(m,s)
else w=D.ddB
return A.t(s,A.cg(n,A.fT(A.w(A.a([new C.aRs(m,l,s),A.I(w,1),new C.aRq(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aI),B.k,s,s,new A.r(s,s,o,q,p,D.a_O,B.p),s,r*2.05,s,B.bS,s,s,r)}}
C.aRs.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dC(r)
r=A.hL(r)
w=new A.dD(q,r)
v=w.gJm()===0?12:w.gJm()
r=B.b.bi(B.l.n(r),2,"0")
q=(q<12?B.h4:B.j4)===B.h4?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mO,s,s,s),B.bB,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bV,D.aNL,B.ep,D.aMY,B.ep,D.aNP],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aN,A.H(A.a([A.Z(B.KT,B.a6.l(0.9),s,s,12),B.ep,A.I(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.az,s,s,s,s,s,D.aDE,s,s,s)}}
C.aKH.prototype={
C(d){var w=null
return A.t(w,A.aI(A.w(A.a([A.Z(B.AH,B.e.l(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aN,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.ey(D.aRh,D.cVI,this.c,A.ei(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aF(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a0,0,B.q),w,w,w),B.k,B.yM,w,w,w,w,w,w,w,w,1/0)}}
C.aRq.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awU(B.B_,"YouTube",s===0,r,new C.cX5(u))
s=u.awU(B.lm,"Device",s===1,r,new C.cX6(u))
w=r?"Power off":"Power on"
v=r?D.Z9:D.aKZ
return A.t(t,A.H(A.a([q,B.am,s,B.bB,A.aM(t,t,t,t,A.Z(v,r?B.bD:B.fA,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.az,t,t,t,t,t,D.aDo,t,t,t)},
awU(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bn
else w=f?B.a6:B.ax
v=f&&g?B.a6.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.I(A.aL(!1,B.V,!0,u,A.aS(!1,A.m(10),!0,new A.J(B.no,A.w(A.a([A.Z(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aLY.prototype={
C(d){return D.at8}}
C.aFS.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lH,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tF("Serial",u.c),q=w.tF("Model",u.d),p=w.tF("Device ID",u.e),o=w.tF("IMEI",u.r),n=w.tF("MAC",u.f),m=w.tF("OS",u.w+" "+u.x),l=w.tF("Location",u.y+", "+u.z),k=w.tF("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tF("Timezone",u.at)
u=u.ax
return A.ef(A.a([t,B.aN,s,B.ab,r,q,p,o,n,m,l,k,j,w.tF("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bc,v,v,B.aj,!1)},
tF(d,e){var w=null
return new A.J(B.cP,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cH,A.d(e,w,w,w,w,w,w,D.cNB,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.JT.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.ql.prototype={
gaMG(){var w=this.c
return w===D.adR||w===D.adS||w===D.NM||w===D.adT}}
C.a6u.prototype={
U(){return new C.aKC(null,null)}}
C.aKC.prototype={
a_(){this.a6()
var w=A.bH(null,B.ve,null,1,null,this)
w.n6(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aWs()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dr(t,new A.r(t,t,t,t,t,new A.ak(B.cJ,B.cs,B.H,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bT),q=x.Y,p=u.d
p===$&&A.c()
p=A.cx(B.ia,p,t)
w=B.e.l(0.92)
q=A.aI(new A.d2(new A.b3(p,new A.bm(0.72,1,q),q.j("b3<bl.T>")),!1,A.Z(B.jN,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.ne
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aM2(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aG(B.al,t,B.bb,B.y,s,t)}}
C.aM2.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kq(u,new C.cMr(this),B.c8,B.bM,!0,w,w,new C.cMs(this),w)
return new C.Fc(v,w)}}
C.Fc.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uT,B.SD],x.O),B.jN)
break
case 1:w=new A.aO(A.a([B.yM,D.axE],x.O),B.ln)
break
case 2:w=new A.aO(A.a([D.aza,D.ax4],x.O),B.AO)
break
case 3:w=new A.aO(A.a([B.X,B.du],x.O),B.AS)
break
case 4:w=new A.aO(A.a([B.az,B.aO],x.O),B.pf)
break
default:w=u}v=w.a
return A.t(u,A.aI(A.Z(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aM,B.aS,B.H,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.akR.prototype={
q(){var w=this,v=w.aT$
if(v!=null)v.Z(0,w.gdA())
w.aT$=null
w.a5()},
bx(){this.bN()
this.bK()
this.dB()}}
C.a6v.prototype={
U(){return new C.ag6()}}
C.ag6.prototype={
a7r(d,e){var w,v=C.bnw(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dme(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.dWi(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEw(){var w,v=this
if(v.w)return
v.p(new C.cHS(v))
w=v.e
if(w!=null)v.a7r(w,v.a.d)},
a_(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.Go()
$.pG().uT(w,new C.cI0(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bd(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cHU(v))
w=v.e
w.toString
v.a7r(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Zo,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.fT(A.aI(new A.J(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1N(n,B.tt,w)],v)
if(o.f)w.push(A.fT(A.aI(new A.ac(28,28,D.auc,n),n,n,n),B.d1,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.O(B.bn,B.w,1)
q=A.Z(B.KX,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eV(0,A.aL(!1,B.V,!0,n,A.aS(!1,n,!0,A.aI(A.t(n,A.H(A.a([q,B.am,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a0,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.W1,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEv(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}v=C.bnw(o.a.d)
if(v!=null)w.push(A.aT(8,A.js(D.aPi,D.d2m,new C.cHT(o),A.iN(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fs,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aG(B.al,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(oc)","~()","JQ(S)","oc(a_<@,@>)","a1(oc)","a_<o,@>(oc)","aB<~>()","JP(S)","ld<K>(S,ql?,p?)","WE(S,K)","tW(S,ql?,p?)","Fc(S,al,dR?)"])
C.dia.prototype={
$1(d){return new C.JQ(this.a,null)},
$S:z+2}
C.di9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aD(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dX,B.X],j):A.a([B.e,B.ay],j),h=A.a([new A.aa(0,B.G,B.a6.l(0.22),B.f4,32)],x.V),g=A.O(m?B.ca:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.as.l(m?0.18:0.08)],j)
e=A.t(n,D.aMF,B.k,n,n,new A.r(B.a6.l(0.18),n,A.O(B.a6.l(0.45),B.w,1),n,n,n,B.au),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.w(A.a([w,B.aN,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f5,w,A.aM(n,n,n,n,A.Z(B.d6,m?B.ax:B.d1,n,n,n),n,n,n,new C.di5(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ae,B.ag,B.H,j,n,n),B.p),n,n,n,B.IL,n,n,n)
e=A.em(B.cG,A.a([new C.Ni("YouTube",B.KS,m,n),new C.Ni("TikTok",B.ln,m,n),new C.Ni("Instagram",B.AO,m,n),new C.Ni("Facebook",B.AS,m,n)],v),B.cr,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.X,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.hH,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bv
r=A.Z(B.fx,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aH
u=A.w(A.a([e,B.aR,A.aJ(n,B.N,!0,n,!0,B.y,n,A.aK(),w,n,n,n,n,n,2,A.bs(n,new A.b9(4,q,B.Y),n,n,n,n,n,n,!0,new A.b9(4,p,new A.aF(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b9(4,A.m(16),B.Ro),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a9,n,n,n,n)],v),B.ar,B.i,B.j,0,B.q)
e=A.js(D.aMI,D.d6h,new C.di6(d),A.iN(n,n,n,n,n,n,n,n,n,n,n,m?B.bi:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.J(new A.V(12,0,12,12+l.f.d),A.dr(A.cg(f,A.w(A.a([j,new A.J(B.Wg,u,n),new A.J(D.aET,A.H(A.a([e,B.bB,A.c3(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a7:B.av,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.di7(d),n,n),B.am,A.dN(D.aR0,D.d75,new C.di8(d,w),A.bx(B.a6,n,n,n,B.e,n,D.W1,n,new A.bF(A.m(14),B.Y),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.ar,B.i,B.a0,0,B.q),B.aI),new A.r(n,n,g,k,h,new A.ak(B.aM,B.aS,B.H,i,n,n),B.p),B.bT),n)},
$S:80}
C.di5.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.di6.prototype={
$0(){C.dyv()
$.P3().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.di7.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.di8.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bnI.prototype={
$1(d){return C.dyw(A.U(d,x.N,x.z))},
$S:z+3}
C.bnJ.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bnA.prototype={
$1(d){return d.c},
$S:z+0}
C.bnB.prototype={
$1(d){return d.r},
$S:z+0}
C.bnC.prototype={
$1(d){return d.f},
$S:z+0}
C.bnD.prototype={
$1(d){return d.at},
$S:z+0}
C.bnE.prototype={
$1(d){return d.c},
$S:z+0}
C.bnF.prototype={
$1(d){return d.r},
$S:z+0}
C.bnG.prototype={
$1(d){return d.f},
$S:z+0}
C.bnH.prototype={
$1(d){return d.at},
$S:z+0}
C.bnz.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bny.prototype={
$1(d){return B.b.bi(B.l.hu(d,16),2,"0").toUpperCase()},
$S:83}
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
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cHL.prototype={
$1(d){return new C.JP(this.a,null)},
$S:z+7}
C.cHP.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cHQ.prototype={
$3(d,e,f){return new A.ld($.Gm(),new C.cHO(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cHO.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.D4(d,k,x.Q)
w=w==null?k:w.gly()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.O(B.a6.l(0.35),B.w,1)
q=A.Z(B.jN,B.a6,k,k,18)
p=j.d
o=J.a6(l.a.d)
n=$.Gm().a
m=B.m.Y(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.am,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.X,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.dc,B.ft,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.cg(s,new A.j4(1.7777777777777777,C.dyx(new A.dv("fleet_master_"+r,x.W),!0,r,!0,j.gaMG(),"fleet_master"),k),B.aI),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a6(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vQ(0,B.y,k,B.D,k,k,k,k,!1,k,B.aj,!1,A.a([new A.ky(new A.J(B.IB,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.ol(D.aD0,A.aAP(new A.ny(new C.cHN(i,j),J.a6(i.d),!1,!0,!0,A.ts(),k),D.cGY),k)],w))},
$S:1689}
C.cHN.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.WE(v,e,J.a6(w.d),new C.cHM(w,v),this.b,null)},
$S:z+9}
C.cHM.prototype={
$0(){return this.a.boK(this.b)},
$S:0}
C.cHR.prototype={
$0(){this.a.UG()
return null},
$S:0}
C.cHE.prototype={
$0(){return A.a7(this.a,!1).ew()},
$S:0}
C.cHF.prototype={
$0(){C.Zp(this.a,$.bnx)
return null},
$S:0}
C.cHG.prototype={
$3(d,e,f){return A.fp(new C.cHD(this.a,e))},
$S:z+10}
C.cHD.prototype={
$2(d,e){var w,v=null,u=B.m.Y(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aI(A.co(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aR,new C.aRr(u,s.a.c,s.e,s.d,new C.cHA(s),new C.cHB(s),new C.cHC(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oS,v,v,B.aj),v,v,v)},
$S:1690}
C.cHA.prototype={
$0(){var w=this.a.c
w.toString
C.Zp(w,$.bnx)
return null},
$S:0}
C.cHB.prototype={
$1(d){var w=this.a
return w.p(new C.cHz(w,d))},
$S:33}
C.cHz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cHC.prototype={
$0(){var w=this.a
return w.p(new C.cHy(w))},
$S:0}
C.cHy.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cX5.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cX6.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cMr.prototype={
$3(d,e,f){return new C.Fc(this.a.c,null)},
$S:z+11}
C.cMs.prototype={
$3(d,e,f){if(f==null)return e
return new A.aG(B.al,null,B.bb,B.y,A.a([new C.Fc(this.a.c,null),D.atn],x.p),null)},
$C:"$3",
$R:3,
$S:265}
C.cHS.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cI0.prototype={
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
A.hj(v,"load",new C.cHZ(w),!1,u)
v=w.e
v.toString
A.hj(v,"error",new C.cI_(w),!1,u)
w=w.e
w.toString
return w},
$S:589}
C.cHZ.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cHX(w))
A.bR(B.P,new C.cHY(w),x.H)}},
$S:45}
C.cHX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cHY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cHV(w))},
$S:12}
C.cHV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cI_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cHW(w))},
$S:45}
C.cHW.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cHU.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cHT.prototype={
$0(){var w,v=C.bnw(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kO.Su(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.de4.prototype={
$1(d){var w,v,u,t,s=new A.EL([],[]).IB(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.aF(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1691};(function aliases(){var w=C.akR.prototype
w.aWs=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ag5.prototype,"gax2","bmc",1)
w(u,"gbmP","bmQ",1)
w(u,"gbpj","bpk",6)
w(C.ag6.prototype,"gbEv","bEw",1)
v(C,"ef0","dyu",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yx,[C.dia,C.di9,C.bnI,C.bnJ,C.bnA,C.bnB,C.bnC,C.bnD,C.bnE,C.bnF,C.bnG,C.bnH,C.bnz,C.bny,C.cHL,C.cHQ,C.cHO,C.cHG,C.cHB,C.cMr,C.cMs,C.cI0,C.cHZ,C.cI_,C.de4])
v(A.a_T,[C.di5,C.di6,C.di7,C.di8,C.cHK,C.cHJ,C.cHH,C.cHI,C.cHP,C.cHM,C.cHR,C.cHE,C.cHF,C.cHA,C.cHz,C.cHC,C.cHy,C.cX5,C.cX6,C.cHS,C.cHX,C.cHY,C.cHV,C.cHW,C.cHU,C.cHT])
v(A.au,[C.Ni,C.WE,C.aJB,C.aRr,C.aRs,C.aKH,C.aRq,C.aLY,C.aFS,C.aM2,C.Fc])
v(A.al,[C.oc,C.ql])
v(A.ae,[C.JQ,C.JP,C.a6u,C.a6v])
v(A.af,[C.ag5,C.aKB,C.akR,C.ag6])
v(A.a_U,[C.cHN,C.cHD])
u(C.JT,A.aGN)
u(C.aKC,C.akR)
w(C.akR,A.e7)})()
A.dC1(b.typeUniverse,JSON.parse('{"JQ":{"ae":[],"p":[]},"WE":{"au":[],"p":[]},"JP":{"ae":[],"p":[]},"Ni":{"au":[],"p":[]},"ag5":{"af":["JQ"]},"aJB":{"au":[],"p":[]},"aKB":{"af":["JP"]},"aRr":{"au":[],"p":[]},"aRs":{"au":[],"p":[]},"aKH":{"au":[],"p":[]},"aRq":{"au":[],"p":[]},"aLY":{"au":[],"p":[]},"aFS":{"au":[],"p":[]},"a6u":{"ae":[],"p":[]},"Fc":{"au":[],"p":[]},"aKC":{"af":["a6u"]},"aM2":{"au":[],"p":[]},"a6v":{"ae":[],"p":[]},"ag6":{"af":["a6v"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a3<aa>"),O:w("a3<x>"),e:w("a3<oc>"),s:w("a3<o>"),p:w("a3<p>"),t:w("a3<K>"),X:w("ad<oc>"),a:w("ad<@>"),P:w("a_<o,@>"),f:w("a_<@,@>"),w:w("o7"),_:w("D1"),k:w("oc"),N:w("o"),Y:w("bm<a9>"),W:w("dv<o>"),J:w("ld<K>"),j:w("ld<ql?>"),E:w("xp<cL>"),q:w("Xq"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Z9=new A.N(983224,"MaterialIcons",!1)
D.aPq=new A.a8(D.Z9,48,B.bn,null,null,null)
D.cNf=new A.R(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cUC=new A.z("Powered off",null,D.cNf,null,null,null,null,null,null,null,null,null)
D.bKV=w([D.aPq,B.Q,D.cUC],x.p)
D.aAp=new A.eK(B.aj,B.i,B.a0,B.o,null,B.q,null,0,D.bKV,null)
D.at8=new A.dq(B.T,null,null,D.aAp,null)
D.cGC=new A.ac(18,18,B.Sl,null)
D.atn=new A.dq(B.T,null,null,D.cGC,null)
D.auc=new A.hc(2,null,null,null,null,B.a7,null,null,null,null)
D.ax4=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.axE=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aza=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aCR=new A.V(0,3,0,3)
D.aD0=new A.V(10,0,10,88)
D.aDo=new A.V(12,6,12,10)
D.aDE=new A.V(14,8,14,6)
D.W1=new A.V(18,12,18,12)
D.aET=new A.V(20,8,20,20)
D.WG=new A.V(8,6,15,8)
D.aKZ=new A.N(983222,"MaterialIcons",!1)
D.aMF=new A.a8(B.jN,26,B.a6,null,null,null)
D.aMI=new A.a8(B.Yn,18,null,null,null,null)
D.aMY=new A.a8(B.rJ,14,B.a7,null,null,null)
D.aLe=new A.N(983420,"MaterialIcons",!1)
D.aNL=new A.a8(D.aLe,14,B.a7,null,null,null)
D.aJn=new A.N(62895,"MaterialIcons",!1)
D.aNP=new A.a8(D.aJn,14,B.a7,null,null,null)
D.aPi=new A.a8(B.rA,16,B.a7,null,null,null)
D.aR0=new A.a8(B.jf,20,null,null,null,null)
D.aRh=new A.a8(B.ha,16,null,null,null,null)
D.bOx=w([B.aO,B.X],x.O)
D.a_O=new A.ak(B.aM,B.aS,B.H,D.bOx,null,null)
D.cAh=new A.aO("NGMY OS","14.2.1")
D.cz4=new A.aO("VirtualDroid","13.8.4")
D.cz3=new A.aO("NGMY OS","15.0.0")
D.czQ=new A.aO("VirtualDroid","14.1.2")
D.cz1=new A.aO("NGMY Tab OS","12.9.7")
D.cz_=new A.aO("NGMY OS","13.5.3")
D.cyP=new A.aO("VirtualDroid","15.2.0")
D.czr=new A.aO("NGMY OS","14.8.1")
D.czW=new A.aO("NGMY Tab OS","13.2.4")
D.cAr=new A.aO("VirtualDroid","12.6.9")
D.cyI=new A.aO("NGMY OS","16.0.1")
D.cyx=new A.aO("VirtualDroid","14.9.0")
D.cA8=new A.aO("NGMY Tab OS","14.0.3")
D.czd=new A.aO("NGMY OS","13.1.8")
D.cyH=new A.aO("VirtualDroid","13.4.5")
D.cyZ=new A.aO("NGMY OS","15.3.2")
D.czX=new A.aO("NGMY Tab OS","12.4.1")
D.cAb=new A.aO("VirtualDroid","16.1.0")
D.czq=new A.aO("NGMY OS","14.4.6")
D.cAi=new A.aO("VirtualDroid","15.0.8")
D.bNL=w([D.cAh,D.cz4,D.cz3,D.czQ,D.cz1,D.cz_,D.cyP,D.czr,D.czW,D.cAr,D.cyI,D.cyx,D.cA8,D.czd,D.cyH,D.cyZ,D.czX,D.cAb,D.czq,D.cAi],A.b6("a3<+(o,o)>"))
D.cCx=new A.eI(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cC5=new A.eI(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cC0=new A.eI(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cC9=new A.eI(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cBX=new A.eI(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cCb=new A.eI(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cCz=new A.eI(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cBY=new A.eI(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cC4=new A.eI(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cCd=new A.eI(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cBW=new A.eI(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cCr=new A.eI(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cCo=new A.eI(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cC3=new A.eI(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cCl=new A.eI(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cCk=new A.eI(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cBV=new A.eI(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cC8=new A.eI(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cCi=new A.eI(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cCn=new A.eI(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a6n=w([D.cCx,D.cC5,D.cC0,D.cC9,D.cBX,D.cCb,D.cCz,D.cBY,D.cC4,D.cCd,D.cBW,D.cCr,D.cCo,D.cC3,D.cCl,D.cCk,D.cBV,D.cC8,D.cCi,D.cCn],A.b6("a3<+(o,o,a9,a9,o)>"))
D.bWF=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.adR=new C.JT(0,"youtube")
D.adS=new C.JT(1,"tiktok")
D.NM=new C.JT(2,"instagram")
D.adT=new C.JT(3,"facebook")
D.crS=new C.JT(4,"other")
D.cGc=new A.ac(3,null,null,null)
D.cGY=new A.i7(4,10,8,0.52,null)
D.cVU=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cKp=new A.aU(D.cVU,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.y,null)
D.cNB=new A.R(!0,B.e,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cVI=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d2m=new A.z("Open in YouTube",null,B.iW,null,null,null,null,null,null,null,null,null)
D.d6h=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d75=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d7a=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.ddB=new C.aLY(null)})();(function staticFields(){$.dyt=20
$.awK=null
$.bnx=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ek1","Gm",()=>A.aCE(0))
w($,"ek2","P3",()=>A.aCE(null))})()};
(a=>{a["c9IKt9h3FwjqKLJpr7XGlE+KyrQ="]=a.current})($__dart_deferred_initializers__);