((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dBN(d,e){A.ab(d,!1).cR(A.eF(new C.cM0(e),!0,null,y.H))},
Sm(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p
var $async$Sm=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:q=$.aeb()
p=q.a
p=p==null?null:p.a
if(p==null)p=""
u=$.am()
t=new A.ag(new A.aM(p,B.a1,B.X),u)
x=3
return A.b(A.c2(null,null,!0,null,new C.cM_(e,t),d,null,!0,y.N),$async$Sm)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dkj(s)
if(r==null){d.E(y.q).f.O(D.bp5)
x=1
break}x=4
return A.b(A.bS(B.fj,null,y.H),$async$Sm)
case 4:if(d.e==null){x=1
break}q.sv(0,r)
d.E(y.q).f.O(A.bc(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" on all "+e+" devices",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Sm,w)},
cZX(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
return new C.mg(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
F4(d){return C.dkm(d)},
dkm(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$F4=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$F4)
case 3:h=a4
g=B.a.j(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.v.aE(0,d,null)
x=y._.b(s)&&J.cz(s)?10:11
break
case 10:l=J.ij(s,y.f)
l=A.eg(l,new C.b5W(),l.$ti.k("L.E"),y.k)
k=A.S(l).k("a8<L.E>")
j=A.E(new A.a8(l,new C.b5X(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.cZY(r)
x=12
return A.b(C.F3(a2,q),$async$F4)
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
case 19:n=C.cZX(A.K(o,y.N,y.z))
m=C.cZY(A.a([n],y.e))
x=21
return A.b(C.F3(a2,m),$async$F4)
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
case 18:case 14:r=C.dkk()
x=22
return A.b(C.F3(a2,r),$async$F4)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$F4,w)},
cZY(d){var x=A.R(d).k("A<1,m>"),w=new A.A(d,new C.b5O(),x).eu(0),v=new A.A(d,new C.b5P(),x).eu(0),u=new A.A(d,new C.b5Q(),x).eu(0),t=new A.A(d,new C.b5R(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cPx(null,r,v,u,w,t));++r}return s},
ama(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$ama=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.F4(d),$async$ama)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b5S(),t).eu(0)
q=s.df(u,new C.b5T(),t).eu(0)
p=s.df(u,new C.b5U(),t).eu(0)
o=s.df(u,new C.b5V(),t).eu(0)
n=C.cPx(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.F3(d,u),$async$ama)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$ama,w)},
F3(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$F3=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$F3)
case 2:v=g
u=B.a.j(d)
t=J.b4(e,new C.b5N(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.ao("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$F3)
case 3:return A.f(null,w)}})
return A.h($async$F3,w)},
dkk(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.dX(20,y.k)
for(x=0;x<20;++x)r[x]=C.cPx(x,x,u,t,v,s)
return r},
cPx(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.kR(),i=d==null,h=D.Qd[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qd[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bG(256)
o=new A.A(q,new C.b5M(),A.R(q).k("A<1,m>")).fj(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bG(10)
u=B.d.fj(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bz(B.p.kQ(j.bG(256),16),2,"0")
t=B.d.bh(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aM2[x]
k=D.aH7[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bG(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dkl(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Z())},
dkl(d,e){var x,w=J.dX(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kQ(d.bG(256),16),2,"0")
return B.d.fj(w)},
cM0:function cM0(d){this.a=d},
cM_:function cM_(d,e){this.a=d
this.b=e},
cLX:function cLX(d){this.a=d},
cLY:function cLY(d){this.a=d},
cLZ:function cLZ(d,e){this.a=d
this.b=e},
mg:function mg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b5W:function b5W(){},
b5X:function b5X(){},
b5O:function b5O(){},
b5P:function b5P(){},
b5Q:function b5Q(){},
b5R:function b5R(){},
b5S:function b5S(){},
b5T:function b5T(){},
b5U:function b5U(){},
b5V:function b5V(){},
b5N:function b5N(){},
b5M:function b5M(){},
F2:function F2(d,e){this.c=d
this.a=e},
a7s:function a7s(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
chH:function chH(d,e){this.a=d
this.b=e},
chF:function chF(d){this.a=d},
chG:function chG(d,e){this.a=d
this.b=e},
chI:function chI(d){this.a=d},
chL:function chL(d){this.a=d},
chM:function chM(d,e){this.a=d
this.b=e},
chK:function chK(d,e){this.a=d
this.b=e},
chJ:function chJ(d,e){this.a=d
this.b=e},
chN:function chN(d){this.a=d},
Q3:function Q3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axB:function axB(d,e){this.c=d
this.a=e},
F1:function F1(d,e){this.c=d
this.a=e},
ayu:function ayu(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
chC:function chC(d){this.a=d},
chD:function chD(d){this.a=d},
chE:function chE(d){this.a=d},
chB:function chB(d,e){this.a=d
this.b=e},
chy:function chy(d){this.a=d},
chz:function chz(d){this.a=d},
chx:function chx(d,e){this.a=d
this.b=e},
chA:function chA(d){this.a=d},
chw:function chw(d){this.a=d},
aEL:function aEL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEM:function aEM(d,e,f){this.c=d
this.d=e
this.a=f},
ayB:function ayB(d,e){this.c=d
this.a=e},
aEK:function aEK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cte:function cte(d){this.a=d},
ctf:function ctf(d){this.a=d},
azH:function azH(d){this.a=d},
aub:function aub(d,e){this.c=d
this.a=e},
dkj(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.as("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/)([a-zA-Z0-9_-]{11})",!0,!1,!1).de(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o5(x,"https://www.youtube.com/embed/"+u+"?autoplay=1&playsinline=1&rel=0&modestbranding=1",D.baF,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dki(w)
if(t!=null)return new C.o5(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.baG,"TikTok",q)
s=C.dkh(x,w)
if(s!=null)return s
r=C.dkg(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o5(x,x,D.baI,"Video",q)
return q},
dkh(d,e){var x,w,v="/embed/captioned/?cr=1&v=14",u="Instagram",t=A.as("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).de(e)
if(t!=null){x=t.b[1]
x.toString
return new C.o5(d,"https://www.instagram.com/reel/"+x+v,D.WY,u,null)}w=A.as("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).de(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o5(d,"https://www.instagram.com/p/"+x+v,D.WY,u,null)}return null},
dkg(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o5(d,"https://www.facebook.com/plugins/video.php?href="+A.f5(2,d,B.aL,!1)+"&show_text=false&width=734",D.baH,"Facebook",null)},
dki(d){var x,w=A.as("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).de(d)
if(w!=null)return w.b[1]
x=A.as("tiktok\\.com/t/(\\w+)",!0,!1,!1).de(d)
return x==null?null:x.b[1]},
F5:function F5(d,e){this.a=d
this.b=e},
o5:function o5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ZL:function ZL(d,e,f){this.c=d
this.d=e
this.a=f},
ayv:function ayv(d,e){var _=this
_.d=$
_.cz$=d
_.aM$=e
_.c=_.a=null},
azL:function azL(d,e){this.c=d
this.a=e},
ckc:function ckc(d){this.a=d},
ckd:function ckd(d){this.a=d},
AT:function AT(d,e){this.c=d
this.a=e},
ac1:function ac1(){},
MT:function MT(d,e,f){this.c=d
this.d=e
this.a=f},
ayw:function ayw(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
chT:function chT(d){this.a=d},
chR:function chR(d){this.a=d},
chQ:function chQ(d){this.a=d},
chS:function chS(d){this.a=d},
chP:function chP(d){this.a=d},
chO:function chO(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.mg.prototype={
ah(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.F2.prototype={
S(){return new C.a7s(A.a([],y.e))},
git(){return this.c}}
C.a7s.prototype={
Y(){this.a5()
this.PX()},
l(){$.aeb().sv(0,null)
this.a3()},
PX(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PX=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.F4(u.a.c),$async$PX)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chH(u,t))
$.b5L=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PX,w)},
PG(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PG=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.chF(u))
x=3
return A.b(C.ama(u.a.c),$async$PG)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.chG(u,t))
$.b5L=J.a5(u.d)
u.c.E(y.q).f.O(A.bc(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PG,w)},
baq(d){var x=this.c
x.toString
A.ab(x,!1).cR(A.eF(new C.chI(d),!1,null,y.H))},
baW(){var x=this.c
x.toString
return C.Sm(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.R,u=v?B.dU:B.dt,t=A.aU(w,w,w,w,B.CC,w,w,w,new C.chL(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zv(A.G(A.a([A.I(new A.M(B.i2,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.N,!0,w,A.aZ(!1,w,!0,new A.M(B.aG,A.a4(B.f2,B.Q,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbaV(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Z)],r),B.j,w,B.e,B.f,0,w,w),w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Ln,s,w),A.I(x.e?B.lu:new A.jO($.aeb(),new C.chM(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0)
return A.cs(w,u,t,w,!1,!1,A.ahj(B.Q,B.yM,B.o2,D.bDg,x.e?w:new C.chN(x)),w)}}
C.Q3.prototype={
C(d){var x=null,w=A.n(14),v=A.n(14),u=A.W(B.c.t(0.1),B.n,1),t=A.a([new A.af(0,B.w,B.Q.t(0.18),B.cc,8)],y.V),s=A.n(10),r=this.c,q=this.e,p=y.p
return A.aT(!1,B.N,!0,x,A.aZ(!1,w,!0,A.B(A.a([A.I(A.x(x,A.cW(s,A.iX(A.B(A.a([new C.axB(r,x),A.I(q!=null?new C.ZL(q,!0,new A.dv(r.a+"_"+q.b,y.W)):A.x(x,A.B(A.a([A.a4(B.i7,B.kq,x,x,22),B.aj,A.j("YouTube",x,x,x,x,A.l(x,x,B.c.t(0.7),x,x,x,x,x,x,x,x,7,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u_,x,x,x,x,x,x,x,x,1/0),1),A.x(x,A.G(A.a([A.a4(B.vM,B.Q.t(0.85),x,x,9),D.blw,A.j("Tap",x,x,x,x,A.l(x,x,B.c.t(0.5),x,x,x,x,x,x,x,x,7,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],p),B.j,x,B.ap,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,D.ai1,x,x,x)],p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,x,x,new A.u(x,x,u,v,t,D.Pe,B.l),x,x,x,B.eH,x,x,x),1),B.aj,A.j(r.b,1,B.af,x,x,A.l(x,x,A.U(d).ax.k3,x,x,x,x,x,x,x,x,9,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),A.j(r.y,1,B.af,x,x,A.l(x,x,A.U(d).ax.k3.t(0.55),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),A.j(r.c,1,B.af,x,x,A.l(x,x,B.Q.t(0.85),x,x,x,x,x,x,x,x,7,x,x,x,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x)],p),B.j,B.e,B.f,0,B.k),x,!0,x,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)}}
C.axB.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a4(B.qK,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lc,x,x,x)}}
C.F1.prototype={
S(){return new C.ayu()}}
C.ayu.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.R,v=w?B.dU:B.dt,u=A.aU(x,x,x,x,B.CC,x,x,x,new C.chC(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.cs(x,v,A.cX(!0,A.B(A.a([new A.M(D.Ln,A.G(A.a([u,A.I(new A.zv(A.G(A.a([A.I(new A.M(B.i2,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aT(!1,B.N,!0,x,A.aZ(!1,x,!0,new A.M(B.aG,A.a4(B.f2,B.Q,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.chD(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)],s),B.j,x,B.e,B.f,0,x,x),x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.jO($.aeb(),new C.chE(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0),x,!1,!1,x,x)}}
C.aEL.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=A.n(36),r=A.a([new A.af(0,B.w,B.Q.t(0.35),B.eM,28),new A.af(0,B.w,B.q.t(0.45),B.cS,18)],y.V),q=A.W(B.c.t(0.12),B.n,2),p=A.n(28),o=v.d,n=v.e
if(n)if(v.f===0){x=v.y
if(x!=null&&x.length!==0){w=o.a
x=new C.MT(w+"_full",x,new A.dv(w+"_full_"+x,y.W))}else x=new C.ayB(v.r,u)}else x=new C.aub(o,u)
else x=D.bQf
return A.x(u,A.cW(p,A.iX(A.B(A.a([new C.aEM(o,n,u),A.I(x,1),new C.aEK(v.f,n,v.w,v.x,u)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,u,u,new A.u(u,u,q,s,r,D.Pe,B.l),u,t*2.05,u,B.bb,u,u,t)}}
C.aEM.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hW(s)
x=new A.db(r,s)
w=x.gFg()===0?12:x.gFg()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.en:B.fX)===B.en?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l4,t,t,t),B.bc,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.be,D.arQ,B.dO,D.ar3,B.dO,D.arU],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a4(B.Cw,B.Q.t(0.9),t,t,12),B.dO,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aiP,t,t,t)}}
C.ayB.prototype={
C(d){var x=null
return A.x(x,A.b3(A.B(A.a([A.a4(B.vC,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eW(D.auT,D.bBc,this.c,A.ei(x,x,x,x,x,x,x,x,x,B.Q,x,x,x,x,x,new A.aK(B.Q.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.u_,x,x,x,x,x,x,x,x,1/0)}}
C.aEK.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoF(B.NT,"YouTube",t===0,s,new C.cte(v))
t=v.aoF(B.i6,"Device",t===1,s,new C.ctf(v))
x=s?"Power off":"Power on"
w=s?D.NU:D.ape
return A.x(u,A.G(A.a([r,B.Y,t,B.bc,A.aU(u,u,u,u,A.a4(w,s?B.aH:B.dx,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dp)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiz,u,u,u)},
aoF(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.ba
else x=f?B.Q:B.ab
w=f&&g?B.Q.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aT(!1,B.N,!0,v,A.aZ(!1,A.n(10),!0,new A.M(B.ju,A.B(A.a([A.a4(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.Z),1)}}
C.azH.prototype={
C(d){return D.a9D}}
C.aub.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l1,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pW("Serial",v.c),r=x.pW("Model",v.d),q=x.pW("Device ID",v.e),p=x.pW("IMEI",v.r),o=x.pW("MAC",v.f),n=x.pW("OS",v.w+" "+v.x),m=x.pW("Location",v.y+", "+v.z),l=x.pW("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pW("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.aj,t,B.S,s,r,q,p,o,n,m,l,k,x.pW("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pW(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.j(e,x,x,x,x,D.bsg,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.F5.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o5.prototype={}
C.ZL.prototype={
S(){return new C.ayv(null,null)}}
C.ayv.prototype={
Y(){this.a5()
var x=A.bD(null,B.q1,null,1,null,this)
x.kN(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMh()},
C(d){var x,w,v,u=null,t=this.a.c,s=A.fj(u,new A.u(u,u,u,u,u,new A.ay(B.d3,B.bW,B.C,A.a([B.B,B.q.t(0.55)],y.O),u,u),B.l),B.cl),r=y.Y,q=this.d
q===$&&A.c()
q=A.cM(B.hp,q,u)
x=B.c.t(0.92)
r=A.b3(new A.dS(new A.bg(q,new A.bu(0.72,1,r),r.k("bg<bp.T>")),!1,A.a4(B.i7,x,u,u,20),u),u,u,u)
q=A.n(4)
x=A.x(u,u,B.h,u,u,B.yF,u,3,u,u,u,u,3)
w=y.p
q=A.bw(u,A.x(u,A.G(A.a([x,new A.ao(2,u,u,u),A.j("LIVE",u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,5,u,u,B.u,u,u,!0,u,0.4,u,u,u,u,u,u),u,u,u)],w),B.j,u,B.e,B.O,0,u,u),B.h,u,u,new A.u(B.kq,u,u,q,u,u,B.l),u,u,u,new A.V(3,1,3,1),u,u,u),u,u,u,2,2,u)
x=this.a.c
v=B.c.t(0.85)
return new A.ba(B.am,u,B.cJ,B.m,A.a([new C.azL(t,u),s,r,q,A.bw(3,A.j(x.d,u,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,6,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,3,u,u,u)],w),u)}}
C.azL.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k7(v,new C.ckc(this),B.bm,!0,x,x,new C.ckd(this),x)
return new C.AT(w,x)}}
C.AT.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.u9,B.Io],y.O),B.i7)
break
case 1:x=new A.aN(A.a([B.u_,D.ad0],y.O),B.jD)
break
case 2:x=new A.aN(A.a([D.aer,D.acv],y.O),B.C4)
break
case 3:x=new A.aN(A.a([B.a_,B.dJ],y.O),B.Np)
break
case 4:x=new A.aN(A.a([B.a8,B.ak],y.O),B.m4)
break
default:x=v}w=x.a
return A.x(v,A.b3(A.a4(x.b,B.Q.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.ay(B.ar,B.aA,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.ac1.prototype={
l(){var x=this,w=x.aM$
if(w!=null)w.T(0,x.gd9())
x.aM$=null
x.a3()},
bn(){this.bA()
this.by()
this.da()}}
C.MT.prototype={
S(){return new C.ayw()}}
C.ayw.prototype={
Y(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aP()
v.d=x
try{$.Jy()
$.oC().u0(x,new C.chT(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.chO(w))
x=w.e
x.toString
x.src=w.a.d}},
C(d){var x,w=this,v=null
if(w.r){x=B.c.t(0.5)
w.a.toString
return A.iX(A.b3(A.a4(B.O4,x,v,v,36),v,v,v),B.q,!0)}w.a.toString
x=w.d
x===$&&A.c()
x=A.a([A.ahW(v,B.rv,x)],y.p)
if(w.f)x.push(A.iX(A.b3(new A.ao(28,28,D.aa3,v),v,v,v),B.bX,!0))
return new A.ba(B.am,v,B.cJ,B.m,x,v)}}
var z=a.updateTypes(["m(mg)","F2(T)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","at<~>()","F1(T)","Kp(T,o5?,q?)","Q3(T,P)","te(T,o5?,q?)","AT(T,ai,dg?)"])
C.cM0.prototype={
$1(d){return new C.F2(this.a,null)},
$S:z+1}
C.cM_.prototype={
$1(d){var x,w=null,v=A.U(d),u=A.j("YouTube, TikTok, Instagram, or Facebook \u2014 plays on all "+this.a+" devices.",w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=this.b
v=v.ax.a===B.R?B.cw:B.aa
x=y.p
v=A.B(A.a([u,B.ai,A.au(w,B.G,!0,w,!0,B.m,w,A.av(),t,w,w,w,w,w,2,A.bh(w,new A.b5(4,A.n(14),B.bz),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"https://youtube.com/watch?v=\u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.r,!0,w,!0,w,!1,w,B.J,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.A,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.F,w,B.L,w,w,w,w)],x),B.ae,B.e,B.O,0,B.k)
return A.dr(A.a([A.bX(!1,B.xI,w,w,!0,w,new C.cLX(d),w,w),A.bX(!1,B.bq,w,w,!0,w,new C.cLY(d),w,w),A.bJ(D.bDV,new C.cLZ(d,t),A.bz(B.Q,w,w,w,w,w,w,w,w,w,w,w))],x),w,w,w,v,w,w,w,w,D.bCP)},
$S:14}
C.cLX.prototype={
$0(){$.aeb().sv(0,null)
A.ab(this.a,!1).U(null)},
$S:0}
C.cLY.prototype={
$0(){A.ab(this.a,!1).U(null)
return null},
$S:0}
C.cLZ.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.ab(this.a,!1).U(x)
return null},
$S:0}
C.b5W.prototype={
$1(d){return C.cZX(A.K(d,y.N,y.z))},
$S:z+2}
C.b5X.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+3}
C.b5O.prototype={
$1(d){return d.c},
$S:z+0}
C.b5P.prototype={
$1(d){return d.r},
$S:z+0}
C.b5Q.prototype={
$1(d){return d.f},
$S:z+0}
C.b5R.prototype={
$1(d){return d.at},
$S:z+0}
C.b5S.prototype={
$1(d){return d.c},
$S:z+0}
C.b5T.prototype={
$1(d){return d.r},
$S:z+0}
C.b5U.prototype={
$1(d){return d.f},
$S:z+0}
C.b5V.prototype={
$1(d){return d.at},
$S:z+0}
C.b5N.prototype={
$1(d){return d.ah()},
$S:z+4}
C.b5M.prototype={
$1(d){return B.a.bz(B.p.kQ(d,16),2,"0").toUpperCase()},
$S:71}
C.chH.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.chF.prototype={
$0(){return this.a.e=!0},
$S:0}
C.chG.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.chI.prototype={
$1(d){return new C.F1(this.a,null)},
$S:z+6}
C.chL.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chM.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=e!=null
if(n){x=A.z3(d,o,y.Q)
x=x==null?o:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(n){u=B.Q.t(0.12)
t=A.n(12)
s=A.W(B.Q.t(0.35),B.n,1)
r=A.a4(B.i7,B.Q,o,o,18)
q=e.d
p=J.a5(this.a.d)
u=A.a([A.x(o,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" on all "+p+" devices",o,o,o,o,A.l(o,o,this.b?B.c:B.a_,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],x),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(u,o,s,t,o,o,B.l),o,o,B.cE,B.ep,o,o,1/0)],x)
if(w){t=A.n(16)
s=e.b
B.d.A(u,A.a([A.cW(t,new A.iV(1.7777777777777777,new A.hf(new C.MT("fleet_master",s,new A.dv("fleet_master_"+s,y.W)),o),o),B.av),B.S],x))}B.d.A(v,u)}u=this.a
t=u.d
n=n?"All "+J.a5(t)+" phones below mirror this video. Tap any phone for full screen.":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(n,o,o,o,o,A.l(o,o,A.U(d).ax.k3.t(0.65),o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o))
return A.ye(0,B.m,o,B.r,o,o,o,o,!1,o,B.W,!1,A.a([new A.jJ(new A.M(B.AE,A.B(v,B.t,B.e,B.f,0,B.k),o),o),new A.of(D.aif,A.apG(new A.ng(new C.chK(u,e),J.a5(u.d),!0,!0,!0,A.uE(),o),D.bm8),o)],x))},
$S:z+7}
C.chK.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Q3(w,new C.chJ(x,w),this.b,null)},
$S:z+8}
C.chJ.prototype={
$0(){return this.a.baq(this.b)},
$S:0}
C.chN.prototype={
$0(){this.a.PG()
return null},
$S:0}
C.chC.prototype={
$0(){return A.ab(this.a,!1).es()},
$S:0}
C.chD.prototype={
$0(){C.Sm(this.a,$.b5L)
return null},
$S:0}
C.chE.prototype={
$3(d,e,f){return A.h1(new C.chB(this.a,e))},
$S:z+9}
C.chB.prototype={
$2(d,e){var x,w,v,u=null,t=B.i.aP(e.b,280,420),s=this.b,r=s==null,q=this.a,p=q.a
if(!r){x=s.d
p=p.c
p="Playing "+x+" on this device \xb7 "+(p.y+", "+p.z)}else{p=p.c
p=p.y+", "+p.z+" \xb7 "+p.at+"\nSeparate from your real phone \u2014 unique serial & identity."}p=A.j(p,u,u,u,u,A.l(u,u,A.U(d).ax.k3.t(0.65),u,u,u,u,u,u,u,u,12,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),B.K,u,u)
x=q.a.c
w=q.e
v=q.d
s=r?u:s.b
return A.b3(A.cv(A.B(A.a([p,B.aq,new C.aEL(t,x,w,v,new C.chy(q),new C.chz(q),new C.chA(q),s,u)],y.p),B.j,B.e,B.f,0,B.k),u,B.r,u,B.v0,u,u,B.W),u,u,u)},
$S:1464}
C.chy.prototype={
$0(){var x=this.a.c
x.toString
C.Sm(x,$.b5L)
return null},
$S:0}
C.chz.prototype={
$1(d){var x=this.a
return x.n(new C.chx(x,d))},
$S:35}
C.chx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.chA.prototype={
$0(){var x=this.a
return x.n(new C.chw(x))},
$S:0}
C.chw.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.cte.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctf.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckc.prototype={
$3(d,e,f){return new C.AT(this.a.c,null)},
$S:z+10}
C.ckd.prototype={
$3(d,e,f){if(f==null)return e
return new A.ba(B.am,null,B.cJ,B.m,A.a([new C.AT(this.a.c,null),D.a9w],y.p),null)},
$C:"$3",
$R:3,
$S:479}
C.chT.prototype={
$1(d){var x,w=this.a,v=document.createElement("iframe")
v.toString
v.src=w.a.d
x=v.style
x.border="none"
x=v.style
x.width="100%"
x=v.style
x.height="100%"
v.allowFullscreen=!0
v.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
v.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
w.e=v
x=y.E.c
A.hg(v,"load",new C.chR(w),!1,x)
v=w.e
v.toString
A.hg(v,"error",new C.chS(w),!1,x)
w=w.e
w.toString
return w},
$S:1465}
C.chR.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chQ(x))},
$S:39}
C.chQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.chS.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.chP(x))},
$S:39}
C.chP.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.chO.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0};(function aliases(){var x=C.ac1.prototype
x.aMh=x.l})();(function installTearOffs(){var x=a._instance_0u
x(C.a7s.prototype,"gbaV","baW",5)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uW,[C.cM0,C.cM_,C.b5W,C.b5X,C.b5O,C.b5P,C.b5Q,C.b5R,C.b5S,C.b5T,C.b5U,C.b5V,C.b5N,C.b5M,C.chI,C.chM,C.chE,C.chz,C.ckc,C.ckd,C.chT,C.chR,C.chS])
w(A.TT,[C.cLX,C.cLY,C.cLZ,C.chH,C.chF,C.chG,C.chL,C.chJ,C.chN,C.chC,C.chD,C.chy,C.chx,C.chA,C.chw,C.cte,C.ctf,C.chQ,C.chP,C.chO])
w(A.ai,[C.mg,C.o5])
w(A.ac,[C.F2,C.F1,C.ZL,C.MT])
w(A.ad,[C.a7s,C.ayu,C.ac1,C.ayw])
w(A.TU,[C.chK,C.chB])
w(A.aD,[C.Q3,C.axB,C.aEL,C.aEM,C.ayB,C.aEK,C.azH,C.aub,C.azL,C.AT])
v(C.F5,A.av0)
v(C.ayv,C.ac1)
x(C.ac1,A.dM)})()
A.d2b(b.typeUniverse,JSON.parse('{"F2":{"ac":[],"q":[]},"Q3":{"aD":[],"q":[]},"F1":{"ac":[],"q":[]},"a7s":{"ad":["F2"]},"axB":{"aD":[],"q":[]},"ayu":{"ad":["F1"]},"aEL":{"aD":[],"q":[]},"aEM":{"aD":[],"q":[]},"ayB":{"aD":[],"q":[]},"aEK":{"aD":[],"q":[]},"azH":{"aD":[],"q":[]},"aub":{"aD":[],"q":[]},"ZL":{"ac":[],"q":[]},"AT":{"aD":[],"q":[]},"ayv":{"ad":["ZL"]},"azL":{"aD":[],"q":[]},"MT":{"ac":[],"q":[]},"ayw":{"ad":["MT"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<af>"),O:x("ae<C>"),e:x("ae<mg>"),s:x("ae<m>"),p:x("ae<q>"),t:x("ae<P>"),X:x("a7<mg>"),_:x("a7<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),k:x("mg"),N:x("m"),Y:x("bu<a9>"),W:x("dv<m>"),j:x("jO<o5?>"),E:x("wT<cq>"),q:x("QK"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.blS=new A.ao(18,18,B.I9,null)
D.a9w=new A.dy(B.M,null,null,D.blS,null)
D.NU=new A.O(983224,"MaterialIcons",!1)
D.ath=new A.a6(D.NU,48,B.ba,null,null,null)
D.brW=new A.H(!0,B.bA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBU=new A.y("Powered off",null,D.brW,null,null,null,null,null,null,null,null)
D.aFw=x([D.ath,B.y,D.bBU],y.p)
D.afC=new A.eS(B.W,B.e,B.O,B.j,null,B.k,null,0,D.aFw,null)
D.a9D=new A.dy(B.M,null,null,D.afC,null)
D.aa3=new A.hN(2,null,null,null,null,B.T,null,null,null,null)
D.acv=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.ad0=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.aer=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.ai1=new A.V(0,3,0,3)
D.aif=new A.V(10,0,10,88)
D.aiz=new A.V(12,6,12,10)
D.aiP=new A.V(14,8,14,6)
D.Ln=new A.V(8,6,15,8)
D.ape=new A.O(983222,"MaterialIcons",!1)
D.ar3=new A.a6(B.qK,14,B.T,null,null,null)
D.apv=new A.O(983420,"MaterialIcons",!1)
D.arQ=new A.a6(D.apv,14,B.T,null,null,null)
D.anZ=new A.O(62895,"MaterialIcons",!1)
D.arU=new A.a6(D.anZ,14,B.T,null,null,null)
D.auT=new A.a6(B.f2,16,null,null,null,null)
D.aHu=x([B.ak,B.a_],y.O)
D.Pe=new A.ay(B.ar,B.aA,B.C,D.aHu,null,null)
D.bfP=new A.aN("NGMY OS","14.2.1")
D.bf_=new A.aN("VirtualDroid","13.8.4")
D.beZ=new A.aN("NGMY OS","15.0.0")
D.bfw=new A.aN("VirtualDroid","14.1.2")
D.beY=new A.aN("NGMY Tab OS","12.9.7")
D.beX=new A.aN("NGMY OS","13.5.3")
D.beO=new A.aN("VirtualDroid","15.2.0")
D.bfe=new A.aN("NGMY OS","14.8.1")
D.bfB=new A.aN("NGMY Tab OS","13.2.4")
D.bfY=new A.aN("VirtualDroid","12.6.9")
D.beL=new A.aN("NGMY OS","16.0.1")
D.beD=new A.aN("VirtualDroid","14.9.0")
D.bfJ=new A.aN("NGMY Tab OS","14.0.3")
D.bf5=new A.aN("NGMY OS","13.1.8")
D.beK=new A.aN("VirtualDroid","13.4.5")
D.beW=new A.aN("NGMY OS","15.3.2")
D.bfC=new A.aN("NGMY Tab OS","12.4.1")
D.bfL=new A.aN("VirtualDroid","16.1.0")
D.bfd=new A.aN("NGMY OS","14.4.6")
D.bfQ=new A.aN("VirtualDroid","15.0.8")
D.aH7=x([D.bfP,D.bf_,D.beZ,D.bfw,D.beY,D.beX,D.beO,D.bfe,D.bfB,D.bfY,D.beL,D.beD,D.bfJ,D.bf5,D.beK,D.beW,D.bfC,D.bfL,D.bfd,D.bfQ],A.bm("ae<+(m,m)>"))
D.bhZ=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhx=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhs=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhB=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bho=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhD=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bi0=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhp=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhw=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhF=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhn=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bhT=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bhQ=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhv=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bhN=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bhM=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhm=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhA=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bhK=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bhP=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qd=x([D.bhZ,D.bhx,D.bhs,D.bhB,D.bho,D.bhD,D.bi0,D.bhp,D.bhw,D.bhF,D.bhn,D.bhT,D.bhQ,D.bhv,D.bhN,D.bhM,D.bhm,D.bhA,D.bhK,D.bhP],A.bm("ae<+(m,m,a9,a9,m)>"))
D.aM2=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.baF=new C.F5(0,"youtube")
D.baG=new C.F5(1,"tiktok")
D.WY=new C.F5(2,"instagram")
D.baH=new C.F5(3,"facebook")
D.baI=new C.F5(4,"other")
D.blw=new A.ao(3,null,null,null)
D.bm8=new A.iM(4,10,8,0.52,null)
D.bCM=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bp5=new A.aQ(D.bCM,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsg=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBc=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bCP=new A.y("Paste video link",null,null,null,null,null,null,null,null,null,null)
D.bDg=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bDV=new A.y("Play on all devices",null,null,null,null,null,null,null,null,null,null)
D.bQf=new C.azH(null)})();(function staticFields(){$.b5L=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dEV","aeb",()=>A.a2G(null))})()};
(a=>{a["V7lywQZ5jEOfroVDxhBJ0UCFSRs="]=a.current})($__dart_deferred_initializers__);