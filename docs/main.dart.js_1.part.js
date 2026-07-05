((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ea0(d,e){A.a7(d,!1).cG(A.eI(new C.ddq(e),!0,null,x.H))},
Yv(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$Yv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Oq()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.am()
s=new A.ah(new A.b0(n,B.aC,B.ar),t)
w=3
return A.b(A.dp(B.N,new C.ddp(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Yv)
case 3:r=g
s.F$=t
s.I$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dR4(r)
if(q==null){d.G(x.q).f.R(D.cEQ)
w=1
break}w=4
return A.b(A.bQ(B.i0,null,x.H),$async$Yv)
case 4:if(d.e==null){w=1
break}n=B.l.a0(e,1,999)
$.dtt=n
p=C.dQZ(n)
n=$.FT()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dhw(q)
d.G(x.q).f.R(A.bq(null,null,null,null,null,B.y,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Yv,v)},
dtw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aX(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aX(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.nX(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Jj(d){return C.dR7(d)},
dR7(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Jj=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Jj)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a3(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.H.aG(0,a0,null)
w=x.a.b(r)&&J.cI(r)?10:11
break
case 10:k=J.f0(r,x.f)
k=A.dv(k,new C.bll(),k.$ti.j("G.E"),x.k)
j=A.O(k).j("ag<G.E>")
i=A.B(new A.ag(k,new C.blm(),j),j.j("G.E"))
q=i
if(J.a5(q)>=20){u=q
w=1
break}p=C.dty(q)
w=12
return A.b(C.Ji(a3,p),$async$Jj)
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
case 9:case 5:o=A.aL(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.H.aG(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dtw(A.S(n,x.N,x.z))
l=C.dty(A.a([m],x.e))
w=21
return A.b(C.Ji(a3,l),$async$Jj)
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
case 18:case 14:q=C.dR5()
w=22
return A.b(C.Ji(a3,q),$async$Jj)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jj,v)},
dty(d){var w=A.W(d).j("C<1,o>"),v=new A.C(d,new C.bld(),w).eJ(0),u=new A.C(d,new C.ble(),w).eJ(0),t=new A.C(d,new C.blf(),w).eJ(0),s=new A.C(d,new C.blg(),w).eJ(0),r=A.bg(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dhx(null,q,u,t,v,s));++q}return r},
avd(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$avd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jj(d),$async$avd)
case 3:t=f
s=x.N
r=J.cf(t)
q=r.de(t,new C.blh(),s).eJ(0)
p=r.de(t,new C.bli(),s).eJ(0)
o=r.de(t,new C.blj(),s).eJ(0)
n=r.de(t,new C.blk(),s).eJ(0)
m=C.dhx(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Ji(d,t),$async$avd)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avd,v)},
Ji(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Ji=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Ji)
case 2:u=g
t=B.b.i(d)
s=J.b4(e,new C.blc(),x.P)
s=A.B(s,s.$ti.j("a2.E"))
w=3
return A.b(u.av("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.H.ar(s,null)),$async$Ji)
case 3:return A.h(null,v)}})
return A.i($async$Ji,v)},
dR5(){var w,v=x.N,u=A.bb(v),t=A.bb(v),s=A.bb(v),r=A.bb(v),q=J.dG(20,x.k)
for(w=0;w<20;++w)q[w]=C.dhx(w,w,t,s,u,r)
return q},
dhx(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jq(),h=d==null,g=D.a4P[B.l.ae(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a4P[B.l.ae(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bF(256)
n=new A.C(p,new C.blb(),A.W(p).j("C<1,o>")).fl(0)
u="VND-"+B.b.af(n,0,4)+"-"+B.b.af(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bF(10)
t=B.h.fl(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bl(B.l.ia(i.bF(256),16),2,"0")
s=B.h.bm(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.ae(e,20)
k=D.bTg[w]
j=D.bKD[w]
return new C.nX("vd_"+1000*Date.now()+"_"+e+"_"+i.bF(99999),"Device "+B.b.bl(B.l.n(e+1),2,"0"),u,k,C.dR6(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.Q(Date.now(),0,!1).a3().Z())},
dR6(d,e){var w,v=J.dG(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bl(B.l.ia(d.bF(256),16),2,"0")
return B.h.fl(v)},
ddq:function ddq(d){this.a=d},
ddp:function ddp(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
ddm:function ddm(d){this.a=d},
ddn:function ddn(d){this.a=d},
ddo:function ddo(d,e){this.a=d
this.b=e},
MK:function MK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
nX:function nX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bll:function bll(){},
blm:function blm(){},
bld:function bld(){},
ble:function ble(){},
blf:function blf(){},
blg:function blg(){},
blh:function blh(){},
bli:function bli(){},
blj:function blj(){},
blk:function blk(){},
blc:function blc(){},
blb:function blb(){},
Jh:function Jh(d,e){this.c=d
this.a=e},
aeT:function aeT(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cEc:function cEc(){},
cEb:function cEb(d,e){this.a=d
this.b=e},
cE9:function cE9(d){this.a=d},
cEa:function cEa(d,e){this.a=d
this.b=e},
cEd:function cEd(d){this.a=d},
cEh:function cEh(d){this.a=d},
cEi:function cEi(d,e){this.a=d
this.b=e},
cEg:function cEg(d,e,f){this.a=d
this.b=e
this.c=f},
cEf:function cEf(d,e){this.a=d
this.b=e},
cEe:function cEe(d,e){this.a=d
this.b=e},
cEj:function cEj(d){this.a=d},
VR:function VR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aI0:function aI0(d,e){this.c=d
this.a=e},
Jg:function Jg(d,e){this.c=d
this.a=e},
aIZ:function aIZ(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cE6:function cE6(d){this.a=d},
cE7:function cE7(d){this.a=d},
cE8:function cE8(d){this.a=d},
cE5:function cE5(d,e){this.a=d
this.b=e},
cE2:function cE2(d){this.a=d},
cE3:function cE3(d){this.a=d},
cE1:function cE1(d,e){this.a=d
this.b=e},
cE4:function cE4(d){this.a=d},
cE0:function cE0(d){this.a=d},
aPK:function aPK(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aPL:function aPL(d,e,f){this.c=d
this.d=e
this.a=f},
aJ4:function aJ4(d,e){this.c=d
this.a=e},
aPJ:function aPJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cSK:function cSK(d){this.a=d},
cSL:function cSL(d){this.a=d},
aKi:function aKi(d){this.a=d},
aEi:function aEi(d,e){this.c=d
this.a=e},
dR4(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.Y(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dR3(v)
if(u!=null)return new C.q5(w,C.dhv(u,!1),D.ac2,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dR2(v)
if(t!=null)return new C.q5(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ac3,"TikTok",q)
s=C.dR1(w,v)
if(s!=null)return s
r=C.dR0(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.q5(w,w,D.cmK,"Video",q)
return q},
dR1(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).di(e)
if(s!=null){w=s.b[1]
w.toString
return new C.q5(d,"https://www.instagram.com/reel/"+w+u,D.MC,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).di(e)
if(v!=null){w=v.b[1]
w.toString
return new C.q5(d,"https://www.instagram.com/p/"+w+u,D.MC,t,null)}return null},
dR0(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.q5(d,"https://www.facebook.com/plugins/video.php?href="+A.eZ(2,d,B.b9,!1)+"&show_text=false&width=734",D.ac4,"Facebook",null)},
dR3(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].di(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dR2(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).di(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).di(d)
return w==null?null:w.b[1]},
Jk:function Jk(d,e){this.a=d
this.b=e},
q5:function q5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5o:function a5o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aJ_:function aJ_(d,e){var _=this
_.d=$
_.d3$=d
_.aY$=e
_.c=_.a=null},
aKn:function aKn(d,e){this.c=d
this.a=e},
cIb:function cIb(d){this.a=d},
cIc:function cIc(d){this.a=d},
EL:function EL(d,e){this.c=d
this.a=e},
ajy:function ajy(){},
dtx(d,e,f,g,h,i){return new C.a5p(i,f,h,e,g,d)},
e8E(d){var w=window
w.toString
A.hd(w,"message",new C.d9u(d),!1,x._)},
a5p:function a5p(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aeU:function aeU(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cEk:function cEk(d){this.a=d},
cEs:function cEs(d){this.a=d},
cEq:function cEq(d){this.a=d},
cEo:function cEo(d){this.a=d},
cEp:function cEp(d){this.a=d},
cEm:function cEm(d){this.a=d},
cEr:function cEr(d){this.a=d},
cEn:function cEn(d){this.a=d},
cEl:function cEl(d){this.a=d},
d9u:function d9u(d){this.a=d},
dtr(){var w,v,u
try{v=A.Ab()
w=v.grD(v)
if(J.a5(w)!==0&&!J.v(w,"null")&&!J.cJ(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dhv(d,e){var w=C.dtr(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eZ(2,w,B.b9,!1))
v.push("widget_referrer="+A.eZ(2,w,B.b9,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.h.bm(v,"&")},
dhu(d){var w=A.aq(y.c,!0,!1,!1,!1).di(d)
return w==null?null:w.b[1]},
dts(d){var w=A.bi(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bi(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dQY(d,e,f){var w,v,u=C.dhu(d)
if(u!=null){if(f){w=C.dtr()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dts(C.dhv(u,e))}return C.dts(d)},
dQZ(d){if(d<=4)return 0
return B.l.aK(d-1,4)*4},
dR_(d){var w
if($.Oq().a==null)return!1
w=$.FT().a
return d>=w&&d<w+4},
dtv(){var w=$.avc
if(w!=null)w.ac(0)
$.avc=null
$.FT().sv(0,0)},
dtu(){var w,v,u,t=$.Oq()
if(t.a==null)return
w=$.avc
if(w!=null)w.ac(0)
v=$.dtt
if(v<=4){t=t.a
t.toString
C.dhw(t)
return}w=$.FT()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dhw(t)},
dhw(d){var w=$.avc
if(w!=null)w.ac(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.avc=A.dI(A.dn(0,0,0,0,0,w),C.e8P())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.MK.prototype={
C(d){var w=null,v=this.e,u=v?B.aK:B.f,t=A.n(20),s=A.U(B.a7.l(0.25),B.x,1),r=A.Z(this.d,B.a7,w,w,14)
return A.t(w,A.H(A.a([r,B.fF,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a8:B.c3,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.o,w,B.i,B.a3,0,w,w),B.k,w,w,new A.r(u,w,s,t,w,w,B.p),w,w,w,B.fx,w,w,w)}}
C.nX.prototype={
ab(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Jh.prototype={
V(){return new C.aeT(A.a([],x.e))},
gec(){return this.c}}
C.aeT.prototype={
a_(){var w=this
w.a5()
$.FT().ao(0,w.gavW())
C.e8E(w.gbkq())
w.Y1()},
bjQ(){if(this.c!=null)this.p(new C.cEc())},
bkr(){C.dtu()},
q(){$.FT().X(0,this.gavW())
C.dtv()
$.Oq().sv(0,null)
this.a4()},
Y1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Jj(t.a.c),$async$Y1)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cEb(t,s))
$.bla=J.a5(s)
case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
U4(){var w=0,v=A.j(x.H),u,t=this,s
var $async$U4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cE9(t))
w=3
return A.b(C.avd(t.a.c),$async$U4)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cEa(t,s))
$.bla=J.a5(t.d)
t.c.G(x.q).f.R(A.bq(null,null,null,null,null,B.y,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.R,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$U4,v)},
bmi(d){var w=this.c
w.toString
A.a7(w,!1).cG(A.eI(new C.cEd(d),!1,null,x.H))},
bmR(){var w=this.c
w.toString
return C.Yv(w,J.a5(this.d))},
C(d){var w=this,v=null,u=A.D(d).ax.a===B.C,t=u?B.f4:B.bN,s=A.aN(v,v,v,v,B.JX,v,v,v,new C.cEh(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a5(w.d)+")",q=x.p
r=A.H(A.a([s,A.J(new A.Dd(A.H(A.a([A.J(new A.I(B.iW,A.d(r,v,1,B.aG,v,v,v,A.l(v,v,u?B.f:B.Z,v,v,v,v,v,v,v,v,15,v,v,B.E,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aK(!1,B.W,!0,v,A.aT(!1,v,!0,new A.I(B.bd,A.Z(B.fW,B.a7,v,v,28),v),B.cH,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbmQ(),v,v,v,v,v,v,v),B.k,B.N,0,v,v,v,v,v,B.ad)],q),B.o,v,B.i,B.j,0,v,v),v,v,v),1)],q),B.o,v,B.i,B.j,0,v,v)
s=A.c6(!0,A.x(A.a([new A.I(D.Vh,r,v),A.J(w.e?B.mI:new A.j6($.Oq(),new C.cEi(w,u),v,v,x.j),1)],q),B.o,B.i,B.j,0,B.r),!1,B.ah,!0,!0)
return A.cd(v,t,s,v,!1,!1,A.apr(B.a7,B.Fw,B.n8,D.d1g,w.e?v:new C.cEj(w)),v)}}
C.VR.prototype={
C(d){var w,v=this,u=null,t=A.n(14),s=A.n(14),r=A.U(B.f.l(0.1),B.x,1),q=A.a([new A.ac(0,B.G,B.a7.l(0.18),B.de,8)],x.V),p=A.n(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a5o(n,!0,!C.dR_(w),"Fold "+(B.l.aK(w,4)+1)+"/"+B.l.aK(v.e+4-1,4),u)
n=w}else n=A.t(u,A.x(A.a([A.Z(B.jz,B.mQ,u,u,22),B.aL,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.f.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.o,B.aW,B.j,0,B.r),B.k,B.yg,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aK(!1,B.W,!0,u,A.aT(!1,t,!0,A.x(A.a([A.J(A.t(u,A.cl(p,A.hf(A.x(A.a([new C.aI0(o,u),A.J(n,1),A.t(u,A.H(A.a([A.Z(B.Au,B.a7.l(0.85),u,u,9),D.cAJ,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.f.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.o,u,B.aW,B.j,0,u,u),B.k,B.aw,u,u,u,u,u,D.aAz,u,u,u)],w),B.o,B.i,B.j,0,B.r),B.A,!0),B.aP),B.k,u,u,new A.r(u,u,r,s,q,D.Zp,B.p),u,u,u,B.fT,u,u,u),1),B.aL,A.d(o.b,u,1,B.aG,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.aG,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.aG,u,u,u,A.l(u,u,B.a7.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.o,B.i,B.j,0,B.r),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.N,0,u,u,u,u,u,B.ad)}}
C.aI0.prototype={
C(d){var w=null
return A.t(w,A.H(A.a([A.J(A.d(B.h.gaz(this.c.c.split("-")),w,w,B.aG,w,w,w,A.l(w,w,B.f.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.r6,B.f.l(0.45),w,w,7)],x.p),B.o,w,B.i,B.j,0,w,w),B.k,B.aw,w,w,w,w,w,B.V8,w,w,w)}}
C.Jg.prototype={
V(){return new C.aIZ()}}
C.aIZ.prototype={
C(d){var w=null,v=A.D(d).ax.a===B.C,u=v?B.f4:B.bN,t=A.aN(w,w,w,w,B.JX,w,w,w,new C.cE6(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.cd(w,u,A.c6(!0,A.x(A.a([new A.I(D.Vh,A.H(A.a([t,A.J(new A.Dd(A.H(A.a([A.J(new A.I(B.iW,A.d(s.b+" \xb7 "+s.c,w,1,B.aG,w,w,w,A.l(w,w,v?B.f:B.Z,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aK(!1,B.W,!0,w,A.aT(!1,w,!0,new A.I(B.bd,A.Z(B.fW,B.a7,w,w,28),w),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cE7(d),w,w,w,w,w,w,w),B.k,B.N,0,w,w,w,w,w,B.ad)],r),B.o,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.o,w,B.i,B.j,0,w,w),w),A.J(new A.j6($.Oq(),new C.cE8(this),w,w,x.j),1)],r),B.o,B.i,B.j,0,B.r),!1,B.ah,!0,!0),w,!1,!1,w,w)}}
C.aPK.prototype={
C(d){var w,v,u,t=this,s=null,r=t.c,q=A.n(36),p=A.a([new A.ac(0,B.G,B.a7.l(0.35),B.eY,28),new A.ac(0,B.G,B.A.l(0.45),B.d5,18)],x.V),o=A.U(B.f.l(0.12),B.x,2),n=A.n(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dtx(new A.dy(v+"_full_"+u,x.W),!1,u,!1,w.gaLk(),v+"_full")
w=v}else w=new C.aJ4(t.r,s)}else w=new C.aEi(m,s)
else w=D.d7H
return A.t(s,A.cl(n,A.hf(A.x(A.a([new C.aPL(m,l,s),A.J(w,1),new C.aPJ(t.f,l,t.w,t.x,s)],x.p),B.o,B.i,B.j,0,B.r),B.A,!0),B.aP),B.k,s,s,new A.r(s,s,o,q,p,D.Zp,B.p),s,r*2.05,s,B.bL,s,s,r)}}
C.aPL.prototype={
C(d){var w,v,u,t,s=null,r=new A.Q(Date.now(),0,!1),q=A.dw(r)
r=A.hF(r)
w=new A.dx(q,r)
v=w.gIQ()===0?12:w.gIQ()
r=B.b.bl(B.l.n(r),2,"0")
q=(q<12?B.fQ:B.iS)===B.fQ?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.H(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.ms,s,s,s),B.bx,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.f.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bS,D.aLs,B.eg,D.aKH,B.eg,D.aLw],t),B.o,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aL,A.H(A.a([A.Z(B.JN,B.a7.l(0.9),s,s,12),B.eg,A.J(A.d(u.c,s,s,B.aG,s,s,s,A.l(s,s,B.f.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.f.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.o,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.x(q,B.o,B.i,B.j,0,B.r),B.k,B.aw,s,s,s,s,s,D.aBk,s,s,s)}}
C.aJ4.prototype={
C(d){var w=null
return A.t(w,A.aM(A.x(A.a([A.Z(B.A5,B.f.l(0.35),w,w,40),B.T,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.f.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aL,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.f.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.eJ(D.aOS,D.cQ5,this.c,A.es(w,w,w,w,w,w,w,w,w,B.a7,w,w,w,w,w,new A.aF(B.a7.l(0.5),1,B.x,-1),w,w,w,w))],x.p),B.o,B.i,B.a3,0,B.r),w,w,w),B.k,B.yg,w,w,w,w,w,w,w,w,1/0)}}
C.aPJ.prototype={
C(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.avO(B.JG,"YouTube",s===0,r,new C.cSK(u))
s=u.avO(B.l1,"Device",s===1,r,new C.cSL(u))
w=r?"Power off":"Power on"
v=r?D.XN:D.aIJ
return A.t(t,A.H(A.a([q,B.ak,s,B.bx,A.aN(t,t,t,t,A.Z(v,r?B.bC:B.fl,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dk)],x.p),B.o,t,B.i,B.j,0,t,t),B.k,B.aw,t,t,t,t,t,D.aB5,t,t,t)},
avO(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bm
else w=f?B.a7:B.au
v=f&&g?B.a7.l(0.15):B.N
u=A.n(10)
t=g?h:s
return A.J(A.aK(!1,B.W,!0,u,A.aT(!1,A.n(10),!0,new A.I(B.mZ,A.x(A.a([A.Z(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.o,B.i,B.a3,0,B.r),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.ad),1)}}
C.aKi.prototype={
C(d){return D.ar6}}
C.aEi.prototype={
C(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.lo,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.f.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tj("Serial",u.c),q=w.tj("Model",u.d),p=w.tj("Device ID",u.e),o=w.tj("IMEI",u.r),n=w.tj("MAC",u.f),m=w.tj("OS",u.w+" "+u.x),l=w.tj("Location",u.y+", "+u.z),k=w.tj("Coordinates",B.m.a2(u.Q,4)+", "+B.m.a2(u.as,4)),j=w.tj("Timezone",u.at)
u=u.ax
return A.eB(A.a([t,B.aL,s,B.a9,r,q,p,o,n,m,l,k,j,w.tj("Provisioned",u.length>=10?B.b.af(u,0,10):u)],x.p),v,B.bd,v,v,B.al,!1)},
tj(d,e){var w=null
return new A.I(B.cG,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.f.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cA,A.d(e,w,w,w,w,w,w,D.cI0,w,w,w)],x.p),B.F,B.i,B.j,0,B.r),w)}}
C.Jk.prototype={
P(){return"NgmyVirtualMediaPlatform."+this.b}}
C.q5.prototype={
gaLk(){var w=this.c
return w===D.ac2||w===D.ac3||w===D.MC||w===D.ac4}}
C.a5o.prototype={
V(){return new C.aJ_(null,null)}}
C.aJ_.prototype={
a_(){this.a5()
var w=A.bJ(null,B.uy,null,1,null,this)
w.mN(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aV0()},
C(d){var w,v,u=this,t=null,s=u.a.c,r=A.dN(t,new A.r(t,t,t,t,t,new A.an(B.dh,B.cB,B.J,A.a([B.N,B.A.l(0.55)],x.O),t,t),B.p),B.c1),q=x.Y,p=u.d
p===$&&A.c()
p=A.cx(B.ir,p,t)
w=B.f.l(0.92)
q=A.aM(new A.d5(new A.b3(p,new A.bl(0.72,1,q),q.j("b3<bk.T>")),!1,A.Z(B.jz,w,t,t,20),t),t,t,t)
p=u.a.e?B.f.l(0.22):B.mQ
w=A.n(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aKn(s,t),r,q,A.b_(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.f,t,t,t,t,t,t,t,t,5,t,t,B.E,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.r(p,t,t,w,t,t,B.p),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.f.l(0.75)
s.push(A.b_(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.f.l(0.85)
s.push(A.b_(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aJ(B.am,t,B.bi,B.y,s,t)}}
C.aKn.prototype={
C(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kM(u,new C.cIb(this),B.cd,B.bY,!0,w,w,new C.cIc(this),w)
return new C.EL(v,w)}}
C.EL.prototype={
C(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aO(A.a([B.uf,B.Rv],x.O),B.jz)
break
case 1:w=new A.aO(A.a([B.yg,D.avp],x.O),B.l3)
break
case 2:w=new A.aO(A.a([D.awY,D.auT],x.O),B.Ac)
break
case 3:w=new A.aO(A.a([B.Z,B.dl],x.O),B.Ag)
break
case 4:w=new A.aO(A.a([B.aw,B.aK],x.O),B.oM)
break
default:w=u}v=w.a
return A.t(u,A.aM(A.Z(w.b,B.a7.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.r(u,u,u,u,u,new A.an(B.aM,B.aS,B.J,v,u,u),B.p),u,u,u,u,u,u,u)}}
C.ajy.prototype={
q(){var w=this,v=w.aY$
if(v!=null)v.X(0,w.gdK())
w.aY$=null
w.a4()},
by(){this.bR()
this.bM()
this.dL()}}
C.a5p.prototype={
V(){return new C.aeU()}}
C.aeU.prototype={
bDy(d,e){var w=C.dhu(d)
if(w!=null)return C.dhv(w,e)
return d},
a6I(d,e){var w,v=this,u=C.dhu(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bDy(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dQY(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bBs(){var w,v=this
if(v.w)return
v.p(new C.cEk(v))
w=v.e
if(w!=null)v.a6I(w,v.a.d)},
a_(){var w,v,u=this
u.a5()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aR()
u.d=w
try{$.FV()
$.pv().uw(w,new C.cEs(u),!0)}catch(v){u.r=!0
u.f=!1}},
b2(d){var w,v=this
v.bc(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cEl(v))
w=v.e
w.toString
v.a6I(w,v.a.d)}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.f.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.Y_,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.Q,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.f.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.U,n,n)],v))
return A.hf(A.aM(new A.I(new A.V(12,12,12,12),A.x(w,B.o,B.i,B.a3,0,B.r),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.a0T(n,B.rS,w)],v)
if(o.f)w.push(A.hf(A.aM(new A.aj(28,28,D.as5,n),n,n,n),B.cU,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.n(14)
r=A.U(B.bm,B.x,1)
q=A.Z(B.JR,B.f.l(0.9),n,n,22)
p=B.f.l(0.92)
o.a.toString
w.push(A.eX(0,A.aK(!1,B.W,!0,n,A.aT(!1,n,!0,A.aM(A.t(n,A.H(A.a([q,B.ak,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.o,n,B.i,B.a3,0,n,n),B.k,n,n,new A.r(t,n,r,s,n,n,B.p),n,n,n,D.UF,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbBr(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.ad)))}return new A.aJ(B.am,n,B.bi,B.y,w,n)}}
var z=a.updateTypes(["o(nX)","~()","Jh(T)","nX(Y<@,@>)","a1(nX)","Y<o,@>(nX)","az<~>()","Jg(T)","j6<K>(T,q5?,q?)","VR(T,K)","tB(T,q5?,q?)","EL(T,ak,dM?)"])
C.ddq.prototype={
$1(d){return new C.Jh(this.a,null)},
$S:z+2}
C.ddp.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.C,l=A.aD(d,n,x.w).w,k=A.n(28),j=x.O,i=m?A.a([B.dN,B.Z],j):A.a([B.f,B.ax],j),h=A.a([new A.ac(0,B.G,B.a7.l(0.22),B.eY,32)],x.V),g=A.U(m?B.c6:B.a7.l(0.18),B.x,1),f=A.n(28),e=B.a7.l(m?0.35:0.14)
j=A.a([e,B.aq.l(m?0.18:0.08)],j)
e=A.t(n,D.aKo,B.k,n,n,new A.r(B.a7.l(0.18),n,A.U(B.a7.l(0.45),B.x,1),n,n,n,B.aE),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.f:B.Z,n,n,n,n,n,n,n,n,18,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.J(A.x(A.a([w,B.aL,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.ap,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.F,B.i,B.j,0,B.r),1)
j=A.t(n,A.H(A.a([e,B.eZ,w,A.aN(n,n,n,n,A.Z(B.d4,m?B.au:B.cU,n,n,n),n,n,n,new C.ddl(d),n,n,n,n,n,n)],v),B.o,n,B.i,B.j,0,n,n),B.k,n,n,new A.r(n,n,n,n,n,new A.an(B.ai,B.aj,B.J,j,n,n),B.p),n,n,n,B.HE,n,n,n)
e=A.el(B.cx,A.a([new C.MK("YouTube",B.JM,m,n),new C.MK("TikTok",B.l3,m,n),new C.MK("Instagram",B.Ac,m,n),new C.MK("Facebook",B.Ag,m,n)],v),B.cp,8,8)
w=this.b
u=A.l(n,n,m?B.f:B.Z,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cf:B.hW,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aK:B.bN
r=A.Z(B.jx,B.a7.l(0.85),n,n,n)
q=A.n(16)
p=A.n(16)
o=m?B.c6:B.aQ
u=A.x(A.a([e,B.aT,A.aH(n,B.M,!0,n,!0,B.y,n,A.aI(),w,n,n,n,n,n,2,A.br(n,new A.ba(4,q,B.V),n,n,n,n,n,n,!0,new A.ba(4,p,new A.aF(o,1,B.x,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.ba(4,A.n(16),B.Qe),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.D,!0,n,!0,n,!1,n,B.a4,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.X,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.a6,n,n,n,n)],v),B.av,B.i,B.j,0,B.r)
e=A.jG(D.aKr,D.d0o,new C.ddm(d),A.iF(n,n,n,n,n,n,n,n,n,n,n,m?B.bf:B.ap,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.V(12,0,12,12+l.f.d),A.dN(A.cl(f,A.x(A.a([j,new A.I(B.US,u,n),new A.I(D.aCC,A.H(A.a([e,B.bx,A.c1(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a8:B.at,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.ddn(d),n,n),B.ak,A.dQ(D.aOB,D.d1b,new C.ddo(d,w),A.bz(B.a7,n,n,n,B.f,n,D.UF,n,new A.bG(A.n(14),B.V),n,n,n))],v),B.o,n,B.i,B.j,0,n,n),n)],v),B.av,B.i,B.a3,0,B.r),B.aP),new A.r(n,n,g,k,h,new A.an(B.aM,B.aS,B.J,i,n,n),B.p),B.c1),n)},
$S:78}
C.ddl.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.ddm.prototype={
$0(){C.dtv()
$.Oq().sv(0,null)
A.a7(this.a,!1).T(null)},
$S:0}
C.ddn.prototype={
$0(){A.a7(this.a,!1).T(null)
return null},
$S:0}
C.ddo.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a7(this.a,!1).T(w)
return null},
$S:0}
C.bll.prototype={
$1(d){return C.dtw(A.S(d,x.N,x.z))},
$S:z+3}
C.blm.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bld.prototype={
$1(d){return d.c},
$S:z+0}
C.ble.prototype={
$1(d){return d.r},
$S:z+0}
C.blf.prototype={
$1(d){return d.f},
$S:z+0}
C.blg.prototype={
$1(d){return d.at},
$S:z+0}
C.blh.prototype={
$1(d){return d.c},
$S:z+0}
C.bli.prototype={
$1(d){return d.r},
$S:z+0}
C.blj.prototype={
$1(d){return d.f},
$S:z+0}
C.blk.prototype={
$1(d){return d.at},
$S:z+0}
C.blc.prototype={
$1(d){return d.ab()},
$S:z+5}
C.blb.prototype={
$1(d){return B.b.bl(B.l.ia(d,16),2,"0").toUpperCase()},
$S:81}
C.cEc.prototype={
$0(){},
$S:0}
C.cEb.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cE9.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cEa.prototype={
$0(){var w=this.a,v=A.B(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cEd.prototype={
$1(d){return new C.Jg(this.a,null)},
$S:z+7}
C.cEh.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.cEi.prototype={
$3(d,e,f){return new A.j6($.FT(),new C.cEg(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cEg.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.CG(d,k,x.Q)
w=w==null?k:w.gll()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a7.l(0.12)
s=A.n(12)
r=A.U(B.a7.l(0.35),B.x,1)
q=A.Z(B.jz,B.a7,k,k,18)
p=j.d
o=J.a5(l.a.d)
n=$.FT().a
m=B.m.a0(n+4,1,o)
t=A.a([A.t(k,A.H(A.a([q,B.ak,A.J(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.f:B.Z,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.o,k,B.i,B.j,0,k,k),B.k,k,k,new A.r(t,k,r,s,k,k,B.p),k,k,B.da,B.fy,k,k,1/0)],w)
if(v){s=A.n(16)
r=j.b
B.h.A(t,A.a([A.cl(s,new A.js(1.7777777777777777,C.dtx(new A.dy("fleet_master_"+r,x.W),!0,r,!0,j.gaLk(),"fleet_master"),k),B.aP),B.a9],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a5(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.vq(0,B.y,k,B.D,k,k,k,k,!1,k,B.al,!1,A.a([new A.kp(new A.I(B.Hw,A.x(u,B.F,B.i,B.j,0,B.r),k),k),new A.o6(D.aAI,A.azh(new A.ni(new C.cEf(i,j),J.a5(i.d),!1,!0,!0,A.t6(),k),D.cBt),k)],w))},
$S:1658}
C.cEf.prototype={
$2(d,e){var w=this.a,v=J.m(w.d,e)
return new C.VR(v,e,J.a5(w.d),new C.cEe(w,v),this.b,null)},
$S:z+9}
C.cEe.prototype={
$0(){return this.a.bmi(this.b)},
$S:0}
C.cEj.prototype={
$0(){this.a.U4()
return null},
$S:0}
C.cE6.prototype={
$0(){return A.a7(this.a,!1).eq()},
$S:0}
C.cE7.prototype={
$0(){C.Yv(this.a,$.bla)
return null},
$S:0}
C.cE8.prototype={
$3(d,e,f){return A.fS(new C.cE5(this.a,e))},
$S:z+10}
C.cE5.prototype={
$2(d,e){var w,v=null,u=B.m.a0(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aM(A.cy(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.U,v,v),B.aT,new C.aPK(u,s.a.c,s.e,s.d,new C.cE2(s),new C.cE3(s),new C.cE4(s),t,v)],x.p),B.o,B.i,B.j,0,B.r),v,B.D,v,B.qu,v,v,B.al),v,v,v)},
$S:1659}
C.cE2.prototype={
$0(){var w=this.a.c
w.toString
C.Yv(w,$.bla)
return null},
$S:0}
C.cE3.prototype={
$1(d){var w=this.a
return w.p(new C.cE1(w,d))},
$S:34}
C.cE1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cE4.prototype={
$0(){var w=this.a
return w.p(new C.cE0(w))},
$S:0}
C.cE0.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cSK.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cSL.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cIb.prototype={
$3(d,e,f){return new C.EL(this.a.c,null)},
$S:z+11}
C.cIc.prototype={
$3(d,e,f){if(f==null)return e
return new A.aJ(B.am,null,B.bi,B.y,A.a([new C.EL(this.a.c,null),D.ark],x.p),null)},
$C:"$3",
$R:3,
$S:263}
C.cEk.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cEs.prototype={
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
w.a6I(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hd(v,"load",new C.cEq(w),!1,u)
v=w.e
v.toString
A.hd(v,"error",new C.cEr(w),!1,u)
w=w.e
w.toString
return w},
$S:583}
C.cEq.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cEo(w))
A.bQ(B.R,new C.cEp(w),x.H)}},
$S:44}
C.cEo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cEp.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cEm(w))},
$S:12}
C.cEm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cEr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cEn(w))},
$S:44}
C.cEn.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cEl.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d9u.prototype={
$1(d){var w,v,u,t,s=new A.Ek([],[]).I5(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.H.aG(0,q,null)
s=x.f
if(s.b(w)){v=J.m(w,"info")
if(J.v(J.m(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.m(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.m(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1660};(function aliases(){var w=C.ajy.prototype
w.aV0=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aeT.prototype,"gavW","bjQ",1)
w(u,"gbkq","bkr",1)
w(u,"gbmQ","bmR",6)
w(C.aeU.prototype,"gbBr","bBs",1)
v(C,"e8P","dtu",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.y5,[C.ddq,C.ddp,C.bll,C.blm,C.bld,C.ble,C.blf,C.blg,C.blh,C.bli,C.blj,C.blk,C.blc,C.blb,C.cEd,C.cEi,C.cEg,C.cE8,C.cE3,C.cIb,C.cIc,C.cEs,C.cEq,C.cEr,C.d9u])
v(A.a_0,[C.ddl,C.ddm,C.ddn,C.ddo,C.cEc,C.cEb,C.cE9,C.cEa,C.cEh,C.cEe,C.cEj,C.cE6,C.cE7,C.cE2,C.cE1,C.cE4,C.cE0,C.cSK,C.cSL,C.cEk,C.cEo,C.cEp,C.cEm,C.cEn,C.cEl])
v(A.at,[C.MK,C.VR,C.aI0,C.aPK,C.aPL,C.aJ4,C.aPJ,C.aKi,C.aEi,C.aKn,C.EL])
v(A.ak,[C.nX,C.q5])
v(A.ad,[C.Jh,C.Jg,C.a5o,C.a5p])
v(A.ae,[C.aeT,C.aIZ,C.ajy,C.aeU])
v(A.a_1,[C.cEf,C.cE5])
u(C.Jk,A.aFc)
u(C.aJ_,C.ajy)
w(C.ajy,A.ek)})()
A.dwZ(b.typeUniverse,JSON.parse('{"Jh":{"ad":[],"q":[]},"VR":{"at":[],"q":[]},"Jg":{"ad":[],"q":[]},"MK":{"at":[],"q":[]},"aeT":{"ae":["Jh"]},"aI0":{"at":[],"q":[]},"aIZ":{"ae":["Jg"]},"aPK":{"at":[],"q":[]},"aPL":{"at":[],"q":[]},"aJ4":{"at":[],"q":[]},"aPJ":{"at":[],"q":[]},"aKi":{"at":[],"q":[]},"aEi":{"at":[],"q":[]},"a5o":{"ad":[],"q":[]},"EL":{"at":[],"q":[]},"aJ_":{"ae":["a5o"]},"aKn":{"at":[],"q":[]},"a5p":{"ad":[],"q":[]},"aeU":{"ae":["a5p"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b6
return{V:w("a6<ac>"),O:w("a6<A>"),e:w("a6<nX>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ab<nX>"),a:w("ab<@>"),P:w("Y<o,@>"),f:w("Y<@,@>"),w:w("nS"),_:w("CD"),k:w("nX"),N:w("o"),Y:w("bl<a9>"),W:w("dy<o>"),J:w("j6<K>"),j:w("j6<q5?>"),E:w("x0<cK>"),q:w("Wz"),z:w("@"),Q:w("ak?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.XN=new A.N(983224,"MaterialIcons",!1)
D.aN4=new A.a8(D.XN,48,B.bm,null,null,null)
D.cHE=new A.P(!0,B.cf,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cP1=new A.z("Powered off",null,D.cHE,null,null,null,null,null,null,null,null,null)
D.bHX=w([D.aN4,B.Q,D.cP1],x.p)
D.ay9=new A.f2(B.al,B.i,B.a3,B.o,null,B.r,null,0,D.bHX,null)
D.ar6=new A.dt(B.Y,null,null,D.ay9,null)
D.cB8=new A.aj(18,18,B.Re,null)
D.ark=new A.dt(B.Y,null,null,D.cB8,null)
D.as5=new A.hv(2,null,null,null,null,B.a8,null,null,null,null)
D.auT=new A.A(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.z)
D.avp=new A.A(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.z)
D.awY=new A.A(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.z)
D.aAz=new A.V(0,3,0,3)
D.aAI=new A.V(10,0,10,88)
D.aB5=new A.V(12,6,12,10)
D.aBk=new A.V(14,8,14,6)
D.UF=new A.V(18,12,18,12)
D.aCC=new A.V(20,8,20,20)
D.Vh=new A.V(8,6,15,8)
D.aIJ=new A.N(983222,"MaterialIcons",!1)
D.aKo=new A.a8(B.jz,26,B.a7,null,null,null)
D.aKr=new A.a8(B.X_,18,null,null,null,null)
D.aKH=new A.a8(B.r6,14,B.a8,null,null,null)
D.aJ_=new A.N(983420,"MaterialIcons",!1)
D.aLs=new A.a8(D.aJ_,14,B.a8,null,null,null)
D.aH8=new A.N(62895,"MaterialIcons",!1)
D.aLw=new A.a8(D.aH8,14,B.a8,null,null,null)
D.aOB=new A.a8(B.jy,20,null,null,null,null)
D.aOS=new A.a8(B.fW,16,null,null,null,null)
D.bLm=w([B.aK,B.Z],x.O)
D.Zp=new A.an(B.aM,B.aS,B.J,D.bLm,null,null)
D.cuV=new A.aO("NGMY OS","14.2.1")
D.ctM=new A.aO("VirtualDroid","13.8.4")
D.ctL=new A.aO("NGMY OS","15.0.0")
D.cuu=new A.aO("VirtualDroid","14.1.2")
D.ctJ=new A.aO("NGMY Tab OS","12.9.7")
D.ctH=new A.aO("NGMY OS","13.5.3")
D.ctw=new A.aO("VirtualDroid","15.2.0")
D.cu7=new A.aO("NGMY OS","14.8.1")
D.cuA=new A.aO("NGMY Tab OS","13.2.4")
D.cv4=new A.aO("VirtualDroid","12.6.9")
D.cts=new A.aO("NGMY OS","16.0.1")
D.ctj=new A.aO("VirtualDroid","14.9.0")
D.cuN=new A.aO("NGMY Tab OS","14.0.3")
D.ctV=new A.aO("NGMY OS","13.1.8")
D.ctr=new A.aO("VirtualDroid","13.4.5")
D.ctG=new A.aO("NGMY OS","15.3.2")
D.cuB=new A.aO("NGMY Tab OS","12.4.1")
D.cuP=new A.aO("VirtualDroid","16.1.0")
D.cu6=new A.aO("NGMY OS","14.4.6")
D.cuW=new A.aO("VirtualDroid","15.0.8")
D.bKD=w([D.cuV,D.ctM,D.ctL,D.cuu,D.ctJ,D.ctH,D.ctw,D.cu7,D.cuA,D.cv4,D.cts,D.ctj,D.cuN,D.ctV,D.ctr,D.ctG,D.cuB,D.cuP,D.cu6,D.cuW],A.b6("a6<+(o,o)>"))
D.cx6=new A.eD(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cwF=new A.eD(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cwA=new A.eD(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cwJ=new A.eD(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cww=new A.eD(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cwL=new A.eD(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cx8=new A.eD(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cwx=new A.eD(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cwE=new A.eD(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cwN=new A.eD(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cwv=new A.eD(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cx0=new A.eD(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cwY=new A.eD(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cwD=new A.eD(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cwV=new A.eD(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cwU=new A.eD(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cwu=new A.eD(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cwI=new A.eD(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cwS=new A.eD(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cwX=new A.eD(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a4P=w([D.cx6,D.cwF,D.cwA,D.cwJ,D.cww,D.cwL,D.cx8,D.cwx,D.cwE,D.cwN,D.cwv,D.cx0,D.cwY,D.cwD,D.cwV,D.cwU,D.cwu,D.cwI,D.cwS,D.cwX],A.b6("a6<+(o,o,a9,a9,o)>"))
D.bTg=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ac2=new C.Jk(0,"youtube")
D.ac3=new C.Jk(1,"tiktok")
D.MC=new C.Jk(2,"instagram")
D.ac4=new C.Jk(3,"facebook")
D.cmK=new C.Jk(4,"other")
D.cAJ=new A.aj(3,null,null,null)
D.cBt=new A.iE(4,10,8,0.52,null)
D.cQh=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cEQ=new A.aV(D.cQh,null,null,null,null,null,null,null,null,null,null,null,null,B.R,!1,null,null,null,B.y,null)
D.cI0=new A.P(!0,B.f,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cQ5=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d0o=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.d1b=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.d1g=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.d7H=new C.aKi(null)})();(function staticFields(){$.dtt=20
$.avc=null
$.bla=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"edP","FT",()=>A.Us(0))
w($,"edQ","Oq",()=>A.Us(null))})()};
(a=>{a["+yY9gdVxMVhPuCVu8huY0jyTEvg="]=a.current})($__dart_deferred_initializers__);