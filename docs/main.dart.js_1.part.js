((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
emW(d,e){A.a3(d,!1).cz(A.eG(new C.doy(e),!0,null,x.H))},
a_h(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n
var $async$a_h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=$.PN()
n=o.a
n=n==null?null:n.a
if(n==null)n=""
t=$.aq()
s=new A.ak(new A.bc(n,B.aM,B.az),t)
w=3
return A.b(A.dw(B.L,new C.dox(e,s),d,!0,!0,!0,null,!1,!1,x.N),$async$a_h)
case 3:r=g
s.H$=t
s.K$=0
if(d.e==null||r==null||r.length===0){w=1
break}q=C.e28(r)
if(q==null){d.F(x.q).f.S(D.cP1)
w=1
break}w=4
return A.b(A.bM(B.ii,null,x.H),$async$a_h)
case 4:if(d.e==null){w=1
break}n=B.l.W(e,1,999)
$.dEV=n
p=C.e22(n)
n=$.GV()
if(n.a>p)n.sv(0,0)
o.sv(0,q)
n.sv(0,0)
C.dsC(q)
d.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Playing "+q.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_h,v)},
dEY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"id")
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
return new C.ou(i,w,v,u,t,s,r,q,p,o,n,m,l,k,J.k(j==null?"":j))},
Ky(d){return C.e2b(d)},
e2b(a3){var w=0,v=A.j(x.X),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ky=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Ky)
case 3:g=a5
f=B.b.i(a3)
e=g.a
d=J.a5(e)
a0=A.aL(d.h(e,"ngmy_virtual_device_fleet_v2_"+f.toLowerCase()))
w=a0!=null&&a0.length!==0?4:5
break
case 4:t=7
r=B.I.az(0,a0,null)
w=x.a.b(r)&&J.cS(r)?10:11
break
case 10:k=J.eE(r,x.f)
k=A.dm(k,new C.brb(),k.$ti.j("E.E"),x.k)
j=A.R(k).j("ai<E.E>")
i=A.z(new A.ai(k,new C.brc(),j),j.j("E.E"))
q=i
if(J.a4(q)>=20){u=q
w=1
break}p=C.dF_(q)
w=12
return A.b(C.Kx(a3,p),$async$Ky)
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
n=B.I.az(0,o,null)
w=x.f.b(n)?19:20
break
case 19:m=C.dEY(A.T(n,x.N,x.z))
l=C.dF_(A.a([m],x.e))
w=21
return A.b(C.Kx(a3,l),$async$Ky)
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
case 18:case 14:q=C.e29()
w=22
return A.b(C.Kx(a3,q),$async$Ky)
case 22:u=q
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ky,v)},
dF_(d){var w=A.Y(d).j("F<1,o>"),v=new A.F(d,new C.br3(),w).ew(0),u=new A.F(d,new C.br4(),w).ew(0),t=new A.F(d,new C.br5(),w).ew(0),s=new A.F(d,new C.br6(),w).ew(0),r=A.bi(d,!0,x.k),q=d.length
while(r.length<20){r.push(C.dsD(null,q,u,t,v,s));++q}return r},
ayK(d){var w=0,v=A.j(x.k),u,t,s,r,q,p,o,n,m
var $async$ayK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ky(d),$async$ayK)
case 3:t=f
s=x.N
r=J.c9(t)
q=r.de(t,new C.br7(),s).ew(0)
p=r.de(t,new C.br8(),s).ew(0)
o=r.de(t,new C.br9(),s).ew(0)
n=r.de(t,new C.bra(),s).ew(0)
m=C.dsD(null,r.gE(t),p,o,q,n)
r.D(t,m)
w=4
return A.b(C.Kx(d,t),$async$ayK)
case 4:u=m
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ayK,v)},
Kx(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Kx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Kx)
case 2:u=g
t=B.b.i(d)
s=J.b0(e,new C.br2(),x.P)
s=A.z(s,s.$ti.j("a7.E"))
w=3
return A.b(u.au("String","ngmy_virtual_device_fleet_v2_"+t.toLowerCase(),B.I.an(s,null)),$async$Kx)
case 3:return A.h(null,v)}})
return A.i($async$Kx,v)},
e29(){var w,v=x.N,u=A.b9(v),t=A.b9(v),s=A.b9(v),r=A.b9(v),q=J.dy(20,x.k)
for(w=0;w<20;++w)q[w]=C.dsD(w,w,t,s,u,r)
return q},
dsD(d,e,f,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=$.jP(),h=d==null,g=D.a7M[B.l.a2(h?e:d,20)]
for(w=x.s,v=x.t,u="",t="",s="",r=0;r<64;++r){q=D.a7M[B.l.a2(h?e+r:d,20)]
if(a2.t(0,q.a[4])&&a2.a<20)continue
p=A.a(new Array(4),v)
for(o=0;o<4;++o)p[o]=i.bI(256)
n=new A.F(p,new C.br1(),A.Y(p).j("F<1,o>")).fF(0)
u="VND-"+B.b.aj(n,0,4)+"-"+B.b.aj(n,4,8)
p=A.a(new Array(15),v)
for(m=0;m<15;++m)p[m]=i.bI(10)
t=B.h.fF(p)
p=A.a(new Array(6),w)
for(l=0;l<6;++l)p[l]=B.b.bc(B.l.fZ(i.bI(256),16),2,"0")
s=B.h.bi(p,":").toUpperCase()
if(!a1.t(0,u)&&!f.t(0,t)&&!a0.t(0,s)){g=q
break}g=q}a1.D(0,u)
f.D(0,t)
a0.D(0,s)
h=g.a
a2.D(0,h[4])
w=B.l.a2(e,20)
k=D.c_A[w]
j=D.bRh[w]
return new C.ou("vd_"+1000*Date.now()+"_"+e+"_"+i.bI(99999),"Device "+B.b.bc(B.l.n(e+1),2,"0"),u,k,C.e2a(i,16),s,t,j.a,j.b,h[0],h[1],h[2],h[3],h[4],new A.S(Date.now(),0,!1).a7().a0())},
e2a(d,e){var w,v=J.dy(e,x.N)
for(w=0;w<e;++w)v[w]=B.b.bc(B.l.fZ(d.bI(256),16),2,"0")
return B.h.fF(v)},
doy:function doy(d){this.a=d},
dox:function dox(d,e){this.a=d
this.b=e},
dot:function dot(d){this.a=d},
dou:function dou(d){this.a=d},
dov:function dov(d){this.a=d},
dow:function dow(d,e){this.a=d
this.b=e},
NX:function NX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ou:function ou(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
brb:function brb(){},
brc:function brc(){},
br3:function br3(){},
br4:function br4(){},
br5:function br5(){},
br6:function br6(){},
br7:function br7(){},
br8:function br8(){},
br9:function br9(){},
bra:function bra(){},
br2:function br2(){},
br1:function br1(){},
Kw:function Kw(d,e){this.c=d
this.a=e},
ahe:function ahe(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cOd:function cOd(){},
cOc:function cOc(d,e){this.a=d
this.b=e},
cOa:function cOa(d){this.a=d},
cOb:function cOb(d,e){this.a=d
this.b=e},
cOe:function cOe(d){this.a=d},
cOj:function cOj(d){this.a=d},
cOi:function cOi(d){this.a=d},
cOk:function cOk(d,e){this.a=d
this.b=e},
cOh:function cOh(d,e,f){this.a=d
this.b=e
this.c=f},
cOg:function cOg(d,e){this.a=d
this.b=e},
cOf:function cOf(d,e){this.a=d
this.b=e},
cOl:function cOl(d){this.a=d},
Xt:function Xt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLH:function aLH(d,e){this.c=d
this.a=e},
Kv:function Kv(d,e){this.c=d
this.a=e},
aMT:function aMT(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cO7:function cO7(d){this.a=d},
cO8:function cO8(d){this.a=d},
cO9:function cO9(d){this.a=d},
cO6:function cO6(d,e){this.a=d
this.b=e},
cO3:function cO3(d){this.a=d},
cO4:function cO4(d){this.a=d},
cO2:function cO2(d,e){this.a=d
this.b=e},
cO5:function cO5(d){this.a=d},
cO1:function cO1(d){this.a=d},
aTS:function aTS(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aTT:function aTT(d,e,f){this.c=d
this.d=e
this.a=f},
aMZ:function aMZ(d,e){this.c=d
this.a=e},
aTR:function aTR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d){this.a=d},
aOi:function aOi(d){this.a=d},
aHU:function aHU(d,e){this.c=d
this.a=e},
e28(d){var w,v,u,t,s,r,q=null,p=B.b.i(d)
if(p.length===0)return q
w=B.b.X(p,"http")?p:"https://"+p
v=w.toLowerCase()
u=C.e27(v)
if(u!=null)return new C.qE(w,C.dsB(u,!1),D.afl,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.e26(v)
if(t!=null)return new C.qE(w,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.afm,"TikTok",q)
s=C.e25(w,v)
if(s!=null)return s
r=C.e24(w,v)
if(r!=null)return r
if(B.b.t(v,"tiktok.com")||B.b.t(v,"instagram.com")||B.b.t(v,"facebook.com")||B.b.t(v,"fb.watch")||B.b.t(v,"youtube.com")||B.b.t(v,"youtu.be"))return new C.qE(w,w,D.cwf,"Video",q)
return q},
e25(d,e){var w,v,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ao("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(s!=null){w=s.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/reel/"+w+u,D.OU,t,null)}v=A.ao("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1,!1).dj(e)
if(v!=null){w=v.b[1]
w.toString
return new C.qE(d,"https://www.instagram.com/p/"+w+u,D.OU,t,null)}return null},
e24(d,e){if(!B.b.t(e,"facebook.com")&&!B.b.t(e,"fb.watch")&&!B.b.t(e,"fb.com"))return null
return new C.qE(d,"https://www.facebook.com/plugins/video.php?href="+A.fa(2,d,B.bf,!1)+"&show_text=false&width=734",D.afn,"Facebook",null)},
e27(d){var w,v,u,t=[A.ao(y.c,!0,!1,!1,!1),A.ao("youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1),A.ao("m\\.youtube\\.com/watch.*?[?&]v=([a-zA-Z0-9_-]{11})",!0,!1,!1,!1)]
for(w=0;w<3;++w){v=t[w].dj(d)
u=v==null?null:v.b[1]
if(u!=null&&u.length===11)return u}return null},
e26(d){var w,v=A.ao("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1,!1).dj(d)
if(v!=null)return v.b[1]
w=A.ao("tiktok\\.com/t/(\\w+)",!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
Kz:function Kz(d,e){this.a=d
this.b=e},
qE:function qE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7k:function a7k(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aMU:function aMU(d,e){var _=this
_.d=$
_.cP$=d
_.aP$=e
_.c=_.a=null},
aOn:function aOn(d,e){this.c=d
this.a=e},
cT0:function cT0(d){this.a=d},
cT1:function cT1(d){this.a=d},
FQ:function FQ(d,e){this.c=d
this.a=e},
ame:function ame(){},
dEZ(d,e,f,g,h,i){return new C.a7l(i,f,h,e,g,d)},
elB(d){var w=window
w.toString
A.hd(w,"message",new C.dkJ(d),!1,x._)},
a7l:function a7l(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.x=h
_.a=i},
ahf:function ahf(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cOm:function cOm(d){this.a=d},
cOv:function cOv(d){this.a=d},
cOs:function cOs(d){this.a=d},
cOr:function cOr(d){this.a=d},
cOt:function cOt(d){this.a=d},
cOq:function cOq(d){this.a=d},
cOu:function cOu(d){this.a=d},
cOp:function cOp(d){this.a=d},
cOo:function cOo(d){this.a=d},
cOn:function cOn(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
e20(){var w,v,u
try{v=A.xE()
w=v.guU(v)
if(J.a4(w)!==0&&!J.w(w,"null")&&!J.cK(w,"file:"))return w}catch(u){}return"https://ngmy.org"},
dsB(d,e){var w=A.a([],x.s)
w.push("autoplay=1")
w.push("playsinline=1")
w.push("rel=0")
w.push("modestbranding=1")
w.push("iv_load_policy=3")
if(e)w.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+B.h.bi(w,"&")},
br_(d){var w=A.ao(y.c,!0,!1,!1,!1).dj(d)
return w==null?null:w.b[1]},
dEU(d){var w=A.b7(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.b7(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
e21(d,e,f){var w,v,u=C.br_(d)
if(u!=null){if(f){w=C.e20()
v=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+u+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+w+"',\n          mute: "+v+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return C.dEU(C.dsB(u,e))}return C.dEU(d)},
e22(d){if(d<=4)return 0
return B.l.aG(d-1,4)*4},
e23(d){var w
if($.PN().a==null)return!1
w=$.GV().a
return d>=w&&d<w+4},
dEX(){var w=$.ayJ
if(w!=null)w.ac(0)
$.ayJ=null
$.GV().sv(0,0)},
dEW(){var w,v,u,t=$.PN()
if(t.a==null)return
w=$.ayJ
if(w!=null)w.ac(0)
v=$.dEV
if(v<=4){t=t.a
t.toString
C.dsC(t)
return}w=$.GV()
u=w.a+4
w.sv(0,u>=v?0:u)
t=t.a
t.toString
C.dsC(t)},
dsC(d){var w=$.ayJ
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
default:w=null}$.ayJ=A.dG(A.dv(0,0,0,0,0,w),C.elQ())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.NX.prototype={
B(d){var w=null,v=this.e,u=v?B.aN:B.e,t=A.m(20),s=A.L(B.a8.l(0.25),B.u,1),r=A.W(this.d,B.a8,w,w,14)
return A.t(w,A.G(A.a([r,B.fI,A.d(this.c,w,w,w,w,w,w,A.l(w,w,v?B.ab:B.cj,w,w,w,w,w,w,w,w,11,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.n,w,B.i,B.a0,0,w,w),B.k,w,w,new A.p(u,w,s,t,w,w,B.p),w,w,w,w,B.fU,w,w,w)}}
C.ou.prototype={
a9(){var w=this
return A.u(["id",w.a,"label",w.b,"serialNumber",w.c,"modelName",w.d,"deviceId",w.e,"macAddress",w.f,"imei",w.r,"osName",w.w,"osVersion",w.x,"virtualCity",w.y,"virtualCountry",w.z,"virtualLat",w.Q,"virtualLng",w.as,"timezone",w.at,"createdAt",w.ax],x.N,x.z)}}
C.Kw.prototype={
V(){return new C.ahe(A.a([],x.e))},
gdI(){return this.c}}
C.ahe.prototype={
a_(){var w=this
w.a4()
$.GV().aq(0,w.gayl())
C.elB(w.gbpf())
w.Zz()},
boF(){if(this.c!=null)this.p(new C.cOd())},
bpg(){C.dEW()},
q(){$.GV().Z(0,this.gayl())
C.dEX()
$.PN().sv(0,null)
this.a5()},
Zz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ky(t.a.c),$async$Zz)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cOc(t,s))
$.br0=J.a4(s)
case 1:return A.h(u,v)}})
return A.i($async$Zz,v)},
Vv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.p(new C.cOa(t))
w=3
return A.b(C.ayK(t.a.c),$async$Vv)
case 3:s=e
if(t.c==null){w=1
break}t.p(new C.cOb(t,s))
$.br0=J.a4(t.d)
t.c.F(x.q).f.S(A.bl(null,null,null,null,null,B.t,null,A.d("Added "+s.b+" \xb7 "+s.c,null,null,null,null,null,null,null,null,null,null),null,B.Q,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Vv,v)},
brg(d){var w=this.c
w.toString
A.a3(w,!1).cz(A.eG(new C.cOe(d),!1,null,x.H))},
brU(){var w=this.c
w.toString
return C.a_h(w,J.a4(this.d))},
B(d){var w=this,v=null,u=A.D(d).ax.a===B.D,t=u?B.fj:B.bx,s=A.c1(!0,A.v(A.a([new A.I(D.XO,new A.iU(new C.cOj(w),v),v),A.H(w.e?B.nn:new A.lo($.PN(),new C.cOk(w,u),v,v,x.j),1)],x.p),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0)
return A.ca(v,t,s,v,!1,!1,A.asq(B.a8,B.HF,B.mF,D.dcf,w.e?v:new C.cOl(w)),v)}}
C.Xt.prototype={
B(d){var w,v=this,u=null,t=A.m(14),s=A.m(14),r=A.L(B.e.l(0.1),B.u,1),q=A.a([new A.a9(0,B.H,B.a8.l(0.18),B.dK,8)],x.V),p=A.m(10),o=v.c,n=v.r
if(n!=null){w=v.d
w=new C.a7k(n,!0,!C.e23(w),"Fold "+(B.l.aG(w,4)+1)+"/"+B.l.aG(v.e+4-1,4),u)
n=w}else n=A.t(u,A.v(A.a([A.W(B.jV,B.nw,u,u,22),B.aK,A.d("YouTube",u,u,u,u,u,u,A.l(u,u,B.e.l(0.7),u,u,u,u,u,u,u,u,7,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p),B.n,B.aX,B.j,0,B.q),B.k,B.zv,u,u,u,u,u,u,u,u,u,1/0)
w=x.p
return A.aH(!1,B.U,!0,u,A.aN(!1,t,!0,A.v(A.a([A.H(A.t(u,A.bX(p,A.fj(A.v(A.a([new C.aLH(o,u),A.H(n,1),A.t(u,A.G(A.a([A.W(B.C8,B.a8.l(0.85),u,u,9),D.cKR,A.d("Tap",u,u,u,u,u,u,A.l(u,u,B.e.l(0.5),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],w),B.n,u,B.aX,B.j,0,u,u),B.k,B.ay,u,u,u,u,u,u,D.aFz,u,u,u)],w),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,u,u,new A.p(u,u,r,s,q,D.a12,B.p),u,u,u,u,B.hi,u,u,u),1),B.aK,A.d(o.b,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3,u,u,u,u,u,u,u,u,9,u,u,B.J,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.y,u,1,B.ap,u,u,u,A.l(u,u,A.D(d).ax.k3.l(0.55),u,u,u,u,u,u,u,u,8,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.d(o.c,u,1,B.ap,u,u,u,A.l(u,u,B.a8.l(0.85),u,u,u,u,u,u,u,u,7,u,u,u,u,u,!0,u,0.2,u,u,u,u,u,u),u,u,u)],w),B.n,B.i,B.j,0,B.q),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.f,u,u,u,u,u,u,u),B.k,B.L,0,u,u,u,u,u,B.a6)}}
C.aLH.prototype={
B(d){var w=null
return A.t(w,A.G(A.a([A.H(A.d(B.h.gak(this.c.c.split("-")),w,w,B.ap,w,w,w,A.l(w,w,B.e.l(0.45),w,w,w,w,w,w,w,w,5.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),A.W(B.tb,B.e.l(0.45),w,w,7)],x.p),B.n,w,B.i,B.j,0,w,w),B.k,B.ay,w,w,w,w,w,w,B.XC,w,w,w)}}
C.Kv.prototype={
V(){return new C.aMT()}}
C.aMT.prototype={
B(d){var w=null,v=A.D(d).ax.a===B.D,u=v?B.fj:B.bx,t=A.aS(w,w,w,w,B.a09,w,w,w,new C.cO7(d),w,w,w,w,w,w),s=this.a.c,r=x.p
return A.ca(w,u,A.c1(!0,A.v(A.a([new A.I(D.XO,A.G(A.a([t,A.H(new A.Kk(A.G(A.a([A.H(new A.I(B.jh,A.d(s.b+" \xb7 "+s.c,w,1,B.ap,w,w,w,A.l(w,w,v?B.e:B.W,w,w,w,w,w,w,w,w,14,w,w,B.C,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aH(!1,B.U,!0,w,A.aN(!1,w,!0,new A.I(B.b9,A.W(B.hl,B.a8,w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cO8(d),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],r),B.n,w,B.i,B.j,0,w,w),w,w,w),1)],r),B.n,w,B.i,B.j,0,w,w),w),A.H(new A.lo($.PN(),new C.cO9(this),w,w,x.j),1)],r),B.n,B.i,B.j,0,B.q),!1,B.af,!0,!0),w,!1,!1,w,w)}}
C.aTS.prototype={
B(d){var w,v,u,t=this,s=null,r=t.c,q=A.m(36),p=A.a([new A.a9(0,B.H,B.a8.l(0.35),B.eY,28),new A.a9(0,B.H,B.A.l(0.45),B.dj,18)],x.V),o=A.L(B.e.l(0.12),B.u,2),n=A.m(28),m=t.d,l=t.e
if(l)if(t.f===0){w=t.y
if(w!=null){v=m.a
u=w.b
v=C.dEZ(new A.db(v+"_full_"+u,x.W),!1,u,!1,w.gaO8(),v+"_full")
w=v}else w=new C.aMZ(t.r,s)}else w=new C.aHU(m,s)
else w=D.djo
return A.t(s,A.bX(n,A.fj(A.v(A.a([new C.aTT(m,l,s),A.H(w,1),new C.aTR(t.f,l,t.w,t.x,s)],x.p),B.n,B.i,B.j,0,B.q),B.A,!0),B.aB),B.k,s,s,new A.p(s,s,o,q,p,D.a12,B.p),s,r*2.05,s,s,B.bI,s,s,r)}}
C.aTT.prototype={
B(d){var w,v,u,t,s=null,r=new A.S(Date.now(),0,!1),q=A.dr(r)
r=A.hb(r)
w=new A.dF(q,r)
v=w.gK_()===0?12:w.gK_()
r=B.b.bc(B.l.n(r),2,"0")
q=(q<12?B.hd:B.jf)===B.hd?"AM":"PM"
u=this.c
t=x.p
q=A.a([A.G(A.a([A.d(""+v+":"+r+" "+q,s,s,s,s,s,s,B.lU,s,s,s),B.aY,A.d(u.b,s,s,s,s,s,s,A.l(s,s,B.e.l(0.5),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.bA,D.aQY,B.f_,D.aQ8,B.f_,D.aR2],t),B.n,s,B.i,B.j,0,s,s)],t)
if(this.d)B.h.A(q,A.a([B.aK,A.G(A.a([A.W(B.C0,B.a8.l(0.9),s,s,12),B.f_,A.H(A.d(u.c,s,s,B.ap,s,s,s,A.l(s,s,B.e.l(0.55),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,0.4,s,s,s,s,s,s),s,s,s),1),A.d(u.y,s,s,s,s,s,s,A.l(s,s,B.e.l(0.45),s,s,s,s,s,s,s,s,9,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.n,s,B.i,B.j,0,s,s)],t))
return A.t(s,A.v(q,B.n,B.i,B.j,0,B.q),B.k,B.ay,s,s,s,s,s,s,D.aGw,s,s,s)}}
C.aMZ.prototype={
B(d){var w=null
return A.t(w,A.aG(A.v(A.a([A.W(B.Bp,B.e.l(0.35),w,w,40),B.X,A.d("No video yet",w,w,w,w,w,w,A.l(w,w,B.e.l(0.6),w,w,w,w,w,w,w,w,12,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aK,A.d("Tap search above to paste a link",w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,10,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI,A.eM(D.aUv,D.d_O,this.c,A.ea(w,w,w,w,w,w,w,w,w,B.a8,w,w,w,w,w,new A.aJ(B.a8.l(0.5),1,B.u,-1),w,w,w,w))],x.p),B.n,B.i,B.a0,0,B.q),w,w,w),B.k,B.zv,w,w,w,w,w,w,w,w,w,1/0)}}
C.aTR.prototype={
B(d){var w,v,u=this,t=null,s=u.c,r=u.d,q=u.ayc(B.BW,"YouTube",s===0,r,new C.d2M(u))
s=u.ayc(B.kB,"Device",s===1,r,new C.d2N(u))
w=r?"Power off":"Power on"
v=r?D.a_o:D.aO7
return A.t(t,A.G(A.a([q,B.an,s,B.aY,A.aS(t,t,t,t,A.W(v,r?B.bT:B.fX,t,t,t),t,t,t,u.f,t,t,t,t,w,B.dz)],x.p),B.n,t,B.i,B.j,0,t,t),B.k,B.ay,t,t,t,t,t,t,D.aGb,t,t,t)},
ayc(d,e,f,g,h){var w,v,u,t,s=null
if(!g)w=B.bq
else w=f?B.a8:B.av
v=f&&g?B.a8.l(0.15):B.L
u=A.m(10)
t=g?h:s
return A.H(A.aH(!1,B.U,!0,u,A.aN(!1,A.m(10),!0,new A.I(B.nJ,A.v(A.a([A.W(d,w,s,s,18),A.d(e,s,s,s,s,s,s,A.l(s,s,w,s,s,s,s,s,s,s,s,9,s,s,B.N,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.n,B.i,B.a0,0,B.q),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t,s,s,s,s,s,s,s),B.k,v,0,s,s,s,s,s,B.a6),1)}}
C.aOi.prototype={
B(d){return D.av5}}
C.aHU.prototype={
B(d){var w=this,v=null,u=w.c,t=A.d(u.b,v,v,v,v,v,v,B.k9,v,v,v),s=A.d("Independent virtual hardware \u2014 not linked to your iPhone or real device.",v,v,v,v,v,v,A.l(v,v,B.e.l(0.55),v,v,v,v,v,v,v,v,10,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),r=w.tQ("Serial",u.c),q=w.tQ("Model",u.d),p=w.tQ("Device ID",u.e),o=w.tQ("IMEI",u.r),n=w.tQ("MAC",u.f),m=w.tQ("OS",u.w+" "+u.x),l=w.tQ("Location",u.y+", "+u.z),k=w.tQ("Coordinates",B.m.a6(u.Q,4)+", "+B.m.a6(u.as,4)),j=w.tQ("Timezone",u.at)
u=u.ax
return A.e8(A.a([t,B.aK,s,B.ac,r,q,p,o,n,m,l,k,j,w.tQ("Provisioned",u.length>=10?B.b.aj(u,0,10):u)],x.p),v,B.b9,v,v,B.al,!1)},
tQ(d,e){var w=null
return new A.I(B.d4,A.v(A.a([A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,B.e.l(0.4),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),B.cu,A.d(e,w,w,w,w,w,w,D.cSm,w,w,w)],x.p),B.G,B.i,B.j,0,B.q),w)}}
C.Kz.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.qE.prototype={
gaO8(){var w=this.c
return w===D.afl||w===D.afm||w===D.OU||w===D.afn}}
C.a7k.prototype={
V(){return new C.aMU(null,null)}}
C.aMU.prototype={
a_(){this.a4()
var w=A.bu(null,B.vF,null,1,null,this)
w.ix(0,!0)
this.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.aYd()},
B(d){var w,v,u=this,t=null,s=u.a.c,r=A.cF(t,new A.p(t,t,t,t,t,new A.ad(B.cf,B.c3,B.F,A.a([B.L,B.A.l(0.55)],x.O),t,t),B.p),B.bt),q=x.Y,p=u.d
p===$&&A.c()
p=A.co(B.dC,p,t)
w=B.e.l(0.92)
q=A.aG(new A.cW(new A.b2(p,new A.bm(0.72,1,q),q.j("b2<bk.T>")),!1,A.W(B.jV,w,t,t,20),t),t,t,t)
p=u.a.e?B.e.l(0.22):B.nw
w=A.m(4)
v=u.a.e?"WAIT":"LIVE"
s=A.a([new C.aOn(s,t),r,q,A.aB(t,A.t(t,A.d(v,t,t,t,t,t,t,A.l(t,t,B.e,t,t,t,t,t,t,t,t,5,t,t,B.C,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),B.k,t,t,new A.p(p,t,t,w,t,t,B.p),t,t,t,t,new A.U(3,1,3,1),t,t,t),t,t,t,2,2,t)],x.p)
r=u.a
r=r.f
q=B.e.l(0.75)
s.push(A.aB(t,A.d(r,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,5,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,3,t))
r=u.a.c
q=B.e.l(0.85)
s.push(A.aB(3,A.d(r.d,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,6,t,t,B.J,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,3,t,t,t))
return new A.aC(B.ag,t,B.b5,B.t,s,t)}}
C.aOn.prototype={
B(d){var w=null,v=this.c,u=v.e
if(u!=null&&u.length!==0)return A.kC(u,B.M,new C.cT0(this),B.ce,B.bO,!0,w,w,new C.cT1(this),w)
return new C.FQ(v,w)}}
C.FQ.prototype={
B(d){var w,v,u=null
switch(this.c.c.a){case 0:w=new A.aQ(A.a([B.mk,B.TN],x.O),B.jV)
break
case 1:w=new A.aQ(A.a([B.zv,D.aA4],x.O),B.lx)
break
case 2:w=new A.aQ(A.a([D.aBL,D.azu],x.O),B.Bx)
break
case 3:w=new A.aQ(A.a([B.W,B.dA],x.O),B.BF)
break
case 4:w=new A.aQ(A.a([B.ay,B.aN],x.O),B.o0)
break
default:w=u}v=w.a
return A.t(u,A.aG(A.W(w.b,B.a8.l(0.55),u,u,28),u,u,u),B.k,u,u,new A.p(u,u,u,u,u,new A.ad(B.aE,B.aJ,B.F,v,u,u),B.p),u,u,u,u,u,u,u,u)}}
C.ame.prototype={
q(){var w=this,v=w.aP$
if(v!=null)v.Z(0,w.gdm())
w.aP$=null
w.a5()},
bo(){this.bD()
this.bA()
this.dn()}}
C.a7l.prototype={
V(){return new C.ahf()}}
C.ahf.prototype={
a8t(d,e){var w,v=C.br_(e),u=this.a,t=u.x&&!this.w
if(v!=null&&u.f){d.removeAttribute("srcdoc")
d.src=C.dsB(v,t)
return}if(u.f){w=e.toLowerCase()
u=B.b.t(w,"tiktok.com/player")||B.b.t(w,"instagram.com")||B.b.t(w,"facebook.com/plugins")}else u=!1
if(u){d.removeAttribute("src")
d.srcdoc=C.e21(e,t,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bHq(){var w,v=this
if(v.w)return
v.p(new C.cOm(v))
w=v.e
if(w!=null)v.a8t(w,v.a.d)},
a_(){var w,v,u=this
u.a4()
w="ngmy-vmedia-"+u.a.c+"-"+1000*Date.now()
u.d!==$&&A.aM()
u.d=w
try{$.yE()
$.o3().qy(w,new C.cOv(u),!0)}catch(v){u.r=!0
u.f=!1}},
b0(d){var w,v=this
v.be(d)
if(d.d!==v.a.d&&v.e!=null){v.p(new C.cOo(v))
w=v.e
w.toString
v.a8t(w,v.a.d)}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){o.a.toString
w=B.e.l(0.55)
o.a.toString
v=x.p
w=A.a([A.W(B.a_C,w,n,n,36)],v)
o.a.toString
B.h.A(w,A.a([B.O,A.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,A.l(n,n,B.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),B.T,n,n)],v))
return A.fj(A.aG(new A.I(new A.U(12,12,12,12),A.v(w,B.n,B.i,B.a0,0,B.q),n),n,n,n),B.A,!0)}o.a.toString
w=o.d
w===$&&A.c()
v=x.p
w=A.a([A.Iq(n,B.od,w)],v)
if(o.f)w.push(A.fj(A.aG(new A.aa(28,28,D.awc,n),n,n,n),B.cX,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){u=B.A.l(0.35)
t=B.A.l(0.72)
s=A.m(14)
r=A.L(B.bq,B.u,1)
q=A.W(B.LY,B.e.l(0.9),n,n,22)
p=B.e.l(0.92)
o.a.toString
w.push(A.er(0,A.aH(!1,B.U,!0,n,A.aN(!1,n,!0,A.aG(A.t(n,A.G(A.a([q,B.an,A.d("Tap to play music",n,n,n,n,n,n,A.l(n,n,p,n,n,n,n,n,n,n,n,14,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.n,n,B.i,B.a0,0,n,n),B.k,n,n,new A.p(t,n,r,s,n,n,B.p),n,n,n,n,B.AK,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbHp(),n,n,n,n,n,n,n),B.k,u,0,n,n,n,n,n,B.a6)))}v=C.br_(o.a.d)
if(v!=null)w.push(A.aB(8,A.j9(D.aSs,D.d7l,new C.cOn(o),A.iX(n,n,B.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.fU,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new A.aC(B.ag,n,B.b5,B.t,w,n)}}
var z=a.updateTypes(["o(ou)","~()","Kw(O)","ou(Z<@,@>)","a0(ou)","Z<o,@>(ou)","aD<~>()","Kv(O)","lo<K>(O,qE?,q?)","Xt(O,K)","uh(O,qE?,q?)","FQ(O,ap,dM?)"])
C.doy.prototype={
$1(d){return new C.Kw(this.a,null)},
$S:z+2}
C.dox.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=A.D(d).ax.a===B.D,l=A.aF(d,n,x.w).w,k=A.m(28),j=x.O,i=m?A.a([B.e5,B.W],j):A.a([B.e,B.ax],j),h=A.a([new A.a9(0,B.H,B.a8.l(0.22),B.eY,32)],x.V),g=A.L(m?B.ca:B.a8.l(0.18),B.u,1),f=A.m(28),e=B.a8.l(m?0.35:0.14)
j=A.a([e,B.aw.l(m?0.18:0.08)],j)
e=A.t(n,D.aPR,B.k,n,n,new A.p(B.a8.l(0.18),n,A.L(B.a8.l(0.45),B.u,1),n,n,n,B.ao),n,48,n,n,n,n,n,48)
w=A.d("Paste video link",n,n,n,n,n,n,A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,18,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=x.p
w=A.H(A.v(A.a([w,B.aK,A.d("Master player + "+this.a+" phone previews \xb7 rotates in batches of 4",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.am,n,n,n,n,n,n,n,n,12,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n)],v),B.G,B.i,B.j,0,B.q),1)
j=A.t(n,A.G(A.a([e,B.f6,w,A.aS(n,n,n,n,A.W(B.d5,m?B.av:B.cX,n,n,n),n,n,n,new C.dot(d),n,n,n,n,n,n)],v),B.n,n,B.i,B.j,0,n,n),B.k,n,n,new A.p(n,n,n,n,n,new A.ad(B.a5,B.a7,B.F,j,n,n),B.p),n,n,n,n,B.JZ,n,n,n)
e=A.ex(B.cQ,A.a([new C.NX("YouTube",B.LV,m,n),new C.NX("TikTok",B.lx,m,n),new C.NX("Instagram",B.Bx,m,n),new C.NX("Facebook",B.BF,m,n)],v),B.cE,8,8)
w=this.b
u=A.l(n,n,m?B.e:B.W,n,n,n,n,n,n,n,n,14,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
t=A.l(n,n,m?B.cg:B.iI,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.aN:B.bx
r=A.W(B.fm,B.a8.l(0.85),n,n,n)
q=A.m(16)
p=A.m(16)
o=m?B.ca:B.aL
u=A.v(A.a([e,B.aO,A.aO(n,B.R,!0,n,!0,B.t,n,A.aP(),w,n,n,n,n,n,2,A.bo(n,new A.bb(4,q,B.Y),n,n,n,n,n,n,!0,new A.bb(4,p,new A.aJ(o,1,B.u,-1)),n,n,n,n,n,s,!0,n,n,n,n,new A.bb(4,A.m(16),B.Sw),n,n,n,n,n,n,n,n,t,"https://youtube.com/watch?v=\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,r,n,n,n,n,n,n,n,n,n,n,n,n),B.E,!0,n,!0,n,!1,n,B.aa,n,n,n,n,n,n,n,n,n,3,2,n,!1,"\u2022",n,n,n,n,n,!1,n,n,!1,n,!0,n,B.Z,n,n,n,n,n,n,n,n,n,n,n,u,!0,B.a_,n,B.ad,n,n,n,n)],v),B.at,B.i,B.j,0,B.q)
e=A.j9(D.aPU,D.dbj,new C.dou(d),A.iX(n,n,n,n,n,n,n,n,n,n,n,m?B.bs:B.am,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
return new A.I(new A.U(12,0,12,12+l.f.d),A.cF(A.bX(f,A.v(A.a([j,new A.I(B.Xo,u,n),new A.I(D.aHS,A.G(A.a([e,B.aY,A.c2(!1,A.d("Cancel",n,n,n,n,n,n,A.l(n,n,m?B.ab:B.aC,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,n,!0,n,n,new C.dov(d),n,n),B.an,A.dK(D.aUd,D.dc8,new C.dow(d,w),A.bx(B.a8,n,n,n,B.e,n,B.AK,n,new A.bD(A.m(14),B.Y),n,n,n))],v),B.n,n,B.i,B.j,0,n,n),n)],v),B.at,B.i,B.a0,0,B.q),B.aB),new A.p(n,n,g,k,h,new A.ad(B.aE,B.aJ,B.F,i,n,n),B.p),B.bt),n)},
$S:90}
C.dot.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dou.prototype={
$0(){C.dEX()
$.PN().sv(0,null)
A.a3(this.a,!1).O(null)},
$S:0}
C.dov.prototype={
$0(){A.a3(this.a,!1).O(null)
return null},
$S:0}
C.dow.prototype={
$0(){var w=B.b.i(this.b.a.a)
A.a3(this.a,!1).O(w)
return null},
$S:0}
C.brb.prototype={
$1(d){return C.dEY(A.T(d,x.N,x.z))},
$S:z+3}
C.brc.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.br3.prototype={
$1(d){return d.c},
$S:z+0}
C.br4.prototype={
$1(d){return d.r},
$S:z+0}
C.br5.prototype={
$1(d){return d.f},
$S:z+0}
C.br6.prototype={
$1(d){return d.at},
$S:z+0}
C.br7.prototype={
$1(d){return d.c},
$S:z+0}
C.br8.prototype={
$1(d){return d.r},
$S:z+0}
C.br9.prototype={
$1(d){return d.f},
$S:z+0}
C.bra.prototype={
$1(d){return d.at},
$S:z+0}
C.br2.prototype={
$1(d){return d.a9()},
$S:z+5}
C.br1.prototype={
$1(d){return B.b.bc(B.l.fZ(d,16),2,"0").toUpperCase()},
$S:86}
C.cOd.prototype={
$0(){},
$S:0}
C.cOc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cOa.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cOb.prototype={
$0(){var w=this.a,v=A.z(w.d,x.k)
v.push(this.b)
w.d=v
w.e=!1},
$S:0}
C.cOe.prototype={
$1(d){return new C.Kv(this.a,null)},
$S:z+7}
C.cOj.prototype={
$4(d,e,f,g){var w=null,v=A.aS(w,w,w,w,D.aTq,w,w,w,new C.cOi(d),w,w,w,w,w,w),u=this.a,t=u.e?"Virtual Devices":"Virtual Devices ("+J.a4(u.d)+")",s=x.p
return A.G(A.a([v,A.H(A.fG(A.G(A.a([new A.os(D.x2,e,g,36,B.C0,w),B.aR,A.H(A.d(t,w,1,B.ap,w,w,w,A.l(w,w,B.e,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,0.2,w,w,w,A.a([new A.fO(B.h.gU(D.x2).l(0.45+e*0.2),B.K,10)],x.S),w,w),w,w,w),1),A.aH(!1,B.U,!0,w,A.aN(!1,w,!0,new A.I(B.bI,A.W(B.hl,A.at(B.h.gU(D.x2),B.h.gak(D.x2),e),w,w,28),w),B.ct,!0,w,w,w,w,w,w,w,w,w,w,w,u.gbrT(),w,w,w,w,w,w,w),B.k,B.L,0,w,w,w,w,w,B.a6)],s),B.n,w,B.i,B.j,0,w,w),D.x2,w,g,B.fD,0,e,f),1)],s),B.n,w,B.i,B.j,0,w,w)},
$C:"$4",
$R:4,
$S:328}
C.cOi.prototype={
$0(){return A.a3(this.a,!1).eE()},
$S:0}
C.cOk.prototype={
$3(d,e,f){return new A.lo($.GV(),new C.cOh(this.a,e,this.b),null,null,x.J)},
$S:z+8}
C.cOh.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j!=null
if(i){w=A.DH(d,k,x.Q)
w=w==null?k:w.glA()
v=w!==!1}else v=!1
w=x.p
u=A.a([],w)
if(i){t=B.a8.l(0.12)
s=A.m(12)
r=A.L(B.a8.l(0.35),B.u,1)
q=A.W(B.jV,B.a8,k,k,18)
p=j.d
o=J.a4(l.a.d)
n=$.GV().a
m=B.m.W(n+4,1,o)
t=A.a([A.t(k,A.G(A.a([q,B.an,A.H(A.d("Now playing "+p+" \xb7 "+("Devices "+A.r(n+1)+"\u2013"+m+" of "+o),k,k,k,k,k,k,A.l(k,k,l.c?B.e:B.W,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],w),B.n,k,B.i,B.j,0,k,k),B.k,k,k,new A.p(t,k,r,s,k,k,B.p),k,k,k,B.dw,B.hg,k,k,1/0)],w)
if(v){s=A.m(16)
r=j.b
B.h.A(t,A.a([A.bX(s,new A.j2(1.7777777777777777,C.dEZ(new A.db("fleet_master_"+r,x.W),!0,r,!0,j.gaO8(),"fleet_master"),k),B.aB),B.ac],w))}B.h.A(u,t)}i=i?"Master player above plays your video (tap for sound). Grid badges show which batch is active \u2014 previews only, not separate players.":""+J.a4(l.a.d)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
u.push(A.d(i,k,k,k,k,k,k,A.l(k,k,A.D(d).ax.k3.l(0.65),k,k,k,k,k,k,k,k,13,k,k,k,k,1.4,!0,k,k,k,k,k,k,k,k),k,k,k))
i=l.a
return A.wa(0,B.t,k,B.E,k,k,k,k,!1,k,B.al,!1,A.a([new A.kN(new A.I(B.JP,A.v(u,B.G,B.i,B.j,0,B.q),k),k),new A.oF(D.aFL,A.aCN(new A.nP(new C.cOg(i,j),J.a4(i.d),!1,!0,!0,A.tI(),k),D.cLE),k)],w))},
$S:1749}
C.cOg.prototype={
$2(d,e){var w=this.a,v=J.n(w.d,e)
return new C.Xt(v,e,J.a4(w.d),new C.cOf(w,v),this.b,null)},
$S:z+9}
C.cOf.prototype={
$0(){return this.a.brg(this.b)},
$S:0}
C.cOl.prototype={
$0(){this.a.Vv()
return null},
$S:0}
C.cO7.prototype={
$0(){return A.a3(this.a,!1).eE()},
$S:0}
C.cO8.prototype={
$0(){C.a_h(this.a,$.br0)
return null},
$S:0}
C.cO9.prototype={
$3(d,e,f){return A.eW(new C.cO6(this.a,e))},
$S:z+10}
C.cO6.prototype={
$2(d,e){var w,v=null,u=B.m.W(e.b,280,420),t=this.b,s=this.a,r=s.a
if(t!=null){w=t.d
r=r.c
r="Playing "+w+" on this device \xb7 "+(r.y+", "+r.z)}else{r=r.c
r=r.y+", "+r.z+" \xb7 "+r.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.aG(A.cw(A.v(A.a([A.d(r,v,v,v,v,v,v,A.l(v,v,A.D(d).ax.k3.l(0.65),v,v,v,v,v,v,v,v,12,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.T,v,v),B.aO,new C.aTS(u,s.a.c,s.e,s.d,new C.cO3(s),new C.cO4(s),new C.cO5(s),t,v)],x.p),B.n,B.i,B.j,0,B.q),B.t,v,B.E,v,B.pt,v,v,B.al),v,v,v)},
$S:1750}
C.cO3.prototype={
$0(){var w=this.a.c
w.toString
C.a_h(w,$.br0)
return null},
$S:0}
C.cO4.prototype={
$1(d){var w=this.a
return w.p(new C.cO2(w,d))},
$S:34}
C.cO2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cO5.prototype={
$0(){var w=this.a
return w.p(new C.cO1(w))},
$S:0}
C.cO1.prototype={
$0(){var w=this.a
return w.e=!w.e},
$S:0}
C.d2M.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.d2N.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cT0.prototype={
$3(d,e,f){return new C.FQ(this.a.c,null)},
$S:z+11}
C.cT1.prototype={
$3(d,e,f){if(f==null)return e
return new A.aC(B.ag,null,B.b5,B.t,A.a([new C.FQ(this.a.c,null),D.avm],x.p),null)},
$C:"$3",
$R:3,
$S:209}
C.cOm.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cOv.prototype={
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
w.a8t(v,w.a.d)
v=w.e
v.toString
u=x.E.c
A.hd(v,"load",new C.cOs(w),!1,u)
v=w.e
v.toString
A.hd(v,"error",new C.cOt(w),!1,u)
A.bM(B.kw,new C.cOu(w),x.H)
w=w.e
w.toString
return w},
$S:617}
C.cOs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cOr(w))},
$S:46}
C.cOr.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cOt.prototype={
$1(d){var w=this.a
if(w.c!=null)w.p(new C.cOq(w))},
$S:46}
C.cOq.prototype={
$0(){var w=this.a
w.f=!1
w.r=!0},
$S:0}
C.cOu.prototype={
$0(){var w=this.a
if(w.c!=null&&w.f)w.p(new C.cOp(w))},
$S:12}
C.cOp.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cOo.prototype={
$0(){var w=this.a
w.f=!0
w.w=w.r=!1},
$S:0}
C.cOn.prototype={
$0(){var w,v=C.br_(this.a.a.d)
if(v==null)return
w=window
w.toString
B.kZ.Td(w,"https://www.youtube.com/watch?v="+v,"_blank")},
$S:0}
C.dkJ.prototype={
$1(d){var w,v,u,t,s=new A.Fo([],[]).Jd(d.data,!0),r=s==null?null:J.k(s),q=r==null?"":r
if(J.w(q,"ngmy-vd-ended")){this.a.$0()
return}u=d.origin.toLowerCase()
if(!B.b.t(u,"youtube.com")&&!B.b.t(u,"youtube-nocookie.com"))return
try{w=B.I.az(0,q,null)
s=x.f
if(s.b(w)){v=J.n(w,"info")
if(J.w(J.n(w,"event"),"onStateChange")&&J.w(v,0)){this.a.$0()
return}if(J.w(J.n(w,"event"),"infoDelivery")&&s.b(v)&&J.w(J.n(v,"playerState"),0))this.a.$0()}}catch(t){}},
$S:1751};(function aliases(){var w=C.ame.prototype
w.aYd=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0
var u
w(u=C.ahe.prototype,"gayl","boF",1)
w(u,"gbpf","bpg",1)
w(u,"gbrT","brU",6)
w(C.ahf.prototype,"gbHp","bHq",1)
v(C,"elQ","dEW",1)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.yW,[C.doy,C.dox,C.brb,C.brc,C.br3,C.br4,C.br5,C.br6,C.br7,C.br8,C.br9,C.bra,C.br2,C.br1,C.cOe,C.cOj,C.cOk,C.cOh,C.cO9,C.cO4,C.cT0,C.cT1,C.cOv,C.cOs,C.cOt,C.dkJ])
v(A.a0H,[C.dot,C.dou,C.dov,C.dow,C.cOd,C.cOc,C.cOa,C.cOb,C.cOi,C.cOf,C.cOl,C.cO7,C.cO8,C.cO3,C.cO2,C.cO5,C.cO1,C.d2M,C.d2N,C.cOm,C.cOr,C.cOq,C.cOu,C.cOp,C.cOo,C.cOn])
v(A.av,[C.NX,C.Xt,C.aLH,C.aTS,C.aTT,C.aMZ,C.aTR,C.aOi,C.aHU,C.aOn,C.FQ])
v(A.ap,[C.ou,C.qE])
v(A.ae,[C.Kw,C.Kv,C.a7k,C.a7l])
v(A.af,[C.ahe,C.aMT,C.ame,C.ahf])
v(A.a0I,[C.cOg,C.cO6])
u(C.Kz,A.aIP)
u(C.aMU,C.ame)
w(C.ame,A.dY)})()
A.dIr(b.typeUniverse,JSON.parse('{"Kw":{"ae":[],"q":[]},"Xt":{"av":[],"q":[]},"Kv":{"ae":[],"q":[]},"NX":{"av":[],"q":[]},"ahe":{"af":["Kw"]},"aLH":{"av":[],"q":[]},"aMT":{"af":["Kv"]},"aTS":{"av":[],"q":[]},"aTT":{"av":[],"q":[]},"aMZ":{"av":[],"q":[]},"aTR":{"av":[],"q":[]},"aOi":{"av":[],"q":[]},"aHU":{"av":[],"q":[]},"a7k":{"ae":[],"q":[]},"FQ":{"av":[],"q":[]},"aMU":{"af":["a7k"]},"aOn":{"av":[],"q":[]},"a7l":{"ae":[],"q":[]},"ahf":{"af":["a7l"]}}'))
var y={c:"(?:youtube\\.com/embed/|youtube-nocookie\\.com/embed/|[?&]v=|youtu\\.be/|/shorts/|/live/)([a-zA-Z0-9_-]{11})"}
var x=(function rtii(){var w=A.b4
return{V:w("a6<a9>"),O:w("a6<x>"),e:w("a6<ou>"),S:w("a6<fO>"),s:w("a6<o>"),p:w("a6<q>"),t:w("a6<K>"),X:w("ag<ou>"),a:w("ag<@>"),P:w("Z<o,@>"),f:w("Z<@,@>"),w:w("oo"),_:w("DE"),k:w("ou"),N:w("o"),Y:w("bm<a2>"),W:w("db<o>"),J:w("lo<K>"),j:w("lo<qE?>"),E:w("xM<cQ>"),q:w("Yj"),z:w("@"),Q:w("ap?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a_o=new A.N(983224,"MaterialIcons",!1)
D.aSz=new A.ab(D.a_o,48,B.bq,null,null,null)
D.cZF=new A.B("Powered off",null,B.amx,null,null,null,null,null,null,null,null,null)
D.bOj=w([D.aSz,B.O,D.cZF],x.p)
D.aD5=new A.eu(B.al,B.i,B.a0,B.n,null,B.q,null,0,D.bOj,null)
D.av5=new A.dp(B.M,null,null,D.aD5,null)
D.cLh=new A.aa(18,18,B.Tt,null)
D.avm=new A.dp(B.M,null,null,D.cLh,null)
D.awc=new A.h_(2,null,null,null,null,B.ab,null,null,null,null)
D.azu=new A.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.y)
D.aA4=new A.x(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.y)
D.aBL=new A.x(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.y)
D.aFz=new A.U(0,3,0,3)
D.aFL=new A.U(10,0,10,88)
D.aGb=new A.U(12,6,12,10)
D.aGw=new A.U(14,8,14,6)
D.aHS=new A.U(20,8,20,20)
D.XO=new A.U(8,6,15,8)
D.aO7=new A.N(983222,"MaterialIcons",!1)
D.aPR=new A.ab(B.jV,26,B.a8,null,null,null)
D.aPU=new A.ab(B.Zy,18,null,null,null,null)
D.aQ8=new A.ab(B.tb,14,B.ab,null,null,null)
D.aOq=new A.N(983420,"MaterialIcons",!1)
D.aQY=new A.ab(D.aOq,14,B.ab,null,null,null)
D.aMu=new A.N(62895,"MaterialIcons",!1)
D.aR2=new A.ab(D.aMu,14,B.ab,null,null,null)
D.aSs=new A.ab(B.t5,16,B.ab,null,null,null)
D.aTq=new A.ab(B.dF,20,B.ab,null,null,null)
D.aUd=new A.ab(B.iU,20,null,null,null,null)
D.aUv=new A.ab(B.hl,16,null,null,null,null)
D.bS4=w([B.aN,B.W],x.O)
D.a12=new A.ad(B.aE,B.aJ,B.F,D.bS4,null,null)
D.cEQ=new A.aQ("NGMY OS","14.2.1")
D.cDz=new A.aQ("VirtualDroid","13.8.4")
D.cDy=new A.aQ("NGMY OS","15.0.0")
D.cEm=new A.aQ("VirtualDroid","14.1.2")
D.cDw=new A.aQ("NGMY Tab OS","12.9.7")
D.cDu=new A.aQ("NGMY OS","13.5.3")
D.cDj=new A.aQ("VirtualDroid","15.2.0")
D.cDW=new A.aQ("NGMY OS","14.8.1")
D.cEs=new A.aQ("NGMY Tab OS","13.2.4")
D.cF1=new A.aQ("VirtualDroid","12.6.9")
D.cDc=new A.aQ("NGMY OS","16.0.1")
D.cD1=new A.aQ("VirtualDroid","14.9.0")
D.cEH=new A.aQ("NGMY Tab OS","14.0.3")
D.cDI=new A.aQ("NGMY OS","13.1.8")
D.cDb=new A.aQ("VirtualDroid","13.4.5")
D.cDt=new A.aQ("NGMY OS","15.3.2")
D.cEt=new A.aQ("NGMY Tab OS","12.4.1")
D.cEK=new A.aQ("VirtualDroid","16.1.0")
D.cDV=new A.aQ("NGMY OS","14.4.6")
D.cER=new A.aQ("VirtualDroid","15.0.8")
D.bRh=w([D.cEQ,D.cDz,D.cDy,D.cEm,D.cDw,D.cDu,D.cDj,D.cDW,D.cEs,D.cF1,D.cDc,D.cD1,D.cEH,D.cDI,D.cDb,D.cDt,D.cEt,D.cEK,D.cDV,D.cER],A.b4("a6<+(o,o)>"))
D.x2=w([B.a8,B.fd],x.O)
D.cH7=new A.eR(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.cGG=new A.eR(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.cGB=new A.eR(["New York","United States",40.7128,-74.006,"America/New_York"])
D.cGK=new A.eR(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.cGx=new A.eR(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.cGM=new A.eR(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.cH9=new A.eR(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.cGy=new A.eR(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.cGF=new A.eR(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.cGO=new A.eR(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.cGw=new A.eR(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.cH1=new A.eR(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.cGZ=new A.eR(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.cGE=new A.eR(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.cGW=new A.eR(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.cGV=new A.eR(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.cGv=new A.eR(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.cGJ=new A.eR(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.cGT=new A.eR(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.cGY=new A.eR(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.a7M=w([D.cH7,D.cGG,D.cGB,D.cGK,D.cGx,D.cGM,D.cH9,D.cGy,D.cGF,D.cGO,D.cGw,D.cH1,D.cGZ,D.cGE,D.cGW,D.cGV,D.cGv,D.cGJ,D.cGT,D.cGY],A.b4("a6<+(o,o,a2,a2,o)>"))
D.c_A=w(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],x.s)
D.afl=new C.Kz(0,"youtube")
D.afm=new C.Kz(1,"tiktok")
D.OU=new C.Kz(2,"instagram")
D.afn=new C.Kz(3,"facebook")
D.cwf=new C.Kz(4,"other")
D.cKR=new A.aa(3,null,null,null)
D.cLE=new A.i2(4,10,8,0.52,null)
D.d_X=new A.B("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null,null)
D.cP1=new A.aW(D.d_X,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,!1,null,null,null,B.t,null)
D.cSm=new A.Q(!0,B.e,null,null,null,null,11,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.d_O=new A.B("Paste a link",null,null,null,null,null,null,null,null,null,null,null)
D.d7l=new A.B("Open in YouTube",null,B.j3,null,null,null,null,null,null,null,null,null)
D.dbj=new A.B("Stop",null,null,null,null,null,null,null,null,null,null,null)
D.dc8=new A.B("Play fleet",null,null,null,null,null,null,null,null,null,null,null)
D.dcf=new A.B("Add device",null,null,null,null,null,null,null,null,null,null,null)
D.djo=new C.aOi(null)})();(function staticFields(){$.dEV=20
$.ayJ=null
$.br0=20})();(function lazyInitializers(){var w=a.lazyFinal
w($,"eqM","GV",()=>A.abL(0))
w($,"eqN","PN",()=>A.abL(null))})()};
(a=>{a["NnGveJUa5d7rwJ9A6EXdFMlwe44="]=a.current})($__dart_deferred_initializers__);