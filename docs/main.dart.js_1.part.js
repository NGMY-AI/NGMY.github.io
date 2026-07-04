((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dZQ(d,e){A.a5(d,!1).cr(A.er(new C.d5Y(e),!0,null,x.H))},
VA(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$VA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.Mf()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.al()
s=new A.ag(new A.b_(n,B.af,B.a6),t)
w=3
return A.b(A.dd(B.C,new C.d5X(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$VA)
case 3:r=g
s.E$=t
s.H$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.dHv(r)
if(q==null){d.F(x.q).f.O(D.bF9)
w=1
break}w=4
return A.b(A.bN(B.h_,null,x.H),$async$VA)
case 4:if(d.e==null){w=1
break}n=B.o.am(e,1,999)
$.dkQ=n
p=C.dHp(n)
n=$.Ee()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.d9Q(q)
d.F(x.q).f.O(A.bs(null,null,null,null,null,B.n,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.F,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
dkT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
m=A.aW(d.h(0,"virtualLat"))
if(m==null)m=null
if(m==null)m=0
l=A.aW(d.h(0,"virtualLng"))
if(l==null)l=null
if(l==null)l=0
k=d.h(0,"timezone")
k=J.k(k==null?"UTC":k)
j=d.h(0,"createdAt")
return new C.nb(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Hr(d){return C.dHy(d)},
dHy(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Hr=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$Hr)
case 3:g=a5
f=B.a.i(a3)
e=g.a
d=J.a4(e)
a0=A.aJ(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.x.aC(0,a0,null)
w=x.a.b(r)&&J.cA(r)?10:11
break
case 10:k=J.eM(r,x.f)
k=A.dj(k,new C.bfg(),k.$ti.j("K.E"),x.k)
j=A.U(k).j("af<K.E>")
i=A.C(new A.af(k,new C.bfh(),j),j.j("K.E"))
q=i
if(J.a3(q)>=20){u=q
w=1
break}p=C.dkV(q)
w=12
return A.b(C.Hq(a3,p),$async$Hr)
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
case 9:case 5:o=A.aJ(d.h(e,"ngmy_virtual_device_v1_"+f.toLowerCase()))
w=o!=null&&o.length!==0?13:14
break
case 13:t=16
n=B.x.aC(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dkT(A.S(n,x.N,x.z))
l=C.dkV(A.a([m],x.e))
w=21
return A.b(C.Hq(a3,l),$async$Hr)
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
case 18:case 14:q=C.dHw()
w=22
return A.b(C.Hq(a3,q),$async$Hr)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hr,v)},
dkV(d){var w=A.W(d).j("A<1,n>"),v=new A.A(d,new C.bf8(),w).ek(0),u=new A.A(d,new C.bf9(),w).ek(0),t=new A.A(d,new C.bfa(),w).ek(0),s=new A.A(d,new C.bfb(),w).ek(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.d9R(null,q,u,t,v,s));++q}return r},
aqY(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$aqY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hr(d),$async$aqY)
case 3:t=f
s=x.N
r=J.ce(t)
q=r.cZ(t,new C.bfc(),s).ek(0)
p=r.cZ(t,new C.bfd(),s).ek(0)
o=r.cZ(t,new C.bfe(),s).ek(0)
n=r.cZ(t,new C.bff(),s).ek(0)
m=C.d9R(null,r.gJ(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Hq(d,t),$async$aqY)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqY,v)},
Hq(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Hq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$Hq)
case 2:u=g
t=B.a.i(d)
s=J.b4(e,new C.bf7(),x.P)
s=A.C(s,s.$ti.j("a1.E"))
w=3
return A.b(u.ao("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.x.al(s,null)),$async$Hq)
case 3:return A.h(null,v)}})
return A.i($async$Hq,v)},
dHw(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dT(20,x.k)
for(w=0;w<20;++w)q[w]=C.d9R(w,w,t,s,u,r)
return q},
d9R(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jf(),h=d==null,g=D.UO[B.o.ag(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.UO[B.o.ag(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bx(256)
n=new A.A(p,new C.bf6(),A.W(p).j("A<1,n>")).eR(0)
u="VND-"+B.a.a9(n,0,4)+"-"+B.a.a9(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bx(10)
t=B.d.eR(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.a.bh(B.o.j4(i.bx(256),16),2,"0")
s=B.d.bd(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.o.ag(e,20)
k=D.aWf[w]
j=D.aQ_[w]
return new C.nb("vd_"+1000*Date.now()+"_"+e+"_"+i.bx(99999),"Device "+B.a.bh(B.o.q(e+1),2,"0"),u,k,C.dHx(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.N(Date.now(),0,!1).a_().Y())},
dHx(d,e){var w,v=J.dT(e,x.N)
for(w=0;w<e;++w)v[w]=B.a.bh(B.o.j4(d.bx(256),16),2,"0")
return B.d.eR(v)},
d5Y:function d5Y(d){this.a=d},
d5X:function d5X(d,e){this.a=d
this.b=e},
d5T:function d5T(d){this.a=d},
d5U:function d5U(d){this.a=d},
d5V:function d5V(d){this.a=d},
d5W:function d5W(d,e){this.a=d
this.b=e},
Ky:function Ky(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
nb:function nb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bfg:function bfg(){},
bfh:function bfh(){},
bf8:function bf8(){},
bf9:function bf9(){},
bfa:function bfa(){},
bfb:function bfb(){},
bfc:function bfc(){},
bfd:function bfd(){},
bfe:function bfe(){},
bff:function bff(){},
bf7:function bf7(){},
bf6:function bf6(){},
Hp:function Hp(d,e){this.c=d
this.a=e},
abl:function abl(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cx0:function cx0(){},
cx_:function cx_(d,e){this.a=d
this.b=e},
cwY:function cwY(d){this.a=d},
cwZ:function cwZ(d,e){this.a=d
this.b=e},
cx1:function cx1(d){this.a=d},
cx5:function cx5(d){this.a=d},
cx6:function cx6(d,e){this.a=d
this.b=e},
cx4:function cx4(d,e,f){this.a=d
this.b=e
this.c=f},
cx3:function cx3(d,e){this.a=d
this.b=e},
cx2:function cx2(d,e){this.a=d
this.b=e},
cx7:function cx7(d){this.a=d},
SZ:function SZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCQ:function aCQ(d,e){this.c=d
this.a=e},
Ho:function Ho(d,e){this.c=d
this.a=e},
aDO:function aDO(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cwV:function cwV(d){this.a=d},
cwW:function cwW(d){this.a=d},
cwX:function cwX(d){this.a=d},
cwU:function cwU(d,e){this.a=d
this.b=e},
cwR:function cwR(d){this.a=d},
cwS:function cwS(d){this.a=d},
cwQ:function cwQ(d,e){this.a=d
this.b=e},
cwT:function cwT(d){this.a=d},
cwP:function cwP(d){this.a=d},
aKt:function aKt(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aKu:function aKu(d,e,f){this.c=d
this.d=e
this.a=f},
aDU:function aDU(d,e){this.c=d
this.a=e},
aKs:function aKs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cLy:function cLy(d){this.a=d},
cLz:function cLz(d){this.a=d},
aF4:function aF4(d){this.a=d},
az8:function az8(d,e){this.c=d
this.a=e},
dHv(d){var w,v,u,t,s,r,q=null,p=B.a.i(d)
if(p.length===0)return q
w=B.a.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.dHu(v)
if(u!=null)return new C.pf(w,C.d9P(u,!1),D.a0M,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dHt(v)
if(t!=null)return new C.pf(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.a0N,"TikTok",q)
s=C.dHs(w,v)
if(s!=null)return s
r=C.dHr(w,v)
if(r!=null)return r
if(B.a.t(v,"tiktok.com")||B.a.t(v,"instagram.com")||B.a.t(v,"facebook.com")||B.a.t(v,"fb.watch")||B.a.t(v,"youtube.com")||B.a.t(v,"youtu.be"))return new C.pf(w,w,D.bpb,"Video",q)
return q},
dHs(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.aq("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d0(e)
if(s!=null){w=s.b[1]
w.toString
return new C.pf(d,"https://www.instagram.com/reel/"+w+u,D.HD,t,null)}v=A.aq("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).d0(e)
if(v!=null){w=v.b[1]
w.toString
return new C.pf(d,"https://www.instagram.com/p/"+w+u,D.HD,t,null)}return null},
dHr(d,e){if(!B.a.t(e,"facebook.com")&&!B.a.t(e,"fb.watch")&&!B.a.t(e,"fb.com"))return null
return new C.pf(d,"https://www.facebook.com/plugins/video.php?href="+A.eK(2,d,B.aO,!1)+"&show_text=false&width=734",D.a0O,"Facebook",null)},
dHu(d){var w,v,u,t=[A.aq(y.c,!0,!1,!1,!1),A.aq("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.aq("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].d0(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
dHt(d){var w,v=A.aq("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).d0(d)
if(v!=null)return v.b[1]
w=A.aq("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).d0(d)
return w==null?null:w.b[1]},
Hs:function Hs(d,e){this.a=d
this.b=e},
pf:function pf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2g:function a2g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDP:function aDP(d,e){var _=this
_.d=$
_.cS$=d
_.aQ$=e
_.c=_.a=null},
aF9:function aF9(d,e){this.c=d
this.a=e},
cB_:function cB_(d){this.a=d},
cB0:function cB0(d){this.a=d},
D6:function D6(d,e){this.c=d
this.a=e},
ag0:function ag0(){},
dkU(d,e,f,g,h,i){return new C.a2h(i,f,h,e,g,d)},
dYv(d){var w=window
w.toString
A.fU(w,"message",new C.d22(d),!1,x._)},
a2h:function a2h(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
abm:function abm(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cx8:function cx8(d){this.a=d},
cxg:function cxg(d){this.a=d},
cxe:function cxe(d){this.a=d},
cxc:function cxc(d){this.a=d},
cxd:function cxd(d){this.a=d},
cxa:function cxa(d){this.a=d},
cxf:function cxf(d){this.a=d},
cxb:function cxb(d){this.a=d},
cx9:function cx9(d){this.a=d},
d22:function d22(d){this.a=d},
dkO(){var w,v,u
try{v=A.yM()
w=v.gq1(v)
if(J.a3(w)!==0&&!J.v(w,"null")&&!J.cB(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
d9P(d,e){var w=C.dkO(),v=A.a([],x.s)
v.push("autoplay=1")
v.push("playsinline=1")
v.push("rel=0")
v.push("modestbranding=1")
v.push("enablejsapi=1")
v.push("origin="+A.eK(2,w,B.aO,!1))
v.push("widget_referrer="+A.eK(2,w,B.aO,!1))
v.push("iv_load_policy=3")
if(e)v.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bd(v,"&")},
d9O(d){var w=A.aq(y.c,!0,!1,!1,!1).d0(d)
return w==null?null:w.b[1]},
dkP(d){var w=A.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bh(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dHo(d,e,f){var w,v,u=C.d9O(d)
if(u!=null){if(f){w=C.dkO()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        }        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        },\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dkP(C.d9P(u,e))}return C.dkP(d)},
dHp(d){if(d<=4)return 0
return B.o.aZ(d-1,4)*4},
dHq(d){var w
if($.Mf().a==null)return!1
w=$.Ee().a
return d>=w&&d<w+4},
dkS(){var w=$.aqX
if(w!=null)w.a8(0)
$.aqX=null
$.Ee().sv(0,0)},
dkR(){var w,v,u,t=$.Mf()
if(t.a==null)return
w=$.aqX
if(w!=null)w.a8(0)
v=$.dkQ
if(v<=4){t=t.a
t.toString
C.d9Q(t)
return}w=$.Ee()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.d9Q(t)},
d9Q(d){var w=$.aqX
if(w!=null)w.a8(0)
w=120
switch(d.c.a){case 0:w=180
break
case 1:w=60
break
case 2:w=90
break
case 3:break
case 4:break
default:w=null}$.aqX=A.dv(A.db(0,0,0,0,0,w),C.dYG())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.Ky.prototype={
B(d){var w=null,v=this.e,u=v?B.am:B.c,t=A.m(20),s=A.T(B.T.l(0.25),B.m,1),r=A.Y(this.d,B.T,w,w,14)
return A.r(w,A.G(A.a([r,B.eJ,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.U:B.bt,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.i,w,B.e,B.P,0,w,w),B.f,w,w,new A.q(u,w,s,t,w,w,B.j),w,w,w,B.eC,w,w,w)}}
C.nb.prototype={
a7(){var w=this
return A.t(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Hp.prototype={
S(){return new C.abl(A.a([],x.e))},
gdR(){return this.c}}
C.abl.prototype={
Z(){var w=this
w.a3()
$.Ee().aj(0,w.gash())
C.dYv(w.gbeD())
w.Vi()},
be2(){if(this.c!=null)this.n(new C.cx0())},
beE(){C.dkR()},
p(){$.Ee().W(0,this.gash())
C.dkS()
$.Mf().sv(0,null)
this.a2()},
Vi(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Hr(t.a.c),$async$Vi)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cx_(t,s))
$.bf5=J.a3(s)
case 1:return A.h(u,v)}})
return A.i($async$Vi,v)},
Rt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.n(new C.cwY(t))
w=3
return A.b(C.aqY(t.a.c),$async$Rt)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwZ(t,s))
$.bf5=J.a3(t.d)
t.c.F(x.q).f.O(A.bs(null,null,null,null,null,B.n,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.F,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rt,v)},
bgv(d){var w=this.c
w.toString
A.a5(w,!1).cr(A.er(new C.cx1(d),!1,null,x.H))},
bh3(){var w=this.c
w.toString
return C.VA(w,J.a3(this.d))},
B(d){var w=this,v=null,u=A.B(d).ax.a===B.r,t=u?B.eb:B.bf,s=A.aL(v,v,v,v,B.FQ,v,v,v,new C.cx5(d),v,v,v,v,v,v),r=w.e?"Virtual Devices":"Virtual Devices ("+J.a3(w.d)+")",q=x.p
r=A.G(A.a([s,A.I(new A.BG(A.G(A.a([A.I(new A.H(B.hO,A.d(r,v,1,B.ai,v,v,v,A.l(v,v,u?B.c:B.M,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v),v),1),A.aI(!1,B.J,!0,v,A.aR(!1,v,!0,new A.H(B.aM,A.Y(B.eY,B.T,v,v,28),v),B.c2,!0,v,v,v,v,v,v,v,v,v,v,v,w.gbh2(),v,v,v,v,v,v,v),B.f,B.C,0,v,v,v,v,v,B.W)],q),B.i,v,B.e,B.h,0,v,v),v,v,v),1)],q),B.i,v,B.e,B.h,0,v,v)
s=A.c3(!0,A.x(A.a([new A.H(D.PL,r,v),A.I(w.e?B.lq:new A.iC($.Mf(),new C.cx6(w,u),v,v,x.j),1)],q),B.i,B.e,B.h,0,B.l),!1,B.Z,!0,!0)
return A.c9(v,t,s,v,!1,!1,A.alA(B.T,B.Br,B.lP,D.c1s,w.e?v:new C.cx7(w)),v)}}
C.SZ.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.T(B.c.l(0.1),B.m,1),q=A.a([new A.aa(0,B.w,B.T.l(0.18),B.cx,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a2g(n,!0,!C.dHq(w),"Fold "+(B.o.aZ(w,4)+1)+"/"+B.o.aZ(v.e+4-1,4),u)
n=w}else n=A.r(u,A.x(A.a([A.Y(B.ir,B.ly,u,u,22),B.an,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.c.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.i,B.ax,B.h,0,B.l),B.f,B.w_,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aI(!1,B.J,!0,u,A.aR(!1,t,!0,A.x(A.a([A.I(A.r(u,A.cf(p,A.fW(A.x(A.a([new C.aCQ(o,u),A.I(n,1),A.r(u,A.G(A.a([A.Y(B.yc,B.T.l(0.85),u,u,9),D.bB2,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.c.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.i,u,B.ax,B.h,0,u,u),B.f,B.aa,u,u,u,u,u,D.ao1,u,u,u)],w),B.i,B.e,B.h,0,B.l),B.q,!0),B.aq),B.f,u,u,new A.q(u,u,r,s,q,D.TD,B.j),u,u,u,B.eW,u,u,u),1),B.an,A.d(o.b,u,1,B.ai,u,u,u,A.l(u,u,A.B(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.y,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ai,u,u,u,A.l(u,u,A.B(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ai,u,u,u,A.l(u,u,B.T.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.i,B.e,B.h,0,B.l),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.f,B.C,0,u,u,u,u,u,B.W)}}
C.aCQ.prototype={
B(d){var w=null
return A.r(w,A.G(A.a([A.I(A.d(B.d.gav(this.c.c.split("-")),w,w,B.ai,w,w,w,A.l(w,w,B.c.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.Y(B.pv,B.c.l(0.45),w,w,7)],x.p),B.i,w,B.e,B.h,0,w,w),B.f,B.aa,w,w,w,w,w,B.PC,w,w,w)}}
C.Ho.prototype={
S(){return new C.aDO()}}
C.aDO.prototype={
B(d){var w=null,v=A.B(d).ax.a===B.r,u=v?B.eb:B.bf,t=A.aL(w,w,w,w,B.FQ,w,w,w,new C.cwV(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.c9(w,u,A.c3(!0,A.x(A.a([new A.H(D.PL,A.G(A.a([t,A.I(new A.BG(A.G(A.a([A.I(new A.H(B.hO,A.d(s.b+" \xb7 "+s.c,w,1,B.ai,w,w,w,A.l(w,w,v?B.c:B.M,w,w,w,w,w,w,w,w,14,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aI(!1,B.J,!0,w,A.aR(!1,w,!0,new A.H(B.aM,A.Y(B.eY,B.T,w,w,28),w),B.c2,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cwW(d),w,w,w,w,w,w,w),B.f,B.C,0,w,w,w,w,w,B.W)],r),B.i,w,B.e,B.h,0,w,w),w,w,w),1)],r),B.i,w,B.e,B.h,0,w,w),w),A.I(new A.iC($.Mf(),new C.cwX(this),w,w,x.j),1)],r),B.i,B.e,B.h,0,B.l),!1,B.Z,!0,!0),w,!1,!1,w,w)}}
C.aKt.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.aa(0,B.w,B.T.l(0.35),B.e5,28),new A.aa(0,B.w,B.q.l(0.45),B.cq,18)],x.V),o=A.T(B.c.l(0.12),B.m,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dkU(new A.dl(v+"_full_"+u,x.W),!1,u,!1,w.gaH2(),v+"_full")
w=v}else w=new C.aDU(t.r,s)}else w=new C.az8(m,s)
else w=D.c6Z
return A.r(s,A.cf(n,A.fW(A.x(A.a([new C.aKu(m,l,s),A.I(w,1),new C.aKs(t.f,l,t.w,t.x,s)],x.p),B.i,B.e,B.h,0,B.l),B.q,!0),B.aq),B.f,s,s,new A.q(s,s,o,q,p,D.TD,B.j),s,r*2.05,s,B.bd,s,s,r)}}
C.aKu.prototype={
B(d){var w,v,u,t,s=null,r=new A.N(Date.now(),0,!1),q=A.ds(r)
r=A.hn(r)
w=new A.dk(q,r)
v=w.gGJ()===0?12:w.gGJ()
r=B.a.bh(B.o.q(r),2,"0")
q=(q<12?B.eU:B.hK)===B.eU?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lb,s,s,s),B.b3,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.c.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bk,D.ayF,B.ds,D.axU,B.ds,D.ayJ],t),B.i,s,B.e,B.h,0,s,s)],t)
if(this.d)B.d.A(q,A.a([B.an,A.G(A.a([A.Y(B.FG,B.T.l(0.9),s,s,12),B.ds,A.I(A.d(u.c,s,s,B.ai,s,s,s,A.l(s,s,B.c.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.c.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.i,s,B.e,B.h,0,s,s)],t))
return A.r(s,A.x(q,B.i,B.e,B.h,0,B.l),B.f,B.aa,s,s,s,s,s,D.aoN,s,s,s)}}
C.aDU.prototype={
B(d){var w=null
return A.r(w,A.aK(A.x(A.a([A.Y(B.xP,B.c.l(0.35),w,w,40),B.G,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.c.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.an,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ak,A.es(D.aC4,D.bQj,this.c,A.ed(w,w,w,w,w,w,w,w,w,B.T,w,w,w,w,w,new A.aD(B.T.l(0.5),1,B.m,-1),w,w,w,w))],x.p),B.i,B.e,B.P,0,B.l),w,w,w),B.f,B.w_,w,w,w,w,w,w,w,w,1/0)}}
C.aKs.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.as9(B.Fy,"YouTube",s===0,r,new C.cLy(u))
s=u.as9(B.jN,"Device",s===1,r,new C.cLz(u))
w=r?"Power off":"Power on"
v=r?D.Sa:D.avW
return A.r(t,A.G(A.a([q,B.a1,s,B.b3,A.aL(t,t,t,t,A.Y(v,r?B.b7:B.eq,t,t,t),t,t,t,u.f,t,t,t,t,w,B.cB)],x.p),B.i,t,B.e,B.h,0,t,t),B.f,B.aa,t,t,t,t,t,D.aoy,t,t,t)},
as9(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.aW
else w=f?B.T:B.a8
v=f&&g?B.T.l(0.15):B.C
u=A.m(10)
t=g?h:s
return A.I(A.aI(!1,B.J,!0,u,A.aR(!1,A.m(10),!0,new A.H(B.lH,A.x(A.a([A.Y(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.i,B.e,B.P,0,B.l),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.f,v,0,s,s,s,s,s,B.W),1)}}
C.aF4.prototype={
B(d){return D.aeL}}
C.az8.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k8,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.c.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.qE("Serial",u.c),q=w.qE("Model",u.d),p=w.qE("Device ID",u.e),o=w.qE("IMEI",u.r),n=w.qE("MAC",u.f),m=w.qE("OS",u.w+" "+u.x),l=w.qE("Location",u.y+", "+u.z),k=w.qE("Coordinates",B.k.a1(u.Q,4)+", "+B.k.a1(u.as,4)),j=w.qE("Timezone",u.at)
u=u.ax
return A.em(A.a([t,B.an,s,B.V,r,q,p,o,n,m,l,k,j,w.qE("Provisioned",u.length>=10?B.a.a9(u,0,10):u)],x.p),v,B.aM,v,v,B.a2,!1)},
qE(d,e){var w=null
return new A.H(B.c3,A.x(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.c.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.bY,A.d(e,w,w,w,w,w,w,D.bId,w,w,w)],x.p),B.v,B.e,B.h,0,B.l),w)}}
C.Hs.prototype={
U(){return"NgmyVirtualMediaPlatform."+this.b}}
C.pf.prototype={
gaH2(){var w=this.c
return w===D.a0M||w===D.a0N||w===D.HD||w===D.a0O}}
C.a2g.prototype={
S(){return new C.aDP(null,null)}}
C.aDP.prototype={
Z(){this.a3()
var w=A.bG(null,B.rI,null,1,null,this)
w.lO(0,!0)
this.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.aQw()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.dE(t,new A.q(t,t,t,t,t,new A.am(B.cC,B.c1,B.z,A.a([B.C,B.q.l(0.55)],x.O),t,t),B.j),B.bu),q=x.Y,p=u.d
p===$&&A.c()
p=A.cp(B.hk,p,t)
w=B.c.l(0.92)
q=A.aK(new A.cW(new A.b2(p,new A.bl(0.72,1,q),q.j("b2<bk.T>")),!1,A.Y(B.ir,w,t,t,20),t),t,t,t)
p=u.a.e?B.c.l(0.22):B.ly
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aF9(s,t),r,q,A.aY(t,A.r(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,5,t,t,B.u,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.q(p,t,t,w,t,t,B.j),t,t,t,new A.V(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.c.l(0.75)
s.push(A.aY(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.c.l(0.85)
s.push(A.aY(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.y,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aH(B.a3,t,B.aS,B.n,s,t)}}
C.aF9.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kg(u,new C.cB_(this),B.bD,B.bo,!0,w,w,new C.cB0(this),w)
return new C.D6(v,w)}}
C.D6.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aN(A.a([B.rq,B.M3],x.O),B.ir)
break
case 1:w=new A.aN(A.a([B.w_,D.aiS],x.O),B.jP)
break
case 2:w=new A.aN(A.a([D.akr,D.ail],x.O),B.xW)
break
case 3:w=new A.aN(A.a([B.M,B.cD],x.O),B.y_)
break
case 4:w=new A.aN(A.a([B.aa,B.am],x.O),B.nj)
break
default:w=u}v=w.a
return A.r(u,A.aK(A.Y(w.b,B.T.l(0.55),u,u,28),u,u,u),B.f,u,u,new A.q(u,u,u,u,u,new A.am(B.ao,B.at,B.z,v,u,u),B.j),u,u,u,u,u,u,u)}}
C.ag0.prototype={
p(){var w=this,v=w.aQ$
if(v!=null)v.W(0,w.gdm())
w.aQ$=null
w.a2()},
bo(){this.bE()
this.bD()
this.dn()}}
C.a2h.prototype={
S(){return new C.abm()}}
C.abm.prototype={
bx4(d,e){var w=C.d9O(d)
if(w!=null)return C.d9P(w,e)
return d},
a3L(d,e){var w,v=this,u=C.d9O(e),t=v.a,s=t.x&&!v.w
if(u!=null&&t.f){d.removeAttribute("srcdoc")
d.src=v.bx4(e,s)
return}if(t.f){w=e.toLowerCase()
t=B.a.t(w,"tiktok.com/player")||B.a.t(w,"instagram.com")||B.a.t(w,"facebook.com/plugins")}else t=!1
if(t){d.removeAttribute("src")
d.srcdoc=C.dHo(e,s,v.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bv_(){var w,v=this
if(v.w)return
v.n(new C.cx8(v))
w=v.e
if(w!=null)v.a3L(w,v.a.d)},
Z(){var w,v,u=this
u.a3()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aS()
u.d=w
try{$.Ef()
$.oG().rS(w,new C.cxg(u),!0)}catch(v){u.r=!0
u.f=!1}},
aT(d){var w,v=this
v.b3(d)
if(d.d!==v.a.d&&v.e!=null){v.n(new C.cx9(v))
w=v.e
w.toString
v.a3L(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.c.l(0.55)
o.a.toString
v=x.p
w=A.a([A.Y(B.Sm,w,n,n,36)],v)
o.a.toString
B.d.A(w,A.a([B.E,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.c.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.H,n,n)],v))
return A.fW(A.aK(new A.H(new A.V(12,12,12,12),A.x(w,B.i,B.e,B.P,0,B.l),n),n,n,n),B.q,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.YT(n,B.q6,w)],v)
if(o.f)w.push(A.fW(A.aK(new A.ai(28,28,D.afz,n),n,n,n),B.cf,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.q.l(0.35)
t=B.q.l(0.72)
s=A.m(14)
r=A.T(B.aW,B.m,1)
q=A.Y(B.FK,B.c.l(0.9),n,n,22)
p=B.c.l(0.92)
o.a.toString
w.push(A.eD(0,A.aI(!1,B.J,!0,n,A.aR(!1,n,!0,A.aK(A.r(n,A.G(A.a([q,B.a1,A.d("Tap for sound",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.i,n,B.e,B.P,0,n,n),B.f,n,n,new A.q(t,n,r,s,n,n,B.j),n,n,n,D.P8,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbuZ(),n,n,n,n,n,n,n),B.f,u,0,n,n,n,n,n,B.W)))}return new A.aH(B.a3,n,B.aS,B.n,w,n)}}
var z=a.updateTypes(["n(nb)","~()","Hp(R)","nb(X<@,@>)","a0(nb)","X<n,@>(nb)","az<~>()","Ho(R)","iC<Q>(R,pf?,o?)","SZ(R,Q)","rx(R,pf?,o?)","D6(R,aj,dB?)"])
C.d5Y.prototype={
$1(d){return new C.Hp(this.a,null)},
$S:z+2}
C.d5X.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.B(d).ax.a===B.r,l=A.aB(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.d1,B.M],j):A.a([B.c,B.ab],j),h=A.a([new A.aa(0,B.w,B.T.l(0.22),B.e5,32)],x.V),g=A.T(m?B.bw:B.T.l(0.18),B.m,1),f=A.m(28),e=B.T.l(m?0.35:0.14)
j=A.a([e,B.a5.l(m?0.18:0.08)],j)
e=A.r(n,D.axB,B.f,n,n,new A.q(B.T.l(0.18),n,A.T(B.T.l(0.45),B.m,1),n,n,n,B.ah),n,48,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.c:B.M,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.I(A.x(A.a([w,B.an,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a4,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.v,B.e,B.h,0,B.l),1)
j=A.r(n,A.G(A.a([e,B.e6,w,A.aL(n,n,n,n,A.Y(B.cp,m?B.a8:B.cf,n,n,n),n,n,n,new C.d5T(d),n,n,n,n,n,n)],v),B.i,n,B.e,B.h,0,n,n),B.f,n,n,new A.q(n,n,n,n,n,new A.am(B.a_,B.a0,B.z,j,n,n),B.j),n,n,n,B.Dy,n,n,n)
e=A.e5(B.bW,A.a([new C.Ky("YouTube",B.FF,m,n),new C.Ky("TikTok",B.jP,m,n),new C.Ky("Instagram",B.xW,m,n),new C.Ky("Facebook",B.y_,m,n)],v),B.bQ,8,8)
w=this.b
u=A.l(n,n,m?B.c:B.M,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.bF:B.fV,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.am:B.bf
r=A.Y(B.ip,B.T.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.bw:B.as
u=A.x(A.a([e,B.au,A.aF(n,B.B,!0,n,!0,B.n,n,A.aG(),w,n,n,n,n,n,2,A.bo(n,new A.b8(4,q,B.I),n,n,n,n,n,n,!0,new A.b8(4,p,new A.aD(o,1,B.m,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.b8(4,A.m(16),B.KQ),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.t,!0,n,!0,n,!1,n,B.Q,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.K,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.N,n,B.S,n,n,n,n)],v),B.a9,B.e,B.h,0,B.l)
e=A.jb(D.axE,D.c0A,new C.d5U(d),A.ia(n,n,n,n,n,n,n,n,n,n,n,m?B.aP:B.a4,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.H(new A.V(12,0,12,12+l.f.d),A.dE(A.cf(f,A.x(A.a([j,new A.H(B.Pl,u,n),new A.H(D.aq5,A.G(A.a([e,B.b3,A.c_(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.U:B.a7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.d5V(d),n,n),B.a1,A.dF(D.aBO,D.c1n,new C.d5W(d,w),A.bx(B.T,n,n,n,B.c,n,D.P8,n,new A.bE(A.m(14),B.I),n,n,n))],v),B.i,n,B.e,B.h,0,n,n),n)],v),B.a9,B.e,B.P,0,B.l),B.aq),new A.q(n,n,g,k,h,new A.am(B.ao,B.at,B.z,i,n,n),B.j),B.bu),n)},
$S:75}
C.d5T.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5U.prototype={
$0(){C.dkS()
$.Mf().sv(0,null)
A.a5(this.a,!1).P(null)},
$S:0}
C.d5V.prototype={
$0(){A.a5(this.a,!1).P(null)
return null},
$S:0}
C.d5W.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).P(w)
return null},
$S:0}
C.bfg.prototype={
$1(d){return C.dkT(A.S(d,x.N,x.z))},
$S:z+3}
C.bfh.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.bf8.prototype={
$1(d){return d.c},
$S:z+0}
C.bf9.prototype={
$1(d){return d.r},
$S:z+0}
C.bfa.prototype={
$1(d){return d.f},
$S:z+0}
C.bfb.prototype={
$1(d){return d.at},
$S:z+0}
C.bfc.prototype={
$1(d){return d.c},
$S:z+0}
C.bfd.prototype={
$1(d){return d.r},
$S:z+0}
C.bfe.prototype={
$1(d){return d.f},
$S:z+0}
C.bff.prototype={
$1(d){return d.at},
$S:z+0}
C.bf7.prototype={
$1(d){return d.a7()},
$S:z+5}
C.bf6.prototype={
$1(d){return B.a.bh(B.o.j4(d,16),2,"0").toUpperCase()},
$S:78}
C.cx0.prototype={
$0(){},
$S:0}
C.cx_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cwY.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cwZ.prototype={
$0(){var w=this.a,v=A.C(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cx1.prototype={
$1(d){return new C.Ho(this.a,null)},
$S:z+7}
C.cx5.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cx6.prototype={
$3(d,e,f){return new A.iC($.Ee(),new C.cx4(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cx4.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.B8(d,k,x.Q)
w=w==null?k:w.gkq()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.T.l(0.12)
s=A.m(12)
r=A.T(B.T.l(0.35),B.m,1)
q=A.Y(B.ir,B.T,k,k,18)
p=j.d
o=J.a3(l.a.d)
n=$.Ee().a
m=B.k.am(n+4,1,o)
t=A.a([A.r(k,A.G(A.a([q,B.a1,A.I(A.d("Now playing "+p+" \xb7 "+("Devices "+A.p(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.c:B.M,k,k,k,k,k,k,k,k,12,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.i,k,B.e,B.h,0,k,k),B.f,k,k,new A.q(t,k,r,s,k,k,B.j),k,k,B.cv,B.eD,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.d.A(t,A.a([A.cf(s,new A.iY(1.7777777777777777,C.dkU(new A.dl("fleet_master_"+r,x.W),!0,r,!0,j.gaH2(),"fleet_master"),k),B.aq),B.V],w))}B.d.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a3(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.B(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.ue(0,B.n,k,B.t,k,k,k,k,!1,k,B.a2,!1,A.a([new A.jV(new A.H(B.Dq,A.x(u,B.v,B.e,B.h,0,B.l),k),k),new A.nk(D.aoa,A.auq(new A.mB(new C.cx3(i,j),J.a3(i.d),!1,!0,!0,A.r7(),k),D.bBN),k)],w))},
$S:1633}
C.cx3.prototype={
$2(d,e){var w=this.a,v=J.u(w.d,e)
return new C.SZ(v,e,J.a3(w.d),new C.cx2(w,v),this.b,null)},
$S:z+9}
C.cx2.prototype={
$0(){return this.a.bgv(this.b)},
$S:0}
C.cx7.prototype={
$0(){this.a.Rt()
return null},
$S:0}
C.cwV.prototype={
$0(){return A.a5(this.a,!1).e2()},
$S:0}
C.cwW.prototype={
$0(){C.VA(this.a,$.bf5)
return null},
$S:0}
C.cwX.prototype={
$3(d,e,f){return A.fv(new C.cwU(this.a,e))},
$S:z+10}
C.cwU.prototype={
$2(d,e){var w,v=null,u=B.k.am(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aK(A.cq(A.x(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.B(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.H,v,v),B.au,new C.aKt(u,s.a.c,s.e,s.d,new C.cwR(s),new C.cwS(s),new C.cwT(s),t,v)],x.p),B.i,B.e,B.h,0,B.l),v,B.t,v,B.oW,v,v,B.a2),v,v,v)},
$S:1634}
C.cwR.prototype={
$0(){var w=this.a.c
w.toString
C.VA(w,$.bf5)
return null},
$S:0}
C.cwS.prototype={
$1(d){var w=this.a
return w.n(new C.cwQ(w,d))},
$S:36}
C.cwQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwT.prototype={
$0(){var w=this.a
return w.n(new C.cwP(w))},
$S:0}
C.cwP.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.cLy.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.cLz.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cB_.prototype={
$3(d,e,f){return new C.D6(this.a.c,null)},
$S:z+11}
C.cB0.prototype={
$3(d,e,f){if(f==null)return e
return new A.aH(B.a3,null,B.aS,B.n,A.a([new C.D6(this.a.c,null),D.aeZ],x.p),null)},
$C:"$3",
$R:3,
$S:242}
C.cx8.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cxg.prototype={
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
w.a3L(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.fU(v,"load",new C.cxe(w),!1,u)
v=w.e
v.toString
A.fU(v,"error",new C.cxf(w),!1,u)
w=w.e
w.toString
return w},
$S:570}
C.cxe.prototype={
$1(d){var w=this.a
if(w.c!=null){w.n(new C.cxc(w))
A.bN(B.F,new C.cxd(w),x.H)}},
$S:43}
C.cxc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cxd.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.n(new C.cxa(w))},
$S:12}
C.cxa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cxf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cxb(w))},
$S:43}
C.cxb.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cx9.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.d22.prototype={
$1(d){var w,v,u,t,s=new A.CG([],[]).G0(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.v(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.a.t(u,"youtube.com")&&!B.a.t(u,"youtube-nocookie.com"))return
try{w=B.x.aC(0,q,null)
s=x.f
if(s.b(w)){v=J.u(w,"info")
if(J.v(J.u(w,"event"),"onStateChange")&&J.v(v,0)){this.a.$0()
return}if(J.v(J.u(w,"event"),"infoDelivery")&&s.b(v)&&J.v(J.u(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1635};(function aliases(){var w=C.ag0.prototype
w.aQw=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.abl.prototype,"gash","be2",1)
w(u,"gbeD","beE",1)
w(u,"gbh2","bh3",6)
w(C.abm.prototype,"gbuZ","bv_",1)
v(C,"dYG","dkR",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.wO,[C.d5Y,C.d5X,C.bfg,C.bfh,C.bf8,C.bf9,C.bfa,C.bfb,C.bfc,C.bfd,C.bfe,C.bff,C.bf7,C.bf6,C.cx1,C.cx6,C.cx4,C.cwX,C.cwS,C.cB_,C.cB0,C.cxg,C.cxe,C.cxf,C.d22])
v(A.X8,[C.d5T,C.d5U,C.d5V,C.d5W,C.cx0,C.cx_,C.cwY,C.cwZ,C.cx5,C.cx2,C.cx7,C.cwV,C.cwW,C.cwR,C.cwQ,C.cwT,C.cwP,C.cLy,C.cLz,C.cx8,C.cxc,C.cxd,C.cxa,C.cxb,C.cx9])
v(A.as,[C.Ky,C.SZ,C.aCQ,C.aKt,C.aKu,C.aDU,C.aKs,C.aF4,C.az8,C.aF9,C.D6])
v(A.aj,[C.nb,C.pf])
v(A.ab,[C.Hp,C.Ho,C.a2g,C.a2h])
v(A.ad,[C.abl,C.aDO,C.ag0,C.abm])
v(A.X9,[C.cx3,C.cwU])
u(C.Hs,A.aA2)
u(C.aDP,C.ag0)
w(C.ag0,A.e4)})()
A.do8(b.typeUniverse,JSON.parse('{"Hp":{"ab":[],"o":[]},"SZ":{"as":[],"o":[]},"Ho":{"ab":[],"o":[]},"Ky":{"as":[],"o":[]},"abl":{"ad":["Hp"]},"aCQ":{"as":[],"o":[]},"aDO":{"ad":["Ho"]},"aKt":{"as":[],"o":[]},"aKu":{"as":[],"o":[]},"aDU":{"as":[],"o":[]},"aKs":{"as":[],"o":[]},"aF4":{"as":[],"o":[]},"az8":{"as":[],"o":[]},"a2g":{"ab":[],"o":[]},"D6":{"as":[],"o":[]},"aDP":{"ad":["a2g"]},"aF9":{"as":[],"o":[]},"a2h":{"ab":[],"o":[]},"abm":{"ad":["a2h"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.be
return{V:w("a9<aa>"),O:w("a9<z>"),e:w("a9<nb>"),s:w("a9<n>"),p:w("a9<o>"),t:w("a9<Q>"),X:w("ac<nb>"),a:w("ac<@>"),P:w("X<n,@>"),f:w("X<@,@>"),w:w("n6"),_:w("B5"),k:w("nb"),N:w("n"),Y:w("bl<a7>"),W:w("dl<n>"),J:w("iC<Q>"),j:w("iC<pf?>"),E:w("vJ<cC>"),q:w("TG"),z:w("@"),Q:w("aj?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Sa=new A.L(983224,"MaterialIcons",!1)
D.aAh=new A.a6(D.Sa,48,B.aW,null,null,null)
D.bHR=new A.M(!0,B.bF,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bPe=new A.y("Powered off",null,D.bHR,null,null,null,null,null,null,null,null,null)
D.aO3=w([D.aAh,B.E,D.bPe],x.p)
D.alD=new A.eO(B.a2,B.e,B.P,B.i,null,B.l,null,0,D.aO3,null)
D.aeL=new A.dh(B.L,null,null,D.alD,null)
D.bBs=new A.ai(18,18,B.LM,null)
D.aeZ=new A.dh(B.L,null,null,D.bBs,null)
D.afz=new A.h8(2,null,null,null,null,B.U,null,null,null,null)
D.ail=new A.z(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.p)
D.aiS=new A.z(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.p)
D.akr=new A.z(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.p)
D.ao1=new A.V(0,3,0,3)
D.aoa=new A.V(10,0,10,88)
D.aoy=new A.V(12,6,12,10)
D.aoN=new A.V(14,8,14,6)
D.P8=new A.V(18,12,18,12)
D.aq5=new A.V(20,8,20,20)
D.PL=new A.V(8,6,15,8)
D.avW=new A.L(983222,"MaterialIcons",!1)
D.axB=new A.a6(B.ir,26,B.T,null,null,null)
D.axE=new A.a6(B.Rn,18,null,null,null,null)
D.axU=new A.a6(B.pv,14,B.U,null,null,null)
D.awc=new A.L(983420,"MaterialIcons",!1)
D.ayF=new A.a6(D.awc,14,B.U,null,null,null)
D.aul=new A.L(62895,"MaterialIcons",!1)
D.ayJ=new A.a6(D.aul,14,B.U,null,null,null)
D.aBO=new A.a6(B.iq,20,null,null,null,null)
D.aC4=new A.a6(B.eY,16,null,null,null,null)
D.aQv=w([B.am,B.M],x.O)
D.TD=new A.am(B.ao,B.at,B.z,D.aQv,null,null)
D.bvf=new A.aN("NGMY OS","14.2.1")
D.bu6=new A.aN("VirtualDroid","13.8.4")
D.bu5=new A.aN("NGMY OS","15.0.0")
D.buP=new A.aN("VirtualDroid","14.1.2")
D.bu3=new A.aN("NGMY Tab OS","12.9.7")
D.bu1=new A.aN("NGMY OS","13.5.3")
D.btR=new A.aN("VirtualDroid","15.2.0")
D.bus=new A.aN("NGMY OS","14.8.1")
D.buV=new A.aN("NGMY Tab OS","13.2.4")
D.bvp=new A.aN("VirtualDroid","12.6.9")
D.btN=new A.aN("NGMY OS","16.0.1")
D.btE=new A.aN("VirtualDroid","14.9.0")
D.bv7=new A.aN("NGMY Tab OS","14.0.3")
D.buf=new A.aN("NGMY OS","13.1.8")
D.btM=new A.aN("VirtualDroid","13.4.5")
D.bu0=new A.aN("NGMY OS","15.3.2")
D.buW=new A.aN("NGMY Tab OS","12.4.1")
D.bv9=new A.aN("VirtualDroid","16.1.0")
D.bur=new A.aN("NGMY OS","14.4.6")
D.bvg=new A.aN("VirtualDroid","15.0.8")
D.aQ_=w([D.bvf,D.bu6,D.bu5,D.buP,D.bu3,D.bu1,D.btR,D.bus,D.buV,D.bvp,D.btN,D.btE,D.bv7,D.buf,D.btM,D.bu0,D.buW,D.bv9,D.bur,D.bvg],A.be("a9<+(n,n)>"))
D.bxr=new A.en(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bx_=new A.en(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bwV=new A.en(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bx3=new A.en(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bwR=new A.en(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bx5=new A.en(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bxt=new A.en(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bwS=new A.en(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bwZ=new A.en(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bx7=new A.en(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bwQ=new A.en(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bxl=new A.en(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bxi=new A.en(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bwY=new A.en(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bxf=new A.en(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bxe=new A.en(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bwP=new A.en(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bx2=new A.en(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bxc=new A.en(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bxh=new A.en(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.UO=w([D.bxr,D.bx_,D.bwV,D.bx3,D.bwR,D.bx5,D.bxt,D.bwS,D.bwZ,D.bx7,D.bwQ,D.bxl,D.bxi,D.bwY,D.bxf,D.bxe,D.bwP,D.bx2,D.bxc,D.bxh],A.be("a9<+(n,n,a7,a7,n)>"))
D.aWf=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.a0M=new C.Hs(0,"youtube")
D.a0N=new C.Hs(1,"tiktok")
D.HD=new C.Hs(2,"instagram")
D.a0O=new C.Hs(3,"facebook")
D.bpb=new C.Hs(4,"other")
D.bB2=new A.ai(3,null,null,null)
D.bBN=new A.i9(4,10,8,0.52,null)
D.bQv=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.bF9=new A.aU(D.bQv,null,null,null,null,null,null,null,null,null,null,null,null,B.F,!1,null,null,null,B.n,null)
D.bId=new A.M(!0,B.c,null,null,null,null,11,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQj=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.c0A=new A.y("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.c1n=new A.y("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.c1s=new A.y("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.c6Z=new C.aF4(null)})();(function staticFields(){$.dkQ=20
$.aqX=null
$.bf5=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"e1Z","Ee",()=>A.RD(0))
w($,"e2_","Mf",()=>A.RD(null))})()};
(a=>{a["zMcbL0WVj68I5JgXmvAj/QPZ3L4="]=a.current})($__dart_deferred_initializers__);