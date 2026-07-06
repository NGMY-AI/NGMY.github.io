((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
edx(d,e){A.a7(d,!1).cI(A.eK(new C.dgc(e),!0,null,x.H))},
YS(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$YS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.OG()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.an()
s=new A.ai(new A.b2(n,B.aD,B.as),t)
w=3
return A.b(A.dn(B.M,new C.dgb(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$YS)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dU3(r)
if(q==null){d.G(x.q).f.R(D.cHD)
w=1
break}w=4
return A.b(A.bR(B.i6,null,x.H),$async$YS)
case 4:if(d.e==null){w=1
break}n=B.l.a_(e,1,999)
$.dwm=n
p=C.dTY(n)
n=$.G6()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dkm(q)
d.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YS,v)},
dwp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.o5(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Jy(d){return C.dU6(d)},
dU6(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Jy=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Jy)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aN(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aG(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.eU(r,x.f)
k=A.dt(k,new C.bmA(),k.$ti.j("G.E"),x.k)
j=A.O(k).j("ah<G.E>")
i=A.B(new A.ah(k,new C.bmB(),j),j.j("G.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dwr(q)
w=12
return A.b(C.Jx(a3,p),$async$Jy)
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
n=B.H.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dwp(A.Q(n,x.N,x.z))
l=C.dwr(A.a([m],x.e))
w=21
return A.b(C.Jx(a3,l),$async$Jy)
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
case 18:case 14:q=C.dU4()
w=22
return A.b(C.Jx(a3,q),$async$Jy)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jy,v)},
dwr(d){var w=A.W(d).j("D<1,o>"),v=new A.D(d,new C.bms(),w).eH(0),u=new A.D(d,new C.bmt(),w).eH(0),t=new A.D(d,new C.bmu(),w).eH(0),s=new A.D(d,new C.bmv(),w).eH(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dkn(null,q,u,t,v,s));++q}return r},
avX(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$avX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jy(d),$async$avX)
case 3:t=f
s=x.N
r=J.cg(t)
q=r.dc(t,new C.bmw(),s).eH(0)
p=r.dc(t,new C.bmx(),s).eH(0)
o=r.dc(t,new C.bmy(),s).eH(0)
n=r.dc(t,new C.bmz(),s).eH(0)
m=C.dkn(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Jx(d,t),$async$avX)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avX,v)},
Jx(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Jx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Jx)
case 2:u=g
t=B.b.i(d)
s=J.b3(e,new C.bmr(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$Jx)
case 3:return A.h(null,v)}})
return A.i($async$Jx,v)},
dU4(){var w,v=x.N,u=A.bc(v),t=A.bc(v),s=A.bc(v),r=A.bc(v),q=J.dw(20,x.k)
for(w=0;w<20;++w)q[w]=C.dkn(w,w,t,s,u,r)
return q},
dkn(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jx(),h=d==null,g=D.a5O[B.l.ab(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a5O[B.l.ab(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bG(256)
n=new A.D(p,new C.bmq(),A.W(p).j("D<1,o>")).fm(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bG(10)
t=B.h.fm(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bm(B.l.ie(i.bG(256),16),2,"0")
s=B.h.bn(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.ab(e,20)
k=D.bV8[w]
j=D.bMo[w]
return new C.o5("vd_"+1000*Date.now()+"_"+e+"_"+i.bG(99999),"Device "+B.b.bm(B.l.n(e+1),2,"0"),u,k,C.dU5(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a4().Z())},
dU5(d,e){var w,v=J.dw(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bm(B.l.ie(d.bG(256),16),2,"0")
return B.h.fm(v)},
dgc:function dgc(d){this.a=d},
dgb:function dgb(d,e){this.a=d
this.b=e},
dg7:function dg7(d){this.a=d},
dg8:function dg8(d){this.a=d},
dg9:function dg9(d){this.a=d},
dga:function dga(d,e){this.a=d
this.b=e},
N1:function N1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
o5:function o5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bmA:function bmA(){},
bmB:function bmB(){},
bms:function bms(){},
bmt:function bmt(){},
bmu:function bmu(){},
bmv:function bmv(){},
bmw:function bmw(){},
bmx:function bmx(){},
bmy:function bmy(){},
bmz:function bmz(){},
bmr:function bmr(){},
bmq:function bmq(){},
Jw:function Jw(d,e){this.c=d
this.a=e},
afq:function afq(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cGM:function cGM(){},
cGL:function cGL(d,e){this.a=d
this.b=e},
cGJ:function cGJ(d){this.a=d},
cGK:function cGK(d,e){this.a=d
this.b=e},
cGN:function cGN(d){this.a=d},
cGR:function cGR(d){this.a=d},
cGS:function cGS(d,e){this.a=d
this.b=e},
cGQ:function cGQ(d,e,f){this.a=d
this.b=e
this.c=f},
cGP:function cGP(d,e){this.a=d
this.b=e},
cGO:function cGO(d,e){this.a=d
this.b=e},
cGT:function cGT(d){this.a=d},
Wa:function Wa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIN:function aIN(d,e){this.c=d
this.a=e},
Jv:function Jv(d,e){this.c=d
this.a=e},
aJN:function aJN(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cGG:function cGG(d){this.a=d},
cGH:function cGH(d){this.a=d},
cGI:function cGI(d){this.a=d},
cGF:function cGF(d,e){this.a=d
this.b=e},
cGC:function cGC(d){this.a=d},
cGD:function cGD(d){this.a=d},
cGB:function cGB(d,e){this.a=d
this.b=e},
cGE:function cGE(d){this.a=d},
cGA:function cGA(d){this.a=d},
aQz:function aQz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aQA:function aQA(d,e,f){this.c=d
this.d=e
this.a=f},
aJT:function aJT(d,e){this.c=d
this.a=e},
aQy:function aQy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cVl:function cVl(d){this.a=d},
cVm:function cVm(d){this.a=d},
aL7:function aL7(d){this.a=d},
aF4:function aF4(d,e){this.c=d
this.a=e},
dU3(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.W(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dU2(v)
if(u!=null)return new C.qc(w,C.dkl(u,!1),D.ad9,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dU1(v)
if(t!=null)return new C.qc(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ada,"TikTok",q)
s=C.dU0(w,v)
if(s!=null)return s
r=C.dU_(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qc(w,w,D.cph,"Video",q)
return q},
dU0(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qc(d,"https://www.instagram.com/reel/"+w+u,D.Ni,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qc(d,"https://www.instagram.com/p/"+w+u,D.Ni,t,null)}return null},
dU_(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qc(d,"https://www.facebook.com/plugins/video.php?href="+A.f3(2,d,B.b9,!1)+"&show_text=false&width=734",D.adb,"Facebook",null)},
dU2(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dU1(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
Jz:function Jz(d,e){this.a=d
this.b=e},
qc:function qc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5S:function a5S(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJO:function aJO(d,e){var _=this
_.d=$
_.d0$=d
_.aW$=e
_.c=_.a=null},
aLc:function aLc(d,e){this.c=d
this.a=e},
cKL:function cKL(d){this.a=d},
cKM:function cKM(d){this.a=d},
EW:function EW(d,e){this.c=d
this.a=e},
ak7:function ak7(){},
dwq(d,e,f,g,h,i){return new C.a5T(i,f,h,e,g,d)},
ebX(d){var w=window
w.toString
A.hg(w,"message",new C.dce(d),!1,x._)},
a5T:function a5T(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
afr:function afr(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cGU:function cGU(d){this.a=d},
cH1:function cH1(d){this.a=d},
cH_:function cH_(d){this.a=d},
cGY:function cGY(d){this.a=d},
cGZ:function cGZ(d){this.a=d},
cGW:function cGW(d){this.a=d},
cH0:function cH0(d){this.a=d},
cGX:function cGX(d){this.a=d},
cGV:function cGV(d){this.a=d},
dce:function dce(d){this.a=d},
dwk(){var w,v,u
try{v=A.Ar()
w=v.grO(v)
if(J.a4(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dkl(d,e){var w=C.dwk(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.f3(2,w,B.b9,!1))
v.push("widget_referrer="+A.f3(2,w,B.b9,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bn(v,"&")},
dkk(d){var w=A.aq(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dwl(d){var w=A.bj(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bj(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dTX(d,e,f){var w,v,u=C.dkk(d)
if(u!=null){if(f){w=C.dwk()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dwl(C.dkl(u,e))}return C.dwl(d)},
dTY(d){if(d<=4)return 0
return B.l.aL(d-1,4)*4},
dTZ(d){var w
if($.OG().a==null)return!1
w=$.G6().a
return d>=w&&d<w+4},
dwo(){var w=$.avW
if(w!=null)w.ae(0)
$.avW=null
$.G6().sv(0,0)},
dwn(){var w,v,u,t=$.OG()
if(t.a==null)return
w=$.avW
if(w!=null)w.ae(0)
v=$.dwm
if(v<=4){t=t.a
t.toString
C.dkm(t)
return}w=$.G6()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dkm(t)},
dkm(d){var w=$.avW
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
default:w=null}$.avW=A.dL(A.dp(0,0,0,0,0,w),C.ecl())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.N1.prototype={
C(d){var w=null,v=this.e,u=v?B.aO:B.e,t=A.m(20),s=A.P(B.a6.l(0.25),B.w,1),r=A.Y(this.d,B.a6,w,w,14)
return A.t(w,A.H(A.a([r,B.fO,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.c4,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a1,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fE,w,w,w)}}
C.o5.prototype={
aa(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Jw.prototype={
U(){return new C.afq(A.a([],x.e))},
ge9(){return this.c}}
C.afq.prototype={
a0(){var w=this
w.a6()
$.G6().ao(0,w.gawy())
C.ebX(w.gblD())
w.Yn()},
bl2(){if(this.c!=null)this.p(new C.cGM())},
blE(){C.dwn()},
q(){$.G6().Y(0,this.gawy())
C.dwo()
$.OG().sv(0,null)
this.a5()},
Yn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jy(t.a.c),$async$Yn)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGL(t,s))
$.bmp=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
Un(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Un=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cGJ(t))
w=3
return A.b(C.avX(t.a.c),$async$Un)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cGK(t,s))
$.bmp=J.a4(t.d)
t.c.G(x.q).f.R(A.bm(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Un,v)},
bnw(d){var w=this.c
w.toString
A.a7(w,!1).cI(A.eK(new C.cGN(d),!1,null,x.H))},
bo6(){var w=this.c
w.toString
return C.YS(w,J.a4(this.d))},
C(d){var w=this,v=null,u=A.C(d).ax.a===B.C,t=u?B.f9:B.bH,s=A.aM(v,v,v,v,B.Kx,v,v,v,new C.cGR(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a4(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Do(A.H(A.a([A.J(new A.I(B.j1,A.d(r,v,1,B.aF,v,v,v,A.l(v,v,u?B.e:B.Y,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aL(!1,B.W,!0,v,A.aQ(!1,v,!0,new A.I(B.bd,A.Y(B.h4,B.a6,v,v,28),v),B.cH,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbo5(),v,v,v,v,v,v,v),B.k,B.M,0,v,v,v,v,v,B.aa)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c4(!0,A.w(A.a([new A.I(D.Wb,r,v),A.J(w.e?B.mV:new A.j9($.OG(),new C.cGS(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.q),!1,B.ai,!0,!0)
return A.cb(v,t,s,v,!1,!1,A.aq3(B.a6,B.G5,B.mc,D.d4e,w.e?v:new C.cGT(w)),v)}}
C.Wa.prototype={
C(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.P(B.e.l(0.1),B.w,1),q=A.a([new A.ab(0,B.G,B.a6.l(0.18),B.dh,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5S(n,!0,!C.dTZ(w),"Fold "+(B.l.aL(w,4)+1)+"/"+B.l.aL(v.e+4-1,4),u)
n=w}else n=A.t(u,A.w(A.a([A.Y(B.jF,B.n3,u,u,22),B.aM,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.q),B.k,B.yE,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aL(!1,B.W,!0,u,A.aQ(!1,t,!0,A.w(A.a([A.J(A.t(u,A.ch(p,A.fL(A.w(A.a([new C.aIN(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Y(B.AW,B.a6.l(0.85),u,u,9),D.cDu,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.av,u,u,u,u,u,D.aBW,u,u,u)],w),B.o,B.i,B.j,0,B.q),B.A,!0),B.aJ),B.k,u,u,new A.r(u,u,r,s,q,D.a_i,B.p),u,u,u,B.fG,u,u,u),1),B.aM,A.d(o.b,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aF,u,u,u,A.l(u,u,A.C(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aF,u,u,u,A.l(u,u,B.a6.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.M,0,u,u,u,u,u,B.aa)}}
C.aIN.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aF,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.rt,B.e.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.av,w,w,w,w,w,B.W1,w,w,w)}}
C.Jv.prototype={
U(){return new C.aJN()}}
C.aJN.prototype={
C(d){var w=null,v=A.C(d).ax.a===B.C,u=v?B.f9:B.bH,t=A.aM(w,w,w,w,B.Kx,w,w,w,new C.cGG(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cb(w,u,A.c4(!0,A.w(A.a([new A.I(D.Wb,A.H(A.a([t,A.J(new A.Do(A.H(A.a([A.J(new A.I(B.j1,A.d(s.b+" \xb7 "+s.c,w,1,B.aF,w,w,w,A.l(w,w,v?B.e:B.Y,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aL(!1,B.W,!0,w,A.aQ(!1,w,!0,new A.I(B.bd,A.Y(B.h4,B.a6,w,w,28),w),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cGH(d),w,w,w,w,w,w,w),B.k,B.M,0,w,w,w,w,w,B.aa)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.j9($.OG(),new C.cGI(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.q),!1,B.ai,!0,!0),w,!1,!1,w,w)}}
C.aQz.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.ab(0,B.G,B.a6.l(0.35),B.f0,28),new A.ab(0,B.G,B.A.l(0.45),B.d3,18)],x.V),o=A.P(B.e.l(0.12),B.w,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dwq(new A.du(v+"_full_"+u,x.W),!1,u,!1,w.gaM2(),v+"_full")
w=v}else w=new C.aJT(t.r,s)}else w=new C.aF4(m,s)
else w=D.daF
return A.t(s,A.ch(n,A.fL(A.w(A.a([new C.aQA(m,l,s),A.J(w,1),new C.aQy(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.q),B.A,!0),B.aJ),B.k,s,s,new A.r(s,s,o,q,p,D.a_i,B.p),s,r*2.05,s,B.bO,s,s,r)}}
C.aQA.prototype={
C(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dB(r)
r=A.hH(r)
w=new A.dC(q,r)
v=w.gJc()===0?12:w.gJc()
r=B.b.bm(B.l.n(r),2,"0")
q=(q<12?B.h_:B.iY)===B.h_?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.mD,s,s,s),B.bz,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bR,D.aMR,B.ei,D.aM3,B.ei,D.aMV],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aM,A.H(A.a([A.Y(B.Kn,B.a6.l(0.9),s,s,12),B.ei,A.J(A.d(u.c,s,s,B.aF,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.w(q,B.o,B.i,B.j,0,B.q),B.k,B.av,s,s,s,s,s,D.aCI,s,s,s)}}
C.aJT.prototype={
C(d){var w=null
return A.t(w,A.aK(A.w(A.a([A.Y(B.Au,B.e.l(0.35),w,w,40),B.U,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aM,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH,A.eC(D.aQk,D.cSU,this.c,A.eo(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.l(0.5),1,B.w,-1),w,w,w,w))],x.p),B.o,B.i,B.a1,0,B.q),w,w,w),B.k,B.yE,w,w,w,w,w,w,w,w,1/0)}}
C.aQy.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.awq(B.AN,"YouTube",s===0,r,new C.cVl(u))
s=u.awq(B.ld,"Device",s===1,r,new C.cVm(u))
w=r?"Power off":"Power on"
v=r?D.YF:D.aK4
return A.t(t,A.H(A.a([q,B.al,s,B.bz,A.aM(t,t,t,t,A.Y(v,r?B.bG:B.fs,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dq)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.av,t,t,t,t,t,D.aCs,t,t,t)},
awq(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a6:B.aw
v=f&&g?B.a6.l(0.15):B.M
u=A.m(10)
t=g?h:s
return A.J(A.aL(!1,B.W,!0,u,A.aQ(!1,A.m(10),!0,new A.I(B.ne,A.w(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a1,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.aa),1)}}
C.aL7.prototype={
C(d){return D.ask}}
C.aF4.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lz,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tw("Serial",u.c),q=w.tw("Model",u.d),p=w.tw("Device ID",u.e),o=w.tw("IMEI",u.r),n=w.tw("MAC",u.f),m=w.tw("OS",u.w+" "+u.x),l=w.tw("Location",u.y+", "+u.z),k=w.tw("Coordinates",B.m.a3(u.Q,4)+", "+B.m.a3(u.as,4)),j=w.tw("Timezone",u.at)
u=u.ax
return A.ee(A.a([t,B.aM,s,B.ab,r,q,p,o,n,m,l,k,j,w.tw("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bd,v,v,B.ak,!1)},
tw(d,e){var w=null
return new A.I(B.cI,A.w(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cD,A.d(e,w,w,w,w,w,w,D.cKP,w,w,w)],x.p),B.F,B.i,B.j,0,B.q),w)}}
C.Jz.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qc.prototype={
gaM2(){var w=this.c
return w===D.ad9||w===D.ada||w===D.Ni||w===D.adb}}
C.a5S.prototype={
U(){return new C.aJO(null,null)}}
C.aJO.prototype={
a0(){this.a6()
var w=A.bJ(null,B.v0,null,1,null,this)
w.mT(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aVL()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dI(t,new A.r(t,t,t,t,t,new A.ak(B.cL,B.cy,B.I,A.a([B.M,B.A.l(0.55)],x.O),t,t),B.p),B.c_),q=x.Y,p=u.d
p===$&&A.c()
p=A.cy(B.i5,p,t)
w=B.e.l(0.92)
q=A.aK(new A.d6(new A.b4(p,new A.bn(0.72,1,q),q.j("b4<bk.T>")),!1,A.Y(B.jF,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.n3
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aLc(s,t),r,q,A.aT(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aT(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aT(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aH(B.am,t,B.bb,B.y,s,t)}}
C.aLc.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.km(u,new C.cKL(this),B.c8,B.bP,!0,w,w,new C.cKM(this),w)
return new C.EW(v,w)}}
C.EW.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uH,B.Sd],x.O),B.jF)
break
case 1:w=new A.aO(A.a([B.yE,D.awJ],x.O),B.le)
break
case 2:w=new A.aO(A.a([D.aye,D.awc],x.O),B.AB)
break
case 3:w=new A.aO(A.a([B.Y,B.dk],x.O),B.AF)
break
case 4:w=new A.aO(A.a([B.av,B.aO],x.O),B.p7)
break
default:w=u}v=w.a
return A.t(u,A.aK(A.Y(w.b,B.a6.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.ak(B.aN,B.aR,B.I,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ak7.prototype={
q(){var w=this,v=w.aW$
if(v!=null)v.Y(0,w.gdH())
w.aW$=null
w.a5()},
bx(){this.bO()
this.bK()
this.dI()}}
C.a5T.prototype={
U(){return new C.afr()}}
C.afr.prototype={
bF0(d,e){var w=C.dkk(d)
if(w!=null)return C.dkl(w,e)
return d},
a76(d,e){var w,v=this,u=C.dkk(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bF0(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dTX(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bCS(){var w,v=this
if(v.w)return
v.p(new C.cGU(v))
w=v.e
if(w!=null)v.a76(w,v.a.d)},
a0(){var w,v,u=this
u.a6()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.G8()
$.pB().uJ(w,new C.cH1(u),!0)}catch(v){u.r=!0
u.f=!1}},
b1(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cGV(v))
w=v.e
w.toString
v.a76(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.YT,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.P,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.V,n,n)],v))
return A.fL(A.aK(new A.I(new A.V(12,12,12,12),A.w(w,B.o,B.i,B.a1,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a1e(n,B.tf,w)],v)
if(o.f)w.push(A.fL(A.aK(new A.ac(28,28,D.atm,n),n,n,n),B.cY,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.P(B.bm,B.w,1)
q=A.Y(B.Kr,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.eL(0,A.aL(!1,B.W,!0,n,A.aQ(!1,n,!0,A.aK(A.t(n,A.H(A.a([q,B.al,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a1,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.Vy,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbCR(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.aa)))}return new A.aH(B.am,n,B.bb,B.y,w,n)}}
var z=a.updateTypes(["o(o5)","~()","Jw(U)","o5(Z<@,@>)","a1(o5)","Z<o,@>(o5)","aA<~>()","Jv(U)","j9<K>(U,qc?,p?)","Wa(U,K)","tN(U,qc?,p?)","EW(U,al,dP?)"])
C.dgc.prototype={
$1(d){return new C.Jw(this.a,null)},
$S:z+2}
C.dgb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.C(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.dQ,B.Y],j):A.a([B.e,B.ay],j),h=A.a([new A.ab(0,B.G,B.a6.l(0.22),B.f0,32)],x.V),g=A.P(m?B.c7:B.a6.l(0.18),B.w,1),f=A.m(28),e=B.a6.l(m?0.35:0.14)
j=A.a([e,B.ar.l(m?0.18:0.08)],j)
e=A.t(n,D.aLL,B.k,n,n,new A.r(B.a6.l(0.18),n,A.P(B.a6.l(0.45),B.w,1),n,n,n,B.az),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.w(A.a([w,B.aM,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.an,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.q),1)
j=A.t(n,A.H(A.a([e,B.f1,w,A.aM(n,n,n,n,A.Y(B.d5,m?B.aw:B.cY,n,n,n),n,n,n,new C.dg7(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.ak(B.ah,B.aj,B.I,j,n,n),B.p),n,n,n,B.Ih,n,n,n)
e=A.ec(B.cx,A.a([new C.N1("YouTube",B.Km,m,n),new C.N1("TikTok",B.le,m,n),new C.N1("Instagram",B.AB,m,n),new C.N1("Facebook",B.AF,m,n)],v),B.ci,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.Y,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.ck:B.i2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aO:B.bH
r=A.Y(B.fI,B.a6.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.c7:B.aL
u=A.w(A.a([e,B.aS,A.aI(n,B.N,!0,n,!0,B.y,n,A.aJ(),w,n,n,n,n,n,2,A.bp(n,new A.ba(4,q,B.X),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aE(o,1,B.w,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.m(16),B.QV),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a7,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.jN(D.aLO,D.d3m,new C.dg8(d),A.iK(n,n,n,n,n,n,n,n,n,n,n,m?B.bh:B.an,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dI(A.ch(f,A.w(A.a([j,new A.I(B.VM,u,n),new A.I(D.aDY,A.H(A.a([e,B.bz,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.au,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dg9(d),n,n),B.al,A.dN(D.aQ3,D.d49,new C.dga(d,w),A.bx(B.a6,n,n,n,B.e,n,D.Vy,n,new A.bG(A.m(14),B.X),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a1,0,B.q),B.aJ),new A.r(n,n,g,k,h,new A.ak(B.aN,B.aR,B.I,i,n,n),B.p),B.c_),n)},
$S:78}
C.dg7.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dg8.prototype={
$0(){C.dwo()
$.OG().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.dg9.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.dga.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bmA.prototype={
$1(d){return C.dwp(A.Q(d,x.N,x.z))},
$S:z+3}
C.bmB.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bms.prototype={
$1(d){return d.c},
$S:z+0}
C.bmt.prototype={
$1(d){return d.r},
$S:z+0}
C.bmu.prototype={
$1(d){return d.f},
$S:z+0}
C.bmv.prototype={
$1(d){return d.at},
$S:z+0}
C.bmw.prototype={
$1(d){return d.c},
$S:z+0}
C.bmx.prototype={
$1(d){return d.r},
$S:z+0}
C.bmy.prototype={
$1(d){return d.f},
$S:z+0}
C.bmz.prototype={
$1(d){return d.at},
$S:z+0}
C.bmr.prototype={
$1(d){return d.aa()},
$S:z+5}
C.bmq.prototype={
$1(d){return B.b.bm(B.l.ie(d,16),2,"0").toUpperCase()},
$S:81}
C.cGM.prototype={
$0(){},
$S:0}
C.cGL.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGJ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cGK.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cGN.prototype={
$1(d){return new C.Jv(this.a,null)},
$S:z+7}
C.cGR.prototype={
$0(){return A.a7(this.a,!1).es()},
$S:0}
C.cGS.prototype={
$3(d,e,f){return new A.j9($.G6(),new C.cGQ(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cGQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CR(d,k,x.Q)
w=w==null?k:w.gls()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.l(0.12)
s=A.m(12)
r=A.P(B.a6.l(0.35),B.w,1)
q=A.Y(B.jF,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.G6().a
m=B.m.a_(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.al,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.q(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.Y,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.d8,B.fo,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.ch(s,new A.je(1.7777777777777777,C.dwq(new A.du("fleet_master_"+r,x.W),!0,r,!0,j.gaM2(),"fleet_master"),k),B.aJ),B.ab],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.C(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vC(0,B.y,k,B.D,k,k,k,k,!1,k,B.ak,!1,A.a([new A.kv(new A.I(B.I9,A.w(u,B.F,B.i,B.j,0,B.q),k),k),new A.of(D.aC4,A.aA0(new A.no(new C.cGP(i,j),J.a4(i.d),!1,!0,!0,A.th(),k),D.cEe),k)],w))},
$S:1677}
C.cGP.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Wa(v,e,J.a4(w.d),new C.cGO(w,v),this.b,null)},
$S:z+9}
C.cGO.prototype={
$0(){return this.a.bnw(this.b)},
$S:0}
C.cGT.prototype={
$0(){this.a.Un()
return null},
$S:0}
C.cGG.prototype={
$0(){return A.a7(this.a,!1).es()},
$S:0}
C.cGH.prototype={
$0(){C.YS(this.a,$.bmp)
return null},
$S:0}
C.cGI.prototype={
$3(d,e,f){return A.fN(new C.cGF(this.a,e))},
$S:z+10}
C.cGF.prototype={
$2(d,e){var w,v=null,u=B.m.a_(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aK(A.cx(A.w(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.C(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.V,v,v),B.aS,new C.aQz(u,s.a.c,s.e,s.d,new C.cGC(s),new C.cGD(s),new C.cGE(s),t,v)],x.p),B.o,B.i,B.j,0,B.q),v,B.D,v,B.oK,v,v,B.ak),v,v,v)},
$S:1678}
C.cGC.prototype={
$0(){var w=this.a.c
w.toString
C.YS(w,$.bmp)
return null},
$S:0}
C.cGD.prototype={
$1(d){var w=this.a
return w.p(new C.cGB(w,d))},
$S:34}
C.cGB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cGE.prototype={
$0(){var w=this.a
return w.p(new C.cGA(w))},
$S:0}
C.cGA.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cVl.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cVm.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cKL.prototype={
$3(d,e,f){return new C.EW(this.a.c,null)},
$S:z+11}
C.cKM.prototype={
$3(d,e,f){if(f==null)return e
return new A.aH(B.am,null,B.bb,B.y,A.a([new C.EW(this.a.c,null),D.asy],x.p),null)},
$C:"$3",
$R:3,
$S:258}
C.cGU.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cH1.prototype={
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
w.a76(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hg(v,"load",new C.cH_(w),!1,u)
v=w.e
v.toString
A.hg(v,"error",new C.cH0(w),!1,u)
w=w.e
w.toString
return w},
$S:579}
C.cH_.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cGY(w))
A.bR(B.R,new C.cGZ(w),x.H)}},
$S:44}
C.cGY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cGZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cGW(w))},
$S:12}
C.cGW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cH0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cGX(w))},
$S:44}
C.cGX.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cGV.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.dce.prototype={
$1(d){var w,v,u,t,s=new A.Ev([],[]).Is(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.v(J.n(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1679};(function aliases(){var w=C.ak7.prototype
w.aVL=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.afq.prototype,"gawy","bl2",1)
w(u,"gblD","blE",1)
w(u,"gbo5","bo6",6)
w(C.afr.prototype,"gbCR","bCS",1)
v(C,"ecl","dwn",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yl,[C.dgc,C.dgb,C.bmA,C.bmB,C.bms,C.bmt,C.bmu,C.bmv,C.bmw,C.bmx,C.bmy,C.bmz,C.bmr,C.bmq,C.cGN,C.cGS,C.cGQ,C.cGI,C.cGD,C.cKL,C.cKM,C.cH1,C.cH_,C.cH0,C.dce])
v(A.a_m,[C.dg7,C.dg8,C.dg9,C.dga,C.cGM,C.cGL,C.cGJ,C.cGK,C.cGR,C.cGO,C.cGT,C.cGG,C.cGH,C.cGC,C.cGB,C.cGE,C.cGA,C.cVl,C.cVm,C.cGU,C.cGY,C.cGZ,C.cGW,C.cGX,C.cGV])
v(A.at,[C.N1,C.Wa,C.aIN,C.aQz,C.aQA,C.aJT,C.aQy,C.aL7,C.aF4,C.aLc,C.EW])
v(A.al,[C.o5,C.qc])
v(A.ae,[C.Jw,C.Jv,C.a5S,C.a5T])
v(A.af,[C.afq,C.aJN,C.ak7,C.afr])
v(A.a_n,[C.cGP,C.cGF])
u(C.Jz,A.aFZ)
u(C.aJO,C.ak7)
w(C.ak7,A.eb)})()
A.dzS(b.typeUniverse,JSON.parse('{"Jw":{"ae":[],"p":[]},"Wa":{"at":[],"p":[]},"Jv":{"ae":[],"p":[]},"N1":{"at":[],"p":[]},"afq":{"af":["Jw"]},"aIN":{"at":[],"p":[]},"aJN":{"af":["Jv"]},"aQz":{"at":[],"p":[]},"aQA":{"at":[],"p":[]},"aJT":{"at":[],"p":[]},"aQy":{"at":[],"p":[]},"aL7":{"at":[],"p":[]},"aF4":{"at":[],"p":[]},"a5S":{"ae":[],"p":[]},"EW":{"at":[],"p":[]},"aJO":{"af":["a5S"]},"aLc":{"at":[],"p":[]},"a5T":{"ae":[],"p":[]},"afr":{"af":["a5T"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ab>"),O:w("a6<y>"),e:w("a6<o5>"),s:w("a6<o>"),p:w("a6<p>"),t:w("a6<K>"),X:w("ad<o5>"),a:w("ad<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("o0"),_:w("CO"),k:w("o5"),N:w("o"),Y:w("bn<a9>"),W:w("du<o>"),J:w("j9<K>"),j:w("j9<qc?>"),E:w("xf<cK>"),q:w("WV"),z:w("@"),Q:w("al?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.YF=new A.N(983224,"MaterialIcons",!1)
D.aOu=new A.a8(D.YF,48,B.bm,null,null,null)
D.cKs=new A.T(!0,B.ck,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cRQ=new A.A("Powered off",null,D.cKs,null,null,null,null,null,null,null,null,null)
D.bJD=w([D.aOu,B.P,D.cRQ],x.p)
D.azt=new A.f_(B.ak,B.i,B.a1,B.o,null,B.q,null,0,D.bJD,null)
D.ask=new A.dr(B.T,null,null,D.azt,null)
D.cDU=new A.ac(18,18,B.RV,null)
D.asy=new A.dr(B.T,null,null,D.cDU,null)
D.atm=new A.hi(2,null,null,null,null,B.a9,null,null,null,null)
D.awc=new A.y(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.awJ=new A.y(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.aye=new A.y(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aBW=new A.V(0,3,0,3)
D.aC4=new A.V(10,0,10,88)
D.aCs=new A.V(12,6,12,10)
D.aCI=new A.V(14,8,14,6)
D.Vy=new A.V(18,12,18,12)
D.aDY=new A.V(20,8,20,20)
D.Wb=new A.V(8,6,15,8)
D.aK4=new A.N(983222,"MaterialIcons",!1)
D.aLL=new A.a8(B.jF,26,B.a6,null,null,null)
D.aLO=new A.a8(B.XT,18,null,null,null,null)
D.aM3=new A.a8(B.rt,14,B.a9,null,null,null)
D.aKk=new A.N(983420,"MaterialIcons",!1)
D.aMR=new A.a8(D.aKk,14,B.a9,null,null,null)
D.aIt=new A.N(62895,"MaterialIcons",!1)
D.aMV=new A.a8(D.aIt,14,B.a9,null,null,null)
D.aQ3=new A.a8(B.j9,20,null,null,null,null)
D.aQk=new A.a8(B.h4,16,null,null,null,null)
D.bN8=w([B.aO,B.Y],x.O)
D.a_i=new A.ak(B.aN,B.aR,B.I,D.bN8,null,null)
D.cxB=new A.aO("NGMY OS","14.2.1")
D.cwo=new A.aO("VirtualDroid","13.8.4")
D.cwn=new A.aO("NGMY OS","15.0.0")
D.cx9=new A.aO("VirtualDroid","14.1.2")
D.cwl=new A.aO("NGMY Tab OS","12.9.7")
D.cwj=new A.aO("NGMY OS","13.5.3")
D.cw8=new A.aO("VirtualDroid","15.2.0")
D.cwL=new A.aO("NGMY OS","14.8.1")
D.cxf=new A.aO("NGMY Tab OS","13.2.4")
D.cxL=new A.aO("VirtualDroid","12.6.9")
D.cw3=new A.aO("NGMY OS","16.0.1")
D.cvV=new A.aO("VirtualDroid","14.9.0")
D.cxs=new A.aO("NGMY Tab OS","14.0.3")
D.cwx=new A.aO("NGMY OS","13.1.8")
D.cw2=new A.aO("VirtualDroid","13.4.5")
D.cwi=new A.aO("NGMY OS","15.3.2")
D.cxg=new A.aO("NGMY Tab OS","12.4.1")
D.cxv=new A.aO("VirtualDroid","16.1.0")
D.cwK=new A.aO("NGMY OS","14.4.6")
D.cxC=new A.aO("VirtualDroid","15.0.8")
D.bMo=w([D.cxB,D.cwo,D.cwn,D.cx9,D.cwl,D.cwj,D.cw8,D.cwL,D.cxf,D.cxL,D.cw3,D.cvV,D.cxs,D.cwx,D.cw2,D.cwi,D.cxg,D.cxv,D.cwK,D.cxC],A.b6("a6<+(o,o)>"))
D.czR=new A.eE(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.czp=new A.eE(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.czk=new A.eE(["New York","United States",40.7128,-74.006,"America/New_York"])
D.czt=new A.eE(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.czg=new A.eE(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.czv=new A.eE(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.czT=new A.eE(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.czh=new A.eE(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.czo=new A.eE(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.czx=new A.eE(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.czf=new A.eE(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.czL=new A.eE(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.czI=new A.eE(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.czn=new A.eE(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.czF=new A.eE(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.czE=new A.eE(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cze=new A.eE(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.czs=new A.eE(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.czC=new A.eE(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.czH=new A.eE(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a5O=w([D.czR,D.czp,D.czk,D.czt,D.czg,D.czv,D.czT,D.czh,D.czo,D.czx,D.czf,D.czL,D.czI,D.czn,D.czF,D.czE,D.cze,D.czs,D.czC,D.czH],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bV8=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ad9=new C.Jz(0,"youtube")
D.ada=new C.Jz(1,"tiktok")
D.Ni=new C.Jz(2,"instagram")
D.adb=new C.Jz(3,"facebook")
D.cph=new C.Jz(4,"other")
D.cDu=new A.ac(3,null,null,null)
D.cEe=new A.ix(4,10,8,0.52,null)
D.cT5=new A.A("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cHD=new A.aV(D.cT5,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.y,null)
D.cKP=new A.T(!0,B.e,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cSU=new A.A("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d3m=new A.A("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d49=new A.A("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d4e=new A.A("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.daF=new C.aL7(null)})();(function staticFields(){$.dwm=20
$.avW=null
$.bmp=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ehl","G6",()=>A.UN(0))
w($,"ehm","OG",()=>A.UN(null))})()};
(a=>{a["q7pQXP7ykJtNnDi8/CX0ckaOzd8="]=a.current})($__dart_deferred_initializers__);