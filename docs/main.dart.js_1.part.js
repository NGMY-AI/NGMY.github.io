((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
eJ7(d,e){A.a0(d,!1).cq(A.eA(new C.dIu(e),!0,null,x.H))},
a15(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a15=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Ra()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.an(new A.be(n,B.aS,B.aH),t)
w=3
return A.b(A.d3(B.J,new C.dIt(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a15)
case 3:r=g
s.J$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.eng(r)
if(q==null){d.F(x.q).f.P(D.d05)
w=1
break}w=4
return A.b(A.bK(B.hV,null,x.H),$async$a15)
case 4:if(d.e==null){w=1
break}n=B.m.O(e,1,999)
$.dZl=n
p=C.ena(n)
n=$.Ib()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dME(q)
d.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
dZo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.p0(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
LI(d){return C.enj(d)},
enj(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$LI=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.as(),$async$LI)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a8(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.L.aB(0,a0,null)
w=x.a.b(r)&&J.cL(r)?10:11
break
case 10:k=J.ez(r,x.f)
k=A.de(k,new C.bwu(),k.$ti.j("I.E"),x.k)
j=A.T(k).j("af<I.E>")
i=A.y(new A.af(k,new C.bwv(),j),j.j("I.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dZq(q)
w=12
return A.b(C.LH(a3,p),$async$LI)
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
n=B.L.aB(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dZo(A.S(n,x.N,x.z))
l=C.dZq(A.a([m],x.e))
w=21
return A.b(C.LH(a3,l),$async$LI)
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
case 18:case 14:q=C.enh()
w=22
return A.b(C.LH(a3,q),$async$LI)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LI,v)},
dZq(d){var w=A.V(d).j("H<1,p>"),v=new A.H(d,new C.bwm(),w).es(0),u=new A.H(d,new C.bwn(),w).es(0),t=new A.H(d,new C.bwo(),w).es(0),s=new A.H(d,new C.bwp(),w).es(0),r=A.bc(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dMF(null,q,u,t,v,s));++q}return r},
aCT(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aCT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LI(d),$async$aCT)
case 3:t=f
s=x.N
r=J.ca(t)
q=r.d5(t,new C.bwq(),s).es(0)
p=r.d5(t,new C.bwr(),s).es(0)
o=r.d5(t,new C.bws(),s).es(0)
n=r.d5(t,new C.bwt(),s).es(0)
m=C.dMF(null,r.gD(t),p,o,q,n)
r.E(t,m)
w=4
return A.b(C.LH(d,t),$async$aCT)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aCT,v)},
LH(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$LH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.as(),$async$LH)
case 2:u=g
t=B.b.i(d)
s=J.aS(e,new C.bwl(),x.P)
s=A.y(s,s.$ti.j("a6.E"))
w=3
return A.b(u.aj("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.L.ai(s,null)),$async$LH)
case 3:return A.h(null,v)}})
return A.i($async$LH,v)},
enh(){var w,v=x.N,u=A.b8(v),t=A.b8(v),s=A.b8(v),r=A.b8(v),q=J.cN(20,x.k)
for(w=0;w<20;++w)q[w]=C.dMF(w,w,t,s,u,r)
return q},
dMF(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.lr(),h=d==null,g=D.abF[B.m.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.abF[B.m.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bv(256)
n=new A.H(p,new C.bwk(),A.V(p).j("H<1,p>")).fT(0)
u="VND-"+B.b.am(n,0,4)+"-"+B.b.am(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bv(10)
t=B.f.fT(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.b7(B.m.ha(i.bv(256),16),2,"0")
s=B.f.b9(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.E(0,u)
f.E(0,t)
a0.E(0,s)
h=g.a
a2.E(0,h[4])
w=B.m.a2(e,20)
k=D.c8W[w]
j=D.c_0[w]
return new C.p0("vd_"+1000*Date.now()+"_"+e+"_"+i.bv(99999),"Device "+B.b.b7(B.m.q(e+1),2,"0"),u,k,C.eni(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.R(Date.now(),0,!1).a7().a3())},
eni(d,e){var w,v=J.cN(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.b7(B.m.ha(d.bv(256),16),2,"0")
return B.f.fT(v)},
dIu:function dIu(d){this.a=d},
dIt:function dIt(d,e){this.a=d
this.b=e},
dIp:function dIp(d){this.a=d},
dIq:function dIq(d){this.a=d},
dIr:function dIr(d){this.a=d},
dIs:function dIs(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
p0:function p0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bwu:function bwu(){},
bwv:function bwv(){},
bwm:function bwm(){},
bwn:function bwn(){},
bwo:function bwo(){},
bwp:function bwp(){},
bwq:function bwq(){},
bwr:function bwr(){},
bws:function bws(){},
bwt:function bwt(){},
bwl:function bwl(){},
bwk:function bwk(){},
LG:function LG(d,e){this.c=d
this.a=e},
ak_:function ak_(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d34:function d34(){},
d33:function d33(d,e){this.a=d
this.b=e},
d31:function d31(d){this.a=d},
d32:function d32(d,e){this.a=d
this.b=e},
d35:function d35(d){this.a=d},
d3a:function d3a(d){this.a=d},
d39:function d39(d){this.a=d},
d3b:function d3b(d,e){this.a=d
this.b=e},
d38:function d38(d,e,f){this.a=d
this.b=e
this.c=f},
d37:function d37(d,e){this.a=d
this.b=e},
d36:function d36(d,e){this.a=d
this.b=e},
d3c:function d3c(d){this.a=d},
Z2:function Z2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQs:function aQs(d,e){this.c=d
this.a=e},
LF:function LF(d,e){this.c=d
this.a=e},
aRH:function aRH(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
d2Z:function d2Z(d){this.a=d},
d3_:function d3_(d){this.a=d},
d30:function d30(d){this.a=d},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d2V:function d2V(d){this.a=d},
d2W:function d2W(d){this.a=d},
d2U:function d2U(d,e){this.a=d
this.b=e},
d2X:function d2X(d){this.a=d},
d2T:function d2T(d){this.a=d},
aYZ:function aYZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aZ_:function aZ_(d,e,f){this.c=d
this.d=e
this.a=f},
aRN:function aRN(d,e){this.c=d
this.a=e},
aYY:function aYY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
djW:function djW(d){this.a=d},
djX:function djX(d){this.a=d},
aT7:function aT7(d){this.a=d},
aMt:function aMt(d,e){this.c=d
this.a=e},
eng(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.enf(v)
if(u!=null)return new C.rk(w,C.dMD(u,!1),D.ajs,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.ene(v)
if(t!=null)return new C.rk(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.ajt,"TikTok",q)
s=C.end(w,v)
if(s!=null)return s
r=C.enc(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.rk(w,w,D.cH5,"Video",q)
return q},
end(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ak("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(s!=null){w=s.b[1]
w.toString
return new C.rk(d,"https://www.instagram.com/reel/"+w+u,D.Rh,t,null)}v=A.ak("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dv(e)
if(v!=null){w=v.b[1]
w.toString
return new C.rk(d,"https://www.instagram.com/p/"+w+u,D.Rh,t,null)}return null},
enc(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.rk(d,"https://www.facebook.com/plugins/video.php?href="+A.fT(2,d,B.by,!1)+"&show_text=false&width=734",D.aju,"Facebook",null)},
enf(d){var w,v,u,t=[A.ak(y.c,!0,!1,!1,!1),A.ak("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ak("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dv(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
ene(d){var w,v=A.ak("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dv(d)
if(v!=null)return v.b[1]
w=A.ak("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
LJ:function LJ(d,e){this.a=d
this.b=e},
rk:function rk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9v:function a9v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRI:function aRI(d,e){var _=this
_.d=$
_.cm$=d
_.aD$=e
_.c=_.a=null},
aTc:function aTc(d,e){this.c=d
this.a=e},
d7p:function d7p(d){this.a=d},
d7q:function d7q(d){this.a=d},
GW:function GW(d,e){this.c=d
this.a=e},
apz:function apz(){},
dZp(d,e,f,g,h,i){return new C.a9w(i,f,h,e,g,d)},
eHC(d){var w=window
w.toString
A.h6(w,"message",new C.dDN(d),!1,x._)},
a9w:function a9w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ak0:function ak0(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
d3d:function d3d(d){this.a=d},
d3m:function d3m(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3i:function d3i(d){this.a=d},
d3k:function d3k(d){this.a=d},
d3h:function d3h(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3g:function d3g(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3e:function d3e(d){this.a=d},
dDN:function dDN(d){this.a=d},
en8(){var w,v,u
try{v=A.rF()
w=v.gvh(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dMD(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.f.b9(w,"&")},
bwi(d){var w=A.ak(y.c,!0,!1,!1,!1).dv(d)
return w==null?null:w.b[1]},
dZk(d){var w=A.aR(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.aR(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
en9(d,e,f){var w,v,u=C.bwi(d)
if(u!=null){if(f){w=C.en8()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dZk(C.dMD(u,e))}return C.dZk(d)},
ena(d){if(d<=4)return 0
return B.m.al(d-1,4)*4},
enb(d){var w
if($.Ra().a==null)return!1
w=$.Ib().a
return d>=w&&d<w+4},
dZn(){var w=$.aCS
if(w!=null)w.aa(0)
$.aCS=null
$.Ib().sv(0,0)},
dZm(){var w,v,u,t=$.Ra()
if(t.a==null)return
w=$.aCS
if(w!=null)w.aa(0)
v=$.dZl
if(v<=4){t=t.a
t.toString
C.dME(t)
return}w=$.Ib()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dME(t)},
dME(d){var w=$.aCS
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
default:w=null}$.aCS=A.dv(A.d7(0,0,0,0,0,w),C.eHS())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Pg.prototype={
B(d){var w=null,v=this.e,u=v?B.aP:B.c,t=A.m(20),s=A.J(B.a6.k(0.25),B.r,1),r=A.W(this.d,B.a6,w,w,14)
return A.q(w,A.F(A.a([r,B.fK,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.a9:B.cr,w,w,w,w,w,w,w,w,11,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.Z,0,w,w),B.j,w,w,new A.o(u,w,s,t,w,w,B.o),w,w,w,w,B.fT,w,w,w)}}
C.p0.prototype={
ab(){var w=this
return A.v(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.LG.prototype={
U(){return new C.ak_(A.a([],x.e))},
gej(){return this.c}}
C.ak_.prototype={
a_(){var w=this
w.a4()
$.Ib().aA(0,w.gaCb())
C.eHC(w.gbw2())
w.a0U()},
bvu(){if(this.c!=null)this.n(new C.d34())},
bw3(){C.dZm()},
p(){$.Ib().Z(0,this.gaCb())
C.dZn()
$.Ra().sv(0,null)
this.a5()},
a0U(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.LI(t.a.c),$async$a0U)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d33(t,s))
$.bwj=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$a0U,v)},
Xn(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.d31(t))
w=3
return A.b(C.aCT(t.a.c),$async$Xn)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d32(t,s))
$.bwj=J.a4(t.d)
t.c.F(x.q).f.P(A.bg(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.P,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
by8(d){var w=this.c
w.toString
A.a0(w,!1).cq(A.eA(new C.d35(d),!1,null,x.H))},
byP(){var w=this.c
w.toString
return C.a15(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.C,t=u?B.id:B.bD,s=A.bB(!0,A.u(A.a([new A.C(D.a_Y,new A.jq(new C.d3a(w),v),v),A.E(w.e?B.n4:new A.lO($.Ra(),new C.d3b(w,u),v,v,x.j),1)],x.p),B.n,v,B.i,B.k,0,B.p),!1,B.ab,!0,!0)
return A.c2(v,t,s,v,!1,!1,A.awj(B.a6,B.Jw,B.kL,D.dqP,w.e?v:new C.d3c(w)),v)}}
C.Z2.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.J(B.c.k(0.1),B.r,1),q=A.a([new A.a5(0,B.G,B.a6.k(0.18),B.dG,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a9v(n,!0,!C.enb(w),"Fold "+(B.m.al(w,4)+1)+"/"+B.m.al(v.e+4-1,4),u)
n=w}else n=A.q(u,A.u(A.a([A.W(B.kI,B.oA,u,u,22),B.aJ,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.k(0.7),u,u,u,u,u,u,u,u,7,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,u,B.b_,B.k,0,B.p),B.j,B.B2,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.az(!1,B.Q,!0,u,A.aG(!1,t,!0,A.u(A.a([A.E(A.q(u,A.bQ(p,A.f1(A.u(A.a([new C.aQs(o,u),A.E(n,1),A.q(u,A.F(A.a([A.W(B.xX,B.a6.k(0.85),u,u,9),B.aq1,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.k(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.b_,B.k,0,u,u),B.j,B.aw,u,u,u,u,u,u,D.aMn,u,u,u)],w),B.n,u,B.i,B.k,0,B.p),B.A,!0),B.aB),B.j,u,u,new A.o(u,u,r,s,q,D.a4G,B.o),u,u,u,u,B.fb,u,u,u),1),B.aJ,A.d(o.b,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.K,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ar,u,u,u,A.l(u,u,A.B(d).ax.k3.k(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ar,u,u,u,A.l(u,u,B.a6.k(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.i,B.k,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.j,B.J,0,u,u,u,u,u,B.a1)}}
C.aQs.prototype={
B(d){var w=null
return A.q(w,A.F(A.a([A.E(A.d(B.f.ga6(this.c.c.split("-")),w,w,B.ar,w,w,w,A.l(w,w,B.c.k(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.uy,B.c.k(0.45),w,w,7)],x.p),B.n,w,B.i,B.k,0,w,w),B.j,B.aw,w,w,w,w,w,w,B.a_N,w,w,w)}}
C.LF.prototype={
U(){return new C.aRH()}}
C.aRH.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.C,u=v?B.id:B.bD,t=A.aN(w,w,w,w,B.a3E,w,w,w,new C.d2Z(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c2(w,u,A.bB(!0,A.u(A.a([new A.C(D.a_Y,A.F(A.a([t,A.E(new A.Lu(A.F(A.a([A.E(new A.C(B.k_,A.d(s.b+" \xb7 "+s.c,w,1,B.ar,w,w,w,A.l(w,w,v?B.c:B.U,w,w,w,w,w,w,w,w,14,w,w,B.B,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.az(!1,B.Q,!0,w,A.aG(!1,w,!0,new A.C(B.bp,A.W(B.hI,B.a6,w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3_(d),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],r),B.n,w,B.i,B.k,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.k,0,w,w),w),A.E(new A.lO($.Ra(),new C.d30(this),w,w,x.j),1)],r),B.n,w,B.i,B.k,0,B.p),!1,B.ab,!0,!0),w,!1,!1,w,w)}}
C.aYZ.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a5(0,B.G,B.a6.k(0.35),B.eB,28),new A.a5(0,B.G,B.A.k(0.45),B.d8,18)],x.V),o=A.J(B.c.k(0.12),B.r,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dZp(new A.d4(v+"_full_"+u,x.W),!1,u,!1,w.gaSG(),v+"_full")
w=v}else w=new C.aRN(t.r,s)}else w=new C.aMt(m,s)
else w=D.dyI
return A.q(s,A.bQ(n,A.f1(A.u(A.a([new C.aZ_(m,l,s),A.E(w,1),new C.aYY(t.f,l,t.w,t.x,s)],x.p),B.n,s,B.i,B.k,0,B.p),B.A,!0),B.aB),B.j,s,s,new A.o(s,s,o,q,p,D.a4G,B.o),s,r*2.05,s,s,B.bH,s,s,r)}}
C.aZ_.prototype={
B(d){var w,v,u,t,s=null,r=new A.R(Date.now(),0,!1),q=r.glO()
r=r.gFo()
w=new A.dN(q,r)
v=w.gLe()===0?12:w.gLe()
r=B.b.b7(B.m.q(r),2,"0")
q=(q<12?B.hD:B.jU)===B.hD?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.F(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.o7,s,s,s),B.b8,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.k(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bI,D.aYi,B.da,D.aXq,B.da,D.aYn],t),B.n,s,B.i,B.k,0,s,s)],t)
if(this.d)B.f.A(q,A.a([B.aJ,A.F(A.a([A.W(B.xV,B.a6.k(0.9),s,s,12),B.da,A.E(A.d(u.c,s,s,B.ar,s,s,s,A.l(s,s,B.c.k(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.k(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.k,0,s,s)],t))
return A.q(s,A.u(q,B.n,s,B.i,B.k,0,B.p),B.j,B.aw,s,s,s,s,s,s,D.aNt,s,s,s)}}
C.aRN.prototype={
B(d){var w=null
return A.q(w,A.aC(A.u(A.a([A.W(B.D3,B.c.k(0.35),w,w,40),B.W,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.k(0.6),w,w,w,w,w,w,w,w,12,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.eF(D.b1b,D.dcT,this.c,A.dr(w,w,w,w,w,w,w,w,w,B.a6,w,w,w,w,w,new A.aE(B.a6.k(0.5),1,B.r,-1),w,w,w,w))],x.p),B.n,w,B.i,B.Z,0,B.p),w,w,w),B.j,B.B2,w,w,w,w,w,w,w,w,w,1/0)}}
C.aYY.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.aBY(B.Ds,"YouTube",s===0,r,new C.djW(u))
s=u.aBY(B.js,"Device",s===1,r,new C.djX(u))
w=r?"Power off":"Power on"
v=r?D.a2D:D.aVr
return A.q(t,A.F(A.a([q,B.ah,s,B.b8,A.aN(t,t,t,t,A.W(v,r?B.bM:B.f6,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cY)],x.p),B.n,t,B.i,B.k,0,t,t),B.j,B.aw,t,t,t,t,t,t,D.aMY,t,t,t)},
aBY(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b5
else w=f?B.a6:B.as
v=f&&g?B.a6.k(0.15):B.J
u=A.m(10)
t=g?h:s
return A.E(A.az(!1,B.Q,!0,u,A.aG(!1,A.m(10),!0,new A.C(B.mi,A.u(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.R,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,s,B.i,B.Z,0,B.p),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.j,v,0,s,s,s,s,s,B.a1),1)}}
C.aT7.prototype={
B(d){return D.aAz}}
C.aMt.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.iC,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.k(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.ue("Serial",u.c),q=w.ue("Model",u.d),p=w.ue("Device ID",u.e),o=w.ue("IMEI",u.r),n=w.ue("MAC",u.f),m=w.ue("OS",u.w+" "+u.x),l=w.ue("Location",u.y+", "+u.z),k=w.ue("Coordinates",B.l.a9(u.Q,4)+", "+B.l.a9(u.as,4)),j=w.ue("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aJ,s,B.ae,r,q,p,o,n,m,l,k,j,w.ue("Provisioned",u.length>=10?B.b.am(u,0,10):u)],x.p),v,B.bp,v,v,B.ak,!1)},
ue(d,e){var w=null
return new A.C(B.dj,A.u(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.k(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cf,A.d(e,w,w,w,w,w,w,D.d3t,w,w,w)],x.p),B.H,w,B.i,B.k,0,B.p),w)}}
C.LJ.prototype={
T(){return"NgmyVirtualMediaPlatform."+this.b}}
C.rk.prototype={
gaSG(){var w=this.c
return w===D.ajs||w===D.ajt||w===D.Rh||w===D.aju}}
C.a9v.prototype={
U(){return new C.aRI(null,null)}}
C.aRI.prototype={
a_(){this.a4()
var w=A.bf(null,B.tH,null,1,null,this)
w.fM(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.b2a()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cw(t,new A.o(t,t,t,t,t,new A.a7(B.bS,B.bR,B.E,A.a([B.J,B.A.k(0.55)],x.O),t,t),B.o),B.br),q=x.Y,p=u.d
p===$&&A.c()
p=A.cd(B.cT,p,t)
w=B.c.k(0.92)
q=A.aC(new A.cE(new A.aY(p,new A.bi(0.72,1,q),q.j("aY<bl.T>")),!1,A.W(B.kI,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.k(0.22):B.oA
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aTc(s,t),r,q,A.av(t,A.q(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.B,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.j,t,t,new A.o(p,t,t,w,t,t,B.o),t,t,t,t,new A.O(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.k(0.75)
s.push(A.av(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.k(0.85)
s.push(A.av(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.K,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.au(B.a5,t,B.b9,B.t,s,t)}}
C.aTc.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kG(u,B.I,new C.d7p(this),B.cb,B.bX,!0,w,w,new C.d7q(this),w)
return new C.GW(v,w)}}
C.GW.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aI(A.a([B.tw,B.WF],x.O),B.kI)
break
case 1:w=new A.aI(A.a([B.B2,D.aGA],x.O),B.ms)
break
case 2:w=new A.aI(A.a([D.aIp,D.aFT],x.O),B.Da)
break
case 3:w=new A.aI(A.a([B.U,B.dO],x.O),B.Dh)
break
case 4:w=new A.aI(A.a([B.aw,B.aP],x.O),B.qP)
break
default:w=u}v=w.a
return A.q(u,A.aC(A.W(w.b,B.a6.k(0.55),u,u,28),u,u,u),B.j,u,u,new A.o(u,u,u,u,u,new A.a7(B.av,B.aD,B.E,v,u,u),B.o),u,u,u,u,u,u,u,u)}}
C.apz.prototype={
p(){var w=this,v=w.aD$
if(v!=null)v.Z(0,w.gcP())
w.aD$=null
w.a5()},
be(){this.bq()
this.bp()
this.cQ()}}
C.a9w.prototype={
U(){return new C.ak0()}}
C.ak0.prototype={
ab9(d,e){var w,v=C.bwi(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dMD(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.en9(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bPO(){var w,v=this
if(v.w)return
v.n(new C.d3d(v))
w=v.e
if(w!=null)v.ab9(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aH()
u.d=w
try{$.De()
$.pC().tA(w,new C.d3m(u),!0)}catch(v){u.r=!0
u.f=!1}},
b8(d){var w,v=this
v.bk(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.d3f(v))
w=v.e
w.toString
v.ab9(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.k(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a2Z,w,n,n,36)],v)
o.a.toString
B.f.A(w,A.a([B.N,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.k(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.O,n,n)],v))
return A.f1(A.aC(new A.C(new A.O(12,12,12,12),A.u(w,B.n,n,B.i,B.Z,0,B.p),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.SV(n,B.rj,w)],v)
if(o.f)w.push(A.f1(A.aC(new A.aa(28,28,D.aBZ,n),n,n,n),B.d_,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.k(0.35)
t=B.A.k(0.72)
s=A.m(14)
r=A.J(B.b5,B.r,1)
q=A.W(B.DE,B.c.k(0.9),n,n,22)
p=B.c.k(0.92)
o.a.toString
w.push(A.dM(0,A.az(!1,B.Q,!0,n,A.aG(!1,n,!0,A.aC(A.q(n,A.F(A.a([q,B.ah,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.Z,0,n,n),B.j,n,n,new A.o(t,n,r,s,n,n,B.o),n,n,n,n,B.LM,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbPN(),n,n,n,n,n,n,n),B.j,u,0,n,n,n,n,n,B.a1)))}v=C.bwi(o.a.d)
if(v!=null)w.push(A.av(8,A.jt(D.aZW,D.dlx,new C.d3e(o),A.hs(n,n,B.A.k(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fT,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.au(B.a5,n,B.b9,B.t,w,n)}}
var z=a.updateTypes(["p(p0)","~()","LG(N)","p0(a_<@,@>)","Z(p0)","a_<p,@>(p0)","aD<~>()","LF(N)","lO<L>(N,rk?,r?)","Z2(N,L)","vg(N,rk?,r?)","GW(N,ar,dQ?)"])
C.dIu.prototype={
$1(d){return new C.LG(this.a,null)},
$S:z+2}
C.dIt.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.C,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.eo,B.U],j):A.a([B.c,B.ax],j),h=A.a([new A.a5(0,B.G,B.a6.k(0.22),B.eB,32)],x.V),g=A.J(m?B.cd:B.a6.k(0.18),B.r,1),f=A.m(28),e=B.a6.k(m?0.35:0.14)
j=A.a([e,B.aA.k(m?0.18:0.08)],j)
e=A.q(n,D.aX8,B.j,n,n,new A.o(B.a6.k(0.18),n,A.J(B.a6.k(0.45),B.r,1),n,n,n,B.af),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,18,n,n,B.B,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.E(A.u(A.a([w,B.aJ,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aj,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.H,n,B.i,B.k,0,B.p),1)
j=A.q(n,A.F(A.a([e,B.eC,w,A.aN(n,n,n,n,A.W(B.cL,m?B.as:B.d_,n,n,n),n,n,n,new C.dIp(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.k,0,n,n),B.j,n,n,new A.o(n,n,n,n,n,new A.a7(B.a0,B.a2,B.E,j,n,n),B.o),n,n,n,n,B.LU,n,n,n)
e=A.eb(B.cR,A.a([new C.Pg("YouTube",B.O_,m,n),new C.Pg("TikTok",B.ms,m,n),new C.Pg("Instagram",B.Da,m,n),new C.Pg("Facebook",B.Dh,m,n)],v),B.cy,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.U,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.c9:B.hT,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aP:B.bD
r=A.W(B.fW,B.a6.k(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.cd:B.aL
u=A.u(A.a([e,B.aR,A.aO(n,B.S,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bn(n,new A.b2(4,q,B.V),n,n,n,n,n,n,!0,new A.b2(4,p,new A.aE(o,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b2(4,A.m(16),B.Vn),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.F,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.a3,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a4,n,B.ag,n,n,n,n)],v),B.al,n,B.i,B.k,0,B.p)
e=A.jt(D.aXc,D.dpQ,new C.dIq(d),A.hs(n,n,n,n,n,n,n,n,n,n,n,m?B.bA:B.aj,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.C(new A.O(12,0,12,12+l.f.d),A.cw(A.bQ(f,A.u(A.a([j,new A.C(B.a_s,u,n),new A.C(D.aOZ,A.F(A.a([e,B.b8,A.bZ(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.a9:B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dIr(d),n,n),B.ah,A.dE(D.b0R,D.dqG,new C.dIs(d,w),A.bo(B.a6,n,n,n,B.c,n,B.LM,n,new A.bp(A.m(14),B.V),n,n,n))],v),B.n,n,B.i,B.k,0,n,n),n)],v),B.al,n,B.i,B.Z,0,B.p),B.aB),new A.o(n,n,g,k,h,new A.a7(B.av,B.aD,B.E,i,n,n),B.o),B.br),n)},
$S:74}
C.dIp.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dIq.prototype={
$0(){C.dZn()
$.Ra().sv(0,null)
A.a0(this.a,!1).N(null)},
$S:0}
C.dIr.prototype={
$0(){A.a0(this.a,!1).N(null)
return null},
$S:0}
C.dIs.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a0(this.a,!1).N(w)
return null},
$S:0}
C.bwu.prototype={
$1(d){return C.dZo(A.S(d,x.N,x.z))},
$S:z+3}
C.bwv.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bwm.prototype={
$1(d){return d.c},
$S:z+0}
C.bwn.prototype={
$1(d){return d.r},
$S:z+0}
C.bwo.prototype={
$1(d){return d.f},
$S:z+0}
C.bwp.prototype={
$1(d){return d.at},
$S:z+0}
C.bwq.prototype={
$1(d){return d.c},
$S:z+0}
C.bwr.prototype={
$1(d){return d.r},
$S:z+0}
C.bws.prototype={
$1(d){return d.f},
$S:z+0}
C.bwt.prototype={
$1(d){return d.at},
$S:z+0}
C.bwl.prototype={
$1(d){return d.ab()},
$S:z+5}
C.bwk.prototype={
$1(d){return B.b.b7(B.m.ha(d,16),2,"0").toUpperCase()},
$S:87}
C.d34.prototype={
$0(){},
$S:0}
C.d33.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d31.prototype={
$0(){return this.a.e=!0},
$S:0}
C.d32.prototype={
$0(){var w=this.a,v=A.y(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.d35.prototype={
$1(d){return new C.LF(this.a,null)},
$S:z+7}
C.d3a.prototype={
$4(d,e,f,g){var w=null,v=A.aN(w,w,w,w,B.qS,w,w,w,new C.d39(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.F(A.a([v,A.E(A.h1(A.F(A.a([new A.oZ(D.yp,e,g,36,B.xV,w),B.aN,A.E(A.d(t,w,1,B.ar,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,15,w,w,B.B,w,w,!0,w,0.2,w,w,w,A.a([new A.fR(B.f.gI(D.yp).k(0.45+e*0.2),B.M,10)],x.S),w,w),w,w,w),1),A.az(!1,B.Q,!0,w,A.aG(!1,w,!0,new A.C(B.bH,A.W(B.hI,A.ao(B.f.gI(D.yp),B.f.ga6(D.yp),e),w,w,28),w),B.cn,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbyO(),w,w,w,w,w,w,w),B.j,B.J,0,w,w,w,w,w,B.a1)],s),B.n,w,B.i,B.k,0,w,w),D.yp,w,g,B.eI,0,e,f),1)],s),B.n,w,B.i,B.k,0,w,w)},
$C:"$4",
$R:4,
$S:312}
C.d39.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d3b.prototype={
$3(d,e,f){return new A.lO($.Ib(),new C.d38(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.d38.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.EJ(d,k,x.Q)
w=w==null?k:w.glP()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a6.k(0.12)
s=A.m(12)
r=A.J(B.a6.k(0.35),B.r,1)
q=A.W(B.kI,B.a6,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.Ib().a
m=B.l.O(n+4,1,o)
t=A.a([A.q(k,A.F(A.a([q,B.ah,A.E(A.d("Now playing "+p+" \xb7 "+("Devices "+A.t(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.U,k,k,k,k,k,k,k,k,12,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.k,0,k,k),B.j,k,k,new A.o(t,k,r,s,k,k,B.o),k,k,k,B.dx,B.fa,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.f.A(t,A.a([A.bQ(s,new A.hO(1.7777777777777777,C.dZp(new A.d4("fleet_master_"+r,x.W),!0,r,!0,j.gaSG(),"fleet_master"),k),B.aB),B.ae],w))}B.f.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.k(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.uX(0,B.t,k,B.F,k,k,k,k,!1,k,B.ak,!1,A.a([new A.lc(new A.C(B.Ci,A.u(u,B.H,k,B.i,B.k,0,B.p),k),k),new A.ol(D.aMx,A.aGX(new A.oj(new C.d37(i,j),J.a4(i.d),!1,!0,!0,A.uH(),k),D.cXB),k)],w))},
$S:1857}
C.d37.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Z2(v,e,J.a4(w.d),new C.d36(w,v),this.b,null)},
$S:z+9}
C.d36.prototype={
$0(){return this.a.by8(this.b)},
$S:0}
C.d3c.prototype={
$0(){this.a.Xn()
return null},
$S:0}
C.d2Z.prototype={
$0(){return A.a0(this.a,!1).e6()},
$S:0}
C.d3_.prototype={
$0(){C.a15(this.a,$.bwj)
return null},
$S:0}
C.d30.prototype={
$3(d,e,f){return A.eL(new C.d2Y(this.a,e))},
$S:z+10}
C.d2Y.prototype={
$2(d,e){var w,v=null,u=B.l.O(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aC(A.cv(A.u(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.k(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.O,v,v),B.aR,new C.aYZ(u,s.a.c,s.e,s.d,new C.d2V(s),new C.d2W(s),new C.d2X(s),t,v)],x.p),B.n,v,B.i,B.k,0,B.p),B.t,v,B.F,v,B.oK,v,v,B.ak),v,v,v)},
$S:1858}
C.d2V.prototype={
$0(){var w=this.a.c
w.toString
C.a15(w,$.bwj)
return null},
$S:0}
C.d2W.prototype={
$1(d){var w=this.a
return w.n(new C.d2U(w,d))},
$S:31}
C.d2U.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d2X.prototype={
$0(){var w=this.a
return w.n(new C.d2T(w))},
$S:0}
C.d2T.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.djW.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.djX.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.d7p.prototype={
$3(d,e,f){return new C.GW(this.a.c,null)},
$S:z+11}
C.d7q.prototype={
$3(d,e,f){if(f==null)return e
return new A.au(B.a5,null,B.b9,B.t,A.a([new C.GW(this.a.c,null),D.aAV],x.p),null)},
$C:"$3",
$R:3,
$S:462}
C.d3d.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3m.prototype={
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
w.ab9(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.h6(v,"load",new C.d3j(w),!1,u)
v=w.e
v.toString
A.h6(v,"error",new C.d3k(w),!1,u)
A.bK(B.jY,new C.d3l(w),x.H)
w=w.e
w.toString
return w},
$S:645}
C.d3j.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d3i(w))},
$S:30}
C.d3i.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3k.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d3h(w))},
$S:30}
C.d3h.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.d3l.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.d3g(w))},
$S:12}
C.d3g.prototype={
$0(){return this.a.f=!1},
$S:0}
C.d3f.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d3e.prototype={
$0(){var w,v=C.bwi(this.a.a.d)
if(v==null)return
w=window
w.toString
B.mX.Lz(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dDN.prototype={
$1(d){var w,v,u,t,s=new A.w7([],[]).x9(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.L.aB(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1859};(function aliases(){var w=C.apz.prototype
w.b2a=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ak_.prototype,"gaCb","bvu",1)
w(u,"gbw2","bw3",1)
w(u,"gbyO","byP",6)
w(C.ak0.prototype,"gbPN","bPO",1)
v(C,"eHS","dZm",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.zP,[C.dIu,C.dIt,C.bwu,C.bwv,C.bwm,C.bwn,C.bwo,C.bwp,C.bwq,C.bwr,C.bws,C.bwt,C.bwl,C.bwk,C.d35,C.d3a,C.d3b,C.d38,C.d30,C.d2W,C.d7p,C.d7q,C.d3m,C.d3j,C.d3k,C.dDN])
v(A.a2u,[C.dIp,C.dIq,C.dIr,C.dIs,C.d34,C.d33,C.d31,C.d32,C.d39,C.d36,C.d3c,C.d2Z,C.d3_,C.d2V,C.d2U,C.d2X,C.d2T,C.djW,C.djX,C.d3d,C.d3i,C.d3h,C.d3l,C.d3g,C.d3f,C.d3e])
v(A.ap,[C.Pg,C.Z2,C.aQs,C.aYZ,C.aZ_,C.aRN,C.aYY,C.aT7,C.aMt,C.aTc,C.GW])
v(A.ar,[C.p0,C.rk])
v(A.ad,[C.LG,C.LF,C.a9v,C.a9w])
v(A.ae,[C.ak_,C.aRH,C.apz,C.ak0])
v(A.a2v,[C.d37,C.d2Y])
u(C.LJ,A.aNo)
u(C.aRI,C.apz)
w(C.apz,A.dC)})()
A.e1O(b.typeUniverse,JSON.parse('{"LG":{"ad":[],"r":[]},"Z2":{"ap":[],"r":[]},"LF":{"ad":[],"r":[]},"Pg":{"ap":[],"r":[]},"ak_":{"ae":["LG"]},"aQs":{"ap":[],"r":[]},"aRH":{"ae":["LF"]},"aYZ":{"ap":[],"r":[]},"aZ_":{"ap":[],"r":[]},"aRN":{"ap":[],"r":[]},"aYY":{"ap":[],"r":[]},"aT7":{"ap":[],"r":[]},"aMt":{"ap":[],"r":[]},"a9v":{"ad":[],"r":[]},"GW":{"ap":[],"r":[]},"aRI":{"ae":["a9v"]},"aTc":{"ap":[],"r":[]},"a9w":{"ad":[],"r":[]},"ak0":{"ae":["a9w"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a9<a5>"),O:w("a9<x>"),e:w("a9<p0>"),S:w("a9<fR>"),s:w("a9<p>"),p:w("a9<r>"),t:w("a9<L>"),X:w("ag<p0>"),a:w("ag<@>"),P:w("a_<p,@>"),f:w("a_<@,@>"),w:w("oU"),_:w("EG"),k:w("p0"),N:w("p"),Y:w("bi<a3>"),W:w("d4<p>"),J:w("lO<L>"),j:w("lO<rk?>"),E:w("ug<d_>"),q:w("a__"),z:w("@"),Q:w("ar?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a2D=new A.Q(983224,"MaterialIcons",!1)
D.b_2=new A.ab(D.a2D,48,B.b5,null,null,null)
D.dbM=new A.z("Powered off",null,B.ar2,null,null,null,null,null,null,null,null,null)
D.bWW=w([D.b_2,B.N,D.dbM],x.p)
D.aJO=new A.eK(B.ak,B.i,B.Z,B.n,null,B.p,null,0,D.bWW,null)
D.aAz=new A.cU(B.I,null,null,D.aJO,null)
D.cXg=new A.aa(18,18,B.Wn,null)
D.aAV=new A.cU(B.I,null,null,D.cXg,null)
D.aBZ=new A.fq(2,null,null,null,null,B.a9,null,null,null,null)
D.aFT=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.v)
D.aGA=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.v)
D.aIp=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.v)
D.aMn=new A.O(0,3,0,3)
D.aMx=new A.O(10,0,10,88)
D.aMY=new A.O(12,6,12,10)
D.aNt=new A.O(14,8,14,6)
D.aOZ=new A.O(20,8,20,20)
D.a_Y=new A.O(8,6,15,8)
D.aVr=new A.Q(983222,"MaterialIcons",!1)
D.aX8=new A.ab(B.kI,26,B.a6,null,null,null)
D.aXc=new A.ab(B.a1H,18,null,null,null,null)
D.aXq=new A.ab(B.uy,14,B.a9,null,null,null)
D.aVK=new A.Q(983420,"MaterialIcons",!1)
D.aYi=new A.ab(D.aVK,14,B.a9,null,null,null)
D.aTP=new A.Q(62895,"MaterialIcons",!1)
D.aYn=new A.ab(D.aTP,14,B.a9,null,null,null)
D.aZW=new A.ab(B.up,16,B.a9,null,null,null)
D.b0R=new A.ab(B.iq,20,null,null,null,null)
D.b1b=new A.ab(B.hI,16,null,null,null,null)
D.c_S=w([B.aP,B.U],x.O)
D.a4G=new A.a7(B.av,B.aD,B.E,D.c_S,null,null)
D.cQp=new A.aI("NGMY OS","14.2.1")
D.cP_=new A.aI("VirtualDroid","13.8.4")
D.cOZ=new A.aI("NGMY OS","15.0.0")
D.cPT=new A.aI("VirtualDroid","14.1.2")
D.cOV=new A.aI("NGMY Tab OS","12.9.7")
D.cOT=new A.aI("NGMY OS","13.5.3")
D.cOI=new A.aI("VirtualDroid","15.2.0")
D.cPp=new A.aI("NGMY OS","14.8.1")
D.cPY=new A.aI("NGMY Tab OS","13.2.4")
D.cQC=new A.aI("VirtualDroid","12.6.9")
D.cOC=new A.aI("NGMY OS","16.0.1")
D.cOs=new A.aI("VirtualDroid","14.9.0")
D.cQf=new A.aI("NGMY Tab OS","14.0.3")
D.cPa=new A.aI("NGMY OS","13.1.8")
D.cOA=new A.aI("VirtualDroid","13.4.5")
D.cOS=new A.aI("NGMY OS","15.3.2")
D.cPZ=new A.aI("NGMY Tab OS","12.4.1")
D.cQi=new A.aI("VirtualDroid","16.1.0")
D.cPo=new A.aI("NGMY OS","14.4.6")
D.cQq=new A.aI("VirtualDroid","15.0.8")
D.c_0=w([D.cQp,D.cP_,D.cOZ,D.cPT,D.cOV,D.cOT,D.cOI,D.cPp,D.cPY,D.cQC,D.cOC,D.cOs,D.cQf,D.cPa,D.cOA,D.cOS,D.cPZ,D.cQi,D.cPo,D.cQq],A.b4("a9<+(p,p)>"))
D.yp=w([B.a6,B.fG],x.O)
D.cSN=new A.f4(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cSl=new A.f4(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cSg=new A.f4(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cSp=new A.f4(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cSc=new A.f4(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cSr=new A.f4(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cSP=new A.f4(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cSd=new A.f4(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cSk=new A.f4(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cSt=new A.f4(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cSb=new A.f4(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cSH=new A.f4(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cSE=new A.f4(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cSj=new A.f4(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cSB=new A.f4(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cSA=new A.f4(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cSa=new A.f4(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cSo=new A.f4(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cSy=new A.f4(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cSD=new A.f4(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.abF=w([D.cSN,D.cSl,D.cSg,D.cSp,D.cSc,D.cSr,D.cSP,D.cSd,D.cSk,D.cSt,D.cSb,D.cSH,D.cSE,D.cSj,D.cSB,D.cSA,D.cSa,D.cSo,D.cSy,D.cSD],A.b4("a9<+(p,p,a3,a3,p)>"))
D.c8W=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.ajs=new C.LJ(0,"youtube")
D.ajt=new C.LJ(1,"tiktok")
D.Rh=new C.LJ(2,"instagram")
D.aju=new C.LJ(3,"facebook")
D.cH5=new C.LJ(4,"other")
D.cXB=new A.hr(4,10,8,0.52,null)
D.dd5=new A.z("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.d05=new A.aV(D.dd5,null,null,null,null,null,null,null,null,null,null,null,null,B.P,!1,null,null,null,B.t,null)
D.d3t=new A.M(!0,B.c,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dcT=new A.z("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.dlx=new A.z("Open in YouTube",null,B.jG,null,null,null,null,null,null,null,null,null)
D.dpQ=new A.z("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dqG=new A.z("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dqP=new A.z("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.dyI=new C.aT7(null)})();(function staticFields(){$.dZl=20
$.aCS=null
$.bwj=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eMT","Ib",()=>A.adY(0))
w($,"eMU","Ra",()=>A.adY(null))})()};
(a=>{a["dKATmoHjmCoOyWkrW15mtHSWXQM="]=a.current})($__dart_deferred_initializers__);