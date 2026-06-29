((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCz(d,e){A.a9(d,!1).cM(A.er(new C.cMB(e),!0,null,y.H))},
SA(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p
var $async$SA=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:q=$.aep()
p=q.a
p=p==null?null:p.a
if(p==null)p=""
u=$.am()
t=new A.af(new A.aM(p,B.a0,B.X),u)
x=3
return A.b(A.c2(null,null,!0,null,new C.cMA(e,t),d,null,!0,y.N),$async$SA)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dl2(s)
if(r==null){d.E(y.q).f.O(D.bqb)
x=1
break}x=4
return A.b(A.bS(B.fk,null,y.H),$async$SA)
case 4:if(d.e==null){x=1
break}q.sv(0,r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" on all "+e+" devices",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$SA,w)},
d_D(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
return new C.mi(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
Fd(d){return C.dl5(d)},
dl5(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fd=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Fd)
case 3:h=a4
g=B.a.j(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.v.aE(0,d,null)
x=y._.b(s)&&J.cx(s)?10:11
break
case 10:l=J.ik(s,y.f)
l=A.ea(l,new C.b6a(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6b(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_E(r)
x=12
return A.b(C.Fc(a2,q),$async$Fd)
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
case 19:n=C.d_D(A.K(o,y.N,y.z))
m=C.d_E(A.a([n],y.e))
x=21
return A.b(C.Fc(a2,m),$async$Fd)
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
case 18:case 14:r=C.dl3()
x=22
return A.b(C.Fc(a2,r),$async$Fd)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fd,w)},
d_E(d){var x=A.R(d).k("A<1,m>"),w=new A.A(d,new C.b62(),x).eu(0),v=new A.A(d,new C.b63(),x).eu(0),u=new A.A(d,new C.b64(),x).eu(0),t=new A.A(d,new C.b65(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQ9(null,r,v,u,w,t));++r}return s},
amq(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amq=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fd(d),$async$amq)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.dd(u,new C.b66(),t).eu(0)
q=s.dd(u,new C.b67(),t).eu(0)
p=s.dd(u,new C.b68(),t).eu(0)
o=s.dd(u,new C.b69(),t).eu(0)
n=C.cQ9(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.Fc(d,u),$async$amq)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amq,w)},
Fc(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$Fc=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$Fc)
case 2:v=g
u=B.a.j(d)
t=J.b3(e,new C.b61(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$Fc)
case 3:return A.f(null,w)}})
return A.h($async$Fc,w)},
dl3(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.dU(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQ9(x,x,u,t,v,s)
return r},
cQ9(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jY(),i=d==null,h=D.Qi[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qi[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bC(256)
o=new A.A(q,new C.b60(),A.R(q).k("A<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bC(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.by(B.p.kQ(j.bC(256),16),2,"0")
t=B.d.be(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aML[x]
k=D.aHH[x]
return new C.mi("vd_"+1000*Date.now()+"_"+e+"_"+j.bC(99999),"Device "+B.a.by(B.p.q(e+1),2,"0"),v,l,C.dl4(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Z())},
dl4(d,e){var x,w=J.dU(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.by(B.p.kQ(d.bC(256),16),2,"0")
return B.d.f9(w)},
cMB:function cMB(d){this.a=d},
cMA:function cMA(d,e){this.a=d
this.b=e},
cMx:function cMx(d){this.a=d},
cMy:function cMy(d){this.a=d},
cMz:function cMz(d,e){this.a=d
this.b=e},
mi:function mi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b6a:function b6a(){},
b6b:function b6b(){},
b62:function b62(){},
b63:function b63(){},
b64:function b64(){},
b65:function b65(){},
b66:function b66(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(){},
b61:function b61(){},
b60:function b60(){},
Fa:function Fa(d,e){this.c=d
this.a=e},
a7H:function a7H(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cie:function cie(d,e){this.a=d
this.b=e},
cic:function cic(d){this.a=d},
cid:function cid(d,e){this.a=d
this.b=e},
cif:function cif(d){this.a=d},
cii:function cii(d){this.a=d},
cij:function cij(d,e){this.a=d
this.b=e},
cih:function cih(d,e){this.a=d
this.b=e},
cig:function cig(d,e){this.a=d
this.b=e},
cik:function cik(d){this.a=d},
Qh:function Qh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axO:function axO(d,e){this.c=d
this.a=e},
F9:function F9(d,e){this.c=d
this.a=e},
ayI:function ayI(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ci9:function ci9(d){this.a=d},
cia:function cia(d){this.a=d},
cib:function cib(d){this.a=d},
ci8:function ci8(d,e){this.a=d
this.b=e},
ci5:function ci5(d){this.a=d},
ci6:function ci6(d){this.a=d},
ci4:function ci4(d,e){this.a=d
this.b=e},
ci7:function ci7(d){this.a=d},
ci3:function ci3(d){this.a=d},
aEX:function aEX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEY:function aEY(d,e,f){this.c=d
this.d=e
this.a=f},
ayO:function ayO(d,e){this.c=d
this.a=e},
aEW:function aEW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctK:function ctK(d){this.a=d},
ctL:function ctL(d){this.a=d},
azU:function azU(d){this.a=d},
auo:function auo(d,e){this.c=d
this.a=e},
dl2(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).dc(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o7(x,C.d_C(u,!1),D.X3,"YouTube",u)
t=C.dl1(w)
if(t!=null)return new C.o7(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X4,"TikTok",q)
s=C.dl0(x,w)
if(s!=null)return s
r=C.dl_(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o7(x,x,D.bbQ,"Video",q)
return q},
dl0(d,e){var x,w,v="/embed/captioned/?cr=1&v=14",u="Instagram",t=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).dc(e)
if(t!=null){x=t.b[1]
x.toString
return new C.o7(d,"https://www.instagram.com/reel/"+x+v,D.Em,u,null)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).dc(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o7(d,"https://www.instagram.com/p/"+x+v,D.Em,u,null)}return null},
dl_(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o7(d,"https://www.facebook.com/plugins/video.php?href="+A.eS(2,d,B.aJ,!1)+"&show_text=false&width=734",D.X5,"Facebook",null)},
dl1(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).dc(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).dc(d)
return x==null?null:x.b[1]},
Fe:function Fe(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
Fb:function Fb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayJ:function ayJ(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
ciq:function ciq(d){this.a=d},
cio:function cio(d){this.a=d},
cin:function cin(d){this.a=d},
cip:function cip(d){this.a=d},
cim:function cim(d){this.a=d},
cil:function cil(d){this.a=d},
d_C(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://www.youtube.com")
if(e)x.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.be(x,"&")}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.mi.prototype={
ah(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.Fa.prototype={
T(){return new C.a7H(A.a([],y.e))},
giu(){return this.c}}
C.a7H.prototype={
Y(){this.a5()
this.PZ()},
l(){$.aep().sv(0,null)
this.a3()},
PZ(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PZ=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fd(u.a.c),$async$PZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cie(u,t))
$.b6_=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PZ,w)},
PI(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PI=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.cic(u))
x=3
return A.b(C.amq(u.a.c),$async$PI)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cid(u,t))
$.b6_=J.a5(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PI,w)},
baK(d){var x=this.c
x.toString
A.a9(x,!1).cM(A.er(new C.cif(d),!1,null,y.H))},
bbf(){var x=this.c
x.toString
return C.SA(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.R,u=v?B.du:B.dv,t=A.aU(w,w,w,w,B.CG,w,w,w,new C.cii(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zC(A.G(A.a([A.I(new A.M(B.i2,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.N,!0,w,A.aZ(!1,w,!0,new A.M(B.aG,A.a4(B.f2,B.Q,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbbe(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Z)],r),B.j,w,B.e,B.f,0,w,w),w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Lr,s,w),A.I(x.e?B.kj:new A.jQ($.aep(),new C.cij(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahy(B.Q,B.yP,B.o4,D.bEn,x.e?w:new C.cik(x)),w)}}
C.Qh.prototype={
C(d){var x,w,v=null,u=A.n(14),t=A.n(14),s=A.W(B.c.t(0.1),B.n,1),r=A.a([new A.ag(0,B.w,B.Q.t(0.18),B.cc,8)],y.V),q=A.n(10),p=this.c,o=this.e
if(o!=null){x=p.a
w=o.gaBA()
w=new C.Fb(x+"_mini",o.gaBA(),!0,o.gae8(),new A.dv(x+"_"+w,y.O))
o=w}else o=A.x(v,A.B(A.a([A.a4(B.jD,B.lz,v,v,22),B.aj,A.j("YouTube",v,v,v,v,A.l(v,v,B.c.t(0.7),v,v,v,v,v,v,v,v,7,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.zs,v,v,v,v,v,v,v,v,1/0)
x=y.p
return A.aT(!1,B.N,!0,v,A.aZ(!1,u,!0,A.B(A.a([A.I(A.x(v,A.cW(q,A.iZ(A.B(A.a([new C.axO(p,v),A.I(o,1),A.x(v,A.G(A.a([A.a4(B.vO,B.Q.t(0.85),v,v,9),D.bmC,A.j("Tap",v,v,v,v,A.l(v,v,B.c.t(0.5),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x),B.j,v,B.ap,B.f,0,v,v),B.h,B.a8,v,v,v,v,v,D.aic,v,v,v)],x),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,v,v,new A.u(v,v,s,t,r,D.Pi,B.l),v,v,v,B.eI,v,v,v),1),B.aj,A.j(p.b,1,B.af,v,v,A.l(v,v,A.U(d).ax.k3,v,v,v,v,v,v,v,v,9,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.j(p.y,1,B.af,v,v,A.l(v,v,A.U(d).ax.k3.t(0.55),v,v,v,v,v,v,v,v,8,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.j(p.c,1,B.af,v,v,A.l(v,v,B.Q.t(0.85),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v)],x),B.j,B.e,B.f,0,B.k),v,!0,v,v,v,v,v,v,v,v,v,v,v,this.d,v,v,v,v,v,v,v),B.h,B.B,0,v,v,v,v,v,B.Z)}}
C.axO.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a4(B.qL,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lg,x,x,x)}}
C.F9.prototype={
T(){return new C.ayI()}}
C.ayI.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.R,v=w?B.du:B.dv,u=A.aU(x,x,x,x,B.CG,x,x,x,new C.ci9(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cX(!0,A.B(A.a([new A.M(D.Lr,A.G(A.a([u,A.I(new A.zC(A.G(A.a([A.I(new A.M(B.i2,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aT(!1,B.N,!0,x,A.aZ(!1,x,!0,new A.M(B.aG,A.a4(B.f2,B.Q,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.cia(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)],s),B.j,x,B.e,B.f,0,x,x),x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.jQ($.aep(),new C.cib(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a1,!0,!0),x,!1,!1,x,x)}}
C.aEX.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.ag(0,B.w,B.Q.t(0.35),B.eN,28),new A.ag(0,B.w,B.q.t(0.45),B.cO,18)],y.V),p=A.W(B.c.t(0.12),B.n,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.Fb(w+"_full",v,!1,x.gae8(),new A.dv(w+"_full_"+v,y.O))
x=v}else x=new C.ayO(u.r,t)}else x=new C.auo(n,t)
else x=D.bRm
return A.x(t,A.cW(o,A.iZ(A.B(A.a([new C.aEY(n,m,t),A.I(x,1),new C.aEW(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.u(t,t,p,r,q,D.Pi,B.l),t,s*2.05,t,B.bc,t,t,s)}}
C.aEY.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.eb(s)
s=A.hY(s)
x=new A.db(r,s)
w=x.gFl()===0?12:x.gFl()
s=B.a.by(B.p.q(s),2,"0")
r=(r<12?B.eo:B.fX)===B.eo?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l6,t,t,t),B.b9,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.as2,B.dO,D.arg,B.dO,D.as6],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a4(B.CA,B.Q.t(0.9),t,t,12),B.dO,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aj_,t,t,t)}}
C.ayO.prototype={
C(d){var x=null
return A.x(x,A.b4(A.B(A.a([A.a4(B.vE,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eH(D.av4,D.bCj,this.c,A.ek(x,x,x,x,x,x,x,x,x,B.Q,x,x,x,x,x,new A.aK(B.Q.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.zs,x,x,x,x,x,x,x,x,1/0)}}
C.aEW.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoR(B.NW,"YouTube",t===0,s,new C.ctK(v))
t=v.aoR(B.i6,"Device",t===1,s,new C.ctL(v))
x=s?"Power off":"Power on"
w=s?D.NX:D.apr
return A.x(u,A.G(A.a([r,B.Y,t,B.b9,A.aU(u,u,u,u,A.a4(w,s?B.aH:B.dy,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dq)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiK,u,u,u)},
aoR(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.Q:B.ab
w=f&&g?B.Q.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aT(!1,B.N,!0,v,A.aZ(!1,A.n(10),!0,new A.M(B.jt,A.B(A.a([A.a4(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.Z),1)}}
C.azU.prototype={
C(d){return D.a9P}}
C.auo.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l3,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pY("Serial",v.c),r=x.pY("Model",v.d),q=x.pY("Device ID",v.e),p=x.pY("IMEI",v.r),o=x.pY("MAC",v.f),n=x.pY("OS",v.w+" "+v.x),m=x.pY("Location",v.y+", "+v.z),l=x.pY("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pY("Timezone",v.at)
v=v.ax
return A.eq(A.a([u,B.aj,t,B.S,s,r,q,p,o,n,m,l,k,x.pY("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pY(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bY,A.j(e,x,x,x,x,D.btm,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fe.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o7.prototype={
gaBA(){var x=this.f
if(x!=null&&x.length!==0)return C.d_C(x,!0)
return this.b},
gae8(){var x=this.c
return x===D.X3||x===D.X4||x===D.Em||x===D.X5}}
C.Fb.prototype={
T(){return new C.ayJ()}}
C.ayJ.prototype={
bjX(d){var x
if(!this.a.f)return!1
x=d.toLowerCase()
return B.a.p(x,"youtube")||B.a.p(x,"youtu.be")||B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")},
ahI(d,e){var x
if(this.bjX(e)){d.removeAttribute("src")
x=A.bA(e,"&","&amp;")
d.srcdoc='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body {\n      width: 100%;\n      height: 100%;\n      background: #000;\n      overflow: hidden;\n    }\n    iframe {\n      position: absolute;\n      inset: 0;\n      width: 100%;\n      height: 100%;\n      border: none;\n    }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bA(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'}else{d.removeAttribute("srcdoc")
d.src=e}},
Y(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aP()
v.d=x
try{$.JH()
$.oF().u2(x,new C.ciq(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cil(w))
x=w.e
x.toString
w.ahI(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.iZ(A.b4(A.a4(B.O7,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.aia(u,B.rw,x)],y.p)
if(v.f)x.push(A.iZ(A.b4(new A.ao(w,w,D.aaf,u),u,u,u),B.bW,!0))
return new A.bc(B.am,u,B.cS,B.m,x,u)}}
var z=a.updateTypes(["m(mi)","Fa(S)","mi(Y<@,@>)","a0(mi)","Y<m,@>(mi)","at<~>()","F9(S)","Ky(S,o7?,q?)","Qh(S,P)","tj(S,o7?,q?)"])
C.cMB.prototype={
$1(d){return new C.Fa(this.a,null)},
$S:z+1}
C.cMA.prototype={
$1(d){var x,w=null,v=A.U(d),u=A.j("YouTube, TikTok, Instagram, or Facebook \u2014 plays on all "+this.a+" devices.",w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=this.b
v=v.ax.a===B.R?B.cr:B.aa
x=y.p
v=A.B(A.a([u,B.ai,A.au(w,B.G,!0,w,!0,B.m,w,A.av(),t,w,w,w,w,w,2,A.bg(w,new A.b5(4,A.n(14),B.bx),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"https://youtube.com/watch?v=\u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.r,!0,w,!0,w,!1,w,B.J,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.A,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.E,w,B.L,w,w,w,w)],x),B.ae,B.e,B.O,0,B.k)
return A.dr(A.a([A.bX(!1,B.xL,w,w,!0,w,new C.cMx(d),w,w),A.bX(!1,B.bq,w,w,!0,w,new C.cMy(d),w,w),A.bJ(D.bF1,new C.cMz(d,t),A.bu(B.Q,w,w,w,w,w,w,w,w,w,w,w))],x),w,w,w,v,w,w,w,w,D.bDW)},
$S:14}
C.cMx.prototype={
$0(){$.aep().sv(0,null)
A.a9(this.a,!1).S(null)},
$S:0}
C.cMy.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cMz.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a9(this.a,!1).S(x)
return null},
$S:0}
C.b6a.prototype={
$1(d){return C.d_D(A.K(d,y.N,y.z))},
$S:z+2}
C.b6b.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+3}
C.b62.prototype={
$1(d){return d.c},
$S:z+0}
C.b63.prototype={
$1(d){return d.r},
$S:z+0}
C.b64.prototype={
$1(d){return d.f},
$S:z+0}
C.b65.prototype={
$1(d){return d.at},
$S:z+0}
C.b66.prototype={
$1(d){return d.c},
$S:z+0}
C.b67.prototype={
$1(d){return d.r},
$S:z+0}
C.b68.prototype={
$1(d){return d.f},
$S:z+0}
C.b69.prototype={
$1(d){return d.at},
$S:z+0}
C.b61.prototype={
$1(d){return d.ah()},
$S:z+4}
C.b60.prototype={
$1(d){return B.a.by(B.p.kQ(d,16),2,"0").toUpperCase()},
$S:73}
C.cie.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.cic.prototype={
$0(){return this.a.e=!0},
$S:0}
C.cid.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cif.prototype={
$1(d){return new C.F9(this.a,null)},
$S:z+6}
C.cii.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cij.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=e!=null
if(n){x=A.zb(d,o,y.Q)
x=x==null?o:x.gk9()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(n){u=B.Q.t(0.12)
t=A.n(12)
s=A.W(B.Q.t(0.35),B.n,1)
r=A.a4(B.jD,B.Q,o,o,18)
q=e.d
p=J.a5(this.a.d)
u=A.a([A.x(o,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" on all "+p+" devices",o,o,o,o,A.l(o,o,this.b?B.c:B.a_,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],x),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(u,o,s,t,o,o,B.l),o,o,B.cE,B.eq,o,o,1/0)],x)
if(w){t=A.n(16)
s=e.b
B.d.A(u,A.a([A.cW(t,new A.iX(1.7777777777777777,new A.h4(new C.Fb("fleet_master",s,!1,e.gae8(),new A.dv("fleet_master_"+s,y.O)),o),o),B.av),B.S],x))}B.d.A(v,u)}u=this.a
t=u.d
n=n?"All "+J.a5(t)+" phones below mirror this video. Tap any phone for full screen.":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(n,o,o,o,o,A.l(o,o,A.U(d).ax.k3.t(0.65),o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o))
return A.ym(0,B.m,o,B.r,o,o,o,o,!1,o,B.W,!1,A.a([new A.jL(new A.M(B.AJ,A.B(v,B.t,B.e,B.f,0,B.k),o),o),new A.oh(D.aiq,A.apV(new A.nh(new C.cih(u,e),J.a5(u.d),!1,!0,!0,A.uK(),o),D.bnd),o)],x))},
$S:z+7}
C.cih.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qh(w,new C.cig(x,w),this.b,null)},
$S:z+8}
C.cig.prototype={
$0(){return this.a.baK(this.b)},
$S:0}
C.cik.prototype={
$0(){this.a.PI()
return null},
$S:0}
C.ci9.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cia.prototype={
$0(){C.SA(this.a,$.b6_)
return null},
$S:0}
C.cib.prototype={
$3(d,e,f){return A.h2(new C.ci8(this.a,e))},
$S:z+9}
C.ci8.prototype={
$2(d,e){var x,w=null,v=B.i.aP(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.ct(A.B(A.a([A.j(s,w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.aq,new C.aEX(v,t.a.c,t.e,t.d,new C.ci5(t),new C.ci6(t),new C.ci7(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v0,w,w,B.W),w,w,w)},
$S:1466}
C.ci5.prototype={
$0(){var x=this.a.c
x.toString
C.SA(x,$.b6_)
return null},
$S:0}
C.ci6.prototype={
$1(d){var x=this.a
return x.n(new C.ci4(x,d))},
$S:33}
C.ci4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ci7.prototype={
$0(){var x=this.a
return x.n(new C.ci3(x))},
$S:0}
C.ci3.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctK.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctL.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ciq.prototype={
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
x.ahI(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.hh(w,"load",new C.cio(x),!1,v)
w=x.e
w.toString
A.hh(w,"error",new C.cip(x),!1,v)
x=x.e
x.toString
return x},
$S:1467}
C.cio.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cin(x))},
$S:39}
C.cin.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cip.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cim(x))},
$S:39}
C.cim.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cil.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.a7H.prototype,"gbbe","bbf",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.v1,[C.cMB,C.cMA,C.b6a,C.b6b,C.b62,C.b63,C.b64,C.b65,C.b66,C.b67,C.b68,C.b69,C.b61,C.b60,C.cif,C.cij,C.cib,C.ci6,C.ciq,C.cio,C.cip])
x(A.U6,[C.cMx,C.cMy,C.cMz,C.cie,C.cic,C.cid,C.cii,C.cig,C.cik,C.ci9,C.cia,C.ci5,C.ci4,C.ci7,C.ci3,C.ctK,C.ctL,C.cin,C.cim,C.cil])
x(A.aj,[C.mi,C.o7])
x(A.ac,[C.Fa,C.F9,C.Fb])
x(A.ad,[C.a7H,C.ayI,C.ayJ])
x(A.U7,[C.cih,C.ci8])
x(A.aD,[C.Qh,C.axO,C.aEX,C.aEY,C.ayO,C.aEW,C.azU,C.auo])
w(C.Fe,A.avd)})()
A.d2U(b.typeUniverse,JSON.parse('{"Fa":{"ac":[],"q":[]},"Qh":{"aD":[],"q":[]},"F9":{"ac":[],"q":[]},"a7H":{"ad":["Fa"]},"axO":{"aD":[],"q":[]},"ayI":{"ad":["F9"]},"aEX":{"aD":[],"q":[]},"aEY":{"aD":[],"q":[]},"ayO":{"aD":[],"q":[]},"aEW":{"aD":[],"q":[]},"azU":{"aD":[],"q":[]},"auo":{"aD":[],"q":[]},"Fb":{"ac":[],"q":[]},"ayJ":{"ad":["Fb"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<ag>"),e:x("ae<mi>"),s:x("ae<m>"),p:x("ae<q>"),t:x("ae<P>"),X:x("a8<mi>"),_:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),k:x("mi"),N:x("m"),O:x("dv<m>"),j:x("jQ<o7?>"),E:x("x_<cr>"),q:x("QY"),z:x("@"),Q:x("aj?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.NX=new A.O(983224,"MaterialIcons",!1)
D.att=new A.a6(D.NX,48,B.bb,null,null,null)
D.bt1=new A.H(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bD0=new A.y("Powered off",null,D.bt1,null,null,null,null,null,null,null,null)
D.aG2=x([D.att,B.y,D.bD0],y.p)
D.afN=new A.eU(B.W,B.e,B.O,B.j,null,B.k,null,0,D.aG2,null)
D.a9P=new A.dC(B.M,null,null,D.afN,null)
D.aaf=new A.hP(2,null,null,null,null,B.T,null,null,null,null)
D.aic=new A.V(0,3,0,3)
D.aiq=new A.V(10,0,10,88)
D.aiK=new A.V(12,6,12,10)
D.aj_=new A.V(14,8,14,6)
D.Lr=new A.V(8,6,15,8)
D.apr=new A.O(983222,"MaterialIcons",!1)
D.arg=new A.a6(B.qL,14,B.T,null,null,null)
D.apI=new A.O(983420,"MaterialIcons",!1)
D.as2=new A.a6(D.apI,14,B.T,null,null,null)
D.aoa=new A.O(62895,"MaterialIcons",!1)
D.as6=new A.a6(D.aoa,14,B.T,null,null,null)
D.av4=new A.a6(B.f2,16,null,null,null,null)
D.aI4=x([B.ak,B.a_],A.bm("ae<C>"))
D.Pi=new A.ay(B.ar,B.aA,B.C,D.aI4,null,null)
D.bgX=new A.aR("NGMY OS","14.2.1")
D.bg7=new A.aR("VirtualDroid","13.8.4")
D.bg6=new A.aR("NGMY OS","15.0.0")
D.bgE=new A.aR("VirtualDroid","14.1.2")
D.bg5=new A.aR("NGMY Tab OS","12.9.7")
D.bg4=new A.aR("NGMY OS","13.5.3")
D.bfW=new A.aR("VirtualDroid","15.2.0")
D.bgm=new A.aR("NGMY OS","14.8.1")
D.bgJ=new A.aR("NGMY Tab OS","13.2.4")
D.bh5=new A.aR("VirtualDroid","12.6.9")
D.bfT=new A.aR("NGMY OS","16.0.1")
D.bfL=new A.aR("VirtualDroid","14.9.0")
D.bgR=new A.aR("NGMY Tab OS","14.0.3")
D.bgd=new A.aR("NGMY OS","13.1.8")
D.bfS=new A.aR("VirtualDroid","13.4.5")
D.bg3=new A.aR("NGMY OS","15.3.2")
D.bgK=new A.aR("NGMY Tab OS","12.4.1")
D.bgT=new A.aR("VirtualDroid","16.1.0")
D.bgl=new A.aR("NGMY OS","14.4.6")
D.bgY=new A.aR("VirtualDroid","15.0.8")
D.aHH=x([D.bgX,D.bg7,D.bg6,D.bgE,D.bg5,D.bg4,D.bfW,D.bgm,D.bgJ,D.bh5,D.bfT,D.bfL,D.bgR,D.bgd,D.bfS,D.bg3,D.bgK,D.bgT,D.bgl,D.bgY],A.bm("ae<+(m,m)>"))
D.bj6=new A.e_(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.biF=new A.e_(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.biA=new A.e_(["New York","United States",40.7128,-74.006,"America/New_York"])
D.biJ=new A.e_(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.biw=new A.e_(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.biL=new A.e_(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bj8=new A.e_(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bix=new A.e_(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.biE=new A.e_(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.biN=new A.e_(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.biv=new A.e_(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bj0=new A.e_(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.biY=new A.e_(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.biD=new A.e_(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.biV=new A.e_(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.biU=new A.e_(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.biu=new A.e_(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.biI=new A.e_(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.biS=new A.e_(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.biX=new A.e_(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qi=x([D.bj6,D.biF,D.biA,D.biJ,D.biw,D.biL,D.bj8,D.bix,D.biE,D.biN,D.biv,D.bj0,D.biY,D.biD,D.biV,D.biU,D.biu,D.biI,D.biS,D.biX],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aML=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.X3=new C.Fe(0,"youtube")
D.X4=new C.Fe(1,"tiktok")
D.Em=new C.Fe(2,"instagram")
D.X5=new C.Fe(3,"facebook")
D.bbQ=new C.Fe(4,"other")
D.bmC=new A.ao(3,null,null,null)
D.bnd=new A.iN(4,10,8,0.52,null)
D.bDU=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bqb=new A.aO(D.bDU,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.btm=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCj=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bDW=new A.y("Paste video link",null,null,null,null,null,null,null,null,null,null)
D.bEn=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bF1=new A.y("Play on all devices",null,null,null,null,null,null,null,null,null,null)
D.bRm=new C.azU(null)})();(function staticFields(){$.b6_=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFG","aep",()=>A.a2S(null))})()};
(a=>{a["2ZxxX2gq3DHzyaqg/L73s8WIjxE="]=a.current})($__dart_deferred_initializers__);