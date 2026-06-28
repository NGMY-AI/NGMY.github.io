((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCo(d,e){A.a9(d,!1).cM(A.eq(new C.cMy(e),!0,null,y.H))},
Sx(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p
var $async$Sx=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:q=$.aem()
p=q.a
p=p==null?null:p.a
if(p==null)p=""
u=$.am()
t=new A.ag(new A.aM(p,B.a1,B.X),u)
x=3
return A.b(A.c2(null,null,!0,null,new C.cMx(e,t),d,null,!0,y.N),$async$Sx)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dkV(s)
if(r==null){d.E(y.q).f.O(D.bpa)
x=1
break}x=4
return A.b(A.bS(B.fj,null,y.H),$async$Sx)
case 4:if(d.e==null){x=1
break}q.sv(0,r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" on all "+e+" devices",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Sx,w)},
d_t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
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
Fa(d){return C.dkY(d)},
dkY(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fa=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Fa)
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
case 10:l=J.ij(s,y.f)
l=A.eg(l,new C.b6c(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b6d(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_u(r)
x=12
return A.b(C.F9(a2,q),$async$Fa)
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
case 19:n=C.d_t(A.K(o,y.N,y.z))
m=C.d_u(A.a([n],y.e))
x=21
return A.b(C.F9(a2,m),$async$Fa)
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
case 18:case 14:r=C.dkW()
x=22
return A.b(C.F9(a2,r),$async$Fa)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fa,w)},
d_u(d){var x=A.R(d).k("z<1,m>"),w=new A.z(d,new C.b64(),x).eu(0),v=new A.z(d,new C.b65(),x).eu(0),u=new A.z(d,new C.b66(),x).eu(0),t=new A.z(d,new C.b67(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cQ4(null,r,v,u,w,t));++r}return s},
amn(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amn=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fa(d),$async$amn)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.df(u,new C.b68(),t).eu(0)
q=s.df(u,new C.b69(),t).eu(0)
p=s.df(u,new C.b6a(),t).eu(0)
o=s.df(u,new C.b6b(),t).eu(0)
n=C.cQ4(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.F9(d,u),$async$amn)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amn,w)},
F9(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$F9=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$F9)
case 2:v=g
u=B.a.j(d)
t=J.b4(e,new C.b63(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$F9)
case 3:return A.f(null,w)}})
return A.h($async$F9,w)},
dkW(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.dU(20,y.k)
for(x=0;x<20;++x)r[x]=C.cQ4(x,x,u,t,v,s)
return r},
cQ4(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jW(),i=d==null,h=D.Qg[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qg[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bD(256)
o=new A.z(q,new C.b62(),A.R(q).k("z<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bD(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.bz(B.p.kQ(j.bD(256),16),2,"0")
t=B.d.bh(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aM6[x]
k=D.aHb[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bD(99999),"Device "+B.a.bz(B.p.q(e+1),2,"0"),v,l,C.dkX(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Z())},
dkX(d,e){var x,w=J.dU(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.bz(B.p.kQ(d.bD(256),16),2,"0")
return B.d.f9(w)},
cMy:function cMy(d){this.a=d},
cMx:function cMx(d,e){this.a=d
this.b=e},
cMu:function cMu(d){this.a=d},
cMv:function cMv(d){this.a=d},
cMw:function cMw(d,e){this.a=d
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
b6c:function b6c(){},
b6d:function b6d(){},
b64:function b64(){},
b65:function b65(){},
b66:function b66(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(){},
b63:function b63(){},
b62:function b62(){},
F8:function F8(d,e){this.c=d
this.a=e},
a7D:function a7D(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cia:function cia(d,e){this.a=d
this.b=e},
ci8:function ci8(d){this.a=d},
ci9:function ci9(d,e){this.a=d
this.b=e},
cib:function cib(d){this.a=d},
cie:function cie(d){this.a=d},
cif:function cif(d,e){this.a=d
this.b=e},
cid:function cid(d,e){this.a=d
this.b=e},
cic:function cic(d,e){this.a=d
this.b=e},
cig:function cig(d){this.a=d},
Qe:function Qe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axO:function axO(d,e){this.c=d
this.a=e},
F7:function F7(d,e){this.c=d
this.a=e},
ayI:function ayI(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ci5:function ci5(d){this.a=d},
ci6:function ci6(d){this.a=d},
ci7:function ci7(d){this.a=d},
ci4:function ci4(d,e){this.a=d
this.b=e},
ci1:function ci1(d){this.a=d},
ci2:function ci2(d){this.a=d},
ci0:function ci0(d,e){this.a=d
this.b=e},
ci3:function ci3(d){this.a=d},
ci_:function ci_(d){this.a=d},
aEZ:function aEZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aF_:function aF_(d,e,f){this.c=d
this.d=e
this.a=f},
ayP:function ayP(d,e){this.c=d
this.a=e},
aEY:function aEY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctI:function ctI(d){this.a=d},
ctJ:function ctJ(d){this.a=d},
azV:function azV(d){this.a=d},
auo:function auo(d,e){this.c=d
this.a=e},
dkV(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/)([a-zA-Z0-9_-]{11})",!0,!1,!1).de(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o6(x,"https://www.youtube.com/embed/"+u+"?autoplay=1&playsinline=1&rel=0&modestbranding=1",D.baJ,"YouTube","https://img.youtube.com/vi/"+u+"/hqdefault.jpg")
t=C.dkU(w)
if(t!=null)return new C.o6(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.baK,"TikTok",q)
s=C.dkT(x,w)
if(s!=null)return s
r=C.dkS(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o6(x,x,D.baM,"Video",q)
return q},
dkT(d,e){var x,w,v="/embed/captioned/?cr=1&v=14",u="Instagram",t=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).de(e)
if(t!=null){x=t.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/reel/"+x+v,D.X0,u,null)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).de(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/p/"+x+v,D.X0,u,null)}return null},
dkS(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o6(d,"https://www.facebook.com/plugins/video.php?href="+A.f5(2,d,B.aL,!1)+"&show_text=false&width=734",D.baL,"Facebook",null)},
dkU(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).de(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).de(d)
return x==null?null:x.b[1]},
Fb:function Fb(d,e){this.a=d
this.b=e},
o6:function o6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ZU:function ZU(d,e,f){this.c=d
this.d=e
this.a=f},
ayJ:function ayJ(d,e){var _=this
_.d=$
_.cz$=d
_.aM$=e
_.c=_.a=null},
azZ:function azZ(d,e){this.c=d
this.a=e},
ckG:function ckG(d){this.a=d},
ckH:function ckH(d){this.a=d},
AW:function AW(d,e){this.c=d
this.a=e},
acc:function acc(){},
N4:function N4(d,e,f){this.c=d
this.d=e
this.a=f},
ayK:function ayK(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
cim:function cim(d){this.a=d},
cik:function cik(d){this.a=d},
cij:function cij(d){this.a=d},
cil:function cil(d){this.a=d},
cii:function cii(d){this.a=d},
cih:function cih(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.mg.prototype={
ah(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.F8.prototype={
S(){return new C.a7D(A.a([],y.e))},
git(){return this.c}}
C.a7D.prototype={
Y(){this.a4()
this.PZ()},
l(){$.aem().sv(0,null)
this.a3()},
PZ(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PZ=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fa(u.a.c),$async$PZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.cia(u,t))
$.b61=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PZ,w)},
PI(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PI=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.ci8(u))
x=3
return A.b(C.amn(u.a.c),$async$PI)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ci9(u,t))
$.b61=J.a5(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PI,w)},
baB(d){var x=this.c
x.toString
A.a9(x,!1).cM(A.eq(new C.cib(d),!1,null,y.H))},
bb6(){var x=this.c
x.toString
return C.Sx(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.R,u=v?B.du:B.dv,t=A.aU(w,w,w,w,B.CE,w,w,w,new C.cie(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zy(A.G(A.a([A.I(new A.M(B.i2,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.N,!0,w,A.aZ(!1,w,!0,new A.M(B.aG,A.a4(B.f2,B.Q,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbb5(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Z)],r),B.j,w,B.e,B.f,0,w,w),w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Lq,s,w),A.I(x.e?B.kk:new A.jO($.aem(),new C.cif(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahu(B.Q,B.yO,B.o3,D.bDm,x.e?w:new C.cig(x)),w)}}
C.Qe.prototype={
C(d){var x=null,w=A.n(14),v=A.n(14),u=A.W(B.c.t(0.1),B.n,1),t=A.a([new A.af(0,B.w,B.Q.t(0.18),B.cc,8)],y.V),s=A.n(10),r=this.c,q=this.e,p=y.p
return A.aT(!1,B.N,!0,x,A.aZ(!1,w,!0,A.B(A.a([A.I(A.x(x,A.cW(s,A.iY(A.B(A.a([new C.axO(r,x),A.I(q!=null?new C.ZU(q,!0,new A.dv(r.a+"_"+q.b,y.W)):A.x(x,A.B(A.a([A.a4(B.i7,B.kt,x,x,22),B.aj,A.j("YouTube",x,x,x,x,A.l(x,x,B.c.t(0.7),x,x,x,x,x,x,x,x,7,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.u0,x,x,x,x,x,x,x,x,1/0),1),A.x(x,A.G(A.a([A.a4(B.vP,B.Q.t(0.85),x,x,9),D.blA,A.j("Tap",x,x,x,x,A.l(x,x,B.c.t(0.5),x,x,x,x,x,x,x,x,7,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],p),B.j,x,B.ap,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,D.ai6,x,x,x)],p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,x,x,new A.u(x,x,u,v,t,D.Pg,B.l),x,x,x,B.eI,x,x,x),1),B.aj,A.j(r.b,1,B.af,x,x,A.l(x,x,A.U(d).ax.k3,x,x,x,x,x,x,x,x,9,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),A.j(r.y,1,B.af,x,x,A.l(x,x,A.U(d).ax.k3.t(0.55),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),A.j(r.c,1,B.af,x,x,A.l(x,x,B.Q.t(0.85),x,x,x,x,x,x,x,x,7,x,x,x,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x)],p),B.j,B.e,B.f,0,B.k),x,!0,x,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)}}
C.axO.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a4(B.qL,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Lf,x,x,x)}}
C.F7.prototype={
S(){return new C.ayI()}}
C.ayI.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.R,v=w?B.du:B.dv,u=A.aU(x,x,x,x,B.CE,x,x,x,new C.ci5(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cX(!0,A.B(A.a([new A.M(D.Lq,A.G(A.a([u,A.I(new A.zy(A.G(A.a([A.I(new A.M(B.i2,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aT(!1,B.N,!0,x,A.aZ(!1,x,!0,new A.M(B.aG,A.a4(B.f2,B.Q,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.ci6(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)],s),B.j,x,B.e,B.f,0,x,x),x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.jO($.aem(),new C.ci7(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0),x,!1,!1,x,x)}}
C.aEZ.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=A.n(36),r=A.a([new A.af(0,B.w,B.Q.t(0.35),B.eN,28),new A.af(0,B.w,B.q.t(0.45),B.cP,18)],y.V),q=A.W(B.c.t(0.12),B.n,2),p=A.n(28),o=v.d,n=v.e
if(n)if(v.f===0){x=v.y
if(x!=null&&x.length!==0){w=o.a
x=new C.N4(w+"_full",x,new A.dv(w+"_full_"+x,y.W))}else x=new C.ayP(v.r,u)}else x=new C.auo(o,u)
else x=D.bQl
return A.x(u,A.cW(p,A.iY(A.B(A.a([new C.aF_(o,n,u),A.I(x,1),new C.aEY(v.f,n,v.w,v.x,u)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,u,u,new A.u(u,u,q,s,r,D.Pg,B.l),u,t*2.05,u,B.bc,u,u,t)}}
C.aF_.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hX(s)
x=new A.db(r,s)
w=x.gFi()===0?12:x.gFi()
s=B.a.bz(B.p.q(s),2,"0")
r=(r<12?B.eo:B.fX)===B.eo?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l6,t,t,t),B.b9,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.arW,B.dP,D.ar9,B.dP,D.as_],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a4(B.Cy,B.Q.t(0.9),t,t,12),B.dP,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aiU,t,t,t)}}
C.ayP.prototype={
C(d){var x=null
return A.x(x,A.b3(A.B(A.a([A.a4(B.vF,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eI(D.auY,D.bBi,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.Q,x,x,x,x,x,new A.aK(B.Q.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.u0,x,x,x,x,x,x,x,x,1/0)}}
C.aEY.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoM(B.NV,"YouTube",t===0,s,new C.ctI(v))
t=v.aoM(B.i6,"Device",t===1,s,new C.ctJ(v))
x=s?"Power off":"Power on"
w=s?D.NW:D.apk
return A.x(u,A.G(A.a([r,B.Y,t,B.b9,A.aU(u,u,u,u,A.a4(w,s?B.aH:B.dy,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dq)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiE,u,u,u)},
aoM(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.Q:B.ab
w=f&&g?B.Q.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aT(!1,B.N,!0,v,A.aZ(!1,A.n(10),!0,new A.M(B.ju,A.B(A.a([A.a4(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.Z),1)}}
C.azV.prototype={
C(d){return D.a9I}}
C.auo.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l3,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pW("Serial",v.c),r=x.pW("Model",v.d),q=x.pW("Device ID",v.e),p=x.pW("IMEI",v.r),o=x.pW("MAC",v.f),n=x.pW("OS",v.w+" "+v.x),m=x.pW("Location",v.y+", "+v.z),l=x.pW("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pW("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.aj,t,B.S,s,r,q,p,o,n,m,l,k,x.pW("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pW(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bZ,A.j(e,x,x,x,x,D.bsl,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fb.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o6.prototype={}
C.ZU.prototype={
S(){return new C.ayJ(null,null)}}
C.ayJ.prototype={
Y(){this.a4()
var x=A.bD(null,B.q2,null,1,null,this)
x.kN(0,!0)
this.d=x},
l(){var x=this.d
x===$&&A.c()
x.l()
this.aMp()},
C(d){var x,w,v,u=null,t=this.a.c,s=A.fl(u,new A.u(u,u,u,u,u,new A.ax(B.d3,B.bW,B.C,A.a([B.B,B.q.t(0.55)],y.O),u,u),B.l),B.cl),r=y.Y,q=this.d
q===$&&A.c()
q=A.cM(B.hp,q,u)
x=B.c.t(0.92)
r=A.b3(new A.dS(new A.bg(q,new A.bu(0.72,1,r),r.k("bg<bp.T>")),!1,A.a4(B.i7,x,u,u,20),u),u,u,u)
q=A.n(4)
x=A.x(u,u,B.h,u,u,B.yH,u,3,u,u,u,u,3)
w=y.p
q=A.bx(u,A.x(u,A.G(A.a([x,new A.an(2,u,u,u),A.j("LIVE",u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,5,u,u,B.u,u,u,!0,u,0.4,u,u,u,u,u,u),u,u,u)],w),B.j,u,B.e,B.O,0,u,u),B.h,u,u,new A.u(B.kt,u,u,q,u,u,B.l),u,u,u,new A.V(3,1,3,1),u,u,u),u,u,u,2,2,u)
x=this.a.c
v=B.c.t(0.85)
return new A.bb(B.am,u,B.cJ,B.m,A.a([new C.azZ(t,u),s,r,q,A.bx(3,A.j(x.d,u,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,6,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,3,u,u,u)],w),u)}}
C.azZ.prototype={
C(d){var x=null,w=this.c,v=w.e
if(v!=null&&v.length!==0)return A.k8(v,new C.ckG(this),B.bm,!0,x,x,new C.ckH(this),x)
return new C.AW(w,x)}}
C.AW.prototype={
C(d){var x,w,v=null
switch(this.c.c.a){case 0:x=new A.aN(A.a([B.ua,B.Ir],y.O),B.i7)
break
case 1:x=new A.aN(A.a([B.u0,D.ad5],y.O),B.jD)
break
case 2:x=new A.aN(A.a([D.aew,D.acA],y.O),B.C5)
break
case 3:x=new A.aN(A.a([B.a_,B.dK],y.O),B.Nr)
break
case 4:x=new A.aN(A.a([B.a8,B.ak],y.O),B.m6)
break
default:x=v}w=x.a
return A.x(v,A.b3(A.a4(x.b,B.Q.t(0.55),v,v,28),v,v,v),B.h,v,v,new A.u(v,v,v,v,v,new A.ax(B.ar,B.aA,B.C,w,v,v),B.l),v,v,v,v,v,v,v)}}
C.acc.prototype={
l(){var x=this,w=x.aM$
if(w!=null)w.U(0,x.gd9())
x.aM$=null
x.a3()},
bn(){this.bA()
this.by()
this.da()}}
C.N4.prototype={
S(){return new C.ayK()}}
C.ayK.prototype={
Y(){var x,w,v=this
v.a4()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aQ()
v.d=x
try{$.JE()
$.oE().u0(x,new C.cim(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cih(w))
x=w.e
x.toString
x.src=w.a.d}},
C(d){var x,w=this,v=null
if(w.r){x=B.c.t(0.5)
w.a.toString
return A.iY(A.b3(A.a4(B.O6,x,v,v,36),v,v,v),B.q,!0)}w.a.toString
x=w.d
x===$&&A.c()
x=A.a([A.ai6(v,B.rw,x)],y.p)
if(w.f)x.push(A.iY(A.b3(new A.an(28,28,D.aa8,v),v,v,v),B.bX,!0))
return new A.bb(B.am,v,B.cJ,B.m,x,v)}}
var z=a.updateTypes(["m(mg)","F8(S)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","at<~>()","F7(S)","Kv(S,o6?,q?)","Qe(S,P)","th(S,o6?,q?)","AW(S,ai,dg?)"])
C.cMy.prototype={
$1(d){return new C.F8(this.a,null)},
$S:z+1}
C.cMx.prototype={
$1(d){var x,w=null,v=A.U(d),u=A.j("YouTube, TikTok, Instagram, or Facebook \u2014 plays on all "+this.a+" devices.",w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=this.b
v=v.ax.a===B.R?B.cr:B.aa
x=y.p
v=A.B(A.a([u,B.ai,A.au(w,B.G,!0,w,!0,B.m,w,A.av(),t,w,w,w,w,w,2,A.bh(w,new A.b5(4,A.n(14),B.bx),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"https://youtube.com/watch?v=\u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.r,!0,w,!0,w,!1,w,B.J,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.A,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.F,w,B.L,w,w,w,w)],x),B.ae,B.e,B.O,0,B.k)
return A.dr(A.a([A.bX(!1,B.xK,w,w,!0,w,new C.cMu(d),w,w),A.bX(!1,B.bq,w,w,!0,w,new C.cMv(d),w,w),A.bJ(D.bE0,new C.cMw(d,t),A.bv(B.Q,w,w,w,w,w,w,w,w,w,w,w))],x),w,w,w,v,w,w,w,w,D.bCV)},
$S:14}
C.cMu.prototype={
$0(){$.aem().sv(0,null)
A.a9(this.a,!1).T(null)},
$S:0}
C.cMv.prototype={
$0(){A.a9(this.a,!1).T(null)
return null},
$S:0}
C.cMw.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a9(this.a,!1).T(x)
return null},
$S:0}
C.b6c.prototype={
$1(d){return C.d_t(A.K(d,y.N,y.z))},
$S:z+2}
C.b6d.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+3}
C.b64.prototype={
$1(d){return d.c},
$S:z+0}
C.b65.prototype={
$1(d){return d.r},
$S:z+0}
C.b66.prototype={
$1(d){return d.f},
$S:z+0}
C.b67.prototype={
$1(d){return d.at},
$S:z+0}
C.b68.prototype={
$1(d){return d.c},
$S:z+0}
C.b69.prototype={
$1(d){return d.r},
$S:z+0}
C.b6a.prototype={
$1(d){return d.f},
$S:z+0}
C.b6b.prototype={
$1(d){return d.at},
$S:z+0}
C.b63.prototype={
$1(d){return d.ah()},
$S:z+4}
C.b62.prototype={
$1(d){return B.a.bz(B.p.kQ(d,16),2,"0").toUpperCase()},
$S:73}
C.cia.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.ci8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ci9.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.cib.prototype={
$1(d){return new C.F7(this.a,null)},
$S:z+6}
C.cie.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cif.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=e!=null
if(n){x=A.z6(d,o,y.Q)
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
u=A.a([A.x(o,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" on all "+p+" devices",o,o,o,o,A.l(o,o,this.b?B.c:B.a_,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],x),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(u,o,s,t,o,o,B.l),o,o,B.cE,B.eq,o,o,1/0)],x)
if(w){t=A.n(16)
s=e.b
B.d.A(u,A.a([A.cW(t,new A.iW(1.7777777777777777,new A.h3(new C.N4("fleet_master",s,new A.dv("fleet_master_"+s,y.W)),o),o),B.av),B.S],x))}B.d.A(v,u)}u=this.a
t=u.d
n=n?"All "+J.a5(t)+" phones below mirror this video. Tap any phone for full screen.":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(n,o,o,o,o,A.l(o,o,A.U(d).ax.k3.t(0.65),o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o))
return A.yh(0,B.m,o,B.r,o,o,o,o,!1,o,B.W,!1,A.a([new A.jJ(new A.M(B.AG,A.B(v,B.t,B.e,B.f,0,B.k),o),o),new A.og(D.aik,A.apT(new A.ng(new C.cid(u,e),J.a5(u.d),!0,!0,!0,A.uG(),o),D.bmc),o)],x))},
$S:z+7}
C.cid.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qe(w,new C.cic(x,w),this.b,null)},
$S:z+8}
C.cic.prototype={
$0(){return this.a.baB(this.b)},
$S:0}
C.cig.prototype={
$0(){this.a.PI()
return null},
$S:0}
C.ci5.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.ci6.prototype={
$0(){C.Sx(this.a,$.b61)
return null},
$S:0}
C.ci7.prototype={
$3(d,e,f){return A.h1(new C.ci4(this.a,e))},
$S:z+9}
C.ci4.prototype={
$2(d,e){var x,w,v,u=null,t=B.i.aP(e.b,280,420),s=this.b,r=s==null,q=this.a,p=q.a
if(!r){x=s.d
p=p.c
p="Playing "+x+" on this device \xb7 "+(p.y+", "+p.z)}else{p=p.c
p=p.y+", "+p.z+" \xb7 "+p.at+"\nSeparate from your real phone \u2014 unique serial & identity."}p=A.j(p,u,u,u,u,A.l(u,u,A.U(d).ax.k3.t(0.65),u,u,u,u,u,u,u,u,12,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),B.K,u,u)
x=q.a.c
w=q.e
v=q.d
s=r?u:s.b
return A.b3(A.ct(A.B(A.a([p,B.aq,new C.aEZ(t,x,w,v,new C.ci1(q),new C.ci2(q),new C.ci3(q),s,u)],y.p),B.j,B.e,B.f,0,B.k),u,B.r,u,B.v1,u,u,B.W),u,u,u)},
$S:1466}
C.ci1.prototype={
$0(){var x=this.a.c
x.toString
C.Sx(x,$.b61)
return null},
$S:0}
C.ci2.prototype={
$1(d){var x=this.a
return x.n(new C.ci0(x,d))},
$S:33}
C.ci0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ci3.prototype={
$0(){var x=this.a
return x.n(new C.ci_(x))},
$S:0}
C.ci_.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctI.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctJ.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.ckG.prototype={
$3(d,e,f){return new C.AW(this.a.c,null)},
$S:z+10}
C.ckH.prototype={
$3(d,e,f){if(f==null)return e
return new A.bb(B.am,null,B.cJ,B.m,A.a([new C.AW(this.a.c,null),D.a9B],y.p),null)},
$C:"$3",
$R:3,
$S:377}
C.cim.prototype={
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
A.hg(v,"load",new C.cik(w),!1,x)
v=w.e
v.toString
A.hg(v,"error",new C.cil(w),!1,x)
w=w.e
w.toString
return w},
$S:1467}
C.cik.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cij(x))},
$S:39}
C.cij.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cil.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cii(x))},
$S:39}
C.cii.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cih.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0};(function aliases(){var x=C.acc.prototype
x.aMp=x.l})();(function installTearOffs(){var x=a._instance_0u
x(C.a7D.prototype,"gbb5","bb6",5)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.uY,[C.cMy,C.cMx,C.b6c,C.b6d,C.b64,C.b65,C.b66,C.b67,C.b68,C.b69,C.b6a,C.b6b,C.b63,C.b62,C.cib,C.cif,C.ci7,C.ci2,C.ckG,C.ckH,C.cim,C.cik,C.cil])
w(A.U3,[C.cMu,C.cMv,C.cMw,C.cia,C.ci8,C.ci9,C.cie,C.cic,C.cig,C.ci5,C.ci6,C.ci1,C.ci0,C.ci3,C.ci_,C.ctI,C.ctJ,C.cij,C.cii,C.cih])
w(A.ai,[C.mg,C.o6])
w(A.ac,[C.F8,C.F7,C.ZU,C.N4])
w(A.ad,[C.a7D,C.ayI,C.acc,C.ayK])
w(A.U4,[C.cid,C.ci4])
w(A.aD,[C.Qe,C.axO,C.aEZ,C.aF_,C.ayP,C.aEY,C.azV,C.auo,C.azZ,C.AW])
v(C.Fb,A.avd)
v(C.ayJ,C.acc)
x(C.acc,A.dM)})()
A.d2I(b.typeUniverse,JSON.parse('{"F8":{"ac":[],"q":[]},"Qe":{"aD":[],"q":[]},"F7":{"ac":[],"q":[]},"a7D":{"ad":["F8"]},"axO":{"aD":[],"q":[]},"ayI":{"ad":["F7"]},"aEZ":{"aD":[],"q":[]},"aF_":{"aD":[],"q":[]},"ayP":{"aD":[],"q":[]},"aEY":{"aD":[],"q":[]},"azV":{"aD":[],"q":[]},"auo":{"aD":[],"q":[]},"ZU":{"ac":[],"q":[]},"AW":{"aD":[],"q":[]},"ayJ":{"ad":["ZU"]},"azZ":{"aD":[],"q":[]},"N4":{"ac":[],"q":[]},"ayK":{"ad":["N4"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<af>"),O:x("ae<C>"),e:x("ae<mg>"),s:x("ae<m>"),p:x("ae<q>"),t:x("ae<P>"),X:x("a8<mg>"),_:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),k:x("mg"),N:x("m"),Y:x("bu<aa>"),W:x("dv<m>"),j:x("jO<o6?>"),E:x("wW<cr>"),q:x("QV"),z:x("@"),Q:x("ai?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.blW=new A.an(18,18,B.Ic,null)
D.a9B=new A.dy(B.M,null,null,D.blW,null)
D.NW=new A.O(983224,"MaterialIcons",!1)
D.atm=new A.a6(D.NW,48,B.bb,null,null,null)
D.bs0=new A.H(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bC_=new A.y("Powered off",null,D.bs0,null,null,null,null,null,null,null,null)
D.aFA=x([D.atm,B.y,D.bC_],y.p)
D.afH=new A.eT(B.W,B.e,B.O,B.j,null,B.k,null,0,D.aFA,null)
D.a9I=new A.dy(B.M,null,null,D.afH,null)
D.aa8=new A.hO(2,null,null,null,null,B.T,null,null,null,null)
D.acA=new A.C(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,B.o)
D.ad5=new A.C(1,0.06274509803921569,0.12549019607843137,0.1568627450980392,B.o)
D.aew=new A.C(1,0.2901960784313726,0.10196078431372549,0.4196078431372549,B.o)
D.ai6=new A.V(0,3,0,3)
D.aik=new A.V(10,0,10,88)
D.aiE=new A.V(12,6,12,10)
D.aiU=new A.V(14,8,14,6)
D.Lq=new A.V(8,6,15,8)
D.apk=new A.O(983222,"MaterialIcons",!1)
D.ar9=new A.a6(B.qL,14,B.T,null,null,null)
D.apB=new A.O(983420,"MaterialIcons",!1)
D.arW=new A.a6(D.apB,14,B.T,null,null,null)
D.ao4=new A.O(62895,"MaterialIcons",!1)
D.as_=new A.a6(D.ao4,14,B.T,null,null,null)
D.auY=new A.a6(B.f2,16,null,null,null,null)
D.aHy=x([B.ak,B.a_],y.O)
D.Pg=new A.ax(B.ar,B.aA,B.C,D.aHy,null,null)
D.bfT=new A.aN("NGMY OS","14.2.1")
D.bf3=new A.aN("VirtualDroid","13.8.4")
D.bf2=new A.aN("NGMY OS","15.0.0")
D.bfA=new A.aN("VirtualDroid","14.1.2")
D.bf1=new A.aN("NGMY Tab OS","12.9.7")
D.bf0=new A.aN("NGMY OS","13.5.3")
D.beS=new A.aN("VirtualDroid","15.2.0")
D.bfi=new A.aN("NGMY OS","14.8.1")
D.bfF=new A.aN("NGMY Tab OS","13.2.4")
D.bg1=new A.aN("VirtualDroid","12.6.9")
D.beP=new A.aN("NGMY OS","16.0.1")
D.beH=new A.aN("VirtualDroid","14.9.0")
D.bfN=new A.aN("NGMY Tab OS","14.0.3")
D.bf9=new A.aN("NGMY OS","13.1.8")
D.beO=new A.aN("VirtualDroid","13.4.5")
D.bf_=new A.aN("NGMY OS","15.3.2")
D.bfG=new A.aN("NGMY Tab OS","12.4.1")
D.bfP=new A.aN("VirtualDroid","16.1.0")
D.bfh=new A.aN("NGMY OS","14.4.6")
D.bfU=new A.aN("VirtualDroid","15.0.8")
D.aHb=x([D.bfT,D.bf3,D.bf2,D.bfA,D.bf1,D.bf0,D.beS,D.bfi,D.bfF,D.bg1,D.beP,D.beH,D.bfN,D.bf9,D.beO,D.bf_,D.bfG,D.bfP,D.bfh,D.bfU],A.bm("ae<+(m,m)>"))
D.bi2=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhB=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhw=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhF=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bhs=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhH=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bi4=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bht=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhA=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhJ=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhr=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bhX=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bhU=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhz=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bhR=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bhQ=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhq=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhE=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bhO=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bhT=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qg=x([D.bi2,D.bhB,D.bhw,D.bhF,D.bhs,D.bhH,D.bi4,D.bht,D.bhA,D.bhJ,D.bhr,D.bhX,D.bhU,D.bhz,D.bhR,D.bhQ,D.bhq,D.bhE,D.bhO,D.bhT],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aM6=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.baJ=new C.Fb(0,"youtube")
D.baK=new C.Fb(1,"tiktok")
D.X0=new C.Fb(2,"instagram")
D.baL=new C.Fb(3,"facebook")
D.baM=new C.Fb(4,"other")
D.blA=new A.an(3,null,null,null)
D.bmc=new A.iM(4,10,8,0.52,null)
D.bCT=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bpa=new A.aP(D.bCT,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsl=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBi=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bCV=new A.y("Paste video link",null,null,null,null,null,null,null,null,null,null)
D.bDm=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bE0=new A.y("Play on all devices",null,null,null,null,null,null,null,null,null,null)
D.bQl=new C.azV(null)})();(function staticFields(){$.b61=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFw","aem",()=>A.a2P(null))})()};
(a=>{a["Cmy4vT0ki0OpTcyvOnh55I1GpFo="]=a.current})($__dart_deferred_initializers__);