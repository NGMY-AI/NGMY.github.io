((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCL(d,e){A.a9(d,!1).cM(A.eq(new C.cMI(e),!0,null,y.H))},
SB(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p,o
var $async$SB=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:p=$.JH()
o=p.a
o=o==null?null:o.a
if(o==null)o=""
u=$.am()
t=new A.af(new A.aM(o,B.a0,B.X),u)
x=3
return A.b(A.c2(null,null,!0,null,new C.cMH(e,t),d,null,!0,y.N),$async$SB)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dld(s)
if(r==null){d.E(y.q).f.O(D.bpf)
x=1
break}x=4
return A.b(A.bS(B.fk,null,y.H),$async$SB)
case 4:if(d.e==null){x=1
break}o=B.p.aR(e,1,999)
$.d_H=o
q=C.dl8(o)
o=$.xQ()
if(o.a>q)o.sv(0,0)
p.sv(0,r)
o.sv(0,0)
C.cQf(r)
d.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" \u2014 4 devices at a time across "+e+" phones",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SB,w)},
d_K(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
n=A.aV(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.aV(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.mh(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
Fe(d){return C.dlg(d)},
dlg(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fe=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Fe)
case 3:h=a4
g=B.a.j(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.v.aE(0,d,null)
x=y.a.b(s)&&J.cx(s)?10:11
break
case 10:l=J.ik(s,y.f)
l=A.eg(l,new C.b6h(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6i(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_L(r)
x=12
return A.b(C.Fd(a2,q),$async$Fe)
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
o=B.v.aE(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.d_K(A.K(o,y.N,y.z))
m=C.d_L(A.a([n],y.e))
x=21
return A.b(C.Fd(a2,m),$async$Fe)
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
case 18:case 14:r=C.dle()
x=22
return A.b(C.Fd(a2,r),$async$Fe)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fe,w)},
d_L(d){var x=A.S(d).k("z<1,m>"),w=new A.z(d,new C.b69(),x).eu(0),v=new A.z(d,new C.b6a(),x).eu(0),u=new A.z(d,new C.b6b(),x).eu(0),t=new A.z(d,new C.b6c(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQg(null,r,v,u,w,t));++r}return s},
amq(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amq=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(d),$async$amq)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b6d(),t).eu(0)
q=s.df(u,new C.b6e(),t).eu(0)
p=s.df(u,new C.b6f(),t).eu(0)
o=s.df(u,new C.b6g(),t).eu(0)
n=C.cQg(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fd(d,u),$async$amq)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amq,w)},
Fd(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fd=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$Fd)
case 2:v=g
u=B.a.j(d)
t=J.b4(e,new C.b68(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fd)
case 3:return A.f(null,w)}})
return A.h($async$Fd,w)},
dle(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.dU(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQg(x,x,u,t,v,s)
return r},
cQg(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jX(),i=d==null,h=D.Qh[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qh[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bD(256)
o=new A.z(q,new C.b67(),A.S(q).k("z<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bD(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bz(B.p.kQ(j.bD(256),16),2,"0")
t=B.d.bf(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aMe[x]
k=D.aHj[x]
return new C.mh("vd_"+1000*Date.now()+"_"+e+"_"+j.bD(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dlf(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Z())},
dlf(d,e){var x,w=J.dU(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kQ(d.bD(256),16),2,"0")
return B.d.f9(w)},
cMI:function cMI(d){this.a=d},
cMH:function cMH(d,e){this.a=d
this.b=e},
cME:function cME(d){this.a=d},
cMF:function cMF(d){this.a=d},
cMG:function cMG(d,e){this.a=d
this.b=e},
mh:function mh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b6h:function b6h(){},
b6i:function b6i(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(){},
b6c:function b6c(){},
b6d:function b6d(){},
b6e:function b6e(){},
b6f:function b6f(){},
b6g:function b6g(){},
b68:function b68(){},
b67:function b67(){},
Fb:function Fb(d,e){this.c=d
this.a=e},
a7F:function a7F(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cih:function cih(){},
cig:function cig(d,e){this.a=d
this.b=e},
cie:function cie(d){this.a=d},
cif:function cif(d,e){this.a=d
this.b=e},
cii:function cii(d){this.a=d},
cim:function cim(d){this.a=d},
cin:function cin(d,e){this.a=d
this.b=e},
cil:function cil(d,e,f){this.a=d
this.b=e
this.c=f},
cik:function cik(d,e){this.a=d
this.b=e},
cij:function cij(d,e){this.a=d
this.b=e},
cio:function cio(d){this.a=d},
Qi:function Qi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
axR:function axR(d,e){this.c=d
this.a=e},
Fa:function Fa(d,e){this.c=d
this.a=e},
ayM:function ayM(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
cib:function cib(d){this.a=d},
cic:function cic(d){this.a=d},
cid:function cid(d){this.a=d},
cia:function cia(d,e){this.a=d
this.b=e},
ci7:function ci7(d){this.a=d},
ci8:function ci8(d){this.a=d},
ci6:function ci6(d,e){this.a=d
this.b=e},
ci9:function ci9(d){this.a=d},
ci5:function ci5(d){this.a=d},
aF2:function aF2(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aF3:function aF3(d,e,f){this.c=d
this.d=e
this.a=f},
ayT:function ayT(d,e){this.c=d
this.a=e},
aF1:function aF1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctQ:function ctQ(d){this.a=d},
ctR:function ctR(d){this.a=d},
azZ:function azZ(d){this.a=d},
aur:function aur(d,e){this.c=d
this.a=e},
dld(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).de(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o6(x,C.d_G(u,!1),D.X2,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg",u)
t=C.dlc(w)
if(t!=null)return new C.o6(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X3,"TikTok",q,q)
s=C.dlb(x,w)
if(s!=null)return s
r=C.dla(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o6(x,x,D.baR,"Video",q,q)
return q},
dlb(d,e){var x,w,v=null,u="/embed/captioned/?cr=1&v=14",t="Instagram",s=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).de(e)
if(s!=null){x=s.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/reel/"+x+u,D.Ei,t,v,v)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).de(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/p/"+x+u,D.Ei,t,v,v)}return v},
dla(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o6(d,"https://www.facebook.com/plugins/video.php?href="+A.f7(2,d,B.aL,!1)+"&show_text=false&width=734",D.X4,"Facebook",null,null)},
dlc(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).de(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).de(d)
return x==null?null:x.b[1]},
Ff:function Ff(d,e){this.a=d
this.b=e},
o6:function o6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZY:function ZY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayN:function ayN(d,e){var _=this
_.d=$
_.cz$=d
_.aN$=e
_.c=_.a=null},
aA2:function aA2(d,e){this.c=d
this.a=e},
ckO:function ckO(d){this.a=d},
ckP:function ckP(d){this.a=d},
AZ:function AZ(d,e){this.c=d
this.a=e},
acf:function acf(){},
dBA(d){var x=window
x.toString
A.h4(x,"message",new C.cJp(d),!1,y._)},
Fc:function Fc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayO:function ayO(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ciu:function ciu(d){this.a=d},
cis:function cis(d){this.a=d},
cir:function cir(d){this.a=d},
cit:function cit(d){this.a=d},
ciq:function ciq(d){this.a=d},
cip:function cip(d){this.a=d},
cJp:function cJp(d){this.a=d},
d_G(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://www.youtube.com")
if(e)x.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bf(x,"&")},
dl7(d,e){var x,w
if(e){x=d.toLowerCase()
w=B.a.p(x,"youtube")||B.a.p(x,"youtu.be")}else w=!1
if(w){w=A.bz(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-vd-player { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    id="ngmy-vd-player"\n    src="'+A.bz(w,'"',"&quot;")+"\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen\"\n    referrerpolicy=\"strict-origin-when-cross-origin\"\n    allowfullscreen>\n  </iframe>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try {\n        if (window.parent && window.parent !== window) {\n          window.parent.postMessage('ngmy-vd-ended', '*');\n        }\n      } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    var ngmyPlayer;\n    function onYouTubeIframeAPIReady() {\n      ngmyPlayer = new YT.Player('ngmy-vd-player', {\n        events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}w=A.bz(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body {\n      width: 100%;\n      height: 100%;\n      background: #000;\n      overflow: hidden;\n    }\n    iframe {\n      position: absolute;\n      inset: 0;\n      width: 100%;\n      height: 100%;\n      border: none;\n    }\n  </style>\n</head>\n<body>\n  <iframe\n    id="ngmy-vd-frame"\n    src="'+A.bz(w,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dl8(d){if(d<=4)return 0
return B.p.aU(d-1,4)*4},
dl9(d){var x
if($.JH().a==null)return!1
x=$.xQ().a
return d>=x&&d<x+4},
d_J(){var x=$.amp
if(x!=null)x.a9(0)
$.amp=null
$.xQ().sv(0,0)},
d_I(){var x,w,v,u=$.JH()
if(u.a==null)return
x=$.amp
if(x!=null)x.a9(0)
w=$.d_H
if(w<=4){u=u.a
u.toString
C.cQf(u)
return}x=$.xQ()
v=x.a+4
x.sv(0,v>=w?0:v)
u=u.a
u.toString
C.cQf(u)},
cQf(d){var x=$.amp
if(x!=null)x.a9(0)
x=120
switch(d.c.a){case 0:x=180
break
case 1:x=60
break
case 2:x=90
break
case 3:break
case 4:break
default:x=null}$.amp=A.dr(A.d9(0,0,0,0,x),C.dBL())}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.mh.prototype={
ah(){var x=this
return A.q(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fb.prototype={
S(){return new C.a7F(A.a([],y.e))},
giu(){return this.c}}
C.a7F.prototype={
Y(){var x=this
x.a6()
$.xQ().ae(0,x.gaoV())
C.dBA(x.gb8O())
x.PZ()},
b8f(){if(this.c!=null)this.n(new C.cih())},
b8P(){C.d_I()},
l(){$.xQ().U(0,this.gaoV())
C.d_J()
$.JH().sv(0,null)
this.a4()},
PZ(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PZ=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fe(u.a.c),$async$PZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cig(u,t))
$.b66=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PZ,w)},
PI(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PI=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cie(u))
x=3
return A.b(C.amq(u.a.c),$async$PI)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cif(u,t))
$.b66=J.a5(u.d)
u.c.E(y.q).f.O(A.bb(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PI,w)},
baG(d){var x=this.c
x.toString
A.a9(x,!1).cM(A.eq(new C.cii(d),!1,null,y.H))},
bbb(){var x=this.c
x.toString
return C.SB(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.R,u=v?B.dv:B.dm,t=A.aU(w,w,w,w,B.CD,w,w,w,new C.cim(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zA(A.G(A.a([A.I(new A.M(B.i2,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.N,!0,w,A.aZ(!1,w,!0,new A.M(B.aG,A.a4(B.f2,B.Q,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbba(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Z)],r),B.j,w,B.e,B.f,0,w,w),w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Lr,s,w),A.I(x.e?B.jj:new A.hZ($.JH(),new C.cin(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahw(B.Q,B.yN,B.o3,D.bDr,x.e?w:new C.cio(x)),w)}}
C.Qi.prototype={
b6o(d){var x,w=$.xQ().a,v=this.d
if(C.dl9(v)){v=this.c.a
x=d.gaBA()
return new C.Fc(v+"_mini",d.gaBA(),!0,d.gae6(),!1,new A.dm(v+"_"+x+"_"+A.o(w),y.W))}return new C.ZY(d,!0,!0,"Fold "+(B.p.aU(v,4)+1)+"/"+B.p.aU(this.e+4-1,4),null)},
C(d){var x=this,w=null,v=A.n(14),u=A.n(14),t=A.W(B.c.t(0.1),B.n,1),s=A.a([new A.ag(0,B.w,B.Q.t(0.18),B.cc,8)],y.V),r=A.n(10),q=x.c,p=x.r,o=y.p
return A.aT(!1,B.N,!0,w,A.aZ(!1,v,!0,A.B(A.a([A.I(A.x(w,A.cW(r,A.jt(A.B(A.a([new C.axR(q,w),A.I(p!=null?x.b6o(p):A.x(w,A.B(A.a([A.a4(B.i7,B.ly,w,w,22),B.aj,A.j("YouTube",w,w,w,w,A.l(w,w,B.c.t(0.7),w,w,w,w,w,w,w,w,7,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u0,w,w,w,w,w,w,w,w,1/0),1),A.x(w,A.G(A.a([A.a4(B.vP,B.Q.t(0.85),w,w,9),D.blF,A.j("Tap",w,w,w,w,A.l(w,w,B.c.t(0.5),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],o),B.j,w,B.ap,B.f,0,w,w),B.h,B.a8,w,w,w,w,w,D.aib,w,w,w)],o),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,w,w,new A.u(w,w,t,u,s,D.Ph,B.l),w,w,w,B.eI,w,w,w),1),B.aj,A.j(q.b,1,B.af,w,w,A.l(w,w,A.U(d).ax.k3,w,w,w,w,w,w,w,w,9,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.y,1,B.af,w,w,A.l(w,w,A.U(d).ax.k3.t(0.55),w,w,w,w,w,w,w,w,8,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.j(q.c,1,B.af,w,w,A.l(w,w,B.Q.t(0.85),w,w,w,w,w,w,w,w,7,w,w,w,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w)],o),B.j,B.e,B.f,0,B.k),w,!0,w,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Z)}}
C.axR.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a4(B.qL,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lg,x,x,x)}}
C.Fa.prototype={
S(){return new C.ayM()}}
C.ayM.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.R,v=w?B.dv:B.dm,u=A.aU(x,x,x,x,B.CD,x,x,x,new C.cib(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cX(!0,A.B(A.a([new A.M(D.Lr,A.G(A.a([u,A.I(new A.zA(A.G(A.a([A.I(new A.M(B.i2,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aT(!1,B.N,!0,x,A.aZ(!1,x,!0,new A.M(B.aG,A.a4(B.f2,B.Q,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cic(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)],s),B.j,x,B.e,B.f,0,x,x),x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.hZ($.JH(),new C.cid(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aF2.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.Q.t(0.35),B.eN,28),new A.ag(0,B.w,B.q.t(0.45),B.cP,18)],y.V),p=A.W(B.c.t(0.12),B.n,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fc(w+"_full",v,!1,x.gae6(),!1,new A.dm(w+"_full_"+v,y.W))
x=v}else x=new C.ayT(u.r,t)}else x=new C.aur(n,t)
else x=D.bQs
return A.x(t,A.cW(o,A.jt(A.B(A.a([new C.aF3(n,m,t),A.I(x,1),new C.aF1(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.u(t,t,p,r,q,D.Ph,B.l),t,s*2.05,t,B.bc,t,t,s)}}
C.aF3.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hX(s)
x=new A.dc(r,s)
w=x.gFk()===0?12:x.gFk()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.eo:B.fX)===B.eo?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l5,t,t,t),B.b9,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.as0,B.dP,D.are,B.dP,D.as4],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a4(B.Cx,B.Q.t(0.9),t,t,12),B.dP,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aiZ,t,t,t)}}
C.ayT.prototype={
C(d){var x=null
return A.x(x,A.b3(A.B(A.a([A.a4(B.vF,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eH(D.av2,D.bBn,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.Q,x,x,x,x,x,new A.aK(B.Q.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.u0,x,x,x,x,x,x,x,x,1/0)}}
C.aF1.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoP(B.NW,"YouTube",t===0,s,new C.ctQ(v))
t=v.aoP(B.i6,"Device",t===1,s,new C.ctR(v))
x=s?"Power off":"Power on"
w=s?D.NX:D.app
return A.x(u,A.G(A.a([r,B.Y,t,B.b9,A.aU(u,u,u,u,A.a4(w,s?B.aH:B.dy,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dr)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiJ,u,u,u)},
aoP(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.Q:B.ab
w=f&&g?B.Q.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aT(!1,B.N,!0,v,A.aZ(!1,A.n(10),!0,new A.M(B.jv,A.B(A.a([A.a4(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.Z),1)}}
C.azZ.prototype={
C(d){return D.a9M}}
C.aur.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l2,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pX("Serial",v.c),r=x.pX("Model",v.d),q=x.pX("Device ID",v.e),p=x.pX("IMEI",v.r),o=x.pX("MAC",v.f),n=x.pX("OS",v.w+" "+v.x),m=x.pX("Location",v.y+", "+v.z),l=x.pX("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pX("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.aj,t,B.S,s,r,q,p,o,n,m,l,k,x.pX("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pX(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.j(e,x,x,x,x,D.bsq,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Ff.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o6.prototype={
gaBA(){var x=this.f
if(x!=null&&x.length!==0)return C.d_G(x,!0)
return this.b},
gae6(){var x=this.c
return x===D.X2||x===D.X3||x===D.Ei||x===D.X4}}
C.ZY.prototype={
S(){return new C.ayN(null,null)}}
C.ayN.prototype={
Y(){this.a6()
var x=A.bD(null,B.q2,null,1,null,this)
x.kN(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMv()},
C(d){var x,w=this,v=null,u=w.a.c,t=A.fl(v,new A.u(v,v,v,v,v,new A.ax(B.d3,B.bW,B.C,A.a([B.B,B.q.t(0.55)],y.O),v,v),B.l),B.cl),s=y.Y,r=w.d
r===$&&A.c()
r=A.cM(B.ho,r,v)
x=B.c.t(0.92)
s=A.b3(new A.dS(new A.bg(r,new A.bv(0.72,1,s),s.k("bg<bp.T>")),!1,A.a4(B.i7,x,v,v,20),v),v,v,v)
w.a.toString
r=B.c.t(0.22)
x=A.n(4)
w.a.toString
u=A.a([new C.aA2(u,v),t,s,A.bs(v,A.x(v,A.j("WAIT",v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,5,v,v,B.u,v,v,!0,v,0.4,v,v,v,v,v,v),v,v,v),B.h,v,v,new A.u(r,v,v,x,v,v,B.l),v,v,v,new A.V(3,1,3,1),v,v,v),v,v,v,2,2,v)],y.p)
t=w.a
t=t.f
s=B.c.t(0.75)
u.push(A.bs(v,A.j(t,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,5,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,3,v))
t=w.a.c
s=B.c.t(0.85)
u.push(A.bs(3,A.j(t.d,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,6,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,3,v,v,v))
return new A.b9(B.am,v,B.cE,B.m,u,v)}}
C.aA2.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k8(v,new C.ckO(this),B.bm,!0,x,x,new C.ckP(this),x)
return new C.AZ(w,x)}}
C.AZ.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.ua,B.Is],y.O),B.i7)
break
case 1:x=new A.aN(A.a([B.u0,D.ad9],y.O),B.jE)
break
case 2:x=new A.aN(A.a([D.aeA,D.acE],y.O),B.C4)
break
case 3:x=new A.aN(A.a([B.a_,B.dK],y.O),B.Ns)
break
case 4:x=new A.aN(A.a([B.a8,B.ak],y.O),B.m6)
break
default:x=v}w=x.a
return A.x(v,A.b3(A.a4(x.b,B.Q.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.ax(B.ar,B.aA,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acf.prototype={
l(){var x=this,w=x.aN$
if(w!=null)w.U(0,x.gd9())
x.aN$=null
x.a4()},
bm(){this.bA()
this.by()
this.da()}}
C.Fc.prototype={
S(){return new C.ayO()}}
C.ayO.prototype={
bjT(d){var x
if(!this.a.f)return!1
x=d.toLowerCase()
return B.a.p(x,"youtube")||B.a.p(x,"youtu.be")||B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")},
ahG(d,e){if(this.bjT(e)){d.removeAttribute("src")
d.srcdoc=C.dl7(e,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
Y(){var x,w,v=this
v.a6()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aQ()
v.d=x
try{$.JI()
$.oE().u0(x,new C.ciu(v),!0)}catch(w){v.r=!0
v.f=!1}},
aT(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cip(w))
x=w.e
x.toString
w.ahG(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.jt(A.b3(A.a4(B.O7,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai8(u,B.rw,x)],y.p)
if(v.f)x.push(A.jt(A.b3(new A.ao(w,w,D.aac,u),u,u,u),B.bX,!0))
return new A.b9(B.am,u,B.cE,B.m,x,u)}}
var z=a.updateTypes(["m(mh)","~()","Fb(R)","mh(Y<@,@>)","a0(mh)","Y<m,@>(mh)","at<~>()","Fa(R)","hZ<P>(R,o6?,p?)","Qi(R,P)","ti(R,o6?,p?)","AZ(R,ai,dh?)"])
C.cMI.prototype={
$1(d){return new C.Fb(this.a,null)},
$S:z+2}
C.cMH.prototype={
$1(d){var x,w=null,v=A.U(d),u=A.j("YouTube, TikTok, Instagram, or Facebook \u2014 4 devices play at a time, then rotates through all "+this.a+".",w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=this.b
v=v.ax.a===B.R?B.cr:B.aa
x=y.p
v=A.B(A.a([u,B.ai,A.au(w,B.G,!0,w,!0,B.m,w,A.av(),t,w,w,w,w,w,2,A.bh(w,new A.b5(4,A.n(14),B.bx),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"https://youtube.com/watch?v=\u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.r,!0,w,!0,w,!1,w,B.J,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.A,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.F,w,B.L,w,w,w,w)],x),B.ae,B.e,B.O,0,B.k)
return A.dt(A.a([A.bX(!1,B.xK,w,w,!0,w,new C.cME(d),w,w),A.bX(!1,B.bq,w,w,!0,w,new C.cMF(d),w,w),A.bJ(D.bE5,new C.cMG(d,t),A.bw(B.Q,w,w,w,w,w,w,w,w,w,w,w))],x),w,w,w,v,w,w,w,w,D.bD_)},
$S:14}
C.cME.prototype={
$0(){C.d_J()
$.JH().sv(0,null)
A.a9(this.a,!1).T(null)},
$S:0}
C.cMF.prototype={
$0(){A.a9(this.a,!1).T(null)
return null},
$S:0}
C.cMG.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a9(this.a,!1).T(x)
return null},
$S:0}
C.b6h.prototype={
$1(d){return C.d_K(A.K(d,y.N,y.z))},
$S:z+3}
C.b6i.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+4}
C.b69.prototype={
$1(d){return d.c},
$S:z+0}
C.b6a.prototype={
$1(d){return d.r},
$S:z+0}
C.b6b.prototype={
$1(d){return d.f},
$S:z+0}
C.b6c.prototype={
$1(d){return d.at},
$S:z+0}
C.b6d.prototype={
$1(d){return d.c},
$S:z+0}
C.b6e.prototype={
$1(d){return d.r},
$S:z+0}
C.b6f.prototype={
$1(d){return d.f},
$S:z+0}
C.b6g.prototype={
$1(d){return d.at},
$S:z+0}
C.b68.prototype={
$1(d){return d.ah()},
$S:z+5}
C.b67.prototype={
$1(d){return B.a.bz(B.p.kQ(d,16),2,"0").toUpperCase()},
$S:71}
C.cih.prototype={
$0(){},
$S:0}
C.cig.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cie.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cif.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cii.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+7}
C.cim.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cin.prototype={
$3(d,e,f){return new A.hZ($.xQ(),new C.cil(this.a,e,this.b),null,null,y.J)},
$S:z+8}
C.cil.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k!=null
if(j){x=A.z8(d,l,y.Q)
x=x==null?l:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(j){u=B.Q.t(0.12)
t=A.n(12)
s=A.W(B.Q.t(0.35),B.n,1)
r=A.a4(B.i7,B.Q,l,l,18)
q=k.d
p=J.a5(m.a.d)
o=$.xQ().a
n=B.i.aR(o+4,1,p)
u=A.a([A.x(l,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" \xb7 "+("Devices "+A.o(o+1)+"\u2013"+n+" of "+p)+" (4 at a time)",l,l,l,l,A.l(l,l,m.c?B.c:B.a_,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],x),B.j,l,B.e,B.f,0,l,l),B.h,l,l,new A.u(u,l,s,t,l,l,B.l),l,l,B.cF,B.eq,l,l,1/0)],x)
if(w){t=A.n(16)
s=k.b
B.d.A(u,A.a([A.cW(t,new A.iX(1.7777777777777777,new C.Fc("fleet_master",s,!1,k.gae6(),!0,new A.dm("fleet_master_"+s+"_"+e,y.W)),l),B.av),B.S],x))}B.d.A(v,u)}u=m.a
t=u.d
j=j?"Only 4 phones play at once. When the video ends, the next 4 start \u2014 then loops through all "+J.a5(t)+".":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(j,l,l,l,l,A.l(l,l,A.U(d).ax.k3.t(0.65),l,l,l,l,l,l,l,l,13,l,l,l,l,1.4,!0,l,l,l,l,l,l,l,l),l,l,l))
return A.yi(0,B.m,l,B.r,l,l,l,l,!1,l,B.W,!1,A.a([new A.jL(new A.M(B.AF,A.B(v,B.t,B.e,B.f,0,B.k),l),l),new A.og(D.aip,A.apW(new A.ng(new C.cik(u,k),J.a5(u.d),!1,!0,!0,A.uH(),l),D.bmh),l)],x))},
$S:1466}
C.cik.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qi(w,e,J.a5(x.d),new C.cij(x,w),this.b,null)},
$S:z+9}
C.cij.prototype={
$0(){return this.a.baG(this.b)},
$S:0}
C.cio.prototype={
$0(){this.a.PI()
return null},
$S:0}
C.cib.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cic.prototype={
$0(){C.SB(this.a,$.b66)
return null},
$S:0}
C.cid.prototype={
$3(d,e,f){return A.h1(new C.cia(this.a,e))},
$S:z+10}
C.cia.prototype={
$2(d,e){var x,w=null,v=B.i.aR(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b3(A.ct(A.B(A.a([A.j(s,w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.aq,new C.aF2(v,t.a.c,t.e,t.d,new C.ci7(t),new C.ci8(t),new C.ci9(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v1,w,w,B.W),w,w,w)},
$S:1467}
C.ci7.prototype={
$0(){var x=this.a.c
x.toString
C.SB(x,$.b66)
return null},
$S:0}
C.ci8.prototype={
$1(d){var x=this.a
return x.n(new C.ci6(x,d))},
$S:33}
C.ci6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ci9.prototype={
$0(){var x=this.a
return x.n(new C.ci5(x))},
$S:0}
C.ci5.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctQ.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctR.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckO.prototype={
$3(d,e,f){return new C.AZ(this.a.c,null)},
$S:z+11}
C.ckP.prototype={
$3(d,e,f){if(f==null)return e
return new A.b9(B.am,null,B.cE,B.m,A.a([new C.AZ(this.a.c,null),D.a9F],y.p),null)},
$C:"$3",
$R:3,
$S:478}
C.ciu.prototype={
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
x.ahG(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.h4(w,"load",new C.cis(x),!1,v)
w=x.e
w.toString
A.h4(w,"error",new C.cit(x),!1,v)
x=x.e
x.toString
return x},
$S:1468}
C.cis.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cir(x))},
$S:40}
C.cir.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cit.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.ciq(x))},
$S:40}
C.ciq.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cip.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0}
C.cJp.prototype={
$1(d){var x=new A.Az([],[]).EC(d.data,!0),w=x==null?null:J.k(x)
if((w==null?"":w)==="ngmy-vd-ended")this.a.$0()},
$S:1469};(function aliases(){var x=C.acf.prototype
x.aMv=x.l})();(function installTearOffs(){var x=a._instance_0u,w=a._static_0
var v
x(v=C.a7F.prototype,"gaoV","b8f",1)
x(v,"gb8O","b8P",1)
x(v,"gbba","bbb",6)
w(C,"dBL","d_I",1)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uY,[C.cMI,C.cMH,C.b6h,C.b6i,C.b69,C.b6a,C.b6b,C.b6c,C.b6d,C.b6e,C.b6f,C.b6g,C.b68,C.b67,C.cii,C.cin,C.cil,C.cid,C.ci8,C.ckO,C.ckP,C.ciu,C.cis,C.cit,C.cJp])
w(A.U7,[C.cME,C.cMF,C.cMG,C.cih,C.cig,C.cie,C.cif,C.cim,C.cij,C.cio,C.cib,C.cic,C.ci7,C.ci6,C.ci9,C.ci5,C.ctQ,C.ctR,C.cir,C.ciq,C.cip])
w(A.ai,[C.mh,C.o6])
w(A.ac,[C.Fb,C.Fa,C.ZY,C.Fc])
w(A.ad,[C.a7F,C.ayM,C.acf,C.ayO])
w(A.U8,[C.cik,C.cia])
w(A.aD,[C.Qi,C.axR,C.aF2,C.aF3,C.ayT,C.aF1,C.azZ,C.aur,C.aA2,C.AZ])
v(C.Ff,A.avg)
v(C.ayN,C.acf)
x(C.acf,A.dM)})()
A.d2Z(b.typeUniverse,JSON.parse('{"Fb":{"ac":[],"p":[]},"Qi":{"aD":[],"p":[]},"Fa":{"ac":[],"p":[]},"a7F":{"ad":["Fb"]},"axR":{"aD":[],"p":[]},"ayM":{"ad":["Fa"]},"aF2":{"aD":[],"p":[]},"aF3":{"aD":[],"p":[]},"ayT":{"aD":[],"p":[]},"aF1":{"aD":[],"p":[]},"azZ":{"aD":[],"p":[]},"aur":{"aD":[],"p":[]},"ZY":{"ac":[],"p":[]},"AZ":{"aD":[],"p":[]},"ayN":{"ad":["ZY"]},"aA2":{"aD":[],"p":[]},"Fc":{"ac":[],"p":[]},"ayO":{"ad":["Fc"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<ag>"),O:x("ae<C>"),e:x("ae<mh>"),s:x("ae<m>"),p:x("ae<p>"),t:x("ae<P>"),X:x("a8<mh>"),a:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),_:x("z3"),k:x("mh"),N:x("m"),Y:x("bv<aa>"),W:x("dm<m>"),J:x("hZ<P>"),j:x("hZ<o6?>"),E:x("wW<cr>"),q:x("QZ"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bm0=new A.ao(18,18,B.Id,null)
D.a9F=new A.dy(B.M,null,null,D.bm0,null)
D.NX=new A.O(983224,"MaterialIcons",!1)
D.atr=new A.a6(D.NX,48,B.bb,null,null,null)
D.bs5=new A.H(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC4=new A.y("Powered off",null,D.bs5,null,null,null,null,null,null,null,null)
D.aFI=x([D.atr,B.y,D.bC4],y.p)
D.afM=new A.eT(B.W,B.e,B.O,B.j,null,B.k,null,0,D.aFI,null)
D.a9M=new A.dy(B.M,null,null,D.afM,null)
D.aac=new A.hO(2,null,null,null,null,B.T,null,null,null,null)
D.acE=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.ad9=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.aeA=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.aib=new A.V(0,3,0,3)
D.aip=new A.V(10,0,10,88)
D.aiJ=new A.V(12,6,12,10)
D.aiZ=new A.V(14,8,14,6)
D.Lr=new A.V(8,6,15,8)
D.app=new A.O(983222,"MaterialIcons",!1)
D.are=new A.a6(B.qL,14,B.T,null,null,null)
D.apG=new A.O(983420,"MaterialIcons",!1)
D.as0=new A.a6(D.apG,14,B.T,null,null,null)
D.ao9=new A.O(62895,"MaterialIcons",!1)
D.as4=new A.a6(D.ao9,14,B.T,null,null,null)
D.av2=new A.a6(B.f2,16,null,null,null,null)
D.aHG=x([B.ak,B.a_],y.O)
D.Ph=new A.ax(B.ar,B.aA,B.C,D.aHG,null,null)
D.bfY=new A.aN("NGMY OS","14.2.1")
D.bf8=new A.aN("VirtualDroid","13.8.4")
D.bf7=new A.aN("NGMY OS","15.0.0")
D.bfF=new A.aN("VirtualDroid","14.1.2")
D.bf6=new A.aN("NGMY Tab OS","12.9.7")
D.bf5=new A.aN("NGMY OS","13.5.3")
D.beX=new A.aN("VirtualDroid","15.2.0")
D.bfn=new A.aN("NGMY OS","14.8.1")
D.bfK=new A.aN("NGMY Tab OS","13.2.4")
D.bg6=new A.aN("VirtualDroid","12.6.9")
D.beU=new A.aN("NGMY OS","16.0.1")
D.beM=new A.aN("VirtualDroid","14.9.0")
D.bfS=new A.aN("NGMY Tab OS","14.0.3")
D.bfe=new A.aN("NGMY OS","13.1.8")
D.beT=new A.aN("VirtualDroid","13.4.5")
D.bf4=new A.aN("NGMY OS","15.3.2")
D.bfL=new A.aN("NGMY Tab OS","12.4.1")
D.bfU=new A.aN("VirtualDroid","16.1.0")
D.bfm=new A.aN("NGMY OS","14.4.6")
D.bfZ=new A.aN("VirtualDroid","15.0.8")
D.aHj=x([D.bfY,D.bf8,D.bf7,D.bfF,D.bf6,D.bf5,D.beX,D.bfn,D.bfK,D.bg6,D.beU,D.beM,D.bfS,D.bfe,D.beT,D.bf4,D.bfL,D.bfU,D.bfm,D.bfZ],A.bm("ae<+(m,m)>"))
D.bi7=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhG=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhB=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhK=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhx=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhM=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bi9=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhy=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhF=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhO=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhw=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bi1=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bhZ=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhE=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bhW=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bhV=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhv=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhJ=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bhT=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bhY=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qh=x([D.bi7,D.bhG,D.bhB,D.bhK,D.bhx,D.bhM,D.bi9,D.bhy,D.bhF,D.bhO,D.bhw,D.bi1,D.bhZ,D.bhE,D.bhW,D.bhV,D.bhv,D.bhJ,D.bhT,D.bhY],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aMe=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X2=new C.Ff(0,"youtube")
D.X3=new C.Ff(1,"tiktok")
D.Ei=new C.Ff(2,"instagram")
D.X4=new C.Ff(3,"facebook")
D.baR=new C.Ff(4,"other")
D.blF=new A.ao(3,null,null,null)
D.bmh=new A.iN(4,10,8,0.52,null)
D.bCY=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpf=new A.aP(D.bCY,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsq=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBn=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bD_=new A.y("Paste video link",null,null,null,null,null,null,null,null,null,null)
D.bDr=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bE5=new A.y("Play on all devices",null,null,null,null,null,null,null,null,null,null)
D.bQs=new C.azZ(null)})();(function staticFields(){$.d_H=20
$.amp=null
$.b66=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFT","xQ",()=>A.P7(0))
x($,"dFU","JH",()=>A.P7(null))})()};
(a=>{a["dTX70rH0V0VetULijB49S4kAsDI="]=a.current})($__dart_deferred_initializers__);