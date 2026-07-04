((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dXD(d,e){A.a5(d,!1).cr(A.en(new C.d46(e),!0,null,x.H))},
Vg(d,e){var w=0,v=A.i(x.H),u,t,s,r,q,p,o,n
var $async$Vg=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:o=$.LY()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.aY(n,B.ae,B.a5),t)
w=3
return A.b(A.da(B.B,new C.d45(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$Vg)
case 3:r=g
s.F$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dFm(r)
if(q==null){d.E(x.q).f.O(D.bCB)
w=1
break}w=4
return A.b(A.bK(B.fZ,null,x.H),$async$Vg)
case 4:if(d.e==null){w=1
break}n=B.n.am(e,1,999)
$.diP=n
p=C.dFg(n)
n=$.E_()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d7T(q)
d.E(x.q).f.O(A.bp(null,null,null,null,null,B.m,null,A.j("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Vg,v)},
diS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aT(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aT(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.n0(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hc(d){return C.dFp(d)},
dFp(a3){var w=0,v=A.i(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hc=A.d(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.at(),$async$Hc)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aG(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.w.aC(0,a0,null)
w=x.a.b(r)&&J.cz(r)?10:11
break
case 10:k=J.eH(r,x.f)
k=A.dj(k,new C.bed(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.C(new A.af(k,new C.bee(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.diU(q)
w=12
return A.b(C.Hb(a3,p),$async$Hc)
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
n=B.w.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.diS(A.S(n,x.N,x.z))
l=C.diU(A.a([m],x.e))
w=21
return A.b(C.Hb(a3,l),$async$Hc)
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
case 18:case 14:q=C.dFn()
w=22
return A.b(C.Hb(a3,q),$async$Hc)
case 22:u=q
w=1
break
case 1:return A.f(u,v)
case 2:return A.e(s.at(-1),v)}})
return A.h($async$Hc,v)},
diU(d){var w=A.W(d).j("B<1,n>"),v=new A.B(d,new C.be5(),w).ek(0),u=new A.B(d,new C.be6(),w).ek(0),t=new A.B(d,new C.be7(),w).ek(0),s=new A.B(d,new C.be8(),w).ek(0),r=A.bd(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d7U(null,q,u,t,v,s));++q}return r},
aqp(d){var w=0,v=A.i(x.k),u,t,s,r,q,p,o,n,m
var $async$aqp=A.d(function(e,f){if(e===1)return A.e(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hc(d),$async$aqp)
case 3:t=f
s=x.N
r=J.cc(t)
q=r.d0(t,new C.be9(),s).ek(0)
p=r.d0(t,new C.bea(),s).ek(0)
o=r.d0(t,new C.beb(),s).ek(0)
n=r.d0(t,new C.bec(),s).ek(0)
m=C.d7U(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hb(d,t),$async$aqp)
case 4:u=m
w=1
break
case 1:return A.f(u,v)}})
return A.h($async$aqp,v)},
Hb(d,e){var w=0,v=A.i(x.H),u,t,s
var $async$Hb=A.d(function(f,g){if(f===1)return A.e(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.at(),$async$Hb)
case 2:u=g
t=B.a.i(d)
s=J.b2(e,new C.be4(),x.P)
s=A.C(s,s.$ti.j("a2.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.w.al(s,null)),$async$Hb)
case 3:return A.f(null,v)}})
return A.h($async$Hb,v)},
dFn(){var w,v=x.N,u=A.b6(v),t=A.b6(v),s=A.b6(v),r=A.b6(v),q=J.dR(20,x.k)
for(w=0;w<20;++w)q[w]=C.d7U(w,w,t,s,u,r)
return q},
d7U(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.j7(),h=d==null,g=D.U9[B.n.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.U9[B.n.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.B(p,new C.be3(),A.W(p).j("B<1,n>")).eP(0)
u="VND-"+B.a.aa(n,0,4)+"-"+B.a.aa(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.eP(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.n.j4(i.bx(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.n.ag(e,20)
k=D.aUU[w]
j=D.aOM[w]
return new C.n0("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.n.q(e+1),2,"0"),u,k,C.dFo(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a0().Y())},
dFo(d,e){var w,v=J.dR(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.n.j4(d.bx(256),16),2,"0")
return B.d.eP(v)},
d46:function d46(d){this.a=d},
d45:function d45(d,e){this.a=d
this.b=e},
d41:function d41(d){this.a=d},
d42:function d42(d){this.a=d},
d43:function d43(d){this.a=d},
d44:function d44(d,e){this.a=d
this.b=e},
Kj:function Kj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
n0:function n0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bed:function bed(){},
bee:function bee(){},
be5:function be5(){},
be6:function be6(){},
be7:function be7(){},
be8:function be8(){},
be9:function be9(){},
bea:function bea(){},
beb:function beb(){},
bec:function bec(){},
be4:function be4(){},
be3:function be3(){},
Ha:function Ha(d,e){this.c=d
this.a=e},
aaY:function aaY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cvg:function cvg(){},
cvf:function cvf(d,e){this.a=d
this.b=e},
cvd:function cvd(d){this.a=d},
cve:function cve(d,e){this.a=d
this.b=e},
cvh:function cvh(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvm:function cvm(d,e){this.a=d
this.b=e},
cvk:function cvk(d,e,f){this.a=d
this.b=e
this.c=f},
cvj:function cvj(d,e){this.a=d
this.b=e},
cvi:function cvi(d,e){this.a=d
this.b=e},
cvn:function cvn(d){this.a=d},
SF:function SF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCf:function aCf(d,e){this.c=d
this.a=e},
H9:function H9(d,e){this.c=d
this.a=e},
aDc:function aDc(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cva:function cva(d){this.a=d},
cvb:function cvb(d){this.a=d},
cvc:function cvc(d){this.a=d},
cv9:function cv9(d,e){this.a=d
this.b=e},
cv6:function cv6(d){this.a=d},
cv7:function cv7(d){this.a=d},
cv5:function cv5(d,e){this.a=d
this.b=e},
cv8:function cv8(d){this.a=d},
cv4:function cv4(d){this.a=d},
aJR:function aJR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aJS:function aJS(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(d,e){this.c=d
this.a=e},
aJQ:function aJQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cJM:function cJM(d){this.a=d},
cJN:function cJN(d){this.a=d},
aEt:function aEt(d){this.a=d},
ayz:function ayz(d,e){this.c=d
this.a=e},
dFm(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dFl(v)
if(u!=null)return new C.p6(w,C.d7S(u,!1),D.a05,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dFk(v)
if(t!=null)return new C.p6(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a06,"TikTok",q)
s=C.dFj(w,v)
if(s!=null)return s
r=C.dFi(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.p6(w,w,D.bmF,"Video",q)
return q},
dFj(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(s!=null){w=s.b[1]
w.toString
return new C.p6(d,"https://www.instagram.com/reel/"+w+u,D.Hb,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d_(e)
if(v!=null){w=v.b[1]
w.toString
return new C.p6(d,"https://www.instagram.com/p/"+w+u,D.Hb,t,null)}return null},
dFi(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.p6(d,"https://www.facebook.com/plugins/video.php?href="+A.eU(2,d,B.aQ,!1)+"&show_text=false&width=734",D.a07,"Facebook",null)},
dFl(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d_(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dFk(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d_(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
Hd:function Hd(d,e){this.a=d
this.b=e},
p6:function p6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1W:function a1W(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDd:function aDd(d,e){var _=this
_.d=$
_.cS$=d
_.aQ$=e
_.c=_.a=null},
aEy:function aEy(d,e){this.c=d
this.a=e},
czf:function czf(d){this.a=d},
czg:function czg(d){this.a=d},
CR:function CR(d,e){this.c=d
this.a=e},
afD:function afD(){},
diT(d,e,f,g,h,i){return new C.a1X(i,f,h,e,g,d)},
dWi(d){var w=window
w.toString
A.fQ(w,"message",new C.d0b(d),!1,x._)},
a1X:function a1X(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
aaZ:function aaZ(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cvo:function cvo(d){this.a=d},
cvw:function cvw(d){this.a=d},
cvu:function cvu(d){this.a=d},
cvs:function cvs(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvv:function cvv(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvp:function cvp(d){this.a=d},
d0b:function d0b(d){this.a=d},
diN(){var w,v,u
try{v=A.yv()
w=v.gq_(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cw(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d7S(d,e){var w=C.diN(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eU(2,w,B.aQ,!1))
v.push("widget_referrer="+A.eU(2,w,B.aQ,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d7R(d){var w=A.aq(y.c,!0,!1,!1,!1).d_(d)
return w==null?null:w.b[1]},
diO(d){var w=A.bg(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bg(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dFf(d,e,f){var w,v,u=C.d7R(d)
if(u!=null){if(f){w=C.diN()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.diO(C.d7S(u,e))}return C.diO(d)},
dFg(d){if(d<=4)return 0
return B.n.aZ(d-1,4)*4},
dFh(d){var w
if($.LY().a==null)return!1
w=$.E_().a
return d>=w&&d<w+4},
diR(){var w=$.aqo
if(w!=null)w.a7(0)
$.aqo=null
$.E_().sv(0,0)},
diQ(){var w,v,u,t=$.LY()
if(t.a==null)return
w=$.aqo
if(w!=null)w.a7(0)
v=$.diP
if(v<=4){t=t.a
t.toString
C.d7T(t)
return}w=$.E_()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d7T(t)},
d7T(d){var w=$.aqo
if(w!=null)w.a7(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aqo=A.dn(A.d6(0,0,0,0,0,w),C.dWt())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Kj.prototype={
B(d){var w=null,v=this.e,u=v?B.ak:B.c,t=A.m(20),s=A.T(B.T.l(0.25),B.o,1),r=A.Z(this.d,B.T,w,w,14)
return A.t(w,A.G(A.a([r,B.eF,A.j(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bu,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.h,w,w,new A.q(u,w,s,t,w,w,B.j),w,w,w,B.eA,w,w,w)}}
C.n0.prototype={
a8(){var w=this
return A.r(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Ha.prototype={
S(){return new C.aaY(A.a([],x.e))},
gdR(){return this.c}}
C.aaY.prototype={
Z(){var w=this
w.a3()
$.E_().aj(0,w.gas2())
C.dWi(w.gbee())
w.Vd()},
bdE(){if(this.c!=null)this.p(new C.cvg())},
bef(){C.diQ()},
n(){$.E_().V(0,this.gas2())
C.diR()
$.LY().sv(0,null)
this.a2()},
Vd(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Vd=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hc(t.a.c),$async$Vd)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cvf(t,s))
$.be2=J.a3(s)
case 1:return A.f(u,v)}})
return A.h($async$Vd,v)},
Rp(){var w=0,v=A.i(x.H),u,t=this,s
var $async$Rp=A.d(function(d,e){if(d===1)return A.e(e,v)
for(;;)switch(w){case 0:t.p(new C.cvd(t))
w=3
return A.b(C.aqp(t.a.c),$async$Rp)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cve(t,s))
$.be2=J.a3(t.d)
t.c.E(x.q).f.O(A.bp(null,null,null,null,null,B.m,null,A.j("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.E,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(u,v)}})
return A.h($async$Rp,v)},
bg6(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.en(new C.cvh(d),!1,null,x.H))},
bgF(){var w=this.c
w.toString
return C.Vg(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.F(d).ax.a===B.r,t=u?B.e9:B.bo,s=A.aH(v,v,v,v,B.Fq,v,v,v,new C.cvl(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.Bq(A.G(A.a([A.I(new A.H(B.ia,A.j(r,v,1,B.ah,v,v,v,A.l(v,v,u?B.c:B.N,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.J,!0,v,A.aU(!1,v,!0,new A.H(B.aN,A.Z(B.eT,B.T,v,v,28),v),B.c7,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbgE(),v,v,v,v,v,v,v),B.h,B.B,0,v,v,v,v,v,B.X)],q),B.i,v,B.e,B.f,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.f,0,v,v)
s=A.c3(!0,A.x(A.a([new A.H(D.P5,r,v),A.I(w.e?B.lk:new A.iu($.LY(),new C.cvm(w,u),v,v,x.j),1)],q),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0)
return A.c7(v,t,s,v,!1,!1,A.al8(B.T,B.AZ,B.lN,D.bZQ,w.e?v:new C.cvn(w)),v)}}
C.SF.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.o,1),q=A.a([new A.aa(0,B.x,B.T.l(0.18),B.cv,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a1W(n,!0,!C.dFh(w),"Fold "+(B.n.aZ(w,4)+1)+"/"+B.n.aZ(v.e+4-1,4),u)
n=w}else n=A.t(u,A.x(A.a([A.Z(B.im,B.ls,u,u,22),B.an,A.j("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ax,B.f,0,B.l),B.h,B.vJ,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.J,!0,u,A.aU(!1,t,!0,A.x(A.a([A.I(A.t(u,A.cq(p,A.fS(A.x(A.a([new C.aCf(o,u),A.I(n,1),A.t(u,A.G(A.a([A.Z(B.td,B.T.l(0.85),u,u,9),D.byv,A.j("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ax,B.f,0,u,u),B.h,B.a9,u,u,u,u,u,D.ann,u,u,u)],w),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,u,u,new A.q(u,u,r,s,q,D.SZ,B.j),u,u,u,B.eR,u,u,u),1),B.an,A.j(o.b,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.z,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.y,u,1,B.ah,u,u,u,A.l(u,u,A.F(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.j(o.c,u,1,B.ah,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.f,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.h,B.B,0,u,u,u,u,u,B.X)}}
C.aCf.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.I(A.j(B.d.gav(this.c.c.split("-")),w,w,B.ah,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Z(B.pm,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.f,0,w,w),B.h,B.a9,w,w,w,w,w,B.OX,w,w,w)}}
C.H9.prototype={
S(){return new C.aDc()}}
C.aDc.prototype={
B(d){var w=null,v=A.F(d).ax.a===B.r,u=v?B.e9:B.bo,t=A.aH(w,w,w,w,B.Fq,w,w,w,new C.cva(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c7(w,u,A.c3(!0,A.x(A.a([new A.H(D.P5,A.G(A.a([t,A.I(new A.Bq(A.G(A.a([A.I(new A.H(B.ia,A.j(s.b+" \xb7 "+s.c,w,1,B.ah,w,w,w,A.l(w,w,v?B.c:B.N,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.J,!0,w,A.aU(!1,w,!0,new A.H(B.aN,A.Z(B.eT,B.T,w,w,28),w),B.c7,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cvb(d),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.X)],r),B.i,w,B.e,B.f,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.f,0,w,w),w),A.I(new A.iu($.LY(),new C.cvc(this),w,w,x.j),1)],r),B.i,B.e,B.f,0,B.l),!1,B.Y,!0,!0),w,!1,!1,w,w)}}
C.aJR.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.x,B.T.l(0.35),B.dY,28),new A.aa(0,B.x,B.q.l(0.45),B.co,18)],x.V),o=A.T(B.c.l(0.12),B.o,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.diT(new A.df(v+"_full_"+u,x.W),!1,u,!1,w.gaGN(),v+"_full")
w=v}else w=new C.aDi(t.r,s)}else w=new C.ayz(m,s)
else w=D.c4m
return A.t(s,A.cq(n,A.fS(A.x(A.a([new C.aJS(m,l,s),A.I(w,1),new C.aJQ(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.f,0,B.l),B.q,!0),B.at),B.h,s,s,new A.q(s,s,o,q,p,D.SZ,B.j),s,r*2.05,s,B.bc,s,s,r)}}
C.aJS.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.dk(r)
r=A.hi(r)
w=new A.de(q,r)
v=w.gGB()===0?12:w.gGB()
r=B.a.bh(B.n.q(r),2,"0")
q=(q<12?B.eO:B.hH)===B.eO?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.j(""+v+":"+r+" "+q,s,s,s,s,s,s,B.l5,s,s,s),B.b3,A.j(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bj,D.axQ,B.dz,D.ax5,B.dz,D.axU],t),B.i,s,B.e,B.f,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Z(B.Fi,B.T.l(0.9),s,s,12),B.dz,A.I(A.j(u.c,s,s,B.ah,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.j(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.f,0,s,s)],t))
return A.t(s,A.x(q,B.i,B.e,B.f,0,B.l),B.h,B.a9,s,s,s,s,s,D.ao7,s,s,s)}}
C.aDi.prototype={
B(d){var w=null
return A.t(w,A.aN(A.x(A.a([A.Z(B.xw,B.c.l(0.35),w,w,40),B.G,A.j("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.j("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ao,A.eo(D.aBe,D.bNK,this.c,A.e7(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aE(B.T.l(0.5),1,B.o,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.h,B.vJ,w,w,w,w,w,w,w,w,1/0)}}
C.aJQ.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.arV(B.Rv,"YouTube",s===0,r,new C.cJM(u))
s=u.arV(B.jK,"Device",s===1,r,new C.cJN(u))
w=r?"Power off":"Power on"
v=r?D.Rw:D.avc
return A.t(t,A.G(A.a([q,B.a_,s,B.b3,A.aH(t,t,t,t,A.Z(v,r?B.b6:B.en,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cy)],x.p),B.i,t,B.e,B.f,0,t,t),B.h,B.a9,t,t,t,t,t,D.anU,t,t,t)},
arV(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.b_
else w=f?B.T:B.a8
v=f&&g?B.T.l(0.15):B.B
u=A.m(10)
t=g?h:s
return A.I(A.aI(!1,B.J,!0,u,A.aU(!1,A.m(10),!0,new A.H(B.lD,A.x(A.a([A.Z(d,w,s,s,18),A.j(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.h,v,0,s,s,s,s,s,B.X),1)}}
C.aEt.prototype={
B(d){return D.adZ}}
C.ayz.prototype={
B(d){var w=this,v=null,u=w.c,t=A.j(u.b,v,v,v,v,v,v,B.k2,v,v,v),s=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qB("Serial",u.c),q=w.qB("Model",u.d),p=w.qB("Device ID",u.e),o=w.qB("IMEI",u.r),n=w.qB("MAC",u.f),m=w.qB("OS",u.w+" "+u.x),l=w.qB("Location",u.y+", "+u.z),k=w.qB("Coordinates",B.k.a1(u.Q,4)+", "+B.k.a1(u.as,4)),j=w.qB("Timezone",u.at)
u=u.ax
return A.ei(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qB("Provisioned",u.length>=10?B.a.aa(u,0,10):u)],x.p),v,B.aN,v,v,B.a1,!1)},
qB(d,e){var w=null
return new A.H(B.c2,A.x(A.a([A.j(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bX,A.j(e,w,w,w,w,w,w,D.bFD,w,w,w)],x.p),B.v,B.e,B.f,0,B.l),w)}}
C.Hd.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.p6.prototype={
gaGN(){var w=this.c
return w===D.a05||w===D.a06||w===D.Hb||w===D.a07}}
C.a1W.prototype={
S(){return new C.aDd(null,null)}}
C.aDd.prototype={
Z(){this.a3()
var w=A.bD(null,B.rw,null,1,null,this)
w.lM(0,!0)
this.d=w},
n(){var w=this.d
w===$&&A.c()
w.n()
this.aQe()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dx(t,new A.q(t,t,t,t,t,new A.an(B.cE,B.c0,B.y,A.a([B.B,B.q.l(0.55)],x.O),t,t),B.j),B.bp),q=x.Y,p=u.d
p===$&&A.c()
p=A.cl(B.hg,p,t)
w=B.c.l(0.92)
q=A.aN(new A.cS(new A.b_(p,new A.bi(0.72,1,q),q.j("b_<bh.T>")),!1,A.Z(B.im,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ls
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aEy(s,t),r,q,A.aW(t,A.t(t,A.j(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.h,t,t,new A.q(p,t,t,w,t,t,B.j),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.aW(t,A.j(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.aW(3,A.j(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.z,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aF(B.a3,t,B.aS,B.m,s,t)}}
C.aEy.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.l7(u,new C.czf(this),B.bw,!0,w,w,new C.czg(this),w)
return new C.CR(v,w)}}
C.CR.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aJ(A.a([B.rf,B.LC],x.O),B.im)
break
case 1:w=new A.aJ(A.a([B.vJ,D.aia],x.O),B.jL)
break
case 2:w=new A.aJ(A.a([D.ajR,D.ahG],x.O),B.xD)
break
case 3:w=new A.aJ(A.a([B.N,B.cF],x.O),B.xG)
break
case 4:w=new A.aJ(A.a([B.a9,B.ak],x.O),B.nb)
break
default:w=u}v=w.a
return A.t(u,A.aN(A.Z(w.b,B.T.l(0.55),u,u,28),u,u,u),B.h,u,u,new A.q(u,u,u,u,u,new A.an(B.am,B.ar,B.y,v,u,u),B.j),u,u,u,u,u,u,u)}}
C.afD.prototype={
n(){var w=this,v=w.aQ$
if(v!=null)v.V(0,w.gdm())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dn()}}
C.a1X.prototype={
S(){return new C.aaZ()}}
C.aaZ.prototype={
bwz(d,e){var w=C.d7R(d)
if(w!=null)return C.d7S(w,e)
return d},
a3C(d,e){var w,v=this,u=C.d7R(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bwz(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dFf(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
buu(){var w,v=this
if(v.w)return
v.p(new C.cvo(v))
w=v.e
if(w!=null)v.a3C(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aP()
u.d=w
try{$.E0()
$.ox().rO(w,new C.cvw(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cvp(v))
w=v.e
w.toString
v.a3C(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Z(B.RK,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.C,A.j("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fS(A.aN(new A.H(new A.V(12,12,12,12),A.x(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YA(n,B.pX,w)],v)
if(o.f)w.push(A.fS(A.aN(new A.ai(28,28,D.aeQ,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.b_,B.o,1)
q=A.Z(B.Fl,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eL(0,A.aI(!1,B.J,!0,n,A.aU(!1,n,!0,A.aN(A.t(n,A.G(A.a([q,B.a_,A.j("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.h,n,n,new A.q(t,n,r,s,n,n,B.j),n,n,n,D.Ot,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbut(),n,n,n,n,n,n,n),B.h,u,0,n,n,n,n,n,B.X)))}return new A.aF(B.a3,n,B.aS,B.m,w,n)}}
var z=a.updateTypes(["n(n0)","~()","Ha(Q)","n0(X<@,@>)","a_(n0)","X<n,@>(n0)","aw<~>()","H9(Q)","iu<P>(Q,p6?,o?)","SF(Q,P)","rm(Q,p6?,o?)","CR(Q,aj,dv?)"])
C.d46.prototype={
$1(d){return new C.Ha(this.a,null)},
$S:z+2}
C.d45.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.F(d).ax.a===B.r,l=A.az(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d5,B.N],j):A.a([B.c,B.ab],j),h=A.a([new A.aa(0,B.x,B.T.l(0.22),B.dY,32)],x.V),g=A.T(m?B.bv:B.T.l(0.18),B.o,1),f=A.m(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a4.l(m?0.18:0.08)],j)
e=A.t(n,D.awN,B.h,n,n,new A.q(B.T.l(0.18),n,A.T(B.T.l(0.45),B.o,1),n,n,n,B.ai),n,48,n,n,n,n,48)
w=A.j("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.x(A.a([w,B.an,A.j("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a7,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.f,0,B.l),1)
j=A.t(n,A.G(A.a([e,B.ee,w,A.aH(n,n,n,n,A.Z(B.cq,m?B.a8:B.cf,n,n,n),n,n,n,new C.d41(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.f,0,n,n),B.h,n,n,new A.q(n,n,n,n,n,new A.an(B.Z,B.a0,B.y,j,n,n),B.j),n,n,n,B.Dd,n,n,n)
e=A.e2(B.bU,A.a([new C.Kj("YouTube",B.Fh,m,n),new C.Kj("TikTok",B.jL,m,n),new C.Kj("Instagram",B.xD,m,n),new C.Kj("Facebook",B.xG,m,n)],v),B.bO,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.N,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bE:B.fT,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ak:B.bo
r=A.Z(B.ik,B.T.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bv:B.au
u=A.x(A.a([e,B.as,A.aC(n,B.F,!0,n,!0,B.m,n,A.aD(),w,n,n,n,n,n,2,A.bm(n,new A.b7(4,q,B.L),n,n,n,n,n,n,!0,new A.b7(4,p,new A.aE(o,1,B.o,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b7(4,A.m(16),B.Kq),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.t,!0,n,!0,n,!1,n,B.Q,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.I,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.M,n,B.S,n,n,n,n)],v),B.af,B.e,B.f,0,B.l)
e=A.jo(D.awQ,D.bYY,new C.d42(d),A.it(n,n,n,n,n,n,n,n,n,n,n,m?B.aM:B.a7,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.V(12,0,12,12+l.f.d),A.dx(A.cq(f,A.x(A.a([j,new A.H(B.OF,u,n),new A.H(D.aps,A.G(A.a([e,B.b3,A.bZ(!1,A.j("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a6,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d43(d),n,n),B.a_,A.dH(D.aAY,D.bZL,new C.d44(d,w),A.bu(B.T,n,n,n,B.c,n,D.Ot,n,new A.bB(A.m(14),B.L),n,n,n))],v),B.i,n,B.e,B.f,0,n,n),n)],v),B.af,B.e,B.P,0,B.l),B.at),new A.q(n,n,g,k,h,new A.an(B.am,B.ar,B.y,i,n,n),B.j),B.bp),n)},
$S:79}
C.d41.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d42.prototype={
$0(){C.diR()
$.LY().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d43.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d44.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bed.prototype={
$1(d){return C.diS(A.S(d,x.N,x.z))},
$S:z+3}
C.bee.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.be5.prototype={
$1(d){return d.c},
$S:z+0}
C.be6.prototype={
$1(d){return d.r},
$S:z+0}
C.be7.prototype={
$1(d){return d.f},
$S:z+0}
C.be8.prototype={
$1(d){return d.at},
$S:z+0}
C.be9.prototype={
$1(d){return d.c},
$S:z+0}
C.bea.prototype={
$1(d){return d.r},
$S:z+0}
C.beb.prototype={
$1(d){return d.f},
$S:z+0}
C.bec.prototype={
$1(d){return d.at},
$S:z+0}
C.be4.prototype={
$1(d){return d.a8()},
$S:z+5}
C.be3.prototype={
$1(d){return B.a.bh(B.n.j4(d,16),2,"0").toUpperCase()},
$S:76}
C.cvg.prototype={
$0(){},
$S:0}
C.cvf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cvd.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cve.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cvh.prototype={
$1(d){return new C.H9(this.a,null)},
$S:z+7}
C.cvl.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cvm.prototype={
$3(d,e,f){return new A.iu($.E_(),new C.cvk(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cvk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.AR(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.T.l(0.12)
s=A.m(12)
r=A.T(B.T.l(0.35),B.o,1)
q=A.Z(B.im,B.T,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.E_().a
m=B.k.am(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.a_,A.I(A.j("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.N,k,k,k,k,k,k,k,k,12,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.f,0,k,k),B.h,k,k,new A.q(t,k,r,s,k,k,B.j),k,k,B.cu,B.eB,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.cq(s,new A.iQ(1.7777777777777777,C.diT(new A.df("fleet_master_"+r,x.W),!0,r,!0,j.gaGN(),"fleet_master"),k),B.at),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.j(i,k,k,k,k,k,k,A.l(k,k,A.F(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.u3(0,B.m,k,B.t,k,k,k,k,!1,k,B.a1,!1,A.a([new A.jK(new A.H(B.D4,A.x(u,B.v,B.e,B.f,0,B.l),k),k),new A.na(D.anw,A.atT(new A.mr(new C.cvj(i,j),J.a3(i.d),!1,!0,!0,A.qZ(),k),D.bze),k)],w))},
$S:1617}
C.cvj.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.SF(v,e,J.a3(w.d),new C.cvi(w,v),this.b,null)},
$S:z+9}
C.cvi.prototype={
$0(){return this.a.bg6(this.b)},
$S:0}
C.cvn.prototype={
$0(){this.a.Rp()
return null},
$S:0}
C.cva.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cvb.prototype={
$0(){C.Vg(this.a,$.be2)
return null},
$S:0}
C.cvc.prototype={
$3(d,e,f){return A.fy(new C.cv9(this.a,e))},
$S:z+10}
C.cv9.prototype={
$2(d,e){var w,v=null,u=B.k.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aN(A.co(A.x(A.a([A.j(r,v,v,v,v,v,v,A.l(v,v,A.F(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.as,new C.aJR(u,s.a.c,s.e,s.d,new C.cv6(s),new C.cv7(s),new C.cv8(s),t,v)],x.p),B.i,B.e,B.f,0,B.l),v,B.t,v,B.oN,v,v,B.a1),v,v,v)},
$S:1618}
C.cv6.prototype={
$0(){var w=this.a.c
w.toString
C.Vg(w,$.be2)
return null},
$S:0}
C.cv7.prototype={
$1(d){var w=this.a
return w.p(new C.cv5(w,d))},
$S:38}
C.cv5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv8.prototype={
$0(){var w=this.a
return w.p(new C.cv4(w))},
$S:0}
C.cv4.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cJM.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cJN.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.czf.prototype={
$3(d,e,f){return new C.CR(this.a.c,null)},
$S:z+11}
C.czg.prototype={
$3(d,e,f){if(f==null)return e
return new A.aF(B.a3,null,B.aS,B.m,A.a([new C.CR(this.a.c,null),D.aec],x.p),null)},
$C:"$3",
$R:3,
$S:423}
C.cvo.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cvw.prototype={
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
w.a3C(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fQ(v,"load",new C.cvu(w),!1,u)
v=w.e
v.toString
A.fQ(v,"error",new C.cvv(w),!1,u)
w=w.e
w.toString
return w},
$S:567}
C.cvu.prototype={
$1(d){var w=this.a
if(w.c!=null){w.p(new C.cvs(w))
A.bK(B.E,new C.cvt(w),x.H)}},
$S:43}
C.cvs.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvt.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cvq(w))},
$S:12}
C.cvq.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cvv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cvr(w))},
$S:43}
C.cvr.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cvp.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d0b.prototype={
$1(d){var w,v,u,t,s=new A.Cr([],[]).FS(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.w.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1619};(function aliases(){var w=C.afD.prototype
w.aQe=w.n})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.aaY.prototype,"gas2","bdE",1)
w(u,"gbee","bef",1)
w(u,"gbgE","bgF",6)
w(C.aaZ.prototype,"gbut","buu",1)
v(C,"dWt","diQ",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wz,[C.d46,C.d45,C.bed,C.bee,C.be5,C.be6,C.be7,C.be8,C.be9,C.bea,C.beb,C.bec,C.be4,C.be3,C.cvh,C.cvm,C.cvk,C.cvc,C.cv7,C.czf,C.czg,C.cvw,C.cvu,C.cvv,C.d0b])
v(A.WP,[C.d41,C.d42,C.d43,C.d44,C.cvg,C.cvf,C.cvd,C.cve,C.cvl,C.cvi,C.cvn,C.cva,C.cvb,C.cv6,C.cv5,C.cv8,C.cv4,C.cJM,C.cJN,C.cvo,C.cvs,C.cvt,C.cvq,C.cvr,C.cvp])
v(A.au,[C.Kj,C.SF,C.aCf,C.aJR,C.aJS,C.aDi,C.aJQ,C.aEt,C.ayz,C.aEy,C.CR])
v(A.aj,[C.n0,C.p6])
v(A.ab,[C.Ha,C.H9,C.a1W,C.a1X])
v(A.ad,[C.aaY,C.aDc,C.afD,C.aaZ])
v(A.WQ,[C.cvj,C.cv9])
u(C.Hd,A.azt)
u(C.aDd,C.afD)
w(C.afD,A.e1)})()
A.dm5(b.typeUniverse,JSON.parse('{"Ha":{"ab":[],"o":[]},"SF":{"au":[],"o":[]},"H9":{"ab":[],"o":[]},"Kj":{"au":[],"o":[]},"aaY":{"ad":["Ha"]},"aCf":{"au":[],"o":[]},"aDc":{"ad":["H9"]},"aJR":{"au":[],"o":[]},"aJS":{"au":[],"o":[]},"aDi":{"au":[],"o":[]},"aJQ":{"au":[],"o":[]},"aEt":{"au":[],"o":[]},"ayz":{"au":[],"o":[]},"a1W":{"ab":[],"o":[]},"CR":{"au":[],"o":[]},"aDd":{"ad":["a1W"]},"aEy":{"au":[],"o":[]},"a1X":{"ab":[],"o":[]},"aaZ":{"ad":["a1X"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.be
return{V:w("a9<aa>"),O:w("a9<z>"),e:w("a9<n0>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<P>"),X:w("ac<n0>"),a:w("ac<@>"),P:w("X<n,@>"),f:w("X<@,@>"),w:w("mX"),_:w("AO"),k:w("n0"),N:w("n"),Y:w("bi<a7>"),W:w("df<n>"),J:w("iu<P>"),j:w("iu<p6?>"),E:w("vv<cx>"),q:w("Tm"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Rw=new A.L(983224,"MaterialIcons",!1)
D.azr=new A.a6(D.Rw,48,B.b_,null,null,null)
D.bFg=new A.M(!0,B.bE,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bMG=new A.y("Powered off",null,D.bFg,null,null,null,null,null,null,null,null,null)
D.aMV=w([D.azr,B.C,D.bMG],x.p)
D.akZ=new A.eJ(B.a1,B.e,B.P,B.i,null,B.l,null,0,D.aMV,null)
D.adZ=new A.dc(B.K,null,null,D.akZ,null)
D.byV=new A.ai(18,18,B.Ll,null)
D.aec=new A.dc(B.K,null,null,D.byV,null)
D.aeQ=new A.h5(2,null,null,null,null,B.U,null,null,null,null)
D.ahG=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aia=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.ajR=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.ann=new A.V(0,3,0,3)
D.anw=new A.V(10,0,10,88)
D.anU=new A.V(12,6,12,10)
D.ao7=new A.V(14,8,14,6)
D.Ot=new A.V(18,12,18,12)
D.aps=new A.V(20,8,20,20)
D.P5=new A.V(8,6,15,8)
D.avc=new A.L(983222,"MaterialIcons",!1)
D.awN=new A.a6(B.im,26,B.T,null,null,null)
D.awQ=new A.a6(B.QI,18,null,null,null,null)
D.ax5=new A.a6(B.pm,14,B.U,null,null,null)
D.avr=new A.L(983420,"MaterialIcons",!1)
D.axQ=new A.a6(D.avr,14,B.U,null,null,null)
D.atF=new A.L(62895,"MaterialIcons",!1)
D.axU=new A.a6(D.atF,14,B.U,null,null,null)
D.aAY=new A.a6(B.iV,20,null,null,null,null)
D.aBe=new A.a6(B.eT,16,null,null,null,null)
D.aPi=w([B.ak,B.N],x.O)
D.SZ=new A.an(B.am,B.ar,B.y,D.aPi,null,null)
D.bsI=new A.aJ("NGMY OS","14.2.1")
D.brz=new A.aJ("VirtualDroid","13.8.4")
D.bry=new A.aJ("NGMY OS","15.0.0")
D.bsh=new A.aJ("VirtualDroid","14.1.2")
D.brw=new A.aJ("NGMY Tab OS","12.9.7")
D.bru=new A.aJ("NGMY OS","13.5.3")
D.brj=new A.aJ("VirtualDroid","15.2.0")
D.brV=new A.aJ("NGMY OS","14.8.1")
D.bsn=new A.aJ("NGMY Tab OS","13.2.4")
D.bsS=new A.aJ("VirtualDroid","12.6.9")
D.brf=new A.aJ("NGMY OS","16.0.1")
D.br6=new A.aJ("VirtualDroid","14.9.0")
D.bsA=new A.aJ("NGMY Tab OS","14.0.3")
D.brI=new A.aJ("NGMY OS","13.1.8")
D.bre=new A.aJ("VirtualDroid","13.4.5")
D.brt=new A.aJ("NGMY OS","15.3.2")
D.bso=new A.aJ("NGMY Tab OS","12.4.1")
D.bsC=new A.aJ("VirtualDroid","16.1.0")
D.brU=new A.aJ("NGMY OS","14.4.6")
D.bsJ=new A.aJ("VirtualDroid","15.0.8")
D.aOM=w([D.bsI,D.brz,D.bry,D.bsh,D.brw,D.bru,D.brj,D.brV,D.bsn,D.bsS,D.brf,D.br6,D.bsA,D.brI,D.bre,D.brt,D.bso,D.bsC,D.brU,D.bsJ],A.be("a9<+(n,n)>"))
D.buU=new A.ej(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bus=new A.ej(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bun=new A.ej(["New York","United States",40.7128,-74.006,"America/New_York"])
D.buw=new A.ej(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.buj=new A.ej(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.buy=new A.ej(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.buW=new A.ej(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.buk=new A.ej(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bur=new A.ej(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.buA=new A.ej(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bui=new A.ej(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.buO=new A.ej(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.buL=new A.ej(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.buq=new A.ej(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.buI=new A.ej(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.buH=new A.ej(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.buh=new A.ej(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.buv=new A.ej(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.buF=new A.ej(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.buK=new A.ej(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.U9=w([D.buU,D.bus,D.bun,D.buw,D.buj,D.buy,D.buW,D.buk,D.bur,D.buA,D.bui,D.buO,D.buL,D.buq,D.buI,D.buH,D.buh,D.buv,D.buF,D.buK],A.be("a9<+(n,n,a7,a7,n)>"))
D.aUU=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a05=new C.Hd(0,"youtube")
D.a06=new C.Hd(1,"tiktok")
D.Hb=new C.Hd(2,"instagram")
D.a07=new C.Hd(3,"facebook")
D.bmF=new C.Hd(4,"other")
D.byv=new A.ai(3,null,null,null)
D.bze=new A.ib(4,10,8,0.52,null)
D.bNW=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bCB=new A.aR(D.bNW,null,null,null,null,null,null,null,null,null,null,null,null,B.E,!1,null,null,null,B.m,null)
D.bFD=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNK=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.bYY=new A.y("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.bZL=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.bZQ=new A.y("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c4m=new C.aEt(null)})();(function staticFields(){$.diP=20
$.aqo=null
$.be2=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e_N","E_",()=>A.Rj(0))
w($,"e_O","LY",()=>A.Rj(null))})()};
(a=>{a["sRhLKvsa/7fcyedQ9pYZYG+L/9Y="]=a.current})($__dart_deferred_initializers__);